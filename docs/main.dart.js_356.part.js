((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,Aa,N,P,A0,S,Ab,K,H,E,T,Ac,Q,Ad,U,Ae,Af,A1,Ag,Ah,R,M,A2,A3,Ai,A4,A5,A6,Aj,Ak,A7,Al,Am,A8,An,G,Ao,Ap,Aq,A9,Ar,V,O,As,At,W,Au,X,Y,F,Av,L,I,Z,C={
bEz(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bEz=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vC(null,""),$async$bEz)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.W(y.z)
t=A.nf(b1)
s=A.bZ(b3.length,null,!1,x.h5)
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
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.L)(h),++d){a0=h[d]
f.push(A.H(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.X.aq(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.r7(t,a1,B.hS,"book",E.G2),$async$bEz)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.QU(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.W(l!=null&&A.Lp(l)?y.k:y.y)
for(j=J.a6(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a2(r.a(j.h(a2,a7)),q,p):B.cA
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
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=H.a2R(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEz,v)},
ahm(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ahm=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vC(null,""),$async$ahm)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.W(y.z)
t=A.nf(b6)
s=x.S
r=A.d_(c1,0,A.dA(4,"count",s),A.T(c1).c)
q=H.a2E(new A.N(r,new C.fIB(),r.$ti.k("N<ak.E,m>")).aG(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fIA(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.X.aq(b7,null)+"\nAllowed values: style one of "+B.d.aG(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ahm)
case 6:l=c5
k=H.QU(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.aoT(s,D.dz_,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
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
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.L)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.H(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.X.aq(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ahm)
case 10:l=c5
k=l==null?null:H.QU(l)
if(k==null)throw A.W(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.de(a8,d),a5=J.aW(a2.a),a2=a2.$ti,a7=new A.lb(a5,a2.k("lb<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gS(a5))
b0=J.a6(a9)
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
case 9:if(h.a!==0){s=h.$ti.k("bd<2>")
p=A.cF(new A.bd(h,s),new C.fIC(),s.k("M.E"),p)
p=H.a2E(A.pt(p,3,A.a7(p).k("M.E")).aG(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cx<1>")
b4=A.C(new A.cx(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.L)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a2R(s,b9),$async$ahm)
case 13:b5=c5
for(s=J.a6(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.aoT(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahm,v)},
hyq(d,e,f){return A.ck(null,B.w.j(0.65),!1,null,new C.fS4(e,f),d,null,!0,!0,x.g2)},
aoT:function aoT(d,e,f){this.a=d
this.b=e
this.c=f},
fIB:function fIB(){},
fIA:function fIA(d){this.a=d},
fIC:function fIC(){},
fS4:function fS4(d,e){this.a=d
this.b=e},
bCo(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bCo=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b3(b1,new C.fwE())){u=null
w=1
break}t=B.d.d5(b1,new C.fwF())
s=$.S()
r=new A.p0()
q=A.z8(r,D.aPF)
p=A.I()
p.r=B.c.gp(0)
q.aO(D.aPF,p)
o=A.I()
o.r=B.N.gp(0)
o.c=3.6
o.b=B.a9
o.d=B.bA
o.e=B.dQ
n=new C.fwK(t)
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
a3=new A.aF(s.r,B.ag,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.L)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.aY(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bw(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.aq(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bw(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aH(a3,o)}else{p=A.a([],x.v)
a3=new A.aF(s.r,B.ag,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.L)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.aY(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bw(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.aq(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bw(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aH(a3,o)}w=4
return A.b(r.ni().xc(520,160),$async$bCo)
case 4:w=3
return A.b(b3.hw(B.h9),$async$bCo)
case 3:b0=b3
u=b0==null?null:J.eS(B.dK.gaR(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCo,v)},
fGh(d){return C.icr(d)},
icr(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fGh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bhG()
n=d.x!=null&&d.zg(null).length===0
if(d.x!=null)t=n?D.zX:D.Je
else t=d.gUb()?D.Je:D.aKA
w=3
return A.b(C.bCo(d.ax),$async$fGh)
case 3:s=f
p.a=null
if(s!=null)p.a=A.anz(s)
r=A.a4M(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aKA}else{p.c=C.x0(q,!0)
p.b=n?D.zX:D.Je}r.a3H(A.h1u(new C.fGj(p,d,new C.fGk(),t,n,o),null,D.bCI,B.wN))
u=r.jA(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGh,v)},
fMW(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fMW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fGh(d),$async$fMW)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.ar(q,0,40)
u=Ah.H_(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fMW,v)},
fwE:function fwE(){},
fwF:function fwF(){},
fwK:function fwK(d){this.a=d},
fGk:function fGk(){},
fGj:function fGj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fGi:function fGi(){},
fSx(d,e){var w=0,v=A.j(x.H)
var $async$fSx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ck(null,B.w.j(0.55),!0,null,new C.fSB(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fSx)
case 2:return A.h(null,v)}})
return A.i($async$fSx,v)},
bF1(d,e,f,g){return C.ik1(d,e,f,g)},
ik1(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bF1=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gak(e.split(",")):e
r=B.cF.aN(t)}catch(q){r=null}if(r==null||r.length===0){d.K(x.q).f.U(D.fdr)
w=1
break}w=3
return A.b(A.ck(null,null,!0,null,new C.fSt(g,r,f),d,null,!0,!0,x.H),$async$bF1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bF1,v)},
fSC(d,e){var w=0,v=A.j(x.H)
var $async$fSC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ck(null,null,!0,null,new C.fSF(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fSC)
case 2:return A.h(null,v)}})
return A.i($async$fSC,v)},
aZM:function aZM(d,e){this.c=d
this.a=e},
c6r:function c6r(){},
bbZ:function bbZ(d,e){this.b=d
this.a=e},
fSB:function fSB(d,e){this.a=d
this.b=e},
fSy:function fSy(d){this.a=d},
fSz:function fSz(d,e,f){this.a=d
this.b=e
this.c=f},
fSA:function fSA(d,e){this.a=d
this.b=e},
fSt:function fSt(d,e,f){this.a=d
this.b=e
this.c=f},
fSr:function fSr(d){this.a=d},
fSs:function fSs(d,e,f){this.a=d
this.b=e
this.c=f},
fSF:function fSF(d,e){this.a=d
this.b=e},
fSD:function fSD(d){this.a=d},
fSE:function fSE(d,e,f){this.a=d
this.b=e
this.c=f},
fAX(d,e){var w=0,v=A.j(x.y),u,t
var $async$fAX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a2p(d),$async$fAX)
case 3:t=g
J.nE(t,new C.fAY(e))
u=A.ai0(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fAX,v)},
fAY:function fAY(d){this.a=d},
ap4:function ap4(d,e,f){this.c=d
this.d=e
this.a=f},
aDM:function aDM(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dMs:function dMs(d,e){this.a=d
this.b=e},
dMd:function dMd(d,e){this.a=d
this.b=e},
dMg:function dMg(d,e,f){this.a=d
this.b=e
this.c=f},
dMf:function dMf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dMe:function dMe(d,e){this.a=d
this.b=e},
dMh:function dMh(d,e){this.a=d
this.b=e},
dMb:function dMb(){},
dMc:function dMc(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dMa:function dMa(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dLW:function dLW(d){this.a=d},
dLX:function dLX(d,e,f){this.a=d
this.b=e
this.c=f},
dLY:function dLY(d,e){this.a=d
this.b=e},
dLV:function dLV(d){this.a=d},
dM2:function dM2(d,e){this.a=d
this.b=e},
dLU:function dLU(d){this.a=d},
dM3:function dM3(d,e,f){this.a=d
this.b=e
this.c=f},
dM4:function dM4(d,e,f){this.a=d
this.b=e
this.c=f},
dLT:function dLT(d,e){this.a=d
this.b=e},
dM5:function dM5(d,e,f){this.a=d
this.b=e
this.c=f},
dLS:function dLS(d,e){this.a=d
this.b=e},
dM6:function dM6(d,e){this.a=d
this.b=e},
dLR:function dLR(d){this.a=d},
dM7:function dM7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dLP:function dLP(){},
dLJ:function dLJ(d){this.a=d},
dLK:function dLK(d){this.a=d},
dLQ:function dLQ(d,e){this.a=d
this.b=e},
dM8:function dM8(d,e){this.a=d
this.b=e},
dLO:function dLO(d){this.a=d},
dM9:function dM9(d){this.a=d},
dLN:function dLN(){},
dLZ:function dLZ(d,e){this.a=d
this.b=e},
dLM:function dLM(d){this.a=d},
dM_:function dM_(d,e,f){this.a=d
this.b=e
this.c=f},
dLL:function dLL(d,e){this.a=d
this.b=e},
dLI:function dLI(d,e){this.a=d
this.b=e},
dM0:function dM0(d){this.a=d},
dM1:function dM1(d,e,f){this.a=d
this.b=e
this.c=f},
dMv:function dMv(){},
dMw:function dMw(d,e){this.a=d
this.b=e},
dMt:function dMt(d){this.a=d},
dMu:function dMu(d){this.a=d},
dMp:function dMp(d,e){this.a=d
this.b=e},
dMq:function dMq(d){this.a=d},
dMi:function dMi(d,e,f){this.a=d
this.b=e
this.c=f},
dMj:function dMj(d,e,f){this.a=d
this.b=e
this.c=f},
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
dMx:function dMx(){},
dMy:function dMy(){},
dMz:function dMz(){},
dMA:function dMA(d){this.a=d},
dMr:function dMr(d,e){this.a=d
this.b=e},
hus(d){return B.d.dK(D.a3H,new C.fBB(d),new C.fBC())},
uB:function uB(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fBB:function fBB(d){this.a=d},
fBC:function fBC(){},
al6:function al6(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aVx:function aVx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Ta:function Ta(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfB:function bfB(){this.d=$
this.c=this.a=null},
dci:function dci(d,e){this.a=d
this.b=e},
dcg:function dcg(d,e){this.a=d
this.b=e},
dch:function dch(){},
dcj:function dcj(d,e){this.a=d
this.b=e},
hf1(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bk(J.k(u==null?"":u))
return new C.no(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
Lb(d,e){return C.ib3(d,e)},
ib3(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$Lb=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Lb)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aT(J.r(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.X.aL(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.de(p,x.f)
o=A.cF(o,new C.fDS(),o.$ti.k("M.E"),x.B)
n=A.a7(o).k("Z<M.E>")
o=A.C(new A.Z(o,new C.fDT(),n),n.k("M.E"))
B.d.aY(o,new C.fDU())
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
return A.i($async$Lb,v)},
Ba(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Ba=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$Ba)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fRa(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.au("String","ngmy_family_book_v1_"+s+"_"+e,B.X.aq(r,null)),$async$Ba)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ba,v)},
aRC(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aRC=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Lb(d,e),$async$aRC)
case 2:u=h
t=J.cD(u)
s=t.bh(u,new C.fZw(f))
if(s===-1)t.c6(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Ba(d,e,u),$async$aRC)
case 3:return A.h(null,v)}})
return A.i($async$aRC,v)},
bCS(d,e,f){var w=0,v=A.j(x.H),u
var $async$bCS=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Lb(d,e),$async$bCS)
case 2:u=h
J.nE(u,new C.fAP(f))
w=3
return A.b(C.Ba(d,e,u),$async$bCS)
case 3:return A.h(null,v)}})
return A.i($async$bCS,v)},
bD5(d,e){return C.ib2(d,e)},
ib2(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bD5=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bD5)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aT(J.r(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.NU
w=1
break}p=B.X.aL(0,q,null)
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
if(D.Dd.aj(0,o.h(0,"foil")))j=A.cP(o.h(0,"foil"))
else j=J.A(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aK(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.E(i==null?25:i,18,36)
h=B.d.t(D.a5m,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.t(D.a4I,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.t(D.a4E,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.A(o.h(0,"ribbon"),!1)
o=B.d.t(D.d1p,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
o=new C.HY(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.NU
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.NU
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bD5,v)},
RZ(d,e,f){return C.ijy(d,e,f)},
ijy(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$RZ=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$RZ)
case 7:r=h
w=8
return A.b(r.au("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.X.aq(f.ah(),null)),$async$RZ)
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
return A.i($async$RZ,v)},
Rr(d,e){return C.ib4(d,e)},
ib4(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Rr=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Rr)
case 7:r=g
q=r.tz("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Lb(d,e),$async$Rr)
case 8:if(!j.cL(g)){n=B.a.i(d.toLowerCase())
m=J.lD(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Rr)
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
return A.i($async$Rr,v)},
agG(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$agG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Rr(d,e),$async$agG)
case 3:s=g
r=J.a6(s)
if(r.gL(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gL(s):"main"
r.M(s,t)
w=5
return A.b(A.az(),$async$agG)
case 5:w=4
return A.b(g.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$agG)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agG,v)},
a32(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a32=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Rr(d,e),$async$a32)
case 2:s=h
J.hC(s,f)
w=3
return A.b(A.az(),$async$a32)
case 3:u=h
w=4
return A.b(u.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a32)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a32)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a32)
case 6:return A.h(null,v)}})
return A.i($async$a32,v)},
no:function no(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fDS:function fDS(){},
fDT:function fDT(){},
fDU:function fDU(){},
fRa:function fRa(){},
fZw:function fZw(d){this.a=d},
fAP:function fAP(d){this.a=d},
HY:function HY(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bPV:function bPV(d){this.a=d},
ijR(d,e,f,g,h,i,j){return A.a4(d,!1).cc(A.e0(new C.fRJ(j,i,f,e,h,g),!0,null,x.H))},
Ro(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Ro=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Rr(h,g),$async$Ro)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.K(x.q).f.U(D.aRL)
u=!1
w=1
break}w=4
return A.b(C.hyq(d,f,e),$async$Ro)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.agG(h,g),$async$Ro)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.no(""+(q+n),l,B.a.i(m.b),new A.V(Date.now(),0,!1)))}w=6
return A.b(C.Ba(h,r,p),$async$Ro)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.RZ(h,r,new C.HY("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Ro)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ro,v)},
fRJ:function fRJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ZN:function ZN(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aAM:function aAM(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dcY:function dcY(d){this.a=d},
dcX:function dcX(d,e){this.a=d
this.b=e},
dcM:function dcM(d,e){this.a=d
this.b=e},
dcJ:function dcJ(d,e){this.a=d
this.b=e},
dck:function dck(d){this.a=d},
dcl:function dcl(d,e){this.a=d
this.b=e},
dcN:function dcN(d){this.a=d},
dct:function dct(d){this.a=d},
dcr:function dcr(d){this.a=d},
dcs:function dcs(d){this.a=d},
dcu:function dcu(d){this.a=d},
dcK:function dcK(d){this.a=d},
dcL:function dcL(){},
dcp:function dcp(d){this.a=d},
dcq:function dcq(d,e){this.a=d
this.b=e},
dcv:function dcv(d){this.a=d},
dcw:function dcw(d,e){this.a=d
this.b=e},
dcW:function dcW(d){this.a=d},
dcV:function dcV(d,e){this.a=d
this.b=e},
dcU:function dcU(d){this.a=d},
dcG:function dcG(d){this.a=d},
dcF:function dcF(d){this.a=d},
dcH:function dcH(d){this.a=d},
dcm:function dcm(d,e){this.a=d
this.b=e},
dcI:function dcI(d,e){this.a=d
this.b=e},
dcz:function dcz(d){this.a=d},
dcA:function dcA(d){this.a=d},
dcy:function dcy(){},
dcB:function dcB(d){this.a=d},
dcC:function dcC(d){this.a=d},
dcD:function dcD(d,e){this.a=d
this.b=e},
dcE:function dcE(d,e,f){this.a=d
this.b=e
this.c=f},
dcx:function dcx(d,e){this.a=d
this.b=e},
dcP:function dcP(d){this.a=d},
dcO:function dcO(){},
dcQ:function dcQ(d){this.a=d},
dcR:function dcR(d){this.a=d},
dcS:function dcS(d){this.a=d},
dcT:function dcT(d,e){this.a=d
this.b=e},
dcn:function dcn(d){this.a=d},
dco:function dco(d){this.a=d},
ZR:function ZR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bg_:function bg_(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
deI:function deI(d){this.a=d},
deJ:function deJ(d){this.a=d},
deH:function deH(d){this.a=d},
deK:function deK(d){this.a=d},
deG:function deG(d){this.a=d},
deL:function deL(d){this.a=d},
deF:function deF(d){this.a=d},
deM:function deM(d,e){this.a=d
this.b=e},
deE:function deE(d,e){this.a=d
this.b=e},
deN:function deN(d,e){this.a=d
this.b=e},
ZP:function ZP(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
af2:function af2(d,e,f){this.a=d
this.b=e
this.c=f},
aAP:function aAP(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
ddc:function ddc(d,e){this.a=d
this.b=e},
ddb:function ddb(d,e){this.a=d
this.b=e},
ddg:function ddg(d){this.a=d},
ddf:function ddf(d,e){this.a=d
this.b=e},
ddd:function ddd(d){this.a=d},
dde:function dde(d){this.a=d},
ddh:function ddh(d){this.a=d},
ddi:function ddi(d){this.a=d},
dda:function dda(d,e){this.a=d
this.b=e},
dd9:function dd9(d,e){this.a=d
this.b=e},
Kh:function Kh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Z4:function Z4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cLG:function cLG(d){this.a=d},
cLH:function cLH(){},
cLI:function cLI(d){this.a=d},
bdb:function bdb(d,e,f){this.b=d
this.c=e
this.a=f},
bd2:function bd2(d,e){this.b=d
this.a=e},
uC:function uC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Zn:function Zn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bd9:function bd9(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d4f:function d4f(d,e,f){this.a=d
this.b=e
this.c=f},
d4e:function d4e(d,e){this.a=d
this.b=e},
d4E:function d4E(d){this.a=d},
d4r:function d4r(){},
d4F:function d4F(d){this.a=d},
d4q:function d4q(){},
d4G:function d4G(d,e){this.a=d
this.b=e},
d4p:function d4p(d,e){this.a=d
this.b=e},
d4H:function d4H(d,e){this.a=d
this.b=e},
d4o:function d4o(d,e){this.a=d
this.b=e},
d4I:function d4I(d){this.a=d},
d4n:function d4n(){},
d4J:function d4J(d,e){this.a=d
this.b=e},
d4m:function d4m(d,e){this.a=d
this.b=e},
d4K:function d4K(d){this.a=d},
d4z:function d4z(d,e){this.a=d
this.b=e},
d4L:function d4L(d){this.a=d},
d4M:function d4M(d){this.a=d},
d4O:function d4O(d){this.a=d},
d4P:function d4P(d){this.a=d},
d4y:function d4y(d,e){this.a=d
this.b=e},
d4Q:function d4Q(d,e){this.a=d
this.b=e},
aHO:function aHO(d){this.a=d},
biy:function biy(d){this.a=d},
bbm:function bbm(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
al7:function al7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a14:function a14(d,e){this.a=d
this.b=e},
al8:function al8(d,e,f,g,h,i){var _=this
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
_.a8$=i
_.c=_.a=null},
bQ4:function bQ4(d){this.a=d},
bPZ:function bPZ(d){this.a=d},
bPY:function bPY(d,e){this.a=d
this.b=e},
bQ7:function bQ7(d){this.a=d},
bQ_:function bQ_(d){this.a=d},
bQ0:function bQ0(d){this.a=d},
bQ3:function bQ3(d){this.a=d},
bQ2:function bQ2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQ5:function bQ5(d,e){this.a=d
this.b=e},
bQ6:function bQ6(){},
bQ1:function bQ1(d){this.a=d},
bPW:function bPW(d,e){this.a=d
this.b=e},
bPX:function bPX(d){this.a=d},
bo6:function bo6(d,e){this.b=d
this.a=e},
aAN:function aAN(){},
iv(d,e){var w
$.S()
w=A.I()
w.b=B.a9
w.c=e
w.r=d.gp(0)
w.d=B.bA
w.e=B.dQ
return w},
bCq(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.a
J.bl(j.save())
j.translate(e.a,e.b)
d.p8(0,a0?-f:f,f)
w=A.bK(B.ib,8,36)
v=B.w.j(0.3)
u=$.S()
t=A.I()
t.r=v.gp(0)
d.dO(w,t)
w=a1===D.Wm
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ar(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.bo(D.ek7,new A.t(-4+v,-2),C.iv(q,5))
d.bo(D.ehI,new A.t(4-v,-2),C.iv(q,5))}else{t=A.bK(B.J4,14,40)
p=A.I()
p.r=v.gp(0)
d.dO(t,p)}v=u.r
u=x.v
o=new A.aF(v,B.ag,k,k,A.a([],u))
t=-64-r
o.D(new A.aY(-11,t))
o.D(new A.c4(-15,-40,-14,a3?-12:-18))
o.D(new A.aq(14,a3?-12:-18))
o.D(new A.c4(15,-40,11,t))
o.D(new A.bs())
t=A.I()
t.r=w.gp(0)
d.aH(o,t)
u=new A.aF(v,B.ag,k,k,A.a([],u))
u.D(new A.aY(-12,-50-r))
v=-46-r
u.D(new A.aq(12,v))
u.D(new A.aq(12.5,-42-r))
u.D(new A.aq(-12.5,v))
u.D(new A.bs())
v=A.I()
v.r=h.c.gp(0)
d.aH(u,v)
A:{if(D.abG===a1){w=Math.sin(g*3.4)
break A}if(D.abH===a1){w=Math.sin(g*7.5)
break A}w=s
break A}if(a1===D.abG){n=-52+w*14
d.bo(new A.t(10,n-22),new A.t(10,n+44),C.iv(F.Fg,3.4))
d.bo(D.eko,new A.t(9,n),C.iv(q,4))
d.bo(D.ei7,new A.t(10,n),C.iv(q,4))}else if(a1===D.abH){d.bo(D.ejd,new A.t(-8,-26-Math.max(0,w)*6),C.iv(q,4))
d.bo(D.egb,new A.t(8,-26-Math.max(0,-w)*6),C.iv(q,4))}else{w=s*3
v=-38-r
d.bo(D.ejh,new A.t(-12-w,v),C.iv(q,4))
d.bo(D.aJD,new A.t(12+w,v),C.iv(q,4))}w=A.I()
w.r=q.gp(0)
d.aO(D.f0X,w)
m=new A.t(0,-77-r)
w=A.bK(m,22,19)
v=A.I()
v.r=q.gp(0)
d.dO(w,v)
w=h.y
if(w!=null){v=A.bK(m.a9(0,I.v1),15,24)
u=A.I()
u.r=w.gp(0)
d.dO(v,u)
u=m.a9(0,D.eg6)
v=A.I()
v.r=w.gp(0)
d.ad(u,4,v)}else{w=A.bK(m.a9(0,B.rX),23,20)
v=h.d
u=A.I()
u.r=v.gp(0)
d.e3(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.bo(m.a9(0,D.ekm),m.a9(0,D.ejb),C.iv(v,2.2))
d.bo(m.a9(0,D.ei6),m.a9(0,D.eg3),C.iv(v,2.2))}if(w===4){w=m.a9(0,D.ekq)
u=A.I()
u.r=v.gp(0)
d.ad(w,6,u)
u=m.a9(0,D.ei8)
w=A.I()
w.r=v.gp(0)
d.ad(u,6,w)}}w=m.a9(0,D.eiZ)
v=A.I()
v.r=B.i1.gp(0)
d.ad(w,0.9,v)
v=m.a9(0,D.eiN)
w=A.I()
w.r=B.i1.gp(0)
d.ad(v,0.9,w)
if(i){l=m.a9(0,I.a7f)
w=A.bK(l,21,22)
v=A.I()
v.r=D.lv.gp(0)
d.dO(w,v)
v=A.bK(l.a9(0,I.aJA),5,12)
w=A.I()
w.r=D.bcP.gp(0)
d.dO(v,w)
d.bo(l.a9(0,D.eki),l.a9(0,I.aJX),C.iv(B.cI,1.4))
d.bo(D.aJD,new A.t(15,-88-r),C.iv(q,3.6))}j.restore()},
hta(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.a
J.bl(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bW(0,f)
v=A.bK(B.dC,18,96)
u=B.w.j(0.28)
$.S()
t=A.I()
t.r=u.gp(0)
d.dO(v,t)
t=A.bK(B.dC,11,70)
v=B.w.j(0.2)
u=A.I()
u.r=v.gp(0)
d.dO(t,u)
d.lp(D.aPJ,A.I())
C.i_z(d,g,h,i,j)
s=(k==null?D.a7k:k).a-w>=0?1:-1
w=A.I()
w.a=B.Lh
w.sam(A.ju(new A.t(s*70,-60),new A.t(-s*70,-60),A.a([D.agP.j(0.5),D.agP.j(0.12),D.bk0.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aO(D.aPJ,w)
r.restore()
r.restore()},
i_z(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a3.a,a1=A.ar(a0,B.w,0.28)
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
s=A.br(D.f0Y,B.t0)
p=$.S()
o=A.I()
o.r=u.gp(0)
a2.az(s,o)
o=A.br(D.f0T,B.hD)
s=A.ar(v,B.w,0.18)
s.toString
n=A.I()
n.r=s.gp(0)
a2.az(o,n)
n=A.br(D.f16,B.hD)
o=A.ar(v,B.w,0.1)
o.toString
s=A.I()
s.r=o.gp(0)
a2.az(n,s)
s=A.I()
s.r=a0.gp(0)
a2.dO(D.f1_,s)
s=A.I()
s.r=a0.gp(0)
a2.dO(D.f_J,s)
s=a2.a
J.bl(s.save())
s.translate(a4.w,0)
J.bl(s.save())
a2.p8(0,q,q*(1+t*0.012))
o=a3.f
m=o&&!a3.r?25:28
n=x.v
l=new A.aF(p.r,B.ag,d,d,A.a([],n))
p=-m
k=p+2
l.D(new A.aY(k,-58))
l.D(new A.c4(p-3,-62,p,-52))
l.D(new A.aq(p+4,-14))
l.D(new A.aq(m-4,-14))
l.D(new A.aq(m,-52))
l.D(new A.c4(m+3,-62,m-2,-58))
l.D(new A.c4(0,-70,k,-58))
l.D(new A.bs())
k=A.I()
k.r=v.gp(0)
a2.aH(l,k)
J.bl(s.save())
a2.mI(0,l)
switch(a3.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.d8_[j]
i=new A.ao(B.Q,B.M,B.S,B.T,B.R)
i.b=B.a9
i.c=5
i.r=k.gp(0)
i.d=B.bA
i.e=B.dQ
h=i.G()
s.drawLine.apply(s,[-34+u,-64,14+u,-14,h])
h.delete()}break
case 2:for(k=a3.c,g=-56;g<-14;g+=11)for(f=-26+B.o.F(B.o.ao(g,11),2)*6;f<28;f+=12){i=k.j(0.85)
$.S()
e=new A.ao(B.Q,B.M,B.S,B.T,B.R)
e.r=i.gp(0)
h=e.G()
s.drawCircle(f,g,3.6,h)
h.delete()
e=new A.ao(B.Q,B.M,B.S,B.T,B.R)
e.r=u.gp(0)
h=e.G()
s.drawCircle(f,g,1.6,h)
h.delete()}break
case 3:for(u=a3.c,f=-28;f<30;f+=8){k=u.j(0.7)
i=new A.ao(B.Q,B.M,B.S,B.T,B.R)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.bA
i.e=B.dQ
h=i.G()
s.drawLine.apply(s,[f,-64,f,-14,h])
h.delete()}for(g=-60;g<-14;g+=8){k=u.j(0.7)
i=new A.ao(B.Q,B.M,B.S,B.T,B.R)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.bA
i.e=B.dQ
h=i.G()
s.drawLine.apply(s,[-30,g,30,g,h])
h.delete()}break
default:a2.bo(D.ejN,D.egP,C.iv(a3.c.j(0.9),3))}a2.bo(D.ekj,D.ejj,C.iv(B.w.j(0.18),1.6))
a2.bo(D.ega,I.aJF,C.iv(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.S()
i=A.I()
i.r=u.gp(0)
a2.aO(D.f_F,i)
s.restore()
i=A.I()
i.r=a1.gp(0)
a2.aO(D.f_T,i)
n=new A.aF(k.r,B.ag,d,d,A.a([],n))
n.D(new A.aY(-9,-66))
n.D(new A.c4(0,-57,9,-66))
n.D(new A.c4(0,-60,-9,-66))
k=A.I()
k.r=a0.gp(0)
a2.aH(n,k)
if(a3.e!==1)u=a3.r&&!o
else u=!0
if(u)a2.e3(D.f01,0.1,2.941592653589793,!1,C.iv(a3.c,2.2))
s.restore()
u=-56*q
o=a4.Q
if(o==null)o=D.a7o
n=25*q
k=23*q
i=9*q
C.hpp(a2,new A.t(p*q+2,u),o,n,k,-1,v,a0,i)
o=a4.as
p=o==null?D.DG:o
C.hpp(a2,new A.t(m*q-2,u),p,n,k,1,v,a0,i)
if(a4.at){a2.bo(D.ehA,D.ehw,C.iv(D.ahG,4))
a2.bo(D.ehy,D.ehu,C.iv(D.FG.j(0.7),1.4))
u=A.I()
u.r=B.cI.gp(0)
a2.ad(D.ehx,5,u)}s.restore()
u=a4.w
p=a4.e
o=a4.r
J.bl(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a2.ih(0,a4.f)
a2.bW(0,r)
C.i_w(a2,a3,a4,a5,a6,a0,a1,w)
s.restore()},
hpp(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aE(0,e),r=s.gcF(),q=r===0?B.ib:s.eV(0,r),p=B.k.E(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.t(o,w)
if(o*i<0)v=new A.t(-o,-w)
u=e.a9(0,q.aI(0,n)).a9(0,v.aI(0,m))
t=e.a9(0,q.aI(0,p))
d.bo(e,u,C.iv(j,l))
o=A.ar(j,B.w,0.2)
o.toString
d.bo(e,u,C.iv(o,l*0.35))
d.bo(u,t,C.iv(k,l*0.78))
o=A.ar(k,B.w,0.22)
o.toString
d.bo(u,t,C.iv(o,l*0.22))
$.S()
o=A.I()
o.r=j.gp(0)
d.ad(u,l*0.55,o)
o=A.bK(t,l*1.15,l)
w=A.I()
w.r=k.gp(0)
d.dO(o,w)
w=-l
w=t.a9(0,new A.t(i*w*0.45,w*0.1))
o=A.I()
o.r=k.gp(0)
d.ad(w,l*0.28,o)},
i_w(c3,c4,c5,c6,c7,c8,c9,d0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=null,c1=c4.d,c2=c4.e
if(c2===3||c2===4){w=A.bK(B.v0,40,38)
$.S()
v=A.I()
v.r=c1.gp(0)
c3.dO(w,v)}if(c2===4){$.S()
w=A.I()
w.r=c1.gp(0)
c3.ad(D.ejt,9.5,w)
w=A.I()
w.r=c1.gp(0)
c3.ad(D.egp,9.5,w)}w=A.bK(D.ekG,10,6)
v=$.S()
u=A.I()
u.r=c9.gp(0)
c3.dO(w,u)
u=A.bK(D.eiW,10,6)
w=A.I()
w.r=c9.gp(0)
c3.dO(u,w)
v=v.r
w=x.v
t=new A.aF(v,B.ag,c0,c0,A.a([],w))
t.D(new A.aY(0,-20))
t.D(new A.l_(13,-20,17,-9,16,2))
t.D(new A.l_(15,13,8,20,0,20))
t.D(new A.l_(-8,20,-15,13,-16,2))
t.D(new A.l_(-17,-9,-13,-20,0,-20))
t.D(new A.bs())
u=A.I()
u.sam(A.ts(D.ek9,28,A.a([d0,c8,c9],x.O),A.a([0,0.55,1],x.n),B.x,c0,c0,0))
c3.aH(t,u)
u=c4.r
if(u){s=C.iv(c9.j(0.5),0.8)
c3.e3(D.f18,3.455751918948773,2.5132741228718345,!1,s)
c3.e3(D.f_M,3.455751918948773,2.5132741228718345,!1,s)
c3.bo(D.ejq,D.eje,s)
c3.bo(D.egl,D.egd,s)
c3.e3(D.f00,2.2,1.4,!1,s)
c3.e3(D.f_K,-0.4,1.4,!1,s)}switch(c2){case 0:for(r=c3.a,q=0;q<16;++q){p=3.141592653589793*(1.02+0.96*q/15)
o=Math.cos(p)
n=Math.sin(p)
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.r=c1.gp(0)
l=m.G()
r.drawCircle(o*14.5,-3+n*17.5,4.3,l)
l.delete()}r=A.I()
r.r=c1.gp(0)
c3.e3(D.f0e,3.141592653589793,3.141592653589793,!0,r)
break
case 1:r=new A.aF(v,B.ag,c0,c0,A.a([],w))
r.D(new A.aY(-15,-11))
r.D(new A.c4(0,-30,15,-11))
r.D(new A.aq(13,-6))
r.D(new A.c4(0,-12,-13,-6))
r.D(new A.bs())
o=A.I()
o.r=c4.c.gp(0)
c3.aH(r,o)
c3.bo(D.ejf,D.ege,C.iv(G.n8,1.4))
o=A.I()
o.r=c1.gp(0)
c3.ad(D.ejw,3,o)
o=A.I()
o.r=c1.gp(0)
c3.ad(D.egq,3,o)
o=new A.aF(v,B.ag,c0,c0,A.a([],w))
o.D(new A.aY(-13,6))
o.D(new A.c4(-12,22,0,26))
o.D(new A.c4(12,22,13,6))
o.D(new A.c4(8,13,0,12))
o.D(new A.c4(-8,13,-13,6))
o.D(new A.bs())
r=A.I()
r.r=B.iy.gp(0)
c3.aH(o,r)
r=new A.aF(v,B.ag,c0,c0,A.a([],w))
r.D(new A.aY(-7,8))
r.D(new A.c4(0,6,7,8))
r.D(new A.c4(0,10.5,-7,8))
o=A.I()
o.r=B.bO.gp(0)
c3.aH(r,o)
break
case 2:k=c4.y
if(k==null)k=c4.b
r=new A.aF(v,B.ag,c0,c0,A.a([],w))
r.D(new A.aY(-17,-4))
r.D(new A.c4(-20,-27,0,-29))
r.D(new A.c4(20,-27,17,-4))
r.D(new A.c4(0,-14,-17,-4))
r.D(new A.bs())
o=A.I()
o.r=k.gp(0)
c3.aH(r,o)
o=A.ar(k,B.w,0.3)
o.toString
c3.e3(D.f0l,3.4,2.5,!1,C.iv(o,1.4))
o=A.ar(k,B.c,0.3)
o.toString
c3.e3(D.f08,3.6,2.2,!1,C.iv(o,1.2))
o=new A.aF(v,B.ag,c0,c0,A.a([],w))
o.D(new A.aY(11,-22))
o.D(new A.c4(27,-34,25,-19))
o.D(new A.c4(18,-18,11,-22))
r=A.ar(k,B.c,0.1)
r.toString
n=A.I()
n.r=r.gp(0)
c3.aH(o,n)
n=new A.aF(v,B.ag,c0,c0,A.a([],w))
n.D(new A.aY(11,-22))
n.D(new A.c4(24,-12,27,-26))
n.D(new A.c4(18,-22,11,-22))
o=A.ar(k,B.w,0.2)
o.toString
r=A.I()
r.r=o.gp(0)
c3.aH(n,r)
r=A.I()
r.r=c4.c.gp(0)
c3.ad(D.egf,3,r)
break
case 3:r=A.I()
r.r=c1.gp(0)
c3.e3(D.f0i,3.204424506661589,3.015928947446201,!0,r)
for(r=c3.a,q=-3;q<=3;++q){o=A.ar(c1,B.c,0.18)
o.toString
n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=0.9
n.r=o.gp(0)
n.d=B.bA
n.e=B.dQ
l=n.G()
r.drawLine.apply(r,[q*3.6,-19+Math.abs(q)*0.8,q*4.6,-4,l])
l.delete()}for(o=c4.c,j=0;j<2;++j){i=D.dlR[j]
n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=4.5
n.r=c1.gp(0)
n.d=B.bA
n.e=B.dQ
l=n.G()
r.drawLine.apply(r,[i,0,i*1.12,22,l])
l.delete()
for(h=0;h<3;++h){n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.r=o.gp(0)
l=n.G()
r.drawCircle(i*(1+h*0.04),7+h*6.5,1.8,l)
l.delete()}}break
case 4:r=A.I()
r.r=c1.gp(0)
c3.e3(D.f0h,3.204424506661589,3.015928947446201,!0,r)
r=A.ar(c1,B.c,0.25)
r.toString
c3.bo(I.a7f,I.a7e,C.iv(r,1))
break
default:r=A.I()
r.r=c1.gp(0)
c3.e3(D.f_N,3.267256359733385,2.8902652413026098,!0,r)}g=B.k.E(c5.b,0,1)*0.4+0.1
r=A.bK(D.eks,5,8)
o=D.aeg.j(g)
n=A.I()
n.r=o.gp(0)
c3.dO(r,n)
n=A.bK(D.ej7,5,8)
r=D.aeg.j(g)
o=A.I()
o.r=r.gp(0)
c3.dO(n,o)
f=c5.e*2.4
o=new A.aF(v,B.ag,c0,c0,A.a([],w))
o.D(new A.aY(f-0.6,-2))
o.D(new A.c4(f-3.4,6,f-2.6,7.4))
o.D(new A.c4(f,8.8,f+2.6,7.4))
c3.aH(o,C.iv(c9.j(0.75),1.1))
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
for(r=c3.a,o=d<0.15,n=c4.f,m=d>0.12,a0=2.5*d,a1=a0*2,a2=a0*2.2,j=0;j<2;++j){a3=F.hB[j]
a4=c5.e
a5=a3>0?0.7:1
a6=a3*6.4+a4*2*a5
if(m){a4=Math.max(0.6,a1)
a5=A.bK(new A.t(a6,-3),a4,7)
a7=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a7.r=B.c.j(0.96).gp(0)
l=a7.G()
r.drawOval(A.bG(a5),l)
l.delete()
a8=a6+c5.y*1.5
a9=-3+c5.z*0.7
J.bl(r.save())
a5=A.a([],w)
a7=new A.aF(v,B.ag,c0,c0,a5)
a5.push(new A.jJ(A.bK(new A.t(a6,-3),a4,7)))
a4=a7.gbv().a.snapshot()
a4=a7.e=new A.ce(a4)
r.clipPath(a4.a,$.nD(),!0)
a4=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a4.r=D.bgw.gp(0)
l=a4.G()
r.drawCircle(a8,a9,2.1,l)
l.delete()
a4=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a4.r=B.w.gp(0)
l=a4.G()
r.drawCircle(a8,a9,1.05,l)
l.delete()
a4=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a4.r=B.c.gp(0)
l=a4.G()
r.drawCircle(a8-0.7,a9-0.7,0.55,l)
l.delete()
r.restore()}a4=n?D.Yi:c9.j(0.9)
a5=n?1.5:1.1
b0=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b0.b=B.a9
b0.c=a5
b0.r=a4.gp(0)
b0.d=B.bA
b0.e=B.dQ
a4=o?0.8:0
a4=A.bK(new A.t(a6,-3+a4),Math.max(1.2,a2),7.3500000000000005)
l=b0.G()
r.drawArc.apply(r,[A.bG(a4),189,162,!1,l])
l.delete()
a4=c5.c
b1=-9.2-a4*2.2
a5=a3*3.6
a7=a4<0?-a4*1.6:0
a4=a4>0?a4*0.6:0
if(u)b2=B.e4
else{b2=A.ar(c1,B.w,0.2)
b2.toString}b3=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b3.b=B.a9
b3.c=1.7
b3.r=b2.gp(0)
b3.d=B.bA
b3.e=B.dQ
l=b3.G()
r.drawLine.apply(r,[a6-a5,b1-a7+0.4,a6+a5,b1-0.6-a4,l])
l.delete()}b4=B.k.E(c5.a,0,1)
if(n)b5=D.bqd
else{u=A.ar(c9,D.bk2,0.6)
u.toString
b5=u}b6=c5.b
if(b4>0.06){b7=5+B.k.E(b6,0,1)*2.2
b8=1.2+b4*6.5
b9=new A.aF(v,B.ag,c0,c0,A.a([],w))
w=-b7
b9.D(new A.aY(w,11.5))
b9.D(new A.c4(0,11.5+b8*0.2-c5.b*1.5,b7,11.5))
b9.D(new A.c4(0,11.5+b8*1.5+c5.b*1.5,w,11.5))
b9.D(new A.bs())
v=A.I()
v.r=D.bjn.gp(0)
c3.aH(b9,v)
J.bl(r.save())
c3.mI(0,b9)
v=B.c.j(0.95)
u=A.I()
u.r=v.gp(0)
c3.aO(new A.a3(w,11,w+b7*2,13.2),u)
u=A.bK(new A.t(0,11.5+b8*1.1),b8*0.9,b7*1.4)
w=A.I()
w.r=D.bqi.gp(0)
c3.dO(u,w)
r.restore()
c3.aH(b9,C.iv(b5,1.1))}else{u=new A.aF(v,B.ag,c0,c0,A.a([],w))
r=11.5-b6*0.8
u.D(new A.aY(-5.2,r))
u.D(new A.c4(0,13.1+b6*2.8,5.2,r))
c3.aH(u,C.iv(b5,1.5))
if(b6>0.6){w=new A.aF(v,B.ag,c0,c0,A.a([],w))
w.D(new A.aY(-4.6,11.8))
w.D(new A.c4(0,15.1+b6*1.4,4.6,11.8))
w.D(new A.c4(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.I()
u.r=v.gp(0)
c3.aH(w,u)}}if(c5.b>0.2){c3.e3(D.f0_,-1.2,2.2,!1,C.iv(c9.j(0.5),0.8))
c3.e3(D.f_P,2.141592653589793,2.2,!1,C.iv(c9.j(0.5),0.8))}if(n&&c2!==2){c2=c4.c
w=A.I()
w.r=c2.gp(0)
c3.ad(D.eiP,1.7,w)
w=A.I()
w.r=c2.gp(0)
c3.ad(D.eiL,1.7,w)}},
i4X(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=$.S(),e=new A.p0(),d=A.z8(e,g),a0=a4.a,a1=a4.b,a2=Math.min(a0/450,a1/900),a3=A.I()
a3.sam(A.ju(B.I,new A.t(0,a1*0.46),D.d4P,D.cXz,B.x,g))
d.aO(new A.a3(0,0,0+a0,0+a1),a3)
a3=d.a
J.bl(a3.save())
a3.translate((a0-450*a2)/2,(a1-900*a2)/2)
d.bW(0,a2)
w=new A.e5()
w.cY(8)
for(v=0;v<120;++v){a0=w.af()
a1=w.af()
u=w.af()
t=new A.ao(B.Q,B.M,B.S,B.T,B.R)
t.r=B.c.j(0.2+w.af()*0.5).gp(0)
s=t.G()
a3.drawCircle(a0*450*1.4-90,a1*330-40,0.5+u*0.9,s)
s.delete()}J.bl(a3.save())
a3.translate(200,120)
d.ih(0,-0.5)
a0=A.I()
a1=x.O
a0.sam(A.ts(B.I,230,A.a([D.bfj,B.L],a1),g,B.x,g,g,0))
d.dO(D.f0v,a0)
a3.restore()
a0=A.I()
a0.sam(A.ts(D.a7n,58,A.a([D.bit,B.L],a1),g,B.x,g,g,0))
d.ad(D.a7n,58,a0)
a0=A.I()
a0.r=D.be1.gp(0)
d.ad(D.a7n,24,a0)
a0=A.I()
a0.r=D.YF.gp(0)
d.ad(D.eh9,5,a0)
a0=A.I()
a0.r=D.YF.gp(0)
d.ad(D.ehd,3.4,a0)
a0=A.I()
a0.r=D.YF.gp(0)
d.ad(D.ehc,2.4,a0)
for(a0=x.v,r=0;r<3;++r,f=u){u=A.a([],a0)
q=new A.aF(f.r,B.ag,g,g,u)
u.push(new A.aY(-60,420))
for(f=372+r*12,t=60+r*20,p=r*2,o=14-r*3,n=-60;n<=510;n+=8){m=new A.aq(n,f+Math.sin(n/t+p)*o+Math.sin(n/23+r)*3)
u.push(m)
l=q.f
if(l!=null)m.bw(l)
m=q.e
if(m!=null)m.a.delete()
q.e=null}f=new A.aq(510,470)
u.push(f)
t=q.f
if(t!=null)f.bw(t)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=new A.aq(-60,470)
u.push(f)
t=q.f
if(t!=null)f.bw(t)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=new A.bs()
u.push(f)
u=q.f
if(u!=null)f.bw(u)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=[D.bcE,D.beB,D.bkl][r]
u=$.S()
t=new A.ao(B.Q,B.M,B.S,B.T,B.R)
t.r=f.gp(0)
s=t.G()
f=q.e
a3.drawPath((f==null?q.e=new A.ce(q.gbv().a.snapshot()):f).a,s)
s.delete()}for(k=0;k<4;++k){n=D.crD[k]
j=384+B.o.F(n,11)
f=n-2
a0=j-24
u=new A.ao(B.Q,B.M,B.S,B.T,B.R)
u.b=B.a9
u.c=2.4
u.r=D.YW.gp(0)
u.d=B.bA
u.e=B.dQ
s=u.G()
a3.drawLine.apply(a3,[n,j,f,a0,s])
s.delete()
f=A.bK(new A.t(f,j-27),11,46)
u=new A.ao(B.Q,B.M,B.S,B.T,B.R)
u.r=D.YW.gp(0)
s=u.G()
a3.drawOval(A.bG(f),s)
s.delete()
a0=A.bK(new A.t(n-12,a0),8,24)
f=new A.ao(B.Q,B.M,B.S,B.T,B.R)
f.r=D.YW.gp(0)
s=f.G()
a3.drawOval(A.bG(a0),s)
s.delete()}for(v=0;v<9;++v){f=B.o.F(v,3)
a0=B.o.F(v,4)
u=new A.ao(B.Q,B.M,B.S,B.T,B.R)
u.r=D.be4.j(0.8).gp(0)
s=u.G()
a3.drawCircle(20+v*52+f*7,400+a0*5,1.2,s)
s.delete()}f=A.I()
f.sam(A.ju(D.efN,D.efP,D.cZs,B.D_,B.x,g))
d.aO(new A.a3(-200,412,650,1300),f)
i=new A.e5()
i.cY(21)
for(v=0;v<260;++v){f=i.af()
j=420+i.af()*480
a0=i.af()
u=j/900+0.4
u=A.bK(new A.t(f*450,j),1+i.af()*2*u,1.5+a0*4*u)
f=i.hl()?B.c:B.w
a0=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a0.r=f.j(0.06+i.af()*0.06).gp(0)
s=a0.G()
a3.drawOval(A.bG(u),s)
s.delete()}J.bl(a3.save())
a3.translate(225,590)
d.p8(0,1,0.34)
f=A.I()
f.sam(A.ts(B.I,250,A.a([D.bld,D.beX,D.bn3],a1),A.a([0,0.8,1],x.n),B.x,g,g,0))
d.ad(B.I,250,f)
a3.restore()
for(v=0;v<40;++v){n=i.af()*450
j=640+i.af()*260
f=i.af()
a0=A.ar(D.agv,D.bdz,i.af())
a0.toString
for(f=j-(6+f*10),h=-1;h<=1;++h){$.S()
a1=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a1.b=B.a9
a1.c=1.3
a1.r=a0.gp(0)
a1.d=B.bA
a1.e=B.dQ
s=a1.G()
a3.drawLine.apply(a3,[n+h*2,j,n+h*5,f+Math.abs(h)*3,s])
s.delete()}}C.hYQ(d)
for(k=0;k<3;++k)C.i10(d,D.ayl[k])
C.i0Q(d,D.eh3)
for(n=118;n<190;n+=11){f=B.o.F(n,3)
a0=B.o.F(n,4)
$.S()
a1=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a1.b=B.a9
a1.c=2.4
a1.r=D.YS.gp(0)
a1.d=B.bA
a1.e=B.dQ
s=a1.G()
a3.drawLine.apply(a3,[n,452+f,n+1,436+a0,s])
s.delete()}d.bo(D.egc,D.egu,C.iv(D.bei,1.6))
a3.restore()
return e.ni()},
hYQ(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=$.S().r,e=x.v,d=new A.aF(f,B.ag,g,g,A.a([],e))
d.D(new A.aY(358,462))
d.D(new A.l_(354,422,370,382,374,332))
d.D(new A.aq(410,332))
d.D(new A.l_(416,382,432,422,428,462))
d.D(new A.bs())
w=A.I()
w.sam(A.ju(new A.t(354,0),new A.t(430,0),D.drX,U.zn,B.x,g))
a0.aH(d,w)
v=new A.e5()
v.cY(4)
for(w=a0.a,u=0;u<30;++u){t=364+v.af()*56
s=462-v.af()*126
r=v.af()
q=v.af()
p=B.w.j(0.18)
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.b=B.a9
o.c=1.1
o.r=p.gp(0)
o.d=B.bA
o.e=B.dQ
n=o.G()
w.drawLine.apply(w,[t,s,t+r*3-1.5,s+8+q*12,n])
n.delete()}for(m=0;m<6;++m){l=D.d9l[m]
r=l.a
q=392+r*12
p=-l.b
o=q+r*52
k=336+(p*46-8)
r=o+r*42
p=k+(p*34+4)
j=A.a([],e)
i=new A.aF(f,B.ag,g,g,j)
j.push(new A.aY(q,336))
j.push(new A.c4(o,k,r,p))
q=new A.ao(B.Q,B.M,B.S,B.T,B.R)
q.b=B.a9
q.c=8
q.r=D.aeX.gp(0)
q.d=B.bA
q.e=B.dQ
n=q.G()
q=i.gbv().a.snapshot()
w.drawPath((i.e=new A.ce(q)).a,n)
n.delete()
for(h=0;h<6;++h){q=v.af()
o=v.af()
k=v.af()
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.r=A.ar(D.bea,D.bkk,v.af()).j(0.92).gp(0)
n=j.G()
w.drawCircle(r+(q*36-18),p+(o*18-14),8+k*7,n)
n.delete()}r+=0
q=new A.ao(B.Q,B.M,B.S,B.T,B.R)
q.b=B.a9
q.c=1.2
q.r=D.YS.gp(0)
q.d=B.bA
q.e=B.dQ
n=q.G()
w.drawLine.apply(w,[r,p+8,r,p+22,n])
n.delete()
p=A.bK(new A.t(r,p+28),13,7)
r=new A.ao(B.Q,B.M,B.S,B.T,B.R)
r.r=D.blv.gp(0)
n=r.G()
w.drawOval(A.bG(p),n)
n.delete()}},
i10(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b4.a,a5=b4.b,a6=b4.c,a7=b4.d,a8=a6*0.5,a9=A.bK(new A.t(a4,a5+2),a8,a6*2.8),b0=B.w.j(0.3),b1=$.S(),b2=A.I()
b2.r=b0.gp(0)
b3.dO(a9,b2)
b1=b1.r
b2=x.v
w=new A.aF(b1,B.ag,a3,a3,A.a([],b2))
a9=a4-a6
b0=a5-a7
w.D(new A.aY(a9,b0))
w.D(new A.aq(a9,a5))
v=a4+a6
w.D(new A.c4(a4,a5+a6*0.22,v,a5))
w.D(new A.aq(v,b0))
w.D(new A.bs())
u=A.I()
u.sam(A.ju(new A.t(a9,0),new A.t(v,0),D.d9r,U.zn,B.x,a3))
b3.aH(w,u)
t=new A.e5()
t.cY(B.o.V(a4*7))
v=b3.a
J.bl(v.save())
b3.mI(0,w)
for(s=0;s<40;++s){r=a9+t.af()*a6*2
q=b0+t.af()*a7
u=t.af()
p=t.af()
o=B.w.j(0.14)
n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=1
n.r=o.gp(0)
n.d=B.bA
n.e=B.dQ
m=n.G()
v.drawLine.apply(v,[r,q,r+4+u*5,q+p*2-1,m])
m.delete()}u=b0+5
p=a6*2
o=D.agr.j(0.75)
n=A.I()
n.r=o.gp(0)
b3.aO(new A.a3(a9,u,a9+p,u+7),n)
for(u=a6/5,o=b0+12,n=b0+20,l=a9+2,k=0;k<B.k.bf(u);++k){j=l+k*10
i=A.a([],b2)
h=new A.aF(b1,B.ag,a3,a3,i)
i.push(new A.aY(j,o))
i.push(new A.aq(j+5,n))
i.push(new A.aq(j+10,o))
i.push(new A.bs())
i=new A.ao(B.Q,B.M,B.S,B.T,B.R)
i.r=D.lv.j(0.85).gp(0)
m=i.G()
i=h.gbv().a.snapshot()
v.drawPath((h.e=new A.ce(i)).a,m)
m.delete()}u=A.a([],b2)
g=new A.aF(b1,B.ag,a3,a3,u)
b1=a5-8
g.D(new A.aY(a9,b1))
for(p/=6,k=0;k<=B.k.bf(p);++k){o=(k&1)===0?0:-5
o=new A.aq(a9+k*6,b1+o)
u.push(o)
n=g.f
if(n!=null)o.bw(n)
o=g.e
if(o!=null)o.a.delete()
g.e=null}b3.aH(g,C.iv(D.agr.j(0.7),1.6))
v.restore()
a9=$.S().r
b1=new A.aF(a9,B.ag,a3,a3,A.a([],b2))
u=a6*0.1
p=a4+u
o=a6*0.28
n=p-o
l=a5+1
b1.D(new A.aY(n,l))
i=a5-a7*0.55
b1.D(new A.aq(n,i))
o=p+o
b1.D(new A.c4(p,a5-a7*0.82,o,i))
b1.D(new A.aq(o,l))
b1.D(new A.bs())
l=A.I()
l.r=D.agC.gp(0)
b3.aH(b1,l)
l=A.I()
l.r=D.agC.gp(0)
b3.ad(new A.t(a4-a6*0.62,a5-a7*0.5),u,l)
l=b4.e
u=b0-l
b1=a6*1.38
o=a4-b1
i=b0+4
p=a4+b1
f=new A.aF(a9,B.ag,a3,a3,A.a([],b2))
f.D(new A.aY(o,i))
n=b0-l*0.55
f.D(new A.c4(a4-a8,n,a4,u))
f.D(new A.c4(a4+a8,n,p,i))
f.D(new A.c4(a4,b0+a6*0.34,o,i))
f.D(new A.bs())
b0=A.I()
n=a6*1.4
b0.sam(A.ju(new A.t(a4-n,0),new A.t(a4+n,0),D.dcR,U.zn,B.x,a3))
b3.aH(f,b0)
J.bl(v.save())
b3.mI(0,f)
for(a8=p-o,s=0;s<70;++s){e=s/69
b0=Math.sin(e*3.141592653589793)
p=t.af()
n=(t.hl()?B.w:D.bdI).j(0.16)
h=new A.ao(B.Q,B.M,B.S,B.T,B.R)
h.b=B.a9
h.c=0.9
h.r=n.gp(0)
h.d=B.bA
h.e=B.dQ
m=h.G()
v.drawLine.apply(v,[a4+(p-0.5)*3,u,o+a8*e,i+b0*a6*0.3,m])
m.delete()}for(k=1;k<5;++k){d=u+l*k/4.6
a0=b1*k/4.6
b0=A.a([],b2)
p=new A.aF(a9,B.ag,a3,a3,b0)
n=d+2
b0.push(new A.aY(a4-a0,n))
b0.push(new A.c4(a4,d+7+k*1.5,a4+a0,n))
b0=B.w.j(0.22)
n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=1.2
n.r=b0.gp(0)
n.d=B.bA
n.e=B.dQ
m=n.G()
b0=p.gbv().a.snapshot()
v.drawPath((p.e=new A.ce(b0)).a,m)
m.delete()}v.restore()
for(s=0;s<46;++s){e=s/45
a1=o+a8*e
a2=i+Math.sin(e*3.141592653589793)*a6*0.3
b0=t.af()
b1=t.af()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.b=B.a9
p.c=1.1
p.r=D.bkH.gp(0)
p.d=B.bA
p.e=B.dQ
m=p.G()
v.drawLine.apply(v,[a1,a2,a1+(b0-0.5)*2,a2+3+b1*4,m])
m.delete()}a8=new A.aF(a9,B.ag,a3,a3,A.a([],b2))
a9=u+4
a8.D(new A.aY(a4-2.5,a9))
a8.D(new A.aq(a4,u-7))
a8.D(new A.aq(a4+2.5,a9))
a8.D(new A.bs())
a9=A.I()
a9.r=D.bh1.gp(0)
b3.aH(a8,a9)},
i0Q(d,e){var w,v,u,t,s,r,q,p,o
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=d.a,r=0;r<2;++r){q=w+D.dlO[r]
$.S()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.b=B.a9
p.c=3
p.r=D.YS.gp(0)
p.d=B.bA
p.e=B.dQ
o=p.G()
s.drawLine.apply(s,[q,u,q,t,o])
o.delete()}u=A.bK(e.a9(0,I.aJz),24,36)
t=$.S()
s=A.I()
s.r=D.bpt.gp(0)
d.dO(u,s)
t=new A.aF(t.r,B.ag,null,null,A.a([],x.v))
s=w-24
u=v-30
t.D(new A.aY(s,u))
t.D(new A.aq(w,v-54))
t.D(new A.aq(w+24,u))
t.D(new A.c4(w,v-24,s,u))
t.D(new A.bs())
u=A.I()
u.r=D.afy.gp(0)
d.aH(t,u)},
i0a(d){switch(B.o.F(d,8)){case 0:return D.aYE
case 1:return D.aYC
case 2:return D.aYB
case 3:return D.aYA
case 4:return D.aYD
case 5:return D.aYF
case 6:return D.hlQ
default:return D.hlP}},
RW(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bo7()
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
w.as=k==null?D.DG:k
C.hta(d,e,p,C.i0a(m),w,s,m,l)},
hux(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bRJ:function bRJ(){var _=this
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
t1:function t1(d,e,f,g,h,i,j,k,l,m){var _=this
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
alq:function alq(){this.b=this.a=null},
aVC:function aVC(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bRB:function bRB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRC:function bRC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRD:function bRD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRE:function bRE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRF:function bRF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRG:function bRG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRH:function bRH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRI:function bRI(){},
bRA:function bRA(d){this.a=d},
afb:function afb(d,e){this.a=d
this.b=e},
ada:function ada(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Mu(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bQk(s)
s.bzw(d)
return s},
Gz(d,e,f,g,h,i,j){var w,v=A.T(g).k("Z<1>")
v=A.df(new A.Z(g,new C.fpC(f),v),v.k("M.E"))
w=A.C(v,A.a7(v).k("cs.E"))
B.d.dZ(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.v(v,A.d_(w,0,A.dA(3,"count",x.S),A.T(w).c))
B.d.dZ(v,d)
return new C.lm(e,v,B.d.cu(v,f),h,i,"tree",j)},
ilp(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.U(c0,x.cg),c2=new C.fZn(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.k5(c4,c0)
t=A.C(c4,A.a7(c4).k("cs.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.k5(c4,c0)
r=A.C(c4,A.a7(c4).k("cs.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.k5(c4,c0)
q=A.C(c4,A.a7(c4).k("cs.E"))
for(c4=w.length,v=A.T(t).k("Z<1>"),s=v.k("M.E"),p=A.T(w).k("Z<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.L)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.c()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.w6)g="father"
else g=h===D.od?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Z(t,new C.fZp(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.Gz(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Z(w,new C.fZq(i,m),p),o)
B.d.dZ(d,c6)
c2.$2(b4,new C.lm("True or false: "+h+" is the "+g+" of "+l+".",D.azm,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lm("True or false: "+B.a.i(B.d.gI(d).b)+" is the "+g+" of "+l+".",D.azm,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.FP(m)
h=a0.length
if(h!==0){a1=a0[c6.ap(h)]
h=B.a.i(a1.b)
f=A.C(new A.Z(t,new C.fZr(l,a0,c5),v),s)
e=a1.c
if(e===D.w6)e="son"
else e=e===D.od?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.Gz(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.eE([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mp(a5,a5.r,f.k("mp<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.Gz(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gI(a0).b)
f=A.a([],c3)
for(e=A.T(a0),a2=e.k("jc<1>"),a3=new A.jc(a0,1,b3,a2),a3.od(a0,1,b3,e.c),a3=new A.bR(a3,a3.gL(0),a2.k("bR<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.Gz(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gI(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gI(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.aqn(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Z(t,new C.fZs(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.Gz(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.c()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.c()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.C(new A.Z(t,new C.fZt(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.w6
if(e)a2=b7
else a2=f===D.od?b8:b9
if(e)f=b7
else f=f===D.od?b8:b9
c2.$2("grand",C.Gz(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aLC(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.ap(k)].b)
j=A.C(new A.Z(t,new C.fZu(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.Gz(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.v(j,D.cKf)
h=l+" was born in "+k
c2.$2("place",C.Gz(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.v(j,D.d_u)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.Gz(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.L)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.Gz(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cC(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.jI(b1,b3,b3)
c2.$2("year",C.Gz(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bD1(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.Mu(d),l=new A.e5()
l.cY(f)
w=C.ilp(m,l,g)
for(v=new A.dq(w,w.r,w.e);v.C();)J.hdb(v.d,l)
v=A.a7(w).k("cx<1>")
u=A.C(new A.cx(w,v),v.k("M.E"))
B.d.dZ(u,l)
t=A.a([],x.J)
s=A.aX(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.b3(u,new C.fC8(n,w))))break
for(v=u.length,r=0;r<u.length;u.length===v||(0,A.L)(u),++r){q=u[r]
if(t.length>=e)break
p=w.h(0,q)
p.toString
if(J.ad(p)>n.a){p=w.h(0,q)
p.toString
p=s.M(0,J.r(p,n.a).a)}else p=!1
if(p){p=w.h(0,q)
p.toString
t.push(J.r(p,n.a))}}++n.a}v=t.length
if(v<e){v=A.C(D.axm,x.df)
B.d.dZ(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.L)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hth(o,l))}}else if(!g&&v>3){o=C.hth(D.axm[l.ap(14)],l)
t[t.length-1-l.ap(3)]=o}return t},
hth(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.dZ(w,e)
return new C.lm(d.a,w,B.d.cu(w,v),d.d,d.e,d.f,d.r)},
hxZ(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.Mu(a2),a1=new A.e5()
a1.cY(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.L)(t),++r){q=t[r]
if(a0.FP(q).length>=2)u.push(q)}B.d.dZ(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.L)(u),++r){n=u[r]
m=a0.FP(n)
l=A.T(m)
k=new A.jc(m,0,5,l.k("jc<1>"))
k.od(m,0,5,l.c)
j=k.dm(0)
if(new A.N(j,new C.fQc(),A.T(j).k("N<1,G>")).fJ(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.L)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.L)(j),++i)g.push(C.aRn(a0,j[i]))
w.push(new C.atp("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.U(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.L)(t),++r){q=t[r]
J.ca(e.c3(0,a0.alS(q),new C.fQd()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cx<1>")
d=A.C(new A.cx(e,t),t.k("M.E"))
B.d.ff(d)
v=A.a([],v)
for(u=A.d_(d,0,A.dA(5,"count",u),A.T(d).c),t=u.$ti,u=new A.bR(u,u.gL(0),t.k("bR<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cD(s)
m.dZ(s,a1)
v.push(m.gI(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.L)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.L)(v),++r)s.push(C.aRn(a0,v[r]))
w.push(new C.atp("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aPR(d){return B.d.anf(D.azQ,new C.fyz(d))},
ibA(d){return A.pU(new A.Z(D.azQ,new C.fEN(d),x.av))},
bR8(d){return C.hHi(d)},
hHi(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bR8=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bR8)
case 7:r=f
q=B.a.i(d)
q=A.eC(J.r(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bR8,v)},
Bu(d,e){return C.hHf(d,e)},
hHf(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$Bu=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$Bu)
case 7:r=g
p=B.a.i(d)
o=A.eC(J.r(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.au("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$Bu)
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
return A.i($async$Bu,v)},
bR7(d,e,f){return C.hHg(d,e,f)},
hHg(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bR7=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bR7)
case 7:r=h
q=B.a.i(d)
q=A.eC(J.r(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bR7,v)},
Bv(d,e,f,g){return C.hHh(d,e,f,g)},
hHh(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$Bv=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$Bv)
case 7:r=i
p=B.a.i(d)
o=A.eC(J.r(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.au("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$Bv)
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
return A.i($async$Bv,v)},
bFi(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
h0n(d,e,f,g){return new C.ak5(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hFo(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aW(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cv)
while(u.C())w.push(J.k(u.gS(u)))
u=x.N
w=A.d_(w,0,A.dA(4,"count",x.S),u).dm(0)
B.d.v(w,A.bZ(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aK(d.h(0,"c"))
v=v==null?null:B.k.N(v)
v=B.o.E(v==null?0:v,0,3)
u=A.aK(d.h(0,"s"))
u=u==null?null:B.k.N(u)
return C.h0n(w,v,B.o.E(u==null?20:u,5,60),t)},
hee(d){var w,v,u,t,s,r,q=J.a6(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aW(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.cv)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gS(q)
if(u.b(r))v.push(C.hFo(A.a2(r,t,s)))}return new C.Mf(p,w,v)},
h8F(d){var w,v=A.a([],x.c)
for(w=J.aW(d.z);w.C();)v.push(C.hee(w.gS(w)))
return v},
aRn(d,e){var w=e.c===D.od
if(d.alS(e)===0&&d.FP(e).length!==0)return w?0:1
if(d.FP(e).length!==0||d.aqn(e)!=null)return w?2:3
return w?4:5},
hz4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Mu(a4),a3=new A.e5()
a3.cY(a5)
w=A.a([],x.dT)
v=a2.b
u=A.C(v,x.P)
B.d.dZ(u,a3)
t=x.s
s=A.a([],t)
for(r=v.length,q=0;q<v.length;v.length===r||(0,A.L)(v),++q)s.push(B.a.i(v[q].b))
for(v=u.length,r=x.N,p=x.ec,o=x.cc,n=o.k("M.E"),q=0;q<u.length;u.length===v||(0,A.L)(u),++q){m=u[q]
l=A.a([],t)
k=m.d
if(k==null)j=null
else{i=a2.c
i===$&&A.c()
j=i.h(0,k)}h=a2.FP(m)
g=a2.aqn(m)
f=a2.aLC(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cC(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.w6)k="father"
else k=k===D.od?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gI(h).b)+".")}if(j!=null){k=j.c
if(k===D.w6)k="father"
else k=k===D.od?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.dZ(l,a3)
B.d.aY(l,new C.fZN())
d=B.a.i(m.b)
a0=A.C(new A.Z(s,new C.fZO(d),o),n)
B.d.dZ(a0,a3)
k=A.a([d],t)
i=A.T(a0)
a1=new A.jc(a0,0,3,i.k("jc<1>"))
a1.od(a0,0,3,i.c)
B.d.v(k,a1)
B.d.dZ(k,a3)
a1=C.aRn(a2,m)
i=new A.jc(l,0,4,p)
i.od(l,0,4,r)
w.push(new C.b9D(d,a1,i.dm(0),k))
if(w.length>=5)break}return w},
hqS(d){return B.a.t(d,"married to")||B.a.t(d," of ")||B.a.a0(d,"My ")?1:0},
hya(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Mu(a4),a3=new A.e5()
a3.cY(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.L)(t),++r){q=t[r]
if(a2.FP(q).length>=2)u.push(q)}B.d.dZ(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.L)(u),++r){l=u[r]
k=a2.FP(l)
j=A.T(k)
i=new A.jc(k,0,4,j.k("jc<1>"))
i.od(k,0,4,j.c)
h=i.dm(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.L)(t),++g){q=t[g]
if(q.a!==j&&!B.d.b3(h,new C.fQI(q))&&q.d!==j)i.push(q)}B.d.dZ(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.jc(i,0,k,m)
j.od(i,0,k,n)
f=j.dm(0)
j=B.a.i(l.b)
k=C.aRn(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.L)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.L)(h),++g)e.push(C.aRn(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.L)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.L)(f),++g)a0.push(C.aRn(a2,f[g]))
w.push(new C.a9j(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lm:function lm(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bQk:function bQk(d){this.b=d
this.c=$},
bQl:function bQl(){},
bQm:function bQm(d){this.a=d},
fpC:function fpC(d){this.a=d},
fZn:function fZn(d){this.a=d},
fZo:function fZo(){},
fZp:function fZp(d){this.a=d},
fZq:function fZq(d,e){this.a=d
this.b=e},
fZr:function fZr(d,e,f){this.a=d
this.b=e
this.c=f},
fZm:function fZm(d,e){this.a=d
this.b=e},
fZs:function fZs(d){this.a=d},
fZt:function fZt(d){this.a=d},
fZu:function fZu(d,e,f){this.a=d
this.b=e
this.c=f},
fZl:function fZl(d,e){this.a=d
this.b=e},
fC8:function fC8(d,e){this.a=d
this.b=e},
atp:function atp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fQc:function fQc(){},
fQd:function fQd(){},
zg:function zg(d,e,f){this.a=d
this.b=e
this.c=f},
fyz:function fyz(d){this.a=d},
fEN:function fEN(d){this.a=d},
ak5:function ak5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bLk:function bLk(){},
Mf:function Mf(d,e,f){this.a=d
this.b=e
this.c=f},
b9D:function b9D(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
fZN:function fZN(){},
fZO:function fZO(d){this.a=d},
a9j:function a9j(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fQI:function fQI(d){this.a=d},
bgR:function bgR(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
af9:function af9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
ajk:function ajk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ajl:function ajl(d,e,f,g,h){var _=this
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
_.a8$=h
_.c=_.a=null},
bJy:function bJy(d){this.a=d},
bJt:function bJt(){},
bJz:function bJz(){},
bJr:function bJr(){},
bJs:function bJs(){},
bJx:function bJx(d){this.a=d},
bJu:function bJu(d,e){this.a=d
this.b=e},
bJw:function bJw(d,e){this.a=d
this.b=e},
bJv:function bJv(d,e){this.a=d
this.b=e},
bJq:function bJq(d){this.a=d},
bc_:function bc_(d,e){this.b=d
this.a=e},
Q7:function Q7(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAL:function aAL(d,e,f){this.b=d
this.c=e
this.a=f},
azb:function azb(d,e,f){this.a=d
this.b=e
this.c=f},
au0:function au0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
au1:function au1(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.cO$=e
_.b7$=f
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
bbv:function bbv(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cMK:function cMK(){},
axW:function axW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
axX:function axX(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cCh:function cCh(d){this.a=d},
cCg:function cCg(d){this.a=d},
cCp:function cCp(d,e){this.a=d
this.b=e},
cCq:function cCq(d,e){this.a=d
this.b=e},
cCr:function cCr(d){this.a=d},
cCo:function cCo(d){this.a=d},
cCs:function cCs(d){this.a=d},
cCt:function cCt(d,e){this.a=d
this.b=e},
cCu:function cCu(){},
cCv:function cCv(d){this.a=d},
cCj:function cCj(d){this.a=d},
cCk:function cCk(d,e){this.a=d
this.b=e},
cCi:function cCi(d,e){this.a=d
this.b=e},
cCl:function cCl(){},
cCm:function cCm(){},
cCn:function cCn(d,e){this.a=d
this.b=e},
ayX:function ayX(){},
aGb:function aGb(){},
h6x(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.bqp((w-450*u)/2,(v-900*u)/2,u)},
aeY:function aeY(){},
f2p:function f2p(d){this.a=d},
aJZ:function aJZ(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fct:function fct(d){this.a=d},
alg:function alg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alh:function alh(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.pX$=f
_.LG$=g
_.amo$=h
_.bx$=i
_.a8$=j
_.c=_.a=null},
bR6:function bR6(d){this.a=d},
bR5:function bR5(){},
bR3:function bR3(d){this.a=d},
bR1:function bR1(){},
bR2:function bR2(d){this.a=d},
bQZ:function bQZ(d,e){this.a=d
this.b=e},
bR_:function bR_(){},
bR0:function bR0(d){this.a=d},
bR4:function bR4(d,e){this.a=d
this.b=e},
bQY:function bQY(d){this.a=d},
bs5:function bs5(d,e){this.b=d
this.a=e},
f2q:function f2q(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f2r:function f2r(d,e,f){this.a=d
this.b=e
this.c=f},
f2s:function f2s(d,e,f){this.a=d
this.b=e
this.c=f},
f2t:function f2t(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f2u:function f2u(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f2v:function f2v(){},
ale:function ale(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alf:function alf(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.pX$=f
_.LG$=g
_.amo$=h
_.bx$=i
_.a8$=j
_.c=_.a=null},
bQK:function bQK(){},
bQV:function bQV(d,e){this.a=d
this.b=e},
bQW:function bQW(d){this.a=d},
bQX:function bQX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQR:function bQR(){},
bQQ:function bQQ(d,e){this.a=d
this.b=e},
bQS:function bQS(d,e){this.a=d
this.b=e},
bQT:function bQT(){},
bQU:function bQU(d){this.a=d},
bQM:function bQM(d){this.a=d},
bQN:function bQN(d){this.a=d},
bQO:function bQO(d){this.a=d},
bQL:function bQL(d,e){this.a=d
this.b=e},
bQP:function bQP(d){this.a=d},
biG:function biG(d,e){this.b=d
this.a=e},
dnQ:function dnQ(){},
a1n:function a1n(d,e){this.a=d
this.b=e},
ala:function ala(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alb:function alb(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.pX$=e
_.LG$=f
_.amo$=g
_.bx$=h
_.a8$=i
_.c=_.a=null},
bQw:function bQw(d){this.a=d},
bQv:function bQv(){},
bQu:function bQu(){},
bQo:function bQo(){},
bQp:function bQp(){},
bQt:function bQt(d,e,f){this.a=d
this.b=e
this.c=f},
bQs:function bQs(d){this.a=d},
bQq:function bQq(d,e){this.a=d
this.b=e},
bQr:function bQr(d){this.a=d},
bi5:function bi5(d,e){this.b=d
this.a=e},
aAO:function aAO(){},
bfD:function bfD(){},
aAQ:function aAQ(){},
bfE:function bfE(){},
aAR:function aAR(){},
bfF:function bfF(){},
uj(d,e,f,g,h){var w,v,u=null,t=A.n(18),s=A.a([],x.V)
s.push(new A.ac(0,B.G,f.j(0.4),B.j1,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.v(v,A.a([A.X(g,h,u,u,u,20),B.ac],w))
v.push(A.d(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aB(u,A.p(u,A.B(v,B.m,u,B.e,B.O,0,u,u),B.f,u,u,new A.o(f,u,u,t,s,u,B.n),u,u,u,u,B.ND,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a3)},
hf2(d,e,f,g,h,i,j){return new C.alc(i,h,d,j,e,f,g,null)},
a5Q:function a5Q(d,e){this.c=d
this.a=e},
bid:function bid(d){this.a=d},
tq:function tq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bQn:function bQn(d){this.a=d},
I_:function I_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Vx:function Vx(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bkZ:function bkZ(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
dYx:function dYx(d,e){this.a=d
this.b=e},
dYy:function dYy(d){this.a=d},
dYz:function dYz(d,e){this.a=d
this.b=e},
dYv:function dYv(d){this.a=d},
dYw:function dYw(d){this.a=d},
dYu:function dYu(d){this.a=d},
dYs:function dYs(d){this.a=d},
dYt:function dYt(d){this.a=d},
dYr:function dYr(d,e){this.a=d
this.b=e},
dYA:function dYA(d){this.a=d},
dYB:function dYB(d,e){this.a=d
this.b=e},
dYC:function dYC(d,e){this.a=d
this.b=e},
dYD:function dYD(d,e){this.a=d
this.b=e},
dYG:function dYG(d,e){this.a=d
this.b=e},
dYH:function dYH(d,e){this.a=d
this.b=e},
dYI:function dYI(d,e){this.a=d
this.b=e},
dYJ:function dYJ(d,e){this.a=d
this.b=e},
dYK:function dYK(d,e){this.a=d
this.b=e},
dYL:function dYL(d,e,f){this.a=d
this.b=e
this.c=f},
dYM:function dYM(d,e){this.a=d
this.b=e},
dYN:function dYN(d,e){this.a=d
this.b=e},
dYE:function dYE(d){this.a=d},
dYF:function dYF(d){this.a=d},
a_e:function a_e(d,e){this.a=d
this.b=e},
alc:function alc(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ald:function ald(d){var _=this
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
bQI:function bQI(d){this.a=d},
bQJ:function bQJ(d){this.a=d},
bQH:function bQH(d){this.a=d},
bQy:function bQy(d){this.a=d},
bQz:function bQz(d){this.a=d},
bQx:function bQx(d){this.a=d},
bQE:function bQE(d,e,f){this.a=d
this.b=e
this.c=f},
bQF:function bQF(d){this.a=d},
bQB:function bQB(d,e){this.a=d
this.b=e},
bQC:function bQC(d,e,f){this.a=d
this.b=e
this.c=f},
bQG:function bQG(){},
bQD:function bQD(d,e){this.a=d
this.b=e},
bQA:function bQA(d){this.a=d},
Tb:function Tb(d,e){this.c=d
this.a=e},
al9:function al9(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bQ8:function bQ8(d){this.a=d},
bQ9:function bQ9(d){this.a=d},
bQj:function bQj(){},
bQi:function bQi(d,e,f){this.a=d
this.b=e
this.c=f},
bQd:function bQd(d,e){this.a=d
this.b=e},
bQc:function bQc(d,e){this.a=d
this.b=e},
bQe:function bQe(d){this.a=d},
bQf:function bQf(d,e){this.a=d
this.b=e},
bQg:function bQg(d,e){this.a=d
this.b=e},
bQb:function bQb(d,e){this.a=d
this.b=e},
bQh:function bQh(d,e,f){this.a=d
this.b=e
this.c=f},
bQa:function bQa(d,e){this.a=d
this.b=e},
ia1(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.aid(a6),a5=a4.length
if(a5===0)return""
w=A.U(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bC(new A.V(Date.now(),0,!1))
s=new C.fBF(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("Z<1>"),q=q.k("cQ<1,m>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.yA)m.push(l===D.w6?"male":"female")
l=u.w
k=A.ag(a3,!0,!1,!1,!1).cC(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.ag(a3,!0,!1,!1,!1).cC(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.jI(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jI(h,a2,a2)-A.jI(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.C(new A.cQ(new A.Z(a4,new C.fBD(u,f),p),new C.fBE(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aG(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aG(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ar(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
ia2(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.aid(a0),d=e.length
if(d===0)return""
w=x.N
v=A.U(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.L)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fBK(v,e)
q=new C.fBI(v)
p=A.U(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.L)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.n(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.L)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.n(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.L)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.aj(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.aj(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("bd<2>")
d=A.df(new A.bd(p,d),d.k("M.E"))
n=A.C(d,A.a7(d).k("cs.E"))
B.d.ff(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.L)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gag(e),k=new A.f5(l,new C.fBJ(p,m));k.C();t=f){j=l.gS(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.aj(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aG(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hWh(d,e,f,g){var w,v,u=C.ia3(d,e)
if(u<=0||f.length<=u)return new A.aeC(!1,D.D0,f)
if(g.t(0,e.a))return new A.aeC(!1,D.D0,f)
w=A.T(f).c
v=A.d_(f,0,A.dA(u,"count",x.S),w).dm(0)
return new A.aeC(!0,A.d_(f,u,null,w).dm(0),v)},
hWi(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.aid(d3),d2=d1.length
if(d2===0)return D.hja
w=x.N
v=A.U(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.L)(d1),++u){t=d1[u]
v.c3(0,t.a,new C.ddp(t))}s=new C.ddG(v)
d2=x.dy
r=A.U(w,d2)
q=new C.ddy(r)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.ddx(r)
l=A.U(w,x.do)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.ca(l.c3(0,k,new C.ddq()),o)}h=new C.ddw(s)
g=new C.ddv(l,r)
p=v.$ti.k("bd<2>")
o=p.k("Z<M.E>")
f=A.C(new A.Z(new A.bd(v,p),new C.ddr(h),o),o.k("M.E"))
e=f.length===0?new A.bd(v,p).gI(0):B.d.gI(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.L)(f),++u){t=f[u]
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
a9=new C.ddE(new C.ddA(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.U(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dq(v,v.r,v.e),j=a2.galk(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.eE([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.M(0,i))break}if(h.$1(b0)&&a2.aj(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.pU(J.dI(i==null?B.Y:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.U(w,x.dO)
b5=A.a([],x.M)
b6=A.U(w,d2)
b7=new C.ddo(a2,new C.ddF(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.L)(a8),++u){b8=a8[u]
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
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.G8(o,new A.t(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Kp(c5.a,new A.t(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cx<1>")
d2=A.C(new A.cx(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bQ(0,new C.dds(c6,b4))
for(d2=new A.cI(a4,a4.$ti.k("cI<1,2>")).gag(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aW(c7.b);j.C();){i=j.gS(j)
if(b6.aj(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.t(d0,b4.h(0,i).b.b))}}for(j=B.d.gag(b5),i=new A.f5(j,new C.ddt(c8));i.C();)o.push(j.gS(0).b)
if(o.length===0)continue
B.d.aY(o,new C.ddu())
c6.push(new C.aJV(new A.t(c9,b4.h(0,c8).b.b+112),B.I,!1,o))}return new C.bfJ(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
htW(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cC(d)
return w==null?null:w.b[1]},
ho7(d,e,f,g,h,i,j,k,l,m,n){return new C.a_r(k,f,j,e,l,n,m,d,g,h,i,null)},
aCN(d,e,f,g,h,i,j){return new C.bjw(i,d,e,f,j,h,g,null)},
aqd:function aqd(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEk:function aEk(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e_c:function e_c(d){this.a=d},
e_b:function e_b(d){this.a=d},
e_e:function e_e(d,e){this.a=d
this.b=e},
e_f:function e_f(d,e){this.a=d
this.b=e},
e_g:function e_g(d){this.a=d},
e_a:function e_a(d,e){this.a=d
this.b=e},
e_d:function e_d(d){this.a=d},
e_i:function e_i(d){this.a=d},
e_h:function e_h(d,e){this.a=d
this.b=e},
aq7:function aq7(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEh:function aEh(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dZD:function dZD(d){this.a=d},
dZB:function dZB(d){this.a=d},
dZC:function dZC(d){this.a=d},
dZE:function dZE(d,e){this.a=d
this.b=e},
dZy:function dZy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZ_:function dZ_(d){this.a=d},
dZ0:function dZ0(d,e){this.a=d
this.b=e},
dZh:function dZh(d){this.a=d},
dZf:function dZf(d){this.a=d},
dZg:function dZg(d,e){this.a=d
this.b=e},
dZi:function dZi(d){this.a=d},
dZj:function dZj(d,e){this.a=d
this.b=e},
dZx:function dZx(d,e){this.a=d
this.b=e},
dZe:function dZe(d){this.a=d},
dZd:function dZd(d){this.a=d},
dZc:function dZc(d,e){this.a=d
this.b=e},
dZu:function dZu(){},
dZv:function dZv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dZt:function dZt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dZn:function dZn(d){this.a=d},
dZo:function dZo(d,e,f){this.a=d
this.b=e
this.c=f},
dZm:function dZm(d,e){this.a=d
this.b=e},
dZp:function dZp(d,e){this.a=d
this.b=e},
dZk:function dZk(d,e){this.a=d
this.b=e},
dZl:function dZl(){},
dZq:function dZq(d,e){this.a=d
this.b=e},
dZr:function dZr(d){this.a=d},
dZs:function dZs(d,e){this.a=d
this.b=e},
dZw:function dZw(d,e){this.a=d
this.b=e},
dYO:function dYO(d,e){this.a=d
this.b=e},
dYP:function dYP(d,e){this.a=d
this.b=e},
dZG:function dZG(d,e,f){this.a=d
this.b=e
this.c=f},
dZA:function dZA(d,e,f){this.a=d
this.b=e
this.c=f},
dZz:function dZz(d){this.a=d},
dYQ:function dYQ(d){this.a=d},
dYR:function dYR(d){this.a=d},
dYS:function dYS(){},
dYT:function dYT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dYX:function dYX(d,e){this.a=d
this.b=e},
dYW:function dYW(d,e){this.a=d
this.b=e},
dYV:function dYV(d){this.a=d},
dYY:function dYY(d,e){this.a=d
this.b=e},
dYU:function dYU(d){this.a=d},
dZF:function dZF(d){this.a=d},
dZ9:function dZ9(){},
dZa:function dZa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZ8:function dZ8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZ4:function dZ4(d,e,f){this.a=d
this.b=e
this.c=f},
dZ3:function dZ3(d,e,f){this.a=d
this.b=e
this.c=f},
dZ1:function dZ1(d,e){this.a=d
this.b=e},
dZ5:function dZ5(d){this.a=d},
dZ6:function dZ6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZ2:function dZ2(d,e){this.a=d
this.b=e},
dZ7:function dZ7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZb:function dZb(d,e){this.a=d
this.b=e},
dZN:function dZN(){},
dZO:function dZO(d,e){this.a=d
this.b=e},
dZP:function dZP(d){this.a=d},
dZQ:function dZQ(d,e){this.a=d
this.b=e},
dZJ:function dZJ(d){this.a=d},
dZH:function dZH(d,e){this.a=d
this.b=e},
dZK:function dZK(d,e){this.a=d
this.b=e},
dZL:function dZL(d,e){this.a=d
this.b=e},
dZM:function dZM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dZR:function dZR(d){this.a=d},
dZI:function dZI(d){this.a=d},
dYZ:function dYZ(d){this.a=d},
bfH:function bfH(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ddm:function ddm(d){this.a=d},
ddl:function ddl(d,e){this.a=d
this.b=e},
ddn:function ddn(d){this.a=d},
ddk:function ddk(d,e){this.a=d
this.b=e},
fBF:function fBF(d,e){this.a=d
this.b=e},
fBG:function fBG(d){this.a=d},
fBH:function fBH(){},
fBD:function fBD(d,e){this.a=d
this.b=e},
fBE:function fBE(){},
fBK:function fBK(d,e){this.a=d
this.b=e},
fBL:function fBL(d){this.a=d},
fBM:function fBM(){},
fBI:function fBI(d){this.a=d},
fBJ:function fBJ(d,e){this.a=d
this.b=e},
Kp:function Kp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
G8:function G8(d,e){this.a=d
this.b=e},
bfJ:function bfJ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ddp:function ddp(d){this.a=d},
ddG:function ddG(d){this.a=d},
ddy:function ddy(d){this.a=d},
ddz:function ddz(){},
ddx:function ddx(d){this.a=d},
ddq:function ddq(){},
ddw:function ddw(d){this.a=d},
ddv:function ddv(d,e){this.a=d
this.b=e},
ddr:function ddr(d){this.a=d},
ddA:function ddA(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ddB:function ddB(d){this.a=d},
ddC:function ddC(d){this.a=d},
ddD:function ddD(){},
ddE:function ddE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ddF:function ddF(){},
ddo:function ddo(d,e,f,g,h,i,j,k,l,m){var _=this
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
dds:function dds(d,e){this.a=d
this.b=e},
ddt:function ddt(d){this.a=d},
ddu:function ddu(){},
aJV:function aJV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bfK:function bfK(d,e){this.b=d
this.a=e},
ddH:function ddH(){},
ddI:function ddI(d){this.a=d},
ddJ:function ddJ(d){this.a=d},
ddK:function ddK(){},
bjx:function bjx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beM:function beM(d,e){this.b=d
this.a=e},
bxp:function bxp(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fig:function fig(d){this.a=d},
bmQ:function bmQ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eTh:function eTh(d){this.a=d},
eTg:function eTg(d,e){this.a=d
this.b=e},
a_r:function a_r(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aCL:function aCL(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dtv:function dtv(d,e){this.a=d
this.b=e},
dtu:function dtu(d){this.a=d},
dts:function dts(d){this.a=d},
dtt:function dtt(d){this.a=d},
dtE:function dtE(d){this.a=d},
dtF:function dtF(d){this.a=d},
dtD:function dtD(d,e){this.a=d
this.b=e},
dtG:function dtG(){},
dtJ:function dtJ(d){this.a=d},
dtC:function dtC(d,e){this.a=d
this.b=e},
dtI:function dtI(){},
dtK:function dtK(d){this.a=d},
dtB:function dtB(d,e){this.a=d
this.b=e},
dtL:function dtL(d){this.a=d},
dtA:function dtA(d){this.a=d},
dtM:function dtM(d){this.a=d},
dtz:function dtz(d){this.a=d},
dtN:function dtN(d){this.a=d},
dty:function dty(d){this.a=d},
dtO:function dtO(d){this.a=d},
dtx:function dtx(d){this.a=d},
dtP:function dtP(d){this.a=d},
dtw:function dtw(d,e){this.a=d
this.b=e},
dtH:function dtH(d){this.a=d},
adw:function adw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjw:function bjw(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
adv:function adv(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bjv:function bjv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dtQ:function dtQ(d){this.a=d},
dtR:function dtR(d,e){this.a=d
this.b=e},
aCM:function aCM(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aIX:function aIX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
adx:function adx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
du_:function du_(d){this.a=d},
G4:function G4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hj0(d){var w=d.T,v=x.N
return w.ji(w,new C.ccZ(),v,v)},
hNN(d){var w=d.bD
if(w>=0)return w
return 5},
hj2(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hj0(d).h(0,v)
if(w==null||w.length===0)return null
return A.bk(w)},
hj1(d,e){var w=C.hj2(d,e)
if(w!=null&&w.ce(new A.V(Date.now(),0,!1)))return!0
return!1},
hNO(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.hj0(d),w,w)
u=C.hj2(d,e)
t=u!=null&&u.ce(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bS(A.dC(30,0,0,0,0,0).a).a7().ae())
d.T=v},
b0d(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b0d=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lt(t,B.IZ),$async$b0d)
case 3:if(l){u=!0
w=1
break}u=A.l6(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.IZ,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0d,v)},
ccZ:function ccZ(){},
hNL(){var w,v=$.of(),u=J.e_(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.ap(32)]
return"FT"+B.d.hk(u)},
IT(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$IT=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$IT)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_family_tree_backup_codes_v1",null,!1,B.bK),$async$IT)
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
return A.i($async$IT,v)},
a7y(d){return C.hNM(d)},
hNM(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a7y=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$a7y)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hM("ngmy_family_tree_backup_codes_v1",A.H(["codes",d,"savedAt",new A.V(Date.now(),0,!1).a7().ae()],x.N,x.z),!1,!1,B.cG,null),$async$a7y)
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
return A.i($async$a7y,v)},
ccY(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$ccY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.IT(),$async$ccY)
case 3:t=m.k0(f),t=t.gag(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gS(t)
q=r.b
if(s.b(q)){p=J.a6(q)
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
return A.i($async$ccY,v)},
NP(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$NP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.ccY(d),$async$NP)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.IT(),$async$NP)
case 6:s=f
r=J.a6(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dR(A.a2(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).a7().ae())
r.n(s,t,o)
w=9
return A.b(C.a7y(s),$async$NP)
case 9:case 8:u=t
w=1
break
case 5:n=C.hNL()
w=10
return A.b(C.IT(),$async$NP)
case 10:s=f
J.aI(s,n,A.H(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).a7().ae(),"updatedAt",new A.V(Date.now(),0,!1).a7().ae()],x.N,x.K))
w=11
return A.b(C.a7y(s),$async$NP)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$NP,v)},
b0c(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b0c=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.IT(),$async$b0c)
case 3:t=f
for(s=J.dn(t),r=s.gdV(t),r=r.dm(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.L)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.r(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a7y(t),$async$b0c)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b0c,v)},
a7z(d,e,f){var w=0,v=A.j(x.H),u
var $async$a7z=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.aqc(d,e),$async$a7z)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.NP(d),$async$a7z)
case 7:w=4
break
case 5:w=8
return A.b(C.b0c(d),$async$a7z)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a7z,v)},
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
return A.b(C.IT(),$async$aq6)
case 7:q=o.r(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a6(q)
if(!J.A(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aq6,v)},
b0b(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b0b=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c8(),$async$b0b)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.IT(),$async$b0b)
case 4:t=q.r(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a6(t)
if(!J.A(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0b,v)},
hNP(){var w,v=$.of(),u=J.e_(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.ap(32)]
return"FT"+B.d.hk(u)},
aq9(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$aq9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$aq9)
case 3:if(!g){u=null
w=1
break}t=C.hNP()
w=4
return A.b(A.Vy(),$async$aq9)
case 4:s=g
r=B.dO.aN(B.X.aq(d.eZ(),null))
r=B.cJ.gct().aN(r)
q=e?999:2
J.aI(s,t,A.H(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).a7().ae()],x.N,x.K))
w=5
return A.b(A.a7A(s),$async$aq9)
case 5:p=e?999:2
u=new A.a0D("NGMYFTSYNC2|"+t,t,p)
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
return A.b(A.Vy(),$async$aq8)
case 3:p=a0
o=J.a6(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a6(n)
l=A.aK(m.h(n,"usesRemaining"))
k=l==null?null:B.k.N(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b0b(J.k(l==null?"":l),j),$async$aq8)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.ch.cB(0,B.cF.aN(t))
s=C.hj3(r)}catch(f){q=A.ab(f)
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
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).a7().ae())
o.n(p,g,l)}w=5
return A.b(A.a7A(p),$async$aq8)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aq8,v)},
hj3(d){var w,v,u,t,s=null
try{w=B.X.aL(0,d,s)
if(!x.f.b(w))return s
u=J.r(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hNR(A.a2(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
h2y(d){var w=0,v=A.j(x.m),u,t,s
var $async$h2y=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aq8(t[1])
w=1
break}u=null
w=1
break}u=C.hj3(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h2y,v)},
hNR(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.de(v,x.f)
u=A.cF(u,new C.cd0(),u.$ti.k("M.E"),x.k)
t=A.a7(u).k("Z<M.E>")
s=A.C(new A.Z(u,new C.cd1(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bk(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.U(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.k0(p),t=t.gag(t),o=x.B;t.C();){n=t.gS(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.de(l,u)
n=A.cF(n,new C.cd2(),n.$ti.k("M.E"),o)
k=A.a7(n).k("Z<M.E>")
j=A.C(new A.Z(n,new C.cd3(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.aqa(h,w,s,r,q)},
aqc(d,e){var w=0,v=A.j(x.y),u,t
var $async$aqc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.NG(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.B_(d),$async$aqc)
case 3:u=t.cL(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqc,v)},
cd9(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cd9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.B_(d),$async$cd9)
case 3:t=s.b6(f,new C.cda(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aY(t,new C.cdb())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cd9,v)},
Vz(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Vz=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.aqc(e,d),$async$Vz)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.NP(e),$async$Vz)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.B_(e),$async$Vz)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dI(r,new C.cd7(g))
r=A.C(t,t.$ti.k("M.E"))}t=J.a6(r)
if(t.gan(r)){u=null
w=1
break}t=t.dF(r,new C.cd8(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.U(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Lb(e,o),$async$Vz)
case 14:n=i
if(J.cL(n))q.n(0,o,n)
case 12:r.length===t||(0,A.L)(r),++p
w=11
break
case 13:u=new C.aqa(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Vz,v)},
b0g(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b0g=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Vz(d,e,f,g),$async$b0g)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gI(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.GP(A.Kl(q.eZ(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0g,v)},
b0f(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b0f=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Vz(d,e,f,g),$async$b0f)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.aq9(r,f),$async$b0f)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aGX(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0f,v)},
VA(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$VA=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.h2y(a0),$async$VA)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aq6(g.a,d,e,f,s,r),$async$VA)
case 6:if(!a2){if(r)throw A.W(A.be("This backup expired or the sender's tree is no longer available."))
throw A.W(A.be("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bCI(e,j),$async$VA)
case 12:case 11:w=13
return A.b(C.ahZ(e,j,s),$async$VA)
case 13:h=n.h(0,i)
w=h!=null&&J.cL(h)?14:15
break
case 14:w=16
return A.b(C.Ba(e,i,h),$async$VA)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.L)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bqv(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$VA,v)},
aqa:function aqa(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cd5:function cd5(){},
cd6:function cd6(){},
cd4:function cd4(){},
cd0:function cd0(){},
cd1:function cd1(){},
cd2:function cd2(){},
cd3:function cd3(){},
cda:function cda(){},
cdb:function cdb(){},
cd7:function cd7(d){this.a=d},
cd8:function cd8(d){this.a=d},
hba(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f8(null,x.H)
return A.hH(d,new C.aqb(w,e,g,i,f,h,null),!0,null,x.H)},
ddj(d,e,f,g,h,i,j,k){return new C.bfG(i,e,k,j,g,f,h,d,null)},
aqb:function aqb(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEj:function aEj(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e__:function e__(d){this.a=d},
e_0:function e_0(d,e,f){this.a=d
this.b=e
this.c=f},
e_4:function e_4(d,e){this.a=d
this.b=e},
e_5:function e_5(d){this.a=d},
dZX:function dZX(d){this.a=d},
dZY:function dZY(d,e){this.a=d
this.b=e},
dZZ:function dZZ(d,e){this.a=d
this.b=e},
e_3:function e_3(d){this.a=d},
e_2:function e_2(d,e){this.a=d
this.b=e},
e_1:function e_1(){},
e_7:function e_7(d){this.a=d},
e_8:function e_8(d,e){this.a=d
this.b=e},
e_6:function e_6(d,e){this.a=d
this.b=e},
ddL:function ddL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bfI:function bfI(d,e,f){this.d=d
this.e=e
this.a=f},
acN:function acN(d,e,f){this.c=d
this.d=e
this.a=f},
bfG:function bfG(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bfL:function bfL(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_M:function a_M(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aEi:function aEi(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dZS:function dZS(d,e){this.a=d
this.b=e},
dZT:function dZT(d){this.a=d},
dZU:function dZU(d){this.a=d},
dZV:function dZV(d){this.a=d},
dZW:function dZW(d){this.a=d},
a_N:function a_N(d){this.a=d},
bl_:function bl_(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e_9:function e_9(d,e){this.a=d
this.b=e},
aZL(d,e){return new C.aZK(d,e,null)},
aZK:function aZK(d,e,f){this.c=d
this.d=e
this.a=f},
icw(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b5(d,11)},
ik0(d){return A.bU(B.L,null,new C.fSb(new C.u6(A.P(d).ax.a===B.J)),d,!0,!0,!0,null,!1,!1,x.N)},
hkY(d,e){return new C.atd(e,d,null)},
aRh(d,e,f,g,h,i,j){var w=C.icw(i)
if(w!=null)return A.bx(e,new A.a5(j,f,new C.a6E(w,!0,null),null),B.ap)
return N.aQD(e,B.bW,f,g,h,i,j)},
lO:function lO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6E:function a6E(d,e,f){this.c=d
this.d=e
this.a=f},
bkG:function bkG(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b7$=e
_.c=_.a=null},
dLA:function dLA(d){this.a=d},
dLB:function dLB(){},
dLC:function dLC(d,e){this.a=d
this.b=e},
bkF:function bkF(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fSb:function fSb(d){this.a=d},
fSa:function fSa(d,e){this.a=d
this.b=e},
fS9:function fS9(d,e){this.a=d
this.b=e},
fS8:function fS8(d,e){this.a=d
this.b=e},
atd:function atd(d,e,f){this.c=d
this.d=e
this.a=f},
clE:function clE(d,e){this.a=d
this.b=e},
aMl:function aMl(){},
ijM(d){var w=null
return A.ck(w,w,!0,w,new C.fRy(),d,w,!0,!0,x.e2)},
ikX(d,e,f,g,h){var w=null
return A.ck(w,w,!0,w,new C.fZ3(h,g,f,e),d,w,!0,!0,x.N)},
ijO(d,e){var w=null
return A.ck(w,w,!0,w,new C.fRD(e),d,w,!0,!0,x.dY)},
ijN(d){var w=null
return A.ck(w,w,!0,w,new C.fRC(),d,w,!0,!0,x.c5)},
aUh:function aUh(d,e){this.a=d
this.b=e},
aUg:function aUg(d){this.a=d},
aSf:function aSf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fRy:function fRy(){},
fZ3:function fZ3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fRD:function fRD(d){this.a=d},
fRC:function fRC(){},
Zp:function Zp(d,e){this.c=d
this.a=e},
azv:function azv(){var _=this
_.d=$
_.c=_.a=_.e=null},
d51:function d51(d){this.a=d},
d52:function d52(d){this.a=d},
d50:function d50(d,e){this.a=d
this.b=e},
d53:function d53(d){this.a=d},
d54:function d54(d){this.a=d},
Zo:function Zo(d){this.a=d},
azu:function azu(){this.d=$
this.c=this.a=null},
d4Y:function d4Y(d){this.a=d},
d4Z:function d4Z(d){this.a=d},
d5_:function d5_(d){this.a=d},
YW:function YW(d){this.a=d},
aya:function aya(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cDs:function cDs(){},
cDy:function cDy(d){this.a=d},
cDz:function cDz(d){this.a=d},
cDA:function cDA(d){this.a=d},
cDx:function cDx(){},
cDB:function cDB(d){this.a=d},
cDC:function cDC(d){this.a=d},
cDw:function cDw(){},
cDD:function cDD(d,e){this.a=d
this.b=e},
cDv:function cDv(d,e){this.a=d
this.b=e},
cDt:function cDt(d,e){this.a=d
this.b=e},
cDE:function cDE(d){this.a=d},
cDu:function cDu(){},
cDF:function cDF(d){this.a=d},
a1z:function a1z(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bxf:function bxf(){this.d=$
this.c=this.a=null},
fhA:function fhA(d,e){this.a=d
this.b=e},
fhB:function fhB(d){this.a=d},
fhC:function fhC(d,e){this.a=d
this.b=e},
abR:function abR(d,e){this.a=d
this.b=e},
FU:function FU(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bxd:function bxd(d,e){var _=this
_.d=$
_.bx$=d
_.a8$=e
_.c=_.a=null},
fhy:function fhy(d,e){this.a=d
this.b=e},
ay3:function ay3(d,e){this.c=d
this.a=e},
bxe:function bxe(d,e){var _=this
_.d=$
_.bx$=d
_.a8$=e
_.c=_.a=null},
fhz:function fhz(d){this.a=d},
bxc:function bxc(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aOr:function aOr(){},
aOs:function aOs(){},
bEF(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bf(u),s=B.o.E(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oT(B.o.u(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fQ_(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.U,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aW(B.o.u(s),2,"0")
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Yh(A.cS(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aQT(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aQT=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hW().l2(85,1280,B.eK),$async$aQT)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fl(),$async$aQT)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hkX()
w=9
return A.b(C.clD(q,r),$async$aQT)
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
return A.i($async$aQT,v)},
aRf(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aRf=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.clA(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.t(g,",")?B.d.gak(g.split(",")):g
p=B.cF.aN(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.S().LY(p,!0,null,i).da(0,B.fY),$async$aRf)
case 9:n=a1
w=10
return A.b(n.lL(),$async$aRf)
case 10:m=a1
w=11
return A.b(J.a3f(m).hw(B.h9),$async$aRf)
case 11:l=a1
J.a3f(m).q()
if(l==null){w=8
break}i=J.eS(B.dK.gaR(l))
k="data:image/png;base64,"+B.cJ.gct().aN(i)
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
return A.i($async$aRf,v)},
fQ_:function fQ_(){},
u6:function u6(d){this.a=d},
atc:function atc(d,e,f){this.c=d
this.d=e
this.a=f},
aFN:function aFN(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eQr:function eQr(d,e){this.a=d
this.b=e},
eQi:function eQi(d){this.a=d},
eQj:function eQj(d){this.a=d},
eQp:function eQp(d,e){this.a=d
this.b=e},
eQo:function eQo(d,e){this.a=d
this.b=e},
eQl:function eQl(d,e){this.a=d
this.b=e},
eQk:function eQk(d,e){this.a=d
this.b=e},
eQm:function eQm(d){this.a=d},
eQn:function eQn(d,e){this.a=d
this.b=e},
eQq:function eQq(d,e){this.a=d
this.b=e},
eQd:function eQd(d,e){this.a=d
this.b=e},
eQh:function eQh(d){this.a=d},
eQg:function eQg(d,e){this.a=d
this.b=e},
eQf:function eQf(d){this.a=d},
eQs:function eQs(d,e){this.a=d
this.b=e},
eQt:function eQt(d,e){this.a=d
this.b=e},
eQe:function eQe(d,e){this.a=d
this.b=e},
hxN(d,e,f){var w="thumbnailPath",v=e.ah()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.H(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).a7().ae(),"project",v],x.N,x.z)},
fQ0(d,e,f){var w=0,v=A.j(x.N),u
var $async$fQ0=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.X.aq(C.hxN(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fQ0,v)},
bEH(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bEH=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fQ0(!0,d,e),$async$bEH)
case 4:w=3
return A.b(r.ata(g,d,e.a),$async$bEH)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dO.aN(B.X.aq(C.hxN(d,e,null),null))
u="NGMY_WS:"+B.ky.gct().aN(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEH,v)},
hpv(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
haQ(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d2(s,"NGMYWSSYNC2|"))return!0
if(J.d2(s,"NGMY_WS:"))return!0
if(J.f0(s,t))return!0
if(J.d2(s,"{"))try{w=B.X.aL(0,s,null)
if(x.f.b(w)){v=J.r(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
ihE(d){var w,v,u,t=C.hpv(d)
if(t==null)return null
if(C.haQ(t))return t
w=B.a.cu(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b5(t,w))
if(C.haQ(v))return v}u=B.a.cu(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b5(t,u))
if(C.haQ(v))return v}return null},
haP(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d2(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d2(q,"NGMY_WS:")){v=B.ch.cB(0,B.cF.aN(J.ni(q,8)))
w=t.a(B.X.aL(0,v,r))}else w=t.a(B.X.aL(0,q,r))
t=J.r(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.r(w,"project")
if(!x.f.b(u))return r
t=C.h5c(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bEG(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bEG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.at9(t[1]),$async$bEG)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.haP(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.haP(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEG,v)},
haO(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lx(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bEc(){var w=0,v=A.j(x.o),u,t
var $async$bEc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.H0(),$async$bEc)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.haP(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEc,v)},
hyO(d,e,f,g){return A.bU(B.L,null,new C.fYU(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fYU:function fYU(d,e,f){this.a=d
this.b=e
this.c=f},
adS:function adS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eQv:function eQv(d,e){this.a=d
this.b=e},
eQw:function eQw(d,e){this.a=d
this.b=e},
eQx:function eQx(d,e){this.a=d
this.b=e},
eQy:function eQy(d,e){this.a=d
this.b=e},
eQu:function eQu(d){this.a=d},
at6:function at6(d,e,f){this.c=d
this.d=e
this.a=f},
bml:function bml(){var _=this
_.c=_.a=_.e=_.d=null},
eQ8:function eQ8(d,e){this.a=d
this.b=e},
eQ9:function eQ9(d){this.a=d},
eQa:function eQa(d){this.a=d},
atb:function atb(d){this.a=d},
aFM:function aFM(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eQc:function eQc(d){this.a=d},
eQb:function eQb(d){this.a=d},
hR4(d,e,f,g,h){return new C.Ot(h,g,d,e,f,null)},
aKH:function aKH(d,e){this.a=d
this.b=e},
Ot:function Ot(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFO:function aFO(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eQV:function eQV(){},
eQR:function eQR(d,e){this.a=d
this.b=e},
eQS:function eQS(d){this.a=d},
eQC:function eQC(d){this.a=d},
eQA:function eQA(d){this.a=d},
eQB:function eQB(d){this.a=d},
eQL:function eQL(d,e){this.a=d
this.b=e},
eQI:function eQI(d,e){this.a=d
this.b=e},
eQJ:function eQJ(d,e){this.a=d
this.b=e},
eQK:function eQK(d,e,f){this.a=d
this.b=e
this.c=f},
eQG:function eQG(d,e,f){this.a=d
this.b=e
this.c=f},
eQE:function eQE(d){this.a=d},
eQF:function eQF(d){this.a=d},
eQH:function eQH(d){this.a=d},
eQY:function eQY(d){this.a=d},
eQX:function eQX(d){this.a=d},
eQZ:function eQZ(d){this.a=d},
eQW:function eQW(d){this.a=d},
eQz:function eQz(d){this.a=d},
eQD:function eQD(d,e){this.a=d
this.b=e},
eQU:function eQU(d,e){this.a=d
this.b=e},
eQT:function eQT(d,e){this.a=d
this.b=e},
eQO:function eQO(d){this.a=d},
eQP:function eQP(d){this.a=d},
eQQ:function eQQ(d,e){this.a=d
this.b=e},
eQN:function eQN(d,e){this.a=d
this.b=e},
eQM:function eQM(d,e,f){this.a=d
this.b=e
this.c=f},
bz0:function bz0(){},
AP(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ago(d,e,f){return C.i5X(d,e,f)},
i5X(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ago=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.au("String",e,f),$async$ago)
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
return A.i($async$ago,v)},
agn(d,e){return C.i5W(d,e)},
i5W(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$agn=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$agn)
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
return A.i($async$agn,v)},
i4H(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Ta(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bBH(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bBH=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b3t(q),$async$bBH)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aRf(q,!1),$async$bBH)
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
return A.i($async$bBH,v)},
hEJ(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aK(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.rf(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rf(p,J.k(u==null?"":u),1,o,q)},
h5c(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.de(s,x.f)
w=A.cF(w,new C.cCP(),w.$ti.k("M.E"),x.Q)
v=A.a7(w).k("Z<M.E>")
r=A.C(new A.Z(w,new C.cCQ(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bk(J.k(t==null?"":t))
return new C.lx(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
i9Y(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.w6
case"female":case"f":return D.od
default:return D.yA}},
hut(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hf3(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.i9Y(v==null?j:J.k(v))
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
return new C.hV(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
ia_(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.NV
case"viewer":return D.kK
default:return D.ue}},
ia0(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
GQ(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aQ_(d,e){return B.a.i(e.toLowerCase())===C.GQ(d,e)&&d.y!==D.kK},
uk(d,e){var w,v=d.y
if(v===D.kK)return!1
w=B.a.i(e.toLowerCase())
if(w===C.GQ(d,e))return!0
if(v===D.NV)return!0
v=d.e
return new A.N(v,A.haV(),A.T(v).k("N<1,m>")).t(0,w)},
i9q(d){return J.dI(d,new C.fAF()).gL(0)},
fZD(d){var w=0,v=A.j(x.y),u,t
var $async$fZD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.B_(d),$async$fZD)
case 3:u=t.ra(f,new C.fZE(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fZD,v)},
bCI(d,e){var w=0,v=A.j(x.H),u,t
var $async$bCI=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.B_(d),$async$bCI)
case 3:t=g
if(J.ra(t,new C.fyy(e))){w=1
break}if(C.i9q(t)>=2)throw A.W(A.be("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bCI,v)},
alj(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.de(h,x.f)
w=A.cF(w,new C.bR9(),w.$ti.k("M.E"),x.P)
v=A.a7(w).k("Z<M.E>")
g=A.C(new A.Z(w,new C.bRa(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b6(u,new C.bRb(),x.N)
t=A.C(w,w.$ti.k("ak.E"))}else t=A.a([],x.s)
w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
s=d.h(0,"code")
s=J.k(s==null?"":s)
r=J.A(d.h(0,"isPrivate"),!1)
q=d.h(0,"createdAt")
q=A.bk(J.k(q==null?"":q))
if(q==null)q=new A.V(Date.now(),0,!1)
p=A.aK(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.k.N(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.ia_(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aW(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cv)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gS(f)
if(l.b(i))m.push(A.a2(i,k,j))}return new C.kO(w,v,s,!r,t,g,q,p,o,n,m)},
huD(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ar(v,0,8)},
Db(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$Db=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.RV(d),$async$Db)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$Db)
case 4:t=f
w=5
return A.b(t.a6O(0),$async$Db)
case 5:w=6
return A.b(C.fpd(t,l),$async$Db)
case 6:s=f
if(J.cL(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a6(q)
o=A.aT(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hq5(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oS(l,n),$async$Db)
case 11:u=n
w=1
break
case 10:case 8:m=A.aT(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hq5(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oS(l,n),$async$Db)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Db,v)},
fpd(d,e){return C.i28(d,e)},
i28(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fpd=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a6(a3)
a5=A.aT(a4.h(a3,"ngmy_worksheets_index_v3_"+C.AP(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.X.aL(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aW(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gS(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aT(a4.h(a3,"ngmy_worksheet_item_v3_"+C.AP(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.X.aL(0,m,null)
if(!a0.b(l)){w=7
break}k=C.h5c(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aT(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.AP(a9)+"_"+n))
i=C.i4H(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b3t(h),$async$fpd)
case 17:g=b1
if(g!=null){i=i.Ta(g)
p=!0}case 16:J.ca(q,i)
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
case 8:J.S6(q,new C.fpe())
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
return A.i($async$fpd,v)},
bD8(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bD8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.RV(d),$async$bD8)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.Db(r),$async$bD8)
case 4:t=p.aW(g)
case 5:if(!t.C()){w=6
break}s=t.gS(t)
if(s.a===q){u=s
w=1
break}w=5
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bD8,v)},
hq5(d){var w,v,u,t
try{w=B.X.aL(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.de(w,x.f)
v=A.cF(v,new C.fl3(),v.$ti.k("M.E"),x.fA)
u=A.a7(v).k("Z<M.E>")
v=A.C(new A.Z(v,new C.fl4(),u),u.k("M.E"))
B.d.aY(v,new C.fl5())
return v}catch(t){v=A.a([],x.D)
return v}},
oS(d,e){return C.ijC(d,e)},
ijC(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oS=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.RV(b2),$async$oS)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$oS)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.AP(a8)
p=A.aT(J.r(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.X.aL(0,p,null)),new C.fRp(),a2).fJ(0)
a2=J.b6(b3,new C.fRq(),a2).c_(0,new C.fRr())
n=A.df(a2,a2.$ti.k("M.E"))
a2=o,a2=A.en(a2,a2.r,A.a7(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f0(n,m)?17:18
break
case 17:a5=C.AP(a8)
l=A.aT(J.r(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a8R(l),$async$oS)
case 19:t=21
a5=C.AP(a8)
k=A.aT(J.r(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.X.aL(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.r(j,"thumbnailPath")
w=28
return A.b(C.a8R(a5==null?null:J.k(a5)),$async$oS)
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
return A.b(C.agn(r,"ngmy_worksheet_item_v3_"+C.AP(a8)+"_"+m),$async$oS)
case 29:w=30
return A.b(C.agn(r,"ngmy_worksheet_thumb_v3_"+C.AP(a8)+"_"+m),$async$oS)
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
case 14:case 10:a2=J.cD(b3),a3=a2.gag(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gS(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bBH(h),$async$oS)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ago(r,"ngmy_worksheet_thumb_v3_"+C.AP(a8)+"_"+a4,f),$async$oS)
case 40:g=i.Ta(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.agn(r,"ngmy_worksheet_thumb_v3_"+C.AP(a8)+"_"+a4),$async$oS)
case 41:g=i.Ta(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.agn(r,"ngmy_worksheet_thumb_v3_"+C.AP(a8)+"_"+a4),$async$oS)
case 42:case 34:a4=i.a
w=43
return A.b(C.ago(r,"ngmy_worksheet_item_v3_"+C.AP(a8)+"_"+a4,B.X.aq(g.ah(),null)),$async$oS)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.ca(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ago(r,"ngmy_worksheets_index_v3_"+C.AP(a8),B.X.aq(q,null)),$async$oS)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eN(b3,new C.fRs(q))
a4=a3.$ti.k("cQ<1,a8<m,@>>")
a7=A.C(new A.cQ(a3,new C.fRt(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ago(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.X.aq(a0,null)),$async$oS)
case 45:w=46
return A.b(J.hDP(r),$async$oS)
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
LB(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$LB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Db(d),$async$LB)
case 3:t=g
s=J.cD(t)
r=s.bh(t,new C.fZC(e))
if(r===-1)s.c6(t,0,e)
else s.n(t,r,e)
u=C.oS(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$LB,v)},
bCW(d,e){var w=0,v=A.j(x.H),u
var $async$bCW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Db(d),$async$bCW)
case 2:u=g
J.nE(u,new C.fB8(e))
w=3
return A.b(C.oS(d,u),$async$bCW)
case 3:return A.h(null,v)}})
return A.i($async$bCW,v)},
GS(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$GS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$GS)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aT(J.r(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.X.aL(0,i,null)
if(x.j.b(t)){j=J.de(t,x.f)
j=A.cF(j,new C.fDY(),j.$ti.k("M.E"),x.k)
s=A.a7(j).k("Z<M.E>")
r=A.C(new A.Z(j,new C.fDZ(),s),s.k("M.E"))
B.d.aY(r,new C.fE_())
k=r}}catch(h){}w=4
return A.b(C.flO(d),$async$GS)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.i2v(k,p,d)
j=A.T(o)
s=j.k("N<1,a8<m,@>>")
s=A.C(new A.N(o,new C.fE0(),s),s.k("ak.E"))
n=B.X.aq(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.R7(d,o),$async$GS)
case 7:case 6:j=j.k("Z<1>")
m=A.C(new A.Z(o,new C.fE1(d),j),j.k("M.E"))
if(m.length!==0)C.aPK(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$GS,v)},
fRb(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fRb=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.R7(d,e),$async$fRb)
case 3:t=J.dI(e,new C.fRc(d))
s=A.C(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aPK(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fRb,v)},
a38(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a38=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a38)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aT(J.r(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.X.aL(0,l,null)
if(x.j.b(u)){m=J.de(u,x.f)
m=A.cF(m,new C.fZx(),m.$ti.k("M.E"),x.k)
t=A.a7(m).k("Z<M.E>")
s=A.C(new A.Z(m,new C.fZy(),t),t.k("M.E"))
o=s}}catch(k){}q=J.qv(o,new C.fZz(e))
if(B.a.i(e.x).length===0&&C.uk(e,d)){m=B.a.i(d.toLowerCase())
p=e.aEV(e.y===D.kK?D.kK:D.ue,m)}else p=e
if(q===-1)J.pL(o,0,p)
else J.aI(o,q,p)
w=3
return A.b(C.R7(d,o),$async$a38)
case 3:w=C.uk(p,d)?4:5
break
case 4:w=6
return A.b(C.aPJ(C.GQ(p,d),p),$async$a38)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a38,v)},
aPW(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aPW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.GS(d),$async$aPW)
case 2:u=g
t=J.cD(u)
s=A.pU(t.eN(u,new C.fAQ(e)))
t.bs(u,new C.fAR(e))
w=3
return A.b(C.R7(d,u),$async$aPW)
case 3:w=s!=null&&C.aQ_(s,d)?4:5
break
case 4:w=6
return A.b(C.fl7(e),$async$aPW)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aPW,v)},
aid(d){var w=d.f,v=A.T(w).k("Z<1>")
w=A.C(new A.Z(w,new C.fZI(),v),v.k("M.E"))
return w},
h8t(d,e){var w,v=d.f,u=A.pU(new A.Z(v,new C.fAk(e),A.T(v).k("Z<1>")))
v=C.aid(d)
w=A.T(v).k("Z<1>")
v=A.C(new A.Z(v,new C.fAl(e,u),w),w.k("M.E"))
B.d.aY(v,new C.fAm())
return v},
ia3(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hyS(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bh(C.h8t(d,u),new C.fZ4(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
ibB(d,e){var w
if(e==null||e.length===0)return 1
w=C.h8t(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fEO(),A.T(w).k("N<1,G>")).f3(0,B.xy)+1},
ijv(d){var w,v=C.aid(d)
if(v.length===0)return null
w=new A.Z(v,new C.fR5(),A.T(v).k("Z<1>"))
if(!w.gan(0))return w.gI(0)
return B.d.gI(v)},
i9Z(d){return A.H(["id",d.a,"name",d.b,"gender",C.hut(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
ibw(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.U(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aX(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.L)(a0),++u){q=a0[u]
p=q.a
r.M(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.yA?n:q.c
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
d=q.aEQ(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.L)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cMy(a1,w,a3.d,a2.y,s,a0,v)},
B_(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$B_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$B_)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aT(J.r(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.X.aL(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.de(t,x.f)
p=A.cF(p,new C.fDV(),p.$ti.k("M.E"),x.k)
s=A.a7(p).k("Z<M.E>")
p=A.C(new A.Z(p,new C.fDW(),s),s.k("M.E"))
B.d.aY(p,new C.fDX())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$B_,v)},
ahZ(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ahZ=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.ue:D.kK
a7=C.GQ(b2,b3)
w=2
return A.b(C.B_(b1),$async$ahZ)
case 2:a8=b5
a9=J.cD(a8)
b0=a9.bh(a8,new C.fR0(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bCI(b1,b2),$async$ahZ)
case 5:case 4:if(b0===-1){u=b2.aEV(a6,a7)
a9.c6(a8,0,u)}else{t=a9.h(a8,b0)
s=A.U(x.N,x.P)
for(r=t.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.L)(r),++p){o=r[p]
s.n(0,o.a,o)}for(r=b2.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.L)(r),++p){n=r[p]
m=n.a
l=s.h(0,m)
if(l==null)s.n(0,m,n)
else{k=n.f
j=k==null?null:B.a.i(k)
k=n.b
k=k.length!==0?k:l.b
i=n.c
i=i!==D.yA?i:l.c
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
s.n(0,m,l.aEQ(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bd<2>")
s=A.C(new A.bd(s,k),k.k("M.E"))
k=a5?D.ue:D.kK
u=t.cMA(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.R7(b1,a8),$async$ahZ)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aPJ(B.a.i(b3.toLowerCase()),u),$async$ahZ)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ahZ,v)},
hqu(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).a7().ae(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("N<1,a8<m,@>>"),k=A.C(new A.N(m,C.hxW(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.H(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.H(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a7().ae(),"updatedAt",o],r,x.K),"createdAt",s.a7().ae(),"updatedAt",o],r,x.z)},
hqv(d,e){var w=new A.V(Date.now(),0,!1).a7().ae(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("N<1,a8<m,@>>")
u=A.C(new A.N(u,C.hxW(),t),t.k("ak.E"))
return A.H(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a7().ae(),"updatedAt",w],x.N,x.z)},
i00(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a6(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.alj(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.haV(),A.T(j).k("N<1,m>")).c_(0,new C.flB())
t=A.C(j,j.$ti.k("M.E"))
if(u===v)s=D.ue
else s=B.d.t(t,u)?D.NV:D.kK
return w.aEV(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.alj(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.de(q,h)
h=A.cF(h,new C.flC(),h.$ti.k("M.E"),x.P)
p=A.a7(h).k("Z<M.E>")
o=A.C(new A.Z(h,new C.flD(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.flE(),x.N).c_(0,new C.flF())
t=A.C(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.ue
else s=B.d.t(t,u)?D.NV:D.kK
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.A(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bk(J.k(l==null?"":l))
if(l==null)l=new A.V(Date.now(),0,!1)
j=A.aK(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.N(j)
if(j==null)j=0
return new C.kO(h,r,p,!m,t,o,l,j,v,s,B.ca)},
flO(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$flO=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.flS()
h=x.N
g=x.z
w=7
return A.b(A.iU(A.a([A.lC("family_trees","*",null,A.H(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bK),r.$2(A.lC("family_trees","*",A.H(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bK),"collaborator"),r.$2(A.lC("family_trees","*",null,A.H(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bK),"public")],x.cl),x.fO),$async$flO)
case 7:q=a4
p=J.r(q,0)
o=J.r(q,1)
n=J.r(q,2)
g=x.a
m=A.U(h,g)
h=A.C(p,g)
l=h
J.h9(l,o)
J.h9(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.L)(l),++f){k=l[f]
g=J.r(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aI(m,j,k)}l=m
h=A.a7(l).k("bd<2>")
h=A.cF(new A.bd(l,h),new C.flP(a0),h.k("M.E"),x.k)
l=A.a7(h).k("Z<M.E>")
l=A.C(new A.Z(h,new C.flQ(),l),l.k("M.E"))
B.d.aY(l,new C.flR())
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
return A.i($async$flO,v)},
i2v(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a6(e)
if(j.gan(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dF(e,new C.fpV(),v).c_(0,new C.fpW())
t=A.df(u,u.$ti.k("M.E"))
s=A.U(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.L)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.GQ(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kK){m=q.e
m=!new A.N(m,A.haV(),A.T(m).k("N<1,m>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gag(e);j.C();){v=j.gS(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.ibw(l,v)
o=C.GQ(k,w)
p=v.d
s.n(0,u,o===w?k.bdm(p,D.ue):k.bdm(p,v.y))}j=s.$ti.k("bd<2>")
j=A.C(new A.bd(s,j),j.k("M.E"))
B.d.aY(j,new C.fpX())
return j},
R7(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$R7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$R7)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fsG(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.au("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.X.aq(s,null)),$async$R7)
case 3:return A.h(null,v)}})
return A.i($async$R7,v)},
aPJ(d,e){return C.i7K(d,e)},
i7K(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aPJ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.m5("family_trees",A.a([C.hqu(e,d)],p),null,B.cG),$async$aPJ)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.m5("family_trees",A.a([C.hqv(e,d)],p),null,B.cG),$async$aPJ)
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
return A.i($async$aPJ,v)},
aPK(d,e){return C.i7L(d,e)},
i7L(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aPK=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("N<1,a8<m,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fxS(d),n),m)
r=l
w=7
return A.b(A.m5("family_trees",r,null,B.cG),$async$aPK)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fxT(d),n),m)
p=k
w=8
return A.b(A.m5("family_trees",p,null,B.cG),$async$aPK)
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
return A.i($async$aPK,v)},
fl7(d){return C.i_j(d)},
i_j(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fl7=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Rv("family_trees",A.H(["id",d],x.N,x.z),null,B.cG),$async$fl7)
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
return A.i($async$fl7,v)},
rf:function rf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lx:function lx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cCS:function cCS(){},
cCR:function cCR(){},
cCP:function cCP(){},
cCQ:function cCQ(){},
HZ:function HZ(d,e){this.a=d
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
ali:function ali(d,e){this.a=d
this.b=e},
fAF:function fAF(){},
fZE:function fZE(d){this.a=d},
fyy:function fyy(d){this.a=d},
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
bRd:function bRd(){},
bRc:function bRc(){},
bR9:function bR9(){},
bRa:function bRa(){},
bRb:function bRb(){},
fpe:function fpe(){},
fl3:function fl3(){},
fl4:function fl4(){},
fl5:function fl5(){},
fRp:function fRp(){},
fRq:function fRq(){},
fRr:function fRr(){},
fRs:function fRs(d){this.a=d},
fRt:function fRt(){},
fZC:function fZC(d){this.a=d},
fB8:function fB8(d){this.a=d},
fDY:function fDY(){},
fDZ:function fDZ(){},
fE_:function fE_(){},
fE0:function fE0(){},
fE1:function fE1(d){this.a=d},
fRc:function fRc(d){this.a=d},
fZx:function fZx(){},
fZy:function fZy(){},
fZz:function fZz(d){this.a=d},
fAQ:function fAQ(d){this.a=d},
fAR:function fAR(d){this.a=d},
fZI:function fZI(){},
fAk:function fAk(d){this.a=d},
fAl:function fAl(d,e){this.a=d
this.b=e},
fAm:function fAm(){},
fZ4:function fZ4(d){this.a=d},
fEO:function fEO(){},
fR5:function fR5(){},
fDV:function fDV(){},
fDW:function fDW(){},
fDX:function fDX(){},
fR0:function fR0(d){this.a=d},
flB:function flB(){},
flC:function flC(){},
flD:function flD(){},
flE:function flE(){},
flF:function flF(){},
flS:function flS(){},
flT:function flT(d){this.a=d},
flP:function flP(d){this.a=d},
flQ:function flQ(){},
flR:function flR(){},
fpV:function fpV(){},
fpW:function fpW(){},
fpX:function fpX(){},
fsG:function fsG(){},
fxS:function fxS(d){this.a=d},
fxT:function fxT(d){this.a=d},
cCT:function cCT(d,e){this.a=d
this.b=e},
cCU:function cCU(d,e){this.a=d
this.b=e},
aHT:function aHT(d,e,f){this.a=d
this.b=e
this.c=f},
b9Q:function b9Q(){this.b=this.a=0},
b9P:function b9P(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bxg:function bxg(){},
x0(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gcg()+"/"+w.gcw()+"/"+w.gck()
if(!e)return v
return v+" "+B.a.aW(B.o.u(w.gnn()),2,"0")+":"+B.a.aW(B.o.u(w.gGu()),2,"0")},
hR1(){var w,v=$.of(),u=J.e_(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.ap(32)]
return"WS"+B.d.hk(u)},
at7(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$at7=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$at7)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bK),$async$at7)
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
return A.i($async$at7,v)},
at8(d){return C.hR2(d)},
hR2(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$at8=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$at8)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hM("ngmy_worksheet_project_qr_stashes_v1",A.H(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).a7().ae()],x.N,x.z),!1,!1,B.cG,null),$async$at8)
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
return A.i($async$at8,v)},
ata(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$ata=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$ata)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hR1()
w=4
return A.b(C.at7(),$async$ata)
case 4:r=h
q=B.a.i(e)
p=B.dO.aN(t)
J.aI(r,s,A.H(["ownerEmail",q,"projectId",f,"payload",B.cJ.gct().aN(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).a7().ae()],x.N,x.K))
w=5
return A.b(C.at8(r),$async$ata)
case 5:u=new A.a0D("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ata,v)},
at9(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$at9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c8(),$async$at9)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.at7(),$async$at9)
case 4:q=f
p=J.a6(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a6(o)
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
try{s=B.ch.cB(0,B.cF.aN(t))}catch(h){r=A.ab(h)
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
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).a7().ae())
p.n(q,i,m)}w=5
return A.b(C.at8(q),$async$at9)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$at9,v)},
hkX(){var w=new A.V(Date.now(),0,!1).a7()
return"wst_"+(1000*w.a+w.b)+"_"+B.cK.ap(999999)},
hR3(d){var w,v,u,t,s,r,q
try{w=A.agO(d)
if(w==null)return d
v=w
if(J.LG(v)>960||J.LF(v)>960){s=v
r=J.LG(v)>=J.LF(v)?960:null
v=A.agN(s,J.LF(v)>J.LG(v)?960:null,B.Pc,r)}s=v
u=A.amH(82).Ty(s,B.zd)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cm(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
clD(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$clD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hR3(e)
$.clz.n(0,s,t)
u=C.bEJ(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$clD,v)},
b3t(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b3t=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d2(l,"data:image")){u=null
w=1
break}t=4
r=J.f0(l,",")?B.d.gak(J.lF(l,",")):l
q=B.cF.aN(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hkX()
w=7
return A.b(C.clD(p,q),$async$b3t)
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
return A.i($async$b3t,v)},
clA(d){var w=0,v=A.j(x.T),u,t,s
var $async$clA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(N.clC(s),$async$clA)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cJ.gct().aN(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$clA,v)},
a8R(d){var w=0,v=A.j(x.H),u,t
var $async$a8R=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=N.hxO(d)
if(t==null){w=1
break}$.clz.W(0,t)
w=3
return A.b(C.bEI(t),$async$a8R)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a8R,v)},
bEJ(d,e){return C.ihH(d,e)},
ihH(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bEJ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aOE
w=7
return A.b(n==null?$.aOE=N.h7p():n,$async$bEJ)
case 7:r=g
q=new Uint8Array(A.cm(e))
p=J.mU(r,"thumbs","readwrite")
B.j0.mq(J.mT(p,"thumbs"),q,l)
w=8
return A.b(J.pK(p),$async$bEJ)
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
return A.i($async$bEJ,v)},
bEI(d){return C.ihF(d)},
ihF(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bEI=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aOE
w=7
return A.b(o==null?$.aOE=N.h7p():o,$async$bEI)
case 7:r=f
q=J.mU(r,"thumbs","readwrite")
B.j0.G1(J.mT(q,"thumbs"),m)
w=8
return A.b(J.pK(q),$async$bEI)
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
return A.i($async$bEI,v)}},D,Aw,Ax,A_,Ay
J=c[1]
A=c[0]
B=c[2]
Aa=c[64]
N=c[61]
P=c[257]
A0=c[162]
S=c[60]
Ab=c[232]
K=c[212]
H=c[35]
E=c[222]
T=c[122]
Ac=c[235]
Q=c[107]
Ad=c[135]
U=c[228]
Ae=c[117]
Af=c[198]
A1=c[119]
Ag=c[231]
Ah=c[43]
R=c[230]
M=c[91]
A2=c[87]
A3=c[168]
Ai=c[130]
A4=c[171]
A5=c[251]
A6=c[199]
Aj=c[190]
Ak=c[202]
A7=c[197]
Al=c[254]
Am=c[73]
A8=c[256]
An=c[79]
G=c[255]
Ao=c[134]
Ap=c[259]
Aq=c[121]
A9=c[216]
Ar=c[34]
V=c[120]
O=c[192]
As=c[203]
At=c[126]
W=c[258]
Au=c[154]
X=c[244]
Y=c[42]
F=c[98]
Av=c[33]
L=c[106]
I=c[138]
Z=c[77]
C=a.updateHolder(c[7],C)
D=c[250]
Aw=c[78]
Ax=c[210]
A_=c[253]
Ay=c[252]
C.aoT.prototype={}
C.aZM.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bhG(),f=h.x!=null&&h.zg(i).length===0
if(h.x!=null)w=f?B.b0:B.bz
else w=h.gUb()?B.bz:B.dY
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.n(22)
t=A.J(D.blw,B.r,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.f2o,B.f,i,i,new A.o(B.b0.j(0.12),i,i,A.n(999),i,i,B.n),i,i,i,i,B.h4,i,i,i),B.W,D.fxs,B.au,A.d(C.x0(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.ft8,i,i,i)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,D.b45,i,i,i,i,B.a_v,i,i,i)
q=A.n(16)
p=A.J(B.aN,B.r,1)
o=A.J(B.b0.j(0.28),B.r,1)
n=A.h9t(h.d)
o=A.p(B.A,C.aZL(A.fH8(h.e,n),30),B.f,i,i,new A.o(B.m3,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.foe,B.K,i,i)
m=A.n(14)
l=A.J(B.aN,B.r,1)
q=A.p(i,A.x(A.a([o,B.P,n,B.bF,D.fxK,B.ae,A.p(i,A.x(A.a([D.fNM,B.bF,A.d(A.B1(h.c),i,i,i,i,i,i,D.fiZ,i,i,i)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fd,i,i,1/0)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aP,i,p,q,i,i,B.n),i,i,i,i,O.akc,i,i,i)
p=A.n(16)
m=A.J(B.aN,B.r,1)
l=j.aRF("Original due",C.x0(h.r,!1))
n=j.aRF("Current due",C.x0(h.f,!1))
o=w.j(0.1)
k=A.n(12)
p=A.a([q,B.W,A.p(i,A.x(A.a([l,B.P,n,B.W,A.p(i,A.d(h.gaLN(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.BI,i,i,1/0),B.W,j.chJ(),B.P,j.c4W(g,f)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bg,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.n(14)
n=A.J(B.aN,B.r,1)
B.d.v(p,A.a([B.W,A.p(i,A.x(A.a([D.fyI,B.au,A.d(q,i,i,i,i,i,i,D.fnt,i,i,i)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bg,i,i,1/0)],s))}if(h.gaGy()){q=A.n(14)
o=A.J(B.cq,B.r,1.6)
B.d.v(p,A.a([B.W,A.p(i,A.x(A.a([D.fP6,B.P,A.bx(A.n(12),A.ed(new A.a5(1/0,88,A.b4(i,i,i,new A.Wk(h.ax,B.N,D.f6C,!0,3.5,i),B.aw),i),B.c,!0),B.ap)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.Ga,i,i,i)],s))}p.push(B.aA)
p.push(D.fH_)
return A.p(i,A.x(A.a([r,new A.D(B.a_j,A.x(p,B.ak,i,B.e,B.i,0,B.p),i)],s),B.ak,i,B.e,B.O,0,B.p),B.ap,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aRF(d,e){var w=null
return A.B(A.a([A.E(A.d(d,w,w,w,w,w,w,D.aa7,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fk2,w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)},
chJ(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.aa_(B.dY,u,"Not paid yet")
w=t.zg(null).length
v=w===0?B.b0:B.bz
return this.aa_(v,u,C.x0(t.x,!0))},
c4W(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.aa_(B.b0,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.aa_(B.b0,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.aa7,u,u,u)
v=A.T(d).k("N<1,h3>")
v=A.C(new A.N(d,new C.c6r(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bX(B.bG,v,B.bq,u,6,6)],x.p),B.E,u,B.e,B.i,0,B.p)},
aa_(d,e,f){var w=null
return A.B(A.a([A.E(A.d(e,w,w,w,w,w,w,D.aa7,w,w,w),1),new A.ds(1,B.cp,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dV,w,w),w)],x.p),B.E,w,B.e,B.i,0,w,w)}}
C.bbZ.prototype={
a3(d,e){new A.Wk(this.b,B.N,e,!0,3.5,null).a3(d,e)},
av(d){return d.b!==this.b}}
C.ap4.prototype={
R(){return new C.aDM(A.a([],x.bp))},
ge1(){return this.c}}
C.aDM.prototype={
Z(){this.a2()
this.J0()},
J0(){var w=0,v=A.j(x.H),u,t=this,s
var $async$J0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a2p(t.a.c),$async$J0)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dMs(t,s))
case 1:return A.h(u,v)}})
return A.i($async$J0,v)},
aTC(d,e){var w,v=null,u=this.a.d.a,t=u?B.N:B.aP,s=A.l(v,v,u?B.bt:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.n(10)
u=(this.a.d.a?B.bt:B.bm).j(0.22)
w=A.n(10)
return A.bt(v,new A.b5(4,r,new A.ay(u,1,B.r,-1)),v,B.bg,v,v,v,v,!0,new A.b5(4,w,new A.ay((this.a.d.a?B.bt:B.bm).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b5(4,A.n(10),D.b1J),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aTB(d){return this.aTC(d,null)},
PN(d){return this.cll(d)},
cll(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$PN=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.Hu:B.eK
w=7
return A.b(new A.hW().Ci(72,900,900,n),$async$PN)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fl(),$async$PN)
case 8:p=f
n=B.cJ.gct().aN(p)
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
return A.i($async$PN,v)},
b1v(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.N:B.aP,o=A.n(10),n=A.J((q?B.bt:B.bm).j(0.18),B.r,1)
if(d)q=B.cR
else q=s.a.d.a?B.bt:B.bm
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aP:B.av,r,r,r,r,r,r,r,r,12.5,r,r,B.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cR
else u=s.a.d.a?B.bt:B.bm
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.i,0,B.p),1)
v=A.fv(r,r,r,r,r,r,r,r,r,r,r,B.cR,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cc)
q=A.a([q,B.ac,u,A.bN(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aG(r,r,r,r,A.X(B.cz,s.a.d.a?B.bt:B.bm,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cc))
return A.p(r,A.B(q,B.m,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jy,D.byc,r,r,r)},
Di(d){return this.bBB(d)},
bBA(){return this.Di(null)},
bBB(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Di=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.ax()
r=new A.as(new A.ba(a4,B.b3,B.aO),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.jj(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.N(p)):B.k.ac(p,2)}o=new A.as(new A.ba(a4,B.b3,B.aO),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.as(new A.ba(a4,B.b3,B.aO),s)
if(a3){a4=new A.V(Date.now(),0,!1).bS(6048e8)
m=A.c5(a4.gck(),a4.gcg(),a4.gcw(),0,0,0,0,0)}else{a4=a5.f
m=A.c5(a4.gck(),a4.gcg(),a4.gcw(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bq(a4,!0,x.cT)
i=a3?null:A.h9t(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.wI?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.i1(B.w.j(0.55),!0,"Dismiss",a4,new C.dMb(),new C.dMc(a2,t,a5,r,new C.dMd(a2,t),o,n,j),B.eN,!0,x.y),$async$Di)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d4(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.T$=s
r.P$=0
o.T$=s
o.P$=0
n.T$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.K(x.q).f.U(D.fd7)
w=1
break}a0=a2.d
if(a0==null){t.c.K(x.q).f.U(D.fbN)
w=1
break}a1=A.fH8(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.wI?"male":"female"
w=7
return A.b(A.aic(a3,A.hhE(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$Di)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.wI?"male":"female"
a5.e=a1
a3=a5.ax
B.d.aa(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c5(a3.gck(),a3.gcg(),a3.gcw(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c5(a4.gck(),a4.gcg(),a4.gcw(),0,0,0,0,0)))a5.cOP(a2.a)
w=8
return A.b(A.aic(t.a.c,a5),$async$Di)
case 8:case 5:w=9
return A.b(t.J0(),$async$Di)
case 9:case 1:return A.h(u,v)}})
return A.i($async$Di,v)},
aUf(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cR.j(0.14)
else w=this.a.d.a?B.N:B.aP
v=A.n(12)
u=A.n(12)
t=A.n(12)
if(g)s=B.cR
else s=(this.a.d.a?B.bt:B.bm).j(0.2)
s=A.J(s,B.r,g?1.5:1)
r=C.aZL(d,18)
if(g)q=B.cR
else q=this.a.d.a?B.aP:B.av
return A.aH(!1,B.a2,!0,v,A.aO(!1,u,!0,A.p(p,A.B(A.a([r,B.bn,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b9,B.i,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
Sw(d){return this.cD6(d)},
cD6(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Sw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.i1(B.w.j(0.55),!0,"Dismiss",s,new C.dMv(),new C.dMw(t,d),B.ht,!0,x.y),$async$Sw)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.aic(t.a.c,d),$async$Sw)
case 7:w=8
return A.b(t.J0(),$async$Sw)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Sw,v)},
PM(d,e){return this.bMr(0,e)},
bMr(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$PM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lh(s,"Cancel","Delete",e.b+" \xb7 "+A.B1(e.c)+" will be removed from this device.","Delete this debt?"),$async$PM)
case 3:if(!g){w=1
break}w=4
return A.b(C.fAX(t.a.c,e.a),$async$PM)
case 4:w=5
return A.b(t.J0(),$async$PM)
case 5:case 1:return A.h(u,v)}})
return A.i($async$PM,v)},
afH(d){return this.cf9(d)},
cf9(d){var w=0,v=A.j(x.H),u=this,t
var $async$afH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bU(B.L,null,new C.dMp(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$afH)
case 2:return A.h(null,v)}})
return A.i($async$afH,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.emh
w=J.dI(m.d,new C.dMx())
v=A.C(w,w.$ti.k("M.E"))
w=J.dI(m.d,new C.dMy())
u=A.C(w,w.$ti.k("M.E"))
t=B.d.cI(v,0,new C.dMz())
w=A.n(18)
s=m.a.d.a
r=s?D.cx9:D.aAO
q=A.J(s?B.cR.j(0.35):B.cR.j(0.18),B.r,1)
s=A.p(l,D.bZ5,B.f,l,l,new A.o(B.cR.j(m.a.d.a?0.28:0.14),l,l,A.n(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.as,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.av,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aH(!1,B.a2,!0,A.n(12),A.aO(!1,A.n(12),!0,D.elE,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dMA(m),l,l,l,l,l,l,l),B.f,B.cR,0,l,l,l,l,l,B.ai)],p),B.m,l,B.e,B.i,0,l,l)
o=A.E(m.czh("Open",""+v.length),1)
n=v.length===0?"$0.00":A.B1(t)
r=A.a([A.p(l,A.x(A.a([s,B.ae,A.B(A.a([o,B.ac,A.E(m.b7E(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.i,0,l,l)],p),B.E,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a9(B.ay,B.aD,B.x,r,l,l),B.n),l,l,l,l,B.ak9,l,l,l),B.aA],p)
if(J.ct(m.d)){w=m.a.d.a
s=w?B.e3:B.c
q=A.n(18)
o=A.J((w?B.bt:B.bm).j(0.12),B.r,1)
n=A.p(l,D.bTU,B.f,l,l,new A.o(B.cR.j(0.12),l,l,A.n(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.av,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.p(l,A.x(A.a([n,B.ae,w,B.au,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bt:B.bm,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.m,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bAL,l,l,1/0))}else{w=m.gckC()
s=A.C(new A.N(v,w,A.T(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bCr,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bt:B.bm,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.N(u,w,A.T(u).k("N<1,v>")))
B.d.v(s,q)}B.d.v(r,s)}return A.x(r,B.ak,l,B.e,B.i,0,B.p)},
b7E(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.n(14),r=A.J((v.a.d.a?B.bt:B.bm).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bt:B.bm,u,u,u,u,u,u,u,u,11,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cR
else w=v.a.d.a?B.aP:B.av
return A.p(u,A.x(A.a([q,B.bF,A.d(f,u,1,B.a1,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.i,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.eB,u,u,u)},
czh(d,e){return this.b7E(!1,d,e)},
ckD(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zg(j).length,h=d.bgU()
if(d.x!=null){w=d.zg(j).length
v=w===0?B.cR:B.bz}else if(d.gUb())v=B.bz
else{if(h)w=B.cR
else w=k.a.d.a?B.bt:B.bm
v=w}if(d.x!=null){w=d.zg(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.x0(u,!1)}else{u.toString
t="Paid "+C.x0(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.x0(w,!1)+" \xb7 "+i+" missed":"Due "+C.x0(w,!1)}w=k.a.d.a?B.e3:B.c
u=A.n(18)
if(d.gUb()&&d.x==null)s=B.bz.j(0.35)
else s=(k.a.d.a?B.bt:B.bm).j(0.12)
s=A.J(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cH,12)],x.V)
q=A.n(18)
p=k.a.d.a?B.bo:B.m3
o=A.J(d.gUb()&&d.x==null?B.bz.j(0.45):B.cR.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.h9t(d.d)
o=A.p(B.A,A.db(C.aZL(A.fH8(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.av
m=x.p
n=A.a([new A.ds(1,B.cp,A.d(p,j,1,B.a1,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaGy())B.d.v(n,A.a([B.en,A.X(B.Ol,B.cR.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.B(n,B.m,j,B.e,B.i,0,j,j),B.cM,A.d(t,j,1,B.a1,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.U,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.i,0,B.p),1)
n=A.B1(d.c)
l=k.a.d.a?B.aP:B.av
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aH(!1,B.a2,!0,j,A.aO(!1,q,!0,new A.D(A5.ajX,A.B(A.a([o,B.bc,p,B.ac,A.x(A.a([n,B.bF,A.X(B.eE,(k.a.d.a?B.bt:B.bm).j(0.5),j,j,j,18)],m),B.dI,j,B.e,B.i,0,B.p)],m),B.m,j,B.e,B.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dMr(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.ai),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d2,j,j,j,j)}}
C.uB.prototype={}
C.al6.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bj
u=v?B.E:B.m
t=a1.as
s=A.n(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.J(q,B.r,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cx,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.J(r.j(0.6),B.r,1)
n.push(A.aB(a0,A.p(a0,A.X(B.cz,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a3))
m=v?B.a5:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iD,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.ax2,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.Gr,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.eO(m,A.B(l,B.m,a0,B.e,B.O,0,a0,a0),B.f,B.e2)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bxp,A.d(v,a0,1,B.a1,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cD:B.bp,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fC,A.x(a2,u,a0,B.e,B.O,0,B.p),a0),1))
n.push(D.f7q)
a2=A.a([A.B(n,B.m,a0,B.e,B.i,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.vX,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a9(B.a5,B.a8,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lF,A.x(a2,B.m,a0,B.e,B.O,0,B.p),a0)
if(a1.z){a2=A.n(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.J(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hj,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a9(B.ay,B.aD,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.byF,a0,a0,a0,a0)}}
C.aVx.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bj?B.bj:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a1,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bp:B.cD,q,B.U,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.B(l,B.m,q,B.e,B.i,0,q,q),B.cM,n],m)
if(p.z)o.push(new A.D(B.u6,n,q))
return new A.D(B.d2,A.x(o,B.m,q,B.e,B.O,0,B.p),q)}}
C.Ta.prototype={
R(){return new C.bfB()}}
C.bfB.prototype={
gc_S(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aJ(d,n,x.w).w,l=x.p,k=A.a([D.emc,D.emi],l)
for(w=0;w<8;++w){v=D.a3H[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.Hf:B.Co
q=t===s
r=A.X(r,q?B.eG:B.bZ,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bn,new A.y(v.b,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ac,new A.bz(1,B.ba,new A.y(v.c,n,B.Ai,n,n,n,n,B.a1,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.ay(B.eG,2,B.r,-1)
s=new A.o(n,n,new A.bI(p,p,p,p),new A.bj(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aB(n,new A.D(B.eI,A.x(A.a([new A.D(B.mJ,new A.cd(B.aM,B.e,B.i,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.BE(!0,new C.al6(v,q.d,q.e,new C.dch(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.i,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dci(o,v),n,n,n,n,n,n,!1,B.a3))}k.push(new A.D(D.bz_,A.bH(D.fUE,n,new C.dcj(o,d),A.bo(B.b6,n,n,n,n,B.oE,n,n,new A.b8(A.n(16),B.a0),n,n,n)),n))
return A.bm(!0,new A.cU(new A.aZ(0,1/0,0,m.a.b*0.9),A.cn(k,n,D.bDj,n,n,B.ah,!0),n),!0,!1,B.af,!0,!0)}}
C.no.prototype={
ah(){var w=this
return A.H(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a7().ae()],x.N,x.z)},
bdy(d,e,f){return new C.no(this.a,e,d,f)}}
C.HY.prototype={
wy(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.HY(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aEJ(d){var w=null
return this.wy(w,w,w,w,w,d,w,w,w,w,w,w)},
cKw(d){var w=null
return this.wy(w,w,w,w,d,w,w,w,w,w,w,w)},
bdw(d,e,f){var w=null
return this.wy(d,w,w,w,w,w,w,w,e,w,f,w)},
cLa(d){var w=null
return this.wy(w,w,w,w,w,w,d,w,w,w,w,w)},
cLj(d){var w=null
return this.wy(w,w,w,w,w,w,w,w,w,d,w,w)},
cKu(d){var w=null
return this.wy(w,w,w,d,w,w,w,w,w,w,w,w)},
cLl(d){var w=null
return this.wy(w,w,w,w,w,w,w,w,w,w,w,d)},
cKr(d){var w=null
return this.wy(w,w,d,w,w,w,w,w,w,w,w,w)},
cKm(d){var w=null
return this.wy(w,d,w,w,w,w,w,w,w,w,w,w)},
FU(d){var w=null
return this.wy(w,w,w,w,w,w,w,d,w,w,w,w)},
cLt(d,e,f,g,h,i,j,k,l,m,n){return this.wy(d,e,f,g,null,h,i,j,k,l,m,n)},
ah(){var w=this
return A.H(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cI3(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bPV(d),k=A.aK(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aK(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Dd.gev(D.Dd))
s=i==null?o:B.k.E(i,18,36)
r=l.$2("position",D.a5m)
q=l.$2("frame",D.a4I)
l=l.$2("texture",D.a4E)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cLt(p,u,t,q,r,A.r4(d.h(0,"ribbon"))?A.Gs(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.ZN.prototype={
R(){return new C.aAM(A.a([],x.I),D.NU)},
ge1(){return this.c}}
C.aAM.prototype={
Z(){var w,v=this
v.a2()
v.f=A.zV(0,1)
w=$.ax()
v.z=new A.as(B.at,w)
v.Q=new A.as(B.at,w)
v.la()
w=v.a
C.bD5(w.c,w.d).bM(new C.dcY(v),x.fL)},
q(){var w,v=this,u=v.f
u===$&&A.c()
u.q()
u=v.z
u===$&&A.c()
w=$.ax()
u.T$=w
u.P$=0
u=v.Q
u===$&&A.c()
u.T$=w
u.P$=0
v.a1()},
la(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$la=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Lb(s.c,s.d),$async$la)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dcM(t,r))
t.awu()
case 1:return A.h(u,v)}})
return A.i($async$la,v)},
gat4(){var w,v=this
if(!J.ct(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.r(v.d,v.r)},
awu(){var w,v,u=this.gat4(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saX(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saX(0,w==null?"":w)},
cdA(d){this.m(new C.dcJ(this,d))
this.awu()},
NJ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$NJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.no(B.o.u(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aRC(r.c,r.d,s),$async$NJ)
case 3:w=4
return A.b(t.la(),$async$NJ)
case 4:if(t.c==null||J.ct(t.d)){w=1
break}q=J.qv(t.d,new C.dck(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.dcl(t,p))
t.awu()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.Bg(p+1,B.ct,B.kG),$async$NJ)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$NJ,v)},
AX(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gat4()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aRC(o.c,o.d,new C.no(s,r,q,new A.V(p,0,!1))),$async$AX)
case 3:w=4
return A.b(t.la(),$async$AX)
case 4:if(t.c==null){w=1
break}t.m(new C.dcN(t))
case 1:return A.h(u,v)}})
return A.i($async$AX,v)},
On(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$On=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gat4()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.dct(r),s,null,!0,!0,x.y),$async$On)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bCS(s.c,s.d,r.a),$async$On)
case 4:t.m(new C.dcu(t))
w=5
return A.b(t.la(),$async$On)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.Ue(B.o.E(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$On,v)},
yD(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AX(),$async$yD)
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
return A.b(C.Ro(s,r.r,o,p,q),$async$yD)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a4(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hyq(s,r.x,r.r),$async$yD)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Lb(s.c,s.d),$async$yD)
case 10:l=e
for(s=n.d,r=J.cD(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.M(l,new C.no(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Ba(r.c,r.d,l),$async$yD)
case 11:w=12
return A.b(t.la(),$async$yD)
case 12:r=t.c
if(r==null){w=1
break}r.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$yD,v)},
a14(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a14=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AX(),$async$a14)
case 5:case 4:if(t.c==null){w=1
break}s=t.gyB(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dK(D.zm,new C.dcK(t),new C.dcL())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.mH("Our Family",o,"",""))
for(o=J.aW(t.d);o.C();){n=o.gS(o)
p.push(new H.mH(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hb6(o,new H.rz(s,r,"",p,new H.uR(q.d,null,null,null,null,"","","")),null),$async$a14)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a14,v)},
O6(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$O6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AX(),$async$O6)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bU(D.afa,null,new C.dcp(t),s,!0,!0,!0,L.a8o,!1,!1,x.N),$async$O6)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cKw(r)
t.m(new C.dcq(t,q))
s=t.a
w=7
return A.b(C.RZ(s.c,s.d,q),$async$O6)
case 7:case 1:return A.h(u,v)}})
return A.i($async$O6,v)},
Xx(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(D.afa,null,new C.dcv(t),r,!0,!0,!0,L.a8o,!1,!1,x.e),$async$Xx)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dcw(t,s))
r=t.a
w=4
return A.b(C.RZ(r.c,r.d,s),$async$Xx)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.Bg(0,B.dU,B.nn)
case 1:return A.h(u,v)}})
return A.i($async$Xx,v)},
bS_(d){var w=d.bU(),v=B.a.aW(B.o.u(w.gcg()),2,"0"),u=B.a.aW(B.o.u(w.gcw()),2,"0")
return""+w.gck()+"-"+v+"-"+u},
gyB(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c_5()
if(r.e)w=D.adW
else if(J.ct(r.d)){w=r.y
v=r.gyB(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fil,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.D(X.alc,new C.Z4(w,v,0,q),q),q),B.bx,t,B.am,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kC.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aB(q,A.p(q,D.f2b,B.f,q,q,new A.o(q,q,q,A.n(18),A.a([new A.ac(0,B.G,B.dH.j(0.45),B.I,18)],x.V),E.wy,B.n),q,q,q,q,B.ND,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcH6(),q,q,q,q,q,q,!1,B.a3))
w.push(B.W)
w.push(A.hs(D.bQ3,D.fU5,r.gaNw(),q))
B.d.v(u,w)}w=A.au(A.cg(A.x(u,B.m,q,B.e,B.O,0,B.p),B.t,q,B.y,q,B.eu,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kC.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.U,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dS:B.AQ
u=A.x(A.a([new A.D(D.bA1,w,q),A.E(A.Jj(v,new C.dcW(r),J.ad(r.d)+1,q,r.gcdz(),u,B.aM),1),r.bEu()],x.p),B.m,q,B.e,B.i,0,B.p)
w=u}v=x.p
return A.c7(q,D.Yi,new A.an(B.a_,q,B.b2,B.t,A.a([D.aOd,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
c_5(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cL(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Kh(B.e5,"AI",h.gbCn(),!0))
if(h.a.f)f.push(new C.Kh(B.mb,"Cover",h.gbN0(),!1))
if(h.a.f)f.push(new C.Kh(B.wt,"Header",h.gbI0(),!1))
if(J.cL(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Kh(B.uv,"Print",h.gcmF(),!1))
if(h.a.f&&J.cL(h.d)&&h.r>=0){v=h.w
u=v?B.hx:B.iX
t=v?"Save":"Edit"
f.push(new C.Kh(u,t,v?h.gcsW():new C.dcG(h),!1))}if(h.a.f)f.push(new C.Kh(B.hQ,"Add page",h.gaNw(),!1))
v=C.hus(h.y.Q)
u=h.gyB(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.L)(f),++m){l=f[m]
if(l.d)k=D.dBx
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.kb.j(0.5),1,B.r,-1)
j=A.p(g,A.X(l.a,D.kC,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bI(i,i,i,i),new A.bj(k,k,k,k),g,new A.a9(B.a5,B.a8,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kC.j(0.85)
p.push(new A.bz(1,B.ba,A.aB(B.c5,A.x(A.a([k,B.bF,new A.y(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.O,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a3),g))}return new C.al6(v,u,t+" \xb7 "+s+" "+r,new C.dcH(h),A.B(p,B.m,g,B.e,B.i,0,g,g),g)},
A_(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$A_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AX(),$async$A_)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aW(t.d);r.C();){q=r.gS(r)
s.push(q.b+" "+q.c)}p=H.a2E(B.d.aG(s," "))
s=t.c
s.toString
w=6
return A.b(A.ck(null,null,!0,null,new C.dcm(t,p),s,null,!0,!0,x.N),$async$A_)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.yD(),$async$A_)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.DV(),$async$A_)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.Fv("Swahili (Kiswahili)",!0),$async$A_)
case 18:w=16
break
case 17:w=19
return A.b(t.cDI(o==="sw"?"Swahili (Kiswahili)":"English"),$async$A_)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$A_,v)},
Zr(d,e,f,g,h){var w=null,v=A.n(16),u=B.c.j(0.07),t=A.n(16),s=A.J(E.kb.j(0.3),B.r,1),r=x.p
return new A.D(B.cu,A.aO(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.wy,B.a6),w,42,w,w,w,w,w,42),B.bc,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A2.K7,w,w,w),A.d(g,w,w,w,w,w,w,B.Aj,w,w,w)],r),B.E,w,B.e,B.i,0,B.p),1)],r),B.m,w,B.e,B.i,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bg,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dcI(d,h),w,w,w,w,w,w,w),w)},
DV(){return this.bRu()},
bRu(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$DV=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.dcz(r),a7,null,!0,!0,x.ei),$async$DV)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eB("Working on it\u2026",$.ax())
a6.a=!0
a7=r.c
a7.toString
A.ck(null,null,!1,null,new C.dcA(o),a7,null,!0,!0,x.H).fp(new C.dcB(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.L)(d),++a1){k=d[a1]
J.ca(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ah()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.zm[a1]
J.ca(j,i.a)}w=8
return A.b(C.ahm(a0,a7,new C.dcC(o),d,l,e,j),$async$DV)
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
if(l!=null&&a6.a)A.a4(l,!0).eM()
l=o
l.si6($.ax())
J.aS3(l,0)
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
a7=j.bdy(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.r(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Ba(j.c,j.d,l),$async$DV)
case 11:w=12
return A.b(r.la(),$async$DV)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.zm[a1].a)
a5=l.cI3(j,12,a7)
l=r.a
w=15
return A.b(C.RZ(l.c,l.d,a5),$async$DV)
case 15:if(r.c!=null)r.m(new C.dcD(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.Bg(0,B.dU,B.nn)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.K(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b3(a3?A.cx4("Undo",new C.dcE(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.ep,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DV,v)},
Fv(d,e){return this.cDJ(d,e)},
cDI(d){return this.Fv(d,!1)},
cDJ(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fv=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eB("Starting\u2026",$.ax())
f.a=!0
k=r.c
k.toString
A.ck(null,null,!1,null,new C.dcP(a0),k,null,!0,!0,x.H).fp(new C.dcQ(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.L)(k),++i){n=k[i]
J.ca(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a2R(m,new C.dcR(a0)),$async$Fv)
case 10:w=8
break
case 9:w=11
return A.b(C.bEz(new C.dcS(a0),m,a2),$async$Fv)
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
if(o!=null&&f.a)A.a4(o,!0).eM()
o=a0
o.si6($.ax())
J.aS3(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.K(x.q).f
k=q
o.U(A.b3(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.r(d,g)
j=J.r(p,g)
o.push(k.bdy(J.r(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Ba(k.c,k.d,o),$async$Fv)
case 12:w=13
return A.b(r.la(),$async$Fv)
case 13:o=r.c
if(o==null){w=1
break}o=o.K(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(A.cx4("Undo",new C.dcT(r,d),null),null,null,null,null,B.t,null,k,null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Fv,v)},
bEu(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dcn(v):u
r=A.aG(u,u,u,u,A.X(D.bLM,s?D.kC:B.aY,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cL(v.d)&&!v.w&&v.r>=0)s=A.hs(A.X(B.wc,B.FO,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.FO,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbMB(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kC.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.au(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dco(v):u
return A.bm(!0,new A.D(D.bzQ,A.B(A.a([r,s,A.aG(u,u,u,u,A.X(B.eE,t<J.ad(v.d)?D.kC:B.aY,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.i,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.ZR.prototype={
R(){return new C.bg_(new A.as(B.at,$.ax()))}}
C.bg_.prototype={
ga2d(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.T$=$.ax()
w.P$=0
this.a1()},
gbQ7(){var w,v=this.ga2d()
A:{if("cover"===v){w=D.d3k
break A}if("book"===v){w=D.cZM
break A}w=D.du1
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.n(26),o=E.kb.j(0.5),n=x.p,m=A.B(A.a([D.dBy,B.as,D.bFr,A.aG(q,q,q,q,B.lf,q,q,q,new C.deI(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.i,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.iS(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.deJ(r),r.ga2d()==="page",q,q,q,q))
if(r.a.d)l.push(A.iS(q,q,q,D.fOC,q,new C.deK(r),r.ga2d()==="book",q,q,q,q))
l.push(A.iS(q,q,q,D.fBp,q,new C.deL(r),r.ga2d()==="cover",q,q,q,q))
l=A.bX(B.bG,l,B.bq,q,6,8)
k=B.c.j(0.07)
k=A.aM(q,B.Y,!1,q,!0,B.t,q,A.aN(),r.d,q,q,q,q,q,2,A.bt(q,new A.b5(4,A.n(16),B.a0),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.ku,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.aa,q,q,q,q,q,q,q,q,q,q,q,B.df,!0,B.a4,q,B.ao,q,q,q,q)
w=A.a([],n)
for(v=r.gbQ7(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mV(q,B.c.j(0.08),new A.y(s,q,B.K4,q,q,q,q,q,q,q,q,q),B.hb,new C.deM(r,s),q,q,q,q))}return A.eT(q,E.Bm,A.cg(A.x(A.a([m,B.W,D.fRW,B.am,l,B.ae,k,B.P,A.bX(B.bG,w,B.bq,q,6,6),B.aA,A.dl(D.bQ0,D.fSJ,new C.deN(r,d),A.bo(B.b6,q,q,q,q,B.oE,q,q,new A.b8(A.n(16),B.a0),q,q,q)),B.au,D.fMQ],n),B.E,q,B.e,B.O,0,B.p),B.t,q,B.y,q,B.fk,q,q,B.ah),q,q,q,D.akU,B.d8,q,new A.b8(p,new A.ay(o,1.4,B.r,-1)),q)}}
C.ZP.prototype={
R(){return new C.aAP(A.a([],x.gA))},
ge1(){return this.c}}
C.af2.prototype={}
C.aAP.prototype={
Z(){this.a2()
this.la()},
la(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$la=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Rr(p.c,p.d),$async$la)
case 3:o=e
n=A.a([],x.gA)
p=J.aW(o)
case 4:if(!p.C()){w=5
break}s=p.gS(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bD5(r.c,q),$async$la)
case 6:j=e
i=J
w=7
return A.b(C.Lb(t.a.c,q),$async$la)
case 7:m.push(new l.af2(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.ddc(t,n))
case 1:return A.h(u,v)}})
return A.i($async$la,v)},
b8V(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Qw(d,e){return this.cf7(0,e)},
cf7(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Qw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a4(s,!1).cc(A.e0(new C.ddb(u,e),!0,null,x.y)),$async$Qw)
case 2:t=g
w=3
return A.b(u.la(),$async$Qw)
case 3:if(t===!0&&u.c!=null)u.c.K(x.q).f.U(D.aRP)
return A.h(null,v)}})
return A.i($async$Qw,v)},
Fy(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Fy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.K(x.q).f.U(D.aRL)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.agG(s.c,s.d),$async$Fy)
case 5:q=e
w=6
return A.b(t.la(),$async$Fy)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Qw(0,B.d.fY(t.d,new C.ddg(q))),$async$Fy)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Ro(p,s.f,r,n,o),$async$Fy)
case 10:m=e
w=11
return A.b(t.la(),$async$Fy)
case 11:if(m&&t.c!=null)t.c.K(x.q).f.U(D.aRP)
case 1:return A.h(u,v)}})
return A.i($async$Fy,v)},
PZ(d,e){return this.cqD(0,e)},
cqD(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$PZ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.ddf(t,e),s,null,!0,!0,x.y),$async$PZ)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a32(s.c,s.d,e.a),$async$PZ)
case 4:w=5
return A.b(t.la(),$async$PZ)
case 5:case 1:return A.h(u,v)}})
return A.i($async$PZ,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)k.push(o.bEx(w[u]))
if(m){t=6-o.d.length
w=A.n(18)
v=B.c.j(0.05)
s=A.J(E.kb.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aB(n,new A.fG(0.7142857142857143,A.p(n,A.x(A.a([D.dBz,B.ae,D.elf,B.au,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kC.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b9,B.i,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcH2(),n,n,n,n,n,n,!1,B.a3))}w=A.n(22)
v=A.J(E.kb.j(0.85),B.r,1.6)
s=A.aB(n,A.p(n,D.bXT,B.f,n,n,new A.o(B.w.j(0.3),n,A.J(E.kb.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ddh(d),n,n,n,n,n,n,!1,B.a3)
r=A.n(14)
q=B.w.j(0.3)
p=A.J(E.kb.j(0.5),B.r,1)
w=A.p(n,A.B(A.a([s,B.bc,D.bFP,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.fhl,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h4,n,n,n)],l),B.m,n,B.e,B.i,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.c2O,B.n),n,n,n,Ay.Nn,D.bxS,n,n,n)
if(o.e)k=D.adW
else k=k.length===0?D.b9f:A.cu(new C.ddi(k))
return A.c7(n,D.Yi,new A.an(B.a_,n,B.b2,B.t,A.a([D.aOd,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bEx(d){var w,v,u=this,t=null,s=u.b8V(d),r=d.c,q=x.p,p=A.a([A.bS(0,A.eO(B.A,new A.a5(300,420,new C.Z4(d.b,s,r,t),t),B.f,B.dz),0,0,0)],q)
if(u.a.e)p.push(A.ap(t,A.aB(t,A.p(t,D.bXc,B.f,t,t,new A.o(B.w.j(0.55),t,A.J(B.aY,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dd9(u,d),t,t,t,t,t,t,!1,B.a3),t,t,t,6,6,t))
w=A.d(s,t,1,B.a1,t,t,t,D.fgW,t,t,t)
v=r===1?"page":"pages"
return A.aB(t,A.x(A.a([new A.fG(0.7142857142857143,new A.an(B.a_,t,B.ab,B.t,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kC.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.i,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dda(u,d),t,t,t,t,t,t,!1,B.a3)}}
C.Kh.prototype={}
C.Z4.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dK(D.zm,new C.cLG(m),new C.cLH()),j=m.c,i=D.Dd.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mi:B.b9
v=new C.cLI(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.ehY,28)],x.V)
u=x.p
t=A.a([A.bS(0,A.b4(l,l,l,new C.bdb(j.x,h,l),B.aw),0,0,0),A.ap(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.a5,B.a8,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cN(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bj(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.ald,8,0.85,2.2),v.$4(D.bCK,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.ald,8,0.85,2.4))
else if(r==="corners")t.push(A.bS(0,new A.D(D.bCG,A.b4(l,l,l,new C.bd2(h,l),B.aw),l),0,0,0))
r=A.X(D.azO[B.o.E(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a1,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.ax2,l,l),B.K,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aA,q,B.ae,p,B.ae,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cD,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aQ,A.d(r,l,2,B.a1,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bS(0,new A.D(D.bDa,A.x(o,B.m,l,w,B.i,0,B.p),l),0,0,0))
if(j.z)t.push(A.ap(l,A.b4(l,l,l,new C.aHO(l),D.f6v),l,l,l,46,0,l))
return A.p(l,A.bx(D.acy,new A.an(B.a_,l,B.ab,B.t,t,l),B.ap),B.f,l,l,new A.o(l,l,l,D.acy,i,new A.a9(B.ay,B.aD,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bdb.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.e5()
f.cY(11)
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
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.af()
l=f.af()
k=f.af()
$.S()
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.r=t.j(0.25+f.af()*0.5).gp(0)
r=j.G()
o.drawCircle(m*v,l*u,0.6+k*1.6,r)
r.delete()}break
case"rays":v=e.a*0.55
u=e.b
t=u*0.1
for(o=d.a,m=this.c,l=x.v,n=0;n<14;++n){i=0.47123889803846897+n*0.1691626813471427
k=$.S()
j=A.a([],l)
h=new A.aF(k.r,B.ag,null,null,j)
j.push(new A.aY(v,t))
k=i-0.04
j.push(new A.aq(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.aq(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bs())
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=m.j((n&1)===0?0.09:0.03).gp(0)
r=k.G()
k=h.gbv().a.snapshot()
o.drawPath((h.e=new A.ce(k)).a,r)
r.delete()}break
default:$.S()
w=A.I()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.af()
m=f.af()
l=f.af()
r=w.G()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.S()
g=A.I()
g.r=B.c.j(0.035).gp(0)
for(n=0;n<120;++n){o=f.af()
m=f.af()
l=f.af()
r=g.G()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
av(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bd2.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.S(),k=A.I(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.a9
k.c=2.4
k.d=B.bA
for(w=e.a,v=e.b,v=[D.eXL,new A.cy([w,0,-1,1]),new A.cy([0,v,1,-1]),new A.cy([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aF(l,B.ag,null,null,s)
s.push(new A.aY(r+p*34,q))
s.push(new A.aq(r,q))
s.push(new A.aq(r,q+o*34))
m=k.G()
s=n.gbv().a.snapshot()
w.drawPath((n.e=new A.ce(s)).a,m)
m.delete()
s=new A.ao(B.Q,B.M,B.S,B.T,B.R)
s.r=j.j(0.9).gp(0)
m=s.G()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
av(d){return!d.b.A(0,this.b)}}
C.uC.prototype={}
C.Zn.prototype={
R(){return new C.bd9()}}
C.bd9.prototype={
gof(){var w=this.d
return w===$?this.d=this.a.c:w},
gyB(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.as(new A.ba(w.b,B.b3,B.aO),$.ax())}return v},
gaBS(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.as(new A.ba(w.c,B.b3,B.aO),$.ax())}return v},
garD(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.as(new A.ba(w.y,B.b3,B.aO),$.ax())}return v},
q(){var w=this,v=w.gyB(0),u=v.T$=$.ax()
v.P$=0
v=w.gaBS()
v.T$=u
v.P$=0
v=w.garD()
v.T$=u
v.P$=0
w.a1()},
asg(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.iS(s,s,s,new A.y(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.d4f(this,f,u),e===u,s,s,s,s))}return A.bX(B.bG,r,B.bq,s,6,8)},
axX(d){var w=null,v=B.c.j(0.07)
return A.bt(w,new A.b5(4,A.n(14),B.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lR,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gof(),a0=f.gyB(0),a1=a0.a.a,a2=f.gaBS(),a3=a2.a.a,a4=f.garD(),a5=d.bdw(a4.a.a,a3,a1)
a1=x.w
a3=A.aJ(a6,e,a1).w
a1=A.aJ(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.au(new A.a5(190,260,A.eO(B.A,new A.a5(270,370,new C.Z4(a5,d,f.a.e,e),e),B.f,B.dz),e),e,e,e)
a0=A.aM(e,B.Y,!1,e,!0,B.t,e,A.aN(),a0,e,e,e,e,e,2,f.axX("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d4E(f),e,e,e,!1,e,e,!1,e,!0,e,B.aa,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a4,e,B.ao,e,e,e,e)
a2=A.aM(e,B.Y,!1,e,!0,B.t,e,A.aN(),a2,e,e,e,e,e,2,f.axX("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d4F(f),e,e,e,!1,e,e,!1,e,!0,e,B.aa,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a4,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.zm[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aY
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bI(o,o,o,o),e,e,new A.a9(B.ay,B.aD,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aB
v.push(A.aB(e,A.x(A.a([p,B.cM,new A.y(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.U,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.O,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d4G(f,t),e,e,e,e,e,e,!1,B.a3))}v=A.bX(B.bG,v,B.bq,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b6.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eG:B.L,2,B.r,-1)
q.push(A.aB(e,A.p(e,A.X(D.azO[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bI(o,o,o,o),new A.bj(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d4H(f,n),e,e,e,e,e,e,!1,B.a3))}q=A.bX(B.bG,q,B.bq,e,8,8)
a4=A.aM(e,B.Y,!1,e,!0,B.t,e,A.aN(),a4,e,e,e,e,e,2,f.axX("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d4I(f),e,e,e,!1,e,e,!1,e,!0,e,B.aa,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a4,e,B.ao,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,M.vk,e,e,e)
m=A.a([],w)
for(l=D.Dd.gdV(D.Dd),l=l.gag(l);l.C();){k=l.gS(l)
j=A.b1(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eG:B.aY
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bI(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aB
m.push(A.aB(e,A.x(A.a([j,B.bF,new A.y(i,e,new A.F(!0,h,e,e,e,e,10,B.U,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.O,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d4J(f,k),e,e,e,e,e,e,!1,B.a3))}m=A.bX(B.bG,m,B.bq,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,M.vk,e,e,e)
k=f.gof()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bm(!0,new A.cU(new A.aZ(0,1/0,0,a1.a.b*0.92),A.cn(A.a([D.fMi,B.ae,d,B.aQ,a0,B.W,a2,B.aA,D.fSv,B.P,v,B.aA,D.fMr,B.P,q,B.aA,a4,B.aA,p,B.P,m,B.aA,l,A.kQ(e,9,""+B.k.V(f.gof().f),36,18,new C.d4K(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,M.vk,e,e,e),B.am,f.asg(D.a5m,f.gof().r,new C.d4L(f),D.dxe),B.ae,A.d("BORDER",e,e,e,e,e,e,M.vk,e,e,e),B.am,f.asg(D.a4I,f.gof().w,new C.d4M(f),D.dxk),B.ae,A.d("COVER MATERIAL",e,e,e,e,e,e,M.vk,e,e,e),B.am,f.asg(D.a4E,f.gof().x,new C.d4O(f),D.dyN),B.am,A.iL(e,B.b6,e,B.af,e,new C.d4P(f),e,e,e,D.fGw,f.gof().z),B.bx,A.bH(D.fL0,e,new C.d4Q(f,a6),A.bo(B.b6,e,e,e,e,B.oE,e,e,new A.b8(A.n(16),B.a0),e,e,e))],w),e,A_.akK,e,e,B.ah,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aHO.prototype={
a3(d,e){var w,v,u,t=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
t.D(new A.aY(0,0))
w=e.a
t.D(new A.aq(w,0))
v=e.b
t.D(new A.aq(w,v))
t.D(new A.aq(w/2,v-12))
t.D(new A.aq(0,v))
t.D(new A.bs())
u=A.I()
u.sam(D.c3u.aA(0,new A.a3(0,0,0+w,0+v)))
d.aH(t,u)},
av(d){return!1}}
C.biy.prototype={
a3(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.S()
w=A.I()
w.sam(D.c2u.aA(0,new A.a3(0,0,a3,a4)))
a5.aO(new A.a3(0,0,a3,a4),w)
v=B.k.dd(a2/112)
u=new A.e5()
u.cY(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.af()*20
l=56+u.af()*40
k=D.d3j[u.ap(9)]
j=u.ap(14)
J.bl(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a3(n,j,n+m,j+l)
h=A.br(i,B.hn)
g=new A.ao(B.Q,B.M,B.S,B.T,B.R)
f=A.ar(k,B.c,0.12)
f.toString
e=A.ar(k,B.w,0.45)
e.toString
g.sam(new A.a9(B.a5,B.a8,B.x,A.a([f,k,e],t),a0,a0).aA(0,i))
d=g.G()
w.drawRRect(A.e6(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.ao(B.Q,B.M,B.S,B.T,B.R)
e.r=E.kb.j(0.55).gp(0)
d=e.G()
w.drawRect(A.bG(new A.a3(h,j,g,j+2)),d)
d.delete()
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.r=E.kb.j(0.4).gp(0)
d=j.G()
w.drawRect(A.bG(new A.a3(h,q,g,p)),d)
d.delete()
w.restore()
j=u.ap(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.sam(D.c1Q.aA(0,new A.a3(0,r,a3,q)))
d=p.G()
w.drawRect(A.bG(new A.a3(0,r,a3,q)),d)
d.delete()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.r=B.w.j(0.5).gp(0)
p.z=B.kP
d=p.G()
w.drawRect(A.bG(new A.a3(0,q,a3,q+14)),d)
d.delete()}w=A.I()
w.r=D.bcY.j(0.72).gp(0)
a5.aO(new A.a3(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.I()
a4.sam(new A.c2(B.A,0.5,B.x,a0,0,A.a([D.bl1.j(0.22),B.L],t),a0,a0).aA(0,A.bY(new A.t(w,a2),a1)))
a5.ad(new A.t(w,a2),a1,a4)},
av(d){return!1}}
C.bbm.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cN(14,w*2,v*2.2,v*2,o,o,new A.l0(new A.o(A.ar(D.kC,D.bpX,w/4),o,new A.bI(B.a0,new A.ay(B.w.j(0.12),1,B.r,-1),B.a0,B.a0),B.Lj,o,o,B.n),B.bh,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aJP,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.kb.j(0.6),o,o,new A.bj(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.m,o,B.qB,B.i,0,B.p),B.f,o,o,new A.o(o,o,o,D.b1s,u,D.c3s,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dq,18)],v)
t=A.ap(o,A.b4(o,o,o,new C.aHO(o),D.f6q),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aVx(p.y,r,K.iQ,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),p.r,o,o,o,o,o,2,A.bt(o,B.eF,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,K.iQ.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,D.fvx,!0,B.a4,o,B.ao,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,K.iQ.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.W,A.E(A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),p.w,o,o,o,o,o,2,A.bt(o,B.eF,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,K.iQ.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.aj,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,D.fmd,!0,B.a4,B.Ac,B.ao,o,o,o,o),1)],m),B.ak,o,B.e,B.i,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fvp,o,o,o),B.au,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,K.iQ.j(0.5),o,o,o,o,o,o,o,o,11,B.cD,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.B(A.a([A.E(A.p(o,o,B.f,D.FA.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fC,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.FA.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.FA.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.i,0,o,o),B.aA],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,K.iQ.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Yh(A.cS(A.a([A.cS(o,o,o,o,o,o,o,o,o,D.fpp,B.a.ar(k,0,1)),A.cS(o,o,o,o,o,o,o,o,o,o,B.a.b5(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,K.iQ.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cg(A.x(n,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.i3,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,K.iQ.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.B(A.a([u,A.E(A.p(o,A.bx(B.Lj,new A.an(B.a_,o,B.ab,B.t,A.a([t,new A.D(D.bCc,A.x(s,B.ak,o,B.e,B.i,0,B.p),o),A.ap(0,A.c3(o,new A.o(o,o,o,o,o,new A.a9(B.a5,B.a8,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bh),o,o,0,o,0,22)],m),o),B.ap),B.f,o,o,new A.o(o,o,o,B.Lj,v,D.c4_,B.n),o,o,o,o,o,o,o,o),1)],m),B.ak,o,B.e,B.i,0,o,o))
return new A.an(B.a_,o,B.ab,B.t,l,o)}}
C.al7.prototype={
R(){return new C.al8(new A.eB(0,$.ax()),new C.bRJ(),new C.alq(),D.hq2,null,null)},
gd_(){return this.d}}
C.a14.prototype={
a6(){return"_Step."+this.b}}
C.al8.prototype={
gC4(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bD1(w.c,6,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gh7(d){var w,v=this,u=v.e
if(u===$){w=C.Mu(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gTx(){var w=this.gh7(0)
return w.gyV()==null?"Babu":B.a.i(w.gyV().b)},
Z(){var w,v=this
v.a2()
w=v.gh7(0).gyV()
w=w==null?null:w.c
v.r.b=w===D.od
w=v.pQ(new C.bQ4(v))
w.h5(0)
v.x!==$&&A.aQ()
v.x=w
v.a2a("Come closer, my children. I am "+v.gTx()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
q(){var w=this,v=w.x
v===$&&A.c()
v.q()
v=w.y
if(v!=null)v.a4(0)
v=w.z
if(v!=null)v.a4(0)
w.w.q()
v=w.f
v.T$=$.ax()
v.P$=0
w.bu3()},
a2a(d){var w=this,v=w.y
if(v!=null)v.a4(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.dh(D.ajm,new C.bPZ(w))},
bqu(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a4(0)
v.m(new C.bQ7(v))},
adq(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bqn(){return this.b8s()},
b8s(){var w=this,v=w.gC4()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bQ_(w))
w.a2a(u)
v=w.z
if(v!=null)v.a4(0)
w.z=A.cG(B.m5,new C.bQ0(w))},
cIa(){var w=this
w.m(new C.bQ3(w))
w.a2a(w.gC4()[w.as].a)},
KJ(d){var w,v,u,t,s,r,q,p=this
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
t.r=s.a+1.5}q=new A.e5()
q.cY(v*7+d)
p.m(new C.bQ2(p,d,u,q))
p.a2a(u?D.diE[q.ap(4)]+" "+w[p.as].d:D.dfl[q.ap(3)]+" "+w[p.as].d)},
kF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gC4()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bFi(t.at,t.ay,p)
t.m(new C.bQ5(t,s))
t.a2a(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.Bu(t.a.d,s),$async$kF)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.Bv(r.d,r.c.a,"fire",t.at*10),$async$kF)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bQ6())
w=1
break
case 4:++t.as
t.b8s()
case 1:return A.h(u,v)}})
return A.i($async$kF,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c7(v,D.Xq,new A.an(B.a_,v,B.ab,B.t,A.a([A.bS(0,new A.er(A.b4(v,v,v,new C.aVC(u,w.r,w.w,u),B.aw),v),0,0,0),A.bm(!0,A.x(A.a([w.c9x(0),B.b1,w.bPj()],t),B.m,v,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],t),v),v,!1,!1,v,v)},
c9x(d){var w,v,u,t=this,s=null,r=A.aG(s,s,s,s,B.P9,s,s,s,new C.bQ1(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gC4().length;++w){v=t.as
if(w<v||t.Q===D.aZ5)v=B.cI
else v=w===v?B.c:B.aY
u=new A.aP(4,4)
p.push(A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bj(u,u,u,u),s,s,B.n),s,7,s,D.bxC,s,s,s,22))}p=A.E(A.x(A.a([D.fDh,A.B(p,B.m,s,B.e,B.i,0,s,s)],q),B.E,s,B.e,B.i,0,B.p),1)
v=A.n(14)
u=A.J(B.fr,B.r,1)
return new A.D(D.bDn,A.B(A.a([r,p,A.p(s,A.d("\ud83d\udd25 "+B.k.V(t.cy*100)+"%",s,s,s,s,s,s,B.it,s,s,s),B.f,s,s,new A.o(B.aS,s,u,v,s,s,B.n),s,s,s,s,B.h4,s,s,s)],q),B.m,s,B.e,B.i,0,s,s),s)},
bPj(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.gh7(0).gyV()
if(h==null)w=1
else w=h.c===D.od?0:1
v=j.dx
u=j.db
t=D.q2.j(0.96)
s=A.n(22)
r=A.J(B.cI,B.r,3)
q=A.b4(i,i,i,new C.bo6(w,i),B.aw)
p=A.d(j.Q===D.abI?j.gTx()+" asks":"Elder "+j.gTx(),i,i,i,i,i,i,D.aT_,i,i,i)
o=j.db
o=B.a.ar(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aB(B.c5,A.B(A.a([new A.a5(62,62,q,i),B.as,A.E(A.x(A.a([p,B.bF,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aTe,i,i,i)],n),B.E,i,B.e,B.i,0,B.p),1)],n),B.E,i,B.e,B.i,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbqt(),i,i,i,i,i,i,!1,B.a3)
switch(j.Q.a){case 0:v=A.au(j.a9z("Sit down by the fire",j.gbqm()),i,i,i)
break
case 1:v=A.au(j.a9z("Ask me, Elder",j.gcI9()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gC4()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.ay(D.lv,2.5,B.r,-1)
v.push(A.aB(i,A.p(i,new A.y(u[m],i,D.aTa,i,B.K,i,i,i,i,i,i,i),B.f,i,D.ad9,new A.o(D.ail,i,new A.bI(l,l,l,l),new A.bj(q,q,q,q),i,i,B.n),i,i,i,i,V.w_,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bPW(j,m),i,i,i,i,i,i,!1,B.a3))}v=A.bX(B.bG,v,B.bq,i,8,8)
break
case 3:v=j.fr
u=v?B.kj:Al.ao6
u=A.X(u,v?B.ei:D.lv,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.l(i,i,v?B.ei:D.lv,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gC4().length?"Finish":"Next story"
v=A.B(A.a([u,B.ac,q,j.a9z(v,j.gq7(j))],n),B.m,i,B.e,B.i,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gC4().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aTt,i,i,i)],n)
u=j.cx
if(u>0){u=C.aPR(u)
q=C.aPR(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.aa9,i,i,i))}v.push(B.P)
v.push(j.a9z("Back to the games",new C.bPX(j)))
v=A.x(v,B.m,i,B.e,B.i,0,B.p)
break
default:v=i}return A.p(i,A.x(A.a([o,B.W,v],n),B.E,i,B.e,B.O,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.aBe,i,B.n),i,i,i,B.BJ,B.bg,i,i,i)},
a9z(d,e){var w=null,v=A.n(16),u=A.J(B.cI,B.r,2)
return A.aB(w,A.p(w,A.d(d,w,w,w,w,w,w,A2.K7,w,w,w),B.f,w,w,new A.o(D.lv,w,u,v,w,w,B.n),w,w,w,w,D.bB5,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a3)}}
C.bo6.prototype={
a3(d,e){Y.fQk(d,e.eh(B.I),e.gdC()*0.45,this.b,0,0.4)},
av(d){return d.b!==this.b}}
C.aAN.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.bRJ.prototype={}
C.t1.prototype={}
C.bo7.prototype={}
C.alq.prototype={
Mg(d){var w,v=this
if(v.a==null||!J.A(v.b,d)){w=v.a
if(w!=null)w.q()
v.a=C.i4X(d)
v.b=d}w=v.a
w.toString
return w},
q(){var w=this.a
return w==null?null:w.q()}}
C.aVC.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.b.a,k=n.c,j=d.a,i=n.d.Mg(e).b
i===$&&A.c()
i=i.a
i===$&&A.c()
i=i.a
i.toString
j.drawPicture(i)
i=e.a
w=e.b
v=Math.min(i/450,w/900)
J.bl(j.save())
j.translate((i-450*v)/2,(w-900*v)/2)
d.bW(0,v)
n.cxV(d,l)
n.bNV(d,l)
n.cG_(d,l,k)
u=0.8+0.2*Math.sin(l*8)*Math.sin(l*3.7)+k.w*0.4
J.bl(j.save())
j.translate(225,580)
d.p8(0,1,0.42)
t=240*(0.6+0.5*k.w)
$.S()
s=A.I()
r=x.O
q=x.n
s.sam(A.ts(B.I,t,A.a([D.boO.j(0.55*u),F.MH.j(0.2*u),B.L],r),A.a([0,0.5,1],q),B.x,m,m,0))
d.ad(B.I,t,s)
j.restore()
p=A.a([new A.z(528,new C.bRB(n,d,l,k)),new A.z(540,new C.bRC(n,d,l,k)),new A.z(546,new C.bRD(n,d,l,k)),new A.z(574,new C.bRE(n,d,l,k)),new A.z(612,new C.bRF(n,d,l,k)),new A.z(650,new C.bRG(n,d,l,k)),new A.z(656,new C.bRH(n,d,l,k))],x.E)
B.d.aY(p,new C.bRI())
for(o=0;o<7;++o)p[o].b.$0()
n.bEQ(d,l,k)
n.bRs(d,l)
j.restore()
$.S()
j=A.I()
j.sam(A.ts(new A.t(i/2,w*0.6),e.gano()*0.75,A.a([B.L,D.bcS],r),A.a([0.55,1],q),B.x,m,m,0))
d.aO(new A.a3(0,0,0+i,0+w),j)},
av(d){return d.c!==this.c||d.d!==this.d},
cxV(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e5()
g.cY(3)
for(w=d.a,v=0;v<36;++v){u=g.af()
t=g.af()
s=Math.sin(e*(1.5+g.af()*2)+v)
r=g.af()
s=B.c.j(0.25+0.7*(0.5+0.5*s))
$.S()
q=new A.ao(B.Q,B.M,B.S,B.T,B.R)
q.r=s.gp(0)
p=q.G()
w.drawCircle(u*450,20+t*300,0.8+r*1.1,p)
p.delete()}o=B.k.F(e,17)/1.2
if(o<1){n=new A.t(60+o*220,70+o*90)
d.bo(n,n.aE(0,D.ehv),C.iv(B.c.j((1-o)*0.9),1.6))}for(u=e*0.035,t=e*9,s=x.v,m=0;m<3;++m){l=B.k.F(u+m*0.05,1)
r=-20+l*500
q=120+Math.sin(l*9+m)*14+m*12
k=Math.sin(t+m*2)
j=$.S()
i=A.a([],s)
j=new A.aF(j.r,B.ag,null,null,i)
k=q+k*4
i.push(new A.aY(r-6,k))
h=q-3
i.push(new A.c4(r-2,h,r,q))
i.push(new A.c4(r+2,h,r+6,k))
r=new A.ao(B.Q,B.M,B.S,B.T,B.R)
r.b=B.a9
r.c=1.6
r.r=D.bfz.gp(0)
r.d=B.bA
r.e=B.dQ
p=r.G()
r=j.gbv().a.snapshot()
w.drawPath((j.e=new A.ce(r)).a,p)
p.delete()}},
bNV(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=0.75+0.25*Math.sin(a0*9)*Math.sin(a0*5.3)
for(w=a0*0.12,v=d.a,u=0.78*e,t=0.7*e,s=0;s<3;++s){r=D.ayl[s]
q=r.a
p=r.c
o=q+p*0.1
n=r.b
m=r.d
l=n-m*0.38
k=A.bK(new A.t(o,l),m*0.74,p*0.5)
j=Ad.MA.j(u)
$.S()
i=new A.ao(B.Q,B.M,B.S,B.T,B.R)
i.r=j.gp(0)
h=i.G()
v.drawOval(A.bG(k),h)
h.delete()
p=A.bK(new A.t(o+0,l+m*0.1),m*0.4,p*0.28)
l=new A.ao(B.Q,B.M,B.S,B.T,B.R)
l.r=Q.xH.j(t).gp(0)
h=l.G()
v.drawOval(A.bG(p),h)
h.delete()
for(p=q*0.01,m=n-m-r.e*0.9,g=0;g<5;++g){f=B.k.F(w+g/5+p,1)
o=Math.sin(f*6+g)
n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.r=D.afS.j(0.16*(1-f)).gp(0)
h=n.G()
v.drawCircle(q+o*6+f*18,m-f*70,4+f*12,h)
h.delete()}}},
cG_(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
C.bCq(d,D.ehr,0.9,a0,D.hlS,!1,!1,D.abG,1,!1)
w=$.S().r
v=x.v
u=new A.aF(w,B.ag,e,e,A.a([],v))
u.D(new A.aY(52,470))
u.D(new A.aq(50,486))
u.D(new A.aq(66,486))
u.D(new A.aq(64,470))
u.D(new A.bs())
t=A.I()
t.r=D.ahG.gp(0)
d.aH(u,t)
C.bCq(d,D.eht,0.95,a0,D.hlN,!1,!1,D.abH,1,!0)
t=new A.aF(w,B.ag,e,e,A.a([],v))
t.D(new A.aY(417,510))
t.D(new A.c4(431,532,445,510))
t.D(new A.aq(441,548))
t.D(new A.c4(431,553,421,548))
t.D(new A.bs())
u=A.I()
u.r=F.Fg.gp(0)
d.aH(t,u)
u=A.bK(D.ehs,8,28)
t=A.I()
t.r=D.br2.gp(0)
d.dO(u,t)
C.bCq(d,new A.t(-30+B.k.F(a0/26,1)*510,492),0.82,a0,D.hlT,!0,!1,D.Wm,1,!1)
t=B.k.F(a0/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.dO(A.bK(new A.t(s+q*16,r-6),16,11),C.iv(D.ahy,1.8))
u=q<0
C.bCq(d,new A.t(s-q*6,r),0.62,a0,D.hlV,!1,u,D.Wm,2.2,!1)
C.bCq(d,new A.t(s-q*32,r+4),0.58,a0+1,D.hlR,!1,u,D.Wm,2.2,!1)
this.bU8(d,D.eh6,a0)
for(u=d.a,t=a0*0.5,p=a0*4,o=0;o<3;++o){n=88+o*17+Math.sin(t+o)*6
m=520+B.o.F(o,2)*6
l=Math.max(0,Math.sin(p+o*2))*4
k=A.bK(new A.t(n,m),8,11)
j=o===1
i=j?D.ahu:D.ai3
h=new A.ao(B.Q,B.M,B.S,B.T,B.R)
h.r=i.gp(0)
g=h.G()
u.drawOval(A.bG(k),g)
g.delete()
k=j?D.ahu:D.ai3
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.r=k.gp(0)
g=j.G()
u.drawCircle(n+5,m+(-3+l),2.6,g)
g.delete()
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.b=B.a9
j.c=1
j.r=B.aE.gp(0)
j.d=B.bA
j.e=B.dQ
g=j.G()
u.drawLine.apply(u,[n+7.5,m+(-2+l),n+10,m+(-1.5+l),g])
g.delete()
n+=-1
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.b=B.a9
j.c=1
j.r=B.aE.gp(0)
j.d=B.bA
j.e=B.dQ
g=j.G()
u.drawLine.apply(u,[n,m+4,n,m+8,g])
g.delete()}f=a0<a1.f
u=A.bK(D.a7i,15+Math.sin(a0*2)*0.8,40)
t=A.I()
t.r=D.age.gp(0)
d.dO(u,t)
u=A.bK(D.a7i.a9(0,new A.t(-14,f?-9:-2)),12,15)
t=A.I()
t.r=D.bhC.gp(0)
d.dO(u,t)
t=new A.aF(w,B.ag,e,e,A.a([],v))
t.D(new A.aY(130,592-(f?16:6)))
t.D(new A.aq(134,592-(f?22:9)))
t.D(new A.aq(138,592-(f?16:6)))
t.D(new A.bs())
u=A.I()
u.r=D.bhM.gp(0)
d.aH(t,u)
u=D.a7i.a9(0,new A.t(-17,f?-9:-2))
t=A.I()
t.r=B.i1.gp(0)
d.ad(u,1.1,t)
v=new A.aF(w,B.ag,e,e,A.a([],v))
v.D(new A.aY(168,590))
w=Math.sin(a0*8)
v.D(new A.c4(180,588+w*(f?6:0),178,595))
d.aH(v,C.iv(D.age,3.5))},
bU8(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=Math.max(0,Math.sin(f*0.6))*9,j=e.a9(0,new A.t(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=j.a,u=j.b,t=u+3,s=f*2,r=u+16,q=d.a,p=0;p<4;++p){o=w[p]
n=Math.sin(s+o)
$.S()
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.b=B.a9
m.c=2
m.r=D.XB.gp(0)
m.d=B.bA
m.e=B.dQ
l=m.G()
q.drawLine.apply(q,[v+o,t,v+(o+n*1.5),r,l])
l.delete()}w=A.bK(j,17,32)
s=$.S()
r=A.I()
r.r=D.Fe.gp(0)
d.dO(w,r)
r=A.bK(j.a9(0,D.egx),7,26)
w=A.ar(D.Fe,B.w,0.12)
w.toString
q=A.I()
q.r=w.gp(0)
d.dO(r,q)
s=new A.aF(s.r,B.ag,null,null,A.a([],x.v))
s.D(new A.aY(v+13,u-3))
s.D(new A.aq(v+22,u-8+k))
s.D(new A.aq(v+20,u+k-0.5))
s.D(new A.aq(v+12,t))
s.D(new A.bs())
t=A.I()
t.r=D.Fe.gp(0)
d.aH(s,t)
t=A.bK(j.a9(0,new A.t(24,-7+k)),9,12)
s=A.I()
s.r=D.Fe.gp(0)
d.dO(t,s)
s=-11+k
d.bo(j.a9(0,new A.t(22,s)),j.a9(0,new A.t(21,-17+k)),C.iv(D.XB,1.6))
d.bo(j.a9(0,new A.t(26,s)),j.a9(0,new A.t(28,-16+k)),C.iv(D.XB,1.6))
s=j.a9(0,new A.t(26,-8+k))
t=A.I()
t.r=B.w.gp(0)
d.ad(s,0.9,t)
d.bo(j.a9(0,new A.t(26,-3+k)),j.a9(0,new A.t(26,1+k)),C.iv(D.bko,1.4))
d.bo(j.a9(0,D.eju),j.a9(0,new A.t(-19,-7+Math.sin(f*7)*2)),C.iv(D.Fe,2.4))},
bRq(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
for(w=a5.a,v=0;v<14;++v){u=v*3.141592653589793*2/14
t=Math.cos(u)
s=Math.sin(u)
if(Math.sin(u)<0){t=A.bK(new A.t(225+t*36,574+(s*13+6)),8,11)
$.S()
s=new A.ao(B.Q,B.M,B.S,B.T,B.R)
s.r=D.bpJ.gp(0)
r=s.G()
w.drawOval(A.bG(t),r)
r.delete()}}t=A.bK(D.a7k.a9(0,B.cx),17,52)
$.S()
s=A.I()
s.r=D.bct.gp(0)
a5.dO(t,s)
s=A.bK(D.a7k.a9(0,B.cx),12,44)
t=D.bfX.j(0.6+0.3*Math.sin(a6*6))
q=A.I()
q.r=t.gp(0)
a5.dO(s,q)
for(p=0;p<3;++p){u=D.deQ[p]
t=225+Math.cos(u)*3
s=Math.cos(u)
q=Math.sin(u)
o=Math.cos(u)
n=Math.sin(u)
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.b=B.a9
m.c=7
m.r=D.Ft.gp(0)
m.d=B.bA
m.e=B.dQ
r=m.G()
w.drawLine.apply(w,[t+s*24,579+q*4,t-o*24,579-n*4,r])
r.delete()
n=Math.cos(u)
o=Math.sin(u)
q=Math.cos(u)
s=Math.sin(u)
m=D.B4.j(0.6)
l=new A.ao(B.Q,B.M,B.S,B.T,B.R)
l.b=B.a9
l.c=2
l.r=m.gp(0)
l.d=B.bA
l.e=B.dQ
r=l.G()
w.drawLine.apply(w,[t+n*24,579+(o*4-2),t-q*24,579-(s*4+2),r])
r.delete()}k=46+80*a7.w
j=[D.eUe,D.eUL,D.eVM,D.eW3,D.eVK]
for(t=a6*8,s=a6*15,q=a6*3.3,o=x.v,i=0;i<3;++i){h=[1,0.72,0.42][i]
g=[D.bnd,D.bjL,D.bpc][i]
for(n=i===0,m=1-i*0.15,p=0;p<5;++p){f=j[p]
l=f.b
e=f.c
d=k*l*h*(0.9+0.12*Math.sin(t+e)+0.06*Math.sin(s+e*2))
a0=Math.sin(q+e)*5*(d/k)
a1=225+f.a*m
a2=(12+8*a7.w)*l*h
l=$.S()
e=A.a([],o)
a3=new A.aF(l.r,B.ag,null,null,e)
e.push(new A.aY(a1-a2,578))
l=a1+a0*0.6
e.push(new A.l_(a1-a2*1.1,578-d*0.45,l-a2*0.2,578-d*0.7,a1+a0,578-d))
e.push(new A.l_(l+a2*0.3,578-d*0.65,a1+a2*1.15,578-d*0.4,a1+a2,578))
e.push(new A.bs())
l=new A.ao(B.Q,B.M,B.S,B.T,B.R)
l.r=g.j(n?0.9:0.95).gp(0)
r=l.G()
l=a3.gbv().a.snapshot()
w.drawPath((a3.e=new A.ce(l)).a,r)
r.delete()}}for(t=a6*1.5,v=0;v<22;++v){a4=B.k.F(a6*(0.35+B.o.F(v,5)*0.06)+v/22,1)
s=Math.sin(v*1.9+t)
q=a7.w
o=B.o.F(v,3)
n=G.ai0.j((1-a4)*0.9)
$.S()
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.r=n.gp(0)
r=m.G()
w.drawCircle(225+s*(10+a4*26),564-a4*(110+80*q),1.2+o*0.6,r)
r.delete()}for(t=a6*0.1,s=574-k,v=0;v<6;++v){a4=B.k.F(t+v/6,1)
q=Math.sin(a4*5+v)
o=D.afS.j(0.1*(1-a4))
$.S()
n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.r=o.gp(0)
r=n.G()
w.drawCircle(225+q*16+a4*12,s-a4*120,7+a4*20,r)
r.delete()}},
bRs(d,e){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=d.a,r=0;r<16;++r){q=B.k.F(r*83+Math.sin(w+r)*40+v,450)
p=420+B.o.F(r*37,300)+Math.sin(u+r*2)*26
o=Math.max(0,Math.sin(t+r*1.7))
n=D.bra.j(0.18*o)
$.S()
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.r=n.gp(0)
l=m.G()
s.drawCircle(q,p,5,l)
l.delete()
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.r=D.bl6.j(0.9*o).gp(0)
l=m.G()
s.drawCircle(q,p,1.4,l)
l.delete()}},
c35(d,e){switch(d){case 0:return e.b?D.hlO:D.aYE
case 1:return e.b?D.hlU:D.aYC
case 2:return D.aYB
case 3:return D.aYA
case 4:return D.aYD
default:return D.aYF}},
aC5(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
QP(d,e,f,g){var w,v=this,u=D.a4Q[e],t=v.c35(e,g),s=new C.bo7(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a4Q[e],l=e===0
m=B.k.E(((l?D.aJI:D.aJN).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a7o
s.as=D.DG
if(l){s.a=o?v.aC5(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.t(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.t(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.DG
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.egF
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.ei1
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
s.Q=D.ekp
s.as=D.aK_}if(e===2&&g.x!=null&&f<g.y){s.a=v.aC5(f,5)
s.b=0.4
s.as=new A.t(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aC5(f,e*3)
s.b=0.5
s.c=0.4}}C.hta(d,u.a,u.b*1.2,t,s,f,e,null)},
bEQ(d,e,f){var w=new C.bRA(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gdc(d){return this.c}}
C.afb.prototype={
a6(){return"_Stand."+this.b}}
C.ada.prototype={}
C.lm.prototype={}
C.bQk.prototype={
bzw(d){var w,v,u,t,s=A.U(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
FP(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.aY(r,new C.bQl())
return r},
aqn(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aLC(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.L)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
alS(d){var w,v,u=A.aX(x.N),t=d,s=0
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
gyV(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.aY(w,new C.bQm(this))
return B.d.gI(w)}}
C.atp.prototype={}
C.zg.prototype={}
C.ak5.prototype={
gaEo(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Z(w,new C.bLk(),A.T(w).k("Z<1>")).gL(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ah(){var w=this
return A.H(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.Mf.prototype={
gaoy(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
if(t.gaEo(0))s.push(t)}return s},
ah(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.L)(w),++s){r=w[s]
p.push(A.H(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.H(["id",this.a,"title",q,"qs",p],u,t)},
cZ7(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gaoy(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.L)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lm(B.a.i(s.a),p,B.d.cu(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.b9D.prototype={}
C.a9j.prototype={}
C.bgR.prototype={}
C.af9.prototype={}
C.ajk.prototype={
R(){return new C.ajl(B.bB,A.a([],x.cC),A.a([],x.e4),null,null)},
gd_(){return this.d}}
C.ajl.prototype={
gMz(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bD1(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gb8O(){var w,v=this,u=v.e
if(u===$){w=v.pQ(v.gc9z())
v.e!==$&&A.bF()
v.e=w
u=w}return u},
Z(){this.a2()
this.gb8O().h5(0)},
q(){this.gb8O().q()
this.btZ()},
h5(d){this.m(new C.bJy(this))},
c9A(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fv(0,v)
if(w.c!=null)w.m(new C.bJt())},
b79(){var w,v,u,t=this,s=t.r
B.d.aa(s)
w=t.gMz()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bgR(u,(u+0.5)/v,w[t.x].b[u]))},
fv(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bs(w,new C.bJz())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c5V()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gMz()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.k.V((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.arP(v,0.8,B.cI)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.arP(m.cy,0.8,G.n8)
m.aXV("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.arP(q,0.88,D.lv)
p=m.gMz()[m.x]
n=p.c
if(u===n){m.aXV("The right gourd fell! It was "+p.b[n]+".")
return}}}},
arP(d,e,f){var w,v,u,t=new A.e5()
t.cY(B.k.V(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.af()*3.141592653589793*2
w.push(new C.af9(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
aXV(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.Q_()}},
c5V(){var w=this
if(w.x+1>=w.gMz().length){w.Q_()
return}++w.x
w.b79()},
Q_(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Q_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gMz().length
r=C.bFi(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bJr())
w=2
return A.b(C.Bu(u.a.d,r),$async$Q_)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.Bv(t.d,t.c.a,"catch",u.z),$async$Q_)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bJs())
return A.h(null,v)}})
return A.i($async$Q_,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.c9y()
else w=v.ch?v.c9B():A.au(new A.D(B.eu,A.x(A.a([D.aUo,B.P,D.fEW,B.W,D.fL5,B.dT,C.uj("Play",v.geX(v),B.cI,B.hk,D.fq)],x.p),B.m,u,B.e,B.O,0,B.p),u),u,u,u)
return new C.tq("Calabash Catch",w,B.f0,u)},
c9B(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hy:B.GZ
p.push(A.X(u,v?B.ax:B.bZ,r,r,r,22))}p.push(B.b1)
v=s.x
u=s.gMz()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aSY,r,r,r))
p.push(B.bc)
v=A.n(14)
p.push(A.p(r,A.d(""+s.z,r,r,r,r,r,r,B.it,r,r,r),B.f,r,r,new A.o(B.bC,r,r,v,r,r,B.n),r,r,r,r,B.Gb,r,r,r))
p=A.B(p,B.m,r,B.e,B.i,0,r,r)
v=A.n(18)
t=A.J(B.cI,B.r,3)
return A.x(A.a([new A.D(D.byV,p,r),A.p(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fph,B.K,r,r),B.f,r,r,new A.o(D.q2,r,t,v,r,r,B.n),r,r,r,B.fj,B.bg,r,r,1/0),B.am,A.E(A.cu(new C.bJx(s)),1)],q),B.m,r,B.e,B.i,0,B.p)},
c9y(){var w=this,v=null,u=A.au(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.pE,v,v,v),v,v,v),t=A.au(A.d(""+w.Q+" of "+w.gMz().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.UM,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cn(A.a([D.b9Y,u,t,B.aQ,new C.I_(s,r,w.cx,v),B.aQ,A.au(C.uj("Back to the games",new C.bJq(w),B.cI,B.kL,D.fq),v,v,v)],x.p),v,B.aa,v,v,B.ah,!1)}}
C.bc_.prototype={
a3(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a6.a,a1=a6.b,a2=0+a0,a3=$.S(),a4=A.I()
a4.sam(A.ju(B.I,new A.t(0,a1),D.cYp,G.ayD,B.x,d))
a5.aO(new A.a3(0,0,a2,0+a1),a4)
a4=A.I()
a4.r=G.MK.gp(0)
a5.ad(new A.t(a0*0.82,a1*0.16),22,a4)
a4=x.v
w=A.a([],a4)
v=new A.aF(a3.r,B.ag,d,d,w)
a3=a1*0.7
v.D(new A.aY(0,a3))
for(u=0;u<=a0;u+=6){t=new A.aq(u,a3+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.bw(s)
t=v.e
if(t!=null)t.a.delete()
v.e=null}v.D(new A.aq(a0,a1))
v.D(new A.aq(0,a1))
a3=$.S()
w=A.I()
w.r=D.bgR.gp(0)
a5.aH(v,w)
r=a0*0.12
a3=new A.aF(a3.r,B.ag,d,d,A.a([],a4))
w=a1*0.86
a3.D(new A.aY(r-26,w))
t=a1*0.5
s=a1*0.34
a3.D(new A.c4(r-14,t,r-10,s))
a3.D(new A.aq(r+10,s))
a3.D(new A.c4(r+14,t,r+26,w))
a3.D(new A.bs())
w=A.I()
w.r=D.af_.gp(0)
a5.aH(a3,w)
for(a3=a1*0.36,w=a1*0.24,t=a5.a,s=a1*0.22,q=0;q<4;++q){p=D.cjj[q]
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=D.af_.gp(0)
o.c=7
o.d=B.bA
n=o.G()
t.drawLine.apply(t,[r,a3,r+p*46,w,n])
n.delete()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=D.aem.gp(0)
n=o.G()
t.drawCircle(r+p*50,s,18,n)
n.delete()}a3=a1*0.88
w=A.I()
w.r=D.bhK.gp(0)
a5.aO(new A.a3(0,a3,a2,a3+a1*0.12),w)
for(a2=a1*0.9,a3=a2-8,m=0;m<18;++m){w=a0*m/17
s=new A.ao(B.Q,B.M,B.S,B.T,B.R)
s.r=D.agv.gp(0)
s.c=2
n=s.G()
t.drawLine.apply(t,[w,a2,w+3,a3,n])
n.delete()}for(a2=this.b,a3=a2.r,w=a3.length,s=a1*0.89,q=0;q<a3.length;a3.length===w||(0,A.L)(a3),++q){l=a3[q]
if(l.e)continue
o=l.a
u=(l.b+Math.sin(a2.dx*1.7+o)*0.012)*a0
k=l.d
if(l.f){o=A.bK(new A.t(u,s),12,54)
$.S()
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=D.lv.j(0.6).gp(0)
n=k.G()
t.drawOval(A.bG(o),n)
n.delete()
continue}o=Math.sin(a2.dx*2+o)
J.bl(t.save())
t.translate(u,k*a1)
t.rotate(o*0.1*180/3.141592653589793,0,0)
$.S()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=D.afB.gp(0)
n=o.G()
t.drawCircle(0,-34,14,n)
n.delete()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=D.bmh.gp(0)
o.c=4
o.d=B.bA
n=o.G()
t.drawLine.apply(t,[0,-46,2,-56,n])
n.delete()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.sam(A.ts(D.ejc,46,D.d5G,B.CY,B.x,d,d,0))
n=o.G()
t.drawCircle(0,0,34,n)
n.delete()
o=A.bK(D.eji,8,12)
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=B.c.j(0.35).gp(0)
n=k.G()
t.drawOval(A.bG(o),n)
n.delete()
j=new A.iM(new A.eu(l.c,d,d,B.cN,d,d,d,d,d,d,D.fn8),B.K,B.bX,new A.jp(1),d,d,3,d,B.bV,d)
j.o0(62)
o=j.b
k=Math.max(40,o.c+10)
o=o.a.c
i=A.br(A.bK(B.cH,o.gbb(o)+8,k),B.fE)
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=D.q2.gp(0)
n=k.G()
t.drawRRect(A.e6(i),n)
n.delete()
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=D.lv.gp(0)
k.b=B.a9
k.c=1.5
n=k.G()
t.drawRRect(A.e6(i),n)
n.delete()
k=j.b
o=k.c
k=k.a.c
j.a3(a5,new A.t(-o/2,4-k.gbb(k)/2))
t.restore()}h=a2.cy*a0
a3=a2.dx
w=Math.sin(a3*4)
Y.AX(a5,new A.t(h,a1*0.93),a1*0.3,a3,!0,Math.abs(a2.db-a2.cy)*40*Math.abs(Math.sin(a2.dx*18)),2,B.dH,F.mD,!1,(w+1)/2)
g=A.bK(new A.t(h,a1*0.8),a1*0.07,a0*0.24)
a4=new A.aF($.S().r,B.ag,d,d,A.a([],a4))
w=g.a
a3=g.b
a4.D(new A.aY(w,a3))
s=g.c
a4.D(new A.aq(s,a3))
o=g.d
a4.D(new A.aq(s-8,o))
a4.D(new A.c4(g.gbK().a,o+8,w+8,o))
a4.D(new A.bs())
k=A.I()
k.r=D.Yn.gp(0)
a5.aH(a4,k)
for(a4=s-w,m=1;m<6;++m){s=w+a4*m/6
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=D.B4.gp(0)
k.c=1.4
n=k.G()
t.drawLine.apply(t,[s,a3,s+(m-3)*2,o,n])
n.delete()}s=a3+(o-a3)*0.35
o=A.I()
o.r=G.n8.gp(0)
a5.aO(new A.a3(w,s,w+a4,s+5),o)
w-=2
a3-=4
o=A.I()
o.r=D.bgW.gp(0)
a5.dO(new A.a3(w,a3,w+(a4+4),a3+8),o)
for(a3=a2.w,a4=a3.length,q=0;q<a3.length;a3.length===a4||(0,A.L)(a3),++q){f=a3[q]
w=f.a
s=f.b
o=f.f
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=f.e.j(B.k.E(o,0,1)).gp(0)
n=k.G()
t.drawCircle(w*a0,s*a1,3*o+1,n)
n.delete()}e=a2.dx-a2.go
if(e>=0&&e<1.2){a3=a2.fy
j=A.fw(d,d,d,d,A.cS(d,d,d,d,d,d,d,d,d,A.l(d,d,B.cI.j(1-e/1.2),d,d,d,d,d,d,d,d,26,d,d,B.u,d,d,!0,d,d,d,d,d,L.CS,d,d),"+"+a3),B.a4,B.bX,d,B.dA,B.bV)
j.ej()
j.a3(a5,new A.t(a2.id*a0-j.b.c/2,a1*0.72-e*60))}},
av(d){return!0}}
C.Q7.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aAL(w.c,w.f,v),B.aw),s=A.n(10),r=A.J(B.bD,B.r,1.4)
return new A.a5(u+22,v,A.x(A.a([new A.a5(u,u,t,v),B.cM,A.p(v,A.d(w.d,v,1,B.a1,v,v,v,D.ffR,v,v,v),B.f,v,v,new A.o(B.c,v,r,s,v,v,B.n),v,v,v,v,B.mK,v,v,v)],x.p),B.m,v,B.e,B.O,0,B.p),v)},
gY(d){return this.e}}
C.aAL.prototype={
a3(d,e){var w=e.eh(B.I),v=e.gdC(),u=this.c?0.8:0
return Y.fQk(d,w,v*0.44,this.b,0,u)},
av(d){return d.b!==this.b||d.c!==this.c}}
C.azb.prototype={}
C.au0.prototype={
R(){return new C.au1(A.U(x.S,x.cq),null,null)},
gd_(){return this.d}}
C.au1.prototype={
gkL(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hya(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gaEb(){var w=this.z
return w===$?this.z=this.X0(0):w},
giU(){var w,v=this.Q
if(v===$){w=this.gkL()
w=w.length===0?0:w[0].c.length
v=this.Q=A.bZ(w,-1,!1,x.S)}return v},
X0(d){var w,v,u,t,s=this.gkL()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.azb(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.azb(v[t],u[t],-1))
v=new A.e5()
v.cY(this.a.e*31+d)
B.d.dZ(s,v)
return s},
q(){var w,v,u
for(w=this.as,w=new A.dq(w,w.r,w.e);w.C();){v=w.d
v.r.q()
v.r=null
u=v.eJ$
u.b=!1
B.d.aa(u.a)
u=u.gom()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dS$.a.aa(0)
v.qn()}this.bur()},
cOa(d,e){var w,v,u,t,s,r=this
if(d>=r.giU().length||r.giU()[d]!==-1||B.d.t(r.giU(),e))return
w=r.gaEb()[e]
v=r.gkL()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.cnm(r,e,w,v))
A.cG(B.lC,new C.cnn(r))
return}++r.r
u=A.bn(null,B.hu,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.q()
t.n(0,d,u)
r.m(new C.cno(r,d,e,w,v))
u.cp(0)},
kF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkL()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cI(n,0,new C.cnp())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.cnq(t,r))
w=5
return A.b(C.Bu(t.a.d,r),$async$kF)
case 5:t.x=f
o=t.a
w=6
return A.b(C.Bv(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kF)
case 6:t.ch=f
if(t.c!=null)t.m(new C.cnr())
w=1
break
case 4:for(o=t.as,n=new A.dq(o,o.r,o.e);n.C();){q=n.d
q.r.q()
q.r=null
p=q.eJ$
p.b=!1
B.d.aa(p.a)
p=p.gom()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dS$.a.aa(0)
q.qn()}o.aa(0)
t.m(new C.cns(t))
case 1:return A.h(u,v)}})
return A.i($async$kF,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.au(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.pE,p,p,p),p,p,p)
v=r.f
v=A.au(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.UM,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tq(q,A.cn(A.a([D.adU,w,v,B.aQ,new C.I_(u,t,r.ch,p),B.aQ,A.au(C.uj("Back to the games",new C.cni(d),B.cI,B.kL,D.fq),p,p,p)],x.p),p,B.aa,p,p,B.ah,!1),B.f0,p)}w=r.gkL()
v=r.e
s=w[v]
return new C.tq(q,new A.D(B.u9,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aST,B.K,p,p),A.E(A.cu(new C.cnj(r,s)),1)],x.p),B.m,p,B.e,B.i,0,B.p),p),B.f0,p)}}
C.bbv.prototype={
a3(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null,b2=y.B,b3=b0.d,b4=new A.Z(b3,new C.cMK(),A.T(b3).k("Z<1>")).gL(0),b5=b0.b,b6=b5.a9(0,B.J3)
$.S()
w=A.I()
w.r=D.lw.j(0.18+0.1*b4).gp(0)
b7.ad(b6,70+b4*10,w)
w=b8.a
b6=b8.b
v=b5.a9(0,D.efM)
u=A.I()
u.r=B.o7.j(0.5).gp(0)
u.c=10
u.d=B.bA
b7.bo(new A.t(w/2,b6*0.98),v,u)
for(v=b0.c,u=b5.a,b5=b5.b,t=b5+90,s=x.v,b5+=46,r=x.dc,q=x.U,p=b7.a,o=0;o<v.length;++o){n=v[o]
m=n.a+0
l=B.dU.aw(0,B.k.E(b3[o],0,1))
k=$.S().r
j=A.a([],s)
i=new A.aF(k,B.ag,b1,b1,j)
j.push(new A.aY(u,b5))
j.push(new A.c4((u+m)/2,t,m,n.b+-46))
if(l<1)for(n=new A.aF(k,B.ag,b1,b1,A.bq(j,!0,r)),m=A.a([],q),h=new A.tp(n,!1,m);h.C();){g=h.c
if(g===0||h.f)A.b9(A.jA(b2));--g
f=new A.Bs(h,g)
e=0
for(;;){h.im()
d=m[g].b
d===$&&A.c()
if(!(e<d.a.length()))break
h.im()
d=m[g].b
d===$&&A.c()
d=Math.min(d.a.length(),e+7)
d=new A.aF(k,n.b,b1,new A.cy([f,e,d,!0]),A.a([],s))
$.S()
a0=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a0.r=B.aY.gp(0)
a0.b=B.a9
a0.c=3
a1=a0.G()
a0=d.gbv().a.snapshot()
p.drawPath((d.e=new A.ce(a0)).a,a1)
a1.delete()
e+=14}}if(l>0)for(n=new A.aF(k,i.b,i.c,b1,A.bq(j,!0,r)),m=A.a([],q),j=new A.tp(n,!1,m),h=l>0.4,g=9-3*l,d=11*l,a0=6*l;j.C();){a2=j.c
if(a2===0||j.f)A.b9(A.jA(b2));--a2
j.im()
a3=m[a2].b
a3===$&&A.c()
a3=a3.a.length()
a3=new A.aF(k,n.b,b1,new A.cy([new A.Bs(j,a2),0,a3*l,!0]),A.a([],s))
$.S()
a4=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a4.r=D.FG.gp(0)
a4.b=B.a9
a4.c=g
a4.d=B.bA
a1=a4.G()
a4=a3.gbv().a.snapshot()
p.drawPath((a3.e=new A.ce(a4)).a,a1)
a1.delete()
j.im()
a3=m[a2].b
a3===$&&A.c()
a3=a3.a.length()
j.im()
a5=m[a2].Hc(a3*l)
if(h)for(a2=a5.a,a3=a2.a,a2=a2.b,a6=0;a6<4;++a6){a7=a6*1.6+o
a4=A.bK(new A.t(a3+Math.cos(a7)*14,a2+Math.sin(a7)*10),a0,d)
a8=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a8.r=B.be.gp(0)
a1=a8.G()
p.drawOval(A.bG(a4),a1)
a1.delete()}}}if(b0.e)for(b3=b6*0.3,o=0;o<6;++o){a9=new A.iM(D.ffk,B.a4,B.bX,new A.jp(1),b1,b1,b1,b1,B.bV,b1)
a9.ej()
a9.a3(b7,new A.t(w*(0.15+o*0.14),b3-B.o.F(o,3)*14))}},
av(d){return!0}}
C.axW.prototype={
R(){return new C.axX(A.aX(x.S))},
gd_(){return this.d}}
C.axX.prototype={
gkL(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hz4(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
Z(){this.a2()
this.b7i()},
q(){var w=this.ch
if(w!=null)w.a4(0)
this.a1()},
b7i(){var w=this.ch
if(w!=null)w.a4(0)
this.ch=A.dh(B.rq,new C.cCh(this))},
bo9(d){var w,v=this
if(v.as||v.z.t(0,d))return
w=v.gkL()[v.e]
if(w.e[d]===w.b)v.m(new C.cCp(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cCq(v,d))
A.cG(B.iU,new C.cCr(v))}},
cTE(){var w=this
if(!w.as&&w.f<w.gkL()[w.e].d.length)w.m(new C.cCs(w))},
kF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.gkL()
w=r+1>=q.length?3:4
break
case 3:r=t.ch
if(r!=null)r.a4(0)
r=t.w
q=r===q.length?15:0
s=r*6+q
t.m(new C.cCt(t,s))
w=5
return A.b(C.Bu(t.a.d,s),$async$kF)
case 5:t.y=f
q=t.a
w=6
return A.b(C.Bv(q.d,q.c.a,"who",t.r),$async$kF)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cCu())
w=1
break
case 4:t.m(new C.cCv(t))
t.b7i()
case 1:return A.h(u,v)}})
return A.i($async$kF,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.au(A.d(""+a0.w+" of "+a0.gkL().length+" guessed",a2,a2,a2,a2,a2,a2,B.pE,a2,a2,a2),a2,a2,a2)
v=A.au(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.UM,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tq(a1,A.cn(A.a([D.ba9,w,v,B.aQ,new C.I_(u,t,a0.ax,a2),B.aQ,A.au(C.uj("Back to the games",new C.cCj(a3),B.cI,B.kL,D.fq),a2,a2,a2)],x.p),a2,B.aa,a2,a2,B.ah,!1),B.f0,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkL()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.Kf,B.K,a2,a2),B.W,A.au(A.lw(new C.cCk(a0,r),a2,B.b7,B.hu,a2,a2,new A.bp(a2,s,u),x.i),a2,a2,a2),B.aA],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.ay(B.cI,2,B.r,-1)
k=o+1
w.push(new A.qW(new A.bp(0,1,u),new C.cCl(),A.p(a2,new A.cd(B.aM,B.e,B.i,B.m,a2,B.p,a2,0,A.a([new A.qx(new A.y(""+k,a2,B.nJ,a2,a2,a2,a2,a2,a2,a2,a2,a2),D.lv,a2,12,a2),B.as,new A.bz(1,B.ba,new A.y(v[n].d[o],a2,D.frR,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.o(D.q2,a2,new A.bI(l,l,l,l),new A.bj(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.cu,B.bg,a2,a2,a2),B.b7,B.iU,a2,new A.bV("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.au(A.bN(!1,D.fSV,a2,a2,!0,a2,a2,a2,a0.gcTD(),a2,a2),a2,a2,a2))
w.push(B.P)
if(a0.as){u=D.lw.j(0.2)
q=A.n(16)
p=A.J(D.lw,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fv,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.p(a2,A.x(A.a([m,B.W,C.uj(v,a0.gq7(a0),B.cI,B.jA,D.fq)],t),B.m,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.o(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bE,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.t(0,o)?B.ds:B.cI.j(0.2)
g=new A.aP(16,16)
l=new A.ay(n.t(0,o)?B.f8:B.cI,2,B.r,-1)
f=v[a0.e].e[o]
e=n.t(0,o)?B.bZ:B.c
d=n.t(0,o)?B.wW:a2
t.push(new A.qW(new A.bp(0,i,u),new C.cCm(),A.aB(a2,A.p(a2,new A.y(f,a2,new A.F(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),a2,B.K,a2,a2,a2,a2,a2,a2,a2),B.f,a2,D.ad2,new A.o(h,a2,new A.bI(l,l,l,l),new A.bj(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jf,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cCn(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a3),B.b7,B.mF,a2,new A.bV("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bX(B.fI,t,B.bq,a2,10,10))}return new C.tq(a1,A.cn(w,a2,B.akl,a2,a2,B.ah,!1),B.f0,a2)}}
C.ayX.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.aGb.prototype={
aU(){this.b1()
this.b0()
this.dH()},
q(){var w=this,v=w.b7$
if(v!=null)v.a5(0,w.gdD())
w.b7$=null
w.a1()}}
C.aeY.prototype={
aq_(d){},
aqr(){var w=this,v=w.pQ(new C.f2p(w))
v.h5(0)
w.LG$!==$&&A.aQ()
w.LG$=v}}
C.aJZ.prototype={
gbkB(d){var w=this.c
return B.a.ar(w,0,Math.min(this.d,w.length))},
Vz(d){var w=this,v=w.b
if(v!=null)v.a4(0)
w.c=d
w.d=0
w.b=A.dh(D.ajm,new C.fct(w))},
bqs(d){var w=this,v=w.b
if(v!=null)v.a4(0)
w.d=w.c.length
w.a.$0()},
q(){var w=this.b
return w==null?null:w.a4(0)}}
C.alg.prototype={
R(){return new C.alh(new C.alq(),A.a([],x.t),new A.eB(0,$.ax()),$,0,null,null)},
gd_(){return this.d}}
C.alh.prototype={
gMx(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bD1(w.c,10,w.e,!0)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gh7(d){var w,v=this,u=v.e
if(u===$){w=C.Mu(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqe(){var w=this.r
return w===$?this.r=new C.aJZ(new C.bR6(this)):w},
gaoP(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gMx()[v].c)u.push(1)
return u.length},
gbjT(){var w=this.gh7(0)
return w.gyV()==null?"Elder":B.a.i(w.gyV().b)},
Z(){this.a2()
this.aqr()},
q(){var w,v=this
v.gqe().q()
v.f.q()
w=v.LG$
w===$&&A.c()
w.q()
w=v.pX$
w.T$=$.ax()
w.P$=0
v.bu6()},
cIk(){var w=this
w.m(new C.bR3(w))
w.gqe().Vz(w.gMx()[w.x].a)},
KJ(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqe()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.pX$.a
v.ax=u
v.ay=u+1
v.m(new C.bR1())
A.cG(B.hu,new C.bR2(v))},
bo5(){var w=this.gaoP(0)/this.gMx().length*100
if(w>=90)return D.eRe
if(w>=75)return D.ePh
if(w>=60)return D.eG3
if(w>=45)return D.eJr
return D.eAu},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cr6()
w=A.bS(0,new A.er(A.b4(m,m,m,new C.bs5(n,n.pX$),B.aw),m),0,0,0)
if(!n.Q){v=D.q2.j(0.96)
u=A.n(20)
t=A.J(B.cI,B.r,3)
u=A.p(m,A.x(A.a([A.d("Elder "+n.gbjT()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aTN,B.K,m,m),B.W,C.uj("Start the test",n.gBq(),B.cI,B.iX,D.fq)],x.p),B.m,m,B.e,B.O,0,B.p),B.f,m,m,new A.o(v,m,t,u,m,m,B.n),m,m,m,m,B.bE,m,m,m)
v=u}else{v=n.x
u=n.gMx()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aTP,m,m,m)
if(n.Q){t=n.gqe()
t=t.d<t.c.length}else t=!1
if(t)u=D.f7Q
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.ay(D.B4,4,B.r,-1)
s.push(A.aB(m,A.p(m,new A.y(q[r],m,D.fj1,m,B.K,m,m,m,m,m,m,m),B.f,m,D.ad2,new A.o(D.bcX,m,new A.bI(o,o,o,o),new A.bj(p,p,p,p),m,m,B.n),m,m,m,m,B.Nu,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bR4(n,r),m,m,m,m,m,m,!1,B.a3))}u=A.bX(B.fI,s,B.bq,new A.bV("o"+t,x.W),8,8)}u=A.x(A.a([v,B.am,A.oY(u,B.mE,A.qp(),B.b7,B.b7,A.L7())],x.p),B.m,m,B.e,B.O,0,B.p)
v=u}return new C.tq("Village School",new A.an(B.a_,m,B.ab,B.t,A.a([w,A.ap(10,v,m,m,10,10,m,m)],x.p),m),B.f0,m)},
cr6(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bo5(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gMx()[v].c)g.push(v)
u=A.n(22)
t=A.J(B.cI,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.fnr,B.K,i,i)
r=A.d("Signed by Elder "+j.gbjT(),i,i,i,i,i,i,D.fm6,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.frb,i,i,i),D.esq],q)
o=A.d(h.b,i,i,i,i,i,i,D.ft2,i,i,i)
n=j.gaoP(0)
m=j.gMx()
u=A.p(i,A.x(A.a([D.fEe,B.au,s,r,B.W,new A.an(B.A,i,B.ab,B.t,p,i),o,B.am,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.aa9,i,i,i),B.P,D.aqY],q),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(D.q2,i,t,u,i,i,B.n),i,i,i,i,B.fk,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aA,new C.I_(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aQ,D.fU_,B.P],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.L)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.ay(B.bC,1,B.r,-1)
p=m[v]
u.push(A.p(i,A.x(A.a([new A.y(p.a,i,B.fS,i,i,i,i,i,i,i,i,i),B.au,new A.y("You said: "+p.b[w[v]],i,D.foB,i,i,i,i,i,i,i,i,i),new A.y(p.d,i,D.fqO,i,i,i,i,i,i,i,i,i)],q),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.ds,i,new A.bI(k,k,k,k),new A.bj(r,r,r,r),i,i,B.n),i,i,i,B.cu,B.bg,i,i,i))}B.d.v(s,u)}s.push(B.aA)
s.push(A.au(C.uj("Back to the games",new C.bQY(j),B.cI,B.kL,D.fq),i,i,i))
return new C.tq("Village School",A.cn(s,i,B.bQ,i,i,B.ah,!1),B.f0,i)}}
C.bs5.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.b,e=f.pX$.a,d=a1.a,a0=f.f.Mg(a2).b
a0===$&&A.c()
a0=a0.a
a0===$&&A.c()
a0=a0.a
a0.toString
d.drawPicture(a0)
w=C.h6x(a2)
J.bl(d.save())
d.translate(w.a,w.b)
a1.bW(0,w.c)
if(f.Q){a0=f.gqe()
v=a0.d<a0.c.length}else v=!1
for(u=0;u<2;++u){a0=D.cSK[u]-6
$.S()
t=new A.ao(B.Q,B.M,B.S,B.T,B.R)
t.r=D.Ft.gp(0)
s=t.G()
d.drawRect(A.bG(new A.a3(a0,340,a0+12,450)),s)
s.delete()}a0=A.br(D.a8h.cq(10),B.hU)
$.S()
t=A.I()
t.r=D.B4.gp(0)
a1.az(a0,t)
t=A.br(D.a8h,B.hF)
a0=A.I()
a0.sam(A.ju(new A.t(30,96),new A.t(420,346),D.daX,g,B.x,g))
a1.az(t,a0)
r=new A.e5()
r.cY(2)
for(q=0;q<18;++q){a0=r.af()
t=r.af()
p=r.af()
p=A.bK(new A.t(30+a0*390,96+t*250),8+r.af()*14,30+p*60)
t=new A.ao(B.Q,B.M,B.S,B.T,B.R)
t.r=B.c.j(0.025).gp(0)
s=t.G()
d.drawOval(A.bG(p),s)
s.delete()}a0=A.I()
a0.r=L.ahg.gp(0)
a1.aO(new A.a3(30,354,420,362),a0)
a0=A.I()
a0.r=B.aP.gp(0)
a1.aO(D.f_O,a0)
a0=A.I()
a0.r=B.bL.gp(0)
a1.aO(D.f_S,a0)
a0=A.br(D.f_I,B.hE)
t=A.I()
t.r=D.Yn.gp(0)
a1.az(a0,t)
o=B.k.E((e-f.ax)/0.7,0,1)
if(f.Q){a0=f.gqe().gbkB(0)
n=A.fw(g,g,7,g,A.cS(g,g,g,g,g,g,g,g,g,D.fvh,a0+(v?"|":"")),B.a4,B.bX,g,B.dA,B.bV)
n.o0(346)
J.bl(d.save())
a0=A.bG(D.a8h)
t=$.mw()
d.clipRect(a0,t[1],!0)
a0=o<1
if(a0&&f.w.length>f.x)d.clipRect(A.bG(new A.a3(30+390*o,96,420,346)),t[1],!0)
n.a3(a1,new A.t(52,118))
d.restore()
if(o>0&&a0){a0=30+390*o-20
t=126+40*Math.sin(o*9)
t=A.br(new A.a3(a0,t,a0+40,t+90),B.fE)
a0=A.I()
a0.r=D.brZ.gp(0)
a1.az(t,a0)}}else{n=A.fw(g,g,g,g,D.ffA,B.K,B.bX,g,B.dA,B.bV)
n.o0(340)
n.a3(a1,new A.t(55,176))}if(v)for(a0=e*1.2,t=e*3,q=0;q<8;++q){m=B.k.F(a0+q/8,1)
p=B.o.F(f.gqe().d*9,310)
l=Math.sin(q+t)
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=B.c.j(0.7*(1-m)).gp(0)
s=k.G()
d.drawCircle(70+p+l*6,166+m*70,1.6,s)
s.delete()}a0=f.gh7(0).gyV()
j=(a0==null?g:a0.c)===D.od?1:0
i=e<f.ay
h=A.a([new A.z(470,new C.f2q(e,a1,j,v,i,D.egR)),new A.z(520,new C.f2r(a1,e,v)),new A.z(575,new C.f2s(a1,e,v)),new A.z(585,new C.f2t(this,a1,e,v)),new A.z(615,new C.f2u(this,v,a1,e,i))],x.E)
B.d.aY(h,new C.f2v())
for(u=0;u<5;++u)h[u].b.$0()
d.restore()},
c9C(d,e){var w,v,u,t,s,r,q,p=$.S(),o=A.a([],x.v),n=new A.aF(p.r,B.ag,null,null,o)
for(p=d.a,w=d.b,v=e*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?e:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new A.aY(r,q)
o.push(r)
q=n.f
if(q!=null)r.bw(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new A.aq(r,q)
o.push(r)
q=n.f
if(q!=null)r.bw(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.D(new A.bs())
return n},
av(d){return!1}}
C.ale.prototype={
R(){return new C.alf(new C.alq(),A.U(x.S,x.i),new A.eB(0,$.ax()),$,0,null,null)},
gd_(){return this.d}}
C.alf.prototype={
gkL(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hxZ(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
giU(){var w=this.z
return w===$?this.z=this.Fl(0):w},
gaKe(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.Fl(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.cu(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.Fl(0):r).length);++v}s.Q=w
r=w}return r},
Fl(d){var w,v,u,t,s=this.gkL()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e_(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e5()
u.cY(this.a.e+d*7)
B.d.dZ(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.f3(u,new C.bQK())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Z(){this.a2()
this.aqr()},
q(){var w,v=this
v.e.q()
w=v.LG$
w===$&&A.c()
w.q()
w=v.pX$
w.T$=$.ax()
w.P$=0
v.bu5()},
aq_(d){var w,v,u,t,s,r=this,q=r.giU().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.cu(u===$?r.z=r.Fl(0):u,v)
s=r.gaKe()
s[v]=s[v]+(450*(t+0.5)/q-r.gaKe()[v])*Math.min(1,w)}},
cYO(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.giU().length)return
w=v.y
if(w===-1){v.m(new C.bQV(v,d))
return}if(w===d){v.m(new C.bQW(v))
return}v.m(new C.bQX(v,B.d.cu(v.giU(),v.y),d,B.d.cu(v.giU(),d)))},
cJ_(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.Fl(0):u).length))break
t=s.gkL()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.Fl(0):u)[v]]===v);++v}s.m(new C.bQQ(s,B.d.d5(w,new C.bQR())))},
kF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkL().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bQS(t,s))
w=5
return A.b(C.Bu(t.a.d,s),$async$kF)
case 5:t.x=f
q=t.a
w=6
return A.b(C.Bv(q.d,q.c.a,"lineup",t.r*10),$async$kF)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bQT())
w=1
break
case 4:t.m(new C.bQU(t))
case 1:return A.h(u,v)}})
return A.i($async$kF,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.au(A.d(""+l.r+" of "+l.gkL().length+" lines right",k,k,k,k,k,k,B.pE,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tq("Line Up",A.cn(A.a([D.adU,w,B.aQ,new C.I_(v,u,l.ch,k),B.aQ,A.au(C.uj("Back to the games",new C.bQM(d),B.cI,B.kL,D.fq),k,k,k)],x.p),k,B.aa,k,k,B.ah,!1),B.f0,k)}w=A.a([],x.t)
for(t=0;v=l.gkL(),t<v[l.f].d.length;++t)w.push(t)
B.d.aY(w,new C.bQN(l))
u=A.bS(0,A.cu(new C.bQO(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aTP,k,k,k)
s=v[s]
q=x.p
s=A.ap(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.fnR,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fq3,B.K,k,k)],q),B.m,k,B.e,B.i,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.n(16)
n=l.ax
m=A.J(n?D.lw:G.n8,B.r,2)
r.push(A.p(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bQP(l),x.cM).aG(0,", then ")+".",k,k,k,k,k,k,D.fsc,k,k,k),B.f,k,k,new A.o(p,k,m,o,k,k,B.n),k,k,k,B.d2,B.bg,k,k,1/0))}if(!l.at)r.push(C.uj("That is my line!",l.gcIZ(l),B.cI,B.hx,D.fq))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uj(w,l.gq7(l),B.cI,B.jA,D.fq))}return new C.tq("Line Up",new A.an(B.a_,k,B.ab,B.t,A.a([u,s,A.ap(12,A.x(r,B.m,k,B.e,B.O,0,B.p),k,k,12,12,k,k)],q),k),B.f0,k)}}
C.biG.prototype={
a3(c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.pX$.a,c6=c8.a,c7=c4.e.Mg(c9).b
c7===$&&A.c()
c7=c7.a
c7===$&&A.c()
c7=c7.a
c7.toString
c6.drawPicture(c7)
w=C.h6x(c9)
J.bl(c6.save())
c6.translate(w.a,w.b)
c8.bW(0,w.c)
v=c4.giU().length
c7=$.S().r
u=x.v
t=new A.aF(c7,B.ag,c3,c3,A.a([],u))
t.D(new A.aY(10,470))
t.D(new A.c4(225,500,440,470))
s=A.I()
s.r=D.Yn.gp(0)
s.b=B.a9
s.c=4
c8.aH(t,s)
for(s=c5*3,r=0;r<12;++r){q=30+r*36
p=470+30*Math.sin(3.141592653589793*(q-10)/430)*0.95
o=Math.sin(s+r)
n=A.a([],u)
m=new A.aF(c7,B.ag,c3,c3,n)
n.push(new A.aY(q,p))
n.push(new A.aq(q+16,p+6+o*3))
n.push(new A.aq(q,p+20))
n.push(new A.bs())
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=[B.cI,G.n8,D.lw,B.aK][B.o.F(r,4)].gp(0)
l=o.G()
o=m.gbv().a.snapshot()
c6.drawPath((m.e=new A.ce(o)).a,l)
l.delete()}this.b_t(c8,"OLDEST",D.ehR,B.cI)
this.b_t(c8,"YOUNGEST",D.ehi,B.be)
c7=A.br(D.f_C,B.fE)
u=A.I()
u.r=D.Ft.gp(0)
c8.az(c7,u)
u=A.br(D.f_B,B.hF)
c7=A.I()
c7.r=D.B4.gp(0)
c8.az(u,c7)
k=c5<c4.CW
j=c5<c4.cx
i=v>=5?0.92:1.12
c7=A.a([],x.t)
for(h=0;h<v;++h)c7.push(h)
B.d.aY(c7,new C.dnQ())
for(u=c7.length,s=440/v-8,o=c5*10,n=!k,m=c4.as,g=c5*9,f=c5*8,e=c5*12,d=0;d<c7.length;c7.length===u||(0,A.L)(c7),++d){h=c7[d]
a0=c4.z
a1=B.d.cu(a0===$?c4.z=c4.Fl(0):a0,h)
q=c4.gaKe()[h]
a2=c4.y===h
a3=a2?Math.abs(Math.sin(g))*10:0
a4=m.h(0,h)
if(a4!=null&&c5<a4)a3+=Math.sin((1-(a4-c5)/0.5)*3.141592653589793)*14
a5=c4.at&&c4.gkL()[c4.f].e[h]===a1
a6=c4.at&&!c4.ax&&!a5
a7=c4.gkL()
a8=a7[c4.f].c
a9=a8.length>h?a8[h]:h
if(n)b0=c4.at&&a5
else b0=!0
b1=Math.max(0,Math.sin(o+h))
if(a2){$.S()
a8=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a8.r=B.cI.j(0.22+0.1*Math.sin(f)).gp(0)
l=a8.G()
c6.drawCircle(q,520,54,l)
l.delete()}a8=D.deE[B.o.F(a9,6)]
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
else b8=a2?D.ejX:c3
if(b0)b9=new A.t(3+b1*8,-56)
else if(j&&a6)b9=D.aK_
else b9=a2?new A.t(30,-104+Math.sin(f)*5):c3
C.RW(c8,new A.t(q,612),b7,b4,(225-q)/225*0.5,-0.3,b8,b9,D.J5,a8,b3,0,i,b2,b5,c5,b6)
a7=a7[c4.f].d[h]
c0=new A.iM(new A.eu(a7,c3,c3,B.cN,c3,c3,c3,c3,c3,c3,D.flD),B.a4,B.bX,new A.jp(1),"\u2026",c3,1,c3,B.bV,c3)
c0.o0(s)
c1=A.br(A.bK(new A.t(q,650),24,c0.b.c+16),B.fE)
$.S()
a7=new A.ao(B.Q,B.M,B.S,B.T,B.R)
if(a5)a8=B.im
else a8=a6?B.rl:D.q2
a7.r=a8.gp(0)
l=a7.G()
c6.drawRRect(A.e6(c1),l)
l.delete()
a7=new A.ao(B.Q,B.M,B.S,B.T,B.R)
if(a5)a8=D.lw
else a8=a6?G.n8:D.lv
a7.r=a8.gp(0)
a7.b=B.a9
a7.c=2
l=a7.G()
c6.drawRRect(A.e6(c1),l)
l.delete()
a7=c0.b
a8=a7.c
a7=a7.a.c
c0.a3(c8,new A.t(q-a8/2,650-a7.gbb(a7)/2))
c2=new A.iM(new A.eu(""+(a1+1),c3,c3,B.cN,c3,c3,c3,c3,c3,c3,D.flW),B.a4,B.bX,new A.jp(1),c3,c3,c3,c3,B.bV,c3)
c2.ej()
c2.a3(c8,new A.t(q-c2.b.c/2,668))}if(k)for(c4=c5*2,c7=c5*120,u=c5*4,r=0;r<26;++r){q=B.k.F(r*53+Math.sin(c4+r)*20,450)
s=B.k.F(c7+r*37,420)
J.bl(c6.save())
c6.translate(q,140+s)
c6.rotate((u+r)*180/3.141592653589793,0,0)
s=A.bK(B.I,4,8)
$.S()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=[B.cI,G.n8,D.lw,B.aK,B.c][B.o.F(r,5)].gp(0)
l=o.G()
c6.drawRect(A.bG(s),l)
l.delete()
c6.restore()}c6.restore()},
b_t(d,e,f,g){var w,v,u=null,t=A.fw(u,u,u,u,A.cS(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,L.CS,u,u),e),B.a4,B.bX,u,B.dA,B.bV)
t.ej()
w=t.b
v=w.c
w=w.a.c
t.a3(d,f.aE(0,new A.t(v/2,w.gbb(w)/2)))},
av(d){return!1}}
C.a1n.prototype={
a6(){return"_Trip."+this.b}}
C.ala.prototype={
R(){return new C.alb(D.Wr,new A.eB(0,$.ax()),$,0,null,null)},
gd_(){return this.d}}
C.alb.prototype={
gD4(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bD1(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gh7(d){var w,v=this,u=v.e
if(u===$){w=C.Mu(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqe(){var w=this.f
return w===$?this.f=new C.aJZ(new C.bQw(this)):w},
gTx(){var w=this.gh7(0)
return w.gyV()==null?"Grandma":B.a.i(w.gyV().b)},
Z(){this.a2()
this.aqr()},
q(){var w,v=this
v.gqe().q()
w=v.LG$
w===$&&A.c()
w.q()
w=v.pX$
w.T$=$.ax()
w.P$=0
v.bu4()},
aq_(d){var w,v,u,t=this
if(t.r!==D.abS)return
w=B.dw.aw(0,B.k.E((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gD4()
if(v+1>=u.length){t.r=D.abT
t.Ww()}else{++t.w
t.ay=!1
t.r=D.Ws
t.gqe().Vz(u[t.w].a)}if(t.c!=null)t.m(new C.bQu())}},
Ww(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Ww=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqe().Vz("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gD4().length
r=C.bFi(t,u.z,s)
u.as=r
w=2
return A.b(C.Bu(u.a.d,r),$async$Ww)
case 2:u.at=e
s=u.a
w=3
return A.b(C.Bv(s.d,s.c.a,"journey",u.x*10),$async$Ww)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bQo())
return A.h(null,v)}})
return A.i($async$Ww,v)},
bpm(){this.aSM()},
aSM(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.abS
if(w.c!=null)w.m(new C.bQp())},
KJ(d){var w,v,u,t,s=this
if(s.r!==D.Ws)return
w=s.gD4()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bQt(s,d,v))
u=s.gqe()
t=s.w
u.Vz(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cO9(){if(this.r!==D.AC)return
this.aSM()},
B(d){var w,v,u,t=this,s=null,r=A.bS(0,new A.er(A.b4(s,s,s,new C.bi5(t,t.pX$),B.aw),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gD4().length;++w){v=t.w
if(w<v||t.r===D.abT)v=B.cI
else v=w===v?B.c:B.aY
u=new A.aP(4,4)
p.push(new A.bz(1,B.ba,A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bj(u,u,u,u),s,s,B.n),s,7,s,B.yr,s,s,s,s),s))}p.push(B.bn)
p.push(D.fFP)
return new C.tq("Safari Journey",new A.an(B.a_,s,B.ab,B.t,A.a([r,A.ap(s,A.B(p,B.m,s,B.e,B.i,0,s,s),s,s,12,12,2,s),A.ap(10,t.ciO(),s,s,10,10,s,s)],q),s),B.f0,s)},
ciO(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bQs(o),l=D.q2.j(0.96),k=A.n(22),j=A.J(B.cI,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gTx()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aTN,B.K,n,n),B.W,C.uj("Start the journey",o.gbpl(),B.cI,D.bM3,D.fq)],x.p),B.m,n,B.e,B.O,0,B.p)
break
case 3:w=D.b9I
break
case 1:w=o.w
v=o.gD4()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.ay(D.lv,2.5,B.r,-1)
t.push(A.aB(n,A.p(n,new A.y(r[s],n,D.aTa,n,B.K,n,n,n,n,n,n,n),B.f,n,D.ad9,new A.o(D.ail,n,new A.bI(p,p,p,p),new A.bj(q,q,q,q),n,n,B.n),n,n,n,n,V.w_,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bQq(o,s),n,n,n,n,n,n,!1,B.a3))}w=A.x(A.a([w,B.P,A.bX(B.bG,t,B.bq,n,8,8)],u),B.E,n,B.e,B.O,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gD4().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.P,new A.bM(B.a8,n,n,C.uj(v,o.gcO8(),B.cI,B.jA,D.fq),n)],x.p),B.E,n,B.e,B.O,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gTx()),B.P,A.d(""+o.x+" of "+o.gD4().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aTt,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aPR(v)
u=C.aPR(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.aa9,n,n,n))}w.push(B.P)
w.push(A.au(C.uj("Back to the games",new C.bQr(o),B.cI,B.kL,D.fq),n,n,n))
w=A.x(w,B.E,n,B.e,B.O,0,B.p)
break
default:w=n}return A.p(n,w,B.f,n,n,new A.o(l,n,j,k,D.aBe,n,B.n),n,n,n,n,B.bg,n,n,n)}}
C.bi5.prototype={
a3(d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=this.b,c7=c6.pX$.a,c8=d6.a,c9=d6.b,d0=c6.CW,d1=c6.gD4(),d2=B.k.E(d0/(520*(d1.length+1)),0,1),d3=c6.r===D.abS,d4=c9*0.5
d0=A.ar(D.beo,D.bov,d2)
d0.toString
w=A.ar(D.XD,G.ag7,d2)
w.toString
v=A.ar(B.tH,D.bn_,d2)
v.toString
$.S()
u=A.I()
t=x.O
u.sam(A.ju(B.I,new A.t(0,d4),A.a([d0,w,v],t),G.a3k,B.x,c5))
d5.aO(new A.a3(0,0,0+c8,0+c9),u)
s=new A.t(c8*(0.15+0.7*d2),d4*(0.28+0.45*d2*d2))
u=A.I()
u.sam(A.ts(s,60,A.a([D.bnm,B.L],t),c5,B.x,c5,c5,0))
d5.ad(s,60,u)
u=A.I()
u.r=B.XP.gp(0)
d5.ad(s,22,u)
for(d0=d5.a,w=c7*4,v=c8+240,u=c9*0.06,r=0;r<5;++r){q=B.k.F(r*190-c6.CW*0.06-w,v)-120
p=u+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dtD[o]
$.S()
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.r=B.c.j(0.75).gp(0)
l=m.G()
d0.drawCircle(q+n.a,p+n.b,18,l)
l.delete()}}for(v=d2*0.7,u=d4+4,m=d4-16,k=x.v,j=0;j<2;++j){i=$.S()
h=A.a([],k)
g=new A.aF(i.r,B.ag,c5,c5,h)
h.push(new A.aY(0,u))
for(i=m-j*12,f=0.12+j*0.1,e=70+j*30,d=14-j*3,q=0;q<=c8;q+=6){a0=new A.aq(q,i+Math.sin((q+c6.CW*f)/e)*d)
h.push(a0)
a1=g.f
if(a1!=null)a0.bw(a1)
a0=g.e
if(a0!=null)a0.a.delete()
g.e=null}i=new A.aq(c8,u)
h.push(i)
h=g.f
if(h!=null)i.bw(h)
i=g.e
if(i!=null)i.a.delete()
g.e=null
$.S()
i=new A.ao(B.Q,B.M,B.S,B.T,B.R)
i.r=A.ar(j===0?D.bcZ:D.bro,D.bhR,v).gp(0)
l=i.G()
i=g.e
d0.drawPath((i==null?g.e=new A.ce(g.gbv().a.snapshot()):i).a,l)
l.delete()}for(v=d4+2,r=0;r<8;++r)this.c9D(d5,new A.t(B.k.F(B.k.F(r*300-c6.CW*0.5,2400)+2400,2400)-150,v),(r&1)===0,d2)
$.S()
v=A.I()
u=A.ar(D.ahy,D.FG,d2)
u.toString
v.sam(A.ju(new A.t(0,d4),new A.t(0,c9),A.a([u,D.bno],t),c5,B.x,c5))
d5.aO(new A.a3(0,d4,c8,c9),v)
a2=c9*0.56
a3=c9*0.66
v=A.I()
v.r=D.bh9.gp(0)
d5.aO(new A.a3(0,a2,c8,a3),v)
v=A.I()
v.r=D.br4.gp(0)
d5.aO(new A.a3(0,a2-3,c8,a2),v)
for(q=-B.k.F(c6.CW,70),v=(a2+a3)/2-2,u=v+4;q<c8;q+=70){t=new A.ao(B.Q,B.M,B.S,B.T,B.R)
t.r=L.M5.gp(0)
l=t.G()
d0.drawRect(A.bG(new A.a3(q,v,q+36,u)),l)
l.delete()}for(v=a2-6,u=v-36,t=u+36,m=v-34,i=c8*0.62,h=c8+160,f=c7*3,e=c7*6,d=v+40,a0=v-20,a1=a0+20,a4=v-56,a5=a4+56,a6=v-66,a7=a6+20,a8=v-72,r=0;a9=d1.length,r<=a9;r=b0){b0=r+1
q=i+b0*520-c6.CW
if(q<-160||q>h)continue
a9=r===a9
b1=q+40
b2=b1-26
b3=$.S()
b4=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b4.r=D.bcG.gp(0)
l=b4.G()
d0.drawRect(A.bG(new A.a3(b2,u,b2+52,t)),l)
l.delete()
b2=A.a([],k)
b3=new A.aF(b3.r,B.ag,c5,c5,b2)
b2.push(new A.aY(b1-36,m))
b2.push(new A.aq(b1,a8))
b2.push(new A.aq(b1+36,m))
b2.push(new A.bs())
b2=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b2.r=D.bpl.gp(0)
l=b2.G()
b2=b3.gbv().a.snapshot()
d0.drawPath((b3.e=new A.ce(b2)).a,l)
l.delete()
b2=b1-6
b3=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b3.r=D.fq.gp(0)
l=b3.G()
d0.drawRect(A.bG(new A.a3(b2,a0,b2+12,a1)),l)
l.delete()
b5=q-36
b2=b5-2
b3=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b3.r=D.Ft.gp(0)
l=b3.G()
d0.drawRect(A.bG(new A.a3(b2,a4,b2+4,a5)),l)
l.delete()
b2=b5-30
b6=A.br(new A.a3(b2,a6,b2+60,a7),B.ic)
b2=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b2.r=D.bss.gp(0)
l=b2.G()
d0.drawRRect(A.e6(b6),l)
l.delete()
b2=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b2.r=D.B4.gp(0)
b2.b=B.a9
b2.c=2
l=b2.G()
d0.drawRRect(A.e6(b6),l)
l.delete()
b7=a9?"HOME":"STOP "+b0
b8=new A.iM(new A.eu(b7,c5,c5,B.cN,c5,c5,c5,c5,c5,c5,D.fk7),B.a4,B.bX,new A.jp(1),c5,c5,c5,c5,B.bV,c5)
b8.ej()
b2=b8.b
b3=b2.c
b2=b2.a.c
b8.a3(d5,new A.t(b5-b3/2,a4-b2.gbb(b2)/2))
if(a9)b9=c6.r===D.abT
else if(r===c6.w){b2=c6.r
b2=b2===D.Ws||b2===D.AC
b9=b2}else b9=!1
if(a9){b2=c6.gh7(0).gyV()
c0=(b2==null?c5:b2.c)===D.od?1:0}else c0=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b2=c6.gqe()
c1=b2.d<b2.c.length&&b9
c2=b9&&c6.r===D.AC
b2=c1?C.hux(c7,r):0
if(c2)b3=c6.ax?1:-0.3
else b3=a9&&b9?1:0.4
b4=b9&&c6.r===D.Ws?0.4:0
c3=c2&&c6.ax?0.5:0
if(a9&&b9)a9=new A.t(40,-110+Math.sin(e)*10)
else a9=c1?new A.t(44+Math.sin(f)*8,-66+Math.sin(w)*10):c5
C.RW(d5,new A.t(q+4,d),0,b4,-0.8,-0.2,c5,a9,new A.t(q-200,v),c0,b2,0,0.85,b3,c3,c7+r,-0.3)}d1=c8*0.28
this.bGd(d5,new A.t(d1,a3-6),c7,d3,d6)
if(d3)for(v=c7*1.6,u=d1-90,t=a3-10,r=0;r<7;++r){c4=B.k.F(v+r/7,1)
$.S()
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.r=D.bqA.j(0.5*(1-c4)).gp(0)
l=m.G()
d0.drawCircle(u-c4*70,t-c4*18,6+c4*16,l)
l.delete()}if(c6.ay&&c6.r!==D.Wr)for(v=c7*1.2,u=d1+62,t=a3-40,r=0;r<5;++r){c4=B.k.F(v+r/5,1)
m=Math.sin(r+w)
$.S()
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=B.c.j(0.5*(1-c4)).gp(0)
l=k.G()
d0.drawCircle(u+m*5,t-c4*50,4+c4*10,l)
l.delete()}if(c6.r===D.AC&&c6.ax){b8=A.fw(c5,c5,c5,c5,A.cS(c5,c5,c5,c5,c5,c5,c5,c5,c5,A.l(c5,c5,B.cI,c5,c5,c5,c5,c5,c5,c5,c5,24,c5,c5,B.u,c5,c5,!0,c5,c5,c5,c5,c5,A8.I0,c5,c5),"BEEP BEEP!"),B.a4,B.bX,c5,B.dA,B.bV)
b8.ej()
b8.a3(d5,new A.t(d1-b8.b.c/2+40,a2-96-Math.abs(Math.sin(c7*9))*6))}},
c9D(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=A.ar(D.bmU,D.bgs,g)
m.toString
if(f){w=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
v=e.a
u=e.b
w.D(new A.aY(v-16,u))
t=u-36
s=u-56
w.D(new A.c4(v-9,t,v-7,s))
w.D(new A.aq(v+7,s))
w.D(new A.c4(v+9,t,v+16,u))
w.D(new A.bs())
t=A.I()
t.r=D.YP.gp(0)
d.aH(w,t)
for(w=v+0,t=u+-54,s=u+-72,r=d.a,u+=-76,q=0;q<4;++q){p=D.cWI[q]
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=D.YP.gp(0)
o.c=4
o.d=B.bA
n=o.G()
r.drawLine.apply(r,[w,t,v+p*24,s,n])
n.delete()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=m.gp(0)
n=o.G()
r.drawCircle(v+p*26,u,10,n)
n.delete()}}else{w=e.a9(0,D.ejU)
$.S()
v=A.I()
v.r=D.bcI.gp(0)
v.c=4
d.bo(e,w,v)
v=A.bK(e.a9(0,D.ejV),16,60)
w=A.I()
w.r=m.gp(0)
d.dO(v,w)}},
bGd(a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6?Math.sin(a5*22)*1.6:Math.sin(a5*2)*0.4,a0=this.b,a1=a0.ay&&a0.r!==D.Wr?0.045:0,a2=a3.a
J.bl(a2.save())
a2.translate(a4.a,a4.b+d)
a3.ih(0,a1)
for(w=0;w<2;++w){v=D.dm7[w]
u=a0.ay&&a0.r!==D.Wr&&v>0
J.bl(a2.save())
a2.translate(v,-4+(u?4:0))
t=u?15:18
$.S()
s=new A.ao(B.Q,B.M,B.S,B.T,B.R)
s.r=D.brg.gp(0)
r=s.G()
a2.drawCircle(0,0,t,r)
r.delete()
a2.rotate(a0.CW/18*180/3.141592653589793,0,0)
t=new A.ao(B.Q,B.M,B.S,B.T,B.R)
t.r=D.bjR.gp(0)
r=t.G()
a2.drawCircle(0,0,9,r)
r.delete()
for(q=0;q<4;++q){t=q*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.r=B.bm.gp(0)
p.c=2
r=p.G()
a2.drawLine.apply(a2,[0,0,s*9,t*9,r])
r.delete()}a2.restore()}o=A.tP(D.f_Z,B.fE,B.fE,B.is,B.hD)
$.S()
t=A.I()
t.sam(A.ju(D.eg_,B.a7d,D.dch,G.a3k,B.x,e))
a3.az(o,t)
for(n=0;n<20;++n){t=-100+n*10
s=new A.ao(B.Q,B.M,B.S,B.T,B.R)
s.r=D.d6q[B.o.F(n,4)].gp(0)
r=s.G()
a2.drawRect(A.bG(new A.a3(t,-26,t+10,-19)),r)
r.delete()}m=a0.r===D.AC&&a0.ax
l=[2,3,4,5]
for(t=a5*10,n=0;n<4;++n){s=-88+n*38
p=s+32
k=new A.a3(s,-66,p,-36)
J.bl(a2.save())
a2.clipRRect(A.e6(A.br(k,B.mW)),$.nD(),!0)
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.r=D.XD.gp(0)
r=j.G()
a2.drawRect(A.bG(k),r)
r.delete()
j=l[n]
i=m?1:0.35
h=m?0.5:0
g=a0.ay&&a0.r===D.AC?1:0
f=m?Math.max(0,Math.sin(t+n))*6:0
C.RW(a3,new A.t(s+(p-s)/2,-10),f,g,0.5,-0.2,e,e,D.aJR,j,h,0,0.4,i,0,a5,0)
a2.restore()
i=A.br(k,B.mW)
h=new A.ao(B.Q,B.M,B.S,B.T,B.R)
h.r=D.ain.gp(0)
h.b=B.a9
h.c=2
r=h.G()
a2.drawRRect(A.e6(i),r)
r.delete()}a0=A.br(D.TI,B.mW)
t=A.I()
t.r=D.XD.gp(0)
a3.az(a0,t)
J.bl(a2.save())
a2.clipRRect(A.e6(A.br(D.TI,B.mW)),$.nD(),!0)
C.RW(a3,new A.t(D.TI.gbK().a,-10),0,0,0.7,-0.1,e,e,D.aJR,6,0,0,0.4,0.5,0,a5,0)
a2.restore()
t=A.br(D.TI,B.mW)
a0=A.I()
a0.r=D.ain.gp(0)
a0.b=B.a9
a0.c=2
a3.az(t,a0)
a0=A.I()
a0.r=Ao.FH.gp(0)
a3.ad(D.ei4,4,a0)
a0=A.I()
a0.r=D.Ft.gp(0)
a3.aO(D.f17,a0)
for(w=0;w<3;++w){v=D.dm9[w]
a0=A.br(new A.a3(v,-96,v+28,-79),B.ic)
t=new A.ao(B.Q,B.M,B.S,B.T,B.R)
t.r=D.FG.gp(0)
r=t.G()
a2.drawRRect(A.e6(a0),r)
r.delete()}a2.restore()},
av(d){return!1}}
C.aAO.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.bfD.prototype={}
C.aAQ.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.bfE.prototype={}
C.aAR.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.bfF.prototype={}
C.a5Q.prototype={
B(d){var w=null
return new A.a5(1/0,this.c,A.b4(w,w,w,new C.bid(w),B.aw),w)}}
C.bid.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=d.a,s=e*0.15,r=f/2,q=e/2,p=f*0.8,o=e*0.85,n=x.v,f*=0.2,m=0,l=0;l<w;l+=e){k=D.dk6[B.o.F(m,6)]
j=$.S()
i=new A.ao(B.Q,B.M,B.S,B.T,B.R)
i.r=k.gp(0)
h=i.G()
t.drawRect(A.bG(new A.a3(l,0,l+v,u)),h)
h.delete()
if(B.o.F(m,3)===0){i=A.a([],n)
g=new A.aF(j.r,B.ag,null,null,i)
j=l+q
i.push(new A.aY(j,f))
i.push(new A.aq(l+o,r))
i.push(new A.aq(j,p))
i.push(new A.aq(l+s,r))
i.push(new A.bs())
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.r=B.c.j(0.85).gp(0)
h=j.G()
j=g.gbv().a.snapshot()
t.drawPath((g.e=new A.ce(j)).a,h)
h.delete()}++m}},
av(d){return!1}}
C.tq.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aG(w,w,w,w,B.P9,w,w,w,new C.bQn(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a1,w,w,w,D.fhp,w,w,w),1)],v)
B.d.v(u,this.e)
return A.c7(w,D.Xq,A.p(w,A.bm(!0,A.x(A.a([D.c0u,new A.D(D.bDr,A.B(u,B.m,w,B.e,B.i,0,w,w),w),A.E(this.d,1)],v),B.m,w,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),B.f,w,w,D.b5a,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.I_.prototype={
B(d){var w=null,v=this.d,u=C.aPR(v),t=C.ibA(v),s=B.c.j(0.08),r=A.n(18),q=A.J(B.cI.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fjT,w,w,w)],x.p)
if(this.e)p.push(D.emj)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.fS,w,w,w))
if(t!=null)p.push(new A.D(B.u7,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.Aj,w,w,w),w))
return A.p(w,A.x(p,B.m,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.n),w,w,w,w,B.bE,w,w,w)}}
C.Vx.prototype={
R(){return new C.bkZ(A.U(x.N,x.S),B.o.F(Date.now(),1e5))},
cV1(d){return this.f.$1(d)},
ge1(){return this.d}}
C.bkZ.prototype={
gSx(){var w=this.d
return w===$?this.d=this.a.c:w},
Z(){this.a2()
this.Pe()},
Pe(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Pe=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bR8(u.a.d),$async$Pe)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.dam[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bR7(p,(o===$?u.d=q.c:o).a,r),$async$Pe)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.dYx(u,n))
return A.h(null,v)}})
return A.i($async$Pe,v)},
u9(d){return this.clP(d)},
clP(d){var w=0,v=A.j(x.H),u=this,t
var $async$u9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a4(t,!1).cc(A.e0(new C.dYy(d),!1,null,x.H)),$async$u9)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.Pe()
return A.h(null,v)}})
return A.i($async$u9,v)},
gb4J(){var w,v,u,t=C.Mu(this.gSx()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)s.push(B.a.i(w[u].b))
return s},
a23(d){return this.ct0(d)},
ct0(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a23=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.L)(d),++s)r.push(d[s].ah())
w=2
return A.b(u.a.cV1(r),$async$a23)
case 2:if(u.c!=null)u.m(new C.dYz(u,r))
return A.h(null,v)}})
return A.i($async$a23,v)},
Ox(d){return this.bOQ(d)},
bOQ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Ox=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.h8F(t.gSx())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.Mf("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a4(s,!1).cc(A.e0(new C.dYv(q),!1,null,r)),$async$Ox)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.L)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bh(j,new C.dYw(p))
o=s.length
B.d.c6(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a23(A.d_(s,0,A.dA(2,"count",x.S),r).dm(0)),$async$Ox)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ox,v)},
Xs(d,e){return this.bMs(0,e)},
bMs(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$Xs=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.ck(null,null,!0,null,new C.dYu(e),o,null,!0,!0,x.y),$async$Xs)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.h8F(u.gSx()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.L)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a23(o),$async$Xs)
case 5:case 3:return A.h(null,v)}})
return A.i($async$Xs,v)},
a9H(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.dYr(this,j):h
o=o?0.55:1
w=A.ar(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.n(20)
u=A.J(B.aY,B.r,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cx,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.UG,p,p,p),B.b1],s)
q=A.n(10)
r.push(A.p(p,A.d(i,p,p,p,p,p,p,D.fii,p,p,p),B.f,p,p,new A.o(B.hN,p,p,q,p,p,B.n),p,p,p,p,B.BV,p,p,p))
return A.aB(p,A.db(A.p(p,A.x(A.a([A.B(r,B.m,p,B.e,B.i,0,p,p),B.b1,A.d(e,p,2,p,p,p,p,D.fpY,p,p,p),B.cM,A.d(f,p,3,B.a1,p,p,p,D.fj_,p,p,p)],s),B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a9(B.ay,B.aD,B.x,w,p,p),B.n),p,p,p,p,B.yj,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a3)},
WW(d,e,f,g,h,i){return this.a9H(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.Mu(s.gSx()),p=s.gSx(),o=C.aPR(s.e),n=C.h8F(p),m=s.a.e&&J.ad(p.z)<2,l=new C.dYA(s),k=C.hxZ(p,1).length,j=C.hya(p,1).length,i=C.hz4(p,1).length,h=B.c.j(0.07),g=A.n(20),f=A.J(B.cI.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,I.aa_,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.fnu,r,r,r),a0=q.b.length,a1=x.p
g=A.p(r,A.B(A.a([e,B.bc,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,I.a9X,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.pE,r,r,r),D.fM4],a1),B.m,r,B.e,B.i,0,B.p)],a1),B.m,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(h,r,f,g,r,r,B.n),r,r,r,r,B.bE,r,r,r)
f=s.WW("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aC,new C.dYB(s,p),l.$1("kahoot"))
h=s.WW("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lv,new C.dYC(s,p),l.$1("fire"))
a0=s.WW("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.Br,new C.dYD(s,p),l.$1("catch"))
j=j!==0?new C.dYG(s,p):r
j=s.a9H("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.he,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.dYH(s,p):r
i=s.a9H("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.l1,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.WW("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.eQ,new C.dYI(s,p),l.$1("journey"))
k=k!==0?new C.dYJ(s,p):r
k=A.a([g,B.aQ,D.fQ3,B.P,A.kP(0.98,A.a([f,h,a0,j,i,e,s.a9H("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.ei,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.WW("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d1,new C.dYK(s,p),l.$1("school"))],a1),2,12,12,r,B.dS,!0),B.d4,A.B(A.a([D.bFa,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fim,r,r,r)],a1),B.m,r,B.e,B.i,0,r,r),B.P],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.L)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.ay(B.aY,1,B.r,-1)
g=B.a.i(v.b)
if(g.length===0)g="Untitled game"
g=A.a([D.fwS,B.bc,new A.bz(1,B.ba,A.x(A.a([new A.y(g,r,B.hp,r,r,r,r,B.a1,r,1,r,r),new A.y(""+v.gaoy(0).length+" questions \xb7 Kahoot style",r,B.Aj,r,r,r,r,r,r,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),r)],a1)
if(v.gaoy(0).length>=2){f=D.lw.j(0.2)
t=new A.ay(D.lw,1,B.r,-1)
g.push(A.aB(r,A.p(r,A.X(B.hk,D.lw,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bI(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dYL(s,v,p),r,r,r,r,r,r,!1,B.a3))}if(s.a.e){f=B.cI.j(0.2)
t=new A.ay(B.cI,1,B.r,-1)
f=A.aB(r,A.p(r,A.X(B.iX,B.cI,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bI(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dYM(s,v),r,r,r,r,r,r,!1,B.a3)
e=B.f8.j(0.2)
t=new A.ay(B.f8,1,B.r,-1)
B.d.v(g,A.a([B.bn,f,B.bn,A.aB(r,A.p(r,A.X(B.e9,B.f8,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bI(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dYN(s,v),r,r,r,r,r,r,!1,B.a3)],a1))}k.push(A.p(r,new A.cd(B.aM,B.e,B.i,B.m,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bI(u,u,u,u),new A.bj(h,h,h,h),r,r,B.n),r,r,r,B.d2,B.bg,r,r,r))}if(s.a.e){j=m?new C.dYE(s):new C.dYF(a2)
i=A.n(18)
h=A.J(m?B.cI:B.aY,B.r,2)
g=m?B.cI.j(0.12):B.ds
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aB(r,A.p(r,A.au(A.d(f,r,r,r,r,r,r,A.l(r,r,m?B.cI:B.aB,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.n),r,r,r,r,B.Ni,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a3))}else if(i===0)k.push(D.fR_)
k.push(B.aA)
k.push(D.aqY)
return new C.tq("Family Games \xb7 "+p.b,A.cn(k,r,D.bzt,r,r,B.ah,!1),B.f0,r)}}
C.a_e.prototype={
a6(){return"_KPhase."+this.b}}
C.alc.prototype={
R(){return new C.ald(D.aYv)},
gd_(){return this.e}}
C.ald.prototype={
q(){var w=this.at
if(w!=null)w.a4(0)
w=this.ax
if(w!=null)w.a4(0)
this.a1()},
h5(d){var w,v=this
v.m(new C.bQI(v))
w=v.at
if(w!=null)w.a4(0)
v.at=A.dh(B.fA,new C.bQJ(v))},
aOq(){var w=this,v=w.ax
if(v!=null)v.a4(0)
w.m(new C.bQy(w))
v=w.at
if(v!=null)v.a4(0)
w.at=A.dh(B.ft,new C.bQz(w))},
KJ(d){var w
if(this.d!==D.abm)return
w=this.at
if(w!=null)w.a4(0)
this.b4F(d)},
b4F(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.k.V(500+500*B.k.E(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bQE(u,v,d))
u=v.ax
if(u!=null)u.a4(0)
v.ax=A.cG(B.rq,v.gkw(v))},
cHG(d){var w=this
if(w.d!==D.W_)return
if(w.e+1>=w.a.w.length)w.Yc()
else{w.m(new C.bQF(w))
w.aOq()}},
Yc(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Yc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a4(0)
p=u.x
t=u.a.w.length
s=C.bFi(p,u.w,t)
u.m(new C.bQB(u,s))
w=2
return A.b(C.Bu(u.a.e,s),$async$Yc)
case 2:r=e
t=u.a
w=3
return A.b(C.Bv(t.e,t.f,t.r,u.f),$async$Yc)
case 3:q=e
if(u.c!=null)u.m(new C.bQC(u,r,q))
return A.h(null,v)}})
return A.i($async$Yc,v)},
cIs(){var w,v,u,t,s=this,r=s.a,q=new A.e5()
q.cY(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.b7("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.dZ(r,q)
for(r=A.d_(r,0,A.dA(4,"count",x.S),A.T(r).c),u=r.$ti,r=new A.bR(r,r.gL(0),u.k("bR<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b7(t,B.k.V(w*(0.35+q.af()*0.5)),!1))}B.d.aY(v,new C.bQG())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.aYv===r){w=A.a([D.fMt,B.W,A.d(s,t,t,t,t,t,t,B.Kj,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.fiu,t,t,t))
w.push(B.aA)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.x2,B.K,t,t))
w.push(B.dT)
w.push(C.uj("Play",u.geX(u),B.cI,B.hk,D.fq))
w=A.au(new A.D(B.eu,A.x(w,B.m,t,B.e,B.O,0,B.p),t),t,t,t)
break A}if(D.aYw===r){w=A.au(A.d(""+u.z,t,t,t,t,t,t,D.fqs,t,t,t),t,t,t)
break A}if(D.abm===r||D.W_===r){w=u.coq()
break A}if(D.aYx===r){w=u.c9E()
break A}w=t}return new C.tq(s,w,B.f0,t)},
coq(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.W_,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aSY,j,j,j),B.b1],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.Kf,j,j,j))
g.push(B.as)
f=A.n(14)
g.push(A.p(j,A.d(""+k.f,j,j,j,j,j,j,B.it,j,j,j),B.f,j,j,new A.o(B.bC,j,j,f,j,j,B.n),j,j,j,j,B.Gb,j,j,j))
g=A.B(g,B.m,j,B.e,B.i,0,j,j)
f=A.n(6)
w=i?0:B.k.E(k.as/k.a.w[k.e].r,0,1)
f=A.bx(f,A.kx(B.bC,j,k.as<5?B.f8:B.cI,9,j,w,j),B.ap)
w=A.n(22)
v=A.J(B.cI,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.l(j,j,e?D.lw:G.n8,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.P,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.fhy,B.K,j,j)],h),B.m,j,B.e,B.O,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fsA,B.K,j,j)
w=A.E(A.p(j,A.au(u,j,j,j),B.f,j,j,new A.o(D.q2,j,v,w,j,j,B.n),j,j,j,j,B.fk,j,j,1/0),3)
v=A.a([],h)
for(u=k.gkw(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bQD(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aAV[o]
m=new A.aP(16,16)
l=new A.ay(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([new A.y(D.aBb[o],j,D.fju,j,j,j,j,j,j,j,j,j),B.as,new A.bz(1,B.ba,new A.y(r[t],j,D.fir,j,j,j,j,B.a1,j,3,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.apu)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bTo)
v.push(A.aB(j,new A.Sd(A.p(j,new A.cd(B.aM,B.e,B.i,B.m,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bI(l,l,l,l),new A.bj(m,m,m,m),W.azo,j,B.n),j,j,j,j,B.fj,j,j,j),p,B.b7,B.a2,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a3))}h=A.a([g,B.am,f,B.ae,w,B.ae,A.E(A.kP(1.45,v,2,10,10,j,B.dS,!1),4)],h)
if(i)h.push(D.elB)
return new A.D(B.a_j,A.x(h,B.m,j,B.e,B.i,0,B.p),j)},
c9E(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cIs(),m=x.p,l=A.a([D.b90,A.au(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.pE,o,o,o),o,o,o),A.au(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.UM,o,o,o),o,o,o),B.aQ],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cI.j(0.25):B.ds
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.cI:B.bC,1,B.r,-1)
q=w<3?D.dcy[w]:""+(w+1)
s=s?B.u:B.U
l.push(A.p(o,new A.cd(B.aM,B.e,B.i,B.m,o,B.p,o,0,A.a([new A.a5(34,o,new A.y(q,o,B.n0,o,o,o,o,o,o,o,o,o),o),new A.bz(1,B.ba,new A.y(t.a,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new A.y(""+t.b,o,B.it,o,o,o,o,o,o,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bI(r,r,r,r),new A.bj(u,u,u,u),o,o,B.n),o,o,o,B.cu,B.eS,o,o,o))}l.push(B.W)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.I_(m,v,p.CW,o))
l.push(B.aQ)
l.push(A.au(C.uj("Back to the games",new C.bQA(p),B.cI,B.kL,D.fq),o,o,o))
return A.cn(l,o,B.fk,o,o,B.ah,!1)}}
C.Tb.prototype={
R(){return new C.al9(A.U(x.de,x.er))}}
C.al9.prototype={
gCI(){var w,v=this,u=v.d
if(u===$){w=C.hee(v.a.c.ah())
v.d!==$&&A.bF()
v.d=w
u=w}return u},
gl3(d){var w,v,u=this,t=u.e
if(t===$){w=u.gCI().b
v=$.ax()
u.e!==$&&A.bF()
t=u.e=new A.as(new A.ba(w,B.b3,B.aO),v)}return t},
cch(d){return this.f.c3(0,d,new C.bQ8(d))},
Z(){this.a2()
var w=this.gCI().c
if(w.length===0)w.push(C.h0n(null,0,20,""))},
q(){var w,v,u=this.gl3(0)
u.T$=$.ax()
u.P$=0
for(u=this.f,u=new A.dq(u,u.r,u.e);u.C();)for(w=J.aW(u.d);w.C();){v=w.gS(w)
v.T$=$.ax()
v.P$=0}this.a1()},
cHw(){if(this.gCI().c.length>=12)return
this.m(new C.bQ9(this))},
jA(d){var w,v,u=this,t=u.gCI()
t.b=B.a.i(u.gl3(0).a.a)
w=t.gaoy(0)
if(t.b.length===0||w.length<2){u.c.K(x.q).f.U(D.fay)
return}v=t.c
B.d.aa(v)
B.d.v(v,w)
v=u.c
v.toString
A.a4(v,!1).O(t)},
B(d){var w,v,u=this,t=null,s=new C.bQj(),r=x.p,q=A.a([A.bN(!1,D.fBN,t,t,!0,t,t,t,u.gbof(u),t,t)],r),p=A.a([D.fQB,B.ae,A.aM(t,B.Y,!1,t,!0,B.t,t,A.aN(),u.gl3(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.aj,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.aa,t,t,t,t,t,t,t,t,t,t,t,B.fS,!0,B.a4,t,B.ao,t,t,t,t),B.aA],r)
for(w=0;v=u.gCI().c.length,w<v;++w)B.d.v(p,A.a([new A.fe(new C.bQi(u,w,s),t)],r))
if(v<12)p.push(A.au(C.uj("\uff0b Add a question",u.gcHv(),B.aY,t,B.c),t,t,t))
return new C.tq("Make your game",A.cn(p,t,D.bzq,t,t,B.ah,!1),q,t)}}
C.aqd.prototype={
R(){return new C.aEk(A.a([],x._))},
bu(){return this.r.$0()},
q8(){return this.w.$0()},
ge1(){return this.c}}
C.aEk.prototype={
Z(){var w,v
this.a2()
this.w6()
w=this.a
v=w.c
if(v.length!==0)C.a7z(v,w.e,w.d.w)},
vX(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hba(r,t.e,!1,s.w,new C.e_c(u),null,s),$async$vX)
case 2:w=3
return A.b(u.w6(),$async$vX)
case 3:return A.h(null,v)}})
return A.i($async$vX,v)},
a0d(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a0d=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hba(r,t.e,!0,s.w,new C.e_b(u),null,s),$async$a0d)
case 2:w=3
return A.b(u.w6(),$async$a0d)
case 3:return A.h(null,v)}})
return A.i($async$a0d,v)},
w6(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$w6=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.B_(q.a.c),$async$w6)
case 7:p=e
if(q.c!=null)n=q.e||J.cL(p)
else n=!1
if(n)q.m(new C.e_e(q,p))
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
return A.b(C.GS(q.a.c).da(0,B.qb),$async$w6)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.e_f(q,o))
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
if(q.c!=null&&q.e)q.m(new C.e_g(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$w6,v)},
OT(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$OT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.K(s).f.U(D.fa8)
w=3
return A.b(C.GS(t.a.c),$async$OT)
case 3:r=e
w=4
return A.b(C.fRb(t.a.c,r),$async$OT)
case 4:q=e
w=5
return A.b(C.GS(t.a.c),$async$OT)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.e_a(t,p))
o=t.c.K(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(null,null,null,q?B.dE:B.cW,null,B.t,null,s,null,B.mH,null,null,null,null,null,null,null,null,null,null))
t.a.q8()
case 1:return A.h(u,v)}})
return A.i($async$OT,v)},
Ic(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Ic=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ijN(l),$async$Ic)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hNN(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b0d(q,p.e,l,"Each family tree costs $"+B.k.ac(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Ic)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.huD(r)
o=Date.now()
n=t.a.c
m=new C.kO(l,r.toUpperCase(),p,!0,B.Y,D.D0,new A.V(o,0,!1),0,n,D.ue,B.ca)
w=5
return A.b(C.a38(n,m),$async$Ic)
case 5:w=6
return A.b(t.w6(),$async$Ic)
case 6:t.a.bu()
t.a.q8()
if(t.c==null){w=1
break}t.EH(m)
case 1:return A.h(u,v)}})
return A.i($async$Ic,v)},
EH(d){return this.cha(d)},
cha(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$EH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.B_(u.a.c),$async$EH)
case 2:n=l.pU(k.dI(f,new C.e_d(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hH(m,new C.aq7(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$EH)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a38(u.a.c,o),$async$EH)
case 6:case 5:w=7
return A.b(u.w6(),$async$EH)
case 7:u.a.q8()
return A.h(null,v)}})
return A.i($async$EH,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.J,o=new C.u6(p)
if(r.e)return A.au(A.mX(q,p?B.bt:B.bm,q,q,q,q,q,q,q,q),q,q,q)
if(J.ct(r.d)){w=p?B.e3:B.c
v=A.n(15)
u=A.aH(!1,B.a2,!0,q,A.aO(!1,q,!0,A.p(q,D.bR4,B.f,q,q,new A.o(B.aW.j(0.12),q,A.J(B.aW,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cO,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcge(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.FU(A.p(q,A.x(A.a([u,B.aQ,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bt:B.bm,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.dT,A.bH(D.fTQ,q,r.gaRB(),A.bo(B.bP,q,q,q,q,q,Ax.a_I,q,new A.b8(A.n(12),B.a0),q,q,q))],x.p),B.m,q,B.e,B.i,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bC8,q,q,1/0),15,B.af,1.05,D.ab8,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b1],v)
if(J.cL(r.d))w.push(A.aG(q,q,q,q,A.X(B.z5,B.aW,q,q,q,q),q,q,q,new C.e_i(r),q,q,q,q,"Sync family trees with database",q))
if(J.cL(r.d))w.push(A.aG(q,q,q,q,A.X(B.z0,B.aW,q,q,q,q),q,q,q,r.gagm(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dl(E.aqo,D.fz8,r.gaRB(),A.bo(B.bP,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.i,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ae)
u.push(new C.FU(r.cDO(J.r(r.d,s),o),14,B.af,1,D.ab8,q))
B.d.v(w,u)}return A.x(A.a([p,B.aA,A.x(w,B.m,q,B.e,B.i,0,B.p)],v),B.E,q,B.e,B.i,0,B.p)},
cDO(d,e){var w=null,v=e.a,u=v?B.e3:B.c,t=A.n(14),s=A.J((v?B.e8:B.bO).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.em,10)],x.V),q=A.n(14),p=A.p(w,D.bQ8,B.f,w,w,new A.o(B.aW.j(0.15),w,w,A.n(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gapq(),m=d.d?"":" \xb7 Public",l=d.y===D.kK?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bF,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bt:B.bm,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.i,0,B.p),1)
return A.p(w,A.aH(!1,B.a2,!0,w,A.aO(!1,q,!0,new A.D(B.bE,A.B(A.a([p,B.bc,l,A.X(B.O5,v?B.bt:B.bm,w,w,w,w)],k),B.m,w,B.e,B.i,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e_h(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aq7.prototype={
R(){return new C.aEh(A.a([],x._),A.aX(x.N),A.b8X())},
bu(){return this.r.$0()},
ge1(){return this.c}}
C.aEh.prototype={
Z(){var w,v,u=this
u.a2()
u.d=u.a.w
u.ad6()
w=u.a
v=w.c
if(v.length!==0)C.a7z(v,w.e,w.d.w)},
q(){var w=this.w
w.T$=$.ax()
w.P$=0
this.a1()},
a3d(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3d=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.y4("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.dZD(r),s,null,!0,!0,x.y),$async$a3d)
case 3:if(e!==!0||t.c==null){w=1
break}t.JK()
t.m(new C.dZE(t,r))
w=4
return A.b(t.u5(),$async$a3d)
case 4:t.a.bu()
t.y4(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a3d,v)},
ctC(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aV.x1$.push(new C.dZy(w,f,d,e))},
aTR(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dr()
u.ee(w,v,0,1)
u.jX(q,q,1,1)
this.w.sp(0,u)},
bbd(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eL(new Float64Array(16))
q.e6(r)
w=q.CN()
v=B.k.E(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dr()
t.ee(r,u,0,1)
t.jX(v,v,1,1)
t.ee(-r,-u,0,1)
t.iP(0,q)
s.sp(0,t)},
ad6(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$ad6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.B_(u.a.c),$async$ad6)
case 2:t=s.pU(r.dI(e,new C.dZ_(u)))
if(t!=null&&u.c!=null)u.m(new C.dZ0(u,t))
return A.h(null,v)}})
return A.i($async$ad6,v)},
y4(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
vX(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.hba(o,t,!1,r,new C.dZh(u),q.a,s),$async$vX)
case 2:n=A
m=J
w=3
return A.b(C.GS(u.a.c),$async$vX)
case 3:p=n.pU(m.dI(e,new C.dZi(u)))
if(p!=null&&u.c!=null)u.m(new C.dZj(u,p))
return A.h(null,v)}})
return A.i($async$vX,v)},
JK(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cz(w,0)},
u5(){var w=0,v=A.j(x.H),u=this,t,s
var $async$u5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a38(t,s),$async$u5)
case 2:return A.h(null,v)}})
return A.i($async$u5,v)},
a1J(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a1J=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.uk(q,t.a.c)){t.y4("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.ikX(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a1J)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.JK()
t.m(new C.dZx(t,r))
w=4
return A.b(t.u5(),$async$a1J)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1J,v)},
b1l(){var w=this.c
w.toString
A.a4(w,!1).cc(A.e0(new C.dZe(this),!1,null,x.H))},
a0r(){return this.chc()},
chc(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0r=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.uk(m,t.a.c)){t.y4("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.P(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Z(s,new C.dZu(),A.T(s).k("Z<1>")).gL(0)
s=A.eE([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("cs.E"))
B.d.ff(p)
s=t.c
s.toString
w=3
return A.b(A.bU(B.L,null,new C.dZv(n,t,new C.u6(m.ax.a===B.J),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a0r)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.JK()
t.m(new C.dZw(t,o))
w=6
return A.b(t.u5(),$async$a0r)
case 6:case 5:if(o.a&&t.c!=null)t.b1l()
case 1:return A.h(u,v)}})
return A.i($async$a0r,v)},
Wj(d){return this.bBy(d)},
bBy(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.uk(r,t.a.c)){t.y4("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.dYO(t,d),r,null,!0,!0,x.P),$async$Wj)
case 3:s=f
if(s==null){w=1
break}t.JK()
t.m(new C.dYP(t,s))
w=4
return A.b(t.u5(),$async$Wj)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wj,v)},
a3z(d){return this.cFY(d)},
cFY(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a3z=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.ck(null,null,!0,null,new C.dZG(u,d,new C.u6(s.ax.a===B.J)),t,null,!0,!0,x.H),$async$a3z)
case 2:return A.h(null,v)}})
return A.i($async$a3z,v)},
cdu(d){var w=this,v=w.d
v===$&&A.c()
if(C.uk(v,w.a.c))w.Oy(d)
else w.a3z(d)},
aiP(d,e){return this.cxz(d,e)},
cxz(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aiP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ck(null,null,!0,null,new C.dZA(new C.u6(r.ax.a===B.J),d,e),s,null,!0,!0,x.H),$async$aiP)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aiP,v)},
Ih(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ih=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kK?3:5
break
case 3:w=6
return A.b(C.fZD(t.a.c),$async$Ih)
case 6:s=e
o=t.a
r=C.hj1(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.aiP(!s,!r),$async$Ih)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aQ_(o,t.a.c)){t.y4("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lh(o,"Cancel","Remove",q.y===D.kK?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$Ih)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aPW(t.a.c,t.d.a),$async$Ih)
case 11:t.a.bu()
o=t.c
if(o==null){w=1
break}A.iW(o,null)
case 1:return A.h(u,v)}})
return A.i($async$Ih,v)},
aaC(d){return this.bMJ(d)},
bMJ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$aaC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.uk(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b3(s,new C.dYQ(p))){o=A.T(s)
p.a=A.pU(new A.cQ(new A.Z(s,new C.dYR(d),o.k("Z<1>")),new C.dYS(),o.k("cQ<1,m>")))}q=p.a
if(q==null)q=d.d
t.JK()
t.m(new C.dYT(t,s,d,q))
w=3
return A.b(t.u5(),$async$aaC)
case 3:t.y4(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$aaC,v)},
Oy(d){return this.bOU(d)},
bOU(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Oy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.uk(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a3z(d),$async$Oy)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ck(null,null,!0,null,new C.dYX(t,d),r,null,!0,!0,x.P),$async$Oy)
case 6:s=f
if(s==null){w=1
break}t.JK()
t.m(new C.dYY(t,s))
w=7
return A.b(t.u5(),$async$Oy)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Oy,v)},
cEc(){var w=this,v=w.d
v===$&&A.c()
if(!C.uk(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dZF(w))
w.u5()},
Zd(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Zd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aQ_(n,t.a.c)){t.y4("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.ax()
r=new A.as(B.at,s)
q=t.d.e
p=A.bq(new A.N(q,t.gcbX(),A.T(q).k("N<1,m>")).c_(0,new C.dZ9()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.dZa(t,new C.u6(n.ax.a===B.J),p,r),q,null,!0,!0,x.y),$async$Zd)
case 3:o=e
r.T$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.JK()
t.m(new C.dZb(t,p))
w=4
return A.b(t.u5(),$async$Zd)
case 4:t.y4("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Zd,v)},
cbY(d){return B.a.i(d.toLowerCase())},
cfZ(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.uk(v,w)
t=r.d
s=C.ia2(t)
C.ijR(q,t.b,u,C.ia1(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.J,m=new C.u6(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Z(l,new C.dZN(),A.T(l).k("Z<1>")).gL(0)
l=n?B.c1:B.iy
v=A.X(B.a0U,n?B.bt:B.bm,o,o,o,18)
u=x.p
v=A.a([new A.D(B.BL,A.aO(!1,o,!0,new A.D(B.hv,A.B(A.a([v,B.bn,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bt:B.bm,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.O,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dZO(p,d),o,o,o,o,o,o,o),o),new A.D(B.nr,p.c_6(m),o)],u)
if(p.d.y===D.kK){t=B.rP.j(0.15)
s=A.n(12)
r=A.J(B.rP.j(0.45),B.r,1)
q=C.GQ(p.d,p.a.c)
v.push(new A.D(B.ym,A.p(o,A.B(A.a([D.bVv,B.as,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.ip,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b1],u)
if(C.uk(p.d,p.a.c)&&p.e.length!==0)u.push(new C.G4("Undo",B.qx,p.gcEb(),m,o,o))
u.push(new C.G4("Family Book",D.bKV,p.gcfY(),m,B.tI,o))
u.push(new C.G4("Family games",B.ok,p.gcg9(),m,B.aC,o))
if(C.uk(p.d,p.a.c))u.push(new C.G4("Display settings",B.Cw,p.gchb(),m,B.b0,o))
u.push(new C.G4("Sync",B.z0,p.gagm(),m,o,o))
t=p.d
if(t.y===D.kK||C.aQ_(t,p.a.c)){t=p.d.y===D.kK?"Remove shared tree":"Delete tree"
u.push(new C.G4(t,B.e9,p.gbMT(),m,B.f8,o))}if(C.uk(p.d,p.a.c))u.push(new C.G4("Add member",B.wo,new C.dZP(p),m,B.bP,o))
v.push(new A.D(A_.akm,A.B(u,B.m,o,B.e,B.i,0,o,o),o))
if(p.d.gapq()===0){u=A.au(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bt:B.bm,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cu(new C.dZQ(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?O.a0Y:A7.O6,o,o,o,o,o)
v.push(A.au(A.hs(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dZR(p),o),o,o,o))}return A.c7(o,l,A.bm(!0,A.x(v,B.E,o,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
c_6(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.n(22)
v=A.a([new A.ac(0,B.G,B.fM.j(0.35),B.dq,18)],x.V)
u=A.n(22)
t=A.ap(-26,A.X(B.yV,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aH(!1,B.a2,!0,m,A.aO(!1,m,!0,A.p(m,D.bYD,B.f,m,m,new A.o(B.c.j(0.16),m,A.J(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cO,!0,m,m,m,m,m,m,m,m,m,m,m,n.gagm(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)
r=n.d
q=A.d(r.b,m,1,B.a1,m,m,m,D.fkv,m,m,m)
r=r.gapq()
p=n.d.gapq()===1?"member":"members"
o=x.p
p=A.a([s,B.bc,A.E(A.x(A.a([q,B.bF,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a7,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.i,0,B.p),1)],o)
if(C.uk(n.d,n.a.c))p.push(A.aG(m,m,m,m,D.bVI,m,m,m,n.gcqW(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.i,0,m,m)
r=n.d.d
q=r?B.jB:B.mO
r=r?"Private":"Public"
r=A.E(n.avS(q,"Privacy",r,n.a.d.w?n.gcDa():m),1)
q=A.E(n.avS(B.z1,"Tree code",n.d.c,new C.dYZ(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ae,A.B(A.a([r,B.ac,q,B.ac,A.E(n.avS(D.bMz,"Collaborators",p,n.gc3L()),1)],o),B.m,m,B.e,B.i,0,m,m)],o)
if(n.d.y===D.kK){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aH(!1,B.a2,!0,A.n(999),A.aO(!1,A.n(999),!0,new A.D(B.h5,A.B(A.a([A.X(B.ph,B.c,m,m,m,14),B.en,A.d("View only",m,m,m,m,m,m,B.aT3,m,m,m)],o),B.m,m,B.e,B.O,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.p(m,A.bx(u,new A.an(B.a_,m,B.ab,B.t,A.a([t,new A.D(B.Ge,A.x(p,B.E,m,B.e,B.i,0,B.p),m)],o),m),B.ap),B.f,m,m,new A.o(m,m,m,w,v,D.c1W,B.n),m,m,m,m,m,m,m,1/0)},
avS(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aH(!1,B.a2,!0,A.n(14),A.aO(!1,A.n(14),!0,new A.D(I.alw,A.x(A.a([A.X(d,B.c,w,w,w,18),B.au,A.d(e,w,1,B.a1,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ve,A.d(f,w,1,B.a1,w,w,w,Aq.Ag,w,w,w)],x.p),B.m,w,B.e,B.i,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.bfH.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gan(r)&&s.c.length===0)return B.bJ
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bfK(s,t),new A.av(w,v))],x.p)
r=r.gdV(r)
B.d.v(u,r.dF(r,new C.ddm(this),x.l))
r=s.c
B.d.v(u,new A.N(r,new C.ddn(this),A.T(r).k("N<1,v>")))
return new A.D(B.ub,new A.a5(w,v,new A.an(B.a_,t,B.ab,B.f,u,t),t),t)}}
C.Kp.prototype={}
C.G8.prototype={}
C.bfJ.prototype={
gbjG(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aJV.prototype={}
C.bfK.prototype={
bOx(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.S()
v=A.I()
v.r=B.bD.j(0.75).gp(0)
v.c=2
v.d=B.bA
d.bo(new A.t(n,w),new A.t(m,w),v)
u=(n+m)/2
t=new A.aF(q.r,B.ag,null,null,A.a([],x.v))
q=w+5.5
t.D(new A.aY(u,q))
s=w-1.1
r=w-8.8
t.D(new A.l_(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.D(new A.l_(u+4.95,r,u+9.9,s,u,q))
t.D(new A.bs())
q=A.I()
q.r=B.c.gp(0)
d.ad(new A.t(u,w),9,q)
q=A.I()
q.r=B.bD.gp(0)
d.aH(t,q)},
bOv(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aY(a0,new C.ddH())
w=f.b
v=w+(B.d.gI(a0).b-w)/2
u=B.d.b3(a0,new C.ddI(f))
t=new A.N(a0,new C.ddJ(f),A.T(a0).k("N<1,K>")).c_(0,new C.ddK()).cI(0,1/0,B.vC)
w=f.a
d.bo(f,new A.t(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.L)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.G()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.mS(m)
i=Math.min(10,l/2)
l=$.S()
h=A.a([],q)
g=new A.aF(l.r,B.ag,null,null,h)
h.push(new A.aY(w,v-i))
l=j*i
h.push(new A.c4(w,v,w+l,v))
h.push(new A.aq(n-l,v))
h.push(new A.c4(n,v,n,v+i))
h.push(new A.aq(n,o.b))
k=e.G()
n=g.gbv().a.snapshot()
r.drawPath((g.e=new A.ce(n)).a,k)
k.delete()}},
a3(d,e){var w,v,u,t,s,r,q,p,o
$.S()
w=A.I()
w.r=B.bP.j(0.75).gp(0)
w.c=2.2
w.b=B.a9
w.d=B.bA
w.e=B.dQ
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.L)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bOv(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.G()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.L)(v),++s){q=v[s]
if(q.c)this.bOx(d,w,q.a,q.b)}},
av(d){return d.b!==this.b}}
C.bjx.prototype={
gc9G(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aBr
switch(w.c.a){case 0:return D.cVq
case 1:return D.d6k
case 2:return D.dnW}},
gc9J(){var w=this.c,v=C.htW(w.w),u=C.htW(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.J,q=t.gc9G(),p=t.c,o=N.bDS(p.f),n=t.gc9J(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gak(q).j(0.35),B.cH,10)],m),k=r?B.av:B.c,j=A.J(r?B.av:B.c,B.r,2)
if(o!=null)w=A.tu(B.A,s,B.ci,B.bW,!1,s,o,!1,s,s)
else{w=A.a([B.d.gI(q).j(0.18),B.d.gak(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gak(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a9(B.a5,B.a8,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hU(w,B.ap),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a9(B.ay,B.aD,B.x,q,s,s),B.a6),s,56,s,s,B.Gu,s,s,56)],v)
k=t.d
if(k>0){j=A.n(10)
w=A.J(r?B.av:B.c,B.r,1.5)
l.push(A.ap(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fuZ,s,s,s),B.f,s,s,new A.o(B.cf,s,w,j,s,s,B.n),s,s,s,s,D.bE5,s,s,s),s,s,s,-6,-4,s))}k=r?B.cr:B.c
j=A.n(8)
w=A.J(B.d.gI(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dC,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cr,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bm,s,s,s,s,s,s,s,s,7.5,s,s,B.a7,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aB(s,new A.a5(84,112,A.x(A.a([new A.an(B.a_,s,B.ab,B.f,l,s),B.au,A.p(s,A.x(p,B.m,s,B.e,B.O,0,B.p),B.f,s,D.b3l,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bEg,s,s,s)],v),B.m,s,B.e,B.i,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a3)}}
C.beM.prototype={
a3(d,e){var w,v,u,t,s,r,q
$.S()
w=A.I()
v=this.b
u=v?B.c:D.bg5
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.G()
t.drawCircle(r,s,1,q)
q.delete()}},
av(d){return d.b!==this.b}}
C.bxp.prototype={
B(d){var w=this,v=null,u=new C.fig(w),t=w.c,s=t?B.cr:B.c,r=A.n(12),q=u.$3(B.hQ,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bC:B.fg,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.yY,"Zoom out",w.e)
return A.aH(!1,B.a2,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bC:B.fg,v,v,v,1,v,v,v,v,v,22),u.$3(B.anV,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.O,0,B.p),B.f,s,4,v,B.dm,v,v,v,B.ai)}}
C.bmQ.prototype={
B(d){var w=this,v=null,u=B.bP.j(0.15),t=A.J(B.bP,B.r,2),s=w.e,r=x.p
t=A.aB(v,A.p(v,A.x(A.a([A.X(s?O.a0Y:A7.O6,B.bP,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fr7,v,v,v)],r),B.m,v,B.b9,B.i,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a3)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.foZ,B.K,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.N(s,new C.eTh(w),A.T(s).k("N<1,v>")))
B.d.v(u,t)}return new A.a5(84,v,A.x(u,B.m,v,B.e,B.i,0,B.p),v)}}
C.a_r.prototype={
R(){return new C.aCL()},
bu(){return this.Q.$0()},
ge1(){return this.w}}
C.aCL.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a2()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.ax()
r.d!==$&&A.aQ()
r.d=new A.as(new A.ba(t,B.b3,B.aO),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aQ()
r.e=new A.as(new A.ba(t,B.b3,B.aO),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aQ()
r.f=new A.as(new A.ba(t,B.b3,B.aO),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aQ()
r.r=new A.as(new A.ba(t,B.b3,B.aO),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aQ()
r.w=new A.as(new A.ba(t,B.b3,B.aO),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aQ()
r.x=new A.as(new A.ba(t,B.b3,B.aO),s)
t=u?q:v.c
r.y=t==null?D.yA:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.ibB(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
q(){var w,v=this,u=v.d
u===$&&A.c()
w=u.T$=$.ax()
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
v.a1()},
Q0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Q0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hj1(p.y,p.w)
w=3
return A.b(A.lt(t.a.w,B.IZ),$async$Q0)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b0d(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Q0)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hNO(p.y,p.w)
t.a.bu()
case 5:w=7
return A.b(Aa.H1(78,800),$async$Q0)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dtv(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Q0,v)},
c9I(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hV(B.o.u(1000*Date.now()),w,D.yA,null,null,null,"","","","","",1,!1,0)
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
s=v.aEQ(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a4(k,!1).O(s)},
aad(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aad=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.dtu(r),s,null,!0,!0,x.y),$async$aad)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a4(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$aad,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.J,i=new C.u6(j),h=l.a.e,g=A.T(h).k("Z<1>"),f=A.C(new A.Z(h,new C.dtE(l),g),g.k("M.E"))
h=j?B.e3:B.c
g=A.n(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bCv,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ap(k,A.he(A.aO(!1,k,!0,new A.D(B.m9,A.X(B.e9,B.p4,k,k,k,17),k),B.cO,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbJv(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jK:B.jb
t=N.bDS(l.as)
if(l.as==null)s=A.X(B.pa,j?B.bt:B.bm,k,k,k,40)
else s=k
s=A.au(A.aB(k,new A.an(B.a_,k,B.ab,B.t,A.a([A.ha(u,t,s,k,42),A.ap(0,A.ha(B.bP,k,D.bPc,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc9F(),k,k,k,k,k,k,!1,B.a3),k,k,k)
t=l.d
t===$&&A.c()
t=C.aCN(t,"Full name",B.mL,1,1,i,B.mo)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.W,new C.bjv(i,u,new C.dtF(l),k)],v),B.m,k,B.e,B.i,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bt:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bvX],q)
o=l.a.e
B.d.v(p,new A.N(o,new C.dtG(),A.T(o).k("N<1,ex<m?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bt:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bvZ],q)
B.d.v(q,new A.N(f,new C.dtI(),A.T(f).k("N<1,ex<m?>>")))
o=A.x(A.a([t,B.am,new C.adv(i,r,"Who is their parent?",p,new C.dtJ(l),k,o),B.aA,n,B.am,new C.adv(i,m,"Who is their spouse / partner?",q,new C.dtK(l),k,o)],v),B.ak,k,B.e,B.i,0,B.p)
q=l.f
q===$&&A.c()
q=C.aCN(q,"Birth date",D.amW,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aCN(m,"Birth place",B.a1c,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aCN(n,"Date of death (if deceased)",D.apb,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aCN(p,"Occupation",B.a2j,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.ab,B.t,w,k),B.aA,s,B.bx,new C.adw(i,"Identity",u,k),B.ae,new C.adw(i,"Family links",o,k),B.ae,new C.adw(i,"Life details",A.x(A.a([q,B.W,m,B.W,n,B.W,p,B.W,C.aCN(r,"Notes",B.lb,5,3,i,k)],v),B.m,k,B.e,B.i,0,B.p),k),B.ae,new C.aCM(i,"Child order",l.chq(l.at),new C.dtL(l),new C.dtM(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.h8t(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dtN(l):k
B.d.v(r,A.a([B.W,new C.aCM(i,"Visible in tree",u,w,new C.dtO(l),k)],v))}r.push(B.W)
w=j?B.jK:B.jb
u=A.n(14)
t=A.J(j?B.e8:B.bO,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iL(k,B.bP,k,B.af,k,new C.dtP(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bt:B.bm,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,O.ak0,k,k,k))
r.push(B.bx)
w=j?B.aP:B.av
j=j?B.e8:B.bO
r.push(A.B(A.a([A.E(A.dT(B.nK,new C.dtH(d),A.di(k,k,k,k,k,k,k,k,k,w,k,k,B.cl,k,new A.b8(A.n(14),B.a0),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bc,A.E(A.bH(D.f2l,k,l.gc9H(),A.bo(B.aW,k,k,0,B.c,k,B.cl,k,new A.b8(A.n(14),B.a0),k,k,k)),2)],v),B.m,k,B.e,B.i,0,k,k))
r.push(B.au)
return A.ep(B.f0,k,B.af,h,new A.a5(420,k,A.cg(A.x(r,B.ak,k,B.e,B.O,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),k),D.akQ,k,B.akd,new A.b8(g,B.a0),k,k)},
chq(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.adw.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bt:B.bm,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jK:B.jb,s=A.n(16)
return A.x(A.a([new A.D(D.alg,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.J(v?B.e8:B.bO,B.r,1),s,w,w,B.n),w,w,w,w,B.bg,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)}}
C.bjw.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.e3:B.c,r=A.n(12),q=A.J((t?B.e8:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aP:B.av,u,u,u,u,u,u,u,u,14,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.Y,!1,u,!0,B.t,u,A.aN(),v.d,u,u,u,u,u,2,A.bt(u,B.eF,u,B.vY,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bt:B.bm,u,u,u,u,u,u,u,u,u,u,u,B.cy,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bP,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.aj,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.aa,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a4,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.adv.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.e3:B.c,s=A.n(12),r=A.J((u?B.e8:B.bO).j(0.85),B.r,1),q=A.X(B.rz,u?B.bt:B.bm,v,v,v,v),p=A.l(v,v,u?B.aP:B.av,v,v,v,v,v,v,v,v,14,v,v,B.a7,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.e3:B.c
return A.p(v,new A.DW(A.T1(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bt:B.bm,v,v,v,v,v,v,v,v,v,v,v,B.cy,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.kJ,v,v,v)}}
C.bjv.prototype={
B(d){var w=new C.dtQ(this)
return A.B(A.a([w.$3(D.w6,"Male",B.ON),B.ac,w.$3(D.od,"Female",B.Oz),B.ac,w.$3(D.yA,"Other",B.nv)],x.p),B.m,null,B.e,B.i,0,null,null)}}
C.aCM.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jK:B.jb,r=A.n(14),q=A.J(t?B.e8:B.bO,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.av,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bt:B.bm,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.i,0,B.p),1),new C.aIX(u,B.yY,w.f,v),B.bn,new C.aIX(u,B.hQ,w.r,v)],o),B.m,v,B.e,B.i,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.eB,v,v,v)}}
C.aIX.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bP.j(0.12)
else w=s.c.a?B.e3:B.c
v=A.n(10)
u=A.n(10)
if(p)t=B.bP
else t=(s.c.a?B.bt:B.bm).j(0.4)
return A.aH(!1,B.a2,!0,v,A.aO(!1,u,!0,new A.a5(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.adx.prototype={
bSC(d){switch(d.a){case 0:return B.bP
case 1:return B.bD
case 2:return B.cY}},
bSD(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aYj(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
Al(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.e3:B.c
u=A.n(12)
t=A.J((w?B.e8:B.bO).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bP,p,p,p,18),B.as],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bt:B.bm,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.au,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.av,p,p,p,p,p,p,p,p,14,p,p,B.U,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.i,0,B.p),1))
return A.p(p,A.B(r,B.E,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cu,B.yi,p,p,1/0)},
aeN(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bt:B.bm,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jK:B.jb,s=A.n(16),r=A.J(v?B.e8:B.bO,B.r,1)
return A.x(A.a([new A.D(D.alg,u,w),A.p(w,A.x(e,B.m,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bT,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hyS(r,q),o=q.c,n=t.bSC(o),m=N.bDS(q.f),l=t.e.a,k=l?B.e3:B.c,j=A.n(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kK?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bt:B.bm,s,s,s,s,s,s,s,s,12,s,s,B.a7,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.J(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.I,12)],x.V)
u=n.j(0.12)
l=A.au(A.p(s,A.ha(u,m,m==null?A.X(B.pa,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.ev,s,s,s),s,s,s)
w=n.j(0.14)
v=A.n(20)
u=A.J(n.j(0.45),B.r,1)
v=A.au(A.p(s,A.d(t.bSD(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mI,s,s,s),s,s,s)
u=x.p
i=A.a([t.Al("Full name",i,B.mL)],u)
if(p>0)i.push(t.Al("Child order","#"+p,B.OF))
r=A.a([h,B.au,r,B.aQ,l,B.W,v,B.bx,t.aeN("Identity",i),B.ae,t.aeN("Life details",A.a([t.Al("Birth date",q.w,D.amW),t.Al("Birth place",q.x,B.a1c),t.Al("Date of death",q.y,D.apb),t.Al("Occupation",q.z,B.a2j)],u)),B.ae,t.aeN("Family links",A.a([t.Al("1. Parent",t.aYj(q.d),B.GI),t.Al("2. Spouse",t.aYj(q.e),B.GZ)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ae,t.aeN("Notes",A.a([t.Al("Notes",q,B.lb)],u))],u))
r.push(B.bx)
r.push(A.bH(B.Ko,s,new C.du_(d),A.bo(B.aW,s,s,s,s,s,B.cl,s,new A.b8(A.n(14),B.a0),s,s,s)))
return A.eT(s,k,new A.cU(B.lX,A.cg(A.x(r,B.ak,s,B.e,B.O,0,B.p),B.t,s,B.y,s,B.w1,s,s,B.ah),s),s,s,s,B.Gh,B.d8,s,new A.b8(j,B.a0),s)}}
C.G4.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bt:B.bm
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.w4,A.he(A.aH(!1,B.a2,!0,A.n(8),A.aO(!1,A.n(8),!0,new A.a5(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u),u)}}
C.aqa.prototype={
eZ(){var w,v,u=this,t=x.N,s=A.U(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a7().ae())
w=u.c
v=A.T(w).k("N<1,a8<m,@>>")
w=A.C(new A.N(w,new C.cd5(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.ji(w,new C.cd6(),t,x.fO))
return s}}
C.aqb.prototype={
R(){return new C.aEj(A.a([],x.bF))},
gd_(){return this.c}}
C.aEj.prototype={
Z(){this.a2()
this.JR()},
JR(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$JR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cd9(t.a.c),$async$JR)
case 3:r=e
w=4
return A.b(C.B_(t.a.c),$async$JR)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.ra(q,new C.e__(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.e_0(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$JR,v)},
yC(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
KB(d,e){return this.cGD(d,e)},
cGD(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$KB=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.e_4(q,e))
t=3
w=6
return A.b(d.$0(),$async$KB)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.e_5(q))
$.eX.mw()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$KB,v)},
Y0(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pk(r,s.c,s.e),$async$Y0)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KB(new C.dZX(t),"Preparing download\u2026"),$async$Y0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y0,v)},
Y4(d){return this.bQx(d)},
bQx(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pk(r,s.c,s.e),$async$Y4)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.KB(new C.dZY(t,d),"Preparing file\u2026"),$async$Y4)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y4,v)},
agJ(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$agJ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xt.ca().Ms(B.RI,B.uf,!0),$async$agJ)
case 7:r=e
o=r
q=o==null?null:J.fr(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aG.gan(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jC(o,0,null)
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
case 6:u=A.H0()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agJ,v)},
YH(d){return this.c01(d)},
c01(d){var w=0,v=A.j(x.H),u=this
var $async$YH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.KB(new C.dZZ(u,d),"Restoring family trees\u2026"),$async$YH)
case 2:return A.h(null,v)}})
return A.i($async$YH,v)},
YG(){var w=0,v=A.j(x.H),u,t=this,s
var $async$YG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.agJ(),$async$YG)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.YH(s),$async$YG)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YG,v)},
a2B(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2B=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pk(r,s.c,s.e),$async$a2B)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KB(new C.e_3(t),"Creating QR code\u2026"),$async$a2B)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2B,v)},
a2c(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2c=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Dc()){t.yC("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a4(s,!1).cc(A.e0(new C.e_1(),!0,null,x.N)),$async$a2c)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.YH(r),$async$a2c)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2c,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.J,n=o?B.Bb:B.iy,m=o?D.ais:B.aP,l=o?B.aJ:B.bO,k=o?B.aP:B.av,j=new C.ddL(n,m,l,k,o?B.bM:B.bm)
l=A.aG(p,p,p,p,A.X(B.eJ,k,p,p,p,20),p,p,p,new C.e_7(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eJ(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.ddj(!0,B.jD,B.aK,B.aK,q.r?p:q.gcxn(),j,s,"Show restore QR"),1),B.as],u))}s=q.e
r=q.r?p:q.gctx()
t.push(A.E(C.ddj(!s,B.jg,B.b6,B.br,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.i,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.ddj(!1,B.hR,B.aW,B.bP,q.r?p:q.gbQq(),j,"Photos & books included","Download all trees"),1),B.as],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.ddj(!1,R.z2,B.aE,B.aT,q.r?p:q.gc_Z(),j,s,"Upload backup file"),1))
l=A.a([new C.bfI(v,l,p),B.kU,new C.acN(j,"QR restore",p),B.W,t,B.d4,new C.acN(j,"Backup files",p),B.W,A.B(r,B.m,p,B.e,B.i,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kU,new C.acN(j,"One tree",p),B.W],u)
B.d.v(v,J.b6(q.d,new C.e_8(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cn(l,p,B.a_F,p,p,B.ah,!1)],u)
if(q.r){v=A.n(18)
t=A.J(B.aW.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dq,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ap(24,A.bm(!0,A.p(p,A.B(A.a([O.aRv,B.bc,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.U,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.BR,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c7(w,n,new A.an(B.a_,p,B.ab,B.t,l,p),p,!1,!1,p,p)}}
C.ddL.prototype={}
C.bfI.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.n(24)
u=A.a([new A.ac(0,B.G,B.aW.j(0.32),B.kq,28)],x.V)
t=A.ap(p,A.X(B.uz,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.n(18)
q=x.p
return A.p(p,new A.an(B.a_,p,B.ab,B.t,A.a([t,new A.D(B.aa,A.B(A.a([A.p(p,D.bY9,B.f,p,p,new A.o(s,p,A.J(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.oF,A.E(A.x(A.a([D.fA8,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.i,0,B.p),1)],q),B.E,p,B.e,B.i,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.c5a,B.n),p,p,p,p,p,p,p,p)}}
C.acN.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.f,w,w,new A.o(B.aW,w,w,A.n(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ac,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)}}
C.bfG.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.n(18),n=A.n(18),m=r.c,l=r.y,k=l?B.aK.j(0.4):m.c
k=A.J(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aK.j(0.1),B.cH,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.n(12)
t=r.r
s=A.J(t.j(0.35),B.r,1)
return A.aH(!1,B.a2,!0,q,A.aO(!1,o,!0,A.eK(A.db(new A.D(E.a_h,A.x(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.rw,q,q,q),B.ae,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bF,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cy,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.i,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)}}
C.bfL.prototype={
B(d){var w=this,v=null,u=A.n(18),t=A.n(18),s=w.c,r=A.J(s.c,B.r,1),q=B.aW.j(0.14),p=A.n(12),o=s.e,n=x.p
return A.aH(!1,B.a2,!0,v,A.aO(!1,u,!0,A.eK(new A.D(B.eS,A.B(A.a([A.p(v,D.bXo,B.f,v,v,new A.o(q,v,A.J(B.aW.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.rw,v,v,v),B.bc,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.i,0,B.p),1),A.X(B.hR,o,v,v,v,20)],n),B.m,v,B.e,B.i,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)}}
C.a_M.prototype={
R(){return new C.aEi()},
gd_(){return this.c}}
C.aEi.prototype={
Z(){this.a2()
this.a9L()},
a9L(){var w=0,v=A.j(x.H),u=this,t
var $async$a9L=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b2S(u.a.c,B.DD),$async$a9L)
case 2:t=e
if(u.c!=null)u.m(new C.dZS(u,t))
return A.h(null,v)}})
return A.i($async$a9L,v)},
ai6(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ai6=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dZT(q))
t=4
p=A.hkI(q.a.d,B.DD)
if(p==null){n=A.be("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.asu(n.e,m,l,B.DD,p,n.f),$async$ai6)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dZU(q))
q.c.K(x.q).f.U(D.fbl)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(B.a.ek(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dZV(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ai6,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.J,o=p?B.jt:B.q3,n=p?B.ix:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eJ(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fQv,q,q,q,1,q,!0)
w=A.n(24)
v=A.J(B.aW.j(0.35),B.r,1)
u=A.q0(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aW,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.P,u,B.bx,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.al,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.m,q,B.b9,B.i,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.aa,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.bs,q,q,q,q,q,q,q,q,q,q,q,B.U,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcte()
if(u)u=B.JS
else u=A.X(r.e===!0?B.hx:B.amV,q,q,q,q,q)
w=A.a([w,B.ae,v,B.ae,new A.a5(1/0,q,A.ew(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ce,q,q,q),t,A.di(q,q,q,q,q,q,q,q,q,B.aW,q,B.h0,q,q,q,new A.ay(B.aW.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.i3,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aB:B.al,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.W)
w.push(new A.a5(1/0,q,A.bH(B.An,q,new C.dZW(d),A.bo(B.aW,q,q,q,q,B.h0,q,q,q,q,q,q)),q))
return A.c7(m,o,new A.D(B.aa,A.x(w,B.m,q,B.e,B.i,0,B.p),q),q,!1,!1,q,q)}}
C.a_N.prototype={
R(){return new C.bl_(A.zz(B.y7,B.nQ,B.uH))}}
C.bl_.prototype={
q(){this.d.q()
this.a1()},
B(d){var w=null
return A.c7(A.eJ(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fIk,w,w,w,1,w,!0),B.w,A.zy(this.d,B.bW,new C.e_9(this,d)),w,!1,!1,w,w)}}
C.aZK.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Rb,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lO.prototype={}
C.a6E.prototype={
R(){return new C.bkG(null,null)}}
C.bkG.prototype={
Z(){var w=this,v=null
w.a2()
w.d=A.bn(v,B.rq,v,1,v,w)
w.e=A.bn(v,B.qa,v,1,v,w)
w.a.toString
w.d.cM(0)
w.e.cM(0)},
bz(d){var w,v,u=this
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
this.bwV()},
B(d){var w,v,u=this,t=B.d.dK(D.a5b,new C.dLA(u),new C.dLB())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.czT(A.cb(new A.h8(A.a([w,v],x.dS)),new C.dLC(u,t),null),!0)}}
C.bkF.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b1M(d,e)
break
case"house":p.m9(d,e,D.dbi)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdC()
$.S()
t=A.I()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ad(new A.t(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.me(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.B3(d,e,12)
p.ye(d,e,B.l3,5,14)
break
case"grocery":p.ci9(d,e)
break
case"calculator":p.chR(d,e)
break
case"lumber":p.cih(d,e)
break
case"kitchen":p.cic(d,e)
break
case"landscape":p.m9(d,e,D.dbT)
s=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.D(new A.aY(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.D(new A.c4(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.D(new A.c4(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.D(new A.aq(t,w))
s.D(new A.aq(0,w))
s.D(new A.bs())
w=A.I()
w.r=B.ei.j(0.85).gp(0)
d.aH(s,w)
p.B3(d,e,8)
p.ye(d,e,B.im,4,18)
break
case"plumbing":p.ciq(d,e)
break
case"electrical":p.m9(d,e,D.dna)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.S()
u=A.I()
u.r=B.c.j(q*0.12).gp(0)
d.aO(new A.a3(0,0,0+e.a,0+e.b),u)
p.me(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.me(d,e,B.m1.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.B3(d,e,10)
break
case"store":p.ciA(d,e)
break
case"paint_remodel":p.cil(d,e)
break
case"roofing":p.cis(d,e)
break
case"warehouse":p.ciH(d,e)
break
case"vehicles":p.ciF(d,e)
break
case"farm":p.ci3(d,e)
break
case"restaurant":p.cir(d,e)
break
case"tools":p.ciD(d,e)
break
case"wallet":p.ciG(d,e)
break
case"concrete":p.chX(d,e)
break
case"blueprint":p.chP(d,e)
break
default:p.b1M(d,e)}},
m9(d,e,f){var w,v=new A.a3(0,0,0+e.a,0+e.b)
$.S()
w=A.I()
w.sam(new A.a9(B.ay,B.aD,B.x,f,null,null).aA(0,v))
d.aO(v,w)},
me(d,e,f,g,h){var w,v,u,t,s,r,q=new A.t(e.a/2,e.b/2),p=e.gdC()/2-h
$.S()
w=A.I()
w.b=B.a9
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bY(q,p)
r=w.G()
v.drawArc.apply(v,[A.bG(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
ye(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gdC()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.S()
q=new A.ao(B.Q,B.M,B.S,B.T,B.R)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.G()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
B3(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.F(s*0.17,0.9)
p=B.k.F(s*0.23,0.85)
$.S()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.G()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
b1M(d,e){var w,v=this
v.m9(d,e,D.dlw)
w=v.c
v.me(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.me(d,e,B.bL.j(0.45),-w*3.141592653589793*1.4,22)
v.bOr(d,e,B.hZ,w)
v.ye(d,e,B.c.j(0.7),6,8)},
bOr(d,e,f,g){var w,v,u,t,s,r,q,p
$.S()
w=A.I()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.G()
s.drawRect(A.bG(new A.a3(16,q,t,q+3)),p)
p.delete()}},
ci9(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m9(d,e,D.cqN)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.F(s,3)
p=Math.sin(r)
o=B.o.ao(s,3)
n=Math.cos(r*0.8)
m=B.o.F(s,2)
$.S()
l=new A.ao(B.Q,B.M,B.S,B.T,B.R)
l.r=D.d9v[B.o.F(s,4)].j(0.85).gp(0)
k=l.G()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.me(d,e,B.c.j(0.35),w,16)
j.ye(d,e,B.im,5,12)},
chR(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.m9(d,e,D.cqV)
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
p=A.fw(g,g,g,g,g,B.a4,B.bX,g,B.dA,B.bV)
for(o=0;o<6;++o){n=v+o*0.9
r=D.ddC[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.saX(0,new A.eu(r,g,g,B.cN,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.ej()
p.a3(d,new A.t(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ao(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cqX[o]
l=B.kA.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.saX(0,new A.eu(m,g,g,B.cN,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.ej()
p.a3(d,new A.t(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ao(o,3)*0.38)+Math.sin(n)*6))}h.me(d,e,B.c.j(0.35),w*1.5,14)
h.me(d,e,B.eG.j(0.55),-v*3.141592653589793*2,8)
h.me(d,e,B.xR.j(0.4),r*2.8,22)
h.ye(d,e,B.pT,8,10)
h.B3(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.F(w+o*0.22,0.9)
$.S()
r=new A.ao(B.Q,B.M,B.S,B.T,B.R)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.G()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
cih(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m9(d,e,W.ayH)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.br(new A.a3(20,q,u,q+10),B.hE)
$.S()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=A.ar(B.fU,B.oX,(r+1)/2).gp(0)
n=o.G()
t.drawRRect(A.e6(p),n)
n.delete()}m.me(d,e,B.fU.j(0.35),w,15)
m.B3(d,e,8)},
cic(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m9(d,e,D.da_)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.F(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.F(r*0.13,0.7)
$.S()
l=new A.ao(B.Q,B.M,B.S,B.T,B.R)
l.r=B.c.j(0.25+p*0.55).gp(0)
k=l.G()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.me(d,e,B.bL.j(0.4),-w*3.141592653589793*2.2,11)
j.ye(d,e,B.pQ,4,14)},
ciq(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.m9(d,e,D.cZn)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.F(s,0.12)
$.S()
n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.G()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.ye(d,e,B.p2,6,12)
l.me(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
ciA(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.m9(d,e,D.cEz)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.br(new A.a3(q,14,q+u,22),B.ic)
$.S()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.r=A.ar(B.fb,B.bL,(r+1)/2).gp(0)
o=p.G()
t.drawRRect(A.e6(q),o)
o.delete()}n.me(d,e,B.c.j(0.3),w,16)
n.B3(d,e,8)
n.ye(d,e,B.vH,5,13)},
cil(d,e){var w,v,u,t,s,r,q,p,o
this.m9(d,e,D.d4A)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.F(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.br(new A.a3(q,p,q+8,p+(18+r*22)),B.hF)
$.S()
q=new A.ao(B.Q,B.M,B.S,B.T,B.R)
q.r=[B.ii,B.dt,B.bL,B.es][s].j(0.85).gp(0)
o=q.G()
t.drawRRect(A.e6(p),o)
o.delete()}this.me(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cis(d,e){var w,v,u,t,s,r,q,p,o
this.m9(d,e,D.d1Z)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.F(v+s*0.12,0.75))
q=B.o.F(s,4)*0.22
$.S()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.G()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.ye(d,e,B.cq,7,11)},
ciH(d,e){var w,v,u,t,s,r,q,p,o,n
this.m9(d,e,D.cHi)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.br(new A.a3(p,o,p+(t-r*8),o+16),B.hE)
$.S()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.r=A.ar(B.cq,B.aP,(Math.sin(q)+1)/2).gp(0)
n=p.G()
s.drawRRect(A.e6(o),n)
n.delete()}this.me(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
ciF(d,e){var w,v,u,t,s,r,q,p,o
this.m9(d,e,D.drh)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.F(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.F(s,2)*0.08)
q=A.br(new A.a3(r,q,r+28,q+8),B.hE)
$.S()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.G()
t.drawRRect(A.e6(q),o)
o.delete()}this.B3(d,e,6)},
ci3(d,e){var w,v,u,t,s,r,q,p,o,n
this.m9(d,e,D.d8z)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.S()
s=A.I()
s.r=B.m1.j(0.75).gp(0)
d.ad(new A.t(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=B.he.j(0.85).gp(0)
o.c=3
n=o.G()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.me(d,e,B.m1.j(0.35),w,14)},
cir(d,e){var w,v,u,t,s,r,q,p,o=this
o.m9(d,e,D.db7)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.bK(new A.t(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.S()
q=new A.ao(B.Q,B.M,B.S,B.T,B.R)
q.r=B.c.j(0.22).gp(0)
p=q.G()
t.drawOval(A.bG(r),p)
p.delete()}o.ye(d,e,B.pQ,5,16)
o.B3(d,e,7)},
ciD(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m9(d,e,D.doH)
w=m.c
v=w*3.141592653589793
m.me(d,e,B.oX.j(0.55),v*3,10)
m.me(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.S()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=B.oX.j(0.8).gp(0)
n=o.G()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
ciG(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m9(d,e,D.drY)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.br(new A.a3(p,o,p+36,o+22),B.ic)
$.S()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.r=A.ar(B.im,B.m1,q).gp(0)
n=p.G()
s.drawRRect(A.e6(o),n)
n.delete()}m.B3(d,e,9)
m.me(d,e,B.c.j(0.4),w*2.2,12)},
chX(d,e){var w,v,u,t,s,r,q,p,o,n
this.m9(d,e,D.dgs)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bY(new A.t(v,u),34)
$.S()
s=A.I()
s.b=B.a9
s.c=5
s.r=B.c.j(0.45).gp(0)
d.e3(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=B.bO.j(0.85).gp(0)
n=o.G()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
chP(d,e){var w,v,u,t,s,r,q,p
this.m9(d,e,D.dcd)
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
d.aO(new A.a3(0,p,0+v,p+6),u)
this.me(d,e,B.l3.j(0.45),-t*3.141592653589793*2,11)},
av(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.atd.prototype={
a_P(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_P=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aQT(),$async$a_P)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a8R(s),$async$a_P)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a_P,v)},
agK(d){return this.ckY(d)},
ckY(d){var w=0,v=A.j(x.H),u=this,t
var $async$agK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.ik0(d),$async$agK)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$agK,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.J?B.jK:B.jb
w=x.p
v=A.a([C.aRh(!0,B.r2,1/0,B.qn,t,r,1/0)],w)
if(!q){u=A.a([B.L,B.w.j(0.35)],x.O)
v.push(A.c3(new A.bM(B.b_,t,t,new A.D(B.vU,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.U,t,t,!0,t,t,t,t,t,B.azE,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a9(B.b_,B.b5,B.x,u,t,t),B.n),B.bh))}v.push(A.ap(8,A.B(A.a([A.E(A.dl(D.bQY,D.fwn,new C.clE(this,d),A.bo(B.aW,t,t,t,B.c,t,B.jQ,t,t,t,t,B.cc)),1),B.ac,A.E(A.ew(D.bZp,D.fLt,this.gcbV(),A.di(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jQ,t,t,D.b1T,t,t,t,B.cc)),1)],w),B.m,t,B.e,B.i,0,t,t),t,t,8,8,t,t))
return new A.fG(1.7777777777777777,A.aH(!1,B.a2,!0,B.r2,new A.an(B.a_,t,B.b2,B.t,v,t),B.ap,s,0,t,t,t,t,t,B.ai),t)}}
C.aMl.prototype={
aU(){this.b1()
this.b0()
this.dH()},
q(){var w=this,v=w.b7$
if(v!=null)v.a5(0,w.gdD())
w.b7$=null
w.a1()}}
C.aUh.prototype={}
C.aUg.prototype={}
C.aSf.prototype={}
C.Zp.prototype={
R(){return new C.azv()}}
C.azv.prototype={
Z(){var w,v,u=this
u.a2()
u.a.toString
w=new A.ba("",B.b3,B.aO)
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.as(w,v)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.ax()
w.P$=0
this.a1()},
Kr(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.K(x.q).f.U(D.fbQ)
return}t=u.c
t.toString
v=u.e
A.a4(t,!1).O(new C.aUh(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.J,l=m?B.e3:B.c,k=A.n(20),j=A.p(n,D.bZ4,B.f,n,n,new A.o(B.aW.j(0.15),n,n,A.n(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.av,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bF,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bt:B.bm,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.i,0,B.p),1)
j=A.B(A.a([j,B.bc,i,A.aG(n,n,n,n,A.X(B.cz,m?B.bt:B.bm,n,n,n,n),n,n,n,new C.d51(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.i,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bt:B.bm,n,n,n,n,n,n,n,n,12,n,n,B.U,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bt:B.bm,n,n,n,n,n,n,n,n,11,n,n,B.cy,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hkY(new C.d52(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.av,n,n,n,n,n,n,n,n,n,n,n,B.a7,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jK:B.jb
r=A.n(12)
q=A.n(12)
p=m?B.e8:B.bO
t=A.aM(n,B.Y,!0,n,!0,B.t,n,A.aN(),u,n,n,n,n,n,2,A.bt(n,new A.b5(4,r,B.dk),n,n,n,n,n,n,!0,new A.b5(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d53(o),n,!1,n,n,!1,n,!0,n,B.aa,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a4,n,A0.JZ,n,n,n,n)
u=m?B.aP:B.av
m=m?B.e8:B.bO
return A.eT(n,l,new A.cU(B.lX,A.cg(A.x(A.a([j,B.aQ,i,B.au,w,B.P,v,B.aQ,t,B.bx,A.B(A.a([A.E(A.dT(B.di,new C.d54(d),A.di(n,n,n,n,n,n,n,n,n,u,n,n,B.cl,n,new A.b8(A.n(12),B.a0),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.as,A.E(A.bH(D.fLI,n,o.ga2X(),A.bo(B.aW,n,n,n,B.c,n,B.cl,n,new A.b8(A.n(12),B.a0),n,n,n)),1)],h),B.m,n,B.e,B.i,0,n,n)],h),B.E,n,B.e,B.O,0,B.p),B.t,n,B.y,n,B.BS,n,n,B.ah),n),n,n,n,A6.BT,B.d8,n,new A.b8(k,B.a0),n)}}
C.Zo.prototype={
R(){return new C.azu()}}
C.azu.prototype={
Z(){this.a2()
var w=$.ax()
this.d!==$&&A.aQ()
this.d=new A.as(B.at,w)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.ax()
w.P$=0
this.a1()},
Kr(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.K(x.q).f.U(D.f9t)
return}v=this.c
v.toString
A.a4(v,!1).O(new C.aUg(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.J,o=p?B.e3:B.c,n=A.n(20),m=A.p(q,D.bVA,B.f,q,q,new A.o(B.bP.j(0.15),q,q,A.n(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bF,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bt:B.bm,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.i,0,B.p),1)
m=A.B(A.a([m,B.bc,l,A.aG(q,q,q,q,A.X(B.cz,p?B.bt:B.bm,q,q,q,q),q,q,q,new C.d4Y(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.i,0,q,q)
l=B.aW.j(p?0.12:0.08)
w=A.n(12)
v=A.J(B.aW.j(0.25),B.r,1)
u=A.X(B.amH,B.aW.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.as,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.i,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bE,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,q,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jK:B.jb
t=A.n(12)
s=A.n(12)
r=p?B.e8:B.bO
v=A.aM(q,B.Y,!0,q,!0,B.t,q,A.aN(),w,q,q,q,q,q,2,A.bt(q,new A.b5(4,t,B.dk),q,q,q,q,q,q,!0,new A.b5(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d4Z(this),q,!1,q,q,!1,q,!0,q,B.aa,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a4,q,B.kV,q,q,q,q)
w=p?B.aP:B.av
p=p?B.e8:B.bO
return A.eT(q,o,new A.cU(B.lX,A.cg(A.x(A.a([m,B.aQ,l,B.aA,v,B.bx,A.B(A.a([A.E(A.dT(B.di,new C.d5_(d),A.di(q,q,q,q,q,q,q,q,q,w,q,q,B.cl,q,new A.b8(A.n(12),B.a0),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.as,A.E(A.bH(D.fSM,q,this.ga2X(),A.bo(B.bP,q,q,q,B.c,q,B.cl,q,new A.b8(A.n(12),B.a0),q,q,q)),1)],k),B.m,q,B.e,B.i,0,q,q)],k),B.E,q,B.e,B.O,0,B.p),B.t,q,B.y,q,B.BS,q,q,B.ah),q),q,q,q,A6.BT,B.d8,q,new A.b8(n,B.a0),q)}}
C.YW.prototype={
R(){return new C.aya()}}
C.aya.prototype={
Z(){var w,v=this
v.a2()
w=$.ax()
v.d!==$&&A.aQ()
v.d=new A.as(B.at,w)
v.e!==$&&A.aQ()
v.e=new A.as(new A.ba("1",B.b3,B.aO),w)
v.f!==$&&A.aQ()
v.f=new A.as(B.at,w)
v.r!==$&&A.aQ()
v.r=new A.as(B.at,w)},
q(){var w,v=this,u=v.d
u===$&&A.c()
w=u.T$=$.ax()
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
v.a1()},
gJM(){var w,v=this.e
v===$&&A.c()
w=A.d4(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gajT(){var w=this.f
w===$&&A.c()
w=A.d4(B.a.i(w.a.a))
return w==null?0:w},
gb4A(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aPh(d){var w,v=B.k.E(this.gJM()+d,0.25,999999),u=B.k.jj(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.ac(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.saX(0,u)
this.m(new C.cDs())},
ayx(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aW,w,w,w,20):w,u=d.a,t=u?B.jK:B.jb,s=A.n(14),r=A.n(14)
u=u?B.e8:B.bO
return A.bt(w,new A.b5(4,s,B.dk),w,B.bE,w,w,w,w,!0,new A.b5(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b5(4,A.n(14),B.acE),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
cbW(d,e,f){return this.ayx(d,e,f,null)},
Kr(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gajT()<=0){s.c.K(x.q).f.U(D.fdI)
return}r=s.c
r.toString
v=s.gJM()
u=s.gajT()
t=s.gb4A()
A.a4(r,!1).O(new C.aSf(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.J,m=new C.u6(n),l=n?B.e3:B.c,k=A.n(24),j=x.O,i=A.a([B.aW.j(0.22),B.bP.j(0.14)],j),h=A.n(14)
i=A.p(o,D.bOT,B.f,o,o,new A.o(o,o,A.J(B.aW.j(0.35),B.r,1),h,o,new A.a9(B.a5,B.a8,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bF,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bt:B.bm,o,o,o,o,o,o,o,o,12,o,o,B.cy,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1)
i=A.B(A.a([i,B.bc,h,A.aG(o,o,o,o,A.X(B.cz,n?B.bt:B.bm,o,o,o,o),o,o,o,new C.cDy(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.i,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.Y,!0,o,!0,B.t,o,A.aN(),h,o,o,o,o,o,2,p.ayx(m,"Item name (optional)","Lumber, paint, labor\u2026",B.OM),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,A0.JZ,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bt:B.bm,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jK:B.jb
t=A.n(14)
s=A.J(n?B.e8:B.bO,B.r,1)
r=A.aG(o,o,o,o,A.X(B.yY,n?B.aP:B.av,o,o,o,20),o,o,o,new C.cDz(p),o,o,o,o,o,B.cc)
q=p.e
q===$&&A.c()
q=A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),q,o,o,o,o,o,2,D.c_Y,B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.e1,o,o,o,1,o,o,!1,"\u2022",o,new C.cDA(p),o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a5(52,o,q,o),A.aG(o,o,o,o,A.X(B.hQ,n?B.aP:B.av,o,o,o,20),o,o,o,new C.cDB(p),o,o,o,o,o,B.cc)],w),B.m,o,B.e,B.O,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,16,o,o,B.U,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.as,A.E(A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),t,o,o,o,o,o,2,p.ayx(m,"Amount","0.00",B.i4),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.e1,o,o,o,1,o,o,!1,"\u2022",o,new C.cDC(p),o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a4,o,B.ao,o,o,o,o),1)],w),B.E,o,B.e,B.i,0,o,o)
t=x.gv
u=A.C(new A.N(D.d54,new C.cDD(p,m),t),t.k("ak.E"))
i=A.a([i,B.bx,v,B.aA,h,B.P,s,B.ae,A.bX(B.bG,u,B.bq,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.W,A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),h,o,o,o,o,o,2,p.cbW(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cDE(p),o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,B.kV,o,o,o,o)],w))}i.push(B.aQ)
h=B.aW.j(n?0.18:0.1)
j=A.a([h,B.bP.j(n?0.12:0.06)],j)
h=A.n(16)
v=A.J(B.aW.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bt:B.bm,o,o,o,o,o,o,o,o,11,o,o,B.U,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJM()===B.k.jj(p.gJM())?B.k.N(p.gJM()):p.gJM()
s=p.gb4A()
r=A.B1(p.gajT())
i.push(A.p(o,A.B(A.a([A.E(A.x(A.a([u,B.au,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bt:B.bm,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1),C.bEF(p.gJM()*p.gajT(),B.b0,!1,B.u)],w),B.m,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a9(B.a5,B.a8,B.x,j,o,o),B.n),o,o,o,o,B.jf,o,o,o))
i.push(B.bx)
j=A.n(14)
h=n?B.e8:B.bO
h=A.di(o,o,o,o,o,o,o,o,o,o,o,o,B.cl,o,new A.b8(j,B.a0),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.B(A.a([A.E(A.dT(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,B.U,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cDF(d),h),1),B.as,A.E(A.dl(D.aqg,D.fOF,p.ga2X(),A.bo(B.aW,o,o,0,B.c,o,B.cl,o,new A.b8(A.n(14),B.a0),o,o,o)),2)],w),B.m,o,B.e,B.i,0,o,o))
return A.eT(o,l,new A.cU(A5.ad3,A.cg(A.x(i,B.ak,o,B.e,B.O,0,B.p),B.t,o,B.y,o,Ak.rv,o,o,B.ah),o),o,o,o,B.Nx,B.d8,o,new A.b8(k,B.a0),o)}}
C.a1z.prototype={
R(){return new C.bxf()}}
C.bxf.prototype={
Z(){var w,v,u=this
u.a2()
w=u.a.e
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.as(new A.ba(w,B.b3,B.aO),v)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.ax()
w.P$=0
this.a1()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.J,q=r?B.e3:B.c,p=A.n(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aP:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aP:B.av,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jK:B.jb
v=A.aM(s,B.Y,!0,s,!0,B.t,s,A.aN(),w,s,s,s,s,s,2,A.bt(s,new A.b5(4,A.n(12),B.dk),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fhA(t,d),s,!1,s,s,!1,s,!0,s,B.aa,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a4,s,B.ao,s,s,s,s)
u=A.E(A.dT(B.di,new C.fhB(d),s),1)
r=A.bo(B.bP,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eT(s,q,new A.D(B.BS,A.x(A.a([o,B.aA,v,B.aQ,A.B(A.a([u,B.as,A.E(A.bH(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fhC(t,d),r),1)],w),B.m,s,B.e,B.i,0,s,s)],w),B.m,s,B.e,B.O,0,B.p),s),s,s,s,s,B.d8,s,new A.b8(p,B.a0),s)}}
C.abR.prototype={
a6(){return"WorksheetFrameStyle."+this.b}}
C.FU.prototype={
R(){return new C.bxd(null,null)}}
C.bxd.prototype={
Z(){var w,v=this
v.a2()
w=A.bn(null,D.bww,null,1,null,v)
w.cM(0)
v.d!==$&&A.aQ()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bzd()},
gbAJ(){switch(this.a.r.a){case 1:return A.a([B.aW,B.bP,B.b0],x.O)
case 2:return A.a([B.bv,B.aW,B.b0],x.O)
case 3:return A.a([B.aK,B.cf,B.kc],x.O)
case 4:return A.a([B.hf,B.bP,B.ff],x.O)
case 0:return A.a([B.aW,B.bP,B.b0],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.er(A.cb(v,new C.fhy(this,new C.u6(w.ax.a===B.J)),null),null)}}
C.ay3.prototype={
R(){return new C.bxe(null,null)}}
C.bxe.prototype={
Z(){var w,v=this
v.a2()
w=A.bn(null,B.nl,null,1,null,v)
w.cM(0)
v.d!==$&&A.aQ()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bze()},
B(d){var w=this.d
w===$&&A.c()
return A.cb(w,new C.fhz(this),null)}}
C.bxc.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.br(new A.a3(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aP(w,w))
u=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
u.D(new A.iR(v))
w=A.I()
w.b=B.a9
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.az(v,w)
w=A.I()
w.b=B.a9
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.aH(u,w)
w=A.xr(u)
t=A.a([],x.U)
w=new A.tp(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b9(A.jA(y.B));--r
q=new A.Bs(w,r)
w.im()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aSJ(d,q,r,o,0,0.2,4.2,0.92)
p.aSJ(d,q,r,s,0.52,0.11,3.2,0.58)}},
aSJ(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.F(g+h,1)*f,s=A.hGW(e.a.a,e,t,t+f*i,!0),r=A.bD0(s.gbv().a.getBounds())
$.S()
w=A.I()
w.b=B.a9
w.c=j
w.d=B.bA
w.f=!0
v=this.f
u=k*this.e
w.sam(new A.a9(B.a5,B.a8,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.HX,null).aA(0,r))
d.aH(s,w)},
av(d){return d.b!==this.b||d.d!==this.d}}
C.aOr.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.aOs.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.u6.prototype={}
C.atc.prototype={
R(){return new C.aFN()},
ge1(){return this.c}}
C.aFN.prototype={
Z(){var w=this
w.a2()
w.d=w.a.d
w.ahA()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.LB(w,v)
this.a1()},
ahA(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ahA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bD8(t.c,t.d.a),$async$ahA)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eQr(u,s))
return A.h(null,v)}})
return A.i($async$ahA,v)},
Qr(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Qr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eQi(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.LB(t,s),$async$Qr)
case 2:if(u.c!=null)u.m(new C.eQj(u))
return A.h(null,v)}})
return A.i($async$Qr,v)},
QY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$QY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.eQp(t,new C.u6(p.ax.a===B.J)),s,null,!0,!0,x.T),$async$QY)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a8R(q),$async$QY)
case 6:case 5:t.m(new C.eQq(t,r))
w=7
return A.b(t.Qr(),$async$QY)
case 7:case 1:return A.h(u,v)}})
return A.i($async$QY,v)},
Wd(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.ijM(r),$async$Wd)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eQd(t,new C.rf(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Qr(),$async$Wd)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wd,v)},
ch0(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hyO(t,new C.eQh(u),w,v)},
abx(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bI(new A.ay(v,2.5,B.r,-1),B.a0,B.a0,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b1F,w,w,B.n),w,22,w,w,w,w,w,22)},
aaB(d){return this.bMG(d)},
bMG(d){var w=0,v=A.j(x.H),u=this
var $async$aaB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eQg(u,d))
w=2
return A.b(u.Qr(),$async$aaB)
case 2:return A.h(null,v)}})
return A.i($async$aaB,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.J,e=f?B.c1:B.iy,d=A.n(8),a0=A.X(Z.a0V,f?B.bt:B.bm,g,g,g,16),a1=x.p
a0=A.aO(!1,d,!0,new A.D(B.Go,A.B(A.a([a0,B.bn,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bt:B.bm,g,g,g,g,g,g,g,g,g,g,g,B.a7,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.O,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eQs(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.a_,g,B.b2,B.t,A.a([A.bx(A.n(22),C.aRh(!0,A.n(22),1/0,B.qn,g,d,1/0),B.ap),A.ap(10,A.dl(D.bTx,D.fR3,h.gb2w(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.h6,g,new A.b8(A.n(12),B.a0),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.n(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aW.j(f?0.5:0.38),B.eU,22),new A.ac(-4,B.G,B.bP.j(0.2),B.I,32)],w)
u=A.n(17)
t=A.J(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.I,10)],w)
s=A.n(16)
r=h.d
v=A.p(g,A.p(g,A.bx(s,new A.an(B.a_,g,B.b2,B.t,A.a([C.aRh(!0,A.n(16),1/0,B.Oh,g,r.c,1/0),A.c3(g,new A.o(g,g,g,g,g,new A.a9(B.b_,B.b5,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bh),A.ap(g,h.abx(!0),g,g,8,g,8,g),A.ap(g,A.cAD(h.abx(!0),!0,!1),g,g,g,8,8,g),A.ap(8,A.cAD(h.abx(!1),!1,!0),g,g,8,g,g,g),A.ap(8,A.cAD(h.abx(!1),!0,!0),g,g,g,8,g,g),A.ap(10,A.dl(D.bPt,D.fKp,h.gb2w(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.h6,g,new A.b8(A.n(12),B.a0),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.c1F,B.n),g,g,g,g,B.m9,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.n(22)
u=x.O
u=f?A.a([D.bco,B.nZ,B.h3],u):A.a([B.b0,B.aW,B.bP],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aW.j(f?0.45:0.35),B.eU,24)],t)
r=A.n(22)
p=A.ap(g,A.X(B.jT,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.n(20)
m=A.J(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h4,g,g,g)],a1),B.m,g,B.e,B.i,0,g,g),B.aA,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bEF(h.d.gxe(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cy,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.i,0,B.p),1)
n=A.n(14)
m=A.n(14)
l=B.c.j(0.12)
k=A.J(B.hh.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aK.j(0.28),B.cH,14)],t)
j=B.aK.j(0.22)
i=A.n(10)
u=A.p(g,A.bx(r,new A.an(B.a_,g,B.ab,B.t,A.a([p,new A.D(D.bBg,A.B(A.a([o,B.as,A.aH(!1,B.a2,!0,g,A.aO(!1,n,!0,A.eK(new A.D(V.w_,A.x(A.a([A.p(g,D.apR,B.f,g,g,new A.o(j,g,A.J(B.aK.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cm,g,g,g),B.fG,D.fzb],a1),B.m,g,B.e,B.O,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gch_(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.ai)],a1),B.m,g,B.e,B.i,0,g,g),g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,g,v,s,new A.a9(B.ay,B.aD,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fG(1.7777777777777777,d,g),B.aQ,w,B.P,u,B.bx,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b1,A.dl(Aw.a2G,D.fx2,h.gbBb(),A.bo(B.aW,g,g,g,B.c,g,B.ip,g,new A.b8(A.n(12),B.a0),g,g,g))],a1),B.m,g,B.e,B.i,0,g,g),B.ae],a1)
w=h.d.d
if(w.length===0){w=f?B.e3:B.c
v=A.n(14)
u=A.J(f?B.e8:B.bO,B.r,1)
t=A.X(B.a1f,f?B.bt:B.bm,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,g,g,g,B.U,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.W,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bt:B.bm,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.m,g,B.e,B.i,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.qi,g,g,1/0))}else B.d.v(d,new A.N(w,new C.eQt(h,new C.u6(f)),A.T(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.BH,A.au(A.mX(g,f?B.bt:B.bm,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c7(g,e,A.bm(!0,A.x(A.a([new A.D(B.BL,a0,g),A.E(A.cg(A.x(d,B.E,g,B.e,B.i,0,B.p),B.t,g,B.y,g,E.yp,g,g,B.ah),1)],a1),B.E,g,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bER(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.e3:B.c,p=A.n(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cH,12)],x.V),n=A.n(16),m=A.p(u,u,B.f,u,u,D.b4q,u,u,u,u,u,u,u,5),l=B.aW.j(r?0.22:0.12),k=A.n(12)
l=A.p(u,A.X(s?B.i5:B.hl,B.b0,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bJ
else{k=x.p
t=A.a([A.d(t,u,2,B.a1,u,u,u,A.l(u,u,r?B.aP:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcX5()
v=A.B1(d.d)
B.d.v(t,A.a([B.au,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bt:B.bm,u,u,u,u,u,u,u,u,12,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.b9,B.O,0,B.p)}t=A.E(t,1)
k=A.a([B.aW.j(0.14),B.bP.j(0.1)],x.O)
w=A.n(12)
k=A.p(u,C.bEF(d.c*d.d,B.b0,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a9(B.a5,B.a8,B.x,k,u,u),B.n),u,u,u,u,B.h6,u,u,u)
w=x.p
return A.p(u,A.bx(n,new A.Ek(A.B(A.a([m,A.E(new A.D(B.ajU,A.B(A.a([l,B.bc,t,B.ac,k,A.aG(u,u,u,u,A.X(B.cz,(r?B.bt:B.bm).j(0.75),u,u,u,20),u,u,u,new C.eQe(this,d),u,u,u,u,u,B.cc)],w),B.m,u,B.e,B.i,0,u,u),u),1)],w),B.ak,u,B.e,B.i,0,u,u),u),B.ap),B.f,u,D.b3h,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d2,u,u,u,u)}}
C.adS.prototype={
EC(d){return this.bO3(d)},
bO3(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$EC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pk(d,o,!1),$async$EC)
case 3:if(!f||d.e==null){w=1
break}A.a4(d,!1).O(null)
w=4
return A.b(A.bP(Aj.BF,null,x.H),$async$EC)
case 4:s=t.d
w=5
return A.b(C.fQ0(!0,o,s),$async$EC)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.GP(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$EC)
case 6:p=f
w=7
return A.b(A.pj(o,!1),$async$EC)
case 7:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$EC,v)},
a_R(d){return this.cxo(d)},
cxo(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_R=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pk(d,s,!1),$async$a_R)
case 3:if(!f||d.e==null){w=1
break}A.a4(d,!1).O(null)
A.hH(d,new C.at6(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pj(s,!1),$async$a_R)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_R,v)},
Qs(d){return this.cts(d)},
cts(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Qs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a4(d,!1).O(null)
w=3
return A.b(A.hH(d,D.aJg,!0,"NgmyWorksheetProjectScan",x.N),$async$Qs)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bEG(s),$async$Qs)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.K(x.q).f.U(D.fcQ)
w=1
break}q=C.haO(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dV(p,x.H),$async$Qs)
case 5:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Qs,v)},
a_S(d){return this.cFu(d)},
cFu(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_S=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a4(d,!1).O(null)
w=3
return A.b(C.bEc(),$async$a_S)
case 3:s=f
if(s==null){w=1
break}r=C.haO(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dV(q,x.H),$async$a_S)
case 4:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_S,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.J,t=new C.u6(u),s=w.d.d.length,r=u?B.e3:B.c,q=A.n(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kq,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.vZ,A.p(v,A.x(A.a([w.cvY(d,t,s),new A.D(D.bAF,A.x(A.a([w.b5w(t,"QR restore"),B.W,A.B(A.a([w.b0u(t,!0,B.jD,B.aK,B.aK,new C.eQv(w,d),"Show to scan","QR code"),B.as,w.ayy(t,B.jg,B.b6,B.br,new C.eQw(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.i,0,v,v),B.d4,w.b5w(t,"Backup files"),B.W,A.B(A.a([w.ayy(t,B.hR,B.aW,B.bP,new C.eQx(w,d),"Full copy","Backup file"),B.as,w.ayy(t,R.z2,B.aE,B.aT,new C.eQy(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.i,0,v,v)],o),B.E,v,B.e,B.i,0,B.p),v)],o),B.m,v,B.e,B.O,0,B.p),B.ap,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
cvY(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.f6,B.cR,B.fM],k):A.a([B.b0,B.aW,B.bP],k)
w=A.ap(l,A.X(B.uz,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.au(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.n(4),l,l,B.n),l,4,l,B.kH,l,l,l,36),l,l,l)
u=A.n(14)
t=A.J(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cH,12)],x.V)
r=this.d
s=A.p(l,C.aRh(!0,A.n(13),64,D.bKO,l,r.c,64),B.ap,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a1,l,l,l,D.aU5,l,l,l)
r=C.bEF(r.gxe(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.n(20)
o=A.J(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.a_,l,B.ab,B.t,A.a([w,new A.D(D.bB2,A.x(A.a([v,A.B(A.a([s,B.er,A.E(A.x(A.a([u,B.au,t,B.P,A.B(A.a([r,B.ac,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fP,l,l,l)],m),B.m,l,B.e,B.i,0,l,l)],m),B.E,l,B.e,B.i,0,B.p),1),A.aG(l,l,l,l,A.X(B.cz,B.c.j(0.85),l,l,l,l),l,l,l,new C.eQu(d),l,l,l,A.nM(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aRk,l,l,l,l),l,l)],m),B.E,l,B.e,B.i,0,l,l)],m),B.m,l,B.e,B.i,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.ay,B.aD,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b5w(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aW,w,w,A.n(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ac,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bt:B.bm,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)},
b0u(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.n(18),p=A.n(18),o=d.a,n=o?D.ais:B.aP
if(e)w=B.aK.j(o?0.45:0.35)
else{w=o?B.e8:B.bO
w=w.j(o?0.8:1)}w=A.J(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aK.j(0.12),B.cH,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.n(12)
s=A.J(h.j(0.35),B.r,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.rw,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.av,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aH(!1,B.a2,!0,r,A.aO(!1,q,!0,A.eK(new A.D(E.a_h,A.x(A.a([t,B.ae,u,B.bF,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bt:B.bm,r,r,r,r,r,r,r,r,11,r,r,B.cy,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
ayy(d,e,f,g,h,i,j){return this.b0u(d,!1,e,f,g,h,i,j)}}
C.at6.prototype={
R(){return new C.bml()}}
C.bml.prototype={
Z(){this.a2()
this.afu()},
afu(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$afu=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bEH(p.c,p.d),$async$afu)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eQ8(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eQ9(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afu,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.J,f=g?B.Bb:B.iy,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aG(h,h,h,h,A.X(B.eJ,g?B.ad:B.al,h,h,h,18),h,h,h,new C.eQa(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.N,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.Aa],u),B.m,h,B.e,B.i,0,h,h)
t=A.n(24)
s=x.O
s=g?A.a([B.f6,B.cR,B.fM],s):A.a([B.b0,B.aW,B.bP],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aW.j(g?0.4:0.3),B.eU,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dd,B.K,h,h)
p=C.bEF(p.gxe(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.n(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.am,A.B(A.a([p,B.ac,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fP,h,h,h)],u),B.m,h,B.b9,B.i,0,h,h)],u),B.m,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a9(B.ay,B.aD,B.x,s,h,h),B.n),h,h,h,h,E.a_E,h,h,1/0)
t=g?D.bnh:B.c
q=A.n(24)
p=A.J(w?B.aK.j(0.4):B.aW.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dq,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.UE,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.elF)
else{m=A.n(20)
l=A.J(B.aN,B.r,1)
o.push(A.p(h,A.q0(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aQ)
n=w?B.aK:B.aW
n=n.j(g?0.15:0.1)
m=A.n(12)
l=A.J((w?B.aK:B.aW).j(0.35),B.r,1)
k=w?B.Ov:B.P0
k=A.X(k,w?B.aK:B.aW,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.as,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.al,h,h,h,h,h,h,h,h,12,h,h,B.a7,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.i,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.ip,h,h,h))
return A.c7(h,f,A.bm(!0,A.x(A.a([new A.D(Ag.NJ,e,h),A.E(A.cg(A.x(A.a([s,B.aQ,A.p(h,A.x(o,B.m,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.ud,h,h,1/0)],u),B.m,h,B.e,B.i,0,B.p),B.t,h,B.y,h,E.al1,h,h,B.ah),1)],u),B.m,h,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.atb.prototype={
R(){return new C.aFM(A.zz(B.N0,B.nQ,B.uH))}}
C.aFM.prototype={
q(){this.d.q()
this.a1()},
aNh(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iW(w,d)},
ccP(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=C.ihE(t)
if(s!=null){this.aNh(s)
return}r=C.hpv(t)
if(r!=null)q=A.cT(r,p,0)
else q=!1
if(q){this.aNh(B.a.i(B.a.b5(r,B.a.cu(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eJ(A.a([A.aG(t,t,t,t,A.X(u.f?B.un:Ab.OB,t,t,t,t,t),t,t,t,new C.eQc(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.Bb,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fKi,t,t,t,1,t,!0),q=A.zy(u.d,B.bW,u.gccO()),p=A.n(28)
p=A.au(A.p(t,t,B.f,t,t,new A.o(t,t,A.J(B.aW,B.r,3),p,A.a([new A.ac(2,B.G,B.aW.j(0.35),B.I,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.n(16)
return A.c7(r,B.w,new A.an(B.a_,t,B.b2,B.t,A.a([q,p,A.ap(32,A.p(t,D.fJ4,B.f,t,t,new A.o(w,t,A.J(B.aW.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jf,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aKH.prototype={
a6(){return"_WorksheetTab."+this.b}}
C.Ot.prototype={
R(){return new C.aFO(D.abW,A.a([],x.D))},
bu(){return this.r.$0()},
ge1(){return this.c}}
C.aFO.prototype={
gcDm(){return J.bFQ(this.e,0,new C.eQV())},
Z(){this.a2()
$.aV.bZ$.push(this)
this.vW()},
q(){$.aV.hR(this)
this.a1()},
je(d){if(d===B.fK)this.vW()},
vW(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vW=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Db(q.a.c).da(0,B.kh),$async$vW)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eQR(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eQS(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vW,v)},
Ib(d){return this.bKO(d)},
bKN(){return this.Ib(null)},
bKO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Ib=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ijO(l,d),$async$Ib)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lx(l,r,q,D.dgG,new A.V(Date.now(),0,!1))
w=4
return A.b(C.LB(t.a.c,p),$async$Ib)
case 4:o=f
w=5
return A.b(t.vW(),$async$Ib)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.K(x.q).f.U(D.f9X)
w=1
break}n=J.aW(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gS(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.K(q).f.U(D.fbK)
else n.K(q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.EG(m)
case 1:return A.h(u,v)}})
return A.i($async$Ib,v)},
EG(d){return this.cgM(d)},
cgM(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$EG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hH(s,new C.atc(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$EG)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.LB(u.a.c,t),$async$EG)
case 5:case 4:w=6
return A.b(u.vW(),$async$EG)
case 6:return A.h(null,v)}})
return A.i($async$EG,v)},
vI(d){return this.c03(d)},
c03(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bEc(),$async$vI)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hH(r,D.aJg,!0,"NgmyWorksheetProjectScan",x.N),$async$vI)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bEG(q),$async$vI)
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
break}p=C.haO(s)
w=15
return A.b(C.LB(t.a.c,p),$async$vI)
case 15:o=f
w=16
return A.b(t.vW(),$async$vI)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.K(x.q).f.U(D.fbP)
w=1
break}r.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.EG(p)
case 1:return A.h(u,v)}})
return A.i($async$vI,v)},
Oa(d){return this.bJs(d)},
bJs(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Oa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ck(null,null,!0,null,new C.eQC(d),s,null,!0,!0,x.y),$async$Oa)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oS(t.a.c,A.a([],x.D)),$async$Oa)
case 6:w=7
return A.b(t.vW(),$async$Oa)
case 7:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.fa1)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Oa,v)},
cgZ(d){var w=this.c
w.toString
A.bU(B.L,null,new C.eQL(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b67(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.n(16),p=g.a
if(p)w=B.jK
else w=B.c
v=A.n(16)
u=A.J(p?B.e8:B.bO,B.r,1)
t=d.j(0.14)
s=A.n(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bT,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.av,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aH(!1,B.a2,!0,r,A.aO(!1,q,!0,A.p(r,A.x(A.a([s,B.ae,t,B.bF,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bt:B.bm,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.vY,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
a0m(d,e){return this.cgN(d,e)},
cgN(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0m=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(B.L,null,new C.eQG(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a0m)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hyO(r,new C.eQH(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Oc(d,e),$async$a0m)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0m,v)},
b38(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.n(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bT,u,u,u)
if(d)t=B.ax
else t=h.a?B.aP:B.av
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bt:B.bm,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.i,0,B.p),1)
return A.aH(!1,B.a2,!0,u,A.aO(!1,u,!0,new A.D(B.BR,A.B(A.a([s,B.bc,t,A.X(B.eE,w?B.bt:B.bm,u,u,u,u)],v),B.m,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai)},
cnH(d,e,f,g,h,i){return this.b38(!1,d,e,f,g,h,i)},
Oc(d,e){return this.bJC(d,e)},
bJC(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Oc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lh(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Oc)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bCW(t.a.c,d.a),$async$Oc)
case 6:w=7
return A.b(t.vW(),$async$Oc)
case 7:r=t.c
if(r==null){w=1
break}r.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Oc,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.J,n=new C.u6(o),m=o?B.c1:B.iy
if(q.f)o=D.bac
else{w=q.bDZ(n)
v=q.c_7(n)
u=q.gbB5()
if(o)t=B.jK
else t=B.c
s=A.n(13)
r=x.p
u=A.a([w,B.ae,v,B.aQ,new C.FU(A.p(p,A.B(A.a([q.aC3(P.Og,"Projects",n,D.abW),q.aC3(B.we,"Cashier",n,D.aZt),q.aC3(B.GI,"Family Tree",n,D.hs5)],r),B.m,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ev,0.95,u,p),B.bx],r)
w=q.d
if(w===D.abW){w=J.ad(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.av,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b1,new C.ay3(q.gaRv(),p)],r),B.m,p,B.e,B.i,0,p,p),B.aA,q.cnJ(n)],r))}else{o=q.a
if(w===D.aZt)u.push(new C.ap4(o.c,n,p))
else{w=q.r
u.push(new C.aqd(o.c,o.d,o.e,o.f,new C.eQY(q),new C.eQZ(q),new A.bV(w,x.b4)))}}o=A.cg(A.x(u,B.E,p,B.e,B.i,0,B.p),B.t,p,B.y,p,Am.NC,p,p,B.ah)}return A.c7(p,m,A.bm(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bDZ(d){var w=null,v=A.n(8),u=d.a,t=A.X(Z.a0V,u?B.bt:B.bm,w,w,w,16)
return A.aO(!1,v,!0,new A.D(B.kI,A.B(A.a([t,B.bn,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bt:B.bm,w,w,w,w,w,w,w,w,14,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.O,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eQz(this),w,w,w,w,w,w,w)},
gbB5(){switch(this.d.a){case 0:return D.ab7
case 1:return D.hhh
case 2:return D.ab8}},
c_7(d){var w=null,v=A.n(15),u=A.a([new A.ac(0,B.G,B.aW.j(0.35),B.cx,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bVq,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bc,D.bFx,A.aH(!1,B.a2,!0,w,A.aO(!1,A.n(12),!0,A.p(w,D.bSQ,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eQD(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)],t),B.E,w,B.e,B.i,0,w,w),r=B.b0.j(0.55),q=A.n(12)
return new C.FU(A.p(w,A.x(A.a([new A.D(E.a_n,s,w),A.p(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.d(A.B1(this.gcDm()),w,w,w,w,w,w,D.ftg,w,w,w)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.u9,B.jf,w,w,1/0)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(B.aW,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.hhg,w)},
aC3(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.n(12),r=t?B.aW:B.L,q=A.n(12),p=t?A.J(B.c.j(0.55),B.r,2):A.J(B.L,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aW.j(0.42),B.cH,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bt:B.bm
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bt:B.bm
return A.E(A.aH(!1,B.a2,!0,u,A.aO(!1,s,!0,A.da(u,A.B(A.a([w,B.en,new A.ds(1,B.cp,A.d(e,u,1,B.a1,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b9,B.i,0,u,u),u,u,B.ct,new A.o(r,u,p,q,o,u,B.n),B.iB,u,u,u,u,B.Gp,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eQU(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),1)},
cnJ(d){var w,v,u,t,s,r,q=this,p=null
if(J.ct(q.e)){w=d.a
v=w?B.e3:B.c
u=A.n(15)
t=A.p(p,D.bSW,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aW.j(0.5),B.eU,28)],x.V),D.c49,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.av,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.FU(A.p(p,A.x(A.a([t,B.d4,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bt:B.bm,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.dT,A.B(A.a([A.E(q.aT4(B.jg,"Scan QR",new C.eQO(q),d),1),B.as,A.E(q.aT4(R.z2,"Upload file",new C.eQP(q),d),1)],r),B.m,p,B.e,B.i,0,p,p),B.aA,A.bH(D.fUL,p,q.gaRv(),A.bo(B.aW,p,p,p,B.c,B.h0,p,p,new A.b8(A.n(12),B.a0),p,p,p))],r),B.m,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bC7,1.05,D.ab7,p)}w=J.b6(q.e,new C.eQQ(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.FU(A.x(w,B.m,p,B.e,B.i,0,B.p),16,B.bT,1,D.ab7,p)},
aT4(d,e,f,g){var w=null,v=B.aW.j(g.a?0.18:0.1),u=A.n(12),t=A.n(12),s=A.n(12),r=A.J(B.aW.j(0.45),B.r,1)
return A.aH(!1,B.a2,!0,u,A.aO(!1,t,!0,A.p(w,A.x(A.a([A.X(d,B.b0,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.frA,B.K,w,w)],x.p),B.m,w,B.e,B.O,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.ajN,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
cnI(d,e){var w,v,u=null,t=e.a,s=t?B.e3:B.c,r=A.n(14),q=A.J(t?B.e8:B.bO,B.r,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.em,10)],x.V),o=A.n(14),n=t?B.bt:B.bm
n=A.bx(B.WJ,new A.fG(1.7777777777777777,C.aRh(!0,B.fL,1/0,P.Og,n,d.c,1/0),u),B.ap)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.d(""+d.d.length+" budget items \xb7 "+A.B1(d.gxe()),u,u,u,u,u,u,D.fpy,u,u,u)],w),B.E,u,B.e,B.i,0,B.p),1)
return A.p(u,A.aH(!1,B.a2,!0,u,A.aO(!1,o,!0,A.x(A.a([n,new A.D(B.bE,A.B(A.a([v,A.aG(u,u,u,u,A.X(An.a1U,t?B.bt:B.bm,u,u,u,u),u,u,u,new C.eQM(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.i,0,u,u),u)],w),B.E,u,B.e,B.i,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eQN(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.ec,u,u,u,1/0)}}
C.bz0.prototype={}
C.rf.prototype={
ah(){var w=this,v=w.c,u=w.d
return A.H(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcX5(){var w,v,u,t,s=this.c
if(s===B.k.jj(s))w=B.o.u(B.k.N(s))
else{v=B.k.ac(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lx.prototype={
gxe(){return B.d.cI(this.d,0,new C.cCS())},
ah(){var w=this,v=w.d,u=A.T(v).k("N<1,a8<m,@>>")
v=A.C(new A.N(v,new C.cCR(),u),u.k("ak.E"))
return A.H(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ae()],x.N,x.z)},
bdn(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lx(w.a,w.b,v,u,w.e)},
bd5(d){return this.bdn(d,null)},
Ta(d){return this.bdn(null,d)}}
C.HZ.prototype={
a6(){return"FamilyGender."+this.b}}
C.hV.prototype={
ah(){var w=this
return A.H(["id",w.a,"name",w.b,"gender",C.hut(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aEQ(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hV(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ali.prototype={
a6(){return"FamilyTreeAccessRole."+this.b}}
C.kO.prototype={
gapq(){var w=this.f
return new A.Z(w,new C.bRd(),A.T(w).k("Z<1>")).gL(0)},
ah(){var w=this,v=w.f,u=A.T(v).k("N<1,a8<m,@>>")
v=A.C(new A.N(v,new C.bRc(),u),u.k("ak.E"))
return A.H(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ae(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.ia0(w.y),"games",w.z],x.N,x.z)},
wA(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kO(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bdm(d,e){var w=null
return this.wA(w,w,w,d,e,w,w,w,w)},
cMy(d,e,f,g,h,i,j){return this.wA(d,e,null,f,g,h,i,j,null)},
aEV(d,e){var w=null
return this.wA(w,w,w,w,d,w,w,e,w)},
cMA(d,e,f,g,h,i,j,k){return this.wA(d,e,null,f,g,h,i,j,k)},
cL2(d){var w=null
return this.wA(w,w,w,w,w,w,w,d,w)},
cLq(d){var w=null
return this.wA(w,w,w,w,w,w,w,w,d)},
bd_(d){var w=null
return this.wA(w,w,d,w,w,w,w,w,w)},
aEG(d){var w=null
return this.wA(w,w,w,w,w,d,w,w,w)},
cM4(d,e,f){var w=null
return this.wA(w,d,w,w,e,w,w,f,w)},
cKQ(d){var w=null
return this.wA(w,w,w,d,w,w,w,w,w)},
cLD(d,e){var w=null
return this.wA(d,w,w,w,w,w,e,w,w)}}
C.cCT.prototype={
a6(){return"WrapAlignment."+this.b}}
C.cCU.prototype={
a6(){return"WrapCrossAlignment."+this.b}}
C.aHT.prototype={}
C.b9Q.prototype={
bw(d){this.a=d.a
this.b=d.b},
cW(d){var w=new C.b9Q()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b0(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b9P.prototype={
gws(){return!0},
gGf(){return this.z.b<this.b.length},
aUI(d){switch(0){case 0:return d.a.c}},
aUp(d){switch(0){case 0:return d.a.d}},
bTw(d,e){switch(0){case 0:return new A.hR(d,e)}},
bSU(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
ha(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iJ(0,0,B.o.E(0,b5.a,b5.b),B.o.E(0,b5.c,b5.d))
return}w=A.HK(b4)
switch(0){case 0:v=b5.b
u=new A.kL(0,v,0,1/0)
t=w===B.Uv
break}s=A.a([],x.gZ)
r=A.U(x.gF,x.S)
for(b3=b1.z,q=B.d.fL(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.L)(q),++h){g=q[h]
g.ha(b4,u,!0)
f=b1.aUI(g)
f.toString
e=b1.aUp(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aHT(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aHT(k,j,i))}d=s.length
switch(0){case 0:q=b5.cA(new A.hR(m,l))
a0=q.a
a1=q.b
b1.a=new A.iJ(0,0,a0,a1)
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
for(q=B.d.fL(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.L)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aUI(g)
e=b1.aUp(g)
e.toString
a9=b1.bSU(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bTw(a6,a3+a9)
b0=g.a
g.a=new A.iJ(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h4(d){var w,v,u,t,s,r=this
r.ls(d)
w=d.b
w.ii()
v=A.dr()
u=r.a
v.ee(u.a,u.b,0,1)
w.pb(0,v)
for(u=r.z,u=B.d.ds(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s)u[s].h4(d)
w.ns(0)},
GJ(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
ii(){return this.z}}
C.bxg.prototype={}
var z=a.updateTypes(["aA<~>()","R(hV)","~()","R(kO)","R(no)","a8<m,@>(kO)","G(kO,kO)","G(hV,hV)","m(hV)","kO(a8<@,@>)","R(lx)","no(a8<@,@>)","a8<m,@>(no)","R(uC)","uC()","G(hV)","ai<hV>()","R(zg)","a_r(Y)","m?(hV)","ex<m?>(hV)","aA<~>(lx)","R(rf)","a8<m,@>(hV)","hV(a8<@,@>)","G(lx,lx)","R(af9)","~(bb)","v(ot)","G(G,a9j)","R(qz<G>)","~(qz<G>)","Tb(Y)","R(Mf)","R(uB)","~(hV)","m(m)","Vx(Y)","Ta(Y)","adx(Y)","Zn(Y)","hV(hV)","cN(bA<m,G8>)","cN(Kp)","ZR(Y)","G?(hV)","hV()","R(Kp)","D(hV)","~(HZ)","ZN(Y)","v(HZ,m,a0)","R(af2)","bA<m,ai<a8<m,@>>>(m,ai<no>)","ZP(Y)","+count,id,name(G,m,m)(kO)","m(kO)","a_M(Y)","a_N(Y)","R(lO)","lO()","YW(Y)","a1z(Y)","Zp(Y)","Zo(Y)","~(G)","~(m,lm?)","v(rf)","adS(Y)","~(mb)","aA<~>([m?])","K(K,lx)","v(lx)","K(K,rf)","a8<m,@>(rf)","rf(a8<@,@>)","ai<lm>()","uB()","m(V)","lx(a8<@,@>)","cv(HY)","m(lx)","a8<m,@>(lx)","G(no,no)","kO(a8<m,@>)","kO(kO)"])
C.fIB.prototype={
$1(d){return d.a+" "+d.b},
$S:129}
C.fIA.prototype={
bmD(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.r7(s,d,B.hS,"book",E.G2),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.W(r!=null&&A.Lp(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bmD(d)},
$S:316}
C.fIC.prototype={
$1(d){return d.b},
$S:129}
C.fS4.prototype={
$1(d){var w=null
return A.eT(w,B.L,new H.PR(this.a,this.b,w),w,w,0,B.a_i,B.d8,w,w,w)},
$S:49}
C.fwE.prototype={
$1(d){return d!=null},
$S:227}
C.fwF.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:227}
C.fwK.prototype={
$1(d){if(this.a)return new A.t(d.a*520,d.b*160)
return d},
$S:175}
C.fGk.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fd(d,w,w,w,A.hd(w,B.rZ,w,w,w,w,w,w,w,B.dx,w,w,10.5,w,B.ew,w,!0,w,w,w,w),w),u=f?B.ew:B.w7
return new A.nX(D.bxz,A.aa7(A.a([new A.fV(130,w,v),new A.zf(1,B.GB,A.fd(e,w,w,w,A.hd(w,g==null?D.eo1:g,w,w,w,w,w,w,w,B.dx,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.y3,B.lN))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1934}
C.fGj.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vL(999)
f=A.xi(A.lJ(h,A.fd("Cashier",h,h,h,A.hd(h,D.zX,h,h,h,h,h,h,h,B.dx,h,h,10,h,B.ew,h,!0,h,h,h,h),h),h,new A.kM(D.enT,h,f,B.hV,h),h,h,D.by3,h))
w=A.xi(A.fd("Debt receipt",h,h,h,A.hd(h,h,h,h,h,h,h,h,h,B.dx,h,h,22,h,B.ew,h,!0,h,h,h,h),h))
v=A.xi(A.fd(C.x0(new A.V(Date.now(),0,!1),!0),h,h,h,D.a9F,h))
u=A.vL(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fd(s,h,h,h,A.hd(h,h,h,h,h,h,h,h,h,B.dx,h,h,14,h,B.ew,h,!0,h,h,h,h),h)
r=A.fd("Person who owes",h,h,h,D.a9F,h)
q=A.vL(10)
p=x.Z
u=A.lJ(h,A.z9(A.a([s,new A.fV(h,2,h),r,new A.fV(h,10,h),A.lJ(h,A.z9(A.a([A.fd("Amount owed",h,h,h,D.a9F,h),new A.fV(h,2,h),A.fd(A.B1(t.c),h,h,h,A.hd(h,D.zX,h,h,h,h,h,h,h,B.dx,h,h,20,h,B.ew,h,!0,h,h,h,h),h)],p),B.rn,B.lN),h,new A.kM(B.pt,h,q,B.hV,h),h,h,D.bxg,1/0)],p),B.rn,B.lN),h,new A.kM(E.aKB,h,u,B.hV,h),h,h,D.bza,1/0)
q=new A.nG(D.enW,0.9,B.kZ)
r=A.vL(12)
s=i.c
o=s.$2("Original due",C.x0(t.r,!1))
n=s.$2("Current due",C.x0(t.f,!1))
m=i.d
l=new A.nG(m,1.1,B.kZ)
k=A.vL(8)
j=i.a
k=A.a([o,n,new A.fV(h,6,h),A.lJ(h,A.xi(A.fd(t.gaLN(),h,h,h,A.hd(h,m,h,h,h,h,h,h,h,B.dx,h,h,11,h,B.ew,h,!0,0.5,h,h,h),h)),h,new A.kM(h,new A.pM(l,l,l,l),k,B.hV,h),h,h,D.byb,1/0),new A.fV(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.zX))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.zX))
else{n=A.fd("Missed days ("+n+")",h,h,h,A.hd(h,B.rZ,h,h,h,h,h,h,h,B.dx,h,h,10.5,h,B.ew,h,!0,h,h,h,h),h)
m=A.T(o).k("N<1,SJ>")
o=A.C(new A.N(o,new C.fGi(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fV(h,4,h),n,new A.fV(h,6,h),new C.b9P(5,5,new C.b9Q(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fV(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fV(h,8,h),w,new A.fV(h,3,h),v,new A.fV(h,16,h),u,new A.fV(h,10,h),A.lJ(h,A.z9(k,B.y3,B.lN),h,new A.kM(h,new A.pM(q,q,q,q),r,B.hV,h),h,h,B.ajY,1/0)],p)
w=j.a
if(w!=null){v=new A.nG(B.Jd,1,B.kZ)
B.d.v(f,A.a([new A.fV(h,16,h),A.fd("Debtor signature",h,h,h,A.hd(h,B.rZ,h,h,h,h,h,h,h,B.dx,h,h,10,h,B.ew,h,!0,h,h,h,h),h),new A.fV(h,6,h),A.lJ(h,new A.Ig(w,B.WT,h,h),h,new A.kM(h,new A.pM(v,v,v,v),A.vL(6),B.hV,h),82,h,B.NH,1/0)],p))}f.push(new A.fV(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fd(w,h,h,h,D.fi2,h))
f.push(new A.fV(h,18,h))
f.push(A.xi(A.fd("NGMY.ORG",h,h,h,A.hd(h,D.zX,h,h,h,h,h,h,h,B.dx,h,h,14,h,B.ew,h,!0,1.8,h,h,h),h)))
return f},
$S:371}
C.fGi.prototype={
$1(d){var w=null,v=new A.nG(D.Je,0.7,B.kZ),u=A.vL(999)
return A.lJ(w,A.fd(C.x0(d,!1),w,w,w,A.hd(w,D.Je,w,w,w,w,w,w,w,B.dx,w,w,9.5,w,B.ew,w,!0,w,w,w,w),w),w,new A.kM(w,new A.pM(v,v,v,v),u,B.hV,w),w,w,D.bDy,w)},
$S:1935}
C.c6r.prototype={
$1(d){var w=null,v=B.bz.j(0.08),u=A.n(999),t=A.J(B.bz.j(0.28),B.r,1)
return A.p(w,A.d(C.x0(d,!1),w,w,w,w,w,w,D.fp2,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eI,w,w,w)},
$S:1936}
C.fSB.prototype={
$1(d){var w=null,v=A.aJ(d,B.bY,x.w).w,u=A.n(26),t=A.aG(w,w,w,w,D.bWm,w,w,w,new C.fSy(d),w,w,w,w,w,B.cc),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eT(w,B.L,new A.cU(new A.aZ(0,380,0,v.a.b*0.9),A.aH(!1,B.a2,!0,u,new A.D(B.a_6,A.x(A.a([new A.bM(B.a8,w,w,t,w),new A.ds(1,B.cp,A.cg(A.x(A.a([new A.er(new C.aZM(r,w),s),B.W,A.B(A.a([A.E(A.ew(B.za,D.fQZ,new C.fSz(s,r,d),A.di(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fd,w,new A.b8(A.n(14),B.a0),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ac,A.E(A.dl(B.a2w,D.fNn,new C.fSA(r,d),A.bo(B.b0,w,w,w,B.c,w,B.fd,w,new A.b8(A.n(14),B.a0),w,w,w)),1)],p),B.m,w,B.e,B.i,0,w,w)],p),B.m,w,B.e,B.O,0,B.p),B.t,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.O,0,B.p),w),B.f,B.av,0,w,w,w,w,w,B.ai),w),w,w,0,As.a_w,B.d8,w,w,w)},
$S:49}
C.fSy.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fSz.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aV.al$.x.h(0,t.a)
m=m==null?null:m.gbd()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.m6(2.5),$async$$0)
case 4:w=3
return A.b(e.hw(B.h9),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eS(B.dK.gaR(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.ar(o,0,32)
w=5
return A.b(A.t9(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fSA.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fMW(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.K(x.q).f
s.U(A.b3(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fSt.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.b
return A.eT(w,B.av,A.x(A.a([new A.D(D.byZ,A.B(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.n1,w,w,w),1),A.aG(w,w,w,w,B.lf,w,w,w,new C.fSr(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.i,0,w,w),w),new A.ds(1,B.cp,new A.D(B.fj,A.bx(A.n(14),A.fS(t,B.A,w,w,B.ci,B.dz,!1,w,!1,w,w),B.ap),w),w),new A.D(B.Nl,new A.a5(1/0,w,A.dl(B.oo,D.aUx,new C.fSs(t,this.c,d),A.bo(B.b0,w,w,w,B.c,w,w,w,new A.b8(A.n(14),B.a0),w,w,w)),w),w)],u),B.m,w,B.e,B.O,0,B.p),w,w,w,B.Ny,B.d8,w,new A.b8(v,B.a0),w)},
$S:49}
C.fSr.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fSs.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.t9(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fSF.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.a,s=this.b
return A.eT(w,B.av,new A.D(D.bz6,A.x(A.a([A.B(A.a([D.bEC,A.aG(w,w,w,w,B.lf,w,w,w,new C.fSD(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.i,0,w,w),B.P,new A.er(A.bx(A.n(14),A.p(w,A.b4(w,w,w,new C.bbZ(s.ax,w),B.aw),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.ae,new A.a5(1/0,w,A.dl(B.oo,D.aUx,new C.fSE(t,s,d),A.bo(B.b0,w,w,w,B.c,w,w,w,new A.b8(A.n(14),B.a0),w,w,w)),w)],u),B.m,w,B.e,B.O,0,B.p),w),w,w,w,w,B.d8,w,new A.b8(v,B.a0),w)},
$S:49}
C.fSD.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fSE.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aV.al$.x.h(0,t.a)
n=n==null?null:n.gbd()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.m6(2.5),$async$$0)
case 4:w=3
return A.b(e.hw(B.h9),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.ar(p,0,32)
r=J.eS(B.dK.gaR(s))
w=5
return A.b(A.t9(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fAY.prototype={
$1(d){return d.a===this.a},
$S:261}
C.dMs.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dMd.prototype={
blR(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.e3:B.c
s=u.a
w=2
return A.b(A.bU(t,null,new C.dMg(s,q,e),p,!0,!0,!1,B.Ju,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dMh(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.blR(d,e)},
$S:1937}
C.dMg.prototype={
$1(d){var w,v=null,u=this.c===B.wI,t=u?D.dnq:D.dj4
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.av,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(O.aku,A.x(A.a([u,B.au,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bt:B.bm,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ae,A.im(!0,v,v,B.y,D.f8D,new C.dMf(this.a,w,t,d),t.length,v,B.dS,B.ah,!0)],x.p),B.ak,v,B.e,B.O,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:27}
C.dMf.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.n(14)
if(q)w=B.cR.j(0.14)
else w=t.b.a.d.a?B.N:B.aP
v=A.n(14)
if(q)u=B.cR
else u=(t.b.a.d.a?B.bt:B.bm).j(0.16)
u=A.J(u,B.r,q?1.6:1)
return A.aO(!1,p,!0,A.p(B.A,C.aZL(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dMe(t.d,r),s,s,s,s,s,s,s)},
$S:190}
C.dMe.prototype={
$0(){A.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.dMh.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dMb.prototype={
$3(d,e,f){return B.bJ},
$C:"$3",
$R:3,
$S:95}
C.dMc.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cK(B.ct,e,v)
return new A.d1(e,!1,A.it(B.A,A.au(A.aH(!1,B.a2,!0,v,new A.e1(new C.dMa(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bg(t,new A.bp(0.96,1,u),u.k("bg<bO.T>"))),v)},
$S:33}
C.dMa.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aJ(d,B.bY,x.w).w,i=l.b,h=i.a.d.a,g=h?B.e3:B.c,f=A.n(14),e=A.J((h?B.bt:B.bm).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.n(8)
u=x.p
v=A.B(A.a([w,A.aO(!1,v,!0,new A.D(B.ev,A.X(B.cz,i.a.d.a?B.bt:B.bm,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dLW(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.i,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aTB("Name")
r=l.a
q=r.d==null?k:new C.dLX(r,l.e,a0)
p=A.n(20)
o=i.a.d.a?B.bo:B.m3
n=A.J(B.cR.j(0.35),B.r,1)
m=r.d
t=A.aM(k,B.Y,h,k,!0,B.t,k,A.aN(),w,k,k,k,k,k,2,s.bdf(new A.D(B.fB,A.aO(!1,p,!0,A.p(B.A,C.aZL(m==null?"\ud83d\udc64":A.fH8(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cm,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.aa,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.kV,k,B.a9u,k,k)
v=A.a([v,B.ae,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bt:B.bm,k,k,k,k,k,k,k,k,11.5,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.B(A.a([A.E(i.aUf("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dLY(r,a0),r.d===B.wI),1),B.ac,A.E(i.aUf("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dM2(r,a0),r.d===B.a6j),1)],u),B.m,k,B.e,B.i,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bM(B.a5,k,k,A.hs(D.bUF,D.fPf,new C.dM3(r,l.e,a0),A.fv(k,k,k,k,k,k,k,k,k,k,k,B.cR,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cc)),k)],u))
v.push(B.W)
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uF(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.Y,!1,k,!0,B.t,k,A.aN(),l.f,k,k,k,k,k,2,i.aTC("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.aj,k,k,s,k,k,B.e1,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.aa,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.ao,k,k,k,k))
v.push(B.W)
t=i.a.d.a
s=t?B.N:B.aP
q=A.n(10)
p=A.n(10)
o=A.n(10)
n=A.J((t?B.bt:B.bm).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bt:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.x0(r.a,!1)
v.push(A.aH(!1,B.a2,!0,q,A.aO(!1,p,!0,A.p(k,A.B(A.a([A.E(A.x(A.a([t,B.bF,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.i,0,B.p),1),D.bRn],u),B.m,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bg,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dM4(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bt:B.bm,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.W)
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.Y,!1,k,!0,B.t,k,A.aN(),l.r,k,k,k,k,k,2,i.aTB("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.aa,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.ao,k,k,k,k))
v.push(B.ae)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bt:B.bm,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b1v(r.b.length!==0,B.mL,new C.dM5(r,i,a0),new C.dM6(r,a0),"Upload from gallery","ID photo"))
v.push(i.b1v(r.c.length!==0,D.bKM,new C.dM7(r,i,d,a0),new C.dM8(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Ar.a7X("Signature (optional)",t,new C.dM9(a0),new C.dLZ(a0,t),new C.dM_(d,t,a0),k))
v.push(B.aA)
i=i.a.d.a
t=i?B.bt:B.bm
s=(i?B.bt:B.bm).j(0.28)
s=A.E(A.dT(E.aUq,new C.dM0(d),A.di(k,k,k,k,k,k,k,k,k,t,k,k,B.u5,k,new A.b8(A.n(10),B.a0),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bo(B.cR,k,k,k,B.c,k,B.u5,k,new A.b8(A.n(10),B.a0),k,k,k)
v.push(A.B(A.a([s,B.ac,A.E(A.bH(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vh,k,k,k),k,new C.dM1(r,w,d),t),1)],u),B.m,k,B.e,B.i,0,k,k))
return A.p(k,A.cg(A.x(v,B.ak,k,B.e,B.O,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aZ(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.ru,B.jf,k,k,360)},
$S:165}
C.dLW.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dLX.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dLY.prototype={
$0(){return this.b.$1(new C.dLV(this.a))},
$S:0}
C.dLV.prototype={
$0(){var w=this.a
w.d=B.wI
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dM2.prototype={
$0(){return this.b.$1(new C.dLU(this.a))},
$S:0}
C.dLU.prototype={
$0(){var w=this.a
w.d=B.a6j
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dM3.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dM4.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.x4(null,u.b,A.c5(2020,1,1,0,0,0,0,0),null,s,A.c5(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dLT(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLT.prototype={
$0(){var w=this.b
return this.a.a=A.c5(w.gck(),w.gcg(),w.gcw(),0,0,0,0,0)},
$S:0}
C.dM5.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.PN(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dLS(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLS.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dM6.prototype={
$0(){return this.b.$1(new C.dLR(this.a))},
$S:0}
C.dLR.prototype={
$0(){return this.a.b=""},
$S:0}
C.dM7.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.e3:B.c
w=3
return A.b(A.bU(q,null,new C.dLP(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.PN(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dLQ(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLP.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.apI,w,w,w,w,new C.dLJ(d),!1,w,w,w,w,w,w,w,D.fFo,w,w,w),A.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.apG,w,w,w,w,new C.dLK(d),!1,w,w,w,w,w,w,w,D.fMo,w,w,w)],x.p),B.m,w,B.e,B.O,0,B.p),!0,!1,B.af,!0,!0)},
$S:27}
C.dLJ.prototype={
$0(){A.a4(this.a,!1).O("camera")
return null},
$S:0}
C.dLK.prototype={
$0(){A.a4(this.a,!1).O("gallery")
return null},
$S:0}
C.dLQ.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dM8.prototype={
$0(){return this.b.$1(new C.dLO(this.a))},
$S:0}
C.dLO.prototype={
$0(){return this.a.c=""},
$S:0}
C.dM9.prototype={
$0(){return this.a.$1(new C.dLN())},
$S:0}
C.dLN.prototype={
$0(){},
$S:0}
C.dLZ.prototype={
$0(){return this.a.$1(new C.dLM(this.b))},
$S:0}
C.dLM.prototype={
$0(){return B.d.aa(this.a)},
$S:0}
C.dM_.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ai5(u.a,null,null,new C.dLL(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLL.prototype={
$4(d,e,f,g){this.a.$1(new C.dLI(this.b,d))},
$S:451}
C.dLI.prototype={
$0(){var w=this.a
B.d.aa(w)
B.d.v(w,this.b)},
$S:0}
C.dM0.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dM1.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.K(x.q).f.U(D.fdH)
return}if(w.a.d==null){w.c.K(x.q).f.U(D.faA)
return}A.a4(w.c,!1).O(!0)},
$S:0}
C.dMv.prototype={
$3(d,e,f){return B.bJ},
$C:"$3",
$R:3,
$S:95}
C.dMw.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.e3:B.c,n=A.n(14),m=A.J((p?B.bt:B.bm).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.av,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.B1(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bt:B.bm,r,r,r,r,r,r,r,r,13,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zg(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.zg(r).length>0?B.bz:B.cR,r,r,r,r,r,r,r,r,12,r,r,B.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bt:B.bm
t=(q?B.bt:B.bm).j(0.28)
s=x.p
return new A.d1(e,!1,A.au(A.aH(!1,B.a2,!0,r,A.p(r,A.x(A.a([p,B.P,v,u,B.aA,A.B(A.a([A.E(A.dT(B.nK,new C.dMt(d),A.di(r,r,r,r,r,r,r,r,r,w,r,r,B.jQ,r,new A.b8(A.n(10),B.a0),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ac,A.E(A.bH(D.fMO,r,new C.dMu(d),A.bo(B.cR,r,r,r,B.c,r,B.jQ,r,new A.b8(A.n(10),B.a0),r,r,r)),1)],s),B.m,r,B.e,B.i,0,r,r)],s),B.ak,r,B.e,B.O,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.BU,E.a_n,r,r,300),B.f,B.L,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:33}
C.dMt.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dMu.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dMp.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dMq(r),p=r.a.d.a,o=p?B.e3:B.c,n=A.n(14),m=A.J((p?B.bt:B.bm).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.E(A.d(k,s,1,B.a1,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.av,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.B1(l.c),s,s,s,s,s,s,D.fqB,s,s,s)],p),B.m,s,B.e,B.i,0,s,s)
w=A.iG((r.a.d.a?B.bt:B.bm).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a1f,"View receipt",new C.dMi(r,d,l))
u=l.x!=null
t=u?B.qx:B.qq
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bz3,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dMj(r,d,l)),q.$3$icon$label$onTap(B.C5,"Edit",new C.dMk(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mL,"View / download ID",new C.dMl(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bKL,"View / download selfie",new C.dMm(r,d,l)))
if(l.gaGy())p.push(q.$3$icon$label$onTap(Af.a2m,"View / download signature",new C.dMn(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bz,B.e9,"Delete",new C.dMo(r,d,l)))
p.push(B.au)
return A.bm(!0,new A.D(B.u9,A.p(s,A.x(p,B.m,s,B.e,B.O,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:27}
C.dMq.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.av
else w=d
return A.aO(!1,v,!0,new A.D(B.eS,A.B(A.a([A.X(e,w,v,v,v,20),B.bc,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1938}
C.dMi.prototype={
$0(){A.a4(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fSx(w,this.c)},
$S:0}
C.dMj.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.Sw(this.c)},
$S:0}
C.dMk.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.Di(this.c)},
$S:0}
C.dMl.prototype={
$0(){var w,v,u
A.a4(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bF1(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dMm.prototype={
$0(){var w,v,u
A.a4(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bF1(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dMn.prototype={
$0(){A.a4(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fSC(w,this.c)},
$S:0}
C.dMo.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.PM(0,this.c)},
$S:0}
C.dMx.prototype={
$1(d){return d.x==null},
$S:261}
C.dMy.prototype={
$1(d){return d.x!=null},
$S:261}
C.dMz.prototype={
$2(d,e){return d+e.c},
$S:1939}
C.dMA.prototype={
$0(){return this.a.bBA()},
$S:0}
C.dMr.prototype={
$0(){return this.a.afH(this.b)},
$S:0}
C.fBB.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fBC.prototype={
$0(){return B.d.gI(D.a3H)},
$S:z+77}
C.dci.prototype={
$0(){var w=this.a
return w.m(new C.dcg(w,this.b))},
$S:0}
C.dcg.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dch.prototype={
$0(){},
$S:0}
C.dcj.prototype={
$0(){var w=this.a.gc_S()
A.a4(this.b,!1).O(w)
return null},
$S:0}
C.fDS.prototype={
$1(d){return C.hf1(A.a2(d,x.N,x.z))},
$S:z+11}
C.fDT.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fDU.prototype={
$2(d,e){var w=A.cc(d.a,null),v=A.cc(e.a,null)
if(w!=null&&v!=null)return B.o.aK(w,v)
return d.d.aK(0,e.d)},
$S:z+83}
C.fRa.prototype={
$1(d){return d.ah()},
$S:z+12}
C.fZw.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fAP.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bPV.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f0(e,v)?v:null},
$S:1940}
C.fRJ.prototype={
$1(d){var w=this
return new C.ZP(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dcY.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dcX(w,d))},
$S:z+80}
C.dcX.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dcM.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cL(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dcJ.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dck.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dcl.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dcN.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dct.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.J,u=v?B.e3:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bt:B.bm,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ep(A.a([A.bN(!1,B.di,w,w,!0,w,w,w,new C.dcr(d),w,w),A.bH(B.x4,w,new C.dcs(d),A.bo(B.na,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:19}
C.dcr.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dcs.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dcu.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.E(w.r-1,-1,999)},
$S:0}
C.dcK.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dcL.prototype={
$0(){return B.d.gI(D.zm)},
$S:z+14}
C.dcp.prototype={
$1(d){var w=this.a,v=w.y,u=w.gyB(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Ta(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dcq.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dcv.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.Zn(v,u,J.ad(w.d),null)},
$S:z+40}
C.dcw.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dcW.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aB(s,new C.Z4(r.y,r.gyB(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dcU(r),s,s,s,s,s,s,!1,B.a3)
else{w=e-1
v=J.r(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bbm(v,e,w,u,t,r.gbRZ(),C.hus(r.y.Q),r.gyB(0),s)
w=t}return A.cb(q,new C.dcV(r,e),new A.D(B.a_o,w,s))},
$S:1941}
C.dcV.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd2(t).ay){t=this.b
u=x.cy.a(B.d.gd2(u.f.f)).gv2(0)
w=t-(u==null?t:u)}else w=0
v=B.k.E(w,-1,0)
u=A.dr()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fI(v*3.141592653589793*0.5)
return A.fx(B.a5,A.db(e,B.k.E(1+v*0.5,0,1)),null,u,!0)},
$S:46}
C.dcU.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aHE(B.q8,B.iT)},
$S:0}
C.dcG.prototype={
$0(){var w=this.a
return w.m(new C.dcF(w))},
$S:0}
C.dcF.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dcH.prototype={
$0(){var w=this.a.c
w.toString
A.a4(w,!1).O(null)
return null},
$S:0}
C.dcm.prototype={
$1(d){var w,v,u=null,t=A.n(26),s=E.kb.j(0.5),r=x.p,q=A.a([D.fDZ,B.ae],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ct(p.d)?"Write this book":"Write a new book"
q.push(p.Zr(d,B.e5,w,J.ct(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.Zr(d,I.anz,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cL(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cu,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kC.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cu,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kC.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.Zr(d,X.aoG,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.Zr(d,B.qv,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.Zr(d,B.qv,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eT(u,E.Bm,A.bm(!0,new A.D(Ae.yn,A.x(q,B.E,u,B.e,B.O,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.akU,B.d8,u,new A.b8(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:49}
C.dcI.prototype={
$0(){A.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.dcz.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cL(w.d)
return new C.ZR(v,J.cL(w.d),w.r+1,null)},
$S:z+44}
C.dcA.prototype={
$1(d){var w=null
return A.oA(!1,A.ep(w,w,w,E.Bm,new A.jV(this.a,new C.dcy(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:290}
C.dcy.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a99,B.oF,A.E(A.d(e,w,w,w,w,w,w,B.jm,w,w,w),1)],x.p),B.m,w,B.e,B.i,0,w,w)},
$S:732}
C.dcB.prototype={
$0(){return this.a.a=!1},
$S:51}
C.dcC.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:200}
C.dcD.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dcE.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Ba(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.RZ(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.dcx(s,t))
w=4
return A.b(s.la(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dcx.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dcP.prototype={
$1(d){var w=null
return A.oA(!1,A.ep(w,w,w,E.Bm,new A.jV(this.a,new C.dcO(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:290}
C.dcO.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a99,B.oF,A.E(A.d(e,w,w,w,w,w,w,B.jm,w,w,w),1)],x.p),B.m,w,B.e,B.i,0,w,w)},
$S:732}
C.dcQ.prototype={
$0(){return this.a.a=!1},
$S:51}
C.dcR.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:200}
C.dcS.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:200}
C.dcT.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.Ba(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.la(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dcn.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.biN(B.q8,A4.N9)},
$S:0}
C.dco.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aHE(B.q8,A4.N9)},
$S:0}
C.deI.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.deJ.prototype={
$1(d){var w=this.a
return w.m(new C.deH(w))},
$S:8}
C.deH.prototype={
$0(){return this.a.e="page"},
$S:0}
C.deK.prototype={
$1(d){var w=this.a
return w.m(new C.deG(w))},
$S:8}
C.deG.prototype={
$0(){return this.a.e="book"},
$S:0}
C.deL.prototype={
$1(d){var w=this.a
return w.m(new C.deF(w))},
$S:8}
C.deF.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.deM.prototype={
$0(){var w=this.a
return w.m(new C.deE(w,this.b))},
$S:0}
C.deE.prototype={
$0(){var w=this.b
this.a.d.saX(0,w)
return w},
$S:0}
C.deN.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga2d()
A.a4(this.b,!1).O(new A.bqb(w,v))},
$S:0}
C.ddc.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.ddb.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.ZN(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.ddg.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.ddf.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b8V(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hb,v,v,v)
return A.ep(A.a([A.bN(!1,B.di,v,v,!0,v,v,v,new C.ddd(d),v,v),A.bH(B.x4,v,new C.dde(d),A.bo(B.na,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.Bm,w,v,v,v,v,D.fCK,v)},
$S:19}
C.ddd.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dde.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.ddh.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.ddi.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.cg(A.bX(B.bG,r,B.bq,t,18,14),B.t,t,B.y,t,D.bA_,t,t,B.ah)},
$S:331}
C.dda.prototype={
$0(){return this.a.Qw(0,this.b)},
$S:0}
C.dd9.prototype={
$0(){return this.a.PZ(0,this.b)},
$S:0}
C.cLG.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cLH.prototype={
$0(){return B.d.gI(D.zm)},
$S:z+14}
C.cLI.prototype={
$4(d,e,f,g){var w=null,v=A.n(e)
return A.bS(0,new A.D(d,A.c3(w,new A.o(w,w,A.J(this.a.j(f),B.r,g),v,w,w,B.n),B.bh),w),0,0,0)},
$S:1943}
C.d4f.prototype={
$1(d){return this.a.m(new C.d4e(this.b,this.c))},
$S:8}
C.d4e.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d4E.prototype={
$1(d){return this.a.m(new C.d4r())},
$S:2}
C.d4r.prototype={
$0(){},
$S:0}
C.d4F.prototype={
$1(d){return this.a.m(new C.d4q())},
$S:2}
C.d4q.prototype={
$0(){},
$S:0}
C.d4G.prototype={
$0(){var w=this.a
return w.m(new C.d4p(w,this.b))},
$S:0}
C.d4p.prototype={
$0(){var w=this.a
return w.d=w.gof().FU(this.b.a)},
$S:0}
C.d4H.prototype={
$0(){var w=this.a
return w.m(new C.d4o(w,this.b))},
$S:0}
C.d4o.prototype={
$0(){var w=this.a
return w.d=w.gof().cKm(this.b)},
$S:0}
C.d4I.prototype={
$1(d){return this.a.m(new C.d4n())},
$S:2}
C.d4n.prototype={
$0(){},
$S:0}
C.d4J.prototype={
$0(){var w=this.a
return w.m(new C.d4m(w,this.b))},
$S:0}
C.d4m.prototype={
$0(){var w=this.a
return w.d=w.gof().cKr(this.b.a)},
$S:0}
C.d4K.prototype={
$1(d){var w=this.a
return w.m(new C.d4z(w,d))},
$S:6}
C.d4z.prototype={
$0(){var w=this.a
return w.d=w.gof().cLl(this.b)},
$S:0}
C.d4L.prototype={
$1(d){var w=this.a
return w.d=w.gof().aEJ(d)},
$S:2}
C.d4M.prototype={
$1(d){var w=this.a
return w.d=w.gof().cKu(d)},
$S:2}
C.d4O.prototype={
$1(d){var w=this.a
return w.d=w.gof().cLj(d)},
$S:2}
C.d4P.prototype={
$1(d){var w=this.a
return w.m(new C.d4y(w,d))},
$S:8}
C.d4y.prototype={
$0(){var w=this.a
return w.d=w.gof().cLa(this.b)},
$S:0}
C.d4Q.prototype={
$0(){var w=this.a,v=w.gof(),u=B.a.i(w.gyB(0).a.a),t=B.a.i(w.gaBS().a.a)
u=v.bdw(B.a.i(w.garD().a.a),t,u)
A.a4(this.b,!1).O(u)
return null},
$S:0}
C.bQ4.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:9}
C.bPZ.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bPY(w,d))},
$S:11}
C.bPY.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a4(0)}},
$S:0}
C.bQ7.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bQ_.prototype={
$0(){var w=this.a
w.Q=D.aZ4
w.adq(1)
w.r.x=null},
$S:0}
C.bQ0.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.aZ4)return
w=new A.e5()
w.cY(u.as*13+u.a.e)
v=u.r
v.Q=3+w.ap(3)
v.z=D.cZW[w.ap(6)]
v.as=u.f.a+2.6},
$S:0}
C.bQ3.prototype={
$0(){var w=this.a
w.Q=D.abI
w.adq(2)
w.r.z=null},
$S:0}
C.bQ2.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hq3
t.adq(3)
w=t.r
w.d=s
w.x="I say: "+t.gC4()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.ap(3)
w.z=s?D.d5f[v.ap(4)]:D.dpS[v.ap(3)]
w.as=t.a+2.8},
$S:0}
C.bQ5.prototype={
$0(){var w=this.a
w.Q=D.aZ5
w.CW=this.b
w.cy=1
w.adq(4)
w.r.f=w.f.a+5},
$S:0}
C.bQ6.prototype={
$0(){},
$S:0}
C.bQ1.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ig()},
$S:0}
C.bPW.prototype={
$0(){return this.a.KJ(this.b)},
$S:0}
C.bPX.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ig()},
$S:0}
C.bRB.prototype={
$0(){var w=this
return w.a.QP(w.b,0,w.c,w.d)},
$S:0}
C.bRC.prototype={
$0(){var w=this
return w.a.QP(w.b,3,w.c,w.d)},
$S:0}
C.bRD.prototype={
$0(){var w=this
return w.a.QP(w.b,1,w.c,w.d)},
$S:0}
C.bRE.prototype={
$0(){var w=this
return w.a.bRq(w.b,w.c,w.d)},
$S:0}
C.bRF.prototype={
$0(){var w=this
return w.a.QP(w.b,4,w.c,w.d)},
$S:0}
C.bRG.prototype={
$0(){var w=this
return w.a.QP(w.b,2,w.c,w.d)},
$S:0}
C.bRH.prototype={
$0(){var w=this
return w.a.QP(w.b,5,w.c,w.d)},
$S:0}
C.bRI.prototype={
$2(d,e){return B.k.aK(d.a,e.a)},
$S:725}
C.bRA.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a4Q[d],p=q.a.a9(0,new A.t(0,-q.b*1.2*124)),o=A.fw(r,r,3,r,A.cS(r,r,r,r,r,r,r,r,r,D.fhJ,e),B.a4,B.bX,r,B.dA,B.bV)
o.o0(130)
w=o.b.a.c
w=p.aE(0,new A.t(0,w.gbb(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.br(A.bK(w,v.gbb(v)+12,u+18),B.hU)
u=this.a
v=t.eO(B.dC)
w=$.S()
s=A.I()
s.r=B.dm.gp(0)
u.az(v,s)
s=A.I()
s.r=D.q2.gp(0)
u.az(t,s)
w=new A.aF(w.r,B.ag,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.D(new A.aY(s-5,v))
w.D(new A.aq(s+1,p.b+1))
w.D(new A.aq(s+6,v))
w.D(new A.bs())
v=A.I()
v.r=D.q2.gp(0)
u.aH(w,v)
o.a3(u,new A.t(t.a+9,t.b+6))},
$S:721}
C.bQl.prototype={
$2(d,e){return B.o.aK(d.Q,e.Q)},
$S:z+7}
C.bQm.prototype={
$2(d,e){var w=this.a,v=B.o.aK(w.alS(d),w.alS(e))
if(v!==0)return v
return B.o.aK(d.Q,e.Q)},
$S:z+7}
C.fpC.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.fZn.prototype={
$2(d,e){if(e!=null)J.ca(this.a.c3(0,d,new C.fZo()),e)},
$S:z+66}
C.fZo.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.fZp.prototype={
$1(d){return d!==this.a},
$S:3}
C.fZq.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.fZr.prototype={
$1(d){return d!==this.a&&!B.d.b3(this.b,new C.fZm(this.c,d))},
$S:3}
C.fZm.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fZs.prototype={
$1(d){return d!==this.a},
$S:3}
C.fZt.prototype={
$1(d){return d!==this.a},
$S:3}
C.fZu.prototype={
$1(d){return d!==this.a&&!B.d.b3(this.b,new C.fZl(this.c,d))},
$S:3}
C.fZl.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fC8.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fQc.prototype={
$1(d){return d.Q},
$S:z+15}
C.fQd.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fyz.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fEN.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bLk.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.fZN.prototype={
$2(d,e){return B.o.aK(C.hqS(d),C.hqS(e))},
$S:223}
C.fZO.prototype={
$1(d){return d!==this.a},
$S:3}
C.fQI.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bJy.prototype={
$0(){var w=this.a
w.ch=!0
w.b79()},
$S:0}
C.bJt.prototype={
$0(){},
$S:0}
C.bJz.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bJr.prototype={
$0(){},
$S:0}
C.bJs.prototype={
$0(){},
$S:0}
C.bJx.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bS(0,A.b4(u,u,u,new C.bc_(t,u),B.aw),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.n(14)
s.push(A.ap(u,A.p(u,A.d(t.dy,u,u,u,u,u,u,D.fpe,B.K,u,u),B.f,u,u,new A.o(w,u,u,v,u,u,B.n),u,u,u,u,B.bT,u,u,u),u,u,14,14,6,u))}return A.aB(B.c5,new A.an(B.a_,u,B.ab,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bJu(t,e),u,u,u,u,u,u,u,new C.bJv(t,e),u,u,u,u,u,u,u,u,u,new C.bJw(t,e),u,u,u,u,!1,B.a3)},
$S:36}
C.bJu.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:18}
C.bJw.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:22}
C.bJv.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:18}
C.bJq.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ig()},
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
v.giU()[w.b]=w.c
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
w.z=w.X0(++w.e)
w.Q=A.bZ(w.gkL()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cni.prototype={
$0(){return A.a4(this.a,!1).ig()},
$S:0}
C.cnj.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.giU().length,e=i/2,d=new C.cnk(i,f,h),a0=g.as,a1=A.a7(a0).k("bd<2>")
a0=A.C(new A.bd(a0,a1),a1.k("M.E"))
a0=A.bS(0,A.cb(new A.h8(a0),new C.cnd(g,new A.t(e,56),f,d),j),0,0,0)
a1=this.b
w=g.giU().length!==0&&!B.d.t(g.giU(),-1)
v=x.p
e=A.a([a0,A.ap(j,new C.Q7(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cN(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new S.Mm(new C.cne(g,u),new C.cnf(g,u),new C.cng(g,u),j,j,new A.bV("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ap(j,A.d(a1,j,j,j,j,j,j,A.l(j,j,B.a.t(a1,"not a child")?B.f8:B.be,j,j,j,j,j,j,j,j,13,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.giU().length!==0&&!B.d.t(g.giU(),-1)){a0=g.e+1>=g.gkL().length?"See my result":"Next family"
g=A.au(C.uj(a0,g.gq7(g),B.cI,B.jA,D.fq),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.X0(0):s).length))break
if(!B.d.t(g.giU(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.X0(0)
o=s}else o=s
n=s[u]
n=A.ef(B.A,new C.Q7(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.X0(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.qW(new A.bp(0,p,t),new C.cnh(),new S.DV(u,j,new C.Q7(l.b,k,62,!1,j),new A.kB(0.25,new C.Q7(m.b,k,62,!1,j),j),new A.k6(n,B.ai,!1,0,B.L,j,j,j,j,!0,B.f,B.a2,j,j),B.I,S.hun(),!0,!0,j,j,j,j,j,j,!1,B.iW,j,new A.bV("chip-"+r,a0),w),B.b7,B.iU,j,new A.bV("t"+r+"-"+q,a0),v))}++u}g=A.bX(B.fI,a1,B.bq,j,6,8)}e.push(A.ap(0,g,j,j,0,0,j,j))
return new A.an(B.a_,j,B.ab,B.t,e,j)},
$S:64}
C.cnk.prototype={
$1(d){return new A.t(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:541}
C.cnd.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.giU().length!==0&&!B.d.t(t.giU(),-1)
return A.b4(p,p,p,new C.bbv(q.b,o,v,w,p),B.aw)},
$S:63}
C.cnf.prototype={
$1(d){return this.a.giU()[this.b]===-1},
$S:z+30}
C.cng.prototype={
$1(d){return this.a.cOa(this.b,d.a)},
$S:z+31}
C.cne.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.giU()[t]!==-1,r=A.n(18),q=e.length!==0?B.cI.j(0.3):B.L
if(s)w=v
else w=A.J(e.length!==0?B.cI:B.jN,B.r,2)
u=s?A.lw(new C.cnc(),A.au(new C.Q7(u.gaEb()[u.giU()[t]].b,u.gaEb()[u.giU()[t]].a,62,!1,v),v,v,v),B.lt,B.iU,v,v,new A.bp(0.3,1,x.X),x.i):D.b8Q
return A.da(v,u,v,v,B.b7,new A.o(q,v,w,r,v,v,B.n),B.a2,v,100,v,v,v,v,v,88)},
$S:1946}
C.cnc.prototype={
$3(d,e,f){return A.ef(B.A,f,e,null,null)},
$S:109}
C.cnh.prototype={
$3(d,e,f){return A.dP(f,new A.t(Math.sin(e*24)*8*(1-e),0))},
$S:109}
C.cMK.prototype={
$1(d){return d>=1},
$S:121}
C.cCh.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkL()[w.e].d.length)w.m(new C.cCg(w))},
$S:11}
C.cCg.prototype={
$0(){return this.a.f++},
$S:0}
C.cCp.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cCq.prototype={
$0(){var w=this.a,v=this.b
w.z.M(0,v)
w.Q=v},
$S:0}
C.cCr.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cCo(w))},
$S:0}
C.cCo.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cCs.prototype={
$0(){return this.a.f++},
$S:0}
C.cCt.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cCu.prototype={
$0(){},
$S:0}
C.cCv.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.aa(0)
w.as=!1
w.ay=0},
$S:0}
C.cCj.prototype={
$0(){return A.a4(this.a,!1).ig()},
$S:0}
C.cCk.prototype={
$3(d,e,f){var w=null
return A.lw(new C.cCi(this.a,e),w,B.b7,B.hu,w,w,new A.bp(w,this.b,x.X),x.i)},
$S:1947}
C.cCi.prototype={
$3(d,e,f){var w,v,u=null,t=this.a,s=B.cI.j(t.as?0.6:0.15)
s=A.a([new A.ac(0,B.G,s,B.I,t.as?40:18)],x.V)
w=B.w.j(e)
v=this.b
v=A.TJ(v,v,B.Vo)
return A.p(u,A.hU(new A.Bk(new A.xq(w,B.Lh,u,B.Xm),H.bVP(A.b4(u,u,u,new C.aAL(t.gkL()[t.e].c,t.as,u),B.aw),v),u),B.ap),B.f,u,u,new A.o(u,u,u,u,s,u,B.a6),u,190,u,u,u,u,u,190)},
$S:1948}
C.cCl.prototype={
$3(d,e,f){return A.db(A.dP(f,new A.t(0,14*(1-e))),e)},
$S:101}
C.cCm.prototype={
$3(d,e,f){return A.dP(f,new A.t(Math.sin(e*22)*8*(1-e),0))},
$S:109}
C.cCn.prototype={
$0(){return this.a.bo9(this.b)},
$S:0}
C.f2p.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.amo$)
v.amo$=w
v.pX$.sp(0,w)
v.aq_(u)},
$S:9}
C.fct.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a4(0)
w.a.$0()},
$S:11}
C.bR6.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bR5())},
$S:0}
C.bR5.prototype={
$0(){},
$S:0}
C.bR3.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bR1.prototype={
$0(){},
$S:0}
C.bR2.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gMx()
w=s+1>=r.length?3:5
break
case 3:q=C.bFi(p.gaoP(0),0,r.length)
p.m(new C.bQZ(p,q))
o=p
w=6
return A.b(C.Bu(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.Bv(s.d,s.c.a,"school",p.gaoP(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bR_())
w=4
break
case 5:p.m(new C.bR0(p))
p.gqe().Vz(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bQZ.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bR_.prototype={
$0(){},
$S:0}
C.bR0.prototype={
$0(){return this.a.x++},
$S:0}
C.bR4.prototype={
$0(){return this.a.KJ(this.b)},
$S:0}
C.bQY.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ig()},
$S:0}
C.f2q.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.t(t,s),q=v.b,p=v.d,o=p?C.hux(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.DG
C.RW(q,D.ehh,0,0.2,-0.6,-0.2,null,w,D.eg2,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a9(0,new A.t(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.S()
p=A.I()
p.r=D.FG.gp(0)
p.c=3
p.d=B.bA
q.bo(new A.t(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f2r.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.RW(this.a,D.egm,0,u,0.7,-0.5,null,null,D.J5,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f2s.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.RW(this.a,D.ei3,0,0,0.8,-0.5,null,null,D.J5,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f2t.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.RW(w.b,D.ehb,0,v,-0.8,-0.5,null,null,D.J5,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f2u.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.t(34,-122+Math.sin(w*5)*5)
else v=v?D.ehf:D.DG
C.RW(p,D.egG,0,t,0,-0.6,null,v,D.J5,3,0,s,1.3,u,0,w,0)
q=q.c9C(new A.t(222,455),9)
$.S()
w=A.I()
w.r=B.cI.gp(0)
p.aH(q,w)},
$S:0}
C.f2v.prototype={
$2(d,e){return B.k.aK(d.a,e.a)},
$S:725}
C.bQK.prototype={
$2(d,e){return d+e},
$S:70}
C.bQV.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bQW.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bQX.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.giU()[u.b]=s
t.giU()[u.d]=t.y
w=t.as
v=t.pX$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bQR.prototype={
$1(d){return d},
$S:112}
C.bQQ.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.pX$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bQS.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bQT.prototype={
$0(){},
$S:0}
C.bQU.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.Fl(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.cu(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.aa(0)},
$S:0}
C.bQM.prototype={
$0(){return A.a4(this.a,!1).ig()},
$S:0}
C.bQN.prototype={
$2(d,e){var w=this.a
w=w.gkL()[w.f].e
return B.o.aK(w[d],w[e])},
$S:70}
C.bQO.prototype={
$2(d,e){var w=null,v=C.h6x(new A.av(A.aR(1/0,e.a,e.b),A.aR(1/0,e.c,e.d))),u=this.a
return A.aB(B.c5,new A.er(A.b4(w,w,w,new C.biG(u,u.pX$),B.aw),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bQL(u,v),w,w,w,w,!1,B.a3)},
$S:36}
C.bQL.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.giU().length
u=B.o.E(B.k.bf((t.a-s.a)/r/450*v),0,v-1)
w.cYO(w.giU()[u])}},
$S:22}
C.bQP.prototype={
$1(d){var w=this.a
return w.gkL()[w.f].d[d]},
$S:73}
C.dnQ.prototype={
$2(d,e){return 0},
$S:70}
C.bQw.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bQv())},
$S:0}
C.bQv.prototype={
$0(){},
$S:0}
C.bQu.prototype={
$0(){},
$S:0}
C.bQo.prototype={
$0(){},
$S:0}
C.bQp.prototype={
$0(){},
$S:0}
C.bQt.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.AC},
$S:0}
C.bQs.prototype={
$1(d){var w=null,v=this.a.gqe(),u=A.d(d,w,w,w,w,w,w,D.aT_,w,w,w),t=v.gbkB(0)
return A.aB(B.c5,A.x(A.a([u,B.bF,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aTe,w,w,w)],x.p),B.E,w,B.e,B.i,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbqr(v),w,w,w,w,w,w,!1,B.a3)},
$S:133}
C.bQq.prototype={
$0(){return this.a.KJ(this.b)},
$S:0}
C.bQr.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ig()},
$S:0}
C.bQn.prototype={
$0(){return A.a4(this.a,!1).ig()},
$S:0}
C.dYx.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dYy.prototype={
$1(d){return this.a},
$S:40}
C.dYz.prototype={
$0(){var w=this.a
return w.d=w.gSx().bd_(this.b)},
$S:0}
C.dYv.prototype={
$1(d){return new C.Tb(this.a,null)},
$S:z+32}
C.dYw.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.dYu.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hb,w,w,w)
return A.ep(A.a([A.bN(!1,E.aUA,w,w,!0,w,w,w,new C.dYs(d),w,w),A.bN(!1,D.fKh,w,w,!0,w,w,w,new C.dYt(d),w,w)],x.p),w,w,D.fq,v,w,w,w,w,D.fwW,w)},
$S:19}
C.dYs.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dYt.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dYr.prototype={
$0(){var w=null,v=this.a.c.K(x.q).f,u=this.b
return v.U(A.b3(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dYA.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:14}
C.dYB.prototype={
$0(){var w=this.a,v=this.b,u=C.bD1(v,10,w.r,!1)
return w.u9(C.hf2(w.a.d,"kahoot",u,w.gb4J(),v.b,"Family Kahoot",v.a))},
$S:0}
C.dYC.prototype={
$0(){var w=this.a
return w.u9(new C.al7(this.b,w.a.d,w.r,null))},
$S:0}
C.dYD.prototype={
$0(){var w=this.a
return w.u9(new C.ajk(this.b,w.a.d,w.r,null))},
$S:0}
C.dYG.prototype={
$0(){var w=this.a
return w.u9(new C.au0(this.b,w.a.d,w.r,null))},
$S:0}
C.dYH.prototype={
$0(){var w=this.a
return w.u9(new C.axW(this.b,w.a.d,w.r,null))},
$S:0}
C.dYI.prototype={
$0(){var w=this.a
return w.u9(new C.ala(this.b,w.a.d,w.r,null))},
$S:0}
C.dYJ.prototype={
$0(){var w=this.a
return w.u9(new C.ale(this.b,w.a.d,w.r,null))},
$S:0}
C.dYK.prototype={
$0(){var w=this.a
return w.u9(new C.alg(this.b,w.a.d,w.r,null))},
$S:0}
C.dYL.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.cZ7()
return v.u9(C.hf2(v.a.d,"creator_"+u.a,w,v.gb4J(),"A game by the family",t,this.c.a))},
$S:0}
C.dYM.prototype={
$0(){return this.a.Ox(this.b)},
$S:0}
C.dYN.prototype={
$0(){return this.a.Xs(0,this.b)},
$S:0}
C.dYE.prototype={
$0(){return this.a.Ox(null)},
$S:0}
C.dYF.prototype={
$0(){return this.a.K(x.q).f.U(D.faG)},
$S:0}
C.bQI.prototype={
$0(){var w=this.a
w.d=D.aYw
w.z=3},
$S:0}
C.bQJ.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a4(0)
w.aOq()}else w.m(new C.bQH(w))},
$S:11}
C.bQH.prototype={
$0(){return this.a.z--},
$S:0}
C.bQy.prototype={
$0(){var w=this.a
w.d=D.abm
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bQz.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bQx(w))
if(w.as<=0){d.a4(0)
w.b4F(-1)}},
$S:11}
C.bQx.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bQE.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.W_},
$S:0}
C.bQF.prototype={
$0(){return this.a.e++},
$S:0}
C.bQB.prototype={
$0(){var w=this.a
w.d=D.aYx
w.ay=this.b},
$S:0}
C.bQC.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bQG.prototype={
$2(d,e){return B.o.aK(e.b,d.b)},
$S:1949}
C.bQD.prototype={
$0(){return this.a.KJ(this.b)},
$S:0}
C.bQA.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ig()},
$S:0}
C.bQ8.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.ax()
s=A.a([new A.as(new A.ba(s,B.b3,B.aO),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.L)(t),++v){u=t[v]
s.push(new A.as(new A.ba(u,B.b3,B.aO),r))}return s},
$S:1950}
C.bQ9.prototype={
$0(){return this.a.gCI().c.push(C.h0n(null,0,20,""))},
$S:0}
C.bQj.prototype={
$1(d){var w=null
return A.bt(w,new A.b5(4,A.n(12),B.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.ds,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.UV,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:270}
C.bQi.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gCI().c,m=this.b,l=n[m],k=o.cch(l),j=B.c.j(0.06),i=A.n(18),h=A.J(B.aY,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.Kf,p,p,p),B.b1],g)
if(n.length>1)f.push(A.aG(p,p,p,p,B.apt,p,p,p,new C.bQd(o,m),p,p,p,p,p,p))
n=J.a6(k)
m=this.c
f=A.a([A.B(f,B.m,p,B.e,B.i,0,p,p),A.aM(p,B.Y,!1,p,!0,B.t,p,A.aN(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.aj,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bQe(l),p,p,p,!1,p,p,!1,p,!0,p,B.aa,p,p,p,p,p,p,p,p,p,p,p,B.df,!0,B.a4,p,B.ao,p,p,p,p),B.P],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aBb[v]
t=D.aAV[v]
s=v+1
f.push(new A.D(B.eH,new A.cd(B.aM,B.e,B.i,B.m,p,B.p,p,0,A.a([new A.y(u,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p),B.ac,new A.bz(1,B.ba,A.aM(p,B.Y,!1,p,!0,B.t,p,A.aN(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.aj,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bQf(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.aa,p,p,p,p,p,p,p,p,p,p,p,B.df,!0,B.a4,p,B.ao,p,p,p,p),p),new Av.OP(v,l.c,new C.bQg(o,l),p,!1,D.lw,p,p,p,p,p,!1,!1,p,L.aYV,p,p,p,p,p,w)],g),p),p))}f.push(D.fCp)
f.push(B.am)
n=A.a([D.fw0,B.ac],g)
for(r=0;r<3;++r){q=D.c9o[r]
n.push(new A.D(B.fB,A.iS(p,p,p,new A.y(""+q+"s",p,p,p,p,p,p,p,p,p,p,p),p,new C.bQh(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.B(n,B.m,p,B.e,B.i,0,p,p))
return A.p(p,A.x(f,B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.n),p,p,p,B.kH,B.bg,p,p,p)},
$S:150}
C.bQd.prototype={
$0(){var w=this.a
return w.m(new C.bQc(w,this.b))},
$S:0}
C.bQc.prototype={
$0(){return B.d.cz(this.a.gCI().c,this.b)},
$S:0}
C.bQe.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bQf.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bQg.prototype={
$1(d){return this.a.m(new C.bQb(this.b,d))},
$S:174}
C.bQb.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bQh.prototype={
$1(d){return this.a.m(new C.bQa(this.b,this.c))},
$S:8}
C.bQa.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e_c.prototype={
$0(){var w=this.a
w.w6()
w.a.bu()
w.a.q8()},
$S:0}
C.e_b.prototype={
$0(){var w=this.a
w.w6()
w.a.bu()
w.a.q8()},
$S:0}
C.e_e.prototype={
$0(){var w=this,v=w.b
if(J.cL(v)||J.ct(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e_f.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e_g.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e_a.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e_d.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e_i.prototype={
$0(){this.a.OT()
return null},
$S:0}
C.e_h.prototype={
$0(){return this.a.EH(this.b)},
$S:0}
C.dZD.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bN(!1,B.di,w,w,!0,w,w,w,new C.dZB(d),w,w),r=A.bo(B.bP,w,w,w,w,w,w,w,w,w,w,w)
return A.ep(A.a([s,A.bH(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.dZC(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:19}
C.dZB.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dZC.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dZE.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cKQ(this.b)},
$S:0}
C.dZy.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aTR(w.b,w.c,w.d)},
$S:9}
C.dZ_.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.dZ0.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dZh.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.GS(t.a.c),$async$$0)
case 2:s=r.pU(q.dI(e,new C.dZf(t)))
if(s!=null&&t.c!=null)t.m(new C.dZg(t,s))
t.a.bu()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dZf.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.dZg.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dZi.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.dZj.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dZx.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cLD(C.huD(w),w)},
$S:0}
C.dZe.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.Vx(u,w,C.aQ_(u,w),new C.dZd(v),null)},
$S:z+37}
C.dZd.prototype={
$1(d){return this.blY(d)},
blY(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.dZc(s,d))
w=3
return A.b(s.u5(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:709}
C.dZc.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.bd_(this.b)},
$S:0}
C.dZu.prototype={
$1(d){return d.as},
$S:z+1}
C.dZv.prototype={
$1(d){var w=this
return new A.e1(new C.dZt(w.a,w.b,w.c,w.d,w.e),null)},
$S:21}
C.dZt.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.e3:B.c,h=A.n(26),g=A.J(B.bP.j(0.5),B.r,1.5),f=A.p(k,D.bPz,B.f,k,k,new A.o(B.bP.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a1,k,k,k,A.l(k,k,j?B.bt:B.bm,k,k,k,k,k,k,k,k,12.5,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.i,0,B.p),1)
f=A.B(A.a([f,B.bc,a0,A.aG(k,k,k,k,A.X(B.cz,j?B.bt:B.bm,k,k,k,k),k,k,k,new C.dZn(a1),k,k,k,k,k,k)],w),B.m,k,B.e,B.i,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bt:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.L)(v),++s){r=v[s]
q=t.a===r?B.bP:B.bP.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.ay(B.bP,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bP
a0.push(A.aB(k,A.da(k,new A.y(m,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k),k,k,B.b7,new A.o(q,k,new A.bI(n,n,n,n),new A.bj(p,p,p,p),k,k,B.n),B.ht,k,k,k,k,B.BN,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.dZo(t,a2,r),k,k,k,k,k,k,!1,B.a3))}a0=A.bX(B.bG,a0,B.bq,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c0t,new A.D(D.bAo,f,k),new A.D(D.bAf,e,k),new A.D(B.ru,a0,k),new A.D(X.akV,A.d(v,k,k,k,k,k,k,A.l(k,k,j?B.bt:B.bm,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(A3.anh,j?B.bt:B.bm,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bAh,A.B(A.a([a0,B.as,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,k,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.Yd(k,B.bP,k,k,!1,B.y,k,k,k,k,k,k,new C.dZp(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.m,k,B.e,B.i,0,k,k),k))}f.push(B.aA)
j=A.n(20)
e=A.a([new A.ac(0,B.G,B.aC.j(0.35),B.j1,12)],x.V)
f.push(A.aB(k,A.p(k,A.B(A.a([D.fwm,B.bc,D.bEy,D.bQf],w),B.m,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.c4c,B.n),k,k,k,B.hO,B.bE,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.dZq(t,a1),k,k,k,k,k,k,!1,B.a3))
f.push(new A.D(B.w1,A.B(A.a([A.E(A.dT(B.di,new C.dZr(a1),k),1),B.as,A.E(A.bH(M.aV_,k,new C.dZs(t,a1),A.bo(B.bP,k,k,k,k,k,B.cl,k,k,k,k,k)),1)],w),B.m,k,B.e,B.i,0,k,k),k))
return A.bm(!0,A.p(k,A.cg(A.x(f,B.E,k,B.e,B.O,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.ap,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.BJ,k,k,k,k),!0,!1,B.af,!0,!0)},
$S:86}
C.dZn.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dZo.prototype={
$0(){return this.b.$1(new C.dZm(this.a,this.c))},
$S:0}
C.dZm.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.dZp.prototype={
$1(d){var w=this.a
w.m(new C.dZk(w,d))
this.b.$1(new C.dZl())},
$S:8}
C.dZk.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dZl.prototype={
$0(){},
$S:0}
C.dZq.prototype={
$0(){var w=this.a.a
A.a4(this.b,!1).O(new A.aGN(!0,w))
return null},
$S:0}
C.dZr.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dZs.prototype={
$0(){var w=this.a.a
A.a4(this.b,!1).O(new A.aGN(!1,w))
return null},
$S:0}
C.dZw.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cLq(this.b.b)
w.r.aa(0)},
$S:0}
C.dYO.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.aid(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.ho7(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.dYP.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aEG(w)},
$S:0}
C.dZG.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.adx(this.b,w,this.c,null)},
$S:z+39}
C.dZA.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.e3:B.c,t=A.n(20),s=A.X(B.lI,B.aW,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bt:B.bm,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ae,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bt:B.bm,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.m,w,B.e,B.O,0,B.p)
return A.ep(A.a([A.bH(D.fO0,w,new C.dZz(d),A.bo(B.aW,w,w,w,w,w,w,w,w,w,w,w))],o),B.b9,w,u,v,w,s,w,new A.b8(t,B.a0),r,w)},
$S:19}
C.dZz.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dYQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dYR.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dYS.prototype={
$1(d){return d.a},
$S:z+8}
C.dYT.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.L)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hV(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aEG(w)},
$S:0}
C.dYX.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.aid(q)
w=A.T(q).k("Z<1>")
q=A.C(new A.Z(q,new C.dYV(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.ho7(v.e,null,r,v.f,v.r,new C.dYW(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.dYW.prototype={
$0(){return this.a.aaC(this.b)},
$S:0}
C.dYV.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dYY.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("N<1,hV>")
w=A.C(new A.N(w,new C.dYU(this.b),v),v.k("ak.E"))
u.d=t.aEG(w)},
$S:0}
C.dYU.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.dZF.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dZ9.prototype={
$1(d){return d.length!==0},
$S:3}
C.dZa.prototype={
$1(d){var w=this
return new A.e1(new C.dZ8(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dZ8.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.e3:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.av,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bt:B.bm,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ae],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bt:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.N(o,new C.dZ4(u,e,o),A.T(o).k("N<1,v>")))
p.push(B.P)
u=w.d
p.push(A.aM(v,B.Y,!1,v,!0,B.t,v,A.aN(),u,v,v,v,v,v,2,A.bt(v,new A.b5(4,A.n(12),B.dk),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.aj,v,v,v,v,v,B.mp,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.aa,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a4,v,B.ao,v,v,v,v))
p=A.x(p,B.ak,v,B.e,B.O,0,B.p)
t=w.a
return A.ep(A.a([A.bN(!1,B.di,v,v,!0,v,v,v,new C.dZ5(d),v,v),A.bH(B.Kq,v,new C.dZ6(t,u,o,e),A.bo(B.bP,v,v,v,v,v,v,v,v,v,v,v)),A.bH(D.fAN,v,new C.dZ7(t,u,o,d),A.bo(B.aW,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:181}
C.dZ4.prototype={
$1(d){var w=null
return A.dG(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aG(w,w,w,w,D.bYj,w,w,w,new C.dZ3(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1951}
C.dZ3.prototype={
$0(){return this.a.$1(new C.dZ1(this.b,this.c))},
$S:0}
C.dZ1.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dZ5.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dZ6.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dZ2(w.c,u))
v.bP(0,B.cb)}},
$S:0}
C.dZ2.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dZ7.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a4(w.d,!1).O(!0)},
$S:0}
C.dZb.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cM4(this.b,D.ue,C.GQ(v,w.a.c))},
$S:0}
C.dZN.prototype={
$1(d){return d.as},
$S:z+1}
C.dZO.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iW(this.b,w)},
$S:0}
C.dZP.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.ijv(v)
return w.Wj(v==null?null:v.a)},
$S:0}
C.dZQ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hWi(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aR(1/0,e.a,e.b)
s=A.aR(1/0,e.c,e.d)
l.ctC(new A.av(u,t),v.gbjG(),new A.av(k,s))}k=A.n(22)
s=this.b.a
r=s?D.cXR:D.cW4
q=A.J(s?B.ds:D.bgq,B.r,1)
p=A.n(22)
o=A.bS(0,A.b4(m,m,m,new C.beM(s,m),B.aw),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bx(p,new A.an(B.a_,m,B.ab,B.t,A.a([o,A.bS(0,A.uM(new A.Q(n,n,n,n),new A.a5(u,t,new C.bfH(l.d,v,l.f,w,new C.dZJ(l),l.gcdt(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ap(10,new C.bxp(s,new C.dZK(l,e),new C.dZL(l,e),new C.dZM(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.f,m,m,new A.o(m,m,q,k,m,new A.a9(B.b_,B.b5,B.x,r,m,m),B.n),m,m,m,A_.ak1,m,m,m,m)},
$S:212}
C.dZJ.prototype={
$1(d){var w=this.a
w.m(new C.dZH(w,d))},
$S:2}
C.dZH.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.M(0,v)},
$S:0}
C.dZK.prototype={
$0(){var w=this.b
return this.a.bbd(1.25,new A.av(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.dZL.prototype={
$0(){var w=this.b
return this.a.bbd(0.8,new A.av(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.dZM.prototype={
$0(){var w=this,v=w.b
return w.a.aTR(new A.av(A.aR(1/0,v.a,v.b),A.aR(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gbjG())},
$S:0}
C.dZR.prototype={
$0(){var w=this.a
return w.m(new C.dZI(w))},
$S:0}
C.dZI.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dYZ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fH(new A.fB(s.c)),$async$$0)
case 2:t.y4("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.ddm.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ap(w,new C.bjx(u,C.hyS(v.c,u),new C.ddl(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.ddl.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.ddn.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ap(w,new C.bmQ(d.d,d.c,u.f.t(0,d.a),new C.ddk(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.ddk.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fBF.prototype={
$1(d){var w,v=d.e
if(this.a.aj(0,v))return v
v=this.b
w=A.T(v)
return A.pU(new A.cQ(new A.Z(v,new C.fBG(d),w.k("Z<1>")),new C.fBH(),w.k("cQ<1,m>")))},
$S:z+19}
C.fBG.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fBH.prototype={
$1(d){return d.a},
$S:z+8}
C.fBD.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fBE.prototype={
$1(d){return d.b},
$S:z+8}
C.fBK.prototype={
$1(d){var w,v=d.e
if(this.a.aj(0,v))return v
v=this.b
w=A.T(v)
return A.pU(new A.cQ(new A.Z(v,new C.fBL(d),w.k("Z<1>")),new C.fBM(),w.k("cQ<1,m>")))},
$S:z+19}
C.fBL.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fBM.prototype={
$1(d){return d.a},
$S:z+8}
C.fBI.prototype={
$1(d){var w,v=A.eE([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.aj(0,w)&&v.M(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fBJ.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.ddp.prototype={
$0(){return this.a},
$S:z+46}
C.ddG.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.aj(0,d)},
$S:244}
C.ddy.prototype={
$2(d,e){var w=this.a.c3(0,d,new C.ddz()),v=J.a6(w)
if(!v.t(w,e))v.M(w,e)},
$S:117}
C.ddz.prototype={
$0(){return A.a([],x.s)},
$S:720}
C.ddx.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f0(w,e)
return w===!0},
$S:320}
C.ddq.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.ddw.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.ddv.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.M(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aW(v==null?D.D0:v)
u=1
while(v.C())u+=s.$2(v.gS(v).a,e)
v=s.b.h(0,d)
v=J.aW(v==null?B.Y:v)
while(v.C()){t=v.gS(v)
if(e.t(0,t))continue
e.M(0,t)
t=w.h(0,t)
t=J.aW(t==null?D.D0:t)
while(t.C())u+=s.$2(t.gS(t).a,e)}return u},
$S:1953}
C.ddr.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.ddA.prototype={
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
break}A:{s=u.gS(u)
if(a8.t(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.M(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aW(t==null?D.D0:t)
while(t.C()){r=t.gS(t)
if(r.a!==a9&&!B.d.b3(w,new C.ddB(r)))w.push(r)}}B.d.bs(w,new C.ddC(a8))
B.d.aY(w,new C.ddD())
q=C.hWh(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.L)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eNX],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.L)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.n(0,a9,a8)
if(o.length===0)return A.a([new A.z(-p,p)],x.G)
a8=x.n
k=A.a([],a8)
j=A.a([],a8)
for(a8=n.length,m=0;m<n.length;n.length===a8||(0,A.L)(n),++m){i=n[m]
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
$S:1954}
C.ddB.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.ddC.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.ddD.prototype={
$2(d,e){return B.o.aK(d.Q,e.Q)},
$S:z+7}
C.ddE.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a6(n),v=o.c,u=-1/0,t=0;t<w.gL(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bd(v,A.a7(v).k("bd<2>")).cI(0,0,B.pL)+88-w.gI(n).a}else u=0
for(w=J.a6(n),v=o.c,t=0;t<w.gL(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:604}
C.ddF.prototype={
$1(d){return 16+d*156},
$S:247}
C.ddo.prototype={
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
t.n(0,d,new C.G8(r,new A.t(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.G8(s,new A.t(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.G8(s,new A.t(e,v)))}t=o.r.h(0,d)
t=J.aW(t==null?B.Y:t)
s=o.w
while(t.C()){r=t.gS(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Kp(d,new A.t(e+t,w),s,s.length))}},
$S:200}
C.dds.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aJV(new A.t(v.a,v.b+28),new A.t(w.a,w.b+28),!0,null))},
$S:117}
C.ddt.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.ddu.prototype={
$2(d,e){return B.k.aK(d.a,e.a)},
$S:710}
C.ddH.prototype={
$2(d,e){return B.k.aK(d.a,e.a)},
$S:710}
C.ddI.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:463}
C.ddJ.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:187}
C.ddK.prototype={
$1(d){return d>=0.5},
$S:121}
C.fig.prototype={
$3(d,e,f){var w=null,v=A.n(10)
return A.he(A.aO(!1,v,!0,new A.a5(38,38,A.X(d,this.a.c?B.c:B.cr,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1956}
C.eTh.prototype={
$1(d){var w=null,v=A.n(8),u=B.bP.j(0.12),t=A.n(8)
return new A.D(B.no,A.aO(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fm8,B.K,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.NG,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eTg(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eTg.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dtv.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dtu.prototype={
$1(d){var w=null,v=A.n(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nH,B.K,w,w)
return A.ep(A.a([A.bN(!1,B.di,w,w,!0,w,w,w,new C.dts(d),w,w),A.bN(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.mz,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dtt(d),w,w)],x.p),B.b9,B.BK,w,u,D.bBi,w,D.bDf,new A.b8(v,B.a0),w,w)},
$S:19}
C.dts.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dtt.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dtE.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dtF.prototype={
$1(d){var w=this.a
return w.m(new C.dtD(w,d))},
$S:z+49}
C.dtD.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dtG.prototype={
$1(d){var w=null
return A.qA(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dtJ.prototype={
$1(d){var w=this.a
return w.m(new C.dtC(w,d))},
$S:34}
C.dtC.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dtI.prototype={
$1(d){var w=null
return A.qA(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dtK.prototype={
$1(d){var w=this.a
return w.m(new C.dtB(w,d))},
$S:34}
C.dtB.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dtL.prototype={
$0(){var w=this.a
return w.m(new C.dtA(w))},
$S:0}
C.dtA.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dtM.prototype={
$0(){var w=this.a
return w.m(new C.dtz(w))},
$S:0}
C.dtz.prototype={
$0(){return++this.a.at},
$S:0}
C.dtN.prototype={
$0(){var w=this.a
return w.m(new C.dty(w))},
$S:0}
C.dty.prototype={
$0(){return--this.a.ax},
$S:0}
C.dtO.prototype={
$0(){var w=this.a
return w.m(new C.dtx(w))},
$S:0}
C.dtx.prototype={
$0(){return++this.a.ax},
$S:0}
C.dtP.prototype={
$1(d){var w=this.a
return w.m(new C.dtw(w,d))},
$S:8}
C.dtw.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dtH.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dtQ.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.n(12)
if(p)w=B.bP.j(0.18)
else w=q.c.a?B.e3:B.c
v=A.n(12)
if(p)u=B.bP
else u=(q.c.a?B.e8:B.bO).j(0.85)
u=A.J(u,B.r,p?1.5:1)
if(p)t=B.bP
else t=q.c.a?B.bt:B.bm
t=A.X(f,t,r,r,r,18)
if(p)s=B.bP
else s=q.c.a?B.bt:B.bm
return A.E(A.aH(!1,B.a2,!0,r,A.aO(!1,o,!0,A.da(r,A.x(A.a([t,B.au,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.i,0,B.p),r,r,B.b7,new A.o(w,r,u,v,r,r,B.n),B.eN,r,r,r,r,B.jQ,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dtR(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
$S:z+51}
C.dtR.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.du_.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.ccZ.prototype={
$2(d,e){return new A.bA(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:96}
C.cd5.prototype={
$1(d){return d.ah()},
$S:z+5}
C.cd6.prototype={
$2(d,e){var w=J.b6(e,new C.cd4(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bA(d,w,x.d2)},
$S:z+53}
C.cd4.prototype={
$1(d){return d.ah()},
$S:z+12}
C.cd0.prototype={
$1(d){return C.alj(A.a2(d,x.N,x.z))},
$S:z+9}
C.cd1.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cd2.prototype={
$1(d){return C.hf1(A.a2(d,x.N,x.z))},
$S:z+11}
C.cd3.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cda.prototype={
$1(d){return new A.aGZ(d.f.length,d.a,d.b)},
$S:z+55}
C.cdb.prototype={
$2(d,e){return B.a.aK(d.c,e.c)},
$S:639}
C.cd7.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cd8.prototype={
$1(d){return d.cL2(C.GQ(d,this.a))},
$S:z+85}
C.e__.prototype={
$1(d){return C.uk(d,this.a.a.c)},
$S:z+3}
C.e_0.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e_4.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e_5.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dZX.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0g(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yC("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pj(r.c,r.e),$async$$0)
case 4:s.yC(p)
w=5
return A.b(s.JR(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dZY.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0g(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yC("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pj(r.c,r.e),$async$$0)
case 4:s.yC(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dZZ.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.VA(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.yC("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.yC("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.yC("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.JR(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.yC(B.a.ek(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e_3.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0f(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.yC("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a4(r,!1).cc(A.e0(new C.e_2(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pj(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e_2.prototype={
$1(d){var w=this.b
return new C.a_M(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e_1.prototype={
$1(d){return D.hmy},
$S:z+58}
C.e_7.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.e_8.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e_6(w,d)
return new A.D(B.d2,new C.bfL(this.b,d.c,d.a,w,null),null)},
$S:1957}
C.e_6.prototype={
$0(){return this.a.Y4(this.b.b)},
$S:0}
C.dZS.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dZT.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dZU.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dZV.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dZW.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.e_9.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.cT(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a4(this.b,!1).O(s)
return}},
$S:193}
C.dLA.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dLB.prototype={
$0(){return B.d.gI(D.a5b)},
$S:z+60}
C.dLC.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b4(A.au(A.X(this.b.d,B.c.j(0.95),w,w,D.d3u,44),w,w,w),w,w,new C.bkF(u,t,v,w),B.aw)},
$S:63}
C.fSb.prototype={
$1(d){return A.p3(new C.fSa(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:141}
C.fSa.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.e3:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rY,24)],x.V),o=r?B.e8:B.bO
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.n(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aW.j(0.25),B.bP.j(0.18)],x.O)
w=A.p(t,D.bSD,B.f,t,t,new A.o(t,t,t,A.n(12),t,new A.a9(B.a5,B.a8,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.av,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.W,o,new A.D(E.al_,A.B(A.a([w,B.bc,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bt:B.bm,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.i,0,B.p),1)],u),B.m,t,B.e,B.i,0,t,t),t),A.E(A.im(!0,t,e,B.y,D.f8L,new C.fS9(this.b,s),20,B.aky,t,B.ah,!1),1)],u),B.m,t,B.e,B.i,0,B.p),B.f,t,t,new A.o(q,t,t,B.kY,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:120}
C.fS9.prototype={
$2(d,e){var w=null,v=D.a5b[e],u=A.n(16),t=A.n(16),s=this.b.a,r=A.J(s?B.e8:B.bO,B.r,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.em,8)],x.V),p=A.n(15),o=A.E(new C.a6E(v.a,!0,w),1),n=s?B.jK:B.jb,m=A.d(v.b,w,1,B.a1,w,w,w,A.l(w,w,s?B.aP:B.av,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aH(!1,B.a2,!0,w,A.aO(!1,u,!0,A.eK(A.bx(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.d(v.c,w,1,B.a1,w,w,w,A.l(w,w,s?B.bt:B.bm,w,w,w,w,w,w,w,w,10,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.i,0,B.p),B.f,n,w,w,w,w,w,w,B.l8,w,w,w)],l),B.ak,w,B.e,B.i,0,B.p),B.ap),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fS8(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)},
$S:80}
C.fS8.prototype={
$0(){A.a4(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.clE.prototype={
$0(){return this.a.agK(this.b)},
$S:0}
C.fRy.prototype={
$1(d){return D.hhF},
$S:z+61}
C.fZ3.prototype={
$1(d){var w=this
return new C.a1z(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.fRD.prototype={
$1(d){return new C.Zp(this.a,null)},
$S:z+63}
C.fRC.prototype={
$1(d){return D.hiE},
$S:z+64}
C.d51.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.d52.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d50(w,d))},
$S:34}
C.d50.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d53.prototype={
$1(d){return this.a.Kr()},
$S:2}
C.d54.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.d4Y.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.d4Z.prototype={
$1(d){return this.a.Kr()},
$S:2}
C.d5_.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.cDs.prototype={
$0(){},
$S:0}
C.cDy.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.cDz.prototype={
$0(){return this.a.aPh(-1)},
$S:0}
C.cDA.prototype={
$1(d){return this.a.m(new C.cDx())},
$S:2}
C.cDx.prototype={
$0(){},
$S:0}
C.cDB.prototype={
$0(){return this.a.aPh(1)},
$S:0}
C.cDC.prototype={
$1(d){return this.a.m(new C.cDw())},
$S:2}
C.cDw.prototype={
$0(){},
$S:0}
C.cDD.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aW.j(0.2)
if(s)v=B.aW
else v=this.b.a?B.e8:B.bO
return A.uE(u,u,B.b0,r,u,new C.cDv(t,d),B.yr,s,w,u,new A.ay(v,1,B.r,-1),B.cc)},
$S:1958}
C.cDv.prototype={
$1(d){var w=this.a
return w.m(new C.cDt(w,this.b))},
$S:8}
C.cDt.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cDE.prototype={
$1(d){return this.a.m(new C.cDu())},
$S:2}
C.cDu.prototype={
$0(){},
$S:0}
C.cDF.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fhA.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a4(this.b,!1).O(w)},
$S:2}
C.fhB.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fhC.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a4(this.b,!1).O(w)},
$S:0}
C.fhy.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbAJ()
w=w.e
s=A.n(B.o.E(v-1,0,v))
return A.b4(new A.D(D.bDe,new A.er(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bxc(p,v,this.b.a,u,t,r),r,r,B.aw)},
$S:63}
C.fhz.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dw.aw(0,p)
p=A.n(12)
q=q.a.c
v=A.n(12)
u=A.n(12)
t=w*2.4
s=A.ar(B.aW,B.bP,w)
s.toString
s=A.a([B.b0,s,B.aW],x.O)
return A.aH(!1,B.a2,!0,p,A.aO(!1,v,!0,A.eK(D.elS,r,new A.o(r,r,A.J(B.c.j(0.4),B.r,1.5),u,r,new A.a9(new A.d9(-1.2+t,-0.5),new A.d9(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
$S:136}
C.fQ_.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:71}
C.eQr.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eQi.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eQj.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eQp.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e1(new C.eQo(w,this.b),null)},
$S:21}
C.eQo.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.e3:B.c,t=A.n(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eT(w,u,new A.D(B.akS,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bt:B.bm,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ae,C.hkY(new C.eQl(r,e),r.a),B.aA,A.B(A.a([A.E(A.dT(B.di,new C.eQm(d),w),1),B.as,A.E(A.bH(B.Vh,w,new C.eQn(r,d),A.bo(B.aW,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.i,0,w,w)],q),B.ak,w,B.e,B.O,0,B.p),w),w,w,w,w,B.d8,w,new A.b8(t,B.a0),w)},
$S:100}
C.eQl.prototype={
$1(d){return this.b.$1(new C.eQk(this.a,d))},
$S:34}
C.eQk.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eQm.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.eQn.prototype={
$0(){var w=this.a.a
A.a4(this.b,!1).O(w)
return null},
$S:0}
C.eQq.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Ta(this.b)},
$S:0}
C.eQd.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bd5(w)},
$S:0}
C.eQh.prototype={
$1(d){return this.bmk(d)},
bmk(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.LB(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iW(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eQg.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("Z<1>")
w=A.C(new A.Z(w,new C.eQf(this.b),v),v.k("M.E"))
u.d=t.bd5(w)},
$S:0}
C.eQf.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eQs.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iW(this.b,w)},
$S:0}
C.eQt.prototype={
$1(d){return this.a.bER(d,this.b)},
$S:z+67}
C.eQe.prototype={
$0(){return this.a.aaB(this.b)},
$S:0}
C.fYU.prototype={
$1(d){return new C.adS(this.a,this.b,this.c,null)},
$S:z+68}
C.eQv.prototype={
$0(){return this.a.a_R(this.b)},
$S:0}
C.eQw.prototype={
$0(){return this.a.Qs(this.b)},
$S:0}
C.eQx.prototype={
$0(){return this.a.EC(this.b)},
$S:0}
C.eQy.prototype={
$0(){return this.a.a_S(this.b)},
$S:0}
C.eQu.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.eQ8.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eQ9.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eQa.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.eQc.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qd(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eQb(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eQb.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eQV.prototype={
$2(d,e){return d+e.gxe()},
$S:z+71}
C.eQR.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eQS.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eQC.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.e3:B.c,s=A.n(24),r=A.p(v,D.bT5,B.f,v,v,new A.o(B.ax.j(u?0.18:0.08),v,A.J(B.ax.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.av,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bt:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aP:B.av
u=u?B.e8:B.bO
w=x.p
return A.eT(v,t,new A.D(B.yq,A.x(A.a([r,B.aQ,q,B.P,p,B.d4,A.B(A.a([A.E(A.dT(B.nK,new C.eQA(d),A.di(v,v,v,v,v,v,v,v,v,o,v,v,B.fd,v,new A.b8(A.n(14),B.a0),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.as,A.E(A.bH(D.fRT,v,new C.eQB(d),A.bo(B.ax,v,v,v,v,v,B.fd,v,new A.b8(A.n(14),B.a0),v,v,v)),1)],w),B.m,v,B.e,B.i,0,v,v)],w),B.m,v,B.e,B.O,0,B.p),v),v,v,v,v,B.d8,v,new A.b8(s,B.a0),v)},
$S:49}
C.eQA.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.eQB.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.eQL.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.e3:B.c,i=A.n(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.h_,28)],x.V),g=k?D.dax:B.a4x,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.n(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aA,D.f2p,B.au,new A.bM(B.a5,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cy,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.i,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a9(B.ay,B.aD,B.x,g,m,m),B.n),m,m,m,m,E.akX,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bt:B.bm,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.E(v.b67(B.b6,B.jg,new C.eQI(v,d),l,"Camera import","Scan QR"),1),B.as,A.E(v.b67(B.cw,R.z2,new C.eQJ(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.i,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bt:B.bm,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.n(16)
r=B.ax.j(k?0.14:0.06)
q=A.n(16)
p=A.J(B.ax.j(0.28),B.r,1)
o=A.p(m,D.bSr,B.f,m,m,new A.o(B.ax.j(0.12),m,m,A.n(12),m,m,B.n),m,m,m,m,B.bT,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.av,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bt:B.bm,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.i,0,B.p),1)
return A.bm(!0,new A.D(B.vZ,A.p(m,A.x(A.a([g,new A.D(B.akT,A.x(A.a([w,B.W,u,B.bx,t,B.W,A.aH(!1,B.a2,!0,m,A.aO(!1,s,!0,A.p(m,A.B(A.a([o,B.bc,n,A.X(B.eE,k?B.bt:B.bm,m,m,m,m)],f),B.m,m,B.e,B.i,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bE,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eQK(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)],f),B.E,m,B.e,B.i,0,B.p),m)],f),B.m,m,B.e,B.O,0,B.p),B.ap,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:27}
C.eQI.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).O(null)
w=2
return A.b(u.a.vI("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eQJ.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).O(null)
w=2
return A.b(u.a.vI("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eQK.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).O(null)
w=2
return A.b(u.a.Oa(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eQG.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.e3:B.c,m=A.n(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eU,24)],x.V),k=o?B.e8:B.bO
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.n(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.n(12)
v=this.c
u=o?B.bt:B.bm
u=A.bx(w,new A.a5(48,48,C.aRh(!0,A.n(12),48,P.Og,u,v.c,48),q),B.ap)
w=A.d(v.b,q,1,B.a1,q,q,q,A.l(q,q,o?B.aP:B.av,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.B1(v.gxe())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.vZ,A.p(q,A.x(A.a([B.W,k,new A.D(D.akQ,A.B(A.a([u,B.bc,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bt:B.bm,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.i,0,B.p),1)],s),B.m,q,B.e,B.i,0,q,q),q),B.BA,r.cnH(B.uz,B.aW,new C.eQE(d),p,"QR code or backup file","Transfer project"),r.b38(!0,B.e9,B.ax,new C.eQF(d),p,"Remove from this device","Delete project"),B.W],s),B.m,q,B.e,B.O,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:27}
C.eQE.prototype={
$0(){A.a4(this.a,!1).O("transfer")
return null},
$S:0}
C.eQF.prototype={
$0(){A.a4(this.a,!1).O("delete")
return null},
$S:0}
C.eQH.prototype={
$1(d){return this.bml(d)},
bml(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.LB(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vW(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eQY.prototype={
$0(){var w=this.a
w.a.bu()
w.m(new C.eQX(w))},
$S:0}
C.eQX.prototype={
$0(){return this.a.r++},
$S:0}
C.eQZ.prototype={
$0(){var w=this.a
return w.m(new C.eQW(w))},
$S:0}
C.eQW.prototype={
$0(){return this.a.r++},
$S:0}
C.eQz.prototype={
$0(){var w=this.a.c
w.toString
return A.iW(w,null)},
$S:0}
C.eQD.prototype={
$0(){return this.a.cgZ(this.b)},
$S:0}
C.eQU.prototype={
$0(){var w=this.a
return w.m(new C.eQT(w,this.b))},
$S:0}
C.eQT.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eQO.prototype={
$0(){return this.a.vI("scan")},
$S:0}
C.eQP.prototype={
$0(){return this.a.vI("file")},
$S:0}
C.eQQ.prototype={
$1(d){return this.a.cnI(d,this.b)},
$S:z+72}
C.eQN.prototype={
$0(){return this.a.EG(this.b)},
$S:0}
C.eQM.prototype={
$0(){return this.a.a0m(this.b,this.c)},
$S:0}
C.cCS.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cCR.prototype={
$1(d){return d.ah()},
$S:z+74}
C.cCP.prototype={
$1(d){return C.hEJ(A.a2(d,x.N,x.z))},
$S:z+75}
C.cCQ.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fAF.prototype={
$1(d){return d.y===D.kK},
$S:z+3}
C.fZE.prototype={
$1(d){return C.aQ_(d,this.a)},
$S:z+3}
C.fyy.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bRd.prototype={
$1(d){return!d.as},
$S:z+1}
C.bRc.prototype={
$1(d){return d.ah()},
$S:z+23}
C.bR9.prototype={
$1(d){return C.hf3(A.a2(d,x.N,x.z))},
$S:z+24}
C.bRa.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bRb.prototype={
$1(d){return J.k(d)},
$S:17}
C.fpe.prototype={
$2(d,e){return e.e.aK(0,d.e)},
$S:z+25}
C.fl3.prototype={
$1(d){return C.h5c(A.a2(d,x.N,x.z))},
$S:z+79}
C.fl4.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fl5.prototype={
$2(d,e){return e.e.aK(0,d.e)},
$S:z+25}
C.fRp.prototype={
$1(d){return J.k(d)},
$S:17}
C.fRq.prototype={
$1(d){return d.a},
$S:z+81}
C.fRr.prototype={
$1(d){return d.length!==0},
$S:3}
C.fRs.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+10}
C.fRt.prototype={
$1(d){return d.Ta(null).ah()},
$S:z+82}
C.fZC.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fB8.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fDY.prototype={
$1(d){return C.alj(A.a2(d,x.N,x.z))},
$S:z+9}
C.fDZ.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fE_.prototype={
$2(d,e){return e.r.aK(0,d.r)},
$S:z+6}
C.fE0.prototype={
$1(d){return d.ah()},
$S:z+5}
C.fE1.prototype={
$1(d){return C.uk(d,this.a)},
$S:z+3}
C.fRc.prototype={
$1(d){return C.uk(d,this.a)},
$S:z+3}
C.fZx.prototype={
$1(d){return C.alj(A.a2(d,x.N,x.z))},
$S:z+9}
C.fZy.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fZz.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fAQ.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fAR.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fZI.prototype={
$1(d){return!d.as},
$S:z+1}
C.fAk.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fAl.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fAm.prototype={
$2(d,e){return B.o.aK(d.Q,e.Q)},
$S:z+7}
C.fZ4.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fEO.prototype={
$1(d){return d.Q},
$S:z+15}
C.fR5.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fDV.prototype={
$1(d){return C.alj(A.a2(d,x.N,x.z))},
$S:z+9}
C.fDW.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fDX.prototype={
$2(d,e){return e.r.aK(0,d.r)},
$S:z+6}
C.fR0.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.flB.prototype={
$1(d){return d.length!==0},
$S:3}
C.flC.prototype={
$1(d){return C.hf3(A.a2(d,x.N,x.z))},
$S:z+24}
C.flD.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.flE.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.flF.prototype={
$1(d){return d.length!==0},
$S:3}
C.flS.prototype={
$2(d,e){return d.eR(new C.flT(e))},
$S:1959}
C.flT.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.ca},
$S:1960}
C.flP.prototype={
$1(d){return C.i00(d,this.a)},
$S:z+84}
C.flQ.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.flR.prototype={
$2(d,e){return e.r.aK(0,d.r)},
$S:z+6}
C.fpV.prototype={
$1(d){return d.a},
$S:z+56}
C.fpW.prototype={
$1(d){return d.length!==0},
$S:3}
C.fpX.prototype={
$2(d,e){return e.r.aK(0,d.r)},
$S:z+6}
C.fsG.prototype={
$1(d){return d.ah()},
$S:z+5}
C.fxS.prototype={
$1(d){return C.hqu(d,C.GQ(d,this.a))},
$S:z+5}
C.fxT.prototype={
$1(d){return C.hqv(d,C.GQ(d,this.a))},
$S:z+5};(function aliases(){var w=C.aAN.prototype
w.bu3=w.q
w=C.ayX.prototype
w.btZ=w.q
w=C.aGb.prototype
w.bur=w.q
w=C.aAO.prototype
w.bu4=w.q
w=C.aAQ.prototype
w.bu5=w.q
w=C.aAR.prototype
w.bu6=w.q
w=C.aMl.prototype
w.bwV=w.q
w=C.aOr.prototype
w.bzd=w.q
w=C.aOs.prototype
w.bze=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aDM.prototype,"gckC","ckD",28)
var r
w(r=C.aAM.prototype,"gcdz","cdA",65)
v(r,"gaNw","NJ",0)
v(r,"gcsW","AX",0)
v(r,"gbMB","On",0)
v(r,"gcH6","yD",0)
v(r,"gcmF","a14",0)
v(r,"gbI0","O6",0)
v(r,"gbN0","Xx",0)
w(r,"gbRZ","bS_",78)
v(r,"gbCn","A_",0)
v(C.aAP.prototype,"gcH2","Fy",0)
v(r=C.al8.prototype,"gbqt","bqu",2)
v(r,"gbqm","bqn",2)
v(r,"gcI9","cIa",2)
u(r,"gq7","kF",0)
u(r=C.ajl.prototype,"geX","h5",2)
w(r,"gc9z","c9A",27)
u(C.au1.prototype,"gq7","kF",0)
v(r=C.axX.prototype,"gcTD","cTE",2)
u(r,"gq7","kF",0)
u(C.aJZ.prototype,"gbqr","bqs",2)
v(C.alh.prototype,"gBq","cIk",2)
u(r=C.alf.prototype,"gcIZ","cJ_",2)
u(r,"gq7","kF",0)
v(r=C.alb.prototype,"gbpl","bpm",2)
v(r,"gcO8","cO9",2)
u(r=C.ald.prototype,"geX","h5",2)
u(r,"gkw","cHG",2)
v(r=C.al9.prototype,"gcHv","cHw",2)
u(r,"gbof","jA",2)
v(r=C.aEk.prototype,"gagm","vX",0)
v(r,"gcge","a0d",0)
v(r,"gaRB","Ic",0)
v(r=C.aEh.prototype,"gcDa","a3d",0)
v(r,"gagm","vX",0)
v(r,"gcqW","a1J",0)
v(r,"gcg9","b1l",2)
v(r,"gchb","a0r",0)
w(r,"gcdt","cdu",35)
v(r,"gbMT","Ih",0)
v(r,"gcEb","cEc",2)
v(r,"gc3L","Zd",0)
w(r,"gcbX","cbY",36)
v(r,"gcfY","cfZ",2)
v(r=C.aCL.prototype,"gc9F","Q0",0)
v(r,"gc9H","c9I",2)
v(r,"gbJv","aad",0)
v(r=C.aEj.prototype,"gbQq","Y0",0)
v(r,"gc_Z","YG",0)
v(r,"gcxn","a2B",0)
v(r,"gctx","a2c",0)
v(C.aEi.prototype,"gcte","ai6",0)
v(C.atd.prototype,"gcbV","a_P",0)
v(C.azv.prototype,"ga2X","Kr",2)
v(C.azu.prototype,"ga2X","Kr",2)
v(C.aya.prototype,"ga2X","Kr",2)
v(r=C.aFN.prototype,"gb2w","QY",0)
v(r,"gbBb","Wd",0)
v(r,"gch_","ch0",2)
w(C.aFM.prototype,"gccO","ccP",69)
t(C.aFO.prototype,"gaRv",0,0,null,["$1","$0"],["Ib","bKN"],70,0,0)
s(C,"hxW","i9Z",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aD,[C.aoT,C.uB,C.no,C.HY,C.af2,C.Kh,C.uC,C.bRJ,C.t1,C.bo7,C.alq,C.ada,C.lm,C.bQk,C.atp,C.zg,C.ak5,C.Mf,C.b9D,C.a9j,C.bgR,C.af9,C.azb,C.aeY,C.aJZ,C.Kp,C.G8,C.bfJ,C.aJV,C.aqa,C.ddL,C.lO,C.aUh,C.aUg,C.aSf,C.u6,C.rf,C.lx,C.hV,C.kO,C.aHT])
u(A.hx,[C.fIB,C.fIA,C.fIC,C.fS4,C.fwE,C.fwF,C.fwK,C.fGk,C.fGj,C.fGi,C.c6r,C.fSB,C.fSt,C.fSF,C.fAY,C.dMg,C.dMb,C.dMc,C.dLP,C.dLL,C.dMv,C.dMw,C.dMp,C.dMq,C.dMx,C.dMy,C.fBB,C.fDS,C.fDT,C.fRa,C.fZw,C.fAP,C.fRJ,C.dcY,C.dck,C.dct,C.dcK,C.dcp,C.dcv,C.dcm,C.dcz,C.dcA,C.dcy,C.dcP,C.dcO,C.deJ,C.deK,C.deL,C.ddb,C.ddg,C.ddf,C.cLG,C.cLI,C.d4f,C.d4E,C.d4F,C.d4I,C.d4K,C.d4L,C.d4M,C.d4O,C.d4P,C.bQ4,C.bPZ,C.fpC,C.fZp,C.fZq,C.fZr,C.fZm,C.fZs,C.fZt,C.fZu,C.fZl,C.fC8,C.fQc,C.fyz,C.fEN,C.bLk,C.fZO,C.fQI,C.bJz,C.bJu,C.bJw,C.bJv,C.cnk,C.cnf,C.cng,C.cne,C.cnc,C.cnh,C.cMK,C.cCh,C.cCk,C.cCi,C.cCl,C.cCm,C.f2p,C.fct,C.bQR,C.bQL,C.bQP,C.bQs,C.dYy,C.dYv,C.dYw,C.dYu,C.dYA,C.bQJ,C.bQz,C.bQj,C.bQi,C.bQe,C.bQf,C.bQg,C.bQh,C.e_d,C.dZD,C.dZy,C.dZ_,C.dZf,C.dZi,C.dZe,C.dZd,C.dZu,C.dZv,C.dZp,C.dYO,C.dZG,C.dZA,C.dYQ,C.dYR,C.dYS,C.dYX,C.dYV,C.dYU,C.dZ9,C.dZa,C.dZ4,C.dZN,C.dZJ,C.ddm,C.ddn,C.fBF,C.fBG,C.fBH,C.fBD,C.fBE,C.fBK,C.fBL,C.fBM,C.fBI,C.fBJ,C.ddG,C.ddw,C.ddr,C.ddB,C.ddC,C.ddF,C.ddt,C.ddI,C.ddJ,C.ddK,C.fig,C.eTh,C.dtu,C.dtE,C.dtF,C.dtG,C.dtJ,C.dtI,C.dtK,C.dtP,C.dtQ,C.cd5,C.cd4,C.cd0,C.cd1,C.cd2,C.cd3,C.cda,C.cd7,C.cd8,C.e__,C.e_2,C.e_1,C.e_8,C.e_9,C.dLA,C.fSb,C.fRy,C.fZ3,C.fRD,C.fRC,C.d52,C.d53,C.d4Z,C.cDA,C.cDC,C.cDD,C.cDv,C.cDE,C.fhA,C.fQ_,C.eQp,C.eQl,C.eQh,C.eQf,C.eQt,C.fYU,C.eQC,C.eQL,C.eQG,C.eQH,C.eQQ,C.cCR,C.cCP,C.cCQ,C.fAF,C.fZE,C.fyy,C.bRd,C.bRc,C.bR9,C.bRa,C.bRb,C.fl3,C.fl4,C.fRp,C.fRq,C.fRr,C.fRs,C.fRt,C.fZC,C.fB8,C.fDY,C.fDZ,C.fE0,C.fE1,C.fRc,C.fZx,C.fZy,C.fZz,C.fAQ,C.fAR,C.fZI,C.fAk,C.fAl,C.fZ4,C.fEO,C.fR5,C.fDV,C.fDW,C.fR0,C.flB,C.flC,C.flD,C.flE,C.flF,C.flT,C.flP,C.flQ,C.fpV,C.fpW,C.fsG,C.fxS,C.fxT])
u(A.aw,[C.aZM,C.al6,C.aVx,C.Z4,C.bbm,C.Q7,C.a5Q,C.tq,C.I_,C.bfH,C.bjx,C.bxp,C.bmQ,C.adw,C.bjw,C.adv,C.bjv,C.aCM,C.aIX,C.adx,C.G4,C.bfI,C.acN,C.bfG,C.bfL,C.aZK,C.atd,C.adS])
u(A.md,[C.bbZ,C.bdb,C.bd2,C.aHO,C.biy,C.bo6,C.aVC,C.bc_,C.aAL,C.bbv,C.bs5,C.biG,C.bi5,C.bid,C.bfK,C.beM,C.bkF,C.bxc])
u(A.iF,[C.fSy,C.fSz,C.fSA,C.fSr,C.fSs,C.fSD,C.fSE,C.dMs,C.dMe,C.dMh,C.dLW,C.dLX,C.dLY,C.dLV,C.dM2,C.dLU,C.dM3,C.dM4,C.dLT,C.dM5,C.dLS,C.dM6,C.dLR,C.dM7,C.dLJ,C.dLK,C.dLQ,C.dM8,C.dLO,C.dM9,C.dLN,C.dLZ,C.dLM,C.dM_,C.dLI,C.dM0,C.dM1,C.dMt,C.dMu,C.dMi,C.dMj,C.dMk,C.dMl,C.dMm,C.dMn,C.dMo,C.dMA,C.dMr,C.fBC,C.dci,C.dcg,C.dch,C.dcj,C.dcX,C.dcM,C.dcJ,C.dcl,C.dcN,C.dcr,C.dcs,C.dcu,C.dcL,C.dcq,C.dcw,C.dcU,C.dcG,C.dcF,C.dcH,C.dcI,C.dcB,C.dcD,C.dcE,C.dcx,C.dcQ,C.dcT,C.dcn,C.dco,C.deI,C.deH,C.deG,C.deF,C.deM,C.deE,C.deN,C.ddc,C.ddd,C.dde,C.ddh,C.dda,C.dd9,C.cLH,C.d4e,C.d4r,C.d4q,C.d4G,C.d4p,C.d4H,C.d4o,C.d4n,C.d4J,C.d4m,C.d4z,C.d4y,C.d4Q,C.bPY,C.bQ7,C.bQ_,C.bQ0,C.bQ3,C.bQ2,C.bQ5,C.bQ6,C.bQ1,C.bPW,C.bPX,C.bRB,C.bRC,C.bRD,C.bRE,C.bRF,C.bRG,C.bRH,C.fZo,C.fQd,C.bJy,C.bJt,C.bJr,C.bJs,C.bJq,C.cnm,C.cnn,C.cnl,C.cno,C.cnq,C.cnr,C.cns,C.cni,C.cCg,C.cCp,C.cCq,C.cCr,C.cCo,C.cCs,C.cCt,C.cCu,C.cCv,C.cCj,C.cCn,C.bR6,C.bR5,C.bR3,C.bR1,C.bR2,C.bQZ,C.bR_,C.bR0,C.bR4,C.bQY,C.f2q,C.f2r,C.f2s,C.f2t,C.f2u,C.bQV,C.bQW,C.bQX,C.bQQ,C.bQS,C.bQT,C.bQU,C.bQM,C.bQw,C.bQv,C.bQu,C.bQo,C.bQp,C.bQt,C.bQq,C.bQr,C.bQn,C.dYx,C.dYz,C.dYs,C.dYt,C.dYr,C.dYB,C.dYC,C.dYD,C.dYG,C.dYH,C.dYI,C.dYJ,C.dYK,C.dYL,C.dYM,C.dYN,C.dYE,C.dYF,C.bQI,C.bQH,C.bQy,C.bQx,C.bQE,C.bQF,C.bQB,C.bQC,C.bQD,C.bQA,C.bQ8,C.bQ9,C.bQd,C.bQc,C.bQb,C.bQa,C.e_c,C.e_b,C.e_e,C.e_f,C.e_g,C.e_a,C.e_i,C.e_h,C.dZB,C.dZC,C.dZE,C.dZ0,C.dZh,C.dZg,C.dZj,C.dZx,C.dZc,C.dZn,C.dZo,C.dZm,C.dZk,C.dZl,C.dZq,C.dZr,C.dZs,C.dZw,C.dYP,C.dZz,C.dYT,C.dYW,C.dYY,C.dZF,C.dZ3,C.dZ1,C.dZ5,C.dZ6,C.dZ2,C.dZ7,C.dZb,C.dZO,C.dZP,C.dZH,C.dZK,C.dZL,C.dZM,C.dZR,C.dZI,C.dYZ,C.ddl,C.ddk,C.ddp,C.ddz,C.ddq,C.eTg,C.dtv,C.dts,C.dtt,C.dtD,C.dtC,C.dtB,C.dtL,C.dtA,C.dtM,C.dtz,C.dtN,C.dty,C.dtO,C.dtx,C.dtw,C.dtH,C.dtR,C.du_,C.e_0,C.e_4,C.e_5,C.dZX,C.dZY,C.dZZ,C.e_3,C.e_7,C.e_6,C.dZS,C.dZT,C.dZU,C.dZV,C.dZW,C.dLB,C.fS8,C.clE,C.d51,C.d50,C.d54,C.d4Y,C.d5_,C.cDs,C.cDy,C.cDz,C.cDx,C.cDB,C.cDw,C.cDt,C.cDu,C.cDF,C.fhB,C.fhC,C.eQr,C.eQi,C.eQj,C.eQk,C.eQm,C.eQn,C.eQq,C.eQd,C.eQg,C.eQs,C.eQe,C.eQv,C.eQw,C.eQx,C.eQy,C.eQu,C.eQ8,C.eQ9,C.eQa,C.eQc,C.eQb,C.eQR,C.eQS,C.eQA,C.eQB,C.eQI,C.eQJ,C.eQK,C.eQE,C.eQF,C.eQY,C.eQX,C.eQZ,C.eQW,C.eQz,C.eQD,C.eQU,C.eQT,C.eQO,C.eQP,C.eQN,C.eQM])
u(A.af,[C.ap4,C.Ta,C.ZN,C.ZR,C.ZP,C.Zn,C.al7,C.ajk,C.au0,C.axW,C.alg,C.ale,C.ala,C.Vx,C.alc,C.Tb,C.aqd,C.aq7,C.a_r,C.aqb,C.a_M,C.a_N,C.a6E,C.Zp,C.Zo,C.YW,C.a1z,C.FU,C.ay3,C.atc,C.at6,C.atb,C.Ot])
u(A.ah,[C.aDM,C.bfB,C.aAM,C.bg_,C.aAP,C.bd9,C.aAN,C.ayX,C.aGb,C.axX,C.aAR,C.aAQ,C.aAO,C.bkZ,C.ald,C.al9,C.aEk,C.aEh,C.aCL,C.aEj,C.aEi,C.bl_,C.aMl,C.azv,C.azu,C.aya,C.bxf,C.aOr,C.aOs,C.aFN,C.bml,C.aFM,C.bz0])
u(A.js,[C.dMd,C.dMf,C.dMa,C.dMz,C.fDU,C.bPV,C.dcW,C.dcV,C.dcC,C.dcR,C.dcS,C.ddi,C.bRI,C.bRA,C.bQl,C.bQm,C.fZn,C.fZN,C.bJx,C.cnp,C.cnj,C.cnd,C.f2v,C.bQK,C.bQN,C.bQO,C.dnQ,C.bQG,C.dZt,C.dZ8,C.dZQ,C.ddy,C.ddx,C.ddv,C.ddA,C.ddD,C.ddE,C.ddo,C.dds,C.ddu,C.ddH,C.ccZ,C.cd6,C.cdb,C.dLC,C.fSa,C.fS9,C.fhy,C.fhz,C.eQo,C.eQV,C.cCS,C.fpe,C.fl5,C.fE_,C.fAm,C.fDX,C.flS,C.flR,C.fpX])
u(A.lz,[C.a14,C.afb,C.a1n,C.a_e,C.abR,C.aKH,C.HZ,C.ali,C.cCT,C.cCU])
t(C.al8,C.aAN)
t(C.ajl,C.ayX)
t(C.au1,C.aGb)
t(C.bfF,C.aAR)
t(C.alh,C.bfF)
t(C.bfE,C.aAQ)
t(C.alf,C.bfE)
t(C.bfD,C.aAO)
t(C.alb,C.bfD)
t(C.bkG,C.aMl)
t(C.bxd,C.aOr)
t(C.bxe,C.aOs)
t(C.aFO,C.bz0)
t(C.b9Q,A.b9E)
t(C.bxg,A.a6j)
t(C.b9P,C.bxg)
w(C.aAN,A.cf)
w(C.ayX,A.cf)
w(C.aGb,A.eQ)
w(C.aAO,A.cf)
v(C.bfD,C.aeY)
w(C.aAQ,A.cf)
v(C.bfE,C.aeY)
w(C.aAR,A.cf)
v(C.bfF,C.aeY)
w(C.aMl,A.eQ)
w(C.aOr,A.cf)
w(C.aOs,A.cf)
v(C.bz0,A.eF)
v(C.bxg,A.jb)})()
A.j0(b.typeUniverse,JSON.parse('{"aZM":{"aw":[],"v":[]},"bbZ":{"aC":[]},"ap4":{"af":[],"v":[]},"aDM":{"ah":["ap4"]},"Ta":{"af":[],"v":[]},"al6":{"aw":[],"v":[]},"aVx":{"aw":[],"v":[]},"bfB":{"ah":["Ta"]},"ZN":{"af":[],"v":[]},"ZR":{"af":[],"v":[]},"ZP":{"af":[],"v":[]},"Zn":{"af":[],"v":[]},"aAM":{"ah":["ZN"]},"bg_":{"ah":["ZR"]},"aAP":{"ah":["ZP"]},"Z4":{"aw":[],"v":[]},"bdb":{"aC":[]},"bd2":{"aC":[]},"bd9":{"ah":["Zn"]},"aHO":{"aC":[]},"biy":{"aC":[]},"bbm":{"aw":[],"v":[]},"al7":{"af":[],"v":[]},"al8":{"ah":["al7"]},"bo6":{"aC":[]},"aVC":{"aC":[]},"ajk":{"af":[],"v":[]},"au0":{"af":[],"v":[]},"axW":{"af":[],"v":[]},"ajl":{"ah":["ajk"]},"bc_":{"aC":[]},"Q7":{"aw":[],"v":[]},"aAL":{"aC":[]},"au1":{"ah":["au0"]},"bbv":{"aC":[]},"axX":{"ah":["axW"]},"alg":{"af":[],"v":[]},"ale":{"af":[],"v":[]},"ala":{"af":[],"v":[]},"alh":{"ah":["alg"]},"bs5":{"aC":[]},"alf":{"ah":["ale"]},"biG":{"aC":[]},"alb":{"ah":["ala"]},"bi5":{"aC":[]},"Vx":{"af":[],"v":[]},"alc":{"af":[],"v":[]},"Tb":{"af":[],"v":[]},"a5Q":{"aw":[],"v":[]},"bid":{"aC":[]},"tq":{"aw":[],"v":[]},"I_":{"aw":[],"v":[]},"bkZ":{"ah":["Vx"]},"ald":{"ah":["alc"]},"al9":{"ah":["Tb"]},"aqd":{"af":[],"v":[]},"aq7":{"af":[],"v":[]},"a_r":{"af":[],"v":[]},"adx":{"aw":[],"v":[]},"aEk":{"ah":["aqd"]},"aEh":{"ah":["aq7"]},"bfH":{"aw":[],"v":[]},"bfK":{"aC":[]},"bjx":{"aw":[],"v":[]},"beM":{"aC":[]},"bxp":{"aw":[],"v":[]},"bmQ":{"aw":[],"v":[]},"aCL":{"ah":["a_r"]},"adw":{"aw":[],"v":[]},"bjw":{"aw":[],"v":[]},"adv":{"aw":[],"v":[]},"bjv":{"aw":[],"v":[]},"aCM":{"aw":[],"v":[]},"aIX":{"aw":[],"v":[]},"G4":{"aw":[],"v":[]},"aqb":{"af":[],"v":[]},"a_M":{"af":[],"v":[]},"a_N":{"af":[],"v":[]},"aEj":{"ah":["aqb"]},"bfI":{"aw":[],"v":[]},"acN":{"aw":[],"v":[]},"bfG":{"aw":[],"v":[]},"bfL":{"aw":[],"v":[]},"aEi":{"ah":["a_M"]},"bl_":{"ah":["a_N"]},"aZK":{"aw":[],"v":[]},"a6E":{"af":[],"v":[]},"bkG":{"ah":["a6E"]},"bkF":{"aC":[]},"atd":{"aw":[],"v":[]},"Zp":{"af":[],"v":[]},"Zo":{"af":[],"v":[]},"YW":{"af":[],"v":[]},"a1z":{"af":[],"v":[]},"azv":{"ah":["Zp"]},"azu":{"ah":["Zo"]},"aya":{"ah":["YW"]},"bxf":{"ah":["a1z"]},"FU":{"af":[],"v":[]},"ay3":{"af":[],"v":[]},"bxd":{"ah":["FU"]},"bxe":{"ah":["ay3"]},"bxc":{"aC":[]},"atc":{"af":[],"v":[]},"aFN":{"ah":["atc"]},"adS":{"aw":[],"v":[]},"at6":{"af":[],"v":[]},"atb":{"af":[],"v":[]},"bml":{"ah":["at6"]},"aFM":{"ah":["atb"]},"Ot":{"af":[],"v":[]},"aFO":{"ah":["Ot"],"eF":[]},"b9P":{"jb":[],"fi":[]}}'))
A.CU(b.typeUniverse,JSON.parse('{"aeY":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.at
return{e2:w("aSf"),cq:w("m9"),Q:w("rf"),r:w("bw<m,m>"),c5:w("aUg"),dY:w("aUh"),fH:w("Mf"),de:w("ak5"),dN:w("Mm<G>"),gc:w("DV<G>"),A:w("ex<m?>"),e:w("HY"),B:w("no"),P:w("hV"),df:w("lm"),k:w("kO"),x:w("aA<~>"),U:w("O<a3v>"),V:w("O<ac>"),C:w("O<rf>"),O:w("O<u>"),c:w("O<Mf>"),b:w("O<ak5>"),ac:w("O<ex<m?>>"),I:w("O<no>"),u:w("O<hV>"),J:w("O<lm>"),_:w("O<kO>"),cl:w("O<aA<ai<a8<m,@>>>>"),R:w("O<nq>"),eU:w("O<ai<+(K,K)>>"),ez:w("O<a8<m,aD>>"),gE:w("O<a8<m,m>>"),Y:w("O<a8<m,@>>"),fD:w("O<mH>"),bp:w("O<ot>"),g:w("O<t>"),ar:w("O<atp>"),v:w("O<h_>"),gy:w("O<a9j>"),L:w("O<+(m,m)>"),G:w("O<+(K,K)>"),E:w("O<+(K,~())>"),bd:w("O<+(m,G,R)>"),bF:w("O<+count,id,name(G,m,m)>"),F:w("O<cV>"),s:w("O<m>"),cF:w("O<as>"),aS:w("O<iZ>"),dT:w("O<b9D>"),p:w("O<v>"),Z:w("O<fi>"),D:w("O<lx>"),h:w("O<azb>"),cC:w("O<bgR>"),fp:w("O<Kh>"),M:w("O<Kp>"),gZ:w("O<aHT>"),gA:w("O<af2>"),e4:w("O<af9>"),dE:w("O<aJV>"),f7:w("O<R>"),n:w("O<K>"),t:w("O<G>"),dS:w("O<aC?>"),d4:w("O<m?>"),eF:w("cw<ah<af>>"),d:w("ai<no>"),do:w("ai<hV>"),cg:w("ai<lm>"),ax:w("ai<kO>"),fO:w("ai<a8<m,@>>"),cz:w("ai<+(m,m)>"),bC:w("ai<+count,id,name(G,m,m)>"),dy:w("ai<m>"),er:w("ai<as>"),gk:w("ai<lx>"),j:w("ai<@>"),fK:w("bA<m,m>"),d2:w("bA<m,ai<a8<m,@>>>"),a:w("a8<m,@>"),f:w("a8<@,@>"),gv:w("N<m,I0>"),cM:w("N<G,m>"),w:w("iA"),g2:w("rz"),bV:w("aoT"),fL:w("cv"),K:w("aD"),dc:w("h_"),fo:w("OP<G>"),fz:w("+(m,m)"),ei:w("+scope,text(m,m)"),bn:w("+games,limit(R,G)"),d9:w("+dx,hidden(K,ai<hV>)"),cs:w("+count,id,name(G,m,m)"),N:w("m"),fT:w("jc<hV>"),ec:w("jc<m>"),gW:w("qW<K>"),X:w("bp<K>"),bW:w("dK"),W:w("bV<m>"),b4:w("bV<G>"),cI:w("jV<m>"),av:w("Z<zg>"),cc:w("Z<m>"),l:w("v"),gF:w("fi"),fA:w("lx"),dO:w("G8"),bw:w("adv<m?>"),cy:w("Kr"),q:w("mr"),y:w("R"),i:w("K"),z:w("@"),S:w("G"),eK:w("ai<kO>?"),m:w("aqa?"),cT:w("t?"),h5:w("+(m,m)?"),eo:w("+code,qrPayload,usesRemaining(m,m,G)?"),he:w("+qrPayload,token,usesRemaining(m,m,G)?"),gG:w("+members,trees,viewOnly(G,G,R)?"),az:w("q8?"),T:w("m?"),aD:w("dK?"),o:w("lx?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b1s=new A.bj(B.fE,B.bH,B.fE,B.bH)
D.acy=new A.bj(B.fE,B.is,B.fE,B.is)
D.b1F=new A.bj(B.ic,B.bH,B.bH,B.bH)
D.b1J=new A.ay(B.cR,1.4,B.r,-1)
D.b1T=new A.ay(B.ad,1,B.r,-1)
D.ad2=new A.aZ(140,1/0,0,1/0)
D.b3h=new A.aZ(0,1/0,64,1/0)
D.b3l=new A.aZ(0,84,0,1/0)
D.ad9=new A.aZ(130,1/0,0,1/0)
D.aAO=w([B.m3,B.rk,B.c],x.O)
D.c3h=new A.a9(B.ay,B.aD,B.x,D.aAO,null,null)
D.b45=new A.o(null,null,null,null,null,D.c3h,B.n)
D.d9Z=w([B.aW,B.bP],x.O)
D.c5p=new A.a9(B.b_,B.b5,B.x,D.d9Z,null,null)
D.b4q=new A.o(null,null,null,null,null,D.c5p,B.n)
D.Xq=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fq=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.ddR=w([B.du,D.Xq,D.fq],x.O)
D.c2t=new A.a9(B.b_,B.b5,B.x,D.ddR,null,null)
D.b5a=new A.o(null,null,null,null,null,D.c2t,B.n)
D.fjr=new A.F(!0,B.bZ,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUp=new A.y("?",null,D.fjr,null,null,null,null,null,null,null,null,null)
D.b8Q=new A.ci(B.A,null,null,D.fUp,null)
D.V8=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCw=new A.y("\ud83c\udf33",null,D.V8,null,null,null,null,null,null,null,null,null)
D.adU=new A.ci(B.A,null,null,D.fCw,null)
D.fF8=new A.y("\ud83c\udfc6",null,Au.K5,null,null,null,null,null,null,null,null,null)
D.b90=new A.ci(B.A,null,null,D.fF8,null)
D.baR=new A.fk(null,null,null,null,null,E.kb,null,null,null,null)
D.adW=new A.ci(B.A,null,null,D.baR,null)
D.kC=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fk_=new A.F(!0,D.kC,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEd=new A.y("No books on the shelf yet.",null,D.fk_,null,null,null,null,null,null,null,null,null)
D.elT=new A.D(B.nt,D.fEd,null)
D.b9f=new A.ci(B.A,null,null,D.elT,null)
D.fqU=new A.F(!0,D.fq,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVk=new A.y("\ud83d\ude8c  On the road\u2026",null,D.fqU,null,null,null,null,null,null,null,null,null)
D.ems=new A.D(B.cm,D.fVk,null)
D.b9I=new A.ci(B.A,null,null,D.ems,null)
D.aUo=new A.y("\ud83e\uddfa",null,D.V8,null,null,null,null,null,null,null,null,null)
D.b9Y=new A.ci(B.A,null,null,D.aUo,null)
D.fHC=new A.y("\ud83c\udfad",null,D.V8,null,null,null,null,null,null,null,null,null)
D.ba9=new A.ci(B.A,null,null,D.fHC,null)
D.bac=new A.ci(B.A,null,null,A9.Xg,null)
D.aeg=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.aem=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bco=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bct=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bcE=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bcG=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bcI=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bcP=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lv=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bcS=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bcX=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bcY=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bcZ=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lw=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bdz=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.B4=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bdI=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.be1=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.be4=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bea=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bei=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.aeX=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.beo=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.XB=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.af_=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.beB=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.XD=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.beX=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.afa=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bfj=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bfz=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bfX=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bg5=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.Fe=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bgq=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bgs=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bgw=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.afy=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bgR=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bgW=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bh1=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.afB=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bh9=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bhC=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bhK=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bhM=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bhR=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.afS=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bit=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.age=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bjn=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.agr=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bjL=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.Ft=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bjR=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bk0=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bk2=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.agv=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bkk=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bkl=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bko=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.agC=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.Yi=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bkH=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bl1=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bl6=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.agP=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bld=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.Yn=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.blv=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.blw=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.FA=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bmh=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bmU=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bn_=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bn3=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.q2=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bnd=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bnh=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bnm=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bno=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.ahu=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.ahy=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.FG=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.YF=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.ahG=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bov=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.boO=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bpc=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bpl=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.ai3=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.YP=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bpt=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bpJ=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.YS=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bpX=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bqd=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.YW=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bqi=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.ail=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.ain=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bqA=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.ais=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.br2=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.br4=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bra=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.brg=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bro=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.brZ=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bss=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fyq=new A.y("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bvX=new A.ex(null,D.fyq,B.eY,null,x.A)
D.fHt=new A.y("None",null,null,null,null,null,null,null,null,null,null,null)
D.bvZ=new A.ex(null,D.fHt,B.eY,null,x.A)
D.ajm=new A.bb(3e4)
D.bww=new A.bb(38e5)
D.bxg=new A.ij(0,10,0,10)
D.bxp=new A.Q(0,1,0,0)
D.bxz=new A.ij(0,4,0,4)
D.bxC=new A.Q(0,4,5,0)
D.bxS=new A.Q(10,10,14,10)
D.by3=new A.ij(10,4,10,4)
D.byb=new A.ij(10,8,10,8)
D.byc=new A.Q(10,8,8,8)
D.byF=new A.Q(12,6,12,2)
D.byV=new A.Q(14,0,14,6)
D.byZ=new A.Q(14,10,6,6)
D.bz_=new A.Q(14,12,14,0)
D.bz3=new A.Q(14,12,14,8)
D.bz6=new A.Q(14,12,8,14)
D.bza=new A.ij(14,14,14,14)
D.bzq=new A.Q(14,6,14,40)
D.bzt=new A.Q(14,8,14,30)
D.bzQ=new A.Q(16,2,16,10)
D.bA_=new A.Q(16,6,16,30)
D.bA1=new A.Q(16,6,16,8)
D.bAf=new A.Q(18,10,18,4)
D.bAh=new A.Q(18,12,18,0)
D.bAo=new A.Q(18,14,12,4)
D.akQ=new A.Q(18,16,18,8)
D.bAF=new A.Q(18,20,18,22)
D.akU=new A.Q(18,24,18,24)
D.bAL=new A.Q(18,30,18,30)
D.bB2=new A.Q(20,10,12,20)
D.bB5=new A.Q(20,11,20,11)
D.bBg=new A.Q(20,18,16,18)
D.bBi=new A.Q(20,18,20,6)
D.bC7=new A.Q(24,32,24,28)
D.bC8=new A.Q(24,36,24,32)
D.bCc=new A.Q(26,26,24,14)
D.bCr=new A.Q(2,4,2,8)
D.bCv=new A.Q(30,0,30,0)
D.bCG=new A.Q(38,22,22,22)
D.ald=new A.Q(40,24,24,24)
D.bCI=new A.ij(40,40,40,40)
D.bCK=new A.Q(46,30,30,30)
D.alg=new A.Q(4,0,0,8)
D.bDa=new A.Q(56,40,40,40)
D.bDe=new A.Q(1.25,1.25,1.25,1.25)
D.bDf=new A.Q(60,0,60,0)
D.bDj=new A.Q(6,14,6,16)
D.bDn=new A.Q(6,4,12,0)
D.bDr=new A.Q(6,6,10,2)
D.bDy=new A.ij(7,3,7,3)
D.bE5=new A.Q(5,1.5,5,1.5)
D.bEg=new A.Q(6,2.5,6,2.5)
D.fPy=new A.y("Family Games",null,B.k5,null,null,null,null,null,null,null,null,null)
D.fx3=new A.y("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,I.a9X,null,null,null,null,null,null,null,null,null)
D.cEh=w([D.fPy,D.fx3],x.p)
D.btu=new A.fj(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.cEh,null)
D.bEy=new A.bz(1,B.ba,D.btu,null)
D.fTW=new A.y("Signature",null,B.n1,null,null,null,null,null,null,null,null,null)
D.bEC=new A.bz(1,B.ba,D.fTW,null)
D.fM9=new A.y("MADE BY THE ONE WHO PLANTED THE TREE",null,T.te,null,null,null,null,null,null,null,null,null)
D.bFa=new A.bz(1,B.ba,D.fM9,null)
D.fR1=new A.y("Tell the AI what to fix",null,B.dd,null,null,null,null,null,null,null,null,null)
D.bFr=new A.bz(1,B.ba,D.fR1,null)
D.frH=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fT_=new A.y("Worksheets",null,D.frH,null,null,null,null,null,null,null,null,null)
D.frS=new A.F(!0,E.aeI,null,null,null,null,13,B.cy,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRR=new A.y("Track your project spending",null,D.frS,null,null,null,null,null,null,null,null,null)
D.d1y=w([D.fT_,B.au,D.fRR],x.p)
D.bt6=new A.fj(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.d1y,null)
D.bFx=new A.bz(1,B.ba,D.bt6,null)
D.fmI=new A.F(!0,E.kb,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxB=new A.y("FAMILY LIBRARY",null,D.fmI,null,null,null,null,null,null,null,null,null)
D.bFP=new A.bz(1,B.ba,D.fxB,null)
D.NU=new C.HY("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.w6=new C.HZ(0,"male")
D.od=new C.HZ(1,"female")
D.yA=new C.HZ(2,"unknown")
D.ue=new C.ali(0,"owner")
D.NV=new C.ali(1,"editor")
D.kK=new C.ali(2,"viewer")
D.amW=new A.a0(61199,"MaterialIcons",!1)
D.bKL=new A.a0(61504,"MaterialIcons",!1)
D.bKM=new A.a0(61505,"MaterialIcons",!1)
D.bKO=new A.a0(61587,"MaterialIcons",!1)
D.bKV=new A.a0(61890,"MaterialIcons",!1)
D.bLM=new A.a0(63034,"MaterialIcons",!0)
D.bM3=new A.a0(63153,"MaterialIcons",!1)
D.bMz=new A.a0(63429,"MaterialIcons",!1)
D.apb=new A.a0(984520,"MaterialIcons",!1)
D.bLj=new A.a0(62776,"MaterialIcons",!1)
D.bOT=new A.ae(D.bLj,26,B.b0,null,null,null)
D.bJJ=new A.a0(57648,"MaterialIcons",!1)
D.bPc=new A.ae(D.bJJ,14,B.c,null,null,null)
D.bPt=new A.ae(B.GK,17,null,null,null,null)
D.bPz=new A.ae(B.a1l,null,B.bP,null,null,null)
D.bQ0=new A.ae(E.a1q,null,null,null,null,null)
D.bQ3=new A.ae(B.iX,18,E.kb,null,null,null)
D.a1b=new A.a0(62044,"MaterialIcons",!1)
D.bQ8=new A.ae(D.a1b,null,B.aW,null,null,null)
D.bQf=new A.ae(B.yN,18,B.c,null,null,null)
D.bQY=new A.ae(B.e5,16,null,null,null,null)
D.bR4=new A.ae(D.a1b,32,B.aW,null,null,null)
D.bRn=new A.ae(E.amX,18,B.cR,null,null,null)
D.bSr=new A.ae(B.GX,22,B.ax,null,null,null)
D.bSD=new A.ae(B.e5,22,B.b0,null,null,null)
D.bSQ=new A.ae(Z.a1g,22,B.c,null,null,null)
D.bSW=new A.ae(B.uo,52,B.c,null,null,null)
D.bT5=new A.ae(B.GX,30,B.ax,null,null,null)
D.bTo=new A.ae(B.a1v,null,B.c,null,null,null)
D.apR=new A.ae(B.uz,22,B.c,null,null,null)
D.bTx=new A.ae(B.e5,17,null,null,null,null)
D.bTU=new A.ae(B.wo,26,B.cR,null,null,null)
D.bUF=new A.ae(B.a1C,16,null,null,null,null)
D.bVq=new A.ae(B.uo,24,B.c,null,null,null)
D.bVv=new A.ae(B.Om,20,B.rP,null,null,null)
D.bVA=new A.ae(B.GI,null,B.bP,null,null,null)
D.bVI=new A.ae(B.iX,18,B.c,null,null,null)
D.bWm=new A.ae(B.cz,22,B.ad,null,null,null)
D.bXc=new A.ae(B.e9,16,B.ad,null,null,null)
D.bXo=new A.ae(D.a1b,20,B.aW,null,null,null)
D.aqg=new A.ae(B.hx,20,null,null,null,null)
D.bXT=new A.ae(B.cz,18,D.kC,null,null,null)
D.bY9=new A.ae(B.yV,28,B.c,null,null,null)
D.bYj=new A.ae(B.Oc,null,B.f8,null,null,null)
D.bYD=new A.ae(B.yV,24,B.c,null,null,null)
D.bZ4=new A.ae(B.uo,null,B.aW,null,null,null)
D.bZ5=new A.ae(B.jT,20,B.cR,null,null,null)
D.bZp=new A.ae(B.GK,16,null,null,null,null)
D.c_Y=new A.e7(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jQ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eF,!0,null,null,null,null)
D.aqY=new C.a5Q(10,null)
D.c0t=new C.a5Q(12,null)
D.c0u=new C.a5Q(14,null)
D.dhN=w([B.bv,B.aW,B.ff,B.b0],x.O)
D.c1F=new A.a9(B.ay,B.aD,B.x,D.dhN,null,null)
D.bm3=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bs4=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.cZ7=w([D.bm3,D.bs4],x.O)
D.c1Q=new A.a9(B.b_,B.b5,B.x,D.cZ7,null,null)
D.dbW=w([B.f6,B.fM,B.ff],x.O)
D.c1W=new A.a9(B.ay,B.aD,B.x,D.dbW,null,null)
D.ahj=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bd_=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d0h=w([D.ahj,D.bd_],x.O)
D.c2u=new A.a9(B.b_,B.b5,B.x,D.d0h,null,null)
D.bgG=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aA8=w([D.bgG,D.ahj],x.O)
D.c2O=new A.a9(B.ay,B.aD,B.x,D.aA8,null,null)
D.ag9=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bje=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.db1=w([D.ag9,D.bje],x.O)
D.c3s=new A.a9(B.a5,B.a8,B.x,D.db1,null,null)
D.doG=w([B.bz,B.ne],x.O)
D.c3u=new A.a9(B.b_,B.b5,B.x,D.doG,null,null)
D.blZ=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dpC=w([D.blZ,D.kC,D.kC,L.YE],x.O)
D.ds7=w([0,0.07,0.9,1],x.n)
D.c4_=new A.a9(B.a5,B.a8,B.x,D.dpC,D.ds7,null)
D.c49=new A.a9(B.ay,B.aD,B.x,B.RT,null,null)
D.cWZ=w([B.aC,D.lv],x.O)
D.c4c=new A.a9(B.a5,B.a8,B.x,D.cWZ,null,null)
D.dof=w([B.b0,B.aW,B.bP],x.O)
D.c5a=new A.a9(B.ay,B.aD,B.x,D.dof,null,null)
D.c9o=w([10,20,30],x.t)
D.cjj=w([-1,-0.4,0.3,1],x.n)
D.cqN=w([B.bv,B.b0,B.f6],x.O)
D.cqV=w([B.br,B.aC,B.jq],x.O)
D.cqX=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.crD=w([30,140,262,360],x.n)
D.bku=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cx9=w([D.bku,E.agZ],x.O)
D.egv=new A.t(1,2)
D.f4S=new A.cV(B.aS,D.egv,3)
D.ax2=w([D.f4S],x.F)
D.cEz=w([B.hd,B.cf,B.fb],x.O)
D.cHi=w([B.bM,B.bs,B.bo],x.O)
D.bGn=new C.uB("classic","Classic leather","Gold-edged brown leather",D.aA8,E.kb,E.kb,"\u2766",B.K,!0,!1,!1,!1)
D.bc8=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bqT=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.d3e=w([D.bc8,D.bqT],x.O)
D.ah2=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bGi=new C.uB("ornate","Ornate gold","Double gold border and flourishes",D.d3e,D.ah2,D.ah2,"\u2726",B.K,!0,!0,!0,!1)
D.bge=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bmP=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.cVT=w([D.bge,D.bmP],x.O)
D.bGh=new C.uB("parchment","Parchment","Old paper with dark ink",D.cVT,D.FA,K.iQ,"\u2767",B.K,!0,!1,!1,!0)
D.aeo=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bp8=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dmv=w([D.aeo,D.bp8],x.O)
D.bjY=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.boq=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bGk=new C.uB("minimal","Clean paper","Plain and elegant, like a printed book",D.dmv,D.bjY,D.boq,"",B.K,!0,!0,!1,!0)
D.bGm=new C.uB("midnight","Midnight","Deep blue with silver stars",I.aAq,B.cq,B.bN,"\u2727",B.K,!0,!0,!1,!1)
D.bGg=new C.uB("emerald","Emerald library","Green cloth, title on the left",W.axr,E.kb,B.fU,"\u25c6",B.bj,!0,!1,!1,!1)
D.bpB=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dky=w([B.ej,D.bpB],x.O)
D.blc=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bmo=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bGl=new C.uB("rose","Rose vintage","Burgundy with rose-gold lettering",D.dky,D.blc,D.bmo,"\u2740",B.K,!0,!1,!0,!1)
D.dpd=w([B.cr,F.nf],x.O)
D.bGj=new C.uB("modern","Modern","Dark, bold, left-aligned",D.dpd,B.aK,B.c,"",B.bj,!1,!0,!1,!1)
D.a3H=w([D.bGn,D.bGi,D.bGh,D.bGk,D.bGm,D.bGg,D.bGl,D.bGj],A.at("O<uB>"))
D.cKf=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dp0=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bGy=new C.lm('What does "Ubuntu" mean?',D.dp0,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.cXD=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bGB=new C.lm("In Swahili, what do we call a grandmother?",D.cXD,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.cXu=w(["Babu","Mama","Baba","Dada"],x.s)
D.bGw=new C.lm("In Swahili, what do we call a grandfather?",D.cXu,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.cYJ=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bGA=new C.lm("What is a sister called in Swahili?",D.cYJ,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.d2G=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bGx=new C.lm("What is a brother called in Swahili?",D.d2G,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.cXt=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bGI=new C.lm("Which word means father in Swahili?",D.cXt,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dq7=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bGH=new C.lm('"Umoja ni nguvu" means...',D.dq7,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dnc=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bGJ=new C.lm('"Haba na haba hujaza kibaba" teaches us...',D.dnc,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d0p=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bGG=new C.lm('The African saying "It takes a village to raise a child" means...',D.d0p,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dqr=w(["The elders","The market","The river","The drum"],x.s)
D.bGC=new C.lm("Who is the traditional keeper of the family stories?",D.dqr,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cOp=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bGz=new C.lm("Why do families sit round the fire at night?",D.cOp,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dpf=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bGE=new C.lm('What does "Harambee" mean?',D.dpf,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.d5o=w(["An elder","A baby","A market","A cow"],x.s)
D.bGD=new C.lm('"Mzee" is a respectful word for...',D.d5o,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dkp=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bGF=new C.lm('What does "Shikamoo" show?',D.dkp,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.axm=w([D.bGy,D.bGB,D.bGw,D.bGA,D.bGx,D.bGI,D.bGH,D.bGJ,D.bGG,D.bGC,D.bGz,D.bGE,D.bGD,D.bGF],x.J)
D.cSK=w([90,360],x.n)
D.cVq=w([B.bP,B.bl],x.O)
D.blO=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.cW4=w([D.aeo,D.blO],x.O)
D.cWI=w([-1,-0.3,0.4,1],x.n)
D.cXz=w([0,0.45,0.72,0.92,1],x.n)
D.bga=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.cXR=w([D.bga,B.de],x.O)
D.bdX=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.aiC=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.cYp=w([B.du,D.bdX,D.aiC],x.O)
D.cZn=w([B.b8,B.j8,B.oY],x.O)
D.bgI=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.boh=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bdD=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.cZs=w([D.bgI,D.boh,D.bdD],x.O)
D.cZM=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.cZW=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hjW=new C.ada(78,424,48,44,56)
D.hjU=new C.ada(214,396,34,34,42)
D.hjV=new C.ada(442,452,56,50,64)
D.ayl=w([D.hjW,D.hjU,D.hjV],A.at("O<ada>"))
D.d_u=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bcU=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bis=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.ds3=w([D.ag9,D.bcU,D.bis],x.O)
D.bGo=new C.uC("leather","Leather",D.ds3,"vintage")
D.d6p=w([B.d7,B.Ma,Ac.XR],x.O)
D.bGv=new C.uC("midnight","Midnight",D.d6p,"starry")
D.cZo=w([B.ei,B.e_,B.l5],x.O)
D.bGu=new C.uC("forest","Forest",D.cZo,"story")
D.du5=w([B.ek,B.ej,B.jM],x.O)
D.bGr=new C.uC("burgundy","Burgundy",D.du5,"royal")
D.cGR=w([B.aC,B.o5,B.nR],x.O)
D.bGs=new C.uC("royal","Royal",D.cGR,"royal")
D.d0V=w([B.bs,B.cr,F.nf],x.O)
D.bGp=new C.uC("charcoal","Charcoal",D.d0V,"geo")
D.dsc=w([B.cd,B.dH,B.xT],x.O)
D.bGt=new C.uC("sunset","Sunset",D.dsc,"sunset")
D.dsU=w([B.j8,B.FB,B.XU],x.O)
D.bGq=new C.uC("ocean","Ocean",D.dsU,"band")
D.zm=w([D.bGo,D.bGv,D.bGu,D.bGr,D.bGs,D.bGp,D.bGt,D.bGq],A.at("O<uC>"))
D.d1p=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.d1Z=w([B.al,B.aJ,B.N],x.O)
D.d3j=w([B.ej,B.e_,B.d7,B.fV,B.xW,B.cR,B.ke,B.e7,B.d1],x.O)
D.d3k=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.f4T=new A.cV(B.dm,B.dC,8)
D.d3u=w([D.f4T],x.F)
D.d4A=w([B.c_,B.dH,B.ka],x.O)
D.beQ=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.biK=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bmK=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.d4P=w([D.beQ,G.ahr,D.biK,D.bmK,D.aiC],x.O)
D.d54=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.d5f=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bcj=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bi6=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.d5G=w([D.bcj,D.afB,D.bi6],x.O)
D.d6k=w([B.c_,B.hr],x.O)
D.d6q=w([G.n8,B.i1,G.aez,B.cI],x.O)
D.d8_=w([B.cI,G.n8,B.i1,D.lw,B.cI],x.O)
D.d8z=w([B.aT,B.vK,B.xI],x.O)
D.azm=w(["True","False"],x.s)
D.eDB=new A.z(-0.65,0.6)
D.eQ7=new A.z(-0.2,0.95)
D.eRc=new A.z(0.25,0.95)
D.eH2=new A.z(0.7,0.6)
D.eRM=new A.z(1,0.1)
D.d9l=w([At.TH,D.eDB,D.eQ7,D.eRc,D.eH2,D.eRM],x.G)
D.bkI=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bqL=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bfO=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.d9r=w([D.bkI,D.bqL,D.bfO],x.O)
D.d9v=w([B.bL,B.c7,B.dt,B.aT],x.O)
D.da_=w([B.ij,B.cd,B.tJ],x.O)
D.dam=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.dax=w([B.f6,B.cR],x.O)
D.bm7=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.daX=w([D.bm7,D.aem],x.O)
D.db7=w([B.cQ,B.fr,B.hM],x.O)
D.dbi=w([B.aK,B.bl,B.d7],x.O)
D.dbT=w([B.es,B.cT,B.e_],x.O)
D.dcd=w([B.dF,B.d7,B.Ma],x.O)
D.dch=w([B.bu,B.m0,B.d1],x.O)
D.dcy=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bln=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bjH=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dcR=w([D.bln,D.afy,D.bjH],x.O)
D.ddC=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.deE=w([1,0,7,6,3,2],x.t)
D.a4E=w(["leather","linen","plain","stars","rays"],x.s)
D.deQ=w([0.5,2,3.6],x.n)
D.dfl=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bOA=new A.a0(985219,"MaterialIcons",!1)
D.bO5=new A.a0(983781,"MaterialIcons",!1)
D.azO=w([B.a1l,B.hy,B.lH,B.i6,D.bOA,B.H7,B.qp,D.bO5,I.aoZ,B.Cn,B.qr,B.mM],A.at("O<a0>"))
D.a4I=w(["double","single","corners","none"],x.s)
D.bGd=new C.zg("Little Seed","\ud83c\udf31",0)
D.bGf=new C.zg("Young Listener","\ud83d\udc42",40)
D.bGe=new C.zg("Storyteller","\ud83e\ude98",120)
D.bGc=new C.zg("Village Pride","\ud83c\udfe1",300)
D.bGa=new C.zg("Keeper of Roots","\ud83c\udf33",700)
D.bGb=new C.zg("Elder of the Fire","\ud83d\udd25",1500)
D.azQ=w([D.bGd,D.bGf,D.bGe,D.bGc,D.bGa,D.bGb],A.at("O<zg>"))
D.dgs=w([B.dv,B.bm,B.e7],x.O)
D.dgG=w([],x.C)
D.D0=w([],x.u)
D.aJN=new A.t(225,528)
D.eFg=new A.z(D.aJN,1)
D.ehg=new A.t(350,548)
D.eLu=new A.z(D.ehg,0.95)
D.aJI=new A.t(158,656)
D.eLn=new A.z(D.aJI,1.12)
D.ei2=new A.t(92,544)
D.eAP=new A.z(D.ei2,0.93)
D.ehj=new A.t(398,614)
D.eHp=new A.z(D.ehj,1.04)
D.eh7=new A.t(318,662)
D.ewi=new A.z(D.eh7,1.1)
D.a4Q=w([D.eFg,D.eLu,D.eLn,D.eAP,D.eHp,D.ewi],A.at("O<+(t,K)>"))
D.diE=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dj4=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dk6=w([B.cI,G.n8,B.i1,D.lw,B.cI,B.i1],x.O)
D.dlw=w([B.aE,B.fr,B.fV],x.O)
D.dlO=w([-12,12],x.n)
D.dlR=w([-17,17],x.n)
D.dm7=w([-70,58],x.n)
D.dm9=w([-70,-30,20],x.n)
D.dna=w([B.bu,B.m0,B.YQ],x.O)
D.dnq=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dH8=new C.lO("construction","Construction","Jobsite & builds",B.yP)
D.dHf=new C.lO("house","Home Build","Houses & rooms",B.wj)
D.dH5=new C.lO("grocery","Grocery","Store & pantry",B.a2a)
D.dH4=new C.lO("calculator","Calculations","Math & estimates",B.Ot)
D.dHd=new C.lO("lumber","Materials","Lumber & supplies",B.OL)
D.dH1=new C.lO("kitchen","Kitchen","Remodel & meals",A3.aob)
D.bO3=new A.a0(983756,"MaterialIcons",!1)
D.dH6=new C.lO("landscape","Landscaping","Yard & garden",D.bO3)
D.dH0=new C.lO("plumbing","Plumbing","Pipes & water",B.pk)
D.dHg=new C.lO("electrical","Electrical","Wiring & power",B.hw)
D.dGZ=new C.lO("store","Retail Shop","Daily business",B.lc)
D.dH_=new C.lO("paint_remodel","Paint & Remodel","Colors & walls",Ai.a1J)
D.bNw=new A.a0(983311,"MaterialIcons",!1)
D.dHc=new C.lO("roofing","Roofing","Roofs & exteriors",D.bNw)
D.bOg=new A.a0(983986,"MaterialIcons",!1)
D.dGY=new C.lO("warehouse","Warehouse","Storage & stock",D.bOg)
D.dHa=new C.lO("vehicles","Vehicles","Fleet & transport",B.H8)
D.bLl=new A.a0(62785,"MaterialIcons",!1)
D.dH3=new C.lO("farm","Farm","Crops & livestock",D.bLl)
D.dH2=new C.lO("restaurant","Restaurant","Food & catering",B.wr)
D.dH9=new C.lO("tools","Tools","Workshop gear",B.H3)
D.dHe=new C.lO("wallet","Cash & Wallet","Quick spending",B.jT)
D.bMu=new A.a0(63395,"MaterialIcons",!1)
D.dHb=new C.lO("concrete","Concrete","Foundation work",D.bMu)
D.dH7=new C.lO("blueprint","Blueprint","Plans & design",Ap.ans)
D.a5b=w([D.dH8,D.dHf,D.dH5,D.dH4,D.dHd,D.dH1,D.dH6,D.dH0,D.dHg,D.dGZ,D.dH_,D.dHc,D.dGY,D.dHa,D.dH3,D.dH2,D.dH9,D.dHe,D.dHb,D.dH7],A.at("O<lO>"))
D.dnW=w([B.bt,B.bm],x.O)
D.doH=w([B.iw,B.nY,B.dP],x.O)
D.agl=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.ahf=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bk1=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bbR=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aAV=w([D.agl,D.ahf,D.bk1,D.bbR],x.O)
D.dpS=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a5m=w(["top","middle","bottom"],x.s)
D.drh=w([B.co,B.bl,B.d7],x.O)
D.aBb=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.b5D=new A.ac(0,B.G,B.aS,B.I,14)
D.aBe=w([D.b5D],x.V)
D.biY=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.drX=w([D.aeX,D.YP,D.biY],x.O)
D.drY=w([B.be,B.cT,B.e_],x.O)
D.egQ=new A.t(24,-8)
D.ehz=new A.t(48,0)
D.egM=new A.t(24,6)
D.dtD=w([B.I,D.egQ,D.ehz,D.egM],x.g)
D.du1=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.edD={top:0,middle:1,bottom:2}
D.dxe=new A.bw(D.edD,["Top","Middle","Bottom"],x.r)
D.edh={double:0,single:1,corners:2,none:3}
D.dxk=new A.bw(D.edh,["Double line","One line","Corners","None"],x.r)
D.eem={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dyN=new A.bw(D.eem,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dz_=new A.bw(B.hT,[],A.at("bw<G,+(m,m)>"))
D.edw={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Dd=new A.bw(D.edw,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.at("bw<m,G>"))
D.dBx=new H.Nk(32,null)
D.dBy=new H.Nk(40,null)
D.dBz=new H.Nk(46,null)
D.aJg=new C.atb(null)
D.efM=new A.t(0,40)
D.efN=new A.t(0,412)
D.efP=new A.t(0,900)
D.eg_=new A.t(0,-74)
D.eg2=new A.t(100,300)
D.eg3=new A.t(10,14)
D.eg6=new A.t(10,-10)
D.ega=new A.t(10,-46)
D.egb=new A.t(10,-58)
D.egc=new A.t(116,442)
D.egd=new A.t(11,-1)
D.ege=new A.t(11,-10)
D.egf=new A.t(11,-21)
D.aJD=new A.t(11,-60)
D.egl=new A.t(14,-2)
D.egm=new A.t(150,520)
D.a7i=new A.t(150,592)
D.egp=new A.t(15,-15)
D.egq=new A.t(16,-1)
D.egu=new A.t(190,444)
D.egx=new A.t(1,5)
D.egF=new A.t(21,-78)
D.egG=new A.t(222,615)
D.J5=new A.t(225,300)
D.a7k=new A.t(225,574)
D.egP=new A.t(24,-52)
D.egR=new A.t(250,210)
D.aJR=new A.t(300,0)
D.eh3=new A.t(300,440)
D.eh6=new A.t(318,476)
D.eh9=new A.t(324,144)
D.a7n=new A.t(332,150)
D.ehb=new A.t(335,585)
D.ehc=new A.t(338,140)
D.ehd=new A.t(340,158)
D.ehf=new A.t(34,-60)
D.DG=new A.t(36,-24)
D.ehh=new A.t(372,470)
D.ehi=new A.t(390,455)
D.ehr=new A.t(42,468)
D.ehs=new A.t(431,510)
D.eht=new A.t(431,520)
D.ehu=new A.t(45,-92)
D.ehv=new A.t(46,20)
D.ehw=new A.t(46,-92)
D.ehx=new A.t(46,-94)
D.ehy=new A.t(47,-4)
D.ehA=new A.t(48,-4)
D.ehI=new A.t(4,-26)
D.ehR=new A.t(60,455)
D.ehY=new A.t(8,14)
D.ei1=new A.t(8,-76)
D.ei3=new A.t(95,575)
D.ei4=new A.t(98,-24)
D.ei6=new A.t(9,-2)
D.ei7=new A.t(9,-58)
D.aK_=new A.t(9,-79)
D.ei8=new A.t(9,-9)
D.eiL=new A.t(16.5,8)
D.eiN=new A.t(3.2,0)
D.eiP=new A.t(-16.5,8)
D.eiW=new A.t(16.5,2)
D.eiZ=new A.t(-3.2,0)
D.ej7=new A.t(9.5,6)
D.ejb=new A.t(-10,14)
D.ejc=new A.t(-10,-12)
D.ejd=new A.t(-10,-58)
D.eje=new A.t(-11,-1)
D.ejf=new A.t(-11,-10)
D.ejh=new A.t(-11,-60)
D.eji=new A.t(-12,-14)
D.ejj=new A.t(-12,-16)
D.ejq=new A.t(-14,-2)
D.ejt=new A.t(-15,-15)
D.eju=new A.t(-15,-3)
D.ejw=new A.t(-16,-1)
D.ejN=new A.t(-24,-52)
D.ejU=new A.t(-2,-34)
D.ejV=new A.t(-2,-38)
D.ejX=new A.t(-30,-100)
D.a7o=new A.t(-36,-24)
D.ek7=new A.t(-4,-26)
D.ek9=new A.t(-4,-6)
D.eki=new A.t(-8,-3)
D.ekj=new A.t(-8,-48)
D.ekm=new A.t(-9,-2)
D.eko=new A.t(-9,-58)
D.ekp=new A.t(-9,-79)
D.ekq=new A.t(-9,-9)
D.eks=new A.t(-9.5,6)
D.ekG=new A.t(-16.5,2)
D.fEQ=new A.y("Write a new book",null,B.hp,null,B.K,null,null,null,null,null,null,null)
D.elf=new A.D(B.kJ,D.fEQ,null)
D.fTt=new A.y("Tap to go on",null,B.vg,null,null,null,null,null,null,null,null,null)
D.elB=new A.D(B.l6,D.fTt,null)
D.app=new A.ae(B.hQ,18,B.c,null,null,null)
D.fxX=new A.y("Add",null,B.lo,null,null,null,null,null,null,null,null,null)
D.d9J=w([D.app,B.qO,D.fxX],x.p)
D.f2w=new A.cd(B.aM,B.e,B.O,B.m,null,B.p,null,0,D.d9J,null)
D.elE=new A.D(B.nq,D.f2w,null)
D.elF=new A.D(E.ajJ,A9.Xg,null)
D.frC=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fB5=new A.y("New Project",null,D.frC,null,null,null,null,null,null,null,null,null)
D.ddZ=w([D.app,B.ac,D.fB5],x.p)
D.f2z=new A.cd(B.aM,B.e,B.O,B.m,null,B.p,null,0,D.ddZ,null)
D.elS=new A.D(B.ip,D.f2z,null)
D.fDC=new A.y("Choose your header",null,A1.tb,null,null,null,null,null,null,null,null,null)
D.emc=new A.D(B.hO,D.fDC,null)
D.bb5=new A.fk(2.2,null,null,null,null,B.cR,null,null,null,null)
D.f7K=new A.a5(22,22,D.bb5,null)
D.b9b=new A.ci(B.A,null,null,D.f7K,null)
D.emh=new A.D(B.a_2,D.b9b,null)
D.bzk=new A.Q(14,2,14,6)
D.fRA=new A.y("The top of your book. Tap a design to see it.",null,Q.tc,null,null,null,null,null,null,null,null,null)
D.emi=new A.D(D.bzk,D.fRA,null)
D.fCL=new A.y("\ud83c\udfc6 A new record!",null,B.fS,null,null,null,null,null,null,null,null,null)
D.emj=new A.D(B.l6,D.fCL,null)
D.enT=new A.iX(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.enW=new A.iX(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aKA=new A.iX(1,0.9607843137254902,0.48627450980392156,0)
D.Je=new A.iX(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.zX=new A.iX(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eo1=new A.iX(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hlL=new C.biy(null)
D.bug=new A.my(D.hlL,null,B.aw,null,null)
D.aOd=new A.cN(0,0,0,0,null,null,D.bug,null)
D.fxZ=new A.y("\ud83c\udfc5",null,B.a9A,null,null,null,null,null,null,null,null,null)
D.esq=new A.cN(null,0,-34,null,null,null,D.fxZ,null)
D.eAu=new A.z("E","Sit by the fire again")
D.eG3=new A.z("C","Good Learner")
D.eJr=new A.z("D","Still Growing")
D.eNX=new A.z(-42,42)
D.ePh=new A.z("B","Faithful Listener")
D.eRe=new A.z("A","Keeper of the Family")
D.eUe=new A.b7(-17,0.7,0)
D.eUL=new A.b7(-8,0.95,1.3)
D.eVK=new A.b7(18,0.65,5.2)
D.eVM=new A.b7(0,1.15,2.6)
D.eW3=new A.b7(9,0.9,3.9)
D.eXL=new A.cy([0,0,1,1])
D.aPF=new A.a3(0,0,520,160)
D.f_B=new A.a3(10,612,440,618)
D.f_C=new A.a3(10,612,440,628)
D.f_F=new A.a3(14,-64,34,-12)
D.f_I=new A.a3(300,336,350,348)
D.a8h=new A.a3(30,96,420,346)
D.f_J=new A.a3(30,-9,46,1)
D.f_K=new A.a3(4,2,11,14)
D.f_M=new A.a3(-8,-12.5,8,-7)
D.f_N=new A.a3(-16.5,-21,16.5,1)
D.f_O=new A.a3(60,342,88,348)
D.TI=new A.a3(66,-66,94,-36)
D.f_P=new A.a3(6,8,10,14)
D.f_S=new A.a3(95,343,115,348)
D.f_T=new A.a3(-6.5,-74,6.5,-58)
D.f_Z=new A.a3(-100,-74,100,-12)
D.f0_=new A.a3(-10,8,-6,14)
D.f00=new A.a3(-11,2,-4,14)
D.f01=new A.a3(-11,-70,11,-56)
D.f08=new A.a3(-13,-24,13,-4)
D.f0e=new A.a3(-15,-21,15,0)
D.f0h=new A.a3(-16,-21,16,1)
D.f0i=new A.a3(-16,-21,16,2)
D.f0l=new A.a3(-16,-26,16,-6)
D.f0v=new A.a3(-230,-26,230,26)
D.f0T=new A.a3(-38,-26,12,-6)
D.f0X=new A.a3(-3,-70,3,-63)
D.f0Y=new A.a3(-44,-22,44,0)
D.f1_=new A.a3(-46,-9,-30,1)
D.aPJ=new A.a3(-80,-190,80,20)
D.f16=new A.a3(-8,-26,40,-6)
D.f17=new A.a3(-98,-80,92,-75)
D.f18=new A.a3(-9,-15,9,-9)
D.fR8=new A.y("Let the AI write it from your tree",null,B.it,null,B.K,null,null,null,null,null,null,null)
D.bHf=new A.ds(1,B.cp,D.fR8,null)
D.d6j=w([E.a2E,B.ac,D.bHf],x.p)
D.f2b=new A.cd(B.aM,B.e,B.O,B.m,null,B.p,null,0,D.d6j,null)
D.fxC=new A.y("Save member",null,B.ce,null,null,null,null,null,null,null,null,null)
D.dlT=w([D.aqg,B.ac,D.fxC],x.p)
D.f2l=new A.cd(B.aM,B.b9,B.i,B.m,null,B.p,null,0,D.dlT,null)
D.bSJ=new A.ae(B.i5,14,B.b0,null,null,null)
D.fli=new A.F(!0,B.b0,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBv=new A.y("Cashier",null,D.fli,null,null,null,null,null,null,null,null,null)
D.dev=w([D.bSJ,B.bn,D.fBv],x.p)
D.f2o=new A.cd(B.aM,B.e,B.O,B.m,null,B.p,null,0,D.dev,null)
D.fxD=new A.y("Transfer & settings",null,B.dd,null,null,null,null,null,null,null,null,null)
D.bFh=new A.bz(1,B.ba,D.fxD,null)
D.cYS=w([D.apR,B.as,D.bFh],x.p)
D.f2p=new A.cd(B.aM,B.e,B.i,B.m,null,B.p,null,0,D.cYS,null)
D.f6q=new A.av(16,40)
D.f6v=new A.av(22,64)
D.f6C=new A.av(280,88)
D.f7q=new A.a5(30,null,null,null)
D.fwK=new A.y("The teacher is writing\u2026",null,B.Af,null,null,null,null,null,null,null,null,null)
D.baj=new A.ci(B.A,null,null,D.fwK,null)
D.hg3=new A.bV("w",x.W)
D.f7Q=new A.a5(null,56,D.baj,D.hg3)
D.f8D=new A.hK(5,8,8,1,null)
D.f8L=new A.hK(2,12,12,1.05,null)
D.fBb=new A.y("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.f9t=new A.b2(D.fBb,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fBq=new A.y("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aRL=new A.b2(D.fBq,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fJP=new A.y("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.f9X=new A.b2(D.fJP,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fUx=new A.y("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fa1=new A.b2(D.fUx,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fDA=new A.y("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fa8=new A.b2(D.fDA,null,null,null,null,null,null,null,null,null,null,null,null,B.fY,!1,null,null,null,B.t,null)
D.fRN=new A.y("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aRP=new A.b2(D.fRN,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fDy=new A.y("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fay=new A.b2(D.fDy,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fyf=new A.y("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.faA=new A.b2(D.fyf,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fHh=new A.y("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.faG=new A.b2(D.fHh,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fVh=new A.y("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fbl=new A.b2(D.fVh,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fQ1=new A.y("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fbK=new A.b2(D.fQ1,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fUB=new A.y("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fbN=new A.b2(D.fUB,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fLs=new A.y("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fbP=new A.b2(D.fLs,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fFs=new A.y("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fbQ=new A.b2(D.fFs,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fFt=new A.y("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fcQ=new A.b2(D.fFt,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fBd=new A.y("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fd7=new A.b2(D.fBd,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fDc=new A.y("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fdr=new A.b2(D.fDc,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fKV=new A.y("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fdH=new A.b2(D.fKV,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fGh=new A.y("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fdI=new A.b2(D.fGh,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fqi=new A.F(!0,B.bD,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffk=new A.eu("\u2665",null,null,B.cN,null,null,null,null,null,null,D.fqi)
D.fnx=new A.F(!0,B.aP,null,null,null,null,28,B.U,B.cD,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffA=new A.eu("Today: how well do you know the family?",null,null,B.cN,null,null,null,null,null,null,D.fnx)
D.ffR=new A.F(!0,B.pP,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgW=new A.F(!0,D.kC,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhl=new A.F(!0,D.kC,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhp=new A.F(!0,B.cI,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhy=new A.F(!0,D.fq,null,null,null,null,15,B.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhJ=new A.F(!0,D.fq,null,null,null,null,13,B.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fi2=new A.rU(!0,B.rZ,null,null,null,null,B.dx,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fii=new A.F(!0,B.cI,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fil=new A.F(!0,D.kC,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fim=new A.F(!0,B.cI,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fir=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiu=new A.F(!0,B.cI,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiZ=new A.F(!0,B.b0,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj_=new A.F(!0,B.ad,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj1=new A.F(!0,B.aP,null,null,null,null,15.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fju=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSY=new A.F(!0,B.aR,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aT_=new A.F(!0,D.lv,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjT=new A.F(!0,B.cI,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a9F=new A.rU(!0,B.Td,null,null,null,null,B.dx,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.UM=new A.F(!0,B.cI,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk2=new A.F(!0,B.N,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk7=new A.F(!0,D.fq,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkv=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flD=new A.F(!0,D.fq,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTa=new A.F(!0,D.fq,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flW=new A.F(!0,B.ad,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fm6=new A.F(!0,D.fq,null,null,null,null,null,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fm8=new A.F(!0,null,null,null,null,null,8,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmd=new A.F(!0,K.iQ,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTe=new A.F(!0,D.fq,null,null,null,null,14.5,B.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn8=new A.F(!0,D.fq,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnr=new A.F(!0,D.fq,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnt=new A.F(!0,B.N,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnu=new A.F(!0,B.cI,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnR=new A.F(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A8.I0,null,null,null)
D.aTt=new A.F(!0,D.fq,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foe=new A.F(!0,B.N,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foB=new A.F(!0,B.f8,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foZ=new A.F(!0,B.bP,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp2=new A.F(!0,B.bz,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpe=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fph=new A.F(!0,D.fq,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpp=new A.F(!0,D.FA,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpy=new A.F(!0,B.b0,null,null,null,null,13,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpY=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq3=new A.F(!0,B.ad,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,L.CS,null,null,null)
D.fqs=new A.F(!0,B.cI,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqB=new A.F(!0,B.cR,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqO=new A.F(!0,D.lw,null,null,null,null,13,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTN=new A.F(!0,D.fq,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Kf=new A.F(!0,B.cI,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTP=new A.F(!0,B.cI,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,L.CS,null,null,null)
D.fr7=new A.F(!0,B.bP,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frb=new A.F(!0,G.n8,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frA=new A.F(!0,B.b0,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frR=new A.F(!0,D.fq,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsc=new A.F(!0,B.c,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsA=new A.F(!0,D.fq,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft2=new A.F(!0,D.fq,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft8=new A.F(!0,B.al,null,null,null,null,11.5,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftg=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aU5=new A.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aa7=new A.F(!0,B.al,null,null,null,null,12,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aa9=new A.F(!0,D.lv,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuZ=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvh=new A.F(!0,B.aP,null,null,null,null,27,B.U,B.cD,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvp=new A.F(!0,K.iQ,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvx=new A.F(!0,K.iQ,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw0=new A.y("Time:",null,B.hb,null,null,null,null,null,null,null,null,null)
D.fwm=new A.y("\ud83c\udfae",null,I.aa_,null,null,null,null,null,null,null,null,null)
D.fwn=new A.y("Themes",null,B.pz,null,null,null,null,null,null,null,null,null)
D.fwS=new A.y("\ud83c\udfb2",null,B.x0,null,null,null,null,null,null,null,null,null)
D.fwW=new A.y("Delete this game?",null,B.it,null,null,null,null,null,null,null,null,null)
D.fx2=new A.y("Add Item",null,B.ce,null,null,null,null,null,null,null,null,null)
D.flR=new A.F(!0,B.N,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxs=new A.y("Debt receipt",null,D.flR,null,B.K,null,null,null,null,null,null,null)
D.aU1=new A.F(!0,B.al,null,null,null,null,11,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxK=new A.y("Person who owes",null,D.aU1,null,null,null,null,null,null,null,null,null)
D.fyI=new A.y("Notes",null,B.a9O,null,null,null,null,null,null,null,null,null)
D.fz8=new A.y("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fkM=new A.F(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzb=new A.y("Share",null,D.fkM,null,null,null,null,null,null,null,null,null)
D.fA8=new A.y("Move your family trees",null,D.aU5,null,null,null,null,null,null,null,null,null)
D.fAN=new A.y("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fBp=new A.y("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fBN=new A.y("SAVE",null,D.Kf,null,null,null,null,null,null,null,null,null)
D.fCp=new A.y("The round button is the right answer.",null,Q.E9,null,null,null,null,null,null,null,null,null)
D.fCK=new A.y("Remove this book?",null,B.fS,null,null,null,null,null,null,null,null,null)
D.frx=new A.F(!0,B.cI,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,L.CS,null,null,null)
D.fDh=new A.y("Fireside Stories",null,D.frx,null,null,null,null,null,null,null,null,null)
D.aUx=new A.y("Download",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fDZ=new A.y("What should the AI do?",null,B.dd,null,null,null,null,null,null,null,null,null)
D.fkq=new A.F(!0,D.lv,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEe=new A.y("REPORT CARD",null,D.fkq,null,null,null,null,null,null,null,null,null)
D.fEW=new A.y("Calabash Catch",null,B.Kj,null,null,null,null,null,null,null,null,null)
D.fFo=new A.y("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fFP=new A.y("\ud83c\udfe1",null,B.E8,null,null,null,null,null,null,null,null,null)
D.fGw=new A.y("Ribbon bookmark",null,B.jm,null,null,null,null,null,null,null,null,null)
D.ft1=new A.F(!0,B.b0,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fH_=new A.y("NGMY.ORG",null,D.ft1,null,B.K,null,null,null,null,null,null,null)
D.fIk=new A.y("Scan family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fpi=new A.F(!0,B.c,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ4=new A.y("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fpi,null,B.K,null,null,null,null,null,null,null)
D.fKh=new A.y("Delete",null,B.UE,null,null,null,null,null,null,null,null,null)
D.fKi=new A.y("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fKp=new A.y("Thumbnail",null,B.pz,null,null,null,null,null,null,null,null,null)
D.fL0=new A.y("Save the cover",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fL5=new A.y("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.x2,null,B.K,null,null,null,null,null,null,null)
D.fLt=new A.y("Your photos",null,B.pz,null,null,null,null,null,null,null,null,null)
D.fLI=new A.y("Create Project",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fM4=new A.y("\u2b50 stars",null,B.UT,null,null,null,null,null,null,null,null,null)
D.fMi=new A.y("Design your cover",null,A1.tb,null,null,null,null,null,null,null,null,null)
D.fMo=new A.y("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fMr=new A.y("PICTURE",null,M.vk,null,null,null,null,null,null,null,null,null)
D.fMt=new A.y("\ud83c\udfaf",null,D.V8,null,null,null,null,null,null,null,null,null)
D.fMO=new A.y("Paid",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fMQ=new A.y("You can undo it right after.",null,Q.E9,null,null,null,null,null,null,null,null,null)
D.fNn=new A.y("Print",null,B.vh,null,null,null,null,null,null,null,null,null)
D.fNM=new A.y("Amount owed",null,D.aU1,null,null,null,null,null,null,null,null,null)
D.fO0=new A.y("Got it",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fOC=new A.y("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fOF=new A.y("Add to budget",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fP6=new A.y("Debtor signature",null,B.a9O,null,null,null,null,null,null,null,null,null)
D.fPf=new A.y("Change icon",null,B.a9N,null,null,null,null,null,null,null,null,null)
D.fQ3=new A.y("MADE BY THE SYSTEM, FROM YOUR TREE",null,T.te,null,null,null,null,null,null,null,null,null)
D.fQv=new A.y("Family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fQB=new A.y("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.V7,null,null,null,null,null,null,null,null,null)
D.fQZ=new A.y("Download",null,B.vh,null,null,null,null,null,null,null,null,null)
D.fR_=new A.y("The person who planted this tree has not made a game yet.",null,B.vl,null,null,null,null,null,null,null,null,null)
D.fR3=new A.y("Change",null,B.pz,null,null,null,null,null,null,null,null,null)
D.fRT=new A.y("Clear all",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fRW=new A.y("WHAT SHOULD IT CHANGE?",null,M.vk,null,null,null,null,null,null,null,null,null)
D.fSv=new A.y("COLOUR",null,M.vk,null,null,null,null,null,null,null,null,null)
D.fSJ=new A.y("Do it",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fSM=new A.y("Create Tree",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fSV=new A.y("Give me another clue",null,D.Kf,null,null,null,null,null,null,null,null,null)
D.fTQ=new A.y("Create Family Tree",null,B.f3,null,null,null,null,null,null,null,null,null)
D.fU_=new A.y("THE TEACHER EXPLAINS THESE",null,T.te,null,null,null,null,null,null,null,null,null)
D.ffQ=new A.F(!0,E.kb,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fU5=new A.y("Write the first page myself",null,D.ffQ,null,null,null,null,null,null,null,null,null)
D.fUE=new A.y("Use this header",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fUL=new A.y("Create Project",null,E.aTK,null,null,null,null,null,null,null,null,null)
D.hhg=new C.abR(1,"header")
D.ab7=new C.abR(2,"projects")
D.hhh=new C.abR(3,"cashier")
D.ab8=new C.abR(4,"familyTree")
D.hur=new C.cCT(0,"start")
D.hus=new C.cCU(0,"start")
D.hhF=new C.YW(null)
D.hiE=new C.Zo(null)
D.dyX=new A.bw(B.hT,[],A.at("bw<m,G8>"))
D.dh3=w([],x.dE)
D.dh4=w([],x.M)
D.hja=new C.bfJ(D.dyX,D.dh3,D.dh4,0,0,null,null)
D.aYv=new C.a_e(0,"intro")
D.aYw=new C.a_e(1,"countdown")
D.abm=new C.a_e(2,"ask")
D.W_=new C.a_e(3,"reveal")
D.aYx=new C.a_e(4,"end")
D.hlN=new C.t1(F.FJ,D.lw,B.cI,F.lx,5,!1,!1,!1,0,null)
D.hlO=new C.t1(F.FJ,B.ek,B.cI,B.bO,2,!0,!0,!1,2,B.cI)
D.hlP=new C.t1(B.o7,B.cR,B.cI,F.lx,2,!0,!1,!1,2,B.aE)
D.hlQ=new C.t1(F.FJ,B.dF,B.cI,F.lx,5,!1,!1,!1,1,null)
D.hlR=new C.t1(F.Z1,D.ahf,B.cI,F.lx,4,!0,!1,!0,0,null)
D.aYA=new C.t1(F.Z1,B.dH,B.cI,F.lx,3,!0,!1,!0,2,null)
D.aYB=new C.t1(F.mD,D.lw,B.c,F.lx,0,!1,!1,!0,0,null)
D.aYC=new C.t1(B.o7,B.aC,B.cI,B.bO,2,!0,!0,!1,2,B.dH)
D.aYD=new C.t1(B.o7,G.n8,B.i1,F.lx,5,!1,!1,!0,3,null)
D.hlS=new C.t1(B.o7,B.dH,B.cI,F.lx,0,!0,!1,!1,0,B.aC)
D.aYE=new C.t1(F.FJ,B.ek,B.cI,B.bO,1,!1,!0,!1,1,null)
D.aYF=new C.t1(F.Fg,B.aE,B.aC,F.lx,4,!0,!1,!0,2,null)
D.hlT=new C.t1(F.mD,B.aE,B.ek,F.lx,3,!0,!1,!1,0,null)
D.hlU=new C.t1(B.o7,B.dF,B.cI,B.bO,1,!1,!0,!1,1,null)
D.hlV=new C.t1(F.Fg,D.agl,B.c,F.lx,5,!1,!1,!0,0,null)
D.hmy=new C.a_N(null)
D.huA=new C.afb(0,"still")
D.Wm=new C.afb(1,"walk")
D.abG=new C.afb(2,"pound")
D.abH=new C.afb(3,"drum")
D.hq2=new C.a14(0,"greet")
D.aZ4=new C.a14(1,"teach")
D.abI=new C.a14(2,"ask")
D.hq3=new C.a14(3,"feedback")
D.aZ5=new C.a14(4,"end")
D.Wr=new C.a1n(0,"intro")
D.Ws=new C.a1n(1,"asking")
D.AC=new C.a1n(2,"reacting")
D.abS=new C.a1n(3,"driving")
D.abT=new C.a1n(4,"arrived")
D.abW=new C.aKH(0,"projects")
D.aZt=new C.aKH(1,"cashier")
D.hs5=new C.aKH(2,"familyTree")})()};
(a=>{a["tn/hbPdxOGosdgCa2cmSngcCClc="]=a.current})($__dart_deferred_initializers__);