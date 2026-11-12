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
h=B.d.ds(b3,k,Math.min(i,j))
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
q=H.a39(new A.N(r,new C.fME(),r.$ti.k("N<ak.E,m>")).aO(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fMD(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.Y.az(b7,null)+"\nAllowed values: style one of "+B.d.aO(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ahL)
case 6:l=c5
k=H.Ri(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.api(s,D.dD_,r.b(k.h(0,"cover"))?A.a3(r.a(k.h(0,"cover")),x.N,x.z):null)
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
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.J)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.H(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.Y.az(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ahL)
case 10:l=c5
k=l==null?null:H.Ri(l)
if(k==null)throw A.W(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.dd(a8,d),a5=J.aX(a2.a),a2=a2.$ti,a7=new A.lh(a5,a2.k("lh<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gR(a5))
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
p=A.cE(new A.b8(h,s),new C.fMF(),s.k("M.E"),p)
p=H.a39(A.pC(p,3,A.a4(p).k("M.E")).aO(0," "))==="sw"
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
hD4(d,e,f){return A.cf(null,B.w.j(0.65),!1,null,new C.fW8(e,f),d,null,!0,!0,x.g2)},
api:function api(d,e,f){this.a=d
this.b=e
this.c=f},
fME:function fME(){},
fMD:function fMD(d){this.a=d},
fMF:function fMF(){},
fW8:function fW8(d,e){this.a=d
this.b=e},
bD2(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bD2=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aW(b1,new C.fA1())){u=null
w=1
break}t=B.d.cM(b1,new C.fA2())
s=$.S()
r=new A.pW(new A.pv())
q=A.zl(r,D.aRd)
p=A.K()
p.r=B.c.gp(0)
q.au(D.aRd,p)
o=A.K()
o.r=B.R.gp(0)
o.c=3.6
o.b=B.aa
o.d=B.bA
o.e=B.dS
n=new C.fA7(t)
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
return A.b(r.nZ().xA(520,160),$async$bD2)
case 4:w=3
return A.b(b3.hs(B.he),$async$bD2)
case 3:b0=b3
u=b0==null?null:J.eQ(B.dM.gaU(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bD2,v)},
fKk(d){return C.ihD(d)},
ihD(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fKk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bj6()
n=d.x!=null&&d.zF(null).length===0
if(d.x!=null)t=n?D.Ai:D.Jz
else t=d.gUw()?D.Jz:D.aM6
w=3
return A.b(C.bD2(d.ax),$async$fKk)
case 3:s=f
p.a=null
if(s!=null)p.a=A.anY(s)
r=A.a55(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aM6}else{p.c=C.xd(q,!0)
p.b=n?D.Ai:D.Jz}r.a3W(A.h5A(new C.fKm(p,d,new C.fKn(),t,n,o),null,D.bFx,B.x1))
u=r.jG(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fKk,v)},
fQZ(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fQZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fKk(d),$async$fQZ)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.aA(q,0,40)
u=Ag.Hk(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fQZ,v)},
fA1:function fA1(){},
fA2:function fA2(){},
fA7:function fA7(d){this.a=d},
fKn:function fKn(){},
fKm:function fKm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fKl:function fKl(){},
fWB(d,e){var w=0,v=A.j(x.H)
var $async$fWB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,B.w.j(0.55),!0,null,new C.fWF(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fWB)
case 2:return A.h(null,v)}})
return A.i($async$fWB,v)},
bFF(d,e,f,g){return C.ipc(d,e,f,g)},
ipc(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bFF=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cG.aM(t)}catch(q){r=null}if(r==null||r.length===0){d.L(x.q).f.U(D.fj9)
w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.fWx(g,r,f),d,null,!0,!0,x.H),$async$bFF)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bFF,v)},
fWG(d,e){var w=0,v=A.j(x.H)
var $async$fWG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,null,!0,null,new C.fWJ(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fWG)
case 2:return A.h(null,v)}})
return A.i($async$fWG,v)},
b_k:function b_k(d,e){this.c=d
this.a=e},
c7m:function c7m(){},
bcv:function bcv(d,e){this.b=d
this.a=e},
fWF:function fWF(d,e){this.a=d
this.b=e},
fWC:function fWC(d){this.a=d},
fWD:function fWD(d,e,f){this.a=d
this.b=e
this.c=f},
fWE:function fWE(d,e){this.a=d
this.b=e},
fWx:function fWx(d,e,f){this.a=d
this.b=e
this.c=f},
fWv:function fWv(d){this.a=d},
fWw:function fWw(d,e,f){this.a=d
this.b=e
this.c=f},
fWJ:function fWJ(d,e){this.a=d
this.b=e},
fWH:function fWH(d){this.a=d},
fWI:function fWI(d,e,f){this.a=d
this.b=e
this.c=f},
fEH(d,e){var w=0,v=A.j(x.y),u,t
var $async$fEH=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a2V(d),$async$fEH)
case 3:t=g
J.nL(t,new C.fEI(e))
u=A.aip(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fEH,v)},
fEI:function fEI(d){this.a=d},
apu:function apu(d,e,f){this.c=d
this.d=e
this.a=f},
aEd:function aEd(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dPn:function dPn(d,e){this.a=d
this.b=e},
dP8:function dP8(d,e){this.a=d
this.b=e},
dPb:function dPb(d,e,f){this.a=d
this.b=e
this.c=f},
dPa:function dPa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dP9:function dP9(d,e){this.a=d
this.b=e},
dPc:function dPc(d,e){this.a=d
this.b=e},
dP6:function dP6(){},
dP7:function dP7(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dP5:function dP5(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dOR:function dOR(d){this.a=d},
dOS:function dOS(d,e,f){this.a=d
this.b=e
this.c=f},
dOT:function dOT(d,e){this.a=d
this.b=e},
dOQ:function dOQ(d){this.a=d},
dOY:function dOY(d,e){this.a=d
this.b=e},
dOP:function dOP(d){this.a=d},
dOZ:function dOZ(d,e,f){this.a=d
this.b=e
this.c=f},
dP_:function dP_(d,e,f){this.a=d
this.b=e
this.c=f},
dOO:function dOO(d,e){this.a=d
this.b=e},
dP0:function dP0(d,e,f){this.a=d
this.b=e
this.c=f},
dON:function dON(d,e){this.a=d
this.b=e},
dP1:function dP1(d,e){this.a=d
this.b=e},
dOM:function dOM(d){this.a=d},
dP2:function dP2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dOK:function dOK(){},
dOE:function dOE(d){this.a=d},
dOF:function dOF(d){this.a=d},
dOL:function dOL(d,e){this.a=d
this.b=e},
dP3:function dP3(d,e){this.a=d
this.b=e},
dOJ:function dOJ(d){this.a=d},
dP4:function dP4(d){this.a=d},
dOI:function dOI(){},
dOU:function dOU(d,e){this.a=d
this.b=e},
dOH:function dOH(d){this.a=d},
dOV:function dOV(d,e,f){this.a=d
this.b=e
this.c=f},
dOG:function dOG(d,e){this.a=d
this.b=e},
dOD:function dOD(d,e){this.a=d
this.b=e},
dOW:function dOW(d){this.a=d},
dOX:function dOX(d,e,f){this.a=d
this.b=e
this.c=f},
dPq:function dPq(){},
dPr:function dPr(d,e){this.a=d
this.b=e},
dPo:function dPo(d){this.a=d},
dPp:function dPp(d){this.a=d},
dPk:function dPk(d,e){this.a=d
this.b=e},
dPl:function dPl(d){this.a=d},
dPd:function dPd(d,e,f){this.a=d
this.b=e
this.c=f},
dPe:function dPe(d,e,f){this.a=d
this.b=e
this.c=f},
dPf:function dPf(d,e,f){this.a=d
this.b=e
this.c=f},
dPg:function dPg(d,e,f){this.a=d
this.b=e
this.c=f},
dPh:function dPh(d,e,f){this.a=d
this.b=e
this.c=f},
dPi:function dPi(d,e,f){this.a=d
this.b=e
this.c=f},
dPj:function dPj(d,e,f){this.a=d
this.b=e
this.c=f},
dPs:function dPs(){},
dPt:function dPt(){},
dPu:function dPu(){},
dPv:function dPv(d){this.a=d},
dPm:function dPm(d,e){this.a=d
this.b=e},
hyX(d){return B.d.dO(D.a4p,new C.fFr(d),new C.fFs())},
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
fFr:function fFr(d){this.a=d},
fFs:function fFs(){},
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
TL:function TL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bg7:function bg7(){this.d=$
this.c=this.a=null},
df9:function df9(d,e){this.a=d
this.b=e},
df7:function df7(d,e){this.a=d
this.b=e},
df8:function df8(){},
dfa:function dfa(d,e){this.a=d
this.b=e},
hjs(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bj(J.k(u==null?"":u))
return new C.nr(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
Lw(d,e){return C.igf(d,e)},
igf(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
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
o=A.cE(o,new C.fHW(),o.$ti.k("M.E"),x.B)
n=A.a4(o).k("Y<M.E>")
o=A.C(new A.Y(o,new C.fHX(),n),n.k("M.E"))
B.d.aZ(o,new C.fHY())
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
r=J.b7(f,new C.fVe(),x.a)
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
s=t.bj(u,new C.h2z(f))
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
J.nL(u,new C.fEz(f))
w=3
return A.b(C.Bp(d,e,u),$async$bDw)
case 3:return A.h(null,v)}})
return A.i($async$bDw,v)},
bDL(d,e){return C.ige(d,e)},
ige(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bDL=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bDL)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aT(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Ou
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
h=B.d.q(D.a66,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.q(D.a5r,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.q(D.a5n,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.d52,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.Ii(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Ou
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Ou
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bDL,v)},
So(d,e,f){return C.ioK(d,e,f)},
ioK(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$So=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$So)
case 7:r=h
w=8
return A.b(r.aB("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.Y.az(f.ak(),null)),$async$So)
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
return A.i($async$So,v)},
RS(d,e){return C.igg(d,e)},
igg(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$RS=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$RS)
case 7:r=g
q=r.tP("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Lw(d,e),$async$RS)
case 8:if(!j.cI(g)){n=B.a.i(d.toLowerCase())
m=J.lG(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$RS)
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
return A.i($async$RS,v)},
ah4(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ah4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.RS(d,e),$async$ah4)
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
return A.b(C.RS(d,e),$async$a3y)
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
fHW:function fHW(){},
fHX:function fHX(){},
fHY:function fHY(){},
fVe:function fVe(){},
h2z:function h2z(d){this.a=d},
fEz:function fEz(d){this.a=d},
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
bQP:function bQP(d){this.a=d},
ip1(d,e,f,g,h,i,j){return A.a6(d,!1).cd(A.eb(new C.fVN(j,i,f,e,h,g),!0,null,x.H))},
RN(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$RN=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.RS(h,g),$async$RN)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.L(x.q).f.U(D.aTu)
u=!1
w=1
break}w=4
return A.b(C.hD4(d,f,e),$async$RN)
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
return A.b(C.So(h,r,new C.Ii("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$RN)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$RN,v)},
fVN:function fVN(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a_i:function a_i(d,e,f,g,h,i,j,k){var _=this
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
dfP:function dfP(d){this.a=d},
dfO:function dfO(d,e){this.a=d
this.b=e},
dfD:function dfD(d,e){this.a=d
this.b=e},
dfA:function dfA(d,e){this.a=d
this.b=e},
dfb:function dfb(d){this.a=d},
dfc:function dfc(d,e){this.a=d
this.b=e},
dfE:function dfE(d){this.a=d},
dfk:function dfk(d){this.a=d},
dfi:function dfi(d){this.a=d},
dfj:function dfj(d){this.a=d},
dfl:function dfl(d){this.a=d},
dfB:function dfB(d){this.a=d},
dfC:function dfC(){},
dfg:function dfg(d){this.a=d},
dfh:function dfh(d,e){this.a=d
this.b=e},
dfm:function dfm(d){this.a=d},
dfn:function dfn(d,e){this.a=d
this.b=e},
dfN:function dfN(d){this.a=d},
dfM:function dfM(d,e){this.a=d
this.b=e},
dfL:function dfL(d){this.a=d},
dfx:function dfx(d){this.a=d},
dfw:function dfw(d){this.a=d},
dfy:function dfy(d){this.a=d},
dfd:function dfd(d,e){this.a=d
this.b=e},
dfz:function dfz(d,e){this.a=d
this.b=e},
dfq:function dfq(d){this.a=d},
dfr:function dfr(d){this.a=d},
dfp:function dfp(){},
dfs:function dfs(d){this.a=d},
dft:function dft(d){this.a=d},
dfu:function dfu(d,e){this.a=d
this.b=e},
dfv:function dfv(d,e,f){this.a=d
this.b=e
this.c=f},
dfo:function dfo(d,e){this.a=d
this.b=e},
dfG:function dfG(d){this.a=d},
dfF:function dfF(){},
dfH:function dfH(d){this.a=d},
dfI:function dfI(d){this.a=d},
dfJ:function dfJ(d){this.a=d},
dfK:function dfK(d,e){this.a=d
this.b=e},
dfe:function dfe(d){this.a=d},
dff:function dff(d){this.a=d},
a_m:function a_m(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgw:function bgw(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dhA:function dhA(d){this.a=d},
dhB:function dhB(d){this.a=d},
dhz:function dhz(d){this.a=d},
dhC:function dhC(d){this.a=d},
dhy:function dhy(d){this.a=d},
dhD:function dhD(d){this.a=d},
dhx:function dhx(d){this.a=d},
dhE:function dhE(d,e){this.a=d
this.b=e},
dhw:function dhw(d,e){this.a=d
this.b=e},
dhF:function dhF(d,e){this.a=d
this.b=e},
a_k:function a_k(d,e,f,g,h,i,j){var _=this
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
dg3:function dg3(d,e){this.a=d
this.b=e},
dg2:function dg2(d,e){this.a=d
this.b=e},
dg7:function dg7(d){this.a=d},
dg6:function dg6(d,e){this.a=d
this.b=e},
dg4:function dg4(d){this.a=d},
dg5:function dg5(d){this.a=d},
dg8:function dg8(d){this.a=d},
dg9:function dg9(d){this.a=d},
dg1:function dg1(d,e){this.a=d
this.b=e},
dg0:function dg0(d,e){this.a=d
this.b=e},
KE:function KE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ZA:function ZA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cOw:function cOw(d){this.a=d},
cOx:function cOx(){},
cOy:function cOy(d){this.a=d},
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
ZT:function ZT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdH:function bdH(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d74:function d74(d,e,f){this.a=d
this.b=e
this.c=f},
d73:function d73(d,e){this.a=d
this.b=e},
d7t:function d7t(d){this.a=d},
d7g:function d7g(){},
d7u:function d7u(d){this.a=d},
d7f:function d7f(){},
d7v:function d7v(d,e){this.a=d
this.b=e},
d7e:function d7e(d,e){this.a=d
this.b=e},
d7w:function d7w(d,e){this.a=d
this.b=e},
d7d:function d7d(d,e){this.a=d
this.b=e},
d7x:function d7x(d){this.a=d},
d7c:function d7c(){},
d7y:function d7y(d,e){this.a=d
this.b=e},
d7b:function d7b(d,e){this.a=d
this.b=e},
d7z:function d7z(d){this.a=d},
d7o:function d7o(d,e){this.a=d
this.b=e},
d7A:function d7A(d){this.a=d},
d7B:function d7B(d){this.a=d},
d7D:function d7D(d){this.a=d},
d7E:function d7E(d){this.a=d},
d7n:function d7n(d,e){this.a=d
this.b=e},
d7F:function d7F(d,e){this.a=d
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
a1z:function a1z(d,e){this.a=d
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
bQZ:function bQZ(d){this.a=d},
bQT:function bQT(d){this.a=d},
bQS:function bQS(d,e){this.a=d
this.b=e},
bR1:function bR1(d){this.a=d},
bQU:function bQU(d){this.a=d},
bQV:function bQV(d){this.a=d},
bQY:function bQY(d){this.a=d},
bQX:function bQX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bR_:function bR_(d,e){this.a=d
this.b=e},
bR0:function bR0(){},
bQW:function bQW(d){this.a=d},
bQQ:function bQQ(d,e){this.a=d
this.b=e},
bQR:function bQR(d){this.a=d},
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
d.pg(0,a0?-f:f,f)
w=A.bJ(B.ih,8,36)
v=B.w.j(0.3)
u=$.S()
t=A.K()
t.r=v.gp(0)
d.bY(w,t)
w=a1===D.WY
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ar(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.eoy,new A.q(-4+v,-2),C.iv(q,5))
d.ah(D.em7,new A.q(4-v,-2),C.iv(q,5))}else{t=A.bJ(B.Jp,14,40)
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
break}if(a1===D.b0h){n=-52+w*14
d.ah(new A.q(10,n-22),new A.q(10,n+44),C.iv(F.FK,3.4))
d.ah(D.eoQ,new A.q(9,n),C.iv(q,4))
d.ah(D.emx,new A.q(10,n),C.iv(q,4))}else if(a1===D.b0i){d.ah(D.enD,new A.q(-8,-26-Math.max(0,w)*6),C.iv(q,4))
d.ah(D.eky,new A.q(8,-26-Math.max(0,-w)*6),C.iv(q,4))}else{w=s*3
v=-38-r
d.ah(D.enI,new A.q(-12-w,v),C.iv(q,4))
d.ah(D.aL8,new A.q(12+w,v),C.iv(q,4))}w=A.K()
w.r=q.gp(0)
d.au(D.f64,w)
m=new A.q(0,-77-r)
w=A.bJ(m,22,19)
v=A.K()
v.r=q.gp(0)
d.bY(w,v)
w=h.y
if(w!=null){v=A.bJ(m.a6(0,I.vl),15,24)
u=A.K()
u.r=w.gp(0)
d.bY(v,u)
u=m.a6(0,D.eks)
v=A.K()
v.r=w.gp(0)
d.N(u,4,v)}else{w=A.bJ(m.a6(0,B.tf),23,20)
v=h.d
u=A.K()
u.r=v.gp(0)
d.cN(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a6(0,D.eoO),m.a6(0,D.enB),C.iv(v,2.2))
d.ah(m.a6(0,D.emw),m.a6(0,D.ekp),C.iv(v,2.2))}if(w===4){w=m.a6(0,D.eoS)
u=A.K()
u.r=v.gp(0)
d.N(w,6,u)
u=m.a6(0,D.emy)
w=A.K()
w.r=v.gp(0)
d.N(u,6,w)}}w=m.a6(0,D.eno)
v=A.K()
v.r=B.i7.gp(0)
d.N(w,0.9,v)
v=m.a6(0,D.enc)
w=A.K()
w.r=B.i7.gp(0)
d.N(v,0.9,w)
if(i){l=m.a6(0,I.a82)
w=A.bJ(l,21,22)
v=A.K()
v.r=D.lB.gp(0)
d.bY(w,v)
v=A.bJ(l.a6(0,I.aL5),5,12)
w=A.K()
w.r=D.bfn.gp(0)
d.bY(v,w)
d.ah(l.a6(0,D.eoK),l.a6(0,I.aLs),C.iv(B.cN,1.4))
d.ah(D.aL8,new A.q(15,-88-r),C.iv(q,3.6))}j.restore()},
hxA(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
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
d.lx(D.aRh,A.K())
C.i4L(d,g,h,i,j)
s=(k==null?D.a88:k).a-w>=0?1:-1
w=A.K()
w.a=B.LE
w.sar(A.jv(new A.q(s*70,-60),new A.q(-s*70,-60),A.a([D.ahV.j(0.5),D.ahV.j(0.12),D.bmD.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.au(D.aRh,w)
r.restore()
r.restore()},
i4L(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ar(d,B.w,0.28)
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
s=A.br(D.f65,B.tj)
p=$.S()
o=A.K()
o.r=u.gp(0)
a1.ap(s,o)
o=A.br(D.f60,B.hL)
s=A.ar(v,B.w,0.18)
s.toString
n=A.K()
n.r=s.gp(0)
a1.ap(o,n)
n=A.br(D.f6e,B.hL)
o=A.ar(v,B.w,0.1)
o.toString
s=A.K()
s.r=o.gp(0)
a1.ap(n,s)
s=A.K()
s.r=d.gp(0)
a1.bY(D.f67,s)
s=A.K()
s.r=d.gp(0)
a1.bY(D.f4R,s)
s=a1.c
J.bq(s.save())
s.translate(a3.w,0)
J.bq(s.save())
a1.pg(0,q,q*(1+t*0.012))
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
k=D.dbI[j]
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
default:a1.ah(D.eod,D.eld,C.iv(a2.c.j(0.9),3))}a1.ah(D.eoL,D.enK,C.iv(B.w.j(0.18),1.6))
a1.ah(D.ekx,I.aLa,C.iv(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.S()
i=A.K()
i.r=u.gp(0)
a1.au(D.f4N,i)
s.restore()
i=A.K()
i.r=a0.gp(0)
a1.au(D.f50,i)
n=new A.aE(k.r,B.ah,e,e,A.a([],n))
n.D(new A.aY(-9,-66))
n.D(new A.c4(0,-57,9,-66))
n.D(new A.c4(0,-60,-9,-66))
k=A.K()
k.r=d.gp(0)
a1.ae(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cN(D.f59,0.1,2.941592653589793,!1,C.iv(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.a8c
n=25*q
k=23*q
i=9*q
C.htR(a1,new A.q(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.E4:o
C.htR(a1,new A.q(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.em_,D.elW,C.iv(D.aiT,4))
a1.ah(D.elY,D.elU,C.iv(D.G8.j(0.7),1.4))
u=A.K()
u.r=B.cN.gp(0)
a1.N(D.elX,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.bq(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.ir(0,a3.f)
a1.bV(0,r)
C.i4I(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
htR(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aK(0,e),r=s.gcG(),q=r===0?B.ih:s.eW(0,r),p=B.k.F(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.q(o,w)
if(o*i<0)v=new A.q(-o,-w)
u=e.a6(0,q.aN(0,n)).a6(0,v.aN(0,m))
t=e.a6(0,q.aN(0,p))
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
w=t.a6(0,new A.q(i*w*0.45,w*0.1))
o=A.K()
o.r=k.gp(0)
d.N(w,l*0.28,o)},
i4I(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bJ(B.vk,40,38)
$.S()
v=A.K()
v.r=c0.gp(0)
c2.bY(w,v)}if(c1===4){$.S()
w=A.K()
w.r=c0.gp(0)
c2.N(D.enU,9.5,w)
w=A.K()
w.r=c0.gp(0)
c2.N(D.ekO,9.5,w)}w=A.bJ(D.ep7,10,6)
v=$.S()
u=A.K()
u.r=c8.gp(0)
c2.bY(w,u)
u=A.bJ(D.enl,10,6)
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
u.sar(A.w3(D.eoA,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.ae(t,u)
u=c3.r
if(u){s=C.iv(c8.j(0.5),0.8)
c2.cN(D.f6g,3.455751918948773,2.5132741228718345,!1,s)
c2.cN(D.f4U,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.enR,D.enF,s)
c2.ah(D.ekK,D.ekB,s)
c2.cN(D.f58,2.2,1.4,!1,s)
c2.cN(D.f4S,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ao(B.Q,B.N,B.T,B.U,B.S)
n.r=c0.gp(0)
c2.N(new A.q(p*14.5,-3+o*17.5),4.3,n)}p=A.K()
p.r=c0.gp(0)
c2.cN(D.f5m,3.141592653589793,3.141592653589793,!0,p)
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
c2.ah(D.enG,D.ekC,C.iv(G.nh,1.4))
o=A.K()
o.r=c0.gp(0)
c2.N(D.enX,3,o)
o=A.K()
o.r=c0.gp(0)
c2.N(D.ekP,3,o)
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
c2.cN(D.f5t,3.4,2.5,!1,C.iv(o,1.4))
o=A.ar(m,B.c,0.3)
o.toString
c2.cN(D.f5g,3.6,2.2,!1,C.iv(o,1.2))
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
c2.N(D.ekD,3,p)
break
case 3:p=A.K()
p.r=c0.gp(0)
c2.cN(D.f5q,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ar(c0,B.c,0.18)
p.toString
o=new A.ao(B.Q,B.N,B.T,B.U,B.S)
o.b=B.aa
o.c=0.9
o.r=p.gp(0)
o.d=B.bA
o.e=B.dS
c2.ah(new A.q(r*3.6,-19+Math.abs(r)*0.8),new A.q(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=D.dpN[l]
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
c2.cN(D.f5p,3.204424506661589,3.015928947446201,!0,p)
p=A.ar(c0,B.c,0.25)
p.toString
c2.ah(I.a82,I.a81,C.iv(p,1))
break
default:p=A.K()
p.r=c0.gp(0)
c2.cN(D.f4V,3.267256359733385,2.8902652413026098,!0,p)}i=B.k.F(c4.b,0,1)*0.4+0.1
p=A.bJ(D.eoU,5,8)
o=D.afd.j(i)
n=A.K()
n.r=o.gp(0)
c2.bY(p,n)
n=A.bJ(D.enx,5,8)
p=D.afd.j(i)
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
if(a3==null)a3=a4.e=new A.E_(a4.glV().a.snapshot())
d.clipPath(a3.a,$.nK(),!0)
a3=new A.ao(B.Q,B.N,B.T,B.U,B.S)
a3.r=D.bj7.gp(0)
c2.N(new A.q(a7,a8),2.1,a3)
a3=new A.ao(B.Q,B.N,B.T,B.U,B.S)
a3.r=B.w.gp(0)
c2.N(new A.q(a7,a8),1.05,a3)
a3=new A.ao(B.Q,B.N,B.T,B.U,B.S)
a3.r=B.c.gp(0)
c2.N(new A.q(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.YV:c8.j(0.9)
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
if(u)b1=B.e6
else{b1=A.ar(c0,B.w,0.2)
b1.toString}b2=new A.ao(B.Q,B.N,B.T,B.U,B.S)
b2.b=B.aa
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bA
b2.e=B.dS
c2.ah(new A.q(a5-a4,b0-a6+0.4),new A.q(a5+a4,b0-0.6-a3),b2)}b3=B.k.F(c4.a,0,1)
if(o)b4=D.bsX
else{u=A.ar(c8,D.bmF,0.6)
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
v.r=D.blZ.gp(0)
c2.ae(b8,v)
J.bq(d.save())
c2.mP(0,b8)
v=B.c.j(0.95)
u=A.K()
u.r=v.gp(0)
c2.au(new A.a2(w,11,w+b6*2,13.2),u)
u=A.bJ(new A.q(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.K()
w.r=D.bt1.gp(0)
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
c2.ae(w,u)}}if(c4.b>0.2){c2.cN(D.f57,-1.2,2.2,!1,C.iv(c8.j(0.5),0.8))
c2.cN(D.f4X,2.141592653589793,2.2,!1,C.iv(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.K()
w.r=c1.gp(0)
c2.N(D.ene,1.7,w)
w=A.K()
w.r=c1.gp(0)
c2.N(D.ena,1.7,w)}},
iae(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.S(),f=new A.pW(new A.pv()),e=A.zl(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.K()
a2.sar(A.jv(B.I,new A.q(0,a0*0.46),D.d8y,D.d08,B.x,h))
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
e.ir(0,-0.5)
d=A.K()
a0=x.O
d.sar(A.w3(B.I,230,A.a([D.bhT,B.L],a0),h,B.x,h,h,0))
e.bY(D.f5D,d)
a2.restore()
d=A.K()
d.sar(A.w3(D.a8b,58,A.a([D.bl2,B.L],a0),h,B.x,h,h,0))
e.N(D.a8b,58,d)
d=A.K()
d.r=D.bgB.gp(0)
e.N(D.a8b,24,d)
d=A.K()
d.r=D.Zi.gp(0)
e.N(D.elz,5,d)
d=A.K()
d.r=D.Zi.gp(0)
e.N(D.elD,3.4,d)
d=A.K()
d.r=D.Zi.gp(0)
e.N(D.elC,2.4,d)
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
g=[D.bfb,D.bha,D.bmY][s]
u=$.S()
t=new A.ao(B.Q,B.N,B.T,B.U,B.S)
t.r=g.gp(0)
e.ae(r,t)}for(l=0;l<4;++l){o=D.cv7[l]
k=384+B.o.E(o,11)
g=o-2
d=k-24
u=new A.ao(B.Q,B.N,B.T,B.U,B.S)
u.b=B.aa
u.c=2.4
u.r=D.ZA.gp(0)
u.d=B.bA
u.e=B.dS
e.ah(new A.q(o,k),new A.q(g,d),u)
g=A.bJ(new A.q(g,k-27),11,46)
u=new A.ao(B.Q,B.N,B.T,B.U,B.S)
u.r=D.ZA.gp(0)
e.bY(g,u)
d=A.bJ(new A.q(o-12,d),8,24)
u=new A.ao(B.Q,B.N,B.T,B.U,B.S)
u.r=D.ZA.gp(0)
e.bY(d,u)}for(v=0;v<9;++v){g=B.o.E(v,3)
d=B.o.E(v,4)
u=new A.ao(B.Q,B.N,B.T,B.U,B.S)
u.r=D.bgE.j(0.8).gp(0)
e.N(new A.q(20+v*52+g*7,400+d*5),1.2,u)}g=A.K()
g.sar(A.jv(D.ek6,D.ek8,D.d22,B.Dp,B.x,h))
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
e.pg(0,1,0.34)
g=A.K()
g.sar(A.w3(B.I,250,A.a([D.bnR,D.bhv,D.bpI],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.N(B.I,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.aj()*450
k=640+j.aj()*260
g=j.aj()
d=A.ar(D.ahB,D.bg8,j.aj())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.S()
a0=new A.ao(B.Q,B.N,B.T,B.U,B.S)
a0.b=B.aa
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bA
a0.e=B.dS
e.ah(new A.q(o+i*2,k),new A.q(o+i*5,g+Math.abs(i)*3),a0)}}C.i2Z(e)
for(l=0;l<3;++l)C.i6c(e,D.azN[l])
C.i61(e,D.elt)
for(o=118;o<190;o+=11){g=B.o.E(o,3)
d=B.o.E(o,4)
$.S()
a0=new A.ao(B.Q,B.N,B.T,B.U,B.S)
a0.b=B.aa
a0.c=2.4
a0.r=D.Zw.gp(0)
a0.d=B.bA
a0.e=B.dS
e.ah(new A.q(o,452+g),new A.q(o+1,436+d),a0)}e.ah(D.ekz,D.ekT,C.iv(D.bgS,1.6))
a2.restore()
return f.nZ()},
i2Z(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.S().r,g=x.v,f=new A.aE(h,B.ah,i,i,A.a([],g))
f.D(new A.aY(358,462))
f.D(new A.kP(354,422,370,382,374,332))
f.D(new A.aq(410,332))
f.D(new A.kP(416,382,432,422,428,462))
f.D(new A.bt())
w=A.K()
w.sar(A.jv(new A.q(354,0),new A.q(430,0),D.dvW,U.zK,B.x,i))
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
d.ah(new A.q(t,s),new A.q(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.dd5[o]
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
r.r=D.afW.gp(0)
r.d=B.bA
r.e=B.dS
d.ae(k,r)
for(j=0;j<6;++j){r=v.aj()
p=v.aj()
m=v.aj()
l=new A.ao(B.Q,B.N,B.T,B.U,B.S)
l.r=A.ar(D.bgK,D.bmX,v.aj()).j(0.92).gp(0)
d.N(new A.q(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ao(B.Q,B.N,B.T,B.U,B.S)
r.b=B.aa
r.c=1.2
r.r=D.Zw.gp(0)
r.d=B.bA
r.e=B.dS
d.ah(new A.q(w,q+8),new A.q(w,q+22),r)
q=A.bJ(new A.q(w,q+28),13,7)
w=new A.ao(B.Q,B.N,B.T,B.U,B.S)
w.r=D.bo9.gp(0)
d.bY(q,w)}},
i6c(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bJ(new A.q(a5,a6+2),a9,a7*2.8),b1=B.w.j(0.3),b2=$.S(),b3=A.K()
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
u.sar(A.jv(new A.q(b0,0),new A.q(v,0),D.ddb,U.zK,B.x,a4))
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
o=D.ahw.j(0.75)
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
f.a8()}b4.ae(f,C.iv(D.ahw.j(0.7),1.6))
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
m.r=D.ahI.gp(0)
b4.ae(b2,m)
m=A.K()
m.r=D.ahI.gp(0)
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
b1.sar(A.jv(new A.q(a5-n,0),new A.q(a5+n,0),D.dgD,U.zK,B.x,a4))
b4.ae(e,b1)
J.bq(v.save())
b4.mP(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.aj()
n=(t.h8()?B.w:D.bgh).j(0.16)
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
v.r=D.bnk.gp(0)
v.d=B.bA
v.e=B.dS
b4.ah(new A.q(a2,a3),new A.q(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aE(b0,B.ah,a4,a4,A.a([],b3))
b0=u+4
a9.D(new A.aY(a5-2.5,b0))
a9.D(new A.aq(a5,u-7))
a9.D(new A.aq(a5+2.5,b0))
a9.D(new A.bt())
b0=A.K()
b0.r=D.bjC.gp(0)
b4.ae(a9,b0)},
i61(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+D.dpK[s]
$.S()
q=new A.ao(B.Q,B.N,B.T,B.U,B.S)
q.b=B.aa
q.c=3
q.r=D.Zw.gp(0)
q.d=B.bA
q.e=B.dS
d.ah(new A.q(r,u),new A.q(r,t),q)}u=A.bJ(e.a6(0,I.aL4),24,36)
t=$.S()
r=A.K()
r.r=D.bsc.gp(0)
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
u.r=D.agC.gp(0)
d.ae(t,u)},
i5m(d){switch(B.o.E(d,8)){case 0:return D.b_Q
case 1:return D.b_O
case 2:return D.b_N
case 3:return D.b_M
case 4:return D.b_P
case 5:return D.b_R
case 6:return D.huT
default:return D.huS}},
Sm(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.boD()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a8c:j
w.as=k==null?D.E4:k
C.hxA(d,e,p,C.i5m(m),w,s,m,l)},
hz2(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bSD:function bSD(){var _=this
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
bSz:function bSz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSA:function bSA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSB:function bSB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSC:function bSC(){},
bSu:function bSu(d){this.a=d},
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
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bRe(s)
s.bB7(d)
return s},
GT(d,e,f,g,h,i,j){var w,v=A.T(g).k("Y<1>")
v=A.d4(new A.Y(g,new C.fsW(f),v),v.k("M.E"))
w=A.C(v,A.a4(v).k("co.E"))
B.d.e0(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.v(v,A.cW(w,0,A.dA(3,"count",x.S),A.T(w).c))
B.d.e0(v,d)
return new C.lp(e,v,B.d.cp(v,f),h,i,"tree",j)},
iqB(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.U(c0,x.cg),c2=new C.h2q(c1),c3=x.s,c4=A.a([],c3)
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
for(c4=w.length,v=A.T(t).k("Y<1>"),s=v.k("M.E"),p=A.T(w).k("Y<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.J)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.c()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.wn)g="father"
else g=h===D.op?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Y(t,new C.h2s(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.GT(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Y(w,new C.h2t(i,m),p),o)
B.d.e0(d,c6)
c2.$2(b4,new C.lp("True or false: "+h+" is the "+g+" of "+l+".",D.aAQ,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lp("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",D.aAQ,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.G4(m)
h=a0.length
if(h!==0){a1=a0[c6.aw(h)]
h=B.a.i(a1.b)
f=A.C(new A.Y(t,new C.h2u(l,a0,c5),v),s)
e=a1.c
if(e===D.wn)e="son"
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
f=A.C(new A.Y(t,new C.h2v(l),v),s)
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
j=A.C(new A.Y(t,new C.h2w(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.wn
if(e)a2=b7
else a2=f===D.op?b8:b9
if(e)f=b7
else f=f===D.op?b8:b9
c2.$2("grand",C.GT(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aMH(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.aw(k)].b)
j=A.C(new A.Y(t,new C.h2x(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.GT(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.v(j,D.cNL)
h=l+" was born in "+k
c2.$2("place",C.GT(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.v(j,D.d35)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.GT(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.J)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.GT(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cC(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.jL(b1,b3,b3)
c2.$2("year",C.GT(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bDH(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.MT(d),l=new A.e4()
l.d_(f)
w=C.iqB(m,l,g)
for(v=new A.dq(w,w.r,w.e);v.C();)J.hhw(v.d,l)
v=A.a4(w).k("cx<1>")
u=A.C(new A.cx(w,v),v.k("M.E"))
B.d.e0(u,l)
t=A.a([],x.J)
s=A.aS(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aW(u,new C.fG2(n,w))))break
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
if(v<e){v=A.C(D.ayO,x.df)
B.d.e0(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.J)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hxH(o,l))}}else if(!g&&v>3){o=C.hxH(D.ayO[l.aw(14)],l)
t[t.length-1-l.aw(3)]=o}return t},
hxH(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.e0(w,e)
return new C.lp(d.a,w,B.d.cp(w,v),d.d,d.e,d.f,d.r)},
hCD(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.MT(a2),a1=new A.e4()
a1.d_(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
if(a0.G4(q).length>=2)u.push(q)}B.d.e0(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.J)(u),++r){n=u[r]
m=a0.G4(n)
l=A.T(m)
k=new A.it(m,0,5,l.k("it<1>"))
k.n4(m,0,5,l.c)
j=k.dn(0)
if(new A.N(j,new C.fUf(),A.T(j).k("N<1,F>")).fL(0).a<j.length)continue
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
J.c8(e.c3(0,a0.amm(q),new C.fUg()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cx<1>")
d=A.C(new A.cx(e,t),t.k("M.E"))
B.d.fi(d)
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
aQk(d){return B.d.anN(D.aBk,new C.fC3(d))},
igM(d){return A.nv(new A.Y(D.aBk,new C.fIQ(d),x.av))},
bS2(d){return C.hMh(d)},
hMh(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bS2=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bS2)
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
return A.i($async$bS2,v)},
BL(d,e){return C.hMe(d,e)},
hMe(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
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
bS1(d,e,f){return C.hMf(d,e,f)},
hMf(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bS1=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bS1)
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
return A.i($async$bS1,v)},
BM(d,e,f,g){return C.hMg(d,e,f,g)},
hMg(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
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
h4t(d,e,f,g){return new C.aku(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hKl(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aX(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cx)
while(u.C())w.push(J.k(u.gR(u)))
u=x.N
w=A.cW(w,0,A.dA(4,"count",x.S),u).dn(0)
B.d.v(w,A.bZ(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aK(d.h(0,"c"))
v=v==null?null:B.k.M(v)
v=B.o.F(v==null?0:v,0,3)
u=A.aK(d.h(0,"s"))
u=u==null?null:B.k.M(u)
return C.h4t(w,v,B.o.F(u==null?20:u,5,60),t)},
hiG(d){var w,v,u,t,s,r,q=J.a7(d),p=q.h(d,"id")
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
if(u.b(r))v.push(C.hKl(A.a3(r,t,s)))}return new C.MC(p,w,v)},
hcT(d){var w,v=A.a([],x.c)
for(w=J.aX(d.z);w.C();)v.push(C.hiG(w.gR(w)))
return v},
aRR(d,e){var w=e.c===D.op
if(d.amm(e)===0&&d.G4(e).length!==0)return w?0:1
if(d.G4(e).length!==0||d.ar9(e)!=null)return w?2:3
return w?4:5},
hDJ(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.MT(a4),a3=new A.e4()
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
j=i.h(0,k)}h=a2.G4(m)
g=a2.ar9(m)
f=a2.aMH(m)
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
if(k===D.wn)k="father"
else k=k===D.op?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.wn)k="father"
else k=k===D.op?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e0(l,a3)
B.d.aZ(l,new C.h2Q())
d=B.a.i(m.b)
a0=A.C(new A.Y(s,new C.h2R(d),o),n)
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
w.push(new C.ba6(d,a1,i.dn(0),k))
if(w.length>=5)break}return w},
hvj(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.a0(d,"My ")?1:0},
hCP(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.MT(a4),a3=new A.e4()
a3.d_(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
if(a2.G4(q).length>=2)u.push(q)}B.d.e0(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.J)(u),++r){l=u[r]
k=a2.G4(l)
j=A.T(k)
i=new A.it(k,0,4,j.k("it<1>"))
i.n4(k,0,4,j.c)
h=i.dn(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.J)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aW(h,new C.fUL(q))&&q.d!==j)i.push(q)}B.d.e0(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.it(i,0,k,m)
j.n4(i,0,k,n)
f=j.dn(0)
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
lp:function lp(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bRe:function bRe(d){this.b=d
this.c=$},
bRf:function bRf(){},
bRg:function bRg(d){this.a=d},
fsW:function fsW(d){this.a=d},
h2q:function h2q(d){this.a=d},
h2r:function h2r(){},
h2s:function h2s(d){this.a=d},
h2t:function h2t(d,e){this.a=d
this.b=e},
h2u:function h2u(d,e,f){this.a=d
this.b=e
this.c=f},
h2p:function h2p(d,e){this.a=d
this.b=e},
h2v:function h2v(d){this.a=d},
h2w:function h2w(d){this.a=d},
h2x:function h2x(d,e,f){this.a=d
this.b=e
this.c=f},
h2o:function h2o(d,e){this.a=d
this.b=e},
fG2:function fG2(d,e){this.a=d
this.b=e},
atT:function atT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fUf:function fUf(){},
fUg:function fUg(){},
zu:function zu(d,e,f){this.a=d
this.b=e
this.c=f},
fC3:function fC3(d){this.a=d},
fIQ:function fIQ(d){this.a=d},
aku:function aku(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bM2:function bM2(){},
MC:function MC(d,e,f){this.a=d
this.b=e
this.c=f},
ba6:function ba6(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
h2Q:function h2Q(){},
h2R:function h2R(d){this.a=d},
a9H:function a9H(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fUL:function fUL(d){this.a=d},
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
cpz:function cpz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cpA:function cpA(d){this.a=d},
cpy:function cpy(d){this.a=d},
cpB:function cpB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cpC:function cpC(){},
cpD:function cpD(d,e){this.a=d
this.b=e},
cpE:function cpE(){},
cpF:function cpF(d){this.a=d},
cpv:function cpv(d){this.a=d},
cpw:function cpw(d,e){this.a=d
this.b=e},
cpx:function cpx(d,e,f){this.a=d
this.b=e
this.c=f},
cpq:function cpq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cps:function cps(d,e){this.a=d
this.b=e},
cpt:function cpt(d,e){this.a=d
this.b=e},
cpr:function cpr(d,e){this.a=d
this.b=e},
cpp:function cpp(){},
cpu:function cpu(){},
bc0:function bc0(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cPA:function cPA(){},
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
cEx:function cEx(d){this.a=d},
cEw:function cEw(d){this.a=d},
cEF:function cEF(d,e){this.a=d
this.b=e},
cEG:function cEG(d,e){this.a=d
this.b=e},
cEH:function cEH(d){this.a=d},
cEE:function cEE(d){this.a=d},
cEI:function cEI(d){this.a=d},
cEJ:function cEJ(d,e){this.a=d
this.b=e},
cEK:function cEK(){},
cEL:function cEL(d){this.a=d},
cEz:function cEz(d){this.a=d},
cEA:function cEA(d,e){this.a=d
this.b=e},
cEy:function cEy(d,e){this.a=d
this.b=e},
cEB:function cEB(){},
cEC:function cEC(){},
cED:function cED(d,e){this.a=d
this.b=e},
azr:function azr(){},
aGD:function aGD(){},
haG(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.bqY((w-450*u)/2,(v-900*u)/2,u)},
afp:function afp(){},
f5H:function f5H(d){this.a=d},
aKp:function aKp(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
ffQ:function ffQ(d){this.a=d},
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
_.q6$=f
_.LR$=g
_.amT$=h
_.bx$=i
_.aa$=j
_.c=_.a=null},
bS0:function bS0(d){this.a=d},
bS_:function bS_(){},
bRY:function bRY(d){this.a=d},
bRW:function bRW(){},
bRX:function bRX(d){this.a=d},
bRT:function bRT(d,e){this.a=d
this.b=e},
bRU:function bRU(){},
bRV:function bRV(d){this.a=d},
bRZ:function bRZ(d,e){this.a=d
this.b=e},
bRS:function bRS(d){this.a=d},
bsE:function bsE(d,e){this.b=d
this.a=e},
f5I:function f5I(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f5J:function f5J(d,e,f){this.a=d
this.b=e
this.c=f},
f5K:function f5K(d,e,f){this.a=d
this.b=e
this.c=f},
f5L:function f5L(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f5M:function f5M(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f5N:function f5N(){},
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
_.q6$=f
_.LR$=g
_.amT$=h
_.bx$=i
_.aa$=j
_.c=_.a=null},
bRE:function bRE(){},
bRP:function bRP(d,e){this.a=d
this.b=e},
bRQ:function bRQ(d){this.a=d},
bRR:function bRR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRL:function bRL(){},
bRK:function bRK(d,e){this.a=d
this.b=e},
bRM:function bRM(d,e){this.a=d
this.b=e},
bRN:function bRN(){},
bRO:function bRO(d){this.a=d},
bRG:function bRG(d){this.a=d},
bRH:function bRH(d){this.a=d},
bRI:function bRI(d){this.a=d},
bRF:function bRF(d,e){this.a=d
this.b=e},
bRJ:function bRJ(d){this.a=d},
bjb:function bjb(d,e){this.b=d
this.a=e},
dqL:function dqL(){},
a1S:function a1S(d,e){this.a=d
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
_.q6$=e
_.LR$=f
_.amT$=g
_.bx$=h
_.aa$=i
_.c=_.a=null},
bRq:function bRq(d){this.a=d},
bRp:function bRp(){},
bRo:function bRo(){},
bRi:function bRi(){},
bRj:function bRj(){},
bRn:function bRn(d,e,f){this.a=d
this.b=e
this.c=f},
bRm:function bRm(d){this.a=d},
bRk:function bRk(d,e){this.a=d
this.b=e},
bRl:function bRl(d){this.a=d},
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
if(g!=null)B.d.v(v,A.a([A.X(g,h,u,u,u,20),B.ae],w))
v.push(A.d(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aA(u,A.p(u,A.A(v,B.m,u,B.e,B.O,0,u,u),B.f,u,u,new A.o(f,u,u,t,s,u,B.n),u,u,u,u,B.Oa,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hjt(d,e,f,g,h,i,j){return new C.alE(i,h,d,j,e,f,g,null)},
a6e:function a6e(d,e){this.c=d
this.a=e},
biJ:function biJ(d){this.a=d},
tA:function tA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bRh:function bRh(d){this.a=d},
Ik:function Ik(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
W5:function W5(d,e,f,g,h){var _=this
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
e0A:function e0A(d,e){this.a=d
this.b=e},
e0B:function e0B(d){this.a=d},
e0C:function e0C(d,e){this.a=d
this.b=e},
e0y:function e0y(d){this.a=d},
e0z:function e0z(d){this.a=d},
e0x:function e0x(d){this.a=d},
e0v:function e0v(d){this.a=d},
e0w:function e0w(d){this.a=d},
e0u:function e0u(d,e){this.a=d
this.b=e},
e0D:function e0D(d){this.a=d},
e0E:function e0E(d,e){this.a=d
this.b=e},
e0F:function e0F(d,e){this.a=d
this.b=e},
e0G:function e0G(d,e){this.a=d
this.b=e},
e0J:function e0J(d,e){this.a=d
this.b=e},
e0K:function e0K(d,e){this.a=d
this.b=e},
e0L:function e0L(d,e){this.a=d
this.b=e},
e0M:function e0M(d,e){this.a=d
this.b=e},
e0N:function e0N(d,e){this.a=d
this.b=e},
e0O:function e0O(d,e,f){this.a=d
this.b=e
this.c=f},
e0P:function e0P(d,e){this.a=d
this.b=e},
e0Q:function e0Q(d,e){this.a=d
this.b=e},
e0H:function e0H(d){this.a=d},
e0I:function e0I(d){this.a=d},
a_K:function a_K(d,e){this.a=d
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
bRC:function bRC(d){this.a=d},
bRD:function bRD(d){this.a=d},
bRB:function bRB(d){this.a=d},
bRs:function bRs(d){this.a=d},
bRt:function bRt(d){this.a=d},
bRr:function bRr(d){this.a=d},
bRy:function bRy(d,e,f){this.a=d
this.b=e
this.c=f},
bRz:function bRz(d){this.a=d},
bRv:function bRv(d,e){this.a=d
this.b=e},
bRw:function bRw(d,e,f){this.a=d
this.b=e
this.c=f},
bRA:function bRA(){},
bRx:function bRx(d,e){this.a=d
this.b=e},
bRu:function bRu(d){this.a=d},
TM:function TM(d,e){this.c=d
this.a=e},
alB:function alB(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bR2:function bR2(d){this.a=d},
bR3:function bR3(d){this.a=d},
bRd:function bRd(){},
bRc:function bRc(d,e,f){this.a=d
this.b=e
this.c=f},
bR7:function bR7(d,e){this.a=d
this.b=e},
bR6:function bR6(d,e){this.a=d
this.b=e},
bR8:function bR8(d){this.a=d},
bR9:function bR9(d,e){this.a=d
this.b=e},
bRa:function bRa(d,e){this.a=d
this.b=e},
bR5:function bR5(d,e){this.a=d
this.b=e},
bRb:function bRb(d,e,f){this.a=d
this.b=e
this.c=f},
bR4:function bR4(d,e){this.a=d
this.b=e},
ifd(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.aiD(a6),a5=a4.length
if(a5===0)return""
w=A.U(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.J)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bB(new A.V(Date.now(),0,!1))
s=new C.fFv(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("Y<1>"),q=q.k("cM<1,m>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.J)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.yT)m.push(l===D.wn?"male":"female")
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
m.push("child of "+l+k)}a0=A.C(new A.cM(new A.Y(a4,new C.fFt(u,f),p),new C.fFu(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aO(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aO(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aA(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
ife(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.aiD(a0),d=e.length
if(d===0)return""
w=x.N
v=A.U(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.J)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fFA(v,e)
q=new C.fFy(v)
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
B.d.fi(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.J)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gag(e),k=new A.eA(l,new C.fFz(p,m));k.C();t=f){j=l.gR(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.an(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aO(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
i0p(d,e,f,g){var w,v,u=C.iff(d,e)
if(u<=0||f.length<=u)return new A.af3(!1,D.Dr,f)
if(g.q(0,e.a))return new A.af3(!1,D.Dr,f)
w=A.T(f).c
v=A.cW(f,0,A.dA(u,"count",x.S),w).dn(0)
return new A.af3(!0,A.cW(f,u,null,w).dn(0),v)},
i0q(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.aiD(d3),d2=d1.length
if(d2===0)return D.hrY
w=x.N
v=A.U(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.J)(d1),++u){t=d1[u]
v.c3(0,t.a,new C.dgg(t))}s=new C.dgx(v)
d2=x.dy
r=A.U(w,d2)
q=new C.dgp(r)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dgo(r)
l=A.U(w,x.do)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c8(l.c3(0,k,new C.dgh()),o)}h=new C.dgn(s)
g=new C.dgm(l,r)
p=v.$ti.k("b8<2>")
o=p.k("Y<M.E>")
f=A.C(new A.Y(new A.b8(v,p),new C.dgi(h),o),o.k("M.E"))
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
a9=new C.dgv(new C.dgr(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.U(p,d2),a7)
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
b7=new C.dgf(a2,new C.dgw(),b6,a3,b4,v,a4,a5,a6,b5)
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
a3.bO(0,new C.dgj(c6,b4))
for(d2=new A.cs(a4,a4.$ti.k("cs<1,2>")).gag(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aX(c7.b);j.C();){i=j.gR(j)
if(b6.an(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.q(d0,b4.h(0,i).b.b))}}for(j=B.d.gag(b5),i=new A.eA(j,new C.dgk(c8));i.C();)o.push(j.gR(0).b)
if(o.length===0)continue
B.d.aZ(o,new C.dgl())
c6.push(new C.aKk(new A.q(c9,b4.h(0,c8).b.b+112),B.I,!1,o))}return new C.bgf(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hyn(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cC(d)
return w==null?null:w.b[1]},
hsy(d,e,f,g,h,i,j,k,l,m,n){return new C.a_X(k,f,j,e,l,n,m,d,g,h,i,null)},
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
e2f:function e2f(d){this.a=d},
e2e:function e2e(d){this.a=d},
e2h:function e2h(d,e){this.a=d
this.b=e},
e2i:function e2i(d,e){this.a=d
this.b=e},
e2j:function e2j(d){this.a=d},
e2d:function e2d(d,e){this.a=d
this.b=e},
e2g:function e2g(d){this.a=d},
e2l:function e2l(d){this.a=d},
e2k:function e2k(d,e){this.a=d
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
e1G:function e1G(d){this.a=d},
e1E:function e1E(d){this.a=d},
e1F:function e1F(d){this.a=d},
e1H:function e1H(d,e){this.a=d
this.b=e},
e1B:function e1B(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e12:function e12(d){this.a=d},
e13:function e13(d,e){this.a=d
this.b=e},
e1k:function e1k(d){this.a=d},
e1i:function e1i(d){this.a=d},
e1j:function e1j(d,e){this.a=d
this.b=e},
e1l:function e1l(d){this.a=d},
e1m:function e1m(d,e){this.a=d
this.b=e},
e1A:function e1A(d,e){this.a=d
this.b=e},
e1h:function e1h(d){this.a=d},
e1g:function e1g(d){this.a=d},
e1f:function e1f(d,e){this.a=d
this.b=e},
e1x:function e1x(){},
e1y:function e1y(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e1w:function e1w(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e1q:function e1q(d){this.a=d},
e1r:function e1r(d,e,f){this.a=d
this.b=e
this.c=f},
e1p:function e1p(d,e){this.a=d
this.b=e},
e1s:function e1s(d,e){this.a=d
this.b=e},
e1n:function e1n(d,e){this.a=d
this.b=e},
e1o:function e1o(){},
e1t:function e1t(d,e){this.a=d
this.b=e},
e1u:function e1u(d){this.a=d},
e1v:function e1v(d,e){this.a=d
this.b=e},
e1z:function e1z(d,e){this.a=d
this.b=e},
e0R:function e0R(d,e){this.a=d
this.b=e},
e0S:function e0S(d,e){this.a=d
this.b=e},
e1J:function e1J(d,e,f){this.a=d
this.b=e
this.c=f},
e1D:function e1D(d,e,f){this.a=d
this.b=e
this.c=f},
e1C:function e1C(d){this.a=d},
e0T:function e0T(d){this.a=d},
e0U:function e0U(d){this.a=d},
e0V:function e0V(){},
e0W:function e0W(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1_:function e1_(d,e){this.a=d
this.b=e},
e0Z:function e0Z(d,e){this.a=d
this.b=e},
e0Y:function e0Y(d){this.a=d},
e10:function e10(d,e){this.a=d
this.b=e},
e0X:function e0X(d){this.a=d},
e1I:function e1I(d){this.a=d},
e1c:function e1c(){},
e1d:function e1d(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1b:function e1b(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e17:function e17(d,e,f){this.a=d
this.b=e
this.c=f},
e16:function e16(d,e,f){this.a=d
this.b=e
this.c=f},
e14:function e14(d,e){this.a=d
this.b=e},
e18:function e18(d){this.a=d},
e19:function e19(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e15:function e15(d,e){this.a=d
this.b=e},
e1a:function e1a(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1e:function e1e(d,e){this.a=d
this.b=e},
e1Q:function e1Q(){},
e1R:function e1R(d,e){this.a=d
this.b=e},
e1S:function e1S(d){this.a=d},
e1T:function e1T(d,e){this.a=d
this.b=e},
e1M:function e1M(d){this.a=d},
e1K:function e1K(d,e){this.a=d
this.b=e},
e1N:function e1N(d,e){this.a=d
this.b=e},
e1O:function e1O(d,e){this.a=d
this.b=e},
e1P:function e1P(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e1U:function e1U(d){this.a=d},
e1L:function e1L(d){this.a=d},
e11:function e11(d){this.a=d},
bgd:function bgd(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dgd:function dgd(d){this.a=d},
dgc:function dgc(d,e){this.a=d
this.b=e},
dge:function dge(d){this.a=d},
dgb:function dgb(d,e){this.a=d
this.b=e},
fFv:function fFv(d,e){this.a=d
this.b=e},
fFw:function fFw(d){this.a=d},
fFx:function fFx(){},
fFt:function fFt(d,e){this.a=d
this.b=e},
fFu:function fFu(){},
fFA:function fFA(d,e){this.a=d
this.b=e},
fFB:function fFB(d){this.a=d},
fFC:function fFC(){},
fFy:function fFy(d){this.a=d},
fFz:function fFz(d,e){this.a=d
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
dgg:function dgg(d){this.a=d},
dgx:function dgx(d){this.a=d},
dgp:function dgp(d){this.a=d},
dgq:function dgq(){},
dgo:function dgo(d){this.a=d},
dgh:function dgh(){},
dgn:function dgn(d){this.a=d},
dgm:function dgm(d,e){this.a=d
this.b=e},
dgi:function dgi(d){this.a=d},
dgr:function dgr(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dgs:function dgs(d){this.a=d},
dgt:function dgt(d){this.a=d},
dgu:function dgu(){},
dgv:function dgv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dgw:function dgw(){},
dgf:function dgf(d,e,f,g,h,i,j,k,l,m){var _=this
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
dgj:function dgj(d,e){this.a=d
this.b=e},
dgk:function dgk(d){this.a=d},
dgl:function dgl(){},
aKk:function aKk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bgg:function bgg(d,e){this.b=d
this.a=e},
dgy:function dgy(){},
dgz:function dgz(d){this.a=d},
dgA:function dgA(d){this.a=d},
dgB:function dgB(){},
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
flq:function flq(d){this.a=d},
bnl:function bnl(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eWA:function eWA(d){this.a=d},
eWz:function eWz(d,e){this.a=d
this.b=e},
a_X:function a_X(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
dwq:function dwq(d,e){this.a=d
this.b=e},
dwp:function dwp(d){this.a=d},
dwn:function dwn(d){this.a=d},
dwo:function dwo(d){this.a=d},
dwz:function dwz(d){this.a=d},
dwA:function dwA(d){this.a=d},
dwy:function dwy(d,e){this.a=d
this.b=e},
dwB:function dwB(){},
dwE:function dwE(d){this.a=d},
dwx:function dwx(d,e){this.a=d
this.b=e},
dwD:function dwD(){},
dwF:function dwF(d){this.a=d},
dww:function dww(d,e){this.a=d
this.b=e},
dwG:function dwG(d){this.a=d},
dwv:function dwv(d){this.a=d},
dwH:function dwH(d){this.a=d},
dwu:function dwu(d){this.a=d},
dwI:function dwI(d){this.a=d},
dwt:function dwt(d){this.a=d},
dwJ:function dwJ(d){this.a=d},
dws:function dws(d){this.a=d},
dwK:function dwK(d){this.a=d},
dwr:function dwr(d,e){this.a=d
this.b=e},
dwC:function dwC(d){this.a=d},
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
dwL:function dwL(d){this.a=d},
dwM:function dwM(d,e){this.a=d
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
dwV:function dwV(d){this.a=d},
Go:function Go(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hnv(d){var w=d.T,v=x.N
return w.jp(w,new C.cem(),v,v)},
hSQ(d){var w=d.bD
if(w>=0)return w
return 5},
hnx(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hnv(d).h(0,v)
if(w==null||w.length===0)return null
return A.bj(w)},
hnw(d,e){var w=C.hnx(d,e)
if(w!=null&&w.cf(new A.V(Date.now(),0,!1)))return!0
return!1},
hSR(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a3(C.hnv(d),w,w)
u=C.hnx(d,e)
t=u!=null&&u.cf(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bR(A.dv(30,0,0,0,0,0).a).ab().af())
d.T=v},
b0M(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b0M=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lw(t,B.Jj),$async$b0M)
case 3:if(l){u=!0
w=1
break}u=A.la(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Jj,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0M,v)},
cem:function cem(){},
hSO(){var w,v=$.oo(),u=J.e2(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.he(u)},
Jf(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Jf=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c7(),$async$Jf)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_family_tree_backup_codes_v1",null,!1,B.bK),$async$Jf)
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
a7W(d){return C.hSP(d)},
hSP(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a7W=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c7(),$async$a7W)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_family_tree_backup_codes_v1",A.H(["codes",d,"savedAt",new A.V(Date.now(),0,!1).ab().af()],x.N,x.z),!1,!1,B.cK,null),$async$a7W)
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
cel(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cel=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Jf(),$async$cel)
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
return A.i($async$cel,v)},
O9(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$O9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cel(d),$async$O9)
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
case 5:n=C.hSO()
w=10
return A.b(C.Jf(),$async$O9)
case 10:s=f
J.aJ(s,n,A.H(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).ab().af(),"updatedAt",new A.V(Date.now(),0,!1).ab().af()],x.N,x.K))
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
for(s=J.dm(t),r=s.gdR(t),r=r.dn(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.J)(r),++n){m=r[n]
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
return A.b(A.c7(),$async$aqy)
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
return A.b(A.c7(),$async$b0K)
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
hSS(){var w,v=$.oo(),u=J.e2(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.he(u)},
aqB(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$aqB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c7(),$async$aqB)
case 3:if(!g){u=null
w=1
break}t=C.hSS()
w=4
return A.b(A.W6(),$async$aqB)
case 4:s=g
r=B.dQ.aM(B.Y.az(d.f2(),null))
r=B.cO.gcu().aM(r)
q=e?999:2
J.aJ(s,t,A.H(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).ab().af()],x.N,x.K))
w=5
return A.b(A.a7Y(s),$async$aqB)
case 5:p=e?999:2
u=new A.a17("NGMYFTSYNC2|"+t,t,p)
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
return A.b(A.W6(),$async$aqA)
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
try{r=B.c9.cF(0,B.cG.aM(t))
s=C.hny(r)}catch(f){q=A.ab(f)
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
hny(d){var w,v,u,t,s=null
try{w=B.Y.aS(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hSU(A.a3(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
h6E(d){var w=0,v=A.j(x.m),u,t,s
var $async$h6E=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aqA(t[1])
w=1
break}u=null
w=1
break}u=C.hny(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h6E,v)},
hSU(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.dd(v,x.f)
u=A.cE(u,new C.ceo(),u.$ti.k("M.E"),x.k)
t=A.a4(u).k("Y<M.E>")
s=A.C(new A.Y(u,new C.cep(),t),t.k("M.E"))}else s=A.a([],x._)
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
n=A.cE(n,new C.ceq(),n.$ti.k("M.E"),o)
k=A.a4(n).k("Y<M.E>")
j=A.C(new A.Y(n,new C.cer(),k),k.k("M.E"))
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
cex(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cex=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Be(d),$async$cex)
case 3:t=s.b7(f,new C.cey(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aZ(t,new C.cez())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cex,v)},
W7(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$W7=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.aqE(e,d),$async$W7)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.O9(e),$async$W7)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Be(e),$async$W7)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.cev(g))
r=A.C(t,t.$ti.k("M.E"))}t=J.a7(r)
if(t.gav(r)){u=null
w=1
break}t=t.dK(r,new C.cew(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.U(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Lw(e,o),$async$W7)
case 14:n=i
if(J.cI(n))q.n(0,o,n)
case 12:r.length===t||(0,A.J)(r),++p
w=11
break
case 13:u=new C.aqC(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$W7,v)},
b0P(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b0P=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.W7(d,e,f,g),$async$b0P)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.H8(A.KH(q.f2(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0P,v)},
b0O(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b0O=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.W7(d,e,f,g),$async$b0O)
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
W8(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$W8=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.h6E(a0),$async$W8)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aqy(g.a,d,e,f,s,r),$async$W8)
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
return A.b(C.bDm(e,j),$async$W8)
case 12:case 11:w=13
return A.b(C.ain(e,j,s),$async$W8)
case 13:h=n.h(0,i)
w=h!=null&&J.cI(h)?14:15
break
case 14:w=16
return A.b(C.Bp(e,i,h),$async$W8)
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
return A.i($async$W8,v)},
aqC:function aqC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cet:function cet(){},
ceu:function ceu(){},
ces:function ces(){},
ceo:function ceo(){},
cep:function cep(){},
ceq:function ceq(){},
cer:function cer(){},
cey:function cey(){},
cez:function cez(){},
cev:function cev(d){this.a=d},
cew:function cew(d){this.a=d},
hfu(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f3(null,x.H)
return A.hE(d,new C.aqD(w,e,g,i,f,h,null),!0,null,x.H)},
dga(d,e,f,g,h,i,j,k){return new C.bgc(i,e,k,j,g,f,h,d,null)},
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
e22:function e22(d){this.a=d},
e23:function e23(d,e,f){this.a=d
this.b=e
this.c=f},
e27:function e27(d,e){this.a=d
this.b=e},
e28:function e28(d){this.a=d},
e2_:function e2_(d){this.a=d},
e20:function e20(d,e){this.a=d
this.b=e},
e21:function e21(d,e){this.a=d
this.b=e},
e26:function e26(d){this.a=d},
e25:function e25(d,e){this.a=d
this.b=e},
e24:function e24(){},
e2a:function e2a(d){this.a=d},
e2b:function e2b(d,e){this.a=d
this.b=e},
e29:function e29(d,e){this.a=d
this.b=e},
dgC:function dgC(d,e,f,g,h){var _=this
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
a0g:function a0g(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aEK:function aEK(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e1V:function e1V(d,e){this.a=d
this.b=e},
e1W:function e1W(d){this.a=d},
e1X:function e1X(d){this.a=d},
e1Y:function e1Y(d){this.a=d},
e1Z:function e1Z(d){this.a=d},
a0h:function a0h(d){this.a=d},
blu:function blu(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e2c:function e2c(d,e){this.a=d
this.b=e},
b_j(d,e){return new C.b_i(d,e,null)},
b_i:function b_i(d,e,f){this.c=d
this.d=e
this.a=f},
ihI(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b2(d,11)},
ipb(d){return A.bT(B.L,null,new C.fWf(new C.uc(A.R(d).ax.a===B.J)),d,!0,!0,!0,null,!1,!1,x.N)},
hps(d,e){return new C.atH(e,d,null)},
aRK(d,e,f,g,h,i,j){var w=C.ihI(i)
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
dOv:function dOv(d){this.a=d},
dOw:function dOw(){},
dOx:function dOx(d,e){this.a=d
this.b=e},
bl9:function bl9(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fWf:function fWf(d){this.a=d},
fWe:function fWe(d,e){this.a=d
this.b=e},
fWd:function fWd(d,e){this.a=d
this.b=e},
fWc:function fWc(d,e){this.a=d
this.b=e},
atH:function atH(d,e,f){this.c=d
this.d=e
this.a=f},
cnR:function cnR(d,e){this.a=d
this.b=e},
aMM:function aMM(){},
ioX(d){var w=null
return A.cf(w,w,!0,w,new C.fVD(),d,w,!0,!0,x.e2)},
iq7(d,e,f,g,h){var w=null
return A.cf(w,w,!0,w,new C.h27(h,g,f,e),d,w,!0,!0,x.N)},
ioZ(d,e){var w=null
return A.cf(w,w,!0,w,new C.fVH(e),d,w,!0,!0,x.dY)},
ioY(d){var w=null
return A.cf(w,w,!0,w,new C.fVG(),d,w,!0,!0,x.c5)},
aUK:function aUK(d,e){this.a=d
this.b=e},
aUJ:function aUJ(d){this.a=d},
aSK:function aSK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fVD:function fVD(){},
h27:function h27(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fVH:function fVH(d){this.a=d},
fVG:function fVG(){},
ZV:function ZV(d,e){this.c=d
this.a=e},
azX:function azX(){var _=this
_.d=$
_.c=_.a=_.e=null},
d7R:function d7R(d){this.a=d},
d7S:function d7S(d){this.a=d},
d7Q:function d7Q(d,e){this.a=d
this.b=e},
d7T:function d7T(d){this.a=d},
d7U:function d7U(d){this.a=d},
ZU:function ZU(d){this.a=d},
azW:function azW(){this.d=$
this.c=this.a=null},
d7N:function d7N(d){this.a=d},
d7O:function d7O(d){this.a=d},
d7P:function d7P(d){this.a=d},
Zr:function Zr(d){this.a=d},
ayG:function ayG(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cGd:function cGd(){},
cGj:function cGj(d){this.a=d},
cGk:function cGk(d){this.a=d},
cGl:function cGl(d){this.a=d},
cGi:function cGi(){},
cGm:function cGm(d){this.a=d},
cGn:function cGn(d){this.a=d},
cGh:function cGh(){},
cGo:function cGo(d,e){this.a=d
this.b=e},
cGg:function cGg(d,e){this.a=d
this.b=e},
cGe:function cGe(d,e){this.a=d
this.b=e},
cGp:function cGp(d){this.a=d},
cGf:function cGf(){},
cGq:function cGq(d){this.a=d},
a23:function a23(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bxS:function bxS(){this.d=$
this.c=this.a=null},
fkW:function fkW(d,e){this.a=d
this.b=e},
fkX:function fkX(d){this.a=d},
fkY:function fkY(d,e){this.a=d
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
fkU:function fkU(d,e){this.a=d
this.b=e},
ayz:function ayz(d,e){this.c=d
this.a=e},
bxR:function bxR(d,e){var _=this
_.d=$
_.bx$=d
_.aa$=e
_.c=_.a=null},
fkV:function fkV(d){this.a=d},
bxP:function bxP(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aOS:function aOS(){},
aOT:function aOT(){},
bFl(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bh(u),s=B.o.F(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.p0(B.o.u(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fU2(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.V,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b_(B.o.u(s),2,"0")
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.YP(A.cQ(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aRl(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aRl=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hT().l8(85,1280,B.eN),$async$aRl)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fp(),$async$aRl)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hpr()
w=9
return A.b(C.cnQ(q,r),$async$aRl)
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
if(i){u=C.cnN(g)
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
return A.b(n.lb(),$async$aRI)
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
fU2:function fU2(){},
uc:function uc(d){this.a=d},
atG:function atG(d,e,f){this.c=d
this.d=e
this.a=f},
aGe:function aGe(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eTK:function eTK(d,e){this.a=d
this.b=e},
eTB:function eTB(d){this.a=d},
eTC:function eTC(d){this.a=d},
eTI:function eTI(d,e){this.a=d
this.b=e},
eTH:function eTH(d,e){this.a=d
this.b=e},
eTE:function eTE(d,e){this.a=d
this.b=e},
eTD:function eTD(d,e){this.a=d
this.b=e},
eTF:function eTF(d){this.a=d},
eTG:function eTG(d,e){this.a=d
this.b=e},
eTJ:function eTJ(d,e){this.a=d
this.b=e},
eTw:function eTw(d,e){this.a=d
this.b=e},
eTA:function eTA(d){this.a=d},
eTz:function eTz(d,e){this.a=d
this.b=e},
eTy:function eTy(d){this.a=d},
eTL:function eTL(d,e){this.a=d
this.b=e},
eTM:function eTM(d,e){this.a=d
this.b=e},
eTx:function eTx(d,e){this.a=d
this.b=e},
hCr(d,e,f){var w="thumbnailPath",v=e.ak()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.H(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).ab().af(),"project",v],x.N,x.z)},
fU3(d,e,f){var w=0,v=A.j(x.N),u
var $async$fU3=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.Y.az(C.hCr(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fU3,v)},
bFn(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bFn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fU3(!0,d,e),$async$bFn)
case 4:w=3
return A.b(r.atE(g,d,e.a),$async$bFn)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dQ.aM(B.Y.az(C.hCr(d,e,null),null))
u="NGMY_WS:"+B.kI.gcu().aM(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFn,v)},
htX(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hf5(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d2(s,"NGMYWSSYNC2|"))return!0
if(J.d2(s,"NGMY_WS:"))return!0
if(J.f1(s,t))return!0
if(J.d2(s,"{"))try{w=B.Y.aS(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
imQ(d){var w,v,u,t=C.htX(d)
if(t==null)return null
if(C.hf5(t))return t
w=B.a.cp(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b2(t,w))
if(C.hf5(v))return v}u=B.a.cp(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b2(t,u))
if(C.hf5(v))return v}return null},
hf4(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d2(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d2(q,"NGMY_WS:")){v=B.c9.cF(0,B.cG.aM(J.nl(q,8)))
w=t.a(B.Y.aS(0,v,r))}else w=t.a(B.Y.aS(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.h9h(A.a3(u,x.N,x.z))
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
if(s!=null&&B.a.i(s).length!==0){u=C.hf4(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hf4(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFm,v)},
hf3(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lA(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bET(){var w=0,v=A.j(x.o),u,t
var $async$bET=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Hl(),$async$bET)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hf4(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bET,v)},
hDs(d,e,f,g){return A.bT(B.L,null,new C.h1Y(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
h1Y:function h1Y(d,e,f){this.a=d
this.b=e
this.c=f},
aej:function aej(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eTO:function eTO(d,e){this.a=d
this.b=e},
eTP:function eTP(d,e){this.a=d
this.b=e},
eTQ:function eTQ(d,e){this.a=d
this.b=e},
eTR:function eTR(d,e){this.a=d
this.b=e},
eTN:function eTN(d){this.a=d},
atA:function atA(d,e,f){this.c=d
this.d=e
this.a=f},
bmR:function bmR(){var _=this
_.c=_.a=_.e=_.d=null},
eTr:function eTr(d,e){this.a=d
this.b=e},
eTs:function eTs(d){this.a=d},
eTt:function eTt(d){this.a=d},
atF:function atF(d){this.a=d},
aGd:function aGd(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eTv:function eTv(d){this.a=d},
eTu:function eTu(d){this.a=d},
hW7(d,e,f,g,h){return new C.OO(h,g,d,e,f,null)},
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
eUd:function eUd(){},
eU9:function eU9(d,e){this.a=d
this.b=e},
eUa:function eUa(d){this.a=d},
eTV:function eTV(d){this.a=d},
eTT:function eTT(d){this.a=d},
eTU:function eTU(d){this.a=d},
eU3:function eU3(d,e){this.a=d
this.b=e},
eU0:function eU0(d,e){this.a=d
this.b=e},
eU1:function eU1(d,e){this.a=d
this.b=e},
eU2:function eU2(d,e,f){this.a=d
this.b=e
this.c=f},
eTZ:function eTZ(d,e,f){this.a=d
this.b=e
this.c=f},
eTX:function eTX(d){this.a=d},
eTY:function eTY(d){this.a=d},
eU_:function eU_(d){this.a=d},
eUg:function eUg(d){this.a=d},
eUf:function eUf(d){this.a=d},
eUh:function eUh(d){this.a=d},
eUe:function eUe(d){this.a=d},
eTS:function eTS(d){this.a=d},
eTW:function eTW(d,e){this.a=d
this.b=e},
eUc:function eUc(d,e){this.a=d
this.b=e},
eUb:function eUb(d,e){this.a=d
this.b=e},
eU6:function eU6(d){this.a=d},
eU7:function eU7(d){this.a=d},
eU8:function eU8(d,e){this.a=d
this.b=e},
eU5:function eU5(d,e){this.a=d
this.b=e},
eU4:function eU4(d,e,f){this.a=d
this.b=e
this.c=f},
bzD:function bzD(){},
B3(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
agN(d,e,f){return C.ibb(d,e,f)},
ibb(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
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
agM(d,e){return C.iba(d,e)},
iba(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
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
i9Z(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Tt(u)
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
hJB(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aK(d.h(0,"price")),o=p==null?null:p
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
h9h(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.dd(s,x.f)
w=A.cE(w,new C.cFv(),w.$ti.k("M.E"),x.Q)
v=A.a4(w).k("Y<M.E>")
r=A.C(new A.Y(w,new C.cFw(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bj(J.k(t==null?"":t))
return new C.lA(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
if9(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.wn
case"female":case"f":return D.op
default:return D.yT}},
hyY(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hju(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.if9(v==null?j:J.k(v))
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
ifb(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Ov
case"viewer":return D.kV
default:return D.ux}},
ifc(d){switch(d.a){case 1:return"editor"
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
if(v===D.Ov)return!0
v=d.e
return new A.N(v,A.hfa(),A.T(v).k("N<1,m>")).q(0,w)},
iex(d){return J.dH(d,new C.fEp()).gJ(0)},
h2G(d){var w=0,v=A.j(x.y),u,t
var $async$h2G=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Be(d),$async$h2G)
case 3:u=t.rf(f,new C.h2H(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h2G,v)},
bDm(d,e){var w=0,v=A.j(x.H),u,t
var $async$bDm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Be(d),$async$bDm)
case 3:t=g
if(J.rf(t,new C.fC2(e))){w=1
break}if(C.iex(t)>=2)throw A.W(A.bc("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bDm,v)},
alL(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.dd(h,x.f)
w=A.cE(w,new C.bS3(),w.$ti.k("M.E"),x.P)
v=A.a4(w).k("Y<M.E>")
g=A.C(new A.Y(w,new C.bS4(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b7(u,new C.bS5(),x.N)
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
n=C.ifb(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aX(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cx)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gR(f)
if(l.b(i))m.push(A.a3(i,k,j))}return new C.kR(w,v,s,!r,t,g,q,p,o,n,m)},
hzc(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.aA(v,0,8)},
Ds(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$Ds=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Sl(d),$async$Ds)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$Ds)
case 4:t=f
w=5
return A.b(t.a72(0),$async$Ds)
case 5:w=6
return A.b(C.fsw(t,l),$async$Ds)
case 6:s=f
if(J.cI(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a7(q)
o=A.aT(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hux(o)
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
case 12:n=C.hux(m)
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
fsw(d,e){return C.i7m(d,e)},
i7m(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fsw=A.e(function(b0,b1){if(b0===1){s.push(b1)
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
break}k=C.h9h(A.a3(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aT(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.B3(a9)+"_"+n))
i=C.i9Z(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b41(h),$async$fsw)
case 17:g=b1
if(g!=null){i=i.Tt(g)
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
case 8:J.Su(q,new C.fsx())
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
return A.i($async$fsw,v)},
bDP(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bDP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Sl(d),$async$bDP)
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
hux(d){var w,v,u,t
try{w=B.Y.aS(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.dd(w,x.f)
v=A.cE(v,new C.foj(),v.$ti.k("M.E"),x.fA)
u=A.a4(v).k("Y<M.E>")
v=A.C(new A.Y(v,new C.fok(),u),u.k("M.E"))
B.d.aZ(v,new C.fol())
return v}catch(t){v=A.a([],x.D)
return v}},
p_(d,e){return C.ioO(d,e)},
ioO(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$p_=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Sl(b2),$async$p_)
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
o=J.b7(x.j.a(B.Y.aS(0,p,null)),new C.fVt(),a2).fL(0)
a2=J.b7(b3,new C.fVu(),a2).bZ(0,new C.fVv())
n=A.d4(a2,a2.$ti.k("M.E"))
a2=o,a2=A.dX(a2,a2.r,A.a4(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f1(n,m)?17:18
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
case 40:g=i.Tt(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.agM(r,"ngmy_worksheet_thumb_v3_"+C.B3(a8)+"_"+a4),$async$p_)
case 41:g=i.Tt(null)
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
break}a3=a2.eP(b3,new C.fVw(q))
a4=a3.$ti.k("cM<1,a8<m,@>>")
a7=A.C(new A.cM(a3,new C.fVx(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.agN(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.Y.az(a0,null)),$async$p_)
case 45:w=46
return A.b(J.hIH(r),$async$p_)
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
r=s.bj(t,new C.h2F(e))
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
J.nL(u,new C.fET(e))
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
j=A.cE(j,new C.fI1(),j.$ti.k("M.E"),x.k)
s=A.a4(j).k("Y<M.E>")
r=A.C(new A.Y(j,new C.fI2(),s),s.k("M.E"))
B.d.aZ(r,new C.fI3())
k=r}}catch(h){}w=4
return A.b(C.fp4(d),$async$Hc)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.i7K(k,p,d)
j=A.T(o)
s=j.k("N<1,a8<m,@>>")
s=A.C(new A.N(o,new C.fI4(),s),s.k("ak.E"))
n=B.Y.az(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Rw(d,o),$async$Hc)
case 7:case 6:j=j.k("Y<1>")
m=A.C(new A.Y(o,new C.fI5(d),j),j.k("M.E"))
if(m.length!==0)C.aQb(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Hc,v)},
fVf(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fVf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Rw(d,e),$async$fVf)
case 3:t=J.dH(e,new C.fVg(d))
s=A.C(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aQb(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fVf,v)},
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
m=A.cE(m,new C.h2A(),m.$ti.k("M.E"),x.k)
t=A.a4(m).k("Y<M.E>")
s=A.C(new A.Y(m,new C.h2B(),t),t.k("M.E"))
o=s}}catch(k){}q=J.qA(o,new C.h2C(e))
if(B.a.i(e.x).length===0&&C.uq(e,d)){m=B.a.i(d.toLowerCase())
p=e.aFO(e.y===D.kV?D.kV:D.ux,m)}else p=e
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
s=A.nv(t.eP(u,new C.fEA(e)))
t.bt(u,new C.fEB(e))
w=3
return A.b(C.Rw(d,u),$async$aQo)
case 3:w=s!=null&&C.aQs(s,d)?4:5
break
case 4:w=6
return A.b(C.fon(e),$async$aQo)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aQo,v)},
aiD(d){var w=d.f,v=A.T(w).k("Y<1>")
w=A.C(new A.Y(w,new C.h2L(),v),v.k("M.E"))
return w},
hcH(d,e){var w,v=d.f,u=A.nv(new A.Y(v,new C.fE4(e),A.T(v).k("Y<1>")))
v=C.aiD(d)
w=A.T(v).k("Y<1>")
v=A.C(new A.Y(v,new C.fE5(e,u),w),w.k("M.E"))
B.d.aZ(v,new C.fE6())
return v},
iff(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hDw(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bj(C.hcH(d,u),new C.h28(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
igN(d,e){var w
if(e==null||e.length===0)return 1
w=C.hcH(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fIR(),A.T(w).k("N<1,F>")).f1(0,B.xM)+1},
ioH(d){var w,v=C.aiD(d)
if(v.length===0)return null
w=new A.Y(v,new C.fV9(),A.T(v).k("Y<1>"))
if(!w.gav(0))return w.gH(0)
return B.d.gH(v)},
ifa(d){return A.H(["id",d.a,"name",d.b,"gender",C.hyY(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
igI(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.U(a0,x.P)
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
n=n!==D.yT?n:q.c
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
return a2.cP5(a1,w,a3.d,a2.y,s,a0,v)},
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
p=A.cE(p,new C.fHZ(),p.$ti.k("M.E"),x.k)
s=A.a4(p).k("Y<M.E>")
p=A.C(new A.Y(p,new C.fI_(),s),s.k("M.E"))
B.d.aZ(p,new C.fI0())
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
a6=a5?D.ux:D.kV
a7=C.Ha(b2,b3)
w=2
return A.b(C.Be(b1),$async$ain)
case 2:a8=b5
a9=J.cC(a8)
b0=a9.bj(a8,new C.fV4(b2))
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
i=i!==D.yT?i:l.c
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
k=a5?D.ux:D.kV
u=t.cP7(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Rw(b1,a8),$async$ain)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aQa(B.a.i(b3.toLowerCase()),u),$async$ain)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ain,v)},
huW(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).ab().af(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("N<1,a8<m,@>>"),k=A.C(new A.N(m,C.hCA(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.H(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.H(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.ab().af(),"updatedAt",o],r,x.K),"createdAt",s.ab().af(),"updatedAt",o],r,x.z)},
huX(d,e){var w=new A.V(Date.now(),0,!1).ab().af(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("N<1,a8<m,@>>")
u=A.C(new A.N(u,C.hCA(),t),t.k("ak.E"))
return A.H(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.ab().af(),"updatedAt",w],x.N,x.z)},
i5c(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a7(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.alL(A.a3(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hfa(),A.T(j).k("N<1,m>")).bZ(0,new C.foS())
t=A.C(j,j.$ti.k("M.E"))
if(u===v)s=D.ux
else s=B.d.q(t,u)?D.Ov:D.kV
return w.aFO(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.alL(A.a3(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.dd(q,h)
h=A.cE(h,new C.foT(),h.$ti.k("M.E"),x.P)
p=A.a4(h).k("Y<M.E>")
o=A.C(new A.Y(h,new C.foU(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b7(n,new C.foV(),x.N).bZ(0,new C.foW())
t=A.C(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.ux
else s=B.d.q(t,u)?D.Ov:D.kV
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
fp4(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fp4=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fp8()
h=x.N
g=x.z
w=7
return A.b(A.iJ(A.a([A.lE("family_trees","*",null,A.H(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bK),r.$2(A.lE("family_trees","*",A.H(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bK),"collaborator"),r.$2(A.lE("family_trees","*",null,A.H(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bK),"public")],x.cl),x.fO),$async$fp4)
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
h=A.cE(new A.b8(l,h),new C.fp5(a0),h.k("M.E"),x.k)
l=A.a4(h).k("Y<M.E>")
l=A.C(new A.Y(h,new C.fp6(),l),l.k("M.E"))
B.d.aZ(l,new C.fp7())
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
return A.i($async$fp4,v)},
i7K(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a7(e)
if(j.gav(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dK(e,new C.fte(),v).bZ(0,new C.ftf())
t=A.d4(u,u.$ti.k("M.E"))
s=A.U(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.J)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Ha(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kV){m=q.e
m=!new A.N(m,A.hfa(),A.T(m).k("N<1,m>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gag(e);j.C();){v=j.gR(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.igI(l,v)
o=C.Ha(k,w)
p=v.d
s.n(0,u,o===w?k.beO(p,D.ux):k.beO(p,v.y))}j=s.$ti.k("b8<2>")
j=A.C(new A.b8(s,j),j.k("M.E"))
B.d.aZ(j,new C.ftg())
return j},
Rw(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Rw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$Rw)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b7(e,new C.fw7(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aB("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.Y.az(s,null)),$async$Rw)
case 3:return A.h(null,v)}})
return A.i($async$Rw,v)},
aQa(d,e){return C.id1(d,e)},
id1(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aQa=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.m9("family_trees",A.a([C.huW(e,d)],p),null,B.cK),$async$aQa)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.m9("family_trees",A.a([C.huX(e,d)],p),null,B.cK),$async$aQa)
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
aQb(d,e){return C.id2(d,e)},
id2(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aQb=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("N<1,a8<m,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fBi(d),n),m)
r=l
w=7
return A.b(A.m9("family_trees",r,null,B.cK),$async$aQb)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fBj(d),n),m)
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
fon(d){return C.i4u(d)},
i4u(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fon=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.RW("family_trees",A.H(["id",d],x.N,x.z),null,B.cK),$async$fon)
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
return A.i($async$fon,v)},
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
cFy:function cFy(){},
cFx:function cFx(){},
cFv:function cFv(){},
cFw:function cFw(){},
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
fEp:function fEp(){},
h2H:function h2H(d){this.a=d},
fC2:function fC2(d){this.a=d},
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
bS7:function bS7(){},
bS6:function bS6(){},
bS3:function bS3(){},
bS4:function bS4(){},
bS5:function bS5(){},
fsx:function fsx(){},
foj:function foj(){},
fok:function fok(){},
fol:function fol(){},
fVt:function fVt(){},
fVu:function fVu(){},
fVv:function fVv(){},
fVw:function fVw(d){this.a=d},
fVx:function fVx(){},
h2F:function h2F(d){this.a=d},
fET:function fET(d){this.a=d},
fI1:function fI1(){},
fI2:function fI2(){},
fI3:function fI3(){},
fI4:function fI4(){},
fI5:function fI5(d){this.a=d},
fVg:function fVg(d){this.a=d},
h2A:function h2A(){},
h2B:function h2B(){},
h2C:function h2C(d){this.a=d},
fEA:function fEA(d){this.a=d},
fEB:function fEB(d){this.a=d},
h2L:function h2L(){},
fE4:function fE4(d){this.a=d},
fE5:function fE5(d,e){this.a=d
this.b=e},
fE6:function fE6(){},
h28:function h28(d){this.a=d},
fIR:function fIR(){},
fV9:function fV9(){},
fHZ:function fHZ(){},
fI_:function fI_(){},
fI0:function fI0(){},
fV4:function fV4(d){this.a=d},
foS:function foS(){},
foT:function foT(){},
foU:function foU(){},
foV:function foV(){},
foW:function foW(){},
fp8:function fp8(){},
fp9:function fp9(d){this.a=d},
fp5:function fp5(d){this.a=d},
fp6:function fp6(){},
fp7:function fp7(){},
fte:function fte(){},
ftf:function ftf(){},
ftg:function ftg(){},
fw7:function fw7(){},
fBi:function fBi(d){this.a=d},
fBj:function fBj(d){this.a=d},
cFz:function cFz(d,e){this.a=d
this.b=e},
cFA:function cFA(d,e){this.a=d
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
return v+" "+B.a.b_(B.o.u(w.gns()),2,"0")+":"+B.a.b_(B.o.u(w.gGG()),2,"0")},
hW4(){var w,v=$.oo(),u=J.e2(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"WS"+B.d.he(u)},
atB(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$atB=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c7(),$async$atB)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bK),$async$atB)
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
atC(d){return C.hW5(d)},
hW5(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$atC=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c7(),$async$atC)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_worksheet_project_qr_stashes_v1",A.H(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).ab().af()],x.N,x.z),!1,!1,B.cK,null),$async$atC)
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
return A.b(A.c7(),$async$atE)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hW4()
w=4
return A.b(C.atB(),$async$atE)
case 4:r=h
q=B.a.i(e)
p=B.dQ.aM(t)
J.aJ(r,s,A.H(["ownerEmail",q,"projectId",f,"payload",B.cO.gcu().aM(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).ab().af()],x.N,x.K))
w=5
return A.b(C.atC(r),$async$atE)
case 5:u=new A.a17("NGMYWSSYNC2|"+s,s,25)
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
return A.b(A.c7(),$async$atD)
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
try{s=B.c9.cF(0,B.cG.aM(t))}catch(h){r=A.ab(h)
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
hpr(){var w=new A.V(Date.now(),0,!1).ab()
return"wst_"+(1000*w.a+w.b)+"_"+B.cM.aw(999999)},
hW6(d){var w,v,u,t,s,r,q
try{w=A.ahf(d)
if(w==null)return d
v=w
if(J.M2(v)>960||J.M1(v)>960){s=v
r=J.M2(v)>=J.M1(v)?960:null
v=A.ahc(s,J.M1(v)>J.M2(v)?960:null,B.PV,r)}s=v
u=A.an5(82).TR(s,B.zx)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cb(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
cnQ(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cnQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hW6(e)
$.cnM.n(0,s,t)
u=C.bFp(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cnQ,v)},
b41(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b41=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d2(l,"data:image")){u=null
w=1
break}t=4
r=J.f1(l,",")?B.d.gal(J.lI(l,",")):l
q=B.cG.aM(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hpr()
w=7
return A.b(C.cnQ(p,q),$async$b41)
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
cnN(d){var w=0,v=A.j(x.T),u,t,s
var $async$cnN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(N.cnP(s),$async$cnN)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cO.gcu().aM(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cnN,v)},
a9e(d){var w=0,v=A.j(x.H),u,t
var $async$a9e=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=N.hCs(d)
if(t==null){w=1
break}$.cnM.W(0,t)
w=3
return A.b(C.bFo(t),$async$a9e)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a9e,v)},
bFp(d,e){return C.imT(d,e)},
imT(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bFp=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aP4
w=7
return A.b(n==null?$.aP4=N.hbz():n,$async$bFp)
case 7:r=g
q=new Uint8Array(A.cb(e))
p=J.mY(r,"thumbs","readwrite")
B.j6.mx(J.mX(p,"thumbs"),q,l)
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
bFo(d){return C.imR(d)},
imR(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bFo=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aP4
w=7
return A.b(o==null?$.aP4=N.hbz():o,$async$bFo)
case 7:r=f
q=J.mY(r,"thumbs","readwrite")
B.j6.Gg(J.mX(q,"thumbs"),m)
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
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bj6(),f=h.x!=null&&h.zF(i).length===0
if(h.x!=null)w=f?B.b2:B.bC
else w=h.gUw()?B.bC:B.e0
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.n(22)
t=A.L(D.boa,B.r,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.f7y,B.f,i,i,new A.o(B.b2.j(0.12),i,i,A.n(999),i,i,B.n),i,i,i,i,B.h9,i,i,i),B.X,D.fDe,B.aw,A.d(C.xd(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fyU,i,i,i)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,D.b6B,i,i,i,i,B.a0b,i,i,i)
q=A.n(16)
p=A.L(B.aO,B.r,1)
o=A.L(B.b2.j(0.28),B.r,1)
n=A.hdJ(h.d)
o=A.p(B.A,C.b_j(A.fLb(h.e,n),30),B.f,i,i,new A.o(B.m5,i,o,i,i,i,B.a7),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fu_,B.K,i,i)
m=A.n(14)
l=A.L(B.aO,B.r,1)
q=A.p(i,A.x(A.a([o,B.P,n,B.bG,D.fDx,B.af,A.p(i,A.x(A.a([D.fTz,B.bG,A.d(A.Bg(h.c),i,i,i,i,i,i,D.foJ,i,i,i)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fl,i,i,1/0)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aQ,i,p,q,i,i,B.n),i,i,i,i,O.alt,i,i,i)
p=A.n(16)
m=A.L(B.aO,B.r,1)
l=j.aSO("Original due",C.xd(h.r,!1))
n=j.aSO("Current due",C.xd(h.f,!1))
o=w.j(0.1)
k=A.n(12)
p=A.a([q,B.X,A.p(i,A.x(A.a([l,B.P,n,B.X,A.p(i,A.d(h.gaMS(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.C5,i,i,1/0),B.X,j.cjW(),B.P,j.c6K(g,f)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bh,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.n(14)
n=A.L(B.aO,B.r,1)
B.d.v(p,A.a([B.X,A.p(i,A.x(A.a([D.fEv,B.aw,A.d(q,i,i,i,i,i,i,D.ftd,i,i,i)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aQ,i,n,o,i,i,B.n),i,i,i,i,B.bh,i,i,1/0)],s))}if(h.gaHt()){q=A.n(14)
o=A.L(B.cr,B.r,1.6)
B.d.v(p,A.a([B.X,A.p(i,A.x(A.a([D.fUU,B.P,A.bx(A.n(12),A.e8(new A.a5(1/0,88,A.b4(i,i,i,new A.WT(h.ax,B.R,D.fck,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.GE,i,i,i)],s))}p.push(B.aC)
p.push(D.fMN)
return A.p(i,A.x(A.a([r,new A.D(B.a0_,A.x(p,B.al,i,B.e,B.i,0,B.p),i)],s),B.al,i,B.e,B.O,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aSO(d,e){var w=null
return A.A(A.a([A.E(A.d(d,w,w,w,w,w,w,D.ab3,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fpM,w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)},
cjW(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.aag(B.e0,u,"Not paid yet")
w=t.zF(null).length
v=w===0?B.b2:B.bC
return this.aag(v,u,C.xd(t.x,!0))},
c6K(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.aag(B.b2,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.aag(B.b2,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.ab3,u,u,u)
v=A.T(d).k("N<1,h0>")
v=A.C(new A.N(d,new C.c7m(),v),v.k("ak.E"))
return A.x(A.a([w,B.an,A.bW(B.bH,v,B.bt,u,6,6)],x.p),B.E,u,B.e,B.i,0,B.p)},
aag(d,e,f){var w=null
return A.A(A.a([A.E(A.d(e,w,w,w,w,w,w,D.ab3,w,w,w),1),new A.dp(1,B.co,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dX,w,w),w)],x.p),B.E,w,B.e,B.i,0,w,w)}}
C.bcv.prototype={
a4(d,e){new A.WT(this.b,B.R,e,!0,3.5,null).a4(d,e)},
aC(d){return d.b!==this.b}}
C.apu.prototype={
S(){return new C.aEd(A.a([],x.bp))},
ge3(){return this.c}}
C.aEd.prototype={
Y(){this.a3()
this.Jb()},
Jb(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Jb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a2V(t.a.c),$async$Jb)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dPn(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Jb,v)},
aUL(d,e){var w,v=null,u=this.a.d.a,t=u?B.R:B.aQ,s=A.l(v,v,u?B.bv:B.bo,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.n(10)
u=(this.a.d.a?B.bv:B.bo).j(0.22)
w=A.n(10)
return A.bs(v,new A.b6(4,r,new A.ay(u,1,B.r,-1)),v,B.bh,v,v,v,v,!0,new A.b6(4,w,new A.ay((this.a.d.a?B.bv:B.bo).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.n(10),D.b4f),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aUK(d){return this.aUL(d,null)},
Q_(d){return this.cnz(d)},
cnz(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Q_=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.HW:B.eN
w=7
return A.b(new A.hT().CD(72,900,900,n),$async$Q_)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fp(),$async$Q_)
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
return A.i($async$Q_,v)},
b2R(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.R:B.aQ,o=A.n(10),n=A.L((q?B.bv:B.bo).j(0.18),B.r,1)
if(d)q=B.cS
else q=s.a.d.a?B.bv:B.bo
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aQ:B.av,r,r,r,r,r,r,r,r,12.5,r,r,B.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cS
else u=s.a.d.a?B.bv:B.bo
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.i,0,B.p),1)
v=A.fu(r,r,r,r,r,r,r,r,r,r,r,B.cS,r,r,r,r,r,r,r,r,r,r,r,r,r,B.ce)
q=A.a([q,B.ae,u,A.bM(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aG(r,r,r,r,A.X(B.cz,s.a.d.a?B.bv:B.bo,r,r,r,18),r,r,r,g,r,r,r,r,r,B.ce))
return A.p(r,A.A(q,B.m,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jD,D.bB_,r,r,r)},
Dz(d){return this.bDg(d)},
bDf(){return this.Dz(null)},
bDg(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Dz=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
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
i=a3?null:A.hdJ(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.wX?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hZ(B.w.j(0.55),!0,"Dismiss",a4,new C.dP6(),new C.dP7(a2,t,a5,r,new C.dP8(a2,t),o,n,j),B.eJ,!0,x.y),$async$Dz)
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
break}if(f.length===0||e<=0){t.c.L(x.q).f.U(D.fiQ)
w=1
break}a0=a2.d
if(a0==null){t.c.L(x.q).f.U(D.fhv)
w=1
break}a1=A.fLb(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.wX?"male":"female"
w=7
return A.b(A.aiC(a3,A.hm8(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$Dz)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.wX?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a9(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c1(a3.gcl(),a3.gcg(),a3.gcw(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c1(a4.gcl(),a4.gcg(),a4.gcw(),0,0,0,0,0)))a5.cRs(a2.a)
w=8
return A.b(A.aiC(t.a.c,a5),$async$Dz)
case 8:case 5:w=9
return A.b(t.Jb(),$async$Dz)
case 9:case 1:return A.h(u,v)}})
return A.i($async$Dz,v)},
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
return A.aI(!1,B.a3,!0,v,A.aO(!1,u,!0,A.p(p,A.A(A.a([r,B.bn,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.ba,B.i,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bU,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.aj)},
SO(d){return this.cFp(d)},
cFp(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$SO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hZ(B.w.j(0.55),!0,"Dismiss",s,new C.dPq(),new C.dPr(t,d),B.h8,!0,x.y),$async$SO)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.aiC(t.a.c,d),$async$SO)
case 7:w=8
return A.b(t.Jb(),$async$SO)
case 8:case 1:return A.h(u,v)}})
return A.i($async$SO,v)},
PZ(d,e){return this.bO7(0,e)},
bO7(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$PZ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lm(s,"Cancel","Delete",e.b+" \xb7 "+A.Bg(e.c)+" will be removed from this device.","Delete this debt?"),$async$PZ)
case 3:if(!g){w=1
break}w=4
return A.b(C.fEH(t.a.c,e.a),$async$PZ)
case 4:w=5
return A.b(t.Jb(),$async$PZ)
case 5:case 1:return A.h(u,v)}})
return A.i($async$PZ,v)},
ag3(d){return this.chl(d)},
chl(d){var w=0,v=A.j(x.H),u=this,t
var $async$ag3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bT(B.L,null,new C.dPk(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$ag3)
case 2:return A.h(null,v)}})
return A.i($async$ag3,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.eqK
w=J.dH(m.d,new C.dPs())
v=A.C(w,w.$ti.k("M.E"))
w=J.dH(m.d,new C.dPt())
u=A.C(w,w.$ti.k("M.E"))
t=B.d.cH(v,0,new C.dPu())
w=A.n(18)
s=m.a.d.a
r=s?D.cAE:D.aCl
q=A.L(s?B.cS.j(0.35):B.cS.j(0.18),B.r,1)
s=A.p(l,D.c1u,B.f,l,l,new A.o(B.cS.j(m.a.d.a?0.28:0.14),l,l,A.n(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.at,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.av,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aI(!1,B.a3,!0,A.n(12),A.aO(!1,A.n(12),!0,D.eq5,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dPv(m),l,l,l,l,l,l,l),B.f,B.cS,0,l,l,l,l,l,B.aj)],p),B.m,l,B.e,B.i,0,l,l)
o=A.E(m.cBv("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Bg(t)
r=A.a([A.p(l,A.x(A.a([s,B.af,A.A(A.a([o,B.ae,A.E(m.b9_(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.i,0,l,l)],p),B.E,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a9(B.aA,B.aF,B.x,r,l,l),B.n),l,l,l,l,B.alq,l,l,l),B.aC],p)
if(J.cq(m.d)){w=m.a.d.a
s=w?B.e8:B.c
q=A.n(18)
o=A.L((w?B.bv:B.bo).j(0.12),B.r,1)
n=A.p(l,D.bXh,B.f,l,l,new A.o(B.cS.j(0.12),l,l,A.n(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.av,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.p(l,A.x(A.a([n,B.af,w,B.aw,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bv:B.bo,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.m,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bDA,l,l,1/0))}else{w=m.gcmQ()
s=A.C(new A.N(v,w,A.T(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.an,new A.D(D.bFg,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bv:B.bo,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.N(u,w,A.T(u).k("N<1,v>")))
B.d.v(s,q)}B.d.v(r,s)}return A.x(r,B.al,l,B.e,B.i,0,B.p)},
b9_(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.n(14),r=A.L((v.a.d.a?B.bv:B.bo).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bv:B.bo,u,u,u,u,u,u,u,u,11,u,u,B.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cS
else w=v.a.d.a?B.aQ:B.av
return A.p(u,A.x(A.a([q,B.bG,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.i,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.eD,u,u,u)},
cBv(d,e){return this.b9_(!1,d,e)},
cmR(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zF(j).length,h=d.bim()
if(d.x!=null){w=d.zF(j).length
v=w===0?B.cS:B.bC}else if(d.gUw())v=B.bC
else{if(h)w=B.cS
else w=k.a.d.a?B.bv:B.bo
v=w}if(d.x!=null){w=d.zF(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xd(u,!1)}else{u.toString
t="Paid "+C.xd(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xd(w,!1)+" \xb7 "+i+" missed":"Due "+C.xd(w,!1)}w=k.a.d.a?B.e8:B.c
u=A.n(18)
if(d.gUw()&&d.x==null)s=B.bC.j(0.35)
else s=(k.a.d.a?B.bv:B.bo).j(0.12)
s=A.L(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cL,12)],x.V)
q=A.n(18)
p=k.a.d.a?B.bp:B.m5
o=A.L(d.gUw()&&d.x==null?B.bC.j(0.45):B.cS.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hdJ(d.d)
o=A.p(B.A,A.da(C.b_j(A.fLb(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a7),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aQ:B.av
m=x.p
n=A.a([new A.dp(1,B.co,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaHt())B.d.v(n,A.a([B.e1,A.X(B.OX,B.cS.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.m,j,B.e,B.i,0,j,j),B.cU,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.V,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.i,0,B.p),1)
n=A.Bg(d.c)
l=k.a.d.a?B.aQ:B.av
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aI(!1,B.a3,!0,j,A.aO(!1,q,!0,new A.D(A5.ald,A.A(A.a([o,B.be,p,B.ae,A.x(A.a([n,B.bG,A.X(B.eG,(k.a.d.a?B.bv:B.bo).j(0.5),j,j,j,18)],m),B.dK,j,B.e,B.i,0,B.p)],m),B.m,j,B.e,B.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dPm(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.aj),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d3,j,j,j,j)}}
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
n.push(A.aA(a0,A.p(a0,A.X(B.cz,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a7),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
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
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.ayu,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.GV,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.eH(m,A.A(l,B.m,a0,B.e,B.O,0,a0,a0),B.f,B.e5)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bAa,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cF:B.bq,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fG,A.x(a2,u,a0,B.e,B.O,0,B.p),a0),1))
n.push(D.fd8)
a2=A.a([A.A(n,B.m,a0,B.e,B.i,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.wd,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a9(B.a6,B.a9,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lK,A.x(a2,B.m,a0,B.e,B.O,0,B.p),a0)
if(a1.z){a2=A.n(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.L(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hq,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a9(B.aA,B.aF,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bBs,a0,a0,a0,a0)}}
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
if(p.z)o.push(new A.D(B.un,n,q))
return new A.D(B.d3,A.x(o,B.m,q,B.e,B.O,0,B.p),q)}}
C.TL.prototype={
S(){return new C.bg7()}}
C.bg7.prototype={
gc1A(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aH(d,n,x.w).w,l=x.p,k=A.a([D.eqF,D.eqL],l)
for(w=0;w<8;++w){v=D.a4p[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.HI:B.zf
q=t===s
r=A.X(r,q?B.eI:B.bV,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bn,A.d(v.b,n,n,n,n,n,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.ae,new A.by(1,B.bc,A.d(v.c,n,1,B.a2,n,n,n,B.AH,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.ay(B.eI,2,B.r,-1)
s=new A.o(n,n,new A.bG(p,p,p,p),new A.bg(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aA(n,new A.D(B.eL,A.x(A.a([new A.D(B.mQ,new A.c6(B.aL,B.e,B.i,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.dx(!0,new C.aly(v,q.d,q.e,new C.df8(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.i,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.df9(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bBN,A.bH(D.h_q,n,new C.dfa(o,d),A.bn(B.b8,n,n,n,n,B.oQ,n,n,new A.b9(A.n(16),B.a1),n,n,n)),n))
return A.bm(!0,new A.cR(new A.aZ(0,1/0,0,m.a.b*0.9),A.cj(k,n,n,D.bG8,n,n,B.ai,!0),n),!0,!1,B.ag,!0,!0)}}
C.nr.prototype={
ak(){var w=this
return A.H(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.ab().af()],x.N,x.z)},
bf_(d,e,f){return new C.nr(this.a,e,d,f)}}
C.Ii.prototype={
wT(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Ii(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aFC(d){var w=null
return this.wT(w,w,w,w,w,d,w,w,w,w,w,w)},
cN3(d){var w=null
return this.wT(w,w,w,w,d,w,w,w,w,w,w,w)},
beY(d,e,f){var w=null
return this.wT(d,w,w,w,w,w,w,w,e,w,f,w)},
cNI(d){var w=null
return this.wT(w,w,w,w,w,w,d,w,w,w,w,w)},
cNR(d){var w=null
return this.wT(w,w,w,w,w,w,w,w,w,d,w,w)},
cN1(d){var w=null
return this.wT(w,w,w,d,w,w,w,w,w,w,w,w)},
cNT(d){var w=null
return this.wT(w,w,w,w,w,w,w,w,w,w,w,d)},
cMZ(d){var w=null
return this.wT(w,w,d,w,w,w,w,w,w,w,w,w)},
cMU(d){var w=null
return this.wT(w,d,w,w,w,w,w,w,w,w,w,w)},
G9(d){var w=null
return this.wT(w,w,w,w,w,w,w,d,w,w,w,w)},
cO0(d,e,f,g,h,i,j,k,l,m,n){return this.wT(d,e,f,g,null,h,i,j,k,l,m,n)},
ak(){var w=this
return A.H(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cKy(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bQP(d),k=A.aK(d.h(0,"emblem")),j=k==null?o:B.k.M(k),i=A.aK(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.DE.geu(D.DE))
s=i==null?o:B.k.F(i,18,36)
r=l.$2("position",D.a66)
q=l.$2("frame",D.a5r)
l=l.$2("texture",D.a5n)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cO0(p,u,t,q,r,A.r9(d.h(0,"ribbon"))?A.GM(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a_i.prototype={
S(){return new C.aBc(A.a([],x.I),D.Ou)},
ge3(){return this.c}}
C.aBc.prototype={
Y(){var w,v=this
v.a3()
v.f=A.A7(0,1)
w=$.aw()
v.z=new A.au(B.au,w)
v.Q=new A.au(B.au,w)
v.lg()
w=v.a
C.bDL(w.c,w.d).bJ(new C.dfP(v),x.fL)},
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
lg(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$lg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Lw(s.c,s.d),$async$lg)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dfD(t,r))
t.axm()
case 1:return A.h(u,v)}})
return A.i($async$lg,v)},
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
cfM(d){this.m(new C.dfA(this,d))
this.axm()},
NV(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$NV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nr(B.o.u(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aS5(r.c,r.d,s),$async$NV)
case 3:w=4
return A.b(t.lg(),$async$NV)
case 4:if(t.c==null||J.cq(t.d)){w=1
break}q=J.qA(t.d,new C.dfb(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.dfc(t,p))
t.axm()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.BD(p+1,B.cw,B.kR),$async$NV)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$NV,v)},
Bj(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Bj=A.e(function(d,e){if(d===1)return A.f(e,v)
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
return A.b(C.aS5(o.c,o.d,new C.nr(s,r,q,new A.V(p,0,!1))),$async$Bj)
case 3:w=4
return A.b(t.lg(),$async$Bj)
case 4:if(t.c==null){w=1
break}t.m(new C.dfE(t))
case 1:return A.h(u,v)}})
return A.i($async$Bj,v)},
OB(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gatX()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dfk(r),s,null,!0,!0,x.y),$async$OB)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bDw(s.c,s.d,r.a),$async$OB)
case 4:t.m(new C.dfl(t))
w=5
return A.b(t.lg(),$async$OB)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.Uz(B.o.F(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$OB,v)},
z0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$z0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bj(),$async$z0)
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
return A.b(C.RN(s,r.r,o,p,q),$async$z0)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hD4(s,r.x,r.r),$async$z0)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Lw(s.c,s.d),$async$z0)
case 10:l=e
for(s=n.d,r=J.cC(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.I(l,new C.nr(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Bp(r.c,r.d,l),$async$z0)
case 11:w=12
return A.b(t.lg(),$async$z0)
case 12:r=t.c
if(r==null){w=1
break}r.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$z0,v)},
a1k(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1k=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bj(),$async$a1k)
case 5:case 4:if(t.c==null){w=1
break}s=t.gyZ(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dO(D.zI,new C.dfB(t),new C.dfC())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.mL("Our Family",o,"",""))
for(o=J.aX(t.d);o.C();){n=o.gR(o)
p.push(new H.mL(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hfq(o,new H.rI(s,r,"",p,new H.uY(q.d,null,null,null,null,"","","")),null),$async$a1k)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a1k,v)},
Oj(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Oj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bj(),$async$Oj)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bT(D.aga,null,new C.dfg(t),s,!0,!0,!0,K.a9d,!1,!1,x.N),$async$Oj)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cN3(r)
t.m(new C.dfh(t,q))
s=t.a
w=7
return A.b(C.So(s.c,s.d,q),$async$Oj)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Oj,v)},
XN(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bT(D.aga,null,new C.dfm(t),r,!0,!0,!0,K.a9d,!1,!1,x.e),$async$XN)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dfn(t,s))
r=t.a
w=4
return A.b(C.So(r.c,r.d,s),$async$XN)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.BD(0,B.dW,B.nw)
case 1:return A.h(u,v)}})
return A.i($async$XN,v)},
bTL(d){var w=d.bT(),v=B.a.b_(B.o.u(w.gcg()),2,"0"),u=B.a.b_(B.o.u(w.gcw()),2,"0")
return""+w.gcl()+"-"+v+"-"+u},
gyZ(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c0O()
if(r.e)w=D.aeT
else if(J.cq(r.d)){w=r.y
v=r.gyZ(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fo3,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.D(X.amt,new C.ZA(w,v,0,q),q),q),B.by,t,B.an,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kM.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.by],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aA(q,A.p(q,D.f7k,B.f,q,q,new A.o(q,q,q,A.n(18),A.a([new A.ac(0,B.G,B.dJ.j(0.45),B.I,18)],x.V),E.wP,B.n),q,q,q,q,B.Oa,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcJz(),q,q,q,q,q,q,!1,B.a4))
w.push(B.X)
w.push(A.ho(D.bTr,D.fZS,r.gaOy(),q))
B.d.v(u,w)}w=A.at(A.cg(A.x(u,B.m,q,B.e,B.O,0,B.p),B.t,q,B.y,q,B.ex,q,q,B.ai),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kM.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.V,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dU:B.Be
u=A.x(A.a([new A.D(D.bCR,w,q),A.E(A.JG(v,new C.dfN(r),J.ad(r.d)+1,q,r.gcfL(),u,B.aL),1),r.bGa()],x.p),B.m,q,B.e,B.i,0,B.p)
w=u}v=x.p
return A.c5(q,D.YV,new A.an(B.a0,q,B.b4,B.t,A.a([D.aPK,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c0O(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cI(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.KE(B.e9,"AI",h.gbE2(),!0))
if(h.a.f)f.push(new C.KE(B.mf,"Cover",h.gbOH(),!1))
if(h.a.f)f.push(new C.KE(B.wJ,"Header",h.gbJH(),!1))
if(J.cI(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.KE(B.uO,"Print",h.gcoT(),!1))
if(h.a.f&&J.cI(h.d)&&h.r>=0){v=h.w
u=v?B.hF:B.j2
t=v?"Save":"Edit"
f.push(new C.KE(u,t,v?h.gcvb():new C.dfx(h),!1))}if(h.a.f)f.push(new C.KE(B.hU,"Add page",h.gaOy(),!1))
v=C.hyX(h.y.Q)
u=h.gyZ(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.J)(f),++m){l=f[m]
if(l.d)k=D.dFp
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.kn.j(0.5),1,B.r,-1)
j=A.p(g,A.X(l.a,D.kM,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bG(i,i,i,i),new A.bg(k,k,k,k),g,new A.a9(B.a6,B.a9,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kM.j(0.85)
p.push(new A.by(1,B.bc,A.aA(B.c5,A.x(A.a([k,B.bG,A.d(l.b,g,1,g,g,g,g,new A.G(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.m,g,B.e,B.O,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.aly(v,u,t+" \xb7 "+s+" "+r,new C.dfy(h),A.A(p,B.m,g,B.e,B.i,0,g,g),g)},
Ak(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ak=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bj(),$async$Ak)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aX(t.d);r.C();){q=r.gR(r)
s.push(q.b+" "+q.c)}p=H.a39(B.d.aO(s," "))
s=t.c
s.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.dfd(t,p),s,null,!0,!0,x.N),$async$Ak)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.z0(),$async$Ak)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Ea(),$async$Ak)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.FN("Swahili (Kiswahili)",!0),$async$Ak)
case 18:w=16
break
case 17:w=19
return A.b(t.cG2(o==="sw"?"Swahili (Kiswahili)":"English"),$async$Ak)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$Ak,v)},
ZI(d,e,f,g,h){var w=null,v=A.n(16),u=B.c.j(0.07),t=A.n(16),s=A.L(E.kn.j(0.3),B.r,1),r=x.p
return new A.D(B.cv,A.aO(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.wP,B.a7),w,42,w,w,w,w,w,42),B.be,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A2.Kw,w,w,w),A.d(g,w,w,w,w,w,w,B.AI,w,w,w)],r),B.E,w,B.e,B.i,0,B.p),1)],r),B.m,w,B.e,B.i,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bh,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dfz(d,h),w,w,w,w,w,w,w),w)},
Ea(){return this.bTe()},
bTe(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Ea=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dfq(r),a7,null,!0,!0,x.ei),$async$Ea)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.ez("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.cf(null,null,!1,null,new C.dfr(o),a7,null,!0,!0,x.H).fv(new C.dfs(a6))
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
for(a1=0;a1<8;++a1){i=D.zI[a1]
J.c8(j,i.a)}w=8
return A.b(C.ahL(a0,a7,new C.dft(o),d,l,e,j),$async$Ea)
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
l.sib($.aw())
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
return A.b(C.Bp(j.c,j.d,l),$async$Ea)
case 11:w=12
return A.b(r.lg(),$async$Ea)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.zI[a1].a)
a5=l.cKy(j,12,a7)
l=r.a
w=15
return A.b(C.So(l.c,l.d,a5),$async$Ea)
case 15:if(r.c!=null)r.m(new C.dfu(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.BD(0,B.dW,B.nw)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.L(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b3(a3?A.czk("Undo",new C.dfv(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.eh,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ea,v)},
FN(d,e){return this.cG3(d,e)},
cG2(d){return this.FN(d,!1)},
cG3(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$FN=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.ez("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.cf(null,null,!1,null,new C.dfG(a0),k,null,!0,!0,x.H).fv(new C.dfH(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.J)(k),++i){n=k[i]
J.c8(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a3m(m,new C.dfI(a0)),$async$FN)
case 10:w=8
break
case 9:w=11
return A.b(C.bFf(new C.dfJ(a0),m,a2),$async$FN)
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
o.sib($.aw())
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
return A.b(C.Bp(k.c,k.d,o),$async$FN)
case 12:w=13
return A.b(r.lg(),$async$FN)
case 13:o=r.c
if(o==null){w=1
break}o=o.L(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(A.czk("Undo",new C.dfK(r,d),null),null,null,null,null,B.t,null,k,null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$FN,v)},
bGa(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dfe(v):u
r=A.aG(u,u,u,u,A.X(D.bP6,s?D.kM:B.aW,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cI(v.d)&&!v.w&&v.r>=0)s=A.ho(A.X(B.ws,B.Gh,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.Gh,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbOh(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kM.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.at(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dff(v):u
return A.bm(!0,new A.D(D.bCF,A.A(A.a([r,s,A.aG(u,u,u,u,A.X(B.eG,t<J.ad(v.d)?D.kM:B.aW,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.i,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a_m.prototype={
S(){return new C.bgw(new A.au(B.au,$.aw()))}}
C.bgw.prototype={
ga2s(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
gbRS(){switch(this.ga2s()){case"cover":var w=D.d70
break
case"book":w=D.d2n
break
default:w=D.dy0
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.n(26),n=E.kn.j(0.5),m=x.p,l=A.A(A.a([D.dFq,B.at,D.bIq,A.aG(p,p,p,p,B.ln,p,p,p,new C.dhA(d),p,p,p,p,p,p)],m),B.m,p,B.e,B.i,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.js(p,p,p,A.d("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dhB(q),q.ga2s()==="page",p,p,p,p))
if(q.a.d)k.push(A.js(p,p,p,D.fUp,p,new C.dhC(q),q.ga2s()==="book",p,p,p,p))
k.push(A.js(p,p,p,D.fHc,p,new C.dhD(q),q.ga2s()==="cover",p,p,p,p))
k=A.bW(B.bH,k,B.bt,p,6,8)
j=B.c.j(0.07)
j=A.aM(p,B.Z,!1,p,!0,B.t,p,A.aN(),q.d,p,p,p,p,p,2,A.bs(p,new A.b6(4,A.n(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kE,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ab,p,p,p,p,p,p,p,p,p,p,p,B.dh,!0,B.a5,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbRS(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.d(s,p,p,p,p,p,p,B.Kt,p,p,p)
w.push(A.mZ(p,B.c.j(0.08),r,B.hh,new C.dhE(q,s),p,p,p,p))}return A.eR(p,E.BJ,A.cg(A.x(A.a([l,B.X,D.fXJ,B.an,k,B.af,j,B.P,A.bW(B.bH,w,B.bt,p,6,6),B.aC,A.dh(D.bTo,D.fYw,new C.dhF(q,d),A.bn(B.b8,p,p,p,p,B.oQ,p,p,new A.b9(A.n(16),B.a1),p,p,p)),B.aw,D.fSE],m),B.E,p,B.e,B.O,0,B.p),B.t,p,B.y,p,B.fr,p,p,B.ai),p,p,p,D.ama,B.da,p,new A.b9(o,new A.ay(n,1.4,B.r,-1)),p)}}
C.a_k.prototype={
S(){return new C.aBf(A.a([],x.gA))},
ge3(){return this.c}}
C.afu.prototype={}
C.aBf.prototype={
Y(){this.a3()
this.lg()},
lg(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.RS(p.c,p.d),$async$lg)
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
return A.b(C.bDL(r.c,q),$async$lg)
case 6:j=e
i=J
w=7
return A.b(C.Lw(t.a.c,q),$async$lg)
case 7:m.push(new l.afu(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.dg3(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lg,v)},
bag(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
QL(d,e){return this.chj(0,e)},
chj(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$QL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).cd(A.eb(new C.dg2(u,e),!0,null,x.y)),$async$QL)
case 2:t=g
w=3
return A.b(u.lg(),$async$QL)
case 3:if(t===!0&&u.c!=null)u.c.L(x.q).f.U(D.aTy)
return A.h(null,v)}})
return A.i($async$QL,v)},
FP(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$FP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.L(x.q).f.U(D.aTu)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ah4(s.c,s.d),$async$FP)
case 5:q=e
w=6
return A.b(t.lg(),$async$FP)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.QL(0,B.d.fe(t.d,new C.dg7(q))),$async$FP)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.RN(p,s.f,r,n,o),$async$FP)
case 10:m=e
w=11
return A.b(t.lg(),$async$FP)
case 11:if(m&&t.c!=null)t.c.L(x.q).f.U(D.aTy)
case 1:return A.h(u,v)}})
return A.i($async$FP,v)},
Qc(d,e){return this.csT(0,e)},
csT(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dg6(t,e),s,null,!0,!0,x.y),$async$Qc)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a3y(s.c,s.d,e.a),$async$Qc)
case 4:w=5
return A.b(t.lg(),$async$Qc)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qc,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)k.push(o.bGd(w[u]))
if(m){t=6-o.d.length
w=A.n(18)
v=B.c.j(0.05)
s=A.L(E.kn.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aA(n,new A.fF(0.7142857142857143,A.p(n,A.x(A.a([D.dFr,B.af,D.epH,B.aw,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kM.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.ba,B.i,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcJv(),n,n,n,n,n,n,!1,B.a4))}w=A.n(22)
v=A.L(E.kn.j(0.85),B.r,1.6)
s=A.aA(n,A.p(n,D.c0h,B.f,n,n,new A.o(B.w.j(0.3),n,A.L(E.kn.j(0.6),B.r,1),n,n,n,B.a7),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dg8(d),n,n,n,n,n,n,!1,B.a4)
r=A.n(14)
q=B.w.j(0.3)
p=A.L(E.kn.j(0.5),B.r,1)
w=A.p(n,A.A(A.a([s,B.be,D.bIO,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.fn4,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h9,n,n,n)],l),B.m,n,B.e,B.i,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.c6d,B.n),n,n,n,Ax.NV,D.bAF,n,n,n)
if(o.e)k=D.aeT
else k=k.length===0?D.bbL:A.cr(new C.dg9(k))
return A.c5(n,D.YV,new A.an(B.a0,n,B.b4,B.t,A.a([D.aPK,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bGd(d){var w,v,u=this,t=null,s=u.bag(d),r=d.c,q=x.p,p=A.a([A.bR(0,A.eH(B.A,new A.a5(300,420,new C.ZA(d.b,s,r,t),t),B.f,B.dC),0,0,0)],q)
if(u.a.e)p.push(A.ap(t,A.aA(t,A.p(t,D.c_B,B.f,t,t,new A.o(B.w.j(0.55),t,A.L(B.aW,B.r,1),t,t,t,B.a7),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dg0(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.fmF,t,t,t)
v=r===1?"page":"pages"
return A.aA(t,A.x(A.a([new A.fF(0.7142857142857143,new A.an(B.a0,t,B.ac,B.t,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kM.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.i,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dg1(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.KE.prototype={}
C.ZA.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dO(D.zI,new C.cOw(m),new C.cOx()),j=m.c,i=D.DE.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mn:B.ba
v=new C.cOy(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.emn,28)],x.V)
u=x.p
t=A.a([A.bR(0,A.b4(l,l,l,new C.bdJ(j.x,h,l),B.az),0,0,0),A.ap(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.a6,B.a9,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cL(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bg(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.amu,8,0.85,2.2),v.$4(D.bFz,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.amu,8,0.85,2.4))
else if(r==="corners")t.push(A.bR(0,new A.D(D.bFv,A.b4(l,l,l,new C.bdA(h,l),B.az),l),0,0,0))
r=A.X(D.aBi[B.o.F(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.ayu,l,l),B.K,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aC,q,B.af,p,B.af,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cF,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aR,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bR(0,new A.D(D.bG_,A.x(o,B.m,l,w,B.i,0,B.p),l),0,0,0))
if(j.z)t.push(A.ap(l,A.b4(l,l,l,new C.aId(l),D.fcd),l,l,l,46,0,l))
return A.p(l,A.bx(D.adv,new A.an(B.a0,l,B.ac,B.t,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.adv,i,new A.a9(B.aA,B.aF,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
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
for(w=e.a,v=e.b,v=[D.f1P,new A.cu([w,0,-1,1]),new A.cu([0,v,1,-1]),new A.cu([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
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
C.ZT.prototype={
S(){return new C.bdH()}}
C.bdH.prototype={
gom(){var w=this.d
return w===$?this.d=this.a.c:w},
gyZ(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.ba(w.b,B.b5,B.aP),$.aw())}return v},
gaCO(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.ba(w.c,B.b5,B.aP),$.aw())}return v},
gasu(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.ba(w.y,B.b5,B.aP),$.aw())}return v},
t(){var w=this,v=w.gyZ(0),u=v.T$=$.aw()
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
r.push(A.js(s,s,s,A.d(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.d74(this,f,u),e===u,s,s,s,s))}return A.bW(B.bH,r,B.bt,s,6,8)},
ayO(d){var w=null,v=B.c.j(0.07)
return A.bs(w,new A.b6(4,A.n(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.mv,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gom(),a0=f.gyZ(0),a1=a0.a.a,a2=f.gaCO(),a3=a2.a.a,a4=f.gasu(),a5=d.beY(a4.a.a,a3,a1)
a1=x.w
a3=A.aH(a6,e,a1).w
a1=A.aH(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a5(190,260,A.eH(B.A,new A.a5(270,370,new C.ZA(a5,d,f.a.e,e),e),B.f,B.dC),e),e,e,e)
a0=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aN(),a0,e,e,e,e,e,2,f.ayO("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d7t(f),e,e,e,!1,e,e,!1,e,!0,e,B.ab,e,e,e,e,e,e,e,e,e,e,e,B.dh,!0,B.a5,e,B.ao,e,e,e,e)
a2=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aN(),a2,e,e,e,e,e,2,f.ayO("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d7u(f),e,e,e,!1,e,e,!1,e,!0,e,B.ab,e,e,e,e,e,e,e,e,e,e,e,B.dh,!0,B.a5,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.zI[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aW
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bG(o,o,o,o),e,e,new A.a9(B.aA,B.aF,B.x,t.c,e,e),B.a7),e,46,e,e,e,e,e,46)
q=q?B.c:B.aD
v.push(A.aA(e,A.x(A.a([p,B.cU,A.d(t.b,e,e,e,e,e,e,new A.G(!0,q,e,e,e,e,10.5,B.V,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.m,e,B.e,B.O,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d7v(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bW(B.bH,v,B.bt,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b8.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eI:B.L,2,B.r,-1)
q.push(A.aA(e,A.p(e,A.X(D.aBi[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bG(o,o,o,o),new A.bg(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d7w(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bW(B.bH,q,B.bt,e,8,8)
a4=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aN(),a4,e,e,e,e,e,2,f.ayO("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d7x(f),e,e,e,!1,e,e,!1,e,!0,e,B.ab,e,e,e,e,e,e,e,e,e,e,e,B.dh,!0,B.a5,e,B.ao,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,M.vz,e,e,e)
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
m.push(A.aA(e,A.x(A.a([j,B.bG,A.d(i,e,e,e,e,e,e,new A.G(!0,h,e,e,e,e,10,B.V,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.m,e,B.e,B.O,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d7y(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bW(B.bH,m,B.bt,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,M.vz,e,e,e)
k=f.gom()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bm(!0,new A.cR(new A.aZ(0,1/0,0,a1.a.b*0.92),A.cj(A.a([D.fS6,B.af,d,B.aR,a0,B.X,a2,B.aC,D.fYi,B.P,v,B.aC,D.fSf,B.P,q,B.aC,a4,B.aC,p,B.P,m,B.aC,l,A.kT(e,9,""+B.k.V(f.gom().f),36,18,new C.d7z(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,M.vz,e,e,e),B.an,f.at7(D.a66,f.gom().r,new C.d7A(f),D.dBd),B.af,A.d("BORDER",e,e,e,e,e,e,M.vz,e,e,e),B.an,f.at7(D.a5r,f.gom().w,new C.d7B(f),D.dBj),B.af,A.d("COVER MATERIAL",e,e,e,e,e,e,M.vz,e,e,e),B.an,f.at7(D.a5n,f.gom().x,new C.d7D(f),D.dCO),B.an,A.iO(e,B.b8,e,B.ag,e,new C.d7E(f),e,e,e,D.fMj,f.gom().z),B.by,A.bH(D.fQO,e,new C.d7F(f,a6),A.bn(B.b8,e,e,e,e,B.oQ,e,e,new A.b9(A.n(16),B.a1),e,e,e))],w),e,e,A_.am0,e,e,B.ai,!0),e),!0,!1,B.ag,!0,!0),e)}}
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
u.sar(D.c6U.aG(0,new A.a2(0,0,0+w,0+v)))
d.ae(t,u)},
aC(d){return!1}}
C.bj3.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.S()
w=A.K()
w.sar(D.c5U.aG(0,new A.a2(0,0,a2,a3)))
a4.au(new A.a2(0,0,a2,a3),w)
v=B.k.cJ(a1/112)
u=new A.e4()
u.d_(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.aj()*20
l=56+u.aj()*40
k=D.d7_[u.aw(9)]
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
p.sar(D.c5f.aG(0,new A.a2(0,r,a2,q)))
a4.au(new A.a2(0,r,a2,q),p)
p=new A.ao(B.Q,B.N,B.T,B.U,B.S)
p.r=B.w.j(0.5).gp(0)
p.y=B.kU
a4.au(new A.a2(0,q,a2,q+14),p)}t=A.K()
t.r=D.bfx.j(0.72).gp(0)
a4.au(new A.a2(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.K()
a3.sar(new A.c_(B.A,0.5,B.x,d,0,A.a([D.bnF.j(0.22),B.L],w),d,d).aG(0,A.bX(new A.q(t,a1),a0)))
a4.N(new A.q(t,a1),a0,a3)},
aC(d){return!1}}
C.bbS.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cL(14,w*2,v*2.2,v*2,o,o,new A.l3(new A.o(A.ar(D.kM,D.bsH,w/4),o,new A.bG(B.a1,new A.ay(B.w.j(0.12),1,B.r,-1),B.a1,B.a1),B.LG,o,o,B.n),B.bi,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aLk,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.kn.j(0.6),o,o,new A.bg(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.m,o,B.qQ,B.i,0,B.p),B.f,o,o,new A.o(o,o,o,D.b3Y,u,D.c6S,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.du,18)],v)
t=A.ap(o,A.b4(o,o,o,new C.aId(o),D.fc8),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aW4(p.y,r,L.iY,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aM(o,B.Z,!1,o,!0,B.t,o,A.aN(),p.r,o,o,o,o,o,2,A.bs(o,B.eH,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.iY.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ab,o,o,o,o,o,o,o,o,o,o,o,D.fBi,!0,B.a5,o,B.ao,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.iY.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.X,A.E(A.aM(o,B.Z,!1,o,!0,B.t,o,A.aN(),p.w,o,o,o,o,o,2,A.bs(o,B.eH,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.iY.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ab,o,o,o,o,o,o,o,o,o,o,o,D.frY,!0,B.a5,B.AB,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fBa,o,o,o),B.aw,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.iY.j(0.5),o,o,o,o,o,o,o,o,11,B.cF,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.A(A.a([A.E(A.p(o,o,B.f,D.G2.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fG,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.G2.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.G2.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.i,0,o,o),B.aC],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,L.iY.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.YP(A.cQ(A.a([A.cQ(o,o,o,o,o,o,o,o,o,D.fv9,B.a.aA(k,0,1)),A.cQ(o,o,o,o,o,o,o,o,o,o,B.a.b2(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,L.iY.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cg(A.x(n,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,o,o,B.ai)}s.push(A.E(n,1))
s.push(new A.D(B.i9,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,L.iY.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.p(o,A.bx(B.LG,new A.an(B.a0,o,B.ac,B.t,A.a([t,new A.D(D.bF1,A.x(s,B.al,o,B.e,B.i,0,B.p),o),A.ap(0,A.c3(o,new A.o(o,o,o,o,o,new A.a9(B.a6,B.a9,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bi),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.LG,v,D.c7p,B.n),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,o,o))
return new A.an(B.a0,o,B.ac,B.t,l,o)}}
C.alz.prototype={
S(){return new C.alA(new A.ez(0,$.aw()),new C.bSD(),new C.alS(),D.hz5,null,null)},
gd1(){return this.d}}
C.a1z.prototype={
a7(){return"_Step."+this.b}}
C.alA.prototype={
gCp(){var w,v,u=this,t=u.d
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
gTQ(){var w=this.ghb(0)
return w.gzj()==null?"Babu":B.a.i(w.gzj().b)},
Y(){var w,v=this
v.a3()
w=v.ghb(0).gzj()
w=w==null?null:w.c
v.r.b=w===D.op
w=v.pY(new C.bQZ(v))
w.fX(0)
v.x!==$&&A.aQ()
v.x=w
v.a2p("Come closer, my children. I am "+v.gTQ()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
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
w.bvD()},
a2p(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.de(D.akD,new C.bQT(w))},
bs_(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.m(new C.bR1(v))},
adJ(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
brS(){return this.b9O()},
b9O(){var w=this,v=w.gCp()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bQU(w))
w.a2p(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cz(B.m8,new C.bQV(w))},
cKF(){var w=this
w.m(new C.bQY(w))
w.a2p(w.gCp()[w.as].a)},
KY(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.acF)return
w=p.gCp()
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
p.m(new C.bQX(p,d,u,q))
p.a2p(u?D.dmy[q.aw(4)]+" "+w[p.as].d:D.dj9[q.aw(3)]+" "+w[p.as].d)},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCp()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bFV(t.at,t.ay,p)
t.m(new C.bR_(t,s))
t.a2p(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.BL(t.a.d,s),$async$kM)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.BM(r.d,r.c.a,"fire",t.at*10),$async$kM)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bR0())
w=1
break
case 4:++t.as
t.b9O()
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c5(v,D.Y2,new A.an(B.a0,v,B.ac,B.t,A.a([A.bR(0,new A.em(A.b4(v,v,v,new C.aW9(u,w.r,w.w,u),B.az),v),0,0,0),A.bm(!0,A.x(A.a([w.cbl(0),B.b3,w.bR2()],t),B.m,v,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
cbl(d){var w,v,u,t=this,s=null,r=A.aG(s,s,s,s,B.PR,s,s,s,new C.bQW(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCp().length;++w){v=t.as
if(w<v||t.Q===D.b0k)v=B.cN
else v=w===v?B.c:B.aW
u=new A.aP(4,4)
p.push(A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bg(u,u,u,u),s,s,B.n),s,7,s,D.bAo,s,s,s,22))}p=A.E(A.x(A.a([D.fJ4,A.A(p,B.m,s,B.e,B.i,0,s,s)],q),B.E,s,B.e,B.i,0,B.p),1)
v=A.n(14)
u=A.L(B.fx,B.r,1)
return new A.D(D.bGc,A.A(A.a([r,p,A.p(s,A.d("\ud83d\udd25 "+B.k.V(t.cy*100)+"%",s,s,s,s,s,s,B.ix,s,s,s),B.f,s,s,new A.o(B.aT,s,u,v,s,s,B.n),s,s,s,s,B.h9,s,s,s)],q),B.m,s,B.e,B.i,0,s,s),s)},
bR2(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghb(0).gzj()
if(h==null)w=1
else w=h.c===D.op?0:1
v=j.dx
u=j.db
t=D.qe.j(0.96)
s=A.n(22)
r=A.L(B.cN,B.r,3)
q=A.b4(i,i,i,new C.boC(w,i),B.az)
p=A.d(j.Q===D.acF?j.gTQ()+" asks":"Elder "+j.gTQ(),i,i,i,i,i,i,D.aUM,i,i,i)
o=j.db
o=B.a.aA(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aA(B.c5,A.A(A.a([new A.a5(62,62,q,i),B.at,A.E(A.x(A.a([p,B.bG,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aV0,i,i,i)],n),B.E,i,B.e,B.i,0,B.p),1)],n),B.E,i,B.e,B.i,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbrZ(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.at(j.a9P("Sit down by the fire",j.gbrR()),i,i,i)
break
case 1:v=A.at(j.a9P("Ask me, Elder",j.gcKE()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCp()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.ay(D.lB,2.5,B.r,-1)
v.push(A.aA(i,A.p(i,A.d(u[m],i,i,i,i,i,i,D.aUX,B.K,i,i),B.f,i,D.ae7,new A.o(D.ajz,i,new A.bG(l,l,l,l),new A.bg(q,q,q,q),i,i,B.n),i,i,i,i,V.wg,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bQQ(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bW(B.bH,v,B.bt,i,8,8)
break
case 3:v=j.fr
u=v?B.ku:Ak.apx
u=A.X(u,v?B.en:D.lB,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.l(i,i,v?B.en:D.lB,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCp().length?"Finish":"Next story"
v=A.A(A.a([u,B.ae,q,j.a9P(v,j.gqk(j))],n),B.m,i,B.e,B.i,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gCp().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aVf,i,i,i)],n)
u=j.cx
if(u>0){u=C.aQk(u)
q=C.aQk(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.ab5,i,i,i))}v.push(B.P)
v.push(j.a9P("Back to the games",new C.bQR(j)))
v=A.x(v,B.m,i,B.e,B.i,0,B.p)
break
default:v=i}return A.p(i,A.x(A.a([o,B.X,v],n),B.E,i,B.e,B.O,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.aCP,i,B.n),i,i,i,B.C6,B.bh,i,i,i)},
a9P(d,e){var w=null,v=A.n(16),u=A.L(B.cN,B.r,2)
return A.aA(w,A.p(w,A.d(d,w,w,w,w,w,w,A2.Kw,w,w,w),B.f,w,w,new A.o(D.lB,w,u,v,w,w,B.n),w,w,w,w,D.bDV,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.boC.prototype={
a4(d,e){Y.fUn(d,e.ej(B.I),e.gdz()*0.45,this.b,0,0.4)},
aC(d){return d.b!==this.b}}
C.aBd.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.bSD.prototype={}
C.ta.prototype={}
C.boD.prototype={}
C.alS.prototype={
Mr(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.iae(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aW9.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.zi(l.d.Mr(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.bq(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bV(0,u)
l.cA8(d,j)
l.bPB(d,j)
l.cIq(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.bq(t.save())
t.translate(225,580)
d.pg(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.S()
q=A.K()
p=x.O
o=x.n
q.sar(A.w3(B.I,r,A.a([D.bru.j(0.55*s),F.Nb.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.N(B.I,r,q)
t.restore()
n=A.a([new A.y(528,new C.bSv(l,d,j,i)),new A.y(540,new C.bSw(l,d,j,i)),new A.y(546,new C.bSx(l,d,j,i)),new A.y(574,new C.bSy(l,d,j,i)),new A.y(612,new C.bSz(l,d,j,i)),new A.y(650,new C.bSA(l,d,j,i)),new A.y(656,new C.bSB(l,d,j,i))],x.E)
B.d.aZ(n,new C.bSC())
for(m=0;m<7;++m)n[m].b.$0()
l.bGw(d,j,i)
l.bTc(d,j)
t.restore()
$.S()
t=A.K()
t.sar(A.w3(new A.q(w/2,v*0.6),e.ganW()*0.75,A.a([B.L,D.bfr],p),A.a([0.55,1],o),B.x,k,k,0))
d.au(new A.a2(0,0,0+w,0+v),t)},
aC(d){return d.c!==this.c||d.d!==this.d},
cA8(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e4()
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
d.ah(p,p.aK(0,D.elV),C.iv(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.k.E(v+o*0.05,1)
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
s.r=D.bi8.gp(0)
s.d=B.bA
s.e=B.dS
d.ae(l,s)}},
bPB(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.azN[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bJ(new A.q(p,m),n*0.74,q*0.5)
k=Ac.yh.j(v)
$.S()
j=new A.ao(B.Q,B.N,B.T,B.U,B.S)
j.r=k.gp(0)
d.bY(l,j)
q=A.bJ(new A.q(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ao(B.Q,B.N,B.T,B.U,B.S)
m.r=Q.xX.j(u).gp(0)
d.bY(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.k.E(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ao(B.Q,B.N,B.T,B.U,B.S)
o.r=D.agW.j(0.16*(1-h)).gp(0)
d.N(new A.q(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cIq(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bD4(d,D.elR,0.9,e,D.huV,!1,!1,D.b0h,1,!1)
w=$.S().r
v=x.v
u=new A.aE(w,B.ah,g,g,A.a([],v))
u.D(new A.aY(52,470))
u.D(new A.aq(50,486))
u.D(new A.aq(66,486))
u.D(new A.aq(64,470))
u.D(new A.bt())
t=A.K()
t.r=D.aiT.gp(0)
d.ae(u,t)
C.bD4(d,D.elT,0.95,e,D.huQ,!1,!1,D.b0i,1,!0)
t=new A.aE(w,B.ah,g,g,A.a([],v))
t.D(new A.aY(417,510))
t.D(new A.c4(431,532,445,510))
t.D(new A.aq(441,548))
t.D(new A.c4(431,553,421,548))
t.D(new A.bt())
u=A.K()
u.r=F.FK.gp(0)
d.ae(t,u)
u=A.bJ(D.elS,8,28)
t=A.K()
t.r=D.btM.gp(0)
d.bY(u,t)
C.bD4(d,new A.q(-30+B.k.E(e/26,1)*510,492),0.82,e,D.huW,!0,!1,D.WY,1,!1)
t=B.k.E(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.bY(A.bJ(new A.q(s+q*16,r-6),16,11),C.iv(D.aiJ,1.8))
u=q<0
C.bD4(d,new A.q(s-q*6,r),0.62,e,D.huY,!1,u,D.WY,2.2,!1)
C.bD4(d,new A.q(s-q*32,r+4),0.58,e+1,D.huU,!1,u,D.WY,2.2,!1)
this.bVW(d,D.elw,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.E(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bJ(new A.q(o,n),8,11)
k=p===1
j=k?D.aiF:D.ajh
i=new A.ao(B.Q,B.N,B.T,B.U,B.S)
i.r=j.gp(0)
d.bY(l,i)
l=k?D.aiF:D.ajh
k=new A.ao(B.Q,B.N,B.T,B.U,B.S)
k.r=l.gp(0)
d.N(new A.q(o+5,n+(-3+m)),2.6,k)
k=new A.ao(B.Q,B.N,B.T,B.U,B.S)
k.b=B.aa
k.c=1
k.r=B.ay.gp(0)
k.d=B.bA
k.e=B.dS
d.ah(new A.q(o+7.5,n+(-2+m)),new A.q(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ao(B.Q,B.N,B.T,B.U,B.S)
k.b=B.aa
k.c=1
k.r=B.ay.gp(0)
k.d=B.bA
k.e=B.dS
d.ah(new A.q(o,n+4),new A.q(o,n+8),k)}h=e<f.f
u=A.bJ(D.a85,15+Math.sin(e*2)*0.8,40)
t=A.K()
t.r=D.ahj.gp(0)
d.bY(u,t)
u=A.bJ(D.a85.a6(0,new A.q(-14,h?-9:-2)),12,15)
t=A.K()
t.r=D.bkb.gp(0)
d.bY(u,t)
t=new A.aE(w,B.ah,g,g,A.a([],v))
t.D(new A.aY(130,592-(h?16:6)))
t.D(new A.aq(134,592-(h?22:9)))
t.D(new A.aq(138,592-(h?16:6)))
t.D(new A.bt())
u=A.K()
u.r=D.bkl.gp(0)
d.ae(t,u)
u=D.a85.a6(0,new A.q(-17,h?-9:-2))
t=A.K()
t.r=B.i7.gp(0)
d.N(u,1.1,t)
v=new A.aE(w,B.ah,g,g,A.a([],v))
v.D(new A.aY(168,590))
w=Math.sin(e*8)
v.D(new A.c4(180,588+w*(h?6:0),178,595))
d.ae(v,C.iv(D.ahj,3.5))},
bVW(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a6(0,new A.q(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.S()
m=new A.ao(B.Q,B.N,B.T,B.U,B.S)
m.b=B.aa
m.c=2
m.r=D.Ye.gp(0)
m.d=B.bA
m.e=B.dS
d.ah(new A.q(u+o,s),new A.q(u+(o+n*1.5),q),m)}w=A.bJ(k,17,32)
v=$.S()
r=A.K()
r.r=D.FI.gp(0)
d.bY(w,r)
r=A.bJ(k.a6(0,D.ekW),7,26)
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
s=A.bJ(k.a6(0,new A.q(24,-7+l)),9,12)
v=A.K()
v.r=D.FI.gp(0)
d.bY(s,v)
v=-11+l
d.ah(k.a6(0,new A.q(22,v)),k.a6(0,new A.q(21,-17+l)),C.iv(D.Ye,1.6))
d.ah(k.a6(0,new A.q(26,v)),k.a6(0,new A.q(28,-16+l)),C.iv(D.Ye,1.6))
v=k.a6(0,new A.q(26,-8+l))
s=A.K()
s.r=B.w.gp(0)
d.N(v,0.9,s)
d.ah(k.a6(0,new A.q(26,-3+l)),k.a6(0,new A.q(26,1+l)),C.iv(D.bn0,1.4))
d.ah(k.a6(0,D.enV),k.a6(0,new A.q(-19,-7+Math.sin(f*7)*2)),C.iv(D.FI,2.4))},
bTa(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bJ(new A.q(225+u*36,574+(t*13+6)),8,11)
$.S()
t=new A.ao(B.Q,B.N,B.T,B.U,B.S)
t.r=D.bst.gp(0)
a6.bY(u,t)}}u=A.bJ(D.a88.a6(0,B.cA),17,52)
$.S()
t=A.K()
t.r=D.bf_.gp(0)
a6.bY(u,t)
t=A.bJ(D.a88.a6(0,B.cA),12,44)
u=D.biw.j(0.6+0.3*Math.sin(a7*6))
s=A.K()
s.r=u.gp(0)
a6.bY(t,s)
for(r=0;r<3;++r){v=D.diD[r]
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
l=[D.eZ_,D.eZy,D.f_E,D.f_Y,D.f_C]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.bpS,D.bmn,D.brV][k]
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
p=G.ajf.j((1-a5)*0.9)
$.S()
o=new A.ao(B.Q,B.N,B.T,B.U,B.S)
o.r=p.gp(0)
a6.N(new A.q(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.k.E(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.agW.j(0.1*(1-a5))
$.S()
p=new A.ao(B.Q,B.N,B.T,B.U,B.S)
p.r=q.gp(0)
a6.N(new A.q(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bTc(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.k.E(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.E(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.btW.j(0.18*p)
$.S()
n=new A.ao(B.Q,B.N,B.T,B.U,B.S)
n.r=o.gp(0)
d.N(new A.q(r,q),5,n)
n=new A.ao(B.Q,B.N,B.T,B.U,B.S)
n.r=D.bnK.j(0.9*p).gp(0)
d.N(new A.q(r,q),1.4,n)}},
c4U(d,e){switch(d){case 0:return e.b?D.huR:D.b_Q
case 1:return e.b?D.huX:D.b_O
case 2:return D.b_N
case 3:return D.b_M
case 4:return D.b_P
default:return D.b_R}},
aD1(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
R3(d,e,f,g){var w,v=this,u=D.a5z[e],t=v.c4U(e,g),s=new C.boD(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a5z[e],l=e===0
m=B.k.F(((l?D.aLd:D.aLi).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a8c
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.el3
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.emr
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
s.Q=D.eoR
s.as=D.aLv}if(e===2&&g.x!=null&&f<g.y){s.a=v.aD1(f,5)
s.b=0.4
s.as=new A.q(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aD1(f,e*3)
s.b=0.5
s.c=0.4}}C.hxA(d,u.a,u.b*1.2,t,s,f,e,null)},
bGw(d,e,f){var w=new C.bSu(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gdd(d){return this.c}}
C.afD.prototype={
a7(){return"_Stand."+this.b}}
C.adC.prototype={}
C.lp.prototype={}
C.bRe.prototype={
bB7(d){var w,v,u,t,s=A.U(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
G4(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.aZ(r,new C.bRf())
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
gzj(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.aZ(w,new C.bRg(this))
return B.d.gH(w)}}
C.atT.prototype={}
C.zu.prototype={}
C.aku.prototype={
gBX(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Y(w,new C.bM2(),A.T(w).k("Y<1>")).gJ(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ak(){var w=this
return A.H(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.MC.prototype={
gapc(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
if(t.gBX(0))s.push(t)}return s},
ak(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.J)(w),++s){r=w[s]
p.push(A.H(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.H(["id",this.a,"title",q,"qs",p],u,t)},
d0U(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gapc(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.J)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lp(B.a.i(s.a),p,B.d.cp(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.ba6.prototype={}
C.a9H.prototype={}
C.bhm.prototype={}
C.afB.prototype={}
C.ajN.prototype={
S(){return new C.ajO(B.bD,A.a([],x.cC),A.a([],x.e4),null,null)},
gd1(){return this.d}}
C.ajO.prototype={
gMK(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bDH(w.c,8,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gba9(){var w,v=this,u=v.e
if(u===$){w=v.pY(v.gcbn())
v.e!==$&&A.bE()
v.e=w
u=w}return u},
Y(){this.a3()
this.gba9().fX(0)},
t(){this.gba9().t()
this.bvy()},
fX(d){this.m(new C.bKd(this))},
cbo(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fH(0,v)
if(w.c!=null)w.m(new C.bK8())},
b8v(){var w,v,u,t=this,s=t.r
B.d.a9(s)
w=t.gMK()
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
if(m.fx<=0)m.c7K()
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
p=m.gMK()[m.x]
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
v.Qd()}},
c7K(){var w=this
if(w.x+1>=w.gMK().length){w.Qd()
return}++w.x
w.b8v()},
Qd(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Qd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gMK().length
r=C.bFV(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bK6())
w=2
return A.b(C.BL(u.a.d,r),$async$Qd)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.BM(t.d,t.c.a,"catch",u.z),$async$Qd)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bK7())
return A.h(null,v)}})
return A.i($async$Qd,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.cbm()
else w=v.ch?v.cbp():A.at(new A.D(B.ex,A.x(A.a([D.aWa,B.P,D.fKJ,B.X,D.fQT,B.dV,C.up("Play",v.geY(v),B.cN,B.hs,D.fw)],x.p),B.m,u,B.e,B.O,0,B.p),u),u,u,u)
return new C.tA("Calabash Catch",w,B.f4,u)},
cbp(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hG:B.Hs
p.push(A.X(u,v?B.ax:B.bV,r,r,r,22))}p.push(B.b3)
v=s.x
u=s.gMK()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aUK,r,r,r))
p.push(B.be)
v=A.n(14)
p.push(A.p(r,A.d(""+s.z,r,r,r,r,r,r,B.ix,r,r,r),B.f,r,r,new A.o(B.bB,r,r,v,r,r,B.n),r,r,r,r,B.GF,r,r,r))
p=A.A(p,B.m,r,B.e,B.i,0,r,r)
v=A.n(18)
t=A.L(B.cN,B.r,3)
return A.x(A.a([new A.D(D.bBI,p,r),A.p(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fv1,B.K,r,r),B.f,r,r,new A.o(D.qe,r,t,v,r,r,B.n),r,r,r,B.f1,B.bh,r,r,1/0),B.an,A.E(A.cr(new C.bKc(s)),1)],q),B.m,r,B.e,B.i,0,B.p)},
cbm(){var w=this,v=null,u=A.at(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.pP,v,v,v),v,v,v),t=A.at(A.d(""+w.Q+" of "+w.gMK().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.Vn,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cj(A.a([D.bct,u,t,B.aR,new C.Ik(s,r,w.cx,v),B.aR,A.at(C.up("Back to the games",new C.bK5(w),B.cN,B.k4,D.fw),v,v,v)],x.p),v,v,B.ab,v,v,B.ai,!1)}}
C.bcx.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.S(),a3=A.K()
a3.sar(A.jv(B.I,new A.q(0,a0),D.d0Y,G.aA4,B.x,e))
a4.au(new A.a2(0,0,a1,0+a0),a3)
a3=A.K()
a3.r=G.Nf.gp(0)
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
w.r=D.bjq.gp(0)
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
w.r=D.afZ.gp(0)
a4.ae(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.cmM[q]
s=new A.ao(B.Q,B.N,B.T,B.U,B.S)
s.r=D.afZ.gp(0)
s.c=7
s.d=B.bA
a4.ah(new A.q(r,a2),new A.q(r+p*46,w),s)
s=new A.ao(B.Q,B.N,B.T,B.U,B.S)
s.r=D.afj.gp(0)
a4.N(new A.q(r+p*50,t),18,s)}a2=a0*0.88
w=A.K()
w.r=D.bkj.gp(0)
a4.au(new A.a2(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ao(B.Q,B.N,B.T,B.U,B.S)
t.r=D.ahB.gp(0)
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
m.r=D.agG.gp(0)
a4.N(D.eki,14,m)
m=new A.ao(B.Q,B.N,B.T,B.U,B.S)
m.r=D.boV.gp(0)
m.c=4
m.d=B.bA
a4.ah(D.ekj,D.els,m)
m=new A.ao(B.Q,B.N,B.T,B.U,B.S)
m.sar(new A.all(D.enC,46,D.d9q,B.Dn,B.x,e,e,0))
a4.N(B.I,34,m)
m=A.bJ(D.enJ,8,12)
l=new A.ao(B.Q,B.N,B.T,B.U,B.S)
l.r=B.c.j(0.35).gp(0)
a4.bY(m,l)
k=new A.iF(new A.en(n.c,e,e,B.cH,e,e,e,e,e,e,D.fsT),B.K,B.bW,new A.jd(1),e,e,3,e,B.bX,e,B.ct)
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
Y.Bb(a4,new A.q(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dJ,F.mL,!1,(w+1)/2)
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
m.r=D.Z0.gp(0)
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
s.r=D.bjw.gp(0)
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
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aBb(w.c,w.f,v),B.az),s=A.n(10),r=A.L(B.bF,B.r,1.4)
return new A.a5(u+22,v,A.x(A.a([new A.a5(u,u,t,v),B.cU,A.p(v,A.d(w.d,v,1,B.a2,v,v,v,D.fly,v,v,v),B.f,v,v,new A.o(B.c,v,r,s,v,v,B.n),v,v,v,v,B.mR,v,v,v)],x.p),B.m,v,B.e,B.O,0,B.p),v)},
gZ(d){return this.e}}
C.aBb.prototype={
a4(d,e){var w=e.ej(B.I),v=e.gdz(),u=this.c?0.8:0
return Y.fUn(d,w,v*0.44,this.b,0,u)},
aC(d){return d.b!==this.b||d.c!==this.c}}
C.azG.prototype={}
C.auu.prototype={
S(){return new C.auv(A.U(x.S,x.cq),null,null)},
gd1(){return this.d}}
C.auv.prototype={
gkR(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hCP(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gaF4(){var w=this.z
return w===$?this.z=this.Xg(0):w},
gj0(){var w,v=this.Q
if(v===$){w=this.gkR()
w=w.length===0?0:w[0].c.length
v=this.Q=A.bZ(w,-1,!1,x.S)}return v},
Xg(d){var w,v,u,t,s=this.gkR()
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
u=u.gou()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dV$.a.a9(0)
v.qB()}this.bw0()},
cQM(d,e){var w,v,u,t,s,r=this
if(d>=r.gj0().length||r.gj0()[d]!==-1||B.d.q(r.gj0(),e))return
w=r.gaF4()[e]
v=r.gkR()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.cpz(r,e,w,v))
A.cz(B.lH,new C.cpA(r))
return}++r.r
u=A.bl(null,B.hD,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.m(new C.cpB(r,d,e,w,v))
u.cq(0)},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkR()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cH(n,0,new C.cpC())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.cpD(t,r))
w=5
return A.b(C.BL(t.a.d,r),$async$kM)
case 5:t.x=f
o=t.a
w=6
return A.b(C.BM(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kM)
case 6:t.ch=f
if(t.c!=null)t.m(new C.cpE())
w=1
break
case 4:for(o=t.as,n=new A.dq(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eN$
p.b=!1
B.d.a9(p.a)
p=p.gou()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dV$.a.a9(0)
q.qB()}o.a9(0)
t.m(new C.cpF(t))
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.at(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.pP,p,p,p),p,p,p)
v=r.f
v=A.at(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.Vn,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tA(q,A.cj(A.a([D.aeR,w,v,B.aR,new C.Ik(u,t,r.ch,p),B.aR,A.at(C.up("Back to the games",new C.cpv(d),B.cN,B.k4,D.fw),p,p,p)],x.p),p,p,B.ab,p,p,B.ai,!1),B.f4,p)}w=r.gkR()
v=r.e
s=w[v]
return new C.tA(q,new A.D(B.uq,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aUF,B.K,p,p),A.E(A.cr(new C.cpw(r,s)),1)],x.p),B.m,p,B.e,B.i,0,B.p),p),B.f4,p)}}
C.bc0.prototype={
a4(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.Y(b2,new C.cPA(),A.T(b2).k("Y<1>")).gJ(0),b4=a9.b,b5=b4.a6(0,B.Jo)
$.S()
w=A.K()
w.r=D.lC.j(0.18+0.1*b3).gp(0)
b6.N(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a6(0,D.ek5)
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
for(;;){i.ik()
e=n[h].b
e===$&&A.c()
if(!(f<e.a.length()))break
i.ik()
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
k.ik()
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
k.ik()
a4=n[a0].b
a4===$&&A.c()
a4=a4.a.length()
k.ik()
a5=n[a0].Hp(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bJ(new A.q(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ao(B.Q,B.N,B.T,B.U,B.S)
a3.r=B.b9.gp(0)
b6.bY(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.iF(D.fl1,B.a5,B.bW,new A.jd(1),b0,b0,b0,b0,B.bX,b0,B.ct)
a8.ef()
a8.a4(b6,new A.q(w*(0.15+p*0.14),b2-B.o.E(p,3)*14))}},
aC(d){return!0}}
C.ays.prototype={
S(){return new C.ayt(A.aS(x.S))},
gd1(){return this.d}}
C.ayt.prototype={
gkR(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hDJ(w.c,w.e)
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
this.ch=A.de(B.rI,new C.cEx(this))},
bpA(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkR()[v.e]
if(w.e[d]===w.b)v.m(new C.cEF(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cEG(v,d))
A.cz(B.iJ,new C.cEH(v))}},
cWe(){var w=this
if(!w.as&&w.f<w.gkR()[w.e].d.length)w.m(new C.cEI(w))},
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
t.m(new C.cEJ(t,s))
w=5
return A.b(C.BL(t.a.d,s),$async$kM)
case 5:t.y=f
q=t.a
w=6
return A.b(C.BM(q.d,q.c.a,"who",t.r),$async$kM)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cEK())
w=1
break
case 4:t.m(new C.cEL(t))
t.b8E()
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.at(A.d(""+a0.w+" of "+a0.gkR().length+" guessed",a2,a2,a2,a2,a2,a2,B.pP,a2,a2,a2),a2,a2,a2)
v=A.at(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.Vn,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tA(a1,A.cj(A.a([D.bcF,w,v,B.aR,new C.Ik(u,t,a0.ax,a2),B.aR,A.at(C.up("Back to the games",new C.cEz(a3),B.cN,B.k4,D.fw),a2,a2,a2)],x.p),a2,a2,B.ab,a2,a2,B.ai,!1),B.f4,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkR()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.KE,B.K,a2,a2),B.X,A.at(A.lz(new C.cEA(a0,r),a2,B.b6,B.hD,a2,a2,new A.bp(a2,s,u),x.i),a2,a2,a2),B.aC],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.ay(B.cN,2,B.r,-1)
k=o+1
w.push(new A.r0(new A.bp(0,1,u),new C.cEB(),A.p(a2,new A.c6(B.aL,B.e,B.i,B.m,a2,B.p,a2,0,A.a([new A.qB(A.d(""+k,a2,a2,a2,a2,a2,a2,B.nT,a2,a2,a2),D.lB,a2,12,a2),B.at,new A.by(1,B.bc,A.d(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fxB,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.o(D.qe,a2,new A.bG(l,l,l,l),new A.bg(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.cv,B.bh,a2,a2,a2),B.b6,B.iJ,a2,new A.bP("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.at(A.bM(!1,D.fYI,a2,a2,!0,a2,a2,a2,a0.gcWd(),a2,a2),a2,a2,a2))
w.push(B.P)
if(a0.as){u=D.lC.j(0.2)
q=A.n(16)
p=A.L(D.lC,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fB,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.p(a2,A.x(A.a([m,B.X,C.up(v,a0.gqk(a0),B.cN,B.jF,D.fw)],t),B.m,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.o(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bE,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dt:B.cN.j(0.2)
g=new A.aP(16,16)
l=new A.ay(n.q(0,o)?B.ff:B.cN,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bV:B.c
d=n.q(0,o)?B.xa:a2
t.push(new A.r0(new A.bp(0,i,u),new C.cEC(),A.aA(a2,A.p(a2,A.d(f,a2,a2,a2,a2,a2,a2,new A.G(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.ae_,new A.o(h,a2,new A.bG(l,l,l,l),new A.bg(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jm,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cED(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b6,B.ma,a2,new A.bP("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bW(B.fM,t,B.bt,a2,10,10))}return new C.tA(a1,A.cj(w,a2,a2,B.alC,a2,a2,B.ai,!1),B.f4,a2)}}
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
are(){var w=this,v=w.pY(new C.f5H(w))
v.fX(0)
w.LR$!==$&&A.aQ()
w.LR$=v}}
C.aKp.prototype={
gbm1(d){var w=this.c
return B.a.aA(w,0,Math.min(this.d,w.length))},
VQ(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.de(D.akD,new C.ffQ(w))},
brY(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.alI.prototype={
S(){return new C.alJ(new C.alS(),A.a([],x.t),new A.ez(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.alJ.prototype={
gMI(){var w,v,u=this,t=u.d
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
gqs(){var w=this.r
return w===$?this.r=new C.aKp(new C.bS0(this)):w},
gapy(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gMI()[v].c)u.push(1)
return u.length},
gblk(){var w=this.ghb(0)
return w.gzj()==null?"Elder":B.a.i(w.gzj().b)},
Y(){this.a3()
this.are()},
t(){var w,v=this
v.gqs().t()
v.f.t()
w=v.LR$
w===$&&A.c()
w.t()
w=v.q6$
w.T$=$.aw()
w.P$=0
v.bvG()},
cKR(){var w=this
w.m(new C.bRY(w))
w.gqs().VQ(w.gMI()[w.x].a)},
KY(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqs()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.q6$.a
v.ax=u
v.ay=u+1
v.m(new C.bRW())
A.cz(B.hD,new C.bRX(v))},
bpw(){var w=this.gapy(0)/this.gMI().length*100
if(w>=90)return D.eVQ
if(w>=75)return D.eTS
if(w>=60)return D.eKz
if(w>=45)return D.eNY
return D.eEZ},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.ctm()
w=A.bR(0,new A.em(A.b4(m,m,m,new C.bsE(n,n.q6$),B.az),m),0,0,0)
if(!n.Q){v=D.qe.j(0.96)
u=A.n(20)
t=A.L(B.cN,B.r,3)
u=A.p(m,A.x(A.a([A.d("Elder "+n.gblk()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aVz,B.K,m,m),B.X,C.up("Start the test",n.gBN(),B.cN,B.j2,D.fw)],x.p),B.m,m,B.e,B.O,0,B.p),B.f,m,m,new A.o(v,m,t,u,m,m,B.n),m,m,m,m,B.bE,m,m,m)
v=u}else{v=n.x
u=n.gMI()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aVB,m,m,m)
if(n.Q){t=n.gqs()
t=t.d<t.c.length}else t=!1
if(t)u=D.fdy
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.ay(D.Br,4,B.r,-1)
s.push(A.aA(m,A.p(m,A.d(q[r],m,m,m,m,m,m,D.foM,B.K,m,m),B.f,m,D.ae_,new A.o(D.bfw,m,new A.bG(o,o,o,o),new A.bg(p,p,p,p),m,m,B.n),m,m,m,m,B.O1,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bRZ(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bW(B.fM,s,B.bt,new A.bP("o"+t,x.W),8,8)}u=A.x(A.a([v,B.an,A.p4(u,B.mM,A.qu(),B.b6,B.b6,A.Lt())],x.p),B.m,m,B.e,B.O,0,B.p)
v=u}return new C.tA("Village School",new A.an(B.a0,m,B.ac,B.t,A.a([w,A.ap(10,v,m,m,10,10,m,m)],x.p),m),B.f4,m)},
ctm(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bpw(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gMI()[v].c)g.push(v)
u=A.n(22)
t=A.L(B.cN,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.ftb,B.K,i,i)
r=A.d("Signed by Elder "+j.gblk(),i,i,i,i,i,i,D.frQ,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fwX,i,i,i),D.ewU],q)
o=A.d(h.b,i,i,i,i,i,i,D.fyO,i,i,i)
n=j.gapy(0)
m=j.gMI()
u=A.p(i,A.x(A.a([D.fK0,B.aw,s,r,B.X,new A.an(B.A,i,B.ac,B.t,p,i),o,B.an,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.ab5,i,i,i),B.P,D.asm],q),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(D.qe,i,t,u,i,i,B.n),i,i,i,i,B.fr,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aC,new C.Ik(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aR,D.fZM,B.P],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.J)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.ay(B.bB,1,B.r,-1)
p=m[v]
u.push(A.p(i,A.x(A.a([A.d(p.a,i,i,i,i,i,i,B.fW,i,i,i),B.aw,A.d("You said: "+p.b[w[v]],i,i,i,i,i,i,D.ful,i,i,i),A.d(p.d,i,i,i,i,i,i,D.fwz,i,i,i)],q),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.dt,i,new A.bG(k,k,k,k),new A.bg(r,r,r,r),i,i,B.n),i,i,i,B.cv,B.bh,i,i,i))}B.d.v(s,u)}s.push(B.aC)
s.push(A.at(C.up("Back to the games",new C.bRS(j),B.cN,B.k4,D.fw),i,i,i))
return new C.tA("Village School",A.cj(s,i,i,B.bR,i,i,B.ai,!1),B.f4,i)}}
C.bsE.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.q6$.a
a0.zi(e.f.Mr(a1))
w=C.haG(a1)
v=a0.c
J.bq(v.save())
v.translate(w.a,w.b)
a0.bV(0,w.c)
if(e.Q){u=e.gqs()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.cWi[s]-6
$.S()
r=new A.ao(B.Q,B.N,B.T,B.U,B.S)
r.r=D.FW.gp(0)
a0.au(new A.a2(u,340,u+12,450),r)}u=A.br(D.a96.cr(10),B.hY)
$.S()
r=A.K()
r.r=D.Br.gp(0)
a0.ap(u,r)
r=A.br(D.a96,B.hN)
u=A.K()
u.sar(A.jv(new A.q(30,96),new A.q(420,346),D.deH,f,B.x,f))
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
u.r=K.aip.gp(0)
a0.au(new A.a2(30,354,420,362),u)
u=A.K()
u.r=B.aQ.gp(0)
a0.au(D.f4W,u)
u=A.K()
u.r=B.bN.gp(0)
a0.au(D.f5_,u)
u=A.br(D.f4Q,B.hM)
r=A.K()
r.r=D.Z0.gp(0)
a0.ap(u,r)
n=B.k.F((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqs().gbm1(0)
m=A.fv(f,B.ct,f,7,f,A.cQ(f,f,f,f,f,f,f,f,f,D.fB2,u+(t?"|":"")),B.a5,B.bW,f,B.dD,B.bX)
m.o3(346)
J.bq(v.save())
u=A.i_(D.a96)
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
u.r=D.buH.gp(0)
a0.ap(r,u)}}else{m=A.fv(f,B.ct,f,f,f,D.flh,B.K,B.bW,f,B.dD,B.bX)
m.o3(340)
m.a4(a0,new A.q(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.k.E(u+p/8,1)
o=B.o.E(e.gqs().d*9,310)
k=Math.sin(p+r)
j=new A.ao(B.Q,B.N,B.T,B.U,B.S)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.N(new A.q(70+o+k*6,166+l*70),1.6,j)}u=e.ghb(0).gzj()
i=(u==null?f:u.c)===D.op?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.f5I(d,a0,i,t,h,D.elf)),new A.y(520,new C.f5J(a0,d,t)),new A.y(575,new C.f5K(a0,d,t)),new A.y(585,new C.f5L(this,a0,d,t)),new A.y(615,new C.f5M(this,t,a0,d,h))],x.E)
B.d.aZ(g,new C.f5N())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
cbq(d,e){var w,v,u,t,s,r,q,p=$.S(),o=A.a([],x.v),n=new A.aE(p.r,B.ah,null,null,o)
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
v=C.hCD(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gj0(){var w=this.z
return w===$?this.z=this.FD(0):w},
gaLh(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.FD(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.cp(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.FD(0):r).length);++v}s.Q=w
r=w}return r},
FD(d){var w,v,u,t,s=this.gkR()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e2(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e4()
u.d_(this.a.e+d*7)
B.d.e0(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.f1(u,new C.bRE())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Y(){this.a3()
this.are()},
t(){var w,v=this
v.e.t()
w=v.LR$
w===$&&A.c()
w.t()
w=v.q6$
w.T$=$.aw()
w.P$=0
v.bvF()},
aqI(d){var w,v,u,t,s,r=this,q=r.gj0().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.cp(u===$?r.z=r.FD(0):u,v)
s=r.gaLh()
s[v]=s[v]+(450*(t+0.5)/q-r.gaLh()[v])*Math.min(1,w)}},
d0z(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj0().length)return
w=v.y
if(w===-1){v.m(new C.bRP(v,d))
return}if(w===d){v.m(new C.bRQ(v))
return}v.m(new C.bRR(v,B.d.cp(v.gj0(),v.y),d,B.d.cp(v.gj0(),d)))},
cLy(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.FD(0):u).length))break
t=s.gkR()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.FD(0):u)[v]]===v);++v}s.m(new C.bRK(s,B.d.cM(w,new C.bRL())))},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkR().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bRM(t,s))
w=5
return A.b(C.BL(t.a.d,s),$async$kM)
case 5:t.x=f
q=t.a
w=6
return A.b(C.BM(q.d,q.c.a,"lineup",t.r*10),$async$kM)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bRN())
w=1
break
case 4:t.m(new C.bRO(t))
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.at(A.d(""+l.r+" of "+l.gkR().length+" lines right",k,k,k,k,k,k,B.pP,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tA("Line Up",A.cj(A.a([D.aeR,w,B.aR,new C.Ik(v,u,l.ch,k),B.aR,A.at(C.up("Back to the games",new C.bRG(d),B.cN,B.k4,D.fw),k,k,k)],x.p),k,k,B.ab,k,k,B.ai,!1),B.f4,k)}w=A.a([],x.t)
for(t=0;v=l.gkR(),t<v[l.f].d.length;++t)w.push(t)
B.d.aZ(w,new C.bRH(l))
u=A.bR(0,A.cr(new C.bRI(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aVB,k,k,k)
s=v[s]
q=x.p
s=A.ap(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.ftC,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fvO,B.K,k,k)],q),B.m,k,B.e,B.i,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.n(16)
n=l.ax
m=A.L(n?D.lC:G.nh,B.r,2)
r.push(A.p(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bRJ(l),x.cM).aO(0,", then ")+".",k,k,k,k,k,k,D.fxY,k,k,k),B.f,k,k,new A.o(p,k,m,o,k,k,B.n),k,k,k,B.d3,B.bh,k,k,1/0))}if(!l.at)r.push(C.up("That is my line!",l.gcLx(l),B.cN,B.hF,D.fw))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.up(w,l.gqk(l),B.cN,B.jF,D.fw))}return new C.tA("Line Up",new A.an(B.a0,k,B.ac,B.t,A.a([u,s,A.ap(12,A.x(r,B.m,k,B.e,B.O,0,B.p),k,k,12,12,k,k)],q),k),B.f4,k)}}
C.bjb.prototype={
a4(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.q6$.a
c7.zi(c5.e.Mr(c8))
w=C.haG(c8)
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
q.r=D.Z0.gp(0)
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
c7.ae(k,m)}this.b0O(c7,"OLDEST",D.emg,B.cN)
this.b0O(c7,"YOUNGEST",D.elI,B.b9)
t=A.br(D.f4K,B.fI)
s=A.K()
s.r=D.FW.gp(0)
c7.ap(t,s)
s=A.br(D.f4J,B.hN)
t=A.K()
t.r=D.Br.gp(0)
c7.ap(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.aZ(t,new C.dqL())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.J)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.cp(a1===$?c5.z=c5.FD(0):a1,f)
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
c7.N(new A.q(o,520),54,a9)}a9=D.dir[B.o.E(b0,6)]
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
else b9=a3?D.eon:c4
if(b1)c0=new A.q(3+b2*8,-56)
else if(h&&a7)c0=D.aLv
else c0=a3?new A.q(30,-104+Math.sin(e)*5):c4
C.Sm(c7,new A.q(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.Jq,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.iF(new A.en(a8,c4,c4,B.cH,c4,c4,c4,c4,c4,c4,D.frm),B.a5,B.bW,new A.jd(1),"\u2026",c4,1,c4,B.bX,c4,B.ct)
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
c3=new A.iF(new A.en(""+(a2+1),c4,c4,B.cH,c4,c4,c4,c4,c4,c4,D.frF),B.a5,B.bW,new A.jd(1),c4,c4,c4,c4,B.bX,c4,B.ct)
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
C.a1S.prototype={
a7(){return"_Trip."+this.b}}
C.alC.prototype={
S(){return new C.alD(D.X2,new A.ez(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.alD.prototype={
gDm(){var w,v,u=this,t=u.d
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
gqs(){var w=this.f
return w===$?this.f=new C.aKp(new C.bRq(this)):w},
gTQ(){var w=this.ghb(0)
return w.gzj()==null?"Grandma":B.a.i(w.gzj().b)},
Y(){this.a3()
this.are()},
t(){var w,v=this
v.gqs().t()
w=v.LR$
w===$&&A.c()
w.t()
w=v.q6$
w.T$=$.aw()
w.P$=0
v.bvE()},
aqI(d){var w,v,u,t=this
if(t.r!==D.acP)return
w=B.dy.aE(0,B.k.F((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDm()
if(v+1>=u.length){t.r=D.acQ
t.WM()}else{++t.w
t.ay=!1
t.r=D.X3
t.gqs().VQ(u[t.w].a)}if(t.c!=null)t.m(new C.bRo())}},
WM(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$WM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqs().VQ("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDm().length
r=C.bFV(t,u.z,s)
u.as=r
w=2
return A.b(C.BL(u.a.d,r),$async$WM)
case 2:u.at=e
s=u.a
w=3
return A.b(C.BM(s.d,s.c.a,"journey",u.x*10),$async$WM)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bRi())
return A.h(null,v)}})
return A.i($async$WM,v)},
bqQ(){this.aTW()},
aTW(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.acP
if(w.c!=null)w.m(new C.bRj())},
KY(d){var w,v,u,t,s=this
if(s.r!==D.X3)return
w=s.gDm()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bRn(s,d,v))
u=s.gqs()
t=s.w
u.VQ(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cQL(){if(this.r!==D.B0)return
this.aTW()},
B(d){var w,v,u,t=this,s=null,r=A.bR(0,new A.em(A.b4(s,s,s,new C.biC(t,t.q6$),B.az),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDm().length;++w){v=t.w
if(w<v||t.r===D.acQ)v=B.cN
else v=w===v?B.c:B.aW
u=new A.aP(4,4)
p.push(new A.by(1,B.bc,A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bg(u,u,u,u),s,s,B.n),s,7,s,B.wl,s,s,s,s),s))}p.push(B.bn)
p.push(D.fLC)
return new C.tA("Safari Journey",new A.an(B.a0,s,B.ac,B.t,A.a([r,A.ap(s,A.A(p,B.m,s,B.e,B.i,0,s,s),s,s,12,12,2,s),A.ap(10,t.cl0(),s,s,10,10,s,s)],q),s),B.f4,s)},
cl0(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bRm(o),l=D.qe.j(0.96),k=A.n(22),j=A.L(B.cN,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gTQ()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aVz,B.K,n,n),B.X,C.up("Start the journey",o.gbqP(),B.cN,D.bPo,D.fw)],x.p),B.m,n,B.e,B.O,0,B.p)
break
case 3:w=D.bcd
break
case 1:w=o.w
v=o.gDm()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.ay(D.lB,2.5,B.r,-1)
t.push(A.aA(n,A.p(n,A.d(r[s],n,n,n,n,n,n,D.aUX,B.K,n,n),B.f,n,D.ae7,new A.o(D.ajz,n,new A.bG(p,p,p,p),new A.bg(q,q,q,q),n,n,B.n),n,n,n,n,V.wg,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bRk(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.P,A.bW(B.bH,t,B.bt,n,8,8)],u),B.E,n,B.e,B.O,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDm().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.P,new A.bL(B.a9,n,n,C.up(v,o.gcQK(),B.cN,B.jF,D.fw),n)],x.p),B.E,n,B.e,B.O,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gTQ()),B.P,A.d(""+o.x+" of "+o.gDm().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aVf,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aQk(v)
u=C.aQk(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.ab5,n,n,n))}w.push(B.P)
w.push(A.at(C.up("Back to the games",new C.bRl(o),B.cN,B.k4,D.fw),n,n,n))
w=A.x(w,B.E,n,B.e,B.O,0,B.p)
break
default:w=n}return A.p(n,w,B.f,n,n,new A.o(l,n,j,k,D.aCP,n,B.n),n,n,n,n,B.bh,n,n,n)}}
C.biC.prototype={
a4(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.q6$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDm(),d0=B.k.F(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.acP,d2=c7*0.5
c8=A.ar(D.bgZ,D.brb,d0)
c8.toString
w=A.ar(D.Yg,G.ahb,d0)
w.toString
v=A.ar(B.u_,D.bpE,d0)
v.toString
$.S()
u=A.K()
t=x.O
u.sar(A.jv(B.I,new A.q(0,d2),A.a([c8,w,v],t),G.a41,B.x,c3))
d3.au(new A.a2(0,0,0+c6,0+c7),u)
s=new A.q(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.K()
u.sar(A.w3(s,60,A.a([D.bq1,B.L],t),c3,B.x,c3,c3,0))
d3.N(s,60,u)
u=A.K()
u.r=B.Yr.gp(0)
d3.N(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.k.E(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.E(r,3)*22
for(o=0;o<4;++o){n=D.dxC[o]
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
k.r=A.ar(l===0?D.bfy:D.bu9,D.bkq,w).gp(0)
d3.ae(i,k)}for(w=d2+2,r=0;r<8;++r)this.cbr(d3,new A.q(B.k.E(B.k.E(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.S()
w=A.K()
v=A.ar(D.aiJ,D.G8,d0)
v.toString
w.sar(A.jv(new A.q(0,d2),new A.q(0,c7),A.a([v,D.bq3],t),c3,B.x,c3))
d3.au(new A.a2(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.K()
w.r=D.bjK.gp(0)
d3.au(new A.a2(0,a0,c6,a1),w)
w=A.K()
w.r=D.btQ.gp(0)
d3.au(new A.a2(0,a0-3,c6,a0),w)
for(q=-B.k.E(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ao(B.Q,B.N,B.T,B.U,B.S)
u.r=K.Mw.gp(0)
d3.au(new A.a2(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.S()
b2=new A.ao(B.Q,B.N,B.T,B.U,B.S)
b2.r=D.bfd.gp(0)
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
b0.r=D.bs3.gp(0)
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
b0.r=D.bvb.gp(0)
d3.ap(b5,b0)
b0=new A.ao(B.Q,B.N,B.T,B.U,B.S)
b0.r=D.Br.gp(0)
b0.b=B.aa
b0.c=2
d3.ap(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.iF(new A.en(b6,c3,c3,B.cH,c3,c3,c3,c3,c3,c3,D.fpR),B.a5,B.bW,new A.jd(1),c3,c3,c3,c3,B.bX,c3,B.ct)
b7.ef()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a4(d3,new A.q(b4-b1/2,a2-b0.gba(b0)/2))
if(a7)b8=c4.r===D.acQ
else if(r===c4.w){b0=c4.r
b0=b0===D.X3||b0===D.B0
b8=b0}else b8=!1
if(a7){b0=c4.ghb(0).gzj()
b9=(b0==null?c3:b0.c)===D.op?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.E(r,8)]
b0=c4.gqs()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.B0
b0=c0?C.hz2(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.X3?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.q(40,-110+Math.sin(g)*10)
else a7=c0?new A.q(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.Sm(d3,new A.q(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.q(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bHU(d3,new A.q(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.k.E(w+r/7,1)
$.S()
t=new A.ao(B.Q,B.N,B.T,B.U,B.S)
t.r=D.btk.j(0.5*(1-c2)).gp(0)
d3.N(new A.q(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.X2)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.k.E(w+r/5,1)
t=Math.sin(r+c8)
$.S()
m=new A.ao(B.Q,B.N,B.T,B.U,B.S)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.N(new A.q(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.B0&&c4.ax){b7=A.fv(c3,B.ct,c3,c3,c3,A.cQ(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,B.cN,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,A8.Is,c3,c3),"BEEP BEEP!"),B.a5,B.bW,c3,B.dD,B.bX)
b7.ef()
b7.a4(d3,new A.q(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
cbr(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ar(D.bpy,D.bj3,g)
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
t.r=D.Zr.gp(0)
d.ae(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d_g[r]
p=new A.ao(B.Q,B.N,B.T,B.U,B.S)
p.r=D.Zr.gp(0)
p.c=4
p.d=B.bA
d.ah(new A.q(w,t),new A.q(v+q*24,s),p)
p=new A.ao(B.Q,B.N,B.T,B.U,B.S)
p.r=o.gp(0)
d.N(new A.q(v+q*26,u),10,p)}}else{w=e.a6(0,D.eok)
$.S()
v=A.K()
v.r=D.bff.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bJ(e.a6(0,D.eol),16,60)
w=A.K()
w.r=o.gp(0)
d.bY(v,w)}},
bHU(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.X2?0.045:0,a1=a2.c
J.bq(a1.save())
a1.translate(a3.a,a3.b+e)
a2.ir(0,a0)
for(w=0;w<2;++w){v=D.dq4[w]
u=d.ay&&d.r!==D.X2&&v>0
J.bq(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.S()
s=new A.ao(B.Q,B.N,B.T,B.U,B.S)
s.r=D.bu1.gp(0)
a2.N(B.I,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ao(B.Q,B.N,B.T,B.U,B.S)
s.r=D.bmt.gp(0)
a2.N(B.I,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ao(B.Q,B.N,B.T,B.U,B.S)
q.r=B.bo.gp(0)
q.c=2
a2.ah(B.I,new A.q(s*9,t*9),q)}a1.restore()}p=A.tY(D.f56,B.fI,B.fI,B.ii,B.hL)
$.S()
t=A.K()
t.sar(A.jv(D.ekl,B.a80,D.dg2,G.a41,B.x,f))
a2.ap(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ao(B.Q,B.N,B.T,B.U,B.S)
s.r=D.daa[B.o.E(o,4)].gp(0)
a2.au(new A.a2(t,-26,t+10,-19),s)}n=d.r===D.B0&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a2(s,-66,q,-36)
J.bq(a1.save())
a1.clipRRect(A.om(A.br(l,B.n3)),$.nK(),!0)
k=new A.ao(B.Q,B.N,B.T,B.U,B.S)
k.r=D.Yg.gp(0)
a2.au(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.B0?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.Sm(a2,new A.q(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aLm,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.br(l,B.n3)
i=new A.ao(B.Q,B.N,B.T,B.U,B.S)
i.r=D.ajB.gp(0)
i.b=B.aa
i.c=2
a2.ap(j,i)}d=A.br(D.Us,B.n3)
t=A.K()
t.r=D.Yg.gp(0)
a2.ap(d,t)
J.bq(a1.save())
a1.clipRRect(A.om(A.br(D.Us,B.n3)),$.nK(),!0)
C.Sm(a2,new A.q(D.Us.gbK().a,-10),0,0,0.7,-0.1,f,f,D.aLm,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.br(D.Us,B.n3)
d=A.K()
d.r=D.ajB.gp(0)
d.b=B.aa
d.c=2
a2.ap(t,d)
d=A.K()
d.r=An.G9.gp(0)
a2.N(D.emu,4,d)
d=A.K()
d.r=D.FW.gp(0)
a2.au(D.f6f,d)
for(w=0;w<3;++w){v=D.dq6[w]
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
return new A.a5(1/0,this.c,A.b4(w,w,w,new C.biJ(w),B.az),w)}}
C.biJ.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.do1[B.o.E(n,6)]
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
B(d){var w=null,v=x.p,u=A.a([A.aG(w,w,w,w,B.PR,w,w,w,new C.bRh(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a2,w,w,w,D.fn8,w,w,w),1)],v)
B.d.v(u,this.e)
return A.c5(w,D.Y2,A.p(w,A.bm(!0,A.x(A.a([D.c3U,new A.D(D.bGg,A.A(u,B.m,w,B.e,B.i,0,w,w),w),A.E(this.d,1)],v),B.m,w,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.b7G,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.Ik.prototype={
B(d){var w=null,v=this.d,u=C.aQk(v),t=C.igM(v),s=B.c.j(0.08),r=A.n(18),q=A.L(B.cN.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fpC,w,w,w)],x.p)
if(this.e)p.push(D.eqN)
p.push(B.an)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.fW,w,w,w))
if(t!=null)p.push(new A.D(B.uo,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.AI,w,w,w),w))
return A.p(w,A.x(p,B.m,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.n),w,w,w,w,B.bE,w,w,w)}}
C.W5.prototype={
S(){return new C.blt(A.U(x.N,x.S),B.o.E(Date.now(),1e5))},
cXD(d){return this.f.$1(d)},
ge3(){return this.d}}
C.blt.prototype={
gSP(){var w=this.d
return w===$?this.d=this.a.c:w},
Y(){this.a3()
this.Pr()},
Pr(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Pr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bS2(u.a.d),$async$Pr)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.de6[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bS1(p,(o===$?u.d=q.c:o).a,r),$async$Pr)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.e0A(u,n))
return A.h(null,v)}})
return A.i($async$Pr,v)},
uu(d){return this.co3(d)},
co3(d){var w=0,v=A.j(x.H),u=this,t
var $async$uu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a6(t,!1).cd(A.eb(new C.e0B(d),!1,null,x.H)),$async$uu)
case 2:u.r=B.o.E(Date.now(),1e5)
if(u.c!=null)u.Pr()
return A.h(null,v)}})
return A.i($async$uu,v)},
gb62(){var w,v,u,t=C.MT(this.gSP()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)s.push(B.a.i(w[u].b))
return s},
a2i(d){return this.cvg(d)},
cvg(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a2i=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.J)(d),++s)r.push(d[s].ak())
w=2
return A.b(u.a.cXD(r),$async$a2i)
case 2:if(u.c!=null)u.m(new C.e0C(u,r))
return A.h(null,v)}})
return A.i($async$a2i,v)},
OL(d){return this.bQz(d)},
bQz(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$OL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hcT(t.gSP())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.MC("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a6(s,!1).cd(A.eb(new C.e0y(q),!1,null,r)),$async$OL)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.J)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bj(j,new C.e0z(p))
o=s.length
B.d.c4(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a2i(A.cW(s,0,A.dA(2,"count",x.S),r).dn(0)),$async$OL)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OL,v)},
XI(d,e){return this.bO8(0,e)},
bO8(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$XI=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cf(null,null,!0,null,new C.e0x(e),o,null,!0,!0,x.y),$async$XI)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hcT(u.gSP()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.J)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a2i(o),$async$XI)
case 5:case 3:return A.h(null,v)}})
return A.i($async$XI,v)},
a9X(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e0u(this,j):h
o=o?0.55:1
w=A.ar(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.n(20)
u=A.L(B.aW,B.r,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cA,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.Vi,p,p,p),B.b3],s)
q=A.n(10)
r.push(A.p(p,A.d(i,p,p,p,p,p,p,D.fo0,p,p,p),B.f,p,p,new A.o(B.hC,p,p,q,p,p,B.n),p,p,p,p,B.Ci,p,p,p))
return A.aA(p,A.da(A.p(p,A.x(A.a([A.A(r,B.m,p,B.e,B.i,0,p,p),B.b3,A.d(e,p,2,p,p,p,p,D.fvI,p,p,p),B.cU,A.d(f,p,3,B.a2,p,p,p,D.foK,p,p,p)],s),B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a9(B.aA,B.aF,B.x,w,p,p),B.n),p,p,p,p,B.yC,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
Xb(d,e,f,g,h,i){return this.a9X(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.MT(s.gSP()),p=s.gSP(),o=C.aQk(s.e),n=C.hcT(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e0D(s),k=C.hCD(p,1).length,j=C.hCP(p,1).length,i=C.hDJ(p,1).length,h=B.c.j(0.07),g=A.n(20),f=A.L(B.cN.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,I.aaV,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.ftf,r,r,r),a0=q.b.length,a1=x.p
g=A.p(r,A.A(A.a([e,B.be,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,I.aaR,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.pP,r,r,r),D.fRT],a1),B.m,r,B.e,B.i,0,B.p)],a1),B.m,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(h,r,f,g,r,r,B.n),r,r,r,r,B.bE,r,r,r)
f=s.Xb("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aE,new C.e0E(s,p),l.$1("kahoot"))
h=s.Xb("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lB,new C.e0F(s,p),l.$1("fire"))
a0=s.Xb("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.BP,new C.e0G(s,p),l.$1("catch"))
j=j!==0?new C.e0J(s,p):r
j=s.a9X("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hl,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e0K(s,p):r
i=s.a9X("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.l9,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.Xb("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.eR,new C.e0L(s,p),l.$1("journey"))
k=k!==0?new C.e0M(s,p):r
k=A.a([g,B.aR,D.fVR,B.P,A.kS(0.98,A.a([f,h,a0,j,i,e,s.a9X("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.en,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.Xb("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d2,new C.e0N(s,p),l.$1("school"))],a1),2,12,12,r,B.dU,!0),B.d6,A.A(A.a([D.bI9,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fo4,r,r,r)],a1),B.m,r,B.e,B.i,0,r,r),B.P],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.J)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.ay(B.aW,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fCD,B.be,new A.by(1,B.bc,A.x(A.a([A.d(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hz,r,r,r),A.d(""+v.gapc(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.AI,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),r)],a1)
if(v.gapc(0).length>=2){f=D.lC.j(0.2)
t=new A.ay(D.lC,1,B.r,-1)
g.push(A.aA(r,A.p(r,A.X(B.hs,D.lC,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bG(t,t,t,t),r,r,r,B.a7),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e0O(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cN.j(0.2)
t=new A.ay(B.cN,1,B.r,-1)
f=A.aA(r,A.p(r,A.X(B.j2,B.cN,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bG(t,t,t,t),r,r,r,B.a7),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e0P(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.ff.j(0.2)
t=new A.ay(B.ff,1,B.r,-1)
B.d.v(g,A.a([B.bn,f,B.bn,A.aA(r,A.p(r,A.X(B.ef,B.ff,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bG(t,t,t,t),r,r,r,B.a7),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e0Q(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.p(r,new A.c6(B.aL,B.e,B.i,B.m,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bG(u,u,u,u),new A.bg(h,h,h,h),r,r,B.n),r,r,r,B.d3,B.bh,r,r,r))}if(s.a.e){j=m?new C.e0H(s):new C.e0I(a2)
i=A.n(18)
h=A.L(m?B.cN:B.aW,B.r,2)
g=m?B.cN.j(0.12):B.dt
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aA(r,A.p(r,A.at(A.d(f,r,r,r,r,r,r,A.l(r,r,m?B.cN:B.aD,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.n),r,r,r,r,B.NQ,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.fWN)
k.push(B.aC)
k.push(D.asm)
return new C.tA("Family Games \xb7 "+p.b,A.cj(k,r,r,D.bCh,r,r,B.ai,!1),B.f4,r)}}
C.a_K.prototype={
a7(){return"_KPhase."+this.b}}
C.alE.prototype={
S(){return new C.alF(D.b_H)},
gd1(){return this.e}}
C.alF.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a2()},
fX(d){var w,v=this
v.m(new C.bRC(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.de(B.fF,new C.bRD(v))},
aPu(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.m(new C.bRs(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.de(B.fe,new C.bRt(w))},
KY(d){var w
if(this.d!==D.acl)return
w=this.at
if(w!=null)w.a1(0)
this.b5Z(d)},
b5Z(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.k.V(500+500*B.k.F(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bRy(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cz(B.rI,v.giv(v))},
cKa(d){var w=this
if(w.d!==D.WB)return
if(w.e+1>=w.a.w.length)w.Yt()
else{w.m(new C.bRz(w))
w.aPu()}},
Yt(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Yt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bFV(p,u.w,t)
u.m(new C.bRv(u,s))
w=2
return A.b(C.BL(u.a.e,s),$async$Yt)
case 2:r=e
t=u.a
w=3
return A.b(C.BM(t.e,t.f,t.r,u.f),$async$Yt)
case 3:q=e
if(u.c!=null)u.m(new C.bRw(u,r,q))
return A.h(null,v)}})
return A.i($async$Yt,v)},
cL_(){var w,v,u,t,s=this,r=s.a,q=new A.e4()
q.d_(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.b5("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.e0(r,q)
for(r=A.cW(r,0,A.dA(4,"count",x.S),A.T(r).c),u=r.$ti,r=new A.bO(r,r.gJ(0),u.k("bO<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b5(t,B.k.V(w*(0.35+q.aj()*0.5)),!1))}B.d.aZ(v,new C.bRA())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b_H===r){w=A.a([D.fSh,B.X,A.d(s,t,t,t,t,t,t,B.KH,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.foc,t,t,t))
w.push(B.aC)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.xi,B.K,t,t))
w.push(B.dV)
w.push(C.up("Play",u.geY(u),B.cN,B.hs,D.fw))
w=A.at(new A.D(B.ex,A.x(w,B.m,t,B.e,B.O,0,B.p),t),t,t,t)
break A}if(D.b_I===r){w=A.at(A.d(""+u.z,t,t,t,t,t,t,D.fwd,t,t,t),t,t,t)
break A}if(D.acl===r||D.WB===r){w=u.cqF()
break A}if(D.b_J===r){w=u.cbs()
break A}w=t}return new C.tA(s,w,B.f4,t)},
cqF(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.WB,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aUK,j,j,j),B.b3],h)
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
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.l(j,j,e?D.lC:G.nh,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.P,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.fnh,B.K,j,j)],h),B.m,j,B.e,B.O,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fyl,B.K,j,j)
w=A.E(A.p(j,A.at(u,j,j,j),B.f,j,j,new A.o(D.qe,j,v,w,j,j,B.n),j,j,j,j,B.fr,j,j,1/0),3)
v=A.a([],h)
for(u=k.giv(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bRx(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.E(t,4)
n=D.aCt[o]
m=new A.aP(16,16)
l=new A.ay(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.d(D.aCM[o],j,j,j,j,j,j,D.fpd,j,j,j),B.at,new A.by(1,B.bc,A.d(r[t],j,3,B.a2,j,j,j,D.fo9,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.aqT)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bWM)
v.push(A.aA(j,new A.SC(A.p(j,new A.c6(B.aL,B.e,B.i,B.m,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bG(l,l,l,l),new A.bg(m,m,m,m),W.aAS,j,B.n),j,j,j,j,B.f1,j,j,j),p,B.b6,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.an,f,B.af,w,B.af,A.E(A.kS(1.45,v,2,10,10,j,B.dU,!1),4)],h)
if(i)h.push(D.eq2)
return new A.D(B.a0_,A.x(h,B.m,j,B.e,B.i,0,B.p),j)},
cbs(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cL_(),m=x.p,l=A.a([D.bbv,A.at(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.pP,o,o,o),o,o,o),A.at(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.Vn,o,o,o),o,o,o),B.aR],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cN.j(0.25):B.dt
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.cN:B.bB,1,B.r,-1)
q=A.d(w<3?D.dgj[w]:""+(w+1),o,o,o,o,o,o,B.n8,o,o,o)
s=s?B.u:B.V
l.push(A.p(o,new A.c6(B.aL,B.e,B.i,B.m,o,B.p,o,0,A.a([new A.a5(34,o,q,o),new A.by(1,B.bc,A.d(t.a,o,o,o,o,o,o,new A.G(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.d(""+t.b,o,o,o,o,o,o,B.ix,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bG(r,r,r,r),new A.bg(u,u,u,u),o,o,B.n),o,o,o,B.cv,B.eV,o,o,o))}l.push(B.X)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.Ik(m,v,p.CW,o))
l.push(B.aR)
l.push(A.at(C.up("Back to the games",new C.bRu(p),B.cN,B.k4,D.fw),o,o,o))
return A.cj(l,o,o,B.fr,o,o,B.ai,!1)}}
C.TM.prototype={
S(){return new C.alB(A.U(x.de,x.er))}}
C.alB.prototype={
gD_(){var w,v=this,u=v.d
if(u===$){w=C.hiG(v.a.c.ak())
v.d!==$&&A.bE()
v.d=w
u=w}return u},
glR(d){var w,v,u=this,t=u.e
if(t===$){w=u.gD_().b
v=$.aw()
u.e!==$&&A.bE()
t=u.e=new A.au(new A.ba(w,B.b5,B.aP),v)}return t},
cet(d){return this.f.c3(0,d,new C.bR2(d))},
Y(){this.a3()
var w=this.gD_().c
if(w.length===0)w.push(C.h4t(null,0,20,""))},
t(){var w,v,u=this.glR(0)
u.T$=$.aw()
u.P$=0
for(u=this.f,u=new A.dq(u,u.r,u.e);u.C();)for(w=J.aX(u.d);w.C();){v=w.gR(w)
v.T$=$.aw()
v.P$=0}this.a2()},
cK0(){if(this.gD_().c.length>=12)return
this.m(new C.bR3(this))},
jG(d){var w,v,u=this,t=u.gD_()
t.b=B.a.i(u.glR(0).a.a)
w=t.gapc(0)
if(t.b.length===0||w.length<2){u.c.L(x.q).f.U(D.fgg)
return}v=t.c
B.d.a9(v)
B.d.v(v,w)
v=u.c
v.toString
A.a6(v,!1).O(t)},
B(d){var w,v,u=this,t=null,s=new C.bRd(),r=x.p,q=A.a([A.bM(!1,D.fHA,t,t,!0,t,t,t,u.gbpH(u),t,t)],r),p=A.a([D.fWo,B.af,A.aM(t,B.Z,!1,t,!0,B.t,t,A.aN(),u.glR(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ak,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ab,t,t,t,t,t,t,t,t,t,t,t,B.fW,!0,B.a5,t,B.ao,t,t,t,t),B.aC],r)
for(w=0;v=u.gD_().c.length,w<v;++w)B.d.v(p,A.a([new A.ff(new C.bRc(u,w,s),t)],r))
if(v<12)p.push(A.at(C.up("\uff0b Add a question",u.gcK_(),B.aW,t,B.c),t,t,t))
return new C.tA("Make your game",A.cj(p,t,t,D.bCe,t,t,B.ai,!1),q,t)}}
C.aqF.prototype={
S(){return new C.aEM(A.a([],x._))},
bv(){return this.r.$0()},
ql(){return this.w.$0()},
ge3(){return this.c}}
C.aEM.prototype={
Y(){var w,v
this.a3()
this.wq()
w=this.a
v=w.c
if(v.length!==0)C.a7X(v,w.e,w.d.w)},
wg(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hfu(r,t.e,!1,s.w,new C.e2f(u),null,s),$async$wg)
case 2:w=3
return A.b(u.wq(),$async$wg)
case 3:return A.h(null,v)}})
return A.i($async$wg,v)},
a0u(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a0u=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hfu(r,t.e,!0,s.w,new C.e2e(u),null,s),$async$a0u)
case 2:w=3
return A.b(u.wq(),$async$a0u)
case 3:return A.h(null,v)}})
return A.i($async$a0u,v)},
wq(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wq=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Be(q.a.c),$async$wq)
case 7:p=e
if(q.c!=null)n=q.e||J.cI(p)
else n=!1
if(n)q.m(new C.e2h(q,p))
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
return A.b(C.Hc(q.a.c).df(0,B.qp),$async$wq)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.e2i(q,o))
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
if(q.c!=null&&q.e)q.m(new C.e2j(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wq,v)},
P6(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$P6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.L(s).f.U(D.ffR)
w=3
return A.b(C.Hc(t.a.c),$async$P6)
case 3:r=e
w=4
return A.b(C.fVf(t.a.c,r),$async$P6)
case 4:q=e
w=5
return A.b(C.Hc(t.a.c),$async$P6)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.e2d(t,p))
o=t.c.L(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(null,null,null,q?B.dG:B.cY,null,B.t,null,s,null,B.mO,null,null,null,null,null,null,null,null,null,null))
t.a.ql()
case 1:return A.h(u,v)}})
return A.i($async$P6,v)},
Io(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Io=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ioY(l),$async$Io)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hSQ(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b0M(q,p.e,l,"Each family tree costs $"+B.k.ad(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Io)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hzc(r)
o=Date.now()
n=t.a.c
m=new C.kR(l,r.toUpperCase(),p,!0,B.Z,D.Dr,new A.V(o,0,!1),0,n,D.ux,B.cc)
w=5
return A.b(C.a3E(n,m),$async$Io)
case 5:w=6
return A.b(t.wq(),$async$Io)
case 6:t.a.bv()
t.a.ql()
if(t.c==null){w=1
break}t.EY(m)
case 1:return A.h(u,v)}})
return A.i($async$Io,v)},
EY(d){return this.cjn(d)},
cjn(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$EY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Be(u.a.c),$async$EY)
case 2:n=l.nv(k.dH(f,new C.e2g(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hE(m,new C.aqz(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$EY)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a3E(u.a.c,o),$async$EY)
case 6:case 5:w=7
return A.b(u.wq(),$async$EY)
case 7:u.a.ql()
return A.h(null,v)}})
return A.i($async$EY,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.R(d).ax.a===B.J,o=new C.uc(p)
if(r.e)return A.at(A.n0(q,p?B.bv:B.bo,q,q,q,q,q,q,q,q),q,q,q)
if(J.cq(r.d)){w=p?B.e8:B.c
v=A.n(15)
u=A.aI(!1,B.a3,!0,q,A.aO(!1,q,!0,A.p(q,D.bUs,B.f,q,q,new A.o(B.aY.j(0.12),q,A.L(B.aY,B.r,2),q,q,q,B.a7),q,52,q,q,q,q,q,52),B.cQ,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcir(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.av,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Gc(A.p(q,A.x(A.a([u,B.aR,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bv:B.bo,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.dV,A.bH(D.fZC,q,r.gaSJ(),A.bn(B.bQ,q,q,q,q,q,Aw.a0o,q,new A.b9(A.n(12),B.a1),q,q,q))],x.p),B.m,q,B.e,B.i,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bEY,q,q,1/0),15,B.ag,1.05,D.ac7,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.av,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b3],v)
if(J.cI(r.d))w.push(A.aG(q,q,q,q,A.X(B.zp,B.aY,q,q,q,q),q,q,q,new C.e2l(r),q,q,q,q,"Sync family trees with database",q))
if(J.cI(r.d))w.push(A.aG(q,q,q,q,A.X(B.zj,B.aY,q,q,q,q),q,q,q,r.gagJ(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dh(E.arN,D.fEW,r.gaSJ(),A.bn(B.bQ,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.m,q,B.e,B.i,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.Gc(r.cG9(J.t(r.d,s),o),14,B.ag,1,D.ac7,q))
B.d.v(w,u)}return A.x(A.a([p,B.aC,A.x(w,B.m,q,B.e,B.i,0,B.p)],v),B.E,q,B.e,B.i,0,B.p)},
cG9(d,e){var w=null,v=e.a,u=v?B.e8:B.c,t=A.n(14),s=A.L((v?B.ee:B.bP).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.er,10)],x.V),q=A.n(14),p=A.p(w,D.bTw,B.f,w,w,new A.o(B.aY.j(0.15),w,w,A.n(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaqc(),m=d.d?"":" \xb7 Public",l=d.y===D.kV?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bG,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bo,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.i,0,B.p),1)
return A.p(w,A.aI(!1,B.a3,!0,w,A.aO(!1,q,!0,new A.D(B.bE,A.A(A.a([p,B.be,l,A.X(B.OH,v?B.bv:B.bo,w,w,w,w)],k),B.m,w,B.e,B.i,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e2k(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
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
a3s(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3s=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yq("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e1G(r),s,null,!0,!0,x.y),$async$a3s)
case 3:if(e!==!0||t.c==null){w=1
break}t.JV()
t.m(new C.e1H(t,r))
w=4
return A.b(t.uq(),$async$a3s)
case 4:t.a.bv()
t.yq(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a3s,v)},
cvQ(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aV.x1$.push(new C.e1B(w,f,d,e))},
aV0(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dr()
u.eg(w,v,0,1)
u.k5(q,q,1,1)
this.w.sp(0,u)},
bcB(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eJ(new Float64Array(16))
q.e6(r)
w=q.D4()
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
case 2:t=s.nv(r.dH(e,new C.e12(u)))
if(t!=null&&u.c!=null)u.m(new C.e13(u,t))
return A.h(null,v)}})
return A.i($async$adq,v)},
yq(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.a_,w,w,w,w,w,w,w,w,w,w))},
wg(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.hfu(o,t,!1,r,new C.e1k(u),q.a,s),$async$wg)
case 2:n=A
m=J
w=3
return A.b(C.Hc(u.a.c),$async$wg)
case 3:p=n.nv(m.dH(e,new C.e1l(u)))
if(p!=null&&u.c!=null)u.m(new C.e1m(u,p))
return A.h(null,v)}})
return A.i($async$wg,v)},
JV(){var w=this.e,v=this.d
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
a1Z(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a1Z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.uq(q,t.a.c)){t.yq("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.iq7(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a1Z)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.JV()
t.m(new C.e1A(t,r))
w=4
return A.b(t.uq(),$async$a1Z)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1Z,v)},
b2H(){var w=this.c
w.toString
A.a6(w,!1).cd(A.eb(new C.e1h(this),!1,null,x.H))},
a0I(){return this.cjp()},
cjp(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0I=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.uq(m,t.a.c)){t.yq("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.R(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Y(s,new C.e1x(),A.T(s).k("Y<1>")).gJ(0)
s=A.ey([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("co.E"))
B.d.fi(p)
s=t.c
s.toString
w=3
return A.b(A.bT(B.L,null,new C.e1y(n,t,new C.uc(m.ax.a===B.J),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a0I)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.JV()
t.m(new C.e1z(t,o))
w=6
return A.b(t.uq(),$async$a0I)
case 6:case 5:if(o.a&&t.c!=null)t.b2H()
case 1:return A.h(u,v)}})
return A.i($async$a0I,v)},
Ww(d){return this.bDd(d)},
bDd(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ww=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.uq(r,t.a.c)){t.yq("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e0R(t,d),r,null,!0,!0,x.P),$async$Ww)
case 3:s=f
if(s==null){w=1
break}t.JV()
t.m(new C.e0S(t,s))
w=4
return A.b(t.uq(),$async$Ww)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ww,v)},
a3O(d){return this.cIo(d)},
cIo(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a3O=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.R(s)
t=u.c
t.toString
w=2
return A.b(A.cf(null,null,!0,null,new C.e1J(u,d,new C.uc(s.ax.a===B.J)),t,null,!0,!0,x.H),$async$a3O)
case 2:return A.h(null,v)}})
return A.i($async$a3O,v)},
cfG(d){var w=this,v=w.d
v===$&&A.c()
if(C.uq(v,w.a.c))w.OM(d)
else w.a3O(d)},
aje(d,e){return this.czN(d,e)},
czN(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aje=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.R(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.e1D(new C.uc(r.ax.a===B.J),d,e),s,null,!0,!0,x.H),$async$aje)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aje,v)},
It(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$It=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kV?3:5
break
case 3:w=6
return A.b(C.h2G(t.a.c),$async$It)
case 6:s=e
o=t.a
r=C.hnw(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.aje(!s,!r),$async$It)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aQs(o,t.a.c)){t.yq("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lm(o,"Cancel","Remove",q.y===D.kV?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$It)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aQo(t.a.c,t.d.a),$async$It)
case 11:t.a.bv()
o=t.c
if(o==null){w=1
break}A.iX(o,null)
case 1:return A.h(u,v)}})
return A.i($async$It,v)},
aaT(d){return this.bOp(d)},
bOp(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$aaT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.uq(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aW(s,new C.e0T(p))){o=A.T(s)
p.a=A.nv(new A.cM(new A.Y(s,new C.e0U(d),o.k("Y<1>")),new C.e0V(),o.k("cM<1,m>")))}q=p.a
if(q==null)q=d.d
t.JV()
t.m(new C.e0W(t,s,d,q))
w=3
return A.b(t.uq(),$async$aaT)
case 3:t.yq(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$aaT,v)},
OM(d){return this.bQD(d)},
bQD(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.uq(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a3O(d),$async$OM)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.e1_(t,d),r,null,!0,!0,x.P),$async$OM)
case 6:s=f
if(s==null){w=1
break}t.JV()
t.m(new C.e10(t,s))
w=7
return A.b(t.uq(),$async$OM)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OM,v)},
cGz(){var w=this,v=w.d
v===$&&A.c()
if(!C.uq(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.e1I(w))
w.uq()},
Zu(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Zu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aQs(n,t.a.c)){t.yq("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.R(n)
s=$.aw()
r=new A.au(B.au,s)
q=t.d.e
p=A.bo(new A.N(q,t.gce9(),A.T(q).k("N<1,m>")).bZ(0,new C.e1c()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e1d(t,new C.uc(n.ax.a===B.J),p,r),q,null,!0,!0,x.y),$async$Zu)
case 3:o=e
r.T$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.JV()
t.m(new C.e1e(t,p))
w=4
return A.b(t.uq(),$async$Zu)
case 4:t.yq("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Zu,v)},
cea(d){return B.a.i(d.toLowerCase())},
cib(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.uq(v,w)
t=r.d
s=C.ife(t)
C.ip1(q,t.b,u,C.ifd(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.R(d).ax.a===B.J,m=new C.uc(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Y(l,new C.e1Q(),A.T(l).k("Y<1>")).gJ(0)
l=n?B.c3:B.iB
v=A.X(B.a1y,n?B.bv:B.bo,o,o,o,18)
u=x.p
v=A.a([new A.D(B.C8,A.aO(!1,o,!0,new A.D(B.hE,A.A(A.a([v,B.bn,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bo,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.O,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e1R(p,d),o,o,o,o,o,o,o),o),new A.D(B.nA,p.c0P(m),o)],u)
if(p.d.y===D.kV){t=B.t7.j(0.15)
s=A.n(12)
r=A.L(B.t7.j(0.45),B.r,1)
q=C.Ha(p.d,p.a.c)
v.push(new A.D(B.yF,A.p(o,A.A(A.a([D.bYT,B.at,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.av,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iu,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.av,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b3],u)
if(C.uq(p.d,p.a.c)&&p.e.length!==0)u.push(new C.Go("Undo",B.pq,p.gcGy(),m,o,o))
u.push(new C.Go("Family Book",D.bOe,p.gcia(),m,B.u0,o))
u.push(new C.Go("Family games",B.ox,p.gcim(),m,B.aE,o))
if(C.uq(p.d,p.a.c))u.push(new C.Go("Display settings",B.CZ,p.gcjo(),m,B.b2,o))
u.push(new C.Go("Sync",B.zj,p.gagJ(),m,o,o))
t=p.d
if(t.y===D.kV||C.aQs(t,p.a.c)){t=p.d.y===D.kV?"Remove shared tree":"Delete tree"
u.push(new C.Go(t,B.ef,p.gbOz(),m,B.ff,o))}if(C.uq(p.d,p.a.c))u.push(new C.Go("Add member",B.wD,new C.e1S(p),m,B.bQ,o))
v.push(new A.D(A_.alD,A.A(u,B.m,o,B.e,B.i,0,o,o),o))
if(p.d.gaqc()===0){u=A.at(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bo,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cr(new C.e1T(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?O.a1C:A7.OI,o,o,o,o,o)
v.push(A.at(A.ho(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e1U(p),o),o,o,o))}return A.c5(o,l,A.bm(!0,A.x(v,B.E,o,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c0P(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.n(22)
v=A.a([new A.ac(0,B.G,B.fP.j(0.35),B.du,18)],x.V)
u=A.n(22)
t=A.ap(-26,A.X(B.zc,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aI(!1,B.a3,!0,m,A.aO(!1,m,!0,A.p(m,D.c11,B.f,m,m,new A.o(B.c.j(0.16),m,A.L(B.c.j(0.45),B.r,1.5),m,m,m,B.a7),m,46,m,m,m,m,m,46),B.cQ,!0,m,m,m,m,m,m,m,m,m,m,m,n.gagJ(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.fqe,m,m,m)
r=r.gaqc()
p=n.d.gaqc()===1?"member":"members"
o=x.p
p=A.a([s,B.be,A.E(A.x(A.a([q,B.bG,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.i,0,B.p),1)],o)
if(C.uq(n.d,n.a.c))p.push(A.aG(m,m,m,m,D.bZ5,m,m,m,n.gctb(),m,m,m,m,"Rename",m))
s=A.A(p,B.m,m,B.e,B.i,0,m,m)
r=n.d.d
q=r?B.jG:B.mX
r=r?"Private":"Public"
r=A.E(n.awJ(q,"Privacy",r,n.a.d.w?n.gcFt():m),1)
q=A.E(n.awJ(B.zk,"Tree code",n.d.c,new C.e11(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.ae,q,B.ae,A.E(n.awJ(D.bPV,"Collaborators",p,n.gc5z()),1)],o),B.m,m,B.e,B.i,0,m,m)],o)
if(n.d.y===D.kV){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aI(!1,B.a3,!0,A.n(999),A.aO(!1,A.n(999),!0,new A.D(B.ha,A.A(A.a([A.X(B.pr,B.c,m,m,m,14),B.e1,A.d("View only",m,m,m,m,m,m,B.aUQ,m,m,m)],o),B.m,m,B.e,B.O,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.aj)],o))}return A.p(m,A.bx(u,new A.an(B.a0,m,B.ac,B.t,A.a([t,new A.D(B.GI,A.x(p,B.E,m,B.e,B.i,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.c5l,B.n),m,m,m,m,m,m,m,1/0)},
awJ(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aI(!1,B.a3,!0,A.n(14),A.aO(!1,A.n(14),!0,new A.D(I.amN,A.x(A.a([A.X(d,B.c,w,w,w,18),B.aw,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.vu,A.d(f,w,1,B.a2,w,w,w,Ap.AF,w,w,w)],x.p),B.m,w,B.e,B.i,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)}}
C.bgd.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gav(r)&&s.c.length===0)return B.bL
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bgg(s,t),new A.av(w,v))],x.p)
r=r.gdR(r)
B.d.v(u,r.dK(r,new C.dgd(this),x.l))
r=s.c
B.d.v(u,new A.N(r,new C.dge(this),A.T(r).k("N<1,v>")))
return new A.D(B.us,new A.a5(w,v,new A.an(B.a0,t,B.ac,B.f,u,t),t),t)}}
C.KL.prototype={}
C.Gs.prototype={}
C.bgf.prototype={
gbl6(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aKk.prototype={}
C.bgg.prototype={
bQe(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
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
bQb(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aZ(a0,new C.dgy())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aW(a0,new C.dgz(f))
t=new A.N(a0,new C.dgA(f),A.T(a0).k("N<1,I>")).bZ(0,new C.dgB()).cH(0,1/0,B.tM)
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
if(s!=null&&s.length!==0)this.bQb(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.J)(v),++t){r=v[t]
if(r.c)this.bQe(d,w,r.a,r.b)}},
aC(d){return d.b!==this.b}}
C.bk2.prototype={
gcbu(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aD1
switch(w.c.a){case 0:return D.cYZ
case 1:return D.da4
case 2:return D.drV}},
gcbx(){var w=this.c,v=C.hyn(w.w),u=C.hyn(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.R(d).ax.a===B.J,q=t.gcbu(),p=t.c,o=N.bEy(p.f),n=t.gcbx(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cL,10)],m),k=r?B.av:B.c,j=A.L(r?B.av:B.c,B.r,2)
if(o!=null)w=A.tE(B.A,s,B.cj,B.bZ,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a9(B.a6,B.a9,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hR(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a7),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a9(B.aA,B.aF,B.x,q,s,s),B.a7),s,56,s,s,B.GY,s,s,56)],v)
k=t.d
if(k>0){j=A.n(10)
w=A.L(r?B.av:B.c,B.r,1.5)
l.push(A.ap(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fAL,s,s,s),B.f,s,s,new A.o(B.ch,s,w,j,s,s,B.n),s,s,s,s,D.bGX,s,s,s),s,s,s,-6,-4,s))}k=r?B.cs:B.c
j=A.n(8)
w=A.L(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dF,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cs,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aS:B.bo,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aA(s,new A.a5(84,112,A.x(A.a([new A.an(B.a0,s,B.ac,B.f,l,s),B.aw,A.p(s,A.x(p,B.m,s,B.e,B.O,0,B.p),B.f,s,D.b5S,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bH7,s,s,s)],v),B.m,s,B.e,B.i,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bfi.prototype={
a4(d,e){var w,v,u,t,s
$.S()
w=A.K()
v=this.b
u=v?B.c:D.biG
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.N(new A.q(s,t),1,w)},
aC(d){return d.b!==this.b}}
C.by_.prototype={
B(d){var w=this,v=null,u=new C.flq(w),t=w.c,s=t?B.cs:B.c,r=A.n(12),q=u.$3(B.hU,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bB:B.fo,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.wF,"Zoom out",w.e)
return A.aI(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bB:B.fo,v,v,v,1,v,v,v,v,v,22),u.$3(B.apl,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.O,0,B.p),B.f,s,4,v,B.dq,v,v,v,B.aj)}}
C.bnl.prototype={
B(d){var w=this,v=null,u=B.bQ.j(0.15),t=A.L(B.bQ,B.r,2),s=w.e,r=x.p
t=A.aA(v,A.p(v,A.x(A.a([A.X(s?O.a1C:A7.OI,B.bQ,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fwT,v,v,v)],r),B.m,v,B.ba,B.i,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a7),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.an,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fuJ,B.K,v,v)],r)
if(s){t=A.a([B.an],r)
s=w.d
B.d.v(t,new A.N(s,new C.eWA(w),A.T(s).k("N<1,v>")))
B.d.v(u,t)}return new A.a5(84,v,A.x(u,B.m,v,B.e,B.i,0,B.p),v)}}
C.a_X.prototype={
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
r.y=t==null?D.yT:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.igN(w.r,w.f)
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
Qe(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Qe=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hnw(p.y,p.w)
w=3
return A.b(A.lw(t.a.w,B.Jj),$async$Qe)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b0M(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Qe)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hSR(p.y,p.w)
t.a.bv()
case 5:w=7
return A.b(Ay.Hm(78,800),$async$Qe)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dwq(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Qe,v)},
cbw(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hS(B.o.u(1000*Date.now()),w,D.yT,null,null,null,"","","","","",1,!1,0)
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
return A.b(A.cf(null,null,!0,null,new C.dwp(r),s,null,!0,!0,x.y),$async$aau)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$aau,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.R(d).ax.a===B.J,i=new C.uc(j),h=l.a.e,g=A.T(h).k("Y<1>"),f=A.C(new A.Y(h,new C.dwz(l),g),g.k("M.E"))
h=j?B.e8:B.c
g=A.n(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bFk,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.av,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ap(k,A.hb(A.aO(!1,k,!0,new A.D(B.md,A.X(B.ef,B.pc,k,k,k,17),k),B.cQ,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbLb(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jT:B.jj
t=N.bEy(l.as)
if(l.as==null)s=A.X(B.pi,j?B.bv:B.bo,k,k,k,40)
else s=k
s=A.at(A.aA(k,new A.an(B.a0,k,B.ac,B.t,A.a([A.h7(u,t,s,k,42),A.ap(0,A.h7(B.bQ,k,D.bSA,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcbt(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.c()
t=C.aDe(t,"Full name",B.mT,1,1,i,B.mt)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.X,new C.bk0(i,u,new C.dwA(l),k)],v),B.m,k,B.e,B.i,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bo,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.byI],q)
o=l.a.e
B.d.v(p,new A.N(o,new C.dwB(),A.T(o).k("N<1,eG<m?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bo,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.byK],q)
B.d.v(q,new A.N(f,new C.dwD(),A.T(f).k("N<1,eG<m?>>")))
o=A.x(A.a([t,B.an,new C.adX(i,r,"Who is their parent?",p,new C.dwE(l),k,o),B.aC,n,B.an,new C.adX(i,m,"Who is their spouse / partner?",q,new C.dwF(l),k,o)],v),B.al,k,B.e,B.i,0,B.p)
q=l.f
q===$&&A.c()
q=C.aDe(q,"Birth date",D.aoq,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aDe(m,"Birth place",B.a1R,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aDe(n,"Date of death (if deceased)",D.aqy,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aDe(p,"Occupation",B.a30,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.ac,B.t,w,k),B.aC,s,B.by,new C.adY(i,"Identity",u,k),B.af,new C.adY(i,"Family links",o,k),B.af,new C.adY(i,"Life details",A.x(A.a([q,B.X,m,B.X,n,B.X,p,B.X,C.aDe(r,"Notes",B.li,5,3,i,k)],v),B.m,k,B.e,B.i,0,B.p),k),B.af,new C.aDd(i,"Child order",l.cjD(l.at),new C.dwG(l),new C.dwH(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hcH(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dwI(l):k
B.d.v(r,A.a([B.X,new C.aDd(i,"Visible in tree",u,w,new C.dwJ(l),k)],v))}r.push(B.X)
w=j?B.jT:B.jj
u=A.n(14)
t=A.L(j?B.ee:B.bP,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.av,k,k,k,k,k,k,k,k,14,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iO(k,B.bQ,k,B.ag,k,new C.dwK(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bo,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,O.alh,k,k,k))
r.push(B.by)
w=j?B.aQ:B.av
j=j?B.ee:B.bP
r.push(A.A(A.a([A.E(A.dT(B.nU,new C.dwC(d),A.di(k,k,k,k,k,k,k,k,k,w,k,k,B.cn,k,new A.b9(A.n(14),B.a1),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.be,A.E(A.bH(D.f7u,k,l.gcbv(),A.bn(B.aY,k,k,0,B.c,k,B.cn,k,new A.b9(A.n(14),B.a1),k,k,k)),2)],v),B.m,k,B.e,B.i,0,k,k))
r.push(B.aw)
return A.eg(B.f4,k,B.ag,h,new A.a5(420,k,A.cg(A.x(r,B.al,k,B.e,B.O,0,B.p),B.t,k,B.y,k,k,k,k,B.ai),k),D.am6,k,B.alu,new A.b9(g,B.a1),k,k)},
cjD(d){var w=B.o.E(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.E(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.adY.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bo,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jT:B.jj,s=A.n(16)
return A.x(A.a([new A.D(D.amx,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.L(v?B.ee:B.bP,B.r,1),s,w,w,B.n),w,w,w,w,B.bh,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)}}
C.bk1.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.e8:B.c,r=A.n(12),q=A.L((t?B.ee:B.bP).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aQ:B.av,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.Z,!1,u,!0,B.t,u,A.aN(),v.d,u,u,u,u,u,2,A.bs(u,B.eH,u,B.we,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bv:B.bo,u,u,u,u,u,u,u,u,u,u,u,B.cC,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bQ,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ak,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ab,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.adX.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.e8:B.c,s=A.n(12),r=A.L((u?B.ee:B.bP).j(0.85),B.r,1),q=A.X(B.rT,u?B.bv:B.bo,v,v,v,v),p=A.l(v,v,u?B.aQ:B.av,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.e8:B.c
return A.p(v,new A.Ef(A.a58(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bv:B.bo,v,v,v,v,v,v,v,v,v,v,v,B.cC,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.ks,v,v,v)}}
C.bk0.prototype={
B(d){var w=new C.dwL(this)
return A.A(A.a([w.$3(D.wn,"Male",B.Pt),B.ae,w.$3(D.op,"Female",B.Pc),B.ae,w.$3(D.yT,"Other",B.nE)],x.p),B.m,null,B.e,B.i,0,null,null)}}
C.aDd.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jT:B.jj,r=A.n(14),q=A.L(t?B.ee:B.bP,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.av,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bo,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.i,0,B.p),1),new C.aJm(u,B.wF,w.f,v),B.bn,new C.aJm(u,B.hU,w.r,v)],o),B.m,v,B.e,B.i,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.eD,v,v,v)}}
C.aJm.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bQ.j(0.12)
else w=s.c.a?B.e8:B.c
v=A.n(10)
u=A.n(10)
if(p)t=B.bQ
else t=(s.c.a?B.bv:B.bo).j(0.4)
return A.aI(!1,B.a3,!0,v,A.aO(!1,u,!0,new A.a5(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.aj)}}
C.adZ.prototype={
bUn(d){switch(d.a){case 0:return B.bQ
case 1:return B.bF
case 2:return B.d_}},
bUo(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aZy(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
AG(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.e8:B.c
u=A.n(12)
t=A.L((w?B.ee:B.bP).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bQ,p,p,p,18),B.at],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bv:B.bo,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.aw,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.av,p,p,p,p,p,p,p,p,14,p,p,B.V,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.i,0,B.p),1))
return A.p(p,A.A(r,B.E,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cv,B.yB,p,p,1/0)},
af7(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bo,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jT:B.jj,s=A.n(16),r=A.L(v?B.ee:B.bP,B.r,1)
return A.x(A.a([new A.D(D.amx,u,w),A.p(w,A.x(e,B.m,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bU,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hDw(r,q),o=q.c,n=t.bUn(o),m=N.bEy(q.f),l=t.e.a,k=l?B.e8:B.c,j=A.n(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aQ:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kV?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bv:B.bo,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.L(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.I,12)],x.V)
u=n.j(0.12)
l=A.at(A.p(s,A.h7(u,m,m==null?A.X(B.pi,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a7),s,s,s,s,B.ey,s,s,s),s,s,s)
w=n.j(0.14)
v=A.n(20)
u=A.L(n.j(0.45),B.r,1)
v=A.at(A.p(s,A.d(t.bUo(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mP,s,s,s),s,s,s)
u=x.p
i=A.a([t.AG("Full name",i,B.mT)],u)
if(p>0)i.push(t.AG("Child order","#"+p,B.Pi))
r=A.a([h,B.aw,r,B.aR,l,B.X,v,B.by,t.af7("Identity",i),B.af,t.af7("Life details",A.a([t.AG("Birth date",q.w,D.aoq),t.AG("Birth place",q.x,B.a1R),t.AG("Date of death",q.y,D.aqy),t.AG("Occupation",q.z,B.a30)],u)),B.af,t.af7("Family links",A.a([t.AG("1. Parent",t.aZy(q.d),B.He),t.AG("2. Spouse",t.aZy(q.e),B.Hs)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.af,t.af7("Notes",A.a([t.AG("Notes",q,B.li)],u))],u))
r.push(B.by)
r.push(A.bH(B.KN,s,new C.dwV(d),A.bn(B.aY,s,s,s,s,s,B.cn,s,new A.b9(A.n(14),B.a1),s,s,s)))
return A.eR(s,k,new A.cR(B.lZ,A.cg(A.x(r,B.al,s,B.e,B.O,0,B.p),B.t,s,B.y,s,B.wi,s,s,B.ai),s),s,s,s,B.GL,B.da,s,new A.b9(j,B.a1),s)}}
C.Go.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bv:B.bo
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.uv,A.hb(A.aI(!1,B.a3,!0,A.n(8),A.aO(!1,A.n(8),!0,new A.a5(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.aj),u,v.c,u,u),u)}}
C.aqC.prototype={
f2(){var w,v,u=this,t=x.N,s=A.U(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.ab().af())
w=u.c
v=A.T(w).k("N<1,a8<m,@>>")
w=A.C(new A.N(w,new C.cet(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jp(w,new C.ceu(),t,x.fO))
return s}}
C.aqD.prototype={
S(){return new C.aEL(A.a([],x.bF))},
gd1(){return this.c}}
C.aEL.prototype={
Y(){this.a3()
this.K1()},
K1(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$K1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cex(t.a.c),$async$K1)
case 3:r=e
w=4
return A.b(C.Be(t.a.c),$async$K1)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rf(q,new C.e22(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.e23(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$K1,v)},
z_(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.a_,w,w,w,w,w,w,w,w,w,w))},
KP(d,e){return this.cJ4(d,e)},
cJ4(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$KP=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.e27(q,e))
t=3
w=6
return A.b(d.$0(),$async$KP)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.e28(q))
$.eV.mC()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$KP,v)},
Yh(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pr(r,s.c,s.e),$async$Yh)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KP(new C.e2_(t),"Preparing download\u2026"),$async$Yh)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yh,v)},
Yl(d){return this.bSh(d)},
bSh(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pr(r,s.c,s.e),$async$Yl)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.KP(new C.e20(t,d),"Preparing file\u2026"),$async$Yl)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yl,v)},
ah5(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ah5=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xH.co().MD(B.Sq,B.uy,!0),$async$ah5)
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
YY(d){return this.c1K(d)},
c1K(d){var w=0,v=A.j(x.H),u=this
var $async$YY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.KP(new C.e21(u,d),"Restoring family trees\u2026"),$async$YY)
case 2:return A.h(null,v)}})
return A.i($async$YY,v)},
YX(){var w=0,v=A.j(x.H),u,t=this,s
var $async$YX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ah5(),$async$YX)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.YY(s),$async$YX)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YX,v)},
a2Q(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2Q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pr(r,s.c,s.e),$async$a2Q)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KP(new C.e26(t),"Creating QR code\u2026"),$async$a2Q)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2Q,v)},
a2r(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2r=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Dt()){t.z_("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).cd(A.eb(new C.e24(),!0,null,x.N)),$async$a2r)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.YY(r),$async$a2r)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2r,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.R(d).ax.a===B.J,n=o?B.By:B.iB,m=o?D.ajH:B.aQ,l=o?B.aM:B.bP,k=o?B.aQ:B.av,j=new C.dgC(n,m,l,k,o?B.bM:B.bo)
l=A.aG(p,p,p,p,A.X(B.eM,k,p,p,p,20),p,p,p,new C.e2a(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eF(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.dga(!0,B.jI,B.aJ,B.aJ,q.r?p:q.gczB(),j,s,"Show restore QR"),1),B.at],u))}s=q.e
r=q.r?p:q.gcvL()
t.push(A.E(C.dga(!s,B.jn,B.b8,B.bs,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.m,p,B.e,B.i,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.dga(!1,B.hV,B.aY,B.bQ,q.r?p:q.gbSa(),j,"Photos & books included","Download all trees"),1),B.at],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dga(!1,R.zl,B.ay,B.aU,q.r?p:q.gc1H(),j,s,"Upload backup file"),1))
l=A.a([new C.bge(v,l,p),B.l1,new C.add(j,"QR restore",p),B.X,t,B.d6,new C.add(j,"Backup files",p),B.X,A.A(r,B.m,p,B.e,B.i,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.l1,new C.add(j,"One tree",p),B.X],u)
B.d.v(v,J.b7(q.d,new C.e2b(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cj(l,p,p,B.a0l,p,p,B.ai,!1)],u)
if(q.r){v=A.n(18)
t=A.L(B.aY.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.du,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ap(24,A.bm(!0,A.p(p,A.A(A.a([O.aTe,B.be,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.V,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.Ce,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c5(w,n,new A.an(B.a0,p,B.ac,B.t,l,p),p,!1,!1,p,p)}}
C.dgC.prototype={}
C.bge.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.n(24)
u=A.a([new A.ac(0,B.G,B.aY.j(0.32),B.kA,28)],x.V)
t=A.ap(p,A.X(B.uS,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.n(18)
q=x.p
return A.p(p,new A.an(B.a0,p,B.ac,B.t,A.a([t,new A.D(B.ab,A.A(A.a([A.p(p,D.c0y,B.f,p,p,new A.o(s,p,A.L(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.oR,A.E(A.x(A.a([D.fFV,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.i,0,B.p),1)],q),B.E,p,B.e,B.i,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.c8A,B.n),p,p,p,p,p,p,p,p)}}
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
return A.aI(!1,B.a3,!0,q,A.aO(!1,o,!0,A.eI(A.da(new A.D(E.a_Y,A.x(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.rP,q,q,q),B.af,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bG,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cC,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.i,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)}}
C.bgh.prototype={
B(d){var w=this,v=null,u=A.n(18),t=A.n(18),s=w.c,r=A.L(s.c,B.r,1),q=B.aY.j(0.14),p=A.n(12),o=s.e,n=x.p
return A.aI(!1,B.a3,!0,v,A.aO(!1,u,!0,A.eI(new A.D(B.eV,A.A(A.a([A.p(v,D.c_N,B.f,v,v,new A.o(q,v,A.L(B.aY.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.rP,v,v,v),B.be,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.i,0,B.p),1),A.X(B.hV,o,v,v,v,20)],n),B.m,v,B.e,B.i,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.aj)}}
C.a0g.prototype={
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
if(u.c!=null)u.m(new C.e1V(u,t))
return A.h(null,v)}})
return A.i($async$aa1,v)},
aix(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aix=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.e1W(q))
t=4
p=A.hpc(q.a.d,B.E1)
if(p==null){n=A.bc("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.asW(n.e,m,l,B.E1,p,n.f),$async$aix)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.e1X(q))
q.c.L(x.q).f.U(D.fh3)
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
if(q.c!=null)q.m(new C.e1Y(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aix,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.R(d).ax.a===B.J,o=p?B.jz:B.qf,n=p?B.iA:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eF(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fWi,q,q,q,1,q,!0)
w=A.n(24)
v=A.L(B.aY.j(0.35),B.r,1)
u=A.q7(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aY,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.P,u,B.by,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.am,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.m,q,B.ba,B.i,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.ab,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.bu,q,q,q,q,q,q,q,q,q,q,q,B.V,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcvu()
if(u)u=B.Kf
else u=A.X(r.e===!0?B.hF:B.aop,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a5(1/0,q,A.es(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cg,q,q,q),t,A.di(q,q,q,q,q,q,q,q,q,B.aY,q,B.h3,q,q,q,new A.ay(B.aY.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.i9,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aD:B.am,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.X)
w.push(new A.a5(1/0,q,A.bH(B.AN,q,new C.e1Z(d),A.bn(B.aY,q,q,q,q,B.h3,q,q,q,q,q,q)),q))
return A.c5(m,o,new A.D(B.ab,A.x(w,B.m,q,B.e,B.i,0,B.p),q),q,!1,!1,q,q)}}
C.a0h.prototype={
S(){return new C.blu(A.zM(B.yq,B.o_,B.v_))}}
C.blu.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return A.c5(A.eF(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fO6,w,w,w,1,w,!0),B.w,A.zL(this.d,B.bZ,new C.e2c(this,d)),w,!1,!1,w,w)}}
C.b_i.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.RV,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
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
this.byu()},
B(d){var w,v,u=this,t=B.d.dO(D.a5W,new C.dOv(u),new C.dOw())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cC6(A.c9(new A.h4(A.a([w,v],x.dS)),new C.dOx(u,t),null),!0)}}
C.bl9.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b37(d,e)
break
case"house":p.mg(d,e,D.df2)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdz()
$.S()
t=A.K()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.N(new A.q(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mm(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.Bq(d,e,12)
p.yB(d,e,B.lb,5,14)
break
case"grocery":p.ckm(d,e)
break
case"calculator":p.ck3(d,e)
break
case"lumber":p.cku(d,e)
break
case"kitchen":p.ckp(d,e)
break
case"landscape":p.mg(d,e,D.dfE)
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
p.Bq(d,e,8)
p.yB(d,e,B.is,4,18)
break
case"plumbing":p.ckD(d,e)
break
case"electrical":p.mg(d,e,D.dr8)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.S()
u=A.K()
u.r=B.c.j(q*0.12).gp(0)
d.au(new A.a2(0,0,0+e.a,0+e.b),u)
p.mm(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mm(d,e,B.m3.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.Bq(d,e,10)
break
case"store":p.ckN(d,e)
break
case"paint_remodel":p.cky(d,e)
break
case"roofing":p.ckF(d,e)
break
case"warehouse":p.ckU(d,e)
break
case"vehicles":p.ckS(d,e)
break
case"farm":p.ckg(d,e)
break
case"restaurant":p.ckE(d,e)
break
case"tools":p.ckQ(d,e)
break
case"wallet":p.ckT(d,e)
break
case"concrete":p.ck9(d,e)
break
case"blueprint":p.ck1(d,e)
break
default:p.b37(d,e)}},
mg(d,e,f){var w,v=new A.a2(0,0,0+e.a,0+e.b)
$.S()
w=A.K()
w.sar(new A.a9(B.aA,B.aF,B.x,f,null,null).aG(0,v))
d.au(v,w)},
mm(d,e,f,g,h){var w,v,u,t=new A.q(e.a/2,e.b/2),s=e.gdz()/2-h
$.S()
w=A.K()
w.b=B.aa
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cN(A.bX(t,s),u,u+0.1439896632895322-u,!1,w)}},
yB(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdz()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.S()
r=new A.ao(B.Q,B.N,B.T,B.U,B.S)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.N(new A.q(q+t*o,p+s*o),3.5,r)}},
Bq(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.k.E(t*0.17,0.9)
q=B.k.E(t*0.23,0.85)
$.S()
p=new A.ao(B.Q,B.N,B.T,B.U,B.S)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.N(new A.q(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b37(d,e){var w,v=this
v.mg(d,e,D.dps)
w=v.c
v.mm(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mm(d,e,B.bN.j(0.45),-w*3.141592653589793*1.4,22)
v.bQ7(d,e,B.i4,w)
v.yB(d,e,B.c.j(0.7),6,8)},
bQ7(d,e,f,g){var w,v,u,t,s,r
$.S()
w=A.K()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.au(new A.a2(16,r,t,r+3),w)}},
ckm(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mg(d,e,D.cug)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.E(t,3)
q=Math.sin(s)
p=B.o.aq(t,3)
o=Math.cos(s*0.8)
n=B.o.E(t,2)
$.S()
m=new A.ao(B.Q,B.N,B.T,B.U,B.S)
m.r=D.ddf[B.o.E(t,4)].j(0.85).gp(0)
d.N(new A.q(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mm(d,e,B.c.j(0.35),w,16)
l.yB(d,e,B.is,5,12)},
ck3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mg(d,e,D.cuo)
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
r=D.dho[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.E(o,2)
p.sb1(0,new A.en(r,h,h,B.cH,h,h,h,h,h,h,new A.G(!0,q,h,h,h,h,14+m*4,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.ef()
p.a4(d,new A.q(t*(0.08+B.o.E(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.aq(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cuq[o]
l=B.kK.j(0.28+0.3*Math.sin(n))
k=B.o.E(o,2)
p.sb1(0,new A.en(m,h,h,B.cH,h,h,h,h,h,h,new A.G(!0,l,h,h,h,h,12+k*3,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.ef()
p.a4(d,new A.q(t*(0.55+B.o.E(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.aq(o,3)*0.38)+Math.sin(n)*6))}i.mm(d,e,B.c.j(0.35),w*1.5,14)
i.mm(d,e,B.eI.j(0.55),-v*3.141592653589793*2,8)
i.mm(d,e,B.y6.j(0.4),r*2.8,22)
i.yB(d,e,B.q4,8,10)
i.Bq(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.k.E(w+o*0.22,0.9)
$.S()
v=new A.ao(B.Q,B.N,B.T,B.U,B.S)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.q(12,j),new A.q(t,j),v)}},
cku(d,e){var w,v,u,t,s,r,q,p,o=this
o.mg(d,e,W.aA9)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.br(new A.a2(20,r,u,r+10),B.hM)
$.S()
p=new A.ao(B.Q,B.N,B.T,B.U,B.S)
p.r=A.ar(B.fY,B.o5,(s+1)/2).gp(0)
d.ap(q,p)}o.mm(d,e,B.fY.j(0.35),w,15)
o.Bq(d,e,8)},
ckp(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mg(d,e,D.ddK)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.k.E(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.k.E(s*0.13,0.7)
$.S()
m=new A.ao(B.Q,B.N,B.T,B.U,B.S)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.N(new A.q(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mm(d,e,B.bN.j(0.4),-w*3.141592653589793*2.2,11)
l.yB(d,e,B.q1,4,14)},
ckD(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mg(d,e,D.d1Y)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.k.E(s,0.12)
$.S()
o=new A.ao(B.Q,B.N,B.T,B.U,B.S)
o.b=B.aa
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.N(new A.q(w,u),q*(0.12+r*0.14+p),o)}n.yB(d,e,B.pa,6,12)
n.mm(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
ckN(d,e){var w,v,u,t,s,r,q,p=this
p.mg(d,e,D.cI2)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.br(new A.a2(r,14,r+u,22),B.ij)
$.S()
q=new A.ao(B.Q,B.N,B.T,B.U,B.S)
q.r=A.ar(B.fj,B.bN,(s+1)/2).gp(0)
d.ap(r,q)}p.mm(d,e,B.c.j(0.3),w,16)
p.Bq(d,e,8)
p.yB(d,e,B.vX,5,13)},
cky(d,e){var w,v,u,t,s,r,q
this.mg(d,e,D.d8i)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.k.E(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.br(new A.a2(r,q,r+8,q+(18+s*22)),B.hN)
$.S()
r=new A.ao(B.Q,B.N,B.T,B.U,B.S)
r.r=[B.ip,B.dw,B.bN,B.et][t].j(0.85).gp(0)
d.ap(q,r)}this.mm(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
ckF(d,e){var w,v,u,t,s,r,q
this.mg(d,e,D.d5E)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.k.E(v+t*0.12,0.75))
r=B.o.E(t,4)*0.22
$.S()
q=new A.ao(B.Q,B.N,B.T,B.U,B.S)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.q(u*(0.1+r),s),new A.q(u*(0.18+r),s+10),q)}this.yB(d,e,B.cr,7,11)},
ckU(d,e){var w,v,u,t,s,r,q,p
this.mg(d,e,D.cKN)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.br(new A.a2(q,p,q+(t-s*8),p+16),B.hM)
$.S()
q=new A.ao(B.Q,B.N,B.T,B.U,B.S)
q.r=A.ar(B.cr,B.aQ,(Math.sin(r)+1)/2).gp(0)
d.ap(p,q)}this.mm(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
ckS(d,e){var w,v,u,t,s,r,q
this.mg(d,e,D.dvg)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.k.E(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.E(t,2)*0.08)
r=A.br(new A.a2(s,r,s+28,r+8),B.hM)
$.S()
q=new A.ao(B.Q,B.N,B.T,B.U,B.S)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.ap(r,q)}this.Bq(d,e,6)},
ckg(d,e){var w,v,u,t,s,r,q,p
this.mg(d,e,D.dci)
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
d.ah(new A.q(q,v),new A.q(q+s*6,t),p)}this.mm(d,e,B.m3.j(0.35),w,14)},
ckE(d,e){var w,v,u,t,s,r,q=this
q.mg(d,e,D.deS)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bJ(new A.q(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.S()
r=new A.ao(B.Q,B.N,B.T,B.U,B.S)
r.r=B.c.j(0.22).gp(0)
d.bY(s,r)}q.yB(d,e,B.q1,5,16)
q.Bq(d,e,7)},
ckQ(d,e){var w,v,u,t,s,r,q,p,o=this
o.mg(d,e,D.dsG)
w=o.c
v=w*3.141592653589793
o.mm(d,e,B.o5.j(0.55),v*3,10)
o.mm(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.S()
p=new A.ao(B.Q,B.N,B.T,B.U,B.S)
p.r=B.o5.j(0.8).gp(0)
d.N(new A.q(v+r*34,u+q*22),4,p)}},
ckT(d,e){var w,v,u,t,s,r,q,p,o=this
o.mg(d,e,D.dvX)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.br(new A.a2(q,p,q+36,p+22),B.ij)
$.S()
q=new A.ao(B.Q,B.N,B.T,B.U,B.S)
q.r=A.ar(B.is,B.m3,r).gp(0)
d.ap(p,q)}o.Bq(d,e,9)
o.mm(d,e,B.c.j(0.4),w*2.2,12)},
ck9(d,e){var w,v,u,t,s,r,q,p
this.mg(d,e,D.dki)
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
ck1(d,e){var w,v,u,t,s,r,q
this.mg(d,e,D.dfZ)
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
this.mm(d,e,B.lb.j(0.45),-r*3.141592653589793*2,11)},
aC(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.atH.prototype={
a05(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a05=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aRl(),$async$a05)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a9e(s),$async$a05)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a05,v)},
ah6(d){return this.cnb(d)},
cnb(d){var w=0,v=A.j(x.H),u=this,t
var $async$ah6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.ipb(d),$async$ah6)
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
v.push(A.c3(new A.bL(B.b1,t,t,new A.D(B.wa,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.V,t,t,!0,t,t,t,t,t,B.aB8,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a9(B.b1,B.b7,B.x,u,t,t),B.n),B.bi))}v.push(A.ap(8,A.A(A.a([A.E(A.dh(D.bUl,D.fC8,new C.cnR(this,d),A.bn(B.aY,t,t,t,B.c,t,B.k_,t,t,t,t,B.ce)),1),B.ae,A.E(A.es(D.c1O,D.fRh,this.gce7(),A.di(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.k_,t,t,D.b4p,t,t,t,B.ce)),1)],w),B.m,t,B.e,B.i,0,t,t),t,t,8,8,t,t))
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
C.ZV.prototype={
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
KF(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.L(x.q).f.U(D.fhy)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).O(new C.aUK(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.R(d).ax.a===B.J,l=m?B.e8:B.c,k=A.n(20),j=A.p(n,D.c1t,B.f,n,n,new A.o(B.aY.j(0.15),n,n,A.n(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aQ:B.av,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bG,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bo,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.i,0,B.p),1)
j=A.A(A.a([j,B.be,i,A.aG(n,n,n,n,A.X(B.cz,m?B.bv:B.bo,n,n,n,n),n,n,n,new C.d7R(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.i,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bo,n,n,n,n,n,n,n,n,12,n,n,B.V,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bo,n,n,n,n,n,n,n,n,11,n,n,B.cC,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hps(new C.d7S(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aQ:B.av,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jT:B.jj
r=A.n(12)
q=A.n(12)
p=m?B.ee:B.bP
t=A.aM(n,B.Z,!0,n,!0,B.t,n,A.aN(),u,n,n,n,n,n,2,A.bs(n,new A.b6(4,r,B.dn),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d7T(o),n,!1,n,n,!1,n,!0,n,B.ab,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,A0.Km,n,n,n,n)
u=m?B.aQ:B.av
m=m?B.ee:B.bP
return A.eR(n,l,new A.cR(B.lZ,A.cg(A.x(A.a([j,B.aR,i,B.aw,w,B.P,v,B.aR,t,B.by,A.A(A.a([A.E(A.dT(B.dl,new C.d7U(d),A.di(n,n,n,n,n,n,n,n,n,u,n,n,B.cn,n,new A.b9(A.n(12),B.a1),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.at,A.E(A.bH(D.fRw,n,o.ga3b(),A.bn(B.aY,n,n,n,B.c,n,B.cn,n,new A.b9(A.n(12),B.a1),n,n,n)),1)],h),B.m,n,B.e,B.i,0,n,n)],h),B.E,n,B.e,B.O,0,B.p),B.t,n,B.y,n,B.Cf,n,n,B.ai),n),n,n,n,A6.Cg,B.da,n,new A.b9(k,B.a1),n)}}
C.ZU.prototype={
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
KF(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.L(x.q).f.U(D.ffb)
return}v=this.c
v.toString
A.a6(v,!1).O(new C.aUJ(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.R(d).ax.a===B.J,o=p?B.e8:B.c,n=A.n(20),m=A.p(q,D.bYY,B.f,q,q,new A.o(B.bQ.j(0.15),q,q,A.n(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.av,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bG,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bv:B.bo,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.i,0,B.p),1)
m=A.A(A.a([m,B.be,l,A.aG(q,q,q,q,A.X(B.cz,p?B.bv:B.bo,q,q,q,q),q,q,q,new C.d7N(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.i,0,q,q)
l=B.aY.j(p?0.12:0.08)
w=A.n(12)
v=A.L(B.aY.j(0.25),B.r,1)
u=A.X(B.aob,B.aY.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.at,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.av,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.i,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bE,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aQ:B.av,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jT:B.jj
t=A.n(12)
s=A.n(12)
r=p?B.ee:B.bP
v=A.aM(q,B.Z,!0,q,!0,B.t,q,A.aN(),w,q,q,q,q,q,2,A.bs(q,new A.b6(4,t,B.dn),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d7O(this),q,!1,q,q,!1,q,!0,q,B.ab,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.l2,q,q,q,q)
w=p?B.aQ:B.av
p=p?B.ee:B.bP
return A.eR(q,o,new A.cR(B.lZ,A.cg(A.x(A.a([m,B.aR,l,B.aC,v,B.by,A.A(A.a([A.E(A.dT(B.dl,new C.d7P(d),A.di(q,q,q,q,q,q,q,q,q,w,q,q,B.cn,q,new A.b9(A.n(12),B.a1),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.at,A.E(A.bH(D.fYz,q,this.ga3b(),A.bn(B.bQ,q,q,q,B.c,q,B.cn,q,new A.b9(A.n(12),B.a1),q,q,q)),1)],k),B.m,q,B.e,B.i,0,q,q)],k),B.E,q,B.e,B.O,0,B.p),B.t,q,B.y,q,B.Cf,q,q,B.ai),q),q,q,q,A6.Cg,B.da,q,new A.b9(n,B.a1),q)}}
C.Zr.prototype={
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
gJX(){var w,v=this.e
v===$&&A.c()
w=A.d0(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gakh(){var w=this.f
w===$&&A.c()
w=A.d0(B.a.i(w.a.a))
return w==null?0:w},
gb5U(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aQm(d){var w,v=B.k.F(this.gJX()+d,0.25,999999),u=B.k.iX(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.M(v))
else{u=B.k.ad(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb1(0,u)
this.m(new C.cGd())},
azr(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aY,w,w,w,20):w,u=d.a,t=u?B.jT:B.jj,s=A.n(14),r=A.n(14)
u=u?B.ee:B.bP
return A.bs(w,new A.b6(4,s,B.dn),w,B.bE,w,w,w,w,!0,new A.b6(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.n(14),B.adB),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
ce8(d,e,f){return this.azr(d,e,f,null)},
KF(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gakh()<=0){s.c.L(x.q).f.U(D.fjq)
return}r=s.c
r.toString
v=s.gJX()
u=s.gakh()
t=s.gb5U()
A.a6(r,!1).O(new C.aSK(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.R(d).ax.a===B.J,m=new C.uc(n),l=n?B.e8:B.c,k=A.n(24),j=x.O,i=A.a([B.aY.j(0.22),B.bQ.j(0.14)],j),h=A.n(14)
i=A.p(o,D.bSg,B.f,o,o,new A.o(o,o,A.L(B.aY.j(0.35),B.r,1),h,o,new A.a9(B.a6,B.a9,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.av,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bG,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bo,o,o,o,o,o,o,o,o,12,o,o,B.cC,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1)
i=A.A(A.a([i,B.be,h,A.aG(o,o,o,o,A.X(B.cz,n?B.bv:B.bo,o,o,o,o),o,o,o,new C.cGj(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.i,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.av,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.Z,!0,o,!0,B.t,o,A.aN(),h,o,o,o,o,o,2,p.azr(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Pr),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ab,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,A0.Km,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bo,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jT:B.jj
t=A.n(14)
s=A.L(n?B.ee:B.bP,B.r,1)
r=A.aG(o,o,o,o,A.X(B.wF,n?B.aQ:B.av,o,o,o,20),o,o,o,new C.cGk(p),o,o,o,o,o,B.ce)
q=p.e
q===$&&A.c()
q=A.aM(o,B.Z,!1,o,!0,B.t,o,A.aN(),q,o,o,o,o,o,2,D.c3n,B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.e4,o,o,o,1,o,o,!1,"\u2022",o,new C.cGl(p),o,o,o,!1,o,o,!1,o,!0,o,B.ab,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.av,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a5(52,o,q,o),A.aG(o,o,o,o,A.X(B.hU,n?B.aQ:B.av,o,o,o,20),o,o,o,new C.cGm(p),o,o,o,o,o,B.ce)],w),B.m,o,B.e,B.O,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aQ:B.av,o,o,o,o,o,o,o,o,16,o,o,B.V,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.at,A.E(A.aM(o,B.Z,!1,o,!0,B.t,o,A.aN(),t,o,o,o,o,o,2,p.azr(m,"Amount","0.00",B.ia),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.e4,o,o,o,1,o,o,!1,"\u2022",o,new C.cGn(p),o,o,o,!1,o,o,!1,o,!0,o,B.ab,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.ao,o,o,o,o),1)],w),B.E,o,B.e,B.i,0,o,o)
t=x.gv
u=A.C(new A.N(D.d8O,new C.cGo(p,m),t),t.k("ak.E"))
i=A.a([i,B.by,v,B.aC,h,B.P,s,B.af,A.bW(B.bH,u,B.bt,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.av,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.X,A.aM(o,B.Z,!1,o,!0,B.t,o,A.aN(),h,o,o,o,o,o,2,p.ce8(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cGp(p),o,o,o,!1,o,o,!1,o,!0,o,B.ab,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.l2,o,o,o,o)],w))}i.push(B.aR)
h=B.aY.j(n?0.18:0.1)
j=A.a([h,B.bQ.j(n?0.12:0.06)],j)
h=A.n(16)
v=A.L(B.aY.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bo,o,o,o,o,o,o,o,o,11,o,o,B.V,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJX()===B.k.iX(p.gJX())?B.k.M(p.gJX()):p.gJX()
s=p.gb5U()
r=A.Bg(p.gakh())
i.push(A.p(o,A.A(A.a([A.E(A.x(A.a([u,B.aw,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bo,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1),C.bFl(p.gJX()*p.gakh(),B.b2,!1,B.u)],w),B.m,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a9(B.a6,B.a9,B.x,j,o,o),B.n),o,o,o,o,B.jm,o,o,o))
i.push(B.by)
j=A.n(14)
h=n?B.ee:B.bP
h=A.di(o,o,o,o,o,o,o,o,o,o,o,o,B.cn,o,new A.b9(j,B.a1),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dT(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.av,o,o,o,o,o,o,o,o,o,o,o,B.V,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cGq(d),h),1),B.at,A.E(A.dh(D.arF,D.fUs,p.ga3b(),A.bn(B.aY,o,o,0,B.c,o,B.cn,o,new A.b9(A.n(14),B.a1),o,o,o)),2)],w),B.m,o,B.e,B.i,0,o,o))
return A.eR(o,l,new A.cR(A5.ae0,A.cg(A.x(i,B.al,o,B.e,B.O,0,B.p),B.t,o,B.y,o,Aj.rO,o,o,B.ai),o),o,o,o,B.O4,B.da,o,new A.b9(k,B.a1),o)}}
C.a23.prototype={
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
B(d){var w,v,u,t=this,s=null,r=A.R(d).ax.a===B.J,q=r?B.e8:B.c,p=A.n(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aQ:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aQ:B.av,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jT:B.jj
v=A.aM(s,B.Z,!0,s,!0,B.t,s,A.aN(),w,s,s,s,s,s,2,A.bs(s,new A.b6(4,A.n(12),B.dn),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fkW(t,d),s,!1,s,s,!1,s,!0,s,B.ab,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.ao,s,s,s,s)
u=A.E(A.dT(B.dl,new C.fkX(d),s),1)
r=A.bn(B.bQ,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eR(s,q,new A.D(B.Cf,A.x(A.a([o,B.aC,v,B.aR,A.A(A.a([u,B.at,A.E(A.bH(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fkY(t,d),r),1)],w),B.m,s,B.e,B.i,0,s,s)],w),B.m,s,B.e,B.O,0,B.p),s),s,s,s,s,B.da,s,new A.b9(p,B.a1),s)}}
C.acg.prototype={
a7(){return"WorksheetFrameStyle."+this.b}}
C.Gc.prototype={
S(){return new C.bxQ(null,null)}}
C.bxQ.prototype={
Y(){var w,v=this
v.a3()
w=A.bl(null,D.bzh,null,1,null,v)
w.cP(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bAN()},
gbCn(){switch(this.a.r.a){case 1:return A.a([B.aY,B.bQ,B.b2],x.O)
case 2:return A.a([B.bw,B.aY,B.b2],x.O)
case 3:return A.a([B.aJ,B.ch,B.ko],x.O)
case 4:return A.a([B.hm,B.bQ,B.fn],x.O)
case 0:return A.a([B.aY,B.bQ,B.b2],x.O)}},
B(d){var w=A.R(d),v=this.d
v===$&&A.c()
return new A.em(A.c9(v,new C.fkU(this,new C.uc(w.ax.a===B.J)),null),null)}}
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
this.bAO()},
B(d){var w=this.d
w===$&&A.c()
return A.c9(w,new C.fkV(this),null)}}
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
w.ik()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aTT(d,q,r,o,0,0.2,4.2,0.92)
p.aTT(d,q,r,s,0.52,0.11,3.2,0.58)}},
aTT(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.E(g+h,1)*f,s=A.hLV(e.a.a,e,t,t+f*i,!0),r=A.bDG(s.glV().a.getBounds())
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
if(s!=null&&u.c!=null)u.m(new C.eTK(u,s))
return A.h(null,v)}})
return A.i($async$ahX,v)},
QG(){var w=0,v=A.j(x.H),u=this,t,s
var $async$QG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eTB(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.LX(t,s),$async$QG)
case 2:if(u.c!=null)u.m(new C.eTC(u))
return A.h(null,v)}})
return A.i($async$QG,v)},
Rd(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Rd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.R(p)
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.eTI(t,new C.uc(p.ax.a===B.J)),s,null,!0,!0,x.T),$async$Rd)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a9e(q),$async$Rd)
case 6:case 5:t.m(new C.eTJ(t,r))
w=7
return A.b(t.QG(),$async$Rd)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Rd,v)},
Wq(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.ioX(r),$async$Wq)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eTw(t,new C.rk(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.QG(),$async$Wq)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wq,v)},
cjd(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hDs(t,new C.eTA(u),w,v)},
abQ(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bG(new A.ay(v,2.5,B.r,-1),B.a1,B.a1,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b4b,w,w,B.n),w,22,w,w,w,w,w,22)},
aaS(d){return this.bOm(d)},
bOm(d){var w=0,v=A.j(x.H),u=this
var $async$aaS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eTz(u,d))
w=2
return A.b(u.QG(),$async$aaS)
case 2:return A.h(null,v)}})
return A.i($async$aaS,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.R(a2).ax.a===B.J,e=f?B.c3:B.iB,d=A.n(8),a0=A.X(Z.a1z,f?B.bv:B.bo,g,g,g,16),a1=x.p
a0=A.aO(!1,d,!0,new A.D(B.GS,A.A(A.a([a0,B.bn,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bv:B.bo,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.O,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eTL(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b4,B.t,A.a([A.bx(A.n(22),C.aRK(!0,A.n(22),1/0,B.qA,g,d,1/0),B.aq),A.ap(10,A.dh(D.bWV,D.fWR,h.gb3R(),A.bn(B.w.j(0.45),g,g,g,B.c,g,B.hb,g,new A.b9(A.n(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.n(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aY.j(f?0.5:0.38),B.eY,22),new A.ac(-4,B.G,B.bQ.j(0.2),B.I,32)],w)
u=A.n(17)
t=A.L(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.I,10)],w)
s=A.n(16)
r=h.d
v=A.p(g,A.p(g,A.bx(s,new A.an(B.a0,g,B.b4,B.t,A.a([C.aRK(!0,A.n(16),1/0,B.OT,g,r.c,1/0),A.c3(g,new A.o(g,g,g,g,g,new A.a9(B.b1,B.b7,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bi),A.ap(g,h.abQ(!0),g,g,8,g,8,g),A.ap(g,A.cCR(h.abQ(!0),!0,!1),g,g,g,8,8,g),A.ap(8,A.cCR(h.abQ(!1),!1,!0),g,g,8,g,g,g),A.ap(8,A.cCR(h.abQ(!1),!0,!0),g,g,g,8,g,g),A.ap(10,A.dh(D.bSR,D.fQc,h.gb3R(),A.bn(B.w.j(0.45),g,g,g,B.c,g,B.hb,g,new A.b9(A.n(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.c54,B.n),g,g,g,g,B.md,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.av,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.n(22)
u=x.O
u=f?A.a([D.beV,B.o9,B.h7],u):A.a([B.b2,B.aY,B.bQ],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aY.j(f?0.45:0.35),B.eY,24)],t)
r=A.n(22)
p=A.ap(g,A.X(B.k3,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.n(20)
m=A.L(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h9,g,g,g)],a1),B.m,g,B.e,B.i,0,g,g),B.aC,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.an,C.bFl(h.d.gxC(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cC,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.i,0,B.p),1)
n=A.n(14)
m=A.n(14)
l=B.c.j(0.12)
k=A.L(B.ho.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aJ.j(0.28),B.cL,14)],t)
j=B.aJ.j(0.22)
i=A.n(10)
u=A.p(g,A.bx(r,new A.an(B.a0,g,B.ac,B.t,A.a([p,new A.D(D.bE5,A.A(A.a([o,B.at,A.aI(!1,B.a3,!0,g,A.aO(!1,n,!0,A.eI(new A.D(V.wg,A.x(A.a([A.p(g,D.arf,B.f,g,g,new A.o(j,g,A.L(B.aJ.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cl,g,g,g),B.fK,D.fEZ],a1),B.m,g,B.e,B.O,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcjc(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.aj)],a1),B.m,g,B.e,B.i,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a9(B.aA,B.aF,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fF(1.7777777777777777,d,g),B.aR,w,B.P,u,B.by,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.av,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b3,A.dh(Av.a3o,D.fCO,h.gbCR(),A.bn(B.aY,g,g,g,B.c,g,B.iu,g,new A.b9(A.n(12),B.a1),g,g,g))],a1),B.m,g,B.e,B.i,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.e8:B.c
v=A.n(14)
u=A.L(f?B.ee:B.bP,B.r,1)
t=A.X(B.a1U,f?B.bv:B.bo,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.av,g,g,g,g,g,g,g,g,g,g,g,B.V,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.X,s,B.an,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bv:B.bo,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.m,g,B.e,B.i,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.qw,g,g,1/0))}else B.d.v(d,new A.N(w,new C.eTM(h,new C.uc(f)),A.T(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.C4,A.at(A.n0(g,f?B.bv:B.bo,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c5(g,e,A.bm(!0,A.x(A.a([new A.D(B.C8,a0,g),A.E(A.cg(A.x(d,B.E,g,B.e,B.i,0,B.p),B.t,g,B.y,g,E.yI,g,g,B.ai),1)],a1),B.E,g,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bGx(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.e8:B.c,p=A.n(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cL,12)],x.V),n=A.n(16),m=A.p(u,u,B.f,u,u,D.b6W,u,u,u,u,u,u,u,5),l=B.aY.j(r?0.22:0.12),k=A.n(12)
l=A.p(u,A.X(s?B.ib:B.ht,B.b2,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bL
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aQ:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcZJ()
v=A.Bg(d.d)
B.d.v(t,A.a([B.aw,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bv:B.bo,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.ba,B.O,0,B.p)}t=A.E(t,1)
k=A.a([B.aY.j(0.14),B.bQ.j(0.1)],x.O)
w=A.n(12)
k=A.p(u,C.bFl(d.c*d.d,B.b2,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a9(B.a6,B.a9,B.x,k,u,u),B.n),u,u,u,u,B.hb,u,u,u)
w=x.p
return A.p(u,A.bx(n,new A.ED(A.A(A.a([m,A.E(new A.D(B.ala,A.A(A.a([l,B.be,t,B.ae,k,A.aG(u,u,u,u,A.X(B.cz,(r?B.bv:B.bo).j(0.75),u,u,u,20),u,u,u,new C.eTx(this,d),u,u,u,u,u,B.ce)],w),B.m,u,B.e,B.i,0,u,u),u),1)],w),B.al,u,B.e,B.i,0,u,u),u),B.aq),B.f,u,D.b5O,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d3,u,u,u,u)}}
C.aej.prototype={
ET(d){return this.bPK(d)},
bPK(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$ET=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pr(d,o,!1),$async$ET)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
w=4
return A.b(A.bQ(Ai.C2,null,x.H),$async$ET)
case 4:s=t.d
w=5
return A.b(C.fU3(!0,o,s),$async$ET)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.H8(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$ET)
case 6:p=f
w=7
return A.b(A.pq(o,!1),$async$ET)
case 7:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$ET,v)},
a07(d){return this.czC(d)},
czC(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a07=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pr(d,s,!1),$async$a07)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
A.hE(d,new C.atA(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pq(s,!1),$async$a07)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a07,v)},
QH(d){return this.cvG(d)},
cvG(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$QH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(A.hE(d,D.aKL,!0,"NgmyWorksheetProjectScan",x.N),$async$QH)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bFm(s),$async$QH)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.L(x.q).f.U(D.fiy)
w=1
break}q=C.hf3(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dP(p,x.H),$async$QH)
case 5:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$QH,v)},
a08(d){return this.cHV(d)},
cHV(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a08=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(C.bET(),$async$a08)
case 3:s=f
if(s==null){w=1
break}r=C.hf3(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dP(q,x.H),$async$a08)
case 4:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a08,v)},
B(d){var w=this,v=null,u=A.R(d).ax.a===B.J,t=new C.uc(u),s=w.d.d.length,r=u?B.e8:B.c,q=A.n(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kA,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.wf,A.p(v,A.x(A.a([w.cyb(d,t,s),new A.D(D.bDu,A.x(A.a([w.b6P(t,"QR restore"),B.X,A.A(A.a([w.b1Q(t,!0,B.jI,B.aJ,B.aJ,new C.eTO(w,d),"Show to scan","QR code"),B.at,w.azs(t,B.jn,B.b8,B.bs,new C.eTP(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.i,0,v,v),B.d6,w.b6P(t,"Backup files"),B.X,A.A(A.a([w.azs(t,B.hV,B.aY,B.bQ,new C.eTQ(w,d),"Full copy","Backup file"),B.at,w.azs(t,R.zl,B.ay,B.aU,new C.eTR(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.i,0,v,v)],o),B.E,v,B.e,B.i,0,B.p),v)],o),B.m,v,B.e,B.O,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cyb(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.fc,B.cS,B.fP],k):A.a([B.b2,B.aY,B.bQ],k)
w=A.ap(l,A.X(B.uS,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.n(4),l,l,B.n),l,4,l,B.kS,l,l,l,36),l,l,l)
u=A.n(14)
t=A.L(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cL,12)],x.V)
r=this.d
s=A.p(l,C.aRK(!0,A.n(13),64,D.bO7,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,K.ab1,l,l,l)
r=C.bFl(r.gxC(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.n(20)
o=A.L(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.a0,l,B.ac,B.t,A.a([w,new A.D(D.bDS,A.x(A.a([v,A.A(A.a([s,B.ev,A.E(A.x(A.a([u,B.aw,t,B.P,A.A(A.a([r,B.ae,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fT,l,l,l)],m),B.m,l,B.e,B.i,0,l,l)],m),B.E,l,B.e,B.i,0,B.p),1),A.aG(l,l,l,l,A.X(B.cz,B.c.j(0.85),l,l,l,l),l,l,l,new C.eTN(d),l,l,l,A.nU(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aT2,l,l,l,l),l,l)],m),B.E,l,B.e,B.i,0,l,l)],m),B.m,l,B.e,B.i,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.aA,B.aF,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b6P(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aY,w,w,A.n(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ae,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bv:B.bo,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)},
b1Q(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.n(18),p=A.n(18),o=d.a,n=o?D.ajH:B.aQ
if(e)w=B.aJ.j(o?0.45:0.35)
else{w=o?B.ee:B.bP
w=w.j(o?0.8:1)}w=A.L(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aJ.j(0.12),B.cL,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.n(12)
s=A.L(h.j(0.35),B.r,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.rP,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aQ:B.av,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aI(!1,B.a3,!0,r,A.aO(!1,q,!0,A.eI(new A.D(E.a_Y,A.x(A.a([t,B.af,u,B.bG,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bv:B.bo,r,r,r,r,r,r,r,r,11,r,r,B.cC,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
azs(d,e,f,g,h,i,j){return this.b1Q(d,!1,e,f,g,h,i,j)}}
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
break}r.m(new C.eTr(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eTs(r))
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
e=A.aG(h,h,h,h,A.X(B.eM,g?B.ad:B.am,h,h,h,18),h,h,h,new C.eTt(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.R,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.AA],u),B.m,h,B.e,B.i,0,h,h)
t=A.n(24)
s=x.O
s=g?A.a([B.fc,B.cS,B.fP],s):A.a([B.b2,B.aY,B.bQ],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aY.j(g?0.4:0.3),B.eY,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dg,B.K,h,h)
p=C.bFl(p.gxC(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.n(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.an,A.A(A.a([p,B.ae,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fT,h,h,h)],u),B.m,h,B.ba,B.i,0,h,h)],u),B.m,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a9(B.aA,B.aF,B.x,s,h,h),B.n),h,h,h,h,E.a0k,h,h,1/0)
t=g?D.bpW:B.c
q=A.n(24)
p=A.L(w?B.aJ.j(0.4):B.aY.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.du,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.Vg,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.eq6)
else{m=A.n(20)
l=A.L(B.aO,B.r,1)
o.push(A.p(h,A.q7(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bR,h,h,h))}}o.push(B.aR)
n=w?B.aJ:B.aY
n=n.j(g?0.15:0.1)
m=A.n(12)
l=A.L((w?B.aJ:B.aY).j(0.35),B.r,1)
k=w?B.P6:B.PH
k=A.X(k,w?B.aJ:B.aY,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.at,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.am,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.i,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iu,h,h,h))
return A.c5(h,f,A.bm(!0,A.x(A.a([new A.D(Af.Og,e,h),A.E(A.cg(A.x(A.a([s,B.aR,A.p(h,A.x(o,B.m,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.uu,h,h,1/0)],u),B.m,h,B.e,B.i,0,B.p),B.t,h,B.y,h,E.ami,h,h,B.ai),1)],u),B.m,h,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.atF.prototype={
S(){return new C.aGd(A.zM(B.Ny,B.o_,B.v_))}}
C.aGd.prototype={
t(){this.d.t()
this.a2()},
aOj(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iX(w,d)},
cf0(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s=C.imQ(t)
if(s!=null){this.aOj(s)
return}r=C.htX(t)
if(r!=null)q=A.cS(r,p,0)
else q=!1
if(q){this.aOj(B.a.i(B.a.b2(r,B.a.cp(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eF(A.a([A.aG(t,t,t,t,A.X(u.f?B.uH:Aa.Pe,t,t,t,t,t),t,t,t,new C.eTv(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.By,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fQ5,t,t,t,1,t,!0),q=A.zL(u.d,B.bZ,u.gcf_()),p=A.n(28)
p=A.at(A.p(t,t,B.f,t,t,new A.o(t,t,A.L(B.aY,B.r,3),p,A.a([new A.ac(2,B.G,B.aY.j(0.35),B.I,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.n(16)
return A.c5(r,B.w,new A.an(B.a0,t,B.b4,B.t,A.a([q,p,A.ap(32,A.p(t,D.fOR,B.f,t,t,new A.o(w,t,A.L(B.aY.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jm,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aL6.prototype={
a7(){return"_WorksheetTab."+this.b}}
C.OO.prototype={
S(){return new C.aGf(D.acT,A.a([],x.D))},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aGf.prototype={
gcFH(){return J.bGt(this.e,0,new C.eUd())},
Y(){this.a3()
$.aV.c1$.push(this)
this.wf()},
t(){$.aV.hV(this)
this.a2()},
jk(d){if(d===B.fO)this.wf()},
wf(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wf=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Ds(q.a.c).df(0,B.jZ),$async$wf)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eU9(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eUa(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wf,v)},
In(d){return this.bMu(d)},
bMt(){return this.In(null)},
bMu(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$In=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ioZ(l,d),$async$In)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lA(l,r,q,D.dky,new A.V(Date.now(),0,!1))
w=4
return A.b(C.LX(t.a.c,p),$async$In)
case 4:o=f
w=5
return A.b(t.wf(),$async$In)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.L(x.q).f.U(D.ffF)
w=1
break}n=J.aX(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gR(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.L(q).f.U(D.fhs)
else n.L(q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
t.EX(m)
case 1:return A.h(u,v)}})
return A.i($async$In,v)},
EX(d){return this.ciZ(d)},
ciZ(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$EX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hE(s,new C.atG(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$EX)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.LX(u.a.c,t),$async$EX)
case 5:case 4:w=6
return A.b(u.wf(),$async$EX)
case 6:return A.h(null,v)}})
return A.i($async$EX,v)},
w1(d){return this.c1M(d)},
c1M(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$w1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bET(),$async$w1)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hE(r,D.aKL,!0,"NgmyWorksheetProjectScan",x.N),$async$w1)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bFm(q),$async$w1)
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
break}p=C.hf3(s)
w=15
return A.b(C.LX(t.a.c,p),$async$w1)
case 15:o=f
w=16
return A.b(t.wf(),$async$w1)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.L(x.q).f.U(D.fhx)
w=1
break}r.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
t.EX(p)
case 1:return A.h(u,v)}})
return A.i($async$w1,v)},
On(d){return this.bL8(d)},
bL8(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$On=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cf(null,null,!0,null,new C.eTV(d),s,null,!0,!0,x.y),$async$On)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.p_(t.a.c,A.a([],x.D)),$async$On)
case 6:w=7
return A.b(t.wf(),$async$On)
case 7:s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.ffK)
case 4:case 1:return A.h(u,v)}})
return A.i($async$On,v)},
cjb(d){var w=this.c
w.toString
A.bT(B.L,null,new C.eU3(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b7r(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.n(16),p=g.a
if(p)w=B.jT
else w=B.c
v=A.n(16)
u=A.L(p?B.ee:B.bP,B.r,1)
t=d.j(0.14)
s=A.n(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bU,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aQ:B.av,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aI(!1,B.a3,!0,r,A.aO(!1,q,!0,A.p(r,A.x(A.a([s,B.af,t,B.bG,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bv:B.bo,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.we,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
a0D(d,e){return this.cj_(d,e)},
cj_(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0D=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bT(B.L,null,new C.eTZ(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a0D)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hDs(r,new C.eU_(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Op(d,e),$async$a0D)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0D,v)},
b4s(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.n(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bU,u,u,u)
if(d)t=B.ax
else t=h.a?B.aQ:B.av
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bv:B.bo,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.i,0,B.p),1)
return A.aI(!1,B.a3,!0,u,A.aO(!1,u,!0,new A.D(B.Ce,A.A(A.a([s,B.be,t,A.X(B.eG,w?B.bv:B.bo,u,u,u,u)],v),B.m,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj)},
cpV(d,e,f,g,h,i){return this.b4s(!1,d,e,f,g,h,i)},
Op(d,e){return this.bLi(d,e)},
bLi(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Op=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lm(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Op)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bDA(t.a.c,d.a),$async$Op)
case 6:w=7
return A.b(t.wf(),$async$Op)
case 7:r=t.c
if(r==null){w=1
break}r.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Op,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.R(d).ax.a===B.J,n=new C.uc(o),m=o?B.c3:B.iB
if(q.f)o=D.bcI
else{w=q.bFE(n)
v=q.c0Q(n)
u=q.gbCK()
if(o)t=B.jT
else t=B.c
s=A.n(13)
r=x.p
u=A.a([w,B.af,v,B.aR,new C.Gc(A.p(p,A.A(A.a([q.aD_(P.OS,"Projects",n,D.acT),q.aD_(B.wu,"Cashier",n,D.b0I),q.aD_(B.He,"Family Tree",n,D.hB7)],r),B.m,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ey,0.95,u,p),B.by],r)
w=q.d
if(w===D.acT){w=J.ad(q.e)
B.d.v(u,A.a([A.A(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aQ:B.av,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b3,new C.ayz(q.gaSE(),p)],r),B.m,p,B.e,B.i,0,p,p),B.aC,q.cpX(n)],r))}else{o=q.a
if(w===D.b0I)u.push(new C.apu(o.c,n,p))
else{w=q.r
u.push(new C.aqF(o.c,o.d,o.e,o.f,new C.eUg(q),new C.eUh(q),new A.bP(w,x.b4)))}}o=A.cg(A.x(u,B.E,p,B.e,B.i,0,B.p),B.t,p,B.y,p,Al.O9,p,p,B.ai)}return A.c5(p,m,A.bm(!0,o,!0,!1,B.ag,!0,!0),p,!1,!1,p,p)},
bFE(d){var w=null,v=A.n(8),u=d.a,t=A.X(Z.a1z,u?B.bv:B.bo,w,w,w,16)
return A.aO(!1,v,!0,new A.D(B.kT,A.A(A.a([t,B.bn,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bv:B.bo,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.O,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eTS(this),w,w,w,w,w,w,w)},
gbCK(){switch(this.d.a){case 0:return D.ac6
case 1:return D.hq2
case 2:return D.ac7}},
c0Q(d){var w=null,v=A.n(15),u=A.a([new A.ac(0,B.G,B.aY.j(0.35),B.cA,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.bYO,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,44,w,w,w,w,w,44),B.be,D.bIw,A.aI(!1,B.a3,!0,w,A.aO(!1,A.n(12),!0,A.p(w,D.bWd,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eTW(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)],t),B.E,w,B.e,B.i,0,w,w),r=B.b2.j(0.55),q=A.n(12)
return new C.Gc(A.p(w,A.x(A.a([new A.D(E.a03,s,w),A.p(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aw,A.d(A.Bg(this.gcFH()),w,w,w,w,w,w,D.fz2,w,w,w)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.uq,B.jm,w,w,1/0)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(B.aY,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hq1,w)},
aD_(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.n(12),r=t?B.aY:B.L,q=A.n(12),p=t?A.L(B.c.j(0.55),B.r,2):A.L(B.L,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aY.j(0.42),B.cL,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bv:B.bo
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bv:B.bo
return A.E(A.aI(!1,B.a3,!0,u,A.aO(!1,s,!0,A.cV(u,A.A(A.a([w,B.e1,new A.dp(1,B.co,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.ba,B.i,0,u,u),u,u,B.cw,new A.o(r,u,p,q,o,u,B.n),B.iH,u,u,u,u,B.GT,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eUc(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),1)},
cpX(d){var w,v,u,t,s,r,q=this,p=null
if(J.cq(q.e)){w=d.a
v=w?B.e8:B.c
u=A.n(15)
t=A.p(p,D.bWj,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aY.j(0.5),B.eY,28)],x.V),D.c7z,B.a7),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.av,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Gc(A.p(p,A.x(A.a([t,B.d6,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bv:B.bo,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.dV,A.A(A.a([A.E(q.aUe(B.jn,"Scan QR",new C.eU6(q),d),1),B.at,A.E(q.aUe(R.zl,"Upload file",new C.eU7(q),d),1)],r),B.m,p,B.e,B.i,0,p,p),B.aC,A.bH(D.h_x,p,q.gaSE(),A.bn(B.aY,p,p,p,B.c,B.h3,p,p,new A.b9(A.n(12),B.a1),p,p,p))],r),B.m,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bEX,1.05,D.ac6,p)}w=J.b7(q.e,new C.eU8(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Gc(A.x(w,B.m,p,B.e,B.i,0,B.p),16,B.bU,1,D.ac6,p)},
aUe(d,e,f,g){var w=null,v=B.aY.j(g.a?0.18:0.1),u=A.n(12),t=A.n(12),s=A.n(12),r=A.L(B.aY.j(0.45),B.r,1)
return A.aI(!1,B.a3,!0,u,A.aO(!1,t,!0,A.p(w,A.x(A.a([A.X(d,B.b2,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.fxk,B.K,w,w)],x.p),B.m,w,B.e,B.O,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.al3,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)},
cpW(d,e){var w,v,u=null,t=e.a,s=t?B.e8:B.c,r=A.n(14),q=A.L(t?B.ee:B.bP,B.r,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.er,10)],x.V),o=A.n(14),n=t?B.bv:B.bo
n=A.bx(B.Xk,new A.fF(1.7777777777777777,C.aRK(!0,B.fh,1/0,P.OS,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aQ:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.aw,A.d(""+d.d.length+" budget items \xb7 "+A.Bg(d.gxC()),u,u,u,u,u,u,D.fvi,u,u,u)],w),B.E,u,B.e,B.i,0,B.p),1)
return A.p(u,A.aI(!1,B.a3,!0,u,A.aO(!1,o,!0,A.x(A.a([n,new A.D(B.bE,A.A(A.a([v,A.aG(u,u,u,u,A.X(Am.a2B,t?B.bv:B.bo,u,u,u,u),u,u,u,new C.eU4(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.i,0,u,u),u)],w),B.E,u,B.e,B.i,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eU5(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.ei,u,u,u,1/0)}}
C.bzD.prototype={}
C.rk.prototype={
ak(){var w=this,v=w.c,u=w.d
return A.H(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcZJ(){var w,v,u,t,s=this.c
if(s===B.k.iX(s))w=B.o.u(B.k.M(s))
else{v=B.k.ad(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lA.prototype={
gxC(){return B.d.cH(this.d,0,new C.cFy())},
ak(){var w=this,v=w.d,u=A.T(v).k("N<1,a8<m,@>>")
v=A.C(new A.N(v,new C.cFx(),u),u.k("ak.E"))
return A.H(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.af()],x.N,x.z)},
beP(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lA(w.a,w.b,v,u,w.e)},
bex(d){return this.beP(d,null)},
Tt(d){return this.beP(null,d)}}
C.Ij.prototype={
a7(){return"FamilyGender."+this.b}}
C.hS.prototype={
ak(){var w=this
return A.H(["id",w.a,"name",w.b,"gender",C.hyY(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aFJ(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hS(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.alK.prototype={
a7(){return"FamilyTreeAccessRole."+this.b}}
C.kR.prototype={
gaqc(){var w=this.f
return new A.Y(w,new C.bS7(),A.T(w).k("Y<1>")).gJ(0)},
ak(){var w=this,v=w.f,u=A.T(v).k("N<1,a8<m,@>>")
v=A.C(new A.N(v,new C.bS6(),u),u.k("ak.E"))
return A.H(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.af(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.ifc(w.y),"games",w.z],x.N,x.z)},
wV(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kR(w.a,v,u,t,s,r,w.r,q,p,o,n)},
beO(d,e){var w=null
return this.wV(w,w,w,d,e,w,w,w,w)},
cP5(d,e,f,g,h,i,j){return this.wV(d,e,null,f,g,h,i,j,null)},
aFO(d,e){var w=null
return this.wV(w,w,w,w,d,w,w,e,w)},
cP7(d,e,f,g,h,i,j,k){return this.wV(d,e,null,f,g,h,i,j,k)},
cNA(d){var w=null
return this.wV(w,w,w,w,w,w,w,d,w)},
cNY(d){var w=null
return this.wV(w,w,w,w,w,w,w,w,d)},
ber(d){var w=null
return this.wV(w,w,d,w,w,w,w,w,w)},
aFz(d){var w=null
return this.wV(w,w,w,w,w,d,w,w,w)},
cOC(d,e,f){var w=null
return this.wV(w,d,w,w,e,w,w,f,w)},
cNn(d){var w=null
return this.wV(w,w,w,d,w,w,w,w,w)},
cO9(d,e){var w=null
return this.wV(d,w,w,w,w,w,e,w,w)}}
C.cFz.prototype={
a7(){return"WrapAlignment."+this.b}}
C.cFA.prototype={
a7(){return"WrapCrossAlignment."+this.b}}
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
gwN(){return!0},
gGs(){return this.z.b<this.b.length},
aVU(d){switch(0){case 0:return d.a.c}},
aVA(d){switch(0){case 0:return d.a.d}},
bVh(d,e){switch(0){case 0:return new A.hO(d,e)}},
bUF(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hf(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iM(0,0,B.o.F(0,b5.a,b5.b),B.o.F(0,b5.c,b5.d))
return}w=A.I3(b4)
switch(0){case 0:v=b5.b
u=new A.kN(0,v,0,1/0)
t=w===B.V7
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
a9=b1.bUF(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bVh(a6,a3+a9)
b0=g.a
g.a=new A.iM(e.a,e.b,b0.c,b0.d)
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
w.pj(0,v)
for(u=r.z,u=B.d.ds(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.J)(u),++s)u[s].fV(d)
w.nx(0)},
GW(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
is(){return this.z}}
C.bxT.prototype={}
var z=a.updateTypes(["aB<~>()","P(hS)","~()","P(kR)","P(nr)","a8<m,@>(kR)","F(kR,kR)","F(hS,hS)","m(hS)","kR(a8<@,@>)","P(lA)","nr(a8<@,@>)","a8<m,@>(nr)","P(uJ)","uJ()","F(hS)","ai<hS>()","P(zu)","a_X(Z)","m?(hS)","eG<m?>(hS)","aB<~>(lA)","P(rk)","a8<m,@>(hS)","hS(a8<@,@>)","F(lA,lA)","P(afB)","~(bd)","v(oC)","F(F,a9H)","P(qD<F>)","~(qD<F>)","TM(Z)","P(MC)","P(uI)","~(hS)","m(m)","W5(Z)","TL(Z)","adZ(Z)","ZT(Z)","hS(hS)","cL(bA<m,Gs>)","cL(KL)","a_m(Z)","F?(hS)","hS()","P(KL)","D(hS)","~(Ij)","a_i(Z)","v(Ij,m,a0)","P(afu)","bA<m,ai<a8<m,@>>>(m,ai<nr>)","a_k(Z)","+count,id,name(F,m,m)(kR)","m(kR)","a0g(Z)","a0h(Z)","P(lS)","lS()","Zr(Z)","a23(Z)","ZV(Z)","ZU(Z)","~(F)","~(m,lp?)","v(rk)","aej(Z)","~(me)","aB<~>([m?])","I(I,lA)","v(lA)","I(I,rk)","a8<m,@>(rk)","rk(a8<@,@>)","ai<lp>()","uI()","m(V)","lA(a8<@,@>)","ct(Ii)","m(lA)","a8<m,@>(lA)","F(nr,nr)","kR(a8<m,@>)","kR(kR)"])
C.fME.prototype={
$1(d){return d.a+" "+d.b},
$S:129}
C.fMD.prototype={
bo5(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
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
$1(d){return this.bo5(d)},
$S:325}
C.fMF.prototype={
$1(d){return d.b},
$S:129}
C.fW8.prototype={
$1(d){var w=null
return A.eR(w,B.L,new H.Qd(this.a,this.b,w),w,w,0,B.a_Z,B.da,w,w,w)},
$S:49}
C.fA1.prototype={
$1(d){return d!=null},
$S:206}
C.fA2.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:206}
C.fA7.prototype={
$1(d){if(this.a)return new A.q(d.a*520,d.b*160)
return d},
$S:167}
C.fKn.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fc(d,w,w,w,A.ha(w,B.th,w,w,w,w,w,w,w,B.dz,w,w,10.5,w,B.ez,w,!0,w,w,w,w),w),u=f?B.ez:B.wo
return new A.o4(D.bAl,A.aaw(A.a([new A.fV(130,w,v),new A.zt(1,B.H7,A.fc(e,w,w,w,A.ha(w,g==null?D.esv:g,w,w,w,w,w,w,w,B.dz,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.ym,B.lQ))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1951}
C.fKm.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vT(999)
f=A.xv(A.lN(h,A.fc("Cashier",h,h,h,A.ha(h,D.Ai,h,h,h,h,h,h,h,B.dz,h,h,10,h,B.ez,h,!0,h,h,h,h),h),h,new A.kO(D.esm,h,f,B.i_,h),h,h,D.bAR,h))
w=A.xv(A.fc("Debt receipt",h,h,h,A.ha(h,h,h,h,h,h,h,h,h,B.dz,h,h,22,h,B.ez,h,!0,h,h,h,h),h))
v=A.xv(A.fc(C.xd(new A.V(Date.now(),0,!1),!0),h,h,h,D.aaA,h))
u=A.vT(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fc(s,h,h,h,A.ha(h,h,h,h,h,h,h,h,h,B.dz,h,h,14,h,B.ez,h,!0,h,h,h,h),h)
r=A.fc("Person who owes",h,h,h,D.aaA,h)
q=A.vT(10)
p=x.Z
u=A.lN(h,A.zm(A.a([s,new A.fV(h,2,h),r,new A.fV(h,10,h),A.lN(h,A.zm(A.a([A.fc("Amount owed",h,h,h,D.aaA,h),new A.fV(h,2,h),A.fc(A.Bg(t.c),h,h,h,A.ha(h,D.Ai,h,h,h,h,h,h,h,B.dz,h,h,20,h,B.ez,h,!0,h,h,h,h),h)],p),B.rF,B.lQ),h,new A.kO(B.pE,h,q,B.i_,h),h,h,D.bA1,1/0)],p),B.rF,B.lQ),h,new A.kO(E.aM7,h,u,B.i_,h),h,h,D.bBY,1/0)
q=new A.nN(D.esp,0.9,B.l6)
r=A.vT(12)
s=i.c
o=s.$2("Original due",C.xd(t.r,!1))
n=s.$2("Current due",C.xd(t.f,!1))
m=i.d
l=new A.nN(m,1.1,B.l6)
k=A.vT(8)
j=i.a
k=A.a([o,n,new A.fV(h,6,h),A.lN(h,A.xv(A.fc(t.gaMS(),h,h,h,A.ha(h,m,h,h,h,h,h,h,h,B.dz,h,h,11,h,B.ez,h,!0,0.5,h,h,h),h)),h,new A.kO(h,new A.pV(l,l,l,l),k,B.i_,h),h,h,D.bAZ,1/0),new A.fV(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.Ai))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.Ai))
else{n=A.fc("Missed days ("+n+")",h,h,h,A.ha(h,B.th,h,h,h,h,h,h,h,B.dz,h,h,10.5,h,B.ez,h,!0,h,h,h,h),h)
m=A.T(o).k("N<1,Tk>")
o=A.C(new A.N(o,new C.fKl(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fV(h,4,h),n,new A.fV(h,6,h),new C.bai(5,5,new C.baj(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fV(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fV(h,8,h),w,new A.fV(h,3,h),v,new A.fV(h,16,h),u,new A.fV(h,10,h),A.lN(h,A.zm(k,B.ym,B.lQ),h,new A.kO(h,new A.pV(q,q,q,q),r,B.i_,h),h,h,B.ale,1/0)],p)
w=j.a
if(w!=null){v=new A.nN(B.Jy,1,B.l6)
B.d.v(f,A.a([new A.fV(h,16,h),A.fc("Debtor signature",h,h,h,A.ha(h,B.th,h,h,h,h,h,h,h,B.dz,h,h,10,h,B.ez,h,!0,h,h,h,h),h),new A.fV(h,6,h),A.lN(h,new A.IC(w,B.Xu,h,h),h,new A.kO(h,new A.pV(v,v,v,v),A.vT(6),B.i_,h),82,h,B.Oe,1/0)],p))}f.push(new A.fV(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fc(w,h,h,h,D.fnM,h))
f.push(new A.fV(h,18,h))
f.push(A.xv(A.fc("NGMY.ORG",h,h,h,A.ha(h,D.Ai,h,h,h,h,h,h,h,B.dz,h,h,14,h,B.ez,h,!0,1.8,h,h,h),h)))
return f},
$S:437}
C.fKl.prototype={
$1(d){var w=null,v=new A.nN(D.Jz,0.7,B.l6),u=A.vT(999)
return A.lN(w,A.fc(C.xd(d,!1),w,w,w,A.ha(w,D.Jz,w,w,w,w,w,w,w,B.dz,w,w,9.5,w,B.ez,w,!0,w,w,w,w),w),w,new A.kO(w,new A.pV(v,v,v,v),u,B.i_,w),w,w,D.bGn,w)},
$S:1952}
C.c7m.prototype={
$1(d){var w=null,v=B.bC.j(0.08),u=A.n(999),t=A.L(B.bC.j(0.28),B.r,1)
return A.p(w,A.d(C.xd(d,!1),w,w,w,w,w,w,D.fuN,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eL,w,w,w)},
$S:1953}
C.fWF.prototype={
$1(d){var w=null,v=A.aH(d,B.c_,x.w).w,u=A.n(26),t=A.aG(w,w,w,w,D.bZL,w,w,w,new C.fWC(d),w,w,w,w,w,B.ce),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eR(w,B.L,new A.cR(new A.aZ(0,380,0,v.a.b*0.9),A.aI(!1,B.a3,!0,u,new A.D(B.a_N,A.x(A.a([new A.bL(B.a9,w,w,t,w),new A.dp(1,B.co,A.cg(A.x(A.a([new A.em(new C.b_k(r,w),s),B.X,A.A(A.a([A.E(A.es(B.zu,D.fWM,new C.fWD(s,r,d),A.di(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fl,w,new A.b9(A.n(14),B.a1),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ae,A.E(A.dh(B.a3e,D.fTa,new C.fWE(r,d),A.bn(B.b2,w,w,w,B.c,w,B.fl,w,new A.b9(A.n(14),B.a1),w,w,w)),1)],p),B.m,w,B.e,B.i,0,w,w)],p),B.m,w,B.e,B.O,0,B.p),B.t,w,B.y,w,w,w,w,B.ai),w)],p),B.m,w,B.e,B.O,0,B.p),w),B.f,B.av,0,w,w,w,w,w,B.aj),w),w,w,0,Ar.a0c,B.da,w,w,w)},
$S:49}
C.fWC.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fWD.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aV.ao$.x.h(0,t.a)
m=m==null?null:m.gbg()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.md(2.5),$async$$0)
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
C.fWE.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fQZ(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.L(x.q).f
s.U(A.b3(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fWx.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.b
return A.eR(w,B.av,A.x(A.a([new A.D(D.bBM,A.A(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.na,w,w,w),1),A.aG(w,w,w,w,B.ln,w,w,w,new C.fWv(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.i,0,w,w),w),new A.dp(1,B.co,new A.D(B.f1,A.bx(A.n(14),A.fR(t,B.A,w,w,B.cj,B.dC,!1,w,!1,w,w),B.aq),w),w),new A.D(B.NT,new A.a5(1/0,w,A.dh(B.oB,D.aWj,new C.fWw(t,this.c,d),A.bn(B.b2,w,w,w,B.c,w,w,w,new A.b9(A.n(14),B.a1),w,w,w)),w),w)],u),B.m,w,B.e,B.O,0,B.p),w,w,w,B.O5,B.da,w,new A.b9(v,B.a1),w)},
$S:49}
C.fWv.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fWw.prototype={
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
C.fWJ.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.a,s=this.b
return A.eR(w,B.av,new A.D(D.bBU,A.x(A.a([A.A(A.a([D.bHB,A.aG(w,w,w,w,B.ln,w,w,w,new C.fWH(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.i,0,w,w),B.P,new A.em(A.bx(A.n(14),A.p(w,A.b4(w,w,w,new C.bcv(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.af,new A.a5(1/0,w,A.dh(B.oB,D.aWj,new C.fWI(t,s,d),A.bn(B.b2,w,w,w,B.c,w,w,w,new A.b9(A.n(14),B.a1),w,w,w)),w)],u),B.m,w,B.e,B.O,0,B.p),w),w,w,w,w,B.da,w,new A.b9(v,B.a1),w)},
$S:49}
C.fWH.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fWI.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aV.ao$.x.h(0,t.a)
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
C.fEI.prototype={
$1(d){return d.a===this.a},
$S:248}
C.dPn.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dP8.prototype={
bnj(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.e8:B.c
s=u.a
w=2
return A.b(A.bT(t,null,new C.dPb(s,q,e),p,!0,!0,!1,B.JQ,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dPc(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bnj(d,e)},
$S:1954}
C.dPb.prototype={
$1(d){var w,v=null,u=this.c===B.wX,t=u?D.drp:D.dmZ
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aQ:B.av,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(O.alL,A.x(A.a([u,B.aw,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bv:B.bo,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.il(!0,v,v,B.y,D.fel,new C.dPa(this.a,w,t,d),t.length,v,B.dU,B.ai,!0)],x.p),B.al,v,B.e,B.O,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:27}
C.dPa.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.n(14)
if(q)w=B.cS.j(0.14)
else w=t.b.a.d.a?B.R:B.aQ
v=A.n(14)
if(q)u=B.cS
else u=(t.b.a.d.a?B.bv:B.bo).j(0.16)
u=A.L(u,B.r,q?1.6:1)
return A.aO(!1,p,!0,A.p(B.A,C.b_j(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dP9(t.d,r),s,s,s,s,s,s,s)},
$S:192}
C.dP9.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dPc.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dP6.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:97}
C.dP7.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cJ(B.cw,e,v)
return new A.d_(e,!1,A.is(B.A,A.at(A.aI(!1,B.a3,!0,v,new A.e_(new C.dP5(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.aj),v,v,v),v,new A.bf(t,new A.bp(0.96,1,u),u.k("bf<bN.T>"))),v)},
$S:34}
C.dP5.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aH(d,B.c_,x.w).w,i=l.b,h=i.a.d.a,g=h?B.e8:B.c,f=A.n(14),e=A.L((h?B.bv:B.bo).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.av,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.n(8)
u=x.p
v=A.A(A.a([w,A.aO(!1,v,!0,new A.D(B.ey,A.X(B.cz,i.a.d.a?B.bv:B.bo,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dOR(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.i,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aQ:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aUK("Name")
r=l.a
q=r.d==null?k:new C.dOS(r,l.e,a0)
p=A.n(20)
o=i.a.d.a?B.bp:B.m5
n=A.L(B.cS.j(0.35),B.r,1)
m=r.d
t=A.aM(k,B.Z,h,k,!0,B.t,k,A.aN(),w,k,k,k,k,k,2,s.beH(new A.D(B.fz,A.aO(!1,p,!0,A.p(B.A,C.b_j(m==null?"\ud83d\udc64":A.fLb(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a7),k,34,k,B.cl,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ab,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.l2,k,B.aap,k,k)
v=A.a([v,B.af,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bo,k,k,k,k,k,k,k,k,11.5,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.an,A.A(A.a([A.E(i.aVq("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dOT(r,a0),r.d===B.wX),1),B.ae,A.E(i.aVq("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dOY(r,a0),r.d===B.a75),1)],u),B.m,k,B.e,B.i,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bL(B.a6,k,k,A.ho(D.bY2,D.fV3,new C.dOZ(r,l.e,a0),A.fu(k,k,k,k,k,k,k,k,k,k,k,B.cS,k,k,k,k,k,k,k,k,k,k,k,k,k,B.ce)),k)],u))
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
v.push(A.aI(!1,B.a3,!0,q,A.aO(!1,p,!0,A.p(k,A.A(A.a([A.E(A.x(A.a([t,B.bG,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.av,k,k,k,k,k,k,k,k,14,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.i,0,B.p),1),D.bUL],u),B.m,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bh,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dP_(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.aj))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bo,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.X)
t=A.l(k,k,i.a.d.a?B.aQ:B.av,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.Z,!1,k,!0,B.t,k,A.aN(),l.r,k,k,k,k,k,2,i.aUK("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ab,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.av,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bo,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b2R(r.b.length!==0,B.mT,new C.dP0(r,i,a0),new C.dP1(r,a0),"Upload from gallery","ID photo"))
v.push(i.b2R(r.c.length!==0,D.bO5,new C.dP2(r,i,d,a0),new C.dP3(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Aq.a8k("Signature (optional)",t,new C.dP4(a0),new C.dOU(a0,t),new C.dOV(d,t,a0),k))
v.push(B.aC)
i=i.a.d.a
t=i?B.bv:B.bo
s=(i?B.bv:B.bo).j(0.28)
s=A.E(A.dT(E.aWc,new C.dOW(d),A.di(k,k,k,k,k,k,k,k,k,t,k,k,B.rL,k,new A.b9(A.n(10),B.a1),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bn(B.cS,k,k,k,B.c,k,B.rL,k,new A.b9(A.n(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.ae,A.E(A.bH(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vw,k,k,k),k,new C.dOX(r,w,d),t),1)],u),B.m,k,B.e,B.i,0,k,k))
return A.p(k,A.cg(A.x(v,B.al,k,B.e,B.O,0,B.p),B.t,k,B.y,k,k,k,k,B.ai),B.f,k,new A.aZ(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.rN,B.jm,k,k,360)},
$S:169}
C.dOR.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dOS.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dOT.prototype={
$0(){return this.b.$1(new C.dOQ(this.a))},
$S:0}
C.dOQ.prototype={
$0(){var w=this.a
w.d=B.wX
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dOY.prototype={
$0(){return this.b.$1(new C.dOP(this.a))},
$S:0}
C.dOP.prototype={
$0(){var w=this.a
w.d=B.a75
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dOZ.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dP_.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xh(null,u.b,A.c1(2020,1,1,0,0,0,0,0),null,s,A.c1(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dOO(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dOO.prototype={
$0(){var w=this.b
return this.a.a=A.c1(w.gcl(),w.gcg(),w.gcw(),0,0,0,0,0)},
$S:0}
C.dP0.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Q_(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dON(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dON.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dP1.prototype={
$0(){return this.b.$1(new C.dOM(this.a))},
$S:0}
C.dOM.prototype={
$0(){return this.a.b=""},
$S:0}
C.dP2.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.e8:B.c
w=3
return A.b(A.bT(q,null,new C.dOK(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Q_(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dOL(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dOK.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dF(!1,w,w,w,!0,w,w,w,!0,w,w,B.ar6,w,w,w,w,new C.dOE(d),!1,w,w,w,w,w,w,w,D.fLb,w,w,w),A.dF(!1,w,w,w,!0,w,w,w,!0,w,w,B.ar4,w,w,w,w,new C.dOF(d),!1,w,w,w,w,w,w,w,D.fSc,w,w,w)],x.p),B.m,w,B.e,B.O,0,B.p),!0,!1,B.ag,!0,!0)},
$S:27}
C.dOE.prototype={
$0(){A.a6(this.a,!1).O("camera")
return null},
$S:0}
C.dOF.prototype={
$0(){A.a6(this.a,!1).O("gallery")
return null},
$S:0}
C.dOL.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dP3.prototype={
$0(){return this.b.$1(new C.dOJ(this.a))},
$S:0}
C.dOJ.prototype={
$0(){return this.a.c=""},
$S:0}
C.dP4.prototype={
$0(){return this.a.$1(new C.dOI())},
$S:0}
C.dOI.prototype={
$0(){},
$S:0}
C.dOU.prototype={
$0(){return this.a.$1(new C.dOH(this.b))},
$S:0}
C.dOH.prototype={
$0(){return B.d.a9(this.a)},
$S:0}
C.dOV.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.aiu(u.a,null,null,new C.dOG(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dOG.prototype={
$4(d,e,f,g){this.a.$1(new C.dOD(this.b,d))},
$S:392}
C.dOD.prototype={
$0(){var w=this.a
B.d.a9(w)
B.d.v(w,this.b)},
$S:0}
C.dOW.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dOX.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.L(x.q).f.U(D.fjp)
return}if(w.a.d==null){w.c.L(x.q).f.U(D.fgi)
return}A.a6(w.c,!1).O(!0)},
$S:0}
C.dPq.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:97}
C.dPr.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.e8:B.c,n=A.n(14),m=A.L((p?B.bv:B.bo).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aQ:B.av,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Bg(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bv:B.bo,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zF(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.zF(r).length>0?B.bC:B.cS,r,r,r,r,r,r,r,r,12,r,r,B.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bv:B.bo
t=(q?B.bv:B.bo).j(0.28)
s=x.p
return new A.d_(e,!1,A.at(A.aI(!1,B.a3,!0,r,A.p(r,A.x(A.a([p,B.P,v,u,B.aC,A.A(A.a([A.E(A.dT(B.nU,new C.dPo(d),A.di(r,r,r,r,r,r,r,r,r,w,r,r,B.k_,r,new A.b9(A.n(10),B.a1),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ae,A.E(A.bH(D.fSC,r,new C.dPp(d),A.bn(B.cS,r,r,r,B.c,r,B.k_,r,new A.b9(A.n(10),B.a1),r,r,r)),1)],s),B.m,r,B.e,B.i,0,r,r)],s),B.al,r,B.e,B.O,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.Ch,E.a03,r,r,300),B.f,B.L,0,r,r,r,r,r,B.aj),r,r,r),r)},
$S:34}
C.dPo.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dPp.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dPk.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dPl(r),p=r.a.d.a,o=p?B.e8:B.c,n=A.n(14),m=A.L((p?B.bv:B.bo).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aQ:B.av,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Bg(l.c),s,s,s,s,s,s,D.fwm,s,s,s)],p),B.m,s,B.e,B.i,0,s,s)
w=A.iH((r.a.d.a?B.bv:B.bo).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a1U,"View receipt",new C.dPd(r,d,l))
u=l.x!=null
t=u?B.pq:B.qD
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bBR,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dPe(r,d,l)),q.$3$icon$label$onTap(B.Cu,"Edit",new C.dPf(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mT,"View / download ID",new C.dPg(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bO4,"View / download selfie",new C.dPh(r,d,l)))
if(l.gaHt())p.push(q.$3$icon$label$onTap(Ae.a34,"View / download signature",new C.dPi(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bC,B.ef,"Delete",new C.dPj(r,d,l)))
p.push(B.aw)
return A.bm(!0,new A.D(B.uq,A.p(s,A.x(p,B.m,s,B.e,B.O,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:27}
C.dPl.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aQ:B.av
else w=d
return A.aO(!1,v,!0,new A.D(B.eV,A.A(A.a([A.X(e,w,v,v,v,20),B.be,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1955}
C.dPd.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fWB(w,this.c)},
$S:0}
C.dPe.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.SO(this.c)},
$S:0}
C.dPf.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.Dz(this.c)},
$S:0}
C.dPg.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bFF(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dPh.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bFF(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dPi.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fWG(w,this.c)},
$S:0}
C.dPj.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.PZ(0,this.c)},
$S:0}
C.dPs.prototype={
$1(d){return d.x==null},
$S:248}
C.dPt.prototype={
$1(d){return d.x!=null},
$S:248}
C.dPu.prototype={
$2(d,e){return d+e.c},
$S:1956}
C.dPv.prototype={
$0(){return this.a.bDf()},
$S:0}
C.dPm.prototype={
$0(){return this.a.ag3(this.b)},
$S:0}
C.fFr.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fFs.prototype={
$0(){return B.d.gH(D.a4p)},
$S:z+77}
C.df9.prototype={
$0(){var w=this.a
return w.m(new C.df7(w,this.b))},
$S:0}
C.df7.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.df8.prototype={
$0(){},
$S:0}
C.dfa.prototype={
$0(){var w=this.a.gc1A()
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.fHW.prototype={
$1(d){return C.hjs(A.a3(d,x.N,x.z))},
$S:z+11}
C.fHX.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fHY.prototype={
$2(d,e){var w=A.ca(d.a,null),v=A.ca(e.a,null)
if(w!=null&&v!=null)return B.o.aR(w,v)
return d.d.aR(0,e.d)},
$S:z+83}
C.fVe.prototype={
$1(d){return d.ak()},
$S:z+12}
C.h2z.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fEz.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bQP.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f1(e,v)?v:null},
$S:1957}
C.fVN.prototype={
$1(d){var w=this
return new C.a_k(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dfP.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dfO(w,d))},
$S:z+80}
C.dfO.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dfD.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cI(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dfA.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dfb.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dfc.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dfE.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dfk.prototype={
$1(d){var w=null,v=A.R(d).ax.a===B.J,u=v?B.e8:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bo,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.eg(A.a([A.bM(!1,B.dl,w,w,!0,w,w,w,new C.dfi(d),w,w),A.bH(B.xk,w,new C.dfj(d),A.bn(B.nj,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.dfi.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dfj.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dfl.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.F(w.r-1,-1,999)},
$S:0}
C.dfB.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dfC.prototype={
$0(){return B.d.gH(D.zI)},
$S:z+14}
C.dfg.prototype={
$1(d){var w=this.a,v=w.y,u=w.gyZ(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.TL(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dfh.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dfm.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.ZT(v,u,J.ad(w.d),null)},
$S:z+40}
C.dfn.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dfN.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aA(s,new C.ZA(r.y,r.gyZ(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dfL(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bbS(v,e,w,u,t,r.gbTK(),C.hyX(r.y.Q),r.gyZ(0),s)
w=t}return A.c9(q,new C.dfM(r,e),new A.D(B.a04,w,s))},
$S:1958}
C.dfM.prototype={
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
C.dfL.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aID(B.qm,B.j0)},
$S:0}
C.dfx.prototype={
$0(){var w=this.a
return w.m(new C.dfw(w))},
$S:0}
C.dfw.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dfy.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).O(null)
return null},
$S:0}
C.dfd.prototype={
$1(d){var w,v,u=null,t=A.n(26),s=E.kn.j(0.5),r=x.p,q=A.a([D.fJM,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cq(p.d)?"Write this book":"Write a new book"
q.push(p.ZI(d,B.e9,w,J.cq(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.ZI(d,I.ap2,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cI(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cv,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kM.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cv,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kM.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.ZI(d,X.aq4,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.ZI(d,B.qJ,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.ZI(d,B.qJ,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eR(u,E.BJ,A.bm(!0,new A.D(Ad.yG,A.x(q,B.E,u,B.e,B.O,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,D.ama,B.da,u,new A.b9(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:49}
C.dfz.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dfq.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cI(w.d)
return new C.a_m(v,J.cI(w.d),w.r+1,null)},
$S:z+44}
C.dfr.prototype={
$1(d){var w=null
return A.oH(!1,A.eg(w,w,w,E.BJ,new A.k_(this.a,new C.dfp(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:323}
C.dfp.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aa4,B.oR,A.E(A.d(e,w,w,w,w,w,w,B.jt,w,w,w),1)],x.p),B.m,w,B.e,B.i,0,w,w)},
$S:531}
C.dfs.prototype={
$0(){return this.a.a=!1},
$S:51}
C.dft.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:178}
C.dfu.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dfv.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Bp(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.So(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.dfo(s,t))
w=4
return A.b(s.lg(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dfo.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dfG.prototype={
$1(d){var w=null
return A.oH(!1,A.eg(w,w,w,E.BJ,new A.k_(this.a,new C.dfF(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:323}
C.dfF.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aa4,B.oR,A.E(A.d(e,w,w,w,w,w,w,B.jt,w,w,w),1)],x.p),B.m,w,B.e,B.i,0,w,w)},
$S:531}
C.dfH.prototype={
$0(){return this.a.a=!1},
$S:51}
C.dfI.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:178}
C.dfJ.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:178}
C.dfK.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.Bp(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lg(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dfe.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bke(B.qm,A4.NH)},
$S:0}
C.dff.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aID(B.qm,A4.NH)},
$S:0}
C.dhA.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dhB.prototype={
$1(d){var w=this.a
return w.m(new C.dhz(w))},
$S:9}
C.dhz.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dhC.prototype={
$1(d){var w=this.a
return w.m(new C.dhy(w))},
$S:9}
C.dhy.prototype={
$0(){return this.a.e="book"},
$S:0}
C.dhD.prototype={
$1(d){var w=this.a
return w.m(new C.dhx(w))},
$S:9}
C.dhx.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dhE.prototype={
$0(){var w=this.a
return w.m(new C.dhw(w,this.b))},
$S:0}
C.dhw.prototype={
$0(){var w=this.b
this.a.d.sb1(0,w)
return w},
$S:0}
C.dhF.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga2s()
A.a6(this.b,!1).O(new A.bqI(w,v))},
$S:0}
C.dg3.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dg2.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a_i(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dg7.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dg6.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.bag(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hh,v,v,v)
return A.eg(A.a([A.bM(!1,B.dl,v,v,!0,v,v,v,new C.dg4(d),v,v),A.bH(B.xk,v,new C.dg5(d),A.bn(B.nj,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.BJ,w,v,v,v,v,D.fIx,v)},
$S:18}
C.dg4.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dg5.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dg8.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dg9.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.cg(A.bW(B.bH,r,B.bt,t,18,14),B.t,t,B.y,t,D.bCP,t,t,B.ai)},
$S:306}
C.dg1.prototype={
$0(){return this.a.QL(0,this.b)},
$S:0}
C.dg0.prototype={
$0(){return this.a.Qc(0,this.b)},
$S:0}
C.cOw.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cOx.prototype={
$0(){return B.d.gH(D.zI)},
$S:z+14}
C.cOy.prototype={
$4(d,e,f,g){var w=null,v=A.n(e)
return A.bR(0,new A.D(d,A.c3(w,new A.o(w,w,A.L(this.a.j(f),B.r,g),v,w,w,B.n),B.bi),w),0,0,0)},
$S:1960}
C.d74.prototype={
$1(d){return this.a.m(new C.d73(this.b,this.c))},
$S:9}
C.d73.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d7t.prototype={
$1(d){return this.a.m(new C.d7g())},
$S:2}
C.d7g.prototype={
$0(){},
$S:0}
C.d7u.prototype={
$1(d){return this.a.m(new C.d7f())},
$S:2}
C.d7f.prototype={
$0(){},
$S:0}
C.d7v.prototype={
$0(){var w=this.a
return w.m(new C.d7e(w,this.b))},
$S:0}
C.d7e.prototype={
$0(){var w=this.a
return w.d=w.gom().G9(this.b.a)},
$S:0}
C.d7w.prototype={
$0(){var w=this.a
return w.m(new C.d7d(w,this.b))},
$S:0}
C.d7d.prototype={
$0(){var w=this.a
return w.d=w.gom().cMU(this.b)},
$S:0}
C.d7x.prototype={
$1(d){return this.a.m(new C.d7c())},
$S:2}
C.d7c.prototype={
$0(){},
$S:0}
C.d7y.prototype={
$0(){var w=this.a
return w.m(new C.d7b(w,this.b))},
$S:0}
C.d7b.prototype={
$0(){var w=this.a
return w.d=w.gom().cMZ(this.b.a)},
$S:0}
C.d7z.prototype={
$1(d){var w=this.a
return w.m(new C.d7o(w,d))},
$S:6}
C.d7o.prototype={
$0(){var w=this.a
return w.d=w.gom().cNT(this.b)},
$S:0}
C.d7A.prototype={
$1(d){var w=this.a
return w.d=w.gom().aFC(d)},
$S:2}
C.d7B.prototype={
$1(d){var w=this.a
return w.d=w.gom().cN1(d)},
$S:2}
C.d7D.prototype={
$1(d){var w=this.a
return w.d=w.gom().cNR(d)},
$S:2}
C.d7E.prototype={
$1(d){var w=this.a
return w.m(new C.d7n(w,d))},
$S:9}
C.d7n.prototype={
$0(){var w=this.a
return w.d=w.gom().cNI(this.b)},
$S:0}
C.d7F.prototype={
$0(){var w=this.a,v=w.gom(),u=B.a.i(w.gyZ(0).a.a),t=B.a.i(w.gaCO().a.a)
u=v.beY(B.a.i(w.gasu().a.a),t,u)
A.a6(this.b,!1).O(u)
return null},
$S:0}
C.bQZ.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bQT.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bQS(w,d))},
$S:11}
C.bQS.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bR1.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bQU.prototype={
$0(){var w=this.a
w.Q=D.b0j
w.adJ(1)
w.r.x=null},
$S:0}
C.bQV.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b0j)return
w=new A.e4()
w.d_(u.as*13+u.a.e)
v=u.r
v.Q=3+w.aw(3)
v.z=D.d2x[w.aw(6)]
v.as=u.f.a+2.6},
$S:0}
C.bQY.prototype={
$0(){var w=this.a
w.Q=D.acF
w.adJ(2)
w.r.z=null},
$S:0}
C.bQX.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hz6
t.adJ(3)
w=t.r
w.d=s
w.x="I say: "+t.gCp()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.aw(3)
w.z=s?D.d8Z[v.aw(4)]:D.dtR[v.aw(3)]
w.as=t.a+2.8},
$S:0}
C.bR_.prototype={
$0(){var w=this.a
w.Q=D.b0k
w.CW=this.b
w.cy=1
w.adJ(4)
w.r.f=w.f.a+5},
$S:0}
C.bR0.prototype={
$0(){},
$S:0}
C.bQW.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bQQ.prototype={
$0(){return this.a.KY(this.b)},
$S:0}
C.bQR.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bSv.prototype={
$0(){var w=this
return w.a.R3(w.b,0,w.c,w.d)},
$S:0}
C.bSw.prototype={
$0(){var w=this
return w.a.R3(w.b,3,w.c,w.d)},
$S:0}
C.bSx.prototype={
$0(){var w=this
return w.a.R3(w.b,1,w.c,w.d)},
$S:0}
C.bSy.prototype={
$0(){var w=this
return w.a.bTa(w.b,w.c,w.d)},
$S:0}
C.bSz.prototype={
$0(){var w=this
return w.a.R3(w.b,4,w.c,w.d)},
$S:0}
C.bSA.prototype={
$0(){var w=this
return w.a.R3(w.b,2,w.c,w.d)},
$S:0}
C.bSB.prototype={
$0(){var w=this
return w.a.R3(w.b,5,w.c,w.d)},
$S:0}
C.bSC.prototype={
$2(d,e){return B.k.aR(d.a,e.a)},
$S:513}
C.bSu.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a5z[d],p=q.a.a6(0,new A.q(0,-q.b*1.2*124)),o=A.fv(r,B.ct,r,3,r,A.cQ(r,r,r,r,r,r,r,r,r,D.fns,e),B.a5,B.bW,r,B.dD,B.bX)
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
C.bRf.prototype={
$2(d,e){return B.o.aR(d.Q,e.Q)},
$S:z+7}
C.bRg.prototype={
$2(d,e){var w=this.a,v=B.o.aR(w.amm(d),w.amm(e))
if(v!==0)return v
return B.o.aR(d.Q,e.Q)},
$S:z+7}
C.fsW.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.h2q.prototype={
$2(d,e){if(e!=null)J.c8(this.a.c3(0,d,new C.h2r()),e)},
$S:z+66}
C.h2r.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.h2s.prototype={
$1(d){return d!==this.a},
$S:3}
C.h2t.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.h2u.prototype={
$1(d){return d!==this.a&&!B.d.aW(this.b,new C.h2p(this.c,d))},
$S:3}
C.h2p.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.h2v.prototype={
$1(d){return d!==this.a},
$S:3}
C.h2w.prototype={
$1(d){return d!==this.a},
$S:3}
C.h2x.prototype={
$1(d){return d!==this.a&&!B.d.aW(this.b,new C.h2o(this.c,d))},
$S:3}
C.h2o.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fG2.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fUf.prototype={
$1(d){return d.Q},
$S:z+15}
C.fUg.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fC3.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fIQ.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bM2.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.h2Q.prototype={
$2(d,e){return B.o.aR(C.hvj(d),C.hvj(e))},
$S:242}
C.h2R.prototype={
$1(d){return d!==this.a},
$S:3}
C.fUL.prototype={
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
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bR(0,A.b4(u,u,u,new C.bcx(t,u),B.az),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.n(14)
s.push(A.ap(u,A.p(u,A.d(t.dy,u,u,u,u,u,u,D.fuZ,B.K,u,u),B.f,u,u,new A.o(w,u,u,v,u,u,B.n),u,u,u,u,B.bU,u,u,u),u,u,14,14,6,u))}return A.aA(B.c5,new A.an(B.a0,u,B.ac,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bK9(t,e),u,u,u,u,u,u,u,new C.bKa(t,e),u,u,u,u,u,u,u,u,u,new C.bKb(t,e),u,u,u,u,!1,B.a4)},
$S:36}
C.bK9.prototype={
$1(d){return this.a.db=B.k.F(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bKb.prototype={
$1(d){return this.a.db=B.k.F(d.b.a/this.b.b,0.08,0.92)},
$S:23}
C.bKa.prototype={
$1(d){return this.a.db=B.k.F(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bK5.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.cpz.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cpA.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cpy(w))},
$S:0}
C.cpy.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cpB.prototype={
$0(){var w=this,v=w.a
v.gj0()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cpC.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cpD.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cpE.prototype={
$0(){},
$S:0}
C.cpF.prototype={
$0(){var w=this.a
w.z=w.Xg(++w.e)
w.Q=A.bZ(w.gkR()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cpv.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.cpw.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj0().length,e=i/2,d=new C.cpx(i,f,h),a0=g.as,a1=A.a4(a0).k("b8<2>")
a0=A.C(new A.b8(a0,a1),a1.k("M.E"))
a0=A.bR(0,A.c9(new A.h4(a0),new C.cpq(g,new A.q(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj0().length!==0&&!B.d.q(g.gj0(),-1)
v=x.p
e=A.a([a0,A.ap(j,new C.Qv(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cL(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new S.MK(new C.cpr(g,u),new C.cps(g,u),new C.cpt(g,u),j,j,new A.bP("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ap(j,A.d(a1,j,j,j,j,j,j,A.l(j,j,B.a.q(a1,"not a child")?B.ff:B.b9,j,j,j,j,j,j,j,j,13,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj0().length!==0&&!B.d.q(g.gj0(),-1)){a0=g.e+1>=g.gkR().length?"See my result":"Next family"
g=A.at(C.up(a0,g.gqk(g),B.cN,B.jF,D.fw),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.Xg(0):s).length))break
if(!B.d.q(g.gj0(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.Xg(0)
o=s}else o=s
n=s[u]
n=A.ed(B.A,new C.Qv(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.Xg(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.r0(new A.bp(0,p,t),new C.cpu(),new S.Ee(u,j,new C.Qv(l.b,k,62,!1,j),new A.kE(0.25,new C.Qv(m.b,k,62,!1,j),j),new A.k7(n,B.aj,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.I,S.hyP(),!0,!0,j,j,j,j,j,j,!1,B.iL,j,new A.bP("chip-"+r,a0),w),B.b6,B.iJ,j,new A.bP("t"+r+"-"+q,a0),v))}++u}g=A.bW(B.fM,a1,B.bt,j,6,8)}e.push(A.ap(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ac,B.t,e,j)},
$S:68}
C.cpx.prototype={
$1(d){return new A.q(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:645}
C.cpq.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.gj0().length!==0&&!B.d.q(t.gj0(),-1)
return A.b4(p,p,p,new C.bc0(q.b,o,v,w,p),B.az)},
$S:62}
C.cps.prototype={
$1(d){return this.a.gj0()[this.b]===-1},
$S:z+30}
C.cpt.prototype={
$1(d){return this.a.cQM(this.b,d.a)},
$S:z+31}
C.cpr.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj0()[t]!==-1,r=A.n(18),q=e.length!==0?B.cN.j(0.3):B.L
if(s)w=v
else w=A.L(e.length!==0?B.cN:B.jV,B.r,2)
u=s?A.lz(new C.cpp(),A.at(new C.Qv(u.gaF4()[u.gj0()[t]].b,u.gaF4()[u.gj0()[t]].a,62,!1,v),v,v,v),B.lz,B.iJ,v,v,new A.bp(0.3,1,x.X),x.i):D.bbk
return A.cV(v,u,v,v,B.b6,new A.o(q,v,w,r,v,v,B.n),B.a3,v,100,v,v,v,v,v,88)},
$S:1963}
C.cpp.prototype={
$3(d,e,f){return A.ed(B.A,f,e,null,null)},
$S:114}
C.cpu.prototype={
$3(d,e,f){return A.dO(f,new A.q(Math.sin(e*24)*8*(1-e),0))},
$S:114}
C.cPA.prototype={
$1(d){return d>=1},
$S:119}
C.cEx.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkR()[w.e].d.length)w.m(new C.cEw(w))},
$S:11}
C.cEw.prototype={
$0(){return this.a.f++},
$S:0}
C.cEF.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cEG.prototype={
$0(){var w=this.a,v=this.b
w.z.I(0,v)
w.Q=v},
$S:0}
C.cEH.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cEE(w))},
$S:0}
C.cEE.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cEI.prototype={
$0(){return this.a.f++},
$S:0}
C.cEJ.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cEK.prototype={
$0(){},
$S:0}
C.cEL.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a9(0)
w.as=!1
w.ay=0},
$S:0}
C.cEz.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.cEA.prototype={
$3(d,e,f){var w=null
return A.lz(new C.cEy(this.a,e),w,B.b6,B.hD,w,w,new A.bp(w,this.b,x.X),x.i)},
$S:1964}
C.cEy.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.cN.j(u.as?0.6:0.15)
t=A.a([new A.ac(0,B.G,t,B.I,u.as?40:18)],x.V)
w=this.b
return A.p(v,A.hR(new A.BA(new A.uH(B.w.j(e),B.LE,v,B.XX),H.bWI(A.b4(v,v,v,new C.aBb(u.gkR()[u.e].c,u.as,v),B.az),new A.Ej(w,w,B.VY)),v),B.aq),B.f,v,v,new A.o(v,v,v,v,t,v,B.a7),v,190,v,v,v,v,v,190)},
$S:1965}
C.cEB.prototype={
$3(d,e,f){return A.da(A.dO(f,new A.q(0,14*(1-e))),e)},
$S:101}
C.cEC.prototype={
$3(d,e,f){return A.dO(f,new A.q(Math.sin(e*22)*8*(1-e),0))},
$S:114}
C.cED.prototype={
$0(){return this.a.bpA(this.b)},
$S:0}
C.f5H.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.amT$)
v.amT$=w
v.q6$.sp(0,w)
v.aqI(u)},
$S:7}
C.ffQ.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:11}
C.bS0.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bS_())},
$S:0}
C.bS_.prototype={
$0(){},
$S:0}
C.bRY.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bRW.prototype={
$0(){},
$S:0}
C.bRX.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gMI()
w=s+1>=r.length?3:5
break
case 3:q=C.bFV(p.gapy(0),0,r.length)
p.m(new C.bRT(p,q))
o=p
w=6
return A.b(C.BL(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.BM(s.d,s.c.a,"school",p.gapy(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bRU())
w=4
break
case 5:p.m(new C.bRV(p))
p.gqs().VQ(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bRT.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bRU.prototype={
$0(){},
$S:0}
C.bRV.prototype={
$0(){return this.a.x++},
$S:0}
C.bRZ.prototype={
$0(){return this.a.KY(this.b)},
$S:0}
C.bRS.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.f5I.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.q(t,s),q=v.b,p=v.d,o=p?C.hz2(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.E4
C.Sm(q,D.elH,0,0.2,-0.6,-0.2,null,w,D.eko,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a6(0,new A.q(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.S()
p=A.K()
p.r=D.G8.gp(0)
p.c=3
p.d=B.bA
q.ah(new A.q(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f5J.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.Sm(this.a,D.ekL,0,u,0.7,-0.5,null,null,D.Jq,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f5K.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.Sm(this.a,D.emt,0,0,0.8,-0.5,null,null,D.Jq,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f5L.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.Sm(w.b,D.elB,0,v,-0.8,-0.5,null,null,D.Jq,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f5M.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.q(34,-122+Math.sin(w*5)*5)
else v=v?D.elF:D.E4
C.Sm(p,D.el4,0,t,0,-0.6,null,v,D.Jq,3,0,s,1.3,u,0,w,0)
q=q.cbq(new A.q(222,455),9)
$.S()
w=A.K()
w.r=B.cN.gp(0)
p.ae(q,w)},
$S:0}
C.f5N.prototype={
$2(d,e){return B.k.aR(d.a,e.a)},
$S:513}
C.bRE.prototype={
$2(d,e){return d+e},
$S:60}
C.bRP.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bRQ.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bRR.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj0()[u.b]=s
t.gj0()[u.d]=t.y
w=t.as
v=t.q6$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bRL.prototype={
$1(d){return d},
$S:96}
C.bRK.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.q6$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bRM.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bRN.prototype={
$0(){},
$S:0}
C.bRO.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.FD(++s.f)
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
C.bRG.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.bRH.prototype={
$2(d,e){var w=this.a
w=w.gkR()[w.f].e
return B.o.aR(w[d],w[e])},
$S:60}
C.bRI.prototype={
$2(d,e){var w=null,v=C.haG(new A.av(A.aR(1/0,e.a,e.b),A.aR(1/0,e.c,e.d))),u=this.a
return A.aA(B.c5,new A.em(A.b4(w,w,w,new C.bjb(u,u.q6$),B.az),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bRF(u,v),w,w,w,w,!1,B.a4)},
$S:36}
C.bRF.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj0().length
u=B.o.F(B.k.bh((t.a-s.a)/r/450*v),0,v-1)
w.d0z(w.gj0()[u])}},
$S:23}
C.bRJ.prototype={
$1(d){var w=this.a
return w.gkR()[w.f].d[d]},
$S:77}
C.dqL.prototype={
$2(d,e){return 0},
$S:60}
C.bRq.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bRp())},
$S:0}
C.bRp.prototype={
$0(){},
$S:0}
C.bRo.prototype={
$0(){},
$S:0}
C.bRi.prototype={
$0(){},
$S:0}
C.bRj.prototype={
$0(){},
$S:0}
C.bRn.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.B0},
$S:0}
C.bRm.prototype={
$1(d){var w=null,v=this.a.gqs(),u=A.d(d,w,w,w,w,w,w,D.aUM,w,w,w),t=v.gbm1(0)
return A.aA(B.c5,A.x(A.a([u,B.bG,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aV0,w,w,w)],x.p),B.E,w,B.e,B.i,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbrX(v),w,w,w,w,w,w,!1,B.a4)},
$S:132}
C.bRk.prototype={
$0(){return this.a.KY(this.b)},
$S:0}
C.bRl.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bRh.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.e0A.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e0B.prototype={
$1(d){return this.a},
$S:39}
C.e0C.prototype={
$0(){var w=this.a
return w.d=w.gSP().ber(this.b)},
$S:0}
C.e0y.prototype={
$1(d){return new C.TM(this.a,null)},
$S:z+32}
C.e0z.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e0x.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hh,w,w,w)
return A.eg(A.a([A.bM(!1,E.aWm,w,w,!0,w,w,w,new C.e0v(d),w,w),A.bM(!1,D.fQ4,w,w,!0,w,w,w,new C.e0w(d),w,w)],x.p),w,w,D.fw,v,w,w,w,w,D.fCH,w)},
$S:18}
C.e0v.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e0w.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e0u.prototype={
$0(){var w=null,v=this.a.c.L(x.q).f,u=this.b
return v.U(A.b3(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.a_,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e0D.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:14}
C.e0E.prototype={
$0(){var w=this.a,v=this.b,u=C.bDH(v,10,w.r,!1)
return w.uu(C.hjt(w.a.d,"kahoot",u,w.gb62(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e0F.prototype={
$0(){var w=this.a
return w.uu(new C.alz(this.b,w.a.d,w.r,null))},
$S:0}
C.e0G.prototype={
$0(){var w=this.a
return w.uu(new C.ajN(this.b,w.a.d,w.r,null))},
$S:0}
C.e0J.prototype={
$0(){var w=this.a
return w.uu(new C.auu(this.b,w.a.d,w.r,null))},
$S:0}
C.e0K.prototype={
$0(){var w=this.a
return w.uu(new C.ays(this.b,w.a.d,w.r,null))},
$S:0}
C.e0L.prototype={
$0(){var w=this.a
return w.uu(new C.alC(this.b,w.a.d,w.r,null))},
$S:0}
C.e0M.prototype={
$0(){var w=this.a
return w.uu(new C.alG(this.b,w.a.d,w.r,null))},
$S:0}
C.e0N.prototype={
$0(){var w=this.a
return w.uu(new C.alI(this.b,w.a.d,w.r,null))},
$S:0}
C.e0O.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d0U()
return v.uu(C.hjt(v.a.d,"creator_"+u.a,w,v.gb62(),"A game by the family",t,this.c.a))},
$S:0}
C.e0P.prototype={
$0(){return this.a.OL(this.b)},
$S:0}
C.e0Q.prototype={
$0(){return this.a.XI(0,this.b)},
$S:0}
C.e0H.prototype={
$0(){return this.a.OL(null)},
$S:0}
C.e0I.prototype={
$0(){return this.a.L(x.q).f.U(D.fgo)},
$S:0}
C.bRC.prototype={
$0(){var w=this.a
w.d=D.b_I
w.z=3},
$S:0}
C.bRD.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aPu()}else w.m(new C.bRB(w))},
$S:11}
C.bRB.prototype={
$0(){return this.a.z--},
$S:0}
C.bRs.prototype={
$0(){var w=this.a
w.d=D.acl
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bRt.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bRr(w))
if(w.as<=0){d.a1(0)
w.b5Z(-1)}},
$S:11}
C.bRr.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bRy.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.WB},
$S:0}
C.bRz.prototype={
$0(){return this.a.e++},
$S:0}
C.bRv.prototype={
$0(){var w=this.a
w.d=D.b_J
w.ay=this.b},
$S:0}
C.bRw.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bRA.prototype={
$2(d,e){return B.o.aR(e.b,d.b)},
$S:1966}
C.bRx.prototype={
$0(){return this.a.KY(this.b)},
$S:0}
C.bRu.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bR2.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.aw()
s=A.a([new A.au(new A.ba(s,B.b5,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.J)(t),++v){u=t[v]
s.push(new A.au(new A.ba(u,B.b5,B.aP),r))}return s},
$S:1967}
C.bR3.prototype={
$0(){return this.a.gD_().c.push(C.h4t(null,0,20,""))},
$S:0}
C.bRd.prototype={
$1(d){var w=null
return A.bs(w,new A.b6(4,A.n(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dt,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.Vw,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:245}
C.bRc.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gD_().c,m=this.b,l=n[m],k=o.cet(l),j=B.c.j(0.06),i=A.n(18),h=A.L(B.aW,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.KE,p,p,p),B.b3],g)
if(n.length>1)f.push(A.aG(p,p,p,p,B.aqS,p,p,p,new C.bR7(o,m),p,p,p,p,p,p))
n=J.a7(k)
m=this.c
f=A.a([A.A(f,B.m,p,B.e,B.i,0,p,p),A.aM(p,B.Z,!1,p,!0,B.t,p,A.aN(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bR8(l),p,p,p,!1,p,p,!1,p,!0,p,B.ab,p,p,p,p,p,p,p,p,p,p,p,B.dh,!0,B.a5,p,B.ao,p,p,p,p),B.P],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aCM[v]
t=D.aCt[v]
s=v+1
f.push(new A.D(B.eK,new A.c6(B.aL,B.e,B.i,B.m,p,B.p,p,0,A.a([A.d(u,p,p,p,p,p,p,new A.G(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.ae,new A.by(1,B.bc,A.aM(p,B.Z,!1,p,!0,B.t,p,A.aN(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bR9(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ab,p,p,p,p,p,p,p,p,p,p,p,B.dh,!0,B.a5,p,B.ao,p,p,p,p),p),new Au.P9(v,l.c,new C.bRa(o,l),p,!1,D.lC,p,p,p,p,p,!1,!1,p,K.b07,p,p,p,p,p,w)],g),p),p))}f.push(D.fIc)
f.push(B.an)
n=A.a([D.fBM,B.ae],g)
for(r=0;r<3;++r){q=D.ccQ[r]
n.push(new A.D(B.fz,A.js(p,p,p,A.d(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bRb(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.m,p,B.e,B.i,0,p,p))
return A.p(p,A.x(f,B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.n),p,p,p,B.kS,B.bh,p,p,p)},
$S:157}
C.bR7.prototype={
$0(){var w=this.a
return w.m(new C.bR6(w,this.b))},
$S:0}
C.bR6.prototype={
$0(){return B.d.cA(this.a.gD_().c,this.b)},
$S:0}
C.bR8.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bR9.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bRa.prototype={
$1(d){return this.a.m(new C.bR5(this.b,d))},
$S:150}
C.bR5.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bRb.prototype={
$1(d){return this.a.m(new C.bR4(this.b,this.c))},
$S:9}
C.bR4.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2f.prototype={
$0(){var w=this.a
w.wq()
w.a.bv()
w.a.ql()},
$S:0}
C.e2e.prototype={
$0(){var w=this.a
w.wq()
w.a.bv()
w.a.ql()},
$S:0}
C.e2h.prototype={
$0(){var w=this,v=w.b
if(J.cI(v)||J.cq(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e2i.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2j.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e2d.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e2g.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e2l.prototype={
$0(){this.a.P6()
return null},
$S:0}
C.e2k.prototype={
$0(){return this.a.EY(this.b)},
$S:0}
C.e1G.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bM(!1,B.dl,w,w,!0,w,w,w,new C.e1E(d),w,w),r=A.bn(B.bQ,w,w,w,w,w,w,w,w,w,w,w)
return A.eg(A.a([s,A.bH(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e1F(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e1E.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e1F.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e1H.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cNn(this.b)},
$S:0}
C.e1B.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aV0(w.b,w.c,w.d)},
$S:7}
C.e12.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e13.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e1k.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Hc(t.a.c),$async$$0)
case 2:s=r.nv(q.dH(e,new C.e1i(t)))
if(s!=null&&t.c!=null)t.m(new C.e1j(t,s))
t.a.bv()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e1i.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e1j.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e1l.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e1m.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e1A.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cO9(C.hzc(w),w)},
$S:0}
C.e1h.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.W5(u,w,C.aQs(u,w),new C.e1g(v),null)},
$S:z+37}
C.e1g.prototype={
$1(d){return this.bnq(d)},
bnq(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.e1f(s,d))
w=3
return A.b(s.uq(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:760}
C.e1f.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.ber(this.b)},
$S:0}
C.e1x.prototype={
$1(d){return d.as},
$S:z+1}
C.e1y.prototype={
$1(d){var w=this
return new A.e_(new C.e1w(w.a,w.b,w.c,w.d,w.e),null)},
$S:21}
C.e1w.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.e8:B.c,h=A.n(26),g=A.L(B.bQ.j(0.5),B.r,1.5),f=A.p(k,D.bSX,B.f,k,k,new A.o(B.bQ.j(0.18),k,k,k,k,k,B.a7),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.av,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a2,k,k,k,A.l(k,k,j?B.bv:B.bo,k,k,k,k,k,k,k,k,12.5,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.i,0,B.p),1)
f=A.A(A.a([f,B.be,a0,A.aG(k,k,k,k,A.X(B.cz,j?B.bv:B.bo,k,k,k,k),k,k,k,new C.e1q(a1),k,k,k,k,k,k)],w),B.m,k,B.e,B.i,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bo,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.J)(v),++s){r=v[s]
q=t.a===r?B.bQ:B.bQ.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.ay(B.bQ,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bQ
a0.push(A.aA(k,A.cV(k,A.d(m,k,k,k,k,k,k,new A.G(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b6,new A.o(q,k,new A.bG(n,n,n,n),new A.bg(p,p,p,p),k,k,B.n),B.h8,k,k,k,k,B.Ca,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e1r(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bW(B.bH,a0,B.bt,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c3T,new A.D(D.bDd,f,k),new A.D(D.bD4,e,k),new A.D(B.rN,a0,k),new A.D(X.amb,A.d(v,k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bo,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(Ah.aoM,j?B.bv:B.bo,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bD6,A.A(A.a([a0,B.at,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.av,k,k,k,k,k,k,k,k,k,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.b8F(k,B.bQ,k,k,!1,B.y,k,k,k,k,k,k,new C.e1s(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.m,k,B.e,B.i,0,k,k),k))}f.push(B.aC)
j=A.n(20)
e=A.a([new A.ac(0,B.G,B.aE.j(0.35),B.j7,12)],x.V)
f.push(A.aA(k,A.p(k,A.A(A.a([D.fC7,B.be,D.bHy,D.bTD],w),B.m,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.c7C,B.n),k,k,k,B.hS,B.bE,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e1t(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.wi,A.A(A.a([A.E(A.dT(B.dl,new C.e1u(a1),k),1),B.at,A.E(A.bH(M.aWN,k,new C.e1v(t,a1),A.bn(B.bQ,k,k,k,k,k,B.cn,k,k,k,k,k)),1)],w),B.m,k,B.e,B.i,0,k,k),k))
return A.bm(!0,A.p(k,A.cg(A.x(f,B.E,k,B.e,B.O,0,B.p),B.t,k,B.y,k,k,k,k,B.ai),B.aq,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.C6,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:85}
C.e1q.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e1r.prototype={
$0(){return this.b.$1(new C.e1p(this.a,this.c))},
$S:0}
C.e1p.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e1s.prototype={
$1(d){var w=this.a
w.m(new C.e1n(w,d))
this.b.$1(new C.e1o())},
$S:9}
C.e1n.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e1o.prototype={
$0(){},
$S:0}
C.e1t.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(new A.aHd(!0,w))
return null},
$S:0}
C.e1u.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e1v.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(new A.aHd(!1,w))
return null},
$S:0}
C.e1z.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cNY(this.b.b)
w.r.a9(0)},
$S:0}
C.e0R.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.aiD(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hsy(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e0S.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aFz(w)},
$S:0}
C.e1J.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.adZ(this.b,w,this.c,null)},
$S:z+39}
C.e1D.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.e8:B.c,t=A.n(20),s=A.X(B.lN,B.aY,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.av,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bo,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.af,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bo,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.m,w,B.e,B.O,0,B.p)
return A.eg(A.a([A.bH(D.fTO,w,new C.e1C(d),A.bn(B.aY,w,w,w,w,w,w,w,w,w,w,w))],o),B.ba,w,u,v,w,s,w,new A.b9(t,B.a1),r,w)},
$S:18}
C.e1C.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e0T.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e0U.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e0V.prototype={
$1(d){return d.a},
$S:z+8}
C.e0W.prototype={
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
C.e1_.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.aiD(q)
w=A.T(q).k("Y<1>")
q=A.C(new A.Y(q,new C.e0Y(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hsy(v.e,null,r,v.f,v.r,new C.e0Z(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e0Z.prototype={
$0(){return this.a.aaT(this.b)},
$S:0}
C.e0Y.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e10.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("N<1,hS>")
w=A.C(new A.N(w,new C.e0X(this.b),v),v.k("ak.E"))
u.d=t.aFz(w)},
$S:0}
C.e0X.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e1I.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e1c.prototype={
$1(d){return d.length!==0},
$S:3}
C.e1d.prototype={
$1(d){var w=this
return new A.e_(new C.e1b(w.a,w.b,w.c,w.d),null)},
$S:21}
C.e1b.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.e8:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.av,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bo,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bo,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.N(o,new C.e17(u,e,o),A.T(o).k("N<1,v>")))
p.push(B.P)
u=w.d
p.push(A.aM(v,B.Z,!1,v,!0,B.t,v,A.aN(),u,v,v,v,v,v,2,A.bs(v,new A.b6(4,A.n(12),B.dn),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ak,v,v,v,v,v,B.mu,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ab,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.ao,v,v,v,v))
p=A.x(p,B.al,v,B.e,B.O,0,B.p)
t=w.a
return A.eg(A.a([A.bM(!1,B.dl,v,v,!0,v,v,v,new C.e18(d),v,v),A.bH(B.KP,v,new C.e19(t,u,o,e),A.bn(B.bQ,v,v,v,v,v,v,v,v,v,v,v)),A.bH(D.fGA,v,new C.e1a(t,u,o,d),A.bn(B.aY,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:197}
C.e17.prototype={
$1(d){var w=null
return A.dF(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aQ:B.av,w,w,w,w,w,w,w,w,w,w,w,B.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aG(w,w,w,w,D.c0I,w,w,w,new C.e16(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1968}
C.e16.prototype={
$0(){return this.a.$1(new C.e14(this.b,this.c))},
$S:0}
C.e14.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.e18.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e19.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e15(w.c,u))
v.bP(0,B.cd)}},
$S:0}
C.e15.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e1a.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).O(!0)},
$S:0}
C.e1e.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cOC(this.b,D.ux,C.Ha(v,w.a.c))},
$S:0}
C.e1Q.prototype={
$1(d){return d.as},
$S:z+1}
C.e1R.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iX(this.b,w)},
$S:0}
C.e1S.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.ioH(v)
return w.Ww(v==null?null:v.a)},
$S:0}
C.e1T.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.i0q(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aR(1/0,e.a,e.b)
s=A.aR(1/0,e.c,e.d)
l.cvQ(new A.av(u,t),v.gbl6(),new A.av(k,s))}k=A.n(22)
s=this.b.a
r=s?D.d0q:D.cZD
q=A.L(s?B.dt:D.bj1,B.r,1)
p=A.n(22)
o=A.bR(0,A.b4(m,m,m,new C.bfi(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bx(p,new A.an(B.a0,m,B.ac,B.t,A.a([o,A.bR(0,A.uS(new A.Q(n,n,n,n),new A.a5(u,t,new C.bgd(l.d,v,l.f,w,new C.e1M(l),l.gcfF(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ap(10,new C.by_(s,new C.e1N(l,e),new C.e1O(l,e),new C.e1P(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a9(B.b1,B.b7,B.x,r,m,m),B.n),m,m,m,A_.ali,m,m,m,m)},
$S:214}
C.e1M.prototype={
$1(d){var w=this.a
w.m(new C.e1K(w,d))},
$S:2}
C.e1K.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.I(0,v)},
$S:0}
C.e1N.prototype={
$0(){var w=this.b
return this.a.bcB(1.25,new A.av(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.e1O.prototype={
$0(){var w=this.b
return this.a.bcB(0.8,new A.av(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.e1P.prototype={
$0(){var w=this,v=w.b
return w.a.aV0(new A.av(A.aR(1/0,v.a,v.b),A.aR(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gbl6())},
$S:0}
C.e1U.prototype={
$0(){var w=this.a
return w.m(new C.e1L(w))},
$S:0}
C.e1L.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e11.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fG(new A.fA(s.c)),$async$$0)
case 2:t.yq("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dgd.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ap(w,new C.bk2(u,C.hDw(v.c,u),new C.dgc(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dgc.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dge.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ap(w,new C.bnl(d.d,d.c,u.f.q(0,d.a),new C.dgb(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dgb.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fFv.prototype={
$1(d){var w,v=d.e
if(this.a.an(0,v))return v
v=this.b
w=A.T(v)
return A.nv(new A.cM(new A.Y(v,new C.fFw(d),w.k("Y<1>")),new C.fFx(),w.k("cM<1,m>")))},
$S:z+19}
C.fFw.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fFx.prototype={
$1(d){return d.a},
$S:z+8}
C.fFt.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fFu.prototype={
$1(d){return d.b},
$S:z+8}
C.fFA.prototype={
$1(d){var w,v=d.e
if(this.a.an(0,v))return v
v=this.b
w=A.T(v)
return A.nv(new A.cM(new A.Y(v,new C.fFB(d),w.k("Y<1>")),new C.fFC(),w.k("cM<1,m>")))},
$S:z+19}
C.fFB.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fFC.prototype={
$1(d){return d.a},
$S:z+8}
C.fFy.prototype={
$1(d){var w,v=A.ey([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.an(0,w)&&v.I(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fFz.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dgg.prototype={
$0(){return this.a},
$S:z+46}
C.dgx.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.an(0,d)},
$S:267}
C.dgp.prototype={
$2(d,e){var w=this.a.c3(0,d,new C.dgq()),v=J.a7(w)
if(!v.q(w,e))v.I(w,e)},
$S:118}
C.dgq.prototype={
$0(){return A.a([],x.s)},
$S:739}
C.dgo.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f1(w,e)
return w===!0},
$S:341}
C.dgh.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dgn.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dgm.prototype={
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
C.dgi.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dgr.prototype={
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
if(r.a!==a9&&!B.d.aW(w,new C.dgs(r)))w.push(r)}}B.d.bt(w,new C.dgt(a8))
B.d.aZ(w,new C.dgu())
q=C.i0p(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.J)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eSx],x.G))}a8=A.a([],x.s)
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
C.dgs.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dgt.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dgu.prototype={
$2(d,e){return B.o.aR(d.Q,e.Q)},
$S:z+7}
C.dgv.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a7(n),v=o.c,u=-1/0,t=0;t<w.gJ(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b8(v,A.a4(v).k("b8<2>")).cH(0,0,B.pX)+88-w.gH(n).a}else u=0
for(w=J.a7(n),v=o.c,t=0;t<w.gJ(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:745}
C.dgw.prototype={
$1(d){return 16+d*156},
$S:173}
C.dgf.prototype={
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
$S:178}
C.dgj.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aKk(new A.q(v.a,v.b+28),new A.q(w.a,w.b+28),!0,null))},
$S:118}
C.dgk.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dgl.prototype={
$2(d,e){return B.k.aR(d.a,e.a)},
$S:723}
C.dgy.prototype={
$2(d,e){return B.k.aR(d.a,e.a)},
$S:723}
C.dgz.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:384}
C.dgA.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:201}
C.dgB.prototype={
$1(d){return d>=0.5},
$S:119}
C.flq.prototype={
$3(d,e,f){var w=null,v=A.n(10)
return A.hb(A.aO(!1,v,!0,new A.a5(38,38,A.X(d,this.a.c?B.c:B.cs,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1973}
C.eWA.prototype={
$1(d){var w=null,v=A.n(8),u=B.bQ.j(0.12),t=A.n(8)
return new A.D(B.nx,A.aO(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.frS,B.K,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.Od,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eWz(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eWz.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dwq.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dwp.prototype={
$1(d){var w=null,v=A.n(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nR,B.K,w,w)
return A.eg(A.a([A.bM(!1,B.dl,w,w,!0,w,w,w,new C.dwn(d),w,w),A.bM(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.mG,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dwo(d),w,w)],x.p),B.ba,B.C7,w,u,D.bE7,w,D.bG4,new A.b9(v,B.a1),w,w)},
$S:18}
C.dwn.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dwo.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dwz.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dwA.prototype={
$1(d){var w=this.a
return w.m(new C.dwy(w,d))},
$S:z+49}
C.dwy.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dwB.prototype={
$1(d){var w=null
return A.qE(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dwE.prototype={
$1(d){var w=this.a
return w.m(new C.dwx(w,d))},
$S:35}
C.dwx.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dwD.prototype={
$1(d){var w=null
return A.qE(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dwF.prototype={
$1(d){var w=this.a
return w.m(new C.dww(w,d))},
$S:35}
C.dww.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dwG.prototype={
$0(){var w=this.a
return w.m(new C.dwv(w))},
$S:0}
C.dwv.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dwH.prototype={
$0(){var w=this.a
return w.m(new C.dwu(w))},
$S:0}
C.dwu.prototype={
$0(){return++this.a.at},
$S:0}
C.dwI.prototype={
$0(){var w=this.a
return w.m(new C.dwt(w))},
$S:0}
C.dwt.prototype={
$0(){return--this.a.ax},
$S:0}
C.dwJ.prototype={
$0(){var w=this.a
return w.m(new C.dws(w))},
$S:0}
C.dws.prototype={
$0(){return++this.a.ax},
$S:0}
C.dwK.prototype={
$1(d){var w=this.a
return w.m(new C.dwr(w,d))},
$S:9}
C.dwr.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dwC.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dwL.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.n(12)
if(p)w=B.bQ.j(0.18)
else w=q.c.a?B.e8:B.c
v=A.n(12)
if(p)u=B.bQ
else u=(q.c.a?B.ee:B.bP).j(0.85)
u=A.L(u,B.r,p?1.5:1)
if(p)t=B.bQ
else t=q.c.a?B.bv:B.bo
t=A.X(f,t,r,r,r,18)
if(p)s=B.bQ
else s=q.c.a?B.bv:B.bo
return A.E(A.aI(!1,B.a3,!0,r,A.aO(!1,o,!0,A.cV(r,A.x(A.a([t,B.aw,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.i,0,B.p),r,r,B.b6,new A.o(w,r,u,v,r,r,B.n),B.eJ,r,r,r,r,B.k_,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dwM(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
$S:z+51}
C.dwM.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dwV.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cem.prototype={
$2(d,e){return new A.bA(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:95}
C.cet.prototype={
$1(d){return d.ak()},
$S:z+5}
C.ceu.prototype={
$2(d,e){var w=J.b7(e,new C.ces(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bA(d,w,x.d2)},
$S:z+53}
C.ces.prototype={
$1(d){return d.ak()},
$S:z+12}
C.ceo.prototype={
$1(d){return C.alL(A.a3(d,x.N,x.z))},
$S:z+9}
C.cep.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.ceq.prototype={
$1(d){return C.hjs(A.a3(d,x.N,x.z))},
$S:z+11}
C.cer.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cey.prototype={
$1(d){return new A.aHp(d.f.length,d.a,d.b)},
$S:z+55}
C.cez.prototype={
$2(d,e){return B.a.aR(d.c,e.c)},
$S:573}
C.cev.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cew.prototype={
$1(d){return d.cNA(C.Ha(d,this.a))},
$S:z+85}
C.e22.prototype={
$1(d){return C.uq(d,this.a.a.c)},
$S:z+3}
C.e23.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e27.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e28.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e2_.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0P(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z_("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pq(r.c,r.e),$async$$0)
case 4:s.z_(p)
w=5
return A.b(s.K1(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e20.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0P(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z_("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pq(r.c,r.e),$async$$0)
case 4:s.z_(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e21.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.W8(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.z_("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.z_("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.z_("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.K1(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.z_(B.a.el(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e26.prototype={
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
break}if(p==null){s.z_("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).cd(A.eb(new C.e25(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pq(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e25.prototype={
$1(d){var w=this.b
return new C.a0g(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e24.prototype={
$1(d){return D.hvB},
$S:z+58}
C.e2a.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e2b.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e29(w,d)
return new A.D(B.d3,new C.bgh(this.b,d.c,d.a,w,null),null)},
$S:1974}
C.e29.prototype={
$0(){return this.a.Yl(this.b.b)},
$S:0}
C.e1V.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e1W.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e1X.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e1Y.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e1Z.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e2c.prototype={
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
$S:183}
C.dOv.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dOw.prototype={
$0(){return B.d.gH(D.a5W)},
$S:z+60}
C.dOx.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b4(A.at(A.X(this.b.d,B.c.j(0.95),w,w,D.d7b,44),w,w,w),w,w,new C.bl9(u,t,v,w),B.az)},
$S:62}
C.fWf.prototype={
$1(d){return A.pa(new C.fWe(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:140}
C.fWe.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.e8:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.tg,24)],x.V),o=r?B.ee:B.bP
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.n(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aY.j(0.25),B.bQ.j(0.18)],x.O)
w=A.p(t,D.bW0,B.f,t,t,new A.o(t,t,t,A.n(12),t,new A.a9(B.a6,B.a9,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aQ:B.av,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.X,o,new A.D(E.amg,A.A(A.a([w,B.be,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bv:B.bo,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.i,0,B.p),1)],u),B.m,t,B.e,B.i,0,t,t),t),A.E(A.il(!0,t,e,B.y,D.fet,new C.fWd(this.b,s),20,B.alP,t,B.ai,!1),1)],u),B.m,t,B.e,B.i,0,B.p),B.f,t,t,new A.o(q,t,t,B.l5,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:117}
C.fWd.prototype={
$2(d,e){var w=null,v=D.a5W[e],u=A.n(16),t=A.n(16),s=this.b.a,r=A.L(s?B.ee:B.bP,B.r,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.er,8)],x.V),p=A.n(15),o=A.E(new C.a71(v.a,!0,w),1),n=s?B.jT:B.jj,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aQ:B.av,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aI(!1,B.a3,!0,w,A.aO(!1,u,!0,A.eI(A.bx(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bv:B.bo,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.i,0,B.p),B.f,n,w,w,w,w,w,w,B.k0,w,w,w)],l),B.al,w,B.e,B.i,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fWc(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)},
$S:79}
C.fWc.prototype={
$0(){A.a6(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cnR.prototype={
$0(){return this.a.ah6(this.b)},
$S:0}
C.fVD.prototype={
$1(d){return D.hqq},
$S:z+61}
C.h27.prototype={
$1(d){var w=this
return new C.a23(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.fVH.prototype={
$1(d){return new C.ZV(this.a,null)},
$S:z+63}
C.fVG.prototype={
$1(d){return D.hrr},
$S:z+64}
C.d7R.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d7S.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d7Q(w,d))},
$S:35}
C.d7Q.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d7T.prototype={
$1(d){return this.a.KF()},
$S:2}
C.d7U.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d7N.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d7O.prototype={
$1(d){return this.a.KF()},
$S:2}
C.d7P.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cGd.prototype={
$0(){},
$S:0}
C.cGj.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cGk.prototype={
$0(){return this.a.aQm(-1)},
$S:0}
C.cGl.prototype={
$1(d){return this.a.m(new C.cGi())},
$S:2}
C.cGi.prototype={
$0(){},
$S:0}
C.cGm.prototype={
$0(){return this.a.aQm(1)},
$S:0}
C.cGn.prototype={
$1(d){return this.a.m(new C.cGh())},
$S:2}
C.cGh.prototype={
$0(){},
$S:0}
C.cGo.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aY.j(0.2)
if(s)v=B.aY
else v=this.b.a?B.ee:B.bP
return A.uL(u,u,B.b2,r,u,new C.cGg(t,d),B.wl,s,w,u,new A.ay(v,1,B.r,-1),B.ce)},
$S:1975}
C.cGg.prototype={
$1(d){var w=this.a
return w.m(new C.cGe(w,this.b))},
$S:9}
C.cGe.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cGp.prototype={
$1(d){return this.a.m(new C.cGf())},
$S:2}
C.cGf.prototype={
$0(){},
$S:0}
C.cGq.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fkW.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).O(w)},
$S:2}
C.fkX.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fkY.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).O(w)},
$S:0}
C.fkU.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbCn()
w=w.e
s=A.n(B.o.F(v-1,0,v))
return A.b4(new A.D(D.bG3,new A.em(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bxP(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:62}
C.fkV.prototype={
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
return A.aI(!1,B.a3,!0,p,A.aO(!1,v,!0,A.eI(D.eqk,r,new A.o(r,r,A.L(B.c.j(0.4),B.r,1.5),u,r,new A.a9(new A.d9(-1.2+t,-0.5),new A.d9(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
$S:143}
C.fU2.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:59}
C.eTK.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eTB.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eTC.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eTI.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e_(new C.eTH(w,this.b),null)},
$S:21}
C.eTH.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.e8:B.c,t=A.n(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.av,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eR(w,u,new A.D(B.am8,A.x(A.a([s,B.an,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bo,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hps(new C.eTE(r,e),r.a),B.aC,A.A(A.a([A.E(A.dT(B.dl,new C.eTF(d),w),1),B.at,A.E(A.bH(B.VR,w,new C.eTG(r,d),A.bn(B.aY,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.i,0,w,w)],q),B.al,w,B.e,B.O,0,B.p),w),w,w,w,w,B.da,w,new A.b9(t,B.a1),w)},
$S:102}
C.eTE.prototype={
$1(d){return this.b.$1(new C.eTD(this.a,d))},
$S:35}
C.eTD.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eTF.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eTG.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.eTJ.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Tt(this.b)},
$S:0}
C.eTw.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bex(w)},
$S:0}
C.eTA.prototype={
$1(d){return this.bnN(d)},
bnN(d){var w=0,v=A.j(x.H),u,t=this,s
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
C.eTz.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("Y<1>")
w=A.C(new A.Y(w,new C.eTy(this.b),v),v.k("M.E"))
u.d=t.bex(w)},
$S:0}
C.eTy.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eTL.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iX(this.b,w)},
$S:0}
C.eTM.prototype={
$1(d){return this.a.bGx(d,this.b)},
$S:z+67}
C.eTx.prototype={
$0(){return this.a.aaS(this.b)},
$S:0}
C.h1Y.prototype={
$1(d){return new C.aej(this.a,this.b,this.c,null)},
$S:z+68}
C.eTO.prototype={
$0(){return this.a.a07(this.b)},
$S:0}
C.eTP.prototype={
$0(){return this.a.QH(this.b)},
$S:0}
C.eTQ.prototype={
$0(){return this.a.ET(this.b)},
$S:0}
C.eTR.prototype={
$0(){return this.a.a08(this.b)},
$S:0}
C.eTN.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eTr.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eTs.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eTt.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eTv.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qr(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eTu(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eTu.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eUd.prototype={
$2(d,e){return d+e.gxC()},
$S:z+71}
C.eU9.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eUa.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eTV.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.e8:B.c,s=A.n(24),r=A.p(v,D.bWt,B.f,v,v,new A.o(B.ax.j(u?0.18:0.08),v,A.L(B.ax.j(0.28),B.r,1),v,v,v,B.a7),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.av,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bv:B.bo,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aQ:B.av
u=u?B.ee:B.bP
w=x.p
return A.eR(v,t,new A.D(B.yJ,A.x(A.a([r,B.aR,q,B.P,p,B.d6,A.A(A.a([A.E(A.dT(B.nU,new C.eTT(d),A.di(v,v,v,v,v,v,v,v,v,o,v,v,B.fl,v,new A.b9(A.n(14),B.a1),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.at,A.E(A.bH(D.fXG,v,new C.eTU(d),A.bn(B.ax,v,v,v,v,v,B.fl,v,new A.b9(A.n(14),B.a1),v,v,v)),1)],w),B.m,v,B.e,B.i,0,v,v)],w),B.m,v,B.e,B.O,0,B.p),v),v,v,v,v,B.da,v,new A.b9(s,B.a1),v)},
$S:49}
C.eTT.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eTU.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eU3.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.e8:B.c,i=A.n(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.h2,28)],x.V),g=k?D.deh:B.a5g,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.n(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aC,D.f7z,B.aw,new A.bL(B.a6,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cC,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.i,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a9(B.aA,B.aF,B.x,g,m,m),B.n),m,m,m,m,E.amd,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bo,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b7r(B.b8,B.jn,new C.eU0(v,d),l,"Camera import","Scan QR"),1),B.at,A.E(v.b7r(B.cy,R.zl,new C.eU1(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.i,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bo,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.n(16)
r=B.ax.j(k?0.14:0.06)
q=A.n(16)
p=A.L(B.ax.j(0.28),B.r,1)
o=A.p(m,D.bVP,B.f,m,m,new A.o(B.ax.j(0.12),m,m,A.n(12),m,m,B.n),m,m,m,m,B.bU,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aQ:B.av,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bo,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.i,0,B.p),1)
return A.bm(!0,new A.D(B.wf,A.p(m,A.x(A.a([g,new A.D(B.am9,A.x(A.a([w,B.X,u,B.by,t,B.X,A.aI(!1,B.a3,!0,m,A.aO(!1,s,!0,A.p(m,A.A(A.a([o,B.be,n,A.X(B.eG,k?B.bv:B.bo,m,m,m,m)],f),B.m,m,B.e,B.i,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bE,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eU2(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)],f),B.E,m,B.e,B.i,0,B.p),m)],f),B.m,m,B.e,B.O,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:27}
C.eU0.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.w1("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eU1.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.w1("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eU2.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.On(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eTZ.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.e8:B.c,m=A.n(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eY,24)],x.V),k=o?B.ee:B.bP
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.n(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.n(12)
v=this.c
u=o?B.bv:B.bo
u=A.bx(w,new A.a5(48,48,C.aRK(!0,A.n(12),48,P.OS,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aQ:B.av,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Bg(v.gxC())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.wf,A.p(q,A.x(A.a([B.X,k,new A.D(D.am6,A.A(A.a([u,B.be,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bv:B.bo,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.i,0,B.p),1)],s),B.m,q,B.e,B.i,0,q,q),q),B.BY,r.cpV(B.uS,B.aY,new C.eTX(d),p,"QR code or backup file","Transfer project"),r.b4s(!0,B.ef,B.ax,new C.eTY(d),p,"Remove from this device","Delete project"),B.X],s),B.m,q,B.e,B.O,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:27}
C.eTX.prototype={
$0(){A.a6(this.a,!1).O("transfer")
return null},
$S:0}
C.eTY.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
C.eU_.prototype={
$1(d){return this.bnO(d)},
bnO(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.LX(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wf(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eUg.prototype={
$0(){var w=this.a
w.a.bv()
w.m(new C.eUf(w))},
$S:0}
C.eUf.prototype={
$0(){return this.a.r++},
$S:0}
C.eUh.prototype={
$0(){var w=this.a
return w.m(new C.eUe(w))},
$S:0}
C.eUe.prototype={
$0(){return this.a.r++},
$S:0}
C.eTS.prototype={
$0(){var w=this.a.c
w.toString
return A.iX(w,null)},
$S:0}
C.eTW.prototype={
$0(){return this.a.cjb(this.b)},
$S:0}
C.eUc.prototype={
$0(){var w=this.a
return w.m(new C.eUb(w,this.b))},
$S:0}
C.eUb.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eU6.prototype={
$0(){return this.a.w1("scan")},
$S:0}
C.eU7.prototype={
$0(){return this.a.w1("file")},
$S:0}
C.eU8.prototype={
$1(d){return this.a.cpW(d,this.b)},
$S:z+72}
C.eU5.prototype={
$0(){return this.a.EX(this.b)},
$S:0}
C.eU4.prototype={
$0(){return this.a.a0D(this.b,this.c)},
$S:0}
C.cFy.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cFx.prototype={
$1(d){return d.ak()},
$S:z+74}
C.cFv.prototype={
$1(d){return C.hJB(A.a3(d,x.N,x.z))},
$S:z+75}
C.cFw.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fEp.prototype={
$1(d){return d.y===D.kV},
$S:z+3}
C.h2H.prototype={
$1(d){return C.aQs(d,this.a)},
$S:z+3}
C.fC2.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bS7.prototype={
$1(d){return!d.as},
$S:z+1}
C.bS6.prototype={
$1(d){return d.ak()},
$S:z+23}
C.bS3.prototype={
$1(d){return C.hju(A.a3(d,x.N,x.z))},
$S:z+24}
C.bS4.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bS5.prototype={
$1(d){return J.k(d)},
$S:17}
C.fsx.prototype={
$2(d,e){return e.e.aR(0,d.e)},
$S:z+25}
C.foj.prototype={
$1(d){return C.h9h(A.a3(d,x.N,x.z))},
$S:z+79}
C.fok.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fol.prototype={
$2(d,e){return e.e.aR(0,d.e)},
$S:z+25}
C.fVt.prototype={
$1(d){return J.k(d)},
$S:17}
C.fVu.prototype={
$1(d){return d.a},
$S:z+81}
C.fVv.prototype={
$1(d){return d.length!==0},
$S:3}
C.fVw.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.fVx.prototype={
$1(d){return d.Tt(null).ak()},
$S:z+82}
C.h2F.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fET.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fI1.prototype={
$1(d){return C.alL(A.a3(d,x.N,x.z))},
$S:z+9}
C.fI2.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fI3.prototype={
$2(d,e){return e.r.aR(0,d.r)},
$S:z+6}
C.fI4.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fI5.prototype={
$1(d){return C.uq(d,this.a)},
$S:z+3}
C.fVg.prototype={
$1(d){return C.uq(d,this.a)},
$S:z+3}
C.h2A.prototype={
$1(d){return C.alL(A.a3(d,x.N,x.z))},
$S:z+9}
C.h2B.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.h2C.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fEA.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fEB.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.h2L.prototype={
$1(d){return!d.as},
$S:z+1}
C.fE4.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fE5.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fE6.prototype={
$2(d,e){return B.o.aR(d.Q,e.Q)},
$S:z+7}
C.h28.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fIR.prototype={
$1(d){return d.Q},
$S:z+15}
C.fV9.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fHZ.prototype={
$1(d){return C.alL(A.a3(d,x.N,x.z))},
$S:z+9}
C.fI_.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fI0.prototype={
$2(d,e){return e.r.aR(0,d.r)},
$S:z+6}
C.fV4.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.foS.prototype={
$1(d){return d.length!==0},
$S:3}
C.foT.prototype={
$1(d){return C.hju(A.a3(d,x.N,x.z))},
$S:z+24}
C.foU.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.foV.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.foW.prototype={
$1(d){return d.length!==0},
$S:3}
C.fp8.prototype={
$2(d,e){return d.eM(new C.fp9(e))},
$S:1976}
C.fp9.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.cc},
$S:1977}
C.fp5.prototype={
$1(d){return C.i5c(d,this.a)},
$S:z+84}
C.fp6.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fp7.prototype={
$2(d,e){return e.r.aR(0,d.r)},
$S:z+6}
C.fte.prototype={
$1(d){return d.a},
$S:z+56}
C.ftf.prototype={
$1(d){return d.length!==0},
$S:3}
C.ftg.prototype={
$2(d,e){return e.r.aR(0,d.r)},
$S:z+6}
C.fw7.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fBi.prototype={
$1(d){return C.huW(d,C.Ha(d,this.a))},
$S:z+5}
C.fBj.prototype={
$1(d){return C.huX(d,C.Ha(d,this.a))},
$S:z+5};(function aliases(){var w=C.aBd.prototype
w.bvD=w.t
w=C.azr.prototype
w.bvy=w.t
w=C.aGD.prototype
w.bw0=w.t
w=C.aBe.prototype
w.bvE=w.t
w=C.aBg.prototype
w.bvF=w.t
w=C.aBh.prototype
w.bvG=w.t
w=C.aMM.prototype
w.byu=w.t
w=C.aOS.prototype
w.bAN=w.t
w=C.aOT.prototype
w.bAO=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aEd.prototype,"gcmQ","cmR",28)
var r
w(r=C.aBc.prototype,"gcfL","cfM",65)
v(r,"gaOy","NV",0)
v(r,"gcvb","Bj",0)
v(r,"gbOh","OB",0)
v(r,"gcJz","z0",0)
v(r,"gcoT","a1k",0)
v(r,"gbJH","Oj",0)
v(r,"gbOH","XN",0)
w(r,"gbTK","bTL",78)
v(r,"gbE2","Ak",0)
v(C.aBf.prototype,"gcJv","FP",0)
v(r=C.alA.prototype,"gbrZ","bs_",2)
v(r,"gbrR","brS",2)
v(r,"gcKE","cKF",2)
u(r,"gqk","kM",0)
u(r=C.ajO.prototype,"geY","fX",2)
w(r,"gcbn","cbo",27)
u(C.auv.prototype,"gqk","kM",0)
v(r=C.ayt.prototype,"gcWd","cWe",2)
u(r,"gqk","kM",0)
u(C.aKp.prototype,"gbrX","brY",2)
v(C.alJ.prototype,"gBN","cKR",2)
u(r=C.alH.prototype,"gcLx","cLy",2)
u(r,"gqk","kM",0)
v(r=C.alD.prototype,"gbqP","bqQ",2)
v(r,"gcQK","cQL",2)
u(r=C.alF.prototype,"geY","fX",2)
u(r,"giv","cKa",2)
v(r=C.alB.prototype,"gcK_","cK0",2)
u(r,"gbpH","jG",2)
v(r=C.aEM.prototype,"gagJ","wg",0)
v(r,"gcir","a0u",0)
v(r,"gaSJ","Io",0)
v(r=C.aEJ.prototype,"gcFt","a3s",0)
v(r,"gagJ","wg",0)
v(r,"gctb","a1Z",0)
v(r,"gcim","b2H",2)
v(r,"gcjo","a0I",0)
w(r,"gcfF","cfG",35)
v(r,"gbOz","It",0)
v(r,"gcGy","cGz",2)
v(r,"gc5z","Zu",0)
w(r,"gce9","cea",36)
v(r,"gcia","cib",2)
v(r=C.aDc.prototype,"gcbt","Qe",0)
v(r,"gcbv","cbw",2)
v(r,"gbLb","aau",0)
v(r=C.aEL.prototype,"gbSa","Yh",0)
v(r,"gc1H","YX",0)
v(r,"gczB","a2Q",0)
v(r,"gcvL","a2r",0)
v(C.aEK.prototype,"gcvu","aix",0)
v(C.atH.prototype,"gce7","a05",0)
v(C.azX.prototype,"ga3b","KF",2)
v(C.azW.prototype,"ga3b","KF",2)
v(C.ayG.prototype,"ga3b","KF",2)
v(r=C.aGe.prototype,"gb3R","Rd",0)
v(r,"gbCR","Wq",0)
v(r,"gcjc","cjd",2)
w(C.aGd.prototype,"gcf_","cf0",69)
t(C.aGf.prototype,"gaSE",0,0,null,["$1","$0"],["In","bMt"],70,0,0)
s(C,"hCA","ifa",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aF,[C.api,C.uI,C.nr,C.Ii,C.afu,C.KE,C.uJ,C.bSD,C.ta,C.boD,C.alS,C.adC,C.lp,C.bRe,C.atT,C.zu,C.aku,C.MC,C.ba6,C.a9H,C.bhm,C.afB,C.azG,C.afp,C.aKp,C.KL,C.Gs,C.bgf,C.aKk,C.aqC,C.dgC,C.lS,C.aUK,C.aUJ,C.aSK,C.uc,C.rk,C.lA,C.hS,C.kR,C.aIi])
u(A.hu,[C.fME,C.fMD,C.fMF,C.fW8,C.fA1,C.fA2,C.fA7,C.fKn,C.fKm,C.fKl,C.c7m,C.fWF,C.fWx,C.fWJ,C.fEI,C.dPb,C.dP6,C.dP7,C.dOK,C.dOG,C.dPq,C.dPr,C.dPk,C.dPl,C.dPs,C.dPt,C.fFr,C.fHW,C.fHX,C.fVe,C.h2z,C.fEz,C.fVN,C.dfP,C.dfb,C.dfk,C.dfB,C.dfg,C.dfm,C.dfd,C.dfq,C.dfr,C.dfp,C.dfG,C.dfF,C.dhB,C.dhC,C.dhD,C.dg2,C.dg7,C.dg6,C.cOw,C.cOy,C.d74,C.d7t,C.d7u,C.d7x,C.d7z,C.d7A,C.d7B,C.d7D,C.d7E,C.bQZ,C.bQT,C.fsW,C.h2s,C.h2t,C.h2u,C.h2p,C.h2v,C.h2w,C.h2x,C.h2o,C.fG2,C.fUf,C.fC3,C.fIQ,C.bM2,C.h2R,C.fUL,C.bKe,C.bK9,C.bKb,C.bKa,C.cpx,C.cps,C.cpt,C.cpr,C.cpp,C.cpu,C.cPA,C.cEx,C.cEA,C.cEy,C.cEB,C.cEC,C.f5H,C.ffQ,C.bRL,C.bRF,C.bRJ,C.bRm,C.e0B,C.e0y,C.e0z,C.e0x,C.e0D,C.bRD,C.bRt,C.bRd,C.bRc,C.bR8,C.bR9,C.bRa,C.bRb,C.e2g,C.e1G,C.e1B,C.e12,C.e1i,C.e1l,C.e1h,C.e1g,C.e1x,C.e1y,C.e1s,C.e0R,C.e1J,C.e1D,C.e0T,C.e0U,C.e0V,C.e1_,C.e0Y,C.e0X,C.e1c,C.e1d,C.e17,C.e1Q,C.e1M,C.dgd,C.dge,C.fFv,C.fFw,C.fFx,C.fFt,C.fFu,C.fFA,C.fFB,C.fFC,C.fFy,C.fFz,C.dgx,C.dgn,C.dgi,C.dgs,C.dgt,C.dgw,C.dgk,C.dgz,C.dgA,C.dgB,C.flq,C.eWA,C.dwp,C.dwz,C.dwA,C.dwB,C.dwE,C.dwD,C.dwF,C.dwK,C.dwL,C.cet,C.ces,C.ceo,C.cep,C.ceq,C.cer,C.cey,C.cev,C.cew,C.e22,C.e25,C.e24,C.e2b,C.e2c,C.dOv,C.fWf,C.fVD,C.h27,C.fVH,C.fVG,C.d7S,C.d7T,C.d7O,C.cGl,C.cGn,C.cGo,C.cGg,C.cGp,C.fkW,C.fU2,C.eTI,C.eTE,C.eTA,C.eTy,C.eTM,C.h1Y,C.eTV,C.eU3,C.eTZ,C.eU_,C.eU8,C.cFx,C.cFv,C.cFw,C.fEp,C.h2H,C.fC2,C.bS7,C.bS6,C.bS3,C.bS4,C.bS5,C.foj,C.fok,C.fVt,C.fVu,C.fVv,C.fVw,C.fVx,C.h2F,C.fET,C.fI1,C.fI2,C.fI4,C.fI5,C.fVg,C.h2A,C.h2B,C.h2C,C.fEA,C.fEB,C.h2L,C.fE4,C.fE5,C.h28,C.fIR,C.fV9,C.fHZ,C.fI_,C.fV4,C.foS,C.foT,C.foU,C.foV,C.foW,C.fp9,C.fp5,C.fp6,C.fte,C.ftf,C.fw7,C.fBi,C.fBj])
u(A.ax,[C.b_k,C.aly,C.aW4,C.ZA,C.bbS,C.Qv,C.a6e,C.tA,C.Ik,C.bgd,C.bk2,C.by_,C.bnl,C.adY,C.bk1,C.adX,C.bk0,C.aDd,C.aJm,C.adZ,C.Go,C.bge,C.add,C.bgc,C.bgh,C.b_i,C.atH,C.aej])
u(A.mg,[C.bcv,C.bdJ,C.bdA,C.aId,C.bj3,C.boC,C.aW9,C.bcx,C.aBb,C.bc0,C.bsE,C.bjb,C.biC,C.biJ,C.bgg,C.bfi,C.bl9,C.bxP])
u(A.iG,[C.fWC,C.fWD,C.fWE,C.fWv,C.fWw,C.fWH,C.fWI,C.dPn,C.dP9,C.dPc,C.dOR,C.dOS,C.dOT,C.dOQ,C.dOY,C.dOP,C.dOZ,C.dP_,C.dOO,C.dP0,C.dON,C.dP1,C.dOM,C.dP2,C.dOE,C.dOF,C.dOL,C.dP3,C.dOJ,C.dP4,C.dOI,C.dOU,C.dOH,C.dOV,C.dOD,C.dOW,C.dOX,C.dPo,C.dPp,C.dPd,C.dPe,C.dPf,C.dPg,C.dPh,C.dPi,C.dPj,C.dPv,C.dPm,C.fFs,C.df9,C.df7,C.df8,C.dfa,C.dfO,C.dfD,C.dfA,C.dfc,C.dfE,C.dfi,C.dfj,C.dfl,C.dfC,C.dfh,C.dfn,C.dfL,C.dfx,C.dfw,C.dfy,C.dfz,C.dfs,C.dfu,C.dfv,C.dfo,C.dfH,C.dfK,C.dfe,C.dff,C.dhA,C.dhz,C.dhy,C.dhx,C.dhE,C.dhw,C.dhF,C.dg3,C.dg4,C.dg5,C.dg8,C.dg1,C.dg0,C.cOx,C.d73,C.d7g,C.d7f,C.d7v,C.d7e,C.d7w,C.d7d,C.d7c,C.d7y,C.d7b,C.d7o,C.d7n,C.d7F,C.bQS,C.bR1,C.bQU,C.bQV,C.bQY,C.bQX,C.bR_,C.bR0,C.bQW,C.bQQ,C.bQR,C.bSv,C.bSw,C.bSx,C.bSy,C.bSz,C.bSA,C.bSB,C.h2r,C.fUg,C.bKd,C.bK8,C.bK6,C.bK7,C.bK5,C.cpz,C.cpA,C.cpy,C.cpB,C.cpD,C.cpE,C.cpF,C.cpv,C.cEw,C.cEF,C.cEG,C.cEH,C.cEE,C.cEI,C.cEJ,C.cEK,C.cEL,C.cEz,C.cED,C.bS0,C.bS_,C.bRY,C.bRW,C.bRX,C.bRT,C.bRU,C.bRV,C.bRZ,C.bRS,C.f5I,C.f5J,C.f5K,C.f5L,C.f5M,C.bRP,C.bRQ,C.bRR,C.bRK,C.bRM,C.bRN,C.bRO,C.bRG,C.bRq,C.bRp,C.bRo,C.bRi,C.bRj,C.bRn,C.bRk,C.bRl,C.bRh,C.e0A,C.e0C,C.e0v,C.e0w,C.e0u,C.e0E,C.e0F,C.e0G,C.e0J,C.e0K,C.e0L,C.e0M,C.e0N,C.e0O,C.e0P,C.e0Q,C.e0H,C.e0I,C.bRC,C.bRB,C.bRs,C.bRr,C.bRy,C.bRz,C.bRv,C.bRw,C.bRx,C.bRu,C.bR2,C.bR3,C.bR7,C.bR6,C.bR5,C.bR4,C.e2f,C.e2e,C.e2h,C.e2i,C.e2j,C.e2d,C.e2l,C.e2k,C.e1E,C.e1F,C.e1H,C.e13,C.e1k,C.e1j,C.e1m,C.e1A,C.e1f,C.e1q,C.e1r,C.e1p,C.e1n,C.e1o,C.e1t,C.e1u,C.e1v,C.e1z,C.e0S,C.e1C,C.e0W,C.e0Z,C.e10,C.e1I,C.e16,C.e14,C.e18,C.e19,C.e15,C.e1a,C.e1e,C.e1R,C.e1S,C.e1K,C.e1N,C.e1O,C.e1P,C.e1U,C.e1L,C.e11,C.dgc,C.dgb,C.dgg,C.dgq,C.dgh,C.eWz,C.dwq,C.dwn,C.dwo,C.dwy,C.dwx,C.dww,C.dwG,C.dwv,C.dwH,C.dwu,C.dwI,C.dwt,C.dwJ,C.dws,C.dwr,C.dwC,C.dwM,C.dwV,C.e23,C.e27,C.e28,C.e2_,C.e20,C.e21,C.e26,C.e2a,C.e29,C.e1V,C.e1W,C.e1X,C.e1Y,C.e1Z,C.dOw,C.fWc,C.cnR,C.d7R,C.d7Q,C.d7U,C.d7N,C.d7P,C.cGd,C.cGj,C.cGk,C.cGi,C.cGm,C.cGh,C.cGe,C.cGf,C.cGq,C.fkX,C.fkY,C.eTK,C.eTB,C.eTC,C.eTD,C.eTF,C.eTG,C.eTJ,C.eTw,C.eTz,C.eTL,C.eTx,C.eTO,C.eTP,C.eTQ,C.eTR,C.eTN,C.eTr,C.eTs,C.eTt,C.eTv,C.eTu,C.eU9,C.eUa,C.eTT,C.eTU,C.eU0,C.eU1,C.eU2,C.eTX,C.eTY,C.eUg,C.eUf,C.eUh,C.eUe,C.eTS,C.eTW,C.eUc,C.eUb,C.eU6,C.eU7,C.eU5,C.eU4])
u(A.af,[C.apu,C.TL,C.a_i,C.a_m,C.a_k,C.ZT,C.alz,C.ajN,C.auu,C.ays,C.alI,C.alG,C.alC,C.W5,C.alE,C.TM,C.aqF,C.aqz,C.a_X,C.aqD,C.a0g,C.a0h,C.a71,C.ZV,C.ZU,C.Zr,C.a23,C.Gc,C.ayz,C.atG,C.atA,C.atF,C.OO])
u(A.ah,[C.aEd,C.bg7,C.aBc,C.bgw,C.aBf,C.bdH,C.aBd,C.azr,C.aGD,C.ayt,C.aBh,C.aBg,C.aBe,C.blt,C.alF,C.alB,C.aEM,C.aEJ,C.aDc,C.aEL,C.aEK,C.blu,C.aMM,C.azX,C.azW,C.ayG,C.bxS,C.aOS,C.aOT,C.aGe,C.bmR,C.aGd,C.bzD])
u(A.jt,[C.dP8,C.dPa,C.dP5,C.dPu,C.fHY,C.bQP,C.dfN,C.dfM,C.dft,C.dfI,C.dfJ,C.dg9,C.bSC,C.bSu,C.bRf,C.bRg,C.h2q,C.h2Q,C.bKc,C.cpC,C.cpw,C.cpq,C.f5N,C.bRE,C.bRH,C.bRI,C.dqL,C.bRA,C.e1w,C.e1b,C.e1T,C.dgp,C.dgo,C.dgm,C.dgr,C.dgu,C.dgv,C.dgf,C.dgj,C.dgl,C.dgy,C.cem,C.ceu,C.cez,C.dOx,C.fWe,C.fWd,C.fkU,C.fkV,C.eTH,C.eUd,C.cFy,C.fsx,C.fol,C.fI3,C.fE6,C.fI0,C.fp8,C.fp7,C.ftg])
u(A.lB,[C.a1z,C.afD,C.a1S,C.a_K,C.acg,C.aL6,C.Ij,C.alK,C.cFz,C.cFA])
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
v(C.bzD,A.eB)
v(C.bxT,A.jc)})()
A.j0(b.typeUniverse,JSON.parse('{"b_k":{"ax":[],"v":[]},"bcv":{"aC":[]},"apu":{"af":[],"v":[]},"aEd":{"ah":["apu"]},"TL":{"af":[],"v":[]},"aly":{"ax":[],"v":[]},"aW4":{"ax":[],"v":[]},"bg7":{"ah":["TL"]},"a_i":{"af":[],"v":[]},"a_m":{"af":[],"v":[]},"a_k":{"af":[],"v":[]},"ZT":{"af":[],"v":[]},"aBc":{"ah":["a_i"]},"bgw":{"ah":["a_m"]},"aBf":{"ah":["a_k"]},"ZA":{"ax":[],"v":[]},"bdJ":{"aC":[]},"bdA":{"aC":[]},"bdH":{"ah":["ZT"]},"aId":{"aC":[]},"bj3":{"aC":[]},"bbS":{"ax":[],"v":[]},"alz":{"af":[],"v":[]},"alA":{"ah":["alz"]},"boC":{"aC":[]},"aW9":{"aC":[]},"ajN":{"af":[],"v":[]},"auu":{"af":[],"v":[]},"ays":{"af":[],"v":[]},"ajO":{"ah":["ajN"]},"bcx":{"aC":[]},"Qv":{"ax":[],"v":[]},"aBb":{"aC":[]},"auv":{"ah":["auu"]},"bc0":{"aC":[]},"ayt":{"ah":["ays"]},"alI":{"af":[],"v":[]},"alG":{"af":[],"v":[]},"alC":{"af":[],"v":[]},"alJ":{"ah":["alI"]},"bsE":{"aC":[]},"alH":{"ah":["alG"]},"bjb":{"aC":[]},"alD":{"ah":["alC"]},"biC":{"aC":[]},"W5":{"af":[],"v":[]},"alE":{"af":[],"v":[]},"TM":{"af":[],"v":[]},"a6e":{"ax":[],"v":[]},"biJ":{"aC":[]},"tA":{"ax":[],"v":[]},"Ik":{"ax":[],"v":[]},"blt":{"ah":["W5"]},"alF":{"ah":["alE"]},"alB":{"ah":["TM"]},"aqF":{"af":[],"v":[]},"aqz":{"af":[],"v":[]},"a_X":{"af":[],"v":[]},"adZ":{"ax":[],"v":[]},"aEM":{"ah":["aqF"]},"aEJ":{"ah":["aqz"]},"bgd":{"ax":[],"v":[]},"bgg":{"aC":[]},"bk2":{"ax":[],"v":[]},"bfi":{"aC":[]},"by_":{"ax":[],"v":[]},"bnl":{"ax":[],"v":[]},"aDc":{"ah":["a_X"]},"adY":{"ax":[],"v":[]},"bk1":{"ax":[],"v":[]},"adX":{"ax":[],"v":[]},"bk0":{"ax":[],"v":[]},"aDd":{"ax":[],"v":[]},"aJm":{"ax":[],"v":[]},"Go":{"ax":[],"v":[]},"aqD":{"af":[],"v":[]},"a0g":{"af":[],"v":[]},"a0h":{"af":[],"v":[]},"aEL":{"ah":["aqD"]},"bge":{"ax":[],"v":[]},"add":{"ax":[],"v":[]},"bgc":{"ax":[],"v":[]},"bgh":{"ax":[],"v":[]},"aEK":{"ah":["a0g"]},"blu":{"ah":["a0h"]},"b_i":{"ax":[],"v":[]},"a71":{"af":[],"v":[]},"bla":{"ah":["a71"]},"bl9":{"aC":[]},"atH":{"ax":[],"v":[]},"ZV":{"af":[],"v":[]},"ZU":{"af":[],"v":[]},"Zr":{"af":[],"v":[]},"a23":{"af":[],"v":[]},"azX":{"ah":["ZV"]},"azW":{"ah":["ZU"]},"ayG":{"ah":["Zr"]},"bxS":{"ah":["a23"]},"Gc":{"af":[],"v":[]},"ayz":{"af":[],"v":[]},"bxQ":{"ah":["Gc"]},"bxR":{"ah":["ayz"]},"bxP":{"aC":[]},"atG":{"af":[],"v":[]},"aGe":{"ah":["atG"]},"aej":{"ax":[],"v":[]},"atA":{"af":[],"v":[]},"atF":{"af":[],"v":[]},"bmR":{"ah":["atA"]},"aGd":{"ah":["atF"]},"OO":{"af":[],"v":[]},"aGf":{"ah":["OO"],"eB":[]},"bai":{"jc":[],"fi":[]}}'))
A.Da(b.typeUniverse,JSON.parse('{"afp":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.as
return{e2:w("aSK"),cq:w("mc"),Q:w("rk"),r:w("bv<m,m>"),c5:w("aUJ"),dY:w("aUK"),fH:w("MC"),de:w("aku"),dN:w("MK<F>"),gc:w("Ee<F>"),A:w("eG<m?>"),e:w("Ii"),B:w("nr"),P:w("hS"),df:w("lp"),k:w("kR"),x:w("aB<~>"),U:w("O<SI>"),V:w("O<ac>"),C:w("O<rk>"),O:w("O<u>"),c:w("O<MC>"),b:w("O<aku>"),ac:w("O<eG<m?>>"),I:w("O<nr>"),u:w("O<hS>"),J:w("O<lp>"),_:w("O<kR>"),cl:w("O<aB<ai<a8<m,@>>>>"),R:w("O<nu>"),eU:w("O<ai<+(I,I)>>"),ez:w("O<a8<m,aF>>"),gE:w("O<a8<m,m>>"),Y:w("O<a8<m,@>>"),fD:w("O<mL>"),bp:w("O<oC>"),g:w("O<q>"),ar:w("O<atT>"),v:w("O<fT>"),gy:w("O<a9H>"),L:w("O<+(m,m)>"),G:w("O<+(I,I)>"),E:w("O<+(I,~())>"),bd:w("O<+(m,F,P)>"),bF:w("O<+count,id,name(F,m,m)>"),F:w("O<cT>"),s:w("O<m>"),cF:w("O<au>"),aS:w("O<j_>"),dT:w("O<ba6>"),p:w("O<v>"),Z:w("O<fi>"),D:w("O<lA>"),h:w("O<azG>"),cC:w("O<bhm>"),fp:w("O<KE>"),M:w("O<KL>"),gZ:w("O<aIi>"),gA:w("O<afu>"),e4:w("O<afB>"),dE:w("O<aKk>"),f7:w("O<P>"),n:w("O<I>"),t:w("O<F>"),dS:w("O<aC?>"),d4:w("O<m?>"),eF:w("cw<ah<af>>"),d:w("ai<nr>"),do:w("ai<hS>"),cg:w("ai<lp>"),ax:w("ai<kR>"),fO:w("ai<a8<m,@>>"),cz:w("ai<+(m,m)>"),bC:w("ai<+count,id,name(F,m,m)>"),dy:w("ai<m>"),er:w("ai<au>"),gk:w("ai<lA>"),j:w("ai<@>"),fK:w("bA<m,m>"),d2:w("bA<m,ai<a8<m,@>>>"),a:w("a8<m,@>"),f:w("a8<@,@>"),gv:w("N<m,Il>"),cM:w("N<F,m>"),w:w("iA"),g2:w("rI"),bV:w("api"),fL:w("ct"),K:w("aF"),dc:w("fT"),fo:w("P9<F>"),fz:w("+(m,m)"),ei:w("+scope,text(m,m)"),bn:w("+games,limit(P,F)"),d9:w("+dx,hidden(I,ai<hS>)"),cs:w("+count,id,name(F,m,m)"),N:w("m"),fT:w("it<hS>"),ec:w("it<m>"),gW:w("r0<I>"),X:w("bp<I>"),bW:w("dJ"),W:w("bP<m>"),b4:w("bP<F>"),cI:w("k_<m>"),av:w("Y<zu>"),cc:w("Y<m>"),l:w("v"),gF:w("fi"),fA:w("lA"),dO:w("Gs"),bw:w("adX<m?>"),cy:w("KN"),q:w("mu"),y:w("P"),i:w("I"),z:w("@"),S:w("F"),eK:w("ai<kR>?"),m:w("aqC?"),cT:w("q?"),h5:w("+(m,m)?"),eo:w("+code,qrPayload,usesRemaining(m,m,F)?"),he:w("+qrPayload,token,usesRemaining(m,m,F)?"),gG:w("+members,trees,viewOnly(F,F,P)?"),az:w("qf?"),T:w("m?"),aD:w("dJ?"),o:w("lA?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b3Y=new A.bg(B.fI,B.bI,B.fI,B.bI)
D.adv=new A.bg(B.fI,B.ii,B.fI,B.ii)
D.b4b=new A.bg(B.ij,B.bI,B.bI,B.bI)
D.b4f=new A.ay(B.cS,1.4,B.r,-1)
D.b4p=new A.ay(B.ad,1,B.r,-1)
D.ae_=new A.aZ(140,1/0,0,1/0)
D.b5O=new A.aZ(0,1/0,64,1/0)
D.b5S=new A.aZ(0,84,0,1/0)
D.ae7=new A.aZ(130,1/0,0,1/0)
D.aCl=w([B.m5,B.rC,B.c],x.O)
D.c6H=new A.a9(B.aA,B.aF,B.x,D.aCl,null,null)
D.b6B=new A.o(null,null,null,null,null,D.c6H,B.n)
D.ddJ=w([B.aY,B.bQ],x.O)
D.c8P=new A.a9(B.b1,B.b7,B.x,D.ddJ,null,null)
D.b6W=new A.o(null,null,null,null,null,D.c8P,B.n)
D.Y2=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fw=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dhD=w([B.dx,D.Y2,D.fw],x.O)
D.c5T=new A.a9(B.b1,B.b7,B.x,D.dhD,null,null)
D.b7G=new A.o(null,null,null,null,null,D.c5T,B.n)
D.fpa=new A.G(!0,B.bV,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_b=new A.B("?",null,D.fpa,null,null,null,null,null,null,null,null,null)
D.bbk=new A.cc(B.A,null,null,D.h_b,null)
D.VJ=new A.G(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIj=new A.B("\ud83c\udf33",null,D.VJ,null,null,null,null,null,null,null,null,null)
D.aeR=new A.cc(B.A,null,null,D.fIj,null)
D.fKW=new A.B("\ud83c\udfc6",null,At.Ku,null,null,null,null,null,null,null,null,null)
D.bbv=new A.cc(B.A,null,null,D.fKW,null)
D.bdm=new A.fk(null,null,null,null,null,E.kn,null,null,null,null)
D.aeT=new A.cc(B.A,null,null,D.bdm,null)
D.kM=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fpJ=new A.G(!0,D.kM,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fK_=new A.B("No books on the shelf yet.",null,D.fpJ,null,null,null,null,null,null,null,null,null)
D.eql=new A.D(B.nC,D.fK_,null)
D.bbL=new A.cc(B.A,null,null,D.eql,null)
D.fwF=new A.G(!0,D.fw,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h06=new A.B("\ud83d\ude8c  On the road\u2026",null,D.fwF,null,null,null,null,null,null,null,null,null)
D.eqW=new A.D(B.cl,D.h06,null)
D.bcd=new A.cc(B.A,null,null,D.eqW,null)
D.aWa=new A.B("\ud83e\uddfa",null,D.VJ,null,null,null,null,null,null,null,null,null)
D.bct=new A.cc(B.A,null,null,D.aWa,null)
D.fNo=new A.B("\ud83c\udfad",null,D.VJ,null,null,null,null,null,null,null,null,null)
D.bcF=new A.cc(B.A,null,null,D.fNo,null)
D.bcI=new A.cc(B.A,null,null,A9.XR,null)
D.afd=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.afj=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.beV=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bf_=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bfb=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bfd=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bff=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bfn=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lB=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bfr=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bfw=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bfx=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bfy=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lC=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bg8=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.Br=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bgh=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bgB=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bgE=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bgK=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bgS=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.afW=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bgZ=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.Ye=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.afZ=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bha=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.Yg=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bhv=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.aga=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bhT=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bi8=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.biw=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.biG=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.FI=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bj1=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bj3=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bj7=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.agC=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bjq=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bjw=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bjC=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.agG=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bjK=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bkb=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bkj=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bkl=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bkq=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.agW=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bl2=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.ahj=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.blZ=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.ahw=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bmn=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.FW=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bmt=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bmD=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bmF=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.ahB=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bmX=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bmY=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bn0=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.ahI=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.YV=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bnk=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bnF=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bnK=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.ahV=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bnR=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.Z0=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bo9=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.boa=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.G2=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.boV=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bpy=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bpE=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bpI=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qe=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bpS=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bpW=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bq1=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bq3=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.aiF=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.aiJ=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.G8=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.Zi=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.aiT=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.brb=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bru=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.brV=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bs3=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.ajh=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.Zr=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bsc=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bst=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.Zw=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bsH=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bsX=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.ZA=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bt1=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.ajz=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.ajB=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.btk=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.ajH=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.btM=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.btQ=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.btW=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.bu1=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bu9=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.buH=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bvb=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fEd=new A.B("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.byI=new A.eG(null,D.fEd,B.fa,null,x.A)
D.fNf=new A.B("None",null,null,null,null,null,null,null,null,null,null,null)
D.byK=new A.eG(null,D.fNf,B.fa,null,x.A)
D.akD=new A.bd(3e4)
D.bzh=new A.bd(38e5)
D.bA1=new A.ij(0,10,0,10)
D.bAa=new A.Q(0,1,0,0)
D.bAl=new A.ij(0,4,0,4)
D.bAo=new A.Q(0,4,5,0)
D.bAF=new A.Q(10,10,14,10)
D.bAR=new A.ij(10,4,10,4)
D.bAZ=new A.ij(10,8,10,8)
D.bB_=new A.Q(10,8,8,8)
D.bBs=new A.Q(12,6,12,2)
D.bBI=new A.Q(14,0,14,6)
D.bBM=new A.Q(14,10,6,6)
D.bBN=new A.Q(14,12,14,0)
D.bBR=new A.Q(14,12,14,8)
D.bBU=new A.Q(14,12,8,14)
D.bBY=new A.ij(14,14,14,14)
D.bCe=new A.Q(14,6,14,40)
D.bCh=new A.Q(14,8,14,30)
D.bCF=new A.Q(16,2,16,10)
D.bCP=new A.Q(16,6,16,30)
D.bCR=new A.Q(16,6,16,8)
D.bD4=new A.Q(18,10,18,4)
D.bD6=new A.Q(18,12,18,0)
D.bDd=new A.Q(18,14,12,4)
D.am6=new A.Q(18,16,18,8)
D.bDu=new A.Q(18,20,18,22)
D.ama=new A.Q(18,24,18,24)
D.bDA=new A.Q(18,30,18,30)
D.bDS=new A.Q(20,10,12,20)
D.bDV=new A.Q(20,11,20,11)
D.bE5=new A.Q(20,18,16,18)
D.bE7=new A.Q(20,18,20,6)
D.bEX=new A.Q(24,32,24,28)
D.bEY=new A.Q(24,36,24,32)
D.bF1=new A.Q(26,26,24,14)
D.bFg=new A.Q(2,4,2,8)
D.bFk=new A.Q(30,0,30,0)
D.bFv=new A.Q(38,22,22,22)
D.amu=new A.Q(40,24,24,24)
D.bFx=new A.ij(40,40,40,40)
D.bFz=new A.Q(46,30,30,30)
D.amx=new A.Q(4,0,0,8)
D.bG_=new A.Q(56,40,40,40)
D.bG3=new A.Q(1.25,1.25,1.25,1.25)
D.bG4=new A.Q(60,0,60,0)
D.bG8=new A.Q(6,14,6,16)
D.bGc=new A.Q(6,4,12,0)
D.bGg=new A.Q(6,6,10,2)
D.bGn=new A.ij(7,3,7,3)
D.bGX=new A.Q(5,1.5,5,1.5)
D.bH7=new A.Q(6,2.5,6,2.5)
D.fVm=new A.B("Family Games",null,B.kh,null,null,null,null,null,null,null,null,null)
D.fCP=new A.B("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,I.aaR,null,null,null,null,null,null,null,null,null)
D.cHL=w([D.fVm,D.fCP],x.p)
D.bwd=new A.fj(B.ai,B.e,B.i,B.E,null,B.p,null,0,D.cHL,null)
D.bHy=new A.by(1,B.bc,D.bwd,null)
D.fZI=new A.B("Signature",null,B.na,null,null,null,null,null,null,null,null,null)
D.bHB=new A.by(1,B.bc,D.fZI,null)
D.fRY=new A.B("MADE BY THE ONE WHO PLANTED THE TREE",null,T.ty,null,null,null,null,null,null,null,null,null)
D.bI9=new A.by(1,B.bc,D.fRY,null)
D.fWP=new A.B("Tell the AI what to fix",null,B.dg,null,null,null,null,null,null,null,null,null)
D.bIq=new A.by(1,B.bc,D.fWP,null)
D.fxr=new A.G(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYN=new A.B("Worksheets",null,D.fxr,null,null,null,null,null,null,null,null,null)
D.fxC=new A.G(!0,E.afF,null,null,null,null,13,B.cC,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXE=new A.B("Track your project spending",null,D.fxC,null,null,null,null,null,null,null,null,null)
D.d5c=w([D.fYN,B.aw,D.fXE],x.p)
D.bvQ=new A.fj(B.ai,B.e,B.i,B.E,null,B.p,null,0,D.d5c,null)
D.bIw=new A.by(1,B.bc,D.bvQ,null)
D.fss=new A.G(!0,E.kn,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDo=new A.B("FAMILY LIBRARY",null,D.fss,null,null,null,null,null,null,null,null,null)
D.bIO=new A.by(1,B.bc,D.fDo,null)
D.Ou=new C.Ii("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.wn=new C.Ij(0,"male")
D.op=new C.Ij(1,"female")
D.yT=new C.Ij(2,"unknown")
D.ux=new C.alK(0,"owner")
D.Ov=new C.alK(1,"editor")
D.kV=new C.alK(2,"viewer")
D.aoq=new A.a0(61199,"MaterialIcons",!1)
D.bO4=new A.a0(61504,"MaterialIcons",!1)
D.bO5=new A.a0(61505,"MaterialIcons",!1)
D.bO7=new A.a0(61587,"MaterialIcons",!1)
D.bOe=new A.a0(61890,"MaterialIcons",!1)
D.bP6=new A.a0(63034,"MaterialIcons",!0)
D.bPo=new A.a0(63153,"MaterialIcons",!1)
D.bPV=new A.a0(63429,"MaterialIcons",!1)
D.aqy=new A.a0(984520,"MaterialIcons",!1)
D.bOD=new A.a0(62776,"MaterialIcons",!1)
D.bSg=new A.ae(D.bOD,26,B.b2,null,null,null)
D.bN2=new A.a0(57648,"MaterialIcons",!1)
D.bSA=new A.ae(D.bN2,14,B.c,null,null,null)
D.bSR=new A.ae(B.Hg,17,null,null,null,null)
D.bSX=new A.ae(B.a2_,null,B.bQ,null,null,null)
D.bTo=new A.ae(E.a25,null,null,null,null,null)
D.bTr=new A.ae(B.j2,18,E.kn,null,null,null)
D.a1Q=new A.a0(62044,"MaterialIcons",!1)
D.bTw=new A.ae(D.a1Q,null,B.aY,null,null,null)
D.bTD=new A.ae(B.z5,18,B.c,null,null,null)
D.bUl=new A.ae(B.e9,16,null,null,null,null)
D.bUs=new A.ae(D.a1Q,32,B.aY,null,null,null)
D.bUL=new A.ae(E.aor,18,B.cS,null,null,null)
D.bVP=new A.ae(B.Hq,22,B.ax,null,null,null)
D.bW0=new A.ae(B.e9,22,B.b2,null,null,null)
D.bWd=new A.ae(Z.a1V,22,B.c,null,null,null)
D.bWj=new A.ae(B.uI,52,B.c,null,null,null)
D.bWt=new A.ae(B.Hq,30,B.ax,null,null,null)
D.bWM=new A.ae(B.a2b,null,B.c,null,null,null)
D.arf=new A.ae(B.uS,22,B.c,null,null,null)
D.bWV=new A.ae(B.e9,17,null,null,null,null)
D.bXh=new A.ae(B.wD,26,B.cS,null,null,null)
D.bY2=new A.ae(B.a2j,16,null,null,null,null)
D.bYO=new A.ae(B.uI,24,B.c,null,null,null)
D.bYT=new A.ae(B.OY,20,B.t7,null,null,null)
D.bYY=new A.ae(B.He,null,B.bQ,null,null,null)
D.bZ5=new A.ae(B.j2,18,B.c,null,null,null)
D.bZL=new A.ae(B.cz,22,B.ad,null,null,null)
D.c_B=new A.ae(B.ef,16,B.ad,null,null,null)
D.c_N=new A.ae(D.a1Q,20,B.aY,null,null,null)
D.arF=new A.ae(B.hF,20,null,null,null,null)
D.c0h=new A.ae(B.cz,18,D.kM,null,null,null)
D.c0y=new A.ae(B.zc,28,B.c,null,null,null)
D.c0I=new A.ae(B.OO,null,B.ff,null,null,null)
D.c11=new A.ae(B.zc,24,B.c,null,null,null)
D.c1t=new A.ae(B.uI,null,B.aY,null,null,null)
D.c1u=new A.ae(B.k3,20,B.cS,null,null,null)
D.c1O=new A.ae(B.Hg,16,null,null,null,null)
D.c3n=new A.e5(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.k_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eH,!0,null,null,null,null)
D.asm=new C.a6e(10,null)
D.c3T=new C.a6e(12,null)
D.c3U=new C.a6e(14,null)
D.dlH=w([B.bw,B.aY,B.fn,B.b2],x.O)
D.c54=new A.a9(B.aA,B.aF,B.x,D.dlH,null,null)
D.boH=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.buN=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d1I=w([D.boH,D.buN],x.O)
D.c5f=new A.a9(B.b1,B.b7,B.x,D.d1I,null,null)
D.dfH=w([B.fc,B.fP,B.fn],x.O)
D.c5l=new A.a9(B.aA,B.aF,B.x,D.dfH,null,null)
D.ait=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bfz=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d3V=w([D.ait,D.bfz],x.O)
D.c5U=new A.a9(B.b1,B.b7,B.x,D.d3V,null,null)
D.bjg=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aBC=w([D.bjg,D.ait],x.O)
D.c6d=new A.a9(B.aA,B.aF,B.x,D.aBC,null,null)
D.ahc=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.blQ=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.deM=w([D.ahc,D.blQ],x.O)
D.c6S=new A.a9(B.a6,B.a9,B.x,D.deM,null,null)
D.dsF=w([B.bC,B.np],x.O)
D.c6U=new A.a9(B.b1,B.b7,B.x,D.dsF,null,null)
D.boC=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dtB=w([D.boC,D.kM,D.kM,K.MZ],x.O)
D.dw6=w([0,0.07,0.9,1],x.n)
D.c7p=new A.a9(B.a6,B.a9,B.x,D.dtB,D.dw6,null)
D.c7z=new A.a9(B.aA,B.aF,B.x,B.SD,null,null)
D.d_x=w([B.aE,D.lB],x.O)
D.c7C=new A.a9(B.a6,B.a9,B.x,D.d_x,null,null)
D.dse=w([B.b2,B.aY,B.bQ],x.O)
D.c8A=new A.a9(B.aA,B.aF,B.x,D.dse,null,null)
D.ccQ=w([10,20,30],x.t)
D.cmM=w([-1,-0.4,0.3,1],x.n)
D.cug=w([B.bw,B.b2,B.fc],x.O)
D.cuo=w([B.bs,B.aE,B.jx],x.O)
D.cuq=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cv7=w([30,140,262,360],x.n)
D.bn6=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cAE=w([D.bn6,E.ai4],x.O)
D.ekU=new A.q(1,2)
D.faA=new A.cT(B.aT,D.ekU,3)
D.ayu=w([D.faA],x.F)
D.cI2=w([B.hk,B.ch,B.fj],x.O)
D.cKN=w([B.bM,B.bu,B.bp],x.O)
D.bJE=new C.uI("classic","Classic leather","Gold-edged brown leather",D.aBC,E.kn,E.kn,"\u2766",B.K,!0,!1,!1,!1)
D.beF=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.btC=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.d6V=w([D.beF,D.btC],x.O)
D.ai8=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bJz=new C.uI("ornate","Ornate gold","Double gold border and flourishes",D.d6V,D.ai8,D.ai8,"\u2726",B.K,!0,!0,!0,!1)
D.biQ=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bpt=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.cZr=w([D.biQ,D.bpt],x.O)
D.bJy=new C.uI("parchment","Parchment","Old paper with dark ink",D.cZr,D.G2,L.iY,"\u2767",B.K,!0,!1,!1,!0)
D.afl=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.brR=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dqt=w([D.afl,D.brR],x.O)
D.bmA=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.br6=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bJB=new C.uI("minimal","Clean paper","Plain and elegant, like a printed book",D.dqt,D.bmA,D.br6,"",B.K,!0,!0,!1,!0)
D.bJD=new C.uI("midnight","Midnight","Deep blue with silver stars",I.aBW,B.cr,B.bO,"\u2727",B.K,!0,!0,!1,!1)
D.bJx=new C.uI("emerald","Emerald library","Green cloth, title on the left",W.ayT,E.kn,B.fY,"\u25c6",B.bk,!0,!1,!1,!1)
D.bsl=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dot=w([B.eo,D.bsl],x.O)
D.bnQ=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bp1=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bJC=new C.uI("rose","Rose vintage","Burgundy with rose-gold lettering",D.dot,D.bnQ,D.bp1,"\u2740",B.K,!0,!1,!0,!1)
D.dtc=w([B.cs,F.nq],x.O)
D.bJA=new C.uI("modern","Modern","Dark, bold, left-aligned",D.dtc,B.aJ,B.c,"",B.bk,!1,!0,!1,!1)
D.a4p=w([D.bJE,D.bJz,D.bJy,D.bJB,D.bJD,D.bJx,D.bJC,D.bJA],A.as("O<uI>"))
D.cNL=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dt_=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bJP=new C.lp('What does "Ubuntu" mean?',D.dt_,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d0c=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bJS=new C.lp("In Swahili, what do we call a grandmother?",D.d0c,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d03=w(["Babu","Mama","Baba","Dada"],x.s)
D.bJN=new C.lp("In Swahili, what do we call a grandfather?",D.d03,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d1i=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bJR=new C.lp("What is a sister called in Swahili?",D.d1i,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.d6m=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bJO=new C.lp("What is a brother called in Swahili?",D.d6m,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d02=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bJZ=new C.lp("Which word means father in Swahili?",D.d02,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.du7=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bJY=new C.lp('"Umoja ni nguvu" means...',D.du7,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dra=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bK_=new C.lp('"Haba na haba hujaza kibaba" teaches us...',D.dra,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d42=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bJX=new C.lp('The African saying "It takes a village to raise a child" means...',D.d42,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dur=w(["The elders","The market","The river","The drum"],x.s)
D.bJT=new C.lp("Who is the traditional keeper of the family stories?",D.dur,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cRW=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bJQ=new C.lp("Why do families sit round the fire at night?",D.cRW,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dte=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bJV=new C.lp('What does "Harambee" mean?',D.dte,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.d98=w(["An elder","A baby","A market","A cow"],x.s)
D.bJU=new C.lp('"Mzee" is a respectful word for...',D.d98,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dok=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bJW=new C.lp('What does "Shikamoo" show?',D.dok,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.ayO=w([D.bJP,D.bJS,D.bJN,D.bJR,D.bJO,D.bJZ,D.bJY,D.bK_,D.bJX,D.bJT,D.bJQ,D.bJV,D.bJU,D.bJW],x.J)
D.cWi=w([90,360],x.n)
D.cYZ=w([B.bQ,B.bm],x.O)
D.bor=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.cZD=w([D.afl,D.bor],x.O)
D.d_g=w([-1,-0.3,0.4,1],x.n)
D.d08=w([0,0.45,0.72,0.92,1],x.n)
D.biM=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d0q=w([D.biM,B.df],x.O)
D.bgw=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.ajR=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d0Y=w([B.dx,D.bgw,D.ajR],x.O)
D.d1Y=w([B.bb,B.jg,B.p5],x.O)
D.bji=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bqY=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bgc=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d22=w([D.bji,D.bqY,D.bgc],x.O)
D.d2n=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d2x=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hsF=new C.adC(78,424,48,44,56)
D.hsD=new C.adC(214,396,34,34,42)
D.hsE=new C.adC(442,452,56,50,64)
D.azN=w([D.hsF,D.hsD,D.hsE],A.as("O<adC>"))
D.d35=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bft=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bl1=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dw2=w([D.ahc,D.bft,D.bl1],x.O)
D.bJF=new C.uJ("leather","Leather",D.dw2,"vintage")
D.da9=w([B.d9,B.ME,Ab.Yt],x.O)
D.bJM=new C.uJ("midnight","Midnight",D.da9,"starry")
D.d1Z=w([B.en,B.e_,B.ld],x.O)
D.bJL=new C.uJ("forest","Forest",D.d1Z,"story")
D.dy4=w([B.ep,B.eo,B.jU],x.O)
D.bJI=new C.uJ("burgundy","Burgundy",D.dy4,"royal")
D.cKl=w([B.aE,B.oe,B.o0],x.O)
D.bJJ=new C.uJ("royal","Royal",D.cKl,"royal")
D.d4y=w([B.bu,B.cs,F.nq],x.O)
D.bJG=new C.uJ("charcoal","Charcoal",D.d4y,"geo")
D.dwb=w([B.cf,B.dJ,B.y8],x.O)
D.bJK=new C.uJ("sunset","Sunset",D.dwb,"sunset")
D.dwU=w([B.jg,B.G3,B.Yw],x.O)
D.bJH=new C.uJ("ocean","Ocean",D.dwU,"band")
D.zI=w([D.bJF,D.bJM,D.bJL,D.bJI,D.bJJ,D.bJG,D.bJK,D.bJH],A.as("O<uJ>"))
D.d52=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.d5E=w([B.am,B.aM,B.R],x.O)
D.d7_=w([B.eo,B.e_,B.d9,B.fZ,B.yb,B.cS,B.kq,B.ed,B.d2],x.O)
D.d70=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.faB=new A.cT(B.dq,B.dF,8)
D.d7b=w([D.faB],x.F)
D.d8i=w([B.c1,B.dJ,B.km],x.O)
D.bho=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.blj=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bpo=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.d8y=w([D.bho,G.aiC,D.blj,D.bpo,D.ajR],x.O)
D.d8O=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.d8Z=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.beQ=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bkG=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.d9q=w([D.beQ,D.agG,D.bkG],x.O)
D.da4=w([B.c1,B.hB],x.O)
D.daa=w([G.nh,B.i7,G.afw,B.cN],x.O)
D.dbI=w([B.cN,G.nh,B.i7,D.lC,B.cN],x.O)
D.dci=w([B.aU,B.w_,B.xY],x.O)
D.aAQ=w(["True","False"],x.s)
D.eI5=new A.y(-0.65,0.6)
D.eUJ=new A.y(-0.2,0.95)
D.eVO=new A.y(0.25,0.95)
D.eLz=new A.y(0.7,0.6)
D.eWn=new A.y(1,0.1)
D.dd5=w([As.Ur,D.eI5,D.eUJ,D.eVO,D.eLz,D.eWn],x.G)
D.bnl=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.btu=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bin=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.ddb=w([D.bnl,D.btu,D.bin],x.O)
D.ddf=w([B.bN,B.c0,B.dw,B.aU],x.O)
D.ddK=w([B.i3,B.cf,B.u1],x.O)
D.de6=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.deh=w([B.fc,B.cS],x.O)
D.boL=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.deH=w([D.boL,D.afj],x.O)
D.deS=w([B.cJ,B.fx,B.hR],x.O)
D.df2=w([B.aJ,B.bm,B.d9],x.O)
D.dfE=w([B.et,B.cV,B.e_],x.O)
D.dfZ=w([B.dH,B.d9,B.ME],x.O)
D.dg2=w([B.br,B.m2,B.d2],x.O)
D.dgj=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bo0=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bmj=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dgD=w([D.bo0,D.agC,D.bmj],x.O)
D.dho=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dir=w([1,0,7,6,3,2],x.t)
D.a5n=w(["leather","linen","plain","stars","rays"],x.s)
D.diD=w([0.5,2,3.6],x.n)
D.dj9=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bRY=new A.a0(985219,"MaterialIcons",!1)
D.bRv=new A.a0(983781,"MaterialIcons",!1)
D.aBi=w([B.a2_,B.hG,B.lM,B.ic,D.bRY,B.HA,B.qC,D.bRv,I.aqm,B.CQ,B.qE,B.mU],A.as("O<a0>"))
D.a5r=w(["double","single","corners","none"],x.s)
D.bJu=new C.zu("Little Seed","\ud83c\udf31",0)
D.bJw=new C.zu("Young Listener","\ud83d\udc42",40)
D.bJv=new C.zu("Storyteller","\ud83e\ude98",120)
D.bJt=new C.zu("Village Pride","\ud83c\udfe1",300)
D.bJr=new C.zu("Keeper of Roots","\ud83c\udf33",700)
D.bJs=new C.zu("Elder of the Fire","\ud83d\udd25",1500)
D.aBk=w([D.bJu,D.bJw,D.bJv,D.bJt,D.bJr,D.bJs],A.as("O<zu>"))
D.dki=w([B.dj,B.bo,B.ed],x.O)
D.dky=w([],x.C)
D.Dr=w([],x.u)
D.aLi=new A.q(225,528)
D.eJL=new A.y(D.aLi,1)
D.elG=new A.q(350,548)
D.eQ1=new A.y(D.elG,0.95)
D.aLd=new A.q(158,656)
D.ePU=new A.y(D.aLd,1.12)
D.ems=new A.q(92,544)
D.eFj=new A.y(D.ems,0.93)
D.elJ=new A.q(398,614)
D.eLW=new A.y(D.elJ,1.04)
D.elx=new A.q(318,662)
D.eAN=new A.y(D.elx,1.1)
D.a5z=w([D.eJL,D.eQ1,D.ePU,D.eFj,D.eLW,D.eAN],A.as("O<+(q,I)>"))
D.dmy=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dmZ=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.do1=w([B.cN,G.nh,B.i7,D.lC,B.cN,B.i7],x.O)
D.dps=w([B.ay,B.fx,B.fZ],x.O)
D.dpK=w([-12,12],x.n)
D.dpN=w([-17,17],x.n)
D.dq4=w([-70,58],x.n)
D.dq6=w([-70,-30,20],x.n)
D.dr8=w([B.br,B.m2,B.Zs],x.O)
D.drp=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dL0=new C.lS("construction","Construction","Jobsite & builds",B.uF)
D.dL7=new C.lS("house","Home Build","Houses & rooms",B.wy)
D.dKY=new C.lS("grocery","Grocery","Store & pantry",B.a2S)
D.dKX=new C.lS("calculator","Calculations","Math & estimates",B.P4)
D.dL5=new C.lS("lumber","Materials","Lumber & supplies",B.Pp)
D.dKU=new C.lS("kitchen","Kitchen","Remodel & meals",A3.Pq)
D.bRt=new A.a0(983756,"MaterialIcons",!1)
D.dKZ=new C.lS("landscape","Landscaping","Yard & garden",D.bRt)
D.dKT=new C.lS("plumbing","Plumbing","Pipes & water",B.pu)
D.dL8=new C.lS("electrical","Electrical","Wiring & power",B.hr)
D.dKR=new C.lS("store","Retail Shop","Daily business",B.lj)
D.dKS=new C.lS("paint_remodel","Paint & Remodel","Colors & walls",A3.Pj)
D.bQT=new A.a0(983311,"MaterialIcons",!1)
D.dL4=new C.lS("roofing","Roofing","Roofs & exteriors",D.bQT)
D.bRG=new A.a0(983986,"MaterialIcons",!1)
D.dKQ=new C.lS("warehouse","Warehouse","Storage & stock",D.bRG)
D.dL2=new C.lS("vehicles","Vehicles","Fleet & transport",B.HB)
D.bOF=new A.a0(62785,"MaterialIcons",!1)
D.dKW=new C.lS("farm","Farm","Crops & livestock",D.bOF)
D.dKV=new C.lS("restaurant","Restaurant","Food & catering",B.wH)
D.dL1=new C.lS("tools","Tools","Workshop gear",B.Hx)
D.dL6=new C.lS("wallet","Cash & Wallet","Quick spending",B.k3)
D.bPQ=new A.a0(63395,"MaterialIcons",!1)
D.dL3=new C.lS("concrete","Concrete","Foundation work",D.bPQ)
D.dL_=new C.lS("blueprint","Blueprint","Plans & design",Ao.aoW)
D.a5W=w([D.dL0,D.dL7,D.dKY,D.dKX,D.dL5,D.dKU,D.dKZ,D.dKT,D.dL8,D.dKR,D.dKS,D.dL4,D.dKQ,D.dL2,D.dKW,D.dKV,D.dL1,D.dL6,D.dL3,D.dL_],A.as("O<lS>"))
D.drV=w([B.bv,B.bo],x.O)
D.dsG=w([B.iz,B.o8,B.dR],x.O)
D.ahq=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.aio=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bmE=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bem=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aCt=w([D.ahq,D.aio,D.bmE,D.bem],x.O)
D.dtR=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a66=w(["top","middle","bottom"],x.s)
D.dvg=w([B.cq,B.bm,B.d9],x.O)
D.aCM=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.b88=new A.ac(0,B.G,B.aT,B.I,14)
D.aCP=w([D.b88],x.V)
D.bly=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dvW=w([D.afW,D.Zr,D.bly],x.O)
D.dvX=w([B.b9,B.cV,B.e_],x.O)
D.ele=new A.q(24,-8)
D.elZ=new A.q(48,0)
D.ela=new A.q(24,6)
D.dxC=w([B.I,D.ele,D.elZ,D.ela],x.g)
D.dy0=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.ehO={top:0,middle:1,bottom:2}
D.dBd=new A.bv(D.ehO,["Top","Middle","Bottom"],x.r)
D.ehp={double:0,single:1,corners:2,none:3}
D.dBj=new A.bv(D.ehp,["Double line","One line","Corners","None"],x.r)
D.eiA={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dCO=new A.bv(D.eiA,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dD_=new A.bv(B.hX,[],A.as("bv<F,+(m,m)>"))
D.ehG={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.DE=new A.bv(D.ehG,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.as("bv<m,F>"))
D.dFp=new H.NF(32,null)
D.dFq=new H.NF(40,null)
D.dFr=new H.NF(46,null)
D.aKL=new C.atF(null)
D.ek5=new A.q(0,40)
D.ek6=new A.q(0,412)
D.ek8=new A.q(0,900)
D.eki=new A.q(0,-34)
D.ekj=new A.q(0,-46)
D.ekl=new A.q(0,-74)
D.eko=new A.q(100,300)
D.ekp=new A.q(10,14)
D.eks=new A.q(10,-10)
D.ekx=new A.q(10,-46)
D.eky=new A.q(10,-58)
D.ekz=new A.q(116,442)
D.ekB=new A.q(11,-1)
D.ekC=new A.q(11,-10)
D.ekD=new A.q(11,-21)
D.aL8=new A.q(11,-60)
D.ekK=new A.q(14,-2)
D.ekL=new A.q(150,520)
D.a85=new A.q(150,592)
D.ekO=new A.q(15,-15)
D.ekP=new A.q(16,-1)
D.ekT=new A.q(190,444)
D.ekW=new A.q(1,5)
D.el3=new A.q(21,-78)
D.el4=new A.q(222,615)
D.Jq=new A.q(225,300)
D.a88=new A.q(225,574)
D.eld=new A.q(24,-52)
D.elf=new A.q(250,210)
D.els=new A.q(2,-56)
D.aLm=new A.q(300,0)
D.elt=new A.q(300,440)
D.elw=new A.q(318,476)
D.elz=new A.q(324,144)
D.a8b=new A.q(332,150)
D.elB=new A.q(335,585)
D.elC=new A.q(338,140)
D.elD=new A.q(340,158)
D.elF=new A.q(34,-60)
D.E4=new A.q(36,-24)
D.elH=new A.q(372,470)
D.elI=new A.q(390,455)
D.elR=new A.q(42,468)
D.elS=new A.q(431,510)
D.elT=new A.q(431,520)
D.elU=new A.q(45,-92)
D.elV=new A.q(46,20)
D.elW=new A.q(46,-92)
D.elX=new A.q(46,-94)
D.elY=new A.q(47,-4)
D.em_=new A.q(48,-4)
D.em7=new A.q(4,-26)
D.emg=new A.q(60,455)
D.emn=new A.q(8,14)
D.emr=new A.q(8,-76)
D.emt=new A.q(95,575)
D.emu=new A.q(98,-24)
D.emw=new A.q(9,-2)
D.emx=new A.q(9,-58)
D.aLv=new A.q(9,-79)
D.emy=new A.q(9,-9)
D.ena=new A.q(16.5,8)
D.enc=new A.q(3.2,0)
D.ene=new A.q(-16.5,8)
D.enl=new A.q(16.5,2)
D.eno=new A.q(-3.2,0)
D.enx=new A.q(9.5,6)
D.enB=new A.q(-10,14)
D.enC=new A.q(-10,-12)
D.enD=new A.q(-10,-58)
D.enF=new A.q(-11,-1)
D.enG=new A.q(-11,-10)
D.enI=new A.q(-11,-60)
D.enJ=new A.q(-12,-14)
D.enK=new A.q(-12,-16)
D.enR=new A.q(-14,-2)
D.enU=new A.q(-15,-15)
D.enV=new A.q(-15,-3)
D.enX=new A.q(-16,-1)
D.eod=new A.q(-24,-52)
D.eok=new A.q(-2,-34)
D.eol=new A.q(-2,-38)
D.eon=new A.q(-30,-100)
D.a8c=new A.q(-36,-24)
D.eoy=new A.q(-4,-26)
D.eoA=new A.q(-4,-6)
D.eoK=new A.q(-8,-3)
D.eoL=new A.q(-8,-48)
D.eoO=new A.q(-9,-2)
D.eoQ=new A.q(-9,-58)
D.eoR=new A.q(-9,-79)
D.eoS=new A.q(-9,-9)
D.eoU=new A.q(-9.5,6)
D.ep7=new A.q(-16.5,2)
D.fKC=new A.B("Write a new book",null,B.hz,null,B.K,null,null,null,null,null,null,null)
D.epH=new A.D(B.ks,D.fKC,null)
D.fZg=new A.B("Tap to go on",null,B.vv,null,null,null,null,null,null,null,null,null)
D.eq2=new A.D(B.le,D.fZg,null)
D.aqO=new A.ae(B.hU,18,B.c,null,null,null)
D.fDK=new A.B("Add",null,B.lu,null,null,null,null,null,null,null,null,null)
D.ddt=w([D.aqO,B.r2,D.fDK],x.p)
D.f7G=new A.c6(B.aL,B.e,B.O,B.m,null,B.p,null,0,D.ddt,null)
D.eq5=new A.D(B.nz,D.f7G,null)
D.eq6=new A.D(E.al_,A9.XR,null)
D.fxm=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGT=new A.B("New Project",null,D.fxm,null,null,null,null,null,null,null,null,null)
D.dhL=w([D.aqO,B.ae,D.fGT],x.p)
D.f7J=new A.c6(B.aL,B.e,B.O,B.m,null,B.p,null,0,D.dhL,null)
D.eqk=new A.D(B.iu,D.f7J,null)
D.fJp=new A.B("Choose your header",null,A1.tv,null,null,null,null,null,null,null,null,null)
D.eqF=new A.D(B.hS,D.fJp,null)
D.bdB=new A.fk(2.2,null,null,null,null,B.cS,null,null,null,null)
D.fds=new A.a5(22,22,D.bdB,null)
D.bbG=new A.cc(B.A,null,null,D.fds,null)
D.eqK=new A.D(B.a_J,D.bbG,null)
D.bC7=new A.Q(14,2,14,6)
D.fXn=new A.B("The top of your book. Tap a design to see it.",null,Q.tw,null,null,null,null,null,null,null,null,null)
D.eqL=new A.D(D.bC7,D.fXn,null)
D.fIy=new A.B("\ud83c\udfc6 A new record!",null,B.fW,null,null,null,null,null,null,null,null,null)
D.eqN=new A.D(B.le,D.fIy,null)
D.esm=new A.iY(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.esp=new A.iY(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aM6=new A.iY(1,0.9607843137254902,0.48627450980392156,0)
D.Jz=new A.iY(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.Ai=new A.iY(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.esv=new A.iY(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.huO=new C.bj3(null)
D.bx_=new A.mB(D.huO,null,B.az,null,null)
D.aPK=new A.cL(0,0,0,0,null,null,D.bx_,null)
D.fDM=new A.B("\ud83c\udfc5",null,B.aav,null,null,null,null,null,null,null,null,null)
D.ewU=new A.cL(null,0,-34,null,null,null,D.fDM,null)
D.eEZ=new A.y("E","Sit by the fire again")
D.eKz=new A.y("C","Good Learner")
D.eNY=new A.y("D","Still Growing")
D.eSx=new A.y(-42,42)
D.eTS=new A.y("B","Faithful Listener")
D.eVQ=new A.y("A","Keeper of the Family")
D.eZ_=new A.b5(-17,0.7,0)
D.eZy=new A.b5(-8,0.95,1.3)
D.f_C=new A.b5(18,0.65,5.2)
D.f_E=new A.b5(0,1.15,2.6)
D.f_Y=new A.b5(9,0.9,3.9)
D.f1P=new A.cu([0,0,1,1])
D.aRd=new A.a2(0,0,520,160)
D.f4J=new A.a2(10,612,440,618)
D.f4K=new A.a2(10,612,440,628)
D.f4N=new A.a2(14,-64,34,-12)
D.f4Q=new A.a2(300,336,350,348)
D.a96=new A.a2(30,96,420,346)
D.f4R=new A.a2(30,-9,46,1)
D.f4S=new A.a2(4,2,11,14)
D.f4U=new A.a2(-8,-12.5,8,-7)
D.f4V=new A.a2(-16.5,-21,16.5,1)
D.f4W=new A.a2(60,342,88,348)
D.Us=new A.a2(66,-66,94,-36)
D.f4X=new A.a2(6,8,10,14)
D.f5_=new A.a2(95,343,115,348)
D.f50=new A.a2(-6.5,-74,6.5,-58)
D.f56=new A.a2(-100,-74,100,-12)
D.f57=new A.a2(-10,8,-6,14)
D.f58=new A.a2(-11,2,-4,14)
D.f59=new A.a2(-11,-70,11,-56)
D.f5g=new A.a2(-13,-24,13,-4)
D.f5m=new A.a2(-15,-21,15,0)
D.f5p=new A.a2(-16,-21,16,1)
D.f5q=new A.a2(-16,-21,16,2)
D.f5t=new A.a2(-16,-26,16,-6)
D.f5D=new A.a2(-230,-26,230,26)
D.f60=new A.a2(-38,-26,12,-6)
D.f64=new A.a2(-3,-70,3,-63)
D.f65=new A.a2(-44,-22,44,0)
D.f67=new A.a2(-46,-9,-30,1)
D.aRh=new A.a2(-80,-190,80,20)
D.f6e=new A.a2(-8,-26,40,-6)
D.f6f=new A.a2(-98,-80,92,-75)
D.f6g=new A.a2(-9,-15,9,-9)
D.fWW=new A.B("Let the AI write it from your tree",null,B.ix,null,B.K,null,null,null,null,null,null,null)
D.bKw=new A.dp(1,B.co,D.fWW,null)
D.da3=w([E.a3m,B.ae,D.bKw],x.p)
D.f7k=new A.c6(B.aL,B.e,B.O,B.m,null,B.p,null,0,D.da3,null)
D.fDp=new A.B("Save member",null,B.cg,null,null,null,null,null,null,null,null,null)
D.dpP=w([D.arF,B.ae,D.fDp],x.p)
D.f7u=new A.c6(B.aL,B.ba,B.i,B.m,null,B.p,null,0,D.dpP,null)
D.bW6=new A.ae(B.ib,14,B.b2,null,null,null)
D.fr1=new A.G(!0,B.b2,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHi=new A.B("Cashier",null,D.fr1,null,null,null,null,null,null,null,null,null)
D.dih=w([D.bW6,B.bn,D.fHi],x.p)
D.f7y=new A.c6(B.aL,B.e,B.O,B.m,null,B.p,null,0,D.dih,null)
D.fDq=new A.B("Transfer & settings",null,B.dg,null,null,null,null,null,null,null,null,null)
D.bIg=new A.by(1,B.bc,D.fDq,null)
D.d1r=w([D.arf,B.at,D.bIg],x.p)
D.f7z=new A.c6(B.aL,B.e,B.i,B.m,null,B.p,null,0,D.d1r,null)
D.fc8=new A.av(16,40)
D.fcd=new A.av(22,64)
D.fck=new A.av(280,88)
D.fd8=new A.a5(30,null,null,null)
D.fCv=new A.B("The teacher is writing\u2026",null,B.AE,null,null,null,null,null,null,null,null,null)
D.bcP=new A.cc(B.A,null,null,D.fCv,null)
D.hoJ=new A.bP("w",x.W)
D.fdy=new A.a5(null,56,D.bcP,D.hoJ)
D.fel=new A.hG(5,8,8,1,null)
D.fet=new A.hG(2,12,12,1.05,null)
D.fGZ=new A.B("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.ffb=new A.b1(D.fGZ,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fHd=new A.B("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aTu=new A.b1(D.fHd,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fPB=new A.B("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.ffF=new A.b1(D.fPB,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.h_j=new A.B("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.ffK=new A.b1(D.h_j,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fJn=new A.B("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.ffR=new A.b1(D.fJn,null,null,null,null,null,null,null,null,null,null,null,null,B.h0,!1,null,null,null,B.t,null)
D.fXA=new A.B("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aTy=new A.b1(D.fXA,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fJl=new A.B("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fgg=new A.b1(D.fJl,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fE2=new A.B("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fgi=new A.b1(D.fE2,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fN3=new A.B("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fgo=new A.b1(D.fN3,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.h03=new A.B("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fh3=new A.b1(D.h03,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fVQ=new A.B("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fhs=new A.b1(D.fVQ,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.h_n=new A.B("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fhv=new A.b1(D.h_n,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fRg=new A.B("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fhx=new A.b1(D.fRg,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fLf=new A.B("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fhy=new A.b1(D.fLf,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fLg=new A.B("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fiy=new A.b1(D.fLg,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fH0=new A.B("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fiQ=new A.b1(D.fH0,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fJ_=new A.B("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fj9=new A.b1(D.fJ_,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fQI=new A.B("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fjp=new A.b1(D.fQI,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fM4=new A.B("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fjq=new A.b1(D.fM4,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fw3=new A.G(!0,B.bF,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl1=new A.en("\u2665",null,null,B.cH,null,null,null,null,null,null,D.fw3)
D.fti=new A.G(!0,B.aQ,null,null,null,null,28,B.V,B.cF,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flh=new A.en("Today: how well do you know the family?",null,null,B.cH,null,null,null,null,null,null,D.fti)
D.fly=new A.G(!0,B.q0,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmF=new A.G(!0,D.kM,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn4=new A.G(!0,D.kM,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn8=new A.G(!0,B.cN,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnh=new A.G(!0,D.fw,null,null,null,null,15,B.V,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fns=new A.G(!0,D.fw,null,null,null,null,13,B.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnM=new A.t2(!0,B.th,null,null,null,null,B.dz,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo0=new A.G(!0,B.cN,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo3=new A.G(!0,D.kM,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo4=new A.G(!0,B.cN,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo9=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foc=new A.G(!0,B.cN,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foJ=new A.G(!0,B.b2,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foK=new A.G(!0,B.ad,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foM=new A.G(!0,B.aQ,null,null,null,null,15.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpd=new A.G(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUK=new A.G(!0,B.aS,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUM=new A.G(!0,D.lB,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpC=new A.G(!0,B.cN,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aaA=new A.t2(!0,B.TY,null,null,null,null,B.dz,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.Vn=new A.G(!0,B.cN,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpM=new A.G(!0,B.R,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpR=new A.G(!0,D.fw,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqe=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frm=new A.G(!0,D.fw,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUX=new A.G(!0,D.fw,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frF=new A.G(!0,B.ad,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frQ=new A.G(!0,D.fw,null,null,null,null,null,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frS=new A.G(!0,null,null,null,null,null,8,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frY=new A.G(!0,L.iY,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aV0=new A.G(!0,D.fw,null,null,null,null,14.5,B.V,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsT=new A.G(!0,D.fw,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftb=new A.G(!0,D.fw,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftd=new A.G(!0,B.R,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftf=new A.G(!0,B.cN,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftC=new A.G(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A8.Is,null,null,null)
D.aVf=new A.G(!0,D.fw,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu_=new A.G(!0,B.R,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ful=new A.G(!0,B.ff,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuJ=new A.G(!0,B.bQ,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuN=new A.G(!0,B.bC,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuZ=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv1=new A.G(!0,D.fw,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv9=new A.G(!0,D.G2,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvi=new A.G(!0,B.b2,null,null,null,null,13,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvI=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvO=new A.G(!0,B.ad,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Dh,null,null,null)
D.fwd=new A.G(!0,B.cN,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwm=new A.G(!0,B.cS,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwz=new A.G(!0,D.lC,null,null,null,null,13,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVz=new A.G(!0,D.fw,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.KE=new A.G(!0,B.cN,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVB=new A.G(!0,B.cN,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Dh,null,null,null)
D.fwT=new A.G(!0,B.bQ,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwX=new A.G(!0,G.nh,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxk=new A.G(!0,B.b2,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxB=new A.G(!0,D.fw,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxY=new A.G(!0,B.c,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyl=new A.G(!0,D.fw,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyO=new A.G(!0,D.fw,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyU=new A.G(!0,B.am,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz2=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ab3=new A.G(!0,B.am,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ab5=new A.G(!0,D.lB,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAL=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fB2=new A.G(!0,B.aQ,null,null,null,null,27,B.V,B.cF,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBa=new A.G(!0,L.iY,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBi=new A.G(!0,L.iY,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBM=new A.B("Time:",null,B.hh,null,null,null,null,null,null,null,null,null)
D.fC7=new A.B("\ud83c\udfae",null,I.aaV,null,null,null,null,null,null,null,null,null)
D.fC8=new A.B("Themes",null,B.pJ,null,null,null,null,null,null,null,null,null)
D.fCD=new A.B("\ud83c\udfb2",null,B.xg,null,null,null,null,null,null,null,null,null)
D.fCH=new A.B("Delete this game?",null,B.ix,null,null,null,null,null,null,null,null,null)
D.fCO=new A.B("Add Item",null,B.cg,null,null,null,null,null,null,null,null,null)
D.frA=new A.G(!0,B.R,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDe=new A.B("Debt receipt",null,D.frA,null,B.K,null,null,null,null,null,null,null)
D.aVP=new A.G(!0,B.am,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDx=new A.B("Person who owes",null,D.aVP,null,null,null,null,null,null,null,null,null)
D.fEv=new A.B("Notes",null,B.aaI,null,null,null,null,null,null,null,null,null)
D.fEW=new A.B("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fqv=new A.G(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEZ=new A.B("Share",null,D.fqv,null,null,null,null,null,null,null,null,null)
D.fFV=new A.B("Move your family trees",null,K.ab1,null,null,null,null,null,null,null,null,null)
D.fGA=new A.B("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fHc=new A.B("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fHA=new A.B("SAVE",null,D.KE,null,null,null,null,null,null,null,null,null)
D.fIc=new A.B("The round button is the right answer.",null,Q.ED,null,null,null,null,null,null,null,null,null)
D.fIx=new A.B("Remove this book?",null,B.fW,null,null,null,null,null,null,null,null,null)
D.fxh=new A.G(!0,B.cN,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Dh,null,null,null)
D.fJ4=new A.B("Fireside Stories",null,D.fxh,null,null,null,null,null,null,null,null,null)
D.aWj=new A.B("Download",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fJM=new A.B("What should the AI do?",null,B.dg,null,null,null,null,null,null,null,null,null)
D.fq9=new A.G(!0,D.lB,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fK0=new A.B("REPORT CARD",null,D.fq9,null,null,null,null,null,null,null,null,null)
D.fKJ=new A.B("Calabash Catch",null,B.KH,null,null,null,null,null,null,null,null,null)
D.fLb=new A.B("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fLC=new A.B("\ud83c\udfe1",null,B.EC,null,null,null,null,null,null,null,null,null)
D.fMj=new A.B("Ribbon bookmark",null,B.jt,null,null,null,null,null,null,null,null,null)
D.fyN=new A.G(!0,B.b2,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMN=new A.B("NGMY.ORG",null,D.fyN,null,B.K,null,null,null,null,null,null,null)
D.fO6=new A.B("Scan family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fv2=new A.G(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOR=new A.B("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fv2,null,B.K,null,null,null,null,null,null,null)
D.fQ4=new A.B("Delete",null,B.Vg,null,null,null,null,null,null,null,null,null)
D.fQ5=new A.B("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fQc=new A.B("Thumbnail",null,B.pJ,null,null,null,null,null,null,null,null,null)
D.fQO=new A.B("Save the cover",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fQT=new A.B("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.xi,null,B.K,null,null,null,null,null,null,null)
D.fRh=new A.B("Your photos",null,B.pJ,null,null,null,null,null,null,null,null,null)
D.fRw=new A.B("Create Project",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fRT=new A.B("\u2b50 stars",null,B.Vu,null,null,null,null,null,null,null,null,null)
D.fS6=new A.B("Design your cover",null,A1.tv,null,null,null,null,null,null,null,null,null)
D.fSc=new A.B("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fSf=new A.B("PICTURE",null,M.vz,null,null,null,null,null,null,null,null,null)
D.fSh=new A.B("\ud83c\udfaf",null,D.VJ,null,null,null,null,null,null,null,null,null)
D.fSC=new A.B("Paid",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fSE=new A.B("You can undo it right after.",null,Q.ED,null,null,null,null,null,null,null,null,null)
D.fTa=new A.B("Print",null,B.vw,null,null,null,null,null,null,null,null,null)
D.fTz=new A.B("Amount owed",null,D.aVP,null,null,null,null,null,null,null,null,null)
D.fTO=new A.B("Got it",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fUp=new A.B("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fUs=new A.B("Add to budget",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fUU=new A.B("Debtor signature",null,B.aaI,null,null,null,null,null,null,null,null,null)
D.fV3=new A.B("Change icon",null,B.aaH,null,null,null,null,null,null,null,null,null)
D.fVR=new A.B("MADE BY THE SYSTEM, FROM YOUR TREE",null,T.ty,null,null,null,null,null,null,null,null,null)
D.fWi=new A.B("Family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fWo=new A.B("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.VI,null,null,null,null,null,null,null,null,null)
D.fWM=new A.B("Download",null,B.vw,null,null,null,null,null,null,null,null,null)
D.fWN=new A.B("The person who planted this tree has not made a game yet.",null,B.xf,null,null,null,null,null,null,null,null,null)
D.fWR=new A.B("Change",null,B.pJ,null,null,null,null,null,null,null,null,null)
D.fXG=new A.B("Clear all",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fXJ=new A.B("WHAT SHOULD IT CHANGE?",null,M.vz,null,null,null,null,null,null,null,null,null)
D.fYi=new A.B("COLOUR",null,M.vz,null,null,null,null,null,null,null,null,null)
D.fYw=new A.B("Do it",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fYz=new A.B("Create Tree",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fYI=new A.B("Give me another clue",null,D.KE,null,null,null,null,null,null,null,null,null)
D.fZC=new A.B("Create Family Tree",null,B.f8,null,null,null,null,null,null,null,null,null)
D.fZM=new A.B("THE TEACHER EXPLAINS THESE",null,T.ty,null,null,null,null,null,null,null,null,null)
D.flx=new A.G(!0,E.kn,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZS=new A.B("Write the first page myself",null,D.flx,null,null,null,null,null,null,null,null,null)
D.h_q=new A.B("Use this header",null,B.cB,null,null,null,null,null,null,null,null,null)
D.h_x=new A.B("Create Project",null,E.aVw,null,null,null,null,null,null,null,null,null)
D.hq1=new C.acg(1,"header")
D.ac6=new C.acg(2,"projects")
D.hq2=new C.acg(3,"cashier")
D.ac7=new C.acg(4,"familyTree")
D.hDe=new C.cFz(0,"start")
D.hDf=new C.cFA(0,"start")
D.hqq=new C.Zr(null)
D.hrr=new C.ZU(null)
D.dCX=new A.bv(B.hX,[],A.as("bv<m,Gs>"))
D.dkX=w([],x.dE)
D.dkY=w([],x.M)
D.hrY=new C.bgf(D.dCX,D.dkX,D.dkY,0,0,null,null)
D.b_H=new C.a_K(0,"intro")
D.b_I=new C.a_K(1,"countdown")
D.acl=new C.a_K(2,"ask")
D.WB=new C.a_K(3,"reveal")
D.b_J=new C.a_K(4,"end")
D.huQ=new C.ta(F.Gb,D.lC,B.cN,F.lD,5,!1,!1,!1,0,null)
D.huR=new C.ta(F.Gb,B.ep,B.cN,B.bP,2,!0,!0,!1,2,B.cN)
D.huS=new C.ta(B.og,B.cS,B.cN,F.lD,2,!0,!1,!1,2,B.ay)
D.huT=new C.ta(F.Gb,B.dH,B.cN,F.lD,5,!1,!1,!1,1,null)
D.huU=new C.ta(F.ZH,D.aio,B.cN,F.lD,4,!0,!1,!0,0,null)
D.b_M=new C.ta(F.ZH,B.dJ,B.cN,F.lD,3,!0,!1,!0,2,null)
D.b_N=new C.ta(F.mL,D.lC,B.c,F.lD,0,!1,!1,!0,0,null)
D.b_O=new C.ta(B.og,B.aE,B.cN,B.bP,2,!0,!0,!1,2,B.dJ)
D.b_P=new C.ta(B.og,G.nh,B.i7,F.lD,5,!1,!1,!0,3,null)
D.huV=new C.ta(B.og,B.dJ,B.cN,F.lD,0,!0,!1,!1,0,B.aE)
D.b_Q=new C.ta(F.Gb,B.ep,B.cN,B.bP,1,!1,!0,!1,1,null)
D.b_R=new C.ta(F.FK,B.ay,B.aE,F.lD,4,!0,!1,!0,2,null)
D.huW=new C.ta(F.mL,B.ay,B.ep,F.lD,3,!0,!1,!1,0,null)
D.huX=new C.ta(B.og,B.dH,B.cN,B.bP,1,!1,!0,!1,1,null)
D.huY=new C.ta(F.FK,D.ahq,B.c,F.lD,5,!1,!1,!0,0,null)
D.hvB=new C.a0h(null)
D.hDn=new C.afD(0,"still")
D.WY=new C.afD(1,"walk")
D.b0h=new C.afD(2,"pound")
D.b0i=new C.afD(3,"drum")
D.hz5=new C.a1z(0,"greet")
D.b0j=new C.a1z(1,"teach")
D.acF=new C.a1z(2,"ask")
D.hz6=new C.a1z(3,"feedback")
D.b0k=new C.a1z(4,"end")
D.X2=new C.a1S(0,"intro")
D.X3=new C.a1S(1,"asking")
D.B0=new C.a1S(2,"reacting")
D.acP=new C.a1S(3,"driving")
D.acQ=new C.a1S(4,"arrived")
D.acT=new C.aL6(0,"projects")
D.b0I=new C.aL6(1,"cashier")
D.hB7=new C.aL6(2,"familyTree")})()};
(a=>{a["OJsTGTZjLflNXpYIZyQTCZwx190="]=a.current})($__dart_deferred_initializers__);