((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,N,P,A0,S,Aa,L,H,E,T,Ab,Q,Ac,U,Ad,Ae,A1,Af,Ag,R,M,A2,Ah,A3,A4,A5,A6,Ai,Aj,A7,Ak,Al,A8,Am,G,An,Ao,Ap,A9,Aq,V,O,Ar,As,W,At,X,Y,F,Au,K,I,Z,C={
bFf(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bFf=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vK(null,""),$async$bFf)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.W(y.z)
t=A.nh(b1)
s=A.bZ(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.du(b3,k,Math.min(i,j))
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
return A.b(A.rc(t,a1,B.hW,"book",E.Gw),$async$bFf)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.Ri(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.W(l!=null&&A.LK(l)?y.k:y.y)
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a3m(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFf,v)},
ahL(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ahL=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vK(null,""),$async$ahL)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.W(y.z)
t=A.nh(b6)
s=x.S
r=A.cW(c1,0,A.dA(4,"count",s),A.T(c1).c)
q=H.a39(new A.N(r,new C.fMv(),r.$ti.k("N<ak.E,m>")).aN(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fMu(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.Y.az(b7,null)+"\nAllowed values: style one of "+B.d.aN(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ahL)
case 6:l=c5
k=H.Ri(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.api(s,D.dCV,r.b(k.h(0,"cover"))?A.a3(r.a(k.h(0,"cover")),x.N,x.z):null)
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
a4=B.d.du(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.J)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.I(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.Y.az(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ahL)
case 10:l=c5
k=l==null?null:H.Ri(l)
if(k==null)throw A.W(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.dd(a8,d),a5=J.aX(a2.a),a2=a2.$ti,a7=new A.lg(a5,a2.k("lg<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gR(a5))
b0=J.a7(a9)
b1=A.aK(b0.h(a9,"index"))
i=b1==null?null:B.k.M(b1)
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
p=A.cE(new A.b8(h,s),new C.fMw(),s.k("M.E"),p)
p=H.a39(A.pC(p,3,A.a4(p).k("M.E")).aN(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cx<1>")
b4=A.C(new A.cx(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.J)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a3m(s,b9),$async$ahL)
case 13:b5=c5
for(s=J.a7(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.api(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahL,v)},
hCS(d,e,f){return A.cf(null,B.w.j(0.65),!1,null,new C.fW_(e,f),d,null,!0,!0,x.g2)},
api:function api(d,e,f){this.a=d
this.b=e
this.c=f},
fMv:function fMv(){},
fMu:function fMu(d){this.a=d},
fMw:function fMw(){},
fW_:function fW_(d,e){this.a=d
this.b=e},
bD2(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bD2=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aX(b1,new C.fzW())){u=null
w=1
break}t=B.d.cM(b1,new C.fzX())
s=$.S()
r=new A.pW(new A.pv())
q=A.zl(r,D.aR8)
p=A.K()
p.r=B.c.gp(0)
q.au(D.aR8,p)
o=A.K()
o.r=B.R.gp(0)
o.c=3.6
o.b=B.aa
o.d=B.bA
o.e=B.dS
n=new C.fA1(t)
if(!t){for(s=b1.length,m=1/0,l=1/0,k=0,j=0,i=0;i<s;++i){h=b1[i]
if(h==null)continue
g=h.a
if(g<m)m=g
f=h.b
if(f<l)l=f
if(g>k)k=g
if(f>j)j=f}e=B.k.F(k-m,1,1e4)
d=B.k.F(j-l,1,1e4)
a0=B.k.F(478.40000000000003/e,0,147.20000000000002/d)
a1=(520-e*a0)/2
a2=(160-d*a0)/2
s=$.S()
p=A.a([],x.v)
a3=new A.aE(s.r,B.ah,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.J)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.aY(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.ai(a8)
a3.a8()
a4=!0}else{a7=new A.aq(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.ai(a8)
a3.a8()}}q.ae(a3,o)}else{p=A.a([],x.v)
a3=new A.aE(s.r,B.ah,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.J)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.aY(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.ai(a8)
a3.a8()
a4=!0}else{a7=new A.aq(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.ai(a8)
a3.a8()}}q.ae(a3,o)}w=4
return A.b(r.nZ().xy(520,160),$async$bD2)
case 4:w=3
return A.b(b3.hs(B.he),$async$bD2)
case 3:b0=b3
u=b0==null?null:J.eQ(B.dM.gaU(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bD2,v)},
fKb(d){return C.ihr(d)},
ihr(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fKb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bj6()
n=d.x!=null&&d.zC(null).length===0
if(d.x!=null)t=n?D.Ah:D.Jz
else t=d.gUu()?D.Jz:D.aM1
w=3
return A.b(C.bD2(d.ax),$async$fKb)
case 3:s=f
p.a=null
if(s!=null)p.a=A.anY(s)
r=A.a55(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aM1}else{p.c=C.xd(q,!0)
p.b=n?D.Ah:D.Jz}r.a3V(A.h5q(new C.fKd(p,d,new C.fKe(),t,n,o),null,D.bFt,B.x0))
u=r.jG(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fKb,v)},
fQQ(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fQQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fKb(d),$async$fQQ)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.aA(q,0,40)
u=Ag.Hk(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fQQ,v)},
fzW:function fzW(){},
fzX:function fzX(){},
fA1:function fA1(d){this.a=d},
fKe:function fKe(){},
fKd:function fKd(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fKc:function fKc(){},
fWs(d,e){var w=0,v=A.j(x.H)
var $async$fWs=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,B.w.j(0.55),!0,null,new C.fWw(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fWs)
case 2:return A.h(null,v)}})
return A.i($async$fWs,v)},
bFF(d,e,f,g){return C.ip0(d,e,f,g)},
ip0(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bFF=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cG.aM(t)}catch(q){r=null}if(r==null||r.length===0){d.L(x.q).f.U(D.fj4)
w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.fWo(g,r,f),d,null,!0,!0,x.H),$async$bFF)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bFF,v)},
fWx(d,e){var w=0,v=A.j(x.H)
var $async$fWx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,null,!0,null,new C.fWA(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fWx)
case 2:return A.h(null,v)}})
return A.i($async$fWx,v)},
b_k:function b_k(d,e){this.c=d
this.a=e},
c7i:function c7i(){},
bcv:function bcv(d,e){this.b=d
this.a=e},
fWw:function fWw(d,e){this.a=d
this.b=e},
fWt:function fWt(d){this.a=d},
fWu:function fWu(d,e,f){this.a=d
this.b=e
this.c=f},
fWv:function fWv(d,e){this.a=d
this.b=e},
fWo:function fWo(d,e,f){this.a=d
this.b=e
this.c=f},
fWm:function fWm(d){this.a=d},
fWn:function fWn(d,e,f){this.a=d
this.b=e
this.c=f},
fWA:function fWA(d,e){this.a=d
this.b=e},
fWy:function fWy(d){this.a=d},
fWz:function fWz(d,e,f){this.a=d
this.b=e
this.c=f},
fEB(d,e){var w=0,v=A.j(x.y),u,t
var $async$fEB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a2V(d),$async$fEB)
case 3:t=g
J.nK(t,new C.fEC(e))
u=A.aip(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fEB,v)},
fEC:function fEC(d){this.a=d},
apu:function apu(d,e,f){this.c=d
this.d=e
this.a=f},
aEd:function aEd(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dPh:function dPh(d,e){this.a=d
this.b=e},
dP2:function dP2(d,e){this.a=d
this.b=e},
dP5:function dP5(d,e,f){this.a=d
this.b=e
this.c=f},
dP4:function dP4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dP3:function dP3(d,e){this.a=d
this.b=e},
dP6:function dP6(d,e){this.a=d
this.b=e},
dP0:function dP0(){},
dP1:function dP1(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dP_:function dP_(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dOL:function dOL(d){this.a=d},
dOM:function dOM(d,e,f){this.a=d
this.b=e
this.c=f},
dON:function dON(d,e){this.a=d
this.b=e},
dOK:function dOK(d){this.a=d},
dOS:function dOS(d,e){this.a=d
this.b=e},
dOJ:function dOJ(d){this.a=d},
dOT:function dOT(d,e,f){this.a=d
this.b=e
this.c=f},
dOU:function dOU(d,e,f){this.a=d
this.b=e
this.c=f},
dOI:function dOI(d,e){this.a=d
this.b=e},
dOV:function dOV(d,e,f){this.a=d
this.b=e
this.c=f},
dOH:function dOH(d,e){this.a=d
this.b=e},
dOW:function dOW(d,e){this.a=d
this.b=e},
dOG:function dOG(d){this.a=d},
dOX:function dOX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dOE:function dOE(){},
dOy:function dOy(d){this.a=d},
dOz:function dOz(d){this.a=d},
dOF:function dOF(d,e){this.a=d
this.b=e},
dOY:function dOY(d,e){this.a=d
this.b=e},
dOD:function dOD(d){this.a=d},
dOZ:function dOZ(d){this.a=d},
dOC:function dOC(){},
dOO:function dOO(d,e){this.a=d
this.b=e},
dOB:function dOB(d){this.a=d},
dOP:function dOP(d,e,f){this.a=d
this.b=e
this.c=f},
dOA:function dOA(d,e){this.a=d
this.b=e},
dOx:function dOx(d,e){this.a=d
this.b=e},
dOQ:function dOQ(d){this.a=d},
dOR:function dOR(d,e,f){this.a=d
this.b=e
this.c=f},
dPk:function dPk(){},
dPl:function dPl(d,e){this.a=d
this.b=e},
dPi:function dPi(d){this.a=d},
dPj:function dPj(d){this.a=d},
dPe:function dPe(d,e){this.a=d
this.b=e},
dPf:function dPf(d){this.a=d},
dP7:function dP7(d,e,f){this.a=d
this.b=e
this.c=f},
dP8:function dP8(d,e,f){this.a=d
this.b=e
this.c=f},
dP9:function dP9(d,e,f){this.a=d
this.b=e
this.c=f},
dPa:function dPa(d,e,f){this.a=d
this.b=e
this.c=f},
dPb:function dPb(d,e,f){this.a=d
this.b=e
this.c=f},
dPc:function dPc(d,e,f){this.a=d
this.b=e
this.c=f},
dPd:function dPd(d,e,f){this.a=d
this.b=e
this.c=f},
dPm:function dPm(){},
dPn:function dPn(){},
dPo:function dPo(){},
dPp:function dPp(d){this.a=d},
dPg:function dPg(d,e){this.a=d
this.b=e},
hyM(d){return B.d.dO(D.a4q,new C.fFk(d),new C.fFl())},
uI:function uI(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fFk:function fFk(d){this.a=d},
fFl:function fFl(){},
aly:function aly(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aW4:function aW4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
TK:function TK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bg7:function bg7(){this.d=$
this.c=this.a=null},
df3:function df3(d,e){this.a=d
this.b=e},
df1:function df1(d,e){this.a=d
this.b=e},
df2:function df2(){},
df4:function df4(d,e){this.a=d
this.b=e},
hjh(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bj(J.k(u==null?"":u))
return new C.nr(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
Lw(d,e){return C.ig3(d,e)},
ig3(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$Lw=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Lw)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aT(J.t(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.Y.aS(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.dd(p,x.f)
o=A.cE(o,new C.fHN(),o.$ti.k("M.E"),x.B)
n=A.a4(o).k("X<M.E>")
o=A.C(new A.X(o,new C.fHO(),n),n.k("M.E"))
B.d.aZ(o,new C.fHP())
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
return A.i($async$Lw,v)},
Bp(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Bp=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$Bp)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b7(f,new C.fV5(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aB("String","ngmy_family_book_v1_"+s+"_"+e,B.Y.az(r,null)),$async$Bp)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Bp,v)},
aS5(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aS5=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Lw(d,e),$async$aS5)
case 2:u=h
t=J.cC(u)
s=t.bj(u,new C.h2q(f))
if(s===-1)t.c4(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Bp(d,e,u),$async$aS5)
case 3:return A.h(null,v)}})
return A.i($async$aS5,v)},
bDw(d,e,f){var w=0,v=A.j(x.H),u
var $async$bDw=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Lw(d,e),$async$bDw)
case 2:u=h
J.nK(u,new C.fEt(f))
w=3
return A.b(C.Bp(d,e,u),$async$bDw)
case 3:return A.h(null,v)}})
return A.i($async$bDw,v)},
bDL(d,e){return C.ig2(d,e)},
ig2(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bDL=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bDL)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aT(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Ot
w=1
break}p=B.Y.aS(0,q,null)
if(x.f.b(p)){o=A.a3(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aK(o.h(0,"emblem"))
k=k==null?null:B.k.M(k)
if(k==null)k=0
if(D.DE.an(0,o.h(0,"foil")))j=A.cO(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aK(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.F(i==null?25:i,18,36)
h=B.d.q(D.a67,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.q(D.a5s,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.q(D.a5o,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.d4Z,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.Ii(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Ot
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Ot
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bDL,v)},
Sn(d,e,f){return C.ioy(d,e,f)},
ioy(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Sn=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$Sn)
case 7:r=h
w=8
return A.b(r.aB("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.Y.az(f.ak(),null)),$async$Sn)
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
return A.i($async$Sn,v)},
RR(d,e){return C.ig4(d,e)},
ig4(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$RR=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$RR)
case 7:r=g
q=r.tP("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Lw(d,e),$async$RR)
case 8:if(!j.cI(g)){n=B.a.i(d.toLowerCase())
m=J.lG(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$RR)
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
return A.i($async$RR,v)},
ah4(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ah4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.RR(d,e),$async$ah4)
case 3:s=g
r=J.a7(s)
if(r.gJ(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gJ(s):"main"
r.I(s,t)
w=5
return A.b(A.az(),$async$ah4)
case 5:w=4
return A.b(g.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ah4)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ah4,v)},
a3y(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a3y=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.RR(d,e),$async$a3y)
case 2:s=h
J.hq(s,f)
w=3
return A.b(A.az(),$async$a3y)
case 3:u=h
w=4
return A.b(u.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a3y)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a3y)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a3y)
case 6:return A.h(null,v)}})
return A.i($async$a3y,v)},
nr:function nr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fHN:function fHN(){},
fHO:function fHO(){},
fHP:function fHP(){},
fV5:function fV5(){},
h2q:function h2q(d){this.a=d},
fEt:function fEt(d){this.a=d},
Ii:function Ii(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bQM:function bQM(d){this.a=d},
ioQ(d,e,f,g,h,i,j){return A.a6(d,!1).cd(A.eb(new C.fVE(j,i,f,e,h,g),!0,null,x.H))},
RN(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$RN=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.RR(h,g),$async$RN)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.L(x.q).f.U(D.aTp)
u=!1
w=1
break}w=4
return A.b(C.hCS(d,f,e),$async$RN)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ah4(h,g),$async$RN)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nr(""+(q+n),l,B.a.i(m.b),new A.V(Date.now(),0,!1)))}w=6
return A.b(C.Bp(h,r,p),$async$RN)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Sn(h,r,new C.Ii("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$RN)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$RN,v)},
fVE:function fVE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a_h:function a_h(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBc:function aBc(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dfJ:function dfJ(d){this.a=d},
dfI:function dfI(d,e){this.a=d
this.b=e},
dfx:function dfx(d,e){this.a=d
this.b=e},
dfu:function dfu(d,e){this.a=d
this.b=e},
df5:function df5(d){this.a=d},
df6:function df6(d,e){this.a=d
this.b=e},
dfy:function dfy(d){this.a=d},
dfe:function dfe(d){this.a=d},
dfc:function dfc(d){this.a=d},
dfd:function dfd(d){this.a=d},
dff:function dff(d){this.a=d},
dfv:function dfv(d){this.a=d},
dfw:function dfw(){},
dfa:function dfa(d){this.a=d},
dfb:function dfb(d,e){this.a=d
this.b=e},
dfg:function dfg(d){this.a=d},
dfh:function dfh(d,e){this.a=d
this.b=e},
dfH:function dfH(d){this.a=d},
dfG:function dfG(d,e){this.a=d
this.b=e},
dfF:function dfF(d){this.a=d},
dfr:function dfr(d){this.a=d},
dfq:function dfq(d){this.a=d},
dfs:function dfs(d){this.a=d},
df7:function df7(d,e){this.a=d
this.b=e},
dft:function dft(d,e){this.a=d
this.b=e},
dfk:function dfk(d){this.a=d},
dfl:function dfl(d){this.a=d},
dfj:function dfj(){},
dfm:function dfm(d){this.a=d},
dfn:function dfn(d){this.a=d},
dfo:function dfo(d,e){this.a=d
this.b=e},
dfp:function dfp(d,e,f){this.a=d
this.b=e
this.c=f},
dfi:function dfi(d,e){this.a=d
this.b=e},
dfA:function dfA(d){this.a=d},
dfz:function dfz(){},
dfB:function dfB(d){this.a=d},
dfC:function dfC(d){this.a=d},
dfD:function dfD(d){this.a=d},
dfE:function dfE(d,e){this.a=d
this.b=e},
df8:function df8(d){this.a=d},
df9:function df9(d){this.a=d},
a_l:function a_l(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgw:function bgw(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dhu:function dhu(d){this.a=d},
dhv:function dhv(d){this.a=d},
dht:function dht(d){this.a=d},
dhw:function dhw(d){this.a=d},
dhs:function dhs(d){this.a=d},
dhx:function dhx(d){this.a=d},
dhr:function dhr(d){this.a=d},
dhy:function dhy(d,e){this.a=d
this.b=e},
dhq:function dhq(d,e){this.a=d
this.b=e},
dhz:function dhz(d,e){this.a=d
this.b=e},
a_j:function a_j(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
afu:function afu(d,e,f){this.a=d
this.b=e
this.c=f},
aBf:function aBf(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dfY:function dfY(d,e){this.a=d
this.b=e},
dfX:function dfX(d,e){this.a=d
this.b=e},
dg1:function dg1(d){this.a=d},
dg0:function dg0(d,e){this.a=d
this.b=e},
dfZ:function dfZ(d){this.a=d},
dg_:function dg_(d){this.a=d},
dg2:function dg2(d){this.a=d},
dg3:function dg3(d){this.a=d},
dfW:function dfW(d,e){this.a=d
this.b=e},
dfV:function dfV(d,e){this.a=d
this.b=e},
KE:function KE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Zz:function Zz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cOq:function cOq(d){this.a=d},
cOr:function cOr(){},
cOs:function cOs(d){this.a=d},
bdJ:function bdJ(d,e,f){this.b=d
this.c=e
this.a=f},
bdA:function bdA(d,e){this.b=d
this.a=e},
uJ:function uJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ZS:function ZS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdH:function bdH(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d6Z:function d6Z(d,e,f){this.a=d
this.b=e
this.c=f},
d6Y:function d6Y(d,e){this.a=d
this.b=e},
d7n:function d7n(d){this.a=d},
d7a:function d7a(){},
d7o:function d7o(d){this.a=d},
d79:function d79(){},
d7p:function d7p(d,e){this.a=d
this.b=e},
d78:function d78(d,e){this.a=d
this.b=e},
d7q:function d7q(d,e){this.a=d
this.b=e},
d77:function d77(d,e){this.a=d
this.b=e},
d7r:function d7r(d){this.a=d},
d76:function d76(){},
d7s:function d7s(d,e){this.a=d
this.b=e},
d75:function d75(d,e){this.a=d
this.b=e},
d7t:function d7t(d){this.a=d},
d7i:function d7i(d,e){this.a=d
this.b=e},
d7u:function d7u(d){this.a=d},
d7v:function d7v(d){this.a=d},
d7x:function d7x(d){this.a=d},
d7y:function d7y(d){this.a=d},
d7h:function d7h(d,e){this.a=d
this.b=e},
d7z:function d7z(d,e){this.a=d
this.b=e},
aId:function aId(d){this.a=d},
bj3:function bj3(d){this.a=d},
bbS:function bbS(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
alz:function alz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a1y:function a1y(d,e){this.a=d
this.b=e},
alA:function alA(d,e,f,g,h,i){var _=this
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
_.aa$=i
_.c=_.a=null},
bQW:function bQW(d){this.a=d},
bQQ:function bQQ(d){this.a=d},
bQP:function bQP(d,e){this.a=d
this.b=e},
bQZ:function bQZ(d){this.a=d},
bQR:function bQR(d){this.a=d},
bQS:function bQS(d){this.a=d},
bQV:function bQV(d){this.a=d},
bQU:function bQU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQX:function bQX(d,e){this.a=d
this.b=e},
bQY:function bQY(){},
bQT:function bQT(d){this.a=d},
bQN:function bQN(d,e){this.a=d
this.b=e},
bQO:function bQO(d){this.a=d},
boC:function boC(d,e){this.b=d
this.a=e},
aBd:function aBd(){},
iv(d,e){var w
$.S()
w=A.K()
w.b=B.aa
w.c=e
w.r=d.gp(0)
w.d=B.bA
w.e=B.dS
return w},
bD4(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bq(j.save())
j.translate(e.a,e.b)
d.pe(0,a0?-f:f,f)
w=A.bJ(B.ih,8,36)
v=B.w.j(0.3)
u=$.S()
t=A.K()
t.r=v.gp(0)
d.bY(w,t)
w=a1===D.WX
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ar(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.eot,new A.q(-4+v,-2),C.iv(q,5))
d.ah(D.em2,new A.q(4-v,-2),C.iv(q,5))}else{t=A.bJ(B.Jp,14,40)
p=A.K()
p.r=v.gp(0)
d.bY(t,p)}v=u.r
u=x.v
o=new A.aE(v,B.ah,k,k,A.a([],u))
t=-64-r
o.D(new A.aY(-11,t))
o.D(new A.c4(-15,-40,-14,a3?-12:-18))
o.D(new A.aq(14,a3?-12:-18))
o.D(new A.c4(15,-40,11,t))
o.D(new A.bt())
t=A.K()
t.r=w.gp(0)
d.ae(o,t)
u=new A.aE(v,B.ah,k,k,A.a([],u))
u.D(new A.aY(-12,-50-r))
v=-46-r
u.D(new A.aq(12,v))
u.D(new A.aq(12.5,-42-r))
u.D(new A.aq(-12.5,v))
u.D(new A.bt())
v=A.K()
v.r=h.c.gp(0)
d.ae(u,v)
switch(a1.a){case 2:w=Math.sin(g*3.4)
break
case 3:w=Math.sin(g*7.5)
break
default:w=s
break}if(a1===D.b0c){n=-52+w*14
d.ah(new A.q(10,n-22),new A.q(10,n+44),C.iv(F.FK,3.4))
d.ah(D.eoL,new A.q(9,n),C.iv(q,4))
d.ah(D.ems,new A.q(10,n),C.iv(q,4))}else if(a1===D.b0d){d.ah(D.eny,new A.q(-8,-26-Math.max(0,w)*6),C.iv(q,4))
d.ah(D.ekt,new A.q(8,-26-Math.max(0,-w)*6),C.iv(q,4))}else{w=s*3
v=-38-r
d.ah(D.enD,new A.q(-12-w,v),C.iv(q,4))
d.ah(D.aL3,new A.q(12+w,v),C.iv(q,4))}w=A.K()
w.r=q.gp(0)
d.au(D.f6_,w)
m=new A.q(0,-77-r)
w=A.bJ(m,22,19)
v=A.K()
v.r=q.gp(0)
d.bY(w,v)
w=h.y
if(w!=null){v=A.bJ(m.a7(0,I.vk),15,24)
u=A.K()
u.r=w.gp(0)
d.bY(v,u)
u=m.a7(0,D.ekn)
v=A.K()
v.r=w.gp(0)
d.N(u,4,v)}else{w=A.bJ(m.a7(0,B.tf),23,20)
v=h.d
u=A.K()
u.r=v.gp(0)
d.cN(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a7(0,D.eoJ),m.a7(0,D.enw),C.iv(v,2.2))
d.ah(m.a7(0,D.emr),m.a7(0,D.ekk),C.iv(v,2.2))}if(w===4){w=m.a7(0,D.eoN)
u=A.K()
u.r=v.gp(0)
d.N(w,6,u)
u=m.a7(0,D.emt)
w=A.K()
w.r=v.gp(0)
d.N(u,6,w)}}w=m.a7(0,D.enj)
v=A.K()
v.r=B.i7.gp(0)
d.N(w,0.9,v)
v=m.a7(0,D.en7)
w=A.K()
w.r=B.i7.gp(0)
d.N(v,0.9,w)
if(i){l=m.a7(0,I.a83)
w=A.bJ(l,21,22)
v=A.K()
v.r=D.lB.gp(0)
d.bY(w,v)
v=A.bJ(l.a7(0,I.aL0),5,12)
w=A.K()
w.r=D.bfi.gp(0)
d.bY(v,w)
d.ah(l.a7(0,D.eoF),l.a7(0,I.aLn),C.iv(B.cN,1.4))
d.ah(D.aL3,new A.q(15,-88-r),C.iv(q,3.6))}j.restore()},
hxp(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.bq(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bV(0,f)
v=A.bJ(B.dF,18,96)
u=B.w.j(0.28)
$.S()
t=A.K()
t.r=u.gp(0)
d.bY(v,t)
t=A.bJ(B.dF,11,70)
v=B.w.j(0.2)
u=A.K()
u.r=v.gp(0)
d.bY(t,u)
d.lw(D.aRc,A.K())
C.i4z(d,g,h,i,j)
s=(k==null?D.a89:k).a-w>=0?1:-1
w=A.K()
w.a=B.LE
w.sar(A.jv(new A.q(s*70,-60),new A.q(-s*70,-60),A.a([D.ahT.j(0.5),D.ahT.j(0.12),D.bmz.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.au(D.aRc,w)
r.restore()
r.restore()},
i4z(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ar(d,B.w,0.28)
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
s=A.br(D.f60,B.tj)
p=$.S()
o=A.K()
o.r=u.gp(0)
a1.ap(s,o)
o=A.br(D.f5W,B.hL)
s=A.ar(v,B.w,0.18)
s.toString
n=A.K()
n.r=s.gp(0)
a1.ap(o,n)
n=A.br(D.f69,B.hL)
o=A.ar(v,B.w,0.1)
o.toString
s=A.K()
s.r=o.gp(0)
a1.ap(n,s)
s=A.K()
s.r=d.gp(0)
a1.bY(D.f62,s)
s=A.K()
s.r=d.gp(0)
a1.bY(D.f4M,s)
s=a1.c
J.bq(s.save())
s.translate(a3.w,0)
J.bq(s.save())
a1.pe(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aE(p.r,B.ah,e,e,A.a([],n))
p=-m
k=p+2
l.D(new A.aY(k,-58))
l.D(new A.c4(p-3,-62,p,-52))
l.D(new A.aq(p+4,-14))
l.D(new A.aq(m-4,-14))
l.D(new A.aq(m,-52))
l.D(new A.c4(m+3,-62,m-2,-58))
l.D(new A.c4(0,-70,k,-58))
l.D(new A.bt())
k=A.K()
k.r=v.gp(0)
a1.ae(l,k)
J.bq(s.save())
a1.mP(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.dbE[j]
i=new A.ao(B.Q,B.N,B.T,B.U,B.S)
i.b=B.aa
i.c=5
i.r=k.gp(0)
i.d=B.bA
i.e=B.dS
a1.ah(new A.q(-34+u,-64),new A.q(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.E(B.o.aq(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.S()
f=new A.ao(B.Q,B.N,B.T,B.U,B.S)
f.r=i.gp(0)
a1.N(new A.q(g,h),3.6,f)
f=new A.ao(B.Q,B.N,B.T,B.U,B.S)
f.r=u.gp(0)
a1.N(new A.q(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ao(B.Q,B.N,B.T,B.U,B.S)
i.b=B.aa
i.c=1.6
i.r=k.gp(0)
i.d=B.bA
i.e=B.dS
a1.ah(new A.q(g,-64),new A.q(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ao(B.Q,B.N,B.T,B.U,B.S)
i.b=B.aa
i.c=1.6
i.r=k.gp(0)
i.d=B.bA
i.e=B.dS
a1.ah(new A.q(-30,h),new A.q(30,h),i)}break
default:a1.ah(D.eo8,D.el8,C.iv(a2.c.j(0.9),3))}a1.ah(D.eoG,D.enF,C.iv(B.w.j(0.18),1.6))
a1.ah(D.eks,I.aL5,C.iv(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.S()
i=A.K()
i.r=u.gp(0)
a1.au(D.f4I,i)
s.restore()
i=A.K()
i.r=a0.gp(0)
a1.au(D.f4W,i)
n=new A.aE(k.r,B.ah,e,e,A.a([],n))
n.D(new A.aY(-9,-66))
n.D(new A.c4(0,-57,9,-66))
n.D(new A.c4(0,-60,-9,-66))
k=A.K()
k.r=d.gp(0)
a1.ae(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cN(D.f54,0.1,2.941592653589793,!1,C.iv(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.a8d
n=25*q
k=23*q
i=9*q
C.htG(a1,new A.q(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.E4:o
C.htG(a1,new A.q(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.elV,D.elR,C.iv(D.aiQ,4))
a1.ah(D.elT,D.elP,C.iv(D.G8.j(0.7),1.4))
u=A.K()
u.r=B.cN.gp(0)
a1.N(D.elS,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.bq(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.iq(0,a3.f)
a1.bV(0,r)
C.i4w(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
htG(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aK(0,e),r=s.gcF(),q=r===0?B.ih:s.eW(0,r),p=B.k.F(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.q(o,w)
if(o*i<0)v=new A.q(-o,-w)
u=e.a7(0,q.aO(0,n)).a7(0,v.aO(0,m))
t=e.a7(0,q.aO(0,p))
d.ah(e,u,C.iv(j,l))
o=A.ar(j,B.w,0.2)
o.toString
d.ah(e,u,C.iv(o,l*0.35))
d.ah(u,t,C.iv(k,l*0.78))
o=A.ar(k,B.w,0.22)
o.toString
d.ah(u,t,C.iv(o,l*0.22))
$.S()
o=A.K()
o.r=j.gp(0)
d.N(u,l*0.55,o)
o=A.bJ(t,l*1.15,l)
w=A.K()
w.r=k.gp(0)
d.bY(o,w)
w=-l
w=t.a7(0,new A.q(i*w*0.45,w*0.1))
o=A.K()
o.r=k.gp(0)
d.N(w,l*0.28,o)},
i4w(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bJ(B.vj,40,38)
$.S()
v=A.K()
v.r=c0.gp(0)
c2.bY(w,v)}if(c1===4){$.S()
w=A.K()
w.r=c0.gp(0)
c2.N(D.enP,9.5,w)
w=A.K()
w.r=c0.gp(0)
c2.N(D.ekJ,9.5,w)}w=A.bJ(D.ep2,10,6)
v=$.S()
u=A.K()
u.r=c8.gp(0)
c2.bY(w,u)
u=A.bJ(D.eng,10,6)
w=A.K()
w.r=c8.gp(0)
c2.bY(u,w)
v=v.r
w=x.v
t=new A.aE(v,B.ah,b9,b9,A.a([],w))
t.D(new A.aY(0,-20))
t.D(new A.kP(13,-20,17,-9,16,2))
t.D(new A.kP(15,13,8,20,0,20))
t.D(new A.kP(-8,20,-15,13,-16,2))
t.D(new A.kP(-17,-9,-13,-20,0,-20))
t.D(new A.bt())
u=A.K()
u.sar(A.w3(D.eov,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.ae(t,u)
u=c3.r
if(u){s=C.iv(c8.j(0.5),0.8)
c2.cN(D.f6b,3.455751918948773,2.5132741228718345,!1,s)
c2.cN(D.f4P,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.enM,D.enA,s)
c2.ah(D.ekF,D.ekw,s)
c2.cN(D.f53,2.2,1.4,!1,s)
c2.cN(D.f4N,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ao(B.Q,B.N,B.T,B.U,B.S)
n.r=c0.gp(0)
c2.N(new A.q(p*14.5,-3+o*17.5),4.3,n)}p=A.K()
p.r=c0.gp(0)
c2.cN(D.f5h,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aE(v,B.ah,b9,b9,A.a([],w))
p.D(new A.aY(-15,-11))
p.D(new A.c4(0,-30,15,-11))
p.D(new A.aq(13,-6))
p.D(new A.c4(0,-12,-13,-6))
p.D(new A.bt())
o=A.K()
o.r=c3.c.gp(0)
c2.ae(p,o)
c2.ah(D.enB,D.ekx,C.iv(G.nh,1.4))
o=A.K()
o.r=c0.gp(0)
c2.N(D.enS,3,o)
o=A.K()
o.r=c0.gp(0)
c2.N(D.ekK,3,o)
o=new A.aE(v,B.ah,b9,b9,A.a([],w))
o.D(new A.aY(-13,6))
o.D(new A.c4(-12,22,0,26))
o.D(new A.c4(12,22,13,6))
o.D(new A.c4(8,13,0,12))
o.D(new A.c4(-8,13,-13,6))
o.D(new A.bt())
p=A.K()
p.r=B.iB.gp(0)
c2.ae(o,p)
p=new A.aE(v,B.ah,b9,b9,A.a([],w))
p.D(new A.aY(-7,8))
p.D(new A.c4(0,6,7,8))
p.D(new A.c4(0,10.5,-7,8))
o=A.K()
o.r=B.bP.gp(0)
c2.ae(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aE(v,B.ah,b9,b9,A.a([],w))
p.D(new A.aY(-17,-4))
p.D(new A.c4(-20,-27,0,-29))
p.D(new A.c4(20,-27,17,-4))
p.D(new A.c4(0,-14,-17,-4))
p.D(new A.bt())
o=A.K()
o.r=m.gp(0)
c2.ae(p,o)
o=A.ar(m,B.w,0.3)
o.toString
c2.cN(D.f5o,3.4,2.5,!1,C.iv(o,1.4))
o=A.ar(m,B.c,0.3)
o.toString
c2.cN(D.f5b,3.6,2.2,!1,C.iv(o,1.2))
o=new A.aE(v,B.ah,b9,b9,A.a([],w))
o.D(new A.aY(11,-22))
o.D(new A.c4(27,-34,25,-19))
o.D(new A.c4(18,-18,11,-22))
p=A.ar(m,B.c,0.1)
p.toString
n=A.K()
n.r=p.gp(0)
c2.ae(o,n)
n=new A.aE(v,B.ah,b9,b9,A.a([],w))
n.D(new A.aY(11,-22))
n.D(new A.c4(24,-12,27,-26))
n.D(new A.c4(18,-22,11,-22))
o=A.ar(m,B.w,0.2)
o.toString
p=A.K()
p.r=o.gp(0)
c2.ae(n,p)
p=A.K()
p.r=c3.c.gp(0)
c2.N(D.eky,3,p)
break
case 3:p=A.K()
p.r=c0.gp(0)
c2.cN(D.f5l,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ar(c0,B.c,0.18)
p.toString
o=new A.ao(B.Q,B.N,B.T,B.U,B.S)
o.b=B.aa
o.c=0.9
o.r=p.gp(0)
o.d=B.bA
o.e=B.dS
c2.ah(new A.q(r*3.6,-19+Math.abs(r)*0.8),new A.q(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=D.dpJ[l]
o=new A.ao(B.Q,B.N,B.T,B.U,B.S)
o.b=B.aa
o.c=4.5
o.r=c0.gp(0)
o.d=B.bA
o.e=B.dS
c2.ah(new A.q(k,0),new A.q(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ao(B.Q,B.N,B.T,B.U,B.S)
o.r=p.gp(0)
c2.N(new A.q(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.K()
p.r=c0.gp(0)
c2.cN(D.f5k,3.204424506661589,3.015928947446201,!0,p)
p=A.ar(c0,B.c,0.25)
p.toString
c2.ah(I.a83,I.a82,C.iv(p,1))
break
default:p=A.K()
p.r=c0.gp(0)
c2.cN(D.f4Q,3.267256359733385,2.8902652413026098,!0,p)}i=B.k.F(c4.b,0,1)*0.4+0.1
p=A.bJ(D.eoP,5,8)
o=D.afe.j(i)
n=A.K()
n.r=o.gp(0)
c2.bY(p,n)
n=A.bJ(D.ens,5,8)
p=D.afe.j(i)
o=A.K()
o.r=p.gp(0)
c2.bY(n,o)
h=c4.e*2.4
o=new A.aE(v,B.ah,b9,b9,A.a([],w))
o.D(new A.aY(h-0.6,-2))
o.D(new A.c4(h-3.4,6,h-2.6,7.4))
o.D(new A.c4(h,8.8,h+2.6,7.4))
c2.ae(o,C.iv(c8.j(0.75),1.1))
o=A.K()
o.r=c8.gp(0)
c2.N(new A.q(h-1.5,7.2),0.7,o)
o=A.K()
o.r=c8.gp(0)
c2.N(new A.q(h+1.5,7.2),0.7,o)
g=B.k.E(c5*0.33+c6*0.37,1)>0.965?1:0
p=c4.d
o=c4.c>0.8?1.25:1
f=(1-g)*(1-p*0.6)*o
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=F.hg[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.bJ(new A.q(a5,-3),a3,7)
a6=new A.ao(B.Q,B.N,B.T,B.U,B.S)
a6.r=B.c.j(0.96).gp(0)
c2.bY(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.bq(d.save())
a6=A.a([],w)
a4=new A.aE(v,B.ah,b9,b9,a6)
a6.push(new A.jN(A.bJ(new A.q(a5,-3),a3,7)))
a4.a8()
a3=a4.e
if(a3==null)a3=a4.e=new A.E_(a4.glU().a.snapshot())
d.clipPath(a3.a,$.nJ(),!0)
a3=new A.ao(B.Q,B.N,B.T,B.U,B.S)
a3.r=D.bj3.gp(0)
c2.N(new A.q(a7,a8),2.1,a3)
a3=new A.ao(B.Q,B.N,B.T,B.U,B.S)
a3.r=B.w.gp(0)
c2.N(new A.q(a7,a8),1.05,a3)
a3=new A.ao(B.Q,B.N,B.T,B.U,B.S)
a3.r=B.c.gp(0)
c2.N(new A.q(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.YW:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ao(B.Q,B.N,B.T,B.U,B.S)
a9.b=B.aa
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bA
a9.e=B.dS
a3=p?0.8:0
c2.cN(A.bJ(new A.q(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.e5
else{b1=A.ar(c0,B.w,0.2)
b1.toString}b2=new A.ao(B.Q,B.N,B.T,B.U,B.S)
b2.b=B.aa
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bA
b2.e=B.dS
c2.ah(new A.q(a5-a4,b0-a6+0.4),new A.q(a5+a4,b0-0.6-a3),b2)}b3=B.k.F(c4.a,0,1)
if(o)b4=D.bsT
else{u=A.ar(c8,D.bmB,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.k.F(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aE(v,B.ah,b9,b9,A.a([],w))
w=-b6
b8.D(new A.aY(w,11.5))
b8.D(new A.c4(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.D(new A.c4(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.D(new A.bt())
v=A.K()
v.r=D.blV.gp(0)
c2.ae(b8,v)
J.bq(d.save())
c2.mP(0,b8)
v=B.c.j(0.95)
u=A.K()
u.r=v.gp(0)
c2.au(new A.a2(w,11,w+b6*2,13.2),u)
u=A.bJ(new A.q(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.K()
w.r=D.bsY.gp(0)
c2.bY(u,w)
d.restore()
c2.ae(b8,C.iv(b4,1.1))}else{u=new A.aE(v,B.ah,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.D(new A.aY(-5.2,p))
u.D(new A.c4(0,13.1+b5*2.8,5.2,p))
c2.ae(u,C.iv(b4,1.5))
if(b5>0.6){w=new A.aE(v,B.ah,b9,b9,A.a([],w))
w.D(new A.aY(-4.6,11.8))
w.D(new A.c4(0,15.1+b5*1.4,4.6,11.8))
w.D(new A.c4(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.K()
u.r=v.gp(0)
c2.ae(w,u)}}if(c4.b>0.2){c2.cN(D.f52,-1.2,2.2,!1,C.iv(c8.j(0.5),0.8))
c2.cN(D.f4S,2.141592653589793,2.2,!1,C.iv(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.K()
w.r=c1.gp(0)
c2.N(D.en9,1.7,w)
w=A.K()
w.r=c1.gp(0)
c2.N(D.en5,1.7,w)}},
ia2(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.S(),f=new A.pW(new A.pv()),e=A.zl(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.K()
a2.sar(A.jv(B.I,new A.q(0,a0*0.46),D.d8u,D.d04,B.x,h))
e.au(new A.a2(0,0,0+d,0+a0),a2)
a2=e.c
J.bq(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bV(0,a1)
w=new A.e4()
w.d_(8)
for(v=0;v<120;++v){d=w.aj()
a0=w.aj()
u=w.aj()
t=new A.ao(B.Q,B.N,B.T,B.U,B.S)
t.r=B.c.j(0.2+w.aj()*0.5).gp(0)
e.N(new A.q(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.bq(a2.save())
a2.translate(200,120)
e.iq(0,-0.5)
d=A.K()
a0=x.O
d.sar(A.w3(B.I,230,A.a([D.bhP,B.L],a0),h,B.x,h,h,0))
e.bY(D.f5y,d)
a2.restore()
d=A.K()
d.sar(A.w3(D.a8c,58,A.a([D.bkZ,B.L],a0),h,B.x,h,h,0))
e.N(D.a8c,58,d)
d=A.K()
d.r=D.bgw.gp(0)
e.N(D.a8c,24,d)
d=A.K()
d.r=D.Zj.gp(0)
e.N(D.elu,5,d)
d=A.K()
d.r=D.Zj.gp(0)
e.N(D.ely,3.4,d)
d=A.K()
d.r=D.Zj.gp(0)
e.N(D.elx,2.4,d)
for(d=x.v,s=0;s<3;++s,g=u){u=A.a([],d)
r=new A.aE(g.r,B.ah,h,h,u)
u.push(new A.aY(-60,420))
r.a8()
for(g=372+s*12,t=60+s*20,q=s*2,p=14-s*3,o=-60;o<=510;o+=8){n=new A.aq(o,g+Math.sin(o/t+q)*p+Math.sin(o/23+s)*3)
u.push(n)
m=r.f
if(m!=null)n.ai(m)
r.a8()}g=new A.aq(510,470)
u.push(g)
t=r.f
if(t!=null)g.ai(t)
r.a8()
g=new A.aq(-60,470)
u.push(g)
t=r.f
if(t!=null)g.ai(t)
r.a8()
g=new A.bt()
u.push(g)
u=r.f
if(u!=null)g.ai(u)
r.a8()
g=[D.bf6,D.bh5,D.bmU][s]
u=$.S()
t=new A.ao(B.Q,B.N,B.T,B.U,B.S)
t.r=g.gp(0)
e.ae(r,t)}for(l=0;l<4;++l){o=D.cv2[l]
k=384+B.o.E(o,11)
g=o-2
d=k-24
u=new A.ao(B.Q,B.N,B.T,B.U,B.S)
u.b=B.aa
u.c=2.4
u.r=D.ZB.gp(0)
u.d=B.bA
u.e=B.dS
e.ah(new A.q(o,k),new A.q(g,d),u)
g=A.bJ(new A.q(g,k-27),11,46)
u=new A.ao(B.Q,B.N,B.T,B.U,B.S)
u.r=D.ZB.gp(0)
e.bY(g,u)
d=A.bJ(new A.q(o-12,d),8,24)
u=new A.ao(B.Q,B.N,B.T,B.U,B.S)
u.r=D.ZB.gp(0)
e.bY(d,u)}for(v=0;v<9;++v){g=B.o.E(v,3)
d=B.o.E(v,4)
u=new A.ao(B.Q,B.N,B.T,B.U,B.S)
u.r=D.bgz.j(0.8).gp(0)
e.N(new A.q(20+v*52+g*7,400+d*5),1.2,u)}g=A.K()
g.sar(A.jv(D.ek1,D.ek3,D.d1Z,B.Dp,B.x,h))
e.au(new A.a2(-200,412,650,1300),g)
j=new A.e4()
j.d_(21)
for(v=0;v<260;++v){g=j.aj()
k=420+j.aj()*480
d=j.aj()
u=k/900+0.4
u=A.bJ(new A.q(g*450,k),1+j.aj()*2*u,1.5+d*4*u)
g=j.h8()?B.c:B.w
d=new A.ao(B.Q,B.N,B.T,B.U,B.S)
d.r=g.j(0.06+j.aj()*0.06).gp(0)
e.bY(u,d)}J.bq(a2.save())
a2.translate(225,590)
e.pe(0,1,0.34)
g=A.K()
g.sar(A.w3(B.I,250,A.a([D.bnN,D.bhr,D.bpE],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.N(B.I,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.aj()*450
k=640+j.aj()*260
g=j.aj()
d=A.ar(D.ahz,D.bg3,j.aj())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.S()
a0=new A.ao(B.Q,B.N,B.T,B.U,B.S)
a0.b=B.aa
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bA
a0.e=B.dS
e.ah(new A.q(o+i*2,k),new A.q(o+i*5,g+Math.abs(i)*3),a0)}}C.i2N(e)
for(l=0;l<3;++l)C.i60(e,D.azI[l])
C.i5Q(e,D.elo)
for(o=118;o<190;o+=11){g=B.o.E(o,3)
d=B.o.E(o,4)
$.S()
a0=new A.ao(B.Q,B.N,B.T,B.U,B.S)
a0.b=B.aa
a0.c=2.4
a0.r=D.Zx.gp(0)
a0.d=B.bA
a0.e=B.dS
e.ah(new A.q(o,452+g),new A.q(o+1,436+d),a0)}e.ah(D.eku,D.ekO,C.iv(D.bgN,1.6))
a2.restore()
return f.nZ()},
i2N(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.S().r,g=x.v,f=new A.aE(h,B.ah,i,i,A.a([],g))
f.D(new A.aY(358,462))
f.D(new A.kP(354,422,370,382,374,332))
f.D(new A.aq(410,332))
f.D(new A.kP(416,382,432,422,428,462))
f.D(new A.bt())
w=A.K()
w.sar(A.jv(new A.q(354,0),new A.q(430,0),D.dvS,U.zJ,B.x,i))
d.ae(f,w)
v=new A.e4()
v.d_(4)
for(u=0;u<30;++u){t=364+v.aj()*56
s=462-v.aj()*126
w=v.aj()
r=v.aj()
q=B.w.j(0.18)
p=new A.ao(B.Q,B.N,B.T,B.U,B.S)
p.b=B.aa
p.c=1.1
p.r=q.gp(0)
p.d=B.bA
p.e=B.dS
d.ah(new A.q(t,s),new A.q(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.dd1[o]
w=n.a
r=392+w*12
q=-n.b
p=r+w*52
m=336+(q*46-8)
w=p+w*42
q=m+(q*34+4)
l=A.a([],g)
k=new A.aE(h,B.ah,i,i,l)
l.push(new A.aY(r,336))
k.a8()
r=new A.c4(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.ai(p)
k.a8()
r=new A.ao(B.Q,B.N,B.T,B.U,B.S)
r.b=B.aa
r.c=8
r.r=D.afX.gp(0)
r.d=B.bA
r.e=B.dS
d.ae(k,r)
for(j=0;j<6;++j){r=v.aj()
p=v.aj()
m=v.aj()
l=new A.ao(B.Q,B.N,B.T,B.U,B.S)
l.r=A.ar(D.bgF,D.bmT,v.aj()).j(0.92).gp(0)
d.N(new A.q(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ao(B.Q,B.N,B.T,B.U,B.S)
r.b=B.aa
r.c=1.2
r.r=D.Zx.gp(0)
r.d=B.bA
r.e=B.dS
d.ah(new A.q(w,q+8),new A.q(w,q+22),r)
q=A.bJ(new A.q(w,q+28),13,7)
w=new A.ao(B.Q,B.N,B.T,B.U,B.S)
w.r=D.bo5.gp(0)
d.bY(q,w)}},
i60(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bJ(new A.q(a5,a6+2),a9,a7*2.8),b1=B.w.j(0.3),b2=$.S(),b3=A.K()
b3.r=b1.gp(0)
b4.bY(b0,b3)
b2=b2.r
b3=x.v
w=new A.aE(b2,B.ah,a4,a4,A.a([],b3))
b0=a5-a7
b1=a6-a8
w.D(new A.aY(b0,b1))
w.D(new A.aq(b0,a6))
v=a5+a7
w.D(new A.c4(a5,a6+a7*0.22,v,a6))
w.D(new A.aq(v,b1))
w.D(new A.bt())
u=A.K()
u.sar(A.jv(new A.q(b0,0),new A.q(v,0),D.dd7,U.zJ,B.x,a4))
b4.ae(w,u)
t=new A.e4()
t.d_(B.o.V(a5*7))
v=b4.c
J.bq(v.save())
b4.mP(0,w)
for(s=0;s<40;++s){r=b0+t.aj()*a7*2
q=b1+t.aj()*a8
u=t.aj()
p=t.aj()
o=B.w.j(0.14)
n=new A.ao(B.Q,B.N,B.T,B.U,B.S)
n.b=B.aa
n.c=1
n.r=o.gp(0)
n.d=B.bA
n.e=B.dS
b4.ah(new A.q(r,q),new A.q(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.ahu.j(0.75)
n=A.K()
n.r=o.gp(0)
b4.au(new A.a2(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.k.bh(u);++l){k=m+l*10
j=A.a([],b3)
i=new A.aE(b2,B.ah,a4,a4,j)
j.push(new A.aY(k,o))
i.a8()
h=new A.aq(k+5,n)
j.push(h)
g=i.f
if(g!=null)h.ai(g)
i.a8()
h=new A.aq(k+10,o)
j.push(h)
g=i.f
if(g!=null)h.ai(g)
i.a8()
h=new A.bt()
j.push(h)
j=i.f
if(j!=null)h.ai(j)
i.a8()
j=new A.ao(B.Q,B.N,B.T,B.U,B.S)
j.r=D.lB.j(0.85).gp(0)
b4.ae(i,j)}u=A.a([],b3)
f=new A.aE(b2,B.ah,a4,a4,u)
b2=a6-8
f.D(new A.aY(b0,b2))
for(p/=6,l=0;l<=B.k.bh(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.ai(n)
f.a8()}b4.ae(f,C.iv(D.ahu.j(0.7),1.6))
v.restore()
b0=$.S().r
b2=new A.aE(b0,B.ah,a4,a4,A.a([],b3))
u=a7*0.1
p=a5+u
o=a7*0.28
n=p-o
m=a6+1
b2.D(new A.aY(n,m))
j=a6-a8*0.55
b2.D(new A.aq(n,j))
o=p+o
b2.D(new A.c4(p,a6-a8*0.82,o,j))
b2.D(new A.aq(o,m))
b2.D(new A.bt())
m=A.K()
m.r=D.ahG.gp(0)
b4.ae(b2,m)
m=A.K()
m.r=D.ahG.gp(0)
b4.N(new A.q(a5-a7*0.62,a6-a8*0.5),u,m)
m=b5.e
u=b1-m
b2=a7*1.38
o=a5-b2
j=b1+4
p=a5+b2
e=new A.aE(b0,B.ah,a4,a4,A.a([],b3))
e.D(new A.aY(o,j))
n=b1-m*0.55
e.D(new A.c4(a5-a9,n,a5,u))
e.D(new A.c4(a5+a9,n,p,j))
e.D(new A.c4(a5,b1+a7*0.34,o,j))
e.D(new A.bt())
b1=A.K()
n=a7*1.4
b1.sar(A.jv(new A.q(a5-n,0),new A.q(a5+n,0),D.dgz,U.zJ,B.x,a4))
b4.ae(e,b1)
J.bq(v.save())
b4.mP(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.aj()
n=(t.h8()?B.w:D.bgc).j(0.16)
i=new A.ao(B.Q,B.N,B.T,B.U,B.S)
i.b=B.aa
i.c=0.9
i.r=n.gp(0)
i.d=B.bA
i.e=B.dS
b4.ah(new A.q(a5+(p-0.5)*3,u),new A.q(o+a9*d,j+b1*a7*0.3),i)}for(l=1;l<5;++l){a0=u+m*l/4.6
a1=b2*l/4.6
b1=A.a([],b3)
p=new A.aE(b0,B.ah,a4,a4,b1)
n=a0+2
b1.push(new A.aY(a5-a1,n))
p.a8()
n=new A.c4(a5,a0+7+l*1.5,a5+a1,n)
b1.push(n)
b1=p.f
if(b1!=null)n.ai(b1)
p.a8()
b1=B.w.j(0.22)
n=new A.ao(B.Q,B.N,B.T,B.U,B.S)
n.b=B.aa
n.c=1.2
n.r=b1.gp(0)
n.d=B.bA
n.e=B.dS
b4.ae(p,n)}v.restore()
for(s=0;s<46;++s){d=s/45
a2=o+a9*d
a3=j+Math.sin(d*3.141592653589793)*a7*0.3
b1=t.aj()
b2=t.aj()
v=new A.ao(B.Q,B.N,B.T,B.U,B.S)
v.b=B.aa
v.c=1.1
v.r=D.bng.gp(0)
v.d=B.bA
v.e=B.dS
b4.ah(new A.q(a2,a3),new A.q(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aE(b0,B.ah,a4,a4,A.a([],b3))
b0=u+4
a9.D(new A.aY(a5-2.5,b0))
a9.D(new A.aq(a5,u-7))
a9.D(new A.aq(a5+2.5,b0))
a9.D(new A.bt())
b0=A.K()
b0.r=D.bjy.gp(0)
b4.ae(a9,b0)},
i5Q(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+D.dpG[s]
$.S()
q=new A.ao(B.Q,B.N,B.T,B.U,B.S)
q.b=B.aa
q.c=3
q.r=D.Zx.gp(0)
q.d=B.bA
q.e=B.dS
d.ah(new A.q(r,u),new A.q(r,t),q)}u=A.bJ(e.a7(0,I.aL_),24,36)
t=$.S()
r=A.K()
r.r=D.bs8.gp(0)
d.bY(u,r)
t=new A.aE(t.r,B.ah,null,null,A.a([],x.v))
r=w-24
u=v-30
t.D(new A.aY(r,u))
t.D(new A.aq(w,v-54))
t.D(new A.aq(w+24,u))
t.D(new A.c4(w,v-24,r,u))
t.D(new A.bt())
u=A.K()
u.r=D.agB.gp(0)
d.ae(t,u)},
i5a(d){switch(B.o.E(d,8)){case 0:return D.b_L
case 1:return D.b_J
case 2:return D.b_I
case 3:return D.b_H
case 4:return D.b_K
case 5:return D.b_M
case 6:return D.huO
default:return D.huN}},
Sl(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.boD()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a8d:j
w.as=k==null?D.E4:k
C.hxp(d,e,p,C.i5a(m),w,s,m,l)},
hyS(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bSA:function bSA(){var _=this
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
ta:function ta(d,e,f,g,h,i,j,k,l,m){var _=this
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
boD:function boD(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
alS:function alS(){this.b=this.a=null},
aW9:function aW9(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bSs:function bSs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSt:function bSt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSu:function bSu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSv:function bSv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSw:function bSw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSx:function bSx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSy:function bSy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSz:function bSz(){},
bSr:function bSr(d){this.a=d},
afD:function afD(d,e){this.a=d
this.b=e},
adC:function adC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
MT(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bRb(s)
s.bB6(d)
return s},
GT(d,e,f,g,h,i,j){var w,v=A.T(g).k("X<1>")
v=A.d4(new A.X(g,new C.fsQ(f),v),v.k("M.E"))
w=A.C(v,A.a4(v).k("co.E"))
B.d.e0(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.v(v,A.cW(w,0,A.dA(3,"count",x.S),A.T(w).c))
B.d.e0(v,d)
return new C.lo(e,v,B.d.cp(v,f),h,i,"tree",j)},
iqp(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.U(c0,x.cg),c2=new C.h2h(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.jw(c4,c0)
t=A.C(c4,A.a4(c4).k("co.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.jw(c4,c0)
r=A.C(c4,A.a4(c4).k("co.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.jw(c4,c0)
q=A.C(c4,A.a4(c4).k("co.E"))
for(c4=w.length,v=A.T(t).k("X<1>"),s=v.k("M.E"),p=A.T(w).k("X<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.J)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.c()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.wm)g="father"
else g=h===D.op?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.X(t,new C.h2j(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.GT(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.X(w,new C.h2k(i,m),p),o)
B.d.e0(d,c6)
c2.$2(b4,new C.lo("True or false: "+h+" is the "+g+" of "+l+".",D.aAL,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lo("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",D.aAL,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.G3(m)
h=a0.length
if(h!==0){a1=a0[c6.aw(h)]
h=B.a.i(a1.b)
f=A.C(new A.X(t,new C.h2l(l,a0,c5),v),s)
e=a1.c
if(e===D.wm)e="son"
else e=e===D.op?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.GT(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.ey([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.ms(a5,a5.r,f.k("ms<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.GT(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.T(a0),a2=e.k("it<1>"),a3=new A.it(a0,1,b3,a2),a3.n4(a0,1,b3,e.c),a3=new A.bO(a3,a3.gJ(0),a2.k("bO<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.GT(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.ar9(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.X(t,new C.h2m(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.GT(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.c()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.c()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.C(new A.X(t,new C.h2n(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.wm
if(e)a2=b7
else a2=f===D.op?b8:b9
if(e)f=b7
else f=f===D.op?b8:b9
c2.$2("grand",C.GT(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aMH(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.aw(k)].b)
j=A.C(new A.X(t,new C.h2o(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.GT(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.v(j,D.cNG)
h=l+" was born in "+k
c2.$2("place",C.GT(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.v(j,D.d31)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.GT(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.J)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.GT(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cB(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.jL(b1,b3,b3)
c2.$2("year",C.GT(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bDH(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.MT(d),l=new A.e4()
l.d_(f)
w=C.iqp(m,l,g)
for(v=new A.dq(w,w.r,w.e);v.C();)J.hhl(v.d,l)
v=A.a4(w).k("cx<1>")
u=A.C(new A.cx(w,v),v.k("M.E"))
B.d.e0(u,l)
t=A.a([],x.J)
s=A.aS(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aX(u,new C.fFU(n,w))))break
for(v=u.length,r=0;r<u.length;u.length===v||(0,A.J)(u),++r){q=u[r]
if(t.length>=e)break
p=w.h(0,q)
p.toString
if(J.ad(p)>n.a){p=w.h(0,q)
p.toString
p=s.I(0,J.t(p,n.a).a)}else p=!1
if(p){p=w.h(0,q)
p.toString
t.push(J.t(p,n.a))}}++n.a}v=t.length
if(v<e){v=A.C(D.ayJ,x.df)
B.d.e0(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.J)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hxw(o,l))}}else if(!g&&v>3){o=C.hxw(D.ayJ[l.aw(14)],l)
t[t.length-1-l.aw(3)]=o}return t},
hxw(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.e0(w,e)
return new C.lo(d.a,w,B.d.cp(w,v),d.d,d.e,d.f,d.r)},
hCq(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.MT(a2),a1=new A.e4()
a1.d_(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
if(a0.G3(q).length>=2)u.push(q)}B.d.e0(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.J)(u),++r){n=u[r]
m=a0.G3(n)
l=A.T(m)
k=new A.it(m,0,5,l.k("it<1>"))
k.n4(m,0,5,l.c)
j=k.dm(0)
if(new A.N(j,new C.fU6(),A.T(j).k("N<1,F>")).fL(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.J)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.J)(j),++i)g.push(C.aRR(a0,j[i]))
w.push(new C.atT("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.U(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
J.c8(e.c3(0,a0.amm(q),new C.fU7()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cx<1>")
d=A.C(new A.cx(e,t),t.k("M.E"))
B.d.fh(d)
v=A.a([],v)
for(u=A.cW(d,0,A.dA(5,"count",u),A.T(d).c),t=u.$ti,u=new A.bO(u,u.gJ(0),t.k("bO<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cC(s)
m.e0(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.J)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.J)(v),++r)s.push(C.aRR(a0,v[r]))
w.push(new C.atT("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aQk(d){return B.d.anO(D.aBf,new C.fBY(d))},
igA(d){return A.nv(new A.X(D.aBf,new C.fIH(d),x.av))},
bS_(d){return C.hM5(d)},
hM5(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bS_=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bS_)
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
return A.i($async$bS_,v)},
BL(d,e){return C.hM2(d,e)},
hM2(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$BL=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$BL)
case 7:r=g
p=B.a.i(d)
o=A.eo(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aB("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$BL)
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
return A.i($async$BL,v)},
bRZ(d,e,f){return C.hM3(d,e,f)},
hM3(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bRZ=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bRZ)
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
return A.i($async$bRZ,v)},
BM(d,e,f,g){return C.hM4(d,e,f,g)},
hM4(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$BM=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$BM)
case 7:r=i
p=B.a.i(d)
o=A.eo(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aB("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$BM)
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
return A.i($async$BM,v)},
bFV(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
h4j(d,e,f,g){return new C.aku(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hK9(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aX(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cx)
while(u.C())w.push(J.k(u.gR(u)))
u=x.N
w=A.cW(w,0,A.dA(4,"count",x.S),u).dm(0)
B.d.v(w,A.bZ(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aK(d.h(0,"c"))
v=v==null?null:B.k.M(v)
v=B.o.F(v==null?0:v,0,3)
u=A.aK(d.h(0,"s"))
u=u==null?null:B.k.M(u)
return C.h4j(w,v,B.o.F(u==null?20:u,5,60),t)},
hiv(d){var w,v,u,t,s,r,q=J.a7(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aX(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.cx)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gR(q)
if(u.b(r))v.push(C.hK9(A.a3(r,t,s)))}return new C.MC(p,w,v)},
hcJ(d){var w,v=A.a([],x.c)
for(w=J.aX(d.z);w.C();)v.push(C.hiv(w.gR(w)))
return v},
aRR(d,e){var w=e.c===D.op
if(d.amm(e)===0&&d.G3(e).length!==0)return w?0:1
if(d.G3(e).length!==0||d.ar9(e)!=null)return w?2:3
return w?4:5},
hDx(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.MT(a4),a3=new A.e4()
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
j=i.h(0,k)}h=a2.G3(m)
g=a2.ar9(m)
f=a2.aMH(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cB(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.wm)k="father"
else k=k===D.op?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.wm)k="father"
else k=k===D.op?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e0(l,a3)
B.d.aZ(l,new C.h2H())
d=B.a.i(m.b)
a0=A.C(new A.X(s,new C.h2I(d),o),n)
B.d.e0(a0,a3)
k=A.a([d],t)
i=A.T(a0)
a1=new A.it(a0,0,3,i.k("it<1>"))
a1.n4(a0,0,3,i.c)
B.d.v(k,a1)
B.d.e0(k,a3)
a1=C.aRR(a2,m)
i=new A.it(l,0,4,p)
i.n4(l,0,4,r)
w.push(new C.ba6(d,a1,i.dm(0),k))
if(w.length>=5)break}return w},
hv8(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.a0(d,"My ")?1:0},
hCC(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.MT(a4),a3=new A.e4()
a3.d_(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
if(a2.G3(q).length>=2)u.push(q)}B.d.e0(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.J)(u),++r){l=u[r]
k=a2.G3(l)
j=A.T(k)
i=new A.it(k,0,4,j.k("it<1>"))
i.n4(k,0,4,j.c)
h=i.dm(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.J)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aX(h,new C.fUC(q))&&q.d!==j)i.push(q)}B.d.e0(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.it(i,0,k,m)
j.n4(i,0,k,n)
f=j.dm(0)
j=B.a.i(l.b)
k=C.aRR(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.J)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.J)(h),++g)e.push(C.aRR(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.J)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.J)(f),++g)a0.push(C.aRR(a2,f[g]))
w.push(new C.a9H(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lo:function lo(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bRb:function bRb(d){this.b=d
this.c=$},
bRc:function bRc(){},
bRd:function bRd(d){this.a=d},
fsQ:function fsQ(d){this.a=d},
h2h:function h2h(d){this.a=d},
h2i:function h2i(){},
h2j:function h2j(d){this.a=d},
h2k:function h2k(d,e){this.a=d
this.b=e},
h2l:function h2l(d,e,f){this.a=d
this.b=e
this.c=f},
h2g:function h2g(d,e){this.a=d
this.b=e},
h2m:function h2m(d){this.a=d},
h2n:function h2n(d){this.a=d},
h2o:function h2o(d,e,f){this.a=d
this.b=e
this.c=f},
h2f:function h2f(d,e){this.a=d
this.b=e},
fFU:function fFU(d,e){this.a=d
this.b=e},
atT:function atT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fU6:function fU6(){},
fU7:function fU7(){},
zu:function zu(d,e,f){this.a=d
this.b=e
this.c=f},
fBY:function fBY(d){this.a=d},
fIH:function fIH(d){this.a=d},
aku:function aku(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bM_:function bM_(){},
MC:function MC(d,e,f){this.a=d
this.b=e
this.c=f},
ba6:function ba6(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
h2H:function h2H(){},
h2I:function h2I(d){this.a=d},
a9H:function a9H(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fUC:function fUC(d){this.a=d},
bhm:function bhm(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
afB:function afB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
ajN:function ajN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ajO:function ajO(d,e,f,g,h){var _=this
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
_.aa$=h
_.c=_.a=null},
bKd:function bKd(d){this.a=d},
bK8:function bK8(){},
bKe:function bKe(){},
bK6:function bK6(){},
bK7:function bK7(){},
bKc:function bKc(d){this.a=d},
bK9:function bK9(d,e){this.a=d
this.b=e},
bKb:function bKb(d,e){this.a=d
this.b=e},
bKa:function bKa(d,e){this.a=d
this.b=e},
bK5:function bK5(d){this.a=d},
bcx:function bcx(d,e){this.b=d
this.a=e},
Qv:function Qv(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBb:function aBb(d,e,f){this.b=d
this.c=e
this.a=f},
azG:function azG(d,e,f){this.a=d
this.b=e
this.c=f},
auu:function auu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
auv:function auv(d,e,f){var _=this
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
cpu:function cpu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cpv:function cpv(d){this.a=d},
cpt:function cpt(d){this.a=d},
cpw:function cpw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cpx:function cpx(){},
cpy:function cpy(d,e){this.a=d
this.b=e},
cpz:function cpz(){},
cpA:function cpA(d){this.a=d},
cpq:function cpq(d){this.a=d},
cpr:function cpr(d,e){this.a=d
this.b=e},
cps:function cps(d,e,f){this.a=d
this.b=e
this.c=f},
cpl:function cpl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cpn:function cpn(d,e){this.a=d
this.b=e},
cpo:function cpo(d,e){this.a=d
this.b=e},
cpm:function cpm(d,e){this.a=d
this.b=e},
cpk:function cpk(){},
cpp:function cpp(){},
bc0:function bc0(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cPu:function cPu(){},
ays:function ays(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ayt:function ayt(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cEs:function cEs(d){this.a=d},
cEr:function cEr(d){this.a=d},
cEA:function cEA(d,e){this.a=d
this.b=e},
cEB:function cEB(d,e){this.a=d
this.b=e},
cEC:function cEC(d){this.a=d},
cEz:function cEz(d){this.a=d},
cED:function cED(d){this.a=d},
cEE:function cEE(d,e){this.a=d
this.b=e},
cEF:function cEF(){},
cEG:function cEG(d){this.a=d},
cEu:function cEu(d){this.a=d},
cEv:function cEv(d,e){this.a=d
this.b=e},
cEt:function cEt(d,e){this.a=d
this.b=e},
cEw:function cEw(){},
cEx:function cEx(){},
cEy:function cEy(d,e){this.a=d
this.b=e},
azr:function azr(){},
aGD:function aGD(){},
haw(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.bqY((w-450*u)/2,(v-900*u)/2,u)},
afp:function afp(){},
f5B:function f5B(d){this.a=d},
aKp:function aKp(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
ffK:function ffK(d){this.a=d},
alI:function alI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alJ:function alJ(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.q4$=f
_.LP$=g
_.amT$=h
_.bx$=i
_.aa$=j
_.c=_.a=null},
bRY:function bRY(d){this.a=d},
bRX:function bRX(){},
bRV:function bRV(d){this.a=d},
bRT:function bRT(){},
bRU:function bRU(d){this.a=d},
bRQ:function bRQ(d,e){this.a=d
this.b=e},
bRR:function bRR(){},
bRS:function bRS(d){this.a=d},
bRW:function bRW(d,e){this.a=d
this.b=e},
bRP:function bRP(d){this.a=d},
bsE:function bsE(d,e){this.b=d
this.a=e},
f5C:function f5C(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f5D:function f5D(d,e,f){this.a=d
this.b=e
this.c=f},
f5E:function f5E(d,e,f){this.a=d
this.b=e
this.c=f},
f5F:function f5F(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f5G:function f5G(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f5H:function f5H(){},
alG:function alG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alH:function alH(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.q4$=f
_.LP$=g
_.amT$=h
_.bx$=i
_.aa$=j
_.c=_.a=null},
bRB:function bRB(){},
bRM:function bRM(d,e){this.a=d
this.b=e},
bRN:function bRN(d){this.a=d},
bRO:function bRO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRI:function bRI(){},
bRH:function bRH(d,e){this.a=d
this.b=e},
bRJ:function bRJ(d,e){this.a=d
this.b=e},
bRK:function bRK(){},
bRL:function bRL(d){this.a=d},
bRD:function bRD(d){this.a=d},
bRE:function bRE(d){this.a=d},
bRF:function bRF(d){this.a=d},
bRC:function bRC(d,e){this.a=d
this.b=e},
bRG:function bRG(d){this.a=d},
bjb:function bjb(d,e){this.b=d
this.a=e},
dqF:function dqF(){},
a1R:function a1R(d,e){this.a=d
this.b=e},
alC:function alC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alD:function alD(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.q4$=e
_.LP$=f
_.amT$=g
_.bx$=h
_.aa$=i
_.c=_.a=null},
bRn:function bRn(d){this.a=d},
bRm:function bRm(){},
bRl:function bRl(){},
bRf:function bRf(){},
bRg:function bRg(){},
bRk:function bRk(d,e,f){this.a=d
this.b=e
this.c=f},
bRj:function bRj(d){this.a=d},
bRh:function bRh(d,e){this.a=d
this.b=e},
bRi:function bRi(d){this.a=d},
biC:function biC(d,e){this.b=d
this.a=e},
aBe:function aBe(){},
bg9:function bg9(){},
aBg:function aBg(){},
bga:function bga(){},
aBh:function aBh(){},
bgb:function bgb(){},
up(d,e,f,g,h){var w,v,u=null,t=A.n(18),s=A.a([],x.V)
s.push(new A.ac(0,B.G,f.j(0.4),B.j7,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.v(v,A.a([A.Y(g,h,u,u,u,20),B.ae],w))
v.push(A.d(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aA(u,A.p(u,A.A(v,B.m,u,B.e,B.O,0,u,u),B.f,u,u,new A.o(f,u,u,t,s,u,B.n),u,u,u,u,B.O9,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hji(d,e,f,g,h,i,j){return new C.alE(i,h,d,j,e,f,g,null)},
a6e:function a6e(d,e){this.c=d
this.a=e},
biJ:function biJ(d){this.a=d},
tA:function tA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bRe:function bRe(d){this.a=d},
Ik:function Ik(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
W4:function W4(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
blt:function blt(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e0u:function e0u(d,e){this.a=d
this.b=e},
e0v:function e0v(d){this.a=d},
e0w:function e0w(d,e){this.a=d
this.b=e},
e0s:function e0s(d){this.a=d},
e0t:function e0t(d){this.a=d},
e0r:function e0r(d){this.a=d},
e0p:function e0p(d){this.a=d},
e0q:function e0q(d){this.a=d},
e0o:function e0o(d,e){this.a=d
this.b=e},
e0x:function e0x(d){this.a=d},
e0y:function e0y(d,e){this.a=d
this.b=e},
e0z:function e0z(d,e){this.a=d
this.b=e},
e0A:function e0A(d,e){this.a=d
this.b=e},
e0D:function e0D(d,e){this.a=d
this.b=e},
e0E:function e0E(d,e){this.a=d
this.b=e},
e0F:function e0F(d,e){this.a=d
this.b=e},
e0G:function e0G(d,e){this.a=d
this.b=e},
e0H:function e0H(d,e){this.a=d
this.b=e},
e0I:function e0I(d,e,f){this.a=d
this.b=e
this.c=f},
e0J:function e0J(d,e){this.a=d
this.b=e},
e0K:function e0K(d,e){this.a=d
this.b=e},
e0B:function e0B(d){this.a=d},
e0C:function e0C(d){this.a=d},
a_J:function a_J(d,e){this.a=d
this.b=e},
alE:function alE(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
alF:function alF(d){var _=this
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
bRz:function bRz(d){this.a=d},
bRA:function bRA(d){this.a=d},
bRy:function bRy(d){this.a=d},
bRp:function bRp(d){this.a=d},
bRq:function bRq(d){this.a=d},
bRo:function bRo(d){this.a=d},
bRv:function bRv(d,e,f){this.a=d
this.b=e
this.c=f},
bRw:function bRw(d){this.a=d},
bRs:function bRs(d,e){this.a=d
this.b=e},
bRt:function bRt(d,e,f){this.a=d
this.b=e
this.c=f},
bRx:function bRx(){},
bRu:function bRu(d,e){this.a=d
this.b=e},
bRr:function bRr(d){this.a=d},
TL:function TL(d,e){this.c=d
this.a=e},
alB:function alB(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bR_:function bR_(d){this.a=d},
bR0:function bR0(d){this.a=d},
bRa:function bRa(){},
bR9:function bR9(d,e,f){this.a=d
this.b=e
this.c=f},
bR4:function bR4(d,e){this.a=d
this.b=e},
bR3:function bR3(d,e){this.a=d
this.b=e},
bR5:function bR5(d){this.a=d},
bR6:function bR6(d,e){this.a=d
this.b=e},
bR7:function bR7(d,e){this.a=d
this.b=e},
bR2:function bR2(d,e){this.a=d
this.b=e},
bR8:function bR8(d,e,f){this.a=d
this.b=e
this.c=f},
bR1:function bR1(d,e){this.a=d
this.b=e},
if1(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.aiD(a6),a5=a4.length
if(a5===0)return""
w=A.U(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.J)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bB(new A.V(Date.now(),0,!1))
s=new C.fFo(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("X<1>"),q=q.k("cM<1,m>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.J)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.yS)m.push(l===D.wm?"male":"female")
l=u.w
k=A.ag(a3,!0,!1,!1,!1).cB(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.ag(a3,!0,!1,!1,!1).cB(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.jL(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jL(h,a2,a2)-A.jL(j,a2,a2))+" years")
l=B.a.i(u.z)
if(l.length!==0)m.push("work: "+l)
f=s.$1(u)
if(f!=null)m.push("married to "+w.h(0,f).b)
e=u.d
if(e!=null&&w.an(0,e)&&e!==f){l=w.h(0,e)
l.toString
d=s.$1(l)
l=w.h(0,e).b
k=d!=null&&d!==u.a?" and "+w.h(0,d).b:""
m.push("child of "+l+k)}a0=A.C(new A.cM(new A.X(a4,new C.fFm(u,f),p),new C.fFn(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aN(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aN(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aA(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
if2(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.aiD(a0),d=e.length
if(d===0)return""
w=x.N
v=A.U(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.J)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fFt(v,e)
q=new C.fFr(v)
p=A.U(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.J)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.n(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.J)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.n(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.J)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.an(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.an(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("b8<2>")
d=A.d4(new A.b8(p,d),d.k("M.E"))
n=A.C(d,A.a4(d).k("co.E"))
B.d.fh(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.J)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gag(e),k=new A.eJ(l,new C.fFs(p,m));k.C();t=f){j=l.gR(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.an(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aN(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
i0d(d,e,f,g){var w,v,u=C.if3(d,e)
if(u<=0||f.length<=u)return new A.af3(!1,D.Dr,f)
if(g.q(0,e.a))return new A.af3(!1,D.Dr,f)
w=A.T(f).c
v=A.cW(f,0,A.dA(u,"count",x.S),w).dm(0)
return new A.af3(!0,A.cW(f,u,null,w).dm(0),v)},
i0e(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.aiD(d3),d2=d1.length
if(d2===0)return D.hrT
w=x.N
v=A.U(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.J)(d1),++u){t=d1[u]
v.c3(0,t.a,new C.dga(t))}s=new C.dgr(v)
d2=x.dy
r=A.U(w,d2)
q=new C.dgj(r)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dgi(r)
l=A.U(w,x.do)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c8(l.c3(0,k,new C.dgb()),o)}h=new C.dgh(s)
g=new C.dgg(l,r)
p=v.$ti.k("b8<2>")
o=p.k("X<M.E>")
f=A.C(new A.X(new A.b8(v,p),new C.dgc(h),o),o.k("M.E"))
e=f.length===0?new A.b8(v,p).gH(0):B.d.gH(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.J)(f),++u){t=f[u]
a0=g.$2(t.a,A.aS(w))
if(a0>d){d=a0
e=t}}a1=A.aS(w)
p=x.S
a2=A.U(w,p)
a3=A.U(w,w)
a4=A.U(w,d2)
d2=x.i
a5=A.U(w,d2)
a6=A.U(w,x.d9)
a7=A.U(w,d2)
a8=A.a([],x.s)
a9=new C.dgp(new C.dgl(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.U(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dq(v,v.r,v.e),j=a2.galS(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.ey([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.I(0,i))break}if(h.$1(b0)&&a2.an(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nv(J.dH(i==null?B.Z:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.U(w,x.dO)
b5=A.a([],x.M)
b6=A.U(w,d2)
b7=new C.dg9(a2,new C.dgq(),b6,a3,b4,v,a4,a5,a6,b5)
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
b4.n(0,b8,new C.Gs(o,new A.q(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.KL(c5.a,new A.q(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cx<1>")
d2=A.C(new A.cx(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.J)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bO(0,new C.dgd(c6,b4))
for(d2=new A.cs(a4,a4.$ti.k("cs<1,2>")).gag(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aX(c7.b);j.C();){i=j.gR(j)
if(b6.an(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.q(d0,b4.h(0,i).b.b))}}for(j=B.d.gag(b5),i=new A.eJ(j,new C.dge(c8));i.C();)o.push(j.gR(0).b)
if(o.length===0)continue
B.d.aZ(o,new C.dgf())
c6.push(new C.aKk(new A.q(c9,b4.h(0,c8).b.b+112),B.I,!1,o))}return new C.bgf(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hyc(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cB(d)
return w==null?null:w.b[1]},
hsn(d,e,f,g,h,i,j,k,l,m,n){return new C.a_W(k,f,j,e,l,n,m,d,g,h,i,null)},
aDe(d,e,f,g,h,i,j){return new C.bk1(i,d,e,f,j,h,g,null)},
aqF:function aqF(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEM:function aEM(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e29:function e29(d){this.a=d},
e28:function e28(d){this.a=d},
e2b:function e2b(d,e){this.a=d
this.b=e},
e2c:function e2c(d,e){this.a=d
this.b=e},
e2d:function e2d(d){this.a=d},
e27:function e27(d,e){this.a=d
this.b=e},
e2a:function e2a(d){this.a=d},
e2f:function e2f(d){this.a=d},
e2e:function e2e(d,e){this.a=d
this.b=e},
aqz:function aqz(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEJ:function aEJ(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e1A:function e1A(d){this.a=d},
e1y:function e1y(d){this.a=d},
e1z:function e1z(d){this.a=d},
e1B:function e1B(d,e){this.a=d
this.b=e},
e1v:function e1v(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e0X:function e0X(d){this.a=d},
e0Y:function e0Y(d,e){this.a=d
this.b=e},
e1e:function e1e(d){this.a=d},
e1c:function e1c(d){this.a=d},
e1d:function e1d(d,e){this.a=d
this.b=e},
e1f:function e1f(d){this.a=d},
e1g:function e1g(d,e){this.a=d
this.b=e},
e1u:function e1u(d,e){this.a=d
this.b=e},
e1b:function e1b(d){this.a=d},
e1a:function e1a(d){this.a=d},
e19:function e19(d,e){this.a=d
this.b=e},
e1r:function e1r(){},
e1s:function e1s(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e1q:function e1q(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e1k:function e1k(d){this.a=d},
e1l:function e1l(d,e,f){this.a=d
this.b=e
this.c=f},
e1j:function e1j(d,e){this.a=d
this.b=e},
e1m:function e1m(d,e){this.a=d
this.b=e},
e1h:function e1h(d,e){this.a=d
this.b=e},
e1i:function e1i(){},
e1n:function e1n(d,e){this.a=d
this.b=e},
e1o:function e1o(d){this.a=d},
e1p:function e1p(d,e){this.a=d
this.b=e},
e1t:function e1t(d,e){this.a=d
this.b=e},
e0L:function e0L(d,e){this.a=d
this.b=e},
e0M:function e0M(d,e){this.a=d
this.b=e},
e1D:function e1D(d,e,f){this.a=d
this.b=e
this.c=f},
e1x:function e1x(d,e,f){this.a=d
this.b=e
this.c=f},
e1w:function e1w(d){this.a=d},
e0N:function e0N(d){this.a=d},
e0O:function e0O(d){this.a=d},
e0P:function e0P(){},
e0Q:function e0Q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e0U:function e0U(d,e){this.a=d
this.b=e},
e0T:function e0T(d,e){this.a=d
this.b=e},
e0S:function e0S(d){this.a=d},
e0V:function e0V(d,e){this.a=d
this.b=e},
e0R:function e0R(d){this.a=d},
e1C:function e1C(d){this.a=d},
e16:function e16(){},
e17:function e17(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e15:function e15(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e11:function e11(d,e,f){this.a=d
this.b=e
this.c=f},
e10:function e10(d,e,f){this.a=d
this.b=e
this.c=f},
e0Z:function e0Z(d,e){this.a=d
this.b=e},
e12:function e12(d){this.a=d},
e13:function e13(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1_:function e1_(d,e){this.a=d
this.b=e},
e14:function e14(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e18:function e18(d,e){this.a=d
this.b=e},
e1K:function e1K(){},
e1L:function e1L(d,e){this.a=d
this.b=e},
e1M:function e1M(d){this.a=d},
e1N:function e1N(d,e){this.a=d
this.b=e},
e1G:function e1G(d){this.a=d},
e1E:function e1E(d,e){this.a=d
this.b=e},
e1H:function e1H(d,e){this.a=d
this.b=e},
e1I:function e1I(d,e){this.a=d
this.b=e},
e1J:function e1J(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e1O:function e1O(d){this.a=d},
e1F:function e1F(d){this.a=d},
e0W:function e0W(d){this.a=d},
bgd:function bgd(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dg7:function dg7(d){this.a=d},
dg6:function dg6(d,e){this.a=d
this.b=e},
dg8:function dg8(d){this.a=d},
dg5:function dg5(d,e){this.a=d
this.b=e},
fFo:function fFo(d,e){this.a=d
this.b=e},
fFp:function fFp(d){this.a=d},
fFq:function fFq(){},
fFm:function fFm(d,e){this.a=d
this.b=e},
fFn:function fFn(){},
fFt:function fFt(d,e){this.a=d
this.b=e},
fFu:function fFu(d){this.a=d},
fFv:function fFv(){},
fFr:function fFr(d){this.a=d},
fFs:function fFs(d,e){this.a=d
this.b=e},
KL:function KL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Gs:function Gs(d,e){this.a=d
this.b=e},
bgf:function bgf(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dga:function dga(d){this.a=d},
dgr:function dgr(d){this.a=d},
dgj:function dgj(d){this.a=d},
dgk:function dgk(){},
dgi:function dgi(d){this.a=d},
dgb:function dgb(){},
dgh:function dgh(d){this.a=d},
dgg:function dgg(d,e){this.a=d
this.b=e},
dgc:function dgc(d){this.a=d},
dgl:function dgl(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dgm:function dgm(d){this.a=d},
dgn:function dgn(d){this.a=d},
dgo:function dgo(){},
dgp:function dgp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dgq:function dgq(){},
dg9:function dg9(d,e,f,g,h,i,j,k,l,m){var _=this
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
dgd:function dgd(d,e){this.a=d
this.b=e},
dge:function dge(d){this.a=d},
dgf:function dgf(){},
aKk:function aKk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bgg:function bgg(d,e){this.b=d
this.a=e},
dgs:function dgs(){},
dgt:function dgt(d){this.a=d},
dgu:function dgu(d){this.a=d},
dgv:function dgv(){},
bk2:function bk2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfi:function bfi(d,e){this.b=d
this.a=e},
by_:function by_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
flk:function flk(d){this.a=d},
bnl:function bnl(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eWu:function eWu(d){this.a=d},
eWt:function eWt(d,e){this.a=d
this.b=e},
a_W:function a_W(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aDc:function aDc(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dwk:function dwk(d,e){this.a=d
this.b=e},
dwj:function dwj(d){this.a=d},
dwh:function dwh(d){this.a=d},
dwi:function dwi(d){this.a=d},
dwt:function dwt(d){this.a=d},
dwu:function dwu(d){this.a=d},
dws:function dws(d,e){this.a=d
this.b=e},
dwv:function dwv(){},
dwy:function dwy(d){this.a=d},
dwr:function dwr(d,e){this.a=d
this.b=e},
dwx:function dwx(){},
dwz:function dwz(d){this.a=d},
dwq:function dwq(d,e){this.a=d
this.b=e},
dwA:function dwA(d){this.a=d},
dwp:function dwp(d){this.a=d},
dwB:function dwB(d){this.a=d},
dwo:function dwo(d){this.a=d},
dwC:function dwC(d){this.a=d},
dwn:function dwn(d){this.a=d},
dwD:function dwD(d){this.a=d},
dwm:function dwm(d){this.a=d},
dwE:function dwE(d){this.a=d},
dwl:function dwl(d,e){this.a=d
this.b=e},
dww:function dww(d){this.a=d},
adY:function adY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bk1:function bk1(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
adX:function adX(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bk0:function bk0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dwF:function dwF(d){this.a=d},
dwG:function dwG(d,e){this.a=d
this.b=e},
aDd:function aDd(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aJm:function aJm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
adZ:function adZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dwP:function dwP(d){this.a=d},
Go:function Go(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hnk(d){var w=d.T,v=x.N
return w.jp(w,new C.cei(),v,v)},
hSE(d){var w=d.bD
if(w>=0)return w
return 5},
hnm(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hnk(d).h(0,v)
if(w==null||w.length===0)return null
return A.bj(w)},
hnl(d,e){var w=C.hnm(d,e)
if(w!=null&&w.cf(new A.V(Date.now(),0,!1)))return!0
return!1},
hSF(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a3(C.hnk(d),w,w)
u=C.hnm(d,e)
t=u!=null&&u.cf(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bR(A.dv(30,0,0,0,0,0).a).ab().af())
d.T=v},
b0M(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b0M=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lv(t,B.Jj),$async$b0M)
case 3:if(l){u=!0
w=1
break}u=A.la(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Jj,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0M,v)},
cei:function cei(){},
hSC(){var w,v=$.oo(),u=J.e2(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.he(u)},
Jf(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Jf=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c6(),$async$Jf)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f3("ngmy_family_tree_backup_codes_v1",null,!1,B.bK),$async$Jf)
case 8:r=e
if(r==null){u=A.U(x.N,x.z)
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
case 7:u=A.U(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Jf,v)},
a7W(d){return C.hSD(d)},
hSD(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a7W=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c6(),$async$a7W)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_family_tree_backup_codes_v1",A.I(["codes",d,"savedAt",new A.V(Date.now(),0,!1).ab().af()],x.N,x.z),!1,!1,B.cK,null),$async$a7W)
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
return A.i($async$a7W,v)},
ceh(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$ceh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Jf(),$async$ceh)
case 3:t=m.jp(f),t=t.gag(t),s=x.f
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
return A.i($async$ceh,v)},
O9(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$O9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.ceh(d),$async$O9)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Jf(),$async$O9)
case 6:s=f
r=J.a7(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dL(A.a3(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).ab().af())
r.n(s,t,o)
w=9
return A.b(C.a7W(s),$async$O9)
case 9:case 8:u=t
w=1
break
case 5:n=C.hSC()
w=10
return A.b(C.Jf(),$async$O9)
case 10:s=f
J.aJ(s,n,A.I(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).ab().af(),"updatedAt",new A.V(Date.now(),0,!1).ab().af()],x.N,x.K))
w=11
return A.b(C.a7W(s),$async$O9)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$O9,v)},
b0L(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b0L=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Jf(),$async$b0L)
case 3:t=f
for(s=J.dm(t),r=s.gdR(t),r=r.dm(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.J)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a7W(t),$async$b0L)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b0L,v)},
a7X(d,e,f){var w=0,v=A.j(x.H),u
var $async$a7X=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.aqE(d,e),$async$a7X)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.O9(d),$async$a7X)
case 7:w=4
break
case 5:w=8
return A.b(C.b0L(d),$async$a7X)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a7X,v)},
aqy(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aqy=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.aqE(f,e),$async$aqy)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c6(),$async$aqy)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Jf(),$async$aqy)
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
return A.i($async$aqy,v)},
b0K(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b0K=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c6(),$async$b0K)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Jf(),$async$b0K)
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
return A.i($async$b0K,v)},
hSG(){var w,v=$.oo(),u=J.e2(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.he(u)},
aqB(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$aqB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c6(),$async$aqB)
case 3:if(!g){u=null
w=1
break}t=C.hSG()
w=4
return A.b(A.W5(),$async$aqB)
case 4:s=g
r=B.dQ.aM(B.Y.az(d.f1(),null))
r=B.cO.gcu().aM(r)
q=e?999:2
J.aJ(s,t,A.I(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).ab().af()],x.N,x.K))
w=5
return A.b(A.a7Y(s),$async$aqB)
case 5:p=e?999:2
u=new A.a16("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqB,v)},
aqA(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aqA=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.W5(),$async$aqA)
case 3:p=a0
o=J.a7(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a7(n)
l=A.aK(m.h(n,"usesRemaining"))
k=l==null?null:B.k.M(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b0K(J.k(l==null?"":l),j),$async$aqA)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.c9.cE(0,B.cG.aM(t))
s=C.hnn(r)}catch(f){q=A.ab(f)
$.am.$1("[family tree qr stash] decode: "+A.w(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dL(A.a3(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).ab().af())
o.n(p,g,l)}w=5
return A.b(A.a7Y(p),$async$aqA)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqA,v)},
hnn(d){var w,v,u,t,s=null
try{w=B.Y.aS(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hSI(A.a3(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
h6u(d){var w=0,v=A.j(x.m),u,t,s
var $async$h6u=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aqA(t[1])
w=1
break}u=null
w=1
break}u=C.hnn(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h6u,v)},
hSI(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.dd(v,x.f)
u=A.cE(u,new C.cek(),u.$ti.k("M.E"),x.k)
t=A.a4(u).k("X<M.E>")
s=A.C(new A.X(u,new C.cel(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bj(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.U(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jp(p),t=t.gag(t),o=x.B;t.C();){n=t.gR(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.dd(l,u)
n=A.cE(n,new C.cem(),n.$ti.k("M.E"),o)
k=A.a4(n).k("X<M.E>")
j=A.C(new A.X(n,new C.cen(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.aqC(h,w,s,r,q)},
aqE(d,e){var w=0,v=A.j(x.y),u,t
var $async$aqE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.O0(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Be(d),$async$aqE)
case 3:u=t.cI(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqE,v)},
cet(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cet=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Be(d),$async$cet)
case 3:t=s.b7(f,new C.ceu(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aZ(t,new C.cev())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cet,v)},
W6(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$W6=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.aqE(e,d),$async$W6)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.O9(e),$async$W6)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Be(e),$async$W6)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.cer(g))
r=A.C(t,t.$ti.k("M.E"))}t=J.a7(r)
if(t.gav(r)){u=null
w=1
break}t=t.dK(r,new C.ces(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.U(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Lw(e,o),$async$W6)
case 14:n=i
if(J.cI(n))q.n(0,o,n)
case 12:r.length===t||(0,A.J)(r),++p
w=11
break
case 13:u=new C.aqC(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$W6,v)},
b0P(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b0P=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.W6(d,e,f,g),$async$b0P)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.H8(A.KH(q.f1(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0P,v)},
b0O(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b0O=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.W6(d,e,f,g),$async$b0O)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.aqB(r,f),$async$b0O)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aHn(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0O,v)},
W7(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$W7=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.h6u(a0),$async$W7)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aqy(g.a,d,e,f,s,r),$async$W7)
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
return A.b(C.bDm(e,j),$async$W7)
case 12:case 11:w=13
return A.b(C.ain(e,j,s),$async$W7)
case 13:h=n.h(0,i)
w=h!=null&&J.cI(h)?14:15
break
case 14:w=16
return A.b(C.Bp(e,i,h),$async$W7)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.J)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.br3(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$W7,v)},
aqC:function aqC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cep:function cep(){},
ceq:function ceq(){},
ceo:function ceo(){},
cek:function cek(){},
cel:function cel(){},
cem:function cem(){},
cen:function cen(){},
ceu:function ceu(){},
cev:function cev(){},
cer:function cer(d){this.a=d},
ces:function ces(d){this.a=d},
hfk(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f2(null,x.H)
return A.hE(d,new C.aqD(w,e,g,i,f,h,null),!0,null,x.H)},
dg4(d,e,f,g,h,i,j,k){return new C.bgc(i,e,k,j,g,f,h,d,null)},
aqD:function aqD(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEL:function aEL(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e1X:function e1X(d){this.a=d},
e1Y:function e1Y(d,e,f){this.a=d
this.b=e
this.c=f},
e21:function e21(d,e){this.a=d
this.b=e},
e22:function e22(d){this.a=d},
e1U:function e1U(d){this.a=d},
e1V:function e1V(d,e){this.a=d
this.b=e},
e1W:function e1W(d,e){this.a=d
this.b=e},
e20:function e20(d){this.a=d},
e2_:function e2_(d,e){this.a=d
this.b=e},
e1Z:function e1Z(){},
e24:function e24(d){this.a=d},
e25:function e25(d,e){this.a=d
this.b=e},
e23:function e23(d,e){this.a=d
this.b=e},
dgw:function dgw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bge:function bge(d,e,f){this.d=d
this.e=e
this.a=f},
add:function add(d,e,f){this.c=d
this.d=e
this.a=f},
bgc:function bgc(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bgh:function bgh(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0f:function a0f(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aEK:function aEK(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e1P:function e1P(d,e){this.a=d
this.b=e},
e1Q:function e1Q(d){this.a=d},
e1R:function e1R(d){this.a=d},
e1S:function e1S(d){this.a=d},
e1T:function e1T(d){this.a=d},
a0g:function a0g(d){this.a=d},
blu:function blu(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e26:function e26(d,e){this.a=d
this.b=e},
b_j(d,e){return new C.b_i(d,e,null)},
b_i:function b_i(d,e,f){this.c=d
this.d=e
this.a=f},
ihw(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b2(d,11)},
ip_(d){return A.bT(B.L,null,new C.fW6(new C.uc(A.R(d).ax.a===B.J)),d,!0,!0,!0,null,!1,!1,x.N)},
hph(d,e){return new C.atH(e,d,null)},
aRK(d,e,f,g,h,i,j){var w=C.ihw(i)
if(w!=null)return A.bx(e,new A.a5(j,f,new C.a71(w,!0,null),null),B.aq)
return N.aR5(e,B.bZ,f,g,h,i,j)},
lS:function lS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a71:function a71(d,e,f){this.c=d
this.d=e
this.a=f},
bla:function bla(d,e){var _=this
_.e=_.d=$
_.cR$=d
_.b9$=e
_.c=_.a=null},
dOp:function dOp(d){this.a=d},
dOq:function dOq(){},
dOr:function dOr(d,e){this.a=d
this.b=e},
bl9:function bl9(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fW6:function fW6(d){this.a=d},
fW5:function fW5(d,e){this.a=d
this.b=e},
fW4:function fW4(d,e){this.a=d
this.b=e},
fW3:function fW3(d,e){this.a=d
this.b=e},
atH:function atH(d,e,f){this.c=d
this.d=e
this.a=f},
cnM:function cnM(d,e){this.a=d
this.b=e},
aMM:function aMM(){},
ioL(d){var w=null
return A.cf(w,w,!0,w,new C.fVu(),d,w,!0,!0,x.e2)},
ipW(d,e,f,g,h){var w=null
return A.cf(w,w,!0,w,new C.h1Z(h,g,f,e),d,w,!0,!0,x.N)},
ioN(d,e){var w=null
return A.cf(w,w,!0,w,new C.fVy(e),d,w,!0,!0,x.dY)},
ioM(d){var w=null
return A.cf(w,w,!0,w,new C.fVx(),d,w,!0,!0,x.c5)},
aUK:function aUK(d,e){this.a=d
this.b=e},
aUJ:function aUJ(d){this.a=d},
aSK:function aSK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fVu:function fVu(){},
h1Z:function h1Z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fVy:function fVy(d){this.a=d},
fVx:function fVx(){},
ZU:function ZU(d,e){this.c=d
this.a=e},
azX:function azX(){var _=this
_.d=$
_.c=_.a=_.e=null},
d7L:function d7L(d){this.a=d},
d7M:function d7M(d){this.a=d},
d7K:function d7K(d,e){this.a=d
this.b=e},
d7N:function d7N(d){this.a=d},
d7O:function d7O(d){this.a=d},
ZT:function ZT(d){this.a=d},
azW:function azW(){this.d=$
this.c=this.a=null},
d7H:function d7H(d){this.a=d},
d7I:function d7I(d){this.a=d},
d7J:function d7J(d){this.a=d},
Zq:function Zq(d){this.a=d},
ayG:function ayG(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cG7:function cG7(){},
cGd:function cGd(d){this.a=d},
cGe:function cGe(d){this.a=d},
cGf:function cGf(d){this.a=d},
cGc:function cGc(){},
cGg:function cGg(d){this.a=d},
cGh:function cGh(d){this.a=d},
cGb:function cGb(){},
cGi:function cGi(d,e){this.a=d
this.b=e},
cGa:function cGa(d,e){this.a=d
this.b=e},
cG8:function cG8(d,e){this.a=d
this.b=e},
cGj:function cGj(d){this.a=d},
cG9:function cG9(){},
cGk:function cGk(d){this.a=d},
a22:function a22(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bxS:function bxS(){this.d=$
this.c=this.a=null},
fkQ:function fkQ(d,e){this.a=d
this.b=e},
fkR:function fkR(d){this.a=d},
fkS:function fkS(d,e){this.a=d
this.b=e},
acg:function acg(d,e){this.a=d
this.b=e},
Gc:function Gc(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bxQ:function bxQ(d,e){var _=this
_.d=$
_.bx$=d
_.aa$=e
_.c=_.a=null},
fkO:function fkO(d,e){this.a=d
this.b=e},
ayz:function ayz(d,e){this.c=d
this.a=e},
bxR:function bxR(d,e){var _=this
_.d=$
_.bx$=d
_.aa$=e
_.c=_.a=null},
fkP:function fkP(d){this.a=d},
bxP:function bxP(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aOS:function aOS(){},
aOT:function aOT(){},
bFl(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bh(u),s=B.o.F(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.p0(B.o.u(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fTU(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.V,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b_(B.o.u(s),2,"0")
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.YO(A.cQ(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aRl(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aRl=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hT().l7(85,1280,B.eN),$async$aRl)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fp(),$async$aRl)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hpg()
w=9
return A.b(C.cnL(q,r),$async$aRl)
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
return A.i($async$aRl,v)},
aRI(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aRI=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.cnI(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gal(g.split(",")):g
p=B.cG.aM(q)
o=960
case 7:if(!(o>=96)){w=8
break}w=9
return A.b(A.H9(p,!0,null,o).df(0,B.h0),$async$aRI)
case 9:n=a1
w=10
return A.b(n.la(),$async$aRI)
case 10:m=a1
w=11
return A.b(m.b.hs(B.he),$async$aRI)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eQ(B.dM.gaU(l))
k="data:image/png;base64,"+B.cO.gcu().aM(i)
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
return A.i($async$aRI,v)},
fTU:function fTU(){},
uc:function uc(d){this.a=d},
atG:function atG(d,e,f){this.c=d
this.d=e
this.a=f},
aGe:function aGe(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eTE:function eTE(d,e){this.a=d
this.b=e},
eTv:function eTv(d){this.a=d},
eTw:function eTw(d){this.a=d},
eTC:function eTC(d,e){this.a=d
this.b=e},
eTB:function eTB(d,e){this.a=d
this.b=e},
eTy:function eTy(d,e){this.a=d
this.b=e},
eTx:function eTx(d,e){this.a=d
this.b=e},
eTz:function eTz(d){this.a=d},
eTA:function eTA(d,e){this.a=d
this.b=e},
eTD:function eTD(d,e){this.a=d
this.b=e},
eTq:function eTq(d,e){this.a=d
this.b=e},
eTu:function eTu(d){this.a=d},
eTt:function eTt(d,e){this.a=d
this.b=e},
eTs:function eTs(d){this.a=d},
eTF:function eTF(d,e){this.a=d
this.b=e},
eTG:function eTG(d,e){this.a=d
this.b=e},
eTr:function eTr(d,e){this.a=d
this.b=e},
hCe(d,e,f){var w="thumbnailPath",v=e.ak()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.I(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).ab().af(),"project",v],x.N,x.z)},
fTV(d,e,f){var w=0,v=A.j(x.N),u
var $async$fTV=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.Y.az(C.hCe(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fTV,v)},
bFn(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bFn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fTV(!0,d,e),$async$bFn)
case 4:w=3
return A.b(r.atE(g,d,e.a),$async$bFn)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dQ.aM(B.Y.az(C.hCe(d,e,null),null))
u="NGMY_WS:"+B.kI.gcu().aM(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFn,v)},
htM(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
heW(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d2(s,"NGMYWSSYNC2|"))return!0
if(J.d2(s,"NGMY_WS:"))return!0
if(J.f0(s,t))return!0
if(J.d2(s,"{"))try{w=B.Y.aS(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
imE(d){var w,v,u,t=C.htM(d)
if(t==null)return null
if(C.heW(t))return t
w=B.a.cp(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b2(t,w))
if(C.heW(v))return v}u=B.a.cp(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b2(t,u))
if(C.heW(v))return v}return null},
heV(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d2(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d2(q,"NGMY_WS:")){v=B.c9.cE(0,B.cG.aM(J.nl(q,8)))
w=t.a(B.Y.aS(0,v,r))}else w=t.a(B.Y.aS(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.h97(A.a3(u,x.N,x.z))
return t}catch(s){return r}},
bFm(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bFm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.atD(t[1]),$async$bFm)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.heV(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.heV(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFm,v)},
heU(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lA(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bET(){var w=0,v=A.j(x.o),u,t
var $async$bET=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Hl(),$async$bET)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.heV(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bET,v)},
hDf(d,e,f,g){return A.bT(B.L,null,new C.h1P(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
h1P:function h1P(d,e,f){this.a=d
this.b=e
this.c=f},
aej:function aej(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eTI:function eTI(d,e){this.a=d
this.b=e},
eTJ:function eTJ(d,e){this.a=d
this.b=e},
eTK:function eTK(d,e){this.a=d
this.b=e},
eTL:function eTL(d,e){this.a=d
this.b=e},
eTH:function eTH(d){this.a=d},
atA:function atA(d,e,f){this.c=d
this.d=e
this.a=f},
bmR:function bmR(){var _=this
_.c=_.a=_.e=_.d=null},
eTl:function eTl(d,e){this.a=d
this.b=e},
eTm:function eTm(d){this.a=d},
eTn:function eTn(d){this.a=d},
atF:function atF(d){this.a=d},
aGd:function aGd(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eTp:function eTp(d){this.a=d},
eTo:function eTo(d){this.a=d},
hVW(d,e,f,g,h){return new C.OO(h,g,d,e,f,null)},
aL6:function aL6(d,e){this.a=d
this.b=e},
OO:function OO(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGf:function aGf(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eU7:function eU7(){},
eU3:function eU3(d,e){this.a=d
this.b=e},
eU4:function eU4(d){this.a=d},
eTP:function eTP(d){this.a=d},
eTN:function eTN(d){this.a=d},
eTO:function eTO(d){this.a=d},
eTY:function eTY(d,e){this.a=d
this.b=e},
eTV:function eTV(d,e){this.a=d
this.b=e},
eTW:function eTW(d,e){this.a=d
this.b=e},
eTX:function eTX(d,e,f){this.a=d
this.b=e
this.c=f},
eTT:function eTT(d,e,f){this.a=d
this.b=e
this.c=f},
eTR:function eTR(d){this.a=d},
eTS:function eTS(d){this.a=d},
eTU:function eTU(d){this.a=d},
eUa:function eUa(d){this.a=d},
eU9:function eU9(d){this.a=d},
eUb:function eUb(d){this.a=d},
eU8:function eU8(d){this.a=d},
eTM:function eTM(d){this.a=d},
eTQ:function eTQ(d,e){this.a=d
this.b=e},
eU6:function eU6(d,e){this.a=d
this.b=e},
eU5:function eU5(d,e){this.a=d
this.b=e},
eU0:function eU0(d){this.a=d},
eU1:function eU1(d){this.a=d},
eU2:function eU2(d,e){this.a=d
this.b=e},
eU_:function eU_(d,e){this.a=d
this.b=e},
eTZ:function eTZ(d,e,f){this.a=d
this.b=e
this.c=f},
bzD:function bzD(){},
B3(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
agN(d,e,f){return C.ib_(d,e,f)},
ib_(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$agN=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aB("String",e,f),$async$agN)
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
return A.i($async$agN,v)},
agM(d,e){return C.iaZ(d,e)},
iaZ(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$agM=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$agM)
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
return A.i($async$agM,v)},
i9N(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Tq(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bCl(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bCl=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b41(q),$async$bCl)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aRI(q,!1),$async$bCl)
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
return A.i($async$bCl,v)},
hJp(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aK(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.rk(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rk(p,J.k(u==null?"":u),1,o,q)},
h97(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.dd(s,x.f)
w=A.cE(w,new C.cFp(),w.$ti.k("M.E"),x.Q)
v=A.a4(w).k("X<M.E>")
r=A.C(new A.X(w,new C.cFq(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bj(J.k(t==null?"":t))
return new C.lA(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
ieY(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.wm
case"female":case"f":return D.op
default:return D.yS}},
hyN(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hjj(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.ieY(v==null?j:J.k(v))
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
m=m==null?j:B.k.M(m)
if(m==null)m=1
l=J.z(d.h(0,"hidden"),!0)
k=A.aK(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.k.M(k)
return new C.hS(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
if_(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Ou
case"viewer":return D.kV
default:return D.uw}},
if0(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Ha(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aQs(d,e){return B.a.i(e.toLowerCase())===C.Ha(d,e)&&d.y!==D.kV},
uq(d,e){var w,v=d.y
if(v===D.kV)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Ha(d,e))return!0
if(v===D.Ou)return!0
v=d.e
return new A.N(v,A.hf0(),A.T(v).k("N<1,m>")).q(0,w)},
iel(d){return J.dH(d,new C.fEj()).gJ(0)},
h2x(d){var w=0,v=A.j(x.y),u,t
var $async$h2x=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Be(d),$async$h2x)
case 3:u=t.rf(f,new C.h2y(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h2x,v)},
bDm(d,e){var w=0,v=A.j(x.H),u,t
var $async$bDm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Be(d),$async$bDm)
case 3:t=g
if(J.rf(t,new C.fBX(e))){w=1
break}if(C.iel(t)>=2)throw A.W(A.bc("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bDm,v)},
alL(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.dd(h,x.f)
w=A.cE(w,new C.bS0(),w.$ti.k("M.E"),x.P)
v=A.a4(w).k("X<M.E>")
g=A.C(new A.X(w,new C.bS1(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b7(u,new C.bS2(),x.N)
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
p=A.aK(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.k.M(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.if_(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aX(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cx)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gR(f)
if(l.b(i))m.push(A.a3(i,k,j))}return new C.kR(w,v,s,!r,t,g,q,p,o,n,m)},
hz0(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.aA(v,0,8)},
Ds(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$Ds=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Sk(d),$async$Ds)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$Ds)
case 4:t=f
w=5
return A.b(t.a72(0),$async$Ds)
case 5:w=6
return A.b(C.fsq(t,l),$async$Ds)
case 6:s=f
if(J.cI(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a7(q)
o=A.aT(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hum(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.p_(l,n),$async$Ds)
case 11:u=n
w=1
break
case 10:case 8:m=A.aT(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hum(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.p_(l,n),$async$Ds)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ds,v)},
fsq(d,e){return C.i7a(d,e)},
i7a(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fsq=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a7(a3)
a5=A.aT(a4.h(a3,"ngmy_worksheets_index_v3_"+C.B3(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.Y.aS(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aX(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gR(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aT(a4.h(a3,"ngmy_worksheet_item_v3_"+C.B3(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.Y.aS(0,m,null)
if(!a0.b(l)){w=7
break}k=C.h97(A.a3(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aT(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.B3(a9)+"_"+n))
i=C.i9N(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b41(h),$async$fsq)
case 17:g=b1
if(g!=null){i=i.Tq(g)
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
case 8:J.St(q,new C.fsr())
if(p&&J.ad(q)!==0)C.p_(a9,q)
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
return A.i($async$fsq,v)},
bDP(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bDP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Sk(d),$async$bDP)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.Ds(r),$async$bDP)
case 4:t=p.aX(g)
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
return A.i($async$bDP,v)},
hum(d){var w,v,u,t
try{w=B.Y.aS(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.dd(w,x.f)
v=A.cE(v,new C.fod(),v.$ti.k("M.E"),x.fA)
u=A.a4(v).k("X<M.E>")
v=A.C(new A.X(v,new C.foe(),u),u.k("M.E"))
B.d.aZ(v,new C.fof())
return v}catch(t){v=A.a([],x.D)
return v}},
p_(d,e){return C.ioC(d,e)},
ioC(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$p_=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Sk(b2),$async$p_)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$p_)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.B3(a8)
p=A.aT(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b7(x.j.a(B.Y.aS(0,p,null)),new C.fVk(),a2).fL(0)
a2=J.b7(b3,new C.fVl(),a2).bZ(0,new C.fVm())
n=A.d4(a2,a2.$ti.k("M.E"))
a2=o,a2=A.dX(a2,a2.r,A.a4(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f0(n,m)?17:18
break
case 17:a5=C.B3(a8)
l=A.aT(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a9e(l),$async$p_)
case 19:t=21
a5=C.B3(a8)
k=A.aT(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.Y.aS(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.a9e(a5==null?null:J.k(a5)),$async$p_)
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
return A.b(C.agM(r,"ngmy_worksheet_item_v3_"+C.B3(a8)+"_"+m),$async$p_)
case 29:w=30
return A.b(C.agM(r,"ngmy_worksheet_thumb_v3_"+C.B3(a8)+"_"+m),$async$p_)
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
case 14:case 10:a2=J.cC(b3),a3=a2.gag(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gR(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bCl(h),$async$p_)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.agN(r,"ngmy_worksheet_thumb_v3_"+C.B3(a8)+"_"+a4,f),$async$p_)
case 40:g=i.Tq(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.agM(r,"ngmy_worksheet_thumb_v3_"+C.B3(a8)+"_"+a4),$async$p_)
case 41:g=i.Tq(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.agM(r,"ngmy_worksheet_thumb_v3_"+C.B3(a8)+"_"+a4),$async$p_)
case 42:case 34:a4=i.a
w=43
return A.b(C.agN(r,"ngmy_worksheet_item_v3_"+C.B3(a8)+"_"+a4,B.Y.az(g.ak(),null)),$async$p_)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.c8(q,i.a)
w=31
break
case 32:w=44
return A.b(C.agN(r,"ngmy_worksheets_index_v3_"+C.B3(a8),B.Y.az(q,null)),$async$p_)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eP(b3,new C.fVn(q))
a4=a3.$ti.k("cM<1,a8<m,@>>")
a7=A.C(new A.cM(a3,new C.fVo(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.agN(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.Y.az(a0,null)),$async$p_)
case 45:w=46
return A.b(J.hIv(r),$async$p_)
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
return A.i($async$p_,v)},
LX(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$LX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ds(d),$async$LX)
case 3:t=g
s=J.cC(t)
r=s.bj(t,new C.h2w(e))
if(r===-1)s.c4(t,0,e)
else s.n(t,r,e)
u=C.p_(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$LX,v)},
bDA(d,e){var w=0,v=A.j(x.H),u
var $async$bDA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Ds(d),$async$bDA)
case 2:u=g
J.nK(u,new C.fEN(e))
w=3
return A.b(C.p_(d,u),$async$bDA)
case 3:return A.h(null,v)}})
return A.i($async$bDA,v)},
Hc(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Hc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Hc)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aT(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.Y.aS(0,i,null)
if(x.j.b(t)){j=J.dd(t,x.f)
j=A.cE(j,new C.fHT(),j.$ti.k("M.E"),x.k)
s=A.a4(j).k("X<M.E>")
r=A.C(new A.X(j,new C.fHU(),s),s.k("M.E"))
B.d.aZ(r,new C.fHV())
k=r}}catch(h){}w=4
return A.b(C.foZ(d),$async$Hc)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.i7y(k,p,d)
j=A.T(o)
s=j.k("N<1,a8<m,@>>")
s=A.C(new A.N(o,new C.fHW(),s),s.k("ak.E"))
n=B.Y.az(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Rw(d,o),$async$Hc)
case 7:case 6:j=j.k("X<1>")
m=A.C(new A.X(o,new C.fHX(d),j),j.k("M.E"))
if(m.length!==0)C.aQb(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Hc,v)},
fV6(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fV6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Rw(d,e),$async$fV6)
case 3:t=J.dH(e,new C.fV7(d))
s=A.C(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aQb(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fV6,v)},
a3E(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a3E=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a3E)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aT(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.Y.aS(0,l,null)
if(x.j.b(u)){m=J.dd(u,x.f)
m=A.cE(m,new C.h2r(),m.$ti.k("M.E"),x.k)
t=A.a4(m).k("X<M.E>")
s=A.C(new A.X(m,new C.h2s(),t),t.k("M.E"))
o=s}}catch(k){}q=J.qA(o,new C.h2t(e))
if(B.a.i(e.x).length===0&&C.uq(e,d)){m=B.a.i(d.toLowerCase())
p=e.aFO(e.y===D.kV?D.kV:D.uw,m)}else p=e
if(q===-1)J.pT(o,0,p)
else J.aJ(o,q,p)
w=3
return A.b(C.Rw(d,o),$async$a3E)
case 3:w=C.uq(p,d)?4:5
break
case 4:w=6
return A.b(C.aQa(C.Ha(p,d),p),$async$a3E)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a3E,v)},
aQo(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aQo=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Hc(d),$async$aQo)
case 2:u=g
t=J.cC(u)
s=A.nv(t.eP(u,new C.fEu(e)))
t.bt(u,new C.fEv(e))
w=3
return A.b(C.Rw(d,u),$async$aQo)
case 3:w=s!=null&&C.aQs(s,d)?4:5
break
case 4:w=6
return A.b(C.foh(e),$async$aQo)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aQo,v)},
aiD(d){var w=d.f,v=A.T(w).k("X<1>")
w=A.C(new A.X(w,new C.h2C(),v),v.k("M.E"))
return w},
hcx(d,e){var w,v=d.f,u=A.nv(new A.X(v,new C.fDZ(e),A.T(v).k("X<1>")))
v=C.aiD(d)
w=A.T(v).k("X<1>")
v=A.C(new A.X(v,new C.fE_(e,u),w),w.k("M.E"))
B.d.aZ(v,new C.fE0())
return v},
if3(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hDj(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bj(C.hcx(d,u),new C.h2_(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
igB(d,e){var w
if(e==null||e.length===0)return 1
w=C.hcx(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fII(),A.T(w).k("N<1,F>")).f6(0,B.xK)+1},
iov(d){var w,v=C.aiD(d)
if(v.length===0)return null
w=new A.X(v,new C.fV0(),A.T(v).k("X<1>"))
if(!w.gav(0))return w.gH(0)
return B.d.gH(v)},
ieZ(d){return A.I(["id",d.a,"name",d.b,"gender",C.hyN(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
igw(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.U(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aS(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.J)(a0),++u){q=a0[u]
p=q.a
r.I(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.yS?n:q.c
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
d=q.aFJ(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.J)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cP0(a1,w,a3.d,a2.y,s,a0,v)},
Be(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$Be=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Be)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aT(J.t(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.Y.aS(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.dd(t,x.f)
p=A.cE(p,new C.fHQ(),p.$ti.k("M.E"),x.k)
s=A.a4(p).k("X<M.E>")
p=A.C(new A.X(p,new C.fHR(),s),s.k("M.E"))
B.d.aZ(p,new C.fHS())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Be,v)},
ain(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ain=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.uw:D.kV
a7=C.Ha(b2,b3)
w=2
return A.b(C.Be(b1),$async$ain)
case 2:a8=b5
a9=J.cC(a8)
b0=a9.bj(a8,new C.fUW(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bDm(b1,b2),$async$ain)
case 5:case 4:if(b0===-1){u=b2.aFO(a6,a7)
a9.c4(a8,0,u)}else{t=a9.h(a8,b0)
s=A.U(x.N,x.P)
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
i=i!==D.yS?i:l.c
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
s.n(0,m,l.aFJ(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("b8<2>")
s=A.C(new A.b8(s,k),k.k("M.E"))
k=a5?D.uw:D.kV
u=t.cP2(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Rw(b1,a8),$async$ain)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aQa(B.a.i(b3.toLowerCase()),u),$async$ain)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ain,v)},
huL(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).ab().af(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("N<1,a8<m,@>>"),k=A.C(new A.N(m,C.hCn(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.I(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.I(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.ab().af(),"updatedAt",o],r,x.K),"createdAt",s.ab().af(),"updatedAt",o],r,x.z)},
huM(d,e){var w=new A.V(Date.now(),0,!1).ab().af(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("N<1,a8<m,@>>")
u=A.C(new A.N(u,C.hCn(),t),t.k("ak.E"))
return A.I(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.ab().af(),"updatedAt",w],x.N,x.z)},
i50(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a7(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.alL(A.a3(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hf0(),A.T(j).k("N<1,m>")).bZ(0,new C.foM())
t=A.C(j,j.$ti.k("M.E"))
if(u===v)s=D.uw
else s=B.d.q(t,u)?D.Ou:D.kV
return w.aFO(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.alL(A.a3(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.dd(q,h)
h=A.cE(h,new C.foN(),h.$ti.k("M.E"),x.P)
p=A.a4(h).k("X<M.E>")
o=A.C(new A.X(h,new C.foO(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b7(n,new C.foP(),x.N).bZ(0,new C.foQ())
t=A.C(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.uw
else s=B.d.q(t,u)?D.Ou:D.kV
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
j=A.aK(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.M(j)
if(j==null)j=0
return new C.kR(h,r,p,!m,t,o,l,j,v,s,B.cc)},
foZ(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$foZ=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fp2()
h=x.N
g=x.z
w=7
return A.b(A.iJ(A.a([A.lE("family_trees","*",null,A.I(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bK),r.$2(A.lE("family_trees","*",A.I(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bK),"collaborator"),r.$2(A.lE("family_trees","*",null,A.I(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bK),"public")],x.cl),x.fO),$async$foZ)
case 7:q=a4
p=J.t(q,0)
o=J.t(q,1)
n=J.t(q,2)
g=x.a
m=A.U(h,g)
h=A.C(p,g)
l=h
J.h6(l,o)
J.h6(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.J)(l),++f){k=l[f]
g=J.t(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aJ(m,j,k)}l=m
h=A.a4(l).k("b8<2>")
h=A.cE(new A.b8(l,h),new C.fp_(a0),h.k("M.E"),x.k)
l=A.a4(h).k("X<M.E>")
l=A.C(new A.X(h,new C.fp0(),l),l.k("M.E"))
B.d.aZ(l,new C.fp1())
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
return A.i($async$foZ,v)},
i7y(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a7(e)
if(j.gav(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dK(e,new C.ft8(),v).bZ(0,new C.ft9())
t=A.d4(u,u.$ti.k("M.E"))
s=A.U(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.J)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Ha(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kV){m=q.e
m=!new A.N(m,A.hf0(),A.T(m).k("N<1,m>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gag(e);j.C();){v=j.gR(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.igw(l,v)
o=C.Ha(k,w)
p=v.d
s.n(0,u,o===w?k.beO(p,D.uw):k.beO(p,v.y))}j=s.$ti.k("b8<2>")
j=A.C(new A.b8(s,j),j.k("M.E"))
B.d.aZ(j,new C.fta())
return j},
Rw(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Rw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$Rw)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b7(e,new C.fw1(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aB("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.Y.az(s,null)),$async$Rw)
case 3:return A.h(null,v)}})
return A.i($async$Rw,v)},
aQa(d,e){return C.icQ(d,e)},
icQ(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aQa=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.m9("family_trees",A.a([C.huL(e,d)],p),null,B.cK),$async$aQa)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.m9("family_trees",A.a([C.huM(e,d)],p),null,B.cK),$async$aQa)
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
return A.i($async$aQa,v)},
aQb(d,e){return C.icR(d,e)},
icR(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aQb=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("N<1,a8<m,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fBc(d),n),m)
r=l
w=7
return A.b(A.m9("family_trees",r,null,B.cK),$async$aQb)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fBd(d),n),m)
p=k
w=8
return A.b(A.m9("family_trees",p,null,B.cK),$async$aQb)
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
return A.i($async$aQb,v)},
foh(d){return C.i4i(d)},
i4i(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$foh=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.RV("family_trees",A.I(["id",d],x.N,x.z),null,B.cK),$async$foh)
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
return A.i($async$foh,v)},
rk:function rk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lA:function lA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cFs:function cFs(){},
cFr:function cFr(){},
cFp:function cFp(){},
cFq:function cFq(){},
Ij:function Ij(d,e){this.a=d
this.b=e},
hS:function hS(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
alK:function alK(d,e){this.a=d
this.b=e},
fEj:function fEj(){},
h2y:function h2y(d){this.a=d},
fBX:function fBX(d){this.a=d},
kR:function kR(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bS4:function bS4(){},
bS3:function bS3(){},
bS0:function bS0(){},
bS1:function bS1(){},
bS2:function bS2(){},
fsr:function fsr(){},
fod:function fod(){},
foe:function foe(){},
fof:function fof(){},
fVk:function fVk(){},
fVl:function fVl(){},
fVm:function fVm(){},
fVn:function fVn(d){this.a=d},
fVo:function fVo(){},
h2w:function h2w(d){this.a=d},
fEN:function fEN(d){this.a=d},
fHT:function fHT(){},
fHU:function fHU(){},
fHV:function fHV(){},
fHW:function fHW(){},
fHX:function fHX(d){this.a=d},
fV7:function fV7(d){this.a=d},
h2r:function h2r(){},
h2s:function h2s(){},
h2t:function h2t(d){this.a=d},
fEu:function fEu(d){this.a=d},
fEv:function fEv(d){this.a=d},
h2C:function h2C(){},
fDZ:function fDZ(d){this.a=d},
fE_:function fE_(d,e){this.a=d
this.b=e},
fE0:function fE0(){},
h2_:function h2_(d){this.a=d},
fII:function fII(){},
fV0:function fV0(){},
fHQ:function fHQ(){},
fHR:function fHR(){},
fHS:function fHS(){},
fUW:function fUW(d){this.a=d},
foM:function foM(){},
foN:function foN(){},
foO:function foO(){},
foP:function foP(){},
foQ:function foQ(){},
fp2:function fp2(){},
fp3:function fp3(d){this.a=d},
fp_:function fp_(d){this.a=d},
fp0:function fp0(){},
fp1:function fp1(){},
ft8:function ft8(){},
ft9:function ft9(){},
fta:function fta(){},
fw1:function fw1(){},
fBc:function fBc(d){this.a=d},
fBd:function fBd(d){this.a=d},
cFt:function cFt(d,e){this.a=d
this.b=e},
cFu:function cFu(d,e){this.a=d
this.b=e},
aIi:function aIi(d,e,f){this.a=d
this.b=e
this.c=f},
baj:function baj(){this.b=this.a=0},
bai:function bai(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bxT:function bxT(){},
xd(d,e){var w,v
if(d==null)return""
w=d.bT()
v=""+w.gcg()+"/"+w.gcw()+"/"+w.gcl()
if(!e)return v
return v+" "+B.a.b_(B.o.u(w.gns()),2,"0")+":"+B.a.b_(B.o.u(w.gGF()),2,"0")},
hVT(){var w,v=$.oo(),u=J.e2(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"WS"+B.d.he(u)},
atB(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$atB=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c6(),$async$atB)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f3("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bK),$async$atB)
case 8:r=e
if(r==null){u=A.U(x.N,x.z)
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
case 7:u=A.U(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$atB,v)},
atC(d){return C.hVU(d)},
hVU(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$atC=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c6(),$async$atC)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_worksheet_project_qr_stashes_v1",A.I(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).ab().af()],x.N,x.z),!1,!1,B.cK,null),$async$atC)
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
return A.i($async$atC,v)},
atE(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$atE=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c6(),$async$atE)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hVT()
w=4
return A.b(C.atB(),$async$atE)
case 4:r=h
q=B.a.i(e)
p=B.dQ.aM(t)
J.aJ(r,s,A.I(["ownerEmail",q,"projectId",f,"payload",B.cO.gcu().aM(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).ab().af()],x.N,x.K))
w=5
return A.b(C.atC(r),$async$atE)
case 5:u=new A.a16("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$atE,v)},
atD(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$atD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c6(),$async$atD)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.atB(),$async$atD)
case 4:q=f
p=J.a7(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a7(o)
m=A.aK(n.h(o,"usesRemaining"))
l=m==null?null:B.k.M(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.c9.cE(0,B.cG.aM(t))}catch(h){r=A.ab(h)
$.am.$1("[worksheet qr stash] decode: "+A.w(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dL(A.a3(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).ab().af())
p.n(q,i,m)}w=5
return A.b(C.atC(q),$async$atD)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$atD,v)},
hpg(){var w=new A.V(Date.now(),0,!1).ab()
return"wst_"+(1000*w.a+w.b)+"_"+B.cM.aw(999999)},
hVV(d){var w,v,u,t,s,r,q
try{w=A.ahf(d)
if(w==null)return d
v=w
if(J.M2(v)>960||J.M1(v)>960){s=v
r=J.M2(v)>=J.M1(v)?960:null
v=A.ahc(s,J.M1(v)>J.M2(v)?960:null,B.PU,r)}s=v
u=A.an5(82).TP(s,B.zw)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cb(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
cnL(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cnL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hVV(e)
$.cnH.n(0,s,t)
u=C.bFp(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cnL,v)},
b41(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b41=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d2(l,"data:image")){u=null
w=1
break}t=4
r=J.f0(l,",")?B.d.gal(J.lI(l,",")):l
q=B.cG.aM(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hpg()
w=7
return A.b(C.cnL(p,q),$async$b41)
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
return A.i($async$b41,v)},
cnI(d){var w=0,v=A.j(x.T),u,t,s
var $async$cnI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(N.cnK(s),$async$cnI)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cO.gcu().aM(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cnI,v)},
a9e(d){var w=0,v=A.j(x.H),u,t
var $async$a9e=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=N.hCf(d)
if(t==null){w=1
break}$.cnH.W(0,t)
w=3
return A.b(C.bFo(t),$async$a9e)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a9e,v)},
bFp(d,e){return C.imH(d,e)},
imH(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bFp=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aP4
w=7
return A.b(n==null?$.aP4=N.hbp():n,$async$bFp)
case 7:r=g
q=new Uint8Array(A.cb(e))
p=J.mY(r,"thumbs","readwrite")
B.j6.mw(J.mX(p,"thumbs"),q,l)
w=8
return A.b(J.pS(p),$async$bFp)
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
return A.i($async$bFp,v)},
bFo(d){return C.imF(d)},
imF(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bFo=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aP4
w=7
return A.b(o==null?$.aP4=N.hbp():o,$async$bFo)
case 7:r=f
q=J.mY(r,"thumbs","readwrite")
B.j6.Gf(J.mX(q,"thumbs"),m)
w=8
return A.b(J.pS(q),$async$bFo)
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
return A.i($async$bFo,v)}},D,Av,Aw,A_,Ax,Ay
J=c[1]
A=c[0]
B=c[2]
N=c[60]
P=c[256]
A0=c[162]
S=c[59]
Aa=c[231]
L=c[211]
H=c[35]
E=c[221]
T=c[121]
Ab=c[234]
Q=c[105]
Ac=c[134]
U=c[227]
Ad=c[116]
Ae=c[197]
A1=c[118]
Af=c[230]
Ag=c[43]
R=c[229]
M=c[90]
A2=c[86]
Ah=c[168]
A3=c[129]
A4=c[171]
A5=c[250]
A6=c[198]
Ai=c[189]
Aj=c[201]
A7=c[196]
Ak=c[253]
Al=c[72]
A8=c[255]
Am=c[78]
G=c[254]
An=c[133]
Ao=c[258]
Ap=c[120]
A9=c[215]
Aq=c[34]
V=c[119]
O=c[191]
Ar=c[202]
As=c[125]
W=c[257]
At=c[154]
X=c[243]
Y=c[42]
F=c[96]
Au=c[33]
K=c[104]
I=c[138]
Z=c[76]
C=a.updateHolder(c[7],C)
D=c[249]
Av=c[77]
Aw=c[209]
A_=c[252]
Ax=c[251]
Ay=c[63]
C.api.prototype={}
C.b_k.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bj6(),f=h.x!=null&&h.zC(i).length===0
if(h.x!=null)w=f?B.b2:B.bC
else w=h.gUu()?B.bC:B.e0
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.n(22)
t=A.L(D.bo6,B.r,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.f7t,B.f,i,i,new A.o(B.b2.j(0.12),i,i,A.n(999),i,i,B.n),i,i,i,i,B.h9,i,i,i),B.X,D.fD9,B.aw,A.d(C.xd(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fyP,i,i,i)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,D.b6w,i,i,i,i,B.a0c,i,i,i)
q=A.n(16)
p=A.L(B.aO,B.r,1)
o=A.L(B.b2.j(0.28),B.r,1)
n=A.hdz(h.d)
o=A.p(B.A,C.b_j(A.fL2(h.e,n),30),B.f,i,i,new A.o(B.m5,i,o,i,i,i,B.a7),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.ftV,B.K,i,i)
m=A.n(14)
l=A.L(B.aO,B.r,1)
q=A.p(i,A.x(A.a([o,B.P,n,B.bH,D.fDs,B.af,A.p(i,A.x(A.a([D.fTu,B.bH,A.d(A.Bg(h.c),i,i,i,i,i,i,D.foE,i,i,i)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fl,i,i,1/0)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aQ,i,p,q,i,i,B.n),i,i,i,i,O.alp,i,i,i)
p=A.n(16)
m=A.L(B.aO,B.r,1)
l=j.aSO("Original due",C.xd(h.r,!1))
n=j.aSO("Current due",C.xd(h.f,!1))
o=w.j(0.1)
k=A.n(12)
p=A.a([q,B.X,A.p(i,A.x(A.a([l,B.P,n,B.X,A.p(i,A.d(h.gaMS(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.C5,i,i,1/0),B.X,j.cjR(),B.P,j.c6J(g,f)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bh,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.n(14)
n=A.L(B.aO,B.r,1)
B.d.v(p,A.a([B.X,A.p(i,A.x(A.a([D.fEq,B.aw,A.d(q,i,i,i,i,i,i,D.ft8,i,i,i)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aQ,i,n,o,i,i,B.n),i,i,i,i,B.bh,i,i,1/0)],s))}if(h.gaHt()){q=A.n(14)
o=A.L(B.cr,B.r,1.6)
B.d.v(p,A.a([B.X,A.p(i,A.x(A.a([D.fUP,B.P,A.bx(A.n(12),A.e8(new A.a5(1/0,88,A.b4(i,i,i,new A.WS(h.ax,B.R,D.fcf,!0,3.5,i),B.ay),i),B.c,!0),B.aq)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.GE,i,i,i)],s))}p.push(B.aC)
p.push(D.fMI)
return A.p(i,A.x(A.a([r,new A.D(B.a00,A.x(p,B.al,i,B.e,B.i,0,B.p),i)],s),B.al,i,B.e,B.O,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aSO(d,e){var w=null
return A.A(A.a([A.E(A.d(d,w,w,w,w,w,w,D.ab4,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fpH,w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)},
cjR(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.aag(B.e0,u,"Not paid yet")
w=t.zC(null).length
v=w===0?B.b2:B.bC
return this.aag(v,u,C.xd(t.x,!0))},
c6J(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.aag(B.b2,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.aag(B.b2,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.ab4,u,u,u)
v=A.T(d).k("N<1,h0>")
v=A.C(new A.N(d,new C.c7i(),v),v.k("ak.E"))
return A.x(A.a([w,B.an,A.bW(B.bG,v,B.br,u,6,6)],x.p),B.E,u,B.e,B.i,0,B.p)},
aag(d,e,f){var w=null
return A.A(A.a([A.E(A.d(e,w,w,w,w,w,w,D.ab4,w,w,w),1),new A.dp(1,B.co,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dX,w,w),w)],x.p),B.E,w,B.e,B.i,0,w,w)}}
C.bcv.prototype={
a4(d,e){new A.WS(this.b,B.R,e,!0,3.5,null).a4(d,e)},
aC(d){return d.b!==this.b}}
C.apu.prototype={
S(){return new C.aEd(A.a([],x.bp))},
ge3(){return this.c}}
C.aEd.prototype={
Y(){this.a3()
this.Ja()},
Ja(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ja=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a2V(t.a.c),$async$Ja)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dPh(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Ja,v)},
aUL(d,e){var w,v=null,u=this.a.d.a,t=u?B.R:B.aQ,s=A.l(v,v,u?B.bv:B.bo,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.n(10)
u=(this.a.d.a?B.bv:B.bo).j(0.22)
w=A.n(10)
return A.bs(v,new A.b6(4,r,new A.ay(u,1,B.r,-1)),v,B.bh,v,v,v,v,!0,new A.b6(4,w,new A.ay((this.a.d.a?B.bv:B.bo).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.n(10),D.b4a),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aUK(d){return this.aUL(d,null)},
PY(d){return this.cnu(d)},
cnu(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$PY=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.HW:B.eN
w=7
return A.b(new A.hT().CC(72,900,900,n),$async$PY)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fp(),$async$PY)
case 8:p=f
n=B.cO.gcu().aM(p)
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
return A.i($async$PY,v)},
b2S(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.R:B.aQ,o=A.n(10),n=A.L((q?B.bv:B.bo).j(0.18),B.r,1)
if(d)q=B.cS
else q=s.a.d.a?B.bv:B.bo
q=A.Y(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aQ:B.av,r,r,r,r,r,r,r,r,12.5,r,r,B.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cS
else u=s.a.d.a?B.bv:B.bo
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.i,0,B.p),1)
v=A.fu(r,r,r,r,r,r,r,r,r,r,r,B.cS,r,r,r,r,r,r,r,r,r,r,r,r,r,B.ce)
q=A.a([q,B.ae,u,A.bM(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.Y(B.cz,s.a.d.a?B.bv:B.bo,r,r,r,18),r,r,r,g,r,r,r,r,r,B.ce))
return A.p(r,A.A(q,B.m,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jD,D.bAW,r,r,r)},
Dy(d){return this.bDf(d)},
bDe(){return this.Dy(null)},
bDf(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Dy=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.au(new A.ba(a4,B.b5,B.aP),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.iX(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.M(p)):B.k.ad(p,2)}o=new A.au(new A.ba(a4,B.b5,B.aP),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.ba(a4,B.b5,B.aP),s)
if(a3){a4=new A.V(Date.now(),0,!1).bR(6048e8)
m=A.c1(a4.gcl(),a4.gcg(),a4.gcw(),0,0,0,0,0)}else{a4=a5.f
m=A.c1(a4.gcl(),a4.gcg(),a4.gcw(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bo(a4,!0,x.cT)
i=a3?null:A.hdz(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.wW?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hZ(B.w.j(0.55),!0,"Dismiss",a4,new C.dP0(),new C.dP1(a2,t,a5,r,new C.dP2(a2,t),o,n,j),B.eJ,!0,x.y),$async$Dy)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d0(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.T$=s
r.P$=0
o.T$=s
o.P$=0
n.T$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.L(x.q).f.U(D.fiL)
w=1
break}a0=a2.d
if(a0==null){t.c.L(x.q).f.U(D.fhq)
w=1
break}a1=A.fL2(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.wW?"male":"female"
w=7
return A.b(A.aiC(a3,A.hlY(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$Dy)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.wW?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a9(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c1(a3.gcl(),a3.gcg(),a3.gcw(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c1(a4.gcl(),a4.gcg(),a4.gcw(),0,0,0,0,0)))a5.cRn(a2.a)
w=8
return A.b(A.aiC(t.a.c,a5),$async$Dy)
case 8:case 5:w=9
return A.b(t.Ja(),$async$Dy)
case 9:case 1:return A.h(u,v)}})
return A.i($async$Dy,v)},
aVq(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cS.j(0.14)
else w=this.a.d.a?B.R:B.aQ
v=A.n(12)
u=A.n(12)
t=A.n(12)
if(g)s=B.cS
else s=(this.a.d.a?B.bv:B.bo).j(0.2)
s=A.L(s,B.r,g?1.5:1)
r=C.b_j(d,18)
if(g)q=B.cS
else q=this.a.d.a?B.aQ:B.av
return A.aI(!1,B.a3,!0,v,A.aO(!1,u,!0,A.p(p,A.A(A.a([r,B.bn,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.bb,B.i,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bU,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.aj)},
SL(d){return this.cFk(d)},
cFk(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$SL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hZ(B.w.j(0.55),!0,"Dismiss",s,new C.dPk(),new C.dPl(t,d),B.h8,!0,x.y),$async$SL)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.aiC(t.a.c,d),$async$SL)
case 7:w=8
return A.b(t.Ja(),$async$SL)
case 8:case 1:return A.h(u,v)}})
return A.i($async$SL,v)},
PX(d,e){return this.bO6(0,e)},
bO6(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$PX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ll(s,"Cancel","Delete",e.b+" \xb7 "+A.Bg(e.c)+" will be removed from this device.","Delete this debt?"),$async$PX)
case 3:if(!g){w=1
break}w=4
return A.b(C.fEB(t.a.c,e.a),$async$PX)
case 4:w=5
return A.b(t.Ja(),$async$PX)
case 5:case 1:return A.h(u,v)}})
return A.i($async$PX,v)},
ag3(d){return this.chg(d)},
chg(d){var w=0,v=A.j(x.H),u=this,t
var $async$ag3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bT(B.L,null,new C.dPe(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$ag3)
case 2:return A.h(null,v)}})
return A.i($async$ag3,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.eqF
w=J.dH(m.d,new C.dPm())
v=A.C(w,w.$ti.k("M.E"))
w=J.dH(m.d,new C.dPn())
u=A.C(w,w.$ti.k("M.E"))
t=B.d.cG(v,0,new C.dPo())
w=A.n(18)
s=m.a.d.a
r=s?D.cAz:D.aCg
q=A.L(s?B.cS.j(0.35):B.cS.j(0.18),B.r,1)
s=A.p(l,D.c1p,B.f,l,l,new A.o(B.cS.j(m.a.d.a?0.28:0.14),l,l,A.n(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.at,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.av,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aI(!1,B.a3,!0,A.n(12),A.aO(!1,A.n(12),!0,D.eq0,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dPp(m),l,l,l,l,l,l,l),B.f,B.cS,0,l,l,l,l,l,B.aj)],p),B.m,l,B.e,B.i,0,l,l)
o=A.E(m.cBq("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Bg(t)
r=A.a([A.p(l,A.x(A.a([s,B.af,A.A(A.a([o,B.ae,A.E(m.b9_(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.i,0,l,l)],p),B.E,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a9(B.aA,B.aF,B.x,r,l,l),B.n),l,l,l,l,B.alm,l,l,l),B.aC],p)
if(J.cq(m.d)){w=m.a.d.a
s=w?B.e7:B.c
q=A.n(18)
o=A.L((w?B.bv:B.bo).j(0.12),B.r,1)
n=A.p(l,D.bXc,B.f,l,l,new A.o(B.cS.j(0.12),l,l,A.n(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.av,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.p(l,A.x(A.a([n,B.af,w,B.aw,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bv:B.bo,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.m,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bDw,l,l,1/0))}else{w=m.gcmL()
s=A.C(new A.N(v,w,A.T(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.an,new A.D(D.bFc,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bv:B.bo,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.N(u,w,A.T(u).k("N<1,v>")))
B.d.v(s,q)}B.d.v(r,s)}return A.x(r,B.al,l,B.e,B.i,0,B.p)},
b9_(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.n(14),r=A.L((v.a.d.a?B.bv:B.bo).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bv:B.bo,u,u,u,u,u,u,u,u,11,u,u,B.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cS
else w=v.a.d.a?B.aQ:B.av
return A.p(u,A.x(A.a([q,B.bH,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.i,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.eD,u,u,u)},
cBq(d,e){return this.b9_(!1,d,e)},
cmM(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zC(j).length,h=d.bim()
if(d.x!=null){w=d.zC(j).length
v=w===0?B.cS:B.bC}else if(d.gUu())v=B.bC
else{if(h)w=B.cS
else w=k.a.d.a?B.bv:B.bo
v=w}if(d.x!=null){w=d.zC(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xd(u,!1)}else{u.toString
t="Paid "+C.xd(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xd(w,!1)+" \xb7 "+i+" missed":"Due "+C.xd(w,!1)}w=k.a.d.a?B.e7:B.c
u=A.n(18)
if(d.gUu()&&d.x==null)s=B.bC.j(0.35)
else s=(k.a.d.a?B.bv:B.bo).j(0.12)
s=A.L(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cL,12)],x.V)
q=A.n(18)
p=k.a.d.a?B.bp:B.m5
o=A.L(d.gUu()&&d.x==null?B.bC.j(0.45):B.cS.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hdz(d.d)
o=A.p(B.A,A.da(C.b_j(A.fL2(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a7),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aQ:B.av
m=x.p
n=A.a([new A.dp(1,B.co,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaHt())B.d.v(n,A.a([B.e1,A.Y(B.OW,B.cS.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.m,j,B.e,B.i,0,j,j),B.cU,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.V,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.i,0,B.p),1)
n=A.Bg(d.c)
l=k.a.d.a?B.aQ:B.av
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aI(!1,B.a3,!0,j,A.aO(!1,q,!0,new A.D(A5.al9,A.A(A.a([o,B.be,p,B.ae,A.x(A.a([n,B.bH,A.Y(B.eG,(k.a.d.a?B.bv:B.bo).j(0.5),j,j,j,18)],m),B.dK,j,B.e,B.i,0,B.p)],m),B.m,j,B.e,B.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dPg(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.aj),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d3,j,j,j,j)}}
C.uI.prototype={}
C.aly.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bk
u=v?B.E:B.m
t=a1.as
s=A.n(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.L(q,B.r,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cA,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.L(r.j(0.6),B.r,1)
n.push(A.aA(a0,A.p(a0,A.Y(B.cz,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a7),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
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
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.ayp,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.GV,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.eL(m,A.A(l,B.m,a0,B.e,B.O,0,a0,a0),B.f,B.e6)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bA6,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cF:B.bq,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fG,A.x(a2,u,a0,B.e,B.O,0,B.p),a0),1))
n.push(D.fd3)
a2=A.a([A.A(n,B.m,a0,B.e,B.i,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.wd,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a9(B.a6,B.a9,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lK,A.x(a2,B.m,a0,B.e,B.O,0,B.p),a0)
if(a1.z){a2=A.n(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.L(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hq,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a9(B.aA,B.aF,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bBo,a0,a0,a0,a0)}}
C.aW4.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bk?B.bk:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bq:B.cF,q,B.V,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.m,q,B.e,B.i,0,q,q),B.cU,n],m)
if(p.z)o.push(new A.D(B.um,n,q))
return new A.D(B.d3,A.x(o,B.m,q,B.e,B.O,0,B.p),q)}}
C.TK.prototype={
S(){return new C.bg7()}}
C.bg7.prototype={
gc1z(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aG(d,n,x.w).w,l=x.p,k=A.a([D.eqA,D.eqG],l)
for(w=0;w<8;++w){v=D.a4q[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.HI:B.ze
q=t===s
r=A.Y(r,q?B.eI:B.bV,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bn,A.d(v.b,n,n,n,n,n,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.ae,new A.by(1,B.bc,A.d(v.c,n,1,B.a2,n,n,n,B.AH,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.ay(B.eI,2,B.r,-1)
s=new A.o(n,n,new A.bG(p,p,p,p),new A.bg(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aA(n,new A.D(B.eL,A.x(A.a([new A.D(B.mP,new A.c7(B.aM,B.e,B.i,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.dx(!0,new C.aly(v,q.d,q.e,new C.df2(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.i,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.df3(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bBJ,A.bH(D.h_l,n,new C.df4(o,d),A.bn(B.b8,n,n,n,n,B.oQ,n,n,new A.b9(A.n(16),B.a1),n,n,n)),n))
return A.bm(!0,new A.cR(new A.aZ(0,1/0,0,m.a.b*0.9),A.cj(k,n,n,D.bG4,n,n,B.ai,!0),n),!0,!1,B.ag,!0,!0)}}
C.nr.prototype={
ak(){var w=this
return A.I(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.ab().af()],x.N,x.z)},
bf_(d,e,f){return new C.nr(this.a,e,d,f)}}
C.Ii.prototype={
wS(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Ii(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aFC(d){var w=null
return this.wS(w,w,w,w,w,d,w,w,w,w,w,w)},
cMZ(d){var w=null
return this.wS(w,w,w,w,d,w,w,w,w,w,w,w)},
beY(d,e,f){var w=null
return this.wS(d,w,w,w,w,w,w,w,e,w,f,w)},
cND(d){var w=null
return this.wS(w,w,w,w,w,w,d,w,w,w,w,w)},
cNM(d){var w=null
return this.wS(w,w,w,w,w,w,w,w,w,d,w,w)},
cMX(d){var w=null
return this.wS(w,w,w,d,w,w,w,w,w,w,w,w)},
cNO(d){var w=null
return this.wS(w,w,w,w,w,w,w,w,w,w,w,d)},
cMU(d){var w=null
return this.wS(w,w,d,w,w,w,w,w,w,w,w,w)},
cMP(d){var w=null
return this.wS(w,d,w,w,w,w,w,w,w,w,w,w)},
G8(d){var w=null
return this.wS(w,w,w,w,w,w,w,d,w,w,w,w)},
cNW(d,e,f,g,h,i,j,k,l,m,n){return this.wS(d,e,f,g,null,h,i,j,k,l,m,n)},
ak(){var w=this
return A.I(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cKt(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bQM(d),k=A.aK(d.h(0,"emblem")),j=k==null?o:B.k.M(k),i=A.aK(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.DE.ges(D.DE))
s=i==null?o:B.k.F(i,18,36)
r=l.$2("position",D.a67)
q=l.$2("frame",D.a5s)
l=l.$2("texture",D.a5o)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cNW(p,u,t,q,r,A.r9(d.h(0,"ribbon"))?A.GM(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a_h.prototype={
S(){return new C.aBc(A.a([],x.I),D.Ot)},
ge3(){return this.c}}
C.aBc.prototype={
Y(){var w,v=this
v.a3()
v.f=A.A7(0,1)
w=$.aw()
v.z=new A.au(B.au,w)
v.Q=new A.au(B.au,w)
v.lf()
w=v.a
C.bDL(w.c,w.d).bJ(new C.dfJ(v),x.fL)},
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
v.a2()},
lf(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$lf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Lw(s.c,s.d),$async$lf)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dfx(t,r))
t.axm()
case 1:return A.h(u,v)}})
return A.i($async$lf,v)},
gatX(){var w,v=this
if(!J.cq(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
axm(){var w,v,u=this.gatX(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.sb1(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.sb1(0,w==null?"":w)},
cfH(d){this.m(new C.dfu(this,d))
this.axm()},
NT(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$NT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nr(B.o.u(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aS5(r.c,r.d,s),$async$NT)
case 3:w=4
return A.b(t.lf(),$async$NT)
case 4:if(t.c==null||J.cq(t.d)){w=1
break}q=J.qA(t.d,new C.df5(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.df6(t,p))
t.axm()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.BC(p+1,B.cw,B.kR),$async$NT)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$NT,v)},
Bi(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Bi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gatX()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aS5(o.c,o.d,new C.nr(s,r,q,new A.V(p,0,!1))),$async$Bi)
case 3:w=4
return A.b(t.lf(),$async$Bi)
case 4:if(t.c==null){w=1
break}t.m(new C.dfy(t))
case 1:return A.h(u,v)}})
return A.i($async$Bi,v)},
Oz(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Oz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gatX()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dfe(r),s,null,!0,!0,x.y),$async$Oz)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bDw(s.c,s.d,r.a),$async$Oz)
case 4:t.m(new C.dff(t))
w=5
return A.b(t.lf(),$async$Oz)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.Ux(B.o.F(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Oz,v)},
yY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bi(),$async$yY)
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
return A.b(C.RN(s,r.r,o,p,q),$async$yY)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hCS(s,r.x,r.r),$async$yY)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Lw(s.c,s.d),$async$yY)
case 10:l=e
for(s=n.d,r=J.cC(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.I(l,new C.nr(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Bp(r.c,r.d,l),$async$yY)
case 11:w=12
return A.b(t.lf(),$async$yY)
case 12:r=t.c
if(r==null){w=1
break}r.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$yY,v)},
a1j(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1j=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bi(),$async$a1j)
case 5:case 4:if(t.c==null){w=1
break}s=t.gyW(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dO(D.zH,new C.dfv(t),new C.dfw())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.mL("Our Family",o,"",""))
for(o=J.aX(t.d);o.C();){n=o.gR(o)
p.push(new H.mL(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hfg(o,new H.rI(s,r,"",p,new H.uY(q.d,null,null,null,null,"","","")),null),$async$a1j)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a1j,v)},
Oh(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Oh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bi(),$async$Oh)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bT(D.agb,null,new C.dfa(t),s,!0,!0,!0,K.a9e,!1,!1,x.N),$async$Oh)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cMZ(r)
t.m(new C.dfb(t,q))
s=t.a
w=7
return A.b(C.Sn(s.c,s.d,q),$async$Oh)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Oh,v)},
XL(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bT(D.agb,null,new C.dfg(t),r,!0,!0,!0,K.a9e,!1,!1,x.e),$async$XL)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dfh(t,s))
r=t.a
w=4
return A.b(C.Sn(r.c,r.d,s),$async$XL)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.BC(0,B.dW,B.nw)
case 1:return A.h(u,v)}})
return A.i($async$XL,v)},
bTK(d){var w=d.bT(),v=B.a.b_(B.o.u(w.gcg()),2,"0"),u=B.a.b_(B.o.u(w.gcw()),2,"0")
return""+w.gcl()+"-"+v+"-"+u},
gyW(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c0N()
if(r.e)w=D.aeU
else if(J.cq(r.d)){w=r.y
v=r.gyW(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fnZ,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.D(X.amp,new C.Zz(w,v,0,q),q),q),B.by,t,B.an,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kM.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.by],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aA(q,A.p(q,D.f7f,B.f,q,q,new A.o(q,q,q,A.n(18),A.a([new A.ac(0,B.G,B.dJ.j(0.45),B.I,18)],x.V),E.wO,B.n),q,q,q,q,B.O9,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcJu(),q,q,q,q,q,q,!1,B.a4))
w.push(B.X)
w.push(A.ho(D.bTm,D.fZN,r.gaOy(),q))
B.d.v(u,w)}w=A.at(A.cg(A.x(u,B.m,q,B.e,B.O,0,B.p),B.t,q,B.y,q,B.ex,q,q,B.ai),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kM.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.V,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dU:B.Be
u=A.x(A.a([new A.D(D.bCN,w,q),A.E(A.JG(v,new C.dfH(r),J.ad(r.d)+1,q,r.gcfG(),u,B.aM),1),r.bG9()],x.p),B.m,q,B.e,B.i,0,B.p)
w=u}v=x.p
return A.c5(q,D.YW,new A.an(B.a0,q,B.b4,B.t,A.a([D.aPF,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c0N(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cI(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.KE(B.e8,"AI",h.gbE1(),!0))
if(h.a.f)f.push(new C.KE(B.mf,"Cover",h.gbOG(),!1))
if(h.a.f)f.push(new C.KE(B.wI,"Header",h.gbJG(),!1))
if(J.cI(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.KE(B.uN,"Print",h.gcoO(),!1))
if(h.a.f&&J.cI(h.d)&&h.r>=0){v=h.w
u=v?B.hF:B.j2
t=v?"Save":"Edit"
f.push(new C.KE(u,t,v?h.gcv6():new C.dfr(h),!1))}if(h.a.f)f.push(new C.KE(B.hU,"Add page",h.gaOy(),!1))
v=C.hyM(h.y.Q)
u=h.gyW(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.J)(f),++m){l=f[m]
if(l.d)k=D.dFk
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.kn.j(0.5),1,B.r,-1)
j=A.p(g,A.Y(l.a,D.kM,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bG(i,i,i,i),new A.bg(k,k,k,k),g,new A.a9(B.a6,B.a9,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kM.j(0.85)
p.push(new A.by(1,B.bc,A.aA(B.c5,A.x(A.a([k,B.bH,A.d(l.b,g,1,g,g,g,g,new A.G(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.m,g,B.e,B.O,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.aly(v,u,t+" \xb7 "+s+" "+r,new C.dfs(h),A.A(p,B.m,g,B.e,B.i,0,g,g),g)},
Ai(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ai=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bi(),$async$Ai)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aX(t.d);r.C();){q=r.gR(r)
s.push(q.b+" "+q.c)}p=H.a39(B.d.aN(s," "))
s=t.c
s.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.df7(t,p),s,null,!0,!0,x.N),$async$Ai)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.yY(),$async$Ai)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.E9(),$async$Ai)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.FM("Swahili (Kiswahili)",!0),$async$Ai)
case 18:w=16
break
case 17:w=19
return A.b(t.cFY(o==="sw"?"Swahili (Kiswahili)":"English"),$async$Ai)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$Ai,v)},
ZG(d,e,f,g,h){var w=null,v=A.n(16),u=B.c.j(0.07),t=A.n(16),s=A.L(E.kn.j(0.3),B.r,1),r=x.p
return new A.D(B.cv,A.aO(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.Y(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.wO,B.a7),w,42,w,w,w,w,w,42),B.be,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A2.Kw,w,w,w),A.d(g,w,w,w,w,w,w,B.AI,w,w,w)],r),B.E,w,B.e,B.i,0,B.p),1)],r),B.m,w,B.e,B.i,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bh,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dft(d,h),w,w,w,w,w,w,w),w)},
E9(){return this.bTd()},
bTd(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$E9=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dfk(r),a7,null,!0,!0,x.ei),$async$E9)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.ez("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.cf(null,null,!1,null,new C.dfl(o),a7,null,!0,!0,x.H).fv(new C.dfm(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.J)(d),++a1){k=d[a1]
J.c8(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.ak()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.zH[a1]
J.c8(j,i.a)}w=8
return A.b(C.ahL(a0,a7,new C.dfn(o),d,l,e,j),$async$E9)
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
l.sia($.aw())
J.aSz(l,0)
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
for(a4=0;a4<J.ad(p);++a4){if(m.b.an(0,a4)){j=J.t(p,a4)
a7=m.b.h(0,a4).a
a7=j.bf_(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Bp(j.c,j.d,l),$async$E9)
case 11:w=12
return A.b(r.lf(),$async$E9)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.zH[a1].a)
a5=l.cKt(j,12,a7)
l=r.a
w=15
return A.b(C.Sn(l.c,l.d,a5),$async$E9)
case 15:if(r.c!=null)r.m(new C.dfo(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.BC(0,B.dW,B.nw)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.L(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b3(a3?A.czf("Undo",new C.dfp(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.eh,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$E9,v)},
FM(d,e){return this.cFZ(d,e)},
cFY(d){return this.FM(d,!1)},
cFZ(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$FM=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.ez("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.cf(null,null,!1,null,new C.dfA(a0),k,null,!0,!0,x.H).fv(new C.dfB(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.J)(k),++i){n=k[i]
J.c8(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a3m(m,new C.dfC(a0)),$async$FM)
case 10:w=8
break
case 9:w=11
return A.b(C.bFf(new C.dfD(a0),m,a2),$async$FM)
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
o.sia($.aw())
J.aSz(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.L(x.q).f
k=q
o.U(A.b3(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bf_(J.t(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Bp(k.c,k.d,o),$async$FM)
case 12:w=13
return A.b(r.lf(),$async$FM)
case 13:o=r.c
if(o==null){w=1
break}o=o.L(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(A.czf("Undo",new C.dfE(r,d),null),null,null,null,null,B.t,null,k,null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$FM,v)},
bG9(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.df8(v):u
r=A.aH(u,u,u,u,A.Y(D.bP1,s?D.kM:B.aW,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cI(v.d)&&!v.w&&v.r>=0)s=A.ho(A.Y(B.wr,B.Gh,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.Gh,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbOg(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kM.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.at(s,u,u,u),1)
w=t<J.ad(v.d)?new C.df9(v):u
return A.bm(!0,new A.D(D.bCB,A.A(A.a([r,s,A.aH(u,u,u,u,A.Y(B.eG,t<J.ad(v.d)?D.kM:B.aW,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.i,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a_l.prototype={
S(){return new C.bgw(new A.au(B.au,$.aw()))}}
C.bgw.prototype={
ga2r(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
gbRR(){switch(this.ga2r()){case"cover":var w=D.d6X
break
case"book":w=D.d2j
break
default:w=D.dxW
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.n(26),n=E.kn.j(0.5),m=x.p,l=A.A(A.a([D.dFl,B.at,D.bIl,A.aH(p,p,p,p,B.ln,p,p,p,new C.dhu(d),p,p,p,p,p,p)],m),B.m,p,B.e,B.i,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.js(p,p,p,A.d("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dhv(q),q.ga2r()==="page",p,p,p,p))
if(q.a.d)k.push(A.js(p,p,p,D.fUk,p,new C.dhw(q),q.ga2r()==="book",p,p,p,p))
k.push(A.js(p,p,p,D.fH7,p,new C.dhx(q),q.ga2r()==="cover",p,p,p,p))
k=A.bW(B.bG,k,B.br,p,6,8)
j=B.c.j(0.07)
j=A.aM(p,B.Z,!1,p,!0,B.t,p,A.aN(),q.d,p,p,p,p,p,2,A.bs(p,new A.b6(4,A.n(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kE,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ab,p,p,p,p,p,p,p,p,p,p,p,B.dh,!0,B.a5,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbRR(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.d(s,p,p,p,p,p,p,B.Kt,p,p,p)
w.push(A.mZ(p,B.c.j(0.08),r,B.hh,new C.dhy(q,s),p,p,p,p))}return A.eR(p,E.BJ,A.cg(A.x(A.a([l,B.X,D.fXE,B.an,k,B.af,j,B.P,A.bW(B.bG,w,B.br,p,6,6),B.aC,A.dh(D.bTj,D.fYr,new C.dhz(q,d),A.bn(B.b8,p,p,p,p,B.oQ,p,p,new A.b9(A.n(16),B.a1),p,p,p)),B.aw,D.fSz],m),B.E,p,B.e,B.O,0,B.p),B.t,p,B.y,p,B.fr,p,p,B.ai),p,p,p,D.am6,B.da,p,new A.b9(o,new A.ay(n,1.4,B.r,-1)),p)}}
C.a_j.prototype={
S(){return new C.aBf(A.a([],x.gA))},
ge3(){return this.c}}
C.afu.prototype={}
C.aBf.prototype={
Y(){this.a3()
this.lf()},
lf(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.RR(p.c,p.d),$async$lf)
case 3:o=e
n=A.a([],x.gA)
p=J.aX(o)
case 4:if(!p.C()){w=5
break}s=p.gR(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bDL(r.c,q),$async$lf)
case 6:j=e
i=J
w=7
return A.b(C.Lw(t.a.c,q),$async$lf)
case 7:m.push(new l.afu(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.dfY(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lf,v)},
bag(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
QI(d,e){return this.che(0,e)},
che(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$QI=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).cd(A.eb(new C.dfX(u,e),!0,null,x.y)),$async$QI)
case 2:t=g
w=3
return A.b(u.lf(),$async$QI)
case 3:if(t===!0&&u.c!=null)u.c.L(x.q).f.U(D.aTt)
return A.h(null,v)}})
return A.i($async$QI,v)},
FO(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$FO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.L(x.q).f.U(D.aTp)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ah4(s.c,s.d),$async$FO)
case 5:q=e
w=6
return A.b(t.lf(),$async$FO)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.QI(0,B.d.fl(t.d,new C.dg1(q))),$async$FO)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.RN(p,s.f,r,n,o),$async$FO)
case 10:m=e
w=11
return A.b(t.lf(),$async$FO)
case 11:if(m&&t.c!=null)t.c.L(x.q).f.U(D.aTt)
case 1:return A.h(u,v)}})
return A.i($async$FO,v)},
Qa(d,e){return this.csO(0,e)},
csO(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qa=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dg0(t,e),s,null,!0,!0,x.y),$async$Qa)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a3y(s.c,s.d,e.a),$async$Qa)
case 4:w=5
return A.b(t.lf(),$async$Qa)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qa,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)k.push(o.bGc(w[u]))
if(m){t=6-o.d.length
w=A.n(18)
v=B.c.j(0.05)
s=A.L(E.kn.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aA(n,new A.fF(0.7142857142857143,A.p(n,A.x(A.a([D.dFm,B.af,D.epC,B.aw,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kM.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.bb,B.i,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcJq(),n,n,n,n,n,n,!1,B.a4))}w=A.n(22)
v=A.L(E.kn.j(0.85),B.r,1.6)
s=A.aA(n,A.p(n,D.c0c,B.f,n,n,new A.o(B.w.j(0.3),n,A.L(E.kn.j(0.6),B.r,1),n,n,n,B.a7),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dg2(d),n,n,n,n,n,n,!1,B.a4)
r=A.n(14)
q=B.w.j(0.3)
p=A.L(E.kn.j(0.5),B.r,1)
w=A.p(n,A.A(A.a([s,B.be,D.bIJ,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.fn_,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h9,n,n,n)],l),B.m,n,B.e,B.i,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.c68,B.n),n,n,n,Ax.NU,D.bAB,n,n,n)
if(o.e)k=D.aeU
else k=k.length===0?D.bbG:A.cr(new C.dg3(k))
return A.c5(n,D.YW,new A.an(B.a0,n,B.b4,B.t,A.a([D.aPF,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bGc(d){var w,v,u=this,t=null,s=u.bag(d),r=d.c,q=x.p,p=A.a([A.bR(0,A.eL(B.A,new A.a5(300,420,new C.Zz(d.b,s,r,t),t),B.f,B.dC),0,0,0)],q)
if(u.a.e)p.push(A.ap(t,A.aA(t,A.p(t,D.c_w,B.f,t,t,new A.o(B.w.j(0.55),t,A.L(B.aW,B.r,1),t,t,t,B.a7),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dfV(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.fmA,t,t,t)
v=r===1?"page":"pages"
return A.aA(t,A.x(A.a([new A.fF(0.7142857142857143,new A.an(B.a0,t,B.ac,B.t,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kM.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.i,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dfW(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.KE.prototype={}
C.Zz.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dO(D.zH,new C.cOq(m),new C.cOr()),j=m.c,i=D.DE.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mm:B.bb
v=new C.cOs(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.emi,28)],x.V)
u=x.p
t=A.a([A.bR(0,A.b4(l,l,l,new C.bdJ(j.x,h,l),B.ay),0,0,0),A.ap(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.a6,B.a9,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cL(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bg(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.amq,8,0.85,2.2),v.$4(D.bFv,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.amq,8,0.85,2.4))
else if(r==="corners")t.push(A.bR(0,new A.D(D.bFr,A.b4(l,l,l,new C.bdA(h,l),B.ay),l),0,0,0))
r=A.Y(D.aBd[B.o.F(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.ayp,l,l),B.K,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aC,q,B.af,p,B.af,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cF,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aR,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bR(0,new A.D(D.bFW,A.x(o,B.m,l,w,B.i,0,B.p),l),0,0,0))
if(j.z)t.push(A.ap(l,A.b4(l,l,l,new C.aId(l),D.fc8),l,l,l,46,0,l))
return A.p(l,A.bx(D.adw,new A.an(B.a0,l,B.ac,B.t,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.adw,i,new A.a9(B.aA,B.aF,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bdJ.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e4()
g.d_(11)
switch(this.b){case"plain":return
case"linen":$.S()
w=A.K()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=0;t<v;t+=4)d.ah(new A.q(0,t),new A.q(u,t),w)
$.S()
s=A.K()
s.r=B.c.j(0.05).gp(0)
s.c=1
for(r=0;r<u;r+=4)d.ah(new A.q(r,0),new A.q(r,v),s)
break
case"stars":for(v=e.a,u=e.b,q=this.c,p=0;p<70;++p){o=g.aj()
n=g.aj()
m=g.aj()
$.S()
l=new A.ao(B.Q,B.N,B.T,B.U,B.S)
l.r=q.j(0.25+g.aj()*0.5).gp(0)
d.N(new A.q(o*v,n*u),0.6+m*1.6,l)}break
case"rays":v=e.a*0.55
u=e.b
q=u*0.1
for(o=this.c,n=x.v,p=0;p<14;++p){k=0.47123889803846897+p*0.1691626813471427
m=$.S()
l=A.a([],n)
j=new A.aE(m.r,B.ah,null,null,l)
l.push(new A.aY(v,q))
j.a8()
m=k-0.04
m=new A.aq(v+Math.cos(m)*u*1.4,q+Math.sin(m)*u*1.4)
l.push(m)
i=j.f
if(i!=null)m.ai(i)
j.a8()
m=k+0.04
m=new A.aq(v+Math.cos(m)*u*1.4,q+Math.sin(m)*u*1.4)
l.push(m)
i=j.f
if(i!=null)m.ai(i)
j.a8()
m=new A.bt()
l.push(m)
l=j.f
if(l!=null)m.ai(l)
j.a8()
m=new A.ao(B.Q,B.N,B.T,B.U,B.S)
m.r=o.j((p&1)===0?0.09:0.03).gp(0)
d.ae(j,m)}break
default:$.S()
w=A.K()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,p=0;p<260;++p)d.N(new A.q(g.aj()*v,g.aj()*u),0.8+g.aj()*1.8,w)
$.S()
h=A.K()
h.r=B.c.j(0.035).gp(0)
for(p=0;p<120;++p)d.N(new A.q(g.aj()*v,g.aj()*u),0.6+g.aj()*1.2,h)}},
aC(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bdA.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.S(),j=A.K(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.aa
j.c=2.4
j.d=B.bA
for(w=e.a,v=e.b,v=[D.f1K,new A.cu([w,0,-1,1]),new A.cu([0,v,1,-1]),new A.cu([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aE(k,B.ah,null,null,s)
s.push(new A.aY(r+p*34,q))
n.a8()
m=new A.aq(r,q)
s.push(m)
l=n.f
if(l!=null)m.ai(l)
n.a8()
m=new A.aq(r,q+o*34)
s.push(m)
s=n.f
if(s!=null)m.ai(s)
n.a8()
d.ae(n,j)
s=new A.ao(B.Q,B.N,B.T,B.U,B.S)
s.r=i.j(0.9).gp(0)
d.N(new A.q(r+p*9,q+o*9),3,s)}},
aC(d){return!d.b.A(0,this.b)}}
C.uJ.prototype={}
C.ZS.prototype={
S(){return new C.bdH()}}
C.bdH.prototype={
gom(){var w=this.d
return w===$?this.d=this.a.c:w},
gyW(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.ba(w.b,B.b5,B.aP),$.aw())}return v},
gaCO(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.ba(w.c,B.b5,B.aP),$.aw())}return v},
gasu(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.ba(w.y,B.b5,B.aP),$.aw())}return v},
t(){var w=this,v=w.gyW(0),u=v.T$=$.aw()
v.P$=0
v=w.gaCO()
v.T$=u
v.P$=0
v=w.gasu()
v.T$=u
v.P$=0
w.a2()},
at7(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.js(s,s,s,A.d(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.d6Z(this,f,u),e===u,s,s,s,s))}return A.bW(B.bG,r,B.br,s,6,8)},
ayO(d){var w=null,v=B.c.j(0.07)
return A.bs(w,new A.b6(4,A.n(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.mu,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gom(),a0=f.gyW(0),a1=a0.a.a,a2=f.gaCO(),a3=a2.a.a,a4=f.gasu(),a5=d.beY(a4.a.a,a3,a1)
a1=x.w
a3=A.aG(a6,e,a1).w
a1=A.aG(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a5(190,260,A.eL(B.A,new A.a5(270,370,new C.Zz(a5,d,f.a.e,e),e),B.f,B.dC),e),e,e,e)
a0=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aN(),a0,e,e,e,e,e,2,f.ayO("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d7n(f),e,e,e,!1,e,e,!1,e,!0,e,B.ab,e,e,e,e,e,e,e,e,e,e,e,B.dh,!0,B.a5,e,B.ao,e,e,e,e)
a2=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aN(),a2,e,e,e,e,e,2,f.ayO("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d7o(f),e,e,e,!1,e,e,!1,e,!0,e,B.ab,e,e,e,e,e,e,e,e,e,e,e,B.dh,!0,B.a5,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.zH[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aW
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bG(o,o,o,o),e,e,new A.a9(B.aA,B.aF,B.x,t.c,e,e),B.a7),e,46,e,e,e,e,e,46)
q=q?B.c:B.aD
v.push(A.aA(e,A.x(A.a([p,B.cU,A.d(t.b,e,e,e,e,e,e,new A.G(!0,q,e,e,e,e,10.5,B.V,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.m,e,B.e,B.O,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d7p(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bW(B.bG,v,B.br,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b8.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eI:B.L,2,B.r,-1)
q.push(A.aA(e,A.p(e,A.Y(D.aBd[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bG(o,o,o,o),new A.bg(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d7q(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bW(B.bG,q,B.br,e,8,8)
a4=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aN(),a4,e,e,e,e,e,2,f.ayO("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d7r(f),e,e,e,!1,e,e,!1,e,!0,e,B.ab,e,e,e,e,e,e,e,e,e,e,e,B.dh,!0,B.a5,e,B.ao,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,M.vy,e,e,e)
m=A.a([],w)
for(l=D.DE.gdR(D.DE),l=l.gag(l);l.C();){k=l.gR(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eI:B.aW
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bG(o,o,o,o),e,e,e,B.a7),e,34,e,e,e,e,e,34)
h=g?B.c:B.aD
m.push(A.aA(e,A.x(A.a([j,B.bH,A.d(i,e,e,e,e,e,e,new A.G(!0,h,e,e,e,e,10,B.V,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.m,e,B.e,B.O,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d7s(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bW(B.bG,m,B.br,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,M.vy,e,e,e)
k=f.gom()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bm(!0,new A.cR(new A.aZ(0,1/0,0,a1.a.b*0.92),A.cj(A.a([D.fS1,B.af,d,B.aR,a0,B.X,a2,B.aC,D.fYd,B.P,v,B.aC,D.fSa,B.P,q,B.aC,a4,B.aC,p,B.P,m,B.aC,l,A.kT(e,9,""+B.k.V(f.gom().f),36,18,new C.d7t(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,M.vy,e,e,e),B.an,f.at7(D.a67,f.gom().r,new C.d7u(f),D.dB8),B.af,A.d("BORDER",e,e,e,e,e,e,M.vy,e,e,e),B.an,f.at7(D.a5s,f.gom().w,new C.d7v(f),D.dBe),B.af,A.d("COVER MATERIAL",e,e,e,e,e,e,M.vy,e,e,e),B.an,f.at7(D.a5o,f.gom().x,new C.d7x(f),D.dCJ),B.an,A.iO(e,B.b8,e,B.ag,e,new C.d7y(f),e,e,e,D.fMe,f.gom().z),B.by,A.bH(D.fQJ,e,new C.d7z(f,a6),A.bn(B.b8,e,e,e,e,B.oQ,e,e,new A.b9(A.n(16),B.a1),e,e,e))],w),e,e,A_.alX,e,e,B.ai,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aId.prototype={
a4(d,e){var w,v,u,t=new A.aE($.S().r,B.ah,null,null,A.a([],x.v))
t.D(new A.aY(0,0))
w=e.a
t.D(new A.aq(w,0))
v=e.b
t.D(new A.aq(w,v))
t.D(new A.aq(w/2,v-12))
t.D(new A.aq(0,v))
t.D(new A.bt())
u=A.K()
u.sar(D.c6P.aG(0,new A.a2(0,0,0+w,0+v)))
d.ae(t,u)},
aC(d){return!1}}
C.bj3.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.S()
w=A.K()
w.sar(D.c5P.aG(0,new A.a2(0,0,a2,a3)))
a4.au(new A.a2(0,0,a2,a3),w)
v=B.k.cL(a1/112)
u=new A.e4()
u.d_(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.aj()*20
l=56+u.aj()*40
k=D.d6W[u.aw(9)]
j=u.aw(14)
J.bq(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a2(n,j,n+m,j+l)
h=A.br(i,B.hv)
g=new A.ao(B.Q,B.N,B.T,B.U,B.S)
f=A.ar(k,B.c,0.12)
f.toString
e=A.ar(k,B.w,0.45)
e.toString
g.sar(new A.a9(B.a6,B.a9,B.x,A.a([f,k,e],w),d,d).aG(0,i))
a4.ap(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ao(B.Q,B.N,B.T,B.U,B.S)
e.r=E.kn.j(0.55).gp(0)
a4.au(new A.a2(g,j,h,j+2),e)
e=new A.ao(B.Q,B.N,B.T,B.U,B.S)
e.r=E.kn.j(0.4).gp(0)
a4.au(new A.a2(g,q,h,p),e)
t.restore()
j=u.aw(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ao(B.Q,B.N,B.T,B.U,B.S)
p.sar(D.c5a.aG(0,new A.a2(0,r,a2,q)))
a4.au(new A.a2(0,r,a2,q),p)
p=new A.ao(B.Q,B.N,B.T,B.U,B.S)
p.r=B.w.j(0.5).gp(0)
p.y=B.kU
a4.au(new A.a2(0,q,a2,q+14),p)}t=A.K()
t.r=D.bfs.j(0.72).gp(0)
a4.au(new A.a2(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.K()
a3.sar(new A.c_(B.A,0.5,B.x,d,0,A.a([D.bnB.j(0.22),B.L],w),d,d).aG(0,A.bX(new A.q(t,a1),a0)))
a4.N(new A.q(t,a1),a0,a3)},
aC(d){return!1}}
C.bbS.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cL(14,w*2,v*2.2,v*2,o,o,new A.l3(new A.o(A.ar(D.kM,D.bsD,w/4),o,new A.bG(B.a1,new A.ay(B.w.j(0.12),1,B.r,-1),B.a1,B.a1),B.LG,o,o,B.n),B.bi,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aLf,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.kn.j(0.6),o,o,new A.bg(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.m,o,B.qQ,B.i,0,B.p),B.f,o,o,new A.o(o,o,o,D.b3T,u,D.c6N,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.du,18)],v)
t=A.ap(o,A.b4(o,o,o,new C.aId(o),D.fc3),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aW4(p.y,r,L.iY,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aM(o,B.Z,!1,o,!0,B.t,o,A.aN(),p.r,o,o,o,o,o,2,A.bs(o,B.eH,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.iY.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ab,o,o,o,o,o,o,o,o,o,o,o,D.fBd,!0,B.a5,o,B.ao,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.iY.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.X,A.E(A.aM(o,B.Z,!1,o,!0,B.t,o,A.aN(),p.w,o,o,o,o,o,2,A.bs(o,B.eH,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.iY.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ab,o,o,o,o,o,o,o,o,o,o,o,D.frT,!0,B.a5,B.AB,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fB5,o,o,o),B.aw,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.iY.j(0.5),o,o,o,o,o,o,o,o,11,B.cF,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.A(A.a([A.E(A.p(o,o,B.f,D.G2.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fG,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.G2.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.G2.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.i,0,o,o),B.aC],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,L.iY.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.YO(A.cQ(A.a([A.cQ(o,o,o,o,o,o,o,o,o,D.fv4,B.a.aA(k,0,1)),A.cQ(o,o,o,o,o,o,o,o,o,o,B.a.b2(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,L.iY.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cg(A.x(n,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,o,o,B.ai)}s.push(A.E(n,1))
s.push(new A.D(B.i9,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,L.iY.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.p(o,A.bx(B.LG,new A.an(B.a0,o,B.ac,B.t,A.a([t,new A.D(D.bEY,A.x(s,B.al,o,B.e,B.i,0,B.p),o),A.ap(0,A.c3(o,new A.o(o,o,o,o,o,new A.a9(B.a6,B.a9,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bi),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.LG,v,D.c7k,B.n),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,o,o))
return new A.an(B.a0,o,B.ac,B.t,l,o)}}
C.alz.prototype={
S(){return new C.alA(new A.ez(0,$.aw()),new C.bSA(),new C.alS(),D.hz0,null,null)},
gd1(){return this.d}}
C.a1y.prototype={
a6(){return"_Step."+this.b}}
C.alA.prototype={
gCo(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bDH(w.c,6,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.MT(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gTO(){var w=this.ghb(0)
return w.gzg()==null?"Babu":B.a.i(w.gzg().b)},
Y(){var w,v=this
v.a3()
w=v.ghb(0).gzg()
w=w==null?null:w.c
v.r.b=w===D.op
w=v.pW(new C.bQW(v))
w.fX(0)
v.x!==$&&A.aQ()
v.x=w
v.a2o("Come closer, my children. I am "+v.gTO()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
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
w.bvC()},
a2o(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.de(D.akz,new C.bQQ(w))},
brZ(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.m(new C.bQZ(v))},
adJ(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
brR(){return this.b9O()},
b9O(){var w=this,v=w.gCo()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bQR(w))
w.a2o(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cz(B.m8,new C.bQS(w))},
cKA(){var w=this
w.m(new C.bQV(w))
w.a2o(w.gCo()[w.as].a)},
KW(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.acG)return
w=p.gCo()
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
p.m(new C.bQU(p,d,u,q))
p.a2o(u?D.dmu[q.aw(4)]+" "+w[p.as].d:D.dj5[q.aw(3)]+" "+w[p.as].d)},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCo()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bFV(t.at,t.ay,p)
t.m(new C.bQX(t,s))
t.a2o(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.BL(t.a.d,s),$async$kM)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.BM(r.d,r.c.a,"fire",t.at*10),$async$kM)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bQY())
w=1
break
case 4:++t.as
t.b9O()
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c5(v,D.Y1,new A.an(B.a0,v,B.ac,B.t,A.a([A.bR(0,new A.em(A.b4(v,v,v,new C.aW9(u,w.r,w.w,u),B.ay),v),0,0,0),A.bm(!0,A.x(A.a([w.cbk(0),B.b3,w.bR1()],t),B.m,v,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
cbk(d){var w,v,u,t=this,s=null,r=A.aH(s,s,s,s,B.PQ,s,s,s,new C.bQT(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCo().length;++w){v=t.as
if(w<v||t.Q===D.b0f)v=B.cN
else v=w===v?B.c:B.aW
u=new A.aP(4,4)
p.push(A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bg(u,u,u,u),s,s,B.n),s,7,s,D.bAk,s,s,s,22))}p=A.E(A.x(A.a([D.fJ_,A.A(p,B.m,s,B.e,B.i,0,s,s)],q),B.E,s,B.e,B.i,0,B.p),1)
v=A.n(14)
u=A.L(B.fx,B.r,1)
return new A.D(D.bG8,A.A(A.a([r,p,A.p(s,A.d("\ud83d\udd25 "+B.k.V(t.cy*100)+"%",s,s,s,s,s,s,B.ix,s,s,s),B.f,s,s,new A.o(B.aT,s,u,v,s,s,B.n),s,s,s,s,B.h9,s,s,s)],q),B.m,s,B.e,B.i,0,s,s),s)},
bR1(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghb(0).gzg()
if(h==null)w=1
else w=h.c===D.op?0:1
v=j.dx
u=j.db
t=D.qe.j(0.96)
s=A.n(22)
r=A.L(B.cN,B.r,3)
q=A.b4(i,i,i,new C.boC(w,i),B.ay)
p=A.d(j.Q===D.acG?j.gTO()+" asks":"Elder "+j.gTO(),i,i,i,i,i,i,D.aUH,i,i,i)
o=j.db
o=B.a.aA(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aA(B.c5,A.A(A.a([new A.a5(62,62,q,i),B.at,A.E(A.x(A.a([p,B.bH,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aUW,i,i,i)],n),B.E,i,B.e,B.i,0,B.p),1)],n),B.E,i,B.e,B.i,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbrY(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.at(j.a9P("Sit down by the fire",j.gbrQ()),i,i,i)
break
case 1:v=A.at(j.a9P("Ask me, Elder",j.gcKz()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCo()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.ay(D.lB,2.5,B.r,-1)
v.push(A.aA(i,A.p(i,A.d(u[m],i,i,i,i,i,i,D.aUS,B.K,i,i),B.f,i,D.ae8,new A.o(D.ajw,i,new A.bG(l,l,l,l),new A.bg(q,q,q,q),i,i,B.n),i,i,i,i,V.wg,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bQN(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bW(B.bG,v,B.br,i,8,8)
break
case 3:v=j.fr
u=v?B.ku:Ak.aps
u=A.Y(u,v?B.en:D.lB,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.l(i,i,v?B.en:D.lB,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCo().length?"Finish":"Next story"
v=A.A(A.a([u,B.ae,q,j.a9P(v,j.gqj(j))],n),B.m,i,B.e,B.i,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gCo().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aVa,i,i,i)],n)
u=j.cx
if(u>0){u=C.aQk(u)
q=C.aQk(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.ab6,i,i,i))}v.push(B.P)
v.push(j.a9P("Back to the games",new C.bQO(j)))
v=A.x(v,B.m,i,B.e,B.i,0,B.p)
break
default:v=i}return A.p(i,A.x(A.a([o,B.X,v],n),B.E,i,B.e,B.O,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.aCK,i,B.n),i,i,i,B.C6,B.bh,i,i,i)},
a9P(d,e){var w=null,v=A.n(16),u=A.L(B.cN,B.r,2)
return A.aA(w,A.p(w,A.d(d,w,w,w,w,w,w,A2.Kw,w,w,w),B.f,w,w,new A.o(D.lB,w,u,v,w,w,B.n),w,w,w,w,D.bDR,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.boC.prototype={
a4(d,e){Y.fUe(d,e.ej(B.I),e.gdz()*0.45,this.b,0,0.4)},
aC(d){return d.b!==this.b}}
C.aBd.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.bSA.prototype={}
C.ta.prototype={}
C.boD.prototype={}
C.alS.prototype={
Mp(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.ia2(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aW9.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.zf(l.d.Mp(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.bq(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bV(0,u)
l.cA3(d,j)
l.bPA(d,j)
l.cIl(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.bq(t.save())
t.translate(225,580)
d.pe(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.S()
q=A.K()
p=x.O
o=x.n
q.sar(A.w3(B.I,r,A.a([D.brq.j(0.55*s),F.Na.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.N(B.I,r,q)
t.restore()
n=A.a([new A.y(528,new C.bSs(l,d,j,i)),new A.y(540,new C.bSt(l,d,j,i)),new A.y(546,new C.bSu(l,d,j,i)),new A.y(574,new C.bSv(l,d,j,i)),new A.y(612,new C.bSw(l,d,j,i)),new A.y(650,new C.bSx(l,d,j,i)),new A.y(656,new C.bSy(l,d,j,i))],x.E)
B.d.aZ(n,new C.bSz())
for(m=0;m<7;++m)n[m].b.$0()
l.bGv(d,j,i)
l.bTb(d,j)
t.restore()
$.S()
t=A.K()
t.sar(A.w3(new A.q(w/2,v*0.6),e.ganX()*0.75,A.a([B.L,D.bfm],p),A.a([0.55,1],o),B.x,k,k,0))
d.au(new A.a2(0,0,0+w,0+v),t)},
aC(d){return d.c!==this.c||d.d!==this.d},
cA3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e4()
h.d_(3)
for(w=0;w<36;++w){v=h.aj()
u=h.aj()
t=Math.sin(e*(1.5+h.aj()*2)+w)
s=h.aj()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.S()
r=new A.ao(B.Q,B.N,B.T,B.U,B.S)
r.r=t.gp(0)
d.N(new A.q(v*450,20+u*300),0.8+s*1.1,r)}q=B.k.E(e,17)/1.2
if(q<1){p=new A.q(60+q*220,70+q*90)
d.ah(p,p.aK(0,D.elQ),C.iv(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.k.E(v+o*0.05,1)
s=-20+n*500
r=120+Math.sin(n*9+o)*14+o*12
m=Math.sin(u+o*2)
l=$.S()
k=A.a([],t)
l=new A.aE(l.r,B.ah,null,null,k)
m=r+m*4
k.push(new A.aY(s-6,m))
l.a8()
j=r-3
r=new A.c4(s-2,j,s,r)
k.push(r)
i=l.f
if(i!=null)r.ai(i)
l.a8()
s=new A.c4(s+2,j,s+6,m)
k.push(s)
r=l.f
if(r!=null)s.ai(r)
l.a8()
s=new A.ao(B.Q,B.N,B.T,B.U,B.S)
s.b=B.aa
s.c=1.6
s.r=D.bi4.gp(0)
s.d=B.bA
s.e=B.dS
d.ae(l,s)}},
bPA(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.azI[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bJ(new A.q(p,m),n*0.74,q*0.5)
k=Ac.yf.j(v)
$.S()
j=new A.ao(B.Q,B.N,B.T,B.U,B.S)
j.r=k.gp(0)
d.bY(l,j)
q=A.bJ(new A.q(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ao(B.Q,B.N,B.T,B.U,B.S)
m.r=Q.xV.j(u).gp(0)
d.bY(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.k.E(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ao(B.Q,B.N,B.T,B.U,B.S)
o.r=D.agV.j(0.16*(1-h)).gp(0)
d.N(new A.q(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cIl(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bD4(d,D.elM,0.9,e,D.huQ,!1,!1,D.b0c,1,!1)
w=$.S().r
v=x.v
u=new A.aE(w,B.ah,g,g,A.a([],v))
u.D(new A.aY(52,470))
u.D(new A.aq(50,486))
u.D(new A.aq(66,486))
u.D(new A.aq(64,470))
u.D(new A.bt())
t=A.K()
t.r=D.aiQ.gp(0)
d.ae(u,t)
C.bD4(d,D.elO,0.95,e,D.huL,!1,!1,D.b0d,1,!0)
t=new A.aE(w,B.ah,g,g,A.a([],v))
t.D(new A.aY(417,510))
t.D(new A.c4(431,532,445,510))
t.D(new A.aq(441,548))
t.D(new A.c4(431,553,421,548))
t.D(new A.bt())
u=A.K()
u.r=F.FK.gp(0)
d.ae(t,u)
u=A.bJ(D.elN,8,28)
t=A.K()
t.r=D.btI.gp(0)
d.bY(u,t)
C.bD4(d,new A.q(-30+B.k.E(e/26,1)*510,492),0.82,e,D.huR,!0,!1,D.WX,1,!1)
t=B.k.E(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.bY(A.bJ(new A.q(s+q*16,r-6),16,11),C.iv(D.aiG,1.8))
u=q<0
C.bD4(d,new A.q(s-q*6,r),0.62,e,D.huT,!1,u,D.WX,2.2,!1)
C.bD4(d,new A.q(s-q*32,r+4),0.58,e+1,D.huP,!1,u,D.WX,2.2,!1)
this.bVV(d,D.elr,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.E(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bJ(new A.q(o,n),8,11)
k=p===1
j=k?D.aiC:D.aje
i=new A.ao(B.Q,B.N,B.T,B.U,B.S)
i.r=j.gp(0)
d.bY(l,i)
l=k?D.aiC:D.aje
k=new A.ao(B.Q,B.N,B.T,B.U,B.S)
k.r=l.gp(0)
d.N(new A.q(o+5,n+(-3+m)),2.6,k)
k=new A.ao(B.Q,B.N,B.T,B.U,B.S)
k.b=B.aa
k.c=1
k.r=B.az.gp(0)
k.d=B.bA
k.e=B.dS
d.ah(new A.q(o+7.5,n+(-2+m)),new A.q(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ao(B.Q,B.N,B.T,B.U,B.S)
k.b=B.aa
k.c=1
k.r=B.az.gp(0)
k.d=B.bA
k.e=B.dS
d.ah(new A.q(o,n+4),new A.q(o,n+8),k)}h=e<f.f
u=A.bJ(D.a86,15+Math.sin(e*2)*0.8,40)
t=A.K()
t.r=D.ahh.gp(0)
d.bY(u,t)
u=A.bJ(D.a86.a7(0,new A.q(-14,h?-9:-2)),12,15)
t=A.K()
t.r=D.bk7.gp(0)
d.bY(u,t)
t=new A.aE(w,B.ah,g,g,A.a([],v))
t.D(new A.aY(130,592-(h?16:6)))
t.D(new A.aq(134,592-(h?22:9)))
t.D(new A.aq(138,592-(h?16:6)))
t.D(new A.bt())
u=A.K()
u.r=D.bkh.gp(0)
d.ae(t,u)
u=D.a86.a7(0,new A.q(-17,h?-9:-2))
t=A.K()
t.r=B.i7.gp(0)
d.N(u,1.1,t)
v=new A.aE(w,B.ah,g,g,A.a([],v))
v.D(new A.aY(168,590))
w=Math.sin(e*8)
v.D(new A.c4(180,588+w*(h?6:0),178,595))
d.ae(v,C.iv(D.ahh,3.5))},
bVV(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a7(0,new A.q(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.S()
m=new A.ao(B.Q,B.N,B.T,B.U,B.S)
m.b=B.aa
m.c=2
m.r=D.Yd.gp(0)
m.d=B.bA
m.e=B.dS
d.ah(new A.q(u+o,s),new A.q(u+(o+n*1.5),q),m)}w=A.bJ(k,17,32)
v=$.S()
r=A.K()
r.r=D.FI.gp(0)
d.bY(w,r)
r=A.bJ(k.a7(0,D.ekR),7,26)
w=A.ar(D.FI,B.w,0.12)
w.toString
q=A.K()
q.r=w.gp(0)
d.bY(r,q)
v=new A.aE(v.r,B.ah,null,null,A.a([],x.v))
v.D(new A.aY(u+13,t-3))
v.D(new A.aq(u+22,t-8+l))
v.D(new A.aq(u+20,t+l-0.5))
v.D(new A.aq(u+12,s))
v.D(new A.bt())
s=A.K()
s.r=D.FI.gp(0)
d.ae(v,s)
s=A.bJ(k.a7(0,new A.q(24,-7+l)),9,12)
v=A.K()
v.r=D.FI.gp(0)
d.bY(s,v)
v=-11+l
d.ah(k.a7(0,new A.q(22,v)),k.a7(0,new A.q(21,-17+l)),C.iv(D.Yd,1.6))
d.ah(k.a7(0,new A.q(26,v)),k.a7(0,new A.q(28,-16+l)),C.iv(D.Yd,1.6))
v=k.a7(0,new A.q(26,-8+l))
s=A.K()
s.r=B.w.gp(0)
d.N(v,0.9,s)
d.ah(k.a7(0,new A.q(26,-3+l)),k.a7(0,new A.q(26,1+l)),C.iv(D.bmX,1.4))
d.ah(k.a7(0,D.enQ),k.a7(0,new A.q(-19,-7+Math.sin(f*7)*2)),C.iv(D.FI,2.4))},
bT9(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bJ(new A.q(225+u*36,574+(t*13+6)),8,11)
$.S()
t=new A.ao(B.Q,B.N,B.T,B.U,B.S)
t.r=D.bsp.gp(0)
a6.bY(u,t)}}u=A.bJ(D.a89.a7(0,B.cA),17,52)
$.S()
t=A.K()
t.r=D.beV.gp(0)
a6.bY(u,t)
t=A.bJ(D.a89.a7(0,B.cA),12,44)
u=D.bis.j(0.6+0.3*Math.sin(a7*6))
s=A.K()
s.r=u.gp(0)
a6.bY(t,s)
for(r=0;r<3;++r){v=D.diz[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ao(B.Q,B.N,B.T,B.U,B.S)
o.b=B.aa
o.c=7
o.r=D.FW.gp(0)
o.d=B.bA
o.e=B.dS
a6.ah(new A.q(u+t*24,579+s*4),new A.q(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.Br.j(0.6)
n=new A.ao(B.Q,B.N,B.T,B.U,B.S)
n.b=B.aa
n.c=2
n.r=t.gp(0)
n.d=B.bA
n.e=B.dS
a6.ah(new A.q(u+o*24,579+(p*4-2)),new A.q(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.eYV,D.eZt,D.f_z,D.f_T,D.f_x]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.bpO,D.bmj,D.brR][k]
for(p=l.length,o=k===0,n=1-k*0.15,r=0;r<p;++r){h=l[r]
g=h.b
f=h.c
e=m*g*j*(0.9+0.12*Math.sin(u+f)+0.06*Math.sin(t+f*2))
d=Math.sin(s+f)*5*(e/m)
a0=225+h.a*n
a1=(12+8*a8.w)*g*j
g=$.S()
f=A.a([],q)
a2=new A.aE(g.r,B.ah,null,null,f)
f.push(new A.aY(a0-a1,578))
a2.a8()
g=a0+d*0.6
a3=new A.kP(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.ai(a4)
a2.a8()
g=new A.kP(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
f.push(g)
a3=a2.f
if(a3!=null)g.ai(a3)
a2.a8()
g=new A.bt()
f.push(g)
f=a2.f
if(f!=null)g.ai(f)
a2.a8()
g=new A.ao(B.Q,B.N,B.T,B.U,B.S)
g.r=i.j(o?0.9:0.95).gp(0)
a6.ae(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.k.E(a7*(0.35+B.o.E(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.E(w,3)
p=G.ajc.j((1-a5)*0.9)
$.S()
o=new A.ao(B.Q,B.N,B.T,B.U,B.S)
o.r=p.gp(0)
a6.N(new A.q(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.k.E(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.agV.j(0.1*(1-a5))
$.S()
p=new A.ao(B.Q,B.N,B.T,B.U,B.S)
p.r=q.gp(0)
a6.N(new A.q(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bTb(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.k.E(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.E(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.btS.j(0.18*p)
$.S()
n=new A.ao(B.Q,B.N,B.T,B.U,B.S)
n.r=o.gp(0)
d.N(new A.q(r,q),5,n)
n=new A.ao(B.Q,B.N,B.T,B.U,B.S)
n.r=D.bnG.j(0.9*p).gp(0)
d.N(new A.q(r,q),1.4,n)}},
c4T(d,e){switch(d){case 0:return e.b?D.huM:D.b_L
case 1:return e.b?D.huS:D.b_J
case 2:return D.b_I
case 3:return D.b_H
case 4:return D.b_K
default:return D.b_M}},
aD1(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
R0(d,e,f,g){var w,v=this,u=D.a5A[e],t=v.c4T(e,g),s=new C.boD(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a5A[e],l=e===0
m=B.k.F(((l?D.aL8:D.aLd).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a8d
s.as=D.E4
if(l){s.a=o?v.aD1(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.q(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.q(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.E4
if(g.a===3&&!g.d)s.e=m+Math.sin(r*6)*0.35*Math.max(0,1-r/1.8)
if(q){s.a=0.5
s.b=1
p=f*9
s.Q=new A.q(-4-Math.max(0,Math.sin(p))*7,-58)
p=s.as=new A.q(4+Math.max(0,Math.sin(p))*7,-58)}if(!q)p=!(o&&p.b<-50)
else p=!1
s.at=p}else if(e===1){s.b=0.35
if(o)s.r=Math.sin(f*2.4+1)*1.6
if(q){s.b=1
s.a=0.35+0.35*Math.max(0,Math.sin(f*13))
s.d=0.7
p=f*8
s.Q=new A.q(-4-Math.max(0,Math.sin(p))*7,-56)
s.as=new A.q(4+Math.max(0,Math.sin(p))*7,-56)
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.ekZ
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.emm
if(e===4)s.as=new A.q(36,-128+Math.sin(f*5)*4)}if(q){s.b=1
s.a=0.45+0.4*Math.max(0,Math.sin(f*12+e))
s.d=0.5
p=Math.max(0,Math.sin(f*9+e*1.3))*9
s.x=p
m=Math.max(0,Math.sin(f*10+e))*8
p=-56-p*0.3
s.Q=new A.q(-3-m,p)
s.as=new A.q(3+m,p)}else if(f<p){s.a=0.55
s.b=-0.1
s.c=1
s.Q=D.eoM
s.as=D.aLq}if(e===2&&g.x!=null&&f<g.y){s.a=v.aD1(f,5)
s.b=0.4
s.as=new A.q(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aD1(f,e*3)
s.b=0.5
s.c=0.4}}C.hxp(d,u.a,u.b*1.2,t,s,f,e,null)},
bGv(d,e,f){var w=new C.bSr(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gdd(d){return this.c}}
C.afD.prototype={
a6(){return"_Stand."+this.b}}
C.adC.prototype={}
C.lo.prototype={}
C.bRb.prototype={
bB6(d){var w,v,u,t,s=A.U(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
G3(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.aZ(r,new C.bRc())
return r},
ar9(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aMH(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.J)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
amm(d){var w,v,u=A.aS(x.N),t=d,s=0
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
gzg(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.aZ(w,new C.bRd(this))
return B.d.gH(w)}}
C.atT.prototype={}
C.zu.prototype={}
C.aku.prototype={
gBW(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.X(w,new C.bM_(),A.T(w).k("X<1>")).gJ(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ak(){var w=this
return A.I(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.MC.prototype={
gapc(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
if(t.gBW(0))s.push(t)}return s},
ak(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.J)(w),++s){r=w[s]
p.push(A.I(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.I(["id",this.a,"title",q,"qs",p],u,t)},
d0O(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gapc(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.J)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lo(B.a.i(s.a),p,B.d.cp(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.ba6.prototype={}
C.a9H.prototype={}
C.bhm.prototype={}
C.afB.prototype={}
C.ajN.prototype={
S(){return new C.ajO(B.bD,A.a([],x.cC),A.a([],x.e4),null,null)},
gd1(){return this.d}}
C.ajO.prototype={
gMI(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bDH(w.c,8,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gba9(){var w,v=this,u=v.e
if(u===$){w=v.pW(v.gcbm())
v.e!==$&&A.bE()
v.e=w
u=w}return u},
Y(){this.a3()
this.gba9().fX(0)},
t(){this.gba9().t()
this.bvx()},
fX(d){this.m(new C.bKd(this))},
cbn(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fH(0,v)
if(w.c!=null)w.m(new C.bK8())},
b8v(){var w,v,u,t=this,s=t.r
B.d.a9(s)
w=t.gMI()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bhm(u,(u+0.5)/v,w[t.x].b[u]))},
fH(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bt(w,new C.bKe())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c7J()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gMI()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.k.V((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.asG(v,0.8,B.cN)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.asG(m.cy,0.8,G.nh)
m.aZa("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.asG(q,0.88,D.lB)
p=m.gMI()[m.x]
n=p.c
if(u===n){m.aZa("The right gourd fell! It was "+p.b[n]+".")
return}}}},
asG(d,e,f){var w,v,u,t=new A.e4()
t.d_(B.k.V(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.aj()*3.141592653589793*2
w.push(new C.afB(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
aZa(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.Qb()}},
c7J(){var w=this
if(w.x+1>=w.gMI().length){w.Qb()
return}++w.x
w.b8v()},
Qb(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Qb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gMI().length
r=C.bFV(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bK6())
w=2
return A.b(C.BL(u.a.d,r),$async$Qb)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.BM(t.d,t.c.a,"catch",u.z),$async$Qb)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bK7())
return A.h(null,v)}})
return A.i($async$Qb,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.cbl()
else w=v.ch?v.cbo():A.at(new A.D(B.ex,A.x(A.a([D.aW5,B.P,D.fKE,B.X,D.fQO,B.dV,C.up("Play",v.geY(v),B.cN,B.hs,D.fw)],x.p),B.m,u,B.e,B.O,0,B.p),u),u,u,u)
return new C.tA("Calabash Catch",w,B.f4,u)},
cbo(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hG:B.Hs
p.push(A.Y(u,v?B.ax:B.bV,r,r,r,22))}p.push(B.b3)
v=s.x
u=s.gMI()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aUF,r,r,r))
p.push(B.be)
v=A.n(14)
p.push(A.p(r,A.d(""+s.z,r,r,r,r,r,r,B.ix,r,r,r),B.f,r,r,new A.o(B.bB,r,r,v,r,r,B.n),r,r,r,r,B.GF,r,r,r))
p=A.A(p,B.m,r,B.e,B.i,0,r,r)
v=A.n(18)
t=A.L(B.cN,B.r,3)
return A.x(A.a([new A.D(D.bBE,p,r),A.p(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fuX,B.K,r,r),B.f,r,r,new A.o(D.qe,r,t,v,r,r,B.n),r,r,r,B.f1,B.bh,r,r,1/0),B.an,A.E(A.cr(new C.bKc(s)),1)],q),B.m,r,B.e,B.i,0,B.p)},
cbl(){var w=this,v=null,u=A.at(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.pP,v,v,v),v,v,v),t=A.at(A.d(""+w.Q+" of "+w.gMI().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.Vm,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cj(A.a([D.bco,u,t,B.aR,new C.Ik(s,r,w.cx,v),B.aR,A.at(C.up("Back to the games",new C.bK5(w),B.cN,B.k4,D.fw),v,v,v)],x.p),v,v,B.ab,v,v,B.ai,!1)}}
C.bcx.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.S(),a3=A.K()
a3.sar(A.jv(B.I,new A.q(0,a0),D.d0U,G.aA_,B.x,e))
a4.au(new A.a2(0,0,a1,0+a0),a3)
a3=A.K()
a3.r=G.Ne.gp(0)
a4.N(new A.q(d*0.82,a0*0.16),22,a3)
a3=x.v
w=A.a([],a3)
v=new A.aE(a2.r,B.ah,e,e,w)
a2=a0*0.7
v.D(new A.aY(0,a2))
for(u=0;u<=d;u+=6){t=new A.aq(u,a2+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.ai(s)
v.a8()}v.D(new A.aq(d,a0))
v.D(new A.aq(0,a0))
a2=$.S()
w=A.K()
w.r=D.bjm.gp(0)
a4.ae(v,w)
r=d*0.12
a2=new A.aE(a2.r,B.ah,e,e,A.a([],a3))
w=a0*0.86
a2.D(new A.aY(r-26,w))
t=a0*0.5
s=a0*0.34
a2.D(new A.c4(r-14,t,r-10,s))
a2.D(new A.aq(r+10,s))
a2.D(new A.c4(r+14,t,r+26,w))
a2.D(new A.bt())
w=A.K()
w.r=D.ag_.gp(0)
a4.ae(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.cmH[q]
s=new A.ao(B.Q,B.N,B.T,B.U,B.S)
s.r=D.ag_.gp(0)
s.c=7
s.d=B.bA
a4.ah(new A.q(r,a2),new A.q(r+p*46,w),s)
s=new A.ao(B.Q,B.N,B.T,B.U,B.S)
s.r=D.afk.gp(0)
a4.N(new A.q(r+p*50,t),18,s)}a2=a0*0.88
w=A.K()
w.r=D.bkf.gp(0)
a4.au(new A.a2(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ao(B.Q,B.N,B.T,B.U,B.S)
t.r=D.ahz.gp(0)
t.c=2
a4.ah(new A.q(w,a1),new A.q(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.J)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.bJ(new A.q(u,s),12,54)
$.S()
l=new A.ao(B.Q,B.N,B.T,B.U,B.S)
l.r=D.lB.j(0.6).gp(0)
a4.bY(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.bq(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.S()
m=new A.ao(B.Q,B.N,B.T,B.U,B.S)
m.r=D.agF.gp(0)
a4.N(D.ekd,14,m)
m=new A.ao(B.Q,B.N,B.T,B.U,B.S)
m.r=D.boR.gp(0)
m.c=4
m.d=B.bA
a4.ah(D.eke,D.eln,m)
m=new A.ao(B.Q,B.N,B.T,B.U,B.S)
m.sar(new A.all(D.enx,46,D.d9m,B.Dn,B.x,e,e,0))
a4.N(B.I,34,m)
m=A.bJ(D.enE,8,12)
l=new A.ao(B.Q,B.N,B.T,B.U,B.S)
l.r=B.c.j(0.35).gp(0)
a4.bY(m,l)
k=new A.iF(new A.en(n.c,e,e,B.cH,e,e,e,e,e,e,D.fsO),B.K,B.bW,new A.jd(1),e,e,3,e,B.bX,e,B.ct)
k.o3(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.br(A.bJ(B.cL,m.gba(m)+8,l),B.fI)
l=new A.ao(B.Q,B.N,B.T,B.U,B.S)
l.r=D.qe.gp(0)
a4.ap(j,l)
l=new A.ao(B.Q,B.N,B.T,B.U,B.S)
l.r=D.lB.gp(0)
l.b=B.aa
l.c=1.5
a4.ap(j,l)
l=k.b
m=l.c
l=l.a.c
k.a4(a4,new A.q(-m/2,4-l.gba(l)/2))
t.restore()}i=a1.cy*d
a2=a1.dx
w=Math.sin(a2*4)
Y.Bb(a4,new A.q(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dJ,F.mK,!1,(w+1)/2)
h=A.bJ(new A.q(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aE($.S().r,B.ah,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.D(new A.aY(w,a2))
t=h.c
a3.D(new A.aq(t,a2))
s=h.d
a3.D(new A.aq(t-8,s))
a3.D(new A.c4(h.gbK().a,s+8,w+8,s))
a3.D(new A.bt())
m=A.K()
m.r=D.Z1.gp(0)
a4.ae(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ao(B.Q,B.N,B.T,B.U,B.S)
m.r=D.Br.gp(0)
m.c=1.4
a4.ah(new A.q(t,a2),new A.q(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.K()
s.r=G.nh.gp(0)
a4.au(new A.a2(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.K()
s.r=D.bjs.gp(0)
a4.bY(new A.a2(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.J)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ao(B.Q,B.N,B.T,B.U,B.S)
m.r=g.e.j(B.k.F(s,0,1)).gp(0)
a4.N(new A.q(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.fv(e,B.ct,e,e,e,A.cQ(e,e,e,e,e,e,e,e,e,A.l(e,e,B.cN.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,K.Dh,e,e),"+"+a2),B.a5,B.bW,e,B.dD,B.bX)
k.ef()
k.a4(a4,new A.q(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aC(d){return!0}}
C.Qv.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aBb(w.c,w.f,v),B.ay),s=A.n(10),r=A.L(B.bF,B.r,1.4)
return new A.a5(u+22,v,A.x(A.a([new A.a5(u,u,t,v),B.cU,A.p(v,A.d(w.d,v,1,B.a2,v,v,v,D.flt,v,v,v),B.f,v,v,new A.o(B.c,v,r,s,v,v,B.n),v,v,v,v,B.mQ,v,v,v)],x.p),B.m,v,B.e,B.O,0,B.p),v)},
gZ(d){return this.e}}
C.aBb.prototype={
a4(d,e){var w=e.ej(B.I),v=e.gdz(),u=this.c?0.8:0
return Y.fUe(d,w,v*0.44,this.b,0,u)},
aC(d){return d.b!==this.b||d.c!==this.c}}
C.azG.prototype={}
C.auu.prototype={
S(){return new C.auv(A.U(x.S,x.cq),null,null)},
gd1(){return this.d}}
C.auv.prototype={
gkR(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hCC(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gaF4(){var w=this.z
return w===$?this.z=this.Xe(0):w},
gj0(){var w,v=this.Q
if(v===$){w=this.gkR()
w=w.length===0?0:w[0].c.length
v=this.Q=A.bZ(w,-1,!1,x.S)}return v},
Xe(d){var w,v,u,t,s=this.gkR()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.azG(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.azG(v[t],u[t],-1))
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
B.d.a9(u.a)
u=u.got()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dV$.a.a9(0)
v.qA()}this.bw_()},
cQH(d,e){var w,v,u,t,s,r=this
if(d>=r.gj0().length||r.gj0()[d]!==-1||B.d.q(r.gj0(),e))return
w=r.gaF4()[e]
v=r.gkR()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.cpu(r,e,w,v))
A.cz(B.lH,new C.cpv(r))
return}++r.r
u=A.bl(null,B.hD,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.m(new C.cpw(r,d,e,w,v))
u.cq(0)},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkR()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cG(n,0,new C.cpx())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.cpy(t,r))
w=5
return A.b(C.BL(t.a.d,r),$async$kM)
case 5:t.x=f
o=t.a
w=6
return A.b(C.BM(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kM)
case 6:t.ch=f
if(t.c!=null)t.m(new C.cpz())
w=1
break
case 4:for(o=t.as,n=new A.dq(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eN$
p.b=!1
B.d.a9(p.a)
p=p.got()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dV$.a.a9(0)
q.qA()}o.a9(0)
t.m(new C.cpA(t))
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.at(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.pP,p,p,p),p,p,p)
v=r.f
v=A.at(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.Vm,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tA(q,A.cj(A.a([D.aeS,w,v,B.aR,new C.Ik(u,t,r.ch,p),B.aR,A.at(C.up("Back to the games",new C.cpq(d),B.cN,B.k4,D.fw),p,p,p)],x.p),p,p,B.ab,p,p,B.ai,!1),B.f4,p)}w=r.gkR()
v=r.e
s=w[v]
return new C.tA(q,new A.D(B.up,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aUA,B.K,p,p),A.E(A.cr(new C.cpr(r,s)),1)],x.p),B.m,p,B.e,B.i,0,B.p),p),B.f4,p)}}
C.bc0.prototype={
a4(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.X(b2,new C.cPu(),A.T(b2).k("X<1>")).gJ(0),b4=a9.b,b5=b4.a7(0,B.Jo)
$.S()
w=A.K()
w.r=D.lC.j(0.18+0.1*b3).gp(0)
b6.N(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a7(0,D.ek0)
u=A.K()
u.r=B.og.j(0.5).gp(0)
u.c=10
u.d=B.bA
b6.ah(new A.q(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.dW.aE(0,B.k.F(b2[p],0,1))
l=$.S().r
k=A.a([],s)
j=new A.aE(l,B.ah,b0,b0,k)
k.push(new A.aY(u,b4))
j.a8()
o=new A.c4((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.ai(n)
j.a8()
if(m<1)for(o=new A.aE(l,j.b,j.c,b0,A.bo(k,!0,r)),n=A.a([],q),i=new A.rs(o,!1,n);i.C();){h=i.c
if(h===0||i.f)A.bi(A.jD(b1));--h
g=new A.BJ(i,h)
f=0
for(;;){i.ij()
e=n[h].b
e===$&&A.c()
if(!(f<e.a.length()))break
i.ij()
e=n[h].b
e===$&&A.c()
e=Math.min(e.a.length(),f+7)
d=o.b
a0=A.a([],s)
$.S()
a1=new A.ao(B.Q,B.N,B.T,B.U,B.S)
a1.r=B.aW.gp(0)
a1.b=B.aa
a1.c=3
b6.ae(new A.aE(l,d,b0,new A.cu([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aE(l,j.b,j.c,b0,A.bo(k,!0,r)),n=A.a([],q),k=new A.rs(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bi(A.jD(b1));--a0
k.ij()
a1=n[a0].b
a1===$&&A.c()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.S()
a4=new A.ao(B.Q,B.N,B.T,B.U,B.S)
a4.r=D.G8.gp(0)
a4.b=B.aa
a4.c=h
a4.d=B.bA
b6.ae(new A.aE(l,a2,b0,new A.cu([new A.BJ(k,a0),0,a1*m,!0]),a3),a4)
k.ij()
a4=n[a0].b
a4===$&&A.c()
a4=a4.a.length()
k.ij()
a5=n[a0].Ho(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bJ(new A.q(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ao(B.Q,B.N,B.T,B.U,B.S)
a3.r=B.b9.gp(0)
b6.bY(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.iF(D.fkX,B.a5,B.bW,new A.jd(1),b0,b0,b0,b0,B.bX,b0,B.ct)
a8.ef()
a8.a4(b6,new A.q(w*(0.15+p*0.14),b2-B.o.E(p,3)*14))}},
aC(d){return!0}}
C.ays.prototype={
S(){return new C.ayt(A.aS(x.S))},
gd1(){return this.d}}
C.ayt.prototype={
gkR(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hDx(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
Y(){this.a3()
this.b8E()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a2()},
b8E(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.de(B.rI,new C.cEs(this))},
bpz(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkR()[v.e]
if(w.e[d]===w.b)v.m(new C.cEA(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cEB(v,d))
A.cz(B.iJ,new C.cEC(v))}},
cW9(){var w=this
if(!w.as&&w.f<w.gkR()[w.e].d.length)w.m(new C.cED(w))},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.gkR()
w=r+1>=q.length?3:4
break
case 3:r=t.ch
if(r!=null)r.a1(0)
r=t.w
q=r===q.length?15:0
s=r*6+q
t.m(new C.cEE(t,s))
w=5
return A.b(C.BL(t.a.d,s),$async$kM)
case 5:t.y=f
q=t.a
w=6
return A.b(C.BM(q.d,q.c.a,"who",t.r),$async$kM)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cEF())
w=1
break
case 4:t.m(new C.cEG(t))
t.b8E()
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.at(A.d(""+a0.w+" of "+a0.gkR().length+" guessed",a2,a2,a2,a2,a2,a2,B.pP,a2,a2,a2),a2,a2,a2)
v=A.at(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.Vm,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tA(a1,A.cj(A.a([D.bcA,w,v,B.aR,new C.Ik(u,t,a0.ax,a2),B.aR,A.at(C.up("Back to the games",new C.cEu(a3),B.cN,B.k4,D.fw),a2,a2,a2)],x.p),a2,a2,B.ab,a2,a2,B.ai,!1),B.f4,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkR()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.KE,B.K,a2,a2),B.X,A.at(A.ly(new C.cEv(a0,r),a2,B.b6,B.hD,a2,a2,new A.bp(a2,s,u),x.i),a2,a2,a2),B.aC],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.ay(B.cN,2,B.r,-1)
k=o+1
w.push(new A.r0(new A.bp(0,1,u),new C.cEw(),A.p(a2,new A.c7(B.aM,B.e,B.i,B.m,a2,B.p,a2,0,A.a([new A.qB(A.d(""+k,a2,a2,a2,a2,a2,a2,B.nT,a2,a2,a2),D.lB,a2,12,a2),B.at,new A.by(1,B.bc,A.d(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fxw,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.o(D.qe,a2,new A.bG(l,l,l,l),new A.bg(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.cv,B.bh,a2,a2,a2),B.b6,B.iJ,a2,new A.bP("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.at(A.bM(!1,D.fYD,a2,a2,!0,a2,a2,a2,a0.gcW8(),a2,a2),a2,a2,a2))
w.push(B.P)
if(a0.as){u=D.lC.j(0.2)
q=A.n(16)
p=A.L(D.lC,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fB,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.p(a2,A.x(A.a([m,B.X,C.up(v,a0.gqj(a0),B.cN,B.jF,D.fw)],t),B.m,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.o(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bE,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dt:B.cN.j(0.2)
g=new A.aP(16,16)
l=new A.ay(n.q(0,o)?B.ff:B.cN,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bV:B.c
d=n.q(0,o)?B.x8:a2
t.push(new A.r0(new A.bp(0,i,u),new C.cEx(),A.aA(a2,A.p(a2,A.d(f,a2,a2,a2,a2,a2,a2,new A.G(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.ae0,new A.o(h,a2,new A.bG(l,l,l,l),new A.bg(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jm,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cEy(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b6,B.ma,a2,new A.bP("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bW(B.fM,t,B.br,a2,10,10))}return new C.tA(a1,A.cj(w,a2,a2,B.aly,a2,a2,B.ai,!1),B.f4,a2)}}
C.azr.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.aGD.prototype={
aY(){this.b5()
this.b4()
this.dN()},
t(){var w=this,v=w.b9$
if(v!=null)v.a5(0,w.gdG())
w.b9$=null
w.a2()}}
C.afp.prototype={
aqI(d){},
are(){var w=this,v=w.pW(new C.f5B(w))
v.fX(0)
w.LP$!==$&&A.aQ()
w.LP$=v}}
C.aKp.prototype={
gbm0(d){var w=this.c
return B.a.aA(w,0,Math.min(this.d,w.length))},
VO(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.de(D.akz,new C.ffK(w))},
brX(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.alI.prototype={
S(){return new C.alJ(new C.alS(),A.a([],x.t),new A.ez(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.alJ.prototype={
gMG(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bDH(w.c,10,w.e,!0)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.MT(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gqr(){var w=this.r
return w===$?this.r=new C.aKp(new C.bRY(this)):w},
gapy(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gMG()[v].c)u.push(1)
return u.length},
gblj(){var w=this.ghb(0)
return w.gzg()==null?"Elder":B.a.i(w.gzg().b)},
Y(){this.a3()
this.are()},
t(){var w,v=this
v.gqr().t()
v.f.t()
w=v.LP$
w===$&&A.c()
w.t()
w=v.q4$
w.T$=$.aw()
w.P$=0
v.bvF()},
cKM(){var w=this
w.m(new C.bRV(w))
w.gqr().VO(w.gMG()[w.x].a)},
KW(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqr()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.q4$.a
v.ax=u
v.ay=u+1
v.m(new C.bRT())
A.cz(B.hD,new C.bRU(v))},
bpv(){var w=this.gapy(0)/this.gMG().length*100
if(w>=90)return D.eVL
if(w>=75)return D.eTN
if(w>=60)return D.eKu
if(w>=45)return D.eNT
return D.eEU},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cth()
w=A.bR(0,new A.em(A.b4(m,m,m,new C.bsE(n,n.q4$),B.ay),m),0,0,0)
if(!n.Q){v=D.qe.j(0.96)
u=A.n(20)
t=A.L(B.cN,B.r,3)
u=A.p(m,A.x(A.a([A.d("Elder "+n.gblj()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aVu,B.K,m,m),B.X,C.up("Start the test",n.gBM(),B.cN,B.j2,D.fw)],x.p),B.m,m,B.e,B.O,0,B.p),B.f,m,m,new A.o(v,m,t,u,m,m,B.n),m,m,m,m,B.bE,m,m,m)
v=u}else{v=n.x
u=n.gMG()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aVw,m,m,m)
if(n.Q){t=n.gqr()
t=t.d<t.c.length}else t=!1
if(t)u=D.fdt
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.ay(D.Br,4,B.r,-1)
s.push(A.aA(m,A.p(m,A.d(q[r],m,m,m,m,m,m,D.foH,B.K,m,m),B.f,m,D.ae0,new A.o(D.bfr,m,new A.bG(o,o,o,o),new A.bg(p,p,p,p),m,m,B.n),m,m,m,m,B.O0,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bRW(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bW(B.fM,s,B.br,new A.bP("o"+t,x.W),8,8)}u=A.x(A.a([v,B.an,A.p4(u,B.mL,A.qu(),B.b6,B.b6,A.Lt())],x.p),B.m,m,B.e,B.O,0,B.p)
v=u}return new C.tA("Village School",new A.an(B.a0,m,B.ac,B.t,A.a([w,A.ap(10,v,m,m,10,10,m,m)],x.p),m),B.f4,m)},
cth(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bpv(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gMG()[v].c)g.push(v)
u=A.n(22)
t=A.L(B.cN,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.ft6,B.K,i,i)
r=A.d("Signed by Elder "+j.gblj(),i,i,i,i,i,i,D.frL,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fwS,i,i,i),D.ewP],q)
o=A.d(h.b,i,i,i,i,i,i,D.fyJ,i,i,i)
n=j.gapy(0)
m=j.gMG()
u=A.p(i,A.x(A.a([D.fJW,B.aw,s,r,B.X,new A.an(B.A,i,B.ac,B.t,p,i),o,B.an,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.ab6,i,i,i),B.P,D.ash],q),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(D.qe,i,t,u,i,i,B.n),i,i,i,i,B.fr,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aC,new C.Ik(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aR,D.fZH,B.P],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.J)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.ay(B.bB,1,B.r,-1)
p=m[v]
u.push(A.p(i,A.x(A.a([A.d(p.a,i,i,i,i,i,i,B.fW,i,i,i),B.aw,A.d("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fug,i,i,i),A.d(p.d,i,i,i,i,i,i,D.fwu,i,i,i)],q),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.dt,i,new A.bG(k,k,k,k),new A.bg(r,r,r,r),i,i,B.n),i,i,i,B.cv,B.bh,i,i,i))}B.d.v(s,u)}s.push(B.aC)
s.push(A.at(C.up("Back to the games",new C.bRP(j),B.cN,B.k4,D.fw),i,i,i))
return new C.tA("Village School",A.cj(s,i,i,B.bR,i,i,B.ai,!1),B.f4,i)}}
C.bsE.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.q4$.a
a0.zf(e.f.Mp(a1))
w=C.haw(a1)
v=a0.c
J.bq(v.save())
v.translate(w.a,w.b)
a0.bV(0,w.c)
if(e.Q){u=e.gqr()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.cWd[s]-6
$.S()
r=new A.ao(B.Q,B.N,B.T,B.U,B.S)
r.r=D.FW.gp(0)
a0.au(new A.a2(u,340,u+12,450),r)}u=A.br(D.a97.cr(10),B.hY)
$.S()
r=A.K()
r.r=D.Br.gp(0)
a0.ap(u,r)
r=A.br(D.a97,B.hN)
u=A.K()
u.sar(A.jv(new A.q(30,96),new A.q(420,346),D.deD,f,B.x,f))
a0.ap(r,u)
q=new A.e4()
q.d_(2)
for(p=0;p<18;++p){u=q.aj()
r=q.aj()
o=q.aj()
o=A.bJ(new A.q(30+u*390,96+r*250),8+q.aj()*14,30+o*60)
r=new A.ao(B.Q,B.N,B.T,B.U,B.S)
r.r=B.c.j(0.025).gp(0)
a0.bY(o,r)}u=A.K()
u.r=K.ain.gp(0)
a0.au(new A.a2(30,354,420,362),u)
u=A.K()
u.r=B.aQ.gp(0)
a0.au(D.f4R,u)
u=A.K()
u.r=B.bN.gp(0)
a0.au(D.f4V,u)
u=A.br(D.f4L,B.hM)
r=A.K()
r.r=D.Z1.gp(0)
a0.ap(u,r)
n=B.k.F((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqr().gbm0(0)
m=A.fv(f,B.ct,f,7,f,A.cQ(f,f,f,f,f,f,f,f,f,D.fAY,u+(t?"|":"")),B.a5,B.bW,f,B.dD,B.bX)
m.o3(346)
J.bq(v.save())
u=A.i_(D.a97)
r=$.mz()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.i_(new A.a2(30+390*n,96,420,346)),r[1],!0)
m.a4(a0,new A.q(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.br(new A.a2(u,r,u+40,r+90),B.fI)
u=A.K()
u.r=D.buD.gp(0)
a0.ap(r,u)}}else{m=A.fv(f,B.ct,f,f,f,D.flc,B.K,B.bW,f,B.dD,B.bX)
m.o3(340)
m.a4(a0,new A.q(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.k.E(u+p/8,1)
o=B.o.E(e.gqr().d*9,310)
k=Math.sin(p+r)
j=new A.ao(B.Q,B.N,B.T,B.U,B.S)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.N(new A.q(70+o+k*6,166+l*70),1.6,j)}u=e.ghb(0).gzg()
i=(u==null?f:u.c)===D.op?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.f5C(d,a0,i,t,h,D.ela)),new A.y(520,new C.f5D(a0,d,t)),new A.y(575,new C.f5E(a0,d,t)),new A.y(585,new C.f5F(this,a0,d,t)),new A.y(615,new C.f5G(this,t,a0,d,h))],x.E)
B.d.aZ(g,new C.f5H())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
cbp(d,e){var w,v,u,t,s,r,q,p=$.S(),o=A.a([],x.v),n=new A.aE(p.r,B.ah,null,null,o)
for(p=d.a,w=d.b,v=e*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?e:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new A.aY(r,q)
o.push(r)
q=n.f
if(q!=null)r.ai(q)
n.a8()}else{r=new A.aq(r,q)
o.push(r)
q=n.f
if(q!=null)r.ai(q)
n.a8()}}n.D(new A.bt())
return n},
aC(d){return!1}}
C.alG.prototype={
S(){return new C.alH(new C.alS(),A.U(x.S,x.i),new A.ez(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.alH.prototype={
gkR(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hCq(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gj0(){var w=this.z
return w===$?this.z=this.FC(0):w},
gaLh(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.FC(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.cp(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.FC(0):r).length);++v}s.Q=w
r=w}return r},
FC(d){var w,v,u,t,s=this.gkR()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e2(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e4()
u.d_(this.a.e+d*7)
B.d.e0(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.f6(u,new C.bRB())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Y(){this.a3()
this.are()},
t(){var w,v=this
v.e.t()
w=v.LP$
w===$&&A.c()
w.t()
w=v.q4$
w.T$=$.aw()
w.P$=0
v.bvE()},
aqI(d){var w,v,u,t,s,r=this,q=r.gj0().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.cp(u===$?r.z=r.FC(0):u,v)
s=r.gaLh()
s[v]=s[v]+(450*(t+0.5)/q-r.gaLh()[v])*Math.min(1,w)}},
d0t(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj0().length)return
w=v.y
if(w===-1){v.m(new C.bRM(v,d))
return}if(w===d){v.m(new C.bRN(v))
return}v.m(new C.bRO(v,B.d.cp(v.gj0(),v.y),d,B.d.cp(v.gj0(),d)))},
cLt(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.FC(0):u).length))break
t=s.gkR()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.FC(0):u)[v]]===v);++v}s.m(new C.bRH(s,B.d.cM(w,new C.bRI())))},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkR().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bRJ(t,s))
w=5
return A.b(C.BL(t.a.d,s),$async$kM)
case 5:t.x=f
q=t.a
w=6
return A.b(C.BM(q.d,q.c.a,"lineup",t.r*10),$async$kM)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bRK())
w=1
break
case 4:t.m(new C.bRL(t))
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.at(A.d(""+l.r+" of "+l.gkR().length+" lines right",k,k,k,k,k,k,B.pP,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tA("Line Up",A.cj(A.a([D.aeS,w,B.aR,new C.Ik(v,u,l.ch,k),B.aR,A.at(C.up("Back to the games",new C.bRD(d),B.cN,B.k4,D.fw),k,k,k)],x.p),k,k,B.ab,k,k,B.ai,!1),B.f4,k)}w=A.a([],x.t)
for(t=0;v=l.gkR(),t<v[l.f].d.length;++t)w.push(t)
B.d.aZ(w,new C.bRE(l))
u=A.bR(0,A.cr(new C.bRF(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aVw,k,k,k)
s=v[s]
q=x.p
s=A.ap(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.ftx,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fvJ,B.K,k,k)],q),B.m,k,B.e,B.i,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.n(16)
n=l.ax
m=A.L(n?D.lC:G.nh,B.r,2)
r.push(A.p(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bRG(l),x.cM).aN(0,", then ")+".",k,k,k,k,k,k,D.fxT,k,k,k),B.f,k,k,new A.o(p,k,m,o,k,k,B.n),k,k,k,B.d3,B.bh,k,k,1/0))}if(!l.at)r.push(C.up("That is my line!",l.gcLs(l),B.cN,B.hF,D.fw))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.up(w,l.gqj(l),B.cN,B.jF,D.fw))}return new C.tA("Line Up",new A.an(B.a0,k,B.ac,B.t,A.a([u,s,A.ap(12,A.x(r,B.m,k,B.e,B.O,0,B.p),k,k,12,12,k,k)],q),k),B.f4,k)}}
C.bjb.prototype={
a4(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.q4$.a
c7.zf(c5.e.Mp(c8))
w=C.haw(c8)
v=c7.c
J.bq(v.save())
v.translate(w.a,w.b)
c7.bV(0,w.c)
u=c5.gj0().length
t=$.S().r
s=x.v
r=new A.aE(t,B.ah,c4,c4,A.a([],s))
r.D(new A.aY(10,470))
r.D(new A.c4(225,500,440,470))
q=A.K()
q.r=D.Z1.gp(0)
q.b=B.aa
q.c=4
c7.ae(r,q)
for(q=c6*3,p=0;p<12;++p){o=30+p*36
n=470+30*Math.sin(3.141592653589793*(o-10)/430)*0.95
m=Math.sin(q+p)
l=A.a([],s)
k=new A.aE(t,B.ah,c4,c4,l)
l.push(new A.aY(o,n))
k.a8()
m=new A.aq(o+16,n+6+m*3)
l.push(m)
j=k.f
if(j!=null)m.ai(j)
k.a8()
m=new A.aq(o,n+20)
l.push(m)
j=k.f
if(j!=null)m.ai(j)
k.a8()
m=new A.bt()
l.push(m)
l=k.f
if(l!=null)m.ai(l)
k.a8()
m=new A.ao(B.Q,B.N,B.T,B.U,B.S)
m.r=[B.cN,G.nh,D.lC,B.aJ][B.o.E(p,4)].gp(0)
c7.ae(k,m)}this.b0O(c7,"OLDEST",D.emb,B.cN)
this.b0O(c7,"YOUNGEST",D.elD,B.b9)
t=A.br(D.f4F,B.fI)
s=A.K()
s.r=D.FW.gp(0)
c7.ap(t,s)
s=A.br(D.f4E,B.hN)
t=A.K()
t.r=D.Br.gp(0)
c7.ap(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.aZ(t,new C.dqF())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.J)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.cp(a1===$?c5.z=c5.FC(0):a1,f)
o=c5.gaLh()[f]
a3=c5.y===f
a4=a3?Math.abs(Math.sin(j))*10:0
a5=k.h(0,f)
if(a5!=null&&c6<a5)a4+=Math.sin((1-(a5-c6)/0.5)*3.141592653589793)*14
a6=c5.at&&c5.gkR()[c5.f].e[f]===a2
a7=c5.at&&!c5.ax&&!a6
a8=c5.gkR()
a9=a8[c5.f].c
b0=a9.length>f?a9[f]:f
if(l)b1=c5.at&&a6
else b1=!0
b2=Math.max(0,Math.sin(m+f))
if(a3){$.S()
a9=new A.ao(B.Q,B.N,B.T,B.U,B.S)
a9.r=B.cN.j(0.22+0.1*Math.sin(e)).gp(0)
c7.N(new A.q(o,520),54,a9)}a9=D.din[B.o.E(b0,6)]
if(b1)b3=1
else b3=a7?-0.4:0.35
if(b1)b4=0.4+0.4*b2
else b4=h&&a7?0.5:0
if(h&&a7)b5=1
else b5=a3?0.6:0
b6=b1?0.5:0
b7=a7?Math.sin(d)*0.5:0
b8=b1?a4+b2*8:a4
if(b1)b9=new A.q(-3-b2*8,-56)
else b9=a3?D.eoi:c4
if(b1)c0=new A.q(3+b2*8,-56)
else if(h&&a7)c0=D.aLq
else c0=a3?new A.q(30,-104+Math.sin(e)*5):c4
C.Sl(c7,new A.q(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.Jq,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.iF(new A.en(a8,c4,c4,B.cH,c4,c4,c4,c4,c4,c4,D.frh),B.a5,B.bW,new A.jd(1),"\u2026",c4,1,c4,B.bX,c4,B.ct)
c1.o3(q)
c2=A.br(A.bJ(new A.q(o,650),24,c1.b.c+16),B.fI)
$.S()
a8=new A.ao(B.Q,B.N,B.T,B.U,B.S)
if(a6)a9=B.is
else a9=a7?B.rD:D.qe
a8.r=a9.gp(0)
c7.ap(c2,a8)
a8=new A.ao(B.Q,B.N,B.T,B.U,B.S)
if(a6)a9=D.lC
else a9=a7?G.nh:D.lB
a8.r=a9.gp(0)
a8.b=B.aa
a8.c=2
c7.ap(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a4(c7,new A.q(o-a9/2,650-a8.gba(a8)/2))
c3=new A.iF(new A.en(""+(a2+1),c4,c4,B.cH,c4,c4,c4,c4,c4,c4,D.frA),B.a5,B.bW,new A.jd(1),c4,c4,c4,c4,B.bX,c4,B.ct)
c3.ef()
c3.a4(c7,new A.q(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.k.E(p*53+Math.sin(c5+p)*20,450)
q=B.k.E(t+p*37,420)
J.bq(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bJ(B.I,4,8)
$.S()
m=new A.ao(B.Q,B.N,B.T,B.U,B.S)
m.r=[B.cN,G.nh,D.lC,B.aJ,B.c][B.o.E(p,5)].gp(0)
c7.au(q,m)
v.restore()}v.restore()},
b0O(d,e,f,g){var w,v,u=null,t=A.fv(u,B.ct,u,u,u,A.cQ(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,K.Dh,u,u),e),B.a5,B.bW,u,B.dD,B.bX)
t.ef()
w=t.b
v=w.c
w=w.a.c
t.a4(d,f.aK(0,new A.q(v/2,w.gba(w)/2)))},
aC(d){return!1}}
C.a1R.prototype={
a6(){return"_Trip."+this.b}}
C.alC.prototype={
S(){return new C.alD(D.X1,new A.ez(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.alD.prototype={
gDl(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bDH(w.c,8,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.MT(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gqr(){var w=this.f
return w===$?this.f=new C.aKp(new C.bRn(this)):w},
gTO(){var w=this.ghb(0)
return w.gzg()==null?"Grandma":B.a.i(w.gzg().b)},
Y(){this.a3()
this.are()},
t(){var w,v=this
v.gqr().t()
w=v.LP$
w===$&&A.c()
w.t()
w=v.q4$
w.T$=$.aw()
w.P$=0
v.bvD()},
aqI(d){var w,v,u,t=this
if(t.r!==D.acQ)return
w=B.dy.aE(0,B.k.F((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDl()
if(v+1>=u.length){t.r=D.acR
t.WK()}else{++t.w
t.ay=!1
t.r=D.X2
t.gqr().VO(u[t.w].a)}if(t.c!=null)t.m(new C.bRl())}},
WK(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$WK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqr().VO("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDl().length
r=C.bFV(t,u.z,s)
u.as=r
w=2
return A.b(C.BL(u.a.d,r),$async$WK)
case 2:u.at=e
s=u.a
w=3
return A.b(C.BM(s.d,s.c.a,"journey",u.x*10),$async$WK)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bRf())
return A.h(null,v)}})
return A.i($async$WK,v)},
bqP(){this.aTW()},
aTW(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.acQ
if(w.c!=null)w.m(new C.bRg())},
KW(d){var w,v,u,t,s=this
if(s.r!==D.X2)return
w=s.gDl()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bRk(s,d,v))
u=s.gqr()
t=s.w
u.VO(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cQG(){if(this.r!==D.B0)return
this.aTW()},
B(d){var w,v,u,t=this,s=null,r=A.bR(0,new A.em(A.b4(s,s,s,new C.biC(t,t.q4$),B.ay),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDl().length;++w){v=t.w
if(w<v||t.r===D.acR)v=B.cN
else v=w===v?B.c:B.aW
u=new A.aP(4,4)
p.push(new A.by(1,B.bc,A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bg(u,u,u,u),s,s,B.n),s,7,s,B.yI,s,s,s,s),s))}p.push(B.bn)
p.push(D.fLx)
return new C.tA("Safari Journey",new A.an(B.a0,s,B.ac,B.t,A.a([r,A.ap(s,A.A(p,B.m,s,B.e,B.i,0,s,s),s,s,12,12,2,s),A.ap(10,t.ckW(),s,s,10,10,s,s)],q),s),B.f4,s)},
ckW(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bRj(o),l=D.qe.j(0.96),k=A.n(22),j=A.L(B.cN,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gTO()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aVu,B.K,n,n),B.X,C.up("Start the journey",o.gbqO(),B.cN,D.bPj,D.fw)],x.p),B.m,n,B.e,B.O,0,B.p)
break
case 3:w=D.bc8
break
case 1:w=o.w
v=o.gDl()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.ay(D.lB,2.5,B.r,-1)
t.push(A.aA(n,A.p(n,A.d(r[s],n,n,n,n,n,n,D.aUS,B.K,n,n),B.f,n,D.ae8,new A.o(D.ajw,n,new A.bG(p,p,p,p),new A.bg(q,q,q,q),n,n,B.n),n,n,n,n,V.wg,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bRh(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.P,A.bW(B.bG,t,B.br,n,8,8)],u),B.E,n,B.e,B.O,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDl().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.P,new A.bL(B.a9,n,n,C.up(v,o.gcQF(),B.cN,B.jF,D.fw),n)],x.p),B.E,n,B.e,B.O,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gTO()),B.P,A.d(""+o.x+" of "+o.gDl().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aVa,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aQk(v)
u=C.aQk(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.ab6,n,n,n))}w.push(B.P)
w.push(A.at(C.up("Back to the games",new C.bRi(o),B.cN,B.k4,D.fw),n,n,n))
w=A.x(w,B.E,n,B.e,B.O,0,B.p)
break
default:w=n}return A.p(n,w,B.f,n,n,new A.o(l,n,j,k,D.aCK,n,B.n),n,n,n,n,B.bh,n,n,n)}}
C.biC.prototype={
a4(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.q4$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDl(),d0=B.k.F(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.acQ,d2=c7*0.5
c8=A.ar(D.bgU,D.br7,d0)
c8.toString
w=A.ar(D.Yf,G.ah9,d0)
w.toString
v=A.ar(B.tZ,D.bpA,d0)
v.toString
$.S()
u=A.K()
t=x.O
u.sar(A.jv(B.I,new A.q(0,d2),A.a([c8,w,v],t),G.a42,B.x,c3))
d3.au(new A.a2(0,0,0+c6,0+c7),u)
s=new A.q(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.K()
u.sar(A.w3(s,60,A.a([D.bpY,B.L],t),c3,B.x,c3,c3,0))
d3.N(s,60,u)
u=A.K()
u.r=B.Yq.gp(0)
d3.N(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.k.E(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.E(r,3)*22
for(o=0;o<4;++o){n=D.dxx[o]
$.S()
u=new A.ao(B.Q,B.N,B.T,B.U,B.S)
u.r=B.c.j(0.75).gp(0)
d3.N(new A.q(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.S()
j=A.a([],m)
i=new A.aE(k.r,B.ah,c3,c3,j)
j.push(new A.aY(0,v))
i.a8()
for(k=u-l*12,h=0.12+l*0.1,g=70+l*30,f=14-l*3,q=0;q<=c6;q+=6){e=new A.aq(q,k+Math.sin((q+c4.CW*h)/g)*f)
j.push(e)
d=i.f
if(d!=null)e.ai(d)
i.a8()}k=new A.aq(c6,v)
j.push(k)
j=i.f
if(j!=null)k.ai(j)
i.a8()
$.S()
k=new A.ao(B.Q,B.N,B.T,B.U,B.S)
k.r=A.ar(l===0?D.bft:D.bu5,D.bkm,w).gp(0)
d3.ae(i,k)}for(w=d2+2,r=0;r<8;++r)this.cbq(d3,new A.q(B.k.E(B.k.E(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.S()
w=A.K()
v=A.ar(D.aiG,D.G8,d0)
v.toString
w.sar(A.jv(new A.q(0,d2),new A.q(0,c7),A.a([v,D.bq_],t),c3,B.x,c3))
d3.au(new A.a2(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.K()
w.r=D.bjG.gp(0)
d3.au(new A.a2(0,a0,c6,a1),w)
w=A.K()
w.r=D.btM.gp(0)
d3.au(new A.a2(0,a0-3,c6,a0),w)
for(q=-B.k.E(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ao(B.Q,B.N,B.T,B.U,B.S)
u.r=K.Mv.gp(0)
d3.au(new A.a2(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.S()
b2=new A.ao(B.Q,B.N,B.T,B.U,B.S)
b2.r=D.bf8.gp(0)
d3.au(new A.a2(b0,v,b0+52,u),b2)
b2=A.a([],m)
b1=new A.aE(b1.r,B.ah,c3,c3,b2)
b2.push(new A.aY(a9-36,t))
b1.a8()
b0=new A.aq(a9,a6)
b2.push(b0)
b3=b1.f
if(b3!=null)b0.ai(b3)
b1.a8()
b0=new A.aq(a9+36,t)
b2.push(b0)
b3=b1.f
if(b3!=null)b0.ai(b3)
b1.a8()
b0=new A.bt()
b2.push(b0)
b2=b1.f
if(b2!=null)b0.ai(b2)
b1.a8()
b0=new A.ao(B.Q,B.N,B.T,B.U,B.S)
b0.r=D.bs_.gp(0)
d3.ae(b1,b0)
b0=a9-6
b1=new A.ao(B.Q,B.N,B.T,B.U,B.S)
b1.r=D.fw.gp(0)
d3.au(new A.a2(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ao(B.Q,B.N,B.T,B.U,B.S)
b0.r=D.FW.gp(0)
d3.au(new A.a2(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.br(new A.a2(b0,a4,b0+60,a5),B.ij)
b0=new A.ao(B.Q,B.N,B.T,B.U,B.S)
b0.r=D.bv7.gp(0)
d3.ap(b5,b0)
b0=new A.ao(B.Q,B.N,B.T,B.U,B.S)
b0.r=D.Br.gp(0)
b0.b=B.aa
b0.c=2
d3.ap(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.iF(new A.en(b6,c3,c3,B.cH,c3,c3,c3,c3,c3,c3,D.fpM),B.a5,B.bW,new A.jd(1),c3,c3,c3,c3,B.bX,c3,B.ct)
b7.ef()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a4(d3,new A.q(b4-b1/2,a2-b0.gba(b0)/2))
if(a7)b8=c4.r===D.acR
else if(r===c4.w){b0=c4.r
b0=b0===D.X2||b0===D.B0
b8=b0}else b8=!1
if(a7){b0=c4.ghb(0).gzg()
b9=(b0==null?c3:b0.c)===D.op?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.E(r,8)]
b0=c4.gqr()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.B0
b0=c0?C.hyS(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.X2?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.q(40,-110+Math.sin(g)*10)
else a7=c0?new A.q(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.Sl(d3,new A.q(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.q(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bHT(d3,new A.q(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.k.E(w+r/7,1)
$.S()
t=new A.ao(B.Q,B.N,B.T,B.U,B.S)
t.r=D.btg.j(0.5*(1-c2)).gp(0)
d3.N(new A.q(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.X1)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.k.E(w+r/5,1)
t=Math.sin(r+c8)
$.S()
m=new A.ao(B.Q,B.N,B.T,B.U,B.S)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.N(new A.q(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.B0&&c4.ax){b7=A.fv(c3,B.ct,c3,c3,c3,A.cQ(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,B.cN,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,A8.Is,c3,c3),"BEEP BEEP!"),B.a5,B.bW,c3,B.dD,B.bX)
b7.ef()
b7.a4(d3,new A.q(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
cbq(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ar(D.bpu,D.bj_,g)
o.toString
if(f){w=new A.aE($.S().r,B.ah,null,null,A.a([],x.v))
v=e.a
u=e.b
w.D(new A.aY(v-16,u))
t=u-36
s=u-56
w.D(new A.c4(v-9,t,v-7,s))
w.D(new A.aq(v+7,s))
w.D(new A.c4(v+9,t,v+16,u))
w.D(new A.bt())
t=A.K()
t.r=D.Zs.gp(0)
d.ae(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d_b[r]
p=new A.ao(B.Q,B.N,B.T,B.U,B.S)
p.r=D.Zs.gp(0)
p.c=4
p.d=B.bA
d.ah(new A.q(w,t),new A.q(v+q*24,s),p)
p=new A.ao(B.Q,B.N,B.T,B.U,B.S)
p.r=o.gp(0)
d.N(new A.q(v+q*26,u),10,p)}}else{w=e.a7(0,D.eof)
$.S()
v=A.K()
v.r=D.bfa.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bJ(e.a7(0,D.eog),16,60)
w=A.K()
w.r=o.gp(0)
d.bY(v,w)}},
bHT(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.X1?0.045:0,a1=a2.c
J.bq(a1.save())
a1.translate(a3.a,a3.b+e)
a2.iq(0,a0)
for(w=0;w<2;++w){v=D.dq0[w]
u=d.ay&&d.r!==D.X1&&v>0
J.bq(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.S()
s=new A.ao(B.Q,B.N,B.T,B.U,B.S)
s.r=D.btY.gp(0)
a2.N(B.I,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ao(B.Q,B.N,B.T,B.U,B.S)
s.r=D.bmp.gp(0)
a2.N(B.I,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ao(B.Q,B.N,B.T,B.U,B.S)
q.r=B.bo.gp(0)
q.c=2
a2.ah(B.I,new A.q(s*9,t*9),q)}a1.restore()}p=A.tY(D.f51,B.fI,B.fI,B.ii,B.hL)
$.S()
t=A.K()
t.sar(A.jv(D.ekg,B.a81,D.dfZ,G.a42,B.x,f))
a2.ap(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ao(B.Q,B.N,B.T,B.U,B.S)
s.r=D.da6[B.o.E(o,4)].gp(0)
a2.au(new A.a2(t,-26,t+10,-19),s)}n=d.r===D.B0&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a2(s,-66,q,-36)
J.bq(a1.save())
a1.clipRRect(A.om(A.br(l,B.n3)),$.nJ(),!0)
k=new A.ao(B.Q,B.N,B.T,B.U,B.S)
k.r=D.Yf.gp(0)
a2.au(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.B0?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.Sl(a2,new A.q(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aLh,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.br(l,B.n3)
i=new A.ao(B.Q,B.N,B.T,B.U,B.S)
i.r=D.ajy.gp(0)
i.b=B.aa
i.c=2
a2.ap(j,i)}d=A.br(D.Ur,B.n3)
t=A.K()
t.r=D.Yf.gp(0)
a2.ap(d,t)
J.bq(a1.save())
a1.clipRRect(A.om(A.br(D.Ur,B.n3)),$.nJ(),!0)
C.Sl(a2,new A.q(D.Ur.gbK().a,-10),0,0,0.7,-0.1,f,f,D.aLh,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.br(D.Ur,B.n3)
d=A.K()
d.r=D.ajy.gp(0)
d.b=B.aa
d.c=2
a2.ap(t,d)
d=A.K()
d.r=An.G9.gp(0)
a2.N(D.emp,4,d)
d=A.K()
d.r=D.FW.gp(0)
a2.au(D.f6a,d)
for(w=0;w<3;++w){v=D.dq2[w]
d=A.br(new A.a2(v,-96,v+28,-79),B.ij)
t=new A.ao(B.Q,B.N,B.T,B.U,B.S)
t.r=D.G8.gp(0)
a2.ap(d,t)}a1.restore()},
aC(d){return!1}}
C.aBe.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.bg9.prototype={}
C.aBg.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.bga.prototype={}
C.aBh.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.bgb.prototype={}
C.a6e.prototype={
B(d){var w=null
return new A.a5(1/0,this.c,A.b4(w,w,w,new C.biJ(w),B.ay),w)}}
C.biJ.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dnY[B.o.E(n,6)]
k=$.S()
j=new A.ao(B.Q,B.N,B.T,B.U,B.S)
j.r=l.gp(0)
d.au(new A.a2(m,0,m+v,u),j)
if(B.o.E(n,3)===0){j=A.a([],o)
i=new A.aE(k.r,B.ah,null,null,j)
k=m+r
j.push(new A.aY(k,f))
i.a8()
h=new A.aq(m+p,s)
j.push(h)
g=i.f
if(g!=null)h.ai(g)
i.a8()
k=new A.aq(k,q)
j.push(k)
h=i.f
if(h!=null)k.ai(h)
i.a8()
k=new A.aq(m+t,s)
j.push(k)
h=i.f
if(h!=null)k.ai(h)
i.a8()
k=new A.bt()
j.push(k)
j=i.f
if(j!=null)k.ai(j)
i.a8()
k=new A.ao(B.Q,B.N,B.T,B.U,B.S)
k.r=B.c.j(0.85).gp(0)
d.ae(i,k)}++n}},
aC(d){return!1}}
C.tA.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aH(w,w,w,w,B.PQ,w,w,w,new C.bRe(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a2,w,w,w,D.fn3,w,w,w),1)],v)
B.d.v(u,this.e)
return A.c5(w,D.Y1,A.p(w,A.bm(!0,A.x(A.a([D.c3P,new A.D(D.bGc,A.A(u,B.m,w,B.e,B.i,0,w,w),w),A.E(this.d,1)],v),B.m,w,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.b7B,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.Ik.prototype={
B(d){var w=null,v=this.d,u=C.aQk(v),t=C.igA(v),s=B.c.j(0.08),r=A.n(18),q=A.L(B.cN.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fpx,w,w,w)],x.p)
if(this.e)p.push(D.eqI)
p.push(B.an)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.fW,w,w,w))
if(t!=null)p.push(new A.D(B.un,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.AI,w,w,w),w))
return A.p(w,A.x(p,B.m,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.n),w,w,w,w,B.bE,w,w,w)}}
C.W4.prototype={
S(){return new C.blt(A.U(x.N,x.S),B.o.E(Date.now(),1e5))},
cXy(d){return this.f.$1(d)},
ge3(){return this.d}}
C.blt.prototype={
gSM(){var w=this.d
return w===$?this.d=this.a.c:w},
Y(){this.a3()
this.Pp()},
Pp(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Pp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bS_(u.a.d),$async$Pp)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.de2[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bRZ(p,(o===$?u.d=q.c:o).a,r),$async$Pp)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.e0u(u,n))
return A.h(null,v)}})
return A.i($async$Pp,v)},
uu(d){return this.cnZ(d)},
cnZ(d){var w=0,v=A.j(x.H),u=this,t
var $async$uu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a6(t,!1).cd(A.eb(new C.e0v(d),!1,null,x.H)),$async$uu)
case 2:u.r=B.o.E(Date.now(),1e5)
if(u.c!=null)u.Pp()
return A.h(null,v)}})
return A.i($async$uu,v)},
gb63(){var w,v,u,t=C.MT(this.gSM()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)s.push(B.a.i(w[u].b))
return s},
a2h(d){return this.cvb(d)},
cvb(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a2h=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.J)(d),++s)r.push(d[s].ak())
w=2
return A.b(u.a.cXy(r),$async$a2h)
case 2:if(u.c!=null)u.m(new C.e0w(u,r))
return A.h(null,v)}})
return A.i($async$a2h,v)},
OJ(d){return this.bQy(d)},
bQy(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$OJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hcJ(t.gSM())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.MC("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a6(s,!1).cd(A.eb(new C.e0s(q),!1,null,r)),$async$OJ)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.J)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bj(j,new C.e0t(p))
o=s.length
B.d.c4(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a2h(A.cW(s,0,A.dA(2,"count",x.S),r).dm(0)),$async$OJ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OJ,v)},
XG(d,e){return this.bO7(0,e)},
bO7(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$XG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cf(null,null,!0,null,new C.e0r(e),o,null,!0,!0,x.y),$async$XG)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hcJ(u.gSM()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.J)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a2h(o),$async$XG)
case 5:case 3:return A.h(null,v)}})
return A.i($async$XG,v)},
a9X(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e0o(this,j):h
o=o?0.55:1
w=A.ar(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.n(20)
u=A.L(B.aW,B.r,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cA,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.Vh,p,p,p),B.b3],s)
q=A.n(10)
r.push(A.p(p,A.d(i,p,p,p,p,p,p,D.fnW,p,p,p),B.f,p,p,new A.o(B.hC,p,p,q,p,p,B.n),p,p,p,p,B.Ci,p,p,p))
return A.aA(p,A.da(A.p(p,A.x(A.a([A.A(r,B.m,p,B.e,B.i,0,p,p),B.b3,A.d(e,p,2,p,p,p,p,D.fvD,p,p,p),B.cU,A.d(f,p,3,B.a2,p,p,p,D.foF,p,p,p)],s),B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a9(B.aA,B.aF,B.x,w,p,p),B.n),p,p,p,p,B.yA,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
X9(d,e,f,g,h,i){return this.a9X(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.MT(s.gSM()),p=s.gSM(),o=C.aQk(s.e),n=C.hcJ(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e0x(s),k=C.hCq(p,1).length,j=C.hCC(p,1).length,i=C.hDx(p,1).length,h=B.c.j(0.07),g=A.n(20),f=A.L(B.cN.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,I.aaW,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.fta,r,r,r),a0=q.b.length,a1=x.p
g=A.p(r,A.A(A.a([e,B.be,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,I.aaS,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.pP,r,r,r),D.fRO],a1),B.m,r,B.e,B.i,0,B.p)],a1),B.m,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(h,r,f,g,r,r,B.n),r,r,r,r,B.bE,r,r,r)
f=s.X9("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aE,new C.e0y(s,p),l.$1("kahoot"))
h=s.X9("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lB,new C.e0z(s,p),l.$1("fire"))
a0=s.X9("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.BP,new C.e0A(s,p),l.$1("catch"))
j=j!==0?new C.e0D(s,p):r
j=s.a9X("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hl,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e0E(s,p):r
i=s.a9X("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.l9,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.X9("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.eR,new C.e0F(s,p),l.$1("journey"))
k=k!==0?new C.e0G(s,p):r
k=A.a([g,B.aR,D.fVM,B.P,A.kS(0.98,A.a([f,h,a0,j,i,e,s.a9X("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.en,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.X9("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d2,new C.e0H(s,p),l.$1("school"))],a1),2,12,12,r,B.dU,!0),B.d6,A.A(A.a([D.bI4,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fo_,r,r,r)],a1),B.m,r,B.e,B.i,0,r,r),B.P],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.J)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.ay(B.aW,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fCy,B.be,new A.by(1,B.bc,A.x(A.a([A.d(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hz,r,r,r),A.d(""+v.gapc(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.AI,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),r)],a1)
if(v.gapc(0).length>=2){f=D.lC.j(0.2)
t=new A.ay(D.lC,1,B.r,-1)
g.push(A.aA(r,A.p(r,A.Y(B.hs,D.lC,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bG(t,t,t,t),r,r,r,B.a7),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e0I(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cN.j(0.2)
t=new A.ay(B.cN,1,B.r,-1)
f=A.aA(r,A.p(r,A.Y(B.j2,B.cN,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bG(t,t,t,t),r,r,r,B.a7),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e0J(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.ff.j(0.2)
t=new A.ay(B.ff,1,B.r,-1)
B.d.v(g,A.a([B.bn,f,B.bn,A.aA(r,A.p(r,A.Y(B.ef,B.ff,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bG(t,t,t,t),r,r,r,B.a7),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e0K(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.p(r,new A.c7(B.aM,B.e,B.i,B.m,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bG(u,u,u,u),new A.bg(h,h,h,h),r,r,B.n),r,r,r,B.d3,B.bh,r,r,r))}if(s.a.e){j=m?new C.e0B(s):new C.e0C(a2)
i=A.n(18)
h=A.L(m?B.cN:B.aW,B.r,2)
g=m?B.cN.j(0.12):B.dt
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aA(r,A.p(r,A.at(A.d(f,r,r,r,r,r,r,A.l(r,r,m?B.cN:B.aD,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.n),r,r,r,r,B.NP,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.fWI)
k.push(B.aC)
k.push(D.ash)
return new C.tA("Family Games \xb7 "+p.b,A.cj(k,r,r,D.bCd,r,r,B.ai,!1),B.f4,r)}}
C.a_J.prototype={
a6(){return"_KPhase."+this.b}}
C.alE.prototype={
S(){return new C.alF(D.b_C)},
gd1(){return this.e}}
C.alF.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a2()},
fX(d){var w,v=this
v.m(new C.bRz(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.de(B.fF,new C.bRA(v))},
aPu(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.m(new C.bRp(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.de(B.fe,new C.bRq(w))},
KW(d){var w
if(this.d!==D.acm)return
w=this.at
if(w!=null)w.a1(0)
this.b6_(d)},
b6_(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.k.V(500+500*B.k.F(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bRv(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cz(B.rI,v.giu(v))},
cK5(d){var w=this
if(w.d!==D.WA)return
if(w.e+1>=w.a.w.length)w.Yr()
else{w.m(new C.bRw(w))
w.aPu()}},
Yr(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Yr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bFV(p,u.w,t)
u.m(new C.bRs(u,s))
w=2
return A.b(C.BL(u.a.e,s),$async$Yr)
case 2:r=e
t=u.a
w=3
return A.b(C.BM(t.e,t.f,t.r,u.f),$async$Yr)
case 3:q=e
if(u.c!=null)u.m(new C.bRt(u,r,q))
return A.h(null,v)}})
return A.i($async$Yr,v)},
cKV(){var w,v,u,t,s=this,r=s.a,q=new A.e4()
q.d_(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.b5("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.e0(r,q)
for(r=A.cW(r,0,A.dA(4,"count",x.S),A.T(r).c),u=r.$ti,r=new A.bO(r,r.gJ(0),u.k("bO<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b5(t,B.k.V(w*(0.35+q.aj()*0.5)),!1))}B.d.aZ(v,new C.bRx())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b_C===r){w=A.a([D.fSc,B.X,A.d(s,t,t,t,t,t,t,B.KH,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.fo7,t,t,t))
w.push(B.aC)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.xg,B.K,t,t))
w.push(B.dV)
w.push(C.up("Play",u.geY(u),B.cN,B.hs,D.fw))
w=A.at(new A.D(B.ex,A.x(w,B.m,t,B.e,B.O,0,B.p),t),t,t,t)
break A}if(D.b_D===r){w=A.at(A.d(""+u.z,t,t,t,t,t,t,D.fw8,t,t,t),t,t,t)
break A}if(D.acm===r||D.WA===r){w=u.cqA()
break A}if(D.b_E===r){w=u.cbr()
break A}w=t}return new C.tA(s,w,B.f4,t)},
cqA(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.WA,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aUF,j,j,j),B.b3],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.KE,j,j,j))
g.push(B.at)
f=A.n(14)
g.push(A.p(j,A.d(""+k.f,j,j,j,j,j,j,B.ix,j,j,j),B.f,j,j,new A.o(B.bB,j,j,f,j,j,B.n),j,j,j,j,B.GF,j,j,j))
g=A.A(g,B.m,j,B.e,B.i,0,j,j)
f=A.n(6)
w=i?0:B.k.F(k.as/k.a.w[k.e].r,0,1)
f=A.bx(f,A.kl(B.bB,j,k.as<5?B.ff:B.cN,9,j,w,j),B.aq)
w=A.n(22)
v=A.L(B.cN,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.l(j,j,e?D.lC:G.nh,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.P,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.fnc,B.K,j,j)],h),B.m,j,B.e,B.O,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fyg,B.K,j,j)
w=A.E(A.p(j,A.at(u,j,j,j),B.f,j,j,new A.o(D.qe,j,v,w,j,j,B.n),j,j,j,j,B.fr,j,j,1/0),3)
v=A.a([],h)
for(u=k.giu(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bRu(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.E(t,4)
n=D.aCo[o]
m=new A.aP(16,16)
l=new A.ay(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.d(D.aCH[o],j,j,j,j,j,j,D.fp8,j,j,j),B.at,new A.by(1,B.bc,A.d(r[t],j,3,B.a2,j,j,j,D.fo4,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.aqO)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bWH)
v.push(A.aA(j,new A.SB(A.p(j,new A.c7(B.aM,B.e,B.i,B.m,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bG(l,l,l,l),new A.bg(m,m,m,m),W.aAN,j,B.n),j,j,j,j,B.f1,j,j,j),p,B.b6,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.an,f,B.af,w,B.af,A.E(A.kS(1.45,v,2,10,10,j,B.dU,!1),4)],h)
if(i)h.push(D.epY)
return new A.D(B.a00,A.x(h,B.m,j,B.e,B.i,0,B.p),j)},
cbr(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cKV(),m=x.p,l=A.a([D.bbq,A.at(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.pP,o,o,o),o,o,o),A.at(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.Vm,o,o,o),o,o,o),B.aR],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cN.j(0.25):B.dt
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.cN:B.bB,1,B.r,-1)
q=A.d(w<3?D.dgf[w]:""+(w+1),o,o,o,o,o,o,B.n8,o,o,o)
s=s?B.u:B.V
l.push(A.p(o,new A.c7(B.aM,B.e,B.i,B.m,o,B.p,o,0,A.a([new A.a5(34,o,q,o),new A.by(1,B.bc,A.d(t.a,o,o,o,o,o,o,new A.G(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.d(""+t.b,o,o,o,o,o,o,B.ix,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bG(r,r,r,r),new A.bg(u,u,u,u),o,o,B.n),o,o,o,B.cv,B.eV,o,o,o))}l.push(B.X)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.Ik(m,v,p.CW,o))
l.push(B.aR)
l.push(A.at(C.up("Back to the games",new C.bRr(p),B.cN,B.k4,D.fw),o,o,o))
return A.cj(l,o,o,B.fr,o,o,B.ai,!1)}}
C.TL.prototype={
S(){return new C.alB(A.U(x.de,x.er))}}
C.alB.prototype={
gCZ(){var w,v=this,u=v.d
if(u===$){w=C.hiv(v.a.c.ak())
v.d!==$&&A.bE()
v.d=w
u=w}return u},
glQ(d){var w,v,u=this,t=u.e
if(t===$){w=u.gCZ().b
v=$.aw()
u.e!==$&&A.bE()
t=u.e=new A.au(new A.ba(w,B.b5,B.aP),v)}return t},
ceo(d){return this.f.c3(0,d,new C.bR_(d))},
Y(){this.a3()
var w=this.gCZ().c
if(w.length===0)w.push(C.h4j(null,0,20,""))},
t(){var w,v,u=this.glQ(0)
u.T$=$.aw()
u.P$=0
for(u=this.f,u=new A.dq(u,u.r,u.e);u.C();)for(w=J.aX(u.d);w.C();){v=w.gR(w)
v.T$=$.aw()
v.P$=0}this.a2()},
cJW(){if(this.gCZ().c.length>=12)return
this.m(new C.bR0(this))},
jG(d){var w,v,u=this,t=u.gCZ()
t.b=B.a.i(u.glQ(0).a.a)
w=t.gapc(0)
if(t.b.length===0||w.length<2){u.c.L(x.q).f.U(D.fgb)
return}v=t.c
B.d.a9(v)
B.d.v(v,w)
v=u.c
v.toString
A.a6(v,!1).O(t)},
B(d){var w,v,u=this,t=null,s=new C.bRa(),r=x.p,q=A.a([A.bM(!1,D.fHv,t,t,!0,t,t,t,u.gbpG(u),t,t)],r),p=A.a([D.fWj,B.af,A.aM(t,B.Z,!1,t,!0,B.t,t,A.aN(),u.glQ(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ak,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ab,t,t,t,t,t,t,t,t,t,t,t,B.fW,!0,B.a5,t,B.ao,t,t,t,t),B.aC],r)
for(w=0;v=u.gCZ().c.length,w<v;++w)B.d.v(p,A.a([new A.ff(new C.bR9(u,w,s),t)],r))
if(v<12)p.push(A.at(C.up("\uff0b Add a question",u.gcJV(),B.aW,t,B.c),t,t,t))
return new C.tA("Make your game",A.cj(p,t,t,D.bCa,t,t,B.ai,!1),q,t)}}
C.aqF.prototype={
S(){return new C.aEM(A.a([],x._))},
bv(){return this.r.$0()},
qk(){return this.w.$0()},
ge3(){return this.c}}
C.aEM.prototype={
Y(){var w,v
this.a3()
this.wp()
w=this.a
v=w.c
if(v.length!==0)C.a7X(v,w.e,w.d.w)},
wf(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hfk(r,t.e,!1,s.w,new C.e29(u),null,s),$async$wf)
case 2:w=3
return A.b(u.wp(),$async$wf)
case 3:return A.h(null,v)}})
return A.i($async$wf,v)},
a0t(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a0t=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hfk(r,t.e,!0,s.w,new C.e28(u),null,s),$async$a0t)
case 2:w=3
return A.b(u.wp(),$async$a0t)
case 3:return A.h(null,v)}})
return A.i($async$a0t,v)},
wp(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wp=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Be(q.a.c),$async$wp)
case 7:p=e
if(q.c!=null)n=q.e||J.cI(p)
else n=!1
if(n)q.m(new C.e2b(q,p))
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
return A.b(C.Hc(q.a.c).df(0,B.qp),$async$wp)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.e2c(q,o))
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
if(q.c!=null&&q.e)q.m(new C.e2d(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wp,v)},
P4(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$P4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.L(s).f.U(D.ffM)
w=3
return A.b(C.Hc(t.a.c),$async$P4)
case 3:r=e
w=4
return A.b(C.fV6(t.a.c,r),$async$P4)
case 4:q=e
w=5
return A.b(C.Hc(t.a.c),$async$P4)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.e27(t,p))
o=t.c.L(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(null,null,null,q?B.dG:B.cY,null,B.t,null,s,null,B.mN,null,null,null,null,null,null,null,null,null,null))
t.a.qk()
case 1:return A.h(u,v)}})
return A.i($async$P4,v)},
In(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$In=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ioM(l),$async$In)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hSE(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b0M(q,p.e,l,"Each family tree costs $"+B.k.ad(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$In)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hz0(r)
o=Date.now()
n=t.a.c
m=new C.kR(l,r.toUpperCase(),p,!0,B.Z,D.Dr,new A.V(o,0,!1),0,n,D.uw,B.cc)
w=5
return A.b(C.a3E(n,m),$async$In)
case 5:w=6
return A.b(t.wp(),$async$In)
case 6:t.a.bv()
t.a.qk()
if(t.c==null){w=1
break}t.EX(m)
case 1:return A.h(u,v)}})
return A.i($async$In,v)},
EX(d){return this.cji(d)},
cji(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$EX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Be(u.a.c),$async$EX)
case 2:n=l.nv(k.dH(f,new C.e2a(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hE(m,new C.aqz(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$EX)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a3E(u.a.c,o),$async$EX)
case 6:case 5:w=7
return A.b(u.wp(),$async$EX)
case 7:u.a.qk()
return A.h(null,v)}})
return A.i($async$EX,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.R(d).ax.a===B.J,o=new C.uc(p)
if(r.e)return A.at(A.n0(q,p?B.bv:B.bo,q,q,q,q,q,q,q,q),q,q,q)
if(J.cq(r.d)){w=p?B.e7:B.c
v=A.n(15)
u=A.aI(!1,B.a3,!0,q,A.aO(!1,q,!0,A.p(q,D.bUn,B.f,q,q,new A.o(B.aY.j(0.12),q,A.L(B.aY,B.r,2),q,q,q,B.a7),q,52,q,q,q,q,q,52),B.cQ,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcim(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.av,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Gc(A.p(q,A.x(A.a([u,B.aR,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bv:B.bo,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.dV,A.bH(D.fZx,q,r.gaSJ(),A.bn(B.bQ,q,q,q,q,q,Aw.a0p,q,new A.b9(A.n(12),B.a1),q,q,q))],x.p),B.m,q,B.e,B.i,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bEU,q,q,1/0),15,B.ag,1.05,D.ac8,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.av,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b3],v)
if(J.cI(r.d))w.push(A.aH(q,q,q,q,A.Y(B.zo,B.aY,q,q,q,q),q,q,q,new C.e2f(r),q,q,q,q,"Sync family trees with database",q))
if(J.cI(r.d))w.push(A.aH(q,q,q,q,A.Y(B.zi,B.aY,q,q,q,q),q,q,q,r.gagJ(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dh(E.arI,D.fER,r.gaSJ(),A.bn(B.bQ,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.m,q,B.e,B.i,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.Gc(r.cG4(J.t(r.d,s),o),14,B.ag,1,D.ac8,q))
B.d.v(w,u)}return A.x(A.a([p,B.aC,A.x(w,B.m,q,B.e,B.i,0,B.p)],v),B.E,q,B.e,B.i,0,B.p)},
cG4(d,e){var w=null,v=e.a,u=v?B.e7:B.c,t=A.n(14),s=A.L((v?B.ee:B.bP).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.er,10)],x.V),q=A.n(14),p=A.p(w,D.bTr,B.f,w,w,new A.o(B.aY.j(0.15),w,w,A.n(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaqc(),m=d.d?"":" \xb7 Public",l=d.y===D.kV?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bH,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bo,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.i,0,B.p),1)
return A.p(w,A.aI(!1,B.a3,!0,w,A.aO(!1,q,!0,new A.D(B.bE,A.A(A.a([p,B.be,l,A.Y(B.OG,v?B.bv:B.bo,w,w,w,w)],k),B.m,w,B.e,B.i,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e2e(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aqz.prototype={
S(){return new C.aEJ(A.a([],x._),A.aS(x.N),A.b9u())},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aEJ.prototype={
Y(){var w,v,u=this
u.a3()
u.d=u.a.w
u.adq()
w=u.a
v=w.c
if(v.length!==0)C.a7X(v,w.e,w.d.w)},
t(){var w=this.w
w.T$=$.aw()
w.P$=0
this.a2()},
a3r(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3r=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yo("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e1A(r),s,null,!0,!0,x.y),$async$a3r)
case 3:if(e!==!0||t.c==null){w=1
break}t.JU()
t.m(new C.e1B(t,r))
w=4
return A.b(t.uq(),$async$a3r)
case 4:t.a.bv()
t.yo(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a3r,v)},
cvL(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aV.x1$.push(new C.e1v(w,f,d,e))},
aV0(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dr()
u.eg(w,v,0,1)
u.k5(q,q,1,1)
this.w.sp(0,u)},
bcB(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eH(new Float64Array(16))
q.e6(r)
w=q.D3()
v=B.k.F(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dr()
t.eg(r,u,0,1)
t.k5(v,v,1,1)
t.eg(-r,-u,0,1)
t.iV(0,q)
s.sp(0,t)},
adq(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$adq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Be(u.a.c),$async$adq)
case 2:t=s.nv(r.dH(e,new C.e0X(u)))
if(t!=null&&u.c!=null)u.m(new C.e0Y(u,t))
return A.h(null,v)}})
return A.i($async$adq,v)},
yo(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.a_,w,w,w,w,w,w,w,w,w,w))},
wf(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.hfk(o,t,!1,r,new C.e1e(u),q.a,s),$async$wf)
case 2:n=A
m=J
w=3
return A.b(C.Hc(u.a.c),$async$wf)
case 3:p=n.nv(m.dH(e,new C.e1f(u)))
if(p!=null&&u.c!=null)u.m(new C.e1g(u,p))
return A.h(null,v)}})
return A.i($async$wf,v)},
JU(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cA(w,0)},
uq(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a3E(t,s),$async$uq)
case 2:return A.h(null,v)}})
return A.i($async$uq,v)},
a1Y(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a1Y=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.uq(q,t.a.c)){t.yo("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.ipW(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a1Y)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.JU()
t.m(new C.e1u(t,r))
w=4
return A.b(t.uq(),$async$a1Y)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1Y,v)},
b2I(){var w=this.c
w.toString
A.a6(w,!1).cd(A.eb(new C.e1b(this),!1,null,x.H))},
a0H(){return this.cjk()},
cjk(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0H=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.uq(m,t.a.c)){t.yo("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.R(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.X(s,new C.e1r(),A.T(s).k("X<1>")).gJ(0)
s=A.ey([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("co.E"))
B.d.fh(p)
s=t.c
s.toString
w=3
return A.b(A.bT(B.L,null,new C.e1s(n,t,new C.uc(m.ax.a===B.J),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a0H)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.JU()
t.m(new C.e1t(t,o))
w=6
return A.b(t.uq(),$async$a0H)
case 6:case 5:if(o.a&&t.c!=null)t.b2I()
case 1:return A.h(u,v)}})
return A.i($async$a0H,v)},
Wu(d){return this.bDc(d)},
bDc(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.uq(r,t.a.c)){t.yo("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e0L(t,d),r,null,!0,!0,x.P),$async$Wu)
case 3:s=f
if(s==null){w=1
break}t.JU()
t.m(new C.e0M(t,s))
w=4
return A.b(t.uq(),$async$Wu)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wu,v)},
a3N(d){return this.cIj(d)},
cIj(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a3N=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.R(s)
t=u.c
t.toString
w=2
return A.b(A.cf(null,null,!0,null,new C.e1D(u,d,new C.uc(s.ax.a===B.J)),t,null,!0,!0,x.H),$async$a3N)
case 2:return A.h(null,v)}})
return A.i($async$a3N,v)},
cfB(d){var w=this,v=w.d
v===$&&A.c()
if(C.uq(v,w.a.c))w.OK(d)
else w.a3N(d)},
aje(d,e){return this.czI(d,e)},
czI(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aje=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.R(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.e1x(new C.uc(r.ax.a===B.J),d,e),s,null,!0,!0,x.H),$async$aje)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aje,v)},
Is(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Is=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kV?3:5
break
case 3:w=6
return A.b(C.h2x(t.a.c),$async$Is)
case 6:s=e
o=t.a
r=C.hnl(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.aje(!s,!r),$async$Is)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aQs(o,t.a.c)){t.yo("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.ll(o,"Cancel","Remove",q.y===D.kV?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$Is)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aQo(t.a.c,t.d.a),$async$Is)
case 11:t.a.bv()
o=t.c
if(o==null){w=1
break}A.iX(o,null)
case 1:return A.h(u,v)}})
return A.i($async$Is,v)},
aaT(d){return this.bOo(d)},
bOo(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$aaT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.uq(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aX(s,new C.e0N(p))){o=A.T(s)
p.a=A.nv(new A.cM(new A.X(s,new C.e0O(d),o.k("X<1>")),new C.e0P(),o.k("cM<1,m>")))}q=p.a
if(q==null)q=d.d
t.JU()
t.m(new C.e0Q(t,s,d,q))
w=3
return A.b(t.uq(),$async$aaT)
case 3:t.yo(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$aaT,v)},
OK(d){return this.bQC(d)},
bQC(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.uq(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a3N(d),$async$OK)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.e0U(t,d),r,null,!0,!0,x.P),$async$OK)
case 6:s=f
if(s==null){w=1
break}t.JU()
t.m(new C.e0V(t,s))
w=7
return A.b(t.uq(),$async$OK)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OK,v)},
cGu(){var w=this,v=w.d
v===$&&A.c()
if(!C.uq(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.e1C(w))
w.uq()},
Zs(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Zs=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aQs(n,t.a.c)){t.yo("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.R(n)
s=$.aw()
r=new A.au(B.au,s)
q=t.d.e
p=A.bo(new A.N(q,t.gce4(),A.T(q).k("N<1,m>")).bZ(0,new C.e16()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e17(t,new C.uc(n.ax.a===B.J),p,r),q,null,!0,!0,x.y),$async$Zs)
case 3:o=e
r.T$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.JU()
t.m(new C.e18(t,p))
w=4
return A.b(t.uq(),$async$Zs)
case 4:t.yo("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Zs,v)},
ce5(d){return B.a.i(d.toLowerCase())},
ci6(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.uq(v,w)
t=r.d
s=C.if2(t)
C.ioQ(q,t.b,u,C.if1(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.R(d).ax.a===B.J,m=new C.uc(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.X(l,new C.e1K(),A.T(l).k("X<1>")).gJ(0)
l=n?B.c3:B.iB
v=A.Y(B.a1z,n?B.bv:B.bo,o,o,o,18)
u=x.p
v=A.a([new A.D(B.C8,A.aO(!1,o,!0,new A.D(B.hE,A.A(A.a([v,B.bn,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bo,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.O,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e1L(p,d),o,o,o,o,o,o,o),o),new A.D(B.nA,p.c0O(m),o)],u)
if(p.d.y===D.kV){t=B.t7.j(0.15)
s=A.n(12)
r=A.L(B.t7.j(0.45),B.r,1)
q=C.Ha(p.d,p.a.c)
v.push(new A.D(B.yD,A.p(o,A.A(A.a([D.bYO,B.at,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.av,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iu,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.av,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b3],u)
if(C.uq(p.d,p.a.c)&&p.e.length!==0)u.push(new C.Go("Undo",B.pq,p.gcGt(),m,o,o))
u.push(new C.Go("Family Book",D.bO9,p.gci5(),m,B.u_,o))
u.push(new C.Go("Family games",B.ox,p.gcih(),m,B.aE,o))
if(C.uq(p.d,p.a.c))u.push(new C.Go("Display settings",B.CZ,p.gcjj(),m,B.b2,o))
u.push(new C.Go("Sync",B.zi,p.gagJ(),m,o,o))
t=p.d
if(t.y===D.kV||C.aQs(t,p.a.c)){t=p.d.y===D.kV?"Remove shared tree":"Delete tree"
u.push(new C.Go(t,B.ef,p.gbOy(),m,B.ff,o))}if(C.uq(p.d,p.a.c))u.push(new C.Go("Add member",B.wC,new C.e1M(p),m,B.bQ,o))
v.push(new A.D(A_.alz,A.A(u,B.m,o,B.e,B.i,0,o,o),o))
if(p.d.gaqc()===0){u=A.at(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bo,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cr(new C.e1N(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.Y(n?O.a1D:A7.OH,o,o,o,o,o)
v.push(A.at(A.ho(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e1O(p),o),o,o,o))}return A.c5(o,l,A.bm(!0,A.x(v,B.E,o,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c0O(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.n(22)
v=A.a([new A.ac(0,B.G,B.fP.j(0.35),B.du,18)],x.V)
u=A.n(22)
t=A.ap(-26,A.Y(B.zb,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aI(!1,B.a3,!0,m,A.aO(!1,m,!0,A.p(m,D.c0X,B.f,m,m,new A.o(B.c.j(0.16),m,A.L(B.c.j(0.45),B.r,1.5),m,m,m,B.a7),m,46,m,m,m,m,m,46),B.cQ,!0,m,m,m,m,m,m,m,m,m,m,m,n.gagJ(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.fq9,m,m,m)
r=r.gaqc()
p=n.d.gaqc()===1?"member":"members"
o=x.p
p=A.a([s,B.be,A.E(A.x(A.a([q,B.bH,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.i,0,B.p),1)],o)
if(C.uq(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bZ0,m,m,m,n.gct6(),m,m,m,m,"Rename",m))
s=A.A(p,B.m,m,B.e,B.i,0,m,m)
r=n.d.d
q=r?B.jG:B.mW
r=r?"Private":"Public"
r=A.E(n.awJ(q,"Privacy",r,n.a.d.w?n.gcFo():m),1)
q=A.E(n.awJ(B.zj,"Tree code",n.d.c,new C.e0W(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.ae,q,B.ae,A.E(n.awJ(D.bPQ,"Collaborators",p,n.gc5y()),1)],o),B.m,m,B.e,B.i,0,m,m)],o)
if(n.d.y===D.kV){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aI(!1,B.a3,!0,A.n(999),A.aO(!1,A.n(999),!0,new A.D(B.ha,A.A(A.a([A.Y(B.pr,B.c,m,m,m,14),B.e1,A.d("View only",m,m,m,m,m,m,B.aUL,m,m,m)],o),B.m,m,B.e,B.O,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.aj)],o))}return A.p(m,A.bx(u,new A.an(B.a0,m,B.ac,B.t,A.a([t,new A.D(B.GI,A.x(p,B.E,m,B.e,B.i,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.c5g,B.n),m,m,m,m,m,m,m,1/0)},
awJ(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aI(!1,B.a3,!0,A.n(14),A.aO(!1,A.n(14),!0,new A.D(I.amJ,A.x(A.a([A.Y(d,B.c,w,w,w,18),B.aw,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.vt,A.d(f,w,1,B.a2,w,w,w,Ap.AF,w,w,w)],x.p),B.m,w,B.e,B.i,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)}}
C.bgd.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gav(r)&&s.c.length===0)return B.bL
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bgg(s,t),new A.av(w,v))],x.p)
r=r.gdR(r)
B.d.v(u,r.dK(r,new C.dg7(this),x.l))
r=s.c
B.d.v(u,new A.N(r,new C.dg8(this),A.T(r).k("N<1,v>")))
return new A.D(B.ur,new A.a5(w,v,new A.an(B.a0,t,B.ac,B.f,u,t),t),t)}}
C.KL.prototype={}
C.Gs.prototype={}
C.bgf.prototype={
gbl5(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aKk.prototype={}
C.bgg.prototype={
bQd(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.S()
v=A.K()
v.r=B.bF.j(0.75).gp(0)
v.c=2
v.d=B.bA
d.ah(new A.q(n,w),new A.q(m,w),v)
u=(n+m)/2
t=new A.aE(q.r,B.ah,null,null,A.a([],x.v))
q=w+5.5
t.D(new A.aY(u,q))
s=w-1.1
r=w-8.8
t.D(new A.kP(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.D(new A.kP(u+4.95,r,u+9.9,s,u,q))
t.D(new A.bt())
q=A.K()
q.r=B.c.gp(0)
d.N(new A.q(u,w),9,q)
q=A.K()
q.r=B.bF.gp(0)
d.ae(t,q)},
bQa(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aZ(a0,new C.dgs())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aX(a0,new C.dgt(f))
t=new A.N(a0,new C.dgu(f),A.T(a0).k("N<1,H>")).bZ(0,new C.dgv()).cG(0,1/0,B.vQ)
w=f.a
d.ah(f,new A.q(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.J)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.q(o,v),p,e)
continue}l=J.mW(n)
k=Math.min(10,m/2)
m=$.S()
j=A.a([],r)
i=new A.aE(m.r,B.ah,null,null,j)
j.push(new A.aY(w,v-k))
i.a8()
m=l*k
h=new A.c4(w,v,w+m,v)
j.push(h)
g=i.f
if(g!=null)h.ai(g)
i.a8()
m=new A.aq(o-m,v)
j.push(m)
h=i.f
if(h!=null)m.ai(h)
i.a8()
m=new A.c4(o,v,o,v+k)
j.push(m)
h=i.f
if(h!=null)m.ai(h)
i.a8()
o=new A.aq(o,p.b)
j.push(o)
m=i.f
if(m!=null)o.ai(m)
i.a8()
d.ae(i,e)}},
a4(d,e){var w,v,u,t,s,r
$.S()
w=A.K()
w.r=B.bQ.j(0.75).gp(0)
w.c=2.2
w.b=B.aa
w.d=B.bA
w.e=B.dS
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.J)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bQa(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.J)(v),++t){r=v[t]
if(r.c)this.bQd(d,w,r.a,r.b)}},
aC(d){return d.b!==this.b}}
C.bk2.prototype={
gcbt(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aCX
switch(w.c.a){case 0:return D.cYU
case 1:return D.da0
case 2:return D.drR}},
gcbw(){var w=this.c,v=C.hyc(w.w),u=C.hyc(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.R(d).ax.a===B.J,q=t.gcbt(),p=t.c,o=N.bEy(p.f),n=t.gcbw(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cL,10)],m),k=r?B.av:B.c,j=A.L(r?B.av:B.c,B.r,2)
if(o!=null)w=A.tE(B.A,s,B.cj,B.bZ,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a9(B.a6,B.a9,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hR(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a7),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a9(B.aA,B.aF,B.x,q,s,s),B.a7),s,56,s,s,B.GY,s,s,56)],v)
k=t.d
if(k>0){j=A.n(10)
w=A.L(r?B.av:B.c,B.r,1.5)
l.push(A.ap(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fAG,s,s,s),B.f,s,s,new A.o(B.ch,s,w,j,s,s,B.n),s,s,s,s,D.bGS,s,s,s),s,s,s,-6,-4,s))}k=r?B.cs:B.c
j=A.n(8)
w=A.L(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dF,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cs,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aS:B.bo,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aA(s,new A.a5(84,112,A.x(A.a([new A.an(B.a0,s,B.ac,B.f,l,s),B.aw,A.p(s,A.x(p,B.m,s,B.e,B.O,0,B.p),B.f,s,D.b5N,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bH2,s,s,s)],v),B.m,s,B.e,B.i,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bfi.prototype={
a4(d,e){var w,v,u,t,s
$.S()
w=A.K()
v=this.b
u=v?B.c:D.biC
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.N(new A.q(s,t),1,w)},
aC(d){return d.b!==this.b}}
C.by_.prototype={
B(d){var w=this,v=null,u=new C.flk(w),t=w.c,s=t?B.cs:B.c,r=A.n(12),q=u.$3(B.hU,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bB:B.fo,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.wE,"Zoom out",w.e)
return A.aI(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bB:B.fo,v,v,v,1,v,v,v,v,v,22),u.$3(B.apg,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.O,0,B.p),B.f,s,4,v,B.dq,v,v,v,B.aj)}}
C.bnl.prototype={
B(d){var w=this,v=null,u=B.bQ.j(0.15),t=A.L(B.bQ,B.r,2),s=w.e,r=x.p
t=A.aA(v,A.p(v,A.x(A.a([A.Y(s?O.a1D:A7.OH,B.bQ,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fwO,v,v,v)],r),B.m,v,B.bb,B.i,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a7),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.an,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fuE,B.K,v,v)],r)
if(s){t=A.a([B.an],r)
s=w.d
B.d.v(t,new A.N(s,new C.eWu(w),A.T(s).k("N<1,v>")))
B.d.v(u,t)}return new A.a5(84,v,A.x(u,B.m,v,B.e,B.i,0,B.p),v)}}
C.a_W.prototype={
S(){return new C.aDc()},
bv(){return this.Q.$0()},
ge3(){return this.w}}
C.aDc.prototype={
Y(){var w,v,u,t,s,r=this,q=null
r.a3()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aQ()
r.d=new A.au(new A.ba(t,B.b5,B.aP),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aQ()
r.e=new A.au(new A.ba(t,B.b5,B.aP),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aQ()
r.f=new A.au(new A.ba(t,B.b5,B.aP),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aQ()
r.r=new A.au(new A.ba(t,B.b5,B.aP),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aQ()
r.w=new A.au(new A.ba(t,B.b5,B.aP),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aQ()
r.x=new A.au(new A.ba(t,B.b5,B.aP),s)
t=u?q:v.c
r.y=t==null?D.yS:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.igB(w.r,w.f)
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
v.a2()},
Qc(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Qc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hnl(p.y,p.w)
w=3
return A.b(A.lv(t.a.w,B.Jj),$async$Qc)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b0M(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Qc)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hSF(p.y,p.w)
t.a.bv()
case 5:w=7
return A.b(Ay.Hm(78,800),$async$Qc)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dwk(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Qc,v)},
cbv(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hS(B.o.u(1000*Date.now()),w,D.yS,null,null,null,"","","","","",1,!1,0)
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
s=v.aFJ(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).O(s)},
aau(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aau=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dwj(r),s,null,!0,!0,x.y),$async$aau)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$aau,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.R(d).ax.a===B.J,i=new C.uc(j),h=l.a.e,g=A.T(h).k("X<1>"),f=A.C(new A.X(h,new C.dwt(l),g),g.k("M.E"))
h=j?B.e7:B.c
g=A.n(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bFg,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.av,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ap(k,A.hb(A.aO(!1,k,!0,new A.D(B.md,A.Y(B.ef,B.pc,k,k,k,17),k),B.cQ,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbLa(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jT:B.jj
t=N.bEy(l.as)
if(l.as==null)s=A.Y(B.pi,j?B.bv:B.bo,k,k,k,40)
else s=k
s=A.at(A.aA(k,new A.an(B.a0,k,B.ac,B.t,A.a([A.h7(u,t,s,k,42),A.ap(0,A.h7(B.bQ,k,D.bSv,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcbs(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.c()
t=C.aDe(t,"Full name",B.mS,1,1,i,B.ms)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.X,new C.bk0(i,u,new C.dwu(l),k)],v),B.m,k,B.e,B.i,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bo,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.byE],q)
o=l.a.e
B.d.v(p,new A.N(o,new C.dwv(),A.T(o).k("N<1,eF<m?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bo,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.byG],q)
B.d.v(q,new A.N(f,new C.dwx(),A.T(f).k("N<1,eF<m?>>")))
o=A.x(A.a([t,B.an,new C.adX(i,r,"Who is their parent?",p,new C.dwy(l),k,o),B.aC,n,B.an,new C.adX(i,m,"Who is their spouse / partner?",q,new C.dwz(l),k,o)],v),B.al,k,B.e,B.i,0,B.p)
q=l.f
q===$&&A.c()
q=C.aDe(q,"Birth date",D.aol,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aDe(m,"Birth place",B.a1S,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aDe(n,"Date of death (if deceased)",D.aqt,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aDe(p,"Occupation",B.a31,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.ac,B.t,w,k),B.aC,s,B.by,new C.adY(i,"Identity",u,k),B.af,new C.adY(i,"Family links",o,k),B.af,new C.adY(i,"Life details",A.x(A.a([q,B.X,m,B.X,n,B.X,p,B.X,C.aDe(r,"Notes",B.li,5,3,i,k)],v),B.m,k,B.e,B.i,0,B.p),k),B.af,new C.aDd(i,"Child order",l.cjy(l.at),new C.dwA(l),new C.dwB(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hcx(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dwC(l):k
B.d.v(r,A.a([B.X,new C.aDd(i,"Visible in tree",u,w,new C.dwD(l),k)],v))}r.push(B.X)
w=j?B.jT:B.jj
u=A.n(14)
t=A.L(j?B.ee:B.bP,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.av,k,k,k,k,k,k,k,k,14,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iO(k,B.bQ,k,B.ag,k,new C.dwE(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bo,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,O.ald,k,k,k))
r.push(B.by)
w=j?B.aQ:B.av
j=j?B.ee:B.bP
r.push(A.A(A.a([A.E(A.dT(B.nU,new C.dww(d),A.di(k,k,k,k,k,k,k,k,k,w,k,k,B.cn,k,new A.b9(A.n(14),B.a1),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.be,A.E(A.bH(D.f7p,k,l.gcbu(),A.bn(B.aY,k,k,0,B.c,k,B.cn,k,new A.b9(A.n(14),B.a1),k,k,k)),2)],v),B.m,k,B.e,B.i,0,k,k))
r.push(B.aw)
return A.eg(B.f4,k,B.ag,h,new A.a5(420,k,A.cg(A.x(r,B.al,k,B.e,B.O,0,B.p),B.t,k,B.y,k,k,k,k,B.ai),k),D.am2,k,B.alq,new A.b9(g,B.a1),k,k)},
cjy(d){var w=B.o.E(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.E(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.adY.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bo,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jT:B.jj,s=A.n(16)
return A.x(A.a([new A.D(D.amt,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.L(v?B.ee:B.bP,B.r,1),s,w,w,B.n),w,w,w,w,B.bh,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)}}
C.bk1.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.e7:B.c,r=A.n(12),q=A.L((t?B.ee:B.bP).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aQ:B.av,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.Z,!1,u,!0,B.t,u,A.aN(),v.d,u,u,u,u,u,2,A.bs(u,B.eH,u,B.we,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bv:B.bo,u,u,u,u,u,u,u,u,u,u,u,B.cC,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.Y(v.f,B.bQ,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ak,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ab,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.adX.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.e7:B.c,s=A.n(12),r=A.L((u?B.ee:B.bP).j(0.85),B.r,1),q=A.Y(B.rT,u?B.bv:B.bo,v,v,v,v),p=A.l(v,v,u?B.aQ:B.av,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.e7:B.c
return A.p(v,new A.Ef(A.a58(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bv:B.bo,v,v,v,v,v,v,v,v,v,v,v,B.cC,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.ks,v,v,v)}}
C.bk0.prototype={
B(d){var w=new C.dwF(this)
return A.A(A.a([w.$3(D.wm,"Male",B.Ps),B.ae,w.$3(D.op,"Female",B.Pb),B.ae,w.$3(D.yS,"Other",B.nE)],x.p),B.m,null,B.e,B.i,0,null,null)}}
C.aDd.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jT:B.jj,r=A.n(14),q=A.L(t?B.ee:B.bP,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.av,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bo,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.i,0,B.p),1),new C.aJm(u,B.wE,w.f,v),B.bn,new C.aJm(u,B.hU,w.r,v)],o),B.m,v,B.e,B.i,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.eD,v,v,v)}}
C.aJm.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bQ.j(0.12)
else w=s.c.a?B.e7:B.c
v=A.n(10)
u=A.n(10)
if(p)t=B.bQ
else t=(s.c.a?B.bv:B.bo).j(0.4)
return A.aI(!1,B.a3,!0,v,A.aO(!1,u,!0,new A.a5(36,36,A.Y(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.aj)}}
C.adZ.prototype={
bUm(d){switch(d.a){case 0:return B.bQ
case 1:return B.bF
case 2:return B.d_}},
bUn(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aZy(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
AE(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.e7:B.c
u=A.n(12)
t=A.L((w?B.ee:B.bP).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.Y(f,B.bQ,p,p,p,18),B.at],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bv:B.bo,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.aw,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.av,p,p,p,p,p,p,p,p,14,p,p,B.V,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.i,0,B.p),1))
return A.p(p,A.A(r,B.E,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cv,B.yz,p,p,1/0)},
af7(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bo,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jT:B.jj,s=A.n(16),r=A.L(v?B.ee:B.bP,B.r,1)
return A.x(A.a([new A.D(D.amt,u,w),A.p(w,A.x(e,B.m,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bU,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hDj(r,q),o=q.c,n=t.bUm(o),m=N.bEy(q.f),l=t.e.a,k=l?B.e7:B.c,j=A.n(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aQ:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kV?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bv:B.bo,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.L(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.I,12)],x.V)
u=n.j(0.12)
l=A.at(A.p(s,A.h7(u,m,m==null?A.Y(B.pi,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a7),s,s,s,s,B.ey,s,s,s),s,s,s)
w=n.j(0.14)
v=A.n(20)
u=A.L(n.j(0.45),B.r,1)
v=A.at(A.p(s,A.d(t.bUn(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mO,s,s,s),s,s,s)
u=x.p
i=A.a([t.AE("Full name",i,B.mS)],u)
if(p>0)i.push(t.AE("Child order","#"+p,B.Ph))
r=A.a([h,B.aw,r,B.aR,l,B.X,v,B.by,t.af7("Identity",i),B.af,t.af7("Life details",A.a([t.AE("Birth date",q.w,D.aol),t.AE("Birth place",q.x,B.a1S),t.AE("Date of death",q.y,D.aqt),t.AE("Occupation",q.z,B.a31)],u)),B.af,t.af7("Family links",A.a([t.AE("1. Parent",t.aZy(q.d),B.He),t.AE("2. Spouse",t.aZy(q.e),B.Hs)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.af,t.af7("Notes",A.a([t.AE("Notes",q,B.li)],u))],u))
r.push(B.by)
r.push(A.bH(B.KN,s,new C.dwP(d),A.bn(B.aY,s,s,s,s,s,B.cn,s,new A.b9(A.n(14),B.a1),s,s,s)))
return A.eR(s,k,new A.cR(B.lZ,A.cg(A.x(r,B.al,s,B.e,B.O,0,B.p),B.t,s,B.y,s,B.wi,s,s,B.ai),s),s,s,s,B.GL,B.da,s,new A.b9(j,B.a1),s)}}
C.Go.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bv:B.bo
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.uu,A.hb(A.aI(!1,B.a3,!0,A.n(8),A.aO(!1,A.n(8),!0,new A.a5(30,30,A.Y(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.aj),u,v.c,u,u),u)}}
C.aqC.prototype={
f1(){var w,v,u=this,t=x.N,s=A.U(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.ab().af())
w=u.c
v=A.T(w).k("N<1,a8<m,@>>")
w=A.C(new A.N(w,new C.cep(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jp(w,new C.ceq(),t,x.fO))
return s}}
C.aqD.prototype={
S(){return new C.aEL(A.a([],x.bF))},
gd1(){return this.c}}
C.aEL.prototype={
Y(){this.a3()
this.K0()},
K0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$K0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cet(t.a.c),$async$K0)
case 3:r=e
w=4
return A.b(C.Be(t.a.c),$async$K0)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rf(q,new C.e1X(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.e1Y(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$K0,v)},
yX(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.a_,w,w,w,w,w,w,w,w,w,w))},
KO(d,e){return this.cJ_(d,e)},
cJ_(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$KO=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.e21(q,e))
t=3
w=6
return A.b(d.$0(),$async$KO)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.e22(q))
$.eV.mC()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$KO,v)},
Yf(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pr(r,s.c,s.e),$async$Yf)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KO(new C.e1U(t),"Preparing download\u2026"),$async$Yf)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yf,v)},
Yj(d){return this.bSg(d)},
bSg(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pr(r,s.c,s.e),$async$Yj)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.KO(new C.e1V(t,d),"Preparing file\u2026"),$async$Yj)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yj,v)},
ah5(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ah5=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xH.co().MB(B.Sp,B.ux,!0),$async$ah5)
case 7:r=e
o=r
q=o==null?null:J.fq(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aH.gav(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jF(o,0,null)
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
case 6:u=A.Hl()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ah5,v)},
YW(d){return this.c1J(d)},
c1J(d){var w=0,v=A.j(x.H),u=this
var $async$YW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.KO(new C.e1W(u,d),"Restoring family trees\u2026"),$async$YW)
case 2:return A.h(null,v)}})
return A.i($async$YW,v)},
YV(){var w=0,v=A.j(x.H),u,t=this,s
var $async$YV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ah5(),$async$YV)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.YW(s),$async$YV)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YV,v)},
a2P(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2P=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pr(r,s.c,s.e),$async$a2P)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KO(new C.e20(t),"Creating QR code\u2026"),$async$a2P)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2P,v)},
a2q(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Dt()){t.yX("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).cd(A.eb(new C.e1Z(),!0,null,x.N)),$async$a2q)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.YW(r),$async$a2q)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2q,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.R(d).ax.a===B.J,n=o?B.By:B.iB,m=o?D.ajE:B.aQ,l=o?B.aL:B.bP,k=o?B.aQ:B.av,j=new C.dgw(n,m,l,k,o?B.bM:B.bo)
l=A.aH(p,p,p,p,A.Y(B.eM,k,p,p,p,20),p,p,p,new C.e24(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eE(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.dg4(!0,B.jI,B.aJ,B.aJ,q.r?p:q.gczw(),j,s,"Show restore QR"),1),B.at],u))}s=q.e
r=q.r?p:q.gcvG()
t.push(A.E(C.dg4(!s,B.jn,B.b8,B.bt,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.m,p,B.e,B.i,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.dg4(!1,B.hV,B.aY,B.bQ,q.r?p:q.gbS9(),j,"Photos & books included","Download all trees"),1),B.at],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dg4(!1,R.zk,B.az,B.aU,q.r?p:q.gc1G(),j,s,"Upload backup file"),1))
l=A.a([new C.bge(v,l,p),B.l1,new C.add(j,"QR restore",p),B.X,t,B.d6,new C.add(j,"Backup files",p),B.X,A.A(r,B.m,p,B.e,B.i,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.l1,new C.add(j,"One tree",p),B.X],u)
B.d.v(v,J.b7(q.d,new C.e25(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cj(l,p,p,B.a0m,p,p,B.ai,!1)],u)
if(q.r){v=A.n(18)
t=A.L(B.aY.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.du,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ap(24,A.bm(!0,A.p(p,A.A(A.a([O.aT9,B.be,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.V,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.Ce,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c5(w,n,new A.an(B.a0,p,B.ac,B.t,l,p),p,!1,!1,p,p)}}
C.dgw.prototype={}
C.bge.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.n(24)
u=A.a([new A.ac(0,B.G,B.aY.j(0.32),B.kA,28)],x.V)
t=A.ap(p,A.Y(B.uR,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.n(18)
q=x.p
return A.p(p,new A.an(B.a0,p,B.ac,B.t,A.a([t,new A.D(B.ab,A.A(A.a([A.p(p,D.c0t,B.f,p,p,new A.o(s,p,A.L(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.oR,A.E(A.x(A.a([D.fFQ,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.i,0,B.p),1)],q),B.E,p,B.e,B.i,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.c8v,B.n),p,p,p,p,p,p,p,p)}}
C.add.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.f,w,w,new A.o(B.aY,w,w,A.n(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ae,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)}}
C.bgc.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.n(18),n=A.n(18),m=r.c,l=r.y,k=l?B.aJ.j(0.4):m.c
k=A.L(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aJ.j(0.1),B.cL,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.n(12)
t=r.r
s=A.L(t.j(0.35),B.r,1)
return A.aI(!1,B.a3,!0,q,A.aO(!1,o,!0,A.eG(A.da(new A.D(E.a_Z,A.x(A.a([A.p(q,A.Y(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.rP,q,q,q),B.af,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bH,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cC,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.i,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)}}
C.bgh.prototype={
B(d){var w=this,v=null,u=A.n(18),t=A.n(18),s=w.c,r=A.L(s.c,B.r,1),q=B.aY.j(0.14),p=A.n(12),o=s.e,n=x.p
return A.aI(!1,B.a3,!0,v,A.aO(!1,u,!0,A.eG(new A.D(B.eV,A.A(A.a([A.p(v,D.c_I,B.f,v,v,new A.o(q,v,A.L(B.aY.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.rP,v,v,v),B.be,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.i,0,B.p),1),A.Y(B.hV,o,v,v,v,20)],n),B.m,v,B.e,B.i,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.aj)}}
C.a0f.prototype={
S(){return new C.aEK()},
gd1(){return this.c}}
C.aEK.prototype={
Y(){this.a3()
this.aa1()},
aa1(){var w=0,v=A.j(x.H),u=this,t
var $async$aa1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b3q(u.a.c,B.E1),$async$aa1)
case 2:t=e
if(u.c!=null)u.m(new C.e1P(u,t))
return A.h(null,v)}})
return A.i($async$aa1,v)},
aix(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aix=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.e1Q(q))
t=4
p=A.hp1(q.a.d,B.E1)
if(p==null){n=A.bc("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.asW(n.e,m,l,B.E1,p,n.f),$async$aix)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.e1R(q))
q.c.L(x.q).f.U(D.fgZ)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(B.a.el(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e1S(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aix,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.R(d).ax.a===B.J,o=p?B.jz:B.qf,n=p?B.iA:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eE(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fWd,q,q,q,1,q,!0)
w=A.n(24)
v=A.L(B.aY.j(0.35),B.r,1)
u=A.q7(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aY,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.P,u,B.by,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.am,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.m,q,B.bb,B.i,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.ab,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.bu,q,q,q,q,q,q,q,q,q,q,q,B.V,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcvp()
if(u)u=B.Kf
else u=A.Y(r.e===!0?B.hF:B.aok,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a5(1/0,q,A.es(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cg,q,q,q),t,A.di(q,q,q,q,q,q,q,q,q,B.aY,q,B.h3,q,q,q,new A.ay(B.aY.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.i9,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aD:B.am,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.X)
w.push(new A.a5(1/0,q,A.bH(B.AN,q,new C.e1T(d),A.bn(B.aY,q,q,q,q,B.h3,q,q,q,q,q,q)),q))
return A.c5(m,o,new A.D(B.ab,A.x(w,B.m,q,B.e,B.i,0,B.p),q),q,!1,!1,q,q)}}
C.a0g.prototype={
S(){return new C.blu(A.zM(B.yo,B.o_,B.uZ))}}
C.blu.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return A.c5(A.eE(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fO1,w,w,w,1,w,!0),B.w,A.zL(this.d,B.bZ,new C.e26(this,d)),w,!1,!1,w,w)}}
C.b_i.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.RU,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lS.prototype={}
C.a71.prototype={
S(){return new C.bla(null,null)}}
C.bla.prototype={
Y(){var w=this,v=null
w.a3()
w.d=A.bl(v,B.rI,v,1,v,w)
w.e=A.bl(v,B.qo,v,1,v,w)
w.a.toString
w.d.cP(0)
w.e.cP(0)},
by(d){var w,v,u=this
u.bH(d)
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
this.byt()},
B(d){var w,v,u=this,t=B.d.dO(D.a5X,new C.dOp(u),new C.dOq())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cC1(A.c9(new A.h4(A.a([w,v],x.dS)),new C.dOr(u,t),null),!0)}}
C.bl9.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b38(d,e)
break
case"house":p.mf(d,e,D.deZ)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdz()
$.S()
t=A.K()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.N(new A.q(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.ml(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.Bp(d,e,12)
p.yy(d,e,B.lb,5,14)
break
case"grocery":p.ckh(d,e)
break
case"calculator":p.cjZ(d,e)
break
case"lumber":p.ckp(d,e)
break
case"kitchen":p.ckk(d,e)
break
case"landscape":p.mf(d,e,D.dfA)
s=new A.aE($.S().r,B.ah,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.D(new A.aY(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.D(new A.c4(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.D(new A.c4(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.D(new A.aq(t,w))
s.D(new A.aq(0,w))
s.D(new A.bt())
w=A.K()
w.r=B.en.j(0.85).gp(0)
d.ae(s,w)
p.Bp(d,e,8)
p.yy(d,e,B.is,4,18)
break
case"plumbing":p.cky(d,e)
break
case"electrical":p.mf(d,e,D.dr4)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.S()
u=A.K()
u.r=B.c.j(q*0.12).gp(0)
d.au(new A.a2(0,0,0+e.a,0+e.b),u)
p.ml(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.ml(d,e,B.m3.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.Bp(d,e,10)
break
case"store":p.ckI(d,e)
break
case"paint_remodel":p.ckt(d,e)
break
case"roofing":p.ckA(d,e)
break
case"warehouse":p.ckP(d,e)
break
case"vehicles":p.ckN(d,e)
break
case"farm":p.ckb(d,e)
break
case"restaurant":p.ckz(d,e)
break
case"tools":p.ckL(d,e)
break
case"wallet":p.ckO(d,e)
break
case"concrete":p.ck4(d,e)
break
case"blueprint":p.cjX(d,e)
break
default:p.b38(d,e)}},
mf(d,e,f){var w,v=new A.a2(0,0,0+e.a,0+e.b)
$.S()
w=A.K()
w.sar(new A.a9(B.aA,B.aF,B.x,f,null,null).aG(0,v))
d.au(v,w)},
ml(d,e,f,g,h){var w,v,u,t=new A.q(e.a/2,e.b/2),s=e.gdz()/2-h
$.S()
w=A.K()
w.b=B.aa
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cN(A.bX(t,s),u,u+0.1439896632895322-u,!1,w)}},
yy(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdz()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.S()
r=new A.ao(B.Q,B.N,B.T,B.U,B.S)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.N(new A.q(q+t*o,p+s*o),3.5,r)}},
Bp(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.k.E(t*0.17,0.9)
q=B.k.E(t*0.23,0.85)
$.S()
p=new A.ao(B.Q,B.N,B.T,B.U,B.S)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.N(new A.q(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b38(d,e){var w,v=this
v.mf(d,e,D.dpo)
w=v.c
v.ml(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.ml(d,e,B.bN.j(0.45),-w*3.141592653589793*1.4,22)
v.bQ6(d,e,B.i4,w)
v.yy(d,e,B.c.j(0.7),6,8)},
bQ6(d,e,f,g){var w,v,u,t,s,r
$.S()
w=A.K()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.au(new A.a2(16,r,t,r+3),w)}},
ckh(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mf(d,e,D.cub)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.E(t,3)
q=Math.sin(s)
p=B.o.aq(t,3)
o=Math.cos(s*0.8)
n=B.o.E(t,2)
$.S()
m=new A.ao(B.Q,B.N,B.T,B.U,B.S)
m.r=D.ddb[B.o.E(t,4)].j(0.85).gp(0)
d.N(new A.q(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.ml(d,e,B.c.j(0.35),w,16)
l.yy(d,e,B.is,5,12)},
cjZ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mf(d,e,D.cuj)
w=i.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdz()
$.S()
q=A.K()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.N(new A.q(t/2,s/2),r*(0.18+u*0.08),q)
p=A.fv(h,B.ct,h,h,h,h,B.a5,B.bW,h,B.dD,B.bX)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dhk[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.E(o,2)
p.sb1(0,new A.en(r,h,h,B.cH,h,h,h,h,h,h,new A.G(!0,q,h,h,h,h,14+m*4,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.ef()
p.a4(d,new A.q(t*(0.08+B.o.E(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.aq(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cul[o]
l=B.kK.j(0.28+0.3*Math.sin(n))
k=B.o.E(o,2)
p.sb1(0,new A.en(m,h,h,B.cH,h,h,h,h,h,h,new A.G(!0,l,h,h,h,h,12+k*3,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.ef()
p.a4(d,new A.q(t*(0.55+B.o.E(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.aq(o,3)*0.38)+Math.sin(n)*6))}i.ml(d,e,B.c.j(0.35),w*1.5,14)
i.ml(d,e,B.eI.j(0.55),-v*3.141592653589793*2,8)
i.ml(d,e,B.y4.j(0.4),r*2.8,22)
i.yy(d,e,B.q4,8,10)
i.Bp(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.k.E(w+o*0.22,0.9)
$.S()
v=new A.ao(B.Q,B.N,B.T,B.U,B.S)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.q(12,j),new A.q(t,j),v)}},
ckp(d,e){var w,v,u,t,s,r,q,p,o=this
o.mf(d,e,W.aA4)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.br(new A.a2(20,r,u,r+10),B.hM)
$.S()
p=new A.ao(B.Q,B.N,B.T,B.U,B.S)
p.r=A.ar(B.fY,B.o5,(s+1)/2).gp(0)
d.ap(q,p)}o.ml(d,e,B.fY.j(0.35),w,15)
o.Bp(d,e,8)},
ckk(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mf(d,e,D.ddG)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.k.E(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.k.E(s*0.13,0.7)
$.S()
m=new A.ao(B.Q,B.N,B.T,B.U,B.S)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.N(new A.q(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.ml(d,e,B.bN.j(0.4),-w*3.141592653589793*2.2,11)
l.yy(d,e,B.q1,4,14)},
cky(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mf(d,e,D.d1U)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.k.E(s,0.12)
$.S()
o=new A.ao(B.Q,B.N,B.T,B.U,B.S)
o.b=B.aa
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.N(new A.q(w,u),q*(0.12+r*0.14+p),o)}n.yy(d,e,B.pa,6,12)
n.ml(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
ckI(d,e){var w,v,u,t,s,r,q,p=this
p.mf(d,e,D.cHY)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.br(new A.a2(r,14,r+u,22),B.ij)
$.S()
q=new A.ao(B.Q,B.N,B.T,B.U,B.S)
q.r=A.ar(B.fj,B.bN,(s+1)/2).gp(0)
d.ap(r,q)}p.ml(d,e,B.c.j(0.3),w,16)
p.Bp(d,e,8)
p.yy(d,e,B.vX,5,13)},
ckt(d,e){var w,v,u,t,s,r,q
this.mf(d,e,D.d8e)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.k.E(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.br(new A.a2(r,q,r+8,q+(18+s*22)),B.hN)
$.S()
r=new A.ao(B.Q,B.N,B.T,B.U,B.S)
r.r=[B.ip,B.dw,B.bN,B.et][t].j(0.85).gp(0)
d.ap(q,r)}this.ml(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
ckA(d,e){var w,v,u,t,s,r,q
this.mf(d,e,D.d5A)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.k.E(v+t*0.12,0.75))
r=B.o.E(t,4)*0.22
$.S()
q=new A.ao(B.Q,B.N,B.T,B.U,B.S)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.q(u*(0.1+r),s),new A.q(u*(0.18+r),s+10),q)}this.yy(d,e,B.cr,7,11)},
ckP(d,e){var w,v,u,t,s,r,q,p
this.mf(d,e,D.cKI)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.br(new A.a2(q,p,q+(t-s*8),p+16),B.hM)
$.S()
q=new A.ao(B.Q,B.N,B.T,B.U,B.S)
q.r=A.ar(B.cr,B.aQ,(Math.sin(r)+1)/2).gp(0)
d.ap(p,q)}this.ml(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
ckN(d,e){var w,v,u,t,s,r,q
this.mf(d,e,D.dvc)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.k.E(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.E(t,2)*0.08)
r=A.br(new A.a2(s,r,s+28,r+8),B.hM)
$.S()
q=new A.ao(B.Q,B.N,B.T,B.U,B.S)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.ap(r,q)}this.Bp(d,e,6)},
ckb(d,e){var w,v,u,t,s,r,q,p
this.mf(d,e,D.dce)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.S()
s=A.K()
s.r=B.m3.j(0.75).gp(0)
d.N(new A.q(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ao(B.Q,B.N,B.T,B.U,B.S)
p.r=B.hl.j(0.85).gp(0)
p.c=3
d.ah(new A.q(q,v),new A.q(q+s*6,t),p)}this.ml(d,e,B.m3.j(0.35),w,14)},
ckz(d,e){var w,v,u,t,s,r,q=this
q.mf(d,e,D.deO)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bJ(new A.q(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.S()
r=new A.ao(B.Q,B.N,B.T,B.U,B.S)
r.r=B.c.j(0.22).gp(0)
d.bY(s,r)}q.yy(d,e,B.q1,5,16)
q.Bp(d,e,7)},
ckL(d,e){var w,v,u,t,s,r,q,p,o=this
o.mf(d,e,D.dsC)
w=o.c
v=w*3.141592653589793
o.ml(d,e,B.o5.j(0.55),v*3,10)
o.ml(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.S()
p=new A.ao(B.Q,B.N,B.T,B.U,B.S)
p.r=B.o5.j(0.8).gp(0)
d.N(new A.q(v+r*34,u+q*22),4,p)}},
ckO(d,e){var w,v,u,t,s,r,q,p,o=this
o.mf(d,e,D.dvT)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.br(new A.a2(q,p,q+36,p+22),B.ij)
$.S()
q=new A.ao(B.Q,B.N,B.T,B.U,B.S)
q.r=A.ar(B.is,B.m3,r).gp(0)
d.ap(p,q)}o.Bp(d,e,9)
o.ml(d,e,B.c.j(0.4),w*2.2,12)},
ck4(d,e){var w,v,u,t,s,r,q,p
this.mf(d,e,D.dke)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bX(new A.q(v,u),34)
$.S()
s=A.K()
s.b=B.aa
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cN(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ao(B.Q,B.N,B.T,B.U,B.S)
p.r=B.bP.j(0.85).gp(0)
d.N(new A.q(v+t*34,u+s*34),3,p)}},
cjX(d,e){var w,v,u,t,s,r,q
this.mf(d,e,D.dfV)
$.S()
w=A.K()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=0;t<v;t+=18)d.ah(new A.q(t,0),new A.q(t,u),w)
for(s=0;s<u;s+=18)d.ah(new A.q(0,s),new A.q(v,s),w)
r=this.c
q=u*B.k.E(r*0.85,1)
$.S()
u=A.K()
u.r=B.dw.j(0.45).gp(0)
d.au(new A.a2(0,q,0+v,q+6),u)
this.ml(d,e,B.lb.j(0.45),-r*3.141592653589793*2,11)},
aC(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.atH.prototype={
a04(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a04=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aRl(),$async$a04)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a9e(s),$async$a04)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a04,v)},
ah6(d){return this.cn6(d)},
cn6(d){var w=0,v=A.j(x.H),u=this,t
var $async$ah6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.ip_(d),$async$ah6)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ah6,v)},
B(d){var w,v,u,t=null,s=A.R(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.J?B.jT:B.jj
w=x.p
v=A.a([C.aRK(!0,B.rh,1/0,B.qA,t,r,1/0)],w)
if(!q){u=A.a([B.L,B.w.j(0.35)],x.O)
v.push(A.c3(new A.bL(B.b1,t,t,new A.D(B.wa,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.V,t,t,!0,t,t,t,t,t,B.aB3,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a9(B.b1,B.b7,B.x,u,t,t),B.n),B.bi))}v.push(A.ap(8,A.A(A.a([A.E(A.dh(D.bUg,D.fC3,new C.cnM(this,d),A.bn(B.aY,t,t,t,B.c,t,B.k_,t,t,t,t,B.ce)),1),B.ae,A.E(A.es(D.c1J,D.fRc,this.gce2(),A.di(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.k_,t,t,D.b4k,t,t,t,B.ce)),1)],w),B.m,t,B.e,B.i,0,t,t),t,t,8,8,t,t))
return new A.fF(1.7777777777777777,A.aI(!1,B.a3,!0,B.rh,new A.an(B.a0,t,B.b4,B.t,v,t),B.aq,s,0,t,t,t,t,t,B.aj),t)}}
C.aMM.prototype={
aY(){this.b5()
this.b4()
this.dN()},
t(){var w=this,v=w.b9$
if(v!=null)v.a5(0,w.gdG())
w.b9$=null
w.a2()}}
C.aUK.prototype={}
C.aUJ.prototype={}
C.aSK.prototype={}
C.ZU.prototype={
S(){return new C.azX()}}
C.azX.prototype={
Y(){var w,v,u=this
u.a3()
u.a.toString
w=new A.ba("",B.b5,B.aP)
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(w,v)},
t(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a2()},
KE(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.L(x.q).f.U(D.fht)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).O(new C.aUK(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.R(d).ax.a===B.J,l=m?B.e7:B.c,k=A.n(20),j=A.p(n,D.c1o,B.f,n,n,new A.o(B.aY.j(0.15),n,n,A.n(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aQ:B.av,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bH,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bo,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.i,0,B.p),1)
j=A.A(A.a([j,B.be,i,A.aH(n,n,n,n,A.Y(B.cz,m?B.bv:B.bo,n,n,n,n),n,n,n,new C.d7L(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.i,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bo,n,n,n,n,n,n,n,n,12,n,n,B.V,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bo,n,n,n,n,n,n,n,n,11,n,n,B.cC,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hph(new C.d7M(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aQ:B.av,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jT:B.jj
r=A.n(12)
q=A.n(12)
p=m?B.ee:B.bP
t=A.aM(n,B.Z,!0,n,!0,B.t,n,A.aN(),u,n,n,n,n,n,2,A.bs(n,new A.b6(4,r,B.dn),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d7N(o),n,!1,n,n,!1,n,!0,n,B.ab,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,A0.Km,n,n,n,n)
u=m?B.aQ:B.av
m=m?B.ee:B.bP
return A.eR(n,l,new A.cR(B.lZ,A.cg(A.x(A.a([j,B.aR,i,B.aw,w,B.P,v,B.aR,t,B.by,A.A(A.a([A.E(A.dT(B.dl,new C.d7O(d),A.di(n,n,n,n,n,n,n,n,n,u,n,n,B.cn,n,new A.b9(A.n(12),B.a1),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.at,A.E(A.bH(D.fRr,n,o.ga3a(),A.bn(B.aY,n,n,n,B.c,n,B.cn,n,new A.b9(A.n(12),B.a1),n,n,n)),1)],h),B.m,n,B.e,B.i,0,n,n)],h),B.E,n,B.e,B.O,0,B.p),B.t,n,B.y,n,B.Cf,n,n,B.ai),n),n,n,n,A6.Cg,B.da,n,new A.b9(k,B.a1),n)}}
C.ZT.prototype={
S(){return new C.azW()}}
C.azW.prototype={
Y(){this.a3()
var w=$.aw()
this.d!==$&&A.aQ()
this.d=new A.au(B.au,w)},
t(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a2()},
KE(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.L(x.q).f.U(D.ff6)
return}v=this.c
v.toString
A.a6(v,!1).O(new C.aUJ(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.R(d).ax.a===B.J,o=p?B.e7:B.c,n=A.n(20),m=A.p(q,D.bYT,B.f,q,q,new A.o(B.bQ.j(0.15),q,q,A.n(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.av,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bH,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bv:B.bo,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.i,0,B.p),1)
m=A.A(A.a([m,B.be,l,A.aH(q,q,q,q,A.Y(B.cz,p?B.bv:B.bo,q,q,q,q),q,q,q,new C.d7H(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.i,0,q,q)
l=B.aY.j(p?0.12:0.08)
w=A.n(12)
v=A.L(B.aY.j(0.25),B.r,1)
u=A.Y(B.ao6,B.aY.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.at,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.av,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.i,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bE,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aQ:B.av,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jT:B.jj
t=A.n(12)
s=A.n(12)
r=p?B.ee:B.bP
v=A.aM(q,B.Z,!0,q,!0,B.t,q,A.aN(),w,q,q,q,q,q,2,A.bs(q,new A.b6(4,t,B.dn),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d7I(this),q,!1,q,q,!1,q,!0,q,B.ab,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.l2,q,q,q,q)
w=p?B.aQ:B.av
p=p?B.ee:B.bP
return A.eR(q,o,new A.cR(B.lZ,A.cg(A.x(A.a([m,B.aR,l,B.aC,v,B.by,A.A(A.a([A.E(A.dT(B.dl,new C.d7J(d),A.di(q,q,q,q,q,q,q,q,q,w,q,q,B.cn,q,new A.b9(A.n(12),B.a1),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.at,A.E(A.bH(D.fYu,q,this.ga3a(),A.bn(B.bQ,q,q,q,B.c,q,B.cn,q,new A.b9(A.n(12),B.a1),q,q,q)),1)],k),B.m,q,B.e,B.i,0,q,q)],k),B.E,q,B.e,B.O,0,B.p),B.t,q,B.y,q,B.Cf,q,q,B.ai),q),q,q,q,A6.Cg,B.da,q,new A.b9(n,B.a1),q)}}
C.Zq.prototype={
S(){return new C.ayG()}}
C.ayG.prototype={
Y(){var w,v=this
v.a3()
w=$.aw()
v.d!==$&&A.aQ()
v.d=new A.au(B.au,w)
v.e!==$&&A.aQ()
v.e=new A.au(new A.ba("1",B.b5,B.aP),w)
v.f!==$&&A.aQ()
v.f=new A.au(B.au,w)
v.r!==$&&A.aQ()
v.r=new A.au(B.au,w)},
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
v.a2()},
gJW(){var w,v=this.e
v===$&&A.c()
w=A.d0(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gakh(){var w=this.f
w===$&&A.c()
w=A.d0(B.a.i(w.a.a))
return w==null?0:w},
gb5V(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aQm(d){var w,v=B.k.F(this.gJW()+d,0.25,999999),u=B.k.iX(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.M(v))
else{u=B.k.ad(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb1(0,u)
this.m(new C.cG7())},
azr(d,e,f,g){var w=null,v=g!=null?A.Y(g,B.aY,w,w,w,20):w,u=d.a,t=u?B.jT:B.jj,s=A.n(14),r=A.n(14)
u=u?B.ee:B.bP
return A.bs(w,new A.b6(4,s,B.dn),w,B.bE,w,w,w,w,!0,new A.b6(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.n(14),B.adC),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
ce3(d,e,f){return this.azr(d,e,f,null)},
KE(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gakh()<=0){s.c.L(x.q).f.U(D.fjl)
return}r=s.c
r.toString
v=s.gJW()
u=s.gakh()
t=s.gb5V()
A.a6(r,!1).O(new C.aSK(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.R(d).ax.a===B.J,m=new C.uc(n),l=n?B.e7:B.c,k=A.n(24),j=x.O,i=A.a([B.aY.j(0.22),B.bQ.j(0.14)],j),h=A.n(14)
i=A.p(o,D.bSb,B.f,o,o,new A.o(o,o,A.L(B.aY.j(0.35),B.r,1),h,o,new A.a9(B.a6,B.a9,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.av,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bH,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bo,o,o,o,o,o,o,o,o,12,o,o,B.cC,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1)
i=A.A(A.a([i,B.be,h,A.aH(o,o,o,o,A.Y(B.cz,n?B.bv:B.bo,o,o,o,o),o,o,o,new C.cGd(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.i,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.av,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.Z,!0,o,!0,B.t,o,A.aN(),h,o,o,o,o,o,2,p.azr(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Pq),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ab,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,A0.Km,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bo,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jT:B.jj
t=A.n(14)
s=A.L(n?B.ee:B.bP,B.r,1)
r=A.aH(o,o,o,o,A.Y(B.wE,n?B.aQ:B.av,o,o,o,20),o,o,o,new C.cGe(p),o,o,o,o,o,B.ce)
q=p.e
q===$&&A.c()
q=A.aM(o,B.Z,!1,o,!0,B.t,o,A.aN(),q,o,o,o,o,o,2,D.c3i,B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.e4,o,o,o,1,o,o,!1,"\u2022",o,new C.cGf(p),o,o,o,!1,o,o,!1,o,!0,o,B.ab,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.av,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a5(52,o,q,o),A.aH(o,o,o,o,A.Y(B.hU,n?B.aQ:B.av,o,o,o,20),o,o,o,new C.cGg(p),o,o,o,o,o,B.ce)],w),B.m,o,B.e,B.O,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aQ:B.av,o,o,o,o,o,o,o,o,16,o,o,B.V,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.at,A.E(A.aM(o,B.Z,!1,o,!0,B.t,o,A.aN(),t,o,o,o,o,o,2,p.azr(m,"Amount","0.00",B.ia),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.e4,o,o,o,1,o,o,!1,"\u2022",o,new C.cGh(p),o,o,o,!1,o,o,!1,o,!0,o,B.ab,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.ao,o,o,o,o),1)],w),B.E,o,B.e,B.i,0,o,o)
t=x.gv
u=A.C(new A.N(D.d8K,new C.cGi(p,m),t),t.k("ak.E"))
i=A.a([i,B.by,v,B.aC,h,B.P,s,B.af,A.bW(B.bG,u,B.br,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.av,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.X,A.aM(o,B.Z,!1,o,!0,B.t,o,A.aN(),h,o,o,o,o,o,2,p.ce3(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cGj(p),o,o,o,!1,o,o,!1,o,!0,o,B.ab,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.l2,o,o,o,o)],w))}i.push(B.aR)
h=B.aY.j(n?0.18:0.1)
j=A.a([h,B.bQ.j(n?0.12:0.06)],j)
h=A.n(16)
v=A.L(B.aY.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bo,o,o,o,o,o,o,o,o,11,o,o,B.V,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJW()===B.k.iX(p.gJW())?B.k.M(p.gJW()):p.gJW()
s=p.gb5V()
r=A.Bg(p.gakh())
i.push(A.p(o,A.A(A.a([A.E(A.x(A.a([u,B.aw,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bo,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1),C.bFl(p.gJW()*p.gakh(),B.b2,!1,B.u)],w),B.m,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a9(B.a6,B.a9,B.x,j,o,o),B.n),o,o,o,o,B.jm,o,o,o))
i.push(B.by)
j=A.n(14)
h=n?B.ee:B.bP
h=A.di(o,o,o,o,o,o,o,o,o,o,o,o,B.cn,o,new A.b9(j,B.a1),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dT(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.av,o,o,o,o,o,o,o,o,o,o,o,B.V,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cGk(d),h),1),B.at,A.E(A.dh(D.arA,D.fUn,p.ga3a(),A.bn(B.aY,o,o,0,B.c,o,B.cn,o,new A.b9(A.n(14),B.a1),o,o,o)),2)],w),B.m,o,B.e,B.i,0,o,o))
return A.eR(o,l,new A.cR(A5.ae1,A.cg(A.x(i,B.al,o,B.e,B.O,0,B.p),B.t,o,B.y,o,Aj.rO,o,o,B.ai),o),o,o,o,B.O3,B.da,o,new A.b9(k,B.a1),o)}}
C.a22.prototype={
S(){return new C.bxS()}}
C.bxS.prototype={
Y(){var w,v,u=this
u.a3()
w=u.a.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,B.b5,B.aP),v)},
t(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.R(d).ax.a===B.J,q=r?B.e7:B.c,p=A.n(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aQ:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aQ:B.av,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jT:B.jj
v=A.aM(s,B.Z,!0,s,!0,B.t,s,A.aN(),w,s,s,s,s,s,2,A.bs(s,new A.b6(4,A.n(12),B.dn),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fkQ(t,d),s,!1,s,s,!1,s,!0,s,B.ab,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.ao,s,s,s,s)
u=A.E(A.dT(B.dl,new C.fkR(d),s),1)
r=A.bn(B.bQ,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eR(s,q,new A.D(B.Cf,A.x(A.a([o,B.aC,v,B.aR,A.A(A.a([u,B.at,A.E(A.bH(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fkS(t,d),r),1)],w),B.m,s,B.e,B.i,0,s,s)],w),B.m,s,B.e,B.O,0,B.p),s),s,s,s,s,B.da,s,new A.b9(p,B.a1),s)}}
C.acg.prototype={
a6(){return"WorksheetFrameStyle."+this.b}}
C.Gc.prototype={
S(){return new C.bxQ(null,null)}}
C.bxQ.prototype={
Y(){var w,v=this
v.a3()
w=A.bl(null,D.bzd,null,1,null,v)
w.cP(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bAM()},
gbCm(){switch(this.a.r.a){case 1:return A.a([B.aY,B.bQ,B.b2],x.O)
case 2:return A.a([B.bw,B.aY,B.b2],x.O)
case 3:return A.a([B.aJ,B.ch,B.ko],x.O)
case 4:return A.a([B.hm,B.bQ,B.fn],x.O)
case 0:return A.a([B.aY,B.bQ,B.b2],x.O)}},
B(d){var w=A.R(d),v=this.d
v===$&&A.c()
return new A.em(A.c9(v,new C.fkO(this,new C.uc(w.ax.a===B.J)),null),null)}}
C.ayz.prototype={
S(){return new C.bxR(null,null)}}
C.bxR.prototype={
Y(){var w,v=this
v.a3()
w=A.bl(null,B.nv,null,1,null,v)
w.cP(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bAN()},
B(d){var w=this.d
w===$&&A.c()
return A.c9(w,new C.fkP(this),null)}}
C.bxP.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.br(new A.a2(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aP(w,w))
u=new A.aE($.S().r,B.ah,null,null,A.a([],x.v))
u.D(new A.iU(v))
w=A.K()
w.b=B.aa
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.ap(v,w)
w=A.K()
w.b=B.aa
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.ae(u,w)
w=A.xD(u)
t=A.a([],x.U)
w=new A.rs(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.bi(A.jD(y.B));--r
q=new A.BJ(w,r)
w.ij()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aTT(d,q,r,o,0,0.2,4.2,0.92)
p.aTT(d,q,r,s,0.52,0.11,3.2,0.58)}},
aTT(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.E(g+h,1)*f,s=A.hLJ(e.a.a,e,t,t+f*i,!0),r=A.bDG(s.glU().a.getBounds())
$.S()
w=A.K()
w.b=B.aa
w.c=j
w.d=B.bA
w.f=!0
v=this.f
u=k*this.e
w.sar(new A.a9(B.a6,B.a9,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Io,null).aG(0,r))
d.ae(s,w)},
aC(d){return d.b!==this.b||d.d!==this.d}}
C.aOS.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.aOT.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.uc.prototype={}
C.atG.prototype={
S(){return new C.aGe()},
ge3(){return this.c}}
C.aGe.prototype={
Y(){var w=this
w.a3()
w.d=w.a.d
w.ahX()},
t(){var w=this.a.c,v=this.d
v===$&&A.c()
C.LX(w,v)
this.a2()},
ahX(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ahX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bDP(t.c,t.d.a),$async$ahX)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eTE(u,s))
return A.h(null,v)}})
return A.i($async$ahX,v)},
QD(){var w=0,v=A.j(x.H),u=this,t,s
var $async$QD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eTv(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.LX(t,s),$async$QD)
case 2:if(u.c!=null)u.m(new C.eTw(u))
return A.h(null,v)}})
return A.i($async$QD,v)},
Ra(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Ra=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.R(p)
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.eTC(t,new C.uc(p.ax.a===B.J)),s,null,!0,!0,x.T),$async$Ra)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a9e(q),$async$Ra)
case 6:case 5:t.m(new C.eTD(t,r))
w=7
return A.b(t.QD(),$async$Ra)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Ra,v)},
Wo(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.ioL(r),$async$Wo)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eTq(t,new C.rk(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.QD(),$async$Wo)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wo,v)},
cj8(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hDf(t,new C.eTu(u),w,v)},
abQ(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bG(new A.ay(v,2.5,B.r,-1),B.a1,B.a1,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b46,w,w,B.n),w,22,w,w,w,w,w,22)},
aaS(d){return this.bOl(d)},
bOl(d){var w=0,v=A.j(x.H),u=this
var $async$aaS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eTt(u,d))
w=2
return A.b(u.QD(),$async$aaS)
case 2:return A.h(null,v)}})
return A.i($async$aaS,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.R(a2).ax.a===B.J,e=f?B.c3:B.iB,d=A.n(8),a0=A.Y(Z.a1A,f?B.bv:B.bo,g,g,g,16),a1=x.p
a0=A.aO(!1,d,!0,new A.D(B.GS,A.A(A.a([a0,B.bn,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bv:B.bo,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.O,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eTF(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b4,B.t,A.a([A.bx(A.n(22),C.aRK(!0,A.n(22),1/0,B.qA,g,d,1/0),B.aq),A.ap(10,A.dh(D.bWQ,D.fWM,h.gb3S(),A.bn(B.w.j(0.45),g,g,g,B.c,g,B.hb,g,new A.b9(A.n(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.n(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aY.j(f?0.5:0.38),B.eY,22),new A.ac(-4,B.G,B.bQ.j(0.2),B.I,32)],w)
u=A.n(17)
t=A.L(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.I,10)],w)
s=A.n(16)
r=h.d
v=A.p(g,A.p(g,A.bx(s,new A.an(B.a0,g,B.b4,B.t,A.a([C.aRK(!0,A.n(16),1/0,B.OS,g,r.c,1/0),A.c3(g,new A.o(g,g,g,g,g,new A.a9(B.b1,B.b7,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bi),A.ap(g,h.abQ(!0),g,g,8,g,8,g),A.ap(g,A.cCM(h.abQ(!0),!0,!1),g,g,g,8,8,g),A.ap(8,A.cCM(h.abQ(!1),!1,!0),g,g,8,g,g,g),A.ap(8,A.cCM(h.abQ(!1),!0,!0),g,g,g,8,g,g),A.ap(10,A.dh(D.bSM,D.fQ7,h.gb3S(),A.bn(B.w.j(0.45),g,g,g,B.c,g,B.hb,g,new A.b9(A.n(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.c5_,B.n),g,g,g,g,B.md,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.av,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.n(22)
u=x.O
u=f?A.a([D.beQ,B.o9,B.h7],u):A.a([B.b2,B.aY,B.bQ],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aY.j(f?0.45:0.35),B.eY,24)],t)
r=A.n(22)
p=A.ap(g,A.Y(B.k3,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.n(20)
m=A.L(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h9,g,g,g)],a1),B.m,g,B.e,B.i,0,g,g),B.aC,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.an,C.bFl(h.d.gxA(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cC,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.i,0,B.p),1)
n=A.n(14)
m=A.n(14)
l=B.c.j(0.12)
k=A.L(B.ho.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aJ.j(0.28),B.cL,14)],t)
j=B.aJ.j(0.22)
i=A.n(10)
u=A.p(g,A.bx(r,new A.an(B.a0,g,B.ac,B.t,A.a([p,new A.D(D.bE1,A.A(A.a([o,B.at,A.aI(!1,B.a3,!0,g,A.aO(!1,n,!0,A.eG(new A.D(V.wg,A.x(A.a([A.p(g,D.ara,B.f,g,g,new A.o(j,g,A.L(B.aJ.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cl,g,g,g),B.fK,D.fEU],a1),B.m,g,B.e,B.O,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcj7(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.aj)],a1),B.m,g,B.e,B.i,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a9(B.aA,B.aF,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fF(1.7777777777777777,d,g),B.aR,w,B.P,u,B.by,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.av,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b3,A.dh(Av.a3p,D.fCJ,h.gbCQ(),A.bn(B.aY,g,g,g,B.c,g,B.iu,g,new A.b9(A.n(12),B.a1),g,g,g))],a1),B.m,g,B.e,B.i,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.e7:B.c
v=A.n(14)
u=A.L(f?B.ee:B.bP,B.r,1)
t=A.Y(B.a1V,f?B.bv:B.bo,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.av,g,g,g,g,g,g,g,g,g,g,g,B.V,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.X,s,B.an,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bv:B.bo,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.m,g,B.e,B.i,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.qw,g,g,1/0))}else B.d.v(d,new A.N(w,new C.eTG(h,new C.uc(f)),A.T(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.C4,A.at(A.n0(g,f?B.bv:B.bo,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c5(g,e,A.bm(!0,A.x(A.a([new A.D(B.C8,a0,g),A.E(A.cg(A.x(d,B.E,g,B.e,B.i,0,B.p),B.t,g,B.y,g,E.yG,g,g,B.ai),1)],a1),B.E,g,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bGw(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.e7:B.c,p=A.n(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cL,12)],x.V),n=A.n(16),m=A.p(u,u,B.f,u,u,D.b6R,u,u,u,u,u,u,u,5),l=B.aY.j(r?0.22:0.12),k=A.n(12)
l=A.p(u,A.Y(s?B.ib:B.ht,B.b2,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bL
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aQ:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcZE()
v=A.Bg(d.d)
B.d.v(t,A.a([B.aw,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bv:B.bo,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.bb,B.O,0,B.p)}t=A.E(t,1)
k=A.a([B.aY.j(0.14),B.bQ.j(0.1)],x.O)
w=A.n(12)
k=A.p(u,C.bFl(d.c*d.d,B.b2,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a9(B.a6,B.a9,B.x,k,u,u),B.n),u,u,u,u,B.hb,u,u,u)
w=x.p
return A.p(u,A.bx(n,new A.ED(A.A(A.a([m,A.E(new A.D(B.al6,A.A(A.a([l,B.be,t,B.ae,k,A.aH(u,u,u,u,A.Y(B.cz,(r?B.bv:B.bo).j(0.75),u,u,u,20),u,u,u,new C.eTr(this,d),u,u,u,u,u,B.ce)],w),B.m,u,B.e,B.i,0,u,u),u),1)],w),B.al,u,B.e,B.i,0,u,u),u),B.aq),B.f,u,D.b5J,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d3,u,u,u,u)}}
C.aej.prototype={
ES(d){return this.bPJ(d)},
bPJ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$ES=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pr(d,o,!1),$async$ES)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
w=4
return A.b(A.bQ(Ai.C2,null,x.H),$async$ES)
case 4:s=t.d
w=5
return A.b(C.fTV(!0,o,s),$async$ES)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.H8(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$ES)
case 6:p=f
w=7
return A.b(A.pq(o,!1),$async$ES)
case 7:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$ES,v)},
a06(d){return this.czx(d)},
czx(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a06=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pr(d,s,!1),$async$a06)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
A.hE(d,new C.atA(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pq(s,!1),$async$a06)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a06,v)},
QE(d){return this.cvB(d)},
cvB(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$QE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(A.hE(d,D.aKG,!0,"NgmyWorksheetProjectScan",x.N),$async$QE)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bFm(s),$async$QE)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.L(x.q).f.U(D.fit)
w=1
break}q=C.heU(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dP(p,x.H),$async$QE)
case 5:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$QE,v)},
a07(d){return this.cHQ(d)},
cHQ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a07=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(C.bET(),$async$a07)
case 3:s=f
if(s==null){w=1
break}r=C.heU(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dP(q,x.H),$async$a07)
case 4:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a07,v)},
B(d){var w=this,v=null,u=A.R(d).ax.a===B.J,t=new C.uc(u),s=w.d.d.length,r=u?B.e7:B.c,q=A.n(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kA,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.wf,A.p(v,A.x(A.a([w.cy6(d,t,s),new A.D(D.bDq,A.x(A.a([w.b6P(t,"QR restore"),B.X,A.A(A.a([w.b1R(t,!0,B.jI,B.aJ,B.aJ,new C.eTI(w,d),"Show to scan","QR code"),B.at,w.azs(t,B.jn,B.b8,B.bt,new C.eTJ(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.i,0,v,v),B.d6,w.b6P(t,"Backup files"),B.X,A.A(A.a([w.azs(t,B.hV,B.aY,B.bQ,new C.eTK(w,d),"Full copy","Backup file"),B.at,w.azs(t,R.zk,B.az,B.aU,new C.eTL(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.i,0,v,v)],o),B.E,v,B.e,B.i,0,B.p),v)],o),B.m,v,B.e,B.O,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cy6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.fc,B.cS,B.fP],k):A.a([B.b2,B.aY,B.bQ],k)
w=A.ap(l,A.Y(B.uR,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.n(4),l,l,B.n),l,4,l,B.kS,l,l,l,36),l,l,l)
u=A.n(14)
t=A.L(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cL,12)],x.V)
r=this.d
s=A.p(l,C.aRK(!0,A.n(13),64,D.bO2,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,K.ab2,l,l,l)
r=C.bFl(r.gxA(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.n(20)
o=A.L(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.a0,l,B.ac,B.t,A.a([w,new A.D(D.bDO,A.x(A.a([v,A.A(A.a([s,B.ev,A.E(A.x(A.a([u,B.aw,t,B.P,A.A(A.a([r,B.ae,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fT,l,l,l)],m),B.m,l,B.e,B.i,0,l,l)],m),B.E,l,B.e,B.i,0,B.p),1),A.aH(l,l,l,l,A.Y(B.cz,B.c.j(0.85),l,l,l,l),l,l,l,new C.eTH(d),l,l,l,A.nT(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aSY,l,l,l,l),l,l)],m),B.E,l,B.e,B.i,0,l,l)],m),B.m,l,B.e,B.i,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.aA,B.aF,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b6P(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aY,w,w,A.n(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ae,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bv:B.bo,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)},
b1R(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.n(18),p=A.n(18),o=d.a,n=o?D.ajE:B.aQ
if(e)w=B.aJ.j(o?0.45:0.35)
else{w=o?B.ee:B.bP
w=w.j(o?0.8:1)}w=A.L(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aJ.j(0.12),B.cL,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.n(12)
s=A.L(h.j(0.35),B.r,1)
t=A.p(r,A.Y(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.rP,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aQ:B.av,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aI(!1,B.a3,!0,r,A.aO(!1,q,!0,A.eG(new A.D(E.a_Z,A.x(A.a([t,B.af,u,B.bH,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bv:B.bo,r,r,r,r,r,r,r,r,11,r,r,B.cC,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
azs(d,e,f,g,h,i,j){return this.b1R(d,!1,e,f,g,h,i,j)}}
C.atA.prototype={
S(){return new C.bmR()}}
C.bmR.prototype={
Y(){this.a3()
this.afR()},
afR(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$afR=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bFn(p.c,p.d),$async$afR)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eTl(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eTm(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afR,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.R(d).ax.a===B.J,f=g?B.By:B.iB,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.Y(B.eM,g?B.ad:B.am,h,h,h,18),h,h,h,new C.eTn(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.R,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.Az],u),B.m,h,B.e,B.i,0,h,h)
t=A.n(24)
s=x.O
s=g?A.a([B.fc,B.cS,B.fP],s):A.a([B.b2,B.aY,B.bQ],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aY.j(g?0.4:0.3),B.eY,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dg,B.K,h,h)
p=C.bFl(p.gxA(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.n(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.an,A.A(A.a([p,B.ae,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fT,h,h,h)],u),B.m,h,B.bb,B.i,0,h,h)],u),B.m,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a9(B.aA,B.aF,B.x,s,h,h),B.n),h,h,h,h,E.a0l,h,h,1/0)
t=g?D.bpS:B.c
q=A.n(24)
p=A.L(w?B.aJ.j(0.4):B.aY.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.du,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.Vf,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.eq1)
else{m=A.n(20)
l=A.L(B.aO,B.r,1)
o.push(A.p(h,A.q7(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bR,h,h,h))}}o.push(B.aR)
n=w?B.aJ:B.aY
n=n.j(g?0.15:0.1)
m=A.n(12)
l=A.L((w?B.aJ:B.aY).j(0.35),B.r,1)
k=w?B.P5:B.PG
k=A.Y(k,w?B.aJ:B.aY,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.at,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.am,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.i,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iu,h,h,h))
return A.c5(h,f,A.bm(!0,A.x(A.a([new A.D(Af.Of,e,h),A.E(A.cg(A.x(A.a([s,B.aR,A.p(h,A.x(o,B.m,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.ut,h,h,1/0)],u),B.m,h,B.e,B.i,0,B.p),B.t,h,B.y,h,E.ame,h,h,B.ai),1)],u),B.m,h,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.atF.prototype={
S(){return new C.aGd(A.zM(B.Nx,B.o_,B.uZ))}}
C.aGd.prototype={
t(){this.d.t()
this.a2()},
aOj(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iX(w,d)},
ceW(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s=C.imE(t)
if(s!=null){this.aOj(s)
return}r=C.htM(t)
if(r!=null)q=A.cS(r,p,0)
else q=!1
if(q){this.aOj(B.a.i(B.a.b2(r,B.a.cp(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eE(A.a([A.aH(t,t,t,t,A.Y(u.f?B.uG:Aa.Pd,t,t,t,t,t),t,t,t,new C.eTp(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.By,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fQ0,t,t,t,1,t,!0),q=A.zL(u.d,B.bZ,u.gceV()),p=A.n(28)
p=A.at(A.p(t,t,B.f,t,t,new A.o(t,t,A.L(B.aY,B.r,3),p,A.a([new A.ac(2,B.G,B.aY.j(0.35),B.I,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.n(16)
return A.c5(r,B.w,new A.an(B.a0,t,B.b4,B.t,A.a([q,p,A.ap(32,A.p(t,D.fOM,B.f,t,t,new A.o(w,t,A.L(B.aY.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jm,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aL6.prototype={
a6(){return"_WorksheetTab."+this.b}}
C.OO.prototype={
S(){return new C.aGf(D.acU,A.a([],x.D))},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aGf.prototype={
gcFC(){return J.bGt(this.e,0,new C.eU7())},
Y(){this.a3()
$.aV.c1$.push(this)
this.we()},
t(){$.aV.hU(this)
this.a2()},
jk(d){if(d===B.fO)this.we()},
we(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$we=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Ds(q.a.c).df(0,B.jZ),$async$we)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eU3(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eU4(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$we,v)},
Im(d){return this.bMt(d)},
bMs(){return this.Im(null)},
bMt(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Im=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ioN(l,d),$async$Im)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lA(l,r,q,D.dku,new A.V(Date.now(),0,!1))
w=4
return A.b(C.LX(t.a.c,p),$async$Im)
case 4:o=f
w=5
return A.b(t.we(),$async$Im)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.L(x.q).f.U(D.ffA)
w=1
break}n=J.aX(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gR(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.L(q).f.U(D.fhn)
else n.L(q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
t.EW(m)
case 1:return A.h(u,v)}})
return A.i($async$Im,v)},
EW(d){return this.ciU(d)},
ciU(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$EW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hE(s,new C.atG(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$EW)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.LX(u.a.c,t),$async$EW)
case 5:case 4:w=6
return A.b(u.we(),$async$EW)
case 6:return A.h(null,v)}})
return A.i($async$EW,v)},
w0(d){return this.c1L(d)},
c1L(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$w0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bET(),$async$w0)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hE(r,D.aKG,!0,"NgmyWorksheetProjectScan",x.N),$async$w0)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bFm(q),$async$w0)
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
break}p=C.heU(s)
w=15
return A.b(C.LX(t.a.c,p),$async$w0)
case 15:o=f
w=16
return A.b(t.we(),$async$w0)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.L(x.q).f.U(D.fhs)
w=1
break}r.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
t.EW(p)
case 1:return A.h(u,v)}})
return A.i($async$w0,v)},
Ol(d){return this.bL7(d)},
bL7(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ol=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cf(null,null,!0,null,new C.eTP(d),s,null,!0,!0,x.y),$async$Ol)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.p_(t.a.c,A.a([],x.D)),$async$Ol)
case 6:w=7
return A.b(t.we(),$async$Ol)
case 7:s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.ffF)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ol,v)},
cj6(d){var w=this.c
w.toString
A.bT(B.L,null,new C.eTY(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b7r(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.n(16),p=g.a
if(p)w=B.jT
else w=B.c
v=A.n(16)
u=A.L(p?B.ee:B.bP,B.r,1)
t=d.j(0.14)
s=A.n(12)
s=A.p(r,A.Y(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bU,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aQ:B.av,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aI(!1,B.a3,!0,r,A.aO(!1,q,!0,A.p(r,A.x(A.a([s,B.af,t,B.bH,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bv:B.bo,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.we,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
a0C(d,e){return this.ciV(d,e)},
ciV(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0C=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bT(B.L,null,new C.eTT(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a0C)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hDf(r,new C.eTU(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.On(d,e),$async$a0C)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0C,v)},
b4t(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.n(12)
s=A.p(u,A.Y(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bU,u,u,u)
if(d)t=B.ax
else t=h.a?B.aQ:B.av
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bv:B.bo,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.i,0,B.p),1)
return A.aI(!1,B.a3,!0,u,A.aO(!1,u,!0,new A.D(B.Ce,A.A(A.a([s,B.be,t,A.Y(B.eG,w?B.bv:B.bo,u,u,u,u)],v),B.m,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj)},
cpQ(d,e,f,g,h,i){return this.b4t(!1,d,e,f,g,h,i)},
On(d,e){return this.bLh(d,e)},
bLh(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$On=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.ll(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$On)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bDA(t.a.c,d.a),$async$On)
case 6:w=7
return A.b(t.we(),$async$On)
case 7:r=t.c
if(r==null){w=1
break}r.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$On,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.R(d).ax.a===B.J,n=new C.uc(o),m=o?B.c3:B.iB
if(q.f)o=D.bcD
else{w=q.bFD(n)
v=q.c0P(n)
u=q.gbCJ()
if(o)t=B.jT
else t=B.c
s=A.n(13)
r=x.p
u=A.a([w,B.af,v,B.aR,new C.Gc(A.p(p,A.A(A.a([q.aD_(P.OR,"Projects",n,D.acU),q.aD_(B.wt,"Cashier",n,D.b0D),q.aD_(B.He,"Family Tree",n,D.hB2)],r),B.m,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ey,0.95,u,p),B.by],r)
w=q.d
if(w===D.acU){w=J.ad(q.e)
B.d.v(u,A.a([A.A(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aQ:B.av,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b3,new C.ayz(q.gaSE(),p)],r),B.m,p,B.e,B.i,0,p,p),B.aC,q.cpS(n)],r))}else{o=q.a
if(w===D.b0D)u.push(new C.apu(o.c,n,p))
else{w=q.r
u.push(new C.aqF(o.c,o.d,o.e,o.f,new C.eUa(q),new C.eUb(q),new A.bP(w,x.b4)))}}o=A.cg(A.x(u,B.E,p,B.e,B.i,0,B.p),B.t,p,B.y,p,Al.O8,p,p,B.ai)}return A.c5(p,m,A.bm(!0,o,!0,!1,B.ag,!0,!0),p,!1,!1,p,p)},
bFD(d){var w=null,v=A.n(8),u=d.a,t=A.Y(Z.a1A,u?B.bv:B.bo,w,w,w,16)
return A.aO(!1,v,!0,new A.D(B.kT,A.A(A.a([t,B.bn,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bv:B.bo,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.O,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eTM(this),w,w,w,w,w,w,w)},
gbCJ(){switch(this.d.a){case 0:return D.ac7
case 1:return D.hpY
case 2:return D.ac8}},
c0P(d){var w=null,v=A.n(15),u=A.a([new A.ac(0,B.G,B.aY.j(0.35),B.cA,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.bYJ,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,44,w,w,w,w,w,44),B.be,D.bIr,A.aI(!1,B.a3,!0,w,A.aO(!1,A.n(12),!0,A.p(w,D.bW8,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eTQ(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)],t),B.E,w,B.e,B.i,0,w,w),r=B.b2.j(0.55),q=A.n(12)
return new C.Gc(A.p(w,A.x(A.a([new A.D(E.a04,s,w),A.p(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aw,A.d(A.Bg(this.gcFC()),w,w,w,w,w,w,D.fyY,w,w,w)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.up,B.jm,w,w,1/0)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(B.aY,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hpX,w)},
aD_(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.n(12),r=t?B.aY:B.L,q=A.n(12),p=t?A.L(B.c.j(0.55),B.r,2):A.L(B.L,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aY.j(0.42),B.cL,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bv:B.bo
w=A.Y(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bv:B.bo
return A.E(A.aI(!1,B.a3,!0,u,A.aO(!1,s,!0,A.cV(u,A.A(A.a([w,B.e1,new A.dp(1,B.co,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.bb,B.i,0,u,u),u,u,B.cw,new A.o(r,u,p,q,o,u,B.n),B.iH,u,u,u,u,B.GT,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eU6(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),1)},
cpS(d){var w,v,u,t,s,r,q=this,p=null
if(J.cq(q.e)){w=d.a
v=w?B.e7:B.c
u=A.n(15)
t=A.p(p,D.bWe,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aY.j(0.5),B.eY,28)],x.V),D.c7u,B.a7),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.av,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Gc(A.p(p,A.x(A.a([t,B.d6,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bv:B.bo,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.dV,A.A(A.a([A.E(q.aUe(B.jn,"Scan QR",new C.eU0(q),d),1),B.at,A.E(q.aUe(R.zk,"Upload file",new C.eU1(q),d),1)],r),B.m,p,B.e,B.i,0,p,p),B.aC,A.bH(D.h_s,p,q.gaSE(),A.bn(B.aY,p,p,p,B.c,B.h3,p,p,new A.b9(A.n(12),B.a1),p,p,p))],r),B.m,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bET,1.05,D.ac7,p)}w=J.b7(q.e,new C.eU2(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Gc(A.x(w,B.m,p,B.e,B.i,0,B.p),16,B.bU,1,D.ac7,p)},
aUe(d,e,f,g){var w=null,v=B.aY.j(g.a?0.18:0.1),u=A.n(12),t=A.n(12),s=A.n(12),r=A.L(B.aY.j(0.45),B.r,1)
return A.aI(!1,B.a3,!0,u,A.aO(!1,t,!0,A.p(w,A.x(A.a([A.Y(d,B.b2,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.fxf,B.K,w,w)],x.p),B.m,w,B.e,B.O,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.al_,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)},
cpR(d,e){var w,v,u=null,t=e.a,s=t?B.e7:B.c,r=A.n(14),q=A.L(t?B.ee:B.bP,B.r,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.er,10)],x.V),o=A.n(14),n=t?B.bv:B.bo
n=A.bx(B.Xj,new A.fF(1.7777777777777777,C.aRK(!0,B.fh,1/0,P.OR,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aQ:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.aw,A.d(""+d.d.length+" budget items \xb7 "+A.Bg(d.gxA()),u,u,u,u,u,u,D.fvd,u,u,u)],w),B.E,u,B.e,B.i,0,B.p),1)
return A.p(u,A.aI(!1,B.a3,!0,u,A.aO(!1,o,!0,A.x(A.a([n,new A.D(B.bE,A.A(A.a([v,A.aH(u,u,u,u,A.Y(Am.a2C,t?B.bv:B.bo,u,u,u,u),u,u,u,new C.eTZ(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.i,0,u,u),u)],w),B.E,u,B.e,B.i,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eU_(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.ei,u,u,u,1/0)}}
C.bzD.prototype={}
C.rk.prototype={
ak(){var w=this,v=w.c,u=w.d
return A.I(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcZE(){var w,v,u,t,s=this.c
if(s===B.k.iX(s))w=B.o.u(B.k.M(s))
else{v=B.k.ad(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lA.prototype={
gxA(){return B.d.cG(this.d,0,new C.cFs())},
ak(){var w=this,v=w.d,u=A.T(v).k("N<1,a8<m,@>>")
v=A.C(new A.N(v,new C.cFr(),u),u.k("ak.E"))
return A.I(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.af()],x.N,x.z)},
beP(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lA(w.a,w.b,v,u,w.e)},
bex(d){return this.beP(d,null)},
Tq(d){return this.beP(null,d)}}
C.Ij.prototype={
a6(){return"FamilyGender."+this.b}}
C.hS.prototype={
ak(){var w=this
return A.I(["id",w.a,"name",w.b,"gender",C.hyN(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aFJ(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hS(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.alK.prototype={
a6(){return"FamilyTreeAccessRole."+this.b}}
C.kR.prototype={
gaqc(){var w=this.f
return new A.X(w,new C.bS4(),A.T(w).k("X<1>")).gJ(0)},
ak(){var w=this,v=w.f,u=A.T(v).k("N<1,a8<m,@>>")
v=A.C(new A.N(v,new C.bS3(),u),u.k("ak.E"))
return A.I(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.af(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.if0(w.y),"games",w.z],x.N,x.z)},
wU(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kR(w.a,v,u,t,s,r,w.r,q,p,o,n)},
beO(d,e){var w=null
return this.wU(w,w,w,d,e,w,w,w,w)},
cP0(d,e,f,g,h,i,j){return this.wU(d,e,null,f,g,h,i,j,null)},
aFO(d,e){var w=null
return this.wU(w,w,w,w,d,w,w,e,w)},
cP2(d,e,f,g,h,i,j,k){return this.wU(d,e,null,f,g,h,i,j,k)},
cNv(d){var w=null
return this.wU(w,w,w,w,w,w,w,d,w)},
cNT(d){var w=null
return this.wU(w,w,w,w,w,w,w,w,d)},
ber(d){var w=null
return this.wU(w,w,d,w,w,w,w,w,w)},
aFz(d){var w=null
return this.wU(w,w,w,w,w,d,w,w,w)},
cOx(d,e,f){var w=null
return this.wU(w,d,w,w,e,w,w,f,w)},
cNi(d){var w=null
return this.wU(w,w,w,d,w,w,w,w,w)},
cO5(d,e){var w=null
return this.wU(d,w,w,w,w,w,e,w,w)}}
C.cFt.prototype={
a6(){return"WrapAlignment."+this.b}}
C.cFu.prototype={
a6(){return"WrapCrossAlignment."+this.b}}
C.aIi.prototype={}
C.baj.prototype={
ai(d){this.a=d.a
this.b=d.b},
cY(d){var w=new C.baj()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b2(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.bai.prototype={
gwM(){return!0},
gGr(){return this.z.b<this.b.length},
aVU(d){switch(0){case 0:return d.a.c}},
aVA(d){switch(0){case 0:return d.a.d}},
bVg(d,e){switch(0){case 0:return new A.hO(d,e)}},
bUE(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hf(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iM(0,0,B.o.F(0,b5.a,b5.b),B.o.F(0,b5.c,b5.d))
return}w=A.I3(b4)
switch(0){case 0:v=b5.b
u=new A.kN(0,v,0,1/0)
t=w===B.V6
break}s=A.a([],x.gZ)
r=A.U(x.gF,x.S)
for(b3=b1.z,q=B.d.fO(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.J)(q),++h){g=q[h]
g.hf(b4,u,!0)
f=b1.aVU(g)
f.toString
e=b1.aVA(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aIi(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aIi(k,j,i))}d=s.length
switch(0){case 0:q=b5.cz(new A.hO(m,l))
a0=q.a
a1=q.b
b1.a=new A.iM(0,0,a0,a1)
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
a8=b1.aVU(g)
e=b1.aVA(g)
e.toString
a9=b1.bUE(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bVg(a6,a3+a9)
b0=g.a
g.a=new A.iM(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fV(d){var w,v,u,t,s,r=this
r.lz(d)
w=d.b
w.ir()
v=A.dr()
u=r.a
v.eg(u.a,u.b,0,1)
w.ph(0,v)
for(u=r.z,u=B.d.du(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.J)(u),++s)u[s].fV(d)
w.nx(0)},
GV(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
ir(){return this.z}}
C.bxT.prototype={}
var z=a.updateTypes(["aB<~>()","P(hS)","~()","P(kR)","P(nr)","a8<m,@>(kR)","F(kR,kR)","F(hS,hS)","m(hS)","kR(a8<@,@>)","P(lA)","nr(a8<@,@>)","a8<m,@>(nr)","P(uJ)","uJ()","F(hS)","ai<hS>()","P(zu)","a_W(Z)","m?(hS)","eF<m?>(hS)","aB<~>(lA)","P(rk)","a8<m,@>(hS)","hS(a8<@,@>)","F(lA,lA)","P(afB)","~(bd)","v(oC)","F(F,a9H)","P(qD<F>)","~(qD<F>)","TL(Z)","P(MC)","P(uI)","~(hS)","m(m)","W4(Z)","TK(Z)","adZ(Z)","ZS(Z)","hS(hS)","cL(bA<m,Gs>)","cL(KL)","a_l(Z)","F?(hS)","hS()","P(KL)","D(hS)","~(Ij)","a_h(Z)","v(Ij,m,a0)","P(afu)","bA<m,ai<a8<m,@>>>(m,ai<nr>)","a_j(Z)","+count,id,name(F,m,m)(kR)","m(kR)","a0f(Z)","a0g(Z)","P(lS)","lS()","Zq(Z)","a22(Z)","ZU(Z)","ZT(Z)","~(F)","~(m,lo?)","v(rk)","aej(Z)","~(me)","aB<~>([m?])","H(H,lA)","v(lA)","H(H,rk)","a8<m,@>(rk)","rk(a8<@,@>)","ai<lo>()","uI()","m(V)","lA(a8<@,@>)","ct(Ii)","m(lA)","a8<m,@>(lA)","F(nr,nr)","kR(a8<m,@>)","kR(kR)"])
C.fMv.prototype={
$1(d){return d.a+" "+d.b},
$S:124}
C.fMu.prototype={
bo4(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.rc(s,d,B.hW,"book",E.Gw),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.W(r!=null&&A.LK(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bo4(d)},
$S:315}
C.fMw.prototype={
$1(d){return d.b},
$S:124}
C.fW_.prototype={
$1(d){var w=null
return A.eR(w,B.L,new H.Qd(this.a,this.b,w),w,w,0,B.a0_,B.da,w,w,w)},
$S:49}
C.fzW.prototype={
$1(d){return d!=null},
$S:216}
C.fzX.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:216}
C.fA1.prototype={
$1(d){if(this.a)return new A.q(d.a*520,d.b*160)
return d},
$S:175}
C.fKe.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fc(d,w,w,w,A.ha(w,B.th,w,w,w,w,w,w,w,B.dz,w,w,10.5,w,B.ez,w,!0,w,w,w,w),w),u=f?B.ez:B.wn
return new A.o3(D.bAh,A.aaw(A.a([new A.fV(130,w,v),new A.zt(1,B.H7,A.fc(e,w,w,w,A.ha(w,g==null?D.esq:g,w,w,w,w,w,w,w,B.dz,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.yk,B.lQ))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1951}
C.fKd.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vT(999)
f=A.xv(A.lN(h,A.fc("Cashier",h,h,h,A.ha(h,D.Ah,h,h,h,h,h,h,h,B.dz,h,h,10,h,B.ez,h,!0,h,h,h,h),h),h,new A.kO(D.esh,h,f,B.i_,h),h,h,D.bAN,h))
w=A.xv(A.fc("Debt receipt",h,h,h,A.ha(h,h,h,h,h,h,h,h,h,B.dz,h,h,22,h,B.ez,h,!0,h,h,h,h),h))
v=A.xv(A.fc(C.xd(new A.V(Date.now(),0,!1),!0),h,h,h,D.aaB,h))
u=A.vT(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fc(s,h,h,h,A.ha(h,h,h,h,h,h,h,h,h,B.dz,h,h,14,h,B.ez,h,!0,h,h,h,h),h)
r=A.fc("Person who owes",h,h,h,D.aaB,h)
q=A.vT(10)
p=x.Z
u=A.lN(h,A.zm(A.a([s,new A.fV(h,2,h),r,new A.fV(h,10,h),A.lN(h,A.zm(A.a([A.fc("Amount owed",h,h,h,D.aaB,h),new A.fV(h,2,h),A.fc(A.Bg(t.c),h,h,h,A.ha(h,D.Ah,h,h,h,h,h,h,h,B.dz,h,h,20,h,B.ez,h,!0,h,h,h,h),h)],p),B.rF,B.lQ),h,new A.kO(B.pE,h,q,B.i_,h),h,h,D.bzY,1/0)],p),B.rF,B.lQ),h,new A.kO(E.aM2,h,u,B.i_,h),h,h,D.bBU,1/0)
q=new A.nM(D.esk,0.9,B.l6)
r=A.vT(12)
s=i.c
o=s.$2("Original due",C.xd(t.r,!1))
n=s.$2("Current due",C.xd(t.f,!1))
m=i.d
l=new A.nM(m,1.1,B.l6)
k=A.vT(8)
j=i.a
k=A.a([o,n,new A.fV(h,6,h),A.lN(h,A.xv(A.fc(t.gaMS(),h,h,h,A.ha(h,m,h,h,h,h,h,h,h,B.dz,h,h,11,h,B.ez,h,!0,0.5,h,h,h),h)),h,new A.kO(h,new A.pV(l,l,l,l),k,B.i_,h),h,h,D.bAV,1/0),new A.fV(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.Ah))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.Ah))
else{n=A.fc("Missed days ("+n+")",h,h,h,A.ha(h,B.th,h,h,h,h,h,h,h,B.dz,h,h,10.5,h,B.ez,h,!0,h,h,h,h),h)
m=A.T(o).k("N<1,Tj>")
o=A.C(new A.N(o,new C.fKc(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fV(h,4,h),n,new A.fV(h,6,h),new C.bai(5,5,new C.baj(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fV(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fV(h,8,h),w,new A.fV(h,3,h),v,new A.fV(h,16,h),u,new A.fV(h,10,h),A.lN(h,A.zm(k,B.yk,B.lQ),h,new A.kO(h,new A.pV(q,q,q,q),r,B.i_,h),h,h,B.ala,1/0)],p)
w=j.a
if(w!=null){v=new A.nM(B.Jy,1,B.l6)
B.d.v(f,A.a([new A.fV(h,16,h),A.fc("Debtor signature",h,h,h,A.ha(h,B.th,h,h,h,h,h,h,h,B.dz,h,h,10,h,B.ez,h,!0,h,h,h,h),h),new A.fV(h,6,h),A.lN(h,new A.IC(w,B.Xt,h,h),h,new A.kO(h,new A.pV(v,v,v,v),A.vT(6),B.i_,h),82,h,B.Od,1/0)],p))}f.push(new A.fV(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fc(w,h,h,h,D.fnH,h))
f.push(new A.fV(h,18,h))
f.push(A.xv(A.fc("NGMY.ORG",h,h,h,A.ha(h,D.Ah,h,h,h,h,h,h,h,B.dz,h,h,14,h,B.ez,h,!0,1.8,h,h,h),h)))
return f},
$S:437}
C.fKc.prototype={
$1(d){var w=null,v=new A.nM(D.Jz,0.7,B.l6),u=A.vT(999)
return A.lN(w,A.fc(C.xd(d,!1),w,w,w,A.ha(w,D.Jz,w,w,w,w,w,w,w,B.dz,w,w,9.5,w,B.ez,w,!0,w,w,w,w),w),w,new A.kO(w,new A.pV(v,v,v,v),u,B.i_,w),w,w,D.bGj,w)},
$S:1952}
C.c7i.prototype={
$1(d){var w=null,v=B.bC.j(0.08),u=A.n(999),t=A.L(B.bC.j(0.28),B.r,1)
return A.p(w,A.d(C.xd(d,!1),w,w,w,w,w,w,D.fuI,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eL,w,w,w)},
$S:1953}
C.fWw.prototype={
$1(d){var w=null,v=A.aG(d,B.c_,x.w).w,u=A.n(26),t=A.aH(w,w,w,w,D.bZG,w,w,w,new C.fWt(d),w,w,w,w,w,B.ce),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eR(w,B.L,new A.cR(new A.aZ(0,380,0,v.a.b*0.9),A.aI(!1,B.a3,!0,u,new A.D(B.a_O,A.x(A.a([new A.bL(B.a9,w,w,t,w),new A.dp(1,B.co,A.cg(A.x(A.a([new A.em(new C.b_k(r,w),s),B.X,A.A(A.a([A.E(A.es(B.zt,D.fWH,new C.fWu(s,r,d),A.di(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fl,w,new A.b9(A.n(14),B.a1),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ae,A.E(A.dh(B.a3f,D.fT5,new C.fWv(r,d),A.bn(B.b2,w,w,w,B.c,w,B.fl,w,new A.b9(A.n(14),B.a1),w,w,w)),1)],p),B.m,w,B.e,B.i,0,w,w)],p),B.m,w,B.e,B.O,0,B.p),B.t,w,B.y,w,w,w,w,B.ai),w)],p),B.m,w,B.e,B.O,0,B.p),w),B.f,B.av,0,w,w,w,w,w,B.aj),w),w,w,0,Ar.a0d,B.da,w,w,w)},
$S:49}
C.fWt.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fWu.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aV.ao$.x.h(0,t.a)
m=m==null?null:m.gbg()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.mc(2.5),$async$$0)
case 4:w=3
return A.b(e.hs(B.he),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eQ(B.dM.gaU(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.aA(o,0,32)
w=5
return A.b(A.tj(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fWv.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fQQ(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.L(x.q).f
s.U(A.b3(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fWo.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.b
return A.eR(w,B.av,A.x(A.a([new A.D(D.bBI,A.A(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.na,w,w,w),1),A.aH(w,w,w,w,B.ln,w,w,w,new C.fWm(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.i,0,w,w),w),new A.dp(1,B.co,new A.D(B.f1,A.bx(A.n(14),A.fR(t,B.A,w,w,B.cj,B.dC,!1,w,!1,w,w),B.aq),w),w),new A.D(B.NS,new A.a5(1/0,w,A.dh(B.oB,D.aWe,new C.fWn(t,this.c,d),A.bn(B.b2,w,w,w,B.c,w,w,w,new A.b9(A.n(14),B.a1),w,w,w)),w),w)],u),B.m,w,B.e,B.O,0,B.p),w,w,w,B.O4,B.da,w,new A.b9(v,B.a1),w)},
$S:49}
C.fWm.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fWn.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.tj(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fWA.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.a,s=this.b
return A.eR(w,B.av,new A.D(D.bBQ,A.x(A.a([A.A(A.a([D.bHw,A.aH(w,w,w,w,B.ln,w,w,w,new C.fWy(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.i,0,w,w),B.P,new A.em(A.bx(A.n(14),A.p(w,A.b4(w,w,w,new C.bcv(s.ax,w),B.ay),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.af,new A.a5(1/0,w,A.dh(B.oB,D.aWe,new C.fWz(t,s,d),A.bn(B.b2,w,w,w,B.c,w,w,w,new A.b9(A.n(14),B.a1),w,w,w)),w)],u),B.m,w,B.e,B.O,0,B.p),w),w,w,w,w,B.da,w,new A.b9(v,B.a1),w)},
$S:49}
C.fWy.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fWz.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aV.ao$.x.h(0,t.a)
n=n==null?null:n.gbg()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.mc(2.5),$async$$0)
case 4:w=3
return A.b(e.hs(B.he),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.aA(p,0,32)
r=J.eQ(B.dM.gaU(s))
w=5
return A.b(A.tj(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fEC.prototype={
$1(d){return d.a===this.a},
$S:247}
C.dPh.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dP2.prototype={
bni(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.e7:B.c
s=u.a
w=2
return A.b(A.bT(t,null,new C.dP5(s,q,e),p,!0,!0,!1,B.JQ,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dP6(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bni(d,e)},
$S:1954}
C.dP5.prototype={
$1(d){var w,v=null,u=this.c===B.wW,t=u?D.drl:D.dmV
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aQ:B.av,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(O.alH,A.x(A.a([u,B.aw,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bv:B.bo,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.il(!0,v,v,B.y,D.feg,new C.dP4(this.a,w,t,d),t.length,v,B.dU,B.ai,!0)],x.p),B.al,v,B.e,B.O,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:25}
C.dP4.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.n(14)
if(q)w=B.cS.j(0.14)
else w=t.b.a.d.a?B.R:B.aQ
v=A.n(14)
if(q)u=B.cS
else u=(t.b.a.d.a?B.bv:B.bo).j(0.16)
u=A.L(u,B.r,q?1.6:1)
return A.aO(!1,p,!0,A.p(B.A,C.b_j(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dP3(t.d,r),s,s,s,s,s,s,s)},
$S:195}
C.dP3.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dP6.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dP0.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:96}
C.dP1.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cJ(B.cw,e,v)
return new A.d_(e,!1,A.is(B.A,A.at(A.aI(!1,B.a3,!0,v,new A.e_(new C.dP_(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.aj),v,v,v),v,new A.bf(t,new A.bp(0.96,1,u),u.k("bf<bN.T>"))),v)},
$S:34}
C.dP_.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aG(d,B.c_,x.w).w,i=l.b,h=i.a.d.a,g=h?B.e7:B.c,f=A.n(14),e=A.L((h?B.bv:B.bo).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.av,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.n(8)
u=x.p
v=A.A(A.a([w,A.aO(!1,v,!0,new A.D(B.ey,A.Y(B.cz,i.a.d.a?B.bv:B.bo,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dOL(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.i,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aQ:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aUK("Name")
r=l.a
q=r.d==null?k:new C.dOM(r,l.e,a0)
p=A.n(20)
o=i.a.d.a?B.bp:B.m5
n=A.L(B.cS.j(0.35),B.r,1)
m=r.d
t=A.aM(k,B.Z,h,k,!0,B.t,k,A.aN(),w,k,k,k,k,k,2,s.beH(new A.D(B.fz,A.aO(!1,p,!0,A.p(B.A,C.b_j(m==null?"\ud83d\udc64":A.fL2(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a7),k,34,k,B.cl,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ab,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.l2,k,B.aaq,k,k)
v=A.a([v,B.af,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bo,k,k,k,k,k,k,k,k,11.5,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.an,A.A(A.a([A.E(i.aVq("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dON(r,a0),r.d===B.wW),1),B.ae,A.E(i.aVq("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dOS(r,a0),r.d===B.a76),1)],u),B.m,k,B.e,B.i,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bL(B.a6,k,k,A.ho(D.bXY,D.fUZ,new C.dOT(r,l.e,a0),A.fu(k,k,k,k,k,k,k,k,k,k,k,B.cS,k,k,k,k,k,k,k,k,k,k,k,k,k,B.ce)),k)],u))
v.push(B.X)
t=A.l(k,k,i.a.d.a?B.aQ:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uM(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.Z,!1,k,!0,B.t,k,A.aN(),l.f,k,k,k,k,k,2,i.aUL("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ak,k,k,s,k,k,B.e4,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ab,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ao,k,k,k,k))
v.push(B.X)
t=i.a.d.a
s=t?B.R:B.aQ
q=A.n(10)
p=A.n(10)
o=A.n(10)
n=A.L((t?B.bv:B.bo).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bo,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xd(r.a,!1)
v.push(A.aI(!1,B.a3,!0,q,A.aO(!1,p,!0,A.p(k,A.A(A.a([A.E(A.x(A.a([t,B.bH,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.av,k,k,k,k,k,k,k,k,14,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.i,0,B.p),1),D.bUG],u),B.m,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bh,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dOU(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.aj))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bo,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.X)
t=A.l(k,k,i.a.d.a?B.aQ:B.av,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.Z,!1,k,!0,B.t,k,A.aN(),l.r,k,k,k,k,k,2,i.aUK("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ab,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.av,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bo,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b2S(r.b.length!==0,B.mS,new C.dOV(r,i,a0),new C.dOW(r,a0),"Upload from gallery","ID photo"))
v.push(i.b2S(r.c.length!==0,D.bO0,new C.dOX(r,i,d,a0),new C.dOY(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Aq.a8k("Signature (optional)",t,new C.dOZ(a0),new C.dOO(a0,t),new C.dOP(d,t,a0),k))
v.push(B.aC)
i=i.a.d.a
t=i?B.bv:B.bo
s=(i?B.bv:B.bo).j(0.28)
s=A.E(A.dT(E.aW7,new C.dOQ(d),A.di(k,k,k,k,k,k,k,k,k,t,k,k,B.rL,k,new A.b9(A.n(10),B.a1),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bn(B.cS,k,k,k,B.c,k,B.rL,k,new A.b9(A.n(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.ae,A.E(A.bH(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vv,k,k,k),k,new C.dOR(r,w,d),t),1)],u),B.m,k,B.e,B.i,0,k,k))
return A.p(k,A.cg(A.x(v,B.al,k,B.e,B.O,0,B.p),B.t,k,B.y,k,k,k,k,B.ai),B.f,k,new A.aZ(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.rN,B.jm,k,k,360)},
$S:169}
C.dOL.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dOM.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dON.prototype={
$0(){return this.b.$1(new C.dOK(this.a))},
$S:0}
C.dOK.prototype={
$0(){var w=this.a
w.d=B.wW
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dOS.prototype={
$0(){return this.b.$1(new C.dOJ(this.a))},
$S:0}
C.dOJ.prototype={
$0(){var w=this.a
w.d=B.a76
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dOT.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dOU.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xh(null,u.b,A.c1(2020,1,1,0,0,0,0,0),null,s,A.c1(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dOI(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dOI.prototype={
$0(){var w=this.b
return this.a.a=A.c1(w.gcl(),w.gcg(),w.gcw(),0,0,0,0,0)},
$S:0}
C.dOV.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.PY(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dOH(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dOH.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dOW.prototype={
$0(){return this.b.$1(new C.dOG(this.a))},
$S:0}
C.dOG.prototype={
$0(){return this.a.b=""},
$S:0}
C.dOX.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.e7:B.c
w=3
return A.b(A.bT(q,null,new C.dOE(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.PY(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dOF(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dOE.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dF(!1,w,w,w,!0,w,w,w,!0,w,w,B.ar1,w,w,w,w,new C.dOy(d),!1,w,w,w,w,w,w,w,D.fL6,w,w,w),A.dF(!1,w,w,w,!0,w,w,w,!0,w,w,B.ar_,w,w,w,w,new C.dOz(d),!1,w,w,w,w,w,w,w,D.fS7,w,w,w)],x.p),B.m,w,B.e,B.O,0,B.p),!0,!1,B.ag,!0,!0)},
$S:25}
C.dOy.prototype={
$0(){A.a6(this.a,!1).O("camera")
return null},
$S:0}
C.dOz.prototype={
$0(){A.a6(this.a,!1).O("gallery")
return null},
$S:0}
C.dOF.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dOY.prototype={
$0(){return this.b.$1(new C.dOD(this.a))},
$S:0}
C.dOD.prototype={
$0(){return this.a.c=""},
$S:0}
C.dOZ.prototype={
$0(){return this.a.$1(new C.dOC())},
$S:0}
C.dOC.prototype={
$0(){},
$S:0}
C.dOO.prototype={
$0(){return this.a.$1(new C.dOB(this.b))},
$S:0}
C.dOB.prototype={
$0(){return B.d.a9(this.a)},
$S:0}
C.dOP.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.aiu(u.a,null,null,new C.dOA(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dOA.prototype={
$4(d,e,f,g){this.a.$1(new C.dOx(this.b,d))},
$S:392}
C.dOx.prototype={
$0(){var w=this.a
B.d.a9(w)
B.d.v(w,this.b)},
$S:0}
C.dOQ.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dOR.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.L(x.q).f.U(D.fjk)
return}if(w.a.d==null){w.c.L(x.q).f.U(D.fgd)
return}A.a6(w.c,!1).O(!0)},
$S:0}
C.dPk.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:96}
C.dPl.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.e7:B.c,n=A.n(14),m=A.L((p?B.bv:B.bo).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aQ:B.av,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Bg(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bv:B.bo,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zC(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.zC(r).length>0?B.bC:B.cS,r,r,r,r,r,r,r,r,12,r,r,B.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bv:B.bo
t=(q?B.bv:B.bo).j(0.28)
s=x.p
return new A.d_(e,!1,A.at(A.aI(!1,B.a3,!0,r,A.p(r,A.x(A.a([p,B.P,v,u,B.aC,A.A(A.a([A.E(A.dT(B.nU,new C.dPi(d),A.di(r,r,r,r,r,r,r,r,r,w,r,r,B.k_,r,new A.b9(A.n(10),B.a1),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ae,A.E(A.bH(D.fSx,r,new C.dPj(d),A.bn(B.cS,r,r,r,B.c,r,B.k_,r,new A.b9(A.n(10),B.a1),r,r,r)),1)],s),B.m,r,B.e,B.i,0,r,r)],s),B.al,r,B.e,B.O,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.Ch,E.a04,r,r,300),B.f,B.L,0,r,r,r,r,r,B.aj),r,r,r),r)},
$S:34}
C.dPi.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dPj.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dPe.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dPf(r),p=r.a.d.a,o=p?B.e7:B.c,n=A.n(14),m=A.L((p?B.bv:B.bo).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aQ:B.av,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Bg(l.c),s,s,s,s,s,s,D.fwh,s,s,s)],p),B.m,s,B.e,B.i,0,s,s)
w=A.iH((r.a.d.a?B.bv:B.bo).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a1V,"View receipt",new C.dP7(r,d,l))
u=l.x!=null
t=u?B.pq:B.qD
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bBN,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dP8(r,d,l)),q.$3$icon$label$onTap(B.Cu,"Edit",new C.dP9(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mS,"View / download ID",new C.dPa(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bO_,"View / download selfie",new C.dPb(r,d,l)))
if(l.gaHt())p.push(q.$3$icon$label$onTap(Ae.a35,"View / download signature",new C.dPc(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bC,B.ef,"Delete",new C.dPd(r,d,l)))
p.push(B.aw)
return A.bm(!0,new A.D(B.up,A.p(s,A.x(p,B.m,s,B.e,B.O,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:25}
C.dPf.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aQ:B.av
else w=d
return A.aO(!1,v,!0,new A.D(B.eV,A.A(A.a([A.Y(e,w,v,v,v,20),B.be,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1955}
C.dP7.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fWs(w,this.c)},
$S:0}
C.dP8.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.SL(this.c)},
$S:0}
C.dP9.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.Dy(this.c)},
$S:0}
C.dPa.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bFF(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dPb.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bFF(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dPc.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fWx(w,this.c)},
$S:0}
C.dPd.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.PX(0,this.c)},
$S:0}
C.dPm.prototype={
$1(d){return d.x==null},
$S:247}
C.dPn.prototype={
$1(d){return d.x!=null},
$S:247}
C.dPo.prototype={
$2(d,e){return d+e.c},
$S:1956}
C.dPp.prototype={
$0(){return this.a.bDe()},
$S:0}
C.dPg.prototype={
$0(){return this.a.ag3(this.b)},
$S:0}
C.fFk.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fFl.prototype={
$0(){return B.d.gH(D.a4q)},
$S:z+77}
C.df3.prototype={
$0(){var w=this.a
return w.m(new C.df1(w,this.b))},
$S:0}
C.df1.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.df2.prototype={
$0(){},
$S:0}
C.df4.prototype={
$0(){var w=this.a.gc1z()
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.fHN.prototype={
$1(d){return C.hjh(A.a3(d,x.N,x.z))},
$S:z+11}
C.fHO.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fHP.prototype={
$2(d,e){var w=A.ca(d.a,null),v=A.ca(e.a,null)
if(w!=null&&v!=null)return B.o.aR(w,v)
return d.d.aR(0,e.d)},
$S:z+83}
C.fV5.prototype={
$1(d){return d.ak()},
$S:z+12}
C.h2q.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fEt.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bQM.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f0(e,v)?v:null},
$S:1957}
C.fVE.prototype={
$1(d){var w=this
return new C.a_j(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dfJ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dfI(w,d))},
$S:z+80}
C.dfI.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dfx.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cI(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dfu.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.df5.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.df6.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dfy.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dfe.prototype={
$1(d){var w=null,v=A.R(d).ax.a===B.J,u=v?B.e7:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bo,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.eg(A.a([A.bM(!1,B.dl,w,w,!0,w,w,w,new C.dfc(d),w,w),A.bH(B.xi,w,new C.dfd(d),A.bn(B.nj,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.dfc.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dfd.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dff.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.F(w.r-1,-1,999)},
$S:0}
C.dfv.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dfw.prototype={
$0(){return B.d.gH(D.zH)},
$S:z+14}
C.dfa.prototype={
$1(d){var w=this.a,v=w.y,u=w.gyW(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.TK(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dfb.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dfg.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.ZS(v,u,J.ad(w.d),null)},
$S:z+40}
C.dfh.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dfH.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aA(s,new C.Zz(r.y,r.gyW(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dfF(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bbS(v,e,w,u,t,r.gbTJ(),C.hyM(r.y.Q),r.gyW(0),s)
w=t}return A.c9(q,new C.dfG(r,e),new A.D(B.a05,w,s))},
$S:1958}
C.dfG.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd5(t).ay){t=this.b
u=x.cy.a(B.d.gd5(u.f.f)).gvk(0)
w=t-(u==null?t:u)}else w=0
v=B.k.F(w,-1,0)
u=A.dr()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fK(v*3.141592653589793*0.5)
return A.fw(B.a6,A.da(e,B.k.F(1+v*0.5,0,1)),null,u,!0)},
$S:46}
C.dfF.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aID(B.qm,B.j0)},
$S:0}
C.dfr.prototype={
$0(){var w=this.a
return w.m(new C.dfq(w))},
$S:0}
C.dfq.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dfs.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).O(null)
return null},
$S:0}
C.df7.prototype={
$1(d){var w,v,u=null,t=A.n(26),s=E.kn.j(0.5),r=x.p,q=A.a([D.fJH,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cq(p.d)?"Write this book":"Write a new book"
q.push(p.ZG(d,B.e8,w,J.cq(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.ZG(d,I.aoY,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cI(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cv,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kM.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cv,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kM.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.ZG(d,X.aq_,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.ZG(d,B.qJ,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.ZG(d,B.qJ,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eR(u,E.BJ,A.bm(!0,new A.D(Ad.yE,A.x(q,B.E,u,B.e,B.O,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,D.am6,B.da,u,new A.b9(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:49}
C.dft.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dfk.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cI(w.d)
return new C.a_l(v,J.cI(w.d),w.r+1,null)},
$S:z+44}
C.dfl.prototype={
$1(d){var w=null
return A.oH(!1,A.eg(w,w,w,E.BJ,new A.k_(this.a,new C.dfj(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:324}
C.dfj.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aa5,B.oR,A.E(A.d(e,w,w,w,w,w,w,B.jt,w,w,w),1)],x.p),B.m,w,B.e,B.i,0,w,w)},
$S:531}
C.dfm.prototype={
$0(){return this.a.a=!1},
$S:50}
C.dfn.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:185}
C.dfo.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dfp.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Bp(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Sn(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.dfi(s,t))
w=4
return A.b(s.lf(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dfi.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dfA.prototype={
$1(d){var w=null
return A.oH(!1,A.eg(w,w,w,E.BJ,new A.k_(this.a,new C.dfz(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:324}
C.dfz.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aa5,B.oR,A.E(A.d(e,w,w,w,w,w,w,B.jt,w,w,w),1)],x.p),B.m,w,B.e,B.i,0,w,w)},
$S:531}
C.dfB.prototype={
$0(){return this.a.a=!1},
$S:50}
C.dfC.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:185}
C.dfD.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:185}
C.dfE.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.Bp(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lf(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.df8.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bkd(B.qm,A4.NG)},
$S:0}
C.df9.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aID(B.qm,A4.NG)},
$S:0}
C.dhu.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dhv.prototype={
$1(d){var w=this.a
return w.m(new C.dht(w))},
$S:9}
C.dht.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dhw.prototype={
$1(d){var w=this.a
return w.m(new C.dhs(w))},
$S:9}
C.dhs.prototype={
$0(){return this.a.e="book"},
$S:0}
C.dhx.prototype={
$1(d){var w=this.a
return w.m(new C.dhr(w))},
$S:9}
C.dhr.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dhy.prototype={
$0(){var w=this.a
return w.m(new C.dhq(w,this.b))},
$S:0}
C.dhq.prototype={
$0(){var w=this.b
this.a.d.sb1(0,w)
return w},
$S:0}
C.dhz.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga2r()
A.a6(this.b,!1).O(new A.bqI(w,v))},
$S:0}
C.dfY.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dfX.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a_h(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dg1.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dg0.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.bag(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hh,v,v,v)
return A.eg(A.a([A.bM(!1,B.dl,v,v,!0,v,v,v,new C.dfZ(d),v,v),A.bH(B.xi,v,new C.dg_(d),A.bn(B.nj,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.BJ,w,v,v,v,v,D.fIs,v)},
$S:18}
C.dfZ.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dg_.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dg2.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dg3.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.cg(A.bW(B.bG,r,B.br,t,18,14),B.t,t,B.y,t,D.bCL,t,t,B.ai)},
$S:305}
C.dfW.prototype={
$0(){return this.a.QI(0,this.b)},
$S:0}
C.dfV.prototype={
$0(){return this.a.Qa(0,this.b)},
$S:0}
C.cOq.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cOr.prototype={
$0(){return B.d.gH(D.zH)},
$S:z+14}
C.cOs.prototype={
$4(d,e,f,g){var w=null,v=A.n(e)
return A.bR(0,new A.D(d,A.c3(w,new A.o(w,w,A.L(this.a.j(f),B.r,g),v,w,w,B.n),B.bi),w),0,0,0)},
$S:1960}
C.d6Z.prototype={
$1(d){return this.a.m(new C.d6Y(this.b,this.c))},
$S:9}
C.d6Y.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d7n.prototype={
$1(d){return this.a.m(new C.d7a())},
$S:2}
C.d7a.prototype={
$0(){},
$S:0}
C.d7o.prototype={
$1(d){return this.a.m(new C.d79())},
$S:2}
C.d79.prototype={
$0(){},
$S:0}
C.d7p.prototype={
$0(){var w=this.a
return w.m(new C.d78(w,this.b))},
$S:0}
C.d78.prototype={
$0(){var w=this.a
return w.d=w.gom().G8(this.b.a)},
$S:0}
C.d7q.prototype={
$0(){var w=this.a
return w.m(new C.d77(w,this.b))},
$S:0}
C.d77.prototype={
$0(){var w=this.a
return w.d=w.gom().cMP(this.b)},
$S:0}
C.d7r.prototype={
$1(d){return this.a.m(new C.d76())},
$S:2}
C.d76.prototype={
$0(){},
$S:0}
C.d7s.prototype={
$0(){var w=this.a
return w.m(new C.d75(w,this.b))},
$S:0}
C.d75.prototype={
$0(){var w=this.a
return w.d=w.gom().cMU(this.b.a)},
$S:0}
C.d7t.prototype={
$1(d){var w=this.a
return w.m(new C.d7i(w,d))},
$S:6}
C.d7i.prototype={
$0(){var w=this.a
return w.d=w.gom().cNO(this.b)},
$S:0}
C.d7u.prototype={
$1(d){var w=this.a
return w.d=w.gom().aFC(d)},
$S:2}
C.d7v.prototype={
$1(d){var w=this.a
return w.d=w.gom().cMX(d)},
$S:2}
C.d7x.prototype={
$1(d){var w=this.a
return w.d=w.gom().cNM(d)},
$S:2}
C.d7y.prototype={
$1(d){var w=this.a
return w.m(new C.d7h(w,d))},
$S:9}
C.d7h.prototype={
$0(){var w=this.a
return w.d=w.gom().cND(this.b)},
$S:0}
C.d7z.prototype={
$0(){var w=this.a,v=w.gom(),u=B.a.i(w.gyW(0).a.a),t=B.a.i(w.gaCO().a.a)
u=v.beY(B.a.i(w.gasu().a.a),t,u)
A.a6(this.b,!1).O(u)
return null},
$S:0}
C.bQW.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bQQ.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bQP(w,d))},
$S:11}
C.bQP.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bQZ.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bQR.prototype={
$0(){var w=this.a
w.Q=D.b0e
w.adJ(1)
w.r.x=null},
$S:0}
C.bQS.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b0e)return
w=new A.e4()
w.d_(u.as*13+u.a.e)
v=u.r
v.Q=3+w.aw(3)
v.z=D.d2t[w.aw(6)]
v.as=u.f.a+2.6},
$S:0}
C.bQV.prototype={
$0(){var w=this.a
w.Q=D.acG
w.adJ(2)
w.r.z=null},
$S:0}
C.bQU.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hz1
t.adJ(3)
w=t.r
w.d=s
w.x="I say: "+t.gCo()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.aw(3)
w.z=s?D.d8V[v.aw(4)]:D.dtN[v.aw(3)]
w.as=t.a+2.8},
$S:0}
C.bQX.prototype={
$0(){var w=this.a
w.Q=D.b0f
w.CW=this.b
w.cy=1
w.adJ(4)
w.r.f=w.f.a+5},
$S:0}
C.bQY.prototype={
$0(){},
$S:0}
C.bQT.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).i4()},
$S:0}
C.bQN.prototype={
$0(){return this.a.KW(this.b)},
$S:0}
C.bQO.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).i4()},
$S:0}
C.bSs.prototype={
$0(){var w=this
return w.a.R0(w.b,0,w.c,w.d)},
$S:0}
C.bSt.prototype={
$0(){var w=this
return w.a.R0(w.b,3,w.c,w.d)},
$S:0}
C.bSu.prototype={
$0(){var w=this
return w.a.R0(w.b,1,w.c,w.d)},
$S:0}
C.bSv.prototype={
$0(){var w=this
return w.a.bT9(w.b,w.c,w.d)},
$S:0}
C.bSw.prototype={
$0(){var w=this
return w.a.R0(w.b,4,w.c,w.d)},
$S:0}
C.bSx.prototype={
$0(){var w=this
return w.a.R0(w.b,2,w.c,w.d)},
$S:0}
C.bSy.prototype={
$0(){var w=this
return w.a.R0(w.b,5,w.c,w.d)},
$S:0}
C.bSz.prototype={
$2(d,e){return B.k.aR(d.a,e.a)},
$S:513}
C.bSr.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a5A[d],p=q.a.a7(0,new A.q(0,-q.b*1.2*124)),o=A.fv(r,B.ct,r,3,r,A.cQ(r,r,r,r,r,r,r,r,r,D.fnn,e),B.a5,B.bW,r,B.dD,B.bX)
o.o3(130)
w=o.b.a.c
w=p.aK(0,new A.q(0,w.gba(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.br(A.bJ(w,v.gba(v)+12,u+18),B.hY)
u=this.a
v=t.eQ(B.dF)
w=$.S()
s=A.K()
s.r=B.dq.gp(0)
u.ap(v,s)
s=A.K()
s.r=D.qe.gp(0)
u.ap(t,s)
w=new A.aE(w.r,B.ah,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.D(new A.aY(s-5,v))
w.D(new A.aq(s+1,p.b+1))
w.D(new A.aq(s+6,v))
w.D(new A.bt())
v=A.K()
v.r=D.qe.gp(0)
u.ae(w,v)
o.a4(u,new A.q(t.a+9,t.b+6))},
$S:746}
C.bRc.prototype={
$2(d,e){return B.o.aR(d.Q,e.Q)},
$S:z+7}
C.bRd.prototype={
$2(d,e){var w=this.a,v=B.o.aR(w.amm(d),w.amm(e))
if(v!==0)return v
return B.o.aR(d.Q,e.Q)},
$S:z+7}
C.fsQ.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.h2h.prototype={
$2(d,e){if(e!=null)J.c8(this.a.c3(0,d,new C.h2i()),e)},
$S:z+66}
C.h2i.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.h2j.prototype={
$1(d){return d!==this.a},
$S:3}
C.h2k.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.h2l.prototype={
$1(d){return d!==this.a&&!B.d.aX(this.b,new C.h2g(this.c,d))},
$S:3}
C.h2g.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.h2m.prototype={
$1(d){return d!==this.a},
$S:3}
C.h2n.prototype={
$1(d){return d!==this.a},
$S:3}
C.h2o.prototype={
$1(d){return d!==this.a&&!B.d.aX(this.b,new C.h2f(this.c,d))},
$S:3}
C.h2f.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fFU.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fU6.prototype={
$1(d){return d.Q},
$S:z+15}
C.fU7.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fBY.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fIH.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bM_.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.h2H.prototype={
$2(d,e){return B.o.aR(C.hv8(d),C.hv8(e))},
$S:241}
C.h2I.prototype={
$1(d){return d!==this.a},
$S:3}
C.fUC.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bKd.prototype={
$0(){var w=this.a
w.ch=!0
w.b8v()},
$S:0}
C.bK8.prototype={
$0(){},
$S:0}
C.bKe.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bK6.prototype={
$0(){},
$S:0}
C.bK7.prototype={
$0(){},
$S:0}
C.bKc.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bR(0,A.b4(u,u,u,new C.bcx(t,u),B.ay),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.n(14)
s.push(A.ap(u,A.p(u,A.d(t.dy,u,u,u,u,u,u,D.fuU,B.K,u,u),B.f,u,u,new A.o(w,u,u,v,u,u,B.n),u,u,u,u,B.bU,u,u,u),u,u,14,14,6,u))}return A.aA(B.c5,new A.an(B.a0,u,B.ac,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bK9(t,e),u,u,u,u,u,u,u,new C.bKa(t,e),u,u,u,u,u,u,u,u,u,new C.bKb(t,e),u,u,u,u,!1,B.a4)},
$S:37}
C.bK9.prototype={
$1(d){return this.a.db=B.k.F(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bKb.prototype={
$1(d){return this.a.db=B.k.F(d.b.a/this.b.b,0.08,0.92)},
$S:24}
C.bKa.prototype={
$1(d){return this.a.db=B.k.F(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bK5.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).i4()},
$S:0}
C.cpu.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cpv.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cpt(w))},
$S:0}
C.cpt.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cpw.prototype={
$0(){var w=this,v=w.a
v.gj0()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cpx.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cpy.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cpz.prototype={
$0(){},
$S:0}
C.cpA.prototype={
$0(){var w=this.a
w.z=w.Xe(++w.e)
w.Q=A.bZ(w.gkR()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cpq.prototype={
$0(){return A.a6(this.a,!1).i4()},
$S:0}
C.cpr.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj0().length,e=i/2,d=new C.cps(i,f,h),a0=g.as,a1=A.a4(a0).k("b8<2>")
a0=A.C(new A.b8(a0,a1),a1.k("M.E"))
a0=A.bR(0,A.c9(new A.h4(a0),new C.cpl(g,new A.q(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj0().length!==0&&!B.d.q(g.gj0(),-1)
v=x.p
e=A.a([a0,A.ap(j,new C.Qv(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cL(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new S.MK(new C.cpm(g,u),new C.cpn(g,u),new C.cpo(g,u),j,j,new A.bP("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ap(j,A.d(a1,j,j,j,j,j,j,A.l(j,j,B.a.q(a1,"not a child")?B.ff:B.b9,j,j,j,j,j,j,j,j,13,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj0().length!==0&&!B.d.q(g.gj0(),-1)){a0=g.e+1>=g.gkR().length?"See my result":"Next family"
g=A.at(C.up(a0,g.gqj(g),B.cN,B.jF,D.fw),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.Xe(0):s).length))break
if(!B.d.q(g.gj0(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.Xe(0)
o=s}else o=s
n=s[u]
n=A.ed(B.A,new C.Qv(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.Xe(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.r0(new A.bp(0,p,t),new C.cpp(),new S.Ee(u,j,new C.Qv(l.b,k,62,!1,j),new A.kE(0.25,new C.Qv(m.b,k,62,!1,j),j),new A.k7(n,B.aj,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.I,S.hyE(),!0,!0,j,j,j,j,j,j,!1,B.iL,j,new A.bP("chip-"+r,a0),w),B.b6,B.iJ,j,new A.bP("t"+r+"-"+q,a0),v))}++u}g=A.bW(B.fM,a1,B.br,j,6,8)}e.push(A.ap(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ac,B.t,e,j)},
$S:67}
C.cps.prototype={
$1(d){return new A.q(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:645}
C.cpl.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.gj0().length!==0&&!B.d.q(t.gj0(),-1)
return A.b4(p,p,p,new C.bc0(q.b,o,v,w,p),B.ay)},
$S:61}
C.cpn.prototype={
$1(d){return this.a.gj0()[this.b]===-1},
$S:z+30}
C.cpo.prototype={
$1(d){return this.a.cQH(this.b,d.a)},
$S:z+31}
C.cpm.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj0()[t]!==-1,r=A.n(18),q=e.length!==0?B.cN.j(0.3):B.L
if(s)w=v
else w=A.L(e.length!==0?B.cN:B.jV,B.r,2)
u=s?A.ly(new C.cpk(),A.at(new C.Qv(u.gaF4()[u.gj0()[t]].b,u.gaF4()[u.gj0()[t]].a,62,!1,v),v,v,v),B.lz,B.iJ,v,v,new A.bp(0.3,1,x.X),x.i):D.bbf
return A.cV(v,u,v,v,B.b6,new A.o(q,v,w,r,v,v,B.n),B.a3,v,100,v,v,v,v,v,88)},
$S:1963}
C.cpk.prototype={
$3(d,e,f){return A.ed(B.A,f,e,null,null)},
$S:113}
C.cpp.prototype={
$3(d,e,f){return A.dO(f,new A.q(Math.sin(e*24)*8*(1-e),0))},
$S:113}
C.cPu.prototype={
$1(d){return d>=1},
$S:116}
C.cEs.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkR()[w.e].d.length)w.m(new C.cEr(w))},
$S:11}
C.cEr.prototype={
$0(){return this.a.f++},
$S:0}
C.cEA.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cEB.prototype={
$0(){var w=this.a,v=this.b
w.z.I(0,v)
w.Q=v},
$S:0}
C.cEC.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cEz(w))},
$S:0}
C.cEz.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cED.prototype={
$0(){return this.a.f++},
$S:0}
C.cEE.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cEF.prototype={
$0(){},
$S:0}
C.cEG.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a9(0)
w.as=!1
w.ay=0},
$S:0}
C.cEu.prototype={
$0(){return A.a6(this.a,!1).i4()},
$S:0}
C.cEv.prototype={
$3(d,e,f){var w=null
return A.ly(new C.cEt(this.a,e),w,B.b6,B.hD,w,w,new A.bp(w,this.b,x.X),x.i)},
$S:1964}
C.cEt.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.cN.j(u.as?0.6:0.15)
t=A.a([new A.ac(0,B.G,t,B.I,u.as?40:18)],x.V)
w=this.b
return A.p(v,A.hR(new A.BA(new A.uH(B.w.j(e),B.LE,v,B.XW),H.bWF(A.b4(v,v,v,new C.aBb(u.gkR()[u.e].c,u.as,v),B.ay),new A.Ej(w,w,B.VX)),v),B.aq),B.f,v,v,new A.o(v,v,v,v,t,v,B.a7),v,190,v,v,v,v,v,190)},
$S:1965}
C.cEw.prototype={
$3(d,e,f){return A.da(A.dO(f,new A.q(0,14*(1-e))),e)},
$S:100}
C.cEx.prototype={
$3(d,e,f){return A.dO(f,new A.q(Math.sin(e*22)*8*(1-e),0))},
$S:113}
C.cEy.prototype={
$0(){return this.a.bpz(this.b)},
$S:0}
C.f5B.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.amT$)
v.amT$=w
v.q4$.sp(0,w)
v.aqI(u)},
$S:7}
C.ffK.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:11}
C.bRY.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bRX())},
$S:0}
C.bRX.prototype={
$0(){},
$S:0}
C.bRV.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bRT.prototype={
$0(){},
$S:0}
C.bRU.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gMG()
w=s+1>=r.length?3:5
break
case 3:q=C.bFV(p.gapy(0),0,r.length)
p.m(new C.bRQ(p,q))
o=p
w=6
return A.b(C.BL(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.BM(s.d,s.c.a,"school",p.gapy(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bRR())
w=4
break
case 5:p.m(new C.bRS(p))
p.gqr().VO(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bRQ.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bRR.prototype={
$0(){},
$S:0}
C.bRS.prototype={
$0(){return this.a.x++},
$S:0}
C.bRW.prototype={
$0(){return this.a.KW(this.b)},
$S:0}
C.bRP.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).i4()},
$S:0}
C.f5C.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.q(t,s),q=v.b,p=v.d,o=p?C.hyS(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.E4
C.Sl(q,D.elC,0,0.2,-0.6,-0.2,null,w,D.ekj,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a7(0,new A.q(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.S()
p=A.K()
p.r=D.G8.gp(0)
p.c=3
p.d=B.bA
q.ah(new A.q(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f5D.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.Sl(this.a,D.ekG,0,u,0.7,-0.5,null,null,D.Jq,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f5E.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.Sl(this.a,D.emo,0,0,0.8,-0.5,null,null,D.Jq,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f5F.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.Sl(w.b,D.elw,0,v,-0.8,-0.5,null,null,D.Jq,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f5G.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.q(34,-122+Math.sin(w*5)*5)
else v=v?D.elA:D.E4
C.Sl(p,D.el_,0,t,0,-0.6,null,v,D.Jq,3,0,s,1.3,u,0,w,0)
q=q.cbp(new A.q(222,455),9)
$.S()
w=A.K()
w.r=B.cN.gp(0)
p.ae(q,w)},
$S:0}
C.f5H.prototype={
$2(d,e){return B.k.aR(d.a,e.a)},
$S:513}
C.bRB.prototype={
$2(d,e){return d+e},
$S:63}
C.bRM.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bRN.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bRO.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj0()[u.b]=s
t.gj0()[u.d]=t.y
w=t.as
v=t.q4$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bRI.prototype={
$1(d){return d},
$S:97}
C.bRH.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.q4$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bRJ.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bRK.prototype={
$0(){},
$S:0}
C.bRL.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.FC(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.cp(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.a9(0)},
$S:0}
C.bRD.prototype={
$0(){return A.a6(this.a,!1).i4()},
$S:0}
C.bRE.prototype={
$2(d,e){var w=this.a
w=w.gkR()[w.f].e
return B.o.aR(w[d],w[e])},
$S:63}
C.bRF.prototype={
$2(d,e){var w=null,v=C.haw(new A.av(A.aR(1/0,e.a,e.b),A.aR(1/0,e.c,e.d))),u=this.a
return A.aA(B.c5,new A.em(A.b4(w,w,w,new C.bjb(u,u.q4$),B.ay),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bRC(u,v),w,w,w,w,!1,B.a4)},
$S:37}
C.bRC.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj0().length
u=B.o.F(B.k.bh((t.a-s.a)/r/450*v),0,v-1)
w.d0t(w.gj0()[u])}},
$S:24}
C.bRG.prototype={
$1(d){var w=this.a
return w.gkR()[w.f].d[d]},
$S:76}
C.dqF.prototype={
$2(d,e){return 0},
$S:63}
C.bRn.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bRm())},
$S:0}
C.bRm.prototype={
$0(){},
$S:0}
C.bRl.prototype={
$0(){},
$S:0}
C.bRf.prototype={
$0(){},
$S:0}
C.bRg.prototype={
$0(){},
$S:0}
C.bRk.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.B0},
$S:0}
C.bRj.prototype={
$1(d){var w=null,v=this.a.gqr(),u=A.d(d,w,w,w,w,w,w,D.aUH,w,w,w),t=v.gbm0(0)
return A.aA(B.c5,A.x(A.a([u,B.bH,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aUW,w,w,w)],x.p),B.E,w,B.e,B.i,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbrW(v),w,w,w,w,w,w,!1,B.a4)},
$S:134}
C.bRh.prototype={
$0(){return this.a.KW(this.b)},
$S:0}
C.bRi.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).i4()},
$S:0}
C.bRe.prototype={
$0(){return A.a6(this.a,!1).i4()},
$S:0}
C.e0u.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e0v.prototype={
$1(d){return this.a},
$S:39}
C.e0w.prototype={
$0(){var w=this.a
return w.d=w.gSM().ber(this.b)},
$S:0}
C.e0s.prototype={
$1(d){return new C.TL(this.a,null)},
$S:z+32}
C.e0t.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e0r.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hh,w,w,w)
return A.eg(A.a([A.bM(!1,E.aWh,w,w,!0,w,w,w,new C.e0p(d),w,w),A.bM(!1,D.fQ_,w,w,!0,w,w,w,new C.e0q(d),w,w)],x.p),w,w,D.fw,v,w,w,w,w,D.fCC,w)},
$S:18}
C.e0p.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e0q.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e0o.prototype={
$0(){var w=null,v=this.a.c.L(x.q).f,u=this.b
return v.U(A.b3(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.a_,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e0x.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:14}
C.e0y.prototype={
$0(){var w=this.a,v=this.b,u=C.bDH(v,10,w.r,!1)
return w.uu(C.hji(w.a.d,"kahoot",u,w.gb63(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e0z.prototype={
$0(){var w=this.a
return w.uu(new C.alz(this.b,w.a.d,w.r,null))},
$S:0}
C.e0A.prototype={
$0(){var w=this.a
return w.uu(new C.ajN(this.b,w.a.d,w.r,null))},
$S:0}
C.e0D.prototype={
$0(){var w=this.a
return w.uu(new C.auu(this.b,w.a.d,w.r,null))},
$S:0}
C.e0E.prototype={
$0(){var w=this.a
return w.uu(new C.ays(this.b,w.a.d,w.r,null))},
$S:0}
C.e0F.prototype={
$0(){var w=this.a
return w.uu(new C.alC(this.b,w.a.d,w.r,null))},
$S:0}
C.e0G.prototype={
$0(){var w=this.a
return w.uu(new C.alG(this.b,w.a.d,w.r,null))},
$S:0}
C.e0H.prototype={
$0(){var w=this.a
return w.uu(new C.alI(this.b,w.a.d,w.r,null))},
$S:0}
C.e0I.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d0O()
return v.uu(C.hji(v.a.d,"creator_"+u.a,w,v.gb63(),"A game by the family",t,this.c.a))},
$S:0}
C.e0J.prototype={
$0(){return this.a.OJ(this.b)},
$S:0}
C.e0K.prototype={
$0(){return this.a.XG(0,this.b)},
$S:0}
C.e0B.prototype={
$0(){return this.a.OJ(null)},
$S:0}
C.e0C.prototype={
$0(){return this.a.L(x.q).f.U(D.fgj)},
$S:0}
C.bRz.prototype={
$0(){var w=this.a
w.d=D.b_D
w.z=3},
$S:0}
C.bRA.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aPu()}else w.m(new C.bRy(w))},
$S:11}
C.bRy.prototype={
$0(){return this.a.z--},
$S:0}
C.bRp.prototype={
$0(){var w=this.a
w.d=D.acm
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bRq.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bRo(w))
if(w.as<=0){d.a1(0)
w.b6_(-1)}},
$S:11}
C.bRo.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bRv.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.WA},
$S:0}
C.bRw.prototype={
$0(){return this.a.e++},
$S:0}
C.bRs.prototype={
$0(){var w=this.a
w.d=D.b_E
w.ay=this.b},
$S:0}
C.bRt.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bRx.prototype={
$2(d,e){return B.o.aR(e.b,d.b)},
$S:1966}
C.bRu.prototype={
$0(){return this.a.KW(this.b)},
$S:0}
C.bRr.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).i4()},
$S:0}
C.bR_.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.aw()
s=A.a([new A.au(new A.ba(s,B.b5,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.J)(t),++v){u=t[v]
s.push(new A.au(new A.ba(u,B.b5,B.aP),r))}return s},
$S:1967}
C.bR0.prototype={
$0(){return this.a.gCZ().c.push(C.h4j(null,0,20,""))},
$S:0}
C.bRa.prototype={
$1(d){var w=null
return A.bs(w,new A.b6(4,A.n(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dt,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.Vv,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:243}
C.bR9.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gCZ().c,m=this.b,l=n[m],k=o.ceo(l),j=B.c.j(0.06),i=A.n(18),h=A.L(B.aW,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.KE,p,p,p),B.b3],g)
if(n.length>1)f.push(A.aH(p,p,p,p,B.aqN,p,p,p,new C.bR4(o,m),p,p,p,p,p,p))
n=J.a7(k)
m=this.c
f=A.a([A.A(f,B.m,p,B.e,B.i,0,p,p),A.aM(p,B.Z,!1,p,!0,B.t,p,A.aN(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bR5(l),p,p,p,!1,p,p,!1,p,!0,p,B.ab,p,p,p,p,p,p,p,p,p,p,p,B.dh,!0,B.a5,p,B.ao,p,p,p,p),B.P],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aCH[v]
t=D.aCo[v]
s=v+1
f.push(new A.D(B.eK,new A.c7(B.aM,B.e,B.i,B.m,p,B.p,p,0,A.a([A.d(u,p,p,p,p,p,p,new A.G(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.ae,new A.by(1,B.bc,A.aM(p,B.Z,!1,p,!0,B.t,p,A.aN(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bR6(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ab,p,p,p,p,p,p,p,p,p,p,p,B.dh,!0,B.a5,p,B.ao,p,p,p,p),p),new Au.P9(v,l.c,new C.bR7(o,l),p,!1,D.lC,p,p,p,p,p,!1,!1,p,K.b02,p,p,p,p,p,w)],g),p),p))}f.push(D.fI7)
f.push(B.an)
n=A.a([D.fBH,B.ae],g)
for(r=0;r<3;++r){q=D.ccL[r]
n.push(new A.D(B.fz,A.js(p,p,p,A.d(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bR8(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.m,p,B.e,B.i,0,p,p))
return A.p(p,A.x(f,B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.n),p,p,p,B.kS,B.bh,p,p,p)},
$S:157}
C.bR4.prototype={
$0(){var w=this.a
return w.m(new C.bR3(w,this.b))},
$S:0}
C.bR3.prototype={
$0(){return B.d.cA(this.a.gCZ().c,this.b)},
$S:0}
C.bR5.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bR6.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bR7.prototype={
$1(d){return this.a.m(new C.bR2(this.b,d))},
$S:151}
C.bR2.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bR8.prototype={
$1(d){return this.a.m(new C.bR1(this.b,this.c))},
$S:9}
C.bR1.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e29.prototype={
$0(){var w=this.a
w.wp()
w.a.bv()
w.a.qk()},
$S:0}
C.e28.prototype={
$0(){var w=this.a
w.wp()
w.a.bv()
w.a.qk()},
$S:0}
C.e2b.prototype={
$0(){var w=this,v=w.b
if(J.cI(v)||J.cq(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e2c.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2d.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e27.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e2a.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e2f.prototype={
$0(){this.a.P4()
return null},
$S:0}
C.e2e.prototype={
$0(){return this.a.EX(this.b)},
$S:0}
C.e1A.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bM(!1,B.dl,w,w,!0,w,w,w,new C.e1y(d),w,w),r=A.bn(B.bQ,w,w,w,w,w,w,w,w,w,w,w)
return A.eg(A.a([s,A.bH(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e1z(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e1y.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e1z.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e1B.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cNi(this.b)},
$S:0}
C.e1v.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aV0(w.b,w.c,w.d)},
$S:7}
C.e0X.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e0Y.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e1e.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Hc(t.a.c),$async$$0)
case 2:s=r.nv(q.dH(e,new C.e1c(t)))
if(s!=null&&t.c!=null)t.m(new C.e1d(t,s))
t.a.bv()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e1c.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e1d.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e1f.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e1g.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e1u.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cO5(C.hz0(w),w)},
$S:0}
C.e1b.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.W4(u,w,C.aQs(u,w),new C.e1a(v),null)},
$S:z+37}
C.e1a.prototype={
$1(d){return this.bnp(d)},
bnp(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.e19(s,d))
w=3
return A.b(s.uq(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:760}
C.e19.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.ber(this.b)},
$S:0}
C.e1r.prototype={
$1(d){return d.as},
$S:z+1}
C.e1s.prototype={
$1(d){var w=this
return new A.e_(new C.e1q(w.a,w.b,w.c,w.d,w.e),null)},
$S:21}
C.e1q.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.e7:B.c,h=A.n(26),g=A.L(B.bQ.j(0.5),B.r,1.5),f=A.p(k,D.bSS,B.f,k,k,new A.o(B.bQ.j(0.18),k,k,k,k,k,B.a7),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.av,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a2,k,k,k,A.l(k,k,j?B.bv:B.bo,k,k,k,k,k,k,k,k,12.5,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.i,0,B.p),1)
f=A.A(A.a([f,B.be,a0,A.aH(k,k,k,k,A.Y(B.cz,j?B.bv:B.bo,k,k,k,k),k,k,k,new C.e1k(a1),k,k,k,k,k,k)],w),B.m,k,B.e,B.i,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bo,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.J)(v),++s){r=v[s]
q=t.a===r?B.bQ:B.bQ.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.ay(B.bQ,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bQ
a0.push(A.aA(k,A.cV(k,A.d(m,k,k,k,k,k,k,new A.G(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b6,new A.o(q,k,new A.bG(n,n,n,n),new A.bg(p,p,p,p),k,k,B.n),B.h8,k,k,k,k,B.Ca,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e1l(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bW(B.bG,a0,B.br,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c3O,new A.D(D.bD9,f,k),new A.D(D.bD0,e,k),new A.D(B.rN,a0,k),new A.D(X.am7,A.d(v,k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bo,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.Y(Ah.aoH,j?B.bv:B.bo,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bD2,A.A(A.a([a0,B.at,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.av,k,k,k,k,k,k,k,k,k,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.b8F(k,B.bQ,k,k,!1,B.y,k,k,k,k,k,k,new C.e1m(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.m,k,B.e,B.i,0,k,k),k))}f.push(B.aC)
j=A.n(20)
e=A.a([new A.ac(0,B.G,B.aE.j(0.35),B.j7,12)],x.V)
f.push(A.aA(k,A.p(k,A.A(A.a([D.fC2,B.be,D.bHt,D.bTy],w),B.m,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.c7x,B.n),k,k,k,B.hS,B.bE,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e1n(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.wi,A.A(A.a([A.E(A.dT(B.dl,new C.e1o(a1),k),1),B.at,A.E(A.bH(M.aWI,k,new C.e1p(t,a1),A.bn(B.bQ,k,k,k,k,k,B.cn,k,k,k,k,k)),1)],w),B.m,k,B.e,B.i,0,k,k),k))
return A.bm(!0,A.p(k,A.cg(A.x(f,B.E,k,B.e,B.O,0,B.p),B.t,k,B.y,k,k,k,k,B.ai),B.aq,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.C6,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:85}
C.e1k.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e1l.prototype={
$0(){return this.b.$1(new C.e1j(this.a,this.c))},
$S:0}
C.e1j.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e1m.prototype={
$1(d){var w=this.a
w.m(new C.e1h(w,d))
this.b.$1(new C.e1i())},
$S:9}
C.e1h.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e1i.prototype={
$0(){},
$S:0}
C.e1n.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(new A.aHd(!0,w))
return null},
$S:0}
C.e1o.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e1p.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(new A.aHd(!1,w))
return null},
$S:0}
C.e1t.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cNT(this.b.b)
w.r.a9(0)},
$S:0}
C.e0L.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.aiD(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hsn(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e0M.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aFz(w)},
$S:0}
C.e1D.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.adZ(this.b,w,this.c,null)},
$S:z+39}
C.e1x.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.e7:B.c,t=A.n(20),s=A.Y(B.lN,B.aY,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.av,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bo,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.af,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bo,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.m,w,B.e,B.O,0,B.p)
return A.eg(A.a([A.bH(D.fTJ,w,new C.e1w(d),A.bn(B.aY,w,w,w,w,w,w,w,w,w,w,w))],o),B.bb,w,u,v,w,s,w,new A.b9(t,B.a1),r,w)},
$S:18}
C.e1w.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e0N.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e0O.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e0P.prototype={
$1(d){return d.a},
$S:z+8}
C.e0Q.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.J)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hS(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aFz(w)},
$S:0}
C.e0U.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.aiD(q)
w=A.T(q).k("X<1>")
q=A.C(new A.X(q,new C.e0S(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hsn(v.e,null,r,v.f,v.r,new C.e0T(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e0T.prototype={
$0(){return this.a.aaT(this.b)},
$S:0}
C.e0S.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e0V.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("N<1,hS>")
w=A.C(new A.N(w,new C.e0R(this.b),v),v.k("ak.E"))
u.d=t.aFz(w)},
$S:0}
C.e0R.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e1C.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e16.prototype={
$1(d){return d.length!==0},
$S:3}
C.e17.prototype={
$1(d){var w=this
return new A.e_(new C.e15(w.a,w.b,w.c,w.d),null)},
$S:21}
C.e15.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.e7:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.av,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bo,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bo,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.N(o,new C.e11(u,e,o),A.T(o).k("N<1,v>")))
p.push(B.P)
u=w.d
p.push(A.aM(v,B.Z,!1,v,!0,B.t,v,A.aN(),u,v,v,v,v,v,2,A.bs(v,new A.b6(4,A.n(12),B.dn),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ak,v,v,v,v,v,B.mt,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ab,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.ao,v,v,v,v))
p=A.x(p,B.al,v,B.e,B.O,0,B.p)
t=w.a
return A.eg(A.a([A.bM(!1,B.dl,v,v,!0,v,v,v,new C.e12(d),v,v),A.bH(B.KP,v,new C.e13(t,u,o,e),A.bn(B.bQ,v,v,v,v,v,v,v,v,v,v,v)),A.bH(D.fGv,v,new C.e14(t,u,o,d),A.bn(B.aY,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:199}
C.e11.prototype={
$1(d){var w=null
return A.dF(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aQ:B.av,w,w,w,w,w,w,w,w,w,w,w,B.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.c0D,w,w,w,new C.e10(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1968}
C.e10.prototype={
$0(){return this.a.$1(new C.e0Z(this.b,this.c))},
$S:0}
C.e0Z.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.e12.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e13.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e1_(w.c,u))
v.bP(0,B.cd)}},
$S:0}
C.e1_.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e14.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).O(!0)},
$S:0}
C.e18.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cOx(this.b,D.uw,C.Ha(v,w.a.c))},
$S:0}
C.e1K.prototype={
$1(d){return d.as},
$S:z+1}
C.e1L.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iX(this.b,w)},
$S:0}
C.e1M.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.iov(v)
return w.Wu(v==null?null:v.a)},
$S:0}
C.e1N.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.i0e(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aR(1/0,e.a,e.b)
s=A.aR(1/0,e.c,e.d)
l.cvL(new A.av(u,t),v.gbl5(),new A.av(k,s))}k=A.n(22)
s=this.b.a
r=s?D.d0m:D.cZy
q=A.L(s?B.dt:D.biY,B.r,1)
p=A.n(22)
o=A.bR(0,A.b4(m,m,m,new C.bfi(s,m),B.ay),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bx(p,new A.an(B.a0,m,B.ac,B.t,A.a([o,A.bR(0,A.uS(new A.Q(n,n,n,n),new A.a5(u,t,new C.bgd(l.d,v,l.f,w,new C.e1G(l),l.gcfA(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ap(10,new C.by_(s,new C.e1H(l,e),new C.e1I(l,e),new C.e1J(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a9(B.b1,B.b7,B.x,r,m,m),B.n),m,m,m,A_.ale,m,m,m,m)},
$S:218}
C.e1G.prototype={
$1(d){var w=this.a
w.m(new C.e1E(w,d))},
$S:2}
C.e1E.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.I(0,v)},
$S:0}
C.e1H.prototype={
$0(){var w=this.b
return this.a.bcB(1.25,new A.av(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.e1I.prototype={
$0(){var w=this.b
return this.a.bcB(0.8,new A.av(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.e1J.prototype={
$0(){var w=this,v=w.b
return w.a.aV0(new A.av(A.aR(1/0,v.a,v.b),A.aR(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gbl5())},
$S:0}
C.e1O.prototype={
$0(){var w=this.a
return w.m(new C.e1F(w))},
$S:0}
C.e1F.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e0W.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fG(new A.fA(s.c)),$async$$0)
case 2:t.yo("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dg7.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ap(w,new C.bk2(u,C.hDj(v.c,u),new C.dg6(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dg6.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dg8.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ap(w,new C.bnl(d.d,d.c,u.f.q(0,d.a),new C.dg5(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dg5.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fFo.prototype={
$1(d){var w,v=d.e
if(this.a.an(0,v))return v
v=this.b
w=A.T(v)
return A.nv(new A.cM(new A.X(v,new C.fFp(d),w.k("X<1>")),new C.fFq(),w.k("cM<1,m>")))},
$S:z+19}
C.fFp.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fFq.prototype={
$1(d){return d.a},
$S:z+8}
C.fFm.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fFn.prototype={
$1(d){return d.b},
$S:z+8}
C.fFt.prototype={
$1(d){var w,v=d.e
if(this.a.an(0,v))return v
v=this.b
w=A.T(v)
return A.nv(new A.cM(new A.X(v,new C.fFu(d),w.k("X<1>")),new C.fFv(),w.k("cM<1,m>")))},
$S:z+19}
C.fFu.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fFv.prototype={
$1(d){return d.a},
$S:z+8}
C.fFr.prototype={
$1(d){var w,v=A.ey([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.an(0,w)&&v.I(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fFs.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dga.prototype={
$0(){return this.a},
$S:z+46}
C.dgr.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.an(0,d)},
$S:267}
C.dgj.prototype={
$2(d,e){var w=this.a.c3(0,d,new C.dgk()),v=J.a7(w)
if(!v.q(w,e))v.I(w,e)},
$S:121}
C.dgk.prototype={
$0(){return A.a([],x.s)},
$S:739}
C.dgi.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f0(w,e)
return w===!0},
$S:326}
C.dgb.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dgh.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dgg.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.I(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aX(v==null?D.Dr:v)
u=1
while(v.C())u+=s.$2(v.gR(v).a,e)
v=s.b.h(0,d)
v=J.aX(v==null?B.Z:v)
while(v.C()){t=v.gR(v)
if(e.q(0,t))continue
e.I(0,t)
t=w.h(0,t)
t=J.aX(t==null?D.Dr:t)
while(t.C())u+=s.$2(t.gR(t).a,e)}return u},
$S:1970}
C.dgc.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dgl.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.I(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aX(u==null?B.Z:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gR(u)
if(a8.q(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.I(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aX(t==null?D.Dr:t)
while(t.C()){r=t.gR(t)
if(r.a!==a9&&!B.d.aX(w,new C.dgm(r)))w.push(r)}}B.d.bt(w,new C.dgn(a8))
B.d.aZ(w,new C.dgo())
q=C.i0d(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.J)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eSs],x.G))}a8=A.a([],x.s)
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
else j.push(d)}}a0=(B.d.gH(k)+B.d.gal(k))/2
a1=A.a([new A.y(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bqs(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:1971}
C.dgm.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dgn.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dgo.prototype={
$2(d,e){return B.o.aR(d.Q,e.Q)},
$S:z+7}
C.dgp.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a7(n),v=o.c,u=-1/0,t=0;t<w.gJ(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b8(v,A.a4(v).k("b8<2>")).cG(0,0,B.pX)+88-w.gH(n).a}else u=0
for(w=J.a7(n),v=o.c,t=0;t<w.gJ(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:745}
C.dgq.prototype={
$1(d){return 16+d*156},
$S:172}
C.dg9.prototype={
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
t.n(0,d,new C.Gs(r,new A.q(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.Gs(s,new A.q(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.Gs(s,new A.q(e,v)))}t=o.r.h(0,d)
t=J.aX(t==null?B.Z:t)
s=o.w
while(t.C()){r=t.gR(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.KL(d,new A.q(e+t,w),s,s.length))}},
$S:185}
C.dgd.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aKk(new A.q(v.a,v.b+28),new A.q(w.a,w.b+28),!0,null))},
$S:121}
C.dge.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dgf.prototype={
$2(d,e){return B.k.aR(d.a,e.a)},
$S:723}
C.dgs.prototype={
$2(d,e){return B.k.aR(d.a,e.a)},
$S:723}
C.dgt.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:384}
C.dgu.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:186}
C.dgv.prototype={
$1(d){return d>=0.5},
$S:116}
C.flk.prototype={
$3(d,e,f){var w=null,v=A.n(10)
return A.hb(A.aO(!1,v,!0,new A.a5(38,38,A.Y(d,this.a.c?B.c:B.cs,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1973}
C.eWu.prototype={
$1(d){var w=null,v=A.n(8),u=B.bQ.j(0.12),t=A.n(8)
return new A.D(B.nx,A.aO(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.frN,B.K,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.Oc,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eWt(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eWt.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dwk.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dwj.prototype={
$1(d){var w=null,v=A.n(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nR,B.K,w,w)
return A.eg(A.a([A.bM(!1,B.dl,w,w,!0,w,w,w,new C.dwh(d),w,w),A.bM(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.mF,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dwi(d),w,w)],x.p),B.bb,B.C7,w,u,D.bE3,w,D.bG0,new A.b9(v,B.a1),w,w)},
$S:18}
C.dwh.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dwi.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dwt.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dwu.prototype={
$1(d){var w=this.a
return w.m(new C.dws(w,d))},
$S:z+49}
C.dws.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dwv.prototype={
$1(d){var w=null
return A.qE(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dwy.prototype={
$1(d){var w=this.a
return w.m(new C.dwr(w,d))},
$S:35}
C.dwr.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dwx.prototype={
$1(d){var w=null
return A.qE(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dwz.prototype={
$1(d){var w=this.a
return w.m(new C.dwq(w,d))},
$S:35}
C.dwq.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dwA.prototype={
$0(){var w=this.a
return w.m(new C.dwp(w))},
$S:0}
C.dwp.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dwB.prototype={
$0(){var w=this.a
return w.m(new C.dwo(w))},
$S:0}
C.dwo.prototype={
$0(){return++this.a.at},
$S:0}
C.dwC.prototype={
$0(){var w=this.a
return w.m(new C.dwn(w))},
$S:0}
C.dwn.prototype={
$0(){return--this.a.ax},
$S:0}
C.dwD.prototype={
$0(){var w=this.a
return w.m(new C.dwm(w))},
$S:0}
C.dwm.prototype={
$0(){return++this.a.ax},
$S:0}
C.dwE.prototype={
$1(d){var w=this.a
return w.m(new C.dwl(w,d))},
$S:9}
C.dwl.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dww.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dwF.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.n(12)
if(p)w=B.bQ.j(0.18)
else w=q.c.a?B.e7:B.c
v=A.n(12)
if(p)u=B.bQ
else u=(q.c.a?B.ee:B.bP).j(0.85)
u=A.L(u,B.r,p?1.5:1)
if(p)t=B.bQ
else t=q.c.a?B.bv:B.bo
t=A.Y(f,t,r,r,r,18)
if(p)s=B.bQ
else s=q.c.a?B.bv:B.bo
return A.E(A.aI(!1,B.a3,!0,r,A.aO(!1,o,!0,A.cV(r,A.x(A.a([t,B.aw,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.i,0,B.p),r,r,B.b6,new A.o(w,r,u,v,r,r,B.n),B.eJ,r,r,r,r,B.k_,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dwG(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
$S:z+51}
C.dwG.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dwP.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cei.prototype={
$2(d,e){return new A.bA(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:95}
C.cep.prototype={
$1(d){return d.ak()},
$S:z+5}
C.ceq.prototype={
$2(d,e){var w=J.b7(e,new C.ceo(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bA(d,w,x.d2)},
$S:z+53}
C.ceo.prototype={
$1(d){return d.ak()},
$S:z+12}
C.cek.prototype={
$1(d){return C.alL(A.a3(d,x.N,x.z))},
$S:z+9}
C.cel.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cem.prototype={
$1(d){return C.hjh(A.a3(d,x.N,x.z))},
$S:z+11}
C.cen.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.ceu.prototype={
$1(d){return new A.aHp(d.f.length,d.a,d.b)},
$S:z+55}
C.cev.prototype={
$2(d,e){return B.a.aR(d.c,e.c)},
$S:573}
C.cer.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.ces.prototype={
$1(d){return d.cNv(C.Ha(d,this.a))},
$S:z+85}
C.e1X.prototype={
$1(d){return C.uq(d,this.a.a.c)},
$S:z+3}
C.e1Y.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e21.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e22.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e1U.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0P(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yX("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pq(r.c,r.e),$async$$0)
case 4:s.yX(p)
w=5
return A.b(s.K0(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e1V.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0P(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yX("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pq(r.c,r.e),$async$$0)
case 4:s.yX(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e1W.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.W7(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.yX("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.yX("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.yX("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.K0(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.yX(B.a.el(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e20.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0O(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.yX("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).cd(A.eb(new C.e2_(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pq(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e2_.prototype={
$1(d){var w=this.b
return new C.a0f(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e1Z.prototype={
$1(d){return D.hvw},
$S:z+58}
C.e24.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e25.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e23(w,d)
return new A.D(B.d3,new C.bgh(this.b,d.c,d.a,w,null),null)},
$S:1974}
C.e23.prototype={
$0(){return this.a.Yj(this.b.b)},
$S:0}
C.e1P.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e1Q.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e1R.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e1S.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e1T.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e26.prototype={
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
$S:187}
C.dOp.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dOq.prototype={
$0(){return B.d.gH(D.a5X)},
$S:z+60}
C.dOr.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b4(A.at(A.Y(this.b.d,B.c.j(0.95),w,w,D.d77,44),w,w,w),w,w,new C.bl9(u,t,v,w),B.ay)},
$S:61}
C.fW6.prototype={
$1(d){return A.pa(new C.fW5(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:137}
C.fW5.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.e7:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.tg,24)],x.V),o=r?B.ee:B.bP
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.n(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aY.j(0.25),B.bQ.j(0.18)],x.O)
w=A.p(t,D.bVW,B.f,t,t,new A.o(t,t,t,A.n(12),t,new A.a9(B.a6,B.a9,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aQ:B.av,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.X,o,new A.D(E.amc,A.A(A.a([w,B.be,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bv:B.bo,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.i,0,B.p),1)],u),B.m,t,B.e,B.i,0,t,t),t),A.E(A.il(!0,t,e,B.y,D.feo,new C.fW4(this.b,s),20,B.alL,t,B.ai,!1),1)],u),B.m,t,B.e,B.i,0,B.p),B.f,t,t,new A.o(q,t,t,B.l5,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:119}
C.fW4.prototype={
$2(d,e){var w=null,v=D.a5X[e],u=A.n(16),t=A.n(16),s=this.b.a,r=A.L(s?B.ee:B.bP,B.r,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.er,8)],x.V),p=A.n(15),o=A.E(new C.a71(v.a,!0,w),1),n=s?B.jT:B.jj,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aQ:B.av,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aI(!1,B.a3,!0,w,A.aO(!1,u,!0,A.eG(A.bx(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bv:B.bo,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.i,0,B.p),B.f,n,w,w,w,w,w,w,B.k0,w,w,w)],l),B.al,w,B.e,B.i,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fW3(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)},
$S:80}
C.fW3.prototype={
$0(){A.a6(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cnM.prototype={
$0(){return this.a.ah6(this.b)},
$S:0}
C.fVu.prototype={
$1(d){return D.hql},
$S:z+61}
C.h1Z.prototype={
$1(d){var w=this
return new C.a22(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.fVy.prototype={
$1(d){return new C.ZU(this.a,null)},
$S:z+63}
C.fVx.prototype={
$1(d){return D.hrm},
$S:z+64}
C.d7L.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d7M.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d7K(w,d))},
$S:35}
C.d7K.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d7N.prototype={
$1(d){return this.a.KE()},
$S:2}
C.d7O.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d7H.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d7I.prototype={
$1(d){return this.a.KE()},
$S:2}
C.d7J.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cG7.prototype={
$0(){},
$S:0}
C.cGd.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cGe.prototype={
$0(){return this.a.aQm(-1)},
$S:0}
C.cGf.prototype={
$1(d){return this.a.m(new C.cGc())},
$S:2}
C.cGc.prototype={
$0(){},
$S:0}
C.cGg.prototype={
$0(){return this.a.aQm(1)},
$S:0}
C.cGh.prototype={
$1(d){return this.a.m(new C.cGb())},
$S:2}
C.cGb.prototype={
$0(){},
$S:0}
C.cGi.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aY.j(0.2)
if(s)v=B.aY
else v=this.b.a?B.ee:B.bP
return A.uL(u,u,B.b2,r,u,new C.cGa(t,d),B.yI,s,w,u,new A.ay(v,1,B.r,-1),B.ce)},
$S:1975}
C.cGa.prototype={
$1(d){var w=this.a
return w.m(new C.cG8(w,this.b))},
$S:9}
C.cG8.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cGj.prototype={
$1(d){return this.a.m(new C.cG9())},
$S:2}
C.cG9.prototype={
$0(){},
$S:0}
C.cGk.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fkQ.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).O(w)},
$S:2}
C.fkR.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fkS.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).O(w)},
$S:0}
C.fkO.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbCm()
w=w.e
s=A.n(B.o.F(v-1,0,v))
return A.b4(new A.D(D.bG_,new A.em(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bxP(p,v,this.b.a,u,t,r),r,r,B.ay)},
$S:61}
C.fkP.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dy.aE(0,p)
p=A.n(12)
q=q.a.c
v=A.n(12)
u=A.n(12)
t=w*2.4
s=A.ar(B.aY,B.bQ,w)
s.toString
s=A.a([B.b2,s,B.aY],x.O)
return A.aI(!1,B.a3,!0,p,A.aO(!1,v,!0,A.eG(D.eqf,r,new A.o(r,r,A.L(B.c.j(0.4),B.r,1.5),u,r,new A.a9(new A.d9(-1.2+t,-0.5),new A.d9(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
$S:140}
C.fTU.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:59}
C.eTE.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eTv.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eTw.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eTC.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e_(new C.eTB(w,this.b),null)},
$S:21}
C.eTB.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.e7:B.c,t=A.n(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.av,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eR(w,u,new A.D(B.am4,A.x(A.a([s,B.an,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bo,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hph(new C.eTy(r,e),r.a),B.aC,A.A(A.a([A.E(A.dT(B.dl,new C.eTz(d),w),1),B.at,A.E(A.bH(B.VQ,w,new C.eTA(r,d),A.bn(B.aY,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.i,0,w,w)],q),B.al,w,B.e,B.O,0,B.p),w),w,w,w,w,B.da,w,new A.b9(t,B.a1),w)},
$S:101}
C.eTy.prototype={
$1(d){return this.b.$1(new C.eTx(this.a,d))},
$S:35}
C.eTx.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eTz.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eTA.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.eTD.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Tq(this.b)},
$S:0}
C.eTq.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bex(w)},
$S:0}
C.eTu.prototype={
$1(d){return this.bnM(d)},
bnM(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.LX(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iX(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eTt.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("X<1>")
w=A.C(new A.X(w,new C.eTs(this.b),v),v.k("M.E"))
u.d=t.bex(w)},
$S:0}
C.eTs.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eTF.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iX(this.b,w)},
$S:0}
C.eTG.prototype={
$1(d){return this.a.bGw(d,this.b)},
$S:z+67}
C.eTr.prototype={
$0(){return this.a.aaS(this.b)},
$S:0}
C.h1P.prototype={
$1(d){return new C.aej(this.a,this.b,this.c,null)},
$S:z+68}
C.eTI.prototype={
$0(){return this.a.a06(this.b)},
$S:0}
C.eTJ.prototype={
$0(){return this.a.QE(this.b)},
$S:0}
C.eTK.prototype={
$0(){return this.a.ES(this.b)},
$S:0}
C.eTL.prototype={
$0(){return this.a.a07(this.b)},
$S:0}
C.eTH.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eTl.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eTm.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eTn.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eTp.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qq(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eTo(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eTo.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eU7.prototype={
$2(d,e){return d+e.gxA()},
$S:z+71}
C.eU3.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eU4.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eTP.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.e7:B.c,s=A.n(24),r=A.p(v,D.bWo,B.f,v,v,new A.o(B.ax.j(u?0.18:0.08),v,A.L(B.ax.j(0.28),B.r,1),v,v,v,B.a7),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.av,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bv:B.bo,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aQ:B.av
u=u?B.ee:B.bP
w=x.p
return A.eR(v,t,new A.D(B.yH,A.x(A.a([r,B.aR,q,B.P,p,B.d6,A.A(A.a([A.E(A.dT(B.nU,new C.eTN(d),A.di(v,v,v,v,v,v,v,v,v,o,v,v,B.fl,v,new A.b9(A.n(14),B.a1),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.at,A.E(A.bH(D.fXB,v,new C.eTO(d),A.bn(B.ax,v,v,v,v,v,B.fl,v,new A.b9(A.n(14),B.a1),v,v,v)),1)],w),B.m,v,B.e,B.i,0,v,v)],w),B.m,v,B.e,B.O,0,B.p),v),v,v,v,v,B.da,v,new A.b9(s,B.a1),v)},
$S:49}
C.eTN.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eTO.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eTY.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.e7:B.c,i=A.n(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.h2,28)],x.V),g=k?D.ded:B.a5h,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.n(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aC,D.f7u,B.aw,new A.bL(B.a6,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cC,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.i,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a9(B.aA,B.aF,B.x,g,m,m),B.n),m,m,m,m,E.am9,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bo,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b7r(B.b8,B.jn,new C.eTV(v,d),l,"Camera import","Scan QR"),1),B.at,A.E(v.b7r(B.cy,R.zk,new C.eTW(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.i,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bo,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.n(16)
r=B.ax.j(k?0.14:0.06)
q=A.n(16)
p=A.L(B.ax.j(0.28),B.r,1)
o=A.p(m,D.bVK,B.f,m,m,new A.o(B.ax.j(0.12),m,m,A.n(12),m,m,B.n),m,m,m,m,B.bU,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aQ:B.av,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bo,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.i,0,B.p),1)
return A.bm(!0,new A.D(B.wf,A.p(m,A.x(A.a([g,new A.D(B.am5,A.x(A.a([w,B.X,u,B.by,t,B.X,A.aI(!1,B.a3,!0,m,A.aO(!1,s,!0,A.p(m,A.A(A.a([o,B.be,n,A.Y(B.eG,k?B.bv:B.bo,m,m,m,m)],f),B.m,m,B.e,B.i,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bE,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eTX(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)],f),B.E,m,B.e,B.i,0,B.p),m)],f),B.m,m,B.e,B.O,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:25}
C.eTV.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.w0("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eTW.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.w0("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eTX.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.Ol(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eTT.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.e7:B.c,m=A.n(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eY,24)],x.V),k=o?B.ee:B.bP
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.n(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.n(12)
v=this.c
u=o?B.bv:B.bo
u=A.bx(w,new A.a5(48,48,C.aRK(!0,A.n(12),48,P.OR,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aQ:B.av,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Bg(v.gxA())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.wf,A.p(q,A.x(A.a([B.X,k,new A.D(D.am2,A.A(A.a([u,B.be,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bv:B.bo,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.i,0,B.p),1)],s),B.m,q,B.e,B.i,0,q,q),q),B.BY,r.cpQ(B.uR,B.aY,new C.eTR(d),p,"QR code or backup file","Transfer project"),r.b4t(!0,B.ef,B.ax,new C.eTS(d),p,"Remove from this device","Delete project"),B.X],s),B.m,q,B.e,B.O,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:25}
C.eTR.prototype={
$0(){A.a6(this.a,!1).O("transfer")
return null},
$S:0}
C.eTS.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
C.eTU.prototype={
$1(d){return this.bnN(d)},
bnN(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.LX(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.we(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eUa.prototype={
$0(){var w=this.a
w.a.bv()
w.m(new C.eU9(w))},
$S:0}
C.eU9.prototype={
$0(){return this.a.r++},
$S:0}
C.eUb.prototype={
$0(){var w=this.a
return w.m(new C.eU8(w))},
$S:0}
C.eU8.prototype={
$0(){return this.a.r++},
$S:0}
C.eTM.prototype={
$0(){var w=this.a.c
w.toString
return A.iX(w,null)},
$S:0}
C.eTQ.prototype={
$0(){return this.a.cj6(this.b)},
$S:0}
C.eU6.prototype={
$0(){var w=this.a
return w.m(new C.eU5(w,this.b))},
$S:0}
C.eU5.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eU0.prototype={
$0(){return this.a.w0("scan")},
$S:0}
C.eU1.prototype={
$0(){return this.a.w0("file")},
$S:0}
C.eU2.prototype={
$1(d){return this.a.cpR(d,this.b)},
$S:z+72}
C.eU_.prototype={
$0(){return this.a.EW(this.b)},
$S:0}
C.eTZ.prototype={
$0(){return this.a.a0C(this.b,this.c)},
$S:0}
C.cFs.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cFr.prototype={
$1(d){return d.ak()},
$S:z+74}
C.cFp.prototype={
$1(d){return C.hJp(A.a3(d,x.N,x.z))},
$S:z+75}
C.cFq.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fEj.prototype={
$1(d){return d.y===D.kV},
$S:z+3}
C.h2y.prototype={
$1(d){return C.aQs(d,this.a)},
$S:z+3}
C.fBX.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bS4.prototype={
$1(d){return!d.as},
$S:z+1}
C.bS3.prototype={
$1(d){return d.ak()},
$S:z+23}
C.bS0.prototype={
$1(d){return C.hjj(A.a3(d,x.N,x.z))},
$S:z+24}
C.bS1.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bS2.prototype={
$1(d){return J.k(d)},
$S:17}
C.fsr.prototype={
$2(d,e){return e.e.aR(0,d.e)},
$S:z+25}
C.fod.prototype={
$1(d){return C.h97(A.a3(d,x.N,x.z))},
$S:z+79}
C.foe.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fof.prototype={
$2(d,e){return e.e.aR(0,d.e)},
$S:z+25}
C.fVk.prototype={
$1(d){return J.k(d)},
$S:17}
C.fVl.prototype={
$1(d){return d.a},
$S:z+81}
C.fVm.prototype={
$1(d){return d.length!==0},
$S:3}
C.fVn.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.fVo.prototype={
$1(d){return d.Tq(null).ak()},
$S:z+82}
C.h2w.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fEN.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fHT.prototype={
$1(d){return C.alL(A.a3(d,x.N,x.z))},
$S:z+9}
C.fHU.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fHV.prototype={
$2(d,e){return e.r.aR(0,d.r)},
$S:z+6}
C.fHW.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fHX.prototype={
$1(d){return C.uq(d,this.a)},
$S:z+3}
C.fV7.prototype={
$1(d){return C.uq(d,this.a)},
$S:z+3}
C.h2r.prototype={
$1(d){return C.alL(A.a3(d,x.N,x.z))},
$S:z+9}
C.h2s.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.h2t.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fEu.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fEv.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.h2C.prototype={
$1(d){return!d.as},
$S:z+1}
C.fDZ.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fE_.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fE0.prototype={
$2(d,e){return B.o.aR(d.Q,e.Q)},
$S:z+7}
C.h2_.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fII.prototype={
$1(d){return d.Q},
$S:z+15}
C.fV0.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fHQ.prototype={
$1(d){return C.alL(A.a3(d,x.N,x.z))},
$S:z+9}
C.fHR.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fHS.prototype={
$2(d,e){return e.r.aR(0,d.r)},
$S:z+6}
C.fUW.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.foM.prototype={
$1(d){return d.length!==0},
$S:3}
C.foN.prototype={
$1(d){return C.hjj(A.a3(d,x.N,x.z))},
$S:z+24}
C.foO.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.foP.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.foQ.prototype={
$1(d){return d.length!==0},
$S:3}
C.fp2.prototype={
$2(d,e){return d.eM(new C.fp3(e))},
$S:1976}
C.fp3.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.cc},
$S:1977}
C.fp_.prototype={
$1(d){return C.i50(d,this.a)},
$S:z+84}
C.fp0.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fp1.prototype={
$2(d,e){return e.r.aR(0,d.r)},
$S:z+6}
C.ft8.prototype={
$1(d){return d.a},
$S:z+56}
C.ft9.prototype={
$1(d){return d.length!==0},
$S:3}
C.fta.prototype={
$2(d,e){return e.r.aR(0,d.r)},
$S:z+6}
C.fw1.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fBc.prototype={
$1(d){return C.huL(d,C.Ha(d,this.a))},
$S:z+5}
C.fBd.prototype={
$1(d){return C.huM(d,C.Ha(d,this.a))},
$S:z+5};(function aliases(){var w=C.aBd.prototype
w.bvC=w.t
w=C.azr.prototype
w.bvx=w.t
w=C.aGD.prototype
w.bw_=w.t
w=C.aBe.prototype
w.bvD=w.t
w=C.aBg.prototype
w.bvE=w.t
w=C.aBh.prototype
w.bvF=w.t
w=C.aMM.prototype
w.byt=w.t
w=C.aOS.prototype
w.bAM=w.t
w=C.aOT.prototype
w.bAN=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aEd.prototype,"gcmL","cmM",28)
var r
w(r=C.aBc.prototype,"gcfG","cfH",65)
v(r,"gaOy","NT",0)
v(r,"gcv6","Bi",0)
v(r,"gbOg","Oz",0)
v(r,"gcJu","yY",0)
v(r,"gcoO","a1j",0)
v(r,"gbJG","Oh",0)
v(r,"gbOG","XL",0)
w(r,"gbTJ","bTK",78)
v(r,"gbE1","Ai",0)
v(C.aBf.prototype,"gcJq","FO",0)
v(r=C.alA.prototype,"gbrY","brZ",2)
v(r,"gbrQ","brR",2)
v(r,"gcKz","cKA",2)
u(r,"gqj","kM",0)
u(r=C.ajO.prototype,"geY","fX",2)
w(r,"gcbm","cbn",27)
u(C.auv.prototype,"gqj","kM",0)
v(r=C.ayt.prototype,"gcW8","cW9",2)
u(r,"gqj","kM",0)
u(C.aKp.prototype,"gbrW","brX",2)
v(C.alJ.prototype,"gBM","cKM",2)
u(r=C.alH.prototype,"gcLs","cLt",2)
u(r,"gqj","kM",0)
v(r=C.alD.prototype,"gbqO","bqP",2)
v(r,"gcQF","cQG",2)
u(r=C.alF.prototype,"geY","fX",2)
u(r,"giu","cK5",2)
v(r=C.alB.prototype,"gcJV","cJW",2)
u(r,"gbpG","jG",2)
v(r=C.aEM.prototype,"gagJ","wf",0)
v(r,"gcim","a0t",0)
v(r,"gaSJ","In",0)
v(r=C.aEJ.prototype,"gcFo","a3r",0)
v(r,"gagJ","wf",0)
v(r,"gct6","a1Y",0)
v(r,"gcih","b2I",2)
v(r,"gcjj","a0H",0)
w(r,"gcfA","cfB",35)
v(r,"gbOy","Is",0)
v(r,"gcGt","cGu",2)
v(r,"gc5y","Zs",0)
w(r,"gce4","ce5",36)
v(r,"gci5","ci6",2)
v(r=C.aDc.prototype,"gcbs","Qc",0)
v(r,"gcbu","cbv",2)
v(r,"gbLa","aau",0)
v(r=C.aEL.prototype,"gbS9","Yf",0)
v(r,"gc1G","YV",0)
v(r,"gczw","a2P",0)
v(r,"gcvG","a2q",0)
v(C.aEK.prototype,"gcvp","aix",0)
v(C.atH.prototype,"gce2","a04",0)
v(C.azX.prototype,"ga3a","KE",2)
v(C.azW.prototype,"ga3a","KE",2)
v(C.ayG.prototype,"ga3a","KE",2)
v(r=C.aGe.prototype,"gb3S","Ra",0)
v(r,"gbCQ","Wo",0)
v(r,"gcj7","cj8",2)
w(C.aGd.prototype,"gceV","ceW",69)
t(C.aGf.prototype,"gaSE",0,0,null,["$1","$0"],["Im","bMs"],70,0,0)
s(C,"hCn","ieZ",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aF,[C.api,C.uI,C.nr,C.Ii,C.afu,C.KE,C.uJ,C.bSA,C.ta,C.boD,C.alS,C.adC,C.lo,C.bRb,C.atT,C.zu,C.aku,C.MC,C.ba6,C.a9H,C.bhm,C.afB,C.azG,C.afp,C.aKp,C.KL,C.Gs,C.bgf,C.aKk,C.aqC,C.dgw,C.lS,C.aUK,C.aUJ,C.aSK,C.uc,C.rk,C.lA,C.hS,C.kR,C.aIi])
u(A.hu,[C.fMv,C.fMu,C.fMw,C.fW_,C.fzW,C.fzX,C.fA1,C.fKe,C.fKd,C.fKc,C.c7i,C.fWw,C.fWo,C.fWA,C.fEC,C.dP5,C.dP0,C.dP1,C.dOE,C.dOA,C.dPk,C.dPl,C.dPe,C.dPf,C.dPm,C.dPn,C.fFk,C.fHN,C.fHO,C.fV5,C.h2q,C.fEt,C.fVE,C.dfJ,C.df5,C.dfe,C.dfv,C.dfa,C.dfg,C.df7,C.dfk,C.dfl,C.dfj,C.dfA,C.dfz,C.dhv,C.dhw,C.dhx,C.dfX,C.dg1,C.dg0,C.cOq,C.cOs,C.d6Z,C.d7n,C.d7o,C.d7r,C.d7t,C.d7u,C.d7v,C.d7x,C.d7y,C.bQW,C.bQQ,C.fsQ,C.h2j,C.h2k,C.h2l,C.h2g,C.h2m,C.h2n,C.h2o,C.h2f,C.fFU,C.fU6,C.fBY,C.fIH,C.bM_,C.h2I,C.fUC,C.bKe,C.bK9,C.bKb,C.bKa,C.cps,C.cpn,C.cpo,C.cpm,C.cpk,C.cpp,C.cPu,C.cEs,C.cEv,C.cEt,C.cEw,C.cEx,C.f5B,C.ffK,C.bRI,C.bRC,C.bRG,C.bRj,C.e0v,C.e0s,C.e0t,C.e0r,C.e0x,C.bRA,C.bRq,C.bRa,C.bR9,C.bR5,C.bR6,C.bR7,C.bR8,C.e2a,C.e1A,C.e1v,C.e0X,C.e1c,C.e1f,C.e1b,C.e1a,C.e1r,C.e1s,C.e1m,C.e0L,C.e1D,C.e1x,C.e0N,C.e0O,C.e0P,C.e0U,C.e0S,C.e0R,C.e16,C.e17,C.e11,C.e1K,C.e1G,C.dg7,C.dg8,C.fFo,C.fFp,C.fFq,C.fFm,C.fFn,C.fFt,C.fFu,C.fFv,C.fFr,C.fFs,C.dgr,C.dgh,C.dgc,C.dgm,C.dgn,C.dgq,C.dge,C.dgt,C.dgu,C.dgv,C.flk,C.eWu,C.dwj,C.dwt,C.dwu,C.dwv,C.dwy,C.dwx,C.dwz,C.dwE,C.dwF,C.cep,C.ceo,C.cek,C.cel,C.cem,C.cen,C.ceu,C.cer,C.ces,C.e1X,C.e2_,C.e1Z,C.e25,C.e26,C.dOp,C.fW6,C.fVu,C.h1Z,C.fVy,C.fVx,C.d7M,C.d7N,C.d7I,C.cGf,C.cGh,C.cGi,C.cGa,C.cGj,C.fkQ,C.fTU,C.eTC,C.eTy,C.eTu,C.eTs,C.eTG,C.h1P,C.eTP,C.eTY,C.eTT,C.eTU,C.eU2,C.cFr,C.cFp,C.cFq,C.fEj,C.h2y,C.fBX,C.bS4,C.bS3,C.bS0,C.bS1,C.bS2,C.fod,C.foe,C.fVk,C.fVl,C.fVm,C.fVn,C.fVo,C.h2w,C.fEN,C.fHT,C.fHU,C.fHW,C.fHX,C.fV7,C.h2r,C.h2s,C.h2t,C.fEu,C.fEv,C.h2C,C.fDZ,C.fE_,C.h2_,C.fII,C.fV0,C.fHQ,C.fHR,C.fUW,C.foM,C.foN,C.foO,C.foP,C.foQ,C.fp3,C.fp_,C.fp0,C.ft8,C.ft9,C.fw1,C.fBc,C.fBd])
u(A.ax,[C.b_k,C.aly,C.aW4,C.Zz,C.bbS,C.Qv,C.a6e,C.tA,C.Ik,C.bgd,C.bk2,C.by_,C.bnl,C.adY,C.bk1,C.adX,C.bk0,C.aDd,C.aJm,C.adZ,C.Go,C.bge,C.add,C.bgc,C.bgh,C.b_i,C.atH,C.aej])
u(A.mg,[C.bcv,C.bdJ,C.bdA,C.aId,C.bj3,C.boC,C.aW9,C.bcx,C.aBb,C.bc0,C.bsE,C.bjb,C.biC,C.biJ,C.bgg,C.bfi,C.bl9,C.bxP])
u(A.iG,[C.fWt,C.fWu,C.fWv,C.fWm,C.fWn,C.fWy,C.fWz,C.dPh,C.dP3,C.dP6,C.dOL,C.dOM,C.dON,C.dOK,C.dOS,C.dOJ,C.dOT,C.dOU,C.dOI,C.dOV,C.dOH,C.dOW,C.dOG,C.dOX,C.dOy,C.dOz,C.dOF,C.dOY,C.dOD,C.dOZ,C.dOC,C.dOO,C.dOB,C.dOP,C.dOx,C.dOQ,C.dOR,C.dPi,C.dPj,C.dP7,C.dP8,C.dP9,C.dPa,C.dPb,C.dPc,C.dPd,C.dPp,C.dPg,C.fFl,C.df3,C.df1,C.df2,C.df4,C.dfI,C.dfx,C.dfu,C.df6,C.dfy,C.dfc,C.dfd,C.dff,C.dfw,C.dfb,C.dfh,C.dfF,C.dfr,C.dfq,C.dfs,C.dft,C.dfm,C.dfo,C.dfp,C.dfi,C.dfB,C.dfE,C.df8,C.df9,C.dhu,C.dht,C.dhs,C.dhr,C.dhy,C.dhq,C.dhz,C.dfY,C.dfZ,C.dg_,C.dg2,C.dfW,C.dfV,C.cOr,C.d6Y,C.d7a,C.d79,C.d7p,C.d78,C.d7q,C.d77,C.d76,C.d7s,C.d75,C.d7i,C.d7h,C.d7z,C.bQP,C.bQZ,C.bQR,C.bQS,C.bQV,C.bQU,C.bQX,C.bQY,C.bQT,C.bQN,C.bQO,C.bSs,C.bSt,C.bSu,C.bSv,C.bSw,C.bSx,C.bSy,C.h2i,C.fU7,C.bKd,C.bK8,C.bK6,C.bK7,C.bK5,C.cpu,C.cpv,C.cpt,C.cpw,C.cpy,C.cpz,C.cpA,C.cpq,C.cEr,C.cEA,C.cEB,C.cEC,C.cEz,C.cED,C.cEE,C.cEF,C.cEG,C.cEu,C.cEy,C.bRY,C.bRX,C.bRV,C.bRT,C.bRU,C.bRQ,C.bRR,C.bRS,C.bRW,C.bRP,C.f5C,C.f5D,C.f5E,C.f5F,C.f5G,C.bRM,C.bRN,C.bRO,C.bRH,C.bRJ,C.bRK,C.bRL,C.bRD,C.bRn,C.bRm,C.bRl,C.bRf,C.bRg,C.bRk,C.bRh,C.bRi,C.bRe,C.e0u,C.e0w,C.e0p,C.e0q,C.e0o,C.e0y,C.e0z,C.e0A,C.e0D,C.e0E,C.e0F,C.e0G,C.e0H,C.e0I,C.e0J,C.e0K,C.e0B,C.e0C,C.bRz,C.bRy,C.bRp,C.bRo,C.bRv,C.bRw,C.bRs,C.bRt,C.bRu,C.bRr,C.bR_,C.bR0,C.bR4,C.bR3,C.bR2,C.bR1,C.e29,C.e28,C.e2b,C.e2c,C.e2d,C.e27,C.e2f,C.e2e,C.e1y,C.e1z,C.e1B,C.e0Y,C.e1e,C.e1d,C.e1g,C.e1u,C.e19,C.e1k,C.e1l,C.e1j,C.e1h,C.e1i,C.e1n,C.e1o,C.e1p,C.e1t,C.e0M,C.e1w,C.e0Q,C.e0T,C.e0V,C.e1C,C.e10,C.e0Z,C.e12,C.e13,C.e1_,C.e14,C.e18,C.e1L,C.e1M,C.e1E,C.e1H,C.e1I,C.e1J,C.e1O,C.e1F,C.e0W,C.dg6,C.dg5,C.dga,C.dgk,C.dgb,C.eWt,C.dwk,C.dwh,C.dwi,C.dws,C.dwr,C.dwq,C.dwA,C.dwp,C.dwB,C.dwo,C.dwC,C.dwn,C.dwD,C.dwm,C.dwl,C.dww,C.dwG,C.dwP,C.e1Y,C.e21,C.e22,C.e1U,C.e1V,C.e1W,C.e20,C.e24,C.e23,C.e1P,C.e1Q,C.e1R,C.e1S,C.e1T,C.dOq,C.fW3,C.cnM,C.d7L,C.d7K,C.d7O,C.d7H,C.d7J,C.cG7,C.cGd,C.cGe,C.cGc,C.cGg,C.cGb,C.cG8,C.cG9,C.cGk,C.fkR,C.fkS,C.eTE,C.eTv,C.eTw,C.eTx,C.eTz,C.eTA,C.eTD,C.eTq,C.eTt,C.eTF,C.eTr,C.eTI,C.eTJ,C.eTK,C.eTL,C.eTH,C.eTl,C.eTm,C.eTn,C.eTp,C.eTo,C.eU3,C.eU4,C.eTN,C.eTO,C.eTV,C.eTW,C.eTX,C.eTR,C.eTS,C.eUa,C.eU9,C.eUb,C.eU8,C.eTM,C.eTQ,C.eU6,C.eU5,C.eU0,C.eU1,C.eU_,C.eTZ])
u(A.af,[C.apu,C.TK,C.a_h,C.a_l,C.a_j,C.ZS,C.alz,C.ajN,C.auu,C.ays,C.alI,C.alG,C.alC,C.W4,C.alE,C.TL,C.aqF,C.aqz,C.a_W,C.aqD,C.a0f,C.a0g,C.a71,C.ZU,C.ZT,C.Zq,C.a22,C.Gc,C.ayz,C.atG,C.atA,C.atF,C.OO])
u(A.ah,[C.aEd,C.bg7,C.aBc,C.bgw,C.aBf,C.bdH,C.aBd,C.azr,C.aGD,C.ayt,C.aBh,C.aBg,C.aBe,C.blt,C.alF,C.alB,C.aEM,C.aEJ,C.aDc,C.aEL,C.aEK,C.blu,C.aMM,C.azX,C.azW,C.ayG,C.bxS,C.aOS,C.aOT,C.aGe,C.bmR,C.aGd,C.bzD])
u(A.jt,[C.dP2,C.dP4,C.dP_,C.dPo,C.fHP,C.bQM,C.dfH,C.dfG,C.dfn,C.dfC,C.dfD,C.dg3,C.bSz,C.bSr,C.bRc,C.bRd,C.h2h,C.h2H,C.bKc,C.cpx,C.cpr,C.cpl,C.f5H,C.bRB,C.bRE,C.bRF,C.dqF,C.bRx,C.e1q,C.e15,C.e1N,C.dgj,C.dgi,C.dgg,C.dgl,C.dgo,C.dgp,C.dg9,C.dgd,C.dgf,C.dgs,C.cei,C.ceq,C.cev,C.dOr,C.fW5,C.fW4,C.fkO,C.fkP,C.eTB,C.eU7,C.cFs,C.fsr,C.fof,C.fHV,C.fE0,C.fHS,C.fp2,C.fp1,C.fta])
u(A.lB,[C.a1y,C.afD,C.a1R,C.a_J,C.acg,C.aL6,C.Ij,C.alK,C.cFt,C.cFu])
t(C.alA,C.aBd)
t(C.ajO,C.azr)
t(C.auv,C.aGD)
t(C.bgb,C.aBh)
t(C.alJ,C.bgb)
t(C.bga,C.aBg)
t(C.alH,C.bga)
t(C.bg9,C.aBe)
t(C.alD,C.bg9)
t(C.bla,C.aMM)
t(C.bxQ,C.aOS)
t(C.bxR,C.aOT)
t(C.aGf,C.bzD)
t(C.baj,A.ba7)
t(C.bxT,A.a6H)
t(C.bai,C.bxT)
w(C.aBd,A.cd)
w(C.azr,A.cd)
w(C.aGD,A.eO)
w(C.aBe,A.cd)
v(C.bg9,C.afp)
w(C.aBg,A.cd)
v(C.bga,C.afp)
w(C.aBh,A.cd)
v(C.bgb,C.afp)
w(C.aMM,A.eO)
w(C.aOS,A.cd)
w(C.aOT,A.cd)
v(C.bzD,A.eA)
v(C.bxT,A.jc)})()
A.j0(b.typeUniverse,JSON.parse('{"b_k":{"ax":[],"v":[]},"bcv":{"aC":[]},"apu":{"af":[],"v":[]},"aEd":{"ah":["apu"]},"TK":{"af":[],"v":[]},"aly":{"ax":[],"v":[]},"aW4":{"ax":[],"v":[]},"bg7":{"ah":["TK"]},"a_h":{"af":[],"v":[]},"a_l":{"af":[],"v":[]},"a_j":{"af":[],"v":[]},"ZS":{"af":[],"v":[]},"aBc":{"ah":["a_h"]},"bgw":{"ah":["a_l"]},"aBf":{"ah":["a_j"]},"Zz":{"ax":[],"v":[]},"bdJ":{"aC":[]},"bdA":{"aC":[]},"bdH":{"ah":["ZS"]},"aId":{"aC":[]},"bj3":{"aC":[]},"bbS":{"ax":[],"v":[]},"alz":{"af":[],"v":[]},"alA":{"ah":["alz"]},"boC":{"aC":[]},"aW9":{"aC":[]},"ajN":{"af":[],"v":[]},"auu":{"af":[],"v":[]},"ays":{"af":[],"v":[]},"ajO":{"ah":["ajN"]},"bcx":{"aC":[]},"Qv":{"ax":[],"v":[]},"aBb":{"aC":[]},"auv":{"ah":["auu"]},"bc0":{"aC":[]},"ayt":{"ah":["ays"]},"alI":{"af":[],"v":[]},"alG":{"af":[],"v":[]},"alC":{"af":[],"v":[]},"alJ":{"ah":["alI"]},"bsE":{"aC":[]},"alH":{"ah":["alG"]},"bjb":{"aC":[]},"alD":{"ah":["alC"]},"biC":{"aC":[]},"W4":{"af":[],"v":[]},"alE":{"af":[],"v":[]},"TL":{"af":[],"v":[]},"a6e":{"ax":[],"v":[]},"biJ":{"aC":[]},"tA":{"ax":[],"v":[]},"Ik":{"ax":[],"v":[]},"blt":{"ah":["W4"]},"alF":{"ah":["alE"]},"alB":{"ah":["TL"]},"aqF":{"af":[],"v":[]},"aqz":{"af":[],"v":[]},"a_W":{"af":[],"v":[]},"adZ":{"ax":[],"v":[]},"aEM":{"ah":["aqF"]},"aEJ":{"ah":["aqz"]},"bgd":{"ax":[],"v":[]},"bgg":{"aC":[]},"bk2":{"ax":[],"v":[]},"bfi":{"aC":[]},"by_":{"ax":[],"v":[]},"bnl":{"ax":[],"v":[]},"aDc":{"ah":["a_W"]},"adY":{"ax":[],"v":[]},"bk1":{"ax":[],"v":[]},"adX":{"ax":[],"v":[]},"bk0":{"ax":[],"v":[]},"aDd":{"ax":[],"v":[]},"aJm":{"ax":[],"v":[]},"Go":{"ax":[],"v":[]},"aqD":{"af":[],"v":[]},"a0f":{"af":[],"v":[]},"a0g":{"af":[],"v":[]},"aEL":{"ah":["aqD"]},"bge":{"ax":[],"v":[]},"add":{"ax":[],"v":[]},"bgc":{"ax":[],"v":[]},"bgh":{"ax":[],"v":[]},"aEK":{"ah":["a0f"]},"blu":{"ah":["a0g"]},"b_i":{"ax":[],"v":[]},"a71":{"af":[],"v":[]},"bla":{"ah":["a71"]},"bl9":{"aC":[]},"atH":{"ax":[],"v":[]},"ZU":{"af":[],"v":[]},"ZT":{"af":[],"v":[]},"Zq":{"af":[],"v":[]},"a22":{"af":[],"v":[]},"azX":{"ah":["ZU"]},"azW":{"ah":["ZT"]},"ayG":{"ah":["Zq"]},"bxS":{"ah":["a22"]},"Gc":{"af":[],"v":[]},"ayz":{"af":[],"v":[]},"bxQ":{"ah":["Gc"]},"bxR":{"ah":["ayz"]},"bxP":{"aC":[]},"atG":{"af":[],"v":[]},"aGe":{"ah":["atG"]},"aej":{"ax":[],"v":[]},"atA":{"af":[],"v":[]},"atF":{"af":[],"v":[]},"bmR":{"ah":["atA"]},"aGd":{"ah":["atF"]},"OO":{"af":[],"v":[]},"aGf":{"ah":["OO"],"eA":[]},"bai":{"jc":[],"fi":[]}}'))
A.Da(b.typeUniverse,JSON.parse('{"afp":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.as
return{e2:w("aSK"),cq:w("mc"),Q:w("rk"),r:w("bv<m,m>"),c5:w("aUJ"),dY:w("aUK"),fH:w("MC"),de:w("aku"),dN:w("MK<F>"),gc:w("Ee<F>"),A:w("eF<m?>"),e:w("Ii"),B:w("nr"),P:w("hS"),df:w("lo"),k:w("kR"),x:w("aB<~>"),U:w("O<SH>"),V:w("O<ac>"),C:w("O<rk>"),O:w("O<u>"),c:w("O<MC>"),b:w("O<aku>"),ac:w("O<eF<m?>>"),I:w("O<nr>"),u:w("O<hS>"),J:w("O<lo>"),_:w("O<kR>"),cl:w("O<aB<ai<a8<m,@>>>>"),R:w("O<nu>"),eU:w("O<ai<+(H,H)>>"),ez:w("O<a8<m,aF>>"),gE:w("O<a8<m,m>>"),Y:w("O<a8<m,@>>"),fD:w("O<mL>"),bp:w("O<oC>"),g:w("O<q>"),ar:w("O<atT>"),v:w("O<fT>"),gy:w("O<a9H>"),L:w("O<+(m,m)>"),G:w("O<+(H,H)>"),E:w("O<+(H,~())>"),bd:w("O<+(m,F,P)>"),bF:w("O<+count,id,name(F,m,m)>"),F:w("O<cT>"),s:w("O<m>"),cF:w("O<au>"),aS:w("O<j_>"),dT:w("O<ba6>"),p:w("O<v>"),Z:w("O<fi>"),D:w("O<lA>"),h:w("O<azG>"),cC:w("O<bhm>"),fp:w("O<KE>"),M:w("O<KL>"),gZ:w("O<aIi>"),gA:w("O<afu>"),e4:w("O<afB>"),dE:w("O<aKk>"),f7:w("O<P>"),n:w("O<H>"),t:w("O<F>"),dS:w("O<aC?>"),d4:w("O<m?>"),eF:w("cw<ah<af>>"),d:w("ai<nr>"),do:w("ai<hS>"),cg:w("ai<lo>"),ax:w("ai<kR>"),fO:w("ai<a8<m,@>>"),cz:w("ai<+(m,m)>"),bC:w("ai<+count,id,name(F,m,m)>"),dy:w("ai<m>"),er:w("ai<au>"),gk:w("ai<lA>"),j:w("ai<@>"),fK:w("bA<m,m>"),d2:w("bA<m,ai<a8<m,@>>>"),a:w("a8<m,@>"),f:w("a8<@,@>"),gv:w("N<m,Il>"),cM:w("N<F,m>"),w:w("iA"),g2:w("rI"),bV:w("api"),fL:w("ct"),K:w("aF"),dc:w("fT"),fo:w("P9<F>"),fz:w("+(m,m)"),ei:w("+scope,text(m,m)"),bn:w("+games,limit(P,F)"),d9:w("+dx,hidden(H,ai<hS>)"),cs:w("+count,id,name(F,m,m)"),N:w("m"),fT:w("it<hS>"),ec:w("it<m>"),gW:w("r0<H>"),X:w("bp<H>"),bW:w("dJ"),W:w("bP<m>"),b4:w("bP<F>"),cI:w("k_<m>"),av:w("X<zu>"),cc:w("X<m>"),l:w("v"),gF:w("fi"),fA:w("lA"),dO:w("Gs"),bw:w("adX<m?>"),cy:w("KN"),q:w("mu"),y:w("P"),i:w("H"),z:w("@"),S:w("F"),eK:w("ai<kR>?"),m:w("aqC?"),cT:w("q?"),h5:w("+(m,m)?"),eo:w("+code,qrPayload,usesRemaining(m,m,F)?"),he:w("+qrPayload,token,usesRemaining(m,m,F)?"),gG:w("+members,trees,viewOnly(F,F,P)?"),az:w("qf?"),T:w("m?"),aD:w("dJ?"),o:w("lA?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b3T=new A.bg(B.fI,B.bI,B.fI,B.bI)
D.adw=new A.bg(B.fI,B.ii,B.fI,B.ii)
D.b46=new A.bg(B.ij,B.bI,B.bI,B.bI)
D.b4a=new A.ay(B.cS,1.4,B.r,-1)
D.b4k=new A.ay(B.ad,1,B.r,-1)
D.ae0=new A.aZ(140,1/0,0,1/0)
D.b5J=new A.aZ(0,1/0,64,1/0)
D.b5N=new A.aZ(0,84,0,1/0)
D.ae8=new A.aZ(130,1/0,0,1/0)
D.aCg=w([B.m5,B.rC,B.c],x.O)
D.c6C=new A.a9(B.aA,B.aF,B.x,D.aCg,null,null)
D.b6w=new A.o(null,null,null,null,null,D.c6C,B.n)
D.ddF=w([B.aY,B.bQ],x.O)
D.c8K=new A.a9(B.b1,B.b7,B.x,D.ddF,null,null)
D.b6R=new A.o(null,null,null,null,null,D.c8K,B.n)
D.Y1=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fw=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dhz=w([B.dx,D.Y1,D.fw],x.O)
D.c5O=new A.a9(B.b1,B.b7,B.x,D.dhz,null,null)
D.b7B=new A.o(null,null,null,null,null,D.c5O,B.n)
D.fp5=new A.G(!0,B.bV,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_6=new A.B("?",null,D.fp5,null,null,null,null,null,null,null,null,null)
D.bbf=new A.cc(B.A,null,null,D.h_6,null)
D.VI=new A.G(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIe=new A.B("\ud83c\udf33",null,D.VI,null,null,null,null,null,null,null,null,null)
D.aeS=new A.cc(B.A,null,null,D.fIe,null)
D.fKR=new A.B("\ud83c\udfc6",null,At.Ku,null,null,null,null,null,null,null,null,null)
D.bbq=new A.cc(B.A,null,null,D.fKR,null)
D.bdh=new A.fk(null,null,null,null,null,E.kn,null,null,null,null)
D.aeU=new A.cc(B.A,null,null,D.bdh,null)
D.kM=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fpE=new A.G(!0,D.kM,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJV=new A.B("No books on the shelf yet.",null,D.fpE,null,null,null,null,null,null,null,null,null)
D.eqg=new A.D(B.nC,D.fJV,null)
D.bbG=new A.cc(B.A,null,null,D.eqg,null)
D.fwA=new A.G(!0,D.fw,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h01=new A.B("\ud83d\ude8c  On the road\u2026",null,D.fwA,null,null,null,null,null,null,null,null,null)
D.eqR=new A.D(B.cl,D.h01,null)
D.bc8=new A.cc(B.A,null,null,D.eqR,null)
D.aW5=new A.B("\ud83e\uddfa",null,D.VI,null,null,null,null,null,null,null,null,null)
D.bco=new A.cc(B.A,null,null,D.aW5,null)
D.fNj=new A.B("\ud83c\udfad",null,D.VI,null,null,null,null,null,null,null,null,null)
D.bcA=new A.cc(B.A,null,null,D.fNj,null)
D.bcD=new A.cc(B.A,null,null,A9.XQ,null)
D.afe=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.afk=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.beQ=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.beV=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bf6=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bf8=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bfa=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bfi=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lB=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bfm=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bfr=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bfs=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bft=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lC=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bg3=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.Br=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bgc=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bgw=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bgz=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bgF=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bgN=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.afX=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bgU=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.Yd=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.ag_=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bh5=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.Yf=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bhr=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.agb=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bhP=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bi4=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bis=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.biC=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.FI=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.biY=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bj_=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bj3=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.agB=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bjm=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bjs=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bjy=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.agF=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bjG=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bk7=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bkf=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bkh=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bkm=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.agV=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bkZ=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.ahh=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.blV=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.ahu=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bmj=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.FW=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bmp=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bmz=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bmB=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.ahz=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bmT=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bmU=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bmX=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.ahG=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.YW=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bng=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bnB=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bnG=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.ahT=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bnN=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.Z1=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bo5=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bo6=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.G2=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.boR=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bpu=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bpA=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bpE=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qe=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bpO=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bpS=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bpY=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bq_=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.aiC=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.aiG=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.G8=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.Zj=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.aiQ=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.br7=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.brq=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.brR=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bs_=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.aje=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.Zs=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bs8=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bsp=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.Zx=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bsD=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bsT=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.ZB=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bsY=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.ajw=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.ajy=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.btg=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.ajE=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.btI=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.btM=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.btS=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.btY=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bu5=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.buD=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bv7=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fE8=new A.B("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.byE=new A.eF(null,D.fE8,B.fa,null,x.A)
D.fNa=new A.B("None",null,null,null,null,null,null,null,null,null,null,null)
D.byG=new A.eF(null,D.fNa,B.fa,null,x.A)
D.akz=new A.bd(3e4)
D.bzd=new A.bd(38e5)
D.bzY=new A.ii(0,10,0,10)
D.bA6=new A.Q(0,1,0,0)
D.bAh=new A.ii(0,4,0,4)
D.bAk=new A.Q(0,4,5,0)
D.bAB=new A.Q(10,10,14,10)
D.bAN=new A.ii(10,4,10,4)
D.bAV=new A.ii(10,8,10,8)
D.bAW=new A.Q(10,8,8,8)
D.bBo=new A.Q(12,6,12,2)
D.bBE=new A.Q(14,0,14,6)
D.bBI=new A.Q(14,10,6,6)
D.bBJ=new A.Q(14,12,14,0)
D.bBN=new A.Q(14,12,14,8)
D.bBQ=new A.Q(14,12,8,14)
D.bBU=new A.ii(14,14,14,14)
D.bCa=new A.Q(14,6,14,40)
D.bCd=new A.Q(14,8,14,30)
D.bCB=new A.Q(16,2,16,10)
D.bCL=new A.Q(16,6,16,30)
D.bCN=new A.Q(16,6,16,8)
D.bD0=new A.Q(18,10,18,4)
D.bD2=new A.Q(18,12,18,0)
D.bD9=new A.Q(18,14,12,4)
D.am2=new A.Q(18,16,18,8)
D.bDq=new A.Q(18,20,18,22)
D.am6=new A.Q(18,24,18,24)
D.bDw=new A.Q(18,30,18,30)
D.bDO=new A.Q(20,10,12,20)
D.bDR=new A.Q(20,11,20,11)
D.bE1=new A.Q(20,18,16,18)
D.bE3=new A.Q(20,18,20,6)
D.bET=new A.Q(24,32,24,28)
D.bEU=new A.Q(24,36,24,32)
D.bEY=new A.Q(26,26,24,14)
D.bFc=new A.Q(2,4,2,8)
D.bFg=new A.Q(30,0,30,0)
D.bFr=new A.Q(38,22,22,22)
D.amq=new A.Q(40,24,24,24)
D.bFt=new A.ii(40,40,40,40)
D.bFv=new A.Q(46,30,30,30)
D.amt=new A.Q(4,0,0,8)
D.bFW=new A.Q(56,40,40,40)
D.bG_=new A.Q(1.25,1.25,1.25,1.25)
D.bG0=new A.Q(60,0,60,0)
D.bG4=new A.Q(6,14,6,16)
D.bG8=new A.Q(6,4,12,0)
D.bGc=new A.Q(6,6,10,2)
D.bGj=new A.ii(7,3,7,3)
D.bGS=new A.Q(5,1.5,5,1.5)
D.bH2=new A.Q(6,2.5,6,2.5)
D.fVh=new A.B("Family Games",null,B.kh,null,null,null,null,null,null,null,null,null)
D.fCK=new A.B("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,I.aaS,null,null,null,null,null,null,null,null,null)
D.cHG=w([D.fVh,D.fCK],x.p)
D.bw9=new A.fj(B.ai,B.e,B.i,B.E,null,B.p,null,0,D.cHG,null)
D.bHt=new A.by(1,B.bc,D.bw9,null)
D.fZD=new A.B("Signature",null,B.na,null,null,null,null,null,null,null,null,null)
D.bHw=new A.by(1,B.bc,D.fZD,null)
D.fRT=new A.B("MADE BY THE ONE WHO PLANTED THE TREE",null,T.ty,null,null,null,null,null,null,null,null,null)
D.bI4=new A.by(1,B.bc,D.fRT,null)
D.fWK=new A.B("Tell the AI what to fix",null,B.dg,null,null,null,null,null,null,null,null,null)
D.bIl=new A.by(1,B.bc,D.fWK,null)
D.fxm=new A.G(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYI=new A.B("Worksheets",null,D.fxm,null,null,null,null,null,null,null,null,null)
D.fxx=new A.G(!0,E.afG,null,null,null,null,13,B.cC,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXz=new A.B("Track your project spending",null,D.fxx,null,null,null,null,null,null,null,null,null)
D.d58=w([D.fYI,B.aw,D.fXz],x.p)
D.bvM=new A.fj(B.ai,B.e,B.i,B.E,null,B.p,null,0,D.d58,null)
D.bIr=new A.by(1,B.bc,D.bvM,null)
D.fsn=new A.G(!0,E.kn,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDj=new A.B("FAMILY LIBRARY",null,D.fsn,null,null,null,null,null,null,null,null,null)
D.bIJ=new A.by(1,B.bc,D.fDj,null)
D.Ot=new C.Ii("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.wm=new C.Ij(0,"male")
D.op=new C.Ij(1,"female")
D.yS=new C.Ij(2,"unknown")
D.uw=new C.alK(0,"owner")
D.Ou=new C.alK(1,"editor")
D.kV=new C.alK(2,"viewer")
D.aol=new A.a0(61199,"MaterialIcons",!1)
D.bO_=new A.a0(61504,"MaterialIcons",!1)
D.bO0=new A.a0(61505,"MaterialIcons",!1)
D.bO2=new A.a0(61587,"MaterialIcons",!1)
D.bO9=new A.a0(61890,"MaterialIcons",!1)
D.bP1=new A.a0(63034,"MaterialIcons",!0)
D.bPj=new A.a0(63153,"MaterialIcons",!1)
D.bPQ=new A.a0(63429,"MaterialIcons",!1)
D.aqt=new A.a0(984520,"MaterialIcons",!1)
D.bOy=new A.a0(62776,"MaterialIcons",!1)
D.bSb=new A.ae(D.bOy,26,B.b2,null,null,null)
D.bMY=new A.a0(57648,"MaterialIcons",!1)
D.bSv=new A.ae(D.bMY,14,B.c,null,null,null)
D.bSM=new A.ae(B.Hg,17,null,null,null,null)
D.bSS=new A.ae(B.a20,null,B.bQ,null,null,null)
D.bTj=new A.ae(E.a26,null,null,null,null,null)
D.bTm=new A.ae(B.j2,18,E.kn,null,null,null)
D.a1R=new A.a0(62044,"MaterialIcons",!1)
D.bTr=new A.ae(D.a1R,null,B.aY,null,null,null)
D.bTy=new A.ae(B.z4,18,B.c,null,null,null)
D.bUg=new A.ae(B.e8,16,null,null,null,null)
D.bUn=new A.ae(D.a1R,32,B.aY,null,null,null)
D.bUG=new A.ae(E.aom,18,B.cS,null,null,null)
D.bVK=new A.ae(B.Hq,22,B.ax,null,null,null)
D.bVW=new A.ae(B.e8,22,B.b2,null,null,null)
D.bW8=new A.ae(Z.a1W,22,B.c,null,null,null)
D.bWe=new A.ae(B.uH,52,B.c,null,null,null)
D.bWo=new A.ae(B.Hq,30,B.ax,null,null,null)
D.bWH=new A.ae(B.a2c,null,B.c,null,null,null)
D.ara=new A.ae(B.uR,22,B.c,null,null,null)
D.bWQ=new A.ae(B.e8,17,null,null,null,null)
D.bXc=new A.ae(B.wC,26,B.cS,null,null,null)
D.bXY=new A.ae(B.a2k,16,null,null,null,null)
D.bYJ=new A.ae(B.uH,24,B.c,null,null,null)
D.bYO=new A.ae(B.OX,20,B.t7,null,null,null)
D.bYT=new A.ae(B.He,null,B.bQ,null,null,null)
D.bZ0=new A.ae(B.j2,18,B.c,null,null,null)
D.bZG=new A.ae(B.cz,22,B.ad,null,null,null)
D.c_w=new A.ae(B.ef,16,B.ad,null,null,null)
D.c_I=new A.ae(D.a1R,20,B.aY,null,null,null)
D.arA=new A.ae(B.hF,20,null,null,null,null)
D.c0c=new A.ae(B.cz,18,D.kM,null,null,null)
D.c0t=new A.ae(B.zb,28,B.c,null,null,null)
D.c0D=new A.ae(B.ON,null,B.ff,null,null,null)
D.c0X=new A.ae(B.zb,24,B.c,null,null,null)
D.c1o=new A.ae(B.uH,null,B.aY,null,null,null)
D.c1p=new A.ae(B.k3,20,B.cS,null,null,null)
D.c1J=new A.ae(B.Hg,16,null,null,null,null)
D.c3i=new A.e5(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.k_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eH,!0,null,null,null,null)
D.ash=new C.a6e(10,null)
D.c3O=new C.a6e(12,null)
D.c3P=new C.a6e(14,null)
D.dlD=w([B.bw,B.aY,B.fn,B.b2],x.O)
D.c5_=new A.a9(B.aA,B.aF,B.x,D.dlD,null,null)
D.boD=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.buJ=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d1E=w([D.boD,D.buJ],x.O)
D.c5a=new A.a9(B.b1,B.b7,B.x,D.d1E,null,null)
D.dfD=w([B.fc,B.fP,B.fn],x.O)
D.c5g=new A.a9(B.aA,B.aF,B.x,D.dfD,null,null)
D.air=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bfu=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d3R=w([D.air,D.bfu],x.O)
D.c5P=new A.a9(B.b1,B.b7,B.x,D.d3R,null,null)
D.bjc=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aBx=w([D.bjc,D.air],x.O)
D.c68=new A.a9(B.aA,B.aF,B.x,D.aBx,null,null)
D.aha=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.blM=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.deI=w([D.aha,D.blM],x.O)
D.c6N=new A.a9(B.a6,B.a9,B.x,D.deI,null,null)
D.dsB=w([B.bC,B.np],x.O)
D.c6P=new A.a9(B.b1,B.b7,B.x,D.dsB,null,null)
D.boy=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dtx=w([D.boy,D.kM,D.kM,K.MY],x.O)
D.dw2=w([0,0.07,0.9,1],x.n)
D.c7k=new A.a9(B.a6,B.a9,B.x,D.dtx,D.dw2,null)
D.c7u=new A.a9(B.aA,B.aF,B.x,B.SC,null,null)
D.d_t=w([B.aE,D.lB],x.O)
D.c7x=new A.a9(B.a6,B.a9,B.x,D.d_t,null,null)
D.dsa=w([B.b2,B.aY,B.bQ],x.O)
D.c8v=new A.a9(B.aA,B.aF,B.x,D.dsa,null,null)
D.ccL=w([10,20,30],x.t)
D.cmH=w([-1,-0.4,0.3,1],x.n)
D.cub=w([B.bw,B.b2,B.fc],x.O)
D.cuj=w([B.bt,B.aE,B.jx],x.O)
D.cul=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cv2=w([30,140,262,360],x.n)
D.bn2=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cAz=w([D.bn2,E.ai2],x.O)
D.ekP=new A.q(1,2)
D.fav=new A.cT(B.aT,D.ekP,3)
D.ayp=w([D.fav],x.F)
D.cHY=w([B.hk,B.ch,B.fj],x.O)
D.cKI=w([B.bM,B.bu,B.bp],x.O)
D.bJz=new C.uI("classic","Classic leather","Gold-edged brown leather",D.aBx,E.kn,E.kn,"\u2766",B.K,!0,!1,!1,!1)
D.beA=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bty=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.d6R=w([D.beA,D.bty],x.O)
D.ai6=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bJu=new C.uI("ornate","Ornate gold","Double gold border and flourishes",D.d6R,D.ai6,D.ai6,"\u2726",B.K,!0,!0,!0,!1)
D.biM=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bpp=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.cZm=w([D.biM,D.bpp],x.O)
D.bJt=new C.uI("parchment","Parchment","Old paper with dark ink",D.cZm,D.G2,L.iY,"\u2767",B.K,!0,!1,!1,!0)
D.afm=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.brN=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dqp=w([D.afm,D.brN],x.O)
D.bmw=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.br2=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bJw=new C.uI("minimal","Clean paper","Plain and elegant, like a printed book",D.dqp,D.bmw,D.br2,"",B.K,!0,!0,!1,!0)
D.bJy=new C.uI("midnight","Midnight","Deep blue with silver stars",I.aBR,B.cr,B.bO,"\u2727",B.K,!0,!0,!1,!1)
D.bJs=new C.uI("emerald","Emerald library","Green cloth, title on the left",W.ayO,E.kn,B.fY,"\u25c6",B.bk,!0,!1,!1,!1)
D.bsh=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dop=w([B.eo,D.bsh],x.O)
D.bnM=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.boY=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bJx=new C.uI("rose","Rose vintage","Burgundy with rose-gold lettering",D.dop,D.bnM,D.boY,"\u2740",B.K,!0,!1,!0,!1)
D.dt8=w([B.cs,F.nq],x.O)
D.bJv=new C.uI("modern","Modern","Dark, bold, left-aligned",D.dt8,B.aJ,B.c,"",B.bk,!1,!0,!1,!1)
D.a4q=w([D.bJz,D.bJu,D.bJt,D.bJw,D.bJy,D.bJs,D.bJx,D.bJv],A.as("O<uI>"))
D.cNG=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dsW=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bJK=new C.lo('What does "Ubuntu" mean?',D.dsW,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d08=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bJN=new C.lo("In Swahili, what do we call a grandmother?",D.d08,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d0_=w(["Babu","Mama","Baba","Dada"],x.s)
D.bJI=new C.lo("In Swahili, what do we call a grandfather?",D.d0_,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d1e=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bJM=new C.lo("What is a sister called in Swahili?",D.d1e,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.d6i=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bJJ=new C.lo("What is a brother called in Swahili?",D.d6i,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d_Z=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bJU=new C.lo("Which word means father in Swahili?",D.d_Z,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.du3=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bJT=new C.lo('"Umoja ni nguvu" means...',D.du3,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dr6=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bJV=new C.lo('"Haba na haba hujaza kibaba" teaches us...',D.dr6,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d3Z=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bJS=new C.lo('The African saying "It takes a village to raise a child" means...',D.d3Z,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dun=w(["The elders","The market","The river","The drum"],x.s)
D.bJO=new C.lo("Who is the traditional keeper of the family stories?",D.dun,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cRR=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bJL=new C.lo("Why do families sit round the fire at night?",D.cRR,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dta=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bJQ=new C.lo('What does "Harambee" mean?',D.dta,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.d94=w(["An elder","A baby","A market","A cow"],x.s)
D.bJP=new C.lo('"Mzee" is a respectful word for...',D.d94,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dog=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bJR=new C.lo('What does "Shikamoo" show?',D.dog,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.ayJ=w([D.bJK,D.bJN,D.bJI,D.bJM,D.bJJ,D.bJU,D.bJT,D.bJV,D.bJS,D.bJO,D.bJL,D.bJQ,D.bJP,D.bJR],x.J)
D.cWd=w([90,360],x.n)
D.cYU=w([B.bQ,B.bm],x.O)
D.bon=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.cZy=w([D.afm,D.bon],x.O)
D.d_b=w([-1,-0.3,0.4,1],x.n)
D.d04=w([0,0.45,0.72,0.92,1],x.n)
D.biI=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d0m=w([D.biI,B.df],x.O)
D.bgr=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.ajO=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d0U=w([B.dx,D.bgr,D.ajO],x.O)
D.d1U=w([B.ba,B.jg,B.p5],x.O)
D.bje=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bqU=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bg7=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d1Z=w([D.bje,D.bqU,D.bg7],x.O)
D.d2j=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d2t=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hsA=new C.adC(78,424,48,44,56)
D.hsy=new C.adC(214,396,34,34,42)
D.hsz=new C.adC(442,452,56,50,64)
D.azI=w([D.hsA,D.hsy,D.hsz],A.as("O<adC>"))
D.d31=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bfo=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bkY=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dvZ=w([D.aha,D.bfo,D.bkY],x.O)
D.bJA=new C.uJ("leather","Leather",D.dvZ,"vintage")
D.da5=w([B.d9,B.MD,Ab.Yt],x.O)
D.bJH=new C.uJ("midnight","Midnight",D.da5,"starry")
D.d1V=w([B.en,B.e_,B.ld],x.O)
D.bJG=new C.uJ("forest","Forest",D.d1V,"story")
D.dy_=w([B.ep,B.eo,B.jU],x.O)
D.bJD=new C.uJ("burgundy","Burgundy",D.dy_,"royal")
D.cKg=w([B.aE,B.oe,B.o0],x.O)
D.bJE=new C.uJ("royal","Royal",D.cKg,"royal")
D.d4u=w([B.bu,B.cs,F.nq],x.O)
D.bJB=new C.uJ("charcoal","Charcoal",D.d4u,"geo")
D.dw7=w([B.cf,B.dJ,B.y6],x.O)
D.bJF=new C.uJ("sunset","Sunset",D.dw7,"sunset")
D.dwP=w([B.jg,B.G3,B.Yx],x.O)
D.bJC=new C.uJ("ocean","Ocean",D.dwP,"band")
D.zH=w([D.bJA,D.bJH,D.bJG,D.bJD,D.bJE,D.bJB,D.bJF,D.bJC],A.as("O<uJ>"))
D.d4Z=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.d5A=w([B.am,B.aL,B.R],x.O)
D.d6W=w([B.eo,B.e_,B.d9,B.fZ,B.y9,B.cS,B.kq,B.ed,B.d2],x.O)
D.d6X=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.faw=new A.cT(B.dq,B.dF,8)
D.d77=w([D.faw],x.F)
D.d8e=w([B.c1,B.dJ,B.km],x.O)
D.bhk=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.blf=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bpk=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.d8u=w([D.bhk,G.aiz,D.blf,D.bpk,D.ajO],x.O)
D.d8K=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.d8V=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.beL=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bkC=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.d9m=w([D.beL,D.agF,D.bkC],x.O)
D.da0=w([B.c1,B.hB],x.O)
D.da6=w([G.nh,B.i7,G.afx,B.cN],x.O)
D.dbE=w([B.cN,G.nh,B.i7,D.lC,B.cN],x.O)
D.dce=w([B.aU,B.w_,B.xW],x.O)
D.aAL=w(["True","False"],x.s)
D.eI0=new A.y(-0.65,0.6)
D.eUE=new A.y(-0.2,0.95)
D.eVJ=new A.y(0.25,0.95)
D.eLu=new A.y(0.7,0.6)
D.eWi=new A.y(1,0.1)
D.dd1=w([As.Uq,D.eI0,D.eUE,D.eVJ,D.eLu,D.eWi],x.G)
D.bnh=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.btq=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bij=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.dd7=w([D.bnh,D.btq,D.bij],x.O)
D.ddb=w([B.bN,B.c0,B.dw,B.aU],x.O)
D.ddG=w([B.i3,B.cf,B.u0],x.O)
D.de2=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.ded=w([B.fc,B.cS],x.O)
D.boH=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.deD=w([D.boH,D.afk],x.O)
D.deO=w([B.cJ,B.fx,B.hR],x.O)
D.deZ=w([B.aJ,B.bm,B.d9],x.O)
D.dfA=w([B.et,B.cV,B.e_],x.O)
D.dfV=w([B.dH,B.d9,B.MD],x.O)
D.dfZ=w([B.bs,B.m2,B.d2],x.O)
D.dgf=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bnX=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bmf=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dgz=w([D.bnX,D.agB,D.bmf],x.O)
D.dhk=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.din=w([1,0,7,6,3,2],x.t)
D.a5o=w(["leather","linen","plain","stars","rays"],x.s)
D.diz=w([0.5,2,3.6],x.n)
D.dj5=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bRT=new A.a0(985219,"MaterialIcons",!1)
D.bRq=new A.a0(983781,"MaterialIcons",!1)
D.aBd=w([B.a20,B.hG,B.lM,B.ic,D.bRT,B.HA,B.qC,D.bRq,I.aqh,B.CQ,B.qE,B.mT],A.as("O<a0>"))
D.a5s=w(["double","single","corners","none"],x.s)
D.bJp=new C.zu("Little Seed","\ud83c\udf31",0)
D.bJr=new C.zu("Young Listener","\ud83d\udc42",40)
D.bJq=new C.zu("Storyteller","\ud83e\ude98",120)
D.bJo=new C.zu("Village Pride","\ud83c\udfe1",300)
D.bJm=new C.zu("Keeper of Roots","\ud83c\udf33",700)
D.bJn=new C.zu("Elder of the Fire","\ud83d\udd25",1500)
D.aBf=w([D.bJp,D.bJr,D.bJq,D.bJo,D.bJm,D.bJn],A.as("O<zu>"))
D.dke=w([B.dj,B.bo,B.ed],x.O)
D.dku=w([],x.C)
D.Dr=w([],x.u)
D.aLd=new A.q(225,528)
D.eJG=new A.y(D.aLd,1)
D.elB=new A.q(350,548)
D.ePX=new A.y(D.elB,0.95)
D.aL8=new A.q(158,656)
D.ePP=new A.y(D.aL8,1.12)
D.emn=new A.q(92,544)
D.eFe=new A.y(D.emn,0.93)
D.elE=new A.q(398,614)
D.eLR=new A.y(D.elE,1.04)
D.els=new A.q(318,662)
D.eAI=new A.y(D.els,1.1)
D.a5A=w([D.eJG,D.ePX,D.ePP,D.eFe,D.eLR,D.eAI],A.as("O<+(q,H)>"))
D.dmu=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dmV=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dnY=w([B.cN,G.nh,B.i7,D.lC,B.cN,B.i7],x.O)
D.dpo=w([B.az,B.fx,B.fZ],x.O)
D.dpG=w([-12,12],x.n)
D.dpJ=w([-17,17],x.n)
D.dq0=w([-70,58],x.n)
D.dq2=w([-70,-30,20],x.n)
D.dr4=w([B.bs,B.m2,B.Zt],x.O)
D.drl=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dKW=new C.lS("construction","Construction","Jobsite & builds",B.uE)
D.dL2=new C.lS("house","Home Build","Houses & rooms",B.wx)
D.dKT=new C.lS("grocery","Grocery","Store & pantry",B.a2T)
D.dKS=new C.lS("calculator","Calculations","Math & estimates",B.P3)
D.dL0=new C.lS("lumber","Materials","Lumber & supplies",B.Po)
D.dKP=new C.lS("kitchen","Kitchen","Remodel & meals",A3.Pp)
D.bRo=new A.a0(983756,"MaterialIcons",!1)
D.dKU=new C.lS("landscape","Landscaping","Yard & garden",D.bRo)
D.dKO=new C.lS("plumbing","Plumbing","Pipes & water",B.pu)
D.dL3=new C.lS("electrical","Electrical","Wiring & power",B.hr)
D.dKM=new C.lS("store","Retail Shop","Daily business",B.lj)
D.dKN=new C.lS("paint_remodel","Paint & Remodel","Colors & walls",A3.Pi)
D.bQO=new A.a0(983311,"MaterialIcons",!1)
D.dL_=new C.lS("roofing","Roofing","Roofs & exteriors",D.bQO)
D.bRB=new A.a0(983986,"MaterialIcons",!1)
D.dKL=new C.lS("warehouse","Warehouse","Storage & stock",D.bRB)
D.dKY=new C.lS("vehicles","Vehicles","Fleet & transport",B.HB)
D.bOA=new A.a0(62785,"MaterialIcons",!1)
D.dKR=new C.lS("farm","Farm","Crops & livestock",D.bOA)
D.dKQ=new C.lS("restaurant","Restaurant","Food & catering",B.wG)
D.dKX=new C.lS("tools","Tools","Workshop gear",B.Hx)
D.dL1=new C.lS("wallet","Cash & Wallet","Quick spending",B.k3)
D.bPL=new A.a0(63395,"MaterialIcons",!1)
D.dKZ=new C.lS("concrete","Concrete","Foundation work",D.bPL)
D.dKV=new C.lS("blueprint","Blueprint","Plans & design",Ao.aoR)
D.a5X=w([D.dKW,D.dL2,D.dKT,D.dKS,D.dL0,D.dKP,D.dKU,D.dKO,D.dL3,D.dKM,D.dKN,D.dL_,D.dKL,D.dKY,D.dKR,D.dKQ,D.dKX,D.dL1,D.dKZ,D.dKV],A.as("O<lS>"))
D.drR=w([B.bv,B.bo],x.O)
D.dsC=w([B.iz,B.o8,B.dR],x.O)
D.aho=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.aim=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bmA=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.beh=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aCo=w([D.aho,D.aim,D.bmA,D.beh],x.O)
D.dtN=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a67=w(["top","middle","bottom"],x.s)
D.dvc=w([B.cq,B.bm,B.d9],x.O)
D.aCH=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.b83=new A.ac(0,B.G,B.aT,B.I,14)
D.aCK=w([D.b83],x.V)
D.blu=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dvS=w([D.afX,D.Zs,D.blu],x.O)
D.dvT=w([B.b9,B.cV,B.e_],x.O)
D.el9=new A.q(24,-8)
D.elU=new A.q(48,0)
D.el5=new A.q(24,6)
D.dxx=w([B.I,D.el9,D.elU,D.el5],x.g)
D.dxW=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.ehJ={top:0,middle:1,bottom:2}
D.dB8=new A.bv(D.ehJ,["Top","Middle","Bottom"],x.r)
D.ehk={double:0,single:1,corners:2,none:3}
D.dBe=new A.bv(D.ehk,["Double line","One line","Corners","None"],x.r)
D.eiv={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dCJ=new A.bv(D.eiv,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dCV=new A.bv(B.hX,[],A.as("bv<F,+(m,m)>"))
D.ehB={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.DE=new A.bv(D.ehB,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.as("bv<m,F>"))
D.dFk=new H.NF(32,null)
D.dFl=new H.NF(40,null)
D.dFm=new H.NF(46,null)
D.aKG=new C.atF(null)
D.ek0=new A.q(0,40)
D.ek1=new A.q(0,412)
D.ek3=new A.q(0,900)
D.ekd=new A.q(0,-34)
D.eke=new A.q(0,-46)
D.ekg=new A.q(0,-74)
D.ekj=new A.q(100,300)
D.ekk=new A.q(10,14)
D.ekn=new A.q(10,-10)
D.eks=new A.q(10,-46)
D.ekt=new A.q(10,-58)
D.eku=new A.q(116,442)
D.ekw=new A.q(11,-1)
D.ekx=new A.q(11,-10)
D.eky=new A.q(11,-21)
D.aL3=new A.q(11,-60)
D.ekF=new A.q(14,-2)
D.ekG=new A.q(150,520)
D.a86=new A.q(150,592)
D.ekJ=new A.q(15,-15)
D.ekK=new A.q(16,-1)
D.ekO=new A.q(190,444)
D.ekR=new A.q(1,5)
D.ekZ=new A.q(21,-78)
D.el_=new A.q(222,615)
D.Jq=new A.q(225,300)
D.a89=new A.q(225,574)
D.el8=new A.q(24,-52)
D.ela=new A.q(250,210)
D.eln=new A.q(2,-56)
D.aLh=new A.q(300,0)
D.elo=new A.q(300,440)
D.elr=new A.q(318,476)
D.elu=new A.q(324,144)
D.a8c=new A.q(332,150)
D.elw=new A.q(335,585)
D.elx=new A.q(338,140)
D.ely=new A.q(340,158)
D.elA=new A.q(34,-60)
D.E4=new A.q(36,-24)
D.elC=new A.q(372,470)
D.elD=new A.q(390,455)
D.elM=new A.q(42,468)
D.elN=new A.q(431,510)
D.elO=new A.q(431,520)
D.elP=new A.q(45,-92)
D.elQ=new A.q(46,20)
D.elR=new A.q(46,-92)
D.elS=new A.q(46,-94)
D.elT=new A.q(47,-4)
D.elV=new A.q(48,-4)
D.em2=new A.q(4,-26)
D.emb=new A.q(60,455)
D.emi=new A.q(8,14)
D.emm=new A.q(8,-76)
D.emo=new A.q(95,575)
D.emp=new A.q(98,-24)
D.emr=new A.q(9,-2)
D.ems=new A.q(9,-58)
D.aLq=new A.q(9,-79)
D.emt=new A.q(9,-9)
D.en5=new A.q(16.5,8)
D.en7=new A.q(3.2,0)
D.en9=new A.q(-16.5,8)
D.eng=new A.q(16.5,2)
D.enj=new A.q(-3.2,0)
D.ens=new A.q(9.5,6)
D.enw=new A.q(-10,14)
D.enx=new A.q(-10,-12)
D.eny=new A.q(-10,-58)
D.enA=new A.q(-11,-1)
D.enB=new A.q(-11,-10)
D.enD=new A.q(-11,-60)
D.enE=new A.q(-12,-14)
D.enF=new A.q(-12,-16)
D.enM=new A.q(-14,-2)
D.enP=new A.q(-15,-15)
D.enQ=new A.q(-15,-3)
D.enS=new A.q(-16,-1)
D.eo8=new A.q(-24,-52)
D.eof=new A.q(-2,-34)
D.eog=new A.q(-2,-38)
D.eoi=new A.q(-30,-100)
D.a8d=new A.q(-36,-24)
D.eot=new A.q(-4,-26)
D.eov=new A.q(-4,-6)
D.eoF=new A.q(-8,-3)
D.eoG=new A.q(-8,-48)
D.eoJ=new A.q(-9,-2)
D.eoL=new A.q(-9,-58)
D.eoM=new A.q(-9,-79)
D.eoN=new A.q(-9,-9)
D.eoP=new A.q(-9.5,6)
D.ep2=new A.q(-16.5,2)
D.fKx=new A.B("Write a new book",null,B.hz,null,B.K,null,null,null,null,null,null,null)
D.epC=new A.D(B.ks,D.fKx,null)
D.fZb=new A.B("Tap to go on",null,B.vu,null,null,null,null,null,null,null,null,null)
D.epY=new A.D(B.le,D.fZb,null)
D.aqJ=new A.ae(B.hU,18,B.c,null,null,null)
D.fDF=new A.B("Add",null,B.lu,null,null,null,null,null,null,null,null,null)
D.ddp=w([D.aqJ,B.r2,D.fDF],x.p)
D.f7B=new A.c7(B.aM,B.e,B.O,B.m,null,B.p,null,0,D.ddp,null)
D.eq0=new A.D(B.nz,D.f7B,null)
D.eq1=new A.D(E.akW,A9.XQ,null)
D.fxh=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGO=new A.B("New Project",null,D.fxh,null,null,null,null,null,null,null,null,null)
D.dhH=w([D.aqJ,B.ae,D.fGO],x.p)
D.f7E=new A.c7(B.aM,B.e,B.O,B.m,null,B.p,null,0,D.dhH,null)
D.eqf=new A.D(B.iu,D.f7E,null)
D.fJk=new A.B("Choose your header",null,A1.tv,null,null,null,null,null,null,null,null,null)
D.eqA=new A.D(B.hS,D.fJk,null)
D.bdw=new A.fk(2.2,null,null,null,null,B.cS,null,null,null,null)
D.fdn=new A.a5(22,22,D.bdw,null)
D.bbB=new A.cc(B.A,null,null,D.fdn,null)
D.eqF=new A.D(B.a_K,D.bbB,null)
D.bC3=new A.Q(14,2,14,6)
D.fXi=new A.B("The top of your book. Tap a design to see it.",null,Q.tw,null,null,null,null,null,null,null,null,null)
D.eqG=new A.D(D.bC3,D.fXi,null)
D.fIt=new A.B("\ud83c\udfc6 A new record!",null,B.fW,null,null,null,null,null,null,null,null,null)
D.eqI=new A.D(B.le,D.fIt,null)
D.esh=new A.iY(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.esk=new A.iY(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aM1=new A.iY(1,0.9607843137254902,0.48627450980392156,0)
D.Jz=new A.iY(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.Ah=new A.iY(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.esq=new A.iY(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.huJ=new C.bj3(null)
D.bwW=new A.mB(D.huJ,null,B.ay,null,null)
D.aPF=new A.cL(0,0,0,0,null,null,D.bwW,null)
D.fDH=new A.B("\ud83c\udfc5",null,B.aaw,null,null,null,null,null,null,null,null,null)
D.ewP=new A.cL(null,0,-34,null,null,null,D.fDH,null)
D.eEU=new A.y("E","Sit by the fire again")
D.eKu=new A.y("C","Good Learner")
D.eNT=new A.y("D","Still Growing")
D.eSs=new A.y(-42,42)
D.eTN=new A.y("B","Faithful Listener")
D.eVL=new A.y("A","Keeper of the Family")
D.eYV=new A.b5(-17,0.7,0)
D.eZt=new A.b5(-8,0.95,1.3)
D.f_x=new A.b5(18,0.65,5.2)
D.f_z=new A.b5(0,1.15,2.6)
D.f_T=new A.b5(9,0.9,3.9)
D.f1K=new A.cu([0,0,1,1])
D.aR8=new A.a2(0,0,520,160)
D.f4E=new A.a2(10,612,440,618)
D.f4F=new A.a2(10,612,440,628)
D.f4I=new A.a2(14,-64,34,-12)
D.f4L=new A.a2(300,336,350,348)
D.a97=new A.a2(30,96,420,346)
D.f4M=new A.a2(30,-9,46,1)
D.f4N=new A.a2(4,2,11,14)
D.f4P=new A.a2(-8,-12.5,8,-7)
D.f4Q=new A.a2(-16.5,-21,16.5,1)
D.f4R=new A.a2(60,342,88,348)
D.Ur=new A.a2(66,-66,94,-36)
D.f4S=new A.a2(6,8,10,14)
D.f4V=new A.a2(95,343,115,348)
D.f4W=new A.a2(-6.5,-74,6.5,-58)
D.f51=new A.a2(-100,-74,100,-12)
D.f52=new A.a2(-10,8,-6,14)
D.f53=new A.a2(-11,2,-4,14)
D.f54=new A.a2(-11,-70,11,-56)
D.f5b=new A.a2(-13,-24,13,-4)
D.f5h=new A.a2(-15,-21,15,0)
D.f5k=new A.a2(-16,-21,16,1)
D.f5l=new A.a2(-16,-21,16,2)
D.f5o=new A.a2(-16,-26,16,-6)
D.f5y=new A.a2(-230,-26,230,26)
D.f5W=new A.a2(-38,-26,12,-6)
D.f6_=new A.a2(-3,-70,3,-63)
D.f60=new A.a2(-44,-22,44,0)
D.f62=new A.a2(-46,-9,-30,1)
D.aRc=new A.a2(-80,-190,80,20)
D.f69=new A.a2(-8,-26,40,-6)
D.f6a=new A.a2(-98,-80,92,-75)
D.f6b=new A.a2(-9,-15,9,-9)
D.fWR=new A.B("Let the AI write it from your tree",null,B.ix,null,B.K,null,null,null,null,null,null,null)
D.bKr=new A.dp(1,B.co,D.fWR,null)
D.da_=w([E.a3n,B.ae,D.bKr],x.p)
D.f7f=new A.c7(B.aM,B.e,B.O,B.m,null,B.p,null,0,D.da_,null)
D.fDk=new A.B("Save member",null,B.cg,null,null,null,null,null,null,null,null,null)
D.dpL=w([D.arA,B.ae,D.fDk],x.p)
D.f7p=new A.c7(B.aM,B.bb,B.i,B.m,null,B.p,null,0,D.dpL,null)
D.bW1=new A.ae(B.ib,14,B.b2,null,null,null)
D.fqX=new A.G(!0,B.b2,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHd=new A.B("Cashier",null,D.fqX,null,null,null,null,null,null,null,null,null)
D.did=w([D.bW1,B.bn,D.fHd],x.p)
D.f7t=new A.c7(B.aM,B.e,B.O,B.m,null,B.p,null,0,D.did,null)
D.fDl=new A.B("Transfer & settings",null,B.dg,null,null,null,null,null,null,null,null,null)
D.bIb=new A.by(1,B.bc,D.fDl,null)
D.d1n=w([D.ara,B.at,D.bIb],x.p)
D.f7u=new A.c7(B.aM,B.e,B.i,B.m,null,B.p,null,0,D.d1n,null)
D.fc3=new A.av(16,40)
D.fc8=new A.av(22,64)
D.fcf=new A.av(280,88)
D.fd3=new A.a5(30,null,null,null)
D.fCq=new A.B("The teacher is writing\u2026",null,B.AE,null,null,null,null,null,null,null,null,null)
D.bcK=new A.cc(B.A,null,null,D.fCq,null)
D.hoE=new A.bP("w",x.W)
D.fdt=new A.a5(null,56,D.bcK,D.hoE)
D.feg=new A.hG(5,8,8,1,null)
D.feo=new A.hG(2,12,12,1.05,null)
D.fGU=new A.B("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.ff6=new A.b1(D.fGU,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fH8=new A.B("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aTp=new A.b1(D.fH8,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fPw=new A.B("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.ffA=new A.b1(D.fPw,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.h_e=new A.B("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.ffF=new A.b1(D.h_e,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fJi=new A.B("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.ffM=new A.b1(D.fJi,null,null,null,null,null,null,null,null,null,null,null,null,B.h0,!1,null,null,null,B.t,null)
D.fXv=new A.B("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aTt=new A.b1(D.fXv,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fJg=new A.B("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fgb=new A.b1(D.fJg,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fDY=new A.B("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fgd=new A.b1(D.fDY,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fMZ=new A.B("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fgj=new A.b1(D.fMZ,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.h_Z=new A.B("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fgZ=new A.b1(D.h_Z,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fVL=new A.B("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fhn=new A.b1(D.fVL,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.h_i=new A.B("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fhq=new A.b1(D.h_i,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fRb=new A.B("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fhs=new A.b1(D.fRb,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fLa=new A.B("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fht=new A.b1(D.fLa,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fLb=new A.B("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fit=new A.b1(D.fLb,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fGW=new A.B("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fiL=new A.b1(D.fGW,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fIV=new A.B("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fj4=new A.b1(D.fIV,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fQD=new A.B("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fjk=new A.b1(D.fQD,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fM_=new A.B("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fjl=new A.b1(D.fM_,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fvZ=new A.G(!0,B.bF,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkX=new A.en("\u2665",null,null,B.cH,null,null,null,null,null,null,D.fvZ)
D.ftd=new A.G(!0,B.aQ,null,null,null,null,28,B.V,B.cF,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flc=new A.en("Today: how well do you know the family?",null,null,B.cH,null,null,null,null,null,null,D.ftd)
D.flt=new A.G(!0,B.q0,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmA=new A.G(!0,D.kM,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn_=new A.G(!0,D.kM,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn3=new A.G(!0,B.cN,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnc=new A.G(!0,D.fw,null,null,null,null,15,B.V,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnn=new A.G(!0,D.fw,null,null,null,null,13,B.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnH=new A.t2(!0,B.th,null,null,null,null,B.dz,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnW=new A.G(!0,B.cN,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnZ=new A.G(!0,D.kM,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo_=new A.G(!0,B.cN,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo4=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo7=new A.G(!0,B.cN,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foE=new A.G(!0,B.b2,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foF=new A.G(!0,B.ad,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foH=new A.G(!0,B.aQ,null,null,null,null,15.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp8=new A.G(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUF=new A.G(!0,B.aS,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUH=new A.G(!0,D.lB,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpx=new A.G(!0,B.cN,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aaB=new A.t2(!0,B.TX,null,null,null,null,B.dz,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.Vm=new A.G(!0,B.cN,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpH=new A.G(!0,B.R,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpM=new A.G(!0,D.fw,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq9=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frh=new A.G(!0,D.fw,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUS=new A.G(!0,D.fw,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frA=new A.G(!0,B.ad,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frL=new A.G(!0,D.fw,null,null,null,null,null,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frN=new A.G(!0,null,null,null,null,null,8,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frT=new A.G(!0,L.iY,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUW=new A.G(!0,D.fw,null,null,null,null,14.5,B.V,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsO=new A.G(!0,D.fw,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft6=new A.G(!0,D.fw,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft8=new A.G(!0,B.R,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fta=new A.G(!0,B.cN,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftx=new A.G(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A8.Is,null,null,null)
D.aVa=new A.G(!0,D.fw,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftV=new A.G(!0,B.R,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fug=new A.G(!0,B.ff,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuE=new A.G(!0,B.bQ,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuI=new A.G(!0,B.bC,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuU=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuX=new A.G(!0,D.fw,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv4=new A.G(!0,D.G2,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvd=new A.G(!0,B.b2,null,null,null,null,13,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvD=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvJ=new A.G(!0,B.ad,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Dh,null,null,null)
D.fw8=new A.G(!0,B.cN,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwh=new A.G(!0,B.cS,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwu=new A.G(!0,D.lC,null,null,null,null,13,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVu=new A.G(!0,D.fw,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.KE=new A.G(!0,B.cN,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVw=new A.G(!0,B.cN,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Dh,null,null,null)
D.fwO=new A.G(!0,B.bQ,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwS=new A.G(!0,G.nh,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxf=new A.G(!0,B.b2,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxw=new A.G(!0,D.fw,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxT=new A.G(!0,B.c,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyg=new A.G(!0,D.fw,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyJ=new A.G(!0,D.fw,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyP=new A.G(!0,B.am,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyY=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ab4=new A.G(!0,B.am,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ab6=new A.G(!0,D.lB,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAG=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAY=new A.G(!0,B.aQ,null,null,null,null,27,B.V,B.cF,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fB5=new A.G(!0,L.iY,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBd=new A.G(!0,L.iY,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBH=new A.B("Time:",null,B.hh,null,null,null,null,null,null,null,null,null)
D.fC2=new A.B("\ud83c\udfae",null,I.aaW,null,null,null,null,null,null,null,null,null)
D.fC3=new A.B("Themes",null,B.pJ,null,null,null,null,null,null,null,null,null)
D.fCy=new A.B("\ud83c\udfb2",null,B.xe,null,null,null,null,null,null,null,null,null)
D.fCC=new A.B("Delete this game?",null,B.ix,null,null,null,null,null,null,null,null,null)
D.fCJ=new A.B("Add Item",null,B.cg,null,null,null,null,null,null,null,null,null)
D.frv=new A.G(!0,B.R,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fD9=new A.B("Debt receipt",null,D.frv,null,B.K,null,null,null,null,null,null,null)
D.aVK=new A.G(!0,B.am,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDs=new A.B("Person who owes",null,D.aVK,null,null,null,null,null,null,null,null,null)
D.fEq=new A.B("Notes",null,B.aaJ,null,null,null,null,null,null,null,null,null)
D.fER=new A.B("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fqq=new A.G(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEU=new A.B("Share",null,D.fqq,null,null,null,null,null,null,null,null,null)
D.fFQ=new A.B("Move your family trees",null,K.ab2,null,null,null,null,null,null,null,null,null)
D.fGv=new A.B("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fH7=new A.B("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fHv=new A.B("SAVE",null,D.KE,null,null,null,null,null,null,null,null,null)
D.fI7=new A.B("The round button is the right answer.",null,Q.ED,null,null,null,null,null,null,null,null,null)
D.fIs=new A.B("Remove this book?",null,B.fW,null,null,null,null,null,null,null,null,null)
D.fxc=new A.G(!0,B.cN,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Dh,null,null,null)
D.fJ_=new A.B("Fireside Stories",null,D.fxc,null,null,null,null,null,null,null,null,null)
D.aWe=new A.B("Download",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fJH=new A.B("What should the AI do?",null,B.dg,null,null,null,null,null,null,null,null,null)
D.fq4=new A.G(!0,D.lB,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJW=new A.B("REPORT CARD",null,D.fq4,null,null,null,null,null,null,null,null,null)
D.fKE=new A.B("Calabash Catch",null,B.KH,null,null,null,null,null,null,null,null,null)
D.fL6=new A.B("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fLx=new A.B("\ud83c\udfe1",null,B.EC,null,null,null,null,null,null,null,null,null)
D.fMe=new A.B("Ribbon bookmark",null,B.jt,null,null,null,null,null,null,null,null,null)
D.fyI=new A.G(!0,B.b2,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMI=new A.B("NGMY.ORG",null,D.fyI,null,B.K,null,null,null,null,null,null,null)
D.fO1=new A.B("Scan family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fuY=new A.G(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOM=new A.B("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fuY,null,B.K,null,null,null,null,null,null,null)
D.fQ_=new A.B("Delete",null,B.Vf,null,null,null,null,null,null,null,null,null)
D.fQ0=new A.B("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fQ7=new A.B("Thumbnail",null,B.pJ,null,null,null,null,null,null,null,null,null)
D.fQJ=new A.B("Save the cover",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fQO=new A.B("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.xg,null,B.K,null,null,null,null,null,null,null)
D.fRc=new A.B("Your photos",null,B.pJ,null,null,null,null,null,null,null,null,null)
D.fRr=new A.B("Create Project",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fRO=new A.B("\u2b50 stars",null,B.Vt,null,null,null,null,null,null,null,null,null)
D.fS1=new A.B("Design your cover",null,A1.tv,null,null,null,null,null,null,null,null,null)
D.fS7=new A.B("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fSa=new A.B("PICTURE",null,M.vy,null,null,null,null,null,null,null,null,null)
D.fSc=new A.B("\ud83c\udfaf",null,D.VI,null,null,null,null,null,null,null,null,null)
D.fSx=new A.B("Paid",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fSz=new A.B("You can undo it right after.",null,Q.ED,null,null,null,null,null,null,null,null,null)
D.fT5=new A.B("Print",null,B.vv,null,null,null,null,null,null,null,null,null)
D.fTu=new A.B("Amount owed",null,D.aVK,null,null,null,null,null,null,null,null,null)
D.fTJ=new A.B("Got it",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fUk=new A.B("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fUn=new A.B("Add to budget",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fUP=new A.B("Debtor signature",null,B.aaJ,null,null,null,null,null,null,null,null,null)
D.fUZ=new A.B("Change icon",null,B.aaI,null,null,null,null,null,null,null,null,null)
D.fVM=new A.B("MADE BY THE SYSTEM, FROM YOUR TREE",null,T.ty,null,null,null,null,null,null,null,null,null)
D.fWd=new A.B("Family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fWj=new A.B("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.VH,null,null,null,null,null,null,null,null,null)
D.fWH=new A.B("Download",null,B.vv,null,null,null,null,null,null,null,null,null)
D.fWI=new A.B("The person who planted this tree has not made a game yet.",null,B.xd,null,null,null,null,null,null,null,null,null)
D.fWM=new A.B("Change",null,B.pJ,null,null,null,null,null,null,null,null,null)
D.fXB=new A.B("Clear all",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fXE=new A.B("WHAT SHOULD IT CHANGE?",null,M.vy,null,null,null,null,null,null,null,null,null)
D.fYd=new A.B("COLOUR",null,M.vy,null,null,null,null,null,null,null,null,null)
D.fYr=new A.B("Do it",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fYu=new A.B("Create Tree",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fYD=new A.B("Give me another clue",null,D.KE,null,null,null,null,null,null,null,null,null)
D.fZx=new A.B("Create Family Tree",null,B.f8,null,null,null,null,null,null,null,null,null)
D.fZH=new A.B("THE TEACHER EXPLAINS THESE",null,T.ty,null,null,null,null,null,null,null,null,null)
D.fls=new A.G(!0,E.kn,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZN=new A.B("Write the first page myself",null,D.fls,null,null,null,null,null,null,null,null,null)
D.h_l=new A.B("Use this header",null,B.cB,null,null,null,null,null,null,null,null,null)
D.h_s=new A.B("Create Project",null,E.aVr,null,null,null,null,null,null,null,null,null)
D.hpX=new C.acg(1,"header")
D.ac7=new C.acg(2,"projects")
D.hpY=new C.acg(3,"cashier")
D.ac8=new C.acg(4,"familyTree")
D.hD9=new C.cFt(0,"start")
D.hDa=new C.cFu(0,"start")
D.hql=new C.Zq(null)
D.hrm=new C.ZT(null)
D.dCS=new A.bv(B.hX,[],A.as("bv<m,Gs>"))
D.dkT=w([],x.dE)
D.dkU=w([],x.M)
D.hrT=new C.bgf(D.dCS,D.dkT,D.dkU,0,0,null,null)
D.b_C=new C.a_J(0,"intro")
D.b_D=new C.a_J(1,"countdown")
D.acm=new C.a_J(2,"ask")
D.WA=new C.a_J(3,"reveal")
D.b_E=new C.a_J(4,"end")
D.huL=new C.ta(F.Gb,D.lC,B.cN,F.lD,5,!1,!1,!1,0,null)
D.huM=new C.ta(F.Gb,B.ep,B.cN,B.bP,2,!0,!0,!1,2,B.cN)
D.huN=new C.ta(B.og,B.cS,B.cN,F.lD,2,!0,!1,!1,2,B.az)
D.huO=new C.ta(F.Gb,B.dH,B.cN,F.lD,5,!1,!1,!1,1,null)
D.huP=new C.ta(F.ZI,D.aim,B.cN,F.lD,4,!0,!1,!0,0,null)
D.b_H=new C.ta(F.ZI,B.dJ,B.cN,F.lD,3,!0,!1,!0,2,null)
D.b_I=new C.ta(F.mK,D.lC,B.c,F.lD,0,!1,!1,!0,0,null)
D.b_J=new C.ta(B.og,B.aE,B.cN,B.bP,2,!0,!0,!1,2,B.dJ)
D.b_K=new C.ta(B.og,G.nh,B.i7,F.lD,5,!1,!1,!0,3,null)
D.huQ=new C.ta(B.og,B.dJ,B.cN,F.lD,0,!0,!1,!1,0,B.aE)
D.b_L=new C.ta(F.Gb,B.ep,B.cN,B.bP,1,!1,!0,!1,1,null)
D.b_M=new C.ta(F.FK,B.az,B.aE,F.lD,4,!0,!1,!0,2,null)
D.huR=new C.ta(F.mK,B.az,B.ep,F.lD,3,!0,!1,!1,0,null)
D.huS=new C.ta(B.og,B.dH,B.cN,B.bP,1,!1,!0,!1,1,null)
D.huT=new C.ta(F.FK,D.aho,B.c,F.lD,5,!1,!1,!0,0,null)
D.hvw=new C.a0g(null)
D.hDi=new C.afD(0,"still")
D.WX=new C.afD(1,"walk")
D.b0c=new C.afD(2,"pound")
D.b0d=new C.afD(3,"drum")
D.hz0=new C.a1y(0,"greet")
D.b0e=new C.a1y(1,"teach")
D.acG=new C.a1y(2,"ask")
D.hz1=new C.a1y(3,"feedback")
D.b0f=new C.a1y(4,"end")
D.X1=new C.a1R(0,"intro")
D.X2=new C.a1R(1,"asking")
D.B0=new C.a1R(2,"reacting")
D.acQ=new C.a1R(3,"driving")
D.acR=new C.a1R(4,"arrived")
D.acU=new C.aL6(0,"projects")
D.b0D=new C.aL6(1,"cashier")
D.hB2=new C.aL6(2,"familyTree")})()};
(a=>{a["lbHZmV/ygDwCAkMOHEC0IUmOOnk="]=a.current})($__dart_deferred_initializers__);