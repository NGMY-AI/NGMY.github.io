((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,N,P,A0,S,A9,L,H,E,T,Aa,Q,Ab,U,Ac,Ad,A1,Ae,Af,R,Ag,A2,Ah,Ai,Aj,M,A3,Ak,A4,A5,A6,Al,Am,A7,An,G,Ao,Ap,Aq,A8,Ar,V,O,As,W,At,Au,X,Y,F,Av,I,K,Z,C={
bFw(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bFw=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vR(null,""),$async$bFw)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.W(y.z)
t=A.nm(b1)
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
f.push(A.I(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.Y.az(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.rg(t,a1,B.hZ,"book",E.GA),$async$bFw)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.Rr(a5)
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a3y(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFw,v)},
ai_(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ai_=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vR(null,""),$async$ai_)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.W(y.z)
t=A.nm(b6)
s=x.S
r=A.cW(c1,0,A.dA(4,"count",s),A.U(c1).c)
q=H.a3l(new A.N(r,new C.fNQ(),r.$ti.k("N<ak.E,n>")).aO(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fNP(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.Y.az(b7,null)+"\nAllowed values: style one of "+B.d.aO(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ai_)
case 6:l=c5
k=H.Rr(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.apB(s,D.dE_,r.b(k.h(0,"cover"))?A.a3(r.a(k.h(0,"cover")),x.N,x.z):null)
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
return A.b(m.$1(f+B.Y.az(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ai_)
case 10:l=c5
k=l==null?null:H.Rr(l)
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
case 9:if(h.a!==0){s=h.$ti.k("b8<2>")
p=A.cF(new A.b8(h,s),new C.fNR(),s.k("M.E"),p)
p=H.a3l(A.pG(p,3,A.a4(p).k("M.E")).aO(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cx<1>")
b4=A.C(new A.cx(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.J)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a3y(s,b9),$async$ai_)
case 13:b5=c5
for(s=J.a7(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.apB(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ai_,v)},
hEE(d,e,f){return A.cf(null,B.w.j(0.65),!1,null,new C.fXo(e,f),d,null,!0,!0,x.g2)},
apB:function apB(d,e,f){this.a=d
this.b=e
this.c=f},
fNQ:function fNQ(){},
fNP:function fNP(d){this.a=d},
fNR:function fNR(){},
fXo:function fXo(d,e){this.a=d
this.b=e},
bDk(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bDk=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aV(b1,new C.fB0())){u=null
w=1
break}t=B.d.cE(b1,new C.fB1())
s=$.Q()
r=new A.q_(new A.pz())
q=A.zv(r,D.aRx)
p=A.K()
p.r=B.c.gp(0)
q.ar(D.aRx,p)
o=A.K()
o.r=B.S.gp(0)
o.c=3.6
o.b=B.a9
o.d=B.bw
o.e=B.dP
n=new C.fB6(t)
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
return A.b(r.o0().xD(520,160),$async$bDk)
case 4:w=3
return A.b(b3.hs(B.hg),$async$bDk)
case 3:b0=b3
u=b0==null?null:J.eT(B.dN.gaU(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDk,v)},
fLw(d){return C.ijO(d)},
ijO(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fLw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bjw()
n=d.x!=null&&d.zG(null).length===0
if(d.x!=null)t=n?D.Al:D.JG
else t=d.gUz()?D.JG:D.aMp
w=3
return A.b(C.bDk(d.ax),$async$fLw)
case 3:s=f
p.a=null
if(s!=null)p.a=A.aog(s)
r=A.a5j(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aMp}else{p.c=C.xl(q,!0)
p.b=n?D.Al:D.JG}r.a42(A.h6Y(new C.fLy(p,d,new C.fLz(),t,n,o),null,D.bGd,B.x3))
u=r.jH(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fLw,v)},
fSc(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fSc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fLw(d),$async$fSc)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.aC(q,0,40)
u=Af.Hr(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fSc,v)},
fB0:function fB0(){},
fB1:function fB1(){},
fB6:function fB6(d){this.a=d},
fLz:function fLz(){},
fLy:function fLy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fLx:function fLx(){},
fXR(d,e){var w=0,v=A.j(x.H)
var $async$fXR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,B.w.j(0.55),!0,null,new C.fXV(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fXR)
case 2:return A.h(null,v)}})
return A.i($async$fXR,v)},
bFX(d,e,f,g){return C.irZ(d,e,f,g)},
irZ(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bFX=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gan(e.split(",")):e
r=B.cI.aN(t)}catch(q){r=null}if(r==null||r.length===0){d.L(x.q).f.U(D.fkv)
w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.fXN(g,r,f),d,null,!0,!0,x.H),$async$bFX)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bFX,v)},
fXW(d,e){var w=0,v=A.j(x.H)
var $async$fXW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,null,!0,null,new C.fXZ(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fXW)
case 2:return A.h(null,v)}})
return A.i($async$fXW,v)},
b_B:function b_B(d,e){this.c=d
this.a=e},
c7F:function c7F(){},
bcM:function bcM(d,e){this.b=d
this.a=e},
fXV:function fXV(d,e){this.a=d
this.b=e},
fXS:function fXS(d){this.a=d},
fXT:function fXT(d,e,f){this.a=d
this.b=e
this.c=f},
fXU:function fXU(d,e){this.a=d
this.b=e},
fXN:function fXN(d,e,f){this.a=d
this.b=e
this.c=f},
fXL:function fXL(d){this.a=d},
fXM:function fXM(d,e,f){this.a=d
this.b=e
this.c=f},
fXZ:function fXZ(d,e){this.a=d
this.b=e},
fXX:function fXX(d){this.a=d},
fXY:function fXY(d,e,f){this.a=d
this.b=e
this.c=f},
fFQ(d,e){var w=0,v=A.j(x.y),u,t
var $async$fFQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a36(d),$async$fFQ)
case 3:t=g
J.nR(t,new C.fFR(e))
u=A.aiE(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fFQ,v)},
fFR:function fFR(d){this.a=d},
apN:function apN(d,e,f){this.c=d
this.d=e
this.a=f},
aEw:function aEw(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dPQ:function dPQ(d,e){this.a=d
this.b=e},
dPB:function dPB(d,e){this.a=d
this.b=e},
dPE:function dPE(d,e,f){this.a=d
this.b=e
this.c=f},
dPD:function dPD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPC:function dPC(d,e){this.a=d
this.b=e},
dPF:function dPF(d,e){this.a=d
this.b=e},
dPz:function dPz(){},
dPA:function dPA(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dPy:function dPy(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dPj:function dPj(d){this.a=d},
dPk:function dPk(d,e,f){this.a=d
this.b=e
this.c=f},
dPl:function dPl(d,e){this.a=d
this.b=e},
dPi:function dPi(d){this.a=d},
dPq:function dPq(d,e){this.a=d
this.b=e},
dPh:function dPh(d){this.a=d},
dPr:function dPr(d,e,f){this.a=d
this.b=e
this.c=f},
dPs:function dPs(d,e,f){this.a=d
this.b=e
this.c=f},
dPg:function dPg(d,e){this.a=d
this.b=e},
dPt:function dPt(d,e,f){this.a=d
this.b=e
this.c=f},
dPf:function dPf(d,e){this.a=d
this.b=e},
dPu:function dPu(d,e){this.a=d
this.b=e},
dPe:function dPe(d){this.a=d},
dPv:function dPv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPc:function dPc(){},
dP6:function dP6(d){this.a=d},
dP7:function dP7(d){this.a=d},
dPd:function dPd(d,e){this.a=d
this.b=e},
dPw:function dPw(d,e){this.a=d
this.b=e},
dPb:function dPb(d){this.a=d},
dPx:function dPx(d){this.a=d},
dPa:function dPa(){},
dPm:function dPm(d,e){this.a=d
this.b=e},
dP9:function dP9(d){this.a=d},
dPn:function dPn(d,e,f){this.a=d
this.b=e
this.c=f},
dP8:function dP8(d,e){this.a=d
this.b=e},
dP5:function dP5(d,e){this.a=d
this.b=e},
dPo:function dPo(d){this.a=d},
dPp:function dPp(d,e,f){this.a=d
this.b=e
this.c=f},
dPT:function dPT(){},
dPU:function dPU(d,e){this.a=d
this.b=e},
dPR:function dPR(d){this.a=d},
dPS:function dPS(d){this.a=d},
dPN:function dPN(d,e){this.a=d
this.b=e},
dPO:function dPO(d){this.a=d},
dPG:function dPG(d,e,f){this.a=d
this.b=e
this.c=f},
dPH:function dPH(d,e,f){this.a=d
this.b=e
this.c=f},
dPI:function dPI(d,e,f){this.a=d
this.b=e
this.c=f},
dPJ:function dPJ(d,e,f){this.a=d
this.b=e
this.c=f},
dPK:function dPK(d,e,f){this.a=d
this.b=e
this.c=f},
dPL:function dPL(d,e,f){this.a=d
this.b=e
this.c=f},
dPM:function dPM(d,e,f){this.a=d
this.b=e
this.c=f},
dPV:function dPV(){},
dPW:function dPW(){},
dPX:function dPX(){},
dPY:function dPY(d){this.a=d},
dPP:function dPP(d,e){this.a=d
this.b=e},
hAw(d){return B.d.dP(D.a4F,new C.fGC(d),new C.fGD())},
uP:function uP(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fGC:function fGC(d){this.a=d},
fGD:function fGD(){},
alR:function alR(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aWk:function aWk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
TV:function TV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgo:function bgo(){this.d=$
this.c=this.a=null},
dfw:function dfw(d,e){this.a=d
this.b=e},
dfu:function dfu(d,e){this.a=d
this.b=e},
dfv:function dfv(){},
dfx:function dfx(d,e){this.a=d
this.b=e},
hkU(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bj(J.k(u==null?"":u))
return new C.nw(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
LE(d,e){return C.iip(d,e)},
iip(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$LE=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$LE)
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
o=A.cF(o,new C.fJ6(),o.$ti.k("M.E"),x.B)
n=A.a4(o).k("Y<M.E>")
o=A.C(new A.Y(o,new C.fJ7(),n),n.k("M.E"))
B.d.aZ(o,new C.fJ8())
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
r=J.b7(f,new C.fWs(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aB("String","ngmy_family_book_v1_"+s+"_"+e,B.Y.az(r,null)),$async$Bz)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Bz,v)},
aSp(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aSp=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LE(d,e),$async$aSp)
case 2:u=h
t=J.cC(u)
s=t.bj(u,new C.h3W(f))
if(s===-1)t.c4(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Bz(d,e,u),$async$aSp)
case 3:return A.h(null,v)}})
return A.i($async$aSp,v)},
bDN(d,e,f){var w=0,v=A.j(x.H),u
var $async$bDN=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LE(d,e),$async$bDN)
case 2:u=h
J.nR(u,new C.fFI(f))
w=3
return A.b(C.Bz(d,e,u),$async$bDN)
case 3:return A.h(null,v)}})
return A.i($async$bDN,v)},
bE1(d,e){return C.iio(d,e)},
iio(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bE1=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bE1)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aT(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.OB
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
if(D.DJ.al(0,o.h(0,"foil")))j=A.cO(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.j.D(i==null?25:i,18,36)
h=B.d.q(D.a6m,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.q(D.a5H,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.q(D.a5D,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.d5N,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.Ip(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.OB
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.OB
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bE1,v)},
Sy(d,e,f){return C.iru(d,e,f)},
iru(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Sy=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$Sy)
case 7:r=h
w=8
return A.b(r.aB("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.Y.az(f.aj(),null)),$async$Sy)
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
S0(d,e){return C.iiq(d,e)},
iiq(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$S0=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$S0)
case 7:r=g
q=r.tS("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.LE(d,e),$async$S0)
case 8:if(!j.cI(g)){n=B.a.i(d.toLowerCase())
m=J.lK(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$S0)
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
return A.i($async$S0,v)},
ahi(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ahi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.S0(d,e),$async$ahi)
case 3:s=g
r=J.a7(s)
if(r.gI(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gI(s):"main"
r.J(s,t)
w=5
return A.b(A.az(),$async$ahi)
case 5:w=4
return A.b(g.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ahi)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahi,v)},
a3L(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a3L=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.S0(d,e),$async$a3L)
case 2:s=h
J.hk(s,f)
w=3
return A.b(A.az(),$async$a3L)
case 3:u=h
w=4
return A.b(u.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a3L)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a3L)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a3L)
case 6:return A.h(null,v)}})
return A.i($async$a3L,v)},
nw:function nw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fJ6:function fJ6(){},
fJ7:function fJ7(){},
fJ8:function fJ8(){},
fWs:function fWs(){},
h3W:function h3W(d){this.a=d},
fFI:function fFI(d){this.a=d},
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
bR7:function bR7(d){this.a=d},
irO(d,e,f,g,h,i,j){return A.a5(d,!1).cd(A.ec(new C.fX2(j,i,f,e,h,g),!0,null,x.H))},
RW(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$RW=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.S0(h,g),$async$RW)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.L(x.q).f.U(D.aTR)
u=!1
w=1
break}w=4
return A.b(C.hEE(d,f,e),$async$RW)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ahi(h,g),$async$RW)
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
return A.b(C.Bz(h,r,p),$async$RW)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Sy(h,r,new C.Ip("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$RW)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$RW,v)},
fX2:function fX2(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a_t:function a_t(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBv:function aBv(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dgb:function dgb(d){this.a=d},
dga:function dga(d,e){this.a=d
this.b=e},
dg_:function dg_(d,e){this.a=d
this.b=e},
dfX:function dfX(d,e){this.a=d
this.b=e},
dfy:function dfy(d){this.a=d},
dfz:function dfz(d,e){this.a=d
this.b=e},
dg0:function dg0(d){this.a=d},
dfH:function dfH(d){this.a=d},
dfF:function dfF(d){this.a=d},
dfG:function dfG(d){this.a=d},
dfI:function dfI(d){this.a=d},
dfY:function dfY(d){this.a=d},
dfZ:function dfZ(){},
dfD:function dfD(d){this.a=d},
dfE:function dfE(d,e){this.a=d
this.b=e},
dfJ:function dfJ(d){this.a=d},
dfK:function dfK(d,e){this.a=d
this.b=e},
dg9:function dg9(d){this.a=d},
dg8:function dg8(d,e){this.a=d
this.b=e},
dg7:function dg7(d){this.a=d},
dfU:function dfU(d){this.a=d},
dfT:function dfT(d){this.a=d},
dfV:function dfV(d){this.a=d},
dfA:function dfA(d,e){this.a=d
this.b=e},
dfW:function dfW(d,e){this.a=d
this.b=e},
dfN:function dfN(d){this.a=d},
dfO:function dfO(d){this.a=d},
dfM:function dfM(){},
dfP:function dfP(d){this.a=d},
dfQ:function dfQ(d){this.a=d},
dfR:function dfR(d,e){this.a=d
this.b=e},
dfS:function dfS(d,e,f){this.a=d
this.b=e
this.c=f},
dfL:function dfL(d,e){this.a=d
this.b=e},
dg2:function dg2(d){this.a=d},
dg1:function dg1(){},
dg3:function dg3(d){this.a=d},
dg4:function dg4(d){this.a=d},
dg5:function dg5(d){this.a=d},
dg6:function dg6(d,e){this.a=d
this.b=e},
dfB:function dfB(d){this.a=d},
dfC:function dfC(d){this.a=d},
a_x:function a_x(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgN:function bgN(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dhY:function dhY(d){this.a=d},
dhZ:function dhZ(d){this.a=d},
dhX:function dhX(d){this.a=d},
di_:function di_(d){this.a=d},
dhW:function dhW(d){this.a=d},
di0:function di0(d){this.a=d},
dhV:function dhV(d){this.a=d},
di1:function di1(d,e){this.a=d
this.b=e},
dhU:function dhU(d,e){this.a=d
this.b=e},
di2:function di2(d,e){this.a=d
this.b=e},
a_v:function a_v(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
afH:function afH(d,e,f){this.a=d
this.b=e
this.c=f},
aBy:function aBy(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dgq:function dgq(d,e){this.a=d
this.b=e},
dgp:function dgp(d,e){this.a=d
this.b=e},
dgu:function dgu(d){this.a=d},
dgt:function dgt(d,e){this.a=d
this.b=e},
dgr:function dgr(d){this.a=d},
dgs:function dgs(d){this.a=d},
dgv:function dgv(d){this.a=d},
dgw:function dgw(d){this.a=d},
dgo:function dgo(d,e){this.a=d
this.b=e},
dgn:function dgn(d,e){this.a=d
this.b=e},
KM:function KM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ZL:function ZL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cOP:function cOP(d){this.a=d},
cOQ:function cOQ(){},
cOR:function cOR(d){this.a=d},
be_:function be_(d,e,f){this.b=d
this.c=e
this.a=f},
bdR:function bdR(d,e){this.b=d
this.a=e},
uQ:function uQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_3:function a_3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdY:function bdY(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d7n:function d7n(d,e,f){this.a=d
this.b=e
this.c=f},
d7m:function d7m(d,e){this.a=d
this.b=e},
d7M:function d7M(d){this.a=d},
d7z:function d7z(){},
d7N:function d7N(d){this.a=d},
d7y:function d7y(){},
d7O:function d7O(d,e){this.a=d
this.b=e},
d7x:function d7x(d,e){this.a=d
this.b=e},
d7P:function d7P(d,e){this.a=d
this.b=e},
d7w:function d7w(d,e){this.a=d
this.b=e},
d7Q:function d7Q(d){this.a=d},
d7v:function d7v(){},
d7R:function d7R(d,e){this.a=d
this.b=e},
d7u:function d7u(d,e){this.a=d
this.b=e},
d7S:function d7S(d){this.a=d},
d7H:function d7H(d,e){this.a=d
this.b=e},
d7T:function d7T(d){this.a=d},
d7U:function d7U(d){this.a=d},
d7W:function d7W(d){this.a=d},
d7X:function d7X(d){this.a=d},
d7G:function d7G(d,e){this.a=d
this.b=e},
d7Y:function d7Y(d,e){this.a=d
this.b=e},
aIw:function aIw(d){this.a=d},
bjk:function bjk(d){this.a=d},
bc8:function bc8(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
alS:function alS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a1K:function a1K(d,e){this.a=d
this.b=e},
alT:function alT(d,e,f,g,h,i){var _=this
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
bRh:function bRh(d){this.a=d},
bRb:function bRb(d){this.a=d},
bRa:function bRa(d,e){this.a=d
this.b=e},
bRk:function bRk(d){this.a=d},
bRc:function bRc(d){this.a=d},
bRd:function bRd(d){this.a=d},
bRg:function bRg(d){this.a=d},
bRf:function bRf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRi:function bRi(d,e){this.a=d
this.b=e},
bRj:function bRj(){},
bRe:function bRe(d){this.a=d},
bR8:function bR8(d,e){this.a=d
this.b=e},
bR9:function bR9(d){this.a=d},
boU:function boU(d,e){this.b=d
this.a=e},
aBw:function aBw(){},
iw(d,e){var w
$.Q()
w=A.K()
w.b=B.a9
w.c=e
w.r=d.gp(0)
w.d=B.bw
w.e=B.dP
return w},
bDm(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bo(j.save())
j.translate(e.a,e.b)
d.pj(0,a0?-f:f,f)
w=A.bs(B.ik,8,36)
v=B.w.j(0.3)
u=$.Q()
t=A.K()
t.r=v.gp(0)
d.bZ(w,t)
w=a1===D.X2
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ar(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.epS,new A.o(-4+v,-2),C.iw(q,5))
d.ah(D.ens,new A.o(4-v,-2),C.iw(q,5))}else{t=A.bs(B.Jw,14,40)
p=A.K()
p.r=v.gp(0)
d.bZ(t,p)}v=u.r
u=x.v
o=new A.aF(v,B.ai,k,k,A.a([],u))
t=-64-r
o.E(new A.aZ(-11,t))
o.E(new A.c5(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.c5(15,-40,11,t))
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
break}if(a1===D.b0F){n=-52+w*14
d.ah(new A.o(10,n-22),new A.o(10,n+44),C.iw(F.FN,3.4))
d.ah(D.eq9,new A.o(9,n),C.iw(q,4))
d.ah(D.enR,new A.o(10,n),C.iw(q,4))}else if(a1===D.b0G){d.ah(D.eoX,new A.o(-8,-26-Math.max(0,w)*6),C.iw(q,4))
d.ah(D.elV,new A.o(8,-26-Math.max(0,-w)*6),C.iw(q,4))}else{w=s*3
v=-38-r
d.ah(D.ep1,new A.o(-12-w,v),C.iw(q,4))
d.ah(D.aLr,new A.o(12+w,v),C.iw(q,4))}w=A.K()
w.r=q.gp(0)
d.ar(D.f7q,w)
m=new A.o(0,-77-r)
w=A.bs(m,22,19)
v=A.K()
v.r=q.gp(0)
d.bZ(w,v)
w=h.y
if(w!=null){v=A.bs(m.a2(0,K.vm),15,24)
u=A.K()
u.r=w.gp(0)
d.bZ(v,u)
u=m.a2(0,D.elP)
v=A.K()
v.r=w.gp(0)
d.N(u,4,v)}else{w=A.bs(m.a2(0,B.tn),23,20)
v=h.d
u=A.K()
u.r=v.gp(0)
d.cD(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a2(0,D.eq7),m.a2(0,D.eoV),C.iw(v,2.2))
d.ah(m.a2(0,D.enQ),m.a2(0,D.elM),C.iw(v,2.2))}if(w===4){w=m.a2(0,D.eqb)
u=A.K()
u.r=v.gp(0)
d.N(w,6,u)
u=m.a2(0,D.enS)
w=A.K()
w.r=v.gp(0)
d.N(u,6,w)}}w=m.a2(0,D.eoI)
v=A.K()
v.r=B.ib.gp(0)
d.N(w,0.9,v)
v=m.a2(0,D.eow)
w=A.K()
w.r=B.ib.gp(0)
d.N(v,0.9,w)
if(i){l=m.a2(0,K.a8i)
w=A.bs(l,21,22)
v=A.K()
v.r=D.lB.gp(0)
d.bZ(w,v)
v=A.bs(l.a2(0,K.aLo),5,12)
w=A.K()
w.r=D.bfO.gp(0)
d.bZ(v,w)
d.ah(l.a2(0,D.eq3),l.a2(0,K.aLL),C.iw(B.cO,1.4))
d.ah(D.aLr,new A.o(15,-88-r),C.iw(q,3.6))}j.restore()},
hz7(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
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
d.lx(D.aRB,A.K())
C.i6F(d,g,h,i,j)
s=(k==null?D.a8o:k).a-w>=0?1:-1
w=A.K()
w.a=B.LL
w.sav(A.jy(new A.o(s*70,-60),new A.o(-s*70,-60),A.a([D.ai8.j(0.5),D.ai8.j(0.12),D.bn7.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.ar(D.aRB,w)
r.restore()
r.restore()},
i6F(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ar(d,B.w,0.28)
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
s=A.bl(D.f7r,B.tr)
p=$.Q()
o=A.K()
o.r=u.gp(0)
a1.am(s,o)
o=A.bl(D.f7m,B.hO)
s=A.ar(v,B.w,0.18)
s.toString
n=A.K()
n.r=s.gp(0)
a1.am(o,n)
n=A.bl(D.f7A,B.hO)
o=A.ar(v,B.w,0.1)
o.toString
s=A.K()
s.r=o.gp(0)
a1.am(n,s)
s=A.K()
s.r=d.gp(0)
a1.bZ(D.f7t,s)
s=A.K()
s.r=d.gp(0)
a1.bZ(D.f6c,s)
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
l.E(new A.c5(p-3,-62,p,-52))
l.E(new A.aq(p+4,-14))
l.E(new A.aq(m-4,-14))
l.E(new A.aq(m,-52))
l.E(new A.c5(m+3,-62,m-2,-58))
l.E(new A.c5(0,-70,k,-58))
l.E(new A.bv())
k=A.K()
k.r=v.gp(0)
a1.af(l,k)
J.bo(s.save())
a1.mQ(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.dcw[j]
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
default:a1.ah(D.epx,D.emA,C.iw(a2.c.j(0.9),3))}a1.ah(D.eq4,D.ep3,C.iw(B.w.j(0.18),1.6))
a1.ah(D.elU,K.aLt,C.iw(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.Q()
i=A.K()
i.r=u.gp(0)
a1.ar(D.f68,i)
s.restore()
i=A.K()
i.r=a0.gp(0)
a1.ar(D.f6m,i)
n=new A.aF(k.r,B.ai,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.c5(0,-57,9,-66))
n.E(new A.c5(0,-60,-9,-66))
k=A.K()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cD(D.f6v,0.1,2.941592653589793,!1,C.iw(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.a8s
n=25*q
k=23*q
i=9*q
C.hvo(a1,new A.o(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.E9:o
C.hvo(a1,new A.o(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.enk,D.eng,C.iw(D.aj7,4))
a1.ah(D.eni,D.ene,C.iw(D.Ga.j(0.7),1.4))
u=A.K()
u.r=B.cO.gp(0)
a1.N(D.enh,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.bo(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.hW(0,a3.f)
a1.bU(0,r)
C.i6C(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hvo(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aJ(0,e),r=s.gcI(),q=r===0?B.ik:s.eW(0,r),p=B.j.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
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
i6C(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bs(B.vl,40,38)
$.Q()
v=A.K()
v.r=c0.gp(0)
c2.bZ(w,v)}if(c1===4){$.Q()
w=A.K()
w.r=c0.gp(0)
c2.N(D.epd,9.5,w)
w=A.K()
w.r=c0.gp(0)
c2.N(D.ema,9.5,w)}w=A.bs(D.eqr,10,6)
v=$.Q()
u=A.K()
u.r=c8.gp(0)
c2.bZ(w,u)
u=A.bs(D.eoF,10,6)
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
u.sav(A.wc(D.epU,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iw(c8.j(0.5),0.8)
c2.cD(D.f7C,3.455751918948773,2.5132741228718345,!1,s)
c2.cD(D.f6f,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.epa,D.eoZ,s)
c2.ah(D.em6,D.elY,s)
c2.cD(D.f6u,2.2,1.4,!1,s)
c2.cD(D.f6d,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ao(B.O,B.M,B.R,B.T,B.P)
n.r=c0.gp(0)
c2.N(new A.o(p*14.5,-3+o*17.5),4.3,n)}p=A.K()
p.r=c0.gp(0)
c2.cD(D.f6I,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aF(v,B.ai,b9,b9,A.a([],w))
p.E(new A.aZ(-15,-11))
p.E(new A.c5(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.c5(0,-12,-13,-6))
p.E(new A.bv())
o=A.K()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.ep_,D.elZ,C.iw(G.np,1.4))
o=A.K()
o.r=c0.gp(0)
c2.N(D.epg,3,o)
o=A.K()
o.r=c0.gp(0)
c2.N(D.emb,3,o)
o=new A.aF(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.c5(-12,22,0,26))
o.E(new A.c5(12,22,13,6))
o.E(new A.c5(8,13,0,12))
o.E(new A.c5(-8,13,-13,6))
o.E(new A.bv())
p=A.K()
p.r=B.iD.gp(0)
c2.af(o,p)
p=new A.aF(v,B.ai,b9,b9,A.a([],w))
p.E(new A.aZ(-7,8))
p.E(new A.c5(0,6,7,8))
p.E(new A.c5(0,10.5,-7,8))
o=A.K()
o.r=B.bP.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aF(v,B.ai,b9,b9,A.a([],w))
p.E(new A.aZ(-17,-4))
p.E(new A.c5(-20,-27,0,-29))
p.E(new A.c5(20,-27,17,-4))
p.E(new A.c5(0,-14,-17,-4))
p.E(new A.bv())
o=A.K()
o.r=m.gp(0)
c2.af(p,o)
o=A.ar(m,B.w,0.3)
o.toString
c2.cD(D.f6P,3.4,2.5,!1,C.iw(o,1.4))
o=A.ar(m,B.c,0.3)
o.toString
c2.cD(D.f6C,3.6,2.2,!1,C.iw(o,1.2))
o=new A.aF(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(11,-22))
o.E(new A.c5(27,-34,25,-19))
o.E(new A.c5(18,-18,11,-22))
p=A.ar(m,B.c,0.1)
p.toString
n=A.K()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aF(v,B.ai,b9,b9,A.a([],w))
n.E(new A.aZ(11,-22))
n.E(new A.c5(24,-12,27,-26))
n.E(new A.c5(18,-22,11,-22))
o=A.ar(m,B.w,0.2)
o.toString
p=A.K()
p.r=o.gp(0)
c2.af(n,p)
p=A.K()
p.r=c3.c.gp(0)
c2.N(D.em_,3,p)
break
case 3:p=A.K()
p.r=c0.gp(0)
c2.cD(D.f6M,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ar(c0,B.c,0.18)
p.toString
o=new A.ao(B.O,B.M,B.R,B.T,B.P)
o.b=B.a9
o.c=0.9
o.r=p.gp(0)
o.d=B.bw
o.e=B.dP
c2.ah(new A.o(r*3.6,-19+Math.abs(r)*0.8),new A.o(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=I.aCc[l]
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
c2.cD(D.f6L,3.204424506661589,3.015928947446201,!0,p)
p=A.ar(c0,B.c,0.25)
p.toString
c2.ah(K.a8i,K.a8h,C.iw(p,1))
break
default:p=A.K()
p.r=c0.gp(0)
c2.cD(D.f6g,3.267256359733385,2.8902652413026098,!0,p)}i=B.j.D(c4.b,0,1)*0.4+0.1
p=A.bs(D.eqd,5,8)
o=D.afs.j(i)
n=A.K()
n.r=o.gp(0)
c2.bZ(p,n)
n=A.bs(D.eoR,5,8)
p=D.afs.j(i)
o=A.K()
o.r=p.gp(0)
c2.bZ(n,o)
h=c4.e*2.4
o=new A.aF(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(h-0.6,-2))
o.E(new A.c5(h-3.4,6,h-2.6,7.4))
o.E(new A.c5(h,8.8,h+2.6,7.4))
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
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=F.fJ[l]
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
a6.push(new A.jR(A.bs(new A.o(a5,-3),a3,7)))
a4.ab()
a3=a4.e
if(a3==null)a3=a4.e=new A.E6(a4.glV().a.snapshot())
d.clipPath(a3.a,$.np(),!0)
a3=new A.ao(B.O,B.M,B.R,B.T,B.P)
a3.r=D.bjA.gp(0)
c2.N(new A.o(a7,a8),2.1,a3)
a3=new A.ao(B.O,B.M,B.R,B.T,B.P)
a3.r=B.w.gp(0)
c2.N(new A.o(a7,a8),1.05,a3)
a3=new A.ao(B.O,B.M,B.R,B.T,B.P)
a3.r=B.c.gp(0)
c2.N(new A.o(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.Z3:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ao(B.O,B.M,B.R,B.T,B.P)
a9.b=B.a9
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bw
a9.e=B.dP
a3=p?0.8:0
c2.cD(A.bs(new A.o(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.ea
else{b1=A.ar(c0,B.w,0.2)
b1.toString}b2=new A.ao(B.O,B.M,B.R,B.T,B.P)
b2.b=B.a9
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bw
b2.e=B.dP
c2.ah(new A.o(a5-a4,b0-a6+0.4),new A.o(a5+a4,b0-0.6-a3),b2)}b3=B.j.D(c4.a,0,1)
if(o)b4=D.btz
else{u=A.ar(c8,D.bn9,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.j.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aF(v,B.ai,b9,b9,A.a([],w))
w=-b6
b8.E(new A.aZ(w,11.5))
b8.E(new A.c5(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.c5(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.bv())
v=A.K()
v.r=D.bmt.gp(0)
c2.af(b8,v)
J.bo(d.save())
c2.mQ(0,b8)
v=B.c.j(0.95)
u=A.K()
u.r=v.gp(0)
c2.ar(new A.a1(w,11,w+b6*2,13.2),u)
u=A.bs(new A.o(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.K()
w.r=D.btE.gp(0)
c2.bZ(u,w)
d.restore()
c2.af(b8,C.iw(b4,1.1))}else{u=new A.aF(v,B.ai,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.aZ(-5.2,p))
u.E(new A.c5(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iw(b4,1.5))
if(b5>0.6){w=new A.aF(v,B.ai,b9,b9,A.a([],w))
w.E(new A.aZ(-4.6,11.8))
w.E(new A.c5(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.c5(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.K()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cD(D.f6t,-1.2,2.2,!1,C.iw(c8.j(0.5),0.8))
c2.cD(D.f6i,2.141592653589793,2.2,!1,C.iw(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.K()
w.r=c1.gp(0)
c2.N(D.eoy,1.7,w)
w=A.K()
w.r=c1.gp(0)
c2.N(D.eou,1.7,w)}},
ice(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.Q(),f=new A.q_(new A.pz()),e=A.zv(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.K()
a2.sav(A.jy(B.I,new A.o(0,a0*0.46),D.d9h,D.d0P,B.x,h))
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
d.sav(A.wc(B.I,230,A.a([D.bik,B.L],a0),h,B.x,h,h,0))
e.bZ(D.f6Z,d)
a2.restore()
d=A.K()
d.sav(A.wc(D.a8r,58,A.a([D.blw,B.L],a0),h,B.x,h,h,0))
e.N(D.a8r,58,d)
d=A.K()
d.r=D.bh1.gp(0)
e.N(D.a8r,24,d)
d=A.K()
d.r=D.Zs.gp(0)
e.N(D.emU,5,d)
d=A.K()
d.r=D.Zs.gp(0)
e.N(D.emY,3.4,d)
d=A.K()
d.r=D.Zs.gp(0)
e.N(D.emX,2.4,d)
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
g=[D.bfB,D.bhB,D.bnt][s]
u=$.Q()
t=new A.ao(B.O,B.M,B.R,B.T,B.P)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cvJ[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ao(B.O,B.M,B.R,B.T,B.P)
u.b=B.a9
u.c=2.4
u.r=D.ZL.gp(0)
u.d=B.bw
u.e=B.dP
e.ah(new A.o(o,k),new A.o(g,d),u)
g=A.bs(new A.o(g,k-27),11,46)
u=new A.ao(B.O,B.M,B.R,B.T,B.P)
u.r=D.ZL.gp(0)
e.bZ(g,u)
d=A.bs(new A.o(o-12,d),8,24)
u=new A.ao(B.O,B.M,B.R,B.T,B.P)
u.r=D.ZL.gp(0)
e.bZ(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ao(B.O,B.M,B.R,B.T,B.P)
u.r=D.bh4.j(0.8).gp(0)
e.N(new A.o(20+v*52+g*7,400+d*5),1.2,u)}g=A.K()
g.sav(A.jy(D.elt,D.elv,D.d2M,B.Du,B.x,h))
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
e.pj(0,1,0.34)
g=A.K()
g.sav(A.wc(B.I,250,A.a([D.bop,D.bhW,D.bqj],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.N(B.I,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ar(D.ahR,D.bgz,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.Q()
a0=new A.ao(B.O,B.M,B.R,B.T,B.P)
a0.b=B.a9
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bw
a0.e=B.dP
e.ah(new A.o(o+i*2,k),new A.o(o+i*5,g+Math.abs(i)*3),a0)}}C.i4K(e)
for(l=0;l<3;++l)C.i8c(e,D.aA0[l])
C.i81(e,D.emO)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.Q()
a0=new A.ao(B.O,B.M,B.R,B.T,B.P)
a0.b=B.a9
a0.c=2.4
a0.r=D.ZG.gp(0)
a0.d=B.bw
a0.e=B.dP
e.ah(new A.o(o,452+g),new A.o(o+1,436+d),a0)}e.ah(D.elW,D.emf,C.iw(D.bhi,1.6))
a2.restore()
return f.o0()},
i4K(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.Q().r,g=x.v,f=new A.aF(h,B.ai,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.kR(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.kR(416,382,432,422,428,462))
f.E(new A.bv())
w=A.K()
w.sav(A.jy(new A.o(354,0),new A.o(430,0),D.dwU,U.zN,B.x,i))
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
d.ah(new A.o(t,s),new A.o(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.ddT[o]
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
r.r=D.aga.gp(0)
r.d=B.bw
r.e=B.dP
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ao(B.O,B.M,B.R,B.T,B.P)
l.r=A.ar(D.bha,D.bns,v.ai()).j(0.92).gp(0)
d.N(new A.o(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ao(B.O,B.M,B.R,B.T,B.P)
r.b=B.a9
r.c=1.2
r.r=D.ZG.gp(0)
r.d=B.bw
r.e=B.dP
d.ah(new A.o(w,q+8),new A.o(w,q+22),r)
q=A.bs(new A.o(w,q+28),13,7)
w=new A.ao(B.O,B.M,B.R,B.T,B.P)
w.r=D.boI.gp(0)
d.bZ(q,w)}},
i8c(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bs(new A.o(a5,a6+2),a9,a7*2.8),b1=B.w.j(0.3),b2=$.Q(),b3=A.K()
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
w.E(new A.c5(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.bv())
u=A.K()
u.sav(A.jy(new A.o(b0,0),new A.o(v,0),D.ddZ,U.zN,B.x,a4))
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
o=D.ahM.j(0.75)
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
j=new A.ao(B.O,B.M,B.R,B.T,B.P)
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
f.ab()}b4.af(f,C.iw(D.ahM.j(0.7),1.6))
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
b2.E(new A.c5(p,a6-a8*0.82,o,j))
b2.E(new A.aq(o,m))
b2.E(new A.bv())
m=A.K()
m.r=D.ahY.gp(0)
b4.af(b2,m)
m=A.K()
m.r=D.ahY.gp(0)
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
e.E(new A.c5(a5-a9,n,a5,u))
e.E(new A.c5(a5+a9,n,p,j))
e.E(new A.c5(a5,b1+a7*0.34,o,j))
e.E(new A.bv())
b1=A.K()
n=a7*1.4
b1.sav(A.jy(new A.o(a5-n,0),new A.o(a5+n,0),D.dhu,U.zN,B.x,a4))
b4.af(e,b1)
J.bo(v.save())
b4.mQ(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h8()?B.w:D.bgI).j(0.16)
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
v.r=D.bnT.gp(0)
v.d=B.bw
v.e=B.dP
b4.ah(new A.o(a2,a3),new A.o(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aF(b0,B.ai,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bv())
b0=A.K()
b0.r=D.bk5.gp(0)
b4.af(a9,b0)},
i81(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+I.aC9[s]
$.Q()
q=new A.ao(B.O,B.M,B.R,B.T,B.P)
q.b=B.a9
q.c=3
q.r=D.ZG.gp(0)
q.d=B.bw
q.e=B.dP
d.ah(new A.o(r,u),new A.o(r,t),q)}u=A.bs(e.a2(0,K.aLn),24,36)
t=$.Q()
r=A.K()
r.r=D.bsN.gp(0)
d.bZ(u,r)
t=new A.aF(t.r,B.ai,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.aZ(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.c5(w,v-24,r,u))
t.E(new A.bv())
u=A.K()
u.r=D.agR.gp(0)
d.af(t,u)},
i7j(d){switch(B.o.F(d,8)){case 0:return D.b0d
case 1:return D.b0b
case 2:return D.b0a
case 3:return D.b09
case 4:return D.b0c
case 5:return D.b0e
case 6:return D.hww
default:return D.hwv}},
Sw(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.boV()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a8s:j
w.as=k==null?D.E9:k
C.hz7(d,e,p,C.i7j(m),w,s,m,l)},
hAC(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bSW:function bSW(){var _=this
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
boV:function boV(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
ama:function ama(){this.b=this.a=null},
aWp:function aWp(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bSO:function bSO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSP:function bSP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSQ:function bSQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSR:function bSR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSS:function bSS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bST:function bST(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSU:function bSU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSV:function bSV(){},
bSN:function bSN(d){this.a=d},
afQ:function afQ(d,e){this.a=d
this.b=e},
adP:function adP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
N0(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bRx(s)
s.bBy(d)
return s},
H0(d,e,f,g,h,i,j){var w,v=A.U(g).k("Y<1>")
v=A.d1(new A.Y(g,new C.ftR(f),v),v.k("M.E"))
w=A.C(v,A.a4(v).k("ch.E"))
B.d.e0(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.v(v,A.cW(w,0,A.dA(3,"count",x.S),A.U(w).c))
B.d.e0(v,d)
return new C.ls(e,v,B.d.co(v,f),h,i,"tree",j)},
itp(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.T(c0,x.cg),c2=new C.h3N(c1),c3=x.s,c4=A.a([],c3)
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
if(h===D.wp)g="father"
else g=h===D.os?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Y(t,new C.h3P(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.H0(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Y(w,new C.h3Q(i,m),p),o)
B.d.e0(d,c6)
c2.$2(b4,new C.ls("True or false: "+h+" is the "+g+" of "+l+".",D.aB1,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.ls("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",D.aB1,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.G8(m)
h=a0.length
if(h!==0){a1=a0[c6.aw(h)]
h=B.a.i(a1.b)
f=A.C(new A.Y(t,new C.h3R(l,a0,c5),v),s)
e=a1.c
if(e===D.wp)e="son"
else e=e===D.os?"daughter":b5
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
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.H0(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.arn(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Y(t,new C.h3S(l),v),s)
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
j=A.C(new A.Y(t,new C.h3T(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.wp
if(e)a2=b7
else a2=f===D.os?b8:b9
if(e)f=b7
else f=f===D.os?b8:b9
c2.$2("grand",C.H0(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aN1(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.aw(k)].b)
j=A.C(new A.Y(t,new C.h3U(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.H0(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.v(j,D.cOq)
h=l+" was born in "+k
c2.$2("place",C.H0(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.v(j,D.d3P)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.H0(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.J)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.H0(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.iX(b1,b3,b3)
c2.$2("year",C.H0(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bDY(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.N0(d),l=new A.e4()
l.d_(f)
w=C.itp(m,l,g)
for(v=new A.dq(w,w.r,w.e);v.C();)J.hiZ(v.d,l)
v=A.a4(w).k("cx<1>")
u=A.C(new A.cx(w,v),v.k("M.E"))
B.d.e0(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aV(u,new C.fHd(n,w))))break
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
if(v<e){v=A.C(D.az2,x.df)
B.d.e0(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.J)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hze(o,l))}}else if(!g&&v>3){o=C.hze(D.az2[l.aw(14)],l)
t[t.length-1-l.aw(3)]=o}return t},
hze(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.e0(w,e)
return new C.ls(d.a,w,B.d.co(w,v),d.d,d.e,d.f,d.r)},
hEc(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.N0(a2),a1=new A.e4()
a1.d_(a3)
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
if(new A.N(j,new C.fVt(),A.U(j).k("N<1,H>")).fM(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.J)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.J)(j),++i)g.push(C.aSa(a0,j[i]))
w.push(new C.auc("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.T(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
J.c7(e.c3(0,a0.amw(q),new C.fVu()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cx<1>")
d=A.C(new A.cx(e,t),t.k("M.E"))
B.d.fj(d)
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
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.J)(v),++r)s.push(C.aSa(a0,v[r]))
w.push(new C.auc("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aQG(d){return B.d.anZ(D.aBw,new C.fD7(d))},
iiX(d){return A.nA(new A.Y(D.aBw,new C.fK1(d),x.av))},
bSl(d){return C.hNS(d)},
hNS(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bSl=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bSl)
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
return A.i($async$bSl,v)},
BS(d,e){return C.hNP(d,e)},
hNP(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
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
bSk(d,e,f){return C.hNQ(d,e,f)},
hNQ(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bSk=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bSk)
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
return A.i($async$bSk,v)},
BT(d,e,f,g){return C.hNR(d,e,f,g)},
hNR(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
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
bGc(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
h5R(d,e,f,g){return new C.akM(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hLW(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aU(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cq)
while(u.C())w.push(J.k(u.gR(u)))
u=x.N
w=A.cW(w,0,A.dA(4,"count",x.S),u).dn(0)
B.d.v(w,A.bZ(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aJ(d.h(0,"c"))
v=v==null?null:B.j.M(v)
v=B.o.D(v==null?0:v,0,3)
u=A.aJ(d.h(0,"s"))
u=u==null?null:B.j.M(u)
return C.h5R(w,v,B.o.D(u==null?20:u,5,60),t)},
hk7(d){var w,v,u,t,s,r,q=J.a7(d),p=q.h(d,"id")
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
if(u.b(r))v.push(C.hLW(A.a3(r,t,s)))}return new C.MK(p,w,v)},
hek(d){var w,v=A.a([],x.c)
for(w=J.aU(d.z);w.C();)v.push(C.hk7(w.gR(w)))
return v},
aSa(d,e){var w=e.c===D.os
if(d.amw(e)===0&&d.G8(e).length!==0)return w?0:1
if(d.G8(e).length!==0||d.arn(e)!=null)return w?2:3
return w?4:5},
hFi(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.N0(a4),a3=new A.e4()
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
j=i.h(0,k)}h=a2.G8(m)
g=a2.arn(m)
f=a2.aN1(m)
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
if(k===D.wp)k="father"
else k=k===D.os?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.wp)k="father"
else k=k===D.os?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e0(l,a3)
B.d.aZ(l,new C.h4c())
d=B.a.i(m.b)
a0=A.C(new A.Y(s,new C.h4d(d),o),n)
B.d.e0(a0,a3)
k=A.a([d],t)
i=A.U(a0)
a1=new A.iu(a0,0,3,i.k("iu<1>"))
a1.n5(a0,0,3,i.c)
B.d.v(k,a1)
B.d.e0(k,a3)
a1=C.aSa(a2,m)
i=new A.iu(l,0,4,p)
i.n5(l,0,4,r)
w.push(new C.ban(d,a1,i.dn(0),k))
if(w.length>=5)break}return w},
hwR(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.a0(d,"My ")?1:0},
hEo(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.N0(a4),a3=new A.e4()
a3.d_(a5)
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
if(q.a!==j&&!B.d.aV(h,new C.fVZ(q))&&q.d!==j)i.push(q)}B.d.e0(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.iu(i,0,k,m)
j.n5(i,0,k,n)
f=j.dn(0)
j=B.a.i(l.b)
k=C.aSa(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.J)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.J)(h),++g)e.push(C.aSa(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.J)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.J)(f),++g)a0.push(C.aSa(a2,f[g]))
w.push(new C.a9U(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
ls:function ls(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bRx:function bRx(d){this.b=d
this.c=$},
bRy:function bRy(){},
bRz:function bRz(d){this.a=d},
ftR:function ftR(d){this.a=d},
h3N:function h3N(d){this.a=d},
h3O:function h3O(){},
h3P:function h3P(d){this.a=d},
h3Q:function h3Q(d,e){this.a=d
this.b=e},
h3R:function h3R(d,e,f){this.a=d
this.b=e
this.c=f},
h3M:function h3M(d,e){this.a=d
this.b=e},
h3S:function h3S(d){this.a=d},
h3T:function h3T(d){this.a=d},
h3U:function h3U(d,e,f){this.a=d
this.b=e
this.c=f},
h3L:function h3L(d,e){this.a=d
this.b=e},
fHd:function fHd(d,e){this.a=d
this.b=e},
auc:function auc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fVt:function fVt(){},
fVu:function fVu(){},
zE:function zE(d,e,f){this.a=d
this.b=e
this.c=f},
fD7:function fD7(d){this.a=d},
fK1:function fK1(d){this.a=d},
akM:function akM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bMl:function bMl(){},
MK:function MK(d,e,f){this.a=d
this.b=e
this.c=f},
ban:function ban(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
h4c:function h4c(){},
h4d:function h4d(d){this.a=d},
a9U:function a9U(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fVZ:function fVZ(d){this.a=d},
bhD:function bhD(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
afO:function afO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
ak4:function ak4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ak5:function ak5(d,e,f,g,h){var _=this
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
bKv:function bKv(d){this.a=d},
bKq:function bKq(){},
bKw:function bKw(){},
bKo:function bKo(){},
bKp:function bKp(){},
bKu:function bKu(d){this.a=d},
bKr:function bKr(d,e){this.a=d
this.b=e},
bKt:function bKt(d,e){this.a=d
this.b=e},
bKs:function bKs(d,e){this.a=d
this.b=e},
bKn:function bKn(d){this.a=d},
bcO:function bcO(d,e){this.b=d
this.a=e},
QE:function QE(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBu:function aBu(d,e,f){this.b=d
this.c=e
this.a=f},
azZ:function azZ(d,e,f){this.a=d
this.b=e
this.c=f},
auO:function auO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
auP:function auP(d,e,f){var _=this
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
cpS:function cpS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cpT:function cpT(d){this.a=d},
cpR:function cpR(d){this.a=d},
cpU:function cpU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cpV:function cpV(){},
cpW:function cpW(d,e){this.a=d
this.b=e},
cpX:function cpX(){},
cpY:function cpY(d){this.a=d},
cpO:function cpO(d){this.a=d},
cpP:function cpP(d,e){this.a=d
this.b=e},
cpQ:function cpQ(d,e,f){this.a=d
this.b=e
this.c=f},
cpJ:function cpJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cpL:function cpL(d,e){this.a=d
this.b=e},
cpM:function cpM(d,e){this.a=d
this.b=e},
cpK:function cpK(d,e){this.a=d
this.b=e},
cpI:function cpI(){},
cpN:function cpN(){},
bch:function bch(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cPT:function cPT(){},
ayL:function ayL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ayM:function ayM(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cEQ:function cEQ(d){this.a=d},
cEP:function cEP(d){this.a=d},
cEY:function cEY(d,e){this.a=d
this.b=e},
cEZ:function cEZ(d,e){this.a=d
this.b=e},
cF_:function cF_(d){this.a=d},
cEX:function cEX(d){this.a=d},
cF0:function cF0(d){this.a=d},
cF1:function cF1(d,e){this.a=d
this.b=e},
cF2:function cF2(){},
cF3:function cF3(d){this.a=d},
cES:function cES(d){this.a=d},
cET:function cET(d,e){this.a=d
this.b=e},
cER:function cER(d,e){this.a=d
this.b=e},
cEU:function cEU(){},
cEV:function cEV(){},
cEW:function cEW(d,e){this.a=d
this.b=e},
azK:function azK(){},
aGW:function aGW(){},
hc4(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.brf((w-450*u)/2,(v-900*u)/2,u)},
afC:function afC(){},
f6p:function f6p(d){this.a=d},
aKI:function aKI(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fgy:function fgy(d){this.a=d},
am0:function am0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
am1:function am1(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.q8$=f
_.LT$=g
_.an2$=h
_.bx$=i
_.a9$=j
_.c=_.a=null},
bSj:function bSj(d){this.a=d},
bSi:function bSi(){},
bSg:function bSg(d){this.a=d},
bSe:function bSe(){},
bSf:function bSf(d){this.a=d},
bSb:function bSb(d,e){this.a=d
this.b=e},
bSc:function bSc(){},
bSd:function bSd(d){this.a=d},
bSh:function bSh(d,e){this.a=d
this.b=e},
bSa:function bSa(d){this.a=d},
bsW:function bsW(d,e){this.b=d
this.a=e},
f6q:function f6q(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f6r:function f6r(d,e,f){this.a=d
this.b=e
this.c=f},
f6s:function f6s(d,e,f){this.a=d
this.b=e
this.c=f},
f6t:function f6t(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6u:function f6u(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f6v:function f6v(){},
alZ:function alZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
am_:function am_(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.q8$=f
_.LT$=g
_.an2$=h
_.bx$=i
_.a9$=j
_.c=_.a=null},
bRX:function bRX(){},
bS7:function bS7(d,e){this.a=d
this.b=e},
bS8:function bS8(d){this.a=d},
bS9:function bS9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bS3:function bS3(){},
bS2:function bS2(d,e){this.a=d
this.b=e},
bS4:function bS4(d,e){this.a=d
this.b=e},
bS5:function bS5(){},
bS6:function bS6(d){this.a=d},
bRZ:function bRZ(d){this.a=d},
bS_:function bS_(d){this.a=d},
bS0:function bS0(d){this.a=d},
bRY:function bRY(d,e){this.a=d
this.b=e},
bS1:function bS1(d){this.a=d},
bjs:function bjs(d,e){this.b=d
this.a=e},
dr8:function dr8(){},
a22:function a22(d,e){this.a=d
this.b=e},
alV:function alV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alW:function alW(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.q8$=e
_.LT$=f
_.an2$=g
_.bx$=h
_.a9$=i
_.c=_.a=null},
bRJ:function bRJ(d){this.a=d},
bRI:function bRI(){},
bRH:function bRH(){},
bRB:function bRB(){},
bRC:function bRC(){},
bRG:function bRG(d,e,f){this.a=d
this.b=e
this.c=f},
bRF:function bRF(d){this.a=d},
bRD:function bRD(d,e){this.a=d
this.b=e},
bRE:function bRE(d){this.a=d},
biT:function biT(d,e){this.b=d
this.a=e},
aBx:function aBx(){},
bgq:function bgq(){},
aBz:function aBz(){},
bgr:function bgr(){},
aBA:function aBA(){},
bgs:function bgs(){},
uu(d,e,f,g,h){var w,v,u=null,t=A.m(18),s=A.a([],x.V)
s.push(new A.ac(0,B.G,f.j(0.4),B.j8,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.v(v,A.a([A.X(g,h,u,u,u,20),B.ae],w))
v.push(A.d(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aA(u,A.q(u,A.A(v,B.l,u,B.e,B.Q,0,u,u),B.f,u,u,new A.p(f,u,u,t,s,u,B.n),u,u,u,u,B.Og,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hkV(d,e,f,g,h,i,j){return new C.alX(i,h,d,j,e,f,g,null)},
a6s:function a6s(d,e){this.c=d
this.a=e},
bj_:function bj_(d){this.a=d},
tF:function tF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bRA:function bRA(d){this.a=d},
Ir:function Ir(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Wf:function Wf(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
blL:function blL(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e1a:function e1a(d,e){this.a=d
this.b=e},
e1b:function e1b(d){this.a=d},
e1c:function e1c(d,e){this.a=d
this.b=e},
e18:function e18(d){this.a=d},
e19:function e19(d){this.a=d},
e17:function e17(d){this.a=d},
e15:function e15(d){this.a=d},
e16:function e16(d){this.a=d},
e14:function e14(d,e){this.a=d
this.b=e},
e1d:function e1d(d){this.a=d},
e1e:function e1e(d,e){this.a=d
this.b=e},
e1f:function e1f(d,e){this.a=d
this.b=e},
e1g:function e1g(d,e){this.a=d
this.b=e},
e1j:function e1j(d,e){this.a=d
this.b=e},
e1k:function e1k(d,e){this.a=d
this.b=e},
e1l:function e1l(d,e){this.a=d
this.b=e},
e1m:function e1m(d,e){this.a=d
this.b=e},
e1n:function e1n(d,e){this.a=d
this.b=e},
e1o:function e1o(d,e,f){this.a=d
this.b=e
this.c=f},
e1p:function e1p(d,e){this.a=d
this.b=e},
e1q:function e1q(d,e){this.a=d
this.b=e},
e1h:function e1h(d){this.a=d},
e1i:function e1i(d){this.a=d},
a_V:function a_V(d,e){this.a=d
this.b=e},
alX:function alX(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
alY:function alY(d){var _=this
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
bRV:function bRV(d){this.a=d},
bRW:function bRW(d){this.a=d},
bRU:function bRU(d){this.a=d},
bRL:function bRL(d){this.a=d},
bRM:function bRM(d){this.a=d},
bRK:function bRK(d){this.a=d},
bRR:function bRR(d,e,f){this.a=d
this.b=e
this.c=f},
bRS:function bRS(d){this.a=d},
bRO:function bRO(d,e){this.a=d
this.b=e},
bRP:function bRP(d,e,f){this.a=d
this.b=e
this.c=f},
bRT:function bRT(){},
bRQ:function bRQ(d,e){this.a=d
this.b=e},
bRN:function bRN(d){this.a=d},
TW:function TW(d,e){this.c=d
this.a=e},
alU:function alU(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bRl:function bRl(d){this.a=d},
bRm:function bRm(d){this.a=d},
bRw:function bRw(){},
bRv:function bRv(d,e,f){this.a=d
this.b=e
this.c=f},
bRq:function bRq(d,e){this.a=d
this.b=e},
bRp:function bRp(d,e){this.a=d
this.b=e},
bRr:function bRr(d){this.a=d},
bRs:function bRs(d,e){this.a=d
this.b=e},
bRt:function bRt(d,e){this.a=d
this.b=e},
bRo:function bRo(d,e){this.a=d
this.b=e},
bRu:function bRu(d,e,f){this.a=d
this.b=e
this.c=f},
bRn:function bRn(d,e){this.a=d
this.b=e},
ihn(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.aiS(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.J)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bC(new A.V(Date.now(),0,!1))
s=new C.fGG(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("Y<1>"),q=q.k("cM<1,n>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.J)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.yW)m.push(l===D.wp?"male":"female")
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
m.push("child of "+l+k)}a0=A.C(new A.cM(new A.Y(a4,new C.fGE(u,f),p),new C.fGF(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aO(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aO(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aC(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
iho(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.aiS(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.J)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fGL(v,e)
q=new C.fGJ(v)
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
d=A.d1(new A.b8(p,d),d.k("M.E"))
n=A.C(d,A.a4(d).k("ch.E"))
B.d.fj(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.J)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eF(l,new C.fGK(p,m));k.C();t=f){j=l.gR(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.al(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aO(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
i25(d,e,f,g){var w,v,u=C.ihp(d,e)
if(u<=0||f.length<=u)return new A.afg(!1,D.Dw,f)
if(g.q(0,e.a))return new A.afg(!1,D.Dw,f)
w=A.U(f).c
v=A.cW(f,0,A.dA(u,"count",x.S),w).dn(0)
return new A.afg(!0,A.cW(f,u,null,w).dn(0),v)},
i26(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.aiS(d3),d2=d1.length
if(d2===0)return D.htB
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.J)(d1),++u){t=d1[u]
v.c3(0,t.a,new C.dgD(t))}s=new C.dgU(v)
d2=x.dy
r=A.T(w,d2)
q=new C.dgM(r)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dgL(r)
l=A.T(w,x.do)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c7(l.c3(0,k,new C.dgE()),o)}h=new C.dgK(s)
g=new C.dgJ(l,r)
p=v.$ti.k("b8<2>")
o=p.k("Y<M.E>")
f=A.C(new A.Y(new A.b8(v,p),new C.dgF(h),o),o.k("M.E"))
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
a9=new C.dgS(new C.dgO(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dq(v,v.r,v.e),j=a2.gam1(a2);o.C();){b0=o.d
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
b7=new C.dgC(a2,new C.dgT(),b6,a3,b4,v,a4,a5,a6,b5)
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
a3.bO(0,new C.dgG(c6,b4))
for(d2=new A.ck(a4,a4.$ti.k("ck<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aU(c7.b);j.C();){i=j.gR(j)
if(b6.al(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.o(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eF(j,new C.dgH(c8));i.C();)o.push(j.gR(0).b)
if(o.length===0)continue
B.d.aZ(o,new C.dgI())
c6.push(new C.aKD(new A.o(c9,b4.h(0,c8).b.b+112),B.I,!1,o))}return new C.bgw(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hzX(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(d)
return w==null?null:w.b[1]},
hu5(d,e,f,g,h,i,j,k,l,m,n){return new C.a07(k,f,j,e,l,n,m,d,g,h,i,null)},
aDx(d,e,f,g,h,i,j){return new C.bki(i,d,e,f,j,h,g,null)},
aqZ:function aqZ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aF4:function aF4(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e2Q:function e2Q(d){this.a=d},
e2P:function e2P(d){this.a=d},
e2S:function e2S(d,e){this.a=d
this.b=e},
e2T:function e2T(d,e){this.a=d
this.b=e},
e2U:function e2U(d){this.a=d},
e2O:function e2O(d,e){this.a=d
this.b=e},
e2R:function e2R(d){this.a=d},
e2W:function e2W(d){this.a=d},
e2V:function e2V(d,e){this.a=d
this.b=e},
aqT:function aqT(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aF1:function aF1(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e2g:function e2g(d){this.a=d},
e2e:function e2e(d){this.a=d},
e2f:function e2f(d){this.a=d},
e2h:function e2h(d,e){this.a=d
this.b=e},
e2b:function e2b(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1D:function e1D(d){this.a=d},
e1E:function e1E(d,e){this.a=d
this.b=e},
e1V:function e1V(d){this.a=d},
e1T:function e1T(d){this.a=d},
e1U:function e1U(d,e){this.a=d
this.b=e},
e1W:function e1W(d){this.a=d},
e1X:function e1X(d,e){this.a=d
this.b=e},
e2a:function e2a(d,e){this.a=d
this.b=e},
e1S:function e1S(d){this.a=d},
e1R:function e1R(d){this.a=d},
e1Q:function e1Q(d,e){this.a=d
this.b=e},
e27:function e27(){},
e28:function e28(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e26:function e26(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e20:function e20(d){this.a=d},
e21:function e21(d,e,f){this.a=d
this.b=e
this.c=f},
e2_:function e2_(d,e){this.a=d
this.b=e},
e22:function e22(d,e){this.a=d
this.b=e},
e1Y:function e1Y(d,e){this.a=d
this.b=e},
e1Z:function e1Z(){},
e23:function e23(d,e){this.a=d
this.b=e},
e24:function e24(d){this.a=d},
e25:function e25(d,e){this.a=d
this.b=e},
e29:function e29(d,e){this.a=d
this.b=e},
e1r:function e1r(d,e){this.a=d
this.b=e},
e1s:function e1s(d,e){this.a=d
this.b=e},
e2j:function e2j(d,e,f){this.a=d
this.b=e
this.c=f},
e2d:function e2d(d,e,f){this.a=d
this.b=e
this.c=f},
e2c:function e2c(d){this.a=d},
e1t:function e1t(d){this.a=d},
e1u:function e1u(d){this.a=d},
e1v:function e1v(){},
e1w:function e1w(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1A:function e1A(d,e){this.a=d
this.b=e},
e1z:function e1z(d,e){this.a=d
this.b=e},
e1y:function e1y(d){this.a=d},
e1B:function e1B(d,e){this.a=d
this.b=e},
e1x:function e1x(d){this.a=d},
e2i:function e2i(d){this.a=d},
e1N:function e1N(){},
e1O:function e1O(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1M:function e1M(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1I:function e1I(d,e,f){this.a=d
this.b=e
this.c=f},
e1H:function e1H(d,e,f){this.a=d
this.b=e
this.c=f},
e1F:function e1F(d,e){this.a=d
this.b=e},
e1J:function e1J(d){this.a=d},
e1K:function e1K(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1G:function e1G(d,e){this.a=d
this.b=e},
e1L:function e1L(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1P:function e1P(d,e){this.a=d
this.b=e},
e2q:function e2q(){},
e2r:function e2r(d,e){this.a=d
this.b=e},
e2s:function e2s(d){this.a=d},
e2t:function e2t(d,e){this.a=d
this.b=e},
e2m:function e2m(d){this.a=d},
e2k:function e2k(d,e){this.a=d
this.b=e},
e2n:function e2n(d,e){this.a=d
this.b=e},
e2o:function e2o(d,e){this.a=d
this.b=e},
e2p:function e2p(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e2u:function e2u(d){this.a=d},
e2l:function e2l(d){this.a=d},
e1C:function e1C(d){this.a=d},
bgu:function bgu(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dgA:function dgA(d){this.a=d},
dgz:function dgz(d,e){this.a=d
this.b=e},
dgB:function dgB(d){this.a=d},
dgy:function dgy(d,e){this.a=d
this.b=e},
fGG:function fGG(d,e){this.a=d
this.b=e},
fGH:function fGH(d){this.a=d},
fGI:function fGI(){},
fGE:function fGE(d,e){this.a=d
this.b=e},
fGF:function fGF(){},
fGL:function fGL(d,e){this.a=d
this.b=e},
fGM:function fGM(d){this.a=d},
fGN:function fGN(){},
fGJ:function fGJ(d){this.a=d},
fGK:function fGK(d,e){this.a=d
this.b=e},
KT:function KT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GA:function GA(d,e){this.a=d
this.b=e},
bgw:function bgw(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dgD:function dgD(d){this.a=d},
dgU:function dgU(d){this.a=d},
dgM:function dgM(d){this.a=d},
dgN:function dgN(){},
dgL:function dgL(d){this.a=d},
dgE:function dgE(){},
dgK:function dgK(d){this.a=d},
dgJ:function dgJ(d,e){this.a=d
this.b=e},
dgF:function dgF(d){this.a=d},
dgO:function dgO(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dgP:function dgP(d){this.a=d},
dgQ:function dgQ(d){this.a=d},
dgR:function dgR(){},
dgS:function dgS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dgT:function dgT(){},
dgC:function dgC(d,e,f,g,h,i,j,k,l,m){var _=this
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
dgG:function dgG(d,e){this.a=d
this.b=e},
dgH:function dgH(d){this.a=d},
dgI:function dgI(){},
aKD:function aKD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bgx:function bgx(d,e){this.b=d
this.a=e},
dgV:function dgV(){},
dgW:function dgW(d){this.a=d},
dgX:function dgX(d){this.a=d},
dgY:function dgY(){},
bkj:function bkj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfz:function bfz(d,e){this.b=d
this.a=e},
byh:function byh(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fm8:function fm8(d){this.a=d},
bnD:function bnD(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eXh:function eXh(d){this.a=d},
eXg:function eXg(d,e){this.a=d
this.b=e},
a07:function a07(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aDv:function aDv(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dwR:function dwR(d,e){this.a=d
this.b=e},
dwQ:function dwQ(d){this.a=d},
dwO:function dwO(d){this.a=d},
dwP:function dwP(d){this.a=d},
dx_:function dx_(d){this.a=d},
dx0:function dx0(d){this.a=d},
dwZ:function dwZ(d,e){this.a=d
this.b=e},
dx1:function dx1(){},
dx4:function dx4(d){this.a=d},
dwY:function dwY(d,e){this.a=d
this.b=e},
dx3:function dx3(){},
dx5:function dx5(d){this.a=d},
dwX:function dwX(d,e){this.a=d
this.b=e},
dx6:function dx6(d){this.a=d},
dwW:function dwW(d){this.a=d},
dx7:function dx7(d){this.a=d},
dwV:function dwV(d){this.a=d},
dx8:function dx8(d){this.a=d},
dwU:function dwU(d){this.a=d},
dx9:function dx9(d){this.a=d},
dwT:function dwT(d){this.a=d},
dxa:function dxa(d){this.a=d},
dwS:function dwS(d,e){this.a=d
this.b=e},
dx2:function dx2(d){this.a=d},
aea:function aea(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bki:function bki(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ae9:function ae9(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bkh:function bkh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dxb:function dxb(d){this.a=d},
dxc:function dxc(d,e){this.a=d
this.b=e},
aDw:function aDw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aJF:function aJF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeb:function aeb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dxl:function dxl(d){this.a=d},
Gw:function Gw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hoY(d){var w=d.T,v=x.N
return w.jq(w,new C.ceF(),v,v)},
hUu(d){var w=d.bF
if(w>=0)return w
return 5},
hp_(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hoY(d).h(0,v)
if(w==null||w.length===0)return null
return A.bj(w)},
hoZ(d,e){var w=C.hp_(d,e)
if(w!=null&&w.cf(new A.V(Date.now(),0,!1)))return!0
return!1},
hUv(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a3(C.hoY(d),w,w)
u=C.hp_(d,e)
t=u!=null&&u.cf(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bR(A.dv(30,0,0,0,0,0).a).aa().ag())
d.T=v},
b12(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b12=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lz(t,B.Jq),$async$b12)
case 3:if(l){u=!0
w=1
break}u=A.lc(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Jq,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b12,v)},
ceF:function ceF(){},
hUs(){var w,v=$.os(),u=J.e2(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.he(u)},
Jn(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Jn=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$Jn)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_family_tree_backup_codes_v1",null,!1,B.bM),$async$Jn)
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
return A.i($async$Jn,v)},
a88(d){return C.hUt(d)},
hUt(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a88=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$a88)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_family_tree_backup_codes_v1",A.I(["codes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cL,null),$async$a88)
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
return A.i($async$a88,v)},
ceE(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$ceE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Jn(),$async$ceE)
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
return A.i($async$ceE,v)},
Oi(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Oi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.ceE(d),$async$Oi)
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
o=A.dM(A.a3(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,t,o)
w=9
return A.b(C.a88(s),$async$Oi)
case 9:case 8:u=t
w=1
break
case 5:n=C.hUs()
w=10
return A.b(C.Jn(),$async$Oi)
case 10:s=f
J.aK(s,n,A.I(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a88(s),$async$Oi)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Oi,v)},
b11(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b11=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Jn(),$async$b11)
case 3:t=f
for(s=J.dm(t),r=s.gdO(t),r=r.dn(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.J)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a88(t),$async$b11)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b11,v)},
a89(d,e,f){var w=0,v=A.j(x.H),u
var $async$a89=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.aqY(d,e),$async$a89)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Oi(d),$async$a89)
case 7:w=4
break
case 5:w=8
return A.b(C.b11(d),$async$a89)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a89,v)},
aqS(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aqS=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.aqY(f,e),$async$aqS)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c8(),$async$aqS)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Jn(),$async$aqS)
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
return A.i($async$aqS,v)},
b10(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b10=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c8(),$async$b10)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Jn(),$async$b10)
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
return A.i($async$b10,v)},
hUw(){var w,v=$.os(),u=J.e2(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.he(u)},
aqV(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$aqV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$aqV)
case 3:if(!g){u=null
w=1
break}t=C.hUw()
w=4
return A.b(A.Wg(),$async$aqV)
case 4:s=g
r=B.dS.aN(B.Y.az(d.f2(),null))
r=B.cP.gcu().aN(r)
q=e?999:2
J.aK(s,t,A.I(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a8a(s),$async$aqV)
case 5:p=e?999:2
u=new A.a1i("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqV,v)},
aqU(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aqU=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Wg(),$async$aqU)
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
return A.b(C.b10(J.k(l==null?"":l),j),$async$aqU)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.c9.cH(0,B.cI.aN(t))
s=C.hp0(r)}catch(f){q=A.ab(f)
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
return A.b(A.a8a(p),$async$aqU)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqU,v)},
hp0(d){var w,v,u,t,s=null
try{w=B.Y.aQ(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hUy(A.a3(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
h81(d){var w=0,v=A.j(x.m),u,t,s
var $async$h81=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aqU(t[1])
w=1
break}u=null
w=1
break}u=C.hp0(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h81,v)},
hUy(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.dd(v,x.f)
u=A.cF(u,new C.ceH(),u.$ti.k("M.E"),x.k)
t=A.a4(u).k("Y<M.E>")
s=A.C(new A.Y(u,new C.ceI(),t),t.k("M.E"))}else s=A.a([],x._)
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
n=A.cF(n,new C.ceJ(),n.$ti.k("M.E"),o)
k=A.a4(n).k("Y<M.E>")
j=A.C(new A.Y(n,new C.ceK(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.aqW(h,w,s,r,q)},
aqY(d,e){var w=0,v=A.j(x.y),u,t
var $async$aqY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.O9(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Bo(d),$async$aqY)
case 3:u=t.cI(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqY,v)},
ceQ(d){var w=0,v=A.j(x.bC),u,t,s
var $async$ceQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Bo(d),$async$ceQ)
case 3:t=s.b7(f,new C.ceR(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aZ(t,new C.ceS())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ceQ,v)},
Wh(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Wh=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.aqY(e,d),$async$Wh)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Oi(e),$async$Wh)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Bo(e),$async$Wh)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dI(r,new C.ceO(g))
r=A.C(t,t.$ti.k("M.E"))}t=J.a7(r)
if(t.gau(r)){u=null
w=1
break}t=t.dL(r,new C.ceP(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.LE(e,o),$async$Wh)
case 14:n=i
if(J.cI(n))q.n(0,o,n)
case 12:r.length===t||(0,A.J)(r),++p
w=11
break
case 13:u=new C.aqW(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Wh,v)},
b15(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b15=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Wh(d,e,f,g),$async$b15)
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
return A.i($async$b15,v)},
b14(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b14=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Wh(d,e,f,g),$async$b14)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.aqV(r,f),$async$b14)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aHG(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b14,v)},
Wi(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wi=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.h81(a0),$async$Wi)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aqS(g.a,d,e,f,s,r),$async$Wi)
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
return A.b(C.bDE(e,j),$async$Wi)
case 12:case 11:w=13
return A.b(C.aiC(e,j,s),$async$Wi)
case 13:h=n.h(0,i)
w=h!=null&&J.cI(h)?14:15
break
case 14:w=16
return A.b(C.Bz(e,i,h),$async$Wi)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.J)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.brl(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Wi,v)},
aqW:function aqW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ceM:function ceM(){},
ceN:function ceN(){},
ceL:function ceL(){},
ceH:function ceH(){},
ceI:function ceI(){},
ceJ:function ceJ(){},
ceK:function ceK(){},
ceR:function ceR(){},
ceS:function ceS(){},
ceO:function ceO(d){this.a=d},
ceP:function ceP(d){this.a=d},
hgX(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f3(null,x.H)
return A.hy(d,new C.aqX(w,e,g,i,f,h,null),!0,null,x.H)},
dgx(d,e,f,g,h,i,j,k){return new C.bgt(i,e,k,j,g,f,h,d,null)},
aqX:function aqX(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aF3:function aF3(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e2D:function e2D(d){this.a=d},
e2E:function e2E(d,e,f){this.a=d
this.b=e
this.c=f},
e2I:function e2I(d,e){this.a=d
this.b=e},
e2J:function e2J(d){this.a=d},
e2A:function e2A(d){this.a=d},
e2B:function e2B(d,e){this.a=d
this.b=e},
e2C:function e2C(d,e){this.a=d
this.b=e},
e2H:function e2H(d){this.a=d},
e2G:function e2G(d,e){this.a=d
this.b=e},
e2F:function e2F(){},
e2L:function e2L(d){this.a=d},
e2M:function e2M(d,e){this.a=d
this.b=e},
e2K:function e2K(d,e){this.a=d
this.b=e},
dgZ:function dgZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bgv:function bgv(d,e,f){this.d=d
this.e=e
this.a=f},
adq:function adq(d,e,f){this.c=d
this.d=e
this.a=f},
bgt:function bgt(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bgy:function bgy(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0r:function a0r(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aF2:function aF2(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e2v:function e2v(d,e){this.a=d
this.b=e},
e2w:function e2w(d){this.a=d},
e2x:function e2x(d){this.a=d},
e2y:function e2y(d){this.a=d},
e2z:function e2z(d){this.a=d},
a0s:function a0s(d){this.a=d},
blM:function blM(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e2N:function e2N(d,e){this.a=d
this.b=e},
b_A(d,e){return new C.b_z(d,e,null)},
b_z:function b_z(d,e,f){this.c=d
this.d=e
this.a=f},
ijT(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b2(d,11)},
irY(d){return A.bT(B.L,null,new C.fXv(new C.uh(A.S(d).ax.a===B.J)),d,!0,!0,!0,null,!1,!1,x.N)},
hqV(d,e){return new C.au0(e,d,null)},
aS3(d,e,f,g,h,i,j){var w=C.ijT(i)
if(w!=null)return A.by(e,new A.a6(j,f,new C.a7e(w,!0,null),null),B.aq)
return N.aRq(e,B.c_,f,g,h,i,j)},
lW:function lW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7e:function a7e(d,e,f){this.c=d
this.d=e
this.a=f},
blr:function blr(d,e){var _=this
_.e=_.d=$
_.cR$=d
_.b9$=e
_.c=_.a=null},
dOY:function dOY(d){this.a=d},
dOZ:function dOZ(){},
dP_:function dP_(d,e){this.a=d
this.b=e},
blq:function blq(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fXv:function fXv(d){this.a=d},
fXu:function fXu(d,e){this.a=d
this.b=e},
fXt:function fXt(d,e){this.a=d
this.b=e},
fXs:function fXs(d,e){this.a=d
this.b=e},
au0:function au0(d,e,f){this.c=d
this.d=e
this.a=f},
co9:function co9(d,e){this.a=d
this.b=e},
aN4:function aN4(){},
irJ(d){var w=null
return A.cf(w,w,!0,w,new C.fWT(),d,w,!0,!0,x.e2)},
isW(d,e,f,g,h){var w=null
return A.cf(w,w,!0,w,new C.h3u(h,g,f,e),d,w,!0,!0,x.N)},
irL(d,e){var w=null
return A.cf(w,w,!0,w,new C.fWX(e),d,w,!0,!0,x.dY)},
irK(d){var w=null
return A.cf(w,w,!0,w,new C.fWW(),d,w,!0,!0,x.c5)},
aV0:function aV0(d,e){this.a=d
this.b=e},
aV_:function aV_(d){this.a=d},
aT2:function aT2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fWT:function fWT(){},
h3u:function h3u(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fWX:function fWX(d){this.a=d},
fWW:function fWW(){},
a_5:function a_5(d,e){this.c=d
this.a=e},
aAf:function aAf(){var _=this
_.d=$
_.c=_.a=_.e=null},
d89:function d89(d){this.a=d},
d8a:function d8a(d){this.a=d},
d88:function d88(d,e){this.a=d
this.b=e},
d8b:function d8b(d){this.a=d},
d8c:function d8c(d){this.a=d},
a_4:function a_4(d){this.a=d},
aAe:function aAe(){this.d=$
this.c=this.a=null},
d85:function d85(d){this.a=d},
d86:function d86(d){this.a=d},
d87:function d87(d){this.a=d},
ZC:function ZC(d){this.a=d},
ayZ:function ayZ(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cGw:function cGw(){},
cGC:function cGC(d){this.a=d},
cGD:function cGD(d){this.a=d},
cGE:function cGE(d){this.a=d},
cGB:function cGB(){},
cGF:function cGF(d){this.a=d},
cGG:function cGG(d){this.a=d},
cGA:function cGA(){},
cGH:function cGH(d,e){this.a=d
this.b=e},
cGz:function cGz(d,e){this.a=d
this.b=e},
cGx:function cGx(d,e){this.a=d
this.b=e},
cGI:function cGI(d){this.a=d},
cGy:function cGy(){},
cGJ:function cGJ(d){this.a=d},
a2e:function a2e(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
by9:function by9(){this.d=$
this.c=this.a=null},
flE:function flE(d,e){this.a=d
this.b=e},
flF:function flF(d){this.a=d},
flG:function flG(d,e){this.a=d
this.b=e},
act:function act(d,e){this.a=d
this.b=e},
Gk:function Gk(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
by7:function by7(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
flC:function flC(d,e){this.a=d
this.b=e},
ayS:function ayS(d,e){this.c=d
this.a=e},
by8:function by8(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
flD:function flD(d){this.a=d},
by6:function by6(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aPb:function aPb(){},
aPc:function aPc(){},
bFC(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.j.bh(u),s=B.o.D(B.j.V((u-t)*100),0,99),r=d<0?"-":"",q=A.p4(B.o.u(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fVg(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cP(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cP(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.V,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cP(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b0(B.o.u(s),2,"0")
n.push(A.cP(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Z_(A.cP(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aRG(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aRG=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hV().l8(85,1280,B.eO),$async$aRG)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fq(),$async$aRG)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hqU()
w=9
return A.b(C.co8(q,r),$async$aRG)
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
return A.i($async$aRG,v)},
aS1(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aS1=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.co5(g)
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
return A.b(A.Hg(p,!0,null,o).dh(0,B.h2),$async$aS1)
case 9:n=a1
w=10
return A.b(n.lb(),$async$aS1)
case 10:m=a1
w=11
return A.b(m.b.hs(B.hg),$async$aS1)
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
return A.i($async$aS1,v)},
fVg:function fVg(){},
uh:function uh(d){this.a=d},
au_:function au_(d,e,f){this.c=d
this.d=e
this.a=f},
aGx:function aGx(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eUr:function eUr(d,e){this.a=d
this.b=e},
eUi:function eUi(d){this.a=d},
eUj:function eUj(d){this.a=d},
eUp:function eUp(d,e){this.a=d
this.b=e},
eUo:function eUo(d,e){this.a=d
this.b=e},
eUl:function eUl(d,e){this.a=d
this.b=e},
eUk:function eUk(d,e){this.a=d
this.b=e},
eUm:function eUm(d){this.a=d},
eUn:function eUn(d,e){this.a=d
this.b=e},
eUq:function eUq(d,e){this.a=d
this.b=e},
eUd:function eUd(d,e){this.a=d
this.b=e},
eUh:function eUh(d){this.a=d},
eUg:function eUg(d,e){this.a=d
this.b=e},
eUf:function eUf(d){this.a=d},
eUs:function eUs(d,e){this.a=d
this.b=e},
eUt:function eUt(d,e){this.a=d
this.b=e},
eUe:function eUe(d,e){this.a=d
this.b=e},
hE0(d,e,f){var w="thumbnailPath",v=e.aj()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.I(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
fVh(d,e,f){var w=0,v=A.j(x.N),u
var $async$fVh=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.Y.az(C.hE0(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fVh,v)},
bFE(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bFE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fVh(!0,d,e),$async$bFE)
case 4:w=3
return A.b(r.atY(g,d,e.a),$async$bFE)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dS.aN(B.Y.az(C.hE0(d,e,null),null))
u="NGMY_WS:"+B.kH.gcu().aN(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFE,v)},
hvu(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hgy(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d4(s,"NGMYWSSYNC2|"))return!0
if(J.d4(s,"NGMY_WS:"))return!0
if(J.eG(s,t))return!0
if(J.d4(s,"{"))try{w=B.Y.aQ(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
ip2(d){var w,v,u,t=C.hvu(d)
if(t==null)return null
if(C.hgy(t))return t
w=B.a.co(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b2(t,w))
if(C.hgy(v))return v}u=B.a.co(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b2(t,u))
if(C.hgy(v))return v}return null},
hgx(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d4(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d4(q,"NGMY_WS:")){v=B.c9.cH(0,B.cI.aN(J.nq(q,8)))
w=t.a(B.Y.aQ(0,v,r))}else w=t.a(B.Y.aQ(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.haF(A.a3(u,x.N,x.z))
return t}catch(s){return r}},
bFD(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bFD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.atX(t[1]),$async$bFD)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hgx(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hgx(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFD,v)},
hgw(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lD(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bF9(){var w=0,v=A.j(x.o),u,t
var $async$bF9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Hs(),$async$bF9)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hgx(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bF9,v)},
hF1(d,e,f,g){return A.bT(B.L,null,new C.h3h(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
h3h:function h3h(d,e,f){this.a=d
this.b=e
this.c=f},
aew:function aew(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eUv:function eUv(d,e){this.a=d
this.b=e},
eUw:function eUw(d,e){this.a=d
this.b=e},
eUx:function eUx(d,e){this.a=d
this.b=e},
eUy:function eUy(d,e){this.a=d
this.b=e},
eUu:function eUu(d){this.a=d},
atU:function atU(d,e,f){this.c=d
this.d=e
this.a=f},
bn8:function bn8(){var _=this
_.c=_.a=_.e=_.d=null},
eU8:function eU8(d,e){this.a=d
this.b=e},
eU9:function eU9(d){this.a=d},
eUa:function eUa(d){this.a=d},
atZ:function atZ(d){this.a=d},
aGw:function aGw(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eUc:function eUc(d){this.a=d},
eUb:function eUb(d){this.a=d},
hXM(d,e,f,g,h){return new C.OX(h,g,d,e,f,null)},
aLp:function aLp(d,e){this.a=d
this.b=e},
OX:function OX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGy:function aGy(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eUV:function eUV(){},
eUR:function eUR(d,e){this.a=d
this.b=e},
eUS:function eUS(d){this.a=d},
eUC:function eUC(d){this.a=d},
eUA:function eUA(d){this.a=d},
eUB:function eUB(d){this.a=d},
eUL:function eUL(d,e){this.a=d
this.b=e},
eUI:function eUI(d,e){this.a=d
this.b=e},
eUJ:function eUJ(d,e){this.a=d
this.b=e},
eUK:function eUK(d,e,f){this.a=d
this.b=e
this.c=f},
eUG:function eUG(d,e,f){this.a=d
this.b=e
this.c=f},
eUE:function eUE(d){this.a=d},
eUF:function eUF(d){this.a=d},
eUH:function eUH(d){this.a=d},
eUY:function eUY(d){this.a=d},
eUX:function eUX(d){this.a=d},
eUZ:function eUZ(d){this.a=d},
eUW:function eUW(d){this.a=d},
eUz:function eUz(d){this.a=d},
eUD:function eUD(d,e){this.a=d
this.b=e},
eUU:function eUU(d,e){this.a=d
this.b=e},
eUT:function eUT(d,e){this.a=d
this.b=e},
eUO:function eUO(d){this.a=d},
eUP:function eUP(d){this.a=d},
eUQ:function eUQ(d,e){this.a=d
this.b=e},
eUN:function eUN(d,e){this.a=d
this.b=e},
eUM:function eUM(d,e,f){this.a=d
this.b=e
this.c=f},
bzV:function bzV(){},
Bc(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ah0(d,e,f){return C.ida(d,e,f)},
ida(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ah0=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aB("String",e,f),$async$ah0)
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
return A.i($async$ah0,v)},
ah_(d,e){return C.id9(d,e)},
id9(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$ah_=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$ah_)
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
return A.i($async$ah_,v)},
ic_(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Tx(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bCD(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bCD=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b4i(q),$async$bCD)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aS1(q,!1),$async$bCD)
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
return A.i($async$bCD,v)},
hLb(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
haF(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.dd(s,x.f)
w=A.cF(w,new C.cFO(),w.$ti.k("M.E"),x.Q)
v=A.a4(w).k("Y<M.E>")
r=A.C(new A.Y(w,new C.cFP(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bj(J.k(t==null?"":t))
return new C.lD(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
ihj(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.wp
case"female":case"f":return D.os
default:return D.yW}},
hAx(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hkW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.ihj(v==null?j:J.k(v))
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
return new C.hU(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
ihl(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.OC
case"viewer":return D.kV
default:return D.uz}},
ihm(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Hh(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aQN(d,e){return B.a.i(e.toLowerCase())===C.Hh(d,e)&&d.y!==D.kV},
uv(d,e){var w,v=d.y
if(v===D.kV)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Hh(d,e))return!0
if(v===D.OC)return!0
v=d.e
return new A.N(v,A.hgD(),A.U(v).k("N<1,n>")).q(0,w)},
igG(d){return J.dI(d,new C.fFy()).gI(0)},
h42(d){var w=0,v=A.j(x.y),u,t
var $async$h42=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Bo(d),$async$h42)
case 3:u=t.rj(f,new C.h43(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h42,v)},
bDE(d,e){var w=0,v=A.j(x.H),u,t
var $async$bDE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Bo(d),$async$bDE)
case 3:t=g
if(J.rj(t,new C.fD6(e))){w=1
break}if(C.igG(t)>=2)throw A.W(A.bc("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bDE,v)},
am3(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.dd(h,x.f)
w=A.cF(w,new C.bSm(),w.$ti.k("M.E"),x.P)
v=A.a4(w).k("Y<M.E>")
g=A.C(new A.Y(w,new C.bSn(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b7(u,new C.bSo(),x.N)
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
n=C.ihl(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aU(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cq)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gR(f)
if(l.b(i))m.push(A.a3(i,k,j))}return new C.kT(w,v,s,!r,t,g,q,p,o,n,m)},
hAM(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.aC(v,0,8)},
Dz(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$Dz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Sv(d),$async$Dz)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$Dz)
case 4:t=f
w=5
return A.b(t.a7a(0),$async$Dz)
case 5:w=6
return A.b(C.ftr(t,l),$async$Dz)
case 6:s=f
if(J.cI(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a7(q)
o=A.aT(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hw4(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.p3(l,n),$async$Dz)
case 11:u=n
w=1
break
case 10:case 8:m=A.aT(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hw4(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.p3(l,n),$async$Dz)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Dz,v)},
ftr(d,e){return C.i9m(d,e)},
i9m(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$ftr=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a7(a3)
a5=A.aT(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Bc(a9)))
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
break}m=A.aT(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Bc(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.Y.aQ(0,m,null)
if(!a0.b(l)){w=7
break}k=C.haF(A.a3(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aT(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Bc(a9)+"_"+n))
i=C.ic_(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b4i(h),$async$ftr)
case 17:g=b1
if(g!=null){i=i.Tx(g)
p=!0}case 16:J.c7(q,i)
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
case 8:J.SE(q,new C.fts())
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
return A.i($async$ftr,v)},
bE5(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bE5=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Sv(d),$async$bE5)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.Dz(r),$async$bE5)
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
return A.i($async$bE5,v)},
hw4(d){var w,v,u,t
try{w=B.Y.aQ(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.dd(w,x.f)
v=A.cF(v,new C.fpc(),v.$ti.k("M.E"),x.fA)
u=A.a4(v).k("Y<M.E>")
v=A.C(new A.Y(v,new C.fpd(),u),u.k("M.E"))
B.d.aZ(v,new C.fpe())
return v}catch(t){v=A.a([],x.D)
return v}},
p3(d,e){return C.iry(d,e)},
iry(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
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
p=A.aT(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b7(x.j.a(B.Y.aQ(0,p,null)),new C.fWH(),a2).fM(0)
a2=J.b7(b3,new C.fWI(),a2).bY(0,new C.fWJ())
n=A.d1(a2,a2.$ti.k("M.E"))
a2=o,a2=A.dZ(a2,a2.r,A.a4(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eG(n,m)?17:18
break
case 17:a5=C.Bc(a8)
l=A.aT(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a9r(l),$async$p3)
case 19:t=21
a5=C.Bc(a8)
k=A.aT(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.Y.aQ(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.a9r(a5==null?null:J.k(a5)),$async$p3)
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
return A.b(C.ah_(r,"ngmy_worksheet_item_v3_"+C.Bc(a8)+"_"+m),$async$p3)
case 29:w=30
return A.b(C.ah_(r,"ngmy_worksheet_thumb_v3_"+C.Bc(a8)+"_"+m),$async$p3)
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
return A.b(C.bCD(h),$async$p3)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ah0(r,"ngmy_worksheet_thumb_v3_"+C.Bc(a8)+"_"+a4,f),$async$p3)
case 40:g=i.Tx(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ah_(r,"ngmy_worksheet_thumb_v3_"+C.Bc(a8)+"_"+a4),$async$p3)
case 41:g=i.Tx(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ah_(r,"ngmy_worksheet_thumb_v3_"+C.Bc(a8)+"_"+a4),$async$p3)
case 42:case 34:a4=i.a
w=43
return A.b(C.ah0(r,"ngmy_worksheet_item_v3_"+C.Bc(a8)+"_"+a4,B.Y.az(g.aj(),null)),$async$p3)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.c7(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ah0(r,"ngmy_worksheets_index_v3_"+C.Bc(a8),B.Y.az(q,null)),$async$p3)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eP(b3,new C.fWK(q))
a4=a3.$ti.k("cM<1,a8<n,@>>")
a7=A.C(new A.cM(a3,new C.fWL(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ah0(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.Y.az(a0,null)),$async$p3)
case 45:w=46
return A.b(J.hKh(r),$async$p3)
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
M4(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$M4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Dz(d),$async$M4)
case 3:t=g
s=J.cC(t)
r=s.bj(t,new C.h41(e))
if(r===-1)s.c4(t,0,e)
else s.n(t,r,e)
u=C.p3(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$M4,v)},
bDR(d,e){var w=0,v=A.j(x.H),u
var $async$bDR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Dz(d),$async$bDR)
case 2:u=g
J.nR(u,new C.fG1(e))
w=3
return A.b(C.p3(d,u),$async$bDR)
case 3:return A.h(null,v)}})
return A.i($async$bDR,v)},
Hj(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Hj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Hj)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aT(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.Y.aQ(0,i,null)
if(x.j.b(t)){j=J.dd(t,x.f)
j=A.cF(j,new C.fJc(),j.$ti.k("M.E"),x.k)
s=A.a4(j).k("Y<M.E>")
r=A.C(new A.Y(j,new C.fJd(),s),s.k("M.E"))
B.d.aZ(r,new C.fJe())
k=r}}catch(h){}w=4
return A.b(C.fq_(d),$async$Hj)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.i9K(k,p,d)
j=A.U(o)
s=j.k("N<1,a8<n,@>>")
s=A.C(new A.N(o,new C.fJf(),s),s.k("ak.E"))
n=B.Y.az(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.RF(d,o),$async$Hj)
case 7:case 6:j=j.k("Y<1>")
m=A.C(new A.Y(o,new C.fJg(d),j),j.k("M.E"))
if(m.length!==0)C.aQx(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Hj,v)},
fWt(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fWt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.RF(d,e),$async$fWt)
case 3:t=J.dI(e,new C.fWu(d))
s=A.C(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aQx(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fWt,v)},
a3R(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a3R=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a3R)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aT(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.Y.aQ(0,l,null)
if(x.j.b(u)){m=J.dd(u,x.f)
m=A.cF(m,new C.h3X(),m.$ti.k("M.E"),x.k)
t=A.a4(m).k("Y<M.E>")
s=A.C(new A.Y(m,new C.h3Y(),t),t.k("M.E"))
o=s}}catch(k){}q=J.qD(o,new C.h3Z(e))
if(B.a.i(e.x).length===0&&C.uv(e,d)){m=B.a.i(d.toLowerCase())
p=e.aG5(e.y===D.kV?D.kV:D.uz,m)}else p=e
if(q===-1)J.pX(o,0,p)
else J.aK(o,q,p)
w=3
return A.b(C.RF(d,o),$async$a3R)
case 3:w=C.uv(p,d)?4:5
break
case 4:w=6
return A.b(C.aQw(C.Hh(p,d),p),$async$a3R)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a3R,v)},
aQJ(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aQJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Hj(d),$async$aQJ)
case 2:u=g
t=J.cC(u)
s=A.nA(t.eP(u,new C.fFJ(e)))
t.bt(u,new C.fFK(e))
w=3
return A.b(C.RF(d,u),$async$aQJ)
case 3:w=s!=null&&C.aQN(s,d)?4:5
break
case 4:w=6
return A.b(C.fpg(e),$async$aQJ)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aQJ,v)},
aiS(d){var w=d.f,v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.h47(),v),v.k("M.E"))
return w},
he8(d,e){var w,v=d.f,u=A.nA(new A.Y(v,new C.fFd(e),A.U(v).k("Y<1>")))
v=C.aiS(d)
w=A.U(v).k("Y<1>")
v=A.C(new A.Y(v,new C.fFe(e,u),w),w.k("M.E"))
B.d.aZ(v,new C.fFf())
return v},
ihp(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hF5(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bj(C.he8(d,u),new C.h3v(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
iiY(d,e){var w
if(e==null||e.length===0)return 1
w=C.he8(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fK2(),A.U(w).k("N<1,H>")).f1(0,B.xM)+1},
irr(d){var w,v=C.aiS(d)
if(v.length===0)return null
w=new A.Y(v,new C.fWn(),A.U(v).k("Y<1>"))
if(!w.gau(0))return w.gH(0)
return B.d.gH(v)},
ihk(d){return A.I(["id",d.a,"name",d.b,"gender",C.hAx(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
iiS(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
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
n=n!==D.yW?n:q.c
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
d=q.aG0(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.J)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cPB(a1,w,a3.d,a2.y,s,a0,v)},
Bo(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$Bo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Bo)
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
p=A.cF(p,new C.fJ9(),p.$ti.k("M.E"),x.k)
s=A.a4(p).k("Y<M.E>")
p=A.C(new A.Y(p,new C.fJa(),s),s.k("M.E"))
B.d.aZ(p,new C.fJb())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Bo,v)},
aiC(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aiC=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.uz:D.kV
a7=C.Hh(b2,b3)
w=2
return A.b(C.Bo(b1),$async$aiC)
case 2:a8=b5
a9=J.cC(a8)
b0=a9.bj(a8,new C.fWi(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bDE(b1,b2),$async$aiC)
case 5:case 4:if(b0===-1){u=b2.aG5(a6,a7)
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
i=i!==D.yW?i:l.c
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
s.n(0,m,l.aG0(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("b8<2>")
s=A.C(new A.b8(s,k),k.k("M.E"))
k=a5?D.uz:D.kV
u=t.cPD(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.RF(b1,a8),$async$aiC)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aQw(B.a.i(b3.toLowerCase()),u),$async$aiC)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aiC,v)},
hwt(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("N<1,a8<n,@>>"),k=A.C(new A.N(m,C.hE9(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.I(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.I(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hwu(d,e){var w=new A.V(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("N<1,a8<n,@>>")
u=A.C(new A.N(u,C.hE9(),t),t.k("ak.E"))
return A.I(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
i7a(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a7(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.am3(A.a3(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hgD(),A.U(j).k("N<1,n>")).bY(0,new C.fpN())
t=A.C(j,j.$ti.k("M.E"))
if(u===v)s=D.uz
else s=B.d.q(t,u)?D.OC:D.kV
return w.aG5(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.am3(A.a3(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.dd(q,h)
h=A.cF(h,new C.fpO(),h.$ti.k("M.E"),x.P)
p=A.a4(h).k("Y<M.E>")
o=A.C(new A.Y(h,new C.fpP(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b7(n,new C.fpQ(),x.N).bY(0,new C.fpR())
t=A.C(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.uz
else s=B.d.q(t,u)?D.OC:D.kV
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
return new C.kT(h,r,p,!m,t,o,l,j,v,s,B.cd)},
fq_(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fq_=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fq3()
h=x.N
g=x.z
w=7
return A.b(A.iB(A.a([A.lI("family_trees","*",null,A.I(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bM),r.$2(A.lI("family_trees","*",A.I(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bM),"collaborator"),r.$2(A.lI("family_trees","*",null,A.I(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bM),"public")],x.cl),x.fO),$async$fq_)
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
h=A.a4(l).k("b8<2>")
h=A.cF(new A.b8(l,h),new C.fq0(a0),h.k("M.E"),x.k)
l=A.a4(h).k("Y<M.E>")
l=A.C(new A.Y(h,new C.fq1(),l),l.k("M.E"))
B.d.aZ(l,new C.fq2())
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
return A.i($async$fq_,v)},
i9K(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a7(e)
if(j.gau(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dL(e,new C.fu9(),v).bY(0,new C.fua())
t=A.d1(u,u.$ti.k("M.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.J)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Hh(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kV){m=q.e
m=!new A.N(m,A.hgD(),A.U(m).k("N<1,n>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gR(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.iiS(l,v)
o=C.Hh(k,w)
p=v.d
s.n(0,u,o===w?k.bfc(p,D.uz):k.bfc(p,v.y))}j=s.$ti.k("b8<2>")
j=A.C(new A.b8(s,j),j.k("M.E"))
B.d.aZ(j,new C.fub())
return j},
RF(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$RF=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$RF)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b7(e,new C.fx6(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aB("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.Y.az(s,null)),$async$RF)
case 3:return A.h(null,v)}})
return A.i($async$RF,v)},
aQw(d,e){return C.if4(d,e)},
if4(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aQw=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.md("family_trees",A.a([C.hwt(e,d)],p),null,B.cL),$async$aQw)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.md("family_trees",A.a([C.hwu(e,d)],p),null,B.cL),$async$aQw)
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
return A.i($async$aQw,v)},
aQx(d,e){return C.if5(d,e)},
if5(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aQx=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("N<1,a8<n,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fCm(d),n),m)
r=l
w=7
return A.b(A.md("family_trees",r,null,B.cL),$async$aQx)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fCn(d),n),m)
p=k
w=8
return A.b(A.md("family_trees",p,null,B.cL),$async$aQx)
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
return A.i($async$aQx,v)},
fpg(d){return C.i6o(d)},
i6o(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fpg=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.S4("family_trees",A.I(["id",d],x.N,x.z),null,B.cL),$async$fpg)
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
return A.i($async$fpg,v)},
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
cFR:function cFR(){},
cFQ:function cFQ(){},
cFO:function cFO(){},
cFP:function cFP(){},
Iq:function Iq(d,e){this.a=d
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
am2:function am2(d,e){this.a=d
this.b=e},
fFy:function fFy(){},
h43:function h43(d){this.a=d},
fD6:function fD6(d){this.a=d},
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
bSq:function bSq(){},
bSp:function bSp(){},
bSm:function bSm(){},
bSn:function bSn(){},
bSo:function bSo(){},
fts:function fts(){},
fpc:function fpc(){},
fpd:function fpd(){},
fpe:function fpe(){},
fWH:function fWH(){},
fWI:function fWI(){},
fWJ:function fWJ(){},
fWK:function fWK(d){this.a=d},
fWL:function fWL(){},
h41:function h41(d){this.a=d},
fG1:function fG1(d){this.a=d},
fJc:function fJc(){},
fJd:function fJd(){},
fJe:function fJe(){},
fJf:function fJf(){},
fJg:function fJg(d){this.a=d},
fWu:function fWu(d){this.a=d},
h3X:function h3X(){},
h3Y:function h3Y(){},
h3Z:function h3Z(d){this.a=d},
fFJ:function fFJ(d){this.a=d},
fFK:function fFK(d){this.a=d},
h47:function h47(){},
fFd:function fFd(d){this.a=d},
fFe:function fFe(d,e){this.a=d
this.b=e},
fFf:function fFf(){},
h3v:function h3v(d){this.a=d},
fK2:function fK2(){},
fWn:function fWn(){},
fJ9:function fJ9(){},
fJa:function fJa(){},
fJb:function fJb(){},
fWi:function fWi(d){this.a=d},
fpN:function fpN(){},
fpO:function fpO(){},
fpP:function fpP(){},
fpQ:function fpQ(){},
fpR:function fpR(){},
fq3:function fq3(){},
fq4:function fq4(d){this.a=d},
fq0:function fq0(d){this.a=d},
fq1:function fq1(){},
fq2:function fq2(){},
fu9:function fu9(){},
fua:function fua(){},
fub:function fub(){},
fx6:function fx6(){},
fCm:function fCm(d){this.a=d},
fCn:function fCn(d){this.a=d},
cFS:function cFS(d,e){this.a=d
this.b=e},
cFT:function cFT(d,e){this.a=d
this.b=e},
aIB:function aIB(d,e,f){this.a=d
this.b=e
this.c=f},
baA:function baA(){this.b=this.a=0},
baz:function baz(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bya:function bya(){},
xl(d,e){var w,v
if(d==null)return""
w=d.bT()
v=""+w.gcg()+"/"+w.gcz()+"/"+w.gcl()
if(!e)return v
return v+" "+B.a.b0(B.o.u(w.gnt()),2,"0")+":"+B.a.b0(B.o.u(w.gGK()),2,"0")},
hXJ(){var w,v=$.os(),u=J.e2(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"WS"+B.d.he(u)},
atV(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$atV=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$atV)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bM),$async$atV)
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
return A.i($async$atV,v)},
atW(d){return C.hXK(d)},
hXK(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$atW=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$atW)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_worksheet_project_qr_stashes_v1",A.I(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cL,null),$async$atW)
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
return A.i($async$atW,v)},
atY(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$atY=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$atY)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hXJ()
w=4
return A.b(C.atV(),$async$atY)
case 4:r=h
q=B.a.i(e)
p=B.dS.aN(t)
J.aK(r,s,A.I(["ownerEmail",q,"projectId",f,"payload",B.cP.gcu().aN(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.atW(r),$async$atY)
case 5:u=new A.a1i("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$atY,v)},
atX(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$atX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c8(),$async$atX)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.atV(),$async$atX)
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
try{s=B.c9.cH(0,B.cI.aN(t))}catch(h){r=A.ab(h)
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
return A.b(C.atW(q),$async$atX)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$atX,v)},
hqU(){var w=new A.V(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cN.aw(999999)},
hXL(d){var w,v,u,t,s,r,q
try{w=A.ahu(d)
if(w==null)return d
v=w
if(J.Ma(v)>960||J.M9(v)>960){s=v
r=J.Ma(v)>=J.M9(v)?960:null
v=A.ahr(s,J.M9(v)>J.Ma(v)?960:null,B.Q_,r)}s=v
u=A.ano(82).TU(s,B.zA)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cc(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
co8(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$co8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hXL(e)
$.co4.n(0,s,t)
u=C.bFG(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$co8,v)},
b4i(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b4i=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d4(l,"data:image")){u=null
w=1
break}t=4
r=J.eG(l,",")?B.d.gan(J.lM(l,",")):l
q=B.cI.aN(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hqU()
w=7
return A.b(C.co8(p,q),$async$b4i)
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
return A.i($async$b4i,v)},
co5(d){var w=0,v=A.j(x.T),u,t,s
var $async$co5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(N.co7(s),$async$co5)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cP.gcu().aN(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$co5,v)},
a9r(d){var w=0,v=A.j(x.H),u,t
var $async$a9r=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=N.hE1(d)
if(t==null){w=1
break}$.co4.W(0,t)
w=3
return A.b(C.bFF(t),$async$a9r)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a9r,v)},
bFG(d,e){return C.ip5(d,e)},
ip5(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bFG=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aPp
w=7
return A.b(n==null?$.aPp=N.hcY():n,$async$bFG)
case 7:r=g
q=new Uint8Array(A.cc(e))
p=J.n2(r,"thumbs","readwrite")
B.j7.mx(J.n1(p,"thumbs"),q,l)
w=8
return A.b(J.pW(p),$async$bFG)
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
return A.i($async$bFG,v)},
bFF(d){return C.ip3(d)},
ip3(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bFF=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aPp
w=7
return A.b(o==null?$.aPp=N.hcY():o,$async$bFF)
case 7:r=f
q=J.n2(r,"thumbs","readwrite")
B.j7.Gk(J.n1(q,"thumbs"),m)
w=8
return A.b(J.pW(q),$async$bFF)
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
return A.i($async$bFF,v)}},D,Aw,Ax,A_,Ay,Az
J=c[1]
A=c[0]
B=c[2]
N=c[61]
P=c[260]
A0=c[166]
S=c[60]
A9=c[235]
L=c[215]
H=c[35]
E=c[225]
T=c[122]
Aa=c[238]
Q=c[106]
Ab=c[137]
U=c[231]
Ac=c[117]
Ad=c[201]
A1=c[119]
Ae=c[234]
Af=c[44]
R=c[233]
Ag=c[125]
A2=c[202]
Ah=c[254]
Ai=c[192]
Aj=c[205]
M=c[91]
A3=c[87]
Ak=c[172]
A4=c[132]
A5=c[175]
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
C.apB.prototype={}
C.b_B.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bjw(),f=h.x!=null&&h.zG(i).length===0
if(h.x!=null)w=f?B.b1:B.bC
else w=h.gUz()?B.bC:B.dX
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.L(D.boJ,B.r,1)
s=x.p
r=A.q(i,A.x(A.a([A.q(i,D.f8V,B.f,i,i,new A.p(B.b1.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.hb,i,i,i),B.X,D.fEH,B.ax,A.d(C.xl(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fAn,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,D.b71,i,i,i,i,B.a0p,i,i,i)
q=A.m(16)
p=A.L(B.aO,B.r,1)
o=A.L(B.b1.j(0.28),B.r,1)
n=A.hfb(h.d)
o=A.q(B.A,C.b_A(A.fMn(h.e,n),30),B.f,i,i,new A.p(B.m5,i,o,i,i,i,B.a7),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fvr,B.K,i,i)
m=A.m(14)
l=A.L(B.aO,B.r,1)
q=A.q(i,A.x(A.a([o,B.U,n,B.bH,D.fF_,B.af,A.q(i,A.x(A.a([D.fV8,B.bH,A.d(A.Bq(h.c),i,i,i,i,i,i,D.fq6,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.c,i,l,m,i,i,B.n),i,i,i,i,B.f3,i,i,1/0)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.aP,i,p,q,i,i,B.n),i,i,i,i,O.alH,i,i,i)
p=A.m(16)
m=A.L(B.aO,B.r,1)
l=j.aT9("Original due",C.xl(h.r,!1))
n=j.aT9("Current due",C.xl(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.X,A.q(i,A.x(A.a([l,B.U,n,B.X,A.q(i,A.d(h.gaNc(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.p(o,i,i,k,i,i,B.n),i,i,i,i,B.Cb,i,i,1/0),B.X,j.cks(),B.U,j.c7e(g,f)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bi,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.L(B.aO,B.r,1)
B.d.v(p,A.a([B.X,A.q(i,A.x(A.a([D.fFX,B.ax,A.d(q,i,i,i,i,i,i,D.fuF,i,i,i)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bi,i,i,1/0)],s))}if(h.gaHM()){q=A.m(14)
o=A.L(B.cu,B.r,1.6)
B.d.v(p,A.a([B.X,A.q(i,A.x(A.a([D.fWu,B.U,A.by(A.m(12),A.e8(new A.a6(1/0,88,A.b4(i,i,i,new A.X2(h.ax,B.S,D.fdF,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.c,i,o,q,i,i,B.n),i,i,i,i,B.GI,i,i,i)],s))}p.push(B.aB)
p.push(D.fOg)
return A.q(i,A.x(A.a([r,new A.D(B.a0e,A.x(p,B.al,i,B.e,B.i,0,B.p),i)],s),B.al,i,B.e,B.Q,0,B.p),B.aq,i,i,new A.p(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aT9(d,e){var w=null
return A.A(A.a([A.E(A.d(d,w,w,w,w,w,w,D.abk,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fr9,w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
cks(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.aap(B.dX,u,"Not paid yet")
w=t.zG(null).length
v=w===0?B.b1:B.bC
return this.aap(v,u,C.xl(t.x,!0))},
c7e(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.aap(B.b1,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.aap(B.b1,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.abk,u,u,u)
v=A.U(d).k("N<1,h2>")
v=A.C(new A.N(d,new C.c7F(),v),v.k("ak.E"))
return A.x(A.a([w,B.an,A.bU(B.bG,v,B.bs,u,6,6)],x.p),B.E,u,B.e,B.i,0,B.p)},
aap(d,e,f){var w=null
return A.A(A.a([A.E(A.d(e,w,w,w,w,w,w,D.abk,w,w,w),1),new A.dn(1,B.cp,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.e_,w,w),w)],x.p),B.E,w,B.e,B.i,0,w,w)}}
C.bcM.prototype={
a5(d,e){new A.X2(this.b,B.S,e,!0,3.5,null).a5(d,e)},
aE(d){return d.b!==this.b}}
C.apN.prototype={
S(){return new C.aEw(A.a([],x.bp))},
ge3(){return this.c}}
C.aEw.prototype={
Y(){this.a4()
this.Jf()},
Jf(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Jf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a36(t.a.c),$async$Jf)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dPQ(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Jf,v)},
aV6(d,e){var w,v=null,u=this.a.d.a,t=u?B.S:B.aP,s=A.l(v,v,u?B.bu:B.br,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bu:B.br).j(0.22)
w=A.m(10)
return A.bt(v,new A.b6(4,r,new A.ay(u,1,B.r,-1)),v,B.bi,v,v,v,v,!0,new A.b6(4,w,new A.ay((this.a.d.a?B.bu:B.br).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.m(10),D.b4F),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aV5(d){return this.aV6(d,null)},
Q0(d){return this.co5(d)},
co5(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Q0=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.I0:B.eO
w=7
return A.b(new A.hV().CH(72,900,900,n),$async$Q0)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fq(),$async$Q0)
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
return A.i($async$Q0,v)},
b3e(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.S:B.aP,o=A.m(10),n=A.L((q?B.bu:B.br).j(0.18),B.r,1)
if(d)q=B.cG
else q=s.a.d.a?B.bu:B.br
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aP:B.as,r,r,r,r,r,r,r,r,12.5,r,r,B.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cG
else u=s.a.d.a?B.bu:B.br
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.i,0,B.p),1)
v=A.fu(r,r,r,r,r,r,r,r,r,r,r,B.cG,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cf)
q=A.a([q,B.ae,u,A.bN(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aG(r,r,r,r,A.X(B.cz,s.a.d.a?B.bu:B.br,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cf))
return A.q(r,A.A(q,B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.p(p,r,n,o,r,r,B.n),r,r,r,B.jF,D.bBD,r,r,r)},
DE(d){return this.bDH(d)},
bDG(){return this.DE(null)},
bDH(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DE=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.au(new A.ba(a4,B.b6,B.aQ),s)
if(a3)a4=""
else{a4=a5.c
q=B.j.iY(a4)
p=a5.c
a4=a4===q?B.o.u(B.j.M(p)):B.j.ad(p,2)}o=new A.au(new A.ba(a4,B.b6,B.aQ),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.ba(a4,B.b6,B.aQ),s)
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
i=a3?null:A.hfb(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.wZ?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hR(B.w.j(0.55),!0,"Dismiss",a4,new C.dPz(),new C.dPA(a2,t,a5,r,new C.dPB(a2,t),o,n,j),B.eH,!0,x.y),$async$DE)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d2(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.T$=s
r.P$=0
o.T$=s
o.P$=0
n.T$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.L(x.q).f.U(D.fkb)
w=1
break}a0=a2.d
if(a0==null){t.c.L(x.q).f.U(D.fiR)
w=1
break}a1=A.fMn(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.wZ?"male":"female"
w=7
return A.b(A.aiR(a3,A.hnB(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$DE)
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
a3=A.c1(a3.gcl(),a3.gcg(),a3.gcz(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c1(a4.gcl(),a4.gcg(),a4.gcz(),0,0,0,0,0)))a5.cRY(a2.a)
w=8
return A.b(A.aiR(t.a.c,a5),$async$DE)
case 8:case 5:w=9
return A.b(t.Jf(),$async$DE)
case 9:case 1:return A.h(u,v)}})
return A.i($async$DE,v)},
aVM(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cG.j(0.14)
else w=this.a.d.a?B.S:B.aP
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cG
else s=(this.a.d.a?B.bu:B.br).j(0.2)
s=A.L(s,B.r,g?1.5:1)
r=C.b_A(d,18)
if(g)q=B.cG
else q=this.a.d.a?B.aP:B.as
return A.aI(!1,B.a3,!0,v,A.aP(!1,u,!0,A.q(p,A.A(A.a([r,B.bm,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.bb,B.i,0,p,p),B.f,p,p,new A.p(p,p,s,t,p,p,B.n),p,p,p,p,B.bW,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.aj)},
SR(d){return this.cFW(d)},
cFW(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$SR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hR(B.w.j(0.55),!0,"Dismiss",s,new C.dPT(),new C.dPU(t,d),B.h1,!0,x.y),$async$SR)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.aiR(t.a.c,d),$async$SR)
case 7:w=8
return A.b(t.Jf(),$async$SR)
case 8:case 1:return A.h(u,v)}})
return A.i($async$SR,v)},
Q_(d,e){return this.bOz(0,e)},
bOz(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Q_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lo(s,"Cancel","Delete",e.b+" \xb7 "+A.Bq(e.c)+" will be removed from this device.","Delete this debt?"),$async$Q_)
case 3:if(!g){w=1
break}w=4
return A.b(C.fFQ(t.a.c,e.a),$async$Q_)
case 4:w=5
return A.b(t.Jf(),$async$Q_)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Q_,v)},
agd(d){return this.chS(d)},
chS(d){var w=0,v=A.j(x.H),u=this,t
var $async$agd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bT(B.L,null,new C.dPN(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$agd)
case 2:return A.h(null,v)}})
return A.i($async$agd,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.es4
w=J.dI(m.d,new C.dPV())
v=A.C(w,w.$ti.k("M.E"))
w=J.dI(m.d,new C.dPW())
u=A.C(w,w.$ti.k("M.E"))
t=B.d.cJ(v,0,new C.dPX())
w=A.m(18)
s=m.a.d.a
r=s?D.cBh:D.aCy
q=A.L(s?B.cG.j(0.35):B.cG.j(0.18),B.r,1)
s=A.q(l,D.c29,B.f,l,l,new A.p(B.cG.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.au,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.as,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aI(!1,B.a3,!0,A.m(12),A.aP(!1,A.m(12),!0,D.erq,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dPY(m),l,l,l,l,l,l,l),B.f,B.cG,0,l,l,l,l,l,B.aj)],p),B.l,l,B.e,B.i,0,l,l)
o=A.E(m.cC1("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Bq(t)
r=A.a([A.q(l,A.x(A.a([s,B.af,A.A(A.a([o,B.ae,A.E(m.b9o(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.i,0,l,l)],p),B.E,l,B.e,B.i,0,B.p),B.f,l,l,new A.p(l,l,q,w,l,new A.a9(B.aA,B.aF,B.x,r,l,l),B.n),l,l,l,l,B.alE,l,l,l),B.aB],p)
if(J.cr(m.d)){w=m.a.d.a
s=w?B.ed:B.c
q=A.m(18)
o=A.L((w?B.bu:B.br).j(0.12),B.r,1)
n=A.q(l,D.bXW,B.f,l,l,new A.p(B.cG.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.as,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.q(l,A.x(A.a([n,B.af,w,B.ax,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.br,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.i,0,B.p),B.f,l,l,new A.p(s,l,o,q,l,l,B.n),l,l,l,l,D.bEf,l,l,1/0))}else{w=m.gcnm()
s=A.C(new A.N(v,w,A.U(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.an,new A.D(D.bFX,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.br,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.N(u,w,A.U(u).k("N<1,v>")))
B.d.v(s,q)}B.d.v(r,s)}return A.x(r,B.al,l,B.e,B.i,0,B.p)},
b9o(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.L((v.a.d.a?B.bu:B.br).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bu:B.br,u,u,u,u,u,u,u,u,11,u,u,B.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cG
else w=v.a.d.a?B.aP:B.as
return A.q(u,A.x(A.a([q,B.bH,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.i,0,B.p),B.f,u,u,new A.p(t,u,r,s,u,u,B.n),u,u,u,u,B.ey,u,u,u)},
cC1(d,e){return this.b9o(!1,d,e)},
cnn(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zG(j).length,h=d.biM()
if(d.x!=null){w=d.zG(j).length
v=w===0?B.cG:B.bC}else if(d.gUz())v=B.bC
else{if(h)w=B.cG
else w=k.a.d.a?B.bu:B.br
v=w}if(d.x!=null){w=d.zG(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xl(u,!1)}else{u.toString
t="Paid "+C.xl(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xl(w,!1)+" \xb7 "+i+" missed":"Due "+C.xl(w,!1)}w=k.a.d.a?B.ed:B.c
u=A.m(18)
if(d.gUz()&&d.x==null)s=B.bC.j(0.35)
else s=(k.a.d.a?B.bu:B.br).j(0.12)
s=A.L(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cM,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bq:B.m5
o=A.L(d.gUz()&&d.x==null?B.bC.j(0.45):B.cG.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hfb(d.d)
o=A.q(B.A,A.d8(C.b_A(A.fMn(d.e,m),24),n),B.f,j,j,new A.p(p,j,o,j,j,j,B.a7),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.as
m=x.p
n=A.a([new A.dn(1,B.cp,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaHM())B.d.v(n,A.a([B.e4,A.X(B.P3,B.cG.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.l,j,B.e,B.i,0,j,j),B.cU,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.V,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.i,0,B.p),1)
n=A.Bq(d.c)
l=k.a.d.a?B.aP:B.as
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.q(j,A.aI(!1,B.a3,!0,j,A.aP(!1,q,!0,new A.D(Ah.als,A.A(A.a([o,B.bd,p,B.ae,A.x(A.a([n,B.bH,A.X(B.eJ,(k.a.d.a?B.bu:B.br).j(0.5),j,j,j,18)],m),B.dL,j,B.e,B.i,0,B.p)],m),B.l,j,B.e,B.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dPP(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.aj),B.f,j,j,new A.p(w,j,s,u,r,j,B.n),j,j,j,B.d3,j,j,j,j)}}
C.uP.prototype={}
C.alR.prototype={
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
if(j&&!v)l.push(new A.D(B.iL,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.ayJ,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.H_,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.ev(m,A.A(l,B.l,a0,B.e,B.Q,0,a0,a0),B.f,B.e2)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bAO,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cH:B.bt,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fH,A.x(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.fet)
a2=A.a([A.A(n,B.l,a0,B.e,B.i,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.wf,A.q(a0,a0,B.f,a0,a0,new A.p(a0,a0,a0,a0,a0,new A.a9(B.a6,B.aa,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lK,A.x(a2,B.l,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.q(a0,e,B.f,a0,a0,new A.p(a0,a0,A.L(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hu,a0,a0,a0,a0)}return A.q(a0,e,B.f,a0,a0,new A.p(a0,a0,q,s,p,new A.a9(B.aA,B.aF,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bC6,a0,a0,a0,a0)}}
C.aWk.prototype={
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
if(p.z)o.push(new A.D(B.uq,n,q))
return new A.D(B.d3,A.x(o,B.l,q,B.e,B.Q,0,B.p),q)}}
C.TV.prototype={
S(){return new C.bgo()}}
C.bgo.prototype={
gc24(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aH(d,n,x.w).w,l=x.p,k=A.a([D.es_,D.es5],l)
for(w=0;w<8;++w){v=D.a4F[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.HN:B.zi
q=t===s
r=A.X(r,q?B.eL:B.bV,n,n,n,17)
q=q?B.c:B.ab
r=A.a([r,B.bm,A.d(v.b,n,n,n,n,n,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.ae,new A.bz(1,B.bc,A.d(v.c,n,1,B.a2,n,n,n,B.AK,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aN(24,24)
p=new A.ay(B.eL,2,B.r,-1)
s=new A.p(n,n,new A.bG(p,p,p,p),new A.be(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aA(n,new A.D(B.eI,A.x(A.a([new A.D(B.n0,new A.c6(B.aL,B.e,B.i,B.l,n,B.p,n,0,r,n),n),A.q(n,new A.dx(!0,new C.alR(v,q.d,q.e,new C.dfv(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.i,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dfw(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bCq,A.bI(D.h10,n,new C.dfx(o,d),A.bp(B.b8,n,n,n,n,B.oU,n,n,new A.b9(A.m(16),B.a1),n,n,n)),n))
return A.bm(!0,new A.cQ(new A.aY(0,1/0,0,m.a.b*0.9),A.cl(k,n,n,D.bGP,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nw.prototype={
aj(){var w=this
return A.I(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bfo(d,e,f){return new C.nw(this.a,e,d,f)}}
C.Ip.prototype={
wW(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Ip(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aFU(d){var w=null
return this.wW(w,w,w,w,w,d,w,w,w,w,w,w)},
cNA(d){var w=null
return this.wW(w,w,w,w,d,w,w,w,w,w,w,w)},
bfm(d,e,f){var w=null
return this.wW(d,w,w,w,w,w,w,w,e,w,f,w)},
cOe(d){var w=null
return this.wW(w,w,w,w,w,w,d,w,w,w,w,w)},
cOn(d){var w=null
return this.wW(w,w,w,w,w,w,w,w,w,d,w,w)},
cNy(d){var w=null
return this.wW(w,w,w,d,w,w,w,w,w,w,w,w)},
cOp(d){var w=null
return this.wW(w,w,w,w,w,w,w,w,w,w,w,d)},
cNv(d){var w=null
return this.wW(w,w,d,w,w,w,w,w,w,w,w,w)},
cNq(d){var w=null
return this.wW(w,d,w,w,w,w,w,w,w,w,w,w)},
Gd(d){var w=null
return this.wW(w,w,w,w,w,w,w,d,w,w,w,w)},
cOx(d,e,f,g,h,i,j,k,l,m,n){return this.wW(d,e,f,g,null,h,i,j,k,l,m,n)},
aj(){var w=this
return A.I(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cL4(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bR7(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.j.M(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.DJ.gev(D.DJ))
s=i==null?o:B.j.D(i,18,36)
r=l.$2("position",D.a6m)
q=l.$2("frame",D.a5H)
l=l.$2("texture",D.a5D)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cOx(p,u,t,q,r,A.rd(d.h(0,"ribbon"))?A.GU(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a_t.prototype={
S(){return new C.aBv(A.a([],x.I),D.OB)},
ge3(){return this.c}}
C.aBv.prototype={
Y(){var w,v=this
v.a4()
v.f=A.Ah(0,1)
w=$.aw()
v.z=new A.au(B.aw,w)
v.Q=new A.au(B.aw,w)
v.lg()
w=v.a
C.bE1(w.c,w.d).bG(new C.dgb(v),x.fL)},
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
break}t.m(new C.dg_(t,r))
t.axA()
case 1:return A.h(u,v)}})
return A.i($async$lg,v)},
gau9(){var w,v=this
if(!J.cr(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
axA(){var w,v,u=this.gau9(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.sb1(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.sb1(0,w==null?"":w)},
cgh(d){this.m(new C.dfX(this,d))
this.axA()},
NW(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$NW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nw(B.o.u(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aSp(r.c,r.d,s),$async$NW)
case 3:w=4
return A.b(t.lg(),$async$NW)
case 4:if(t.c==null||J.cr(t.d)){w=1
break}q=J.qD(t.d,new C.dfy(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.dfz(t,p))
t.axA()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.BG(p+1,B.cw,B.kR),$async$NW)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$NW,v)},
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
break}s=t.gau9()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aSp(o.c,o.d,new C.nw(s,r,q,new A.V(p,0,!1))),$async$Bm)
case 3:w=4
return A.b(t.lg(),$async$Bm)
case 4:if(t.c==null){w=1
break}t.m(new C.dg0(t))
case 1:return A.h(u,v)}})
return A.i($async$Bm,v)},
OC(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gau9()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dfH(r),s,null,!0,!0,x.y),$async$OC)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bDN(s.c,s.d,r.a),$async$OC)
case 4:t.m(new C.dfI(t))
w=5
return A.b(t.lg(),$async$OC)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.UC(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$OC,v)},
z2(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$z2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bm(),$async$z2)
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
return A.b(C.RW(s,r.r,o,p,q),$async$z2)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a5(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hEE(s,r.x,r.r),$async$z2)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.LE(s.c,s.d),$async$z2)
case 10:l=e
for(s=n.d,r=J.cC(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.J(l,new C.nw(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Bz(r.c,r.d,l),$async$z2)
case 11:w=12
return A.b(t.lg(),$async$z2)
case 12:r=t.c
if(r==null){w=1
break}r.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$z2,v)},
a1r(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1r=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bm(),$async$a1r)
case 5:case 4:if(t.c==null){w=1
break}s=t.gz0(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dP(D.zL,new C.dfY(t),new C.dfZ())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.mP("Our Family",o,"",""))
for(o=J.aU(t.d);o.C();){n=o.gR(o)
p.push(new H.mP(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hgT(o,new H.rM(s,r,"",p,new H.v4(q.d,null,null,null,null,"","","")),null),$async$a1r)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a1r,v)},
Ok(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Ok=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bm(),$async$Ok)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bT(D.agp,null,new C.dfD(t),s,!0,!0,!0,I.a9t,!1,!1,x.N),$async$Ok)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cNA(r)
t.m(new C.dfE(t,q))
s=t.a
w=7
return A.b(C.Sy(s.c,s.d,q),$async$Ok)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Ok,v)},
XR(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bT(D.agp,null,new C.dfJ(t),r,!0,!0,!0,I.a9t,!1,!1,x.e),$async$XR)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dfK(t,s))
r=t.a
w=4
return A.b(C.Sy(r.c,r.d,s),$async$XR)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.BG(0,B.dH,B.mX)
case 1:return A.h(u,v)}})
return A.i($async$XR,v)},
bUf(d){var w=d.bT(),v=B.a.b0(B.o.u(w.gcg()),2,"0"),u=B.a.b0(B.o.u(w.gcz()),2,"0")
return""+w.gcl()+"-"+v+"-"+u},
gz0(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c1i()
if(r.e)w=D.af7
else if(J.cr(r.d)){w=r.y
v=r.gz0(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fps,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a6(q,330,new A.D(X.amG,new C.ZL(w,v,0,q),q),q),B.by,t,B.an,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kM.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.by],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aA(q,A.q(q,D.f8H,B.f,q,q,new A.p(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dK.j(0.45),B.I,18)],x.V),E.wR,B.n),q,q,q,q,B.Og,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcK5(),q,q,q,q,q,q,!1,B.a4))
w.push(B.X)
w.push(A.ho(D.bU3,D.h0s,r.gaOT(),q))
B.d.v(u,w)}w=A.at(A.cd(A.x(u,B.l,q,B.e,B.Q,0,B.p),B.t,q,B.y,q,B.ez,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kM.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.V,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dW:B.Bk
u=A.x(A.a([new A.D(D.bDv,w,q),A.E(A.JO(v,new C.dg9(r),J.ad(r.d)+1,q,r.gcgg(),u,B.aL),1),r.bGB()],x.p),B.l,q,B.e,B.i,0,B.p)
w=u}v=x.p
return A.c4(q,D.Z3,new A.an(B.a0,q,B.b2,B.t,A.a([D.aQ2,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c1i(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cI(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.KM(B.ee,"AI",h.gbEt(),!0))
if(h.a.f)f.push(new C.KM(B.mi,"Cover",h.gbP8(),!1))
if(h.a.f)f.push(new C.KM(B.wL,"Header",h.gbK7(),!1))
if(J.cI(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.KM(B.uQ,"Print",h.gcpp(),!1))
if(h.a.f&&J.cI(h.d)&&h.r>=0){v=h.w
u=v?B.hI:B.j3
t=v?"Save":"Edit"
f.push(new C.KM(u,t,v?h.gcvI():new C.dfU(h),!1))}if(h.a.f)f.push(new C.KM(B.hW,"Add page",h.gaOT(),!1))
v=C.hAw(h.y.Q)
u=h.gz0(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.J)(f),++m){l=f[m]
if(l.d)k=D.dGH
else{k=new A.aN(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.ko.j(0.5),1,B.r,-1)
j=A.q(g,A.X(l.a,D.kM,g,g,g,17),B.f,g,g,new A.p(g,g,new A.bG(i,i,i,i),new A.be(k,k,k,k),g,new A.a9(B.a6,B.aa,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kM.j(0.85)
p.push(new A.bz(1,B.bc,A.aA(B.c5,A.x(A.a([k,B.bH,A.d(l.b,g,1,g,g,g,g,new A.G(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.Q,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.alR(v,u,t+" \xb7 "+s+" "+r,new C.dfV(h),A.A(p,B.l,g,B.e,B.i,0,g,g),g)},
Al(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Al=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bm(),$async$Al)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aU(t.d);r.C();){q=r.gR(r)
s.push(q.b+" "+q.c)}p=H.a3l(B.d.aO(s," "))
s=t.c
s.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.dfA(t,p),s,null,!0,!0,x.N),$async$Al)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.z2(),$async$Al)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Ee(),$async$Al)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.FR("Swahili (Kiswahili)",!0),$async$Al)
case 18:w=16
break
case 17:w=19
return A.b(t.cGz(o==="sw"?"Swahili (Kiswahili)":"English"),$async$Al)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$Al,v)},
ZM(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.L(E.ko.j(0.3),B.r,1),r=x.p
return new A.D(B.cx,A.aP(!1,v,!0,A.q(w,A.A(A.a([A.q(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.p(w,w,w,w,w,E.wR,B.a7),w,42,w,w,w,w,w,42),B.bd,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A3.KE,w,w,w),A.d(g,w,w,w,w,w,w,B.AL,w,w,w)],r),B.E,w,B.e,B.i,0,B.p),1)],r),B.l,w,B.e,B.i,0,w,w),B.f,w,w,new A.p(u,w,s,t,w,w,B.n),w,w,w,w,B.bi,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dfW(d,h),w,w,w,w,w,w,w),w)},
Ee(){return this.bTJ()},
bTJ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Ee=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dfN(r),a7,null,!0,!0,x.ei),$async$Ee)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eA("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.cf(null,null,!1,null,new C.dfO(o),a7,null,!0,!0,x.H).fv(new C.dfP(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.J)(d),++a1){k=d[a1]
J.c7(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.aj()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.zL[a1]
J.c7(j,i.a)}w=8
return A.b(C.ai_(a0,a7,new C.dfQ(o),d,l,e,j),$async$Ee)
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
if(l!=null&&a6.a)A.a5(l,!0).eE()
l=o
l.sic($.aw())
J.aSS(l,0)
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
a7=j.bfo(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Bz(j.c,j.d,l),$async$Ee)
case 11:w=12
return A.b(r.lg(),$async$Ee)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.zL[a1].a)
a5=l.cL4(j,12,a7)
l=r.a
w=15
return A.b(C.Sy(l.c,l.d,a5),$async$Ee)
case 15:if(r.c!=null)r.m(new C.dfR(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.BG(0,B.dH,B.mX)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.L(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b3(a3?A.czD("Undo",new C.dfS(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.ek,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ee,v)},
FR(d,e){return this.cGA(d,e)},
cGz(d){return this.FR(d,!1)},
cGA(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$FR=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eA("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.cf(null,null,!1,null,new C.dg2(a0),k,null,!0,!0,x.H).fv(new C.dg3(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.J)(k),++i){n=k[i]
J.c7(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a3y(m,new C.dg4(a0)),$async$FR)
case 10:w=8
break
case 9:w=11
return A.b(C.bFw(new C.dg5(a0),m,a2),$async$FR)
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
if(o!=null&&f.a)A.a5(o,!0).eE()
o=a0
o.sic($.aw())
J.aSS(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.L(x.q).f
k=q
o.U(A.b3(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bfo(J.t(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Bz(k.c,k.d,o),$async$FR)
case 12:w=13
return A.b(r.lg(),$async$FR)
case 13:o=r.c
if(o==null){w=1
break}o=o.L(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(A.czD("Undo",new C.dg6(r,d),null),null,null,null,null,B.t,null,k,null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$FR,v)},
bGB(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dfB(v):u
r=A.aG(u,u,u,u,A.X(D.bPL,s?D.kM:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cI(v.d)&&!v.w&&v.r>=0)s=A.ho(A.X(B.wu,B.Gl,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.Gl,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbOJ(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kM.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.at(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dfC(v):u
return A.bm(!0,new A.D(D.bDj,A.A(A.a([r,s,A.aG(u,u,u,u,A.X(B.eJ,t<J.ad(v.d)?D.kM:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.i,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a_x.prototype={
S(){return new C.bgN(new A.au(B.aw,$.aw()))}}
C.bgN.prototype={
ga2z(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a3()},
gbSk(){switch(this.ga2z()){case"cover":var w=D.d7K
break
case"book":w=D.d36
break
default:w=D.dyY
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.m(26),n=E.ko.j(0.5),m=x.p,l=A.A(A.a([D.dGI,B.au,D.bJ3,A.aG(p,p,p,p,B.lp,p,p,p,new C.dhY(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.i,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jv(p,p,p,A.d("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dhZ(q),q.ga2z()==="page",p,p,p,p))
if(q.a.d)k.push(A.jv(p,p,p,D.fVZ,p,new C.di_(q),q.ga2z()==="book",p,p,p,p))
k.push(A.jv(p,p,p,D.fIE,p,new C.di0(q),q.ga2z()==="cover",p,p,p,p))
k=A.bU(B.bG,k,B.bs,p,6,8)
j=B.c.j(0.07)
j=A.aM(p,B.Z,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bt(p,new A.b6(4,A.m(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kh,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dg,!0,B.a5,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbSk(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.d(s,p,p,p,p,p,p,B.KB,p,p,p)
w.push(A.n3(p,B.c.j(0.08),r,B.hi,new C.di1(q,s),p,p,p,p))}return A.eO(p,E.BQ,A.cd(A.x(A.a([l,B.X,D.fZj,B.an,k,B.af,j,B.U,A.bU(B.bG,w,B.bs,p,6,6),B.aB,A.dh(D.bU0,D.h_6,new C.di2(q,d),A.bp(B.b8,p,p,p,p,B.oU,p,p,new A.b9(A.m(16),B.a1),p,p,p)),B.ax,D.fUd],m),B.E,p,B.e,B.Q,0,B.p),B.t,p,B.y,p,B.fs,p,p,B.ah),p,p,p,I.a0s,B.d7,p,new A.b9(o,new A.ay(n,1.4,B.r,-1)),p)}}
C.a_v.prototype={
S(){return new C.aBy(A.a([],x.gA))},
ge3(){return this.c}}
C.afH.prototype={}
C.aBy.prototype={
Y(){this.a4()
this.lg()},
lg(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.S0(p.c,p.d),$async$lg)
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
return A.b(C.bE1(r.c,q),$async$lg)
case 6:j=e
i=J
w=7
return A.b(C.LE(t.a.c,q),$async$lg)
case 7:m.push(new l.afH(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.dgq(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lg,v)},
baF(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
QO(d,e){return this.chP(0,e)},
chP(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$QO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a5(s,!1).cd(A.ec(new C.dgp(u,e),!0,null,x.y)),$async$QO)
case 2:t=g
w=3
return A.b(u.lg(),$async$QO)
case 3:if(t===!0&&u.c!=null)u.c.L(x.q).f.U(D.aTV)
return A.h(null,v)}})
return A.i($async$QO,v)},
FT(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$FT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.L(x.q).f.U(D.aTR)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ahi(s.c,s.d),$async$FT)
case 5:q=e
w=6
return A.b(t.lg(),$async$FT)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.QO(0,B.d.fe(t.d,new C.dgu(q))),$async$FT)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.RW(p,s.f,r,n,o),$async$FT)
case 10:m=e
w=11
return A.b(t.lg(),$async$FT)
case 11:if(m&&t.c!=null)t.c.L(x.q).f.U(D.aTV)
case 1:return A.h(u,v)}})
return A.i($async$FT,v)},
Qf(d,e){return this.ctq(0,e)},
ctq(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dgt(t,e),s,null,!0,!0,x.y),$async$Qf)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a3L(s.c,s.d,e.a),$async$Qf)
case 4:w=5
return A.b(t.lg(),$async$Qf)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qf,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)k.push(o.bGE(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.L(E.ko.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aA(n,new A.fH(0.7142857142857143,A.q(n,A.x(A.a([D.dGJ,B.af,D.er0,B.ax,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kM.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.bb,B.i,0,B.p),B.f,n,n,new A.p(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcK1(),n,n,n,n,n,n,!1,B.a4))}w=A.m(22)
v=A.L(E.ko.j(0.85),B.r,1.6)
s=A.aA(n,A.q(n,D.c0X,B.f,n,n,new A.p(B.w.j(0.3),n,A.L(E.ko.j(0.6),B.r,1),n,n,n,B.a7),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dgv(d),n,n,n,n,n,n,!1,B.a4)
r=A.m(14)
q=B.w.j(0.3)
p=A.L(E.ko.j(0.5),B.r,1)
w=A.q(n,A.A(A.a([s,B.bd,D.bJr,A.q(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.fos,n,n,n),B.f,n,n,new A.p(q,n,p,r,n,n,B.n),n,n,n,n,B.hb,n,n,n)],l),B.l,n,B.e,B.i,0,n,n),B.f,n,n,new A.p(n,n,v,w,n,D.c6S,B.n),n,n,n,Ay.O0,D.bBi,n,n,n)
if(o.e)k=D.af7
else k=k.length===0?D.bca:A.cs(new C.dgw(k))
return A.c4(n,D.Z3,new A.an(B.a0,n,B.b2,B.t,A.a([D.aQ2,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bGE(d){var w,v,u=this,t=null,s=u.baF(d),r=d.c,q=x.p,p=A.a([A.bR(0,A.ev(B.A,new A.a6(300,420,new C.ZL(d.b,s,r,t),t),B.f,B.dB),0,0,0)],q)
if(u.a.e)p.push(A.ap(t,A.aA(t,A.q(t,D.c0f,B.f,t,t,new A.p(B.w.j(0.55),t,A.L(B.aT,B.r,1),t,t,t,B.a7),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dgn(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.fo1,t,t,t)
v=r===1?"page":"pages"
return A.aA(t,A.x(A.a([new A.fH(0.7142857142857143,new A.an(B.a0,t,B.ad,B.t,p,t),t),B.U,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kM.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.i,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dgo(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.KM.prototype={}
C.ZL.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dP(D.zL,new C.cOP(m),new C.cOQ()),j=m.c,i=D.DJ.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mr:B.bb
v=new C.cOR(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.enH,28)],x.V)
u=x.p
t=A.a([A.bR(0,A.b4(l,l,l,new C.be_(j.x,h,l),B.az),0,0,0),A.ap(0,A.q(l,l,B.f,l,l,new A.p(l,l,l,l,l,new A.a9(B.a6,B.aa,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aN(3,3)
t.push(new A.cL(8,40+s*46,l,l,l,l,A.q(l,l,B.f,l,l,new A.p(h.j(0.7),l,l,new A.be(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.amH,8,0.85,2.2),v.$4(D.bGf,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.amH,8,0.85,2.4))
else if(r==="corners")t.push(A.bR(0,new A.D(D.bGb,A.b4(l,l,l,new C.bdR(h,l),B.az),l),0,0,0))
r=A.X(D.aBu[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.ayJ,l,l),B.K,l,l)
p=A.q(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.af,p,B.af,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cH,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aR,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bR(0,new A.D(D.bGG,A.x(o,B.l,l,w,B.i,0,B.p),l),0,0,0))
if(j.z)t.push(A.ap(l,A.b4(l,l,l,new C.aIw(l),D.fdy),l,l,l,46,0,l))
return A.q(l,A.by(D.adL,new A.an(B.a0,l,B.ad,B.t,t,l),B.aq),B.f,l,l,new A.p(l,l,l,D.adL,i,new A.a9(B.aA,B.aF,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.be_.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e4()
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
m=new A.bv()
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
C.bdR.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.Q(),j=A.K(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.a9
j.c=2.4
j.d=B.bw
for(w=e.a,v=e.b,v=[D.f3a,new A.cu([w,0,-1,1]),new A.cu([0,v,1,-1]),new A.cu([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
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
C.uQ.prototype={}
C.a_3.prototype={
S(){return new C.bdY()}}
C.bdY.prototype={
gop(){var w=this.d
return w===$?this.d=this.a.c:w},
gz0(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.ba(w.b,B.b6,B.aQ),$.aw())}return v},
gaD5(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.ba(w.c,B.b6,B.aQ),$.aw())}return v},
gasI(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.ba(w.y,B.b6,B.aQ),$.aw())}return v},
t(){var w=this,v=w.gz0(0),u=v.T$=$.aw()
v.P$=0
v=w.gaD5()
v.T$=u
v.P$=0
v=w.gasI()
v.T$=u
v.P$=0
w.a3()},
atk(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jv(s,s,s,A.d(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.d7n(this,f,u),e===u,s,s,s,s))}return A.bU(B.bG,r,B.bs,s,6,8)},
az5(d){var w=null,v=B.c.j(0.07)
return A.bt(w,new A.b6(4,A.m(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lU,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gop(),a0=f.gz0(0),a1=a0.a.a,a2=f.gaD5(),a3=a2.a.a,a4=f.gasI(),a5=d.bfm(a4.a.a,a3,a1)
a1=x.w
a3=A.aH(a6,e,a1).w
a1=A.aH(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a6(190,260,A.ev(B.A,new A.a6(270,370,new C.ZL(a5,d,f.a.e,e),e),B.f,B.dB),e),e,e,e)
a0=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.az5("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d7M(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a5,e,B.ao,e,e,e,e)
a2=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.az5("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d7N(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a5,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.zL[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aT
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.q(e,e,B.f,e,e,new A.p(e,e,new A.bG(o,o,o,o),e,e,new A.a9(B.aA,B.aF,B.x,t.c,e,e),B.a7),e,46,e,e,e,e,e,46)
q=q?B.c:B.aD
v.push(A.aA(e,A.x(A.a([p,B.cU,A.d(t.b,e,e,e,e,e,e,new A.G(!0,q,e,e,e,e,10.5,B.V,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d7O(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bU(B.bG,v,B.bs,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b8.j(0.35):B.c.j(0.07)
m=new A.aN(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eL:B.L,2,B.r,-1)
q.push(A.aA(e,A.q(e,A.X(D.aBu[n],B.c,e,e,e,24),B.f,e,e,new A.p(p,e,new A.bG(o,o,o,o),new A.be(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d7P(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bU(B.bG,q,B.bs,e,8,8)
a4=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.az5("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d7Q(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a5,e,B.ao,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,M.vB,e,e,e)
m=A.a([],w)
for(l=D.DJ.gdO(D.DJ),l=l.gae(l);l.C();){k=l.gR(l)
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
m.push(A.aA(e,A.x(A.a([j,B.bH,A.d(i,e,e,e,e,e,e,new A.G(!0,h,e,e,e,e,10,B.V,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d7R(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bU(B.bG,m,B.bs,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,M.vB,e,e,e)
k=f.gop()
return new A.D(new A.R(0,0,0,a3.f.d),A.bm(!0,new A.cQ(new A.aY(0,1/0,0,a1.a.b*0.92),A.cl(A.a([D.fTE,B.af,d,B.aR,a0,B.X,a2,B.aB,D.fZT,B.U,v,B.aB,D.fTO,B.U,q,B.aB,a4,B.aB,p,B.U,m,B.aB,l,A.kV(e,9,""+B.j.V(f.gop().f),36,18,new C.d7S(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,M.vB,e,e,e),B.an,f.atk(D.a6m,f.gop().r,new C.d7T(f),D.dCc),B.af,A.d("BORDER",e,e,e,e,e,e,M.vB,e,e,e),B.an,f.atk(D.a5H,f.gop().w,new C.d7U(f),D.dCi),B.af,A.d("COVER MATERIAL",e,e,e,e,e,e,M.vB,e,e,e),B.an,f.atk(D.a5D,f.gop().x,new C.d7W(f),D.dDO),B.an,A.iQ(e,B.b8,e,B.ag,e,new C.d7X(f),e,e,e,D.fNM,f.gop().z),B.by,A.bI(D.fSi,e,new C.d7Y(f,a6),A.bp(B.b8,e,e,e,e,B.oU,e,e,new A.b9(A.m(16),B.a1),e,e,e))],w),e,e,A_.ame,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aIw.prototype={
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
u.sav(D.c7x.aK(0,new A.a1(0,0,0+w,0+v)))
d.af(t,u)},
aE(d){return!1}}
C.bjk.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.Q()
w=A.K()
w.sav(D.c6x.aK(0,new A.a1(0,0,a2,a3)))
a4.ar(new A.a1(0,0,a2,a3),w)
v=B.j.cL(a1/112)
u=new A.e4()
u.d_(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.d7J[u.aw(9)]
j=u.aw(14)
J.bo(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a1(n,j,n+m,j+l)
h=A.bl(i,B.hz)
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
e.r=E.ko.j(0.55).gp(0)
a4.ar(new A.a1(g,j,h,j+2),e)
e=new A.ao(B.O,B.M,B.R,B.T,B.P)
e.r=E.ko.j(0.4).gp(0)
a4.ar(new A.a1(g,q,h,p),e)
t.restore()
j=u.aw(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ao(B.O,B.M,B.R,B.T,B.P)
p.sav(D.c5V.aK(0,new A.a1(0,r,a2,q)))
a4.ar(new A.a1(0,r,a2,q),p)
p=new A.ao(B.O,B.M,B.R,B.T,B.P)
p.r=B.w.j(0.5).gp(0)
p.y=B.kU
a4.ar(new A.a1(0,q,a2,q+14),p)}t=A.K()
t.r=D.bfY.j(0.72).gp(0)
a4.ar(new A.a1(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.K()
a3.sav(new A.c_(B.A,0.5,B.x,d,0,A.a([D.bod.j(0.22),B.L],w),d,d).aK(0,A.bX(new A.o(t,a1),a0)))
a4.N(new A.o(t,a1),a0,a3)},
aE(d){return!1}}
C.bc8.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cL(14,w*2,v*2.2,v*2,o,o,new A.l5(new A.p(A.ar(D.kM,D.btj,w/4),o,new A.bG(B.a1,new A.ay(B.w.j(0.12),1,B.r,-1),B.a1,B.a1),B.LN,o,o,B.n),B.bj,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aLD,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aN(2,2)
t.push(A.q(o,o,B.f,o,o,new A.p(E.ko.j(0.6),o,o,new A.be(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.q(o,A.x(t,B.l,o,B.qT,B.i,0,B.p),B.f,o,o,new A.p(o,o,o,D.b4n,u,D.c7v,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dv,18)],v)
t=A.ap(o,A.b4(o,o,o,new C.aIw(o),D.fdt),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aWk(p.y,r,L.iZ,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bt(o,B.eK,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.iZ.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fCM,!0,B.a5,o,B.ao,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.iZ.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.X,A.E(A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bt(o,B.eK,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.iZ.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fto,!0,B.a5,B.AE,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fCE,o,o,o),B.ax,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.iZ.j(0.5),o,o,o,o,o,o,o,o,11,B.cH,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.U,A.A(A.a([A.E(A.q(o,o,B.f,D.G4.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fH,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.G4.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.q(o,o,B.f,D.G4.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.i,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,L.iZ.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Z_(A.cP(A.a([A.cP(o,o,o,o,o,o,o,o,o,D.fwA,B.a.aC(k,0,1)),A.cP(o,o,o,o,o,o,o,o,o,o,B.a.b2(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,L.iZ.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cd(A.x(n,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.hU,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,L.iZ.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.q(o,A.by(B.LN,new A.an(B.a0,o,B.ad,B.t,A.a([t,new A.D(D.bFI,A.x(s,B.al,o,B.e,B.i,0,B.p),o),A.ap(0,A.c3(o,new A.p(o,o,o,o,o,new A.a9(B.a6,B.aa,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bj),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.p(o,o,o,B.LN,v,D.c81,B.n),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,o,o))
return new A.an(B.a0,o,B.ad,B.t,l,o)}}
C.alS.prototype={
S(){return new C.alT(new A.eA(0,$.aw()),new C.bSW(),new C.ama(),D.hBe,null,null)},
gd1(){return this.d}}
C.a1K.prototype={
a7(){return"_Step."+this.b}}
C.alT.prototype={
gCt(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bDY(w.c,6,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.N0(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gTT(){var w=this.ghb(0)
return w.gzl()==null?"Babu":B.a.i(w.gzl().b)},
Y(){var w,v=this
v.a4()
w=v.ghb(0).gzl()
w=w==null?null:w.c
v.r.b=w===D.os
w=v.q_(new C.bRh(v))
w.fX(0)
v.x!==$&&A.aQ()
v.x=w
v.a2w("Come closer, my children. I am "+v.gTT()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
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
w.bw1()},
a2w(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.df(D.akR,new C.bRb(w))},
bso(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.m(new C.bRk(v))},
adS(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bsg(){return this.bac()},
bac(){var w=this,v=w.gCt()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bRc(w))
w.a2w(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cy(B.m8,new C.bRd(w))},
cLb(){var w=this
w.m(new C.bRg(w))
w.a2w(w.gCt()[w.as].a)},
L0(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.acW)return
w=p.gCt()
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
p.m(new C.bRf(p,d,u,q))
p.a2w(u?D.dnw[q.aw(4)]+" "+w[p.as].d:D.dk5[q.aw(3)]+" "+w[p.as].d)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCt()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bGc(t.at,t.ay,p)
t.m(new C.bRi(t,s))
t.a2w(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.BS(t.a.d,s),$async$kN)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.BT(r.d,r.c.a,"fire",t.at*10),$async$kN)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bRj())
w=1
break
case 4:++t.as
t.bac()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c4(v,D.Y9,new A.an(B.a0,v,B.ad,B.t,A.a([A.bR(0,new A.em(A.b4(v,v,v,new C.aWp(u,w.r,w.w,u),B.az),v),0,0,0),A.bm(!0,A.x(A.a([w.cbS(0),B.b5,w.bRu()],t),B.l,v,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
cbS(d){var w,v,u,t=this,s=null,r=A.aG(s,s,s,s,B.PW,s,s,s,new C.bRe(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCt().length;++w){v=t.as
if(w<v||t.Q===D.b0I)v=B.cO
else v=w===v?B.c:B.aT
u=new A.aN(4,4)
p.push(A.q(s,s,B.f,s,s,new A.p(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,D.bB1,s,s,s,22))}p=A.E(A.x(A.a([D.fKw,A.A(p,B.l,s,B.e,B.i,0,s,s)],q),B.E,s,B.e,B.i,0,B.p),1)
v=A.m(14)
u=A.L(B.fp,B.r,1)
return new A.D(D.bGT,A.A(A.a([r,p,A.q(s,A.d("\ud83d\udd25 "+B.j.V(t.cy*100)+"%",s,s,s,s,s,s,B.iz,s,s,s),B.f,s,s,new A.p(B.aU,s,u,v,s,s,B.n),s,s,s,s,B.hb,s,s,s)],q),B.l,s,B.e,B.i,0,s,s),s)},
bRu(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghb(0).gzl()
if(h==null)w=1
else w=h.c===D.os?0:1
v=j.dx
u=j.db
t=D.qi.j(0.96)
s=A.m(22)
r=A.L(B.cO,B.r,3)
q=A.b4(i,i,i,new C.boU(w,i),B.az)
p=A.d(j.Q===D.acW?j.gTT()+" asks":"Elder "+j.gTT(),i,i,i,i,i,i,D.aV7,i,i,i)
o=j.db
o=B.a.aC(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aA(B.c5,A.A(A.a([new A.a6(62,62,q,i),B.au,A.E(A.x(A.a([p,B.bH,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aVl,i,i,i)],n),B.E,i,B.e,B.i,0,B.p),1)],n),B.E,i,B.e,B.i,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbsn(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.at(j.a9Y("Sit down by the fire",j.gbsf()),i,i,i)
break
case 1:v=A.at(j.a9Y("Ask me, Elder",j.gcLa()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCt()[j.as].b,m<u.length;++m){q=new A.aN(14,14)
l=new A.ay(D.lB,2.5,B.r,-1)
v.push(A.aA(i,A.q(i,A.d(u[m],i,i,i,i,i,i,D.aVh,B.K,i,i),B.f,i,D.aem,new A.p(D.ajP,i,new A.bG(l,l,l,l),new A.be(q,q,q,q),i,i,B.n),i,i,i,i,V.wi,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bR8(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bU(B.bG,v,B.bs,i,8,8)
break
case 3:v=j.fr
u=v?B.kv:Al.apJ
u=A.X(u,v?B.eq:D.lB,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.l(i,i,v?B.eq:D.lB,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCt().length?"Finish":"Next story"
v=A.A(A.a([u,B.ae,q,j.a9Y(v,j.gqm(j))],n),B.l,i,B.e,B.i,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gCt().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aVA,i,i,i)],n)
u=j.cx
if(u>0){u=C.aQG(u)
q=C.aQG(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.abm,i,i,i))}v.push(B.U)
v.push(j.a9Y("Back to the games",new C.bR9(j)))
v=A.x(v,B.l,i,B.e,B.i,0,B.p)
break
default:v=i}return A.q(i,A.x(A.a([o,B.X,v],n),B.E,i,B.e,B.Q,0,B.p),B.f,i,i,new A.p(t,i,r,s,D.aD2,i,B.n),i,i,i,B.yA,B.bi,i,i,i)},
a9Y(d,e){var w=null,v=A.m(16),u=A.L(B.cO,B.r,2)
return A.aA(w,A.q(w,A.d(d,w,w,w,w,w,w,A3.KE,w,w,w),B.f,w,w,new A.p(D.lB,w,u,v,w,w,B.n),w,w,w,w,D.bEA,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.boU.prototype={
a5(d,e){Y.fVB(d,e.ej(B.I),e.gdA()*0.45,this.b,0,0.4)},
aE(d){return d.b!==this.b}}
C.aBw.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bSW.prototype={}
C.te.prototype={}
C.boV.prototype={}
C.ama.prototype={
Mt(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.ice(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aWp.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.zk(l.d.Mt(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.bo(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bU(0,u)
l.cAF(d,j)
l.bQ2(d,j)
l.cIX(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.bo(t.save())
t.translate(225,580)
d.pj(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.Q()
q=A.K()
p=x.O
o=x.n
q.sav(A.wc(B.I,r,A.a([D.bs6.j(0.55*s),F.Nh.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.N(B.I,r,q)
t.restore()
n=A.a([new A.y(528,new C.bSO(l,d,j,i)),new A.y(540,new C.bSP(l,d,j,i)),new A.y(546,new C.bSQ(l,d,j,i)),new A.y(574,new C.bSR(l,d,j,i)),new A.y(612,new C.bSS(l,d,j,i)),new A.y(650,new C.bST(l,d,j,i)),new A.y(656,new C.bSU(l,d,j,i))],x.E)
B.d.aZ(n,new C.bSV())
for(m=0;m<7;++m)n[m].b.$0()
l.bGX(d,j,i)
l.bTH(d,j)
t.restore()
$.Q()
t=A.K()
t.sav(A.wc(new A.o(w/2,v*0.6),e.gao7()*0.75,A.a([B.L,D.bfS],p),A.a([0.55,1],o),B.x,k,k,0))
d.ar(new A.a1(0,0,0+w,0+v),t)},
aE(d){return d.c!==this.c||d.d!==this.d},
cAF(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e4()
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
d.ah(p,p.aJ(0,D.enf),C.iw(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.j.F(v+o*0.05,1)
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
s.r=D.biB.gp(0)
s.d=B.bw
s.e=B.dP
d.af(l,s)}},
bQ2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aA0[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bs(new A.o(p,m),n*0.74,q*0.5)
k=Ab.yj.j(v)
$.Q()
j=new A.ao(B.O,B.M,B.R,B.T,B.P)
j.r=k.gp(0)
d.bZ(l,j)
q=A.bs(new A.o(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ao(B.O,B.M,B.R,B.T,B.P)
m.r=Q.xX.j(u).gp(0)
d.bZ(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.j.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ao(B.O,B.M,B.R,B.T,B.P)
o.r=D.aha.j(0.16*(1-h)).gp(0)
d.N(new A.o(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cIX(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bDm(d,D.enb,0.9,e,D.hwy,!1,!1,D.b0F,1,!1)
w=$.Q().r
v=x.v
u=new A.aF(w,B.ai,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bv())
t=A.K()
t.r=D.aj7.gp(0)
d.af(u,t)
C.bDm(d,D.end,0.95,e,D.hwt,!1,!1,D.b0G,1,!0)
t=new A.aF(w,B.ai,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.c5(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.c5(431,553,421,548))
t.E(new A.bv())
u=A.K()
u.r=F.FN.gp(0)
d.af(t,u)
u=A.bs(D.enc,8,28)
t=A.K()
t.r=D.buo.gp(0)
d.bZ(u,t)
C.bDm(d,new A.o(-30+B.j.F(e/26,1)*510,492),0.82,e,D.hwz,!0,!1,D.X2,1,!1)
t=B.j.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.bZ(A.bs(new A.o(s+q*16,r-6),16,11),C.iw(D.aiZ,1.8))
u=q<0
C.bDm(d,new A.o(s-q*6,r),0.62,e,D.hwB,!1,u,D.X2,2.2,!1)
C.bDm(d,new A.o(s-q*32,r+4),0.58,e+1,D.hwx,!1,u,D.X2,2.2,!1)
this.bWq(d,D.emR,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bs(new A.o(o,n),8,11)
k=p===1
j=k?D.aiV:D.ajx
i=new A.ao(B.O,B.M,B.R,B.T,B.P)
i.r=j.gp(0)
d.bZ(l,i)
l=k?D.aiV:D.ajx
k=new A.ao(B.O,B.M,B.R,B.T,B.P)
k.r=l.gp(0)
d.N(new A.o(o+5,n+(-3+m)),2.6,k)
k=new A.ao(B.O,B.M,B.R,B.T,B.P)
k.b=B.a9
k.c=1
k.r=B.av.gp(0)
k.d=B.bw
k.e=B.dP
d.ah(new A.o(o+7.5,n+(-2+m)),new A.o(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ao(B.O,B.M,B.R,B.T,B.P)
k.b=B.a9
k.c=1
k.r=B.av.gp(0)
k.d=B.bw
k.e=B.dP
d.ah(new A.o(o,n+4),new A.o(o,n+8),k)}h=e<f.f
u=A.bs(D.a8l,15+Math.sin(e*2)*0.8,40)
t=A.K()
t.r=D.ahz.gp(0)
d.bZ(u,t)
u=A.bs(D.a8l.a2(0,new A.o(-14,h?-9:-2)),12,15)
t=A.K()
t.r=D.bkF.gp(0)
d.bZ(u,t)
t=new A.aF(w,B.ai,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bv())
u=A.K()
u.r=D.bkP.gp(0)
d.af(t,u)
u=D.a8l.a2(0,new A.o(-17,h?-9:-2))
t=A.K()
t.r=B.ib.gp(0)
d.N(u,1.1,t)
v=new A.aF(w,B.ai,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.c5(180,588+w*(h?6:0),178,595))
d.af(v,C.iw(D.ahz,3.5))},
bWq(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a2(0,new A.o(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.T,B.P)
m.b=B.a9
m.c=2
m.r=D.Yl.gp(0)
m.d=B.bw
m.e=B.dP
d.ah(new A.o(u+o,s),new A.o(u+(o+n*1.5),q),m)}w=A.bs(k,17,32)
v=$.Q()
r=A.K()
r.r=D.FL.gp(0)
d.bZ(w,r)
r=A.bs(k.a2(0,D.emi),7,26)
w=A.ar(D.FL,B.w,0.12)
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
s.r=D.FL.gp(0)
d.af(v,s)
s=A.bs(k.a2(0,new A.o(24,-7+l)),9,12)
v=A.K()
v.r=D.FL.gp(0)
d.bZ(s,v)
v=-11+l
d.ah(k.a2(0,new A.o(22,v)),k.a2(0,new A.o(21,-17+l)),C.iw(D.Yl,1.6))
d.ah(k.a2(0,new A.o(26,v)),k.a2(0,new A.o(28,-16+l)),C.iw(D.Yl,1.6))
v=k.a2(0,new A.o(26,-8+l))
s=A.K()
s.r=B.w.gp(0)
d.N(v,0.9,s)
d.ah(k.a2(0,new A.o(26,-3+l)),k.a2(0,new A.o(26,1+l)),C.iw(D.bnw,1.4))
d.ah(k.a2(0,D.epe),k.a2(0,new A.o(-19,-7+Math.sin(f*7)*2)),C.iw(D.FL,2.4))},
bTF(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bs(new A.o(225+u*36,574+(t*13+6)),8,11)
$.Q()
t=new A.ao(B.O,B.M,B.R,B.T,B.P)
t.r=D.bt5.gp(0)
a6.bZ(u,t)}}u=A.bs(D.a8o.a2(0,B.cA),17,52)
$.Q()
t=A.K()
t.r=D.bfp.gp(0)
a6.bZ(u,t)
t=A.bs(D.a8o.a2(0,B.cA),12,44)
u=D.biZ.j(0.6+0.3*Math.sin(a7*6))
s=A.K()
s.r=u.gp(0)
a6.bZ(t,s)
for(r=0;r<3;++r){v=D.djy[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ao(B.O,B.M,B.R,B.T,B.P)
o.b=B.a9
o.c=7
o.r=D.FY.gp(0)
o.d=B.bw
o.e=B.dP
a6.ah(new A.o(u+t*24,579+s*4),new A.o(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.By.j(0.6)
n=new A.ao(B.O,B.M,B.R,B.T,B.P)
n.b=B.a9
n.c=2
n.r=t.gp(0)
n.d=B.bw
n.e=B.dP
a6.ah(new A.o(u+o*24,579+(p*4-2)),new A.o(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.f_l,D.f_V,D.f1_,D.f1j,D.f0Y]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.bqu,D.bmS,D.bsv][k]
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
g=new A.ao(B.O,B.M,B.R,B.T,B.P)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.j.F(a7*(0.35+B.o.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.F(w,3)
p=G.ajv.j((1-a5)*0.9)
$.Q()
o=new A.ao(B.O,B.M,B.R,B.T,B.P)
o.r=p.gp(0)
a6.N(new A.o(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.j.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.aha.j(0.1*(1-a5))
$.Q()
p=new A.ao(B.O,B.M,B.R,B.T,B.P)
p.r=q.gp(0)
a6.N(new A.o(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bTH(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.j.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.buy.j(0.18*p)
$.Q()
n=new A.ao(B.O,B.M,B.R,B.T,B.P)
n.r=o.gp(0)
d.N(new A.o(r,q),5,n)
n=new A.ao(B.O,B.M,B.R,B.T,B.P)
n.r=D.boi.j(0.9*p).gp(0)
d.N(new A.o(r,q),1.4,n)}},
c5o(d,e){switch(d){case 0:return e.b?D.hwu:D.b0d
case 1:return e.b?D.hwA:D.b0b
case 2:return D.b0a
case 3:return D.b09
case 4:return D.b0c
default:return D.b0e}},
aDj(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
R6(d,e,f,g){var w,v=this,u=D.a5P[e],t=v.c5o(e,g),s=new C.boV(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a5P[e],l=e===0
m=B.j.D(((l?D.aLw:D.aLB).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a8s
s.as=D.E9
if(l){s.a=o?v.aDj(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.o(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.o(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.E9
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.emq
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.enL
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
s.Q=D.eqa
s.as=D.aLO}if(e===2&&g.x!=null&&f<g.y){s.a=v.aDj(f,5)
s.b=0.4
s.as=new A.o(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aDj(f,e*3)
s.b=0.5
s.c=0.4}}C.hz7(d,u.a,u.b*1.2,t,s,f,e,null)},
bGX(d,e,f){var w=new C.bSN(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gda(d){return this.c}}
C.afQ.prototype={
a7(){return"_Stand."+this.b}}
C.adP.prototype={}
C.ls.prototype={}
C.bRx.prototype={
bBy(d){var w,v,u,t,s=A.T(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
G8(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.aZ(r,new C.bRy())
return r},
arn(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aN1(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.J)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
amw(d){var w,v,u=A.aR(x.N),t=d,s=0
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
gzl(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.aZ(w,new C.bRz(this))
return B.d.gH(w)}}
C.auc.prototype={}
C.zE.prototype={}
C.akM.prototype={
gC_(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Y(w,new C.bMl(),A.U(w).k("Y<1>")).gI(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
aj(){var w=this
return A.I(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.MK.prototype={
gapp(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
if(t.gC_(0))s.push(t)}return s},
aj(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.J)(w),++s){r=w[s]
p.push(A.I(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.I(["id",this.a,"title",q,"qs",p],u,t)},
d1q(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gapp(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.J)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.ls(B.a.i(s.a),p,B.d.co(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.ban.prototype={}
C.a9U.prototype={}
C.bhD.prototype={}
C.afO.prototype={}
C.ak4.prototype={
S(){return new C.ak5(B.bE,A.a([],x.cC),A.a([],x.e4),null,null)},
gd1(){return this.d}}
C.ak5.prototype={
gML(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bDY(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gbay(){var w,v=this,u=v.e
if(u===$){w=v.q_(v.gcbU())
v.e!==$&&A.bF()
v.e=w
u=w}return u},
Y(){this.a4()
this.gbay().fX(0)},
t(){this.gbay().t()
this.bvX()},
fX(d){this.m(new C.bKv(this))},
cbV(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fH(0,v)
if(w.c!=null)w.m(new C.bKq())},
b8U(){var w,v,u,t=this,s=t.r
B.d.a8(s)
w=t.gML()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bhD(u,(u+0.5)/v,w[t.x].b[u]))},
fH(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bt(w,new C.bKw())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c8e()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gML()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.j.V((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.asU(v,0.8,B.cO)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.asU(m.cy,0.8,G.np)
m.aZw("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.asU(q,0.88,D.lB)
p=m.gML()[m.x]
n=p.c
if(u===n){m.aZw("The right gourd fell! It was "+p.b[n]+".")
return}}}},
asU(d,e,f){var w,v,u,t=new A.e4()
t.d_(B.j.V(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.afO(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
aZw(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.Qg()}},
c8e(){var w=this
if(w.x+1>=w.gML().length){w.Qg()
return}++w.x
w.b8U()},
Qg(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Qg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gML().length
r=C.bGc(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bKo())
w=2
return A.b(C.BS(u.a.d,r),$async$Qg)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.BT(t.d,t.c.a,"catch",u.z),$async$Qg)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bKp())
return A.h(null,v)}})
return A.i($async$Qg,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.cbT()
else w=v.ch?v.cbW():A.at(new A.D(B.ez,A.x(A.a([D.aWy,B.U,D.fMa,B.X,D.fSn,B.dY,C.uu("Play",v.geY(v),B.cO,B.hw,D.fy)],x.p),B.l,u,B.e,B.Q,0,B.p),u),u,u,u)
return new C.tF("Calabash Catch",w,B.f7,u)},
cbW(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hJ:B.Hw
p.push(A.X(u,v?B.ay:B.bV,r,r,r,22))}p.push(B.b5)
v=s.x
u=s.gML()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aV5,r,r,r))
p.push(B.bd)
v=A.m(14)
p.push(A.q(r,A.d(""+s.z,r,r,r,r,r,r,B.iz,r,r,r),B.f,r,r,new A.p(B.bA,r,r,v,r,r,B.n),r,r,r,r,B.GJ,r,r,r))
p=A.A(p,B.l,r,B.e,B.i,0,r,r)
v=A.m(18)
t=A.L(B.cO,B.r,3)
return A.x(A.a([new A.D(D.bCl,p,r),A.q(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fws,B.K,r,r),B.f,r,r,new A.p(D.qi,r,t,v,r,r,B.n),r,r,r,B.f4,B.bi,r,r,1/0),B.an,A.E(A.cs(new C.bKu(s)),1)],q),B.l,r,B.e,B.i,0,B.p)},
cbT(){var w=this,v=null,u=A.at(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.pV,v,v,v),v,v,v),t=A.at(A.d(""+w.Q+" of "+w.gML().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.Vs,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cl(A.a([D.bcS,u,t,B.aR,new C.Ir(s,r,w.cx,v),B.aR,A.at(C.uu("Back to the games",new C.bKn(w),B.cO,B.k6,D.fy),v,v,v)],x.p),v,v,B.ac,v,v,B.ah,!1)}}
C.bcO.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.Q(),a3=A.K()
a3.sav(A.jy(B.I,new A.o(0,a0),D.d1F,G.aAi,B.x,e))
a4.ar(new A.a1(0,0,a1,0+a0),a3)
a3=A.K()
a3.r=G.Nl.gp(0)
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
w.r=D.bjU.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aF(a2.r,B.ai,e,e,A.a([],a3))
w=a0*0.86
a2.E(new A.aZ(r-26,w))
t=a0*0.5
s=a0*0.34
a2.E(new A.c5(r-14,t,r-10,s))
a2.E(new A.aq(r+10,s))
a2.E(new A.c5(r+14,t,r+26,w))
a2.E(new A.bv())
w=A.K()
w.r=D.agd.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.cno[q]
s=new A.ao(B.O,B.M,B.R,B.T,B.P)
s.r=D.agd.gp(0)
s.c=7
s.d=B.bw
a4.ah(new A.o(r,a2),new A.o(r+p*46,w),s)
s=new A.ao(B.O,B.M,B.R,B.T,B.P)
s.r=D.afz.gp(0)
a4.N(new A.o(r+p*50,t),18,s)}a2=a0*0.88
w=A.K()
w.r=D.bkN.gp(0)
a4.ar(new A.a1(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ao(B.O,B.M,B.R,B.T,B.P)
t.r=D.ahR.gp(0)
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
m.r=D.agV.gp(0)
a4.N(D.elF,14,m)
m=new A.ao(B.O,B.M,B.R,B.T,B.P)
m.r=D.bpv.gp(0)
m.c=4
m.d=B.bw
a4.ah(D.elG,D.emN,m)
m=new A.ao(B.O,B.M,B.R,B.T,B.P)
m.sav(new A.alD(D.eoW,46,D.dac,B.Ds,B.x,e,e,0))
a4.N(B.I,34,m)
m=A.bs(D.ep2,8,12)
l=new A.ao(B.O,B.M,B.R,B.T,B.P)
l.r=B.c.j(0.35).gp(0)
a4.bZ(m,l)
k=new A.iH(new A.en(n.c,e,e,B.cJ,e,e,e,e,e,e,D.fuk),B.K,B.bX,new A.jg(1),e,e,3,e,B.bY,e,B.cs)
k.o5(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bl(A.bs(B.cM,m.gba(m)+8,l),B.fL)
l=new A.ao(B.O,B.M,B.R,B.T,B.P)
l.r=D.qi.gp(0)
a4.am(j,l)
l=new A.ao(B.O,B.M,B.R,B.T,B.P)
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
Y.Bl(a4,new A.o(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dK,F.mU,!1,(w+1)/2)
h=A.bs(new A.o(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aF($.Q().r,B.ai,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.E(new A.aZ(w,a2))
t=h.c
a3.E(new A.aq(t,a2))
s=h.d
a3.E(new A.aq(t-8,s))
a3.E(new A.c5(h.gbw().a,s+8,w+8,s))
a3.E(new A.bv())
m=A.K()
m.r=D.Za.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ao(B.O,B.M,B.R,B.T,B.P)
m.r=D.By.gp(0)
m.c=1.4
a4.ah(new A.o(t,a2),new A.o(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.K()
s.r=G.np.gp(0)
a4.ar(new A.a1(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.K()
s.r=D.bk_.gp(0)
a4.bZ(new A.a1(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.J)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ao(B.O,B.M,B.R,B.T,B.P)
m.r=g.e.j(B.j.D(s,0,1)).gp(0)
a4.N(new A.o(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.fq(e,B.cs,e,e,e,A.cP(e,e,e,e,e,e,e,e,e,A.l(e,e,B.cO.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,I.Dm,e,e),"+"+a2),B.a5,B.bX,e,B.dz,B.bY)
k.e5()
k.a5(a4,new A.o(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aE(d){return!0}}
C.QE.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aBu(w.c,w.f,v),B.az),s=A.m(10),r=A.L(B.bD,B.r,1.4)
return new A.a6(u+22,v,A.x(A.a([new A.a6(u,u,t,v),B.cU,A.q(v,A.d(w.d,v,1,B.a2,v,v,v,D.fmV,v,v,v),B.f,v,v,new A.p(B.c,v,r,s,v,v,B.n),v,v,v,v,B.n1,v,v,v)],x.p),B.l,v,B.e,B.Q,0,B.p),v)},
gZ(d){return this.e}}
C.aBu.prototype={
a5(d,e){var w=e.ej(B.I),v=e.gdA(),u=this.c?0.8:0
return Y.fVB(d,w,v*0.44,this.b,0,u)},
aE(d){return d.b!==this.b||d.c!==this.c}}
C.azZ.prototype={}
C.auO.prototype={
S(){return new C.auP(A.T(x.S,x.cq),null,null)},
gd1(){return this.d}}
C.auP.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hEo(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gaFm(){var w=this.z
return w===$?this.z=this.Xk(0):w},
gj1(){var w,v=this.Q
if(v===$){w=this.gkS()
w=w.length===0?0:w[0].c.length
v=this.Q=A.bZ(w,-1,!1,x.S)}return v},
Xk(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.azZ(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.azZ(v[t],u[t],-1))
v=new A.e4()
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
v.qD()}this.bwp()},
cRh(d,e){var w,v,u,t,s,r=this
if(d>=r.gj1().length||r.gj1()[d]!==-1||B.d.q(r.gj1(),e))return
w=r.gaFm()[e]
v=r.gkS()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.cpS(r,e,w,v))
A.cy(B.lH,new C.cpT(r))
return}++r.r
u=A.bn(null,B.hF,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.m(new C.cpU(r,d,e,w,v))
u.cr(0)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkS()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cJ(n,0,new C.cpV())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.cpW(t,r))
w=5
return A.b(C.BS(t.a.d,r),$async$kN)
case 5:t.x=f
o=t.a
w=6
return A.b(C.BT(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.m(new C.cpX())
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
t.m(new C.cpY(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.at(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.pV,p,p,p),p,p,p)
v=r.f
v=A.at(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.Vs,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tF(q,A.cl(A.a([D.af5,w,v,B.aR,new C.Ir(u,t,r.ch,p),B.aR,A.at(C.uu("Back to the games",new C.cpO(d),B.cO,B.k6,D.fy),p,p,p)],x.p),p,p,B.ac,p,p,B.ah,!1),B.f7,p)}w=r.gkS()
v=r.e
s=w[v]
return new C.tF(q,new A.D(B.ut,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aV0,B.K,p,p),A.E(A.cs(new C.cpP(r,s)),1)],x.p),B.l,p,B.e,B.i,0,B.p),p),B.f7,p)}}
C.bch.prototype={
a5(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.Y(b2,new C.cPT(),A.U(b2).k("Y<1>")).gI(0),b4=a9.b,b5=b4.a2(0,B.Jv)
$.Q()
w=A.K()
w.r=D.lC.j(0.18+0.1*b3).gp(0)
b6.N(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a2(0,D.els)
u=A.K()
u.r=B.oi.j(0.5).gp(0)
u.c=10
u.d=B.bw
b6.ah(new A.o(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.dH.aA(0,B.j.D(b2[p],0,1))
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
a1=new A.ao(B.O,B.M,B.R,B.T,B.P)
a1.r=B.aT.gp(0)
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
a4=new A.ao(B.O,B.M,B.R,B.T,B.P)
a4.r=D.Ga.gp(0)
a4.b=B.a9
a4.c=h
a4.d=B.bw
b6.af(new A.aF(l,a2,b0,new A.cu([new A.BQ(k,a0),0,a1*m,!0]),a3),a4)
k.iy()
a4=n[a0].b
a4===$&&A.c()
a4=a4.a.length()
k.iy()
a5=n[a0].De(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bs(new A.o(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ao(B.O,B.M,B.R,B.T,B.P)
a3.r=B.b3.gp(0)
b6.bZ(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.iH(D.fmn,B.a5,B.bX,new A.jg(1),b0,b0,b0,b0,B.bY,b0,B.cs)
a8.e5()
a8.a5(b6,new A.o(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aE(d){return!0}}
C.ayL.prototype={
S(){return new C.ayM(A.aR(x.S))},
gd1(){return this.d}}
C.ayM.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hFi(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
Y(){this.a4()
this.b92()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a3()},
b92(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.df(B.rR,new C.cEQ(this))},
bpZ(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkS()[v.e]
if(w.e[d]===w.b)v.m(new C.cEY(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cEZ(v,d))
A.cy(B.iK,new C.cF_(v))}},
cWK(){var w=this
if(!w.as&&w.f<w.gkS()[w.e].d.length)w.m(new C.cF0(w))},
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
t.m(new C.cF1(t,s))
w=5
return A.b(C.BS(t.a.d,s),$async$kN)
case 5:t.y=f
q=t.a
w=6
return A.b(C.BT(q.d,q.c.a,"who",t.r),$async$kN)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cF2())
w=1
break
case 4:t.m(new C.cF3(t))
t.b92()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.at(A.d(""+a0.w+" of "+a0.gkS().length+" guessed",a2,a2,a2,a2,a2,a2,B.pV,a2,a2,a2),a2,a2,a2)
v=A.at(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.Vs,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tF(a1,A.cl(A.a([D.bd3,w,v,B.aR,new C.Ir(u,t,a0.ax,a2),B.aR,A.at(C.uu("Back to the games",new C.cES(a3),B.cO,B.k6,D.fy),a2,a2,a2)],x.p),a2,a2,B.ac,a2,a2,B.ah,!1),B.f7,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkS()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.KM,B.K,a2,a2),B.X,A.at(A.lC(new C.cET(a0,r),a2,B.b4,B.hF,a2,a2,new A.br(a2,s,u),x.i),a2,a2,a2),B.aB],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aN(16,16)
l=new A.ay(B.cO,2,B.r,-1)
k=o+1
w.push(new A.r4(new A.br(0,1,u),new C.cEU(),A.q(a2,new A.c6(B.aL,B.e,B.i,B.l,a2,B.p,a2,0,A.a([new A.qF(A.d(""+k,a2,a2,a2,a2,a2,a2,B.nX,a2,a2,a2),D.lB,a2,12,a2),B.au,new A.bz(1,B.bc,A.d(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fz3,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.p(D.qi,a2,new A.bG(l,l,l,l),new A.be(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.cx,B.bi,a2,a2,a2),B.b4,B.iK,a2,new A.bK("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.at(A.bN(!1,D.h_i,a2,a2,!0,a2,a2,a2,a0.gcWJ(),a2,a2),a2,a2,a2))
w.push(B.U)
if(a0.as){u=D.lC.j(0.2)
q=A.m(16)
p=A.L(D.lC,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fB,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.q(a2,A.x(A.a([m,B.X,C.uu(v,a0.gqm(a0),B.cO,B.jH,D.fy)],t),B.l,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.p(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bF,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dl:B.cO.j(0.2)
g=new A.aN(16,16)
l=new A.ay(n.q(0,o)?B.fh:B.cO,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bV:B.c
d=n.q(0,o)?B.xd:a2
t.push(new A.r4(new A.br(0,i,u),new C.cEV(),A.aA(a2,A.q(a2,A.d(f,a2,a2,a2,a2,a2,a2,new A.G(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.aef,new A.p(h,a2,new A.bG(l,l,l,l),new A.be(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jn,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cEW(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b4,B.ma,a2,new A.bK("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bU(B.fP,t,B.bs,a2,10,10))}return new C.tF(a1,A.cl(w,a2,a2,B.alQ,a2,a2,B.ah,!1),B.f7,a2)}}
C.azK.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.aGW.prototype={
aY(){this.b5()
this.b4()
this.dN()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdH())
w.b9$=null
w.a3()}}
C.afC.prototype={
aqV(d){},
arr(){var w=this,v=w.q_(new C.f6p(w))
v.fX(0)
w.LT$!==$&&A.aQ()
w.LT$=v}}
C.aKI.prototype={
gbmq(d){var w=this.c
return B.a.aC(w,0,Math.min(this.d,w.length))},
VT(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.df(D.akR,new C.fgy(w))},
bsm(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.am0.prototype={
S(){return new C.am1(new C.ama(),A.a([],x.t),new A.eA(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.am1.prototype={
gMJ(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bDY(w.c,10,w.e,!0)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.N0(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqu(){var w=this.r
return w===$?this.r=new C.aKI(new C.bSj(this)):w},
gapL(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gMJ()[v].c)u.push(1)
return u.length},
gblK(){var w=this.ghb(0)
return w.gzl()==null?"Elder":B.a.i(w.gzl().b)},
Y(){this.a4()
this.arr()},
t(){var w,v=this
v.gqu().t()
v.f.t()
w=v.LT$
w===$&&A.c()
w.t()
w=v.q8$
w.T$=$.aw()
w.P$=0
v.bw4()},
cLn(){var w=this
w.m(new C.bSg(w))
w.gqu().VT(w.gMJ()[w.x].a)},
L0(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqu()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.q8$.a
v.ax=u
v.ay=u+1
v.m(new C.bSe())
A.cy(B.hF,new C.bSf(v))},
bpV(){var w=this.gapL(0)/this.gMJ().length*100
if(w>=90)return D.eXb
if(w>=75)return D.eVd
if(w>=60)return D.eLT
if(w>=45)return D.ePj
return D.eGi},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.ctU()
w=A.bR(0,new A.em(A.b4(m,m,m,new C.bsW(n,n.q8$),B.az),m),0,0,0)
if(!n.Q){v=D.qi.j(0.96)
u=A.m(20)
t=A.L(B.cO,B.r,3)
u=A.q(m,A.x(A.a([A.d("Elder "+n.gblK()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aVV,B.K,m,m),B.X,C.uu("Start the test",n.gBQ(),B.cO,B.j3,D.fy)],x.p),B.l,m,B.e,B.Q,0,B.p),B.f,m,m,new A.p(v,m,t,u,m,m,B.n),m,m,m,m,B.bF,m,m,m)
v=u}else{v=n.x
u=n.gMJ()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aVX,m,m,m)
if(n.Q){t=n.gqu()
t=t.d<t.c.length}else t=!1
if(t)u=D.feT
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aN(10,10)
o=new A.ay(D.By,4,B.r,-1)
s.push(A.aA(m,A.q(m,A.d(q[r],m,m,m,m,m,m,D.fq9,B.K,m,m),B.f,m,D.aef,new A.p(D.bfX,m,new A.bG(o,o,o,o),new A.be(p,p,p,p),m,m,B.n),m,m,m,m,B.O7,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bSh(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bU(B.fP,s,B.bs,new A.bK("o"+t,x.W),8,8)}u=A.x(A.a([v,B.an,A.p8(u,B.mW,A.qy(),B.b4,B.b4,A.LB())],x.p),B.l,m,B.e,B.Q,0,B.p)
v=u}return new C.tF("Village School",new A.an(B.a0,m,B.ad,B.t,A.a([w,A.ap(10,v,m,m,10,10,m,m)],x.p),m),B.f7,m)},
ctU(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bpV(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gMJ()[v].c)g.push(v)
u=A.m(22)
t=A.L(B.cO,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.fuD,B.K,i,i)
r=A.d("Signed by Elder "+j.gblK(),i,i,i,i,i,i,D.ftg,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fyo,i,i,i),D.eye],q)
o=A.d(h.b,i,i,i,i,i,i,D.fAi,i,i,i)
n=j.gapL(0)
m=j.gMJ()
u=A.q(i,A.x(A.a([D.fLs,B.ax,s,r,B.X,new A.an(B.A,i,B.ad,B.t,p,i),o,B.an,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.abm,i,i,i),B.U,D.asA],q),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(D.qi,i,t,u,i,i,B.n),i,i,i,i,B.fs,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aB,new C.Ir(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aR,D.h0m,B.U],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.J)(g),++l){v=g[l]
r=new A.aN(14,14)
k=new A.ay(B.bA,1,B.r,-1)
p=m[v]
u.push(A.q(i,A.x(A.a([A.d(p.a,i,i,i,i,i,i,B.fY,i,i,i),B.ax,A.d("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fvM,i,i,i),A.d(p.d,i,i,i,i,i,i,D.fy0,i,i,i)],q),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.dl,i,new A.bG(k,k,k,k),new A.be(r,r,r,r),i,i,B.n),i,i,i,B.cx,B.bi,i,i,i))}B.d.v(s,u)}s.push(B.aB)
s.push(A.at(C.uu("Back to the games",new C.bSa(j),B.cO,B.k6,D.fy),i,i,i))
return new C.tF("Village School",A.cl(s,i,i,B.bQ,i,i,B.ah,!1),B.f7,i)}}
C.bsW.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.q8$.a
a0.zk(e.f.Mt(a1))
w=C.hc4(a1)
v=a0.c
J.bo(v.save())
v.translate(w.a,w.b)
a0.bU(0,w.c)
if(e.Q){u=e.gqu()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.cWZ[s]-6
$.Q()
r=new A.ao(B.O,B.M,B.R,B.T,B.P)
r.r=D.FY.gp(0)
a0.ar(new A.a1(u,340,u+12,450),r)}u=A.bl(D.a9m.cn(10),B.i0)
$.Q()
r=A.K()
r.r=D.By.gp(0)
a0.am(u,r)
r=A.bl(D.a9m,B.hQ)
u=A.K()
u.sav(A.jy(new A.o(30,96),new A.o(420,346),D.dfw,f,B.x,f))
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
u.r=I.aiF.gp(0)
a0.ar(new A.a1(30,354,420,362),u)
u=A.K()
u.r=B.aP.gp(0)
a0.ar(D.f6h,u)
u=A.K()
u.r=B.bN.gp(0)
a0.ar(D.f6l,u)
u=A.bl(D.f6b,B.hP)
r=A.K()
r.r=D.Za.gp(0)
a0.am(u,r)
n=B.j.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqu().gbmq(0)
m=A.fq(f,B.cs,f,7,f,A.cP(f,f,f,f,f,f,f,f,f,D.fCw,u+(t?"|":"")),B.a5,B.bX,f,B.dz,B.bY)
m.o5(346)
J.bo(v.save())
u=A.hS(D.a9m)
r=$.mg()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.hS(new A.a1(30+390*n,96,420,346)),r[1],!0)
m.a5(a0,new A.o(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bl(new A.a1(u,r,u+40,r+90),B.fL)
u=A.K()
u.r=D.bvk.gp(0)
a0.am(r,u)}}else{m=A.fq(f,B.cs,f,f,f,D.fmD,B.K,B.bX,f,B.dz,B.bY)
m.o5(340)
m.a5(a0,new A.o(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.j.F(u+p/8,1)
o=B.o.F(e.gqu().d*9,310)
k=Math.sin(p+r)
j=new A.ao(B.O,B.M,B.R,B.T,B.P)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.N(new A.o(70+o+k*6,166+l*70),1.6,j)}u=e.ghb(0).gzl()
i=(u==null?f:u.c)===D.os?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.f6q(d,a0,i,t,h,D.emC)),new A.y(520,new C.f6r(a0,d,t)),new A.y(575,new C.f6s(a0,d,t)),new A.y(585,new C.f6t(this,a0,d,t)),new A.y(615,new C.f6u(this,t,a0,d,h))],x.E)
B.d.aZ(g,new C.f6v())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
cbX(d,e){var w,v,u,t,s,r,q,p=$.Q(),o=A.a([],x.v),n=new A.aF(p.r,B.ai,null,null,o)
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
aE(d){return!1}}
C.alZ.prototype={
S(){return new C.am_(new C.ama(),A.T(x.S,x.i),new A.eA(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.am_.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hEc(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gj1(){var w=this.z
return w===$?this.z=this.FH(0):w},
gaLC(){var w,v,u,t,s=this,r=s.Q
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
s=J.e2(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e4()
u.d_(this.a.e+d*7)
B.d.e0(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.f1(u,new C.bRX())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Y(){this.a4()
this.arr()},
t(){var w,v=this
v.e.t()
w=v.LT$
w===$&&A.c()
w.t()
w=v.q8$
w.T$=$.aw()
w.P$=0
v.bw3()},
aqV(d){var w,v,u,t,s,r=this,q=r.gj1().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.co(u===$?r.z=r.FH(0):u,v)
s=r.gaLC()
s[v]=s[v]+(450*(t+0.5)/q-r.gaLC()[v])*Math.min(1,w)}},
d15(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj1().length)return
w=v.y
if(w===-1){v.m(new C.bS7(v,d))
return}if(w===d){v.m(new C.bS8(v))
return}v.m(new C.bS9(v,B.d.co(v.gj1(),v.y),d,B.d.co(v.gj1(),d)))},
cM4(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.FH(0):u).length))break
t=s.gkS()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.FH(0):u)[v]]===v);++v}s.m(new C.bS2(s,B.d.cE(w,new C.bS3())))},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkS().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bS4(t,s))
w=5
return A.b(C.BS(t.a.d,s),$async$kN)
case 5:t.x=f
q=t.a
w=6
return A.b(C.BT(q.d,q.c.a,"lineup",t.r*10),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bS5())
w=1
break
case 4:t.m(new C.bS6(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.at(A.d(""+l.r+" of "+l.gkS().length+" lines right",k,k,k,k,k,k,B.pV,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tF("Line Up",A.cl(A.a([D.af5,w,B.aR,new C.Ir(v,u,l.ch,k),B.aR,A.at(C.uu("Back to the games",new C.bRZ(d),B.cO,B.k6,D.fy),k,k,k)],x.p),k,k,B.ac,k,k,B.ah,!1),B.f7,k)}w=A.a([],x.t)
for(t=0;v=l.gkS(),t<v[l.f].d.length;++t)w.push(t)
B.d.aZ(w,new C.bS_(l))
u=A.bR(0,A.cs(new C.bS0(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aVX,k,k,k)
s=v[s]
q=x.p
s=A.ap(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.fv3,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fxf,B.K,k,k)],q),B.l,k,B.e,B.i,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.m(16)
n=l.ax
m=A.L(n?D.lC:G.np,B.r,2)
r.push(A.q(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bS1(l),x.cM).aO(0,", then ")+".",k,k,k,k,k,k,D.fzr,k,k,k),B.f,k,k,new A.p(p,k,m,o,k,k,B.n),k,k,k,B.d3,B.bi,k,k,1/0))}if(!l.at)r.push(C.uu("That is my line!",l.gcM3(l),B.cO,B.hI,D.fy))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uu(w,l.gqm(l),B.cO,B.jH,D.fy))}return new C.tF("Line Up",new A.an(B.a0,k,B.ad,B.t,A.a([u,s,A.ap(12,A.x(r,B.l,k,B.e,B.Q,0,B.p),k,k,12,12,k,k)],q),k),B.f7,k)}}
C.bjs.prototype={
a5(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.q8$.a
c7.zk(c5.e.Mt(c8))
w=C.hc4(c8)
v=c7.c
J.bo(v.save())
v.translate(w.a,w.b)
c7.bU(0,w.c)
u=c5.gj1().length
t=$.Q().r
s=x.v
r=new A.aF(t,B.ai,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.c5(225,500,440,470))
q=A.K()
q.r=D.Za.gp(0)
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
m=new A.ao(B.O,B.M,B.R,B.T,B.P)
m.r=[B.cO,G.np,D.lC,B.aH][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b18(c7,"OLDEST",D.enA,B.cO)
this.b18(c7,"YOUNGEST",D.en2,B.b3)
t=A.bl(D.f65,B.fL)
s=A.K()
s.r=D.FY.gp(0)
c7.am(t,s)
s=A.bl(D.f64,B.hQ)
t=A.K()
t.r=D.By.gp(0)
c7.am(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.aZ(t,new C.dr8())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.J)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.co(a1===$?c5.z=c5.FH(0):a1,f)
o=c5.gaLC()[f]
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
c7.N(new A.o(o,520),54,a9)}a9=D.djl[B.o.F(b0,6)]
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
else b9=a3?D.epH:c4
if(b1)c0=new A.o(3+b2*8,-56)
else if(h&&a7)c0=D.aLO
else c0=a3?new A.o(30,-104+Math.sin(e)*5):c4
C.Sw(c7,new A.o(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.Jx,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.iH(new A.en(a8,c4,c4,B.cJ,c4,c4,c4,c4,c4,c4,D.fsM),B.a5,B.bX,new A.jg(1),"\u2026",c4,1,c4,B.bY,c4,B.cs)
c1.o5(q)
c2=A.bl(A.bs(new A.o(o,650),24,c1.b.c+16),B.fL)
$.Q()
a8=new A.ao(B.O,B.M,B.R,B.T,B.P)
if(a6)a9=B.i9
else a9=a7?B.rK:D.qi
a8.r=a9.gp(0)
c7.am(c2,a8)
a8=new A.ao(B.O,B.M,B.R,B.T,B.P)
if(a6)a9=D.lC
else a9=a7?G.np:D.lB
a8.r=a9.gp(0)
a8.b=B.a9
a8.c=2
c7.am(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a5(c7,new A.o(o-a9/2,650-a8.gba(a8)/2))
c3=new A.iH(new A.en(""+(a2+1),c4,c4,B.cJ,c4,c4,c4,c4,c4,c4,D.ft5),B.a5,B.bX,new A.jg(1),c4,c4,c4,c4,B.bY,c4,B.cs)
c3.e5()
c3.a5(c7,new A.o(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.j.F(p*53+Math.sin(c5+p)*20,450)
q=B.j.F(t+p*37,420)
J.bo(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bs(B.I,4,8)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.T,B.P)
m.r=[B.cO,G.np,D.lC,B.aH,B.c][B.o.F(p,5)].gp(0)
c7.ar(q,m)
v.restore()}v.restore()},
b18(d,e,f,g){var w,v,u=null,t=A.fq(u,B.cs,u,u,u,A.cP(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,I.Dm,u,u),e),B.a5,B.bX,u,B.dz,B.bY)
t.e5()
w=t.b
v=w.c
w=w.a.c
t.a5(d,f.aJ(0,new A.o(v/2,w.gba(w)/2)))},
aE(d){return!1}}
C.a22.prototype={
a7(){return"_Trip."+this.b}}
C.alV.prototype={
S(){return new C.alW(D.X7,new A.eA(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.alW.prototype={
gDr(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bDY(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.N0(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqu(){var w=this.f
return w===$?this.f=new C.aKI(new C.bRJ(this)):w},
gTT(){var w=this.ghb(0)
return w.gzl()==null?"Grandma":B.a.i(w.gzl().b)},
Y(){this.a4()
this.arr()},
t(){var w,v=this
v.gqu().t()
w=v.LT$
w===$&&A.c()
w.t()
w=v.q8$
w.T$=$.aw()
w.P$=0
v.bw2()},
aqV(d){var w,v,u,t=this
if(t.r!==D.ad5)return
w=B.dC.aA(0,B.j.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDr()
if(v+1>=u.length){t.r=D.ad6
t.WP()}else{++t.w
t.ay=!1
t.r=D.X8
t.gqu().VT(u[t.w].a)}if(t.c!=null)t.m(new C.bRH())}},
WP(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$WP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqu().VT("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDr().length
r=C.bGc(t,u.z,s)
u.as=r
w=2
return A.b(C.BS(u.a.d,r),$async$WP)
case 2:u.at=e
s=u.a
w=3
return A.b(C.BT(s.d,s.c.a,"journey",u.x*10),$async$WP)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bRB())
return A.h(null,v)}})
return A.i($async$WP,v)},
bre(){this.aUh()},
aUh(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.ad5
if(w.c!=null)w.m(new C.bRC())},
L0(d){var w,v,u,t,s=this
if(s.r!==D.X8)return
w=s.gDr()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bRG(s,d,v))
u=s.gqu()
t=s.w
u.VT(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cRg(){if(this.r!==D.B5)return
this.aUh()},
B(d){var w,v,u,t=this,s=null,r=A.bR(0,new A.em(A.b4(s,s,s,new C.biT(t,t.q8$),B.az),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDr().length;++w){v=t.w
if(w<v||t.r===D.ad6)v=B.cO
else v=w===v?B.c:B.aT
u=new A.aN(4,4)
p.push(new A.bz(1,B.bc,A.q(s,s,B.f,s,s,new A.p(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,B.wm,s,s,s,s),s))}p.push(B.bm)
p.push(D.fN4)
return new C.tF("Safari Journey",new A.an(B.a0,s,B.ad,B.t,A.a([r,A.ap(s,A.A(p,B.l,s,B.e,B.i,0,s,s),s,s,12,12,2,s),A.ap(10,t.clx(),s,s,10,10,s,s)],q),s),B.f7,s)},
clx(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bRF(o),l=D.qi.j(0.96),k=A.m(22),j=A.L(B.cO,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gTT()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aVV,B.K,n,n),B.X,C.uu("Start the journey",o.gbrd(),B.cO,D.bQ2,D.fy)],x.p),B.l,n,B.e,B.Q,0,B.p)
break
case 3:w=D.bcD
break
case 1:w=o.w
v=o.gDr()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aN(14,14)
p=new A.ay(D.lB,2.5,B.r,-1)
t.push(A.aA(n,A.q(n,A.d(r[s],n,n,n,n,n,n,D.aVh,B.K,n,n),B.f,n,D.aem,new A.p(D.ajP,n,new A.bG(p,p,p,p),new A.be(q,q,q,q),n,n,B.n),n,n,n,n,V.wi,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bRD(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.U,A.bU(B.bG,t,B.bs,n,8,8)],u),B.E,n,B.e,B.Q,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDr().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.U,new A.bM(B.aa,n,n,C.uu(v,o.gcRf(),B.cO,B.jH,D.fy),n)],x.p),B.E,n,B.e,B.Q,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gTT()),B.U,A.d(""+o.x+" of "+o.gDr().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aVA,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aQG(v)
u=C.aQG(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.abm,n,n,n))}w.push(B.U)
w.push(A.at(C.uu("Back to the games",new C.bRE(o),B.cO,B.k6,D.fy),n,n,n))
w=A.x(w,B.E,n,B.e,B.Q,0,B.p)
break
default:w=n}return A.q(n,w,B.f,n,n,new A.p(l,n,j,k,D.aD2,n,B.n),n,n,n,n,B.bi,n,n,n)}}
C.biT.prototype={
a5(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.q8$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDr(),d0=B.j.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.ad5,d2=c7*0.5
c8=A.ar(D.bhp,D.brN,d0)
c8.toString
w=A.ar(D.Yn,G.ahr,d0)
w.toString
v=A.ar(B.u4,D.bqf,d0)
v.toString
$.Q()
u=A.K()
t=x.O
u.sav(A.jy(B.I,new A.o(0,d2),A.a([c8,w,v],t),G.a4j,B.x,c3))
d3.ar(new A.a1(0,0,0+c6,0+c7),u)
s=new A.o(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.K()
u.sav(A.wc(s,60,A.a([D.bqE,B.L],t),c3,B.x,c3,c3,0))
d3.N(s,60,u)
u=A.K()
u.r=B.Yz.gp(0)
d3.N(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.j.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dyz[o]
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
k.r=A.ar(l===0?D.bfZ:D.buM,D.bkU,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.cbY(d3,new A.o(B.j.F(B.j.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.Q()
w=A.K()
v=A.ar(D.aiZ,D.Ga,d0)
v.toString
w.sav(A.jy(new A.o(0,d2),new A.o(0,c7),A.a([v,D.bqG],t),c3,B.x,c3))
d3.ar(new A.a1(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.K()
w.r=D.bkd.gp(0)
d3.ar(new A.a1(0,a0,c6,a1),w)
w=A.K()
w.r=D.bus.gp(0)
d3.ar(new A.a1(0,a0-3,c6,a0),w)
for(q=-B.j.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ao(B.O,B.M,B.R,B.T,B.P)
u.r=I.MD.gp(0)
d3.ar(new A.a1(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.Q()
b2=new A.ao(B.O,B.M,B.R,B.T,B.P)
b2.r=D.bfE.gp(0)
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
b0=new A.ao(B.O,B.M,B.R,B.T,B.P)
b0.r=D.bsE.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ao(B.O,B.M,B.R,B.T,B.P)
b1.r=D.fy.gp(0)
d3.ar(new A.a1(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ao(B.O,B.M,B.R,B.T,B.P)
b0.r=D.FY.gp(0)
d3.ar(new A.a1(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bl(new A.a1(b0,a4,b0+60,a5),B.iy)
b0=new A.ao(B.O,B.M,B.R,B.T,B.P)
b0.r=D.bvQ.gp(0)
d3.am(b5,b0)
b0=new A.ao(B.O,B.M,B.R,B.T,B.P)
b0.r=D.By.gp(0)
b0.b=B.a9
b0.c=2
d3.am(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.iH(new A.en(b6,c3,c3,B.cJ,c3,c3,c3,c3,c3,c3,D.fre),B.a5,B.bX,new A.jg(1),c3,c3,c3,c3,B.bY,c3,B.cs)
b7.e5()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a5(d3,new A.o(b4-b1/2,a2-b0.gba(b0)/2))
if(a7)b8=c4.r===D.ad6
else if(r===c4.w){b0=c4.r
b0=b0===D.X8||b0===D.B5
b8=b0}else b8=!1
if(a7){b0=c4.ghb(0).gzl()
b9=(b0==null?c3:b0.c)===D.os?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqu()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.B5
b0=c0?C.hAC(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.X8?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.o(40,-110+Math.sin(g)*10)
else a7=c0?new A.o(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.Sw(d3,new A.o(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.o(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bIk(d3,new A.o(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.j.F(w+r/7,1)
$.Q()
t=new A.ao(B.O,B.M,B.R,B.T,B.P)
t.r=D.btX.j(0.5*(1-c2)).gp(0)
d3.N(new A.o(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.X7)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.j.F(w+r/5,1)
t=Math.sin(r+c8)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.T,B.P)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.N(new A.o(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.B5&&c4.ax){b7=A.fq(c3,B.cs,c3,c3,c3,A.cP(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,B.cO,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,A7.Ix,c3,c3),"BEEP BEEP!"),B.a5,B.bX,c3,B.dz,B.bY)
b7.e5()
b7.a5(d3,new A.o(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
cbY(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ar(D.bq9,D.bjw,g)
o.toString
if(f){w=new A.aF($.Q().r,B.ai,null,null,A.a([],x.v))
v=e.a
u=e.b
w.E(new A.aZ(v-16,u))
t=u-36
s=u-56
w.E(new A.c5(v-9,t,v-7,s))
w.E(new A.aq(v+7,s))
w.E(new A.c5(v+9,t,v+16,u))
w.E(new A.bv())
t=A.K()
t.r=D.ZC.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d_X[r]
p=new A.ao(B.O,B.M,B.R,B.T,B.P)
p.r=D.ZC.gp(0)
p.c=4
p.d=B.bw
d.ah(new A.o(w,t),new A.o(v+q*24,s),p)
p=new A.ao(B.O,B.M,B.R,B.T,B.P)
p.r=o.gp(0)
d.N(new A.o(v+q*26,u),10,p)}}else{w=e.a2(0,D.epE)
$.Q()
v=A.K()
v.r=D.bfG.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bs(e.a2(0,D.epF),16,60)
w=A.K()
w.r=o.gp(0)
d.bZ(v,w)}},
bIk(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.X7?0.045:0,a1=a2.c
J.bo(a1.save())
a1.translate(a3.a,a3.b+e)
a2.hW(0,a0)
for(w=0;w<2;++w){v=D.dr0[w]
u=d.ay&&d.r!==D.X7&&v>0
J.bo(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.Q()
s=new A.ao(B.O,B.M,B.R,B.T,B.P)
s.r=D.buE.gp(0)
a2.N(B.I,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ao(B.O,B.M,B.R,B.T,B.P)
s.r=D.bmY.gp(0)
a2.N(B.I,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ao(B.O,B.M,B.R,B.T,B.P)
q.r=B.br.gp(0)
q.c=2
a2.ah(B.I,new A.o(s*9,t*9),q)}a1.restore()}p=A.u2(D.f6s,B.fL,B.fL,B.il,B.hO)
$.Q()
t=A.K()
t.sav(A.jy(D.elI,B.a8g,D.dgS,G.a4j,B.x,f))
a2.am(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ao(B.O,B.M,B.R,B.T,B.P)
s.r=D.daX[B.o.F(o,4)].gp(0)
a2.ar(new A.a1(t,-26,t+10,-19),s)}n=d.r===D.B5&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a1(s,-66,q,-36)
J.bo(a1.save())
a1.clipRRect(A.nP(A.bl(l,B.mw)),$.np(),!0)
k=new A.ao(B.O,B.M,B.R,B.T,B.P)
k.r=D.Yn.gp(0)
a2.ar(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.B5?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.Sw(a2,new A.o(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aLF,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bl(l,B.mw)
i=new A.ao(B.O,B.M,B.R,B.T,B.P)
i.r=D.ajR.gp(0)
i.b=B.a9
i.c=2
a2.am(j,i)}d=A.bl(D.Uy,B.mw)
t=A.K()
t.r=D.Yn.gp(0)
a2.am(d,t)
J.bo(a1.save())
a1.clipRRect(A.nP(A.bl(D.Uy,B.mw)),$.np(),!0)
C.Sw(a2,new A.o(D.Uy.gbw().a,-10),0,0,0.7,-0.1,f,f,D.aLF,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bl(D.Uy,B.mw)
d=A.K()
d.r=D.ajR.gp(0)
d.b=B.a9
d.c=2
a2.am(t,d)
d=A.K()
d.r=Ao.Gb.gp(0)
a2.N(D.enO,4,d)
d=A.K()
d.r=D.FY.gp(0)
a2.ar(D.f7B,d)
for(w=0;w<3;++w){v=D.dr2[w]
d=A.bl(new A.a1(v,-96,v+28,-79),B.iy)
t=new A.ao(B.O,B.M,B.R,B.T,B.P)
t.r=D.Ga.gp(0)
a2.am(d,t)}a1.restore()},
aE(d){return!1}}
C.aBx.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bgq.prototype={}
C.aBz.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bgr.prototype={}
C.aBA.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bgs.prototype={}
C.a6s.prototype={
B(d){var w=null
return new A.a6(1/0,this.c,A.b4(w,w,w,new C.bj_(w),B.az),w)}}
C.bj_.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.doZ[B.o.F(n,6)]
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
k=new A.bv()
j.push(k)
j=i.f
if(j!=null)k.ak(j)
i.ab()
k=new A.ao(B.O,B.M,B.R,B.T,B.P)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aE(d){return!1}}
C.tF.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aG(w,w,w,w,B.PW,w,w,w,new C.bRA(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a2,w,w,w,D.fow,w,w,w),1)],v)
B.d.v(u,this.e)
return A.c4(w,D.Y9,A.q(w,A.bm(!0,A.x(A.a([D.c4y,new A.D(D.bGX,A.A(u,B.l,w,B.e,B.i,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.b86,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.Ir.prototype={
B(d){var w=null,v=this.d,u=C.aQG(v),t=C.iiX(v),s=B.c.j(0.08),r=A.m(18),q=A.L(B.cO.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fr_,w,w,w)],x.p)
if(this.e)p.push(D.es7)
p.push(B.an)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.fY,w,w,w))
if(t!=null)p.push(new A.D(B.ur,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.AL,w,w,w),w))
return A.q(w,A.x(p,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(s,w,q,r,w,w,B.n),w,w,w,w,B.bF,w,w,w)}}
C.Wf.prototype={
S(){return new C.blL(A.T(x.N,x.S),B.o.F(Date.now(),1e5))},
cY8(d){return this.f.$1(d)},
ge3(){return this.d}}
C.blL.prototype={
gSS(){var w=this.d
return w===$?this.d=this.a.c:w},
Y(){this.a4()
this.Ps()},
Ps(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Ps=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bSl(u.a.d),$async$Ps)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.deV[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bSk(p,(o===$?u.d=q.c:o).a,r),$async$Ps)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.e1a(u,n))
return A.h(null,v)}})
return A.i($async$Ps,v)},
ux(d){return this.coA(d)},
coA(d){var w=0,v=A.j(x.H),u=this,t
var $async$ux=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a5(t,!1).cd(A.ec(new C.e1b(d),!1,null,x.H)),$async$ux)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.Ps()
return A.h(null,v)}})
return A.i($async$ux,v)},
gb6r(){var w,v,u,t=C.N0(this.gSS()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)s.push(B.a.i(w[u].b))
return s},
a2p(d){return this.cvN(d)},
cvN(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a2p=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.J)(d),++s)r.push(d[s].aj())
w=2
return A.b(u.a.cY8(r),$async$a2p)
case 2:if(u.c!=null)u.m(new C.e1c(u,r))
return A.h(null,v)}})
return A.i($async$a2p,v)},
OM(d){return this.bR0(d)},
bR0(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$OM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hek(t.gSS())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.MK("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a5(s,!1).cd(A.ec(new C.e18(q),!1,null,r)),$async$OM)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.J)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bj(j,new C.e19(p))
o=s.length
B.d.c4(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a2p(A.cW(s,0,A.dA(2,"count",x.S),r).dn(0)),$async$OM)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OM,v)},
XM(d,e){return this.bOA(0,e)},
bOA(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$XM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cf(null,null,!0,null,new C.e17(e),o,null,!0,!0,x.y),$async$XM)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hek(u.gSS()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.J)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a2p(o),$async$XM)
case 5:case 3:return A.h(null,v)}})
return A.i($async$XM,v)},
aa5(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e14(this,j):h
o=o?0.55:1
w=A.ar(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.m(20)
u=A.L(B.aT,B.r,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cA,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.Vn,p,p,p),B.b5],s)
q=A.m(10)
r.push(A.q(p,A.d(i,p,p,p,p,p,p,D.fpp,p,p,p),B.f,p,p,new A.p(B.ht,p,p,q,p,p,B.n),p,p,p,p,B.Cn,p,p,p))
return A.aA(p,A.d8(A.q(p,A.x(A.a([A.A(r,B.l,p,B.e,B.i,0,p,p),B.b5,A.d(e,p,2,p,p,p,p,D.fx8,p,p,p),B.cU,A.d(f,p,3,B.a2,p,p,p,D.fq7,p,p,p)],s),B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(p,p,u,v,t,new A.a9(B.aA,B.aF,B.x,w,p,p),B.n),p,p,p,p,B.yF,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
Xe(d,e,f,g,h,i){return this.aa5(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.N0(s.gSS()),p=s.gSS(),o=C.aQG(s.e),n=C.hek(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e1d(s),k=C.hEc(p,1).length,j=C.hEo(p,1).length,i=C.hFi(p,1).length,h=B.c.j(0.07),g=A.m(20),f=A.L(B.cO.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,K.abb,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.fuH,r,r,r),a0=q.b.length,a1=x.p
g=A.q(r,A.A(A.a([e,B.bd,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,K.ab7,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.pV,r,r,r),D.fTq],a1),B.l,r,B.e,B.i,0,B.p)],a1),B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.p(h,r,f,g,r,r,B.n),r,r,r,r,B.bF,r,r,r)
f=s.Xe("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aE,new C.e1e(s,p),l.$1("kahoot"))
h=s.Xe("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lB,new C.e1f(s,p),l.$1("fire"))
a0=s.Xe("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.BW,new C.e1g(s,p),l.$1("catch"))
j=j!==0?new C.e1j(s,p):r
j=s.aa5("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hp,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e1k(s,p):r
i=s.aa5("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.kJ,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.Xe("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.eX,new C.e1l(s,p),l.$1("journey"))
k=k!==0?new C.e1m(s,p):r
k=A.a([g,B.aR,D.fXr,B.U,A.kU(0.98,A.a([f,h,a0,j,i,e,s.aa5("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.eq,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.Xe("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.cZ,new C.e1n(s,p),l.$1("school"))],a1),2,12,12,r,B.dW,!0),B.d8,A.A(A.a([D.bIN,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fpt,r,r,r)],a1),B.l,r,B.e,B.i,0,r,r),B.U],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.J)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aN(18,18)
u=new A.ay(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fE5,B.bd,new A.bz(1,B.bc,A.x(A.a([A.d(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hk,r,r,r),A.d(""+v.gapp(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.AL,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),r)],a1)
if(v.gapp(0).length>=2){f=D.lC.j(0.2)
t=new A.ay(D.lC,1,B.r,-1)
g.push(A.aA(r,A.q(r,A.X(B.hw,D.lC,r,r,r,20),B.f,r,r,new A.p(f,r,new A.bG(t,t,t,t),r,r,r,B.a7),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e1o(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cO.j(0.2)
t=new A.ay(B.cO,1,B.r,-1)
f=A.aA(r,A.q(r,A.X(B.j3,B.cO,r,r,r,20),B.f,r,r,new A.p(f,r,new A.bG(t,t,t,t),r,r,r,B.a7),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e1p(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fh.j(0.2)
t=new A.ay(B.fh,1,B.r,-1)
B.d.v(g,A.a([B.bm,f,B.bm,A.aA(r,A.q(r,A.X(B.eh,B.fh,r,r,r,20),B.f,r,r,new A.p(e,r,new A.bG(t,t,t,t),r,r,r,B.a7),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e1q(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.q(r,new A.c6(B.aL,B.e,B.i,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.p(i,r,new A.bG(u,u,u,u),new A.be(h,h,h,h),r,r,B.n),r,r,r,B.d3,B.bi,r,r,r))}if(s.a.e){j=m?new C.e1h(s):new C.e1i(a2)
i=A.m(18)
h=A.L(m?B.cO:B.aT,B.r,2)
g=m?B.cO.j(0.12):B.dl
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aA(r,A.q(r,A.at(A.d(f,r,r,r,r,r,r,A.l(r,r,m?B.cO:B.aD,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.p(g,r,h,i,r,r,B.n),r,r,r,r,B.NW,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.fYn)
k.push(B.aB)
k.push(D.asA)
return new C.tF("Family Games \xb7 "+p.b,A.cl(k,r,r,D.bCW,r,r,B.ah,!1),B.f7,r)}}
C.a_V.prototype={
a7(){return"_KPhase."+this.b}}
C.alX.prototype={
S(){return new C.alY(D.b04)},
gd1(){return this.e}}
C.alY.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a3()},
fX(d){var w,v=this
v.m(new C.bRV(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.df(B.fG,new C.bRW(v))},
aPP(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.m(new C.bRL(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.df(B.fg,new C.bRM(w))},
L0(d){var w
if(this.d!==D.acC)return
w=this.at
if(w!=null)w.a1(0)
this.b6n(d)},
b6n(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.j.V(500+500*B.j.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bRR(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cy(B.rR,v.gix(v))},
cKH(d){var w=this
if(w.d!==D.WG)return
if(w.e+1>=w.a.w.length)w.Yx()
else{w.m(new C.bRS(w))
w.aPP()}},
Yx(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Yx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bGc(p,u.w,t)
u.m(new C.bRO(u,s))
w=2
return A.b(C.BS(u.a.e,s),$async$Yx)
case 2:r=e
t=u.a
w=3
return A.b(C.BT(t.e,t.f,t.r,u.f),$async$Yx)
case 3:q=e
if(u.c!=null)u.m(new C.bRP(u,r,q))
return A.h(null,v)}})
return A.i($async$Yx,v)},
cLw(){var w,v,u,t,s=this,r=s.a,q=new A.e4()
q.d_(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.b5("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.e0(r,q)
for(r=A.cW(r,0,A.dA(4,"count",x.S),A.U(r).c),u=r.$ti,r=new A.bQ(r,r.gI(0),u.k("bQ<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b5(t,B.j.V(w*(0.35+q.ai()*0.5)),!1))}B.d.aZ(v,new C.bRT())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b04===r){w=A.a([D.fTQ,B.X,A.d(s,t,t,t,t,t,t,B.KP,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.fpB,t,t,t))
w.push(B.aB)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.xl,B.K,t,t))
w.push(B.dY)
w.push(C.uu("Play",u.geY(u),B.cO,B.hw,D.fy))
w=A.at(new A.D(B.ez,A.x(w,B.l,t,B.e,B.Q,0,B.p),t),t,t,t)
break A}if(D.b05===r){w=A.at(A.d(""+u.z,t,t,t,t,t,t,D.fxF,t,t,t),t,t,t)
break A}if(D.acC===r||D.WG===r){w=u.crb()
break A}if(D.b06===r){w=u.cbZ()
break A}w=t}return new C.tF(s,w,B.f7,t)},
crb(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.WG,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aV5,j,j,j),B.b5],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.KM,j,j,j))
g.push(B.au)
f=A.m(14)
g.push(A.q(j,A.d(""+k.f,j,j,j,j,j,j,B.iz,j,j,j),B.f,j,j,new A.p(B.bA,j,j,f,j,j,B.n),j,j,j,j,B.GJ,j,j,j))
g=A.A(g,B.l,j,B.e,B.i,0,j,j)
f=A.m(6)
w=i?0:B.j.D(k.as/k.a.w[k.e].r,0,1)
f=A.by(f,A.ko(B.bA,j,k.as<5?B.fh:B.cO,9,j,w,j),B.aq)
w=A.m(22)
v=A.L(B.cO,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.l(j,j,e?D.lC:G.np,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.U,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.foF,B.K,j,j)],h),B.l,j,B.e,B.Q,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fzP,B.K,j,j)
w=A.E(A.q(j,A.at(u,j,j,j),B.f,j,j,new A.p(D.qi,j,v,w,j,j,B.n),j,j,j,j,B.fs,j,j,1/0),3)
v=A.a([],h)
for(u=k.gix(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bRQ(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aCG[o]
m=new A.aN(16,16)
l=new A.ay(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.d(D.aD_[o],j,j,j,j,j,j,D.fqB,j,j,j),B.au,new A.bz(1,B.bc,A.d(r[t],j,3,B.a2,j,j,j,D.fpy,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.ar5)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bXp)
v.push(A.aA(j,new A.SM(A.q(j,new A.c6(B.aL,B.e,B.i,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.p(n,j,new A.bG(l,l,l,l),new A.be(m,m,m,m),W.aB3,j,B.n),j,j,j,j,B.f4,j,j,j),p,B.b4,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.an,f,B.af,w,B.af,A.E(A.kU(1.45,v,2,10,10,j,B.dW,!1),4)],h)
if(i)h.push(D.ern)
return new A.D(B.a0e,A.x(h,B.l,j,B.e,B.i,0,B.p),j)},
cbZ(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cLw(),m=x.p,l=A.a([D.bbV,A.at(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.pV,o,o,o),o,o,o),A.at(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.Vs,o,o,o),o,o,o),B.aR],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cO.j(0.25):B.dl
u=new A.aN(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.cO:B.bA,1,B.r,-1)
q=A.d(w<3?D.dha[w]:""+(w+1),o,o,o,o,o,o,B.nf,o,o,o)
s=s?B.u:B.V
l.push(A.q(o,new A.c6(B.aL,B.e,B.i,B.l,o,B.p,o,0,A.a([new A.a6(34,o,q,o),new A.bz(1,B.bc,A.d(t.a,o,o,o,o,o,o,new A.G(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.d(""+t.b,o,o,o,o,o,o,B.iz,o,o,o)],m),o),B.f,o,o,new A.p(v,o,new A.bG(r,r,r,r),new A.be(u,u,u,u),o,o,B.n),o,o,o,B.cx,B.eY,o,o,o))}l.push(B.X)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.Ir(m,v,p.CW,o))
l.push(B.aR)
l.push(A.at(C.uu("Back to the games",new C.bRN(p),B.cO,B.k6,D.fy),o,o,o))
return A.cl(l,o,o,B.fs,o,o,B.ah,!1)}}
C.TW.prototype={
S(){return new C.alU(A.T(x.de,x.er))}}
C.alU.prototype={
gD3(){var w,v=this,u=v.d
if(u===$){w=C.hk7(v.a.c.aj())
v.d!==$&&A.bF()
v.d=w
u=w}return u},
glR(d){var w,v,u=this,t=u.e
if(t===$){w=u.gD3().b
v=$.aw()
u.e!==$&&A.bF()
t=u.e=new A.au(new A.ba(w,B.b6,B.aQ),v)}return t},
ceZ(d){return this.f.c3(0,d,new C.bRl(d))},
Y(){this.a4()
var w=this.gD3().c
if(w.length===0)w.push(C.h5R(null,0,20,""))},
t(){var w,v,u=this.glR(0)
u.T$=$.aw()
u.P$=0
for(u=this.f,u=new A.dq(u,u.r,u.e);u.C();)for(w=J.aU(u.d);w.C();){v=w.gR(w)
v.T$=$.aw()
v.P$=0}this.a3()},
cKx(){if(this.gD3().c.length>=12)return
this.m(new C.bRm(this))},
jH(d){var w,v,u=this,t=u.gD3()
t.b=B.a.i(u.glR(0).a.a)
w=t.gapp(0)
if(t.b.length===0||w.length<2){u.c.L(x.q).f.U(D.fhC)
return}v=t.c
B.d.a8(v)
B.d.v(v,w)
v=u.c
v.toString
A.a5(v,!1).O(t)},
B(d){var w,v,u=this,t=null,s=new C.bRw(),r=x.p,q=A.a([A.bN(!1,D.fJ1,t,t,!0,t,t,t,u.gbq5(u),t,t)],r),p=A.a([D.fXZ,B.af,A.aM(t,B.Z,!1,t,!0,B.t,t,A.aO(),u.glR(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ak,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ac,t,t,t,t,t,t,t,t,t,t,t,B.fY,!0,B.a5,t,B.ao,t,t,t,t),B.aB],r)
for(w=0;v=u.gD3().c.length,w<v;++w)B.d.v(p,A.a([new A.ff(new C.bRv(u,w,s),t)],r))
if(v<12)p.push(A.at(C.uu("\uff0b Add a question",u.gcKw(),B.aT,t,B.c),t,t,t))
return new C.tF("Make your game",A.cl(p,t,t,D.bCT,t,t,B.ah,!1),q,t)}}
C.aqZ.prototype={
S(){return new C.aF4(A.a([],x._))},
bv(){return this.r.$0()},
qn(){return this.w.$0()},
ge3(){return this.c}}
C.aF4.prototype={
Y(){var w,v
this.a4()
this.wt()
w=this.a
v=w.c
if(v.length!==0)C.a89(v,w.e,w.d.w)},
wj(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hgX(r,t.e,!1,s.w,new C.e2Q(u),null,s),$async$wj)
case 2:w=3
return A.b(u.wt(),$async$wj)
case 3:return A.h(null,v)}})
return A.i($async$wj,v)},
a0B(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a0B=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hgX(r,t.e,!0,s.w,new C.e2P(u),null,s),$async$a0B)
case 2:w=3
return A.b(u.wt(),$async$a0B)
case 3:return A.h(null,v)}})
return A.i($async$a0B,v)},
wt(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wt=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Bo(q.a.c),$async$wt)
case 7:p=e
if(q.c!=null)n=q.e||J.cI(p)
else n=!1
if(n)q.m(new C.e2S(q,p))
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
return A.b(C.Hj(q.a.c).dh(0,B.qt),$async$wt)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.e2T(q,o))
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
if(q.c!=null&&q.e)q.m(new C.e2U(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wt,v)},
P7(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$P7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.L(s).f.U(D.fhc)
w=3
return A.b(C.Hj(t.a.c),$async$P7)
case 3:r=e
w=4
return A.b(C.fWt(t.a.c,r),$async$P7)
case 4:q=e
w=5
return A.b(C.Hj(t.a.c),$async$P7)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.e2O(t,p))
o=t.c.L(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(null,null,null,q?B.dI:B.cY,null,B.t,null,s,null,B.mZ,null,null,null,null,null,null,null,null,null,null))
t.a.qn()
case 1:return A.h(u,v)}})
return A.i($async$P7,v)},
Is(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Is=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.irK(l),$async$Is)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hUu(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b12(q,p.e,l,"Each family tree costs $"+B.j.ad(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Is)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hAM(r)
o=Date.now()
n=t.a.c
m=new C.kT(l,r.toUpperCase(),p,!0,B.Z,D.Dw,new A.V(o,0,!1),0,n,D.uz,B.cd)
w=5
return A.b(C.a3R(n,m),$async$Is)
case 5:w=6
return A.b(t.wt(),$async$Is)
case 6:t.a.bv()
t.a.qn()
if(t.c==null){w=1
break}t.F1(m)
case 1:return A.h(u,v)}})
return A.i($async$Is,v)},
F1(d){return this.cjU(d)},
cjU(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$F1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Bo(u.a.c),$async$F1)
case 2:n=l.nA(k.dI(f,new C.e2R(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hy(m,new C.aqT(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$F1)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a3R(u.a.c,o),$async$F1)
case 6:case 5:w=7
return A.b(u.wt(),$async$F1)
case 7:u.a.qn()
return A.h(null,v)}})
return A.i($async$F1,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.S(d).ax.a===B.J,o=new C.uh(p)
if(r.e)return A.at(A.n5(q,p?B.bu:B.br,q,q,q,q,q,q,q,q),q,q,q)
if(J.cr(r.d)){w=p?B.ed:B.c
v=A.m(15)
u=A.aI(!1,B.a3,!0,q,A.aP(!1,q,!0,A.q(q,D.bV4,B.f,q,q,new A.p(B.aY.j(0.12),q,A.L(B.aY,B.r,2),q,q,q,B.a7),q,52,q,q,q,q,q,52),B.cR,!0,q,q,q,q,q,q,q,q,q,q,q,r.gciY(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.as,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Gk(A.q(q,A.x(A.a([u,B.aR,t,B.U,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.br,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.dY,A.bI(D.h0c,q,r.gaT4(),A.bp(B.bR,q,q,q,q,q,Ax.a0D,q,new A.b9(A.m(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.i,0,B.p),B.f,q,q,new A.p(w,q,q,v,q,q,B.n),q,q,q,q,D.bFD,q,q,1/0),15,B.ag,1.05,D.aco,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.as,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b5],v)
if(J.cI(r.d))w.push(A.aG(q,q,q,q,A.X(B.zs,B.aY,q,q,q,q),q,q,q,new C.e2W(r),q,q,q,q,"Sync family trees with database",q))
if(J.cI(r.d))w.push(A.aG(q,q,q,q,A.X(B.zm,B.aY,q,q,q,q),q,q,q,r.gagT(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dh(E.as_,D.fGn,r.gaT4(),A.bp(B.bR,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.i,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.Gk(r.cGG(J.t(r.d,s),o),14,B.ag,1,D.aco,q))
B.d.v(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.l,q,B.e,B.i,0,B.p)],v),B.E,q,B.e,B.i,0,B.p)},
cGG(d,e){var w=null,v=e.a,u=v?B.ed:B.c,t=A.m(14),s=A.L((v?B.eg:B.bP).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.et,10)],x.V),q=A.m(14),p=A.q(w,D.bU8,B.f,w,w,new A.p(B.aY.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.as,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaqp(),m=d.d?"":" \xb7 Public",l=d.y===D.kV?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bH,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.br,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.i,0,B.p),1)
return A.q(w,A.aI(!1,B.a3,!0,w,A.aP(!1,q,!0,new A.D(B.bF,A.A(A.a([p,B.bd,l,A.X(B.OO,v?B.bu:B.br,w,w,w,w)],k),B.l,w,B.e,B.i,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e2V(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj),B.f,w,w,new A.p(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aqT.prototype={
S(){return new C.aF1(A.a([],x._),A.aR(x.N),A.b9L())},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aF1.prototype={
Y(){var w,v,u=this
u.a4()
u.d=u.a.w
u.adz()
w=u.a
v=w.c
if(v.length!==0)C.a89(v,w.e,w.d.w)},
t(){var w=this.w
w.T$=$.aw()
w.P$=0
this.a3()},
a3z(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yt("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e2g(r),s,null,!0,!0,x.y),$async$a3z)
case 3:if(e!==!0||t.c==null){w=1
break}t.JZ()
t.m(new C.e2h(t,r))
w=4
return A.b(t.ut(),$async$a3z)
case 4:t.a.bv()
t.yt(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a3z,v)},
cwm(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aW.x1$.push(new C.e2b(w,f,d,e))},
aVm(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dr()
u.eh(w,v,0,1)
u.k5(q,q,1,1)
this.w.sp(0,u)},
bd_(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eK(new Float64Array(16))
q.e7(r)
w=q.D8()
v=B.j.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dr()
t.eh(r,u,0,1)
t.k5(v,v,1,1)
t.eh(-r,-u,0,1)
t.iX(0,q)
s.sp(0,t)},
adz(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$adz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Bo(u.a.c),$async$adz)
case 2:t=s.nA(r.dI(e,new C.e1D(u)))
if(t!=null&&u.c!=null)u.m(new C.e1E(u,t))
return A.h(null,v)}})
return A.i($async$adz,v)},
yt(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.a_,w,w,w,w,w,w,w,w,w,w))},
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
return A.b(C.hgX(o,t,!1,r,new C.e1V(u),q.a,s),$async$wj)
case 2:n=A
m=J
w=3
return A.b(C.Hj(u.a.c),$async$wj)
case 3:p=n.nA(m.dI(e,new C.e1W(u)))
if(p!=null&&u.c!=null)u.m(new C.e1X(u,p))
return A.h(null,v)}})
return A.i($async$wj,v)},
JZ(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cC(w,0)},
ut(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ut=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a3R(t,s),$async$ut)
case 2:return A.h(null,v)}})
return A.i($async$ut,v)},
a25(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a25=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.uv(q,t.a.c)){t.yt("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.isW(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a25)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.JZ()
t.m(new C.e2a(t,r))
w=4
return A.b(t.ut(),$async$a25)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a25,v)},
b34(){var w=this.c
w.toString
A.a5(w,!1).cd(A.ec(new C.e1S(this),!1,null,x.H))},
a0P(){return this.cjW()},
cjW(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0P=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.uv(m,t.a.c)){t.yt("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.S(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Y(s,new C.e27(),A.U(s).k("Y<1>")).gI(0)
s=A.ez([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("ch.E"))
B.d.fj(p)
s=t.c
s.toString
w=3
return A.b(A.bT(B.L,null,new C.e28(n,t,new C.uh(m.ax.a===B.J),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a0P)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.JZ()
t.m(new C.e29(t,o))
w=6
return A.b(t.ut(),$async$a0P)
case 6:case 5:if(o.a&&t.c!=null)t.b34()
case 1:return A.h(u,v)}})
return A.i($async$a0P,v)},
Wz(d){return this.bDE(d)},
bDE(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.uv(r,t.a.c)){t.yt("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e1r(t,d),r,null,!0,!0,x.P),$async$Wz)
case 3:s=f
if(s==null){w=1
break}t.JZ()
t.m(new C.e1s(t,s))
w=4
return A.b(t.ut(),$async$Wz)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wz,v)},
a3V(d){return this.cIV(d)},
cIV(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a3V=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.S(s)
t=u.c
t.toString
w=2
return A.b(A.cf(null,null,!0,null,new C.e2j(u,d,new C.uh(s.ax.a===B.J)),t,null,!0,!0,x.H),$async$a3V)
case 2:return A.h(null,v)}})
return A.i($async$a3V,v)},
cgb(d){var w=this,v=w.d
v===$&&A.c()
if(C.uv(v,w.a.c))w.ON(d)
else w.a3V(d)},
ajo(d,e){return this.cAj(d,e)},
cAj(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ajo=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.S(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.e2d(new C.uh(r.ax.a===B.J),d,e),s,null,!0,!0,x.H),$async$ajo)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ajo,v)},
Ix(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ix=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kV?3:5
break
case 3:w=6
return A.b(C.h42(t.a.c),$async$Ix)
case 6:s=e
o=t.a
r=C.hoZ(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ajo(!s,!r),$async$Ix)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aQN(o,t.a.c)){t.yt("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lo(o,"Cancel","Remove",q.y===D.kV?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$Ix)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aQJ(t.a.c,t.d.a),$async$Ix)
case 11:t.a.bv()
o=t.c
if(o==null){w=1
break}A.j0(o,null)
case 1:return A.h(u,v)}})
return A.i($async$Ix,v)},
ab1(d){return this.bOR(d)},
bOR(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$ab1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.uv(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aV(s,new C.e1t(p))){o=A.U(s)
p.a=A.nA(new A.cM(new A.Y(s,new C.e1u(d),o.k("Y<1>")),new C.e1v(),o.k("cM<1,n>")))}q=p.a
if(q==null)q=d.d
t.JZ()
t.m(new C.e1w(t,s,d,q))
w=3
return A.b(t.ut(),$async$ab1)
case 3:t.yt(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$ab1,v)},
ON(d){return this.bR4(d)},
bR4(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ON=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.uv(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a3V(d),$async$ON)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.e1A(t,d),r,null,!0,!0,x.P),$async$ON)
case 6:s=f
if(s==null){w=1
break}t.JZ()
t.m(new C.e1B(t,s))
w=7
return A.b(t.ut(),$async$ON)
case 7:case 1:return A.h(u,v)}})
return A.i($async$ON,v)},
cH5(){var w=this,v=w.d
v===$&&A.c()
if(!C.uv(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.e2i(w))
w.ut()},
Zy(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Zy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aQN(n,t.a.c)){t.yt("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.S(n)
s=$.aw()
r=new A.au(B.aw,s)
q=t.d.e
p=A.bq(new A.N(q,t.gceF(),A.U(q).k("N<1,n>")).bY(0,new C.e1N()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e1O(t,new C.uh(n.ax.a===B.J),p,r),q,null,!0,!0,x.y),$async$Zy)
case 3:o=e
r.T$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.JZ()
t.m(new C.e1P(t,p))
w=4
return A.b(t.ut(),$async$Zy)
case 4:t.yt("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Zy,v)},
ceG(d){return B.a.i(d.toLowerCase())},
ciI(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.uv(v,w)
t=r.d
s=C.iho(t)
C.irO(q,t.b,u,C.ihn(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.S(d).ax.a===B.J,m=new C.uh(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Y(l,new C.e2q(),A.U(l).k("Y<1>")).gI(0)
l=n?B.c3:B.iD
v=A.X(B.a1O,n?B.bu:B.br,o,o,o,18)
u=x.p
v=A.a([new A.D(B.Cd,A.aP(!1,o,!0,new A.D(B.hG,A.A(A.a([v,B.bm,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.br,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e2r(p,d),o,o,o,o,o,o,o),o),new A.D(B.nF,p.c1j(m),o)],u)
if(p.d.y===D.kV){t=B.tf.j(0.15)
s=A.m(12)
r=A.L(B.tf.j(0.45),B.r,1)
q=C.Hh(p.d,p.a.c)
v.push(new A.D(B.yI,A.q(o,A.A(A.a([D.bZx,B.au,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.p(t,o,r,s,o,o,B.n),o,o,o,o,B.iu,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b5],u)
if(C.uv(p.d,p.a.c)&&p.e.length!==0)u.push(new C.Gw("Undo",B.pw,p.gcH4(),m,o,o))
u.push(new C.Gw("Family Book",D.bOT,p.gciH(),m,B.u5,o))
u.push(new C.Gw("Family games",B.oA,p.gciT(),m,B.aE,o))
if(C.uv(p.d,p.a.c))u.push(new C.Gw("Display settings",B.D3,p.gcjV(),m,B.b1,o))
u.push(new C.Gw("Sync",B.zm,p.gagT(),m,o,o))
t=p.d
if(t.y===D.kV||C.aQN(t,p.a.c)){t=p.d.y===D.kV?"Remove shared tree":"Delete tree"
u.push(new C.Gw(t,B.eh,p.gbP0(),m,B.fh,o))}if(C.uv(p.d,p.a.c))u.push(new C.Gw("Add member",B.wF,new C.e2s(p),m,B.bR,o))
v.push(new A.D(A_.alR,A.A(u,B.l,o,B.e,B.i,0,o,o),o))
if(p.d.gaqp()===0){u=A.at(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.br,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cs(new C.e2t(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?O.a1S:A6.OP,o,o,o,o,o)
v.push(A.at(A.ho(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e2u(p),o),o,o,o))}return A.c4(o,l,A.bm(!0,A.x(v,B.E,o,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c1j(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fS.j(0.35),B.dv,18)],x.V)
u=A.m(22)
t=A.ap(-26,A.X(B.zf,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aI(!1,B.a3,!0,m,A.aP(!1,m,!0,A.q(m,D.c1H,B.f,m,m,new A.p(B.c.j(0.16),m,A.L(B.c.j(0.45),B.r,1.5),m,m,m,B.a7),m,46,m,m,m,m,m,46),B.cR,!0,m,m,m,m,m,m,m,m,m,m,m,n.gagT(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.frC,m,m,m)
r=r.gaqp()
p=n.d.gaqp()===1?"member":"members"
o=x.p
p=A.a([s,B.bd,A.E(A.x(A.a([q,B.bH,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.i,0,B.p),1)],o)
if(C.uv(n.d,n.a.c))p.push(A.aG(m,m,m,m,D.bZK,m,m,m,n.gctJ(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.i,0,m,m)
r=n.d.d
q=r?B.jI:B.n5
r=r?"Private":"Public"
r=A.E(n.awW(q,"Privacy",r,n.a.d.w?n.gcG_():m),1)
q=A.E(n.awW(B.zn,"Tree code",n.d.c,new C.e1C(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.ae,q,B.ae,A.E(n.awW(D.bQz,"Collaborators",p,n.gc63()),1)],o),B.l,m,B.e,B.i,0,m,m)],o)
if(n.d.y===D.kV){s=B.c.j(0.15)
B.d.v(p,A.a([B.U,A.aI(!1,B.a3,!0,A.m(999),A.aP(!1,A.m(999),!0,new A.D(B.hc,A.A(A.a([A.X(B.px,B.c,m,m,m,14),B.e4,A.d("View only",m,m,m,m,m,m,B.aVb,m,m,m)],o),B.l,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.aj)],o))}return A.q(m,A.by(u,new A.an(B.a0,m,B.ad,B.t,A.a([t,new A.D(B.GM,A.x(p,B.E,m,B.e,B.i,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.p(m,m,m,w,v,D.c6_,B.n),m,m,m,m,m,m,m,1/0)},
awW(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aI(!1,B.a3,!0,A.m(14),A.aP(!1,A.m(14),!0,new A.D(K.amZ,A.x(A.a([A.X(d,B.c,w,w,w,18),B.ax,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.vv,A.d(f,w,1,B.a2,w,w,w,Aq.AI,w,w,w)],x.p),B.l,w,B.e,B.i,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)}}
C.bgu.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gau(r)&&s.c.length===0)return B.bL
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bgx(s,t),new A.av(w,v))],x.p)
r=r.gdO(r)
B.d.v(u,r.dL(r,new C.dgA(this),x.l))
r=s.c
B.d.v(u,new A.N(r,new C.dgB(this),A.U(r).k("N<1,v>")))
return new A.D(B.uv,new A.a6(w,v,new A.an(B.a0,t,B.ad,B.f,u,t),t),t)}}
C.KT.prototype={}
C.GA.prototype={}
C.bgw.prototype={
gblw(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aKD.prototype={}
C.bgx.prototype={
bQG(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
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
bQD(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aZ(a0,new C.dgV())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aV(a0,new C.dgW(f))
t=new A.N(a0,new C.dgX(f),A.U(a0).k("N<1,F>")).bY(0,new C.dgY()).cJ(0,1/0,B.ro)
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
if(s!=null&&s.length!==0)this.bQD(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.J)(v),++t){r=v[t]
if(r.c)this.bQG(d,w,r.a,r.b)}},
aE(d){return d.b!==this.b}}
C.bkj.prototype={
gcc0(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aDf
switch(w.c.a){case 0:return D.cZG
case 1:return D.daR
case 2:return D.dsR}},
gcc3(){var w=this.c,v=C.hzX(w.w),u=C.hzX(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.S(d).ax.a===B.J,q=t.gcc0(),p=t.c,o=N.bEP(p.f),n=t.gcc3(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gan(q).j(0.35),B.cM,10)],m),k=r?B.as:B.c,j=A.L(r?B.as:B.c,B.r,2)
if(o!=null)w=A.tJ(B.A,s,B.cj,B.c_,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gan(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.q(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gan(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.p(s,s,s,s,s,new A.a9(B.a6,B.aa,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.q(s,A.q(s,A.hT(w,B.aq),B.f,s,s,new A.p(k,s,j,s,s,s,B.a7),s,s,s,s,s,s,s,s),B.f,s,s,new A.p(s,s,s,s,l,new A.a9(B.aA,B.aF,B.x,q,s,s),B.a7),s,56,s,s,B.H2,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.L(r?B.as:B.c,B.r,1.5)
l.push(A.ap(s,A.q(s,A.d(""+k,s,s,s,s,s,s,D.fCe,s,s,s),B.f,s,s,new A.p(B.ch,s,w,j,s,s,B.n),s,s,s,s,D.bHC,s,s,s),s,s,s,-6,-4,s))}k=r?B.cr:B.c
j=A.m(8)
w=A.L(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dG,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cr,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aS:B.br,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aA(s,new A.a6(84,112,A.x(A.a([new A.an(B.a0,s,B.ad,B.f,l,s),B.ax,A.q(s,A.x(p,B.l,s,B.e,B.Q,0,B.p),B.f,s,D.b6h,new A.p(k,s,w,j,m,s,B.n),s,s,s,s,D.bHN,s,s,s)],v),B.l,s,B.e,B.i,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bfz.prototype={
a5(d,e){var w,v,u,t,s
$.Q()
w=A.K()
v=this.b
u=v?B.c:D.bj8
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.N(new A.o(s,t),1,w)},
aE(d){return d.b!==this.b}}
C.byh.prototype={
B(d){var w=this,v=null,u=new C.fm8(w),t=w.c,s=t?B.cr:B.c,r=A.m(12),q=u.$3(B.hW,"Zoom in",w.d),p=A.q(v,v,B.f,t?B.bA:B.fq,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.wH,"Zoom out",w.e)
return A.aI(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.q(v,v,B.f,t?B.bA:B.fq,v,v,v,1,v,v,v,v,v,22),u.$3(B.apx,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.ds,v,v,v,B.aj)}}
C.bnD.prototype={
B(d){var w=this,v=null,u=B.bR.j(0.15),t=A.L(B.bR,B.r,2),s=w.e,r=x.p
t=A.aA(v,A.q(v,A.x(A.a([A.X(s?O.a1S:A6.OP,B.bR,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fyk,v,v,v)],r),B.l,v,B.bb,B.i,0,B.p),B.f,v,v,new A.p(u,v,t,v,v,v,B.a7),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.an,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fw9,B.K,v,v)],r)
if(s){t=A.a([B.an],r)
s=w.d
B.d.v(t,new A.N(s,new C.eXh(w),A.U(s).k("N<1,v>")))
B.d.v(u,t)}return new A.a6(84,v,A.x(u,B.l,v,B.e,B.i,0,B.p),v)}}
C.a07.prototype={
S(){return new C.aDv()},
bv(){return this.Q.$0()},
ge3(){return this.w}}
C.aDv.prototype={
Y(){var w,v,u,t,s,r=this,q=null
r.a4()
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
r.y=t==null?D.yW:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.iiY(w.r,w.f)
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
Qh(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Qh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hoZ(p.y,p.w)
w=3
return A.b(A.lz(t.a.w,B.Jq),$async$Qh)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b12(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Qh)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hUv(p.y,p.w)
t.a.bv()
case 5:w=7
return A.b(Az.Ht(78,800),$async$Qh)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dwR(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Qh,v)},
cc2(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hU(B.o.u(1000*Date.now()),w,D.yW,null,null,null,"","","","","",1,!1,0)
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
s=v.aG0(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a5(k,!1).O(s)},
aaD(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aaD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dwQ(r),s,null,!0,!0,x.y),$async$aaD)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a5(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$aaD,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.S(d).ax.a===B.J,i=new C.uh(j),h=l.a.e,g=A.U(h).k("Y<1>"),f=A.C(new A.Y(h,new C.dx_(l),g),g.k("M.E"))
h=j?B.ed:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bG0,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.as,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ap(k,A.hb(A.aP(!1,k,!0,new A.D(B.me,A.X(B.eh,B.pg,k,k,k,17),k),B.cR,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbLC(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jX:B.jj
t=N.bEP(l.as)
if(l.as==null)s=A.X(B.pn,j?B.bu:B.br,k,k,k,40)
else s=k
s=A.at(A.aA(k,new A.an(B.a0,k,B.ad,B.t,A.a([A.h8(u,t,s,k,42),A.ap(0,A.h8(B.bR,k,D.bTd,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcc_(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.c()
t=C.aDx(t,"Full name",B.n2,1,1,i,B.mz)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.X,new C.bkh(i,u,new C.dx0(l),k)],v),B.l,k,B.e,B.i,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.br,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bzm],q)
o=l.a.e
B.d.v(p,new A.N(o,new C.dx1(),A.U(o).k("N<1,eI<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.br,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bzo],q)
B.d.v(q,new A.N(f,new C.dx3(),A.U(f).k("N<1,eI<n?>>")))
o=A.x(A.a([t,B.an,new C.ae9(i,r,"Who is their parent?",p,new C.dx4(l),k,o),B.aB,n,B.an,new C.ae9(i,m,"Who is their spouse / partner?",q,new C.dx5(l),k,o)],v),B.al,k,B.e,B.i,0,B.p)
q=l.f
q===$&&A.c()
q=C.aDx(q,"Birth date",D.aoD,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aDx(m,"Birth place",B.a26,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aDx(n,"Date of death (if deceased)",D.aqL,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aDx(p,"Occupation",B.a3i,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.ad,B.t,w,k),B.aB,s,B.by,new C.aea(i,"Identity",u,k),B.af,new C.aea(i,"Family links",o,k),B.af,new C.aea(i,"Life details",A.x(A.a([q,B.X,m,B.X,n,B.X,p,B.X,C.aDx(r,"Notes",B.lk,5,3,i,k)],v),B.l,k,B.e,B.i,0,B.p),k),B.af,new C.aDw(i,"Child order",l.ck9(l.at),new C.dx6(l),new C.dx7(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.he8(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dx8(l):k
B.d.v(r,A.a([B.X,new C.aDw(i,"Visible in tree",u,w,new C.dx9(l),k)],v))}r.push(B.X)
w=j?B.jX:B.jj
u=A.m(14)
t=A.L(j?B.eg:B.bP,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.as,k,k,k,k,k,k,k,k,14,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.q(k,A.iQ(k,B.bR,k,B.ag,k,new C.dxa(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.br,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.p(w,k,t,u,k,k,B.n),k,k,k,k,B.a06,k,k,k))
r.push(B.by)
w=j?B.aP:B.as
j=j?B.eg:B.bP
r.push(A.A(A.a([A.E(A.dU(B.nY,new C.dx2(d),A.di(k,k,k,k,k,k,k,k,k,w,k,k,B.co,k,new A.b9(A.m(14),B.a1),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bd,A.E(A.bI(D.f8R,k,l.gcc1(),A.bp(B.aY,k,k,0,B.c,k,B.co,k,new A.b9(A.m(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.i,0,k,k))
r.push(B.ax)
return A.eg(B.f7,k,B.ag,h,new A.a6(420,k,A.cd(A.x(r,B.al,k,B.e,B.Q,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),k),D.amk,k,B.alI,new A.b9(g,B.a1),k,k)},
ck9(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aea.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.br,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jX:B.jj,s=A.m(16)
return A.x(A.a([new A.D(B.a0I,u,w),A.q(w,this.e,B.f,w,w,new A.p(t,w,A.L(v?B.eg:B.bP,B.r,1),s,w,w,B.n),w,w,w,w,B.bi,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)}}
C.bki.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.ed:B.c,r=A.m(12),q=A.L((t?B.eg:B.bP).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aP:B.as,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.q(u,A.aM(u,B.Z,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bt(u,B.eK,u,B.wg,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bu:B.br,u,u,u,u,u,u,u,u,u,u,u,B.cD,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bR,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ak,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ac,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.f,u,u,new A.p(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.ae9.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.ed:B.c,s=A.m(12),r=A.L((u?B.eg:B.bP).j(0.85),B.r,1),q=A.X(B.t0,u?B.bu:B.br,v,v,v,v),p=A.l(v,v,u?B.aP:B.as,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.ed:B.c
return A.q(v,new A.Em(A.a5m(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bu:B.br,v,v,v,v,v,v,v,v,v,v,v,B.cD,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.p(t,v,r,s,v,v,B.n),v,v,v,v,B.kt,v,v,v)}}
C.bkh.prototype={
B(d){var w=new C.dxb(this)
return A.A(A.a([w.$3(D.wp,"Male",B.Pz),B.ae,w.$3(D.os,"Female",B.Pj),B.ae,w.$3(D.yW,"Other",B.nJ)],x.p),B.l,null,B.e,B.i,0,null,null)}}
C.aDw.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jX:B.jj,r=A.m(14),q=A.L(t?B.eg:B.bP,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.as,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.q(v,A.A(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bu:B.br,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.i,0,B.p),1),new C.aJF(u,B.wH,w.f,v),B.bm,new C.aJF(u,B.hW,w.r,v)],o),B.l,v,B.e,B.i,0,v,v),B.f,v,v,new A.p(s,v,q,r,v,v,B.n),v,v,v,v,B.ey,v,v,v)}}
C.aJF.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bR.j(0.12)
else w=s.c.a?B.ed:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bR
else t=(s.c.a?B.bu:B.br).j(0.4)
return A.aI(!1,B.a3,!0,v,A.aP(!1,u,!0,new A.a6(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.aj)}}
C.aeb.prototype={
bUS(d){switch(d.a){case 0:return B.bR
case 1:return B.bD
case 2:return B.d0}},
bUT(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aZU(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
AI(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.ed:B.c
u=A.m(12)
t=A.L((w?B.eg:B.bP).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bR,p,p,p,18),B.au],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bu:B.br,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.ax,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.as,p,p,p,p,p,p,p,p,14,p,p,B.V,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.i,0,B.p),1))
return A.q(p,A.A(r,B.E,p,B.e,B.i,0,p,p),B.f,p,p,new A.p(v,p,t,u,p,p,B.n),p,p,p,B.cx,B.yE,p,p,1/0)},
aff(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.br,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jX:B.jj,s=A.m(16),r=A.L(v?B.eg:B.bP,B.r,1)
return A.x(A.a([new A.D(B.a0I,u,w),A.q(w,A.x(e,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(t,w,r,s,w,w,B.n),w,w,w,w,B.bW,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hF5(r,q),o=q.c,n=t.bUS(o),m=N.bEP(q.f),l=t.e.a,k=l?B.ed:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.as,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kV?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bu:B.br,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.L(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.I,12)],x.V)
u=n.j(0.12)
l=A.at(A.q(s,A.h8(u,m,m==null?A.X(B.pn,n,s,s,s,48):s,s,52),B.f,s,s,new A.p(s,s,w,s,v,s,B.a7),s,s,s,s,B.eA,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.L(n.j(0.45),B.r,1)
v=A.at(A.q(s,A.d(t.bUT(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.p(w,s,u,v,s,s,B.n),s,s,s,s,B.mc,s,s,s),s,s,s)
u=x.p
i=A.a([t.AI("Full name",i,B.n2)],u)
if(p>0)i.push(t.AI("Child order","#"+p,B.Pp))
r=A.a([h,B.ax,r,B.aR,l,B.X,v,B.by,t.aff("Identity",i),B.af,t.aff("Life details",A.a([t.AI("Birth date",q.w,D.aoD),t.AI("Birth place",q.x,B.a26),t.AI("Date of death",q.y,D.aqL),t.AI("Occupation",q.z,B.a3i)],u)),B.af,t.aff("Family links",A.a([t.AI("1. Parent",t.aZU(q.d),B.Hi),t.AI("2. Spouse",t.aZU(q.e),B.Hw)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.af,t.aff("Notes",A.a([t.AI("Notes",q,B.lk)],u))],u))
r.push(B.by)
r.push(A.bI(B.KV,s,new C.dxl(d),A.bp(B.aY,s,s,s,s,s,B.co,s,new A.b9(A.m(14),B.a1),s,s,s)))
return A.eO(s,k,new A.cQ(B.m_,A.cd(A.x(r,B.al,s,B.e,B.Q,0,B.p),B.t,s,B.y,s,B.yL,s,s,B.ah),s),s,s,s,B.GQ,B.d7,s,new A.b9(j,B.a1),s)}}
C.Gw.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bu:B.br
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.ux,A.hb(A.aI(!1,B.a3,!0,A.m(8),A.aP(!1,A.m(8),!0,new A.a6(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.aj),u,v.c,u,u),u)}}
C.aqW.prototype={
f2(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.U(w).k("N<1,a8<n,@>>")
w=A.C(new A.N(w,new C.ceM(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jq(w,new C.ceN(),t,x.fO))
return s}}
C.aqX.prototype={
S(){return new C.aF3(A.a([],x.bF))},
gd1(){return this.c}}
C.aF3.prototype={
Y(){this.a4()
this.K5()},
K5(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$K5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.ceQ(t.a.c),$async$K5)
case 3:r=e
w=4
return A.b(C.Bo(t.a.c),$async$K5)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rj(q,new C.e2D(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.e2E(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$K5,v)},
z1(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.a_,w,w,w,w,w,w,w,w,w,w))},
KT(d,e){return this.cJB(d,e)},
cJB(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$KT=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.e2I(q,e))
t=3
w=6
return A.b(d.$0(),$async$KT)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.e2J(q))
$.eX.mC()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$KT,v)},
Yl(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pv(r,s.c,s.e),$async$Yl)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KT(new C.e2A(t),"Preparing download\u2026"),$async$Yl)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yl,v)},
Yp(d){return this.bSK(d)},
bSK(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pv(r,s.c,s.e),$async$Yp)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.KT(new C.e2B(t,d),"Preparing file\u2026"),$async$Yp)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yp,v)},
ahf(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ahf=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xO.cq().ME(B.Sx,B.uA,!0),$async$ahf)
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
$.am.$1("[family tree sync pick] file_picker: "+A.w(p))
w=6
break
case 3:w=2
break
case 6:u=A.Hs()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahf,v)},
Z1(d){return this.c2e(d)},
c2e(d){var w=0,v=A.j(x.H),u=this
var $async$Z1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.KT(new C.e2C(u,d),"Restoring family trees\u2026"),$async$Z1)
case 2:return A.h(null,v)}})
return A.i($async$Z1,v)},
Z0(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Z0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ahf(),$async$Z0)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Z1(s),$async$Z0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Z0,v)},
a2X(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2X=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pv(r,s.c,s.e),$async$a2X)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KT(new C.e2H(t),"Creating QR code\u2026"),$async$a2X)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2X,v)},
a2y(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2y=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DA()){t.z1("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a5(s,!1).cd(A.ec(new C.e2F(),!0,null,x.N)),$async$a2y)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Z1(r),$async$a2y)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2y,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.S(d).ax.a===B.J,n=o?B.BG:B.iD,m=o?D.ajX:B.aP,l=o?B.aM:B.bP,k=o?B.aP:B.as,j=new C.dgZ(n,m,l,k,o?B.bK:B.br)
l=A.aG(p,p,p,p,A.X(B.eN,k,p,p,p,20),p,p,p,new C.e2L(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eH(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.dgx(!0,B.jK,B.aH,B.aH,q.r?p:q.gcA7(),j,s,"Show restore QR"),1),B.au],u))}s=q.e
r=q.r?p:q.gcwh()
t.push(A.E(C.dgx(!s,B.jp,B.b8,B.bp,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.i,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.dgx(!1,B.hY,B.aY,B.bR,q.r?p:q.gbSD(),j,"Photos & books included","Download all trees"),1),B.au],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dgx(!1,R.zo,B.av,B.aV,q.r?p:q.gc2b(),j,s,"Upload backup file"),1))
l=A.a([new C.bgv(v,l,p),B.l2,new C.adq(j,"QR restore",p),B.X,t,B.d8,new C.adq(j,"Backup files",p),B.X,A.A(r,B.l,p,B.e,B.i,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.l2,new C.adq(j,"One tree",p),B.X],u)
B.d.v(v,J.b7(q.d,new C.e2M(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cl(l,p,p,B.a0A,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.L(B.aY.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dv,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ap(24,A.bm(!0,A.q(p,A.A(A.a([O.aTB,B.bd,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.V,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.i,0,p,p),B.f,p,p,new A.p(m,p,t,v,s,p,B.n),p,p,p,p,B.Cj,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c4(w,n,new A.an(B.a0,p,B.ad,B.t,l,p),p,!1,!1,p,p)}}
C.dgZ.prototype={}
C.bgv.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aY.j(0.32),B.kB,28)],x.V)
t=A.ap(p,A.X(B.uU,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.q(p,new A.an(B.a0,p,B.ad,B.t,A.a([t,new A.D(B.ac,A.A(A.a([A.q(p,D.c1d,B.f,p,p,new A.p(s,p,A.L(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.oV,A.E(A.x(A.a([D.fHm,B.U,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.i,0,B.p),1)],q),B.E,p,B.e,B.i,0,p,p),p)],q),p),B.f,p,p,new A.p(p,p,p,v,u,D.c9a,B.n),p,p,p,p,p,p,p,p)}}
C.adq.prototype={
B(d){var w=null
return A.A(A.a([A.q(w,w,B.f,w,w,new A.p(B.aY,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ae,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)}}
C.bgt.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.L(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aH.j(0.1),B.cM,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.L(t.j(0.35),B.r,1)
return A.aI(!1,B.a3,!0,q,A.aP(!1,o,!0,A.eJ(A.d8(new A.D(E.a0c,A.x(A.a([A.q(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.p(v,q,s,u,q,q,B.n),q,q,q,q,B.rX,q,q,q),B.af,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bH,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cD,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.i,0,B.p),q),w),q,new A.p(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)}}
C.bgy.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.L(s.c,B.r,1),q=B.aY.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aI(!1,B.a3,!0,v,A.aP(!1,u,!0,A.eJ(new A.D(B.eY,A.A(A.a([A.q(v,D.c0r,B.f,v,v,new A.p(q,v,A.L(B.aY.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.rX,v,v,v),B.bd,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.i,0,B.p),1),A.X(B.hY,o,v,v,v,20)],n),B.l,v,B.e,B.i,0,v,v),v),v,new A.p(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.aj)}}
C.a0r.prototype={
S(){return new C.aF2()},
gd1(){return this.c}}
C.aF2.prototype={
Y(){this.a4()
this.aaa()},
aaa(){var w=0,v=A.j(x.H),u=this,t
var $async$aaa=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b3H(u.a.c,B.E6),$async$aaa)
case 2:t=e
if(u.c!=null)u.m(new C.e2v(u,t))
return A.h(null,v)}})
return A.i($async$aaa,v)},
aiH(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aiH=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.e2w(q))
t=4
p=A.hqF(q.a.d,B.E6)
if(p==null){n=A.bc("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.atf(n.e,m,l,B.E6,p,n.f),$async$aiH)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.e2x(q))
q.c.L(x.q).f.U(D.fip)
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
if(q.c!=null)q.m(new C.e2y(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aiH,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.S(d).ax.a===B.J,o=p?B.jA:B.qj,n=p?B.iC:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eH(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fXT,q,q,q,1,q,!0)
w=A.m(24)
v=A.L(B.aY.j(0.35),B.r,1)
u=A.qb(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aY,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.q(q,A.x(A.a([B.U,u,B.by,t,B.U,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.am,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.bb,B.i,0,B.p),B.f,q,q,new A.p(n,q,v,w,q,q,B.n),q,q,q,q,B.ac,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ab:B.bv,q,q,q,q,q,q,q,q,q,q,q,B.V,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcw0()
if(u)u=B.Km
else u=A.X(r.e===!0?B.hI:B.aoC,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a6(1/0,q,A.es(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cg,q,q,q),t,A.di(q,q,q,q,q,q,q,q,q,B.aY,q,B.h5,q,q,q,new A.ay(B.aY.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.hU,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aD:B.am,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.X)
w.push(new A.a6(1/0,q,A.bI(B.AR,q,new C.e2z(d),A.bp(B.aY,q,q,q,q,B.h5,q,q,q,q,q,q)),q))
return A.c4(m,o,new A.D(B.ac,A.x(w,B.l,q,B.e,B.i,0,B.p),q),q,!1,!1,q,q)}}
C.a0s.prototype={
S(){return new C.blM(A.zW(B.ys,B.o3,B.v1))}}
C.blM.prototype={
t(){this.d.t()
this.a3()},
B(d){var w=null
return A.c4(A.eH(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fPA,w,w,w,1,w,!0),B.w,A.zV(this.d,B.c_,new C.e2N(this,d)),w,!1,!1,w,w)}}
C.b_z.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.S1,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lW.prototype={}
C.a7e.prototype={
S(){return new C.blr(null,null)}}
C.blr.prototype={
Y(){var w=this,v=null
w.a4()
w.d=A.bn(v,B.rR,v,1,v,w)
w.e=A.bn(v,B.om,v,1,v,w)
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
this.byT()},
B(d){var w,v,u=this,t=B.d.dP(D.a6b,new C.dOY(u),new C.dOZ())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cCp(A.c9(new A.h6(A.a([w,v],x.dS)),new C.dP_(u,t),null),!0)}}
C.blq.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b3v(d,e)
break
case"house":p.mg(d,e,D.dfS)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdA()
$.Q()
t=A.K()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.N(new A.o(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mm(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.Bt(d,e,12)
p.yD(d,e,B.ld,5,14)
break
case"grocery":p.ckT(d,e)
break
case"calculator":p.ckA(d,e)
break
case"lumber":p.cl0(d,e)
break
case"kitchen":p.ckW(d,e)
break
case"landscape":p.mg(d,e,D.dgu)
s=new A.aF($.Q().r,B.ai,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.aZ(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.c5(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.c5(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.aq(t,w))
s.E(new A.aq(0,w))
s.E(new A.bv())
w=A.K()
w.r=B.eq.j(0.85).gp(0)
d.af(s,w)
p.Bt(d,e,8)
p.yD(d,e,B.i9,4,18)
break
case"plumbing":p.cl9(d,e)
break
case"electrical":p.mg(d,e,D.ds3)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.Q()
u=A.K()
u.r=B.c.j(q*0.12).gp(0)
d.ar(new A.a1(0,0,0+e.a,0+e.b),u)
p.mm(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mm(d,e,B.m3.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.Bt(d,e,10)
break
case"store":p.clj(d,e)
break
case"paint_remodel":p.cl4(d,e)
break
case"roofing":p.clb(d,e)
break
case"warehouse":p.clq(d,e)
break
case"vehicles":p.clo(d,e)
break
case"farm":p.ckN(d,e)
break
case"restaurant":p.cla(d,e)
break
case"tools":p.clm(d,e)
break
case"wallet":p.clp(d,e)
break
case"concrete":p.ckG(d,e)
break
case"blueprint":p.cky(d,e)
break
default:p.b3v(d,e)}},
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
d.cD(A.bX(t,s),u,u+0.1439896632895322-u,!1,w)}},
yD(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdA()/2-h
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
b3v(d,e){var w,v=this
v.mg(d,e,D.dqp)
w=v.c
v.mm(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mm(d,e,B.bN.j(0.45),-w*3.141592653589793*1.4,22)
v.bQz(d,e,B.i6,w)
v.yD(d,e,B.c.j(0.7),6,8)},
bQz(d,e,f,g){var w,v,u,t,s,r
$.Q()
w=A.K()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.ar(new A.a1(16,r,t,r+3),w)}},
ckT(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mg(d,e,D.cuR)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.aq(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.T,B.P)
m.r=D.de2[B.o.F(t,4)].j(0.85).gp(0)
d.N(new A.o(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mm(d,e,B.c.j(0.35),w,16)
l.yD(d,e,B.i9,5,12)},
ckA(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
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
r=D.dii[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb1(0,new A.en(r,h,h,B.cJ,h,h,h,h,h,h,new A.G(!0,q,h,h,h,h,14+m*4,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e5()
p.a5(d,new A.o(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.aq(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cv1[o]
l=B.kK.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb1(0,new A.en(m,h,h,B.cJ,h,h,h,h,h,h,new A.G(!0,l,h,h,h,h,12+k*3,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e5()
p.a5(d,new A.o(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.aq(o,3)*0.38)+Math.sin(n)*6))}i.mm(d,e,B.c.j(0.35),w*1.5,14)
i.mm(d,e,B.eL.j(0.55),-v*3.141592653589793*2,8)
i.mm(d,e,B.y6.j(0.4),r*2.8,22)
i.yD(d,e,B.qa,8,10)
i.Bt(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.j.F(w+o*0.22,0.9)
$.Q()
v=new A.ao(B.O,B.M,B.R,B.T,B.P)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.o(12,j),new A.o(t,j),v)}},
cl0(d,e){var w,v,u,t,s,r,q,p,o=this
o.mg(d,e,W.aAn)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bl(new A.a1(20,r,u,r+10),B.hP)
$.Q()
p=new A.ao(B.O,B.M,B.R,B.T,B.P)
p.r=A.ar(B.h_,B.o8,(s+1)/2).gp(0)
d.am(q,p)}o.mm(d,e,B.h_.j(0.35),w,15)
o.Bt(d,e,8)},
ckW(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mg(d,e,D.dex)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.j.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.j.F(s*0.13,0.7)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.T,B.P)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.N(new A.o(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mm(d,e,B.bN.j(0.4),-w*3.141592653589793*2.2,11)
l.yD(d,e,B.q7,4,14)},
cl9(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mg(d,e,D.d2H)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.j.F(s,0.12)
$.Q()
o=new A.ao(B.O,B.M,B.R,B.T,B.P)
o.b=B.a9
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.N(new A.o(w,u),q*(0.12+r*0.14+p),o)}n.yD(d,e,B.pf,6,12)
n.mm(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
clj(d,e){var w,v,u,t,s,r,q,p=this
p.mg(d,e,D.cIJ)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bl(new A.a1(r,14,r+u,22),B.iy)
$.Q()
q=new A.ao(B.O,B.M,B.R,B.T,B.P)
q.r=A.ar(B.fn,B.bN,(s+1)/2).gp(0)
d.am(r,q)}p.mm(d,e,B.c.j(0.3),w,16)
p.Bt(d,e,8)
p.yD(d,e,B.w_,5,13)},
cl4(d,e){var w,v,u,t,s,r,q
this.mg(d,e,D.d91)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.j.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bl(new A.a1(r,q,r+8,q+(18+s*22)),B.hQ)
$.Q()
r=new A.ao(B.O,B.M,B.R,B.T,B.P)
r.r=[B.ir,B.dk,B.bN,B.ev][t].j(0.85).gp(0)
d.am(q,r)}this.mm(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
clb(d,e){var w,v,u,t,s,r,q
this.mg(d,e,D.d6o)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.j.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.Q()
q=new A.ao(B.O,B.M,B.R,B.T,B.P)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.o(u*(0.1+r),s),new A.o(u*(0.18+r),s+10),q)}this.yD(d,e,B.cu,7,11)},
clq(d,e){var w,v,u,t,s,r,q,p
this.mg(d,e,D.cLt)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bl(new A.a1(q,p,q+(t-s*8),p+16),B.hP)
$.Q()
q=new A.ao(B.O,B.M,B.R,B.T,B.P)
q.r=A.ar(B.cu,B.aP,(Math.sin(r)+1)/2).gp(0)
d.am(p,q)}this.mm(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
clo(d,e){var w,v,u,t,s,r,q
this.mg(d,e,D.dwf)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.j.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.bl(new A.a1(s,r,s+28,r+8),B.hP)
$.Q()
q=new A.ao(B.O,B.M,B.R,B.T,B.P)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.am(r,q)}this.Bt(d,e,6)},
ckN(d,e){var w,v,u,t,s,r,q,p
this.mg(d,e,D.dd7)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.Q()
s=A.K()
s.r=B.m3.j(0.75).gp(0)
d.N(new A.o(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ao(B.O,B.M,B.R,B.T,B.P)
p.r=B.hp.j(0.85).gp(0)
p.c=3
d.ah(new A.o(q,v),new A.o(q+s*6,t),p)}this.mm(d,e,B.m3.j(0.35),w,14)},
cla(d,e){var w,v,u,t,s,r,q=this
q.mg(d,e,D.dfH)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bs(new A.o(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.Q()
r=new A.ao(B.O,B.M,B.R,B.T,B.P)
r.r=B.c.j(0.22).gp(0)
d.bZ(s,r)}q.yD(d,e,B.q7,5,16)
q.Bt(d,e,7)},
clm(d,e){var w,v,u,t,s,r,q,p,o=this
o.mg(d,e,D.dtD)
w=o.c
v=w*3.141592653589793
o.mm(d,e,B.o8.j(0.55),v*3,10)
o.mm(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.Q()
p=new A.ao(B.O,B.M,B.R,B.T,B.P)
p.r=B.o8.j(0.8).gp(0)
d.N(new A.o(v+r*34,u+q*22),4,p)}},
clp(d,e){var w,v,u,t,s,r,q,p,o=this
o.mg(d,e,D.dwV)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bl(new A.a1(q,p,q+36,p+22),B.iy)
$.Q()
q=new A.ao(B.O,B.M,B.R,B.T,B.P)
q.r=A.ar(B.i9,B.m3,r).gp(0)
d.am(p,q)}o.Bt(d,e,9)
o.mm(d,e,B.c.j(0.4),w*2.2,12)},
ckG(d,e){var w,v,u,t,s,r,q,p
this.mg(d,e,D.dle)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bX(new A.o(v,u),34)
$.Q()
s=A.K()
s.b=B.a9
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cD(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ao(B.O,B.M,B.R,B.T,B.P)
p.r=B.bP.j(0.85).gp(0)
d.N(new A.o(v+t*34,u+s*34),3,p)}},
cky(d,e){var w,v,u,t,s,r,q
this.mg(d,e,D.dgO)
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
aE(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.au0.prototype={
a0c(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0c=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aRG(),$async$a0c)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a9r(s),$async$a0c)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a0c,v)},
ahg(d){return this.cnI(d)},
cnI(d){var w=0,v=A.j(x.H),u=this,t
var $async$ahg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.irY(d),$async$ahg)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ahg,v)},
B(d){var w,v,u,t=null,s=A.S(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.J?B.jX:B.jj
w=x.p
v=A.a([C.aS3(!0,B.rl,1/0,B.qF,t,r,1/0)],w)
if(!q){u=A.a([B.L,B.w.j(0.35)],x.O)
v.push(A.c3(new A.bM(B.b7,t,t,new A.D(B.up,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.V,t,t,!0,t,t,t,t,t,B.aBk,t,t),t,t,t),t),t),new A.p(t,t,t,t,t,new A.a9(B.b7,B.b9,B.x,u,t,t),B.n),B.bj))}v.push(A.ap(8,A.A(A.a([A.E(A.dh(D.bUY,D.fDC,new C.co9(this,d),A.bp(B.aY,t,t,t,B.c,t,B.k2,t,t,t,t,B.cf)),1),B.ae,A.E(A.es(D.c2t,D.fSN,this.gceD(),A.di(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.k2,t,t,D.b4P,t,t,t,B.cf)),1)],w),B.l,t,B.e,B.i,0,t,t),t,t,8,8,t,t))
return new A.fH(1.7777777777777777,A.aI(!1,B.a3,!0,B.rl,new A.an(B.a0,t,B.b2,B.t,v,t),B.aq,s,0,t,t,t,t,t,B.aj),t)}}
C.aN4.prototype={
aY(){this.b5()
this.b4()
this.dN()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdH())
w.b9$=null
w.a3()}}
C.aV0.prototype={}
C.aV_.prototype={}
C.aT2.prototype={}
C.a_5.prototype={
S(){return new C.aAf()}}
C.aAf.prototype={
Y(){var w,v,u=this
u.a4()
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
KJ(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.L(x.q).f.U(D.fiU)
return}t=u.c
t.toString
v=u.e
A.a5(t,!1).O(new C.aV0(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.S(d).ax.a===B.J,l=m?B.ed:B.c,k=A.m(20),j=A.q(n,D.c28,B.f,n,n,new A.p(B.aY.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.as,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bH,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.br,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.i,0,B.p),1)
j=A.A(A.a([j,B.bd,i,A.aG(n,n,n,n,A.X(B.cz,m?B.bu:B.br,n,n,n,n),n,n,n,new C.d89(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.i,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.br,n,n,n,n,n,n,n,n,12,n,n,B.V,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.br,n,n,n,n,n,n,n,n,11,n,n,B.cD,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hqV(new C.d8a(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.as,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jX:B.jj
r=A.m(12)
q=A.m(12)
p=m?B.eg:B.bP
t=A.aM(n,B.Z,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bt(n,new A.b6(4,r,B.dq),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d8b(o),n,!1,n,n,!1,n,!0,n,B.ac,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,A0.Kt,n,n,n,n)
u=m?B.aP:B.as
m=m?B.eg:B.bP
return A.eO(n,l,new A.cQ(B.m_,A.cd(A.x(A.a([j,B.aR,i,B.ax,w,B.U,v,B.aR,t,B.by,A.A(A.a([A.E(A.dU(B.dn,new C.d8c(d),A.di(n,n,n,n,n,n,n,n,n,u,n,n,B.co,n,new A.b9(A.m(12),B.a1),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.au,A.E(A.bI(D.fT2,n,o.ga3i(),A.bp(B.aY,n,n,n,B.c,n,B.co,n,new A.b9(A.m(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.i,0,n,n)],h),B.E,n,B.e,B.Q,0,B.p),B.t,n,B.y,n,B.Ck,n,n,B.ah),n),n,n,n,A2.Cl,B.d7,n,new A.b9(k,B.a1),n)}}
C.a_4.prototype={
S(){return new C.aAe()}}
C.aAe.prototype={
Y(){this.a4()
var w=$.aw()
this.d!==$&&A.aQ()
this.d=new A.au(B.aw,w)},
t(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a3()},
KJ(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.L(x.q).f.U(D.fgx)
return}v=this.c
v.toString
A.a5(v,!1).O(new C.aV_(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.S(d).ax.a===B.J,o=p?B.ed:B.c,n=A.m(20),m=A.q(q,D.bZC,B.f,q,q,new A.p(B.bR.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.as,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bH,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.br,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.i,0,B.p),1)
m=A.A(A.a([m,B.bd,l,A.aG(q,q,q,q,A.X(B.cz,p?B.bu:B.br,q,q,q,q),q,q,q,new C.d85(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.i,0,q,q)
l=B.aY.j(p?0.12:0.08)
w=A.m(12)
v=A.L(B.aY.j(0.25),B.r,1)
u=A.X(B.aoo,B.aY.j(0.9),q,q,q,18)
l=A.q(q,A.A(A.a([u,B.au,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.as,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.i,0,q,q),B.f,q,q,new A.p(l,q,v,w,q,q,B.n),q,q,q,q,B.bF,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.as,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jX:B.jj
t=A.m(12)
s=A.m(12)
r=p?B.eg:B.bP
v=A.aM(q,B.Z,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bt(q,new A.b6(4,t,B.dq),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d86(this),q,!1,q,q,!1,q,!0,q,B.ac,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.l3,q,q,q,q)
w=p?B.aP:B.as
p=p?B.eg:B.bP
return A.eO(q,o,new A.cQ(B.m_,A.cd(A.x(A.a([m,B.aR,l,B.aB,v,B.by,A.A(A.a([A.E(A.dU(B.dn,new C.d87(d),A.di(q,q,q,q,q,q,q,q,q,w,q,q,B.co,q,new A.b9(A.m(12),B.a1),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.au,A.E(A.bI(D.h_9,q,this.ga3i(),A.bp(B.bR,q,q,q,B.c,q,B.co,q,new A.b9(A.m(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.i,0,q,q)],k),B.E,q,B.e,B.Q,0,B.p),B.t,q,B.y,q,B.Ck,q,q,B.ah),q),q,q,q,A2.Cl,B.d7,q,new A.b9(n,B.a1),q)}}
C.ZC.prototype={
S(){return new C.ayZ()}}
C.ayZ.prototype={
Y(){var w,v=this
v.a4()
w=$.aw()
v.d!==$&&A.aQ()
v.d=new A.au(B.aw,w)
v.e!==$&&A.aQ()
v.e=new A.au(new A.ba("1",B.b6,B.aQ),w)
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
gK0(){var w,v=this.e
v===$&&A.c()
w=A.d2(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gakr(){var w=this.f
w===$&&A.c()
w=A.d2(B.a.i(w.a.a))
return w==null?0:w},
gb6i(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aQH(d){var w,v=B.j.D(this.gK0()+d,0.25,999999),u=B.j.iY(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.j.M(v))
else{u=B.j.ad(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb1(0,u)
this.m(new C.cGw())},
azI(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aY,w,w,w,20):w,u=d.a,t=u?B.jX:B.jj,s=A.m(14),r=A.m(14)
u=u?B.eg:B.bP
return A.bt(w,new A.b6(4,s,B.dq),w,B.bF,w,w,w,w,!0,new A.b6(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.m(14),B.adR),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
ceE(d,e,f){return this.azI(d,e,f,null)},
KJ(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gakr()<=0){s.c.L(x.q).f.U(D.fkM)
return}r=s.c
r.toString
v=s.gK0()
u=s.gakr()
t=s.gb6i()
A.a5(r,!1).O(new C.aT2(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.S(d).ax.a===B.J,m=new C.uh(n),l=n?B.ed:B.c,k=A.m(24),j=x.O,i=A.a([B.aY.j(0.22),B.bR.j(0.14)],j),h=A.m(14)
i=A.q(o,D.bSU,B.f,o,o,new A.p(o,o,A.L(B.aY.j(0.35),B.r,1),h,o,new A.a9(B.a6,B.aa,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bH,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.br,o,o,o,o,o,o,o,o,12,o,o,B.cD,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1)
i=A.A(A.a([i,B.bd,h,A.aG(o,o,o,o,A.X(B.cz,n?B.bu:B.br,o,o,o,o),o,o,o,new C.cGC(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.i,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.Z,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.azI(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Px),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,A0.Kt,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.br,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jX:B.jj
t=A.m(14)
s=A.L(n?B.eg:B.bP,B.r,1)
r=A.aG(o,o,o,o,A.X(B.wH,n?B.aP:B.as,o,o,o,20),o,o,o,new C.cGD(p),o,o,o,o,o,B.cf)
q=p.e
q===$&&A.c()
q=A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.c41,B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.e9,o,o,o,1,o,o,!1,"\u2022",o,new C.cGE(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.q(o,A.A(A.a([r,new A.a6(52,o,q,o),A.aG(o,o,o,o,A.X(B.hW,n?B.aP:B.as,o,o,o,20),o,o,o,new C.cGF(p),o,o,o,o,o,B.cf)],w),B.l,o,B.e,B.Q,0,o,o),B.f,o,o,new A.p(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,16,o,o,B.V,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.au,A.E(A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.azI(m,"Amount","0.00",B.hX),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.e9,o,o,o,1,o,o,!1,"\u2022",o,new C.cGG(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.ao,o,o,o,o),1)],w),B.E,o,B.e,B.i,0,o,o)
t=x.gv
u=A.C(new A.N(D.d9y,new C.cGH(p,m),t),t.k("ak.E"))
i=A.a([i,B.by,v,B.aB,h,B.U,s,B.af,A.bU(B.bG,u,B.bs,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.X,A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.ceE(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cGI(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.l3,o,o,o,o)],w))}i.push(B.aR)
h=B.aY.j(n?0.18:0.1)
j=A.a([h,B.bR.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.L(B.aY.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.br,o,o,o,o,o,o,o,o,11,o,o,B.V,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gK0()===B.j.iY(p.gK0())?B.j.M(p.gK0()):p.gK0()
s=p.gb6i()
r=A.Bq(p.gakr())
i.push(A.q(o,A.A(A.a([A.E(A.x(A.a([u,B.ax,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bu:B.br,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1),C.bFC(p.gK0()*p.gakr(),B.b1,!1,B.u)],w),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.p(o,o,v,h,o,new A.a9(B.a6,B.aa,B.x,j,o,o),B.n),o,o,o,o,B.jn,o,o,o))
i.push(B.by)
j=A.m(14)
h=n?B.eg:B.bP
h=A.di(o,o,o,o,o,o,o,o,o,o,o,o,B.co,o,new A.b9(j,B.a1),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dU(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,o,o,o,B.V,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cGJ(d),h),1),B.au,A.E(A.dh(D.arS,D.fW1,p.ga3i(),A.bp(B.aY,o,o,0,B.c,o,B.co,o,new A.b9(A.m(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.i,0,o,o))
return A.eO(o,l,new A.cQ(Ag.Xv,A.cd(A.x(i,B.al,o,B.e,B.Q,0,B.p),B.t,o,B.y,o,Aj.rV,o,o,B.ah),o),o,o,o,B.Oa,B.d7,o,new A.b9(k,B.a1),o)}}
C.a2e.prototype={
S(){return new C.by9()}}
C.by9.prototype={
Y(){var w,v,u=this
u.a4()
w=u.a.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,B.b6,B.aQ),v)},
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
r=r?B.jX:B.jj
v=A.aM(s,B.Z,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bt(s,new A.b6(4,A.m(12),B.dq),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.flE(t,d),s,!1,s,s,!1,s,!0,s,B.ac,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.ao,s,s,s,s)
u=A.E(A.dU(B.dn,new C.flF(d),s),1)
r=A.bp(B.bR,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eO(s,q,new A.D(B.Ck,A.x(A.a([o,B.aB,v,B.aR,A.A(A.a([u,B.au,A.E(A.bI(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.flG(t,d),r),1)],w),B.l,s,B.e,B.i,0,s,s)],w),B.l,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.d7,s,new A.b9(p,B.a1),s)}}
C.act.prototype={
a7(){return"WorksheetFrameStyle."+this.b}}
C.Gk.prototype={
S(){return new C.by7(null,null)}}
C.by7.prototype={
Y(){var w,v=this
v.a4()
w=A.bn(null,D.bzW,null,1,null,v)
w.cP(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBc()},
gbCO(){switch(this.a.r.a){case 1:return A.a([B.aY,B.bR,B.b1],x.O)
case 2:return A.a([B.bx,B.aY,B.b1],x.O)
case 3:return A.a([B.aH,B.ch,B.jY],x.O)
case 4:return A.a([B.hq,B.bR,B.fo],x.O)
case 0:return A.a([B.aY,B.bR,B.b1],x.O)}},
B(d){var w=A.S(d),v=this.d
v===$&&A.c()
return new A.em(A.c9(v,new C.flC(this,new C.uh(w.ax.a===B.J)),null),null)}}
C.ayS.prototype={
S(){return new C.by8(null,null)}}
C.by8.prototype={
Y(){var w,v=this
v.a4()
w=A.bn(null,B.mV,null,1,null,v)
w.cP(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBd()},
B(d){var w=this.d
w===$&&A.c()
return A.c9(w,new C.flD(this),null)}}
C.by6.prototype={
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
p.aUe(d,q,r,o,0,0.2,4.2,0.92)
p.aUe(d,q,r,s,0.52,0.11,3.2,0.58)}},
aUe(d,e,f,g,h,i,j,k){var w,v,u,t=B.j.F(g+h,1)*f,s=A.hNv(e.a.a,e,t,t+f*i,!0),r=A.bDX(s.glV().a.getBounds())
$.Q()
w=A.K()
w.b=B.a9
w.c=j
w.d=B.bw
w.f=!0
v=this.f
u=k*this.e
w.sav(new A.a9(B.a6,B.aa,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.It,null).aK(0,r))
d.af(s,w)},
aE(d){return d.b!==this.b||d.d!==this.d}}
C.aPb.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.aPc.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.uh.prototype={}
C.au_.prototype={
S(){return new C.aGx()},
ge3(){return this.c}}
C.aGx.prototype={
Y(){var w=this
w.a4()
w.d=w.a.d
w.ai6()},
t(){var w=this.a.c,v=this.d
v===$&&A.c()
C.M4(w,v)
this.a3()},
ai6(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ai6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bE5(t.c,t.d.a),$async$ai6)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eUr(u,s))
return A.h(null,v)}})
return A.i($async$ai6,v)},
QJ(){var w=0,v=A.j(x.H),u=this,t,s
var $async$QJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eUi(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.M4(t,s),$async$QJ)
case 2:if(u.c!=null)u.m(new C.eUj(u))
return A.h(null,v)}})
return A.i($async$QJ,v)},
Rg(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Rg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.S(p)
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.eUp(t,new C.uh(p.ax.a===B.J)),s,null,!0,!0,x.T),$async$Rg)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a9r(q),$async$Rg)
case 6:case 5:t.m(new C.eUq(t,r))
w=7
return A.b(t.QJ(),$async$Rg)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Rg,v)},
Wt(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.irJ(r),$async$Wt)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eUd(t,new C.ro(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.QJ(),$async$Wt)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wt,v)},
cjK(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hF1(t,new C.eUh(u),w,v)},
abZ(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.q(w,w,B.f,w,w,new A.p(w,w,new A.bG(new A.ay(v,2.5,B.r,-1),B.a1,B.a1,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b4B,w,w,B.n),w,22,w,w,w,w,w,22)},
ab0(d){return this.bOO(d)},
bOO(d){var w=0,v=A.j(x.H),u=this
var $async$ab0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eUg(u,d))
w=2
return A.b(u.QJ(),$async$ab0)
case 2:return A.h(null,v)}})
return A.i($async$ab0,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.S(a2).ax.a===B.J,e=f?B.c3:B.iD,d=A.m(8),a0=A.X(Z.a1P,f?B.bu:B.br,g,g,g,16),a1=x.p
a0=A.aP(!1,d,!0,new A.D(B.GX,A.A(A.a([a0,B.bm,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.br,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eUs(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b2,B.t,A.a([A.by(A.m(22),C.aS3(!0,A.m(22),1/0,B.qF,g,d,1/0),B.aq),A.ap(10,A.dh(D.bXy,D.fYr,h.gb4e(),A.bp(B.w.j(0.45),g,g,g,B.c,g,B.hd,g,new A.b9(A.m(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aY.j(f?0.5:0.38),B.f_,22),new A.ac(-4,B.G,B.bR.j(0.2),B.I,32)],w)
u=A.m(17)
t=A.L(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.I,10)],w)
s=A.m(16)
r=h.d
v=A.q(g,A.q(g,A.by(s,new A.an(B.a0,g,B.b2,B.t,A.a([C.aS3(!0,A.m(16),1/0,B.P_,g,r.c,1/0),A.c3(g,new A.p(g,g,g,g,g,new A.a9(B.b7,B.b9,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bj),A.ap(g,h.abZ(!0),g,g,8,g,8,g),A.ap(g,A.cD9(h.abZ(!0),!0,!1),g,g,g,8,8,g),A.ap(8,A.cD9(h.abZ(!1),!1,!0),g,g,8,g,g,g),A.ap(8,A.cD9(h.abZ(!1),!0,!0),g,g,g,8,g,g),A.ap(10,A.dh(D.bTu,D.fRI,h.gb4e(),A.bp(B.w.j(0.45),g,g,g,B.c,g,B.hd,g,new A.b9(A.m(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.p(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.p(g,g,g,d,v,D.c5J,B.n),g,g,g,g,B.me,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.as,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.bfk,B.oc,B.ha],u):A.a([B.b1,B.aY,B.bR],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aY.j(f?0.45:0.35),B.f_,24)],t)
r=A.m(22)
p=A.ap(g,A.X(B.jG,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.L(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.q(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.p(o,g,m,n,g,g,B.n),g,g,g,g,B.hb,g,g,g)],a1),B.l,g,B.e,B.i,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.an,C.bFC(h.d.gxF(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.U,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cD,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.i,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.L(B.hs.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aH.j(0.28),B.cM,14)],t)
j=B.aH.j(0.22)
i=A.m(10)
u=A.q(g,A.by(r,new A.an(B.a0,g,B.ad,B.t,A.a([p,new A.D(D.bEL,A.A(A.a([o,B.au,A.aI(!1,B.a3,!0,g,A.aP(!1,n,!0,A.eJ(new A.D(V.wi,A.x(A.a([A.q(g,D.ars,B.f,g,g,new A.p(j,g,A.L(B.aH.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cl,g,g,g),B.fN,D.fGq],a1),B.l,g,B.e,B.Q,0,B.p),g),g,new A.p(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcjJ(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.aj)],a1),B.l,g,B.e,B.i,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.p(g,g,g,v,s,new A.a9(B.aA,B.aF,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fH(1.7777777777777777,d,g),B.aR,w,B.U,u,B.by,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.as,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b5,A.dh(Aw.a3G,D.fEg,h.gbDh(),A.bp(B.aY,g,g,g,B.c,g,B.iu,g,new A.b9(A.m(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.i,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.ed:B.c
v=A.m(14)
u=A.L(f?B.eg:B.bP,B.r,1)
t=A.X(B.a29,f?B.bu:B.br,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.as,g,g,g,g,g,g,g,g,g,g,g,B.V,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.q(g,A.x(A.a([t,B.X,s,B.an,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.br,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.i,0,B.p),B.f,g,g,new A.p(w,g,u,v,g,g,B.n),g,g,g,g,B.qB,g,g,1/0))}else B.d.v(d,new A.N(w,new C.eUt(h,new C.uh(f)),A.U(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.Ca,A.at(A.n5(g,f?B.bu:B.br,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c4(g,e,A.bm(!0,A.x(A.a([new A.D(B.Cd,a0,g),A.E(A.cd(A.x(d,B.E,g,B.e,B.i,0,B.p),B.t,g,B.y,g,E.yM,g,g,B.ah),1)],a1),B.E,g,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bGY(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.ed:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cM,12)],x.V),n=A.m(16),m=A.q(u,u,B.f,u,u,D.b7m,u,u,u,u,u,u,u,5),l=B.aY.j(r?0.22:0.12),k=A.m(12)
l=A.q(u,A.X(s?B.id:B.hx,B.b1,u,u,u,20),B.f,u,u,new A.p(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bL
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aP:B.as,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd_f()
v=A.Bq(d.d)
B.d.v(t,A.a([B.ax,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bu:B.br,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.bb,B.Q,0,B.p)}t=A.E(t,1)
k=A.a([B.aY.j(0.14),B.bR.j(0.1)],x.O)
w=A.m(12)
k=A.q(u,C.bFC(d.c*d.d,B.b1,!1,B.u),B.f,u,u,new A.p(u,u,u,w,u,new A.a9(B.a6,B.aa,B.x,k,u,u),B.n),u,u,u,u,B.hd,u,u,u)
w=x.p
return A.q(u,A.by(n,new A.EK(A.A(A.a([m,A.E(new A.D(B.alp,A.A(A.a([l,B.bd,t,B.ae,k,A.aG(u,u,u,u,A.X(B.cz,(r?B.bu:B.br).j(0.75),u,u,u,20),u,u,u,new C.eUe(this,d),u,u,u,u,u,B.cf)],w),B.l,u,B.e,B.i,0,u,u),u),1)],w),B.al,u,B.e,B.i,0,u,u),u),B.aq),B.f,u,D.b6d,new A.p(q,u,u,p,o,u,B.n),u,u,u,B.d3,u,u,u,u)}}
C.aew.prototype={
EX(d){return this.bQb(d)},
bQb(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$EX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pv(d,o,!1),$async$EX)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).O(null)
w=4
return A.b(A.bP(Ai.C8,null,x.H),$async$EX)
case 4:s=t.d
w=5
return A.b(C.fVh(!0,o,s),$async$EX)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Hf(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$EX)
case 6:p=f
w=7
return A.b(A.pu(o,!1),$async$EX)
case 7:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$EX,v)},
a0e(d){return this.cA8(d)},
cA8(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0e=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pv(d,s,!1),$async$a0e)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).O(null)
A.hy(d,new C.atU(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pu(s,!1),$async$a0e)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0e,v)},
QK(d){return this.cwc(d)},
cwc(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$QK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).O(null)
w=3
return A.b(A.hy(d,D.aL3,!0,"NgmyWorksheetProjectScan",x.N),$async$QK)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bFD(s),$async$QK)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.L(x.q).f.U(D.fjU)
w=1
break}q=C.hgw(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dQ(p,x.H),$async$QK)
case 5:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$QK,v)},
a0f(d){return this.cIr(d)},
cIr(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0f=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).O(null)
w=3
return A.b(C.bF9(),$async$a0f)
case 3:s=f
if(s==null){w=1
break}r=C.hgw(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dQ(q,x.H),$async$a0f)
case 4:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a0f,v)},
B(d){var w=this,v=null,u=A.S(d).ax.a===B.J,t=new C.uh(u),s=w.d.d.length,r=u?B.ed:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kB,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.wh,A.q(v,A.x(A.a([w.cyI(d,t,s),new A.D(D.bE9,A.x(A.a([w.b7d(t,"QR restore"),B.X,A.A(A.a([w.b2d(t,!0,B.jK,B.aH,B.aH,new C.eUv(w,d),"Show to scan","QR code"),B.au,w.azJ(t,B.jp,B.b8,B.bp,new C.eUw(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.i,0,v,v),B.d8,w.b7d(t,"Backup files"),B.X,A.A(A.a([w.azJ(t,B.hY,B.aY,B.bR,new C.eUx(w,d),"Full copy","Backup file"),B.au,w.azJ(t,R.zo,B.av,B.aV,new C.eUy(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.i,0,v,v)],o),B.E,v,B.e,B.i,0,B.p),v)],o),B.l,v,B.e,B.Q,0,B.p),B.aq,v,v,new A.p(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cyI(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eV,B.cG,B.fS],k):A.a([B.b1,B.aY,B.bR],k)
w=A.ap(l,A.X(B.uU,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.q(l,l,B.f,l,l,new A.p(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kS,l,l,l,36),l,l,l)
u=A.m(14)
t=A.L(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cM,12)],x.V)
r=this.d
s=A.q(l,C.aS3(!0,A.m(13),64,D.bOM,l,r.c,64),B.aq,l,l,new A.p(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,I.abi,l,l,l)
r=C.bFC(r.gxF(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.L(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.q(l,new A.an(B.a0,l,B.ad,B.t,A.a([w,new A.D(D.bEx,A.x(A.a([v,A.A(A.a([s,B.ex,A.E(A.x(A.a([u,B.ax,t,B.U,A.A(A.a([r,B.ae,A.q(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.p(q,l,o,p,l,l,B.n),l,l,l,l,B.fW,l,l,l)],m),B.l,l,B.e,B.i,0,l,l)],m),B.E,l,B.e,B.i,0,B.p),1),A.aG(l,l,l,l,A.X(B.cz,B.c.j(0.85),l,l,l,l),l,l,l,new C.eUu(d),l,l,l,A.o_(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aTp,l,l,l,l),l,l)],m),B.E,l,B.e,B.i,0,l,l)],m),B.l,l,B.e,B.i,0,B.p),l)],m),l),B.f,l,l,new A.p(l,l,l,l,l,new A.a9(B.aA,B.aF,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b7d(d,e){var w=null,v=A.q(w,w,B.f,w,w,new A.p(B.aY,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ae,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bu:B.br,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
b2d(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.ajX:B.aP
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.eg:B.bP
w=w.j(o?0.8:1)}w=A.L(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aH.j(0.12),B.cM,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.L(h.j(0.35),B.r,1)
t=A.q(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.p(u,r,s,t,r,r,B.n),r,r,r,r,B.rX,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.as,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aI(!1,B.a3,!0,r,A.aP(!1,q,!0,A.eJ(new A.D(E.a0c,A.x(A.a([t,B.af,u,B.bH,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bu:B.br,r,r,r,r,r,r,r,r,11,r,r,B.cD,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),r),r,new A.p(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
azJ(d,e,f,g,h,i,j){return this.b2d(d,!1,e,f,g,h,i,j)}}
C.atU.prototype={
S(){return new C.bn8()}}
C.bn8.prototype={
Y(){this.a4()
this.ag0()},
ag0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$ag0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bFE(p.c,p.d),$async$ag0)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eU8(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eU9(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ag0,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.S(d).ax.a===B.J,f=g?B.BG:B.iD,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aG(h,h,h,h,A.X(B.eN,g?B.ab:B.am,h,h,h,18),h,h,h,new C.eUa(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.S,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.x9],u),B.l,h,B.e,B.i,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eV,B.cG,B.fS],s):A.a([B.b1,B.aY,B.bR],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aY.j(g?0.4:0.3),B.f_,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.di,B.K,h,h)
p=C.bFC(p.gxF(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.q(h,A.x(A.a([o,B.an,A.A(A.a([p,B.ae,A.q(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.p(n,h,h,m,h,h,B.n),h,h,h,h,B.fW,h,h,h)],u),B.l,h,B.bb,B.i,0,h,h)],u),B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.p(h,h,h,t,q,new A.a9(B.aA,B.aF,B.x,s,h,h),B.n),h,h,h,h,E.a0z,h,h,1/0)
t=g?D.bqy:B.c
q=A.m(24)
p=A.L(w?B.aH.j(0.4):B.aY.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dv,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.Vm,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.err)
else{m=A.m(20)
l=A.L(B.aO,B.r,1)
o.push(A.q(h,A.qb(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.p(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aR)
n=w?B.aH:B.aY
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.L((w?B.aH:B.aY).j(0.35),B.r,1)
k=w?B.Pd:B.PM
k=A.X(k,w?B.aH:B.aY,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.q(h,A.A(A.a([k,B.au,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ab:B.am,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.i,0,h,h),B.f,h,h,new A.p(n,h,l,m,h,h,B.n),h,h,h,h,B.iu,h,h,h))
return A.c4(h,f,A.bm(!0,A.x(A.a([new A.D(Ae.Om,e,h),A.E(A.cd(A.x(A.a([s,B.aR,A.q(h,A.x(o,B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.p(t,h,p,q,r,h,B.n),h,h,h,h,B.uw,h,h,1/0)],u),B.l,h,B.e,B.i,0,B.p),B.t,h,B.y,h,E.amv,h,h,B.ah),1)],u),B.l,h,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.atZ.prototype={
S(){return new C.aGw(A.zW(B.NE,B.o3,B.v1))}}
C.aGw.prototype={
t(){this.d.t()
this.a3()},
aOE(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j0(w,d)},
cfw(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s=C.ip2(t)
if(s!=null){this.aOE(s)
return}r=C.hvu(t)
if(r!=null)q=A.cS(r,p,0)
else q=!1
if(q){this.aOE(B.a.i(B.a.b2(r,B.a.co(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eH(A.a([A.aG(t,t,t,t,A.X(u.f?B.uJ:A9.Pl,t,t,t,t,t),t,t,t,new C.eUc(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.BG,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fRB,t,t,t,1,t,!0),q=A.zV(u.d,B.c_,u.gcfv()),p=A.m(28)
p=A.at(A.q(t,t,B.f,t,t,new A.p(t,t,A.L(B.aY,B.r,3),p,A.a([new A.ac(2,B.G,B.aY.j(0.35),B.I,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.c4(r,B.w,new A.an(B.a0,t,B.b2,B.t,A.a([q,p,A.ap(32,A.q(t,D.fQm,B.f,t,t,new A.p(w,t,A.L(B.aY.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jn,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aLp.prototype={
a7(){return"_WorksheetTab."+this.b}}
C.OX.prototype={
S(){return new C.aGy(D.ad9,A.a([],x.D))},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aGy.prototype={
gcGd(){return J.bGL(this.e,0,new C.eUV())},
Y(){this.a4()
$.aW.c1$.push(this)
this.wi()},
t(){$.aW.hV(this)
this.a3()},
jl(d){if(d===B.fR)this.wi()},
wi(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wi=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Dz(q.a.c).dh(0,B.k1),$async$wi)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eUR(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eUS(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wi,v)},
Ir(d){return this.bMW(d)},
bMV(){return this.Ir(null)},
bMW(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Ir=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.irL(l,d),$async$Ir)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lD(l,r,q,D.dlu,new A.V(Date.now(),0,!1))
w=4
return A.b(C.M4(t.a.c,p),$async$Ir)
case 4:o=f
w=5
return A.b(t.wi(),$async$Ir)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.L(x.q).f.U(D.fh0)
w=1
break}n=J.aU(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gR(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.L(q).f.U(D.fiO)
else n.L(q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
t.F0(m)
case 1:return A.h(u,v)}})
return A.i($async$Ir,v)},
F0(d){return this.cjv(d)},
cjv(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$F0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hy(s,new C.au_(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$F0)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.M4(u.a.c,t),$async$F0)
case 5:case 4:w=6
return A.b(u.wi(),$async$F0)
case 6:return A.h(null,v)}})
return A.i($async$F0,v)},
w3(d){return this.c2g(d)},
c2g(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$w3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bF9(),$async$w3)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hy(r,D.aL3,!0,"NgmyWorksheetProjectScan",x.N),$async$w3)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bFD(q),$async$w3)
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
break}p=C.hgw(s)
w=15
return A.b(C.M4(t.a.c,p),$async$w3)
case 15:o=f
w=16
return A.b(t.wi(),$async$w3)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.L(x.q).f.U(D.fiT)
w=1
break}r.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
t.F0(p)
case 1:return A.h(u,v)}})
return A.i($async$w3,v)},
Oo(d){return this.bLz(d)},
bLz(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Oo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cf(null,null,!0,null,new C.eUC(d),s,null,!0,!0,x.y),$async$Oo)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.p3(t.a.c,A.a([],x.D)),$async$Oo)
case 6:w=7
return A.b(t.wi(),$async$Oo)
case 7:s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.fh5)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Oo,v)},
cjI(d){var w=this.c
w.toString
A.bT(B.L,null,new C.eUL(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b7Q(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jX
else w=B.c
v=A.m(16)
u=A.L(p?B.eg:B.bP,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.q(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.p(t,r,r,s,r,r,B.n),r,r,r,r,B.bW,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.as,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aI(!1,B.a3,!0,r,A.aP(!1,q,!0,A.q(r,A.x(A.a([s,B.af,t,B.bH,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bu:B.br,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),B.f,r,r,new A.p(w,r,u,v,r,r,B.n),r,r,r,r,B.wg,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
a0K(d,e){return this.cjw(d,e)},
cjw(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0K=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bT(B.L,null,new C.eUG(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a0K)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hF1(r,new C.eUH(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Oq(d,e),$async$a0K)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0K,v)},
b4R(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.q(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.p(t,u,u,s,u,u,B.n),u,u,u,u,B.bW,u,u,u)
if(d)t=B.ay
else t=h.a?B.aP:B.as
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bu:B.br,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.i,0,B.p),1)
return A.aI(!1,B.a3,!0,u,A.aP(!1,u,!0,new A.D(B.Cj,A.A(A.a([s,B.bd,t,A.X(B.eJ,w?B.bu:B.br,u,u,u,u)],v),B.l,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj)},
cqr(d,e,f,g,h,i){return this.b4R(!1,d,e,f,g,h,i)},
Oq(d,e){return this.bLJ(d,e)},
bLJ(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Oq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lo(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Oq)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bDR(t.a.c,d.a),$async$Oq)
case 6:w=7
return A.b(t.wi(),$async$Oq)
case 7:r=t.c
if(r==null){w=1
break}r.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Oq,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.S(d).ax.a===B.J,n=new C.uh(o),m=o?B.c3:B.iD
if(q.f)o=D.bd6
else{w=q.bG4(n)
v=q.c1k(n)
u=q.gbDa()
if(o)t=B.jX
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.af,v,B.aR,new C.Gk(A.q(p,A.A(A.a([q.aDh(P.OZ,"Projects",n,D.ad9),q.aDh(B.ww,"Cashier",n,D.b15),q.aDh(B.Hi,"Family Tree",n,D.hDg)],r),B.l,p,B.e,B.i,0,p,p),B.f,p,p,new A.p(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.eA,0.95,u,p),B.by],r)
w=q.d
if(w===D.ad9){w=J.ad(q.e)
B.d.v(u,A.a([A.A(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.as,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b5,new C.ayS(q.gaT_(),p)],r),B.l,p,B.e,B.i,0,p,p),B.aB,q.cqt(n)],r))}else{o=q.a
if(w===D.b15)u.push(new C.apN(o.c,n,p))
else{w=q.r
u.push(new C.aqZ(o.c,o.d,o.e,o.f,new C.eUY(q),new C.eUZ(q),new A.bK(w,x.b4)))}}o=A.cd(A.x(u,B.E,p,B.e,B.i,0,B.p),B.t,p,B.y,p,Am.Of,p,p,B.ah)}return A.c4(p,m,A.bm(!0,o,!0,!1,B.ag,!0,!0),p,!1,!1,p,p)},
bG4(d){var w=null,v=A.m(8),u=d.a,t=A.X(Z.a1P,u?B.bu:B.br,w,w,w,16)
return A.aP(!1,v,!0,new A.D(B.kT,A.A(A.a([t,B.bm,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bu:B.br,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eUz(this),w,w,w,w,w,w,w)},
gbDa(){switch(this.d.a){case 0:return D.acn
case 1:return D.hrG
case 2:return D.aco}},
c1k(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aY.j(0.35),B.cA,16)],x.V),t=x.p,s=A.A(A.a([A.q(w,D.bZs,B.f,w,w,new A.p(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bd,D.bJ9,A.aI(!1,B.a3,!0,w,A.aP(!1,A.m(12),!0,A.q(w,D.bWR,B.f,w,w,new A.p(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eUD(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)],t),B.E,w,B.e,B.i,0,w,w),r=B.b1.j(0.55),q=A.m(12)
return new C.Gk(A.q(w,A.x(A.a([new A.D(B.GO,s,w),A.q(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ax,A.d(A.Bq(this.gcGd()),w,w,w,w,w,w,D.fAw,w,w,w)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(r,w,w,q,w,w,B.n),w,w,w,B.ut,B.jn,w,w,1/0)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(B.aY,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hrF,w)},
aDh(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aY:B.L,q=A.m(12),p=t?A.L(B.c.j(0.55),B.r,2):A.L(B.L,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aY.j(0.42),B.cM,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bu:B.br
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bu:B.br
return A.E(A.aI(!1,B.a3,!0,u,A.aP(!1,s,!0,A.cT(u,A.A(A.a([w,B.e4,new A.dn(1,B.cp,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.bb,B.i,0,u,u),u,u,B.cw,new A.p(r,u,p,q,o,u,B.n),B.iI,u,u,u,u,B.GY,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eUU(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),1)},
cqt(d){var w,v,u,t,s,r,q=this,p=null
if(J.cr(q.e)){w=d.a
v=w?B.ed:B.c
u=A.m(15)
t=A.q(p,D.bWX,B.f,p,p,new A.p(p,p,p,p,A.a([new A.ac(2,B.G,B.aY.j(0.5),B.f_,28)],x.V),D.c8a,B.a7),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.as,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Gk(A.q(p,A.x(A.a([t,B.d8,s,B.U,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bu:B.br,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.dY,A.A(A.a([A.E(q.aUA(B.jp,"Scan QR",new C.eUO(q),d),1),B.au,A.E(q.aUA(R.zo,"Upload file",new C.eUP(q),d),1)],r),B.l,p,B.e,B.i,0,p,p),B.aB,A.bI(D.h17,p,q.gaT_(),A.bp(B.aY,p,p,p,B.c,B.h5,p,p,new A.b9(A.m(12),B.a1),p,p,p))],r),B.l,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bFC,1.05,D.acn,p)}w=J.b7(q.e,new C.eUQ(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Gk(A.x(w,B.l,p,B.e,B.i,0,B.p),16,B.bW,1,D.acn,p)},
aUA(d,e,f,g){var w=null,v=B.aY.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.L(B.aY.j(0.45),B.r,1)
return A.aI(!1,B.a3,!0,u,A.aP(!1,t,!0,A.q(w,A.x(A.a([A.X(d,B.b1,w,w,w,26),B.U,A.d(e,w,w,w,w,w,w,D.fyM,B.K,w,w)],x.p),B.l,w,B.e,B.Q,0,B.p),B.f,w,w,new A.p(w,w,r,s,w,w,B.n),w,w,w,w,B.ali,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)},
cqs(d,e){var w,v,u=null,t=e.a,s=t?B.ed:B.c,r=A.m(14),q=A.L(t?B.eg:B.bP,B.r,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.et,10)],x.V),o=A.m(14),n=t?B.bu:B.br
n=A.by(B.Xp,new A.fH(1.7777777777777777,C.aS3(!0,B.fj,1/0,P.OZ,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.as,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.ax,A.d(""+d.d.length+" budget items \xb7 "+A.Bq(d.gxF()),u,u,u,u,u,u,D.fwJ,u,u,u)],w),B.E,u,B.e,B.i,0,B.p),1)
return A.q(u,A.aI(!1,B.a3,!0,u,A.aP(!1,o,!0,A.x(A.a([n,new A.D(B.bF,A.A(A.a([v,A.aG(u,u,u,u,A.X(An.a2S,t?B.bu:B.br,u,u,u,u),u,u,u,new C.eUM(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.i,0,u,u),u)],w),B.E,u,B.e,B.i,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eUN(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),B.f,u,u,new A.p(s,u,q,r,p,u,B.n),u,u,u,B.el,u,u,u,1/0)}}
C.bzV.prototype={}
C.ro.prototype={
aj(){var w=this,v=w.c,u=w.d
return A.I(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd_f(){var w,v,u,t,s=this.c
if(s===B.j.iY(s))w=B.o.u(B.j.M(s))
else{v=B.j.ad(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lD.prototype={
gxF(){return B.d.cJ(this.d,0,new C.cFR())},
aj(){var w=this,v=w.d,u=A.U(v).k("N<1,a8<n,@>>")
v=A.C(new A.N(v,new C.cFQ(),u),u.k("ak.E"))
return A.I(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bfd(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lD(w.a,w.b,v,u,w.e)},
beW(d){return this.bfd(d,null)},
Tx(d){return this.bfd(null,d)}}
C.Iq.prototype={
a7(){return"FamilyGender."+this.b}}
C.hU.prototype={
aj(){var w=this
return A.I(["id",w.a,"name",w.b,"gender",C.hAx(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aG0(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hU(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.am2.prototype={
a7(){return"FamilyTreeAccessRole."+this.b}}
C.kT.prototype={
gaqp(){var w=this.f
return new A.Y(w,new C.bSq(),A.U(w).k("Y<1>")).gI(0)},
aj(){var w=this,v=w.f,u=A.U(v).k("N<1,a8<n,@>>")
v=A.C(new A.N(v,new C.bSp(),u),u.k("ak.E"))
return A.I(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.ihm(w.y),"games",w.z],x.N,x.z)},
wY(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kT(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bfc(d,e){var w=null
return this.wY(w,w,w,d,e,w,w,w,w)},
cPB(d,e,f,g,h,i,j){return this.wY(d,e,null,f,g,h,i,j,null)},
aG5(d,e){var w=null
return this.wY(w,w,w,w,d,w,w,e,w)},
cPD(d,e,f,g,h,i,j,k){return this.wY(d,e,null,f,g,h,i,j,k)},
cO6(d){var w=null
return this.wY(w,w,w,w,w,w,w,d,w)},
cOu(d){var w=null
return this.wY(w,w,w,w,w,w,w,w,d)},
beQ(d){var w=null
return this.wY(w,w,d,w,w,w,w,w,w)},
aFR(d){var w=null
return this.wY(w,w,w,w,w,d,w,w,w)},
cP8(d,e,f){var w=null
return this.wY(w,d,w,w,e,w,w,f,w)},
cNU(d){var w=null
return this.wY(w,w,w,d,w,w,w,w,w)},
cOG(d,e){var w=null
return this.wY(d,w,w,w,w,w,e,w,w)}}
C.cFS.prototype={
a7(){return"WrapAlignment."+this.b}}
C.cFT.prototype={
a7(){return"WrapCrossAlignment."+this.b}}
C.aIB.prototype={}
C.baA.prototype={
ak(d){this.a=d.a
this.b=d.b},
cY(d){var w=new C.baA()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b2(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.baz.prototype={
gwQ(){return!0},
gGw(){return this.z.b<this.b.length},
aWf(d){switch(0){case 0:return d.a.c}},
aVW(d){switch(0){case 0:return d.a.d}},
bVM(d,e){switch(0){case 0:return new A.hO(d,e)}},
bV9(d,e,f){var w=e-f
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
f=b1.aWf(g)
f.toString
e=b1.aVW(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aIB(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aIB(k,j,i))}d=s.length
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
for(q=B.d.fO(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.J)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aWf(g)
e=b1.aVW(g)
e.toString
a9=b1.bV9(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bVM(a6,a3+a9)
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
v.eh(u.a,u.b,0,1)
w.pm(0,v)
for(u=r.z,u=B.d.dt(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.J)(u),++s)u[s].fV(d)
w.ny(0)},
H0(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
is(){return this.z}}
C.bya.prototype={}
var z=a.updateTypes(["aB<~>()","P(hU)","~()","P(kT)","P(nw)","a8<n,@>(kT)","H(kT,kT)","H(hU,hU)","n(hU)","kT(a8<@,@>)","P(lD)","nw(a8<@,@>)","a8<n,@>(nw)","P(uQ)","uQ()","H(hU)","ai<hU>()","P(zE)","a07(Z)","n?(hU)","eI<n?>(hU)","aB<~>(lD)","P(ro)","a8<n,@>(hU)","hU(a8<@,@>)","H(lD,lD)","P(afO)","~(bd)","v(oG)","H(H,a9U)","P(qH<H>)","~(qH<H>)","TW(Z)","P(MK)","P(uP)","~(hU)","n(n)","Wf(Z)","TV(Z)","aeb(Z)","a_3(Z)","hU(hU)","cL(bB<n,GA>)","cL(KT)","a_x(Z)","H?(hU)","hU()","P(KT)","D(hU)","~(Iq)","a_t(Z)","v(Iq,n,a0)","P(afH)","bB<n,ai<a8<n,@>>>(n,ai<nw>)","a_v(Z)","+count,id,name(H,n,n)(kT)","n(kT)","a0r(Z)","a0s(Z)","P(lW)","lW()","ZC(Z)","a2e(Z)","a_5(Z)","a_4(Z)","~(H)","~(n,ls?)","v(ro)","aew(Z)","~(mi)","aB<~>([n?])","F(F,lD)","v(lD)","F(F,ro)","a8<n,@>(ro)","ro(a8<@,@>)","ai<ls>()","uP()","n(V)","lD(a8<@,@>)","ct(Ip)","n(lD)","a8<n,@>(lD)","H(nw,nw)","kT(a8<n,@>)","kT(kT)"])
C.fNQ.prototype={
$1(d){return d.a+" "+d.b},
$S:129}
C.fNP.prototype={
bou(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.rg(s,d,B.hZ,"book",E.GA),$async$$1)
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
$1(d){return this.bou(d)},
$S:327}
C.fNR.prototype={
$1(d){return d.b},
$S:129}
C.fXo.prototype={
$1(d){var w=null
return A.eO(w,B.L,new H.Qm(this.a,this.b,w),w,w,0,B.a0d,B.d7,w,w,w)},
$S:47}
C.fB0.prototype={
$1(d){return d!=null},
$S:212}
C.fB1.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:212}
C.fB6.prototype={
$1(d){if(this.a)return new A.o(d.a*520,d.b*160)
return d},
$S:178}
C.fLz.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fc(d,w,w,w,A.ha(w,B.tp,w,w,w,w,w,w,w,B.dD,w,w,10.5,w,B.eB,w,!0,w,w,w,w),w),u=f?B.eB:B.wq
return new A.oa(D.bAZ,A.aaJ(A.a([new A.fV(130,w,v),new A.zD(1,B.Hb,A.fc(e,w,w,w,A.ha(w,g==null?D.etQ:g,w,w,w,w,w,w,w,B.dD,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.yo,B.lQ))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1956}
C.fLy.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.w0(999)
f=A.xD(A.lR(h,A.fc("Cashier",h,h,h,A.ha(h,D.Al,h,h,h,h,h,h,h,B.dD,h,h,10,h,B.eB,h,!0,h,h,h,h),h),h,new A.kQ(D.etH,h,f,B.i2,h),h,h,D.bBu,h))
w=A.xD(A.fc("Debt receipt",h,h,h,A.ha(h,h,h,h,h,h,h,h,h,B.dD,h,h,22,h,B.eB,h,!0,h,h,h,h),h))
v=A.xD(A.fc(C.xl(new A.V(Date.now(),0,!1),!0),h,h,h,D.aaQ,h))
u=A.w0(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fc(s,h,h,h,A.ha(h,h,h,h,h,h,h,h,h,B.dD,h,h,14,h,B.eB,h,!0,h,h,h,h),h)
r=A.fc("Person who owes",h,h,h,D.aaQ,h)
q=A.w0(10)
p=x.Z
u=A.lR(h,A.zw(A.a([s,new A.fV(h,2,h),r,new A.fV(h,10,h),A.lR(h,A.zw(A.a([A.fc("Amount owed",h,h,h,D.aaQ,h),new A.fV(h,2,h),A.fc(A.Bq(t.c),h,h,h,A.ha(h,D.Al,h,h,h,h,h,h,h,B.dD,h,h,20,h,B.eB,h,!0,h,h,h,h),h)],p),B.rM,B.lQ),h,new A.kQ(B.pK,h,q,B.i2,h),h,h,D.bAF,1/0)],p),B.rM,B.lQ),h,new A.kQ(E.aMq,h,u,B.i2,h),h,h,D.bCB,1/0)
q=new A.nT(D.etK,0.9,B.l8)
r=A.w0(12)
s=i.c
o=s.$2("Original due",C.xl(t.r,!1))
n=s.$2("Current due",C.xl(t.f,!1))
m=i.d
l=new A.nT(m,1.1,B.l8)
k=A.w0(8)
j=i.a
k=A.a([o,n,new A.fV(h,6,h),A.lR(h,A.xD(A.fc(t.gaNc(),h,h,h,A.ha(h,m,h,h,h,h,h,h,h,B.dD,h,h,11,h,B.eB,h,!0,0.5,h,h,h),h)),h,new A.kQ(h,new A.pZ(l,l,l,l),k,B.i2,h),h,h,D.bBC,1/0),new A.fV(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.Al))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.Al))
else{n=A.fc("Missed days ("+n+")",h,h,h,A.ha(h,B.tp,h,h,h,h,h,h,h,B.dD,h,h,10.5,h,B.eB,h,!0,h,h,h,h),h)
m=A.U(o).k("N<1,Tu>")
o=A.C(new A.N(o,new C.fLx(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fV(h,4,h),n,new A.fV(h,6,h),new C.baz(5,5,new C.baA(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fV(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fV(h,8,h),w,new A.fV(h,3,h),v,new A.fV(h,16,h),u,new A.fV(h,10,h),A.lR(h,A.zw(k,B.yo,B.lQ),h,new A.kQ(h,new A.pZ(q,q,q,q),r,B.i2,h),h,h,B.alt,1/0)],p)
w=j.a
if(w!=null){v=new A.nT(B.JF,1,B.l8)
B.d.v(f,A.a([new A.fV(h,16,h),A.fc("Debtor signature",h,h,h,A.ha(h,B.tp,h,h,h,h,h,h,h,B.dD,h,h,10,h,B.eB,h,!0,h,h,h,h),h),new A.fV(h,6,h),A.lR(h,new A.IK(w,B.XA,h,h),h,new A.kQ(h,new A.pZ(v,v,v,v),A.w0(6),B.i2,h),82,h,B.Ok,1/0)],p))}f.push(new A.fV(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fc(w,h,h,h,D.fp9,h))
f.push(new A.fV(h,18,h))
f.push(A.xD(A.fc("NGMY.ORG",h,h,h,A.ha(h,D.Al,h,h,h,h,h,h,h,B.dD,h,h,14,h,B.eB,h,!0,1.8,h,h,h),h)))
return f},
$S:363}
C.fLx.prototype={
$1(d){var w=null,v=new A.nT(D.JG,0.7,B.l8),u=A.w0(999)
return A.lR(w,A.fc(C.xl(d,!1),w,w,w,A.ha(w,D.JG,w,w,w,w,w,w,w,B.dD,w,w,9.5,w,B.eB,w,!0,w,w,w,w),w),w,new A.kQ(w,new A.pZ(v,v,v,v),u,B.i2,w),w,w,D.bH3,w)},
$S:1957}
C.c7F.prototype={
$1(d){var w=null,v=B.bC.j(0.08),u=A.m(999),t=A.L(B.bC.j(0.28),B.r,1)
return A.q(w,A.d(C.xl(d,!1),w,w,w,w,w,w,D.fwd,w,w,w),B.f,w,w,new A.p(v,w,t,u,w,w,B.n),w,w,w,w,B.eI,w,w,w)},
$S:1958}
C.fXV.prototype={
$1(d){var w=null,v=A.aH(d,B.c1,x.w).w,u=A.m(26),t=A.aG(w,w,w,w,D.c_p,w,w,w,new C.fXS(d),w,w,w,w,w,B.cf),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eO(w,B.L,new A.cQ(new A.aY(0,380,0,v.a.b*0.9),A.aI(!1,B.a3,!0,u,new A.D(B.a0_,A.x(A.a([new A.bM(B.aa,w,w,t,w),new A.dn(1,B.cp,A.cd(A.x(A.a([new A.em(new C.b_B(r,w),s),B.X,A.A(A.a([A.E(A.es(B.zx,D.fYm,new C.fXT(s,r,d),A.di(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f3,w,new A.b9(A.m(14),B.a1),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ae,A.E(A.dh(B.a3w,D.fUK,new C.fXU(r,d),A.bp(B.b1,w,w,w,B.c,w,B.f3,w,new A.b9(A.m(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.i,0,w,w)],p),B.l,w,B.e,B.Q,0,B.p),B.t,w,B.y,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.Q,0,B.p),w),B.f,B.as,0,w,w,w,w,w,B.aj),w),w,w,0,As.a0q,B.d7,w,w,w)},
$S:47}
C.fXS.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fXT.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aW.ap$.x.h(0,t.a)
m=m==null?null:m.gbg()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.md(2.5),$async$$0)
case 4:w=3
return A.b(e.hs(B.hg),$async$$0)
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
if(m.e!=null)m.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fXU.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fSc(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.L(x.q).f
s.U(A.b3(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fXN.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eO(w,B.as,A.x(A.a([new A.D(D.bCp,A.A(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nh,w,w,w),1),A.aG(w,w,w,w,B.lp,w,w,w,new C.fXL(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),w),new A.dn(1,B.cp,new A.D(B.f4,A.by(A.m(14),A.fR(t,B.A,w,w,B.cj,B.dB,!1,w,!1,w,w),B.aq),w),w),new A.D(B.NZ,new A.a6(1/0,w,A.dh(B.oE,D.aWH,new C.fXM(t,this.c,d),A.bp(B.b1,w,w,w,B.c,w,w,w,new A.b9(A.m(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.Q,0,B.p),w,w,w,B.Ob,B.d7,w,new A.b9(v,B.a1),w)},
$S:47}
C.fXL.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fXM.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.tp(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fXZ.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eO(w,B.as,new A.D(D.bCx,A.x(A.a([A.A(A.a([D.bIf,A.aG(w,w,w,w,B.lp,w,w,w,new C.fXX(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),B.U,new A.em(A.by(A.m(14),A.q(w,A.b4(w,w,w,new C.bcM(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.af,new A.a6(1/0,w,A.dh(B.oE,D.aWH,new C.fXY(t,s,d),A.bp(B.b1,w,w,w,B.c,w,w,w,new A.b9(A.m(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d7,w,new A.b9(v,B.a1),w)},
$S:47}
C.fXX.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fXY.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aW.ap$.x.h(0,t.a)
n=n==null?null:n.gbg()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.md(2.5),$async$$0)
case 4:w=3
return A.b(e.hs(B.hg),$async$$0)
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
if(n.e!=null)n.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fFR.prototype={
$1(d){return d.a===this.a},
$S:257}
C.dPQ.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dPB.prototype={
bnI(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.ed:B.c
s=u.a
w=2
return A.b(A.bT(t,null,new C.dPE(s,q,e),p,!0,!0,!1,B.JX,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dPF(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bnI(d,e)},
$S:1959}
C.dPE.prototype={
$1(d){var w,v=null,u=this.c===B.wZ,t=u?D.dsk:D.dnX
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.as,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(O.alZ,A.x(A.a([u,B.ax,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bu:B.br,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.io(!0,v,v,B.y,D.ffH,new C.dPD(this.a,w,t,d),t.length,v,B.dW,B.ah,!0)],x.p),B.al,v,B.e,B.Q,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:25}
C.dPD.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cG.j(0.14)
else w=t.b.a.d.a?B.S:B.aP
v=A.m(14)
if(q)u=B.cG
else u=(t.b.a.d.a?B.bu:B.br).j(0.16)
u=A.L(u,B.r,q?1.6:1)
return A.aP(!1,p,!0,A.q(B.A,C.b_A(r,26),B.f,s,s,new A.p(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dPC(t.d,r),s,s,s,s,s,s,s)},
$S:198}
C.dPC.prototype={
$0(){A.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.dPF.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dPz.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:89}
C.dPA.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cJ(B.cw,e,v)
return new A.d0(e,!1,A.it(B.A,A.at(A.aI(!1,B.a3,!0,v,new A.dY(new C.dPy(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.aj),v,v,v),v,new A.bg(t,new A.br(0.96,1,u),u.k("bg<bO.T>"))),v)},
$S:33}
C.dPy.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aH(d,B.c1,x.w).w,i=l.b,h=i.a.d.a,g=h?B.ed:B.c,f=A.m(14),e=A.L((h?B.bu:B.br).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aP(!1,v,!0,new A.D(B.eA,A.X(B.cz,i.a.d.a?B.bu:B.br,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dPj(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.i,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aV5("Name")
r=l.a
q=r.d==null?k:new C.dPk(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bq:B.m5
n=A.L(B.cG.j(0.35),B.r,1)
m=r.d
t=A.aM(k,B.Z,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.bf5(new A.D(B.fA,A.aP(!1,p,!0,A.q(B.A,C.b_A(m==null?"\ud83d\udc64":A.fMn(r.e,m),18),B.f,k,k,new A.p(o,k,n,k,k,k,B.a7),k,34,k,B.cl,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.l3,k,B.aaF,k,k)
v=A.a([v,B.af,t,B.U,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.br,k,k,k,k,k,k,k,k,11.5,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.an,A.A(A.a([A.E(i.aVM("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dPl(r,a0),r.d===B.wZ),1),B.ae,A.E(i.aVM("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dPq(r,a0),r.d===B.a7l),1)],u),B.l,k,B.e,B.i,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.U,new A.bM(B.a6,k,k,A.ho(D.bYH,D.fWE,new C.dPr(r,l.e,a0),A.fu(k,k,k,k,k,k,k,k,k,k,k,B.cG,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cf)),k)],u))
v.push(B.X)
t=A.l(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uT(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aV6("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ak,k,k,s,k,k,B.e9,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ao,k,k,k,k))
v.push(B.X)
t=i.a.d.a
s=t?B.S:B.aP
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.L((t?B.bu:B.br).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.br,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xl(r.a,!1)
v.push(A.aI(!1,B.a3,!0,q,A.aP(!1,p,!0,A.q(k,A.A(A.a([A.E(A.x(A.a([t,B.bH,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,14,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.i,0,B.p),1),D.bVn],u),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.p(k,k,n,o,k,k,B.n),k,k,k,k,B.bi,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dPs(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.aj))
if(!h)B.d.v(v,A.a([B.U,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.br,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.X)
t=A.l(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aV5("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.br,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b3e(r.b.length!==0,B.n2,new C.dPt(r,i,a0),new C.dPu(r,a0),"Upload from gallery","ID photo"))
v.push(i.b3e(r.c.length!==0,D.bOK,new C.dPv(r,i,d,a0),new C.dPw(r,a0),"Camera or gallery","Selfie"))
v.push(B.U)
t=l.w
v.push(new Ar.a8x("Signature (optional)",t,new C.dPx(a0),new C.dPm(a0,t),new C.dPn(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bu:B.br
s=(i?B.bu:B.br).j(0.28)
s=A.E(A.dU(E.aWA,new C.dPo(d),A.di(k,k,k,k,k,k,k,k,k,t,k,k,B.qz,k,new A.b9(A.m(10),B.a1),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bp(B.cG,k,k,k,B.c,k,B.qz,k,new A.b9(A.m(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.ae,A.E(A.bI(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vy,k,k,k),k,new C.dPp(r,w,d),t),1)],u),B.l,k,B.e,B.i,0,k,k))
return A.q(k,A.cd(A.x(v,B.al,k,B.e,B.Q,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.p(g,k,e,f,k,k,B.n),k,k,k,B.rU,B.jn,k,k,360)},
$S:162}
C.dPj.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dPk.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dPl.prototype={
$0(){return this.b.$1(new C.dPi(this.a))},
$S:0}
C.dPi.prototype={
$0(){var w=this.a
w.d=B.wZ
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dPq.prototype={
$0(){return this.b.$1(new C.dPh(this.a))},
$S:0}
C.dPh.prototype={
$0(){var w=this.a
w.d=B.a7l
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dPr.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dPs.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xq(null,u.b,A.c1(2020,1,1,0,0,0,0,0),null,s,A.c1(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dPg(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPg.prototype={
$0(){var w=this.b
return this.a.a=A.c1(w.gcl(),w.gcg(),w.gcz(),0,0,0,0,0)},
$S:0}
C.dPt.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Q0(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dPf(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPf.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dPu.prototype={
$0(){return this.b.$1(new C.dPe(this.a))},
$S:0}
C.dPe.prototype={
$0(){return this.a.b=""},
$S:0}
C.dPv.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.ed:B.c
w=3
return A.b(A.bT(q,null,new C.dPc(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Q0(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dPd(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPc.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.arj,w,w,w,w,new C.dP6(d),!1,w,w,w,w,w,w,w,D.fMD,w,w,w),A.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.arh,w,w,w,w,new C.dP7(d),!1,w,w,w,w,w,w,w,D.fTK,w,w,w)],x.p),B.l,w,B.e,B.Q,0,B.p),!0,!1,B.ag,!0,!0)},
$S:25}
C.dP6.prototype={
$0(){A.a5(this.a,!1).O("camera")
return null},
$S:0}
C.dP7.prototype={
$0(){A.a5(this.a,!1).O("gallery")
return null},
$S:0}
C.dPd.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dPw.prototype={
$0(){return this.b.$1(new C.dPb(this.a))},
$S:0}
C.dPb.prototype={
$0(){return this.a.c=""},
$S:0}
C.dPx.prototype={
$0(){return this.a.$1(new C.dPa())},
$S:0}
C.dPa.prototype={
$0(){},
$S:0}
C.dPm.prototype={
$0(){return this.a.$1(new C.dP9(this.b))},
$S:0}
C.dP9.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dPn.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.aiJ(u.a,null,null,new C.dP8(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dP8.prototype={
$4(d,e,f,g){this.a.$1(new C.dP5(this.b,d))},
$S:444}
C.dP5.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dPo.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dPp.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.L(x.q).f.U(D.fkL)
return}if(w.a.d==null){w.c.L(x.q).f.U(D.fhE)
return}A.a5(w.c,!1).O(!0)},
$S:0}
C.dPT.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:89}
C.dPU.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.ed:B.c,n=A.m(14),m=A.L((p?B.bu:B.br).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.as,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Bq(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bu:B.br,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zG(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.zG(r).length>0?B.bC:B.cG,r,r,r,r,r,r,r,r,12,r,r,B.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bu:B.br
t=(q?B.bu:B.br).j(0.28)
s=x.p
return new A.d0(e,!1,A.at(A.aI(!1,B.a3,!0,r,A.q(r,A.x(A.a([p,B.U,v,u,B.aB,A.A(A.a([A.E(A.dU(B.nY,new C.dPR(d),A.di(r,r,r,r,r,r,r,r,r,w,r,r,B.k2,r,new A.b9(A.m(10),B.a1),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ae,A.E(A.bI(D.fUb,r,new C.dPS(d),A.bp(B.cG,r,r,r,B.c,r,B.k2,r,new A.b9(A.m(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.i,0,r,r)],s),B.al,r,B.e,B.Q,0,B.p),B.f,r,r,new A.p(o,r,m,n,r,r,B.n),r,r,r,B.Cm,B.GO,r,r,300),B.f,B.L,0,r,r,r,r,r,B.aj),r,r,r),r)},
$S:33}
C.dPR.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dPS.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dPN.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dPO(r),p=r.a.d.a,o=p?B.ed:B.c,n=A.m(14),m=A.L((p?B.bu:B.br).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.as,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Bq(l.c),s,s,s,s,s,s,D.fxO,s,s,s)],p),B.l,s,B.e,B.i,0,s,s)
w=A.iK((r.a.d.a?B.bu:B.br).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a29,"View receipt",new C.dPG(r,d,l))
u=l.x!=null
t=u?B.pw:B.qI
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bCu,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dPH(r,d,l)),q.$3$icon$label$onTap(B.Cz,"Edit",new C.dPI(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.n2,"View / download ID",new C.dPJ(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bOJ,"View / download selfie",new C.dPK(r,d,l)))
if(l.gaHM())p.push(q.$3$icon$label$onTap(Ad.a3m,"View / download signature",new C.dPL(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bC,B.eh,"Delete",new C.dPM(r,d,l)))
p.push(B.ax)
return A.bm(!0,new A.D(B.ut,A.q(s,A.x(p,B.l,s,B.e,B.Q,0,B.p),B.f,s,s,new A.p(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:25}
C.dPO.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.as
else w=d
return A.aP(!1,v,!0,new A.D(B.eY,A.A(A.a([A.X(e,w,v,v,v,20),B.bd,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1960}
C.dPG.prototype={
$0(){A.a5(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fXR(w,this.c)},
$S:0}
C.dPH.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.SR(this.c)},
$S:0}
C.dPI.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.DE(this.c)},
$S:0}
C.dPJ.prototype={
$0(){var w,v,u
A.a5(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bFX(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dPK.prototype={
$0(){var w,v,u
A.a5(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bFX(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dPL.prototype={
$0(){A.a5(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fXW(w,this.c)},
$S:0}
C.dPM.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.Q_(0,this.c)},
$S:0}
C.dPV.prototype={
$1(d){return d.x==null},
$S:257}
C.dPW.prototype={
$1(d){return d.x!=null},
$S:257}
C.dPX.prototype={
$2(d,e){return d+e.c},
$S:1961}
C.dPY.prototype={
$0(){return this.a.bDG()},
$S:0}
C.dPP.prototype={
$0(){return this.a.agd(this.b)},
$S:0}
C.fGC.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fGD.prototype={
$0(){return B.d.gH(D.a4F)},
$S:z+77}
C.dfw.prototype={
$0(){var w=this.a
return w.m(new C.dfu(w,this.b))},
$S:0}
C.dfu.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dfv.prototype={
$0(){},
$S:0}
C.dfx.prototype={
$0(){var w=this.a.gc24()
A.a5(this.b,!1).O(w)
return null},
$S:0}
C.fJ6.prototype={
$1(d){return C.hkU(A.a3(d,x.N,x.z))},
$S:z+11}
C.fJ7.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fJ8.prototype={
$2(d,e){var w=A.ca(d.a,null),v=A.ca(e.a,null)
if(w!=null&&v!=null)return B.o.aS(w,v)
return d.d.aS(0,e.d)},
$S:z+83}
C.fWs.prototype={
$1(d){return d.aj()},
$S:z+12}
C.h3W.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fFI.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bR7.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eG(e,v)?v:null},
$S:1962}
C.fX2.prototype={
$1(d){var w=this
return new C.a_v(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dgb.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dga(w,d))},
$S:z+80}
C.dga.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dg_.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cI(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dfX.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dfy.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dfz.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dg0.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dfH.prototype={
$1(d){var w=null,v=A.S(d).ax.a===B.J,u=v?B.ed:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.as,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.br,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.eg(A.a([A.bN(!1,B.dn,w,w,!0,w,w,w,new C.dfF(d),w,w),A.bI(B.xm,w,new C.dfG(d),A.bp(B.nr,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.dfF.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dfG.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dfI.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.dfY.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dfZ.prototype={
$0(){return B.d.gH(D.zL)},
$S:z+14}
C.dfD.prototype={
$1(d){var w=this.a,v=w.y,u=w.gz0(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.TV(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dfE.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dfJ.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a_3(v,u,J.ad(w.d),null)},
$S:z+40}
C.dfK.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dg9.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aA(s,new C.ZL(r.y,r.gz0(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dg7(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bc8(v,e,w,u,t,r.gbUe(),C.hAw(r.y.Q),r.gz0(0),s)
w=t}return A.c9(q,new C.dg8(r,e),new A.D(B.a0i,w,s))},
$S:1963}
C.dg8.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd5(t).ay){t=this.b
u=x.cy.a(B.d.gd5(u.f.f)).gvm(0)
w=t-(u==null?t:u)}else w=0
v=B.j.D(w,-1,0)
u=A.dr()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fL(v*3.141592653589793*0.5)
return A.fz(B.a6,A.d8(e,B.j.D(1+v*0.5,0,1)),null,u,!0)},
$S:46}
C.dg7.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aIY(B.qr,B.j1)},
$S:0}
C.dfU.prototype={
$0(){var w=this.a
return w.m(new C.dfT(w))},
$S:0}
C.dfT.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dfV.prototype={
$0(){var w=this.a.c
w.toString
A.a5(w,!1).O(null)
return null},
$S:0}
C.dfA.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.ko.j(0.5),r=x.p,q=A.a([D.fLd,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cr(p.d)?"Write this book":"Write a new book"
q.push(p.ZM(d,B.ee,w,J.cr(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.ZM(d,K.ape,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cI(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cx,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kM.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cx,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kM.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.ZM(d,X.aqh,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.ZM(d,B.qN,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.ZM(d,B.qN,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eO(u,E.BQ,A.bm(!0,new A.D(Ac.yJ,A.x(q,B.E,u,B.e,B.Q,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,I.a0s,B.d7,u,new A.b9(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:47}
C.dfW.prototype={
$0(){A.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.dfN.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cI(w.d)
return new C.a_x(v,J.cI(w.d),w.r+1,null)},
$S:z+44}
C.dfO.prototype={
$1(d){var w=null
return A.oL(!1,A.eg(w,w,w,E.BQ,new A.k3(this.a,new C.dfM(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:344}
C.dfM.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aak,B.oV,A.E(A.d(e,w,w,w,w,w,w,B.jv,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:760}
C.dfP.prototype={
$0(){return this.a.a=!1},
$S:51}
C.dfQ.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:193}
C.dfR.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dfS.prototype={
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
case 3:if(s.c!=null)s.m(new C.dfL(s,t))
w=4
return A.b(s.lg(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dfL.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dg2.prototype={
$1(d){var w=null
return A.oL(!1,A.eg(w,w,w,E.BQ,new A.k3(this.a,new C.dg1(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:344}
C.dg1.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aak,B.oV,A.E(A.d(e,w,w,w,w,w,w,B.jv,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:760}
C.dg3.prototype={
$0(){return this.a.a=!1},
$S:51}
C.dg4.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:193}
C.dg5.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:193}
C.dg6.prototype={
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
C.dfB.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bkF(B.qr,A5.NN)},
$S:0}
C.dfC.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aIY(B.qr,A5.NN)},
$S:0}
C.dhY.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dhZ.prototype={
$1(d){var w=this.a
return w.m(new C.dhX(w))},
$S:9}
C.dhX.prototype={
$0(){return this.a.e="page"},
$S:0}
C.di_.prototype={
$1(d){var w=this.a
return w.m(new C.dhW(w))},
$S:9}
C.dhW.prototype={
$0(){return this.a.e="book"},
$S:0}
C.di0.prototype={
$1(d){var w=this.a
return w.m(new C.dhV(w))},
$S:9}
C.dhV.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.di1.prototype={
$0(){var w=this.a
return w.m(new C.dhU(w,this.b))},
$S:0}
C.dhU.prototype={
$0(){var w=this.b
this.a.d.sb1(0,w)
return w},
$S:0}
C.di2.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga2z()
A.a5(this.b,!1).O(new A.br_(w,v))},
$S:0}
C.dgq.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dgp.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a_t(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dgu.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dgt.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.baF(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hi,v,v,v)
return A.eg(A.a([A.bN(!1,B.dn,v,v,!0,v,v,v,new C.dgr(d),v,v),A.bI(B.xm,v,new C.dgs(d),A.bp(B.nr,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.BQ,w,v,v,v,v,D.fJZ,v)},
$S:18}
C.dgr.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dgs.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dgv.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dgw.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)r.push(new A.a6(s,t,w[u],t))
return A.cd(A.bU(B.bG,r,B.bs,t,18,14),B.t,t,B.y,t,D.bDt,t,t,B.ah)},
$S:309}
C.dgo.prototype={
$0(){return this.a.QO(0,this.b)},
$S:0}
C.dgn.prototype={
$0(){return this.a.Qf(0,this.b)},
$S:0}
C.cOP.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cOQ.prototype={
$0(){return B.d.gH(D.zL)},
$S:z+14}
C.cOR.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bR(0,new A.D(d,A.c3(w,new A.p(w,w,A.L(this.a.j(f),B.r,g),v,w,w,B.n),B.bj),w),0,0,0)},
$S:1965}
C.d7n.prototype={
$1(d){return this.a.m(new C.d7m(this.b,this.c))},
$S:9}
C.d7m.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d7M.prototype={
$1(d){return this.a.m(new C.d7z())},
$S:2}
C.d7z.prototype={
$0(){},
$S:0}
C.d7N.prototype={
$1(d){return this.a.m(new C.d7y())},
$S:2}
C.d7y.prototype={
$0(){},
$S:0}
C.d7O.prototype={
$0(){var w=this.a
return w.m(new C.d7x(w,this.b))},
$S:0}
C.d7x.prototype={
$0(){var w=this.a
return w.d=w.gop().Gd(this.b.a)},
$S:0}
C.d7P.prototype={
$0(){var w=this.a
return w.m(new C.d7w(w,this.b))},
$S:0}
C.d7w.prototype={
$0(){var w=this.a
return w.d=w.gop().cNq(this.b)},
$S:0}
C.d7Q.prototype={
$1(d){return this.a.m(new C.d7v())},
$S:2}
C.d7v.prototype={
$0(){},
$S:0}
C.d7R.prototype={
$0(){var w=this.a
return w.m(new C.d7u(w,this.b))},
$S:0}
C.d7u.prototype={
$0(){var w=this.a
return w.d=w.gop().cNv(this.b.a)},
$S:0}
C.d7S.prototype={
$1(d){var w=this.a
return w.m(new C.d7H(w,d))},
$S:6}
C.d7H.prototype={
$0(){var w=this.a
return w.d=w.gop().cOp(this.b)},
$S:0}
C.d7T.prototype={
$1(d){var w=this.a
return w.d=w.gop().aFU(d)},
$S:2}
C.d7U.prototype={
$1(d){var w=this.a
return w.d=w.gop().cNy(d)},
$S:2}
C.d7W.prototype={
$1(d){var w=this.a
return w.d=w.gop().cOn(d)},
$S:2}
C.d7X.prototype={
$1(d){var w=this.a
return w.m(new C.d7G(w,d))},
$S:9}
C.d7G.prototype={
$0(){var w=this.a
return w.d=w.gop().cOe(this.b)},
$S:0}
C.d7Y.prototype={
$0(){var w=this.a,v=w.gop(),u=B.a.i(w.gz0(0).a.a),t=B.a.i(w.gaD5().a.a)
u=v.bfm(B.a.i(w.gasI().a.a),t,u)
A.a5(this.b,!1).O(u)
return null},
$S:0}
C.bRh.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bRb.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bRa(w,d))},
$S:11}
C.bRa.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bRk.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bRc.prototype={
$0(){var w=this.a
w.Q=D.b0H
w.adS(1)
w.r.x=null},
$S:0}
C.bRd.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b0H)return
w=new A.e4()
w.d_(u.as*13+u.a.e)
v=u.r
v.Q=3+w.aw(3)
v.z=D.d3g[w.aw(6)]
v.as=u.f.a+2.6},
$S:0}
C.bRg.prototype={
$0(){var w=this.a
w.Q=D.acW
w.adS(2)
w.r.z=null},
$S:0}
C.bRf.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hBf
t.adS(3)
w=t.r
w.d=s
w.x="I say: "+t.gCt()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.aw(3)
w.z=s?D.d9K[v.aw(4)]:D.duQ[v.aw(3)]
w.as=t.a+2.8},
$S:0}
C.bRi.prototype={
$0(){var w=this.a
w.Q=D.b0I
w.CW=this.b
w.cy=1
w.adS(4)
w.r.f=w.f.a+5},
$S:0}
C.bRj.prototype={
$0(){},
$S:0}
C.bRe.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).hU()},
$S:0}
C.bR8.prototype={
$0(){return this.a.L0(this.b)},
$S:0}
C.bR9.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).hU()},
$S:0}
C.bSO.prototype={
$0(){var w=this
return w.a.R6(w.b,0,w.c,w.d)},
$S:0}
C.bSP.prototype={
$0(){var w=this
return w.a.R6(w.b,3,w.c,w.d)},
$S:0}
C.bSQ.prototype={
$0(){var w=this
return w.a.R6(w.b,1,w.c,w.d)},
$S:0}
C.bSR.prototype={
$0(){var w=this
return w.a.bTF(w.b,w.c,w.d)},
$S:0}
C.bSS.prototype={
$0(){var w=this
return w.a.R6(w.b,4,w.c,w.d)},
$S:0}
C.bST.prototype={
$0(){var w=this
return w.a.R6(w.b,2,w.c,w.d)},
$S:0}
C.bSU.prototype={
$0(){var w=this
return w.a.R6(w.b,5,w.c,w.d)},
$S:0}
C.bSV.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:761}
C.bSN.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a5P[d],p=q.a.a2(0,new A.o(0,-q.b*1.2*124)),o=A.fq(r,B.cs,r,3,r,A.cP(r,r,r,r,r,r,r,r,r,D.foQ,e),B.a5,B.bX,r,B.dz,B.bY)
o.o5(130)
w=o.b.a.c
w=p.aJ(0,new A.o(0,w.gba(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bl(A.bs(w,v.gba(v)+12,u+18),B.i0)
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
$S:762}
C.bRy.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.bRz.prototype={
$2(d,e){var w=this.a,v=B.o.aS(w.amw(d),w.amw(e))
if(v!==0)return v
return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.ftR.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.h3N.prototype={
$2(d,e){if(e!=null)J.c7(this.a.c3(0,d,new C.h3O()),e)},
$S:z+66}
C.h3O.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.h3P.prototype={
$1(d){return d!==this.a},
$S:3}
C.h3Q.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.h3R.prototype={
$1(d){return d!==this.a&&!B.d.aV(this.b,new C.h3M(this.c,d))},
$S:3}
C.h3M.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.h3S.prototype={
$1(d){return d!==this.a},
$S:3}
C.h3T.prototype={
$1(d){return d!==this.a},
$S:3}
C.h3U.prototype={
$1(d){return d!==this.a&&!B.d.aV(this.b,new C.h3L(this.c,d))},
$S:3}
C.h3L.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fHd.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fVt.prototype={
$1(d){return d.Q},
$S:z+15}
C.fVu.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fD7.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fK1.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bMl.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.h4c.prototype={
$2(d,e){return B.o.aS(C.hwR(d),C.hwR(e))},
$S:226}
C.h4d.prototype={
$1(d){return d!==this.a},
$S:3}
C.fVZ.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bKv.prototype={
$0(){var w=this.a
w.ch=!0
w.b8U()},
$S:0}
C.bKq.prototype={
$0(){},
$S:0}
C.bKw.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bKo.prototype={
$0(){},
$S:0}
C.bKp.prototype={
$0(){},
$S:0}
C.bKu.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bR(0,A.b4(u,u,u,new C.bcO(t,u),B.az),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.m(14)
s.push(A.ap(u,A.q(u,A.d(t.dy,u,u,u,u,u,u,D.fwp,B.K,u,u),B.f,u,u,new A.p(w,u,u,v,u,u,B.n),u,u,u,u,B.bW,u,u,u),u,u,14,14,6,u))}return A.aA(B.c5,new A.an(B.a0,u,B.ad,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bKr(t,e),u,u,u,u,u,u,u,new C.bKs(t,e),u,u,u,u,u,u,u,u,u,new C.bKt(t,e),u,u,u,u,!1,B.a4)},
$S:37}
C.bKr.prototype={
$1(d){return this.a.db=B.j.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bKt.prototype={
$1(d){return this.a.db=B.j.D(d.b.a/this.b.b,0.08,0.92)},
$S:24}
C.bKs.prototype={
$1(d){return this.a.db=B.j.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bKn.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).hU()},
$S:0}
C.cpS.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cpT.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cpR(w))},
$S:0}
C.cpR.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cpU.prototype={
$0(){var w=this,v=w.a
v.gj1()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cpV.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cpW.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cpX.prototype={
$0(){},
$S:0}
C.cpY.prototype={
$0(){var w=this.a
w.z=w.Xk(++w.e)
w.Q=A.bZ(w.gkS()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cpO.prototype={
$0(){return A.a5(this.a,!1).hU()},
$S:0}
C.cpP.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj1().length,e=i/2,d=new C.cpQ(i,f,h),a0=g.as,a1=A.a4(a0).k("b8<2>")
a0=A.C(new A.b8(a0,a1),a1.k("M.E"))
a0=A.bR(0,A.c9(new A.h6(a0),new C.cpJ(g,new A.o(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj1().length!==0&&!B.d.q(g.gj1(),-1)
v=x.p
e=A.a([a0,A.ap(j,new C.QE(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cL(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new S.MS(new C.cpK(g,u),new C.cpL(g,u),new C.cpM(g,u),j,j,new A.bK("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ap(j,A.d(a1,j,j,j,j,j,j,A.l(j,j,B.a.q(a1,"not a child")?B.fh:B.b3,j,j,j,j,j,j,j,j,13,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj1().length!==0&&!B.d.q(g.gj1(),-1)){a0=g.e+1>=g.gkS().length?"See my result":"Next family"
g=A.at(C.uu(a0,g.gqm(g),B.cO,B.jH,D.fy),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.Xk(0):s).length))break
if(!B.d.q(g.gj1(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.Xk(0)
o=s}else o=s
n=s[u]
n=A.e9(B.A,new C.QE(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.Xk(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.r4(new A.br(0,p,t),new C.cpN(),new S.El(u,j,new C.QE(l.b,k,62,!1,j),new A.kG(0.25,new C.QE(m.b,k,62,!1,j),j),new A.ka(n,B.aj,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.I,S.hAo(),!0,!0,j,j,j,j,j,j,!1,B.iM,j,new A.bK("chip-"+r,a0),w),B.b4,B.iK,j,new A.bK("t"+r+"-"+q,a0),v))}++u}g=A.bU(B.fP,a1,B.bs,j,6,8)}e.push(A.ap(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ad,B.t,e,j)},
$S:65}
C.cpQ.prototype={
$1(d){return new A.o(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:753}
C.cpJ.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.gj1().length!==0&&!B.d.q(t.gj1(),-1)
return A.b4(p,p,p,new C.bch(q.b,o,v,w,p),B.az)},
$S:64}
C.cpL.prototype={
$1(d){return this.a.gj1()[this.b]===-1},
$S:z+30}
C.cpM.prototype={
$1(d){return this.a.cRh(this.b,d.a)},
$S:z+31}
C.cpK.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj1()[t]!==-1,r=A.m(18),q=e.length!==0?B.cO.j(0.3):B.L
if(s)w=v
else w=A.L(e.length!==0?B.cO:B.jC,B.r,2)
u=s?A.lC(new C.cpI(),A.at(new C.QE(u.gaFm()[u.gj1()[t]].b,u.gaFm()[u.gj1()[t]].a,62,!1,v),v,v,v),B.l9,B.iK,v,v,new A.br(0.3,1,x.X),x.i):D.bbK
return A.cT(v,u,v,v,B.b4,new A.p(q,v,w,r,v,v,B.n),B.a3,v,100,v,v,v,v,v,88)},
$S:1968}
C.cpI.prototype={
$3(d,e,f){return A.e9(B.A,f,e,null,null)},
$S:114}
C.cpN.prototype={
$3(d,e,f){return A.dP(f,new A.o(Math.sin(e*24)*8*(1-e),0))},
$S:114}
C.cPT.prototype={
$1(d){return d>=1},
$S:120}
C.cEQ.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkS()[w.e].d.length)w.m(new C.cEP(w))},
$S:11}
C.cEP.prototype={
$0(){return this.a.f++},
$S:0}
C.cEY.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cEZ.prototype={
$0(){var w=this.a,v=this.b
w.z.J(0,v)
w.Q=v},
$S:0}
C.cF_.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cEX(w))},
$S:0}
C.cEX.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cF0.prototype={
$0(){return this.a.f++},
$S:0}
C.cF1.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cF2.prototype={
$0(){},
$S:0}
C.cF3.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a8(0)
w.as=!1
w.ay=0},
$S:0}
C.cES.prototype={
$0(){return A.a5(this.a,!1).hU()},
$S:0}
C.cET.prototype={
$3(d,e,f){var w=null
return A.lC(new C.cER(this.a,e),w,B.b4,B.hF,w,w,new A.br(w,this.b,x.X),x.i)},
$S:1969}
C.cER.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.cO.j(u.as?0.6:0.15)
t=A.a([new A.ac(0,B.G,t,B.I,u.as?40:18)],x.V)
w=this.b
return A.q(v,A.hT(new A.BH(new A.uO(B.w.j(e),B.LL,v,B.Y3),H.bX_(A.b4(v,v,v,new C.aBu(u.gkS()[u.e].c,u.as,v),B.az),new A.Eq(w,w,B.W1)),v),B.aq),B.f,v,v,new A.p(v,v,v,v,t,v,B.a7),v,190,v,v,v,v,v,190)},
$S:1970}
C.cEU.prototype={
$3(d,e,f){return A.d8(A.dP(f,new A.o(0,14*(1-e))),e)},
$S:100}
C.cEV.prototype={
$3(d,e,f){return A.dP(f,new A.o(Math.sin(e*22)*8*(1-e),0))},
$S:114}
C.cEW.prototype={
$0(){return this.a.bpZ(this.b)},
$S:0}
C.f6p.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.an2$)
v.an2$=w
v.q8$.sp(0,w)
v.aqV(u)},
$S:7}
C.fgy.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:11}
C.bSj.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bSi())},
$S:0}
C.bSi.prototype={
$0(){},
$S:0}
C.bSg.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bSe.prototype={
$0(){},
$S:0}
C.bSf.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gMJ()
w=s+1>=r.length?3:5
break
case 3:q=C.bGc(p.gapL(0),0,r.length)
p.m(new C.bSb(p,q))
o=p
w=6
return A.b(C.BS(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.BT(s.d,s.c.a,"school",p.gapL(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bSc())
w=4
break
case 5:p.m(new C.bSd(p))
p.gqu().VT(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bSb.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bSc.prototype={
$0(){},
$S:0}
C.bSd.prototype={
$0(){return this.a.x++},
$S:0}
C.bSh.prototype={
$0(){return this.a.L0(this.b)},
$S:0}
C.bSa.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).hU()},
$S:0}
C.f6q.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.o(t,s),q=v.b,p=v.d,o=p?C.hAC(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.E9
C.Sw(q,D.en1,0,0.2,-0.6,-0.2,null,w,D.elL,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a2(0,new A.o(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.Q()
p=A.K()
p.r=D.Ga.gp(0)
p.c=3
p.d=B.bw
q.ah(new A.o(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f6r.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.Sw(this.a,D.em7,0,u,0.7,-0.5,null,null,D.Jx,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f6s.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.Sw(this.a,D.enN,0,0,0.8,-0.5,null,null,D.Jx,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f6t.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.Sw(w.b,D.emW,0,v,-0.8,-0.5,null,null,D.Jx,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f6u.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.o(34,-122+Math.sin(w*5)*5)
else v=v?D.en_:D.E9
C.Sw(p,D.emr,0,t,0,-0.6,null,v,D.Jx,3,0,s,1.3,u,0,w,0)
q=q.cbX(new A.o(222,455),9)
$.Q()
w=A.K()
w.r=B.cO.gp(0)
p.af(q,w)},
$S:0}
C.f6v.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:761}
C.bRX.prototype={
$2(d,e){return d+e},
$S:63}
C.bS7.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bS8.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bS9.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj1()[u.b]=s
t.gj1()[u.d]=t.y
w=t.as
v=t.q8$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bS3.prototype={
$1(d){return d},
$S:97}
C.bS2.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.q8$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bS4.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bS5.prototype={
$0(){},
$S:0}
C.bS6.prototype={
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
C.bRZ.prototype={
$0(){return A.a5(this.a,!1).hU()},
$S:0}
C.bS_.prototype={
$2(d,e){var w=this.a
w=w.gkS()[w.f].e
return B.o.aS(w[d],w[e])},
$S:63}
C.bS0.prototype={
$2(d,e){var w=null,v=C.hc4(new A.av(A.aS(1/0,e.a,e.b),A.aS(1/0,e.c,e.d))),u=this.a
return A.aA(B.c5,new A.em(A.b4(w,w,w,new C.bjs(u,u.q8$),B.az),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bRY(u,v),w,w,w,w,!1,B.a4)},
$S:37}
C.bRY.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj1().length
u=B.o.D(B.j.bh((t.a-s.a)/r/450*v),0,v-1)
w.d15(w.gj1()[u])}},
$S:24}
C.bS1.prototype={
$1(d){var w=this.a
return w.gkS()[w.f].d[d]},
$S:77}
C.dr8.prototype={
$2(d,e){return 0},
$S:63}
C.bRJ.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bRI())},
$S:0}
C.bRI.prototype={
$0(){},
$S:0}
C.bRH.prototype={
$0(){},
$S:0}
C.bRB.prototype={
$0(){},
$S:0}
C.bRC.prototype={
$0(){},
$S:0}
C.bRG.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.B5},
$S:0}
C.bRF.prototype={
$1(d){var w=null,v=this.a.gqu(),u=A.d(d,w,w,w,w,w,w,D.aV7,w,w,w),t=v.gbmq(0)
return A.aA(B.c5,A.x(A.a([u,B.bH,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aVl,w,w,w)],x.p),B.E,w,B.e,B.i,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbsl(v),w,w,w,w,w,w,!1,B.a4)},
$S:136}
C.bRD.prototype={
$0(){return this.a.L0(this.b)},
$S:0}
C.bRE.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).hU()},
$S:0}
C.bRA.prototype={
$0(){return A.a5(this.a,!1).hU()},
$S:0}
C.e1a.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e1b.prototype={
$1(d){return this.a},
$S:39}
C.e1c.prototype={
$0(){var w=this.a
return w.d=w.gSS().beQ(this.b)},
$S:0}
C.e18.prototype={
$1(d){return new C.TW(this.a,null)},
$S:z+32}
C.e19.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e17.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hi,w,w,w)
return A.eg(A.a([A.bN(!1,E.aWK,w,w,!0,w,w,w,new C.e15(d),w,w),A.bN(!1,D.fRA,w,w,!0,w,w,w,new C.e16(d),w,w)],x.p),w,w,D.fy,v,w,w,w,w,D.fE9,w)},
$S:18}
C.e15.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.e16.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.e14.prototype={
$0(){var w=null,v=this.a.c.L(x.q).f,u=this.b
return v.U(A.b3(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.a_,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e1d.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:14}
C.e1e.prototype={
$0(){var w=this.a,v=this.b,u=C.bDY(v,10,w.r,!1)
return w.ux(C.hkV(w.a.d,"kahoot",u,w.gb6r(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e1f.prototype={
$0(){var w=this.a
return w.ux(new C.alS(this.b,w.a.d,w.r,null))},
$S:0}
C.e1g.prototype={
$0(){var w=this.a
return w.ux(new C.ak4(this.b,w.a.d,w.r,null))},
$S:0}
C.e1j.prototype={
$0(){var w=this.a
return w.ux(new C.auO(this.b,w.a.d,w.r,null))},
$S:0}
C.e1k.prototype={
$0(){var w=this.a
return w.ux(new C.ayL(this.b,w.a.d,w.r,null))},
$S:0}
C.e1l.prototype={
$0(){var w=this.a
return w.ux(new C.alV(this.b,w.a.d,w.r,null))},
$S:0}
C.e1m.prototype={
$0(){var w=this.a
return w.ux(new C.alZ(this.b,w.a.d,w.r,null))},
$S:0}
C.e1n.prototype={
$0(){var w=this.a
return w.ux(new C.am0(this.b,w.a.d,w.r,null))},
$S:0}
C.e1o.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d1q()
return v.ux(C.hkV(v.a.d,"creator_"+u.a,w,v.gb6r(),"A game by the family",t,this.c.a))},
$S:0}
C.e1p.prototype={
$0(){return this.a.OM(this.b)},
$S:0}
C.e1q.prototype={
$0(){return this.a.XM(0,this.b)},
$S:0}
C.e1h.prototype={
$0(){return this.a.OM(null)},
$S:0}
C.e1i.prototype={
$0(){return this.a.L(x.q).f.U(D.fhK)},
$S:0}
C.bRV.prototype={
$0(){var w=this.a
w.d=D.b05
w.z=3},
$S:0}
C.bRW.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aPP()}else w.m(new C.bRU(w))},
$S:11}
C.bRU.prototype={
$0(){return this.a.z--},
$S:0}
C.bRL.prototype={
$0(){var w=this.a
w.d=D.acC
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bRM.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bRK(w))
if(w.as<=0){d.a1(0)
w.b6n(-1)}},
$S:11}
C.bRK.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bRR.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.WG},
$S:0}
C.bRS.prototype={
$0(){return this.a.e++},
$S:0}
C.bRO.prototype={
$0(){var w=this.a
w.d=D.b06
w.ay=this.b},
$S:0}
C.bRP.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bRT.prototype={
$2(d,e){return B.o.aS(e.b,d.b)},
$S:1971}
C.bRQ.prototype={
$0(){return this.a.L0(this.b)},
$S:0}
C.bRN.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).hU()},
$S:0}
C.bRl.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.aw()
s=A.a([new A.au(new A.ba(s,B.b6,B.aQ),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.J)(t),++v){u=t[v]
s.push(new A.au(new A.ba(u,B.b6,B.aQ),r))}return s},
$S:1972}
C.bRm.prototype={
$0(){return this.a.gD3().c.push(C.h5R(null,0,20,""))},
$S:0}
C.bRw.prototype={
$1(d){var w=null
return A.bt(w,new A.b6(4,A.m(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dl,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.VB,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:274}
C.bRv.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gD3().c,m=this.b,l=n[m],k=o.ceZ(l),j=B.c.j(0.06),i=A.m(18),h=A.L(B.aT,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.KM,p,p,p),B.b5],g)
if(n.length>1)f.push(A.aG(p,p,p,p,B.ar4,p,p,p,new C.bRq(o,m),p,p,p,p,p,p))
n=J.a7(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.i,0,p,p),A.aM(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bRr(l),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dg,!0,B.a5,p,B.ao,p,p,p,p),B.U],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aD_[v]
t=D.aCG[v]
s=v+1
f.push(new A.D(B.eM,new A.c6(B.aL,B.e,B.i,B.l,p,B.p,p,0,A.a([A.d(u,p,p,p,p,p,p,new A.G(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.ae,new A.bz(1,B.bc,A.aM(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bRs(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dg,!0,B.a5,p,B.ao,p,p,p,p),p),new Av.Pi(v,l.c,new C.bRt(o,l),p,!1,D.lC,p,p,p,p,p,!1,!1,p,I.b0v,p,p,p,p,p,w)],g),p),p))}f.push(D.fJE)
f.push(B.an)
n=A.a([D.fDf,B.ae],g)
for(r=0;r<3;++r){q=D.cds[r]
n.push(new A.D(B.fA,A.jv(p,p,p,A.d(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bRu(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.i,0,p,p))
return A.q(p,A.x(f,B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(j,p,h,i,p,p,B.n),p,p,p,B.kS,B.bi,p,p,p)},
$S:154}
C.bRq.prototype={
$0(){var w=this.a
return w.m(new C.bRp(w,this.b))},
$S:0}
C.bRp.prototype={
$0(){return B.d.cC(this.a.gD3().c,this.b)},
$S:0}
C.bRr.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bRs.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bRt.prototype={
$1(d){return this.a.m(new C.bRo(this.b,d))},
$S:148}
C.bRo.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bRu.prototype={
$1(d){return this.a.m(new C.bRn(this.b,this.c))},
$S:9}
C.bRn.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2Q.prototype={
$0(){var w=this.a
w.wt()
w.a.bv()
w.a.qn()},
$S:0}
C.e2P.prototype={
$0(){var w=this.a
w.wt()
w.a.bv()
w.a.qn()},
$S:0}
C.e2S.prototype={
$0(){var w=this,v=w.b
if(J.cI(v)||J.cr(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e2T.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2U.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e2O.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e2R.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e2W.prototype={
$0(){this.a.P7()
return null},
$S:0}
C.e2V.prototype={
$0(){return this.a.F1(this.b)},
$S:0}
C.e2g.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bN(!1,B.dn,w,w,!0,w,w,w,new C.e2e(d),w,w),r=A.bp(B.bR,w,w,w,w,w,w,w,w,w,w,w)
return A.eg(A.a([s,A.bI(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e2f(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e2e.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.e2f.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.e2h.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cNU(this.b)},
$S:0}
C.e2b.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aVm(w.b,w.c,w.d)},
$S:7}
C.e1D.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e1E.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e1V.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Hj(t.a.c),$async$$0)
case 2:s=r.nA(q.dI(e,new C.e1T(t)))
if(s!=null&&t.c!=null)t.m(new C.e1U(t,s))
t.a.bv()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e1T.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e1U.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e1W.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e1X.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2a.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cOG(C.hAM(w),w)},
$S:0}
C.e1S.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.Wf(u,w,C.aQN(u,w),new C.e1R(v),null)},
$S:z+37}
C.e1R.prototype={
$1(d){return this.bnP(d)},
bnP(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.e1Q(s,d))
w=3
return A.b(s.ut(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:546}
C.e1Q.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.beQ(this.b)},
$S:0}
C.e27.prototype={
$1(d){return d.as},
$S:z+1}
C.e28.prototype={
$1(d){var w=this
return new A.dY(new C.e26(w.a,w.b,w.c,w.d,w.e),null)},
$S:20}
C.e26.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.ed:B.c,h=A.m(26),g=A.L(B.bR.j(0.5),B.r,1.5),f=A.q(k,D.bTA,B.f,k,k,new A.p(B.bR.j(0.18),k,k,k,k,k,B.a7),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.as,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a2,k,k,k,A.l(k,k,j?B.bu:B.br,k,k,k,k,k,k,k,k,12.5,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.i,0,B.p),1)
f=A.A(A.a([f,B.bd,a0,A.aG(k,k,k,k,A.X(B.cz,j?B.bu:B.br,k,k,k,k),k,k,k,new C.e20(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.i,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.br,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.J)(v),++s){r=v[s]
q=t.a===r?B.bR:B.bR.j(0.1)
p=new A.aN(20,20)
o=t.a===r
n=new A.ay(B.bR,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bR
a0.push(A.aA(k,A.cT(k,A.d(m,k,k,k,k,k,k,new A.G(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b4,new A.p(q,k,new A.bG(n,n,n,n),new A.be(p,p,p,p),k,k,B.n),B.h1,k,k,k,k,B.Cf,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e21(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bU(B.bG,a0,B.bs,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c4x,new A.D(D.bDT,f,k),new A.D(D.bDK,e,k),new A.D(B.rU,a0,k),new A.D(X.amo,A.d(v,k,k,k,k,k,k,A.l(k,k,j?B.bu:B.br,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(Ak.aoZ,j?B.bu:B.br,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bDM,A.A(A.a([a0,B.au,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.as,k,k,k,k,k,k,k,k,k,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.b8W(k,B.bR,k,k,!1,B.y,k,k,k,k,k,k,new C.e22(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.i,0,k,k),k))}f.push(B.aB)
j=A.m(20)
e=A.a([new A.ac(0,B.G,B.aE.j(0.35),B.j8,12)],x.V)
f.push(A.aA(k,A.q(k,A.A(A.a([D.fDB,B.bd,D.bIc,D.bUf],w),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.p(k,k,k,j,e,D.c8d,B.n),k,k,k,B.hV,B.bF,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e23(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.yL,A.A(A.a([A.E(A.dU(B.dn,new C.e24(a1),k),1),B.au,A.E(A.bI(M.aXb,k,new C.e25(t,a1),A.bp(B.bR,k,k,k,k,k,B.co,k,k,k,k,k)),1)],w),B.l,k,B.e,B.i,0,k,k),k))
return A.bm(!0,A.q(k,A.cd(A.x(f,B.E,k,B.e,B.Q,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.aq,k,k,new A.p(i,k,g,h,k,k,B.n),k,k,k,B.yA,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:85}
C.e20.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.e21.prototype={
$0(){return this.b.$1(new C.e2_(this.a,this.c))},
$S:0}
C.e2_.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e22.prototype={
$1(d){var w=this.a
w.m(new C.e1Y(w,d))
this.b.$1(new C.e1Z())},
$S:9}
C.e1Y.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e1Z.prototype={
$0(){},
$S:0}
C.e23.prototype={
$0(){var w=this.a.a
A.a5(this.b,!1).O(new A.aHw(!0,w))
return null},
$S:0}
C.e24.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.e25.prototype={
$0(){var w=this.a.a
A.a5(this.b,!1).O(new A.aHw(!1,w))
return null},
$S:0}
C.e29.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cOu(this.b.b)
w.r.a8(0)},
$S:0}
C.e1r.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.aiS(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hu5(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e1s.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aFR(w)},
$S:0}
C.e2j.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aeb(this.b,w,this.c,null)},
$S:z+39}
C.e2d.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.ed:B.c,t=A.m(20),s=A.X(B.lN,B.aY,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.as,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.br,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.af,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.br,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.l,w,B.e,B.Q,0,B.p)
return A.eg(A.a([A.bI(D.fVn,w,new C.e2c(d),A.bp(B.aY,w,w,w,w,w,w,w,w,w,w,w))],o),B.bb,w,u,v,w,s,w,new A.b9(t,B.a1),r,w)},
$S:18}
C.e2c.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.e1t.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e1u.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e1v.prototype={
$1(d){return d.a},
$S:z+8}
C.e1w.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.J)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hU(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aFR(w)},
$S:0}
C.e1A.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.aiS(q)
w=A.U(q).k("Y<1>")
q=A.C(new A.Y(q,new C.e1y(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hu5(v.e,null,r,v.f,v.r,new C.e1z(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e1z.prototype={
$0(){return this.a.ab1(this.b)},
$S:0}
C.e1y.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e1B.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("N<1,hU>")
w=A.C(new A.N(w,new C.e1x(this.b),v),v.k("ak.E"))
u.d=t.aFR(w)},
$S:0}
C.e1x.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e2i.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e1N.prototype={
$1(d){return d.length!==0},
$S:3}
C.e1O.prototype={
$1(d){var w=this
return new A.dY(new C.e1M(w.a,w.b,w.c,w.d),null)},
$S:20}
C.e1M.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.ed:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.as,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.br,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.br,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.N(o,new C.e1I(u,e,o),A.U(o).k("N<1,v>")))
p.push(B.U)
u=w.d
p.push(A.aM(v,B.Z,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bt(v,new A.b6(4,A.m(12),B.dq),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ak,v,v,v,v,v,B.mA,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.ao,v,v,v,v))
p=A.x(p,B.al,v,B.e,B.Q,0,B.p)
t=w.a
return A.eg(A.a([A.bN(!1,B.dn,v,v,!0,v,v,v,new C.e1J(d),v,v),A.bI(B.KX,v,new C.e1K(t,u,o,e),A.bp(B.bR,v,v,v,v,v,v,v,v,v,v,v)),A.bI(D.fI1,v,new C.e1L(t,u,o,d),A.bp(B.aY,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a6(360,v,p,v),v,v,v,v,r,v)},
$S:203}
C.e1I.prototype={
$1(d){var w=null
return A.dG(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.as,w,w,w,w,w,w,w,w,w,w,w,B.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aG(w,w,w,w,D.c1n,w,w,w,new C.e1H(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1973}
C.e1H.prototype={
$0(){return this.a.$1(new C.e1F(this.b,this.c))},
$S:0}
C.e1F.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.e1J.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.e1K.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e1G(w.c,u))
v.bP(0,B.ce)}},
$S:0}
C.e1G.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e1L.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a5(w.d,!1).O(!0)},
$S:0}
C.e1P.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cP8(this.b,D.uz,C.Hh(v,w.a.c))},
$S:0}
C.e2q.prototype={
$1(d){return d.as},
$S:z+1}
C.e2r.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j0(this.b,w)},
$S:0}
C.e2s.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.irr(v)
return w.Wz(v==null?null:v.a)},
$S:0}
C.e2t.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.i26(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aS(1/0,e.a,e.b)
s=A.aS(1/0,e.c,e.d)
l.cwm(new A.av(u,t),v.gblw(),new A.av(k,s))}k=A.m(22)
s=this.b.a
r=s?D.d16:D.d_k
q=A.L(s?B.dl:D.bju,B.r,1)
p=A.m(22)
o=A.bR(0,A.b4(m,m,m,new C.bfz(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.q(m,A.by(p,new A.an(B.a0,m,B.ad,B.t,A.a([o,A.bR(0,A.uZ(new A.R(n,n,n,n),new A.a6(u,t,new C.bgu(l.d,v,l.f,w,new C.e2m(l),l.gcga(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ap(10,new C.byh(s,new C.e2n(l,e),new C.e2o(l,e),new C.e2p(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.p(m,m,q,k,m,new A.a9(B.b7,B.b9,B.x,r,m,m),B.n),m,m,m,A_.alw,m,m,m,m)},
$S:238}
C.e2m.prototype={
$1(d){var w=this.a
w.m(new C.e2k(w,d))},
$S:2}
C.e2k.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.J(0,v)},
$S:0}
C.e2n.prototype={
$0(){var w=this.b
return this.a.bd_(1.25,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e2o.prototype={
$0(){var w=this.b
return this.a.bd_(0.8,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e2p.prototype={
$0(){var w=this,v=w.b
return w.a.aVm(new A.av(A.aS(1/0,v.a,v.b),A.aS(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gblw())},
$S:0}
C.e2u.prototype={
$0(){var w=this.a
return w.m(new C.e2l(w))},
$S:0}
C.e2l.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e1C.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fF(new A.fw(s.c)),$async$$0)
case 2:t.yt("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dgA.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ap(w,new C.bkj(u,C.hF5(v.c,u),new C.dgz(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dgz.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dgB.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ap(w,new C.bnD(d.d,d.c,u.f.q(0,d.a),new C.dgy(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dgy.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fGG.prototype={
$1(d){var w,v=d.e
if(this.a.al(0,v))return v
v=this.b
w=A.U(v)
return A.nA(new A.cM(new A.Y(v,new C.fGH(d),w.k("Y<1>")),new C.fGI(),w.k("cM<1,n>")))},
$S:z+19}
C.fGH.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fGI.prototype={
$1(d){return d.a},
$S:z+8}
C.fGE.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fGF.prototype={
$1(d){return d.b},
$S:z+8}
C.fGL.prototype={
$1(d){var w,v=d.e
if(this.a.al(0,v))return v
v=this.b
w=A.U(v)
return A.nA(new A.cM(new A.Y(v,new C.fGM(d),w.k("Y<1>")),new C.fGN(),w.k("cM<1,n>")))},
$S:z+19}
C.fGM.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fGN.prototype={
$1(d){return d.a},
$S:z+8}
C.fGJ.prototype={
$1(d){var w,v=A.ez([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.al(0,w)&&v.J(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fGK.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dgD.prototype={
$0(){return this.a},
$S:z+46}
C.dgU.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.al(0,d)},
$S:252}
C.dgM.prototype={
$2(d,e){var w=this.a.c3(0,d,new C.dgN()),v=J.a7(w)
if(!v.q(w,e))v.J(w,e)},
$S:122}
C.dgN.prototype={
$0(){return A.a([],x.s)},
$S:763}
C.dgL.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eG(w,e)
return w===!0},
$S:296}
C.dgE.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dgK.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dgJ.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.J(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aU(v==null?D.Dw:v)
u=1
while(v.C())u+=s.$2(v.gR(v).a,e)
v=s.b.h(0,d)
v=J.aU(v==null?B.Z:v)
while(v.C()){t=v.gR(v)
if(e.q(0,t))continue
e.J(0,t)
t=w.h(0,t)
t=J.aU(t==null?D.Dw:t)
while(t.C())u+=s.$2(t.gR(t).a,e)}return u},
$S:1975}
C.dgF.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dgO.prototype={
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
t=J.aU(t==null?D.Dw:t)
while(t.C()){r=t.gR(t)
if(r.a!==a9&&!B.d.aV(w,new C.dgP(r)))w.push(r)}}B.d.bt(w,new C.dgQ(a8))
B.d.aZ(w,new C.dgR())
q=C.i25(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.J)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eTT],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.bqK(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:1976}
C.dgP.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dgQ.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dgR.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.dgS.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a7(n),v=o.c,u=-1/0,t=0;t<w.gI(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b8(v,A.a4(v).k("b8<2>")).cJ(0,0,B.q2)+88-w.gH(n).a}else u=0
for(w=J.a7(n),v=o.c,t=0;t<w.gI(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:705}
C.dgT.prototype={
$1(d){return 16+d*156},
$S:171}
C.dgC.prototype={
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
$S:193}
C.dgG.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aKD(new A.o(v.a,v.b+28),new A.o(w.a,w.b+28),!0,null))},
$S:122}
C.dgH.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dgI.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:764}
C.dgV.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:764}
C.dgW.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:466}
C.dgX.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:187}
C.dgY.prototype={
$1(d){return d>=0.5},
$S:120}
C.fm8.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hb(A.aP(!1,v,!0,new A.a6(38,38,A.X(d,this.a.c?B.c:B.cr,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1978}
C.eXh.prototype={
$1(d){var w=null,v=A.m(8),u=B.bR.j(0.12),t=A.m(8)
return new A.D(B.n_,A.aP(!1,v,!0,A.q(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fti,B.K,w,w),B.f,w,w,new A.p(u,w,w,t,w,w,B.n),w,w,w,w,B.Oj,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eXg(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eXg.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dwR.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dwQ.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nW,B.K,w,w)
return A.eg(A.a([A.bN(!1,B.dn,w,w,!0,w,w,w,new C.dwO(d),w,w),A.bN(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.mO,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dwP(d),w,w)],x.p),B.bb,B.Cc,w,u,D.bEN,w,D.bGL,new A.b9(v,B.a1),w,w)},
$S:18}
C.dwO.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dwP.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dx_.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dx0.prototype={
$1(d){var w=this.a
return w.m(new C.dwZ(w,d))},
$S:z+49}
C.dwZ.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dx1.prototype={
$1(d){var w=null
return A.qI(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dx4.prototype={
$1(d){var w=this.a
return w.m(new C.dwY(w,d))},
$S:35}
C.dwY.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dx3.prototype={
$1(d){var w=null
return A.qI(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dx5.prototype={
$1(d){var w=this.a
return w.m(new C.dwX(w,d))},
$S:35}
C.dwX.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dx6.prototype={
$0(){var w=this.a
return w.m(new C.dwW(w))},
$S:0}
C.dwW.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dx7.prototype={
$0(){var w=this.a
return w.m(new C.dwV(w))},
$S:0}
C.dwV.prototype={
$0(){return++this.a.at},
$S:0}
C.dx8.prototype={
$0(){var w=this.a
return w.m(new C.dwU(w))},
$S:0}
C.dwU.prototype={
$0(){return--this.a.ax},
$S:0}
C.dx9.prototype={
$0(){var w=this.a
return w.m(new C.dwT(w))},
$S:0}
C.dwT.prototype={
$0(){return++this.a.ax},
$S:0}
C.dxa.prototype={
$1(d){var w=this.a
return w.m(new C.dwS(w,d))},
$S:9}
C.dwS.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dx2.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dxb.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bR.j(0.18)
else w=q.c.a?B.ed:B.c
v=A.m(12)
if(p)u=B.bR
else u=(q.c.a?B.eg:B.bP).j(0.85)
u=A.L(u,B.r,p?1.5:1)
if(p)t=B.bR
else t=q.c.a?B.bu:B.br
t=A.X(f,t,r,r,r,18)
if(p)s=B.bR
else s=q.c.a?B.bu:B.br
return A.E(A.aI(!1,B.a3,!0,r,A.aP(!1,o,!0,A.cT(r,A.x(A.a([t,B.ax,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.i,0,B.p),r,r,B.b4,new A.p(w,r,u,v,r,r,B.n),B.eH,r,r,r,r,B.k2,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dxc(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
$S:z+51}
C.dxc.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dxl.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.ceF.prototype={
$2(d,e){return new A.bB(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:98}
C.ceM.prototype={
$1(d){return d.aj()},
$S:z+5}
C.ceN.prototype={
$2(d,e){var w=J.b7(e,new C.ceL(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bB(d,w,x.d2)},
$S:z+53}
C.ceL.prototype={
$1(d){return d.aj()},
$S:z+12}
C.ceH.prototype={
$1(d){return C.am3(A.a3(d,x.N,x.z))},
$S:z+9}
C.ceI.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.ceJ.prototype={
$1(d){return C.hkU(A.a3(d,x.N,x.z))},
$S:z+11}
C.ceK.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.ceR.prototype={
$1(d){return new A.aHI(d.f.length,d.a,d.b)},
$S:z+55}
C.ceS.prototype={
$2(d,e){return B.a.aS(d.c,e.c)},
$S:650}
C.ceO.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.ceP.prototype={
$1(d){return d.cO6(C.Hh(d,this.a))},
$S:z+85}
C.e2D.prototype={
$1(d){return C.uv(d,this.a.a.c)},
$S:z+3}
C.e2E.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e2I.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e2J.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e2A.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b15(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z1("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pu(r.c,r.e),$async$$0)
case 4:s.z1(p)
w=5
return A.b(s.K5(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e2B.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b15(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z1("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pu(r.c,r.e),$async$$0)
case 4:s.z1(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e2C.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Wi(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.z1("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.z1("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.z1("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.K5(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.z1(B.a.em(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e2H.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b14(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.z1("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a5(r,!1).cd(A.ec(new C.e2G(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pu(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e2G.prototype={
$1(d){var w=this.b
return new C.a0r(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e2F.prototype={
$1(d){return D.hxe},
$S:z+58}
C.e2L.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.e2M.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e2K(w,d)
return new A.D(B.d3,new C.bgy(this.b,d.c,d.a,w,null),null)},
$S:1979}
C.e2K.prototype={
$0(){return this.a.Yp(this.b.b)},
$S:0}
C.e2v.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e2w.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e2x.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e2y.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e2z.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.e2N.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.cS(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a5(this.b,!1).O(s)
return}},
$S:188}
C.dOY.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dOZ.prototype={
$0(){return B.d.gH(D.a6b)},
$S:z+60}
C.dP_.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b4(A.at(A.X(this.b.d,B.c.j(0.95),w,w,D.d7V,44),w,w,w),w,w,new C.blq(u,t,v,w),B.az)},
$S:64}
C.fXv.prototype={
$1(d){return A.pe(new C.fXu(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:142}
C.fXu.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.ed:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.to,24)],x.V),o=r?B.eg:B.bP
o=A.q(t,t,B.f,t,t,new A.p(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aY.j(0.25),B.bR.j(0.18)],x.O)
w=A.q(t,D.bWE,B.f,t,t,new A.p(t,t,t,A.m(12),t,new A.a9(B.a6,B.aa,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.as,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.q(t,A.x(A.a([B.X,o,new A.D(E.amt,A.A(A.a([w,B.bd,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bu:B.br,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.i,0,B.p),1)],u),B.l,t,B.e,B.i,0,t,t),t),A.E(A.io(!0,t,e,B.y,D.ffP,new C.fXt(this.b,s),20,B.am2,t,B.ah,!1),1)],u),B.l,t,B.e,B.i,0,B.p),B.f,t,t,new A.p(q,t,t,B.l7,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:118}
C.fXt.prototype={
$2(d,e){var w=null,v=D.a6b[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.L(s?B.eg:B.bP,B.r,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.et,8)],x.V),p=A.m(15),o=A.E(new C.a7e(v.a,!0,w),1),n=s?B.jX:B.jj,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aP:B.as,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aI(!1,B.a3,!0,w,A.aP(!1,u,!0,A.eJ(A.by(p,A.x(A.a([o,A.q(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bu:B.br,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.i,0,B.p),B.f,n,w,w,w,w,w,w,B.k3,w,w,w)],l),B.al,w,B.e,B.i,0,B.p),B.aq),w,new A.p(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fXs(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)},
$S:81}
C.fXs.prototype={
$0(){A.a5(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.co9.prototype={
$0(){return this.a.ahg(this.b)},
$S:0}
C.fWT.prototype={
$1(d){return D.hs3},
$S:z+61}
C.h3u.prototype={
$1(d){var w=this
return new C.a2e(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.fWX.prototype={
$1(d){return new C.a_5(this.a,null)},
$S:z+63}
C.fWW.prototype={
$1(d){return D.ht4},
$S:z+64}
C.d89.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d8a.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d88(w,d))},
$S:35}
C.d88.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d8b.prototype={
$1(d){return this.a.KJ()},
$S:2}
C.d8c.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d85.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d86.prototype={
$1(d){return this.a.KJ()},
$S:2}
C.d87.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cGw.prototype={
$0(){},
$S:0}
C.cGC.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cGD.prototype={
$0(){return this.a.aQH(-1)},
$S:0}
C.cGE.prototype={
$1(d){return this.a.m(new C.cGB())},
$S:2}
C.cGB.prototype={
$0(){},
$S:0}
C.cGF.prototype={
$0(){return this.a.aQH(1)},
$S:0}
C.cGG.prototype={
$1(d){return this.a.m(new C.cGA())},
$S:2}
C.cGA.prototype={
$0(){},
$S:0}
C.cGH.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aY.j(0.2)
if(s)v=B.aY
else v=this.b.a?B.eg:B.bP
return A.uS(u,u,B.b1,r,u,new C.cGz(t,d),B.wm,s,w,u,new A.ay(v,1,B.r,-1),B.cf)},
$S:1980}
C.cGz.prototype={
$1(d){var w=this.a
return w.m(new C.cGx(w,this.b))},
$S:9}
C.cGx.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cGI.prototype={
$1(d){return this.a.m(new C.cGy())},
$S:2}
C.cGy.prototype={
$0(){},
$S:0}
C.cGJ.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.flE.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a5(this.b,!1).O(w)},
$S:2}
C.flF.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.flG.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a5(this.b,!1).O(w)},
$S:0}
C.flC.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbCO()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b4(new A.D(D.bGK,new A.em(A.q(r,q.a.c,B.f,r,r,new A.p(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.by6(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:64}
C.flD.prototype={
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
return A.aI(!1,B.a3,!0,p,A.aP(!1,v,!0,A.eJ(D.erF,r,new A.p(r,r,A.L(B.c.j(0.4),B.r,1.5),u,r,new A.a9(new A.da(-1.2+t,-0.5),new A.da(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
$S:134}
C.fVg.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:62}
C.eUr.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eUi.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eUj.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eUp.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.dY(new C.eUo(w,this.b),null)},
$S:20}
C.eUo.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.ed:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.as,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eO(w,u,new A.D(B.amm,A.x(A.a([s,B.an,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.br,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hqV(new C.eUl(r,e),r.a),B.aB,A.A(A.a([A.E(A.dU(B.dn,new C.eUm(d),w),1),B.au,A.E(A.bI(B.VV,w,new C.eUn(r,d),A.bp(B.aY,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.i,0,w,w)],q),B.al,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d7,w,new A.b9(t,B.a1),w)},
$S:103}
C.eUl.prototype={
$1(d){return this.b.$1(new C.eUk(this.a,d))},
$S:35}
C.eUk.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eUm.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eUn.prototype={
$0(){var w=this.a.a
A.a5(this.b,!1).O(w)
return null},
$S:0}
C.eUq.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Tx(this.b)},
$S:0}
C.eUd.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.beW(w)},
$S:0}
C.eUh.prototype={
$1(d){return this.bob(d)},
bob(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.M4(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j0(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eUg.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.eUf(this.b),v),v.k("M.E"))
u.d=t.beW(w)},
$S:0}
C.eUf.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eUs.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j0(this.b,w)},
$S:0}
C.eUt.prototype={
$1(d){return this.a.bGY(d,this.b)},
$S:z+67}
C.eUe.prototype={
$0(){return this.a.ab0(this.b)},
$S:0}
C.h3h.prototype={
$1(d){return new C.aew(this.a,this.b,this.c,null)},
$S:z+68}
C.eUv.prototype={
$0(){return this.a.a0e(this.b)},
$S:0}
C.eUw.prototype={
$0(){return this.a.QK(this.b)},
$S:0}
C.eUx.prototype={
$0(){return this.a.EX(this.b)},
$S:0}
C.eUy.prototype={
$0(){return this.a.a0f(this.b)},
$S:0}
C.eUu.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eU8.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eU9.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eUa.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eUc.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qt(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eUb(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eUb.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eUV.prototype={
$2(d,e){return d+e.gxF()},
$S:z+71}
C.eUR.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eUS.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eUC.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.ed:B.c,s=A.m(24),r=A.q(v,D.bX6,B.f,v,v,new A.p(B.ay.j(u?0.18:0.08),v,A.L(B.ay.j(0.28),B.r,1),v,v,v,B.a7),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.as,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bu:B.br,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aP:B.as
u=u?B.eg:B.bP
w=x.p
return A.eO(v,t,new A.D(B.yN,A.x(A.a([r,B.aR,q,B.U,p,B.d8,A.A(A.a([A.E(A.dU(B.nY,new C.eUA(d),A.di(v,v,v,v,v,v,v,v,v,o,v,v,B.f3,v,new A.b9(A.m(14),B.a1),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.au,A.E(A.bI(D.fZg,v,new C.eUB(d),A.bp(B.ay,v,v,v,v,v,B.f3,v,new A.b9(A.m(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.i,0,v,v)],w),B.l,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.d7,v,new A.b9(s,B.a1),v)},
$S:47}
C.eUA.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.eUB.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.eUL.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.ed:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.h4,28)],x.V),g=k?D.df6:B.a5w,f=x.p
g=A.q(m,A.x(A.a([A.q(m,m,B.f,m,m,new A.p(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.f8W,B.ax,new A.bM(B.a6,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cD,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.i,0,B.p),B.f,m,m,new A.p(m,m,m,m,m,new A.a9(B.aA,B.aF,B.x,g,m,m),B.n),m,m,m,m,E.amq,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.br,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b7Q(B.b8,B.jp,new C.eUI(v,d),l,"Camera import","Scan QR"),1),B.au,A.E(v.b7Q(B.cy,R.zo,new C.eUJ(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.i,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.br,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.ay.j(k?0.14:0.06)
q=A.m(16)
p=A.L(B.ay.j(0.28),B.r,1)
o=A.q(m,D.bWs,B.f,m,m,new A.p(B.ay.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bW,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.as,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.br,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.i,0,B.p),1)
return A.bm(!0,new A.D(B.wh,A.q(m,A.x(A.a([g,new A.D(B.amn,A.x(A.a([w,B.X,u,B.by,t,B.X,A.aI(!1,B.a3,!0,m,A.aP(!1,s,!0,A.q(m,A.A(A.a([o,B.bd,n,A.X(B.eJ,k?B.bu:B.br,m,m,m,m)],f),B.l,m,B.e,B.i,0,m,m),B.f,m,m,new A.p(r,m,p,q,m,m,B.n),m,m,m,m,B.bF,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eUK(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)],f),B.E,m,B.e,B.i,0,B.p),m)],f),B.l,m,B.e,B.Q,0,B.p),B.aq,m,m,new A.p(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:25}
C.eUI.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.w3("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eUJ.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.w3("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eUK.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.Oo(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eUG.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.ed:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.f_,24)],x.V),k=o?B.eg:B.bP
k=A.q(q,q,B.f,q,q,new A.p(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bu:B.br
u=A.by(w,new A.a6(48,48,C.aS3(!0,A.m(12),48,P.OZ,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aP:B.as,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Bq(v.gxF())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.wh,A.q(q,A.x(A.a([B.X,k,new A.D(D.amk,A.A(A.a([u,B.bd,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bu:B.br,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.i,0,B.p),1)],s),B.l,q,B.e,B.i,0,q,q),q),B.C3,r.cqr(B.uU,B.aY,new C.eUE(d),p,"QR code or backup file","Transfer project"),r.b4R(!0,B.eh,B.ay,new C.eUF(d),p,"Remove from this device","Delete project"),B.X],s),B.l,q,B.e,B.Q,0,B.p),B.f,q,q,new A.p(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:25}
C.eUE.prototype={
$0(){A.a5(this.a,!1).O("transfer")
return null},
$S:0}
C.eUF.prototype={
$0(){A.a5(this.a,!1).O("delete")
return null},
$S:0}
C.eUH.prototype={
$1(d){return this.boc(d)},
boc(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.M4(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wi(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eUY.prototype={
$0(){var w=this.a
w.a.bv()
w.m(new C.eUX(w))},
$S:0}
C.eUX.prototype={
$0(){return this.a.r++},
$S:0}
C.eUZ.prototype={
$0(){var w=this.a
return w.m(new C.eUW(w))},
$S:0}
C.eUW.prototype={
$0(){return this.a.r++},
$S:0}
C.eUz.prototype={
$0(){var w=this.a.c
w.toString
return A.j0(w,null)},
$S:0}
C.eUD.prototype={
$0(){return this.a.cjI(this.b)},
$S:0}
C.eUU.prototype={
$0(){var w=this.a
return w.m(new C.eUT(w,this.b))},
$S:0}
C.eUT.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eUO.prototype={
$0(){return this.a.w3("scan")},
$S:0}
C.eUP.prototype={
$0(){return this.a.w3("file")},
$S:0}
C.eUQ.prototype={
$1(d){return this.a.cqs(d,this.b)},
$S:z+72}
C.eUN.prototype={
$0(){return this.a.F0(this.b)},
$S:0}
C.eUM.prototype={
$0(){return this.a.a0K(this.b,this.c)},
$S:0}
C.cFR.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cFQ.prototype={
$1(d){return d.aj()},
$S:z+74}
C.cFO.prototype={
$1(d){return C.hLb(A.a3(d,x.N,x.z))},
$S:z+75}
C.cFP.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fFy.prototype={
$1(d){return d.y===D.kV},
$S:z+3}
C.h43.prototype={
$1(d){return C.aQN(d,this.a)},
$S:z+3}
C.fD6.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bSq.prototype={
$1(d){return!d.as},
$S:z+1}
C.bSp.prototype={
$1(d){return d.aj()},
$S:z+23}
C.bSm.prototype={
$1(d){return C.hkW(A.a3(d,x.N,x.z))},
$S:z+24}
C.bSn.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bSo.prototype={
$1(d){return J.k(d)},
$S:17}
C.fts.prototype={
$2(d,e){return e.e.aS(0,d.e)},
$S:z+25}
C.fpc.prototype={
$1(d){return C.haF(A.a3(d,x.N,x.z))},
$S:z+79}
C.fpd.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fpe.prototype={
$2(d,e){return e.e.aS(0,d.e)},
$S:z+25}
C.fWH.prototype={
$1(d){return J.k(d)},
$S:17}
C.fWI.prototype={
$1(d){return d.a},
$S:z+81}
C.fWJ.prototype={
$1(d){return d.length!==0},
$S:3}
C.fWK.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.fWL.prototype={
$1(d){return d.Tx(null).aj()},
$S:z+82}
C.h41.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fG1.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fJc.prototype={
$1(d){return C.am3(A.a3(d,x.N,x.z))},
$S:z+9}
C.fJd.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fJe.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fJf.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fJg.prototype={
$1(d){return C.uv(d,this.a)},
$S:z+3}
C.fWu.prototype={
$1(d){return C.uv(d,this.a)},
$S:z+3}
C.h3X.prototype={
$1(d){return C.am3(A.a3(d,x.N,x.z))},
$S:z+9}
C.h3Y.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.h3Z.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fFJ.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fFK.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.h47.prototype={
$1(d){return!d.as},
$S:z+1}
C.fFd.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fFe.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fFf.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.h3v.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fK2.prototype={
$1(d){return d.Q},
$S:z+15}
C.fWn.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fJ9.prototype={
$1(d){return C.am3(A.a3(d,x.N,x.z))},
$S:z+9}
C.fJa.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fJb.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fWi.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fpN.prototype={
$1(d){return d.length!==0},
$S:3}
C.fpO.prototype={
$1(d){return C.hkW(A.a3(d,x.N,x.z))},
$S:z+24}
C.fpP.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fpQ.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fpR.prototype={
$1(d){return d.length!==0},
$S:3}
C.fq3.prototype={
$2(d,e){return d.eN(new C.fq4(e))},
$S:1981}
C.fq4.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.cd},
$S:1982}
C.fq0.prototype={
$1(d){return C.i7a(d,this.a)},
$S:z+84}
C.fq1.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fq2.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fu9.prototype={
$1(d){return d.a},
$S:z+56}
C.fua.prototype={
$1(d){return d.length!==0},
$S:3}
C.fub.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fx6.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fCm.prototype={
$1(d){return C.hwt(d,C.Hh(d,this.a))},
$S:z+5}
C.fCn.prototype={
$1(d){return C.hwu(d,C.Hh(d,this.a))},
$S:z+5};(function aliases(){var w=C.aBw.prototype
w.bw1=w.t
w=C.azK.prototype
w.bvX=w.t
w=C.aGW.prototype
w.bwp=w.t
w=C.aBx.prototype
w.bw2=w.t
w=C.aBz.prototype
w.bw3=w.t
w=C.aBA.prototype
w.bw4=w.t
w=C.aN4.prototype
w.byT=w.t
w=C.aPb.prototype
w.bBc=w.t
w=C.aPc.prototype
w.bBd=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aEw.prototype,"gcnm","cnn",28)
var r
w(r=C.aBv.prototype,"gcgg","cgh",65)
v(r,"gaOT","NW",0)
v(r,"gcvI","Bm",0)
v(r,"gbOJ","OC",0)
v(r,"gcK5","z2",0)
v(r,"gcpp","a1r",0)
v(r,"gbK7","Ok",0)
v(r,"gbP8","XR",0)
w(r,"gbUe","bUf",78)
v(r,"gbEt","Al",0)
v(C.aBy.prototype,"gcK1","FT",0)
v(r=C.alT.prototype,"gbsn","bso",2)
v(r,"gbsf","bsg",2)
v(r,"gcLa","cLb",2)
u(r,"gqm","kN",0)
u(r=C.ak5.prototype,"geY","fX",2)
w(r,"gcbU","cbV",27)
u(C.auP.prototype,"gqm","kN",0)
v(r=C.ayM.prototype,"gcWJ","cWK",2)
u(r,"gqm","kN",0)
u(C.aKI.prototype,"gbsl","bsm",2)
v(C.am1.prototype,"gBQ","cLn",2)
u(r=C.am_.prototype,"gcM3","cM4",2)
u(r,"gqm","kN",0)
v(r=C.alW.prototype,"gbrd","bre",2)
v(r,"gcRf","cRg",2)
u(r=C.alY.prototype,"geY","fX",2)
u(r,"gix","cKH",2)
v(r=C.alU.prototype,"gcKw","cKx",2)
u(r,"gbq5","jH",2)
v(r=C.aF4.prototype,"gagT","wj",0)
v(r,"gciY","a0B",0)
v(r,"gaT4","Is",0)
v(r=C.aF1.prototype,"gcG_","a3z",0)
v(r,"gagT","wj",0)
v(r,"gctJ","a25",0)
v(r,"gciT","b34",2)
v(r,"gcjV","a0P",0)
w(r,"gcga","cgb",35)
v(r,"gbP0","Ix",0)
v(r,"gcH4","cH5",2)
v(r,"gc63","Zy",0)
w(r,"gceF","ceG",36)
v(r,"gciH","ciI",2)
v(r=C.aDv.prototype,"gcc_","Qh",0)
v(r,"gcc1","cc2",2)
v(r,"gbLC","aaD",0)
v(r=C.aF3.prototype,"gbSD","Yl",0)
v(r,"gc2b","Z0",0)
v(r,"gcA7","a2X",0)
v(r,"gcwh","a2y",0)
v(C.aF2.prototype,"gcw0","aiH",0)
v(C.au0.prototype,"gceD","a0c",0)
v(C.aAf.prototype,"ga3i","KJ",2)
v(C.aAe.prototype,"ga3i","KJ",2)
v(C.ayZ.prototype,"ga3i","KJ",2)
v(r=C.aGx.prototype,"gb4e","Rg",0)
v(r,"gbDh","Wt",0)
v(r,"gcjJ","cjK",2)
w(C.aGw.prototype,"gcfv","cfw",69)
t(C.aGy.prototype,"gaT_",0,0,null,["$1","$0"],["Ir","bMV"],70,0,0)
s(C,"hE9","ihk",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aE,[C.apB,C.uP,C.nw,C.Ip,C.afH,C.KM,C.uQ,C.bSW,C.te,C.boV,C.ama,C.adP,C.ls,C.bRx,C.auc,C.zE,C.akM,C.MK,C.ban,C.a9U,C.bhD,C.afO,C.azZ,C.afC,C.aKI,C.KT,C.GA,C.bgw,C.aKD,C.aqW,C.dgZ,C.lW,C.aV0,C.aV_,C.aT2,C.uh,C.ro,C.lD,C.hU,C.kT,C.aIB])
u(A.ht,[C.fNQ,C.fNP,C.fNR,C.fXo,C.fB0,C.fB1,C.fB6,C.fLz,C.fLy,C.fLx,C.c7F,C.fXV,C.fXN,C.fXZ,C.fFR,C.dPE,C.dPz,C.dPA,C.dPc,C.dP8,C.dPT,C.dPU,C.dPN,C.dPO,C.dPV,C.dPW,C.fGC,C.fJ6,C.fJ7,C.fWs,C.h3W,C.fFI,C.fX2,C.dgb,C.dfy,C.dfH,C.dfY,C.dfD,C.dfJ,C.dfA,C.dfN,C.dfO,C.dfM,C.dg2,C.dg1,C.dhZ,C.di_,C.di0,C.dgp,C.dgu,C.dgt,C.cOP,C.cOR,C.d7n,C.d7M,C.d7N,C.d7Q,C.d7S,C.d7T,C.d7U,C.d7W,C.d7X,C.bRh,C.bRb,C.ftR,C.h3P,C.h3Q,C.h3R,C.h3M,C.h3S,C.h3T,C.h3U,C.h3L,C.fHd,C.fVt,C.fD7,C.fK1,C.bMl,C.h4d,C.fVZ,C.bKw,C.bKr,C.bKt,C.bKs,C.cpQ,C.cpL,C.cpM,C.cpK,C.cpI,C.cpN,C.cPT,C.cEQ,C.cET,C.cER,C.cEU,C.cEV,C.f6p,C.fgy,C.bS3,C.bRY,C.bS1,C.bRF,C.e1b,C.e18,C.e19,C.e17,C.e1d,C.bRW,C.bRM,C.bRw,C.bRv,C.bRr,C.bRs,C.bRt,C.bRu,C.e2R,C.e2g,C.e2b,C.e1D,C.e1T,C.e1W,C.e1S,C.e1R,C.e27,C.e28,C.e22,C.e1r,C.e2j,C.e2d,C.e1t,C.e1u,C.e1v,C.e1A,C.e1y,C.e1x,C.e1N,C.e1O,C.e1I,C.e2q,C.e2m,C.dgA,C.dgB,C.fGG,C.fGH,C.fGI,C.fGE,C.fGF,C.fGL,C.fGM,C.fGN,C.fGJ,C.fGK,C.dgU,C.dgK,C.dgF,C.dgP,C.dgQ,C.dgT,C.dgH,C.dgW,C.dgX,C.dgY,C.fm8,C.eXh,C.dwQ,C.dx_,C.dx0,C.dx1,C.dx4,C.dx3,C.dx5,C.dxa,C.dxb,C.ceM,C.ceL,C.ceH,C.ceI,C.ceJ,C.ceK,C.ceR,C.ceO,C.ceP,C.e2D,C.e2G,C.e2F,C.e2M,C.e2N,C.dOY,C.fXv,C.fWT,C.h3u,C.fWX,C.fWW,C.d8a,C.d8b,C.d86,C.cGE,C.cGG,C.cGH,C.cGz,C.cGI,C.flE,C.fVg,C.eUp,C.eUl,C.eUh,C.eUf,C.eUt,C.h3h,C.eUC,C.eUL,C.eUG,C.eUH,C.eUQ,C.cFQ,C.cFO,C.cFP,C.fFy,C.h43,C.fD6,C.bSq,C.bSp,C.bSm,C.bSn,C.bSo,C.fpc,C.fpd,C.fWH,C.fWI,C.fWJ,C.fWK,C.fWL,C.h41,C.fG1,C.fJc,C.fJd,C.fJf,C.fJg,C.fWu,C.h3X,C.h3Y,C.h3Z,C.fFJ,C.fFK,C.h47,C.fFd,C.fFe,C.h3v,C.fK2,C.fWn,C.fJ9,C.fJa,C.fWi,C.fpN,C.fpO,C.fpP,C.fpQ,C.fpR,C.fq4,C.fq0,C.fq1,C.fu9,C.fua,C.fx6,C.fCm,C.fCn])
u(A.ax,[C.b_B,C.alR,C.aWk,C.ZL,C.bc8,C.QE,C.a6s,C.tF,C.Ir,C.bgu,C.bkj,C.byh,C.bnD,C.aea,C.bki,C.ae9,C.bkh,C.aDw,C.aJF,C.aeb,C.Gw,C.bgv,C.adq,C.bgt,C.bgy,C.b_z,C.au0,C.aew])
u(A.mk,[C.bcM,C.be_,C.bdR,C.aIw,C.bjk,C.boU,C.aWp,C.bcO,C.aBu,C.bch,C.bsW,C.bjs,C.biT,C.bj_,C.bgx,C.bfz,C.blq,C.by6])
u(A.iJ,[C.fXS,C.fXT,C.fXU,C.fXL,C.fXM,C.fXX,C.fXY,C.dPQ,C.dPC,C.dPF,C.dPj,C.dPk,C.dPl,C.dPi,C.dPq,C.dPh,C.dPr,C.dPs,C.dPg,C.dPt,C.dPf,C.dPu,C.dPe,C.dPv,C.dP6,C.dP7,C.dPd,C.dPw,C.dPb,C.dPx,C.dPa,C.dPm,C.dP9,C.dPn,C.dP5,C.dPo,C.dPp,C.dPR,C.dPS,C.dPG,C.dPH,C.dPI,C.dPJ,C.dPK,C.dPL,C.dPM,C.dPY,C.dPP,C.fGD,C.dfw,C.dfu,C.dfv,C.dfx,C.dga,C.dg_,C.dfX,C.dfz,C.dg0,C.dfF,C.dfG,C.dfI,C.dfZ,C.dfE,C.dfK,C.dg7,C.dfU,C.dfT,C.dfV,C.dfW,C.dfP,C.dfR,C.dfS,C.dfL,C.dg3,C.dg6,C.dfB,C.dfC,C.dhY,C.dhX,C.dhW,C.dhV,C.di1,C.dhU,C.di2,C.dgq,C.dgr,C.dgs,C.dgv,C.dgo,C.dgn,C.cOQ,C.d7m,C.d7z,C.d7y,C.d7O,C.d7x,C.d7P,C.d7w,C.d7v,C.d7R,C.d7u,C.d7H,C.d7G,C.d7Y,C.bRa,C.bRk,C.bRc,C.bRd,C.bRg,C.bRf,C.bRi,C.bRj,C.bRe,C.bR8,C.bR9,C.bSO,C.bSP,C.bSQ,C.bSR,C.bSS,C.bST,C.bSU,C.h3O,C.fVu,C.bKv,C.bKq,C.bKo,C.bKp,C.bKn,C.cpS,C.cpT,C.cpR,C.cpU,C.cpW,C.cpX,C.cpY,C.cpO,C.cEP,C.cEY,C.cEZ,C.cF_,C.cEX,C.cF0,C.cF1,C.cF2,C.cF3,C.cES,C.cEW,C.bSj,C.bSi,C.bSg,C.bSe,C.bSf,C.bSb,C.bSc,C.bSd,C.bSh,C.bSa,C.f6q,C.f6r,C.f6s,C.f6t,C.f6u,C.bS7,C.bS8,C.bS9,C.bS2,C.bS4,C.bS5,C.bS6,C.bRZ,C.bRJ,C.bRI,C.bRH,C.bRB,C.bRC,C.bRG,C.bRD,C.bRE,C.bRA,C.e1a,C.e1c,C.e15,C.e16,C.e14,C.e1e,C.e1f,C.e1g,C.e1j,C.e1k,C.e1l,C.e1m,C.e1n,C.e1o,C.e1p,C.e1q,C.e1h,C.e1i,C.bRV,C.bRU,C.bRL,C.bRK,C.bRR,C.bRS,C.bRO,C.bRP,C.bRQ,C.bRN,C.bRl,C.bRm,C.bRq,C.bRp,C.bRo,C.bRn,C.e2Q,C.e2P,C.e2S,C.e2T,C.e2U,C.e2O,C.e2W,C.e2V,C.e2e,C.e2f,C.e2h,C.e1E,C.e1V,C.e1U,C.e1X,C.e2a,C.e1Q,C.e20,C.e21,C.e2_,C.e1Y,C.e1Z,C.e23,C.e24,C.e25,C.e29,C.e1s,C.e2c,C.e1w,C.e1z,C.e1B,C.e2i,C.e1H,C.e1F,C.e1J,C.e1K,C.e1G,C.e1L,C.e1P,C.e2r,C.e2s,C.e2k,C.e2n,C.e2o,C.e2p,C.e2u,C.e2l,C.e1C,C.dgz,C.dgy,C.dgD,C.dgN,C.dgE,C.eXg,C.dwR,C.dwO,C.dwP,C.dwZ,C.dwY,C.dwX,C.dx6,C.dwW,C.dx7,C.dwV,C.dx8,C.dwU,C.dx9,C.dwT,C.dwS,C.dx2,C.dxc,C.dxl,C.e2E,C.e2I,C.e2J,C.e2A,C.e2B,C.e2C,C.e2H,C.e2L,C.e2K,C.e2v,C.e2w,C.e2x,C.e2y,C.e2z,C.dOZ,C.fXs,C.co9,C.d89,C.d88,C.d8c,C.d85,C.d87,C.cGw,C.cGC,C.cGD,C.cGB,C.cGF,C.cGA,C.cGx,C.cGy,C.cGJ,C.flF,C.flG,C.eUr,C.eUi,C.eUj,C.eUk,C.eUm,C.eUn,C.eUq,C.eUd,C.eUg,C.eUs,C.eUe,C.eUv,C.eUw,C.eUx,C.eUy,C.eUu,C.eU8,C.eU9,C.eUa,C.eUc,C.eUb,C.eUR,C.eUS,C.eUA,C.eUB,C.eUI,C.eUJ,C.eUK,C.eUE,C.eUF,C.eUY,C.eUX,C.eUZ,C.eUW,C.eUz,C.eUD,C.eUU,C.eUT,C.eUO,C.eUP,C.eUN,C.eUM])
u(A.af,[C.apN,C.TV,C.a_t,C.a_x,C.a_v,C.a_3,C.alS,C.ak4,C.auO,C.ayL,C.am0,C.alZ,C.alV,C.Wf,C.alX,C.TW,C.aqZ,C.aqT,C.a07,C.aqX,C.a0r,C.a0s,C.a7e,C.a_5,C.a_4,C.ZC,C.a2e,C.Gk,C.ayS,C.au_,C.atU,C.atZ,C.OX])
u(A.ah,[C.aEw,C.bgo,C.aBv,C.bgN,C.aBy,C.bdY,C.aBw,C.azK,C.aGW,C.ayM,C.aBA,C.aBz,C.aBx,C.blL,C.alY,C.alU,C.aF4,C.aF1,C.aDv,C.aF3,C.aF2,C.blM,C.aN4,C.aAf,C.aAe,C.ayZ,C.by9,C.aPb,C.aPc,C.aGx,C.bn8,C.aGw,C.bzV])
u(A.jw,[C.dPB,C.dPD,C.dPy,C.dPX,C.fJ8,C.bR7,C.dg9,C.dg8,C.dfQ,C.dg4,C.dg5,C.dgw,C.bSV,C.bSN,C.bRy,C.bRz,C.h3N,C.h4c,C.bKu,C.cpV,C.cpP,C.cpJ,C.f6v,C.bRX,C.bS_,C.bS0,C.dr8,C.bRT,C.e26,C.e1M,C.e2t,C.dgM,C.dgL,C.dgJ,C.dgO,C.dgR,C.dgS,C.dgC,C.dgG,C.dgI,C.dgV,C.ceF,C.ceN,C.ceS,C.dP_,C.fXu,C.fXt,C.flC,C.flD,C.eUo,C.eUV,C.cFR,C.fts,C.fpe,C.fJe,C.fFf,C.fJb,C.fq3,C.fq2,C.fub])
u(A.lE,[C.a1K,C.afQ,C.a22,C.a_V,C.act,C.aLp,C.Iq,C.am2,C.cFS,C.cFT])
t(C.alT,C.aBw)
t(C.ak5,C.azK)
t(C.auP,C.aGW)
t(C.bgs,C.aBA)
t(C.am1,C.bgs)
t(C.bgr,C.aBz)
t(C.am_,C.bgr)
t(C.bgq,C.aBx)
t(C.alW,C.bgq)
t(C.blr,C.aN4)
t(C.by7,C.aPb)
t(C.by8,C.aPc)
t(C.aGy,C.bzV)
t(C.baA,A.bao)
t(C.bya,A.a6U)
t(C.baz,C.bya)
w(C.aBw,A.cb)
w(C.azK,A.cb)
w(C.aGW,A.eQ)
w(C.aBx,A.cb)
v(C.bgq,C.afC)
w(C.aBz,A.cb)
v(C.bgr,C.afC)
w(C.aBA,A.cb)
v(C.bgs,C.afC)
w(C.aN4,A.eQ)
w(C.aPb,A.cb)
w(C.aPc,A.cb)
v(C.bzV,A.eB)
v(C.bya,A.jf)})()
A.iT(b.typeUniverse,JSON.parse('{"b_B":{"ax":[],"v":[]},"bcM":{"aC":[]},"apN":{"af":[],"v":[]},"aEw":{"ah":["apN"]},"TV":{"af":[],"v":[]},"alR":{"ax":[],"v":[]},"aWk":{"ax":[],"v":[]},"bgo":{"ah":["TV"]},"a_t":{"af":[],"v":[]},"a_x":{"af":[],"v":[]},"a_v":{"af":[],"v":[]},"a_3":{"af":[],"v":[]},"aBv":{"ah":["a_t"]},"bgN":{"ah":["a_x"]},"aBy":{"ah":["a_v"]},"ZL":{"ax":[],"v":[]},"be_":{"aC":[]},"bdR":{"aC":[]},"bdY":{"ah":["a_3"]},"aIw":{"aC":[]},"bjk":{"aC":[]},"bc8":{"ax":[],"v":[]},"alS":{"af":[],"v":[]},"alT":{"ah":["alS"]},"boU":{"aC":[]},"aWp":{"aC":[]},"ak4":{"af":[],"v":[]},"auO":{"af":[],"v":[]},"ayL":{"af":[],"v":[]},"ak5":{"ah":["ak4"]},"bcO":{"aC":[]},"QE":{"ax":[],"v":[]},"aBu":{"aC":[]},"auP":{"ah":["auO"]},"bch":{"aC":[]},"ayM":{"ah":["ayL"]},"am0":{"af":[],"v":[]},"alZ":{"af":[],"v":[]},"alV":{"af":[],"v":[]},"am1":{"ah":["am0"]},"bsW":{"aC":[]},"am_":{"ah":["alZ"]},"bjs":{"aC":[]},"alW":{"ah":["alV"]},"biT":{"aC":[]},"Wf":{"af":[],"v":[]},"alX":{"af":[],"v":[]},"TW":{"af":[],"v":[]},"a6s":{"ax":[],"v":[]},"bj_":{"aC":[]},"tF":{"ax":[],"v":[]},"Ir":{"ax":[],"v":[]},"blL":{"ah":["Wf"]},"alY":{"ah":["alX"]},"alU":{"ah":["TW"]},"aqZ":{"af":[],"v":[]},"aqT":{"af":[],"v":[]},"a07":{"af":[],"v":[]},"aeb":{"ax":[],"v":[]},"aF4":{"ah":["aqZ"]},"aF1":{"ah":["aqT"]},"bgu":{"ax":[],"v":[]},"bgx":{"aC":[]},"bkj":{"ax":[],"v":[]},"bfz":{"aC":[]},"byh":{"ax":[],"v":[]},"bnD":{"ax":[],"v":[]},"aDv":{"ah":["a07"]},"aea":{"ax":[],"v":[]},"bki":{"ax":[],"v":[]},"ae9":{"ax":[],"v":[]},"bkh":{"ax":[],"v":[]},"aDw":{"ax":[],"v":[]},"aJF":{"ax":[],"v":[]},"Gw":{"ax":[],"v":[]},"aqX":{"af":[],"v":[]},"a0r":{"af":[],"v":[]},"a0s":{"af":[],"v":[]},"aF3":{"ah":["aqX"]},"bgv":{"ax":[],"v":[]},"adq":{"ax":[],"v":[]},"bgt":{"ax":[],"v":[]},"bgy":{"ax":[],"v":[]},"aF2":{"ah":["a0r"]},"blM":{"ah":["a0s"]},"b_z":{"ax":[],"v":[]},"a7e":{"af":[],"v":[]},"blr":{"ah":["a7e"]},"blq":{"aC":[]},"au0":{"ax":[],"v":[]},"a_5":{"af":[],"v":[]},"a_4":{"af":[],"v":[]},"ZC":{"af":[],"v":[]},"a2e":{"af":[],"v":[]},"aAf":{"ah":["a_5"]},"aAe":{"ah":["a_4"]},"ayZ":{"ah":["ZC"]},"by9":{"ah":["a2e"]},"Gk":{"af":[],"v":[]},"ayS":{"af":[],"v":[]},"by7":{"ah":["Gk"]},"by8":{"ah":["ayS"]},"by6":{"aC":[]},"au_":{"af":[],"v":[]},"aGx":{"ah":["au_"]},"aew":{"ax":[],"v":[]},"atU":{"af":[],"v":[]},"atZ":{"af":[],"v":[]},"bn8":{"ah":["atU"]},"aGw":{"ah":["atZ"]},"OX":{"af":[],"v":[]},"aGy":{"ah":["OX"],"eB":[]},"baz":{"jf":[],"fi":[]}}'))
A.Dh(b.typeUniverse,JSON.parse('{"afC":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.as
return{e2:w("aT2"),cq:w("mh"),Q:w("ro"),r:w("bu<n,n>"),c5:w("aV_"),dY:w("aV0"),fH:w("MK"),de:w("akM"),dN:w("MS<H>"),gc:w("El<H>"),A:w("eI<n?>"),e:w("Ip"),B:w("nw"),P:w("hU"),df:w("ls"),k:w("kT"),x:w("aB<~>"),U:w("O<SS>"),V:w("O<ac>"),C:w("O<ro>"),O:w("O<u>"),c:w("O<MK>"),b:w("O<akM>"),ac:w("O<eI<n?>>"),I:w("O<nw>"),u:w("O<hU>"),J:w("O<ls>"),_:w("O<kT>"),cl:w("O<aB<ai<a8<n,@>>>>"),R:w("O<nz>"),eU:w("O<ai<+(F,F)>>"),ez:w("O<a8<n,aE>>"),gE:w("O<a8<n,n>>"),Y:w("O<a8<n,@>>"),fD:w("O<mP>"),bp:w("O<oG>"),g:w("O<o>"),ar:w("O<auc>"),v:w("O<fT>"),gy:w("O<a9U>"),L:w("O<+(n,n)>"),G:w("O<+(F,F)>"),E:w("O<+(F,~())>"),bd:w("O<+(n,H,P)>"),bF:w("O<+count,id,name(H,n,n)>"),F:w("O<cU>"),s:w("O<n>"),cF:w("O<au>"),aS:w("O<j3>"),dT:w("O<ban>"),p:w("O<v>"),Z:w("O<fi>"),D:w("O<lD>"),h:w("O<azZ>"),cC:w("O<bhD>"),fp:w("O<KM>"),M:w("O<KT>"),gZ:w("O<aIB>"),gA:w("O<afH>"),e4:w("O<afO>"),dE:w("O<aKD>"),f7:w("O<P>"),n:w("O<F>"),t:w("O<H>"),dS:w("O<aC?>"),d4:w("O<n?>"),eF:w("cw<ah<af>>"),d:w("ai<nw>"),do:w("ai<hU>"),cg:w("ai<ls>"),ax:w("ai<kT>"),fO:w("ai<a8<n,@>>"),cz:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(H,n,n)>"),dy:w("ai<n>"),er:w("ai<au>"),gk:w("ai<lD>"),j:w("ai<@>"),fK:w("bB<n,n>"),d2:w("bB<n,ai<a8<n,@>>>"),a:w("a8<n,@>"),f:w("a8<@,@>"),gv:w("N<n,Is>"),cM:w("N<H,n>"),w:w("iC"),g2:w("rM"),bV:w("apB"),fL:w("ct"),K:w("aE"),dc:w("fT"),fo:w("Pi<H>"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),bn:w("+games,limit(P,H)"),d9:w("+dx,hidden(F,ai<hU>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),fT:w("iu<hU>"),ec:w("iu<n>"),gW:w("r4<F>"),X:w("br<F>"),bW:w("dK"),W:w("bK<n>"),b4:w("bK<H>"),cI:w("k3<n>"),av:w("Y<zE>"),cc:w("Y<n>"),l:w("v"),gF:w("fi"),fA:w("lD"),dO:w("GA"),bw:w("ae9<n?>"),cy:w("KV"),q:w("mz"),y:w("P"),i:w("F"),z:w("@"),S:w("H"),eK:w("ai<kT>?"),m:w("aqW?"),cT:w("o?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),he:w("+qrPayload,token,usesRemaining(n,n,H)?"),gG:w("+members,trees,viewOnly(H,H,P)?"),az:w("qj?"),T:w("n?"),aD:w("dK?"),o:w("lD?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b4n=new A.be(B.fL,B.bI,B.fL,B.bI)
D.adL=new A.be(B.fL,B.il,B.fL,B.il)
D.b4B=new A.be(B.iy,B.bI,B.bI,B.bI)
D.b4F=new A.ay(B.cG,1.4,B.r,-1)
D.b4P=new A.ay(B.ab,1,B.r,-1)
D.aef=new A.aY(140,1/0,0,1/0)
D.b6d=new A.aY(0,1/0,64,1/0)
D.b6h=new A.aY(0,84,0,1/0)
D.aem=new A.aY(130,1/0,0,1/0)
D.aCy=w([B.m5,B.rJ,B.c],x.O)
D.c7k=new A.a9(B.aA,B.aF,B.x,D.aCy,null,null)
D.b71=new A.p(null,null,null,null,null,D.c7k,B.n)
D.dew=w([B.aY,B.bR],x.O)
D.c9p=new A.a9(B.b7,B.b9,B.x,D.dew,null,null)
D.b7m=new A.p(null,null,null,null,null,D.c9p,B.n)
D.Y9=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fy=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dix=w([B.dx,D.Y9,D.fy],x.O)
D.c6w=new A.a9(B.b7,B.b9,B.x,D.dix,null,null)
D.b86=new A.p(null,null,null,null,null,D.c6w,B.n)
D.fqy=new A.G(!0,B.bV,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0M=new A.B("?",null,D.fqy,null,null,null,null,null,null,null,null,null)
D.bbK=new A.cg(B.A,null,null,D.h0M,null)
D.VN=new A.G(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJL=new A.B("\ud83c\udf33",null,D.VN,null,null,null,null,null,null,null,null,null)
D.af5=new A.cg(B.A,null,null,D.fJL,null)
D.fMn=new A.B("\ud83c\udfc6",null,At.KC,null,null,null,null,null,null,null,null,null)
D.bbV=new A.cg(B.A,null,null,D.fMn,null)
D.bdL=new A.fk(null,null,null,null,null,E.ko,null,null,null,null)
D.af7=new A.cg(B.A,null,null,D.bdL,null)
D.kM=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fr6=new A.G(!0,D.kM,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLr=new A.B("No books on the shelf yet.",null,D.fr6,null,null,null,null,null,null,null,null,null)
D.erG=new A.D(B.nH,D.fLr,null)
D.bca=new A.cg(B.A,null,null,D.erG,null)
D.fy6=new A.G(!0,D.fy,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1G=new A.B("\ud83d\ude8c  On the road\u2026",null,D.fy6,null,null,null,null,null,null,null,null,null)
D.esg=new A.D(B.cl,D.h1G,null)
D.bcD=new A.cg(B.A,null,null,D.esg,null)
D.aWy=new A.B("\ud83e\uddfa",null,D.VN,null,null,null,null,null,null,null,null,null)
D.bcS=new A.cg(B.A,null,null,D.aWy,null)
D.fOS=new A.B("\ud83c\udfad",null,D.VN,null,null,null,null,null,null,null,null,null)
D.bd3=new A.cg(B.A,null,null,D.fOS,null)
D.bd6=new A.cg(B.A,null,null,A8.XY,null)
D.afs=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.afz=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bfk=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bfp=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bfB=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bfE=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bfG=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bfO=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lB=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bfS=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bfX=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bfY=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bfZ=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lC=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bgz=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.By=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bgI=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bh1=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bh4=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bha=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bhi=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.aga=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bhp=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.Yl=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.agd=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bhB=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.Yn=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bhW=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.agp=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bik=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.biB=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.biZ=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bj8=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.FL=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bju=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bjw=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bjA=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.agR=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bjU=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bk_=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bk5=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.agV=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bkd=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bkF=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bkN=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bkP=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bkU=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.aha=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.blw=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.ahz=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bmt=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.ahM=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bmS=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.FY=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bmY=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bn7=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bn9=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.ahR=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bns=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bnt=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bnw=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.ahY=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.Z3=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bnT=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bod=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.boi=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.ai8=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bop=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.Za=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.boI=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.boJ=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.G4=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bpv=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bq9=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bqf=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bqj=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qi=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bqu=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bqy=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bqE=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bqG=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.aiV=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.aiZ=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.Ga=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.Zs=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.aj7=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.brN=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bs6=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bsv=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bsE=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.ajx=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.ZC=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bsN=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bt5=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.ZG=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.btj=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.btz=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.ZL=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.btE=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.ajP=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.ajR=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.btX=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.ajX=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.buo=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bus=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.buy=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.buE=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.buM=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bvk=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bvQ=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fFF=new A.B("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bzm=new A.eI(null,D.fFF,B.fd,null,x.A)
D.fOJ=new A.B("None",null,null,null,null,null,null,null,null,null,null,null)
D.bzo=new A.eI(null,D.fOJ,B.fd,null,x.A)
D.akR=new A.bd(3e4)
D.bzW=new A.bd(38e5)
D.bAF=new A.il(0,10,0,10)
D.bAO=new A.R(0,1,0,0)
D.bAZ=new A.il(0,4,0,4)
D.bB1=new A.R(0,4,5,0)
D.bBi=new A.R(10,10,14,10)
D.bBu=new A.il(10,4,10,4)
D.bBC=new A.il(10,8,10,8)
D.bBD=new A.R(10,8,8,8)
D.bC6=new A.R(12,6,12,2)
D.bCl=new A.R(14,0,14,6)
D.bCp=new A.R(14,10,6,6)
D.bCq=new A.R(14,12,14,0)
D.bCu=new A.R(14,12,14,8)
D.bCx=new A.R(14,12,8,14)
D.bCB=new A.il(14,14,14,14)
D.bCT=new A.R(14,6,14,40)
D.bCW=new A.R(14,8,14,30)
D.bDj=new A.R(16,2,16,10)
D.bDt=new A.R(16,6,16,30)
D.bDv=new A.R(16,6,16,8)
D.bDK=new A.R(18,10,18,4)
D.bDM=new A.R(18,12,18,0)
D.bDT=new A.R(18,14,12,4)
D.amk=new A.R(18,16,18,8)
D.bE9=new A.R(18,20,18,22)
D.bEf=new A.R(18,30,18,30)
D.bEx=new A.R(20,10,12,20)
D.bEA=new A.R(20,11,20,11)
D.bEL=new A.R(20,18,16,18)
D.bEN=new A.R(20,18,20,6)
D.bFC=new A.R(24,32,24,28)
D.bFD=new A.R(24,36,24,32)
D.bFI=new A.R(26,26,24,14)
D.bFX=new A.R(2,4,2,8)
D.bG0=new A.R(30,0,30,0)
D.bGb=new A.R(38,22,22,22)
D.amH=new A.R(40,24,24,24)
D.bGd=new A.il(40,40,40,40)
D.bGf=new A.R(46,30,30,30)
D.bGG=new A.R(56,40,40,40)
D.bGK=new A.R(1.25,1.25,1.25,1.25)
D.bGL=new A.R(60,0,60,0)
D.bGP=new A.R(6,14,6,16)
D.bGT=new A.R(6,4,12,0)
D.bGX=new A.R(6,6,10,2)
D.bH3=new A.il(7,3,7,3)
D.bHC=new A.R(5,1.5,5,1.5)
D.bHN=new A.R(6,2.5,6,2.5)
D.fWX=new A.B("Family Games",null,B.jQ,null,null,null,null,null,null,null,null,null)
D.fEh=new A.B("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,K.ab7,null,null,null,null,null,null,null,null,null)
D.cIr=w([D.fWX,D.fEh],x.p)
D.bwS=new A.fj(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.cIr,null)
D.bIc=new A.bz(1,B.bc,D.bwS,null)
D.h0i=new A.B("Signature",null,B.nh,null,null,null,null,null,null,null,null,null)
D.bIf=new A.bz(1,B.bc,D.h0i,null)
D.fTv=new A.B("MADE BY THE ONE WHO PLANTED THE TREE",null,T.tF,null,null,null,null,null,null,null,null,null)
D.bIN=new A.bz(1,B.bc,D.fTv,null)
D.fYp=new A.B("Tell the AI what to fix",null,B.di,null,null,null,null,null,null,null,null,null)
D.bJ3=new A.bz(1,B.bc,D.fYp,null)
D.fyU=new A.G(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_n=new A.B("Worksheets",null,D.fyU,null,null,null,null,null,null,null,null,null)
D.fz4=new A.G(!0,E.afV,null,null,null,null,13,B.cD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZe=new A.B("Track your project spending",null,D.fz4,null,null,null,null,null,null,null,null,null)
D.d5X=w([D.h_n,B.ax,D.fZe],x.p)
D.bwv=new A.fj(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.d5X,null)
D.bJ9=new A.bz(1,B.bc,D.bwv,null)
D.ftT=new A.G(!0,E.ko,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fER=new A.B("FAMILY LIBRARY",null,D.ftT,null,null,null,null,null,null,null,null,null)
D.bJr=new A.bz(1,B.bc,D.fER,null)
D.OB=new C.Ip("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.wp=new C.Iq(0,"male")
D.os=new C.Iq(1,"female")
D.yW=new C.Iq(2,"unknown")
D.uz=new C.am2(0,"owner")
D.OC=new C.am2(1,"editor")
D.kV=new C.am2(2,"viewer")
D.aoD=new A.a0(61199,"MaterialIcons",!1)
D.bOJ=new A.a0(61504,"MaterialIcons",!1)
D.bOK=new A.a0(61505,"MaterialIcons",!1)
D.bOM=new A.a0(61587,"MaterialIcons",!1)
D.bOT=new A.a0(61890,"MaterialIcons",!1)
D.bPL=new A.a0(63034,"MaterialIcons",!0)
D.bQ2=new A.a0(63153,"MaterialIcons",!1)
D.bQz=new A.a0(63429,"MaterialIcons",!1)
D.aqL=new A.a0(984520,"MaterialIcons",!1)
D.bPh=new A.a0(62776,"MaterialIcons",!1)
D.bSU=new A.ae(D.bPh,26,B.b1,null,null,null)
D.bNH=new A.a0(57648,"MaterialIcons",!1)
D.bTd=new A.ae(D.bNH,14,B.c,null,null,null)
D.bTu=new A.ae(B.Hk,17,null,null,null,null)
D.bTA=new A.ae(B.a2f,null,B.bR,null,null,null)
D.bU0=new A.ae(E.a2n,null,null,null,null,null)
D.bU3=new A.ae(B.j3,18,E.ko,null,null,null)
D.a25=new A.a0(62044,"MaterialIcons",!1)
D.bU8=new A.ae(D.a25,null,B.aY,null,null,null)
D.bUf=new A.ae(B.z8,18,B.c,null,null,null)
D.bUY=new A.ae(B.ee,16,null,null,null,null)
D.bV4=new A.ae(D.a25,32,B.aY,null,null,null)
D.bVn=new A.ae(E.aoE,18,B.cG,null,null,null)
D.bWs=new A.ae(B.Hu,22,B.ay,null,null,null)
D.bWE=new A.ae(B.ee,22,B.b1,null,null,null)
D.bWR=new A.ae(Z.a2a,22,B.c,null,null,null)
D.bWX=new A.ae(B.uK,52,B.c,null,null,null)
D.bX6=new A.ae(B.Hu,30,B.ay,null,null,null)
D.bXp=new A.ae(B.a2s,null,B.c,null,null,null)
D.ars=new A.ae(B.uU,22,B.c,null,null,null)
D.bXy=new A.ae(B.ee,17,null,null,null,null)
D.bXW=new A.ae(B.wF,26,B.cG,null,null,null)
D.bYH=new A.ae(B.a2A,16,null,null,null,null)
D.bZs=new A.ae(B.uK,24,B.c,null,null,null)
D.bZx=new A.ae(B.P4,20,B.tf,null,null,null)
D.bZC=new A.ae(B.Hi,null,B.bR,null,null,null)
D.bZK=new A.ae(B.j3,18,B.c,null,null,null)
D.c_p=new A.ae(B.cz,22,B.ab,null,null,null)
D.c0f=new A.ae(B.eh,16,B.ab,null,null,null)
D.c0r=new A.ae(D.a25,20,B.aY,null,null,null)
D.arS=new A.ae(B.hI,20,null,null,null,null)
D.c0X=new A.ae(B.cz,18,D.kM,null,null,null)
D.c1d=new A.ae(B.zf,28,B.c,null,null,null)
D.c1n=new A.ae(B.OV,null,B.fh,null,null,null)
D.c1H=new A.ae(B.zf,24,B.c,null,null,null)
D.c28=new A.ae(B.uK,null,B.aY,null,null,null)
D.c29=new A.ae(B.jG,20,B.cG,null,null,null)
D.c2t=new A.ae(B.Hk,16,null,null,null,null)
D.c41=new A.e5(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.k2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eK,!0,null,null,null,null)
D.asA=new C.a6s(10,null)
D.c4x=new C.a6s(12,null)
D.c4y=new C.a6s(14,null)
D.dmF=w([B.bx,B.aY,B.fo,B.b1],x.O)
D.c5J=new A.a9(B.aA,B.aF,B.x,D.dmF,null,null)
D.bph=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bvr=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d2r=w([D.bph,D.bvr],x.O)
D.c5V=new A.a9(B.b7,B.b9,B.x,D.d2r,null,null)
D.dgx=w([B.eV,B.fS,B.fo],x.O)
D.c6_=new A.a9(B.aA,B.aF,B.x,D.dgx,null,null)
D.aiJ=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bg_=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d4F=w([D.aiJ,D.bg_],x.O)
D.c6x=new A.a9(B.b7,B.b9,B.x,D.d4F,null,null)
D.bjK=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aBO=w([D.bjK,D.aiJ],x.O)
D.c6S=new A.a9(B.aA,B.aF,B.x,D.aBO,null,null)
D.ahs=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bmk=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dfB=w([D.ahs,D.bmk],x.O)
D.c7v=new A.a9(B.a6,B.aa,B.x,D.dfB,null,null)
D.dtC=w([B.bC,B.mP],x.O)
D.c7x=new A.a9(B.b7,B.b9,B.x,D.dtC,null,null)
D.bpc=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.duz=w([D.bpc,D.kM,D.kM,I.N5],x.O)
D.dx4=w([0,0.07,0.9,1],x.n)
D.c81=new A.a9(B.a6,B.aa,B.x,D.duz,D.dx4,null)
D.c8a=new A.a9(B.aA,B.aF,B.x,B.SK,null,null)
D.d0d=w([B.aE,D.lB],x.O)
D.c8d=new A.a9(B.a6,B.aa,B.x,D.d0d,null,null)
D.dta=w([B.b1,B.aY,B.bR],x.O)
D.c9a=new A.a9(B.aA,B.aF,B.x,D.dta,null,null)
D.cds=w([10,20,30],x.t)
D.cno=w([-1,-0.4,0.3,1],x.n)
D.cuR=w([B.bx,B.b1,B.eV],x.O)
D.cv_=w([B.bp,B.aE,B.kn],x.O)
D.cv1=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cvJ=w([30,140,262,360],x.n)
D.bnC=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cBh=w([D.bnC,E.aih],x.O)
D.emg=new A.o(1,2)
D.fbV=new A.cU(B.aU,D.emg,3)
D.ayJ=w([D.fbV],x.F)
D.cIJ=w([B.ho,B.ch,B.fn],x.O)
D.cLt=w([B.bK,B.bv,B.bq],x.O)
D.bKh=new C.uP("classic","Classic leather","Gold-edged brown leather",D.aBO,E.ko,E.ko,"\u2766",B.K,!0,!1,!1,!1)
D.bf4=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bue=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.d7E=w([D.bf4,D.bue],x.O)
D.aim=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bKc=new C.uP("ornate","Ornate gold","Double gold border and flourishes",D.d7E,D.aim,D.aim,"\u2726",B.K,!0,!0,!0,!1)
D.bji=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bq3=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d_8=w([D.bji,D.bq3],x.O)
D.bKb=new C.uP("parchment","Parchment","Old paper with dark ink",D.d_8,D.G4,L.iZ,"\u2767",B.K,!0,!1,!1,!0)
D.afB=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bss=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.drp=w([D.afB,D.bss],x.O)
D.bn4=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.brI=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bKe=new C.uP("minimal","Clean paper","Plain and elegant, like a printed book",D.drp,D.bn4,D.brI,"",B.K,!0,!0,!1,!0)
D.bKg=new C.uP("midnight","Midnight","Deep blue with silver stars",K.aC7,B.cu,B.bO,"\u2727",B.K,!0,!0,!1,!1)
D.bKa=new C.uP("emerald","Emerald library","Green cloth, title on the left",W.az7,E.ko,B.h_,"\u25c6",B.bn,!0,!1,!1,!1)
D.bsY=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dpq=w([B.ej,D.bsY],x.O)
D.boo=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bpC=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bKf=new C.uP("rose","Rose vintage","Burgundy with rose-gold lettering",D.dpq,D.boo,D.bpC,"\u2740",B.K,!0,!1,!0,!1)
D.du9=w([B.cr,F.ny],x.O)
D.bKd=new C.uP("modern","Modern","Dark, bold, left-aligned",D.du9,B.aH,B.c,"",B.bn,!1,!0,!1,!1)
D.a4F=w([D.bKh,D.bKc,D.bKb,D.bKe,D.bKg,D.bKa,D.bKf,D.bKd],A.as("O<uP>"))
D.cOq=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dtX=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bKs=new C.ls('What does "Ubuntu" mean?',D.dtX,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d0T=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bKv=new C.ls("In Swahili, what do we call a grandmother?",D.d0T,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d0K=w(["Babu","Mama","Baba","Dada"],x.s)
D.bKq=new C.ls("In Swahili, what do we call a grandfather?",D.d0K,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d21=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bKu=new C.ls("What is a sister called in Swahili?",D.d21,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.d75=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bKr=new C.ls("What is a brother called in Swahili?",D.d75,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d0J=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bKC=new C.ls("Which word means father in Swahili?",D.d0J,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dv8=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bKB=new C.ls('"Umoja ni nguvu" means...',D.dv8,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.ds5=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bKD=new C.ls('"Haba na haba hujaza kibaba" teaches us...',D.ds5,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d4N=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bKA=new C.ls('The African saying "It takes a village to raise a child" means...',D.d4N,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dvs=w(["The elders","The market","The river","The drum"],x.s)
D.bKw=new C.ls("Who is the traditional keeper of the family stories?",D.dvs,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cSB=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bKt=new C.ls("Why do families sit round the fire at night?",D.cSB,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dub=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bKy=new C.ls('What does "Harambee" mean?',D.dub,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.d9V=w(["An elder","A baby","A market","A cow"],x.s)
D.bKx=new C.ls('"Mzee" is a respectful word for...',D.d9V,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dph=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bKz=new C.ls('What does "Shikamoo" show?',D.dph,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.az2=w([D.bKs,D.bKv,D.bKq,D.bKu,D.bKr,D.bKC,D.bKB,D.bKD,D.bKA,D.bKw,D.bKt,D.bKy,D.bKx,D.bKz],x.J)
D.cWZ=w([90,360],x.n)
D.cZG=w([B.bR,B.bl],x.O)
D.bp0=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d_k=w([D.afB,D.bp0],x.O)
D.d_X=w([-1,-0.3,0.4,1],x.n)
D.d0P=w([0,0.45,0.72,0.92,1],x.n)
D.bje=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d16=w([D.bje,B.dh],x.O)
D.bgX=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.ak5=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d1F=w([B.dx,D.bgX,D.ak5],x.O)
D.d2H=w([B.ba,B.jg,B.p9],x.O)
D.bjM=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.brz=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bgD=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d2M=w([D.bjM,D.brz,D.bgD],x.O)
D.d36=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d3g=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hui=new C.adP(78,424,48,44,56)
D.hug=new C.adP(214,396,34,34,42)
D.huh=new C.adP(442,452,56,50,64)
D.aA0=w([D.hui,D.hug,D.huh],A.as("O<adP>"))
D.d3P=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bfU=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.blv=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dx0=w([D.ahs,D.bfU,D.blv],x.O)
D.bKi=new C.uQ("leather","Leather",D.dx0,"vintage")
D.daW=w([B.d6,B.FW,Aa.YB],x.O)
D.bKp=new C.uQ("midnight","Midnight",D.daW,"starry")
D.d2I=w([B.eq,B.e6,B.lf],x.O)
D.bKo=new C.uQ("forest","Forest",D.d2I,"story")
D.dz1=w([B.er,B.ej,B.kq],x.O)
D.bKl=new C.uQ("burgundy","Burgundy",D.dz1,"royal")
D.cL1=w([B.aE,B.og,B.o4],x.O)
D.bKm=new C.uQ("royal","Royal",D.cL1,"royal")
D.d5i=w([B.bv,B.cr,F.ny],x.O)
D.bKj=new C.uQ("charcoal","Charcoal",D.d5i,"geo")
D.dx9=w([B.ca,B.dK,B.y9],x.O)
D.bKn=new C.uQ("sunset","Sunset",D.dx9,"sunset")
D.dxR=w([B.jg,B.G5,B.YE],x.O)
D.bKk=new C.uQ("ocean","Ocean",D.dxR,"band")
D.zL=w([D.bKi,D.bKp,D.bKo,D.bKl,D.bKm,D.bKj,D.bKn,D.bKk],A.as("O<uQ>"))
D.d5N=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.d6o=w([B.am,B.aM,B.S],x.O)
D.d7J=w([B.ej,B.e6,B.d6,B.h9,B.yd,B.cG,B.kr,B.e7,B.cZ],x.O)
D.d7K=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.fbW=new A.cU(B.ds,B.dG,8)
D.d7V=w([D.fbW],x.F)
D.d91=w([B.bT,B.dK,B.km],x.O)
D.bhP=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.blN=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bpZ=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.d9h=w([D.bhP,G.aiS,D.blN,D.bpZ,D.ak5],x.O)
D.d9y=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.d9K=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bff=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bl9=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.dac=w([D.bff,D.agV,D.bl9],x.O)
D.daR=w([B.bT,B.hD],x.O)
D.daX=w([G.np,B.ib,G.afM,B.cO],x.O)
D.dcw=w([B.cO,G.np,B.ib,D.lC,B.cO],x.O)
D.dd7=w([B.aV,B.w2,B.xY],x.O)
D.aB1=w(["True","False"],x.s)
D.eJp=new A.y(-0.65,0.6)
D.eW4=new A.y(-0.2,0.95)
D.eX9=new A.y(0.25,0.95)
D.eMT=new A.y(0.7,0.6)
D.eXJ=new A.y(1,0.1)
D.ddT=w([Au.Ux,D.eJp,D.eW4,D.eX9,D.eMT,D.eXJ],x.G)
D.bnU=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bu6=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.biQ=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.ddZ=w([D.bnU,D.bu6,D.biQ],x.O)
D.de2=w([B.bN,B.c0,B.dk,B.aV],x.O)
D.dex=w([B.hT,B.ca,B.rA],x.O)
D.deV=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.df6=w([B.eV,B.cG],x.O)
D.bpl=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dfw=w([D.bpl,D.afz],x.O)
D.dfH=w([B.cF,B.fp,B.hE],x.O)
D.dfS=w([B.aH,B.bl,B.d6],x.O)
D.dgu=w([B.ev,B.cX,B.e6],x.O)
D.dgO=w([B.dJ,B.d6,B.FW],x.O)
D.dgS=w([B.bh,B.mK,B.cZ],x.O)
D.dha=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.boz=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bmO=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dhu=w([D.boz,D.agR,D.bmO],x.O)
D.dii=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.djl=w([1,0,7,6,3,2],x.t)
D.a5D=w(["leather","linen","plain","stars","rays"],x.s)
D.djy=w([0.5,2,3.6],x.n)
D.dk5=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bSB=new A.a0(985219,"MaterialIcons",!1)
D.bS8=new A.a0(983781,"MaterialIcons",!1)
D.aBu=w([B.a2f,B.hJ,B.lM,B.ie,D.bSB,B.HF,B.qH,D.bS8,K.aqz,B.CV,B.qJ,B.n3],A.as("O<a0>"))
D.a5H=w(["double","single","corners","none"],x.s)
D.bK7=new C.zE("Little Seed","\ud83c\udf31",0)
D.bK9=new C.zE("Young Listener","\ud83d\udc42",40)
D.bK8=new C.zE("Storyteller","\ud83e\ude98",120)
D.bK6=new C.zE("Village Pride","\ud83c\udfe1",300)
D.bK4=new C.zE("Keeper of Roots","\ud83c\udf33",700)
D.bK5=new C.zE("Elder of the Fire","\ud83d\udd25",1500)
D.aBw=w([D.bK7,D.bK9,D.bK8,D.bK6,D.bK4,D.bK5],A.as("O<zE>"))
D.dle=w([B.db,B.br,B.e7],x.O)
D.dlu=w([],x.C)
D.Dw=w([],x.u)
D.aLB=new A.o(225,528)
D.eL4=new A.y(D.aLB,1)
D.en0=new A.o(350,548)
D.eRm=new A.y(D.en0,0.95)
D.aLw=new A.o(158,656)
D.eRf=new A.y(D.aLw,1.12)
D.enM=new A.o(92,544)
D.eGD=new A.y(D.enM,0.93)
D.en3=new A.o(398,614)
D.eNf=new A.y(D.en3,1.04)
D.emS=new A.o(318,662)
D.eC5=new A.y(D.emS,1.1)
D.a5P=w([D.eL4,D.eRm,D.eRf,D.eGD,D.eNf,D.eC5],A.as("O<+(o,F)>"))
D.dnw=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dnX=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.doZ=w([B.cO,G.np,B.ib,D.lC,B.cO,B.ib],x.O)
D.dqp=w([B.av,B.fp,B.h9],x.O)
D.dr0=w([-70,58],x.n)
D.dr2=w([-70,-30,20],x.n)
D.ds3=w([B.bh,B.mK,B.Gg],x.O)
D.dsk=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dMi=new C.lW("construction","Construction","Jobsite & builds",B.uH)
D.dMp=new C.lW("house","Home Build","Houses & rooms",B.wA)
D.dMf=new C.lW("grocery","Grocery","Store & pantry",B.a39)
D.dMe=new C.lW("calculator","Calculations","Math & estimates",B.Pb)
D.dMn=new C.lW("lumber","Materials","Lumber & supplies",B.Pv)
D.dMb=new C.lW("kitchen","Kitchen","Remodel & meals",A4.Pw)
D.bS6=new A.a0(983756,"MaterialIcons",!1)
D.dMg=new C.lW("landscape","Landscaping","Yard & garden",D.bS6)
D.dMa=new C.lW("plumbing","Plumbing","Pipes & water",B.pA)
D.dMq=new C.lW("electrical","Electrical","Wiring & power",B.hv)
D.dM8=new C.lW("store","Retail Shop","Daily business",B.ll)
D.dM9=new C.lW("paint_remodel","Paint & Remodel","Colors & walls",A4.Pq)
D.bRw=new A.a0(983311,"MaterialIcons",!1)
D.dMm=new C.lW("roofing","Roofing","Roofs & exteriors",D.bRw)
D.bSj=new A.a0(983986,"MaterialIcons",!1)
D.dM7=new C.lW("warehouse","Warehouse","Storage & stock",D.bSj)
D.dMk=new C.lW("vehicles","Vehicles","Fleet & transport",B.HG)
D.bPj=new A.a0(62785,"MaterialIcons",!1)
D.dMd=new C.lW("farm","Farm","Crops & livestock",D.bPj)
D.dMc=new C.lW("restaurant","Restaurant","Food & catering",B.wJ)
D.dMj=new C.lW("tools","Tools","Workshop gear",B.HB)
D.dMo=new C.lW("wallet","Cash & Wallet","Quick spending",B.jG)
D.bQu=new A.a0(63395,"MaterialIcons",!1)
D.dMl=new C.lW("concrete","Concrete","Foundation work",D.bQu)
D.dMh=new C.lW("blueprint","Blueprint","Plans & design",Ap.ap7)
D.a6b=w([D.dMi,D.dMp,D.dMf,D.dMe,D.dMn,D.dMb,D.dMg,D.dMa,D.dMq,D.dM8,D.dM9,D.dMm,D.dM7,D.dMk,D.dMd,D.dMc,D.dMj,D.dMo,D.dMl,D.dMh],A.as("O<lW>"))
D.dsR=w([B.bu,B.br],x.O)
D.dtD=w([B.iB,B.ob,B.dT],x.O)
D.ahG=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.aiE=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bn8=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.beM=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aCG=w([D.ahG,D.aiE,D.bn8,D.beM],x.O)
D.duQ=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a6m=w(["top","middle","bottom"],x.s)
D.dwf=w([B.cn,B.bl,B.d6],x.O)
D.aD_=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.b8z=new A.ac(0,B.G,B.aU,B.I,14)
D.aD2=w([D.b8z],x.V)
D.bm2=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dwU=w([D.aga,D.ZC,D.bm2],x.O)
D.dwV=w([B.b3,B.cX,B.e6],x.O)
D.emB=new A.o(24,-8)
D.enj=new A.o(48,0)
D.emx=new A.o(24,6)
D.dyz=w([B.I,D.emB,D.enj,D.emx],x.g)
D.dyY=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.ej6={top:0,middle:1,bottom:2}
D.dCc=new A.bu(D.ej6,["Top","Middle","Bottom"],x.r)
D.eiH={double:0,single:1,corners:2,none:3}
D.dCi=new A.bu(D.eiH,["Double line","One line","Corners","None"],x.r)
D.ejX={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dDO=new A.bu(D.ejX,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dE_=new A.bu(B.i_,[],A.as("bu<H,+(n,n)>"))
D.eiZ={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.DJ=new A.bu(D.eiZ,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.as("bu<n,H>"))
D.dGH=new H.NO(32,null)
D.dGI=new H.NO(40,null)
D.dGJ=new H.NO(46,null)
D.aL3=new C.atZ(null)
D.els=new A.o(0,40)
D.elt=new A.o(0,412)
D.elv=new A.o(0,900)
D.elF=new A.o(0,-34)
D.elG=new A.o(0,-46)
D.elI=new A.o(0,-74)
D.elL=new A.o(100,300)
D.elM=new A.o(10,14)
D.elP=new A.o(10,-10)
D.elU=new A.o(10,-46)
D.elV=new A.o(10,-58)
D.elW=new A.o(116,442)
D.elY=new A.o(11,-1)
D.elZ=new A.o(11,-10)
D.em_=new A.o(11,-21)
D.aLr=new A.o(11,-60)
D.em6=new A.o(14,-2)
D.em7=new A.o(150,520)
D.a8l=new A.o(150,592)
D.ema=new A.o(15,-15)
D.emb=new A.o(16,-1)
D.emf=new A.o(190,444)
D.emi=new A.o(1,5)
D.emq=new A.o(21,-78)
D.emr=new A.o(222,615)
D.Jx=new A.o(225,300)
D.a8o=new A.o(225,574)
D.emA=new A.o(24,-52)
D.emC=new A.o(250,210)
D.emN=new A.o(2,-56)
D.aLF=new A.o(300,0)
D.emO=new A.o(300,440)
D.emR=new A.o(318,476)
D.emU=new A.o(324,144)
D.a8r=new A.o(332,150)
D.emW=new A.o(335,585)
D.emX=new A.o(338,140)
D.emY=new A.o(340,158)
D.en_=new A.o(34,-60)
D.E9=new A.o(36,-24)
D.en1=new A.o(372,470)
D.en2=new A.o(390,455)
D.enb=new A.o(42,468)
D.enc=new A.o(431,510)
D.end=new A.o(431,520)
D.ene=new A.o(45,-92)
D.enf=new A.o(46,20)
D.eng=new A.o(46,-92)
D.enh=new A.o(46,-94)
D.eni=new A.o(47,-4)
D.enk=new A.o(48,-4)
D.ens=new A.o(4,-26)
D.enA=new A.o(60,455)
D.enH=new A.o(8,14)
D.enL=new A.o(8,-76)
D.enN=new A.o(95,575)
D.enO=new A.o(98,-24)
D.enQ=new A.o(9,-2)
D.enR=new A.o(9,-58)
D.aLO=new A.o(9,-79)
D.enS=new A.o(9,-9)
D.eou=new A.o(16.5,8)
D.eow=new A.o(3.2,0)
D.eoy=new A.o(-16.5,8)
D.eoF=new A.o(16.5,2)
D.eoI=new A.o(-3.2,0)
D.eoR=new A.o(9.5,6)
D.eoV=new A.o(-10,14)
D.eoW=new A.o(-10,-12)
D.eoX=new A.o(-10,-58)
D.eoZ=new A.o(-11,-1)
D.ep_=new A.o(-11,-10)
D.ep1=new A.o(-11,-60)
D.ep2=new A.o(-12,-14)
D.ep3=new A.o(-12,-16)
D.epa=new A.o(-14,-2)
D.epd=new A.o(-15,-15)
D.epe=new A.o(-15,-3)
D.epg=new A.o(-16,-1)
D.epx=new A.o(-24,-52)
D.epE=new A.o(-2,-34)
D.epF=new A.o(-2,-38)
D.epH=new A.o(-30,-100)
D.a8s=new A.o(-36,-24)
D.epS=new A.o(-4,-26)
D.epU=new A.o(-4,-6)
D.eq3=new A.o(-8,-3)
D.eq4=new A.o(-8,-48)
D.eq7=new A.o(-9,-2)
D.eq9=new A.o(-9,-58)
D.eqa=new A.o(-9,-79)
D.eqb=new A.o(-9,-9)
D.eqd=new A.o(-9.5,6)
D.eqr=new A.o(-16.5,2)
D.fM3=new A.B("Write a new book",null,B.hk,null,B.K,null,null,null,null,null,null,null)
D.er0=new A.D(B.kt,D.fM3,null)
D.h_R=new A.B("Tap to go on",null,B.vx,null,null,null,null,null,null,null,null,null)
D.ern=new A.D(B.lg,D.h_R,null)
D.ar0=new A.ae(B.hW,18,B.c,null,null,null)
D.fFb=new A.B("Add",null,B.l4,null,null,null,null,null,null,null,null,null)
D.deg=w([D.ar0,B.r5,D.fFb],x.p)
D.f92=new A.c6(B.aL,B.e,B.Q,B.l,null,B.p,null,0,D.deg,null)
D.erq=new A.D(B.nE,D.f92,null)
D.err=new A.D(E.ale,A8.XY,null)
D.fyO=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIk=new A.B("New Project",null,D.fyO,null,null,null,null,null,null,null,null,null)
D.diF=w([D.ar0,B.ae,D.fIk],x.p)
D.f95=new A.c6(B.aL,B.e,B.Q,B.l,null,B.p,null,0,D.diF,null)
D.erF=new A.D(B.iu,D.f95,null)
D.fKS=new A.B("Choose your header",null,A1.vw,null,null,null,null,null,null,null,null,null)
D.es_=new A.D(B.hV,D.fKS,null)
D.be_=new A.fk(2.2,null,null,null,null,B.cG,null,null,null,null)
D.feN=new A.a6(22,22,D.be_,null)
D.bc5=new A.cg(B.A,null,null,D.feN,null)
D.es4=new A.D(B.a_W,D.bc5,null)
D.bCL=new A.R(14,2,14,6)
D.fYY=new A.B("The top of your book. Tap a design to see it.",null,Q.tD,null,null,null,null,null,null,null,null,null)
D.es5=new A.D(D.bCL,D.fYY,null)
D.fK_=new A.B("\ud83c\udfc6 A new record!",null,B.fY,null,null,null,null,null,null,null,null,null)
D.es7=new A.D(B.lg,D.fK_,null)
D.etH=new A.j1(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.etK=new A.j1(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aMp=new A.j1(1,0.9607843137254902,0.48627450980392156,0)
D.JG=new A.j1(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.Al=new A.j1(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.etQ=new A.j1(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hwr=new C.bjk(null)
D.bxE=new A.mF(D.hwr,null,B.az,null,null)
D.aQ2=new A.cL(0,0,0,0,null,null,D.bxE,null)
D.fFd=new A.B("\ud83c\udfc5",null,B.aaL,null,null,null,null,null,null,null,null,null)
D.eye=new A.cL(null,0,-34,null,null,null,D.fFd,null)
D.eGi=new A.y("E","Sit by the fire again")
D.eLT=new A.y("C","Good Learner")
D.ePj=new A.y("D","Still Growing")
D.eTT=new A.y(-42,42)
D.eVd=new A.y("B","Faithful Listener")
D.eXb=new A.y("A","Keeper of the Family")
D.f_l=new A.b5(-17,0.7,0)
D.f_V=new A.b5(-8,0.95,1.3)
D.f0Y=new A.b5(18,0.65,5.2)
D.f1_=new A.b5(0,1.15,2.6)
D.f1j=new A.b5(9,0.9,3.9)
D.f3a=new A.cu([0,0,1,1])
D.aRx=new A.a1(0,0,520,160)
D.f64=new A.a1(10,612,440,618)
D.f65=new A.a1(10,612,440,628)
D.f68=new A.a1(14,-64,34,-12)
D.f6b=new A.a1(300,336,350,348)
D.a9m=new A.a1(30,96,420,346)
D.f6c=new A.a1(30,-9,46,1)
D.f6d=new A.a1(4,2,11,14)
D.f6f=new A.a1(-8,-12.5,8,-7)
D.f6g=new A.a1(-16.5,-21,16.5,1)
D.f6h=new A.a1(60,342,88,348)
D.Uy=new A.a1(66,-66,94,-36)
D.f6i=new A.a1(6,8,10,14)
D.f6l=new A.a1(95,343,115,348)
D.f6m=new A.a1(-6.5,-74,6.5,-58)
D.f6s=new A.a1(-100,-74,100,-12)
D.f6t=new A.a1(-10,8,-6,14)
D.f6u=new A.a1(-11,2,-4,14)
D.f6v=new A.a1(-11,-70,11,-56)
D.f6C=new A.a1(-13,-24,13,-4)
D.f6I=new A.a1(-15,-21,15,0)
D.f6L=new A.a1(-16,-21,16,1)
D.f6M=new A.a1(-16,-21,16,2)
D.f6P=new A.a1(-16,-26,16,-6)
D.f6Z=new A.a1(-230,-26,230,26)
D.f7m=new A.a1(-38,-26,12,-6)
D.f7q=new A.a1(-3,-70,3,-63)
D.f7r=new A.a1(-44,-22,44,0)
D.f7t=new A.a1(-46,-9,-30,1)
D.aRB=new A.a1(-80,-190,80,20)
D.f7A=new A.a1(-8,-26,40,-6)
D.f7B=new A.a1(-98,-80,92,-75)
D.f7C=new A.a1(-9,-15,9,-9)
D.fYw=new A.B("Let the AI write it from your tree",null,B.iz,null,B.K,null,null,null,null,null,null,null)
D.bL9=new A.dn(1,B.cp,D.fYw,null)
D.daQ=w([E.a3E,B.ae,D.bL9],x.p)
D.f8H=new A.c6(B.aL,B.e,B.Q,B.l,null,B.p,null,0,D.daQ,null)
D.fES=new A.B("Save member",null,B.cg,null,null,null,null,null,null,null,null,null)
D.dqL=w([D.arS,B.ae,D.fES],x.p)
D.f8R=new A.c6(B.aL,B.bb,B.i,B.l,null,B.p,null,0,D.dqL,null)
D.bWK=new A.ae(B.id,14,B.b1,null,null,null)
D.fsq=new A.G(!0,B.b1,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIK=new A.B("Cashier",null,D.fsq,null,null,null,null,null,null,null,null,null)
D.djb=w([D.bWK,B.bm,D.fIK],x.p)
D.f8V=new A.c6(B.aL,B.e,B.Q,B.l,null,B.p,null,0,D.djb,null)
D.fET=new A.B("Transfer & settings",null,B.di,null,null,null,null,null,null,null,null,null)
D.bIU=new A.bz(1,B.bc,D.fET,null)
D.d2a=w([D.ars,B.au,D.bIU],x.p)
D.f8W=new A.c6(B.aL,B.e,B.i,B.l,null,B.p,null,0,D.d2a,null)
D.fdt=new A.av(16,40)
D.fdy=new A.av(22,64)
D.fdF=new A.av(280,88)
D.fet=new A.a6(30,null,null,null)
D.fDY=new A.B("The teacher is writing\u2026",null,B.AH,null,null,null,null,null,null,null,null,null)
D.bdd=new A.cg(B.A,null,null,D.fDY,null)
D.hql=new A.bK("w",x.W)
D.feT=new A.a6(null,56,D.bdd,D.hql)
D.ffH=new A.hG(5,8,8,1,null)
D.ffP=new A.hG(2,12,12,1.05,null)
D.fIq=new A.B("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fgx=new A.b1(D.fIq,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fIF=new A.B("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aTR=new A.b1(D.fIF,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fR6=new A.B("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fh0=new A.b1(D.fR6,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.h0U=new A.B("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fh5=new A.b1(D.h0U,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fKQ=new A.B("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fhc=new A.b1(D.fKQ,null,null,null,null,null,null,null,null,null,null,null,null,B.h2,!1,null,null,null,B.t,null)
D.fZa=new A.B("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aTV=new A.b1(D.fZa,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fKO=new A.B("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fhC=new A.b1(D.fKO,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fFu=new A.B("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fhE=new A.b1(D.fFu,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fOx=new A.B("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fhK=new A.b1(D.fOx,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.h1D=new A.B("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fip=new A.b1(D.h1D,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fXq=new A.B("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fiO=new A.b1(D.fXq,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.h0Y=new A.B("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fiR=new A.b1(D.h0Y,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fSM=new A.B("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fiT=new A.b1(D.fSM,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fMH=new A.B("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fiU=new A.b1(D.fMH,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fMI=new A.B("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fjU=new A.b1(D.fMI,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fIs=new A.B("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fkb=new A.b1(D.fIs,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fKr=new A.B("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fkv=new A.b1(D.fKr,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fSc=new A.B("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fkL=new A.b1(D.fSc,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fNx=new A.B("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fkM=new A.b1(D.fNx,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fxv=new A.G(!0,B.bD,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmn=new A.en("\u2665",null,null,B.cJ,null,null,null,null,null,null,D.fxv)
D.fuK=new A.G(!0,B.aP,null,null,null,null,28,B.V,B.cH,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmD=new A.en("Today: how well do you know the family?",null,null,B.cJ,null,null,null,null,null,null,D.fuK)
D.fmV=new A.G(!0,B.q6,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo1=new A.G(!0,D.kM,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fos=new A.G(!0,D.kM,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fow=new A.G(!0,B.cO,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foF=new A.G(!0,D.fy,null,null,null,null,15,B.V,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foQ=new A.G(!0,D.fy,null,null,null,null,13,B.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp9=new A.t6(!0,B.tp,null,null,null,null,B.dD,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpp=new A.G(!0,B.cO,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fps=new A.G(!0,D.kM,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpt=new A.G(!0,B.cO,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpy=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpB=new A.G(!0,B.cO,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq6=new A.G(!0,B.b1,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq7=new A.G(!0,B.ab,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq9=new A.G(!0,B.aP,null,null,null,null,15.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqB=new A.G(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aV5=new A.G(!0,B.aS,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aV7=new A.G(!0,D.lB,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr_=new A.G(!0,B.cO,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aaQ=new A.t6(!0,B.U3,null,null,null,null,B.dD,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.Vs=new A.G(!0,B.cO,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr9=new A.G(!0,B.S,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fre=new A.G(!0,D.fy,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frC=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsM=new A.G(!0,D.fy,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVh=new A.G(!0,D.fy,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft5=new A.G(!0,B.ab,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftg=new A.G(!0,D.fy,null,null,null,null,null,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fti=new A.G(!0,null,null,null,null,null,8,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fto=new A.G(!0,L.iZ,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVl=new A.G(!0,D.fy,null,null,null,null,14.5,B.V,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuk=new A.G(!0,D.fy,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuD=new A.G(!0,D.fy,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuF=new A.G(!0,B.S,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuH=new A.G(!0,B.cO,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv3=new A.G(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A7.Ix,null,null,null)
D.aVA=new A.G(!0,D.fy,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvr=new A.G(!0,B.S,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvM=new A.G(!0,B.fh,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw9=new A.G(!0,B.bR,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwd=new A.G(!0,B.bC,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwp=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fws=new A.G(!0,D.fy,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwA=new A.G(!0,D.G4,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwJ=new A.G(!0,B.b1,null,null,null,null,13,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx8=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxf=new A.G(!0,B.ab,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Dm,null,null,null)
D.fxF=new A.G(!0,B.cO,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxO=new A.G(!0,B.cG,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy0=new A.G(!0,D.lC,null,null,null,null,13,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVV=new A.G(!0,D.fy,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.KM=new A.G(!0,B.cO,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVX=new A.G(!0,B.cO,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Dm,null,null,null)
D.fyk=new A.G(!0,B.bR,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyo=new A.G(!0,G.np,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyM=new A.G(!0,B.b1,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz3=new A.G(!0,D.fy,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzr=new A.G(!0,B.c,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzP=new A.G(!0,D.fy,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAi=new A.G(!0,D.fy,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAn=new A.G(!0,B.am,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAw=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.abk=new A.G(!0,B.am,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.abm=new A.G(!0,D.lB,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCe=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCw=new A.G(!0,B.aP,null,null,null,null,27,B.V,B.cH,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCE=new A.G(!0,L.iZ,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCM=new A.G(!0,L.iZ,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDf=new A.B("Time:",null,B.hi,null,null,null,null,null,null,null,null,null)
D.fDB=new A.B("\ud83c\udfae",null,K.abb,null,null,null,null,null,null,null,null,null)
D.fDC=new A.B("Themes",null,B.pP,null,null,null,null,null,null,null,null,null)
D.fE5=new A.B("\ud83c\udfb2",null,B.xj,null,null,null,null,null,null,null,null,null)
D.fE9=new A.B("Delete this game?",null,B.iz,null,null,null,null,null,null,null,null,null)
D.fEg=new A.B("Add Item",null,B.cg,null,null,null,null,null,null,null,null,null)
D.ft0=new A.G(!0,B.S,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEH=new A.B("Debt receipt",null,D.ft0,null,B.K,null,null,null,null,null,null,null)
D.aWa=new A.G(!0,B.am,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF_=new A.B("Person who owes",null,D.aWa,null,null,null,null,null,null,null,null,null)
D.fFX=new A.B("Notes",null,B.aaZ,null,null,null,null,null,null,null,null,null)
D.fGn=new A.B("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.frU=new A.G(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGq=new A.B("Share",null,D.frU,null,null,null,null,null,null,null,null,null)
D.fHm=new A.B("Move your family trees",null,I.abi,null,null,null,null,null,null,null,null,null)
D.fI1=new A.B("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fIE=new A.B("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fJ1=new A.B("SAVE",null,D.KM,null,null,null,null,null,null,null,null,null)
D.fJE=new A.B("The round button is the right answer.",null,Q.xg,null,null,null,null,null,null,null,null,null)
D.fJZ=new A.B("Remove this book?",null,B.fY,null,null,null,null,null,null,null,null,null)
D.fyJ=new A.G(!0,B.cO,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Dm,null,null,null)
D.fKw=new A.B("Fireside Stories",null,D.fyJ,null,null,null,null,null,null,null,null,null)
D.aWH=new A.B("Download",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fLd=new A.B("What should the AI do?",null,B.di,null,null,null,null,null,null,null,null,null)
D.frx=new A.G(!0,D.lB,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLs=new A.B("REPORT CARD",null,D.frx,null,null,null,null,null,null,null,null,null)
D.fMa=new A.B("Calabash Catch",null,B.KP,null,null,null,null,null,null,null,null,null)
D.fMD=new A.B("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fN4=new A.B("\ud83c\udfe1",null,B.EG,null,null,null,null,null,null,null,null,null)
D.fNM=new A.B("Ribbon bookmark",null,B.jv,null,null,null,null,null,null,null,null,null)
D.fAh=new A.G(!0,B.b1,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOg=new A.B("NGMY.ORG",null,D.fAh,null,B.K,null,null,null,null,null,null,null)
D.fPA=new A.B("Scan family tree QR",null,B.cC,null,null,null,null,null,null,null,null,null)
D.fwt=new A.G(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQm=new A.B("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fwt,null,B.K,null,null,null,null,null,null,null)
D.fRA=new A.B("Delete",null,B.Vm,null,null,null,null,null,null,null,null,null)
D.fRB=new A.B("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fRI=new A.B("Thumbnail",null,B.pP,null,null,null,null,null,null,null,null,null)
D.fSi=new A.B("Save the cover",null,B.cC,null,null,null,null,null,null,null,null,null)
D.fSn=new A.B("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.xl,null,B.K,null,null,null,null,null,null,null)
D.fSN=new A.B("Your photos",null,B.pP,null,null,null,null,null,null,null,null,null)
D.fT2=new A.B("Create Project",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fTq=new A.B("\u2b50 stars",null,B.Vz,null,null,null,null,null,null,null,null,null)
D.fTE=new A.B("Design your cover",null,A1.vw,null,null,null,null,null,null,null,null,null)
D.fTK=new A.B("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fTO=new A.B("PICTURE",null,M.vB,null,null,null,null,null,null,null,null,null)
D.fTQ=new A.B("\ud83c\udfaf",null,D.VN,null,null,null,null,null,null,null,null,null)
D.fUb=new A.B("Paid",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fUd=new A.B("You can undo it right after.",null,Q.xg,null,null,null,null,null,null,null,null,null)
D.fUK=new A.B("Print",null,B.vy,null,null,null,null,null,null,null,null,null)
D.fV8=new A.B("Amount owed",null,D.aWa,null,null,null,null,null,null,null,null,null)
D.fVn=new A.B("Got it",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fVZ=new A.B("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fW1=new A.B("Add to budget",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fWu=new A.B("Debtor signature",null,B.aaZ,null,null,null,null,null,null,null,null,null)
D.fWE=new A.B("Change icon",null,B.aaY,null,null,null,null,null,null,null,null,null)
D.fXr=new A.B("MADE BY THE SYSTEM, FROM YOUR TREE",null,T.tF,null,null,null,null,null,null,null,null,null)
D.fXT=new A.B("Family tree QR",null,B.cC,null,null,null,null,null,null,null,null,null)
D.fXZ=new A.B("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.VM,null,null,null,null,null,null,null,null,null)
D.fYm=new A.B("Download",null,B.vy,null,null,null,null,null,null,null,null,null)
D.fYn=new A.B("The person who planted this tree has not made a game yet.",null,B.AQ,null,null,null,null,null,null,null,null,null)
D.fYr=new A.B("Change",null,B.pP,null,null,null,null,null,null,null,null,null)
D.fZg=new A.B("Clear all",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fZj=new A.B("WHAT SHOULD IT CHANGE?",null,M.vB,null,null,null,null,null,null,null,null,null)
D.fZT=new A.B("COLOUR",null,M.vB,null,null,null,null,null,null,null,null,null)
D.h_6=new A.B("Do it",null,B.cC,null,null,null,null,null,null,null,null,null)
D.h_9=new A.B("Create Tree",null,B.cg,null,null,null,null,null,null,null,null,null)
D.h_i=new A.B("Give me another clue",null,D.KM,null,null,null,null,null,null,null,null,null)
D.h0c=new A.B("Create Family Tree",null,B.fb,null,null,null,null,null,null,null,null,null)
D.h0m=new A.B("THE TEACHER EXPLAINS THESE",null,T.tF,null,null,null,null,null,null,null,null,null)
D.fmU=new A.G(!0,E.ko,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0s=new A.B("Write the first page myself",null,D.fmU,null,null,null,null,null,null,null,null,null)
D.h10=new A.B("Use this header",null,B.cC,null,null,null,null,null,null,null,null,null)
D.h17=new A.B("Create Project",null,E.aVS,null,null,null,null,null,null,null,null,null)
D.hrF=new C.act(1,"header")
D.acn=new C.act(2,"projects")
D.hrG=new C.act(3,"cashier")
D.aco=new C.act(4,"familyTree")
D.hFn=new C.cFS(0,"start")
D.hFo=new C.cFT(0,"start")
D.hs3=new C.ZC(null)
D.ht4=new C.a_4(null)
D.dDX=new A.bu(B.i_,[],A.as("bu<n,GA>"))
D.dlT=w([],x.dE)
D.dlU=w([],x.M)
D.htB=new C.bgw(D.dDX,D.dlT,D.dlU,0,0,null,null)
D.b04=new C.a_V(0,"intro")
D.b05=new C.a_V(1,"countdown")
D.acC=new C.a_V(2,"ask")
D.WG=new C.a_V(3,"reveal")
D.b06=new C.a_V(4,"end")
D.hwt=new C.te(F.Gd,D.lC,B.cO,F.lD,5,!1,!1,!1,0,null)
D.hwu=new C.te(F.Gd,B.er,B.cO,B.bP,2,!0,!0,!1,2,B.cO)
D.hwv=new C.te(B.oi,B.cG,B.cO,F.lD,2,!0,!1,!1,2,B.av)
D.hww=new C.te(F.Gd,B.dJ,B.cO,F.lD,5,!1,!1,!1,1,null)
D.hwx=new C.te(F.ZS,D.aiE,B.cO,F.lD,4,!0,!1,!0,0,null)
D.b09=new C.te(F.ZS,B.dK,B.cO,F.lD,3,!0,!1,!0,2,null)
D.b0a=new C.te(F.mU,D.lC,B.c,F.lD,0,!1,!1,!0,0,null)
D.b0b=new C.te(B.oi,B.aE,B.cO,B.bP,2,!0,!0,!1,2,B.dK)
D.b0c=new C.te(B.oi,G.np,B.ib,F.lD,5,!1,!1,!0,3,null)
D.hwy=new C.te(B.oi,B.dK,B.cO,F.lD,0,!0,!1,!1,0,B.aE)
D.b0d=new C.te(F.Gd,B.er,B.cO,B.bP,1,!1,!0,!1,1,null)
D.b0e=new C.te(F.FN,B.av,B.aE,F.lD,4,!0,!1,!0,2,null)
D.hwz=new C.te(F.mU,B.av,B.er,F.lD,3,!0,!1,!1,0,null)
D.hwA=new C.te(B.oi,B.dJ,B.cO,B.bP,1,!1,!0,!1,1,null)
D.hwB=new C.te(F.FN,D.ahG,B.c,F.lD,5,!1,!1,!0,0,null)
D.hxe=new C.a0s(null)
D.hFw=new C.afQ(0,"still")
D.X2=new C.afQ(1,"walk")
D.b0F=new C.afQ(2,"pound")
D.b0G=new C.afQ(3,"drum")
D.hBe=new C.a1K(0,"greet")
D.b0H=new C.a1K(1,"teach")
D.acW=new C.a1K(2,"ask")
D.hBf=new C.a1K(3,"feedback")
D.b0I=new C.a1K(4,"end")
D.X7=new C.a22(0,"intro")
D.X8=new C.a22(1,"asking")
D.B5=new C.a22(2,"reacting")
D.ad5=new C.a22(3,"driving")
D.ad6=new C.a22(4,"arrived")
D.ad9=new C.aLp(0,"projects")
D.b15=new C.aLp(1,"cashier")
D.hDg=new C.aLp(2,"familyTree")})()};
(a=>{a["trek9jXE3FBhboA60UL61W4xxJE="]=a.current})($__dart_deferred_initializers__);