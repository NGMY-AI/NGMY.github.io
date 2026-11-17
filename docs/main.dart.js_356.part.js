((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A8,N,Q,A_,S,A9,L,H,E,T,Aa,U,Ab,Ac,Ad,A0,Ae,Af,R,A1,Ag,Ah,Ai,M,A2,Aj,A3,A4,A5,Ak,A6,Al,G,Am,An,A7,Ao,Ap,V,O,Aq,Ar,W,As,X,P,F,At,I,K,Y,C={
bGc(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bGc=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vV(null,""),$async$bGc)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.X(y.z)
t=A.nn(b1)
s=A.c1(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dv(b3,k,Math.min(i,j))
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
return A.b(A.rh(t,a1,B.i2,"book",E.GU),$async$bGc)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.RB(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.X(l!=null&&A.M0(l)?y.k:y.y)
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a3M(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGc,v)},
aih(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aih=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vV(null,""),$async$aih)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.X(y.z)
t=A.nn(b6)
s=x.S
r=A.cX(c1,0,A.dD(4,"count",s),A.U(c1).c)
q=H.a3y(new A.N(r,new C.fPM(),r.$ti.k("N<ak.E,n>")).aM(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fPL(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.W.av(b7,null)+"\nAllowed values: style one of "+B.d.aM(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aih)
case 6:l=c5
k=H.RB(l==null?"":l)
if(k==null)throw A.X("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.apX(s,D.dHk,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
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
a4=B.d.dv(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.I)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.J(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.W.av(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aih)
case 10:l=c5
k=l==null?null:H.RB(l)
if(k==null)throw A.X(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.de(a8,d),a5=J.aT(a2.a),a2=a2.$ti,a7=new A.kM(a5,a2.k("kM<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gP(a5))
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
case 9:if(h.a!==0){s=h.$ti.k("b8<2>")
p=A.cF(new A.b8(h,s),new C.fPN(),s.k("M.E"),p)
p=H.a3y(A.pJ(p,3,A.a3(p).k("M.E")).aM(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.C(new A.cu(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.I)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a3M(s,b9),$async$aih)
case 13:b5=c5
for(s=J.a8(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.apX(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aih,v)},
hHy(d,e,f){return A.cg(null,B.w.j(0.65),!1,null,new C.fZt(e,f),d,null,!0,!0,x.g2)},
apX:function apX(d,e,f){this.a=d
this.b=e
this.c=f},
fPM:function fPM(){},
fPL:function fPL(d){this.a=d},
fPN:function fPN(){},
fZt:function fZt(d,e){this.a=d
this.b=e},
bE_(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bE_=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aU(b1,new C.fCT())){u=null
w=1
break}t=B.d.cC(b1,new C.fCU())
s=$.S()
r=new A.qI(new A.qj())
q=A.BC(r,D.aSM)
p=A.L()
p.r=B.c.gp(0)
q.aE(D.aSM,p)
o=A.L()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.aa
o.d=B.bG
o.e=B.dP
n=new C.fCZ(t)
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
return A.b(r.oW().xH(520,160),$async$bE_)
case 4:w=3
return A.b(b3.hj(B.he),$async$bE_)
case 3:b0=b3
u=b0==null?null:J.eQ(B.dK.gaT(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bE_,v)},
fNs(d){return C.im3(d)},
im3(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fNs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bk1()
n=d.x!=null&&d.zM(null).length===0
if(d.x!=null)t=n?D.AB:D.JZ
else t=d.gUJ()?D.JZ:D.aNE
w=3
return A.b(C.bE_(d.ax),$async$fNs)
case 3:s=f
p.a=null
if(s!=null)p.a=A.aoB(s)
r=A.a5x(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aNE}else{p.c=C.xl(q,!0)
p.b=n?D.AB:D.JZ}r.a4k(A.h9b(new C.fNu(p,d,new C.fNv(),t,n,o),null,D.bIa,B.xk))
u=r.jH(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fNs,v)},
fUc(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fUc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fNs(d),$async$fUc)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.aA(q,0,40)
u=Af.Hs(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fUc,v)},
fCT:function fCT(){},
fCU:function fCU(){},
fCZ:function fCZ(d){this.a=d},
fNv:function fNv(){},
fNu:function fNu(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fNt:function fNt(){},
fZW(d,e){var w=0,v=A.j(x.H)
var $async$fZW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,B.w.j(0.55),!0,null,new C.h__(new A.cx(null,x.eF),e),d,null,!0,!0,x.H),$async$fZW)
case 2:return A.h(null,v)}})
return A.i($async$fZW,v)},
bGF(d,e,f,g){return C.ity(d,e,f,g)},
ity(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bGF=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cK.aN(t)}catch(q){r=null}if(r==null||r.length===0){d.L(x.q).f.T(D.fpL)
w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.fZS(g,r,f),d,null,!0,!0,x.H),$async$bGF)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bGF,v)},
h_0(d,e){var w=0,v=A.j(x.H)
var $async$h_0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,null,!0,null,new C.h_3(new A.cx(null,x.eF),e),d,null,!0,!0,x.H),$async$h_0)
case 2:return A.h(null,v)}})
return A.i($async$h_0,v)},
b07:function b07(d,e){this.c=d
this.a=e},
c8v:function c8v(){},
bdk:function bdk(d,e){this.b=d
this.a=e},
h__:function h__(d,e){this.a=d
this.b=e},
fZX:function fZX(d){this.a=d},
fZY:function fZY(d,e,f){this.a=d
this.b=e
this.c=f},
fZZ:function fZZ(d,e){this.a=d
this.b=e},
fZS:function fZS(d,e,f){this.a=d
this.b=e
this.c=f},
fZQ:function fZQ(d){this.a=d},
fZR:function fZR(d,e,f){this.a=d
this.b=e
this.c=f},
h_3:function h_3(d,e){this.a=d
this.b=e},
h_1:function h_1(d){this.a=d},
h_2:function h_2(d,e,f){this.a=d
this.b=e
this.c=f},
fHK(d,e){var w=0,v=A.j(x.y),u,t
var $async$fHK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3i(d),$async$fHK)
case 3:t=g
J.nT(t,new C.fHL(e))
u=A.aiW(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fHK,v)},
fHL:function fHL(d){this.a=d},
aq9:function aq9(d,e,f){this.c=d
this.d=e
this.a=f},
aEV:function aEV(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dQU:function dQU(d,e){this.a=d
this.b=e},
dQF:function dQF(d,e){this.a=d
this.b=e},
dQI:function dQI(d,e,f){this.a=d
this.b=e
this.c=f},
dQH:function dQH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQG:function dQG(d,e){this.a=d
this.b=e},
dQJ:function dQJ(d,e){this.a=d
this.b=e},
dQD:function dQD(){},
dQE:function dQE(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dQC:function dQC(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dQn:function dQn(d){this.a=d},
dQo:function dQo(d,e,f){this.a=d
this.b=e
this.c=f},
dQp:function dQp(d,e){this.a=d
this.b=e},
dQm:function dQm(d){this.a=d},
dQu:function dQu(d,e){this.a=d
this.b=e},
dQl:function dQl(d){this.a=d},
dQv:function dQv(d,e,f){this.a=d
this.b=e
this.c=f},
dQw:function dQw(d,e,f){this.a=d
this.b=e
this.c=f},
dQk:function dQk(d,e){this.a=d
this.b=e},
dQx:function dQx(d,e,f){this.a=d
this.b=e
this.c=f},
dQj:function dQj(d,e){this.a=d
this.b=e},
dQy:function dQy(d,e){this.a=d
this.b=e},
dQi:function dQi(d){this.a=d},
dQz:function dQz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQg:function dQg(){},
dQa:function dQa(d){this.a=d},
dQb:function dQb(d){this.a=d},
dQh:function dQh(d,e){this.a=d
this.b=e},
dQA:function dQA(d,e){this.a=d
this.b=e},
dQf:function dQf(d){this.a=d},
dQB:function dQB(d){this.a=d},
dQe:function dQe(){},
dQq:function dQq(d,e){this.a=d
this.b=e},
dQd:function dQd(d){this.a=d},
dQr:function dQr(d,e,f){this.a=d
this.b=e
this.c=f},
dQc:function dQc(d,e){this.a=d
this.b=e},
dQ9:function dQ9(d,e){this.a=d
this.b=e},
dQs:function dQs(d){this.a=d},
dQt:function dQt(d,e,f){this.a=d
this.b=e
this.c=f},
dQX:function dQX(){},
dQY:function dQY(d,e){this.a=d
this.b=e},
dQV:function dQV(d){this.a=d},
dQW:function dQW(d){this.a=d},
dQR:function dQR(d,e){this.a=d
this.b=e},
dQS:function dQS(d){this.a=d},
dQK:function dQK(d,e,f){this.a=d
this.b=e
this.c=f},
dQL:function dQL(d,e,f){this.a=d
this.b=e
this.c=f},
dQM:function dQM(d,e,f){this.a=d
this.b=e
this.c=f},
dQN:function dQN(d,e,f){this.a=d
this.b=e
this.c=f},
dQO:function dQO(d,e,f){this.a=d
this.b=e
this.c=f},
dQP:function dQP(d,e,f){this.a=d
this.b=e
this.c=f},
dQQ:function dQQ(d,e,f){this.a=d
this.b=e
this.c=f},
dQZ:function dQZ(){},
dR_:function dR_(){},
dR0:function dR0(){},
dR1:function dR1(d){this.a=d},
dQT:function dQT(d,e){this.a=d
this.b=e},
hD4(d){return B.d.dL(D.a5w,new C.fIw(d),new C.fIx())},
uT:function uT(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fIw:function fIw(d){this.a=d},
fIx:function fIx(){},
amc:function amc(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aWP:function aWP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
U4:function U4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgY:function bgY(){this.d=$
this.c=this.a=null},
dgy:function dgy(d,e){this.a=d
this.b=e},
dgw:function dgw(d,e){this.a=d
this.b=e},
dgx:function dgx(){},
dgz:function dgz(d,e){this.a=d
this.b=e},
hng(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bj(J.k(u==null?"":u))
return new C.nw(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
LN(d,e){return C.ikJ(d,e)},
ikJ(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$LN=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$LN)
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
o=A.cF(o,new C.fL1(),o.$ti.k("M.E"),x.B)
n=A.a3(o).k("Y<M.E>")
o=A.C(new A.Y(o,new C.fL2(),n),n.k("M.E"))
B.d.b_(o,new C.fL3())
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
return A.i($async$LN,v)},
Bu(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Bu=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aA(),$async$Bu)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b7(f,new C.fYx(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aC("String","ngmy_family_book_v1_"+s+"_"+e,B.W.av(r,null)),$async$Bu)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Bu,v)},
aSV(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aSV=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LN(d,e),$async$aSV)
case 2:u=h
t=J.cD(u)
s=t.bk(u,new C.h69(f))
if(s===-1)t.c9(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Bu(d,e,u),$async$aSV)
case 3:return A.h(null,v)}})
return A.i($async$aSV,v)},
bEs(d,e,f){var w=0,v=A.j(x.H),u
var $async$bEs=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LN(d,e),$async$bEs)
case 2:u=h
J.nT(u,new C.fHC(f))
w=3
return A.b(C.Bu(d,e,u),$async$bEs)
case 3:return A.h(null,v)}})
return A.i($async$bEs,v)},
bEG(d,e){return C.ikI(d,e)},
ikI(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bEG=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bEG)
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
h=B.d.q(D.a7e,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.q(D.a6y,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.q(D.a6u,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.d8z,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
o=new C.Is(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.P0
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
return A.i($async$bEG,v)},
SJ(d,e,f){return C.it3(d,e,f)},
it3(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$SJ=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aA(),$async$SJ)
case 7:r=h
w=8
return A.b(r.aC("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.W.av(f.aj(),null)),$async$SJ)
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
return A.i($async$SJ,v)},
Sb(d,e){return C.ikK(d,e)},
ikK(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Sb=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$Sb)
case 7:r=g
q=r.tV("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.LN(d,e),$async$Sb)
case 8:if(!j.cJ(g)){n=B.a.i(d.toLowerCase())
m=J.lL(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aC("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Sb)
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
return A.i($async$Sb,v)},
ahA(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ahA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sb(d,e),$async$ahA)
case 3:s=g
r=J.a8(s)
if(r.gJ(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gJ(s):"main"
r.I(s,t)
w=5
return A.b(A.aA(),$async$ahA)
case 5:w=4
return A.b(g.aC("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ahA)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahA,v)},
a3Y(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a3Y=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Sb(d,e),$async$a3Y)
case 2:s=h
J.hd(s,f)
w=3
return A.b(A.aA(),$async$a3Y)
case 3:u=h
w=4
return A.b(u.aC("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a3Y)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a3Y)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a3Y)
case 6:return A.h(null,v)}})
return A.i($async$a3Y,v)},
nw:function nw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fL1:function fL1(){},
fL2:function fL2(){},
fL3:function fL3(){},
fYx:function fYx(){},
h69:function h69(d){this.a=d},
fHC:function fHC(d){this.a=d},
Is:function Is(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bRV:function bRV(d){this.a=d},
itn(d,e,f,g,h,i,j){return A.a6(d,!1).ce(A.ed(new C.fZ7(j,i,f,e,h,g),!0,null,x.H))},
S6(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$S6=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sb(h,g),$async$S6)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.L(x.q).f.T(D.aV7)
u=!1
w=1
break}w=4
return A.b(C.hHy(d,f,e),$async$S6)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ahA(h,g),$async$S6)
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
return A.b(C.Bu(h,r,p),$async$S6)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.SJ(h,r,new C.Is("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$S6)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$S6,v)},
fZ7:function fZ7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a_F:function a_F(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBT:function aBT(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dhd:function dhd(d){this.a=d},
dhc:function dhc(d,e){this.a=d
this.b=e},
dh1:function dh1(d,e){this.a=d
this.b=e},
dgZ:function dgZ(d,e){this.a=d
this.b=e},
dgA:function dgA(d){this.a=d},
dgB:function dgB(d,e){this.a=d
this.b=e},
dh2:function dh2(d){this.a=d},
dgJ:function dgJ(d){this.a=d},
dgH:function dgH(d){this.a=d},
dgI:function dgI(d){this.a=d},
dgK:function dgK(d){this.a=d},
dh_:function dh_(d){this.a=d},
dh0:function dh0(){},
dgF:function dgF(d){this.a=d},
dgG:function dgG(d,e){this.a=d
this.b=e},
dgL:function dgL(d){this.a=d},
dgM:function dgM(d,e){this.a=d
this.b=e},
dhb:function dhb(d){this.a=d},
dha:function dha(d,e){this.a=d
this.b=e},
dh9:function dh9(d){this.a=d},
dgW:function dgW(d){this.a=d},
dgV:function dgV(d){this.a=d},
dgX:function dgX(d){this.a=d},
dgC:function dgC(d,e){this.a=d
this.b=e},
dgY:function dgY(d,e){this.a=d
this.b=e},
dgP:function dgP(d){this.a=d},
dgQ:function dgQ(d){this.a=d},
dgO:function dgO(){},
dgR:function dgR(d){this.a=d},
dgS:function dgS(d){this.a=d},
dgT:function dgT(d,e){this.a=d
this.b=e},
dgU:function dgU(d,e,f){this.a=d
this.b=e
this.c=f},
dgN:function dgN(d,e){this.a=d
this.b=e},
dh4:function dh4(d){this.a=d},
dh3:function dh3(){},
dh5:function dh5(d){this.a=d},
dh6:function dh6(d){this.a=d},
dh7:function dh7(d){this.a=d},
dh8:function dh8(d,e){this.a=d
this.b=e},
dgD:function dgD(d){this.a=d},
dgE:function dgE(d){this.a=d},
a_J:function a_J(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhm:function bhm(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dj_:function dj_(d){this.a=d},
dj0:function dj0(d){this.a=d},
diZ:function diZ(d){this.a=d},
dj1:function dj1(d){this.a=d},
diY:function diY(d){this.a=d},
dj2:function dj2(d){this.a=d},
diX:function diX(d){this.a=d},
dj3:function dj3(d,e){this.a=d
this.b=e},
diW:function diW(d,e){this.a=d
this.b=e},
dj4:function dj4(d,e){this.a=d
this.b=e},
a_H:function a_H(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ag0:function ag0(d,e,f){this.a=d
this.b=e
this.c=f},
aBW:function aBW(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dhs:function dhs(d,e){this.a=d
this.b=e},
dhr:function dhr(d,e){this.a=d
this.b=e},
dhw:function dhw(d){this.a=d},
dhv:function dhv(d,e){this.a=d
this.b=e},
dht:function dht(d){this.a=d},
dhu:function dhu(d){this.a=d},
dhx:function dhx(d){this.a=d},
dhy:function dhy(d){this.a=d},
dhq:function dhq(d,e){this.a=d
this.b=e},
dhp:function dhp(d,e){this.a=d
this.b=e},
KS:function KS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ZX:function ZX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cPR:function cPR(d){this.a=d},
cPS:function cPS(){},
cPT:function cPT(d){this.a=d},
bez:function bez(d,e,f){this.b=d
this.c=e
this.a=f},
beq:function beq(d,e){this.b=d
this.a=e},
uU:function uU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_f:function a_f(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bex:function bex(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d8p:function d8p(d,e,f){this.a=d
this.b=e
this.c=f},
d8o:function d8o(d,e){this.a=d
this.b=e},
d8O:function d8O(d){this.a=d},
d8B:function d8B(){},
d8P:function d8P(d){this.a=d},
d8A:function d8A(){},
d8Q:function d8Q(d,e){this.a=d
this.b=e},
d8z:function d8z(d,e){this.a=d
this.b=e},
d8R:function d8R(d,e){this.a=d
this.b=e},
d8y:function d8y(d,e){this.a=d
this.b=e},
d8S:function d8S(d){this.a=d},
d8x:function d8x(){},
d8T:function d8T(d,e){this.a=d
this.b=e},
d8w:function d8w(d,e){this.a=d
this.b=e},
d8U:function d8U(d){this.a=d},
d8J:function d8J(d,e){this.a=d
this.b=e},
d8V:function d8V(d){this.a=d},
d8W:function d8W(d){this.a=d},
d8Y:function d8Y(d){this.a=d},
d8Z:function d8Z(d){this.a=d},
d8I:function d8I(d,e){this.a=d
this.b=e},
d9_:function d9_(d,e){this.a=d
this.b=e},
aIZ:function aIZ(d){this.a=d},
bjT:function bjT(d){this.a=d},
bcH:function bcH(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
amd:function amd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a1V:function a1V(d,e){this.a=d
this.b=e},
ame:function ame(d,e,f,g,h,i){var _=this
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
bS4:function bS4(d){this.a=d},
bRZ:function bRZ(d){this.a=d},
bRY:function bRY(d,e){this.a=d
this.b=e},
bS7:function bS7(d){this.a=d},
bS_:function bS_(d){this.a=d},
bS0:function bS0(d){this.a=d},
bS3:function bS3(d){this.a=d},
bS2:function bS2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bS5:function bS5(d,e){this.a=d
this.b=e},
bS6:function bS6(){},
bS1:function bS1(d){this.a=d},
bRW:function bRW(d,e){this.a=d
this.b=e},
bRX:function bRX(d){this.a=d},
bpu:function bpu(d,e){this.b=d
this.a=e},
aBU:function aBU(){},
iC(d,e){var w
$.S()
w=A.L()
w.b=B.aa
w.c=e
w.r=d.gp(0)
w.d=B.bG
w.e=B.dP
return w},
bE1(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.br(j.save())
j.translate(e.a,e.b)
d.oo(0,a0?-f:f,f)
w=A.bW(B.hr,8,36)
v=B.w.j(0.3)
u=$.S()
t=A.L()
t.r=v.gp(0)
d.c_(w,t)
w=a1===D.XE
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ap(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.euS,new A.r(-4+v,-2),C.iC(q,5))
d.ah(D.esr,new A.r(4-v,-2),C.iC(q,5))}else{t=A.bW(B.JQ,14,40)
p=A.L()
p.r=v.gp(0)
d.c_(t,p)}v=u.r
u=x.v
o=new A.aH(v,B.aj,k,k,A.a([],u))
t=-64-r
o.E(new A.aZ(-11,t))
o.E(new A.cd(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.cd(15,-40,11,t))
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
break}if(a1===D.b25){n=-52+w*14
d.ah(new A.r(10,n-22),new A.r(10,n+44),C.iC(F.G6,3.4))
d.ah(D.ev9,new A.r(9,n),C.iC(q,4))
d.ah(D.esR,new A.r(10,n),C.iC(q,4))}else if(a1===D.b26){d.ah(D.etX,new A.r(-8,-26-Math.max(0,w)*6),C.iC(q,4))
d.ah(D.eqU,new A.r(8,-26-Math.max(0,-w)*6),C.iC(q,4))}else{w=s*3
v=-38-r
d.ah(D.eu1,new A.r(-12-w,v),C.iC(q,4))
d.ah(D.aMG,new A.r(12+w,v),C.iC(q,4))}w=A.L()
w.r=q.gp(0)
d.aE(D.fcB,w)
m=new A.r(0,-77-r)
w=A.bW(m,22,19)
v=A.L()
v.r=q.gp(0)
d.c_(w,v)
w=h.y
if(w!=null){v=A.bW(m.a5(0,K.vD),15,24)
u=A.L()
u.r=w.gp(0)
d.c_(v,u)
u=m.a5(0,D.eqO)
v=A.L()
v.r=w.gp(0)
d.O(u,4,v)}else{w=A.bW(m.a5(0,B.tH),23,20)
v=h.d
u=A.L()
u.r=v.gp(0)
d.cQ(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a5(0,D.ev7),m.a5(0,D.etV),C.iC(v,2.2))
d.ah(m.a5(0,D.esQ),m.a5(0,D.eqL),C.iC(v,2.2))}if(w===4){w=m.a5(0,D.evb)
u=A.L()
u.r=v.gp(0)
d.O(w,6,u)
u=m.a5(0,D.esS)
w=A.L()
w.r=v.gp(0)
d.O(u,6,w)}}w=m.a5(0,D.etJ)
v=A.L()
v.r=B.id.gp(0)
d.O(w,0.9,v)
v=m.a5(0,D.etx)
w=A.L()
w.r=B.id.gp(0)
d.O(v,0.9,w)
if(i){l=m.a5(0,K.a9c)
w=A.bW(l,21,22)
v=A.L()
v.r=D.lF.gp(0)
d.c_(w,v)
v=A.bW(l.a5(0,K.aMD),5,12)
w=A.L()
w.r=D.bhr.gp(0)
d.c_(v,w)
d.ah(l.a5(0,D.ev3),l.a5(0,K.aN0),C.iC(B.cT,1.4))
d.ah(D.aMG,new A.r(15,-88-r),C.iC(q,3.6))}j.restore()},
hBG(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.br(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bW(0,f)
v=A.bW(B.dL,18,96)
u=B.w.j(0.28)
$.S()
t=A.L()
t.r=u.gp(0)
d.c_(v,t)
t=A.bW(B.dL,11,70)
v=B.w.j(0.2)
u=A.L()
u.r=v.gp(0)
d.c_(t,u)
d.lB(D.aSQ,A.L())
C.i9p(d,g,h,i,j)
s=(k==null?D.a9h:k).a-w>=0?1:-1
w=A.L()
w.a=B.M9
w.san(A.jC(new A.r(s*70,-60),new A.r(-s*70,-60),A.a([D.aje.j(0.5),D.aje.j(0.12),D.boQ.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aE(D.aSQ,w)
r.restore()
r.restore()},
i9p(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ap(d,B.w,0.28)
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
s=A.bx(D.fcC,B.tM)
p=$.S()
o=A.L()
o.r=u.gp(0)
a1.aq(s,o)
o=A.bx(D.fcx,B.hU)
s=A.ap(v,B.w,0.18)
s.toString
n=A.L()
n.r=s.gp(0)
a1.aq(o,n)
n=A.bx(D.fcL,B.hU)
o=A.ap(v,B.w,0.1)
o.toString
s=A.L()
s.r=o.gp(0)
a1.aq(n,s)
s=A.L()
s.r=d.gp(0)
a1.c_(D.fcE,s)
s=A.L()
s.r=d.gp(0)
a1.c_(D.fbn,s)
s=a1.c
J.br(s.save())
s.translate(a3.w,0)
J.br(s.save())
a1.oo(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aH(p.r,B.aj,e,e,A.a([],n))
p=-m
k=p+2
l.E(new A.aZ(k,-58))
l.E(new A.cd(p-3,-62,p,-52))
l.E(new A.aq(p+4,-14))
l.E(new A.aq(m-4,-14))
l.E(new A.aq(m,-52))
l.E(new A.cd(m+3,-62,m-2,-58))
l.E(new A.cd(0,-70,k,-58))
l.E(new A.bw())
k=A.L()
k.r=v.gp(0)
a1.af(l,k)
J.br(s.save())
a1.mx(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.dfo[j]
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
default:a1.ah(D.eux,D.erz,C.iC(a2.c.j(0.9),3))}a1.ah(D.ev4,D.eu3,C.iC(B.w.j(0.18),1.6))
a1.ah(D.eqT,K.aMI,C.iC(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.S()
i=A.L()
i.r=u.gp(0)
a1.aE(D.fbj,i)
s.restore()
i=A.L()
i.r=a0.gp(0)
a1.aE(D.fbx,i)
n=new A.aH(k.r,B.aj,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.cd(0,-57,9,-66))
n.E(new A.cd(0,-60,-9,-66))
k=A.L()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cQ(D.fbG,0.1,2.941592653589793,!1,C.iC(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.a9m
n=25*q
k=23*q
i=9*q
C.hxO(a1,new A.r(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.EA:o
C.hxO(a1,new A.r(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.esj,D.esf,C.iC(D.akb,4))
a1.ah(D.esh,D.esd,C.iC(D.Gu.j(0.7),1.4))
u=A.L()
u.r=B.cT.gp(0)
a1.O(D.esg,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.br(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.jq(0,a3.f)
a1.bW(0,r)
C.i9k(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hxO(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aJ(0,e),r=s.gcJ(),q=r===0?B.hr:s.eV(0,r),p=B.j.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
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
d.c_(o,w)
w=-l
w=t.a5(0,new A.r(i*w*0.45,w*0.1))
o=A.L()
o.r=k.gp(0)
d.O(w,l*0.28,o)},
i9k(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bW(B.vC,40,38)
$.S()
v=A.L()
v.r=c0.gp(0)
c2.c_(w,v)}if(c1===4){$.S()
w=A.L()
w.r=c0.gp(0)
c2.O(D.eud,9.5,w)
w=A.L()
w.r=c0.gp(0)
c2.O(D.er9,9.5,w)}w=A.bW(D.evq,10,6)
v=$.S()
u=A.L()
u.r=c8.gp(0)
c2.c_(w,u)
u=A.bW(D.etG,10,6)
w=A.L()
w.r=c8.gp(0)
c2.c_(u,w)
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
u.san(A.we(D.euU,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iC(c8.j(0.5),0.8)
c2.cQ(D.fcN,3.455751918948773,2.5132741228718345,!1,s)
c2.cQ(D.fbq,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.eua,D.etZ,s)
c2.ah(D.er5,D.eqX,s)
c2.cQ(D.fbF,2.2,1.4,!1,s)
c2.cQ(D.fbo,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.r=c0.gp(0)
c2.O(new A.r(p*14.5,-3+o*17.5),4.3,n)}p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fbT,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aH(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-15,-11))
p.E(new A.cd(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.cd(0,-12,-13,-6))
p.E(new A.bw())
o=A.L()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.eu_,D.eqY,C.iC(G.nq,1.4))
o=A.L()
o.r=c0.gp(0)
c2.O(D.eug,3,o)
o=A.L()
o.r=c0.gp(0)
c2.O(D.era,3,o)
o=new A.aH(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.cd(-12,22,0,26))
o.E(new A.cd(12,22,13,6))
o.E(new A.cd(8,13,0,12))
o.E(new A.cd(-8,13,-13,6))
o.E(new A.bw())
p=A.L()
p.r=B.hY.gp(0)
c2.af(o,p)
p=new A.aH(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-7,8))
p.E(new A.cd(0,6,7,8))
p.E(new A.cd(0,10.5,-7,8))
o=A.L()
o.r=B.bO.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aH(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-17,-4))
p.E(new A.cd(-20,-27,0,-29))
p.E(new A.cd(20,-27,17,-4))
p.E(new A.cd(0,-14,-17,-4))
p.E(new A.bw())
o=A.L()
o.r=m.gp(0)
c2.af(p,o)
o=A.ap(m,B.w,0.3)
o.toString
c2.cQ(D.fc_,3.4,2.5,!1,C.iC(o,1.4))
o=A.ap(m,B.c,0.3)
o.toString
c2.cQ(D.fbN,3.6,2.2,!1,C.iC(o,1.2))
o=new A.aH(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(11,-22))
o.E(new A.cd(27,-34,25,-19))
o.E(new A.cd(18,-18,11,-22))
p=A.ap(m,B.c,0.1)
p.toString
n=A.L()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aH(v,B.aj,b9,b9,A.a([],w))
n.E(new A.aZ(11,-22))
n.E(new A.cd(24,-12,27,-26))
n.E(new A.cd(18,-22,11,-22))
o=A.ap(m,B.w,0.2)
o.toString
p=A.L()
p.r=o.gp(0)
c2.af(n,p)
p=A.L()
p.r=c3.c.gp(0)
c2.O(D.eqZ,3,p)
break
case 3:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fbX,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ap(c0,B.c,0.18)
p.toString
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.b=B.aa
o.c=0.9
o.r=p.gp(0)
o.d=B.bG
o.e=B.dP
c2.ah(new A.r(r*3.6,-19+Math.abs(r)*0.8),new A.r(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=I.aDm[l]
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
c2.cQ(D.fbW,3.204424506661589,3.015928947446201,!0,p)
p=A.ap(c0,B.c,0.25)
p.toString
c2.ah(K.a9c,K.a9b,C.iC(p,1))
break
default:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fbr,3.267256359733385,2.8902652413026098,!0,p)}i=B.j.D(c4.b,0,1)*0.4+0.1
p=A.bW(D.evd,5,8)
o=D.agr.j(i)
n=A.L()
n.r=o.gp(0)
c2.c_(p,n)
n=A.bW(D.etR,5,8)
p=D.agr.j(i)
o=A.L()
o.r=p.gp(0)
c2.c_(n,o)
h=c4.e*2.4
o=new A.aH(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(h-0.6,-2))
o.E(new A.cd(h-3.4,6,h-2.6,7.4))
o.E(new A.cd(h,8.8,h+2.6,7.4))
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
c2.c_(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.br(d.save())
a6=A.a([],w)
a4=new A.aH(v,B.aj,b9,b9,a6)
a6.push(new A.jw(A.bW(new A.r(a5,-3),a3,7)))
a4.ab()
a3=a4.e
if(a3==null)a3=a4.e=new A.E8(a4.glg().a.snapshot())
d.clipPath(a3.a,$.mG(),!0)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a3.r=D.bli.gp(0)
c2.O(new A.r(a7,a8),2.1,a3)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a3.r=B.w.gp(0)
c2.O(new A.r(a7,a8),1.05,a3)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a3.r=B.c.gp(0)
c2.O(new A.r(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.ZQ:c8.j(0.9)
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
if(o)b4=D.bvs
else{u=A.ap(c8,D.boS,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.j.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aH(v,B.aj,b9,b9,A.a([],w))
w=-b6
b8.E(new A.aZ(w,11.5))
b8.E(new A.cd(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.cd(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.bw())
v=A.L()
v.r=D.boa.gp(0)
c2.af(b8,v)
J.br(d.save())
c2.mx(0,b8)
v=B.c.j(0.95)
u=A.L()
u.r=v.gp(0)
c2.aE(new A.a5(w,11,w+b6*2,13.2),u)
u=A.bW(new A.r(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.L()
w.r=D.bvx.gp(0)
c2.c_(u,w)
d.restore()
c2.af(b8,C.iC(b4,1.1))}else{u=new A.aH(v,B.aj,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.aZ(-5.2,p))
u.E(new A.cd(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iC(b4,1.5))
if(b5>0.6){w=new A.aH(v,B.aj,b9,b9,A.a([],w))
w.E(new A.aZ(-4.6,11.8))
w.E(new A.cd(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.cd(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.L()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cQ(D.fbE,-1.2,2.2,!1,C.iC(c8.j(0.5),0.8))
c2.cQ(D.fbt,2.141592653589793,2.2,!1,C.iC(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.L()
w.r=c1.gp(0)
c2.O(D.etz,1.7,w)
w=A.L()
w.r=c1.gp(0)
c2.O(D.etv,1.7,w)}},
ieM(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.S(),f=new A.qI(new A.qj()),e=A.BC(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.L()
a2.san(A.jC(B.J,new A.r(0,a0*0.46),D.dc9,D.d3w,B.x,h))
e.aE(new A.a5(0,0,0+d,0+a0),a2)
a2=e.c
J.br(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bW(0,a1)
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
d.san(A.we(B.J,230,A.a([D.bjY,B.L],a0),h,B.x,h,h,0))
e.c_(D.fc9,d)
a2.restore()
d=A.L()
d.san(A.we(D.a9k,58,A.a([D.bnd,B.L],a0),h,B.x,h,h,0))
e.O(D.a9k,58,d)
d=A.L()
d.r=D.biG.gp(0)
e.O(D.a9k,24,d)
d=A.L()
d.r=D.a_g.gp(0)
e.O(D.erT,5,d)
d=A.L()
d.r=D.a_g.gp(0)
e.O(D.erX,3.4,d)
d=A.L()
d.r=D.a_g.gp(0)
e.O(D.erW,2.4,d)
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
g=[D.bhf,D.bje,D.bpb][s]
u=$.S()
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cyd[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.b=B.aa
u.c=2.4
u.r=D.a_D.gp(0)
u.d=B.bG
u.e=B.dP
e.ah(new A.r(o,k),new A.r(g,d),u)
g=A.bW(new A.r(g,k-27),11,46)
u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.r=D.a_D.gp(0)
e.c_(g,u)
d=A.bW(new A.r(o-12,d),8,24)
u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.r=D.a_D.gp(0)
e.c_(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.r=D.biJ.j(0.8).gp(0)
e.O(new A.r(20+v*52+g*7,400+d*5),1.2,u)}g=A.L()
g.san(A.jC(D.eqs,D.equ,D.d5w,B.x9,B.x,h))
e.aE(new A.a5(-200,412,650,1300),g)
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
e.c_(u,d)}J.br(a2.save())
a2.translate(225,590)
e.oo(0,1,0.34)
g=A.L()
g.san(A.we(B.J,250,A.a([D.bq7,D.bjz,D.bs5],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.O(B.J,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ap(D.aiU,D.bid,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.S()
a0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a0.b=B.aa
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bG
a0.e=B.dP
e.ah(new A.r(o+i*2,k),new A.r(o+i*5,g+Math.abs(i)*3),a0)}}C.i7E(e)
for(l=0;l<3;++l)C.iaM(e,D.aBa[l])
C.iaB(e,D.erN)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.S()
a0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a0.b=B.aa
a0.c=2.4
a0.r=D.a_y.gp(0)
a0.d=B.bG
a0.e=B.dP
e.ah(new A.r(o,452+g),new A.r(o+1,436+d),a0)}e.ah(D.eqV,D.ere,C.iC(D.biX,1.6))
a2.restore()
return f.oW()},
i7E(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.S().r,g=x.v,f=new A.aH(h,B.aj,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.kn(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.kn(416,382,432,422,428,462))
f.E(new A.bw())
w=A.L()
w.san(A.jC(new A.r(354,0),new A.r(430,0),D.dAd,B.mp,B.x,i))
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
d.ah(new A.r(t,s),new A.r(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.dgM[o]
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
r=new A.cd(p,m,w,q)
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
l.r=A.ap(D.biP,D.bp9,v.ai()).j(0.92).gp(0)
d.O(new A.r(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.b=B.aa
r.c=1.2
r.r=D.a_y.gp(0)
r.d=B.bG
r.e=B.dP
d.ah(new A.r(w,q+8),new A.r(w,q+22),r)
q=A.bW(new A.r(w,q+28),13,7)
w=new A.ar(B.S,B.Q,B.V,B.X,B.U)
w.r=D.bqt.gp(0)
d.c_(q,w)}},
iaM(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bW(new A.r(a5,a6+2),a9,a7*2.8),b1=B.w.j(0.3),b2=$.S(),b3=A.L()
b3.r=b1.gp(0)
b4.c_(b0,b3)
b2=b2.r
b3=x.v
w=new A.aH(b2,B.aj,a4,a4,A.a([],b3))
b0=a5-a7
b1=a6-a8
w.E(new A.aZ(b0,b1))
w.E(new A.aq(b0,a6))
v=a5+a7
w.E(new A.cd(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.bw())
u=A.L()
u.san(A.jC(new A.r(b0,0),new A.r(v,0),D.dgS,B.mp,B.x,a4))
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
b4.aE(new A.a5(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.j.bi(u);++l){k=m+l*10
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
for(p/=6,l=0;l<=B.j.bi(p);++l){o=(l&1)===0?0:-5
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
b2.E(new A.cd(p,a6-a8*0.82,o,j))
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
e.E(new A.cd(a5-a9,n,a5,u))
e.E(new A.cd(a5+a9,n,p,j))
e.E(new A.cd(a5,b1+a7*0.34,o,j))
e.E(new A.bw())
b1=A.L()
n=a7*1.4
b1.san(A.jC(new A.r(a5-n,0),new A.r(a5+n,0),D.dkr,B.mp,B.x,a4))
b4.af(e,b1)
J.br(v.save())
b4.mx(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h3()?B.w:D.bim).j(0.16)
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
n=new A.cd(a5,a0+7+l*1.5,a5+a1,n)
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
v.r=D.bpB.gp(0)
v.d=B.bG
v.e=B.dP
b4.ah(new A.r(a2,a3),new A.r(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aH(b0,B.aj,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bw())
b0=A.L()
b0.r=D.blL.gp(0)
b4.af(a9,b0)},
iaB(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+I.aDj[s]
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.b=B.aa
q.c=3
q.r=D.a_y.gp(0)
q.d=B.bG
q.e=B.dP
d.ah(new A.r(r,u),new A.r(r,t),q)}u=A.bW(e.a5(0,K.aMC),24,36)
t=$.S()
r=A.L()
r.r=D.buE.gp(0)
d.c_(u,r)
t=new A.aH(t.r,B.aj,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.aZ(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.cd(w,v-24,r,u))
t.E(new A.bw())
u=A.L()
u.r=D.ahV.gp(0)
d.af(t,u)},
i9Y(d){switch(B.o.F(d,8)){case 0:return D.b1E
case 1:return D.b1C
case 2:return D.b1B
case 3:return D.b1A
case 4:return D.b1D
case 5:return D.b1F
case 6:return D.hCP
default:return D.hCO}},
SH(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bpv()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a9m:j
w.as=k==null?D.EA:k
C.hBG(d,e,p,C.i9Y(m),w,s,m,l)},
hDa(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bTJ:function bTJ(){var _=this
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
tg:function tg(d,e,f,g,h,i,j,k,l,m){var _=this
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
bpv:function bpv(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
amw:function amw(){this.b=this.a=null},
aWU:function aWU(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bTB:function bTB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTC:function bTC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTD:function bTD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTE:function bTE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTF:function bTF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTG:function bTG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTH:function bTH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTI:function bTI(){},
bTA:function bTA(d){this.a=d},
ag9:function ag9(d,e){this.a=d
this.b=e},
ae7:function ae7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
N7(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bSk(s)
s.bC5(d)
return s},
H1(d,e,f,g,h,i,j){var w,v=A.U(g).k("Y<1>")
v=A.d0(new A.Y(g,new C.fvH(f),v),v.k("M.E"))
w=A.C(v,A.a3(v).k("ci.E"))
B.d.e0(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.u(v,A.cX(w,0,A.dD(3,"count",x.S),A.U(w).c))
B.d.e0(v,d)
return new C.lv(e,v,B.d.cn(v,f),h,i,"tree",j)},
iv_(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.T(c0,x.cg),c2=new C.h60(c1),c3=x.s,c4=A.a([],c3)
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
if(h===D.wI)g="father"
else g=h===D.oB?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Y(t,new C.h62(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.H1(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Y(w,new C.h63(i,m),p),o)
B.d.e0(d,c6)
c2.$2(b4,new C.lv("True or false: "+h+" is the "+g+" of "+l+".",D.aCc,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lv("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",D.aCc,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.Gd(m)
h=a0.length
if(h!==0){a1=a0[c6.aw(h)]
h=B.a.i(a1.b)
f=A.C(new A.Y(t,new C.h64(l,a0,c5),v),s)
e=a1.c
if(e===D.wI)e="son"
else e=e===D.oB?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.H1(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.et([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mz(a5,a5.r,f.k("mz<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.H1(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.U(a0),a2=e.k("iz<1>"),a3=new A.iz(a0,1,b3,a2),a3.nb(a0,1,b3,e.c),a3=new A.bQ(a3,a3.gJ(0),a2.k("bQ<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.H1(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.arI(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Y(t,new C.h65(l),v),s)
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
j=A.C(new A.Y(t,new C.h66(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.wI
if(e)a2=b7
else a2=f===D.oB?b8:b9
if(e)f=b7
else f=f===D.oB?b8:b9
c2.$2("grand",C.H1(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aNl(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.aw(k)].b)
j=A.C(new A.Y(t,new C.h67(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.H1(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.u(j,D.cR0)
h=l+" was born in "+k
c2.$2("place",C.H1(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.u(j,D.d6A)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.H1(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.I)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.H1(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cD(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.iZ(b1,b3,b3)
c2.$2("year",C.H1(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bEC(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.N7(d),l=new A.e_()
l.cU(f)
w=C.iv_(m,l,g)
for(v=new A.ds(w,w.r,w.e);v.C();)J.hll(v.d,l)
v=A.a3(w).k("cu<1>")
u=A.C(new A.cu(w,v),v.k("M.E"))
B.d.e0(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aU(u,new C.fJ7(n,w))))break
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
t.push(C.hBN(o,l))}}else if(!g&&v>3){o=C.hBN(D.aAd[l.aw(14)],l)
t[t.length-1-l.aw(3)]=o}return t},
hBN(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.e0(w,e)
return new C.lv(d.a,w,B.d.cn(w,v),d.d,d.e,d.f,d.r)},
hH6(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.N7(a2),a1=new A.e_()
a1.cU(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a0.Gd(q).length>=2)u.push(q)}B.d.e0(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){n=u[r]
m=a0.Gd(n)
l=A.U(m)
k=new A.iz(m,0,5,l.k("iz<1>"))
k.nb(m,0,5,l.c)
j=k.dq(0)
if(new A.N(j,new C.fXu(),A.U(j).k("N<1,H>")).fL(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.I)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.I)(j),++i)g.push(C.aSH(a0,j[i]))
w.push(new C.auz("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.T(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
J.c5(e.c4(0,a0.amQ(q),new C.fXv()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cu<1>")
d=A.C(new A.cu(e,t),t.k("M.E"))
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
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r)s.push(C.aSH(a0,v[r]))
w.push(new C.auz("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aRc(d){return B.d.aoi(D.aCI,new C.fEY(d))},
ilb(d){return A.nA(new A.Y(D.aCI,new C.fLY(d),x.av))},
bT8(d){return C.hQN(d)},
hQN(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bT8=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bT8)
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
return A.i($async$bT8,v)},
BQ(d,e){return C.hQK(d,e)},
hQK(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
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
bT7(d,e,f){return C.hQL(d,e,f)},
hQL(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bT7=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bT7)
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
return A.i($async$bT7,v)},
BR(d,e,f,g){return C.hQM(d,e,f,g)},
hQM(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
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
bGU(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
h84(d,e,f,g){return new C.al5(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hOR(d){var w,v,u,t=d.h(0,"q")
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
return C.h84(w,v,B.o.D(u==null?20:u,5,60),t)},
hmu(d){var w,v,u,t,s,r,q=J.a8(d),p=q.h(d,"id")
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
if(u.b(r))v.push(C.hOR(A.a1(r,t,s)))}return new C.MS(p,w,v)},
hgx(d){var w,v=A.a([],x.c)
for(w=J.aT(d.z);w.C();)v.push(C.hmu(w.gP(w)))
return v},
aSH(d,e){var w=e.c===D.oB
if(d.amQ(e)===0&&d.Gd(e).length!==0)return w?0:1
if(d.Gd(e).length!==0||d.arI(e)!=null)return w?2:3
return w?4:5},
hIc(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.N7(a4),a3=new A.e_()
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
j=i.h(0,k)}h=a2.Gd(m)
g=a2.arI(m)
f=a2.aNl(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cD(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.wI)k="father"
else k=k===D.oB?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.wI)k="father"
else k=k===D.oB?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e0(l,a3)
B.d.b_(l,new C.h6q())
d=B.a.i(m.b)
a0=A.C(new A.Y(s,new C.h6r(d),o),n)
B.d.e0(a0,a3)
k=A.a([d],t)
i=A.U(a0)
a1=new A.iz(a0,0,3,i.k("iz<1>"))
a1.nb(a0,0,3,i.c)
B.d.u(k,a1)
B.d.e0(k,a3)
a1=C.aSH(a2,m)
i=new A.iz(l,0,4,p)
i.nb(l,0,4,r)
w.push(new C.baU(d,a1,i.dq(0),k))
if(w.length>=5)break}return w},
hzj(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.a_(d,"My ")?1:0},
hHi(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.N7(a4),a3=new A.e_()
a3.cU(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a2.Gd(q).length>=2)u.push(q)}B.d.e0(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){l=u[r]
k=a2.Gd(l)
j=A.U(k)
i=new A.iz(k,0,4,j.k("iz<1>"))
i.nb(k,0,4,j.c)
h=i.dq(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.I)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aU(h,new C.fY3(q))&&q.d!==j)i.push(q)}B.d.e0(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.iz(i,0,k,m)
j.nb(i,0,k,n)
f=j.dq(0)
j=B.a.i(l.b)
k=C.aSH(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.I)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.I)(h),++g)e.push(C.aSH(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.I)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.I)(f),++g)a0.push(C.aSH(a2,f[g]))
w.push(new C.aab(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lv:function lv(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bSk:function bSk(d){this.b=d
this.c=$},
bSl:function bSl(){},
bSm:function bSm(d){this.a=d},
fvH:function fvH(d){this.a=d},
h60:function h60(d){this.a=d},
h61:function h61(){},
h62:function h62(d){this.a=d},
h63:function h63(d,e){this.a=d
this.b=e},
h64:function h64(d,e,f){this.a=d
this.b=e
this.c=f},
h6_:function h6_(d,e){this.a=d
this.b=e},
h65:function h65(d){this.a=d},
h66:function h66(d){this.a=d},
h67:function h67(d,e,f){this.a=d
this.b=e
this.c=f},
h5Z:function h5Z(d,e){this.a=d
this.b=e},
fJ7:function fJ7(d,e){this.a=d
this.b=e},
auz:function auz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fXu:function fXu(){},
fXv:function fXv(){},
zA:function zA(d,e,f){this.a=d
this.b=e
this.c=f},
fEY:function fEY(d){this.a=d},
fLY:function fLY(d){this.a=d},
al5:function al5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bN8:function bN8(){},
MS:function MS(d,e,f){this.a=d
this.b=e
this.c=f},
baU:function baU(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
h6q:function h6q(){},
h6r:function h6r(d){this.a=d},
aab:function aab(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fY3:function fY3(d){this.a=d},
bic:function bic(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
ag7:function ag7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
ako:function ako(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
akp:function akp(d,e,f,g,h){var _=this
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
bLi:function bLi(d){this.a=d},
bLd:function bLd(){},
bLj:function bLj(){},
bLb:function bLb(){},
bLc:function bLc(){},
bLh:function bLh(d){this.a=d},
bLe:function bLe(d,e){this.a=d
this.b=e},
bLg:function bLg(d,e){this.a=d
this.b=e},
bLf:function bLf(d,e){this.a=d
this.b=e},
bLa:function bLa(d){this.a=d},
bdm:function bdm(d,e){this.b=d
this.a=e},
QO:function QO(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBS:function aBS(d,e,f){this.b=d
this.c=e
this.a=f},
aAm:function aAm(d,e,f){this.a=d
this.b=e
this.c=f},
ava:function ava(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
avb:function avb(d,e,f){var _=this
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
cqU:function cqU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cqV:function cqV(d){this.a=d},
cqT:function cqT(d){this.a=d},
cqW:function cqW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cqX:function cqX(){},
cqY:function cqY(d,e){this.a=d
this.b=e},
cqZ:function cqZ(){},
cr_:function cr_(d){this.a=d},
cqQ:function cqQ(d){this.a=d},
cqR:function cqR(d,e){this.a=d
this.b=e},
cqS:function cqS(d,e,f){this.a=d
this.b=e
this.c=f},
cqL:function cqL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cqN:function cqN(d,e){this.a=d
this.b=e},
cqO:function cqO(d,e){this.a=d
this.b=e},
cqM:function cqM(d,e){this.a=d
this.b=e},
cqK:function cqK(){},
cqP:function cqP(){},
bcQ:function bcQ(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cQV:function cQV(){},
az7:function az7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
az8:function az8(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cFS:function cFS(d){this.a=d},
cFR:function cFR(d){this.a=d},
cG_:function cG_(d,e){this.a=d
this.b=e},
cG0:function cG0(d,e){this.a=d
this.b=e},
cG1:function cG1(d){this.a=d},
cFZ:function cFZ(d){this.a=d},
cG2:function cG2(d){this.a=d},
cG3:function cG3(d,e){this.a=d
this.b=e},
cG4:function cG4(){},
cG5:function cG5(d){this.a=d},
cFU:function cFU(d){this.a=d},
cFV:function cFV(d,e){this.a=d
this.b=e},
cFT:function cFT(d,e){this.a=d
this.b=e},
cFW:function cFW(){},
cFX:function cFX(){},
cFY:function cFY(d,e){this.a=d
this.b=e},
aA7:function aA7(){},
aHn:function aHn(){},
heh(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.brQ((w-450*u)/2,(v-900*u)/2,u)},
afW:function afW(){},
f8f:function f8f(d){this.a=d},
aLb:function aLb(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fip:function fip(d){this.a=d},
amm:function amm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amn:function amn(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.qe$=f
_.M3$=g
_.anm$=h
_.bw$=i
_.a9$=j
_.c=_.a=null},
bT6:function bT6(d){this.a=d},
bT5:function bT5(){},
bT3:function bT3(d){this.a=d},
bT1:function bT1(){},
bT2:function bT2(d){this.a=d},
bSZ:function bSZ(d,e){this.a=d
this.b=e},
bT_:function bT_(){},
bT0:function bT0(d){this.a=d},
bT4:function bT4(d,e){this.a=d
this.b=e},
bSY:function bSY(d){this.a=d},
btx:function btx(d,e){this.b=d
this.a=e},
f8g:function f8g(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f8h:function f8h(d,e,f){this.a=d
this.b=e
this.c=f},
f8i:function f8i(d,e,f){this.a=d
this.b=e
this.c=f},
f8j:function f8j(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8k:function f8k(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f8l:function f8l(){},
amk:function amk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aml:function aml(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.qe$=f
_.M3$=g
_.anm$=h
_.bw$=i
_.a9$=j
_.c=_.a=null},
bSK:function bSK(){},
bSV:function bSV(d,e){this.a=d
this.b=e},
bSW:function bSW(d){this.a=d},
bSX:function bSX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSR:function bSR(){},
bSQ:function bSQ(d,e){this.a=d
this.b=e},
bSS:function bSS(d,e){this.a=d
this.b=e},
bST:function bST(){},
bSU:function bSU(d){this.a=d},
bSM:function bSM(d){this.a=d},
bSN:function bSN(d){this.a=d},
bSO:function bSO(d){this.a=d},
bSL:function bSL(d,e){this.a=d
this.b=e},
bSP:function bSP(d){this.a=d},
bk0:function bk0(d,e){this.b=d
this.a=e},
ds9:function ds9(){},
a2d:function a2d(d,e){this.a=d
this.b=e},
amg:function amg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amh:function amh(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.qe$=e
_.M3$=f
_.anm$=g
_.bw$=h
_.a9$=i
_.c=_.a=null},
bSw:function bSw(d){this.a=d},
bSv:function bSv(){},
bSu:function bSu(){},
bSo:function bSo(){},
bSp:function bSp(){},
bSt:function bSt(d,e,f){this.a=d
this.b=e
this.c=f},
bSs:function bSs(d){this.a=d},
bSq:function bSq(d,e){this.a=d
this.b=e},
bSr:function bSr(d){this.a=d},
bjr:function bjr(d,e){this.b=d
this.a=e},
aBV:function aBV(){},
bh_:function bh_(){},
aBX:function aBX(){},
bh0:function bh0(){},
aBY:function aBY(){},
bh1:function bh1(){},
ux(d,e,f,g,h){var w,v,u=null,t=A.l(18),s=A.a([],x.V)
s.push(new A.ab(0,B.G,f.j(0.4),B.i4,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.u(v,A.a([A.W(g,h,u,u,u,20),B.ae],w))
v.push(A.d(d,u,u,u,u,u,u,A.m(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.az(u,A.p(u,A.A(v,B.l,u,B.e,B.N,0,u,u),B.f,u,u,new A.o(f,u,u,t,s,u,B.n),u,u,u,u,B.OE,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hnh(d,e,f,g,h,i,j){return new C.ami(i,h,d,j,e,f,g,null)},
a6F:function a6F(d,e){this.c=d
this.a=e},
bjy:function bjy(d){this.a=d},
tG:function tG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bSn:function bSn(d){this.a=d},
Iu:function Iu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Wq:function Wq(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bml:function bml(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e2x:function e2x(d,e){this.a=d
this.b=e},
e2y:function e2y(d){this.a=d},
e2z:function e2z(d,e){this.a=d
this.b=e},
e2v:function e2v(d){this.a=d},
e2w:function e2w(d){this.a=d},
e2u:function e2u(d){this.a=d},
e2s:function e2s(d){this.a=d},
e2t:function e2t(d){this.a=d},
e2r:function e2r(d,e){this.a=d
this.b=e},
e2A:function e2A(d){this.a=d},
e2B:function e2B(d,e){this.a=d
this.b=e},
e2C:function e2C(d,e){this.a=d
this.b=e},
e2D:function e2D(d,e){this.a=d
this.b=e},
e2G:function e2G(d,e){this.a=d
this.b=e},
e2H:function e2H(d,e){this.a=d
this.b=e},
e2I:function e2I(d,e){this.a=d
this.b=e},
e2J:function e2J(d,e){this.a=d
this.b=e},
e2K:function e2K(d,e){this.a=d
this.b=e},
e2L:function e2L(d,e,f){this.a=d
this.b=e
this.c=f},
e2M:function e2M(d,e){this.a=d
this.b=e},
e2N:function e2N(d,e){this.a=d
this.b=e},
e2E:function e2E(d){this.a=d},
e2F:function e2F(d){this.a=d},
a06:function a06(d,e){this.a=d
this.b=e},
ami:function ami(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
amj:function amj(d){var _=this
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
bSI:function bSI(d){this.a=d},
bSJ:function bSJ(d){this.a=d},
bSH:function bSH(d){this.a=d},
bSy:function bSy(d){this.a=d},
bSz:function bSz(d){this.a=d},
bSx:function bSx(d){this.a=d},
bSE:function bSE(d,e,f){this.a=d
this.b=e
this.c=f},
bSF:function bSF(d){this.a=d},
bSB:function bSB(d,e){this.a=d
this.b=e},
bSC:function bSC(d,e,f){this.a=d
this.b=e
this.c=f},
bSG:function bSG(){},
bSD:function bSD(d,e){this.a=d
this.b=e},
bSA:function bSA(d){this.a=d},
U5:function U5(d,e){this.c=d
this.a=e},
amf:function amf(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bS8:function bS8(d){this.a=d},
bS9:function bS9(d){this.a=d},
bSj:function bSj(){},
bSi:function bSi(d,e,f){this.a=d
this.b=e
this.c=f},
bSd:function bSd(d,e){this.a=d
this.b=e},
bSc:function bSc(d,e){this.a=d
this.b=e},
bSe:function bSe(d){this.a=d},
bSf:function bSf(d,e){this.a=d
this.b=e},
bSg:function bSg(d,e){this.a=d
this.b=e},
bSb:function bSb(d,e){this.a=d
this.b=e},
bSh:function bSh(d,e,f){this.a=d
this.b=e
this.c=f},
bSa:function bSa(d,e){this.a=d
this.b=e},
ijH(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.aja(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bC(new A.V(Date.now(),0,!1))
s=new C.fIA(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("Y<1>"),q=q.k("cM<1,n>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.z7)m.push(l===D.wI?"male":"female")
l=u.w
k=A.ag(a3,!0,!1,!1,!1).cD(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.ag(a3,!0,!1,!1,!1).cD(k)
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
m.push("child of "+l+k)}a0=A.C(new A.cM(new A.Y(a4,new C.fIy(u,f),p),new C.fIz(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aM(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aM(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aA(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
ijI(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.aja(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.I)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fIF(v,e)
q=new C.fID(v)
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
p.n(0,s.a,d)}}d=p.$ti.k("b8<2>")
d=A.d0(new A.b8(p,d),d.k("M.E"))
n=A.C(d,A.a3(d).k("ci.E"))
B.d.ff(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.I)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eJ(l,new C.fIE(p,m));k.C();t=f){j=l.gP(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aM(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
i51(d,e,f,g){var w,v,u=C.ijJ(d,e)
if(u<=0||f.length<=u)return new A.afA(!1,D.DW,f)
if(g.q(0,e.a))return new A.afA(!1,D.DW,f)
w=A.U(f).c
v=A.cX(f,0,A.dD(u,"count",x.S),w).dq(0)
return new A.afA(!0,A.cX(f,u,null,w).dq(0),v)},
i52(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.aja(d3),d2=d1.length
if(d2===0)return D.hA0
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.I)(d1),++u){t=d1[u]
v.c4(0,t.a,new C.dhF(t))}s=new C.dhW(v)
d2=x.dy
r=A.T(w,d2)
q=new C.dhO(r)
for(p=new A.ds(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dhN(r)
l=A.T(w,x.do)
for(p=new A.ds(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c5(l.c4(0,k,new C.dhG()),o)}h=new C.dhM(s)
g=new C.dhL(l,r)
p=v.$ti.k("b8<2>")
o=p.k("Y<M.E>")
f=A.C(new A.Y(new A.b8(v,p),new C.dhH(h),o),o.k("M.E"))
e=f.length===0?new A.b8(v,p).gH(0):B.d.gH(f)
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
a9=new C.dhU(new C.dhQ(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.ds(v,v.r,v.e),j=a2.gaml(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.et([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.I(0,i))break}if(h.$1(b0)&&a2.am(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nA(J.dH(i==null?B.Z:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.dO)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.dhE(a2,new C.dhV(),b6,a3,b4,v,a4,a5,a6,b5)
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
d2=A.C(new A.cu(b4,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.GC(o,new A.r(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.KZ(c5.a,new A.r(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cu<1>")
d2=A.C(new A.cu(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bO(0,new C.dhI(c6,b4))
for(d2=new A.cc(a4,a4.$ti.k("cc<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aT(c7.b);j.C();){i=j.gP(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.r(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eJ(j,new C.dhJ(c8));i.C();)o.push(j.gP(0).b)
if(o.length===0)continue
B.d.b_(o,new C.dhK())
c6.push(new C.aL6(new A.r(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bh5(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hCv(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cD(d)
return w==null?null:w.b[1]},
hwv(d,e,f,g,h,i,j,k,l,m,n){return new C.a0j(k,f,j,e,l,n,m,d,g,h,i,null)},
aDW(d,e,f,g,h,i,j){return new C.bkR(i,d,e,f,j,h,g,null)},
arn:function arn(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFu:function aFu(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e4c:function e4c(d){this.a=d},
e4b:function e4b(d){this.a=d},
e4e:function e4e(d,e){this.a=d
this.b=e},
e4f:function e4f(d,e){this.a=d
this.b=e},
e4g:function e4g(d){this.a=d},
e4a:function e4a(d,e){this.a=d
this.b=e},
e4d:function e4d(d){this.a=d},
e4i:function e4i(d){this.a=d},
e4h:function e4h(d,e){this.a=d
this.b=e},
arh:function arh(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFr:function aFr(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e3D:function e3D(d){this.a=d},
e3B:function e3B(d){this.a=d},
e3C:function e3C(d){this.a=d},
e3E:function e3E(d,e){this.a=d
this.b=e},
e3y:function e3y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e3_:function e3_(d){this.a=d},
e30:function e30(d,e){this.a=d
this.b=e},
e3h:function e3h(d){this.a=d},
e3f:function e3f(d){this.a=d},
e3g:function e3g(d,e){this.a=d
this.b=e},
e3i:function e3i(d){this.a=d},
e3j:function e3j(d,e){this.a=d
this.b=e},
e3x:function e3x(d,e){this.a=d
this.b=e},
e3e:function e3e(d){this.a=d},
e3d:function e3d(d){this.a=d},
e3c:function e3c(d,e){this.a=d
this.b=e},
e3u:function e3u(){},
e3v:function e3v(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e3t:function e3t(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e3n:function e3n(d){this.a=d},
e3o:function e3o(d,e,f){this.a=d
this.b=e
this.c=f},
e3m:function e3m(d,e){this.a=d
this.b=e},
e3p:function e3p(d,e){this.a=d
this.b=e},
e3k:function e3k(d,e){this.a=d
this.b=e},
e3l:function e3l(){},
e3q:function e3q(d,e){this.a=d
this.b=e},
e3r:function e3r(d){this.a=d},
e3s:function e3s(d,e){this.a=d
this.b=e},
e3w:function e3w(d,e){this.a=d
this.b=e},
e2O:function e2O(d,e){this.a=d
this.b=e},
e2P:function e2P(d,e){this.a=d
this.b=e},
e3G:function e3G(d,e,f){this.a=d
this.b=e
this.c=f},
e3A:function e3A(d,e,f){this.a=d
this.b=e
this.c=f},
e3z:function e3z(d){this.a=d},
e2Q:function e2Q(d){this.a=d},
e2R:function e2R(d){this.a=d},
e2S:function e2S(){},
e2T:function e2T(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2X:function e2X(d,e){this.a=d
this.b=e},
e2W:function e2W(d,e){this.a=d
this.b=e},
e2V:function e2V(d){this.a=d},
e2Y:function e2Y(d,e){this.a=d
this.b=e},
e2U:function e2U(d){this.a=d},
e3F:function e3F(d){this.a=d},
e39:function e39(){},
e3a:function e3a(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e38:function e38(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e34:function e34(d,e,f){this.a=d
this.b=e
this.c=f},
e33:function e33(d,e,f){this.a=d
this.b=e
this.c=f},
e31:function e31(d,e){this.a=d
this.b=e},
e35:function e35(d){this.a=d},
e36:function e36(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e32:function e32(d,e){this.a=d
this.b=e},
e37:function e37(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e3b:function e3b(d,e){this.a=d
this.b=e},
e3N:function e3N(){},
e3O:function e3O(d,e){this.a=d
this.b=e},
e3P:function e3P(d){this.a=d},
e3Q:function e3Q(d,e){this.a=d
this.b=e},
e3J:function e3J(d){this.a=d},
e3H:function e3H(d,e){this.a=d
this.b=e},
e3K:function e3K(d,e){this.a=d
this.b=e},
e3L:function e3L(d,e){this.a=d
this.b=e},
e3M:function e3M(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e3R:function e3R(d){this.a=d},
e3I:function e3I(d){this.a=d},
e2Z:function e2Z(d){this.a=d},
bh3:function bh3(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dhC:function dhC(d){this.a=d},
dhB:function dhB(d,e){this.a=d
this.b=e},
dhD:function dhD(d){this.a=d},
dhA:function dhA(d,e){this.a=d
this.b=e},
fIA:function fIA(d,e){this.a=d
this.b=e},
fIB:function fIB(d){this.a=d},
fIC:function fIC(){},
fIy:function fIy(d,e){this.a=d
this.b=e},
fIz:function fIz(){},
fIF:function fIF(d,e){this.a=d
this.b=e},
fIG:function fIG(d){this.a=d},
fIH:function fIH(){},
fID:function fID(d){this.a=d},
fIE:function fIE(d,e){this.a=d
this.b=e},
KZ:function KZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GC:function GC(d,e){this.a=d
this.b=e},
bh5:function bh5(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dhF:function dhF(d){this.a=d},
dhW:function dhW(d){this.a=d},
dhO:function dhO(d){this.a=d},
dhP:function dhP(){},
dhN:function dhN(d){this.a=d},
dhG:function dhG(){},
dhM:function dhM(d){this.a=d},
dhL:function dhL(d,e){this.a=d
this.b=e},
dhH:function dhH(d){this.a=d},
dhQ:function dhQ(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dhR:function dhR(d){this.a=d},
dhS:function dhS(d){this.a=d},
dhT:function dhT(){},
dhU:function dhU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dhV:function dhV(){},
dhE:function dhE(d,e,f,g,h,i,j,k,l,m){var _=this
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
dhI:function dhI(d,e){this.a=d
this.b=e},
dhJ:function dhJ(d){this.a=d},
dhK:function dhK(){},
aL6:function aL6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bh6:function bh6(d,e){this.b=d
this.a=e},
dhX:function dhX(){},
dhY:function dhY(d){this.a=d},
dhZ:function dhZ(d){this.a=d},
di_:function di_(){},
bkS:function bkS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bg8:function bg8(d,e){this.b=d
this.a=e},
byU:function byU(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fo_:function fo_(d){this.a=d},
bod:function bod(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eZ1:function eZ1(d){this.a=d},
eZ0:function eZ0(d,e){this.a=d
this.b=e},
a0j:function a0j(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aDU:function aDU(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dxV:function dxV(d,e){this.a=d
this.b=e},
dxU:function dxU(d){this.a=d},
dxS:function dxS(d){this.a=d},
dxT:function dxT(d){this.a=d},
dy3:function dy3(d){this.a=d},
dy4:function dy4(d){this.a=d},
dy2:function dy2(d,e){this.a=d
this.b=e},
dy5:function dy5(){},
dy8:function dy8(d){this.a=d},
dy1:function dy1(d,e){this.a=d
this.b=e},
dy7:function dy7(){},
dy9:function dy9(d){this.a=d},
dy0:function dy0(d,e){this.a=d
this.b=e},
dya:function dya(d){this.a=d},
dy_:function dy_(d){this.a=d},
dyb:function dyb(d){this.a=d},
dxZ:function dxZ(d){this.a=d},
dyc:function dyc(d){this.a=d},
dxY:function dxY(d){this.a=d},
dyd:function dyd(d){this.a=d},
dxX:function dxX(d){this.a=d},
dye:function dye(d){this.a=d},
dxW:function dxW(d,e){this.a=d
this.b=e},
dy6:function dy6(d){this.a=d},
aet:function aet(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bkR:function bkR(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aes:function aes(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bkQ:function bkQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dyf:function dyf(d){this.a=d},
dyg:function dyg(d,e){this.a=d
this.b=e},
aDV:function aDV(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aK8:function aK8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeu:function aeu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dyp:function dyp(d){this.a=d},
Gy:function Gy(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hrk(d){var w=d.U,v=x.N
return w.jp(w,new C.cfz(),v,v)},
hXp(d){var w=d.bI
if(w>=0)return w
return 5},
hrm(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hrk(d).h(0,v)
if(w==null||w.length===0)return null
return A.bj(w)},
hrl(d,e){var w=C.hrm(d,e)
if(w!=null&&w.ca(new A.V(Date.now(),0,!1)))return!0
return!1},
hXq(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.hrk(d),w,w)
u=C.hrm(d,e)
t=u!=null&&u.ca(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bS(A.dw(30,0,0,0,0,0).a).aa().ag())
d.U=v},
b1A(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b1A=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lC(t,B.JK),$async$b1A)
case 3:if(l){u=!0
w=1
break}u=A.lh(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.JK,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1A,v)},
cfz:function cfz(){},
hXn(){var w,v=$.ov(),u=J.e5(8,x.N)
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
a8o(d){return C.hXo(d)},
hXo(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a8o=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$a8o)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hM("ngmy_family_tree_backup_codes_v1",A.J(["codes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cO,null),$async$a8o)
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
return A.i($async$a8o,v)},
cfy(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cfy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Js(),$async$cfy)
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
return A.i($async$cfy,v)},
Op(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Op=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cfy(d),$async$Op)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Js(),$async$Op)
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
return A.b(C.a8o(s),$async$Op)
case 9:case 8:u=t
w=1
break
case 5:n=C.hXn()
w=10
return A.b(C.Js(),$async$Op)
case 10:s=f
J.aK(s,n,A.J(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a8o(s),$async$Op)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Op,v)},
b1z(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b1z=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Js(),$async$b1z)
case 3:t=f
for(s=J.dp(t),r=s.gdP(t),r=r.dq(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.I)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a8o(t),$async$b1z)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b1z,v)},
a8p(d,e,f){var w=0,v=A.j(x.H),u
var $async$a8p=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.arm(d,e),$async$a8p)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Op(d),$async$a8p)
case 7:w=4
break
case 5:w=8
return A.b(C.b1z(d),$async$a8p)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a8p,v)},
arg(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$arg=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.arm(f,e),$async$arg)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c8(),$async$arg)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Js(),$async$arg)
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
return A.i($async$arg,v)},
b1y(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b1y=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c8(),$async$b1y)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Js(),$async$b1y)
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
return A.i($async$b1y,v)},
hXr(){var w,v=$.ov(),u=J.e5(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hg(u)},
arj(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$arj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$arj)
case 3:if(!g){u=null
w=1
break}t=C.hXr()
w=4
return A.b(A.Wr(),$async$arj)
case 4:s=g
r=B.dU.aN(B.W.av(d.f2(),null))
r=B.cV.gcu().aN(r)
q=e?999:2
J.aK(s,t,A.J(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a8q(s),$async$arj)
case 5:p=e?999:2
u=new A.a1t("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arj,v)},
ari(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$ari=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Wr(),$async$ari)
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
return A.b(C.b1y(J.k(l==null?"":l),j),$async$ari)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.ca.cI(0,B.cK.aN(t))
s=C.hrn(r)}catch(f){q=A.ac(f)
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
return A.b(A.a8q(p),$async$ari)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ari,v)},
hrn(d){var w,v,u,t,s=null
try{w=B.W.aP(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hXt(A.a1(w,x.N,x.z))
return u}catch(t){v=A.ac(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
hae(d){var w=0,v=A.j(x.m),u,t,s
var $async$hae=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a_(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.ari(t[1])
w=1
break}u=null
w=1
break}u=C.hrn(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hae,v)},
hXt(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.de(v,x.f)
u=A.cF(u,new C.cfB(),u.$ti.k("M.E"),x.k)
t=A.a3(u).k("Y<M.E>")
s=A.C(new A.Y(u,new C.cfC(),t),t.k("M.E"))}else s=A.a([],x._)
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
n=A.cF(n,new C.cfD(),n.$ti.k("M.E"),o)
k=A.a3(n).k("Y<M.E>")
j=A.C(new A.Y(n,new C.cfE(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.ark(h,w,s,r,q)},
arm(d,e){var w=0,v=A.j(x.y),u,t
var $async$arm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Og(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Bj(d),$async$arm)
case 3:u=t.cJ(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arm,v)},
cfK(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cfK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Bj(d),$async$cfK)
case 3:t=s.b7(f,new C.cfL(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.b_(t,new C.cfM())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cfK,v)},
Ws(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Ws=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.arm(e,d),$async$Ws)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Op(e),$async$Ws)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Bj(e),$async$Ws)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.cfI(g))
r=A.C(t,t.$ti.k("M.E"))}t=J.a8(r)
if(t.gau(r)){u=null
w=1
break}t=t.dN(r,new C.cfJ(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.LN(e,o),$async$Ws)
case 14:n=i
if(J.cJ(n))q.n(0,o,n)
case 12:r.length===t||(0,A.I)(r),++p
w=11
break
case 13:u=new C.ark(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ws,v)},
b1D(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b1D=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ws(d,e,f,g),$async$b1D)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.Hg(A.KV(q.f2(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1D,v)},
b1C(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b1C=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ws(d,e,f,g),$async$b1C)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.arj(r,f),$async$b1C)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aI8(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1C,v)},
Wt(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wt=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.hae(a0),$async$Wt)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a_(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.arg(g.a,d,e,f,s,r),$async$Wt)
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
return A.b(C.bEj(e,j),$async$Wt)
case 12:case 11:w=13
return A.b(C.aiU(e,j,s),$async$Wt)
case 13:h=n.h(0,i)
w=h!=null&&J.cJ(h)?14:15
break
case 14:w=16
return A.b(C.Bu(e,i,h),$async$Wt)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.I)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.brW(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Wt,v)},
ark:function ark(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cfG:function cfG(){},
cfH:function cfH(){},
cfF:function cfF(){},
cfB:function cfB(){},
cfC:function cfC(){},
cfD:function cfD(){},
cfE:function cfE(){},
cfL:function cfL(){},
cfM:function cfM(){},
cfI:function cfI(d){this.a=d},
cfJ:function cfJ(d){this.a=d},
hjh(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f4(null,x.H)
return A.hC(d,new C.arl(w,e,g,i,f,h,null),!0,null,x.H)},
dhz(d,e,f,g,h,i,j,k){return new C.bh2(i,e,k,j,g,f,h,d,null)},
arl:function arl(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFt:function aFt(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e4_:function e4_(d){this.a=d},
e40:function e40(d,e,f){this.a=d
this.b=e
this.c=f},
e44:function e44(d,e){this.a=d
this.b=e},
e45:function e45(d){this.a=d},
e3X:function e3X(d){this.a=d},
e3Y:function e3Y(d,e){this.a=d
this.b=e},
e3Z:function e3Z(d,e){this.a=d
this.b=e},
e43:function e43(d){this.a=d},
e42:function e42(d,e){this.a=d
this.b=e},
e41:function e41(){},
e47:function e47(d){this.a=d},
e48:function e48(d,e){this.a=d
this.b=e},
e46:function e46(d,e){this.a=d
this.b=e},
di0:function di0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bh4:function bh4(d,e,f){this.d=d
this.e=e
this.a=f},
adJ:function adJ(d,e,f){this.c=d
this.d=e
this.a=f},
bh2:function bh2(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bh7:function bh7(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0D:function a0D(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFs:function aFs(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e3S:function e3S(d,e){this.a=d
this.b=e},
e3T:function e3T(d){this.a=d},
e3U:function e3U(d){this.a=d},
e3V:function e3V(d){this.a=d},
e3W:function e3W(d){this.a=d},
a0E:function a0E(d){this.a=d},
bmm:function bmm(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e49:function e49(d,e){this.a=d
this.b=e},
b06(d,e){return new C.b05(d,e,null)},
b05:function b05(d,e,f){this.c=d
this.d=e
this.a=f},
im8(d){if(!(d!=null&&B.a.a_(d,"ngmy:thumb:")))return null
return B.a.b4(d,11)},
itx(d){return A.bU(B.L,null,new C.fZA(new C.uj(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
htl(d,e){return new C.aun(e,d,null)},
aSA(d,e,f,g,h,i,j){var w=C.im8(i)
if(w!=null)return A.bu(e,new A.a4(j,f,new C.a7r(w,!0,null),null),B.aq)
return N.aRX(e,B.c1,f,g,h,i,j)},
lY:function lY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7r:function a7r(d,e,f){this.c=d
this.d=e
this.a=f},
bm0:function bm0(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b8$=e
_.c=_.a=null},
dQ1:function dQ1(d){this.a=d},
dQ2:function dQ2(){},
dQ3:function dQ3(d,e){this.a=d
this.b=e},
bm_:function bm_(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fZA:function fZA(d){this.a=d},
fZz:function fZz(d,e){this.a=d
this.b=e},
fZy:function fZy(d,e){this.a=d
this.b=e},
fZx:function fZx(d,e){this.a=d
this.b=e},
aun:function aun(d,e,f){this.c=d
this.d=e
this.a=f},
cpb:function cpb(d,e){this.a=d
this.b=e},
aNy:function aNy(){},
iti(d){var w=null
return A.cg(w,w,!0,w,new C.fYY(),d,w,!0,!0,x.e2)},
iuw(d,e,f,g,h){var w=null
return A.cg(w,w,!0,w,new C.h5J(h,g,f,e),d,w,!0,!0,x.N)},
itk(d,e){var w=null
return A.cg(w,w,!0,w,new C.fZ1(e),d,w,!0,!0,x.dY)},
itj(d){var w=null
return A.cg(w,w,!0,w,new C.fZ0(),d,w,!0,!0,x.c5)},
aVv:function aVv(d,e){this.a=d
this.b=e},
aVu:function aVu(d){this.a=d},
aTy:function aTy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fYY:function fYY(){},
h5J:function h5J(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fZ1:function fZ1(d){this.a=d},
fZ0:function fZ0(){},
a_h:function a_h(d,e){this.c=d
this.a=e},
aAD:function aAD(){var _=this
_.d=$
_.c=_.a=_.e=null},
d9b:function d9b(d){this.a=d},
d9c:function d9c(d){this.a=d},
d9a:function d9a(d,e){this.a=d
this.b=e},
d9d:function d9d(d){this.a=d},
d9e:function d9e(d){this.a=d},
a_g:function a_g(d){this.a=d},
aAC:function aAC(){this.d=$
this.c=this.a=null},
d97:function d97(d){this.a=d},
d98:function d98(d){this.a=d},
d99:function d99(d){this.a=d},
ZO:function ZO(d){this.a=d},
azl:function azl(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cHx:function cHx(){},
cHD:function cHD(d){this.a=d},
cHE:function cHE(d){this.a=d},
cHF:function cHF(d){this.a=d},
cHC:function cHC(){},
cHG:function cHG(d){this.a=d},
cHH:function cHH(d){this.a=d},
cHB:function cHB(){},
cHI:function cHI(d,e){this.a=d
this.b=e},
cHA:function cHA(d,e){this.a=d
this.b=e},
cHy:function cHy(d,e){this.a=d
this.b=e},
cHJ:function cHJ(d){this.a=d},
cHz:function cHz(){},
cHK:function cHK(d){this.a=d},
a2p:function a2p(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
byM:function byM(){this.d=$
this.c=this.a=null},
fnv:function fnv(d,e){this.a=d
this.b=e},
fnw:function fnw(d){this.a=d},
fnx:function fnx(d,e){this.a=d
this.b=e},
acL:function acL(d,e){this.a=d
this.b=e},
Gm:function Gm(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
byK:function byK(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
fnt:function fnt(d,e){this.a=d
this.b=e},
aze:function aze(d,e){this.c=d
this.a=e},
byL:function byL(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
fnu:function fnu(d){this.a=d},
byJ:function byJ(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aPG:function aPG(){},
aPH:function aPH(){},
bGj(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.j.bi(u),s=B.o.D(B.j.V((u-t)*100),0,99),r=d<0?"-":"",q=A.ot(B.o.v(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fXh(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cS(v,v,v,v,v,v,v,v,v,A.m(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.m(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.m(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b0(B.o.v(s),2,"0")
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.m(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Zb(A.cS(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aSc(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aSc=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.i_().la(85,1280,B.eQ),$async$aSc)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fq(),$async$aSc)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.htk()
w=9
return A.b(C.cpa(q,r),$async$aSc)
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
return A.i($async$aSc,v)},
aSy(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aSy=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a_(g,"ngmy:ws-thumb:")
if(i){u=C.cp7(g)
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
return A.b(A.Hh(p,!0,null,o).dg(0,B.ha),$async$aSy)
case 9:n=a1
w=10
return A.b(n.le(),$async$aSy)
case 10:m=a1
w=11
return A.b(m.b.hj(B.he),$async$aSy)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eQ(B.dK.gaT(l))
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
return A.i($async$aSy,v)},
fXh:function fXh(){},
uj:function uj(d){this.a=d},
aum:function aum(d,e,f){this.c=d
this.d=e
this.a=f},
aGZ:function aGZ(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eWb:function eWb(d,e){this.a=d
this.b=e},
eW2:function eW2(d){this.a=d},
eW3:function eW3(d){this.a=d},
eW9:function eW9(d,e){this.a=d
this.b=e},
eW8:function eW8(d,e){this.a=d
this.b=e},
eW5:function eW5(d,e){this.a=d
this.b=e},
eW4:function eW4(d,e){this.a=d
this.b=e},
eW6:function eW6(d){this.a=d},
eW7:function eW7(d,e){this.a=d
this.b=e},
eWa:function eWa(d,e){this.a=d
this.b=e},
eVY:function eVY(d,e){this.a=d
this.b=e},
eW1:function eW1(d){this.a=d},
eW0:function eW0(d,e){this.a=d
this.b=e},
eW_:function eW_(d){this.a=d},
eWc:function eWc(d,e){this.a=d
this.b=e},
eWd:function eWd(d,e){this.a=d
this.b=e},
eVZ:function eVZ(d,e){this.a=d
this.b=e},
hGJ(d,e,f){var w="thumbnailPath",v=e.aj()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.J(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
fXi(d,e,f){var w=0,v=A.j(x.N),u
var $async$fXi=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.W.av(C.hGJ(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fXi,v)},
bGl(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bGl=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fXi(!0,d,e),$async$bGl)
case 4:w=3
return A.b(r.auk(g,d,e.a),$async$bGl)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dU.aN(B.W.av(C.hGJ(d,e,null),null))
u="NGMY_WS:"+B.kL.gcu().aN(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGl,v)},
hxU(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hiR(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d5(s,"NGMYWSSYNC2|"))return!0
if(J.d5(s,"NGMY_WS:"))return!0
if(J.eK(s,t))return!0
if(J.d5(s,"{"))try{w=B.W.aP(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
irl(d){var w,v,u,t=C.hxU(d)
if(t==null)return null
if(C.hiR(t))return t
w=B.a.cn(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b4(t,w))
if(C.hiR(v))return v}u=B.a.cn(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b4(t,u))
if(C.hiR(v))return v}return null},
hiQ(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d5(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d5(q,"NGMY_WS:")){v=B.ca.cI(0,B.cK.aN(J.nq(q,8)))
w=t.a(B.W.aP(0,v,r))}else w=t.a(B.W.aP(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.hcU(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bGk(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bGk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a_(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.auj(t[1]),$async$bGk)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hiQ(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hiQ(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGk,v)},
hiP(d){var w=B.o.v(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lF(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bFP(){var w=0,v=A.j(x.o),u,t
var $async$bFP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Ht(),$async$bFP)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hiQ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFP,v)},
hHW(d,e,f,g){return A.bU(B.L,null,new C.h5w(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
h5w:function h5w(d,e,f){this.a=d
this.b=e
this.c=f},
aeP:function aeP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eWf:function eWf(d,e){this.a=d
this.b=e},
eWg:function eWg(d,e){this.a=d
this.b=e},
eWh:function eWh(d,e){this.a=d
this.b=e},
eWi:function eWi(d,e){this.a=d
this.b=e},
eWe:function eWe(d){this.a=d},
aug:function aug(d,e,f){this.c=d
this.d=e
this.a=f},
bnJ:function bnJ(){var _=this
_.c=_.a=_.e=_.d=null},
eVT:function eVT(d,e){this.a=d
this.b=e},
eVU:function eVU(d){this.a=d},
eVV:function eVV(d){this.a=d},
aul:function aul(d){this.a=d},
aGY:function aGY(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eVX:function eVX(d){this.a=d},
eVW:function eVW(d){this.a=d},
i_I(d,e,f,g,h){return new C.P5(h,g,d,e,f,null)},
aLT:function aLT(d,e){this.a=d
this.b=e},
P5:function P5(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aH_:function aH_(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eWF:function eWF(){},
eWB:function eWB(d,e){this.a=d
this.b=e},
eWC:function eWC(d){this.a=d},
eWm:function eWm(d){this.a=d},
eWk:function eWk(d){this.a=d},
eWl:function eWl(d){this.a=d},
eWv:function eWv(d,e){this.a=d
this.b=e},
eWs:function eWs(d,e){this.a=d
this.b=e},
eWt:function eWt(d,e){this.a=d
this.b=e},
eWu:function eWu(d,e,f){this.a=d
this.b=e
this.c=f},
eWq:function eWq(d,e,f){this.a=d
this.b=e
this.c=f},
eWo:function eWo(d){this.a=d},
eWp:function eWp(d){this.a=d},
eWr:function eWr(d){this.a=d},
eWI:function eWI(d){this.a=d},
eWH:function eWH(d){this.a=d},
eWJ:function eWJ(d){this.a=d},
eWG:function eWG(d){this.a=d},
eWj:function eWj(d){this.a=d},
eWn:function eWn(d,e){this.a=d
this.b=e},
eWE:function eWE(d,e){this.a=d
this.b=e},
eWD:function eWD(d,e){this.a=d
this.b=e},
eWy:function eWy(d){this.a=d},
eWz:function eWz(d){this.a=d},
eWA:function eWA(d,e){this.a=d
this.b=e},
eWx:function eWx(d,e){this.a=d
this.b=e},
eWw:function eWw(d,e,f){this.a=d
this.b=e
this.c=f},
bAx:function bAx(){},
B8(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ahn(d,e,f){return C.ifI(d,e,f)},
ifI(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ahn=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aC("String",e,f),$async$ahn)
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
return A.i($async$ahn,v)},
ahm(d,e){return C.ifH(d,e)},
ifH(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$ahm=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$ahm)
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
return A.i($async$ahm,v)},
iex(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.TH(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bDh(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bDh=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b4Q(q),$async$bDh)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aSy(q,!1),$async$bDh)
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
return A.i($async$bDh,v)},
hO6(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.rr(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rr(p,J.k(u==null?"":u),1,o,q)},
hcU(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.de(s,x.f)
w=A.cF(w,new C.cGQ(),w.$ti.k("M.E"),x.Q)
v=A.a3(w).k("Y<M.E>")
r=A.C(new A.Y(w,new C.cGR(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bj(J.k(t==null?"":t))
return new C.lF(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
ijD(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.wI
case"female":case"f":return D.oB
default:return D.z7}},
hD5(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hni(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.ijD(v==null?j:J.k(v))
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
return new C.hZ(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
ijF(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.P1
case"viewer":return D.kY
default:return D.uO}},
ijG(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Hi(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aRj(d,e){return B.a.i(e.toLowerCase())===C.Hi(d,e)&&d.y!==D.kY},
uy(d,e){var w,v=d.y
if(v===D.kY)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Hi(d,e))return!0
if(v===D.P1)return!0
v=d.e
return new A.N(v,A.hiX(),A.U(v).k("N<1,n>")).q(0,w)},
ij_(d){return J.dH(d,new C.fHs()).gJ(0)},
h6g(d){var w=0,v=A.j(x.y),u,t
var $async$h6g=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Bj(d),$async$h6g)
case 3:u=t.rm(f,new C.h6h(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h6g,v)},
bEj(d,e){var w=0,v=A.j(x.H),u,t
var $async$bEj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Bj(d),$async$bEj)
case 3:t=g
if(J.rm(t,new C.fEX(e))){w=1
break}if(C.ij_(t)>=2)throw A.X(A.bc("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bEj,v)},
amp(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.de(h,x.f)
w=A.cF(w,new C.bT9(),w.$ti.k("M.E"),x.P)
v=A.a3(w).k("Y<M.E>")
g=A.C(new A.Y(w,new C.bTa(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b7(u,new C.bTb(),x.N)
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
n=C.ijF(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aT(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.ct)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gP(f)
if(l.b(i))m.push(A.a1(i,k,j))}return new C.kZ(w,v,s,!r,t,g,q,p,o,n,m)},
hDk(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.aA(v,0,8)},
DA(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$DA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SG(d),$async$DA)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aA(),$async$DA)
case 4:t=f
w=5
return A.b(t.a7r(0),$async$DA)
case 5:w=6
return A.b(C.fvh(t,l),$async$DA)
case 6:s=f
if(J.cJ(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a8(q)
o=A.aV(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hyv(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.p8(l,n),$async$DA)
case 11:u=n
w=1
break
case 10:case 8:m=A.aV(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hyv(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.p8(l,n),$async$DA)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$DA,v)},
fvh(d,e){return C.ibT(d,e)},
ibT(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fvh=A.e(function(b0,b1){if(b0===1){s.push(b1)
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
break}k=C.hcU(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aV(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.B8(a9)+"_"+n))
i=C.iex(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a_(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b4Q(h),$async$fvh)
case 17:g=b1
if(g!=null){i=i.TH(g)
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
case 8:J.SP(q,new C.fvi())
if(p&&J.ad(q)!==0)C.p8(a9,q)
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
return A.i($async$fvh,v)},
bEK(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bEK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SG(d),$async$bEK)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.DA(r),$async$bEK)
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
return A.i($async$bEK,v)},
hyv(d){var w,v,u,t
try{w=B.W.aP(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.de(w,x.f)
v=A.cF(v,new C.fqY(),v.$ti.k("M.E"),x.fA)
u=A.a3(v).k("Y<M.E>")
v=A.C(new A.Y(v,new C.fqZ(),u),u.k("M.E"))
B.d.b_(v,new C.fr_())
return v}catch(t){v=A.a([],x.D)
return v}},
p8(d,e){return C.it7(d,e)},
it7(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$p8=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.SG(b2),$async$p8)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aA(),$async$p8)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.B8(a8)
p=A.aV(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b7(x.j.a(B.W.aP(0,p,null)),new C.fYM(),a2).fL(0)
a2=J.b7(b3,new C.fYN(),a2).c0(0,new C.fYO())
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
return A.b(C.a9K(l),$async$p8)
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
return A.b(C.a9K(a5==null?null:J.k(a5)),$async$p8)
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
return A.b(C.ahm(r,"ngmy_worksheet_item_v3_"+C.B8(a8)+"_"+m),$async$p8)
case 29:w=30
return A.b(C.ahm(r,"ngmy_worksheet_thumb_v3_"+C.B8(a8)+"_"+m),$async$p8)
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
return A.b(C.bDh(h),$async$p8)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ahn(r,"ngmy_worksheet_thumb_v3_"+C.B8(a8)+"_"+a4,f),$async$p8)
case 40:g=i.TH(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ahm(r,"ngmy_worksheet_thumb_v3_"+C.B8(a8)+"_"+a4),$async$p8)
case 41:g=i.TH(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ahm(r,"ngmy_worksheet_thumb_v3_"+C.B8(a8)+"_"+a4),$async$p8)
case 42:case 34:a4=i.a
w=43
return A.b(C.ahn(r,"ngmy_worksheet_item_v3_"+C.B8(a8)+"_"+a4,B.W.av(g.aj(),null)),$async$p8)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.c5(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ahn(r,"ngmy_worksheets_index_v3_"+C.B8(a8),B.W.av(q,null)),$async$p8)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eO(b3,new C.fYP(q))
a4=a3.$ti.k("cM<1,a9<n,@>>")
a7=A.C(new A.cM(a3,new C.fYQ(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ahn(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.W.av(a0,null)),$async$p8)
case 45:w=46
return A.b(J.hNc(r),$async$p8)
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
return A.i($async$p8,v)},
Me(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Me=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.DA(d),$async$Me)
case 3:t=g
s=J.cD(t)
r=s.bk(t,new C.h6f(e))
if(r===-1)s.c9(t,0,e)
else s.n(t,r,e)
u=C.p8(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Me,v)},
bEw(d,e){var w=0,v=A.j(x.H),u
var $async$bEw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.DA(d),$async$bEw)
case 2:u=g
J.nT(u,new C.fHW(e))
w=3
return A.b(C.p8(d,u),$async$bEw)
case 3:return A.h(null,v)}})
return A.i($async$bEw,v)},
Hk(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Hk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$Hk)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aV(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.W.aP(0,i,null)
if(x.j.b(t)){j=J.de(t,x.f)
j=A.cF(j,new C.fL7(),j.$ti.k("M.E"),x.k)
s=A.a3(j).k("Y<M.E>")
r=A.C(new A.Y(j,new C.fL8(),s),s.k("M.E"))
B.d.b_(r,new C.fL9())
k=r}}catch(h){}w=4
return A.b(C.frI(d),$async$Hk)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.icg(k,p,d)
j=A.U(o)
s=j.k("N<1,a9<n,@>>")
s=A.C(new A.N(o,new C.fLa(),s),s.k("ak.E"))
n=B.W.av(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.RP(d,o),$async$Hk)
case 7:case 6:j=j.k("Y<1>")
m=A.C(new A.Y(o,new C.fLb(d),j),j.k("M.E"))
if(m.length!==0)C.aR3(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Hk,v)},
fYy(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fYy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.RP(d,e),$async$fYy)
case 3:t=J.dH(e,new C.fYz(d))
s=A.C(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aR3(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fYy,v)},
a43(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a43=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aA(),$async$a43)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aV(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.W.aP(0,l,null)
if(x.j.b(u)){m=J.de(u,x.f)
m=A.cF(m,new C.h6a(),m.$ti.k("M.E"),x.k)
t=A.a3(m).k("Y<M.E>")
s=A.C(new A.Y(m,new C.h6b(),t),t.k("M.E"))
o=s}}catch(k){}q=J.oz(o,new C.h6c(e))
if(B.a.i(e.x).length===0&&C.uy(e,d)){m=B.a.i(d.toLowerCase())
p=e.aGq(e.y===D.kY?D.kY:D.uO,m)}else p=e
if(q===-1)J.n3(o,0,p)
else J.aK(o,q,p)
w=3
return A.b(C.RP(d,o),$async$a43)
case 3:w=C.uy(p,d)?4:5
break
case 4:w=6
return A.b(C.aR2(C.Hi(p,d),p),$async$a43)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a43,v)},
aRf(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aRf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Hk(d),$async$aRf)
case 2:u=g
t=J.cD(u)
s=A.nA(t.eO(u,new C.fHD(e)))
t.bq(u,new C.fHE(e))
w=3
return A.b(C.RP(d,u),$async$aRf)
case 3:w=s!=null&&C.aRj(s,d)?4:5
break
case 4:w=6
return A.b(C.fr1(e),$async$aRf)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aRf,v)},
aja(d){var w=d.f,v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.h6l(),v),v.k("M.E"))
return w},
hgl(d,e){var w,v=d.f,u=A.nA(new A.Y(v,new C.fH7(e),A.U(v).k("Y<1>")))
v=C.aja(d)
w=A.U(v).k("Y<1>")
v=A.C(new A.Y(v,new C.fH8(e,u),w),w.k("M.E"))
B.d.b_(v,new C.fH9())
return v},
ijJ(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hI_(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bk(C.hgl(d,u),new C.h5K(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
ilc(d,e){var w
if(e==null||e.length===0)return 1
w=C.hgl(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fLZ(),A.U(w).k("N<1,H>")).f0(0,B.y5)+1},
it0(d){var w,v=C.aja(d)
if(v.length===0)return null
w=new A.Y(v,new C.fYs(),A.U(v).k("Y<1>"))
if(!w.gau(0))return w.gH(0)
return B.d.gH(v)},
ijE(d){return A.J(["id",d.a,"name",d.b,"gender",C.hD5(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
il7(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
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
n=n!==D.z7?n:q.c
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
d=q.aGl(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.I)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cQv(a1,w,a3.d,a2.y,s,a0,v)},
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
p=A.cF(p,new C.fL4(),p.$ti.k("M.E"),x.k)
s=A.a3(p).k("Y<M.E>")
p=A.C(new A.Y(p,new C.fL5(),s),s.k("M.E"))
B.d.b_(p,new C.fL6())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Bj,v)},
aiU(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aiU=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.uO:D.kY
a7=C.Hi(b2,b3)
w=2
return A.b(C.Bj(b1),$async$aiU)
case 2:a8=b5
a9=J.cD(a8)
b0=a9.bk(a8,new C.fYn(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bEj(b1,b2),$async$aiU)
case 5:case 4:if(b0===-1){u=b2.aGq(a6,a7)
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
i=i!==D.z7?i:l.c
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
s.n(0,m,l.aGl(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("b8<2>")
s=A.C(new A.b8(s,k),k.k("M.E"))
k=a5?D.uO:D.kY
u=t.cQx(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.RP(b1,a8),$async$aiU)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aR2(B.a.i(b3.toLowerCase()),u),$async$aiU)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aiU,v)},
hyU(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("N<1,a9<n,@>>"),k=A.C(new A.N(m,C.hH3(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.J(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.J(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hyV(d,e){var w=new A.V(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("N<1,a9<n,@>>")
u=A.C(new A.N(u,C.hH3(),t),t.k("ak.E"))
return A.J(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
i9P(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a8(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.amp(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hiX(),A.U(j).k("N<1,n>")).c0(0,new C.frv())
t=A.C(j,j.$ti.k("M.E"))
if(u===v)s=D.uO
else s=B.d.q(t,u)?D.P1:D.kY
return w.aGq(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.amp(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.de(q,h)
h=A.cF(h,new C.frw(),h.$ti.k("M.E"),x.P)
p=A.a3(h).k("Y<M.E>")
o=A.C(new A.Y(h,new C.frx(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b7(n,new C.fry(),x.N).c0(0,new C.frz())
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
frI(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$frI=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.frM()
h=x.N
g=x.z
w=7
return A.b(A.iH(A.a([A.lJ("family_trees","*",null,A.J(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bN),r.$2(A.lJ("family_trees","*",A.J(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bN),"collaborator"),r.$2(A.lJ("family_trees","*",null,A.J(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bN),"public")],x.cl),x.fO),$async$frI)
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
h=A.a3(l).k("b8<2>")
h=A.cF(new A.b8(l,h),new C.frJ(a0),h.k("M.E"),x.k)
l=A.a3(h).k("Y<M.E>")
l=A.C(new A.Y(h,new C.frK(),l),l.k("M.E"))
B.d.b_(l,new C.frL())
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
return A.i($async$frI,v)},
icg(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a8(e)
if(j.gau(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dN(e,new C.fw_(),v).c0(0,new C.fw0())
t=A.d0(u,u.$ti.k("M.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.I)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Hi(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kY){m=q.e
m=!new A.N(m,A.hiX(),A.U(m).k("N<1,n>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gP(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.il7(l,v)
o=C.Hi(k,w)
p=v.d
s.n(0,u,o===w?k.bfI(p,D.uO):k.bfI(p,v.y))}j=s.$ti.k("b8<2>")
j=A.C(new A.b8(s,j),j.k("M.E"))
B.d.b_(j,new C.fw1())
return j},
RP(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$RP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aA(),$async$RP)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b7(e,new C.fyY(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aC("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.W.av(s,null)),$async$RP)
case 3:return A.h(null,v)}})
return A.i($async$RP,v)},
aR2(d,e){return C.iht(d,e)},
iht(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aR2=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.mg("family_trees",A.a([C.hyU(e,d)],p),null,B.cO),$async$aR2)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.mg("family_trees",A.a([C.hyV(e,d)],p),null,B.cO),$async$aR2)
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
return A.i($async$aR2,v)},
aR3(d,e){return C.ihu(d,e)},
ihu(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aR3=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("N<1,a9<n,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fEc(d),n),m)
r=l
w=7
return A.b(A.mg("family_trees",r,null,B.cO),$async$aR3)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fEd(d),n),m)
p=k
w=8
return A.b(A.mg("family_trees",p,null,B.cO),$async$aR3)
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
return A.i($async$aR3,v)},
fr1(d){return C.i96(d)},
i96(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fr1=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Sf("family_trees",A.J(["id",d],x.N,x.z),null,B.cO),$async$fr1)
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
return A.i($async$fr1,v)},
rr:function rr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lF:function lF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cGT:function cGT(){},
cGS:function cGS(){},
cGQ:function cGQ(){},
cGR:function cGR(){},
It:function It(d,e){this.a=d
this.b=e},
hZ:function hZ(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
amo:function amo(d,e){this.a=d
this.b=e},
fHs:function fHs(){},
h6h:function h6h(d){this.a=d},
fEX:function fEX(d){this.a=d},
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
bTd:function bTd(){},
bTc:function bTc(){},
bT9:function bT9(){},
bTa:function bTa(){},
bTb:function bTb(){},
fvi:function fvi(){},
fqY:function fqY(){},
fqZ:function fqZ(){},
fr_:function fr_(){},
fYM:function fYM(){},
fYN:function fYN(){},
fYO:function fYO(){},
fYP:function fYP(d){this.a=d},
fYQ:function fYQ(){},
h6f:function h6f(d){this.a=d},
fHW:function fHW(d){this.a=d},
fL7:function fL7(){},
fL8:function fL8(){},
fL9:function fL9(){},
fLa:function fLa(){},
fLb:function fLb(d){this.a=d},
fYz:function fYz(d){this.a=d},
h6a:function h6a(){},
h6b:function h6b(){},
h6c:function h6c(d){this.a=d},
fHD:function fHD(d){this.a=d},
fHE:function fHE(d){this.a=d},
h6l:function h6l(){},
fH7:function fH7(d){this.a=d},
fH8:function fH8(d,e){this.a=d
this.b=e},
fH9:function fH9(){},
h5K:function h5K(d){this.a=d},
fLZ:function fLZ(){},
fYs:function fYs(){},
fL4:function fL4(){},
fL5:function fL5(){},
fL6:function fL6(){},
fYn:function fYn(d){this.a=d},
frv:function frv(){},
frw:function frw(){},
frx:function frx(){},
fry:function fry(){},
frz:function frz(){},
frM:function frM(){},
frN:function frN(d){this.a=d},
frJ:function frJ(d){this.a=d},
frK:function frK(){},
frL:function frL(){},
fw_:function fw_(){},
fw0:function fw0(){},
fw1:function fw1(){},
fyY:function fyY(){},
fEc:function fEc(d){this.a=d},
fEd:function fEd(d){this.a=d},
cGU:function cGU(d,e){this.a=d
this.b=e},
cGV:function cGV(d,e){this.a=d
this.b=e},
aJ4:function aJ4(d,e,f){this.a=d
this.b=e
this.c=f},
bb6:function bb6(){this.b=this.a=0},
bb5:function bb5(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
byN:function byN(){},
xl(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gci()+"/"+w.gcz()+"/"+w.gcl()
if(!e)return v
return v+" "+B.a.b0(B.o.v(w.gny()),2,"0")+":"+B.a.b0(B.o.v(w.gGR()),2,"0")},
iiw(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a5.c
J.br(a4.save())
a4.translate(a6.a,a6.b-b0)
w=A.bW(new A.r(0,b0+a7*0.005),a7*0.06,a7*0.45)
v=B.w.j(0.22)
$.S()
u=A.L()
u.r=v.gp(0)
a5.c_(w,u)
for(w=a7*0.05,v=-a7,u=v*0.24,t=a7*0.1,s=u+a7*0.2,r=a7*0.04,q=a7*0.065,p=v*0.05,o=a7*0.14,n=p+w,m=a7*0.025,l=0;l<2;++l){k=F.fO[l]*a7*0.075
j=k-w
j=A.bx(new A.a5(j,u,j+t,s),new A.aP(r,r))
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.r=B.dg.gp(0)
a5.aq(j,i)
k-=q
k=A.bx(new A.a5(k,p,k+o,n),new A.aP(m,m))
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
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
a5.ah(g,g.a5(0,new A.r(s,a7*0.17)),P.ahl(F.rV,t))
s=g.a5(0,new A.r(s,a7*0.18))
q=A.L()
q.r=F.rV.gp(0)
a5.O(s,r,q)
e=-2.5+b3*0.5
d=f.a5(0,new A.r(Math.sin(e)*a7*0.2,Math.cos(e)*a7*0.2))
a5.ah(f,d,P.ahl(F.rV,t))
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
if(b1===0){w=A.bT(a0,a1)
u=A.L()
u.r=F.m7.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)}else if(b1===2){w=A.bT(a0,a1)
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
a5.O(new A.r(0+n*0.62,w),u,m)}a5.cQ(A.bW(a0.a5(0,new A.r(0,a1*0.5)).aJ(0,new A.r(0,a1*0.1)),a1*0.4,a1*0.65),0.2,2.741592653589793,!1,P.ahl(B.bp,1.8))
a4.restore()},
i_F(){var w,v=$.ov(),u=J.e5(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"WS"+B.d.hg(u)},
auh(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$auh=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$auh)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f5("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bN),$async$auh)
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
return A.i($async$auh,v)},
aui(d){return C.i_G(d)},
i_G(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$aui=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$aui)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hM("ngmy_worksheet_project_qr_stashes_v1",A.J(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cO,null),$async$aui)
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
return A.i($async$aui,v)},
auk(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$auk=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$auk)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.i_F()
w=4
return A.b(C.auh(),$async$auk)
case 4:r=h
q=B.a.i(e)
p=B.dU.aN(t)
J.aK(r,s,A.J(["ownerEmail",q,"projectId",f,"payload",B.cV.gcu().aN(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.aui(r),$async$auk)
case 5:u=new A.a1t("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$auk,v)},
auj(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$auj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c8(),$async$auj)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.auh(),$async$auj)
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
try{s=B.ca.cI(0,B.cK.aN(t))}catch(h){r=A.ac(h)
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
return A.b(C.aui(q),$async$auj)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$auj,v)},
htk(){var w=new A.V(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cR.aw(999999)},
i_H(d){var w,v,u,t,s,r,q
try{w=A.ahM(d)
if(w==null)return d
v=w
if(J.Mk(v)>960||J.Mj(v)>960){s=v
r=J.Mk(v)>=J.Mj(v)?960:null
v=A.ahJ(s,J.Mj(v)>J.Mk(v)?960:null,B.Qr,r)}s=v
u=A.anK(82).U3(s,B.zQ)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cf(u))
return s}catch(q){t=A.ac(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
cpa(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cpa=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.i_H(e)
$.cp6.n(0,s,t)
u=C.bGn(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cpa,v)},
b4Q(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b4Q=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d5(l,"data:image")){u=null
w=1
break}t=4
r=J.eK(l,",")?B.d.gal(J.lO(l,",")):l
q=B.cK.aN(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.htk()
w=7
return A.b(C.cpa(p,q),$async$b4Q)
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
return A.i($async$b4Q,v)},
cp7(d){var w=0,v=A.j(x.T),u,t,s
var $async$cp7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a_(s,"data:image")){u=s
w=1
break}w=3
return A.b(N.cp9(s),$async$cp7)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cV.gcu().aN(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cp7,v)},
a9K(d){var w=0,v=A.j(x.H),u,t
var $async$a9K=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=N.hGK(d)
if(t==null){w=1
break}$.cp6.W(0,t)
w=3
return A.b(C.bGm(t),$async$a9K)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a9K,v)},
bGn(d,e){return C.iro(d,e)},
iro(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bGn=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aPU
w=7
return A.b(n==null?$.aPU=N.hfd():n,$async$bGn)
case 7:r=g
q=new Uint8Array(A.cf(e))
p=J.mk(r,"thumbs","readwrite")
B.iE.mh(J.mj(p,"thumbs"),q,l)
w=8
return A.b(J.oy(p),$async$bGn)
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
return A.i($async$bGn,v)},
bGm(d){return C.irm(d)},
irm(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bGm=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aPU
w=7
return A.b(o==null?$.aPU=N.hfd():o,$async$bGm)
case 7:r=f
q=J.mk(r,"thumbs","readwrite")
B.iE.Gq(J.mj(q,"thumbs"),m)
w=8
return A.b(J.oy(q),$async$bGm)
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
return A.i($async$bGm,v)}},D,Au,Av,Z,Aw
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
C.apX.prototype={}
C.b07.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bk1(),f=h.x!=null&&h.zM(i).length===0
if(h.x!=null)w=f?B.b2:B.bD
else w=h.gUJ()?B.bD:B.e0
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.l(22)
t=A.K(D.bqu,B.r,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.fe4,B.f,i,i,new A.o(B.b2.j(0.12),i,i,A.l(999),i,i,B.n),i,i,i,i,B.hk,i,i,i),B.T,D.fKb,B.aw,A.d(C.xl(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fFO,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,D.b8u,i,i,i,i,B.OA,i,i,i)
q=A.l(16)
p=A.K(B.bl,B.r,1)
o=A.K(B.b2.j(0.28),B.r,1)
n=A.hht(h.d)
o=A.p(B.z,C.b06(A.fOj(h.e,n),30),B.f,i,i,new A.o(B.ma,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fAI,B.K,i,i)
m=A.l(14)
l=A.K(B.bl,B.r,1)
q=A.p(i,A.x(A.a([o,B.P,n,B.bF,D.fKu,B.af,A.p(i,A.x(A.a([D.h_I,B.bF,A.d(A.Bl(h.c),i,i,i,i,i,i,D.fvk,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fg,i,i,1/0)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.aS,i,p,q,i,i,B.n),i,i,i,i,O.amJ,i,i,i)
p=A.l(16)
m=A.K(B.bl,B.r,1)
l=j.aTw("Original due",C.xl(h.r,!1))
n=j.aTw("Current due",C.xl(h.f,!1))
o=w.j(0.1)
k=A.l(12)
p=A.a([q,B.T,A.p(i,A.x(A.a([l,B.P,n,B.T,A.p(i,A.d(h.gaNw(),i,i,i,i,i,i,A.m(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.Cy,i,i,1/0),B.T,j.clj(),B.P,j.c7T(g,f)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bj,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.l(14)
n=A.K(B.bl,B.r,1)
B.d.u(p,A.a([B.T,A.p(i,A.x(A.a([D.fLs,B.aw,A.d(q,i,i,i,i,i,i,D.fzV,i,i,i)],s),B.E,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.aS,i,n,o,i,i,B.n),i,i,i,i,B.bj,i,i,1/0)],s))}if(h.gaI6()){q=A.l(14)
o=A.K(B.cA,B.r,1.6)
B.d.u(p,A.a([B.T,A.p(i,A.x(A.a([D.h11,B.P,A.bu(A.l(12),A.ea(new A.a4(1/0,88,A.b4(i,i,i,new A.Xe(h.ax,B.a_,D.fiR,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.E,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.CA,i,i,i)],s))}p.push(B.aB)
p.push(D.fTR)
return A.p(i,A.x(A.a([r,new A.D(B.a16,A.x(p,B.al,i,B.e,B.h,0,B.p),i)],s),B.al,i,B.e,B.N,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aTw(d,e){var w=null
return A.A(A.a([A.E(A.d(d,w,w,w,w,w,w,D.acc,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fwn,w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
clj(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.aaG(B.e0,u,"Not paid yet")
w=t.zM(null).length
v=w===0?B.b2:B.bD
return this.aaG(v,u,C.xl(t.x,!0))},
c7T(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.aaG(B.b2,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.aaG(B.b2,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.acc,u,u,u)
v=A.U(d).k("N<1,h6>")
v=A.C(new A.N(d,new C.c8v(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bZ(B.bH,v,B.br,u,6,6)],x.p),B.E,u,B.e,B.h,0,B.p)},
aaG(d,e,f){var w=null
return A.A(A.a([A.E(A.d(e,w,w,w,w,w,w,D.acc,w,w,w),1),new A.di(1,B.cm,A.d(f,w,w,w,w,w,w,A.m(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.e2,w,w),w)],x.p),B.E,w,B.e,B.h,0,w,w)}}
C.bdk.prototype={
a4(d,e){new A.Xe(this.b,B.a_,e,!0,3.5,null).a4(d,e)},
aF(d){return d.b!==this.b}}
C.aq9.prototype={
S(){return new C.aEV(A.a([],x.bp))},
ge3(){return this.c}}
C.aEV.prototype={
Y(){this.a3()
this.Jo()},
Jo(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Jo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3i(t.a.c),$async$Jo)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dQU(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Jo,v)},
aVu(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aS,s=A.m(v,v,u?B.bu:B.bh,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.l(10)
u=(this.a.d.a?B.bu:B.bh).j(0.22)
w=A.l(10)
return A.bz(v,new A.b6(4,r,new A.ay(u,1,B.r,-1)),v,B.bj,v,v,v,v,!0,new A.b6(4,w,new A.ay((this.a.d.a?B.bu:B.bh).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.l(10),D.b68),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aVt(d){return this.aVu(d,null)},
Qe(d){return this.coY(d)},
coY(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qe=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.Ie:B.eQ
w=7
return A.b(new A.i_().CQ(72,900,900,n),$async$Qe)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fq(),$async$Qe)
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
return A.i($async$Qe,v)},
b3H(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aS,o=A.l(10),n=A.K((q?B.bu:B.bh).j(0.18),B.r,1)
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
return A.p(r,A.A(q,B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jK,D.bDy,r,r,r)},
DK(d){return this.bEe(d)},
bEd(){return this.DK(null)},
bEe(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DK=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
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
i=a3?null:A.hht(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.xf?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hN(B.w.j(0.55),!0,"Dismiss",a4,new C.dQD(),new C.dQE(a2,t,a5,r,new C.dQF(a2,t),o,n,j),B.eH,!0,x.y),$async$DK)
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
break}if(f.length===0||e<=0){t.c.L(x.q).f.T(D.fpr)
w=1
break}a0=a2.d
if(a0==null){t.c.L(x.q).f.T(D.fo4)
w=1
break}a1=A.fOj(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.xf?"male":"female"
w=7
return A.b(A.aj9(a3,A.hpY(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$DK)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.xf?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.u(a3,j)
a3=a2.a
a3=A.c_(a3.gcl(),a3.gci(),a3.gcz(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c_(a4.gcl(),a4.gci(),a4.gcz(),0,0,0,0,0)))a5.cSS(a2.a)
w=8
return A.b(A.aj9(t.a.c,a5),$async$DK)
case 8:case 5:w=9
return A.b(t.Jo(),$async$DK)
case 9:case 1:return A.h(u,v)}})
return A.i($async$DK,v)},
aW9(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cU.j(0.14)
else w=this.a.d.a?B.a_:B.aS
v=A.l(12)
u=A.l(12)
t=A.l(12)
if(g)s=B.cU
else s=(this.a.d.a?B.bu:B.bh).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.b06(d,18)
if(g)q=B.cU
else q=this.a.d.a?B.aS:B.av
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,A.p(p,A.A(A.a([r,B.bn,A.d(e,p,p,p,p,p,p,A.m(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.b8,B.h,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bU,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
T0(d){return this.cGR(d)},
cGR(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$T0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hN(B.w.j(0.55),!0,"Dismiss",s,new C.dQX(),new C.dQY(t,d),B.h9,!0,x.y),$async$T0)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.aj9(t.a.c,d),$async$T0)
case 7:w=8
return A.b(t.Jo(),$async$T0)
case 8:case 1:return A.h(u,v)}})
return A.i($async$T0,v)},
Qd(d,e){return this.bP9(0,e)},
bP9(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lr(s,"Cancel","Delete",e.b+" \xb7 "+A.Bl(e.c)+" will be removed from this device.","Delete this debt?"),$async$Qd)
case 3:if(!g){w=1
break}w=4
return A.b(C.fHK(t.a.c,e.a),$async$Qd)
case 4:w=5
return A.b(t.Jo(),$async$Qd)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qd,v)},
agy(d){return this.ciK(d)},
ciK(d){var w=0,v=A.j(x.H),u=this,t
var $async$agy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bU(B.L,null,new C.dQR(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$agy)
case 2:return A.h(null,v)}})
return A.i($async$agy,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.ex1
w=J.dH(m.d,new C.dQZ())
v=A.C(w,w.$ti.k("M.E"))
w=J.dH(m.d,new C.dR_())
u=A.C(w,w.$ti.k("M.E"))
t=B.d.cE(v,0,new C.dR0())
w=A.l(18)
s=m.a.d.a
r=s?D.cDM:D.aDI
q=A.K(s?B.cU.j(0.35):B.cU.j(0.18),B.r,1)
s=A.p(l,D.c4t,B.f,l,l,new A.o(B.cU.j(m.a.d.a?0.28:0.14),l,l,A.l(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.at,A.E(A.d("Cashier",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.aS:B.av,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aG(!1,B.a3,!0,A.l(12),A.aM(!1,A.l(12),!0,D.ewn,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dR1(m),l,l,l,l,l,l,l),B.f,B.cU,0,l,l,l,l,l,B.ai)],p),B.l,l,B.e,B.h,0,l,l)
o=A.E(m.cCU("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Bl(t)
r=A.a([A.p(l,A.x(A.a([s,B.af,A.A(A.a([o,B.ae,A.E(m.b9S(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.h,0,l,l)],p),B.E,l,B.e,B.h,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a7(B.ay,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.amG,l,l,l),B.aB],p)
if(J.ct(m.d)){w=m.a.d.a
s=w?B.ef:B.c
q=A.l(18)
o=A.K((w?B.bu:B.bh).j(0.12),B.r,1)
n=A.p(l,D.c_3,B.f,l,l,new A.o(B.cU.j(0.12),l,l,A.l(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.aS:B.av,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.p(l,A.x(A.a([n,B.af,w,B.aw,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.bu:B.bh,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.h,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bGd,l,l,1/0))}else{w=m.gcoe()
s=A.C(new A.N(v,w,A.U(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bHU,A.d("Paid",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.bu:B.bh,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.u(q,new A.N(u,w,A.U(u).k("N<1,v>")))
B.d.u(s,q)}B.d.u(r,s)}return A.x(r,B.al,l,B.e,B.h,0,B.p)},
b9S(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.l(14),r=A.K((v.a.d.a?B.bu:B.bh).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.m(u,u,v.a.d.a?B.bu:B.bh,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cU
else w=v.a.d.a?B.aS:B.av
return A.p(u,A.x(A.a([q,B.bF,A.d(f,u,1,B.a2,u,u,u,A.m(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.h,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ez,u,u,u)},
cCU(d,e){return this.b9S(!1,d,e)},
cof(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zM(j).length,h=d.bjh()
if(d.x!=null){w=d.zM(j).length
v=w===0?B.cU:B.bD}else if(d.gUJ())v=B.bD
else{if(h)w=B.cU
else w=k.a.d.a?B.bu:B.bh
v=w}if(d.x!=null){w=d.zM(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xl(u,!1)}else{u.toString
t="Paid "+C.xl(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xl(w,!1)+" \xb7 "+i+" missed":"Due "+C.xl(w,!1)}w=k.a.d.a?B.ef:B.c
u=A.l(18)
if(d.gUJ()&&d.x==null)s=B.bD.j(0.35)
else s=(k.a.d.a?B.bu:B.bh).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ab(0,B.G,B.w.j(0.04),B.cJ,12)],x.V)
q=A.l(18)
p=k.a.d.a?B.bs:B.ma
o=A.K(d.gUJ()&&d.x==null?B.bD.j(0.45):B.cU.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hht(d.d)
o=A.p(B.z,A.d3(C.b06(A.fOj(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aS:B.av
m=x.p
n=A.a([new A.di(1,B.cm,A.d(p,j,1,B.a2,j,j,j,A.m(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaI6())B.d.u(n,A.a([B.e6,A.W(B.Pt,B.cU.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.l,j,B.e,B.h,0,j,j),B.cQ,A.d(t,j,1,B.a2,j,j,j,A.m(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.h,0,B.p),1)
n=A.Bl(d.c)
l=k.a.d.a?B.aS:B.av
n=A.d(n,j,j,j,j,j,j,A.m(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aG(!1,B.a3,!0,j,A.aM(!1,q,!0,new A.D(Ag.amu,A.A(A.a([o,B.bb,p,B.ae,A.x(A.a([n,B.bF,A.W(B.eI,(k.a.d.a?B.bu:B.bh).j(0.5),j,j,j,18)],m),B.dN,j,B.e,B.h,0,B.p)],m),B.l,j,B.e,B.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dQT(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.ai),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d9,j,j,j,j)}}
C.uT.prototype={}
C.amc.prototype={
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
if(j&&!v)l.push(new A.D(B.Hf,A.d(k,a0,a0,a0,a0,a0,a0,A.m(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([new A.dy(B.dM,m,B.f,A.A(l,B.l,a0,B.e,B.N,0,a0,a0),a0)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bCL,A.d(v,a0,1,B.a2,a0,a0,a0,A.m(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cI:B.bq,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fv,A.x(a2,u,a0,B.e,B.N,0,B.p),a0),1))
n.push(D.fjF)
a2=A.a([A.A(n,B.l,a0,B.e,B.h,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.u(a2,A.a([new A.D(B.wy,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a7(B.a5,B.a8,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lQ,A.x(a2,B.l,a0,B.e,B.N,0,B.p),a0)
if(a1.z){a2=A.l(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hy,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a7(B.ay,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bE2,a0,a0,a0,a0)}}
C.aWP.prototype={
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
C.U4.prototype={
S(){return new C.bgY()}}
C.bgY.prototype={
gc2F(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aE(d,n,x.w).w,l=x.p,k=A.a([D.ewX,D.ex2],l)
for(w=0;w<8;++w){v=D.a5w[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.I1:B.zA
q=t===s
r=A.W(r,q?B.ey:B.bV,n,n,n,17)
q=q?B.c:B.ab
r=A.a([r,B.bn,A.d(v.b,n,n,n,n,n,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.ae,new A.by(1,B.ba,A.d(v.c,n,1,B.a2,n,n,n,B.B_,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.ay(B.ey,2,B.r,-1)
s=new A.o(n,n,new A.bF(p,p,p,p),new A.be(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.az(n,new A.D(B.eK,A.x(A.a([new A.D(B.n4,new A.c7(B.aL,B.e,B.h,B.l,n,B.p,n,0,r,n),n),A.p(n,new A.dt(!0,new C.amc(v,q.d,q.e,new C.dgx(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.h,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dgy(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bEp,A.bI(D.h6z,n,new C.dgz(o,d),A.bo(B.b7,n,n,n,n,B.p4,n,n,new A.b9(A.l(16),B.a1),n,n,n)),n))
return A.bm(!0,new A.cN(new A.aY(0,1/0,0,m.a.b*0.9),A.cn(k,n,n,D.bIN,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nw.prototype={
aj(){var w=this
return A.J(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bfU(d,e,f){return new C.nw(this.a,e,d,f)}}
C.Is.prototype={
x0(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Is(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aGe(d){var w=null
return this.x0(w,w,w,w,w,d,w,w,w,w,w,w)},
cOu(d){var w=null
return this.x0(w,w,w,w,d,w,w,w,w,w,w,w)},
bfS(d,e,f){var w=null
return this.x0(d,w,w,w,w,w,w,w,e,w,f,w)},
cP8(d){var w=null
return this.x0(w,w,w,w,w,w,d,w,w,w,w,w)},
cPh(d){var w=null
return this.x0(w,w,w,w,w,w,w,w,w,d,w,w)},
cOs(d){var w=null
return this.x0(w,w,w,d,w,w,w,w,w,w,w,w)},
cPj(d){var w=null
return this.x0(w,w,w,w,w,w,w,w,w,w,w,d)},
cOp(d){var w=null
return this.x0(w,w,d,w,w,w,w,w,w,w,w,w)},
cOk(d){var w=null
return this.x0(w,d,w,w,w,w,w,w,w,w,w,w)},
Gi(d){var w=null
return this.x0(w,w,w,w,w,w,w,d,w,w,w,w)},
cPr(d,e,f,g,h,i,j,k,l,m,n){return this.x0(d,e,f,g,null,h,i,j,k,l,m,n)},
aj(){var w=this
return A.J(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cLZ(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bRV(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.j.M(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.E9.gew(D.E9))
s=i==null?o:B.j.D(i,18,36)
r=l.$2("position",D.a7e)
q=l.$2("frame",D.a6y)
l=l.$2("texture",D.a6u)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cPr(p,u,t,q,r,A.rf(d.h(0,"ribbon"))?A.GW(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a_F.prototype={
S(){return new C.aBT(A.a([],x.I),D.P0)},
ge3(){return this.c}}
C.aBT.prototype={
Y(){var w,v=this
v.a3()
v.f=A.Ad(0,1)
w=$.ax()
v.z=new A.au(B.ax,w)
v.Q=new A.au(B.ax,w)
v.lj()
w=v.a
C.bEG(w.c,w.d).bG(new C.dhd(v),x.fL)},
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
return A.b(C.LN(s.c,s.d),$async$lj)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dh1(t,r))
t.axX()
case 1:return A.h(u,v)}})
return A.i($async$lj,v)},
gauv(){var w,v=this
if(!J.ct(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
axX(){var w,v,u=this.gauv(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.sb3(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.sb3(0,w==null?"":w)},
ch8(d){this.m(new C.dgZ(this,d))
this.axX()},
O7(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$O7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nw(B.o.v(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aSV(r.c,r.d,s),$async$O7)
case 3:w=4
return A.b(t.lj(),$async$O7)
case 4:if(t.c==null||J.ct(t.d)){w=1
break}q=J.oz(t.d,new C.dgA(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.dgB(t,p))
t.axX()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.BP(p+1,B.cj,B.kU),$async$O7)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$O7,v)},
Bt(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Bt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gauv()
s=s==null?null:s.a
if(s==null)s=B.o.v(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aSV(o.c,o.d,new C.nw(s,r,q,new A.V(p,0,!1))),$async$Bt)
case 3:w=4
return A.b(t.lj(),$async$Bt)
case 4:if(t.c==null){w=1
break}t.m(new C.dh2(t))
case 1:return A.h(u,v)}})
return A.i($async$Bt,v)},
OP(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gauv()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dgJ(r),s,null,!0,!0,x.y),$async$OP)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bEs(s.c,s.d,r.a),$async$OP)
case 4:t.m(new C.dgK(t))
w=5
return A.b(t.lj(),$async$OP)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.UM(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$OP,v)},
z8(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$z8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bt(),$async$z8)
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
return A.b(C.S6(s,r.r,o,p,q),$async$z8)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hHy(s,r.x,r.r),$async$z8)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.LN(s.c,s.d),$async$z8)
case 10:l=e
for(s=n.d,r=J.cD(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.I(l,new C.nw(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Bu(r.c,r.d,l),$async$z8)
case 11:w=12
return A.b(t.lj(),$async$z8)
case 12:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$z8,v)},
a1J(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1J=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bt(),$async$a1J)
case 5:case 4:if(t.c==null){w=1
break}s=t.gz6(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dL(D.A0,new C.dh_(t),new C.dh0())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.mS("Our Family",o,"",""))
for(o=J.aT(t.d);o.C();){n=o.gP(o)
p.push(new H.mS(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hjd(o,new H.rQ(s,r,"",p,new H.v8(q.d,null,null,null,null,"","","")),null),$async$a1J)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a1J,v)},
Ox(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Ox=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bt(),$async$Ox)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bU(D.ahr,null,new C.dgF(t),s,!0,!0,!0,I.aan,!1,!1,x.N),$async$Ox)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cOu(r)
t.m(new C.dgG(t,q))
s=t.a
w=7
return A.b(C.SJ(s.c,s.d,q),$async$Ox)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Ox,v)},
Y2(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(D.ahr,null,new C.dgL(t),r,!0,!0,!0,I.aan,!1,!1,x.e),$async$Y2)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dgM(t,s))
r=t.a
w=4
return A.b(C.SJ(r.c,r.d,s),$async$Y2)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.BP(0,B.e5,B.n1)
case 1:return A.h(u,v)}})
return A.i($async$Y2,v)},
bUQ(d){var w=d.bU(),v=B.a.b0(B.o.v(w.gci()),2,"0"),u=B.a.b0(B.o.v(w.gcz()),2,"0")
return""+w.gcl()+"-"+v+"-"+u},
gz6(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c1T()
if(r.e)w=D.ag6
else if(J.ct(r.d)){w=r.y
v=r.gz6(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fuG,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a4(q,330,new A.D(X.anN,new C.ZX(w,v,0,q),q),q),B.bx,t,B.am,A.d(u,q,q,q,q,q,q,A.m(q,q,D.kP.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.az(q,A.p(q,D.fdR,B.f,q,q,new A.o(q,q,q,A.l(18),A.a([new A.ab(0,B.G,B.dR.j(0.45),B.J,18)],x.V),E.x6,B.n),q,q,q,q,B.OE,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcL_(),q,q,q,q,q,q,!1,B.a4))
w.push(B.T)
w.push(A.ht(D.bW8,D.h61,r.gaPb(),q))
B.d.u(u,w)}w=A.as(A.ca(A.x(u,B.l,q,B.e,B.N,0,B.p),B.t,q,B.y,q,B.eA,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.m(q,q,D.kP.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.e_:B.BC
u=A.x(A.a([new A.D(D.bFu,w,q),A.E(A.JT(v,new C.dhb(r),J.ad(r.d)+1,q,r.gch7(),u,B.aL),1),r.bH8()],x.p),B.l,q,B.e,B.h,0,B.p)
w=u}v=x.p
return A.c4(q,D.ZQ,new A.an(B.a0,q,B.b1,B.t,A.a([D.aRh,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c1T(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cJ(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.KS(B.e9,"AI",h.gbF0(),!0))
if(h.a.f)f.push(new C.KS(B.lS,"Cover",h.gbPJ(),!1))
if(h.a.f)f.push(new C.KS(B.wZ,"Header",h.gbKH(),!1))
if(J.cJ(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.KS(B.v6,"Print",h.gcqh(),!1))
if(h.a.f&&J.cJ(h.d)&&h.r>=0){v=h.w
u=v?B.hc:B.jb
t=v?"Save":"Edit"
f.push(new C.KS(u,t,v?h.gcwz():new C.dgW(h),!1))}if(h.a.f)f.push(new C.KS(B.i0,"Add page",h.gaPb(),!1))
v=C.hD4(h.y.Q)
u=h.gz6(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.I)(f),++m){l=f[m]
if(l.d)k=D.dLB
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.ku.j(0.5),1,B.r,-1)
j=A.p(g,A.W(l.a,D.kP,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bF(i,i,i,i),new A.be(k,k,k,k),g,new A.a7(B.a5,B.a8,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kP.j(0.85)
p.push(new A.by(1,B.ba,A.az(B.bX,A.x(A.a([k,B.bF,A.d(l.b,g,1,g,g,g,g,new A.F(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.N,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.amc(v,u,t+" \xb7 "+s+" "+r,new C.dgX(h),A.A(p,B.l,g,B.e,B.h,0,g,g),g)},
Ar(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ar=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bt(),$async$Ar)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aT(t.d);r.C();){q=r.gP(r)
s.push(q.b+" "+q.c)}p=H.a3y(B.d.aM(s," "))
s=t.c
s.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.dgC(t,p),s,null,!0,!0,x.N),$async$Ar)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.z8(),$async$Ar)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Ek(),$async$Ar)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.FW("Swahili (Kiswahili)",!0),$async$Ar)
case 18:w=16
break
case 17:w=19
return A.b(t.cHt(o==="sw"?"Swahili (Kiswahili)":"English"),$async$Ar)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$Ar,v)},
a_1(d,e,f,g,h){var w=null,v=A.l(16),u=B.c.j(0.07),t=A.l(16),s=A.K(E.ku.j(0.3),B.r,1),r=x.p
return new A.D(B.cw,A.aM(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.W(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.x6,B.a6),w,42,w,w,w,w,w,42),B.bb,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A2.L_,w,w,w),A.d(g,w,w,w,w,w,w,B.B0,w,w,w)],r),B.E,w,B.e,B.h,0,B.p),1)],r),B.l,w,B.e,B.h,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bj,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dgY(d,h),w,w,w,w,w,w,w),w)},
Ek(){return this.bUj()},
bUj(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Ek=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dgP(r),a7,null,!0,!0,x.ei),$async$Ek)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eC("Working on it\u2026",$.ax())
a6.a=!0
a7=r.c
a7.toString
A.cg(null,null,!1,null,new C.dgQ(o),a7,null,!0,!0,x.H).fv(new C.dgR(a6))
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
for(a1=0;a1<8;++a1){i=D.A0[a1]
J.c5(j,i.a)}w=8
return A.b(C.aih(a0,a7,new C.dgS(o),d,l,e,j),$async$Ek)
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
l.sig($.ax())
J.aTn(l,0)
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
a7=j.bfU(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Bu(j.c,j.d,l),$async$Ek)
case 11:w=12
return A.b(r.lj(),$async$Ek)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.A0[a1].a)
a5=l.cLZ(j,12,a7)
l=r.a
w=15
return A.b(C.SJ(l.c,l.d,a5),$async$Ek)
case 15:if(r.c!=null)r.m(new C.dgT(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.BP(0,B.e5,B.n1)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.L(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.T(A.b2(a3?A.cAF("Undo",new C.dgU(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.ei,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ek,v)},
FW(d,e){return this.cHu(d,e)},
cHt(d){return this.FW(d,!1)},
cHu(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$FW=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eC("Starting\u2026",$.ax())
f.a=!0
k=r.c
k.toString
A.cg(null,null,!1,null,new C.dh4(a0),k,null,!0,!0,x.H).fv(new C.dh5(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.I)(k),++i){n=k[i]
J.c5(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a3M(m,new C.dh6(a0)),$async$FW)
case 10:w=8
break
case 9:w=11
return A.b(C.bGc(new C.dh7(a0),m,a2),$async$FW)
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
o.sig($.ax())
J.aTn(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.L(x.q).f
k=q
o.T(A.b2(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bfU(J.t(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Bu(k.c,k.d,o),$async$FW)
case 12:w=13
return A.b(r.lj(),$async$FW)
case 13:o=r.c
if(o==null){w=1
break}o=o.L(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a_(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(A.cAF("Undo",new C.dh8(r,d),null),null,null,null,null,B.t,null,k,null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$FW,v)},
bH8(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dgD(v):u
r=A.aI(u,u,u,u,A.W(D.bRM,s?D.kP:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cJ(v.d)&&!v.w&&v.r>=0)s=A.ht(A.W(B.wN,B.GF,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.m(u,u,B.GF,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbPj(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.m(u,u,D.kP.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.as(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dgE(v):u
return A.bm(!0,new A.D(D.bFj,A.A(A.a([r,s,A.aI(u,u,u,u,A.W(B.eI,t<J.ad(v.d)?D.kP:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.h,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a_J.prototype={
S(){return new C.bhm(new A.au(B.ax,$.ax()))}}
C.bhm.prototype={
ga2R(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.U$=$.ax()
w.R$=0
this.a2()},
gbSV(){switch(this.ga2R()){case"cover":var w=D.daC
break
case"book":w=D.d5R
break
default:w=D.dCm
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.l(26),n=E.ku.j(0.5),m=x.p,l=A.A(A.a([D.dLC,B.at,D.bL0,A.aI(p,p,p,p,B.lr,p,p,p,new C.dj_(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.h,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jz(p,p,p,A.d("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dj0(q),q.ga2R()==="page",p,p,p,p))
if(q.a.d)k.push(A.jz(p,p,p,D.h0y,p,new C.dj1(q),q.ga2R()==="book",p,p,p,p))
k.push(A.jz(p,p,p,D.fOd,p,new C.dj2(q),q.ga2R()==="cover",p,p,p,p))
k=A.bZ(B.bH,k,B.br,p,6,8)
j=B.c.j(0.07)
j=A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bz(p,new A.b6(4,A.l(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.ko,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dj,!0,B.a7,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbSV(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.d(s,p,p,p,p,p,p,B.KX,p,p,p)
w.push(A.n4(p,B.c.j(0.08),r,B.hs,new C.dj3(q,s),p,p,p,p))}return A.eG(p,E.Cb,A.ca(A.x(A.a([l,B.T,D.h3T,B.am,k,B.af,j,B.P,A.bZ(B.bH,w,B.br,p,6,6),B.aB,A.dh(D.bW5,p,D.h4F,new C.dj4(q,d),A.bo(B.b7,p,p,p,p,B.p4,p,p,new A.b9(A.l(16),B.a1),p,p,p)),B.aw,D.fZM],m),B.E,p,B.e,B.N,0,B.p),B.t,p,B.y,p,B.fu,p,p,B.ah),p,p,p,B.OB,p,B.d6,p,new A.b9(o,new A.ay(n,1.4,B.r,-1)),p)}}
C.a_H.prototype={
S(){return new C.aBW(A.a([],x.gA))},
ge3(){return this.c}}
C.ag0.prototype={}
C.aBW.prototype={
Y(){this.a3()
this.lj()},
lj(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Sb(p.c,p.d),$async$lj)
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
return A.b(C.bEG(r.c,q),$async$lj)
case 6:j=e
i=J
w=7
return A.b(C.LN(t.a.c,q),$async$lj)
case 7:m.push(new l.ag0(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.dhs(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lj,v)},
bb8(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
R0(d,e){return this.ciH(0,e)},
ciH(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$R0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).ce(A.ed(new C.dhr(u,e),!0,null,x.y)),$async$R0)
case 2:t=g
w=3
return A.b(u.lj(),$async$R0)
case 3:if(t===!0&&u.c!=null)u.c.L(x.q).f.T(D.aVc)
return A.h(null,v)}})
return A.i($async$R0,v)},
FY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$FY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.L(x.q).f.T(D.aV7)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ahA(s.c,s.d),$async$FY)
case 5:q=e
w=6
return A.b(t.lj(),$async$FY)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.R0(0,B.d.fb(t.d,new C.dhw(q))),$async$FY)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.S6(p,s.f,r,n,o),$async$FY)
case 10:m=e
w=11
return A.b(t.lj(),$async$FY)
case 11:if(m&&t.c!=null)t.c.L(x.q).f.T(D.aVc)
case 1:return A.h(u,v)}})
return A.i($async$FY,v)},
Qs(d,e){return this.cui(0,e)},
cui(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qs=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dhv(t,e),s,null,!0,!0,x.y),$async$Qs)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a3Y(s.c,s.d,e.a),$async$Qs)
case 4:w=5
return A.b(t.lj(),$async$Qs)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qs,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)k.push(o.bHb(w[u]))
if(m){t=6-o.d.length
w=A.l(18)
v=B.c.j(0.05)
s=A.K(E.ku.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.az(n,new A.fH(0.7142857142857143,A.p(n,A.x(A.a([D.dLD,B.af,D.ew_,B.aw,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.m(n,n,D.kP.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.b8,B.h,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcKW(),n,n,n,n,n,n,!1,B.a4))}w=A.l(22)
v=A.K(E.ku.j(0.85),B.r,1.6)
s=A.az(n,A.p(n,D.c3c,B.f,n,n,new A.o(B.w.j(0.3),n,A.K(E.ku.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dhx(d),n,n,n,n,n,n,!1,B.a4)
r=A.l(14)
q=B.w.j(0.3)
p=A.K(E.ku.j(0.5),B.r,1)
w=A.p(n,A.A(A.a([s,B.bb,D.bLp,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.ftG,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.hk,n,n,n)],l),B.l,n,B.e,B.h,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.c9e,B.n),n,n,n,Aw.On,D.bDe,n,n,n)
if(o.e)k=D.ag6
else k=k.length===0?D.bdQ:A.cm(new C.dhy(k))
return A.c4(n,D.ZQ,new A.an(B.a0,n,B.b1,B.t,A.a([D.aRh,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bHb(d){var w,v,u=this,t=null,s=u.bb8(d),r=d.c,q=x.p,p=A.a([A.bR(0,new A.dy(B.dC,B.z,B.f,new A.a4(300,420,new C.ZX(d.b,s,r,t),t),t),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.az(t,A.p(t,D.c2u,B.f,t,t,new A.o(B.w.j(0.55),t,A.K(B.aT,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dhp(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.ftj,t,t,t)
v=r===1?"page":"pages"
return A.az(t,A.x(A.a([new A.fH(0.7142857142857143,new A.an(B.a0,t,B.ad,B.t,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.m(t,t,D.kP.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.h,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dhq(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.KS.prototype={}
C.ZX.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dL(D.A0,new C.cPR(m),new C.cPS()),j=m.c,i=D.E9.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mt:B.b8
v=new C.cPT(h)
i=A.a([new A.ab(0,B.G,B.w.j(0.6),D.esH,28)],x.V)
u=x.p
t=A.a([A.bR(0,A.b4(l,l,l,new C.bez(j.x,h,l),B.az),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a7(B.a5,B.a8,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cK(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.be(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.u(t,A.a([v.$4(D.anO,8,0.85,2.2),v.$4(D.bIc,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.anO,8,0.85,2.4))
else if(r==="corners")t.push(A.bR(0,new A.D(D.bI8,A.b4(l,l,l,new C.beq(h,l),B.az),l),0,0,0))
r=A.W(D.aCG[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
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
t.push(A.bR(0,new A.D(D.bIE,A.x(o,B.l,l,w,B.h,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b4(l,l,l,new C.aIZ(l),D.fiK),l,l,l,46,0,l))
return A.p(l,A.bu(D.aeI,new A.an(B.a0,l,B.ad,B.t,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.aeI,i,new A.a7(B.ay,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bez.prototype={
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
aF(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.beq.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.S(),j=A.L(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.aa
j.c=2.4
j.d=B.bG
for(w=e.a,v=e.b,v=[D.f85,new A.c9([w,0,-1,1]),new A.c9([0,v,1,-1]),new A.c9([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
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
aF(d){return!d.b.A(0,this.b)}}
C.uU.prototype={}
C.a_f.prototype={
S(){return new C.bex()}}
C.bex.prototype={
gow(){var w=this.d
return w===$?this.d=this.a.c:w},
gz6(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.ba(w.b,B.b6,B.aP),$.ax())}return v},
gaDq(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.ba(w.c,B.b6,B.aP),$.ax())}return v},
gat2(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.ba(w.y,B.b6,B.aP),$.ax())}return v},
t(){var w=this,v=w.gz6(0),u=v.U$=$.ax()
v.R$=0
v=w.gaDq()
v.U$=u
v.R$=0
v=w.gat2()
v.U$=u
v.R$=0
w.a2()},
atG(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jz(s,s,s,A.d(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.d8p(this,f,u),e===u,s,s,s,s))}return A.bZ(B.bH,r,B.br,s,6,8)},
azq(d){var w=null,v=B.c.j(0.07)
return A.bz(w,new A.b6(4,A.l(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lY,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gow(),a0=f.gz6(0),a1=a0.a.a,a2=f.gaDq(),a3=a2.a.a,a4=f.gat2(),a5=d.bfS(a4.a.a,a3,a1)
a1=x.w
a3=A.aE(a6,e,a1).w
a1=A.aE(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.as(new A.a4(190,260,new A.dy(B.dC,B.z,B.f,new A.a4(270,370,new C.ZX(a5,d,f.a.e,e),e),e),e),e,e,e)
a0=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.azq("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d8O(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dj,!0,B.a7,e,B.ao,e,e,e,e)
a2=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.azq("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d8P(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dj,!0,B.a7,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.A0[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aT
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bF(o,o,o,o),e,e,new A.a7(B.ay,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aE
v.push(A.az(e,A.x(A.a([p,B.cQ,A.d(t.b,e,e,e,e,e,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8Q(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bZ(B.bH,v,B.br,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b7.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.ey:B.L,2,B.r,-1)
q.push(A.az(e,A.p(e,A.W(D.aCG[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bF(o,o,o,o),new A.be(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8R(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bZ(B.bH,q,B.br,e,8,8)
a4=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.azq("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d8S(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dj,!0,B.a7,e,B.ao,e,e,e,e)
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
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bF(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aE
m.push(A.az(e,A.x(A.a([j,B.bF,A.d(i,e,e,e,e,e,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8T(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bZ(B.bH,m,B.br,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,M.vP,e,e,e)
k=f.gow()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bm(!0,new A.cN(new A.aY(0,1/0,0,a1.a.b*0.92),A.cn(A.a([D.fZc,B.af,d,B.aO,a0,B.T,a2,B.aB,D.h4q,B.P,v,B.aB,D.fZl,B.P,q,B.aB,a4,B.aB,p,B.P,m,B.aB,l,A.l0(e,9,""+B.j.V(f.gow().f),36,18,new C.d8U(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,M.vP,e,e,e),B.am,f.atG(D.a7e,f.gow().r,new C.d8V(f),D.dFA),B.af,A.d("BORDER",e,e,e,e,e,e,M.vP,e,e,e),B.am,f.atG(D.a6y,f.gow().w,new C.d8W(f),D.dFG),B.af,A.d("COVER MATERIAL",e,e,e,e,e,e,M.vP,e,e,e),B.am,f.atG(D.a6u,f.gow().x,new C.d8Y(f),D.dH8),B.am,A.iU(e,B.b7,e,B.ag,e,new C.d8Z(f),e,e,e,D.fTm,f.gow().z),B.bx,A.bI(D.fXT,e,new C.d9_(f,a6),A.bo(B.b7,e,e,e,e,B.p4,e,e,new A.b9(A.l(16),B.a1),e,e,e))],w),e,e,Z.ani,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aIZ.prototype={
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
u.san(D.c9W.aD(0,new A.a5(0,0,0+w,0+v)))
d.af(t,u)},
aF(d){return!1}}
C.bjT.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.S()
w=A.L()
w.san(D.c8W.aD(0,new A.a5(0,0,a2,a3)))
a4.aE(new A.a5(0,0,a2,a3),w)
v=B.j.cB(a1/112)
u=new A.e_()
u.cU(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.daB[u.aw(9)]
j=u.aw(14)
J.br(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a5(n,j,n+m,j+l)
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
e.r=E.ku.j(0.55).gp(0)
a4.aE(new A.a5(g,j,h,j+2),e)
e=new A.ar(B.S,B.Q,B.V,B.X,B.U)
e.r=E.ku.j(0.4).gp(0)
a4.aE(new A.a5(g,q,h,p),e)
t.restore()
j=u.aw(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.san(D.c8e.aD(0,new A.a5(0,r,a2,q)))
a4.aE(new A.a5(0,r,a2,q),p)
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=B.w.j(0.5).gp(0)
p.y=B.kX
a4.aE(new A.a5(0,q,a2,q+14),p)}t=A.L()
t.r=D.bhB.j(0.72).gp(0)
a4.aE(new A.a5(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.L()
a3.san(new A.bS(B.z,0.5,B.x,d,0,A.a([D.bpW.j(0.22),B.L],w),d,d).aD(0,A.bT(new A.r(t,a1),a0)))
a4.O(new A.r(t,a1),a0,a3)},
aF(d){return!1}}
C.bcH.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cK(14,w*2,v*2.2,v*2,o,o,new A.bM(new A.o(A.ap(D.kP,D.bvb,w/4),o,new A.bF(B.a1,new A.ay(B.w.j(0.12),1,B.r,-1),B.a1,B.a1),B.Mb,o,o,B.n),B.bi,o,o),o))}v=x.V
u=A.a([new A.ab(0,B.G,B.w.j(0.35),B.aMT,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.ku.j(0.6),o,o,new A.be(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.l,o,B.r_,B.h,0,B.p),B.f,o,o,new A.o(o,o,o,D.b5R,u,D.c9U,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ab(0,B.G,B.w.j(0.4),B.dp,18)],v)
t=A.ao(o,A.b4(o,o,o,new C.aIZ(o),D.fiF),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aWP(p.y,r,L.j6,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bz(o,B.eN,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,L.j6.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fIf,!0,B.a7,o,B.ao,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.m(o,o,L.j6.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.T,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bz(o,B.eN,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,L.j6.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fyE,!0,B.a7,B.AV,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.h,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fI7,o,o,o),B.aw,A.d(q.$1(r),o,o,o,o,o,o,A.m(o,o,L.j6.j(0.5),o,o,o,o,o,o,o,o,11,B.cI,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.A(A.a([A.E(A.p(o,o,B.f,D.Gp.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fv,A.d("\u2766",o,o,o,o,o,o,A.m(o,o,D.Gp.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.Gp.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.h,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.m(o,o,L.j6.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Zb(A.cS(A.a([A.cS(o,o,o,o,o,o,o,o,o,D.fBT,B.a.aA(k,0,1)),A.cS(o,o,o,o,o,o,o,o,o,o,B.a.b4(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.m(o,o,L.j6.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.ca(A.x(n,B.E,o,B.e,B.h,0,B.p),B.t,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.hZ,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.m(o,o,L.j6.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.p(o,A.bu(B.Mb,new A.an(B.a0,o,B.ad,B.t,A.a([t,new A.D(D.bHF,A.x(s,B.al,o,B.e,B.h,0,B.p),o),A.ao(0,new A.bM(new A.o(o,o,o,o,o,new A.a7(B.a5,B.a8,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bi,o,o),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.Mb,v,D.car,B.n),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.h,0,o,o))
return new A.an(B.a0,o,B.ad,B.t,l,o)}}
C.amd.prototype={
S(){return new C.ame(new A.eC(0,$.ax()),new C.bTJ(),new C.amw(),D.hH1,null,null)},
gd1(){return this.d}}
C.a1V.prototype={
a7(){return"_Step."+this.b}}
C.ame.prototype={
gCC(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEC(w.c,6,w.e,!1)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
ghd(d){var w,v=this,u=v.e
if(u===$){w=C.N7(v.a.c)
v.e!==$&&A.bD()
v.e=w
u=w}return u},
gU2(){var w=this.ghd(0)
return w.gzq()==null?"Babu":B.a.i(w.gzq().b)},
Y(){var w,v=this
v.a3()
w=v.ghd(0).gzq()
w=w==null?null:w.c
v.r.b=w===D.oB
w=v.q6(new C.bS4(v))
w.fX(0)
v.x!==$&&A.aQ()
v.x=w
v.a2O("Come closer, my children. I am "+v.gU2()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
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
w.bwy()},
a2O(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.dg(D.alU,new C.bRZ(w))},
bsV(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.m(new C.bS7(v))},
ae8(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bsN(){return this.baG()},
baG(){var w=this,v=w.gCC()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bS_(w))
w.a2O(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cz(B.me,new C.bS0(w))},
cM5(){var w=this
w.m(new C.bS3(w))
w.a2O(w.gCC()[w.as].a)},
Lc(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.adO)return
w=p.gCC()
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
p.m(new C.bS2(p,d,u,q))
p.a2O(u?D.dqu[q.aw(4)]+" "+w[p.as].d:D.dn2[q.aw(3)]+" "+w[p.as].d)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCC()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bGU(t.at,t.ay,p)
t.m(new C.bS5(t,s))
t.a2O(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.BQ(t.a.d,s),$async$kN)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.BR(r.d,r.c.a,"fire",t.at*10),$async$kN)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bS6())
w=1
break
case 4:++t.as
t.baG()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c4(v,D.YR,new A.an(B.a0,v,B.ad,B.t,A.a([A.bR(0,new A.en(A.b4(v,v,v,new C.aWU(u,w.r,w.w,u),B.az),v),0,0,0),A.bm(!0,A.x(A.a([w.ccI(0),B.b3,w.bS4()],t),B.l,v,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
ccI(d){var w,v,u,t=this,s=null,r=A.aI(s,s,s,s,B.Qn,s,s,s,new C.bS1(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCC().length;++w){v=t.as
if(w<v||t.Q===D.b28)v=B.cT
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,D.bCZ,s,s,s,22))}p=A.E(A.x(A.a([D.fQ5,A.A(p,B.l,s,B.e,B.h,0,s,s)],q),B.E,s,B.e,B.h,0,B.p),1)
v=A.l(14)
u=A.K(B.fK,B.r,1)
return new A.D(D.bIR,A.A(A.a([r,p,A.p(s,A.d("\ud83d\udd25 "+B.j.V(t.cy*100)+"%",s,s,s,s,s,s,B.iH,s,s,s),B.f,s,s,new A.o(B.b5,s,u,v,s,s,B.n),s,s,s,s,B.hk,s,s,s)],q),B.l,s,B.e,B.h,0,s,s),s)},
bS4(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghd(0).gzq()
if(h==null)w=1
else w=h.c===D.oB?0:1
v=j.dx
u=j.db
t=D.qp.j(0.96)
s=A.l(22)
r=A.K(B.cT,B.r,3)
q=A.b4(i,i,i,new C.bpu(w,i),B.az)
p=A.d(j.Q===D.adO?j.gU2()+" asks":"Elder "+j.gU2(),i,i,i,i,i,i,D.aWr,i,i,i)
o=j.db
o=B.a.aA(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.az(B.bX,A.A(A.a([new A.a4(62,62,q,i),B.at,A.E(A.x(A.a([p,B.bF,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aWF,i,i,i)],n),B.E,i,B.e,B.h,0,B.p),1)],n),B.E,i,B.e,B.h,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbsU(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.as(j.aae("Sit down by the fire",j.gbsM()),i,i,i)
break
case 1:v=A.as(j.aae("Ask me, Elder",j.gcM4()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCC()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.ay(D.lF,2.5,B.r,-1)
v.push(A.az(i,A.p(i,A.d(u[m],i,i,i,i,i,i,D.aWB,B.K,i,i),B.f,i,D.afk,new A.o(D.akS,i,new A.bF(l,l,l,l),new A.be(q,q,q,q),i,i,B.n),i,i,i,i,V.wA,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bRW(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bZ(B.bH,v,B.br,i,8,8)
break
case 3:v=j.fr
u=v?B.kb:Ak.aqO
u=A.W(u,v?B.ep:D.lF,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.m(i,i,v?B.ep:D.lF,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCC().length?"Finish":"Next story"
v=A.A(A.a([u,B.ae,q,j.aae(v,j.gqs(j))],n),B.l,i,B.e,B.h,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gCC().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aWT,i,i,i)],n)
u=j.cx
if(u>0){u=C.aRc(u)
q=C.aRc(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.ace,i,i,i))}v.push(B.P)
v.push(j.aae("Back to the games",new C.bRX(j)))
v=A.x(v,B.l,i,B.e,B.h,0,B.p)
break
default:v=i}return A.p(i,A.x(A.a([o,B.T,v],n),B.E,i,B.e,B.N,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.aEd,i,B.n),i,i,i,B.yO,B.bj,i,i,i)},
aae(d,e){var w=null,v=A.l(16),u=A.K(B.cT,B.r,2)
return A.az(w,A.p(w,A.d(d,w,w,w,w,w,w,A2.L_,w,w,w),B.f,w,w,new A.o(D.lF,w,u,v,w,w,B.n),w,w,w,w,D.bGy,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bpu.prototype={
a4(d,e){P.hiY(d,e.ek(B.J),e.gdi()*0.45,this.b,0,0.4)},
aF(d){return d.b!==this.b}}
C.aBU.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.bTJ.prototype={}
C.tg.prototype={}
C.bpv.prototype={}
C.amw.prototype={
MF(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.ieM(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aWU.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.Gx(l.d.MF(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.br(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bW(0,u)
l.cBx(d,j)
l.bQD(d,j)
l.cJR(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.br(t.save())
t.translate(225,580)
d.oo(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.S()
q=A.L()
p=x.O
o=x.n
q.san(A.we(B.J,r,A.a([D.btW.j(0.55*s),F.NE.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.O(B.J,r,q)
t.restore()
n=A.a([new A.y(528,new C.bTB(l,d,j,i)),new A.y(540,new C.bTC(l,d,j,i)),new A.y(546,new C.bTD(l,d,j,i)),new A.y(574,new C.bTE(l,d,j,i)),new A.y(612,new C.bTF(l,d,j,i)),new A.y(650,new C.bTG(l,d,j,i)),new A.y(656,new C.bTH(l,d,j,i))],x.E)
B.d.b_(n,new C.bTI())
for(m=0;m<7;++m)n[m].b.$0()
l.bHu(d,j,i)
l.bUh(d,j)
t.restore()
$.S()
t=A.L()
t.san(A.we(new A.r(w/2,v*0.6),e.gaor()*0.75,A.a([B.L,D.bhv],p),A.a([0.55,1],o),B.x,k,k,0))
d.aE(new A.a5(0,0,0+w,0+v),t)},
aF(d){return d.c!==this.c||d.d!==this.d},
cBx(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e_()
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
d.ah(p,p.aJ(0,D.ese),C.iC(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.j.F(v+o*0.05,1)
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
r=new A.cd(s-2,j,s,r)
k.push(r)
i=l.f
if(i!=null)r.ak(i)
l.ab()
s=new A.cd(s+2,j,s+6,m)
k.push(s)
r=l.f
if(r!=null)s.ak(r)
l.ab()
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.b=B.aa
s.c=1.6
s.r=D.bkd.gp(0)
s.d=B.bG
s.e=B.dP
d.af(l,s)}},
bQD(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aBa[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bW(new A.r(p,m),n*0.74,q*0.5)
k=Ab.yA.j(v)
$.S()
j=new A.ar(B.S,B.Q,B.V,B.X,B.U)
j.r=k.gp(0)
d.c_(l,j)
q=A.bW(new A.r(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=B.we.j(u).gp(0)
d.c_(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.j.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.r=D.aie.j(0.16*(1-h)).gp(0)
d.O(new A.r(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cJR(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bE1(d,D.esa,0.9,e,D.hCR,!1,!1,D.b25,1,!1)
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
C.bE1(d,D.esc,0.95,e,D.hCM,!1,!1,D.b26,1,!0)
t=new A.aH(w,B.aj,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.cd(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.cd(431,553,421,548))
t.E(new A.bw())
u=A.L()
u.r=F.G6.gp(0)
d.af(t,u)
u=A.bW(D.esb,8,28)
t=A.L()
t.r=D.bwh.gp(0)
d.c_(u,t)
C.bE1(d,new A.r(-30+B.j.F(e/26,1)*510,492),0.82,e,D.hCS,!0,!1,D.XE,1,!1)
t=B.j.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.c_(A.bW(new A.r(s+q*16,r-6),16,11),C.iC(D.ak2,1.8))
u=q<0
C.bE1(d,new A.r(s-q*6,r),0.62,e,D.hCU,!1,u,D.XE,2.2,!1)
C.bE1(d,new A.r(s-q*32,r+4),0.58,e+1,D.hCQ,!1,u,D.XE,2.2,!1)
this.bX0(d,D.erQ,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bW(new A.r(o,n),8,11)
k=p===1
j=k?D.ajZ:D.akA
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.r=j.gp(0)
d.c_(l,i)
l=k?D.ajZ:D.akA
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.r=l.gp(0)
d.O(new A.r(o+5,n+(-3+m)),2.6,k)
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.b=B.aa
k.c=1
k.r=B.as.gp(0)
k.d=B.bG
k.e=B.dP
d.ah(new A.r(o+7.5,n+(-2+m)),new A.r(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.b=B.aa
k.c=1
k.r=B.as.gp(0)
k.d=B.bG
k.e=B.dP
d.ah(new A.r(o,n+4),new A.r(o,n+8),k)}h=e<f.f
u=A.bW(D.a9f,15+Math.sin(e*2)*0.8,40)
t=A.L()
t.r=D.aiD.gp(0)
d.c_(u,t)
u=A.bW(D.a9f.a5(0,new A.r(-14,h?-9:-2)),12,15)
t=A.L()
t.r=D.bmm.gp(0)
d.c_(u,t)
t=new A.aH(w,B.aj,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bw())
u=A.L()
u.r=D.bmw.gp(0)
d.af(t,u)
u=D.a9f.a5(0,new A.r(-17,h?-9:-2))
t=A.L()
t.r=B.id.gp(0)
d.O(u,1.1,t)
v=new A.aH(w,B.aj,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.cd(180,588+w*(h?6:0),178,595))
d.af(v,C.iC(D.aiD,3.5))},
bX0(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a5(0,new A.r(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.b=B.aa
m.c=2
m.r=D.Z3.gp(0)
m.d=B.bG
m.e=B.dP
d.ah(new A.r(u+o,s),new A.r(u+(o+n*1.5),q),m)}w=A.bW(k,17,32)
v=$.S()
r=A.L()
r.r=D.G4.gp(0)
d.c_(w,r)
r=A.bW(k.a5(0,D.erh),7,26)
w=A.ap(D.G4,B.w,0.12)
w.toString
q=A.L()
q.r=w.gp(0)
d.c_(r,q)
v=new A.aH(v.r,B.aj,null,null,A.a([],x.v))
v.E(new A.aZ(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.bw())
s=A.L()
s.r=D.G4.gp(0)
d.af(v,s)
s=A.bW(k.a5(0,new A.r(24,-7+l)),9,12)
v=A.L()
v.r=D.G4.gp(0)
d.c_(s,v)
v=-11+l
d.ah(k.a5(0,new A.r(22,v)),k.a5(0,new A.r(21,-17+l)),C.iC(D.Z3,1.6))
d.ah(k.a5(0,new A.r(26,v)),k.a5(0,new A.r(28,-16+l)),C.iC(D.Z3,1.6))
v=k.a5(0,new A.r(26,-8+l))
s=A.L()
s.r=B.w.gp(0)
d.O(v,0.9,s)
d.ah(k.a5(0,new A.r(26,-3+l)),k.a5(0,new A.r(26,1+l)),C.iC(D.bpe,1.4))
d.ah(k.a5(0,D.eue),k.a5(0,new A.r(-19,-7+Math.sin(f*7)*2)),C.iC(D.G4,2.4))},
bUf(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bW(new A.r(225+u*36,574+(t*13+6)),8,11)
$.S()
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=D.buV.gp(0)
a6.c_(u,t)}}u=A.bW(D.a9h.a5(0,B.cz),17,52)
$.S()
t=A.L()
t.r=D.bh3.gp(0)
a6.c_(u,t)
t=A.bW(D.a9h.a5(0,B.cz),12,44)
u=D.bkC.j(0.6+0.3*Math.sin(a7*6))
s=A.L()
s.r=u.gp(0)
a6.c_(t,s)
for(r=0;r<3;++r){v=D.dmu[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.b=B.aa
o.c=7
o.r=D.Gh.gp(0)
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
l=[D.f4d,D.f4M,D.f5R,D.f6b,D.f5P]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.bsg,D.boA,D.bul][k]
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
bUh(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.j.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.bws.j(0.18*p)
$.S()
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.r=o.gp(0)
d.O(new A.r(r,q),5,n)
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.r=D.bq0.j(0.9*p).gp(0)
d.O(new A.r(r,q),1.4,n)}},
c63(d,e){switch(d){case 0:return e.b?D.hCN:D.b1E
case 1:return e.b?D.hCT:D.b1C
case 2:return D.b1B
case 3:return D.b1A
case 4:return D.b1D
default:return D.b1F}},
aDE(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
Rk(d,e,f,g){var w,v=this,u=D.a6G[e],t=v.c63(e,g),s=new C.bpv(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a6G[e],l=e===0
m=B.j.D(((l?D.aML:D.aMR).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a9m
s.as=D.EA
if(l){s.a=o?v.aDE(f,0):0
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.erp
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.esL
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
s.Q=D.eva
s.as=D.aN3}if(e===2&&g.x!=null&&f<g.y){s.a=v.aDE(f,5)
s.b=0.4
s.as=new A.r(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aDE(f,e*3)
s.b=0.5
s.c=0.4}}C.hBG(d,u.a,u.b*1.2,t,s,f,e,null)},
bHu(d,e,f){var w=new C.bTA(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd6(d){return this.c}}
C.ag9.prototype={
a7(){return"_Stand."+this.b}}
C.ae7.prototype={}
C.lv.prototype={}
C.bSk.prototype={
bC5(d){var w,v,u,t,s=A.T(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
Gd(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.b_(r,new C.bSl())
return r},
arI(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aNl(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
amQ(d){var w,v,u=A.aR(x.N),t=d,s=0
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
gzq(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.b_(w,new C.bSm(this))
return B.d.gH(w)}}
C.auz.prototype={}
C.zA.prototype={}
C.al5.prototype={
gC8(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Y(w,new C.bN8(),A.U(w).k("Y<1>")).gJ(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
aj(){var w=this
return A.J(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.MS.prototype={
gapJ(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(t.gC8(0))s.push(t)}return s},
aj(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
p.push(A.J(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.J(["id",this.a,"title",q,"qs",p],u,t)},
d2k(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gapJ(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.I)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lv(B.a.i(s.a),p,B.d.cn(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.baU.prototype={}
C.aab.prototype={}
C.bic.prototype={}
C.ag7.prototype={}
C.ako.prototype={
S(){return new C.akp(B.bC,A.a([],x.cC),A.a([],x.e4),null,null)},
gd1(){return this.d}}
C.akp.prototype={
gMW(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEC(w.c,8,w.e,!1)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
gbb1(){var w,v=this,u=v.e
if(u===$){w=v.q6(v.gccK())
v.e!==$&&A.bD()
v.e=w
u=w}return u},
Y(){this.a3()
this.gbb1().fX(0)},
t(){this.gbb1().t()
this.bwt()},
fX(d){this.m(new C.bLi(this))},
ccL(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fG(0,v)
if(w.c!=null)w.m(new C.bLd())},
b9n(){var w,v,u,t=this,s=t.r
B.d.a8(s)
w=t.gMW()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bic(u,(u+0.5)/v,w[t.x].b[u]))},
fG(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bq(w,new C.bLj())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c8T()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gMW()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.j.V((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.ate(v,0.8,B.cT)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.ate(m.cy,0.8,G.nq)
m.aZU("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.ate(q,0.88,D.lF)
p=m.gMW()[m.x]
n=p.c
if(u===n){m.aZU("The right gourd fell! It was "+p.b[n]+".")
return}}}},
ate(d,e,f){var w,v,u,t=new A.e_()
t.cU(B.j.V(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.ag7(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
aZU(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.Qt()}},
c8T(){var w=this
if(w.x+1>=w.gMW().length){w.Qt()
return}++w.x
w.b9n()},
Qt(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Qt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gMW().length
r=C.bGU(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bLb())
w=2
return A.b(C.BQ(u.a.d,r),$async$Qt)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.BR(t.d,t.c.a,"catch",u.z),$async$Qt)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bLc())
return A.h(null,v)}})
return A.i($async$Qt,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.ccJ()
else w=v.ch?v.ccM():A.as(new A.D(B.eA,A.x(A.a([D.aXR,B.P,D.fRN,B.T,D.fXY,B.e1,C.ux("Play",v.geX(v),B.cT,B.hd,D.fB)],x.p),B.l,u,B.e,B.N,0,B.p),u),u,u,u)
return new C.tG("Calabash Catch",w,B.f5,u)},
ccM(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hB:B.HL
p.push(A.W(u,v?B.aA:B.bV,r,r,r,22))}p.push(B.b3)
v=s.x
u=s.gMW()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aWq,r,r,r))
p.push(B.bb)
v=A.l(14)
p.push(A.p(r,A.d(""+s.z,r,r,r,r,r,r,B.iH,r,r,r),B.f,r,r,new A.o(B.bw,r,r,v,r,r,B.n),r,r,r,r,B.CB,r,r,r))
p=A.A(p,B.l,r,B.e,B.h,0,r,r)
v=A.l(18)
t=A.K(B.cT,B.r,3)
return A.x(A.a([new A.D(D.bEk,p,r),A.p(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fBL,B.K,r,r),B.f,r,r,new A.o(D.qp,r,t,v,r,r,B.n),r,r,r,B.f3,B.bj,r,r,1/0),B.am,A.E(A.cm(new C.bLh(s)),1)],q),B.l,r,B.e,B.h,0,B.p)},
ccJ(){var w=this,v=null,u=A.as(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.q1,v,v,v),v,v,v),t=A.as(A.d(""+w.Q+" of "+w.gMW().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.VY,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cn(A.a([D.bex,u,t,B.aO,new C.Iu(s,r,w.cx,v),B.aO,A.as(C.ux("Back to the games",new C.bLa(w),B.cT,B.ka,D.fB),v,v,v)],x.p),v,v,B.ac,v,v,B.ah,!1)}}
C.bdm.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.S(),a3=A.L()
a3.san(A.jC(B.J,new A.r(0,a0),D.d4p,G.aBr,B.x,e))
a4.aE(new A.a5(0,0,a1,0+a0),a3)
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
w.r=D.blz.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aH(a2.r,B.aj,e,e,A.a([],a3))
w=a0*0.86
a2.E(new A.aZ(r-26,w))
t=a0*0.5
s=a0*0.34
a2.E(new A.cd(r-14,t,r-10,s))
a2.E(new A.aq(r+10,s))
a2.E(new A.cd(r+14,t,r+26,w))
a2.E(new A.bw())
w=A.L()
w.r=D.ahf.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.cpU[q]
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.ahf.gp(0)
s.c=7
s.d=B.bG
a4.ah(new A.r(r,a2),new A.r(r+p*46,w),s)
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.agy.gp(0)
a4.O(new A.r(r+p*50,t),18,s)}a2=a0*0.88
w=A.L()
w.r=D.bmu.gp(0)
a4.aE(new A.a5(0,a2,a1,a2+a0*0.12),w)
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
a4.c_(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.br(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=D.ahZ.gp(0)
a4.O(D.eqE,14,m)
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=D.bri.gp(0)
m.c=4
m.d=B.bG
a4.ah(D.eqF,D.erM,m)
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.san(new A.alY(D.etW,46,D.dd3,B.vh,B.x,e,e,0))
a4.O(B.J,34,m)
m=A.bW(D.eu2,8,12)
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=B.c.j(0.35).gp(0)
a4.c_(m,l)
k=new A.iA(new A.eq(n.c,e,e,B.cL,e,e,e,e,e,e,D.fzz),B.K,B.c_,new A.jj(1),e,e,3,e,B.c0,e,B.cx)
k.nA(62)
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
C.iiw(a4,new A.r(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dR,(w+1)/2)
h=A.bW(new A.r(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aH($.S().r,B.aj,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.E(new A.aZ(w,a2))
t=h.c
a3.E(new A.aq(t,a2))
s=h.d
a3.E(new A.aq(t-8,s))
a3.E(new A.cd(h.gbE().a,s+8,w+8,s))
a3.E(new A.bw())
m=A.L()
m.r=D.ZW.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=D.BQ.gp(0)
m.c=1.4
a4.ah(new A.r(t,a2),new A.r(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.L()
s.r=G.nq.gp(0)
a4.aE(new A.a5(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.L()
s.r=D.blF.gp(0)
a4.c_(new A.a5(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.I)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=g.e.j(B.j.D(s,0,1)).gp(0)
a4.O(new A.r(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.fE(e,B.cx,e,e,e,A.cS(e,e,e,e,e,e,e,e,e,A.m(e,e,B.cT.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,I.DO,e,e),"+"+a2),B.a7,B.c_,e,B.dI,B.c0)
k.eo()
k.a4(a4,new A.r(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aF(d){return!0}}
C.QO.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aBS(w.c,w.f,v),B.az),s=A.l(10),r=A.K(B.bE,B.r,1.4)
return new A.a4(u+22,v,A.x(A.a([new A.a4(u,u,t,v),B.cQ,A.p(v,A.d(w.d,v,1,B.a2,v,v,v,D.fs7,v,v,v),B.f,v,v,new A.o(B.c,v,r,s,v,v,B.n),v,v,v,v,B.n5,v,v,v)],x.p),B.l,v,B.e,B.N,0,B.p),v)},
gZ(d){return this.e}}
C.aBS.prototype={
a4(d,e){var w=e.ek(B.J),v=e.gdi(),u=this.c?0.8:0
return P.hiY(d,w,v*0.44,this.b,0,u)},
aF(d){return d.b!==this.b||d.c!==this.c}}
C.aAm.prototype={}
C.ava.prototype={
S(){return new C.avb(A.T(x.S,x.cq),null,null)},
gd1(){return this.d}}
C.avb.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hHi(w.c,w.e)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
gaFH(){var w=this.z
return w===$?this.z=this.Xw(0):w},
gj1(){var w,v=this.Q
if(v===$){w=this.gkS()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c1(w,-1,!1,x.S)}return v},
Xw(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aAm(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aAm(v[t],u[t],-1))
v=new A.e_()
v.cU(this.a.e*31+d)
B.d.e0(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.ds(w,w.r,w.e);w.C();){v=w.d
v.r.t()
v.r=null
u=v.eN$
u.b=!1
B.d.a8(u.a)
u=u.goD()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dV$.a.a8(0)
v.qJ()}this.bwW()},
cSb(d,e){var w,v,u,t,s,r=this
if(d>=r.gj1().length||r.gj1()[d]!==-1||B.d.q(r.gj1(),e))return
w=r.gaFH()[e]
v=r.gkS()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.cqU(r,e,w,v))
A.cz(B.lL,new C.cqV(r))
return}++r.r
u=A.bn(null,B.hM,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.m(new C.cqW(r,d,e,w,v))
u.cr(0)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkS()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cE(n,0,new C.cqX())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.cqY(t,r))
w=5
return A.b(C.BQ(t.a.d,r),$async$kN)
case 5:t.x=f
o=t.a
w=6
return A.b(C.BR(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.m(new C.cqZ())
w=1
break
case 4:for(o=t.as,n=new A.ds(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eN$
p.b=!1
B.d.a8(p.a)
p=p.goD()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dV$.a.a8(0)
q.qJ()}o.a8(0)
t.m(new C.cr_(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.as(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.q1,p,p,p),p,p,p)
v=r.f
v=A.as(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.VY,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tG(q,A.cn(A.a([D.ag4,w,v,B.aO,new C.Iu(u,t,r.ch,p),B.aO,A.as(C.ux("Back to the games",new C.cqQ(d),B.cT,B.ka,D.fB),p,p,p)],x.p),p,p,B.ac,p,p,B.ah,!1),B.f5,p)}w=r.gkS()
v=r.e
s=w[v]
return new C.tG(q,new A.D(B.t5,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aWl,B.K,p,p),A.E(A.cm(new C.cqR(r,s)),1)],x.p),B.l,p,B.e,B.h,0,B.p),p),B.f5,p)}}
C.bcQ.prototype={
a4(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.Y(b2,new C.cQV(),A.U(b2).k("Y<1>")).gJ(0),b4=a9.b,b5=b4.a5(0,B.JP)
$.S()
w=A.L()
w.r=D.lG.j(0.18+0.1*b3).gp(0)
b6.O(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a5(0,D.eqr)
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
o=new A.cd((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.ak(n)
j.ab()
if(m<1)for(o=new A.aH(l,j.b,j.c,b0,A.bp(k,!0,r)),n=A.a([],q),i=new A.uS(o,!1,n);i.C();){h=i.c
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
b6.af(new A.aH(l,d,b0,new A.c9([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aH(l,j.b,j.c,b0,A.bp(k,!0,r)),n=A.a([],q),k=new A.uS(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bi(A.jL(b1));--a0
k.jP()
a1=n[a0].b
a1===$&&A.c()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.S()
a4=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a4.r=D.Gu.gp(0)
a4.b=B.aa
a4.c=h
a4.d=B.bG
b6.af(new A.aH(l,a2,b0,new A.c9([new A.BN(k,a0),0,a1*m,!0]),a3),a4)
k.jP()
a4=n[a0].b
a4===$&&A.c()
a4=a4.a.length()
k.jP()
a5=n[a0].VX(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bW(new A.r(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a3.r=B.bc.gp(0)
b6.c_(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.iA(D.frB,B.a7,B.c_,new A.jj(1),b0,b0,b0,b0,B.c0,b0,B.cx)
a8.eo()
a8.a4(b6,new A.r(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aF(d){return!0}}
C.az7.prototype={
S(){return new C.az8(A.aR(x.S))},
gd1(){return this.d}}
C.az8.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hIc(w.c,w.e)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
Y(){this.a3()
this.b9w()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a2()},
b9w(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.dg(B.t0,new C.cFS(this))},
bqv(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkS()[v.e]
if(w.e[d]===w.b)v.m(new C.cG_(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cG0(v,d))
A.cz(B.iR,new C.cG1(v))}},
cXE(){var w=this
if(!w.as&&w.f<w.gkS()[w.e].d.length)w.m(new C.cG2(w))},
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
t.m(new C.cG3(t,s))
w=5
return A.b(C.BQ(t.a.d,s),$async$kN)
case 5:t.y=f
q=t.a
w=6
return A.b(C.BR(q.d,q.c.a,"who",t.r),$async$kN)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cG4())
w=1
break
case 4:t.m(new C.cG5(t))
t.b9w()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.as(A.d(""+a0.w+" of "+a0.gkS().length+" guessed",a2,a2,a2,a2,a2,a2,B.q1,a2,a2,a2),a2,a2,a2)
v=A.as(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.VY,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tG(a1,A.cn(A.a([D.beI,w,v,B.aO,new C.Iu(u,t,a0.ax,a2),B.aO,A.as(C.ux("Back to the games",new C.cFU(a3),B.cT,B.ka,D.fB),a2,a2,a2)],x.p),a2,a2,B.ac,a2,a2,B.ah,!1),B.f5,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkS()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.L5,B.K,a2,a2),B.T,A.as(A.lE(new C.cFV(a0,r),a2,B.b0,B.hM,a2,a2,new A.bq(a2,s,u),x.i),a2,a2,a2),B.aB],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.ay(B.cT,2,B.r,-1)
k=o+1
w.push(new A.r7(new A.bq(0,1,u),new C.cFW(),A.p(a2,new A.c7(B.aL,B.e,B.h,B.l,a2,B.p,a2,0,A.a([new A.qH(A.d(""+k,a2,a2,a2,a2,a2,a2,B.o6,a2,a2,a2),D.lF,a2,12,a2),B.at,new A.by(1,B.ba,A.d(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fEq,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.o(D.qp,a2,new A.bF(l,l,l,l),new A.be(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.cw,B.bj,a2,a2,a2),B.b0,B.iR,a2,new A.bh("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.as(A.bO(!1,D.h4S,a2,a2,!0,a2,a2,a2,a0.gcXD(),a2,a2),a2,a2,a2))
w.push(B.P)
if(a0.as){u=D.lG.j(0.2)
q=A.l(16)
p=A.K(D.lG,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fS,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.p(a2,A.x(A.a([m,B.T,C.ux(v,a0.gqs(a0),B.cT,B.jt,D.fB)],t),B.l,a2,B.e,B.h,0,B.p),B.f,a2,a2,new A.o(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bI,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dq:B.cT.j(0.2)
g=new A.aP(16,16)
l=new A.ay(n.q(0,o)?B.fh:B.cT,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bV:B.c
d=n.q(0,o)?B.xv:a2
t.push(new A.r7(new A.bq(0,i,u),new C.cFX(),A.az(a2,A.p(a2,A.d(f,a2,a2,a2,a2,a2,a2,new A.F(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.afd,new A.o(h,a2,new A.bF(l,l,l,l),new A.be(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jr,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cFY(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b0,B.mf,a2,new A.bh("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bZ(B.fU,t,B.br,a2,10,10))}return new C.tG(a1,A.cn(w,a2,a2,B.amS,a2,a2,B.ah,!1),B.f5,a2)}}
C.aA7.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.aHn.prototype={
aX(){this.b7()
this.b5()
this.dI()},
t(){var w=this,v=w.b8$
if(v!=null)v.a6(0,w.gdC())
w.b8$=null
w.a2()}}
C.afW.prototype={
arg(d){},
arM(){var w=this,v=w.q6(new C.f8f(w))
v.fX(0)
w.M3$!==$&&A.aQ()
w.M3$=v}}
C.aLb.prototype={
gbmW(d){var w=this.c
return B.a.aA(w,0,Math.min(this.d,w.length))},
W4(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.dg(D.alU,new C.fip(w))},
bsT(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.amm.prototype={
S(){return new C.amn(new C.amw(),A.a([],x.t),new A.eC(0,$.ax()),$,0,null,null)},
gd1(){return this.d}}
C.amn.prototype={
gMU(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEC(w.c,10,w.e,!0)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
ghd(d){var w,v=this,u=v.e
if(u===$){w=C.N7(v.a.c)
v.e!==$&&A.bD()
v.e=w
u=w}return u},
gqA(){var w=this.r
return w===$?this.r=new C.aLb(new C.bT6(this)):w},
gaq4(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gMU()[v].c)u.push(1)
return u.length},
gbmf(){var w=this.ghd(0)
return w.gzq()==null?"Elder":B.a.i(w.gzq().b)},
Y(){this.a3()
this.arM()},
t(){var w,v=this
v.gqA().t()
v.f.t()
w=v.M3$
w===$&&A.c()
w.t()
w=v.qe$
w.U$=$.ax()
w.R$=0
v.bwB()},
cMh(){var w=this
w.m(new C.bT3(w))
w.gqA().W4(w.gMU()[w.x].a)},
Lc(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqA()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.qe$.a
v.ax=u
v.ay=u+1
v.m(new C.bT1())
A.cz(B.hM,new C.bT2(v))},
bqr(){var w=this.gaq4(0)/this.gMU().length*100
if(w>=90)return D.f14
if(w>=75)return D.f_5
if(w>=60)return D.eQP
if(w>=45)return D.eUb
return D.eLg},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cuM()
w=A.bR(0,new A.en(A.b4(m,m,m,new C.btx(n,n.qe$),B.az),m),0,0,0)
if(!n.Q){v=D.qp.j(0.96)
u=A.l(20)
t=A.K(B.cT,B.r,3)
u=A.p(m,A.x(A.a([A.d("Elder "+n.gbmf()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aXe,B.K,m,m),B.T,C.ux("Start the test",n.gBZ(),B.cT,B.jb,D.fB)],x.p),B.l,m,B.e,B.N,0,B.p),B.f,m,m,new A.o(v,m,t,u,m,m,B.n),m,m,m,m,B.bI,m,m,m)
v=u}else{v=n.x
u=n.gMU()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aXg,m,m,m)
if(n.Q){t=n.gqA()
t=t.d<t.c.length}else t=!1
if(t)u=D.fk3
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.ay(D.BQ,4,B.r,-1)
s.push(A.az(m,A.p(m,A.d(q[r],m,m,m,m,m,m,D.fvn,B.K,m,m),B.f,m,D.afd,new A.o(D.bhA,m,new A.bF(o,o,o,o),new A.be(p,p,p,p),m,m,B.n),m,m,m,m,B.Ou,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bT4(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bZ(B.fU,s,B.br,new A.bh("o"+t,x.W),8,8)}u=A.x(A.a([v,B.am,A.oB(u,B.n0,A.pU(),B.b0,B.b0,A.LK())],x.p),B.l,m,B.e,B.N,0,B.p)
v=u}return new C.tG("Village School",new A.an(B.a0,m,B.ad,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.f5,m)},
cuM(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bqr(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gMU()[v].c)g.push(v)
u=A.l(22)
t=A.K(B.cT,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.fzT,B.K,i,i)
r=A.d("Signed by Elder "+j.gbmf(),i,i,i,i,i,i,D.fyw,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fDL,i,i,i),D.eDc],q)
o=A.d(h.b,i,i,i,i,i,i,D.fFJ,i,i,i)
n=j.gaq4(0)
m=j.gMU()
u=A.p(i,A.x(A.a([D.fR0,B.aw,s,r,B.T,new A.an(B.z,i,B.ad,B.t,p,i),o,B.am,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.ace,i,i,i),B.P,D.atK],q),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(D.qp,i,t,u,i,i,B.n),i,i,i,i,B.fu,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aB,new C.Iu(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aO,D.h5W,B.P],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.I)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.ay(B.bw,1,B.r,-1)
p=m[v]
u.push(A.p(i,A.x(A.a([A.d(p.a,i,i,i,i,i,i,B.h5,i,i,i),B.aw,A.d("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fB3,i,i,i),A.d(p.d,i,i,i,i,i,i,D.fDm,i,i,i)],q),B.E,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.dq,i,new A.bF(k,k,k,k),new A.be(r,r,r,r),i,i,B.n),i,i,i,B.cw,B.bj,i,i,i))}B.d.u(s,u)}s.push(B.aB)
s.push(A.as(C.ux("Back to the games",new C.bSY(j),B.cT,B.ka,D.fB),i,i,i))
return new C.tG("Village School",A.cn(s,i,i,B.bS,i,i,B.ah,!1),B.f5,i)}}
C.btx.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.qe$.a
a0.Gx(e.f.MF(a1))
w=C.heh(a1)
v=a0.c
J.br(v.save())
v.translate(w.a,w.b)
a0.bW(0,w.c)
if(e.Q){u=e.gqA()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.cZC[s]-6
$.S()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=D.Gh.gp(0)
a0.aE(new A.a5(u,340,u+12,450),r)}u=A.bx(D.aag.cq(10),B.i5)
$.S()
r=A.L()
r.r=D.BQ.gp(0)
a0.aq(u,r)
r=A.bx(D.aag,B.ir)
u=A.L()
u.san(A.jC(new A.r(30,96),new A.r(420,346),D.dis,f,B.x,f))
a0.aq(r,u)
q=new A.e_()
q.cU(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bW(new A.r(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=B.c.j(0.025).gp(0)
a0.c_(o,r)}u=A.L()
u.r=I.ajJ.gp(0)
a0.aE(new A.a5(30,354,420,362),u)
u=A.L()
u.r=B.aS.gp(0)
a0.aE(D.fbs,u)
u=A.L()
u.r=B.bL.gp(0)
a0.aE(D.fbw,u)
u=A.bx(D.fbm,B.iF)
r=A.L()
r.r=D.ZW.gp(0)
a0.aq(u,r)
n=B.j.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqA().gbmW(0)
m=A.fE(f,B.cx,f,7,f,A.cS(f,f,f,f,f,f,f,f,f,D.fI0,u+(t?"|":"")),B.a7,B.c_,f,B.dI,B.c0)
m.nA(346)
J.br(v.save())
u=A.i4(D.aag)
r=$.mH()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.i4(new A.a5(30+390*n,96,420,346)),r[1],!0)
m.a4(a0,new A.r(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bx(new A.a5(u,r,u+40,r+90),B.fR)
u=A.L()
u.r=D.bxi.gp(0)
a0.aq(r,u)}}else{m=A.fE(f,B.cx,f,f,f,D.frR,B.K,B.c_,f,B.dI,B.c0)
m.nA(340)
m.a4(a0,new A.r(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.j.F(u+p/8,1)
o=B.o.F(e.gqA().d*9,310)
k=Math.sin(p+r)
j=new A.ar(B.S,B.Q,B.V,B.X,B.U)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.O(new A.r(70+o+k*6,166+l*70),1.6,j)}u=e.ghd(0).gzq()
i=(u==null?f:u.c)===D.oB?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.f8g(d,a0,i,t,h,D.erB)),new A.y(520,new C.f8h(a0,d,t)),new A.y(575,new C.f8i(a0,d,t)),new A.y(585,new C.f8j(this,a0,d,t)),new A.y(615,new C.f8k(this,t,a0,d,h))],x.E)
B.d.b_(g,new C.f8l())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
ccN(d,e){var w,v,u,t,s,r,q,p=$.S(),o=A.a([],x.v),n=new A.aH(p.r,B.aj,null,null,o)
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
aF(d){return!1}}
C.amk.prototype={
S(){return new C.aml(new C.amw(),A.T(x.S,x.i),new A.eC(0,$.ax()),$,0,null,null)},
gd1(){return this.d}}
C.aml.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hH6(w.c,w.e)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
gj1(){var w=this.z
return w===$?this.z=this.FM(0):w},
gaLW(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.FM(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.cn(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.FM(0):r).length);++v}s.Q=w
r=w}return r},
FM(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e5(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e_()
u.cU(this.a.e+d*7)
B.d.e0(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.f0(u,new C.bSK())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Y(){this.a3()
this.arM()},
t(){var w,v=this
v.e.t()
w=v.M3$
w===$&&A.c()
w.t()
w=v.qe$
w.U$=$.ax()
w.R$=0
v.bwA()},
arg(d){var w,v,u,t,s,r=this,q=r.gj1().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.cn(u===$?r.z=r.FM(0):u,v)
s=r.gaLW()
s[v]=s[v]+(450*(t+0.5)/q-r.gaLW()[v])*Math.min(1,w)}},
d2_(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj1().length)return
w=v.y
if(w===-1){v.m(new C.bSV(v,d))
return}if(w===d){v.m(new C.bSW(v))
return}v.m(new C.bSX(v,B.d.cn(v.gj1(),v.y),d,B.d.cn(v.gj1(),d)))},
cMZ(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.FM(0):u).length))break
t=s.gkS()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.FM(0):u)[v]]===v);++v}s.m(new C.bSQ(s,B.d.cC(w,new C.bSR())))},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkS().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bSS(t,s))
w=5
return A.b(C.BQ(t.a.d,s),$async$kN)
case 5:t.x=f
q=t.a
w=6
return A.b(C.BR(q.d,q.c.a,"lineup",t.r*10),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bST())
w=1
break
case 4:t.m(new C.bSU(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.as(A.d(""+l.r+" of "+l.gkS().length+" lines right",k,k,k,k,k,k,B.q1,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tG("Line Up",A.cn(A.a([D.ag4,w,B.aO,new C.Iu(v,u,l.ch,k),B.aO,A.as(C.ux("Back to the games",new C.bSM(d),B.cT,B.ka,D.fB),k,k,k)],x.p),k,k,B.ac,k,k,B.ah,!1),B.f5,k)}w=A.a([],x.t)
for(t=0;v=l.gkS(),t<v[l.f].d.length;++t)w.push(t)
B.d.b_(w,new C.bSN(l))
u=A.bR(0,A.cm(new C.bSO(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aXg,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.fAk,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fCA,B.K,k,k)],q),B.l,k,B.e,B.h,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.l(16)
n=l.ax
m=A.K(n?D.lG:G.nq,B.r,2)
r.push(A.p(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bSP(l),x.cM).aM(0,", then ")+".",k,k,k,k,k,k,D.fEO,k,k,k),B.f,k,k,new A.o(p,k,m,o,k,k,B.n),k,k,k,B.d9,B.bj,k,k,1/0))}if(!l.at)r.push(C.ux("That is my line!",l.gcMY(l),B.cT,B.hc,D.fB))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.ux(w,l.gqs(l),B.cT,B.jt,D.fB))}return new C.tG("Line Up",new A.an(B.a0,k,B.ad,B.t,A.a([u,s,A.ao(12,A.x(r,B.l,k,B.e,B.N,0,B.p),k,k,12,12,k,k)],q),k),B.f5,k)}}
C.bk0.prototype={
a4(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.qe$.a
c7.Gx(c5.e.MF(c8))
w=C.heh(c8)
v=c7.c
J.br(v.save())
v.translate(w.a,w.b)
c7.bW(0,w.c)
u=c5.gj1().length
t=$.S().r
s=x.v
r=new A.aH(t,B.aj,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.cd(225,500,440,470))
q=A.L()
q.r=D.ZW.gp(0)
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
m.r=[B.cT,G.nq,D.lG,B.aG][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b1B(c7,"OLDEST",D.esz,B.cT)
this.b1B(c7,"YOUNGEST",D.es1,B.bc)
t=A.bx(D.fbg,B.fR)
s=A.L()
s.r=D.Gh.gp(0)
c7.aq(t,s)
s=A.bx(D.fbf,B.ir)
t=A.L()
t.r=D.BQ.gp(0)
c7.aq(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.b_(t,new C.ds9())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.I)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.cn(a1===$?c5.z=c5.FM(0):a1,f)
o=c5.gaLW()[f]
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
c7.O(new A.r(o,520),54,a9)}a9=D.dmi[B.o.F(b0,6)]
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
else b9=a3?D.euH:c4
if(b1)c0=new A.r(3+b2*8,-56)
else if(h&&a7)c0=D.aN3
else c0=a3?new A.r(30,-104+Math.sin(e)*5):c4
C.SH(c7,new A.r(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.JR,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.iA(new A.eq(a8,c4,c4,B.cL,c4,c4,c4,c4,c4,c4,D.fy1),B.a7,B.c_,new A.jj(1),"\u2026",c4,1,c4,B.c0,c4,B.cx)
c1.nA(q)
c2=A.bx(A.bW(new A.r(o,650),24,c1.b.c+16),B.fR)
$.S()
a8=new A.ar(B.S,B.Q,B.V,B.X,B.U)
if(a6)a9=B.iz
else a9=a7?B.rU:D.qp
a8.r=a9.gp(0)
c7.aq(c2,a8)
a8=new A.ar(B.S,B.Q,B.V,B.X,B.U)
if(a6)a9=D.lG
else a9=a7?G.nq:D.lF
a8.r=a9.gp(0)
a8.b=B.aa
a8.c=2
c7.aq(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a4(c7,new A.r(o-a9/2,650-a8.gba(a8)/2))
c3=new A.iA(new A.eq(""+(a2+1),c4,c4,B.cL,c4,c4,c4,c4,c4,c4,D.fyl),B.a7,B.c_,new A.jj(1),c4,c4,c4,c4,B.c0,c4,B.cx)
c3.eo()
c3.a4(c7,new A.r(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.j.F(p*53+Math.sin(c5+p)*20,450)
q=B.j.F(t+p*37,420)
J.br(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bW(B.J,4,8)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=[B.cT,G.nq,D.lG,B.aG,B.c][B.o.F(p,5)].gp(0)
c7.aE(q,m)
v.restore()}v.restore()},
b1B(d,e,f,g){var w,v,u=null,t=A.fE(u,B.cx,u,u,u,A.cS(u,u,u,u,u,u,u,u,u,A.m(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,I.DO,u,u),e),B.a7,B.c_,u,B.dI,B.c0)
t.eo()
w=t.b
v=w.c
w=w.a.c
t.a4(d,f.aJ(0,new A.r(v/2,w.gba(w)/2)))},
aF(d){return!1}}
C.a2d.prototype={
a7(){return"_Trip."+this.b}}
C.amg.prototype={
S(){return new C.amh(D.XK,new A.eC(0,$.ax()),$,0,null,null)},
gd1(){return this.d}}
C.amh.prototype={
gDx(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEC(w.c,8,w.e,!1)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
ghd(d){var w,v=this,u=v.e
if(u===$){w=C.N7(v.a.c)
v.e!==$&&A.bD()
v.e=w
u=w}return u},
gqA(){var w=this.f
return w===$?this.f=new C.aLb(new C.bSw(this)):w},
gU2(){var w=this.ghd(0)
return w.gzq()==null?"Grandma":B.a.i(w.gzq().b)},
Y(){this.a3()
this.arM()},
t(){var w,v=this
v.gqA().t()
w=v.M3$
w===$&&A.c()
w.t()
w=v.qe$
w.U$=$.ax()
w.R$=0
v.bwz()},
arg(d){var w,v,u,t=this
if(t.r!==D.ae_)return
w=B.dH.az(0,B.j.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDx()
if(v+1>=u.length){t.r=D.ae0
t.X1()}else{++t.w
t.ay=!1
t.r=D.XL
t.gqA().W4(u[t.w].a)}if(t.c!=null)t.m(new C.bSu())}},
X1(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$X1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqA().W4("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDx().length
r=C.bGU(t,u.z,s)
u.as=r
w=2
return A.b(C.BQ(u.a.d,r),$async$X1)
case 2:u.at=e
s=u.a
w=3
return A.b(C.BR(s.d,s.c.a,"journey",u.x*10),$async$X1)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bSo())
return A.h(null,v)}})
return A.i($async$X1,v)},
brL(){this.aUE()},
aUE(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.ae_
if(w.c!=null)w.m(new C.bSp())},
Lc(d){var w,v,u,t,s=this
if(s.r!==D.XL)return
w=s.gDx()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bSt(s,d,v))
u=s.gqA()
t=s.w
u.W4(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cSa(){if(this.r!==D.Bm)return
this.aUE()},
B(d){var w,v,u,t=this,s=null,r=A.bR(0,new A.en(A.b4(s,s,s,new C.bjr(t,t.qe$),B.az),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDx().length;++w){v=t.w
if(w<v||t.r===D.ae0)v=B.cT
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(new A.by(1,B.ba,A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,B.wG,s,s,s,s),s))}p.push(B.bn)
p.push(D.fSF)
return new C.tG("Safari Journey",new A.an(B.a0,s,B.ad,B.t,A.a([r,A.ao(s,A.A(p,B.l,s,B.e,B.h,0,s,s),s,s,12,12,2,s),A.ao(10,t.cmq(),s,s,10,10,s,s)],q),s),B.f5,s)},
cmq(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bSs(o),l=D.qp.j(0.96),k=A.l(22),j=A.K(B.cT,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gU2()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aXe,B.K,n,n),B.T,C.ux("Start the journey",o.gbrK(),B.cT,D.bS3,D.fB)],x.p),B.l,n,B.e,B.N,0,B.p)
break
case 3:w=D.bei
break
case 1:w=o.w
v=o.gDx()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.ay(D.lF,2.5,B.r,-1)
t.push(A.az(n,A.p(n,A.d(r[s],n,n,n,n,n,n,D.aWB,B.K,n,n),B.f,n,D.afk,new A.o(D.akS,n,new A.bF(p,p,p,p),new A.be(q,q,q,q),n,n,B.n),n,n,n,n,V.wA,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bSq(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.P,A.bZ(B.bH,t,B.br,n,8,8)],u),B.E,n,B.e,B.N,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDx().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.P,new A.bJ(B.a8,n,n,C.ux(v,o.gcS9(),B.cT,B.jt,D.fB),n)],x.p),B.E,n,B.e,B.N,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gU2()),B.P,A.d(""+o.x+" of "+o.gDx().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aWT,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aRc(v)
u=C.aRc(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.ace,n,n,n))}w.push(B.P)
w.push(A.as(C.ux("Back to the games",new C.bSr(o),B.cT,B.ka,D.fB),n,n,n))
w=A.x(w,B.E,n,B.e,B.N,0,B.p)
break
default:w=n}return A.p(n,w,B.f,n,n,new A.o(l,n,j,k,D.aEd,n,B.n),n,n,n,n,B.bj,n,n,n)}}
C.bjr.prototype={
a4(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.qe$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDx(),d0=B.j.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.ae_,d2=c7*0.5
c8=A.ap(D.bj3,D.btD,d0)
c8.toString
w=A.ap(D.Z5,G.aiv,d0)
w.toString
v=A.ap(B.un,D.bs1,d0)
v.toString
$.S()
u=A.L()
t=x.O
u.san(A.jC(B.J,new A.r(0,d2),A.a([c8,w,v],t),G.a59,B.x,c3))
d3.aE(new A.a5(0,0,0+c6,0+c7),u)
s=new A.r(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.L()
u.san(A.we(s,60,A.a([D.bsq,B.L],t),c3,B.x,c3,c3,0))
d3.O(s,60,u)
u=A.L()
u.r=B.Zi.gp(0)
d3.O(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.j.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dBX[o]
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
k.r=A.ap(l===0?D.bhC:D.bwJ,D.bmC,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.ccO(d3,new A.r(B.j.F(B.j.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.S()
w=A.L()
v=A.ap(D.ak2,D.Gu,d0)
v.toString
w.san(A.jC(new A.r(0,d2),new A.r(0,c7),A.a([v,D.bss],t),c3,B.x,c3))
d3.aE(new A.a5(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.L()
w.r=D.blT.gp(0)
d3.aE(new A.a5(0,a0,c6,a1),w)
w=A.L()
w.r=D.bwl.gp(0)
d3.aE(new A.a5(0,a0-3,c6,a0),w)
for(q=-B.j.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.r=I.N1.gp(0)
d3.aE(new A.a5(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.S()
b2=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b2.r=D.bhh.gp(0)
d3.aE(new A.a5(b0,v,b0+52,u),b2)
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
b0.r=D.buu.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b1.r=D.fB.gp(0)
d3.aE(new A.a5(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b0.r=D.Gh.gp(0)
d3.aE(new A.a5(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bx(new A.a5(b0,a4,b0+60,a5),B.jy)
b0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b0.r=D.bxN.gp(0)
d3.aq(b5,b0)
b0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b0.r=D.BQ.gp(0)
b0.b=B.aa
b0.c=2
d3.aq(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.iA(new A.eq(b6,c3,c3,B.cL,c3,c3,c3,c3,c3,c3,D.fws),B.a7,B.c_,new A.jj(1),c3,c3,c3,c3,B.c0,c3,B.cx)
b7.eo()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a4(d3,new A.r(b4-b1/2,a2-b0.gba(b0)/2))
if(a7)b8=c4.r===D.ae0
else if(r===c4.w){b0=c4.r
b0=b0===D.XL||b0===D.Bm
b8=b0}else b8=!1
if(a7){b0=c4.ghd(0).gzq()
b9=(b0==null?c3:b0.c)===D.oB?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqA()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.Bm
b0=c0?C.hDa(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.XL?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.r(40,-110+Math.sin(g)*10)
else a7=c0?new A.r(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.SH(d3,new A.r(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.r(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bIS(d3,new A.r(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.j.F(w+r/7,1)
$.S()
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=D.bvQ.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.XK)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.j.F(w+r/5,1)
t=Math.sin(r+c8)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.Bm&&c4.ax){b7=A.fE(c3,B.cx,c3,c3,c3,A.cS(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.m(c3,c3,B.cT,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,A6.IP,c3,c3),"BEEP BEEP!"),B.a7,B.c_,c3,B.dI,B.c0)
b7.eo()
b7.a4(d3,new A.r(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
ccO(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ap(D.brW,D.ble,g)
o.toString
if(f){w=new A.aH($.S().r,B.aj,null,null,A.a([],x.v))
v=e.a
u=e.b
w.E(new A.aZ(v-16,u))
t=u-36
s=u-56
w.E(new A.cd(v-9,t,v-7,s))
w.E(new A.aq(v+7,s))
w.E(new A.cd(v+9,t,v+16,u))
w.E(new A.bw())
t=A.L()
t.r=D.a_s.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d2D[r]
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=D.a_s.gp(0)
p.c=4
p.d=B.bG
d.ah(new A.r(w,t),new A.r(v+q*24,s),p)
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=o.gp(0)
d.O(new A.r(v+q*26,u),10,p)}}else{w=e.a5(0,D.euE)
$.S()
v=A.L()
v.r=D.bhj.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bW(e.a5(0,D.euF),16,60)
w=A.L()
w.r=o.gp(0)
d.c_(v,w)}},
bIS(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.XK?0.045:0,a1=a2.c
J.br(a1.save())
a1.translate(a3.a,a3.b+e)
a2.jq(0,a0)
for(w=0;w<2;++w){v=D.du5[w]
u=d.ay&&d.r!==D.XK&&v>0
J.br(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.S()
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.bwA.gp(0)
a2.O(B.J,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.boG.gp(0)
a2.O(B.J,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=B.bh.gp(0)
q.c=2
a2.ah(B.J,new A.r(s*9,t*9),q)}a1.restore()}p=A.u4(D.fbD,B.fR,B.fR,B.iq,B.hU)
$.S()
t=A.L()
t.san(A.jC(D.eqH,B.a9a,D.djQ,G.a59,B.x,f))
a2.aq(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.ddN[B.o.F(o,4)].gp(0)
a2.aE(new A.a5(t,-26,t+10,-19),s)}n=d.r===D.Bm&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a5(s,-66,q,-36)
J.br(a1.save())
a1.clipRRect(A.n2(A.bx(l,B.nZ)),$.mG(),!0)
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.r=D.Z5.gp(0)
a2.aE(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.Bm?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.SH(a2,new A.r(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aMV,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bx(l,B.nZ)
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.r=D.akU.gp(0)
i.b=B.aa
i.c=2
a2.aq(j,i)}d=A.bx(D.V3,B.nZ)
t=A.L()
t.r=D.Z5.gp(0)
a2.aq(d,t)
J.br(a1.save())
a1.clipRRect(A.n2(A.bx(D.V3,B.nZ)),$.mG(),!0)
C.SH(a2,new A.r(D.V3.gbE().a,-10),0,0,0.7,-0.1,f,f,D.aMV,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bx(D.V3,B.nZ)
d=A.L()
d.r=D.akU.gp(0)
d.b=B.aa
d.c=2
a2.aq(t,d)
d=A.L()
d.r=Am.Cf.gp(0)
a2.O(D.esO,4,d)
d=A.L()
d.r=D.Gh.gp(0)
a2.aE(D.fcM,d)
for(w=0;w<3;++w){v=D.du7[w]
d=A.bx(new A.a5(v,-96,v+28,-79),B.jy)
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=D.Gu.gp(0)
a2.aq(d,t)}a1.restore()},
aF(d){return!1}}
C.aBV.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.bh_.prototype={}
C.aBX.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.bh0.prototype={}
C.aBY.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.bh1.prototype={}
C.a6F.prototype={
B(d){var w=null
return new A.a4(1/0,this.c,A.b4(w,w,w,new C.bjy(w),B.az),w)}}
C.bjy.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.ds1[B.o.F(n,6)]
k=$.S()
j=new A.ar(B.S,B.Q,B.V,B.X,B.U)
j.r=l.gp(0)
d.aE(new A.a5(m,0,m+v,u),j)
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
aF(d){return!1}}
C.tG.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aI(w,w,w,w,B.Qn,w,w,w,new C.bSn(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a2,w,w,w,D.ftK,w,w,w),1)],v)
B.d.u(u,this.e)
return A.c4(w,D.YR,A.p(w,A.bm(!0,A.x(A.a([D.c6S,new A.D(D.bIV,A.A(u,B.l,w,B.e,B.h,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.b9z,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.Iu.prototype={
B(d){var w=null,v=this.d,u=C.aRc(v),t=C.ilb(v),s=B.c.j(0.08),r=A.l(18),q=A.K(B.cT.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fwd,w,w,w)],x.p)
if(this.e)p.push(D.ex4)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.h5,w,w,w))
if(t!=null)p.push(new A.D(B.uG,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.B0,w,w,w),w))
return A.p(w,A.x(p,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.n),w,w,w,w,B.bI,w,w,w)}}
C.Wq.prototype={
S(){return new C.bml(A.T(x.N,x.S),B.o.F(Date.now(),1e5))},
cZ2(d){return this.f.$1(d)},
ge3(){return this.d}}
C.bml.prototype={
gT1(){var w=this.d
return w===$?this.d=this.a.c:w},
Y(){this.a3()
this.PG()},
PG(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$PG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bT8(u.a.d),$async$PG)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.dhR[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bT7(p,(o===$?u.d=q.c:o).a,r),$async$PG)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.e2x(u,n))
return A.h(null,v)}})
return A.i($async$PG,v)},
uC(d){return this.cps(d)},
cps(d){var w=0,v=A.j(x.H),u=this,t
var $async$uC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a6(t,!1).ce(A.ed(new C.e2y(d),!1,null,x.H)),$async$uC)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.PG()
return A.h(null,v)}})
return A.i($async$uC,v)},
gb6V(){var w,v,u,t=C.N7(this.gT1()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)s.push(B.a.i(w[u].b))
return s},
a2H(d){return this.cwE(d)},
cwE(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a2H=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.I)(d),++s)r.push(d[s].aj())
w=2
return A.b(u.a.cZ2(r),$async$a2H)
case 2:if(u.c!=null)u.m(new C.e2z(u,r))
return A.h(null,v)}})
return A.i($async$a2H,v)},
OZ(d){return this.bRB(d)},
bRB(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$OZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hgx(t.gT1())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.MS("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a6(s,!1).ce(A.ed(new C.e2v(q),!1,null,r)),$async$OZ)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.I)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bk(j,new C.e2w(p))
o=s.length
B.d.c9(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a2H(A.cX(s,0,A.dD(2,"count",x.S),r).dq(0)),$async$OZ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OZ,v)},
XY(d,e){return this.bPa(0,e)},
bPa(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$XY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cg(null,null,!0,null,new C.e2u(e),o,null,!0,!0,x.y),$async$XY)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hgx(u.gT1()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.I)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a2H(o),$async$XY)
case 5:case 3:return A.h(null,v)}})
return A.i($async$XY,v)},
aam(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e2r(this,j):h
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
r.push(A.p(p,A.d(i,p,p,p,p,p,p,D.fuD,p,p,p),B.f,p,p,new A.o(B.hL,p,p,q,p,p,B.n),p,p,p,p,B.CO,p,p,p))
return A.az(p,A.d3(A.p(p,A.x(A.a([A.A(r,B.l,p,B.e,B.h,0,p,p),B.b3,A.d(e,p,2,p,p,p,p,D.fCt,p,p,p),B.cQ,A.d(f,p,3,B.a2,p,p,p,D.fvl,p,p,p)],s),B.E,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a7(B.ay,B.aC,B.x,w,p,p),B.n),p,p,p,p,B.yT,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
Xr(d,e,f,g,h,i){return this.aam(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.N7(s.gT1()),p=s.gT1(),o=C.aRc(s.e),n=C.hgx(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e2A(s),k=C.hH6(p,1).length,j=C.hHi(p,1).length,i=C.hIc(p,1).length,h=B.c.j(0.07),g=A.l(20),f=A.K(B.cT.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,K.ac3,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.fzX,r,r,r),a0=q.b.length,a1=x.p
g=A.p(r,A.A(A.a([e,B.bb,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.Wc,r,r,r)],a1),B.E,r,B.e,B.h,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.q1,r,r,r),D.fYZ],a1),B.l,r,B.e,B.h,0,B.p)],a1),B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.o(h,r,f,g,r,r,B.n),r,r,r,r,B.bI,r,r,r)
f=s.Xr("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aD,new C.e2B(s,p),l.$1("kahoot"))
h=s.Xr("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lF,new C.e2C(s,p),l.$1("fire"))
a0=s.Xr("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.wo,new C.e2D(s,p),l.$1("catch"))
j=j!==0?new C.e2G(s,p):r
j=s.aam("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hI,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e2H(s,p):r
i=s.aam("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.lE,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.Xr("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.fm,new C.e2I(s,p),l.$1("journey"))
k=k!==0?new C.e2J(s,p):r
k=A.a([g,B.aO,D.h2_,B.P,A.l_(0.98,A.a([f,h,a0,j,i,e,s.aam("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.ep,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.Xr("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d5,new C.e2K(s,p),l.$1("school"))],a1),2,12,12,r,B.e_,!0),B.da,A.A(A.a([D.bKJ,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fuH,r,r,r)],a1),B.l,r,B.e,B.h,0,r,r),B.P],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.I)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.ay(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fJA,B.bb,new A.by(1,B.ba,A.x(A.a([A.d(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hu,r,r,r),A.d(""+v.gapJ(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.B0,r,r,r)],a1),B.E,r,B.e,B.h,0,B.p),r)],a1)
if(v.gapJ(0).length>=2){f=D.lG.j(0.2)
t=new A.ay(D.lG,1,B.r,-1)
g.push(A.az(r,A.p(r,A.W(B.hd,D.lG,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bF(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e2L(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cT.j(0.2)
t=new A.ay(B.cT,1,B.r,-1)
f=A.az(r,A.p(r,A.W(B.jb,B.cT,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bF(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e2M(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fh.j(0.2)
t=new A.ay(B.fh,1,B.r,-1)
B.d.u(g,A.a([B.bn,f,B.bn,A.az(r,A.p(r,A.W(B.ej,B.fh,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bF(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e2N(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.p(r,new A.c7(B.aL,B.e,B.h,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bF(u,u,u,u),new A.be(h,h,h,h),r,r,B.n),r,r,r,B.d9,B.bj,r,r,r))}if(s.a.e){j=m?new C.e2E(s):new C.e2F(a2)
i=A.l(18)
h=A.K(m?B.cT:B.aT,B.r,2)
g=m?B.cT.j(0.12):B.dq
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.az(r,A.p(r,A.as(A.d(f,r,r,r,r,r,r,A.m(r,r,m?B.cT:B.aE,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.n),r,r,r,r,B.Oi,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.h2W)
k.push(B.aB)
k.push(D.atK)
return new C.tG("Family Games \xb7 "+p.b,A.cn(k,r,r,D.bEW,r,r,B.ah,!1),B.f5,r)}}
C.a06.prototype={
a7(){return"_KPhase."+this.b}}
C.ami.prototype={
S(){return new C.amj(D.b1v)},
gd1(){return this.e}}
C.amj.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a2()},
fX(d){var w,v=this
v.m(new C.bSI(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.dg(B.fL,new C.bSJ(v))},
aQ8(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.m(new C.bSy(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.dg(B.ff,new C.bSz(w))},
Lc(d){var w
if(this.d!==D.adu)return
w=this.at
if(w!=null)w.a1(0)
this.b6R(d)},
b6R(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.j.V(500+500*B.j.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bSE(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cz(B.t0,v.giA(v))},
cLB(d){var w=this
if(w.d!==D.Xh)return
if(w.e+1>=w.a.w.length)w.YK()
else{w.m(new C.bSF(w))
w.aQ8()}},
YK(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$YK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bGU(p,u.w,t)
u.m(new C.bSB(u,s))
w=2
return A.b(C.BQ(u.a.e,s),$async$YK)
case 2:r=e
t=u.a
w=3
return A.b(C.BR(t.e,t.f,t.r,u.f),$async$YK)
case 3:q=e
if(u.c!=null)u.m(new C.bSC(u,r,q))
return A.h(null,v)}})
return A.i($async$YK,v)},
cMq(){var w,v,u,t,s=this,r=s.a,q=new A.e_()
q.cU(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.b5("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.e0(r,q)
for(r=A.cX(r,0,A.dD(4,"count",x.S),A.U(r).c),u=r.$ti,r=new A.bQ(r,r.gJ(0),u.k("bQ<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b5(t,B.j.V(w*(0.35+q.ai()*0.5)),!1))}B.d.b_(v,new C.bSG())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b1v===r){w=A.a([D.fZn,B.T,A.d(s,t,t,t,t,t,t,B.Wm,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.fuP,t,t,t))
w.push(B.aB)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.B6,B.K,t,t))
w.push(B.e1)
w.push(C.ux("Play",u.geX(u),B.cT,B.hd,D.fB))
w=A.as(new A.D(B.eA,A.x(w,B.l,t,B.e,B.N,0,B.p),t),t,t,t)
break A}if(D.b1w===r){w=A.as(A.d(""+u.z,t,t,t,t,t,t,D.fD0,t,t,t),t,t,t)
break A}if(D.adu===r||D.Xh===r){w=u.cs3()
break A}if(D.b1x===r){w=u.ccP()
break A}w=t}return new C.tG(s,w,B.f5,t)},
cs3(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.Xh,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aWq,j,j,j),B.b3],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.L5,j,j,j))
g.push(B.at)
f=A.l(14)
g.push(A.p(j,A.d(""+k.f,j,j,j,j,j,j,B.iH,j,j,j),B.f,j,j,new A.o(B.bw,j,j,f,j,j,B.n),j,j,j,j,B.CB,j,j,j))
g=A.A(g,B.l,j,B.e,B.h,0,j,j)
f=A.l(6)
w=i?0:B.j.D(k.as/k.a.w[k.e].r,0,1)
f=A.bu(f,A.kr(B.bw,j,k.as<5?B.fh:B.cT,9,j,w,j),B.aq)
w=A.l(22)
v=A.K(B.cT,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.m(j,j,e?D.lG:G.nq,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.P,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.ftT,B.K,j,j)],h),B.l,j,B.e,B.N,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fFc,B.K,j,j)
w=A.E(A.p(j,A.as(u,j,j,j),B.f,j,j,new A.o(D.qp,j,v,w,j,j,B.n),j,j,j,j,B.fu,j,j,1/0),3)
v=A.a([],h)
for(u=k.giA(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bSD(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aDQ[o]
m=new A.aP(16,16)
l=new A.ay(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.d(D.aE9[o],j,j,j,j,j,j,D.fvO,j,j,j),B.at,new A.by(1,B.ba,A.d(r[t],j,3,B.a2,j,j,j,D.fuM,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(Q.asd)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bZx)
v.push(A.az(j,new A.SX(A.p(j,new A.c7(B.aL,B.e,B.h,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bF(l,l,l,l),new A.be(m,m,m,m),W.aCe,j,B.n),j,j,j,j,B.f3,j,j,j),p,B.b0,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.am,f,B.af,w,B.af,A.E(A.l_(1.45,v,2,10,10,j,B.e_,!1),4)],h)
if(i)h.push(D.ewk)
return new A.D(B.a16,A.x(h,B.l,j,B.e,B.h,0,B.p),j)},
ccP(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cMq(),m=x.p,l=A.a([D.bdA,A.as(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.q1,o,o,o),o,o,o),A.as(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.VY,o,o,o),o,o,o),B.aO],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cT.j(0.25):B.dq
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.cT:B.bw,1,B.r,-1)
q=A.d(w<3?D.dk6[w]:""+(w+1),o,o,o,o,o,o,B.mC,o,o,o)
s=s?B.u:B.O
l.push(A.p(o,new A.c7(B.aL,B.e,B.h,B.l,o,B.p,o,0,A.a([new A.a4(34,o,q,o),new A.by(1,B.ba,A.d(t.a,o,o,o,o,o,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.d(""+t.b,o,o,o,o,o,o,B.iH,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bF(r,r,r,r),new A.be(u,u,u,u),o,o,B.n),o,o,o,B.cw,B.eV,o,o,o))}l.push(B.T)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.Iu(m,v,p.CW,o))
l.push(B.aO)
l.push(A.as(C.ux("Back to the games",new C.bSA(p),B.cT,B.ka,D.fB),o,o,o))
return A.cn(l,o,o,B.fu,o,o,B.ah,!1)}}
C.U5.prototype={
S(){return new C.amf(A.T(x.de,x.er))}}
C.amf.prototype={
gDb(){var w,v=this,u=v.d
if(u===$){w=C.hmu(v.a.c.aj())
v.d!==$&&A.bD()
v.d=w
u=w}return u},
glV(d){var w,v,u=this,t=u.e
if(t===$){w=u.gDb().b
v=$.ax()
u.e!==$&&A.bD()
t=u.e=new A.au(new A.ba(w,B.b6,B.aP),v)}return t},
cfQ(d){return this.f.c4(0,d,new C.bS8(d))},
Y(){this.a3()
var w=this.gDb().c
if(w.length===0)w.push(C.h84(null,0,20,""))},
t(){var w,v,u=this.glV(0)
u.U$=$.ax()
u.R$=0
for(u=this.f,u=new A.ds(u,u.r,u.e);u.C();)for(w=J.aT(u.d);w.C();){v=w.gP(w)
v.U$=$.ax()
v.R$=0}this.a2()},
cLr(){if(this.gDb().c.length>=12)return
this.m(new C.bS9(this))},
jH(d){var w,v,u=this,t=u.gDb()
t.b=B.a.i(u.glV(0).a.a)
w=t.gapJ(0)
if(t.b.length===0||w.length<2){u.c.L(x.q).f.T(D.fmO)
return}v=t.c
B.d.a8(v)
B.d.u(v,w)
v=u.c
v.toString
A.a6(v,!1).N(t)},
B(d){var w,v,u=this,t=null,s=new C.bSj(),r=x.p,q=A.a([A.bO(!1,D.fOB,t,t,!0,t,t,t,u.gbqC(u),t,t)],r),p=A.a([D.h2x,B.af,A.aN(t,B.Z,!1,t,!0,B.t,t,A.aO(),u.glV(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ak,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ac,t,t,t,t,t,t,t,t,t,t,t,B.h5,!0,B.a7,t,B.ao,t,t,t,t),B.aB],r)
for(w=0;v=u.gDb().c.length,w<v;++w)B.d.u(p,A.a([new A.fh(new C.bSi(u,w,s),t)],r))
if(v<12)p.push(A.as(C.ux("\uff0b Add a question",u.gcLq(),B.aT,t,B.c),t,t,t))
return new C.tG("Make your game",A.cn(p,t,t,D.bET,t,t,B.ah,!1),q,t)}}
C.arn.prototype={
S(){return new C.aFu(A.a([],x._))},
bv(){return this.r.$0()},
qt(){return this.w.$0()},
ge3(){return this.c}}
C.aFu.prototype={
Y(){var w,v
this.a3()
this.wy()
w=this.a
v=w.c
if(v.length!==0)C.a8p(v,w.e,w.d.w)},
wo(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hjh(r,t.e,!1,s.w,new C.e4c(u),null,s),$async$wo)
case 2:w=3
return A.b(u.wy(),$async$wo)
case 3:return A.h(null,v)}})
return A.i($async$wo,v)},
a0T(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a0T=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hjh(r,t.e,!0,s.w,new C.e4b(u),null,s),$async$a0T)
case 2:w=3
return A.b(u.wy(),$async$a0T)
case 3:return A.h(null,v)}})
return A.i($async$a0T,v)},
wy(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wy=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Bj(q.a.c),$async$wy)
case 7:p=e
if(q.c!=null)n=q.e||J.cJ(p)
else n=!1
if(n)q.m(new C.e4e(q,p))
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
return A.b(C.Hk(q.a.c).dg(0,B.qB),$async$wy)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.e4f(q,o))
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
if(q.c!=null&&q.e)q.m(new C.e4g(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wy,v)},
Pk(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Pk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.L(s).f.T(D.fmo)
w=3
return A.b(C.Hk(t.a.c),$async$Pk)
case 3:r=e
w=4
return A.b(C.fYy(t.a.c,r),$async$Pk)
case 4:q=e
w=5
return A.b(C.Hk(t.a.c),$async$Pk)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.e4a(t,p))
o=t.c.L(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(null,null,null,q?B.dJ:B.d0,null,B.t,null,s,null,B.lK,null,null,null,null,null,null,null,null,null,null))
t.a.qt()
case 1:return A.h(u,v)}})
return A.i($async$Pk,v)},
Iy(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Iy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.itj(l),$async$Iy)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hXp(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b1A(q,p.e,l,"Each family tree costs $"+B.j.ad(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Iy)
case 4:if(!e||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
p=C.hDk(r)
o=Date.now()
n=t.a.c
m=new C.kZ(l,r.toUpperCase(),p,!0,B.Z,D.DW,new A.V(o,0,!1),0,n,D.uO,B.ce)
w=5
return A.b(C.a43(n,m),$async$Iy)
case 5:w=6
return A.b(t.wy(),$async$Iy)
case 6:t.a.bv()
t.a.qt()
if(t.c==null){w=1
break}t.F5(m)
case 1:return A.h(u,v)}})
return A.i($async$Iy,v)},
F5(d){return this.ckL(d)},
ckL(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$F5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Bj(u.a.c),$async$F5)
case 2:n=l.nA(k.dH(f,new C.e4d(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hC(m,new C.arh(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$F5)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a43(u.a.c,o),$async$F5)
case 6:case 5:w=7
return A.b(u.wy(),$async$F5)
case 7:u.a.qt()
return A.h(null,v)}})
return A.i($async$F5,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.uj(p)
if(r.e)return A.as(A.n6(q,p?B.bu:B.bh,q,q,q,q,q,q,q,q),q,q,q)
if(J.ct(r.d)){w=p?B.ef:B.c
v=A.l(15)
u=A.aG(!1,B.a3,!0,q,A.aM(!1,q,!0,A.p(q,D.bX9,B.f,q,q,new A.o(B.aV.j(0.12),q,A.K(B.aV,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cS,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcjP(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Gm(A.p(q,A.x(A.a([u,B.aO,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.m(q,q,p?B.bu:B.bh,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.e1,A.bI(D.h5M,q,r.gaTr(),A.bo(B.bQ,q,q,q,q,q,Av.a1u,q,new A.b9(A.l(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.h,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bHC,q,q,1/0),15,B.ag,1.05,D.adh,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b3],v)
if(J.cJ(r.d))w.push(A.aI(q,q,q,q,A.W(B.zJ,B.aV,q,q,q,q),q,q,q,new C.e4i(r),q,q,q,q,"Sync family trees with database",q))
if(J.cJ(r.d))w.push(A.aI(q,q,q,q,A.W(B.zF,B.aV,q,q,q,q),q,q,q,r.gahd(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dh(E.at8,q,D.fLT,r.gaTr(),A.bo(B.bQ,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.h,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.Gm(r.cHA(J.t(r.d,s),o),14,B.ag,1,D.adh,q))
B.d.u(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.l,q,B.e,B.h,0,B.p)],v),B.E,q,B.e,B.h,0,B.p)},
cHA(d,e){var w=null,v=e.a,u=v?B.ef:B.c,t=A.l(14),s=A.K((v?B.eh:B.bO).j(0.55),B.r,1),r=A.a([new A.ab(0,B.G,B.w.j(v?0.35:0.08),B.et,10)],x.V),q=A.l(14),p=A.p(w,D.bWe,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.l(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaqK(),m=d.d?"":" \xb7 Public",l=d.y===D.kY?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bF,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.h,0,B.p),1)
return A.p(w,A.aG(!1,B.a3,!0,w,A.aM(!1,q,!0,new A.D(B.bI,A.A(A.a([p,B.bb,l,A.W(B.Pd,v?B.bu:B.bh,w,w,w,w)],k),B.l,w,B.e,B.h,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e4h(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.arh.prototype={
S(){return new C.aFr(A.a([],x._),A.aR(x.N),A.bah())},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aFr.prototype={
Y(){var w,v,u=this
u.a3()
u.d=u.a.w
u.adQ()
w=u.a
v=w.c
if(v.length!==0)C.a8p(v,w.e,w.d.w)},
t(){var w=this.w
w.U$=$.ax()
w.R$=0
this.a2()},
a3R(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3R=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yz("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e3D(r),s,null,!0,!0,x.y),$async$a3R)
case 3:if(e!==!0||t.c==null){w=1
break}t.K9()
t.m(new C.e3E(t,r))
w=4
return A.b(t.uy(),$async$a3R)
case 4:t.a.bv()
t.yz(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a3R,v)},
cxd(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aU.x1$.push(new C.e3y(w,f,d,e))},
aVK(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dq()
u.ec(w,v,0,1)
u.k7(q,q,1,1)
this.w.sp(0,u)},
bdv(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eM(new Float64Array(16))
q.e6(r)
w=q.Dg()
v=B.j.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dq()
t.ec(r,u,0,1)
t.k7(v,v,1,1)
t.ec(-r,-u,0,1)
t.iY(0,q)
s.sp(0,t)},
adQ(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$adQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Bj(u.a.c),$async$adQ)
case 2:t=s.nA(r.dH(e,new C.e3_(u)))
if(t!=null&&u.c!=null)u.m(new C.e30(u,t))
return A.h(null,v)}})
return A.i($async$adQ,v)},
yz(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
wo(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.hjh(o,t,!1,r,new C.e3h(u),q.a,s),$async$wo)
case 2:n=A
m=J
w=3
return A.b(C.Hk(u.a.c),$async$wo)
case 3:p=n.nA(m.dH(e,new C.e3i(u)))
if(p!=null&&u.c!=null)u.m(new C.e3j(u,p))
return A.h(null,v)}})
return A.i($async$wo,v)},
K9(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cG(w,0)},
uy(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a43(t,s),$async$uy)
case 2:return A.h(null,v)}})
return A.i($async$uy,v)},
a2n(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a2n=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.uy(q,t.a.c)){t.yz("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.iuw(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a2n)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.K9()
t.m(new C.e3x(t,r))
w=4
return A.b(t.uy(),$async$a2n)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2n,v)},
b3x(){var w=this.c
w.toString
A.a6(w,!1).ce(A.ed(new C.e3e(this),!1,null,x.H))},
a16(){return this.ckN()},
ckN(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a16=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.uy(m,t.a.c)){t.yz("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.P(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Y(s,new C.e3u(),A.U(s).k("Y<1>")).gJ(0)
s=A.et([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("ci.E"))
B.d.ff(p)
s=t.c
s.toString
w=3
return A.b(A.bU(B.L,null,new C.e3v(n,t,new C.uj(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a16)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.K9()
t.m(new C.e3w(t,o))
w=6
return A.b(t.uy(),$async$a16)
case 6:case 5:if(o.a&&t.c!=null)t.b3x()
case 1:return A.h(u,v)}})
return A.i($async$a16,v)},
WL(d){return this.bEb(d)},
bEb(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.uy(r,t.a.c)){t.yz("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e2O(t,d),r,null,!0,!0,x.P),$async$WL)
case 3:s=f
if(s==null){w=1
break}t.K9()
t.m(new C.e2P(t,s))
w=4
return A.b(t.uy(),$async$WL)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WL,v)},
a4c(d){return this.cJP(d)},
cJP(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a4c=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.cg(null,null,!0,null,new C.e3G(u,d,new C.uj(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a4c)
case 2:return A.h(null,v)}})
return A.i($async$a4c,v)},
ch2(d){var w=this,v=w.d
v===$&&A.c()
if(C.uy(v,w.a.c))w.P_(d)
else w.a4c(d)},
ajJ(d,e){return this.cBb(d,e)},
cBb(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ajJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.e3A(new C.uj(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ajJ)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ajJ,v)},
ID(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$ID=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kY?3:5
break
case 3:w=6
return A.b(C.h6g(t.a.c),$async$ID)
case 6:s=e
o=t.a
r=C.hrl(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ajJ(!s,!r),$async$ID)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aRj(o,t.a.c)){t.yz("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lr(o,"Cancel","Remove",q.y===D.kY?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$ID)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aRf(t.a.c,t.d.a),$async$ID)
case 11:t.a.bv()
o=t.c
if(o==null){w=1
break}A.j2(o,null)
case 1:return A.h(u,v)}})
return A.i($async$ID,v)},
abi(d){return this.bPr(d)},
bPr(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$abi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.uy(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aU(s,new C.e2Q(p))){o=A.U(s)
p.a=A.nA(new A.cM(new A.Y(s,new C.e2R(d),o.k("Y<1>")),new C.e2S(),o.k("cM<1,n>")))}q=p.a
if(q==null)q=d.d
t.K9()
t.m(new C.e2T(t,s,d,q))
w=3
return A.b(t.uy(),$async$abi)
case 3:t.yz(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$abi,v)},
P_(d){return this.bRF(d)},
bRF(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$P_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.uy(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a4c(d),$async$P_)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.e2X(t,d),r,null,!0,!0,x.P),$async$P_)
case 6:s=f
if(s==null){w=1
break}t.K9()
t.m(new C.e2Y(t,s))
w=7
return A.b(t.uy(),$async$P_)
case 7:case 1:return A.h(u,v)}})
return A.i($async$P_,v)},
cI_(){var w=this,v=w.d
v===$&&A.c()
if(!C.uy(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.e3F(w))
w.uy()},
ZO(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aRj(n,t.a.c)){t.yz("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.ax()
r=new A.au(B.ax,s)
q=t.d.e
p=A.bp(new A.N(q,t.gcfw(),A.U(q).k("N<1,n>")).c0(0,new C.e39()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e3a(t,new C.uj(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$ZO)
case 3:o=e
r.U$=s
r.R$=0
if(o!==!0||t.c==null){w=1
break}t.K9()
t.m(new C.e3b(t,p))
w=4
return A.b(t.uy(),$async$ZO)
case 4:t.yz("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$ZO,v)},
cfx(d){return B.a.i(d.toLowerCase())},
cjz(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.uy(v,w)
t=r.d
s=C.ijI(t)
C.itn(q,t.b,u,C.ijH(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.uj(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Y(l,new C.e3N(),A.U(l).k("Y<1>")).gJ(0)
l=n?B.c4:B.hY
v=A.W(B.a2E,n?B.bu:B.bh,o,o,o,18)
u=x.p
v=A.a([new A.D(B.CC,A.aM(!1,o,!0,new A.D(B.hN,A.A(A.a([v,B.bn,A.d("Back to Family Trees",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,o,o,o,B.a9,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.N,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e3O(p,d),o,o,o,o,o,o,o),o),new A.D(B.nI,p.c1U(m),o)],u)
if(p.d.y===D.kY){t=B.ty.j(0.15)
s=A.l(12)
r=A.K(B.ty.j(0.45),B.r,1)
q=C.Hi(p.d,p.a.c)
v.push(new A.D(B.yW,A.p(o,A.A(A.a([D.c0H,B.at,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,12,o,o,B.a9,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.hO,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b3],u)
if(C.uy(p.d,p.a.c)&&p.e.length!==0)u.push(new C.Gy("Undo",B.pE,p.gcHZ(),m,o,o))
u.push(new C.Gy("Family Book",D.bQU,p.gcjy(),m,B.uo,o))
u.push(new C.Gy("Family games",B.nO,p.gcjK(),m,B.aD,o))
if(C.uy(p.d,p.a.c))u.push(new C.Gy("Display settings",B.Du,p.gckM(),m,B.b2,o))
u.push(new C.Gy("Sync",B.zF,p.gahd(),m,o,o))
t=p.d
if(t.y===D.kY||C.aRj(t,p.a.c)){t=p.d.y===D.kY?"Remove shared tree":"Delete tree"
u.push(new C.Gy(t,B.ej,p.gbPB(),m,B.fh,o))}if(C.uy(p.d,p.a.c))u.push(new C.Gy("Add member",B.wT,new C.e3P(p),m,B.bQ,o))
v.push(new A.D(Z.amT,A.A(u,B.l,o,B.e,B.h,0,o,o),o))
if(p.d.gaqK()===0){u=A.as(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cm(new C.e3Q(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.W(n?O.a2I:A5.Pe,o,o,o,o,o)
v.push(A.as(A.ht(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e3R(p),o),o,o,o))}return A.c4(o,l,A.bm(!0,A.x(v,B.E,o,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c1U(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.l(22)
v=A.a([new A.ab(0,B.G,B.fX.j(0.35),B.dp,18)],x.V)
u=A.l(22)
t=A.ao(-26,A.W(B.zw,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aG(!1,B.a3,!0,m,A.aM(!1,m,!0,A.p(m,D.c40,B.f,m,m,new A.o(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cS,!0,m,m,m,m,m,m,m,m,m,m,m,n.gahd(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.fwR,m,m,m)
r=r.gaqK()
p=n.d.gaqK()===1?"member":"members"
o=x.p
p=A.a([s,B.bb,A.E(A.x(A.a([q,B.bF,A.d(""+r+" "+p,m,m,m,m,m,m,A.m(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a9,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.h,0,B.p),1)],o)
if(C.uy(n.d,n.a.c))p.push(A.aI(m,m,m,m,D.c0V,m,m,m,n.gcuB(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.h,0,m,m)
r=n.d.d
q=r?B.jL:B.n7
r=r?"Private":"Public"
r=A.E(n.axi(q,"Privacy",r,n.a.d.w?n.gcGV():m),1)
q=A.E(n.axi(B.wY,"Tree code",n.d.c,new C.e2Z(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.ae,q,B.ae,A.E(n.axi(D.bSB,"Collaborators",p,n.gc6J()),1)],o),B.l,m,B.e,B.h,0,m,m)],o)
if(n.d.y===D.kY){s=B.c.j(0.15)
B.d.u(p,A.a([B.P,A.aG(!1,B.a3,!0,A.l(999),A.aM(!1,A.l(999),!0,new A.D(B.hl,A.A(A.a([A.W(B.nP,B.c,m,m,m,14),B.e6,A.d("View only",m,m,m,m,m,m,B.aWv,m,m,m)],o),B.l,m,B.e,B.N,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.p(m,A.bu(u,new A.an(B.a0,m,B.ad,B.t,A.a([t,new A.D(B.H4,A.x(p,B.E,m,B.e,B.h,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.c8k,B.n),m,m,m,m,m,m,m,1/0)},
axi(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aG(!1,B.a3,!0,A.l(14),A.aM(!1,A.l(14),!0,new A.D(K.ao7,A.x(A.a([A.W(d,B.c,w,w,w,18),B.aw,A.d(e,w,1,B.a2,w,w,w,A.m(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.tV,A.d(f,w,1,B.a2,w,w,w,An.xx,w,w,w)],x.p),B.l,w,B.e,B.h,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.bh3.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gau(r)&&s.c.length===0)return B.bM
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bh6(s,t),new A.av(w,v))],x.p)
r=r.gdP(r)
B.d.u(u,r.dN(r,new C.dhC(this),x.l))
r=s.c
B.d.u(u,new A.N(r,new C.dhD(this),A.U(r).k("N<1,v>")))
return new A.D(B.uK,new A.a4(w,v,new A.an(B.a0,t,B.ad,B.f,u,t),t),t)}}
C.KZ.prototype={}
C.GC.prototype={}
C.bh5.prototype={
gbm1(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aL6.prototype={}
C.bh6.prototype={
bRg(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
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
bRd(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b_(a0,new C.dhX())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aU(a0,new C.dhY(f))
t=new A.N(a0,new C.dhZ(f),A.U(a0).k("N<1,G>")).c0(0,new C.di_()).cE(0,1/0,B.ru)
w=f.a
d.ah(f,new A.r(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.I)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.r(o,v),p,e)
continue}l=J.lM(n)
k=Math.min(10,m/2)
m=$.S()
j=A.a([],r)
i=new A.aH(m.r,B.aj,null,null,j)
j.push(new A.aZ(w,v-k))
i.ab()
m=l*k
h=new A.cd(w,v,w+m,v)
j.push(h)
g=i.f
if(g!=null)h.ak(g)
i.ab()
m=new A.aq(o-m,v)
j.push(m)
h=i.f
if(h!=null)m.ak(h)
i.ab()
m=new A.cd(o,v,o,v+k)
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
if(s!=null&&s.length!==0)this.bRd(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.I)(v),++t){r=v[t]
if(r.c)this.bRg(d,w,r.a,r.b)}},
aF(d){return d.b!==this.b}}
C.bkS.prototype={
gccR(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aEq
switch(w.c.a){case 0:return D.d1i
case 1:return D.ddH
case 2:return D.dw_}},
gccU(){var w=this.c,v=C.hCv(w.w),u=C.hCv(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gccR(),p=t.c,o=N.bFu(p.f),n=t.gccU(),m=x.V,l=A.a([new A.ab(0,B.G,B.d.gal(q).j(0.35),B.cJ,10)],m),k=r?B.av:B.c,j=A.K(r?B.av:B.c,B.r,2)
if(o!=null)w=A.tK(B.z,s,B.ck,B.c1,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.z,A.d(v,s,s,s,s,s,s,A.m(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a7(B.a5,B.a8,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hY(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a7(B.ay,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.CS,s,s,56)],v)
k=t.d
if(k>0){j=A.l(10)
w=A.K(r?B.av:B.c,B.r,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fHH,s,s,s),B.f,s,s,new A.o(B.ci,s,w,j,s,s,B.n),s,s,s,s,D.bJx,s,s,s),s,s,s,-6,-4,s))}k=r?B.cs:B.c
j=A.l(8)
w=A.K(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ab(0,B.G,B.w.j(r?0.3:0.06),B.dL,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.m(s,s,r?B.c:B.cs,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.m(s,s,r?B.aR:B.bh,s,s,s,s,s,s,s,s,7.5,s,s,B.a9,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.az(s,new A.a4(84,112,A.x(A.a([new A.an(B.a0,s,B.ad,B.f,l,s),B.aw,A.p(s,A.x(p,B.l,s,B.e,B.N,0,B.p),B.f,s,D.b7K,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bJI,s,s,s)],v),B.l,s,B.e,B.h,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bg8.prototype={
a4(d,e){var w,v,u,t,s
$.S()
w=A.L()
v=this.b
u=v?B.c:D.bkN
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.O(new A.r(s,t),1,w)},
aF(d){return d.b!==this.b}}
C.byU.prototype={
B(d){var w=this,v=null,u=new C.fo_(w),t=w.c,s=t?B.cs:B.c,r=A.l(12),q=u.$3(B.i0,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bw:B.fr,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.wV,"Zoom out",w.e)
return A.aG(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bw:B.fr,v,v,v,1,v,v,v,v,v,22),u.$3(B.aqB,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.N,0,B.p),B.f,s,4,v,B.dB,v,v,v,B.ai)}}
C.bod.prototype={
B(d){var w=this,v=null,u=B.bQ.j(0.15),t=A.K(B.bQ,B.r,2),s=w.e,r=x.p
t=A.az(v,A.p(v,A.x(A.a([A.W(s?O.a2I:A5.Pe,B.bQ,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fDH,v,v,v)],r),B.l,v,B.b8,B.h,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fBr,B.K,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.u(t,new A.N(s,new C.eZ1(w),A.U(s).k("N<1,v>")))
B.d.u(u,t)}return new A.a4(84,v,A.x(u,B.l,v,B.e,B.h,0,B.p),v)}}
C.a0j.prototype={
S(){return new C.aDU()},
bv(){return this.Q.$0()},
ge3(){return this.w}}
C.aDU.prototype={
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
r.y=t==null?D.z7:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.ilc(w.r,w.f)
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
Qu(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Qu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hrl(p.y,p.w)
w=3
return A.b(A.lC(t.a.w,B.JK),$async$Qu)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b1A(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Qu)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hXq(p.y,p.w)
t.a.bv()
case 5:w=7
return A.b(A8.Hu(78,800),$async$Qu)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dxV(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Qu,v)},
ccT(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hZ(B.o.v(1000*Date.now()),w,D.z7,null,null,null,"","","","","",1,!1,0)
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
s=v.aGl(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).N(s)},
aaU(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aaU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dxU(r),s,null,!0,!0,x.y),$async$aaU)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$aaU,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.uj(j),h=l.a.e,g=A.U(h).k("Y<1>"),f=A.C(new A.Y(h,new C.dy3(l),g),g.k("M.E"))
h=j?B.ef:B.c
g=A.l(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bHY,A.d(w,k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.ha(A.aM(!1,k,!0,new A.D(B.lP,A.W(B.ej,B.pr,k,k,k,17),k),B.cS,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbMb(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jY:B.iO
t=N.bFu(l.as)
if(l.as==null)s=A.W(B.py,j?B.bu:B.bh,k,k,k,40)
else s=k
s=A.as(A.az(k,new A.an(B.a0,k,B.ad,B.t,A.a([A.he(u,t,s,k,42),A.ao(0,A.he(B.bQ,k,D.bVi,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gccQ(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.c()
t=C.aDW(t,"Full name",B.mi,1,1,i,B.mA)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.T,new C.bkQ(i,u,new C.dy4(l),k)],v),B.l,k,B.e,B.h,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bBj],q)
o=l.a.e
B.d.u(p,new A.N(o,new C.dy5(),A.U(o).k("N<1,eL<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bBl],q)
B.d.u(q,new A.N(f,new C.dy7(),A.U(f).k("N<1,eL<n?>>")))
o=A.x(A.a([t,B.am,new C.aes(i,r,"Who is their parent?",p,new C.dy8(l),k,o),B.aB,n,B.am,new C.aes(i,m,"Who is their spouse / partner?",q,new C.dy9(l),k,o)],v),B.al,k,B.e,B.h,0,B.p)
q=l.f
q===$&&A.c()
q=C.aDW(q,"Birth date",D.apM,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aDW(m,"Birth place",B.a2Y,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aDW(n,"Date of death (if deceased)",D.arR,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aDW(p,"Occupation",B.Qd,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.z,k,B.ad,B.t,w,k),B.aB,s,B.bx,new C.aet(i,"Identity",u,k),B.af,new C.aet(i,"Family links",o,k),B.af,new C.aet(i,"Life details",A.x(A.a([q,B.T,m,B.T,n,B.T,p,B.T,C.aDW(r,"Notes",B.l_,5,3,i,k)],v),B.l,k,B.e,B.h,0,B.p),k),B.af,new C.aDV(i,"Child order",l.cl0(l.at),new C.dya(l),new C.dyb(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hgl(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dyc(l):k
B.d.u(r,A.a([B.T,new C.aDV(i,"Visible in tree",u,w,new C.dyd(l),k)],v))}r.push(B.T)
w=j?B.jY:B.iO
u=A.l(14)
t=A.K(j?B.eh:B.bO,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iU(k,B.bQ,k,B.ag,k,new C.dye(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,O.amy,k,k,k))
r.push(B.bx)
w=j?B.aS:B.av
j=j?B.eh:B.bO
r.push(A.A(A.a([A.E(A.dV(B.o7,new C.dy6(d),A.dj(k,k,k,k,k,k,k,k,k,w,k,k,B.co,k,new A.b9(A.l(14),B.a1),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bb,A.E(A.bI(D.fe0,k,l.gccS(),A.bo(B.aV,k,k,0,B.c,k,B.co,k,new A.b9(A.l(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.h,0,k,k))
r.push(B.aw)
return A.ej(B.f5,k,B.ag,h,new A.a4(420,k,A.ca(A.x(r,B.al,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),k),D.anq,k,B.amK,new A.b9(g,B.a1),k,k)},
cl0(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aet.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jY:B.iO,s=A.l(16)
return A.x(A.a([new A.D(B.a1y,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.K(v?B.eh:B.bO,B.r,1),s,w,w,B.n),w,w,w,w,B.bj,w,w,1/0)],x.p),B.E,w,B.e,B.h,0,B.p)}}
C.bkR.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.ef:B.c,r=A.l(12),q=A.K((t?B.eh:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.m(u,u,t?B.aS:B.av,u,u,u,u,u,u,u,u,14,u,u,B.a9,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aN(u,B.Z,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bz(u,B.eN,u,B.t6,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.m(u,u,t?B.bu:B.bh,u,u,u,u,u,u,u,u,u,u,u,B.cD,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.W(v.f,B.bQ,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ak,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ac,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a7,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aes.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.ef:B.c,s=A.l(12),r=A.K((u?B.eh:B.bO).j(0.85),B.r,1),q=A.W(B.th,u?B.bu:B.bh,v,v,v,v),p=A.m(v,v,u?B.aS:B.av,v,v,v,v,v,v,v,v,14,v,v,B.a9,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.ef:B.c
return A.p(v,new A.Eo(A.a5A(v,o,A.d(w.f,v,v,v,v,v,v,A.m(v,v,u?B.bu:B.bh,v,v,v,v,v,v,v,v,v,v,v,B.cD,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.kW,v,v,v)}}
C.bkQ.prototype={
B(d){var w=new C.dyf(this)
return A.A(A.a([w.$3(D.wI,"Male",B.PZ),B.ae,w.$3(D.oB,"Female",B.PL),B.ae,w.$3(D.z7,"Other",B.nM)],x.p),B.l,null,B.e,B.h,0,null,null)}}
C.aDV.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jY:B.iO,r=A.l(14),q=A.K(t?B.eh:B.bO,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.m(v,v,t?B.aS:B.av,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bh,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.h,0,B.p),1),new C.aK8(u,B.wV,w.f,v),B.bn,new C.aK8(u,B.i0,w.r,v)],o),B.l,v,B.e,B.h,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ez,v,v,v)}}
C.aK8.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bQ.j(0.12)
else w=s.c.a?B.ef:B.c
v=A.l(10)
u=A.l(10)
if(p)t=B.bQ
else t=(s.c.a?B.bu:B.bh).j(0.4)
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,new A.a4(36,36,A.W(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.aeu.prototype={
bVs(d){switch(d.a){case 0:return B.bQ
case 1:return B.bE
case 2:return B.cC}},
bVt(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b_h(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
AN(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.ef:B.c
u=A.l(12)
t=A.K((w?B.eh:B.bO).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.u(r,A.a([A.W(f,B.bQ,p,p,p,18),B.at],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.m(p,p,w?B.bu:B.bh,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.aw,A.d(o,p,p,p,p,p,p,A.m(p,p,w?B.aS:B.av,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.h,0,B.p),1))
return A.p(p,A.A(r,B.E,p,B.e,B.h,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cw,B.yS,p,p,1/0)},
afA(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jY:B.iO,s=A.l(16),r=A.K(v?B.eh:B.bO,B.r,1)
return A.x(A.a([new A.D(B.a1y,u,w),A.p(w,A.x(e,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bU,w,w,1/0)],x.p),B.E,w,B.e,B.h,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hI_(r,q),o=q.c,n=t.bVs(o),m=N.bFu(q.f),l=t.e.a,k=l?B.ef:B.c,j=A.l(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.m(s,s,l?B.aS:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kY?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.m(s,s,l?B.bu:B.bh,s,s,s,s,s,s,s,s,12,s,s,B.a9,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.ab(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.as(A.p(s,A.he(u,m,m==null?A.W(B.py,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.eC,s,s,s),s,s,s)
w=n.j(0.14)
v=A.l(20)
u=A.K(n.j(0.45),B.r,1)
v=A.as(A.p(s,A.d(t.bVt(o),s,s,s,s,s,s,A.m(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.lN,s,s,s),s,s,s)
u=x.p
i=A.a([t.AN("Full name",i,B.mi)],u)
if(p>0)i.push(t.AN("Child order","#"+p,B.PR))
r=A.a([h,B.aw,r,B.aO,l,B.T,v,B.bx,t.afA("Identity",i),B.af,t.afA("Life details",A.a([t.AN("Birth date",q.w,D.apM),t.AN("Birth place",q.x,B.a2Y),t.AN("Date of death",q.y,D.arR),t.AN("Occupation",q.z,B.Qd)],u)),B.af,t.afA("Family links",A.a([t.AN("1. Parent",t.b_h(q.d),B.Hv),t.AN("2. Spouse",t.b_h(q.e),B.HL)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.u(r,A.a([B.af,t.afA("Notes",A.a([t.AN("Notes",q,B.l_)],u))],u))
r.push(B.bx)
r.push(A.bI(B.Lf,s,new C.dyp(d),A.bo(B.aV,s,s,s,s,s,B.co,s,new A.b9(A.l(14),B.a1),s,s,s)))
return A.eG(s,k,new A.cN(B.m3,A.ca(A.x(r,B.al,s,B.e,B.N,0,B.p),B.t,s,B.y,s,B.wC,s,s,B.ah),s),s,s,s,B.H7,s,B.d6,s,new A.b9(j,B.a1),s)}}
C.Gy.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bu:B.bh
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.uM,A.ha(A.aG(!1,B.a3,!0,A.l(8),A.aM(!1,A.l(8),!0,new A.a4(30,30,A.W(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u),u)}}
C.ark.prototype={
f2(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.U(w).k("N<1,a9<n,@>>")
w=A.C(new A.N(w,new C.cfG(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jp(w,new C.cfH(),t,x.fO))
return s}}
C.arl.prototype={
S(){return new C.aFt(A.a([],x.bF))},
gd1(){return this.c}}
C.aFt.prototype={
Y(){this.a3()
this.Kg()},
Kg(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Kg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cfK(t.a.c),$async$Kg)
case 3:r=e
w=4
return A.b(C.Bj(t.a.c),$async$Kg)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rm(q,new C.e4_(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.e40(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Kg,v)},
z7(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
L4(d,e){return this.cKv(d,e)},
cKv(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$L4=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.e44(q,e))
t=3
w=6
return A.b(d.$0(),$async$L4)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.e45(q))
$.eY.mJ()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$L4,v)},
Yy(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pz(r,s.c,s.e),$async$Yy)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.L4(new C.e3X(t),"Preparing download\u2026"),$async$Yy)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yy,v)},
YC(d){return this.bTk(d)},
bTk(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pz(r,s.c,s.e),$async$YC)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.L4(new C.e3Y(t,d),"Preparing file\u2026"),$async$YC)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YC,v)},
ahA(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ahA=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xO.cp().MP(B.T_,B.uP,!0),$async$ahA)
case 7:r=e
o=r
q=o==null?null:J.fq(o.a)
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
case 6:u=A.Ht()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahA,v)},
Zg(d){return this.c2P(d)},
c2P(d){var w=0,v=A.j(x.H),u=this
var $async$Zg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.L4(new C.e3Z(u,d),"Restoring family trees\u2026"),$async$Zg)
case 2:return A.h(null,v)}})
return A.i($async$Zg,v)},
Zf(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Zf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ahA(),$async$Zf)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Zg(s),$async$Zf)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zf,v)},
a3e(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3e=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pz(r,s.c,s.e),$async$a3e)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.L4(new C.e43(t),"Creating QR code\u2026"),$async$a3e)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3e,v)},
a2Q(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2Q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DB()){t.z7("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).ce(A.ed(new C.e41(),!0,null,x.N)),$async$a2Q)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Zg(r),$async$a2Q)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2Q,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.C0:B.hY,m=o?D.al_:B.aS,l=o?B.aM:B.bO,k=o?B.aS:B.av,j=new C.di0(n,m,l,k,o?B.bP:B.bh)
l=A.aI(p,p,p,p,A.W(B.eL,k,p,p,p,20),p,p,p,new C.e47(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eR(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.m(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.u(t,A.a([A.E(C.dhz(!0,B.ju,B.aG,B.aG,q.r?p:q.gcB_(),j,s,"Show restore QR"),1),B.at],u))}s=q.e
r=q.r?p:q.gcx8()
t.push(A.E(C.dhz(!s,B.jv,B.b7,B.bf,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.h,0,p,p)
r=A.a([],u)
if(q.e)B.d.u(r,A.a([A.E(C.dhz(!1,B.hP,B.aV,B.bQ,q.r?p:q.gbTd(),j,"Photos & books included","Download all trees"),1),B.at],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dhz(!1,R.zG,B.as,B.aQ,q.r?p:q.gc2M(),j,s,"Upload backup file"),1))
l=A.a([new C.bh4(v,l,p),B.l9,new C.adJ(j,"QR restore",p),B.T,t,B.da,new C.adJ(j,"Backup files",p),B.T,A.A(r,B.l,p,B.e,B.h,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.l9,new C.adJ(j,"One tree",p),B.T],u)
B.d.u(v,J.b7(q.d,new C.e48(q,j),x.l))
B.d.u(l,v)}l=A.a([A.cn(l,p,p,B.a1q,p,p,B.ah,!1)],u)
if(q.r){v=A.l(18)
t=A.K(B.aV.j(0.35),B.r,1)
s=A.a([new A.ab(0,B.G,B.w.j(o?0.3:0.1),B.dp,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bm(!0,A.p(p,A.A(A.a([O.aUR,B.bb,A.E(A.d(r,p,p,p,p,p,p,A.m(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.h,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.CJ,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c4(w,n,new A.an(B.a0,p,B.ad,B.t,l,p),p,!1,!1,p,p)}}
C.di0.prototype={}
C.bh4.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.l(24)
u=A.a([new A.ab(0,B.G,B.aV.j(0.32),B.kE,28)],x.V)
t=A.ao(p,A.W(B.va,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.l(18)
q=x.p
return A.p(p,new A.an(B.a0,p,B.ad,B.t,A.a([t,new A.D(B.ac,A.A(A.a([A.p(p,D.c3u,B.f,p,p,new A.o(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.p5,A.E(A.x(A.a([D.fMW,B.P,A.d(w,p,p,p,p,p,p,A.m(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.h,0,B.p),1)],q),B.E,p,B.e,B.h,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.cbE,B.n),p,p,p,p,p,p,p,p)}}
C.adJ.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ae,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)}}
C.bh2.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.l(18),n=A.l(18),m=r.c,l=r.y,k=l?B.aG.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.ab(0,B.G,B.aG.j(0.1),B.cJ,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.l(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aG(!1,B.a3,!0,q,A.aM(!1,o,!0,A.eB(A.d3(new A.D(E.a14,A.x(A.a([A.p(q,A.W(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.ta,q,q,q),B.af,A.d(r.e,q,q,q,q,q,q,A.m(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bF,A.d(r.f,q,q,q,q,q,q,A.m(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cD,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.h,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)}}
C.bh7.prototype={
B(d){var w=this,v=null,u=A.l(18),t=A.l(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aV.j(0.14),p=A.l(12),o=s.e,n=x.p
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,A.eB(new A.D(B.eV,A.A(A.a([A.p(v,D.c2G,B.f,v,v,new A.o(q,v,A.K(B.aV.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.ta,v,v,v),B.bb,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.m(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.m(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.h,0,B.p),1),A.W(B.hP,o,v,v,v,20)],n),B.l,v,B.e,B.h,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)}}
C.a0D.prototype={
S(){return new C.aFs()},
gd1(){return this.c}}
C.aFs.prototype={
Y(){this.a3()
this.aar()},
aar(){var w=0,v=A.j(x.H),u=this,t
var $async$aar=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b4e(u.a.c,B.Ex),$async$aar)
case 2:t=e
if(u.c!=null)u.m(new C.e3S(u,t))
return A.h(null,v)}})
return A.i($async$aar,v)},
aj1(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aj1=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.e3T(q))
t=4
p=A.ht5(q.a.d,B.Ex)
if(p==null){n=A.bc("Could not read this QR code.")
throw A.X(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.atC(n.e,m,l,B.Ex,p,n.f),$async$aj1)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.e3U(q))
q.c.L(x.q).f.T(D.fnC)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ac(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(B.a.eb(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e3V(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aj1,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.nz:B.qq,n=p?B.iJ:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eR(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.h2r,q,q,q,1,q,!0)
w=A.l(24)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.qc(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.m(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.P,u,B.bx,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.m(q,q,p?B.aR:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.b8,B.h,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.ac,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.m(q,q,p?B.ab:B.by,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcwS()
if(u)u=B.KF
else u=A.W(r.e===!0?B.hc:B.apL,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a4(1/0,q,A.em(u,q,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cd,q,q,q),t,A.dj(q,q,q,q,q,q,q,q,q,B.aV,q,B.hf,q,q,q,new A.ay(B.aV.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.hZ,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.m(q,q,p?B.aE:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.T)
w.push(new A.a4(1/0,q,A.bI(B.B7,q,new C.e3W(d),A.bo(B.aV,q,q,q,q,B.hf,q,q,q,q,q,q)),q))
return A.c4(m,o,new A.D(B.ac,A.x(w,B.l,q,B.e,B.h,0,B.p),q),q,!1,!1,q,q)}}
C.a0E.prototype={
S(){return new C.bmm(A.zS(B.yH,B.oe,B.vi))}}
C.bmm.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return A.c4(A.eR(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fV9,w,w,w,1,w,!0),B.w,A.zR(this.d,B.c1,new C.e49(this,d)),w,!1,!1,w,w)}}
C.b05.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.m(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.St,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lY.prototype={}
C.a7r.prototype={
S(){return new C.bm0(null,null)}}
C.bm0.prototype={
Y(){var w=this,v=null
w.a3()
w.d=A.bn(v,B.t0,v,1,v,w)
w.e=A.bn(v,B.nD,v,1,v,w)
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
this.bzp()},
B(d){var w,v,u=this,t=B.d.dL(D.a74,new C.dQ1(u),new C.dQ2())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cDr(A.c6(new A.hb(A.a([w,v],x.dS)),new C.dQ3(u,t),null),!0)}}
C.bm_.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b3Y(d,e)
break
case"house":p.mm(d,e,D.diQ)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdi()
$.S()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.O(new A.r(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.ms(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.BA(d,e,12)
p.yJ(d,e,B.li,5,14)
break
case"grocery":p.clK(d,e)
break
case"calculator":p.clr(d,e)
break
case"lumber":p.clS(d,e)
break
case"kitchen":p.clN(d,e)
break
case"landscape":p.mm(d,e,D.djs)
s=new A.aH($.S().r,B.aj,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.aZ(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.cd(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.cd(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.aq(t,w))
s.E(new A.aq(0,w))
s.E(new A.bw())
w=A.L()
w.r=B.ep.j(0.85).gp(0)
d.af(s,w)
p.BA(d,e,8)
p.yJ(d,e,B.iz,4,18)
break
case"plumbing":p.cm0(d,e)
break
case"electrical":p.mm(d,e,D.dva)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.S()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aE(new A.a5(0,0,0+e.a,0+e.b),u)
p.ms(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.ms(d,e,B.or.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.BA(d,e,10)
break
case"store":p.cma(d,e)
break
case"paint_remodel":p.clW(d,e)
break
case"roofing":p.cm2(d,e)
break
case"warehouse":p.cmh(d,e)
break
case"vehicles":p.cmf(d,e)
break
case"farm":p.clE(d,e)
break
case"restaurant":p.cm1(d,e)
break
case"tools":p.cmd(d,e)
break
case"wallet":p.cmg(d,e)
break
case"concrete":p.clx(d,e)
break
case"blueprint":p.clp(d,e)
break
default:p.b3Y(d,e)}},
mm(d,e,f){var w,v=new A.a5(0,0,0+e.a,0+e.b)
$.S()
w=A.L()
w.san(new A.a7(B.ay,B.aC,B.x,f,null,null).aD(0,v))
d.aE(v,w)},
ms(d,e,f,g,h){var w,v,u,t=new A.r(e.a/2,e.b/2),s=e.gdi()/2-h
$.S()
w=A.L()
w.b=B.aa
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cQ(A.bT(t,s),u,u+0.1439896632895322-u,!1,w)}},
yJ(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdi()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.S()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.O(new A.r(q+t*o,p+s*o),3.5,r)}},
BA(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.j.F(t*0.17,0.9)
q=B.j.F(t*0.23,0.85)
$.S()
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.O(new A.r(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b3Y(d,e){var w,v=this
v.mm(d,e,D.dtr)
w=v.c
v.ms(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.ms(d,e,B.bL.j(0.45),-w*3.141592653589793*1.4,22)
v.bR9(d,e,B.hK,w)
v.yJ(d,e,B.c.j(0.7),6,8)},
bR9(d,e,f,g){var w,v,u,t,s,r
$.S()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.aE(new A.a5(16,r,t,r+3),w)}},
clK(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mm(d,e,D.cxl)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.ar(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=D.dgX[B.o.F(t,4)].j(0.85).gp(0)
d.O(new A.r(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.ms(d,e,B.c.j(0.35),w,16)
l.yJ(d,e,B.iz,5,12)},
clr(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mm(d,e,D.cxt)
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
p=A.fE(h,B.cx,h,h,h,h,B.a7,B.c_,h,B.dI,B.c0)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dlf[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb3(0,new A.eq(r,h,h,B.cL,h,h,h,h,h,h,new A.F(!0,q,h,h,h,h,14+m*4,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eo()
p.a4(d,new A.r(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ar(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cxv[o]
l=B.kN.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb3(0,new A.eq(m,h,h,B.cL,h,h,h,h,h,h,new A.F(!0,l,h,h,h,h,12+k*3,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eo()
p.a4(d,new A.r(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ar(o,3)*0.38)+Math.sin(n)*6))}i.ms(d,e,B.c.j(0.35),w*1.5,14)
i.ms(d,e,B.ey.j(0.55),-v*3.141592653589793*2,8)
i.ms(d,e,B.on.j(0.4),r*2.8,22)
i.yJ(d,e,B.pm,8,10)
i.BA(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.j.F(w+o*0.22,0.9)
$.S()
v=new A.ar(B.S,B.Q,B.V,B.X,B.U)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.r(12,j),new A.r(t,j),v)}},
clS(d,e){var w,v,u,t,s,r,q,p,o=this
o.mm(d,e,W.aBx)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bx(new A.a5(20,r,u,r+10),B.iF)
$.S()
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=A.ap(B.fZ,B.oh,(s+1)/2).gp(0)
d.aq(q,p)}o.ms(d,e,B.fZ.j(0.35),w,15)
o.BA(d,e,8)},
clN(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mm(d,e,D.dhs)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.j.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.j.F(s*0.13,0.7)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.O(new A.r(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.ms(d,e,B.bL.j(0.4),-w*3.141592653589793*2.2,11)
l.yJ(d,e,B.qf,4,14)},
cm0(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mm(d,e,D.d5r)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.j.F(s,0.12)
$.S()
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.b=B.aa
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.O(new A.r(w,u),q*(0.12+r*0.14+p),o)}n.yJ(d,e,B.pq,6,12)
n.ms(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
cma(d,e){var w,v,u,t,s,r,q,p=this
p.mm(d,e,D.cLe)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bx(new A.a5(r,14,r+u,22),B.jy)
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=A.ap(B.fA,B.bL,(s+1)/2).gp(0)
d.aq(r,q)}p.ms(d,e,B.c.j(0.3),w,16)
p.BA(d,e,8)
p.yJ(d,e,B.wi,5,13)},
clW(d,e){var w,v,u,t,s,r,q
this.mm(d,e,D.dbU)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.j.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bx(new A.a5(r,q,r+8,q+(18+s*22)),B.ir)
$.S()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=[B.ix,B.dy,B.bL,B.ew][t].j(0.85).gp(0)
d.aq(q,r)}this.ms(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cm2(d,e){var w,v,u,t,s,r,q
this.mm(d,e,D.d9e)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.j.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.r(u*(0.1+r),s),new A.r(u*(0.18+r),s+10),q)}this.yJ(d,e,B.cA,7,11)},
cmh(d,e){var w,v,u,t,s,r,q,p
this.mm(d,e,D.cO0)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bx(new A.a5(q,p,q+(t-s*8),p+16),B.iF)
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=A.ap(B.cA,B.aS,(Math.sin(r)+1)/2).gp(0)
d.aq(p,q)}this.ms(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cmf(d,e){var w,v,u,t,s,r,q
this.mm(d,e,D.dzv)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.j.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.bx(new A.a5(s,r,s+28,r+8),B.iF)
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.aq(r,q)}this.BA(d,e,6)},
clE(d,e){var w,v,u,t,s,r,q,p
this.mm(d,e,D.dg0)
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
cm1(d,e){var w,v,u,t,s,r,q=this
q.mm(d,e,D.diE)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bW(new A.r(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.S()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=B.c.j(0.22).gp(0)
d.c_(s,r)}q.yJ(d,e,B.qf,5,16)
q.BA(d,e,7)},
cmd(d,e){var w,v,u,t,s,r,q,p,o=this
o.mm(d,e,D.dwO)
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
cmg(d,e){var w,v,u,t,s,r,q,p,o=this
o.mm(d,e,D.dAe)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bx(new A.a5(q,p,q+36,p+22),B.jy)
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=A.ap(B.iz,B.or,r).gp(0)
d.aq(p,q)}o.BA(d,e,9)
o.ms(d,e,B.c.j(0.4),w*2.2,12)},
clx(d,e){var w,v,u,t,s,r,q,p
this.mm(d,e,D.dod)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bT(new A.r(v,u),34)
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
clp(d,e){var w,v,u,t,s,r,q
this.mm(d,e,D.djM)
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
d.aE(new A.a5(0,q,0+v,q+6),u)
this.ms(d,e,B.li.j(0.45),-r*3.141592653589793*2,11)},
aF(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.aun.prototype={
a0u(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0u=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aSc(),$async$a0u)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a9K(s),$async$a0u)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a0u,v)},
ahB(d){return this.coA(d)},
coA(d){var w=0,v=A.j(x.H),u=this,t
var $async$ahB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.itx(d),$async$ahB)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ahB,v)},
B(d){var w,v,u=null,t=A.P(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.I?B.jY:B.iO
w=x.p
v=A.a([C.aSA(!0,B.rr,1/0,B.qM,u,s,1/0)],w)
if(!r)v.push(new A.bM(new A.o(u,u,u,u,u,new A.a7(B.aZ,B.b4,B.x,A.a([B.L,B.w.j(0.35)],x.O),u,u),B.n),B.bi,new A.bJ(B.aZ,u,u,new A.D(B.t3,A.d("Pick a theme or your own photo",u,u,u,u,u,u,A.m(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,B.aCw,u,u),u,u,u),u),u),u))
v.push(A.ao(8,A.A(A.a([A.E(A.dh(D.bX2,u,D.fJ4,new C.cpb(this,d),A.bo(B.aV,u,u,u,B.c,u,B.k5,u,u,u,u,B.cg)),1),B.ae,A.E(A.em(D.c4N,u,D.fYm,this.gcfu(),A.dj(u,u,B.w.j(0.35),u,u,u,u,u,u,B.c,u,u,B.k5,u,u,D.b6i,u,u,u,B.cg)),1)],w),B.l,u,B.e,B.h,0,u,u),u,u,8,8,u,u))
return new A.fH(1.7777777777777777,A.aG(!1,B.a3,!0,B.rr,new A.an(B.a0,u,B.b1,B.t,v,u),B.aq,t,0,u,u,u,u,u,B.ai),u)}}
C.aNy.prototype={
aX(){this.b7()
this.b5()
this.dI()},
t(){var w=this,v=w.b8$
if(v!=null)v.a6(0,w.gdC())
w.b8$=null
w.a2()}}
C.aVv.prototype={}
C.aVu.prototype={}
C.aTy.prototype={}
C.a_h.prototype={
S(){return new C.aAD()}}
C.aAD.prototype={
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
KU(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.L(x.q).f.T(D.fo7)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).N(new C.aVv(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.ef:B.c,k=A.l(20),j=A.p(n,D.c4s,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.l(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.m(n,n,m?B.aS:B.av,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bF,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bh,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.h,0,B.p),1)
j=A.A(A.a([j,B.bb,i,A.aI(n,n,n,n,A.W(B.cB,m?B.bu:B.bh,n,n,n,n),n,n,n,new C.d9b(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.h,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bh,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bh,n,n,n,n,n,n,n,n,11,n,n,B.cD,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.htl(new C.d9c(o),o.e)
u=o.d
u===$&&A.c()
t=A.m(n,n,m?B.aS:B.av,n,n,n,n,n,n,n,n,n,n,n,B.a9,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jY:B.iO
r=A.l(12)
q=A.l(12)
p=m?B.eh:B.bO
t=A.aN(n,B.Z,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bz(n,new A.b6(4,r,B.du),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d9d(o),n,!1,n,n,!1,n,!0,n,B.ac,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a7,n,A_.KO,n,n,n,n)
u=m?B.aS:B.av
m=m?B.eh:B.bO
return A.eG(n,l,new A.cN(B.m3,A.ca(A.x(A.a([j,B.aO,i,B.aw,w,B.P,v,B.aO,t,B.bx,A.A(A.a([A.E(A.dV(B.ds,new C.d9e(d),A.dj(n,n,n,n,n,n,n,n,n,u,n,n,B.co,n,new A.b9(A.l(12),B.a1),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.at,A.E(A.bI(D.fYC,n,o.ga3A(),A.bo(B.aV,n,n,n,B.c,n,B.co,n,new A.b9(A.l(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.h,0,n,n)],h),B.E,n,B.e,B.N,0,B.p),B.t,n,B.y,n,B.CL,n,n,B.ah),n),n,n,n,A1.CM,n,B.d6,n,new A.b9(k,B.a1),n)}}
C.a_g.prototype={
S(){return new C.aAC()}}
C.aAC.prototype={
Y(){this.a3()
var w=$.ax()
this.d!==$&&A.aQ()
this.d=new A.au(B.ax,w)},
t(){var w=this.d
w===$&&A.c()
w.U$=$.ax()
w.R$=0
this.a2()},
KU(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.L(x.q).f.T(D.flJ)
return}v=this.c
v.toString
A.a6(v,!1).N(new C.aVu(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.ef:B.c,n=A.l(20),m=A.p(q,D.c0M,B.f,q,q,new A.o(B.bQ.j(0.15),q,q,A.l(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bF,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.m(q,q,p?B.bu:B.bh,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.h,0,B.p),1)
m=A.A(A.a([m,B.bb,l,A.aI(q,q,q,q,A.W(B.cB,p?B.bu:B.bh,q,q,q,q),q,q,q,new C.d97(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.h,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.l(12)
v=A.K(B.aV.j(0.25),B.r,1)
u=A.W(B.apx,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.at,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,12,q,q,B.a9,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.h,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bI,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,q,q,q,B.a9,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jY:B.iO
t=A.l(12)
s=A.l(12)
r=p?B.eh:B.bO
v=A.aN(q,B.Z,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bz(q,new A.b6(4,t,B.du),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d98(this),q,!1,q,q,!1,q,!0,q,B.ac,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a7,q,B.la,q,q,q,q)
w=p?B.aS:B.av
p=p?B.eh:B.bO
return A.eG(q,o,new A.cN(B.m3,A.ca(A.x(A.a([m,B.aO,l,B.aB,v,B.bx,A.A(A.a([A.E(A.dV(B.ds,new C.d99(d),A.dj(q,q,q,q,q,q,q,q,q,w,q,q,B.co,q,new A.b9(A.l(12),B.a1),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.at,A.E(A.bI(D.h4I,q,this.ga3A(),A.bo(B.bQ,q,q,q,B.c,q,B.co,q,new A.b9(A.l(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.h,0,q,q)],k),B.E,q,B.e,B.N,0,B.p),B.t,q,B.y,q,B.CL,q,q,B.ah),q),q,q,q,A1.CM,q,B.d6,q,new A.b9(n,B.a1),q)}}
C.ZO.prototype={
S(){return new C.azl()}}
C.azl.prototype={
Y(){var w,v=this
v.a3()
w=$.ax()
v.d!==$&&A.aQ()
v.d=new A.au(B.ax,w)
v.e!==$&&A.aQ()
v.e=new A.au(new A.ba("1",B.b6,B.aP),w)
v.f!==$&&A.aQ()
v.f=new A.au(B.ax,w)
v.r!==$&&A.aQ()
v.r=new A.au(B.ax,w)},
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
gKb(){var w,v=this.e
v===$&&A.c()
w=A.cW(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gakL(){var w=this.f
w===$&&A.c()
w=A.cW(B.a.i(w.a.a))
return w==null?0:w},
gb6M(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aR0(d){var w,v=B.j.D(this.gKb()+d,0.25,999999),u=B.j.fK(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.v(B.j.M(v))
else{u=B.j.ad(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb3(0,u)
this.m(new C.cHx())},
aA2(d,e,f,g){var w=null,v=g!=null?A.W(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jY:B.iO,s=A.l(14),r=A.l(14)
u=u?B.eh:B.bO
return A.bz(w,new A.b6(4,s,B.du),w,B.bI,w,w,w,w,!0,new A.b6(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.l(14),B.aeO),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
cfv(d,e,f){return this.aA2(d,e,f,null)},
KU(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gakL()<=0){s.c.L(x.q).f.T(D.fq2)
return}r=s.c
r.toString
v=s.gKb()
u=s.gakL()
t=s.gb6M()
A.a6(r,!1).N(new C.aTy(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.uj(n),l=n?B.ef:B.c,k=A.l(24),j=x.O,i=A.a([B.aV.j(0.22),B.bQ.j(0.14)],j),h=A.l(14)
i=A.p(o,D.bUZ,B.f,o,o,new A.o(o,o,A.K(B.aV.j(0.35),B.r,1),h,o,new A.a7(B.a5,B.a8,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bF,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,12,o,o,B.cD,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.h,0,B.p),1)
i=A.A(A.a([i,B.bb,h,A.aI(o,o,o,o,A.W(B.cB,n?B.bu:B.bh,o,o,o,o),o,o,o,new C.cHD(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.h,0,o,o)
h=p.d
h===$&&A.c()
v=A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,o,o,o,B.a9,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aN(o,B.Z,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.aA2(m,"Item name (optional)","Lumber, paint, labor\u2026",B.PX),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,A_.KO,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jY:B.iO
t=A.l(14)
s=A.K(n?B.eh:B.bO,B.r,1)
r=A.aI(o,o,o,o,A.W(B.wV,n?B.aS:B.av,o,o,o,20),o,o,o,new C.cHE(p),o,o,o,o,o,B.cg)
q=p.e
q===$&&A.c()
q=A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.c6l,B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.ea,o,o,o,1,o,o,!1,"\u2022",o,new C.cHF(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a4(52,o,q,o),A.aI(o,o,o,o,A.W(B.i0,n?B.aS:B.av,o,o,o,20),o,o,o,new C.cHG(p),o,o,o,o,o,B.cg)],w),B.l,o,B.e,B.N,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.at,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.aA2(m,"Amount","0.00",B.hA),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.ea,o,o,o,1,o,o,!1,"\u2022",o,new C.cHH(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a7,o,B.ao,o,o,o,o),1)],w),B.E,o,B.e,B.h,0,o,o)
t=x.gv
u=A.C(new A.N(D.dcq,new C.cHI(p,m),t),t.k("ak.E"))
i=A.a([i,B.bx,v,B.aB,h,B.P,s,B.af,A.bZ(B.bH,u,B.br,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.u(i,A.a([B.T,A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.cfv(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cHJ(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,B.la,o,o,o,o)],w))}i.push(B.aO)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bQ.j(n?0.12:0.06)],j)
h=A.l(16)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gKb()===B.j.fK(p.gKb())?B.j.M(p.gKb()):p.gKb()
s=p.gb6M()
r=A.Bl(p.gakL())
i.push(A.p(o,A.A(A.a([A.E(A.x(A.a([u,B.aw,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,12,o,o,B.a9,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.h,0,B.p),1),C.bGj(p.gKb()*p.gakL(),B.b2,!1,B.u)],w),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a7(B.a5,B.a8,B.x,j,o,o),B.n),o,o,o,o,B.jr,o,o,o))
i.push(B.bx)
j=A.l(14)
h=n?B.eh:B.bO
h=A.dj(o,o,o,o,o,o,o,o,o,o,o,o,B.co,o,new A.b9(j,B.a1),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dV(A.d("Cancel",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cHK(d),h),1),B.at,A.E(A.dh(D.at0,o,D.h0B,p.ga3A(),A.bo(B.aV,o,o,0,B.c,o,B.co,o,new A.b9(A.l(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.h,0,o,o))
return A.eG(o,l,new A.cN(B.Me,A.ca(A.x(i,B.al,o,B.e,B.N,0,B.p),B.t,o,B.y,o,Ai.t8,o,o,B.ah),o),o,o,o,B.Ox,o,B.d6,o,new A.b9(k,B.a1),o)}}
C.a2p.prototype={
S(){return new C.byM()}}
C.byM.prototype={
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
r=r?B.jY:B.iO
v=A.aN(s,B.Z,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bz(s,new A.b6(4,A.l(12),B.du),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fnv(t,d),s,!1,s,s,!1,s,!0,s,B.ac,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a7,s,B.ao,s,s,s,s)
u=A.E(A.dV(B.ds,new C.fnw(d),s),1)
r=A.bo(B.bQ,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eG(s,q,new A.D(B.CL,A.x(A.a([o,B.aB,v,B.aO,A.A(A.a([u,B.at,A.E(A.bI(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fnx(t,d),r),1)],w),B.l,s,B.e,B.h,0,s,s)],w),B.l,s,B.e,B.N,0,B.p),s),s,s,s,s,s,B.d6,s,new A.b9(p,B.a1),s)}}
C.acL.prototype={
a7(){return"WorksheetFrameStyle."+this.b}}
C.Gm.prototype={
S(){return new C.byK(null,null)}}
C.byK.prototype={
Y(){var w,v=this
v.a3()
w=A.bn(null,D.bBT,null,1,null,v)
w.cK(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBK()},
gbDl(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bQ,B.b2],x.O)
case 2:return A.a([B.bv,B.aV,B.b2],x.O)
case 3:return A.a([B.aG,B.ci,B.jG],x.O)
case 4:return A.a([B.fJ,B.bQ,B.fq],x.O)
case 0:return A.a([B.aV,B.bQ,B.b2],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.en(A.c6(v,new C.fnt(this,new C.uj(w.ax.a===B.I)),null),null)}}
C.aze.prototype={
S(){return new C.byL(null,null)}}
C.byL.prototype={
Y(){var w,v=this
v.a3()
w=A.bn(null,B.nE,null,1,null,v)
w.cK(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBL()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.fnu(this),null)}}
C.byJ.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bx(new A.a5(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aP(w,w))
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
w=new A.uS(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.bi(A.jL(y.B));--r
q=new A.BN(w,r)
w.jP()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aUB(d,q,r,o,0,0.2,4.2,0.92)
p.aUB(d,q,r,s,0.52,0.11,3.2,0.58)}},
aUB(d,e,f,g,h,i,j,k){var w,v,u,t=B.j.F(g+h,1)*f,s=A.hQq(e.a.a,e,t,t+f*i,!0),r=A.ahR(s.glg().a.getBounds())
$.S()
w=A.L()
w.b=B.aa
w.c=j
w.d=B.bG
w.f=!0
v=this.f
u=k*this.e
w.san(new A.a7(B.a5,B.a8,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.II,null).aD(0,r))
d.af(s,w)},
aF(d){return d.b!==this.b||d.d!==this.d}}
C.aPG.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.aPH.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.uj.prototype={}
C.aum.prototype={
S(){return new C.aGZ()},
ge3(){return this.c}}
C.aGZ.prototype={
Y(){var w=this
w.a3()
w.d=w.a.d
w.ais()},
t(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Me(w,v)
this.a2()},
ais(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ais=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bEK(t.c,t.d.a),$async$ais)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eWb(u,s))
return A.h(null,v)}})
return A.i($async$ais,v)},
QW(){var w=0,v=A.j(x.H),u=this,t,s
var $async$QW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eW2(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Me(t,s),$async$QW)
case 2:if(u.c!=null)u.m(new C.eW3(u))
return A.h(null,v)}})
return A.i($async$QW,v)},
Rt(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Rt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.eW9(t,new C.uj(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$Rt)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a9K(q),$async$Rt)
case 6:case 5:t.m(new C.eWa(t,r))
w=7
return A.b(t.QW(),$async$Rt)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Rt,v)},
WF(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.iti(r),$async$WF)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eVY(t,new C.rr(B.o.v(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.QW(),$async$WF)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WF,v)},
ckB(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hHW(t,new C.eW1(u),w,v)},
acf(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bF(new A.ay(v,2.5,B.r,-1),B.a1,B.a1,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b64,w,w,B.n),w,22,w,w,w,w,w,22)},
abh(d){return this.bPo(d)},
bPo(d){var w=0,v=A.j(x.H),u=this
var $async$abh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eW0(u,d))
w=2
return A.b(u.QW(),$async$abh)
case 2:return A.h(null,v)}})
return A.i($async$abh,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.c4:B.hY,d=A.l(8),a0=A.W(Y.a2F,f?B.bu:B.bh,g,g,g,16),a1=x.p
a0=A.aM(!1,d,!0,new A.D(B.Hd,A.A(A.a([a0,B.bn,A.d("Back to Projects",g,g,g,g,g,g,A.m(g,g,f?B.bu:B.bh,g,g,g,g,g,g,g,g,g,g,g,B.a9,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.N,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eWc(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a_(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b1,B.t,A.a([A.bu(A.l(22),C.aSA(!0,A.l(22),1/0,B.qM,g,d,1/0),B.aq),A.ao(10,A.dh(D.bZG,g,D.h3_,h.gb4I(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.hm,g,new A.b9(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.l(22)
w=x.V
v=A.a([new A.ab(0,B.G,B.aV.j(f?0.5:0.38),B.eR,22),new A.ab(-4,B.G,B.bQ.j(0.2),B.J,32)],w)
u=A.l(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ab(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.l(16)
r=h.d
v=A.p(g,A.p(g,A.bu(s,new A.an(B.a0,g,B.b1,B.t,A.a([C.aSA(!0,A.l(16),1/0,B.Pp,g,r.c,1/0),new A.bM(new A.o(g,g,g,g,g,new A.a7(B.aZ,B.b4,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bi,g,g),A.ao(g,h.acf(!0),g,g,8,g,8,g),A.ao(g,A.cEb(h.acf(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cEb(h.acf(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cEb(h.acf(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dh(D.bVA,g,D.fXj,h.gb4I(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.hm,g,new A.b9(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.c82,B.n),g,g,g,g,B.lP,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.m(g,g,f?B.aS:B.av,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.l(22)
u=x.O
u=f?A.a([D.bgZ,B.ol,B.hj],u):A.a([B.b2,B.aV,B.bQ],u)
t=x.V
s=A.a([new A.ab(0,B.G,B.aV.j(f?0.45:0.35),B.eR,24)],t)
r=A.l(22)
p=A.ao(g,A.W(B.js,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.l(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.m(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.hk,g,g,g)],a1),B.l,g,B.e,B.h,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.m(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bGj(h.d.gxJ(),B.c,!0,B.u)],a1)
if(q>0)B.d.u(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.m(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cD,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.h,0,B.p),1)
n=A.l(14)
m=A.l(14)
l=B.c.j(0.12)
k=A.K(B.h8.j(0.75),B.r,1.6)
t=A.a([new A.ab(0,B.G,B.aG.j(0.28),B.cJ,14)],t)
j=B.aG.j(0.22)
i=A.l(10)
u=A.p(g,A.bu(r,new A.an(B.a0,g,B.ad,B.t,A.a([p,new A.D(D.bGK,A.A(A.a([o,B.at,A.aG(!1,B.a3,!0,g,A.aM(!1,n,!0,A.eB(new A.D(V.wA,A.x(A.a([A.p(g,D.asA,B.f,g,g,new A.o(j,g,A.K(B.aG.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cp,g,g,g),B.fD,D.fLV],a1),B.l,g,B.e,B.N,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gckA(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.ai)],a1),B.l,g,B.e,B.h,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a7(B.ay,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fH(1.7777777777777777,d,g),B.aO,w,B.P,u,B.bx,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.m(g,g,f?B.aS:B.av,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b3,A.dh(Au.a4w,g,D.fJL,h.gbDP(),A.bo(B.aV,g,g,g,B.c,g,B.hO,g,new A.b9(A.l(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.h,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.ef:B.c
v=A.l(14)
u=A.K(f?B.eh:B.bO,B.r,1)
t=A.W(B.a30,f?B.bu:B.bh,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.m(g,g,f?B.aS:B.av,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.T,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.m(g,g,f?B.bu:B.bh,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.h,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.qI,g,g,1/0))}else B.d.u(d,new A.N(w,new C.eWd(h,new C.uj(f)),A.U(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.Cx,A.as(A.n6(g,f?B.bu:B.bh,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c4(g,e,A.bm(!0,A.x(A.a([new A.D(B.CC,a0,g),A.E(A.ca(A.x(d,B.E,g,B.e,B.h,0,B.p),B.t,g,B.y,g,E.yZ,g,g,B.ah),1)],a1),B.E,g,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bHv(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.ef:B.c,p=A.l(16),o=A.a([new A.ab(0,B.G,B.w.j(r?0.35:0.08),B.cJ,12)],x.V),n=A.l(16),m=A.p(u,u,B.f,u,u,D.b8P,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.l(12)
l=A.p(u,A.W(s?B.ii:B.h2,B.b2,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bM
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.m(u,u,r?B.aS:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd09()
v=A.Bl(d.d)
B.d.u(t,A.a([B.aw,A.d(w+" "+v,u,u,u,u,u,u,A.m(u,u,r?B.bu:B.bh,u,u,u,u,u,u,u,u,12,u,u,B.a9,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.b8,B.N,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bQ.j(0.1)],x.O)
w=A.l(12)
k=A.p(u,C.bGj(d.c*d.d,B.b2,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a7(B.a5,B.a8,B.x,k,u,u),B.n),u,u,u,u,B.hm,u,u,u)
w=x.p
return A.p(u,A.bu(n,new A.EN(A.A(A.a([m,A.E(new A.D(B.amr,A.A(A.a([l,B.bb,t,B.ae,k,A.aI(u,u,u,u,A.W(B.cB,(r?B.bu:B.bh).j(0.75),u,u,u,20),u,u,u,new C.eVZ(this,d),u,u,u,u,u,B.cg)],w),B.l,u,B.e,B.h,0,u,u),u),1)],w),B.al,u,B.e,B.h,0,u,u),u),B.aq),B.f,u,D.b7G,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d9,u,u,u,u)}}
C.aeP.prototype={
F0(d){return this.bQM(d)},
bQM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$F0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pz(d,o,!1),$async$F0)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).N(null)
w=4
return A.b(A.bN(Ah.Cv,null,x.H),$async$F0)
case 4:s=t.d
w=5
return A.b(C.fXi(!0,o,s),$async$F0)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Hg(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$F0)
case 6:p=f
w=7
return A.b(A.py(o,!1),$async$F0)
case 7:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$F0,v)},
a0w(d){return this.cB0(d)},
cB0(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0w=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pz(d,s,!1),$async$a0w)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).N(null)
A.hC(d,new C.aug(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.py(s,!1),$async$a0w)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0w,v)},
QX(d){return this.cx3(d)},
cx3(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$QX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).N(null)
w=3
return A.b(A.hC(d,D.aMi,!0,"NgmyWorksheetProjectScan",x.N),$async$QX)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bGk(s),$async$QX)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.L(x.q).f.T(D.fp9)
w=1
break}q=C.hiP(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dN(p,x.H),$async$QX)
case 5:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$QX,v)},
a0x(d){return this.cJl(d)},
cJl(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0x=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).N(null)
w=3
return A.b(C.bFP(),$async$a0x)
case 3:s=f
if(s==null){w=1
break}r=C.hiP(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dN(q,x.H),$async$a0x)
case 4:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a0x,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.uj(u),s=w.d.d.length,r=u?B.ef:B.c,q=A.l(28),p=A.a([new A.ab(0,B.G,B.w.j(u?0.35:0.08),B.kE,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.wz,A.p(v,A.x(A.a([w.czA(d,t,s),new A.D(D.bG7,A.x(A.a([w.b7H(t,"QR restore"),B.T,A.A(A.a([w.b2H(t,!0,B.ju,B.aG,B.aG,new C.eWf(w,d),"Show to scan","QR code"),B.at,w.aA3(t,B.jv,B.b7,B.bf,new C.eWg(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.h,0,v,v),B.da,w.b7H(t,"Backup files"),B.T,A.A(A.a([w.aA3(t,B.hP,B.aV,B.bQ,new C.eWh(w,d),"Full copy","Backup file"),B.at,w.aA3(t,R.zG,B.as,B.aQ,new C.eWi(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.h,0,v,v)],o),B.E,v,B.e,B.h,0,B.p),v)],o),B.l,v,B.e,B.N,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
czA(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.fd,B.cU,B.fX],k):A.a([B.b2,B.aV,B.bQ],k)
w=A.ao(l,A.W(B.va,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.as(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.l(4),l,l,B.n),l,4,l,B.ky,l,l,l,36),l,l,l)
u=A.l(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ab(0,B.G,B.w.j(0.2),B.cJ,12)],x.V)
r=this.d
s=A.p(l,C.aSA(!0,A.l(13),64,D.bQN,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.m(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,I.ac9,l,l,l)
r=C.bGj(r.gxJ(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.l(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.a0,l,B.ad,B.t,A.a([w,new A.D(D.bGv,A.x(A.a([v,A.A(A.a([s,B.eu,A.E(A.x(A.a([u,B.aw,t,B.P,A.A(A.a([r,B.ae,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.m(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fM,l,l,l)],m),B.l,l,B.e,B.h,0,l,l)],m),B.E,l,B.e,B.h,0,B.p),1),A.aI(l,l,l,l,A.W(B.cB,B.c.j(0.85),l,l,l,l),l,l,l,new C.eWe(d),l,l,l,A.o2(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aUE,l,l,l,l),l,l)],m),B.E,l,B.e,B.h,0,l,l)],m),B.l,l,B.e,B.h,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a7(B.ay,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b7H(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ae,A.d(e.toUpperCase(),w,w,w,w,w,w,A.m(w,w,d.a?B.bu:B.bh,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
b2H(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.l(18),p=A.l(18),o=d.a,n=o?D.al_:B.aS
if(e)w=B.aG.j(o?0.45:0.35)
else{w=o?B.eh:B.bO
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.ab(0,B.G,B.aG.j(0.12),B.cJ,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.l(12)
s=A.K(h.j(0.35),B.r,1)
t=A.p(r,A.W(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.ta,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.m(r,r,o?B.aS:B.av,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aG(!1,B.a3,!0,r,A.aM(!1,q,!0,A.eB(new A.D(E.a14,A.x(A.a([t,B.af,u,B.bF,A.d(j,r,r,r,r,r,r,A.m(r,r,o?B.bu:B.bh,r,r,r,r,r,r,r,r,11,r,r,B.cD,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.h,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
aA3(d,e,f,g,h,i,j){return this.b2H(d,!1,e,f,g,h,i,j)}}
C.aug.prototype={
S(){return new C.bnJ()}}
C.bnJ.prototype={
Y(){this.a3()
this.agl()},
agl(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$agl=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bGl(p.c,p.d),$async$agl)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eVT(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eVU(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agl,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.C0:B.hY,e=i.d
e=e==null?h:B.a.a_(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aI(h,h,h,h,A.W(B.eL,g?B.ab:B.an,h,h,h,18),h,h,h,new C.eVV(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.m(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.tT],u),B.l,h,B.e,B.h,0,h,h)
t=A.l(24)
s=x.O
s=g?A.a([B.fd,B.cU,B.fX],s):A.a([B.b2,B.aV,B.bQ],s)
r=x.V
q=A.a([new A.ab(0,B.G,B.aV.j(g?0.4:0.3),B.eR,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dk,B.K,h,h)
p=C.bGj(p.gxJ(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.l(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.am,A.A(A.a([p,B.ae,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.m(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fM,h,h,h)],u),B.l,h,B.b8,B.h,0,h,h)],u),B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a7(B.ay,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.a1p,h,h,1/0)
t=g?D.bsk:B.c
q=A.l(24)
p=A.K(w?B.aG.j(0.4):B.aV.j(0.3),B.r,1)
r=A.a([new A.ab(0,B.G,B.w.j(g?0.25:0.06),B.dp,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.VS,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.ewo)
else{m=A.l(20)
l=A.K(B.bl,B.r,1)
o.push(A.p(h,A.qc(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bS,h,h,h))}}o.push(B.aO)
n=w?B.aG:B.aV
n=n.j(g?0.15:0.1)
m=A.l(12)
l=A.K((w?B.aG:B.aV).j(0.35),B.r,1)
k=w?B.PF:B.Qc
k=A.W(k,w?B.aG:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.at,A.E(A.d(j,h,h,h,h,h,h,A.m(h,h,g?B.ab:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a9,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.h,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.hO,h,h,h))
return A.c4(h,f,A.bm(!0,A.x(A.a([new A.D(Ae.OL,e,h),A.E(A.ca(A.x(A.a([s,B.aO,A.p(h,A.x(o,B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.uL,h,h,1/0)],u),B.l,h,B.e,B.h,0,B.p),B.t,h,B.y,h,E.anB,h,h,B.ah),1)],u),B.l,h,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.aul.prototype={
S(){return new C.aGY(A.zS(B.O0,B.oe,B.vi))}}
C.aGY.prototype={
t(){this.d.t()
this.a2()},
aOY(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j2(w,d)},
cgn(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s=C.irl(t)
if(s!=null){this.aOY(s)
return}r=C.hxU(t)
if(r!=null)q=A.cR(r,p,0)
else q=!1
if(q){this.aOY(B.a.i(B.a.b4(r,B.a.cn(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eR(A.a([A.aI(t,t,t,t,A.W(u.f?B.uX:A9.PN,t,t,t,t,t),t,t,t,new C.eVX(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.C0,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fXb,t,t,t,1,t,!0),q=A.zR(u.d,B.c1,u.gcgm()),p=A.l(28)
p=A.as(A.p(t,t,B.f,t,t,new A.o(t,t,A.K(B.aV,B.r,3),p,A.a([new A.ab(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.l(16)
return A.c4(r,B.w,new A.an(B.a0,t,B.b1,B.t,A.a([q,p,A.ao(32,A.p(t,D.fVX,B.f,t,t,new A.o(w,t,A.K(B.aV.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jr,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aLT.prototype={
a7(){return"_WorksheetTab."+this.b}}
C.P5.prototype={
S(){return new C.aH_(D.ae8,A.a([],x.D))},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aH_.prototype={
gcH8(){return J.bHt(this.e,0,new C.eWF())},
Y(){this.a3()
$.aU.bZ$.push(this)
this.wn()},
t(){$.aU.hZ(this)
this.a2()},
jm(d){if(d===B.fW)this.wn()},
wn(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wn=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.DA(q.a.c).dg(0,B.k4),$async$wn)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eWB(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eWC(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wn,v)},
Ix(d){return this.bNw(d)},
bNv(){return this.Ix(null)},
bNw(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Ix=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.itk(l,d),$async$Ix)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
r=s.a
q=s.b
p=new C.lF(l,r,q,D.dot,new A.V(Date.now(),0,!1))
w=4
return A.b(C.Me(t.a.c,p),$async$Ix)
case 4:o=f
w=5
return A.b(t.wn(),$async$Ix)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.L(x.q).f.T(D.fmc)
w=1
break}n=J.aT(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gP(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.L(q).f.T(D.fo1)
else n.L(q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.F4(m)
case 1:return A.h(u,v)}})
return A.i($async$Ix,v)},
F4(d){return this.ckm(d)},
ckm(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$F4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hC(s,new C.aum(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$F4)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Me(u.a.c,t),$async$F4)
case 5:case 4:w=6
return A.b(u.wn(),$async$F4)
case 6:return A.h(null,v)}})
return A.i($async$F4,v)},
w8(d){return this.c2R(d)},
c2R(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$w8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bFP(),$async$w8)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hC(r,D.aMi,!0,"NgmyWorksheetProjectScan",x.N),$async$w8)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bGk(q),$async$w8)
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
break}p=C.hiP(s)
w=15
return A.b(C.Me(t.a.c,p),$async$w8)
case 15:o=f
w=16
return A.b(t.wn(),$async$w8)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.L(x.q).f.T(D.fo6)
w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.F4(p)
case 1:return A.h(u,v)}})
return A.i($async$w8,v)},
OB(d){return this.bM8(d)},
bM8(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$OB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cg(null,null,!0,null,new C.eWm(d),s,null,!0,!0,x.y),$async$OB)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.p8(t.a.c,A.a([],x.D)),$async$OB)
case 6:w=7
return A.b(t.wn(),$async$OB)
case 7:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fmh)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OB,v)},
ckz(d){var w=this.c
w.toString
A.bU(B.L,null,new C.eWv(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b8j(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.l(16),p=g.a
if(p)w=B.jY
else w=B.c
v=A.l(16)
u=A.K(p?B.eh:B.bO,B.r,1)
t=d.j(0.14)
s=A.l(12)
s=A.p(r,A.W(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bU,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.m(r,r,p?B.aS:B.av,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aG(!1,B.a3,!0,r,A.aM(!1,q,!0,A.p(r,A.x(A.a([s,B.af,t,B.bF,A.d(h,r,r,r,r,r,r,A.m(r,r,p?B.bu:B.bh,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.h,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.t6,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
a11(d,e){return this.ckn(d,e)},
ckn(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a11=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(B.L,null,new C.eWq(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a11)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hHW(r,new C.eWr(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.OD(d,e),$async$a11)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a11,v)},
b5k(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.l(12)
s=A.p(u,A.W(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bU,u,u,u)
if(d)t=B.aA
else t=h.a?B.aS:B.av
t=A.d(j,u,u,u,u,u,u,A.m(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.m(u,u,w?B.bu:B.bh,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.h,0,B.p),1)
return A.aG(!1,B.a3,!0,u,A.aM(!1,u,!0,new A.D(B.CJ,A.A(A.a([s,B.bb,t,A.W(B.eI,w?B.bu:B.bh,u,u,u,u)],v),B.l,u,B.e,B.h,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai)},
crj(d,e,f,g,h,i){return this.b5k(!1,d,e,f,g,h,i)},
OD(d,e){return this.bMi(d,e)},
bMi(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lr(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$OD)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bEw(t.a.c,d.a),$async$OD)
case 6:w=7
return A.b(t.wn(),$async$OD)
case 7:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$OD,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.uj(n),l=n?B.c4:B.hY
if(p.f)n=D.beL
else{w=A.aE(d,B.dD,x.w).w
v=p.bGC(m)
u=p.c1V(m)
t=p.gbDI()
if(n)s=B.jY
else s=B.c
r=A.l(13)
q=x.p
t=A.a([v,B.af,u,B.aO,new C.Gm(A.p(o,A.A(A.a([p.aDC(Q.Po,"Projects",m,D.ae8),p.aDC(B.uR,"Cashier",m,D.b2y),p.aDC(B.Hv,"Family Tree",m,D.hJ7)],q),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(s,o,o,r,o,o,B.n),o,o,o,o,o,o,o,o),14,B.eC,0.95,t,o),B.bx],q)
v=p.d
if(v===D.ae8){v=J.ad(p.e)
B.d.u(t,A.a([A.A(A.a([A.d("Projects ("+v+")",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,16,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b3,new C.aze(p.gaTm(),o)],q),B.l,o,B.e,B.h,0,o,o),B.aB,p.crl(m)],q))}else{n=p.a
if(v===D.b2y)t.push(new C.aq9(n.c,m,o))
else{v=p.r
t.push(new C.arn(n.c,n.d,n.e,n.f,new C.eWI(p),new C.eWJ(p),new A.bh(v,x.b4)))}}n=A.ca(A.x(t,B.E,o,B.e,B.h,0,B.p),B.t,o,B.y,o,new A.Q(20,w.r.b+8,20,32),o,o,B.ah)}return A.c4(o,l,A.bm(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bGC(d){var w=null,v=A.l(8),u=d.a,t=A.W(Y.a2F,u?B.bu:B.bh,w,w,w,16)
return A.aM(!1,v,!0,new A.D(B.kz,A.A(A.a([t,B.bn,A.d("Back to Profile",w,w,w,w,w,w,A.m(w,w,u?B.bu:B.bh,w,w,w,w,w,w,w,w,14,w,w,B.a9,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.N,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eWj(this),w,w,w,w,w,w,w)},
gbDI(){switch(this.d.a){case 0:return D.adg
case 1:return D.hye
case 2:return D.adh}},
c1V(d){var w=null,v=A.l(15),u=A.a([new A.ab(0,B.G,B.aV.j(0.35),B.cz,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.c0C,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bb,D.bL6,A.aG(!1,B.a3,!0,w,A.aM(!1,A.l(12),!0,A.p(w,D.bYX,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eWn(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)],t),B.E,w,B.e,B.h,0,w,w),r=B.b2.j(0.55),q=A.l(12)
return new C.Gm(A.p(w,A.x(A.a([new A.D(B.H6,s,w),A.p(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.m(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a9,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aw,A.d(A.Bl(this.gcH8()),w,w,w,w,w,w,D.fFY,w,w,w)],t),B.E,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.t5,B.jr,w,w,1/0)],t),B.E,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hyd,w)},
aDC(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.l(12),r=t?B.aV:B.L,q=A.l(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.ab(0.5,B.G,B.aV.j(0.42),B.cJ,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bu:B.bh
w=A.W(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bu:B.bh
return A.E(A.aG(!1,B.a3,!0,u,A.aM(!1,s,!0,A.cT(u,A.A(A.a([w,B.e6,new A.di(1,B.cm,A.d(e,u,1,B.a2,u,u,u,A.m(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.b8,B.h,0,u,u),u,u,B.cj,new A.o(r,u,p,q,o,u,B.n),B.iQ,u,u,u,u,B.He,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eWE(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),1)},
crl(d){var w,v,u,t,s,r,q=this,p=null
if(J.ct(q.e)){w=d.a
v=w?B.ef:B.c
u=A.l(15)
t=A.p(p,D.bZ3,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ab(2,B.G,B.aV.j(0.5),B.eR,28)],x.V),D.caA,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.m(p,p,w?B.aS:B.av,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Gm(A.p(p,A.x(A.a([t,B.da,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.m(p,p,w?B.bu:B.bh,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.e1,A.A(A.a([A.E(q.aUX(B.jv,"Scan QR",new C.eWy(q),d),1),B.at,A.E(q.aUX(R.zG,"Upload file",new C.eWz(q),d),1)],r),B.l,p,B.e,B.h,0,p,p),B.aB,A.bI(D.h6G,p,q.gaTm(),A.bo(B.aV,p,p,p,B.c,B.hf,p,p,new A.b9(A.l(12),B.a1),p,p,p))],r),B.l,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bHB,1.05,D.adg,p)}w=J.b7(q.e,new C.eWA(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Gm(A.x(w,B.l,p,B.e,B.h,0,B.p),16,B.bU,1,D.adg,p)},
aUX(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.l(12),t=A.l(12),s=A.l(12),r=A.K(B.aV.j(0.45),B.r,1)
return A.aG(!1,B.a3,!0,u,A.aM(!1,t,!0,A.p(w,A.x(A.a([A.W(d,B.b2,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.fE8,B.K,w,w)],x.p),B.l,w,B.e,B.N,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.a0S,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
crk(d,e){var w,v,u=null,t=e.a,s=t?B.ef:B.c,r=A.l(14),q=A.K(t?B.eh:B.bO,B.r,1),p=A.a([new A.ab(0,B.G,B.w.j(t?0.35:0.08),B.et,10)],x.V),o=A.l(14),n=t?B.bu:B.bh
n=A.bu(B.Y2,new A.fH(1.7777777777777777,C.aSA(!0,B.fj,1/0,Q.Po,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.m(u,u,t?B.aS:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.aw,A.d(""+d.d.length+" budget items \xb7 "+A.Bl(d.gxJ()),u,u,u,u,u,u,D.fC4,u,u,u)],w),B.E,u,B.e,B.h,0,B.p),1)
return A.p(u,A.aG(!1,B.a3,!0,u,A.aM(!1,o,!0,A.x(A.a([n,new A.D(B.bI,A.A(A.a([v,A.aI(u,u,u,u,A.W(Al.a3K,t?B.bu:B.bh,u,u,u,u),u,u,u,new C.eWw(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.h,0,u,u),u)],w),B.E,u,B.e,B.h,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eWx(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.el,u,u,u,1/0)}}
C.bAx.prototype={}
C.rr.prototype={
aj(){var w=this,v=w.c,u=w.d
return A.J(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd09(){var w,v,u,t,s=this.c
if(s===B.j.fK(s))w=B.o.v(B.j.M(s))
else{v=B.j.ad(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lF.prototype={
gxJ(){return B.d.cE(this.d,0,new C.cGT())},
aj(){var w=this,v=w.d,u=A.U(v).k("N<1,a9<n,@>>")
v=A.C(new A.N(v,new C.cGS(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bfJ(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lF(w.a,w.b,v,u,w.e)},
bfr(d){return this.bfJ(d,null)},
TH(d){return this.bfJ(null,d)}}
C.It.prototype={
a7(){return"FamilyGender."+this.b}}
C.hZ.prototype={
aj(){var w=this
return A.J(["id",w.a,"name",w.b,"gender",C.hD5(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aGl(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hZ(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.amo.prototype={
a7(){return"FamilyTreeAccessRole."+this.b}}
C.kZ.prototype={
gaqK(){var w=this.f
return new A.Y(w,new C.bTd(),A.U(w).k("Y<1>")).gJ(0)},
aj(){var w=this,v=w.f,u=A.U(v).k("N<1,a9<n,@>>")
v=A.C(new A.N(v,new C.bTc(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.ijG(w.y),"games",w.z],x.N,x.z)},
x4(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kZ(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bfI(d,e){var w=null
return this.x4(w,w,w,d,e,w,w,w,w)},
cQv(d,e,f,g,h,i,j){return this.x4(d,e,null,f,g,h,i,j,null)},
aGq(d,e){var w=null
return this.x4(w,w,w,w,d,w,w,e,w)},
cQx(d,e,f,g,h,i,j,k){return this.x4(d,e,null,f,g,h,i,j,k)},
cP0(d){var w=null
return this.x4(w,w,w,w,w,w,w,d,w)},
cPo(d){var w=null
return this.x4(w,w,w,w,w,w,w,w,d)},
bfl(d){var w=null
return this.x4(w,w,d,w,w,w,w,w,w)},
aGb(d){var w=null
return this.x4(w,w,w,w,w,d,w,w,w)},
cQ2(d,e,f){var w=null
return this.x4(w,d,w,w,e,w,w,f,w)},
cOO(d){var w=null
return this.x4(w,w,w,d,w,w,w,w,w)},
cPA(d,e){var w=null
return this.x4(d,w,w,w,w,w,e,w,w)}}
C.cGU.prototype={
a7(){return"WrapAlignment."+this.b}}
C.cGV.prototype={
a7(){return"WrapCrossAlignment."+this.b}}
C.aJ4.prototype={}
C.bb6.prototype={
ak(d){this.a=d.a
this.b=d.b},
cZ(d){var w=new C.bb6()
w.a=this.a
w.b=this.b
return w},
v(d){return A.b3(this).v(0)+" first:"+this.a+" last:"+this.b}}
C.bb5.prototype={
gwV(){return!0},
gGD(){return this.z.b<this.b.length},
aWD(d){switch(0){case 0:return d.a.c}},
aWj(d){switch(0){case 0:return d.a.d}},
bWm(d,e){switch(0){case 0:return new A.hV(d,e)}},
bVK(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hh(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iS(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Ic(b4)
switch(0){case 0:v=b5.b
u=new A.kW(0,v,0,1/0)
t=w===B.VK
break}s=A.a([],x.gZ)
r=A.T(x.gF,x.S)
for(b3=b1.z,q=B.d.fN(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.I)(q),++h){g=q[h]
g.hh(b4,u,!0)
f=b1.aWD(g)
f.toString
e=b1.aWj(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJ4(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJ4(k,j,i))}d=s.length
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
a8=b1.aWD(g)
e=b1.aWj(g)
e.toString
a9=b1.bVK(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bWm(a6,a3+a9)
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
w.iv()
v=A.dq()
u=r.a
v.ec(u.a,u.b,0,1)
w.pt(0,v)
for(u=r.z,u=B.d.dv(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.I)(u),++s)u[s].fV(d)
w.nE(0)},
H8(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
iv(){return this.z}}
C.byN.prototype={}
var z=a.updateTypes(["aB<~>()","R(hZ)","~()","R(kZ)","R(nw)","a9<n,@>(kZ)","H(kZ,kZ)","H(hZ,hZ)","n(hZ)","kZ(a9<@,@>)","R(lF)","nw(a9<@,@>)","a9<n,@>(nw)","R(uU)","uU()","H(hZ)","ai<hZ>()","R(zA)","a0j(Z)","n?(hZ)","eL<n?>(hZ)","aB<~>(lF)","R(rr)","a9<n,@>(hZ)","hZ(a9<@,@>)","H(lF,lF)","R(ag7)","~(bd)","v(oL)","H(H,aab)","R(qK<H>)","~(qK<H>)","U5(Z)","R(MS)","R(uT)","~(hZ)","n(n)","Wq(Z)","U4(Z)","aeu(Z)","a_f(Z)","hZ(hZ)","cK(bA<n,GC>)","cK(KZ)","a_J(Z)","H?(hZ)","hZ()","R(KZ)","D(hZ)","~(It)","a_F(Z)","v(It,n,a_)","R(ag0)","bA<n,ai<a9<n,@>>>(n,ai<nw>)","a_H(Z)","+count,id,name(H,n,n)(kZ)","n(kZ)","a0D(Z)","a0E(Z)","R(lY)","lY()","ZO(Z)","a2p(Z)","a_h(Z)","a_g(Z)","~(H)","~(n,lv?)","v(rr)","aeP(Z)","~(mm)","aB<~>([n?])","G(G,lF)","v(lF)","G(G,rr)","a9<n,@>(rr)","rr(a9<@,@>)","ai<lv>()","uT()","n(V)","lF(a9<@,@>)","cv(Is)","n(lF)","a9<n,@>(lF)","H(nw,nw)","kZ(a9<n,@>)","kZ(kZ)"])
C.fPM.prototype={
$1(d){return d.a+" "+d.b},
$S:129}
C.fPL.prototype={
bp0(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.rh(s,d,B.i2,"book",E.GU),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.X(r!=null&&A.M0(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bp0(d)},
$S:258}
C.fPN.prototype={
$1(d){return d.b},
$S:129}
C.fZt.prototype={
$1(d){var w=null
return A.eG(w,B.L,new H.Qw(this.a,this.b,w),w,w,0,B.a15,w,B.d6,w,w,w)},
$S:47}
C.fCT.prototype={
$1(d){return d!=null},
$S:217}
C.fCU.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:217}
C.fCZ.prototype={
$1(d){if(this.a)return new A.r(d.a*520,d.b*160)
return d},
$S:170}
C.fNv.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fe(d,w,w,w,A.hg(w,B.tK,w,w,w,w,w,w,w,B.dE,w,w,10.5,w,B.eD,w,!0,w,w,w,w),w),u=f?B.eD:B.wJ
return new A.oc(D.bCW,A.ab0(A.a([new A.fZ(130,w,v),new A.zz(1,B.Ho,A.fe(e,w,w,w,A.hg(w,g==null?D.eyN:g,w,w,w,w,w,w,w,B.dE,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.yE,B.lV))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1971}
C.fNu.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.w2(999)
f=A.xF(A.lT(h,A.fe("Cashier",h,h,h,A.hg(h,D.AB,h,h,h,h,h,h,h,B.dE,h,h,10,h,B.eD,h,!0,h,h,h,h),h),h,new A.kX(D.eyE,h,f,B.i7,h),h,h,D.bDp,h))
w=A.xF(A.fe("Debt receipt",h,h,h,A.hg(h,h,h,h,h,h,h,h,h,B.dE,h,h,22,h,B.eD,h,!0,h,h,h,h),h))
v=A.xF(A.fe(C.xl(new A.V(Date.now(),0,!1),!0),h,h,h,D.abJ,h))
u=A.w2(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fe(s,h,h,h,A.hg(h,h,h,h,h,h,h,h,h,B.dE,h,h,14,h,B.eD,h,!0,h,h,h,h),h)
r=A.fe("Person who owes",h,h,h,D.abJ,h)
q=A.w2(10)
p=x.Z
u=A.lT(h,A.zs(A.a([s,new A.fZ(h,2,h),r,new A.fZ(h,10,h),A.lT(h,A.zs(A.a([A.fe("Amount owed",h,h,h,D.abJ,h),new A.fZ(h,2,h),A.fe(A.Bl(t.c),h,h,h,A.hg(h,D.AB,h,h,h,h,h,h,h,B.dE,h,h,20,h,B.eD,h,!0,h,h,h,h),h)],p),B.rX,B.lV),h,new A.kX(B.pR,h,q,B.i7,h),h,h,D.bCC,1/0)],p),B.rX,B.lV),h,new A.kX(E.aNF,h,u,B.i7,h),h,h,D.bEA,1/0)
q=new A.nV(D.eyH,0.9,B.le)
r=A.w2(12)
s=i.c
o=s.$2("Original due",C.xl(t.r,!1))
n=s.$2("Current due",C.xl(t.f,!1))
m=i.d
l=new A.nV(m,1.1,B.le)
k=A.w2(8)
j=i.a
k=A.a([o,n,new A.fZ(h,6,h),A.lT(h,A.xF(A.fe(t.gaNw(),h,h,h,A.hg(h,m,h,h,h,h,h,h,h,B.dE,h,h,11,h,B.eD,h,!0,0.5,h,h,h),h)),h,new A.kX(h,new A.q0(l,l,l,l),k,B.i7,h),h,h,D.bDx,1/0),new A.fZ(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.AB))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.AB))
else{n=A.fe("Missed days ("+n+")",h,h,h,A.hg(h,B.tK,h,h,h,h,h,h,h,B.dE,h,h,10.5,h,B.eD,h,!0,h,h,h,h),h)
m=A.U(o).k("N<1,TF>")
o=A.C(new A.N(o,new C.fNt(),m),m.k("ak.E"))
B.d.u(k,A.a([new A.fZ(h,4,h),n,new A.fZ(h,6,h),new C.bb5(5,5,new C.bb6(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.u(k,A.a([new A.fZ(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fZ(h,8,h),w,new A.fZ(h,3,h),v,new A.fZ(h,16,h),u,new A.fZ(h,10,h),A.lT(h,A.zs(k,B.yE,B.lV),h,new A.kX(h,new A.q0(q,q,q,q),r,B.i7,h),h,h,B.amv,1/0)],p)
w=j.a
if(w!=null){v=new A.nV(B.JY,1,B.le)
B.d.u(f,A.a([new A.fZ(h,16,h),A.fe("Debtor signature",h,h,h,A.hg(h,B.tK,h,h,h,h,h,h,h,B.dE,h,h,10,h,B.eD,h,!0,h,h,h,h),h),new A.fZ(h,6,h),A.lT(h,new A.IN(w,B.Yf,h,h),h,new A.kX(h,new A.q0(v,v,v,v),A.w2(6),B.i7,h),82,h,B.OI,1/0)],p))}f.push(new A.fZ(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fe(w,h,h,h,D.fun,h))
f.push(new A.fZ(h,18,h))
f.push(A.xF(A.fe("NGMY.ORG",h,h,h,A.hg(h,D.AB,h,h,h,h,h,h,h,B.dE,h,h,14,h,B.eD,h,!0,1.8,h,h,h),h)))
return f},
$S:363}
C.fNt.prototype={
$1(d){var w=null,v=new A.nV(D.JZ,0.7,B.le),u=A.w2(999)
return A.lT(w,A.fe(C.xl(d,!1),w,w,w,A.hg(w,D.JZ,w,w,w,w,w,w,w,B.dE,w,w,9.5,w,B.eD,w,!0,w,w,w,w),w),w,new A.kX(w,new A.q0(v,v,v,v),u,B.i7,w),w,w,D.bJ1,w)},
$S:1972}
C.c8v.prototype={
$1(d){var w=null,v=B.bD.j(0.08),u=A.l(999),t=A.K(B.bD.j(0.28),B.r,1)
return A.p(w,A.d(C.xl(d,!1),w,w,w,w,w,w,D.fBw,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eK,w,w,w)},
$S:1973}
C.h__.prototype={
$1(d){var w=null,v=A.aE(d,B.bY,x.w).w,u=A.l(26),t=A.aI(w,w,w,w,D.c1B,w,w,w,new C.fZX(d),w,w,w,w,w,B.cg),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eG(w,B.L,new A.cN(new A.aY(0,380,0,v.a.b*0.9),A.aG(!1,B.a3,!0,u,new A.D(B.a0U,A.x(A.a([new A.bJ(B.a8,w,w,t,w),new A.di(1,B.cm,A.ca(A.x(A.a([new A.en(new C.b07(r,w),s),B.T,A.A(A.a([A.E(A.em(B.zO,w,D.h2V,new C.fZY(s,r,d),A.dj(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fg,w,new A.b9(A.l(14),B.a1),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ae,A.E(A.dh(B.a4m,w,D.h_j,new C.fZZ(r,d),A.bo(B.b2,w,w,w,B.c,w,B.fg,w,new A.b9(A.l(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.h,0,w,w)],p),B.l,w,B.e,B.N,0,B.p),B.t,w,B.y,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.N,0,B.p),w),B.f,B.av,0,w,w,w,w,w,B.ai),w),w,w,0,Aq.a1h,w,B.d6,w,w,w)},
$S:47}
C.fZX.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.fZY.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aU.ap$.x.h(0,t.a)
m=m==null?null:m.gbf()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lW(2.5),$async$$0)
case 4:w=3
return A.b(e.hj(B.he),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eQ(B.dK.gaT(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.aA(o,0,32)
w=5
return A.b(A.rk(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fZZ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fUc(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.L(x.q).f
s.T(A.b2(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fZS.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.b
return A.eG(w,B.av,A.x(A.a([new A.D(D.bEo,A.A(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nh,w,w,w),1),A.aI(w,w,w,w,B.lr,w,w,w,new C.fZQ(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),w),new A.di(1,B.cm,new A.D(B.f3,A.bu(A.l(14),A.fV(t,B.z,w,w,B.ck,B.dC,!1,w,!1,w,w),B.aq),w),w),new A.D(B.Ol,new A.a4(1/0,w,A.dh(B.oP,w,D.aY_,new C.fZR(t,this.c,d),A.bo(B.b2,w,w,w,B.c,w,w,w,new A.b9(A.l(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.N,0,B.p),w,w,w,B.Oy,w,B.d6,w,new A.b9(v,B.a1),w)},
$S:47}
C.fZQ.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.fZR.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rk(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h_3.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.a,s=this.b
return A.eG(w,B.av,new A.D(D.bEw,A.x(A.a([A.A(A.a([D.bKb,A.aI(w,w,w,w,B.lr,w,w,w,new C.h_1(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),B.P,new A.en(A.bu(A.l(14),A.p(w,A.b4(w,w,w,new C.bdk(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.af,new A.a4(1/0,w,A.dh(B.oP,w,D.aY_,new C.h_2(t,s,d),A.bo(B.b2,w,w,w,B.c,w,w,w,new A.b9(A.l(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.N,0,B.p),w),w,w,w,w,w,B.d6,w,new A.b9(v,B.a1),w)},
$S:47}
C.h_1.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.h_2.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aU.ap$.x.h(0,t.a)
n=n==null?null:n.gbf()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lW(2.5),$async$$0)
case 4:w=3
return A.b(e.hj(B.he),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.aA(p,0,32)
r=J.eQ(B.dK.gaT(s))
w=5
return A.b(A.rk(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fHL.prototype={
$1(d){return d.a===this.a},
$S:274}
C.dQU.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dQF.prototype={
boe(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.ef:B.c
s=u.a
w=2
return A.b(A.bU(t,null,new C.dQI(s,q,e),p,!0,!0,!1,B.Kf,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dQJ(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.boe(d,e)},
$S:1974}
C.dQI.prototype={
$1(d){var w,v=null,u=this.c===B.xf,t=u?D.dvs:D.dqY
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.m(v,v,w.a.d.a?B.aS:B.av,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(O.an1,A.x(A.a([u,B.aw,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.m(v,v,w.a.d.a?B.bu:B.bh,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.it(!0,v,v,B.y,D.fkS,new C.dQH(this.a,w,t,d),t.length,v,B.e_,B.ah,!0)],x.p),B.al,v,B.e,B.N,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:25}
C.dQH.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.l(14)
if(q)w=B.cU.j(0.14)
else w=t.b.a.d.a?B.a_:B.aS
v=A.l(14)
if(q)u=B.cU
else u=(t.b.a.d.a?B.bu:B.bh).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aM(!1,p,!0,A.p(B.z,C.b06(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dQG(t.d,r),s,s,s,s,s,s,s)},
$S:188}
C.dQG.prototype={
$0(){A.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.dQJ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dQD.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:86}
C.dQE.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cG(B.cj,e,v)
return new A.d2(e,!1,A.ik(B.z,A.as(A.aG(!1,B.a3,!0,v,new A.e2(new C.dQC(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bg(t,new A.bq(0.96,1,u),u.k("bg<bP.T>"))),v)},
$S:34}
C.dQC.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aE(d,B.bY,x.w).w,i=l.b,h=i.a.d.a,g=h?B.ef:B.c,f=A.l(14),e=A.K((h?B.bu:B.bh).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.l(8)
u=x.p
v=A.A(A.a([w,A.aM(!1,v,!0,new A.D(B.eC,A.W(B.cB,i.a.d.a?B.bu:B.bh,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dQn(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.h,0,k,k)
w=l.d
t=A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a9,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aVt("Name")
r=l.a
q=r.d==null?k:new C.dQo(r,l.e,a0)
p=A.l(20)
o=i.a.d.a?B.bs:B.ma
n=A.K(B.cU.j(0.35),B.r,1)
m=r.d
t=A.aN(k,B.Z,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.bfB(new A.D(B.fn,A.aM(!1,p,!0,A.p(B.z,C.b06(m==null?"\ud83d\udc64":A.fOj(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cp,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.la,k,B.aby,k,k)
v=A.a([v,B.af,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bh,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.A(A.a([A.E(i.aW9("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dQp(r,a0),r.d===B.xf),1),B.ae,A.E(i.aW9("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dQu(r,a0),r.d===B.a8f),1)],u),B.l,k,B.e,B.h,0,k,k)],u)
if(r.d!=null)B.d.u(v,A.a([B.P,new A.bJ(B.a5,k,k,A.ht(D.c_Q,D.h1b,new C.dQv(r,l.e,a0),A.fs(k,k,k,k,k,k,k,k,k,k,k,B.cU,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cg)),k)],u))
v.push(B.T)
t=A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a9,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uX(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aVu("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ak,k,k,s,k,k,B.ea,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.T)
t=i.a.d.a
s=t?B.a_:B.aS
q=A.l(10)
p=A.l(10)
o=A.l(10)
n=A.K((t?B.bu:B.bh).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.a9,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xl(r.a,!1)
v.push(A.aG(!1,B.a3,!0,q,A.aM(!1,p,!0,A.p(k,A.A(A.a([A.E(A.x(A.a([t,B.bF,A.d(m,k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.h,0,B.p),1),D.bXs],u),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bj,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dQw(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.u(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.T)
t=A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aVt("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b3H(r.b.length!==0,B.mi,new C.dQx(r,i,a0),new C.dQy(r,a0),"Upload from gallery","ID photo"))
v.push(i.b3H(r.c.length!==0,D.bQL,new C.dQz(r,i,d,a0),new C.dQA(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Ap.a8Q("Signature (optional)",t,new C.dQB(a0),new C.dQq(a0,t),new C.dQr(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bu:B.bh
s=(i?B.bu:B.bh).j(0.28)
s=A.E(A.dV(E.aXT,new C.dQs(d),A.dj(k,k,k,k,k,k,k,k,k,t,k,k,B.qG,k,new A.b9(A.l(10),B.a1),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bo(B.cU,k,k,k,B.c,k,B.qG,k,new A.b9(A.l(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.ae,A.E(A.bI(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vN,k,k,k),k,new C.dQt(r,w,d),t),1)],u),B.l,k,B.e,B.h,0,k,k))
return A.p(k,A.ca(A.x(v,B.al,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.t7,B.jr,k,k,360)},
$S:173}
C.dQn.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dQo.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dQp.prototype={
$0(){return this.b.$1(new C.dQm(this.a))},
$S:0}
C.dQm.prototype={
$0(){var w=this.a
w.d=B.xf
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dQu.prototype={
$0(){return this.b.$1(new C.dQl(this.a))},
$S:0}
C.dQl.prototype={
$0(){var w=this.a
w.d=B.a8f
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dQv.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dQw.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xq(null,u.b,A.c_(2020,1,1,0,0,0,0,0),null,s,A.c_(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dQk(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQk.prototype={
$0(){var w=this.b
return this.a.a=A.c_(w.gcl(),w.gci(),w.gcz(),0,0,0,0,0)},
$S:0}
C.dQx.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Qe(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dQj(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQj.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dQy.prototype={
$0(){return this.b.$1(new C.dQi(this.a))},
$S:0}
C.dQi.prototype={
$0(){return this.a.b=""},
$S:0}
C.dQz.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.ef:B.c
w=3
return A.b(A.bU(q,null,new C.dQg(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Qe(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dQh(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQg.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dI(!1,w,w,w,!0,w,w,w,!0,w,w,B.asr,w,w,w,w,new C.dQa(d),!1,w,w,w,w,w,w,w,D.fSe,w,w,w),A.dI(!1,w,w,w,!0,w,w,w,!0,w,w,B.asp,w,w,w,w,new C.dQb(d),!1,w,w,w,w,w,w,w,D.fZi,w,w,w)],x.p),B.l,w,B.e,B.N,0,B.p),!0,!1,B.ag,!0,!0)},
$S:25}
C.dQa.prototype={
$0(){A.a6(this.a,!1).N("camera")
return null},
$S:0}
C.dQb.prototype={
$0(){A.a6(this.a,!1).N("gallery")
return null},
$S:0}
C.dQh.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dQA.prototype={
$0(){return this.b.$1(new C.dQf(this.a))},
$S:0}
C.dQf.prototype={
$0(){return this.a.c=""},
$S:0}
C.dQB.prototype={
$0(){return this.a.$1(new C.dQe())},
$S:0}
C.dQe.prototype={
$0(){},
$S:0}
C.dQq.prototype={
$0(){return this.a.$1(new C.dQd(this.b))},
$S:0}
C.dQd.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dQr.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.aj0(u.a,null,null,new C.dQc(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQc.prototype={
$4(d,e,f,g){this.a.$1(new C.dQ9(this.b,d))},
$S:445}
C.dQ9.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.u(w,this.b)},
$S:0}
C.dQs.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dQt.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.L(x.q).f.T(D.fq1)
return}if(w.a.d==null){w.c.L(x.q).f.T(D.fmQ)
return}A.a6(w.c,!1).N(!0)},
$S:0}
C.dQX.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:86}
C.dQY.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.ef:B.c,n=A.l(14),m=A.K((p?B.bu:B.bh).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.m(r,r,q.a.d.a?B.aS:B.av,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Bl(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.m(r,r,q.a.d.a?B.bu:B.bh,r,r,r,r,r,r,r,r,13,r,r,B.a9,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zM(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.m(r,r,w.zM(r).length>0?B.bD:B.cU,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bu:B.bh
t=(q?B.bu:B.bh).j(0.28)
s=x.p
return new A.d2(e,!1,A.as(A.aG(!1,B.a3,!0,r,A.p(r,A.x(A.a([p,B.P,v,u,B.aB,A.A(A.a([A.E(A.dV(B.o7,new C.dQV(d),A.dj(r,r,r,r,r,r,r,r,r,w,r,r,B.k5,r,new A.b9(A.l(10),B.a1),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ae,A.E(A.bI(D.fZK,r,new C.dQW(d),A.bo(B.cU,r,r,r,B.c,r,B.k5,r,new A.b9(A.l(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.h,0,r,r)],s),B.al,r,B.e,B.N,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.CN,B.H6,r,r,300),B.f,B.L,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:34}
C.dQV.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dQW.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dQR.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dQS(r),p=r.a.d.a,o=p?B.ef:B.c,n=A.l(14),m=A.K((p?B.bu:B.bh).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.m(s,s,r.a.d.a?B.aS:B.av,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Bl(l.c),s,s,s,s,s,s,D.fD9,s,s,s)],p),B.l,s,B.e,B.h,0,s,s)
w=A.iP((r.a.d.a?B.bu:B.bh).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a30,"View receipt",new C.dQK(r,d,l))
u=l.x!=null
t=u?B.pE:B.qP
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bEt,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dQL(r,d,l)),q.$3$icon$label$onTap(B.D2,"Edit",new C.dQM(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mi,"View / download ID",new C.dQN(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bQK,"View / download selfie",new C.dQO(r,d,l)))
if(l.gaI6())p.push(q.$3$icon$label$onTap(Ad.a4c,"View / download signature",new C.dQP(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bD,B.ej,"Delete",new C.dQQ(r,d,l)))
p.push(B.aw)
return A.bm(!0,new A.D(B.t5,A.p(s,A.x(p,B.l,s,B.e,B.N,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:25}
C.dQS.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aS:B.av
else w=d
return A.aM(!1,v,!0,new A.D(B.eV,A.A(A.a([A.W(e,w,v,v,v,20),B.bb,A.d(f,v,v,v,v,v,v,A.m(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.h,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1975}
C.dQK.prototype={
$0(){A.a6(this.b,!1).N(null)
var w=this.a.c
w.toString
C.fZW(w,this.c)},
$S:0}
C.dQL.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.T0(this.c)},
$S:0}
C.dQM.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.DK(this.c)},
$S:0}
C.dQN.prototype={
$0(){var w,v,u
A.a6(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bGF(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dQO.prototype={
$0(){var w,v,u
A.a6(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bGF(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dQP.prototype={
$0(){A.a6(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h_0(w,this.c)},
$S:0}
C.dQQ.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.Qd(0,this.c)},
$S:0}
C.dQZ.prototype={
$1(d){return d.x==null},
$S:274}
C.dR_.prototype={
$1(d){return d.x!=null},
$S:274}
C.dR0.prototype={
$2(d,e){return d+e.c},
$S:1976}
C.dR1.prototype={
$0(){return this.a.bEd()},
$S:0}
C.dQT.prototype={
$0(){return this.a.agy(this.b)},
$S:0}
C.fIw.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fIx.prototype={
$0(){return B.d.gH(D.a5w)},
$S:z+77}
C.dgy.prototype={
$0(){var w=this.a
return w.m(new C.dgw(w,this.b))},
$S:0}
C.dgw.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dgx.prototype={
$0(){},
$S:0}
C.dgz.prototype={
$0(){var w=this.a.gc2F()
A.a6(this.b,!1).N(w)
return null},
$S:0}
C.fL1.prototype={
$1(d){return C.hng(A.a1(d,x.N,x.z))},
$S:z+11}
C.fL2.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fL3.prototype={
$2(d,e){var w=A.cb(d.a,null),v=A.cb(e.a,null)
if(w!=null&&v!=null)return B.o.aQ(w,v)
return d.d.aQ(0,e.d)},
$S:z+83}
C.fYx.prototype={
$1(d){return d.aj()},
$S:z+12}
C.h69.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fHC.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bRV.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eK(e,v)?v:null},
$S:1977}
C.fZ7.prototype={
$1(d){var w=this
return new C.a_H(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dhd.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dhc(w,d))},
$S:z+80}
C.dhc.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dh1.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cJ(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dgZ.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dgA.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dgB.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dh2.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dgJ.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.ef:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ej(A.a([A.bO(!1,B.ds,w,w,!0,w,w,w,new C.dgH(d),w,w),A.bI(B.xF,w,new C.dgI(d),A.bo(B.nr,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.dgH.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dgI.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dgK.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.dh_.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dh0.prototype={
$0(){return B.d.gH(D.A0)},
$S:z+14}
C.dgF.prototype={
$1(d){var w=this.a,v=w.y,u=w.gz6(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.U4(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dgG.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgL.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a_f(v,u,J.ad(w.d),null)},
$S:z+40}
C.dgM.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dhb.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.az(s,new C.ZX(r.y,r.gz6(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dh9(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bcH(v,e,w,u,t,r.gbUP(),C.hD4(r.y.Q),r.gz6(0),s)
w=t}return A.c6(q,new C.dha(r,e),new A.D(B.a1a,w,s))},
$S:1978}
C.dha.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd5(t).ay){t=this.b
u=x.cy.a(B.d.gd5(u.f.f)).gvr(0)
w=t-(u==null?t:u)}else w=0
v=B.j.D(w,-1,0)
u=A.dq()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fE(v*3.141592653589793*0.5)
return A.fA(B.a5,A.d3(e,B.j.D(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.dh9.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJi(B.qy,B.iB)},
$S:0}
C.dgW.prototype={
$0(){var w=this.a
return w.m(new C.dgV(w))},
$S:0}
C.dgV.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dgX.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).N(null)
return null},
$S:0}
C.dgC.prototype={
$1(d){var w,v,u=null,t=A.l(26),s=E.ku.j(0.5),r=x.p,q=A.a([D.fQM,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ct(p.d)?"Write this book":"Write a new book"
q.push(p.a_1(d,B.e9,w,J.ct(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.a_1(d,K.aqm,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cJ(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cw,A.d("Your book is in English.",u,u,u,u,u,u,A.m(u,u,D.kP.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cw,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.m(u,u,D.kP.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.a_1(d,X.ark,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.a_1(d,B.oM,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.a_1(d,B.oM,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.u(q,r)}return A.eG(u,E.Cb,A.bm(!0,new A.D(Ac.yX,A.x(q,B.E,u,B.e,B.N,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,B.OB,u,B.d6,u,new A.b9(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:47}
C.dgY.prototype={
$0(){A.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.dgP.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cJ(w.d)
return new C.a_J(v,J.cJ(w.d),w.r+1,null)},
$S:z+44}
C.dgQ.prototype={
$1(d){var w=null
return A.oQ(!1,A.ej(w,w,w,E.Cb,new A.k5(this.a,new C.dgO(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:324}
C.dgO.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.abc,B.p5,A.E(A.d(e,w,w,w,w,w,w,B.jC,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:762}
C.dgR.prototype={
$0(){return this.a.a=!1},
$S:52}
C.dgS.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:183}
C.dgT.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgU.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Bu(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.SJ(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.dgN(s,t))
w=4
return A.b(s.lj(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dgN.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dh4.prototype={
$1(d){var w=null
return A.oQ(!1,A.ej(w,w,w,E.Cb,new A.k5(this.a,new C.dh3(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:324}
C.dh3.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.abc,B.p5,A.E(A.d(e,w,w,w,w,w,w,B.jC,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:762}
C.dh5.prototype={
$0(){return this.a.a=!1},
$S:52}
C.dh6.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:183}
C.dh7.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:183}
C.dh8.prototype={
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
C.dgD.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bla(B.qy,A4.O9)},
$S:0}
C.dgE.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJi(B.qy,A4.O9)},
$S:0}
C.dj_.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dj0.prototype={
$1(d){var w=this.a
return w.m(new C.diZ(w))},
$S:9}
C.diZ.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dj1.prototype={
$1(d){var w=this.a
return w.m(new C.diY(w))},
$S:9}
C.diY.prototype={
$0(){return this.a.e="book"},
$S:0}
C.dj2.prototype={
$1(d){var w=this.a
return w.m(new C.diX(w))},
$S:9}
C.diX.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dj3.prototype={
$0(){var w=this.a
return w.m(new C.diW(w,this.b))},
$S:0}
C.diW.prototype={
$0(){var w=this.b
this.a.d.sb3(0,w)
return w},
$S:0}
C.dj4.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga2R()
A.a6(this.b,!1).N(new A.brA(w,v))},
$S:0}
C.dhs.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dhr.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a_F(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dhw.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dhv.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.bb8(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hs,v,v,v)
return A.ej(A.a([A.bO(!1,B.ds,v,v,!0,v,v,v,new C.dht(d),v,v),A.bI(B.xF,v,new C.dhu(d),A.bo(B.nr,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.Cb,w,v,v,v,v,D.fPy,v)},
$S:18}
C.dht.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dhu.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dhx.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dhy.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)r.push(new A.a4(s,t,w[u],t))
return A.ca(A.bZ(B.bH,r,B.br,t,18,14),B.t,t,B.y,t,D.bFs,t,t,B.ah)},
$S:281}
C.dhq.prototype={
$0(){return this.a.R0(0,this.b)},
$S:0}
C.dhp.prototype={
$0(){return this.a.Qs(0,this.b)},
$S:0}
C.cPR.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cPS.prototype={
$0(){return B.d.gH(D.A0)},
$S:z+14}
C.cPT.prototype={
$4(d,e,f,g){var w=null,v=A.l(e)
return A.bR(0,new A.D(d,new A.bM(new A.o(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.n),B.bi,w,w),w),0,0,0)},
$S:1980}
C.d8p.prototype={
$1(d){return this.a.m(new C.d8o(this.b,this.c))},
$S:9}
C.d8o.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d8O.prototype={
$1(d){return this.a.m(new C.d8B())},
$S:2}
C.d8B.prototype={
$0(){},
$S:0}
C.d8P.prototype={
$1(d){return this.a.m(new C.d8A())},
$S:2}
C.d8A.prototype={
$0(){},
$S:0}
C.d8Q.prototype={
$0(){var w=this.a
return w.m(new C.d8z(w,this.b))},
$S:0}
C.d8z.prototype={
$0(){var w=this.a
return w.d=w.gow().Gi(this.b.a)},
$S:0}
C.d8R.prototype={
$0(){var w=this.a
return w.m(new C.d8y(w,this.b))},
$S:0}
C.d8y.prototype={
$0(){var w=this.a
return w.d=w.gow().cOk(this.b)},
$S:0}
C.d8S.prototype={
$1(d){return this.a.m(new C.d8x())},
$S:2}
C.d8x.prototype={
$0(){},
$S:0}
C.d8T.prototype={
$0(){var w=this.a
return w.m(new C.d8w(w,this.b))},
$S:0}
C.d8w.prototype={
$0(){var w=this.a
return w.d=w.gow().cOp(this.b.a)},
$S:0}
C.d8U.prototype={
$1(d){var w=this.a
return w.m(new C.d8J(w,d))},
$S:6}
C.d8J.prototype={
$0(){var w=this.a
return w.d=w.gow().cPj(this.b)},
$S:0}
C.d8V.prototype={
$1(d){var w=this.a
return w.d=w.gow().aGe(d)},
$S:2}
C.d8W.prototype={
$1(d){var w=this.a
return w.d=w.gow().cOs(d)},
$S:2}
C.d8Y.prototype={
$1(d){var w=this.a
return w.d=w.gow().cPh(d)},
$S:2}
C.d8Z.prototype={
$1(d){var w=this.a
return w.m(new C.d8I(w,d))},
$S:9}
C.d8I.prototype={
$0(){var w=this.a
return w.d=w.gow().cP8(this.b)},
$S:0}
C.d9_.prototype={
$0(){var w=this.a,v=w.gow(),u=B.a.i(w.gz6(0).a.a),t=B.a.i(w.gaDq().a.a)
u=v.bfS(B.a.i(w.gat2().a.a),t,u)
A.a6(this.b,!1).N(u)
return null},
$S:0}
C.bS4.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bRZ.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bRY(w,d))},
$S:12}
C.bRY.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bS7.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bS_.prototype={
$0(){var w=this.a
w.Q=D.b27
w.ae8(1)
w.r.x=null},
$S:0}
C.bS0.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b27)return
w=new A.e_()
w.cU(u.as*13+u.a.e)
v=u.r
v.Q=3+w.aw(3)
v.z=D.d60[w.aw(6)]
v.as=u.f.a+2.6},
$S:0}
C.bS3.prototype={
$0(){var w=this.a
w.Q=D.adO
w.ae8(2)
w.r.z=null},
$S:0}
C.bS2.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hH2
t.ae8(3)
w=t.r
w.d=s
w.x="I say: "+t.gCC()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.aw(3)
w.z=s?D.dcB[v.aw(4)]:D.dy_[v.aw(3)]
w.as=t.a+2.8},
$S:0}
C.bS5.prototype={
$0(){var w=this.a
w.Q=D.b28
w.CW=this.b
w.cy=1
w.ae8(4)
w.r.f=w.f.a+5},
$S:0}
C.bS6.prototype={
$0(){},
$S:0}
C.bS1.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bRW.prototype={
$0(){return this.a.Lc(this.b)},
$S:0}
C.bRX.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bTB.prototype={
$0(){var w=this
return w.a.Rk(w.b,0,w.c,w.d)},
$S:0}
C.bTC.prototype={
$0(){var w=this
return w.a.Rk(w.b,3,w.c,w.d)},
$S:0}
C.bTD.prototype={
$0(){var w=this
return w.a.Rk(w.b,1,w.c,w.d)},
$S:0}
C.bTE.prototype={
$0(){var w=this
return w.a.bUf(w.b,w.c,w.d)},
$S:0}
C.bTF.prototype={
$0(){var w=this
return w.a.Rk(w.b,4,w.c,w.d)},
$S:0}
C.bTG.prototype={
$0(){var w=this
return w.a.Rk(w.b,2,w.c,w.d)},
$S:0}
C.bTH.prototype={
$0(){var w=this
return w.a.Rk(w.b,5,w.c,w.d)},
$S:0}
C.bTI.prototype={
$2(d,e){return B.j.aQ(d.a,e.a)},
$S:763}
C.bTA.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a6G[d],p=q.a.a5(0,new A.r(0,-q.b*1.2*124)),o=A.fE(r,B.cx,r,3,r,A.cS(r,r,r,r,r,r,r,r,r,D.fu3,e),B.a7,B.c_,r,B.dI,B.c0)
o.nA(130)
w=o.b.a.c
w=p.aJ(0,new A.r(0,w.gba(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bx(A.bW(w,v.gba(v)+12,u+18),B.i5)
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
$S:764}
C.bSl.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.bSm.prototype={
$2(d,e){var w=this.a,v=B.o.aQ(w.amQ(d),w.amQ(e))
if(v!==0)return v
return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.fvH.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.h60.prototype={
$2(d,e){if(e!=null)J.c5(this.a.c4(0,d,new C.h61()),e)},
$S:z+66}
C.h61.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.h62.prototype={
$1(d){return d!==this.a},
$S:3}
C.h63.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.h64.prototype={
$1(d){return d!==this.a&&!B.d.aU(this.b,new C.h6_(this.c,d))},
$S:3}
C.h6_.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.h65.prototype={
$1(d){return d!==this.a},
$S:3}
C.h66.prototype={
$1(d){return d!==this.a},
$S:3}
C.h67.prototype={
$1(d){return d!==this.a&&!B.d.aU(this.b,new C.h5Z(this.c,d))},
$S:3}
C.h5Z.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fJ7.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fXu.prototype={
$1(d){return d.Q},
$S:z+15}
C.fXv.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fEY.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fLY.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bN8.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.h6q.prototype={
$2(d,e){return B.o.aQ(C.hzj(d),C.hzj(e))},
$S:230}
C.h6r.prototype={
$1(d){return d!==this.a},
$S:3}
C.fY3.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bLi.prototype={
$0(){var w=this.a
w.ch=!0
w.b9n()},
$S:0}
C.bLd.prototype={
$0(){},
$S:0}
C.bLj.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bLb.prototype={
$0(){},
$S:0}
C.bLc.prototype={
$0(){},
$S:0}
C.bLh.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bR(0,A.b4(u,u,u,new C.bdm(t,u),B.az),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.l(14)
s.push(A.ao(u,A.p(u,A.d(t.dy,u,u,u,u,u,u,D.fBI,B.K,u,u),B.f,u,u,new A.o(w,u,u,v,u,u,B.n),u,u,u,u,B.bU,u,u,u),u,u,14,14,6,u))}return A.az(B.bX,new A.an(B.a0,u,B.ad,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bLe(t,e),u,u,u,u,u,u,u,new C.bLf(t,e),u,u,u,u,u,u,u,u,u,new C.bLg(t,e),u,u,u,u,!1,B.a4)},
$S:36}
C.bLe.prototype={
$1(d){return this.a.db=B.j.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bLg.prototype={
$1(d){return this.a.db=B.j.D(d.b.a/this.b.b,0.08,0.92)},
$S:23}
C.bLf.prototype={
$1(d){return this.a.db=B.j.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bLa.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.cqU.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cqV.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cqT(w))},
$S:0}
C.cqT.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cqW.prototype={
$0(){var w=this,v=w.a
v.gj1()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cqX.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cqY.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cqZ.prototype={
$0(){},
$S:0}
C.cr_.prototype={
$0(){var w=this.a
w.z=w.Xw(++w.e)
w.Q=A.c1(w.gkS()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cqQ.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.cqR.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj1().length,e=i/2,d=new C.cqS(i,f,h),a0=g.as,a1=A.a3(a0).k("b8<2>")
a0=A.C(new A.b8(a0,a1),a1.k("M.E"))
a0=A.bR(0,A.c6(new A.hb(a0),new C.cqL(g,new A.r(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj1().length!==0&&!B.d.q(g.gj1(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.QO(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cK(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new S.N_(new C.cqM(g,u),new C.cqN(g,u),new C.cqO(g,u),j,j,new A.bh("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.d(a1,j,j,j,j,j,j,A.m(j,j,B.a.q(a1,"not a child")?B.fh:B.bc,j,j,j,j,j,j,j,j,13,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj1().length!==0&&!B.d.q(g.gj1(),-1)){a0=g.e+1>=g.gkS().length?"See my result":"Next family"
g=A.as(C.ux(a0,g.gqs(g),B.cT,B.jt,D.fB),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.Xw(0):s).length))break
if(!B.d.q(g.gj1(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.Xw(0)
o=s}else o=s
n=s[u]
n=A.e3(B.z,new C.QO(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.Xw(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.r7(new A.bq(0,p,t),new C.cqP(),new S.En(u,j,new C.QO(l.b,k,62,!1,j),new A.kJ(0.25,new C.QO(m.b,k,62,!1,j),j),new A.kc(n,B.ai,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.J,S.hCX(),!0,!0,j,j,j,j,j,j,!1,B.iT,j,new A.bh("chip-"+r,a0),w),B.b0,B.iR,j,new A.bh("t"+r+"-"+q,a0),v))}++u}g=A.bZ(B.fU,a1,B.br,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ad,B.t,e,j)},
$S:66}
C.cqS.prototype={
$1(d){return new A.r(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:755}
C.cqL.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.gj1().length!==0&&!B.d.q(t.gj1(),-1)
return A.b4(p,p,p,new C.bcQ(q.b,o,v,w,p),B.az)},
$S:56}
C.cqN.prototype={
$1(d){return this.a.gj1()[this.b]===-1},
$S:z+30}
C.cqO.prototype={
$1(d){return this.a.cSb(this.b,d.a)},
$S:z+31}
C.cqM.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj1()[t]!==-1,r=A.l(18),q=e.length!==0?B.cT.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.cT:B.k_,B.r,2)
u=s?A.lE(new C.cqK(),A.as(new C.QO(u.gaFH()[u.gj1()[t]].b,u.gaFH()[u.gj1()[t]].a,62,!1,v),v,v,v),B.nl,B.iR,v,v,new A.bq(0.3,1,x.X),x.i):D.bdp
return A.cT(v,u,v,v,B.b0,new A.o(q,v,w,r,v,v,B.n),B.a3,v,100,v,v,v,v,v,88)},
$S:1983}
C.cqK.prototype={
$3(d,e,f){return A.e3(B.z,f,e,null,null)},
$S:114}
C.cqP.prototype={
$3(d,e,f){return A.dP(f,new A.r(Math.sin(e*24)*8*(1-e),0))},
$S:114}
C.cQV.prototype={
$1(d){return d>=1},
$S:115}
C.cFS.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkS()[w.e].d.length)w.m(new C.cFR(w))},
$S:12}
C.cFR.prototype={
$0(){return this.a.f++},
$S:0}
C.cG_.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cG0.prototype={
$0(){var w=this.a,v=this.b
w.z.I(0,v)
w.Q=v},
$S:0}
C.cG1.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cFZ(w))},
$S:0}
C.cFZ.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cG2.prototype={
$0(){return this.a.f++},
$S:0}
C.cG3.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cG4.prototype={
$0(){},
$S:0}
C.cG5.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a8(0)
w.as=!1
w.ay=0},
$S:0}
C.cFU.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.cFV.prototype={
$3(d,e,f){var w=null
return A.lE(new C.cFT(this.a,e),w,B.b0,B.hM,w,w,new A.bq(w,this.b,x.X),x.i)},
$S:1984}
C.cFT.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.cT.j(u.as?0.6:0.15)
t=A.a([new A.ab(0,B.G,t,B.J,u.as?40:18)],x.V)
w=this.b
return A.p(v,A.hY(new A.BD(new A.uR(B.w.j(e),B.M9,v,B.YJ),H.bXN(A.b4(v,v,v,new C.aBS(u.gkS()[u.e].c,u.as,v),B.az),new A.Es(w,w,B.WB)),v),B.aq),B.f,v,v,new A.o(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:1985}
C.cFW.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,14*(1-e))),e)},
$S:102}
C.cFX.prototype={
$3(d,e,f){return A.dP(f,new A.r(Math.sin(e*22)*8*(1-e),0))},
$S:114}
C.cFY.prototype={
$0(){return this.a.bqv(this.b)},
$S:0}
C.f8f.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.anm$)
v.anm$=w
v.qe$.sp(0,w)
v.arg(u)},
$S:7}
C.fip.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:12}
C.bT6.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bT5())},
$S:0}
C.bT5.prototype={
$0(){},
$S:0}
C.bT3.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bT1.prototype={
$0(){},
$S:0}
C.bT2.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gMU()
w=s+1>=r.length?3:5
break
case 3:q=C.bGU(p.gaq4(0),0,r.length)
p.m(new C.bSZ(p,q))
o=p
w=6
return A.b(C.BQ(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.BR(s.d,s.c.a,"school",p.gaq4(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bT_())
w=4
break
case 5:p.m(new C.bT0(p))
p.gqA().W4(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bSZ.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bT_.prototype={
$0(){},
$S:0}
C.bT0.prototype={
$0(){return this.a.x++},
$S:0}
C.bT4.prototype={
$0(){return this.a.Lc(this.b)},
$S:0}
C.bSY.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.f8g.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.r(t,s),q=v.b,p=v.d,o=p?C.hDa(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.EA
C.SH(q,D.es0,0,0.2,-0.6,-0.2,null,w,D.eqK,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a5(0,new A.r(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.S()
p=A.L()
p.r=D.Gu.gp(0)
p.c=3
p.d=B.bG
q.ah(new A.r(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f8h.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.SH(this.a,D.er6,0,u,0.7,-0.5,null,null,D.JR,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f8i.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.SH(this.a,D.esN,0,0,0.8,-0.5,null,null,D.JR,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f8j.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.SH(w.b,D.erV,0,v,-0.8,-0.5,null,null,D.JR,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f8k.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.r(34,-122+Math.sin(w*5)*5)
else v=v?D.erZ:D.EA
C.SH(p,D.erq,0,t,0,-0.6,null,v,D.JR,3,0,s,1.3,u,0,w,0)
q=q.ccN(new A.r(222,455),9)
$.S()
w=A.L()
w.r=B.cT.gp(0)
p.af(q,w)},
$S:0}
C.f8l.prototype={
$2(d,e){return B.j.aQ(d.a,e.a)},
$S:763}
C.bSK.prototype={
$2(d,e){return d+e},
$S:65}
C.bSV.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bSW.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bSX.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj1()[u.b]=s
t.gj1()[u.d]=t.y
w=t.as
v=t.qe$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bSR.prototype={
$1(d){return d},
$S:99}
C.bSQ.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.qe$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bSS.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bST.prototype={
$0(){},
$S:0}
C.bSU.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.FM(++s.f)
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
C.bSM.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.bSN.prototype={
$2(d,e){var w=this.a
w=w.gkS()[w.f].e
return B.o.aQ(w[d],w[e])},
$S:65}
C.bSO.prototype={
$2(d,e){var w=null,v=C.heh(new A.av(A.aS(1/0,e.a,e.b),A.aS(1/0,e.c,e.d))),u=this.a
return A.az(B.bX,new A.en(A.b4(w,w,w,new C.bk0(u,u.qe$),B.az),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bSL(u,v),w,w,w,w,!1,B.a4)},
$S:36}
C.bSL.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj1().length
u=B.o.D(B.j.bi((t.a-s.a)/r/450*v),0,v-1)
w.d2_(w.gj1()[u])}},
$S:23}
C.bSP.prototype={
$1(d){var w=this.a
return w.gkS()[w.f].d[d]},
$S:76}
C.ds9.prototype={
$2(d,e){return 0},
$S:65}
C.bSw.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bSv())},
$S:0}
C.bSv.prototype={
$0(){},
$S:0}
C.bSu.prototype={
$0(){},
$S:0}
C.bSo.prototype={
$0(){},
$S:0}
C.bSp.prototype={
$0(){},
$S:0}
C.bSt.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.Bm},
$S:0}
C.bSs.prototype={
$1(d){var w=null,v=this.a.gqA(),u=A.d(d,w,w,w,w,w,w,D.aWr,w,w,w),t=v.gbmW(0)
return A.az(B.bX,A.x(A.a([u,B.bF,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aWF,w,w,w)],x.p),B.E,w,B.e,B.h,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbsS(v),w,w,w,w,w,w,!1,B.a4)},
$S:135}
C.bSq.prototype={
$0(){return this.a.Lc(this.b)},
$S:0}
C.bSr.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bSn.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.e2x.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e2y.prototype={
$1(d){return this.a},
$S:39}
C.e2z.prototype={
$0(){var w=this.a
return w.d=w.gT1().bfl(this.b)},
$S:0}
C.e2v.prototype={
$1(d){return new C.U5(this.a,null)},
$S:z+32}
C.e2w.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e2u.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hs,w,w,w)
return A.ej(A.a([A.bO(!1,E.aY2,w,w,!0,w,w,w,new C.e2s(d),w,w),A.bO(!1,D.fXa,w,w,!0,w,w,w,new C.e2t(d),w,w)],x.p),w,w,D.fB,v,w,w,w,w,D.fJE,w)},
$S:18}
C.e2s.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.e2t.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.e2r.prototype={
$0(){var w=null,v=this.a.c.L(x.q).f,u=this.b
return v.T(A.b2(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e2A.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:13}
C.e2B.prototype={
$0(){var w=this.a,v=this.b,u=C.bEC(v,10,w.r,!1)
return w.uC(C.hnh(w.a.d,"kahoot",u,w.gb6V(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e2C.prototype={
$0(){var w=this.a
return w.uC(new C.amd(this.b,w.a.d,w.r,null))},
$S:0}
C.e2D.prototype={
$0(){var w=this.a
return w.uC(new C.ako(this.b,w.a.d,w.r,null))},
$S:0}
C.e2G.prototype={
$0(){var w=this.a
return w.uC(new C.ava(this.b,w.a.d,w.r,null))},
$S:0}
C.e2H.prototype={
$0(){var w=this.a
return w.uC(new C.az7(this.b,w.a.d,w.r,null))},
$S:0}
C.e2I.prototype={
$0(){var w=this.a
return w.uC(new C.amg(this.b,w.a.d,w.r,null))},
$S:0}
C.e2J.prototype={
$0(){var w=this.a
return w.uC(new C.amk(this.b,w.a.d,w.r,null))},
$S:0}
C.e2K.prototype={
$0(){var w=this.a
return w.uC(new C.amm(this.b,w.a.d,w.r,null))},
$S:0}
C.e2L.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d2k()
return v.uC(C.hnh(v.a.d,"creator_"+u.a,w,v.gb6V(),"A game by the family",t,this.c.a))},
$S:0}
C.e2M.prototype={
$0(){return this.a.OZ(this.b)},
$S:0}
C.e2N.prototype={
$0(){return this.a.XY(0,this.b)},
$S:0}
C.e2E.prototype={
$0(){return this.a.OZ(null)},
$S:0}
C.e2F.prototype={
$0(){return this.a.L(x.q).f.T(D.fmW)},
$S:0}
C.bSI.prototype={
$0(){var w=this.a
w.d=D.b1w
w.z=3},
$S:0}
C.bSJ.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aQ8()}else w.m(new C.bSH(w))},
$S:12}
C.bSH.prototype={
$0(){return this.a.z--},
$S:0}
C.bSy.prototype={
$0(){var w=this.a
w.d=D.adu
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bSz.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bSx(w))
if(w.as<=0){d.a1(0)
w.b6R(-1)}},
$S:12}
C.bSx.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bSE.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.Xh},
$S:0}
C.bSF.prototype={
$0(){return this.a.e++},
$S:0}
C.bSB.prototype={
$0(){var w=this.a
w.d=D.b1x
w.ay=this.b},
$S:0}
C.bSC.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bSG.prototype={
$2(d,e){return B.o.aQ(e.b,d.b)},
$S:1986}
C.bSD.prototype={
$0(){return this.a.Lc(this.b)},
$S:0}
C.bSA.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bS8.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.ax()
s=A.a([new A.au(new A.ba(s,B.b6,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.I)(t),++v){u=t[v]
s.push(new A.au(new A.ba(u,B.b6,B.aP),r))}return s},
$S:1987}
C.bS9.prototype={
$0(){return this.a.gDb().c.push(C.h84(null,0,20,""))},
$S:0}
C.bSj.prototype={
$1(d){var w=null
return A.bz(w,new A.b6(4,A.l(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dq,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.W8,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:253}
C.bSi.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gDb().c,m=this.b,l=n[m],k=o.cfQ(l),j=B.c.j(0.06),i=A.l(18),h=A.K(B.aT,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.L5,p,p,p),B.b3],g)
if(n.length>1)f.push(A.aI(p,p,p,p,B.asc,p,p,p,new C.bSd(o,m),p,p,p,p,p,p))
n=J.a8(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.h,0,p,p),A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bSe(l),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dj,!0,B.a7,p,B.ao,p,p,p,p),B.P],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aE9[v]
t=D.aDQ[v]
s=v+1
f.push(new A.D(B.eP,new A.c7(B.aL,B.e,B.h,B.l,p,B.p,p,0,A.a([A.d(u,p,p,p,p,p,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.ae,new A.by(1,B.ba,A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bSf(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dj,!0,B.a7,p,B.ao,p,p,p,p),p),new At.Ps(v,l.c,new C.bSg(o,l),p,!1,D.lG,p,p,p,p,p,!1,!1,p,I.b1W,p,p,p,p,p,w)],g),p),p))}f.push(D.fPd)
f.push(B.am)
n=A.a([D.fIJ,B.ae],g)
for(r=0;r<3;++r){q=D.cfX[r]
n.push(new A.D(B.fn,A.jz(p,p,p,A.d(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bSh(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.h,0,p,p))
return A.p(p,A.x(f,B.E,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.n),p,p,p,B.ky,B.bj,p,p,p)},
$S:158}
C.bSd.prototype={
$0(){var w=this.a
return w.m(new C.bSc(w,this.b))},
$S:0}
C.bSc.prototype={
$0(){return B.d.cG(this.a.gDb().c,this.b)},
$S:0}
C.bSe.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bSf.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bSg.prototype={
$1(d){return this.a.m(new C.bSb(this.b,d))},
$S:151}
C.bSb.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bSh.prototype={
$1(d){return this.a.m(new C.bSa(this.b,this.c))},
$S:9}
C.bSa.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e4c.prototype={
$0(){var w=this.a
w.wy()
w.a.bv()
w.a.qt()},
$S:0}
C.e4b.prototype={
$0(){var w=this.a
w.wy()
w.a.bv()
w.a.qt()},
$S:0}
C.e4e.prototype={
$0(){var w=this,v=w.b
if(J.cJ(v)||J.ct(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e4f.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e4g.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e4a.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e4d.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e4i.prototype={
$0(){this.a.Pk()
return null},
$S:0}
C.e4h.prototype={
$0(){return this.a.F5(this.b)},
$S:0}
C.e3D.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bO(!1,B.ds,w,w,!0,w,w,w,new C.e3B(d),w,w),r=A.bo(B.bQ,w,w,w,w,w,w,w,w,w,w,w)
return A.ej(A.a([s,A.bI(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e3C(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e3B.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.e3C.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.e3E.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cOO(this.b)},
$S:0}
C.e3y.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aVK(w.b,w.c,w.d)},
$S:7}
C.e3_.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e30.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3h.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Hk(t.a.c),$async$$0)
case 2:s=r.nA(q.dH(e,new C.e3f(t)))
if(s!=null&&t.c!=null)t.m(new C.e3g(t,s))
t.a.bv()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e3f.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e3g.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3i.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e3j.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3x.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cPA(C.hDk(w),w)},
$S:0}
C.e3e.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.Wq(u,w,C.aRj(u,w),new C.e3d(v),null)},
$S:z+37}
C.e3d.prototype={
$1(d){return this.bol(d)},
bol(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.e3c(s,d))
w=3
return A.b(s.uy(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:548}
C.e3c.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.bfl(this.b)},
$S:0}
C.e3u.prototype={
$1(d){return d.as},
$S:z+1}
C.e3v.prototype={
$1(d){var w=this
return new A.e2(new C.e3t(w.a,w.b,w.c,w.d,w.e),null)},
$S:20}
C.e3t.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.ef:B.c,h=A.l(26),g=A.K(B.bQ.j(0.5),B.r,1.5),f=A.p(k,D.bVG,B.f,k,k,new A.o(B.bQ.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a2,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,12.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.h,0,B.p),1)
f=A.A(A.a([f,B.bb,a0,A.aI(k,k,k,k,A.W(B.cB,j?B.bu:B.bh,k,k,k,k),k,k,k,new C.e3n(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.h,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.I)(v),++s){r=v[s]
q=t.a===r?B.bQ:B.bQ.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.ay(B.bQ,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bQ
a0.push(A.az(k,A.cT(k,A.d(m,k,k,k,k,k,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b0,new A.o(q,k,new A.bF(n,n,n,n),new A.be(p,p,p,p),k,k,B.n),B.h9,k,k,k,k,B.CE,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e3o(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bZ(B.bH,a0,B.br,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c6R,new A.D(D.bFS,f,k),new A.D(D.bFJ,e,k),new A.D(B.t7,a0,k),new A.D(X.anu,A.d(v,k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.W(Aj.aq6,j?B.bu:B.bh,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bFL,A.A(A.a([a0,B.at,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,k,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.b9s(k,B.bQ,k,k,!1,B.y,k,k,k,k,k,k,new C.e3p(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.h,0,k,k),k))}f.push(B.aB)
j=A.l(20)
e=A.a([new A.ab(0,B.G,B.aD.j(0.35),B.i4,12)],x.V)
f.push(A.az(k,A.p(k,A.A(A.a([D.fJ3,B.bb,D.bK8,D.bWl],w),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.caD,B.n),k,k,k,B.i_,B.bI,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e3q(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.wC,A.A(A.a([A.E(A.dV(B.ds,new C.e3r(a1),k),1),B.at,A.E(A.bI(M.aYt,k,new C.e3s(t,a1),A.bo(B.bQ,k,k,k,k,k,B.co,k,k,k,k,k)),1)],w),B.l,k,B.e,B.h,0,k,k),k))
return A.bm(!0,A.p(k,A.ca(A.x(f,B.E,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.aq,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.yO,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:87}
C.e3n.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e3o.prototype={
$0(){return this.b.$1(new C.e3m(this.a,this.c))},
$S:0}
C.e3m.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e3p.prototype={
$1(d){var w=this.a
w.m(new C.e3k(w,d))
this.b.$1(new C.e3l())},
$S:9}
C.e3k.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e3l.prototype={
$0(){},
$S:0}
C.e3q.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(new A.aHZ(!0,w))
return null},
$S:0}
C.e3r.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e3s.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(new A.aHZ(!1,w))
return null},
$S:0}
C.e3w.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cPo(this.b.b)
w.r.a8(0)},
$S:0}
C.e2O.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.aja(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hwv(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e2P.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aGb(w)},
$S:0}
C.e3G.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aeu(this.b,w,this.c,null)},
$S:z+39}
C.e3A.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.ef:B.c,t=A.l(20),s=A.W(B.kZ,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.u(p,A.a([B.af,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.l,w,B.e,B.N,0,B.p)
return A.ej(A.a([A.bI(D.h_X,w,new C.e3z(d),A.bo(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.b8,w,u,v,w,s,w,new A.b9(t,B.a1),r,w)},
$S:18}
C.e3z.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e2Q.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e2R.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e2S.prototype={
$1(d){return d.a},
$S:z+8}
C.e2T.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.I)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hZ(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aGb(w)},
$S:0}
C.e2X.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.aja(q)
w=A.U(q).k("Y<1>")
q=A.C(new A.Y(q,new C.e2V(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hwv(v.e,null,r,v.f,v.r,new C.e2W(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e2W.prototype={
$0(){return this.a.abi(this.b)},
$S:0}
C.e2V.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e2Y.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("N<1,hZ>")
w=A.C(new A.N(w,new C.e2U(this.b),v),v.k("ak.E"))
u.d=t.aGb(w)},
$S:0}
C.e2U.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e3F.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e39.prototype={
$1(d){return d.length!==0},
$S:3}
C.e3a.prototype={
$1(d){var w=this
return new A.e2(new C.e38(w.a,w.b,w.c,w.d),null)},
$S:20}
C.e38.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.ef:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.m(v,v,t?B.aS:B.av,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bh,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bh,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.u(p,new A.N(o,new C.e34(u,e,o),A.U(o).k("N<1,v>")))
p.push(B.P)
u=w.d
p.push(A.aN(v,B.Z,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bz(v,new A.b6(4,A.l(12),B.du),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ak,v,v,v,v,v,B.mB,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a7,v,B.ao,v,v,v,v))
p=A.x(p,B.al,v,B.e,B.N,0,B.p)
t=w.a
return A.ej(A.a([A.bO(!1,B.ds,v,v,!0,v,v,v,new C.e35(d),v,v),A.bI(B.Lh,v,new C.e36(t,u,o,e),A.bo(B.bQ,v,v,v,v,v,v,v,v,v,v,v)),A.bI(D.fNA,v,new C.e37(t,u,o,d),A.bo(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a4(360,v,p,v),v,v,v,v,r,v)},
$S:214}
C.e34.prototype={
$1(d){var w=null
return A.dI(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.m(w,w,this.a.a?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aI(w,w,w,w,D.c3G,w,w,w,new C.e33(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1988}
C.e33.prototype={
$0(){return this.a.$1(new C.e31(this.b,this.c))},
$S:0}
C.e31.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.e35.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.e36.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e32(w.c,u))
v.bP(0,B.cf)}},
$S:0}
C.e32.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e37.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).N(!0)},
$S:0}
C.e3b.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cQ2(this.b,D.uO,C.Hi(v,w.a.c))},
$S:0}
C.e3N.prototype={
$1(d){return d.as},
$S:z+1}
C.e3O.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j2(this.b,w)},
$S:0}
C.e3P.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.it0(v)
return w.WL(v==null?null:v.a)},
$S:0}
C.e3Q.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.i52(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aS(1/0,e.a,e.b)
s=A.aS(1/0,e.c,e.d)
l.cxd(new A.av(u,t),v.gbm1(),new A.av(k,s))}k=A.l(22)
s=this.b.a
r=s?D.d3P:D.d1X
q=A.K(s?B.dq:D.blb,B.r,1)
p=A.l(22)
o=A.bR(0,A.b4(m,m,m,new C.bg8(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bu(p,new A.an(B.a0,m,B.ad,B.t,A.a([o,A.bR(0,A.v2(new A.Q(n,n,n,n),new A.a4(u,t,new C.bh3(l.d,v,l.f,w,new C.e3J(l),l.gch1(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.byU(s,new C.e3K(l,e),new C.e3L(l,e),new C.e3M(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a7(B.aZ,B.b4,B.x,r,m,m),B.n),m,m,m,Z.amz,m,m,m,m)},
$S:163}
C.e3J.prototype={
$1(d){var w=this.a
w.m(new C.e3H(w,d))},
$S:2}
C.e3H.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.I(0,v)},
$S:0}
C.e3K.prototype={
$0(){var w=this.b
return this.a.bdv(1.25,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e3L.prototype={
$0(){var w=this.b
return this.a.bdv(0.8,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e3M.prototype={
$0(){var w=this,v=w.b
return w.a.aVK(new A.av(A.aS(1/0,v.a,v.b),A.aS(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gbm1())},
$S:0}
C.e3R.prototype={
$0(){var w=this.a
return w.m(new C.e3I(w))},
$S:0}
C.e3I.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e2Z.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fI(new A.fx(s.c)),$async$$0)
case 2:t.yz("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dhC.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bkS(u,C.hI_(v.c,u),new C.dhB(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dhB.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dhD.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bod(d.d,d.c,u.f.q(0,d.a),new C.dhA(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dhA.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fIA.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nA(new A.cM(new A.Y(v,new C.fIB(d),w.k("Y<1>")),new C.fIC(),w.k("cM<1,n>")))},
$S:z+19}
C.fIB.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fIC.prototype={
$1(d){return d.a},
$S:z+8}
C.fIy.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fIz.prototype={
$1(d){return d.b},
$S:z+8}
C.fIF.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nA(new A.cM(new A.Y(v,new C.fIG(d),w.k("Y<1>")),new C.fIH(),w.k("cM<1,n>")))},
$S:z+19}
C.fIG.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fIH.prototype={
$1(d){return d.a},
$S:z+8}
C.fID.prototype={
$1(d){var w,v=A.et([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.I(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fIE.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dhF.prototype={
$0(){return this.a},
$S:z+46}
C.dhW.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:242}
C.dhO.prototype={
$2(d,e){var w=this.a.c4(0,d,new C.dhP()),v=J.a8(w)
if(!v.q(w,e))v.I(w,e)},
$S:118}
C.dhP.prototype={
$0(){return A.a([],x.s)},
$S:765}
C.dhN.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eK(w,e)
return w===!0},
$S:327}
C.dhG.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dhM.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dhL.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.I(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aT(v==null?D.DW:v)
u=1
while(v.C())u+=s.$2(v.gP(v).a,e)
v=s.b.h(0,d)
v=J.aT(v==null?B.Z:v)
while(v.C()){t=v.gP(v)
if(e.q(0,t))continue
e.I(0,t)
t=w.h(0,t)
t=J.aT(t==null?D.DW:t)
while(t.C())u+=s.$2(t.gP(t).a,e)}return u},
$S:1990}
C.dhH.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dhQ.prototype={
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
t=J.aT(t==null?D.DW:t)
while(t.C()){r=t.gP(t)
if(r.a!==a9&&!B.d.aU(w,new C.dhR(r)))w.push(r)}}B.d.bq(w,new C.dhS(a8))
B.d.b_(w,new C.dhT())
q=C.i51(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.I)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eYK],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.brk(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:1991}
C.dhR.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dhS.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dhT.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.dhU.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a8(n),v=o.c,u=-1/0,t=0;t<w.gJ(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b8(v,A.a3(v).k("b8<2>")).cE(0,0,B.qa)+88-w.gH(n).a}else u=0
for(w=J.a8(n),v=o.c,t=0;t<w.gJ(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:706}
C.dhV.prototype={
$1(d){return 16+d*156},
$S:178}
C.dhE.prototype={
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
t.n(0,d,new C.GC(r,new A.r(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.GC(s,new A.r(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.GC(s,new A.r(e,v)))}t=o.r.h(0,d)
t=J.aT(t==null?B.Z:t)
s=o.w
while(t.C()){r=t.gP(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.KZ(d,new A.r(e+t,w),s,s.length))}},
$S:183}
C.dhI.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aL6(new A.r(v.a,v.b+28),new A.r(w.a,w.b+28),!0,null))},
$S:118}
C.dhJ.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dhK.prototype={
$2(d,e){return B.j.aQ(d.a,e.a)},
$S:766}
C.dhX.prototype={
$2(d,e){return B.j.aQ(d.a,e.a)},
$S:766}
C.dhY.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:469}
C.dhZ.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:198}
C.di_.prototype={
$1(d){return d>=0.5},
$S:115}
C.fo_.prototype={
$3(d,e,f){var w=null,v=A.l(10)
return A.ha(A.aM(!1,v,!0,new A.a4(38,38,A.W(d,this.a.c?B.c:B.cs,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1993}
C.eZ1.prototype={
$1(d){var w=null,v=A.l(8),u=B.bQ.j(0.12),t=A.l(8)
return new A.D(B.n3,A.aM(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fyy,B.K,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.OH,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eZ0(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eZ0.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dxV.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dxU.prototype={
$1(d){var w=null,v=A.l(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.o5,B.K,w,w)
return A.ej(A.a([A.bO(!1,B.ds,w,w,!0,w,w,w,new C.dxS(d),w,w),A.bO(!1,A.d("Delete",w,w,w,w,w,w,A.m(w,w,B.mV,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dxT(d),w,w)],x.p),B.b8,B.Cz,w,u,D.bGM,w,D.bIJ,new A.b9(v,B.a1),w,w)},
$S:18}
C.dxS.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dxT.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dy3.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dy4.prototype={
$1(d){var w=this.a
return w.m(new C.dy2(w,d))},
$S:z+49}
C.dy2.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dy5.prototype={
$1(d){var w=null
return A.qL(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dy8.prototype={
$1(d){var w=this.a
return w.m(new C.dy1(w,d))},
$S:35}
C.dy1.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dy7.prototype={
$1(d){var w=null
return A.qL(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dy9.prototype={
$1(d){var w=this.a
return w.m(new C.dy0(w,d))},
$S:35}
C.dy0.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dya.prototype={
$0(){var w=this.a
return w.m(new C.dy_(w))},
$S:0}
C.dy_.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dyb.prototype={
$0(){var w=this.a
return w.m(new C.dxZ(w))},
$S:0}
C.dxZ.prototype={
$0(){return++this.a.at},
$S:0}
C.dyc.prototype={
$0(){var w=this.a
return w.m(new C.dxY(w))},
$S:0}
C.dxY.prototype={
$0(){return--this.a.ax},
$S:0}
C.dyd.prototype={
$0(){var w=this.a
return w.m(new C.dxX(w))},
$S:0}
C.dxX.prototype={
$0(){return++this.a.ax},
$S:0}
C.dye.prototype={
$1(d){var w=this.a
return w.m(new C.dxW(w,d))},
$S:9}
C.dxW.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dy6.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dyf.prototype={
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
return A.E(A.aG(!1,B.a3,!0,r,A.aM(!1,o,!0,A.cT(r,A.x(A.a([t,B.aw,A.d(e,r,r,r,r,r,r,A.m(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.h,0,B.p),r,r,B.b0,new A.o(w,r,u,v,r,r,B.n),B.eH,r,r,r,r,B.k5,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dyg(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
$S:z+51}
C.dyg.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dyp.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cfz.prototype={
$2(d,e){return new A.bA(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:98}
C.cfG.prototype={
$1(d){return d.aj()},
$S:z+5}
C.cfH.prototype={
$2(d,e){var w=J.b7(e,new C.cfF(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bA(d,w,x.d2)},
$S:z+53}
C.cfF.prototype={
$1(d){return d.aj()},
$S:z+12}
C.cfB.prototype={
$1(d){return C.amp(A.a1(d,x.N,x.z))},
$S:z+9}
C.cfC.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cfD.prototype={
$1(d){return C.hng(A.a1(d,x.N,x.z))},
$S:z+11}
C.cfE.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cfL.prototype={
$1(d){return new A.aIa(d.f.length,d.a,d.b)},
$S:z+55}
C.cfM.prototype={
$2(d,e){return B.a.aQ(d.c,e.c)},
$S:650}
C.cfI.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cfJ.prototype={
$1(d){return d.cP0(C.Hi(d,this.a))},
$S:z+85}
C.e4_.prototype={
$1(d){return C.uy(d,this.a.a.c)},
$S:z+3}
C.e40.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e44.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e45.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e3X.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1D(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z7("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.py(r.c,r.e),$async$$0)
case 4:s.z7(p)
w=5
return A.b(s.Kg(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e3Y.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1D(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z7("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.py(r.c,r.e),$async$$0)
case 4:s.z7(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e3Z.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Wt(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.z7("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.z7("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.z7("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Kg(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ac(j)
o=r.a
if(o.c==null){w=1
break}o.z7(B.a.eb(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e43.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1C(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.z7("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).ce(A.ed(new C.e42(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.py(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e42.prototype={
$1(d){var w=this.b
return new C.a0D(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e41.prototype={
$1(d){return D.hDx},
$S:z+58}
C.e47.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e48.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e46(w,d)
return new A.D(B.d9,new C.bh7(this.b,d.c,d.a,w,null),null)},
$S:1994}
C.e46.prototype={
$0(){return this.a.YC(this.b.b)},
$S:0}
C.e3S.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e3T.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e3U.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e3V.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e3W.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e49.prototype={
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
$S:197}
C.dQ1.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dQ2.prototype={
$0(){return B.d.gH(D.a74)},
$S:z+60}
C.dQ3.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b4(A.as(A.W(this.b.d,B.c.j(0.95),w,w,D.daM,44),w,w,w),w,w,new C.bm_(u,t,v,w),B.az)},
$S:56}
C.fZA.prototype={
$1(d){return A.pi(new C.fZz(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:139}
C.fZz.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.ef:B.c,p=A.a([new A.ab(0,B.G,B.w.j(r?0.35:0.08),B.tI,24)],x.V),o=r?B.eh:B.bO
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.l(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bQ.j(0.18)],x.O)
w=A.p(t,D.bYK,B.f,t,t,new A.o(t,t,t,A.l(12),t,new A.a7(B.a5,B.a8,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.m(t,t,r?B.aS:B.av,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.T,o,new A.D(E.any,A.A(A.a([w,B.bb,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.m(t,t,r?B.bu:B.bh,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.h,0,B.p),1)],u),B.l,t,B.e,B.h,0,t,t),t),A.E(A.it(!0,t,e,B.y,D.fl_,new C.fZy(this.b,s),20,B.an5,t,B.ah,!1),1)],u),B.l,t,B.e,B.h,0,B.p),B.f,t,t,new A.o(q,t,t,B.ld,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:120}
C.fZy.prototype={
$2(d,e){var w=null,v=D.a74[e],u=A.l(16),t=A.l(16),s=this.b.a,r=A.K(s?B.eh:B.bO,B.r,1),q=A.a([new A.ab(0,B.G,B.w.j(s?0.35:0.08),B.et,8)],x.V),p=A.l(15),o=A.E(new C.a7r(v.a,!0,w),1),n=s?B.jY:B.iO,m=A.d(v.b,w,1,B.a2,w,w,w,A.m(w,w,s?B.aS:B.av,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aG(!1,B.a3,!0,w,A.aM(!1,u,!0,A.eB(A.bu(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.m(w,w,s?B.bu:B.bh,w,w,w,w,w,w,w,w,10,w,w,B.a9,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.h,0,B.p),B.f,n,w,w,w,w,w,w,B.k6,w,w,w)],l),B.al,w,B.e,B.h,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fZx(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)},
$S:80}
C.fZx.prototype={
$0(){A.a6(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cpb.prototype={
$0(){return this.a.ahB(this.b)},
$S:0}
C.fYY.prototype={
$1(d){return D.hyr},
$S:z+61}
C.h5J.prototype={
$1(d){var w=this
return new C.a2p(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.fZ1.prototype={
$1(d){return new C.a_h(this.a,null)},
$S:z+63}
C.fZ0.prototype={
$1(d){return D.hzs},
$S:z+64}
C.d9b.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.d9c.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d9a(w,d))},
$S:35}
C.d9a.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d9d.prototype={
$1(d){return this.a.KU()},
$S:2}
C.d9e.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.d97.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.d98.prototype={
$1(d){return this.a.KU()},
$S:2}
C.d99.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cHx.prototype={
$0(){},
$S:0}
C.cHD.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cHE.prototype={
$0(){return this.a.aR0(-1)},
$S:0}
C.cHF.prototype={
$1(d){return this.a.m(new C.cHC())},
$S:2}
C.cHC.prototype={
$0(){},
$S:0}
C.cHG.prototype={
$0(){return this.a.aR0(1)},
$S:0}
C.cHH.prototype={
$1(d){return this.a.m(new C.cHB())},
$S:2}
C.cHB.prototype={
$0(){},
$S:0}
C.cHI.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.m(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.eh:B.bO
return A.uW(u,u,B.b2,r,u,new C.cHA(t,d),B.wG,s,w,u,new A.ay(v,1,B.r,-1),B.cg)},
$S:1995}
C.cHA.prototype={
$1(d){var w=this.a
return w.m(new C.cHy(w,this.b))},
$S:9}
C.cHy.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cHJ.prototype={
$1(d){return this.a.m(new C.cHz())},
$S:2}
C.cHz.prototype={
$0(){},
$S:0}
C.cHK.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.fnv.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).N(w)},
$S:2}
C.fnw.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.fnx.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).N(w)},
$S:0}
C.fnt.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbDl()
w=w.e
s=A.l(B.o.D(v-1,0,v))
return A.b4(new A.D(D.bII,new A.en(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.byJ(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:56}
C.fnu.prototype={
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
return A.aG(!1,B.a3,!0,p,A.aM(!1,v,!0,A.eB(D.ewC,r,new A.o(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a7(new A.d7(-1.2+t,-0.5),new A.d7(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
$S:138}
C.fXh.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:60}
C.eWb.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eW2.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eW3.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eW9.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e2(new C.eW8(w,this.b),null)},
$S:20}
C.eW8.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.ef:B.c,t=A.l(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eG(w,u,new A.D(B.ans,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.htl(new C.eW5(r,e),r.a),B.aB,A.A(A.a([A.E(A.dV(B.ds,new C.eW6(d),w),1),B.at,A.E(A.bI(B.Wu,w,new C.eW7(r,d),A.bo(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.h,0,w,w)],q),B.al,w,B.e,B.N,0,B.p),w),w,w,w,w,w,B.d6,w,new A.b9(t,B.a1),w)},
$S:104}
C.eW5.prototype={
$1(d){return this.b.$1(new C.eW4(this.a,d))},
$S:35}
C.eW4.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eW6.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.eW7.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(w)
return null},
$S:0}
C.eWa.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.TH(this.b)},
$S:0}
C.eVY.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bfr(w)},
$S:0}
C.eW1.prototype={
$1(d){return this.boI(d)},
boI(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Me(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j2(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eW0.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.eW_(this.b),v),v.k("M.E"))
u.d=t.bfr(w)},
$S:0}
C.eW_.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eWc.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j2(this.b,w)},
$S:0}
C.eWd.prototype={
$1(d){return this.a.bHv(d,this.b)},
$S:z+67}
C.eVZ.prototype={
$0(){return this.a.abh(this.b)},
$S:0}
C.h5w.prototype={
$1(d){return new C.aeP(this.a,this.b,this.c,null)},
$S:z+68}
C.eWf.prototype={
$0(){return this.a.a0w(this.b)},
$S:0}
C.eWg.prototype={
$0(){return this.a.QX(this.b)},
$S:0}
C.eWh.prototype={
$0(){return this.a.F0(this.b)},
$S:0}
C.eWi.prototype={
$0(){return this.a.a0x(this.b)},
$S:0}
C.eWe.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.eVT.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eVU.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eVV.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.eVX.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qz(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eVW(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eVW.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eWF.prototype={
$2(d,e){return d+e.gxJ()},
$S:z+71}
C.eWB.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eWC.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eWm.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.ef:B.c,s=A.l(24),r=A.p(v,D.bZd,B.f,v,v,new A.o(B.aA.j(u?0.18:0.08),v,A.K(B.aA.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.m(v,v,u?B.aS:B.av,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.m(v,v,u?B.bu:B.bh,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aS:B.av
u=u?B.eh:B.bO
w=x.p
return A.eG(v,t,new A.D(B.wF,A.x(A.a([r,B.aO,q,B.P,p,B.da,A.A(A.a([A.E(A.dV(B.o7,new C.eWk(d),A.dj(v,v,v,v,v,v,v,v,v,o,v,v,B.fg,v,new A.b9(A.l(14),B.a1),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.at,A.E(A.bI(D.h3Q,v,new C.eWl(d),A.bo(B.aA,v,v,v,v,v,B.fg,v,new A.b9(A.l(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.h,0,v,v)],w),B.l,v,B.e,B.N,0,B.p),v),v,v,v,v,v,B.d6,v,new A.b9(s,B.a1),v)},
$S:47}
C.eWk.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.eWl.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.eWv.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.ef:B.c,i=A.l(28),h=A.a([new A.ab(0,B.G,B.w.j(k?0.35:0.08),B.fQ,28)],x.V),g=k?D.di1:B.a6n,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.l(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.fe5,B.aw,new A.bJ(B.a5,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.m(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cD,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.h,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a7(B.ay,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.anw,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bh,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b8j(B.b7,B.jv,new C.eWs(v,d),l,"Camera import","Scan QR"),1),B.at,A.E(v.b8j(B.cG,R.zG,new C.eWt(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.h,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bh,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.l(16)
r=B.aA.j(k?0.14:0.06)
q=A.l(16)
p=A.K(B.aA.j(0.28),B.r,1)
o=A.p(m,D.bYy,B.f,m,m,new A.o(B.aA.j(0.12),m,m,A.l(12),m,m,B.n),m,m,m,m,B.bU,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.m(m,m,k?B.aS:B.av,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bh,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.h,0,B.p),1)
return A.bm(!0,new A.D(B.wz,A.p(m,A.x(A.a([g,new A.D(B.ant,A.x(A.a([w,B.T,u,B.bx,t,B.T,A.aG(!1,B.a3,!0,m,A.aM(!1,s,!0,A.p(m,A.A(A.a([o,B.bb,n,A.W(B.eI,k?B.bu:B.bh,m,m,m,m)],f),B.l,m,B.e,B.h,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bI,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eWu(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)],f),B.E,m,B.e,B.h,0,B.p),m)],f),B.l,m,B.e,B.N,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:25}
C.eWs.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.w8("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eWt.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.w8("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eWu.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.OB(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eWq.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.ef:B.c,m=A.l(24),l=A.a([new A.ab(0,B.G,B.w.j(o?0.35:0.08),B.eR,24)],x.V),k=o?B.eh:B.bO
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.l(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.l(12)
v=this.c
u=o?B.bu:B.bh
u=A.bu(w,new A.a4(48,48,C.aSA(!0,A.l(12),48,Q.Po,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.m(q,q,o?B.aS:B.av,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Bl(v.gxJ())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.wz,A.p(q,A.x(A.a([B.T,k,new A.D(D.anq,A.A(A.a([u,B.bb,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.m(q,q,o?B.bu:B.bh,q,q,q,q,q,q,q,q,12,q,q,B.a9,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.h,0,B.p),1)],s),B.l,q,B.e,B.h,0,q,q),q),B.Cq,r.crj(B.va,B.aV,new C.eWo(d),p,"QR code or backup file","Transfer project"),r.b5k(!0,B.ej,B.aA,new C.eWp(d),p,"Remove from this device","Delete project"),B.T],s),B.l,q,B.e,B.N,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:25}
C.eWo.prototype={
$0(){A.a6(this.a,!1).N("transfer")
return null},
$S:0}
C.eWp.prototype={
$0(){A.a6(this.a,!1).N("delete")
return null},
$S:0}
C.eWr.prototype={
$1(d){return this.boJ(d)},
boJ(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Me(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wn(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eWI.prototype={
$0(){var w=this.a
w.a.bv()
w.m(new C.eWH(w))},
$S:0}
C.eWH.prototype={
$0(){return this.a.r++},
$S:0}
C.eWJ.prototype={
$0(){var w=this.a
return w.m(new C.eWG(w))},
$S:0}
C.eWG.prototype={
$0(){return this.a.r++},
$S:0}
C.eWj.prototype={
$0(){var w=this.a.c
w.toString
return A.j2(w,null)},
$S:0}
C.eWn.prototype={
$0(){return this.a.ckz(this.b)},
$S:0}
C.eWE.prototype={
$0(){var w=this.a
return w.m(new C.eWD(w,this.b))},
$S:0}
C.eWD.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eWy.prototype={
$0(){return this.a.w8("scan")},
$S:0}
C.eWz.prototype={
$0(){return this.a.w8("file")},
$S:0}
C.eWA.prototype={
$1(d){return this.a.crk(d,this.b)},
$S:z+72}
C.eWx.prototype={
$0(){return this.a.F4(this.b)},
$S:0}
C.eWw.prototype={
$0(){return this.a.a11(this.b,this.c)},
$S:0}
C.cGT.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cGS.prototype={
$1(d){return d.aj()},
$S:z+74}
C.cGQ.prototype={
$1(d){return C.hO6(A.a1(d,x.N,x.z))},
$S:z+75}
C.cGR.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fHs.prototype={
$1(d){return d.y===D.kY},
$S:z+3}
C.h6h.prototype={
$1(d){return C.aRj(d,this.a)},
$S:z+3}
C.fEX.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bTd.prototype={
$1(d){return!d.as},
$S:z+1}
C.bTc.prototype={
$1(d){return d.aj()},
$S:z+23}
C.bT9.prototype={
$1(d){return C.hni(A.a1(d,x.N,x.z))},
$S:z+24}
C.bTa.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bTb.prototype={
$1(d){return J.k(d)},
$S:17}
C.fvi.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.fqY.prototype={
$1(d){return C.hcU(A.a1(d,x.N,x.z))},
$S:z+79}
C.fqZ.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fr_.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.fYM.prototype={
$1(d){return J.k(d)},
$S:17}
C.fYN.prototype={
$1(d){return d.a},
$S:z+81}
C.fYO.prototype={
$1(d){return d.length!==0},
$S:3}
C.fYP.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.fYQ.prototype={
$1(d){return d.TH(null).aj()},
$S:z+82}
C.h6f.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fHW.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fL7.prototype={
$1(d){return C.amp(A.a1(d,x.N,x.z))},
$S:z+9}
C.fL8.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fL9.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fLa.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fLb.prototype={
$1(d){return C.uy(d,this.a)},
$S:z+3}
C.fYz.prototype={
$1(d){return C.uy(d,this.a)},
$S:z+3}
C.h6a.prototype={
$1(d){return C.amp(A.a1(d,x.N,x.z))},
$S:z+9}
C.h6b.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.h6c.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fHD.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fHE.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.h6l.prototype={
$1(d){return!d.as},
$S:z+1}
C.fH7.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fH8.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fH9.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.h5K.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fLZ.prototype={
$1(d){return d.Q},
$S:z+15}
C.fYs.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fL4.prototype={
$1(d){return C.amp(A.a1(d,x.N,x.z))},
$S:z+9}
C.fL5.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fL6.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fYn.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.frv.prototype={
$1(d){return d.length!==0},
$S:3}
C.frw.prototype={
$1(d){return C.hni(A.a1(d,x.N,x.z))},
$S:z+24}
C.frx.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fry.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.frz.prototype={
$1(d){return d.length!==0},
$S:3}
C.frM.prototype={
$2(d,e){return d.eF(new C.frN(e))},
$S:1996}
C.frN.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.ce},
$S:1997}
C.frJ.prototype={
$1(d){return C.i9P(d,this.a)},
$S:z+84}
C.frK.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.frL.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fw_.prototype={
$1(d){return d.a},
$S:z+56}
C.fw0.prototype={
$1(d){return d.length!==0},
$S:3}
C.fw1.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fyY.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fEc.prototype={
$1(d){return C.hyU(d,C.Hi(d,this.a))},
$S:z+5}
C.fEd.prototype={
$1(d){return C.hyV(d,C.Hi(d,this.a))},
$S:z+5};(function aliases(){var w=C.aBU.prototype
w.bwy=w.t
w=C.aA7.prototype
w.bwt=w.t
w=C.aHn.prototype
w.bwW=w.t
w=C.aBV.prototype
w.bwz=w.t
w=C.aBX.prototype
w.bwA=w.t
w=C.aBY.prototype
w.bwB=w.t
w=C.aNy.prototype
w.bzp=w.t
w=C.aPG.prototype
w.bBK=w.t
w=C.aPH.prototype
w.bBL=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aEV.prototype,"gcoe","cof",28)
var r
w(r=C.aBT.prototype,"gch7","ch8",65)
v(r,"gaPb","O7",0)
v(r,"gcwz","Bt",0)
v(r,"gbPj","OP",0)
v(r,"gcL_","z8",0)
v(r,"gcqh","a1J",0)
v(r,"gbKH","Ox",0)
v(r,"gbPJ","Y2",0)
w(r,"gbUP","bUQ",78)
v(r,"gbF0","Ar",0)
v(C.aBW.prototype,"gcKW","FY",0)
v(r=C.ame.prototype,"gbsU","bsV",2)
v(r,"gbsM","bsN",2)
v(r,"gcM4","cM5",2)
u(r,"gqs","kN",0)
u(r=C.akp.prototype,"geX","fX",2)
w(r,"gccK","ccL",27)
u(C.avb.prototype,"gqs","kN",0)
v(r=C.az8.prototype,"gcXD","cXE",2)
u(r,"gqs","kN",0)
u(C.aLb.prototype,"gbsS","bsT",2)
v(C.amn.prototype,"gBZ","cMh",2)
u(r=C.aml.prototype,"gcMY","cMZ",2)
u(r,"gqs","kN",0)
v(r=C.amh.prototype,"gbrK","brL",2)
v(r,"gcS9","cSa",2)
u(r=C.amj.prototype,"geX","fX",2)
u(r,"giA","cLB",2)
v(r=C.amf.prototype,"gcLq","cLr",2)
u(r,"gbqC","jH",2)
v(r=C.aFu.prototype,"gahd","wo",0)
v(r,"gcjP","a0T",0)
v(r,"gaTr","Iy",0)
v(r=C.aFr.prototype,"gcGV","a3R",0)
v(r,"gahd","wo",0)
v(r,"gcuB","a2n",0)
v(r,"gcjK","b3x",2)
v(r,"gckM","a16",0)
w(r,"gch1","ch2",35)
v(r,"gbPB","ID",0)
v(r,"gcHZ","cI_",2)
v(r,"gc6J","ZO",0)
w(r,"gcfw","cfx",36)
v(r,"gcjy","cjz",2)
v(r=C.aDU.prototype,"gccQ","Qu",0)
v(r,"gccS","ccT",2)
v(r,"gbMb","aaU",0)
v(r=C.aFt.prototype,"gbTd","Yy",0)
v(r,"gc2M","Zf",0)
v(r,"gcB_","a3e",0)
v(r,"gcx8","a2Q",0)
v(C.aFs.prototype,"gcwS","aj1",0)
v(C.aun.prototype,"gcfu","a0u",0)
v(C.aAD.prototype,"ga3A","KU",2)
v(C.aAC.prototype,"ga3A","KU",2)
v(C.azl.prototype,"ga3A","KU",2)
v(r=C.aGZ.prototype,"gb4I","Rt",0)
v(r,"gbDP","WF",0)
v(r,"gckA","ckB",2)
w(C.aGY.prototype,"gcgm","cgn",69)
t(C.aH_.prototype,"gaTm",0,0,null,["$1","$0"],["Ix","bNv"],70,0,0)
s(C,"hH3","ijE",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aF,[C.apX,C.uT,C.nw,C.Is,C.ag0,C.KS,C.uU,C.bTJ,C.tg,C.bpv,C.amw,C.ae7,C.lv,C.bSk,C.auz,C.zA,C.al5,C.MS,C.baU,C.aab,C.bic,C.ag7,C.aAm,C.afW,C.aLb,C.KZ,C.GC,C.bh5,C.aL6,C.ark,C.di0,C.lY,C.aVv,C.aVu,C.aTy,C.uj,C.rr,C.lF,C.hZ,C.kZ,C.aJ4])
u(A.hq,[C.fPM,C.fPL,C.fPN,C.fZt,C.fCT,C.fCU,C.fCZ,C.fNv,C.fNu,C.fNt,C.c8v,C.h__,C.fZS,C.h_3,C.fHL,C.dQI,C.dQD,C.dQE,C.dQg,C.dQc,C.dQX,C.dQY,C.dQR,C.dQS,C.dQZ,C.dR_,C.fIw,C.fL1,C.fL2,C.fYx,C.h69,C.fHC,C.fZ7,C.dhd,C.dgA,C.dgJ,C.dh_,C.dgF,C.dgL,C.dgC,C.dgP,C.dgQ,C.dgO,C.dh4,C.dh3,C.dj0,C.dj1,C.dj2,C.dhr,C.dhw,C.dhv,C.cPR,C.cPT,C.d8p,C.d8O,C.d8P,C.d8S,C.d8U,C.d8V,C.d8W,C.d8Y,C.d8Z,C.bS4,C.bRZ,C.fvH,C.h62,C.h63,C.h64,C.h6_,C.h65,C.h66,C.h67,C.h5Z,C.fJ7,C.fXu,C.fEY,C.fLY,C.bN8,C.h6r,C.fY3,C.bLj,C.bLe,C.bLg,C.bLf,C.cqS,C.cqN,C.cqO,C.cqM,C.cqK,C.cqP,C.cQV,C.cFS,C.cFV,C.cFT,C.cFW,C.cFX,C.f8f,C.fip,C.bSR,C.bSL,C.bSP,C.bSs,C.e2y,C.e2v,C.e2w,C.e2u,C.e2A,C.bSJ,C.bSz,C.bSj,C.bSi,C.bSe,C.bSf,C.bSg,C.bSh,C.e4d,C.e3D,C.e3y,C.e3_,C.e3f,C.e3i,C.e3e,C.e3d,C.e3u,C.e3v,C.e3p,C.e2O,C.e3G,C.e3A,C.e2Q,C.e2R,C.e2S,C.e2X,C.e2V,C.e2U,C.e39,C.e3a,C.e34,C.e3N,C.e3J,C.dhC,C.dhD,C.fIA,C.fIB,C.fIC,C.fIy,C.fIz,C.fIF,C.fIG,C.fIH,C.fID,C.fIE,C.dhW,C.dhM,C.dhH,C.dhR,C.dhS,C.dhV,C.dhJ,C.dhY,C.dhZ,C.di_,C.fo_,C.eZ1,C.dxU,C.dy3,C.dy4,C.dy5,C.dy8,C.dy7,C.dy9,C.dye,C.dyf,C.cfG,C.cfF,C.cfB,C.cfC,C.cfD,C.cfE,C.cfL,C.cfI,C.cfJ,C.e4_,C.e42,C.e41,C.e48,C.e49,C.dQ1,C.fZA,C.fYY,C.h5J,C.fZ1,C.fZ0,C.d9c,C.d9d,C.d98,C.cHF,C.cHH,C.cHI,C.cHA,C.cHJ,C.fnv,C.fXh,C.eW9,C.eW5,C.eW1,C.eW_,C.eWd,C.h5w,C.eWm,C.eWv,C.eWq,C.eWr,C.eWA,C.cGS,C.cGQ,C.cGR,C.fHs,C.h6h,C.fEX,C.bTd,C.bTc,C.bT9,C.bTa,C.bTb,C.fqY,C.fqZ,C.fYM,C.fYN,C.fYO,C.fYP,C.fYQ,C.h6f,C.fHW,C.fL7,C.fL8,C.fLa,C.fLb,C.fYz,C.h6a,C.h6b,C.h6c,C.fHD,C.fHE,C.h6l,C.fH7,C.fH8,C.h5K,C.fLZ,C.fYs,C.fL4,C.fL5,C.fYn,C.frv,C.frw,C.frx,C.fry,C.frz,C.frN,C.frJ,C.frK,C.fw_,C.fw0,C.fyY,C.fEc,C.fEd])
u(A.aw,[C.b07,C.amc,C.aWP,C.ZX,C.bcH,C.QO,C.a6F,C.tG,C.Iu,C.bh3,C.bkS,C.byU,C.bod,C.aet,C.bkR,C.aes,C.bkQ,C.aDV,C.aK8,C.aeu,C.Gy,C.bh4,C.adJ,C.bh2,C.bh7,C.b05,C.aun,C.aeP])
u(A.mo,[C.bdk,C.bez,C.beq,C.aIZ,C.bjT,C.bpu,C.aWU,C.bdm,C.aBS,C.bcQ,C.btx,C.bk0,C.bjr,C.bjy,C.bh6,C.bg8,C.bm_,C.byJ])
u(A.iO,[C.fZX,C.fZY,C.fZZ,C.fZQ,C.fZR,C.h_1,C.h_2,C.dQU,C.dQG,C.dQJ,C.dQn,C.dQo,C.dQp,C.dQm,C.dQu,C.dQl,C.dQv,C.dQw,C.dQk,C.dQx,C.dQj,C.dQy,C.dQi,C.dQz,C.dQa,C.dQb,C.dQh,C.dQA,C.dQf,C.dQB,C.dQe,C.dQq,C.dQd,C.dQr,C.dQ9,C.dQs,C.dQt,C.dQV,C.dQW,C.dQK,C.dQL,C.dQM,C.dQN,C.dQO,C.dQP,C.dQQ,C.dR1,C.dQT,C.fIx,C.dgy,C.dgw,C.dgx,C.dgz,C.dhc,C.dh1,C.dgZ,C.dgB,C.dh2,C.dgH,C.dgI,C.dgK,C.dh0,C.dgG,C.dgM,C.dh9,C.dgW,C.dgV,C.dgX,C.dgY,C.dgR,C.dgT,C.dgU,C.dgN,C.dh5,C.dh8,C.dgD,C.dgE,C.dj_,C.diZ,C.diY,C.diX,C.dj3,C.diW,C.dj4,C.dhs,C.dht,C.dhu,C.dhx,C.dhq,C.dhp,C.cPS,C.d8o,C.d8B,C.d8A,C.d8Q,C.d8z,C.d8R,C.d8y,C.d8x,C.d8T,C.d8w,C.d8J,C.d8I,C.d9_,C.bRY,C.bS7,C.bS_,C.bS0,C.bS3,C.bS2,C.bS5,C.bS6,C.bS1,C.bRW,C.bRX,C.bTB,C.bTC,C.bTD,C.bTE,C.bTF,C.bTG,C.bTH,C.h61,C.fXv,C.bLi,C.bLd,C.bLb,C.bLc,C.bLa,C.cqU,C.cqV,C.cqT,C.cqW,C.cqY,C.cqZ,C.cr_,C.cqQ,C.cFR,C.cG_,C.cG0,C.cG1,C.cFZ,C.cG2,C.cG3,C.cG4,C.cG5,C.cFU,C.cFY,C.bT6,C.bT5,C.bT3,C.bT1,C.bT2,C.bSZ,C.bT_,C.bT0,C.bT4,C.bSY,C.f8g,C.f8h,C.f8i,C.f8j,C.f8k,C.bSV,C.bSW,C.bSX,C.bSQ,C.bSS,C.bST,C.bSU,C.bSM,C.bSw,C.bSv,C.bSu,C.bSo,C.bSp,C.bSt,C.bSq,C.bSr,C.bSn,C.e2x,C.e2z,C.e2s,C.e2t,C.e2r,C.e2B,C.e2C,C.e2D,C.e2G,C.e2H,C.e2I,C.e2J,C.e2K,C.e2L,C.e2M,C.e2N,C.e2E,C.e2F,C.bSI,C.bSH,C.bSy,C.bSx,C.bSE,C.bSF,C.bSB,C.bSC,C.bSD,C.bSA,C.bS8,C.bS9,C.bSd,C.bSc,C.bSb,C.bSa,C.e4c,C.e4b,C.e4e,C.e4f,C.e4g,C.e4a,C.e4i,C.e4h,C.e3B,C.e3C,C.e3E,C.e30,C.e3h,C.e3g,C.e3j,C.e3x,C.e3c,C.e3n,C.e3o,C.e3m,C.e3k,C.e3l,C.e3q,C.e3r,C.e3s,C.e3w,C.e2P,C.e3z,C.e2T,C.e2W,C.e2Y,C.e3F,C.e33,C.e31,C.e35,C.e36,C.e32,C.e37,C.e3b,C.e3O,C.e3P,C.e3H,C.e3K,C.e3L,C.e3M,C.e3R,C.e3I,C.e2Z,C.dhB,C.dhA,C.dhF,C.dhP,C.dhG,C.eZ0,C.dxV,C.dxS,C.dxT,C.dy2,C.dy1,C.dy0,C.dya,C.dy_,C.dyb,C.dxZ,C.dyc,C.dxY,C.dyd,C.dxX,C.dxW,C.dy6,C.dyg,C.dyp,C.e40,C.e44,C.e45,C.e3X,C.e3Y,C.e3Z,C.e43,C.e47,C.e46,C.e3S,C.e3T,C.e3U,C.e3V,C.e3W,C.dQ2,C.fZx,C.cpb,C.d9b,C.d9a,C.d9e,C.d97,C.d99,C.cHx,C.cHD,C.cHE,C.cHC,C.cHG,C.cHB,C.cHy,C.cHz,C.cHK,C.fnw,C.fnx,C.eWb,C.eW2,C.eW3,C.eW4,C.eW6,C.eW7,C.eWa,C.eVY,C.eW0,C.eWc,C.eVZ,C.eWf,C.eWg,C.eWh,C.eWi,C.eWe,C.eVT,C.eVU,C.eVV,C.eVX,C.eVW,C.eWB,C.eWC,C.eWk,C.eWl,C.eWs,C.eWt,C.eWu,C.eWo,C.eWp,C.eWI,C.eWH,C.eWJ,C.eWG,C.eWj,C.eWn,C.eWE,C.eWD,C.eWy,C.eWz,C.eWx,C.eWw])
u(A.af,[C.aq9,C.U4,C.a_F,C.a_J,C.a_H,C.a_f,C.amd,C.ako,C.ava,C.az7,C.amm,C.amk,C.amg,C.Wq,C.ami,C.U5,C.arn,C.arh,C.a0j,C.arl,C.a0D,C.a0E,C.a7r,C.a_h,C.a_g,C.ZO,C.a2p,C.Gm,C.aze,C.aum,C.aug,C.aul,C.P5])
u(A.ah,[C.aEV,C.bgY,C.aBT,C.bhm,C.aBW,C.bex,C.aBU,C.aA7,C.aHn,C.az8,C.aBY,C.aBX,C.aBV,C.bml,C.amj,C.amf,C.aFu,C.aFr,C.aDU,C.aFt,C.aFs,C.bmm,C.aNy,C.aAD,C.aAC,C.azl,C.byM,C.aPG,C.aPH,C.aGZ,C.bnJ,C.aGY,C.bAx])
u(A.jA,[C.dQF,C.dQH,C.dQC,C.dR0,C.fL3,C.bRV,C.dhb,C.dha,C.dgS,C.dh6,C.dh7,C.dhy,C.bTI,C.bTA,C.bSl,C.bSm,C.h60,C.h6q,C.bLh,C.cqX,C.cqR,C.cqL,C.f8l,C.bSK,C.bSN,C.bSO,C.ds9,C.bSG,C.e3t,C.e38,C.e3Q,C.dhO,C.dhN,C.dhL,C.dhQ,C.dhT,C.dhU,C.dhE,C.dhI,C.dhK,C.dhX,C.cfz,C.cfH,C.cfM,C.dQ3,C.fZz,C.fZy,C.fnt,C.fnu,C.eW8,C.eWF,C.cGT,C.fvi,C.fr_,C.fL9,C.fH9,C.fL6,C.frM,C.frL,C.fw1])
u(A.l3,[C.a1V,C.ag9,C.a2d,C.a06,C.acL,C.aLT,C.It,C.amo,C.cGU,C.cGV])
t(C.ame,C.aBU)
t(C.akp,C.aA7)
t(C.avb,C.aHn)
t(C.bh1,C.aBY)
t(C.amn,C.bh1)
t(C.bh0,C.aBX)
t(C.aml,C.bh0)
t(C.bh_,C.aBV)
t(C.amh,C.bh_)
t(C.bm0,C.aNy)
t(C.byK,C.aPG)
t(C.byL,C.aPH)
t(C.aH_,C.bAx)
t(C.bb6,A.baV)
t(C.byN,A.a76)
t(C.bb5,C.byN)
w(C.aBU,A.ce)
w(C.aA7,A.ce)
w(C.aHn,A.eO)
w(C.aBV,A.ce)
v(C.bh_,C.afW)
w(C.aBX,A.ce)
v(C.bh0,C.afW)
w(C.aBY,A.ce)
v(C.bh1,C.afW)
w(C.aNy,A.eO)
w(C.aPG,A.ce)
w(C.aPH,A.ce)
v(C.bAx,A.eD)
v(C.byN,A.ji)})()
A.j6(b.typeUniverse,JSON.parse('{"b07":{"aw":[],"v":[]},"bdk":{"aC":[]},"aq9":{"af":[],"v":[]},"aEV":{"ah":["aq9"]},"U4":{"af":[],"v":[]},"amc":{"aw":[],"v":[]},"aWP":{"aw":[],"v":[]},"bgY":{"ah":["U4"]},"a_F":{"af":[],"v":[]},"a_J":{"af":[],"v":[]},"a_H":{"af":[],"v":[]},"a_f":{"af":[],"v":[]},"aBT":{"ah":["a_F"]},"bhm":{"ah":["a_J"]},"aBW":{"ah":["a_H"]},"ZX":{"aw":[],"v":[]},"bez":{"aC":[]},"beq":{"aC":[]},"bex":{"ah":["a_f"]},"aIZ":{"aC":[]},"bjT":{"aC":[]},"bcH":{"aw":[],"v":[]},"amd":{"af":[],"v":[]},"ame":{"ah":["amd"]},"bpu":{"aC":[]},"aWU":{"aC":[]},"ako":{"af":[],"v":[]},"ava":{"af":[],"v":[]},"az7":{"af":[],"v":[]},"akp":{"ah":["ako"]},"bdm":{"aC":[]},"QO":{"aw":[],"v":[]},"aBS":{"aC":[]},"avb":{"ah":["ava"]},"bcQ":{"aC":[]},"az8":{"ah":["az7"]},"amm":{"af":[],"v":[]},"amk":{"af":[],"v":[]},"amg":{"af":[],"v":[]},"amn":{"ah":["amm"]},"btx":{"aC":[]},"aml":{"ah":["amk"]},"bk0":{"aC":[]},"amh":{"ah":["amg"]},"bjr":{"aC":[]},"Wq":{"af":[],"v":[]},"ami":{"af":[],"v":[]},"U5":{"af":[],"v":[]},"a6F":{"aw":[],"v":[]},"bjy":{"aC":[]},"tG":{"aw":[],"v":[]},"Iu":{"aw":[],"v":[]},"bml":{"ah":["Wq"]},"amj":{"ah":["ami"]},"amf":{"ah":["U5"]},"arn":{"af":[],"v":[]},"arh":{"af":[],"v":[]},"a0j":{"af":[],"v":[]},"aeu":{"aw":[],"v":[]},"aFu":{"ah":["arn"]},"aFr":{"ah":["arh"]},"bh3":{"aw":[],"v":[]},"bh6":{"aC":[]},"bkS":{"aw":[],"v":[]},"bg8":{"aC":[]},"byU":{"aw":[],"v":[]},"bod":{"aw":[],"v":[]},"aDU":{"ah":["a0j"]},"aet":{"aw":[],"v":[]},"bkR":{"aw":[],"v":[]},"aes":{"aw":[],"v":[]},"bkQ":{"aw":[],"v":[]},"aDV":{"aw":[],"v":[]},"aK8":{"aw":[],"v":[]},"Gy":{"aw":[],"v":[]},"arl":{"af":[],"v":[]},"a0D":{"af":[],"v":[]},"a0E":{"af":[],"v":[]},"aFt":{"ah":["arl"]},"bh4":{"aw":[],"v":[]},"adJ":{"aw":[],"v":[]},"bh2":{"aw":[],"v":[]},"bh7":{"aw":[],"v":[]},"aFs":{"ah":["a0D"]},"bmm":{"ah":["a0E"]},"b05":{"aw":[],"v":[]},"a7r":{"af":[],"v":[]},"bm0":{"ah":["a7r"]},"bm_":{"aC":[]},"aun":{"aw":[],"v":[]},"a_h":{"af":[],"v":[]},"a_g":{"af":[],"v":[]},"ZO":{"af":[],"v":[]},"a2p":{"af":[],"v":[]},"aAD":{"ah":["a_h"]},"aAC":{"ah":["a_g"]},"azl":{"ah":["ZO"]},"byM":{"ah":["a2p"]},"Gm":{"af":[],"v":[]},"aze":{"af":[],"v":[]},"byK":{"ah":["Gm"]},"byL":{"ah":["aze"]},"byJ":{"aC":[]},"aum":{"af":[],"v":[]},"aGZ":{"ah":["aum"]},"aeP":{"aw":[],"v":[]},"aug":{"af":[],"v":[]},"aul":{"af":[],"v":[]},"bnJ":{"ah":["aug"]},"aGY":{"ah":["aul"]},"P5":{"af":[],"v":[]},"aH_":{"ah":["P5"],"eD":[]},"bb5":{"ji":[],"fk":[]}}'))
A.Dh(b.typeUniverse,JSON.parse('{"afW":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.at
return{e2:w("aTy"),cq:w("ml"),Q:w("rr"),r:w("bs<n,n>"),c5:w("aVu"),dY:w("aVv"),fH:w("MS"),de:w("al5"),dN:w("N_<H>"),gc:w("En<H>"),A:w("eL<n?>"),e:w("Is"),B:w("nw"),P:w("hZ"),df:w("lv"),k:w("kZ"),x:w("aB<~>"),U:w("O<a4r>"),V:w("O<ab>"),C:w("O<rr>"),O:w("O<u>"),c:w("O<MS>"),b:w("O<al5>"),ac:w("O<eL<n?>>"),I:w("O<nw>"),u:w("O<hZ>"),J:w("O<lv>"),_:w("O<kZ>"),cl:w("O<aB<ai<a9<n,@>>>>"),R:w("O<nz>"),eU:w("O<ai<+(G,G)>>"),ez:w("O<a9<n,aF>>"),gE:w("O<a9<n,n>>"),Y:w("O<a9<n,@>>"),fD:w("O<mS>"),bp:w("O<oL>"),g:w("O<r>"),ar:w("O<auz>"),v:w("O<fX>"),gy:w("O<aab>"),L:w("O<+(n,n)>"),G:w("O<+(G,G)>"),E:w("O<+(G,~())>"),bd:w("O<+(n,H,R)>"),bF:w("O<+count,id,name(H,n,n)>"),F:w("O<cU>"),s:w("O<n>"),cF:w("O<au>"),aS:w("O<j5>"),dT:w("O<baU>"),p:w("O<v>"),Z:w("O<fk>"),D:w("O<lF>"),h:w("O<aAm>"),cC:w("O<bic>"),fp:w("O<KS>"),M:w("O<KZ>"),gZ:w("O<aJ4>"),gA:w("O<ag0>"),e4:w("O<ag7>"),dE:w("O<aL6>"),f7:w("O<R>"),n:w("O<G>"),t:w("O<H>"),dS:w("O<aC?>"),d4:w("O<n?>"),eF:w("cx<ah<af>>"),d:w("ai<nw>"),do:w("ai<hZ>"),cg:w("ai<lv>"),ax:w("ai<kZ>"),fO:w("ai<a9<n,@>>"),cz:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(H,n,n)>"),dy:w("ai<n>"),er:w("ai<au>"),gk:w("ai<lF>"),j:w("ai<@>"),fK:w("bA<n,n>"),d2:w("bA<n,ai<a9<n,@>>>"),a:w("a9<n,@>"),f:w("a9<@,@>"),gv:w("N<n,Iv>"),cM:w("N<H,n>"),w:w("iw"),g2:w("rQ"),bV:w("apX"),fL:w("cv"),K:w("aF"),dc:w("fX"),fo:w("Ps<H>"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),bn:w("+games,limit(R,H)"),d9:w("+dx,hidden(G,ai<hZ>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),fT:w("iz<hZ>"),ec:w("iz<n>"),gW:w("r7<G>"),X:w("bq<G>"),bW:w("dJ"),W:w("bh<n>"),b4:w("bh<H>"),cI:w("k5<n>"),av:w("Y<zA>"),cc:w("Y<n>"),l:w("v"),gF:w("fk"),fA:w("lF"),dO:w("GC"),bw:w("aes<n?>"),cy:w("L0"),q:w("mc"),y:w("R"),i:w("G"),z:w("@"),S:w("H"),eK:w("ai<kZ>?"),m:w("ark?"),cT:w("r?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),he:w("+qrPayload,token,usesRemaining(n,n,H)?"),gG:w("+members,trees,viewOnly(H,H,R)?"),az:w("ql?"),T:w("n?"),aD:w("dJ?"),o:w("lF?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b5R=new A.be(B.fR,B.bJ,B.fR,B.bJ)
D.aeI=new A.be(B.fR,B.iq,B.fR,B.iq)
D.b64=new A.be(B.jy,B.bJ,B.bJ,B.bJ)
D.b68=new A.ay(B.cU,1.4,B.r,-1)
D.b6i=new A.ay(B.ab,1,B.r,-1)
D.afd=new A.aY(140,1/0,0,1/0)
D.b7G=new A.aY(0,1/0,64,1/0)
D.b7K=new A.aY(0,84,0,1/0)
D.afk=new A.aY(130,1/0,0,1/0)
D.aDI=w([B.ma,B.rT,B.c],x.O)
D.c9I=new A.a7(B.ay,B.aC,B.x,D.aDI,null,null)
D.b8u=new A.o(null,null,null,null,null,D.c9I,B.n)
D.dhr=w([B.aV,B.bQ],x.O)
D.cbR=new A.a7(B.aZ,B.b4,B.x,D.dhr,null,null)
D.b8P=new A.o(null,null,null,null,null,D.cbR,B.n)
D.YR=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fB=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dlv=w([B.dA,D.YR,D.fB],x.O)
D.c8V=new A.a7(B.aZ,B.b4,B.x,D.dlv,null,null)
D.b9z=new A.o(null,null,null,null,null,D.c8V,B.n)
D.fvM=new A.F(!0,B.bV,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h6k=new A.B("?",null,D.fvM,null,null,null,null,null,null,null,null,null)
D.bdp=new A.cj(B.z,null,null,D.h6k,null)
D.Wl=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPk=new A.B("\ud83c\udf33",null,D.Wl,null,null,null,null,null,null,null,null,null)
D.ag4=new A.cj(B.z,null,null,D.fPk,null)
D.fS_=new A.B("\ud83c\udfc6",null,As.KY,null,null,null,null,null,null,null,null,null)
D.bdA=new A.cj(B.z,null,null,D.fS_,null)
D.bfp=new A.fl(null,null,null,null,null,E.ku,null,null,null,null)
D.ag6=new A.cj(B.z,null,null,D.bfp,null)
D.kP=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fwk=new A.F(!0,D.kP,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fR_=new A.B("No books on the shelf yet.",null,D.fwk,null,null,null,null,null,null,null,null,null)
D.ewD=new A.D(B.nK,D.fR_,null)
D.bdQ=new A.cj(B.z,null,null,D.ewD,null)
D.fDt=new A.F(!0,D.fB,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h7f=new A.B("\ud83d\ude8c  On the road\u2026",null,D.fDt,null,null,null,null,null,null,null,null,null)
D.exd=new A.D(B.cp,D.h7f,null)
D.bei=new A.cj(B.z,null,null,D.exd,null)
D.aXR=new A.B("\ud83e\uddfa",null,D.Wl,null,null,null,null,null,null,null,null,null)
D.bex=new A.cj(B.z,null,null,D.aXR,null)
D.fUs=new A.B("\ud83c\udfad",null,D.Wl,null,null,null,null,null,null,null,null,null)
D.beI=new A.cj(B.z,null,null,D.fUs,null)
D.beL=new A.cj(B.z,null,null,A7.YD,null)
D.agr=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.agy=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bgZ=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bh3=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bhf=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bhh=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bhj=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bhr=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lF=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bhv=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bhA=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bhB=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bhC=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lG=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bid=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.BQ=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bim=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.biG=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.biJ=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.biP=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.biX=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.ahc=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bj3=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.Z3=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.ahf=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bje=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.Z5=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bjz=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.ahr=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bjY=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bkd=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bkC=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bkN=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.G4=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.blb=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.ble=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bli=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.ahV=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.blz=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.blF=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.blL=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.ahZ=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.blT=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bmm=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bmu=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bmw=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bmC=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.aie=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bnd=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.aiD=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.boa=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.aiQ=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.boA=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.Gh=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.boG=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.boQ=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.boS=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.aiU=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bp9=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bpb=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bpe=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.aj1=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.ZQ=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bpB=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bpW=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bq0=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.aje=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bq7=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.ZW=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bqt=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bqu=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.Gp=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bri=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.brW=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bs1=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bs5=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qp=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bsg=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bsk=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bsq=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bss=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.ajZ=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.ak2=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.Gu=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.a_g=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.akb=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.btD=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.btW=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bul=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.buu=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.akA=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.a_s=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.buE=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.buV=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.a_y=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bvb=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bvs=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.a_D=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bvx=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.akS=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.akU=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bvQ=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.al_=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bwh=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bwl=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bws=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.bwA=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bwJ=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bxi=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bxN=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fL9=new A.B("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bBj=new A.eL(null,D.fL9,B.fb,null,x.A)
D.fUj=new A.B("None",null,null,null,null,null,null,null,null,null,null,null)
D.bBl=new A.eL(null,D.fUj,B.fb,null,x.A)
D.alU=new A.bd(3e4)
D.bBT=new A.bd(38e5)
D.bCC=new A.ir(0,10,0,10)
D.bCL=new A.Q(0,1,0,0)
D.bCW=new A.ir(0,4,0,4)
D.bCZ=new A.Q(0,4,5,0)
D.bDe=new A.Q(10,10,14,10)
D.bDp=new A.ir(10,4,10,4)
D.bDx=new A.ir(10,8,10,8)
D.bDy=new A.Q(10,8,8,8)
D.bE2=new A.Q(12,6,12,2)
D.bEk=new A.Q(14,0,14,6)
D.bEo=new A.Q(14,10,6,6)
D.bEp=new A.Q(14,12,14,0)
D.bEt=new A.Q(14,12,14,8)
D.bEw=new A.Q(14,12,8,14)
D.bEA=new A.ir(14,14,14,14)
D.bET=new A.Q(14,6,14,40)
D.bEW=new A.Q(14,8,14,30)
D.bFj=new A.Q(16,2,16,10)
D.bFs=new A.Q(16,6,16,30)
D.bFu=new A.Q(16,6,16,8)
D.bFJ=new A.Q(18,10,18,4)
D.bFL=new A.Q(18,12,18,0)
D.bFS=new A.Q(18,14,12,4)
D.anq=new A.Q(18,16,18,8)
D.bG7=new A.Q(18,20,18,22)
D.bGd=new A.Q(18,30,18,30)
D.bGv=new A.Q(20,10,12,20)
D.bGy=new A.Q(20,11,20,11)
D.bGK=new A.Q(20,18,16,18)
D.bGM=new A.Q(20,18,20,6)
D.bHB=new A.Q(24,32,24,28)
D.bHC=new A.Q(24,36,24,32)
D.bHF=new A.Q(26,26,24,14)
D.bHU=new A.Q(2,4,2,8)
D.bHY=new A.Q(30,0,30,0)
D.bI8=new A.Q(38,22,22,22)
D.anO=new A.Q(40,24,24,24)
D.bIa=new A.ir(40,40,40,40)
D.bIc=new A.Q(46,30,30,30)
D.bIE=new A.Q(56,40,40,40)
D.bII=new A.Q(1.25,1.25,1.25,1.25)
D.bIJ=new A.Q(60,0,60,0)
D.bIN=new A.Q(6,14,6,16)
D.bIR=new A.Q(6,4,12,0)
D.bIV=new A.Q(6,6,10,2)
D.bJ1=new A.ir(7,3,7,3)
D.bJx=new A.Q(5,1.5,5,1.5)
D.bJI=new A.Q(6,2.5,6,2.5)
D.h1v=new A.B("Family Games",null,B.jQ,null,null,null,null,null,null,null,null,null)
D.fJM=new A.B("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.Wc,null,null,null,null,null,null,null,null,null)
D.cKY=w([D.h1v,D.fJM],x.p)
D.byN=new A.fo(B.ah,B.e,B.h,B.E,null,B.p,null,0,D.cKY,null)
D.bK8=new A.by(1,B.ba,D.byN,null)
D.h5S=new A.B("Signature",null,B.nh,null,null,null,null,null,null,null,null,null)
D.bKb=new A.by(1,B.ba,D.h5S,null)
D.fZ3=new A.B("MADE BY THE ONE WHO PLANTED THE TREE",null,T.u_,null,null,null,null,null,null,null,null,null)
D.bKJ=new A.by(1,B.ba,D.fZ3,null)
D.h2Y=new A.B("Tell the AI what to fix",null,B.dk,null,null,null,null,null,null,null,null,null)
D.bL0=new A.by(1,B.ba,D.h2Y,null)
D.fEf=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h4X=new A.B("Worksheets",null,D.fEf,null,null,null,null,null,null,null,null,null)
D.fEr=new A.F(!0,E.agW,null,null,null,null,13,B.cD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3O=new A.B("Track your project spending",null,D.fEr,null,null,null,null,null,null,null,null,null)
D.d8K=w([D.h4X,B.aw,D.h3O],x.p)
D.byq=new A.fo(B.ah,B.e,B.h,B.E,null,B.p,null,0,D.d8K,null)
D.bL6=new A.by(1,B.ba,D.byq,null)
D.fz9=new A.F(!0,E.ku,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKl=new A.B("FAMILY LIBRARY",null,D.fz9,null,null,null,null,null,null,null,null,null)
D.bLp=new A.by(1,B.ba,D.fKl,null)
D.P0=new C.Is("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.wI=new C.It(0,"male")
D.oB=new C.It(1,"female")
D.z7=new C.It(2,"unknown")
D.uO=new C.amo(0,"owner")
D.P1=new C.amo(1,"editor")
D.kY=new C.amo(2,"viewer")
D.apM=new A.a_(61199,"MaterialIcons",!1)
D.bQK=new A.a_(61504,"MaterialIcons",!1)
D.bQL=new A.a_(61505,"MaterialIcons",!1)
D.bQN=new A.a_(61587,"MaterialIcons",!1)
D.bQU=new A.a_(61890,"MaterialIcons",!1)
D.bRM=new A.a_(63034,"MaterialIcons",!0)
D.bS3=new A.a_(63153,"MaterialIcons",!1)
D.bSB=new A.a_(63429,"MaterialIcons",!1)
D.arR=new A.a_(984520,"MaterialIcons",!1)
D.bRh=new A.a_(62776,"MaterialIcons",!1)
D.bUZ=new A.ae(D.bRh,26,B.b2,null,null,null)
D.bPI=new A.a_(57648,"MaterialIcons",!1)
D.bVi=new A.ae(D.bPI,14,B.c,null,null,null)
D.bVA=new A.ae(B.Hx,17,null,null,null,null)
D.bVG=new A.ae(B.Px,null,B.bQ,null,null,null)
D.bW5=new A.ae(E.a3d,null,null,null,null,null)
D.bW8=new A.ae(B.jb,18,E.ku,null,null,null)
D.a2X=new A.a_(62044,"MaterialIcons",!1)
D.bWe=new A.ae(D.a2X,null,B.aV,null,null,null)
D.bWl=new A.ae(B.zl,18,B.c,null,null,null)
D.bX2=new A.ae(B.e9,16,null,null,null,null)
D.bX9=new A.ae(D.a2X,32,B.aV,null,null,null)
D.bXs=new A.ae(E.apN,18,B.cU,null,null,null)
D.bYy=new A.ae(B.HI,22,B.aA,null,null,null)
D.bYK=new A.ae(B.e9,22,B.b2,null,null,null)
D.bYX=new A.ae(Y.a31,22,B.c,null,null,null)
D.bZ3=new A.ae(B.uY,52,B.c,null,null,null)
D.bZd=new A.ae(B.HI,30,B.aA,null,null,null)
D.bZx=new A.ae(B.a3h,null,B.c,null,null,null)
D.asA=new A.ae(B.va,22,B.c,null,null,null)
D.bZG=new A.ae(B.e9,17,null,null,null,null)
D.c_3=new A.ae(B.wT,26,B.cU,null,null,null)
D.c_Q=new A.ae(B.a3s,16,null,null,null,null)
D.c0C=new A.ae(B.uY,24,B.c,null,null,null)
D.c0H=new A.ae(B.Pv,20,B.ty,null,null,null)
D.c0M=new A.ae(B.Hv,null,B.bQ,null,null,null)
D.c0V=new A.ae(B.jb,18,B.c,null,null,null)
D.c1B=new A.ae(B.cB,22,B.ab,null,null,null)
D.c2u=new A.ae(B.ej,16,B.ab,null,null,null)
D.c2G=new A.ae(D.a2X,20,B.aV,null,null,null)
D.at0=new A.ae(B.hc,20,null,null,null,null)
D.c3c=new A.ae(B.cB,18,D.kP,null,null,null)
D.c3u=new A.ae(B.zw,28,B.c,null,null,null)
D.c3G=new A.ae(B.Pk,null,B.fh,null,null,null)
D.c40=new A.ae(B.zw,24,B.c,null,null,null)
D.c4s=new A.ae(B.uY,null,B.aV,null,null,null)
D.c4t=new A.ae(B.js,20,B.cU,null,null,null)
D.c4N=new A.ae(B.Hx,16,null,null,null,null)
D.c6l=new A.e7(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.k5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eN,!0,null,null,null,null)
D.atK=new C.a6F(10,null)
D.c6R=new C.a6F(12,null)
D.c6S=new C.a6F(14,null)
D.dpE=w([B.bv,B.aV,B.fq,B.b2],x.O)
D.c82=new A.a7(B.ay,B.aC,B.x,D.dpE,null,null)
D.br3=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bxp=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d5a=w([D.br3,D.bxp],x.O)
D.c8e=new A.a7(B.aZ,B.b4,B.x,D.d5a,null,null)
D.djv=w([B.fd,B.fX,B.fq],x.O)
D.c8k=new A.a7(B.ay,B.aC,B.x,D.djv,null,null)
D.ajN=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bhD=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d7o=w([D.ajN,D.bhD],x.O)
D.c8W=new A.a7(B.aZ,B.b4,B.x,D.d7o,null,null)
D.blr=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aD_=w([D.blr,D.ajN],x.O)
D.c9e=new A.a7(B.ay,B.aC,B.x,D.aD_,null,null)
D.aiw=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bo1=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dix=w([D.aiw,D.bo1],x.O)
D.c9U=new A.a7(B.a5,B.a8,B.x,D.dix,null,null)
D.dwN=w([B.bD,B.nx],x.O)
D.c9W=new A.a7(B.aZ,B.b4,B.x,D.dwN,null,null)
D.bqZ=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dxJ=w([D.bqZ,D.kP,D.kP,I.Nv],x.O)
D.dAo=w([0,0.07,0.9,1],x.n)
D.car=new A.a7(B.a5,B.a8,B.x,D.dxJ,D.dAo,null)
D.caA=new A.a7(B.ay,B.aC,B.x,B.Td,null,null)
D.d2U=w([B.aD,D.lF],x.O)
D.caD=new A.a7(B.a5,B.a8,B.x,D.d2U,null,null)
D.dwk=w([B.b2,B.aV,B.bQ],x.O)
D.cbE=new A.a7(B.ay,B.aC,B.x,D.dwk,null,null)
D.cfX=w([10,20,30],x.t)
D.cpU=w([-1,-0.4,0.3,1],x.n)
D.cxl=w([B.bv,B.b2,B.fd],x.O)
D.cxt=w([B.bf,B.aD,B.kt],x.O)
D.cxv=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cyd=w([30,140,262,360],x.n)
D.bpk=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cDM=w([D.bpk,E.ajn],x.O)
D.erf=new A.r(1,2)
D.fh6=new A.cU(B.b5,D.erf,3)
D.azT=w([D.fh6],x.F)
D.cLe=w([B.h7,B.ci,B.fA],x.O)
D.cO0=w([B.bP,B.by,B.bs],x.O)
D.bMf=new C.uT("classic","Classic leather","Gold-edged brown leather",D.aD_,E.ku,E.ku,"\u2766",B.K,!0,!1,!1,!1)
D.bgK=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bw7=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.daw=w([D.bgK,D.bw7],x.O)
D.ajq=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bMa=new C.uT("ornate","Ornate gold","Double gold border and flourishes",D.daw,D.ajq,D.ajq,"\u2726",B.K,!0,!0,!0,!1)
D.bkY=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.brQ=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d1L=w([D.bkY,D.brQ],x.O)
D.bM9=new C.uT("parchment","Parchment","Old paper with dark ink",D.d1L,D.Gp,L.j6,"\u2767",B.K,!0,!1,!1,!0)
D.agA=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bui=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.duu=w([D.agA,D.bui],x.O)
D.boN=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bty=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bMc=new C.uT("minimal","Clean paper","Plain and elegant, like a printed book",D.duu,D.boN,D.bty,"",B.K,!0,!0,!1,!0)
D.bMe=new C.uT("midnight","Midnight","Deep blue with silver stars",K.aDh,B.cA,B.ch,"\u2727",B.K,!0,!0,!1,!1)
D.bM8=new C.uT("emerald","Emerald library","Green cloth, title on the left",W.aAi,E.ku,B.fZ,"\u25c6",B.bk,!0,!1,!1,!1)
D.buN=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dst=w([B.eq,D.buN],x.O)
D.bq6=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.brn=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bMd=new C.uT("rose","Rose vintage","Burgundy with rose-gold lettering",D.dst,D.bq6,D.brn,"\u2740",B.K,!0,!1,!0,!1)
D.dxk=w([B.cs,F.mY],x.O)
D.bMb=new C.uT("modern","Modern","Dark, bold, left-aligned",D.dxk,B.aG,B.c,"",B.bk,!1,!0,!1,!1)
D.a5w=w([D.bMf,D.bMa,D.bM9,D.bMc,D.bMe,D.bM8,D.bMd,D.bMb],A.at("O<uT>"))
D.cR0=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dx8=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bMq=new C.lv('What does "Ubuntu" mean?',D.dx8,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d3A=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bMt=new C.lv("In Swahili, what do we call a grandmother?",D.d3A,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d3r=w(["Babu","Mama","Baba","Dada"],x.s)
D.bMo=new C.lv("In Swahili, what do we call a grandfather?",D.d3r,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d4L=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bMs=new C.lv("What is a sister called in Swahili?",D.d4L,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.d9X=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bMp=new C.lv("What is a brother called in Swahili?",D.d9X,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d3q=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bMA=new C.lv("Which word means father in Swahili?",D.d3q,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dyj=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bMz=new C.lv('"Umoja ni nguvu" means...',D.dyj,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dvd=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bMB=new C.lv('"Haba na haba hujaza kibaba" teaches us...',D.dvd,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d7x=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bMy=new C.lv('The African saying "It takes a village to raise a child" means...',D.d7x,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dyD=w(["The elders","The market","The river","The drum"],x.s)
D.bMu=new C.lv("Who is the traditional keeper of the family stories?",D.dyD,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cVc=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bMr=new C.lv("Why do families sit round the fire at night?",D.cVc,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dxm=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bMw=new C.lv('What does "Harambee" mean?',D.dxm,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.dcL=w(["An elder","A baby","A market","A cow"],x.s)
D.bMv=new C.lv('"Mzee" is a respectful word for...',D.dcL,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dsj=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bMx=new C.lv('What does "Shikamoo" show?',D.dsj,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.aAd=w([D.bMq,D.bMt,D.bMo,D.bMs,D.bMp,D.bMA,D.bMz,D.bMB,D.bMy,D.bMu,D.bMr,D.bMw,D.bMv,D.bMx],x.J)
D.cZC=w([90,360],x.n)
D.d1i=w([B.bQ,B.bo],x.O)
D.bqM=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d1X=w([D.agA,D.bqM],x.O)
D.d2D=w([-1,-0.3,0.4,1],x.n)
D.d3w=w([0,0.45,0.72,0.92,1],x.n)
D.bkU=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d3P=w([D.bkU,B.bA],x.O)
D.biB=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.al9=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d4p=w([B.dA,D.biB,D.al9],x.O)
D.d5r=w([B.b9,B.jl,B.pk],x.O)
D.bls=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.btp=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bih=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d5w=w([D.bls,D.btp,D.bih],x.O)
D.d5R=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d60=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hAI=new C.ae7(78,424,48,44,56)
D.hAG=new C.ae7(214,396,34,34,42)
D.hAH=new C.ae7(442,452,56,50,64)
D.aBa=w([D.hAI,D.hAG,D.hAH],A.at("O<ae7>"))
D.d6A=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bhx=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bnc=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dAk=w([D.aiw,D.bhx,D.bnc],x.O)
D.bMg=new C.uU("leather","Leather",D.dAk,"vintage")
D.ddM=w([B.dg,B.Gf,Aa.Zk],x.O)
D.bMn=new C.uU("midnight","Midnight",D.ddM,"starry")
D.d5s=w([B.ep,B.eb,B.lj],x.O)
D.bMm=new C.uU("forest","Forest",D.d5s,"story")
D.dCq=w([B.er,B.eq,B.kw],x.O)
D.bMj=new C.uU("burgundy","Burgundy",D.dCq,"royal")
D.cNz=w([B.aD,B.mS,B.no],x.O)
D.bMk=new C.uU("royal","Royal",D.cNz,"royal")
D.d83=w([B.by,B.cs,F.mY],x.O)
D.bMh=new C.uU("charcoal","Charcoal",D.d83,"geo")
D.dAt=w([B.c8,B.dR,B.yp],x.O)
D.bMl=new C.uU("sunset","Sunset",D.dAt,"sunset")
D.dBc=w([B.jl,B.ys,B.Zo],x.O)
D.bMi=new C.uU("ocean","Ocean",D.dBc,"band")
D.A0=w([D.bMg,D.bMn,D.bMm,D.bMj,D.bMk,D.bMh,D.bMl,D.bMi],A.at("O<uU>"))
D.d8z=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.d9e=w([B.an,B.aM,B.a_],x.O)
D.daB=w([B.eq,B.eb,B.dg,B.iL,B.yu,B.cU,B.k0,B.cP,B.d5],x.O)
D.daC=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.fh7=new A.cU(B.dB,B.dL,8)
D.daM=w([D.fh7],x.F)
D.dbU=w([B.c3,B.dR,B.jW],x.O)
D.bjs=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bnv=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.brL=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.dc9=w([D.bjs,G.ajW,D.bnv,D.brL,D.al9],x.O)
D.dcq=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.dcB=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bgV=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bmS=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.dd3=w([D.bgV,D.ahZ,D.bmS],x.O)
D.ddH=w([B.c3,B.hH],x.O)
D.ddN=w([G.nq,B.id,G.agM,B.cT],x.O)
D.dfo=w([B.cT,G.nq,B.id,D.lG,B.cT],x.O)
D.dg0=w([B.aQ,B.yq,B.yg],x.O)
D.aCc=w(["True","False"],x.s)
D.eOk=new A.y(-0.65,0.6)
D.f_X=new A.y(-0.2,0.95)
D.f12=new A.y(0.25,0.95)
D.eRO=new A.y(0.7,0.6)
D.f1C=new A.y(1,0.1)
D.dgM=w([Ar.V2,D.eOk,D.f_X,D.f12,D.eRO,D.f1C],x.G)
D.bpC=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bw_=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bks=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.dgS=w([D.bpC,D.bw_,D.bks],x.O)
D.dgX=w([B.bL,B.bW,B.dy,B.aQ],x.O)
D.dhs=w([B.hJ,B.c8,B.up],x.O)
D.dhR=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.di1=w([B.fd,B.cU],x.O)
D.br7=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dis=w([D.br7,D.agy],x.O)
D.diE=w([B.cN,B.fK,B.h_],x.O)
D.diQ=w([B.aG,B.bo,B.dg],x.O)
D.djs=w([B.ew,B.dn,B.eb],x.O)
D.djM=w([B.dW,B.dg,B.Gf],x.O)
D.djQ=w([B.bt,B.mP,B.d5],x.O)
D.dk6=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bqk=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bow=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dkr=w([D.bqk,D.ahV,D.bow],x.O)
D.dlf=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dmi=w([1,0,7,6,3,2],x.t)
D.a6u=w(["leather","linen","plain","stars","rays"],x.s)
D.dmu=w([0.5,2,3.6],x.n)
D.dn2=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bUh=new A.a_(983781,"MaterialIcons",!1)
D.aCG=w([B.Px,B.hB,B.kA,B.i1,F.arZ,B.HU,B.qO,D.bUh,K.arC,B.Dm,B.qR,B.mk],A.at("O<a_>"))
D.a6y=w(["double","single","corners","none"],x.s)
D.bM5=new C.zA("Little Seed","\ud83c\udf31",0)
D.bM7=new C.zA("Young Listener","\ud83d\udc42",40)
D.bM6=new C.zA("Storyteller","\ud83e\ude98",120)
D.bM4=new C.zA("Village Pride","\ud83c\udfe1",300)
D.bM2=new C.zA("Keeper of Roots","\ud83c\udf33",700)
D.bM3=new C.zA("Elder of the Fire","\ud83d\udd25",1500)
D.aCI=w([D.bM5,D.bM7,D.bM6,D.bM4,D.bM2,D.bM3],A.at("O<zA>"))
D.dod=w([B.cY,B.bh,B.cP],x.O)
D.dot=w([],x.C)
D.DW=w([],x.u)
D.aMR=new A.r(225,528)
D.eQ0=new A.y(D.aMR,1)
D.es_=new A.r(350,548)
D.eWd=new A.y(D.es_,0.95)
D.aML=new A.r(158,656)
D.eW6=new A.y(D.aML,1.12)
D.esM=new A.r(92,544)
D.eLC=new A.y(D.esM,0.93)
D.es2=new A.r(398,614)
D.eSa=new A.y(D.es2,1.04)
D.erR=new A.r(318,662)
D.eH5=new A.y(D.erR,1.1)
D.a6G=w([D.eQ0,D.eWd,D.eW6,D.eLC,D.eSa,D.eH5],A.at("O<+(r,G)>"))
D.dqu=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dqY=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.ds1=w([B.cT,G.nq,B.id,D.lG,B.cT,B.id],x.O)
D.dtr=w([B.as,B.fK,B.iL],x.O)
D.du5=w([-70,58],x.n)
D.du7=w([-70,-30,20],x.n)
D.dva=w([B.bt,B.mP,B.a_t],x.O)
D.dvs=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dRc=new C.lY("construction","Construction","Jobsite & builds",B.qQ)
D.dRj=new C.lY("house","Home Build","Houses & rooms",B.v_)
D.dR9=new C.lY("grocery","Grocery","Store & pantry",B.a40)
D.dR8=new C.lY("calculator","Calculations","Math & estimates",B.PC)
D.dRh=new C.lY("lumber","Materials","Lumber & supplies",B.HR)
D.dR5=new C.lY("kitchen","Kitchen","Remodel & meals",A3.PW)
D.bUf=new A.a_(983756,"MaterialIcons",!1)
D.dRa=new C.lY("landscape","Landscaping","Yard & garden",D.bUf)
D.dR4=new C.lY("plumbing","Plumbing","Pipes & water",B.pH)
D.dRk=new C.lY("electrical","Electrical","Wiring & power",B.ho)
D.dR2=new C.lY("store","Retail Shop","Daily business",B.ke)
D.dR3=new C.lY("paint_remodel","Paint & Remodel","Colors & walls",A3.PS)
D.bTC=new A.a_(983311,"MaterialIcons",!1)
D.dRg=new C.lY("roofing","Roofing","Roofs & exteriors",D.bTC)
D.bUq=new A.a_(983986,"MaterialIcons",!1)
D.dR1=new C.lY("warehouse","Warehouse","Storage & stock",D.bUq)
D.dRe=new C.lY("vehicles","Vehicles","Fleet & transport",B.Di)
D.bRj=new A.a_(62785,"MaterialIcons",!1)
D.dR7=new C.lY("farm","Farm","Crops & livestock",D.bRj)
D.dR6=new C.lY("restaurant","Restaurant","Food & catering",B.v8)
D.dRd=new C.lY("tools","Tools","Workshop gear",B.De)
D.dRi=new C.lY("wallet","Cash & Wallet","Quick spending",B.js)
D.dRf=new C.lY("concrete","Concrete","Foundation work",F.aqJ)
D.dRb=new C.lY("blueprint","Blueprint","Plans & design",Ao.aqf)
D.a74=w([D.dRc,D.dRj,D.dR9,D.dR8,D.dRh,D.dR5,D.dRa,D.dR4,D.dRk,D.dR2,D.dR3,D.dRg,D.dR1,D.dRe,D.dR7,D.dR6,D.dRd,D.dRi,D.dRf,D.dRb],A.at("O<lY>"))
D.dw_=w([B.bu,B.bh],x.O)
D.dwO=w([B.iw,B.oj,B.dV],x.O)
D.aiK=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.ajI=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.boR=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bgr=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aDQ=w([D.aiK,D.ajI,D.boR,D.bgr],x.O)
D.dy_=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a7e=w(["top","middle","bottom"],x.s)
D.dzv=w([B.cr,B.bo,B.dg],x.O)
D.aE9=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.ba2=new A.ab(0,B.G,B.b5,B.J,14)
D.aEd=w([D.ba2],x.V)
D.bnK=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dAd=w([D.ahc,D.a_s,D.bnK],x.O)
D.dAe=w([B.bc,B.dn,B.eb],x.O)
D.erA=new A.r(24,-8)
D.esi=new A.r(48,0)
D.erw=new A.r(24,6)
D.dBX=w([B.J,D.erA,D.esi,D.erw],x.g)
D.dCm=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.eo5={top:0,middle:1,bottom:2}
D.dFA=new A.bs(D.eo5,["Top","Middle","Bottom"],x.r)
D.enG={double:0,single:1,corners:2,none:3}
D.dFG=new A.bs(D.enG,["Double line","One line","Corners","None"],x.r)
D.eoU={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dH8=new A.bs(D.eoU,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dHk=new A.bs(B.i3,[],A.at("bs<H,+(n,n)>"))
D.enY={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.E9=new A.bs(D.enY,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.at("bs<n,H>"))
D.dLB=new H.NV(32,null)
D.dLC=new H.NV(40,null)
D.dLD=new H.NV(46,null)
D.aMi=new C.aul(null)
D.eqr=new A.r(0,40)
D.eqs=new A.r(0,412)
D.equ=new A.r(0,900)
D.eqE=new A.r(0,-34)
D.eqF=new A.r(0,-46)
D.eqH=new A.r(0,-74)
D.eqK=new A.r(100,300)
D.eqL=new A.r(10,14)
D.eqO=new A.r(10,-10)
D.eqT=new A.r(10,-46)
D.eqU=new A.r(10,-58)
D.eqV=new A.r(116,442)
D.eqX=new A.r(11,-1)
D.eqY=new A.r(11,-10)
D.eqZ=new A.r(11,-21)
D.aMG=new A.r(11,-60)
D.er5=new A.r(14,-2)
D.er6=new A.r(150,520)
D.a9f=new A.r(150,592)
D.er9=new A.r(15,-15)
D.era=new A.r(16,-1)
D.ere=new A.r(190,444)
D.erh=new A.r(1,5)
D.erp=new A.r(21,-78)
D.erq=new A.r(222,615)
D.JR=new A.r(225,300)
D.a9h=new A.r(225,574)
D.erz=new A.r(24,-52)
D.erB=new A.r(250,210)
D.erM=new A.r(2,-56)
D.aMV=new A.r(300,0)
D.erN=new A.r(300,440)
D.erQ=new A.r(318,476)
D.erT=new A.r(324,144)
D.a9k=new A.r(332,150)
D.erV=new A.r(335,585)
D.erW=new A.r(338,140)
D.erX=new A.r(340,158)
D.erZ=new A.r(34,-60)
D.EA=new A.r(36,-24)
D.es0=new A.r(372,470)
D.es1=new A.r(390,455)
D.esa=new A.r(42,468)
D.esb=new A.r(431,510)
D.esc=new A.r(431,520)
D.esd=new A.r(45,-92)
D.ese=new A.r(46,20)
D.esf=new A.r(46,-92)
D.esg=new A.r(46,-94)
D.esh=new A.r(47,-4)
D.esj=new A.r(48,-4)
D.esr=new A.r(4,-26)
D.esz=new A.r(60,455)
D.esH=new A.r(8,14)
D.esL=new A.r(8,-76)
D.esN=new A.r(95,575)
D.esO=new A.r(98,-24)
D.esQ=new A.r(9,-2)
D.esR=new A.r(9,-58)
D.aN3=new A.r(9,-79)
D.esS=new A.r(9,-9)
D.etv=new A.r(16.5,8)
D.etx=new A.r(3.2,0)
D.etz=new A.r(-16.5,8)
D.etG=new A.r(16.5,2)
D.etJ=new A.r(-3.2,0)
D.etR=new A.r(9.5,6)
D.etV=new A.r(-10,14)
D.etW=new A.r(-10,-12)
D.etX=new A.r(-10,-58)
D.etZ=new A.r(-11,-1)
D.eu_=new A.r(-11,-10)
D.eu1=new A.r(-11,-60)
D.eu2=new A.r(-12,-14)
D.eu3=new A.r(-12,-16)
D.eua=new A.r(-14,-2)
D.eud=new A.r(-15,-15)
D.eue=new A.r(-15,-3)
D.eug=new A.r(-16,-1)
D.eux=new A.r(-24,-52)
D.euE=new A.r(-2,-34)
D.euF=new A.r(-2,-38)
D.euH=new A.r(-30,-100)
D.a9m=new A.r(-36,-24)
D.euS=new A.r(-4,-26)
D.euU=new A.r(-4,-6)
D.ev3=new A.r(-8,-3)
D.ev4=new A.r(-8,-48)
D.ev7=new A.r(-9,-2)
D.ev9=new A.r(-9,-58)
D.eva=new A.r(-9,-79)
D.evb=new A.r(-9,-9)
D.evd=new A.r(-9.5,6)
D.evq=new A.r(-16.5,2)
D.fRG=new A.B("Write a new book",null,B.hu,null,B.K,null,null,null,null,null,null,null)
D.ew_=new A.D(B.kW,D.fRG,null)
D.h5q=new A.B("Tap to go on",null,B.vM,null,null,null,null,null,null,null,null,null)
D.ewk=new A.D(B.ll,D.h5q,null)
D.as8=new A.ae(B.i0,18,B.c,null,null,null)
D.fKG=new A.B("Add",null,B.kH,null,null,null,null,null,null,null,null,null)
D.dha=w([D.as8,B.rc,D.fKG],x.p)
D.fec=new A.c7(B.aL,B.e,B.N,B.l,null,B.p,null,0,D.dha,null)
D.ewn=new A.D(B.nH,D.fec,null)
D.ewo=new A.D(E.amh,A7.YD,null)
D.fEa=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNT=new A.B("New Project",null,D.fEa,null,null,null,null,null,null,null,null,null)
D.dlD=w([D.as8,B.ae,D.fNT],x.p)
D.fef=new A.c7(B.aL,B.e,B.N,B.l,null,B.p,null,0,D.dlD,null)
D.ewC=new A.D(B.hO,D.fef,null)
D.fQp=new A.B("Choose your header",null,A0.vL,null,null,null,null,null,null,null,null,null)
D.ewX=new A.D(B.i_,D.fQp,null)
D.bfE=new A.fl(2.2,null,null,null,null,B.cU,null,null,null,null)
D.fjZ=new A.a4(22,22,D.bfE,null)
D.bdL=new A.cj(B.z,null,null,D.fjZ,null)
D.ex1=new A.D(B.a0P,D.bdL,null)
D.bEL=new A.Q(14,2,14,6)
D.h3x=new A.B("The top of your book. Tap a design to see it.",null,U.tY,null,null,null,null,null,null,null,null,null)
D.ex2=new A.D(D.bEL,D.h3x,null)
D.fPz=new A.B("\ud83c\udfc6 A new record!",null,B.h5,null,null,null,null,null,null,null,null,null)
D.ex4=new A.D(B.ll,D.fPz,null)
D.eyE=new A.j3(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eyH=new A.j3(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aNE=new A.j3(1,0.9607843137254902,0.48627450980392156,0)
D.JZ=new A.j3(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.AB=new A.j3(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eyN=new A.j3(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hCK=new C.bjT(null)
D.bzz=new A.mJ(D.hCK,null,B.az,null,null)
D.aRh=new A.cK(0,0,0,0,null,null,D.bzz,null)
D.fKI=new A.B("\ud83c\udfc5",null,B.abE,null,null,null,null,null,null,null,null,null)
D.eDc=new A.cK(null,0,-34,null,null,null,D.fKI,null)
D.eLg=new A.y("E","Sit by the fire again")
D.eQP=new A.y("C","Good Learner")
D.eUb=new A.y("D","Still Growing")
D.eYK=new A.y(-42,42)
D.f_5=new A.y("B","Faithful Listener")
D.f14=new A.y("A","Keeper of the Family")
D.f4d=new A.b5(-17,0.7,0)
D.f4M=new A.b5(-8,0.95,1.3)
D.f5P=new A.b5(18,0.65,5.2)
D.f5R=new A.b5(0,1.15,2.6)
D.f6b=new A.b5(9,0.9,3.9)
D.f85=new A.c9([0,0,1,1])
D.aSM=new A.a5(0,0,520,160)
D.fbf=new A.a5(10,612,440,618)
D.fbg=new A.a5(10,612,440,628)
D.fbj=new A.a5(14,-64,34,-12)
D.fbm=new A.a5(300,336,350,348)
D.aag=new A.a5(30,96,420,346)
D.fbn=new A.a5(30,-9,46,1)
D.fbo=new A.a5(4,2,11,14)
D.fbq=new A.a5(-8,-12.5,8,-7)
D.fbr=new A.a5(-16.5,-21,16.5,1)
D.fbs=new A.a5(60,342,88,348)
D.V3=new A.a5(66,-66,94,-36)
D.fbt=new A.a5(6,8,10,14)
D.fbw=new A.a5(95,343,115,348)
D.fbx=new A.a5(-6.5,-74,6.5,-58)
D.fbD=new A.a5(-100,-74,100,-12)
D.fbE=new A.a5(-10,8,-6,14)
D.fbF=new A.a5(-11,2,-4,14)
D.fbG=new A.a5(-11,-70,11,-56)
D.fbN=new A.a5(-13,-24,13,-4)
D.fbT=new A.a5(-15,-21,15,0)
D.fbW=new A.a5(-16,-21,16,1)
D.fbX=new A.a5(-16,-21,16,2)
D.fc_=new A.a5(-16,-26,16,-6)
D.fc9=new A.a5(-230,-26,230,26)
D.fcx=new A.a5(-38,-26,12,-6)
D.fcB=new A.a5(-3,-70,3,-63)
D.fcC=new A.a5(-44,-22,44,0)
D.fcE=new A.a5(-46,-9,-30,1)
D.aSQ=new A.a5(-80,-190,80,20)
D.fcL=new A.a5(-8,-26,40,-6)
D.fcM=new A.a5(-98,-80,92,-75)
D.fcN=new A.a5(-9,-15,9,-9)
D.h34=new A.B("Let the AI write it from your tree",null,B.iH,null,B.K,null,null,null,null,null,null,null)
D.bNa=new A.di(1,B.cm,D.h34,null)
D.ddG=w([E.a4u,B.ae,D.bNa],x.p)
D.fdR=new A.c7(B.aL,B.e,B.N,B.l,null,B.p,null,0,D.ddG,null)
D.fKm=new A.B("Save member",null,B.cd,null,null,null,null,null,null,null,null,null)
D.dtQ=w([D.at0,B.ae,D.fKm],x.p)
D.fe0=new A.c7(B.aL,B.b8,B.h,B.l,null,B.p,null,0,D.dtQ,null)
D.bYQ=new A.ae(B.ii,14,B.b2,null,null,null)
D.fxH=new A.F(!0,B.b2,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOj=new A.B("Cashier",null,D.fxH,null,null,null,null,null,null,null,null,null)
D.dm9=w([D.bYQ,B.bn,D.fOj],x.p)
D.fe4=new A.c7(B.aL,B.e,B.N,B.l,null,B.p,null,0,D.dm9,null)
D.fKn=new A.B("Transfer & settings",null,B.dk,null,null,null,null,null,null,null,null,null)
D.bKQ=new A.by(1,B.ba,D.fKn,null)
D.d4U=w([D.asA,B.at,D.bKQ],x.p)
D.fe5=new A.c7(B.aL,B.e,B.h,B.l,null,B.p,null,0,D.d4U,null)
D.fiF=new A.av(16,40)
D.fiK=new A.av(22,64)
D.fiR=new A.av(280,88)
D.fjF=new A.a4(30,null,null,null)
D.fJs=new A.B("The teacher is writing\u2026",null,B.AY,null,null,null,null,null,null,null,null,null)
D.beS=new A.cj(B.z,null,null,D.fJs,null)
D.hwK=new A.bh("w",x.W)
D.fk3=new A.a4(null,56,D.beS,D.hwK)
D.fkS=new A.hJ(5,8,8,1,null)
D.fl_=new A.hJ(2,12,12,1.05,null)
D.fNZ=new A.B("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.flJ=new A.b0(D.fNZ,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fOe=new A.B("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aV7=new A.b0(D.fOe,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fWH=new A.B("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fmc=new A.b0(D.fWH,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h6s=new A.B("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fmh=new A.b0(D.h6s,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fQn=new A.B("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fmo=new A.b0(D.fQn,null,null,null,null,null,null,null,null,null,null,null,null,B.ha,!1,null,null,null,B.t,null)
D.h3K=new A.B("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aVc=new A.b0(D.h3K,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fQl=new A.B("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fmO=new A.b0(D.fQl,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fKZ=new A.B("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fmQ=new A.b0(D.fKZ,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fU7=new A.B("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fmW=new A.b0(D.fU7,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h7c=new A.B("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fnC=new A.b0(D.h7c,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h1Z=new A.B("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fo1=new A.b0(D.h1Z,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h6w=new A.B("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fo4=new A.b0(D.h6w,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fYl=new A.B("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fo6=new A.b0(D.fYl,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fSi=new A.B("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fo7=new A.b0(D.fSi,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fSj=new A.B("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fp9=new A.b0(D.fSj,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fO0=new A.B("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fpr=new A.b0(D.fO0,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fQ0=new A.B("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fpL=new A.b0(D.fQ0,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fXO=new A.B("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fq1=new A.b0(D.fXO,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fT7=new A.B("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fq2=new A.b0(D.fT7,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fCQ=new A.F(!0,B.bE,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frB=new A.eq("\u2665",null,null,B.cL,null,null,null,null,null,null,D.fCQ)
D.fA_=new A.F(!0,B.aS,null,null,null,null,28,B.O,B.cI,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frR=new A.eq("Today: how well do you know the family?",null,null,B.cL,null,null,null,null,null,null,D.fA_)
D.fs7=new A.F(!0,B.qe,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftj=new A.F(!0,D.kP,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftG=new A.F(!0,D.kP,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftK=new A.F(!0,B.cT,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftT=new A.F(!0,D.fB,null,null,null,null,15,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu3=new A.F(!0,D.fB,null,null,null,null,13,B.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fun=new A.t8(!0,B.tK,null,null,null,null,B.dE,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuD=new A.F(!0,B.cT,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuG=new A.F(!0,D.kP,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuH=new A.F(!0,B.cT,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuM=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuP=new A.F(!0,B.cT,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvk=new A.F(!0,B.b2,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvl=new A.F(!0,B.ab,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvn=new A.F(!0,B.aS,null,null,null,null,15.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvO=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWq=new A.F(!0,B.aR,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWr=new A.F(!0,D.lF,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwd=new A.F(!0,B.cT,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.abJ=new A.t8(!0,B.Uz,null,null,null,null,B.dE,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.VY=new A.F(!0,B.cT,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwn=new A.F(!0,B.a_,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fws=new A.F(!0,D.fB,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwR=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy1=new A.F(!0,D.fB,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWB=new A.F(!0,D.fB,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyl=new A.F(!0,B.ab,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyw=new A.F(!0,D.fB,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyy=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyE=new A.F(!0,L.j6,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWF=new A.F(!0,D.fB,null,null,null,null,14.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzz=new A.F(!0,D.fB,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzT=new A.F(!0,D.fB,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzV=new A.F(!0,B.a_,null,null,null,null,13,B.a9,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzX=new A.F(!0,B.cT,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAk=new A.F(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A6.IP,null,null,null)
D.aWT=new A.F(!0,D.fB,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAI=new A.F(!0,B.a_,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fB3=new A.F(!0,B.fh,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBr=new A.F(!0,B.bQ,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBw=new A.F(!0,B.bD,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBI=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBL=new A.F(!0,D.fB,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBT=new A.F(!0,D.Gp,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC4=new A.F(!0,B.b2,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCt=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCA=new A.F(!0,B.ab,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.DO,null,null,null)
D.fD0=new A.F(!0,B.cT,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fD9=new A.F(!0,B.cU,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDm=new A.F(!0,D.lG,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXe=new A.F(!0,D.fB,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.L5=new A.F(!0,B.cT,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXg=new A.F(!0,B.cT,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.DO,null,null,null)
D.fDH=new A.F(!0,B.bQ,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDL=new A.F(!0,G.nq,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fE8=new A.F(!0,B.b2,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEq=new A.F(!0,D.fB,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEO=new A.F(!0,B.c,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFc=new A.F(!0,D.fB,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFJ=new A.F(!0,D.fB,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFO=new A.F(!0,B.an,null,null,null,null,11.5,B.a9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFY=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.acc=new A.F(!0,B.an,null,null,null,null,12,B.a9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ace=new A.F(!0,D.lF,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHH=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fI0=new A.F(!0,B.aS,null,null,null,null,27,B.O,B.cI,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fI7=new A.F(!0,L.j6,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIf=new A.F(!0,L.j6,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIJ=new A.B("Time:",null,B.hs,null,null,null,null,null,null,null,null,null)
D.fJ3=new A.B("\ud83c\udfae",null,K.ac3,null,null,null,null,null,null,null,null,null)
D.fJ4=new A.B("Themes",null,B.pW,null,null,null,null,null,null,null,null,null)
D.fJA=new A.B("\ud83c\udfb2",null,B.xD,null,null,null,null,null,null,null,null,null)
D.fJE=new A.B("Delete this game?",null,B.iH,null,null,null,null,null,null,null,null,null)
D.fJL=new A.B("Add Item",null,B.cd,null,null,null,null,null,null,null,null,null)
D.fyf=new A.F(!0,B.a_,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKb=new A.B("Debt receipt",null,D.fyf,null,B.K,null,null,null,null,null,null,null)
D.aXv=new A.F(!0,B.an,null,null,null,null,11,B.a9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKu=new A.B("Person who owes",null,D.aXv,null,null,null,null,null,null,null,null,null)
D.fLs=new A.B("Notes",null,B.abS,null,null,null,null,null,null,null,null,null)
D.fLT=new A.B("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fx8=new A.F(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLV=new A.B("Share",null,D.fx8,null,null,null,null,null,null,null,null,null)
D.fMW=new A.B("Move your family trees",null,I.ac9,null,null,null,null,null,null,null,null,null)
D.fNA=new A.B("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fOd=new A.B("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fOB=new A.B("SAVE",null,D.L5,null,null,null,null,null,null,null,null,null)
D.fPd=new A.B("The round button is the right answer.",null,U.xz,null,null,null,null,null,null,null,null,null)
D.fPy=new A.B("Remove this book?",null,B.h5,null,null,null,null,null,null,null,null,null)
D.fE5=new A.F(!0,B.cT,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.DO,null,null,null)
D.fQ5=new A.B("Fireside Stories",null,D.fE5,null,null,null,null,null,null,null,null,null)
D.aY_=new A.B("Download",null,B.cd,null,null,null,null,null,null,null,null,null)
D.fQM=new A.B("What should the AI do?",null,B.dk,null,null,null,null,null,null,null,null,null)
D.fwM=new A.F(!0,D.lF,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fR0=new A.B("REPORT CARD",null,D.fwM,null,null,null,null,null,null,null,null,null)
D.fRN=new A.B("Calabash Catch",null,B.Wm,null,null,null,null,null,null,null,null,null)
D.fSe=new A.B("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fSF=new A.B("\ud83c\udfe1",null,B.F4,null,null,null,null,null,null,null,null,null)
D.fTm=new A.B("Ribbon bookmark",null,B.jC,null,null,null,null,null,null,null,null,null)
D.fFI=new A.F(!0,B.b2,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTR=new A.B("NGMY.ORG",null,D.fFI,null,B.K,null,null,null,null,null,null,null)
D.fV9=new A.B("Scan family tree QR",null,B.cF,null,null,null,null,null,null,null,null,null)
D.fBM=new A.F(!0,B.c,null,null,null,null,13,B.a9,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVX=new A.B("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fBM,null,B.K,null,null,null,null,null,null,null)
D.fXa=new A.B("Delete",null,B.VS,null,null,null,null,null,null,null,null,null)
D.fXb=new A.B("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fXj=new A.B("Thumbnail",null,B.pW,null,null,null,null,null,null,null,null,null)
D.fXT=new A.B("Save the cover",null,B.cF,null,null,null,null,null,null,null,null,null)
D.fXY=new A.B("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.B6,null,B.K,null,null,null,null,null,null,null)
D.fYm=new A.B("Your photos",null,B.pW,null,null,null,null,null,null,null,null,null)
D.fYC=new A.B("Create Project",null,B.cd,null,null,null,null,null,null,null,null,null)
D.fYZ=new A.B("\u2b50 stars",null,B.W6,null,null,null,null,null,null,null,null,null)
D.fZc=new A.B("Design your cover",null,A0.vL,null,null,null,null,null,null,null,null,null)
D.fZi=new A.B("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fZl=new A.B("PICTURE",null,M.vP,null,null,null,null,null,null,null,null,null)
D.fZn=new A.B("\ud83c\udfaf",null,D.Wl,null,null,null,null,null,null,null,null,null)
D.fZK=new A.B("Paid",null,B.cd,null,null,null,null,null,null,null,null,null)
D.fZM=new A.B("You can undo it right after.",null,U.xz,null,null,null,null,null,null,null,null,null)
D.h_j=new A.B("Print",null,B.vN,null,null,null,null,null,null,null,null,null)
D.h_I=new A.B("Amount owed",null,D.aXv,null,null,null,null,null,null,null,null,null)
D.h_X=new A.B("Got it",null,B.cd,null,null,null,null,null,null,null,null,null)
D.h0y=new A.B("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.h0B=new A.B("Add to budget",null,B.cd,null,null,null,null,null,null,null,null,null)
D.h11=new A.B("Debtor signature",null,B.abS,null,null,null,null,null,null,null,null,null)
D.h1b=new A.B("Change icon",null,B.abR,null,null,null,null,null,null,null,null,null)
D.h2_=new A.B("MADE BY THE SYSTEM, FROM YOUR TREE",null,T.u_,null,null,null,null,null,null,null,null,null)
D.h2r=new A.B("Family tree QR",null,B.cF,null,null,null,null,null,null,null,null,null)
D.h2x=new A.B("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.Wk,null,null,null,null,null,null,null,null,null)
D.h2V=new A.B("Download",null,B.vN,null,null,null,null,null,null,null,null,null)
D.h2W=new A.B("The person who planted this tree has not made a game yet.",null,B.B4,null,null,null,null,null,null,null,null,null)
D.h3_=new A.B("Change",null,B.pW,null,null,null,null,null,null,null,null,null)
D.h3Q=new A.B("Clear all",null,B.cd,null,null,null,null,null,null,null,null,null)
D.h3T=new A.B("WHAT SHOULD IT CHANGE?",null,M.vP,null,null,null,null,null,null,null,null,null)
D.h4q=new A.B("COLOUR",null,M.vP,null,null,null,null,null,null,null,null,null)
D.h4F=new A.B("Do it",null,B.cF,null,null,null,null,null,null,null,null,null)
D.h4I=new A.B("Create Tree",null,B.cd,null,null,null,null,null,null,null,null,null)
D.h4S=new A.B("Give me another clue",null,D.L5,null,null,null,null,null,null,null,null,null)
D.h5M=new A.B("Create Family Tree",null,B.f9,null,null,null,null,null,null,null,null,null)
D.h5W=new A.B("THE TEACHER EXPLAINS THESE",null,T.u_,null,null,null,null,null,null,null,null,null)
D.fs6=new A.F(!0,E.ku,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h61=new A.B("Write the first page myself",null,D.fs6,null,null,null,null,null,null,null,null,null)
D.h6z=new A.B("Use this header",null,B.cF,null,null,null,null,null,null,null,null,null)
D.h6G=new A.B("Create Project",null,E.aXb,null,null,null,null,null,null,null,null,null)
D.hyd=new C.acL(1,"header")
D.adg=new C.acL(2,"projects")
D.hye=new C.acL(3,"cashier")
D.adh=new C.acL(4,"familyTree")
D.hLe=new C.cGU(0,"start")
D.hLf=new C.cGV(0,"start")
D.hyr=new C.ZO(null)
D.hzs=new C.a_g(null)
D.dHh=new A.bs(B.i3,[],A.at("bs<n,GC>"))
D.doS=w([],x.dE)
D.doT=w([],x.M)
D.hA0=new C.bh5(D.dHh,D.doS,D.doT,0,0,null,null)
D.b1v=new C.a06(0,"intro")
D.b1w=new C.a06(1,"countdown")
D.adu=new C.a06(2,"ask")
D.Xh=new C.a06(3,"reveal")
D.b1x=new C.a06(4,"end")
D.hCM=new C.tg(F.Gx,D.lG,B.cT,F.m7,5,!1,!1,!1,0,null)
D.hCN=new C.tg(F.Gx,B.er,B.cT,B.bO,2,!0,!0,!1,2,B.cT)
D.hCO=new C.tg(B.qr,B.cU,B.cT,F.m7,2,!0,!1,!1,2,B.as)
D.hCP=new C.tg(F.Gx,B.dW,B.cT,F.m7,5,!1,!1,!1,1,null)
D.hCQ=new C.tg(F.a_K,D.ajI,B.cT,F.m7,4,!0,!1,!0,0,null)
D.b1A=new C.tg(F.a_K,B.dR,B.cT,F.m7,3,!0,!1,!0,2,null)
D.b1B=new C.tg(F.rV,D.lG,B.c,F.m7,0,!1,!1,!0,0,null)
D.b1C=new C.tg(B.qr,B.aD,B.cT,B.bO,2,!0,!0,!1,2,B.dR)
D.b1D=new C.tg(B.qr,G.nq,B.id,F.m7,5,!1,!1,!0,3,null)
D.hCR=new C.tg(B.qr,B.dR,B.cT,F.m7,0,!0,!1,!1,0,B.aD)
D.b1E=new C.tg(F.Gx,B.er,B.cT,B.bO,1,!1,!0,!1,1,null)
D.b1F=new C.tg(F.G6,B.as,B.aD,F.m7,4,!0,!1,!0,2,null)
D.hCS=new C.tg(F.rV,B.as,B.er,F.m7,3,!0,!1,!1,0,null)
D.hCT=new C.tg(B.qr,B.dW,B.cT,B.bO,1,!1,!0,!1,1,null)
D.hCU=new C.tg(F.G6,D.aiK,B.c,F.m7,5,!1,!1,!0,0,null)
D.hDx=new C.a0E(null)
D.hLn=new C.ag9(0,"still")
D.XE=new C.ag9(1,"walk")
D.b25=new C.ag9(2,"pound")
D.b26=new C.ag9(3,"drum")
D.hH1=new C.a1V(0,"greet")
D.b27=new C.a1V(1,"teach")
D.adO=new C.a1V(2,"ask")
D.hH2=new C.a1V(3,"feedback")
D.b28=new C.a1V(4,"end")
D.XK=new C.a2d(0,"intro")
D.XL=new C.a2d(1,"asking")
D.Bm=new C.a2d(2,"reacting")
D.ae_=new C.a2d(3,"driving")
D.ae0=new C.a2d(4,"arrived")
D.ae8=new C.aLT(0,"projects")
D.b2y=new C.aLT(1,"cashier")
D.hJ7=new C.aLT(2,"familyTree")})()};
(a=>{a["ZDP9zOkeCQy/U4pshnTZxtDmQOA="]=a.current})($__dart_deferred_initializers__);