((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A8,N,Q,A_,S,A9,L,H,E,T,Aa,U,Ab,Ac,Ad,A0,Ae,Af,R,A1,Ag,Ah,Ai,M,A2,Aj,A3,A4,A5,Ak,A6,Al,G,Am,An,A7,Ao,Ap,V,O,Aq,Ar,W,As,X,P,F,At,I,K,Y,C={
bGk(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bGk=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vU(null,""),$async$bGk)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.X(y.z)
t=A.np(b1)
s=A.c1(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.du(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cR(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.I)(h),++d){a0=h[d]
f.push(A.J(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.W.av(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.rk(t,a1,B.i1,"book",E.GV),$async$bGk)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.RC(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.X(l!=null&&A.M1(l)?y.k:y.y)
for(j=J.a8(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a1(r.a(j.h(a2,a7)),q,p):B.cE
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a3P(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGk,v)},
aij(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aij=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vU(null,""),$async$aij)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.X(y.z)
t=A.np(b6)
s=x.S
r=A.cX(c1,0,A.dD(4,"count",s),A.U(c1).c)
q=H.a3B(new A.N(r,new C.fQ_(),r.$ti.k("N<ak.E,n>")).aM(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fPZ(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.W.av(b7,null)+"\nAllowed values: style one of "+B.d.aM(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aij)
case 6:l=c5
k=H.RC(l==null?"":l)
if(k==null)throw A.X("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.aq1(s,D.dHp,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.t
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.X("There is no page to change.")
h=A.T(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.du(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.I)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.J(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.W.av(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aij)
case 10:l=c5
k=l==null?null:H.RC(l)
if(k==null)throw A.X(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.de(a8,d),a5=J.aT(a2.a),a2=a2.$ti,a7=new A.kN(a5,a2.k("kN<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gP(a5))
b0=J.a8(a9)
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
p=A.cF(new A.b7(h,s),new C.fQ0(),s.k("M.E"),p)
p=H.a3B(A.pL(p,3,A.a3(p).k("M.E")).aM(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cr<1>")
b4=A.C(new A.cr(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.I)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a3P(s,b9),$async$aij)
case 13:b5=c5
for(s=J.a8(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.aq1(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aij,v)},
hHP(d,e,f){return A.cg(null,B.w.j(0.65),!1,null,new C.fZK(e,f),d,null,!0,!0,x.g2)},
aq1:function aq1(d,e,f){this.a=d
this.b=e
this.c=f},
fQ_:function fQ_(){},
fPZ:function fPZ(d){this.a=d},
fQ0:function fQ0(){},
fZK:function fZK(d,e){this.a=d
this.b=e},
bE7(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bE7=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aU(b1,new C.fD6())){u=null
w=1
break}t=B.d.cD(b1,new C.fD7())
s=$.S()
r=new A.q3(new A.pE())
q=A.zr(r,D.aSN)
p=A.L()
p.r=B.c.gp(0)
q.aF(D.aSN,p)
o=A.L()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.aa
o.d=B.bG
o.e=B.dP
n=new C.fDc(t)
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
s=$.S()
p=A.a([],x.v)
a3=new A.aH(s.r,B.aj,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.I)(b1),++i){h=b1[i]
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
a3=new A.aH(s.r,B.aj,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.I)(b1),++i){h=b1[i]
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
return A.b(r.o8().xI(520,160),$async$bE7)
case 4:w=3
return A.b(b3.hj(B.hf),$async$bE7)
case 3:b0=b3
u=b0==null?null:J.eQ(B.dI.gaT(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bE7,v)},
fNG(d){return C.imo(d)},
imo(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fNG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bk9()
n=d.x!=null&&d.zN(null).length===0
if(d.x!=null)t=n?D.AC:D.JZ
else t=d.gUL()?D.JZ:D.aNF
w=3
return A.b(C.bE7(d.ax),$async$fNG)
case 3:s=f
p.a=null
if(s!=null)p.a=A.aoG(s)
r=A.a5z(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aNF}else{p.c=C.xk(q,!0)
p.b=n?D.AC:D.JZ}r.a4n(A.h9s(new C.fNI(p,d,new C.fNJ(),t,n,o),null,D.bIc,B.xm))
u=r.jH(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fNG,v)},
fUq(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fUq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fNG(d),$async$fUq)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.aA(q,0,40)
u=Af.Hu(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fUq,v)},
fD6:function fD6(){},
fD7:function fD7(){},
fDc:function fDc(d){this.a=d},
fNJ:function fNJ(){},
fNI:function fNI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fNH:function fNH(){},
h_c(d,e){var w=0,v=A.j(x.H)
var $async$h_c=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,B.w.j(0.55),!0,null,new C.h_g(new A.cx(null,x.eF),e),d,null,!0,!0,x.H),$async$h_c)
case 2:return A.h(null,v)}})
return A.i($async$h_c,v)},
bGN(d,e,f,g){return C.itT(d,e,f,g)},
itT(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bGN=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cK.aN(t)}catch(q){r=null}if(r==null||r.length===0){d.L(x.q).f.T(D.fpW)
w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.h_8(g,r,f),d,null,!0,!0,x.H),$async$bGN)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bGN,v)},
h_h(d,e){var w=0,v=A.j(x.H)
var $async$h_h=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,null,!0,null,new C.h_k(new A.cx(null,x.eF),e),d,null,!0,!0,x.H),$async$h_h)
case 2:return A.h(null,v)}})
return A.i($async$h_h,v)},
b0f:function b0f(d,e){this.c=d
this.a=e},
c8K:function c8K(){},
bds:function bds(d,e){this.b=d
this.a=e},
h_g:function h_g(d,e){this.a=d
this.b=e},
h_d:function h_d(d){this.a=d},
h_e:function h_e(d,e,f){this.a=d
this.b=e
this.c=f},
h_f:function h_f(d,e){this.a=d
this.b=e},
h_8:function h_8(d,e,f){this.a=d
this.b=e
this.c=f},
h_6:function h_6(d){this.a=d},
h_7:function h_7(d,e,f){this.a=d
this.b=e
this.c=f},
h_k:function h_k(d,e){this.a=d
this.b=e},
h_i:function h_i(d){this.a=d},
h_j:function h_j(d,e,f){this.a=d
this.b=e
this.c=f},
fHY(d,e){var w=0,v=A.j(x.y),u,t
var $async$fHY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3l(d),$async$fHY)
case 3:t=g
J.nV(t,new C.fHZ(e))
u=A.aiY(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fHY,v)},
fHZ:function fHZ(d){this.a=d},
aqe:function aqe(d,e,f){this.c=d
this.d=e
this.a=f},
aF2:function aF2(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dRa:function dRa(d,e){this.a=d
this.b=e},
dQW:function dQW(d,e){this.a=d
this.b=e},
dQZ:function dQZ(d,e,f){this.a=d
this.b=e
this.c=f},
dQY:function dQY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQX:function dQX(d,e){this.a=d
this.b=e},
dR_:function dR_(d,e){this.a=d
this.b=e},
dQU:function dQU(){},
dQV:function dQV(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dQT:function dQT(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dQE:function dQE(d){this.a=d},
dQF:function dQF(d,e,f){this.a=d
this.b=e
this.c=f},
dQG:function dQG(d,e){this.a=d
this.b=e},
dQD:function dQD(d){this.a=d},
dQL:function dQL(d,e){this.a=d
this.b=e},
dQC:function dQC(d){this.a=d},
dQM:function dQM(d,e,f){this.a=d
this.b=e
this.c=f},
dQN:function dQN(d,e,f){this.a=d
this.b=e
this.c=f},
dQB:function dQB(d,e){this.a=d
this.b=e},
dQO:function dQO(d,e,f){this.a=d
this.b=e
this.c=f},
dQA:function dQA(d,e){this.a=d
this.b=e},
dQP:function dQP(d,e){this.a=d
this.b=e},
dQz:function dQz(d){this.a=d},
dQQ:function dQQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQx:function dQx(){},
dQr:function dQr(d){this.a=d},
dQs:function dQs(d){this.a=d},
dQy:function dQy(d,e){this.a=d
this.b=e},
dQR:function dQR(d,e){this.a=d
this.b=e},
dQw:function dQw(d){this.a=d},
dQS:function dQS(d){this.a=d},
dQv:function dQv(){},
dQH:function dQH(d,e){this.a=d
this.b=e},
dQu:function dQu(d){this.a=d},
dQI:function dQI(d,e,f){this.a=d
this.b=e
this.c=f},
dQt:function dQt(d,e){this.a=d
this.b=e},
dQq:function dQq(d,e){this.a=d
this.b=e},
dQJ:function dQJ(d){this.a=d},
dQK:function dQK(d,e,f){this.a=d
this.b=e
this.c=f},
dRd:function dRd(){},
dRe:function dRe(d,e){this.a=d
this.b=e},
dRb:function dRb(d){this.a=d},
dRc:function dRc(d){this.a=d},
dR7:function dR7(d,e){this.a=d
this.b=e},
dR8:function dR8(d){this.a=d},
dR0:function dR0(d,e,f){this.a=d
this.b=e
this.c=f},
dR1:function dR1(d,e,f){this.a=d
this.b=e
this.c=f},
dR2:function dR2(d,e,f){this.a=d
this.b=e
this.c=f},
dR3:function dR3(d,e,f){this.a=d
this.b=e
this.c=f},
dR4:function dR4(d,e,f){this.a=d
this.b=e
this.c=f},
dR5:function dR5(d,e,f){this.a=d
this.b=e
this.c=f},
dR6:function dR6(d,e,f){this.a=d
this.b=e
this.c=f},
dRf:function dRf(){},
dRg:function dRg(){},
dRh:function dRh(){},
dRi:function dRi(d){this.a=d},
dR9:function dR9(d,e){this.a=d
this.b=e},
hDl(d){return B.d.dL(D.a5u,new C.fIK(d),new C.fIL())},
uS:function uS(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fIK:function fIK(d){this.a=d},
fIL:function fIL(){},
amf:function amf(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aWY:function aWY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
U7:function U7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bh3:function bh3(){this.d=$
this.c=this.a=null},
dgQ:function dgQ(d,e){this.a=d
this.b=e},
dgO:function dgO(d,e){this.a=d
this.b=e},
dgP:function dgP(){},
dgR:function dgR(d,e){this.a=d
this.b=e},
hnw(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bj(J.k(u==null?"":u))
return new C.ny(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
LO(d,e){return C.il3(d,e)},
il3(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$LO=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$LO)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aV(J.t(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.W.aP(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.de(p,x.f)
o=A.cF(o,new C.fLf(),o.$ti.k("M.E"),x.B)
n=A.a3(o).k("Y<M.E>")
o=A.C(new A.Y(o,new C.fLg(),n),n.k("M.E"))
B.d.b_(o,new C.fLh())
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
return A.i($async$LO,v)},
Bu(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Bu=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aA(),$async$Bu)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b8(f,new C.fYO(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aC("String","ngmy_family_book_v1_"+s+"_"+e,B.W.av(r,null)),$async$Bu)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Bu,v)},
aT2(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aT2=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LO(d,e),$async$aT2)
case 2:u=h
t=J.cD(u)
s=t.bk(u,new C.h6q(f))
if(s===-1)t.c9(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Bu(d,e,u),$async$aT2)
case 3:return A.h(null,v)}})
return A.i($async$aT2,v)},
bEA(d,e,f){var w=0,v=A.j(x.H),u
var $async$bEA=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LO(d,e),$async$bEA)
case 2:u=h
J.nV(u,new C.fHQ(f))
w=3
return A.b(C.Bu(d,e,u),$async$bEA)
case 3:return A.h(null,v)}})
return A.i($async$bEA,v)},
bEO(d,e){return C.il2(d,e)},
il2(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bEO=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bEO)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aV(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.P0
w=1
break}p=B.W.aP(0,q,null)
if(x.f.b(p)){o=A.a1(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aJ(o.h(0,"emblem"))
k=k==null?null:B.j.M(k)
if(k==null)k=0
if(D.E9.am(0,o.h(0,"foil")))j=A.cP(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.j.D(i==null?25:i,18,36)
h=B.d.q(D.a7c,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.q(D.a6w,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.q(D.a6s,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.d8D,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
o=new C.Iu(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.P0
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.P0
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bEO,v)},
SL(d,e,f){return C.ito(d,e,f)},
ito(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$SL=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aA(),$async$SL)
case 7:r=h
w=8
return A.b(r.aC("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.W.av(f.aj(),null)),$async$SL)
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
return A.i($async$SL,v)},
Sd(d,e){return C.il4(d,e)},
il4(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Sd=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$Sd)
case 7:r=g
q=r.tW("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.LO(d,e),$async$Sd)
case 8:if(!j.cJ(g)){n=B.a.i(d.toLowerCase())
m=J.lK(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aC("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Sd)
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
return A.i($async$Sd,v)},
ahC(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ahC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sd(d,e),$async$ahC)
case 3:s=g
r=J.a8(s)
if(r.gJ(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gJ(s):"main"
r.I(s,t)
w=5
return A.b(A.aA(),$async$ahC)
case 5:w=4
return A.b(g.aC("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ahC)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahC,v)},
a40(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a40=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Sd(d,e),$async$a40)
case 2:s=h
J.hd(s,f)
w=3
return A.b(A.aA(),$async$a40)
case 3:u=h
w=4
return A.b(u.aC("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a40)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a40)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a40)
case 6:return A.h(null,v)}})
return A.i($async$a40,v)},
ny:function ny(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fLf:function fLf(){},
fLg:function fLg(){},
fLh:function fLh(){},
fYO:function fYO(){},
h6q:function h6q(d){this.a=d},
fHQ:function fHQ(d){this.a=d},
Iu:function Iu(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bS4:function bS4(d){this.a=d},
itI(d,e,f,g,h,i,j){return A.a6(d,!1).ce(A.ed(new C.fZo(j,i,f,e,h,g),!0,null,x.H))},
S8(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$S8=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sd(h,g),$async$S8)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.L(x.q).f.T(D.aV9)
u=!1
w=1
break}w=4
return A.b(C.hHP(d,f,e),$async$S8)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ahC(h,g),$async$S8)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.ny(""+(q+n),l,B.a.i(m.b),new A.V(Date.now(),0,!1)))}w=6
return A.b(C.Bu(h,r,p),$async$S8)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.SL(h,r,new C.Iu("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$S8)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$S8,v)},
fZo:function fZo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a_I:function a_I(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aC0:function aC0(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dhv:function dhv(d){this.a=d},
dhu:function dhu(d,e){this.a=d
this.b=e},
dhj:function dhj(d,e){this.a=d
this.b=e},
dhg:function dhg(d,e){this.a=d
this.b=e},
dgS:function dgS(d){this.a=d},
dgT:function dgT(d,e){this.a=d
this.b=e},
dhk:function dhk(d){this.a=d},
dh0:function dh0(d){this.a=d},
dgZ:function dgZ(d){this.a=d},
dh_:function dh_(d){this.a=d},
dh1:function dh1(d){this.a=d},
dhh:function dhh(d){this.a=d},
dhi:function dhi(){},
dgX:function dgX(d){this.a=d},
dgY:function dgY(d,e){this.a=d
this.b=e},
dh2:function dh2(d){this.a=d},
dh3:function dh3(d,e){this.a=d
this.b=e},
dht:function dht(d){this.a=d},
dhs:function dhs(d,e){this.a=d
this.b=e},
dhr:function dhr(d){this.a=d},
dhd:function dhd(d){this.a=d},
dhc:function dhc(d){this.a=d},
dhe:function dhe(d){this.a=d},
dgU:function dgU(d,e){this.a=d
this.b=e},
dhf:function dhf(d,e){this.a=d
this.b=e},
dh6:function dh6(d){this.a=d},
dh7:function dh7(d){this.a=d},
dh5:function dh5(){},
dh8:function dh8(d){this.a=d},
dh9:function dh9(d){this.a=d},
dha:function dha(d,e){this.a=d
this.b=e},
dhb:function dhb(d,e,f){this.a=d
this.b=e
this.c=f},
dh4:function dh4(d,e){this.a=d
this.b=e},
dhm:function dhm(d){this.a=d},
dhl:function dhl(){},
dhn:function dhn(d){this.a=d},
dho:function dho(d){this.a=d},
dhp:function dhp(d){this.a=d},
dhq:function dhq(d,e){this.a=d
this.b=e},
dgV:function dgV(d){this.a=d},
dgW:function dgW(d){this.a=d},
a_M:function a_M(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhs:function bhs(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
djh:function djh(d){this.a=d},
dji:function dji(d){this.a=d},
djg:function djg(d){this.a=d},
djj:function djj(d){this.a=d},
djf:function djf(d){this.a=d},
djk:function djk(d){this.a=d},
dje:function dje(d){this.a=d},
djl:function djl(d,e){this.a=d
this.b=e},
djd:function djd(d,e){this.a=d
this.b=e},
djm:function djm(d,e){this.a=d
this.b=e},
a_K:function a_K(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ag3:function ag3(d,e,f){this.a=d
this.b=e
this.c=f},
aC3:function aC3(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dhK:function dhK(d,e){this.a=d
this.b=e},
dhJ:function dhJ(d,e){this.a=d
this.b=e},
dhO:function dhO(d){this.a=d},
dhN:function dhN(d,e){this.a=d
this.b=e},
dhL:function dhL(d){this.a=d},
dhM:function dhM(d){this.a=d},
dhP:function dhP(d){this.a=d},
dhQ:function dhQ(d){this.a=d},
dhI:function dhI(d,e){this.a=d
this.b=e},
dhH:function dhH(d,e){this.a=d
this.b=e},
KS:function KS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a__:function a__(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cQ8:function cQ8(d){this.a=d},
cQ9:function cQ9(){},
cQa:function cQa(d){this.a=d},
beF:function beF(d,e,f){this.b=d
this.c=e
this.a=f},
bew:function bew(d,e){this.b=d
this.a=e},
uT:function uT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_i:function a_i(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beD:function beD(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d8H:function d8H(d,e,f){this.a=d
this.b=e
this.c=f},
d8G:function d8G(d,e){this.a=d
this.b=e},
d95:function d95(d){this.a=d},
d8T:function d8T(){},
d96:function d96(d){this.a=d},
d8S:function d8S(){},
d97:function d97(d,e){this.a=d
this.b=e},
d8R:function d8R(d,e){this.a=d
this.b=e},
d98:function d98(d,e){this.a=d
this.b=e},
d8Q:function d8Q(d,e){this.a=d
this.b=e},
d99:function d99(d){this.a=d},
d8P:function d8P(){},
d9a:function d9a(d,e){this.a=d
this.b=e},
d8O:function d8O(d,e){this.a=d
this.b=e},
d9b:function d9b(d){this.a=d},
d90:function d90(d,e){this.a=d
this.b=e},
d9c:function d9c(d){this.a=d},
d9d:function d9d(d){this.a=d},
d9f:function d9f(d){this.a=d},
d9g:function d9g(d){this.a=d},
d9_:function d9_(d,e){this.a=d
this.b=e},
d9h:function d9h(d,e){this.a=d
this.b=e},
aJ6:function aJ6(d){this.a=d},
bjZ:function bjZ(d){this.a=d},
bcP:function bcP(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
amg:function amg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a1Y:function a1Y(d,e){this.a=d
this.b=e},
amh:function amh(d,e,f,g,h,i){var _=this
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
_.a9$=i
_.c=_.a=null},
bSe:function bSe(d){this.a=d},
bS8:function bS8(d){this.a=d},
bS7:function bS7(d,e){this.a=d
this.b=e},
bSh:function bSh(d){this.a=d},
bS9:function bS9(d){this.a=d},
bSa:function bSa(d){this.a=d},
bSd:function bSd(d){this.a=d},
bSc:function bSc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSf:function bSf(d,e){this.a=d
this.b=e},
bSg:function bSg(){},
bSb:function bSb(d){this.a=d},
bS5:function bS5(d,e){this.a=d
this.b=e},
bS6:function bS6(d){this.a=d},
bpA:function bpA(d,e){this.b=d
this.a=e},
aC1:function aC1(){},
iC(d,e){var w
$.S()
w=A.L()
w.b=B.aa
w.c=e
w.r=d.gp(0)
w.d=B.bG
w.e=B.dP
return w},
bE9(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.br(j.save())
j.translate(e.a,e.b)
d.op(0,a0?-f:f,f)
w=A.bW(B.hr,8,36)
v=B.w.j(0.3)
u=$.S()
t=A.L()
t.r=v.gp(0)
d.c0(w,t)
w=a1===D.XD
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ap(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.euX,new A.r(-4+v,-2),C.iC(q,5))
d.ah(D.esw,new A.r(4-v,-2),C.iC(q,5))}else{t=A.bW(B.JQ,14,40)
p=A.L()
p.r=v.gp(0)
d.c0(t,p)}v=u.r
u=x.v
o=new A.aH(v,B.aj,k,k,A.a([],u))
t=-64-r
o.E(new A.aZ(-11,t))
o.E(new A.ce(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.ce(15,-40,11,t))
o.E(new A.bw())
t=A.L()
t.r=w.gp(0)
d.af(o,t)
u=new A.aH(v,B.aj,k,k,A.a([],u))
u.E(new A.aZ(-12,-50-r))
v=-46-r
u.E(new A.aq(12,v))
u.E(new A.aq(12.5,-42-r))
u.E(new A.aq(-12.5,v))
u.E(new A.bw())
v=A.L()
v.r=h.c.gp(0)
d.af(u,v)
switch(a1.a){case 2:w=Math.sin(g*3.4)
break
case 3:w=Math.sin(g*7.5)
break
default:w=s
break}if(a1===D.b27){n=-52+w*14
d.ah(new A.r(10,n-22),new A.r(10,n+44),C.iC(F.G7,3.4))
d.ah(D.eve,new A.r(9,n),C.iC(q,4))
d.ah(D.esW,new A.r(10,n),C.iC(q,4))}else if(a1===D.b28){d.ah(D.eu1,new A.r(-8,-26-Math.max(0,w)*6),C.iC(q,4))
d.ah(D.eqZ,new A.r(8,-26-Math.max(0,-w)*6),C.iC(q,4))}else{w=s*3
v=-38-r
d.ah(D.eu6,new A.r(-12-w,v),C.iC(q,4))
d.ah(D.aMH,new A.r(12+w,v),C.iC(q,4))}w=A.L()
w.r=q.gp(0)
d.aF(D.fcM,w)
m=new A.r(0,-77-r)
w=A.bW(m,22,19)
v=A.L()
v.r=q.gp(0)
d.c0(w,v)
w=h.y
if(w!=null){v=A.bW(m.a5(0,K.vD),15,24)
u=A.L()
u.r=w.gp(0)
d.c0(v,u)
u=m.a5(0,D.eqT)
v=A.L()
v.r=w.gp(0)
d.O(u,4,v)}else{w=A.bW(m.a5(0,B.tH),23,20)
v=h.d
u=A.L()
u.r=v.gp(0)
d.cQ(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a5(0,D.evc),m.a5(0,D.eu_),C.iC(v,2.2))
d.ah(m.a5(0,D.esV),m.a5(0,D.eqQ),C.iC(v,2.2))}if(w===4){w=m.a5(0,D.evg)
u=A.L()
u.r=v.gp(0)
d.O(w,6,u)
u=m.a5(0,D.esX)
w=A.L()
w.r=v.gp(0)
d.O(u,6,w)}}w=m.a5(0,D.etO)
v=A.L()
v.r=B.ic.gp(0)
d.O(w,0.9,v)
v=m.a5(0,D.etC)
w=A.L()
w.r=B.ic.gp(0)
d.O(v,0.9,w)
if(i){l=m.a5(0,K.a9a)
w=A.bW(l,21,22)
v=A.L()
v.r=D.lF.gp(0)
d.c0(w,v)
v=A.bW(l.a5(0,K.aME),5,12)
w=A.L()
w.r=D.bhs.gp(0)
d.c0(v,w)
d.ah(l.a5(0,D.ev8),l.a5(0,K.aN1),C.iC(B.cT,1.4))
d.ah(D.aMH,new A.r(15,-88-r),C.iC(q,3.6))}j.restore()},
hBY(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.br(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bV(0,f)
v=A.bW(B.dL,18,96)
u=B.w.j(0.28)
$.S()
t=A.L()
t.r=u.gp(0)
d.c0(v,t)
t=A.bW(B.dL,11,70)
v=B.w.j(0.2)
u=A.L()
u.r=v.gp(0)
d.c0(t,u)
d.lB(D.aSR,A.L())
C.i9J(d,g,h,i,j)
s=(k==null?D.a9f:k).a-w>=0?1:-1
w=A.L()
w.a=B.M9
w.san(A.jC(new A.r(s*70,-60),new A.r(-s*70,-60),A.a([D.aje.j(0.5),D.aje.j(0.12),D.boR.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aF(D.aSR,w)
r.restore()
r.restore()},
i9J(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ap(d,B.w,0.28)
a0.toString
w=A.ap(d,B.c,0.16)
w.toString
v=a2.b
u=A.ap(v,B.w,0.32)
u.toString
t=Math.sin(a4*1.9+a5)*0.8
s=a2.w
r=s?1.06:1
q=s?0.86:1
s=A.bx(D.fcN,B.tM)
p=$.S()
o=A.L()
o.r=u.gp(0)
a1.aq(s,o)
o=A.bx(D.fcI,B.hU)
s=A.ap(v,B.w,0.18)
s.toString
n=A.L()
n.r=s.gp(0)
a1.aq(o,n)
n=A.bx(D.fcW,B.hU)
o=A.ap(v,B.w,0.1)
o.toString
s=A.L()
s.r=o.gp(0)
a1.aq(n,s)
s=A.L()
s.r=d.gp(0)
a1.c0(D.fcP,s)
s=A.L()
s.r=d.gp(0)
a1.c0(D.fby,s)
s=a1.c
J.br(s.save())
s.translate(a3.w,0)
J.br(s.save())
a1.op(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aH(p.r,B.aj,e,e,A.a([],n))
p=-m
k=p+2
l.E(new A.aZ(k,-58))
l.E(new A.ce(p-3,-62,p,-52))
l.E(new A.aq(p+4,-14))
l.E(new A.aq(m-4,-14))
l.E(new A.aq(m,-52))
l.E(new A.ce(m+3,-62,m-2,-58))
l.E(new A.ce(0,-70,k,-58))
l.E(new A.bw())
k=A.L()
k.r=v.gp(0)
a1.af(l,k)
J.br(s.save())
a1.mx(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.dfs[j]
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.b=B.aa
i.c=5
i.r=k.gp(0)
i.d=B.bG
i.e=B.dP
a1.ah(new A.r(-34+u,-64),new A.r(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.F(B.o.ar(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.S()
f=new A.ar(B.S,B.Q,B.V,B.X,B.U)
f.r=i.gp(0)
a1.O(new A.r(g,h),3.6,f)
f=new A.ar(B.S,B.Q,B.V,B.X,B.U)
f.r=u.gp(0)
a1.O(new A.r(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.b=B.aa
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dP
a1.ah(new A.r(g,-64),new A.r(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.b=B.aa
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dP
a1.ah(new A.r(-30,h),new A.r(30,h),i)}break
default:a1.ah(D.euC,D.erE,C.iC(a2.c.j(0.9),3))}a1.ah(D.ev9,D.eu8,C.iC(B.w.j(0.18),1.6))
a1.ah(D.eqY,K.aMJ,C.iC(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.S()
i=A.L()
i.r=u.gp(0)
a1.aF(D.fbu,i)
s.restore()
i=A.L()
i.r=a0.gp(0)
a1.aF(D.fbI,i)
n=new A.aH(k.r,B.aj,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.ce(0,-57,9,-66))
n.E(new A.ce(0,-60,-9,-66))
k=A.L()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cQ(D.fbR,0.1,2.941592653589793,!1,C.iC(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.a9k
n=25*q
k=23*q
i=9*q
C.hy5(a1,new A.r(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.EA:o
C.hy5(a1,new A.r(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.eso,D.esk,C.iC(D.akb,4))
a1.ah(D.esm,D.esi,C.iC(D.Gv.j(0.7),1.4))
u=A.L()
u.r=B.cT.gp(0)
a1.O(D.esl,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.br(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.jq(0,a3.f)
a1.bV(0,r)
C.i9E(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hy5(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aJ(0,e),r=s.gcJ(),q=r===0?B.hr:s.eV(0,r),p=B.j.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.r(o,w)
if(o*i<0)v=new A.r(-o,-w)
u=e.a5(0,q.aL(0,n)).a5(0,v.aL(0,m))
t=e.a5(0,q.aL(0,p))
d.ah(e,u,C.iC(j,l))
o=A.ap(j,B.w,0.2)
o.toString
d.ah(e,u,C.iC(o,l*0.35))
d.ah(u,t,C.iC(k,l*0.78))
o=A.ap(k,B.w,0.22)
o.toString
d.ah(u,t,C.iC(o,l*0.22))
$.S()
o=A.L()
o.r=j.gp(0)
d.O(u,l*0.55,o)
o=A.bW(t,l*1.15,l)
w=A.L()
w.r=k.gp(0)
d.c0(o,w)
w=-l
w=t.a5(0,new A.r(i*w*0.45,w*0.1))
o=A.L()
o.r=k.gp(0)
d.O(w,l*0.28,o)},
i9E(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bW(B.vC,40,38)
$.S()
v=A.L()
v.r=c0.gp(0)
c2.c0(w,v)}if(c1===4){$.S()
w=A.L()
w.r=c0.gp(0)
c2.O(D.eui,9.5,w)
w=A.L()
w.r=c0.gp(0)
c2.O(D.ere,9.5,w)}w=A.bW(D.evv,10,6)
v=$.S()
u=A.L()
u.r=c8.gp(0)
c2.c0(w,u)
u=A.bW(D.etL,10,6)
w=A.L()
w.r=c8.gp(0)
c2.c0(u,w)
v=v.r
w=x.v
t=new A.aH(v,B.aj,b9,b9,A.a([],w))
t.E(new A.aZ(0,-20))
t.E(new A.kn(13,-20,17,-9,16,2))
t.E(new A.kn(15,13,8,20,0,20))
t.E(new A.kn(-8,20,-15,13,-16,2))
t.E(new A.kn(-17,-9,-13,-20,0,-20))
t.E(new A.bw())
u=A.L()
u.san(A.wd(D.euZ,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iC(c8.j(0.5),0.8)
c2.cQ(D.fcY,3.455751918948773,2.5132741228718345,!1,s)
c2.cQ(D.fbB,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.euf,D.eu3,s)
c2.ah(D.era,D.er1,s)
c2.cQ(D.fbQ,2.2,1.4,!1,s)
c2.cQ(D.fbz,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.r=c0.gp(0)
c2.O(new A.r(p*14.5,-3+o*17.5),4.3,n)}p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fc3,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aH(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-15,-11))
p.E(new A.ce(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.ce(0,-12,-13,-6))
p.E(new A.bw())
o=A.L()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.eu4,D.er2,C.iC(G.np,1.4))
o=A.L()
o.r=c0.gp(0)
c2.O(D.eul,3,o)
o=A.L()
o.r=c0.gp(0)
c2.O(D.erf,3,o)
o=new A.aH(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.ce(-12,22,0,26))
o.E(new A.ce(12,22,13,6))
o.E(new A.ce(8,13,0,12))
o.E(new A.ce(-8,13,-13,6))
o.E(new A.bw())
p=A.L()
p.r=B.hY.gp(0)
c2.af(o,p)
p=new A.aH(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-7,8))
p.E(new A.ce(0,6,7,8))
p.E(new A.ce(0,10.5,-7,8))
o=A.L()
o.r=B.bO.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aH(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-17,-4))
p.E(new A.ce(-20,-27,0,-29))
p.E(new A.ce(20,-27,17,-4))
p.E(new A.ce(0,-14,-17,-4))
p.E(new A.bw())
o=A.L()
o.r=m.gp(0)
c2.af(p,o)
o=A.ap(m,B.w,0.3)
o.toString
c2.cQ(D.fca,3.4,2.5,!1,C.iC(o,1.4))
o=A.ap(m,B.c,0.3)
o.toString
c2.cQ(D.fbY,3.6,2.2,!1,C.iC(o,1.2))
o=new A.aH(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(11,-22))
o.E(new A.ce(27,-34,25,-19))
o.E(new A.ce(18,-18,11,-22))
p=A.ap(m,B.c,0.1)
p.toString
n=A.L()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aH(v,B.aj,b9,b9,A.a([],w))
n.E(new A.aZ(11,-22))
n.E(new A.ce(24,-12,27,-26))
n.E(new A.ce(18,-22,11,-22))
o=A.ap(m,B.w,0.2)
o.toString
p=A.L()
p.r=o.gp(0)
c2.af(n,p)
p=A.L()
p.r=c3.c.gp(0)
c2.O(D.er3,3,p)
break
case 3:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fc7,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ap(c0,B.c,0.18)
p.toString
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.b=B.aa
o.c=0.9
o.r=p.gp(0)
o.d=B.bG
o.e=B.dP
c2.ah(new A.r(r*3.6,-19+Math.abs(r)*0.8),new A.r(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=I.aDn[l]
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.b=B.aa
o.c=4.5
o.r=c0.gp(0)
o.d=B.bG
o.e=B.dP
c2.ah(new A.r(k,0),new A.r(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.r=p.gp(0)
c2.O(new A.r(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fc6,3.204424506661589,3.015928947446201,!0,p)
p=A.ap(c0,B.c,0.25)
p.toString
c2.ah(K.a9a,K.a99,C.iC(p,1))
break
default:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fbC,3.267256359733385,2.8902652413026098,!0,p)}i=B.j.D(c4.b,0,1)*0.4+0.1
p=A.bW(D.evi,5,8)
o=D.agr.j(i)
n=A.L()
n.r=o.gp(0)
c2.c0(p,n)
n=A.bW(D.etW,5,8)
p=D.agr.j(i)
o=A.L()
o.r=p.gp(0)
c2.c0(n,o)
h=c4.e*2.4
o=new A.aH(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(h-0.6,-2))
o.E(new A.ce(h-3.4,6,h-2.6,7.4))
o.E(new A.ce(h,8.8,h+2.6,7.4))
c2.af(o,C.iC(c8.j(0.75),1.1))
o=A.L()
o.r=c8.gp(0)
c2.O(new A.r(h-1.5,7.2),0.7,o)
o=A.L()
o.r=c8.gp(0)
c2.O(new A.r(h+1.5,7.2),0.7,o)
g=B.j.F(c5*0.33+c6*0.37,1)>0.965?1:0
p=c4.d
o=c4.c>0.8?1.25:1
f=(1-g)*(1-p*0.6)*o
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=F.fO[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.bW(new A.r(a5,-3),a3,7)
a6=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a6.r=B.c.j(0.96).gp(0)
c2.c0(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.br(d.save())
a6=A.a([],w)
a4=new A.aH(v,B.aj,b9,b9,a6)
a6.push(new A.jw(A.bW(new A.r(a5,-3),a3,7)))
a4.ab()
a3=a4.e
if(a3==null)a3=a4.e=new A.E9(a4.glg().a.snapshot())
d.clipPath(a3.a,$.mH(),!0)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a3.r=D.blj.gp(0)
c2.O(new A.r(a7,a8),2.1,a3)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a3.r=B.w.gp(0)
c2.O(new A.r(a7,a8),1.05,a3)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a3.r=B.c.gp(0)
c2.O(new A.r(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.ZP:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a9.b=B.aa
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bG
a9.e=B.dP
a3=p?0.8:0
c2.cQ(A.bW(new A.r(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.dX
else{b1=A.ap(c0,B.w,0.2)
b1.toString}b2=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b2.b=B.aa
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bG
b2.e=B.dP
c2.ah(new A.r(a5-a4,b0-a6+0.4),new A.r(a5+a4,b0-0.6-a3),b2)}b3=B.j.D(c4.a,0,1)
if(o)b4=D.bvt
else{u=A.ap(c8,D.boT,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.j.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aH(v,B.aj,b9,b9,A.a([],w))
w=-b6
b8.E(new A.aZ(w,11.5))
b8.E(new A.ce(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.ce(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.bw())
v=A.L()
v.r=D.bob.gp(0)
c2.af(b8,v)
J.br(d.save())
c2.mx(0,b8)
v=B.c.j(0.95)
u=A.L()
u.r=v.gp(0)
c2.aF(new A.a4(w,11,w+b6*2,13.2),u)
u=A.bW(new A.r(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.L()
w.r=D.bvy.gp(0)
c2.c0(u,w)
d.restore()
c2.af(b8,C.iC(b4,1.1))}else{u=new A.aH(v,B.aj,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.aZ(-5.2,p))
u.E(new A.ce(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iC(b4,1.5))
if(b5>0.6){w=new A.aH(v,B.aj,b9,b9,A.a([],w))
w.E(new A.aZ(-4.6,11.8))
w.E(new A.ce(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.ce(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.L()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cQ(D.fbP,-1.2,2.2,!1,C.iC(c8.j(0.5),0.8))
c2.cQ(D.fbE,2.141592653589793,2.2,!1,C.iC(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.L()
w.r=c1.gp(0)
c2.O(D.etE,1.7,w)
w=A.L()
w.r=c1.gp(0)
c2.O(D.etA,1.7,w)}},
if5(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.S(),f=new A.q3(new A.pE()),e=A.zr(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.L()
a2.san(A.jC(B.J,new A.r(0,a0*0.46),D.dcd,D.d3A,B.x,h))
e.aF(new A.a4(0,0,0+d,0+a0),a2)
a2=e.c
J.br(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bV(0,a1)
w=new A.e_()
w.cU(8)
for(v=0;v<120;++v){d=w.ai()
a0=w.ai()
u=w.ai()
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.O(new A.r(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.br(a2.save())
a2.translate(200,120)
e.jq(0,-0.5)
d=A.L()
a0=x.O
d.san(A.wd(B.J,230,A.a([D.bjZ,B.L],a0),h,B.x,h,h,0))
e.c0(D.fck,d)
a2.restore()
d=A.L()
d.san(A.wd(D.a9i,58,A.a([D.bne,B.L],a0),h,B.x,h,h,0))
e.O(D.a9i,58,d)
d=A.L()
d.r=D.biH.gp(0)
e.O(D.a9i,24,d)
d=A.L()
d.r=D.a_f.gp(0)
e.O(D.erY,5,d)
d=A.L()
d.r=D.a_f.gp(0)
e.O(D.es1,3.4,d)
d=A.L()
d.r=D.a_f.gp(0)
e.O(D.es0,2.4,d)
for(d=x.v,s=0;s<3;++s,g=u){u=A.a([],d)
r=new A.aH(g.r,B.aj,h,h,u)
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
g=new A.bw()
u.push(g)
u=r.f
if(u!=null)g.ak(u)
r.ab()
g=[D.bhg,D.bjf,D.bpc][s]
u=$.S()
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cyh[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.b=B.aa
u.c=2.4
u.r=D.a_C.gp(0)
u.d=B.bG
u.e=B.dP
e.ah(new A.r(o,k),new A.r(g,d),u)
g=A.bW(new A.r(g,k-27),11,46)
u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.r=D.a_C.gp(0)
e.c0(g,u)
d=A.bW(new A.r(o-12,d),8,24)
u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.r=D.a_C.gp(0)
e.c0(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.r=D.biK.j(0.8).gp(0)
e.O(new A.r(20+v*52+g*7,400+d*5),1.2,u)}g=A.L()
g.san(A.jC(D.eqx,D.eqz,D.d5A,B.xb,B.x,h))
e.aF(new A.a4(-200,412,650,1300),g)
j=new A.e_()
j.cU(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.bW(new A.r(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.h3()?B.c:B.w
d=new A.ar(B.S,B.Q,B.V,B.X,B.U)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.c0(u,d)}J.br(a2.save())
a2.translate(225,590)
e.op(0,1,0.34)
g=A.L()
g.san(A.wd(B.J,250,A.a([D.bq8,D.bjA,D.bs6],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.O(B.J,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ap(D.aiU,D.bie,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.S()
a0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a0.b=B.aa
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bG
a0.e=B.dP
e.ah(new A.r(o+i*2,k),new A.r(o+i*5,g+Math.abs(i)*3),a0)}}C.i7W(e)
for(l=0;l<3;++l)C.ib5(e,D.aBb[l])
C.iaV(e,D.erS)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.S()
a0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a0.b=B.aa
a0.c=2.4
a0.r=D.a_x.gp(0)
a0.d=B.bG
a0.e=B.dP
e.ah(new A.r(o,452+g),new A.r(o+1,436+d),a0)}e.ah(D.er_,D.erj,C.iC(D.biY,1.6))
a2.restore()
return f.o8()},
i7W(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.S().r,g=x.v,f=new A.aH(h,B.aj,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.kn(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.kn(416,382,432,422,428,462))
f.E(new A.bw())
w=A.L()
w.san(A.jC(new A.r(354,0),new A.r(430,0),D.dAj,B.mp,B.x,i))
d.af(f,w)
v=new A.e_()
v.cU(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.w.j(0.18)
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.b=B.aa
p.c=1.1
p.r=q.gp(0)
p.d=B.bG
p.e=B.dP
d.ah(new A.r(t,s),new A.r(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.dgQ[o]
w=n.a
r=392+w*12
q=-n.b
p=r+w*52
m=336+(q*46-8)
w=p+w*42
q=m+(q*34+4)
l=A.a([],g)
k=new A.aH(h,B.aj,i,i,l)
l.push(new A.aZ(r,336))
k.ab()
r=new A.ce(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.ak(p)
k.ab()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.b=B.aa
r.c=8
r.r=D.ahc.gp(0)
r.d=B.bG
r.e=B.dP
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=A.ap(D.biQ,D.bpa,v.ai()).j(0.92).gp(0)
d.O(new A.r(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.b=B.aa
r.c=1.2
r.r=D.a_x.gp(0)
r.d=B.bG
r.e=B.dP
d.ah(new A.r(w,q+8),new A.r(w,q+22),r)
q=A.bW(new A.r(w,q+28),13,7)
w=new A.ar(B.S,B.Q,B.V,B.X,B.U)
w.r=D.bqu.gp(0)
d.c0(q,w)}},
ib5(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bW(new A.r(a5,a6+2),a9,a7*2.8),b1=B.w.j(0.3),b2=$.S(),b3=A.L()
b3.r=b1.gp(0)
b4.c0(b0,b3)
b2=b2.r
b3=x.v
w=new A.aH(b2,B.aj,a4,a4,A.a([],b3))
b0=a5-a7
b1=a6-a8
w.E(new A.aZ(b0,b1))
w.E(new A.aq(b0,a6))
v=a5+a7
w.E(new A.ce(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.bw())
u=A.L()
u.san(A.jC(new A.r(b0,0),new A.r(v,0),D.dgW,B.mp,B.x,a4))
b4.af(w,u)
t=new A.e_()
t.cU(B.o.V(a5*7))
v=b4.c
J.br(v.save())
b4.mx(0,w)
for(s=0;s<40;++s){r=b0+t.ai()*a7*2
q=b1+t.ai()*a8
u=t.ai()
p=t.ai()
o=B.w.j(0.14)
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.b=B.aa
n.c=1
n.r=o.gp(0)
n.d=B.bG
n.e=B.dP
b4.ah(new A.r(r,q),new A.r(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.aiQ.j(0.75)
n=A.L()
n.r=o.gp(0)
b4.aF(new A.a4(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.j.bg(u);++l){k=m+l*10
j=A.a([],b3)
i=new A.aH(b2,B.aj,a4,a4,j)
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
h=new A.bw()
j.push(h)
j=i.f
if(j!=null)h.ak(j)
i.ab()
j=new A.ar(B.S,B.Q,B.V,B.X,B.U)
j.r=D.lF.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aH(b2,B.aj,a4,a4,u)
b2=a6-8
f.E(new A.aZ(b0,b2))
for(p/=6,l=0;l<=B.j.bg(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.ak(n)
f.ab()}b4.af(f,C.iC(D.aiQ.j(0.7),1.6))
v.restore()
b0=$.S().r
b2=new A.aH(b0,B.aj,a4,a4,A.a([],b3))
u=a7*0.1
p=a5+u
o=a7*0.28
n=p-o
m=a6+1
b2.E(new A.aZ(n,m))
j=a6-a8*0.55
b2.E(new A.aq(n,j))
o=p+o
b2.E(new A.ce(p,a6-a8*0.82,o,j))
b2.E(new A.aq(o,m))
b2.E(new A.bw())
m=A.L()
m.r=D.aj1.gp(0)
b4.af(b2,m)
m=A.L()
m.r=D.aj1.gp(0)
b4.O(new A.r(a5-a7*0.62,a6-a8*0.5),u,m)
m=b5.e
u=b1-m
b2=a7*1.38
o=a5-b2
j=b1+4
p=a5+b2
e=new A.aH(b0,B.aj,a4,a4,A.a([],b3))
e.E(new A.aZ(o,j))
n=b1-m*0.55
e.E(new A.ce(a5-a9,n,a5,u))
e.E(new A.ce(a5+a9,n,p,j))
e.E(new A.ce(a5,b1+a7*0.34,o,j))
e.E(new A.bw())
b1=A.L()
n=a7*1.4
b1.san(A.jC(new A.r(a5-n,0),new A.r(a5+n,0),D.dkv,B.mp,B.x,a4))
b4.af(e,b1)
J.br(v.save())
b4.mx(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h3()?B.w:D.bin).j(0.16)
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.b=B.aa
i.c=0.9
i.r=n.gp(0)
i.d=B.bG
i.e=B.dP
b4.ah(new A.r(a5+(p-0.5)*3,u),new A.r(o+a9*d,j+b1*a7*0.3),i)}for(l=1;l<5;++l){a0=u+m*l/4.6
a1=b2*l/4.6
b1=A.a([],b3)
p=new A.aH(b0,B.aj,a4,a4,b1)
n=a0+2
b1.push(new A.aZ(a5-a1,n))
p.ab()
n=new A.ce(a5,a0+7+l*1.5,a5+a1,n)
b1.push(n)
b1=p.f
if(b1!=null)n.ak(b1)
p.ab()
b1=B.w.j(0.22)
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.b=B.aa
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
v=new A.ar(B.S,B.Q,B.V,B.X,B.U)
v.b=B.aa
v.c=1.1
v.r=D.bpC.gp(0)
v.d=B.bG
v.e=B.dP
b4.ah(new A.r(a2,a3),new A.r(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aH(b0,B.aj,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bw())
b0=A.L()
b0.r=D.blM.gp(0)
b4.af(a9,b0)},
iaV(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+I.aDk[s]
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.b=B.aa
q.c=3
q.r=D.a_x.gp(0)
q.d=B.bG
q.e=B.dP
d.ah(new A.r(r,u),new A.r(r,t),q)}u=A.bW(e.a5(0,K.aMD),24,36)
t=$.S()
r=A.L()
r.r=D.buF.gp(0)
d.c0(u,r)
t=new A.aH(t.r,B.aj,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.aZ(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.ce(w,v-24,r,u))
t.E(new A.bw())
u=A.L()
u.r=D.ahV.gp(0)
d.af(t,u)},
iah(d){switch(B.o.F(d,8)){case 0:return D.b1G
case 1:return D.b1E
case 2:return D.b1D
case 3:return D.b1C
case 4:return D.b1F
case 5:return D.b1H
case 6:return D.hCY
default:return D.hCX}},
SJ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bpB()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a9k:j
w.as=k==null?D.EA:k
C.hBY(d,e,p,C.iah(m),w,s,m,l)},
hDr(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bTT:function bTT(){var _=this
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
ti:function ti(d,e,f,g,h,i,j,k,l,m){var _=this
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
bpB:function bpB(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
amz:function amz(){this.b=this.a=null},
aX2:function aX2(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bTL:function bTL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTM:function bTM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTN:function bTN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTO:function bTO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTP:function bTP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTQ:function bTQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTR:function bTR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTS:function bTS(){},
bTK:function bTK(d){this.a=d},
agc:function agc(d,e){this.a=d
this.b=e},
ae9:function ae9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
N8(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bSu(s)
s.bCd(d)
return s},
H3(d,e,f,g,h,i,j){var w,v=A.U(g).k("Y<1>")
v=A.d0(new A.Y(g,new C.fvV(f),v),v.k("M.E"))
w=A.C(v,A.a3(v).k("ci.E"))
B.d.e0(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.u(v,A.cX(w,0,A.dD(3,"count",x.S),A.U(w).c))
B.d.e0(v,d)
return new C.lw(e,v,B.d.cn(v,f),h,i,"tree",j)},
ivk(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.T(c0,x.cg),c2=new C.h6h(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.jD(c4,c0)
t=A.C(c4,A.a3(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.jD(c4,c0)
r=A.C(c4,A.a3(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.jD(c4,c0)
q=A.C(c4,A.a3(c4).k("ci.E"))
for(c4=w.length,v=A.U(t).k("Y<1>"),s=v.k("M.E"),p=A.U(w).k("Y<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.I)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.c()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.wJ)g="father"
else g=h===D.oB?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Y(t,new C.h6j(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.H3(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Y(w,new C.h6k(i,m),p),o)
B.d.e0(d,c6)
c2.$2(b4,new C.lw("True or false: "+h+" is the "+g+" of "+l+".",D.aCd,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lw("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",D.aCd,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.Ge(m)
h=a0.length
if(h!==0){a1=a0[c6.aw(h)]
h=B.a.i(a1.b)
f=A.C(new A.Y(t,new C.h6l(l,a0,c5),v),s)
e=a1.c
if(e===D.wJ)e="son"
else e=e===D.oB?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.H3(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.eu([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mA(a5,a5.r,f.k("mA<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.H3(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.U(a0),a2=e.k("iz<1>"),a3=new A.iz(a0,1,b3,a2),a3.nb(a0,1,b3,e.c),a3=new A.bQ(a3,a3.gJ(0),a2.k("bQ<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.H3(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.arM(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Y(t,new C.h6m(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.H3(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.c()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.c()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.C(new A.Y(t,new C.h6n(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.wJ
if(e)a2=b7
else a2=f===D.oB?b8:b9
if(e)f=b7
else f=f===D.oB?b8:b9
c2.$2("grand",C.H3(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aNr(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.aw(k)].b)
j=A.C(new A.Y(t,new C.h6o(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.H3(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.u(j,D.cR4)
h=l+" was born in "+k
c2.$2("place",C.H3(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.u(j,D.d6E)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.H3(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.I)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.H3(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cE(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.iZ(b1,b3,b3)
c2.$2("year",C.H3(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bEK(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.N8(d),l=new A.e_()
l.cU(f)
w=C.ivk(m,l,g)
for(v=new A.dn(w,w.r,w.e);v.C();)J.hlB(v.d,l)
v=A.a3(w).k("cr<1>")
u=A.C(new A.cr(w,v),v.k("M.E"))
B.d.e0(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aU(u,new C.fJl(n,w))))break
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
if(v<e){v=A.C(D.aAd,x.df)
B.d.e0(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hC4(o,l))}}else if(!g&&v>3){o=C.hC4(D.aAd[l.aw(14)],l)
t[t.length-1-l.aw(3)]=o}return t},
hC4(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.e0(w,e)
return new C.lw(d.a,w,B.d.cn(w,v),d.d,d.e,d.f,d.r)},
hHo(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.N8(a2),a1=new A.e_()
a1.cU(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a0.Ge(q).length>=2)u.push(q)}B.d.e0(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){n=u[r]
m=a0.Ge(n)
l=A.U(m)
k=new A.iz(m,0,5,l.k("iz<1>"))
k.nb(m,0,5,l.c)
j=k.dq(0)
if(new A.N(j,new C.fXI(),A.U(j).k("N<1,F>")).fL(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.I)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.I)(j),++i)g.push(C.aSP(a0,j[i]))
w.push(new C.auE("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.T(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
J.c5(e.c4(0,a0.amU(q),new C.fXJ()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cr<1>")
d=A.C(new A.cr(e,t),t.k("M.E"))
B.d.ff(d)
v=A.a([],v)
for(u=A.cX(d,0,A.dD(5,"count",u),A.U(d).c),t=u.$ti,u=new A.bQ(u,u.gJ(0),t.k("bQ<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cD(s)
m.e0(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.I)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r)s.push(C.aSP(a0,v[r]))
w.push(new C.auE("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aRk(d){return B.d.aon(D.aCJ,new C.fFb(d))},
ilw(d){return A.nC(new A.Y(D.aCJ,new C.fMb(d),x.av))},
bTi(d){return C.hR5(d)},
hR5(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bTi=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bTi)
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
return A.i($async$bTi,v)},
BQ(d,e){return C.hR2(d,e)},
hR2(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$BQ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$BQ)
case 7:r=g
p=B.a.i(d)
o=A.eo(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aC("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$BQ)
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
return A.i($async$BQ,v)},
bTh(d,e,f){return C.hR3(d,e,f)},
hR3(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bTh=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bTh)
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
return A.i($async$bTh,v)},
BR(d,e,f,g){return C.hR4(d,e,f,g)},
hR4(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$BR=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$BR)
case 7:r=i
p=B.a.i(d)
o=A.eo(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aC("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$BR)
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
return A.i($async$BR,v)},
bH1(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
h8l(d,e,f,g){return new C.al8(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hP9(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aT(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.ct)
while(u.C())w.push(J.k(u.gP(u)))
u=x.N
w=A.cX(w,0,A.dD(4,"count",x.S),u).dq(0)
B.d.u(w,A.c1(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aJ(d.h(0,"c"))
v=v==null?null:B.j.M(v)
v=B.o.D(v==null?0:v,0,3)
u=A.aJ(d.h(0,"s"))
u=u==null?null:B.j.M(u)
return C.h8l(w,v,B.o.D(u==null?20:u,5,60),t)},
hmK(d){var w,v,u,t,s,r,q=J.a8(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aT(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.ct)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gP(q)
if(u.b(r))v.push(C.hP9(A.a1(r,t,s)))}return new C.MT(p,w,v)},
hgO(d){var w,v=A.a([],x.c)
for(w=J.aT(d.z);w.C();)v.push(C.hmK(w.gP(w)))
return v},
aSP(d,e){var w=e.c===D.oB
if(d.amU(e)===0&&d.Ge(e).length!==0)return w?0:1
if(d.Ge(e).length!==0||d.arM(e)!=null)return w?2:3
return w?4:5},
hIt(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.N8(a4),a3=new A.e_()
a3.cU(a5)
w=A.a([],x.dT)
v=a2.b
u=A.C(v,x.P)
B.d.e0(u,a3)
t=x.s
s=A.a([],t)
for(r=v.length,q=0;q<v.length;v.length===r||(0,A.I)(v),++q)s.push(B.a.i(v[q].b))
for(v=u.length,r=x.N,p=x.ec,o=x.cc,n=o.k("M.E"),q=0;q<u.length;u.length===v||(0,A.I)(u),++q){m=u[q]
l=A.a([],t)
k=m.d
if(k==null)j=null
else{i=a2.c
i===$&&A.c()
j=i.h(0,k)}h=a2.Ge(m)
g=a2.arM(m)
f=a2.aNr(m)
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
if(k===D.wJ)k="father"
else k=k===D.oB?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.wJ)k="father"
else k=k===D.oB?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e0(l,a3)
B.d.b_(l,new C.h6H())
d=B.a.i(m.b)
a0=A.C(new A.Y(s,new C.h6I(d),o),n)
B.d.e0(a0,a3)
k=A.a([d],t)
i=A.U(a0)
a1=new A.iz(a0,0,3,i.k("iz<1>"))
a1.nb(a0,0,3,i.c)
B.d.u(k,a1)
B.d.e0(k,a3)
a1=C.aSP(a2,m)
i=new A.iz(l,0,4,p)
i.nb(l,0,4,r)
w.push(new C.bb1(d,a1,i.dq(0),k))
if(w.length>=5)break}return w},
hzB(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.a_(d,"My ")?1:0},
hHz(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.N8(a4),a3=new A.e_()
a3.cU(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a2.Ge(q).length>=2)u.push(q)}B.d.e0(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){l=u[r]
k=a2.Ge(l)
j=A.U(k)
i=new A.iz(k,0,4,j.k("iz<1>"))
i.nb(k,0,4,j.c)
h=i.dq(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.I)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aU(h,new C.fYk(q))&&q.d!==j)i.push(q)}B.d.e0(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.iz(i,0,k,m)
j.nb(i,0,k,n)
f=j.dq(0)
j=B.a.i(l.b)
k=C.aSP(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.I)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.I)(h),++g)e.push(C.aSP(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.I)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.I)(f),++g)a0.push(C.aSP(a2,f[g]))
w.push(new C.aad(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lw:function lw(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bSu:function bSu(d){this.b=d
this.c=$},
bSv:function bSv(){},
bSw:function bSw(d){this.a=d},
fvV:function fvV(d){this.a=d},
h6h:function h6h(d){this.a=d},
h6i:function h6i(){},
h6j:function h6j(d){this.a=d},
h6k:function h6k(d,e){this.a=d
this.b=e},
h6l:function h6l(d,e,f){this.a=d
this.b=e
this.c=f},
h6g:function h6g(d,e){this.a=d
this.b=e},
h6m:function h6m(d){this.a=d},
h6n:function h6n(d){this.a=d},
h6o:function h6o(d,e,f){this.a=d
this.b=e
this.c=f},
h6f:function h6f(d,e){this.a=d
this.b=e},
fJl:function fJl(d,e){this.a=d
this.b=e},
auE:function auE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fXI:function fXI(){},
fXJ:function fXJ(){},
zA:function zA(d,e,f){this.a=d
this.b=e
this.c=f},
fFb:function fFb(d){this.a=d},
fMb:function fMb(d){this.a=d},
al8:function al8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bNi:function bNi(){},
MT:function MT(d,e,f){this.a=d
this.b=e
this.c=f},
bb1:function bb1(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
h6H:function h6H(){},
h6I:function h6I(d){this.a=d},
aad:function aad(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fYk:function fYk(d){this.a=d},
bii:function bii(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
aga:function aga(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
akr:function akr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aks:function aks(d,e,f,g,h){var _=this
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
_.a9$=h
_.c=_.a=null},
bLr:function bLr(d){this.a=d},
bLm:function bLm(){},
bLs:function bLs(){},
bLk:function bLk(){},
bLl:function bLl(){},
bLq:function bLq(d){this.a=d},
bLn:function bLn(d,e){this.a=d
this.b=e},
bLp:function bLp(d,e){this.a=d
this.b=e},
bLo:function bLo(d,e){this.a=d
this.b=e},
bLj:function bLj(d){this.a=d},
bdu:function bdu(d,e){this.b=d
this.a=e},
QP:function QP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aC_:function aC_(d,e,f){this.b=d
this.c=e
this.a=f},
aAt:function aAt(d,e,f){this.a=d
this.b=e
this.c=f},
avf:function avf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
avg:function avg(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.cO$=e
_.b8$=f
_.c=_.a=null},
cr8:function cr8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cr9:function cr9(d){this.a=d},
cr7:function cr7(d){this.a=d},
cra:function cra(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
crb:function crb(){},
crc:function crc(d,e){this.a=d
this.b=e},
crd:function crd(){},
cre:function cre(d){this.a=d},
cr4:function cr4(d){this.a=d},
cr5:function cr5(d,e){this.a=d
this.b=e},
cr6:function cr6(d,e,f){this.a=d
this.b=e
this.c=f},
cr_:function cr_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cr1:function cr1(d,e){this.a=d
this.b=e},
cr2:function cr2(d,e){this.a=d
this.b=e},
cr0:function cr0(d,e){this.a=d
this.b=e},
cqZ:function cqZ(){},
cr3:function cr3(){},
bcY:function bcY(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cRc:function cRc(){},
azd:function azd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aze:function aze(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cG5:function cG5(d){this.a=d},
cG4:function cG4(d){this.a=d},
cGd:function cGd(d,e){this.a=d
this.b=e},
cGe:function cGe(d,e){this.a=d
this.b=e},
cGf:function cGf(d){this.a=d},
cGc:function cGc(d){this.a=d},
cGg:function cGg(d){this.a=d},
cGh:function cGh(d,e){this.a=d
this.b=e},
cGi:function cGi(){},
cGj:function cGj(d){this.a=d},
cG7:function cG7(d){this.a=d},
cG8:function cG8(d,e){this.a=d
this.b=e},
cG6:function cG6(d,e){this.a=d
this.b=e},
cG9:function cG9(){},
cGa:function cGa(){},
cGb:function cGb(d,e){this.a=d
this.b=e},
aAd:function aAd(){},
aHv:function aHv(){},
hey(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.brW((w-450*u)/2,(v-900*u)/2,u)},
afZ:function afZ(){},
f8t:function f8t(d){this.a=d},
aLj:function aLj(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fiD:function fiD(d){this.a=d},
amp:function amp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amq:function amq(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.qe$=f
_.M4$=g
_.anq$=h
_.bw$=i
_.a9$=j
_.c=_.a=null},
bTg:function bTg(d){this.a=d},
bTf:function bTf(){},
bTd:function bTd(d){this.a=d},
bTb:function bTb(){},
bTc:function bTc(d){this.a=d},
bT8:function bT8(d,e){this.a=d
this.b=e},
bT9:function bT9(){},
bTa:function bTa(d){this.a=d},
bTe:function bTe(d,e){this.a=d
this.b=e},
bT7:function bT7(d){this.a=d},
btE:function btE(d,e){this.b=d
this.a=e},
f8u:function f8u(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f8v:function f8v(d,e,f){this.a=d
this.b=e
this.c=f},
f8w:function f8w(d,e,f){this.a=d
this.b=e
this.c=f},
f8x:function f8x(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8y:function f8y(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f8z:function f8z(){},
amn:function amn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amo:function amo(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.qe$=f
_.M4$=g
_.anq$=h
_.bw$=i
_.a9$=j
_.c=_.a=null},
bSU:function bSU(){},
bT4:function bT4(d,e){this.a=d
this.b=e},
bT5:function bT5(d){this.a=d},
bT6:function bT6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bT0:function bT0(){},
bT_:function bT_(d,e){this.a=d
this.b=e},
bT1:function bT1(d,e){this.a=d
this.b=e},
bT2:function bT2(){},
bT3:function bT3(d){this.a=d},
bSW:function bSW(d){this.a=d},
bSX:function bSX(d){this.a=d},
bSY:function bSY(d){this.a=d},
bSV:function bSV(d,e){this.a=d
this.b=e},
bSZ:function bSZ(d){this.a=d},
bk6:function bk6(d,e){this.b=d
this.a=e},
dsr:function dsr(){},
a2g:function a2g(d,e){this.a=d
this.b=e},
amj:function amj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amk:function amk(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.qe$=e
_.M4$=f
_.anq$=g
_.bw$=h
_.a9$=i
_.c=_.a=null},
bSG:function bSG(d){this.a=d},
bSF:function bSF(){},
bSE:function bSE(){},
bSy:function bSy(){},
bSz:function bSz(){},
bSD:function bSD(d,e,f){this.a=d
this.b=e
this.c=f},
bSC:function bSC(d){this.a=d},
bSA:function bSA(d,e){this.a=d
this.b=e},
bSB:function bSB(d){this.a=d},
bjx:function bjx(d,e){this.b=d
this.a=e},
aC2:function aC2(){},
bh5:function bh5(){},
aC4:function aC4(){},
bh6:function bh6(){},
aC5:function aC5(){},
bh7:function bh7(){},
uy(d,e,f,g,h){var w,v,u=null,t=A.l(18),s=A.a([],x.V)
s.push(new A.ab(0,B.G,f.j(0.4),B.i3,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.u(v,A.a([A.W(g,h,u,u,u,20),B.ae],w))
v.push(A.d(d,u,u,u,u,u,u,A.m(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.az(u,A.p(u,A.A(v,B.l,u,B.e,B.N,0,u,u),B.f,u,u,new A.o(f,u,u,t,s,u,B.n),u,u,u,u,B.OE,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hnx(d,e,f,g,h,i,j){return new C.aml(i,h,d,j,e,f,g,null)},
a6H:function a6H(d,e){this.c=d
this.a=e},
bjE:function bjE(d){this.a=d},
tH:function tH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bSx:function bSx(d){this.a=d},
Iw:function Iw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Wt:function Wt(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmr:function bmr(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e2O:function e2O(d,e){this.a=d
this.b=e},
e2P:function e2P(d){this.a=d},
e2Q:function e2Q(d,e){this.a=d
this.b=e},
e2M:function e2M(d){this.a=d},
e2N:function e2N(d){this.a=d},
e2L:function e2L(d){this.a=d},
e2J:function e2J(d){this.a=d},
e2K:function e2K(d){this.a=d},
e2I:function e2I(d,e){this.a=d
this.b=e},
e2R:function e2R(d){this.a=d},
e2S:function e2S(d,e){this.a=d
this.b=e},
e2T:function e2T(d,e){this.a=d
this.b=e},
e2U:function e2U(d,e){this.a=d
this.b=e},
e2X:function e2X(d,e){this.a=d
this.b=e},
e2Y:function e2Y(d,e){this.a=d
this.b=e},
e2Z:function e2Z(d,e){this.a=d
this.b=e},
e3_:function e3_(d,e){this.a=d
this.b=e},
e30:function e30(d,e){this.a=d
this.b=e},
e31:function e31(d,e,f){this.a=d
this.b=e
this.c=f},
e32:function e32(d,e){this.a=d
this.b=e},
e33:function e33(d,e){this.a=d
this.b=e},
e2V:function e2V(d){this.a=d},
e2W:function e2W(d){this.a=d},
a09:function a09(d,e){this.a=d
this.b=e},
aml:function aml(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
amm:function amm(d){var _=this
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
bSS:function bSS(d){this.a=d},
bST:function bST(d){this.a=d},
bSR:function bSR(d){this.a=d},
bSI:function bSI(d){this.a=d},
bSJ:function bSJ(d){this.a=d},
bSH:function bSH(d){this.a=d},
bSO:function bSO(d,e,f){this.a=d
this.b=e
this.c=f},
bSP:function bSP(d){this.a=d},
bSL:function bSL(d,e){this.a=d
this.b=e},
bSM:function bSM(d,e,f){this.a=d
this.b=e
this.c=f},
bSQ:function bSQ(){},
bSN:function bSN(d,e){this.a=d
this.b=e},
bSK:function bSK(d){this.a=d},
U8:function U8(d,e){this.c=d
this.a=e},
ami:function ami(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bSi:function bSi(d){this.a=d},
bSj:function bSj(d){this.a=d},
bSt:function bSt(){},
bSs:function bSs(d,e,f){this.a=d
this.b=e
this.c=f},
bSn:function bSn(d,e){this.a=d
this.b=e},
bSm:function bSm(d,e){this.a=d
this.b=e},
bSo:function bSo(d){this.a=d},
bSp:function bSp(d,e){this.a=d
this.b=e},
bSq:function bSq(d,e){this.a=d
this.b=e},
bSl:function bSl(d,e){this.a=d
this.b=e},
bSr:function bSr(d,e,f){this.a=d
this.b=e
this.c=f},
bSk:function bSk(d,e){this.a=d
this.b=e},
ik1(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ajc(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bC(new A.V(Date.now(),0,!1))
s=new C.fIO(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("Y<1>"),q=q.k("cM<1,n>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.z9)m.push(l===D.wJ?"male":"female")
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
if(l&&h==null)m.push("about "+(t-A.iZ(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.iZ(h,a2,a2)-A.iZ(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.C(new A.cM(new A.Y(a4,new C.fIM(u,f),p),new C.fIN(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aM(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aM(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aA(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
ik2(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ajc(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.I)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fIT(v,e)
q=new C.fIR(v)
p=A.T(w,x.S)
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
p.n(0,s.a,d)}}d=p.$ti.k("b7<2>")
d=A.d0(new A.b7(p,d),d.k("M.E"))
n=A.C(d,A.a3(d).k("ci.E"))
B.d.ff(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.I)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eJ(l,new C.fIS(p,m));k.C();t=f){j=l.gP(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aM(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
i5j(d,e,f,g){var w,v,u=C.ik3(d,e)
if(u<=0||f.length<=u)return new A.afD(!1,D.DV,f)
if(g.q(0,e.a))return new A.afD(!1,D.DV,f)
w=A.U(f).c
v=A.cX(f,0,A.dD(u,"count",x.S),w).dq(0)
return new A.afD(!0,A.cX(f,u,null,w).dq(0),v)},
i5k(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ajc(d3),d2=d1.length
if(d2===0)return D.hA9
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.I)(d1),++u){t=d1[u]
v.c4(0,t.a,new C.dhX(t))}s=new C.did(v)
d2=x.dy
r=A.T(w,d2)
q=new C.di5(r)
for(p=new A.dn(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.di4(r)
l=A.T(w,x.do)
for(p=new A.dn(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c5(l.c4(0,k,new C.dhY()),o)}h=new C.di3(s)
g=new C.di2(l,r)
p=v.$ti.k("b7<2>")
o=p.k("Y<M.E>")
f=A.C(new A.Y(new A.b7(v,p),new C.dhZ(h),o),o.k("M.E"))
e=f.length===0?new A.b7(v,p).gH(0):B.d.gH(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.I)(f),++u){t=f[u]
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
a9=new C.dib(new C.di7(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dn(v,v.r,v.e),j=a2.gamp(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.eu([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.I(0,i))break}if(h.$1(b0)&&a2.am(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nC(J.dI(i==null?B.Z:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.dO)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.dhW(a2,new C.dic(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.I)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.dn(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+156)}for(d2=b5.length,u=0;u<d2;++u){w=b5[u].b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+40)}c2=24-(b9===1/0?0:b9)
d2=b4.$ti.k("cr<1>")
d2=A.C(new A.cr(b4,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.GD(o,new A.r(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.KZ(c5.a,new A.r(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cr<1>")
d2=A.C(new A.cr(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bO(0,new C.di_(c6,b4))
for(d2=new A.cd(a4,a4.$ti.k("cd<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aT(c7.b);j.C();){i=j.gP(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.r(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eJ(j,new C.di0(c8));i.C();)o.push(j.gP(0).b)
if(o.length===0)continue
B.d.b_(o,new C.di1())
c6.push(new C.aLe(new A.r(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bhb(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hCM(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cE(d)
return w==null?null:w.b[1]},
hwN(d,e,f,g,h,i,j,k,l,m,n){return new C.a0m(k,f,j,e,l,n,m,d,g,h,i,null)},
aE3(d,e,f,g,h,i,j){return new C.bkX(i,d,e,f,j,h,g,null)},
ars:function ars(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFC:function aFC(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e4t:function e4t(d){this.a=d},
e4s:function e4s(d){this.a=d},
e4v:function e4v(d,e){this.a=d
this.b=e},
e4w:function e4w(d,e){this.a=d
this.b=e},
e4x:function e4x(d){this.a=d},
e4r:function e4r(d,e){this.a=d
this.b=e},
e4u:function e4u(d){this.a=d},
e4z:function e4z(d){this.a=d},
e4y:function e4y(d,e){this.a=d
this.b=e},
arm:function arm(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFz:function aFz(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e3U:function e3U(d){this.a=d},
e3S:function e3S(d){this.a=d},
e3T:function e3T(d){this.a=d},
e3V:function e3V(d,e){this.a=d
this.b=e},
e3P:function e3P(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e3g:function e3g(d){this.a=d},
e3h:function e3h(d,e){this.a=d
this.b=e},
e3y:function e3y(d){this.a=d},
e3w:function e3w(d){this.a=d},
e3x:function e3x(d,e){this.a=d
this.b=e},
e3z:function e3z(d){this.a=d},
e3A:function e3A(d,e){this.a=d
this.b=e},
e3O:function e3O(d,e){this.a=d
this.b=e},
e3v:function e3v(d){this.a=d},
e3u:function e3u(d){this.a=d},
e3t:function e3t(d,e){this.a=d
this.b=e},
e3L:function e3L(){},
e3M:function e3M(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e3K:function e3K(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e3E:function e3E(d){this.a=d},
e3F:function e3F(d,e,f){this.a=d
this.b=e
this.c=f},
e3D:function e3D(d,e){this.a=d
this.b=e},
e3G:function e3G(d,e){this.a=d
this.b=e},
e3B:function e3B(d,e){this.a=d
this.b=e},
e3C:function e3C(){},
e3H:function e3H(d,e){this.a=d
this.b=e},
e3I:function e3I(d){this.a=d},
e3J:function e3J(d,e){this.a=d
this.b=e},
e3N:function e3N(d,e){this.a=d
this.b=e},
e34:function e34(d,e){this.a=d
this.b=e},
e35:function e35(d,e){this.a=d
this.b=e},
e3X:function e3X(d,e,f){this.a=d
this.b=e
this.c=f},
e3R:function e3R(d,e,f){this.a=d
this.b=e
this.c=f},
e3Q:function e3Q(d){this.a=d},
e36:function e36(d){this.a=d},
e37:function e37(d){this.a=d},
e38:function e38(){},
e39:function e39(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e3d:function e3d(d,e){this.a=d
this.b=e},
e3c:function e3c(d,e){this.a=d
this.b=e},
e3b:function e3b(d){this.a=d},
e3e:function e3e(d,e){this.a=d
this.b=e},
e3a:function e3a(d){this.a=d},
e3W:function e3W(d){this.a=d},
e3q:function e3q(){},
e3r:function e3r(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e3p:function e3p(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e3l:function e3l(d,e,f){this.a=d
this.b=e
this.c=f},
e3k:function e3k(d,e,f){this.a=d
this.b=e
this.c=f},
e3i:function e3i(d,e){this.a=d
this.b=e},
e3m:function e3m(d){this.a=d},
e3n:function e3n(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e3j:function e3j(d,e){this.a=d
this.b=e},
e3o:function e3o(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e3s:function e3s(d,e){this.a=d
this.b=e},
e43:function e43(){},
e44:function e44(d,e){this.a=d
this.b=e},
e45:function e45(d){this.a=d},
e46:function e46(d,e){this.a=d
this.b=e},
e4_:function e4_(d){this.a=d},
e3Y:function e3Y(d,e){this.a=d
this.b=e},
e40:function e40(d,e){this.a=d
this.b=e},
e41:function e41(d,e){this.a=d
this.b=e},
e42:function e42(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e47:function e47(d){this.a=d},
e3Z:function e3Z(d){this.a=d},
e3f:function e3f(d){this.a=d},
bh9:function bh9(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dhU:function dhU(d){this.a=d},
dhT:function dhT(d,e){this.a=d
this.b=e},
dhV:function dhV(d){this.a=d},
dhS:function dhS(d,e){this.a=d
this.b=e},
fIO:function fIO(d,e){this.a=d
this.b=e},
fIP:function fIP(d){this.a=d},
fIQ:function fIQ(){},
fIM:function fIM(d,e){this.a=d
this.b=e},
fIN:function fIN(){},
fIT:function fIT(d,e){this.a=d
this.b=e},
fIU:function fIU(d){this.a=d},
fIV:function fIV(){},
fIR:function fIR(d){this.a=d},
fIS:function fIS(d,e){this.a=d
this.b=e},
KZ:function KZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GD:function GD(d,e){this.a=d
this.b=e},
bhb:function bhb(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dhX:function dhX(d){this.a=d},
did:function did(d){this.a=d},
di5:function di5(d){this.a=d},
di6:function di6(){},
di4:function di4(d){this.a=d},
dhY:function dhY(){},
di3:function di3(d){this.a=d},
di2:function di2(d,e){this.a=d
this.b=e},
dhZ:function dhZ(d){this.a=d},
di7:function di7(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
di8:function di8(d){this.a=d},
di9:function di9(d){this.a=d},
dia:function dia(){},
dib:function dib(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dic:function dic(){},
dhW:function dhW(d,e,f,g,h,i,j,k,l,m){var _=this
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
di_:function di_(d,e){this.a=d
this.b=e},
di0:function di0(d){this.a=d},
di1:function di1(){},
aLe:function aLe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bhc:function bhc(d,e){this.b=d
this.a=e},
die:function die(){},
dif:function dif(d){this.a=d},
dig:function dig(d){this.a=d},
dih:function dih(){},
bkY:function bkY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bge:function bge(d,e){this.b=d
this.a=e},
bz1:function bz1(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fod:function fod(d){this.a=d},
boj:function boj(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eZf:function eZf(d){this.a=d},
eZe:function eZe(d,e){this.a=d
this.b=e},
a0m:function a0m(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aE1:function aE1(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dyb:function dyb(d,e){this.a=d
this.b=e},
dya:function dya(d){this.a=d},
dy8:function dy8(d){this.a=d},
dy9:function dy9(d){this.a=d},
dyk:function dyk(d){this.a=d},
dyl:function dyl(d){this.a=d},
dyj:function dyj(d,e){this.a=d
this.b=e},
dym:function dym(){},
dyp:function dyp(d){this.a=d},
dyi:function dyi(d,e){this.a=d
this.b=e},
dyo:function dyo(){},
dyq:function dyq(d){this.a=d},
dyh:function dyh(d,e){this.a=d
this.b=e},
dyr:function dyr(d){this.a=d},
dyg:function dyg(d){this.a=d},
dys:function dys(d){this.a=d},
dyf:function dyf(d){this.a=d},
dyt:function dyt(d){this.a=d},
dye:function dye(d){this.a=d},
dyu:function dyu(d){this.a=d},
dyd:function dyd(d){this.a=d},
dyv:function dyv(d){this.a=d},
dyc:function dyc(d,e){this.a=d
this.b=e},
dyn:function dyn(d){this.a=d},
aew:function aew(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bkX:function bkX(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aev:function aev(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bkW:function bkW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dyw:function dyw(d){this.a=d},
dyx:function dyx(d,e){this.a=d
this.b=e},
aE2:function aE2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aKg:function aKg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aex:function aex(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dyG:function dyG(d){this.a=d},
Gz:function Gz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hrB(d){var w=d.U,v=x.N
return w.jp(w,new C.cfO(),v,v)},
hXI(d){var w=d.bI
if(w>=0)return w
return 5},
hrD(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hrB(d).h(0,v)
if(w==null||w.length===0)return null
return A.bj(w)},
hrC(d,e){var w=C.hrD(d,e)
if(w!=null&&w.ca(new A.V(Date.now(),0,!1)))return!0
return!1},
hXJ(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.hrB(d),w,w)
u=C.hrD(d,e)
t=u!=null&&u.ca(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bS(A.dw(30,0,0,0,0,0).a).aa().ag())
d.U=v},
b1I(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b1I=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lD(t,B.JK),$async$b1I)
case 3:if(l){u=!0
w=1
break}u=A.li(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.JK,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1I,v)},
cfO:function cfO(){},
hXG(){var w,v=$.ow(),u=J.e5(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hg(u)},
Js(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Js=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$Js)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f5("ngmy_family_tree_backup_codes_v1",null,!1,B.bN),$async$Js)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
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
p=A.ac(m)
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
return A.i($async$Js,v)},
a8q(d){return C.hXH(d)},
hXH(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a8q=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$a8q)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hM("ngmy_family_tree_backup_codes_v1",A.J(["codes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cO,null),$async$a8q)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ac(p)
$.am.$1("[family tree sync codes] save: "+A.w(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a8q,v)},
cfN(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cfN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Js(),$async$cfN)
case 3:t=m.i5(f),t=t.gae(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gP(t)
q=r.b
if(s.b(q)){p=J.a8(q)
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
return A.i($async$cfN,v)},
Oq(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Oq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cfN(d),$async$Oq)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Js(),$async$Oq)
case 6:s=f
r=J.a8(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dL(A.a1(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,t,o)
w=9
return A.b(C.a8q(s),$async$Oq)
case 9:case 8:u=t
w=1
break
case 5:n=C.hXG()
w=10
return A.b(C.Js(),$async$Oq)
case 10:s=f
J.aK(s,n,A.J(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a8q(s),$async$Oq)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Oq,v)},
b1H(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b1H=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Js(),$async$b1H)
case 3:t=f
for(s=J.dq(t),r=s.gdP(t),r=r.dq(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.I)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a8q(t),$async$b1H)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b1H,v)},
a8r(d,e,f){var w=0,v=A.j(x.H),u
var $async$a8r=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.arr(d,e),$async$a8r)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Oq(d),$async$a8r)
case 7:w=4
break
case 5:w=8
return A.b(C.b1H(d),$async$a8r)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a8r,v)},
arl(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$arl=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.arr(f,e),$async$arl)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c8(),$async$arl)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Js(),$async$arl)
case 7:q=o.t(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a8(q)
if(!J.z(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arl,v)},
b1G(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b1G=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c8(),$async$b1G)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Js(),$async$b1G)
case 4:t=q.t(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a8(t)
if(!J.z(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1G,v)},
hXK(){var w,v=$.ow(),u=J.e5(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hg(u)},
aro(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$aro=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$aro)
case 3:if(!g){u=null
w=1
break}t=C.hXK()
w=4
return A.b(A.Wu(),$async$aro)
case 4:s=g
r=B.dU.aN(B.W.av(d.f2(),null))
r=B.cV.gcu().aN(r)
q=e?999:2
J.aK(s,t,A.J(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a8s(s),$async$aro)
case 5:p=e?999:2
u=new A.a1w("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aro,v)},
arn(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$arn=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Wu(),$async$arn)
case 3:p=a0
o=J.a8(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a8(n)
l=A.aJ(m.h(n,"usesRemaining"))
k=l==null?null:B.j.M(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b1G(J.k(l==null?"":l),j),$async$arn)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.ca.cC(0,B.cK.aN(t))
s=C.hrE(r)}catch(f){q=A.ac(f)
$.am.$1("[family tree qr stash] decode: "+A.w(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dL(A.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=5
return A.b(A.a8s(p),$async$arn)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arn,v)},
hrE(d){var w,v,u,t,s=null
try{w=B.W.aP(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hXM(A.a1(w,x.N,x.z))
return u}catch(t){v=A.ac(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
hav(d){var w=0,v=A.j(x.m),u,t,s
var $async$hav=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a_(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.arn(t[1])
w=1
break}u=null
w=1
break}u=C.hrE(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hav,v)},
hXM(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.de(v,x.f)
u=A.cF(u,new C.cfQ(),u.$ti.k("M.E"),x.k)
t=A.a3(u).k("Y<M.E>")
s=A.C(new A.Y(u,new C.cfR(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bj(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.T(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.i5(p),t=t.gae(t),o=x.B;t.C();){n=t.gP(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.de(l,u)
n=A.cF(n,new C.cfS(),n.$ti.k("M.E"),o)
k=A.a3(n).k("Y<M.E>")
j=A.C(new A.Y(n,new C.cfT(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.arp(h,w,s,r,q)},
arr(d,e){var w=0,v=A.j(x.y),u,t
var $async$arr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Oh(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Bj(d),$async$arr)
case 3:u=t.cJ(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arr,v)},
cfZ(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cfZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Bj(d),$async$cfZ)
case 3:t=s.b8(f,new C.cg_(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.b_(t,new C.cg0())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cfZ,v)},
Wv(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Wv=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.arr(e,d),$async$Wv)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Oq(e),$async$Wv)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Bj(e),$async$Wv)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dI(r,new C.cfX(g))
r=A.C(t,t.$ti.k("M.E"))}t=J.a8(r)
if(t.gau(r)){u=null
w=1
break}t=t.dN(r,new C.cfY(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.LO(e,o),$async$Wv)
case 14:n=i
if(J.cJ(n))q.n(0,o,n)
case 12:r.length===t||(0,A.I)(r),++p
w=11
break
case 13:u=new C.arp(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Wv,v)},
b1L(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b1L=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Wv(d,e,f,g),$async$b1L)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.Hi(A.KV(q.f2(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1L,v)},
b1K(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b1K=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Wv(d,e,f,g),$async$b1K)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.aro(r,f),$async$b1K)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aIg(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1K,v)},
Ww(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ww=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.hav(a0),$async$Ww)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a_(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.arl(g.a,d,e,f,s,r),$async$Ww)
case 6:if(!a2){if(r)throw A.X(A.bc("This backup expired or the sender's tree is no longer available."))
throw A.X(A.bc("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bEr(e,j),$async$Ww)
case 12:case 11:w=13
return A.b(C.aiW(e,j,s),$async$Ww)
case 13:h=n.h(0,i)
w=h!=null&&J.cJ(h)?14:15
break
case 14:w=16
return A.b(C.Bu(e,i,h),$async$Ww)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.I)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bs1(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ww,v)},
arp:function arp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cfV:function cfV(){},
cfW:function cfW(){},
cfU:function cfU(){},
cfQ:function cfQ(){},
cfR:function cfR(){},
cfS:function cfS(){},
cfT:function cfT(){},
cg_:function cg_(){},
cg0:function cg0(){},
cfX:function cfX(d){this.a=d},
cfY:function cfY(d){this.a=d},
hjz(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f4(null,x.H)
return A.hC(d,new C.arq(w,e,g,i,f,h,null),!0,null,x.H)},
dhR(d,e,f,g,h,i,j,k){return new C.bh8(i,e,k,j,g,f,h,d,null)},
arq:function arq(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFB:function aFB(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e4g:function e4g(d){this.a=d},
e4h:function e4h(d,e,f){this.a=d
this.b=e
this.c=f},
e4l:function e4l(d,e){this.a=d
this.b=e},
e4m:function e4m(d){this.a=d},
e4d:function e4d(d){this.a=d},
e4e:function e4e(d,e){this.a=d
this.b=e},
e4f:function e4f(d,e){this.a=d
this.b=e},
e4k:function e4k(d){this.a=d},
e4j:function e4j(d,e){this.a=d
this.b=e},
e4i:function e4i(){},
e4o:function e4o(d){this.a=d},
e4p:function e4p(d,e){this.a=d
this.b=e},
e4n:function e4n(d,e){this.a=d
this.b=e},
dii:function dii(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bha:function bha(d,e,f){this.d=d
this.e=e
this.a=f},
adL:function adL(d,e,f){this.c=d
this.d=e
this.a=f},
bh8:function bh8(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bhd:function bhd(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0G:function a0G(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFA:function aFA(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e48:function e48(d,e){this.a=d
this.b=e},
e49:function e49(d){this.a=d},
e4a:function e4a(d){this.a=d},
e4b:function e4b(d){this.a=d},
e4c:function e4c(d){this.a=d},
a0H:function a0H(d){this.a=d},
bms:function bms(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e4q:function e4q(d,e){this.a=d
this.b=e},
b0e(d,e){return new C.b0d(d,e,null)},
b0d:function b0d(d,e,f){this.c=d
this.d=e
this.a=f},
imt(d){if(!(d!=null&&B.a.a_(d,"ngmy:thumb:")))return null
return B.a.b4(d,11)},
itS(d){return A.bT(B.L,null,new C.fZR(new C.uk(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
htC(d,e){return new C.aus(e,d,null)},
aSI(d,e,f,g,h,i,j){var w=C.imt(i)
if(w!=null)return A.bu(e,new A.a5(j,f,new C.a7t(w,!0,null),null),B.aq)
return N.aS4(e,B.c1,f,g,h,i,j)},
lY:function lY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7t:function a7t(d,e,f){this.c=d
this.d=e
this.a=f},
bm6:function bm6(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b8$=e
_.c=_.a=null},
dQi:function dQi(d){this.a=d},
dQj:function dQj(){},
dQk:function dQk(d,e){this.a=d
this.b=e},
bm5:function bm5(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fZR:function fZR(d){this.a=d},
fZQ:function fZQ(d,e){this.a=d
this.b=e},
fZP:function fZP(d,e){this.a=d
this.b=e},
fZO:function fZO(d,e){this.a=d
this.b=e},
aus:function aus(d,e,f){this.c=d
this.d=e
this.a=f},
cpq:function cpq(d,e){this.a=d
this.b=e},
aNG:function aNG(){},
itD(d){var w=null
return A.cg(w,w,!0,w,new C.fZe(),d,w,!0,!0,x.e2)},
iuR(d,e,f,g,h){var w=null
return A.cg(w,w,!0,w,new C.h6_(h,g,f,e),d,w,!0,!0,x.N)},
itF(d,e){var w=null
return A.cg(w,w,!0,w,new C.fZi(e),d,w,!0,!0,x.dY)},
itE(d){var w=null
return A.cg(w,w,!0,w,new C.fZh(),d,w,!0,!0,x.c5)},
aVE:function aVE(d,e){this.a=d
this.b=e},
aVD:function aVD(d){this.a=d},
aTG:function aTG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fZe:function fZe(){},
h6_:function h6_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fZi:function fZi(d){this.a=d},
fZh:function fZh(){},
a_k:function a_k(d,e){this.c=d
this.a=e},
aAL:function aAL(){var _=this
_.d=$
_.c=_.a=_.e=null},
d9t:function d9t(d){this.a=d},
d9u:function d9u(d){this.a=d},
d9s:function d9s(d,e){this.a=d
this.b=e},
d9v:function d9v(d){this.a=d},
d9w:function d9w(d){this.a=d},
a_j:function a_j(d){this.a=d},
aAK:function aAK(){this.d=$
this.c=this.a=null},
d9p:function d9p(d){this.a=d},
d9q:function d9q(d){this.a=d},
d9r:function d9r(d){this.a=d},
ZR:function ZR(d){this.a=d},
azr:function azr(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cHL:function cHL(){},
cHR:function cHR(d){this.a=d},
cHS:function cHS(d){this.a=d},
cHT:function cHT(d){this.a=d},
cHQ:function cHQ(){},
cHU:function cHU(d){this.a=d},
cHV:function cHV(d){this.a=d},
cHP:function cHP(){},
cHW:function cHW(d,e){this.a=d
this.b=e},
cHO:function cHO(d,e){this.a=d
this.b=e},
cHM:function cHM(d,e){this.a=d
this.b=e},
cHX:function cHX(d){this.a=d},
cHN:function cHN(){},
cHY:function cHY(d){this.a=d},
a2s:function a2s(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
byU:function byU(){this.d=$
this.c=this.a=null},
fnJ:function fnJ(d,e){this.a=d
this.b=e},
fnK:function fnK(d){this.a=d},
fnL:function fnL(d,e){this.a=d
this.b=e},
acN:function acN(d,e){this.a=d
this.b=e},
Gn:function Gn(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
byS:function byS(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
fnH:function fnH(d,e){this.a=d
this.b=e},
azk:function azk(d,e){this.c=d
this.a=e},
byT:function byT(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
fnI:function fnI(d){this.a=d},
byR:function byR(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aPO:function aPO(){},
aPP:function aPP(){},
bGr(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.j.bg(u),s=B.o.D(B.j.V((u-t)*100),0,99),r=d<0?"-":"",q=A.ou(B.o.v(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fXv(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cS(v,v,v,v,v,v,v,v,v,A.m(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.m(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.m(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b0(B.o.v(s),2,"0")
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.m(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Ze(A.cS(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aSk(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aSk=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.i0().la(85,1280,B.eQ),$async$aSk)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fq(),$async$aSk)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.htB()
w=9
return A.b(C.cpp(q,r),$async$aSk)
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
return A.i($async$aSk,v)},
aSG(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aSG=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a_(g,"ngmy:ws-thumb:")
if(i){u=C.cpm(g)
w=1
break}if(!B.a.a_(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gal(g.split(",")):g
p=B.cK.aN(q)
o=960
case 7:if(!(o>=96)){w=8
break}w=9
return A.b(A.Hj(p,!0,null,o).dg(0,B.hb),$async$aSG)
case 9:n=a1
w=10
return A.b(n.le(),$async$aSG)
case 10:m=a1
w=11
return A.b(m.b.hj(B.hf),$async$aSG)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eQ(B.dI.gaT(l))
k="data:image/png;base64,"+B.cV.gcu().aN(i)
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
j=A.ac(f)
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
return A.i($async$aSG,v)},
fXv:function fXv(){},
uk:function uk(d){this.a=d},
aur:function aur(d,e,f){this.c=d
this.d=e
this.a=f},
aH6:function aH6(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eWp:function eWp(d,e){this.a=d
this.b=e},
eWg:function eWg(d){this.a=d},
eWh:function eWh(d){this.a=d},
eWn:function eWn(d,e){this.a=d
this.b=e},
eWm:function eWm(d,e){this.a=d
this.b=e},
eWj:function eWj(d,e){this.a=d
this.b=e},
eWi:function eWi(d,e){this.a=d
this.b=e},
eWk:function eWk(d){this.a=d},
eWl:function eWl(d,e){this.a=d
this.b=e},
eWo:function eWo(d,e){this.a=d
this.b=e},
eWb:function eWb(d,e){this.a=d
this.b=e},
eWf:function eWf(d){this.a=d},
eWe:function eWe(d,e){this.a=d
this.b=e},
eWd:function eWd(d){this.a=d},
eWq:function eWq(d,e){this.a=d
this.b=e},
eWr:function eWr(d,e){this.a=d
this.b=e},
eWc:function eWc(d,e){this.a=d
this.b=e},
hH0(d,e,f){var w="thumbnailPath",v=e.aj()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.J(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
fXw(d,e,f){var w=0,v=A.j(x.N),u
var $async$fXw=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.W.av(C.hH0(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fXw,v)},
bGt(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bGt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fXw(!0,d,e),$async$bGt)
case 4:w=3
return A.b(r.aup(g,d,e.a),$async$bGt)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dU.aN(B.W.av(C.hH0(d,e,null),null))
u="NGMY_WS:"+B.kL.gcu().aN(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGt,v)},
hyb(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hj8(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d5(s,"NGMYWSSYNC2|"))return!0
if(J.d5(s,"NGMY_WS:"))return!0
if(J.eK(s,t))return!0
if(J.d5(s,"{"))try{w=B.W.aP(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
irG(d){var w,v,u,t=C.hyb(d)
if(t==null)return null
if(C.hj8(t))return t
w=B.a.cn(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b4(t,w))
if(C.hj8(v))return v}u=B.a.cn(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b4(t,u))
if(C.hj8(v))return v}return null},
hj7(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d5(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d5(q,"NGMY_WS:")){v=B.ca.cC(0,B.cK.aN(J.ns(q,8)))
w=t.a(B.W.aP(0,v,r))}else w=t.a(B.W.aP(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.hda(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bGs(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bGs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a_(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.auo(t[1]),$async$bGs)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hj7(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hj7(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGs,v)},
hj6(d){var w=B.o.v(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lG(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bFX(){var w=0,v=A.j(x.o),u,t
var $async$bFX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Hv(),$async$bFX)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hj7(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFX,v)},
hIc(d,e,f,g){return A.bT(B.L,null,new C.h5N(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
h5N:function h5N(d,e,f){this.a=d
this.b=e
this.c=f},
aeS:function aeS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eWt:function eWt(d,e){this.a=d
this.b=e},
eWu:function eWu(d,e){this.a=d
this.b=e},
eWv:function eWv(d,e){this.a=d
this.b=e},
eWw:function eWw(d,e){this.a=d
this.b=e},
eWs:function eWs(d){this.a=d},
aul:function aul(d,e,f){this.c=d
this.d=e
this.a=f},
bnP:function bnP(){var _=this
_.c=_.a=_.e=_.d=null},
eW6:function eW6(d,e){this.a=d
this.b=e},
eW7:function eW7(d){this.a=d},
eW8:function eW8(d){this.a=d},
auq:function auq(d){this.a=d},
aH5:function aH5(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eWa:function eWa(d){this.a=d},
eW9:function eW9(d){this.a=d},
i00(d,e,f,g,h){return new C.P6(h,g,d,e,f,null)},
aM0:function aM0(d,e){this.a=d
this.b=e},
P6:function P6(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aH7:function aH7(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eWT:function eWT(){},
eWP:function eWP(d,e){this.a=d
this.b=e},
eWQ:function eWQ(d){this.a=d},
eWA:function eWA(d){this.a=d},
eWy:function eWy(d){this.a=d},
eWz:function eWz(d){this.a=d},
eWJ:function eWJ(d,e){this.a=d
this.b=e},
eWG:function eWG(d,e){this.a=d
this.b=e},
eWH:function eWH(d,e){this.a=d
this.b=e},
eWI:function eWI(d,e,f){this.a=d
this.b=e
this.c=f},
eWE:function eWE(d,e,f){this.a=d
this.b=e
this.c=f},
eWC:function eWC(d){this.a=d},
eWD:function eWD(d){this.a=d},
eWF:function eWF(d){this.a=d},
eWW:function eWW(d){this.a=d},
eWV:function eWV(d){this.a=d},
eWX:function eWX(d){this.a=d},
eWU:function eWU(d){this.a=d},
eWx:function eWx(d){this.a=d},
eWB:function eWB(d,e){this.a=d
this.b=e},
eWS:function eWS(d,e){this.a=d
this.b=e},
eWR:function eWR(d,e){this.a=d
this.b=e},
eWM:function eWM(d){this.a=d},
eWN:function eWN(d){this.a=d},
eWO:function eWO(d,e){this.a=d
this.b=e},
eWL:function eWL(d,e){this.a=d
this.b=e},
eWK:function eWK(d,e,f){this.a=d
this.b=e
this.c=f},
bAF:function bAF(){},
B8(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ahp(d,e,f){return C.ig1(d,e,f)},
ig1(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ahp=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aC("String",e,f),$async$ahp)
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
return A.i($async$ahp,v)},
aho(d,e){return C.ig0(d,e)},
ig0(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aho=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$aho)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.ac(q)
$.am.$1("[worksheets] remove failed for "+e+": "+A.w(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$aho,v)},
ieR(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.TI(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bDp(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bDp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=B.a.i(d)
if(q.length===0){u=null
w=1
break}t=B.a.a_(q,"ngmy:thumb:")
if(!t)t=B.a.a_(q,"ngmy:ws-thumb:")
else t=!0
if(t){u=q
w=1
break}w=B.a.a_(q,"data:image")?3:4
break
case 3:w=5
return A.b(C.b4Y(q),$async$bDp)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aSG(q,!1),$async$bDp)
case 6:r=f
if(r!=null&&B.a.a_(r,"data:image")&&r.length<=12e4){u=r
w=1
break}u=null
w=1
break
case 4:u=q
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDp,v)},
hOp(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.rt(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rt(p,J.k(u==null?"":u),1,o,q)},
hda(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.de(s,x.f)
w=A.cF(w,new C.cH3(),w.$ti.k("M.E"),x.Q)
v=A.a3(w).k("Y<M.E>")
r=A.C(new A.Y(w,new C.cH4(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bj(J.k(t==null?"":t))
return new C.lG(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
ijY(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.wJ
case"female":case"f":return D.oB
default:return D.z9}},
hDm(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hny(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.ijY(v==null?j:J.k(v))
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
return new C.i_(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
ik_(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.P1
case"viewer":return D.kY
default:return D.uO}},
ik0(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Hk(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aRr(d,e){return B.a.i(e.toLowerCase())===C.Hk(d,e)&&d.y!==D.kY},
uz(d,e){var w,v=d.y
if(v===D.kY)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Hk(d,e))return!0
if(v===D.P1)return!0
v=d.e
return new A.N(v,A.hje(),A.U(v).k("N<1,n>")).q(0,w)},
ijk(d){return J.dI(d,new C.fHG()).gJ(0)},
h6x(d){var w=0,v=A.j(x.y),u,t
var $async$h6x=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Bj(d),$async$h6x)
case 3:u=t.ro(f,new C.h6y(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h6x,v)},
bEr(d,e){var w=0,v=A.j(x.H),u,t
var $async$bEr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Bj(d),$async$bEr)
case 3:t=g
if(J.ro(t,new C.fFa(e))){w=1
break}if(C.ijk(t)>=2)throw A.X(A.bc("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bEr,v)},
ams(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.de(h,x.f)
w=A.cF(w,new C.bTj(),w.$ti.k("M.E"),x.P)
v=A.a3(w).k("Y<M.E>")
g=A.C(new A.Y(w,new C.bTk(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b8(u,new C.bTl(),x.N)
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
n=C.ik_(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aT(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.ct)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gP(f)
if(l.b(i))m.push(A.a1(i,k,j))}return new C.kZ(w,v,s,!r,t,g,q,p,o,n,m)},
hDB(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.aA(v,0,8)},
DB(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$DB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SI(d),$async$DB)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aA(),$async$DB)
case 4:t=f
w=5
return A.b(t.a7u(0),$async$DB)
case 5:w=6
return A.b(C.fvv(t,l),$async$DB)
case 6:s=f
if(J.cJ(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a8(q)
o=A.aV(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hyN(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.p9(l,n),$async$DB)
case 11:u=n
w=1
break
case 10:case 8:m=A.aV(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hyN(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.p9(l,n),$async$DB)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$DB,v)},
fvv(d,e){return C.icc(d,e)},
icc(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fvv=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a8(a3)
a5=A.aV(a4.h(a3,"ngmy_worksheets_index_v3_"+C.B8(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.W.aP(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aT(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gP(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aV(a4.h(a3,"ngmy_worksheet_item_v3_"+C.B8(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.W.aP(0,m,null)
if(!a0.b(l)){w=7
break}k=C.hda(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aV(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.B8(a9)+"_"+n))
i=C.ieR(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a_(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b4Y(h),$async$fvv)
case 17:g=b1
if(g!=null){i=i.TI(g)
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
case 8:J.SR(q,new C.fvw())
if(p&&J.ad(q)!==0)C.p9(a9,q)
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
return A.i($async$fvv,v)},
bES(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bES=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SI(d),$async$bES)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.DB(r),$async$bES)
case 4:t=p.aT(g)
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
return A.i($async$bES,v)},
hyN(d){var w,v,u,t
try{w=B.W.aP(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.de(w,x.f)
v=A.cF(v,new C.frb(),v.$ti.k("M.E"),x.fA)
u=A.a3(v).k("Y<M.E>")
v=A.C(new A.Y(v,new C.frc(),u),u.k("M.E"))
B.d.b_(v,new C.frd())
return v}catch(t){v=A.a([],x.D)
return v}},
p9(d,e){return C.its(d,e)},
its(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$p9=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.SI(b2),$async$p9)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aA(),$async$p9)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.B8(a8)
p=A.aV(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b8(x.j.a(B.W.aP(0,p,null)),new C.fZ2(),a2).fL(0)
a2=J.b8(b3,new C.fZ3(),a2).c_(0,new C.fZ4())
n=A.d0(a2,a2.$ti.k("M.E"))
a2=o,a2=A.dZ(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eK(n,m)?17:18
break
case 17:a5=C.B8(a8)
l=A.aV(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a9M(l),$async$p9)
case 19:t=21
a5=C.B8(a8)
k=A.aV(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.W.aP(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.a9M(a5==null?null:J.k(a5)),$async$p9)
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
return A.b(C.aho(r,"ngmy_worksheet_item_v3_"+C.B8(a8)+"_"+m),$async$p9)
case 29:w=30
return A.b(C.aho(r,"ngmy_worksheet_thumb_v3_"+C.B8(a8)+"_"+m),$async$p9)
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
case 14:case 10:a2=J.cD(b3),a3=a2.gae(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gP(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bDp(h),$async$p9)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ahp(r,"ngmy_worksheet_thumb_v3_"+C.B8(a8)+"_"+a4,f),$async$p9)
case 40:g=i.TI(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.aho(r,"ngmy_worksheet_thumb_v3_"+C.B8(a8)+"_"+a4),$async$p9)
case 41:g=i.TI(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.aho(r,"ngmy_worksheet_thumb_v3_"+C.B8(a8)+"_"+a4),$async$p9)
case 42:case 34:a4=i.a
w=43
return A.b(C.ahp(r,"ngmy_worksheet_item_v3_"+C.B8(a8)+"_"+a4,B.W.av(g.aj(),null)),$async$p9)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.c5(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ahp(r,"ngmy_worksheets_index_v3_"+C.B8(a8),B.W.av(q,null)),$async$p9)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eO(b3,new C.fZ5(q))
a4=a3.$ti.k("cM<1,a9<n,@>>")
a7=A.C(new A.cM(a3,new C.fZ6(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ahp(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.W.av(a0,null)),$async$p9)
case 45:w=46
return A.b(J.hNu(r),$async$p9)
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
a1=A.ac(b1)
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
return A.i($async$p9,v)},
Mf(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Mf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.DB(d),$async$Mf)
case 3:t=g
s=J.cD(t)
r=s.bk(t,new C.h6w(e))
if(r===-1)s.c9(t,0,e)
else s.n(t,r,e)
u=C.p9(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Mf,v)},
bEE(d,e){var w=0,v=A.j(x.H),u
var $async$bEE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.DB(d),$async$bEE)
case 2:u=g
J.nV(u,new C.fI9(e))
w=3
return A.b(C.p9(d,u),$async$bEE)
case 3:return A.h(null,v)}})
return A.i($async$bEE,v)},
Hm(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Hm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$Hm)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aV(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.W.aP(0,i,null)
if(x.j.b(t)){j=J.de(t,x.f)
j=A.cF(j,new C.fLl(),j.$ti.k("M.E"),x.k)
s=A.a3(j).k("Y<M.E>")
r=A.C(new A.Y(j,new C.fLm(),s),s.k("M.E"))
B.d.b_(r,new C.fLn())
k=r}}catch(h){}w=4
return A.b(C.frW(d),$async$Hm)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.icA(k,p,d)
j=A.U(o)
s=j.k("N<1,a9<n,@>>")
s=A.C(new A.N(o,new C.fLo(),s),s.k("ak.E"))
n=B.W.av(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.RQ(d,o),$async$Hm)
case 7:case 6:j=j.k("Y<1>")
m=A.C(new A.Y(o,new C.fLp(d),j),j.k("M.E"))
if(m.length!==0)C.aRb(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Hm,v)},
fYP(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fYP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.RQ(d,e),$async$fYP)
case 3:t=J.dI(e,new C.fYQ(d))
s=A.C(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aRb(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fYP,v)},
a46(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a46=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aA(),$async$a46)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aV(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.W.aP(0,l,null)
if(x.j.b(u)){m=J.de(u,x.f)
m=A.cF(m,new C.h6r(),m.$ti.k("M.E"),x.k)
t=A.a3(m).k("Y<M.E>")
s=A.C(new A.Y(m,new C.h6s(),t),t.k("M.E"))
o=s}}catch(k){}q=J.oA(o,new C.h6t(e))
if(B.a.i(e.x).length===0&&C.uz(e,d)){m=B.a.i(d.toLowerCase())
p=e.aGv(e.y===D.kY?D.kY:D.uO,m)}else p=e
if(q===-1)J.n4(o,0,p)
else J.aK(o,q,p)
w=3
return A.b(C.RQ(d,o),$async$a46)
case 3:w=C.uz(p,d)?4:5
break
case 4:w=6
return A.b(C.aRa(C.Hk(p,d),p),$async$a46)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a46,v)},
aRn(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aRn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Hm(d),$async$aRn)
case 2:u=g
t=J.cD(u)
s=A.nC(t.eO(u,new C.fHR(e)))
t.bq(u,new C.fHS(e))
w=3
return A.b(C.RQ(d,u),$async$aRn)
case 3:w=s!=null&&C.aRr(s,d)?4:5
break
case 4:w=6
return A.b(C.frf(e),$async$aRn)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aRn,v)},
ajc(d){var w=d.f,v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.h6C(),v),v.k("M.E"))
return w},
hgC(d,e){var w,v=d.f,u=A.nC(new A.Y(v,new C.fHl(e),A.U(v).k("Y<1>")))
v=C.ajc(d)
w=A.U(v).k("Y<1>")
v=A.C(new A.Y(v,new C.fHm(e,u),w),w.k("M.E"))
B.d.b_(v,new C.fHn())
return v},
ik3(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hIg(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bk(C.hgC(d,u),new C.h60(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
ilx(d,e){var w
if(e==null||e.length===0)return 1
w=C.hgC(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fMc(),A.U(w).k("N<1,F>")).f0(0,B.y6)+1},
itl(d){var w,v=C.ajc(d)
if(v.length===0)return null
w=new A.Y(v,new C.fYJ(),A.U(v).k("Y<1>"))
if(!w.gau(0))return w.gH(0)
return B.d.gH(v)},
ijZ(d){return A.J(["id",d.a,"name",d.b,"gender",C.hDm(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
ils(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
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
n=n!==D.z9?n:q.c
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
d=q.aGq(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.I)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cQF(a1,w,a3.d,a2.y,s,a0,v)},
Bj(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$Bj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$Bj)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aV(J.t(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.W.aP(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.de(t,x.f)
p=A.cF(p,new C.fLi(),p.$ti.k("M.E"),x.k)
s=A.a3(p).k("Y<M.E>")
p=A.C(new A.Y(p,new C.fLj(),s),s.k("M.E"))
B.d.b_(p,new C.fLk())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Bj,v)},
aiW(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aiW=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.uO:D.kY
a7=C.Hk(b2,b3)
w=2
return A.b(C.Bj(b1),$async$aiW)
case 2:a8=b5
a9=J.cD(a8)
b0=a9.bk(a8,new C.fYE(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bEr(b1,b2),$async$aiW)
case 5:case 4:if(b0===-1){u=b2.aGv(a6,a7)
a9.c9(a8,0,u)}else{t=a9.h(a8,b0)
s=A.T(x.N,x.P)
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
i=i!==D.z9?i:l.c
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
s.n(0,m,l.aGq(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("b7<2>")
s=A.C(new A.b7(s,k),k.k("M.E"))
k=a5?D.uO:D.kY
u=t.cQH(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.RQ(b1,a8),$async$aiW)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aRa(B.a.i(b3.toLowerCase()),u),$async$aiW)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aiW,v)},
hzb(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("N<1,a9<n,@>>"),k=A.C(new A.N(m,C.hHl(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.J(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.J(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hzc(d,e){var w=new A.V(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("N<1,a9<n,@>>")
u=A.C(new A.N(u,C.hHl(),t),t.k("ak.E"))
return A.J(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
ia8(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a8(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ams(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hje(),A.U(j).k("N<1,n>")).c_(0,new C.frJ())
t=A.C(j,j.$ti.k("M.E"))
if(u===v)s=D.uO
else s=B.d.q(t,u)?D.P1:D.kY
return w.aGv(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ams(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.de(q,h)
h=A.cF(h,new C.frK(),h.$ti.k("M.E"),x.P)
p=A.a3(h).k("Y<M.E>")
o=A.C(new A.Y(h,new C.frL(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b8(n,new C.frM(),x.N).c_(0,new C.frN())
t=A.C(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.uO
else s=B.d.q(t,u)?D.P1:D.kY
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
return new C.kZ(h,r,p,!m,t,o,l,j,v,s,B.ce)},
frW(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$frW=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fs_()
h=x.N
g=x.z
w=7
return A.b(A.iH(A.a([A.lJ("family_trees","*",null,A.J(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bN),r.$2(A.lJ("family_trees","*",A.J(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bN),"collaborator"),r.$2(A.lJ("family_trees","*",null,A.J(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bN),"public")],x.cl),x.fO),$async$frW)
case 7:q=a4
p=J.t(q,0)
o=J.t(q,1)
n=J.t(q,2)
g=x.a
m=A.T(h,g)
h=A.C(p,g)
l=h
J.h_(l,o)
J.h_(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.I)(l),++f){k=l[f]
g=J.t(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aK(m,j,k)}l=m
h=A.a3(l).k("b7<2>")
h=A.cF(new A.b7(l,h),new C.frX(a0),h.k("M.E"),x.k)
l=A.a3(h).k("Y<M.E>")
l=A.C(new A.Y(h,new C.frY(),l),l.k("M.E"))
B.d.b_(l,new C.frZ())
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
return A.i($async$frW,v)},
icA(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a8(e)
if(j.gau(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dN(e,new C.fwd(),v).c_(0,new C.fwe())
t=A.d0(u,u.$ti.k("M.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.I)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Hk(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kY){m=q.e
m=!new A.N(m,A.hje(),A.U(m).k("N<1,n>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gP(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.ils(l,v)
o=C.Hk(k,w)
p=v.d
s.n(0,u,o===w?k.bfQ(p,D.uO):k.bfQ(p,v.y))}j=s.$ti.k("b7<2>")
j=A.C(new A.b7(s,j),j.k("M.E"))
B.d.b_(j,new C.fwf())
return j},
RQ(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$RQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aA(),$async$RQ)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b8(e,new C.fzb(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aC("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.W.av(s,null)),$async$RQ)
case 3:return A.h(null,v)}})
return A.i($async$RQ,v)},
aRa(d,e){return C.ihO(d,e)},
ihO(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aRa=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.mh("family_trees",A.a([C.hzb(e,d)],p),null,B.cO),$async$aRa)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.mh("family_trees",A.a([C.hzc(e,d)],p),null,B.cO),$async$aRa)
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
return A.i($async$aRa,v)},
aRb(d,e){return C.ihP(d,e)},
ihP(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aRb=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("N<1,a9<n,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fEq(d),n),m)
r=l
w=7
return A.b(A.mh("family_trees",r,null,B.cO),$async$aRb)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fEr(d),n),m)
p=k
w=8
return A.b(A.mh("family_trees",p,null,B.cO),$async$aRb)
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
return A.i($async$aRb,v)},
frf(d){return C.i9o(d)},
i9o(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$frf=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Sh("family_trees",A.J(["id",d],x.N,x.z),null,B.cO),$async$frf)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.ac(p)
$.am.$1("[family_trees] delete error: "+A.w(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$frf,v)},
rt:function rt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lG:function lG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cH6:function cH6(){},
cH5:function cH5(){},
cH3:function cH3(){},
cH4:function cH4(){},
Iv:function Iv(d,e){this.a=d
this.b=e},
i_:function i_(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
amr:function amr(d,e){this.a=d
this.b=e},
fHG:function fHG(){},
h6y:function h6y(d){this.a=d},
fFa:function fFa(d){this.a=d},
kZ:function kZ(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bTn:function bTn(){},
bTm:function bTm(){},
bTj:function bTj(){},
bTk:function bTk(){},
bTl:function bTl(){},
fvw:function fvw(){},
frb:function frb(){},
frc:function frc(){},
frd:function frd(){},
fZ2:function fZ2(){},
fZ3:function fZ3(){},
fZ4:function fZ4(){},
fZ5:function fZ5(d){this.a=d},
fZ6:function fZ6(){},
h6w:function h6w(d){this.a=d},
fI9:function fI9(d){this.a=d},
fLl:function fLl(){},
fLm:function fLm(){},
fLn:function fLn(){},
fLo:function fLo(){},
fLp:function fLp(d){this.a=d},
fYQ:function fYQ(d){this.a=d},
h6r:function h6r(){},
h6s:function h6s(){},
h6t:function h6t(d){this.a=d},
fHR:function fHR(d){this.a=d},
fHS:function fHS(d){this.a=d},
h6C:function h6C(){},
fHl:function fHl(d){this.a=d},
fHm:function fHm(d,e){this.a=d
this.b=e},
fHn:function fHn(){},
h60:function h60(d){this.a=d},
fMc:function fMc(){},
fYJ:function fYJ(){},
fLi:function fLi(){},
fLj:function fLj(){},
fLk:function fLk(){},
fYE:function fYE(d){this.a=d},
frJ:function frJ(){},
frK:function frK(){},
frL:function frL(){},
frM:function frM(){},
frN:function frN(){},
fs_:function fs_(){},
fs0:function fs0(d){this.a=d},
frX:function frX(d){this.a=d},
frY:function frY(){},
frZ:function frZ(){},
fwd:function fwd(){},
fwe:function fwe(){},
fwf:function fwf(){},
fzb:function fzb(){},
fEq:function fEq(d){this.a=d},
fEr:function fEr(d){this.a=d},
cH7:function cH7(d,e){this.a=d
this.b=e},
cH8:function cH8(d,e){this.a=d
this.b=e},
aJc:function aJc(d,e,f){this.a=d
this.b=e
this.c=f},
bbe:function bbe(){this.b=this.a=0},
bbd:function bbd(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
byV:function byV(){},
xk(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gci()+"/"+w.gcz()+"/"+w.gcl()
if(!e)return v
return v+" "+B.a.b0(B.o.v(w.gnz()),2,"0")+":"+B.a.b0(B.o.v(w.gGS()),2,"0")},
iiR(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a5.c
J.br(a4.save())
a4.translate(a6.a,a6.b-b0)
w=A.bW(new A.r(0,b0+a7*0.005),a7*0.06,a7*0.45)
v=B.w.j(0.22)
$.S()
u=A.L()
u.r=v.gp(0)
a5.c0(w,u)
for(w=a7*0.05,v=-a7,u=v*0.24,t=a7*0.1,s=u+a7*0.2,r=a7*0.04,q=a7*0.065,p=v*0.05,o=a7*0.14,n=p+w,m=a7*0.025,l=0;l<2;++l){k=F.fO[l]*a7*0.075
j=k-w
j=A.bx(new A.a4(j,u,j+t,s),new A.aP(r,r))
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.r=B.dg.gp(0)
a5.aq(j,i)
k-=q
k=A.bx(new A.a4(k,p,k+o,n),new A.aP(m,m))
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.r=B.c.gp(0)
a5.aq(k,i)}w=v*0.16
u=v*0.52
t=a7*0.32
s=w+t
q=a7*0.09
h=A.bx(new A.a4(w,u,s,u+t),new A.aP(q,q))
q=A.L()
q.r=b2.gp(0)
a5.aq(h,q)
q=v*0.27
t=a7*0.02
t=A.bx(new A.a4(w,q,s,q+a7*0.045),new A.aP(t,t))
q=B.c.j(0.35)
s=A.L()
s.r=q.gp(0)
a5.aq(t,s)
s=v*0.47
g=new A.r(v*0.15,s)
f=new A.r(a7*0.15,s)
s=v*0.06
t=a7*0.07
a5.ah(g,g.a5(0,new A.r(s,a7*0.17)),P.ahn(F.rV,t))
s=g.a5(0,new A.r(s,a7*0.18))
q=A.L()
q.r=F.rV.gp(0)
a5.O(s,r,q)
e=-2.5+b3*0.5
d=f.a5(0,new A.r(Math.sin(e)*a7*0.2,Math.cos(e)*a7*0.2))
a5.ah(f,d,P.ahn(F.rV,t))
w=A.L()
w.r=F.rV.gp(0)
a5.O(d,r,w)
v*=0.7
a0=new A.r(0,v)
a1=a7*0.22
if(b1===1){w=a0.a5(0,new A.r(0,-a1*0.12))
u=A.L()
u.r=F.m7.gp(0)
a5.O(w,a1*1.18,u)}w=A.L()
w.r=F.rV.gp(0)
a5.O(a0,a1,w)
if(b1===0){w=A.bV(a0,a1)
u=A.L()
u.r=F.m7.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)}else if(b1===2){w=A.bV(a0,a1)
u=A.L()
u.r=F.m7.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)
for(w=v+a1*0.3,u=a1*0.2,l=0;l<2;++l){a2=F.fO[l]
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=F.m7.gp(0)
a5.O(new A.r(0+a2*a1*1.05,w),u,t)}}a3=B.j.F(a8*0.8,3)>2.85
for(w=v+a1*0.42,u=a1*0.12,t=a1*0.25,s=a8*0.7,r=a1*0.13,v+=a1*0.05,q=-a1*0.15,p=v+0,o=a1*0.15,l=0;l<2;++l){n=F.fO[l]*a1
m=0+n*0.4
if(a3){k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.b=B.aa
k.c=1.6
k.r=B.bp.gp(0)
k.d=B.bG
a5.ah(new A.r(m+q,p),new A.r(m+o,p),k)}else{k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.r=B.c.gp(0)
a5.O(new A.r(m,v),t,k)
k=Math.sin(s)
j=new A.ar(B.S,B.Q,B.V,B.X,B.U)
j.r=B.w.gp(0)
a5.O(new A.r(m+k*a1*0.06,p),r,j)}m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=B.hJ.j(0.5).gp(0)
a5.O(new A.r(0+n*0.62,w),u,m)}a5.cQ(A.bW(a0.a5(0,new A.r(0,a1*0.5)).aJ(0,new A.r(0,a1*0.1)),a1*0.4,a1*0.65),0.2,2.741592653589793,!1,P.ahn(B.bp,1.8))
a4.restore()},
i_Y(){var w,v=$.ow(),u=J.e5(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"WS"+B.d.hg(u)},
aum(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$aum=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$aum)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f5("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bN),$async$aum)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
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
p=A.ac(m)
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
return A.i($async$aum,v)},
aun(d){return C.i_Z(d)},
i_Z(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$aun=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$aun)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hM("ngmy_worksheet_project_qr_stashes_v1",A.J(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cO,null),$async$aun)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ac(p)
$.am.$1("[worksheet qr stash] save: "+A.w(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aun,v)},
aup(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$aup=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$aup)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.i_Y()
w=4
return A.b(C.aum(),$async$aup)
case 4:r=h
q=B.a.i(e)
p=B.dU.aN(t)
J.aK(r,s,A.J(["ownerEmail",q,"projectId",f,"payload",B.cV.gcu().aN(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.aun(r),$async$aup)
case 5:u=new A.a1w("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aup,v)},
auo(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$auo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c8(),$async$auo)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.aum(),$async$auo)
case 4:q=f
p=J.a8(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a8(o)
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
try{s=B.ca.cC(0,B.cK.aN(t))}catch(h){r=A.ac(h)
$.am.$1("[worksheet qr stash] decode: "+A.w(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dL(A.a1(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
p.n(q,i,m)}w=5
return A.b(C.aun(q),$async$auo)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$auo,v)},
htB(){var w=new A.V(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cR.aw(999999)},
i0_(d){var w,v,u,t,s,r,q
try{w=A.ahO(d)
if(w==null)return d
v=w
if(J.Ml(v)>960||J.Mk(v)>960){s=v
r=J.Ml(v)>=J.Mk(v)?960:null
v=A.ahL(s,J.Mk(v)>J.Ml(v)?960:null,B.Qr,r)}s=v
u=A.anP(82).U4(s,B.zR)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cc(u))
return s}catch(q){t=A.ac(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
cpp(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cpp=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.i0_(e)
$.cpl.n(0,s,t)
u=C.bGv(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cpp,v)},
b4Y(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b4Y=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d5(l,"data:image")){u=null
w=1
break}t=4
r=J.eK(l,",")?B.d.gal(J.lN(l,",")):l
q=B.cK.aN(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.htB()
w=7
return A.b(C.cpp(p,q),$async$b4Y)
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
return A.i($async$b4Y,v)},
cpm(d){var w=0,v=A.j(x.T),u,t,s
var $async$cpm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a_(s,"data:image")){u=s
w=1
break}w=3
return A.b(N.cpo(s),$async$cpm)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cV.gcu().aN(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cpm,v)},
a9M(d){var w=0,v=A.j(x.H),u,t
var $async$a9M=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=N.hH1(d)
if(t==null){w=1
break}$.cpl.W(0,t)
w=3
return A.b(C.bGu(t),$async$a9M)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a9M,v)},
bGv(d,e){return C.irJ(d,e)},
irJ(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bGv=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aQ1
w=7
return A.b(n==null?$.aQ1=N.hfu():n,$async$bGv)
case 7:r=g
q=new Uint8Array(A.cc(e))
p=J.mm(r,"thumbs","readwrite")
B.iE.mh(J.ml(p,"thumbs"),q,l)
w=8
return A.b(J.oz(p),$async$bGv)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.ac(k)
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
return A.i($async$bGv,v)},
bGu(d){return C.irH(d)},
irH(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bGu=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aQ1
w=7
return A.b(o==null?$.aQ1=N.hfu():o,$async$bGu)
case 7:r=f
q=J.mm(r,"thumbs","readwrite")
B.iE.Gr(J.ml(q,"thumbs"),m)
w=8
return A.b(J.oz(q),$async$bGu)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.ac(l)
$.am.$1("[worksheet-thumb idb delete] "+A.w(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bGu,v)}},D,Au,Av,Z,Aw
J=c[1]
A=c[0]
B=c[2]
A8=c[64]
N=c[61]
Q=c[263]
A_=c[168]
S=c[60]
A9=c[238]
L=c[217]
H=c[35]
E=c[227]
T=c[124]
Aa=c[241]
U=c[107]
Ab=c[137]
Ac=c[119]
Ad=c[203]
A0=c[121]
Ae=c[237]
Af=c[44]
R=c[236]
A1=c[204]
Ag=c[257]
Ah=c[194]
Ai=c[207]
M=c[92]
A2=c[88]
Aj=c[174]
A3=c[133]
A4=c[177]
A5=c[202]
Ak=c[260]
A6=c[262]
Al=c[80]
G=c[261]
Am=c[136]
An=c[123]
A7=c[221]
Ao=c[265]
Ap=c[34]
V=c[122]
O=c[197]
Aq=c[208]
Ar=c[129]
W=c[264]
As=c[159]
X=c[250]
P=c[43]
F=c[98]
At=c[33]
I=c[106]
K=c[142]
Y=c[78]
C=a.updateHolder(c[7],C)
D=c[256]
Au=c[79]
Av=c[215]
Z=c[259]
Aw=c[258]
C.aq1.prototype={}
C.b0f.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bk9(),f=h.x!=null&&h.zN(i).length===0
if(h.x!=null)w=f?B.b2:B.bD
else w=h.gUL()?B.bD:B.e1
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.l(22)
t=A.K(D.bqv,B.r,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.fef,B.f,i,i,new A.o(B.b2.j(0.12),i,i,A.l(999),i,i,B.n),i,i,i,i,B.hl,i,i,i),B.T,D.fKk,B.ax,A.d(C.xk(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fFX,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,D.b8v,i,i,i,i,B.OA,i,i,i)
q=A.l(16)
p=A.K(B.bl,B.r,1)
o=A.K(B.b2.j(0.28),B.r,1)
n=A.hhK(h.d)
o=A.p(B.z,C.b0e(A.fOx(h.e,n),30),B.f,i,i,new A.o(B.ma,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fAT,B.K,i,i)
m=A.l(14)
l=A.K(B.bl,B.r,1)
q=A.p(i,A.x(A.a([o,B.P,n,B.bF,D.fKD,B.af,A.p(i,A.x(A.a([D.h_R,B.bF,A.d(A.Bl(h.c),i,i,i,i,i,i,D.fvv,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fh,i,i,1/0)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.aS,i,p,q,i,i,B.n),i,i,i,i,O.amK,i,i,i)
p=A.l(16)
m=A.K(B.bl,B.r,1)
l=j.aTD("Original due",C.xk(h.r,!1))
n=j.aTD("Current due",C.xk(h.f,!1))
o=w.j(0.1)
k=A.l(12)
p=A.a([q,B.T,A.p(i,A.x(A.a([l,B.P,n,B.T,A.p(i,A.d(h.gaNC(),i,i,i,i,i,i,A.m(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.Cy,i,i,1/0),B.T,j.cls(),B.P,j.c80(g,f)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bj,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.l(14)
n=A.K(B.bl,B.r,1)
B.d.u(p,A.a([B.T,A.p(i,A.x(A.a([D.fLB,B.ax,A.d(q,i,i,i,i,i,i,D.fA5,i,i,i)],s),B.E,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.aS,i,n,o,i,i,B.n),i,i,i,i,B.bj,i,i,1/0)],s))}if(h.gaIb()){q=A.l(14)
o=A.K(B.cA,B.r,1.6)
B.d.u(p,A.a([B.T,A.p(i,A.x(A.a([D.h19,B.P,A.bu(A.l(12),A.ea(new A.a5(1/0,88,A.b4(i,i,i,new A.Xh(h.ax,B.a_,D.fj1,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.E,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.CA,i,i,i)],s))}p.push(B.aB)
p.push(D.fU0)
return A.p(i,A.x(A.a([r,new A.D(B.a14,A.x(p,B.al,i,B.e,B.h,0,B.p),i)],s),B.al,i,B.e,B.N,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aTD(d,e){var w=null
return A.A(A.a([A.E(A.d(d,w,w,w,w,w,w,D.acb,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fwy,w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
cls(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.aaK(B.e1,u,"Not paid yet")
w=t.zN(null).length
v=w===0?B.b2:B.bD
return this.aaK(v,u,C.xk(t.x,!0))},
c80(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.aaK(B.b2,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.aaK(B.b2,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.acb,u,u,u)
v=A.U(d).k("N<1,h6>")
v=A.C(new A.N(d,new C.c8K(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bZ(B.bI,v,B.br,u,6,6)],x.p),B.E,u,B.e,B.h,0,B.p)},
aaK(d,e,f){var w=null
return A.A(A.a([A.E(A.d(e,w,w,w,w,w,w,D.acb,w,w,w),1),new A.di(1,B.cm,A.d(f,w,w,w,w,w,w,A.m(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.e3,w,w),w)],x.p),B.E,w,B.e,B.h,0,w,w)}}
C.bds.prototype={
a4(d,e){new A.Xh(this.b,B.a_,e,!0,3.5,null).a4(d,e)},
aE(d){return d.b!==this.b}}
C.aqe.prototype={
S(){return new C.aF2(A.a([],x.bp))},
ge3(){return this.c}}
C.aF2.prototype={
Y(){this.a3()
this.Jq()},
Jq(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Jq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3l(t.a.c),$async$Jq)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dRa(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Jq,v)},
aVB(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aS,s=A.m(v,v,u?B.bu:B.bh,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.l(10)
u=(this.a.d.a?B.bu:B.bh).j(0.22)
w=A.l(10)
return A.bz(v,new A.b6(4,r,new A.ay(u,1,B.r,-1)),v,B.bj,v,v,v,v,!0,new A.b6(4,w,new A.ay((this.a.d.a?B.bu:B.bh).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.l(10),D.b69),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aVA(d){return this.aVB(d,null)},
Qf(d){return this.cp6(d)},
cp6(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qf=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.If:B.eQ
w=7
return A.b(new A.i0().CR(72,900,900,n),$async$Qf)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fq(),$async$Qf)
case 8:p=f
n=B.cV.gcu().aN(p)
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
if(n!=null)n.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d("Could not pick photo: "+A.w(o),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Qf,v)},
b3P(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aS,o=A.l(10),n=A.K((q?B.bu:B.bh).j(0.18),B.r,1)
if(d)q=B.cU
else q=s.a.d.a?B.bu:B.bh
q=A.W(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.m(r,r,s.a.d.a?B.aS:B.av,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cU
else u=s.a.d.a?B.bu:B.bh
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.m(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a9,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.h,0,B.p),1)
v=A.fs(r,r,r,r,r,r,r,r,r,r,r,B.cU,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cg)
q=A.a([q,B.ae,u,A.bO(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aI(r,r,r,r,A.W(B.cB,s.a.d.a?B.bu:B.bh,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cg))
return A.p(r,A.A(q,B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jK,D.bDA,r,r,r)},
DL(d){return this.bEm(d)},
bEl(){return this.DL(null)},
bEm(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DL=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.ax()
r=new A.au(new A.ba(a4,B.b6,B.aP),s)
if(a3)a4=""
else{a4=a5.c
q=B.j.fK(a4)
p=a5.c
a4=a4===q?B.o.v(B.j.M(p)):B.j.ad(p,2)}o=new A.au(new A.ba(a4,B.b6,B.aP),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.ba(a4,B.b6,B.aP),s)
if(a3){a4=new A.V(Date.now(),0,!1).bS(6048e8)
m=A.c_(a4.gcl(),a4.gci(),a4.gcz(),0,0,0,0,0)}else{a4=a5.f
m=A.c_(a4.gcl(),a4.gci(),a4.gcz(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bp(a4,!0,x.cT)
i=a3?null:A.hhK(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.xh?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hN(B.w.j(0.55),!0,"Dismiss",a4,new C.dQU(),new C.dQV(a2,t,a5,r,new C.dQW(a2,t),o,n,j),B.eH,!0,x.y),$async$DL)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.cW(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.U$=s
r.R$=0
o.U$=s
o.R$=0
n.U$=s
n.R$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.L(x.q).f.T(D.fpC)
w=1
break}a0=a2.d
if(a0==null){t.c.L(x.q).f.T(D.fof)
w=1
break}a1=A.fOx(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.xh?"male":"female"
w=7
return A.b(A.ajb(a3,A.hqe(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$DL)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.xh?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.u(a3,j)
a3=a2.a
a3=A.c_(a3.gcl(),a3.gci(),a3.gcz(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c_(a4.gcl(),a4.gci(),a4.gcz(),0,0,0,0,0)))a5.cT1(a2.a)
w=8
return A.b(A.ajb(t.a.c,a5),$async$DL)
case 8:case 5:w=9
return A.b(t.Jq(),$async$DL)
case 9:case 1:return A.h(u,v)}})
return A.i($async$DL,v)},
aWg(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cU.j(0.14)
else w=this.a.d.a?B.a_:B.aS
v=A.l(12)
u=A.l(12)
t=A.l(12)
if(g)s=B.cU
else s=(this.a.d.a?B.bu:B.bh).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.b0e(d,18)
if(g)q=B.cU
else q=this.a.d.a?B.aS:B.av
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,A.p(p,A.A(A.a([r,B.bn,A.d(e,p,p,p,p,p,p,A.m(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.b8,B.h,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bU,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
T1(d){return this.cH0(d)},
cH0(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$T1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hN(B.w.j(0.55),!0,"Dismiss",s,new C.dRd(),new C.dRe(t,d),B.ha,!0,x.y),$async$T1)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.ajb(t.a.c,d),$async$T1)
case 7:w=8
return A.b(t.Jq(),$async$T1)
case 8:case 1:return A.h(u,v)}})
return A.i($async$T1,v)},
Qe(d,e){return this.bPh(0,e)},
bPh(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ls(s,"Cancel","Delete",e.b+" \xb7 "+A.Bl(e.c)+" will be removed from this device.","Delete this debt?"),$async$Qe)
case 3:if(!g){w=1
break}w=4
return A.b(C.fHY(t.a.c,e.a),$async$Qe)
case 4:w=5
return A.b(t.Jq(),$async$Qe)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qe,v)},
agC(d){return this.ciT(d)},
ciT(d){var w=0,v=A.j(x.H),u=this,t
var $async$agC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bT(B.L,null,new C.dR7(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$agC)
case 2:return A.h(null,v)}})
return A.i($async$agC,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.ex7
w=J.dI(m.d,new C.dRf())
v=A.C(w,w.$ti.k("M.E"))
w=J.dI(m.d,new C.dRg())
u=A.C(w,w.$ti.k("M.E"))
t=B.d.cF(v,0,new C.dRh())
w=A.l(18)
s=m.a.d.a
r=s?D.cDQ:D.aDJ
q=A.K(s?B.cU.j(0.35):B.cU.j(0.18),B.r,1)
s=A.p(l,D.c4x,B.f,l,l,new A.o(B.cU.j(m.a.d.a?0.28:0.14),l,l,A.l(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.as,A.E(A.d("Cashier",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.aS:B.av,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aG(!1,B.a3,!0,A.l(12),A.aM(!1,A.l(12),!0,D.ewt,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dRi(m),l,l,l,l,l,l,l),B.f,B.cU,0,l,l,l,l,l,B.ai)],p),B.l,l,B.e,B.h,0,l,l)
o=A.E(m.cD3("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Bl(t)
r=A.a([A.p(l,A.x(A.a([s,B.af,A.A(A.a([o,B.ae,A.E(m.ba_(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.h,0,l,l)],p),B.E,l,B.e,B.h,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a7(B.ay,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.amH,l,l,l),B.aB],p)
if(J.ct(m.d)){w=m.a.d.a
s=w?B.ef:B.c
q=A.l(18)
o=A.K((w?B.bu:B.bh).j(0.12),B.r,1)
n=A.p(l,D.c_7,B.f,l,l,new A.o(B.cU.j(0.12),l,l,A.l(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.aS:B.av,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.p(l,A.x(A.a([n,B.af,w,B.ax,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.bu:B.bh,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.h,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bGf,l,l,1/0))}else{w=m.gcon()
s=A.C(new A.N(v,w,A.U(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bHW,A.d("Paid",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.bu:B.bh,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.u(q,new A.N(u,w,A.U(u).k("N<1,v>")))
B.d.u(s,q)}B.d.u(r,s)}return A.x(r,B.al,l,B.e,B.h,0,B.p)},
ba_(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.l(14),r=A.K((v.a.d.a?B.bu:B.bh).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.m(u,u,v.a.d.a?B.bu:B.bh,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cU
else w=v.a.d.a?B.aS:B.av
return A.p(u,A.x(A.a([q,B.bF,A.d(f,u,1,B.a2,u,u,u,A.m(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.h,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ez,u,u,u)},
cD3(d,e){return this.ba_(!1,d,e)},
coo(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zN(j).length,h=d.bjp()
if(d.x!=null){w=d.zN(j).length
v=w===0?B.cU:B.bD}else if(d.gUL())v=B.bD
else{if(h)w=B.cU
else w=k.a.d.a?B.bu:B.bh
v=w}if(d.x!=null){w=d.zN(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xk(u,!1)}else{u.toString
t="Paid "+C.xk(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xk(w,!1)+" \xb7 "+i+" missed":"Due "+C.xk(w,!1)}w=k.a.d.a?B.ef:B.c
u=A.l(18)
if(d.gUL()&&d.x==null)s=B.bD.j(0.35)
else s=(k.a.d.a?B.bu:B.bh).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ab(0,B.G,B.w.j(0.04),B.cJ,12)],x.V)
q=A.l(18)
p=k.a.d.a?B.bs:B.ma
o=A.K(d.gUL()&&d.x==null?B.bD.j(0.45):B.cU.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hhK(d.d)
o=A.p(B.z,A.d3(C.b0e(A.fOx(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aS:B.av
m=x.p
n=A.a([new A.di(1,B.cm,A.d(p,j,1,B.a2,j,j,j,A.m(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaIb())B.d.u(n,A.a([B.e6,A.W(B.Pt,B.cU.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.l,j,B.e,B.h,0,j,j),B.cQ,A.d(t,j,1,B.a2,j,j,j,A.m(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.h,0,B.p),1)
n=A.Bl(d.c)
l=k.a.d.a?B.aS:B.av
n=A.d(n,j,j,j,j,j,j,A.m(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aG(!1,B.a3,!0,j,A.aM(!1,q,!0,new A.D(Ag.amv,A.A(A.a([o,B.bb,p,B.ae,A.x(A.a([n,B.bF,A.W(B.eI,(k.a.d.a?B.bu:B.bh).j(0.5),j,j,j,18)],m),B.dN,j,B.e,B.h,0,B.p)],m),B.l,j,B.e,B.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dR9(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.ai),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d9,j,j,j,j)}}
C.uS.prototype={}
C.amf.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bk
u=v?B.E:B.l
t=a1.as
s=A.l(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.K(q,B.r,t?1.2:1.6)
p=A.a([new A.ab(0,B.G,B.w.j(0.45),B.cz,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.K(r.j(0.6),B.r,1)
n.push(A.az(a0,A.p(a0,A.W(B.cB,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a5:B.z
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iS,A.d(k,a0,a0,a0,a0,a0,a0,A.m(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.m(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.azT,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.Hg,A.d(k,a0,a0,a0,a0,a0,a0,A.m(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([new A.dy(B.dM,m,B.f,A.A(l,B.l,a0,B.e,B.N,0,a0,a0),a0)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bCM,A.d(v,a0,1,B.a2,a0,a0,a0,A.m(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cI:B.bq,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fv,A.x(a2,u,a0,B.e,B.N,0,B.p),a0),1))
n.push(D.fjQ)
a2=A.a([A.A(n,B.l,a0,B.e,B.h,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.u(a2,A.a([new A.D(B.wz,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a7(B.a5,B.a8,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lQ,A.x(a2,B.l,a0,B.e,B.N,0,B.p),a0)
if(a1.z){a2=A.l(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hy,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a7(B.ay,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bE4,a0,a0,a0,a0)}}
C.aWY.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.m(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bk?B.bk:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a2,q,q,q,A.m(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bq:B.cI,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.m(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.l,q,B.e,B.h,0,q,q),B.cQ,n],m)
if(p.z)o.push(new A.D(B.uF,n,q))
return new A.D(B.d9,A.x(o,B.l,q,B.e,B.N,0,B.p),q)}}
C.U7.prototype={
S(){return new C.bh3()}}
C.bh3.prototype={
gc2N(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aE(d,n,x.w).w,l=x.p,k=A.a([D.ex2,D.ex8],l)
for(w=0;w<8;++w){v=D.a5u[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.I2:B.zB
q=t===s
r=A.W(r,q?B.ey:B.bV,n,n,n,17)
q=q?B.c:B.ab
r=A.a([r,B.bn,A.d(v.b,n,n,n,n,n,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.ae,new A.by(1,B.ba,A.d(v.c,n,1,B.a2,n,n,n,B.B0,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.ay(B.ey,2,B.r,-1)
s=new A.o(n,n,new A.bG(p,p,p,p),new A.be(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.az(n,new A.D(B.eP,A.x(A.a([new A.D(B.n2,new A.c7(B.aM,B.e,B.h,B.l,n,B.p,n,0,r,n),n),A.p(n,new A.dt(!0,new C.amf(v,q.d,q.e,new C.dgP(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.h,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dgQ(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bEr,A.bI(D.h6H,n,new C.dgR(o,d),A.bo(B.b7,n,n,n,n,B.p4,n,n,new A.b9(A.l(16),B.a1),n,n,n)),n))
return A.bm(!0,new A.cN(new A.aY(0,1/0,0,m.a.b*0.9),A.cw(k,n,n,D.bIP,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.ny.prototype={
aj(){var w=this
return A.J(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bg1(d,e,f){return new C.ny(this.a,e,d,f)}}
C.Iu.prototype={
x3(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Iu(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aGj(d){var w=null
return this.x3(w,w,w,w,w,d,w,w,w,w,w,w)},
cOE(d){var w=null
return this.x3(w,w,w,w,d,w,w,w,w,w,w,w)},
bg_(d,e,f){var w=null
return this.x3(d,w,w,w,w,w,w,w,e,w,f,w)},
cPi(d){var w=null
return this.x3(w,w,w,w,w,w,d,w,w,w,w,w)},
cPr(d){var w=null
return this.x3(w,w,w,w,w,w,w,w,w,d,w,w)},
cOC(d){var w=null
return this.x3(w,w,w,d,w,w,w,w,w,w,w,w)},
cPt(d){var w=null
return this.x3(w,w,w,w,w,w,w,w,w,w,w,d)},
cOz(d){var w=null
return this.x3(w,w,d,w,w,w,w,w,w,w,w,w)},
cOu(d){var w=null
return this.x3(w,d,w,w,w,w,w,w,w,w,w,w)},
Gj(d){var w=null
return this.x3(w,w,w,w,w,w,w,d,w,w,w,w)},
cPB(d,e,f,g,h,i,j,k,l,m,n){return this.x3(d,e,f,g,null,h,i,j,k,l,m,n)},
aj(){var w=this
return A.J(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cM8(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bS4(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.j.M(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.E9.gew(D.E9))
s=i==null?o:B.j.D(i,18,36)
r=l.$2("position",D.a7c)
q=l.$2("frame",D.a6w)
l=l.$2("texture",D.a6s)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cPB(p,u,t,q,r,A.rh(d.h(0,"ribbon"))?A.GX(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a_I.prototype={
S(){return new C.aC0(A.a([],x.I),D.P0)},
ge3(){return this.c}}
C.aC0.prototype={
Y(){var w,v=this
v.a3()
v.f=A.Ad(0,1)
w=$.ax()
v.z=new A.au(B.aw,w)
v.Q=new A.au(B.aw,w)
v.lj()
w=v.a
C.bEO(w.c,w.d).bG(new C.dhv(v),x.fL)},
t(){var w,v=this,u=v.f
u===$&&A.c()
u.t()
u=v.z
u===$&&A.c()
w=$.ax()
u.U$=w
u.R$=0
u=v.Q
u===$&&A.c()
u.U$=w
u.R$=0
v.a2()},
lj(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$lj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.LO(s.c,s.d),$async$lj)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dhj(t,r))
t.ay0()
case 1:return A.h(u,v)}})
return A.i($async$lj,v)},
gauz(){var w,v=this
if(!J.ct(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
ay0(){var w,v,u=this.gauz(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.sb3(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.sb3(0,w==null?"":w)},
chh(d){this.m(new C.dhg(this,d))
this.ay0()},
O8(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$O8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.ny(B.o.v(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aT2(r.c,r.d,s),$async$O8)
case 3:w=4
return A.b(t.lj(),$async$O8)
case 4:if(t.c==null||J.ct(t.d)){w=1
break}q=J.oA(t.d,new C.dgS(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.dgT(t,p))
t.ay0()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.BQ(p+1,B.cj,B.kU),$async$O8)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$O8,v)},
Bu(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Bu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gauz()
s=s==null?null:s.a
if(s==null)s=B.o.v(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aT2(o.c,o.d,new C.ny(s,r,q,new A.V(p,0,!1))),$async$Bu)
case 3:w=4
return A.b(t.lj(),$async$Bu)
case 4:if(t.c==null){w=1
break}t.m(new C.dhk(t))
case 1:return A.h(u,v)}})
return A.i($async$Bu,v)},
OQ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gauz()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dh0(r),s,null,!0,!0,x.y),$async$OQ)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bEA(s.c,s.d,r.a),$async$OQ)
case 4:t.m(new C.dh1(t))
w=5
return A.b(t.lj(),$async$OQ)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.UO(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$OQ,v)},
z9(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$z9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bu(),$async$z9)
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
return A.b(C.S8(s,r.r,o,p,q),$async$z9)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hHP(s,r.x,r.r),$async$z9)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.LO(s.c,s.d),$async$z9)
case 10:l=e
for(s=n.d,r=J.cD(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.I(l,new C.ny(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Bu(r.c,r.d,l),$async$z9)
case 11:w=12
return A.b(t.lj(),$async$z9)
case 12:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$z9,v)},
a1M(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1M=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bu(),$async$a1M)
case 5:case 4:if(t.c==null){w=1
break}s=t.gz7(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dL(D.A1,new C.dhh(t),new C.dhi())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.mT("Our Family",o,"",""))
for(o=J.aT(t.d);o.C();){n=o.gP(o)
p.push(new H.mT(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hjv(o,new H.rS(s,r,"",p,new H.v7(q.d,null,null,null,null,"","","")),null),$async$a1M)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a1M,v)},
Oy(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Oy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bu(),$async$Oy)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bT(D.ahr,null,new C.dgX(t),s,!0,!0,!0,I.aal,!1,!1,x.N),$async$Oy)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cOE(r)
t.m(new C.dgY(t,q))
s=t.a
w=7
return A.b(C.SL(s.c,s.d,q),$async$Oy)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Oy,v)},
Y4(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bT(D.ahr,null,new C.dh2(t),r,!0,!0,!0,I.aal,!1,!1,x.e),$async$Y4)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dh3(t,s))
r=t.a
w=4
return A.b(C.SL(r.c,r.d,s),$async$Y4)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.BQ(0,B.e5,B.n0)
case 1:return A.h(u,v)}})
return A.i($async$Y4,v)},
bUY(d){var w=d.bU(),v=B.a.b0(B.o.v(w.gci()),2,"0"),u=B.a.b0(B.o.v(w.gcz()),2,"0")
return""+w.gcl()+"-"+v+"-"+u},
gz7(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c20()
if(r.e)w=D.ag6
else if(J.ct(r.d)){w=r.y
v=r.gz7(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fuR,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.D(X.anO,new C.a__(w,v,0,q),q),q),B.bx,t,B.am,A.d(u,q,q,q,q,q,q,A.m(q,q,D.kP.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.az(q,A.p(q,D.fe1,B.f,q,q,new A.o(q,q,q,A.l(18),A.a([new A.ab(0,B.G,B.dR.j(0.45),B.J,18)],x.V),E.x8,B.n),q,q,q,q,B.OE,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcL9(),q,q,q,q,q,q,!1,B.a4))
w.push(B.T)
w.push(A.ht(D.bWb,D.h69,r.gaPi(),q))
B.d.u(u,w)}w=A.as(A.c9(A.x(u,B.l,q,B.e,B.N,0,B.p),B.t,q,B.y,q,q,B.eA,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.m(q,q,D.kP.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.e_:B.BD
u=A.x(A.a([new A.D(D.bFw,w,q),A.E(A.JT(v,new C.dht(r),J.ad(r.d)+1,q,r.gchg(),u,B.aM),1),r.bHg()],x.p),B.l,q,B.e,B.h,0,B.p)
w=u}v=x.p
return A.c4(q,D.ZP,new A.an(B.a0,q,B.b1,B.t,A.a([D.aRi,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c20(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cJ(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.KS(B.e9,"AI",h.gbF8(),!0))
if(h.a.f)f.push(new C.KS(B.lS,"Cover",h.gbPR(),!1))
if(h.a.f)f.push(new C.KS(B.x0,"Header",h.gbKP(),!1))
if(J.cJ(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.KS(B.v6,"Print",h.gcqq(),!1))
if(h.a.f&&J.cJ(h.d)&&h.r>=0){v=h.w
u=v?B.hd:B.jb
t=v?"Save":"Edit"
f.push(new C.KS(u,t,v?h.gcwJ():new C.dhd(h),!1))}if(h.a.f)f.push(new C.KS(B.i_,"Add page",h.gaPi(),!1))
v=C.hDl(h.y.Q)
u=h.gz7(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.I)(f),++m){l=f[m]
if(l.d)k=D.dLG
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.kv.j(0.5),1,B.r,-1)
j=A.p(g,A.W(l.a,D.kP,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bG(i,i,i,i),new A.be(k,k,k,k),g,new A.a7(B.a5,B.a8,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kP.j(0.85)
p.push(new A.by(1,B.ba,A.az(B.bX,A.x(A.a([k,B.bF,A.d(l.b,g,1,g,g,g,g,new A.G(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.N,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.amf(v,u,t+" \xb7 "+s+" "+r,new C.dhe(h),A.A(p,B.l,g,B.e,B.h,0,g,g),g)},
As(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$As=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bu(),$async$As)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aT(t.d);r.C();){q=r.gP(r)
s.push(q.b+" "+q.c)}p=H.a3B(B.d.aM(s," "))
s=t.c
s.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.dgU(t,p),s,null,!0,!0,x.N),$async$As)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.z9(),$async$As)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.El(),$async$As)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.FX("Swahili (Kiswahili)",!0),$async$As)
case 18:w=16
break
case 17:w=19
return A.b(t.cHD(o==="sw"?"Swahili (Kiswahili)":"English"),$async$As)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$As,v)},
a_3(d,e,f,g,h){var w=null,v=A.l(16),u=B.c.j(0.07),t=A.l(16),s=A.K(E.kv.j(0.3),B.r,1),r=x.p
return new A.D(B.cw,A.aM(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.W(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.x8,B.a6),w,42,w,w,w,w,w,42),B.bb,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A2.L_,w,w,w),A.d(g,w,w,w,w,w,w,B.F3,w,w,w)],r),B.E,w,B.e,B.h,0,B.p),1)],r),B.l,w,B.e,B.h,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bj,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dhf(d,h),w,w,w,w,w,w,w),w)},
El(){return this.bUr()},
bUr(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$El=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dh6(r),a7,null,!0,!0,x.ei),$async$El)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eD("Working on it\u2026",$.ax())
a6.a=!0
a7=r.c
a7.toString
A.cg(null,null,!1,null,new C.dh7(o),a7,null,!0,!0,x.H).fv(new C.dh8(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.I)(d),++a1){k=d[a1]
J.c5(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.aj()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.A1[a1]
J.c5(j,i.a)}w=8
return A.b(C.aij(a0,a7,new C.dh9(o),d,l,e,j),$async$El)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.ac(a8)
n=A.w(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a6(l,!0).eq()
l=o
l.sih($.ax())
J.aTv(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.L(x.q).f
j=n
l.T(A.b2(null,null,null,null,null,B.t,null,A.d(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcm(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.am(0,a4)){j=J.t(p,a4)
a7=m.b.h(0,a4).a
a7=j.bg1(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Bu(j.c,j.d,l),$async$El)
case 11:w=12
return A.b(r.lj(),$async$El)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.A1[a1].a)
a5=l.cM8(j,12,a7)
l=r.a
w=15
return A.b(C.SL(l.c,l.d,a5),$async$El)
case 15:if(r.c!=null)r.m(new C.dha(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.BQ(0,B.e5,B.n0)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.L(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.T(A.b2(a3?A.cAU("Undo",new C.dhb(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.ei,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$El,v)},
FX(d,e){return this.cHE(d,e)},
cHD(d){return this.FX(d,!1)},
cHE(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$FX=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eD("Starting\u2026",$.ax())
f.a=!0
k=r.c
k.toString
A.cg(null,null,!1,null,new C.dhm(a0),k,null,!0,!0,x.H).fv(new C.dhn(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.I)(k),++i){n=k[i]
J.c5(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a3P(m,new C.dho(a0)),$async$FX)
case 10:w=8
break
case 9:w=11
return A.b(C.bGk(new C.dhp(a0),m,a2),$async$FX)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.ac(a1)
q=A.w(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a6(o,!0).eq()
o=a0
o.sih($.ax())
J.aTv(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.L(x.q).f
k=q
o.T(A.b2(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bg1(J.t(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Bu(k.c,k.d,o),$async$FX)
case 12:w=13
return A.b(r.lj(),$async$FX)
case 13:o=r.c
if(o==null){w=1
break}o=o.L(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a_(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(A.cAU("Undo",new C.dhq(r,d),null),null,null,null,null,B.t,null,k,null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$FX,v)},
bHg(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dgV(v):u
r=A.aI(u,u,u,u,A.W(D.bRP,s?D.kP:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cJ(v.d)&&!v.w&&v.r>=0)s=A.ht(A.W(B.wO,B.GG,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.m(u,u,B.GG,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbPr(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.m(u,u,D.kP.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.as(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dgW(v):u
return A.bm(!0,new A.D(D.bFl,A.A(A.a([r,s,A.aI(u,u,u,u,A.W(B.eI,t<J.ad(v.d)?D.kP:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.h,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a_M.prototype={
S(){return new C.bhs(new A.au(B.aw,$.ax()))}}
C.bhs.prototype={
ga2U(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.U$=$.ax()
w.R$=0
this.a2()},
gbT2(){switch(this.ga2U()){case"cover":var w=D.daG
break
case"book":w=D.d5V
break
default:w=D.dCr
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.l(26),n=E.kv.j(0.5),m=x.p,l=A.A(A.a([D.dLH,B.as,D.bL3,A.aI(p,p,p,p,B.lr,p,p,p,new C.djh(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.h,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jz(p,p,p,A.d("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dji(q),q.ga2U()==="page",p,p,p,p))
if(q.a.d)k.push(A.jz(p,p,p,D.h0H,p,new C.djj(q),q.ga2U()==="book",p,p,p,p))
k.push(A.jz(p,p,p,D.fOn,p,new C.djk(q),q.ga2U()==="cover",p,p,p,p))
k=A.bZ(B.bI,k,B.br,p,6,8)
j=B.c.j(0.07)
j=A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bz(p,new A.b6(4,A.l(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kp,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dj,!0,B.a7,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbT2(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.d(s,p,p,p,p,p,p,B.KX,p,p,p)
w.push(A.n5(p,B.c.j(0.08),r,B.hs,new C.djl(q,s),p,p,p,p))}return A.eG(p,E.Cb,A.c9(A.x(A.a([l,B.T,D.h40,B.am,k,B.af,j,B.P,A.bZ(B.bI,w,B.br,p,6,6),B.aB,A.dh(D.bW8,p,D.h4N,new C.djm(q,d),A.bo(B.b7,p,p,p,p,B.p4,p,p,new A.b9(A.l(16),B.a1),p,p,p)),B.ax,D.fZV],m),B.E,p,B.e,B.N,0,B.p),B.t,p,B.y,p,p,B.fu,p,p,B.ah),p,p,p,B.OB,p,B.d6,p,new A.b9(o,new A.ay(n,1.4,B.r,-1)),p)}}
C.a_K.prototype={
S(){return new C.aC3(A.a([],x.gA))},
ge3(){return this.c}}
C.ag3.prototype={}
C.aC3.prototype={
Y(){this.a3()
this.lj()},
lj(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Sd(p.c,p.d),$async$lj)
case 3:o=e
n=A.a([],x.gA)
p=J.aT(o)
case 4:if(!p.C()){w=5
break}s=p.gP(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bEO(r.c,q),$async$lj)
case 6:j=e
i=J
w=7
return A.b(C.LO(t.a.c,q),$async$lj)
case 7:m.push(new l.ag3(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.dhK(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lj,v)},
bbg(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
R1(d,e){return this.ciQ(0,e)},
ciQ(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$R1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).ce(A.ed(new C.dhJ(u,e),!0,null,x.y)),$async$R1)
case 2:t=g
w=3
return A.b(u.lj(),$async$R1)
case 3:if(t===!0&&u.c!=null)u.c.L(x.q).f.T(D.aVe)
return A.h(null,v)}})
return A.i($async$R1,v)},
FZ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$FZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.L(x.q).f.T(D.aV9)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ahC(s.c,s.d),$async$FZ)
case 5:q=e
w=6
return A.b(t.lj(),$async$FZ)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.R1(0,B.d.fb(t.d,new C.dhO(q))),$async$FZ)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.S8(p,s.f,r,n,o),$async$FZ)
case 10:m=e
w=11
return A.b(t.lj(),$async$FZ)
case 11:if(m&&t.c!=null)t.c.L(x.q).f.T(D.aVe)
case 1:return A.h(u,v)}})
return A.i($async$FZ,v)},
Qt(d,e){return this.cus(0,e)},
cus(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dhN(t,e),s,null,!0,!0,x.y),$async$Qt)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a40(s.c,s.d,e.a),$async$Qt)
case 4:w=5
return A.b(t.lj(),$async$Qt)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qt,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)k.push(o.bHj(w[u]))
if(m){t=6-o.d.length
w=A.l(18)
v=B.c.j(0.05)
s=A.K(E.kv.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.az(n,new A.fH(0.7142857142857143,A.p(n,A.x(A.a([D.dLI,B.af,D.ew4,B.ax,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.m(n,n,D.kP.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.b8,B.h,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcL5(),n,n,n,n,n,n,!1,B.a4))}w=A.l(22)
v=A.K(E.kv.j(0.85),B.r,1.6)
s=A.az(n,A.p(n,D.c3g,B.f,n,n,new A.o(B.w.j(0.3),n,A.K(E.kv.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dhP(d),n,n,n,n,n,n,!1,B.a4)
r=A.l(14)
q=B.w.j(0.3)
p=A.K(E.kv.j(0.5),B.r,1)
w=A.p(n,A.A(A.a([s,B.bb,D.bLs,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.ftR,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.hl,n,n,n)],l),B.l,n,B.e,B.h,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.c9i,B.n),n,n,n,Aw.On,D.bDf,n,n,n)
if(o.e)k=D.ag6
else k=k.length===0?D.bdR:A.cm(new C.dhQ(k))
return A.c4(n,D.ZP,new A.an(B.a0,n,B.b1,B.t,A.a([D.aRi,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bHj(d){var w,v,u=this,t=null,s=u.bbg(d),r=d.c,q=x.p,p=A.a([A.bR(0,new A.dy(B.dC,B.z,B.f,new A.a5(300,420,new C.a__(d.b,s,r,t),t),t),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.az(t,A.p(t,D.c2y,B.f,t,t,new A.o(B.w.j(0.55),t,A.K(B.aT,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dhH(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.ftu,t,t,t)
v=r===1?"page":"pages"
return A.az(t,A.x(A.a([new A.fH(0.7142857142857143,new A.an(B.a0,t,B.ad,B.t,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.m(t,t,D.kP.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.h,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dhI(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.KS.prototype={}
C.a__.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dL(D.A1,new C.cQ8(m),new C.cQ9()),j=m.c,i=D.E9.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mt:B.b8
v=new C.cQa(h)
i=A.a([new A.ab(0,B.G,B.w.j(0.6),D.esM,28)],x.V)
u=x.p
t=A.a([A.bR(0,A.b4(l,l,l,new C.beF(j.x,h,l),B.az),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a7(B.a5,B.a8,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cK(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.be(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.u(t,A.a([v.$4(D.anP,8,0.85,2.2),v.$4(D.bIe,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.anP,8,0.85,2.4))
else if(r==="corners")t.push(A.bR(0,new A.D(D.bIa,A.b4(l,l,l,new C.bew(h,l),B.az),l),0,0,0))
r=A.W(D.aCH[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.m(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.azT,l,l),B.K,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.af,p,B.af,A.d(o,l,l,l,l,l,l,A.m(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cI,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.u(o,A.a([B.aO,A.d(r,l,2,B.a2,l,l,l,A.m(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bR(0,new A.D(D.bIG,A.x(o,B.l,l,w,B.h,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b4(l,l,l,new C.aJ6(l),D.fiV),l,l,l,46,0,l))
return A.p(l,A.bu(D.aeI,new A.an(B.a0,l,B.ad,B.t,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.aeI,i,new A.a7(B.ay,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.beF.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e_()
g.cU(11)
switch(this.b){case"plain":return
case"linen":$.S()
w=A.L()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=0;t<v;t+=4)d.ah(new A.r(0,t),new A.r(u,t),w)
$.S()
s=A.L()
s.r=B.c.j(0.05).gp(0)
s.c=1
for(r=0;r<u;r+=4)d.ah(new A.r(r,0),new A.r(r,v),s)
break
case"stars":for(v=e.a,u=e.b,q=this.c,p=0;p<70;++p){o=g.ai()
n=g.ai()
m=g.ai()
$.S()
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=q.j(0.25+g.ai()*0.5).gp(0)
d.O(new A.r(o*v,n*u),0.6+m*1.6,l)}break
case"rays":v=e.a*0.55
u=e.b
q=u*0.1
for(o=this.c,n=x.v,p=0;p<14;++p){k=0.47123889803846897+p*0.1691626813471427
m=$.S()
l=A.a([],n)
j=new A.aH(m.r,B.aj,null,null,l)
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
m=new A.bw()
l.push(m)
l=j.f
if(l!=null)m.ak(l)
j.ab()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=o.j((p&1)===0?0.09:0.03).gp(0)
d.af(j,m)}break
default:$.S()
w=A.L()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,p=0;p<260;++p)d.O(new A.r(g.ai()*v,g.ai()*u),0.8+g.ai()*1.8,w)
$.S()
h=A.L()
h.r=B.c.j(0.035).gp(0)
for(p=0;p<120;++p)d.O(new A.r(g.ai()*v,g.ai()*u),0.6+g.ai()*1.2,h)}},
aE(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bew.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.S(),j=A.L(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.aa
j.c=2.4
j.d=B.bG
for(w=e.a,v=e.b,v=[D.f8g,new A.ca([w,0,-1,1]),new A.ca([0,v,1,-1]),new A.ca([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aH(k,B.aj,null,null,s)
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
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=i.j(0.9).gp(0)
d.O(new A.r(r+p*9,q+o*9),3,s)}},
aE(d){return!d.b.A(0,this.b)}}
C.uT.prototype={}
C.a_i.prototype={
S(){return new C.beD()}}
C.beD.prototype={
gox(){var w=this.d
return w===$?this.d=this.a.c:w},
gz7(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.ba(w.b,B.b6,B.aP),$.ax())}return v},
gaDv(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.ba(w.c,B.b6,B.aP),$.ax())}return v},
gat6(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.ba(w.y,B.b6,B.aP),$.ax())}return v},
t(){var w=this,v=w.gz7(0),u=v.U$=$.ax()
v.R$=0
v=w.gaDv()
v.U$=u
v.R$=0
v=w.gat6()
v.U$=u
v.R$=0
w.a2()},
atK(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jz(s,s,s,A.d(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.d8H(this,f,u),e===u,s,s,s,s))}return A.bZ(B.bI,r,B.br,s,6,8)},
azv(d){var w=null,v=B.c.j(0.07)
return A.bz(w,new A.b6(4,A.l(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lY,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gox(),a0=f.gz7(0),a1=a0.a.a,a2=f.gaDv(),a3=a2.a.a,a4=f.gat6(),a5=d.bg_(a4.a.a,a3,a1)
a1=x.w
a3=A.aE(a6,e,a1).w
a1=A.aE(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.as(new A.a5(190,260,new A.dy(B.dC,B.z,B.f,new A.a5(270,370,new C.a__(a5,d,f.a.e,e),e),e),e),e,e,e)
a0=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.azv("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d95(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dj,!0,B.a7,e,B.ao,e,e,e,e)
a2=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.azv("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d96(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dj,!0,B.a7,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.A1[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aT
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bG(o,o,o,o),e,e,new A.a7(B.ay,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aF
v.push(A.az(e,A.x(A.a([p,B.cQ,A.d(t.b,e,e,e,e,e,e,new A.G(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d97(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bZ(B.bI,v,B.br,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b7.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.ey:B.L,2,B.r,-1)
q.push(A.az(e,A.p(e,A.W(D.aCH[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bG(o,o,o,o),new A.be(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d98(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bZ(B.bI,q,B.br,e,8,8)
a4=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.azv("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d99(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dj,!0,B.a7,e,B.ao,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,M.vP,e,e,e)
m=A.a([],w)
for(l=D.E9.gdP(D.E9),l=l.gae(l);l.C();){k=l.gP(l)
j=A.b1(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.ey:B.aT
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bG(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aF
m.push(A.az(e,A.x(A.a([j,B.bF,A.d(i,e,e,e,e,e,e,new A.G(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d9a(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bZ(B.bI,m,B.br,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,M.vP,e,e,e)
k=f.gox()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bm(!0,new A.cN(new A.aY(0,1/0,0,a1.a.b*0.92),A.cw(A.a([D.fZl,B.af,d,B.aO,a0,B.T,a2,B.aB,D.h4y,B.P,v,B.aB,D.fZu,B.P,q,B.aB,a4,B.aB,p,B.P,m,B.aB,l,A.l0(e,9,""+B.j.V(f.gox().f),36,18,new C.d9b(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,M.vP,e,e,e),B.am,f.atK(D.a7c,f.gox().r,new C.d9c(f),D.dFF),B.af,A.d("BORDER",e,e,e,e,e,e,M.vP,e,e,e),B.am,f.atK(D.a6w,f.gox().w,new C.d9d(f),D.dFL),B.af,A.d("COVER MATERIAL",e,e,e,e,e,e,M.vP,e,e,e),B.am,f.atK(D.a6s,f.gox().x,new C.d9f(f),D.dHd),B.am,A.iU(e,B.b7,e,B.ag,e,new C.d9g(f),e,e,e,D.fTw,f.gox().z),B.bx,A.bI(D.fY2,e,new C.d9h(f,a6),A.bo(B.b7,e,e,e,e,B.p4,e,e,new A.b9(A.l(16),B.a1),e,e,e))],w),e,e,Z.anj,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aJ6.prototype={
a4(d,e){var w,v,u,t=new A.aH($.S().r,B.aj,null,null,A.a([],x.v))
t.E(new A.aZ(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.bw())
u=A.L()
u.san(D.ca_.aD(0,new A.a4(0,0,0+w,0+v)))
d.af(t,u)},
aE(d){return!1}}
C.bjZ.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.S()
w=A.L()
w.san(D.c9_.aD(0,new A.a4(0,0,a2,a3)))
a4.aF(new A.a4(0,0,a2,a3),w)
v=B.j.cB(a1/112)
u=new A.e_()
u.cU(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.daF[u.aw(9)]
j=u.aw(14)
J.br(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a4(n,j,n+m,j+l)
h=A.bx(i,B.hD)
g=new A.ar(B.S,B.Q,B.V,B.X,B.U)
f=A.ap(k,B.c,0.12)
f.toString
e=A.ap(k,B.w,0.45)
e.toString
g.san(new A.a7(B.a5,B.a8,B.x,A.a([f,k,e],w),d,d).aD(0,i))
a4.aq(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ar(B.S,B.Q,B.V,B.X,B.U)
e.r=E.kv.j(0.55).gp(0)
a4.aF(new A.a4(g,j,h,j+2),e)
e=new A.ar(B.S,B.Q,B.V,B.X,B.U)
e.r=E.kv.j(0.4).gp(0)
a4.aF(new A.a4(g,q,h,p),e)
t.restore()
j=u.aw(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.san(D.c8i.aD(0,new A.a4(0,r,a2,q)))
a4.aF(new A.a4(0,r,a2,q),p)
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=B.w.j(0.5).gp(0)
p.y=B.kX
a4.aF(new A.a4(0,q,a2,q+14),p)}t=A.L()
t.r=D.bhC.j(0.72).gp(0)
a4.aF(new A.a4(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.L()
a3.san(new A.bS(B.z,0.5,B.x,d,0,A.a([D.bpX.j(0.22),B.L],w),d,d).aD(0,A.bV(new A.r(t,a1),a0)))
a4.O(new A.r(t,a1),a0,a3)},
aE(d){return!1}}
C.bcP.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cK(14,w*2,v*2.2,v*2,o,o,new A.bM(new A.o(A.ap(D.kP,D.bvc,w/4),o,new A.bG(B.a1,new A.ay(B.w.j(0.12),1,B.r,-1),B.a1,B.a1),B.Mb,o,o,B.n),B.bi,o,o),o))}v=x.V
u=A.a([new A.ab(0,B.G,B.w.j(0.35),B.aMU,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.kv.j(0.6),o,o,new A.be(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.l,o,B.r_,B.h,0,B.p),B.f,o,o,new A.o(o,o,o,D.b5S,u,D.c9Y,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ab(0,B.G,B.w.j(0.4),B.dp,18)],v)
t=A.ao(o,A.b4(o,o,o,new C.aJ6(o),D.fiQ),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aWY(p.y,r,L.j6,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bz(o,B.eM,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,L.j6.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fIo,!0,B.a7,o,B.ao,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.m(o,o,L.j6.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.T,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bz(o,B.eM,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,L.j6.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fyQ,!0,B.a7,B.AW,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.h,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fIg,o,o,o),B.ax,A.d(q.$1(r),o,o,o,o,o,o,A.m(o,o,L.j6.j(0.5),o,o,o,o,o,o,o,o,11,B.cI,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.A(A.a([A.E(A.p(o,o,B.f,D.Gq.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fv,A.d("\u2766",o,o,o,o,o,o,A.m(o,o,D.Gq.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.Gq.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.h,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.m(o,o,L.j6.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Ze(A.cS(A.a([A.cS(o,o,o,o,o,o,o,o,o,D.fC3,B.a.aA(k,0,1)),A.cS(o,o,o,o,o,o,o,o,o,o,B.a.b4(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.m(o,o,L.j6.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.c9(A.x(n,B.E,o,B.e,B.h,0,B.p),B.t,o,B.y,o,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.ig,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.m(o,o,L.j6.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.p(o,A.bu(B.Mb,new A.an(B.a0,o,B.ad,B.t,A.a([t,new A.D(D.bHH,A.x(s,B.al,o,B.e,B.h,0,B.p),o),A.ao(0,new A.bM(new A.o(o,o,o,o,o,new A.a7(B.a5,B.a8,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bi,o,o),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.Mb,v,D.cav,B.n),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.h,0,o,o))
return new A.an(B.a0,o,B.ad,B.t,l,o)}}
C.amg.prototype={
S(){return new C.amh(new A.eD(0,$.ax()),new C.bTT(),new C.amz(),D.hHa,null,null)},
gd1(){return this.d}}
C.a1Y.prototype={
a7(){return"_Step."+this.b}}
C.amh.prototype={
gCD(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEK(w.c,6,w.e,!1)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
ghd(d){var w,v=this,u=v.e
if(u===$){w=C.N8(v.a.c)
v.e!==$&&A.bD()
v.e=w
u=w}return u},
gU3(){var w=this.ghd(0)
return w.gzr()==null?"Babu":B.a.i(w.gzr().b)},
Y(){var w,v=this
v.a3()
w=v.ghd(0).gzr()
w=w==null?null:w.c
v.r.b=w===D.oB
w=v.q6(new C.bSe(v))
w.fX(0)
v.x!==$&&A.aQ()
v.x=w
v.a2R("Come closer, my children. I am "+v.gU3()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
t(){var w=this,v=w.x
v===$&&A.c()
v.t()
v=w.y
if(v!=null)v.a1(0)
v=w.z
if(v!=null)v.a1(0)
w.w.t()
v=w.f
v.U$=$.ax()
v.R$=0
w.bwG()},
a2R(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.dg(D.alU,new C.bS8(w))},
bt2(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.m(new C.bSh(v))},
aec(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bsV(){return this.baO()},
baO(){var w=this,v=w.gCD()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bS9(w))
w.a2R(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cz(B.me,new C.bSa(w))},
cMf(){var w=this
w.m(new C.bSd(w))
w.a2R(w.gCD()[w.as].a)},
Ld(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.adO)return
w=p.gCD()
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
t.r=s.a+1.5}q=new A.e_()
q.cU(v*7+d)
p.m(new C.bSc(p,d,u,q))
p.a2R(u?D.dqz[q.aw(4)]+" "+w[p.as].d:D.dn7[q.aw(3)]+" "+w[p.as].d)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCD()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bH1(t.at,t.ay,p)
t.m(new C.bSf(t,s))
t.a2R(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.BQ(t.a.d,s),$async$kN)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.BR(r.d,r.c.a,"fire",t.at*10),$async$kN)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bSg())
w=1
break
case 4:++t.as
t.baO()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c4(v,D.YQ,new A.an(B.a0,v,B.ad,B.t,A.a([A.bR(0,new A.en(A.b4(v,v,v,new C.aX2(u,w.r,w.w,u),B.az),v),0,0,0),A.bm(!0,A.x(A.a([w.ccR(0),B.b3,w.bSc()],t),B.l,v,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
ccR(d){var w,v,u,t=this,s=null,r=A.aI(s,s,s,s,B.Qn,s,s,s,new C.bSb(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCD().length;++w){v=t.as
if(w<v||t.Q===D.b2a)v=B.cT
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,D.bD_,s,s,s,22))}p=A.E(A.x(A.a([D.fQf,A.A(p,B.l,s,B.e,B.h,0,s,s)],q),B.E,s,B.e,B.h,0,B.p),1)
v=A.l(14)
u=A.K(B.fK,B.r,1)
return new A.D(D.bIT,A.A(A.a([r,p,A.p(s,A.d("\ud83d\udd25 "+B.j.V(t.cy*100)+"%",s,s,s,s,s,s,B.iH,s,s,s),B.f,s,s,new A.o(B.b5,s,u,v,s,s,B.n),s,s,s,s,B.hl,s,s,s)],q),B.l,s,B.e,B.h,0,s,s),s)},
bSc(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghd(0).gzr()
if(h==null)w=1
else w=h.c===D.oB?0:1
v=j.dx
u=j.db
t=D.qp.j(0.96)
s=A.l(22)
r=A.K(B.cT,B.r,3)
q=A.b4(i,i,i,new C.bpA(w,i),B.az)
p=A.d(j.Q===D.adO?j.gU3()+" asks":"Elder "+j.gU3(),i,i,i,i,i,i,D.aWt,i,i,i)
o=j.db
o=B.a.aA(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.az(B.bX,A.A(A.a([new A.a5(62,62,q,i),B.as,A.E(A.x(A.a([p,B.bF,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aWH,i,i,i)],n),B.E,i,B.e,B.h,0,B.p),1)],n),B.E,i,B.e,B.h,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbt1(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.as(j.aai("Sit down by the fire",j.gbsU()),i,i,i)
break
case 1:v=A.as(j.aai("Ask me, Elder",j.gcMe()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCD()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.ay(D.lF,2.5,B.r,-1)
v.push(A.az(i,A.p(i,A.d(u[m],i,i,i,i,i,i,D.aWD,B.K,i,i),B.f,i,D.afk,new A.o(D.akS,i,new A.bG(l,l,l,l),new A.be(q,q,q,q),i,i,B.n),i,i,i,i,V.wB,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bS5(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bZ(B.bI,v,B.br,i,8,8)
break
case 3:v=j.fr
u=v?B.kc:Ak.aqO
u=A.W(u,v?B.ep:D.lF,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.m(i,i,v?B.ep:D.lF,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCD().length?"Finish":"Next story"
v=A.A(A.a([u,B.ae,q,j.aai(v,j.gqs(j))],n),B.l,i,B.e,B.h,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gCD().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aWV,i,i,i)],n)
u=j.cx
if(u>0){u=C.aRk(u)
q=C.aRk(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.ace,i,i,i))}v.push(B.P)
v.push(j.aai("Back to the games",new C.bS6(j)))
v=A.x(v,B.l,i,B.e,B.h,0,B.p)
break
default:v=i}return A.p(i,A.x(A.a([o,B.T,v],n),B.E,i,B.e,B.N,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.aEe,i,B.n),i,i,i,B.yP,B.bj,i,i,i)},
aai(d,e){var w=null,v=A.l(16),u=A.K(B.cT,B.r,2)
return A.az(w,A.p(w,A.d(d,w,w,w,w,w,w,A2.L_,w,w,w),B.f,w,w,new A.o(D.lF,w,u,v,w,w,B.n),w,w,w,w,D.bGA,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bpA.prototype={
a4(d,e){P.hjf(d,e.ej(B.J),e.gdi()*0.45,this.b,0,0.4)},
aE(d){return d.b!==this.b}}
C.aC1.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.bTT.prototype={}
C.ti.prototype={}
C.bpB.prototype={}
C.amz.prototype={
MG(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.if5(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aX2.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.Gy(l.d.MG(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.br(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bV(0,u)
l.cBH(d,j)
l.bQL(d,j)
l.cK0(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.br(t.save())
t.translate(225,580)
d.op(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.S()
q=A.L()
p=x.O
o=x.n
q.san(A.wd(B.J,r,A.a([D.btX.j(0.55*s),F.NE.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.O(B.J,r,q)
t.restore()
n=A.a([new A.y(528,new C.bTL(l,d,j,i)),new A.y(540,new C.bTM(l,d,j,i)),new A.y(546,new C.bTN(l,d,j,i)),new A.y(574,new C.bTO(l,d,j,i)),new A.y(612,new C.bTP(l,d,j,i)),new A.y(650,new C.bTQ(l,d,j,i)),new A.y(656,new C.bTR(l,d,j,i))],x.E)
B.d.b_(n,new C.bTS())
for(m=0;m<7;++m)n[m].b.$0()
l.bHC(d,j,i)
l.bUp(d,j)
t.restore()
$.S()
t=A.L()
t.san(A.wd(new A.r(w/2,v*0.6),e.gaow()*0.75,A.a([B.L,D.bhw],p),A.a([0.55,1],o),B.x,k,k,0))
d.aF(new A.a4(0,0,0+w,0+v),t)},
aE(d){return d.c!==this.c||d.d!==this.d},
cBH(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e_()
h.cU(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.S()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=t.gp(0)
d.O(new A.r(v*450,20+u*300),0.8+s*1.1,r)}q=B.j.F(e,17)/1.2
if(q<1){p=new A.r(60+q*220,70+q*90)
d.ah(p,p.aJ(0,D.esj),C.iC(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.j.F(v+o*0.05,1)
s=-20+n*500
r=120+Math.sin(n*9+o)*14+o*12
m=Math.sin(u+o*2)
l=$.S()
k=A.a([],t)
l=new A.aH(l.r,B.aj,null,null,k)
m=r+m*4
k.push(new A.aZ(s-6,m))
l.ab()
j=r-3
r=new A.ce(s-2,j,s,r)
k.push(r)
i=l.f
if(i!=null)r.ak(i)
l.ab()
s=new A.ce(s+2,j,s+6,m)
k.push(s)
r=l.f
if(r!=null)s.ak(r)
l.ab()
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.b=B.aa
s.c=1.6
s.r=D.bke.gp(0)
s.d=B.bG
s.e=B.dP
d.af(l,s)}},
bQL(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aBb[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bW(new A.r(p,m),n*0.74,q*0.5)
k=Ab.yB.j(v)
$.S()
j=new A.ar(B.S,B.Q,B.V,B.X,B.U)
j.r=k.gp(0)
d.c0(l,j)
q=A.bW(new A.r(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=B.wf.j(u).gp(0)
d.c0(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.j.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.r=D.aie.j(0.16*(1-h)).gp(0)
d.O(new A.r(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cK0(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bE9(d,D.esf,0.9,e,D.hD_,!1,!1,D.b27,1,!1)
w=$.S().r
v=x.v
u=new A.aH(w,B.aj,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bw())
t=A.L()
t.r=D.akb.gp(0)
d.af(u,t)
C.bE9(d,D.esh,0.95,e,D.hCV,!1,!1,D.b28,1,!0)
t=new A.aH(w,B.aj,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.ce(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.ce(431,553,421,548))
t.E(new A.bw())
u=A.L()
u.r=F.G7.gp(0)
d.af(t,u)
u=A.bW(D.esg,8,28)
t=A.L()
t.r=D.bwi.gp(0)
d.c0(u,t)
C.bE9(d,new A.r(-30+B.j.F(e/26,1)*510,492),0.82,e,D.hD0,!0,!1,D.XD,1,!1)
t=B.j.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.c0(A.bW(new A.r(s+q*16,r-6),16,11),C.iC(D.ak2,1.8))
u=q<0
C.bE9(d,new A.r(s-q*6,r),0.62,e,D.hD2,!1,u,D.XD,2.2,!1)
C.bE9(d,new A.r(s-q*32,r+4),0.58,e+1,D.hCZ,!1,u,D.XD,2.2,!1)
this.bX8(d,D.erV,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bW(new A.r(o,n),8,11)
k=p===1
j=k?D.ajZ:D.akA
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.r=j.gp(0)
d.c0(l,i)
l=k?D.ajZ:D.akA
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.r=l.gp(0)
d.O(new A.r(o+5,n+(-3+m)),2.6,k)
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.b=B.aa
k.c=1
k.r=B.at.gp(0)
k.d=B.bG
k.e=B.dP
d.ah(new A.r(o+7.5,n+(-2+m)),new A.r(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.b=B.aa
k.c=1
k.r=B.at.gp(0)
k.d=B.bG
k.e=B.dP
d.ah(new A.r(o,n+4),new A.r(o,n+8),k)}h=e<f.f
u=A.bW(D.a9d,15+Math.sin(e*2)*0.8,40)
t=A.L()
t.r=D.aiD.gp(0)
d.c0(u,t)
u=A.bW(D.a9d.a5(0,new A.r(-14,h?-9:-2)),12,15)
t=A.L()
t.r=D.bmn.gp(0)
d.c0(u,t)
t=new A.aH(w,B.aj,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bw())
u=A.L()
u.r=D.bmx.gp(0)
d.af(t,u)
u=D.a9d.a5(0,new A.r(-17,h?-9:-2))
t=A.L()
t.r=B.ic.gp(0)
d.O(u,1.1,t)
v=new A.aH(w,B.aj,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.ce(180,588+w*(h?6:0),178,595))
d.af(v,C.iC(D.aiD,3.5))},
bX8(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a5(0,new A.r(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.b=B.aa
m.c=2
m.r=D.Z2.gp(0)
m.d=B.bG
m.e=B.dP
d.ah(new A.r(u+o,s),new A.r(u+(o+n*1.5),q),m)}w=A.bW(k,17,32)
v=$.S()
r=A.L()
r.r=D.G5.gp(0)
d.c0(w,r)
r=A.bW(k.a5(0,D.erm),7,26)
w=A.ap(D.G5,B.w,0.12)
w.toString
q=A.L()
q.r=w.gp(0)
d.c0(r,q)
v=new A.aH(v.r,B.aj,null,null,A.a([],x.v))
v.E(new A.aZ(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.bw())
s=A.L()
s.r=D.G5.gp(0)
d.af(v,s)
s=A.bW(k.a5(0,new A.r(24,-7+l)),9,12)
v=A.L()
v.r=D.G5.gp(0)
d.c0(s,v)
v=-11+l
d.ah(k.a5(0,new A.r(22,v)),k.a5(0,new A.r(21,-17+l)),C.iC(D.Z2,1.6))
d.ah(k.a5(0,new A.r(26,v)),k.a5(0,new A.r(28,-16+l)),C.iC(D.Z2,1.6))
v=k.a5(0,new A.r(26,-8+l))
s=A.L()
s.r=B.w.gp(0)
d.O(v,0.9,s)
d.ah(k.a5(0,new A.r(26,-3+l)),k.a5(0,new A.r(26,1+l)),C.iC(D.bpf,1.4))
d.ah(k.a5(0,D.euj),k.a5(0,new A.r(-19,-7+Math.sin(f*7)*2)),C.iC(D.G5,2.4))},
bUn(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bW(new A.r(225+u*36,574+(t*13+6)),8,11)
$.S()
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=D.buW.gp(0)
a6.c0(u,t)}}u=A.bW(D.a9f.a5(0,B.cz),17,52)
$.S()
t=A.L()
t.r=D.bh4.gp(0)
a6.c0(u,t)
t=A.bW(D.a9f.a5(0,B.cz),12,44)
u=D.bkD.j(0.6+0.3*Math.sin(a7*6))
s=A.L()
s.r=u.gp(0)
a6.c0(t,s)
for(r=0;r<3;++r){v=D.dmz[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.b=B.aa
o.c=7
o.r=D.Gi.gp(0)
o.d=B.bG
o.e=B.dP
a6.ah(new A.r(u+t*24,579+s*4),new A.r(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.BQ.j(0.6)
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.b=B.aa
n.c=2
n.r=t.gp(0)
n.d=B.bG
n.e=B.dP
a6.ah(new A.r(u+o*24,579+(p*4-2)),new A.r(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.f4o,D.f4X,D.f61,D.f6m,D.f6_]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.bsh,D.boB,D.bum][k]
for(p=l.length,o=k===0,n=1-k*0.15,r=0;r<p;++r){h=l[r]
g=h.b
f=h.c
e=m*g*j*(0.9+0.12*Math.sin(u+f)+0.06*Math.sin(t+f*2))
d=Math.sin(s+f)*5*(e/m)
a0=225+h.a*n
a1=(12+8*a8.w)*g*j
g=$.S()
f=A.a([],q)
a2=new A.aH(g.r,B.aj,null,null,f)
f.push(new A.aZ(a0-a1,578))
a2.ab()
g=a0+d*0.6
a3=new A.kn(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.ak(a4)
a2.ab()
g=new A.kn(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
f.push(g)
a3=a2.f
if(a3!=null)g.ak(a3)
a2.ab()
g=new A.bw()
f.push(g)
f=a2.f
if(f!=null)g.ak(f)
a2.ab()
g=new A.ar(B.S,B.Q,B.V,B.X,B.U)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.j.F(a7*(0.35+B.o.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.F(w,3)
p=G.aky.j((1-a5)*0.9)
$.S()
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.r=p.gp(0)
a6.O(new A.r(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.j.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.aie.j(0.1*(1-a5))
$.S()
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=q.gp(0)
a6.O(new A.r(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bUp(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.j.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.bwt.j(0.18*p)
$.S()
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.r=o.gp(0)
d.O(new A.r(r,q),5,n)
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.r=D.bq1.j(0.9*p).gp(0)
d.O(new A.r(r,q),1.4,n)}},
c6b(d,e){switch(d){case 0:return e.b?D.hCW:D.b1G
case 1:return e.b?D.hD1:D.b1E
case 2:return D.b1D
case 3:return D.b1C
case 4:return D.b1F
default:return D.b1H}},
aDJ(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
Rl(d,e,f,g){var w,v=this,u=D.a6E[e],t=v.c6b(e,g),s=new C.bpB(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a6E[e],l=e===0
m=B.j.D(((l?D.aMM:D.aMS).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a9k
s.as=D.EA
if(l){s.a=o?v.aDJ(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.r(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.r(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.EA
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.eru
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.esQ
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
s.Q=D.evf
s.as=D.aN4}if(e===2&&g.x!=null&&f<g.y){s.a=v.aDJ(f,5)
s.b=0.4
s.as=new A.r(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aDJ(f,e*3)
s.b=0.5
s.c=0.4}}C.hBY(d,u.a,u.b*1.2,t,s,f,e,null)},
bHC(d,e,f){var w=new C.bTK(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd6(d){return this.c}}
C.agc.prototype={
a7(){return"_Stand."+this.b}}
C.ae9.prototype={}
C.lw.prototype={}
C.bSu.prototype={
bCd(d){var w,v,u,t,s=A.T(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
Ge(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.b_(r,new C.bSv())
return r},
arM(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aNr(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
amU(d){var w,v,u=A.aR(x.N),t=d,s=0
for(;;){w=t.d
if(w!=null){v=this.c
v===$&&A.c()
v=v.h(0,w)!=null&&u.I(0,t.a)}else v=!1
if(!v)break
v=this.c
v===$&&A.c()
w=v.h(0,w)
w.toString;++s
t=w}return s},
gzr(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.b_(w,new C.bSw(this))
return B.d.gH(w)}}
C.auE.prototype={}
C.zA.prototype={}
C.al8.prototype={
gC9(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Y(w,new C.bNi(),A.U(w).k("Y<1>")).gJ(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
aj(){var w=this
return A.J(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.MT.prototype={
gapO(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(t.gC9(0))s.push(t)}return s},
aj(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
p.push(A.J(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.J(["id",this.a,"title",q,"qs",p],u,t)},
d2w(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gapO(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.I)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lw(B.a.i(s.a),p,B.d.cn(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bb1.prototype={}
C.aad.prototype={}
C.bii.prototype={}
C.aga.prototype={}
C.akr.prototype={
S(){return new C.aks(B.bC,A.a([],x.cC),A.a([],x.e4),null,null)},
gd1(){return this.d}}
C.aks.prototype={
gMX(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEK(w.c,8,w.e,!1)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
gbb9(){var w,v=this,u=v.e
if(u===$){w=v.q6(v.gccT())
v.e!==$&&A.bD()
v.e=w
u=w}return u},
Y(){this.a3()
this.gbb9().fX(0)},
t(){this.gbb9().t()
this.bwB()},
fX(d){this.m(new C.bLr(this))},
ccU(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fG(0,v)
if(w.c!=null)w.m(new C.bLm())},
b9v(){var w,v,u,t=this,s=t.r
B.d.a8(s)
w=t.gMX()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bii(u,(u+0.5)/v,w[t.x].b[u]))},
fG(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bq(w,new C.bLs())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c90()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gMX()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.j.V((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.ati(v,0.8,B.cT)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.ati(m.cy,0.8,G.np)
m.b_0("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.ati(q,0.88,D.lF)
p=m.gMX()[m.x]
n=p.c
if(u===n){m.b_0("The right gourd fell! It was "+p.b[n]+".")
return}}}},
ati(d,e,f){var w,v,u,t=new A.e_()
t.cU(B.j.V(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.aga(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
b_0(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.Qu()}},
c90(){var w=this
if(w.x+1>=w.gMX().length){w.Qu()
return}++w.x
w.b9v()},
Qu(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Qu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gMX().length
r=C.bH1(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bLk())
w=2
return A.b(C.BQ(u.a.d,r),$async$Qu)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.BR(t.d,t.c.a,"catch",u.z),$async$Qu)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bLl())
return A.h(null,v)}})
return A.i($async$Qu,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.ccS()
else w=v.ch?v.ccV():A.as(new A.D(B.eA,A.x(A.a([D.aXT,B.P,D.fRX,B.T,D.fY7,B.e2,C.uy("Play",v.geX(v),B.cT,B.he,D.fB)],x.p),B.l,u,B.e,B.N,0,B.p),u),u,u,u)
return new C.tH("Calabash Catch",w,B.f6,u)},
ccV(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hB:B.HM
p.push(A.W(u,v?B.aA:B.bV,r,r,r,22))}p.push(B.b3)
v=s.x
u=s.gMX()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aWs,r,r,r))
p.push(B.bb)
v=A.l(14)
p.push(A.p(r,A.d(""+s.z,r,r,r,r,r,r,B.iH,r,r,r),B.f,r,r,new A.o(B.bw,r,r,v,r,r,B.n),r,r,r,r,B.CB,r,r,r))
p=A.A(p,B.l,r,B.e,B.h,0,r,r)
v=A.l(18)
t=A.K(B.cT,B.r,3)
return A.x(A.a([new A.D(D.bEm,p,r),A.p(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fBW,B.K,r,r),B.f,r,r,new A.o(D.qp,r,t,v,r,r,B.n),r,r,r,B.f4,B.bj,r,r,1/0),B.am,A.E(A.cm(new C.bLq(s)),1)],q),B.l,r,B.e,B.h,0,B.p)},
ccS(){var w=this,v=null,u=A.as(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.q1,v,v,v),v,v,v),t=A.as(A.d(""+w.Q+" of "+w.gMX().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.VY,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cw(A.a([D.bey,u,t,B.aO,new C.Iw(s,r,w.cx,v),B.aO,A.as(C.uy("Back to the games",new C.bLj(w),B.cT,B.kb,D.fB),v,v,v)],x.p),v,v,B.ac,v,v,B.ah,!1)}}
C.bdu.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.S(),a3=A.L()
a3.san(A.jC(B.J,new A.r(0,a0),D.d4t,G.aBs,B.x,e))
a4.aF(new A.a4(0,0,a1,0+a0),a3)
a3=A.L()
a3.r=G.NI.gp(0)
a4.O(new A.r(d*0.82,a0*0.16),22,a3)
a3=x.v
w=A.a([],a3)
v=new A.aH(a2.r,B.aj,e,e,w)
a2=a0*0.7
v.E(new A.aZ(0,a2))
for(u=0;u<=d;u+=6){t=new A.aq(u,a2+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.ak(s)
v.ab()}v.E(new A.aq(d,a0))
v.E(new A.aq(0,a0))
a2=$.S()
w=A.L()
w.r=D.blA.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aH(a2.r,B.aj,e,e,A.a([],a3))
w=a0*0.86
a2.E(new A.aZ(r-26,w))
t=a0*0.5
s=a0*0.34
a2.E(new A.ce(r-14,t,r-10,s))
a2.E(new A.aq(r+10,s))
a2.E(new A.ce(r+14,t,r+26,w))
a2.E(new A.bw())
w=A.L()
w.r=D.ahf.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.cpY[q]
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.ahf.gp(0)
s.c=7
s.d=B.bG
a4.ah(new A.r(r,a2),new A.r(r+p*46,w),s)
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.agy.gp(0)
a4.O(new A.r(r+p*50,t),18,s)}a2=a0*0.88
w=A.L()
w.r=D.bmv.gp(0)
a4.aF(new A.a4(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=D.aiU.gp(0)
t.c=2
a4.ah(new A.r(w,a1),new A.r(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.I)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.bW(new A.r(u,s),12,54)
$.S()
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=D.lF.j(0.6).gp(0)
a4.c0(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.br(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=D.ahZ.gp(0)
a4.O(D.eqJ,14,m)
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=D.brj.gp(0)
m.c=4
m.d=B.bG
a4.ah(D.eqK,D.erR,m)
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.san(new A.am0(D.eu0,46,D.dd7,B.vh,B.x,e,e,0))
a4.O(B.J,34,m)
m=A.bW(D.eu7,8,12)
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=B.c.j(0.35).gp(0)
a4.c0(m,l)
k=new A.iA(new A.eq(n.c,e,e,B.cL,e,e,e,e,e,e,D.fzL),B.K,B.c_,new A.jj(1),e,e,3,e,B.c0,e,B.cx)
k.nB(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bx(A.bW(B.cJ,m.gba(m)+8,l),B.fR)
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=D.qp.gp(0)
a4.aq(j,l)
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=D.lF.gp(0)
l.b=B.aa
l.c=1.5
a4.aq(j,l)
l=k.b
m=l.c
l=l.a.c
k.a4(a4,new A.r(-m/2,4-l.gba(l)/2))
t.restore()}i=a1.cy*d
a2=a1.dx
w=Math.sin(a2*4)
C.iiR(a4,new A.r(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dR,(w+1)/2)
h=A.bW(new A.r(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aH($.S().r,B.aj,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.E(new A.aZ(w,a2))
t=h.c
a3.E(new A.aq(t,a2))
s=h.d
a3.E(new A.aq(t-8,s))
a3.E(new A.ce(h.gbE().a,s+8,w+8,s))
a3.E(new A.bw())
m=A.L()
m.r=D.ZV.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=D.BQ.gp(0)
m.c=1.4
a4.ah(new A.r(t,a2),new A.r(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.L()
s.r=G.np.gp(0)
a4.aF(new A.a4(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.L()
s.r=D.blG.gp(0)
a4.c0(new A.a4(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.I)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=g.e.j(B.j.D(s,0,1)).gp(0)
a4.O(new A.r(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.fE(e,B.cx,e,e,e,A.cS(e,e,e,e,e,e,e,e,e,A.m(e,e,B.cT.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,I.DN,e,e),"+"+a2),B.a7,B.c_,e,B.dJ,B.c0)
k.eo()
k.a4(a4,new A.r(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aE(d){return!0}}
C.QP.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aC_(w.c,w.f,v),B.az),s=A.l(10),r=A.K(B.bE,B.r,1.4)
return new A.a5(u+22,v,A.x(A.a([new A.a5(u,u,t,v),B.cQ,A.p(v,A.d(w.d,v,1,B.a2,v,v,v,D.fsi,v,v,v),B.f,v,v,new A.o(B.c,v,r,s,v,v,B.n),v,v,v,v,B.n3,v,v,v)],x.p),B.l,v,B.e,B.N,0,B.p),v)},
gZ(d){return this.e}}
C.aC_.prototype={
a4(d,e){var w=e.ej(B.J),v=e.gdi(),u=this.c?0.8:0
return P.hjf(d,w,v*0.44,this.b,0,u)},
aE(d){return d.b!==this.b||d.c!==this.c}}
C.aAt.prototype={}
C.avf.prototype={
S(){return new C.avg(A.T(x.S,x.cq),null,null)},
gd1(){return this.d}}
C.avg.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hHz(w.c,w.e)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
gaFM(){var w=this.z
return w===$?this.z=this.Xy(0):w},
gj1(){var w,v=this.Q
if(v===$){w=this.gkS()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c1(w,-1,!1,x.S)}return v},
Xy(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aAt(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aAt(v[t],u[t],-1))
v=new A.e_()
v.cU(this.a.e*31+d)
B.d.e0(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.dn(w,w.r,w.e);w.C();){v=w.d
v.r.t()
v.r=null
u=v.eN$
u.b=!1
B.d.a8(u.a)
u=u.goE()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dV$.a.a8(0)
v.qJ()}this.bx3()},
cSl(d,e){var w,v,u,t,s,r=this
if(d>=r.gj1().length||r.gj1()[d]!==-1||B.d.q(r.gj1(),e))return
w=r.gaFM()[e]
v=r.gkS()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.cr8(r,e,w,v))
A.cz(B.lL,new C.cr9(r))
return}++r.r
u=A.bn(null,B.hM,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.m(new C.cra(r,d,e,w,v))
u.cr(0)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkS()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cF(n,0,new C.crb())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.crc(t,r))
w=5
return A.b(C.BQ(t.a.d,r),$async$kN)
case 5:t.x=f
o=t.a
w=6
return A.b(C.BR(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.m(new C.crd())
w=1
break
case 4:for(o=t.as,n=new A.dn(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eN$
p.b=!1
B.d.a8(p.a)
p=p.goE()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dV$.a.a8(0)
q.qJ()}o.a8(0)
t.m(new C.cre(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.as(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.q1,p,p,p),p,p,p)
v=r.f
v=A.as(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.VY,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tH(q,A.cw(A.a([D.ag4,w,v,B.aO,new C.Iw(u,t,r.ch,p),B.aO,A.as(C.uy("Back to the games",new C.cr4(d),B.cT,B.kb,D.fB),p,p,p)],x.p),p,p,B.ac,p,p,B.ah,!1),B.f6,p)}w=r.gkS()
v=r.e
s=w[v]
return new C.tH(q,new A.D(B.t5,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aWn,B.K,p,p),A.E(A.cm(new C.cr5(r,s)),1)],x.p),B.l,p,B.e,B.h,0,B.p),p),B.f6,p)}}
C.bcY.prototype={
a4(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.Y(b2,new C.cRc(),A.U(b2).k("Y<1>")).gJ(0),b4=a9.b,b5=b4.a5(0,B.JP)
$.S()
w=A.L()
w.r=D.lG.j(0.18+0.1*b3).gp(0)
b6.O(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a5(0,D.eqw)
u=A.L()
u.r=B.qr.j(0.5).gp(0)
u.c=10
u.d=B.bG
b6.ah(new A.r(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.e5.az(0,B.j.D(b2[p],0,1))
l=$.S().r
k=A.a([],s)
j=new A.aH(l,B.aj,b0,b0,k)
k.push(new A.aZ(u,b4))
j.ab()
o=new A.ce((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.ak(n)
j.ab()
if(m<1)for(o=new A.aH(l,j.b,j.c,b0,A.bp(k,!0,r)),n=A.a([],q),i=new A.uR(o,!1,n);i.C();){h=i.c
if(h===0||i.f)A.bi(A.jL(b1));--h
g=new A.BN(i,h)
f=0
for(;;){i.jP()
e=n[h].b
e===$&&A.c()
if(!(f<e.a.length()))break
i.jP()
e=n[h].b
e===$&&A.c()
e=Math.min(e.a.length(),f+7)
d=o.b
a0=A.a([],s)
$.S()
a1=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a1.r=B.aT.gp(0)
a1.b=B.aa
a1.c=3
b6.af(new A.aH(l,d,b0,new A.ca([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aH(l,j.b,j.c,b0,A.bp(k,!0,r)),n=A.a([],q),k=new A.uR(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bi(A.jL(b1));--a0
k.jP()
a1=n[a0].b
a1===$&&A.c()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.S()
a4=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a4.r=D.Gv.gp(0)
a4.b=B.aa
a4.c=h
a4.d=B.bG
b6.af(new A.aH(l,a2,b0,new A.ca([new A.BN(k,a0),0,a1*m,!0]),a3),a4)
k.jP()
a4=n[a0].b
a4===$&&A.c()
a4=a4.a.length()
k.jP()
a5=n[a0].VZ(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bW(new A.r(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a3.r=B.bc.gp(0)
b6.c0(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.iA(D.frM,B.a7,B.c_,new A.jj(1),b0,b0,b0,b0,B.c0,b0,B.cx)
a8.eo()
a8.a4(b6,new A.r(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aE(d){return!0}}
C.azd.prototype={
S(){return new C.aze(A.aR(x.S))},
gd1(){return this.d}}
C.aze.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hIt(w.c,w.e)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
Y(){this.a3()
this.b9E()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a2()},
b9E(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.dg(B.t0,new C.cG5(this))},
bqD(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkS()[v.e]
if(w.e[d]===w.b)v.m(new C.cGd(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cGe(v,d))
A.cz(B.iR,new C.cGf(v))}},
cXP(){var w=this
if(!w.as&&w.f<w.gkS()[w.e].d.length)w.m(new C.cGg(w))},
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
t.m(new C.cGh(t,s))
w=5
return A.b(C.BQ(t.a.d,s),$async$kN)
case 5:t.y=f
q=t.a
w=6
return A.b(C.BR(q.d,q.c.a,"who",t.r),$async$kN)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cGi())
w=1
break
case 4:t.m(new C.cGj(t))
t.b9E()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.as(A.d(""+a0.w+" of "+a0.gkS().length+" guessed",a2,a2,a2,a2,a2,a2,B.q1,a2,a2,a2),a2,a2,a2)
v=A.as(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.VY,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tH(a1,A.cw(A.a([D.beJ,w,v,B.aO,new C.Iw(u,t,a0.ax,a2),B.aO,A.as(C.uy("Back to the games",new C.cG7(a3),B.cT,B.kb,D.fB),a2,a2,a2)],x.p),a2,a2,B.ac,a2,a2,B.ah,!1),B.f6,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkS()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.L5,B.K,a2,a2),B.T,A.as(A.lF(new C.cG8(a0,r),a2,B.b0,B.hM,a2,a2,new A.bq(a2,s,u),x.i),a2,a2,a2),B.aB],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.ay(B.cT,2,B.r,-1)
k=o+1
w.push(new A.r9(new A.bq(0,1,u),new C.cG9(),A.p(a2,new A.c7(B.aM,B.e,B.h,B.l,a2,B.p,a2,0,A.a([new A.qK(A.d(""+k,a2,a2,a2,a2,a2,a2,B.o6,a2,a2,a2),D.lF,a2,12,a2),B.as,new A.by(1,B.ba,A.d(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fEA,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.o(D.qp,a2,new A.bG(l,l,l,l),new A.be(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.cw,B.bj,a2,a2,a2),B.b0,B.iR,a2,new A.bf("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.as(A.bO(!1,D.h5_,a2,a2,!0,a2,a2,a2,a0.gcXO(),a2,a2),a2,a2,a2))
w.push(B.P)
if(a0.as){u=D.lG.j(0.2)
q=A.l(16)
p=A.K(D.lG,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fS,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.p(a2,A.x(A.a([m,B.T,C.uy(v,a0.gqs(a0),B.cT,B.jt,D.fB)],t),B.l,a2,B.e,B.h,0,B.p),B.f,a2,a2,new A.o(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bH,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dq:B.cT.j(0.2)
g=new A.aP(16,16)
l=new A.ay(n.q(0,o)?B.fi:B.cT,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bV:B.c
d=n.q(0,o)?B.xx:a2
t.push(new A.r9(new A.bq(0,i,u),new C.cGa(),A.az(a2,A.p(a2,A.d(f,a2,a2,a2,a2,a2,a2,new A.G(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.afd,new A.o(h,a2,new A.bG(l,l,l,l),new A.be(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jr,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cGb(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b0,B.mf,a2,new A.bf("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bZ(B.fU,t,B.br,a2,10,10))}return new C.tH(a1,A.cw(w,a2,a2,B.amT,a2,a2,B.ah,!1),B.f6,a2)}}
C.aAd.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.aHv.prototype={
aX(){this.b7()
this.b5()
this.dI()},
t(){var w=this,v=w.b8$
if(v!=null)v.a6(0,w.gdC())
w.b8$=null
w.a2()}}
C.afZ.prototype={
ark(d){},
arQ(){var w=this,v=w.q6(new C.f8t(w))
v.fX(0)
w.M4$!==$&&A.aQ()
w.M4$=v}}
C.aLj.prototype={
gbn3(d){var w=this.c
return B.a.aA(w,0,Math.min(this.d,w.length))},
W6(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.dg(D.alU,new C.fiD(w))},
bt0(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.amp.prototype={
S(){return new C.amq(new C.amz(),A.a([],x.t),new A.eD(0,$.ax()),$,0,null,null)},
gd1(){return this.d}}
C.amq.prototype={
gMV(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEK(w.c,10,w.e,!0)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
ghd(d){var w,v=this,u=v.e
if(u===$){w=C.N8(v.a.c)
v.e!==$&&A.bD()
v.e=w
u=w}return u},
gqA(){var w=this.r
return w===$?this.r=new C.aLj(new C.bTg(this)):w},
gaq9(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gMV()[v].c)u.push(1)
return u.length},
gbmn(){var w=this.ghd(0)
return w.gzr()==null?"Elder":B.a.i(w.gzr().b)},
Y(){this.a3()
this.arQ()},
t(){var w,v=this
v.gqA().t()
v.f.t()
w=v.M4$
w===$&&A.c()
w.t()
w=v.qe$
w.U$=$.ax()
w.R$=0
v.bwJ()},
cMr(){var w=this
w.m(new C.bTd(w))
w.gqA().W6(w.gMV()[w.x].a)},
Ld(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqA()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.qe$.a
v.ax=u
v.ay=u+1
v.m(new C.bTb())
A.cz(B.hM,new C.bTc(v))},
bqz(){var w=this.gaq9(0)/this.gMV().length*100
if(w>=90)return D.f1f
if(w>=75)return D.f_g
if(w>=60)return D.eQX
if(w>=45)return D.eUk
return D.eLm},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cuW()
w=A.bR(0,new A.en(A.b4(m,m,m,new C.btE(n,n.qe$),B.az),m),0,0,0)
if(!n.Q){v=D.qp.j(0.96)
u=A.l(20)
t=A.K(B.cT,B.r,3)
u=A.p(m,A.x(A.a([A.d("Elder "+n.gbmn()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aXh,B.K,m,m),B.T,C.uy("Start the test",n.gC_(),B.cT,B.jb,D.fB)],x.p),B.l,m,B.e,B.N,0,B.p),B.f,m,m,new A.o(v,m,t,u,m,m,B.n),m,m,m,m,B.bH,m,m,m)
v=u}else{v=n.x
u=n.gMV()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aXj,m,m,m)
if(n.Q){t=n.gqA()
t=t.d<t.c.length}else t=!1
if(t)u=D.fke
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.ay(D.BQ,4,B.r,-1)
s.push(A.az(m,A.p(m,A.d(q[r],m,m,m,m,m,m,D.fvy,B.K,m,m),B.f,m,D.afd,new A.o(D.bhB,m,new A.bG(o,o,o,o),new A.be(p,p,p,p),m,m,B.n),m,m,m,m,B.Ou,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bTe(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bZ(B.fU,s,B.br,new A.bf("o"+t,x.W),8,8)}u=A.x(A.a([v,B.am,A.oC(u,B.n_,A.pW(),B.b0,B.b0,A.LL())],x.p),B.l,m,B.e,B.N,0,B.p)
v=u}return new C.tH("Village School",new A.an(B.a0,m,B.ad,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.f6,m)},
cuW(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bqz(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gMV()[v].c)g.push(v)
u=A.l(22)
t=A.K(B.cT,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.fA3,B.K,i,i)
r=A.d("Signed by Elder "+j.gbmn(),i,i,i,i,i,i,D.fyI,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fDV,i,i,i),D.eDh],q)
o=A.d(h.b,i,i,i,i,i,i,D.fFS,i,i,i)
n=j.gaq9(0)
m=j.gMV()
u=A.p(i,A.x(A.a([D.fRa,B.ax,s,r,B.T,new A.an(B.z,i,B.ad,B.t,p,i),o,B.am,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.ace,i,i,i),B.P,D.atK],q),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(D.qp,i,t,u,i,i,B.n),i,i,i,i,B.fu,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aB,new C.Iw(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aO,D.h63,B.P],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.I)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.ay(B.bw,1,B.r,-1)
p=m[v]
u.push(A.p(i,A.x(A.a([A.d(p.a,i,i,i,i,i,i,B.h6,i,i,i),B.ax,A.d("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fBe,i,i,i),A.d(p.d,i,i,i,i,i,i,D.fDw,i,i,i)],q),B.E,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.dq,i,new A.bG(k,k,k,k),new A.be(r,r,r,r),i,i,B.n),i,i,i,B.cw,B.bj,i,i,i))}B.d.u(s,u)}s.push(B.aB)
s.push(A.as(C.uy("Back to the games",new C.bT7(j),B.cT,B.kb,D.fB),i,i,i))
return new C.tH("Village School",A.cw(s,i,i,B.bS,i,i,B.ah,!1),B.f6,i)}}
C.btE.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.qe$.a
a0.Gy(e.f.MG(a1))
w=C.hey(a1)
v=a0.c
J.br(v.save())
v.translate(w.a,w.b)
a0.bV(0,w.c)
if(e.Q){u=e.gqA()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.cZG[s]-6
$.S()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=D.Gi.gp(0)
a0.aF(new A.a4(u,340,u+12,450),r)}u=A.bx(D.aae.cq(10),B.i4)
$.S()
r=A.L()
r.r=D.BQ.gp(0)
a0.aq(u,r)
r=A.bx(D.aae,B.ir)
u=A.L()
u.san(A.jC(new A.r(30,96),new A.r(420,346),D.diw,f,B.x,f))
a0.aq(r,u)
q=new A.e_()
q.cU(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bW(new A.r(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=B.c.j(0.025).gp(0)
a0.c0(o,r)}u=A.L()
u.r=I.ajJ.gp(0)
a0.aF(new A.a4(30,354,420,362),u)
u=A.L()
u.r=B.aS.gp(0)
a0.aF(D.fbD,u)
u=A.L()
u.r=B.bL.gp(0)
a0.aF(D.fbH,u)
u=A.bx(D.fbx,B.iF)
r=A.L()
r.r=D.ZV.gp(0)
a0.aq(u,r)
n=B.j.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqA().gbn3(0)
m=A.fE(f,B.cx,f,7,f,A.cS(f,f,f,f,f,f,f,f,f,D.fI9,u+(t?"|":"")),B.a7,B.c_,f,B.dJ,B.c0)
m.nB(346)
J.br(v.save())
u=A.hY(D.aae)
r=$.mk()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.hY(new A.a4(30+390*n,96,420,346)),r[1],!0)
m.a4(a0,new A.r(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bx(new A.a4(u,r,u+40,r+90),B.fR)
u=A.L()
u.r=D.bxj.gp(0)
a0.aq(r,u)}}else{m=A.fE(f,B.cx,f,f,f,D.fs1,B.K,B.c_,f,B.dJ,B.c0)
m.nB(340)
m.a4(a0,new A.r(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.j.F(u+p/8,1)
o=B.o.F(e.gqA().d*9,310)
k=Math.sin(p+r)
j=new A.ar(B.S,B.Q,B.V,B.X,B.U)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.O(new A.r(70+o+k*6,166+l*70),1.6,j)}u=e.ghd(0).gzr()
i=(u==null?f:u.c)===D.oB?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.f8u(d,a0,i,t,h,D.erG)),new A.y(520,new C.f8v(a0,d,t)),new A.y(575,new C.f8w(a0,d,t)),new A.y(585,new C.f8x(this,a0,d,t)),new A.y(615,new C.f8y(this,t,a0,d,h))],x.E)
B.d.b_(g,new C.f8z())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
ccW(d,e){var w,v,u,t,s,r,q,p=$.S(),o=A.a([],x.v),n=new A.aH(p.r,B.aj,null,null,o)
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
n.ab()}}n.E(new A.bw())
return n},
aE(d){return!1}}
C.amn.prototype={
S(){return new C.amo(new C.amz(),A.T(x.S,x.i),new A.eD(0,$.ax()),$,0,null,null)},
gd1(){return this.d}}
C.amo.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hHo(w.c,w.e)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
gj1(){var w=this.z
return w===$?this.z=this.FN(0):w},
gaM1(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.FN(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.cn(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.FN(0):r).length);++v}s.Q=w
r=w}return r},
FN(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e5(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e_()
u.cU(this.a.e+d*7)
B.d.e0(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.f0(u,new C.bSU())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Y(){this.a3()
this.arQ()},
t(){var w,v=this
v.e.t()
w=v.M4$
w===$&&A.c()
w.t()
w=v.qe$
w.U$=$.ax()
w.R$=0
v.bwI()},
ark(d){var w,v,u,t,s,r=this,q=r.gj1().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.cn(u===$?r.z=r.FN(0):u,v)
s=r.gaM1()
s[v]=s[v]+(450*(t+0.5)/q-r.gaM1()[v])*Math.min(1,w)}},
d2b(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj1().length)return
w=v.y
if(w===-1){v.m(new C.bT4(v,d))
return}if(w===d){v.m(new C.bT5(v))
return}v.m(new C.bT6(v,B.d.cn(v.gj1(),v.y),d,B.d.cn(v.gj1(),d)))},
cN8(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.FN(0):u).length))break
t=s.gkS()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.FN(0):u)[v]]===v);++v}s.m(new C.bT_(s,B.d.cD(w,new C.bT0())))},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkS().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bT1(t,s))
w=5
return A.b(C.BQ(t.a.d,s),$async$kN)
case 5:t.x=f
q=t.a
w=6
return A.b(C.BR(q.d,q.c.a,"lineup",t.r*10),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bT2())
w=1
break
case 4:t.m(new C.bT3(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.as(A.d(""+l.r+" of "+l.gkS().length+" lines right",k,k,k,k,k,k,B.q1,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tH("Line Up",A.cw(A.a([D.ag4,w,B.aO,new C.Iw(v,u,l.ch,k),B.aO,A.as(C.uy("Back to the games",new C.bSW(d),B.cT,B.kb,D.fB),k,k,k)],x.p),k,k,B.ac,k,k,B.ah,!1),B.f6,k)}w=A.a([],x.t)
for(t=0;v=l.gkS(),t<v[l.f].d.length;++t)w.push(t)
B.d.b_(w,new C.bSX(l))
u=A.bR(0,A.cm(new C.bSY(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aXj,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.fAv,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fCL,B.K,k,k)],q),B.l,k,B.e,B.h,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.l(16)
n=l.ax
m=A.K(n?D.lG:G.np,B.r,2)
r.push(A.p(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bSZ(l),x.cM).aM(0,", then ")+".",k,k,k,k,k,k,D.fEY,k,k,k),B.f,k,k,new A.o(p,k,m,o,k,k,B.n),k,k,k,B.d9,B.bj,k,k,1/0))}if(!l.at)r.push(C.uy("That is my line!",l.gcN7(l),B.cT,B.hd,D.fB))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uy(w,l.gqs(l),B.cT,B.jt,D.fB))}return new C.tH("Line Up",new A.an(B.a0,k,B.ad,B.t,A.a([u,s,A.ao(12,A.x(r,B.l,k,B.e,B.N,0,B.p),k,k,12,12,k,k)],q),k),B.f6,k)}}
C.bk6.prototype={
a4(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.qe$.a
c7.Gy(c5.e.MG(c8))
w=C.hey(c8)
v=c7.c
J.br(v.save())
v.translate(w.a,w.b)
c7.bV(0,w.c)
u=c5.gj1().length
t=$.S().r
s=x.v
r=new A.aH(t,B.aj,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.ce(225,500,440,470))
q=A.L()
q.r=D.ZV.gp(0)
q.b=B.aa
q.c=4
c7.af(r,q)
for(q=c6*3,p=0;p<12;++p){o=30+p*36
n=470+30*Math.sin(3.141592653589793*(o-10)/430)*0.95
m=Math.sin(q+p)
l=A.a([],s)
k=new A.aH(t,B.aj,c4,c4,l)
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
m=new A.bw()
l.push(m)
l=k.f
if(l!=null)m.ak(l)
k.ab()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=[B.cT,G.np,D.lG,B.aG][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b1J(c7,"OLDEST",D.esE,B.cT)
this.b1J(c7,"YOUNGEST",D.es6,B.bc)
t=A.bx(D.fbr,B.fR)
s=A.L()
s.r=D.Gi.gp(0)
c7.aq(t,s)
s=A.bx(D.fbq,B.ir)
t=A.L()
t.r=D.BQ.gp(0)
c7.aq(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.b_(t,new C.dsr())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.I)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.cn(a1===$?c5.z=c5.FN(0):a1,f)
o=c5.gaM1()[f]
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
if(a3){$.S()
a9=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a9.r=B.cT.j(0.22+0.1*Math.sin(e)).gp(0)
c7.O(new A.r(o,520),54,a9)}a9=D.dmn[B.o.F(b0,6)]
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
else b9=a3?D.euM:c4
if(b1)c0=new A.r(3+b2*8,-56)
else if(h&&a7)c0=D.aN4
else c0=a3?new A.r(30,-104+Math.sin(e)*5):c4
C.SJ(c7,new A.r(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.JR,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.iA(new A.eq(a8,c4,c4,B.cL,c4,c4,c4,c4,c4,c4,D.fyc),B.a7,B.c_,new A.jj(1),"\u2026",c4,1,c4,B.c0,c4,B.cx)
c1.nB(q)
c2=A.bx(A.bW(new A.r(o,650),24,c1.b.c+16),B.fR)
$.S()
a8=new A.ar(B.S,B.Q,B.V,B.X,B.U)
if(a6)a9=B.iz
else a9=a7?B.rU:D.qp
a8.r=a9.gp(0)
c7.aq(c2,a8)
a8=new A.ar(B.S,B.Q,B.V,B.X,B.U)
if(a6)a9=D.lG
else a9=a7?G.np:D.lF
a8.r=a9.gp(0)
a8.b=B.aa
a8.c=2
c7.aq(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a4(c7,new A.r(o-a9/2,650-a8.gba(a8)/2))
c3=new A.iA(new A.eq(""+(a2+1),c4,c4,B.cL,c4,c4,c4,c4,c4,c4,D.fyw),B.a7,B.c_,new A.jj(1),c4,c4,c4,c4,B.c0,c4,B.cx)
c3.eo()
c3.a4(c7,new A.r(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.j.F(p*53+Math.sin(c5+p)*20,450)
q=B.j.F(t+p*37,420)
J.br(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bW(B.J,4,8)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=[B.cT,G.np,D.lG,B.aG,B.c][B.o.F(p,5)].gp(0)
c7.aF(q,m)
v.restore()}v.restore()},
b1J(d,e,f,g){var w,v,u=null,t=A.fE(u,B.cx,u,u,u,A.cS(u,u,u,u,u,u,u,u,u,A.m(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,I.DN,u,u),e),B.a7,B.c_,u,B.dJ,B.c0)
t.eo()
w=t.b
v=w.c
w=w.a.c
t.a4(d,f.aJ(0,new A.r(v/2,w.gba(w)/2)))},
aE(d){return!1}}
C.a2g.prototype={
a7(){return"_Trip."+this.b}}
C.amj.prototype={
S(){return new C.amk(D.XJ,new A.eD(0,$.ax()),$,0,null,null)},
gd1(){return this.d}}
C.amk.prototype={
gDy(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEK(w.c,8,w.e,!1)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
ghd(d){var w,v=this,u=v.e
if(u===$){w=C.N8(v.a.c)
v.e!==$&&A.bD()
v.e=w
u=w}return u},
gqA(){var w=this.f
return w===$?this.f=new C.aLj(new C.bSG(this)):w},
gU3(){var w=this.ghd(0)
return w.gzr()==null?"Grandma":B.a.i(w.gzr().b)},
Y(){this.a3()
this.arQ()},
t(){var w,v=this
v.gqA().t()
w=v.M4$
w===$&&A.c()
w.t()
w=v.qe$
w.U$=$.ax()
w.R$=0
v.bwH()},
ark(d){var w,v,u,t=this
if(t.r!==D.ae_)return
w=B.dH.az(0,B.j.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDy()
if(v+1>=u.length){t.r=D.ae0
t.X3()}else{++t.w
t.ay=!1
t.r=D.XK
t.gqA().W6(u[t.w].a)}if(t.c!=null)t.m(new C.bSE())}},
X3(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$X3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqA().W6("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDy().length
r=C.bH1(t,u.z,s)
u.as=r
w=2
return A.b(C.BQ(u.a.d,r),$async$X3)
case 2:u.at=e
s=u.a
w=3
return A.b(C.BR(s.d,s.c.a,"journey",u.x*10),$async$X3)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bSy())
return A.h(null,v)}})
return A.i($async$X3,v)},
brT(){this.aUL()},
aUL(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.ae_
if(w.c!=null)w.m(new C.bSz())},
Ld(d){var w,v,u,t,s=this
if(s.r!==D.XK)return
w=s.gDy()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bSD(s,d,v))
u=s.gqA()
t=s.w
u.W6(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cSk(){if(this.r!==D.Bn)return
this.aUL()},
B(d){var w,v,u,t=this,s=null,r=A.bR(0,new A.en(A.b4(s,s,s,new C.bjx(t,t.qe$),B.az),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDy().length;++w){v=t.w
if(w<v||t.r===D.ae0)v=B.cT
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(new A.by(1,B.ba,A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,B.wH,s,s,s,s),s))}p.push(B.bn)
p.push(D.fSP)
return new C.tH("Safari Journey",new A.an(B.a0,s,B.ad,B.t,A.a([r,A.ao(s,A.A(p,B.l,s,B.e,B.h,0,s,s),s,s,12,12,2,s),A.ao(10,t.cmz(),s,s,10,10,s,s)],q),s),B.f6,s)},
cmz(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bSC(o),l=D.qp.j(0.96),k=A.l(22),j=A.K(B.cT,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gU3()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aXh,B.K,n,n),B.T,C.uy("Start the journey",o.gbrS(),B.cT,D.bS6,D.fB)],x.p),B.l,n,B.e,B.N,0,B.p)
break
case 3:w=D.bej
break
case 1:w=o.w
v=o.gDy()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.ay(D.lF,2.5,B.r,-1)
t.push(A.az(n,A.p(n,A.d(r[s],n,n,n,n,n,n,D.aWD,B.K,n,n),B.f,n,D.afk,new A.o(D.akS,n,new A.bG(p,p,p,p),new A.be(q,q,q,q),n,n,B.n),n,n,n,n,V.wB,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bSA(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.P,A.bZ(B.bI,t,B.br,n,8,8)],u),B.E,n,B.e,B.N,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDy().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.P,new A.bK(B.a8,n,n,C.uy(v,o.gcSj(),B.cT,B.jt,D.fB),n)],x.p),B.E,n,B.e,B.N,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gU3()),B.P,A.d(""+o.x+" of "+o.gDy().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aWV,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aRk(v)
u=C.aRk(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.ace,n,n,n))}w.push(B.P)
w.push(A.as(C.uy("Back to the games",new C.bSB(o),B.cT,B.kb,D.fB),n,n,n))
w=A.x(w,B.E,n,B.e,B.N,0,B.p)
break
default:w=n}return A.p(n,w,B.f,n,n,new A.o(l,n,j,k,D.aEe,n,B.n),n,n,n,n,B.bj,n,n,n)}}
C.bjx.prototype={
a4(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.qe$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDy(),d0=B.j.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.ae_,d2=c7*0.5
c8=A.ap(D.bj4,D.btE,d0)
c8.toString
w=A.ap(D.Z4,G.aiv,d0)
w.toString
v=A.ap(B.un,D.bs2,d0)
v.toString
$.S()
u=A.L()
t=x.O
u.san(A.jC(B.J,new A.r(0,d2),A.a([c8,w,v],t),G.a57,B.x,c3))
d3.aF(new A.a4(0,0,0+c6,0+c7),u)
s=new A.r(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.L()
u.san(A.wd(s,60,A.a([D.bsr,B.L],t),c3,B.x,c3,c3,0))
d3.O(s,60,u)
u=A.L()
u.r=B.Zh.gp(0)
d3.O(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.j.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dC1[o]
$.S()
u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.r=B.c.j(0.75).gp(0)
d3.O(new A.r(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.S()
j=A.a([],m)
i=new A.aH(k.r,B.aj,c3,c3,j)
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
$.S()
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.r=A.ap(l===0?D.bhD:D.bwK,D.bmD,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.ccX(d3,new A.r(B.j.F(B.j.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.S()
w=A.L()
v=A.ap(D.ak2,D.Gv,d0)
v.toString
w.san(A.jC(new A.r(0,d2),new A.r(0,c7),A.a([v,D.bst],t),c3,B.x,c3))
d3.aF(new A.a4(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.L()
w.r=D.blU.gp(0)
d3.aF(new A.a4(0,a0,c6,a1),w)
w=A.L()
w.r=D.bwm.gp(0)
d3.aF(new A.a4(0,a0-3,c6,a0),w)
for(q=-B.j.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.r=I.N1.gp(0)
d3.aF(new A.a4(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.S()
b2=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b2.r=D.bhi.gp(0)
d3.aF(new A.a4(b0,v,b0+52,u),b2)
b2=A.a([],m)
b1=new A.aH(b1.r,B.aj,c3,c3,b2)
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
b0=new A.bw()
b2.push(b0)
b2=b1.f
if(b2!=null)b0.ak(b2)
b1.ab()
b0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b0.r=D.buv.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b1.r=D.fB.gp(0)
d3.aF(new A.a4(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b0.r=D.Gi.gp(0)
d3.aF(new A.a4(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bx(new A.a4(b0,a4,b0+60,a5),B.jy)
b0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b0.r=D.bxO.gp(0)
d3.aq(b5,b0)
b0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b0.r=D.BQ.gp(0)
b0.b=B.aa
b0.c=2
d3.aq(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.iA(new A.eq(b6,c3,c3,B.cL,c3,c3,c3,c3,c3,c3,D.fwD),B.a7,B.c_,new A.jj(1),c3,c3,c3,c3,B.c0,c3,B.cx)
b7.eo()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a4(d3,new A.r(b4-b1/2,a2-b0.gba(b0)/2))
if(a7)b8=c4.r===D.ae0
else if(r===c4.w){b0=c4.r
b0=b0===D.XK||b0===D.Bn
b8=b0}else b8=!1
if(a7){b0=c4.ghd(0).gzr()
b9=(b0==null?c3:b0.c)===D.oB?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqA()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.Bn
b0=c0?C.hDr(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.XK?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.r(40,-110+Math.sin(g)*10)
else a7=c0?new A.r(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.SJ(d3,new A.r(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.r(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bJ_(d3,new A.r(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.j.F(w+r/7,1)
$.S()
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=D.bvR.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.XJ)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.j.F(w+r/5,1)
t=Math.sin(r+c8)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.Bn&&c4.ax){b7=A.fE(c3,B.cx,c3,c3,c3,A.cS(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.m(c3,c3,B.cT,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,A6.IQ,c3,c3),"BEEP BEEP!"),B.a7,B.c_,c3,B.dJ,B.c0)
b7.eo()
b7.a4(d3,new A.r(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
ccX(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ap(D.brX,D.blf,g)
o.toString
if(f){w=new A.aH($.S().r,B.aj,null,null,A.a([],x.v))
v=e.a
u=e.b
w.E(new A.aZ(v-16,u))
t=u-36
s=u-56
w.E(new A.ce(v-9,t,v-7,s))
w.E(new A.aq(v+7,s))
w.E(new A.ce(v+9,t,v+16,u))
w.E(new A.bw())
t=A.L()
t.r=D.a_r.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d2H[r]
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=D.a_r.gp(0)
p.c=4
p.d=B.bG
d.ah(new A.r(w,t),new A.r(v+q*24,s),p)
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=o.gp(0)
d.O(new A.r(v+q*26,u),10,p)}}else{w=e.a5(0,D.euJ)
$.S()
v=A.L()
v.r=D.bhk.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bW(e.a5(0,D.euK),16,60)
w=A.L()
w.r=o.gp(0)
d.c0(v,w)}},
bJ_(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.XJ?0.045:0,a1=a2.c
J.br(a1.save())
a1.translate(a3.a,a3.b+e)
a2.jq(0,a0)
for(w=0;w<2;++w){v=D.dub[w]
u=d.ay&&d.r!==D.XJ&&v>0
J.br(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.S()
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.bwB.gp(0)
a2.O(B.J,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.boH.gp(0)
a2.O(B.J,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=B.bh.gp(0)
q.c=2
a2.ah(B.J,new A.r(s*9,t*9),q)}a1.restore()}p=A.u5(D.fbO,B.fR,B.fR,B.iq,B.hU)
$.S()
t=A.L()
t.san(A.jC(D.eqM,B.a98,D.djU,G.a57,B.x,f))
a2.aq(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.ddR[B.o.F(o,4)].gp(0)
a2.aF(new A.a4(t,-26,t+10,-19),s)}n=d.r===D.Bn&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a4(s,-66,q,-36)
J.br(a1.save())
a1.clipRRect(A.n3(A.bx(l,B.nZ)),$.mH(),!0)
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.r=D.Z4.gp(0)
a2.aF(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.Bn?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.SJ(a2,new A.r(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aMW,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bx(l,B.nZ)
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.r=D.akU.gp(0)
i.b=B.aa
i.c=2
a2.aq(j,i)}d=A.bx(D.V3,B.nZ)
t=A.L()
t.r=D.Z4.gp(0)
a2.aq(d,t)
J.br(a1.save())
a1.clipRRect(A.n3(A.bx(D.V3,B.nZ)),$.mH(),!0)
C.SJ(a2,new A.r(D.V3.gbE().a,-10),0,0,0.7,-0.1,f,f,D.aMW,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bx(D.V3,B.nZ)
d=A.L()
d.r=D.akU.gp(0)
d.b=B.aa
d.c=2
a2.aq(t,d)
d=A.L()
d.r=Am.Cf.gp(0)
a2.O(D.esT,4,d)
d=A.L()
d.r=D.Gi.gp(0)
a2.aF(D.fcX,d)
for(w=0;w<3;++w){v=D.dud[w]
d=A.bx(new A.a4(v,-96,v+28,-79),B.jy)
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=D.Gv.gp(0)
a2.aq(d,t)}a1.restore()},
aE(d){return!1}}
C.aC2.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.bh5.prototype={}
C.aC4.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.bh6.prototype={}
C.aC5.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.bh7.prototype={}
C.a6H.prototype={
B(d){var w=null
return new A.a5(1/0,this.c,A.b4(w,w,w,new C.bjE(w),B.az),w)}}
C.bjE.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.ds7[B.o.F(n,6)]
k=$.S()
j=new A.ar(B.S,B.Q,B.V,B.X,B.U)
j.r=l.gp(0)
d.aF(new A.a4(m,0,m+v,u),j)
if(B.o.F(n,3)===0){j=A.a([],o)
i=new A.aH(k.r,B.aj,null,null,j)
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
k=new A.bw()
j.push(k)
j=i.f
if(j!=null)k.ak(j)
i.ab()
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aE(d){return!1}}
C.tH.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aI(w,w,w,w,B.Qn,w,w,w,new C.bSx(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a2,w,w,w,D.ftV,w,w,w),1)],v)
B.d.u(u,this.e)
return A.c4(w,D.YQ,A.p(w,A.bm(!0,A.x(A.a([D.c6W,new A.D(D.bIX,A.A(u,B.l,w,B.e,B.h,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.b9A,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.Iw.prototype={
B(d){var w=null,v=this.d,u=C.aRk(v),t=C.ilw(v),s=B.c.j(0.08),r=A.l(18),q=A.K(B.cT.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fwo,w,w,w)],x.p)
if(this.e)p.push(D.exa)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.h6,w,w,w))
if(t!=null)p.push(new A.D(B.uG,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.F3,w,w,w),w))
return A.p(w,A.x(p,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.n),w,w,w,w,B.bH,w,w,w)}}
C.Wt.prototype={
S(){return new C.bmr(A.T(x.N,x.S),B.o.F(Date.now(),1e5))},
cZd(d){return this.f.$1(d)},
ge3(){return this.d}}
C.bmr.prototype={
gT2(){var w=this.d
return w===$?this.d=this.a.c:w},
Y(){this.a3()
this.PH()},
PH(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$PH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bTi(u.a.d),$async$PH)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.dhV[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bTh(p,(o===$?u.d=q.c:o).a,r),$async$PH)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.e2O(u,n))
return A.h(null,v)}})
return A.i($async$PH,v)},
uD(d){return this.cpB(d)},
cpB(d){var w=0,v=A.j(x.H),u=this,t
var $async$uD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a6(t,!1).ce(A.ed(new C.e2P(d),!1,null,x.H)),$async$uD)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.PH()
return A.h(null,v)}})
return A.i($async$uD,v)},
gb72(){var w,v,u,t=C.N8(this.gT2()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)s.push(B.a.i(w[u].b))
return s},
a2K(d){return this.cwO(d)},
cwO(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a2K=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.I)(d),++s)r.push(d[s].aj())
w=2
return A.b(u.a.cZd(r),$async$a2K)
case 2:if(u.c!=null)u.m(new C.e2Q(u,r))
return A.h(null,v)}})
return A.i($async$a2K,v)},
P_(d){return this.bRJ(d)},
bRJ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$P_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hgO(t.gT2())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.MT("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a6(s,!1).ce(A.ed(new C.e2M(q),!1,null,r)),$async$P_)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.I)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bk(j,new C.e2N(p))
o=s.length
B.d.c9(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a2K(A.cX(s,0,A.dD(2,"count",x.S),r).dq(0)),$async$P_)
case 4:case 1:return A.h(u,v)}})
return A.i($async$P_,v)},
Y_(d,e){return this.bPi(0,e)},
bPi(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$Y_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cg(null,null,!0,null,new C.e2L(e),o,null,!0,!0,x.y),$async$Y_)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hgO(u.gT2()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.I)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a2K(o),$async$Y_)
case 5:case 3:return A.h(null,v)}})
return A.i($async$Y_,v)},
aaq(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e2I(this,j):h
o=o?0.55:1
w=A.ap(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.l(20)
u=A.K(B.aT,B.r,1)
t=A.a([new A.ab(0,B.G,g.j(0.35),B.cz,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.VT,p,p,p),B.b3],s)
q=A.l(10)
r.push(A.p(p,A.d(i,p,p,p,p,p,p,D.fuO,p,p,p),B.f,p,p,new A.o(B.hL,p,p,q,p,p,B.n),p,p,p,p,B.z2,p,p,p))
return A.az(p,A.d3(A.p(p,A.x(A.a([A.A(r,B.l,p,B.e,B.h,0,p,p),B.b3,A.d(e,p,2,p,p,p,p,D.fCE,p,p,p),B.cQ,A.d(f,p,3,B.a2,p,p,p,D.fvw,p,p,p)],s),B.E,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a7(B.ay,B.aC,B.x,w,p,p),B.n),p,p,p,p,B.yU,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
Xt(d,e,f,g,h,i){return this.aaq(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.N8(s.gT2()),p=s.gT2(),o=C.aRk(s.e),n=C.hgO(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e2R(s),k=C.hHo(p,1).length,j=C.hHz(p,1).length,i=C.hIt(p,1).length,h=B.c.j(0.07),g=A.l(20),f=A.K(B.cT.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,K.ac2,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.fA7,r,r,r),a0=q.b.length,a1=x.p
g=A.p(r,A.A(A.a([e,B.bb,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.Wb,r,r,r)],a1),B.E,r,B.e,B.h,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.q1,r,r,r),D.fZ7],a1),B.l,r,B.e,B.h,0,B.p)],a1),B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.o(h,r,f,g,r,r,B.n),r,r,r,r,B.bH,r,r,r)
f=s.Xt("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aD,new C.e2S(s,p),l.$1("kahoot"))
h=s.Xt("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lF,new C.e2T(s,p),l.$1("fire"))
a0=s.Xt("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.wp,new C.e2U(s,p),l.$1("catch"))
j=j!==0?new C.e2X(s,p):r
j=s.aaq("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hI,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e2Y(s,p):r
i=s.aaq("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.lE,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.Xt("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.fn,new C.e2Z(s,p),l.$1("journey"))
k=k!==0?new C.e3_(s,p):r
k=A.a([g,B.aO,D.h27,B.P,A.l_(0.98,A.a([f,h,a0,j,i,e,s.aaq("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.ep,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.Xt("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d5,new C.e30(s,p),l.$1("school"))],a1),2,12,12,r,B.e_,!0),B.da,A.A(A.a([D.bKM,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fuS,r,r,r)],a1),B.l,r,B.e,B.h,0,r,r),B.P],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.I)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.ay(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fJJ,B.bb,new A.by(1,B.ba,A.x(A.a([A.d(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hu,r,r,r),A.d(""+v.gapO(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.F3,r,r,r)],a1),B.E,r,B.e,B.h,0,B.p),r)],a1)
if(v.gapO(0).length>=2){f=D.lG.j(0.2)
t=new A.ay(D.lG,1,B.r,-1)
g.push(A.az(r,A.p(r,A.W(B.he,D.lG,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bG(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e31(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cT.j(0.2)
t=new A.ay(B.cT,1,B.r,-1)
f=A.az(r,A.p(r,A.W(B.jb,B.cT,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bG(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e32(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fi.j(0.2)
t=new A.ay(B.fi,1,B.r,-1)
B.d.u(g,A.a([B.bn,f,B.bn,A.az(r,A.p(r,A.W(B.ej,B.fi,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bG(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e33(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.p(r,new A.c7(B.aM,B.e,B.h,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bG(u,u,u,u),new A.be(h,h,h,h),r,r,B.n),r,r,r,B.d9,B.bj,r,r,r))}if(s.a.e){j=m?new C.e2V(s):new C.e2W(a2)
i=A.l(18)
h=A.K(m?B.cT:B.aT,B.r,2)
g=m?B.cT.j(0.12):B.dq
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.az(r,A.p(r,A.as(A.d(f,r,r,r,r,r,r,A.m(r,r,m?B.cT:B.aF,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.n),r,r,r,r,B.Oi,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.h33)
k.push(B.aB)
k.push(D.atK)
return new C.tH("Family Games \xb7 "+p.b,A.cw(k,r,r,D.bEY,r,r,B.ah,!1),B.f6,r)}}
C.a09.prototype={
a7(){return"_KPhase."+this.b}}
C.aml.prototype={
S(){return new C.amm(D.b1x)},
gd1(){return this.e}}
C.amm.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a2()},
fX(d){var w,v=this
v.m(new C.bSS(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.dg(B.fL,new C.bST(v))},
aQf(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.m(new C.bSI(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.dg(B.fg,new C.bSJ(w))},
Ld(d){var w
if(this.d!==D.adu)return
w=this.at
if(w!=null)w.a1(0)
this.b6Z(d)},
b6Z(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.j.V(500+500*B.j.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bSO(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cz(B.t0,v.giA(v))},
cLL(d){var w=this
if(w.d!==D.Xg)return
if(w.e+1>=w.a.w.length)w.YM()
else{w.m(new C.bSP(w))
w.aQf()}},
YM(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$YM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bH1(p,u.w,t)
u.m(new C.bSL(u,s))
w=2
return A.b(C.BQ(u.a.e,s),$async$YM)
case 2:r=e
t=u.a
w=3
return A.b(C.BR(t.e,t.f,t.r,u.f),$async$YM)
case 3:q=e
if(u.c!=null)u.m(new C.bSM(u,r,q))
return A.h(null,v)}})
return A.i($async$YM,v)},
cMA(){var w,v,u,t,s=this,r=s.a,q=new A.e_()
q.cU(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.b5("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.e0(r,q)
for(r=A.cX(r,0,A.dD(4,"count",x.S),A.U(r).c),u=r.$ti,r=new A.bQ(r,r.gJ(0),u.k("bQ<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b5(t,B.j.V(w*(0.35+q.ai()*0.5)),!1))}B.d.b_(v,new C.bSQ())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b1x===r){w=A.a([D.fZw,B.T,A.d(s,t,t,t,t,t,t,B.Wl,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.fv_,t,t,t))
w.push(B.aB)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.B7,B.K,t,t))
w.push(B.e2)
w.push(C.uy("Play",u.geX(u),B.cT,B.he,D.fB))
w=A.as(new A.D(B.eA,A.x(w,B.l,t,B.e,B.N,0,B.p),t),t,t,t)
break A}if(D.b1y===r){w=A.as(A.d(""+u.z,t,t,t,t,t,t,D.fDb,t,t,t),t,t,t)
break A}if(D.adu===r||D.Xg===r){w=u.csc()
break A}if(D.b1z===r){w=u.ccY()
break A}w=t}return new C.tH(s,w,B.f6,t)},
csc(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.Xg,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aWs,j,j,j),B.b3],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.L5,j,j,j))
g.push(B.as)
f=A.l(14)
g.push(A.p(j,A.d(""+k.f,j,j,j,j,j,j,B.iH,j,j,j),B.f,j,j,new A.o(B.bw,j,j,f,j,j,B.n),j,j,j,j,B.CB,j,j,j))
g=A.A(g,B.l,j,B.e,B.h,0,j,j)
f=A.l(6)
w=i?0:B.j.D(k.as/k.a.w[k.e].r,0,1)
f=A.bu(f,A.kr(B.bw,j,k.as<5?B.fi:B.cT,9,j,w,j),B.aq)
w=A.l(22)
v=A.K(B.cT,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.m(j,j,e?D.lG:G.np,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.P,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.fu3,B.K,j,j)],h),B.l,j,B.e,B.N,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fFm,B.K,j,j)
w=A.E(A.p(j,A.as(u,j,j,j),B.f,j,j,new A.o(D.qp,j,v,w,j,j,B.n),j,j,j,j,B.fu,j,j,1/0),3)
v=A.a([],h)
for(u=k.giA(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bSN(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aDR[o]
m=new A.aP(16,16)
l=new A.ay(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.d(D.aEa[o],j,j,j,j,j,j,D.fvZ,j,j,j),B.as,new A.by(1,B.ba,A.d(r[t],j,3,B.a2,j,j,j,D.fuX,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(Q.asd)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bZB)
v.push(A.az(j,new A.SZ(A.p(j,new A.c7(B.aM,B.e,B.h,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bG(l,l,l,l),new A.be(m,m,m,m),W.aCf,j,B.n),j,j,j,j,B.f4,j,j,j),p,B.b0,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.am,f,B.af,w,B.af,A.E(A.l_(1.45,v,2,10,10,j,B.e_,!1),4)],h)
if(i)h.push(D.ewq)
return new A.D(B.a14,A.x(h,B.l,j,B.e,B.h,0,B.p),j)},
ccY(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cMA(),m=x.p,l=A.a([D.bdB,A.as(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.q1,o,o,o),o,o,o),A.as(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.VY,o,o,o),o,o,o),B.aO],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cT.j(0.25):B.dq
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.cT:B.bw,1,B.r,-1)
q=A.d(w<3?D.dka[w]:""+(w+1),o,o,o,o,o,o,B.mC,o,o,o)
s=s?B.u:B.O
l.push(A.p(o,new A.c7(B.aM,B.e,B.h,B.l,o,B.p,o,0,A.a([new A.a5(34,o,q,o),new A.by(1,B.ba,A.d(t.a,o,o,o,o,o,o,new A.G(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.d(""+t.b,o,o,o,o,o,o,B.iH,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bG(r,r,r,r),new A.be(u,u,u,u),o,o,B.n),o,o,o,B.cw,B.eV,o,o,o))}l.push(B.T)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.Iw(m,v,p.CW,o))
l.push(B.aO)
l.push(A.as(C.uy("Back to the games",new C.bSK(p),B.cT,B.kb,D.fB),o,o,o))
return A.cw(l,o,o,B.fu,o,o,B.ah,!1)}}
C.U8.prototype={
S(){return new C.ami(A.T(x.de,x.er))}}
C.ami.prototype={
gDc(){var w,v=this,u=v.d
if(u===$){w=C.hmK(v.a.c.aj())
v.d!==$&&A.bD()
v.d=w
u=w}return u},
glV(d){var w,v,u=this,t=u.e
if(t===$){w=u.gDc().b
v=$.ax()
u.e!==$&&A.bD()
t=u.e=new A.au(new A.ba(w,B.b6,B.aP),v)}return t},
cfZ(d){return this.f.c4(0,d,new C.bSi(d))},
Y(){this.a3()
var w=this.gDc().c
if(w.length===0)w.push(C.h8l(null,0,20,""))},
t(){var w,v,u=this.glV(0)
u.U$=$.ax()
u.R$=0
for(u=this.f,u=new A.dn(u,u.r,u.e);u.C();)for(w=J.aT(u.d);w.C();){v=w.gP(w)
v.U$=$.ax()
v.R$=0}this.a2()},
cLB(){if(this.gDc().c.length>=12)return
this.m(new C.bSj(this))},
jH(d){var w,v,u=this,t=u.gDc()
t.b=B.a.i(u.glV(0).a.a)
w=t.gapO(0)
if(t.b.length===0||w.length<2){u.c.L(x.q).f.T(D.fmZ)
return}v=t.c
B.d.a8(v)
B.d.u(v,w)
v=u.c
v.toString
A.a6(v,!1).N(t)},
B(d){var w,v,u=this,t=null,s=new C.bSt(),r=x.p,q=A.a([A.bO(!1,D.fOL,t,t,!0,t,t,t,u.gbqK(u),t,t)],r),p=A.a([D.h2F,B.af,A.aN(t,B.Z,!1,t,!0,B.t,t,A.aO(),u.glV(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ak,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ac,t,t,t,t,t,t,t,t,t,t,t,B.h6,!0,B.a7,t,B.ao,t,t,t,t),B.aB],r)
for(w=0;v=u.gDc().c.length,w<v;++w)B.d.u(p,A.a([new A.fh(new C.bSs(u,w,s),t)],r))
if(v<12)p.push(A.as(C.uy("\uff0b Add a question",u.gcLA(),B.aT,t,B.c),t,t,t))
return new C.tH("Make your game",A.cw(p,t,t,D.bEV,t,t,B.ah,!1),q,t)}}
C.ars.prototype={
S(){return new C.aFC(A.a([],x._))},
bv(){return this.r.$0()},
qt(){return this.w.$0()},
ge3(){return this.c}}
C.aFC.prototype={
Y(){var w,v
this.a3()
this.wz()
w=this.a
v=w.c
if(v.length!==0)C.a8r(v,w.e,w.d.w)},
wp(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hjz(r,t.e,!1,s.w,new C.e4t(u),null,s),$async$wp)
case 2:w=3
return A.b(u.wz(),$async$wp)
case 3:return A.h(null,v)}})
return A.i($async$wp,v)},
a0W(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a0W=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hjz(r,t.e,!0,s.w,new C.e4s(u),null,s),$async$a0W)
case 2:w=3
return A.b(u.wz(),$async$a0W)
case 3:return A.h(null,v)}})
return A.i($async$a0W,v)},
wz(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wz=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Bj(q.a.c),$async$wz)
case 7:p=e
if(q.c!=null)n=q.e||J.cJ(p)
else n=!1
if(n)q.m(new C.e4v(q,p))
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
return A.b(C.Hm(q.a.c).dg(0,B.qB),$async$wz)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.e4w(q,o))
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
if(q.c!=null&&q.e)q.m(new C.e4x(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wz,v)},
Pl(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Pl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.L(s).f.T(D.fmz)
w=3
return A.b(C.Hm(t.a.c),$async$Pl)
case 3:r=e
w=4
return A.b(C.fYP(t.a.c,r),$async$Pl)
case 4:q=e
w=5
return A.b(C.Hm(t.a.c),$async$Pl)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.e4r(t,p))
o=t.c.L(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(null,null,null,q?B.dK:B.d0,null,B.t,null,s,null,B.lK,null,null,null,null,null,null,null,null,null,null))
t.a.qt()
case 1:return A.h(u,v)}})
return A.i($async$Pl,v)},
IA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.itE(l),$async$IA)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hXI(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b1I(q,p.e,l,"Each family tree costs $"+B.j.ad(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$IA)
case 4:if(!e||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
p=C.hDB(r)
o=Date.now()
n=t.a.c
m=new C.kZ(l,r.toUpperCase(),p,!0,B.Z,D.DV,new A.V(o,0,!1),0,n,D.uO,B.ce)
w=5
return A.b(C.a46(n,m),$async$IA)
case 5:w=6
return A.b(t.wz(),$async$IA)
case 6:t.a.bv()
t.a.qt()
if(t.c==null){w=1
break}t.F6(m)
case 1:return A.h(u,v)}})
return A.i($async$IA,v)},
F6(d){return this.ckU(d)},
ckU(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$F6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Bj(u.a.c),$async$F6)
case 2:n=l.nC(k.dI(f,new C.e4u(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hC(m,new C.arm(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$F6)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a46(u.a.c,o),$async$F6)
case 6:case 5:w=7
return A.b(u.wz(),$async$F6)
case 7:u.a.qt()
return A.h(null,v)}})
return A.i($async$F6,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.uk(p)
if(r.e)return A.as(A.n7(q,p?B.bu:B.bh,q,q,q,q,q,q,q,q),q,q,q)
if(J.ct(r.d)){w=p?B.ef:B.c
v=A.l(15)
u=A.aG(!1,B.a3,!0,q,A.aM(!1,q,!0,A.p(q,D.bXc,B.f,q,q,new A.o(B.aV.j(0.12),q,A.K(B.aV,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cS,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcjY(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Gn(A.p(q,A.x(A.a([u,B.aO,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.m(q,q,p?B.bu:B.bh,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.e2,A.bI(D.h5U,q,r.gaTy(),A.bo(B.bQ,q,q,q,q,q,Av.a1s,q,new A.b9(A.l(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.h,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bHE,q,q,1/0),15,B.ag,1.05,D.adh,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b3],v)
if(J.cJ(r.d))w.push(A.aI(q,q,q,q,A.W(B.zK,B.aV,q,q,q,q),q,q,q,new C.e4z(r),q,q,q,q,"Sync family trees with database",q))
if(J.cJ(r.d))w.push(A.aI(q,q,q,q,A.W(B.zG,B.aV,q,q,q,q),q,q,q,r.gahh(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dh(E.at8,q,D.fM1,r.gaTy(),A.bo(B.bQ,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.h,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.Gn(r.cHK(J.t(r.d,s),o),14,B.ag,1,D.adh,q))
B.d.u(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.l,q,B.e,B.h,0,B.p)],v),B.E,q,B.e,B.h,0,B.p)},
cHK(d,e){var w=null,v=e.a,u=v?B.ef:B.c,t=A.l(14),s=A.K((v?B.eh:B.bO).j(0.55),B.r,1),r=A.a([new A.ab(0,B.G,B.w.j(v?0.35:0.08),B.et,10)],x.V),q=A.l(14),p=A.p(w,D.bWh,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.l(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaqO(),m=d.d?"":" \xb7 Public",l=d.y===D.kY?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bF,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.h,0,B.p),1)
return A.p(w,A.aG(!1,B.a3,!0,w,A.aM(!1,q,!0,new A.D(B.bH,A.A(A.a([p,B.bb,l,A.W(B.Pd,v?B.bu:B.bh,w,w,w,w)],k),B.l,w,B.e,B.h,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e4y(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.arm.prototype={
S(){return new C.aFz(A.a([],x._),A.aR(x.N),A.bap())},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aFz.prototype={
Y(){var w,v,u=this
u.a3()
u.d=u.a.w
u.adU()
w=u.a
v=w.c
if(v.length!==0)C.a8r(v,w.e,w.d.w)},
t(){var w=this.w
w.U$=$.ax()
w.R$=0
this.a2()},
a3U(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3U=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yA("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e3U(r),s,null,!0,!0,x.y),$async$a3U)
case 3:if(e!==!0||t.c==null){w=1
break}t.Ka()
t.m(new C.e3V(t,r))
w=4
return A.b(t.uz(),$async$a3U)
case 4:t.a.bv()
t.yA(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a3U,v)},
cxn(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aU.x1$.push(new C.e3P(w,f,d,e))},
aVR(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dr()
u.eb(w,v,0,1)
u.k7(q,q,1,1)
this.w.sp(0,u)},
bdD(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eM(new Float64Array(16))
q.e6(r)
w=q.Dh()
v=B.j.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dr()
t.eb(r,u,0,1)
t.k7(v,v,1,1)
t.eb(-r,-u,0,1)
t.iY(0,q)
s.sp(0,t)},
adU(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$adU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Bj(u.a.c),$async$adU)
case 2:t=s.nC(r.dI(e,new C.e3g(u)))
if(t!=null&&u.c!=null)u.m(new C.e3h(u,t))
return A.h(null,v)}})
return A.i($async$adU,v)},
yA(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
wp(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.hjz(o,t,!1,r,new C.e3y(u),q.a,s),$async$wp)
case 2:n=A
m=J
w=3
return A.b(C.Hm(u.a.c),$async$wp)
case 3:p=n.nC(m.dI(e,new C.e3z(u)))
if(p!=null&&u.c!=null)u.m(new C.e3A(u,p))
return A.h(null,v)}})
return A.i($async$wp,v)},
Ka(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cH(w,0)},
uz(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a46(t,s),$async$uz)
case 2:return A.h(null,v)}})
return A.i($async$uz,v)},
a2q(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a2q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.uz(q,t.a.c)){t.yA("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.iuR(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a2q)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Ka()
t.m(new C.e3O(t,r))
w=4
return A.b(t.uz(),$async$a2q)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2q,v)},
b3F(){var w=this.c
w.toString
A.a6(w,!1).ce(A.ed(new C.e3v(this),!1,null,x.H))},
a19(){return this.ckW()},
ckW(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a19=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.uz(m,t.a.c)){t.yA("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.P(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Y(s,new C.e3L(),A.U(s).k("Y<1>")).gJ(0)
s=A.eu([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("ci.E"))
B.d.ff(p)
s=t.c
s.toString
w=3
return A.b(A.bT(B.L,null,new C.e3M(n,t,new C.uk(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a19)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.Ka()
t.m(new C.e3N(t,o))
w=6
return A.b(t.uz(),$async$a19)
case 6:case 5:if(o.a&&t.c!=null)t.b3F()
case 1:return A.h(u,v)}})
return A.i($async$a19,v)},
WN(d){return this.bEj(d)},
bEj(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.uz(r,t.a.c)){t.yA("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e34(t,d),r,null,!0,!0,x.P),$async$WN)
case 3:s=f
if(s==null){w=1
break}t.Ka()
t.m(new C.e35(t,s))
w=4
return A.b(t.uz(),$async$WN)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WN,v)},
a4f(d){return this.cJZ(d)},
cJZ(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a4f=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.cg(null,null,!0,null,new C.e3X(u,d,new C.uk(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a4f)
case 2:return A.h(null,v)}})
return A.i($async$a4f,v)},
chb(d){var w=this,v=w.d
v===$&&A.c()
if(C.uz(v,w.a.c))w.P0(d)
else w.a4f(d)},
ajN(d,e){return this.cBl(d,e)},
cBl(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ajN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.e3R(new C.uk(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ajN)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ajN,v)},
IF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$IF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kY?3:5
break
case 3:w=6
return A.b(C.h6x(t.a.c),$async$IF)
case 6:s=e
o=t.a
r=C.hrC(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ajN(!s,!r),$async$IF)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aRr(o,t.a.c)){t.yA("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.ls(o,"Cancel","Remove",q.y===D.kY?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$IF)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aRn(t.a.c,t.d.a),$async$IF)
case 11:t.a.bv()
o=t.c
if(o==null){w=1
break}A.j2(o,null)
case 1:return A.h(u,v)}})
return A.i($async$IF,v)},
abm(d){return this.bPz(d)},
bPz(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$abm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.uz(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aU(s,new C.e36(p))){o=A.U(s)
p.a=A.nC(new A.cM(new A.Y(s,new C.e37(d),o.k("Y<1>")),new C.e38(),o.k("cM<1,n>")))}q=p.a
if(q==null)q=d.d
t.Ka()
t.m(new C.e39(t,s,d,q))
w=3
return A.b(t.uz(),$async$abm)
case 3:t.yA(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$abm,v)},
P0(d){return this.bRN(d)},
bRN(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$P0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.uz(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a4f(d),$async$P0)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.e3d(t,d),r,null,!0,!0,x.P),$async$P0)
case 6:s=f
if(s==null){w=1
break}t.Ka()
t.m(new C.e3e(t,s))
w=7
return A.b(t.uz(),$async$P0)
case 7:case 1:return A.h(u,v)}})
return A.i($async$P0,v)},
cI9(){var w=this,v=w.d
v===$&&A.c()
if(!C.uz(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.e3W(w))
w.uz()},
ZQ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aRr(n,t.a.c)){t.yA("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.ax()
r=new A.au(B.aw,s)
q=t.d.e
p=A.bp(new A.N(q,t.gcfF(),A.U(q).k("N<1,n>")).c_(0,new C.e3q()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e3r(t,new C.uk(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$ZQ)
case 3:o=e
r.U$=s
r.R$=0
if(o!==!0||t.c==null){w=1
break}t.Ka()
t.m(new C.e3s(t,p))
w=4
return A.b(t.uz(),$async$ZQ)
case 4:t.yA("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$ZQ,v)},
cfG(d){return B.a.i(d.toLowerCase())},
cjI(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.uz(v,w)
t=r.d
s=C.ik2(t)
C.itI(q,t.b,u,C.ik1(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.uk(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Y(l,new C.e43(),A.U(l).k("Y<1>")).gJ(0)
l=n?B.c4:B.hY
v=A.W(B.a2C,n?B.bu:B.bh,o,o,o,18)
u=x.p
v=A.a([new A.D(B.CC,A.aM(!1,o,!0,new A.D(B.hN,A.A(A.a([v,B.bn,A.d("Back to Family Trees",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,o,o,o,B.a9,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.N,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e44(p,d),o,o,o,o,o,o,o),o),new A.D(B.nI,p.c21(m),o)],u)
if(p.d.y===D.kY){t=B.ty.j(0.15)
s=A.l(12)
r=A.K(B.ty.j(0.45),B.r,1)
q=C.Hk(p.d,p.a.c)
v.push(new A.D(B.yX,A.p(o,A.A(A.a([D.c0L,B.as,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,12,o,o,B.a9,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.hO,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b3],u)
if(C.uz(p.d,p.a.c)&&p.e.length!==0)u.push(new C.Gz("Undo",B.pE,p.gcI8(),m,o,o))
u.push(new C.Gz("Family Book",D.bQX,p.gcjH(),m,B.uo,o))
u.push(new C.Gz("Family games",B.nO,p.gcjT(),m,B.aD,o))
if(C.uz(p.d,p.a.c))u.push(new C.Gz("Display settings",B.Dt,p.gckV(),m,B.b2,o))
u.push(new C.Gz("Sync",B.zG,p.gahh(),m,o,o))
t=p.d
if(t.y===D.kY||C.aRr(t,p.a.c)){t=p.d.y===D.kY?"Remove shared tree":"Delete tree"
u.push(new C.Gz(t,B.ej,p.gbPJ(),m,B.fi,o))}if(C.uz(p.d,p.a.c))u.push(new C.Gz("Add member",B.wV,new C.e45(p),m,B.bQ,o))
v.push(new A.D(Z.amU,A.A(u,B.l,o,B.e,B.h,0,o,o),o))
if(p.d.gaqO()===0){u=A.as(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cm(new C.e46(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.W(n?O.a2G:A5.Pe,o,o,o,o,o)
v.push(A.as(A.ht(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e47(p),o),o,o,o))}return A.c4(o,l,A.bm(!0,A.x(v,B.E,o,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c21(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.l(22)
v=A.a([new A.ab(0,B.G,B.fX.j(0.35),B.dp,18)],x.V)
u=A.l(22)
t=A.ao(-26,A.W(B.zx,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aG(!1,B.a3,!0,m,A.aM(!1,m,!0,A.p(m,D.c44,B.f,m,m,new A.o(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cS,!0,m,m,m,m,m,m,m,m,m,m,m,n.gahh(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.fx1,m,m,m)
r=r.gaqO()
p=n.d.gaqO()===1?"member":"members"
o=x.p
p=A.a([s,B.bb,A.E(A.x(A.a([q,B.bF,A.d(""+r+" "+p,m,m,m,m,m,m,A.m(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a9,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.h,0,B.p),1)],o)
if(C.uz(n.d,n.a.c))p.push(A.aI(m,m,m,m,D.c0Z,m,m,m,n.gcuL(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.h,0,m,m)
r=n.d.d
q=r?B.jL:B.n5
r=r?"Private":"Public"
r=A.E(n.axm(q,"Privacy",r,n.a.d.w?n.gcH4():m),1)
q=A.E(n.axm(B.x_,"Tree code",n.d.c,new C.e3f(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.ae,q,B.ae,A.E(n.axm(D.bSE,"Collaborators",p,n.gc6R()),1)],o),B.l,m,B.e,B.h,0,m,m)],o)
if(n.d.y===D.kY){s=B.c.j(0.15)
B.d.u(p,A.a([B.P,A.aG(!1,B.a3,!0,A.l(999),A.aM(!1,A.l(999),!0,new A.D(B.hm,A.A(A.a([A.W(B.nP,B.c,m,m,m,14),B.e6,A.d("View only",m,m,m,m,m,m,B.aWx,m,m,m)],o),B.l,m,B.e,B.N,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.p(m,A.bu(u,new A.an(B.a0,m,B.ad,B.t,A.a([t,new A.D(B.H5,A.x(p,B.E,m,B.e,B.h,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.c8o,B.n),m,m,m,m,m,m,m,1/0)},
axm(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aG(!1,B.a3,!0,A.l(14),A.aM(!1,A.l(14),!0,new A.D(K.ao8,A.x(A.a([A.W(d,B.c,w,w,w,18),B.ax,A.d(e,w,1,B.a2,w,w,w,A.m(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.tV,A.d(f,w,1,B.a2,w,w,w,An.xz,w,w,w)],x.p),B.l,w,B.e,B.h,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.bh9.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gau(r)&&s.c.length===0)return B.bM
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bhc(s,t),new A.av(w,v))],x.p)
r=r.gdP(r)
B.d.u(u,r.dN(r,new C.dhU(this),x.l))
r=s.c
B.d.u(u,new A.N(r,new C.dhV(this),A.U(r).k("N<1,v>")))
return new A.D(B.uK,new A.a5(w,v,new A.an(B.a0,t,B.ad,B.f,u,t),t),t)}}
C.KZ.prototype={}
C.GD.prototype={}
C.bhb.prototype={
gbm9(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aLe.prototype={}
C.bhc.prototype={
bRo(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.S()
v=A.L()
v.r=B.bE.j(0.75).gp(0)
v.c=2
v.d=B.bG
d.ah(new A.r(n,w),new A.r(m,w),v)
u=(n+m)/2
t=new A.aH(q.r,B.aj,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.aZ(u,q))
s=w-1.1
r=w-8.8
t.E(new A.kn(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.kn(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bw())
q=A.L()
q.r=B.c.gp(0)
d.O(new A.r(u,w),9,q)
q=A.L()
q.r=B.bE.gp(0)
d.af(t,q)},
bRl(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b_(a0,new C.die())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aU(a0,new C.dif(f))
t=new A.N(a0,new C.dig(f),A.U(a0).k("N<1,H>")).c_(0,new C.dih()).cF(0,1/0,B.ru)
w=f.a
d.ah(f,new A.r(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.I)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.r(o,v),p,e)
continue}l=J.lL(n)
k=Math.min(10,m/2)
m=$.S()
j=A.a([],r)
i=new A.aH(m.r,B.aj,null,null,j)
j.push(new A.aZ(w,v-k))
i.ab()
m=l*k
h=new A.ce(w,v,w+m,v)
j.push(h)
g=i.f
if(g!=null)h.ak(g)
i.ab()
m=new A.aq(o-m,v)
j.push(m)
h=i.f
if(h!=null)m.ak(h)
i.ab()
m=new A.ce(o,v,o,v+k)
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
$.S()
w=A.L()
w.r=B.bQ.j(0.75).gp(0)
w.c=2.2
w.b=B.aa
w.d=B.bG
w.e=B.dP
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.I)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bRl(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.I)(v),++t){r=v[t]
if(r.c)this.bRo(d,w,r.a,r.b)}},
aE(d){return d.b!==this.b}}
C.bkY.prototype={
gcd_(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aEr
switch(w.c.a){case 0:return D.d1m
case 1:return D.ddL
case 2:return D.dw5}},
gcd2(){var w=this.c,v=C.hCM(w.w),u=C.hCM(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gcd_(),p=t.c,o=N.bFC(p.f),n=t.gcd2(),m=x.V,l=A.a([new A.ab(0,B.G,B.d.gal(q).j(0.35),B.cJ,10)],m),k=r?B.av:B.c,j=A.K(r?B.av:B.c,B.r,2)
if(o!=null)w=A.tL(B.z,s,B.cl,B.c1,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.z,A.d(v,s,s,s,s,s,s,A.m(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a7(B.a5,B.a8,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hZ(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a7(B.ay,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.CR,s,s,56)],v)
k=t.d
if(k>0){j=A.l(10)
w=A.K(r?B.av:B.c,B.r,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fHQ,s,s,s),B.f,s,s,new A.o(B.ci,s,w,j,s,s,B.n),s,s,s,s,D.bJA,s,s,s),s,s,s,-6,-4,s))}k=r?B.cs:B.c
j=A.l(8)
w=A.K(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ab(0,B.G,B.w.j(r?0.3:0.06),B.dL,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.m(s,s,r?B.c:B.cs,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.m(s,s,r?B.aR:B.bh,s,s,s,s,s,s,s,s,7.5,s,s,B.a9,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.az(s,new A.a5(84,112,A.x(A.a([new A.an(B.a0,s,B.ad,B.f,l,s),B.ax,A.p(s,A.x(p,B.l,s,B.e,B.N,0,B.p),B.f,s,D.b7L,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bJL,s,s,s)],v),B.l,s,B.e,B.h,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bge.prototype={
a4(d,e){var w,v,u,t,s
$.S()
w=A.L()
v=this.b
u=v?B.c:D.bkO
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.O(new A.r(s,t),1,w)},
aE(d){return d.b!==this.b}}
C.bz1.prototype={
B(d){var w=this,v=null,u=new C.fod(w),t=w.c,s=t?B.cs:B.c,r=A.l(12),q=u.$3(B.i_,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bw:B.fr,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.wX,"Zoom out",w.e)
return A.aG(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bw:B.fr,v,v,v,1,v,v,v,v,v,22),u.$3(B.aqB,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.N,0,B.p),B.f,s,4,v,B.dB,v,v,v,B.ai)}}
C.boj.prototype={
B(d){var w=this,v=null,u=B.bQ.j(0.15),t=A.K(B.bQ,B.r,2),s=w.e,r=x.p
t=A.az(v,A.p(v,A.x(A.a([A.W(s?O.a2G:A5.Pe,B.bQ,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fDR,v,v,v)],r),B.l,v,B.b8,B.h,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fBC,B.K,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.u(t,new A.N(s,new C.eZf(w),A.U(s).k("N<1,v>")))
B.d.u(u,t)}return new A.a5(84,v,A.x(u,B.l,v,B.e,B.h,0,B.p),v)}}
C.a0m.prototype={
S(){return new C.aE1()},
bv(){return this.Q.$0()},
ge3(){return this.w}}
C.aE1.prototype={
Y(){var w,v,u,t,s,r=this,q=null
r.a3()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.ax()
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
r.y=t==null?D.z9:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.ilx(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
t(){var w,v=this,u=v.d
u===$&&A.c()
w=u.U$=$.ax()
u.R$=0
u=v.e
u===$&&A.c()
u.U$=w
u.R$=0
u=v.f
u===$&&A.c()
u.U$=w
u.R$=0
u=v.r
u===$&&A.c()
u.U$=w
u.R$=0
u=v.w
u===$&&A.c()
u.U$=w
u.R$=0
u=v.x
u===$&&A.c()
u.U$=w
u.R$=0
v.a2()},
Qv(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Qv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hrC(p.y,p.w)
w=3
return A.b(A.lD(t.a.w,B.JK),$async$Qv)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b1I(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Qv)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hXJ(p.y,p.w)
t.a.bv()
case 5:w=7
return A.b(A8.Hw(78,800),$async$Qv)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dyb(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Qv,v)},
cd1(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.i_(B.o.v(1000*Date.now()),w,D.z9,null,null,null,"","","","","",1,!1,0)
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
s=v.aGq(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).N(s)},
aaY(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aaY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dya(r),s,null,!0,!0,x.y),$async$aaY)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$aaY,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.uk(j),h=l.a.e,g=A.U(h).k("Y<1>"),f=A.C(new A.Y(h,new C.dyk(l),g),g.k("M.E"))
h=j?B.ef:B.c
g=A.l(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bI_,A.d(w,k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.ha(A.aM(!1,k,!0,new A.D(B.lP,A.W(B.ej,B.pr,k,k,k,17),k),B.cS,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbMj(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jZ:B.iO
t=N.bFC(l.as)
if(l.as==null)s=A.W(B.py,j?B.bu:B.bh,k,k,k,40)
else s=k
s=A.as(A.az(k,new A.an(B.a0,k,B.ad,B.t,A.a([A.he(u,t,s,k,42),A.ao(0,A.he(B.bQ,k,D.bVl,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gccZ(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.c()
t=C.aE3(t,"Full name",B.mi,1,1,i,B.mA)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.T,new C.bkW(i,u,new C.dyl(l),k)],v),B.l,k,B.e,B.h,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bBk],q)
o=l.a.e
B.d.u(p,new A.N(o,new C.dym(),A.U(o).k("N<1,eL<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bBm],q)
B.d.u(q,new A.N(f,new C.dyo(),A.U(f).k("N<1,eL<n?>>")))
o=A.x(A.a([t,B.am,new C.aev(i,r,"Who is their parent?",p,new C.dyp(l),k,o),B.aB,n,B.am,new C.aev(i,m,"Who is their spouse / partner?",q,new C.dyq(l),k,o)],v),B.al,k,B.e,B.h,0,B.p)
q=l.f
q===$&&A.c()
q=C.aE3(q,"Birth date",D.apM,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aE3(m,"Birth place",B.a2W,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aE3(n,"Date of death (if deceased)",D.arR,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aE3(p,"Occupation",B.Qd,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.z,k,B.ad,B.t,w,k),B.aB,s,B.bx,new C.aew(i,"Identity",u,k),B.af,new C.aew(i,"Family links",o,k),B.af,new C.aew(i,"Life details",A.x(A.a([q,B.T,m,B.T,n,B.T,p,B.T,C.aE3(r,"Notes",B.l_,5,3,i,k)],v),B.l,k,B.e,B.h,0,B.p),k),B.af,new C.aE2(i,"Child order",l.cl9(l.at),new C.dyr(l),new C.dys(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hgC(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dyt(l):k
B.d.u(r,A.a([B.T,new C.aE2(i,"Visible in tree",u,w,new C.dyu(l),k)],v))}r.push(B.T)
w=j?B.jZ:B.iO
u=A.l(14)
t=A.K(j?B.eh:B.bO,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iU(k,B.bQ,k,B.ag,k,new C.dyv(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,O.amz,k,k,k))
r.push(B.bx)
w=j?B.aS:B.av
j=j?B.eh:B.bO
r.push(A.A(A.a([A.E(A.dV(B.o7,new C.dyn(d),A.dj(k,k,k,k,k,k,k,k,k,w,k,k,B.co,k,new A.b9(A.l(14),B.a1),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bb,A.E(A.bI(D.feb,k,l.gcd0(),A.bo(B.aV,k,k,0,B.c,k,B.co,k,new A.b9(A.l(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.h,0,k,k))
r.push(B.ax)
return A.ek(B.f6,k,B.ag,h,new A.a5(420,k,A.c9(A.x(r,B.al,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),k),D.anr,k,B.amL,new A.b9(g,B.a1),k,k)},
cl9(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aew.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jZ:B.iO,s=A.l(16)
return A.x(A.a([new A.D(B.a1w,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.K(v?B.eh:B.bO,B.r,1),s,w,w,B.n),w,w,w,w,B.bj,w,w,1/0)],x.p),B.E,w,B.e,B.h,0,B.p)}}
C.bkX.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.ef:B.c,r=A.l(12),q=A.K((t?B.eh:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.m(u,u,t?B.aS:B.av,u,u,u,u,u,u,u,u,14,u,u,B.a9,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aN(u,B.Z,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bz(u,B.eM,u,B.t6,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.m(u,u,t?B.bu:B.bh,u,u,u,u,u,u,u,u,u,u,u,B.cD,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.W(v.f,B.bQ,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ak,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ac,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a7,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aev.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.ef:B.c,s=A.l(12),r=A.K((u?B.eh:B.bO).j(0.85),B.r,1),q=A.W(B.th,u?B.bu:B.bh,v,v,v,v),p=A.m(v,v,u?B.aS:B.av,v,v,v,v,v,v,v,v,14,v,v,B.a9,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.ef:B.c
return A.p(v,new A.Ep(A.a5C(v,o,A.d(w.f,v,v,v,v,v,v,A.m(v,v,u?B.bu:B.bh,v,v,v,v,v,v,v,v,v,v,v,B.cD,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.kW,v,v,v)}}
C.bkW.prototype={
B(d){var w=new C.dyw(this)
return A.A(A.a([w.$3(D.wJ,"Male",B.PZ),B.ae,w.$3(D.oB,"Female",B.PL),B.ae,w.$3(D.z9,"Other",B.nM)],x.p),B.l,null,B.e,B.h,0,null,null)}}
C.aE2.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jZ:B.iO,r=A.l(14),q=A.K(t?B.eh:B.bO,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.m(v,v,t?B.aS:B.av,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bh,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.h,0,B.p),1),new C.aKg(u,B.wX,w.f,v),B.bn,new C.aKg(u,B.i_,w.r,v)],o),B.l,v,B.e,B.h,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ez,v,v,v)}}
C.aKg.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bQ.j(0.12)
else w=s.c.a?B.ef:B.c
v=A.l(10)
u=A.l(10)
if(p)t=B.bQ
else t=(s.c.a?B.bu:B.bh).j(0.4)
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,new A.a5(36,36,A.W(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.aex.prototype={
bVA(d){switch(d.a){case 0:return B.bQ
case 1:return B.bE
case 2:return B.cC}},
bVB(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b_o(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
AO(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.ef:B.c
u=A.l(12)
t=A.K((w?B.eh:B.bO).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.u(r,A.a([A.W(f,B.bQ,p,p,p,18),B.as],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.m(p,p,w?B.bu:B.bh,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.ax,A.d(o,p,p,p,p,p,p,A.m(p,p,w?B.aS:B.av,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.h,0,B.p),1))
return A.p(p,A.A(r,B.E,p,B.e,B.h,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cw,B.yT,p,p,1/0)},
afE(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jZ:B.iO,s=A.l(16),r=A.K(v?B.eh:B.bO,B.r,1)
return A.x(A.a([new A.D(B.a1w,u,w),A.p(w,A.x(e,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bU,w,w,1/0)],x.p),B.E,w,B.e,B.h,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hIg(r,q),o=q.c,n=t.bVA(o),m=N.bFC(q.f),l=t.e.a,k=l?B.ef:B.c,j=A.l(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.m(s,s,l?B.aS:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kY?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.m(s,s,l?B.bu:B.bh,s,s,s,s,s,s,s,s,12,s,s,B.a9,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.ab(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.as(A.p(s,A.he(u,m,m==null?A.W(B.py,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.eC,s,s,s),s,s,s)
w=n.j(0.14)
v=A.l(20)
u=A.K(n.j(0.45),B.r,1)
v=A.as(A.p(s,A.d(t.bVB(o),s,s,s,s,s,s,A.m(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.lN,s,s,s),s,s,s)
u=x.p
i=A.a([t.AO("Full name",i,B.mi)],u)
if(p>0)i.push(t.AO("Child order","#"+p,B.PR))
r=A.a([h,B.ax,r,B.aO,l,B.T,v,B.bx,t.afE("Identity",i),B.af,t.afE("Life details",A.a([t.AO("Birth date",q.w,D.apM),t.AO("Birth place",q.x,B.a2W),t.AO("Date of death",q.y,D.arR),t.AO("Occupation",q.z,B.Qd)],u)),B.af,t.afE("Family links",A.a([t.AO("1. Parent",t.b_o(q.d),B.Hw),t.AO("2. Spouse",t.b_o(q.e),B.HM)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.u(r,A.a([B.af,t.afE("Notes",A.a([t.AO("Notes",q,B.l_)],u))],u))
r.push(B.bx)
r.push(A.bI(B.Lf,s,new C.dyG(d),A.bo(B.aV,s,s,s,s,s,B.co,s,new A.b9(A.l(14),B.a1),s,s,s)))
return A.eG(s,k,new A.cN(B.m3,A.c9(A.x(r,B.al,s,B.e,B.N,0,B.p),B.t,s,B.y,s,s,B.wD,s,s,B.ah),s),s,s,s,B.H8,s,B.d6,s,new A.b9(j,B.a1),s)}}
C.Gz.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bu:B.bh
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.uM,A.ha(A.aG(!1,B.a3,!0,A.l(8),A.aM(!1,A.l(8),!0,new A.a5(30,30,A.W(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u),u)}}
C.arp.prototype={
f2(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.U(w).k("N<1,a9<n,@>>")
w=A.C(new A.N(w,new C.cfV(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jp(w,new C.cfW(),t,x.fO))
return s}}
C.arq.prototype={
S(){return new C.aFB(A.a([],x.bF))},
gd1(){return this.c}}
C.aFB.prototype={
Y(){this.a3()
this.Kh()},
Kh(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Kh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cfZ(t.a.c),$async$Kh)
case 3:r=e
w=4
return A.b(C.Bj(t.a.c),$async$Kh)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.ro(q,new C.e4g(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.e4h(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Kh,v)},
z8(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
L5(d,e){return this.cKF(d,e)},
cKF(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$L5=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.e4l(q,e))
t=3
w=6
return A.b(d.$0(),$async$L5)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.e4m(q))
$.eY.mJ()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$L5,v)},
YA(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pA(r,s.c,s.e),$async$YA)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.L5(new C.e4d(t),"Preparing download\u2026"),$async$YA)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YA,v)},
YE(d){return this.bTs(d)},
bTs(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pA(r,s.c,s.e),$async$YE)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.L5(new C.e4e(t,d),"Preparing file\u2026"),$async$YE)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YE,v)},
ahE(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ahE=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xN.cp().MQ(B.T_,B.uP,!0),$async$ahE)
case 7:r=e
o=r
q=o==null?null:J.fm(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jN(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.ac(m)
$.am.$1("[family tree sync pick] file_picker: "+A.w(p))
w=6
break
case 3:w=2
break
case 6:u=A.Hv()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahE,v)},
Zi(d){return this.c2X(d)},
c2X(d){var w=0,v=A.j(x.H),u=this
var $async$Zi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.L5(new C.e4f(u,d),"Restoring family trees\u2026"),$async$Zi)
case 2:return A.h(null,v)}})
return A.i($async$Zi,v)},
Zh(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Zh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ahE(),$async$Zh)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Zi(s),$async$Zh)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zh,v)},
a3h(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3h=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pA(r,s.c,s.e),$async$a3h)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.L5(new C.e4k(t),"Creating QR code\u2026"),$async$a3h)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3h,v)},
a2T(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2T=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DC()){t.z8("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).ce(A.ed(new C.e4i(),!0,null,x.N)),$async$a2T)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Zi(r),$async$a2T)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2T,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.C0:B.hY,m=o?D.al_:B.aS,l=o?B.aL:B.bO,k=o?B.aS:B.av,j=new C.dii(n,m,l,k,o?B.bP:B.bh)
l=A.aI(p,p,p,p,A.W(B.eK,k,p,p,p,20),p,p,p,new C.e4o(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eR(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.m(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.u(t,A.a([A.E(C.dhR(!0,B.ju,B.aG,B.aG,q.r?p:q.gcB9(),j,s,"Show restore QR"),1),B.as],u))}s=q.e
r=q.r?p:q.gcxi()
t.push(A.E(C.dhR(!s,B.jv,B.b7,B.bf,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.h,0,p,p)
r=A.a([],u)
if(q.e)B.d.u(r,A.a([A.E(C.dhR(!1,B.hP,B.aV,B.bQ,q.r?p:q.gbTl(),j,"Photos & books included","Download all trees"),1),B.as],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dhR(!1,R.zH,B.at,B.aQ,q.r?p:q.gc2U(),j,s,"Upload backup file"),1))
l=A.a([new C.bha(v,l,p),B.l9,new C.adL(j,"QR restore",p),B.T,t,B.da,new C.adL(j,"Backup files",p),B.T,A.A(r,B.l,p,B.e,B.h,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.l9,new C.adL(j,"One tree",p),B.T],u)
B.d.u(v,J.b8(q.d,new C.e4p(q,j),x.l))
B.d.u(l,v)}l=A.a([A.cw(l,p,p,B.a1o,p,p,B.ah,!1)],u)
if(q.r){v=A.l(18)
t=A.K(B.aV.j(0.35),B.r,1)
s=A.a([new A.ab(0,B.G,B.w.j(o?0.3:0.1),B.dp,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bm(!0,A.p(p,A.A(A.a([O.aUT,B.bb,A.E(A.d(r,p,p,p,p,p,p,A.m(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.h,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.CJ,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c4(w,n,new A.an(B.a0,p,B.ad,B.t,l,p),p,!1,!1,p,p)}}
C.dii.prototype={}
C.bha.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.l(24)
u=A.a([new A.ab(0,B.G,B.aV.j(0.32),B.kE,28)],x.V)
t=A.ao(p,A.W(B.va,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.l(18)
q=x.p
return A.p(p,new A.an(B.a0,p,B.ad,B.t,A.a([t,new A.D(B.ac,A.A(A.a([A.p(p,D.c3y,B.f,p,p,new A.o(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.p5,A.E(A.x(A.a([D.fN5,B.P,A.d(w,p,p,p,p,p,p,A.m(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.h,0,B.p),1)],q),B.E,p,B.e,B.h,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.cbI,B.n),p,p,p,p,p,p,p,p)}}
C.adL.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ae,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)}}
C.bh8.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.l(18),n=A.l(18),m=r.c,l=r.y,k=l?B.aG.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.ab(0,B.G,B.aG.j(0.1),B.cJ,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.l(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aG(!1,B.a3,!0,q,A.aM(!1,o,!0,A.eC(A.d3(new A.D(E.a12,A.x(A.a([A.p(q,A.W(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.ta,q,q,q),B.af,A.d(r.e,q,q,q,q,q,q,A.m(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bF,A.d(r.f,q,q,q,q,q,q,A.m(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cD,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.h,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)}}
C.bhd.prototype={
B(d){var w=this,v=null,u=A.l(18),t=A.l(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aV.j(0.14),p=A.l(12),o=s.e,n=x.p
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,A.eC(new A.D(B.eV,A.A(A.a([A.p(v,D.c2K,B.f,v,v,new A.o(q,v,A.K(B.aV.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.ta,v,v,v),B.bb,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.m(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.m(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.h,0,B.p),1),A.W(B.hP,o,v,v,v,20)],n),B.l,v,B.e,B.h,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)}}
C.a0G.prototype={
S(){return new C.aFA()},
gd1(){return this.c}}
C.aFA.prototype={
Y(){this.a3()
this.aav()},
aav(){var w=0,v=A.j(x.H),u=this,t
var $async$aav=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b4m(u.a.c,B.Ex),$async$aav)
case 2:t=e
if(u.c!=null)u.m(new C.e48(u,t))
return A.h(null,v)}})
return A.i($async$aav,v)},
aj5(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aj5=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.e49(q))
t=4
p=A.htm(q.a.d,B.Ex)
if(p==null){n=A.bc("Could not read this QR code.")
throw A.X(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.atH(n.e,m,l,B.Ex,p,n.f),$async$aj5)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.e4a(q))
q.c.L(x.q).f.T(D.fnN)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ac(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(B.a.ek(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e4b(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aj5,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.ny:B.qq,n=p?B.iJ:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eR(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.h2z,q,q,q,1,q,!0)
w=A.l(24)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.qf(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.m(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.P,u,B.bx,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.m(q,q,p?B.aR:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.b8,B.h,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.ac,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.m(q,q,p?B.ab:B.by,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcx1()
if(u)u=B.KF
else u=A.W(r.e===!0?B.hd:B.apL,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a5(1/0,q,A.em(u,q,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cd,q,q,q),t,A.dj(q,q,q,q,q,q,q,q,q,B.aV,q,B.hg,q,q,q,new A.ay(B.aV.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.ig,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.m(q,q,p?B.aF:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.T)
w.push(new A.a5(1/0,q,A.bI(B.B8,q,new C.e4c(d),A.bo(B.aV,q,q,q,q,B.hg,q,q,q,q,q,q)),q))
return A.c4(m,o,new A.D(B.ac,A.x(w,B.l,q,B.e,B.h,0,B.p),q),q,!1,!1,q,q)}}
C.a0H.prototype={
S(){return new C.bms(A.zS(B.yI,B.oe,B.vi))}}
C.bms.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return A.c4(A.eR(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fVj,w,w,w,1,w,!0),B.w,A.zR(this.d,B.c1,new C.e4q(this,d)),w,!1,!1,w,w)}}
C.b0d.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.m(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.St,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lY.prototype={}
C.a7t.prototype={
S(){return new C.bm6(null,null)}}
C.bm6.prototype={
Y(){var w=this,v=null
w.a3()
w.d=A.bn(v,B.t0,v,1,v,w)
w.e=A.bn(v,B.nC,v,1,v,w)
w.a.toString
w.d.cK(0)
w.e.cK(0)},
bz(d){var w,v,u=this
u.bK(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cK(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cK(0)},
t(){var w=this.d
w===$&&A.c()
w.t()
w=this.e
w===$&&A.c()
w.t()
this.bzx()},
B(d){var w,v,u=this,t=B.d.dL(D.a72,new C.dQi(u),new C.dQj())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cDG(A.c6(new A.hb(A.a([w,v],x.dS)),new C.dQk(u,t),null),!0)}}
C.bm5.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b45(d,e)
break
case"house":p.mm(d,e,D.diU)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdi()
$.S()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.O(new A.r(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.ms(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.BB(d,e,12)
p.yK(d,e,B.li,5,14)
break
case"grocery":p.clT(d,e)
break
case"calculator":p.clA(d,e)
break
case"lumber":p.cm0(d,e)
break
case"kitchen":p.clW(d,e)
break
case"landscape":p.mm(d,e,D.djw)
s=new A.aH($.S().r,B.aj,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.aZ(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.ce(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.ce(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.aq(t,w))
s.E(new A.aq(0,w))
s.E(new A.bw())
w=A.L()
w.r=B.ep.j(0.85).gp(0)
d.af(s,w)
p.BB(d,e,8)
p.yK(d,e,B.iz,4,18)
break
case"plumbing":p.cm9(d,e)
break
case"electrical":p.mm(d,e,D.dvg)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.S()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aF(new A.a4(0,0,0+e.a,0+e.b),u)
p.ms(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.ms(d,e,B.or.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.BB(d,e,10)
break
case"store":p.cmj(d,e)
break
case"paint_remodel":p.cm4(d,e)
break
case"roofing":p.cmb(d,e)
break
case"warehouse":p.cmr(d,e)
break
case"vehicles":p.cmo(d,e)
break
case"farm":p.clN(d,e)
break
case"restaurant":p.cma(d,e)
break
case"tools":p.cmm(d,e)
break
case"wallet":p.cmq(d,e)
break
case"concrete":p.clG(d,e)
break
case"blueprint":p.cly(d,e)
break
default:p.b45(d,e)}},
mm(d,e,f){var w,v=new A.a4(0,0,0+e.a,0+e.b)
$.S()
w=A.L()
w.san(new A.a7(B.ay,B.aC,B.x,f,null,null).aD(0,v))
d.aF(v,w)},
ms(d,e,f,g,h){var w,v,u,t=new A.r(e.a/2,e.b/2),s=e.gdi()/2-h
$.S()
w=A.L()
w.b=B.aa
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cQ(A.bV(t,s),u,u+0.1439896632895322-u,!1,w)}},
yK(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdi()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.S()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.O(new A.r(q+t*o,p+s*o),3.5,r)}},
BB(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.j.F(t*0.17,0.9)
q=B.j.F(t*0.23,0.85)
$.S()
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.O(new A.r(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b45(d,e){var w,v=this
v.mm(d,e,D.dtx)
w=v.c
v.ms(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.ms(d,e,B.bL.j(0.45),-w*3.141592653589793*1.4,22)
v.bRh(d,e,B.hK,w)
v.yK(d,e,B.c.j(0.7),6,8)},
bRh(d,e,f,g){var w,v,u,t,s,r
$.S()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.aF(new A.a4(16,r,t,r+3),w)}},
clT(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mm(d,e,D.cxp)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.ar(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=D.dh0[B.o.F(t,4)].j(0.85).gp(0)
d.O(new A.r(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.ms(d,e,B.c.j(0.35),w,16)
l.yK(d,e,B.iz,5,12)},
clA(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mm(d,e,D.cxx)
w=i.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdi()
$.S()
q=A.L()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.O(new A.r(t/2,s/2),r*(0.18+u*0.08),q)
p=A.fE(h,B.cx,h,h,h,h,B.a7,B.c_,h,B.dJ,B.c0)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dlk[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb3(0,new A.eq(r,h,h,B.cL,h,h,h,h,h,h,new A.G(!0,q,h,h,h,h,14+m*4,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eo()
p.a4(d,new A.r(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ar(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cxz[o]
l=B.kN.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb3(0,new A.eq(m,h,h,B.cL,h,h,h,h,h,h,new A.G(!0,l,h,h,h,h,12+k*3,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eo()
p.a4(d,new A.r(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ar(o,3)*0.38)+Math.sin(n)*6))}i.ms(d,e,B.c.j(0.35),w*1.5,14)
i.ms(d,e,B.ey.j(0.55),-v*3.141592653589793*2,8)
i.ms(d,e,B.on.j(0.4),r*2.8,22)
i.yK(d,e,B.pm,8,10)
i.BB(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.j.F(w+o*0.22,0.9)
$.S()
v=new A.ar(B.S,B.Q,B.V,B.X,B.U)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.r(12,j),new A.r(t,j),v)}},
cm0(d,e){var w,v,u,t,s,r,q,p,o=this
o.mm(d,e,W.aBy)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bx(new A.a4(20,r,u,r+10),B.iF)
$.S()
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=A.ap(B.fZ,B.oh,(s+1)/2).gp(0)
d.aq(q,p)}o.ms(d,e,B.fZ.j(0.35),w,15)
o.BB(d,e,8)},
clW(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mm(d,e,D.dhw)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.j.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.j.F(s*0.13,0.7)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.O(new A.r(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.ms(d,e,B.bL.j(0.4),-w*3.141592653589793*2.2,11)
l.yK(d,e,B.qf,4,14)},
cm9(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mm(d,e,D.d5v)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.j.F(s,0.12)
$.S()
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.b=B.aa
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.O(new A.r(w,u),q*(0.12+r*0.14+p),o)}n.yK(d,e,B.pq,6,12)
n.ms(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
cmj(d,e){var w,v,u,t,s,r,q,p=this
p.mm(d,e,D.cLi)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bx(new A.a4(r,14,r+u,22),B.jy)
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=A.ap(B.fA,B.bL,(s+1)/2).gp(0)
d.aq(r,q)}p.ms(d,e,B.c.j(0.3),w,16)
p.BB(d,e,8)
p.yK(d,e,B.wj,5,13)},
cm4(d,e){var w,v,u,t,s,r,q
this.mm(d,e,D.dbY)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.j.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bx(new A.a4(r,q,r+8,q+(18+s*22)),B.ir)
$.S()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=[B.ix,B.dy,B.bL,B.ew][t].j(0.85).gp(0)
d.aq(q,r)}this.ms(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cmb(d,e){var w,v,u,t,s,r,q
this.mm(d,e,D.d9i)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.j.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.r(u*(0.1+r),s),new A.r(u*(0.18+r),s+10),q)}this.yK(d,e,B.cA,7,11)},
cmr(d,e){var w,v,u,t,s,r,q,p
this.mm(d,e,D.cO4)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bx(new A.a4(q,p,q+(t-s*8),p+16),B.iF)
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=A.ap(B.cA,B.aS,(Math.sin(r)+1)/2).gp(0)
d.aq(p,q)}this.ms(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cmo(d,e){var w,v,u,t,s,r,q
this.mm(d,e,D.dzB)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.j.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.bx(new A.a4(s,r,s+28,r+8),B.iF)
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.aq(r,q)}this.BB(d,e,6)},
clN(d,e){var w,v,u,t,s,r,q,p
this.mm(d,e,D.dg4)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.S()
s=A.L()
s.r=B.or.j(0.75).gp(0)
d.O(new A.r(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=B.hI.j(0.85).gp(0)
p.c=3
d.ah(new A.r(q,v),new A.r(q+s*6,t),p)}this.ms(d,e,B.or.j(0.35),w,14)},
cma(d,e){var w,v,u,t,s,r,q=this
q.mm(d,e,D.diI)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bW(new A.r(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.S()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=B.c.j(0.22).gp(0)
d.c0(s,r)}q.yK(d,e,B.qf,5,16)
q.BB(d,e,7)},
cmm(d,e){var w,v,u,t,s,r,q,p,o=this
o.mm(d,e,D.dwU)
w=o.c
v=w*3.141592653589793
o.ms(d,e,B.oh.j(0.55),v*3,10)
o.ms(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.S()
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=B.oh.j(0.8).gp(0)
d.O(new A.r(v+r*34,u+q*22),4,p)}},
cmq(d,e){var w,v,u,t,s,r,q,p,o=this
o.mm(d,e,D.dAk)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bx(new A.a4(q,p,q+36,p+22),B.jy)
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=A.ap(B.iz,B.or,r).gp(0)
d.aq(p,q)}o.BB(d,e,9)
o.ms(d,e,B.c.j(0.4),w*2.2,12)},
clG(d,e){var w,v,u,t,s,r,q,p
this.mm(d,e,D.doi)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bV(new A.r(v,u),34)
$.S()
s=A.L()
s.b=B.aa
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cQ(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=B.bO.j(0.85).gp(0)
d.O(new A.r(v+t*34,u+s*34),3,p)}},
cly(d,e){var w,v,u,t,s,r,q
this.mm(d,e,D.djQ)
$.S()
w=A.L()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=0;t<v;t+=18)d.ah(new A.r(t,0),new A.r(t,u),w)
for(s=0;s<u;s+=18)d.ah(new A.r(0,s),new A.r(v,s),w)
r=this.c
q=u*B.j.F(r*0.85,1)
$.S()
u=A.L()
u.r=B.dy.j(0.45).gp(0)
d.aF(new A.a4(0,q,0+v,q+6),u)
this.ms(d,e,B.li.j(0.45),-r*3.141592653589793*2,11)},
aE(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.aus.prototype={
a0x(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0x=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aSk(),$async$a0x)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a9M(s),$async$a0x)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a0x,v)},
ahF(d){return this.coJ(d)},
coJ(d){var w=0,v=A.j(x.H),u=this,t
var $async$ahF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.itS(d),$async$ahF)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ahF,v)},
B(d){var w,v,u=null,t=A.P(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.I?B.jZ:B.iO
w=x.p
v=A.a([C.aSI(!0,B.rr,1/0,B.qM,u,s,1/0)],w)
if(!r)v.push(new A.bM(new A.o(u,u,u,u,u,new A.a7(B.aZ,B.b4,B.x,A.a([B.L,B.w.j(0.35)],x.O),u,u),B.n),B.bi,new A.bK(B.aZ,u,u,new A.D(B.t3,A.d("Pick a theme or your own photo",u,u,u,u,u,u,A.m(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,B.aCx,u,u),u,u,u),u),u),u))
v.push(A.ao(8,A.A(A.a([A.E(A.dh(D.bX5,u,D.fJd,new C.cpq(this,d),A.bo(B.aV,u,u,u,B.c,u,B.k6,u,u,u,u,B.cg)),1),B.ae,A.E(A.em(D.c4R,u,D.fYv,this.gcfD(),A.dj(u,u,B.w.j(0.35),u,u,u,u,u,u,B.c,u,u,B.k6,u,u,D.b6j,u,u,u,B.cg)),1)],w),B.l,u,B.e,B.h,0,u,u),u,u,8,8,u,u))
return new A.fH(1.7777777777777777,A.aG(!1,B.a3,!0,B.rr,new A.an(B.a0,u,B.b1,B.t,v,u),B.aq,t,0,u,u,u,u,u,B.ai),u)}}
C.aNG.prototype={
aX(){this.b7()
this.b5()
this.dI()},
t(){var w=this,v=w.b8$
if(v!=null)v.a6(0,w.gdC())
w.b8$=null
w.a2()}}
C.aVE.prototype={}
C.aVD.prototype={}
C.aTG.prototype={}
C.a_k.prototype={
S(){return new C.aAL()}}
C.aAL.prototype={
Y(){var w,v,u=this
u.a3()
u.a.toString
w=new A.ba("",B.b6,B.aP)
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.au(w,v)},
t(){var w=this.d
w===$&&A.c()
w.U$=$.ax()
w.R$=0
this.a2()},
KV(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.L(x.q).f.T(D.foi)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).N(new C.aVE(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.ef:B.c,k=A.l(20),j=A.p(n,D.c4w,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.l(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.m(n,n,m?B.aS:B.av,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bF,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bh,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.h,0,B.p),1)
j=A.A(A.a([j,B.bb,i,A.aI(n,n,n,n,A.W(B.cB,m?B.bu:B.bh,n,n,n,n),n,n,n,new C.d9t(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.h,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bh,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bh,n,n,n,n,n,n,n,n,11,n,n,B.cD,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.htC(new C.d9u(o),o.e)
u=o.d
u===$&&A.c()
t=A.m(n,n,m?B.aS:B.av,n,n,n,n,n,n,n,n,n,n,n,B.a9,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jZ:B.iO
r=A.l(12)
q=A.l(12)
p=m?B.eh:B.bO
t=A.aN(n,B.Z,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bz(n,new A.b6(4,r,B.du),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d9v(o),n,!1,n,n,!1,n,!0,n,B.ac,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a7,n,A_.KO,n,n,n,n)
u=m?B.aS:B.av
m=m?B.eh:B.bO
return A.eG(n,l,new A.cN(B.m3,A.c9(A.x(A.a([j,B.aO,i,B.ax,w,B.P,v,B.aO,t,B.bx,A.A(A.a([A.E(A.dV(B.ds,new C.d9w(d),A.dj(n,n,n,n,n,n,n,n,n,u,n,n,B.co,n,new A.b9(A.l(12),B.a1),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.as,A.E(A.bI(D.fYL,n,o.ga3D(),A.bo(B.aV,n,n,n,B.c,n,B.co,n,new A.b9(A.l(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.h,0,n,n)],h),B.E,n,B.e,B.N,0,B.p),B.t,n,B.y,n,n,B.CL,n,n,B.ah),n),n,n,n,A1.CM,n,B.d6,n,new A.b9(k,B.a1),n)}}
C.a_j.prototype={
S(){return new C.aAK()}}
C.aAK.prototype={
Y(){this.a3()
var w=$.ax()
this.d!==$&&A.aQ()
this.d=new A.au(B.aw,w)},
t(){var w=this.d
w===$&&A.c()
w.U$=$.ax()
w.R$=0
this.a2()},
KV(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.L(x.q).f.T(D.flU)
return}v=this.c
v.toString
A.a6(v,!1).N(new C.aVD(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.ef:B.c,n=A.l(20),m=A.p(q,D.c0Q,B.f,q,q,new A.o(B.bQ.j(0.15),q,q,A.l(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bF,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.m(q,q,p?B.bu:B.bh,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.h,0,B.p),1)
m=A.A(A.a([m,B.bb,l,A.aI(q,q,q,q,A.W(B.cB,p?B.bu:B.bh,q,q,q,q),q,q,q,new C.d9p(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.h,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.l(12)
v=A.K(B.aV.j(0.25),B.r,1)
u=A.W(B.apx,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.as,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,12,q,q,B.a9,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.h,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bH,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,q,q,q,B.a9,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jZ:B.iO
t=A.l(12)
s=A.l(12)
r=p?B.eh:B.bO
v=A.aN(q,B.Z,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bz(q,new A.b6(4,t,B.du),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d9q(this),q,!1,q,q,!1,q,!0,q,B.ac,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a7,q,B.la,q,q,q,q)
w=p?B.aS:B.av
p=p?B.eh:B.bO
return A.eG(q,o,new A.cN(B.m3,A.c9(A.x(A.a([m,B.aO,l,B.aB,v,B.bx,A.A(A.a([A.E(A.dV(B.ds,new C.d9r(d),A.dj(q,q,q,q,q,q,q,q,q,w,q,q,B.co,q,new A.b9(A.l(12),B.a1),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.as,A.E(A.bI(D.h4Q,q,this.ga3D(),A.bo(B.bQ,q,q,q,B.c,q,B.co,q,new A.b9(A.l(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.h,0,q,q)],k),B.E,q,B.e,B.N,0,B.p),B.t,q,B.y,q,q,B.CL,q,q,B.ah),q),q,q,q,A1.CM,q,B.d6,q,new A.b9(n,B.a1),q)}}
C.ZR.prototype={
S(){return new C.azr()}}
C.azr.prototype={
Y(){var w,v=this
v.a3()
w=$.ax()
v.d!==$&&A.aQ()
v.d=new A.au(B.aw,w)
v.e!==$&&A.aQ()
v.e=new A.au(new A.ba("1",B.b6,B.aP),w)
v.f!==$&&A.aQ()
v.f=new A.au(B.aw,w)
v.r!==$&&A.aQ()
v.r=new A.au(B.aw,w)},
t(){var w,v=this,u=v.d
u===$&&A.c()
w=u.U$=$.ax()
u.R$=0
u=v.e
u===$&&A.c()
u.U$=w
u.R$=0
u=v.f
u===$&&A.c()
u.U$=w
u.R$=0
u=v.r
u===$&&A.c()
u.U$=w
u.R$=0
v.a2()},
gKc(){var w,v=this.e
v===$&&A.c()
w=A.cW(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gakP(){var w=this.f
w===$&&A.c()
w=A.cW(B.a.i(w.a.a))
return w==null?0:w},
gb6U(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aR7(d){var w,v=B.j.D(this.gKc()+d,0.25,999999),u=B.j.fK(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.v(B.j.M(v))
else{u=B.j.ad(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb3(0,u)
this.m(new C.cHL())},
aA7(d,e,f,g){var w=null,v=g!=null?A.W(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jZ:B.iO,s=A.l(14),r=A.l(14)
u=u?B.eh:B.bO
return A.bz(w,new A.b6(4,s,B.du),w,B.bH,w,w,w,w,!0,new A.b6(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.l(14),B.aeO),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
cfE(d,e,f){return this.aA7(d,e,f,null)},
KV(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gakP()<=0){s.c.L(x.q).f.T(D.fqd)
return}r=s.c
r.toString
v=s.gKc()
u=s.gakP()
t=s.gb6U()
A.a6(r,!1).N(new C.aTG(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.uk(n),l=n?B.ef:B.c,k=A.l(24),j=x.O,i=A.a([B.aV.j(0.22),B.bQ.j(0.14)],j),h=A.l(14)
i=A.p(o,D.bV1,B.f,o,o,new A.o(o,o,A.K(B.aV.j(0.35),B.r,1),h,o,new A.a7(B.a5,B.a8,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bF,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,12,o,o,B.cD,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.h,0,B.p),1)
i=A.A(A.a([i,B.bb,h,A.aI(o,o,o,o,A.W(B.cB,n?B.bu:B.bh,o,o,o,o),o,o,o,new C.cHR(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.h,0,o,o)
h=p.d
h===$&&A.c()
v=A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,o,o,o,B.a9,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aN(o,B.Z,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.aA7(m,"Item name (optional)","Lumber, paint, labor\u2026",B.PX),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,A_.KO,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jZ:B.iO
t=A.l(14)
s=A.K(n?B.eh:B.bO,B.r,1)
r=A.aI(o,o,o,o,A.W(B.wX,n?B.aS:B.av,o,o,o,20),o,o,o,new C.cHS(p),o,o,o,o,o,B.cg)
q=p.e
q===$&&A.c()
q=A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.c6p,B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.ea,o,o,o,1,o,o,!1,"\u2022",o,new C.cHT(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a5(52,o,q,o),A.aI(o,o,o,o,A.W(B.i_,n?B.aS:B.av,o,o,o,20),o,o,o,new C.cHU(p),o,o,o,o,o,B.cg)],w),B.l,o,B.e,B.N,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.as,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.aA7(m,"Amount","0.00",B.hA),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.ea,o,o,o,1,o,o,!1,"\u2022",o,new C.cHV(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a7,o,B.ao,o,o,o,o),1)],w),B.E,o,B.e,B.h,0,o,o)
t=x.gv
u=A.C(new A.N(D.dcu,new C.cHW(p,m),t),t.k("ak.E"))
i=A.a([i,B.bx,v,B.aB,h,B.P,s,B.af,A.bZ(B.bI,u,B.br,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.u(i,A.a([B.T,A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.cfE(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cHX(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,B.la,o,o,o,o)],w))}i.push(B.aO)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bQ.j(n?0.12:0.06)],j)
h=A.l(16)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gKc()===B.j.fK(p.gKc())?B.j.M(p.gKc()):p.gKc()
s=p.gb6U()
r=A.Bl(p.gakP())
i.push(A.p(o,A.A(A.a([A.E(A.x(A.a([u,B.ax,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,12,o,o,B.a9,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.h,0,B.p),1),C.bGr(p.gKc()*p.gakP(),B.b2,!1,B.u)],w),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a7(B.a5,B.a8,B.x,j,o,o),B.n),o,o,o,o,B.jr,o,o,o))
i.push(B.bx)
j=A.l(14)
h=n?B.eh:B.bO
h=A.dj(o,o,o,o,o,o,o,o,o,o,o,o,B.co,o,new A.b9(j,B.a1),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dV(A.d("Cancel",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cHY(d),h),1),B.as,A.E(A.dh(D.at0,o,D.h0K,p.ga3D(),A.bo(B.aV,o,o,0,B.c,o,B.co,o,new A.b9(A.l(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.h,0,o,o))
return A.eG(o,l,new A.cN(B.Me,A.c9(A.x(i,B.al,o,B.e,B.N,0,B.p),B.t,o,B.y,o,o,Ai.t8,o,o,B.ah),o),o,o,o,B.Ox,o,B.d6,o,new A.b9(k,B.a1),o)}}
C.a2s.prototype={
S(){return new C.byU()}}
C.byU.prototype={
Y(){var w,v,u=this
u.a3()
w=u.a.e
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,B.b6,B.aP),v)},
t(){var w=this.d
w===$&&A.c()
w.U$=$.ax()
w.R$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=r?B.ef:B.c,p=A.l(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.m(s,s,r?B.aS:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.m(s,s,r?B.aS:B.av,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jZ:B.iO
v=A.aN(s,B.Z,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bz(s,new A.b6(4,A.l(12),B.du),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fnJ(t,d),s,!1,s,s,!1,s,!0,s,B.ac,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a7,s,B.ao,s,s,s,s)
u=A.E(A.dV(B.ds,new C.fnK(d),s),1)
r=A.bo(B.bQ,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eG(s,q,new A.D(B.CL,A.x(A.a([o,B.aB,v,B.aO,A.A(A.a([u,B.as,A.E(A.bI(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fnL(t,d),r),1)],w),B.l,s,B.e,B.h,0,s,s)],w),B.l,s,B.e,B.N,0,B.p),s),s,s,s,s,s,B.d6,s,new A.b9(p,B.a1),s)}}
C.acN.prototype={
a7(){return"WorksheetFrameStyle."+this.b}}
C.Gn.prototype={
S(){return new C.byS(null,null)}}
C.byS.prototype={
Y(){var w,v=this
v.a3()
w=A.bn(null,D.bBU,null,1,null,v)
w.cK(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBS()},
gbDt(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bQ,B.b2],x.O)
case 2:return A.a([B.bv,B.aV,B.b2],x.O)
case 3:return A.a([B.aG,B.ci,B.jG],x.O)
case 4:return A.a([B.fJ,B.bQ,B.fq],x.O)
case 0:return A.a([B.aV,B.bQ,B.b2],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.en(A.c6(v,new C.fnH(this,new C.uk(w.ax.a===B.I)),null),null)}}
C.azk.prototype={
S(){return new C.byT(null,null)}}
C.byT.prototype={
Y(){var w,v=this
v.a3()
w=A.bn(null,B.nD,null,1,null,v)
w.cK(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBT()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.fnI(this),null)}}
C.byR.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bx(new A.a4(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aP(w,w))
u=new A.aH($.S().r,B.aj,null,null,A.a([],x.v))
u.E(new A.ja(v))
w=A.L()
w.b=B.aa
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aq(v,w)
w=A.L()
w.b=B.aa
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.af(u,w)
w=A.BM(u)
t=A.a([],x.U)
w=new A.uR(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.bi(A.jL(y.B));--r
q=new A.BN(w,r)
w.jP()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aUI(d,q,r,o,0,0.2,4.2,0.92)
p.aUI(d,q,r,s,0.52,0.11,3.2,0.58)}},
aUI(d,e,f,g,h,i,j,k){var w,v,u,t=B.j.F(g+h,1)*f,s=A.hQJ(e.a.a,e,t,t+f*i,!0),r=A.ahT(s.glg().a.getBounds())
$.S()
w=A.L()
w.b=B.aa
w.c=j
w.d=B.bG
w.f=!0
v=this.f
u=k*this.e
w.san(new A.a7(B.a5,B.a8,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.IJ,null).aD(0,r))
d.af(s,w)},
aE(d){return d.b!==this.b||d.d!==this.d}}
C.aPO.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.aPP.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.uk.prototype={}
C.aur.prototype={
S(){return new C.aH6()},
ge3(){return this.c}}
C.aH6.prototype={
Y(){var w=this
w.a3()
w.d=w.a.d
w.aiw()},
t(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Mf(w,v)
this.a2()},
aiw(){var w=0,v=A.j(x.H),u=this,t,s
var $async$aiw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bES(t.c,t.d.a),$async$aiw)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eWp(u,s))
return A.h(null,v)}})
return A.i($async$aiw,v)},
QX(){var w=0,v=A.j(x.H),u=this,t,s
var $async$QX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eWg(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Mf(t,s),$async$QX)
case 2:if(u.c!=null)u.m(new C.eWh(u))
return A.h(null,v)}})
return A.i($async$QX,v)},
Ru(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Ru=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.eWn(t,new C.uk(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$Ru)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a9M(q),$async$Ru)
case 6:case 5:t.m(new C.eWo(t,r))
w=7
return A.b(t.QX(),$async$Ru)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Ru,v)},
WH(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.itD(r),$async$WH)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eWb(t,new C.rt(B.o.v(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.QX(),$async$WH)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WH,v)},
ckK(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hIc(t,new C.eWf(u),w,v)},
acj(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bG(new A.ay(v,2.5,B.r,-1),B.a1,B.a1,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b65,w,w,B.n),w,22,w,w,w,w,w,22)},
abl(d){return this.bPw(d)},
bPw(d){var w=0,v=A.j(x.H),u=this
var $async$abl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eWe(u,d))
w=2
return A.b(u.QX(),$async$abl)
case 2:return A.h(null,v)}})
return A.i($async$abl,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.c4:B.hY,d=A.l(8),a0=A.W(Y.a2D,f?B.bu:B.bh,g,g,g,16),a1=x.p
a0=A.aM(!1,d,!0,new A.D(B.He,A.A(A.a([a0,B.bn,A.d("Back to Projects",g,g,g,g,g,g,A.m(g,g,f?B.bu:B.bh,g,g,g,g,g,g,g,g,g,g,g,B.a9,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.N,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eWq(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a_(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b1,B.t,A.a([A.bu(A.l(22),C.aSI(!0,A.l(22),1/0,B.qM,g,d,1/0),B.aq),A.ao(10,A.dh(D.bZK,g,D.h37,h.gb4Q(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.hn,g,new A.b9(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.l(22)
w=x.V
v=A.a([new A.ab(0,B.G,B.aV.j(f?0.5:0.38),B.eR,22),new A.ab(-4,B.G,B.bQ.j(0.2),B.J,32)],w)
u=A.l(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ab(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.l(16)
r=h.d
v=A.p(g,A.p(g,A.bu(s,new A.an(B.a0,g,B.b1,B.t,A.a([C.aSI(!0,A.l(16),1/0,B.Pp,g,r.c,1/0),new A.bM(new A.o(g,g,g,g,g,new A.a7(B.aZ,B.b4,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bi,g,g),A.ao(g,h.acj(!0),g,g,8,g,8,g),A.ao(g,A.cEq(h.acj(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cEq(h.acj(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cEq(h.acj(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dh(D.bVD,g,D.fXt,h.gb4Q(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.hn,g,new A.b9(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.c86,B.n),g,g,g,g,B.lP,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.m(g,g,f?B.aS:B.av,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.l(22)
u=x.O
u=f?A.a([D.bh_,B.ol,B.hk],u):A.a([B.b2,B.aV,B.bQ],u)
t=x.V
s=A.a([new A.ab(0,B.G,B.aV.j(f?0.45:0.35),B.eR,24)],t)
r=A.l(22)
p=A.ao(g,A.W(B.js,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.l(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.m(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.hl,g,g,g)],a1),B.l,g,B.e,B.h,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.m(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bGr(h.d.gxK(),B.c,!0,B.u)],a1)
if(q>0)B.d.u(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.m(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cD,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.h,0,B.p),1)
n=A.l(14)
m=A.l(14)
l=B.c.j(0.12)
k=A.K(B.h9.j(0.75),B.r,1.6)
t=A.a([new A.ab(0,B.G,B.aG.j(0.28),B.cJ,14)],t)
j=B.aG.j(0.22)
i=A.l(10)
u=A.p(g,A.bu(r,new A.an(B.a0,g,B.ad,B.t,A.a([p,new A.D(D.bGM,A.A(A.a([o,B.as,A.aG(!1,B.a3,!0,g,A.aM(!1,n,!0,A.eC(new A.D(V.wB,A.x(A.a([A.p(g,D.asA,B.f,g,g,new A.o(j,g,A.K(B.aG.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cp,g,g,g),B.fD,D.fM3],a1),B.l,g,B.e,B.N,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gckJ(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.ai)],a1),B.l,g,B.e,B.h,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a7(B.ay,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fH(1.7777777777777777,d,g),B.aO,w,B.P,u,B.bx,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.m(g,g,f?B.aS:B.av,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b3,A.dh(Au.a4u,g,D.fJU,h.gbDX(),A.bo(B.aV,g,g,g,B.c,g,B.hO,g,new A.b9(A.l(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.h,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.ef:B.c
v=A.l(14)
u=A.K(f?B.eh:B.bO,B.r,1)
t=A.W(B.a2Z,f?B.bu:B.bh,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.m(g,g,f?B.aS:B.av,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.T,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.m(g,g,f?B.bu:B.bh,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.h,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.qI,g,g,1/0))}else B.d.u(d,new A.N(w,new C.eWr(h,new C.uk(f)),A.U(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.Cx,A.as(A.n7(g,f?B.bu:B.bh,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c4(g,e,A.bm(!0,A.x(A.a([new A.D(B.CC,a0,g),A.E(A.c9(A.x(d,B.E,g,B.e,B.h,0,B.p),B.t,g,B.y,g,g,E.z_,g,g,B.ah),1)],a1),B.E,g,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bHD(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.ef:B.c,p=A.l(16),o=A.a([new A.ab(0,B.G,B.w.j(r?0.35:0.08),B.cJ,12)],x.V),n=A.l(16),m=A.p(u,u,B.f,u,u,D.b8Q,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.l(12)
l=A.p(u,A.W(s?B.ii:B.h3,B.b2,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bM
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.m(u,u,r?B.aS:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd0k()
v=A.Bl(d.d)
B.d.u(t,A.a([B.ax,A.d(w+" "+v,u,u,u,u,u,u,A.m(u,u,r?B.bu:B.bh,u,u,u,u,u,u,u,u,12,u,u,B.a9,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.b8,B.N,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bQ.j(0.1)],x.O)
w=A.l(12)
k=A.p(u,C.bGr(d.c*d.d,B.b2,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a7(B.a5,B.a8,B.x,k,u,u),B.n),u,u,u,u,B.hn,u,u,u)
w=x.p
return A.p(u,A.bu(n,new A.EO(A.A(A.a([m,A.E(new A.D(B.ams,A.A(A.a([l,B.bb,t,B.ae,k,A.aI(u,u,u,u,A.W(B.cB,(r?B.bu:B.bh).j(0.75),u,u,u,20),u,u,u,new C.eWc(this,d),u,u,u,u,u,B.cg)],w),B.l,u,B.e,B.h,0,u,u),u),1)],w),B.al,u,B.e,B.h,0,u,u),u),B.aq),B.f,u,D.b7H,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d9,u,u,u,u)}}
C.aeS.prototype={
F1(d){return this.bQU(d)},
bQU(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$F1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pA(d,o,!1),$async$F1)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).N(null)
w=4
return A.b(A.bN(Ah.Cv,null,x.H),$async$F1)
case 4:s=t.d
w=5
return A.b(C.fXw(!0,o,s),$async$F1)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Hi(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$F1)
case 6:p=f
w=7
return A.b(A.pz(o,!1),$async$F1)
case 7:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$F1,v)},
a0z(d){return this.cBa(d)},
cBa(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0z=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pA(d,s,!1),$async$a0z)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).N(null)
A.hC(d,new C.aul(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pz(s,!1),$async$a0z)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0z,v)},
QY(d){return this.cxd(d)},
cxd(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$QY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).N(null)
w=3
return A.b(A.hC(d,D.aMj,!0,"NgmyWorksheetProjectScan",x.N),$async$QY)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bGs(s),$async$QY)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.L(x.q).f.T(D.fpk)
w=1
break}q=C.hj6(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dN(p,x.H),$async$QY)
case 5:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$QY,v)},
a0A(d){return this.cJv(d)},
cJv(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0A=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).N(null)
w=3
return A.b(C.bFX(),$async$a0A)
case 3:s=f
if(s==null){w=1
break}r=C.hj6(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dN(q,x.H),$async$a0A)
case 4:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a0A,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.uk(u),s=w.d.d.length,r=u?B.ef:B.c,q=A.l(28),p=A.a([new A.ab(0,B.G,B.w.j(u?0.35:0.08),B.kE,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.wA,A.p(v,A.x(A.a([w.czK(d,t,s),new A.D(D.bG9,A.x(A.a([w.b7P(t,"QR restore"),B.T,A.A(A.a([w.b2P(t,!0,B.ju,B.aG,B.aG,new C.eWt(w,d),"Show to scan","QR code"),B.as,w.aA8(t,B.jv,B.b7,B.bf,new C.eWu(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.h,0,v,v),B.da,w.b7P(t,"Backup files"),B.T,A.A(A.a([w.aA8(t,B.hP,B.aV,B.bQ,new C.eWv(w,d),"Full copy","Backup file"),B.as,w.aA8(t,R.zH,B.at,B.aQ,new C.eWw(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.h,0,v,v)],o),B.E,v,B.e,B.h,0,B.p),v)],o),B.l,v,B.e,B.N,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
czK(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.fe,B.cU,B.fX],k):A.a([B.b2,B.aV,B.bQ],k)
w=A.ao(l,A.W(B.va,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.as(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.l(4),l,l,B.n),l,4,l,B.kz,l,l,l,36),l,l,l)
u=A.l(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ab(0,B.G,B.w.j(0.2),B.cJ,12)],x.V)
r=this.d
s=A.p(l,C.aSI(!0,A.l(13),64,D.bQQ,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.m(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,I.ac8,l,l,l)
r=C.bGr(r.gxK(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.l(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.a0,l,B.ad,B.t,A.a([w,new A.D(D.bGx,A.x(A.a([v,A.A(A.a([s,B.eu,A.E(A.x(A.a([u,B.ax,t,B.P,A.A(A.a([r,B.ae,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.m(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fM,l,l,l)],m),B.l,l,B.e,B.h,0,l,l)],m),B.E,l,B.e,B.h,0,B.p),1),A.aI(l,l,l,l,A.W(B.cB,B.c.j(0.85),l,l,l,l),l,l,l,new C.eWs(d),l,l,l,A.nb(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aUG,l,l,l,l),l,l)],m),B.E,l,B.e,B.h,0,l,l)],m),B.l,l,B.e,B.h,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a7(B.ay,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b7P(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ae,A.d(e.toUpperCase(),w,w,w,w,w,w,A.m(w,w,d.a?B.bu:B.bh,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
b2P(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.l(18),p=A.l(18),o=d.a,n=o?D.al_:B.aS
if(e)w=B.aG.j(o?0.45:0.35)
else{w=o?B.eh:B.bO
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.ab(0,B.G,B.aG.j(0.12),B.cJ,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.l(12)
s=A.K(h.j(0.35),B.r,1)
t=A.p(r,A.W(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.ta,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.m(r,r,o?B.aS:B.av,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aG(!1,B.a3,!0,r,A.aM(!1,q,!0,A.eC(new A.D(E.a12,A.x(A.a([t,B.af,u,B.bF,A.d(j,r,r,r,r,r,r,A.m(r,r,o?B.bu:B.bh,r,r,r,r,r,r,r,r,11,r,r,B.cD,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.h,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
aA8(d,e,f,g,h,i,j){return this.b2P(d,!1,e,f,g,h,i,j)}}
C.aul.prototype={
S(){return new C.bnP()}}
C.bnP.prototype={
Y(){this.a3()
this.agp()},
agp(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$agp=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bGt(p.c,p.d),$async$agp)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eW6(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eW7(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agp,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.C0:B.hY,e=i.d
e=e==null?h:B.a.a_(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aI(h,h,h,h,A.W(B.eK,g?B.ab:B.an,h,h,h,18),h,h,h,new C.eW8(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.m(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.tT],u),B.l,h,B.e,B.h,0,h,h)
t=A.l(24)
s=x.O
s=g?A.a([B.fe,B.cU,B.fX],s):A.a([B.b2,B.aV,B.bQ],s)
r=x.V
q=A.a([new A.ab(0,B.G,B.aV.j(g?0.4:0.3),B.eR,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dk,B.K,h,h)
p=C.bGr(p.gxK(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.l(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.am,A.A(A.a([p,B.ae,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.m(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fM,h,h,h)],u),B.l,h,B.b8,B.h,0,h,h)],u),B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a7(B.ay,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.a1n,h,h,1/0)
t=g?D.bsl:B.c
q=A.l(24)
p=A.K(w?B.aG.j(0.4):B.aV.j(0.3),B.r,1)
r=A.a([new A.ab(0,B.G,B.w.j(g?0.25:0.06),B.dp,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.VS,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.ewu)
else{m=A.l(20)
l=A.K(B.bl,B.r,1)
o.push(A.p(h,A.qf(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bS,h,h,h))}}o.push(B.aO)
n=w?B.aG:B.aV
n=n.j(g?0.15:0.1)
m=A.l(12)
l=A.K((w?B.aG:B.aV).j(0.35),B.r,1)
k=w?B.PF:B.Qc
k=A.W(k,w?B.aG:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.as,A.E(A.d(j,h,h,h,h,h,h,A.m(h,h,g?B.ab:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a9,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.h,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.hO,h,h,h))
return A.c4(h,f,A.bm(!0,A.x(A.a([new A.D(Ae.OL,e,h),A.E(A.c9(A.x(A.a([s,B.aO,A.p(h,A.x(o,B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.uL,h,h,1/0)],u),B.l,h,B.e,B.h,0,B.p),B.t,h,B.y,h,h,E.anC,h,h,B.ah),1)],u),B.l,h,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.auq.prototype={
S(){return new C.aH5(A.zS(B.O0,B.oe,B.vi))}}
C.aH5.prototype={
t(){this.d.t()
this.a2()},
aP4(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j2(w,d)},
cgw(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s=C.irG(t)
if(s!=null){this.aP4(s)
return}r=C.hyb(t)
if(r!=null)q=A.cR(r,p,0)
else q=!1
if(q){this.aP4(B.a.i(B.a.b4(r,B.a.cn(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eR(A.a([A.aI(t,t,t,t,A.W(u.f?B.uX:A9.PN,t,t,t,t,t),t,t,t,new C.eWa(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.C0,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fXl,t,t,t,1,t,!0),q=A.zR(u.d,B.c1,u.gcgv()),p=A.l(28)
p=A.as(A.p(t,t,B.f,t,t,new A.o(t,t,A.K(B.aV,B.r,3),p,A.a([new A.ab(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.l(16)
return A.c4(r,B.w,new A.an(B.a0,t,B.b1,B.t,A.a([q,p,A.ao(32,A.p(t,D.fW6,B.f,t,t,new A.o(w,t,A.K(B.aV.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jr,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aM0.prototype={
a7(){return"_WorksheetTab."+this.b}}
C.P6.prototype={
S(){return new C.aH7(D.ae8,A.a([],x.D))},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aH7.prototype={
gcHi(){return J.bHC(this.e,0,new C.eWT())},
Y(){this.a3()
$.aU.bZ$.push(this)
this.wo()},
t(){$.aU.hZ(this)
this.a2()},
jn(d){if(d===B.fW)this.wo()},
wo(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wo=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.DB(q.a.c).dg(0,B.k5),$async$wo)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eWP(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eWQ(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wo,v)},
Iz(d){return this.bNE(d)},
bND(){return this.Iz(null)},
bNE(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Iz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.itF(l,d),$async$Iz)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
r=s.a
q=s.b
p=new C.lG(l,r,q,D.doy,new A.V(Date.now(),0,!1))
w=4
return A.b(C.Mf(t.a.c,p),$async$Iz)
case 4:o=f
w=5
return A.b(t.wo(),$async$Iz)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.L(x.q).f.T(D.fmn)
w=1
break}n=J.aT(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gP(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.L(q).f.T(D.foc)
else n.L(q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.F5(m)
case 1:return A.h(u,v)}})
return A.i($async$Iz,v)},
F5(d){return this.ckv(d)},
ckv(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$F5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hC(s,new C.aur(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$F5)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Mf(u.a.c,t),$async$F5)
case 5:case 4:w=6
return A.b(u.wo(),$async$F5)
case 6:return A.h(null,v)}})
return A.i($async$F5,v)},
w9(d){return this.c2Z(d)},
c2Z(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$w9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bFX(),$async$w9)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hC(r,D.aMj,!0,"NgmyWorksheetProjectScan",x.N),$async$w9)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bGs(q),$async$w9)
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
r.T(A.b2(null,null,null,null,null,B.t,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hj6(s)
w=15
return A.b(C.Mf(t.a.c,p),$async$w9)
case 15:o=f
w=16
return A.b(t.wo(),$async$w9)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.L(x.q).f.T(D.foh)
w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.F5(p)
case 1:return A.h(u,v)}})
return A.i($async$w9,v)},
OC(d){return this.bMg(d)},
bMg(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$OC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cg(null,null,!0,null,new C.eWA(d),s,null,!0,!0,x.y),$async$OC)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.p9(t.a.c,A.a([],x.D)),$async$OC)
case 6:w=7
return A.b(t.wo(),$async$OC)
case 7:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fms)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OC,v)},
ckI(d){var w=this.c
w.toString
A.bT(B.L,null,new C.eWJ(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b8r(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.l(16),p=g.a
if(p)w=B.jZ
else w=B.c
v=A.l(16)
u=A.K(p?B.eh:B.bO,B.r,1)
t=d.j(0.14)
s=A.l(12)
s=A.p(r,A.W(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bU,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.m(r,r,p?B.aS:B.av,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aG(!1,B.a3,!0,r,A.aM(!1,q,!0,A.p(r,A.x(A.a([s,B.af,t,B.bF,A.d(h,r,r,r,r,r,r,A.m(r,r,p?B.bu:B.bh,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.h,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.t6,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
a14(d,e){return this.ckw(d,e)},
ckw(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a14=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bT(B.L,null,new C.eWE(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a14)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hIc(r,new C.eWF(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.OE(d,e),$async$a14)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a14,v)},
b5s(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.l(12)
s=A.p(u,A.W(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bU,u,u,u)
if(d)t=B.aA
else t=h.a?B.aS:B.av
t=A.d(j,u,u,u,u,u,u,A.m(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.m(u,u,w?B.bu:B.bh,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.h,0,B.p),1)
return A.aG(!1,B.a3,!0,u,A.aM(!1,u,!0,new A.D(B.CJ,A.A(A.a([s,B.bb,t,A.W(B.eI,w?B.bu:B.bh,u,u,u,u)],v),B.l,u,B.e,B.h,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai)},
crs(d,e,f,g,h,i){return this.b5s(!1,d,e,f,g,h,i)},
OE(d,e){return this.bMq(d,e)},
bMq(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.ls(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$OE)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bEE(t.a.c,d.a),$async$OE)
case 6:w=7
return A.b(t.wo(),$async$OE)
case 7:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$OE,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.uk(n),l=n?B.c4:B.hY
if(p.f)n=D.beM
else{w=A.aE(d,B.dD,x.w).w
v=p.bGK(m)
u=p.c22(m)
t=p.gbDQ()
if(n)s=B.jZ
else s=B.c
r=A.l(13)
q=x.p
t=A.a([v,B.af,u,B.aO,new C.Gn(A.p(o,A.A(A.a([p.aDH(Q.Po,"Projects",m,D.ae8),p.aDH(B.uR,"Cashier",m,D.b2A),p.aDH(B.Hw,"Family Tree",m,D.hJg)],q),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(s,o,o,r,o,o,B.n),o,o,o,o,o,o,o,o),14,B.eC,0.95,t,o),B.bx],q)
v=p.d
if(v===D.ae8){v=J.ad(p.e)
B.d.u(t,A.a([A.A(A.a([A.d("Projects ("+v+")",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,16,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b3,new C.azk(p.gaTt(),o)],q),B.l,o,B.e,B.h,0,o,o),B.aB,p.cru(m)],q))}else{n=p.a
if(v===D.b2A)t.push(new C.aqe(n.c,m,o))
else{v=p.r
t.push(new C.ars(n.c,n.d,n.e,n.f,new C.eWW(p),new C.eWX(p),new A.bf(v,x.b4)))}}n=A.c9(A.x(t,B.E,o,B.e,B.h,0,B.p),B.t,o,B.y,o,o,new A.Q(20,w.r.b+8,20,32),o,o,B.ah)}return A.c4(o,l,A.bm(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bGK(d){var w=null,v=A.l(8),u=d.a,t=A.W(Y.a2D,u?B.bu:B.bh,w,w,w,16)
return A.aM(!1,v,!0,new A.D(B.kA,A.A(A.a([t,B.bn,A.d("Back to Profile",w,w,w,w,w,w,A.m(w,w,u?B.bu:B.bh,w,w,w,w,w,w,w,w,14,w,w,B.a9,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.N,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eWx(this),w,w,w,w,w,w,w)},
gbDQ(){switch(this.d.a){case 0:return D.adg
case 1:return D.hyn
case 2:return D.adh}},
c22(d){var w=null,v=A.l(15),u=A.a([new A.ab(0,B.G,B.aV.j(0.35),B.cz,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.c0G,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bb,D.bL9,A.aG(!1,B.a3,!0,w,A.aM(!1,A.l(12),!0,A.p(w,D.bZ0,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eWB(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)],t),B.E,w,B.e,B.h,0,w,w),r=B.b2.j(0.55),q=A.l(12)
return new C.Gn(A.p(w,A.x(A.a([new A.D(B.H7,s,w),A.p(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.m(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a9,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ax,A.d(A.Bl(this.gcHi()),w,w,w,w,w,w,D.fG6,w,w,w)],t),B.E,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.t5,B.jr,w,w,1/0)],t),B.E,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hym,w)},
aDH(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.l(12),r=t?B.aV:B.L,q=A.l(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.ab(0.5,B.G,B.aV.j(0.42),B.cJ,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bu:B.bh
w=A.W(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bu:B.bh
return A.E(A.aG(!1,B.a3,!0,u,A.aM(!1,s,!0,A.cT(u,A.A(A.a([w,B.e6,new A.di(1,B.cm,A.d(e,u,1,B.a2,u,u,u,A.m(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.b8,B.h,0,u,u),u,u,B.cj,new A.o(r,u,p,q,o,u,B.n),B.iQ,u,u,u,u,B.Hf,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eWS(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),1)},
cru(d){var w,v,u,t,s,r,q=this,p=null
if(J.ct(q.e)){w=d.a
v=w?B.ef:B.c
u=A.l(15)
t=A.p(p,D.bZ7,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ab(2,B.G,B.aV.j(0.5),B.eR,28)],x.V),D.caE,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.m(p,p,w?B.aS:B.av,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Gn(A.p(p,A.x(A.a([t,B.da,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.m(p,p,w?B.bu:B.bh,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.e2,A.A(A.a([A.E(q.aV3(B.jv,"Scan QR",new C.eWM(q),d),1),B.as,A.E(q.aV3(R.zH,"Upload file",new C.eWN(q),d),1)],r),B.l,p,B.e,B.h,0,p,p),B.aB,A.bI(D.h6O,p,q.gaTt(),A.bo(B.aV,p,p,p,B.c,B.hg,p,p,new A.b9(A.l(12),B.a1),p,p,p))],r),B.l,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bHD,1.05,D.adg,p)}w=J.b8(q.e,new C.eWO(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Gn(A.x(w,B.l,p,B.e,B.h,0,B.p),16,B.bU,1,D.adg,p)},
aV3(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.l(12),t=A.l(12),s=A.l(12),r=A.K(B.aV.j(0.45),B.r,1)
return A.aG(!1,B.a3,!0,u,A.aM(!1,t,!0,A.p(w,A.x(A.a([A.W(d,B.b2,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.fEi,B.K,w,w)],x.p),B.l,w,B.e,B.N,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.a0R,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
crt(d,e){var w,v,u=null,t=e.a,s=t?B.ef:B.c,r=A.l(14),q=A.K(t?B.eh:B.bO,B.r,1),p=A.a([new A.ab(0,B.G,B.w.j(t?0.35:0.08),B.et,10)],x.V),o=A.l(14),n=t?B.bu:B.bh
n=A.bu(B.Y1,new A.fH(1.7777777777777777,C.aSI(!0,B.fk,1/0,Q.Po,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.m(u,u,t?B.aS:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.ax,A.d(""+d.d.length+" budget items \xb7 "+A.Bl(d.gxK()),u,u,u,u,u,u,D.fCf,u,u,u)],w),B.E,u,B.e,B.h,0,B.p),1)
return A.p(u,A.aG(!1,B.a3,!0,u,A.aM(!1,o,!0,A.x(A.a([n,new A.D(B.bH,A.A(A.a([v,A.aI(u,u,u,u,A.W(Al.a3I,t?B.bu:B.bh,u,u,u,u),u,u,u,new C.eWK(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.h,0,u,u),u)],w),B.E,u,B.e,B.h,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eWL(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.el,u,u,u,1/0)}}
C.bAF.prototype={}
C.rt.prototype={
aj(){var w=this,v=w.c,u=w.d
return A.J(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd0k(){var w,v,u,t,s=this.c
if(s===B.j.fK(s))w=B.o.v(B.j.M(s))
else{v=B.j.ad(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lG.prototype={
gxK(){return B.d.cF(this.d,0,new C.cH6())},
aj(){var w=this,v=w.d,u=A.U(v).k("N<1,a9<n,@>>")
v=A.C(new A.N(v,new C.cH5(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bfR(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lG(w.a,w.b,v,u,w.e)},
bfz(d){return this.bfR(d,null)},
TI(d){return this.bfR(null,d)}}
C.Iv.prototype={
a7(){return"FamilyGender."+this.b}}
C.i_.prototype={
aj(){var w=this
return A.J(["id",w.a,"name",w.b,"gender",C.hDm(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aGq(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.i_(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.amr.prototype={
a7(){return"FamilyTreeAccessRole."+this.b}}
C.kZ.prototype={
gaqO(){var w=this.f
return new A.Y(w,new C.bTn(),A.U(w).k("Y<1>")).gJ(0)},
aj(){var w=this,v=w.f,u=A.U(v).k("N<1,a9<n,@>>")
v=A.C(new A.N(v,new C.bTm(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.ik0(w.y),"games",w.z],x.N,x.z)},
x5(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kZ(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bfQ(d,e){var w=null
return this.x5(w,w,w,d,e,w,w,w,w)},
cQF(d,e,f,g,h,i,j){return this.x5(d,e,null,f,g,h,i,j,null)},
aGv(d,e){var w=null
return this.x5(w,w,w,w,d,w,w,e,w)},
cQH(d,e,f,g,h,i,j,k){return this.x5(d,e,null,f,g,h,i,j,k)},
cPa(d){var w=null
return this.x5(w,w,w,w,w,w,w,d,w)},
cPy(d){var w=null
return this.x5(w,w,w,w,w,w,w,w,d)},
bft(d){var w=null
return this.x5(w,w,d,w,w,w,w,w,w)},
aGg(d){var w=null
return this.x5(w,w,w,w,w,d,w,w,w)},
cQc(d,e,f){var w=null
return this.x5(w,d,w,w,e,w,w,f,w)},
cOY(d){var w=null
return this.x5(w,w,w,d,w,w,w,w,w)},
cPK(d,e){var w=null
return this.x5(d,w,w,w,w,w,e,w,w)}}
C.cH7.prototype={
a7(){return"WrapAlignment."+this.b}}
C.cH8.prototype={
a7(){return"WrapCrossAlignment."+this.b}}
C.aJc.prototype={}
C.bbe.prototype={
ak(d){this.a=d.a
this.b=d.b},
cZ(d){var w=new C.bbe()
w.a=this.a
w.b=this.b
return w},
v(d){return A.b3(this).v(0)+" first:"+this.a+" last:"+this.b}}
C.bbd.prototype={
gwW(){return!0},
gGE(){return this.z.b<this.b.length},
aWK(d){switch(0){case 0:return d.a.c}},
aWq(d){switch(0){case 0:return d.a.d}},
bWu(d,e){switch(0){case 0:return new A.hV(d,e)}},
bVS(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hh(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iS(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Ie(b4)
switch(0){case 0:v=b5.b
u=new A.kW(0,v,0,1/0)
t=w===B.VK
break}s=A.a([],x.gZ)
r=A.T(x.gF,x.S)
for(b3=b1.z,q=B.d.fN(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.I)(q),++h){g=q[h]
g.hh(b4,u,!0)
f=b1.aWK(g)
f.toString
e=b1.aWq(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJc(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJc(k,j,i))}d=s.length
switch(0){case 0:q=b5.cA(new A.hV(m,l))
a0=q.a
a1=q.b
b1.a=new A.iS(0,0,a0,a1)
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
for(q=B.d.fN(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.I)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aWK(g)
e=b1.aWq(g)
e.toString
a9=b1.bVS(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bWu(a6,a3+a9)
b0=g.a
g.a=new A.iS(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fV(d){var w,v,u,t,s,r=this
r.lE(d)
w=d.b
w.iw()
v=A.dr()
u=r.a
v.eb(u.a,u.b,0,1)
w.pt(0,v)
for(u=r.z,u=B.d.du(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.I)(u),++s)u[s].fV(d)
w.nF(0)},
Ha(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
iw(){return this.z}}
C.byV.prototype={}
var z=a.updateTypes(["aB<~>()","R(i_)","~()","R(kZ)","R(ny)","a9<n,@>(kZ)","F(kZ,kZ)","F(i_,i_)","n(i_)","kZ(a9<@,@>)","R(lG)","ny(a9<@,@>)","a9<n,@>(ny)","R(uT)","uT()","F(i_)","ai<i_>()","R(zA)","a0m(Z)","n?(i_)","eL<n?>(i_)","aB<~>(lG)","R(rt)","a9<n,@>(i_)","i_(a9<@,@>)","F(lG,lG)","R(aga)","~(bd)","v(oM)","F(F,aad)","R(qM<F>)","~(qM<F>)","U8(Z)","R(MT)","R(uS)","~(i_)","n(n)","Wt(Z)","U7(Z)","aex(Z)","a_i(Z)","i_(i_)","cK(bA<n,GD>)","cK(KZ)","a_M(Z)","F?(i_)","i_()","R(KZ)","D(i_)","~(Iv)","a_I(Z)","v(Iv,n,a_)","R(ag3)","bA<n,ai<a9<n,@>>>(n,ai<ny>)","a_K(Z)","+count,id,name(F,n,n)(kZ)","n(kZ)","a0G(Z)","a0H(Z)","R(lY)","lY()","ZR(Z)","a2s(Z)","a_k(Z)","a_j(Z)","~(F)","~(n,lw?)","v(rt)","aeS(Z)","~(mo)","aB<~>([n?])","H(H,lG)","v(lG)","H(H,rt)","a9<n,@>(rt)","rt(a9<@,@>)","ai<lw>()","uS()","n(V)","lG(a9<@,@>)","cu(Iu)","n(lG)","a9<n,@>(lG)","F(ny,ny)","kZ(a9<n,@>)","kZ(kZ)"])
C.fQ_.prototype={
$1(d){return d.a+" "+d.b},
$S:128}
C.fPZ.prototype={
bp8(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.rk(s,d,B.i1,"book",E.GV),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.X(r!=null&&A.M1(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bp8(d)},
$S:273}
C.fQ0.prototype={
$1(d){return d.b},
$S:128}
C.fZK.prototype={
$1(d){var w=null
return A.eG(w,B.L,new H.Qx(this.a,this.b,w),w,w,0,B.a13,w,B.d6,w,w,w)},
$S:46}
C.fD6.prototype={
$1(d){return d!=null},
$S:214}
C.fD7.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:214}
C.fDc.prototype={
$1(d){if(this.a)return new A.r(d.a*520,d.b*160)
return d},
$S:179}
C.fNJ.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fe(d,w,w,w,A.hg(w,B.tK,w,w,w,w,w,w,w,B.dE,w,w,10.5,w,B.eD,w,!0,w,w,w,w),w),u=f?B.eD:B.wK
return new A.od(D.bCX,A.ab2(A.a([new A.fZ(130,w,v),new A.zz(1,B.Hp,A.fe(e,w,w,w,A.hg(w,g==null?D.eyS:g,w,w,w,w,w,w,w,B.dE,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.yF,B.lV))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1977}
C.fNI.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.w1(999)
f=A.xE(A.lS(h,A.fe("Cashier",h,h,h,A.hg(h,D.AC,h,h,h,h,h,h,h,B.dE,h,h,10,h,B.eD,h,!0,h,h,h,h),h),h,new A.kX(D.eyJ,h,f,B.i6,h),h,h,D.bDq,h))
w=A.xE(A.fe("Debt receipt",h,h,h,A.hg(h,h,h,h,h,h,h,h,h,B.dE,h,h,22,h,B.eD,h,!0,h,h,h,h),h))
v=A.xE(A.fe(C.xk(new A.V(Date.now(),0,!1),!0),h,h,h,D.abH,h))
u=A.w1(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fe(s,h,h,h,A.hg(h,h,h,h,h,h,h,h,h,B.dE,h,h,14,h,B.eD,h,!0,h,h,h,h),h)
r=A.fe("Person who owes",h,h,h,D.abH,h)
q=A.w1(10)
p=x.Z
u=A.lS(h,A.zs(A.a([s,new A.fZ(h,2,h),r,new A.fZ(h,10,h),A.lS(h,A.zs(A.a([A.fe("Amount owed",h,h,h,D.abH,h),new A.fZ(h,2,h),A.fe(A.Bl(t.c),h,h,h,A.hg(h,D.AC,h,h,h,h,h,h,h,B.dE,h,h,20,h,B.eD,h,!0,h,h,h,h),h)],p),B.rX,B.lV),h,new A.kX(B.pR,h,q,B.i6,h),h,h,D.bCD,1/0)],p),B.rX,B.lV),h,new A.kX(E.aNG,h,u,B.i6,h),h,h,D.bEC,1/0)
q=new A.nX(D.eyM,0.9,B.le)
r=A.w1(12)
s=i.c
o=s.$2("Original due",C.xk(t.r,!1))
n=s.$2("Current due",C.xk(t.f,!1))
m=i.d
l=new A.nX(m,1.1,B.le)
k=A.w1(8)
j=i.a
k=A.a([o,n,new A.fZ(h,6,h),A.lS(h,A.xE(A.fe(t.gaNC(),h,h,h,A.hg(h,m,h,h,h,h,h,h,h,B.dE,h,h,11,h,B.eD,h,!0,0.5,h,h,h),h)),h,new A.kX(h,new A.q2(l,l,l,l),k,B.i6,h),h,h,D.bDz,1/0),new A.fZ(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.AC))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.AC))
else{n=A.fe("Missed days ("+n+")",h,h,h,A.hg(h,B.tK,h,h,h,h,h,h,h,B.dE,h,h,10.5,h,B.eD,h,!0,h,h,h,h),h)
m=A.U(o).k("N<1,TI>")
o=A.C(new A.N(o,new C.fNH(),m),m.k("ak.E"))
B.d.u(k,A.a([new A.fZ(h,4,h),n,new A.fZ(h,6,h),new C.bbd(5,5,new C.bbe(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.u(k,A.a([new A.fZ(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fZ(h,8,h),w,new A.fZ(h,3,h),v,new A.fZ(h,16,h),u,new A.fZ(h,10,h),A.lS(h,A.zs(k,B.yF,B.lV),h,new A.kX(h,new A.q2(q,q,q,q),r,B.i6,h),h,h,B.amw,1/0)],p)
w=j.a
if(w!=null){v=new A.nX(B.JY,1,B.le)
B.d.u(f,A.a([new A.fZ(h,16,h),A.fe("Debtor signature",h,h,h,A.hg(h,B.tK,h,h,h,h,h,h,h,B.dE,h,h,10,h,B.eD,h,!0,h,h,h,h),h),new A.fZ(h,6,h),A.lS(h,new A.IO(w,B.Ye,h,h),h,new A.kX(h,new A.q2(v,v,v,v),A.w1(6),B.i6,h),82,h,B.OI,1/0)],p))}f.push(new A.fZ(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fe(w,h,h,h,D.fuy,h))
f.push(new A.fZ(h,18,h))
f.push(A.xE(A.fe("NGMY.ORG",h,h,h,A.hg(h,D.AC,h,h,h,h,h,h,h,B.dE,h,h,14,h,B.eD,h,!0,1.8,h,h,h),h)))
return f},
$S:362}
C.fNH.prototype={
$1(d){var w=null,v=new A.nX(D.JZ,0.7,B.le),u=A.w1(999)
return A.lS(w,A.fe(C.xk(d,!1),w,w,w,A.hg(w,D.JZ,w,w,w,w,w,w,w,B.dE,w,w,9.5,w,B.eD,w,!0,w,w,w,w),w),w,new A.kX(w,new A.q2(v,v,v,v),u,B.i6,w),w,w,D.bJ3,w)},
$S:1978}
C.c8K.prototype={
$1(d){var w=null,v=B.bD.j(0.08),u=A.l(999),t=A.K(B.bD.j(0.28),B.r,1)
return A.p(w,A.d(C.xk(d,!1),w,w,w,w,w,w,D.fBH,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eP,w,w,w)},
$S:1979}
C.h_g.prototype={
$1(d){var w=null,v=A.aE(d,B.bY,x.w).w,u=A.l(26),t=A.aI(w,w,w,w,D.c1F,w,w,w,new C.h_d(d),w,w,w,w,w,B.cg),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eG(w,B.L,new A.cN(new A.aY(0,380,0,v.a.b*0.9),A.aG(!1,B.a3,!0,u,new A.D(B.a0S,A.x(A.a([new A.bK(B.a8,w,w,t,w),new A.di(1,B.cm,A.c9(A.x(A.a([new A.en(new C.b0f(r,w),s),B.T,A.A(A.a([A.E(A.em(B.zP,w,D.h32,new C.h_e(s,r,d),A.dj(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fh,w,new A.b9(A.l(14),B.a1),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ae,A.E(A.dh(B.a4k,w,D.h_s,new C.h_f(r,d),A.bo(B.b2,w,w,w,B.c,w,B.fh,w,new A.b9(A.l(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.h,0,w,w)],p),B.l,w,B.e,B.N,0,B.p),B.t,w,B.y,w,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.N,0,B.p),w),B.f,B.av,0,w,w,w,w,w,B.ai),w),w,w,0,Aq.a1f,w,B.d6,w,w,w)},
$S:46}
C.h_d.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.h_e.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aU.ap$.x.h(0,t.a)
m=m==null?null:m.gbf()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lW(2.5),$async$$0)
case 4:w=3
return A.b(e.hj(B.hf),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eQ(B.dI.gaT(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.aA(o,0,32)
w=5
return A.b(A.rn(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.h_f.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fUq(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.L(x.q).f
s.T(A.b2(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h_8.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.b
return A.eG(w,B.av,A.x(A.a([new A.D(D.bEq,A.A(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nf,w,w,w),1),A.aI(w,w,w,w,B.lr,w,w,w,new C.h_6(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),w),new A.di(1,B.cm,new A.D(B.f4,A.bu(A.l(14),A.fV(t,B.z,w,w,B.cl,B.dC,!1,w,!1,w,w),B.aq),w),w),new A.D(B.Ol,new A.a5(1/0,w,A.dh(B.oP,w,D.aY1,new C.h_7(t,this.c,d),A.bo(B.b2,w,w,w,B.c,w,w,w,new A.b9(A.l(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.N,0,B.p),w,w,w,B.Oy,w,B.d6,w,new A.b9(v,B.a1),w)},
$S:46}
C.h_6.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.h_7.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rn(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h_k.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.a,s=this.b
return A.eG(w,B.av,new A.D(D.bEy,A.x(A.a([A.A(A.a([D.bKe,A.aI(w,w,w,w,B.lr,w,w,w,new C.h_i(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),B.P,new A.en(A.bu(A.l(14),A.p(w,A.b4(w,w,w,new C.bds(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.af,new A.a5(1/0,w,A.dh(B.oP,w,D.aY1,new C.h_j(t,s,d),A.bo(B.b2,w,w,w,B.c,w,w,w,new A.b9(A.l(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.N,0,B.p),w),w,w,w,w,w,B.d6,w,new A.b9(v,B.a1),w)},
$S:46}
C.h_i.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.h_j.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aU.ap$.x.h(0,t.a)
n=n==null?null:n.gbf()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lW(2.5),$async$$0)
case 4:w=3
return A.b(e.hj(B.hf),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.aA(p,0,32)
r=J.eQ(B.dI.gaT(s))
w=5
return A.b(A.rn(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fHZ.prototype={
$1(d){return d.a===this.a},
$S:258}
C.dRa.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dQW.prototype={
bom(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.ef:B.c
s=u.a
w=2
return A.b(A.bT(t,null,new C.dQZ(s,q,e),p,!0,!0,!1,B.Kf,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dR_(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bom(d,e)},
$S:1980}
C.dQZ.prototype={
$1(d){var w,v=null,u=this.c===B.xh,t=u?D.dvy:D.dr2
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.m(v,v,w.a.d.a?B.aS:B.av,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(O.an2,A.x(A.a([u,B.ax,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.m(v,v,w.a.d.a?B.bu:B.bh,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.it(!0,v,v,B.y,D.fl2,new C.dQY(this.a,w,t,d),t.length,v,B.e_,B.ah,!0)],x.p),B.al,v,B.e,B.N,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:26}
C.dQY.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.l(14)
if(q)w=B.cU.j(0.14)
else w=t.b.a.d.a?B.a_:B.aS
v=A.l(14)
if(q)u=B.cU
else u=(t.b.a.d.a?B.bu:B.bh).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aM(!1,p,!0,A.p(B.z,C.b0e(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dQX(t.d,r),s,s,s,s,s,s,s)},
$S:199}
C.dQX.prototype={
$0(){A.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.dR_.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dQU.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:87}
C.dQV.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cG(B.cj,e,v)
return new A.d2(e,!1,A.ik(B.z,A.as(A.aG(!1,B.a3,!0,v,new A.e2(new C.dQT(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bh(t,new A.bq(0.96,1,u),u.k("bh<bP.T>"))),v)},
$S:34}
C.dQT.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aE(d,B.bY,x.w).w,i=l.b,h=i.a.d.a,g=h?B.ef:B.c,f=A.l(14),e=A.K((h?B.bu:B.bh).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.l(8)
u=x.p
v=A.A(A.a([w,A.aM(!1,v,!0,new A.D(B.eC,A.W(B.cB,i.a.d.a?B.bu:B.bh,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dQE(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.h,0,k,k)
w=l.d
t=A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a9,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aVA("Name")
r=l.a
q=r.d==null?k:new C.dQF(r,l.e,a0)
p=A.l(20)
o=i.a.d.a?B.bs:B.ma
n=A.K(B.cU.j(0.35),B.r,1)
m=r.d
t=A.aN(k,B.Z,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.bfJ(new A.D(B.f0,A.aM(!1,p,!0,A.p(B.z,C.b0e(m==null?"\ud83d\udc64":A.fOx(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cp,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.la,k,B.abw,k,k)
v=A.a([v,B.af,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bh,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.A(A.a([A.E(i.aWg("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dQG(r,a0),r.d===B.xh),1),B.ae,A.E(i.aWg("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dQL(r,a0),r.d===B.a8d),1)],u),B.l,k,B.e,B.h,0,k,k)],u)
if(r.d!=null)B.d.u(v,A.a([B.P,new A.bK(B.a5,k,k,A.ht(D.c_U,D.h1j,new C.dQM(r,l.e,a0),A.fs(k,k,k,k,k,k,k,k,k,k,k,B.cU,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cg)),k)],u))
v.push(B.T)
t=A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a9,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uW(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aVB("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ak,k,k,s,k,k,B.ea,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.T)
t=i.a.d.a
s=t?B.a_:B.aS
q=A.l(10)
p=A.l(10)
o=A.l(10)
n=A.K((t?B.bu:B.bh).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.a9,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xk(r.a,!1)
v.push(A.aG(!1,B.a3,!0,q,A.aM(!1,p,!0,A.p(k,A.A(A.a([A.E(A.x(A.a([t,B.bF,A.d(m,k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.h,0,B.p),1),D.bXv],u),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bj,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dQN(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.u(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.T)
t=A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aVA("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b3P(r.b.length!==0,B.mi,new C.dQO(r,i,a0),new C.dQP(r,a0),"Upload from gallery","ID photo"))
v.push(i.b3P(r.c.length!==0,D.bQO,new C.dQQ(r,i,d,a0),new C.dQR(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Ap.a8S("Signature (optional)",t,new C.dQS(a0),new C.dQH(a0,t),new C.dQI(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bu:B.bh
s=(i?B.bu:B.bh).j(0.28)
s=A.E(A.dV(E.aXV,new C.dQJ(d),A.dj(k,k,k,k,k,k,k,k,k,t,k,k,B.qG,k,new A.b9(A.l(10),B.a1),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bo(B.cU,k,k,k,B.c,k,B.qG,k,new A.b9(A.l(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.ae,A.E(A.bI(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vN,k,k,k),k,new C.dQK(r,w,d),t),1)],u),B.l,k,B.e,B.h,0,k,k))
return A.p(k,A.c9(A.x(v,B.al,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.t7,B.jr,k,k,360)},
$S:164}
C.dQE.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dQF.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dQG.prototype={
$0(){return this.b.$1(new C.dQD(this.a))},
$S:0}
C.dQD.prototype={
$0(){var w=this.a
w.d=B.xh
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dQL.prototype={
$0(){return this.b.$1(new C.dQC(this.a))},
$S:0}
C.dQC.prototype={
$0(){var w=this.a
w.d=B.a8d
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dQM.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dQN.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xp(null,u.b,A.c_(2020,1,1,0,0,0,0,0),null,s,A.c_(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dQB(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQB.prototype={
$0(){var w=this.b
return this.a.a=A.c_(w.gcl(),w.gci(),w.gcz(),0,0,0,0,0)},
$S:0}
C.dQO.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Qf(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dQA(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQA.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dQP.prototype={
$0(){return this.b.$1(new C.dQz(this.a))},
$S:0}
C.dQz.prototype={
$0(){return this.a.b=""},
$S:0}
C.dQQ.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.ef:B.c
w=3
return A.b(A.bT(q,null,new C.dQx(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Qf(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dQy(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQx.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,B.asr,w,w,w,w,new C.dQr(d),!1,w,w,w,w,w,w,w,D.fSo,w,w,w),A.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,B.asp,w,w,w,w,new C.dQs(d),!1,w,w,w,w,w,w,w,D.fZr,w,w,w)],x.p),B.l,w,B.e,B.N,0,B.p),!0,!1,B.ag,!0,!0)},
$S:26}
C.dQr.prototype={
$0(){A.a6(this.a,!1).N("camera")
return null},
$S:0}
C.dQs.prototype={
$0(){A.a6(this.a,!1).N("gallery")
return null},
$S:0}
C.dQy.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dQR.prototype={
$0(){return this.b.$1(new C.dQw(this.a))},
$S:0}
C.dQw.prototype={
$0(){return this.a.c=""},
$S:0}
C.dQS.prototype={
$0(){return this.a.$1(new C.dQv())},
$S:0}
C.dQv.prototype={
$0(){},
$S:0}
C.dQH.prototype={
$0(){return this.a.$1(new C.dQu(this.b))},
$S:0}
C.dQu.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dQI.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.aj2(u.a,null,null,new C.dQt(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQt.prototype={
$4(d,e,f,g){this.a.$1(new C.dQq(this.b,d))},
$S:445}
C.dQq.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.u(w,this.b)},
$S:0}
C.dQJ.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dQK.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.L(x.q).f.T(D.fqc)
return}if(w.a.d==null){w.c.L(x.q).f.T(D.fn0)
return}A.a6(w.c,!1).N(!0)},
$S:0}
C.dRd.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:87}
C.dRe.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.ef:B.c,n=A.l(14),m=A.K((p?B.bu:B.bh).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.m(r,r,q.a.d.a?B.aS:B.av,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Bl(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.m(r,r,q.a.d.a?B.bu:B.bh,r,r,r,r,r,r,r,r,13,r,r,B.a9,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zN(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.m(r,r,w.zN(r).length>0?B.bD:B.cU,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bu:B.bh
t=(q?B.bu:B.bh).j(0.28)
s=x.p
return new A.d2(e,!1,A.as(A.aG(!1,B.a3,!0,r,A.p(r,A.x(A.a([p,B.P,v,u,B.aB,A.A(A.a([A.E(A.dV(B.o7,new C.dRb(d),A.dj(r,r,r,r,r,r,r,r,r,w,r,r,B.k6,r,new A.b9(A.l(10),B.a1),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ae,A.E(A.bI(D.fZT,r,new C.dRc(d),A.bo(B.cU,r,r,r,B.c,r,B.k6,r,new A.b9(A.l(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.h,0,r,r)],s),B.al,r,B.e,B.N,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.CN,B.H7,r,r,300),B.f,B.L,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:34}
C.dRb.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dRc.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dR7.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dR8(r),p=r.a.d.a,o=p?B.ef:B.c,n=A.l(14),m=A.K((p?B.bu:B.bh).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.m(s,s,r.a.d.a?B.aS:B.av,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Bl(l.c),s,s,s,s,s,s,D.fDj,s,s,s)],p),B.l,s,B.e,B.h,0,s,s)
w=A.iP((r.a.d.a?B.bu:B.bh).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a2Z,"View receipt",new C.dR0(r,d,l))
u=l.x!=null
t=u?B.pE:B.qP
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bEv,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dR1(r,d,l)),q.$3$icon$label$onTap(B.D1,"Edit",new C.dR2(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mi,"View / download ID",new C.dR3(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bQN,"View / download selfie",new C.dR4(r,d,l)))
if(l.gaIb())p.push(q.$3$icon$label$onTap(Ad.a4a,"View / download signature",new C.dR5(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bD,B.ej,"Delete",new C.dR6(r,d,l)))
p.push(B.ax)
return A.bm(!0,new A.D(B.t5,A.p(s,A.x(p,B.l,s,B.e,B.N,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:26}
C.dR8.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aS:B.av
else w=d
return A.aM(!1,v,!0,new A.D(B.eV,A.A(A.a([A.W(e,w,v,v,v,20),B.bb,A.d(f,v,v,v,v,v,v,A.m(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.h,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1981}
C.dR0.prototype={
$0(){A.a6(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h_c(w,this.c)},
$S:0}
C.dR1.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.T1(this.c)},
$S:0}
C.dR2.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.DL(this.c)},
$S:0}
C.dR3.prototype={
$0(){var w,v,u
A.a6(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bGN(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dR4.prototype={
$0(){var w,v,u
A.a6(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bGN(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dR5.prototype={
$0(){A.a6(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h_h(w,this.c)},
$S:0}
C.dR6.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.Qe(0,this.c)},
$S:0}
C.dRf.prototype={
$1(d){return d.x==null},
$S:258}
C.dRg.prototype={
$1(d){return d.x!=null},
$S:258}
C.dRh.prototype={
$2(d,e){return d+e.c},
$S:1982}
C.dRi.prototype={
$0(){return this.a.bEl()},
$S:0}
C.dR9.prototype={
$0(){return this.a.agC(this.b)},
$S:0}
C.fIK.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fIL.prototype={
$0(){return B.d.gH(D.a5u)},
$S:z+77}
C.dgQ.prototype={
$0(){var w=this.a
return w.m(new C.dgO(w,this.b))},
$S:0}
C.dgO.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dgP.prototype={
$0(){},
$S:0}
C.dgR.prototype={
$0(){var w=this.a.gc2N()
A.a6(this.b,!1).N(w)
return null},
$S:0}
C.fLf.prototype={
$1(d){return C.hnw(A.a1(d,x.N,x.z))},
$S:z+11}
C.fLg.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fLh.prototype={
$2(d,e){var w=A.cb(d.a,null),v=A.cb(e.a,null)
if(w!=null&&v!=null)return B.o.aQ(w,v)
return d.d.aQ(0,e.d)},
$S:z+83}
C.fYO.prototype={
$1(d){return d.aj()},
$S:z+12}
C.h6q.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fHQ.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bS4.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eK(e,v)?v:null},
$S:1983}
C.fZo.prototype={
$1(d){var w=this
return new C.a_K(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dhv.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dhu(w,d))},
$S:z+80}
C.dhu.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dhj.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cJ(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dhg.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dgS.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dgT.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dhk.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dh0.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.ef:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ek(A.a([A.bO(!1,B.ds,w,w,!0,w,w,w,new C.dgZ(d),w,w),A.bI(B.xG,w,new C.dh_(d),A.bo(B.nq,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.dgZ.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dh_.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dh1.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.dhh.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dhi.prototype={
$0(){return B.d.gH(D.A1)},
$S:z+14}
C.dgX.prototype={
$1(d){var w=this.a,v=w.y,u=w.gz7(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.U7(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dgY.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dh2.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a_i(v,u,J.ad(w.d),null)},
$S:z+40}
C.dh3.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dht.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.az(s,new C.a__(r.y,r.gz7(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dhr(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bcP(v,e,w,u,t,r.gbUX(),C.hDl(r.y.Q),r.gz7(0),s)
w=t}return A.c6(q,new C.dhs(r,e),new A.D(B.a18,w,s))},
$S:1984}
C.dhs.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd5(t).ay){t=this.b
u=x.cy.a(B.d.gd5(u.f.f)).gvs(0)
w=t-(u==null?t:u)}else w=0
v=B.j.D(w,-1,0)
u=A.dr()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fE(v*3.141592653589793*0.5)
return A.fA(B.a5,A.d3(e,B.j.D(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.dhr.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJn(B.qy,B.iB)},
$S:0}
C.dhd.prototype={
$0(){var w=this.a
return w.m(new C.dhc(w))},
$S:0}
C.dhc.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dhe.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).N(null)
return null},
$S:0}
C.dgU.prototype={
$1(d){var w,v,u=null,t=A.l(26),s=E.kv.j(0.5),r=x.p,q=A.a([D.fQW,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ct(p.d)?"Write this book":"Write a new book"
q.push(p.a_3(d,B.e9,w,J.ct(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.a_3(d,K.aqm,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cJ(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cw,A.d("Your book is in English.",u,u,u,u,u,u,A.m(u,u,D.kP.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cw,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.m(u,u,D.kP.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.a_3(d,X.ark,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.a_3(d,B.oM,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.a_3(d,B.oM,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.u(q,r)}return A.eG(u,E.Cb,A.bm(!0,new A.D(Ac.yY,A.x(q,B.E,u,B.e,B.N,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,B.OB,u,B.d6,u,new A.b9(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:46}
C.dhf.prototype={
$0(){A.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.dh6.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cJ(w.d)
return new C.a_M(v,J.cJ(w.d),w.r+1,null)},
$S:z+44}
C.dh7.prototype={
$1(d){var w=null
return A.oR(!1,A.ek(w,w,w,E.Cb,new A.k5(this.a,new C.dh5(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:347}
C.dh5.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aba,B.p5,A.E(A.d(e,w,w,w,w,w,w,B.jC,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:766}
C.dh8.prototype={
$0(){return this.a.a=!1},
$S:51}
C.dh9.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:201}
C.dha.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dhb.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Bu(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.SL(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.dh4(s,t))
w=4
return A.b(s.lj(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dh4.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dhm.prototype={
$1(d){var w=null
return A.oR(!1,A.ek(w,w,w,E.Cb,new A.k5(this.a,new C.dhl(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:347}
C.dhl.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aba,B.p5,A.E(A.d(e,w,w,w,w,w,w,B.jC,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:766}
C.dhn.prototype={
$0(){return this.a.a=!1},
$S:51}
C.dho.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:201}
C.dhp.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:201}
C.dhq.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.Bu(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lj(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dgV.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bli(B.qy,A4.O9)},
$S:0}
C.dgW.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJn(B.qy,A4.O9)},
$S:0}
C.djh.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dji.prototype={
$1(d){var w=this.a
return w.m(new C.djg(w))},
$S:9}
C.djg.prototype={
$0(){return this.a.e="page"},
$S:0}
C.djj.prototype={
$1(d){var w=this.a
return w.m(new C.djf(w))},
$S:9}
C.djf.prototype={
$0(){return this.a.e="book"},
$S:0}
C.djk.prototype={
$1(d){var w=this.a
return w.m(new C.dje(w))},
$S:9}
C.dje.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.djl.prototype={
$0(){var w=this.a
return w.m(new C.djd(w,this.b))},
$S:0}
C.djd.prototype={
$0(){var w=this.b
this.a.d.sb3(0,w)
return w},
$S:0}
C.djm.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga2U()
A.a6(this.b,!1).N(new A.brG(w,v))},
$S:0}
C.dhK.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dhJ.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a_I(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dhO.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dhN.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.bbg(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hs,v,v,v)
return A.ek(A.a([A.bO(!1,B.ds,v,v,!0,v,v,v,new C.dhL(d),v,v),A.bI(B.xG,v,new C.dhM(d),A.bo(B.nq,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.Cb,w,v,v,v,v,D.fPI,v)},
$S:18}
C.dhL.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dhM.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dhP.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dhQ.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.c9(A.bZ(B.bI,r,B.br,t,18,14),B.t,t,B.y,t,t,D.bFu,t,t,B.ah)},
$S:310}
C.dhI.prototype={
$0(){return this.a.R1(0,this.b)},
$S:0}
C.dhH.prototype={
$0(){return this.a.Qt(0,this.b)},
$S:0}
C.cQ8.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cQ9.prototype={
$0(){return B.d.gH(D.A1)},
$S:z+14}
C.cQa.prototype={
$4(d,e,f,g){var w=null,v=A.l(e)
return A.bR(0,new A.D(d,new A.bM(new A.o(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.n),B.bi,w,w),w),0,0,0)},
$S:1986}
C.d8H.prototype={
$1(d){return this.a.m(new C.d8G(this.b,this.c))},
$S:9}
C.d8G.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d95.prototype={
$1(d){return this.a.m(new C.d8T())},
$S:2}
C.d8T.prototype={
$0(){},
$S:0}
C.d96.prototype={
$1(d){return this.a.m(new C.d8S())},
$S:2}
C.d8S.prototype={
$0(){},
$S:0}
C.d97.prototype={
$0(){var w=this.a
return w.m(new C.d8R(w,this.b))},
$S:0}
C.d8R.prototype={
$0(){var w=this.a
return w.d=w.gox().Gj(this.b.a)},
$S:0}
C.d98.prototype={
$0(){var w=this.a
return w.m(new C.d8Q(w,this.b))},
$S:0}
C.d8Q.prototype={
$0(){var w=this.a
return w.d=w.gox().cOu(this.b)},
$S:0}
C.d99.prototype={
$1(d){return this.a.m(new C.d8P())},
$S:2}
C.d8P.prototype={
$0(){},
$S:0}
C.d9a.prototype={
$0(){var w=this.a
return w.m(new C.d8O(w,this.b))},
$S:0}
C.d8O.prototype={
$0(){var w=this.a
return w.d=w.gox().cOz(this.b.a)},
$S:0}
C.d9b.prototype={
$1(d){var w=this.a
return w.m(new C.d90(w,d))},
$S:6}
C.d90.prototype={
$0(){var w=this.a
return w.d=w.gox().cPt(this.b)},
$S:0}
C.d9c.prototype={
$1(d){var w=this.a
return w.d=w.gox().aGj(d)},
$S:2}
C.d9d.prototype={
$1(d){var w=this.a
return w.d=w.gox().cOC(d)},
$S:2}
C.d9f.prototype={
$1(d){var w=this.a
return w.d=w.gox().cPr(d)},
$S:2}
C.d9g.prototype={
$1(d){var w=this.a
return w.m(new C.d9_(w,d))},
$S:9}
C.d9_.prototype={
$0(){var w=this.a
return w.d=w.gox().cPi(this.b)},
$S:0}
C.d9h.prototype={
$0(){var w=this.a,v=w.gox(),u=B.a.i(w.gz7(0).a.a),t=B.a.i(w.gaDv().a.a)
u=v.bg_(B.a.i(w.gat6().a.a),t,u)
A.a6(this.b,!1).N(u)
return null},
$S:0}
C.bSe.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bS8.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bS7(w,d))},
$S:12}
C.bS7.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bSh.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bS9.prototype={
$0(){var w=this.a
w.Q=D.b29
w.aec(1)
w.r.x=null},
$S:0}
C.bSa.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b29)return
w=new A.e_()
w.cU(u.as*13+u.a.e)
v=u.r
v.Q=3+w.aw(3)
v.z=D.d64[w.aw(6)]
v.as=u.f.a+2.6},
$S:0}
C.bSd.prototype={
$0(){var w=this.a
w.Q=D.adO
w.aec(2)
w.r.z=null},
$S:0}
C.bSc.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hHb
t.aec(3)
w=t.r
w.d=s
w.x="I say: "+t.gCD()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.aw(3)
w.z=s?D.dcF[v.aw(4)]:D.dy5[v.aw(3)]
w.as=t.a+2.8},
$S:0}
C.bSf.prototype={
$0(){var w=this.a
w.Q=D.b2a
w.CW=this.b
w.cy=1
w.aec(4)
w.r.f=w.f.a+5},
$S:0}
C.bSg.prototype={
$0(){},
$S:0}
C.bSb.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bS5.prototype={
$0(){return this.a.Ld(this.b)},
$S:0}
C.bS6.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bTL.prototype={
$0(){var w=this
return w.a.Rl(w.b,0,w.c,w.d)},
$S:0}
C.bTM.prototype={
$0(){var w=this
return w.a.Rl(w.b,3,w.c,w.d)},
$S:0}
C.bTN.prototype={
$0(){var w=this
return w.a.Rl(w.b,1,w.c,w.d)},
$S:0}
C.bTO.prototype={
$0(){var w=this
return w.a.bUn(w.b,w.c,w.d)},
$S:0}
C.bTP.prototype={
$0(){var w=this
return w.a.Rl(w.b,4,w.c,w.d)},
$S:0}
C.bTQ.prototype={
$0(){var w=this
return w.a.Rl(w.b,2,w.c,w.d)},
$S:0}
C.bTR.prototype={
$0(){var w=this
return w.a.Rl(w.b,5,w.c,w.d)},
$S:0}
C.bTS.prototype={
$2(d,e){return B.j.aQ(d.a,e.a)},
$S:767}
C.bTK.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a6E[d],p=q.a.a5(0,new A.r(0,-q.b*1.2*124)),o=A.fE(r,B.cx,r,3,r,A.cS(r,r,r,r,r,r,r,r,r,D.fue,e),B.a7,B.c_,r,B.dJ,B.c0)
o.nB(130)
w=o.b.a.c
w=p.aJ(0,new A.r(0,w.gba(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bx(A.bW(w,v.gba(v)+12,u+18),B.i4)
u=this.a
v=t.eD(B.dL)
w=$.S()
s=A.L()
s.r=B.dB.gp(0)
u.aq(v,s)
s=A.L()
s.r=D.qp.gp(0)
u.aq(t,s)
w=new A.aH(w.r,B.aj,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.aZ(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.bw())
v=A.L()
v.r=D.qp.gp(0)
u.af(w,v)
o.a4(u,new A.r(t.a+9,t.b+6))},
$S:768}
C.bSv.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.bSw.prototype={
$2(d,e){var w=this.a,v=B.o.aQ(w.amU(d),w.amU(e))
if(v!==0)return v
return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.fvV.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.h6h.prototype={
$2(d,e){if(e!=null)J.c5(this.a.c4(0,d,new C.h6i()),e)},
$S:z+66}
C.h6i.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.h6j.prototype={
$1(d){return d!==this.a},
$S:3}
C.h6k.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.h6l.prototype={
$1(d){return d!==this.a&&!B.d.aU(this.b,new C.h6g(this.c,d))},
$S:3}
C.h6g.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.h6m.prototype={
$1(d){return d!==this.a},
$S:3}
C.h6n.prototype={
$1(d){return d!==this.a},
$S:3}
C.h6o.prototype={
$1(d){return d!==this.a&&!B.d.aU(this.b,new C.h6f(this.c,d))},
$S:3}
C.h6f.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fJl.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fXI.prototype={
$1(d){return d.Q},
$S:z+15}
C.fXJ.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fFb.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fMb.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bNi.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.h6H.prototype={
$2(d,e){return B.o.aQ(C.hzB(d),C.hzB(e))},
$S:229}
C.h6I.prototype={
$1(d){return d!==this.a},
$S:3}
C.fYk.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bLr.prototype={
$0(){var w=this.a
w.ch=!0
w.b9v()},
$S:0}
C.bLm.prototype={
$0(){},
$S:0}
C.bLs.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bLk.prototype={
$0(){},
$S:0}
C.bLl.prototype={
$0(){},
$S:0}
C.bLq.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bR(0,A.b4(u,u,u,new C.bdu(t,u),B.az),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.l(14)
s.push(A.ao(u,A.p(u,A.d(t.dy,u,u,u,u,u,u,D.fBT,B.K,u,u),B.f,u,u,new A.o(w,u,u,v,u,u,B.n),u,u,u,u,B.bU,u,u,u),u,u,14,14,6,u))}return A.az(B.bX,new A.an(B.a0,u,B.ad,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bLn(t,e),u,u,u,u,u,u,u,new C.bLo(t,e),u,u,u,u,u,u,u,u,u,new C.bLp(t,e),u,u,u,u,!1,B.a4)},
$S:36}
C.bLn.prototype={
$1(d){return this.a.db=B.j.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bLp.prototype={
$1(d){return this.a.db=B.j.D(d.b.a/this.b.b,0.08,0.92)},
$S:23}
C.bLo.prototype={
$1(d){return this.a.db=B.j.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bLj.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.cr8.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cr9.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cr7(w))},
$S:0}
C.cr7.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cra.prototype={
$0(){var w=this,v=w.a
v.gj1()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.crb.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.crc.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.crd.prototype={
$0(){},
$S:0}
C.cre.prototype={
$0(){var w=this.a
w.z=w.Xy(++w.e)
w.Q=A.c1(w.gkS()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cr4.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.cr5.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj1().length,e=i/2,d=new C.cr6(i,f,h),a0=g.as,a1=A.a3(a0).k("b7<2>")
a0=A.C(new A.b7(a0,a1),a1.k("M.E"))
a0=A.bR(0,A.c6(new A.hb(a0),new C.cr_(g,new A.r(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj1().length!==0&&!B.d.q(g.gj1(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.QP(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cK(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new S.N0(new C.cr0(g,u),new C.cr1(g,u),new C.cr2(g,u),j,j,new A.bf("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.d(a1,j,j,j,j,j,j,A.m(j,j,B.a.q(a1,"not a child")?B.fi:B.bc,j,j,j,j,j,j,j,j,13,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj1().length!==0&&!B.d.q(g.gj1(),-1)){a0=g.e+1>=g.gkS().length?"See my result":"Next family"
g=A.as(C.uy(a0,g.gqs(g),B.cT,B.jt,D.fB),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.Xy(0):s).length))break
if(!B.d.q(g.gj1(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.Xy(0)
o=s}else o=s
n=s[u]
n=A.e3(B.z,new C.QP(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.Xy(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.r9(new A.bq(0,p,t),new C.cr3(),new S.Eo(u,j,new C.QP(l.b,k,62,!1,j),new A.kK(0.25,new C.QP(m.b,k,62,!1,j),j),new A.kc(n,B.ai,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.J,S.hDd(),!0,!0,j,j,j,j,j,j,!1,B.iT,j,new A.bf("chip-"+r,a0),w),B.b0,B.iR,j,new A.bf("t"+r+"-"+q,a0),v))}++u}g=A.bZ(B.fU,a1,B.br,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ad,B.t,e,j)},
$S:63}
C.cr6.prototype={
$1(d){return new A.r(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:758}
C.cr_.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.gj1().length!==0&&!B.d.q(t.gj1(),-1)
return A.b4(p,p,p,new C.bcY(q.b,o,v,w,p),B.az)},
$S:57}
C.cr1.prototype={
$1(d){return this.a.gj1()[this.b]===-1},
$S:z+30}
C.cr2.prototype={
$1(d){return this.a.cSl(this.b,d.a)},
$S:z+31}
C.cr0.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj1()[t]!==-1,r=A.l(18),q=e.length!==0?B.cT.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.cT:B.k0,B.r,2)
u=s?A.lF(new C.cqZ(),A.as(new C.QP(u.gaFM()[u.gj1()[t]].b,u.gaFM()[u.gj1()[t]].a,62,!1,v),v,v,v),B.nk,B.iR,v,v,new A.bq(0.3,1,x.X),x.i):D.bdq
return A.cT(v,u,v,v,B.b0,new A.o(q,v,w,r,v,v,B.n),B.a3,v,100,v,v,v,v,v,88)},
$S:1989}
C.cqZ.prototype={
$3(d,e,f){return A.e3(B.z,f,e,null,null)},
$S:112}
C.cr3.prototype={
$3(d,e,f){return A.dP(f,new A.r(Math.sin(e*24)*8*(1-e),0))},
$S:112}
C.cRc.prototype={
$1(d){return d>=1},
$S:118}
C.cG5.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkS()[w.e].d.length)w.m(new C.cG4(w))},
$S:12}
C.cG4.prototype={
$0(){return this.a.f++},
$S:0}
C.cGd.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cGe.prototype={
$0(){var w=this.a,v=this.b
w.z.I(0,v)
w.Q=v},
$S:0}
C.cGf.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cGc(w))},
$S:0}
C.cGc.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cGg.prototype={
$0(){return this.a.f++},
$S:0}
C.cGh.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cGi.prototype={
$0(){},
$S:0}
C.cGj.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a8(0)
w.as=!1
w.ay=0},
$S:0}
C.cG7.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.cG8.prototype={
$3(d,e,f){var w=null
return A.lF(new C.cG6(this.a,e),w,B.b0,B.hM,w,w,new A.bq(w,this.b,x.X),x.i)},
$S:1990}
C.cG6.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.cT.j(u.as?0.6:0.15)
t=A.a([new A.ab(0,B.G,t,B.J,u.as?40:18)],x.V)
w=this.b
return A.p(v,A.hZ(new A.BD(new A.uQ(B.w.j(e),B.M9,v,B.YI),H.bY1(A.b4(v,v,v,new C.aC_(u.gkS()[u.e].c,u.as,v),B.az),new A.Et(w,w,B.WA)),v),B.aq),B.f,v,v,new A.o(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:1991}
C.cG9.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,14*(1-e))),e)},
$S:104}
C.cGa.prototype={
$3(d,e,f){return A.dP(f,new A.r(Math.sin(e*22)*8*(1-e),0))},
$S:112}
C.cGb.prototype={
$0(){return this.a.bqD(this.b)},
$S:0}
C.f8t.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.anq$)
v.anq$=w
v.qe$.sp(0,w)
v.ark(u)},
$S:7}
C.fiD.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:12}
C.bTg.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bTf())},
$S:0}
C.bTf.prototype={
$0(){},
$S:0}
C.bTd.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bTb.prototype={
$0(){},
$S:0}
C.bTc.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gMV()
w=s+1>=r.length?3:5
break
case 3:q=C.bH1(p.gaq9(0),0,r.length)
p.m(new C.bT8(p,q))
o=p
w=6
return A.b(C.BQ(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.BR(s.d,s.c.a,"school",p.gaq9(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bT9())
w=4
break
case 5:p.m(new C.bTa(p))
p.gqA().W6(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bT8.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bT9.prototype={
$0(){},
$S:0}
C.bTa.prototype={
$0(){return this.a.x++},
$S:0}
C.bTe.prototype={
$0(){return this.a.Ld(this.b)},
$S:0}
C.bT7.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.f8u.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.r(t,s),q=v.b,p=v.d,o=p?C.hDr(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.EA
C.SJ(q,D.es5,0,0.2,-0.6,-0.2,null,w,D.eqP,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a5(0,new A.r(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.S()
p=A.L()
p.r=D.Gv.gp(0)
p.c=3
p.d=B.bG
q.ah(new A.r(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f8v.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.SJ(this.a,D.erb,0,u,0.7,-0.5,null,null,D.JR,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f8w.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.SJ(this.a,D.esS,0,0,0.8,-0.5,null,null,D.JR,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f8x.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.SJ(w.b,D.es_,0,v,-0.8,-0.5,null,null,D.JR,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f8y.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.r(34,-122+Math.sin(w*5)*5)
else v=v?D.es3:D.EA
C.SJ(p,D.erv,0,t,0,-0.6,null,v,D.JR,3,0,s,1.3,u,0,w,0)
q=q.ccW(new A.r(222,455),9)
$.S()
w=A.L()
w.r=B.cT.gp(0)
p.af(q,w)},
$S:0}
C.f8z.prototype={
$2(d,e){return B.j.aQ(d.a,e.a)},
$S:767}
C.bSU.prototype={
$2(d,e){return d+e},
$S:62}
C.bT4.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bT5.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bT6.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj1()[u.b]=s
t.gj1()[u.d]=t.y
w=t.as
v=t.qe$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bT0.prototype={
$1(d){return d},
$S:99}
C.bT_.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.qe$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bT1.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bT2.prototype={
$0(){},
$S:0}
C.bT3.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.FN(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.cn(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.a8(0)},
$S:0}
C.bSW.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.bSX.prototype={
$2(d,e){var w=this.a
w=w.gkS()[w.f].e
return B.o.aQ(w[d],w[e])},
$S:62}
C.bSY.prototype={
$2(d,e){var w=null,v=C.hey(new A.av(A.aS(1/0,e.a,e.b),A.aS(1/0,e.c,e.d))),u=this.a
return A.az(B.bX,new A.en(A.b4(w,w,w,new C.bk6(u,u.qe$),B.az),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bSV(u,v),w,w,w,w,!1,B.a4)},
$S:36}
C.bSV.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj1().length
u=B.o.D(B.j.bg((t.a-s.a)/r/450*v),0,v-1)
w.d2b(w.gj1()[u])}},
$S:23}
C.bSZ.prototype={
$1(d){var w=this.a
return w.gkS()[w.f].d[d]},
$S:77}
C.dsr.prototype={
$2(d,e){return 0},
$S:62}
C.bSG.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bSF())},
$S:0}
C.bSF.prototype={
$0(){},
$S:0}
C.bSE.prototype={
$0(){},
$S:0}
C.bSy.prototype={
$0(){},
$S:0}
C.bSz.prototype={
$0(){},
$S:0}
C.bSD.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.Bn},
$S:0}
C.bSC.prototype={
$1(d){var w=null,v=this.a.gqA(),u=A.d(d,w,w,w,w,w,w,D.aWt,w,w,w),t=v.gbn3(0)
return A.az(B.bX,A.x(A.a([u,B.bF,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aWH,w,w,w)],x.p),B.E,w,B.e,B.h,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbt_(v),w,w,w,w,w,w,!1,B.a4)},
$S:142}
C.bSA.prototype={
$0(){return this.a.Ld(this.b)},
$S:0}
C.bSB.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bSx.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.e2O.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e2P.prototype={
$1(d){return this.a},
$S:39}
C.e2Q.prototype={
$0(){var w=this.a
return w.d=w.gT2().bft(this.b)},
$S:0}
C.e2M.prototype={
$1(d){return new C.U8(this.a,null)},
$S:z+32}
C.e2N.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e2L.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hs,w,w,w)
return A.ek(A.a([A.bO(!1,E.aY4,w,w,!0,w,w,w,new C.e2J(d),w,w),A.bO(!1,D.fXk,w,w,!0,w,w,w,new C.e2K(d),w,w)],x.p),w,w,D.fB,v,w,w,w,w,D.fJN,w)},
$S:18}
C.e2J.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.e2K.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.e2I.prototype={
$0(){var w=null,v=this.a.c.L(x.q).f,u=this.b
return v.T(A.b2(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e2R.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:13}
C.e2S.prototype={
$0(){var w=this.a,v=this.b,u=C.bEK(v,10,w.r,!1)
return w.uD(C.hnx(w.a.d,"kahoot",u,w.gb72(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e2T.prototype={
$0(){var w=this.a
return w.uD(new C.amg(this.b,w.a.d,w.r,null))},
$S:0}
C.e2U.prototype={
$0(){var w=this.a
return w.uD(new C.akr(this.b,w.a.d,w.r,null))},
$S:0}
C.e2X.prototype={
$0(){var w=this.a
return w.uD(new C.avf(this.b,w.a.d,w.r,null))},
$S:0}
C.e2Y.prototype={
$0(){var w=this.a
return w.uD(new C.azd(this.b,w.a.d,w.r,null))},
$S:0}
C.e2Z.prototype={
$0(){var w=this.a
return w.uD(new C.amj(this.b,w.a.d,w.r,null))},
$S:0}
C.e3_.prototype={
$0(){var w=this.a
return w.uD(new C.amn(this.b,w.a.d,w.r,null))},
$S:0}
C.e30.prototype={
$0(){var w=this.a
return w.uD(new C.amp(this.b,w.a.d,w.r,null))},
$S:0}
C.e31.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d2w()
return v.uD(C.hnx(v.a.d,"creator_"+u.a,w,v.gb72(),"A game by the family",t,this.c.a))},
$S:0}
C.e32.prototype={
$0(){return this.a.P_(this.b)},
$S:0}
C.e33.prototype={
$0(){return this.a.Y_(0,this.b)},
$S:0}
C.e2V.prototype={
$0(){return this.a.P_(null)},
$S:0}
C.e2W.prototype={
$0(){return this.a.L(x.q).f.T(D.fn6)},
$S:0}
C.bSS.prototype={
$0(){var w=this.a
w.d=D.b1y
w.z=3},
$S:0}
C.bST.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aQf()}else w.m(new C.bSR(w))},
$S:12}
C.bSR.prototype={
$0(){return this.a.z--},
$S:0}
C.bSI.prototype={
$0(){var w=this.a
w.d=D.adu
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bSJ.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bSH(w))
if(w.as<=0){d.a1(0)
w.b6Z(-1)}},
$S:12}
C.bSH.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bSO.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.Xg},
$S:0}
C.bSP.prototype={
$0(){return this.a.e++},
$S:0}
C.bSL.prototype={
$0(){var w=this.a
w.d=D.b1z
w.ay=this.b},
$S:0}
C.bSM.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bSQ.prototype={
$2(d,e){return B.o.aQ(e.b,d.b)},
$S:1992}
C.bSN.prototype={
$0(){return this.a.Ld(this.b)},
$S:0}
C.bSK.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bSi.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.ax()
s=A.a([new A.au(new A.ba(s,B.b6,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.I)(t),++v){u=t[v]
s.push(new A.au(new A.ba(u,B.b6,B.aP),r))}return s},
$S:1993}
C.bSj.prototype={
$0(){return this.a.gDc().c.push(C.h8l(null,0,20,""))},
$S:0}
C.bSt.prototype={
$1(d){var w=null
return A.bz(w,new A.b6(4,A.l(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dq,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.W7,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:276}
C.bSs.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gDc().c,m=this.b,l=n[m],k=o.cfZ(l),j=B.c.j(0.06),i=A.l(18),h=A.K(B.aT,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.L5,p,p,p),B.b3],g)
if(n.length>1)f.push(A.aI(p,p,p,p,B.asc,p,p,p,new C.bSn(o,m),p,p,p,p,p,p))
n=J.a8(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.h,0,p,p),A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bSo(l),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dj,!0,B.a7,p,B.ao,p,p,p,p),B.P],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aEa[v]
t=D.aDR[v]
s=v+1
f.push(new A.D(B.eO,new A.c7(B.aM,B.e,B.h,B.l,p,B.p,p,0,A.a([A.d(u,p,p,p,p,p,p,new A.G(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.ae,new A.by(1,B.ba,A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bSp(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dj,!0,B.a7,p,B.ao,p,p,p,p),p),new At.Pt(v,l.c,new C.bSq(o,l),p,!1,D.lG,p,p,p,p,p,!1,!1,p,I.b1Y,p,p,p,p,p,w)],g),p),p))}f.push(D.fPn)
f.push(B.am)
n=A.a([D.fIS,B.ae],g)
for(r=0;r<3;++r){q=D.cg0[r]
n.push(new A.D(B.f0,A.jz(p,p,p,A.d(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bSr(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.h,0,p,p))
return A.p(p,A.x(f,B.E,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.n),p,p,p,B.kz,B.bj,p,p,p)},
$S:155}
C.bSn.prototype={
$0(){var w=this.a
return w.m(new C.bSm(w,this.b))},
$S:0}
C.bSm.prototype={
$0(){return B.d.cH(this.a.gDc().c,this.b)},
$S:0}
C.bSo.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bSp.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bSq.prototype={
$1(d){return this.a.m(new C.bSl(this.b,d))},
$S:150}
C.bSl.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bSr.prototype={
$1(d){return this.a.m(new C.bSk(this.b,this.c))},
$S:9}
C.bSk.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e4t.prototype={
$0(){var w=this.a
w.wz()
w.a.bv()
w.a.qt()},
$S:0}
C.e4s.prototype={
$0(){var w=this.a
w.wz()
w.a.bv()
w.a.qt()},
$S:0}
C.e4v.prototype={
$0(){var w=this,v=w.b
if(J.cJ(v)||J.ct(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e4w.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e4x.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e4r.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e4u.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e4z.prototype={
$0(){this.a.Pl()
return null},
$S:0}
C.e4y.prototype={
$0(){return this.a.F6(this.b)},
$S:0}
C.e3U.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bO(!1,B.ds,w,w,!0,w,w,w,new C.e3S(d),w,w),r=A.bo(B.bQ,w,w,w,w,w,w,w,w,w,w,w)
return A.ek(A.a([s,A.bI(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e3T(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e3S.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.e3T.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.e3V.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cOY(this.b)},
$S:0}
C.e3P.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aVR(w.b,w.c,w.d)},
$S:7}
C.e3g.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e3h.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3y.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Hm(t.a.c),$async$$0)
case 2:s=r.nC(q.dI(e,new C.e3w(t)))
if(s!=null&&t.c!=null)t.m(new C.e3x(t,s))
t.a.bv()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e3w.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e3x.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3z.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e3A.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3O.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cPK(C.hDB(w),w)},
$S:0}
C.e3v.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.Wt(u,w,C.aRr(u,w),new C.e3u(v),null)},
$S:z+37}
C.e3u.prototype={
$1(d){return this.bot(d)},
bot(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.e3t(s,d))
w=3
return A.b(s.uz(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:548}
C.e3t.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.bft(this.b)},
$S:0}
C.e3L.prototype={
$1(d){return d.as},
$S:z+1}
C.e3M.prototype={
$1(d){var w=this
return new A.e2(new C.e3K(w.a,w.b,w.c,w.d,w.e),null)},
$S:20}
C.e3K.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.ef:B.c,h=A.l(26),g=A.K(B.bQ.j(0.5),B.r,1.5),f=A.p(k,D.bVJ,B.f,k,k,new A.o(B.bQ.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a2,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,12.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.h,0,B.p),1)
f=A.A(A.a([f,B.bb,a0,A.aI(k,k,k,k,A.W(B.cB,j?B.bu:B.bh,k,k,k,k),k,k,k,new C.e3E(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.h,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.I)(v),++s){r=v[s]
q=t.a===r?B.bQ:B.bQ.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.ay(B.bQ,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bQ
a0.push(A.az(k,A.cT(k,A.d(m,k,k,k,k,k,k,new A.G(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b0,new A.o(q,k,new A.bG(n,n,n,n),new A.be(p,p,p,p),k,k,B.n),B.ha,k,k,k,k,B.CE,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e3F(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bZ(B.bI,a0,B.br,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c6V,new A.D(D.bFU,f,k),new A.D(D.bFL,e,k),new A.D(B.t7,a0,k),new A.D(X.anv,A.d(v,k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.W(Aj.aq6,j?B.bu:B.bh,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bFN,A.A(A.a([a0,B.as,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,k,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.b9A(k,B.bQ,k,k,!1,B.y,k,k,k,k,k,k,new C.e3G(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.h,0,k,k),k))}f.push(B.aB)
j=A.l(20)
e=A.a([new A.ab(0,B.G,B.aD.j(0.35),B.i3,12)],x.V)
f.push(A.az(k,A.p(k,A.A(A.a([D.fJc,B.bb,D.bKb,D.bWo],w),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.caH,B.n),k,k,k,B.hZ,B.bH,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e3H(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.wD,A.A(A.a([A.E(A.dV(B.ds,new C.e3I(a1),k),1),B.as,A.E(A.bI(M.aYv,k,new C.e3J(t,a1),A.bo(B.bQ,k,k,k,k,k,B.co,k,k,k,k,k)),1)],w),B.l,k,B.e,B.h,0,k,k),k))
return A.bm(!0,A.p(k,A.c9(A.x(f,B.E,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.aq,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.yP,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:89}
C.e3E.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e3F.prototype={
$0(){return this.b.$1(new C.e3D(this.a,this.c))},
$S:0}
C.e3D.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e3G.prototype={
$1(d){var w=this.a
w.m(new C.e3B(w,d))
this.b.$1(new C.e3C())},
$S:9}
C.e3B.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e3C.prototype={
$0(){},
$S:0}
C.e3H.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(new A.aI6(!0,w))
return null},
$S:0}
C.e3I.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e3J.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(new A.aI6(!1,w))
return null},
$S:0}
C.e3N.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cPy(this.b.b)
w.r.a8(0)},
$S:0}
C.e34.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.ajc(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hwN(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e35.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aGg(w)},
$S:0}
C.e3X.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aex(this.b,w,this.c,null)},
$S:z+39}
C.e3R.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.ef:B.c,t=A.l(20),s=A.W(B.kZ,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.u(p,A.a([B.af,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.l,w,B.e,B.N,0,B.p)
return A.ek(A.a([A.bI(D.h05,w,new C.e3Q(d),A.bo(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.b8,w,u,v,w,s,w,new A.b9(t,B.a1),r,w)},
$S:18}
C.e3Q.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e36.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e37.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e38.prototype={
$1(d){return d.a},
$S:z+8}
C.e39.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.I)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.i_(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aGg(w)},
$S:0}
C.e3d.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.ajc(q)
w=A.U(q).k("Y<1>")
q=A.C(new A.Y(q,new C.e3b(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hwN(v.e,null,r,v.f,v.r,new C.e3c(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e3c.prototype={
$0(){return this.a.abm(this.b)},
$S:0}
C.e3b.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e3e.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("N<1,i_>")
w=A.C(new A.N(w,new C.e3a(this.b),v),v.k("ak.E"))
u.d=t.aGg(w)},
$S:0}
C.e3a.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e3W.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e3q.prototype={
$1(d){return d.length!==0},
$S:3}
C.e3r.prototype={
$1(d){var w=this
return new A.e2(new C.e3p(w.a,w.b,w.c,w.d),null)},
$S:20}
C.e3p.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.ef:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.m(v,v,t?B.aS:B.av,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bh,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bh,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.u(p,new A.N(o,new C.e3l(u,e,o),A.U(o).k("N<1,v>")))
p.push(B.P)
u=w.d
p.push(A.aN(v,B.Z,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bz(v,new A.b6(4,A.l(12),B.du),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ak,v,v,v,v,v,B.mB,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a7,v,B.ao,v,v,v,v))
p=A.x(p,B.al,v,B.e,B.N,0,B.p)
t=w.a
return A.ek(A.a([A.bO(!1,B.ds,v,v,!0,v,v,v,new C.e3m(d),v,v),A.bI(B.Lh,v,new C.e3n(t,u,o,e),A.bo(B.bQ,v,v,v,v,v,v,v,v,v,v,v)),A.bI(D.fNK,v,new C.e3o(t,u,o,d),A.bo(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:240}
C.e3l.prototype={
$1(d){var w=null
return A.dJ(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.m(w,w,this.a.a?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aI(w,w,w,w,D.c3K,w,w,w,new C.e3k(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1994}
C.e3k.prototype={
$0(){return this.a.$1(new C.e3i(this.b,this.c))},
$S:0}
C.e3i.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.e3m.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.e3n.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e3j(w.c,u))
v.bP(0,B.cf)}},
$S:0}
C.e3j.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e3o.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).N(!0)},
$S:0}
C.e3s.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cQc(this.b,D.uO,C.Hk(v,w.a.c))},
$S:0}
C.e43.prototype={
$1(d){return d.as},
$S:z+1}
C.e44.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j2(this.b,w)},
$S:0}
C.e45.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.itl(v)
return w.WN(v==null?null:v.a)},
$S:0}
C.e46.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.i5k(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aS(1/0,e.a,e.b)
s=A.aS(1/0,e.c,e.d)
l.cxn(new A.av(u,t),v.gbm9(),new A.av(k,s))}k=A.l(22)
s=this.b.a
r=s?D.d3T:D.d20
q=A.K(s?B.dq:D.blc,B.r,1)
p=A.l(22)
o=A.bR(0,A.b4(m,m,m,new C.bge(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bu(p,new A.an(B.a0,m,B.ad,B.t,A.a([o,A.bR(0,A.v1(new A.Q(n,n,n,n),new A.a5(u,t,new C.bh9(l.d,v,l.f,w,new C.e4_(l),l.gcha(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bz1(s,new C.e40(l,e),new C.e41(l,e),new C.e42(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a7(B.aZ,B.b4,B.x,r,m,m),B.n),m,m,m,Z.amA,m,m,m,m)},
$S:172}
C.e4_.prototype={
$1(d){var w=this.a
w.m(new C.e3Y(w,d))},
$S:2}
C.e3Y.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.I(0,v)},
$S:0}
C.e40.prototype={
$0(){var w=this.b
return this.a.bdD(1.25,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e41.prototype={
$0(){var w=this.b
return this.a.bdD(0.8,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e42.prototype={
$0(){var w=this,v=w.b
return w.a.aVR(new A.av(A.aS(1/0,v.a,v.b),A.aS(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gbm9())},
$S:0}
C.e47.prototype={
$0(){var w=this.a
return w.m(new C.e3Z(w))},
$S:0}
C.e3Z.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e3f.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fI(new A.fx(s.c)),$async$$0)
case 2:t.yA("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dhU.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bkY(u,C.hIg(v.c,u),new C.dhT(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dhT.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dhV.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.boj(d.d,d.c,u.f.q(0,d.a),new C.dhS(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dhS.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fIO.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nC(new A.cM(new A.Y(v,new C.fIP(d),w.k("Y<1>")),new C.fIQ(),w.k("cM<1,n>")))},
$S:z+19}
C.fIP.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fIQ.prototype={
$1(d){return d.a},
$S:z+8}
C.fIM.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fIN.prototype={
$1(d){return d.b},
$S:z+8}
C.fIT.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nC(new A.cM(new A.Y(v,new C.fIU(d),w.k("Y<1>")),new C.fIV(),w.k("cM<1,n>")))},
$S:z+19}
C.fIU.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fIV.prototype={
$1(d){return d.a},
$S:z+8}
C.fIR.prototype={
$1(d){var w,v=A.eu([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.I(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fIS.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dhX.prototype={
$0(){return this.a},
$S:z+46}
C.did.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:254}
C.di5.prototype={
$2(d,e){var w=this.a.c4(0,d,new C.di6()),v=J.a8(w)
if(!v.q(w,e))v.I(w,e)},
$S:123}
C.di6.prototype={
$0(){return A.a([],x.s)},
$S:769}
C.di4.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eK(w,e)
return w===!0},
$S:293}
C.dhY.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.di3.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.di2.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.I(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aT(v==null?D.DV:v)
u=1
while(v.C())u+=s.$2(v.gP(v).a,e)
v=s.b.h(0,d)
v=J.aT(v==null?B.Z:v)
while(v.C()){t=v.gP(v)
if(e.q(0,t))continue
e.I(0,t)
t=w.h(0,t)
t=J.aT(t==null?D.DV:t)
while(t.C())u+=s.$2(t.gP(t).a,e)}return u},
$S:1996}
C.dhZ.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.di7.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.I(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aT(u==null?B.Z:u)
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
t=J.aT(t==null?D.DV:t)
while(t.C()){r=t.gP(t)
if(r.a!==a9&&!B.d.aU(w,new C.di8(r)))w.push(r)}}B.d.bq(w,new C.di9(a8))
B.d.b_(w,new C.dia())
q=C.i5j(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.I)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eYV],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.brq(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:1997}
C.di8.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.di9.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dia.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.dib.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a8(n),v=o.c,u=-1/0,t=0;t<w.gJ(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b7(v,A.a3(v).k("b7<2>")).cF(0,0,B.qa)+88-w.gH(n).a}else u=0
for(w=J.a8(n),v=o.c,t=0;t<w.gJ(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:709}
C.dic.prototype={
$1(d){return 16+d*156},
$S:178}
C.dhW.prototype={
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
t.n(0,d,new C.GD(r,new A.r(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.GD(s,new A.r(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.GD(s,new A.r(e,v)))}t=o.r.h(0,d)
t=J.aT(t==null?B.Z:t)
s=o.w
while(t.C()){r=t.gP(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.KZ(d,new A.r(e+t,w),s,s.length))}},
$S:201}
C.di_.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aLe(new A.r(v.a,v.b+28),new A.r(w.a,w.b+28),!0,null))},
$S:123}
C.di0.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.di1.prototype={
$2(d,e){return B.j.aQ(d.a,e.a)},
$S:770}
C.die.prototype={
$2(d,e){return B.j.aQ(d.a,e.a)},
$S:770}
C.dif.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:471}
C.dig.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:188}
C.dih.prototype={
$1(d){return d>=0.5},
$S:118}
C.fod.prototype={
$3(d,e,f){var w=null,v=A.l(10)
return A.ha(A.aM(!1,v,!0,new A.a5(38,38,A.W(d,this.a.c?B.c:B.cs,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1999}
C.eZf.prototype={
$1(d){var w=null,v=A.l(8),u=B.bQ.j(0.12),t=A.l(8)
return new A.D(B.nE,A.aM(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fyK,B.K,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.OH,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eZe(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eZe.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dyb.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dya.prototype={
$1(d){var w=null,v=A.l(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.o5,B.K,w,w)
return A.ek(A.a([A.bO(!1,B.ds,w,w,!0,w,w,w,new C.dy8(d),w,w),A.bO(!1,A.d("Delete",w,w,w,w,w,w,A.m(w,w,B.mU,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dy9(d),w,w)],x.p),B.b8,B.Cz,w,u,D.bGO,w,D.bIL,new A.b9(v,B.a1),w,w)},
$S:18}
C.dy8.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dy9.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dyk.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dyl.prototype={
$1(d){var w=this.a
return w.m(new C.dyj(w,d))},
$S:z+49}
C.dyj.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dym.prototype={
$1(d){var w=null
return A.qN(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dyp.prototype={
$1(d){var w=this.a
return w.m(new C.dyi(w,d))},
$S:35}
C.dyi.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dyo.prototype={
$1(d){var w=null
return A.qN(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dyq.prototype={
$1(d){var w=this.a
return w.m(new C.dyh(w,d))},
$S:35}
C.dyh.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dyr.prototype={
$0(){var w=this.a
return w.m(new C.dyg(w))},
$S:0}
C.dyg.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dys.prototype={
$0(){var w=this.a
return w.m(new C.dyf(w))},
$S:0}
C.dyf.prototype={
$0(){return++this.a.at},
$S:0}
C.dyt.prototype={
$0(){var w=this.a
return w.m(new C.dye(w))},
$S:0}
C.dye.prototype={
$0(){return--this.a.ax},
$S:0}
C.dyu.prototype={
$0(){var w=this.a
return w.m(new C.dyd(w))},
$S:0}
C.dyd.prototype={
$0(){return++this.a.ax},
$S:0}
C.dyv.prototype={
$1(d){var w=this.a
return w.m(new C.dyc(w,d))},
$S:9}
C.dyc.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dyn.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dyw.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.l(12)
if(p)w=B.bQ.j(0.18)
else w=q.c.a?B.ef:B.c
v=A.l(12)
if(p)u=B.bQ
else u=(q.c.a?B.eh:B.bO).j(0.85)
u=A.K(u,B.r,p?1.5:1)
if(p)t=B.bQ
else t=q.c.a?B.bu:B.bh
t=A.W(f,t,r,r,r,18)
if(p)s=B.bQ
else s=q.c.a?B.bu:B.bh
return A.E(A.aG(!1,B.a3,!0,r,A.aM(!1,o,!0,A.cT(r,A.x(A.a([t,B.ax,A.d(e,r,r,r,r,r,r,A.m(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.h,0,B.p),r,r,B.b0,new A.o(w,r,u,v,r,r,B.n),B.eH,r,r,r,r,B.k6,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dyx(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
$S:z+51}
C.dyx.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dyG.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cfO.prototype={
$2(d,e){return new A.bA(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:98}
C.cfV.prototype={
$1(d){return d.aj()},
$S:z+5}
C.cfW.prototype={
$2(d,e){var w=J.b8(e,new C.cfU(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bA(d,w,x.d2)},
$S:z+53}
C.cfU.prototype={
$1(d){return d.aj()},
$S:z+12}
C.cfQ.prototype={
$1(d){return C.ams(A.a1(d,x.N,x.z))},
$S:z+9}
C.cfR.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cfS.prototype={
$1(d){return C.hnw(A.a1(d,x.N,x.z))},
$S:z+11}
C.cfT.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cg_.prototype={
$1(d){return new A.aIi(d.f.length,d.a,d.b)},
$S:z+55}
C.cg0.prototype={
$2(d,e){return B.a.aQ(d.c,e.c)},
$S:653}
C.cfX.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cfY.prototype={
$1(d){return d.cPa(C.Hk(d,this.a))},
$S:z+85}
C.e4g.prototype={
$1(d){return C.uz(d,this.a.a.c)},
$S:z+3}
C.e4h.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e4l.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e4m.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e4d.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1L(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z8("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pz(r.c,r.e),$async$$0)
case 4:s.z8(p)
w=5
return A.b(s.Kh(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e4e.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1L(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z8("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pz(r.c,r.e),$async$$0)
case 4:s.z8(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e4f.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Ww(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.z8("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.z8("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.z8("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Kh(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ac(j)
o=r.a
if(o.c==null){w=1
break}o.z8(B.a.ek(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e4k.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1K(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.z8("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).ce(A.ed(new C.e4j(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pz(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e4j.prototype={
$1(d){var w=this.b
return new C.a0G(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e4i.prototype={
$1(d){return D.hDG},
$S:z+58}
C.e4o.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e4p.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e4n(w,d)
return new A.D(B.d9,new C.bhd(this.b,d.c,d.a,w,null),null)},
$S:2000}
C.e4n.prototype={
$0(){return this.a.YE(this.b.b)},
$S:0}
C.e48.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e49.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e4a.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e4b.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e4c.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e4q.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a_(s,"NGMYFTSYNC2"))t=!A.cR(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a6(this.b,!1).N(s)
return}},
$S:189}
C.dQi.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dQj.prototype={
$0(){return B.d.gH(D.a72)},
$S:z+60}
C.dQk.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b4(A.as(A.W(this.b.d,B.c.j(0.95),w,w,D.daQ,44),w,w,w),w,w,new C.bm5(u,t,v,w),B.az)},
$S:57}
C.fZR.prototype={
$1(d){return A.pj(new C.fZQ(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:135}
C.fZQ.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.ef:B.c,p=A.a([new A.ab(0,B.G,B.w.j(r?0.35:0.08),B.tI,24)],x.V),o=r?B.eh:B.bO
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.l(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bQ.j(0.18)],x.O)
w=A.p(t,D.bYO,B.f,t,t,new A.o(t,t,t,A.l(12),t,new A.a7(B.a5,B.a8,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.m(t,t,r?B.aS:B.av,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.T,o,new A.D(E.anz,A.A(A.a([w,B.bb,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.m(t,t,r?B.bu:B.bh,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.h,0,B.p),1)],u),B.l,t,B.e,B.h,0,t,t),t),A.E(A.it(!0,t,e,B.y,D.fla,new C.fZP(this.b,s),20,B.an6,t,B.ah,!1),1)],u),B.l,t,B.e,B.h,0,B.p),B.f,t,t,new A.o(q,t,t,B.ld,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:117}
C.fZP.prototype={
$2(d,e){var w=null,v=D.a72[e],u=A.l(16),t=A.l(16),s=this.b.a,r=A.K(s?B.eh:B.bO,B.r,1),q=A.a([new A.ab(0,B.G,B.w.j(s?0.35:0.08),B.et,8)],x.V),p=A.l(15),o=A.E(new C.a7t(v.a,!0,w),1),n=s?B.jZ:B.iO,m=A.d(v.b,w,1,B.a2,w,w,w,A.m(w,w,s?B.aS:B.av,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aG(!1,B.a3,!0,w,A.aM(!1,u,!0,A.eC(A.bu(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.m(w,w,s?B.bu:B.bh,w,w,w,w,w,w,w,w,10,w,w,B.a9,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.h,0,B.p),B.f,n,w,w,w,w,w,w,B.k7,w,w,w)],l),B.al,w,B.e,B.h,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fZO(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)},
$S:80}
C.fZO.prototype={
$0(){A.a6(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cpq.prototype={
$0(){return this.a.ahF(this.b)},
$S:0}
C.fZe.prototype={
$1(d){return D.hyA},
$S:z+61}
C.h6_.prototype={
$1(d){var w=this
return new C.a2s(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.fZi.prototype={
$1(d){return new C.a_k(this.a,null)},
$S:z+63}
C.fZh.prototype={
$1(d){return D.hzB},
$S:z+64}
C.d9t.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.d9u.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d9s(w,d))},
$S:35}
C.d9s.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d9v.prototype={
$1(d){return this.a.KV()},
$S:2}
C.d9w.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.d9p.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.d9q.prototype={
$1(d){return this.a.KV()},
$S:2}
C.d9r.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cHL.prototype={
$0(){},
$S:0}
C.cHR.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cHS.prototype={
$0(){return this.a.aR7(-1)},
$S:0}
C.cHT.prototype={
$1(d){return this.a.m(new C.cHQ())},
$S:2}
C.cHQ.prototype={
$0(){},
$S:0}
C.cHU.prototype={
$0(){return this.a.aR7(1)},
$S:0}
C.cHV.prototype={
$1(d){return this.a.m(new C.cHP())},
$S:2}
C.cHP.prototype={
$0(){},
$S:0}
C.cHW.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.m(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.eh:B.bO
return A.uV(u,u,B.b2,r,u,new C.cHO(t,d),B.wH,s,w,u,new A.ay(v,1,B.r,-1),B.cg)},
$S:2001}
C.cHO.prototype={
$1(d){var w=this.a
return w.m(new C.cHM(w,this.b))},
$S:9}
C.cHM.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cHX.prototype={
$1(d){return this.a.m(new C.cHN())},
$S:2}
C.cHN.prototype={
$0(){},
$S:0}
C.cHY.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.fnJ.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).N(w)},
$S:2}
C.fnK.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.fnL.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).N(w)},
$S:0}
C.fnH.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbDt()
w=w.e
s=A.l(B.o.D(v-1,0,v))
return A.b4(new A.D(D.bIK,new A.en(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.byR(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:57}
C.fnI.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dH.az(0,p)
p=A.l(12)
q=q.a.c
v=A.l(12)
u=A.l(12)
t=w*2.4
s=A.ap(B.aV,B.bQ,w)
s.toString
s=A.a([B.b2,s,B.aV],x.O)
return A.aG(!1,B.a3,!0,p,A.aM(!1,v,!0,A.eC(D.ewI,r,new A.o(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a7(new A.d7(-1.2+t,-0.5),new A.d7(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
$S:137}
C.fXv.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:60}
C.eWp.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eWg.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eWh.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eWn.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e2(new C.eWm(w,this.b),null)},
$S:20}
C.eWm.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.ef:B.c,t=A.l(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eG(w,u,new A.D(B.ant,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.htC(new C.eWj(r,e),r.a),B.aB,A.A(A.a([A.E(A.dV(B.ds,new C.eWk(d),w),1),B.as,A.E(A.bI(B.Wt,w,new C.eWl(r,d),A.bo(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.h,0,w,w)],q),B.al,w,B.e,B.N,0,B.p),w),w,w,w,w,w,B.d6,w,new A.b9(t,B.a1),w)},
$S:103}
C.eWj.prototype={
$1(d){return this.b.$1(new C.eWi(this.a,d))},
$S:35}
C.eWi.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eWk.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.eWl.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(w)
return null},
$S:0}
C.eWo.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.TI(this.b)},
$S:0}
C.eWb.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bfz(w)},
$S:0}
C.eWf.prototype={
$1(d){return this.boQ(d)},
boQ(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Mf(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j2(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eWe.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.eWd(this.b),v),v.k("M.E"))
u.d=t.bfz(w)},
$S:0}
C.eWd.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eWq.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j2(this.b,w)},
$S:0}
C.eWr.prototype={
$1(d){return this.a.bHD(d,this.b)},
$S:z+67}
C.eWc.prototype={
$0(){return this.a.abl(this.b)},
$S:0}
C.h5N.prototype={
$1(d){return new C.aeS(this.a,this.b,this.c,null)},
$S:z+68}
C.eWt.prototype={
$0(){return this.a.a0z(this.b)},
$S:0}
C.eWu.prototype={
$0(){return this.a.QY(this.b)},
$S:0}
C.eWv.prototype={
$0(){return this.a.F1(this.b)},
$S:0}
C.eWw.prototype={
$0(){return this.a.a0A(this.b)},
$S:0}
C.eWs.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.eW6.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eW7.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eW8.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.eWa.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qz(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eW9(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eW9.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eWT.prototype={
$2(d,e){return d+e.gxK()},
$S:z+71}
C.eWP.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eWQ.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eWA.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.ef:B.c,s=A.l(24),r=A.p(v,D.bZh,B.f,v,v,new A.o(B.aA.j(u?0.18:0.08),v,A.K(B.aA.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.m(v,v,u?B.aS:B.av,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.m(v,v,u?B.bu:B.bh,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aS:B.av
u=u?B.eh:B.bO
w=x.p
return A.eG(v,t,new A.D(B.wG,A.x(A.a([r,B.aO,q,B.P,p,B.da,A.A(A.a([A.E(A.dV(B.o7,new C.eWy(d),A.dj(v,v,v,v,v,v,v,v,v,o,v,v,B.fh,v,new A.b9(A.l(14),B.a1),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.as,A.E(A.bI(D.h3Y,v,new C.eWz(d),A.bo(B.aA,v,v,v,v,v,B.fh,v,new A.b9(A.l(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.h,0,v,v)],w),B.l,v,B.e,B.N,0,B.p),v),v,v,v,v,v,B.d6,v,new A.b9(s,B.a1),v)},
$S:46}
C.eWy.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.eWz.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.eWJ.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.ef:B.c,i=A.l(28),h=A.a([new A.ab(0,B.G,B.w.j(k?0.35:0.08),B.fQ,28)],x.V),g=k?D.di5:B.a6l,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.l(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.feg,B.ax,new A.bK(B.a5,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.m(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cD,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.h,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a7(B.ay,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.anx,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bh,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b8r(B.b7,B.jv,new C.eWG(v,d),l,"Camera import","Scan QR"),1),B.as,A.E(v.b8r(B.cG,R.zH,new C.eWH(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.h,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bh,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.l(16)
r=B.aA.j(k?0.14:0.06)
q=A.l(16)
p=A.K(B.aA.j(0.28),B.r,1)
o=A.p(m,D.bYB,B.f,m,m,new A.o(B.aA.j(0.12),m,m,A.l(12),m,m,B.n),m,m,m,m,B.bU,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.m(m,m,k?B.aS:B.av,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bh,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.h,0,B.p),1)
return A.bm(!0,new A.D(B.wA,A.p(m,A.x(A.a([g,new A.D(B.anu,A.x(A.a([w,B.T,u,B.bx,t,B.T,A.aG(!1,B.a3,!0,m,A.aM(!1,s,!0,A.p(m,A.A(A.a([o,B.bb,n,A.W(B.eI,k?B.bu:B.bh,m,m,m,m)],f),B.l,m,B.e,B.h,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bH,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eWI(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)],f),B.E,m,B.e,B.h,0,B.p),m)],f),B.l,m,B.e,B.N,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:26}
C.eWG.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.w9("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eWH.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.w9("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eWI.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.OC(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eWE.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.ef:B.c,m=A.l(24),l=A.a([new A.ab(0,B.G,B.w.j(o?0.35:0.08),B.eR,24)],x.V),k=o?B.eh:B.bO
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.l(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.l(12)
v=this.c
u=o?B.bu:B.bh
u=A.bu(w,new A.a5(48,48,C.aSI(!0,A.l(12),48,Q.Po,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.m(q,q,o?B.aS:B.av,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Bl(v.gxK())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.wA,A.p(q,A.x(A.a([B.T,k,new A.D(D.anr,A.A(A.a([u,B.bb,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.m(q,q,o?B.bu:B.bh,q,q,q,q,q,q,q,q,12,q,q,B.a9,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.h,0,B.p),1)],s),B.l,q,B.e,B.h,0,q,q),q),B.Cq,r.crs(B.va,B.aV,new C.eWC(d),p,"QR code or backup file","Transfer project"),r.b5s(!0,B.ej,B.aA,new C.eWD(d),p,"Remove from this device","Delete project"),B.T],s),B.l,q,B.e,B.N,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:26}
C.eWC.prototype={
$0(){A.a6(this.a,!1).N("transfer")
return null},
$S:0}
C.eWD.prototype={
$0(){A.a6(this.a,!1).N("delete")
return null},
$S:0}
C.eWF.prototype={
$1(d){return this.boR(d)},
boR(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Mf(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wo(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eWW.prototype={
$0(){var w=this.a
w.a.bv()
w.m(new C.eWV(w))},
$S:0}
C.eWV.prototype={
$0(){return this.a.r++},
$S:0}
C.eWX.prototype={
$0(){var w=this.a
return w.m(new C.eWU(w))},
$S:0}
C.eWU.prototype={
$0(){return this.a.r++},
$S:0}
C.eWx.prototype={
$0(){var w=this.a.c
w.toString
return A.j2(w,null)},
$S:0}
C.eWB.prototype={
$0(){return this.a.ckI(this.b)},
$S:0}
C.eWS.prototype={
$0(){var w=this.a
return w.m(new C.eWR(w,this.b))},
$S:0}
C.eWR.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eWM.prototype={
$0(){return this.a.w9("scan")},
$S:0}
C.eWN.prototype={
$0(){return this.a.w9("file")},
$S:0}
C.eWO.prototype={
$1(d){return this.a.crt(d,this.b)},
$S:z+72}
C.eWL.prototype={
$0(){return this.a.F5(this.b)},
$S:0}
C.eWK.prototype={
$0(){return this.a.a14(this.b,this.c)},
$S:0}
C.cH6.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cH5.prototype={
$1(d){return d.aj()},
$S:z+74}
C.cH3.prototype={
$1(d){return C.hOp(A.a1(d,x.N,x.z))},
$S:z+75}
C.cH4.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fHG.prototype={
$1(d){return d.y===D.kY},
$S:z+3}
C.h6y.prototype={
$1(d){return C.aRr(d,this.a)},
$S:z+3}
C.fFa.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bTn.prototype={
$1(d){return!d.as},
$S:z+1}
C.bTm.prototype={
$1(d){return d.aj()},
$S:z+23}
C.bTj.prototype={
$1(d){return C.hny(A.a1(d,x.N,x.z))},
$S:z+24}
C.bTk.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bTl.prototype={
$1(d){return J.k(d)},
$S:17}
C.fvw.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.frb.prototype={
$1(d){return C.hda(A.a1(d,x.N,x.z))},
$S:z+79}
C.frc.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.frd.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.fZ2.prototype={
$1(d){return J.k(d)},
$S:17}
C.fZ3.prototype={
$1(d){return d.a},
$S:z+81}
C.fZ4.prototype={
$1(d){return d.length!==0},
$S:3}
C.fZ5.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.fZ6.prototype={
$1(d){return d.TI(null).aj()},
$S:z+82}
C.h6w.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fI9.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fLl.prototype={
$1(d){return C.ams(A.a1(d,x.N,x.z))},
$S:z+9}
C.fLm.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fLn.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fLo.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fLp.prototype={
$1(d){return C.uz(d,this.a)},
$S:z+3}
C.fYQ.prototype={
$1(d){return C.uz(d,this.a)},
$S:z+3}
C.h6r.prototype={
$1(d){return C.ams(A.a1(d,x.N,x.z))},
$S:z+9}
C.h6s.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.h6t.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fHR.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fHS.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.h6C.prototype={
$1(d){return!d.as},
$S:z+1}
C.fHl.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fHm.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fHn.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.h60.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fMc.prototype={
$1(d){return d.Q},
$S:z+15}
C.fYJ.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fLi.prototype={
$1(d){return C.ams(A.a1(d,x.N,x.z))},
$S:z+9}
C.fLj.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fLk.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fYE.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.frJ.prototype={
$1(d){return d.length!==0},
$S:3}
C.frK.prototype={
$1(d){return C.hny(A.a1(d,x.N,x.z))},
$S:z+24}
C.frL.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.frM.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.frN.prototype={
$1(d){return d.length!==0},
$S:3}
C.fs_.prototype={
$2(d,e){return d.eF(new C.fs0(e))},
$S:2002}
C.fs0.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.ce},
$S:2003}
C.frX.prototype={
$1(d){return C.ia8(d,this.a)},
$S:z+84}
C.frY.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.frZ.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fwd.prototype={
$1(d){return d.a},
$S:z+56}
C.fwe.prototype={
$1(d){return d.length!==0},
$S:3}
C.fwf.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fzb.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fEq.prototype={
$1(d){return C.hzb(d,C.Hk(d,this.a))},
$S:z+5}
C.fEr.prototype={
$1(d){return C.hzc(d,C.Hk(d,this.a))},
$S:z+5};(function aliases(){var w=C.aC1.prototype
w.bwG=w.t
w=C.aAd.prototype
w.bwB=w.t
w=C.aHv.prototype
w.bx3=w.t
w=C.aC2.prototype
w.bwH=w.t
w=C.aC4.prototype
w.bwI=w.t
w=C.aC5.prototype
w.bwJ=w.t
w=C.aNG.prototype
w.bzx=w.t
w=C.aPO.prototype
w.bBS=w.t
w=C.aPP.prototype
w.bBT=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aF2.prototype,"gcon","coo",28)
var r
w(r=C.aC0.prototype,"gchg","chh",65)
v(r,"gaPi","O8",0)
v(r,"gcwJ","Bu",0)
v(r,"gbPr","OQ",0)
v(r,"gcL9","z9",0)
v(r,"gcqq","a1M",0)
v(r,"gbKP","Oy",0)
v(r,"gbPR","Y4",0)
w(r,"gbUX","bUY",78)
v(r,"gbF8","As",0)
v(C.aC3.prototype,"gcL5","FZ",0)
v(r=C.amh.prototype,"gbt1","bt2",2)
v(r,"gbsU","bsV",2)
v(r,"gcMe","cMf",2)
u(r,"gqs","kN",0)
u(r=C.aks.prototype,"geX","fX",2)
w(r,"gccT","ccU",27)
u(C.avg.prototype,"gqs","kN",0)
v(r=C.aze.prototype,"gcXO","cXP",2)
u(r,"gqs","kN",0)
u(C.aLj.prototype,"gbt_","bt0",2)
v(C.amq.prototype,"gC_","cMr",2)
u(r=C.amo.prototype,"gcN7","cN8",2)
u(r,"gqs","kN",0)
v(r=C.amk.prototype,"gbrS","brT",2)
v(r,"gcSj","cSk",2)
u(r=C.amm.prototype,"geX","fX",2)
u(r,"giA","cLL",2)
v(r=C.ami.prototype,"gcLA","cLB",2)
u(r,"gbqK","jH",2)
v(r=C.aFC.prototype,"gahh","wp",0)
v(r,"gcjY","a0W",0)
v(r,"gaTy","IA",0)
v(r=C.aFz.prototype,"gcH4","a3U",0)
v(r,"gahh","wp",0)
v(r,"gcuL","a2q",0)
v(r,"gcjT","b3F",2)
v(r,"gckV","a19",0)
w(r,"gcha","chb",35)
v(r,"gbPJ","IF",0)
v(r,"gcI8","cI9",2)
v(r,"gc6R","ZQ",0)
w(r,"gcfF","cfG",36)
v(r,"gcjH","cjI",2)
v(r=C.aE1.prototype,"gccZ","Qv",0)
v(r,"gcd0","cd1",2)
v(r,"gbMj","aaY",0)
v(r=C.aFB.prototype,"gbTl","YA",0)
v(r,"gc2U","Zh",0)
v(r,"gcB9","a3h",0)
v(r,"gcxi","a2T",0)
v(C.aFA.prototype,"gcx1","aj5",0)
v(C.aus.prototype,"gcfD","a0x",0)
v(C.aAL.prototype,"ga3D","KV",2)
v(C.aAK.prototype,"ga3D","KV",2)
v(C.azr.prototype,"ga3D","KV",2)
v(r=C.aH6.prototype,"gb4Q","Ru",0)
v(r,"gbDX","WH",0)
v(r,"gckJ","ckK",2)
w(C.aH5.prototype,"gcgv","cgw",69)
t(C.aH7.prototype,"gaTt",0,0,null,["$1","$0"],["Iz","bND"],70,0,0)
s(C,"hHl","ijZ",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aF,[C.aq1,C.uS,C.ny,C.Iu,C.ag3,C.KS,C.uT,C.bTT,C.ti,C.bpB,C.amz,C.ae9,C.lw,C.bSu,C.auE,C.zA,C.al8,C.MT,C.bb1,C.aad,C.bii,C.aga,C.aAt,C.afZ,C.aLj,C.KZ,C.GD,C.bhb,C.aLe,C.arp,C.dii,C.lY,C.aVE,C.aVD,C.aTG,C.uk,C.rt,C.lG,C.i_,C.kZ,C.aJc])
u(A.hq,[C.fQ_,C.fPZ,C.fQ0,C.fZK,C.fD6,C.fD7,C.fDc,C.fNJ,C.fNI,C.fNH,C.c8K,C.h_g,C.h_8,C.h_k,C.fHZ,C.dQZ,C.dQU,C.dQV,C.dQx,C.dQt,C.dRd,C.dRe,C.dR7,C.dR8,C.dRf,C.dRg,C.fIK,C.fLf,C.fLg,C.fYO,C.h6q,C.fHQ,C.fZo,C.dhv,C.dgS,C.dh0,C.dhh,C.dgX,C.dh2,C.dgU,C.dh6,C.dh7,C.dh5,C.dhm,C.dhl,C.dji,C.djj,C.djk,C.dhJ,C.dhO,C.dhN,C.cQ8,C.cQa,C.d8H,C.d95,C.d96,C.d99,C.d9b,C.d9c,C.d9d,C.d9f,C.d9g,C.bSe,C.bS8,C.fvV,C.h6j,C.h6k,C.h6l,C.h6g,C.h6m,C.h6n,C.h6o,C.h6f,C.fJl,C.fXI,C.fFb,C.fMb,C.bNi,C.h6I,C.fYk,C.bLs,C.bLn,C.bLp,C.bLo,C.cr6,C.cr1,C.cr2,C.cr0,C.cqZ,C.cr3,C.cRc,C.cG5,C.cG8,C.cG6,C.cG9,C.cGa,C.f8t,C.fiD,C.bT0,C.bSV,C.bSZ,C.bSC,C.e2P,C.e2M,C.e2N,C.e2L,C.e2R,C.bST,C.bSJ,C.bSt,C.bSs,C.bSo,C.bSp,C.bSq,C.bSr,C.e4u,C.e3U,C.e3P,C.e3g,C.e3w,C.e3z,C.e3v,C.e3u,C.e3L,C.e3M,C.e3G,C.e34,C.e3X,C.e3R,C.e36,C.e37,C.e38,C.e3d,C.e3b,C.e3a,C.e3q,C.e3r,C.e3l,C.e43,C.e4_,C.dhU,C.dhV,C.fIO,C.fIP,C.fIQ,C.fIM,C.fIN,C.fIT,C.fIU,C.fIV,C.fIR,C.fIS,C.did,C.di3,C.dhZ,C.di8,C.di9,C.dic,C.di0,C.dif,C.dig,C.dih,C.fod,C.eZf,C.dya,C.dyk,C.dyl,C.dym,C.dyp,C.dyo,C.dyq,C.dyv,C.dyw,C.cfV,C.cfU,C.cfQ,C.cfR,C.cfS,C.cfT,C.cg_,C.cfX,C.cfY,C.e4g,C.e4j,C.e4i,C.e4p,C.e4q,C.dQi,C.fZR,C.fZe,C.h6_,C.fZi,C.fZh,C.d9u,C.d9v,C.d9q,C.cHT,C.cHV,C.cHW,C.cHO,C.cHX,C.fnJ,C.fXv,C.eWn,C.eWj,C.eWf,C.eWd,C.eWr,C.h5N,C.eWA,C.eWJ,C.eWE,C.eWF,C.eWO,C.cH5,C.cH3,C.cH4,C.fHG,C.h6y,C.fFa,C.bTn,C.bTm,C.bTj,C.bTk,C.bTl,C.frb,C.frc,C.fZ2,C.fZ3,C.fZ4,C.fZ5,C.fZ6,C.h6w,C.fI9,C.fLl,C.fLm,C.fLo,C.fLp,C.fYQ,C.h6r,C.h6s,C.h6t,C.fHR,C.fHS,C.h6C,C.fHl,C.fHm,C.h60,C.fMc,C.fYJ,C.fLi,C.fLj,C.fYE,C.frJ,C.frK,C.frL,C.frM,C.frN,C.fs0,C.frX,C.frY,C.fwd,C.fwe,C.fzb,C.fEq,C.fEr])
u(A.aw,[C.b0f,C.amf,C.aWY,C.a__,C.bcP,C.QP,C.a6H,C.tH,C.Iw,C.bh9,C.bkY,C.bz1,C.boj,C.aew,C.bkX,C.aev,C.bkW,C.aE2,C.aKg,C.aex,C.Gz,C.bha,C.adL,C.bh8,C.bhd,C.b0d,C.aus,C.aeS])
u(A.mq,[C.bds,C.beF,C.bew,C.aJ6,C.bjZ,C.bpA,C.aX2,C.bdu,C.aC_,C.bcY,C.btE,C.bk6,C.bjx,C.bjE,C.bhc,C.bge,C.bm5,C.byR])
u(A.iO,[C.h_d,C.h_e,C.h_f,C.h_6,C.h_7,C.h_i,C.h_j,C.dRa,C.dQX,C.dR_,C.dQE,C.dQF,C.dQG,C.dQD,C.dQL,C.dQC,C.dQM,C.dQN,C.dQB,C.dQO,C.dQA,C.dQP,C.dQz,C.dQQ,C.dQr,C.dQs,C.dQy,C.dQR,C.dQw,C.dQS,C.dQv,C.dQH,C.dQu,C.dQI,C.dQq,C.dQJ,C.dQK,C.dRb,C.dRc,C.dR0,C.dR1,C.dR2,C.dR3,C.dR4,C.dR5,C.dR6,C.dRi,C.dR9,C.fIL,C.dgQ,C.dgO,C.dgP,C.dgR,C.dhu,C.dhj,C.dhg,C.dgT,C.dhk,C.dgZ,C.dh_,C.dh1,C.dhi,C.dgY,C.dh3,C.dhr,C.dhd,C.dhc,C.dhe,C.dhf,C.dh8,C.dha,C.dhb,C.dh4,C.dhn,C.dhq,C.dgV,C.dgW,C.djh,C.djg,C.djf,C.dje,C.djl,C.djd,C.djm,C.dhK,C.dhL,C.dhM,C.dhP,C.dhI,C.dhH,C.cQ9,C.d8G,C.d8T,C.d8S,C.d97,C.d8R,C.d98,C.d8Q,C.d8P,C.d9a,C.d8O,C.d90,C.d9_,C.d9h,C.bS7,C.bSh,C.bS9,C.bSa,C.bSd,C.bSc,C.bSf,C.bSg,C.bSb,C.bS5,C.bS6,C.bTL,C.bTM,C.bTN,C.bTO,C.bTP,C.bTQ,C.bTR,C.h6i,C.fXJ,C.bLr,C.bLm,C.bLk,C.bLl,C.bLj,C.cr8,C.cr9,C.cr7,C.cra,C.crc,C.crd,C.cre,C.cr4,C.cG4,C.cGd,C.cGe,C.cGf,C.cGc,C.cGg,C.cGh,C.cGi,C.cGj,C.cG7,C.cGb,C.bTg,C.bTf,C.bTd,C.bTb,C.bTc,C.bT8,C.bT9,C.bTa,C.bTe,C.bT7,C.f8u,C.f8v,C.f8w,C.f8x,C.f8y,C.bT4,C.bT5,C.bT6,C.bT_,C.bT1,C.bT2,C.bT3,C.bSW,C.bSG,C.bSF,C.bSE,C.bSy,C.bSz,C.bSD,C.bSA,C.bSB,C.bSx,C.e2O,C.e2Q,C.e2J,C.e2K,C.e2I,C.e2S,C.e2T,C.e2U,C.e2X,C.e2Y,C.e2Z,C.e3_,C.e30,C.e31,C.e32,C.e33,C.e2V,C.e2W,C.bSS,C.bSR,C.bSI,C.bSH,C.bSO,C.bSP,C.bSL,C.bSM,C.bSN,C.bSK,C.bSi,C.bSj,C.bSn,C.bSm,C.bSl,C.bSk,C.e4t,C.e4s,C.e4v,C.e4w,C.e4x,C.e4r,C.e4z,C.e4y,C.e3S,C.e3T,C.e3V,C.e3h,C.e3y,C.e3x,C.e3A,C.e3O,C.e3t,C.e3E,C.e3F,C.e3D,C.e3B,C.e3C,C.e3H,C.e3I,C.e3J,C.e3N,C.e35,C.e3Q,C.e39,C.e3c,C.e3e,C.e3W,C.e3k,C.e3i,C.e3m,C.e3n,C.e3j,C.e3o,C.e3s,C.e44,C.e45,C.e3Y,C.e40,C.e41,C.e42,C.e47,C.e3Z,C.e3f,C.dhT,C.dhS,C.dhX,C.di6,C.dhY,C.eZe,C.dyb,C.dy8,C.dy9,C.dyj,C.dyi,C.dyh,C.dyr,C.dyg,C.dys,C.dyf,C.dyt,C.dye,C.dyu,C.dyd,C.dyc,C.dyn,C.dyx,C.dyG,C.e4h,C.e4l,C.e4m,C.e4d,C.e4e,C.e4f,C.e4k,C.e4o,C.e4n,C.e48,C.e49,C.e4a,C.e4b,C.e4c,C.dQj,C.fZO,C.cpq,C.d9t,C.d9s,C.d9w,C.d9p,C.d9r,C.cHL,C.cHR,C.cHS,C.cHQ,C.cHU,C.cHP,C.cHM,C.cHN,C.cHY,C.fnK,C.fnL,C.eWp,C.eWg,C.eWh,C.eWi,C.eWk,C.eWl,C.eWo,C.eWb,C.eWe,C.eWq,C.eWc,C.eWt,C.eWu,C.eWv,C.eWw,C.eWs,C.eW6,C.eW7,C.eW8,C.eWa,C.eW9,C.eWP,C.eWQ,C.eWy,C.eWz,C.eWG,C.eWH,C.eWI,C.eWC,C.eWD,C.eWW,C.eWV,C.eWX,C.eWU,C.eWx,C.eWB,C.eWS,C.eWR,C.eWM,C.eWN,C.eWL,C.eWK])
u(A.af,[C.aqe,C.U7,C.a_I,C.a_M,C.a_K,C.a_i,C.amg,C.akr,C.avf,C.azd,C.amp,C.amn,C.amj,C.Wt,C.aml,C.U8,C.ars,C.arm,C.a0m,C.arq,C.a0G,C.a0H,C.a7t,C.a_k,C.a_j,C.ZR,C.a2s,C.Gn,C.azk,C.aur,C.aul,C.auq,C.P6])
u(A.ah,[C.aF2,C.bh3,C.aC0,C.bhs,C.aC3,C.beD,C.aC1,C.aAd,C.aHv,C.aze,C.aC5,C.aC4,C.aC2,C.bmr,C.amm,C.ami,C.aFC,C.aFz,C.aE1,C.aFB,C.aFA,C.bms,C.aNG,C.aAL,C.aAK,C.azr,C.byU,C.aPO,C.aPP,C.aH6,C.bnP,C.aH5,C.bAF])
u(A.jA,[C.dQW,C.dQY,C.dQT,C.dRh,C.fLh,C.bS4,C.dht,C.dhs,C.dh9,C.dho,C.dhp,C.dhQ,C.bTS,C.bTK,C.bSv,C.bSw,C.h6h,C.h6H,C.bLq,C.crb,C.cr5,C.cr_,C.f8z,C.bSU,C.bSX,C.bSY,C.dsr,C.bSQ,C.e3K,C.e3p,C.e46,C.di5,C.di4,C.di2,C.di7,C.dia,C.dib,C.dhW,C.di_,C.di1,C.die,C.cfO,C.cfW,C.cg0,C.dQk,C.fZQ,C.fZP,C.fnH,C.fnI,C.eWm,C.eWT,C.cH6,C.fvw,C.frd,C.fLn,C.fHn,C.fLk,C.fs_,C.frZ,C.fwf])
u(A.l3,[C.a1Y,C.agc,C.a2g,C.a09,C.acN,C.aM0,C.Iv,C.amr,C.cH7,C.cH8])
t(C.amh,C.aC1)
t(C.aks,C.aAd)
t(C.avg,C.aHv)
t(C.bh7,C.aC5)
t(C.amq,C.bh7)
t(C.bh6,C.aC4)
t(C.amo,C.bh6)
t(C.bh5,C.aC2)
t(C.amk,C.bh5)
t(C.bm6,C.aNG)
t(C.byS,C.aPO)
t(C.byT,C.aPP)
t(C.aH7,C.bAF)
t(C.bbe,A.bb2)
t(C.byV,A.a78)
t(C.bbd,C.byV)
w(C.aC1,A.cf)
w(C.aAd,A.cf)
w(C.aHv,A.eO)
w(C.aC2,A.cf)
v(C.bh5,C.afZ)
w(C.aC4,A.cf)
v(C.bh6,C.afZ)
w(C.aC5,A.cf)
v(C.bh7,C.afZ)
w(C.aNG,A.eO)
w(C.aPO,A.cf)
w(C.aPP,A.cf)
v(C.bAF,A.eE)
v(C.byV,A.ji)})()
A.j6(b.typeUniverse,JSON.parse('{"b0f":{"aw":[],"v":[]},"bds":{"aC":[]},"aqe":{"af":[],"v":[]},"aF2":{"ah":["aqe"]},"U7":{"af":[],"v":[]},"amf":{"aw":[],"v":[]},"aWY":{"aw":[],"v":[]},"bh3":{"ah":["U7"]},"a_I":{"af":[],"v":[]},"a_M":{"af":[],"v":[]},"a_K":{"af":[],"v":[]},"a_i":{"af":[],"v":[]},"aC0":{"ah":["a_I"]},"bhs":{"ah":["a_M"]},"aC3":{"ah":["a_K"]},"a__":{"aw":[],"v":[]},"beF":{"aC":[]},"bew":{"aC":[]},"beD":{"ah":["a_i"]},"aJ6":{"aC":[]},"bjZ":{"aC":[]},"bcP":{"aw":[],"v":[]},"amg":{"af":[],"v":[]},"amh":{"ah":["amg"]},"bpA":{"aC":[]},"aX2":{"aC":[]},"akr":{"af":[],"v":[]},"avf":{"af":[],"v":[]},"azd":{"af":[],"v":[]},"aks":{"ah":["akr"]},"bdu":{"aC":[]},"QP":{"aw":[],"v":[]},"aC_":{"aC":[]},"avg":{"ah":["avf"]},"bcY":{"aC":[]},"aze":{"ah":["azd"]},"amp":{"af":[],"v":[]},"amn":{"af":[],"v":[]},"amj":{"af":[],"v":[]},"amq":{"ah":["amp"]},"btE":{"aC":[]},"amo":{"ah":["amn"]},"bk6":{"aC":[]},"amk":{"ah":["amj"]},"bjx":{"aC":[]},"Wt":{"af":[],"v":[]},"aml":{"af":[],"v":[]},"U8":{"af":[],"v":[]},"a6H":{"aw":[],"v":[]},"bjE":{"aC":[]},"tH":{"aw":[],"v":[]},"Iw":{"aw":[],"v":[]},"bmr":{"ah":["Wt"]},"amm":{"ah":["aml"]},"ami":{"ah":["U8"]},"ars":{"af":[],"v":[]},"arm":{"af":[],"v":[]},"a0m":{"af":[],"v":[]},"aex":{"aw":[],"v":[]},"aFC":{"ah":["ars"]},"aFz":{"ah":["arm"]},"bh9":{"aw":[],"v":[]},"bhc":{"aC":[]},"bkY":{"aw":[],"v":[]},"bge":{"aC":[]},"bz1":{"aw":[],"v":[]},"boj":{"aw":[],"v":[]},"aE1":{"ah":["a0m"]},"aew":{"aw":[],"v":[]},"bkX":{"aw":[],"v":[]},"aev":{"aw":[],"v":[]},"bkW":{"aw":[],"v":[]},"aE2":{"aw":[],"v":[]},"aKg":{"aw":[],"v":[]},"Gz":{"aw":[],"v":[]},"arq":{"af":[],"v":[]},"a0G":{"af":[],"v":[]},"a0H":{"af":[],"v":[]},"aFB":{"ah":["arq"]},"bha":{"aw":[],"v":[]},"adL":{"aw":[],"v":[]},"bh8":{"aw":[],"v":[]},"bhd":{"aw":[],"v":[]},"aFA":{"ah":["a0G"]},"bms":{"ah":["a0H"]},"b0d":{"aw":[],"v":[]},"a7t":{"af":[],"v":[]},"bm6":{"ah":["a7t"]},"bm5":{"aC":[]},"aus":{"aw":[],"v":[]},"a_k":{"af":[],"v":[]},"a_j":{"af":[],"v":[]},"ZR":{"af":[],"v":[]},"a2s":{"af":[],"v":[]},"aAL":{"ah":["a_k"]},"aAK":{"ah":["a_j"]},"azr":{"ah":["ZR"]},"byU":{"ah":["a2s"]},"Gn":{"af":[],"v":[]},"azk":{"af":[],"v":[]},"byS":{"ah":["Gn"]},"byT":{"ah":["azk"]},"byR":{"aC":[]},"aur":{"af":[],"v":[]},"aH6":{"ah":["aur"]},"aeS":{"aw":[],"v":[]},"aul":{"af":[],"v":[]},"auq":{"af":[],"v":[]},"bnP":{"ah":["aul"]},"aH5":{"ah":["auq"]},"P6":{"af":[],"v":[]},"aH7":{"ah":["P6"],"eE":[]},"bbd":{"ji":[],"fl":[]}}'))
A.Dj(b.typeUniverse,JSON.parse('{"afZ":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.at
return{e2:w("aTG"),cq:w("mn"),Q:w("rt"),r:w("bs<n,n>"),c5:w("aVD"),dY:w("aVE"),fH:w("MT"),de:w("al8"),dN:w("N0<F>"),gc:w("Eo<F>"),A:w("eL<n?>"),e:w("Iu"),B:w("ny"),P:w("i_"),df:w("lw"),k:w("kZ"),x:w("aB<~>"),U:w("O<a4u>"),V:w("O<ab>"),C:w("O<rt>"),O:w("O<u>"),c:w("O<MT>"),b:w("O<al8>"),ac:w("O<eL<n?>>"),I:w("O<ny>"),u:w("O<i_>"),J:w("O<lw>"),_:w("O<kZ>"),cl:w("O<aB<ai<a9<n,@>>>>"),R:w("O<nB>"),eU:w("O<ai<+(H,H)>>"),ez:w("O<a9<n,aF>>"),gE:w("O<a9<n,n>>"),Y:w("O<a9<n,@>>"),fD:w("O<mT>"),bp:w("O<oM>"),g:w("O<r>"),ar:w("O<auE>"),v:w("O<fX>"),gy:w("O<aad>"),L:w("O<+(n,n)>"),G:w("O<+(H,H)>"),E:w("O<+(H,~())>"),bd:w("O<+(n,F,R)>"),bF:w("O<+count,id,name(F,n,n)>"),F:w("O<cU>"),s:w("O<n>"),cF:w("O<au>"),aS:w("O<j5>"),dT:w("O<bb1>"),p:w("O<v>"),Z:w("O<fl>"),D:w("O<lG>"),h:w("O<aAt>"),cC:w("O<bii>"),fp:w("O<KS>"),M:w("O<KZ>"),gZ:w("O<aJc>"),gA:w("O<ag3>"),e4:w("O<aga>"),dE:w("O<aLe>"),f7:w("O<R>"),n:w("O<H>"),t:w("O<F>"),dS:w("O<aC?>"),d4:w("O<n?>"),eF:w("cx<ah<af>>"),d:w("ai<ny>"),do:w("ai<i_>"),cg:w("ai<lw>"),ax:w("ai<kZ>"),fO:w("ai<a9<n,@>>"),cz:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(F,n,n)>"),dy:w("ai<n>"),er:w("ai<au>"),gk:w("ai<lG>"),j:w("ai<@>"),fK:w("bA<n,n>"),d2:w("bA<n,ai<a9<n,@>>>"),a:w("a9<n,@>"),f:w("a9<@,@>"),gv:w("N<n,Ix>"),cM:w("N<F,n>"),w:w("iw"),g2:w("rS"),bV:w("aq1"),fL:w("cu"),K:w("aF"),dc:w("fX"),fo:w("Pt<F>"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),bn:w("+games,limit(R,F)"),d9:w("+dx,hidden(H,ai<i_>)"),cs:w("+count,id,name(F,n,n)"),N:w("n"),fT:w("iz<i_>"),ec:w("iz<n>"),gW:w("r9<H>"),X:w("bq<H>"),bW:w("dH"),W:w("bf<n>"),b4:w("bf<F>"),cI:w("k5<n>"),av:w("Y<zA>"),cc:w("Y<n>"),l:w("v"),gF:w("fl"),fA:w("lG"),dO:w("GD"),bw:w("aev<n?>"),cy:w("L0"),q:w("mc"),y:w("R"),i:w("H"),z:w("@"),S:w("F"),eK:w("ai<kZ>?"),m:w("arp?"),cT:w("r?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,F)?"),he:w("+qrPayload,token,usesRemaining(n,n,F)?"),gG:w("+members,trees,viewOnly(F,F,R)?"),az:w("qn?"),T:w("n?"),aD:w("dH?"),o:w("lG?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b5S=new A.be(B.fR,B.bJ,B.fR,B.bJ)
D.aeI=new A.be(B.fR,B.iq,B.fR,B.iq)
D.b65=new A.be(B.jy,B.bJ,B.bJ,B.bJ)
D.b69=new A.ay(B.cU,1.4,B.r,-1)
D.b6j=new A.ay(B.ab,1,B.r,-1)
D.afd=new A.aY(140,1/0,0,1/0)
D.b7H=new A.aY(0,1/0,64,1/0)
D.b7L=new A.aY(0,84,0,1/0)
D.afk=new A.aY(130,1/0,0,1/0)
D.aDJ=w([B.ma,B.rT,B.c],x.O)
D.c9M=new A.a7(B.ay,B.aC,B.x,D.aDJ,null,null)
D.b8v=new A.o(null,null,null,null,null,D.c9M,B.n)
D.dhv=w([B.aV,B.bQ],x.O)
D.cbV=new A.a7(B.aZ,B.b4,B.x,D.dhv,null,null)
D.b8Q=new A.o(null,null,null,null,null,D.cbV,B.n)
D.YQ=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fB=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dlA=w([B.dA,D.YQ,D.fB],x.O)
D.c8Z=new A.a7(B.aZ,B.b4,B.x,D.dlA,null,null)
D.b9A=new A.o(null,null,null,null,null,D.c8Z,B.n)
D.fvX=new A.G(!0,B.bV,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h6s=new A.B("?",null,D.fvX,null,null,null,null,null,null,null,null,null)
D.bdq=new A.cj(B.z,null,null,D.h6s,null)
D.Wk=new A.G(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPu=new A.B("\ud83c\udf33",null,D.Wk,null,null,null,null,null,null,null,null,null)
D.ag4=new A.cj(B.z,null,null,D.fPu,null)
D.fS9=new A.B("\ud83c\udfc6",null,As.KY,null,null,null,null,null,null,null,null,null)
D.bdB=new A.cj(B.z,null,null,D.fS9,null)
D.bfq=new A.fn(null,null,null,null,null,E.kv,null,null,null,null)
D.ag6=new A.cj(B.z,null,null,D.bfq,null)
D.kP=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fwv=new A.G(!0,D.kP,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fR9=new A.B("No books on the shelf yet.",null,D.fwv,null,null,null,null,null,null,null,null,null)
D.ewJ=new A.D(B.nK,D.fR9,null)
D.bdR=new A.cj(B.z,null,null,D.ewJ,null)
D.fDD=new A.G(!0,D.fB,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h7n=new A.B("\ud83d\ude8c  On the road\u2026",null,D.fDD,null,null,null,null,null,null,null,null,null)
D.exi=new A.D(B.cp,D.h7n,null)
D.bej=new A.cj(B.z,null,null,D.exi,null)
D.aXT=new A.B("\ud83e\uddfa",null,D.Wk,null,null,null,null,null,null,null,null,null)
D.bey=new A.cj(B.z,null,null,D.aXT,null)
D.fUC=new A.B("\ud83c\udfad",null,D.Wk,null,null,null,null,null,null,null,null,null)
D.beJ=new A.cj(B.z,null,null,D.fUC,null)
D.beM=new A.cj(B.z,null,null,A7.YC,null)
D.agr=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.agy=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bh_=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bh4=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bhg=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bhi=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bhk=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bhs=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lF=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bhw=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bhB=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bhC=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bhD=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lG=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bie=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.BQ=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bin=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.biH=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.biK=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.biQ=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.biY=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.ahc=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bj4=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.Z2=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.ahf=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bjf=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.Z4=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bjA=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.ahr=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bjZ=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bke=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bkD=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bkO=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.G5=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.blc=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.blf=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.blj=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.ahV=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.blA=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.blG=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.blM=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.ahZ=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.blU=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bmn=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bmv=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bmx=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bmD=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.aie=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bne=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.aiD=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bob=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.aiQ=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.boB=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.Gi=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.boH=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.boR=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.boT=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.aiU=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bpa=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bpc=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bpf=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.aj1=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.ZP=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bpC=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bpX=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bq1=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.aje=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bq8=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.ZV=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bqu=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bqv=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.Gq=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.brj=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.brX=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bs2=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bs6=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qp=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bsh=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bsl=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bsr=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bst=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.ajZ=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.ak2=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.Gv=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.a_f=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.akb=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.btE=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.btX=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bum=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.buv=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.akA=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.a_r=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.buF=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.buW=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.a_x=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bvc=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bvt=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.a_C=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bvy=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.akS=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.akU=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bvR=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.al_=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bwi=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bwm=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bwt=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.bwB=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bwK=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bxj=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bxO=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fLi=new A.B("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bBk=new A.eL(null,D.fLi,B.fc,null,x.A)
D.fUt=new A.B("None",null,null,null,null,null,null,null,null,null,null,null)
D.bBm=new A.eL(null,D.fUt,B.fc,null,x.A)
D.alU=new A.bd(3e4)
D.bBU=new A.bd(38e5)
D.bCD=new A.ir(0,10,0,10)
D.bCM=new A.Q(0,1,0,0)
D.bCX=new A.ir(0,4,0,4)
D.bD_=new A.Q(0,4,5,0)
D.bDf=new A.Q(10,10,14,10)
D.bDq=new A.ir(10,4,10,4)
D.bDz=new A.ir(10,8,10,8)
D.bDA=new A.Q(10,8,8,8)
D.bE4=new A.Q(12,6,12,2)
D.bEm=new A.Q(14,0,14,6)
D.bEq=new A.Q(14,10,6,6)
D.bEr=new A.Q(14,12,14,0)
D.bEv=new A.Q(14,12,14,8)
D.bEy=new A.Q(14,12,8,14)
D.bEC=new A.ir(14,14,14,14)
D.bEV=new A.Q(14,6,14,40)
D.bEY=new A.Q(14,8,14,30)
D.bFl=new A.Q(16,2,16,10)
D.bFu=new A.Q(16,6,16,30)
D.bFw=new A.Q(16,6,16,8)
D.bFL=new A.Q(18,10,18,4)
D.bFN=new A.Q(18,12,18,0)
D.bFU=new A.Q(18,14,12,4)
D.anr=new A.Q(18,16,18,8)
D.bG9=new A.Q(18,20,18,22)
D.bGf=new A.Q(18,30,18,30)
D.bGx=new A.Q(20,10,12,20)
D.bGA=new A.Q(20,11,20,11)
D.bGM=new A.Q(20,18,16,18)
D.bGO=new A.Q(20,18,20,6)
D.bHD=new A.Q(24,32,24,28)
D.bHE=new A.Q(24,36,24,32)
D.bHH=new A.Q(26,26,24,14)
D.bHW=new A.Q(2,4,2,8)
D.bI_=new A.Q(30,0,30,0)
D.bIa=new A.Q(38,22,22,22)
D.anP=new A.Q(40,24,24,24)
D.bIc=new A.ir(40,40,40,40)
D.bIe=new A.Q(46,30,30,30)
D.bIG=new A.Q(56,40,40,40)
D.bIK=new A.Q(1.25,1.25,1.25,1.25)
D.bIL=new A.Q(60,0,60,0)
D.bIP=new A.Q(6,14,6,16)
D.bIT=new A.Q(6,4,12,0)
D.bIX=new A.Q(6,6,10,2)
D.bJ3=new A.ir(7,3,7,3)
D.bJA=new A.Q(5,1.5,5,1.5)
D.bJL=new A.Q(6,2.5,6,2.5)
D.h1D=new A.B("Family Games",null,B.jR,null,null,null,null,null,null,null,null,null)
D.fJV=new A.B("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.Wb,null,null,null,null,null,null,null,null,null)
D.cL1=w([D.h1D,D.fJV],x.p)
D.byO=new A.fp(B.ah,B.e,B.h,B.E,null,B.p,null,0,D.cL1,null)
D.bKb=new A.by(1,B.ba,D.byO,null)
D.h6_=new A.B("Signature",null,B.nf,null,null,null,null,null,null,null,null,null)
D.bKe=new A.by(1,B.ba,D.h6_,null)
D.fZc=new A.B("MADE BY THE ONE WHO PLANTED THE TREE",null,T.u_,null,null,null,null,null,null,null,null,null)
D.bKM=new A.by(1,B.ba,D.fZc,null)
D.h35=new A.B("Tell the AI what to fix",null,B.dk,null,null,null,null,null,null,null,null,null)
D.bL3=new A.by(1,B.ba,D.h35,null)
D.fEp=new A.G(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h54=new A.B("Worksheets",null,D.fEp,null,null,null,null,null,null,null,null,null)
D.fEB=new A.G(!0,E.agW,null,null,null,null,13,B.cD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3W=new A.B("Track your project spending",null,D.fEB,null,null,null,null,null,null,null,null,null)
D.d8O=w([D.h54,B.ax,D.h3W],x.p)
D.byr=new A.fp(B.ah,B.e,B.h,B.E,null,B.p,null,0,D.d8O,null)
D.bL9=new A.by(1,B.ba,D.byr,null)
D.fzl=new A.G(!0,E.kv,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKu=new A.B("FAMILY LIBRARY",null,D.fzl,null,null,null,null,null,null,null,null,null)
D.bLs=new A.by(1,B.ba,D.fKu,null)
D.P0=new C.Iu("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.wJ=new C.Iv(0,"male")
D.oB=new C.Iv(1,"female")
D.z9=new C.Iv(2,"unknown")
D.uO=new C.amr(0,"owner")
D.P1=new C.amr(1,"editor")
D.kY=new C.amr(2,"viewer")
D.apM=new A.a_(61199,"MaterialIcons",!1)
D.bQN=new A.a_(61504,"MaterialIcons",!1)
D.bQO=new A.a_(61505,"MaterialIcons",!1)
D.bQQ=new A.a_(61587,"MaterialIcons",!1)
D.bQX=new A.a_(61890,"MaterialIcons",!1)
D.bRP=new A.a_(63034,"MaterialIcons",!0)
D.bS6=new A.a_(63153,"MaterialIcons",!1)
D.bSE=new A.a_(63429,"MaterialIcons",!1)
D.arR=new A.a_(984520,"MaterialIcons",!1)
D.bRk=new A.a_(62776,"MaterialIcons",!1)
D.bV1=new A.ae(D.bRk,26,B.b2,null,null,null)
D.bPL=new A.a_(57648,"MaterialIcons",!1)
D.bVl=new A.ae(D.bPL,14,B.c,null,null,null)
D.bVD=new A.ae(B.Hy,17,null,null,null,null)
D.bVJ=new A.ae(B.Px,null,B.bQ,null,null,null)
D.bW8=new A.ae(E.a3b,null,null,null,null,null)
D.bWb=new A.ae(B.jb,18,E.kv,null,null,null)
D.a2V=new A.a_(62044,"MaterialIcons",!1)
D.bWh=new A.ae(D.a2V,null,B.aV,null,null,null)
D.bWo=new A.ae(B.zn,18,B.c,null,null,null)
D.bX5=new A.ae(B.e9,16,null,null,null,null)
D.bXc=new A.ae(D.a2V,32,B.aV,null,null,null)
D.bXv=new A.ae(E.apN,18,B.cU,null,null,null)
D.bYB=new A.ae(B.HJ,22,B.aA,null,null,null)
D.bYO=new A.ae(B.e9,22,B.b2,null,null,null)
D.bZ0=new A.ae(Y.a3_,22,B.c,null,null,null)
D.bZ7=new A.ae(B.uY,52,B.c,null,null,null)
D.bZh=new A.ae(B.HJ,30,B.aA,null,null,null)
D.bZB=new A.ae(B.a3f,null,B.c,null,null,null)
D.asA=new A.ae(B.va,22,B.c,null,null,null)
D.bZK=new A.ae(B.e9,17,null,null,null,null)
D.c_7=new A.ae(B.wV,26,B.cU,null,null,null)
D.c_U=new A.ae(B.a3q,16,null,null,null,null)
D.c0G=new A.ae(B.uY,24,B.c,null,null,null)
D.c0L=new A.ae(B.Pv,20,B.ty,null,null,null)
D.c0Q=new A.ae(B.Hw,null,B.bQ,null,null,null)
D.c0Z=new A.ae(B.jb,18,B.c,null,null,null)
D.c1F=new A.ae(B.cB,22,B.ab,null,null,null)
D.c2y=new A.ae(B.ej,16,B.ab,null,null,null)
D.c2K=new A.ae(D.a2V,20,B.aV,null,null,null)
D.at0=new A.ae(B.hd,20,null,null,null,null)
D.c3g=new A.ae(B.cB,18,D.kP,null,null,null)
D.c3y=new A.ae(B.zx,28,B.c,null,null,null)
D.c3K=new A.ae(B.Pk,null,B.fi,null,null,null)
D.c44=new A.ae(B.zx,24,B.c,null,null,null)
D.c4w=new A.ae(B.uY,null,B.aV,null,null,null)
D.c4x=new A.ae(B.js,20,B.cU,null,null,null)
D.c4R=new A.ae(B.Hy,16,null,null,null,null)
D.c6p=new A.e7(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.k6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eM,!0,null,null,null,null)
D.atK=new C.a6H(10,null)
D.c6V=new C.a6H(12,null)
D.c6W=new C.a6H(14,null)
D.dpJ=w([B.bv,B.aV,B.fq,B.b2],x.O)
D.c86=new A.a7(B.ay,B.aC,B.x,D.dpJ,null,null)
D.br4=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bxq=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d5e=w([D.br4,D.bxq],x.O)
D.c8i=new A.a7(B.aZ,B.b4,B.x,D.d5e,null,null)
D.djz=w([B.fe,B.fX,B.fq],x.O)
D.c8o=new A.a7(B.ay,B.aC,B.x,D.djz,null,null)
D.ajN=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bhE=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d7s=w([D.ajN,D.bhE],x.O)
D.c9_=new A.a7(B.aZ,B.b4,B.x,D.d7s,null,null)
D.bls=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aD0=w([D.bls,D.ajN],x.O)
D.c9i=new A.a7(B.ay,B.aC,B.x,D.aD0,null,null)
D.aiw=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bo2=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.diB=w([D.aiw,D.bo2],x.O)
D.c9Y=new A.a7(B.a5,B.a8,B.x,D.diB,null,null)
D.dwT=w([B.bD,B.nw],x.O)
D.ca_=new A.a7(B.aZ,B.b4,B.x,D.dwT,null,null)
D.br_=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dxP=w([D.br_,D.kP,D.kP,I.Nv],x.O)
D.dAu=w([0,0.07,0.9,1],x.n)
D.cav=new A.a7(B.a5,B.a8,B.x,D.dxP,D.dAu,null)
D.caE=new A.a7(B.ay,B.aC,B.x,B.Td,null,null)
D.d2Y=w([B.aD,D.lF],x.O)
D.caH=new A.a7(B.a5,B.a8,B.x,D.d2Y,null,null)
D.dwq=w([B.b2,B.aV,B.bQ],x.O)
D.cbI=new A.a7(B.ay,B.aC,B.x,D.dwq,null,null)
D.cg0=w([10,20,30],x.t)
D.cpY=w([-1,-0.4,0.3,1],x.n)
D.cxp=w([B.bv,B.b2,B.fe],x.O)
D.cxx=w([B.bf,B.aD,B.ku],x.O)
D.cxz=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cyh=w([30,140,262,360],x.n)
D.bpl=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cDQ=w([D.bpl,E.ajn],x.O)
D.erk=new A.r(1,2)
D.fhh=new A.cU(B.b5,D.erk,3)
D.azT=w([D.fhh],x.F)
D.cLi=w([B.h8,B.ci,B.fA],x.O)
D.cO4=w([B.bP,B.by,B.bs],x.O)
D.bMi=new C.uS("classic","Classic leather","Gold-edged brown leather",D.aD0,E.kv,E.kv,"\u2766",B.K,!0,!1,!1,!1)
D.bgL=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bw8=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.daA=w([D.bgL,D.bw8],x.O)
D.ajq=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bMd=new C.uS("ornate","Ornate gold","Double gold border and flourishes",D.daA,D.ajq,D.ajq,"\u2726",B.K,!0,!0,!0,!1)
D.bkZ=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.brR=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d1P=w([D.bkZ,D.brR],x.O)
D.bMc=new C.uS("parchment","Parchment","Old paper with dark ink",D.d1P,D.Gq,L.j6,"\u2767",B.K,!0,!1,!1,!0)
D.agA=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.buj=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.duA=w([D.agA,D.buj],x.O)
D.boO=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.btz=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bMf=new C.uS("minimal","Clean paper","Plain and elegant, like a printed book",D.duA,D.boO,D.btz,"",B.K,!0,!0,!1,!0)
D.bMh=new C.uS("midnight","Midnight","Deep blue with silver stars",K.aDi,B.cA,B.ch,"\u2727",B.K,!0,!0,!1,!1)
D.bMb=new C.uS("emerald","Emerald library","Green cloth, title on the left",W.aAi,E.kv,B.fZ,"\u25c6",B.bk,!0,!1,!1,!1)
D.buO=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dsz=w([B.eq,D.buO],x.O)
D.bq7=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bro=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bMg=new C.uS("rose","Rose vintage","Burgundy with rose-gold lettering",D.dsz,D.bq7,D.bro,"\u2740",B.K,!0,!1,!0,!1)
D.dxq=w([B.cs,F.mX],x.O)
D.bMe=new C.uS("modern","Modern","Dark, bold, left-aligned",D.dxq,B.aG,B.c,"",B.bk,!1,!0,!1,!1)
D.a5u=w([D.bMi,D.bMd,D.bMc,D.bMf,D.bMh,D.bMb,D.bMg,D.bMe],A.at("O<uS>"))
D.cR4=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dxe=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bMt=new C.lw('What does "Ubuntu" mean?',D.dxe,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d3E=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bMw=new C.lw("In Swahili, what do we call a grandmother?",D.d3E,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d3v=w(["Babu","Mama","Baba","Dada"],x.s)
D.bMr=new C.lw("In Swahili, what do we call a grandfather?",D.d3v,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d4P=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bMv=new C.lw("What is a sister called in Swahili?",D.d4P,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.da0=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bMs=new C.lw("What is a brother called in Swahili?",D.da0,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d3u=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bMD=new C.lw("Which word means father in Swahili?",D.d3u,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dyp=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bMC=new C.lw('"Umoja ni nguvu" means...',D.dyp,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dvj=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bME=new C.lw('"Haba na haba hujaza kibaba" teaches us...',D.dvj,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d7B=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bMB=new C.lw('The African saying "It takes a village to raise a child" means...',D.d7B,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dyJ=w(["The elders","The market","The river","The drum"],x.s)
D.bMx=new C.lw("Who is the traditional keeper of the family stories?",D.dyJ,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cVg=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bMu=new C.lw("Why do families sit round the fire at night?",D.cVg,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dxs=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bMz=new C.lw('What does "Harambee" mean?',D.dxs,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.dcP=w(["An elder","A baby","A market","A cow"],x.s)
D.bMy=new C.lw('"Mzee" is a respectful word for...',D.dcP,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dsp=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bMA=new C.lw('What does "Shikamoo" show?',D.dsp,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.aAd=w([D.bMt,D.bMw,D.bMr,D.bMv,D.bMs,D.bMD,D.bMC,D.bME,D.bMB,D.bMx,D.bMu,D.bMz,D.bMy,D.bMA],x.J)
D.cZG=w([90,360],x.n)
D.d1m=w([B.bQ,B.bo],x.O)
D.bqN=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d20=w([D.agA,D.bqN],x.O)
D.d2H=w([-1,-0.3,0.4,1],x.n)
D.d3A=w([0,0.45,0.72,0.92,1],x.n)
D.bkV=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d3T=w([D.bkV,B.bA],x.O)
D.biC=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.al9=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d4t=w([B.dA,D.biC,D.al9],x.O)
D.d5v=w([B.b9,B.jl,B.pk],x.O)
D.blt=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.btq=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bii=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d5A=w([D.blt,D.btq,D.bii],x.O)
D.d5V=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d64=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hAR=new C.ae9(78,424,48,44,56)
D.hAP=new C.ae9(214,396,34,34,42)
D.hAQ=new C.ae9(442,452,56,50,64)
D.aBb=w([D.hAR,D.hAP,D.hAQ],A.at("O<ae9>"))
D.d6E=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bhy=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bnd=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dAq=w([D.aiw,D.bhy,D.bnd],x.O)
D.bMj=new C.uT("leather","Leather",D.dAq,"vintage")
D.ddQ=w([B.dg,B.Gg,Aa.Zj],x.O)
D.bMq=new C.uT("midnight","Midnight",D.ddQ,"starry")
D.d5w=w([B.ep,B.eb,B.lj],x.O)
D.bMp=new C.uT("forest","Forest",D.d5w,"story")
D.dCv=w([B.er,B.eq,B.kx],x.O)
D.bMm=new C.uT("burgundy","Burgundy",D.dCv,"royal")
D.cND=w([B.aD,B.mR,B.nn],x.O)
D.bMn=new C.uT("royal","Royal",D.cND,"royal")
D.d87=w([B.by,B.cs,F.mX],x.O)
D.bMk=new C.uT("charcoal","Charcoal",D.d87,"geo")
D.dAz=w([B.c8,B.dR,B.yq],x.O)
D.bMo=new C.uT("sunset","Sunset",D.dAz,"sunset")
D.dBi=w([B.jl,B.yt,B.Zn],x.O)
D.bMl=new C.uT("ocean","Ocean",D.dBi,"band")
D.A1=w([D.bMj,D.bMq,D.bMp,D.bMm,D.bMn,D.bMk,D.bMo,D.bMl],A.at("O<uT>"))
D.d8D=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.d9i=w([B.an,B.aL,B.a_],x.O)
D.daF=w([B.eq,B.eb,B.dg,B.iL,B.yv,B.cU,B.k1,B.cP,B.d5],x.O)
D.daG=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.fhi=new A.cU(B.dB,B.dL,8)
D.daQ=w([D.fhi],x.F)
D.dbY=w([B.c3,B.dR,B.jX],x.O)
D.bjt=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bnw=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.brM=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.dcd=w([D.bjt,G.ajW,D.bnw,D.brM,D.al9],x.O)
D.dcu=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.dcF=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bgW=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bmT=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.dd7=w([D.bgW,D.ahZ,D.bmT],x.O)
D.ddL=w([B.c3,B.hH],x.O)
D.ddR=w([G.np,B.ic,G.agM,B.cT],x.O)
D.dfs=w([B.cT,G.np,B.ic,D.lG,B.cT],x.O)
D.dg4=w([B.aQ,B.yr,B.yh],x.O)
D.aCd=w(["True","False"],x.s)
D.eOs=new A.y(-0.65,0.6)
D.f07=new A.y(-0.2,0.95)
D.f1d=new A.y(0.25,0.95)
D.eRX=new A.y(0.7,0.6)
D.f1N=new A.y(1,0.1)
D.dgQ=w([Ar.V2,D.eOs,D.f07,D.f1d,D.eRX,D.f1N],x.G)
D.bpD=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bw0=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bkt=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.dgW=w([D.bpD,D.bw0,D.bkt],x.O)
D.dh0=w([B.bL,B.bW,B.dy,B.aQ],x.O)
D.dhw=w([B.hJ,B.c8,B.up],x.O)
D.dhV=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.di5=w([B.fe,B.cU],x.O)
D.br8=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.diw=w([D.br8,D.agy],x.O)
D.diI=w([B.cN,B.fK,B.h_],x.O)
D.diU=w([B.aG,B.bo,B.dg],x.O)
D.djw=w([B.ew,B.dn,B.eb],x.O)
D.djQ=w([B.dW,B.dg,B.Gg],x.O)
D.djU=w([B.bt,B.mO,B.d5],x.O)
D.dka=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bql=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.box=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dkv=w([D.bql,D.ahV,D.box],x.O)
D.dlk=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dmn=w([1,0,7,6,3,2],x.t)
D.a6s=w(["leather","linen","plain","stars","rays"],x.s)
D.dmz=w([0.5,2,3.6],x.n)
D.dn7=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bUk=new A.a_(983781,"MaterialIcons",!1)
D.aCH=w([B.Px,B.hB,B.kB,B.i0,F.arZ,B.HV,B.qO,D.bUk,K.arC,B.Dl,B.qR,B.mk],A.at("O<a_>"))
D.a6w=w(["double","single","corners","none"],x.s)
D.bM8=new C.zA("Little Seed","\ud83c\udf31",0)
D.bMa=new C.zA("Young Listener","\ud83d\udc42",40)
D.bM9=new C.zA("Storyteller","\ud83e\ude98",120)
D.bM7=new C.zA("Village Pride","\ud83c\udfe1",300)
D.bM5=new C.zA("Keeper of Roots","\ud83c\udf33",700)
D.bM6=new C.zA("Elder of the Fire","\ud83d\udd25",1500)
D.aCJ=w([D.bM8,D.bMa,D.bM9,D.bM7,D.bM5,D.bM6],A.at("O<zA>"))
D.doi=w([B.cY,B.bh,B.cP],x.O)
D.doy=w([],x.C)
D.DV=w([],x.u)
D.aMS=new A.r(225,528)
D.eQ8=new A.y(D.aMS,1)
D.es4=new A.r(350,548)
D.eWm=new A.y(D.es4,0.95)
D.aMM=new A.r(158,656)
D.eWf=new A.y(D.aMM,1.12)
D.esR=new A.r(92,544)
D.eLI=new A.y(D.esR,0.93)
D.es7=new A.r(398,614)
D.eSj=new A.y(D.es7,1.04)
D.erW=new A.r(318,662)
D.eHa=new A.y(D.erW,1.1)
D.a6E=w([D.eQ8,D.eWm,D.eWf,D.eLI,D.eSj,D.eHa],A.at("O<+(r,H)>"))
D.dqz=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dr2=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.ds7=w([B.cT,G.np,B.ic,D.lG,B.cT,B.ic],x.O)
D.dtx=w([B.at,B.fK,B.iL],x.O)
D.dub=w([-70,58],x.n)
D.dud=w([-70,-30,20],x.n)
D.dvg=w([B.bt,B.mO,B.a_s],x.O)
D.dvy=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dRh=new C.lY("construction","Construction","Jobsite & builds",B.qQ)
D.dRo=new C.lY("house","Home Build","Houses & rooms",B.v_)
D.dRe=new C.lY("grocery","Grocery","Store & pantry",B.a3Z)
D.dRd=new C.lY("calculator","Calculations","Math & estimates",B.PC)
D.dRm=new C.lY("lumber","Materials","Lumber & supplies",B.HS)
D.dRa=new C.lY("kitchen","Kitchen","Remodel & meals",A3.PW)
D.bUi=new A.a_(983756,"MaterialIcons",!1)
D.dRf=new C.lY("landscape","Landscaping","Yard & garden",D.bUi)
D.dR9=new C.lY("plumbing","Plumbing","Pipes & water",B.pH)
D.dRp=new C.lY("electrical","Electrical","Wiring & power",B.ho)
D.dR7=new C.lY("store","Retail Shop","Daily business",B.kf)
D.dR8=new C.lY("paint_remodel","Paint & Remodel","Colors & walls",A3.PS)
D.bTF=new A.a_(983311,"MaterialIcons",!1)
D.dRl=new C.lY("roofing","Roofing","Roofs & exteriors",D.bTF)
D.bUt=new A.a_(983986,"MaterialIcons",!1)
D.dR6=new C.lY("warehouse","Warehouse","Storage & stock",D.bUt)
D.dRj=new C.lY("vehicles","Vehicles","Fleet & transport",B.Dh)
D.bRm=new A.a_(62785,"MaterialIcons",!1)
D.dRc=new C.lY("farm","Farm","Crops & livestock",D.bRm)
D.dRb=new C.lY("restaurant","Restaurant","Food & catering",B.v8)
D.dRi=new C.lY("tools","Tools","Workshop gear",B.Dd)
D.dRn=new C.lY("wallet","Cash & Wallet","Quick spending",B.js)
D.dRk=new C.lY("concrete","Concrete","Foundation work",F.aqJ)
D.dRg=new C.lY("blueprint","Blueprint","Plans & design",Ao.aqf)
D.a72=w([D.dRh,D.dRo,D.dRe,D.dRd,D.dRm,D.dRa,D.dRf,D.dR9,D.dRp,D.dR7,D.dR8,D.dRl,D.dR6,D.dRj,D.dRc,D.dRb,D.dRi,D.dRn,D.dRk,D.dRg],A.at("O<lY>"))
D.dw5=w([B.bu,B.bh],x.O)
D.dwU=w([B.iw,B.oj,B.dV],x.O)
D.aiK=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.ajI=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.boS=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bgs=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aDR=w([D.aiK,D.ajI,D.boS,D.bgs],x.O)
D.dy5=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a7c=w(["top","middle","bottom"],x.s)
D.dzB=w([B.cr,B.bo,B.dg],x.O)
D.aEa=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.ba3=new A.ab(0,B.G,B.b5,B.J,14)
D.aEe=w([D.ba3],x.V)
D.bnL=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dAj=w([D.ahc,D.a_r,D.bnL],x.O)
D.dAk=w([B.bc,B.dn,B.eb],x.O)
D.erF=new A.r(24,-8)
D.esn=new A.r(48,0)
D.erB=new A.r(24,6)
D.dC1=w([B.J,D.erF,D.esn,D.erB],x.g)
D.dCr=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.eoa={top:0,middle:1,bottom:2}
D.dFF=new A.bs(D.eoa,["Top","Middle","Bottom"],x.r)
D.enL={double:0,single:1,corners:2,none:3}
D.dFL=new A.bs(D.enL,["Double line","One line","Corners","None"],x.r)
D.eoZ={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dHd=new A.bs(D.eoZ,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dHp=new A.bs(B.i2,[],A.at("bs<F,+(n,n)>"))
D.eo2={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.E9=new A.bs(D.eo2,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.at("bs<n,F>"))
D.dLG=new H.NW(32,null)
D.dLH=new H.NW(40,null)
D.dLI=new H.NW(46,null)
D.aMj=new C.auq(null)
D.eqw=new A.r(0,40)
D.eqx=new A.r(0,412)
D.eqz=new A.r(0,900)
D.eqJ=new A.r(0,-34)
D.eqK=new A.r(0,-46)
D.eqM=new A.r(0,-74)
D.eqP=new A.r(100,300)
D.eqQ=new A.r(10,14)
D.eqT=new A.r(10,-10)
D.eqY=new A.r(10,-46)
D.eqZ=new A.r(10,-58)
D.er_=new A.r(116,442)
D.er1=new A.r(11,-1)
D.er2=new A.r(11,-10)
D.er3=new A.r(11,-21)
D.aMH=new A.r(11,-60)
D.era=new A.r(14,-2)
D.erb=new A.r(150,520)
D.a9d=new A.r(150,592)
D.ere=new A.r(15,-15)
D.erf=new A.r(16,-1)
D.erj=new A.r(190,444)
D.erm=new A.r(1,5)
D.eru=new A.r(21,-78)
D.erv=new A.r(222,615)
D.JR=new A.r(225,300)
D.a9f=new A.r(225,574)
D.erE=new A.r(24,-52)
D.erG=new A.r(250,210)
D.erR=new A.r(2,-56)
D.aMW=new A.r(300,0)
D.erS=new A.r(300,440)
D.erV=new A.r(318,476)
D.erY=new A.r(324,144)
D.a9i=new A.r(332,150)
D.es_=new A.r(335,585)
D.es0=new A.r(338,140)
D.es1=new A.r(340,158)
D.es3=new A.r(34,-60)
D.EA=new A.r(36,-24)
D.es5=new A.r(372,470)
D.es6=new A.r(390,455)
D.esf=new A.r(42,468)
D.esg=new A.r(431,510)
D.esh=new A.r(431,520)
D.esi=new A.r(45,-92)
D.esj=new A.r(46,20)
D.esk=new A.r(46,-92)
D.esl=new A.r(46,-94)
D.esm=new A.r(47,-4)
D.eso=new A.r(48,-4)
D.esw=new A.r(4,-26)
D.esE=new A.r(60,455)
D.esM=new A.r(8,14)
D.esQ=new A.r(8,-76)
D.esS=new A.r(95,575)
D.esT=new A.r(98,-24)
D.esV=new A.r(9,-2)
D.esW=new A.r(9,-58)
D.aN4=new A.r(9,-79)
D.esX=new A.r(9,-9)
D.etA=new A.r(16.5,8)
D.etC=new A.r(3.2,0)
D.etE=new A.r(-16.5,8)
D.etL=new A.r(16.5,2)
D.etO=new A.r(-3.2,0)
D.etW=new A.r(9.5,6)
D.eu_=new A.r(-10,14)
D.eu0=new A.r(-10,-12)
D.eu1=new A.r(-10,-58)
D.eu3=new A.r(-11,-1)
D.eu4=new A.r(-11,-10)
D.eu6=new A.r(-11,-60)
D.eu7=new A.r(-12,-14)
D.eu8=new A.r(-12,-16)
D.euf=new A.r(-14,-2)
D.eui=new A.r(-15,-15)
D.euj=new A.r(-15,-3)
D.eul=new A.r(-16,-1)
D.euC=new A.r(-24,-52)
D.euJ=new A.r(-2,-34)
D.euK=new A.r(-2,-38)
D.euM=new A.r(-30,-100)
D.a9k=new A.r(-36,-24)
D.euX=new A.r(-4,-26)
D.euZ=new A.r(-4,-6)
D.ev8=new A.r(-8,-3)
D.ev9=new A.r(-8,-48)
D.evc=new A.r(-9,-2)
D.eve=new A.r(-9,-58)
D.evf=new A.r(-9,-79)
D.evg=new A.r(-9,-9)
D.evi=new A.r(-9.5,6)
D.evv=new A.r(-16.5,2)
D.fRQ=new A.B("Write a new book",null,B.hu,null,B.K,null,null,null,null,null,null,null)
D.ew4=new A.D(B.kW,D.fRQ,null)
D.h5y=new A.B("Tap to go on",null,B.vM,null,null,null,null,null,null,null,null,null)
D.ewq=new A.D(B.ll,D.h5y,null)
D.as8=new A.ae(B.i_,18,B.c,null,null,null)
D.fKP=new A.B("Add",null,B.kH,null,null,null,null,null,null,null,null,null)
D.dhe=w([D.as8,B.rc,D.fKP],x.p)
D.fen=new A.c7(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.dhe,null)
D.ewt=new A.D(B.nH,D.fen,null)
D.ewu=new A.D(E.amh,A7.YC,null)
D.fEk=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fO2=new A.B("New Project",null,D.fEk,null,null,null,null,null,null,null,null,null)
D.dlI=w([D.as8,B.ae,D.fO2],x.p)
D.feq=new A.c7(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.dlI,null)
D.ewI=new A.D(B.hO,D.feq,null)
D.fQz=new A.B("Choose your header",null,A0.vL,null,null,null,null,null,null,null,null,null)
D.ex2=new A.D(B.hZ,D.fQz,null)
D.bfF=new A.fn(2.2,null,null,null,null,B.cU,null,null,null,null)
D.fk9=new A.a5(22,22,D.bfF,null)
D.bdM=new A.cj(B.z,null,null,D.fk9,null)
D.ex7=new A.D(B.a0O,D.bdM,null)
D.bEN=new A.Q(14,2,14,6)
D.h3F=new A.B("The top of your book. Tap a design to see it.",null,U.tY,null,null,null,null,null,null,null,null,null)
D.ex8=new A.D(D.bEN,D.h3F,null)
D.fPJ=new A.B("\ud83c\udfc6 A new record!",null,B.h6,null,null,null,null,null,null,null,null,null)
D.exa=new A.D(B.ll,D.fPJ,null)
D.eyJ=new A.j3(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eyM=new A.j3(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aNF=new A.j3(1,0.9607843137254902,0.48627450980392156,0)
D.JZ=new A.j3(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.AC=new A.j3(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eyS=new A.j3(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hCT=new C.bjZ(null)
D.bzA=new A.mK(D.hCT,null,B.az,null,null)
D.aRi=new A.cK(0,0,0,0,null,null,D.bzA,null)
D.fKR=new A.B("\ud83c\udfc5",null,B.abC,null,null,null,null,null,null,null,null,null)
D.eDh=new A.cK(null,0,-34,null,null,null,D.fKR,null)
D.eLm=new A.y("E","Sit by the fire again")
D.eQX=new A.y("C","Good Learner")
D.eUk=new A.y("D","Still Growing")
D.eYV=new A.y(-42,42)
D.f_g=new A.y("B","Faithful Listener")
D.f1f=new A.y("A","Keeper of the Family")
D.f4o=new A.b5(-17,0.7,0)
D.f4X=new A.b5(-8,0.95,1.3)
D.f6_=new A.b5(18,0.65,5.2)
D.f61=new A.b5(0,1.15,2.6)
D.f6m=new A.b5(9,0.9,3.9)
D.f8g=new A.ca([0,0,1,1])
D.aSN=new A.a4(0,0,520,160)
D.fbq=new A.a4(10,612,440,618)
D.fbr=new A.a4(10,612,440,628)
D.fbu=new A.a4(14,-64,34,-12)
D.fbx=new A.a4(300,336,350,348)
D.aae=new A.a4(30,96,420,346)
D.fby=new A.a4(30,-9,46,1)
D.fbz=new A.a4(4,2,11,14)
D.fbB=new A.a4(-8,-12.5,8,-7)
D.fbC=new A.a4(-16.5,-21,16.5,1)
D.fbD=new A.a4(60,342,88,348)
D.V3=new A.a4(66,-66,94,-36)
D.fbE=new A.a4(6,8,10,14)
D.fbH=new A.a4(95,343,115,348)
D.fbI=new A.a4(-6.5,-74,6.5,-58)
D.fbO=new A.a4(-100,-74,100,-12)
D.fbP=new A.a4(-10,8,-6,14)
D.fbQ=new A.a4(-11,2,-4,14)
D.fbR=new A.a4(-11,-70,11,-56)
D.fbY=new A.a4(-13,-24,13,-4)
D.fc3=new A.a4(-15,-21,15,0)
D.fc6=new A.a4(-16,-21,16,1)
D.fc7=new A.a4(-16,-21,16,2)
D.fca=new A.a4(-16,-26,16,-6)
D.fck=new A.a4(-230,-26,230,26)
D.fcI=new A.a4(-38,-26,12,-6)
D.fcM=new A.a4(-3,-70,3,-63)
D.fcN=new A.a4(-44,-22,44,0)
D.fcP=new A.a4(-46,-9,-30,1)
D.aSR=new A.a4(-80,-190,80,20)
D.fcW=new A.a4(-8,-26,40,-6)
D.fcX=new A.a4(-98,-80,92,-75)
D.fcY=new A.a4(-9,-15,9,-9)
D.h3c=new A.B("Let the AI write it from your tree",null,B.iH,null,B.K,null,null,null,null,null,null,null)
D.bNd=new A.di(1,B.cm,D.h3c,null)
D.ddK=w([E.a4s,B.ae,D.bNd],x.p)
D.fe1=new A.c7(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.ddK,null)
D.fKv=new A.B("Save member",null,B.cd,null,null,null,null,null,null,null,null,null)
D.dtW=w([D.at0,B.ae,D.fKv],x.p)
D.feb=new A.c7(B.aM,B.b8,B.h,B.l,null,B.p,null,0,D.dtW,null)
D.bYU=new A.ae(B.ii,14,B.b2,null,null,null)
D.fxS=new A.G(!0,B.b2,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOt=new A.B("Cashier",null,D.fxS,null,null,null,null,null,null,null,null,null)
D.dme=w([D.bYU,B.bn,D.fOt],x.p)
D.fef=new A.c7(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.dme,null)
D.fKw=new A.B("Transfer & settings",null,B.dk,null,null,null,null,null,null,null,null,null)
D.bKT=new A.by(1,B.ba,D.fKw,null)
D.d4Y=w([D.asA,B.as,D.bKT],x.p)
D.feg=new A.c7(B.aM,B.e,B.h,B.l,null,B.p,null,0,D.d4Y,null)
D.fiQ=new A.av(16,40)
D.fiV=new A.av(22,64)
D.fj1=new A.av(280,88)
D.fjQ=new A.a5(30,null,null,null)
D.fJB=new A.B("The teacher is writing\u2026",null,B.AZ,null,null,null,null,null,null,null,null,null)
D.beT=new A.cj(B.z,null,null,D.fJB,null)
D.hwT=new A.bf("w",x.W)
D.fke=new A.a5(null,56,D.beT,D.hwT)
D.fl2=new A.hJ(5,8,8,1,null)
D.fla=new A.hJ(2,12,12,1.05,null)
D.fO8=new A.B("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.flU=new A.b0(D.fO8,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fOo=new A.B("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aV9=new A.b0(D.fOo,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fWR=new A.B("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fmn=new A.b0(D.fWR,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h6A=new A.B("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fms=new A.b0(D.h6A,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fQx=new A.B("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fmz=new A.b0(D.fQx,null,null,null,null,null,null,null,null,null,null,null,null,B.hb,!1,null,null,null,B.t,null)
D.h3S=new A.B("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aVe=new A.b0(D.h3S,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fQv=new A.B("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fmZ=new A.b0(D.fQv,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fL7=new A.B("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fn0=new A.b0(D.fL7,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fUh=new A.B("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fn6=new A.b0(D.fUh,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h7k=new A.B("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fnN=new A.b0(D.h7k,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h26=new A.B("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.foc=new A.b0(D.h26,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h6E=new A.B("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fof=new A.b0(D.h6E,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fYu=new A.B("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.foh=new A.b0(D.fYu,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fSs=new A.B("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.foi=new A.b0(D.fSs,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fSt=new A.B("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fpk=new A.b0(D.fSt,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fOa=new A.B("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fpC=new A.b0(D.fOa,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fQa=new A.B("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fpW=new A.b0(D.fQa,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fXY=new A.B("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fqc=new A.b0(D.fXY,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fTh=new A.B("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fqd=new A.b0(D.fTh,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fD0=new A.G(!0,B.bE,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frM=new A.eq("\u2665",null,null,B.cL,null,null,null,null,null,null,D.fD0)
D.fAa=new A.G(!0,B.aS,null,null,null,null,28,B.O,B.cI,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs1=new A.eq("Today: how well do you know the family?",null,null,B.cL,null,null,null,null,null,null,D.fAa)
D.fsi=new A.G(!0,B.qe,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftu=new A.G(!0,D.kP,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftR=new A.G(!0,D.kP,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftV=new A.G(!0,B.cT,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu3=new A.G(!0,D.fB,null,null,null,null,15,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fue=new A.G(!0,D.fB,null,null,null,null,13,B.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuy=new A.ta(!0,B.tK,null,null,null,null,B.dE,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuO=new A.G(!0,B.cT,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuR=new A.G(!0,D.kP,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuS=new A.G(!0,B.cT,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuX=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv_=new A.G(!0,B.cT,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvv=new A.G(!0,B.b2,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvw=new A.G(!0,B.ab,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvy=new A.G(!0,B.aS,null,null,null,null,15.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvZ=new A.G(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWs=new A.G(!0,B.aR,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWt=new A.G(!0,D.lF,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwo=new A.G(!0,B.cT,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.abH=new A.ta(!0,B.Uz,null,null,null,null,B.dE,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.VY=new A.G(!0,B.cT,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwy=new A.G(!0,B.a_,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwD=new A.G(!0,D.fB,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx1=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyc=new A.G(!0,D.fB,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWD=new A.G(!0,D.fB,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyw=new A.G(!0,B.ab,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyI=new A.G(!0,D.fB,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyK=new A.G(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyQ=new A.G(!0,L.j6,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWH=new A.G(!0,D.fB,null,null,null,null,14.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzL=new A.G(!0,D.fB,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA3=new A.G(!0,D.fB,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA5=new A.G(!0,B.a_,null,null,null,null,13,B.a9,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA7=new A.G(!0,B.cT,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAv=new A.G(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A6.IQ,null,null,null)
D.aWV=new A.G(!0,D.fB,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAT=new A.G(!0,B.a_,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBe=new A.G(!0,B.fi,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBC=new A.G(!0,B.bQ,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBH=new A.G(!0,B.bD,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBT=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBW=new A.G(!0,D.fB,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC3=new A.G(!0,D.Gq,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCf=new A.G(!0,B.b2,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCE=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCL=new A.G(!0,B.ab,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.DN,null,null,null)
D.fDb=new A.G(!0,B.cT,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDj=new A.G(!0,B.cU,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDw=new A.G(!0,D.lG,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXh=new A.G(!0,D.fB,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.L5=new A.G(!0,B.cT,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXj=new A.G(!0,B.cT,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.DN,null,null,null)
D.fDR=new A.G(!0,B.bQ,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDV=new A.G(!0,G.np,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEi=new A.G(!0,B.b2,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEA=new A.G(!0,D.fB,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEY=new A.G(!0,B.c,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFm=new A.G(!0,D.fB,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFS=new A.G(!0,D.fB,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFX=new A.G(!0,B.an,null,null,null,null,11.5,B.a9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fG6=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.acb=new A.G(!0,B.an,null,null,null,null,12,B.a9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ace=new A.G(!0,D.lF,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHQ=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fI9=new A.G(!0,B.aS,null,null,null,null,27,B.O,B.cI,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIg=new A.G(!0,L.j6,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIo=new A.G(!0,L.j6,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIS=new A.B("Time:",null,B.hs,null,null,null,null,null,null,null,null,null)
D.fJc=new A.B("\ud83c\udfae",null,K.ac2,null,null,null,null,null,null,null,null,null)
D.fJd=new A.B("Themes",null,B.pW,null,null,null,null,null,null,null,null,null)
D.fJJ=new A.B("\ud83c\udfb2",null,B.xE,null,null,null,null,null,null,null,null,null)
D.fJN=new A.B("Delete this game?",null,B.iH,null,null,null,null,null,null,null,null,null)
D.fJU=new A.B("Add Item",null,B.cd,null,null,null,null,null,null,null,null,null)
D.fyq=new A.G(!0,B.a_,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKk=new A.B("Debt receipt",null,D.fyq,null,B.K,null,null,null,null,null,null,null)
D.aXy=new A.G(!0,B.an,null,null,null,null,11,B.a9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKD=new A.B("Person who owes",null,D.aXy,null,null,null,null,null,null,null,null,null)
D.fLB=new A.B("Notes",null,B.abR,null,null,null,null,null,null,null,null,null)
D.fM1=new A.B("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fxj=new A.G(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM3=new A.B("Share",null,D.fxj,null,null,null,null,null,null,null,null,null)
D.fN5=new A.B("Move your family trees",null,I.ac8,null,null,null,null,null,null,null,null,null)
D.fNK=new A.B("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fOn=new A.B("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fOL=new A.B("SAVE",null,D.L5,null,null,null,null,null,null,null,null,null)
D.fPn=new A.B("The round button is the right answer.",null,U.B3,null,null,null,null,null,null,null,null,null)
D.fPI=new A.B("Remove this book?",null,B.h6,null,null,null,null,null,null,null,null,null)
D.fEf=new A.G(!0,B.cT,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.DN,null,null,null)
D.fQf=new A.B("Fireside Stories",null,D.fEf,null,null,null,null,null,null,null,null,null)
D.aY1=new A.B("Download",null,B.cd,null,null,null,null,null,null,null,null,null)
D.fQW=new A.B("What should the AI do?",null,B.dk,null,null,null,null,null,null,null,null,null)
D.fwX=new A.G(!0,D.lF,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRa=new A.B("REPORT CARD",null,D.fwX,null,null,null,null,null,null,null,null,null)
D.fRX=new A.B("Calabash Catch",null,B.Wl,null,null,null,null,null,null,null,null,null)
D.fSo=new A.B("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fSP=new A.B("\ud83c\udfe1",null,B.F5,null,null,null,null,null,null,null,null,null)
D.fTw=new A.B("Ribbon bookmark",null,B.jC,null,null,null,null,null,null,null,null,null)
D.fFR=new A.G(!0,B.b2,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fU0=new A.B("NGMY.ORG",null,D.fFR,null,B.K,null,null,null,null,null,null,null)
D.fVj=new A.B("Scan family tree QR",null,B.cF,null,null,null,null,null,null,null,null,null)
D.fBX=new A.G(!0,B.c,null,null,null,null,13,B.a9,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fW6=new A.B("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fBX,null,B.K,null,null,null,null,null,null,null)
D.fXk=new A.B("Delete",null,B.VS,null,null,null,null,null,null,null,null,null)
D.fXl=new A.B("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fXt=new A.B("Thumbnail",null,B.pW,null,null,null,null,null,null,null,null,null)
D.fY2=new A.B("Save the cover",null,B.cF,null,null,null,null,null,null,null,null,null)
D.fY7=new A.B("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.B7,null,B.K,null,null,null,null,null,null,null)
D.fYv=new A.B("Your photos",null,B.pW,null,null,null,null,null,null,null,null,null)
D.fYL=new A.B("Create Project",null,B.cd,null,null,null,null,null,null,null,null,null)
D.fZ7=new A.B("\u2b50 stars",null,B.W5,null,null,null,null,null,null,null,null,null)
D.fZl=new A.B("Design your cover",null,A0.vL,null,null,null,null,null,null,null,null,null)
D.fZr=new A.B("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fZu=new A.B("PICTURE",null,M.vP,null,null,null,null,null,null,null,null,null)
D.fZw=new A.B("\ud83c\udfaf",null,D.Wk,null,null,null,null,null,null,null,null,null)
D.fZT=new A.B("Paid",null,B.cd,null,null,null,null,null,null,null,null,null)
D.fZV=new A.B("You can undo it right after.",null,U.B3,null,null,null,null,null,null,null,null,null)
D.h_s=new A.B("Print",null,B.vN,null,null,null,null,null,null,null,null,null)
D.h_R=new A.B("Amount owed",null,D.aXy,null,null,null,null,null,null,null,null,null)
D.h05=new A.B("Got it",null,B.cd,null,null,null,null,null,null,null,null,null)
D.h0H=new A.B("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.h0K=new A.B("Add to budget",null,B.cd,null,null,null,null,null,null,null,null,null)
D.h19=new A.B("Debtor signature",null,B.abR,null,null,null,null,null,null,null,null,null)
D.h1j=new A.B("Change icon",null,B.abQ,null,null,null,null,null,null,null,null,null)
D.h27=new A.B("MADE BY THE SYSTEM, FROM YOUR TREE",null,T.u_,null,null,null,null,null,null,null,null,null)
D.h2z=new A.B("Family tree QR",null,B.cF,null,null,null,null,null,null,null,null,null)
D.h2F=new A.B("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.Wj,null,null,null,null,null,null,null,null,null)
D.h32=new A.B("Download",null,B.vN,null,null,null,null,null,null,null,null,null)
D.h33=new A.B("The person who planted this tree has not made a game yet.",null,B.B5,null,null,null,null,null,null,null,null,null)
D.h37=new A.B("Change",null,B.pW,null,null,null,null,null,null,null,null,null)
D.h3Y=new A.B("Clear all",null,B.cd,null,null,null,null,null,null,null,null,null)
D.h40=new A.B("WHAT SHOULD IT CHANGE?",null,M.vP,null,null,null,null,null,null,null,null,null)
D.h4y=new A.B("COLOUR",null,M.vP,null,null,null,null,null,null,null,null,null)
D.h4N=new A.B("Do it",null,B.cF,null,null,null,null,null,null,null,null,null)
D.h4Q=new A.B("Create Tree",null,B.cd,null,null,null,null,null,null,null,null,null)
D.h5_=new A.B("Give me another clue",null,D.L5,null,null,null,null,null,null,null,null,null)
D.h5U=new A.B("Create Family Tree",null,B.fa,null,null,null,null,null,null,null,null,null)
D.h63=new A.B("THE TEACHER EXPLAINS THESE",null,T.u_,null,null,null,null,null,null,null,null,null)
D.fsh=new A.G(!0,E.kv,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h69=new A.B("Write the first page myself",null,D.fsh,null,null,null,null,null,null,null,null,null)
D.h6H=new A.B("Use this header",null,B.cF,null,null,null,null,null,null,null,null,null)
D.h6O=new A.B("Create Project",null,E.aXd,null,null,null,null,null,null,null,null,null)
D.hym=new C.acN(1,"header")
D.adg=new C.acN(2,"projects")
D.hyn=new C.acN(3,"cashier")
D.adh=new C.acN(4,"familyTree")
D.hLn=new C.cH7(0,"start")
D.hLo=new C.cH8(0,"start")
D.hyA=new C.ZR(null)
D.hzB=new C.a_j(null)
D.dHm=new A.bs(B.i2,[],A.at("bs<n,GD>"))
D.doX=w([],x.dE)
D.doY=w([],x.M)
D.hA9=new C.bhb(D.dHm,D.doX,D.doY,0,0,null,null)
D.b1x=new C.a09(0,"intro")
D.b1y=new C.a09(1,"countdown")
D.adu=new C.a09(2,"ask")
D.Xg=new C.a09(3,"reveal")
D.b1z=new C.a09(4,"end")
D.hCV=new C.ti(F.Gy,D.lG,B.cT,F.m7,5,!1,!1,!1,0,null)
D.hCW=new C.ti(F.Gy,B.er,B.cT,B.bO,2,!0,!0,!1,2,B.cT)
D.hCX=new C.ti(B.qr,B.cU,B.cT,F.m7,2,!0,!1,!1,2,B.at)
D.hCY=new C.ti(F.Gy,B.dW,B.cT,F.m7,5,!1,!1,!1,1,null)
D.hCZ=new C.ti(F.a_J,D.ajI,B.cT,F.m7,4,!0,!1,!0,0,null)
D.b1C=new C.ti(F.a_J,B.dR,B.cT,F.m7,3,!0,!1,!0,2,null)
D.b1D=new C.ti(F.rV,D.lG,B.c,F.m7,0,!1,!1,!0,0,null)
D.b1E=new C.ti(B.qr,B.aD,B.cT,B.bO,2,!0,!0,!1,2,B.dR)
D.b1F=new C.ti(B.qr,G.np,B.ic,F.m7,5,!1,!1,!0,3,null)
D.hD_=new C.ti(B.qr,B.dR,B.cT,F.m7,0,!0,!1,!1,0,B.aD)
D.b1G=new C.ti(F.Gy,B.er,B.cT,B.bO,1,!1,!0,!1,1,null)
D.b1H=new C.ti(F.G7,B.at,B.aD,F.m7,4,!0,!1,!0,2,null)
D.hD0=new C.ti(F.rV,B.at,B.er,F.m7,3,!0,!1,!1,0,null)
D.hD1=new C.ti(B.qr,B.dW,B.cT,B.bO,1,!1,!0,!1,1,null)
D.hD2=new C.ti(F.G7,D.aiK,B.c,F.m7,5,!1,!1,!0,0,null)
D.hDG=new C.a0H(null)
D.hLw=new C.agc(0,"still")
D.XD=new C.agc(1,"walk")
D.b27=new C.agc(2,"pound")
D.b28=new C.agc(3,"drum")
D.hHa=new C.a1Y(0,"greet")
D.b29=new C.a1Y(1,"teach")
D.adO=new C.a1Y(2,"ask")
D.hHb=new C.a1Y(3,"feedback")
D.b2a=new C.a1Y(4,"end")
D.XJ=new C.a2g(0,"intro")
D.XK=new C.a2g(1,"asking")
D.Bn=new C.a2g(2,"reacting")
D.ae_=new C.a2g(3,"driving")
D.ae0=new C.a2g(4,"arrived")
D.ae8=new C.aM0(0,"projects")
D.b2A=new C.aM0(1,"cashier")
D.hJg=new C.aM0(2,"familyTree")})()};
(a=>{a["lW74oxwtK/RBFo7zLmEORo+Ru1o="]=a.current})($__dart_deferred_initializers__);