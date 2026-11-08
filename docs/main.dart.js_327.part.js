((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A9,P,A_,S,Aa,I,H,E,T,Q,O,Ab,Ac,A0,Ad,Ae,R,L,A1,A2,Af,A3,A4,A5,Ag,Ah,A6,Ai,Aj,A7,Ak,A8,Al,Am,U,N,An,Ao,Ap,V,Aq,W,X,G,Ar,K,F,Y,C={
bDu(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bDu=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vv(null,""),$async$bDu)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.W(y.z)
t=A.nb(b1)
s=A.c2(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.ds(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cU(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.M)(h),++d){a0=h[d]
f.push(A.G(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.X.ap(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.r1(t,a1,B.hM,"book",E.FQ),$async$bDu)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.QK(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.W(l!=null&&A.Lj(l)?y.k:y.y)
for(j=J.a5(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a2(r.a(j.h(a2,a7)),q,p):B.cz
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
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=H.a2B(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDu,v)},
ah7(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ah7=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vv(null,""),$async$ah7)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.W(y.z)
t=A.nb(b6)
s=x.S
r=A.d1(c1,0,A.dB(4,"count",s),A.T(c1).c)
q=H.a2o(new A.N(r,new C.fDt(),r.$ti.k("N<ak.E,n>")).aH(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fDs(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.X.ap(b7,null)+"\nAllowed values: style one of "+B.d.aH(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ah7)
case 6:l=c5
k=H.QK(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.aoB(s,D.dxd,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
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
return A.b(m.$1(f+B.X.ap(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ah7)
case 10:l=c5
k=l==null?null:H.QK(l)
if(k==null)throw A.W(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.dc(a8,d),a5=J.aV(a2.a),a2=a2.$ti,a7=new A.l6(a5,a2.k("l6<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gR(a5))
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
p=A.cF(new A.bc(h,s),new C.fDu(),s.k("K.E"),p)
p=H.a2o(A.pm(p,3,A.a6(p).k("K.E")).aH(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cv<1>")
b4=A.C(new A.cv(h,s),s.k("K.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.M)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a2B(s,b9),$async$ah7)
case 13:b5=c5
for(s=J.a5(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.aoB(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ah7,v)},
hta(d,e,f){return A.cg(null,B.w.j(0.65),!1,null,new C.fMU(e,f),d,null,!0,!0,x.g2)},
aoB:function aoB(d,e,f){this.a=d
this.b=e
this.c=f},
fDt:function fDt(){},
fDs:function fDs(d){this.a=d},
fDu:function fDu(){},
fMU:function fMU(d,e){this.a=d
this.b=e},
bBk(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bBk=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b5(b1,new C.frz())){u=null
w=1
break}t=B.d.d5(b1,new C.frA())
s=$.S()
r=new A.oW()
q=A.z4(r,D.aOL)
p=A.I()
p.r=B.c.gp(0)
q.aO(D.aOL,p)
o=A.I()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.a9
o.d=B.bB
o.e=B.dS
n=new C.frF(t)
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
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.M)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.aX(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bv(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.aq(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bv(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aG(a3,o)}else{p=A.a([],x.v)
a3=new A.aF(s.r,B.ag,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.M)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.aX(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bv(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.aq(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bv(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aG(a3,o)}w=4
return A.b(r.nd().x6(520,160),$async$bBk)
case 4:w=3
return A.b(b3.hr(B.h8),$async$bBk)
case 3:b0=b3
u=b0==null?null:J.eQ(B.dG.gaR(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBk,v)},
fB9(d){return C.i75(d)},
i75(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fB9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bh3()
n=d.x!=null&&d.za(null).length===0
if(d.x!=null)t=n?D.zP:D.IY
else t=d.gU2()?D.IY:D.aJH
w=3
return A.b(C.bBk(d.ax),$async$fB9)
case 3:s=f
p.a=null
if(s!=null)p.a=A.anj(s)
r=A.a4w(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aJH}else{p.c=C.wW(q,!0)
p.b=n?D.zP:D.IY}r.a3r(A.fXj(new C.fBb(p,d,new C.fBc(),t,n,o),null,D.bBz,B.wF))
u=r.jv(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fB9,v)},
fHO(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fHO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fB9(d),$async$fHO)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.aq(q,0,40)
u=Ae.GS(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fHO,v)},
frz:function frz(){},
frA:function frA(){},
frF:function frF(d){this.a=d},
fBc:function fBc(){},
fBb:function fBb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fBa:function fBa(){},
fNm(d,e){var w=0,v=A.j(x.H)
var $async$fNm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,B.w.j(0.55),!0,null,new C.fNq(new A.cA(null,x.eF),e),d,null,!0,!0,x.H),$async$fNm)
case 2:return A.h(null,v)}})
return A.i($async$fNm,v)},
bDX(d,e,f,g){return C.ieG(d,e,f,g)},
ieG(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bDX=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gak(e.split(",")):e
r=B.cF.aM(t)}catch(q){r=null}if(r==null||r.length===0){d.K(x.q).f.T(D.fa9)
w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.fNi(g,r,f),d,null,!0,!0,x.H),$async$bDX)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bDX,v)},
fNr(d,e){var w=0,v=A.j(x.H)
var $async$fNr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,null,!0,null,new C.fNu(new A.cA(null,x.eF),e),d,null,!0,!0,x.H),$async$fNr)
case 2:return A.h(null,v)}})
return A.i($async$fNr,v)},
aZ5:function aZ5(d,e){this.c=d
this.a=e},
c5g:function c5g(){},
bbh:function bbh(d,e){this.b=d
this.a=e},
fNq:function fNq(d,e){this.a=d
this.b=e},
fNn:function fNn(d){this.a=d},
fNo:function fNo(d,e,f){this.a=d
this.b=e
this.c=f},
fNp:function fNp(d,e){this.a=d
this.b=e},
fNi:function fNi(d,e,f){this.a=d
this.b=e
this.c=f},
fNg:function fNg(d){this.a=d},
fNh:function fNh(d,e,f){this.a=d
this.b=e
this.c=f},
fNu:function fNu(d,e){this.a=d
this.b=e},
fNs:function fNs(d){this.a=d},
fNt:function fNt(d,e,f){this.a=d
this.b=e
this.c=f},
fvS(d,e){var w=0,v=A.j(x.y),u,t
var $async$fvS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a29(d),$async$fvS)
case 3:t=g
J.ny(t,new C.fvT(e))
u=A.ahM(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fvS,v)},
fvT:function fvT(d){this.a=d},
aoN:function aoN(d,e,f){this.c=d
this.d=e
this.a=f},
aDh:function aDh(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dKe:function dKe(d,e){this.a=d
this.b=e},
dK_:function dK_(d,e){this.a=d
this.b=e},
dK2:function dK2(d,e,f){this.a=d
this.b=e
this.c=f},
dK1:function dK1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dK0:function dK0(d,e){this.a=d
this.b=e},
dK3:function dK3(d,e){this.a=d
this.b=e},
dJY:function dJY(){},
dJZ:function dJZ(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dJX:function dJX(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dJI:function dJI(d){this.a=d},
dJJ:function dJJ(d,e,f){this.a=d
this.b=e
this.c=f},
dJK:function dJK(d,e){this.a=d
this.b=e},
dJH:function dJH(d){this.a=d},
dJP:function dJP(d,e){this.a=d
this.b=e},
dJG:function dJG(d){this.a=d},
dJQ:function dJQ(d,e,f){this.a=d
this.b=e
this.c=f},
dJR:function dJR(d,e,f){this.a=d
this.b=e
this.c=f},
dJF:function dJF(d,e){this.a=d
this.b=e},
dJS:function dJS(d,e,f){this.a=d
this.b=e
this.c=f},
dJE:function dJE(d,e){this.a=d
this.b=e},
dJT:function dJT(d,e){this.a=d
this.b=e},
dJD:function dJD(d){this.a=d},
dJU:function dJU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJB:function dJB(){},
dJv:function dJv(d){this.a=d},
dJw:function dJw(d){this.a=d},
dJC:function dJC(d,e){this.a=d
this.b=e},
dJV:function dJV(d,e){this.a=d
this.b=e},
dJA:function dJA(d){this.a=d},
dJW:function dJW(d){this.a=d},
dJz:function dJz(){},
dJL:function dJL(d,e){this.a=d
this.b=e},
dJy:function dJy(d){this.a=d},
dJM:function dJM(d,e,f){this.a=d
this.b=e
this.c=f},
dJx:function dJx(d,e){this.a=d
this.b=e},
dJu:function dJu(d,e){this.a=d
this.b=e},
dJN:function dJN(d){this.a=d},
dJO:function dJO(d,e,f){this.a=d
this.b=e
this.c=f},
dKh:function dKh(){},
dKi:function dKi(d,e){this.a=d
this.b=e},
dKf:function dKf(d){this.a=d},
dKg:function dKg(d){this.a=d},
dKb:function dKb(d,e){this.a=d
this.b=e},
dKc:function dKc(d){this.a=d},
dK4:function dK4(d,e,f){this.a=d
this.b=e
this.c=f},
dK5:function dK5(d,e,f){this.a=d
this.b=e
this.c=f},
dK6:function dK6(d,e,f){this.a=d
this.b=e
this.c=f},
dK7:function dK7(d,e,f){this.a=d
this.b=e
this.c=f},
dK8:function dK8(d,e,f){this.a=d
this.b=e
this.c=f},
dK9:function dK9(d,e,f){this.a=d
this.b=e
this.c=f},
dKa:function dKa(d,e,f){this.a=d
this.b=e
this.c=f},
dKj:function dKj(){},
dKk:function dKk(){},
dKl:function dKl(){},
dKm:function dKm(d){this.a=d},
dKd:function dKd(d,e){this.a=d
this.b=e},
hpe(d){return B.d.dN(D.a3j,new C.fww(d),new C.fwx())},
us:function us(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fww:function fww(d){this.a=d},
fwx:function fwx(){},
akR:function akR(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aUQ:function aUQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
T2:function T2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beT:function beT(){this.d=$
this.c=this.a=null},
dan:function dan(d,e){this.a=d
this.b=e},
dal:function dal(d,e){this.a=d
this.b=e},
dam:function dam(){},
dao:function dao(d,e){this.a=d
this.b=e},
h9P(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.nj(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
L5(d,e){return C.i5I(d,e)},
i5I(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$L5=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$L5)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.X.aN(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.dc(p,x.f)
o=A.cF(o,new C.fyM(),o.$ti.k("K.E"),x.B)
n=A.a6(o).k("Z<K.E>")
o=A.C(new A.Z(o,new C.fyN(),n),n.k("K.E"))
B.d.aW(o,new C.fyO())
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
return A.i($async$L5,v)},
B7(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$B7=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$B7)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fM_(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.ar("String","ngmy_family_book_v1_"+s+"_"+e,B.X.ap(r,null)),$async$B7)
case 4:case 1:return A.h(u,v)}})
return A.i($async$B7,v)},
aQV(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aQV=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.L5(d,e),$async$aQV)
case 2:u=h
t=J.cD(u)
s=t.bg(u,new C.fUk(f))
if(s===-1)t.c8(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.B7(d,e,u),$async$aQV)
case 3:return A.h(null,v)}})
return A.i($async$aQV,v)},
bBN(d,e,f){var w=0,v=A.j(x.H),u
var $async$bBN=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.L5(d,e),$async$bBN)
case 2:u=h
J.ny(u,new C.fvK(f))
w=3
return A.b(C.B7(d,e,u),$async$bBN)
case 3:return A.h(null,v)}})
return A.i($async$bBN,v)},
bC0(d,e){return C.i5H(d,e)},
i5H(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bC0=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bC0)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.ND
w=1
break}p=B.X.aN(0,q,null)
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
if(D.D_.aj(0,o.h(0,"foil")))j=A.cP(o.h(0,"foil"))
else j=J.A(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aK(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.E(i==null?25:i,18,36)
h=B.d.t(D.a4U,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.t(D.a4h,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.t(D.a4d,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.A(o.h(0,"ribbon"),!1)
o=B.d.t(D.d_S,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
o=new C.HS(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.ND
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.ND
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bC0,v)},
RQ(d,e,f){return C.iec(d,e,f)},
iec(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$RQ=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$RQ)
case 7:r=h
w=8
return A.b(r.ar("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.X.ap(f.ag(),null)),$async$RQ)
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
return A.i($async$RQ,v)},
Ri(d,e){return C.i5J(d,e)},
i5J(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Ri=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Ri)
case 7:r=g
q=r.tv("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.L5(d,e),$async$Ri)
case 8:if(!j.cK(g)){n=B.a.i(d.toLowerCase())
m=J.lz(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Ri)
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
return A.i($async$Ri,v)},
agr(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$agr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ri(d,e),$async$agr)
case 3:s=g
r=J.a5(s)
if(r.gL(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gL(s):"main"
r.M(s,t)
w=5
return A.b(A.az(),$async$agr)
case 5:w=4
return A.b(g.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$agr)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agr,v)},
a2N(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a2N=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Ri(d,e),$async$a2N)
case 2:s=h
J.hz(s,f)
w=3
return A.b(A.az(),$async$a2N)
case 3:u=h
w=4
return A.b(u.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a2N)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2N)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2N)
case 6:return A.h(null,v)}})
return A.i($async$a2N,v)},
nj:function nj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fyM:function fyM(){},
fyN:function fyN(){},
fyO:function fyO(){},
fM_:function fM_(){},
fUk:function fUk(d){this.a=d},
fvK:function fvK(d){this.a=d},
HS:function HS(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bOP:function bOP(d){this.a=d},
iev(d,e,f,g,h,i,j){return A.a4(d,!1).cg(A.e_(new C.fMy(j,i,f,e,h,g),!0,null,x.H))},
Re(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Re=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ri(h,g),$async$Re)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.K(x.q).f.T(D.aQS)
u=!1
w=1
break}w=4
return A.b(C.hta(d,f,e),$async$Re)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.agr(h,g),$async$Re)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nj(""+(q+n),l,B.a.i(m.b),new A.V(Date.now(),0,!1)))}w=6
return A.b(C.B7(h,r,p),$async$Re)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.RQ(h,r,new C.HS("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Re)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Re,v)},
fMy:function fMy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Zy:function Zy(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aAh:function aAh(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
db2:function db2(d){this.a=d},
db1:function db1(d,e){this.a=d
this.b=e},
daR:function daR(d,e){this.a=d
this.b=e},
daO:function daO(d,e){this.a=d
this.b=e},
dap:function dap(d){this.a=d},
daq:function daq(d,e){this.a=d
this.b=e},
daS:function daS(d){this.a=d},
day:function day(d){this.a=d},
daw:function daw(d){this.a=d},
dax:function dax(d){this.a=d},
daz:function daz(d){this.a=d},
daP:function daP(d){this.a=d},
daQ:function daQ(){},
dau:function dau(d){this.a=d},
dav:function dav(d,e){this.a=d
this.b=e},
daA:function daA(d){this.a=d},
daB:function daB(d,e){this.a=d
this.b=e},
db0:function db0(d){this.a=d},
db_:function db_(d,e){this.a=d
this.b=e},
daZ:function daZ(d){this.a=d},
daL:function daL(d){this.a=d},
daK:function daK(d){this.a=d},
daM:function daM(d){this.a=d},
dar:function dar(d,e){this.a=d
this.b=e},
daN:function daN(d,e){this.a=d
this.b=e},
daE:function daE(d){this.a=d},
daF:function daF(d){this.a=d},
daD:function daD(){},
daG:function daG(d){this.a=d},
daH:function daH(d){this.a=d},
daI:function daI(d,e){this.a=d
this.b=e},
daJ:function daJ(d,e,f){this.a=d
this.b=e
this.c=f},
daC:function daC(d,e){this.a=d
this.b=e},
daU:function daU(d){this.a=d},
daT:function daT(){},
daV:function daV(d){this.a=d},
daW:function daW(d){this.a=d},
daX:function daX(d){this.a=d},
daY:function daY(d,e){this.a=d
this.b=e},
das:function das(d){this.a=d},
dat:function dat(d){this.a=d},
ZC:function ZC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfg:function bfg(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dcN:function dcN(d){this.a=d},
dcO:function dcO(d){this.a=d},
dcM:function dcM(d){this.a=d},
dcP:function dcP(d){this.a=d},
dcL:function dcL(d){this.a=d},
dcQ:function dcQ(d){this.a=d},
dcK:function dcK(d){this.a=d},
dcR:function dcR(d,e){this.a=d
this.b=e},
dcJ:function dcJ(d,e){this.a=d
this.b=e},
dcS:function dcS(d,e){this.a=d
this.b=e},
ZA:function ZA(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aeO:function aeO(d,e,f){this.a=d
this.b=e
this.c=f},
aAk:function aAk(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dbh:function dbh(d,e){this.a=d
this.b=e},
dbg:function dbg(d,e){this.a=d
this.b=e},
dbl:function dbl(d){this.a=d},
dbk:function dbk(d,e){this.a=d
this.b=e},
dbi:function dbi(d){this.a=d},
dbj:function dbj(d){this.a=d},
dbm:function dbm(d){this.a=d},
dbn:function dbn(d){this.a=d},
dbf:function dbf(d,e){this.a=d
this.b=e},
dbe:function dbe(d,e){this.a=d
this.b=e},
Kc:function Kc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
YQ:function YQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cJN:function cJN(d){this.a=d},
cJO:function cJO(){},
cJP:function cJP(d){this.a=d},
bcu:function bcu(d,e,f){this.b=d
this.c=e
this.a=f},
bcl:function bcl(d,e){this.b=d
this.a=e},
ut:function ut(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Z8:function Z8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcs:function bcs(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d2m:function d2m(d,e,f){this.a=d
this.b=e
this.c=f},
d2l:function d2l(d,e){this.a=d
this.b=e},
d2L:function d2L(d){this.a=d},
d2y:function d2y(){},
d2M:function d2M(d){this.a=d},
d2x:function d2x(){},
d2N:function d2N(d,e){this.a=d
this.b=e},
d2w:function d2w(d,e){this.a=d
this.b=e},
d2O:function d2O(d,e){this.a=d
this.b=e},
d2v:function d2v(d,e){this.a=d
this.b=e},
d2P:function d2P(d){this.a=d},
d2u:function d2u(){},
d2Q:function d2Q(d,e){this.a=d
this.b=e},
d2t:function d2t(d,e){this.a=d
this.b=e},
d2R:function d2R(d){this.a=d},
d2G:function d2G(d,e){this.a=d
this.b=e},
d2S:function d2S(d){this.a=d},
d2T:function d2T(d){this.a=d},
d2V:function d2V(d){this.a=d},
d2W:function d2W(d){this.a=d},
d2F:function d2F(d,e){this.a=d
this.b=e},
d2X:function d2X(d,e){this.a=d
this.b=e},
aHh:function aHh(d){this.a=d},
bhM:function bhM(d){this.a=d},
baF:function baF(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
akS:function akS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a0P:function a0P(d,e){this.a=d
this.b=e},
akT:function akT(d,e,f,g,h,i){var _=this
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
_.a9$=i
_.c=_.a=null},
bOZ:function bOZ(d){this.a=d},
bOT:function bOT(d){this.a=d},
bOS:function bOS(d,e){this.a=d
this.b=e},
bP1:function bP1(d){this.a=d},
bOU:function bOU(d){this.a=d},
bOV:function bOV(d){this.a=d},
bOY:function bOY(d){this.a=d},
bOX:function bOX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bP_:function bP_(d,e){this.a=d
this.b=e},
bP0:function bP0(){},
bOW:function bOW(d){this.a=d},
bOQ:function bOQ(d,e){this.a=d
this.b=e},
bOR:function bOR(d){this.a=d},
bn9:function bn9(d,e){this.b=d
this.a=e},
aAi:function aAi(){},
it(d,e){var w
$.S()
w=A.I()
w.b=B.a9
w.c=e
w.r=d.gp(0)
w.d=B.bB
w.e=B.dS
return w},
bBm(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.a
J.bl(j.save())
j.translate(e.a,e.b)
d.p_(0,a0?-f:f,f)
w=A.bJ(B.i4,8,36)
v=B.w.j(0.3)
u=$.S()
t=A.I()
t.r=v.gp(0)
d.dO(w,t)
w=a1===D.VZ
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ar(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.bo(D.ei4,new A.t(-4+v,-2),C.it(q,5))
d.bo(D.efF,new A.t(4-v,-2),C.it(q,5))}else{t=A.bJ(B.IO,14,40)
p=A.I()
p.r=v.gp(0)
d.dO(t,p)}v=u.r
u=x.v
o=new A.aF(v,B.ag,k,k,A.a([],u))
t=-64-r
o.D(new A.aX(-11,t))
o.D(new A.c3(-15,-40,-14,a3?-12:-18))
o.D(new A.aq(14,a3?-12:-18))
o.D(new A.c3(15,-40,11,t))
o.D(new A.br())
t=A.I()
t.r=w.gp(0)
d.aG(o,t)
u=new A.aF(v,B.ag,k,k,A.a([],u))
u.D(new A.aX(-12,-50-r))
v=-46-r
u.D(new A.aq(12,v))
u.D(new A.aq(12.5,-42-r))
u.D(new A.aq(-12.5,v))
u.D(new A.br())
v=A.I()
v.r=h.c.gp(0)
d.aG(u,v)
A:{if(D.ab8===a1){w=Math.sin(g*3.4)
break A}if(D.ab9===a1){w=Math.sin(g*7.5)
break A}w=s
break A}if(a1===D.ab8){n=-52+w*14
d.bo(new A.t(10,n-22),new A.t(10,n+44),C.it(G.F3,3.4))
d.bo(D.eil,new A.t(9,n),C.it(q,4))
d.bo(D.eg4,new A.t(10,n),C.it(q,4))}else if(a1===D.ab9){d.bo(D.eha,new A.t(-8,-26-Math.max(0,w)*6),C.it(q,4))
d.bo(D.ee8,new A.t(8,-26-Math.max(0,-w)*6),C.it(q,4))}else{w=s*3
v=-38-r
d.bo(D.ehe,new A.t(-12-w,v),C.it(q,4))
d.bo(D.aIK,new A.t(12+w,v),C.it(q,4))}w=A.I()
w.r=q.gp(0)
d.aO(D.eYH,w)
m=new A.t(0,-77-r)
w=A.bJ(m,22,19)
v=A.I()
v.r=q.gp(0)
d.dO(w,v)
w=h.y
if(w!=null){v=A.bJ(m.aa(0,F.uV),15,24)
u=A.I()
u.r=w.gp(0)
d.dO(v,u)
u=m.aa(0,D.ee3)
v=A.I()
v.r=w.gp(0)
d.ad(u,4,v)}else{w=A.bJ(m.aa(0,B.rQ),23,20)
v=h.d
u=A.I()
u.r=v.gp(0)
d.e2(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.bo(m.aa(0,D.eij),m.aa(0,D.eh8),C.it(v,2.2))
d.bo(m.aa(0,D.eg3),m.aa(0,D.ee0),C.it(v,2.2))}if(w===4){w=m.aa(0,D.ein)
u=A.I()
u.r=v.gp(0)
d.ad(w,6,u)
u=m.aa(0,D.eg5)
w=A.I()
w.r=v.gp(0)
d.ad(u,6,w)}}w=m.aa(0,D.egW)
v=A.I()
v.r=B.hV.gp(0)
d.ad(w,0.9,v)
v=m.aa(0,D.egK)
w=A.I()
w.r=B.hV.gp(0)
d.ad(v,0.9,w)
if(i){l=m.aa(0,F.a6N)
w=A.bJ(l,21,22)
v=A.I()
v.r=D.lq.gp(0)
d.dO(w,v)
v=A.bJ(l.aa(0,F.aIH),5,12)
w=A.I()
w.r=D.bbR.gp(0)
d.dO(v,w)
d.bo(l.aa(0,D.eif),l.aa(0,F.aJ3),C.it(B.cI,1.4))
d.bo(D.aIK,new A.t(15,-88-r),C.it(q,3.6))}j.restore()},
hnX(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.a
J.bl(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bW(0,f)
v=A.bJ(B.dB,18,96)
u=B.w.j(0.28)
$.S()
t=A.I()
t.r=u.gp(0)
d.dO(v,t)
t=A.bJ(B.dB,11,70)
v=B.w.j(0.2)
u=A.I()
u.r=v.gp(0)
d.dO(t,u)
d.lm(D.aOP,A.I())
C.hVf(d,g,h,i,j)
s=(k==null?D.a6S:k).a-w>=0?1:-1
w=A.I()
w.a=B.KZ
w.sam(A.jo(new A.t(s*70,-60),new A.t(-s*70,-60),A.a([D.agd.j(0.5),D.agd.j(0.12),D.biY.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aO(D.aOP,w)
r.restore()
r.restore()},
hVf(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a3.a,a1=A.ar(a0,B.w,0.28)
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
s=A.bs(D.eYI,B.rU)
p=$.S()
o=A.I()
o.r=u.gp(0)
a2.az(s,o)
o=A.bs(D.eYD,B.i5)
s=A.ar(v,B.w,0.18)
s.toString
n=A.I()
n.r=s.gp(0)
a2.az(o,n)
n=A.bs(D.eYR,B.i5)
o=A.ar(v,B.w,0.1)
o.toString
s=A.I()
s.r=o.gp(0)
a2.az(n,s)
s=A.I()
s.r=a0.gp(0)
a2.dO(D.eYK,s)
s=A.I()
s.r=a0.gp(0)
a2.dO(D.eXt,s)
s=a2.a
J.bl(s.save())
s.translate(a4.w,0)
J.bl(s.save())
a2.p_(0,q,q*(1+t*0.012))
o=a3.f
m=o&&!a3.r?25:28
n=x.v
l=new A.aF(p.r,B.ag,d,d,A.a([],n))
p=-m
k=p+2
l.D(new A.aX(k,-58))
l.D(new A.c3(p-3,-62,p,-52))
l.D(new A.aq(p+4,-14))
l.D(new A.aq(m-4,-14))
l.D(new A.aq(m,-52))
l.D(new A.c3(m+3,-62,m-2,-58))
l.D(new A.c3(0,-70,k,-58))
l.D(new A.br())
k=A.I()
k.r=v.gp(0)
a2.aG(l,k)
J.bl(s.save())
a2.mE(0,l)
switch(a3.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.d6o[j]
i=new A.ap(B.R,B.N,B.U,B.V,B.S)
i.b=B.a9
i.c=5
i.r=k.gp(0)
i.d=B.bB
i.e=B.dS
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
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.bB
i.e=B.dS
h=i.G()
s.drawLine.apply(s,[f,-64,f,-14,h])
h.delete()}for(g=-60;g<-14;g+=8){k=u.j(0.7)
i=new A.ap(B.R,B.N,B.U,B.V,B.S)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.bB
i.e=B.dS
h=i.G()
s.drawLine.apply(s,[-30,g,30,g,h])
h.delete()}break
default:a2.bo(D.ehK,D.eeM,C.it(a3.c.j(0.9),3))}a2.bo(D.eig,D.ehg,C.it(B.w.j(0.18),1.6))
a2.bo(D.ee7,F.aIM,C.it(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.S()
i=A.I()
i.r=u.gp(0)
a2.aO(D.eXp,i)
s.restore()
i=A.I()
i.r=a1.gp(0)
a2.aO(D.eXD,i)
n=new A.aF(k.r,B.ag,d,d,A.a([],n))
n.D(new A.aX(-9,-66))
n.D(new A.c3(0,-57,9,-66))
n.D(new A.c3(0,-60,-9,-66))
k=A.I()
k.r=a0.gp(0)
a2.aG(n,k)
if(a3.e!==1)u=a3.r&&!o
else u=!0
if(u)a2.e2(D.eXM,0.1,2.941592653589793,!1,C.it(a3.c,2.2))
s.restore()
u=-56*q
o=a4.Q
if(o==null)o=D.a6W
n=25*q
k=23*q
i=9*q
C.hkd(a2,new A.t(p*q+2,u),o,n,k,-1,v,a0,i)
o=a4.as
p=o==null?D.Ds:o
C.hkd(a2,new A.t(m*q-2,u),p,n,k,1,v,a0,i)
if(a4.at){a2.bo(D.efx,D.eft,C.it(D.ah4,4))
a2.bo(D.efv,D.efr,C.it(D.Ft.j(0.7),1.4))
u=A.I()
u.r=B.cI.gp(0)
a2.ad(D.efu,5,u)}s.restore()
u=a4.w
p=a4.e
o=a4.r
J.bl(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a2.ic(0,a4.f)
a2.bW(0,r)
C.hVc(a2,a3,a4,a5,a6,a0,a1,w)
s.restore()},
hkd(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aF(0,e),r=s.gcH(),q=r===0?B.i4:s.eR(0,r),p=B.k.E(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.t(o,w)
if(o*i<0)v=new A.t(-o,-w)
u=e.aa(0,q.aJ(0,n)).aa(0,v.aJ(0,m))
t=e.aa(0,q.aJ(0,p))
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
o=A.bJ(t,l*1.15,l)
w=A.I()
w.r=k.gp(0)
d.dO(o,w)
w=-l
w=t.aa(0,new A.t(i*w*0.45,w*0.1))
o=A.I()
o.r=k.gp(0)
d.ad(w,l*0.28,o)},
hVc(c3,c4,c5,c6,c7,c8,c9,d0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=null,c1=c4.d,c2=c4.e
if(c2===3||c2===4){w=A.bJ(B.uU,40,38)
$.S()
v=A.I()
v.r=c1.gp(0)
c3.dO(w,v)}if(c2===4){$.S()
w=A.I()
w.r=c1.gp(0)
c3.ad(D.ehq,9.5,w)
w=A.I()
w.r=c1.gp(0)
c3.ad(D.eem,9.5,w)}w=A.bJ(D.eiD,10,6)
v=$.S()
u=A.I()
u.r=c9.gp(0)
c3.dO(w,u)
u=A.bJ(D.egT,10,6)
w=A.I()
w.r=c9.gp(0)
c3.dO(u,w)
v=v.r
w=x.v
t=new A.aF(v,B.ag,c0,c0,A.a([],w))
t.D(new A.aX(0,-20))
t.D(new A.kU(13,-20,17,-9,16,2))
t.D(new A.kU(15,13,8,20,0,20))
t.D(new A.kU(-8,20,-15,13,-16,2))
t.D(new A.kU(-17,-9,-13,-20,0,-20))
t.D(new A.br())
u=A.I()
u.sam(A.to(D.ei6,28,A.a([d0,c8,c9],x.O),A.a([0,0.55,1],x.n),B.x,c0,c0,0))
c3.aG(t,u)
u=c4.r
if(u){s=C.it(c9.j(0.5),0.8)
c3.e2(D.eYT,3.455751918948773,2.5132741228718345,!1,s)
c3.e2(D.eXw,3.455751918948773,2.5132741228718345,!1,s)
c3.bo(D.ehn,D.ehb,s)
c3.bo(D.eei,D.eea,s)
c3.e2(D.eXL,2.2,1.4,!1,s)
c3.e2(D.eXu,-0.4,1.4,!1,s)}switch(c2){case 0:for(r=c3.a,q=0;q<16;++q){p=3.141592653589793*(1.02+0.96*q/15)
o=Math.cos(p)
n=Math.sin(p)
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.r=c1.gp(0)
l=m.G()
r.drawCircle(o*14.5,-3+n*17.5,4.3,l)
l.delete()}r=A.I()
r.r=c1.gp(0)
c3.e2(D.eXZ,3.141592653589793,3.141592653589793,!0,r)
break
case 1:r=new A.aF(v,B.ag,c0,c0,A.a([],w))
r.D(new A.aX(-15,-11))
r.D(new A.c3(0,-30,15,-11))
r.D(new A.aq(13,-6))
r.D(new A.c3(0,-12,-13,-6))
r.D(new A.br())
o=A.I()
o.r=c4.c.gp(0)
c3.aG(r,o)
c3.bo(D.ehc,D.eeb,C.it(F.n4,1.4))
o=A.I()
o.r=c1.gp(0)
c3.ad(D.eht,3,o)
o=A.I()
o.r=c1.gp(0)
c3.ad(D.een,3,o)
o=new A.aF(v,B.ag,c0,c0,A.a([],w))
o.D(new A.aX(-13,6))
o.D(new A.c3(-12,22,0,26))
o.D(new A.c3(12,22,13,6))
o.D(new A.c3(8,13,0,12))
o.D(new A.c3(-8,13,-13,6))
o.D(new A.br())
r=A.I()
r.r=B.it.gp(0)
c3.aG(o,r)
r=new A.aF(v,B.ag,c0,c0,A.a([],w))
r.D(new A.aX(-7,8))
r.D(new A.c3(0,6,7,8))
r.D(new A.c3(0,10.5,-7,8))
o=A.I()
o.r=B.bO.gp(0)
c3.aG(r,o)
break
case 2:k=c4.y
if(k==null)k=c4.b
r=new A.aF(v,B.ag,c0,c0,A.a([],w))
r.D(new A.aX(-17,-4))
r.D(new A.c3(-20,-27,0,-29))
r.D(new A.c3(20,-27,17,-4))
r.D(new A.c3(0,-14,-17,-4))
r.D(new A.br())
o=A.I()
o.r=k.gp(0)
c3.aG(r,o)
o=A.ar(k,B.w,0.3)
o.toString
c3.e2(D.eY5,3.4,2.5,!1,C.it(o,1.4))
o=A.ar(k,B.c,0.3)
o.toString
c3.e2(D.eXT,3.6,2.2,!1,C.it(o,1.2))
o=new A.aF(v,B.ag,c0,c0,A.a([],w))
o.D(new A.aX(11,-22))
o.D(new A.c3(27,-34,25,-19))
o.D(new A.c3(18,-18,11,-22))
r=A.ar(k,B.c,0.1)
r.toString
n=A.I()
n.r=r.gp(0)
c3.aG(o,n)
n=new A.aF(v,B.ag,c0,c0,A.a([],w))
n.D(new A.aX(11,-22))
n.D(new A.c3(24,-12,27,-26))
n.D(new A.c3(18,-22,11,-22))
o=A.ar(k,B.w,0.2)
o.toString
r=A.I()
r.r=o.gp(0)
c3.aG(n,r)
r=A.I()
r.r=c4.c.gp(0)
c3.ad(D.eec,3,r)
break
case 3:r=A.I()
r.r=c1.gp(0)
c3.e2(D.eY2,3.204424506661589,3.015928947446201,!0,r)
for(r=c3.a,q=-3;q<=3;++q){o=A.ar(c1,B.c,0.18)
o.toString
n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.b=B.a9
n.c=0.9
n.r=o.gp(0)
n.d=B.bB
n.e=B.dS
l=n.G()
r.drawLine.apply(r,[q*3.6,-19+Math.abs(q)*0.8,q*4.6,-4,l])
l.delete()}for(o=c4.c,j=0;j<2;++j){i=D.dk8[j]
n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.b=B.a9
n.c=4.5
n.r=c1.gp(0)
n.d=B.bB
n.e=B.dS
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
c3.e2(D.eY1,3.204424506661589,3.015928947446201,!0,r)
r=A.ar(c1,B.c,0.25)
r.toString
c3.bo(F.a6N,F.a6M,C.it(r,1))
break
default:r=A.I()
r.r=c1.gp(0)
c3.e2(D.eXx,3.267256359733385,2.8902652413026098,!0,r)}g=B.k.E(c5.b,0,1)*0.4+0.1
r=A.bJ(D.eip,5,8)
o=D.adI.j(g)
n=A.I()
n.r=o.gp(0)
c3.dO(r,n)
n=A.bJ(D.eh4,5,8)
r=D.adI.j(g)
o=A.I()
o.r=r.gp(0)
c3.dO(n,o)
f=c5.e*2.4
o=new A.aF(v,B.ag,c0,c0,A.a([],w))
o.D(new A.aX(f-0.6,-2))
o.D(new A.c3(f-3.4,6,f-2.6,7.4))
o.D(new A.c3(f,8.8,f+2.6,7.4))
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
for(r=c3.a,o=d<0.15,n=c4.f,m=d>0.12,a0=2.5*d,a1=a0*2,a2=a0*2.2,j=0;j<2;++j){a3=G.je[j]
a4=c5.e
a5=a3>0?0.7:1
a6=a3*6.4+a4*2*a5
if(m){a4=Math.max(0.6,a1)
a5=A.bJ(new A.t(a6,-3),a4,7)
a7=new A.ap(B.R,B.N,B.U,B.V,B.S)
a7.r=B.c.j(0.96).gp(0)
l=a7.G()
r.drawOval(A.bF(a5),l)
l.delete()
a8=a6+c5.y*1.5
a9=-3+c5.z*0.7
J.bl(r.save())
a5=A.a([],w)
a7=new A.aF(v,B.ag,c0,c0,a5)
a5.push(new A.jE(A.bJ(new A.t(a6,-3),a4,7)))
a4=a7.gbx().a.snapshot()
a4=a7.e=new A.cj(a4)
r.clipPath(a4.a,$.nx(),!0)
a4=new A.ap(B.R,B.N,B.U,B.V,B.S)
a4.r=D.bfw.gp(0)
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
r.restore()}a4=n?D.XX:c9.j(0.9)
a5=n?1.5:1.1
b0=new A.ap(B.R,B.N,B.U,B.V,B.S)
b0.b=B.a9
b0.c=a5
b0.r=a4.gp(0)
b0.d=B.bB
b0.e=B.dS
a4=o?0.8:0
a4=A.bJ(new A.t(a6,-3+a4),Math.max(1.2,a2),7.3500000000000005)
l=b0.G()
r.drawArc.apply(r,[A.bF(a4),189,162,!1,l])
l.delete()
a4=c5.c
b1=-9.2-a4*2.2
a5=a3*3.6
a7=a4<0?-a4*1.6:0
a4=a4>0?a4*0.6:0
if(u)b2=B.e3
else{b2=A.ar(c1,B.w,0.2)
b2.toString}b3=new A.ap(B.R,B.N,B.U,B.V,B.S)
b3.b=B.a9
b3.c=1.7
b3.r=b2.gp(0)
b3.d=B.bB
b3.e=B.dS
l=b3.G()
r.drawLine.apply(r,[a6-a5,b1-a7+0.4,a6+a5,b1-0.6-a4,l])
l.delete()}b4=B.k.E(c5.a,0,1)
if(n)b5=D.bp7
else{u=A.ar(c9,D.bj_,0.6)
u.toString
b5=u}b6=c5.b
if(b4>0.06){b7=5+B.k.E(b6,0,1)*2.2
b8=1.2+b4*6.5
b9=new A.aF(v,B.ag,c0,c0,A.a([],w))
w=-b7
b9.D(new A.aX(w,11.5))
b9.D(new A.c3(0,11.5+b8*0.2-c5.b*1.5,b7,11.5))
b9.D(new A.c3(0,11.5+b8*1.5+c5.b*1.5,w,11.5))
b9.D(new A.br())
v=A.I()
v.r=D.bil.gp(0)
c3.aG(b9,v)
J.bl(r.save())
c3.mE(0,b9)
v=B.c.j(0.95)
u=A.I()
u.r=v.gp(0)
c3.aO(new A.a3(w,11,w+b7*2,13.2),u)
u=A.bJ(new A.t(0,11.5+b8*1.1),b8*0.9,b7*1.4)
w=A.I()
w.r=D.bpc.gp(0)
c3.dO(u,w)
r.restore()
c3.aG(b9,C.it(b5,1.1))}else{u=new A.aF(v,B.ag,c0,c0,A.a([],w))
r=11.5-b6*0.8
u.D(new A.aX(-5.2,r))
u.D(new A.c3(0,13.1+b6*2.8,5.2,r))
c3.aG(u,C.it(b5,1.5))
if(b6>0.6){w=new A.aF(v,B.ag,c0,c0,A.a([],w))
w.D(new A.aX(-4.6,11.8))
w.D(new A.c3(0,15.1+b6*1.4,4.6,11.8))
w.D(new A.c3(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.I()
u.r=v.gp(0)
c3.aG(w,u)}}if(c5.b>0.2){c3.e2(D.eXK,-1.2,2.2,!1,C.it(c9.j(0.5),0.8))
c3.e2(D.eXz,2.141592653589793,2.2,!1,C.it(c9.j(0.5),0.8))}if(n&&c2!==2){c2=c4.c
w=A.I()
w.r=c2.gp(0)
c3.ad(D.egM,1.7,w)
w=A.I()
w.r=c2.gp(0)
c3.ad(D.egI,1.7,w)}},
i_D(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=$.S(),e=new A.oW(),d=A.z4(e,g),a0=a4.a,a1=a4.b,a2=Math.min(a0/450,a1/900),a3=A.I()
a3.sam(A.jo(B.J,new A.t(0,a1*0.46),D.d3f,D.cW5,B.x,g))
d.aO(new A.a3(0,0,0+a0,0+a1),a3)
a3=d.a
J.bl(a3.save())
a3.translate((a0-450*a2)/2,(a1-900*a2)/2)
d.bW(0,a2)
w=new A.e9()
w.d3(8)
for(v=0;v<120;++v){a0=w.ah()
a1=w.ah()
u=w.ah()
t=new A.ap(B.R,B.N,B.U,B.V,B.S)
t.r=B.c.j(0.2+w.ah()*0.5).gp(0)
s=t.G()
a3.drawCircle(a0*450*1.4-90,a1*330-40,0.5+u*0.9,s)
s.delete()}J.bl(a3.save())
a3.translate(200,120)
d.ic(0,-0.5)
a0=A.I()
a1=x.O
a0.sam(A.to(B.J,230,A.a([D.bej,B.K],a1),g,B.x,g,g,0))
d.dO(D.eYf,a0)
a3.restore()
a0=A.I()
a0.sam(A.to(D.a6V,58,A.a([D.bhs,B.K],a1),g,B.x,g,g,0))
d.ad(D.a6V,58,a0)
a0=A.I()
a0.r=D.bd1.gp(0)
d.ad(D.a6V,24,a0)
a0=A.I()
a0.r=D.Yk.gp(0)
d.ad(D.ef6,5,a0)
a0=A.I()
a0.r=D.Yk.gp(0)
d.ad(D.efa,3.4,a0)
a0=A.I()
a0.r=D.Yk.gp(0)
d.ad(D.ef9,2.4,a0)
for(a0=x.v,r=0;r<3;++r,f=u){u=A.a([],a0)
q=new A.aF(f.r,B.ag,g,g,u)
u.push(new A.aX(-60,420))
for(f=372+r*12,t=60+r*20,p=r*2,o=14-r*3,n=-60;n<=510;n+=8){m=new A.aq(n,f+Math.sin(n/t+p)*o+Math.sin(n/23+r)*3)
u.push(m)
l=q.f
if(l!=null)m.bv(l)
m=q.e
if(m!=null)m.a.delete()
q.e=null}f=new A.aq(510,470)
u.push(f)
t=q.f
if(t!=null)f.bv(t)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=new A.aq(-60,470)
u.push(f)
t=q.f
if(t!=null)f.bv(t)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=new A.br()
u.push(f)
u=q.f
if(u!=null)f.bv(u)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=[D.bbG,D.bdB,D.bji][r]
u=$.S()
t=new A.ap(B.R,B.N,B.U,B.V,B.S)
t.r=f.gp(0)
s=t.G()
f=q.e
a3.drawPath((f==null?q.e=new A.cj(q.gbx().a.snapshot()):f).a,s)
s.delete()}for(k=0;k<4;++k){n=D.cqi[k]
j=384+B.o.F(n,11)
f=n-2
a0=j-24
u=new A.ap(B.R,B.N,B.U,B.V,B.S)
u.b=B.a9
u.c=2.4
u.r=D.YB.gp(0)
u.d=B.bB
u.e=B.dS
s=u.G()
a3.drawLine.apply(a3,[n,j,f,a0,s])
s.delete()
f=A.bJ(new A.t(f,j-27),11,46)
u=new A.ap(B.R,B.N,B.U,B.V,B.S)
u.r=D.YB.gp(0)
s=u.G()
a3.drawOval(A.bF(f),s)
s.delete()
a0=A.bJ(new A.t(n-12,a0),8,24)
f=new A.ap(B.R,B.N,B.U,B.V,B.S)
f.r=D.YB.gp(0)
s=f.G()
a3.drawOval(A.bF(a0),s)
s.delete()}for(v=0;v<9;++v){f=B.o.F(v,3)
a0=B.o.F(v,4)
u=new A.ap(B.R,B.N,B.U,B.V,B.S)
u.r=D.bd4.j(0.8).gp(0)
s=u.G()
a3.drawCircle(20+v*52+f*7,400+a0*5,1.2,s)
s.delete()}f=A.I()
f.sam(A.jo(D.edK,D.edM,D.cXZ,B.HQ,B.x,g))
d.aO(new A.a3(-200,412,650,1300),f)
i=new A.e9()
i.d3(21)
for(v=0;v<260;++v){f=i.ah()
j=420+i.ah()*480
a0=i.ah()
u=j/900+0.4
u=A.bJ(new A.t(f*450,j),1+i.ah()*2*u,1.5+a0*4*u)
f=i.hh()?B.c:B.w
a0=new A.ap(B.R,B.N,B.U,B.V,B.S)
a0.r=f.j(0.06+i.ah()*0.06).gp(0)
s=a0.G()
a3.drawOval(A.bF(u),s)
s.delete()}J.bl(a3.save())
a3.translate(225,590)
d.p_(0,1,0.34)
f=A.I()
f.sam(A.to(B.J,250,A.a([D.bk8,D.bdX,D.blZ],a1),A.a([0,0.8,1],x.n),B.x,g,g,0))
d.ad(B.J,250,f)
a3.restore()
for(v=0;v<40;++v){n=i.ah()*450
j=640+i.ah()*260
f=i.ah()
a0=A.ar(D.afV,D.bcz,i.ah())
a0.toString
for(f=j-(6+f*10),h=-1;h<=1;++h){$.S()
a1=new A.ap(B.R,B.N,B.U,B.V,B.S)
a1.b=B.a9
a1.c=1.3
a1.r=a0.gp(0)
a1.d=B.bB
a1.e=B.dS
s=a1.G()
a3.drawLine.apply(a3,[n+h*2,j,n+h*5,f+Math.abs(h)*3,s])
s.delete()}}C.hTy(d)
for(k=0;k<3;++k)C.hWH(d,D.axA[k])
C.hWw(d,D.ef0)
for(n=118;n<190;n+=11){f=B.o.F(n,3)
a0=B.o.F(n,4)
$.S()
a1=new A.ap(B.R,B.N,B.U,B.V,B.S)
a1.b=B.a9
a1.c=2.4
a1.r=D.Yx.gp(0)
a1.d=B.bB
a1.e=B.dS
s=a1.G()
a3.drawLine.apply(a3,[n,452+f,n+1,436+a0,s])
s.delete()}d.bo(D.ee9,D.eer,C.it(D.bdi,1.6))
a3.restore()
return e.nd()},
hTy(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=$.S().r,e=x.v,d=new A.aF(f,B.ag,g,g,A.a([],e))
d.D(new A.aX(358,462))
d.D(new A.kU(354,422,370,382,374,332))
d.D(new A.aq(410,332))
d.D(new A.kU(416,382,432,422,428,462))
d.D(new A.br())
w=A.I()
w.sam(A.jo(new A.t(354,0),new A.t(430,0),D.dq9,Q.zf,B.x,g))
a0.aG(d,w)
v=new A.e9()
v.d3(4)
for(w=a0.a,u=0;u<30;++u){t=364+v.ah()*56
s=462-v.ah()*126
r=v.ah()
q=v.ah()
p=B.w.j(0.18)
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.b=B.a9
o.c=1.1
o.r=p.gp(0)
o.d=B.bB
o.e=B.dS
n=o.G()
w.drawLine.apply(w,[t,s,t+r*3-1.5,s+8+q*12,n])
n.delete()}for(m=0;m<6;++m){l=D.d7J[m]
r=l.a
q=392+r*12
p=-l.b
o=q+r*52
k=336+(p*46-8)
r=o+r*42
p=k+(p*34+4)
j=A.a([],e)
i=new A.aF(f,B.ag,g,g,j)
j.push(new A.aX(q,336))
j.push(new A.c3(o,k,r,p))
q=new A.ap(B.R,B.N,B.U,B.V,B.S)
q.b=B.a9
q.c=8
q.r=D.aeo.gp(0)
q.d=B.bB
q.e=B.dS
n=q.G()
q=i.gbx().a.snapshot()
w.drawPath((i.e=new A.cj(q)).a,n)
n.delete()
for(h=0;h<6;++h){q=v.ah()
o=v.ah()
k=v.ah()
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.r=A.ar(D.bda,D.bjh,v.ah()).j(0.92).gp(0)
n=j.G()
w.drawCircle(r+(q*36-18),p+(o*18-14),8+k*7,n)
n.delete()}r+=0
q=new A.ap(B.R,B.N,B.U,B.V,B.S)
q.b=B.a9
q.c=1.2
q.r=D.Yx.gp(0)
q.d=B.bB
q.e=B.dS
n=q.G()
w.drawLine.apply(w,[r,p+8,r,p+22,n])
n.delete()
p=A.bJ(new A.t(r,p+28),13,7)
r=new A.ap(B.R,B.N,B.U,B.V,B.S)
r.r=D.bkq.gp(0)
n=r.G()
w.drawOval(A.bF(p),n)
n.delete()}},
hWH(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b4.a,a5=b4.b,a6=b4.c,a7=b4.d,a8=a6*0.5,a9=A.bJ(new A.t(a4,a5+2),a8,a6*2.8),b0=B.w.j(0.3),b1=$.S(),b2=A.I()
b2.r=b0.gp(0)
b3.dO(a9,b2)
b1=b1.r
b2=x.v
w=new A.aF(b1,B.ag,a3,a3,A.a([],b2))
a9=a4-a6
b0=a5-a7
w.D(new A.aX(a9,b0))
w.D(new A.aq(a9,a5))
v=a4+a6
w.D(new A.c3(a4,a5+a6*0.22,v,a5))
w.D(new A.aq(v,b0))
w.D(new A.br())
u=A.I()
u.sam(A.jo(new A.t(a9,0),new A.t(v,0),D.d7P,Q.zf,B.x,a3))
b3.aG(w,u)
t=new A.e9()
t.d3(B.o.V(a4*7))
v=b3.a
J.bl(v.save())
b3.mE(0,w)
for(s=0;s<40;++s){r=a9+t.ah()*a6*2
q=b0+t.ah()*a7
u=t.ah()
p=t.ah()
o=B.w.j(0.14)
n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.b=B.a9
n.c=1
n.r=o.gp(0)
n.d=B.bB
n.e=B.dS
m=n.G()
v.drawLine.apply(v,[r,q,r+4+u*5,q+p*2-1,m])
m.delete()}u=b0+5
p=a6*2
o=D.afR.j(0.75)
n=A.I()
n.r=o.gp(0)
b3.aO(new A.a3(a9,u,a9+p,u+7),n)
for(u=a6/5,o=b0+12,n=b0+20,l=a9+2,k=0;k<B.k.bj(u);++k){j=l+k*10
i=A.a([],b2)
h=new A.aF(b1,B.ag,a3,a3,i)
i.push(new A.aX(j,o))
i.push(new A.aq(j+5,n))
i.push(new A.aq(j+10,o))
i.push(new A.br())
i=new A.ap(B.R,B.N,B.U,B.V,B.S)
i.r=D.lq.j(0.85).gp(0)
m=i.G()
i=h.gbx().a.snapshot()
v.drawPath((h.e=new A.cj(i)).a,m)
m.delete()}u=A.a([],b2)
g=new A.aF(b1,B.ag,a3,a3,u)
b1=a5-8
g.D(new A.aX(a9,b1))
for(p/=6,k=0;k<=B.k.bj(p);++k){o=(k&1)===0?0:-5
o=new A.aq(a9+k*6,b1+o)
u.push(o)
n=g.f
if(n!=null)o.bv(n)
o=g.e
if(o!=null)o.a.delete()
g.e=null}b3.aG(g,C.it(D.afR.j(0.7),1.6))
v.restore()
a9=$.S().r
b1=new A.aF(a9,B.ag,a3,a3,A.a([],b2))
u=a6*0.1
p=a4+u
o=a6*0.28
n=p-o
l=a5+1
b1.D(new A.aX(n,l))
i=a5-a7*0.55
b1.D(new A.aq(n,i))
o=p+o
b1.D(new A.c3(p,a5-a7*0.82,o,i))
b1.D(new A.aq(o,l))
b1.D(new A.br())
l=A.I()
l.r=D.ag1.gp(0)
b3.aG(b1,l)
l=A.I()
l.r=D.ag1.gp(0)
b3.ad(new A.t(a4-a6*0.62,a5-a7*0.5),u,l)
l=b4.e
u=b0-l
b1=a6*1.38
o=a4-b1
i=b0+4
p=a4+b1
f=new A.aF(a9,B.ag,a3,a3,A.a([],b2))
f.D(new A.aX(o,i))
n=b0-l*0.55
f.D(new A.c3(a4-a8,n,a4,u))
f.D(new A.c3(a4+a8,n,p,i))
f.D(new A.c3(a4,b0+a6*0.34,o,i))
f.D(new A.br())
b0=A.I()
n=a6*1.4
b0.sam(A.jo(new A.t(a4-n,0),new A.t(a4+n,0),D.dbd,Q.zf,B.x,a3))
b3.aG(f,b0)
J.bl(v.save())
b3.mE(0,f)
for(a8=p-o,s=0;s<70;++s){e=s/69
b0=Math.sin(e*3.141592653589793)
p=t.ah()
n=(t.hh()?B.w:D.bcI).j(0.16)
h=new A.ap(B.R,B.N,B.U,B.V,B.S)
h.b=B.a9
h.c=0.9
h.r=n.gp(0)
h.d=B.bB
h.e=B.dS
m=h.G()
v.drawLine.apply(v,[a4+(p-0.5)*3,u,o+a8*e,i+b0*a6*0.3,m])
m.delete()}for(k=1;k<5;++k){d=u+l*k/4.6
a0=b1*k/4.6
b0=A.a([],b2)
p=new A.aF(a9,B.ag,a3,a3,b0)
n=d+2
b0.push(new A.aX(a4-a0,n))
b0.push(new A.c3(a4,d+7+k*1.5,a4+a0,n))
b0=B.w.j(0.22)
n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.b=B.a9
n.c=1.2
n.r=b0.gp(0)
n.d=B.bB
n.e=B.dS
m=n.G()
b0=p.gbx().a.snapshot()
v.drawPath((p.e=new A.cj(b0)).a,m)
m.delete()}v.restore()
for(s=0;s<46;++s){e=s/45
a1=o+a8*e
a2=i+Math.sin(e*3.141592653589793)*a6*0.3
b0=t.ah()
b1=t.ah()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.b=B.a9
p.c=1.1
p.r=D.bjD.gp(0)
p.d=B.bB
p.e=B.dS
m=p.G()
v.drawLine.apply(v,[a1,a2,a1+(b0-0.5)*2,a2+3+b1*4,m])
m.delete()}a8=new A.aF(a9,B.ag,a3,a3,A.a([],b2))
a9=u+4
a8.D(new A.aX(a4-2.5,a9))
a8.D(new A.aq(a4,u-7))
a8.D(new A.aq(a4+2.5,a9))
a8.D(new A.br())
a9=A.I()
a9.r=D.bg1.gp(0)
b3.aG(a8,a9)},
hWw(d,e){var w,v,u,t,s,r,q,p,o
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=d.a,r=0;r<2;++r){q=w+D.dk5[r]
$.S()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.b=B.a9
p.c=3
p.r=D.Yx.gp(0)
p.d=B.bB
p.e=B.dS
o=p.G()
s.drawLine.apply(s,[q,u,q,t,o])
o.delete()}u=A.bJ(e.aa(0,F.aIG),24,36)
t=$.S()
s=A.I()
s.r=D.bon.gp(0)
d.dO(u,s)
t=new A.aF(t.r,B.ag,null,null,A.a([],x.v))
s=w-24
u=v-30
t.D(new A.aX(s,u))
t.D(new A.aq(w,v-54))
t.D(new A.aq(w+24,u))
t.D(new A.c3(w,v-24,s,u))
t.D(new A.br())
u=A.I()
u.r=D.af_.gp(0)
d.aG(t,u)},
hVR(d){switch(B.o.F(d,8)){case 0:return D.aXM
case 1:return D.aXK
case 2:return D.aXJ
case 3:return D.aXI
case 4:return D.aXL
case 5:return D.aXN
case 6:return D.hhg
default:return D.hhf}},
RN(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bna()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a6W:j
w.as=k==null?D.Ds:k
C.hnX(d,e,p,C.hVR(m),w,s,m,l)},
hpj(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bQD:function bQD(){var _=this
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
rY:function rY(d,e,f,g,h,i,j,k,l,m){var _=this
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
bna:function bna(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
ala:function ala(){this.b=this.a=null},
aUV:function aUV(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bQv:function bQv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQw:function bQw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQx:function bQx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQy:function bQy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQz:function bQz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQA:function bQA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQB:function bQB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQC:function bQC(){},
bQu:function bQu(d){this.a=d},
aeX:function aeX(d,e){this.a=d
this.b=e},
acV:function acV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Mn(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bPe(s)
s.byF(d)
return s},
Gr(d,e,f,g,h,i,j){var w,v=A.T(g).k("Z<1>")
v=A.de(new A.Z(g,new C.fkO(f),v),v.k("K.E"))
w=A.C(v,A.a6(v).k("cr.E"))
B.d.dY(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.v(v,A.d1(w,0,A.dB(3,"count",x.S),A.T(w).c))
B.d.dY(v,d)
return new C.lg(e,v,B.d.cu(v,f),h,i,"tree",j)},
ig2(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.U(c0,x.cg),c2=new C.fUb(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.k2(c4,c0)
t=A.C(c4,A.a6(c4).k("cr.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.k2(c4,c0)
r=A.C(c4,A.a6(c4).k("cr.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.k2(c4,c0)
q=A.C(c4,A.a6(c4).k("cr.E"))
for(c4=w.length,v=A.T(t).k("Z<1>"),s=v.k("K.E"),p=A.T(w).k("Z<1>"),o=p.k("K.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.M)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.c()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.w0)g="father"
else g=h===D.oa?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Z(t,new C.fUd(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.Gr(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Z(w,new C.fUe(i,m),p),o)
B.d.dY(d,c6)
c2.$2(b4,new C.lg("True or false: "+h+" is the "+g+" of "+l+".",D.ayz,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lg("True or false: "+B.a.i(B.d.gI(d).b)+" is the "+g+" of "+l+".",D.ayz,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.FM(m)
h=a0.length
if(h!==0){a1=a0[c6.au(h)]
h=B.a.i(a1.b)
f=A.C(new A.Z(t,new C.fUf(l,a0,c5),v),s)
e=a1.c
if(e===D.w0)e="son"
else e=e===D.oa?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.Gr(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.eC([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mk(a5,a5.r,f.k("mk<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.Gr(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gI(a0).b)
f=A.a([],c3)
for(e=A.T(a0),a2=e.k("jx<1>"),a3=new A.jx(a0,1,b3,a2),a3.pd(a0,1,b3,e.c),a3=new A.bS(a3,a3.gL(0),a2.k("bS<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.Gr(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gI(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gI(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.aq3(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Z(t,new C.fUg(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.Gr(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.c()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.c()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.C(new A.Z(t,new C.fUh(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.w0
if(e)a2=b7
else a2=f===D.oa?b8:b9
if(e)f=b7
else f=f===D.oa?b8:b9
c2.$2("grand",C.Gr(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aL9(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.au(k)].b)
j=A.C(new A.Z(t,new C.fUi(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.Gr(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.v(j,D.cIQ)
h=l+" was born in "+k
c2.$2("place",C.Gr(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.v(j,D.cZ_)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.Gr(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.M)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.Gr(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cB(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.jV(b1,b3,b3)
c2.$2("year",C.Gr(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bBX(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.Mn(d),l=new A.e9()
l.d3(f)
w=C.ig2(m,l,g)
for(v=new A.dq(w,w.r,w.e);v.C();)J.h7Y(v.d,l)
v=A.a6(w).k("cv<1>")
u=A.C(new A.cv(w,v),v.k("K.E"))
B.d.dY(u,l)
t=A.a([],x.J)
s=A.aY(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.b5(u,new C.fx3(n,w))))break
for(v=u.length,r=0;r<u.length;u.length===v||(0,A.M)(u),++r){q=u[r]
if(t.length>=e)break
p=w.h(0,q)
p.toString
if(J.ad(p)>n.a){p=w.h(0,q)
p.toString
p=s.M(0,J.q(p,n.a).a)}else p=!1
if(p){p=w.h(0,q)
p.toString
t.push(J.q(p,n.a))}}++n.a}v=t.length
if(v<e){v=A.C(D.awD,x.df)
B.d.dY(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.M)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.ho3(o,l))}}else if(!g&&v>3){o=C.ho3(D.awD[l.au(14)],l)
t[t.length-1-l.au(3)]=o}return t},
ho3(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.dY(w,e)
return new C.lg(d.a,w,B.d.cu(w,v),d.d,d.e,d.f,d.r)},
hsK(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.Mn(a2),a1=new A.e9()
a1.d3(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.M)(t),++r){q=t[r]
if(a0.FM(q).length>=2)u.push(q)}B.d.dY(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.M)(u),++r){n=u[r]
m=a0.FM(n)
l=A.T(m)
k=new A.jx(m,0,5,l.k("jx<1>"))
k.pd(m,0,5,l.c)
j=k.dm(0)
if(new A.N(j,new C.fL4(),A.T(j).k("N<1,H>")).fH(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.M)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.M)(j),++i)g.push(C.aQG(a0,j[i]))
w.push(new C.asZ("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.U(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.M)(t),++r){q=t[r]
J.cb(e.c3(0,a0.aly(q),new C.fL5()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cv<1>")
d=A.C(new A.cv(e,t),t.k("K.E"))
B.d.fc(d)
v=A.a([],v)
for(u=A.d1(d,0,A.dB(5,"count",u),A.T(d).c),t=u.$ti,u=new A.bS(u,u.gL(0),t.k("bS<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cD(s)
m.dY(s,a1)
v.push(m.gI(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.M)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.M)(v),++r)s.push(C.aQG(a0,v[r]))
w.push(new C.asZ("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aP9(d){return B.d.amW(D.az2,new C.ftv(d))},
i6e(d){return A.pP(new A.Z(D.az2,new C.fzF(d),x.av))},
bQ2(d){return C.hC2(d)},
hC2(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bQ2=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bQ2)
case 7:r=f
q=B.a.i(d)
q=A.eA(J.q(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bQ2,v)},
Bs(d,e){return C.hC_(d,e)},
hC_(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$Bs=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$Bs)
case 7:r=g
p=B.a.i(d)
o=A.eA(J.q(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.ar("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$Bs)
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
return A.i($async$Bs,v)},
bQ1(d,e,f){return C.hC0(d,e,f)},
hC0(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bQ1=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bQ1)
case 7:r=h
q=B.a.i(d)
q=A.eA(J.q(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bQ1,v)},
Bt(d,e,f,g){return C.hC1(d,e,f,g)},
hC1(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$Bt=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$Bt)
case 7:r=i
p=B.a.i(d)
o=A.eA(J.q(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.ar("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$Bt)
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
return A.i($async$Bt,v)},
bEd(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
fWb(d,e,f,g){return new C.ajQ(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hA8(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aV(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cy)
while(u.C())w.push(J.k(u.gR(u)))
u=x.N
w=A.d1(w,0,A.dB(4,"count",x.S),u).dm(0)
B.d.v(w,A.c2(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aK(d.h(0,"c"))
v=v==null?null:B.k.N(v)
v=B.o.E(v==null?0:v,0,3)
u=A.aK(d.h(0,"s"))
u=u==null?null:B.k.N(u)
return C.fWb(w,v,B.o.E(u==null?20:u,5,60),t)},
h91(d){var w,v,u,t,s,r,q=J.a5(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aV(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.cy)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gR(q)
if(u.b(r))v.push(C.hA8(A.a2(r,t,s)))}return new C.M8(p,w,v)},
h3s(d){var w,v=A.a([],x.c)
for(w=J.aV(d.z);w.C();)v.push(C.h91(w.gR(w)))
return v},
aQG(d,e){var w=e.c===D.oa
if(d.aly(e)===0&&d.FM(e).length!==0)return w?0:1
if(d.FM(e).length!==0||d.aq3(e)!=null)return w?2:3
return w?4:5},
htP(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Mn(a4),a3=new A.e9()
a3.d3(a5)
w=A.a([],x.dT)
v=a2.b
u=A.C(v,x.P)
B.d.dY(u,a3)
t=x.s
s=A.a([],t)
for(r=v.length,q=0;q<v.length;v.length===r||(0,A.M)(v),++q)s.push(B.a.i(v[q].b))
for(v=u.length,r=x.N,p=x.ec,o=x.cc,n=o.k("K.E"),q=0;q<u.length;u.length===v||(0,A.M)(u),++q){m=u[q]
l=A.a([],t)
k=m.d
if(k==null)j=null
else{i=a2.c
i===$&&A.c()
j=i.h(0,k)}h=a2.FM(m)
g=a2.aq3(m)
f=a2.aL9(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cB(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.w0)k="father"
else k=k===D.oa?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gI(h).b)+".")}if(j!=null){k=j.c
if(k===D.w0)k="father"
else k=k===D.oa?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.dY(l,a3)
B.d.aW(l,new C.fUB())
d=B.a.i(m.b)
a0=A.C(new A.Z(s,new C.fUC(d),o),n)
B.d.dY(a0,a3)
k=A.a([d],t)
i=A.T(a0)
a1=new A.jx(a0,0,3,i.k("jx<1>"))
a1.pd(a0,0,3,i.c)
B.d.v(k,a1)
B.d.dY(k,a3)
a1=C.aQG(a2,m)
i=new A.jx(l,0,4,p)
i.pd(l,0,4,r)
w.push(new C.b8X(d,a1,i.dm(0),k))
if(w.length>=5)break}return w},
hlE(d){return B.a.t(d,"married to")||B.a.t(d," of ")||B.a.a0(d,"My ")?1:0},
hsV(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Mn(a4),a3=new A.e9()
a3.d3(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.M)(t),++r){q=t[r]
if(a2.FM(q).length>=2)u.push(q)}B.d.dY(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.M)(u),++r){l=u[r]
k=a2.FM(l)
j=A.T(k)
i=new A.jx(k,0,4,j.k("jx<1>"))
i.pd(k,0,4,j.c)
h=i.dm(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.M)(t),++g){q=t[g]
if(q.a!==j&&!B.d.b5(h,new C.fLx(q))&&q.d!==j)i.push(q)}B.d.dY(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.jx(i,0,k,m)
j.pd(i,0,k,n)
f=j.dm(0)
j=B.a.i(l.b)
k=C.aQG(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.M)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.M)(h),++g)e.push(C.aQG(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.M)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.M)(f),++g)a0.push(C.aQG(a2,f[g]))
w.push(new C.a94(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lg:function lg(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bPe:function bPe(d){this.b=d
this.c=$},
bPf:function bPf(){},
bPg:function bPg(d){this.a=d},
fkO:function fkO(d){this.a=d},
fUb:function fUb(d){this.a=d},
fUc:function fUc(){},
fUd:function fUd(d){this.a=d},
fUe:function fUe(d,e){this.a=d
this.b=e},
fUf:function fUf(d,e,f){this.a=d
this.b=e
this.c=f},
fUa:function fUa(d,e){this.a=d
this.b=e},
fUg:function fUg(d){this.a=d},
fUh:function fUh(d){this.a=d},
fUi:function fUi(d,e,f){this.a=d
this.b=e
this.c=f},
fU9:function fU9(d,e){this.a=d
this.b=e},
fx3:function fx3(d,e){this.a=d
this.b=e},
asZ:function asZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fL4:function fL4(){},
fL5:function fL5(){},
zc:function zc(d,e,f){this.a=d
this.b=e
this.c=f},
ftv:function ftv(d){this.a=d},
fzF:function fzF(d){this.a=d},
ajQ:function ajQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKf:function bKf(){},
M8:function M8(d,e,f){this.a=d
this.b=e
this.c=f},
b8X:function b8X(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
fUB:function fUB(){},
fUC:function fUC(d){this.a=d},
a94:function a94(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fLx:function fLx(d){this.a=d},
bg6:function bg6(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
aeV:function aeV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
aj4:function aj4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aj5:function aj5(d,e,f,g,h){var _=this
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
_.a9$=h
_.c=_.a=null},
bIt:function bIt(d){this.a=d},
bIo:function bIo(){},
bIu:function bIu(){},
bIm:function bIm(){},
bIn:function bIn(){},
bIs:function bIs(d){this.a=d},
bIp:function bIp(d,e){this.a=d
this.b=e},
bIr:function bIr(d,e){this.a=d
this.b=e},
bIq:function bIq(d,e){this.a=d
this.b=e},
bIl:function bIl(d){this.a=d},
bbi:function bbi(d,e){this.b=d
this.a=e},
PZ:function PZ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAg:function aAg(d,e,f){this.b=d
this.c=e
this.a=f},
ayI:function ayI(d,e,f){this.a=d
this.b=e
this.c=f},
aty:function aty(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
atz:function atz(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.cO$=e
_.b4$=f
_.c=_.a=null},
clu:function clu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
clv:function clv(d){this.a=d},
clt:function clt(d){this.a=d},
clw:function clw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
clx:function clx(){},
cly:function cly(d,e){this.a=d
this.b=e},
clz:function clz(){},
clA:function clA(d){this.a=d},
clq:function clq(d){this.a=d},
clr:function clr(d,e){this.a=d
this.b=e},
cls:function cls(d,e,f){this.a=d
this.b=e
this.c=f},
cll:function cll(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cln:function cln(d,e){this.a=d
this.b=e},
clo:function clo(d,e){this.a=d
this.b=e},
clm:function clm(d,e){this.a=d
this.b=e},
clk:function clk(){},
clp:function clp(){},
baO:function baO(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cKR:function cKR(){},
axt:function axt(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
axu:function axu(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cAp:function cAp(d){this.a=d},
cAo:function cAo(d){this.a=d},
cAx:function cAx(d,e){this.a=d
this.b=e},
cAy:function cAy(d,e){this.a=d
this.b=e},
cAz:function cAz(d){this.a=d},
cAw:function cAw(d){this.a=d},
cAA:function cAA(d){this.a=d},
cAB:function cAB(d,e){this.a=d
this.b=e},
cAC:function cAC(){},
cAD:function cAD(d){this.a=d},
cAr:function cAr(d){this.a=d},
cAs:function cAs(d,e){this.a=d
this.b=e},
cAq:function cAq(d,e){this.a=d
this.b=e},
cAt:function cAt(){},
cAu:function cAu(){},
cAv:function cAv(d,e){this.a=d
this.b=e},
ayt:function ayt(){},
aFF:function aFF(){},
h1l(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.bps((w-450*u)/2,(v-900*u)/2,u)},
aeJ:function aeJ(){},
eYZ:function eYZ(d){this.a=d},
aJr:function aJr(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
f7Z:function f7Z(d){this.a=d},
al0:function al0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
al1:function al1(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.pT$=f
_.LA$=g
_.am4$=h
_.bz$=i
_.a9$=j
_.c=_.a=null},
bQ0:function bQ0(d){this.a=d},
bQ_:function bQ_(){},
bPY:function bPY(d){this.a=d},
bPW:function bPW(){},
bPX:function bPX(d){this.a=d},
bPT:function bPT(d,e){this.a=d
this.b=e},
bPU:function bPU(){},
bPV:function bPV(d){this.a=d},
bPZ:function bPZ(d,e){this.a=d
this.b=e},
bPS:function bPS(d){this.a=d},
br7:function br7(d,e){this.b=d
this.a=e},
eZ_:function eZ_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eZ0:function eZ0(d,e,f){this.a=d
this.b=e
this.c=f},
eZ1:function eZ1(d,e,f){this.a=d
this.b=e
this.c=f},
eZ2:function eZ2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eZ3:function eZ3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eZ4:function eZ4(){},
akZ:function akZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
al_:function al_(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.pT$=f
_.LA$=g
_.am4$=h
_.bz$=i
_.a9$=j
_.c=_.a=null},
bPE:function bPE(){},
bPP:function bPP(d,e){this.a=d
this.b=e},
bPQ:function bPQ(d){this.a=d},
bPR:function bPR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPL:function bPL(){},
bPK:function bPK(d,e){this.a=d
this.b=e},
bPM:function bPM(d,e){this.a=d
this.b=e},
bPN:function bPN(){},
bPO:function bPO(d){this.a=d},
bPG:function bPG(d){this.a=d},
bPH:function bPH(d){this.a=d},
bPI:function bPI(d){this.a=d},
bPF:function bPF(d,e){this.a=d
this.b=e},
bPJ:function bPJ(d){this.a=d},
bhU:function bhU(d,e){this.b=d
this.a=e},
dlV:function dlV(){},
a17:function a17(d,e){this.a=d
this.b=e},
akV:function akV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
akW:function akW(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.pT$=e
_.LA$=f
_.am4$=g
_.bz$=h
_.a9$=i
_.c=_.a=null},
bPq:function bPq(d){this.a=d},
bPp:function bPp(){},
bPo:function bPo(){},
bPi:function bPi(){},
bPj:function bPj(){},
bPn:function bPn(d,e,f){this.a=d
this.b=e
this.c=f},
bPm:function bPm(d){this.a=d},
bPk:function bPk(d,e){this.a=d
this.b=e},
bPl:function bPl(d){this.a=d},
bhk:function bhk(d,e){this.b=d
this.a=e},
aAj:function aAj(){},
beV:function beV(){},
aAl:function aAl(){},
beW:function beW(){},
aAm:function aAm(){},
beX:function beX(){},
ub(d,e,f,g,h){var w,v,u=null,t=A.m(18),s=A.a([],x.V)
s.push(new A.ac(0,B.G,f.j(0.4),B.j_,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.v(v,A.a([A.X(g,h,u,u,u,20),B.ac],w))
v.push(A.d(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aB(u,A.p(u,A.B(v,B.m,u,B.e,B.Q,0,u,u),B.f,u,u,new A.o(f,u,u,t,s,u,B.n),u,u,u,u,B.Nm,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a5)},
h9Q(d,e,f,g,h,i,j){return new C.akX(i,h,d,j,e,f,g,null)},
a5z:function a5z(d,e){this.c=d
this.a=e},
bhs:function bhs(d){this.a=d},
tm:function tm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bPh:function bPh(d){this.a=d},
HU:function HU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Vp:function Vp(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bk6:function bk6(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
dW4:function dW4(d,e){this.a=d
this.b=e},
dW5:function dW5(d){this.a=d},
dW6:function dW6(d,e){this.a=d
this.b=e},
dW2:function dW2(d){this.a=d},
dW3:function dW3(d){this.a=d},
dW1:function dW1(d){this.a=d},
dW_:function dW_(d){this.a=d},
dW0:function dW0(d){this.a=d},
dVZ:function dVZ(d,e){this.a=d
this.b=e},
dW7:function dW7(d){this.a=d},
dW8:function dW8(d,e){this.a=d
this.b=e},
dW9:function dW9(d,e){this.a=d
this.b=e},
dWa:function dWa(d,e){this.a=d
this.b=e},
dWd:function dWd(d,e){this.a=d
this.b=e},
dWe:function dWe(d,e){this.a=d
this.b=e},
dWf:function dWf(d,e){this.a=d
this.b=e},
dWg:function dWg(d,e){this.a=d
this.b=e},
dWh:function dWh(d,e){this.a=d
this.b=e},
dWi:function dWi(d,e,f){this.a=d
this.b=e
this.c=f},
dWj:function dWj(d,e){this.a=d
this.b=e},
dWk:function dWk(d,e){this.a=d
this.b=e},
dWb:function dWb(d){this.a=d},
dWc:function dWc(d){this.a=d},
a__:function a__(d,e){this.a=d
this.b=e},
akX:function akX(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
akY:function akY(d){var _=this
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
bPC:function bPC(d){this.a=d},
bPD:function bPD(d){this.a=d},
bPB:function bPB(d){this.a=d},
bPs:function bPs(d){this.a=d},
bPt:function bPt(d){this.a=d},
bPr:function bPr(d){this.a=d},
bPy:function bPy(d,e,f){this.a=d
this.b=e
this.c=f},
bPz:function bPz(d){this.a=d},
bPv:function bPv(d,e){this.a=d
this.b=e},
bPw:function bPw(d,e,f){this.a=d
this.b=e
this.c=f},
bPA:function bPA(){},
bPx:function bPx(d,e){this.a=d
this.b=e},
bPu:function bPu(d){this.a=d},
T3:function T3(d,e){this.c=d
this.a=e},
akU:function akU(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bP2:function bP2(d){this.a=d},
bP3:function bP3(d){this.a=d},
bPd:function bPd(){},
bPc:function bPc(d,e,f){this.a=d
this.b=e
this.c=f},
bP7:function bP7(d,e){this.a=d
this.b=e},
bP6:function bP6(d,e){this.a=d
this.b=e},
bP8:function bP8(d){this.a=d},
bP9:function bP9(d,e){this.a=d
this.b=e},
bPa:function bPa(d,e){this.a=d
this.b=e},
bP5:function bP5(d,e){this.a=d
this.b=e},
bPb:function bPb(d,e,f){this.a=d
this.b=e
this.c=f},
bP4:function bP4(d,e){this.a=d
this.b=e},
i4G(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ahZ(a6),a5=a4.length
if(a5===0)return""
w=A.U(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.M)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bC(new A.V(Date.now(),0,!1))
s=new C.fwA(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("Z<1>"),q=q.k("cQ<1,n>"),o=q.k("K.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.M)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.yq)m.push(l===D.w0?"male":"female")
l=u.w
k=A.af(a3,!0,!1,!1,!1).cB(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.af(a3,!0,!1,!1,!1).cB(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.jV(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jV(h,a2,a2)-A.jV(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.C(new A.cQ(new A.Z(a4,new C.fwy(u,f),p),new C.fwz(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aH(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aH(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aq(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
i4H(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ahZ(a0),d=e.length
if(d===0)return""
w=x.N
v=A.U(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.M)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fwF(v,e)
q=new C.fwD(v)
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
d=A.de(new A.bc(p,d),d.k("K.E"))
n=A.C(d,A.a6(d).k("cr.E"))
B.d.fc(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.M)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gaf(e),k=new A.f5(l,new C.fwE(p,m));k.C();t=f){j=l.gR(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.aj(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aH(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hR0(d,e,f,g){var w,v,u=C.i4I(d,e)
if(u<=0||f.length<=u)return new A.aen(!1,D.CO,f)
if(g.t(0,e.a))return new A.aen(!1,D.CO,f)
w=A.T(f).c
v=A.d1(f,0,A.dB(u,"count",x.S),w).dm(0)
return new A.aen(!0,A.d1(f,u,null,w).dm(0),v)},
hR1(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ahZ(d3),d2=d1.length
if(d2===0)return D.heB
w=x.N
v=A.U(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.M)(d1),++u){t=d1[u]
v.c3(0,t.a,new C.dbu(t))}s=new C.dbL(v)
d2=x.dy
r=A.U(w,d2)
q=new C.dbD(r)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dbC(r)
l=A.U(w,x.do)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.cb(l.c3(0,k,new C.dbv()),o)}h=new C.dbB(s)
g=new C.dbA(l,r)
p=v.$ti.k("bc<2>")
o=p.k("Z<K.E>")
f=A.C(new A.Z(new A.bc(v,p),new C.dbw(h),o),o.k("K.E"))
e=f.length===0?new A.bc(v,p).gI(0):B.d.gI(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.M)(f),++u){t=f[u]
a0=g.$2(t.a,A.aY(w))
if(a0>d){d=a0
e=t}}a1=A.aY(w)
p=x.S
a2=A.U(w,p)
a3=A.U(w,w)
a4=A.U(w,d2)
d2=x.i
a5=A.U(w,d2)
a6=A.U(w,x.d9)
a7=A.U(w,d2)
a8=A.a([],x.s)
a9=new C.dbJ(new C.dbF(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.U(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dq(v,v.r,v.e),j=a2.gal0(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.eC([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.M(0,i))break}if(h.$1(b0)&&a2.aj(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.pP(J.dG(i==null?B.Z:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.U(w,x.dO)
b5=A.a([],x.M)
b6=A.U(w,d2)
b7=new C.dbt(a2,new C.dbK(),b6,a3,b4,v,a4,a5,a6,b5)
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
d2=A.C(new A.cv(b4,d2),d2.k("K.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.M)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.G0(o,new A.t(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Kk(c5.a,new A.t(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cv<1>")
d2=A.C(new A.cv(b6,d2),d2.k("K.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.M)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bQ(0,new C.dbx(c6,b4))
for(d2=new A.cH(a4,a4.$ti.k("cH<1,2>")).gaf(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aV(c7.b);j.C();){i=j.gR(j)
if(b6.aj(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.t(d0,b4.h(0,i).b.b))}}for(j=B.d.gaf(b5),i=new A.f5(j,new C.dby(c8));i.C();)o.push(j.gR(0).b)
if(o.length===0)continue
B.d.aW(o,new C.dbz())
c6.push(new C.aJn(new A.t(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bf0(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hoI(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cB(d)
return w==null?null:w.b[1]},
hiW(d,e,f,g,h,i,j,k,l,m,n){return new C.a_c(k,f,j,e,l,n,m,d,g,h,i,null)},
aCi(d,e,f,g,h,i,j){return new C.biH(i,d,e,f,j,h,g,null)},
apV:function apV(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aDQ:function aDQ(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dXK:function dXK(d){this.a=d},
dXJ:function dXJ(d){this.a=d},
dXM:function dXM(d,e){this.a=d
this.b=e},
dXN:function dXN(d,e){this.a=d
this.b=e},
dXO:function dXO(d){this.a=d},
dXI:function dXI(d,e){this.a=d
this.b=e},
dXL:function dXL(d){this.a=d},
dXQ:function dXQ(d){this.a=d},
dXP:function dXP(d,e){this.a=d
this.b=e},
apP:function apP(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aDN:function aDN(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dXa:function dXa(d){this.a=d},
dX8:function dX8(d){this.a=d},
dX9:function dX9(d){this.a=d},
dXb:function dXb(d,e){this.a=d
this.b=e},
dX5:function dX5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dWx:function dWx(d){this.a=d},
dWy:function dWy(d,e){this.a=d
this.b=e},
dWP:function dWP(d){this.a=d},
dWN:function dWN(d){this.a=d},
dWO:function dWO(d,e){this.a=d
this.b=e},
dWQ:function dWQ(d){this.a=d},
dWR:function dWR(d,e){this.a=d
this.b=e},
dX4:function dX4(d,e){this.a=d
this.b=e},
dWM:function dWM(d){this.a=d},
dWL:function dWL(d){this.a=d},
dWK:function dWK(d,e){this.a=d
this.b=e},
dX1:function dX1(){},
dX2:function dX2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dX0:function dX0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dWV:function dWV(d){this.a=d},
dWW:function dWW(d,e,f){this.a=d
this.b=e
this.c=f},
dWU:function dWU(d,e){this.a=d
this.b=e},
dWX:function dWX(d,e){this.a=d
this.b=e},
dWS:function dWS(d,e){this.a=d
this.b=e},
dWT:function dWT(){},
dWY:function dWY(d,e){this.a=d
this.b=e},
dWZ:function dWZ(d){this.a=d},
dX_:function dX_(d,e){this.a=d
this.b=e},
dX3:function dX3(d,e){this.a=d
this.b=e},
dWl:function dWl(d,e){this.a=d
this.b=e},
dWm:function dWm(d,e){this.a=d
this.b=e},
dXd:function dXd(d,e,f){this.a=d
this.b=e
this.c=f},
dX7:function dX7(d,e,f){this.a=d
this.b=e
this.c=f},
dX6:function dX6(d){this.a=d},
dWn:function dWn(d){this.a=d},
dWo:function dWo(d){this.a=d},
dWp:function dWp(){},
dWq:function dWq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dWu:function dWu(d,e){this.a=d
this.b=e},
dWt:function dWt(d,e){this.a=d
this.b=e},
dWs:function dWs(d){this.a=d},
dWv:function dWv(d,e){this.a=d
this.b=e},
dWr:function dWr(d){this.a=d},
dXc:function dXc(d){this.a=d},
dWH:function dWH(){},
dWI:function dWI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dWG:function dWG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dWC:function dWC(d,e,f){this.a=d
this.b=e
this.c=f},
dWB:function dWB(d,e,f){this.a=d
this.b=e
this.c=f},
dWz:function dWz(d,e){this.a=d
this.b=e},
dWD:function dWD(d){this.a=d},
dWE:function dWE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dWA:function dWA(d,e){this.a=d
this.b=e},
dWF:function dWF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dWJ:function dWJ(d,e){this.a=d
this.b=e},
dXk:function dXk(){},
dXl:function dXl(d,e){this.a=d
this.b=e},
dXm:function dXm(d){this.a=d},
dXn:function dXn(d,e){this.a=d
this.b=e},
dXg:function dXg(d){this.a=d},
dXe:function dXe(d,e){this.a=d
this.b=e},
dXh:function dXh(d,e){this.a=d
this.b=e},
dXi:function dXi(d,e){this.a=d
this.b=e},
dXj:function dXj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dXo:function dXo(d){this.a=d},
dXf:function dXf(d){this.a=d},
dWw:function dWw(d){this.a=d},
beZ:function beZ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dbr:function dbr(d){this.a=d},
dbq:function dbq(d,e){this.a=d
this.b=e},
dbs:function dbs(d){this.a=d},
dbp:function dbp(d,e){this.a=d
this.b=e},
fwA:function fwA(d,e){this.a=d
this.b=e},
fwB:function fwB(d){this.a=d},
fwC:function fwC(){},
fwy:function fwy(d,e){this.a=d
this.b=e},
fwz:function fwz(){},
fwF:function fwF(d,e){this.a=d
this.b=e},
fwG:function fwG(d){this.a=d},
fwH:function fwH(){},
fwD:function fwD(d){this.a=d},
fwE:function fwE(d,e){this.a=d
this.b=e},
Kk:function Kk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
G0:function G0(d,e){this.a=d
this.b=e},
bf0:function bf0(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dbu:function dbu(d){this.a=d},
dbL:function dbL(d){this.a=d},
dbD:function dbD(d){this.a=d},
dbE:function dbE(){},
dbC:function dbC(d){this.a=d},
dbv:function dbv(){},
dbB:function dbB(d){this.a=d},
dbA:function dbA(d,e){this.a=d
this.b=e},
dbw:function dbw(d){this.a=d},
dbF:function dbF(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dbG:function dbG(d){this.a=d},
dbH:function dbH(d){this.a=d},
dbI:function dbI(){},
dbJ:function dbJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dbK:function dbK(){},
dbt:function dbt(d,e,f,g,h,i,j,k,l,m){var _=this
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
dbx:function dbx(d,e){this.a=d
this.b=e},
dby:function dby(d){this.a=d},
dbz:function dbz(){},
aJn:function aJn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bf1:function bf1(d,e){this.b=d
this.a=e},
dbM:function dbM(){},
dbN:function dbN(d){this.a=d},
dbO:function dbO(d){this.a=d},
dbP:function dbP(){},
biI:function biI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
be3:function be3(d,e){this.b=d
this.a=e},
bwp:function bwp(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fdu:function fdu(d){this.a=d},
blV:function blV(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eP5:function eP5(d){this.a=d},
eP4:function eP4(d,e){this.a=d
this.b=e},
a_c:function a_c(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aCg:function aCg(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
drA:function drA(d,e){this.a=d
this.b=e},
drz:function drz(d){this.a=d},
drx:function drx(d){this.a=d},
dry:function dry(d){this.a=d},
drJ:function drJ(d){this.a=d},
drK:function drK(d){this.a=d},
drI:function drI(d,e){this.a=d
this.b=e},
drL:function drL(){},
drO:function drO(d){this.a=d},
drH:function drH(d,e){this.a=d
this.b=e},
drN:function drN(){},
drP:function drP(d){this.a=d},
drG:function drG(d,e){this.a=d
this.b=e},
drQ:function drQ(d){this.a=d},
drF:function drF(d){this.a=d},
drR:function drR(d){this.a=d},
drE:function drE(d){this.a=d},
drS:function drS(d){this.a=d},
drD:function drD(d){this.a=d},
drT:function drT(d){this.a=d},
drC:function drC(d){this.a=d},
drU:function drU(d){this.a=d},
drB:function drB(d,e){this.a=d
this.b=e},
drM:function drM(d){this.a=d},
adg:function adg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
biH:function biH(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
adf:function adf(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
biG:function biG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
drV:function drV(d){this.a=d},
drW:function drW(d,e){this.a=d
this.b=e},
aCh:function aCh(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aIp:function aIp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
adh:function adh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ds4:function ds4(d){this.a=d},
FX:function FX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hdO(d){var w=d.S,v=x.N
return w.je(w,new C.cbO(),v,v)},
hIx(d){var w=d.bB
if(w>=0)return w
return 5},
hdQ(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hdO(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
hdP(d,e){var w=C.hdQ(d,e)
if(w!=null&&w.cd(new A.V(Date.now(),0,!1)))return!0
return!1},
hIy(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.hdO(d),w,w)
u=C.hdQ(d,e)
t=u!=null&&u.cd(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bS(A.dE(30,0,0,0,0,0).a).a7().ae())
d.S=v},
b_x(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b_x=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lp(t,B.II),$async$b_x)
case 3:if(l){u=!0
w=1
break}u=A.l0(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.II,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_x,v)},
cbO:function cbO(){},
hIv(){var w,v=$.pC(),u=J.e4(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.au(32)]
return"FT"+B.d.hx(u)},
IN(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$IN=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c7(),$async$IN)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_family_tree_backup_codes_v1",null,!1,B.bK),$async$IN)
case 8:r=e
if(r==null){u=A.U(x.N,x.z)
w=1
break}q=J.q(r,"codes")
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
return A.i($async$IN,v)},
a7i(d){return C.hIw(d)},
hIw(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a7i=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c7(),$async$a7i)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hI("ngmy_family_tree_backup_codes_v1",A.G(["codes",d,"savedAt",new A.V(Date.now(),0,!1).a7().ae()],x.N,x.z),!1,!1,B.cG,null),$async$a7i)
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
return A.i($async$a7i,v)},
cbN(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cbN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.IN(),$async$cbN)
case 3:t=m.jY(f),t=t.gaf(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gR(t)
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
return A.i($async$cbN,v)},
NH(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$NH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cbN(d),$async$NH)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.IN(),$async$NH)
case 6:s=f
r=J.a5(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dQ(A.a2(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).a7().ae())
r.n(s,t,o)
w=9
return A.b(C.a7i(s),$async$NH)
case 9:case 8:u=t
w=1
break
case 5:n=C.hIv()
w=10
return A.b(C.IN(),$async$NH)
case 10:s=f
J.aH(s,n,A.G(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).a7().ae(),"updatedAt",new A.V(Date.now(),0,!1).a7().ae()],x.N,x.K))
w=11
return A.b(C.a7i(s),$async$NH)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$NH,v)},
b_w(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b_w=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.IN(),$async$b_w)
case 3:t=f
for(s=J.dn(t),r=s.gdV(t),r=r.dm(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.M)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a7i(t),$async$b_w)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b_w,v)},
a7j(d,e,f){var w=0,v=A.j(x.H),u
var $async$a7j=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.apU(d,e),$async$a7j)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.NH(d),$async$a7j)
case 7:w=4
break
case 5:w=8
return A.b(C.b_w(d),$async$a7j)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a7j,v)},
apO(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$apO=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.apU(f,e),$async$apO)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c7(),$async$apO)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.IN(),$async$apO)
case 7:q=o.q(k,t)
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
return A.i($async$apO,v)},
b_v(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b_v=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c7(),$async$b_v)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.IN(),$async$b_v)
case 4:t=q.q(g,r)
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
return A.i($async$b_v,v)},
hIz(){var w,v=$.pC(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.au(32)]
return"FT"+B.d.hx(u)},
apR(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$apR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c7(),$async$apR)
case 3:if(!g){u=null
w=1
break}t=C.hIz()
w=4
return A.b(A.Vq(),$async$apR)
case 4:s=g
r=B.dK.aM(B.X.ap(d.eY(),null))
r=B.cJ.gct().aM(r)
q=e?999:2
J.aH(s,t,A.G(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).a7().ae()],x.N,x.K))
w=5
return A.b(A.a7k(s),$async$apR)
case 5:p=e?999:2
u=new A.a0n("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apR,v)},
apQ(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$apQ=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Vq(),$async$apQ)
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
return A.b(C.b_v(J.k(l==null?"":l),j),$async$apQ)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cg.cA(0,B.cF.aM(t))
s=C.hdR(r)}catch(f){q=A.ab(f)
$.am.$1("[family tree qr stash] decode: "+A.w(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dQ(A.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).a7().ae())
o.n(p,g,l)}w=5
return A.b(A.a7k(p),$async$apQ)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apQ,v)},
hdR(d){var w,v,u,t,s=null
try{w=B.X.aN(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hIB(A.a2(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
fYo(d){var w=0,v=A.j(x.m),u,t,s
var $async$fYo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.apQ(t[1])
w=1
break}u=null
w=1
break}u=C.hdR(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fYo,v)},
hIB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.dc(v,x.f)
u=A.cF(u,new C.cbQ(),u.$ti.k("K.E"),x.k)
t=A.a6(u).k("Z<K.E>")
s=A.C(new A.Z(u,new C.cbR(),t),t.k("K.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.U(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jY(p),t=t.gaf(t),o=x.B;t.C();){n=t.gR(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.dc(l,u)
n=A.cF(n,new C.cbS(),n.$ti.k("K.E"),o)
k=A.a6(n).k("Z<K.E>")
j=A.C(new A.Z(n,new C.cbT(),k),k.k("K.E"))
if(j.length!==0)q.n(0,m,j)}return new C.apS(h,w,s,r,q)},
apU(d,e){var w=0,v=A.j(x.y),u,t
var $async$apU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Ny(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.AX(d),$async$apU)
case 3:u=t.cK(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apU,v)},
cbZ(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cbZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.AX(d),$async$cbZ)
case 3:t=s.b6(f,new C.cc_(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aW(t,new C.cc0())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cbZ,v)},
Vr(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Vr=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.apU(e,d),$async$Vr)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.NH(e),$async$Vr)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.AX(e),$async$Vr)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dG(r,new C.cbX(g))
r=A.C(t,t.$ti.k("K.E"))}t=J.a5(r)
if(t.gan(r)){u=null
w=1
break}t=t.dF(r,new C.cbY(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.U(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.L5(e,o),$async$Vr)
case 14:n=i
if(J.cK(n))q.n(0,o,n)
case 12:r.length===t||(0,A.M)(r),++p
w=11
break
case 13:u=new C.apS(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Vr,v)},
b_A(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b_A=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Vr(d,e,f,g),$async$b_A)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gI(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.GH(A.Kg(q.eY(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_A,v)},
b_z(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b_z=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Vr(d,e,f,g),$async$b_z)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.apR(r,f),$async$b_z)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aGq(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_z,v)},
Vs(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Vs=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fYo(a0),$async$Vs)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.apO(g.a,d,e,f,s,r),$async$Vs)
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
return A.b(C.bBD(e,j),$async$Vs)
case 12:case 11:w=13
return A.b(C.ahK(e,j,s),$async$Vs)
case 13:h=n.h(0,i)
w=h!=null&&J.cK(h)?14:15
break
case 14:w=16
return A.b(C.B7(e,i,h),$async$Vs)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.M)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bpy(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Vs,v)},
apS:function apS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cbV:function cbV(){},
cbW:function cbW(){},
cbU:function cbU(){},
cbQ:function cbQ(){},
cbR:function cbR(){},
cbS:function cbS(){},
cbT:function cbT(){},
cc_:function cc_(){},
cc0:function cc0(){},
cbX:function cbX(d){this.a=d},
cbY:function cbY(d){this.a=d},
h5Y(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f8(null,x.H)
return A.hE(d,new C.apT(w,e,g,i,f,h,null),!0,null,x.H)},
dbo(d,e,f,g,h,i,j,k){return new C.beY(i,e,k,j,g,f,h,d,null)},
apT:function apT(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aDP:function aDP(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dXx:function dXx(d){this.a=d},
dXy:function dXy(d,e,f){this.a=d
this.b=e
this.c=f},
dXC:function dXC(d,e){this.a=d
this.b=e},
dXD:function dXD(d){this.a=d},
dXu:function dXu(d){this.a=d},
dXv:function dXv(d,e){this.a=d
this.b=e},
dXw:function dXw(d,e){this.a=d
this.b=e},
dXB:function dXB(d){this.a=d},
dXA:function dXA(d,e){this.a=d
this.b=e},
dXz:function dXz(){},
dXF:function dXF(d){this.a=d},
dXG:function dXG(d,e){this.a=d
this.b=e},
dXE:function dXE(d,e){this.a=d
this.b=e},
dbQ:function dbQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bf_:function bf_(d,e,f){this.d=d
this.e=e
this.a=f},
acx:function acx(d,e,f){this.c=d
this.d=e
this.a=f},
beY:function beY(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bf2:function bf2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_x:function a_x(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDO:function aDO(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dXp:function dXp(d,e){this.a=d
this.b=e},
dXq:function dXq(d){this.a=d},
dXr:function dXr(d){this.a=d},
dXs:function dXs(d){this.a=d},
dXt:function dXt(d){this.a=d},
a_y:function a_y(d){this.a=d},
bk7:function bk7(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dXH:function dXH(d,e){this.a=d
this.b=e},
aZ4(d,e){return new C.aZ3(d,e,null)},
aZ3:function aZ3(d,e,f){this.c=d
this.d=e
this.a=f},
i7a(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b7(d,11)},
ieF(d){return A.bU(B.K,null,new C.fN0(new C.tZ(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hfL(d,e){return new C.asN(e,d,null)},
aQA(d,e,f,g,h,i,j){var w=C.i7a(i)
if(w!=null)return A.by(e,new A.a7(j,f,new C.a6o(w,!0,null),null),B.aq)
return M.aPW(e,B.bV,f,g,h,i,j)},
lK:function lK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6o:function a6o(d,e,f){this.c=d
this.d=e
this.a=f},
bjP:function bjP(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b4$=e
_.c=_.a=null},
dJm:function dJm(d){this.a=d},
dJn:function dJn(){},
dJo:function dJo(d,e){this.a=d
this.b=e},
bjO:function bjO(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fN0:function fN0(d){this.a=d},
fN_:function fN_(d,e){this.a=d
this.b=e},
fMZ:function fMZ(d,e){this.a=d
this.b=e},
fMY:function fMY(d,e){this.a=d
this.b=e},
asN:function asN(d,e,f){this.c=d
this.d=e
this.a=f},
cjR:function cjR(d,e){this.a=d
this.b=e},
aLJ:function aLJ(){},
ieq(d){var w=null
return A.cg(w,w,!0,w,new C.fMn(),d,w,!0,!0,x.e2)},
ifA(d,e,f,g,h){var w=null
return A.cg(w,w,!0,w,new C.fTS(h,g,f,e),d,w,!0,!0,x.N)},
ies(d,e){var w=null
return A.cg(w,w,!0,w,new C.fMs(e),d,w,!0,!0,x.dY)},
ier(d){var w=null
return A.cg(w,w,!0,w,new C.fMr(),d,w,!0,!0,x.c5)},
aTA:function aTA(d,e){this.a=d
this.b=e},
aTz:function aTz(d){this.a=d},
aRy:function aRy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fMn:function fMn(){},
fTS:function fTS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fMs:function fMs(d){this.a=d},
fMr:function fMr(){},
Za:function Za(d,e){this.c=d
this.a=e},
az1:function az1(){var _=this
_.d=$
_.c=_.a=_.e=null},
d38:function d38(d){this.a=d},
d39:function d39(d){this.a=d},
d37:function d37(d,e){this.a=d
this.b=e},
d3a:function d3a(d){this.a=d},
d3b:function d3b(d){this.a=d},
Z9:function Z9(d){this.a=d},
az0:function az0(){this.d=$
this.c=this.a=null},
d34:function d34(d){this.a=d},
d35:function d35(d){this.a=d},
d36:function d36(d){this.a=d},
YH:function YH(d){this.a=d},
axI:function axI(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cBA:function cBA(){},
cBG:function cBG(d){this.a=d},
cBH:function cBH(d){this.a=d},
cBI:function cBI(d){this.a=d},
cBF:function cBF(){},
cBJ:function cBJ(d){this.a=d},
cBK:function cBK(d){this.a=d},
cBE:function cBE(){},
cBL:function cBL(d,e){this.a=d
this.b=e},
cBD:function cBD(d,e){this.a=d
this.b=e},
cBB:function cBB(d,e){this.a=d
this.b=e},
cBM:function cBM(d){this.a=d},
cBC:function cBC(){},
cBN:function cBN(d){this.a=d},
a1j:function a1j(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bwf:function bwf(){this.d=$
this.c=this.a=null},
fcO:function fcO(d,e){this.a=d
this.b=e},
fcP:function fcP(d){this.a=d},
fcQ:function fcQ(d,e){this.a=d
this.b=e},
abC:function abC(d,e){this.a=d
this.b=e},
FN:function FN(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bwd:function bwd(d,e){var _=this
_.d=$
_.bz$=d
_.a9$=e
_.c=_.a=null},
fcM:function fcM(d,e){this.a=d
this.b=e},
axB:function axB(d,e){this.c=d
this.a=e},
bwe:function bwe(d,e){var _=this
_.d=$
_.bz$=d
_.a9$=e
_.c=_.a=null},
fcN:function fcN(d){this.a=d},
bwc:function bwc(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aNK:function aNK(){},
aNL:function aNL(){},
bDA(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bj(u),s=B.o.E(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oP(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fKS(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aZ(B.o.u(s),2,"0")
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Y6(A.cS(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aQb(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aQb=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hV().kZ(85,1280,B.eJ),$async$aQb)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fj(),$async$aQb)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hfK()
w=9
return A.b(C.cjQ(q,r),$async$aQb)
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
return A.i($async$aQb,v)},
aQy(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aQy=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.cjN(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.t(g,",")?B.d.gak(g.split(",")):g
p=B.cF.aM(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.S().LS(p,!0,null,i).da(0,B.fW),$async$aQy)
case 9:n=a1
w=10
return A.b(n.lK(),$async$aQy)
case 10:m=a1
w=11
return A.b(J.a3_(m).hr(B.h8),$async$aQy)
case 11:l=a1
J.a3_(m).q()
if(l==null){w=8
break}i=J.eQ(B.dG.gaR(l))
k="data:image/png;base64,"+B.cJ.gct().aM(i)
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
return A.i($async$aQy,v)},
fKS:function fKS(){},
tZ:function tZ(d){this.a=d},
asM:function asM(d,e,f){this.c=d
this.d=e
this.a=f},
aFg:function aFg(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eMf:function eMf(d,e){this.a=d
this.b=e},
eM6:function eM6(d){this.a=d},
eM7:function eM7(d){this.a=d},
eMd:function eMd(d,e){this.a=d
this.b=e},
eMc:function eMc(d,e){this.a=d
this.b=e},
eM9:function eM9(d,e){this.a=d
this.b=e},
eM8:function eM8(d,e){this.a=d
this.b=e},
eMa:function eMa(d){this.a=d},
eMb:function eMb(d,e){this.a=d
this.b=e},
eMe:function eMe(d,e){this.a=d
this.b=e},
eM1:function eM1(d,e){this.a=d
this.b=e},
eM5:function eM5(d){this.a=d},
eM4:function eM4(d,e){this.a=d
this.b=e},
eM3:function eM3(d){this.a=d},
eMg:function eMg(d,e){this.a=d
this.b=e},
eMh:function eMh(d,e){this.a=d
this.b=e},
eM2:function eM2(d,e){this.a=d
this.b=e},
hsy(d,e,f){var w="thumbnailPath",v=e.ag()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.G(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).a7().ae(),"project",v],x.N,x.z)},
fKT(d,e,f){var w=0,v=A.j(x.N),u
var $async$fKT=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.X.ap(C.hsy(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fKT,v)},
bDC(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bDC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fKT(!0,d,e),$async$bDC)
case 4:w=3
return A.b(r.asK(g,d,e.a),$async$bDC)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dK.aM(B.X.ap(C.hsy(d,e,null),null))
u="NGMY_WS:"+B.kt.gct().aM(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDC,v)},
hkj(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
h5D(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d2(s,"NGMYWSSYNC2|"))return!0
if(J.d2(s,"NGMY_WS:"))return!0
if(J.f0(s,t))return!0
if(J.d2(s,"{"))try{w=B.X.aN(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
ici(d){var w,v,u,t=C.hkj(d)
if(t==null)return null
if(C.h5D(t))return t
w=B.a.cu(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b7(t,w))
if(C.h5D(v))return v}u=B.a.cu(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b7(t,u))
if(C.h5D(v))return v}return null},
h5C(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d2(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d2(q,"NGMY_WS:")){v=B.cg.cA(0,B.cF.aM(J.ne(q,8)))
w=t.a(B.X.aN(0,v,r))}else w=t.a(B.X.aN(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.h02(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bDB(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bDB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.asJ(t[1]),$async$bDB)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.h5C(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.h5C(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDB,v)},
h5B(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.ls(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bD7(){var w=0,v=A.j(x.o),u,t
var $async$bD7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.GT(),$async$bD7)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.h5C(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bD7,v)},
hty(d,e,f,g){return A.bU(B.K,null,new C.fTI(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fTI:function fTI(d,e,f){this.a=d
this.b=e
this.c=f},
adC:function adC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eMj:function eMj(d,e){this.a=d
this.b=e},
eMk:function eMk(d,e){this.a=d
this.b=e},
eMl:function eMl(d,e){this.a=d
this.b=e},
eMm:function eMm(d,e){this.a=d
this.b=e},
eMi:function eMi(d){this.a=d},
asG:function asG(d,e,f){this.c=d
this.d=e
this.a=f},
blq:function blq(){var _=this
_.c=_.a=_.e=_.d=null},
eLX:function eLX(d,e){this.a=d
this.b=e},
eLY:function eLY(d){this.a=d},
eLZ:function eLZ(d){this.a=d},
asL:function asL(d){this.a=d},
aFf:function aFf(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eM0:function eM0(d){this.a=d},
eM_:function eM_(d){this.a=d},
hLO(d,e,f,g,h){return new C.Ol(h,g,d,e,f,null)},
aK5:function aK5(d,e){this.a=d
this.b=e},
Ol:function Ol(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFh:function aFh(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eMJ:function eMJ(){},
eMF:function eMF(d,e){this.a=d
this.b=e},
eMG:function eMG(d){this.a=d},
eMq:function eMq(d){this.a=d},
eMo:function eMo(d){this.a=d},
eMp:function eMp(d){this.a=d},
eMz:function eMz(d,e){this.a=d
this.b=e},
eMw:function eMw(d,e){this.a=d
this.b=e},
eMx:function eMx(d,e){this.a=d
this.b=e},
eMy:function eMy(d,e,f){this.a=d
this.b=e
this.c=f},
eMu:function eMu(d,e,f){this.a=d
this.b=e
this.c=f},
eMs:function eMs(d){this.a=d},
eMt:function eMt(d){this.a=d},
eMv:function eMv(d){this.a=d},
eMM:function eMM(d){this.a=d},
eML:function eML(d){this.a=d},
eMN:function eMN(d){this.a=d},
eMK:function eMK(d){this.a=d},
eMn:function eMn(d){this.a=d},
eMr:function eMr(d,e){this.a=d
this.b=e},
eMI:function eMI(d,e){this.a=d
this.b=e},
eMH:function eMH(d,e){this.a=d
this.b=e},
eMC:function eMC(d){this.a=d},
eMD:function eMD(d){this.a=d},
eME:function eME(d,e){this.a=d
this.b=e},
eMB:function eMB(d,e){this.a=d
this.b=e},
eMA:function eMA(d,e,f){this.a=d
this.b=e
this.c=f},
bxW:function bxW(){},
AM(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ag9(d,e,f){return C.i0D(d,e,f)},
i0D(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ag9=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.ar("String",e,f),$async$ag9)
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
return A.i($async$ag9,v)},
ag8(d,e){return C.i0C(d,e)},
i0C(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$ag8=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$ag8)
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
return A.i($async$ag8,v)},
i_n(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.T2(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bAD(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bAD=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b2N(q),$async$bAD)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aQy(q,!1),$async$bAD)
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
return A.i($async$bAD,v)},
hzt(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aK(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.r9(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.r9(p,J.k(u==null?"":u),1,o,q)},
h02(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.dc(s,x.f)
w=A.cF(w,new C.cAX(),w.$ti.k("K.E"),x.Q)
v=A.a6(w).k("Z<K.E>")
r=A.C(new A.Z(w,new C.cAY(),v),v.k("K.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.ls(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
i4C(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.w0
case"female":case"f":return D.oa
default:return D.yq}},
hpf(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
h9R(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.i4C(v==null?j:J.k(v))
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
i4E(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.NE
case"viewer":return D.kF
default:return D.u6}},
i4F(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
GI(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aPi(d,e){return B.a.i(e.toLowerCase())===C.GI(d,e)&&d.y!==D.kF},
uc(d,e){var w,v=d.y
if(v===D.kF)return!1
w=B.a.i(e.toLowerCase())
if(w===C.GI(d,e))return!0
if(v===D.NE)return!0
v=d.e
return new A.N(v,A.h5I(),A.T(v).k("N<1,n>")).t(0,w)},
i44(d){return J.dG(d,new C.fvA()).gL(0)},
fUr(d){var w=0,v=A.j(x.y),u,t
var $async$fUr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.AX(d),$async$fUr)
case 3:u=t.r4(f,new C.fUs(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fUr,v)},
bBD(d,e){var w=0,v=A.j(x.H),u,t
var $async$bBD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.AX(d),$async$bBD)
case 3:t=g
if(J.r4(t,new C.ftu(e))){w=1
break}if(C.i44(t)>=2)throw A.W(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bBD,v)},
al3(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.dc(h,x.f)
w=A.cF(w,new C.bQ3(),w.$ti.k("K.E"),x.P)
v=A.a6(w).k("Z<K.E>")
g=A.C(new A.Z(w,new C.bQ4(),v),v.k("K.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b6(u,new C.bQ5(),x.N)
t=A.C(w,w.$ti.k("ak.E"))}else t=A.a([],x.s)
w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
s=d.h(0,"code")
s=J.k(s==null?"":s)
r=J.A(d.h(0,"isPrivate"),!1)
q=d.h(0,"createdAt")
q=A.bi(J.k(q==null?"":q))
if(q==null)q=new A.V(Date.now(),0,!1)
p=A.aK(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.k.N(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.i4E(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aV(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cy)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gR(f)
if(l.b(i))m.push(A.a2(i,k,j))}return new C.kL(w,v,s,!r,t,g,q,p,o,n,m)},
hpp(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.aq(v,0,8)},
D6(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$D6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.RM(d),$async$D6)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$D6)
case 4:t=f
w=5
return A.b(t.a6y(0),$async$D6)
case 5:w=6
return A.b(C.fkp(t,l),$async$D6)
case 6:s=f
if(J.cK(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a5(q)
o=A.aU(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hkT(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oO(l,n),$async$D6)
case 11:u=n
w=1
break
case 10:case 8:m=A.aU(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hkT(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oO(l,n),$async$D6)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$D6,v)},
fkp(d,e){return C.hXP(d,e)},
hXP(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fkp=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a5(a3)
a5=A.aU(a4.h(a3,"ngmy_worksheets_index_v3_"+C.AM(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.X.aN(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aV(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gR(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aU(a4.h(a3,"ngmy_worksheet_item_v3_"+C.AM(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.X.aN(0,m,null)
if(!a0.b(l)){w=7
break}k=C.h02(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aU(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.AM(a9)+"_"+n))
i=C.i_n(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b2N(h),$async$fkp)
case 17:g=b1
if(g!=null){i=i.T2(g)
p=!0}case 16:J.cb(q,i)
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
case 8:J.RY(q,new C.fkq())
if(p&&J.ad(q)!==0)C.oO(a9,q)
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
return A.i($async$fkp,v)},
bC3(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bC3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.RM(d),$async$bC3)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.D6(r),$async$bC3)
case 4:t=p.aV(g)
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
return A.i($async$bC3,v)},
hkT(d){var w,v,u,t
try{w=B.X.aN(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.dc(w,x.f)
v=A.cF(v,new C.fgg(),v.$ti.k("K.E"),x.fA)
u=A.a6(v).k("Z<K.E>")
v=A.C(new A.Z(v,new C.fgh(),u),u.k("K.E"))
B.d.aW(v,new C.fgi())
return v}catch(t){v=A.a([],x.D)
return v}},
oO(d,e){return C.ieg(d,e)},
ieg(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oO=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.RM(b2),$async$oO)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$oO)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.AM(a8)
p=A.aU(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.X.aN(0,p,null)),new C.fMe(),a2).fH(0)
a2=J.b6(b3,new C.fMf(),a2).c0(0,new C.fMg())
n=A.de(a2,a2.$ti.k("K.E"))
a2=o,a2=A.eo(a2,a2.r,A.a6(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f0(n,m)?17:18
break
case 17:a5=C.AM(a8)
l=A.aU(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a8C(l),$async$oO)
case 19:t=21
a5=C.AM(a8)
k=A.aU(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.X.aN(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a8C(a5==null?null:J.k(a5)),$async$oO)
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
return A.b(C.ag8(r,"ngmy_worksheet_item_v3_"+C.AM(a8)+"_"+m),$async$oO)
case 29:w=30
return A.b(C.ag8(r,"ngmy_worksheet_thumb_v3_"+C.AM(a8)+"_"+m),$async$oO)
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
case 14:case 10:a2=J.cD(b3),a3=a2.gaf(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gR(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bAD(h),$async$oO)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ag9(r,"ngmy_worksheet_thumb_v3_"+C.AM(a8)+"_"+a4,f),$async$oO)
case 40:g=i.T2(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ag8(r,"ngmy_worksheet_thumb_v3_"+C.AM(a8)+"_"+a4),$async$oO)
case 41:g=i.T2(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ag8(r,"ngmy_worksheet_thumb_v3_"+C.AM(a8)+"_"+a4),$async$oO)
case 42:case 34:a4=i.a
w=43
return A.b(C.ag9(r,"ngmy_worksheet_item_v3_"+C.AM(a8)+"_"+a4,B.X.ap(g.ag(),null)),$async$oO)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.cb(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ag9(r,"ngmy_worksheets_index_v3_"+C.AM(a8),B.X.ap(q,null)),$async$oO)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eX(b3,new C.fMh(q))
a4=a3.$ti.k("cQ<1,a8<n,@>>")
a7=A.C(new A.cQ(a3,new C.fMi(),a4),a4.k("K.E"))
a0=a7
w=45
return A.b(C.ag9(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.X.ap(a0,null)),$async$oO)
case 45:w=46
return A.b(J.hyz(r),$async$oO)
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
return A.i($async$oO,v)},
Lv(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Lv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.D6(d),$async$Lv)
case 3:t=g
s=J.cD(t)
r=s.bg(t,new C.fUq(e))
if(r===-1)s.c8(t,0,e)
else s.n(t,r,e)
u=C.oO(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Lv,v)},
bBR(d,e){var w=0,v=A.j(x.H),u
var $async$bBR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.D6(d),$async$bBR)
case 2:u=g
J.ny(u,new C.fw3(e))
w=3
return A.b(C.oO(d,u),$async$bBR)
case 3:return A.h(null,v)}})
return A.i($async$bBR,v)},
GK(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$GK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$GK)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aU(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.X.aN(0,i,null)
if(x.j.b(t)){j=J.dc(t,x.f)
j=A.cF(j,new C.fyS(),j.$ti.k("K.E"),x.k)
s=A.a6(j).k("Z<K.E>")
r=A.C(new A.Z(j,new C.fyT(),s),s.k("K.E"))
B.d.aW(r,new C.fyU())
k=r}}catch(h){}w=4
return A.b(C.fh0(d),$async$GK)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hYb(k,p,d)
j=A.T(o)
s=j.k("N<1,a8<n,@>>")
s=A.C(new A.N(o,new C.fyV(),s),s.k("ak.E"))
n=B.X.ap(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.QY(d,o),$async$GK)
case 7:case 6:j=j.k("Z<1>")
m=A.C(new A.Z(o,new C.fyW(d),j),j.k("K.E"))
if(m.length!==0)C.aP2(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$GK,v)},
fM0(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fM0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QY(d,e),$async$fM0)
case 3:t=J.dG(e,new C.fM1(d))
s=A.C(t,t.$ti.k("K.E"))
if(s.length===0){u=!0
w=1
break}u=C.aP2(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fM0,v)},
a2T(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a2T=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a2T)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aU(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.X.aN(0,l,null)
if(x.j.b(u)){m=J.dc(u,x.f)
m=A.cF(m,new C.fUl(),m.$ti.k("K.E"),x.k)
t=A.a6(m).k("Z<K.E>")
s=A.C(new A.Z(m,new C.fUm(),t),t.k("K.E"))
o=s}}catch(k){}q=J.qp(o,new C.fUn(e))
if(B.a.i(e.x).length===0&&C.uc(e,d)){m=B.a.i(d.toLowerCase())
p=e.aEv(e.y===D.kF?D.kF:D.u6,m)}else p=e
if(q===-1)J.pF(o,0,p)
else J.aH(o,q,p)
w=3
return A.b(C.QY(d,o),$async$a2T)
case 3:w=C.uc(p,d)?4:5
break
case 4:w=6
return A.b(C.aP1(C.GI(p,d),p),$async$a2T)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a2T,v)},
aPe(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aPe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.GK(d),$async$aPe)
case 2:u=g
t=J.cD(u)
s=A.pP(t.eX(u,new C.fvL(e)))
t.bu(u,new C.fvM(e))
w=3
return A.b(C.QY(d,u),$async$aPe)
case 3:w=s!=null&&C.aPi(s,d)?4:5
break
case 4:w=6
return A.b(C.fgk(e),$async$aPe)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aPe,v)},
ahZ(d){var w=d.f,v=A.T(w).k("Z<1>")
w=A.C(new A.Z(w,new C.fUw(),v),v.k("K.E"))
return w},
h3g(d,e){var w,v=d.f,u=A.pP(new A.Z(v,new C.fvf(e),A.T(v).k("Z<1>")))
v=C.ahZ(d)
w=A.T(v).k("Z<1>")
v=A.C(new A.Z(v,new C.fvg(e,u),w),w.k("K.E"))
B.d.aW(v,new C.fvh())
return v},
i4I(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
htC(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bg(C.h3g(d,u),new C.fTT(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
i6f(d,e){var w
if(e==null||e.length===0)return 1
w=C.h3g(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fzG(),A.T(w).k("N<1,H>")).fa(0,B.AI)+1},
ie9(d){var w,v=C.ahZ(d)
if(v.length===0)return null
w=new A.Z(v,new C.fLV(),A.T(v).k("Z<1>"))
if(!w.gan(0))return w.gI(0)
return B.d.gI(v)},
i4D(d){return A.G(["id",d.a,"name",d.b,"gender",C.hpf(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
i6a(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.U(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aY(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.M)(a0),++u){q=a0[u]
p=q.a
r.M(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.yq?n:q.c
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
d=q.aEq(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.M)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cLh(a1,w,a3.d,a2.y,s,a0,v)},
AX(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$AX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$AX)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aU(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.X.aN(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.dc(t,x.f)
p=A.cF(p,new C.fyP(),p.$ti.k("K.E"),x.k)
s=A.a6(p).k("Z<K.E>")
p=A.C(new A.Z(p,new C.fyQ(),s),s.k("K.E"))
B.d.aW(p,new C.fyR())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$AX,v)},
ahK(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ahK=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.u6:D.kF
a7=C.GI(b2,b3)
w=2
return A.b(C.AX(b1),$async$ahK)
case 2:a8=b5
a9=J.cD(a8)
b0=a9.bg(a8,new C.fLQ(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bBD(b1,b2),$async$ahK)
case 5:case 4:if(b0===-1){u=b2.aEv(a6,a7)
a9.c8(a8,0,u)}else{t=a9.h(a8,b0)
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
i=i!==D.yq?i:l.c
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
s.n(0,m,l.aEq(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.C(new A.bc(s,k),k.k("K.E"))
k=a5?D.u6:D.kF
u=t.cLj(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.QY(b1,a8),$async$ahK)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aP1(B.a.i(b3.toLowerCase()),u),$async$ahK)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ahK,v)},
hlh(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).a7().ae(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("N<1,a8<n,@>>"),k=A.C(new A.N(m,C.hsH(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.G(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.G(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a7().ae(),"updatedAt",o],r,x.K),"createdAt",s.a7().ae(),"updatedAt",o],r,x.z)},
hli(d,e){var w=new A.V(Date.now(),0,!1).a7().ae(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("N<1,a8<n,@>>")
u=A.C(new A.N(u,C.hsH(),t),t.k("ak.E"))
return A.G(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a7().ae(),"updatedAt",w],x.N,x.z)},
hVH(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a5(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.al3(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.h5I(),A.T(j).k("N<1,n>")).c0(0,new C.fgO())
t=A.C(j,j.$ti.k("K.E"))
if(u===v)s=D.u6
else s=B.d.t(t,u)?D.NE:D.kF
return w.aEv(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.al3(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.dc(q,h)
h=A.cF(h,new C.fgP(),h.$ti.k("K.E"),x.P)
p=A.a6(h).k("Z<K.E>")
o=A.C(new A.Z(h,new C.fgQ(),p),p.k("K.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.fgR(),x.N).c0(0,new C.fgS())
t=A.C(h,h.$ti.k("K.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.u6
else s=B.d.t(t,u)?D.NE:D.kF
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.A(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bi(J.k(l==null?"":l))
if(l==null)l=new A.V(Date.now(),0,!1)
j=A.aK(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.N(j)
if(j==null)j=0
return new C.kL(h,r,p,!m,t,o,l,j,v,s,B.c8)},
fh0(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fh0=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fh4()
h=x.N
g=x.z
w=7
return A.b(A.iP(A.a([A.ly("family_trees","*",null,A.G(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bK),r.$2(A.ly("family_trees","*",A.G(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bK),"collaborator"),r.$2(A.ly("family_trees","*",null,A.G(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bK),"public")],x.cl),x.fO),$async$fh0)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
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
g=J.q(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aH(m,j,k)}l=m
h=A.a6(l).k("bc<2>")
h=A.cF(new A.bc(l,h),new C.fh1(a0),h.k("K.E"),x.k)
l=A.a6(h).k("Z<K.E>")
l=A.C(new A.Z(h,new C.fh2(),l),l.k("K.E"))
B.d.aW(l,new C.fh3())
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
return A.i($async$fh0,v)},
hYb(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a5(e)
if(j.gan(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dF(e,new C.fl6(),v).c0(0,new C.fl7())
t=A.de(u,u.$ti.k("K.E"))
s=A.U(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.M)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.GI(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kF){m=q.e
m=!new A.N(m,A.h5I(),A.T(m).k("N<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gaf(e);j.C();){v=j.gR(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.i6a(l,v)
o=C.GI(k,w)
p=v.d
s.n(0,u,o===w?k.bcJ(p,D.u6):k.bcJ(p,v.y))}j=s.$ti.k("bc<2>")
j=A.C(new A.bc(s,j),j.k("K.E"))
B.d.aW(j,new C.fl8())
return j},
QY(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$QY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$QY)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fnQ(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.ar("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.X.ap(s,null)),$async$QY)
case 3:return A.h(null,v)}})
return A.i($async$QY,v)},
aP1(d,e){return C.i2q(d,e)},
i2q(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aP1=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.m3("family_trees",A.a([C.hlh(e,d)],p),null,B.cG),$async$aP1)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.m3("family_trees",A.a([C.hli(e,d)],p),null,B.cG),$async$aP1)
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
return A.i($async$aP1,v)},
aP2(d,e){return C.i2r(d,e)},
i2r(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aP2=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("N<1,a8<n,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fsO(d),n),m)
r=l
w=7
return A.b(A.m3("family_trees",r,null,B.cG),$async$aP2)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fsP(d),n),m)
p=k
w=8
return A.b(A.m3("family_trees",p,null,B.cG),$async$aP2)
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
return A.i($async$aP2,v)},
fgk(d){return C.hV_(d)},
hV_(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fgk=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Rm("family_trees",A.G(["id",d],x.N,x.z),null,B.cG),$async$fgk)
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
return A.i($async$fgk,v)},
r9:function r9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ls:function ls(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cB_:function cB_(){},
cAZ:function cAZ(){},
cAX:function cAX(){},
cAY:function cAY(){},
HT:function HT(d,e){this.a=d
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
al2:function al2(d,e){this.a=d
this.b=e},
fvA:function fvA(){},
fUs:function fUs(d){this.a=d},
ftu:function ftu(d){this.a=d},
kL:function kL(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bQ7:function bQ7(){},
bQ6:function bQ6(){},
bQ3:function bQ3(){},
bQ4:function bQ4(){},
bQ5:function bQ5(){},
fkq:function fkq(){},
fgg:function fgg(){},
fgh:function fgh(){},
fgi:function fgi(){},
fMe:function fMe(){},
fMf:function fMf(){},
fMg:function fMg(){},
fMh:function fMh(d){this.a=d},
fMi:function fMi(){},
fUq:function fUq(d){this.a=d},
fw3:function fw3(d){this.a=d},
fyS:function fyS(){},
fyT:function fyT(){},
fyU:function fyU(){},
fyV:function fyV(){},
fyW:function fyW(d){this.a=d},
fM1:function fM1(d){this.a=d},
fUl:function fUl(){},
fUm:function fUm(){},
fUn:function fUn(d){this.a=d},
fvL:function fvL(d){this.a=d},
fvM:function fvM(d){this.a=d},
fUw:function fUw(){},
fvf:function fvf(d){this.a=d},
fvg:function fvg(d,e){this.a=d
this.b=e},
fvh:function fvh(){},
fTT:function fTT(d){this.a=d},
fzG:function fzG(){},
fLV:function fLV(){},
fyP:function fyP(){},
fyQ:function fyQ(){},
fyR:function fyR(){},
fLQ:function fLQ(d){this.a=d},
fgO:function fgO(){},
fgP:function fgP(){},
fgQ:function fgQ(){},
fgR:function fgR(){},
fgS:function fgS(){},
fh4:function fh4(){},
fh5:function fh5(d){this.a=d},
fh1:function fh1(d){this.a=d},
fh2:function fh2(){},
fh3:function fh3(){},
fl6:function fl6(){},
fl7:function fl7(){},
fl8:function fl8(){},
fnQ:function fnQ(){},
fsO:function fsO(d){this.a=d},
fsP:function fsP(d){this.a=d},
cB0:function cB0(d,e){this.a=d
this.b=e},
cB1:function cB1(d,e){this.a=d
this.b=e},
aHm:function aHm(d,e,f){this.a=d
this.b=e
this.c=f},
b99:function b99(){this.b=this.a=0},
b98:function b98(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bwg:function bwg(){},
wW(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gcf()+"/"+w.gcw()+"/"+w.gck()
if(!e)return v
return v+" "+B.a.aZ(B.o.u(w.gnj()),2,"0")+":"+B.a.aZ(B.o.u(w.gGr()),2,"0")},
hLL(){var w,v=$.pC(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.au(32)]
return"WS"+B.d.hx(u)},
asH(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$asH=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c7(),$async$asH)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bK),$async$asH)
case 8:r=e
if(r==null){u=A.U(x.N,x.z)
w=1
break}q=J.q(r,"stashes")
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
return A.i($async$asH,v)},
asI(d){return C.hLM(d)},
hLM(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$asI=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c7(),$async$asI)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hI("ngmy_worksheet_project_qr_stashes_v1",A.G(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).a7().ae()],x.N,x.z),!1,!1,B.cG,null),$async$asI)
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
return A.i($async$asI,v)},
asK(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$asK=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c7(),$async$asK)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hLL()
w=4
return A.b(C.asH(),$async$asK)
case 4:r=h
q=B.a.i(e)
p=B.dK.aM(t)
J.aH(r,s,A.G(["ownerEmail",q,"projectId",f,"payload",B.cJ.gct().aM(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).a7().ae()],x.N,x.K))
w=5
return A.b(C.asI(r),$async$asK)
case 5:u=new A.a0n("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asK,v)},
asJ(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$asJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c7(),$async$asJ)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.asH(),$async$asJ)
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
try{s=B.cg.cA(0,B.cF.aM(t))}catch(h){r=A.ab(h)
$.am.$1("[worksheet qr stash] decode: "+A.w(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dQ(A.a2(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).a7().ae())
p.n(q,i,m)}w=5
return A.b(C.asI(q),$async$asJ)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asJ,v)},
hfK(){var w=new A.V(Date.now(),0,!1).a7()
return"wst_"+(1000*w.a+w.b)+"_"+B.cZ.au(999999)},
hLN(d){var w,v,u,t,s,r,q
try{w=A.agz(d)
if(w==null)return d
v=w
if(J.LA(v)>960||J.Lz(v)>960){s=v
r=J.LA(v)>=J.Lz(v)?960:null
v=A.agy(s,J.Lz(v)>J.LA(v)?960:null,B.OW,r)}s=v
u=A.amr(82).Tp(s,B.z5)
if(J.ad(u)===0)return d
s=new Uint8Array(A.ci(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
cjQ(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cjQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hLN(e)
$.cjM.n(0,s,t)
u=C.bDE(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cjQ,v)},
b2N(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b2N=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d2(l,"data:image")){u=null
w=1
break}t=4
r=J.f0(l,",")?B.d.gak(J.lB(l,",")):l
q=B.cF.aM(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hfK()
w=7
return A.b(C.cjQ(p,q),$async$b2N)
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
return A.i($async$b2N,v)},
cjN(d){var w=0,v=A.j(x.T),u,t,s
var $async$cjN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(M.cjP(s),$async$cjN)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cJ.gct().aM(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cjN,v)},
a8C(d){var w=0,v=A.j(x.H),u,t
var $async$a8C=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=M.hsz(d)
if(t==null){w=1
break}$.cjM.W(0,t)
w=3
return A.b(C.bDD(t),$async$a8C)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a8C,v)},
bDE(d,e){return C.icl(d,e)},
icl(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bDE=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aNX
w=7
return A.b(n==null?$.aNX=M.h2d():n,$async$bDE)
case 7:r=g
q=new Uint8Array(A.ci(e))
p=J.mP(r,"thumbs","readwrite")
B.iZ.mm(J.mO(p,"thumbs"),q,l)
w=8
return A.b(J.pE(p),$async$bDE)
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
return A.i($async$bDE,v)},
bDD(d){return C.icj(d)},
icj(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bDD=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aNX
w=7
return A.b(o==null?$.aNX=M.h2d():o,$async$bDD)
case 7:r=f
q=J.mP(r,"thumbs","readwrite")
B.iZ.FZ(J.mO(q,"thumbs"),m)
w=8
return A.b(J.pE(q),$async$bDD)
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
return A.i($async$bDD,v)}},D,As,At,Z,Au,Av,M
J=c[1]
A=c[0]
B=c[2]
A9=c[82]
P=c[244]
A_=c[158]
S=c[57]
Aa=c[227]
I=c[208]
H=c[33]
E=c[218]
T=c[118]
Q=c[153]
O=c[106]
Ab=c[115]
Ac=c[195]
A0=c[116]
Ad=c[226]
Ae=c[40]
R=c[225]
L=c[90]
A1=c[85]
A2=c[164]
Af=c[126]
A3=c[167]
A4=c[239]
A5=c[196]
Ag=c[187]
Ah=c[199]
A6=c[194]
Ai=c[242]
Aj=c[70]
A7=c[243]
Ak=c[76]
A8=c[212]
Al=c[246]
Am=c[32]
U=c[117]
N=c[189]
An=c[200]
Ao=c[122]
Ap=c[149]
V=c[245]
Aq=c[130]
W=c[235]
X=c[39]
G=c[99]
Ar=c[31]
K=c[105]
F=c[132]
Y=c[74]
C=a.updateHolder(c[7],C)
D=c[238]
As=c[75]
At=c[206]
Z=c[241]
Au=c[240]
Av=c[61]
M=c[58]
C.aoB.prototype={}
C.aZ5.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bh3(),f=h.x!=null&&h.za(i).length===0
if(h.x!=null)w=f?B.b_:B.by
else w=h.gU2()?B.by:B.dW
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.J(D.bkr,B.r,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.f_8,B.f,i,i,new A.o(B.b_.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h4,i,i,i),B.W,D.ftU,B.av,A.d(C.wW(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fpF,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.b3c,i,i,i,i,B.a_8,i,i,i)
q=A.m(16)
p=A.J(B.aL,B.r,1)
o=A.J(B.b_.j(0.28),B.r,1)
n=A.h4g(h.d)
o=A.p(B.A,C.aZ4(A.fC0(h.e,n),30),B.f,i,i,new A.o(B.lZ,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fkR,B.L,i,i)
m=A.m(14)
l=A.J(B.aL,B.r,1)
q=A.p(i,A.x(A.a([o,B.O,n,B.bA,D.fub,B.ad,A.p(i,A.x(A.a([D.fJY,B.bA,A.d(A.AZ(h.c),i,i,i,i,i,i,D.ffF,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fc,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,p,q,i,i,B.n),i,i,i,i,N.ajC,i,i,i)
p=A.m(16)
m=A.J(B.aL,B.r,1)
l=j.aRc("Original due",C.wW(h.r,!1))
n=j.aRc("Current due",C.wW(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.W,A.p(i,A.x(A.a([l,B.O,n,B.W,A.p(i,A.d(h.gaLk(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.By,i,i,1/0),B.W,j.cgy(),B.O,j.c3U(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bf,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.J(B.aL,B.r,1)
B.d.v(p,A.a([B.W,A.p(i,A.x(A.a([D.fv8,B.av,A.d(q,i,i,i,i,i,i,D.fk6,i,i,i)],s),B.E,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bf,i,i,1/0)],s))}if(h.gaG7()){q=A.m(14)
o=A.J(B.cr,B.r,1.6)
B.d.v(p,A.a([B.W,A.p(i,A.x(A.a([D.fLh,B.O,A.by(A.m(12),A.en(new A.a7(1/0,88,A.b4(i,i,i,new A.Wc(h.ax,B.M,D.f3m,!0,3.5,i),B.ax),i),B.c,!0),B.aq)],s),B.E,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.FW,i,i,i)],s))}p.push(B.aA)
p.push(D.fDg)
return A.p(i,A.x(A.a([r,new A.D(B.ZX,A.x(p,B.aj,i,B.e,B.j,0,B.p),i)],s),B.aj,i,B.e,B.Q,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aRc(d,e){var w=null
return A.B(A.a([A.E(A.d(d,w,w,w,w,w,w,D.a9C,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fgI,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
cgy(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a9L(B.dW,u,"Not paid yet")
w=t.za(null).length
v=w===0?B.b_:B.by
return this.a9L(v,u,C.wW(t.x,!0))},
c3U(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a9L(B.b_,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a9L(B.b_,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a9C,u,u,u)
v=A.T(d).k("N<1,h_>")
v=A.C(new A.N(d,new C.c5g(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bW(B.bE,v,B.bq,u,6,6)],x.p),B.E,u,B.e,B.j,0,B.p)},
a9L(d,e,f){var w=null
return A.B(A.a([A.E(A.d(e,w,w,w,w,w,w,D.a9C,w,w,w),1),new A.ds(1,B.co,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dU,w,w),w)],x.p),B.E,w,B.e,B.j,0,w,w)}}
C.bbh.prototype={
a1(d,e){new A.Wc(this.b,B.M,e,!0,3.5,null).a1(d,e)},
aw(d){return d.b!==this.b}}
C.aoN.prototype={
U(){return new C.aDh(A.a([],x.bp))},
ge0(){return this.c}}
C.aDh.prototype={
a_(){this.a2()
this.IW()},
IW(){var w=0,v=A.j(x.H),u,t=this,s
var $async$IW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a29(t.a.c),$async$IW)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dKe(t,s))
case 1:return A.h(u,v)}})
return A.i($async$IW,v)},
aT9(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aP,s=A.l(v,v,u?B.br:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.br:B.bm).j(0.22)
w=A.m(10)
return A.bu(v,new A.b5(4,r,new A.ay(u,1,B.r,-1)),v,B.bf,v,v,v,v,!0,new A.b5(4,w,new A.ay((this.a.d.a?B.br:B.bm).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b5(4,A.m(10),D.b0Q),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aT8(d){return this.aT9(d,null)},
PH(d){return this.cka(d)},
cka(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$PH=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.He:B.eJ
w=7
return A.b(new A.hV().Ce(72,900,900,n),$async$PH)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fj(),$async$PH)
case 8:p=f
n=B.cJ.gct().aM(p)
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
if(n!=null)n.K(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d("Could not pick photo: "+A.w(o),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$PH,v)},
b0U(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aP,o=A.m(10),n=A.J((q?B.br:B.bm).j(0.18),B.r,1)
if(d)q=B.cO
else q=s.a.d.a?B.br:B.bm
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aP:B.au,r,r,r,r,r,r,r,r,12.5,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cO
else u=s.a.d.a?B.br:B.bm
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.j,0,B.p),1)
v=A.fy(r,r,r,r,r,r,r,r,r,r,r,B.cO,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cd)
q=A.a([q,B.ac,u,A.bN(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aJ(r,r,r,r,A.X(B.cx,s.a.d.a?B.br:B.bm,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cd))
return A.p(r,A.B(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jN,D.bx6,r,r,r)},
Df(d){return this.bAK(d)},
bAJ(){return this.Df(null)},
bAK(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Df=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.ax()
r=new A.as(new A.bb(a4,B.b4,B.aO),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.jf(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.N(p)):B.k.ac(p,2)}o=new A.as(new A.bb(a4,B.b4,B.aO),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.as(new A.bb(a4,B.b4,B.aO),s)
if(a3){a4=new A.V(Date.now(),0,!1).bS(6048e8)
m=A.c4(a4.gck(),a4.gcf(),a4.gcw(),0,0,0,0,0)}else{a4=a5.f
m=A.c4(a4.gck(),a4.gcf(),a4.gcw(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bq(a4,!0,x.cT)
i=a3?null:A.h4g(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.wA?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.i0(B.w.j(0.55),!0,"Dismiss",a4,new C.dJY(),new C.dJZ(a2,t,a5,r,new C.dK_(a2,t),o,n,j),B.eM,!0,x.y),$async$Df)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d7(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.S$=s
r.P$=0
o.S$=s
o.P$=0
n.S$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.K(x.q).f.T(D.f9Q)
w=1
break}a0=a2.d
if(a0==null){t.c.K(x.q).f.T(D.f8v)
w=1
break}a1=A.fC0(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.wA?"male":"female"
w=7
return A.b(A.ahY(a3,A.hcr(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$Df)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.wA?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c4(a3.gck(),a3.gcf(),a3.gcw(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c4(a4.gck(),a4.gcf(),a4.gcw(),0,0,0,0,0)))a5.cNv(a2.a)
w=8
return A.b(A.ahY(t.a.c,a5),$async$Df)
case 8:case 5:w=9
return A.b(t.IW(),$async$Df)
case 9:case 1:return A.h(u,v)}})
return A.i($async$Df,v)},
aTN(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cO.j(0.14)
else w=this.a.d.a?B.M:B.aP
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cO
else s=(this.a.d.a?B.br:B.bm).j(0.2)
s=A.J(s,B.r,g?1.5:1)
r=C.aZ4(d,18)
if(g)q=B.cO
else q=this.a.d.a?B.aP:B.au
return A.aG(!1,B.a1,!0,v,A.aM(!1,u,!0,A.p(p,A.B(A.a([r,B.bn,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b8,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
So(d){return this.cBT(d)},
cBT(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$So=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.i0(B.w.j(0.55),!0,"Dismiss",s,new C.dKh(),new C.dKi(t,d),B.hp,!0,x.y),$async$So)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.ahY(t.a.c,d),$async$So)
case 7:w=8
return A.b(t.IW(),$async$So)
case 8:case 1:return A.h(u,v)}})
return A.i($async$So,v)},
PG(d,e){return this.bLz(0,e)},
bLz(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$PG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lb(s,"Cancel","Delete",e.b+" \xb7 "+A.AZ(e.c)+" will be removed from this device.","Delete this debt?"),$async$PG)
case 3:if(!g){w=1
break}w=4
return A.b(C.fvS(t.a.c,e.a),$async$PG)
case 4:w=5
return A.b(t.IW(),$async$PG)
case 5:case 1:return A.h(u,v)}})
return A.i($async$PG,v)},
afm(d){return this.cdZ(d)},
cdZ(d){var w=0,v=A.j(x.H),u=this,t
var $async$afm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bU(B.K,null,new C.dKb(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$afm)
case 2:return A.h(null,v)}})
return A.i($async$afm,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.ekb
w=J.dG(m.d,new C.dKj())
v=A.C(w,w.$ti.k("K.E"))
w=J.dG(m.d,new C.dKk())
u=A.C(w,w.$ti.k("K.E"))
t=B.d.cI(v,0,new C.dKl())
w=A.m(18)
s=m.a.d.a
r=s?D.cvP:D.aA2
q=A.J(s?B.cO.j(0.35):B.cO.j(0.18),B.r,1)
s=A.p(l,D.bXN,B.f,l,l,new A.o(B.cO.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.as,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.au,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aG(!1,B.a1,!0,A.m(12),A.aM(!1,A.m(12),!0,D.ejz,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dKm(m),l,l,l,l,l,l,l),B.f,B.cO,0,l,l,l,l,l,B.ai)],p),B.m,l,B.e,B.j,0,l,l)
o=A.E(m.cy3("Open",""+v.length),1)
n=v.length===0?"$0.00":A.AZ(t)
r=A.a([A.p(l,A.x(A.a([s,B.ad,A.B(A.a([o,B.ac,A.E(m.b7_(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.E,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a9(B.az,B.aE,B.x,r,l,l),B.n),l,l,l,l,B.ajz,l,l,l),B.aA],p)
if(J.cq(m.d)){w=m.a.d.a
s=w?B.e2:B.c
q=A.m(18)
o=A.J((w?B.br:B.bm).j(0.12),B.r,1)
n=A.p(l,D.bSE,B.f,l,l,new A.o(B.cO.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.au,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.x(A.a([n,B.ad,w,B.av,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.br:B.bm,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bzC,l,l,1/0))}else{w=m.gcjr()
s=A.C(new A.N(v,w,A.T(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bBi,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.br:B.bm,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.N(u,w,A.T(u).k("N<1,v>")))
B.d.v(s,q)}B.d.v(r,s)}return A.x(r,B.aj,l,B.e,B.j,0,B.p)},
b7_(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.J((v.a.d.a?B.br:B.bm).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.br:B.bm,u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cO
else w=v.a.d.a?B.aP:B.au
return A.p(u,A.x(A.a([q,B.bA,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ey,u,u,u)},
cy3(d,e){return this.b7_(!1,d,e)},
cjs(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.za(j).length,h=d.bgi()
if(d.x!=null){w=d.za(j).length
v=w===0?B.cO:B.by}else if(d.gU2())v=B.by
else{if(h)w=B.cO
else w=k.a.d.a?B.br:B.bm
v=w}if(d.x!=null){w=d.za(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wW(u,!1)}else{u.toString
t="Paid "+C.wW(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wW(w,!1)+" \xb7 "+i+" missed":"Due "+C.wW(w,!1)}w=k.a.d.a?B.e2:B.c
u=A.m(18)
if(d.gU2()&&d.x==null)s=B.by.j(0.35)
else s=(k.a.d.a?B.br:B.bm).j(0.12)
s=A.J(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cH,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bo:B.lZ
o=A.J(d.gU2()&&d.x==null?B.by.j(0.45):B.cO.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.h4g(d.d)
o=A.p(B.A,A.d9(C.aZ4(A.fC0(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.au
m=x.p
n=A.a([new A.ds(1,B.co,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaG7())B.d.v(n,A.a([B.el,A.X(B.O4,B.cO.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.B(n,B.m,j,B.e,B.j,0,j,j),B.cL,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.P,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.j,0,B.p),1)
n=A.AZ(d.c)
l=k.a.d.a?B.aP:B.au
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aG(!1,B.a1,!0,j,A.aM(!1,q,!0,new A.D(A4.ajl,A.B(A.a([o,B.bc,p,B.ac,A.x(A.a([n,B.bA,A.X(B.eD,(k.a.d.a?B.br:B.bm).j(0.5),j,j,j,18)],m),B.dF,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dKd(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ai),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d3,j,j,j,j)}}
C.us.prototype={}
C.akR.prototype={
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
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cv,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.J(r.j(0.6),B.r,1)
n.push(A.aB(a0,A.p(a0,A.X(B.cx,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a5))
m=v?B.a4:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.ix,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.awj,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.Gc,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.eS(m,A.B(l,B.m,a0,B.e,B.Q,0,a0,a0),B.f,B.e1)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bwj,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cD:B.bp,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fy,A.x(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.f49)
a2=A.a([A.B(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.vR,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a9(B.a4,B.a8,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lB,A.x(a2,B.m,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.J(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hr,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a9(B.az,B.aE,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bxx,a0,a0,a0,a0)}}
C.aUQ.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bi?B.bi:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bp:B.cD,q,B.P,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.B(l,B.m,q,B.e,B.j,0,q,q),B.cL,n],m)
if(p.z)o.push(new A.D(B.tY,n,q))
return new A.D(B.d3,A.x(o,B.m,q,B.e,B.Q,0,B.p),q)}}
C.T2.prototype={
U(){return new C.beT()}}
C.beT.prototype={
gbZT(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.ek6,D.ekc],l)
for(w=0;w<8;++w){v=D.a3j[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.GY:B.Ce
q=t===s
r=A.X(r,q?B.eF:B.bY,n,n,n,17)
q=q?B.c:B.ae
r=A.a([r,B.bn,new A.y(v.b,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ac,new A.bA(1,B.bd,new A.y(v.c,n,A9.DT,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aQ(24,24)
p=new A.ay(B.eF,2,B.r,-1)
s=new A.o(n,n,new A.bK(p,p,p,p),new A.bk(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aB(n,new A.D(B.eH,A.x(A.a([new A.D(B.mF,new A.cc(B.aN,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.E8(!0,new C.akR(v,q.d,q.e,new C.dam(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dan(o,v),n,n,n,n,n,n,!1,B.a5))}k.push(new A.D(D.bxR,A.bI(D.fQK,new C.dao(o,d),A.bp(B.b5,n,n,n,n,B.ow,n,n,new A.b7(A.m(16),B.a0),n,n,n)),n))
return A.bn(!0,new A.cT(new A.aZ(0,1/0,0,m.a.b*0.9),A.ct(k,n,D.bC9,n,n,B.ah,!0),n),!0,!1,B.af,!0,!0)}}
C.nj.prototype={
ag(){var w=this
return A.G(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a7().ae()],x.N,x.z)},
bcV(d,e,f){return new C.nj(this.a,e,d,f)}}
C.HS.prototype={
wt(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.HS(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aEk(d){var w=null
return this.wt(w,w,w,w,w,d,w,w,w,w,w,w)},
cJf(d){var w=null
return this.wt(w,w,w,w,d,w,w,w,w,w,w,w)},
bcT(d,e,f){var w=null
return this.wt(d,w,w,w,w,w,w,w,e,w,f,w)},
cJU(d){var w=null
return this.wt(w,w,w,w,w,w,d,w,w,w,w,w)},
cK2(d){var w=null
return this.wt(w,w,w,w,w,w,w,w,w,d,w,w)},
cJd(d){var w=null
return this.wt(w,w,w,d,w,w,w,w,w,w,w,w)},
cK4(d){var w=null
return this.wt(w,w,w,w,w,w,w,w,w,w,w,d)},
cJa(d){var w=null
return this.wt(w,w,d,w,w,w,w,w,w,w,w,w)},
cJ5(d){var w=null
return this.wt(w,d,w,w,w,w,w,w,w,w,w,w)},
FR(d){var w=null
return this.wt(w,w,w,w,w,w,w,d,w,w,w,w)},
cKc(d,e,f,g,h,i,j,k,l,m,n){return this.wt(d,e,f,g,null,h,i,j,k,l,m,n)},
ag(){var w=this
return A.G(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cGN(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bOP(d),k=A.aK(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aK(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.D_.geu(D.D_))
s=i==null?o:B.k.E(i,18,36)
r=l.$2("position",D.a4U)
q=l.$2("frame",D.a4h)
l=l.$2("texture",D.a4d)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cKc(p,u,t,q,r,A.qY(d.h(0,"ribbon"))?A.Gk(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.Zy.prototype={
U(){return new C.aAh(A.a([],x.I),D.ND)},
ge0(){return this.c}}
C.aAh.prototype={
a_(){var w,v=this
v.a2()
v.f=A.zR(0,1)
w=$.ax()
v.z=new A.as(B.at,w)
v.Q=new A.as(B.at,w)
v.l6()
w=v.a
C.bC0(w.c,w.d).bM(new C.db2(v),x.fL)},
q(){var w,v=this,u=v.f
u===$&&A.c()
u.q()
u=v.z
u===$&&A.c()
w=$.ax()
u.S$=w
u.P$=0
u=v.Q
u===$&&A.c()
u.S$=w
u.P$=0
v.a3()},
l6(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$l6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.L5(s.c,s.d),$async$l6)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.daR(t,r))
t.awa()
case 1:return A.h(u,v)}})
return A.i($async$l6,v)},
gasL(){var w,v=this
if(!J.cq(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
awa(){var w,v,u=this.gasL(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saX(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saX(0,w==null?"":w)},
ccp(d){this.m(new C.daO(this,d))
this.awa()},
ND(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$ND=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nj(B.o.u(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aQV(r.c,r.d,s),$async$ND)
case 3:w=4
return A.b(t.l6(),$async$ND)
case 4:if(t.c==null||J.cq(t.d)){w=1
break}q=J.qp(t.d,new C.dap(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.daq(t,p))
t.awa()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.Bc(p+1,B.ct,B.kC),$async$ND)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$ND,v)},
AS(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gasL()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aQV(o.c,o.d,new C.nj(s,r,q,new A.V(p,0,!1))),$async$AS)
case 3:w=4
return A.b(t.l6(),$async$AS)
case 4:if(t.c==null){w=1
break}t.m(new C.daS(t))
case 1:return A.h(u,v)}})
return A.i($async$AS,v)},
Oh(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Oh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gasL()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.day(r),s,null,!0,!0,x.y),$async$Oh)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bBN(s.c,s.d,r.a),$async$Oh)
case 4:t.m(new C.daz(t))
w=5
return A.b(t.l6(),$async$Oh)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.U5(B.o.E(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Oh,v)},
yx(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AS(),$async$yx)
case 5:case 4:if(t.c==null){w=1
break}w=J.cK(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.Re(s,r.r,o,p,q),$async$yx)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a4(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hta(s,r.x,r.r),$async$yx)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.L5(s.c,s.d),$async$yx)
case 10:l=e
for(s=n.d,r=J.cD(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.M(l,new C.nj(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.B7(r.c,r.d,l),$async$yx)
case 11:w=12
return A.b(t.l6(),$async$yx)
case 12:r=t.c
if(r==null){w=1
break}r.K(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$yx,v)},
a0P(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0P=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AS(),$async$a0P)
case 5:case 4:if(t.c==null){w=1
break}s=t.gyv(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dN(D.ze,new C.daP(t),new C.daQ())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.mB("Our Family",o,"",""))
for(o=J.aV(t.d);o.C();){n=o.gR(o)
p.push(new H.mB(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.h5U(o,new H.rt(s,r,"",p,new H.uK(q.d,null,null,null,null,"","","")),null),$async$a0P)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a0P,v)},
O0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$O0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AS(),$async$O0)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bU(D.aeC,null,new C.dau(t),s,!0,!0,!0,K.a7V,!1,!1,x.N),$async$O0)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cJf(r)
t.m(new C.dav(t,q))
s=t.a
w=7
return A.b(C.RQ(s.c,s.d,q),$async$O0)
case 7:case 1:return A.h(u,v)}})
return A.i($async$O0,v)},
Xk(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(D.aeC,null,new C.daA(t),r,!0,!0,!0,K.a7V,!1,!1,x.e),$async$Xk)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.daB(t,s))
r=t.a
w=4
return A.b(C.RQ(r.c,r.d,s),$async$Xk)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.Bc(0,B.dT,B.nk)
case 1:return A.h(u,v)}})
return A.i($async$Xk,v)},
bR3(d){var w=d.bU(),v=B.a.aZ(B.o.u(w.gcf()),2,"0"),u=B.a.aZ(B.o.u(w.gcw()),2,"0")
return""+w.gck()+"-"+v+"-"+u},
gyv(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bZ8()
if(r.e)w=D.ado
else if(J.cq(r.d)){w=r.y
v=r.gyv(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.ff2,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a7(q,330,new A.D(W.akB,new C.YQ(w,v,0,q),q),q),B.bx,t,B.am,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kx.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aB(q,A.p(q,D.eZW,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dE.j(0.45),B.J,18)],x.V),E.wq,B.n),q,q,q,q,B.Nm,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcFR(),q,q,q,q,q,q,!1,B.a5))
w.push(B.W)
w.push(A.hr(D.bOR,D.fQb,r.gaN3(),q))
B.d.v(u,w)}w=A.at(A.cd(A.x(u,B.m,q,B.e,B.Q,0,B.p),B.t,q,B.y,q,B.ez,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kx.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.P,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dR:B.AG
u=A.x(A.a([new A.D(D.byT,w,q),A.E(A.Jd(v,new C.db0(r),J.ad(r.d)+1,q,r.gcco(),u,B.aN),1),r.bDD()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c6(q,D.XX,new A.an(B.a_,q,B.b0,B.t,A.a([D.aNk,A.bn(!0,A.x(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
bZ8(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cK(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Kc(B.e4,"AI",h.gbBw(),!0))
if(h.a.f)f.push(new C.Kc(B.nr,"Cover",h.gbM8(),!1))
if(h.a.f)f.push(new C.Kc(B.yV,"Header",h.gbH9(),!1))
if(J.cK(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Kc(B.uo,"Print",h.gclt(),!1))
if(h.a.f&&J.cK(h.d)&&h.r>=0){v=h.w
u=v?B.ht:B.iV
t=v?"Save":"Edit"
f.push(new C.Kc(u,t,v?h.gcrK():new C.daL(h),!1))}if(h.a.f)f.push(new C.Kc(B.hK,"Add page",h.gaN3(),!1))
v=C.hpe(h.y.Q)
u=h.gyv(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.M)(f),++m){l=f[m]
if(l.d)k=D.dzK
else{k=new A.aQ(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.k7.j(0.5),1,B.r,-1)
j=A.p(g,A.X(l.a,D.kx,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bK(i,i,i,i),new A.bk(k,k,k,k),g,new A.a9(B.a4,B.a8,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kx.j(0.85)
p.push(new A.bA(1,B.bd,A.aB(B.ca,A.x(A.a([k,B.bA,new A.y(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.Q,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a5),g))}return new C.akR(v,u,t+" \xb7 "+s+" "+r,new C.daM(h),A.B(p,B.m,g,B.e,B.j,0,g,g),g)},
zV(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AS(),$async$zV)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aV(t.d);r.C();){q=r.gR(r)
s.push(q.b+" "+q.c)}p=H.a2o(B.d.aH(s," "))
s=t.c
s.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.dar(t,p),s,null,!0,!0,x.N),$async$zV)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.yx(),$async$zV)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.DS(),$async$zV)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.Fs("Swahili (Kiswahili)",!0),$async$zV)
case 18:w=16
break
case 17:w=19
return A.b(t.cCu(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zV)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zV,v)},
Ze(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.J(E.k7.j(0.3),B.r,1),r=x.p
return new A.D(B.cu,A.aM(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.wq,B.a6),w,42,w,w,w,w,w,42),B.bc,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A1.JR,w,w,w),A.d(g,w,w,w,w,w,w,B.Aa,w,w,w)],r),B.E,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bf,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.daN(d,h),w,w,w,w,w,w,w),w)},
DS(){return this.bQy()},
bQy(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$DS=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.daE(r),a7,null,!0,!0,x.ei),$async$DS)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.ez("Working on it\u2026",$.ax())
a6.a=!0
a7=r.c
a7.toString
A.cg(null,null,!1,null,new C.daF(o),a7,null,!0,!0,x.H).fn(new C.daG(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.M)(d),++a1){k=d[a1]
J.cb(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ag()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.ze[a1]
J.cb(j,i.a)}w=8
return A.b(C.ah7(a0,a7,new C.daH(o),d,l,e,j),$async$DS)
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
if(l!=null&&a6.a)A.a4(l,!0).eK()
l=o
l.si3($.ax())
J.aRm(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.K(x.q).f
j=n
l.T(A.b3(null,null,null,null,null,B.t,null,A.d(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcm(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.aj(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.bcV(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.B7(j.c,j.d,l),$async$DS)
case 11:w=12
return A.b(r.l6(),$async$DS)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.ze[a1].a)
a5=l.cGN(j,12,a7)
l=r.a
w=15
return A.b(C.RQ(l.c,l.d,a5),$async$DS)
case 15:if(r.c!=null)r.m(new C.daI(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.Bc(0,B.dT,B.nk)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.K(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.T(A.b3(a3?A.cvc("Undo",new C.daJ(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.en,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DS,v)},
Fs(d,e){return this.cCv(d,e)},
cCu(d){return this.Fs(d,!1)},
cCv(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fs=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.ez("Starting\u2026",$.ax())
f.a=!0
k=r.c
k.toString
A.cg(null,null,!1,null,new C.daU(a0),k,null,!0,!0,x.H).fn(new C.daV(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.M)(k),++i){n=k[i]
J.cb(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a2B(m,new C.daW(a0)),$async$Fs)
case 10:w=8
break
case 9:w=11
return A.b(C.bDu(new C.daX(a0),m,a2),$async$Fs)
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
if(o!=null&&f.a)A.a4(o,!0).eK()
o=a0
o.si3($.ax())
J.aRm(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.K(x.q).f
k=q
o.T(A.b3(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.bcV(J.q(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.B7(k.c,k.d,o),$async$Fs)
case 12:w=13
return A.b(r.l6(),$async$Fs)
case 13:o=r.c
if(o==null){w=1
break}o=o.K(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.T(A.b3(A.cvc("Undo",new C.daY(r,d),null),null,null,null,null,B.t,null,k,null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Fs,v)},
bDD(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.das(v):u
r=A.aJ(u,u,u,u,A.X(D.bKC,s?D.kx:B.aZ,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cK(v.d)&&!v.w&&v.r>=0)s=A.hr(A.X(B.w6,B.FB,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.FB,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbLJ(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kx.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.at(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dat(v):u
return A.bn(!0,new A.D(D.byH,A.B(A.a([r,s,A.aJ(u,u,u,u,A.X(B.eD,t<J.ad(v.d)?D.kx:B.aZ,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.ZC.prototype={
U(){return new C.bfg(new A.as(B.at,$.ax()))}}
C.bfg.prototype={
ga1Y(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.S$=$.ax()
w.P$=0
this.a3()},
gbPd(){var w,v=this.ga1Y()
A:{if("cover"===v){w=D.d1N
break A}if("book"===v){w=D.cYh
break A}w=D.dse
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.k7.j(0.5),n=x.p,m=A.B(A.a([D.dzL,B.as,D.bEf,A.aJ(q,q,q,q,B.lc,q,q,q,new C.dcN(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.j0(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.dcO(r),r.ga1Y()==="page",q,q,q,q))
if(r.a.d)l.push(A.j0(q,q,q,D.fKN,q,new C.dcP(r),r.ga1Y()==="book",q,q,q,q))
l.push(A.j0(q,q,q,D.fxK,q,new C.dcQ(r),r.ga1Y()==="cover",q,q,q,q))
l=A.bW(B.bE,l,B.bq,q,6,8)
k=B.c.j(0.07)
k=A.aN(q,B.Z,!1,q,!0,B.t,q,A.aO(),r.d,q,q,q,q,q,2,A.bu(q,new A.b5(4,A.m(16),B.a0),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kQ,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.ab,q,q,q,q,q,q,q,q,q,q,q,B.df,!0,B.a3,q,B.ao,q,q,q,q)
w=A.a([],n)
for(v=r.gbPd(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mQ(q,B.c.j(0.08),new A.y(s,q,B.JO,q,q,q,q,q,q,q,q,q),B.hk,new C.dcR(r,s),q,q,q,q))}return A.eR(q,E.Bb,A.cd(A.x(A.a([m,B.W,D.fO4,B.am,l,B.ad,k,B.O,A.bW(B.bE,w,B.bq,q,6,6),B.aA,A.dj(D.bOO,D.fOR,new C.dcS(r,d),A.bp(B.b5,q,q,q,q,B.ow,q,q,new A.b7(A.m(16),B.a0),q,q,q)),B.av,D.fJ1],n),B.E,q,B.e,B.Q,0,B.p),B.t,q,B.y,q,B.fr,q,q,B.ah),q,q,q,D.aki,B.d7,q,new A.b7(p,new A.ay(o,1.4,B.r,-1)),q)}}
C.ZA.prototype={
U(){return new C.aAk(A.a([],x.gA))},
ge0(){return this.c}}
C.aeO.prototype={}
C.aAk.prototype={
a_(){this.a2()
this.l6()},
l6(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$l6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Ri(p.c,p.d),$async$l6)
case 3:o=e
n=A.a([],x.gA)
p=J.aV(o)
case 4:if(!p.C()){w=5
break}s=p.gR(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bC0(r.c,q),$async$l6)
case 6:j=e
i=J
w=7
return A.b(C.L5(t.a.c,q),$async$l6)
case 7:m.push(new l.aeO(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.dbh(t,n))
case 1:return A.h(u,v)}})
return A.i($async$l6,v)},
b8g(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Qo(d,e){return this.cdX(0,e)},
cdX(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Qo=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a4(s,!1).cg(A.e_(new C.dbg(u,e),!0,null,x.y)),$async$Qo)
case 2:t=g
w=3
return A.b(u.l6(),$async$Qo)
case 3:if(t===!0&&u.c!=null)u.c.K(x.q).f.T(D.aQW)
return A.h(null,v)}})
return A.i($async$Qo,v)},
Fv(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Fv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.K(x.q).f.T(D.aQS)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.agr(s.c,s.d),$async$Fv)
case 5:q=e
w=6
return A.b(t.l6(),$async$Fv)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Qo(0,B.d.h_(t.d,new C.dbl(q))),$async$Fv)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Re(p,s.f,r,n,o),$async$Fv)
case 10:m=e
w=11
return A.b(t.l6(),$async$Fv)
case 11:if(m&&t.c!=null)t.c.K(x.q).f.T(D.aQW)
case 1:return A.h(u,v)}})
return A.i($async$Fv,v)},
PS(d,e){return this.cps(0,e)},
cps(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$PS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dbk(t,e),s,null,!0,!0,x.y),$async$PS)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a2N(s.c,s.d,e.a),$async$PS)
case 4:w=5
return A.b(t.l6(),$async$PS)
case 5:case 1:return A.h(u,v)}})
return A.i($async$PS,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u)k.push(o.bDG(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.J(E.k7.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aB(n,new A.fF(0.7142857142857143,A.p(n,A.x(A.a([D.dzM,B.ad,D.ejc,B.av,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kx.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b8,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcFN(),n,n,n,n,n,n,!1,B.a5))}w=A.m(22)
v=A.J(E.k7.j(0.85),B.r,1.6)
s=A.aB(n,A.p(n,D.bWA,B.f,n,n,new A.o(B.w.j(0.3),n,A.J(E.k7.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dbm(d),n,n,n,n,n,n,!1,B.a5)
r=A.m(14)
q=B.w.j(0.3)
p=A.J(E.k7.j(0.5),B.r,1)
w=A.p(n,A.B(A.a([s,B.bc,D.bED,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.fe2,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h4,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.c1t,B.n),n,n,n,Au.N6,D.bwM,n,n,n)
if(o.e)k=D.ado
else k=k.length===0?D.b8i:A.cB(new C.dbn(k))
return A.c6(n,D.XX,new A.an(B.a_,n,B.b0,B.t,A.a([D.aNk,A.bn(!0,A.x(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bDG(d){var w,v,u=this,t=null,s=u.b8g(d),r=d.c,q=x.p,p=A.a([A.bT(0,A.eS(B.A,new A.a7(300,420,new C.YQ(d.b,s,r,t),t),B.f,B.dz),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aB(t,A.p(t,D.bVU,B.f,t,t,new A.o(B.w.j(0.55),t,A.J(B.aZ,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dbe(u,d),t,t,t,t,t,t,!1,B.a5),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.fdD,t,t,t)
v=r===1?"page":"pages"
return A.aB(t,A.x(A.a([new A.fF(0.7142857142857143,new A.an(B.a_,t,B.aa,B.t,p,t),t),B.O,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kx.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dbf(u,d),t,t,t,t,t,t,!1,B.a5)}}
C.Kc.prototype={}
C.YQ.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dN(D.ze,new C.cJN(m),new C.cJO()),j=m.c,i=D.D_.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mO:B.b8
v=new C.cJP(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.efV,28)],x.V)
u=x.p
t=A.a([A.bT(0,A.b4(l,l,l,new C.bcu(j.x,h,l),B.ax),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.a4,B.a8,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aQ(3,3)
t.push(new A.cN(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bk(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.akC,8,0.85,2.2),v.$4(D.bBB,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.akC,8,0.85,2.4))
else if(r==="corners")t.push(A.bT(0,new A.D(D.bBx,A.b4(l,l,l,new C.bcl(h,l),B.ax),l),0,0,0))
r=A.X(D.az0[B.o.E(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.awj,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aA,q,B.ad,p,B.ad,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cD,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aM,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bT(0,new A.D(D.bC1,A.x(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b4(l,l,l,new C.aHh(l),D.f3f),l,l,l,46,0,l))
return A.p(l,A.by(D.ac0,new A.an(B.a_,l,B.aa,B.t,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.ac0,i,new A.a9(B.az,B.aE,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bcu.prototype={
a1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.e9()
f.d3(11)
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
h=new A.aF(k.r,B.ag,null,null,j)
j.push(new A.aX(v,t))
k=i-0.04
j.push(new A.aq(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.aq(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.br())
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=m.j((n&1)===0?0.09:0.03).gp(0)
r=k.G()
k=h.gbx().a.snapshot()
o.drawPath((h.e=new A.cj(k)).a,r)
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
C.bcl.prototype={
a1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.S(),k=A.I(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.a9
k.c=2.4
k.d=B.bB
for(w=e.a,v=e.b,v=[D.eUv,new A.cw([w,0,-1,1]),new A.cw([0,v,1,-1]),new A.cw([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aF(l,B.ag,null,null,s)
s.push(new A.aX(r+p*34,q))
s.push(new A.aq(r,q))
s.push(new A.aq(r,q+o*34))
m=k.G()
s=n.gbx().a.snapshot()
w.drawPath((n.e=new A.cj(s)).a,m)
m.delete()
s=new A.ap(B.R,B.N,B.U,B.V,B.S)
s.r=j.j(0.9).gp(0)
m=s.G()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
aw(d){return!d.b.A(0,this.b)}}
C.ut.prototype={}
C.Z8.prototype={
U(){return new C.bcs()}}
C.bcs.prototype={
goa(){var w=this.d
return w===$?this.d=this.a.c:w},
gyv(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.as(new A.bb(w.b,B.b4,B.aO),$.ax())}return v},
gaBt(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.as(new A.bb(w.c,B.b4,B.aO),$.ax())}return v},
garj(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.as(new A.bb(w.y,B.b4,B.aO),$.ax())}return v},
q(){var w=this,v=w.gyv(0),u=v.S$=$.ax()
v.P$=0
v=w.gaBt()
v.S$=u
v.P$=0
v=w.garj()
v.S$=u
v.P$=0
w.a3()},
arX(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.j0(s,s,s,new A.y(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.d2m(this,f,u),e===u,s,s,s,s))}return A.bW(B.bE,r,B.bq,s,6,8)},
axB(d){var w=null,v=B.c.j(0.07)
return A.bu(w,new A.b5(4,A.m(14),B.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lN,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goa(),a0=f.gyv(0),a1=a0.a.a,a2=f.gaBt(),a3=a2.a.a,a4=f.garj(),a5=d.bcT(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a7(190,260,A.eS(B.A,new A.a7(270,370,new C.YQ(a5,d,f.a.e,e),e),B.f,B.dz),e),e,e,e)
a0=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.axB("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d2L(f),e,e,e,!1,e,e,!1,e,!0,e,B.ab,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a3,e,B.ao,e,e,e,e)
a2=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.axB("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d2M(f),e,e,e,!1,e,e,!1,e,!0,e,B.ab,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a3,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.ze[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aZ
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bK(o,o,o,o),e,e,new A.a9(B.az,B.aE,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aB
v.push(A.aB(e,A.x(A.a([p,B.cL,new A.y(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.P,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d2N(f,t),e,e,e,e,e,e,!1,B.a5))}v=A.bW(B.bE,v,B.bq,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b5.j(0.35):B.c.j(0.07)
m=new A.aQ(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eF:B.K,2,B.r,-1)
q.push(A.aB(e,A.p(e,A.X(D.az0[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bK(o,o,o,o),new A.bk(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d2O(f,n),e,e,e,e,e,e,!1,B.a5))}q=A.bW(B.bE,q,B.bq,e,8,8)
a4=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.axB("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d2P(f),e,e,e,!1,e,e,!1,e,!0,e,B.ab,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a3,e,B.ao,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,L.vf,e,e,e)
m=A.a([],w)
for(l=D.D_.gdV(D.D_),l=l.gaf(l);l.C();){k=l.gR(l)
j=A.b1(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eF:B.aZ
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bK(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aB
m.push(A.aB(e,A.x(A.a([j,B.bA,new A.y(i,e,new A.F(!0,h,e,e,e,e,10,B.P,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d2Q(f,k),e,e,e,e,e,e,!1,B.a5))}m=A.bW(B.bE,m,B.bq,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,L.vf,e,e,e)
k=f.goa()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bn(!0,new A.cT(new A.aZ(0,1/0,0,a1.a.b*0.92),A.ct(A.a([D.fIu,B.ad,d,B.aM,a0,B.W,a2,B.aA,D.fOD,B.O,v,B.aA,D.fID,B.O,q,B.aA,a4,B.aA,p,B.O,m,B.aA,l,A.l5(e,9,""+B.k.V(f.goa().f),36,18,new C.d2R(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,L.vf,e,e,e),B.am,f.arX(D.a4U,f.goa().r,new C.d2S(f),D.dvs),B.ad,A.d("BORDER",e,e,e,e,e,e,L.vf,e,e,e),B.am,f.arX(D.a4h,f.goa().w,new C.d2T(f),D.dvy),B.ad,A.d("COVER MATERIAL",e,e,e,e,e,e,L.vf,e,e,e),B.am,f.arX(D.a4d,f.goa().x,new C.d2V(f),D.dx0),B.am,A.iI(e,B.b5,e,B.af,e,new C.d2W(f),e,e,e,D.fCO,f.goa().z),B.bx,A.bI(D.fHd,new C.d2X(f,a6),A.bp(B.b5,e,e,e,e,B.ow,e,e,new A.b7(A.m(16),B.a0),e,e,e))],w),e,Z.ak8,e,e,B.ah,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aHh.prototype={
a1(d,e){var w,v,u,t=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
t.D(new A.aX(0,0))
w=e.a
t.D(new A.aq(w,0))
v=e.b
t.D(new A.aq(w,v))
t.D(new A.aq(w/2,v-12))
t.D(new A.aq(0,v))
t.D(new A.br())
u=A.I()
u.sam(D.c29.aB(0,new A.a3(0,0,0+w,0+v)))
d.aG(t,u)},
aw(d){return!1}}
C.bhM.prototype={
a1(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.S()
w=A.I()
w.sam(D.c19.aB(0,new A.a3(0,0,a3,a4)))
a5.aO(new A.a3(0,0,a3,a4),w)
v=B.k.dg(a2/112)
u=new A.e9()
u.d3(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.ah()*20
l=56+u.ah()*40
k=D.d1M[u.au(9)]
j=u.au(14)
J.bl(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a3(n,j,n+m,j+l)
h=A.bs(i,B.hj)
g=new A.ap(B.R,B.N,B.U,B.V,B.S)
f=A.ar(k,B.c,0.12)
f.toString
e=A.ar(k,B.w,0.45)
e.toString
g.sam(new A.a9(B.a4,B.a8,B.x,A.a([f,k,e],t),a0,a0).aB(0,i))
d=g.G()
w.drawRRect(A.ek(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.ap(B.R,B.N,B.U,B.V,B.S)
e.r=E.k7.j(0.55).gp(0)
d=e.G()
w.drawRect(A.bF(new A.a3(h,j,g,j+2)),d)
d.delete()
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.r=E.k7.j(0.4).gp(0)
d=j.G()
w.drawRect(A.bF(new A.a3(h,q,g,p)),d)
d.delete()
w.restore()
j=u.au(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.sam(D.c0w.aB(0,new A.a3(0,r,a3,q)))
d=p.G()
w.drawRect(A.bF(new A.a3(0,r,a3,q)),d)
d.delete()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.r=B.w.j(0.5).gp(0)
p.z=B.lJ
d=p.G()
w.drawRect(A.bF(new A.a3(0,q,a3,q+14)),d)
d.delete()}w=A.I()
w.r=D.bc_.j(0.72).gp(0)
a5.aO(new A.a3(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.I()
a4.sam(new A.c0(B.A,0.5,B.x,a0,0,A.a([D.bjY.j(0.22),B.K],t),a0,a0).aB(0,A.bX(new A.t(w,a2),a1)))
a5.ad(new A.t(w,a2),a1,a4)},
aw(d){return!1}}
C.baF.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cN(14,w*2,v*2.2,v*2,o,o,new A.kV(new A.o(A.ar(D.kx,D.boR,w/4),o,new A.bK(B.a0,new A.ay(B.w.j(0.12),1,B.r,-1),B.a0,B.a0),B.L0,o,o,B.n),B.bg,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aIW,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aQ(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.k7.j(0.6),o,o,new A.bk(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.m,o,B.rH,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.b0z,u,D.c27,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dq,18)],v)
t=A.ao(o,A.b4(o,o,o,new C.aHh(o),D.f3a),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aUQ(p.y,r,I.iL,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bu(o,B.eE,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,I.iL.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ab,o,o,o,o,o,o,o,o,o,o,o,D.fs_,!0,B.a3,o,B.ao,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,I.iL.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.W,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bu(o,B.eE,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,I.iL.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ab,o,o,o,o,o,o,o,o,o,o,o,D.fiR,!0,B.a3,B.A4,B.ao,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.frS,o,o,o),B.av,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,I.iL.j(0.5),o,o,o,o,o,o,o,o,11,B.cD,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.O,A.B(A.a([A.E(A.p(o,o,B.f,D.Fo.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fy,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.Fo.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.Fo.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.aA],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,I.iL.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Y6(A.cS(A.a([A.cS(o,o,o,o,o,o,o,o,o,D.fm_,B.a.aq(k,0,1)),A.cS(o,o,o,o,o,o,o,o,o,o,B.a.b7(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,I.iL.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cd(A.x(n,B.E,o,B.e,B.j,0,B.p),B.t,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.hX,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,I.iL.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.B(A.a([u,A.E(A.p(o,A.by(B.L0,new A.an(B.a_,o,B.aa,B.t,A.a([t,new A.D(D.bB3,A.x(s,B.aj,o,B.e,B.j,0,B.p),o),A.ao(0,A.c1(o,new A.o(o,o,o,o,o,new A.a9(B.a4,B.a8,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.bg),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.L0,v,D.c2F,B.n),o,o,o,o,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,o,o))
return new A.an(B.a_,o,B.aa,B.t,l,o)}}
C.akS.prototype={
U(){return new C.akT(new A.ez(0,$.ax()),new C.bQD(),new C.ala(),D.hlb,null,null)},
gcZ(){return this.d}}
C.a0P.prototype={
a5(){return"_Step."+this.b}}
C.akT.prototype={
gC1(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bBX(w.c,6,w.e,!1)
u.d!==$&&A.bG()
u.d=v
t=v}return t},
gh3(d){var w,v=this,u=v.e
if(u===$){w=C.Mn(v.a.c)
v.e!==$&&A.bG()
v.e=w
u=w}return u},
gTo(){var w=this.gh3(0)
return w.gyP()==null?"Babu":B.a.i(w.gyP().b)},
a_(){var w,v=this
v.a2()
w=v.gh3(0).gyP()
w=w==null?null:w.c
v.r.b=w===D.oa
w=v.qO(new C.bOZ(v))
w.h9(0)
v.x!==$&&A.aP()
v.x=w
v.a1V("Come closer, my children. I am "+v.gTo()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
q(){var w=this,v=w.x
v===$&&A.c()
v.q()
v=w.y
if(v!=null)v.a4(0)
v=w.z
if(v!=null)v.a4(0)
w.w.q()
v=w.f
v.S$=$.ax()
v.P$=0
w.bti()},
a1V(d){var w=this,v=w.y
if(v!=null)v.a4(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.dk(D.aiK,new C.bOT(w))},
bpK(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a4(0)
v.m(new C.bP1(v))},
ad9(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bpD(){return this.b7O()},
b7O(){var w=this,v=w.gC1()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bOU(w))
w.a1V(u)
v=w.z
if(v!=null)v.a4(0)
w.z=A.cL(B.m0,new C.bOV(w))},
cGU(){var w=this
w.m(new C.bOY(w))
w.a1V(w.gC1()[w.as].a)},
KE(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.aba)return
w=p.gC1()
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
q.d3(v*7+d)
p.m(new C.bOX(p,d,u,q))
p.a1V(u?D.dgX[q.au(4)]+" "+w[p.as].d:D.ddG[q.au(3)]+" "+w[p.as].d)},
lh(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$lh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gC1()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bEd(t.at,t.ay,p)
t.m(new C.bP_(t,s))
t.a1V(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.Bs(t.a.d,s),$async$lh)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.Bt(r.d,r.c.a,"fire",t.at*10),$async$lh)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bP0())
w=1
break
case 4:++t.as
t.b7O()
case 1:return A.h(u,v)}})
return A.i($async$lh,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c6(v,D.X4,new A.an(B.a_,v,B.aa,B.t,A.a([A.bT(0,new A.ex(A.b4(v,v,v,new C.aUV(u,w.r,w.w,u),B.ax),v),0,0,0),A.bn(!0,A.x(A.a([w.c8u(0),B.b2,w.bOr()],t),B.m,v,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],t),v),v,!1,!1,v,v)},
c8u(d){var w,v,u,t=this,s=null,r=A.aJ(s,s,s,s,B.OT,s,s,s,new C.bOW(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gC1().length;++w){v=t.as
if(w<v||t.Q===D.aYd)v=B.cI
else v=w===v?B.c:B.aZ
u=new A.aQ(4,4)
p.push(A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bk(u,u,u,u),s,s,B.n),s,7,s,D.bww,s,s,s,22))}p=A.E(A.x(A.a([D.fzB,A.B(p,B.m,s,B.e,B.j,0,s,s)],q),B.E,s,B.e,B.j,0,B.p),1)
v=A.m(14)
u=A.J(B.fo,B.r,1)
return new A.D(D.bCd,A.B(A.a([r,p,A.p(s,A.d("\ud83d\udd25 "+B.k.V(t.cy*100)+"%",s,s,s,s,s,s,B.iG,s,s,s),B.f,s,s,new A.o(B.aW,s,u,v,s,s,B.n),s,s,s,s,B.h4,s,s,s)],q),B.m,s,B.e,B.j,0,s,s),s)},
bOr(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.gh3(0).gyP()
if(h==null)w=1
else w=h.c===D.oa?0:1
v=j.dx
u=j.db
t=D.pW.j(0.96)
s=A.m(22)
r=A.J(B.cI,B.r,3)
q=A.b4(i,i,i,new C.bn9(w,i),B.ax)
p=A.d(j.Q===D.aba?j.gTo()+" asks":"Elder "+j.gTo(),i,i,i,i,i,i,D.aS8,i,i,i)
o=j.db
o=B.a.aq(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aB(B.ca,A.B(A.a([new A.a7(62,62,q,i),B.as,A.E(A.x(A.a([p,B.bA,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aSm,i,i,i)],n),B.E,i,B.e,B.j,0,B.p),1)],n),B.E,i,B.e,B.j,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbpJ(),i,i,i,i,i,i,!1,B.a5)
switch(j.Q.a){case 0:v=A.at(j.a9k("Sit down by the fire",j.gbpC()),i,i,i)
break
case 1:v=A.at(j.a9k("Ask me, Elder",j.gcGT()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gC1()[j.as].b,m<u.length;++m){q=new A.aQ(14,14)
l=new A.ay(D.lq,2.5,B.r,-1)
v.push(A.aB(i,A.p(i,new A.y(u[m],i,D.aSj,i,B.L,i,i,i,i,i,i,i),B.f,i,D.acC,new A.o(D.ahK,i,new A.bK(l,l,l,l),new A.bk(q,q,q,q),i,i,B.n),i,i,i,i,U.vU,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bOQ(j,m),i,i,i,i,i,i,!1,B.a5))}v=A.bW(B.bE,v,B.bq,i,8,8)
break
case 3:v=j.fr
u=v?B.l5:Ai.ant
u=A.X(u,v?B.eh:D.lq,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.l(i,i,v?B.eh:D.lq,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gC1().length?"Finish":"Next story"
v=A.B(A.a([u,B.ac,q,j.a9k(v,j.gq3(j))],n),B.m,i,B.e,B.j,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gC1().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aSC,i,i,i)],n)
u=j.cx
if(u>0){u=C.aP9(u)
q=C.aP9(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.a9F,i,i,i))}v.push(B.O)
v.push(j.a9k("Back to the games",new C.bOR(j)))
v=A.x(v,B.m,i,B.e,B.j,0,B.p)
break
default:v=i}return A.p(i,A.x(A.a([o,B.W,v],n),B.E,i,B.e,B.Q,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.aAq,i,B.n),i,i,i,B.Bz,B.bf,i,i,i)},
a9k(d,e){var w=null,v=A.m(16),u=A.J(B.cI,B.r,2)
return A.aB(w,A.p(w,A.d(d,w,w,w,w,w,w,A1.JR,w,w,w),B.f,w,w,new A.o(D.lq,w,u,v,w,w,B.n),w,w,w,w,D.bzX,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a5)}}
C.bn9.prototype={
a1(d,e){X.fLc(d,e.eg(B.J),e.gdC()*0.45,this.b,0,0.4)},
aw(d){return d.b!==this.b}}
C.aAi.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbE())
w.a9$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.bQD.prototype={}
C.rY.prototype={}
C.bna.prototype={}
C.ala.prototype={
Ma(d){var w,v=this
if(v.a==null||!J.A(v.b,d)){w=v.a
if(w!=null)w.q()
v.a=C.i_D(d)
v.b=d}w=v.a
w.toString
return w},
q(){var w=this.a
return w==null?null:w.q()}}
C.aUV.prototype={
a1(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.b.a,k=n.c,j=d.a,i=n.d.Ma(e).b
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
n.cwJ(d,l)
n.bN2(d,l)
n.cEM(d,l,k)
u=0.8+0.2*Math.sin(l*8)*Math.sin(l*3.7)+k.w*0.4
J.bl(j.save())
j.translate(225,580)
d.p_(0,1,0.42)
t=240*(0.6+0.5*k.w)
$.S()
s=A.I()
r=x.O
q=x.n
s.sam(A.to(B.J,t,A.a([D.bnI.j(0.55*u),G.Mo.j(0.2*u),B.K],r),A.a([0,0.5,1],q),B.x,m,m,0))
d.ad(B.J,t,s)
j.restore()
p=A.a([new A.z(528,new C.bQv(n,d,l,k)),new A.z(540,new C.bQw(n,d,l,k)),new A.z(546,new C.bQx(n,d,l,k)),new A.z(574,new C.bQy(n,d,l,k)),new A.z(612,new C.bQz(n,d,l,k)),new A.z(650,new C.bQA(n,d,l,k)),new A.z(656,new C.bQB(n,d,l,k))],x.E)
B.d.aW(p,new C.bQC())
for(o=0;o<7;++o)p[o].b.$0()
n.bDZ(d,l,k)
n.bQw(d,l)
j.restore()
$.S()
j=A.I()
j.sam(A.to(new A.t(i/2,w*0.6),e.gan4()*0.75,A.a([B.K,D.bbU],r),A.a([0.55,1],q),B.x,m,m,0))
d.aO(new A.a3(0,0,0+i,0+w),j)},
aw(d){return d.c!==this.c||d.d!==this.d},
cwJ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e9()
g.d3(3)
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
d.bo(n,n.aF(0,D.efs),C.it(B.c.j((1-o)*0.9),1.6))}for(u=e*0.035,t=e*9,s=x.v,m=0;m<3;++m){l=B.k.F(u+m*0.05,1)
r=-20+l*500
q=120+Math.sin(l*9+m)*14+m*12
k=Math.sin(t+m*2)
j=$.S()
i=A.a([],s)
j=new A.aF(j.r,B.ag,null,null,i)
k=q+k*4
i.push(new A.aX(r-6,k))
h=q-3
i.push(new A.c3(r-2,h,r,q))
i.push(new A.c3(r+2,h,r+6,k))
r=new A.ap(B.R,B.N,B.U,B.V,B.S)
r.b=B.a9
r.c=1.6
r.r=D.bez.gp(0)
r.d=B.bB
r.e=B.dS
p=r.G()
r=j.gbx().a.snapshot()
w.drawPath((j.e=new A.cj(r)).a,p)
p.delete()}},
bN2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=0.75+0.25*Math.sin(a0*9)*Math.sin(a0*5.3)
for(w=a0*0.12,v=d.a,u=0.78*e,t=0.7*e,s=0;s<3;++s){r=D.axA[s]
q=r.a
p=r.c
o=q+p*0.1
n=r.b
m=r.d
l=n-m*0.38
k=A.bJ(new A.t(o,l),m*0.74,p*0.5)
j=O.Mh.j(u)
$.S()
i=new A.ap(B.R,B.N,B.U,B.V,B.S)
i.r=j.gp(0)
h=i.G()
v.drawOval(A.bF(k),h)
h.delete()
p=A.bJ(new A.t(o+0,l+m*0.1),m*0.4,p*0.28)
l=new A.ap(B.R,B.N,B.U,B.V,B.S)
l.r=O.xy.j(t).gp(0)
h=l.G()
v.drawOval(A.bF(p),h)
h.delete()
for(p=q*0.01,m=n-m-r.e*0.9,g=0;g<5;++g){f=B.k.F(w+g/5+p,1)
o=Math.sin(f*6+g)
n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.r=D.afh.j(0.16*(1-f)).gp(0)
h=n.G()
v.drawCircle(q+o*6+f*18,m-f*70,4+f*12,h)
h.delete()}}},
cEM(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
C.bBm(d,D.efo,0.9,a0,D.hhi,!1,!1,D.ab8,1,!1)
w=$.S().r
v=x.v
u=new A.aF(w,B.ag,e,e,A.a([],v))
u.D(new A.aX(52,470))
u.D(new A.aq(50,486))
u.D(new A.aq(66,486))
u.D(new A.aq(64,470))
u.D(new A.br())
t=A.I()
t.r=D.ah4.gp(0)
d.aG(u,t)
C.bBm(d,D.efq,0.95,a0,D.hhd,!1,!1,D.ab9,1,!0)
t=new A.aF(w,B.ag,e,e,A.a([],v))
t.D(new A.aX(417,510))
t.D(new A.c3(431,532,445,510))
t.D(new A.aq(441,548))
t.D(new A.c3(431,553,421,548))
t.D(new A.br())
u=A.I()
u.r=G.F3.gp(0)
d.aG(t,u)
u=A.bJ(D.efp,8,28)
t=A.I()
t.r=D.bpX.gp(0)
d.dO(u,t)
C.bBm(d,new A.t(-30+B.k.F(a0/26,1)*510,492),0.82,a0,D.hhj,!0,!1,D.VZ,1,!1)
t=B.k.F(a0/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.dO(A.bJ(new A.t(s+q*16,r-6),16,11),C.it(D.agX,1.8))
u=q<0
C.bBm(d,new A.t(s-q*6,r),0.62,a0,D.hhl,!1,u,D.VZ,2.2,!1)
C.bBm(d,new A.t(s-q*32,r+4),0.58,a0+1,D.hhh,!1,u,D.VZ,2.2,!1)
this.bTb(d,D.ef3,a0)
for(u=d.a,t=a0*0.5,p=a0*4,o=0;o<3;++o){n=88+o*17+Math.sin(t+o)*6
m=520+B.o.F(o,2)*6
l=Math.max(0,Math.sin(p+o*2))*4
k=A.bJ(new A.t(n,m),8,11)
j=o===1
i=j?D.agT:D.ahs
h=new A.ap(B.R,B.N,B.U,B.V,B.S)
h.r=i.gp(0)
g=h.G()
u.drawOval(A.bF(k),g)
g.delete()
k=j?D.agT:D.ahs
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.r=k.gp(0)
g=j.G()
u.drawCircle(n+5,m+(-3+l),2.6,g)
g.delete()
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.b=B.a9
j.c=1
j.r=B.aD.gp(0)
j.d=B.bB
j.e=B.dS
g=j.G()
u.drawLine.apply(u,[n+7.5,m+(-2+l),n+10,m+(-1.5+l),g])
g.delete()
n+=-1
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.b=B.a9
j.c=1
j.r=B.aD.gp(0)
j.d=B.bB
j.e=B.dS
g=j.G()
u.drawLine.apply(u,[n,m+4,n,m+8,g])
g.delete()}f=a0<a1.f
u=A.bJ(D.a6Q,15+Math.sin(a0*2)*0.8,40)
t=A.I()
t.r=D.afE.gp(0)
d.dO(u,t)
u=A.bJ(D.a6Q.aa(0,new A.t(-14,f?-9:-2)),12,15)
t=A.I()
t.r=D.bgB.gp(0)
d.dO(u,t)
t=new A.aF(w,B.ag,e,e,A.a([],v))
t.D(new A.aX(130,592-(f?16:6)))
t.D(new A.aq(134,592-(f?22:9)))
t.D(new A.aq(138,592-(f?16:6)))
t.D(new A.br())
u=A.I()
u.r=D.bgL.gp(0)
d.aG(t,u)
u=D.a6Q.aa(0,new A.t(-17,f?-9:-2))
t=A.I()
t.r=B.hV.gp(0)
d.ad(u,1.1,t)
v=new A.aF(w,B.ag,e,e,A.a([],v))
v.D(new A.aX(168,590))
w=Math.sin(a0*8)
v.D(new A.c3(180,588+w*(f?6:0),178,595))
d.aG(v,C.it(D.afE,3.5))},
bTb(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=Math.max(0,Math.sin(f*0.6))*9,j=e.aa(0,new A.t(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=j.a,u=j.b,t=u+3,s=f*2,r=u+16,q=d.a,p=0;p<4;++p){o=w[p]
n=Math.sin(s+o)
$.S()
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.b=B.a9
m.c=2
m.r=D.Xf.gp(0)
m.d=B.bB
m.e=B.dS
l=m.G()
q.drawLine.apply(q,[v+o,t,v+(o+n*1.5),r,l])
l.delete()}w=A.bJ(j,17,32)
s=$.S()
r=A.I()
r.r=D.F1.gp(0)
d.dO(w,r)
r=A.bJ(j.aa(0,D.eeu),7,26)
w=A.ar(D.F1,B.w,0.12)
w.toString
q=A.I()
q.r=w.gp(0)
d.dO(r,q)
s=new A.aF(s.r,B.ag,null,null,A.a([],x.v))
s.D(new A.aX(v+13,u-3))
s.D(new A.aq(v+22,u-8+k))
s.D(new A.aq(v+20,u+k-0.5))
s.D(new A.aq(v+12,t))
s.D(new A.br())
t=A.I()
t.r=D.F1.gp(0)
d.aG(s,t)
t=A.bJ(j.aa(0,new A.t(24,-7+k)),9,12)
s=A.I()
s.r=D.F1.gp(0)
d.dO(t,s)
s=-11+k
d.bo(j.aa(0,new A.t(22,s)),j.aa(0,new A.t(21,-17+k)),C.it(D.Xf,1.6))
d.bo(j.aa(0,new A.t(26,s)),j.aa(0,new A.t(28,-16+k)),C.it(D.Xf,1.6))
s=j.aa(0,new A.t(26,-8+k))
t=A.I()
t.r=B.w.gp(0)
d.ad(s,0.9,t)
d.bo(j.aa(0,new A.t(26,-3+k)),j.aa(0,new A.t(26,1+k)),C.it(D.bjl,1.4))
d.bo(j.aa(0,D.ehr),j.aa(0,new A.t(-19,-7+Math.sin(f*7)*2)),C.it(D.F1,2.4))},
bQu(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
for(w=a5.a,v=0;v<14;++v){u=v*3.141592653589793*2/14
t=Math.cos(u)
s=Math.sin(u)
if(Math.sin(u)<0){t=A.bJ(new A.t(225+t*36,574+(s*13+6)),8,11)
$.S()
s=new A.ap(B.R,B.N,B.U,B.V,B.S)
s.r=D.boD.gp(0)
r=s.G()
w.drawOval(A.bF(t),r)
r.delete()}}t=A.bJ(D.a6S.aa(0,B.cv),17,52)
$.S()
s=A.I()
s.r=D.bbv.gp(0)
a5.dO(t,s)
s=A.bJ(D.a6S.aa(0,B.cv),12,44)
t=D.beX.j(0.6+0.3*Math.sin(a6*6))
q=A.I()
q.r=t.gp(0)
a5.dO(s,q)
for(p=0;p<3;++p){u=D.dda[p]
t=225+Math.cos(u)*3
s=Math.cos(u)
q=Math.sin(u)
o=Math.cos(u)
n=Math.sin(u)
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.b=B.a9
m.c=7
m.r=D.Fg.gp(0)
m.d=B.bB
m.e=B.dS
r=m.G()
w.drawLine.apply(w,[t+s*24,579+q*4,t-o*24,579-n*4,r])
r.delete()
n=Math.cos(u)
o=Math.sin(u)
q=Math.cos(u)
s=Math.sin(u)
m=D.AV.j(0.6)
l=new A.ap(B.R,B.N,B.U,B.V,B.S)
l.b=B.a9
l.c=2
l.r=m.gp(0)
l.d=B.bB
l.e=B.dS
r=l.G()
w.drawLine.apply(w,[t+n*24,579+(o*4-2),t-q*24,579-(s*4+2),r])
r.delete()}k=46+80*a7.w
j=[D.eRp,D.eRR,D.eSJ,D.eT_,D.eSH]
for(t=a6*8,s=a6*15,q=a6*3.3,o=x.v,i=0;i<3;++i){h=[1,0.72,0.42][i]
g=[D.bm8,D.biI,D.bo6][i]
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
e.push(new A.aX(a1-a2,578))
l=a1+a0*0.6
e.push(new A.kU(a1-a2*1.1,578-d*0.45,l-a2*0.2,578-d*0.7,a1+a0,578-d))
e.push(new A.kU(l+a2*0.3,578-d*0.65,a1+a2*1.15,578-d*0.4,a1+a2,578))
e.push(new A.br())
l=new A.ap(B.R,B.N,B.U,B.V,B.S)
l.r=g.j(n?0.9:0.95).gp(0)
r=l.G()
l=a3.gbx().a.snapshot()
w.drawPath((a3.e=new A.cj(l)).a,r)
r.delete()}}for(t=a6*1.5,v=0;v<22;++v){a4=B.k.F(a6*(0.35+B.o.F(v,5)*0.06)+v/22,1)
s=Math.sin(v*1.9+t)
q=a7.w
o=B.o.F(v,3)
n=F.ahp.j((1-a4)*0.9)
$.S()
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.r=n.gp(0)
r=m.G()
w.drawCircle(225+s*(10+a4*26),564-a4*(110+80*q),1.2+o*0.6,r)
r.delete()}for(t=a6*0.1,s=574-k,v=0;v<6;++v){a4=B.k.F(t+v/6,1)
q=Math.sin(a4*5+v)
o=D.afh.j(0.1*(1-a4))
$.S()
n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.r=o.gp(0)
r=n.G()
w.drawCircle(225+q*16+a4*12,s-a4*120,7+a4*20,r)
r.delete()}},
bQw(d,e){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=d.a,r=0;r<16;++r){q=B.k.F(r*83+Math.sin(w+r)*40+v,450)
p=420+B.o.F(r*37,300)+Math.sin(u+r*2)*26
o=Math.max(0,Math.sin(t+r*1.7))
n=D.bq4.j(0.18*o)
$.S()
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.r=n.gp(0)
l=m.G()
s.drawCircle(q,p,5,l)
l.delete()
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.r=D.bk2.j(0.9*o).gp(0)
l=m.G()
s.drawCircle(q,p,1.4,l)
l.delete()}},
c23(d,e){switch(d){case 0:return e.b?D.hhe:D.aXM
case 1:return e.b?D.hhk:D.aXK
case 2:return D.aXJ
case 3:return D.aXI
case 4:return D.aXL
default:return D.aXN}},
aBH(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
QH(d,e,f,g){var w,v=this,u=D.a4p[e],t=v.c23(e,g),s=new C.bna(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a4p[e],l=e===0
m=B.k.E(((l?D.aIP:D.aIU).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a6W
s.as=D.Ds
if(l){s.a=o?v.aBH(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.t(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.t(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.Ds
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.eeC
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.efZ
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
s.Q=D.eim
s.as=D.aJ6}if(e===2&&g.x!=null&&f<g.y){s.a=v.aBH(f,5)
s.b=0.4
s.as=new A.t(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aBH(f,e*3)
s.b=0.5
s.c=0.4}}C.hnX(d,u.a,u.b*1.2,t,s,f,e,null)},
bDZ(d,e,f){var w=new C.bQu(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gdc(d){return this.c}}
C.aeX.prototype={
a5(){return"_Stand."+this.b}}
C.acV.prototype={}
C.lg.prototype={}
C.bPe.prototype={
byF(d){var w,v,u,t,s=A.U(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aP()
this.c=s},
FM(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.M)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.aW(r,new C.bPf())
return r},
aq3(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aL9(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.M)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
aly(d){var w,v,u=A.aY(x.N),t=d,s=0
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
gyP(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.aW(w,new C.bPg(this))
return B.d.gI(w)}}
C.asZ.prototype={}
C.zc.prototype={}
C.ajQ.prototype={
gaE_(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Z(w,new C.bKf(),A.T(w).k("Z<1>")).gL(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ag(){var w=this
return A.G(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.M8.prototype={
gaoe(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
if(t.gaE_(0))s.push(t)}return s},
ag(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.M)(w),++s){r=w[s]
p.push(A.G(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.G(["id",this.a,"title",q,"qs",p],u,t)},
cXE(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gaoe(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.M)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.M)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lg(B.a.i(s.a),p,B.d.cu(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.b8X.prototype={}
C.a94.prototype={}
C.bg6.prototype={}
C.aeV.prototype={}
C.aj4.prototype={
U(){return new C.aj5(B.bD,A.a([],x.cC),A.a([],x.e4),null,null)},
gcZ(){return this.d}}
C.aj5.prototype={
gMs(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bBX(w.c,8,w.e,!1)
u.d!==$&&A.bG()
u.d=v
t=v}return t},
gb89(){var w,v=this,u=v.e
if(u===$){w=v.qO(v.gc8w())
v.e!==$&&A.bG()
v.e=w
u=w}return u},
a_(){this.a2()
this.gb89().h9(0)},
q(){this.gb89().q()
this.btd()},
h9(d){this.m(new C.bIt(this))},
c8x(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.ft(0,v)
if(w.c!=null)w.m(new C.bIo())},
b6x(){var w,v,u,t=this,s=t.r
B.d.a8(s)
w=t.gMs()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bg6(u,(u+0.5)/v,w[t.x].b[u]))},
ft(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bu(w,new C.bIu())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c4T()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.M)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gMs()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.k.V((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.arv(v,0.8,B.cI)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.arv(m.cy,0.8,F.n4)
m.aXq("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.arv(q,0.88,D.lq)
p=m.gMs()[m.x]
n=p.c
if(u===n){m.aXq("The right gourd fell! It was "+p.b[n]+".")
return}}}},
arv(d,e,f){var w,v,u,t=new A.e9()
t.d3(B.k.V(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ah()*3.141592653589793*2
w.push(new C.aeV(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
aXq(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.PT()}},
c4T(){var w=this
if(w.x+1>=w.gMs().length){w.PT()
return}++w.x
w.b6x()},
PT(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$PT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gMs().length
r=C.bEd(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bIm())
w=2
return A.b(C.Bs(u.a.d,r),$async$PT)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.Bt(t.d,t.c.a,"catch",u.z),$async$PT)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bIn())
return A.h(null,v)}})
return A.i($async$PT,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.c8v()
else w=v.ch?v.c8y():A.at(new A.D(B.ez,A.x(A.a([D.aTy,B.O,D.fBd,B.W,D.fHi,B.dX,C.ub("Play",v.geU(v),B.cI,B.ij,D.fn)],x.p),B.m,u,B.e,B.Q,0,B.p),u),u,u,u)
return new C.tm("Calabash Catch",w,B.fz,u)},
c8y(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hZ:B.GH
p.push(A.X(u,v?B.aw:B.bY,r,r,r,22))}p.push(B.b2)
v=s.x
u=s.gMs()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aS6,r,r,r))
p.push(B.bc)
v=A.m(14)
p.push(A.p(r,A.d(""+s.z,r,r,r,r,r,r,B.iG,r,r,r),B.f,r,r,new A.o(B.bz,r,r,v,r,r,B.n),r,r,r,r,B.FX,r,r,r))
p=A.B(p,B.m,r,B.e,B.j,0,r,r)
v=A.m(18)
t=A.J(B.cI,B.r,3)
return A.x(A.a([new A.D(D.bxM,p,r),A.p(r,A.d(u[s.x].a,r,r,r,r,r,r,D.flS,B.L,r,r),B.f,r,r,new A.o(D.pW,r,t,v,r,r,B.n),r,r,r,B.fL,B.bf,r,r,1/0),B.am,A.E(A.cB(new C.bIs(s)),1)],q),B.m,r,B.e,B.j,0,B.p)},
c8v(){var w=this,v=null,u=A.at(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.px,v,v,v),v,v,v),t=A.at(A.d(""+w.Q+" of "+w.gMs().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.Ur,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.ct(A.a([D.b9_,u,t,B.aM,new C.HU(s,r,w.cx,v),B.aM,A.at(C.ub("Back to the games",new C.bIl(w),B.cI,B.l4,D.fn),v,v,v)],x.p),v,B.ab,v,v,B.ah,!1)}}
C.bbi.prototype={
a1(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a6.a,a1=a6.b,a2=0+a0,a3=$.S(),a4=A.I()
a4.sam(A.jo(B.J,new A.t(0,a1),D.cWW,F.axQ,B.x,d))
a5.aO(new A.a3(0,0,a2,0+a1),a4)
a4=A.I()
a4.r=F.Mr.gp(0)
a5.ad(new A.t(a0*0.82,a1*0.16),22,a4)
a4=x.v
w=A.a([],a4)
v=new A.aF(a3.r,B.ag,d,d,w)
a3=a1*0.7
v.D(new A.aX(0,a3))
for(u=0;u<=a0;u+=6){t=new A.aq(u,a3+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.bv(s)
t=v.e
if(t!=null)t.a.delete()
v.e=null}v.D(new A.aq(a0,a1))
v.D(new A.aq(0,a1))
a3=$.S()
w=A.I()
w.r=D.bfR.gp(0)
a5.aG(v,w)
r=a0*0.12
a3=new A.aF(a3.r,B.ag,d,d,A.a([],a4))
w=a1*0.86
a3.D(new A.aX(r-26,w))
t=a1*0.5
s=a1*0.34
a3.D(new A.c3(r-14,t,r-10,s))
a3.D(new A.aq(r+10,s))
a3.D(new A.c3(r+14,t,r+26,w))
a3.D(new A.br())
w=A.I()
w.r=D.aer.gp(0)
a5.aG(a3,w)
for(a3=a1*0.36,w=a1*0.24,t=a5.a,s=a1*0.22,q=0;q<4;++q){p=D.chY[q]
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=D.aer.gp(0)
o.c=7
o.d=B.bB
n=o.G()
t.drawLine.apply(t,[r,a3,r+p*46,w,n])
n.delete()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=D.adO.gp(0)
n=o.G()
t.drawCircle(r+p*50,s,18,n)
n.delete()}a3=a1*0.88
w=A.I()
w.r=D.bgJ.gp(0)
a5.aO(new A.a3(0,a3,a2,a3+a1*0.12),w)
for(a2=a1*0.9,a3=a2-8,m=0;m<18;++m){w=a0*m/17
s=new A.ap(B.R,B.N,B.U,B.V,B.S)
s.r=D.afV.gp(0)
s.c=2
n=s.G()
t.drawLine.apply(t,[w,a2,w+3,a3,n])
n.delete()}for(a2=this.b,a3=a2.r,w=a3.length,s=a1*0.89,q=0;q<a3.length;a3.length===w||(0,A.M)(a3),++q){l=a3[q]
if(l.e)continue
o=l.a
u=(l.b+Math.sin(a2.dx*1.7+o)*0.012)*a0
k=l.d
if(l.f){o=A.bJ(new A.t(u,s),12,54)
$.S()
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=D.lq.j(0.6).gp(0)
n=k.G()
t.drawOval(A.bF(o),n)
n.delete()
continue}o=Math.sin(a2.dx*2+o)
J.bl(t.save())
t.translate(u,k*a1)
t.rotate(o*0.1*180/3.141592653589793,0,0)
$.S()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=D.af2.gp(0)
n=o.G()
t.drawCircle(0,-34,14,n)
n.delete()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=D.blc.gp(0)
o.c=4
o.d=B.bB
n=o.G()
t.drawLine.apply(t,[0,-46,2,-56,n])
n.delete()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.sam(A.to(D.eh9,46,D.d46,B.CM,B.x,d,d,0))
n=o.G()
t.drawCircle(0,0,34,n)
n.delete()
o=A.bJ(D.ehf,8,12)
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=B.c.j(0.35).gp(0)
n=k.G()
t.drawOval(A.bF(o),n)
n.delete()
j=new A.jQ(new A.eu(l.c,d,d,B.cQ,d,d,d,d,d,d,D.fjM),B.L,B.bZ,new A.jA(1),d,d,3,d,B.bW,d)
j.nX(62)
o=j.b
k=Math.max(40,o.c+10)
o=o.a.c
i=A.bs(A.bJ(B.cH,o.gbb(o)+8,k),B.fB)
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=D.pW.gp(0)
n=k.G()
t.drawRRect(A.ek(i),n)
n.delete()
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=D.lq.gp(0)
k.b=B.a9
k.c=1.5
n=k.G()
t.drawRRect(A.ek(i),n)
n.delete()
k=j.b
o=k.c
k=k.a.c
j.a1(a5,new A.t(-o/2,4-k.gbb(k)/2))
t.restore()}h=a2.cy*a0
a3=a2.dx
w=Math.sin(a3*4)
X.AU(a5,new A.t(h,a1*0.93),a1*0.3,a3,!0,Math.abs(a2.db-a2.cy)*40*Math.abs(Math.sin(a2.dx*18)),2,B.dE,G.my,!1,(w+1)/2)
g=A.bJ(new A.t(h,a1*0.8),a1*0.07,a0*0.24)
a4=new A.aF($.S().r,B.ag,d,d,A.a([],a4))
w=g.a
a3=g.b
a4.D(new A.aX(w,a3))
s=g.c
a4.D(new A.aq(s,a3))
o=g.d
a4.D(new A.aq(s-8,o))
a4.D(new A.c3(g.gbK().a,o+8,w+8,o))
a4.D(new A.br())
k=A.I()
k.r=D.Y1.gp(0)
a5.aG(a4,k)
for(a4=s-w,m=1;m<6;++m){s=w+a4*m/6
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=D.AV.gp(0)
k.c=1.4
n=k.G()
t.drawLine.apply(t,[s,a3,s+(m-3)*2,o,n])
n.delete()}s=a3+(o-a3)*0.35
o=A.I()
o.r=F.n4.gp(0)
a5.aO(new A.a3(w,s,w+a4,s+5),o)
w-=2
a3-=4
o=A.I()
o.r=D.bfW.gp(0)
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
j=A.fu(d,d,d,d,A.cS(d,d,d,d,d,d,d,d,d,A.l(d,d,B.cI.j(1-e/1.2),d,d,d,d,d,d,d,d,26,d,d,B.u,d,d,!0,d,d,d,d,d,K.CG,d,d),"+"+a3),B.a3,B.bZ,d,B.dA,B.bW)
j.ej()
j.a1(a5,new A.t(a2.id*a0-j.b.c/2,a1*0.72-e*60))}},
aw(d){return!0}}
C.PZ.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aAg(w.c,w.f,v),B.ax),s=A.m(10),r=A.J(B.bC,B.r,1.4)
return new A.a7(u+22,v,A.x(A.a([new A.a7(u,u,t,v),B.cL,A.p(v,A.d(w.d,v,1,B.a2,v,v,v,D.fcz,v,v,v),B.f,v,v,new A.o(B.c,v,r,s,v,v,B.n),v,v,v,v,B.mG,v,v,v)],x.p),B.m,v,B.e,B.Q,0,B.p),v)},
gY(d){return this.e}}
C.aAg.prototype={
a1(d,e){var w=e.eg(B.J),v=e.gdC(),u=this.c?0.8:0
return X.fLc(d,w,v*0.44,this.b,0,u)},
aw(d){return d.b!==this.b||d.c!==this.c}}
C.ayI.prototype={}
C.aty.prototype={
U(){return new C.atz(A.U(x.S,x.cq),null,null)},
gcZ(){return this.d}}
C.atz.prototype={
gkG(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hsV(w.c,w.e)
u.d!==$&&A.bG()
u.d=v
t=v}return t},
gaDN(){var w=this.z
return w===$?this.z=this.WO(0):w},
giS(){var w,v=this.Q
if(v===$){w=this.gkG()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c2(w,-1,!1,x.S)}return v},
WO(d){var w,v,u,t,s=this.gkG()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.ayI(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.ayI(v[t],u[t],-1))
v=new A.e9()
v.d3(this.a.e*31+d)
B.d.dY(s,v)
return s},
q(){var w,v,u
for(w=this.as,w=new A.dq(w,w.r,w.e);w.C();){v=w.d
v.r.q()
v.r=null
u=v.eH$
u.b=!1
B.d.a8(u.a)
u=u.gog()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dS$.a.a8(0)
v.ql()}this.btG()},
cMU(d,e){var w,v,u,t,s,r=this
if(d>=r.giS().length||r.giS()[d]!==-1||B.d.t(r.giS(),e))return
w=r.gaDN()[e]
v=r.gkG()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.clu(r,e,w,v))
A.cL(B.ly,new C.clv(r))
return}++r.r
u=A.bm(null,B.hq,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.q()
t.n(0,d,u)
r.m(new C.clw(r,d,e,w,v))
u.cp(0)},
lh(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$lh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkG()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cI(n,0,new C.clx())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.cly(t,r))
w=5
return A.b(C.Bs(t.a.d,r),$async$lh)
case 5:t.x=f
o=t.a
w=6
return A.b(C.Bt(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$lh)
case 6:t.ch=f
if(t.c!=null)t.m(new C.clz())
w=1
break
case 4:for(o=t.as,n=new A.dq(o,o.r,o.e);n.C();){q=n.d
q.r.q()
q.r=null
p=q.eH$
p.b=!1
B.d.a8(p.a)
p=p.gog()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dS$.a.a8(0)
q.ql()}o.a8(0)
t.m(new C.clA(t))
case 1:return A.h(u,v)}})
return A.i($async$lh,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.at(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.px,p,p,p),p,p,p)
v=r.f
v=A.at(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.Ur,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tm(q,A.ct(A.a([D.adm,w,v,B.aM,new C.HU(u,t,r.ch,p),B.aM,A.at(C.ub("Back to the games",new C.clq(d),B.cI,B.l4,D.fn),p,p,p)],x.p),p,B.ab,p,p,B.ah,!1),B.fz,p)}w=r.gkG()
v=r.e
s=w[v]
return new C.tm(q,new A.D(B.u0,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aS1,B.L,p,p),A.E(A.cB(new C.clr(r,s)),1)],x.p),B.m,p,B.e,B.j,0,B.p),p),B.fz,p)}}
C.baO.prototype={
a1(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null,b2=y.B,b3=b0.d,b4=new A.Z(b3,new C.cKR(),A.T(b3).k("Z<1>")).gL(0),b5=b0.b,b6=b5.aa(0,B.IN)
$.S()
w=A.I()
w.r=D.lr.j(0.18+0.1*b4).gp(0)
b7.ad(b6,70+b4*10,w)
w=b8.a
b6=b8.b
v=b5.aa(0,D.edJ)
u=A.I()
u.r=B.o3.j(0.5).gp(0)
u.c=10
u.d=B.bB
b7.bo(new A.t(w/2,b6*0.98),v,u)
for(v=b0.c,u=b5.a,b5=b5.b,t=b5+90,s=x.v,b5+=46,r=x.dc,q=x.U,p=b7.a,o=0;o<v.length;++o){n=v[o]
m=n.a+0
l=B.dT.av(0,B.k.E(b3[o],0,1))
k=$.S().r
j=A.a([],s)
i=new A.aF(k,B.ag,b1,b1,j)
j.push(new A.aX(u,b5))
j.push(new A.c3((u+m)/2,t,m,n.b+-46))
if(l<1)for(n=new A.aF(k,B.ag,b1,b1,A.bq(j,!0,r)),m=A.a([],q),h=new A.tl(n,!1,m);h.C();){g=h.c
if(g===0||h.f)A.b8(A.ju(b2));--g
f=new A.Bq(h,g)
e=0
for(;;){h.ij()
d=m[g].b
d===$&&A.c()
if(!(e<d.a.length()))break
h.ij()
d=m[g].b
d===$&&A.c()
d=Math.min(d.a.length(),e+7)
d=new A.aF(k,n.b,b1,new A.cw([f,e,d,!0]),A.a([],s))
$.S()
a0=new A.ap(B.R,B.N,B.U,B.V,B.S)
a0.r=B.aZ.gp(0)
a0.b=B.a9
a0.c=3
a1=a0.G()
a0=d.gbx().a.snapshot()
p.drawPath((d.e=new A.cj(a0)).a,a1)
a1.delete()
e+=14}}if(l>0)for(n=new A.aF(k,i.b,i.c,b1,A.bq(j,!0,r)),m=A.a([],q),j=new A.tl(n,!1,m),h=l>0.4,g=9-3*l,d=11*l,a0=6*l;j.C();){a2=j.c
if(a2===0||j.f)A.b8(A.ju(b2));--a2
j.ij()
a3=m[a2].b
a3===$&&A.c()
a3=a3.a.length()
a3=new A.aF(k,n.b,b1,new A.cw([new A.Bq(j,a2),0,a3*l,!0]),A.a([],s))
$.S()
a4=new A.ap(B.R,B.N,B.U,B.V,B.S)
a4.r=D.Ft.gp(0)
a4.b=B.a9
a4.c=g
a4.d=B.bB
a1=a4.G()
a4=a3.gbx().a.snapshot()
p.drawPath((a3.e=new A.cj(a4)).a,a1)
a1.delete()
j.ij()
a3=m[a2].b
a3===$&&A.c()
a3=a3.a.length()
j.ij()
a5=m[a2].H8(a3*l)
if(h)for(a2=a5.a,a3=a2.a,a2=a2.b,a6=0;a6<4;++a6){a7=a6*1.6+o
a4=A.bJ(new A.t(a3+Math.cos(a7)*14,a2+Math.sin(a7)*10),a0,d)
a8=new A.ap(B.R,B.N,B.U,B.V,B.S)
a8.r=B.bj.gp(0)
a1=a8.G()
p.drawOval(A.bF(a4),a1)
a1.delete()}}}if(b0.e)for(b3=b6*0.3,o=0;o<6;++o){a9=new A.jQ(D.fc3,B.a3,B.bZ,new A.jA(1),b1,b1,b1,b1,B.bW,b1)
a9.ej()
a9.a1(b7,new A.t(w*(0.15+o*0.14),b3-B.o.F(o,3)*14))}},
aw(d){return!0}}
C.axt.prototype={
U(){return new C.axu(A.aY(x.S))},
gcZ(){return this.d}}
C.axu.prototype={
gkG(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.htP(w.c,w.e)
u.d!==$&&A.bG()
u.d=v
t=v}return t},
a_(){this.a2()
this.b6G()},
q(){var w=this.ch
if(w!=null)w.a4(0)
this.a3()},
b6G(){var w=this.ch
if(w!=null)w.a4(0)
this.ch=A.dk(B.rh,new C.cAp(this))},
bnt(d){var w,v=this
if(v.as||v.z.t(0,d))return
w=v.gkG()[v.e]
if(w.e[d]===w.b)v.m(new C.cAx(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cAy(v,d))
A.cL(B.iS,new C.cAz(v))}},
cSh(){var w=this
if(!w.as&&w.f<w.gkG()[w.e].d.length)w.m(new C.cAA(w))},
lh(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$lh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.gkG()
w=r+1>=q.length?3:4
break
case 3:r=t.ch
if(r!=null)r.a4(0)
r=t.w
q=r===q.length?15:0
s=r*6+q
t.m(new C.cAB(t,s))
w=5
return A.b(C.Bs(t.a.d,s),$async$lh)
case 5:t.y=f
q=t.a
w=6
return A.b(C.Bt(q.d,q.c.a,"who",t.r),$async$lh)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cAC())
w=1
break
case 4:t.m(new C.cAD(t))
t.b6G()
case 1:return A.h(u,v)}})
return A.i($async$lh,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.at(A.d(""+a0.w+" of "+a0.gkG().length+" guessed",a2,a2,a2,a2,a2,a2,B.px,a2,a2,a2),a2,a2,a2)
v=A.at(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.Ur,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tm(a1,A.ct(A.a([D.b9b,w,v,B.aM,new C.HU(u,t,a0.ax,a2),B.aM,A.at(C.ub("Back to the games",new C.cAr(a3),B.cI,B.l4,D.fn),a2,a2,a2)],x.p),a2,B.ab,a2,a2,B.ah,!1),B.fz,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkG()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.JZ,B.L,a2,a2),B.W,A.at(A.lr(new C.cAs(a0,r),a2,B.b7,B.hq,a2,a2,new A.bo(a2,s,u),x.i),a2,a2,a2),B.aA],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aQ(16,16)
l=new A.ay(B.cI,2,B.r,-1)
k=o+1
w.push(new A.qP(new A.bo(0,1,u),new C.cAt(),A.p(a2,new A.cc(B.aN,B.e,B.j,B.m,a2,B.p,a2,0,A.a([new A.qr(new A.y(""+k,a2,B.nF,a2,a2,a2,a2,a2,a2,a2,a2,a2),D.lq,a2,12,a2),B.as,new A.bA(1,B.bd,new A.y(v[n].d[o],a2,D.foo,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.o(D.pW,a2,new A.bK(l,l,l,l),new A.bk(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.cu,B.bf,a2,a2,a2),B.b7,B.iS,a2,new A.cs("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.at(A.bN(!1,D.fP2,a2,a2,!0,a2,a2,a0.gcSg(),a2,a2),a2,a2,a2))
w.push(B.O)
if(a0.as){u=D.lr.j(0.2)
q=A.m(16)
p=A.J(D.lr,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.ft,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.p(a2,A.x(A.a([m,B.W,C.ub(v,a0.gq3(a0),B.cI,B.jQ,D.fn)],t),B.m,a2,B.e,B.j,0,B.p),B.f,a2,a2,new A.o(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bF,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.t(0,o)?B.dt:B.cI.j(0.2)
g=new A.aQ(16,16)
l=new A.ay(n.t(0,o)?B.f7:B.cI,2,B.r,-1)
f=v[a0.e].e[o]
e=n.t(0,o)?B.bY:B.c
d=n.t(0,o)?B.wO:a2
t.push(new A.qP(new A.bo(0,i,u),new C.cAu(),A.aB(a2,A.p(a2,new A.y(f,a2,new A.F(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),a2,B.L,a2,a2,a2,a2,a2,a2,a2),B.f,a2,D.acv,new A.o(h,a2,new A.bK(l,l,l,l),new A.bk(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jb,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cAv(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a5),B.b7,B.mB,a2,new A.cs("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bW(B.fE,t,B.bq,a2,10,10))}return new C.tm(a1,A.ct(w,a2,B.ajL,a2,a2,B.ah,!1),B.fz,a2)}}
C.ayt.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbE())
w.a9$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.aFF.prototype={
aV(){this.b6()
this.b3()
this.dH()},
q(){var w=this,v=w.b4$
if(v!=null)v.a6(0,w.gdD())
w.b4$=null
w.a3()}}
C.aeJ.prototype={
apG(d){},
aq7(){var w=this,v=w.qO(new C.eYZ(w))
v.h9(0)
w.LA$!==$&&A.aP()
w.LA$=v}}
C.aJr.prototype={
gbjX(d){var w=this.c
return B.a.aq(w,0,Math.min(this.d,w.length))},
Vn(d){var w=this,v=w.b
if(v!=null)v.a4(0)
w.c=d
w.d=0
w.b=A.dk(D.aiK,new C.f7Z(w))},
bpI(d){var w=this,v=w.b
if(v!=null)v.a4(0)
w.d=w.c.length
w.a.$0()},
q(){var w=this.b
return w==null?null:w.a4(0)}}
C.al0.prototype={
U(){return new C.al1(new C.ala(),A.a([],x.t),new A.ez(0,$.ax()),$,0,null,null)},
gcZ(){return this.d}}
C.al1.prototype={
gMq(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bBX(w.c,10,w.e,!0)
u.d!==$&&A.bG()
u.d=v
t=v}return t},
gh3(d){var w,v=this,u=v.e
if(u===$){w=C.Mn(v.a.c)
v.e!==$&&A.bG()
v.e=w
u=w}return u},
gqc(){var w=this.r
return w===$?this.r=new C.aJr(new C.bQ0(this)):w},
gaov(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gMq()[v].c)u.push(1)
return u.length},
gbjf(){var w=this.gh3(0)
return w.gyP()==null?"Elder":B.a.i(w.gyP().b)},
a_(){this.a2()
this.aq7()},
q(){var w,v=this
v.gqc().q()
v.f.q()
w=v.LA$
w===$&&A.c()
w.q()
w=v.pT$
w.S$=$.ax()
w.P$=0
v.btl()},
cH3(){var w=this
w.m(new C.bPY(w))
w.gqc().Vn(w.gMq()[w.x].a)},
KE(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqc()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.pT$.a
v.ax=u
v.ay=u+1
v.m(new C.bPW())
A.cL(B.hq,new C.bPX(v))},
bnr(){var w=this.gaov(0)/this.gMq().length*100
if(w>=90)return D.eOt
if(w>=75)return D.eMz
if(w>=60)return D.eDp
if(w>=45)return D.eGM
return D.exR},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cpW()
w=A.bT(0,new A.ex(A.b4(m,m,m,new C.br7(n,n.pT$),B.ax),m),0,0,0)
if(!n.Q){v=D.pW.j(0.96)
u=A.m(20)
t=A.J(B.cI,B.r,3)
u=A.p(m,A.x(A.a([A.d("Elder "+n.gbjf()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aSW,B.L,m,m),B.W,C.ub("Start the test",n.gBm(),B.cI,B.iV,D.fn)],x.p),B.m,m,B.e,B.Q,0,B.p),B.f,m,m,new A.o(v,m,t,u,m,m,B.n),m,m,m,m,B.bF,m,m,m)
v=u}else{v=n.x
u=n.gMq()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aSY,m,m,m)
if(n.Q){t=n.gqc()
t=t.d<t.c.length}else t=!1
if(t)u=D.f4z
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aQ(10,10)
o=new A.ay(D.AV,4,B.r,-1)
s.push(A.aB(m,A.p(m,new A.y(q[r],m,D.ffI,m,B.L,m,m,m,m,m,m,m),B.f,m,D.acv,new A.o(D.bbZ,m,new A.bK(o,o,o,o),new A.bk(p,p,p,p),m,m,B.n),m,m,m,m,B.Nd,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bPZ(n,r),m,m,m,m,m,m,!1,B.a5))}u=A.bW(B.fE,s,B.bq,new A.cs("o"+t,x.W),8,8)}u=A.x(A.a([v,B.am,A.pG(u,B.mA,A.r0(),B.b7,B.b7,A.Rh())],x.p),B.m,m,B.e,B.Q,0,B.p)
v=u}return new C.tm("Village School",new A.an(B.a_,m,B.aa,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.fz,m)},
cpW(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bnr(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gMq()[v].c)g.push(v)
u=A.m(22)
t=A.J(B.cI,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.fk4,B.L,i,i)
r=A.d("Signed by Elder "+j.gbjf(),i,i,i,i,i,i,D.fiK,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fnK,i,i,i),D.epR],q)
o=A.d(h.b,i,i,i,i,i,i,D.fpz,i,i,i)
n=j.gaov(0)
m=j.gMq()
u=A.p(i,A.x(A.a([D.fAx,B.av,s,r,B.W,new A.an(B.A,i,B.aa,B.t,p,i),o,B.am,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.a9F,i,i,i),B.O,D.aqe],q),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(D.pW,i,t,u,i,i,B.n),i,i,i,i,B.fr,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aA,new C.HU(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aM,D.fQ5,B.O],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.M)(g),++l){v=g[l]
r=new A.aQ(14,14)
k=new A.ay(B.bz,1,B.r,-1)
p=m[v]
u.push(A.p(i,A.x(A.a([new A.y(p.a,i,B.fQ,i,i,i,i,i,i,i,i,i),B.av,new A.y("You said: "+p.b[w[v]],i,D.flc,i,i,i,i,i,i,i,i,i),new A.y(p.d,i,D.fnn,i,i,i,i,i,i,i,i,i)],q),B.E,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.dt,i,new A.bK(k,k,k,k),new A.bk(r,r,r,r),i,i,B.n),i,i,i,B.cu,B.bf,i,i,i))}B.d.v(s,u)}s.push(B.aA)
s.push(A.at(C.ub("Back to the games",new C.bPS(j),B.cI,B.l4,D.fn),i,i,i))
return new C.tm("Village School",A.ct(s,i,B.bR,i,i,B.ah,!1),B.fz,i)}}
C.br7.prototype={
a1(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.b,e=f.pT$.a,d=a1.a,a0=f.f.Ma(a2).b
a0===$&&A.c()
a0=a0.a
a0===$&&A.c()
a0=a0.a
a0.toString
d.drawPicture(a0)
w=C.h1l(a2)
J.bl(d.save())
d.translate(w.a,w.b)
a1.bW(0,w.c)
if(f.Q){a0=f.gqc()
v=a0.d<a0.c.length}else v=!1
for(u=0;u<2;++u){a0=D.cRi[u]-6
$.S()
t=new A.ap(B.R,B.N,B.U,B.V,B.S)
t.r=D.Fg.gp(0)
s=t.G()
d.drawRect(A.bF(new A.a3(a0,340,a0+12,450)),s)
s.delete()}a0=A.bs(D.a7O.cq(10),B.hO)
$.S()
t=A.I()
t.r=D.AV.gp(0)
a1.az(a0,t)
t=A.bs(D.a7O,B.hy)
a0=A.I()
a0.sam(A.jo(new A.t(30,96),new A.t(420,346),D.d9j,g,B.x,g))
a1.az(t,a0)
r=new A.e9()
r.d3(2)
for(q=0;q<18;++q){a0=r.ah()
t=r.ah()
p=r.ah()
p=A.bJ(new A.t(30+a0*390,96+t*250),8+r.ah()*14,30+p*60)
t=new A.ap(B.R,B.N,B.U,B.V,B.S)
t.r=B.c.j(0.025).gp(0)
s=t.G()
d.drawOval(A.bF(p),s)
s.delete()}a0=A.I()
a0.r=K.agF.gp(0)
a1.aO(new A.a3(30,354,420,362),a0)
a0=A.I()
a0.r=B.aP.gp(0)
a1.aO(D.eXy,a0)
a0=A.I()
a0.r=B.bM.gp(0)
a1.aO(D.eXC,a0)
a0=A.bs(D.eXs,B.hx)
t=A.I()
t.r=D.Y1.gp(0)
a1.az(a0,t)
o=B.k.E((e-f.ax)/0.7,0,1)
if(f.Q){a0=f.gqc().gbjX(0)
n=A.fu(g,g,7,g,A.cS(g,g,g,g,g,g,g,g,g,D.frK,a0+(v?"|":"")),B.a3,B.bZ,g,B.dA,B.bW)
n.nX(346)
J.bl(d.save())
a0=A.bF(D.a7O)
t=$.mr()
d.clipRect(a0,t[1],!0)
a0=o<1
if(a0&&f.w.length>f.x)d.clipRect(A.bF(new A.a3(30+390*o,96,420,346)),t[1],!0)
n.a1(a1,new A.t(52,118))
d.restore()
if(o>0&&a0){a0=30+390*o-20
t=126+40*Math.sin(o*9)
t=A.bs(new A.a3(a0,t,a0+40,t+90),B.fB)
a0=A.I()
a0.r=D.bqT.gp(0)
a1.az(t,a0)}}else{n=A.fu(g,g,g,g,D.fcj,B.L,B.bZ,g,B.dA,B.bW)
n.nX(340)
n.a1(a1,new A.t(55,176))}if(v)for(a0=e*1.2,t=e*3,q=0;q<8;++q){m=B.k.F(a0+q/8,1)
p=B.o.F(f.gqc().d*9,310)
l=Math.sin(q+t)
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=B.c.j(0.7*(1-m)).gp(0)
s=k.G()
d.drawCircle(70+p+l*6,166+m*70,1.6,s)
s.delete()}a0=f.gh3(0).gyP()
j=(a0==null?g:a0.c)===D.oa?1:0
i=e<f.ay
h=A.a([new A.z(470,new C.eZ_(e,a1,j,v,i,D.eeO)),new A.z(520,new C.eZ0(a1,e,v)),new A.z(575,new C.eZ1(a1,e,v)),new A.z(585,new C.eZ2(this,a1,e,v)),new A.z(615,new C.eZ3(this,v,a1,e,i))],x.E)
B.d.aW(h,new C.eZ4())
for(u=0;u<5;++u)h[u].b.$0()
d.restore()},
c8z(d,e){var w,v,u,t,s,r,q,p=$.S(),o=A.a([],x.v),n=new A.aF(p.r,B.ag,null,null,o)
for(p=d.a,w=d.b,v=e*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?e:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new A.aX(r,q)
o.push(r)
q=n.f
if(q!=null)r.bv(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new A.aq(r,q)
o.push(r)
q=n.f
if(q!=null)r.bv(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.D(new A.br())
return n},
aw(d){return!1}}
C.akZ.prototype={
U(){return new C.al_(new C.ala(),A.U(x.S,x.i),new A.ez(0,$.ax()),$,0,null,null)},
gcZ(){return this.d}}
C.al_.prototype={
gkG(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hsK(w.c,w.e)
u.d!==$&&A.bG()
u.d=v
t=v}return t},
giS(){var w=this.z
return w===$?this.z=this.Fi(0):w},
gaJN(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.Fi(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.cu(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.Fi(0):r).length);++v}s.Q=w
r=w}return r},
Fi(d){var w,v,u,t,s=this.gkG()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e4(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e9()
u.d3(this.a.e+d*7)
B.d.dY(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.fa(u,new C.bPE())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
a_(){this.a2()
this.aq7()},
q(){var w,v=this
v.e.q()
w=v.LA$
w===$&&A.c()
w.q()
w=v.pT$
w.S$=$.ax()
w.P$=0
v.btk()},
apG(d){var w,v,u,t,s,r=this,q=r.giS().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.cu(u===$?r.z=r.Fi(0):u,v)
s=r.gaJN()
s[v]=s[v]+(450*(t+0.5)/q-r.gaJN()[v])*Math.min(1,w)}},
cXk(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.giS().length)return
w=v.y
if(w===-1){v.m(new C.bPP(v,d))
return}if(w===d){v.m(new C.bPQ(v))
return}v.m(new C.bPR(v,B.d.cu(v.giS(),v.y),d,B.d.cu(v.giS(),d)))},
cHJ(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.Fi(0):u).length))break
t=s.gkG()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.Fi(0):u)[v]]===v);++v}s.m(new C.bPK(s,B.d.d5(w,new C.bPL())))},
lh(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$lh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkG().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bPM(t,s))
w=5
return A.b(C.Bs(t.a.d,s),$async$lh)
case 5:t.x=f
q=t.a
w=6
return A.b(C.Bt(q.d,q.c.a,"lineup",t.r*10),$async$lh)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bPN())
w=1
break
case 4:t.m(new C.bPO(t))
case 1:return A.h(u,v)}})
return A.i($async$lh,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.at(A.d(""+l.r+" of "+l.gkG().length+" lines right",k,k,k,k,k,k,B.px,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tm("Line Up",A.ct(A.a([D.adm,w,B.aM,new C.HU(v,u,l.ch,k),B.aM,A.at(C.ub("Back to the games",new C.bPG(d),B.cI,B.l4,D.fn),k,k,k)],x.p),k,B.ab,k,k,B.ah,!1),B.fz,k)}w=A.a([],x.t)
for(t=0;v=l.gkG(),t<v[l.f].d.length;++t)w.push(t)
B.d.aW(w,new C.bPH(l))
u=A.bT(0,A.cB(new C.bPI(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aSY,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.fkt,B.L,k,k),A.d(s.b,k,k,k,k,k,k,D.fmE,B.L,k,k)],q),B.m,k,B.e,B.j,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.m(16)
n=l.ax
m=A.J(n?D.lr:F.n4,B.r,2)
r.push(A.p(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bPJ(l),x.cM).aH(0,", then ")+".",k,k,k,k,k,k,D.foK,k,k,k),B.f,k,k,new A.o(p,k,m,o,k,k,B.n),k,k,k,B.d3,B.bf,k,k,1/0))}if(!l.at)r.push(C.ub("That is my line!",l.gcHI(l),B.cI,B.ht,D.fn))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.ub(w,l.gq3(l),B.cI,B.jQ,D.fn))}return new C.tm("Line Up",new A.an(B.a_,k,B.aa,B.t,A.a([u,s,A.ao(12,A.x(r,B.m,k,B.e,B.Q,0,B.p),k,k,12,12,k,k)],q),k),B.fz,k)}}
C.bhU.prototype={
a1(c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.pT$.a,c6=c8.a,c7=c4.e.Ma(c9).b
c7===$&&A.c()
c7=c7.a
c7===$&&A.c()
c7=c7.a
c7.toString
c6.drawPicture(c7)
w=C.h1l(c9)
J.bl(c6.save())
c6.translate(w.a,w.b)
c8.bW(0,w.c)
v=c4.giS().length
c7=$.S().r
u=x.v
t=new A.aF(c7,B.ag,c3,c3,A.a([],u))
t.D(new A.aX(10,470))
t.D(new A.c3(225,500,440,470))
s=A.I()
s.r=D.Y1.gp(0)
s.b=B.a9
s.c=4
c8.aG(t,s)
for(s=c5*3,r=0;r<12;++r){q=30+r*36
p=470+30*Math.sin(3.141592653589793*(q-10)/430)*0.95
o=Math.sin(s+r)
n=A.a([],u)
m=new A.aF(c7,B.ag,c3,c3,n)
n.push(new A.aX(q,p))
n.push(new A.aq(q+16,p+6+o*3))
n.push(new A.aq(q,p+20))
n.push(new A.br())
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=[B.cI,F.n4,D.lr,B.aQ][B.o.F(r,4)].gp(0)
l=o.G()
o=m.gbx().a.snapshot()
c6.drawPath((m.e=new A.cj(o)).a,l)
l.delete()}this.aZW(c8,"OLDEST",D.efO,B.cI)
this.aZW(c8,"YOUNGEST",D.eff,B.bj)
c7=A.bs(D.eXm,B.fB)
u=A.I()
u.r=D.Fg.gp(0)
c8.az(c7,u)
u=A.bs(D.eXl,B.hy)
c7=A.I()
c7.r=D.AV.gp(0)
c8.az(u,c7)
k=c5<c4.CW
j=c5<c4.cx
i=v>=5?0.92:1.12
c7=A.a([],x.t)
for(h=0;h<v;++h)c7.push(h)
B.d.aW(c7,new C.dlV())
for(u=c7.length,s=440/v-8,o=c5*10,n=!k,m=c4.as,g=c5*9,f=c5*8,e=c5*12,d=0;d<c7.length;c7.length===u||(0,A.M)(c7),++d){h=c7[d]
a0=c4.z
a1=B.d.cu(a0===$?c4.z=c4.Fi(0):a0,h)
q=c4.gaJN()[h]
a2=c4.y===h
a3=a2?Math.abs(Math.sin(g))*10:0
a4=m.h(0,h)
if(a4!=null&&c5<a4)a3+=Math.sin((1-(a4-c5)/0.5)*3.141592653589793)*14
a5=c4.at&&c4.gkG()[c4.f].e[h]===a1
a6=c4.at&&!c4.ax&&!a5
a7=c4.gkG()
a8=a7[c4.f].c
a9=a8.length>h?a8[h]:h
if(n)b0=c4.at&&a5
else b0=!0
b1=Math.max(0,Math.sin(o+h))
if(a2){$.S()
a8=new A.ap(B.R,B.N,B.U,B.V,B.S)
a8.r=B.cI.j(0.22+0.1*Math.sin(f)).gp(0)
l=a8.G()
c6.drawCircle(q,520,54,l)
l.delete()}a8=D.dcZ[B.o.F(a9,6)]
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
else b8=a2?D.ehU:c3
if(b0)b9=new A.t(3+b1*8,-56)
else if(j&&a6)b9=D.aJ6
else b9=a2?new A.t(30,-104+Math.sin(f)*5):c3
C.RN(c8,new A.t(q,612),b7,b4,(225-q)/225*0.5,-0.3,b8,b9,D.IP,a8,b3,0,i,b2,b5,c5,b6)
a7=a7[c4.f].d[h]
c0=new A.jQ(new A.eu(a7,c3,c3,B.cQ,c3,c3,c3,c3,c3,c3,D.fif),B.a3,B.bZ,new A.jA(1),"\u2026",c3,1,c3,B.bW,c3)
c0.nX(s)
c1=A.bs(A.bJ(new A.t(q,650),24,c0.b.c+16),B.fB)
$.S()
a7=new A.ap(B.R,B.N,B.U,B.V,B.S)
if(a5)a8=B.iu
else a8=a6?B.rc:D.pW
a7.r=a8.gp(0)
l=a7.G()
c6.drawRRect(A.ek(c1),l)
l.delete()
a7=new A.ap(B.R,B.N,B.U,B.V,B.S)
if(a5)a8=D.lr
else a8=a6?F.n4:D.lq
a7.r=a8.gp(0)
a7.b=B.a9
a7.c=2
l=a7.G()
c6.drawRRect(A.ek(c1),l)
l.delete()
a7=c0.b
a8=a7.c
a7=a7.a.c
c0.a1(c8,new A.t(q-a8/2,650-a7.gbb(a7)/2))
c2=new A.jQ(new A.eu(""+(a1+1),c3,c3,B.cQ,c3,c3,c3,c3,c3,c3,D.fiz),B.a3,B.bZ,new A.jA(1),c3,c3,c3,c3,B.bW,c3)
c2.ej()
c2.a1(c8,new A.t(q-c2.b.c/2,668))}if(k)for(c4=c5*2,c7=c5*120,u=c5*4,r=0;r<26;++r){q=B.k.F(r*53+Math.sin(c4+r)*20,450)
s=B.k.F(c7+r*37,420)
J.bl(c6.save())
c6.translate(q,140+s)
c6.rotate((u+r)*180/3.141592653589793,0,0)
s=A.bJ(B.J,4,8)
$.S()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=[B.cI,F.n4,D.lr,B.aQ,B.c][B.o.F(r,5)].gp(0)
l=o.G()
c6.drawRect(A.bF(s),l)
l.delete()
c6.restore()}c6.restore()},
aZW(d,e,f,g){var w,v,u=null,t=A.fu(u,u,u,u,A.cS(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,K.CG,u,u),e),B.a3,B.bZ,u,B.dA,B.bW)
t.ej()
w=t.b
v=w.c
w=w.a.c
t.a1(d,f.aF(0,new A.t(v/2,w.gbb(w)/2)))},
aw(d){return!1}}
C.a17.prototype={
a5(){return"_Trip."+this.b}}
C.akV.prototype={
U(){return new C.akW(D.W3,new A.ez(0,$.ax()),$,0,null,null)},
gcZ(){return this.d}}
C.akW.prototype={
gD1(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bBX(w.c,8,w.e,!1)
u.d!==$&&A.bG()
u.d=v
t=v}return t},
gh3(d){var w,v=this,u=v.e
if(u===$){w=C.Mn(v.a.c)
v.e!==$&&A.bG()
v.e=w
u=w}return u},
gqc(){var w=this.f
return w===$?this.f=new C.aJr(new C.bPq(this)):w},
gTo(){var w=this.gh3(0)
return w.gyP()==null?"Grandma":B.a.i(w.gyP().b)},
a_(){this.a2()
this.aq7()},
q(){var w,v=this
v.gqc().q()
w=v.LA$
w===$&&A.c()
w.q()
w=v.pT$
w.S$=$.ax()
w.P$=0
v.btj()},
apG(d){var w,v,u,t=this
if(t.r!==D.abk)return
w=B.dw.av(0,B.k.E((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gD1()
if(v+1>=u.length){t.r=D.abl
t.Wj()}else{++t.w
t.ay=!1
t.r=D.W4
t.gqc().Vn(u[t.w].a)}if(t.c!=null)t.m(new C.bPo())}},
Wj(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Wj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqc().Vn("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gD1().length
r=C.bEd(t,u.z,s)
u.as=r
w=2
return A.b(C.Bs(u.a.d,r),$async$Wj)
case 2:u.at=e
s=u.a
w=3
return A.b(C.Bt(s.d,s.c.a,"journey",u.x*10),$async$Wj)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bPi())
return A.h(null,v)}})
return A.i($async$Wj,v)},
boD(){this.aSj()},
aSj(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.abk
if(w.c!=null)w.m(new C.bPj())},
KE(d){var w,v,u,t,s=this
if(s.r!==D.W4)return
w=s.gD1()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bPn(s,d,v))
u=s.gqc()
t=s.w
u.Vn(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cMT(){if(this.r!==D.As)return
this.aSj()},
B(d){var w,v,u,t=this,s=null,r=A.bT(0,new A.ex(A.b4(s,s,s,new C.bhk(t,t.pT$),B.ax),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gD1().length;++w){v=t.w
if(w<v||t.r===D.abl)v=B.cI
else v=w===v?B.c:B.aZ
u=new A.aQ(4,4)
p.push(new A.bA(1,B.bd,A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bk(u,u,u,u),s,s,B.n),s,7,s,B.yh,s,s,s,s),s))}p.push(B.bn)
p.push(D.fC6)
return new C.tm("Safari Journey",new A.an(B.a_,s,B.aa,B.t,A.a([r,A.ao(s,A.B(p,B.m,s,B.e,B.j,0,s,s),s,s,12,12,2,s),A.ao(10,t.chD(),s,s,10,10,s,s)],q),s),B.fz,s)},
chD(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bPm(o),l=D.pW.j(0.96),k=A.m(22),j=A.J(B.cI,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gTo()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aSW,B.L,n,n),B.W,C.ub("Start the journey",o.gboC(),B.cI,D.bKU,D.fn)],x.p),B.m,n,B.e,B.Q,0,B.p)
break
case 3:w=D.b8K
break
case 1:w=o.w
v=o.gD1()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aQ(14,14)
p=new A.ay(D.lq,2.5,B.r,-1)
t.push(A.aB(n,A.p(n,new A.y(r[s],n,D.aSj,n,B.L,n,n,n,n,n,n,n),B.f,n,D.acC,new A.o(D.ahK,n,new A.bK(p,p,p,p),new A.bk(q,q,q,q),n,n,B.n),n,n,n,n,U.vU,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bPk(o,s),n,n,n,n,n,n,!1,B.a5))}w=A.x(A.a([w,B.O,A.bW(B.bE,t,B.bq,n,8,8)],u),B.E,n,B.e,B.Q,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gD1().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.O,new A.bM(B.a8,n,n,C.ub(v,o.gcMS(),B.cI,B.jQ,D.fn),n)],x.p),B.E,n,B.e,B.Q,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gTo()),B.O,A.d(""+o.x+" of "+o.gD1().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aSC,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aP9(v)
u=C.aP9(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.a9F,n,n,n))}w.push(B.O)
w.push(A.at(C.ub("Back to the games",new C.bPl(o),B.cI,B.l4,D.fn),n,n,n))
w=A.x(w,B.E,n,B.e,B.Q,0,B.p)
break
default:w=n}return A.p(n,w,B.f,n,n,new A.o(l,n,j,k,D.aAq,n,B.n),n,n,n,n,B.bf,n,n,n)}}
C.bhk.prototype={
a1(d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=this.b,c7=c6.pT$.a,c8=d6.a,c9=d6.b,d0=c6.CW,d1=c6.gD1(),d2=B.k.E(d0/(520*(d1.length+1)),0,1),d3=c6.r===D.abk,d4=c9*0.5
d0=A.ar(D.bdo,D.bnp,d2)
d0.toString
w=A.ar(D.Xh,F.afx,d2)
w.toString
v=A.ar(B.tz,D.blV,d2)
v.toString
$.S()
u=A.I()
t=x.O
u.sam(A.jo(B.J,new A.t(0,d4),A.a([d0,w,v],t),F.a2Y,B.x,c5))
d5.aO(new A.a3(0,0,0+c8,0+c9),u)
s=new A.t(c8*(0.15+0.7*d2),d4*(0.28+0.45*d2*d2))
u=A.I()
u.sam(A.to(s,60,A.a([D.bmh,B.K],t),c5,B.x,c5,c5,0))
d5.ad(s,60,u)
u=A.I()
u.r=B.Xt.gp(0)
d5.ad(s,22,u)
for(d0=d5.a,w=c7*4,v=c8+240,u=c9*0.06,r=0;r<5;++r){q=B.k.F(r*190-c6.CW*0.06-w,v)-120
p=u+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.drP[o]
$.S()
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.r=B.c.j(0.75).gp(0)
l=m.G()
d0.drawCircle(q+n.a,p+n.b,18,l)
l.delete()}}for(v=d2*0.7,u=d4+4,m=d4-16,k=x.v,j=0;j<2;++j){i=$.S()
h=A.a([],k)
g=new A.aF(i.r,B.ag,c5,c5,h)
h.push(new A.aX(0,u))
for(i=m-j*12,f=0.12+j*0.1,e=70+j*30,d=14-j*3,q=0;q<=c8;q+=6){a0=new A.aq(q,i+Math.sin((q+c6.CW*f)/e)*d)
h.push(a0)
a1=g.f
if(a1!=null)a0.bv(a1)
a0=g.e
if(a0!=null)a0.a.delete()
g.e=null}i=new A.aq(c8,u)
h.push(i)
h=g.f
if(h!=null)i.bv(h)
i=g.e
if(i!=null)i.a.delete()
g.e=null
$.S()
i=new A.ap(B.R,B.N,B.U,B.V,B.S)
i.r=A.ar(j===0?D.bc0:D.bqi,D.bgQ,v).gp(0)
l=i.G()
i=g.e
d0.drawPath((i==null?g.e=new A.cj(g.gbx().a.snapshot()):i).a,l)
l.delete()}for(v=d4+2,r=0;r<8;++r)this.c8A(d5,new A.t(B.k.F(B.k.F(r*300-c6.CW*0.5,2400)+2400,2400)-150,v),(r&1)===0,d2)
$.S()
v=A.I()
u=A.ar(D.agX,D.Ft,d2)
u.toString
v.sam(A.jo(new A.t(0,d4),new A.t(0,c9),A.a([u,D.bmj],t),c5,B.x,c5))
d5.aO(new A.a3(0,d4,c8,c9),v)
a2=c9*0.56
a3=c9*0.66
v=A.I()
v.r=D.bg9.gp(0)
d5.aO(new A.a3(0,a2,c8,a3),v)
v=A.I()
v.r=D.bpZ.gp(0)
d5.aO(new A.a3(0,a2-3,c8,a2),v)
for(q=-B.k.F(c6.CW,70),v=(a2+a3)/2-2,u=v+4;q<c8;q+=70){t=new A.ap(B.R,B.N,B.U,B.V,B.S)
t.r=K.LN.gp(0)
l=t.G()
d0.drawRect(A.bF(new A.a3(q,v,q+36,u)),l)
l.delete()}for(v=a2-6,u=v-36,t=u+36,m=v-34,i=c8*0.62,h=c8+160,f=c7*3,e=c7*6,d=v+40,a0=v-20,a1=a0+20,a4=v-56,a5=a4+56,a6=v-66,a7=a6+20,a8=v-72,r=0;a9=d1.length,r<=a9;r=b0){b0=r+1
q=i+b0*520-c6.CW
if(q<-160||q>h)continue
a9=r===a9
b1=q+40
b2=b1-26
b3=$.S()
b4=new A.ap(B.R,B.N,B.U,B.V,B.S)
b4.r=D.bbI.gp(0)
l=b4.G()
d0.drawRect(A.bF(new A.a3(b2,u,b2+52,t)),l)
l.delete()
b2=A.a([],k)
b3=new A.aF(b3.r,B.ag,c5,c5,b2)
b2.push(new A.aX(b1-36,m))
b2.push(new A.aq(b1,a8))
b2.push(new A.aq(b1+36,m))
b2.push(new A.br())
b2=new A.ap(B.R,B.N,B.U,B.V,B.S)
b2.r=D.bof.gp(0)
l=b2.G()
b2=b3.gbx().a.snapshot()
d0.drawPath((b3.e=new A.cj(b2)).a,l)
l.delete()
b2=b1-6
b3=new A.ap(B.R,B.N,B.U,B.V,B.S)
b3.r=D.fn.gp(0)
l=b3.G()
d0.drawRect(A.bF(new A.a3(b2,a0,b2+12,a1)),l)
l.delete()
b5=q-36
b2=b5-2
b3=new A.ap(B.R,B.N,B.U,B.V,B.S)
b3.r=D.Fg.gp(0)
l=b3.G()
d0.drawRect(A.bF(new A.a3(b2,a4,b2+4,a5)),l)
l.delete()
b2=b5-30
b6=A.bs(new A.a3(b2,a6,b2+60,a7),B.i6)
b2=new A.ap(B.R,B.N,B.U,B.V,B.S)
b2.r=D.brm.gp(0)
l=b2.G()
d0.drawRRect(A.ek(b6),l)
l.delete()
b2=new A.ap(B.R,B.N,B.U,B.V,B.S)
b2.r=D.AV.gp(0)
b2.b=B.a9
b2.c=2
l=b2.G()
d0.drawRRect(A.ek(b6),l)
l.delete()
b7=a9?"HOME":"STOP "+b0
b8=new A.jQ(new A.eu(b7,c5,c5,B.cQ,c5,c5,c5,c5,c5,c5,D.fgM),B.a3,B.bZ,new A.jA(1),c5,c5,c5,c5,B.bW,c5)
b8.ej()
b2=b8.b
b3=b2.c
b2=b2.a.c
b8.a1(d5,new A.t(b5-b3/2,a4-b2.gbb(b2)/2))
if(a9)b9=c6.r===D.abl
else if(r===c6.w){b2=c6.r
b2=b2===D.W4||b2===D.As
b9=b2}else b9=!1
if(a9){b2=c6.gh3(0).gyP()
c0=(b2==null?c5:b2.c)===D.oa?1:0}else c0=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b2=c6.gqc()
c1=b2.d<b2.c.length&&b9
c2=b9&&c6.r===D.As
b2=c1?C.hpj(c7,r):0
if(c2)b3=c6.ax?1:-0.3
else b3=a9&&b9?1:0.4
b4=b9&&c6.r===D.W4?0.4:0
c3=c2&&c6.ax?0.5:0
if(a9&&b9)a9=new A.t(40,-110+Math.sin(e)*10)
else a9=c1?new A.t(44+Math.sin(f)*8,-66+Math.sin(w)*10):c5
C.RN(d5,new A.t(q+4,d),0,b4,-0.8,-0.2,c5,a9,new A.t(q-200,v),c0,b2,0,0.85,b3,c3,c7+r,-0.3)}d1=c8*0.28
this.bFm(d5,new A.t(d1,a3-6),c7,d3,d6)
if(d3)for(v=c7*1.6,u=d1-90,t=a3-10,r=0;r<7;++r){c4=B.k.F(v+r/7,1)
$.S()
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.r=D.bpu.j(0.5*(1-c4)).gp(0)
l=m.G()
d0.drawCircle(u-c4*70,t-c4*18,6+c4*16,l)
l.delete()}if(c6.ay&&c6.r!==D.W3)for(v=c7*1.2,u=d1+62,t=a3-40,r=0;r<5;++r){c4=B.k.F(v+r/5,1)
m=Math.sin(r+w)
$.S()
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=B.c.j(0.5*(1-c4)).gp(0)
l=k.G()
d0.drawCircle(u+m*5,t-c4*50,4+c4*10,l)
l.delete()}if(c6.r===D.As&&c6.ax){b8=A.fu(c5,c5,c5,c5,A.cS(c5,c5,c5,c5,c5,c5,c5,c5,c5,A.l(c5,c5,B.cI,c5,c5,c5,c5,c5,c5,c5,c5,24,c5,c5,B.u,c5,c5,!0,c5,c5,c5,c5,c5,A7.HM,c5,c5),"BEEP BEEP!"),B.a3,B.bZ,c5,B.dA,B.bW)
b8.ej()
b8.a1(d5,new A.t(d1-b8.b.c/2+40,a2-96-Math.abs(Math.sin(c7*9))*6))}},
c8A(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=A.ar(D.blP,D.bfs,g)
m.toString
if(f){w=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
v=e.a
u=e.b
w.D(new A.aX(v-16,u))
t=u-36
s=u-56
w.D(new A.c3(v-9,t,v-7,s))
w.D(new A.aq(v+7,s))
w.D(new A.c3(v+9,t,v+16,u))
w.D(new A.br())
t=A.I()
t.r=D.Yu.gp(0)
d.aG(w,t)
for(w=v+0,t=u+-54,s=u+-72,r=d.a,u+=-76,q=0;q<4;++q){p=D.cVg[q]
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=D.Yu.gp(0)
o.c=4
o.d=B.bB
n=o.G()
r.drawLine.apply(r,[w,t,v+p*24,s,n])
n.delete()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=m.gp(0)
n=o.G()
r.drawCircle(v+p*26,u,10,n)
n.delete()}}else{w=e.aa(0,D.ehR)
$.S()
v=A.I()
v.r=D.bbK.gp(0)
v.c=4
d.bo(e,w,v)
v=A.bJ(e.aa(0,D.ehS),16,60)
w=A.I()
w.r=m.gp(0)
d.dO(v,w)}},
bFm(a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6?Math.sin(a5*22)*1.6:Math.sin(a5*2)*0.4,a0=this.b,a1=a0.ay&&a0.r!==D.W3?0.045:0,a2=a3.a
J.bl(a2.save())
a2.translate(a4.a,a4.b+d)
a3.ic(0,a1)
for(w=0;w<2;++w){v=D.dkp[w]
u=a0.ay&&a0.r!==D.W3&&v>0
J.bl(a2.save())
a2.translate(v,-4+(u?4:0))
t=u?15:18
$.S()
s=new A.ap(B.R,B.N,B.U,B.V,B.S)
s.r=D.bqa.gp(0)
r=s.G()
a2.drawCircle(0,0,t,r)
r.delete()
a2.rotate(a0.CW/18*180/3.141592653589793,0,0)
t=new A.ap(B.R,B.N,B.U,B.V,B.S)
t.r=D.biO.gp(0)
r=t.G()
a2.drawCircle(0,0,9,r)
r.delete()
for(q=0;q<4;++q){t=q*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.r=B.bm.gp(0)
p.c=2
r=p.G()
a2.drawLine.apply(a2,[0,0,s*9,t*9,r])
r.delete()}a2.restore()}o=A.wh(D.eXJ,B.fB,B.fB,B.io,B.i5)
$.S()
t=A.I()
t.sam(A.jo(D.edX,B.a6L,D.daE,F.a2Y,B.x,e))
a3.az(o,t)
for(n=0;n<20;++n){t=-100+n*10
s=new A.ap(B.R,B.N,B.U,B.V,B.S)
s.r=D.d4Q[B.o.F(n,4)].gp(0)
r=s.G()
a2.drawRect(A.bF(new A.a3(t,-26,t+10,-19)),r)
r.delete()}m=a0.r===D.As&&a0.ax
l=[2,3,4,5]
for(t=a5*10,n=0;n<4;++n){s=-88+n*38
p=s+32
k=new A.a3(s,-66,p,-36)
J.bl(a2.save())
a2.clipRRect(A.ek(A.bs(k,B.mT)),$.nx(),!0)
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.r=D.Xh.gp(0)
r=j.G()
a2.drawRect(A.bF(k),r)
r.delete()
j=l[n]
i=m?1:0.35
h=m?0.5:0
g=a0.ay&&a0.r===D.As?1:0
f=m?Math.max(0,Math.sin(t+n))*6:0
C.RN(a3,new A.t(s+(p-s)/2,-10),f,g,0.5,-0.2,e,e,D.aIY,j,h,0,0.4,i,0,a5,0)
a2.restore()
i=A.bs(k,B.mT)
h=new A.ap(B.R,B.N,B.U,B.V,B.S)
h.r=D.ahM.gp(0)
h.b=B.a9
h.c=2
r=h.G()
a2.drawRRect(A.ek(i),r)
r.delete()}a0=A.bs(D.Tq,B.mT)
t=A.I()
t.r=D.Xh.gp(0)
a3.az(a0,t)
J.bl(a2.save())
a2.clipRRect(A.ek(A.bs(D.Tq,B.mT)),$.nx(),!0)
C.RN(a3,new A.t(D.Tq.gbK().a,-10),0,0,0.7,-0.1,e,e,D.aIY,6,0,0,0.4,0.5,0,a5,0)
a2.restore()
t=A.bs(D.Tq,B.mT)
a0=A.I()
a0.r=D.ahM.gp(0)
a0.b=B.a9
a0.c=2
a3.az(t,a0)
a0=A.I()
a0.r=Aq.Fu.gp(0)
a3.ad(D.eg1,4,a0)
a0=A.I()
a0.r=D.Fg.gp(0)
a3.aO(D.eYS,a0)
for(w=0;w<3;++w){v=D.dkr[w]
a0=A.bs(new A.a3(v,-96,v+28,-79),B.i6)
t=new A.ap(B.R,B.N,B.U,B.V,B.S)
t.r=D.Ft.gp(0)
r=t.G()
a2.drawRRect(A.ek(a0),r)
r.delete()}a2.restore()},
aw(d){return!1}}
C.aAj.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbE())
w.a9$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.beV.prototype={}
C.aAl.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbE())
w.a9$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.beW.prototype={}
C.aAm.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbE())
w.a9$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.beX.prototype={}
C.a5z.prototype={
B(d){var w=null
return new A.a7(1/0,this.c,A.b4(w,w,w,new C.bhs(w),B.ax),w)}}
C.bhs.prototype={
a1(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=d.a,s=e*0.15,r=f/2,q=e/2,p=f*0.8,o=e*0.85,n=x.v,f*=0.2,m=0,l=0;l<w;l+=e){k=D.dip[B.o.F(m,6)]
j=$.S()
i=new A.ap(B.R,B.N,B.U,B.V,B.S)
i.r=k.gp(0)
h=i.G()
t.drawRect(A.bF(new A.a3(l,0,l+v,u)),h)
h.delete()
if(B.o.F(m,3)===0){i=A.a([],n)
g=new A.aF(j.r,B.ag,null,null,i)
j=l+q
i.push(new A.aX(j,f))
i.push(new A.aq(l+o,r))
i.push(new A.aq(j,p))
i.push(new A.aq(l+s,r))
i.push(new A.br())
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.r=B.c.j(0.85).gp(0)
h=j.G()
j=g.gbx().a.snapshot()
t.drawPath((g.e=new A.cj(j)).a,h)
h.delete()}++m}},
aw(d){return!1}}
C.tm.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aJ(w,w,w,w,B.OT,w,w,w,new C.bPh(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a2,w,w,w,D.fe6,w,w,w),1)],v)
B.d.v(u,this.e)
return A.c6(w,D.X4,A.p(w,A.bn(!0,A.x(A.a([D.c_a,new A.D(D.bCg,A.B(u,B.m,w,B.e,B.j,0,w,w),w),A.E(this.d,1)],v),B.m,w,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),B.f,w,w,D.b4h,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.HU.prototype={
B(d){var w=null,v=this.d,u=C.aP9(v),t=C.i6e(v),s=B.c.j(0.08),r=A.m(18),q=A.J(B.cI.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fgy,w,w,w)],x.p)
if(this.e)p.push(D.ekd)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.fQ,w,w,w))
if(t!=null)p.push(new A.D(B.tZ,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.Aa,w,w,w),w))
return A.p(w,A.x(p,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.n),w,w,w,w,B.bF,w,w,w)}}
C.Vp.prototype={
U(){return new C.bk6(A.U(x.N,x.S),B.o.F(Date.now(),1e5))},
cTE(d){return this.f.$1(d)},
ge0(){return this.d}}
C.bk6.prototype={
gSp(){var w=this.d
return w===$?this.d=this.a.c:w},
a_(){this.a2()
this.P8()},
P8(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$P8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bQ2(u.a.d),$async$P8)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.d8K[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bQ1(p,(o===$?u.d=q.c:o).a,r),$async$P8)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.dW4(u,n))
return A.h(null,v)}})
return A.i($async$P8,v)},
u5(d){return this.ckE(d)},
ckE(d){var w=0,v=A.j(x.H),u=this,t
var $async$u5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a4(t,!1).cg(A.e_(new C.dW5(d),!1,null,x.H)),$async$u5)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.P8()
return A.h(null,v)}})
return A.i($async$u5,v)},
gb46(){var w,v,u,t=C.Mn(this.gSp()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u)s.push(B.a.i(w[u].b))
return s},
a1O(d){return this.crP(d)},
crP(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a1O=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.M)(d),++s)r.push(d[s].ag())
w=2
return A.b(u.a.cTE(r),$async$a1O)
case 2:if(u.c!=null)u.m(new C.dW6(u,r))
return A.h(null,v)}})
return A.i($async$a1O,v)},
Or(d){return this.bNY(d)},
bNY(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Or=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.h3s(t.gSp())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.M8("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a4(s,!1).cg(A.e_(new C.dW2(q),!1,null,r)),$async$Or)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.M)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bg(j,new C.dW3(p))
o=s.length
B.d.c8(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a1O(A.d1(s,0,A.dB(2,"count",x.S),r).dm(0)),$async$Or)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Or,v)},
Xf(d,e){return this.bLA(0,e)},
bLA(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$Xf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cg(null,null,!0,null,new C.dW1(e),o,null,!0,!0,x.y),$async$Xf)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.h3s(u.gSp()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.M)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a1O(o),$async$Xf)
case 5:case 3:return A.h(null,v)}})
return A.i($async$Xf,v)},
a9s(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.dVZ(this,j):h
o=o?0.55:1
w=A.ar(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.m(20)
u=A.J(B.aZ,B.r,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cv,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.Um,p,p,p),B.b2],s)
q=A.m(10)
r.push(A.p(p,A.d(i,p,p,p,p,p,p,D.ff_,p,p,p),B.f,p,p,new A.o(B.ig,p,p,q,p,p,B.n),p,p,p,p,B.BM,p,p,p))
return A.aB(p,A.d9(A.p(p,A.x(A.a([A.B(r,B.m,p,B.e,B.j,0,p,p),B.b2,A.d(e,p,2,p,p,p,p,D.fmy,p,p,p),B.cL,A.d(f,p,3,B.a2,p,p,p,D.ffG,p,p,p)],s),B.E,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a9(B.az,B.aE,B.x,w,p,p),B.n),p,p,p,p,B.y9,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a5)},
WJ(d,e,f,g,h,i){return this.a9s(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.Mn(s.gSp()),p=s.gSp(),o=C.aP9(s.e),n=C.h3s(p),m=s.a.e&&J.ad(p.z)<2,l=new C.dW7(s),k=C.hsK(p,1).length,j=C.hsV(p,1).length,i=C.htP(p,1).length,h=B.c.j(0.07),g=A.m(20),f=A.J(B.cI.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,F.a9v,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.fk7,r,r,r),a0=q.b.length,a1=x.p
g=A.p(r,A.B(A.a([e,B.bc,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,F.a9s,r,r,r)],a1),B.E,r,B.e,B.j,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.px,r,r,r),D.fIh],a1),B.m,r,B.e,B.j,0,B.p)],a1),B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(h,r,f,g,r,r,B.n),r,r,r,r,B.bF,r,r,r)
f=s.WJ("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aC,new C.dW8(s,p),l.$1("kahoot"))
h=s.WJ("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lq,new C.dW9(s,p),l.$1("fire"))
a0=s.WJ("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.Bg,new C.dWa(s,p),l.$1("catch"))
j=j!==0?new C.dWd(s,p):r
j=s.a9s("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hc,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.dWe(s,p):r
i=s.a9s("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.kX,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.WJ("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.eV,new C.dWf(s,p),l.$1("journey"))
k=k!==0?new C.dWg(s,p):r
k=A.a([g,B.aM,D.fMc,B.O,A.kX(0.98,A.a([f,h,a0,j,i,e,s.a9s("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.eh,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.WJ("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d1,new C.dWh(s,p),l.$1("school"))],a1),2,12,12,r,B.dR,!0),B.d8,A.B(A.a([D.bDZ,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.ff3,r,r,r)],a1),B.m,r,B.e,B.j,0,r,r),B.O],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.M)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aQ(18,18)
u=new A.ay(B.aZ,1,B.r,-1)
g=B.a.i(v.b)
if(g.length===0)g="Untitled game"
g=A.a([D.ftj,B.bc,new A.bA(1,B.bd,A.x(A.a([new A.y(g,r,B.hB,r,r,r,r,B.a2,r,1,r,r),new A.y(""+v.gaoe(0).length+" questions \xb7 Kahoot style",r,B.Aa,r,r,r,r,r,r,r,r,r)],a1),B.E,r,B.e,B.j,0,B.p),r)],a1)
if(v.gaoe(0).length>=2){f=D.lr.j(0.2)
t=new A.ay(D.lr,1,B.r,-1)
g.push(A.aB(r,A.p(r,A.X(B.ij,D.lr,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bK(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dWi(s,v,p),r,r,r,r,r,r,!1,B.a5))}if(s.a.e){f=B.cI.j(0.2)
t=new A.ay(B.cI,1,B.r,-1)
f=A.aB(r,A.p(r,A.X(B.iV,B.cI,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bK(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dWj(s,v),r,r,r,r,r,r,!1,B.a5)
e=B.f7.j(0.2)
t=new A.ay(B.f7,1,B.r,-1)
B.d.v(g,A.a([B.bn,f,B.bn,A.aB(r,A.p(r,A.X(B.ec,B.f7,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bK(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dWk(s,v),r,r,r,r,r,r,!1,B.a5)],a1))}k.push(A.p(r,new A.cc(B.aN,B.e,B.j,B.m,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bK(u,u,u,u),new A.bk(h,h,h,h),r,r,B.n),r,r,r,B.d3,B.bf,r,r,r))}if(s.a.e){j=m?new C.dWb(s):new C.dWc(a2)
i=A.m(18)
h=A.J(m?B.cI:B.aZ,B.r,2)
g=m?B.cI.j(0.12):B.dt
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aB(r,A.p(r,A.at(A.d(f,r,r,r,r,r,r,A.l(r,r,m?B.cI:B.aB,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.n),r,r,r,r,B.N0,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a5))}else if(i===0)k.push(D.fN8)
k.push(B.aA)
k.push(D.aqe)
return new C.tm("Family Games \xb7 "+p.b,A.ct(k,r,D.byk,r,r,B.ah,!1),B.fz,r)}}
C.a__.prototype={
a5(){return"_KPhase."+this.b}}
C.akX.prototype={
U(){return new C.akY(D.aXD)},
gcZ(){return this.e}}
C.akY.prototype={
q(){var w=this.at
if(w!=null)w.a4(0)
w=this.ax
if(w!=null)w.a4(0)
this.a3()},
h9(d){var w,v=this
v.m(new C.bPC(v))
w=v.at
if(w!=null)w.a4(0)
v.at=A.dk(B.fV,new C.bPD(v))},
aNY(){var w=this,v=w.ax
if(v!=null)v.a4(0)
w.m(new C.bPs(w))
v=w.at
if(v!=null)v.a4(0)
w.at=A.dk(B.fq,new C.bPt(w))},
KE(d){var w
if(this.d!==D.aaP)return
w=this.at
if(w!=null)w.a4(0)
this.b42(d)},
b42(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.k.V(500+500*B.k.E(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bPy(u,v,d))
u=v.ax
if(u!=null)u.a4(0)
v.ax=A.cL(B.rh,v.gks(v))},
cGq(d){var w=this
if(w.d!==D.VC)return
if(w.e+1>=w.a.w.length)w.Y_()
else{w.m(new C.bPz(w))
w.aNY()}},
Y_(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Y_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a4(0)
p=u.x
t=u.a.w.length
s=C.bEd(p,u.w,t)
u.m(new C.bPv(u,s))
w=2
return A.b(C.Bs(u.a.e,s),$async$Y_)
case 2:r=e
t=u.a
w=3
return A.b(C.Bt(t.e,t.f,t.r,u.f),$async$Y_)
case 3:q=e
if(u.c!=null)u.m(new C.bPw(u,r,q))
return A.h(null,v)}})
return A.i($async$Y_,v)},
cHb(){var w,v,u,t,s=this,r=s.a,q=new A.e9()
q.d3(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.bj("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.dY(r,q)
for(r=A.d1(r,0,A.dB(4,"count",x.S),A.T(r).c),u=r.$ti,r=new A.bS(r,r.gL(0),u.k("bS<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.bj(t,B.k.V(w*(0.35+q.ah()*0.5)),!1))}B.d.aW(v,new C.bPA())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.aXD===r){w=A.a([D.fIF,B.W,A.d(s,t,t,t,t,t,t,B.K2,B.L,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.ffb,t,t,t))
w.push(B.aA)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.wV,B.L,t,t))
w.push(B.dX)
w.push(C.ub("Play",u.geU(u),B.cI,B.ij,D.fn))
w=A.at(new A.D(B.ez,A.x(w,B.m,t,B.e,B.Q,0,B.p),t),t,t,t)
break A}if(D.aXE===r){w=A.at(A.d(""+u.z,t,t,t,t,t,t,D.fn1,t,t,t),t,t,t)
break A}if(D.aaP===r||D.VC===r){w=u.cnf()
break A}if(D.aXF===r){w=u.c8B()
break A}w=t}return new C.tm(s,w,B.fz,t)},
cnf(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.VC,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aS6,j,j,j),B.b2],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.JZ,j,j,j))
g.push(B.as)
f=A.m(14)
g.push(A.p(j,A.d(""+k.f,j,j,j,j,j,j,B.iG,j,j,j),B.f,j,j,new A.o(B.bz,j,j,f,j,j,B.n),j,j,j,j,B.FX,j,j,j))
g=A.B(g,B.m,j,B.e,B.j,0,j,j)
f=A.m(6)
w=i?0:B.k.E(k.as/k.a.w[k.e].r,0,1)
f=A.by(f,A.lk(B.bz,j,k.as<5?B.f7:B.cI,9,j,w,j),B.aq)
w=A.m(22)
v=A.J(B.cI,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.l(j,j,e?D.lr:F.n4,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.O,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.fef,B.L,j,j)],h),B.m,j,B.e,B.Q,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fp6,B.L,j,j)
w=A.E(A.p(j,A.at(u,j,j,j),B.f,j,j,new A.o(D.pW,j,v,w,j,j,B.n),j,j,j,j,B.fr,j,j,1/0),3)
v=A.a([],h)
for(u=k.gks(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bPx(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aA9[o]
m=new A.aQ(16,16)
l=new A.ay(i&&t===s.c?B.c:B.K,4,B.r,-1)
r=A.a([new A.y(D.aAn[o],j,D.fga,j,j,j,j,j,j,j,j,j),B.as,new A.bA(1,B.bd,new A.y(r[t],j,D.ff8,j,j,j,j,B.a2,j,3,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.aoP)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bSa)
v.push(A.aB(j,new A.S4(A.p(j,new A.cc(B.aN,B.e,B.j,B.m,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bK(l,l,l,l),new A.bk(m,m,m,m),V.ayB,j,B.n),j,j,j,j,B.fL,j,j,j),p,B.b7,B.a1,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a5))}h=A.a([g,B.am,f,B.ad,w,B.ad,A.E(A.kX(1.45,v,2,10,10,j,B.dR,!1),4)],h)
if(i)h.push(D.ejw)
return new A.D(B.ZX,A.x(h,B.m,j,B.e,B.j,0,B.p),j)},
c8B(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cHb(),m=x.p,l=A.a([D.b83,A.at(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.px,o,o,o),o,o,o),A.at(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.Ur,o,o,o),o,o,o),B.aM],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cI.j(0.25):B.dt
u=new A.aQ(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.cI:B.bz,1,B.r,-1)
q=w<3?D.daV[w]:""+(w+1)
s=s?B.u:B.P
l.push(A.p(o,new A.cc(B.aN,B.e,B.j,B.m,o,B.p,o,0,A.a([new A.a7(34,o,new A.y(q,o,B.mY,o,o,o,o,o,o,o,o,o),o),new A.bA(1,B.bd,new A.y(t.a,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new A.y(""+t.b,o,B.iG,o,o,o,o,o,o,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bK(r,r,r,r),new A.bk(u,u,u,u),o,o,B.n),o,o,o,B.cu,B.eP,o,o,o))}l.push(B.W)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.HU(m,v,p.CW,o))
l.push(B.aM)
l.push(A.at(C.ub("Back to the games",new C.bPu(p),B.cI,B.l4,D.fn),o,o,o))
return A.ct(l,o,B.fr,o,o,B.ah,!1)}}
C.T3.prototype={
U(){return new C.akU(A.U(x.de,x.er))}}
C.akU.prototype={
gCF(){var w,v=this,u=v.d
if(u===$){w=C.h91(v.a.c.ag())
v.d!==$&&A.bG()
v.d=w
u=w}return u},
gl_(d){var w,v,u=this,t=u.e
if(t===$){w=u.gCF().b
v=$.ax()
u.e!==$&&A.bG()
t=u.e=new A.as(new A.bb(w,B.b4,B.aO),v)}return t},
cb6(d){return this.f.c3(0,d,new C.bP2(d))},
a_(){this.a2()
var w=this.gCF().c
if(w.length===0)w.push(C.fWb(null,0,20,""))},
q(){var w,v,u=this.gl_(0)
u.S$=$.ax()
u.P$=0
for(u=this.f,u=new A.dq(u,u.r,u.e);u.C();)for(w=J.aV(u.d);w.C();){v=w.gR(w)
v.S$=$.ax()
v.P$=0}this.a3()},
cGg(){if(this.gCF().c.length>=12)return
this.m(new C.bP3(this))},
jv(d){var w,v,u=this,t=u.gCF()
t.b=B.a.i(u.gl_(0).a.a)
w=t.gaoe(0)
if(t.b.length===0||w.length<2){u.c.K(x.q).f.T(D.f7g)
return}v=t.c
B.d.a8(v)
B.d.v(v,w)
v=u.c
v.toString
A.a4(v,!1).O(t)},
B(d){var w,v,u=this,t=null,s=new C.bPd(),r=x.p,q=A.a([A.bN(!1,D.fy7,t,t,!0,t,t,u.gbnz(u),t,t)],r),p=A.a([D.fMK,B.ad,A.aN(t,B.Z,!1,t,!0,B.t,t,A.aO(),u.gl_(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ak,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ab,t,t,t,t,t,t,t,t,t,t,t,B.fQ,!0,B.a3,t,B.ao,t,t,t,t),B.aA],r)
for(w=0;v=u.gCF().c.length,w<v;++w)B.d.v(p,A.a([new A.fd(new C.bPc(u,w,s),t)],r))
if(v<12)p.push(A.at(C.ub("\uff0b Add a question",u.gcGf(),B.aZ,t,B.c),t,t,t))
return new C.tm("Make your game",A.ct(p,t,D.byh,t,t,B.ah,!1),q,t)}}
C.apV.prototype={
U(){return new C.aDQ(A.a([],x._))},
bt(){return this.r.$0()},
q4(){return this.w.$0()},
ge0(){return this.c}}
C.aDQ.prototype={
a_(){var w,v
this.a2()
this.w1()
w=this.a
v=w.c
if(v.length!==0)C.a7j(v,w.e,w.d.w)},
vS(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h5Y(r,t.e,!1,s.w,new C.dXK(u),null,s),$async$vS)
case 2:w=3
return A.b(u.w1(),$async$vS)
case 3:return A.h(null,v)}})
return A.i($async$vS,v)},
a_Z(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a_Z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h5Y(r,t.e,!0,s.w,new C.dXJ(u),null,s),$async$a_Z)
case 2:w=3
return A.b(u.w1(),$async$a_Z)
case 3:return A.h(null,v)}})
return A.i($async$a_Z,v)},
w1(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$w1=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.AX(q.a.c),$async$w1)
case 7:p=e
if(q.c!=null)n=q.e||J.cK(p)
else n=!1
if(n)q.m(new C.dXM(q,p))
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
return A.b(C.GK(q.a.c).da(0,B.q4),$async$w1)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dXN(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dXO(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$w1,v)},
ON(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$ON=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.K(s).f.T(D.f6R)
w=3
return A.b(C.GK(t.a.c),$async$ON)
case 3:r=e
w=4
return A.b(C.fM0(t.a.c,r),$async$ON)
case 4:q=e
w=5
return A.b(C.GK(t.a.c),$async$ON)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dXI(t,p))
o=t.c.K(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.T(A.b3(null,null,null,q?B.dD:B.cU,null,B.t,null,s,null,B.mD,null,null,null,null,null,null,null,null,null,null))
t.a.q4()
case 1:return A.h(u,v)}})
return A.i($async$ON,v)},
I8(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$I8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ier(l),$async$I8)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hIx(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b_x(q,p.e,l,"Each family tree costs $"+B.k.ac(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$I8)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hpp(r)
o=Date.now()
n=t.a.c
m=new C.kL(l,r.toUpperCase(),p,!0,B.Z,D.CO,new A.V(o,0,!1),0,n,D.u6,B.c8)
w=5
return A.b(C.a2T(n,m),$async$I8)
case 5:w=6
return A.b(t.w1(),$async$I8)
case 6:t.a.bt()
t.a.q4()
if(t.c==null){w=1
break}t.EE(m)
case 1:return A.h(u,v)}})
return A.i($async$I8,v)},
EE(d){return this.cg_(d)},
cg_(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$EE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.AX(u.a.c),$async$EE)
case 2:n=l.pP(k.dG(f,new C.dXL(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hE(m,new C.apP(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$EE)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a2T(u.a.c,o),$async$EE)
case 6:case 5:w=7
return A.b(u.w1(),$async$EE)
case 7:u.a.q4()
return A.h(null,v)}})
return A.i($async$EE,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.tZ(p)
if(r.e)return A.at(A.mS(q,p?B.br:B.bm,q,q,q,q,q,q,q,q),q,q,q)
if(J.cq(r.d)){w=p?B.e2:B.c
v=A.m(15)
u=A.aG(!1,B.a1,!0,q,A.aM(!1,q,!0,A.p(q,D.bPS,B.f,q,q,new A.o(B.aV.j(0.12),q,A.J(B.aV,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cM,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcf3(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ai)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.au,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.FN(A.p(q,A.x(A.a([u,B.aM,t,B.O,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.br:B.bm,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dX,A.bI(D.fPW,r.gaR8(),A.bp(B.bP,q,q,q,q,q,At.a_l,q,new A.b7(A.m(12),B.a0),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bB_,q,q,1/0),15,B.af,1.05,D.aaB,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.au,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b2],v)
if(J.cK(r.d))w.push(A.aJ(q,q,q,q,A.X(B.yY,B.aV,q,q,q,q),q,q,q,new C.dXQ(r),q,q,q,q,"Sync family trees with database",q))
if(J.cK(r.d))w.push(A.aJ(q,q,q,q,A.X(B.yT,B.aV,q,q,q,q),q,q,q,r.gag1(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dj(E.apG,D.fvy,r.gaR8(),A.bp(B.bP,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ad)
u.push(new C.FN(r.cCA(J.q(r.d,s),o),14,B.af,1,D.aaB,q))
B.d.v(w,u)}return A.x(A.a([p,B.aA,A.x(w,B.m,q,B.e,B.j,0,B.p)],v),B.E,q,B.e,B.j,0,B.p)},
cCA(d,e){var w=null,v=e.a,u=v?B.e2:B.c,t=A.m(14),s=A.J((v?B.e7:B.bO).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.es,10)],x.V),q=A.m(14),p=A.p(w,D.bOW,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.au,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gap6(),m=d.d?"":" \xb7 Public",l=d.y===D.kF?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bA,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.br:B.bm,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aG(!1,B.a1,!0,w,A.aM(!1,q,!0,new A.D(B.bF,A.B(A.a([p,B.bc,l,A.X(B.NP,v?B.br:B.bm,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dXP(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ai),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.apP.prototype={
U(){return new C.aDN(A.a([],x._),A.aY(x.N),A.b8g())},
bt(){return this.r.$0()},
ge0(){return this.c}}
C.aDN.prototype={
a_(){var w,v,u=this
u.a2()
u.d=u.a.w
u.acR()
w=u.a
v=w.c
if(v.length!==0)C.a7j(v,w.e,w.d.w)},
q(){var w=this.w
w.S$=$.ax()
w.P$=0
this.a3()},
a2Y(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2Y=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xX("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dXa(r),s,null,!0,!0,x.y),$async$a2Y)
case 3:if(e!==!0||t.c==null){w=1
break}t.JF()
t.m(new C.dXb(t,r))
w=4
return A.b(t.u1(),$async$a2Y)
case 4:t.a.bt()
t.xX(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a2Y,v)},
csq(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aW.x1$.push(new C.dX5(w,f,d,e))},
aTo(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dr()
u.ec(w,v,0,1)
u.jU(q,q,1,1)
this.w.sp(0,u)},
baz(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eK(new Float64Array(16))
q.e5(r)
w=q.CK()
v=B.k.E(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dr()
t.ec(r,u,0,1)
t.jU(v,v,1,1)
t.ec(-r,-u,0,1)
t.iO(0,q)
s.sp(0,t)},
acR(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$acR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.AX(u.a.c),$async$acR)
case 2:t=s.pP(r.dG(e,new C.dWx(u)))
if(t!=null&&u.c!=null)u.m(new C.dWy(u,t))
return A.h(null,v)}})
return A.i($async$acR,v)},
xX(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.T(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
vS(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.h5Y(o,t,!1,r,new C.dWP(u),q.a,s),$async$vS)
case 2:n=A
m=J
w=3
return A.b(C.GK(u.a.c),$async$vS)
case 3:p=n.pP(m.dG(e,new C.dWQ(u)))
if(p!=null&&u.c!=null)u.m(new C.dWR(u,p))
return A.h(null,v)}})
return A.i($async$vS,v)},
JF(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cG(w,0)},
u1(){var w=0,v=A.j(x.H),u=this,t,s
var $async$u1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a2T(t,s),$async$u1)
case 2:return A.h(null,v)}})
return A.i($async$u1,v)},
a1t(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a1t=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.uc(q,t.a.c)){t.xX("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.ifA(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a1t)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.JF()
t.m(new C.dX4(t,r))
w=4
return A.b(t.u1(),$async$a1t)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1t,v)},
b0K(){var w=this.c
w.toString
A.a4(w,!1).cg(A.e_(new C.dWM(this),!1,null,x.H))},
a0c(){return this.cg1()},
cg1(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0c=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.uc(m,t.a.c)){t.xX("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.P(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Z(s,new C.dX1(),A.T(s).k("Z<1>")).gL(0)
s=A.eC([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("cr.E"))
B.d.fc(p)
s=t.c
s.toString
w=3
return A.b(A.bU(B.K,null,new C.dX2(n,t,new C.tZ(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a0c)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.JF()
t.m(new C.dX3(t,o))
w=6
return A.b(t.u1(),$async$a0c)
case 6:case 5:if(o.a&&t.c!=null)t.b0K()
case 1:return A.h(u,v)}})
return A.i($async$a0c,v)},
W6(d){return this.bAH(d)},
bAH(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$W6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.uc(r,t.a.c)){t.xX("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dWl(t,d),r,null,!0,!0,x.P),$async$W6)
case 3:s=f
if(s==null){w=1
break}t.JF()
t.m(new C.dWm(t,s))
w=4
return A.b(t.u1(),$async$W6)
case 4:case 1:return A.h(u,v)}})
return A.i($async$W6,v)},
a3j(d){return this.cEK(d)},
cEK(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a3j=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.cg(null,null,!0,null,new C.dXd(u,d,new C.tZ(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a3j)
case 2:return A.h(null,v)}})
return A.i($async$a3j,v)},
ccj(d){var w=this,v=w.d
v===$&&A.c()
if(C.uc(v,w.a.c))w.Os(d)
else w.a3j(d)},
aiu(d,e){return this.cwn(d,e)},
cwn(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aiu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.dX7(new C.tZ(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$aiu)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aiu,v)},
Id(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Id=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kF?3:5
break
case 3:w=6
return A.b(C.fUr(t.a.c),$async$Id)
case 6:s=e
o=t.a
r=C.hdP(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.aiu(!s,!r),$async$Id)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aPi(o,t.a.c)){t.xX("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lb(o,"Cancel","Remove",q.y===D.kF?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$Id)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aPe(t.a.c,t.d.a),$async$Id)
case 11:t.a.bt()
o=t.c
if(o==null){w=1
break}A.iR(o,null)
case 1:return A.h(u,v)}})
return A.i($async$Id,v)},
aan(d){return this.bLR(d)},
bLR(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$aan=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.uc(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b5(s,new C.dWn(p))){o=A.T(s)
p.a=A.pP(new A.cQ(new A.Z(s,new C.dWo(d),o.k("Z<1>")),new C.dWp(),o.k("cQ<1,n>")))}q=p.a
if(q==null)q=d.d
t.JF()
t.m(new C.dWq(t,s,d,q))
w=3
return A.b(t.u1(),$async$aan)
case 3:t.xX(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$aan,v)},
Os(d){return this.bO1(d)},
bO1(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Os=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.uc(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a3j(d),$async$Os)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.dWu(t,d),r,null,!0,!0,x.P),$async$Os)
case 6:s=f
if(s==null){w=1
break}t.JF()
t.m(new C.dWv(t,s))
w=7
return A.b(t.u1(),$async$Os)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Os,v)},
cCZ(){var w=this,v=w.d
v===$&&A.c()
if(!C.uc(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dXc(w))
w.u1()},
Z0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Z0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aPi(n,t.a.c)){t.xX("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.ax()
r=new A.as(B.at,s)
q=t.d.e
p=A.bq(new A.N(q,t.gcaN(),A.T(q).k("N<1,n>")).c0(0,new C.dWH()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dWI(t,new C.tZ(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$Z0)
case 3:o=e
r.S$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.JF()
t.m(new C.dWJ(t,p))
w=4
return A.b(t.u1(),$async$Z0)
case 4:t.xX("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Z0,v)},
caO(d){return B.a.i(d.toLowerCase())},
ceO(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.uc(v,w)
t=r.d
s=C.i4H(t)
C.iev(q,t.b,u,C.i4G(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tZ(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Z(l,new C.dXk(),A.T(l).k("Z<1>")).gL(0)
l=n?B.c0:B.it
v=A.X(B.a0w,n?B.br:B.bm,o,o,o,18)
u=x.p
v=A.a([new A.D(B.BC,A.aM(!1,o,!0,new A.D(B.hH,A.B(A.a([v,B.bn,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bm,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dXl(p,d),o,o,o,o,o,o,o),o),new A.D(B.no,p.bZ9(m),o)],u)
if(p.d.y===D.kF){t=B.rI.j(0.15)
s=A.m(12)
r=A.J(B.rI.j(0.45),B.r,1)
q=C.GI(p.d,p.a.c)
v.push(new A.D(B.yc,A.p(o,A.B(A.a([D.bUe,B.as,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.au,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iT,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.au,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b2],u)
if(C.uc(p.d,p.a.c)&&p.e.length!==0)u.push(new C.FX("Undo",B.rv,p.gcCY(),m,o,o))
u.push(new C.FX("Family Book",D.bJJ,p.gceN(),m,B.tA,o))
u.push(new C.FX("Family games",B.oh,p.gceZ(),m,B.aC,o))
if(C.uc(p.d,p.a.c))u.push(new C.FX("Display settings",B.Ck,p.gcg0(),m,B.b_,o))
u.push(new C.FX("Sync",B.yT,p.gag1(),m,o,o))
t=p.d
if(t.y===D.kF||C.aPi(t,p.a.c)){t=p.d.y===D.kF?"Remove shared tree":"Delete tree"
u.push(new C.FX(t,B.ec,p.gbM0(),m,B.f7,o))}if(C.uc(p.d,p.a.c))u.push(new C.FX("Add member",B.wg,new C.dXm(p),m,B.bP,o))
v.push(new A.D(Z.ajM,A.B(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.gap6()===0){u=A.at(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bm,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cB(new C.dXn(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?N.a0A:A6.NQ,o,o,o,o,o)
v.push(A.at(A.hr(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dXo(p),o),o,o,o))}return A.c6(o,l,A.bn(!0,A.x(v,B.E,o,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
bZ9(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fI.j(0.35),B.dq,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.X(B.yN,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aG(!1,B.a1,!0,m,A.aM(!1,m,!0,A.p(m,D.bXl,B.f,m,m,new A.o(B.c.j(0.16),m,A.J(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cM,!0,m,m,m,m,m,m,m,m,m,m,m,n.gag1(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ai)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.fh8,m,m,m)
r=r.gap6()
p=n.d.gap6()===1?"member":"members"
o=x.p
p=A.a([s,B.bc,A.E(A.x(A.a([q,B.bA,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a7,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.j,0,B.p),1)],o)
if(C.uc(n.d,n.a.c))p.push(A.aJ(m,m,m,m,D.bUq,m,m,m,n.gcpL(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.jR:B.oe
r=r?"Private":"Public"
r=A.E(n.avy(q,"Privacy",r,n.a.d.w?n.gcBX():m),1)
q=A.E(n.avy(B.yU,"Tree code",n.d.c,new C.dWw(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ad,A.B(A.a([r,B.ac,q,B.ac,A.E(n.avy(D.bLr,"Collaborators",p,n.gc2J()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.kF){s=B.c.j(0.15)
B.d.v(p,A.a([B.O,A.aG(!1,B.a1,!0,A.m(999),A.aM(!1,A.m(999),!0,new A.D(B.h5,A.B(A.a([A.X(B.pa,B.c,m,m,m,14),B.el,A.d("View only",m,m,m,m,m,m,B.aSc,m,m,m)],o),B.m,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.p(m,A.by(u,new A.an(B.a_,m,B.aa,B.t,A.a([t,new A.D(B.G_,A.x(p,B.E,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.c0B,B.n),m,m,m,m,m,m,m,1/0)},
avy(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aG(!1,B.a1,!0,A.m(14),A.aM(!1,A.m(14),!0,new A.D(F.akV,A.x(A.a([A.X(d,B.c,w,w,w,18),B.av,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.v8,A.d(f,w,1,B.a2,w,w,w,G.A8,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.beZ.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gan(r)&&s.c.length===0)return B.bJ
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bf1(s,t),new A.au(w,v))],x.p)
r=r.gdV(r)
B.d.v(u,r.dF(r,new C.dbr(this),x.l))
r=s.c
B.d.v(u,new A.N(r,new C.dbs(this),A.T(r).k("N<1,v>")))
return new A.D(B.u2,new A.a7(w,v,new A.an(B.a_,t,B.aa,B.f,u,t),t),t)}}
C.Kk.prototype={}
C.G0.prototype={}
C.bf0.prototype={
gbj2(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aJn.prototype={}
C.bf1.prototype={
bNF(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.S()
v=A.I()
v.r=B.bC.j(0.75).gp(0)
v.c=2
v.d=B.bB
d.bo(new A.t(n,w),new A.t(m,w),v)
u=(n+m)/2
t=new A.aF(q.r,B.ag,null,null,A.a([],x.v))
q=w+5.5
t.D(new A.aX(u,q))
s=w-1.1
r=w-8.8
t.D(new A.kU(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.D(new A.kU(u+4.95,r,u+9.9,s,u,q))
t.D(new A.br())
q=A.I()
q.r=B.c.gp(0)
d.ad(new A.t(u,w),9,q)
q=A.I()
q.r=B.bC.gp(0)
d.aG(t,q)},
bND(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aW(a0,new C.dbM())
w=f.b
v=w+(B.d.gI(a0).b-w)/2
u=B.d.b5(a0,new C.dbN(f))
t=new A.N(a0,new C.dbO(f),A.T(a0).k("N<1,L>")).c0(0,new C.dbP()).cI(0,1/0,B.vw)
w=f.a
d.bo(f,new A.t(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.M)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.G()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.mN(m)
i=Math.min(10,l/2)
l=$.S()
h=A.a([],q)
g=new A.aF(l.r,B.ag,null,null,h)
h.push(new A.aX(w,v-i))
l=j*i
h.push(new A.c3(w,v,w+l,v))
h.push(new A.aq(n-l,v))
h.push(new A.c3(n,v,n,v+i))
h.push(new A.aq(n,o.b))
k=e.G()
n=g.gbx().a.snapshot()
r.drawPath((g.e=new A.cj(n)).a,k)
k.delete()}},
a1(d,e){var w,v,u,t,s,r,q,p,o
$.S()
w=A.I()
w.r=B.bP.j(0.75).gp(0)
w.c=2.2
w.b=B.a9
w.d=B.bB
w.e=B.dS
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.M)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bND(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.G()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.M)(v),++s){q=v[s]
if(q.c)this.bNF(d,w,q.a,q.b)}},
aw(d){return d.b!==this.b}}
C.biI.prototype={
gc8D(){var w=this.c
if(B.a.i(w.y).length!==0)return D.dsd
switch(w.c.a){case 0:return D.cTZ
case 1:return D.d4K
case 2:return D.dma}},
gc8G(){var w=this.c,v=C.hoI(w.w),u=C.hoI(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gc8D(),p=t.c,o=M.bCN(p.f),n=t.gc8G(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gak(q).j(0.35),B.cH,10)],m),k=r?B.au:B.c,j=A.J(r?B.au:B.c,B.r,2)
if(o!=null)w=A.tq(B.A,s,B.cf,B.bV,!1,s,o,!1,s,s)
else{w=A.a([B.d.gI(q).j(0.18),B.d.gak(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gak(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a9(B.a4,B.a8,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hT(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a9(B.az,B.aE,B.x,q,s,s),B.a6),s,56,s,s,B.Gf,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.J(r?B.au:B.c,B.r,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.frs,s,s,s),B.f,s,s,new A.o(B.cb,s,w,j,s,s,B.n),s,s,s,s,D.bCU,s,s,s),s,s,s,-6,-4,s))}k=r?B.cm:B.c
j=A.m(8)
w=A.J(B.d.gI(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dB,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cm,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bm,s,s,s,s,s,s,s,s,7.5,s,s,B.a7,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aB(s,new A.a7(84,112,A.x(A.a([new A.an(B.a_,s,B.aa,B.f,l,s),B.av,A.p(s,A.x(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,D.b2s,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bD4,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a5)}}
C.be3.prototype={
a1(d,e){var w,v,u,t,s,r,q
$.S()
w=A.I()
v=this.b
u=v?B.c:D.bf5
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.G()
t.drawCircle(r,s,1,q)
q.delete()}},
aw(d){return d.b!==this.b}}
C.bwp.prototype={
B(d){var w=this,v=null,u=new C.fdu(w),t=w.c,s=t?B.cm:B.c,r=A.m(12),q=u.$3(B.hK,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bz:B.ff,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.yR,"Zoom out",w.e)
return A.aG(!1,B.a1,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bz:B.ff,v,v,v,1,v,v,v,v,v,22),u.$3(B.anh,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.dp,v,v,v,B.ai)}}
C.blV.prototype={
B(d){var w=this,v=null,u=B.bP.j(0.15),t=A.J(B.bP,B.r,2),s=w.e,r=x.p
t=A.aB(v,A.p(v,A.x(A.a([A.X(s?N.a0A:A6.NQ,B.bP,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fnG,v,v,v)],r),B.m,v,B.b8,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a5)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.flz,B.L,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.N(s,new C.eP5(w),A.T(s).k("N<1,v>")))
B.d.v(u,t)}return new A.a7(84,v,A.x(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.a_c.prototype={
U(){return new C.aCg()},
bt(){return this.Q.$0()},
ge0(){return this.w}}
C.aCg.prototype={
a_(){var w,v,u,t,s,r=this,q=null
r.a2()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.ax()
r.d!==$&&A.aP()
r.d=new A.as(new A.bb(t,B.b4,B.aO),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aP()
r.e=new A.as(new A.bb(t,B.b4,B.aO),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aP()
r.f=new A.as(new A.bb(t,B.b4,B.aO),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aP()
r.r=new A.as(new A.bb(t,B.b4,B.aO),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aP()
r.w=new A.as(new A.bb(t,B.b4,B.aO),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aP()
r.x=new A.as(new A.bb(t,B.b4,B.aO),s)
t=u?q:v.c
r.y=t==null?D.yq:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.i6f(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
q(){var w,v=this,u=v.d
u===$&&A.c()
w=u.S$=$.ax()
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
v.a3()},
PU(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$PU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hdP(p.y,p.w)
w=3
return A.b(A.lp(t.a.w,B.II),$async$PU)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b_x(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$PU)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hIy(p.y,p.w)
t.a.bt()
case 5:w=7
return A.b(Av.GU(78,800),$async$PU)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.drA(t,q))
case 1:return A.h(u,v)}})
return A.i($async$PU,v)},
c8F(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hU(B.o.u(1000*Date.now()),w,D.yq,null,null,null,"","","","","",1,!1,0)
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
s=v.aEq(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a4(k,!1).O(s)},
a9Z(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a9Z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.drz(r),s,null,!0,!0,x.y),$async$a9Z)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a4(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a9Z,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.tZ(j),h=l.a.e,g=A.T(h).k("Z<1>"),f=A.C(new A.Z(h,new C.drJ(l),g),g.k("K.E"))
h=j?B.e2:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bBm,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.au,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hc(A.aM(!1,k,!0,new A.D(B.m3,A.X(B.ec,B.oY,k,k,k,17),k),B.cM,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbIE(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jH:B.j8
t=M.bCN(l.as)
if(l.as==null)s=A.X(B.p2,j?B.br:B.bm,k,k,k,40)
else s=k
s=A.at(A.aB(k,new A.an(B.a_,k,B.aa,B.t,A.a([A.h7(u,t,s,k,42),A.ao(0,A.h7(B.bP,k,D.bNZ,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc8C(),k,k,k,k,k,k,!1,B.a5),k,k,k)
t=l.d
t===$&&A.c()
t=C.aCi(t,"Full name",B.mH,1,1,i,B.mh)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.W,new C.biG(i,u,new C.drK(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.br:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.buR],q)
o=l.a.e
B.d.v(p,new A.N(o,new C.drL(),A.T(o).k("N<1,eI<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.br:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.buT],q)
B.d.v(q,new A.N(f,new C.drN(),A.T(f).k("N<1,eI<n?>>")))
o=A.x(A.a([t,B.am,new C.adf(i,r,"Who is their parent?",p,new C.drO(l),k,o),B.aA,n,B.am,new C.adf(i,m,"Who is their spouse / partner?",q,new C.drP(l),k,o)],v),B.aj,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aCi(q,"Birth date",D.aml,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aCi(m,"Birth place",B.a0P,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aCi(n,"Date of death (if deceased)",D.aoy,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aCi(p,"Occupation",B.a1X,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.t,w,k),B.aA,s,B.bx,new C.adg(i,"Identity",u,k),B.ad,new C.adg(i,"Family links",o,k),B.ad,new C.adg(i,"Life details",A.x(A.a([q,B.W,m,B.W,n,B.W,p,B.W,C.aCi(r,"Notes",B.l7,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ad,new C.aCh(i,"Child order",l.cgf(l.at),new C.drQ(l),new C.drR(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.h3g(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.drS(l):k
B.d.v(r,A.a([B.W,new C.aCh(i,"Visible in tree",u,w,new C.drT(l),k)],v))}r.push(B.W)
w=j?B.jH:B.j8
u=A.m(14)
t=A.J(j?B.e7:B.bO,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.au,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iI(k,B.bP,k,B.af,k,new C.drU(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.br:B.bm,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,N.ajp,k,k,k))
r.push(B.bx)
w=j?B.aP:B.au
j=j?B.e7:B.bO
r.push(A.B(A.a([A.E(A.dS(B.nH,new C.drM(d),A.dg(k,k,k,k,k,k,k,k,k,w,k,k,B.cj,k,new A.b7(A.m(14),B.a0),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bc,A.E(A.bI(D.f_5,l.gc8E(),A.bp(B.aV,k,k,0,B.c,k,B.cj,k,new A.b7(A.m(14),B.a0),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.av)
return A.em(B.fz,k,B.af,h,new A.a7(420,k,A.cd(A.x(r,B.aj,k,B.e,B.Q,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),k),D.ake,k,B.ajD,new A.b7(g,B.a0),k,k)},
cgf(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.adg.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.br:B.bm,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jH:B.j8,s=A.m(16)
return A.x(A.a([new A.D(D.akF,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.J(v?B.e7:B.bO,B.r,1),s,w,w,B.n),w,w,w,w,B.bf,w,w,1/0)],x.p),B.E,w,B.e,B.j,0,B.p)}}
C.biH.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.e2:B.c,r=A.m(12),q=A.J((t?B.e7:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aP:B.au,u,u,u,u,u,u,u,u,14,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aN(u,B.Z,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bu(u,B.eE,u,B.vS,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.br:B.bm,u,u,u,u,u,u,u,u,u,u,u,B.cw,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bP,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ak,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ab,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a3,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.adf.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.e2:B.c,s=A.m(12),r=A.J((u?B.e7:B.bO).j(0.85),B.r,1),q=A.X(B.rq,u?B.br:B.bm,v,v,v,v),p=A.l(v,v,u?B.aP:B.au,v,v,v,v,v,v,v,v,14,v,v,B.a7,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.e2:B.c
return A.p(v,new A.DP(A.SU(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.br:B.bm,v,v,v,v,v,v,v,v,v,v,v,B.cw,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.l1,v,v,v)}}
C.biG.prototype={
B(d){var w=new C.drV(this)
return A.B(A.a([w.$3(D.w0,"Male",B.Ow),B.ac,w.$3(D.oa,"Female",B.Ok),B.ac,w.$3(D.yq,"Other",B.ns)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aCh.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jH:B.j8,r=A.m(14),q=A.J(t?B.e7:B.bO,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.au,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.br:B.bm,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.j,0,B.p),1),new C.aIp(u,B.yR,w.f,v),B.bn,new C.aIp(u,B.hK,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ey,v,v,v)}}
C.aIp.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bP.j(0.12)
else w=s.c.a?B.e2:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bP
else t=(s.c.a?B.br:B.bm).j(0.4)
return A.aG(!1,B.a1,!0,v,A.aM(!1,u,!0,new A.a7(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.adh.prototype={
bRF(d){switch(d.a){case 0:return B.bP
case 1:return B.bC
case 2:return B.cX}},
bRG(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aXP(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
Ag(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.e2:B.c
u=A.m(12)
t=A.J((w?B.e7:B.bO).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bP,p,p,p,18),B.as],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.br:B.bm,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.av,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.au,p,p,p,p,p,p,p,p,14,p,p,B.P,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.j,0,B.p),1))
return A.p(p,A.B(r,B.E,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cu,B.y8,p,p,1/0)},
aew(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.br:B.bm,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jH:B.j8,s=A.m(16),r=A.J(v?B.e7:B.bO,B.r,1)
return A.x(A.a([new A.D(D.akF,u,w),A.p(w,A.x(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bT,w,w,1/0)],x.p),B.E,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.htC(r,q),o=q.c,n=t.bRF(o),m=M.bCN(q.f),l=t.e.a,k=l?B.e2:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.au,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.kF?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.br:B.bm,s,s,s,s,s,s,s,s,12,s,s,B.a7,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.J(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.at(A.p(s,A.h7(u,m,m==null?A.X(B.p2,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.eA,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.J(n.j(0.45),B.r,1)
v=A.at(A.p(s,A.d(t.bRG(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mE,s,s,s),s,s,s)
u=x.p
i=A.a([t.Ag("Full name",i,B.mH)],u)
if(p>0)i.push(t.Ag("Child order","#"+p,B.Oq))
r=A.a([h,B.av,r,B.aM,l,B.W,v,B.bx,t.aew("Identity",i),B.ad,t.aew("Life details",A.a([t.Ag("Birth date",q.w,D.aml),t.Ag("Birth place",q.x,B.a0P),t.Ag("Date of death",q.y,D.aoy),t.Ag("Occupation",q.z,B.a1X)],u)),B.ad,t.aew("Family links",A.a([t.Ag("1. Parent",t.aXP(q.d),B.Gt),t.Ag("2. Spouse",t.aXP(q.e),B.GH)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ad,t.aew("Notes",A.a([t.Ag("Notes",q,B.l7)],u))],u))
r.push(B.bx)
r.push(A.bI(B.K7,new C.ds4(d),A.bp(B.aV,s,s,s,s,s,B.cj,s,new A.b7(A.m(14),B.a0),s,s,s)))
return A.eR(s,k,new A.cT(B.lU,A.cd(A.x(r,B.aj,s,B.e,B.Q,0,B.p),B.t,s,B.y,s,B.vW,s,s,B.ah),s),s,s,s,B.G2,B.d7,s,new A.b7(j,B.a0),s)}}
C.FX.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.br:B.bm
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.vZ,A.hc(A.aG(!1,B.a1,!0,A.m(8),A.aM(!1,A.m(8),!0,new A.a7(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u),u)}}
C.apS.prototype={
eY(){var w,v,u=this,t=x.N,s=A.U(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a7().ae())
w=u.c
v=A.T(w).k("N<1,a8<n,@>>")
w=A.C(new A.N(w,new C.cbV(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.je(w,new C.cbW(),t,x.fO))
return s}}
C.apT.prototype={
U(){return new C.aDP(A.a([],x.bF))},
gcZ(){return this.c}}
C.aDP.prototype={
a_(){this.a2()
this.JM()},
JM(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$JM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cbZ(t.a.c),$async$JM)
case 3:r=e
w=4
return A.b(C.AX(t.a.c),$async$JM)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.r4(q,new C.dXx(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dXy(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$JM,v)},
yw(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.T(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
Kw(d,e){return this.cFn(d,e)},
cFn(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Kw=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dXC(q,e))
t=3
w=6
return A.b(d.$0(),$async$Kw)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dXD(q))
$.eW.ms()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Kw,v)},
XO(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pe(r,s.c,s.e),$async$XO)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Kw(new C.dXu(t),"Preparing download\u2026"),$async$XO)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XO,v)},
XS(d){return this.bPC(d)},
bPC(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pe(r,s.c,s.e),$async$XS)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Kw(new C.dXv(t,d),"Preparing file\u2026"),$async$XS)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XS,v)},
ago(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ago=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xn.c9().Ml(B.Ro,B.u7,!0),$async$ago)
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
o=A.jw(o,0,null)
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
case 6:u=A.GT()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ago,v)},
Yu(d){return this.c_2(d)},
c_2(d){var w=0,v=A.j(x.H),u=this
var $async$Yu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Kw(new C.dXw(u,d),"Restoring family trees\u2026"),$async$Yu)
case 2:return A.h(null,v)}})
return A.i($async$Yu,v)},
Yt(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Yt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ago(),$async$Yt)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Yu(s),$async$Yt)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yt,v)},
a2l(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2l=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pe(r,s.c,s.e),$async$a2l)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Kw(new C.dXB(t),"Creating QR code\u2026"),$async$a2l)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2l,v)},
a1X(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1X=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.D7()){t.yw("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a4(s,!1).cg(A.e_(new C.dXz(),!0,null,x.N)),$async$a1X)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Yu(r),$async$a1X)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1X,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.B1:B.it,m=o?D.ahR:B.aP,l=o?B.aJ:B.bO,k=o?B.aP:B.au,j=new C.dbQ(n,m,l,k,o?B.bL:B.bm)
l=A.aJ(p,p,p,p,A.X(B.eI,k,p,p,p,20),p,p,p,new C.dXF(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eH(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.dbo(!0,B.jA,B.aQ,B.aQ,q.r?p:q.gcwb(),j,s,"Show restore QR"),1),B.as],u))}s=q.e
r=q.r?p:q.gcsk()
t.push(A.E(C.dbo(!s,B.jc,B.b5,B.bv,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.dbo(!1,B.hL,B.aV,B.bP,q.r?p:q.gbPv(),j,"Photos & books included","Download all trees"),1),B.as],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dbo(!1,R.yW,B.aD,B.aT,q.r?p:q.gc__(),j,s,"Upload backup file"),1))
l=A.a([new C.bf_(v,l,p),B.kO,new C.acx(j,"QR restore",p),B.W,t,B.d8,new C.acx(j,"Backup files",p),B.W,A.B(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kO,new C.acx(j,"One tree",p),B.W],u)
B.d.v(v,J.b6(q.d,new C.dXG(q,j),x.l))
B.d.v(l,v)}l=A.a([A.ct(l,p,B.a_i,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.J(B.aV.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dq,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bn(!0,A.p(p,A.B(A.a([N.aQB,B.bc,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.P,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.BI,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c6(w,n,new A.an(B.a_,p,B.aa,B.t,l,p),p,!1,!1,p,p)}}
C.dbQ.prototype={}
C.bf_.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aV.j(0.32),B.kn,28)],x.V)
t=A.ao(p,A.X(B.ur,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.a_,p,B.aa,B.t,A.a([t,new A.D(B.ab,A.B(A.a([A.p(p,D.bWS,B.f,p,p,new A.o(s,p,A.J(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.ox,A.E(A.x(A.a([D.fww,B.O,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.j,0,B.p),1)],q),B.E,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.c3P,B.n),p,p,p,p,p,p,p,p)}}
C.acx.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ac,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.beY.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aQ.j(0.4):m.c
k=A.J(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aQ.j(0.1),B.cH,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.J(t.j(0.35),B.r,1)
return A.aG(!1,B.a1,!0,q,A.aM(!1,o,!0,A.eJ(A.d9(new A.D(E.ZV,A.x(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.rn,q,q,q),B.ad,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bA,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cw,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ai)}}
C.bf2.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.J(s.c,B.r,1),q=B.aV.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aG(!1,B.a1,!0,v,A.aM(!1,u,!0,A.eJ(new A.D(B.eP,A.B(A.a([A.p(v,D.bW5,B.f,v,v,new A.o(q,v,A.J(B.aV.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.rn,v,v,v),B.bc,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.j,0,B.p),1),A.X(B.hL,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ai)}}
C.a_x.prototype={
U(){return new C.aDO()},
gcZ(){return this.c}}
C.aDO.prototype={
a_(){this.a2()
this.a9w()},
a9w(){var w=0,v=A.j(x.H),u=this,t
var $async$a9w=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b2b(u.a.c,B.Dp),$async$a9w)
case 2:t=e
if(u.c!=null)u.m(new C.dXp(u,t))
return A.h(null,v)}})
return A.i($async$a9w,v)},
ahL(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ahL=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dXq(q))
t=4
p=A.hfv(q.a.d,B.Dp)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.as4(n.e,m,l,B.Dp,p,n.f),$async$ahL)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dXr(q))
q.c.K(x.q).f.T(D.f83)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.K(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d(B.a.ek(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dXs(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahL,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.jr:B.pX,n=p?B.is:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eH(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fME,q,q,q,1,q,!0)
w=A.m(24)
v=A.J(B.aV.j(0.35),B.r,1)
u=A.pW(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.O,u,B.bx,t,B.O,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.al,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b8,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.ab,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ae:B.bs,q,q,q,q,q,q,q,q,q,q,q,B.P,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcs2()
if(u)u=B.JB
else u=A.X(r.e===!0?B.ht:B.amk,q,q,q,q,q)
w=A.a([w,B.ad,v,B.ad,new A.a7(1/0,q,A.et(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ck,q,q,q),t,A.dg(q,q,q,q,q,q,q,q,q,B.aV,q,B.fZ,q,q,q,new A.ay(B.aV.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.hX,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aB:B.al,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.W)
w.push(new A.a7(1/0,q,A.bI(B.Ad,new C.dXt(d),A.bp(B.aV,q,q,q,q,B.fZ,q,q,q,q,q,q)),q))
return A.c6(m,o,new A.D(B.ab,A.x(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.a_y.prototype={
U(){return new C.bk7(A.zv(B.xY,B.nN,B.uA))}}
C.bk7.prototype={
q(){this.d.q()
this.a3()},
B(d){var w=null
return A.c6(A.eH(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fEy,w,w,w,1,w,!0),B.w,A.zu(this.d,B.bV,new C.dXH(this,d)),w,!1,!1,w,w)}}
C.aZ3.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.QT,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lK.prototype={}
C.a6o.prototype={
U(){return new C.bjP(null,null)}}
C.bjP.prototype={
a_(){var w=this,v=null
w.a2()
w.d=A.bm(v,B.rh,v,1,v,w)
w.e=A.bm(v,B.q3,v,1,v,w)
w.a.toString
w.d.cM(0)
w.e.cM(0)},
by(d){var w,v,u=this
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
this.bw8()},
B(d){var w,v,u=this,t=B.d.dN(D.a4K,new C.dJm(u),new C.dJn())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cy0(A.c9(new A.h5(A.a([w,v],x.dS)),new C.dJo(u,t),null),!0)}}
C.bjO.prototype={
a1(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b1a(d,e)
break
case"house":p.m6(d,e,D.d9F)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdC()
$.S()
t=A.I()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ad(new A.t(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mb(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.AZ(d,e,12)
p.y8(d,e,B.kZ,5,14)
break
case"grocery":p.cgZ(d,e)
break
case"calculator":p.cgG(d,e)
break
case"lumber":p.ch6(d,e)
break
case"kitchen":p.ch1(d,e)
break
case"landscape":p.m6(d,e,D.daf)
s=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.D(new A.aX(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.D(new A.c3(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.D(new A.c3(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.D(new A.aq(t,w))
s.D(new A.aq(0,w))
s.D(new A.br())
w=A.I()
w.r=B.eh.j(0.85).gp(0)
d.aG(s,w)
p.AZ(d,e,8)
p.y8(d,e,B.iu,4,18)
break
case"plumbing":p.chf(d,e)
break
case"electrical":p.m6(d,e,D.dlq)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.S()
u=A.I()
u.r=B.c.j(q*0.12).gp(0)
d.aO(new A.a3(0,0,0+e.a,0+e.b),u)
p.mb(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mb(d,e,B.lX.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.AZ(d,e,10)
break
case"store":p.chp(d,e)
break
case"paint_remodel":p.cha(d,e)
break
case"roofing":p.chh(d,e)
break
case"warehouse":p.chw(d,e)
break
case"vehicles":p.chu(d,e)
break
case"farm":p.cgT(d,e)
break
case"restaurant":p.chg(d,e)
break
case"tools":p.chs(d,e)
break
case"wallet":p.chv(d,e)
break
case"concrete":p.cgM(d,e)
break
case"blueprint":p.cgE(d,e)
break
default:p.b1a(d,e)}},
m6(d,e,f){var w,v=new A.a3(0,0,0+e.a,0+e.b)
$.S()
w=A.I()
w.sam(new A.a9(B.az,B.aE,B.x,f,null,null).aB(0,v))
d.aO(v,w)},
mb(d,e,f,g,h){var w,v,u,t,s,r,q=new A.t(e.a/2,e.b/2),p=e.gdC()/2-h
$.S()
w=A.I()
w.b=B.a9
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bX(q,p)
r=w.G()
v.drawArc.apply(v,[A.bF(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
y8(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gdC()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.S()
q=new A.ap(B.R,B.N,B.U,B.V,B.S)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.G()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
AZ(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.F(s*0.17,0.9)
p=B.k.F(s*0.23,0.85)
$.S()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.G()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
b1a(d,e){var w,v=this
v.m6(d,e,D.djO)
w=v.c
v.mb(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mb(d,e,B.bM.j(0.45),-w*3.141592653589793*1.4,22)
v.bNz(d,e,B.hS,w)
v.y8(d,e,B.c.j(0.7),6,8)},
bNz(d,e,f,g){var w,v,u,t,s,r,q,p
$.S()
w=A.I()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.G()
s.drawRect(A.bF(new A.a3(16,q,t,q+3)),p)
p.delete()}},
cgZ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m6(d,e,D.cps)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.F(s,3)
p=Math.sin(r)
o=B.o.ao(s,3)
n=Math.cos(r*0.8)
m=B.o.F(s,2)
$.S()
l=new A.ap(B.R,B.N,B.U,B.V,B.S)
l.r=D.d7T[B.o.F(s,4)].j(0.85).gp(0)
k=l.G()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.mb(d,e,B.c.j(0.35),w,16)
j.y8(d,e,B.iu,5,12)},
cgG(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.m6(d,e,D.cpA)
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
p=A.fu(g,g,g,g,g,B.a3,B.bZ,g,B.dA,B.bW)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dbX[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.saX(0,new A.eu(r,g,g,B.cQ,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.ej()
p.a1(d,new A.t(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ao(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cpC[o]
l=B.kv.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.saX(0,new A.eu(m,g,g,B.cQ,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.ej()
p.a1(d,new A.t(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ao(o,3)*0.38)+Math.sin(n)*6))}h.mb(d,e,B.c.j(0.35),w*1.5,14)
h.mb(d,e,B.eF.j(0.55),-v*3.141592653589793*2,8)
h.mb(d,e,B.xI.j(0.4),r*2.8,22)
h.y8(d,e,B.pL,8,10)
h.AZ(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.F(w+o*0.22,0.9)
$.S()
r=new A.ap(B.R,B.N,B.U,B.V,B.S)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.G()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
ch6(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m6(d,e,V.axU)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bs(new A.a3(20,q,u,q+10),B.hx)
$.S()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=A.ar(B.h1,B.oQ,(r+1)/2).gp(0)
n=o.G()
t.drawRRect(A.ek(p),n)
n.delete()}m.mb(d,e,B.h1.j(0.35),w,15)
m.AZ(d,e,8)},
ch1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m6(d,e,D.d8n)
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
k.delete()}j.mb(d,e,B.bM.j(0.4),-w*3.141592653589793*2.2,11)
j.y8(d,e,B.pI,4,14)},
chf(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.m6(d,e,D.cXU)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.F(s,0.12)
$.S()
n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.b=B.a9
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.G()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.y8(d,e,B.oW,6,12)
l.mb(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
chp(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.m6(d,e,D.cDa)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bs(new A.a3(q,14,q+u,22),B.i6)
$.S()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.r=A.ar(B.fa,B.bM,(r+1)/2).gp(0)
o=p.G()
t.drawRRect(A.ek(q),o)
o.delete()}n.mb(d,e,B.c.j(0.3),w,16)
n.AZ(d,e,8)
n.y8(d,e,B.vB,5,13)},
cha(d,e){var w,v,u,t,s,r,q,p,o
this.m6(d,e,D.d30)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.F(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bs(new A.a3(q,p,q+8,p+(18+r*22)),B.hy)
$.S()
q=new A.ap(B.R,B.N,B.U,B.V,B.S)
q.r=[B.ib,B.ds,B.bM,B.ep][s].j(0.85).gp(0)
o=q.G()
t.drawRRect(A.ek(p),o)
o.delete()}this.mb(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
chh(d,e){var w,v,u,t,s,r,q,p,o
this.m6(d,e,D.d0s)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.F(v+s*0.12,0.75))
q=B.o.F(s,4)*0.22
$.S()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.G()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.y8(d,e,B.cr,7,11)},
chw(d,e){var w,v,u,t,s,r,q,p,o,n
this.m6(d,e,D.cFT)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bs(new A.a3(p,o,p+(t-r*8),o+16),B.hx)
$.S()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.r=A.ar(B.cr,B.aP,(Math.sin(q)+1)/2).gp(0)
n=p.G()
s.drawRRect(A.ek(o),n)
n.delete()}this.mb(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
chu(d,e){var w,v,u,t,s,r,q,p,o
this.m6(d,e,D.dpw)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.F(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.F(s,2)*0.08)
q=A.bs(new A.a3(r,q,r+28,q+8),B.hx)
$.S()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.G()
t.drawRRect(A.ek(q),o)
o.delete()}this.AZ(d,e,6)},
cgT(d,e){var w,v,u,t,s,r,q,p,o,n
this.m6(d,e,D.d6Y)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.S()
s=A.I()
s.r=B.lX.j(0.75).gp(0)
d.ad(new A.t(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=B.hc.j(0.85).gp(0)
o.c=3
n=o.G()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.mb(d,e,B.lX.j(0.35),w,14)},
chg(d,e){var w,v,u,t,s,r,q,p,o=this
o.m6(d,e,D.d9u)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.bJ(new A.t(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.S()
q=new A.ap(B.R,B.N,B.U,B.V,B.S)
q.r=B.c.j(0.22).gp(0)
p=q.G()
t.drawOval(A.bF(r),p)
p.delete()}o.y8(d,e,B.pI,5,16)
o.AZ(d,e,7)},
chs(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m6(d,e,D.dmW)
w=m.c
v=w*3.141592653589793
m.mb(d,e,B.oQ.j(0.55),v*3,10)
m.mb(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.S()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=B.oQ.j(0.8).gp(0)
n=o.G()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
chv(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m6(d,e,D.dqa)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bs(new A.a3(p,o,p+36,o+22),B.i6)
$.S()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.r=A.ar(B.iu,B.lX,q).gp(0)
n=p.G()
s.drawRRect(A.ek(o),n)
n.delete()}m.AZ(d,e,9)
m.mb(d,e,B.c.j(0.4),w*2.2,12)},
cgM(d,e){var w,v,u,t,s,r,q,p,o,n
this.m6(d,e,D.deM)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bX(new A.t(v,u),34)
$.S()
s=A.I()
s.b=B.a9
s.c=5
s.r=B.c.j(0.45).gp(0)
d.e2(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=B.bO.j(0.85).gp(0)
n=o.G()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
cgE(d,e){var w,v,u,t,s,r,q,p
this.m6(d,e,D.daA)
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
u.r=B.ds.j(0.45).gp(0)
d.aO(new A.a3(0,p,0+v,p+6),u)
this.mb(d,e,B.kZ.j(0.45),-t*3.141592653589793*2,11)},
aw(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.asN.prototype={
a_B(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_B=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aQb(),$async$a_B)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a8C(s),$async$a_B)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a_B,v)},
agp(d){return this.cjN(d)},
cjN(d){var w=0,v=A.j(x.H),u=this,t
var $async$agp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.ieF(d),$async$agp)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$agp,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.I?B.jH:B.j8
w=x.p
v=A.a([C.aQA(!0,B.qT,1/0,B.qf,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.c1(new A.bM(B.b3,t,t,new A.D(B.vP,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.P,t,t,!0,t,t,t,t,t,B.ayR,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a9(B.b3,B.b6,B.x,u,t,t),B.n),B.bg))}v.push(A.ao(8,A.B(A.a([A.E(A.dj(D.bPL,D.fsQ,new C.cjR(this,d),A.bp(B.aV,t,t,t,B.c,t,B.jM,t,t,t,t,B.cd)),1),B.ac,A.E(A.et(D.bY6,D.fHG,this.gcaL(),A.dg(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jM,t,t,D.b1_,t,t,t,B.cd)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fF(1.7777777777777777,A.aG(!1,B.a1,!0,B.qT,new A.an(B.a_,t,B.b0,B.t,v,t),B.aq,s,0,t,t,t,t,t,B.ai),t)}}
C.aLJ.prototype={
aV(){this.b6()
this.b3()
this.dH()},
q(){var w=this,v=w.b4$
if(v!=null)v.a6(0,w.gdD())
w.b4$=null
w.a3()}}
C.aTA.prototype={}
C.aTz.prototype={}
C.aRy.prototype={}
C.Za.prototype={
U(){return new C.az1()}}
C.az1.prototype={
a_(){var w,v,u=this
u.a2()
u.a.toString
w=new A.bb("",B.b4,B.aO)
v=$.ax()
u.d!==$&&A.aP()
u.d=new A.as(w,v)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.ax()
w.P$=0
this.a3()},
Km(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.K(x.q).f.T(D.f8y)
return}t=u.c
t.toString
v=u.e
A.a4(t,!1).O(new C.aTA(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.e2:B.c,k=A.m(20),j=A.p(n,D.bXM,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.au,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bA,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.br:B.bm,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.j,0,B.p),1)
j=A.B(A.a([j,B.bc,i,A.aJ(n,n,n,n,A.X(B.cx,m?B.br:B.bm,n,n,n,n),n,n,n,new C.d38(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.br:B.bm,n,n,n,n,n,n,n,n,12,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.br:B.bm,n,n,n,n,n,n,n,n,11,n,n,B.cw,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hfL(new C.d39(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.au,n,n,n,n,n,n,n,n,n,n,n,B.a7,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jH:B.j8
r=A.m(12)
q=A.m(12)
p=m?B.e7:B.bO
t=A.aN(n,B.Z,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bu(n,new A.b5(4,r,B.dk),n,n,n,n,n,n,!0,new A.b5(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d3a(o),n,!1,n,n,!1,n,!0,n,B.ab,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a3,n,A_.JI,n,n,n,n)
u=m?B.aP:B.au
m=m?B.e7:B.bO
return A.eR(n,l,new A.cT(B.lU,A.cd(A.x(A.a([j,B.aM,i,B.av,w,B.O,v,B.aM,t,B.bx,A.B(A.a([A.E(A.dS(B.di,new C.d3b(d),A.dg(n,n,n,n,n,n,n,n,n,u,n,n,B.cj,n,new A.b7(A.m(12),B.a0),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.as,A.E(A.bI(D.fHV,o.ga2H(),A.bp(B.aV,n,n,n,B.c,n,B.cj,n,new A.b7(A.m(12),B.a0),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.E,n,B.e,B.Q,0,B.p),B.t,n,B.y,n,B.BJ,n,n,B.ah),n),n,n,n,A5.BK,B.d7,n,new A.b7(k,B.a0),n)}}
C.Z9.prototype={
U(){return new C.az0()}}
C.az0.prototype={
a_(){this.a2()
var w=$.ax()
this.d!==$&&A.aP()
this.d=new A.as(B.at,w)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.ax()
w.P$=0
this.a3()},
Km(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.K(x.q).f.T(D.f6b)
return}v=this.c
v.toString
A.a4(v,!1).O(new C.aTz(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.e2:B.c,n=A.m(20),m=A.p(q,D.bUj,B.f,q,q,new A.o(B.bP.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.au,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bA,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.br:B.bm,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.j,0,B.p),1)
m=A.B(A.a([m,B.bc,l,A.aJ(q,q,q,q,A.X(B.cx,p?B.br:B.bm,q,q,q,q),q,q,q,new C.d34(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.m(12)
v=A.J(B.aV.j(0.25),B.r,1)
u=A.X(B.am6,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.as,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.au,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bF,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.au,q,q,q,q,q,q,q,q,q,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jH:B.j8
t=A.m(12)
s=A.m(12)
r=p?B.e7:B.bO
v=A.aN(q,B.Z,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bu(q,new A.b5(4,t,B.dk),q,q,q,q,q,q,!0,new A.b5(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d35(this),q,!1,q,q,!1,q,!0,q,B.ab,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a3,q,B.kP,q,q,q,q)
w=p?B.aP:B.au
p=p?B.e7:B.bO
return A.eR(q,o,new A.cT(B.lU,A.cd(A.x(A.a([m,B.aM,l,B.aA,v,B.bx,A.B(A.a([A.E(A.dS(B.di,new C.d36(d),A.dg(q,q,q,q,q,q,q,q,q,w,q,q,B.cj,q,new A.b7(A.m(12),B.a0),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.as,A.E(A.bI(D.fOU,this.ga2H(),A.bp(B.bP,q,q,q,B.c,q,B.cj,q,new A.b7(A.m(12),B.a0),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.E,q,B.e,B.Q,0,B.p),B.t,q,B.y,q,B.BJ,q,q,B.ah),q),q,q,q,A5.BK,B.d7,q,new A.b7(n,B.a0),q)}}
C.YH.prototype={
U(){return new C.axI()}}
C.axI.prototype={
a_(){var w,v=this
v.a2()
w=$.ax()
v.d!==$&&A.aP()
v.d=new A.as(B.at,w)
v.e!==$&&A.aP()
v.e=new A.as(new A.bb("1",B.b4,B.aO),w)
v.f!==$&&A.aP()
v.f=new A.as(B.at,w)
v.r!==$&&A.aP()
v.r=new A.as(B.at,w)},
q(){var w,v=this,u=v.d
u===$&&A.c()
w=u.S$=$.ax()
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
v.a3()},
gJH(){var w,v=this.e
v===$&&A.c()
w=A.d7(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gajy(){var w=this.f
w===$&&A.c()
w=A.d7(B.a.i(w.a.a))
return w==null?0:w},
gb3Y(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aOP(d){var w,v=B.k.E(this.gJH()+d,0.25,999999),u=B.k.jf(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.ac(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.saX(0,u)
this.m(new C.cBA())},
ayb(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jH:B.j8,s=A.m(14),r=A.m(14)
u=u?B.e7:B.bO
return A.bu(w,new A.b5(4,s,B.dk),w,B.bF,w,w,w,w,!0,new A.b5(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b5(4,A.m(14),B.ac6),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
caM(d,e,f){return this.ayb(d,e,f,null)},
Km(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gajy()<=0){s.c.K(x.q).f.T(D.faq)
return}r=s.c
r.toString
v=s.gJH()
u=s.gajy()
t=s.gb3Y()
A.a4(r,!1).O(new C.aRy(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tZ(n),l=n?B.e2:B.c,k=A.m(24),j=x.O,i=A.a([B.aV.j(0.22),B.bP.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bNG,B.f,o,o,new A.o(o,o,A.J(B.aV.j(0.35),B.r,1),h,o,new A.a9(B.a4,B.a8,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.au,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bA,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bm,o,o,o,o,o,o,o,o,12,o,o,B.cw,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.j,0,B.p),1)
i=A.B(A.a([i,B.bc,h,A.aJ(o,o,o,o,A.X(B.cx,n?B.br:B.bm,o,o,o,o),o,o,o,new C.cBG(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.au,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aN(o,B.Z,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.ayb(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Ov),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ab,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a3,o,A_.JI,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bm,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jH:B.j8
t=A.m(14)
s=A.J(n?B.e7:B.bO,B.r,1)
r=A.aJ(o,o,o,o,A.X(B.yR,n?B.aP:B.au,o,o,o,20),o,o,o,new C.cBH(p),o,o,o,o,o,B.cd)
q=p.e
q===$&&A.c()
q=A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.bZE,B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.e0,o,o,o,1,o,o,!1,"\u2022",o,new C.cBI(p),o,o,o,!1,o,o,!1,o,!0,o,B.ab,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.au,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.ao,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a7(52,o,q,o),A.aJ(o,o,o,o,A.X(B.hK,n?B.aP:B.au,o,o,o,20),o,o,o,new C.cBJ(p),o,o,o,o,o,B.cd)],w),B.m,o,B.e,B.Q,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.au,o,o,o,o,o,o,o,o,16,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.as,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.ayb(m,"Amount","0.00",B.hY),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.e0,o,o,o,1,o,o,!1,"\u2022",o,new C.cBK(p),o,o,o,!1,o,o,!1,o,!0,o,B.ab,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a3,o,B.ao,o,o,o,o),1)],w),B.E,o,B.e,B.j,0,o,o)
t=x.gv
u=A.C(new A.N(D.d3v,new C.cBL(p,m),t),t.k("ak.E"))
i=A.a([i,B.bx,v,B.aA,h,B.O,s,B.ad,A.bW(B.bE,u,B.bq,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.au,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.W,A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.caM(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cBM(p),o,o,o,!1,o,o,!1,o,!0,o,B.ab,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a3,o,B.kP,o,o,o,o)],w))}i.push(B.aM)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bP.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.J(B.aV.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bm,o,o,o,o,o,o,o,o,11,o,o,B.P,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJH()===B.k.jf(p.gJH())?B.k.N(p.gJH()):p.gJH()
s=p.gb3Y()
r=A.AZ(p.gajy())
i.push(A.p(o,A.B(A.a([A.E(A.x(A.a([u,B.av,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.br:B.bm,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.j,0,B.p),1),C.bDA(p.gJH()*p.gajy(),B.b_,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a9(B.a4,B.a8,B.x,j,o,o),B.n),o,o,o,o,B.jb,o,o,o))
i.push(B.bx)
j=A.m(14)
h=n?B.e7:B.bO
h=A.dg(o,o,o,o,o,o,o,o,o,o,o,o,B.cj,o,new A.b7(j,B.a0),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.B(A.a([A.E(A.dS(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.au,o,o,o,o,o,o,o,o,o,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cBN(d),h),1),B.as,A.E(A.dj(D.apz,D.fKQ,p.ga2H(),A.bp(B.aV,o,o,0,B.c,o,B.cj,o,new A.b7(A.m(14),B.a0),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eR(o,l,new A.cT(A4.acw,A.cd(A.x(i,B.aj,o,B.e,B.Q,0,B.p),B.t,o,B.y,o,Ah.rm,o,o,B.ah),o),o,o,o,B.Ng,B.d7,o,new A.b7(k,B.a0),o)}}
C.a1j.prototype={
U(){return new C.bwf()}}
C.bwf.prototype={
a_(){var w,v,u=this
u.a2()
w=u.a.e
v=$.ax()
u.d!==$&&A.aP()
u.d=new A.as(new A.bb(w,B.b4,B.aO),v)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.ax()
w.P$=0
this.a3()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=r?B.e2:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aP:B.au,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aP:B.au,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jH:B.j8
v=A.aN(s,B.Z,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bu(s,new A.b5(4,A.m(12),B.dk),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fcO(t,d),s,!1,s,s,!1,s,!0,s,B.ab,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a3,s,B.ao,s,s,s,s)
u=A.E(A.dS(B.di,new C.fcP(d),s),1)
r=A.bp(B.bP,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eR(s,q,new A.D(B.BJ,A.x(A.a([o,B.aA,v,B.aM,A.B(A.a([u,B.as,A.E(A.bI(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.fcQ(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.d7,s,new A.b7(p,B.a0),s)}}
C.abC.prototype={
a5(){return"WorksheetFrameStyle."+this.b}}
C.FN.prototype={
U(){return new C.bwd(null,null)}}
C.bwd.prototype={
a_(){var w,v=this
v.a2()
w=A.bm(null,D.bvq,null,1,null,v)
w.cM(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bym()},
gbzS(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bP,B.b_],x.O)
case 2:return A.a([B.bt,B.aV,B.b_],x.O)
case 3:return A.a([B.aQ,B.cb,B.k8],x.O)
case 4:return A.a([B.iM,B.bP,B.fe],x.O)
case 0:return A.a([B.aV,B.bP,B.b_],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.ex(A.c9(v,new C.fcM(this,new C.tZ(w.ax.a===B.I)),null),null)}}
C.axB.prototype={
U(){return new C.bwe(null,null)}}
C.bwe.prototype={
a_(){var w,v=this
v.a2()
w=A.bm(null,B.ni,null,1,null,v)
w.cM(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.byn()},
B(d){var w=this.d
w===$&&A.c()
return A.c9(w,new C.fcN(this),null)}}
C.bwc.prototype={
a1(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bs(new A.a3(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aQ(w,w))
u=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
u.D(new A.iN(v))
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
d.aG(u,w)
w=A.xl(u)
t=A.a([],x.U)
w=new A.tl(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b8(A.ju(y.B));--r
q=new A.Bq(w,r)
w.ij()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aSg(d,q,r,o,0,0.2,4.2,0.92)
p.aSg(d,q,r,s,0.52,0.11,3.2,0.58)}},
aSg(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.F(g+h,1)*f,s=A.hBG(e.a.a,e,t,t+f*i,!0),r=A.bBW(s.gbx().a.getBounds())
$.S()
w=A.I()
w.b=B.a9
w.c=j
w.d=B.bB
w.f=!0
v=this.f
u=k*this.e
w.sam(new A.a9(B.a4,B.a8,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.HI,null).aB(0,r))
d.aG(s,w)},
aw(d){return d.b!==this.b||d.d!==this.d}}
C.aNK.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbE())
w.a9$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.aNL.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbE())
w.a9$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.tZ.prototype={}
C.asM.prototype={
U(){return new C.aFg()},
ge0(){return this.c}}
C.aFg.prototype={
a_(){var w=this
w.a2()
w.d=w.a.d
w.ahe()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Lv(w,v)
this.a3()},
ahe(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ahe=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bC3(t.c,t.d.a),$async$ahe)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eMf(u,s))
return A.h(null,v)}})
return A.i($async$ahe,v)},
Qj(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Qj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eM6(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Lv(t,s),$async$Qj)
case 2:if(u.c!=null)u.m(new C.eM7(u))
return A.h(null,v)}})
return A.i($async$Qj,v)},
QQ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$QQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.eMd(t,new C.tZ(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$QQ)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a8C(q),$async$QQ)
case 6:case 5:t.m(new C.eMe(t,r))
w=7
return A.b(t.Qj(),$async$QQ)
case 7:case 1:return A.h(u,v)}})
return A.i($async$QQ,v)},
W0(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$W0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.ieq(r),$async$W0)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eM1(t,new C.r9(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Qj(),$async$W0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$W0,v)},
cfQ(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hty(t,new C.eM5(u),w,v)},
abi(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bK(new A.ay(v,2.5,B.r,-1),B.a0,B.a0,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b0M,w,w,B.n),w,22,w,w,w,w,w,22)},
aam(d){return this.bLO(d)},
bLO(d){var w=0,v=A.j(x.H),u=this
var $async$aam=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eM4(u,d))
w=2
return A.b(u.Qj(),$async$aam)
case 2:return A.h(null,v)}})
return A.i($async$aam,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.c0:B.it,d=A.m(8),a0=A.X(Y.a0x,f?B.br:B.bm,g,g,g,16),a1=x.p
a0=A.aM(!1,d,!0,new A.D(B.G9,A.B(A.a([a0,B.bn,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.br:B.bm,g,g,g,g,g,g,g,g,g,g,g,B.a7,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eMg(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.a_,g,B.b0,B.t,A.a([A.by(A.m(22),C.aQA(!0,A.m(22),1/0,B.qf,g,d,1/0),B.aq),A.ao(10,A.dj(D.bSk,D.fNc,h.gb1V(),A.bp(B.w.j(0.45),g,g,g,B.c,g,B.hg,g,new A.b7(A.m(12),B.a0),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aV.j(f?0.5:0.38),B.eZ,22),new A.ac(-4,B.G,B.bP.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.J(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.by(s,new A.an(B.a_,g,B.b0,B.t,A.a([C.aQA(!0,A.m(16),1/0,B.O0,g,r.c,1/0),A.c1(g,new A.o(g,g,g,g,g,new A.a9(B.b3,B.b6,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.bg),A.ao(g,h.abi(!0),g,g,8,g,8,g),A.ao(g,A.cyL(h.abi(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cyL(h.abi(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cyL(h.abi(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dj(D.bOg,D.fGC,h.gb1V(),A.bp(B.w.j(0.45),g,g,g,B.c,g,B.hg,g,new A.b7(A.m(12),B.a0),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.c0l,B.n),g,g,g,g,B.m3,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.au,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.bbq,B.nW,B.h3],u):A.a([B.b_,B.aV,B.bP],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aV.j(f?0.45:0.35),B.eZ,24)],t)
r=A.m(22)
p=A.ao(g,A.X(B.jP,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.J(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h4,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.aA,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bDA(h.d.gx8(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.O,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cw,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.J(B.he.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aQ.j(0.28),B.cH,14)],t)
j=B.aQ.j(0.22)
i=A.m(10)
u=A.p(g,A.by(r,new A.an(B.a_,g,B.aa,B.t,A.a([p,new A.D(D.bA7,A.B(A.a([o,B.as,A.aG(!1,B.a1,!0,g,A.aM(!1,n,!0,A.eJ(new A.D(U.vU,A.x(A.a([A.p(g,D.apa,B.f,g,g,new A.o(j,g,A.J(B.aQ.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cn,g,g,g),B.fO,D.fvB],a1),B.m,g,B.e,B.Q,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcfP(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ai)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a9(B.az,B.aE,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fF(1.7777777777777777,d,g),B.aM,w,B.O,u,B.bx,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.au,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b2,A.dj(As.a2j,D.ftu,h.gbAk(),A.bp(B.aV,g,g,g,B.c,g,B.iT,g,new A.b7(A.m(12),B.a0),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ad],a1)
w=h.d.d
if(w.length===0){w=f?B.e2:B.c
v=A.m(14)
u=A.J(f?B.e7:B.bO,B.r,1)
t=A.X(B.a0S,f?B.br:B.bm,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.au,g,g,g,g,g,g,g,g,g,g,g,B.P,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.W,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.br:B.bm,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.qb,g,g,1/0))}else B.d.v(d,new A.N(w,new C.eMh(h,new C.tZ(f)),A.T(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.Bx,A.at(A.mS(g,f?B.br:B.bm,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c6(g,e,A.bn(!0,A.x(A.a([new A.D(B.BC,a0,g),A.E(A.cd(A.x(d,B.E,g,B.e,B.j,0,B.p),B.t,g,B.y,g,E.yf,g,g,B.ah),1)],a1),B.E,g,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bE_(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.e2:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cH,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.b3x,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.X(s?B.i_:B.hh,B.b_,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bJ
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aP:B.au,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcVI()
v=A.AZ(d.d)
B.d.v(t,A.a([B.av,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.br:B.bm,u,u,u,u,u,u,u,u,12,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.b8,B.Q,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bP.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bDA(d.c*d.d,B.b_,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a9(B.a4,B.a8,B.x,k,u,u),B.n),u,u,u,u,B.hg,u,u,u)
w=x.p
return A.p(u,A.by(n,new A.Ee(A.B(A.a([m,A.E(new A.D(B.aji,A.B(A.a([l,B.bc,t,B.ac,k,A.aJ(u,u,u,u,A.X(B.cx,(r?B.br:B.bm).j(0.75),u,u,u,20),u,u,u,new C.eM2(this,d),u,u,u,u,u,B.cd)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.aj,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.b2o,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d3,u,u,u,u)}}
C.adC.prototype={
Ez(d){return this.bNb(d)},
bNb(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ez=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pe(d,o,!1),$async$Ez)
case 3:if(!f||d.e==null){w=1
break}A.a4(d,!1).O(null)
w=4
return A.b(A.bP(Ag.Bv,null,x.H),$async$Ez)
case 4:s=t.d
w=5
return A.b(C.fKT(!0,o,s),$async$Ez)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.GH(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$Ez)
case 6:p=f
w=7
return A.b(A.pd(o,!1),$async$Ez)
case 7:if(d.e==null){w=1
break}d.K(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Ez,v)},
a_D(d){return this.cwc(d)},
cwc(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_D=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pe(d,s,!1),$async$a_D)
case 3:if(!f||d.e==null){w=1
break}A.a4(d,!1).O(null)
A.hE(d,new C.asG(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pd(s,!1),$async$a_D)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_D,v)},
Qk(d){return this.csf(d)},
csf(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Qk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a4(d,!1).O(null)
w=3
return A.b(A.hE(d,D.aIn,!0,"NgmyWorksheetProjectScan",x.N),$async$Qk)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bDB(s),$async$Qk)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.K(x.q).f.T(D.f9y)
w=1
break}q=C.h5B(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dU(p,x.H),$async$Qk)
case 5:if(d.e==null){w=1
break}d.K(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Qk,v)},
a_E(d){return this.cEg(d)},
cEg(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_E=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a4(d,!1).O(null)
w=3
return A.b(C.bD7(),$async$a_E)
case 3:s=f
if(s==null){w=1
break}r=C.h5B(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dU(q,x.H),$async$a_E)
case 4:if(d.e==null){w=1
break}d.K(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_E,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.tZ(u),s=w.d.d.length,r=u?B.e2:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kn,36)],x.V),o=x.p
return A.bn(!0,new A.D(B.vT,A.p(v,A.x(A.a([w.cuM(d,t,s),new A.D(D.bzw,A.x(A.a([w.b4U(t,"QR restore"),B.W,A.B(A.a([w.b_T(t,!0,B.jA,B.aQ,B.aQ,new C.eMj(w,d),"Show to scan","QR code"),B.as,w.ayc(t,B.jc,B.b5,B.bv,new C.eMk(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d8,w.b4U(t,"Backup files"),B.W,A.B(A.a([w.ayc(t,B.hL,B.aV,B.bP,new C.eMl(w,d),"Full copy","Backup file"),B.as,w.ayc(t,R.yW,B.aD,B.aT,new C.eMm(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.E,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.Q,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
cuM(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.f5,B.cO,B.fI],k):A.a([B.b_,B.aV,B.bP],k)
w=A.ao(l,A.X(B.ur,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kD,l,l,l,36),l,l,l)
u=A.m(14)
t=A.J(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cH,12)],x.V)
r=this.d
s=A.p(l,C.aQA(!0,A.m(13),64,D.bJC,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aTf,l,l,l)
r=C.bDA(r.gx8(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.J(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.a_,l,B.aa,B.t,A.a([w,new A.D(D.bzU,A.x(A.a([v,A.B(A.a([s,B.eu,A.E(A.x(A.a([u,B.av,t,B.O,A.B(A.a([r,B.ac,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fM,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.E,l,B.e,B.j,0,B.p),1),A.aJ(l,l,l,l,A.X(B.cx,B.c.j(0.85),l,l,l,l),l,l,l,new C.eMi(d),l,l,l,A.nH(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aQq,l,l,l,l),l,l)],m),B.E,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.az,B.aE,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b4U(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ac,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.br:B.bm,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
b_T(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.ahR:B.aP
if(e)w=B.aQ.j(o?0.45:0.35)
else{w=o?B.e7:B.bO
w=w.j(o?0.8:1)}w=A.J(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aQ.j(0.12),B.cH,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.J(h.j(0.35),B.r,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.rn,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.au,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aG(!1,B.a1,!0,r,A.aM(!1,q,!0,A.eJ(new A.D(E.ZV,A.x(A.a([t,B.ad,u,B.bA,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.br:B.bm,r,r,r,r,r,r,r,r,11,r,r,B.cw,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ai),1)},
ayc(d,e,f,g,h,i,j){return this.b_T(d,!1,e,f,g,h,i,j)}}
C.asG.prototype={
U(){return new C.blq()}}
C.blq.prototype={
a_(){this.a2()
this.af9()},
af9(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$af9=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bDC(p.c,p.d),$async$af9)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eLX(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eLY(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$af9,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.B1:B.it,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aJ(h,h,h,h,A.X(B.eI,g?B.ae:B.al,h,h,h,18),h,h,h,new C.eLZ(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.A2],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.f5,B.cO,B.fI],s):A.a([B.b_,B.aV,B.bP],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aV.j(g?0.4:0.3),B.eZ,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.de,B.L,h,h)
p=C.bDA(p.gx8(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.am,A.B(A.a([p,B.ac,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fM,h,h,h)],u),B.m,h,B.b8,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a9(B.az,B.aE,B.x,s,h,h),B.n),h,h,h,h,E.a_h,h,h,1/0)
t=g?D.bmc:B.c
q=A.m(24)
p=A.J(w?B.aQ.j(0.4):B.aV.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dq,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.Uk,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.ejA)
else{m=A.m(20)
l=A.J(B.aL,B.r,1)
o.push(A.p(h,A.pW(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bR,h,h,h))}}o.push(B.aM)
n=w?B.aQ:B.aV
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.J((w?B.aQ:B.aV).j(0.35),B.r,1)
k=w?B.Og:B.OK
k=A.X(k,w?B.aQ:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.as,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ae:B.al,h,h,h,h,h,h,h,h,12,h,h,B.a7,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iT,h,h,h))
return A.c6(h,f,A.bn(!0,A.x(A.a([new A.D(Ad.Ns,e,h),A.E(A.cd(A.x(A.a([s,B.aM,A.p(h,A.x(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.u5,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.t,h,B.y,h,E.akq,h,h,B.ah),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.asL.prototype={
U(){return new C.aFf(A.zv(B.MI,B.nN,B.uA))}}
C.aFf.prototype={
q(){this.d.q()
this.a3()},
aMP(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iR(w,d)},
cbE(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
s=C.ici(t)
if(s!=null){this.aMP(s)
return}r=C.hkj(t)
if(r!=null)q=A.cU(r,p,0)
else q=!1
if(q){this.aMP(B.a.i(B.a.b7(r,B.a.cu(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eH(A.a([A.aJ(t,t,t,t,A.X(u.f?B.ug:Aa.Om,t,t,t,t,t),t,t,t,new C.eM0(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.B1,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fGw,t,t,t,1,t,!0),q=A.zu(u.d,B.bV,u.gcbD()),p=A.m(28)
p=A.at(A.p(t,t,B.f,t,t,new A.o(t,t,A.J(B.aV,B.r,3),p,A.a([new A.ac(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.c6(r,B.w,new A.an(B.a_,t,B.b0,B.t,A.a([q,p,A.ao(32,A.p(t,D.fFi,B.f,t,t,new A.o(w,t,A.J(B.aV.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jb,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aK5.prototype={
a5(){return"_WorksheetTab."+this.b}}
C.Ol.prototype={
U(){return new C.aFh(D.abo,A.a([],x.D))},
bt(){return this.r.$0()},
ge0(){return this.c}}
C.aFh.prototype={
gcC8(){return J.bEL(this.e,0,new C.eMJ())},
a_(){this.a2()
$.aW.bZ$.push(this)
this.vR()},
q(){$.aW.hO(this)
this.a3()},
jb(d){if(d===B.fG)this.vR()},
vR(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vR=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.D6(q.a.c).da(0,B.ke),$async$vR)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eMF(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eMG(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vR,v)},
I7(d){return this.bJW(d)},
bJV(){return this.I7(null)},
bJW(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$I7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ies(l,d),$async$I7)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.ls(l,r,q,D.deZ,new A.V(Date.now(),0,!1))
w=4
return A.b(C.Lv(t.a.c,p),$async$I7)
case 4:o=f
w=5
return A.b(t.vR(),$async$I7)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.K(x.q).f.T(D.f6F)
w=1
break}n=J.aV(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gR(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.K(q).f.T(D.f8s)
else n.K(q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.ED(m)
case 1:return A.h(u,v)}})
return A.i($async$I7,v)},
ED(d){return this.cfB(d)},
cfB(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$ED=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hE(s,new C.asM(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$ED)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Lv(u.a.c,t),$async$ED)
case 5:case 4:w=6
return A.b(u.vR(),$async$ED)
case 6:return A.h(null,v)}})
return A.i($async$ED,v)},
vD(d){return this.c_4(d)},
c_4(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bD7(),$async$vD)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hE(r,D.aIn,!0,"NgmyWorksheetProjectScan",x.N),$async$vD)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bDB(q),$async$vD)
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
r.T(A.b3(null,null,null,null,null,B.t,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.h5B(s)
w=15
return A.b(C.Lv(t.a.c,p),$async$vD)
case 15:o=f
w=16
return A.b(t.vR(),$async$vD)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.K(x.q).f.T(D.f8x)
w=1
break}r.K(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.ED(p)
case 1:return A.h(u,v)}})
return A.i($async$vD,v)},
O4(d){return this.bIB(d)},
bIB(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$O4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cg(null,null,!0,null,new C.eMq(d),s,null,!0,!0,x.y),$async$O4)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oO(t.a.c,A.a([],x.D)),$async$O4)
case 6:w=7
return A.b(t.vR(),$async$O4)
case 7:s=t.c
if(s==null){w=1
break}s.K(x.q).f.T(D.f6K)
case 4:case 1:return A.h(u,v)}})
return A.i($async$O4,v)},
cfO(d){var w=this.c
w.toString
A.bU(B.K,null,new C.eMz(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b5v(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jH
else w=B.c
v=A.m(16)
u=A.J(p?B.e7:B.bO,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bT,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.au,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aG(!1,B.a1,!0,r,A.aM(!1,q,!0,A.p(r,A.x(A.a([s,B.ad,t,B.bA,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.br:B.bm,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.vS,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ai)},
a07(d,e){return this.cfC(d,e)},
cfC(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a07=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(B.K,null,new C.eMu(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a07)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hty(r,new C.eMv(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.O6(d,e),$async$a07)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a07,v)},
b2w(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bT,u,u,u)
if(d)t=B.aw
else t=h.a?B.aP:B.au
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.br:B.bm,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.j,0,B.p),1)
return A.aG(!1,B.a1,!0,u,A.aM(!1,u,!0,new A.D(B.BI,A.B(A.a([s,B.bc,t,A.X(B.eD,w?B.br:B.bm,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ai)},
cmw(d,e,f,g,h,i){return this.b2w(!1,d,e,f,g,h,i)},
O6(d,e){return this.bIL(d,e)},
bIL(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$O6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lb(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$O6)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bBR(t.a.c,d.a),$async$O6)
case 6:w=7
return A.b(t.vR(),$async$O6)
case 7:r=t.c
if(r==null){w=1
break}r.K(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$O6,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=new C.tZ(o),m=o?B.c0:B.it
if(q.f)o=D.b9e
else{w=q.bD7(n)
v=q.bZa(n)
u=q.gbAe()
if(o)t=B.jH
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ad,v,B.aM,new C.FN(A.p(p,A.B(A.a([q.aBF(P.O_,"Projects",n,D.abo),q.aBF(B.w8,"Cashier",n,D.aYB),q.aBF(B.Gt,"Family Tree",n,D.hne)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.eA,0.95,u,p),B.bx],r)
w=q.d
if(w===D.abo){w=J.ad(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.au,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b2,new C.axB(q.gaR2(),p)],r),B.m,p,B.e,B.j,0,p,p),B.aA,q.cmy(n)],r))}else{o=q.a
if(w===D.aYB)u.push(new C.aoN(o.c,n,p))
else{w=q.r
u.push(new C.apV(o.c,o.d,o.e,o.f,new C.eMM(q),new C.eMN(q),new A.cs(w,x.b4)))}}o=A.cd(A.x(u,B.E,p,B.e,B.j,0,B.p),B.t,p,B.y,p,Aj.Nl,p,p,B.ah)}return A.c6(p,m,A.bn(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bD7(d){var w=null,v=A.m(8),u=d.a,t=A.X(Y.a0x,u?B.br:B.bm,w,w,w,16)
return A.aM(!1,v,!0,new A.D(B.kE,A.B(A.a([t,B.bn,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.br:B.bm,w,w,w,w,w,w,w,w,14,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eMn(this),w,w,w,w,w,w,w)},
gbAe(){switch(this.d.a){case 0:return D.aaA
case 1:return D.hcI
case 2:return D.aaB}},
bZa(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aV.j(0.35),B.cv,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bU9,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bc,D.bEl,A.aG(!1,B.a1,!0,w,A.aM(!1,A.m(12),!0,A.p(w,D.bRC,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eMr(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ai)],t),B.E,w,B.e,B.j,0,w,w),r=B.b_.j(0.55),q=A.m(12)
return new C.FN(A.p(w,A.x(A.a([new A.D(E.a_0,s,w),A.p(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.av,A.d(A.AZ(this.gcC8()),w,w,w,w,w,w,D.fpN,w,w,w)],t),B.E,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.u0,B.jb,w,w,1/0)],t),B.E,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.hcH,w)},
aBF(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aV:B.K,q=A.m(12),p=t?A.J(B.c.j(0.55),B.r,2):A.J(B.K,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aV.j(0.42),B.cH,14)],x.V):u
if(t)w=B.c
else w=f.a?B.br:B.bm
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.br:B.bm
return A.E(A.aG(!1,B.a1,!0,u,A.aM(!1,s,!0,A.dd(u,A.B(A.a([w,B.el,new A.ds(1,B.co,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b8,B.j,0,u,u),u,u,B.ct,new A.o(r,u,p,q,o,u,B.n),B.iQ,u,u,u,B.Ga,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eMI(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ai),1)},
cmy(d){var w,v,u,t,s,r,q=this,p=null
if(J.cq(q.e)){w=d.a
v=w?B.e2:B.c
u=A.m(15)
t=A.p(p,D.bRI,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aV.j(0.5),B.eZ,28)],x.V),D.c2P,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.au,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.FN(A.p(p,A.x(A.a([t,B.d8,s,B.O,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.br:B.bm,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dX,A.B(A.a([A.E(q.aSC(B.jc,"Scan QR",new C.eMC(q),d),1),B.as,A.E(q.aSC(R.yW,"Upload file",new C.eMD(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.aA,A.bI(D.fQR,q.gaR2(),A.bp(B.aV,p,p,p,B.c,B.fZ,p,p,new A.b7(A.m(12),B.a0),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bAZ,1.05,D.aaA,p)}w=J.b6(q.e,new C.eME(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.FN(A.x(w,B.m,p,B.e,B.j,0,B.p),16,B.bT,1,D.aaA,p)},
aSC(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.J(B.aV.j(0.45),B.r,1)
return A.aG(!1,B.a1,!0,u,A.aM(!1,t,!0,A.p(w,A.x(A.a([A.X(d,B.b_,w,w,w,26),B.O,A.d(e,w,w,w,w,w,w,D.fo7,B.L,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.aja,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
cmx(d,e){var w,v,u=null,t=e.a,s=t?B.e2:B.c,r=A.m(14),q=A.J(t?B.e7:B.bO,B.r,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.es,10)],x.V),o=A.m(14),n=t?B.br:B.bm
n=A.by(B.Wl,new A.fF(1.7777777777777777,C.aQA(!0,B.fH,1/0,P.O_,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.au,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.av,A.d(""+d.d.length+" budget items \xb7 "+A.AZ(d.gx8()),u,u,u,u,u,u,D.fm8,u,u,u)],w),B.E,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aG(!1,B.a1,!0,u,A.aM(!1,o,!0,A.x(A.a([n,new A.D(B.bF,A.B(A.a([v,A.aJ(u,u,u,u,A.X(Ak.a1z,t?B.br:B.bm,u,u,u,u),u,u,u,new C.eMA(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.E,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eMB(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ai),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.ea,u,u,u,1/0)}}
C.bxW.prototype={}
C.r9.prototype={
ag(){var w=this,v=w.c,u=w.d
return A.G(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcVI(){var w,v,u,t,s=this.c
if(s===B.k.jf(s))w=B.o.u(B.k.N(s))
else{v=B.k.ac(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.ls.prototype={
gx8(){return B.d.cI(this.d,0,new C.cB_())},
ag(){var w=this,v=w.d,u=A.T(v).k("N<1,a8<n,@>>")
v=A.C(new A.N(v,new C.cAZ(),u),u.k("ak.E"))
return A.G(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ae()],x.N,x.z)},
bcK(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.ls(w.a,w.b,v,u,w.e)},
bcr(d){return this.bcK(d,null)},
T2(d){return this.bcK(null,d)}}
C.HT.prototype={
a5(){return"FamilyGender."+this.b}}
C.hU.prototype={
ag(){var w=this
return A.G(["id",w.a,"name",w.b,"gender",C.hpf(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aEq(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hU(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.al2.prototype={
a5(){return"FamilyTreeAccessRole."+this.b}}
C.kL.prototype={
gap6(){var w=this.f
return new A.Z(w,new C.bQ7(),A.T(w).k("Z<1>")).gL(0)},
ag(){var w=this,v=w.f,u=A.T(v).k("N<1,a8<n,@>>")
v=A.C(new A.N(v,new C.bQ6(),u),u.k("ak.E"))
return A.G(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ae(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.i4F(w.y),"games",w.z],x.N,x.z)},
wv(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kL(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bcJ(d,e){var w=null
return this.wv(w,w,w,d,e,w,w,w,w)},
cLh(d,e,f,g,h,i,j){return this.wv(d,e,null,f,g,h,i,j,null)},
aEv(d,e){var w=null
return this.wv(w,w,w,w,d,w,w,e,w)},
cLj(d,e,f,g,h,i,j,k){return this.wv(d,e,null,f,g,h,i,j,k)},
cJM(d){var w=null
return this.wv(w,w,w,w,w,w,w,d,w)},
cK9(d){var w=null
return this.wv(w,w,w,w,w,w,w,w,d)},
bcl(d){var w=null
return this.wv(w,w,d,w,w,w,w,w,w)},
aEh(d){var w=null
return this.wv(w,w,w,w,w,d,w,w,w)},
cKO(d,e,f){var w=null
return this.wv(w,d,w,w,e,w,w,f,w)},
cJz(d){var w=null
return this.wv(w,w,w,d,w,w,w,w,w)},
cKm(d,e){var w=null
return this.wv(d,w,w,w,w,w,e,w,w)}}
C.cB0.prototype={
a5(){return"WrapAlignment."+this.b}}
C.cB1.prototype={
a5(){return"WrapCrossAlignment."+this.b}}
C.aHm.prototype={}
C.b99.prototype={
bv(d){this.a=d.a
this.b=d.b},
cW(d){var w=new C.b99()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b0(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b98.prototype={
gwn(){return!0},
gGc(){return this.z.b<this.b.length},
aUf(d){switch(0){case 0:return d.a.c}},
aTX(d){switch(0){case 0:return d.a.d}},
bSz(d,e){switch(0){case 0:return new A.hP(d,e)}},
bRX(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
h6(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iH(0,0,B.o.E(0,b5.a,b5.b),B.o.E(0,b5.c,b5.d))
return}w=A.HD(b4)
switch(0){case 0:v=b5.b
u=new A.kI(0,v,0,1/0)
t=w===B.Ud
break}s=A.a([],x.gZ)
r=A.U(x.gF,x.S)
for(b3=b1.z,q=B.d.fJ(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.M)(q),++h){g=q[h]
g.h6(b4,u,!0)
f=b1.aUf(g)
f.toString
e=b1.aTX(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aHm(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aHm(k,j,i))}d=s.length
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
for(q=B.d.fJ(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.M)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aUf(g)
e=b1.aTX(g)
e.toString
a9=b1.bRX(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bSz(a6,a3+a9)
b0=g.a
g.a=new A.iH(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h1(d){var w,v,u,t,s,r=this
r.lp(d)
w=d.b
w.ie()
v=A.dr()
u=r.a
v.ec(u.a,u.b,0,1)
w.p6(0,v)
for(u=r.z,u=B.d.ds(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.M)(u),++s)u[s].h1(d)
w.no(0)},
GH(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
ie(){return this.z}}
C.bwg.prototype={}
var z=a.updateTypes(["aA<~>()","R(hU)","~()","R(kL)","R(nj)","a8<n,@>(kL)","H(kL,kL)","H(hU,hU)","n(hU)","kL(a8<@,@>)","R(ls)","nj(a8<@,@>)","a8<n,@>(nj)","R(ut)","ut()","H(hU)","ai<hU>()","R(zc)","a_c(Y)","n?(hU)","eI<n?>(hU)","aA<~>(ls)","R(r9)","a8<n,@>(hU)","hU(a8<@,@>)","H(ls,ls)","R(aeV)","~(b9)","v(oo)","H(H,a94)","R(qt<H>)","~(qt<H>)","T3(Y)","R(M8)","R(us)","~(hU)","n(n)","Vp(Y)","T2(Y)","adh(Y)","Z8(Y)","hU(hU)","cN(bz<n,G0>)","cN(Kk)","ZC(Y)","H?(hU)","hU()","R(Kk)","D(hU)","~(HT)","Zy(Y)","v(HT,n,a0)","R(aeO)","bz<n,ai<a8<n,@>>>(n,ai<nj>)","ZA(Y)","+count,id,name(H,n,n)(kL)","n(kL)","a_x(Y)","a_y(Y)","R(lK)","lK()","YH(Y)","a1j(Y)","Za(Y)","Z9(Y)","~(H)","~(n,lg?)","v(r9)","adC(Y)","~(m9)","aA<~>([n?])","L(L,ls)","v(ls)","L(L,r9)","a8<n,@>(r9)","r9(a8<@,@>)","ai<lg>()","us()","n(V)","ls(a8<@,@>)","cu(HS)","n(ls)","a8<n,@>(ls)","H(nj,nj)","kL(a8<n,@>)","kL(kL)"])
C.fDt.prototype={
$1(d){return d.a+" "+d.b},
$S:123}
C.fDs.prototype={
bm_(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.r1(s,d,B.hM,"book",E.FQ),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.W(r!=null&&A.Lj(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bm_(d)},
$S:295}
C.fDu.prototype={
$1(d){return d.b},
$S:123}
C.fMU.prototype={
$1(d){var w=null
return A.eR(w,B.K,new H.PI(this.a,this.b,w),w,w,0,B.ZW,B.d7,w,w,w)},
$S:48}
C.frz.prototype={
$1(d){return d!=null},
$S:201}
C.frA.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:201}
C.frF.prototype={
$1(d){if(this.a)return new A.t(d.a*520,d.b*160)
return d},
$S:158}
C.fBc.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fb(d,w,w,w,A.hb(w,B.rS,w,w,w,w,w,w,w,B.dx,w,w,10.5,w,B.er,w,!0,w,w,w,w),w),u=f?B.er:B.w1
return new A.nT(D.bwt,A.a9T(A.a([new A.fS(130,w,v),new A.zb(1,B.Gm,A.fb(e,w,w,w,A.hb(w,g==null?D.elV:g,w,w,w,w,w,w,w,B.dx,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.xU,B.lI))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1923}
C.fBb.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vE(999)
f=A.xc(A.lF(h,A.fb("Cashier",h,h,h,A.hb(h,D.zP,h,h,h,h,h,h,h,B.dx,h,h,10,h,B.er,h,!0,h,h,h,h),h),h,new A.kJ(D.elM,h,f,B.hP,h),h,h,D.bwY,h))
w=A.xc(A.fb("Debt receipt",h,h,h,A.hb(h,h,h,h,h,h,h,h,h,B.dx,h,h,22,h,B.er,h,!0,h,h,h,h),h))
v=A.xc(A.fb(C.wW(new A.V(Date.now(),0,!1),!0),h,h,h,D.a9a,h))
u=A.vE(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fb(s,h,h,h,A.hb(h,h,h,h,h,h,h,h,h,B.dx,h,h,14,h,B.er,h,!0,h,h,h,h),h)
r=A.fb("Person who owes",h,h,h,D.a9a,h)
q=A.vE(10)
p=x.Z
u=A.lF(h,A.z5(A.a([s,new A.fS(h,2,h),r,new A.fS(h,10,h),A.lF(h,A.z5(A.a([A.fb("Amount owed",h,h,h,D.a9a,h),new A.fS(h,2,h),A.fb(A.AZ(t.c),h,h,h,A.hb(h,D.zP,h,h,h,h,h,h,h,B.dx,h,h,20,h,B.er,h,!0,h,h,h,h),h)],p),B.re,B.lI),h,new A.kJ(B.pn,h,q,B.hP,h),h,h,D.bwa,1/0)],p),B.re,B.lI),h,new A.kJ(E.aJI,h,u,B.hP,h),h,h,D.by1,1/0)
q=new A.nA(D.elP,0.9,B.kU)
r=A.vE(12)
s=i.c
o=s.$2("Original due",C.wW(t.r,!1))
n=s.$2("Current due",C.wW(t.f,!1))
m=i.d
l=new A.nA(m,1.1,B.kU)
k=A.vE(8)
j=i.a
k=A.a([o,n,new A.fS(h,6,h),A.lF(h,A.xc(A.fb(t.gaLk(),h,h,h,A.hb(h,m,h,h,h,h,h,h,h,B.dx,h,h,11,h,B.er,h,!0,0.5,h,h,h),h)),h,new A.kJ(h,new A.pH(l,l,l,l),k,B.hP,h),h,h,D.bx5,1/0),new A.fS(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.zP))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.zP))
else{n=A.fb("Missed days ("+n+")",h,h,h,A.hb(h,B.rS,h,h,h,h,h,h,h,B.dx,h,h,10.5,h,B.er,h,!0,h,h,h,h),h)
m=A.T(o).k("N<1,SB>")
o=A.C(new A.N(o,new C.fBa(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fS(h,4,h),n,new A.fS(h,6,h),new C.b98(5,5,new C.b99(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fS(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fS(h,8,h),w,new A.fS(h,3,h),v,new A.fS(h,16,h),u,new A.fS(h,10,h),A.lF(h,A.z5(k,B.xU,B.lI),h,new A.kJ(h,new A.pH(q,q,q,q),r,B.hP,h),h,h,B.ajm,1/0)],p)
w=j.a
if(w!=null){v=new A.nA(B.IX,1,B.kU)
B.d.v(f,A.a([new A.fS(h,16,h),A.fb("Debtor signature",h,h,h,A.hb(h,B.rS,h,h,h,h,h,h,h,B.dx,h,h,10,h,B.er,h,!0,h,h,h,h),h),new A.fS(h,6,h),A.lF(h,new A.Ia(w,B.Wv,h,h),h,new A.kJ(h,new A.pH(v,v,v,v),A.vE(6),B.hP,h),82,h,B.Nq,1/0)],p))}f.push(new A.fS(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fb(w,h,h,h,D.feK,h))
f.push(new A.fS(h,18,h))
f.push(A.xc(A.fb("NGMY.ORG",h,h,h,A.hb(h,D.zP,h,h,h,h,h,h,h,B.dx,h,h,14,h,B.er,h,!0,1.8,h,h,h),h)))
return f},
$S:373}
C.fBa.prototype={
$1(d){var w=null,v=new A.nA(D.IY,0.7,B.kU),u=A.vE(999)
return A.lF(w,A.fb(C.wW(d,!1),w,w,w,A.hb(w,D.IY,w,w,w,w,w,w,w,B.dx,w,w,9.5,w,B.er,w,!0,w,w,w,w),w),w,new A.kJ(w,new A.pH(v,v,v,v),u,B.hP,w),w,w,D.bCn,w)},
$S:1924}
C.c5g.prototype={
$1(d){var w=null,v=B.by.j(0.08),u=A.m(999),t=A.J(B.by.j(0.28),B.r,1)
return A.p(w,A.d(C.wW(d,!1),w,w,w,w,w,w,D.flD,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eH,w,w,w)},
$S:1925}
C.fNq.prototype={
$1(d){var w=null,v=A.aI(d,B.bX,x.w).w,u=A.m(26),t=A.aJ(w,w,w,w,D.bV3,w,w,w,new C.fNn(d),w,w,w,w,w,B.cd),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eR(w,B.K,new A.cT(new A.aZ(0,380,0,v.a.b*0.9),A.aG(!1,B.a1,!0,u,new A.D(B.ZM,A.x(A.a([new A.bM(B.a8,w,w,t,w),new A.ds(1,B.co,A.cd(A.x(A.a([new A.ex(new C.aZ5(r,w),s),B.W,A.B(A.a([A.E(A.et(B.z2,D.fN7,new C.fNo(s,r,d),A.dg(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fc,w,new A.b7(A.m(14),B.a0),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ac,A.E(A.dj(B.a29,D.fJz,new C.fNp(r,d),A.bp(B.b_,w,w,w,B.c,w,B.fc,w,new A.b7(A.m(14),B.a0),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.Q,0,B.p),B.t,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.Q,0,B.p),w),B.f,B.au,0,w,w,w,w,w,B.ai),w),w,w,0,An.a_9,B.d7,w,w,w)},
$S:48}
C.fNn.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fNo.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aW.al$.x.h(0,t.a)
m=m==null?null:m.gbd()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.m4(2.5),$async$$0)
case 4:w=3
return A.b(e.hr(B.h8),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eQ(B.dG.gaR(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.aq(o,0,32)
w=5
return A.b(A.t5(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.K(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fNp.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fHO(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.K(x.q).f
s.T(A.b3(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fNi.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eR(w,B.au,A.x(A.a([new A.D(D.bxQ,A.B(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nG,w,w,w),1),A.aJ(w,w,w,w,B.lc,w,w,w,new C.fNg(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.ds(1,B.co,new A.D(B.fL,A.by(A.m(14),A.fP(t,B.A,w,w,B.cf,B.dz,!1,w,!1,w,w),B.aq),w),w),new A.D(B.N4,new A.a7(1/0,w,A.dj(B.oj,D.aTH,new C.fNh(t,this.c,d),A.bp(B.b_,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.a0),w,w,w)),w),w)],u),B.m,w,B.e,B.Q,0,B.p),w,w,w,B.Nh,B.d7,w,new A.b7(v,B.a0),w)},
$S:48}
C.fNg.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fNh.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.t5(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.K(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fNu.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eR(w,B.au,new A.D(D.bxY,A.x(A.a([A.B(A.a([D.bDq,A.aJ(w,w,w,w,B.lc,w,w,w,new C.fNs(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.O,new A.ex(A.by(A.m(14),A.p(w,A.b4(w,w,w,new C.bbh(s.ax,w),B.ax),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ad,new A.a7(1/0,w,A.dj(B.oj,D.aTH,new C.fNt(t,s,d),A.bp(B.b_,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.a0),w,w,w)),w)],u),B.m,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d7,w,new A.b7(v,B.a0),w)},
$S:48}
C.fNs.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fNt.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aW.al$.x.h(0,t.a)
n=n==null?null:n.gbd()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.m4(2.5),$async$$0)
case 4:w=3
return A.b(e.hr(B.h8),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.aq(p,0,32)
r=J.eQ(B.dG.gaR(s))
w=5
return A.b(A.t5(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.K(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fvT.prototype={
$1(d){return d.a===this.a},
$S:262}
C.dKe.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dK_.prototype={
bld(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.e2:B.c
s=u.a
w=2
return A.b(A.bU(t,null,new C.dK2(s,q,e),p,!0,!0,!1,B.Jd,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dK3(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bld(d,e)},
$S:1926}
C.dK2.prototype={
$1(d){var w,v=null,u=this.c===B.wA,t=u?D.dlG:D.dhn
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.au,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bn(!0,new A.D(N.ajU,A.x(A.a([u,B.av,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.br:B.bm,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ad,A.iy(!0,v,v,B.y,D.f5l,new C.dK1(this.a,w,t,d),t.length,v,B.dR,B.ah,!0)],x.p),B.aj,v,B.e,B.Q,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:26}
C.dK1.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cO.j(0.14)
else w=t.b.a.d.a?B.M:B.aP
v=A.m(14)
if(q)u=B.cO
else u=(t.b.a.d.a?B.br:B.bm).j(0.16)
u=A.J(u,B.r,q?1.6:1)
return A.aM(!1,p,!0,A.p(B.A,C.aZ4(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dK0(t.d,r),s,s,s,s,s,s,s)},
$S:188}
C.dK0.prototype={
$0(){A.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.dK3.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dJY.prototype={
$3(d,e,f){return B.bJ},
$C:"$3",
$R:3,
$S:94}
C.dJZ.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cJ(B.ct,e,v)
return new A.d0(e,!1,A.ir(B.A,A.at(A.aG(!1,B.a1,!0,v,new A.dY(new C.dJX(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bf(t,new A.bo(0.96,1,u),u.k("bf<bO.T>"))),v)},
$S:32}
C.dJX.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bX,x.w).w,i=l.b,h=i.a.d.a,g=h?B.e2:B.c,f=A.m(14),e=A.J((h?B.br:B.bm).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.au,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.B(A.a([w,A.aM(!1,v,!0,new A.D(B.eA,A.X(B.cx,i.a.d.a?B.br:B.bm,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dJI(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.au,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aT8("Name")
r=l.a
q=r.d==null?k:new C.dJJ(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bo:B.lZ
n=A.J(B.cO.j(0.35),B.r,1)
m=r.d
t=A.aN(k,B.Z,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.bcC(new A.D(B.fx,A.aM(!1,p,!0,A.p(B.A,C.aZ4(m==null?"\ud83d\udc64":A.fC0(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cn,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ab,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a3,k,B.kP,k,B.a9_,k,k)
v=A.a([v,B.ad,t,B.O,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bm,k,k,k,k,k,k,k,k,11.5,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.B(A.a([A.E(i.aTN("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dJK(r,a0),r.d===B.wA),1),B.ac,A.E(i.aTN("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dJP(r,a0),r.d===B.a5R),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.O,new A.bM(B.a4,k,k,A.hr(D.bTo,D.fLq,new C.dJQ(r,l.e,a0),A.fy(k,k,k,k,k,k,k,k,k,k,k,B.cO,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cd)),k)],u))
v.push(B.W)
t=A.l(k,k,i.a.d.a?B.aP:B.au,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uw(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aT9("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ak,k,k,s,k,k,B.e0,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ab,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a3,k,B.ao,k,k,k,k))
v.push(B.W)
t=i.a.d.a
s=t?B.M:B.aP
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.J((t?B.br:B.bm).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wW(r.a,!1)
v.push(A.aG(!1,B.a1,!0,q,A.aM(!1,p,!0,A.p(k,A.B(A.a([A.E(A.x(A.a([t,B.bA,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.au,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.j,0,B.p),1),D.bQb],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bf,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dJR(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.v(v,A.a([B.O,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bm,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.W)
t=A.l(k,k,i.a.d.a?B.aP:B.au,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aT8("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ab,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a3,k,B.ao,k,k,k,k))
v.push(B.ad)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.au,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bm,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b0U(r.b.length!==0,B.mH,new C.dJS(r,i,a0),new C.dJT(r,a0),"Upload from gallery","ID photo"))
v.push(i.b0U(r.c.length!==0,D.bJA,new C.dJU(r,i,d,a0),new C.dJV(r,a0),"Camera or gallery","Selfie"))
v.push(B.O)
t=l.w
v.push(new Am.a7H("Signature (optional)",t,new C.dJW(a0),new C.dJL(a0,t),new C.dJM(d,t,a0),k))
v.push(B.aA)
i=i.a.d.a
t=i?B.br:B.bm
s=(i?B.br:B.bm).j(0.28)
s=A.E(A.dS(E.aTA,new C.dJN(d),A.dg(k,k,k,k,k,k,k,k,k,t,k,k,B.tX,k,new A.b7(A.m(10),B.a0),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bp(B.cO,k,k,k,B.c,k,B.tX,k,new A.b7(A.m(10),B.a0),k,k,k)
v.push(A.B(A.a([s,B.ac,A.E(A.bI(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vc,k,k,k),new C.dJO(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cd(A.x(v,B.aj,k,B.e,B.Q,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aZ(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.u3,B.jb,k,k,360)},
$S:167}
C.dJI.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dJJ.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dJK.prototype={
$0(){return this.b.$1(new C.dJH(this.a))},
$S:0}
C.dJH.prototype={
$0(){var w=this.a
w.d=B.wA
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dJP.prototype={
$0(){return this.b.$1(new C.dJG(this.a))},
$S:0}
C.dJG.prototype={
$0(){var w=this.a
w.d=B.a5R
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dJQ.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dJR.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.x_(null,u.b,A.c4(2020,1,1,0,0,0,0,0),null,s,A.c4(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dJF(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dJF.prototype={
$0(){var w=this.b
return this.a.a=A.c4(w.gck(),w.gcf(),w.gcw(),0,0,0,0,0)},
$S:0}
C.dJS.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.PH(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dJE(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dJE.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dJT.prototype={
$0(){return this.b.$1(new C.dJD(this.a))},
$S:0}
C.dJD.prototype={
$0(){return this.a.b=""},
$S:0}
C.dJU.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.e2:B.c
w=3
return A.b(A.bU(q,null,new C.dJB(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.PH(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dJC(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dJB.prototype={
$1(d){var w=null
return A.bn(!0,A.x(A.a([A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.ap1,w,w,w,w,new C.dJv(d),!1,w,w,w,w,w,w,w,D.fBG,w,w,w),A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.ap_,w,w,w,w,new C.dJw(d),!1,w,w,w,w,w,w,w,D.fIA,w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),!0,!1,B.af,!0,!0)},
$S:26}
C.dJv.prototype={
$0(){A.a4(this.a,!1).O("camera")
return null},
$S:0}
C.dJw.prototype={
$0(){A.a4(this.a,!1).O("gallery")
return null},
$S:0}
C.dJC.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dJV.prototype={
$0(){return this.b.$1(new C.dJA(this.a))},
$S:0}
C.dJA.prototype={
$0(){return this.a.c=""},
$S:0}
C.dJW.prototype={
$0(){return this.a.$1(new C.dJz())},
$S:0}
C.dJz.prototype={
$0(){},
$S:0}
C.dJL.prototype={
$0(){return this.a.$1(new C.dJy(this.b))},
$S:0}
C.dJy.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dJM.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ahR(u.a,null,null,new C.dJx(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dJx.prototype={
$4(d,e,f,g){this.a.$1(new C.dJu(this.b,d))},
$S:447}
C.dJu.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dJN.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dJO.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.K(x.q).f.T(D.fap)
return}if(w.a.d==null){w.c.K(x.q).f.T(D.f7i)
return}A.a4(w.c,!1).O(!0)},
$S:0}
C.dKh.prototype={
$3(d,e,f){return B.bJ},
$C:"$3",
$R:3,
$S:94}
C.dKi.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.e2:B.c,n=A.m(14),m=A.J((p?B.br:B.bm).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.au,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.AZ(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.br:B.bm,r,r,r,r,r,r,r,r,13,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.za(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.za(r).length>0?B.by:B.cO,r,r,r,r,r,r,r,r,12,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.br:B.bm
t=(q?B.br:B.bm).j(0.28)
s=x.p
return new A.d0(e,!1,A.at(A.aG(!1,B.a1,!0,r,A.p(r,A.x(A.a([p,B.O,v,u,B.aA,A.B(A.a([A.E(A.dS(B.nH,new C.dKf(d),A.dg(r,r,r,r,r,r,r,r,r,w,r,r,B.jM,r,new A.b7(A.m(10),B.a0),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ac,A.E(A.bI(D.fJ_,new C.dKg(d),A.bp(B.cO,r,r,r,B.c,r,B.jM,r,new A.b7(A.m(10),B.a0),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.aj,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.BL,E.a_0,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:32}
C.dKf.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dKg.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dKb.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dKc(r),p=r.a.d.a,o=p?B.e2:B.c,n=A.m(14),m=A.J((p?B.br:B.bm).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.au,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.AZ(l.c),s,s,s,s,s,s,D.fna,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.iD((r.a.d.a?B.br:B.bm).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a0S,"View receipt",new C.dK4(r,d,l))
u=l.x!=null
t=u?B.rv:B.qh
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bxV,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dK5(r,d,l)),q.$3$icon$label$onTap(B.BX,"Edit",new C.dK6(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mH,"View / download ID",new C.dK7(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bJz,"View / download selfie",new C.dK8(r,d,l)))
if(l.gaG7())p.push(q.$3$icon$label$onTap(Ac.a2_,"View / download signature",new C.dK9(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.by,B.ec,"Delete",new C.dKa(r,d,l)))
p.push(B.av)
return A.bn(!0,new A.D(B.u0,A.p(s,A.x(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:26}
C.dKc.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.au
else w=d
return A.aM(!1,v,!0,new A.D(B.eP,A.B(A.a([A.X(e,w,v,v,v,20),B.bc,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1927}
C.dK4.prototype={
$0(){A.a4(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fNm(w,this.c)},
$S:0}
C.dK5.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.So(this.c)},
$S:0}
C.dK6.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.Df(this.c)},
$S:0}
C.dK7.prototype={
$0(){var w,v,u
A.a4(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bDX(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dK8.prototype={
$0(){var w,v,u
A.a4(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bDX(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dK9.prototype={
$0(){A.a4(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fNr(w,this.c)},
$S:0}
C.dKa.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.PG(0,this.c)},
$S:0}
C.dKj.prototype={
$1(d){return d.x==null},
$S:262}
C.dKk.prototype={
$1(d){return d.x!=null},
$S:262}
C.dKl.prototype={
$2(d,e){return d+e.c},
$S:1928}
C.dKm.prototype={
$0(){return this.a.bAJ()},
$S:0}
C.dKd.prototype={
$0(){return this.a.afm(this.b)},
$S:0}
C.fww.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fwx.prototype={
$0(){return B.d.gI(D.a3j)},
$S:z+77}
C.dan.prototype={
$0(){var w=this.a
return w.m(new C.dal(w,this.b))},
$S:0}
C.dal.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dam.prototype={
$0(){},
$S:0}
C.dao.prototype={
$0(){var w=this.a.gbZT()
A.a4(this.b,!1).O(w)
return null},
$S:0}
C.fyM.prototype={
$1(d){return C.h9P(A.a2(d,x.N,x.z))},
$S:z+11}
C.fyN.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fyO.prototype={
$2(d,e){var w=A.ca(d.a,null),v=A.ca(e.a,null)
if(w!=null&&v!=null)return B.o.aK(w,v)
return d.d.aK(0,e.d)},
$S:z+83}
C.fM_.prototype={
$1(d){return d.ag()},
$S:z+12}
C.fUk.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fvK.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bOP.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f0(e,v)?v:null},
$S:1929}
C.fMy.prototype={
$1(d){var w=this
return new C.ZA(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.db2.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.db1(w,d))},
$S:z+80}
C.db1.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.daR.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cK(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.daO.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dap.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.daq.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.daS.prototype={
$0(){return this.a.w=!1},
$S:0}
C.day.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.e2:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.au,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.br:B.bm,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.em(A.a([A.bN(!1,B.di,w,w,!0,w,w,new C.daw(d),w,w),A.bI(B.wX,new C.dax(d),A.bp(B.n6,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.daw.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dax.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.daz.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.E(w.r-1,-1,999)},
$S:0}
C.daP.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.daQ.prototype={
$0(){return B.d.gI(D.ze)},
$S:z+14}
C.dau.prototype={
$1(d){var w=this.a,v=w.y,u=w.gyv(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.T2(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dav.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.daA.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.Z8(v,u,J.ad(w.d),null)},
$S:z+40}
C.daB.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.db0.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aB(s,new C.YQ(r.y,r.gyv(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.daZ(r),s,s,s,s,s,s,!1,B.a5)
else{w=e-1
v=J.q(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.baF(v,e,w,u,t,r.gbR2(),C.hpe(r.y.Q),r.gyv(0),s)
w=t}return A.c9(q,new C.db_(r,e),new A.D(B.a_1,w,s))},
$S:1930}
C.db_.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd1(t).ay){t=this.b
u=x.cy.a(B.d.gd1(u.f.f)).guZ(0)
w=t-(u==null?t:u)}else w=0
v=B.k.E(w,-1,0)
u=A.dr()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fG(v*3.141592653589793*0.5)
return A.fv(B.a4,A.d9(e,B.k.E(1+v*0.5,0,1)),null,u,!0)},
$S:46}
C.daZ.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aHd(B.q1,B.iR)},
$S:0}
C.daL.prototype={
$0(){var w=this.a
return w.m(new C.daK(w))},
$S:0}
C.daK.prototype={
$0(){return this.a.w=!0},
$S:0}
C.daM.prototype={
$0(){var w=this.a.c
w.toString
A.a4(w,!1).O(null)
return null},
$S:0}
C.dar.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.k7.j(0.5),r=x.p,q=A.a([D.fAh,B.ad],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cq(p.d)?"Write this book":"Write a new book"
q.push(p.Ze(d,B.e4,w,J.cq(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.Ze(d,F.amW,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cK(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cu,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kx.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cu,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kx.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.Ze(d,W.ao2,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.Ze(d,B.qm,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.Ze(d,B.qm,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eR(u,E.Bb,A.bn(!0,new A.D(Ab.yd,A.x(q,B.E,u,B.e,B.Q,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.aki,B.d7,u,new A.b7(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:48}
C.daN.prototype={
$0(){A.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.daE.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cK(w.d)
return new C.ZC(v,J.cK(w.d),w.r+1,null)},
$S:z+44}
C.daF.prototype={
$1(d){var w=null
return A.ov(!1,A.em(w,w,w,E.Bb,new A.jR(this.a,new C.daD(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:313}
C.daD.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a8G,B.ox,A.E(A.d(e,w,w,w,w,w,w,B.jj,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:739}
C.daG.prototype={
$0(){return this.a.a=!1},
$S:51}
C.daH.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:193}
C.daI.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.daJ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.B7(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.RQ(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.daC(s,t))
w=4
return A.b(s.l6(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.daC.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.daU.prototype={
$1(d){var w=null
return A.ov(!1,A.em(w,w,w,E.Bb,new A.jR(this.a,new C.daT(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:313}
C.daT.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a8G,B.ox,A.E(A.d(e,w,w,w,w,w,w,B.jj,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:739}
C.daV.prototype={
$0(){return this.a.a=!1},
$S:51}
C.daW.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:193}
C.daX.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:193}
C.daY.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.B7(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.l6(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.das.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bi8(B.q1,A3.MR)},
$S:0}
C.dat.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aHd(B.q1,A3.MR)},
$S:0}
C.dcN.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dcO.prototype={
$1(d){var w=this.a
return w.m(new C.dcM(w))},
$S:8}
C.dcM.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dcP.prototype={
$1(d){var w=this.a
return w.m(new C.dcL(w))},
$S:8}
C.dcL.prototype={
$0(){return this.a.e="book"},
$S:0}
C.dcQ.prototype={
$1(d){var w=this.a
return w.m(new C.dcK(w))},
$S:8}
C.dcK.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dcR.prototype={
$0(){var w=this.a
return w.m(new C.dcJ(w,this.b))},
$S:0}
C.dcJ.prototype={
$0(){var w=this.b
this.a.d.saX(0,w)
return w},
$S:0}
C.dcS.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga1Y()
A.a4(this.b,!1).O(new A.bpe(w,v))},
$S:0}
C.dbh.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dbg.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.Zy(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dbl.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dbk.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b8g(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hk,v,v,v)
return A.em(A.a([A.bN(!1,B.di,v,v,!0,v,v,new C.dbi(d),v,v),A.bI(B.wX,new C.dbj(d),A.bp(B.n6,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.Bb,w,v,v,v,v,D.fz4,v)},
$S:18}
C.dbi.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dbj.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dbm.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dbn.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u)r.push(new A.a7(s,t,w[u],t))
return A.cd(A.bW(B.bE,r,B.bq,t,18,14),B.t,t,B.y,t,D.byR,t,t,B.ah)},
$S:288}
C.dbf.prototype={
$0(){return this.a.Qo(0,this.b)},
$S:0}
C.dbe.prototype={
$0(){return this.a.PS(0,this.b)},
$S:0}
C.cJN.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cJO.prototype={
$0(){return B.d.gI(D.ze)},
$S:z+14}
C.cJP.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bT(0,new A.D(d,A.c1(w,new A.o(w,w,A.J(this.a.j(f),B.r,g),v,w,w,B.n),B.bg),w),0,0,0)},
$S:1932}
C.d2m.prototype={
$1(d){return this.a.m(new C.d2l(this.b,this.c))},
$S:8}
C.d2l.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d2L.prototype={
$1(d){return this.a.m(new C.d2y())},
$S:2}
C.d2y.prototype={
$0(){},
$S:0}
C.d2M.prototype={
$1(d){return this.a.m(new C.d2x())},
$S:2}
C.d2x.prototype={
$0(){},
$S:0}
C.d2N.prototype={
$0(){var w=this.a
return w.m(new C.d2w(w,this.b))},
$S:0}
C.d2w.prototype={
$0(){var w=this.a
return w.d=w.goa().FR(this.b.a)},
$S:0}
C.d2O.prototype={
$0(){var w=this.a
return w.m(new C.d2v(w,this.b))},
$S:0}
C.d2v.prototype={
$0(){var w=this.a
return w.d=w.goa().cJ5(this.b)},
$S:0}
C.d2P.prototype={
$1(d){return this.a.m(new C.d2u())},
$S:2}
C.d2u.prototype={
$0(){},
$S:0}
C.d2Q.prototype={
$0(){var w=this.a
return w.m(new C.d2t(w,this.b))},
$S:0}
C.d2t.prototype={
$0(){var w=this.a
return w.d=w.goa().cJa(this.b.a)},
$S:0}
C.d2R.prototype={
$1(d){var w=this.a
return w.m(new C.d2G(w,d))},
$S:7}
C.d2G.prototype={
$0(){var w=this.a
return w.d=w.goa().cK4(this.b)},
$S:0}
C.d2S.prototype={
$1(d){var w=this.a
return w.d=w.goa().aEk(d)},
$S:2}
C.d2T.prototype={
$1(d){var w=this.a
return w.d=w.goa().cJd(d)},
$S:2}
C.d2V.prototype={
$1(d){var w=this.a
return w.d=w.goa().cK2(d)},
$S:2}
C.d2W.prototype={
$1(d){var w=this.a
return w.m(new C.d2F(w,d))},
$S:8}
C.d2F.prototype={
$0(){var w=this.a
return w.d=w.goa().cJU(this.b)},
$S:0}
C.d2X.prototype={
$0(){var w=this.a,v=w.goa(),u=B.a.i(w.gyv(0).a.a),t=B.a.i(w.gaBt().a.a)
u=v.bcT(B.a.i(w.garj().a.a),t,u)
A.a4(this.b,!1).O(u)
return null},
$S:0}
C.bOZ.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:9}
C.bOT.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bOS(w,d))},
$S:11}
C.bOS.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a4(0)}},
$S:0}
C.bP1.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bOU.prototype={
$0(){var w=this.a
w.Q=D.aYc
w.ad9(1)
w.r.x=null},
$S:0}
C.bOV.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.aYc)return
w=new A.e9()
w.d3(u.as*13+u.a.e)
v=u.r
v.Q=3+w.au(3)
v.z=D.cYr[w.au(6)]
v.as=u.f.a+2.6},
$S:0}
C.bOY.prototype={
$0(){var w=this.a
w.Q=D.aba
w.ad9(2)
w.r.z=null},
$S:0}
C.bOX.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hlc
t.ad9(3)
w=t.r
w.d=s
w.x="I say: "+t.gC1()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.au(3)
w.z=s?D.d3F[v.au(4)]:D.do6[v.au(3)]
w.as=t.a+2.8},
$S:0}
C.bP_.prototype={
$0(){var w=this.a
w.Q=D.aYd
w.CW=this.b
w.cy=1
w.ad9(4)
w.r.f=w.f.a+5},
$S:0}
C.bP0.prototype={
$0(){},
$S:0}
C.bOW.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ib()},
$S:0}
C.bOQ.prototype={
$0(){return this.a.KE(this.b)},
$S:0}
C.bOR.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ib()},
$S:0}
C.bQv.prototype={
$0(){var w=this
return w.a.QH(w.b,0,w.c,w.d)},
$S:0}
C.bQw.prototype={
$0(){var w=this
return w.a.QH(w.b,3,w.c,w.d)},
$S:0}
C.bQx.prototype={
$0(){var w=this
return w.a.QH(w.b,1,w.c,w.d)},
$S:0}
C.bQy.prototype={
$0(){var w=this
return w.a.bQu(w.b,w.c,w.d)},
$S:0}
C.bQz.prototype={
$0(){var w=this
return w.a.QH(w.b,4,w.c,w.d)},
$S:0}
C.bQA.prototype={
$0(){var w=this
return w.a.QH(w.b,2,w.c,w.d)},
$S:0}
C.bQB.prototype={
$0(){var w=this
return w.a.QH(w.b,5,w.c,w.d)},
$S:0}
C.bQC.prototype={
$2(d,e){return B.k.aK(d.a,e.a)},
$S:740}
C.bQu.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a4p[d],p=q.a.aa(0,new A.t(0,-q.b*1.2*124)),o=A.fu(r,r,3,r,A.cS(r,r,r,r,r,r,r,r,r,D.feq,e),B.a3,B.bZ,r,B.dA,B.bW)
o.nX(130)
w=o.b.a.c
w=p.aF(0,new A.t(0,w.gbb(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bs(A.bJ(w,v.gbb(v)+12,u+18),B.hO)
u=this.a
v=t.eT(B.dB)
w=$.S()
s=A.I()
s.r=B.dp.gp(0)
u.az(v,s)
s=A.I()
s.r=D.pW.gp(0)
u.az(t,s)
w=new A.aF(w.r,B.ag,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.D(new A.aX(s-5,v))
w.D(new A.aq(s+1,p.b+1))
w.D(new A.aq(s+6,v))
w.D(new A.br())
v=A.I()
v.r=D.pW.gp(0)
u.aG(w,v)
o.a1(u,new A.t(t.a+9,t.b+6))},
$S:741}
C.bPf.prototype={
$2(d,e){return B.o.aK(d.Q,e.Q)},
$S:z+7}
C.bPg.prototype={
$2(d,e){var w=this.a,v=B.o.aK(w.aly(d),w.aly(e))
if(v!==0)return v
return B.o.aK(d.Q,e.Q)},
$S:z+7}
C.fkO.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.fUb.prototype={
$2(d,e){if(e!=null)J.cb(this.a.c3(0,d,new C.fUc()),e)},
$S:z+66}
C.fUc.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.fUd.prototype={
$1(d){return d!==this.a},
$S:3}
C.fUe.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.fUf.prototype={
$1(d){return d!==this.a&&!B.d.b5(this.b,new C.fUa(this.c,d))},
$S:3}
C.fUa.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fUg.prototype={
$1(d){return d!==this.a},
$S:3}
C.fUh.prototype={
$1(d){return d!==this.a},
$S:3}
C.fUi.prototype={
$1(d){return d!==this.a&&!B.d.b5(this.b,new C.fU9(this.c,d))},
$S:3}
C.fU9.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fx3.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fL4.prototype={
$1(d){return d.Q},
$S:z+15}
C.fL5.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.ftv.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fzF.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bKf.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.fUB.prototype={
$2(d,e){return B.o.aK(C.hlE(d),C.hlE(e))},
$S:227}
C.fUC.prototype={
$1(d){return d!==this.a},
$S:3}
C.fLx.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bIt.prototype={
$0(){var w=this.a
w.ch=!0
w.b6x()},
$S:0}
C.bIo.prototype={
$0(){},
$S:0}
C.bIu.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bIm.prototype={
$0(){},
$S:0}
C.bIn.prototype={
$0(){},
$S:0}
C.bIs.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bT(0,A.b4(u,u,u,new C.bbi(t,u),B.ax),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.m(14)
s.push(A.ao(u,A.p(u,A.d(t.dy,u,u,u,u,u,u,D.flP,B.L,u,u),B.f,u,u,new A.o(w,u,u,v,u,u,B.n),u,u,u,u,B.bT,u,u,u),u,u,14,14,6,u))}return A.aB(B.ca,new A.an(B.a_,u,B.aa,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bIp(t,e),u,u,u,u,u,u,u,new C.bIq(t,e),u,u,u,u,u,u,u,u,u,new C.bIr(t,e),u,u,u,u,!1,B.a5)},
$S:36}
C.bIp.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:21}
C.bIr.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:22}
C.bIq.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:21}
C.bIl.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ib()},
$S:0}
C.clu.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.clv.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.clt(w))},
$S:0}
C.clt.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.clw.prototype={
$0(){var w=this,v=w.a
v.giS()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.clx.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cly.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.clz.prototype={
$0(){},
$S:0}
C.clA.prototype={
$0(){var w=this.a
w.z=w.WO(++w.e)
w.Q=A.c2(w.gkG()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.clq.prototype={
$0(){return A.a4(this.a,!1).ib()},
$S:0}
C.clr.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.giS().length,e=i/2,d=new C.cls(i,f,h),a0=g.as,a1=A.a6(a0).k("bc<2>")
a0=A.C(new A.bc(a0,a1),a1.k("K.E"))
a0=A.bT(0,A.c9(new A.h5(a0),new C.cll(g,new A.t(e,56),f,d),j),0,0,0)
a1=this.b
w=g.giS().length!==0&&!B.d.t(g.giS(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.PZ(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cN(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new S.Mf(new C.clm(g,u),new C.cln(g,u),new C.clo(g,u),j,j,new A.cs("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.d(a1,j,j,j,j,j,j,A.l(j,j,B.a.t(a1,"not a child")?B.f7:B.bj,j,j,j,j,j,j,j,j,13,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),B.L,j,j),j,j,0,0,h*0.76-6,j))
if(g.giS().length!==0&&!B.d.t(g.giS(),-1)){a0=g.e+1>=g.gkG().length?"See my result":"Next family"
g=A.at(C.ub(a0,g.gq3(g),B.cI,B.jQ,D.fn),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.WO(0):s).length))break
if(!B.d.t(g.giS(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.WO(0)
o=s}else o=s
n=s[u]
n=A.eb(B.A,new C.PZ(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.WO(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.qP(new A.bo(0,p,t),new C.clp(),new S.DO(u,j,new C.PZ(l.b,k,62,!1,j),new A.ky(0.25,new C.PZ(m.b,k,62,!1,j),j),new A.k3(n,B.ai,!1,0,B.K,j,j,j,j,!0,B.f,B.a1,j,j),B.J,S.hp9(),!0,!0,j,j,j,j,j,j,!1,B.jy,j,new A.cs("chip-"+r,a0),w),B.b7,B.iS,j,new A.cs("t"+r+"-"+q,a0),v))}++u}g=A.bW(B.fE,a1,B.bq,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.an(B.a_,j,B.aa,B.t,e,j)},
$S:70}
C.cls.prototype={
$1(d){return new A.t(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:728}
C.cll.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.giS().length!==0&&!B.d.t(t.giS(),-1)
return A.b4(p,p,p,new C.baO(q.b,o,v,w,p),B.ax)},
$S:63}
C.cln.prototype={
$1(d){return this.a.giS()[this.b]===-1},
$S:z+30}
C.clo.prototype={
$1(d){return this.a.cMU(this.b,d.a)},
$S:z+31}
C.clm.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.giS()[t]!==-1,r=A.m(18),q=e.length!==0?B.cI.j(0.3):B.K
if(s)w=v
else w=A.J(e.length!==0?B.cI:B.jJ,B.r,2)
u=s?A.lr(new C.clk(),A.at(new C.PZ(u.gaDN()[u.giS()[t]].b,u.gaDN()[u.giS()[t]].a,62,!1,v),v,v,v),B.lo,B.iS,v,v,new A.bo(0.3,1,x.X),x.i):D.b7V
return A.dd(v,u,v,v,B.b7,new A.o(q,v,w,r,v,v,B.n),B.a1,v,100,v,v,v,v,88)},
$S:1935}
C.clk.prototype={
$3(d,e,f){return A.eb(B.A,f,e,null,null)},
$S:109}
C.clp.prototype={
$3(d,e,f){return A.dO(f,new A.t(Math.sin(e*24)*8*(1-e),0))},
$S:109}
C.cKR.prototype={
$1(d){return d>=1},
$S:114}
C.cAp.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkG()[w.e].d.length)w.m(new C.cAo(w))},
$S:11}
C.cAo.prototype={
$0(){return this.a.f++},
$S:0}
C.cAx.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cAy.prototype={
$0(){var w=this.a,v=this.b
w.z.M(0,v)
w.Q=v},
$S:0}
C.cAz.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cAw(w))},
$S:0}
C.cAw.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cAA.prototype={
$0(){return this.a.f++},
$S:0}
C.cAB.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cAC.prototype={
$0(){},
$S:0}
C.cAD.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a8(0)
w.as=!1
w.ay=0},
$S:0}
C.cAr.prototype={
$0(){return A.a4(this.a,!1).ib()},
$S:0}
C.cAs.prototype={
$3(d,e,f){var w=null
return A.lr(new C.cAq(this.a,e),w,B.b7,B.hq,w,w,new A.bo(w,this.b,x.X),x.i)},
$S:1936}
C.cAq.prototype={
$3(d,e,f){var w,v,u=null,t=this.a,s=B.cI.j(t.as?0.6:0.15)
s=A.a([new A.ac(0,B.G,s,B.J,t.as?40:18)],x.V)
w=B.w.j(e)
v=this.b
v=A.TB(v,v,B.V1)
return A.p(u,A.hT(new A.Bi(new A.xk(w,B.KZ,u,B.X_),H.bUF(A.b4(u,u,u,new C.aAg(t.gkG()[t.e].c,t.as,u),B.ax),v),u),B.aq),B.f,u,u,new A.o(u,u,u,u,s,u,B.a6),u,190,u,u,u,u,u,190)},
$S:1937}
C.cAt.prototype={
$3(d,e,f){return A.d9(A.dO(f,new A.t(0,14*(1-e))),e)},
$S:99}
C.cAu.prototype={
$3(d,e,f){return A.dO(f,new A.t(Math.sin(e*22)*8*(1-e),0))},
$S:109}
C.cAv.prototype={
$0(){return this.a.bnt(this.b)},
$S:0}
C.eYZ.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.am4$)
v.am4$=w
v.pT$.sp(0,w)
v.apG(u)},
$S:9}
C.f7Z.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a4(0)
w.a.$0()},
$S:11}
C.bQ0.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bQ_())},
$S:0}
C.bQ_.prototype={
$0(){},
$S:0}
C.bPY.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bPW.prototype={
$0(){},
$S:0}
C.bPX.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gMq()
w=s+1>=r.length?3:5
break
case 3:q=C.bEd(p.gaov(0),0,r.length)
p.m(new C.bPT(p,q))
o=p
w=6
return A.b(C.Bs(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.Bt(s.d,s.c.a,"school",p.gaov(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bPU())
w=4
break
case 5:p.m(new C.bPV(p))
p.gqc().Vn(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bPT.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bPU.prototype={
$0(){},
$S:0}
C.bPV.prototype={
$0(){return this.a.x++},
$S:0}
C.bPZ.prototype={
$0(){return this.a.KE(this.b)},
$S:0}
C.bPS.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ib()},
$S:0}
C.eZ_.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.t(t,s),q=v.b,p=v.d,o=p?C.hpj(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.Ds
C.RN(q,D.efe,0,0.2,-0.6,-0.2,null,w,D.ee_,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.aa(0,new A.t(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.S()
p=A.I()
p.r=D.Ft.gp(0)
p.c=3
p.d=B.bB
q.bo(new A.t(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.eZ0.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.RN(this.a,D.eej,0,u,0.7,-0.5,null,null,D.IP,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.eZ1.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.RN(this.a,D.eg0,0,0,0.8,-0.5,null,null,D.IP,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.eZ2.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.RN(w.b,D.ef8,0,v,-0.8,-0.5,null,null,D.IP,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.eZ3.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.t(34,-122+Math.sin(w*5)*5)
else v=v?D.efc:D.Ds
C.RN(p,D.eeD,0,t,0,-0.6,null,v,D.IP,3,0,s,1.3,u,0,w,0)
q=q.c8z(new A.t(222,455),9)
$.S()
w=A.I()
w.r=B.cI.gp(0)
p.aG(q,w)},
$S:0}
C.eZ4.prototype={
$2(d,e){return B.k.aK(d.a,e.a)},
$S:740}
C.bPE.prototype={
$2(d,e){return d+e},
$S:69}
C.bPP.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bPQ.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bPR.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.giS()[u.b]=s
t.giS()[u.d]=t.y
w=t.as
v=t.pT$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bPL.prototype={
$1(d){return d},
$S:119}
C.bPK.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.pT$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bPM.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bPN.prototype={
$0(){},
$S:0}
C.bPO.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.Fi(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.cu(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.a8(0)},
$S:0}
C.bPG.prototype={
$0(){return A.a4(this.a,!1).ib()},
$S:0}
C.bPH.prototype={
$2(d,e){var w=this.a
w=w.gkG()[w.f].e
return B.o.aK(w[d],w[e])},
$S:69}
C.bPI.prototype={
$2(d,e){var w=null,v=C.h1l(new A.au(A.aR(1/0,e.a,e.b),A.aR(1/0,e.c,e.d))),u=this.a
return A.aB(B.ca,new A.ex(A.b4(w,w,w,new C.bhU(u,u.pT$),B.ax),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bPF(u,v),w,w,w,w,!1,B.a5)},
$S:36}
C.bPF.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.giS().length
u=B.o.E(B.k.bj((t.a-s.a)/r/450*v),0,v-1)
w.cXk(w.giS()[u])}},
$S:22}
C.bPJ.prototype={
$1(d){var w=this.a
return w.gkG()[w.f].d[d]},
$S:81}
C.dlV.prototype={
$2(d,e){return 0},
$S:69}
C.bPq.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bPp())},
$S:0}
C.bPp.prototype={
$0(){},
$S:0}
C.bPo.prototype={
$0(){},
$S:0}
C.bPi.prototype={
$0(){},
$S:0}
C.bPj.prototype={
$0(){},
$S:0}
C.bPn.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.As},
$S:0}
C.bPm.prototype={
$1(d){var w=null,v=this.a.gqc(),u=A.d(d,w,w,w,w,w,w,D.aS8,w,w,w),t=v.gbjX(0)
return A.aB(B.ca,A.x(A.a([u,B.bA,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aSm,w,w,w)],x.p),B.E,w,B.e,B.j,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbpH(v),w,w,w,w,w,w,!1,B.a5)},
$S:141}
C.bPk.prototype={
$0(){return this.a.KE(this.b)},
$S:0}
C.bPl.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ib()},
$S:0}
C.bPh.prototype={
$0(){return A.a4(this.a,!1).ib()},
$S:0}
C.dW4.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dW5.prototype={
$1(d){return this.a},
$S:39}
C.dW6.prototype={
$0(){var w=this.a
return w.d=w.gSp().bcl(this.b)},
$S:0}
C.dW2.prototype={
$1(d){return new C.T3(this.a,null)},
$S:z+32}
C.dW3.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.dW1.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hk,w,w,w)
return A.em(A.a([A.bN(!1,E.aTK,w,w,!0,w,w,new C.dW_(d),w,w),A.bN(!1,D.fGv,w,w,!0,w,w,new C.dW0(d),w,w)],x.p),w,w,D.fn,v,w,w,w,w,D.ftn,w)},
$S:18}
C.dW_.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dW0.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dVZ.prototype={
$0(){var w=null,v=this.a.c.K(x.q).f,u=this.b
return v.T(A.b3(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dW7.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:14}
C.dW8.prototype={
$0(){var w=this.a,v=this.b,u=C.bBX(v,10,w.r,!1)
return w.u5(C.h9Q(w.a.d,"kahoot",u,w.gb46(),v.b,"Family Kahoot",v.a))},
$S:0}
C.dW9.prototype={
$0(){var w=this.a
return w.u5(new C.akS(this.b,w.a.d,w.r,null))},
$S:0}
C.dWa.prototype={
$0(){var w=this.a
return w.u5(new C.aj4(this.b,w.a.d,w.r,null))},
$S:0}
C.dWd.prototype={
$0(){var w=this.a
return w.u5(new C.aty(this.b,w.a.d,w.r,null))},
$S:0}
C.dWe.prototype={
$0(){var w=this.a
return w.u5(new C.axt(this.b,w.a.d,w.r,null))},
$S:0}
C.dWf.prototype={
$0(){var w=this.a
return w.u5(new C.akV(this.b,w.a.d,w.r,null))},
$S:0}
C.dWg.prototype={
$0(){var w=this.a
return w.u5(new C.akZ(this.b,w.a.d,w.r,null))},
$S:0}
C.dWh.prototype={
$0(){var w=this.a
return w.u5(new C.al0(this.b,w.a.d,w.r,null))},
$S:0}
C.dWi.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.cXE()
return v.u5(C.h9Q(v.a.d,"creator_"+u.a,w,v.gb46(),"A game by the family",t,this.c.a))},
$S:0}
C.dWj.prototype={
$0(){return this.a.Or(this.b)},
$S:0}
C.dWk.prototype={
$0(){return this.a.Xf(0,this.b)},
$S:0}
C.dWb.prototype={
$0(){return this.a.Or(null)},
$S:0}
C.dWc.prototype={
$0(){return this.a.K(x.q).f.T(D.f7o)},
$S:0}
C.bPC.prototype={
$0(){var w=this.a
w.d=D.aXE
w.z=3},
$S:0}
C.bPD.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a4(0)
w.aNY()}else w.m(new C.bPB(w))},
$S:11}
C.bPB.prototype={
$0(){return this.a.z--},
$S:0}
C.bPs.prototype={
$0(){var w=this.a
w.d=D.aaP
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bPt.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bPr(w))
if(w.as<=0){d.a4(0)
w.b42(-1)}},
$S:11}
C.bPr.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bPy.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.VC},
$S:0}
C.bPz.prototype={
$0(){return this.a.e++},
$S:0}
C.bPv.prototype={
$0(){var w=this.a
w.d=D.aXF
w.ay=this.b},
$S:0}
C.bPw.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bPA.prototype={
$2(d,e){return B.o.aK(e.b,d.b)},
$S:1938}
C.bPx.prototype={
$0(){return this.a.KE(this.b)},
$S:0}
C.bPu.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ib()},
$S:0}
C.bP2.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.ax()
s=A.a([new A.as(new A.bb(s,B.b4,B.aO),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.M)(t),++v){u=t[v]
s.push(new A.as(new A.bb(u,B.b4,B.aO),r))}return s},
$S:1939}
C.bP3.prototype={
$0(){return this.a.gCF().c.push(C.fWb(null,0,20,""))},
$S:0}
C.bPd.prototype={
$1(d){var w=null
return A.bu(w,new A.b5(4,A.m(12),B.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dt,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.Uz,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:266}
C.bPc.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gCF().c,m=this.b,l=n[m],k=o.cb6(l),j=B.c.j(0.06),i=A.m(18),h=A.J(B.aZ,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.JZ,p,p,p),B.b2],g)
if(n.length>1)f.push(A.aJ(p,p,p,p,B.aoO,p,p,p,new C.bP7(o,m),p,p,p,p,p,p))
n=J.a5(k)
m=this.c
f=A.a([A.B(f,B.m,p,B.e,B.j,0,p,p),A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bP8(l),p,p,p,!1,p,p,!1,p,!0,p,B.ab,p,p,p,p,p,p,p,p,p,p,p,B.df,!0,B.a3,p,B.ao,p,p,p,p),B.O],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aAn[v]
t=D.aA9[v]
s=v+1
f.push(new A.D(B.eG,new A.cc(B.aN,B.e,B.j,B.m,p,B.p,p,0,A.a([new A.y(u,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p),B.ac,new A.bA(1,B.bd,A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bP9(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ab,p,p,p,p,p,p,p,p,p,p,p,B.df,!0,B.a3,p,B.ao,p,p,p,p),p),new Ar.OH(v,l.c,new C.bPa(o,l),p,!1,D.lr,p,p,p,p,p,!1,!1,p,K.aY2,p,p,p,p,p,w)],g),p),p))}f.push(D.fyK)
f.push(B.am)
n=A.a([D.fst,B.ac],g)
for(r=0;r<3;++r){q=D.c82[r]
n.push(new A.D(B.fx,A.j0(p,p,p,new A.y(""+q+"s",p,p,p,p,p,p,p,p,p,p,p),p,new C.bPb(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.B(n,B.m,p,B.e,B.j,0,p,p))
return A.p(p,A.x(f,B.E,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.n),p,p,p,B.kD,B.bf,p,p,p)},
$S:169}
C.bP7.prototype={
$0(){var w=this.a
return w.m(new C.bP6(w,this.b))},
$S:0}
C.bP6.prototype={
$0(){return B.d.cG(this.a.gCF().c,this.b)},
$S:0}
C.bP8.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bP9.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bPa.prototype={
$1(d){return this.a.m(new C.bP5(this.b,d))},
$S:190}
C.bP5.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bPb.prototype={
$1(d){return this.a.m(new C.bP4(this.b,this.c))},
$S:8}
C.bP4.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dXK.prototype={
$0(){var w=this.a
w.w1()
w.a.bt()
w.a.q4()},
$S:0}
C.dXJ.prototype={
$0(){var w=this.a
w.w1()
w.a.bt()
w.a.q4()},
$S:0}
C.dXM.prototype={
$0(){var w=this,v=w.b
if(J.cK(v)||J.cq(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dXN.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dXO.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dXI.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dXL.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.dXQ.prototype={
$0(){this.a.ON()
return null},
$S:0}
C.dXP.prototype={
$0(){return this.a.EE(this.b)},
$S:0}
C.dXa.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bN(!1,B.di,w,w,!0,w,w,new C.dX8(d),w,w),r=A.bp(B.bP,w,w,w,w,w,w,w,w,w,w,w)
return A.em(A.a([s,A.bI(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dX9(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.dX8.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dX9.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dXb.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cJz(this.b)},
$S:0}
C.dX5.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aTo(w.b,w.c,w.d)},
$S:9}
C.dWx.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.dWy.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dWP.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.GK(t.a.c),$async$$0)
case 2:s=r.pP(q.dG(e,new C.dWN(t)))
if(s!=null&&t.c!=null)t.m(new C.dWO(t,s))
t.a.bt()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dWN.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.dWO.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dWQ.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.dWR.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dX4.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cKm(C.hpp(w),w)},
$S:0}
C.dWM.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.Vp(u,w,C.aPi(u,w),new C.dWL(v),null)},
$S:z+37}
C.dWL.prototype={
$1(d){return this.blk(d)},
blk(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.dWK(s,d))
w=3
return A.b(s.u1(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:502}
C.dWK.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.bcl(this.b)},
$S:0}
C.dX1.prototype={
$1(d){return d.as},
$S:z+1}
C.dX2.prototype={
$1(d){var w=this
return new A.dY(new C.dX0(w.a,w.b,w.c,w.d,w.e),null)},
$S:20}
C.dX0.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.e2:B.c,h=A.m(26),g=A.J(B.bP.j(0.5),B.r,1.5),f=A.p(k,D.bOm,B.f,k,k,new A.o(B.bP.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.au,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a2,k,k,k,A.l(k,k,j?B.br:B.bm,k,k,k,k,k,k,k,k,12.5,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.j,0,B.p),1)
f=A.B(A.a([f,B.bc,a0,A.aJ(k,k,k,k,A.X(B.cx,j?B.br:B.bm,k,k,k,k),k,k,k,new C.dWV(a1),k,k,k,k,k,k)],w),B.m,k,B.e,B.j,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.br:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.M)(v),++s){r=v[s]
q=t.a===r?B.bP:B.bP.j(0.1)
p=new A.aQ(20,20)
o=t.a===r
n=new A.ay(B.bP,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bP
a0.push(A.aB(k,A.dd(k,new A.y(m,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k),k,k,B.b7,new A.o(q,k,new A.bK(n,n,n,n),new A.bk(p,p,p,p),k,k,B.n),B.hp,k,k,k,B.BE,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.dWW(t,a2,r),k,k,k,k,k,k,!1,B.a5))}a0=A.bW(B.bE,a0,B.bq,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c_9,new A.D(D.bzf,f,k),new A.D(D.bz6,e,k),new A.D(B.u3,a0,k),new A.D(W.akj,A.d(v,k,k,k,k,k,k,A.l(k,k,j?B.br:B.bm,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(A2.amH,j?B.br:B.bm,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bz8,A.B(A.a([a0,B.as,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.au,k,k,k,k,k,k,k,k,k,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.Y2(k,B.bP,k,k,!1,B.y,k,k,k,k,k,k,new C.dWX(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.m,k,B.e,B.j,0,k,k),k))}f.push(B.aA)
j=A.m(20)
e=A.a([new A.ac(0,B.G,B.aC.j(0.35),B.j_,12)],x.V)
f.push(A.aB(k,A.p(k,A.B(A.a([D.fsP,B.bc,D.bDm,D.bP2],w),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.c2S,B.n),k,k,k,B.hI,B.bF,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.dWY(t,a1),k,k,k,k,k,k,!1,B.a5))
f.push(new A.D(B.vW,A.B(A.a([A.E(A.dS(B.di,new C.dWZ(a1),k),1),B.as,A.E(A.bI(L.aUa,new C.dX_(t,a1),A.bp(B.bP,k,k,k,k,k,B.cj,k,k,k,k,k)),1)],w),B.m,k,B.e,B.j,0,k,k),k))
return A.bn(!0,A.p(k,A.cd(A.x(f,B.E,k,B.e,B.Q,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.aq,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.Bz,k,k,k,k),!0,!1,B.af,!0,!0)},
$S:87}
C.dWV.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dWW.prototype={
$0(){return this.b.$1(new C.dWU(this.a,this.c))},
$S:0}
C.dWU.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.dWX.prototype={
$1(d){var w=this.a
w.m(new C.dWS(w,d))
this.b.$1(new C.dWT())},
$S:8}
C.dWS.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dWT.prototype={
$0(){},
$S:0}
C.dWY.prototype={
$0(){var w=this.a.a
A.a4(this.b,!1).O(new A.aGg(!0,w))
return null},
$S:0}
C.dWZ.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dX_.prototype={
$0(){var w=this.a.a
A.a4(this.b,!1).O(new A.aGg(!1,w))
return null},
$S:0}
C.dX3.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cK9(this.b.b)
w.r.a8(0)},
$S:0}
C.dWl.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.ahZ(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hiW(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.dWm.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aEh(w)},
$S:0}
C.dXd.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.adh(this.b,w,this.c,null)},
$S:z+39}
C.dX7.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.e2:B.c,t=A.m(20),s=A.X(B.lD,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.au,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.br:B.bm,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ad,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.br:B.bm,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.x(p,B.m,w,B.e,B.Q,0,B.p)
return A.em(A.a([A.bI(D.fKc,new C.dX6(d),A.bp(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.b8,w,u,v,w,s,w,new A.b7(t,B.a0),r,w)},
$S:18}
C.dX6.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dWn.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dWo.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dWp.prototype={
$1(d){return d.a},
$S:z+8}
C.dWq.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.M)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hU(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aEh(w)},
$S:0}
C.dWu.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.ahZ(q)
w=A.T(q).k("Z<1>")
q=A.C(new A.Z(q,new C.dWs(r),w),w.k("K.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hiW(v.e,null,r,v.f,v.r,new C.dWt(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.dWt.prototype={
$0(){return this.a.aan(this.b)},
$S:0}
C.dWs.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dWv.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("N<1,hU>")
w=A.C(new A.N(w,new C.dWr(this.b),v),v.k("ak.E"))
u.d=t.aEh(w)},
$S:0}
C.dWr.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.dXc.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dWH.prototype={
$1(d){return d.length!==0},
$S:3}
C.dWI.prototype={
$1(d){var w=this
return new A.dY(new C.dWG(w.a,w.b,w.c,w.d),null)},
$S:20}
C.dWG.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.e2:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.au,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.br:B.bm,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ad],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.br:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.N(o,new C.dWC(u,e,o),A.T(o).k("N<1,v>")))
p.push(B.O)
u=w.d
p.push(A.aN(v,B.Z,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bu(v,new A.b5(4,A.m(12),B.dk),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ak,v,v,v,v,v,B.mi,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ab,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a3,v,B.ao,v,v,v,v))
p=A.x(p,B.aj,v,B.e,B.Q,0,B.p)
t=w.a
return A.em(A.a([A.bN(!1,B.di,v,v,!0,v,v,new C.dWD(d),v,v),A.bI(B.K9,new C.dWE(t,u,o,e),A.bp(B.bP,v,v,v,v,v,v,v,v,v,v,v)),A.bI(D.fx8,new C.dWF(t,u,o,d),A.bp(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a7(360,v,p,v),v,v,v,v,r,v)},
$S:186}
C.dWC.prototype={
$1(d){var w=null
return A.dL(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.au,w,w,w,w,w,w,w,w,w,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aJ(w,w,w,w,D.bX1,w,w,w,new C.dWB(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1940}
C.dWB.prototype={
$0(){return this.a.$1(new C.dWz(this.b,this.c))},
$S:0}
C.dWz.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dWD.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dWE.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dWA(w.c,u))
v.bP(0,B.c9)}},
$S:0}
C.dWA.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dWF.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a4(w.d,!1).O(!0)},
$S:0}
C.dWJ.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cKO(this.b,D.u6,C.GI(v,w.a.c))},
$S:0}
C.dXk.prototype={
$1(d){return d.as},
$S:z+1}
C.dXl.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iR(this.b,w)},
$S:0}
C.dXm.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.ie9(v)
return w.W6(v==null?null:v.a)},
$S:0}
C.dXn.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hR1(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aR(1/0,e.a,e.b)
s=A.aR(1/0,e.c,e.d)
l.csq(new A.au(u,t),v.gbj2(),new A.au(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cWn:D.cUD
q=A.J(s?B.dt:D.bfq,B.r,1)
p=A.m(22)
o=A.bT(0,A.b4(m,m,m,new C.be3(s,m),B.ax),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.by(p,new A.an(B.a_,m,B.aa,B.t,A.a([o,A.bT(0,A.uF(new A.Q(n,n,n,n),new A.a7(u,t,new C.beZ(l.d,v,l.f,w,new C.dXg(l),l.gcci(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bwp(s,new C.dXh(l,e),new C.dXi(l,e),new C.dXj(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a9(B.b3,B.b6,B.x,r,m,m),B.n),m,m,m,Z.ajq,m,m,m,m)},
$S:231}
C.dXg.prototype={
$1(d){var w=this.a
w.m(new C.dXe(w,d))},
$S:2}
C.dXe.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.M(0,v)},
$S:0}
C.dXh.prototype={
$0(){var w=this.b
return this.a.baz(1.25,new A.au(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.dXi.prototype={
$0(){var w=this.b
return this.a.baz(0.8,new A.au(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.dXj.prototype={
$0(){var w=this,v=w.b
return w.a.aTo(new A.au(A.aR(1/0,v.a,v.b),A.aR(1/0,v.c,v.d)),new A.au(w.c,w.d),w.e.gbj2())},
$S:0}
C.dXo.prototype={
$0(){var w=this.a
return w.m(new C.dXf(w))},
$S:0}
C.dXf.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dWw.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fG(new A.fB(s.c)),$async$$0)
case 2:t.xX("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dbr.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.biI(u,C.htC(v.c,u),new C.dbq(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dbq.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dbs.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.blV(d.d,d.c,u.f.t(0,d.a),new C.dbp(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dbp.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fwA.prototype={
$1(d){var w,v=d.e
if(this.a.aj(0,v))return v
v=this.b
w=A.T(v)
return A.pP(new A.cQ(new A.Z(v,new C.fwB(d),w.k("Z<1>")),new C.fwC(),w.k("cQ<1,n>")))},
$S:z+19}
C.fwB.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fwC.prototype={
$1(d){return d.a},
$S:z+8}
C.fwy.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fwz.prototype={
$1(d){return d.b},
$S:z+8}
C.fwF.prototype={
$1(d){var w,v=d.e
if(this.a.aj(0,v))return v
v=this.b
w=A.T(v)
return A.pP(new A.cQ(new A.Z(v,new C.fwG(d),w.k("Z<1>")),new C.fwH(),w.k("cQ<1,n>")))},
$S:z+19}
C.fwG.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fwH.prototype={
$1(d){return d.a},
$S:z+8}
C.fwD.prototype={
$1(d){var w,v=A.eC([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.aj(0,w)&&v.M(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fwE.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dbu.prototype={
$0(){return this.a},
$S:z+46}
C.dbL.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.aj(0,d)},
$S:272}
C.dbD.prototype={
$2(d,e){var w=this.a.c3(0,d,new C.dbE()),v=J.a5(w)
if(!v.t(w,e))v.M(w,e)},
$S:120}
C.dbE.prototype={
$0(){return A.a([],x.s)},
$S:742}
C.dbC.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f0(w,e)
return w===!0},
$S:301}
C.dbv.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dbB.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dbA.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.M(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aV(v==null?D.CO:v)
u=1
while(v.C())u+=s.$2(v.gR(v).a,e)
v=s.b.h(0,d)
v=J.aV(v==null?B.Z:v)
while(v.C()){t=v.gR(v)
if(e.t(0,t))continue
e.M(0,t)
t=w.h(0,t)
t=J.aV(t==null?D.CO:t)
while(t.C())u+=s.$2(t.gR(t).a,e)}return u},
$S:1942}
C.dbw.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dbF.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.M(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aV(u==null?B.Z:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gR(u)
if(a8.t(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.M(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aV(t==null?D.CO:t)
while(t.C()){r=t.gR(t)
if(r.a!==a9&&!B.d.b5(w,new C.dbG(r)))w.push(r)}}B.d.bu(w,new C.dbH(a8))
B.d.aW(w,new C.dbI())
q=C.hR0(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.M)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eLe],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.boZ(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1943}
C.dbG.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dbH.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.dbI.prototype={
$2(d,e){return B.o.aK(d.Q,e.Q)},
$S:z+7}
C.dbJ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a5(n),v=o.c,u=-1/0,t=0;t<w.gL(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a6(v).k("bc<2>")).cI(0,0,B.pE)+88-w.gI(n).a}else u=0
for(w=J.a5(n),v=o.c,t=0;t<w.gL(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:655}
C.dbK.prototype={
$1(d){return 16+d*156},
$S:249}
C.dbt.prototype={
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
t.n(0,d,new C.G0(r,new A.t(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.G0(s,new A.t(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.G0(s,new A.t(e,v)))}t=o.r.h(0,d)
t=J.aV(t==null?B.Z:t)
s=o.w
while(t.C()){r=t.gR(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Kk(d,new A.t(e+t,w),s,s.length))}},
$S:193}
C.dbx.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aJn(new A.t(v.a,v.b+28),new A.t(w.a,w.b+28),!0,null))},
$S:120}
C.dby.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dbz.prototype={
$2(d,e){return B.k.aK(d.a,e.a)},
$S:743}
C.dbM.prototype={
$2(d,e){return B.k.aK(d.a,e.a)},
$S:743}
C.dbN.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:467}
C.dbO.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:189}
C.dbP.prototype={
$1(d){return d>=0.5},
$S:114}
C.fdu.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hc(A.aM(!1,v,!0,new A.a7(38,38,A.X(d,this.a.c?B.c:B.cm,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1945}
C.eP5.prototype={
$1(d){var w=null,v=A.m(8),u=B.bP.j(0.12),t=A.m(8)
return new A.D(B.nl,A.aM(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fiM,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.Np,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eP4(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eP4.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.drA.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.drz.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nD,B.L,w,w)
return A.em(A.a([A.bN(!1,B.di,w,w,!0,w,w,new C.drx(d),w,w),A.bN(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.mv,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dry(d),w,w)],x.p),B.b8,B.BB,w,u,D.bA9,w,D.bC6,new A.b7(v,B.a0),w,w)},
$S:18}
C.drx.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dry.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.drJ.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.drK.prototype={
$1(d){var w=this.a
return w.m(new C.drI(w,d))},
$S:z+49}
C.drI.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.drL.prototype={
$1(d){var w=null
return A.qu(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.drO.prototype={
$1(d){var w=this.a
return w.m(new C.drH(w,d))},
$S:34}
C.drH.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.drN.prototype={
$1(d){var w=null
return A.qu(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.drP.prototype={
$1(d){var w=this.a
return w.m(new C.drG(w,d))},
$S:34}
C.drG.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.drQ.prototype={
$0(){var w=this.a
return w.m(new C.drF(w))},
$S:0}
C.drF.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.drR.prototype={
$0(){var w=this.a
return w.m(new C.drE(w))},
$S:0}
C.drE.prototype={
$0(){return++this.a.at},
$S:0}
C.drS.prototype={
$0(){var w=this.a
return w.m(new C.drD(w))},
$S:0}
C.drD.prototype={
$0(){return--this.a.ax},
$S:0}
C.drT.prototype={
$0(){var w=this.a
return w.m(new C.drC(w))},
$S:0}
C.drC.prototype={
$0(){return++this.a.ax},
$S:0}
C.drU.prototype={
$1(d){var w=this.a
return w.m(new C.drB(w,d))},
$S:8}
C.drB.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.drM.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.drV.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bP.j(0.18)
else w=q.c.a?B.e2:B.c
v=A.m(12)
if(p)u=B.bP
else u=(q.c.a?B.e7:B.bO).j(0.85)
u=A.J(u,B.r,p?1.5:1)
if(p)t=B.bP
else t=q.c.a?B.br:B.bm
t=A.X(f,t,r,r,r,18)
if(p)s=B.bP
else s=q.c.a?B.br:B.bm
return A.E(A.aG(!1,B.a1,!0,r,A.aM(!1,o,!0,A.dd(r,A.x(A.a([t,B.av,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.b7,new A.o(w,r,u,v,r,r,B.n),B.eM,r,r,r,B.jM,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.drW(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ai),1)},
$S:z+51}
C.drW.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.ds4.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.cbO.prototype={
$2(d,e){return new A.bz(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:95}
C.cbV.prototype={
$1(d){return d.ag()},
$S:z+5}
C.cbW.prototype={
$2(d,e){var w=J.b6(e,new C.cbU(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bz(d,w,x.d2)},
$S:z+53}
C.cbU.prototype={
$1(d){return d.ag()},
$S:z+12}
C.cbQ.prototype={
$1(d){return C.al3(A.a2(d,x.N,x.z))},
$S:z+9}
C.cbR.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cbS.prototype={
$1(d){return C.h9P(A.a2(d,x.N,x.z))},
$S:z+11}
C.cbT.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cc_.prototype={
$1(d){return new A.aGs(d.f.length,d.a,d.b)},
$S:z+55}
C.cc0.prototype={
$2(d,e){return B.a.aK(d.c,e.c)},
$S:565}
C.cbX.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cbY.prototype={
$1(d){return d.cJM(C.GI(d,this.a))},
$S:z+85}
C.dXx.prototype={
$1(d){return C.uc(d,this.a.a.c)},
$S:z+3}
C.dXy.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dXC.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dXD.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dXu.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b_A(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yw("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pd(r.c,r.e),$async$$0)
case 4:s.yw(p)
w=5
return A.b(s.JM(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dXv.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b_A(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yw("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pd(r.c,r.e),$async$$0)
case 4:s.yw(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dXw.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Vs(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.yw("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.yw("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.yw("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.JM(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.yw(B.a.ek(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dXB.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b_z(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.yw("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a4(r,!1).cg(A.e_(new C.dXA(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pd(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dXA.prototype={
$1(d){var w=this.b
return new C.a_x(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.dXz.prototype={
$1(d){return D.hhZ},
$S:z+58}
C.dXF.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dXG.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dXE(w,d)
return new A.D(B.d3,new C.bf2(this.b,d.c,d.a,w,null),null)},
$S:1946}
C.dXE.prototype={
$0(){return this.a.XS(this.b.b)},
$S:0}
C.dXp.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dXq.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dXr.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dXs.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dXt.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dXH.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.cU(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a4(this.b,!1).O(s)
return}},
$S:187}
C.dJm.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dJn.prototype={
$0(){return B.d.gI(D.a4K)},
$S:z+60}
C.dJo.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b4(A.at(A.X(this.b.d,B.c.j(0.95),w,w,D.d1X,44),w,w,w),w,w,new C.bjO(u,t,v,w),B.ax)},
$S:63}
C.fN0.prototype={
$1(d){return A.oZ(new C.fN_(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:134}
C.fN_.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.e2:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rR,24)],x.V),o=r?B.e7:B.bO
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bP.j(0.18)],x.O)
w=A.p(t,D.bRq,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a9(B.a4,B.a8,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.au,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.W,o,new A.D(E.ako,A.B(A.a([w,B.bc,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.br:B.bm,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.E(A.iy(!0,t,e,B.y,D.f5t,new C.fMZ(this.b,s),20,B.ajY,t,B.ah,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kT,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:113}
C.fMZ.prototype={
$2(d,e){var w=null,v=D.a4K[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.J(s?B.e7:B.bO,B.r,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.es,8)],x.V),p=A.m(15),o=A.E(new C.a6o(v.a,!0,w),1),n=s?B.jH:B.j8,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aP:B.au,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aG(!1,B.a1,!0,w,A.aM(!1,u,!0,A.eJ(A.by(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.br:B.bm,w,w,w,w,w,w,w,w,10,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.l3,w,w,w)],l),B.aj,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fMY(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ai)},
$S:79}
C.fMY.prototype={
$0(){A.a4(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cjR.prototype={
$0(){return this.a.agp(this.b)},
$S:0}
C.fMn.prototype={
$1(d){return D.hd5},
$S:z+61}
C.fTS.prototype={
$1(d){var w=this
return new C.a1j(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.fMs.prototype={
$1(d){return new C.Za(this.a,null)},
$S:z+63}
C.fMr.prototype={
$1(d){return D.he4},
$S:z+64}
C.d38.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.d39.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d37(w,d))},
$S:34}
C.d37.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d3a.prototype={
$1(d){return this.a.Km()},
$S:2}
C.d3b.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.d34.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.d35.prototype={
$1(d){return this.a.Km()},
$S:2}
C.d36.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.cBA.prototype={
$0(){},
$S:0}
C.cBG.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.cBH.prototype={
$0(){return this.a.aOP(-1)},
$S:0}
C.cBI.prototype={
$1(d){return this.a.m(new C.cBF())},
$S:2}
C.cBF.prototype={
$0(){},
$S:0}
C.cBJ.prototype={
$0(){return this.a.aOP(1)},
$S:0}
C.cBK.prototype={
$1(d){return this.a.m(new C.cBE())},
$S:2}
C.cBE.prototype={
$0(){},
$S:0}
C.cBL.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.e7:B.bO
return A.uv(u,u,B.b_,r,u,new C.cBD(t,d),B.yh,s,w,u,new A.ay(v,1,B.r,-1),B.cd)},
$S:1947}
C.cBD.prototype={
$1(d){var w=this.a
return w.m(new C.cBB(w,this.b))},
$S:8}
C.cBB.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cBM.prototype={
$1(d){return this.a.m(new C.cBC())},
$S:2}
C.cBC.prototype={
$0(){},
$S:0}
C.cBN.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fcO.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a4(this.b,!1).O(w)},
$S:2}
C.fcP.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fcQ.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a4(this.b,!1).O(w)},
$S:0}
C.fcM.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbzS()
w=w.e
s=A.m(B.o.E(v-1,0,v))
return A.b4(new A.D(D.bC5,new A.ex(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bwc(p,v,this.b.a,u,t,r),r,r,B.ax)},
$S:63}
C.fcN.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dw.av(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.ar(B.aV,B.bP,w)
s.toString
s=A.a([B.b_,s,B.aV],x.O)
return A.aG(!1,B.a1,!0,p,A.aM(!1,v,!0,A.eJ(D.ejM,r,new A.o(r,r,A.J(B.c.j(0.4),B.r,1.5),u,r,new A.a9(new A.df(-1.2+t,-0.5),new A.df(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ai)},
$S:130}
C.fKS.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:71}
C.eMf.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eM6.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eM7.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eMd.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.dY(new C.eMc(w,this.b),null)},
$S:20}
C.eMc.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.e2:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.au,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eR(w,u,new A.D(B.akg,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.br:B.bm,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ad,C.hfL(new C.eM9(r,e),r.a),B.aA,A.B(A.a([A.E(A.dS(B.di,new C.eMa(d),w),1),B.as,A.E(A.bI(B.UV,new C.eMb(r,d),A.bp(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.aj,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d7,w,new A.b7(t,B.a0),w)},
$S:101}
C.eM9.prototype={
$1(d){return this.b.$1(new C.eM8(this.a,d))},
$S:34}
C.eM8.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eMa.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.eMb.prototype={
$0(){var w=this.a.a
A.a4(this.b,!1).O(w)
return null},
$S:0}
C.eMe.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.T2(this.b)},
$S:0}
C.eM1.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bcr(w)},
$S:0}
C.eM5.prototype={
$1(d){return this.blH(d)},
blH(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Lv(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iR(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eM4.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("Z<1>")
w=A.C(new A.Z(w,new C.eM3(this.b),v),v.k("K.E"))
u.d=t.bcr(w)},
$S:0}
C.eM3.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eMg.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iR(this.b,w)},
$S:0}
C.eMh.prototype={
$1(d){return this.a.bE_(d,this.b)},
$S:z+67}
C.eM2.prototype={
$0(){return this.a.aam(this.b)},
$S:0}
C.fTI.prototype={
$1(d){return new C.adC(this.a,this.b,this.c,null)},
$S:z+68}
C.eMj.prototype={
$0(){return this.a.a_D(this.b)},
$S:0}
C.eMk.prototype={
$0(){return this.a.Qk(this.b)},
$S:0}
C.eMl.prototype={
$0(){return this.a.Ez(this.b)},
$S:0}
C.eMm.prototype={
$0(){return this.a.a_E(this.b)},
$S:0}
C.eMi.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.eLX.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eLY.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eLZ.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.eM0.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qb(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eM_(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eM_.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eMJ.prototype={
$2(d,e){return d+e.gx8()},
$S:z+71}
C.eMF.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eMG.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eMq.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.e2:B.c,s=A.m(24),r=A.p(v,D.bRS,B.f,v,v,new A.o(B.aw.j(u?0.18:0.08),v,A.J(B.aw.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.au,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.br:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aP:B.au
u=u?B.e7:B.bO
w=x.p
return A.eR(v,t,new A.D(B.yg,A.x(A.a([r,B.aM,q,B.O,p,B.d8,A.B(A.a([A.E(A.dS(B.nH,new C.eMo(d),A.dg(v,v,v,v,v,v,v,v,v,o,v,v,B.fc,v,new A.b7(A.m(14),B.a0),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.as,A.E(A.bI(D.fO1,new C.eMp(d),A.bp(B.aw,v,v,v,v,v,B.fc,v,new A.b7(A.m(14),B.a0),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.d7,v,new A.b7(s,B.a0),v)},
$S:48}
C.eMo.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.eMp.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.eMz.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.e2:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fY,28)],x.V),g=k?D.d8U:B.a46,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aA,D.f_9,B.av,new A.bM(B.a4,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cw,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a9(B.az,B.aE,B.x,g,m,m),B.n),m,m,m,m,E.akl,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.br:B.bm,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.E(v.b5v(B.b5,B.jc,new C.eMw(v,d),l,"Camera import","Scan QR"),1),B.as,A.E(v.b5v(B.cC,R.yW,new C.eMx(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.br:B.bm,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aw.j(k?0.14:0.06)
q=A.m(16)
p=A.J(B.aw.j(0.28),B.r,1)
o=A.p(m,D.bRe,B.f,m,m,new A.o(B.aw.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bT,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.au,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.br:B.bm,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.j,0,B.p),1)
return A.bn(!0,new A.D(B.vT,A.p(m,A.x(A.a([g,new A.D(B.akh,A.x(A.a([w,B.W,u,B.bx,t,B.W,A.aG(!1,B.a1,!0,m,A.aM(!1,s,!0,A.p(m,A.B(A.a([o,B.bc,n,A.X(B.eD,k?B.br:B.bm,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bF,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eMy(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ai)],f),B.E,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.Q,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:26}
C.eMw.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).O(null)
w=2
return A.b(u.a.vD("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eMx.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).O(null)
w=2
return A.b(u.a.vD("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eMy.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).O(null)
w=2
return A.b(u.a.O4(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eMu.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.e2:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eZ,24)],x.V),k=o?B.e7:B.bO
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.br:B.bm
u=A.by(w,new A.a7(48,48,C.aQA(!0,A.m(12),48,P.O_,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aP:B.au,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.AZ(v.gx8())
s=x.p
r=this.a
return A.bn(!0,new A.D(B.vT,A.p(q,A.x(A.a([B.W,k,new A.D(D.ake,A.B(A.a([u,B.bc,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.br:B.bm,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.Bq,r.cmw(B.ur,B.aV,new C.eMs(d),p,"QR code or backup file","Transfer project"),r.b2w(!0,B.ec,B.aw,new C.eMt(d),p,"Remove from this device","Delete project"),B.W],s),B.m,q,B.e,B.Q,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:26}
C.eMs.prototype={
$0(){A.a4(this.a,!1).O("transfer")
return null},
$S:0}
C.eMt.prototype={
$0(){A.a4(this.a,!1).O("delete")
return null},
$S:0}
C.eMv.prototype={
$1(d){return this.blI(d)},
blI(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Lv(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vR(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eMM.prototype={
$0(){var w=this.a
w.a.bt()
w.m(new C.eML(w))},
$S:0}
C.eML.prototype={
$0(){return this.a.r++},
$S:0}
C.eMN.prototype={
$0(){var w=this.a
return w.m(new C.eMK(w))},
$S:0}
C.eMK.prototype={
$0(){return this.a.r++},
$S:0}
C.eMn.prototype={
$0(){var w=this.a.c
w.toString
return A.iR(w,null)},
$S:0}
C.eMr.prototype={
$0(){return this.a.cfO(this.b)},
$S:0}
C.eMI.prototype={
$0(){var w=this.a
return w.m(new C.eMH(w,this.b))},
$S:0}
C.eMH.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eMC.prototype={
$0(){return this.a.vD("scan")},
$S:0}
C.eMD.prototype={
$0(){return this.a.vD("file")},
$S:0}
C.eME.prototype={
$1(d){return this.a.cmx(d,this.b)},
$S:z+72}
C.eMB.prototype={
$0(){return this.a.ED(this.b)},
$S:0}
C.eMA.prototype={
$0(){return this.a.a07(this.b,this.c)},
$S:0}
C.cB_.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cAZ.prototype={
$1(d){return d.ag()},
$S:z+74}
C.cAX.prototype={
$1(d){return C.hzt(A.a2(d,x.N,x.z))},
$S:z+75}
C.cAY.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fvA.prototype={
$1(d){return d.y===D.kF},
$S:z+3}
C.fUs.prototype={
$1(d){return C.aPi(d,this.a)},
$S:z+3}
C.ftu.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bQ7.prototype={
$1(d){return!d.as},
$S:z+1}
C.bQ6.prototype={
$1(d){return d.ag()},
$S:z+23}
C.bQ3.prototype={
$1(d){return C.h9R(A.a2(d,x.N,x.z))},
$S:z+24}
C.bQ4.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bQ5.prototype={
$1(d){return J.k(d)},
$S:17}
C.fkq.prototype={
$2(d,e){return e.e.aK(0,d.e)},
$S:z+25}
C.fgg.prototype={
$1(d){return C.h02(A.a2(d,x.N,x.z))},
$S:z+79}
C.fgh.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fgi.prototype={
$2(d,e){return e.e.aK(0,d.e)},
$S:z+25}
C.fMe.prototype={
$1(d){return J.k(d)},
$S:17}
C.fMf.prototype={
$1(d){return d.a},
$S:z+81}
C.fMg.prototype={
$1(d){return d.length!==0},
$S:3}
C.fMh.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+10}
C.fMi.prototype={
$1(d){return d.T2(null).ag()},
$S:z+82}
C.fUq.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fw3.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fyS.prototype={
$1(d){return C.al3(A.a2(d,x.N,x.z))},
$S:z+9}
C.fyT.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fyU.prototype={
$2(d,e){return e.r.aK(0,d.r)},
$S:z+6}
C.fyV.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fyW.prototype={
$1(d){return C.uc(d,this.a)},
$S:z+3}
C.fM1.prototype={
$1(d){return C.uc(d,this.a)},
$S:z+3}
C.fUl.prototype={
$1(d){return C.al3(A.a2(d,x.N,x.z))},
$S:z+9}
C.fUm.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fUn.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fvL.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fvM.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fUw.prototype={
$1(d){return!d.as},
$S:z+1}
C.fvf.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fvg.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fvh.prototype={
$2(d,e){return B.o.aK(d.Q,e.Q)},
$S:z+7}
C.fTT.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fzG.prototype={
$1(d){return d.Q},
$S:z+15}
C.fLV.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fyP.prototype={
$1(d){return C.al3(A.a2(d,x.N,x.z))},
$S:z+9}
C.fyQ.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fyR.prototype={
$2(d,e){return e.r.aK(0,d.r)},
$S:z+6}
C.fLQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fgO.prototype={
$1(d){return d.length!==0},
$S:3}
C.fgP.prototype={
$1(d){return C.h9R(A.a2(d,x.N,x.z))},
$S:z+24}
C.fgQ.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fgR.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fgS.prototype={
$1(d){return d.length!==0},
$S:3}
C.fh4.prototype={
$2(d,e){return d.eW(new C.fh5(e))},
$S:1948}
C.fh5.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.c8},
$S:1949}
C.fh1.prototype={
$1(d){return C.hVH(d,this.a)},
$S:z+84}
C.fh2.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fh3.prototype={
$2(d,e){return e.r.aK(0,d.r)},
$S:z+6}
C.fl6.prototype={
$1(d){return d.a},
$S:z+56}
C.fl7.prototype={
$1(d){return d.length!==0},
$S:3}
C.fl8.prototype={
$2(d,e){return e.r.aK(0,d.r)},
$S:z+6}
C.fnQ.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fsO.prototype={
$1(d){return C.hlh(d,C.GI(d,this.a))},
$S:z+5}
C.fsP.prototype={
$1(d){return C.hli(d,C.GI(d,this.a))},
$S:z+5};(function aliases(){var w=C.aAi.prototype
w.bti=w.q
w=C.ayt.prototype
w.btd=w.q
w=C.aFF.prototype
w.btG=w.q
w=C.aAj.prototype
w.btj=w.q
w=C.aAl.prototype
w.btk=w.q
w=C.aAm.prototype
w.btl=w.q
w=C.aLJ.prototype
w.bw8=w.q
w=C.aNK.prototype
w.bym=w.q
w=C.aNL.prototype
w.byn=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aDh.prototype,"gcjr","cjs",28)
var r
w(r=C.aAh.prototype,"gcco","ccp",65)
v(r,"gaN3","ND",0)
v(r,"gcrK","AS",0)
v(r,"gbLJ","Oh",0)
v(r,"gcFR","yx",0)
v(r,"gclt","a0P",0)
v(r,"gbH9","O0",0)
v(r,"gbM8","Xk",0)
w(r,"gbR2","bR3",78)
v(r,"gbBw","zV",0)
v(C.aAk.prototype,"gcFN","Fv",0)
v(r=C.akT.prototype,"gbpJ","bpK",2)
v(r,"gbpC","bpD",2)
v(r,"gcGT","cGU",2)
u(r,"gq3","lh",0)
u(r=C.aj5.prototype,"geU","h9",2)
w(r,"gc8w","c8x",27)
u(C.atz.prototype,"gq3","lh",0)
v(r=C.axu.prototype,"gcSg","cSh",2)
u(r,"gq3","lh",0)
u(C.aJr.prototype,"gbpH","bpI",2)
v(C.al1.prototype,"gBm","cH3",2)
u(r=C.al_.prototype,"gcHI","cHJ",2)
u(r,"gq3","lh",0)
v(r=C.akW.prototype,"gboC","boD",2)
v(r,"gcMS","cMT",2)
u(r=C.akY.prototype,"geU","h9",2)
u(r,"gks","cGq",2)
v(r=C.akU.prototype,"gcGf","cGg",2)
u(r,"gbnz","jv",2)
v(r=C.aDQ.prototype,"gag1","vS",0)
v(r,"gcf3","a_Z",0)
v(r,"gaR8","I8",0)
v(r=C.aDN.prototype,"gcBX","a2Y",0)
v(r,"gag1","vS",0)
v(r,"gcpL","a1t",0)
v(r,"gceZ","b0K",2)
v(r,"gcg0","a0c",0)
w(r,"gcci","ccj",35)
v(r,"gbM0","Id",0)
v(r,"gcCY","cCZ",2)
v(r,"gc2J","Z0",0)
w(r,"gcaN","caO",36)
v(r,"gceN","ceO",2)
v(r=C.aCg.prototype,"gc8C","PU",0)
v(r,"gc8E","c8F",2)
v(r,"gbIE","a9Z",0)
v(r=C.aDP.prototype,"gbPv","XO",0)
v(r,"gc__","Yt",0)
v(r,"gcwb","a2l",0)
v(r,"gcsk","a1X",0)
v(C.aDO.prototype,"gcs2","ahL",0)
v(C.asN.prototype,"gcaL","a_B",0)
v(C.az1.prototype,"ga2H","Km",2)
v(C.az0.prototype,"ga2H","Km",2)
v(C.axI.prototype,"ga2H","Km",2)
v(r=C.aFg.prototype,"gb1V","QQ",0)
v(r,"gbAk","W0",0)
v(r,"gcfP","cfQ",2)
w(C.aFf.prototype,"gcbD","cbE",69)
t(C.aFh.prototype,"gaR2",0,0,null,["$1","$0"],["I7","bJV"],70,0,0)
s(C,"hsH","i4D",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aD,[C.aoB,C.us,C.nj,C.HS,C.aeO,C.Kc,C.ut,C.bQD,C.rY,C.bna,C.ala,C.acV,C.lg,C.bPe,C.asZ,C.zc,C.ajQ,C.M8,C.b8X,C.a94,C.bg6,C.aeV,C.ayI,C.aeJ,C.aJr,C.Kk,C.G0,C.bf0,C.aJn,C.apS,C.dbQ,C.lK,C.aTA,C.aTz,C.aRy,C.tZ,C.r9,C.ls,C.hU,C.kL,C.aHm])
u(A.hL,[C.fDt,C.fDs,C.fDu,C.fMU,C.frz,C.frA,C.frF,C.fBc,C.fBb,C.fBa,C.c5g,C.fNq,C.fNi,C.fNu,C.fvT,C.dK2,C.dJY,C.dJZ,C.dJB,C.dJx,C.dKh,C.dKi,C.dKb,C.dKc,C.dKj,C.dKk,C.fww,C.fyM,C.fyN,C.fM_,C.fUk,C.fvK,C.fMy,C.db2,C.dap,C.day,C.daP,C.dau,C.daA,C.dar,C.daE,C.daF,C.daD,C.daU,C.daT,C.dcO,C.dcP,C.dcQ,C.dbg,C.dbl,C.dbk,C.cJN,C.cJP,C.d2m,C.d2L,C.d2M,C.d2P,C.d2R,C.d2S,C.d2T,C.d2V,C.d2W,C.bOZ,C.bOT,C.fkO,C.fUd,C.fUe,C.fUf,C.fUa,C.fUg,C.fUh,C.fUi,C.fU9,C.fx3,C.fL4,C.ftv,C.fzF,C.bKf,C.fUC,C.fLx,C.bIu,C.bIp,C.bIr,C.bIq,C.cls,C.cln,C.clo,C.clm,C.clk,C.clp,C.cKR,C.cAp,C.cAs,C.cAq,C.cAt,C.cAu,C.eYZ,C.f7Z,C.bPL,C.bPF,C.bPJ,C.bPm,C.dW5,C.dW2,C.dW3,C.dW1,C.dW7,C.bPD,C.bPt,C.bPd,C.bPc,C.bP8,C.bP9,C.bPa,C.bPb,C.dXL,C.dXa,C.dX5,C.dWx,C.dWN,C.dWQ,C.dWM,C.dWL,C.dX1,C.dX2,C.dWX,C.dWl,C.dXd,C.dX7,C.dWn,C.dWo,C.dWp,C.dWu,C.dWs,C.dWr,C.dWH,C.dWI,C.dWC,C.dXk,C.dXg,C.dbr,C.dbs,C.fwA,C.fwB,C.fwC,C.fwy,C.fwz,C.fwF,C.fwG,C.fwH,C.fwD,C.fwE,C.dbL,C.dbB,C.dbw,C.dbG,C.dbH,C.dbK,C.dby,C.dbN,C.dbO,C.dbP,C.fdu,C.eP5,C.drz,C.drJ,C.drK,C.drL,C.drO,C.drN,C.drP,C.drU,C.drV,C.cbV,C.cbU,C.cbQ,C.cbR,C.cbS,C.cbT,C.cc_,C.cbX,C.cbY,C.dXx,C.dXA,C.dXz,C.dXG,C.dXH,C.dJm,C.fN0,C.fMn,C.fTS,C.fMs,C.fMr,C.d39,C.d3a,C.d35,C.cBI,C.cBK,C.cBL,C.cBD,C.cBM,C.fcO,C.fKS,C.eMd,C.eM9,C.eM5,C.eM3,C.eMh,C.fTI,C.eMq,C.eMz,C.eMu,C.eMv,C.eME,C.cAZ,C.cAX,C.cAY,C.fvA,C.fUs,C.ftu,C.bQ7,C.bQ6,C.bQ3,C.bQ4,C.bQ5,C.fgg,C.fgh,C.fMe,C.fMf,C.fMg,C.fMh,C.fMi,C.fUq,C.fw3,C.fyS,C.fyT,C.fyV,C.fyW,C.fM1,C.fUl,C.fUm,C.fUn,C.fvL,C.fvM,C.fUw,C.fvf,C.fvg,C.fTT,C.fzG,C.fLV,C.fyP,C.fyQ,C.fLQ,C.fgO,C.fgP,C.fgQ,C.fgR,C.fgS,C.fh5,C.fh1,C.fh2,C.fl6,C.fl7,C.fnQ,C.fsO,C.fsP])
u(A.aw,[C.aZ5,C.akR,C.aUQ,C.YQ,C.baF,C.PZ,C.a5z,C.tm,C.HU,C.beZ,C.biI,C.bwp,C.blV,C.adg,C.biH,C.adf,C.biG,C.aCh,C.aIp,C.adh,C.FX,C.bf_,C.acx,C.beY,C.bf2,C.aZ3,C.asN,C.adC])
u(A.mV,[C.bbh,C.bcu,C.bcl,C.aHh,C.bhM,C.bn9,C.aUV,C.bbi,C.aAg,C.baO,C.br7,C.bhU,C.bhk,C.bhs,C.bf1,C.be3,C.bjO,C.bwc])
u(A.jc,[C.fNn,C.fNo,C.fNp,C.fNg,C.fNh,C.fNs,C.fNt,C.dKe,C.dK0,C.dK3,C.dJI,C.dJJ,C.dJK,C.dJH,C.dJP,C.dJG,C.dJQ,C.dJR,C.dJF,C.dJS,C.dJE,C.dJT,C.dJD,C.dJU,C.dJv,C.dJw,C.dJC,C.dJV,C.dJA,C.dJW,C.dJz,C.dJL,C.dJy,C.dJM,C.dJu,C.dJN,C.dJO,C.dKf,C.dKg,C.dK4,C.dK5,C.dK6,C.dK7,C.dK8,C.dK9,C.dKa,C.dKm,C.dKd,C.fwx,C.dan,C.dal,C.dam,C.dao,C.db1,C.daR,C.daO,C.daq,C.daS,C.daw,C.dax,C.daz,C.daQ,C.dav,C.daB,C.daZ,C.daL,C.daK,C.daM,C.daN,C.daG,C.daI,C.daJ,C.daC,C.daV,C.daY,C.das,C.dat,C.dcN,C.dcM,C.dcL,C.dcK,C.dcR,C.dcJ,C.dcS,C.dbh,C.dbi,C.dbj,C.dbm,C.dbf,C.dbe,C.cJO,C.d2l,C.d2y,C.d2x,C.d2N,C.d2w,C.d2O,C.d2v,C.d2u,C.d2Q,C.d2t,C.d2G,C.d2F,C.d2X,C.bOS,C.bP1,C.bOU,C.bOV,C.bOY,C.bOX,C.bP_,C.bP0,C.bOW,C.bOQ,C.bOR,C.bQv,C.bQw,C.bQx,C.bQy,C.bQz,C.bQA,C.bQB,C.fUc,C.fL5,C.bIt,C.bIo,C.bIm,C.bIn,C.bIl,C.clu,C.clv,C.clt,C.clw,C.cly,C.clz,C.clA,C.clq,C.cAo,C.cAx,C.cAy,C.cAz,C.cAw,C.cAA,C.cAB,C.cAC,C.cAD,C.cAr,C.cAv,C.bQ0,C.bQ_,C.bPY,C.bPW,C.bPX,C.bPT,C.bPU,C.bPV,C.bPZ,C.bPS,C.eZ_,C.eZ0,C.eZ1,C.eZ2,C.eZ3,C.bPP,C.bPQ,C.bPR,C.bPK,C.bPM,C.bPN,C.bPO,C.bPG,C.bPq,C.bPp,C.bPo,C.bPi,C.bPj,C.bPn,C.bPk,C.bPl,C.bPh,C.dW4,C.dW6,C.dW_,C.dW0,C.dVZ,C.dW8,C.dW9,C.dWa,C.dWd,C.dWe,C.dWf,C.dWg,C.dWh,C.dWi,C.dWj,C.dWk,C.dWb,C.dWc,C.bPC,C.bPB,C.bPs,C.bPr,C.bPy,C.bPz,C.bPv,C.bPw,C.bPx,C.bPu,C.bP2,C.bP3,C.bP7,C.bP6,C.bP5,C.bP4,C.dXK,C.dXJ,C.dXM,C.dXN,C.dXO,C.dXI,C.dXQ,C.dXP,C.dX8,C.dX9,C.dXb,C.dWy,C.dWP,C.dWO,C.dWR,C.dX4,C.dWK,C.dWV,C.dWW,C.dWU,C.dWS,C.dWT,C.dWY,C.dWZ,C.dX_,C.dX3,C.dWm,C.dX6,C.dWq,C.dWt,C.dWv,C.dXc,C.dWB,C.dWz,C.dWD,C.dWE,C.dWA,C.dWF,C.dWJ,C.dXl,C.dXm,C.dXe,C.dXh,C.dXi,C.dXj,C.dXo,C.dXf,C.dWw,C.dbq,C.dbp,C.dbu,C.dbE,C.dbv,C.eP4,C.drA,C.drx,C.dry,C.drI,C.drH,C.drG,C.drQ,C.drF,C.drR,C.drE,C.drS,C.drD,C.drT,C.drC,C.drB,C.drM,C.drW,C.ds4,C.dXy,C.dXC,C.dXD,C.dXu,C.dXv,C.dXw,C.dXB,C.dXF,C.dXE,C.dXp,C.dXq,C.dXr,C.dXs,C.dXt,C.dJn,C.fMY,C.cjR,C.d38,C.d37,C.d3b,C.d34,C.d36,C.cBA,C.cBG,C.cBH,C.cBF,C.cBJ,C.cBE,C.cBB,C.cBC,C.cBN,C.fcP,C.fcQ,C.eMf,C.eM6,C.eM7,C.eM8,C.eMa,C.eMb,C.eMe,C.eM1,C.eM4,C.eMg,C.eM2,C.eMj,C.eMk,C.eMl,C.eMm,C.eMi,C.eLX,C.eLY,C.eLZ,C.eM0,C.eM_,C.eMF,C.eMG,C.eMo,C.eMp,C.eMw,C.eMx,C.eMy,C.eMs,C.eMt,C.eMM,C.eML,C.eMN,C.eMK,C.eMn,C.eMr,C.eMI,C.eMH,C.eMC,C.eMD,C.eMB,C.eMA])
u(A.ag,[C.aoN,C.T2,C.Zy,C.ZC,C.ZA,C.Z8,C.akS,C.aj4,C.aty,C.axt,C.al0,C.akZ,C.akV,C.Vp,C.akX,C.T3,C.apV,C.apP,C.a_c,C.apT,C.a_x,C.a_y,C.a6o,C.Za,C.Z9,C.YH,C.a1j,C.FN,C.axB,C.asM,C.asG,C.asL,C.Ol])
u(A.ah,[C.aDh,C.beT,C.aAh,C.bfg,C.aAk,C.bcs,C.aAi,C.ayt,C.aFF,C.axu,C.aAm,C.aAl,C.aAj,C.bk6,C.akY,C.akU,C.aDQ,C.aDN,C.aCg,C.aDP,C.aDO,C.bk7,C.aLJ,C.az1,C.az0,C.axI,C.bwf,C.aNK,C.aNL,C.aFg,C.blq,C.aFf,C.bxW])
u(A.kd,[C.dK_,C.dK1,C.dJX,C.dKl,C.fyO,C.bOP,C.db0,C.db_,C.daH,C.daW,C.daX,C.dbn,C.bQC,C.bQu,C.bPf,C.bPg,C.fUb,C.fUB,C.bIs,C.clx,C.clr,C.cll,C.eZ4,C.bPE,C.bPH,C.bPI,C.dlV,C.bPA,C.dX0,C.dWG,C.dXn,C.dbD,C.dbC,C.dbA,C.dbF,C.dbI,C.dbJ,C.dbt,C.dbx,C.dbz,C.dbM,C.cbO,C.cbW,C.cc0,C.dJo,C.fN_,C.fMZ,C.fcM,C.fcN,C.eMc,C.eMJ,C.cB_,C.fkq,C.fgi,C.fyU,C.fvh,C.fyR,C.fh4,C.fh3,C.fl8])
u(A.lZ,[C.a0P,C.aeX,C.a17,C.a__,C.abC,C.aK5,C.HT,C.al2,C.cB0,C.cB1])
t(C.akT,C.aAi)
t(C.aj5,C.ayt)
t(C.atz,C.aFF)
t(C.beX,C.aAm)
t(C.al1,C.beX)
t(C.beW,C.aAl)
t(C.al_,C.beW)
t(C.beV,C.aAj)
t(C.akW,C.beV)
t(C.bjP,C.aLJ)
t(C.bwd,C.aNK)
t(C.bwe,C.aNL)
t(C.aFh,C.bxW)
t(C.b99,A.b8Y)
t(C.bwg,A.a63)
t(C.b98,C.bwg)
w(C.aAi,A.co)
w(C.ayt,A.co)
w(C.aFF,A.eO)
w(C.aAj,A.co)
v(C.beV,C.aeJ)
w(C.aAl,A.co)
v(C.beW,C.aeJ)
w(C.aAm,A.co)
v(C.beX,C.aeJ)
w(C.aLJ,A.eO)
w(C.aNK,A.co)
w(C.aNL,A.co)
v(C.bxW,A.eD)
v(C.bwg,A.j6)})()
A.jk(b.typeUniverse,JSON.parse('{"aZ5":{"aw":[],"v":[]},"bbh":{"aC":[]},"aoN":{"ag":[],"v":[]},"aDh":{"ah":["aoN"]},"T2":{"ag":[],"v":[]},"akR":{"aw":[],"v":[]},"aUQ":{"aw":[],"v":[]},"beT":{"ah":["T2"]},"Zy":{"ag":[],"v":[]},"ZC":{"ag":[],"v":[]},"ZA":{"ag":[],"v":[]},"Z8":{"ag":[],"v":[]},"aAh":{"ah":["Zy"]},"bfg":{"ah":["ZC"]},"aAk":{"ah":["ZA"]},"YQ":{"aw":[],"v":[]},"bcu":{"aC":[]},"bcl":{"aC":[]},"bcs":{"ah":["Z8"]},"aHh":{"aC":[]},"bhM":{"aC":[]},"baF":{"aw":[],"v":[]},"akS":{"ag":[],"v":[]},"akT":{"ah":["akS"]},"bn9":{"aC":[]},"aUV":{"aC":[]},"aj4":{"ag":[],"v":[]},"aty":{"ag":[],"v":[]},"axt":{"ag":[],"v":[]},"aj5":{"ah":["aj4"]},"bbi":{"aC":[]},"PZ":{"aw":[],"v":[]},"aAg":{"aC":[]},"atz":{"ah":["aty"]},"baO":{"aC":[]},"axu":{"ah":["axt"]},"al0":{"ag":[],"v":[]},"akZ":{"ag":[],"v":[]},"akV":{"ag":[],"v":[]},"al1":{"ah":["al0"]},"br7":{"aC":[]},"al_":{"ah":["akZ"]},"bhU":{"aC":[]},"akW":{"ah":["akV"]},"bhk":{"aC":[]},"Vp":{"ag":[],"v":[]},"akX":{"ag":[],"v":[]},"T3":{"ag":[],"v":[]},"a5z":{"aw":[],"v":[]},"bhs":{"aC":[]},"tm":{"aw":[],"v":[]},"HU":{"aw":[],"v":[]},"bk6":{"ah":["Vp"]},"akY":{"ah":["akX"]},"akU":{"ah":["T3"]},"apV":{"ag":[],"v":[]},"apP":{"ag":[],"v":[]},"a_c":{"ag":[],"v":[]},"adh":{"aw":[],"v":[]},"aDQ":{"ah":["apV"]},"aDN":{"ah":["apP"]},"beZ":{"aw":[],"v":[]},"bf1":{"aC":[]},"biI":{"aw":[],"v":[]},"be3":{"aC":[]},"bwp":{"aw":[],"v":[]},"blV":{"aw":[],"v":[]},"aCg":{"ah":["a_c"]},"adg":{"aw":[],"v":[]},"biH":{"aw":[],"v":[]},"adf":{"aw":[],"v":[]},"biG":{"aw":[],"v":[]},"aCh":{"aw":[],"v":[]},"aIp":{"aw":[],"v":[]},"FX":{"aw":[],"v":[]},"apT":{"ag":[],"v":[]},"a_x":{"ag":[],"v":[]},"a_y":{"ag":[],"v":[]},"aDP":{"ah":["apT"]},"bf_":{"aw":[],"v":[]},"acx":{"aw":[],"v":[]},"beY":{"aw":[],"v":[]},"bf2":{"aw":[],"v":[]},"aDO":{"ah":["a_x"]},"bk7":{"ah":["a_y"]},"aZ3":{"aw":[],"v":[]},"a6o":{"ag":[],"v":[]},"bjP":{"ah":["a6o"]},"bjO":{"aC":[]},"asN":{"aw":[],"v":[]},"Za":{"ag":[],"v":[]},"Z9":{"ag":[],"v":[]},"YH":{"ag":[],"v":[]},"a1j":{"ag":[],"v":[]},"az1":{"ah":["Za"]},"az0":{"ah":["Z9"]},"axI":{"ah":["YH"]},"bwf":{"ah":["a1j"]},"FN":{"ag":[],"v":[]},"axB":{"ag":[],"v":[]},"bwd":{"ah":["FN"]},"bwe":{"ah":["axB"]},"bwc":{"aC":[]},"asM":{"ag":[],"v":[]},"aFg":{"ah":["asM"]},"adC":{"aw":[],"v":[]},"asG":{"ag":[],"v":[]},"asL":{"ag":[],"v":[]},"blq":{"ah":["asG"]},"aFf":{"ah":["asL"]},"Ol":{"ag":[],"v":[]},"aFh":{"ah":["Ol"],"eD":[]},"b98":{"j6":[],"fg":[]}}'))
A.CP(b.typeUniverse,JSON.parse('{"aeJ":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.av
return{e2:w("aRy"),cq:w("m7"),Q:w("r9"),r:w("bw<n,n>"),c5:w("aTz"),dY:w("aTA"),fH:w("M8"),de:w("ajQ"),dN:w("Mf<H>"),gc:w("DO<H>"),A:w("eI<n?>"),e:w("HS"),B:w("nj"),P:w("hU"),df:w("lg"),k:w("kL"),x:w("aA<~>"),U:w("O<a3f>"),V:w("O<ac>"),C:w("O<r9>"),O:w("O<u>"),c:w("O<M8>"),b:w("O<ajQ>"),ac:w("O<eI<n?>>"),I:w("O<nj>"),u:w("O<hU>"),J:w("O<lg>"),_:w("O<kL>"),cl:w("O<aA<ai<a8<n,@>>>>"),R:w("O<nl>"),eU:w("O<ai<+(L,L)>>"),ez:w("O<a8<n,aD>>"),gE:w("O<a8<n,n>>"),Y:w("O<a8<n,@>>"),fD:w("O<mB>"),bp:w("O<oo>"),g:w("O<t>"),ar:w("O<asZ>"),v:w("O<h9>"),gy:w("O<a94>"),L:w("O<+(n,n)>"),G:w("O<+(L,L)>"),E:w("O<+(L,~())>"),bd:w("O<+(n,H,R)>"),bF:w("O<+count,id,name(H,n,n)>"),F:w("O<cX>"),s:w("O<n>"),cF:w("O<as>"),aS:w("O<iU>"),dT:w("O<b8X>"),p:w("O<v>"),Z:w("O<fg>"),D:w("O<ls>"),h:w("O<ayI>"),cC:w("O<bg6>"),fp:w("O<Kc>"),M:w("O<Kk>"),gZ:w("O<aHm>"),gA:w("O<aeO>"),e4:w("O<aeV>"),dE:w("O<aJn>"),f7:w("O<R>"),n:w("O<L>"),t:w("O<H>"),dS:w("O<aC?>"),d4:w("O<n?>"),eF:w("cA<ah<ag>>"),d:w("ai<nj>"),do:w("ai<hU>"),cg:w("ai<lg>"),ax:w("ai<kL>"),fO:w("ai<a8<n,@>>"),cz:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(H,n,n)>"),dy:w("ai<n>"),er:w("ai<as>"),gk:w("ai<ls>"),j:w("ai<@>"),fK:w("bz<n,n>"),d2:w("bz<n,ai<a8<n,@>>>"),a:w("a8<n,@>"),f:w("a8<@,@>"),gv:w("N<n,HV>"),cM:w("N<H,n>"),w:w("iF"),g2:w("rt"),bV:w("aoB"),fL:w("cu"),K:w("aD"),dc:w("h9"),fo:w("OH<H>"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),bn:w("+games,limit(R,H)"),d9:w("+dx,hidden(L,ai<hU>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),fT:w("jx<hU>"),ec:w("jx<n>"),gW:w("qP<L>"),X:w("bo<L>"),bW:w("dI"),W:w("cs<n>"),b4:w("cs<H>"),cI:w("jR<n>"),av:w("Z<zc>"),cc:w("Z<n>"),l:w("v"),gF:w("fg"),fA:w("ls"),dO:w("G0"),bw:w("adf<n?>"),cy:w("Km"),q:w("n6"),y:w("R"),i:w("L"),z:w("@"),S:w("H"),eK:w("ai<kL>?"),m:w("apS?"),cT:w("t?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),he:w("+qrPayload,token,usesRemaining(n,n,H)?"),gG:w("+members,trees,viewOnly(H,H,R)?"),az:w("q4?"),T:w("n?"),aD:w("dI?"),o:w("ls?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b0z=new A.bk(B.fB,B.bI,B.fB,B.bI)
D.ac0=new A.bk(B.fB,B.io,B.fB,B.io)
D.b0M=new A.bk(B.i6,B.bI,B.bI,B.bI)
D.b0Q=new A.ay(B.cO,1.4,B.r,-1)
D.b1_=new A.ay(B.ae,1,B.r,-1)
D.acv=new A.aZ(140,1/0,0,1/0)
D.b2o=new A.aZ(0,1/0,64,1/0)
D.b2s=new A.aZ(0,84,0,1/0)
D.acC=new A.aZ(130,1/0,0,1/0)
D.aA2=w([B.lZ,B.rb,B.c],x.O)
D.c1X=new A.a9(B.az,B.aE,B.x,D.aA2,null,null)
D.b3c=new A.o(null,null,null,null,null,D.c1X,B.n)
D.d8m=w([B.aV,B.bP],x.O)
D.c43=new A.a9(B.b3,B.b6,B.x,D.d8m,null,null)
D.b3x=new A.o(null,null,null,null,null,D.c43,B.n)
D.X4=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fn=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dcb=w([B.du,D.X4,D.fn],x.O)
D.c18=new A.a9(B.b3,B.b6,B.x,D.dcb,null,null)
D.b4h=new A.o(null,null,null,null,null,D.c18,B.n)
D.fg7=new A.F(!0,B.bY,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQv=new A.y("?",null,D.fg7,null,null,null,null,null,null,null,null,null)
D.b7V=new A.ck(B.A,null,null,D.fQv,null)
D.UN=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyR=new A.y("\ud83c\udf33",null,D.UN,null,null,null,null,null,null,null,null,null)
D.adm=new A.ck(B.A,null,null,D.fyR,null)
D.fBq=new A.y("\ud83c\udfc6",null,Ap.JP,null,null,null,null,null,null,null,null,null)
D.b83=new A.ck(B.A,null,null,D.fBq,null)
D.b9T=new A.fi(null,null,null,null,null,E.k7,null,null,null,null)
D.ado=new A.ck(B.A,null,null,D.b9T,null)
D.kx=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fgF=new A.F(!0,D.kx,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAw=new A.y("No books on the shelf yet.",null,D.fgF,null,null,null,null,null,null,null,null,null)
D.ejN=new A.D(B.o8,D.fAw,null)
D.b8i=new A.ck(B.A,null,null,D.ejN,null)
D.fnt=new A.F(!0,D.fn,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRp=new A.y("\ud83d\ude8c  On the road\u2026",null,D.fnt,null,null,null,null,null,null,null,null,null)
D.ekl=new A.D(B.cn,D.fRp,null)
D.b8K=new A.ck(B.A,null,null,D.ekl,null)
D.aTy=new A.y("\ud83e\uddfa",null,D.UN,null,null,null,null,null,null,null,null,null)
D.b9_=new A.ck(B.A,null,null,D.aTy,null)
D.fDS=new A.y("\ud83c\udfad",null,D.UN,null,null,null,null,null,null,null,null,null)
D.b9b=new A.ck(B.A,null,null,D.fDS,null)
D.b9e=new A.ck(B.A,null,null,A8.WU,null)
D.adI=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.adO=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bbq=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bbv=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bbG=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bbI=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bbK=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bbR=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lq=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bbU=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bbZ=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bc_=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bc0=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lr=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bcz=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.AV=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bcI=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bd1=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bd4=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bda=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bdi=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.aeo=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bdo=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.Xf=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.aer=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bdB=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.Xh=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bdX=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.aeC=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bej=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bez=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.beX=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bf5=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.F1=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bfq=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bfs=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bfw=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.af_=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bfR=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bfW=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bg1=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.af2=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bg9=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bgB=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bgJ=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bgL=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bgQ=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.afh=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bhs=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.afE=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bil=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.afR=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.biI=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.Fg=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.biO=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.biY=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bj_=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.afV=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bjh=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bji=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bjl=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.ag1=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.XX=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bjD=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bjY=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bk2=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.agd=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bk8=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.Y1=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bkq=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bkr=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.Fo=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.blc=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.blP=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.blV=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.blZ=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.pW=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bm8=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bmc=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bmh=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bmj=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.agT=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.agX=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.Ft=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.Yk=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.ah4=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bnp=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bnI=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bo6=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bof=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.ahs=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.Yu=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bon=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.boD=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.Yx=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.boR=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bp7=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.YB=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bpc=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.ahK=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.ahM=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bpu=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.ahR=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bpX=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bpZ=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bq4=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.bqa=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bqi=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bqT=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.brm=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fuR=new A.y("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.buR=new A.eI(null,D.fuR,B.f3,null,x.A)
D.fDK=new A.y("None",null,null,null,null,null,null,null,null,null,null,null)
D.buT=new A.eI(null,D.fDK,B.f3,null,x.A)
D.aiK=new A.b9(3e4)
D.bvq=new A.b9(38e5)
D.bwa=new A.ii(0,10,0,10)
D.bwj=new A.Q(0,1,0,0)
D.bwt=new A.ii(0,4,0,4)
D.bww=new A.Q(0,4,5,0)
D.bwM=new A.Q(10,10,14,10)
D.bwY=new A.ii(10,4,10,4)
D.bx5=new A.ii(10,8,10,8)
D.bx6=new A.Q(10,8,8,8)
D.bxx=new A.Q(12,6,12,2)
D.bxM=new A.Q(14,0,14,6)
D.bxQ=new A.Q(14,10,6,6)
D.bxR=new A.Q(14,12,14,0)
D.bxV=new A.Q(14,12,14,8)
D.bxY=new A.Q(14,12,8,14)
D.by1=new A.ii(14,14,14,14)
D.byh=new A.Q(14,6,14,40)
D.byk=new A.Q(14,8,14,30)
D.byH=new A.Q(16,2,16,10)
D.byR=new A.Q(16,6,16,30)
D.byT=new A.Q(16,6,16,8)
D.bz6=new A.Q(18,10,18,4)
D.bz8=new A.Q(18,12,18,0)
D.bzf=new A.Q(18,14,12,4)
D.ake=new A.Q(18,16,18,8)
D.bzw=new A.Q(18,20,18,22)
D.aki=new A.Q(18,24,18,24)
D.bzC=new A.Q(18,30,18,30)
D.bzU=new A.Q(20,10,12,20)
D.bzX=new A.Q(20,11,20,11)
D.bA7=new A.Q(20,18,16,18)
D.bA9=new A.Q(20,18,20,6)
D.bAZ=new A.Q(24,32,24,28)
D.bB_=new A.Q(24,36,24,32)
D.bB3=new A.Q(26,26,24,14)
D.bBi=new A.Q(2,4,2,8)
D.bBm=new A.Q(30,0,30,0)
D.bBx=new A.Q(38,22,22,22)
D.akC=new A.Q(40,24,24,24)
D.bBz=new A.ii(40,40,40,40)
D.bBB=new A.Q(46,30,30,30)
D.akF=new A.Q(4,0,0,8)
D.bC1=new A.Q(56,40,40,40)
D.bC5=new A.Q(1.25,1.25,1.25,1.25)
D.bC6=new A.Q(60,0,60,0)
D.bC9=new A.Q(6,14,6,16)
D.bCd=new A.Q(6,4,12,0)
D.bCg=new A.Q(6,6,10,2)
D.bCn=new A.ii(7,3,7,3)
D.bCU=new A.Q(5,1.5,5,1.5)
D.bD4=new A.Q(6,2.5,6,2.5)
D.fLH=new A.y("Family Games",null,B.k2,null,null,null,null,null,null,null,null,null)
D.ftv=new A.y("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,F.a9s,null,null,null,null,null,null,null,null,null)
D.cCU=w([D.fLH,D.ftv],x.p)
D.bso=new A.fj(B.ah,B.e,B.j,B.E,null,B.p,null,0,D.cCU,null)
D.bDm=new A.bA(1,B.bd,D.bso,null)
D.fQ1=new A.y("Signature",null,B.nG,null,null,null,null,null,null,null,null,null)
D.bDq=new A.bA(1,B.bd,D.fQ1,null)
D.fIl=new A.y("MADE BY THE ONE WHO PLANTED THE TREE",null,T.t6,null,null,null,null,null,null,null,null,null)
D.bDZ=new A.bA(1,B.bd,D.fIl,null)
D.fNa=new A.y("Tell the AI what to fix",null,B.de,null,null,null,null,null,null,null,null,null)
D.bEf=new A.bA(1,B.bd,D.fNa,null)
D.foe=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fP7=new A.y("Worksheets",null,D.foe,null,null,null,null,null,null,null,null,null)
D.fop=new A.F(!0,E.ae9,null,null,null,null,13,B.cw,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fO_=new A.y("Track your project spending",null,D.fop,null,null,null,null,null,null,null,null,null)
D.d00=w([D.fP7,B.av,D.fO_],x.p)
D.bs0=new A.fj(B.ah,B.e,B.j,B.E,null,B.p,null,0,D.d00,null)
D.bEl=new A.bA(1,B.bd,D.bs0,null)
D.fjl=new A.F(!0,E.k7,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu2=new A.y("FAMILY LIBRARY",null,D.fjl,null,null,null,null,null,null,null,null,null)
D.bED=new A.bA(1,B.bd,D.fu2,null)
D.ND=new C.HS("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.w0=new C.HT(0,"male")
D.oa=new C.HT(1,"female")
D.yq=new C.HT(2,"unknown")
D.u6=new C.al2(0,"owner")
D.NE=new C.al2(1,"editor")
D.kF=new C.al2(2,"viewer")
D.aml=new A.a0(61199,"MaterialIcons",!1)
D.bJz=new A.a0(61504,"MaterialIcons",!1)
D.bJA=new A.a0(61505,"MaterialIcons",!1)
D.bJC=new A.a0(61587,"MaterialIcons",!1)
D.bJJ=new A.a0(61890,"MaterialIcons",!1)
D.bKC=new A.a0(63034,"MaterialIcons",!0)
D.bKU=new A.a0(63153,"MaterialIcons",!1)
D.bLr=new A.a0(63429,"MaterialIcons",!1)
D.aoy=new A.a0(984520,"MaterialIcons",!1)
D.bK7=new A.a0(62776,"MaterialIcons",!1)
D.bNG=new A.ae(D.bK7,26,B.b_,null,null,null)
D.bIx=new A.a0(57648,"MaterialIcons",!1)
D.bNZ=new A.ae(D.bIx,14,B.c,null,null,null)
D.bOg=new A.ae(B.Gv,17,null,null,null,null)
D.bOm=new A.ae(B.a0Y,null,B.bP,null,null,null)
D.bOO=new A.ae(E.a12,null,null,null,null,null)
D.bOR=new A.ae(B.iV,18,E.k7,null,null,null)
D.a0O=new A.a0(62044,"MaterialIcons",!1)
D.bOW=new A.ae(D.a0O,null,B.aV,null,null,null)
D.bP2=new A.ae(B.yD,18,B.c,null,null,null)
D.bPL=new A.ae(B.e4,16,null,null,null,null)
D.bPS=new A.ae(D.a0O,32,B.aV,null,null,null)
D.bQb=new A.ae(E.amm,18,B.cO,null,null,null)
D.bRe=new A.ae(B.GF,22,B.aw,null,null,null)
D.bRq=new A.ae(B.e4,22,B.b_,null,null,null)
D.bRC=new A.ae(Y.a0T,22,B.c,null,null,null)
D.bRI=new A.ae(B.uh,52,B.c,null,null,null)
D.bRS=new A.ae(B.GF,30,B.aw,null,null,null)
D.bSa=new A.ae(B.a18,null,B.c,null,null,null)
D.apa=new A.ae(B.ur,22,B.c,null,null,null)
D.bSk=new A.ae(B.e4,17,null,null,null,null)
D.bSE=new A.ae(B.wg,26,B.cO,null,null,null)
D.bTo=new A.ae(B.a1f,16,null,null,null,null)
D.bU9=new A.ae(B.uh,24,B.c,null,null,null)
D.bUe=new A.ae(B.O5,20,B.rI,null,null,null)
D.bUj=new A.ae(B.Gt,null,B.bP,null,null,null)
D.bUq=new A.ae(B.iV,18,B.c,null,null,null)
D.bV3=new A.ae(B.cx,22,B.ae,null,null,null)
D.bVU=new A.ae(B.ec,16,B.ae,null,null,null)
D.bW5=new A.ae(D.a0O,20,B.aV,null,null,null)
D.apz=new A.ae(B.ht,20,null,null,null,null)
D.bWA=new A.ae(B.cx,18,D.kx,null,null,null)
D.bWS=new A.ae(B.yN,28,B.c,null,null,null)
D.bX1=new A.ae(B.NW,null,B.f7,null,null,null)
D.bXl=new A.ae(B.yN,24,B.c,null,null,null)
D.bXM=new A.ae(B.uh,null,B.aV,null,null,null)
D.bXN=new A.ae(B.jP,20,B.cO,null,null,null)
D.bY6=new A.ae(B.Gv,16,null,null,null,null)
D.bZE=new A.e3(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jM,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eE,!0,null,null,null,null)
D.aqe=new C.a5z(10,null)
D.c_9=new C.a5z(12,null)
D.c_a=new C.a5z(14,null)
D.dg5=w([B.bt,B.aV,B.fe,B.b_],x.O)
D.c0l=new A.a9(B.az,B.aE,B.x,D.dg5,null,null)
D.bkZ=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bqZ=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.cXE=w([D.bkZ,D.bqZ],x.O)
D.c0w=new A.a9(B.b3,B.b6,B.x,D.cXE,null,null)
D.dai=w([B.f5,B.fI,B.fe],x.O)
D.c0B=new A.a9(B.az,B.aE,B.x,D.dai,null,null)
D.agI=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bc1=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.cZL=w([D.agI,D.bc1],x.O)
D.c19=new A.a9(B.b3,B.b6,B.x,D.cZL,null,null)
D.bfG=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.azm=w([D.bfG,D.agI],x.O)
D.c1t=new A.a9(B.az,B.aE,B.x,D.azm,null,null)
D.afz=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bic=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.d9o=w([D.afz,D.bic],x.O)
D.c27=new A.a9(B.a4,B.a8,B.x,D.d9o,null,null)
D.dmV=w([B.by,B.na],x.O)
D.c29=new A.a9(B.b3,B.b6,B.x,D.dmV,null,null)
D.bkU=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dnR=w([D.bkU,D.kx,D.kx,K.Yj],x.O)
D.dqk=w([0,0.07,0.9,1],x.n)
D.c2F=new A.a9(B.a4,B.a8,B.x,D.dnR,D.dqk,null)
D.c2P=new A.a9(B.az,B.aE,B.x,B.RA,null,null)
D.cVw=w([B.aC,D.lq],x.O)
D.c2S=new A.a9(B.a4,B.a8,B.x,D.cVw,null,null)
D.dmu=w([B.b_,B.aV,B.bP],x.O)
D.c3P=new A.a9(B.az,B.aE,B.x,D.dmu,null,null)
D.c82=w([10,20,30],x.t)
D.chY=w([-1,-0.4,0.3,1],x.n)
D.cps=w([B.bt,B.b_,B.f5],x.O)
D.cpA=w([B.bv,B.aC,B.jo],x.O)
D.cpC=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cqi=w([30,140,262,360],x.n)
D.bjr=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cvP=w([D.bjr,E.agn],x.O)
D.ees=new A.t(1,2)
D.f1C=new A.cX(B.aW,D.ees,3)
D.awj=w([D.f1C],x.F)
D.cDa=w([B.hb,B.cb,B.fa],x.O)
D.cFT=w([B.bL,B.bs,B.bo],x.O)
D.bFb=new C.us("classic","Classic leather","Gold-edged brown leather",D.azm,E.k7,E.k7,"\u2766",B.L,!0,!1,!1,!1)
D.bba=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bpN=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.d1H=w([D.bba,D.bpN],x.O)
D.agr=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bF6=new C.us("ornate","Ornate gold","Double gold border and flourishes",D.d1H,D.agr,D.agr,"\u2726",B.L,!0,!0,!0,!1)
D.bfe=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.blK=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.cUr=w([D.bfe,D.blK],x.O)
D.bF5=new C.us("parchment","Parchment","Old paper with dark ink",D.cUr,D.Fo,I.iL,"\u2767",B.L,!0,!1,!1,!0)
D.adQ=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bo2=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dkM=w([D.adQ,D.bo2],x.O)
D.biV=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bnk=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bF8=new C.us("minimal","Clean paper","Plain and elegant, like a printed book",D.dkM,D.biV,D.bnk,"",B.L,!0,!0,!1,!0)
D.bFa=new C.us("midnight","Midnight","Deep blue with silver stars",F.azF,B.cr,B.bN,"\u2727",B.L,!0,!0,!1,!1)
D.bF4=new C.us("emerald","Emerald library","Green cloth, title on the left",V.awH,E.k7,B.h1,"\u25c6",B.bi,!0,!1,!1,!1)
D.bov=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.diR=w([B.ei,D.bov],x.O)
D.bk7=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.blj=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bF9=new C.us("rose","Rose vintage","Burgundy with rose-gold lettering",D.diR,D.bk7,D.blj,"\u2740",B.L,!0,!1,!0,!1)
D.dns=w([B.cm,G.nb],x.O)
D.bF7=new C.us("modern","Modern","Dark, bold, left-aligned",D.dns,B.aQ,B.c,"",B.bi,!1,!0,!1,!1)
D.a3j=w([D.bFb,D.bF6,D.bF5,D.bF8,D.bFa,D.bF4,D.bF9,D.bF7],A.av("O<us>"))
D.cIQ=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dnf=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bFm=new C.lg('What does "Ubuntu" mean?',D.dnf,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.cW9=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bFp=new C.lg("In Swahili, what do we call a grandmother?",D.cW9,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.cW0=w(["Babu","Mama","Baba","Dada"],x.s)
D.bFk=new C.lg("In Swahili, what do we call a grandfather?",D.cW0,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.cXe=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bFo=new C.lg("What is a sister called in Swahili?",D.cXe,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.d18=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bFl=new C.lg("What is a brother called in Swahili?",D.d18,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.cW_=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bFw=new C.lg("Which word means father in Swahili?",D.cW_,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dom=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bFv=new C.lg('"Umoja ni nguvu" means...',D.dom,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dls=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bFx=new C.lg('"Haba na haba hujaza kibaba" teaches us...',D.dls,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.cZT=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bFu=new C.lg('The African saying "It takes a village to raise a child" means...',D.cZT,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.doG=w(["The elders","The market","The river","The drum"],x.s)
D.bFq=new C.lg("Who is the traditional keeper of the family stories?",D.doG,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cN_=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bFn=new C.lg("Why do families sit round the fire at night?",D.cN_,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dnu=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bFs=new C.lg('What does "Harambee" mean?',D.dnu,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.d3P=w(["An elder","A baby","A market","A cow"],x.s)
D.bFr=new C.lg('"Mzee" is a respectful word for...',D.d3P,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.diI=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bFt=new C.lg('What does "Shikamoo" show?',D.diI,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.awD=w([D.bFm,D.bFp,D.bFk,D.bFo,D.bFl,D.bFw,D.bFv,D.bFx,D.bFu,D.bFq,D.bFn,D.bFs,D.bFr,D.bFt],x.J)
D.cRi=w([90,360],x.n)
D.cTZ=w([B.bP,B.bk],x.O)
D.bkJ=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.cUD=w([D.adQ,D.bkJ],x.O)
D.cVg=w([-1,-0.3,0.4,1],x.n)
D.cW5=w([0,0.45,0.72,0.92,1],x.n)
D.bfa=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.cWn=w([D.bfa,B.dd],x.O)
D.bcX=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.ai0=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.cWW=w([B.du,D.bcX,D.ai0],x.O)
D.cXU=w([B.b9,B.j5,B.oR],x.O)
D.bfI=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bnb=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bcD=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.cXZ=w([D.bfI,D.bnb,D.bcD],x.O)
D.cYh=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.cYr=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hfm=new C.acV(78,424,48,44,56)
D.hfk=new C.acV(214,396,34,34,42)
D.hfl=new C.acV(442,452,56,50,64)
D.axA=w([D.hfm,D.hfk,D.hfl],A.av("O<acV>"))
D.cZ_=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bbW=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bhr=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dqg=w([D.afz,D.bbW,D.bhr],x.O)
D.bFc=new C.ut("leather","Leather",D.dqg,"vintage")
D.d4P=w([B.d6,B.LS,Q.Xv],x.O)
D.bFj=new C.ut("midnight","Midnight",D.d4P,"starry")
D.cXV=w([B.eh,B.dZ,B.lu],x.O)
D.bFi=new C.ut("forest","Forest",D.cXV,"story")
D.dsi=w([B.ej,B.ei,B.ka],x.O)
D.bFf=new C.ut("burgundy","Burgundy",D.dsi,"royal")
D.cFr=w([B.aC,B.oT,B.nO],x.O)
D.bFg=new C.ut("royal","Royal",D.cFr,"royal")
D.d_o=w([B.bs,B.cm,G.nb],x.O)
D.bFd=new C.ut("charcoal","Charcoal",D.d_o,"geo")
D.dqo=w([B.cc,B.dE,B.xK],x.O)
D.bFh=new C.ut("sunset","Sunset",D.dqo,"sunset")
D.dr4=w([B.j5,B.Fp,B.Xy],x.O)
D.bFe=new C.ut("ocean","Ocean",D.dr4,"band")
D.ze=w([D.bFc,D.bFj,D.bFi,D.bFf,D.bFg,D.bFd,D.bFh,D.bFe],A.av("O<ut>"))
D.d_S=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.d0s=w([B.al,B.aJ,B.M],x.O)
D.d1M=w([B.ei,B.dZ,B.d6,B.h2,B.xN,B.cO,B.kb,B.e6,B.d1],x.O)
D.d1N=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.f1D=new A.cX(B.dp,B.dB,8)
D.d1X=w([D.f1D],x.F)
D.d30=w([B.c4,B.dE,B.ky],x.O)
D.bdQ=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bhI=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.blF=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.d3f=w([D.bdQ,F.agQ,D.bhI,D.blF,D.ai0],x.O)
D.d3v=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.d3F=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bbl=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bh5=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.d46=w([D.bbl,D.af2,D.bh5],x.O)
D.d4K=w([B.c4,B.hn],x.O)
D.d4Q=w([F.n4,B.hV,F.ae0,B.cI],x.O)
D.d6o=w([B.cI,F.n4,B.hV,D.lr,B.cI],x.O)
D.d6Y=w([B.aT,B.vE,B.xz],x.O)
D.ayz=w(["True","False"],x.s)
D.eAX=new A.z(-0.65,0.6)
D.eNm=new A.z(-0.2,0.95)
D.eOr=new A.z(0.25,0.95)
D.eEo=new A.z(0.7,0.6)
D.eP_=new A.z(1,0.1)
D.d7J=w([Ao.Tp,D.eAX,D.eNm,D.eOr,D.eEo,D.eP_],x.G)
D.bjE=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bpF=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.beO=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.d7P=w([D.bjE,D.bpF,D.beO],x.O)
D.d7T=w([B.bM,B.cs,B.ds,B.aT],x.O)
D.d8n=w([B.id,B.cc,B.tB],x.O)
D.d8K=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.d8U=w([B.f5,B.cO],x.O)
D.bl2=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.d9j=w([D.bl2,D.adO],x.O)
D.d9u=w([B.cT,B.fo,B.hG],x.O)
D.d9F=w([B.aQ,B.bk,B.d6],x.O)
D.daf=w([B.ep,B.cV,B.dZ],x.O)
D.daA=w([B.dH,B.d6,B.LS],x.O)
D.daE=w([B.bG,B.ms,B.d1],x.O)
D.daV=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bki=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.biE=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dbd=w([D.bki,D.af_,D.biE],x.O)
D.dbX=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dcZ=w([1,0,7,6,3,2],x.t)
D.a4d=w(["leather","linen","plain","stars","rays"],x.s)
D.dda=w([0.5,2,3.6],x.n)
D.ddG=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bNm=new A.a0(985219,"MaterialIcons",!1)
D.bMV=new A.a0(983781,"MaterialIcons",!1)
D.az0=w([B.a0Y,B.hZ,B.m5,B.ik,D.bNm,B.GQ,B.qg,D.bMV,F.aol,B.Cd,B.qi,B.mI],A.av("O<a0>"))
D.a4h=w(["double","single","corners","none"],x.s)
D.bF1=new C.zc("Little Seed","\ud83c\udf31",0)
D.bF3=new C.zc("Young Listener","\ud83d\udc42",40)
D.bF2=new C.zc("Storyteller","\ud83e\ude98",120)
D.bF0=new C.zc("Village Pride","\ud83c\udfe1",300)
D.bEZ=new C.zc("Keeper of Roots","\ud83c\udf33",700)
D.bF_=new C.zc("Elder of the Fire","\ud83d\udd25",1500)
D.az2=w([D.bF1,D.bF3,D.bF2,D.bF0,D.bEZ,D.bF_],A.av("O<zc>"))
D.deM=w([B.dv,B.bm,B.e6],x.O)
D.deZ=w([],x.C)
D.CO=w([],x.u)
D.aIU=new A.t(225,528)
D.eCC=new A.z(D.aIU,1)
D.efd=new A.t(350,548)
D.eIM=new A.z(D.efd,0.95)
D.aIP=new A.t(158,656)
D.eIG=new A.z(D.aIP,1.12)
D.eg_=new A.t(92,544)
D.eyb=new A.z(D.eg_,0.93)
D.efg=new A.t(398,614)
D.eEL=new A.z(D.efg,1.04)
D.ef4=new A.t(318,662)
D.etF=new A.z(D.ef4,1.1)
D.a4p=w([D.eCC,D.eIM,D.eIG,D.eyb,D.eEL,D.etF],A.av("O<+(t,L)>"))
D.dgX=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dhn=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dip=w([B.cI,F.n4,B.hV,D.lr,B.cI,B.hV],x.O)
D.djO=w([B.aD,B.fo,B.h2],x.O)
D.dk5=w([-12,12],x.n)
D.dk8=w([-17,17],x.n)
D.dkp=w([-70,58],x.n)
D.dkr=w([-70,-30,20],x.n)
D.dlq=w([B.bG,B.ms,B.Yv],x.O)
D.dlG=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dFa=new C.lK("construction","Construction","Jobsite & builds",B.yG)
D.dFh=new C.lK("house","Home Build","Houses & rooms",B.wc)
D.dF7=new C.lK("grocery","Grocery","Store & pantry",B.a1O)
D.dF6=new C.lK("calculator","Calculations","Math & estimates",B.Oe)
D.dFf=new C.lK("lumber","Materials","Lumber & supplies",B.Ot)
D.dF3=new C.lK("kitchen","Kitchen","Remodel & meals",A2.any)
D.bMT=new A.a0(983756,"MaterialIcons",!1)
D.dF8=new C.lK("landscape","Landscaping","Yard & garden",D.bMT)
D.dF2=new C.lK("plumbing","Plumbing","Pipes & water",B.qp)
D.dFi=new C.lK("electrical","Electrical","Wiring & power",B.hs)
D.dF0=new C.lK("store","Retail Shop","Daily business",B.l9)
D.dF1=new C.lK("paint_remodel","Paint & Remodel","Colors & walls",Af.a1l)
D.bMm=new A.a0(983311,"MaterialIcons",!1)
D.dFe=new C.lK("roofing","Roofing","Roofs & exteriors",D.bMm)
D.bN4=new A.a0(983986,"MaterialIcons",!1)
D.dF_=new C.lK("warehouse","Warehouse","Storage & stock",D.bN4)
D.dFc=new C.lK("vehicles","Vehicles","Fleet & transport",B.GR)
D.bK9=new A.a0(62785,"MaterialIcons",!1)
D.dF5=new C.lK("farm","Farm","Crops & livestock",D.bK9)
D.dF4=new C.lK("restaurant","Restaurant","Food & catering",B.wj)
D.dFb=new C.lK("tools","Tools","Workshop gear",B.GN)
D.dFg=new C.lK("wallet","Cash & Wallet","Quick spending",B.jP)
D.bLm=new A.a0(63395,"MaterialIcons",!1)
D.dFd=new C.lK("concrete","Concrete","Foundation work",D.bLm)
D.dF9=new C.lK("blueprint","Blueprint","Plans & design",Al.amR)
D.a4K=w([D.dFa,D.dFh,D.dF7,D.dF6,D.dFf,D.dF3,D.dF8,D.dF2,D.dFi,D.dF0,D.dF1,D.dFe,D.dF_,D.dFc,D.dF5,D.dF4,D.dFb,D.dFg,D.dFd,D.dF9],A.av("O<lK>"))
D.dma=w([B.br,B.bm],x.O)
D.dmW=w([B.ir,B.nV,B.dL],x.O)
D.afL=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.agE=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.biZ=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.baT=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aA9=w([D.afL,D.agE,D.biZ,D.baT],x.O)
D.do6=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a4U=w(["top","middle","bottom"],x.s)
D.dpw=w([B.cp,B.bk,B.d6],x.O)
D.aAn=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.b4K=new A.ac(0,B.G,B.aW,B.J,14)
D.aAq=w([D.b4K],x.V)
D.bhW=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dq9=w([D.aeo,D.Yu,D.bhW],x.O)
D.dqa=w([B.bj,B.cV,B.dZ],x.O)
D.eeN=new A.t(24,-8)
D.efw=new A.t(48,0)
D.eeJ=new A.t(24,6)
D.drP=w([B.J,D.eeN,D.efw,D.eeJ],x.g)
D.dsd=w([B.bL,B.al],x.O)
D.dse=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.ebB={top:0,middle:1,bottom:2}
D.dvs=new A.bw(D.ebB,["Top","Middle","Bottom"],x.r)
D.ebf={double:0,single:1,corners:2,none:3}
D.dvy=new A.bw(D.ebf,["Double line","One line","Corners","None"],x.r)
D.ecj={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dx0=new A.bw(D.ecj,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dxd=new A.bw(B.hN,[],A.av("bw<H,+(n,n)>"))
D.ebu={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.D_=new A.bw(D.ebu,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.av("bw<n,H>"))
D.dzK=new H.Nc(32,null)
D.dzL=new H.Nc(40,null)
D.dzM=new H.Nc(46,null)
D.aIn=new C.asL(null)
D.edJ=new A.t(0,40)
D.edK=new A.t(0,412)
D.edM=new A.t(0,900)
D.edX=new A.t(0,-74)
D.ee_=new A.t(100,300)
D.ee0=new A.t(10,14)
D.ee3=new A.t(10,-10)
D.ee7=new A.t(10,-46)
D.ee8=new A.t(10,-58)
D.ee9=new A.t(116,442)
D.eea=new A.t(11,-1)
D.eeb=new A.t(11,-10)
D.eec=new A.t(11,-21)
D.aIK=new A.t(11,-60)
D.eei=new A.t(14,-2)
D.eej=new A.t(150,520)
D.a6Q=new A.t(150,592)
D.eem=new A.t(15,-15)
D.een=new A.t(16,-1)
D.eer=new A.t(190,444)
D.eeu=new A.t(1,5)
D.eeC=new A.t(21,-78)
D.eeD=new A.t(222,615)
D.IP=new A.t(225,300)
D.a6S=new A.t(225,574)
D.eeM=new A.t(24,-52)
D.eeO=new A.t(250,210)
D.aIY=new A.t(300,0)
D.ef0=new A.t(300,440)
D.ef3=new A.t(318,476)
D.ef6=new A.t(324,144)
D.a6V=new A.t(332,150)
D.ef8=new A.t(335,585)
D.ef9=new A.t(338,140)
D.efa=new A.t(340,158)
D.efc=new A.t(34,-60)
D.Ds=new A.t(36,-24)
D.efe=new A.t(372,470)
D.eff=new A.t(390,455)
D.efo=new A.t(42,468)
D.efp=new A.t(431,510)
D.efq=new A.t(431,520)
D.efr=new A.t(45,-92)
D.efs=new A.t(46,20)
D.eft=new A.t(46,-92)
D.efu=new A.t(46,-94)
D.efv=new A.t(47,-4)
D.efx=new A.t(48,-4)
D.efF=new A.t(4,-26)
D.efO=new A.t(60,455)
D.efV=new A.t(8,14)
D.efZ=new A.t(8,-76)
D.eg0=new A.t(95,575)
D.eg1=new A.t(98,-24)
D.eg3=new A.t(9,-2)
D.eg4=new A.t(9,-58)
D.aJ6=new A.t(9,-79)
D.eg5=new A.t(9,-9)
D.egI=new A.t(16.5,8)
D.egK=new A.t(3.2,0)
D.egM=new A.t(-16.5,8)
D.egT=new A.t(16.5,2)
D.egW=new A.t(-3.2,0)
D.eh4=new A.t(9.5,6)
D.eh8=new A.t(-10,14)
D.eh9=new A.t(-10,-12)
D.eha=new A.t(-10,-58)
D.ehb=new A.t(-11,-1)
D.ehc=new A.t(-11,-10)
D.ehe=new A.t(-11,-60)
D.ehf=new A.t(-12,-14)
D.ehg=new A.t(-12,-16)
D.ehn=new A.t(-14,-2)
D.ehq=new A.t(-15,-15)
D.ehr=new A.t(-15,-3)
D.eht=new A.t(-16,-1)
D.ehK=new A.t(-24,-52)
D.ehR=new A.t(-2,-34)
D.ehS=new A.t(-2,-38)
D.ehU=new A.t(-30,-100)
D.a6W=new A.t(-36,-24)
D.ei4=new A.t(-4,-26)
D.ei6=new A.t(-4,-6)
D.eif=new A.t(-8,-3)
D.eig=new A.t(-8,-48)
D.eij=new A.t(-9,-2)
D.eil=new A.t(-9,-58)
D.eim=new A.t(-9,-79)
D.ein=new A.t(-9,-9)
D.eip=new A.t(-9.5,6)
D.eiD=new A.t(-16.5,2)
D.fB7=new A.y("Write a new book",null,B.hB,null,B.L,null,null,null,null,null,null,null)
D.ejc=new A.D(B.l1,D.fB7,null)
D.fPB=new A.y("Tap to go on",null,B.va,null,null,null,null,null,null,null,null,null)
D.ejw=new A.D(B.l0,D.fPB,null)
D.aoK=new A.ae(B.hK,18,B.c,null,null,null)
D.fuo=new A.y("Add",null,B.lO,null,null,null,null,null,null,null,null,null)
D.d86=w([D.aoK,B.qE,D.fuo],x.p)
D.f_g=new A.cc(B.aN,B.e,B.Q,B.m,null,B.p,null,0,D.d86,null)
D.ejz=new A.D(B.nn,D.f_g,null)
D.ejA=new A.D(E.aj6,A8.WU,null)
D.fo9=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxq=new A.y("New Project",null,D.fo9,null,null,null,null,null,null,null,null,null)
D.dcj=w([D.aoK,B.ac,D.fxq],x.p)
D.f_j=new A.cc(B.aN,B.e,B.Q,B.m,null,B.p,null,0,D.dcj,null)
D.ejM=new A.D(B.iT,D.f_j,null)
D.fzW=new A.y("Choose your header",null,A0.t4,null,null,null,null,null,null,null,null,null)
D.ek6=new A.D(B.hI,D.fzW,null)
D.ba7=new A.fi(2.2,null,null,null,null,B.cO,null,null,null,null)
D.f4t=new A.a7(22,22,D.ba7,null)
D.b8e=new A.ck(B.A,null,null,D.f4t,null)
D.ekb=new A.D(B.ZI,D.b8e,null)
D.byb=new A.Q(14,2,14,6)
D.fNJ=new A.y("The top of your book. Tap a design to see it.",null,O.vb,null,null,null,null,null,null,null,null,null)
D.ekc=new A.D(D.byb,D.fNJ,null)
D.fz5=new A.y("\ud83c\udfc6 A new record!",null,B.fQ,null,null,null,null,null,null,null,null,null)
D.ekd=new A.D(B.l0,D.fz5,null)
D.elM=new A.iS(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.elP=new A.iS(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aJH=new A.iS(1,0.9607843137254902,0.48627450980392156,0)
D.IY=new A.iS(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.zP=new A.iS(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.elV=new A.iS(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hhb=new C.bhM(null)
D.bta=new A.mt(D.hhb,null,B.ax,null,null)
D.aNk=new A.cN(0,0,0,0,null,null,D.bta,null)
D.fuq=new A.y("\ud83c\udfc5",null,B.a95,null,null,null,null,null,null,null,null,null)
D.epR=new A.cN(null,0,-34,null,null,null,D.fuq,null)
D.exR=new A.z("E","Sit by the fire again")
D.eDp=new A.z("C","Good Learner")
D.eGM=new A.z("D","Still Growing")
D.eLe=new A.z(-42,42)
D.eMz=new A.z("B","Faithful Listener")
D.eOt=new A.z("A","Keeper of the Family")
D.eRp=new A.bj(-17,0.7,0)
D.eRR=new A.bj(-8,0.95,1.3)
D.eSH=new A.bj(18,0.65,5.2)
D.eSJ=new A.bj(0,1.15,2.6)
D.eT_=new A.bj(9,0.9,3.9)
D.eUv=new A.cw([0,0,1,1])
D.aOL=new A.a3(0,0,520,160)
D.eXl=new A.a3(10,612,440,618)
D.eXm=new A.a3(10,612,440,628)
D.eXp=new A.a3(14,-64,34,-12)
D.eXs=new A.a3(300,336,350,348)
D.a7O=new A.a3(30,96,420,346)
D.eXt=new A.a3(30,-9,46,1)
D.eXu=new A.a3(4,2,11,14)
D.eXw=new A.a3(-8,-12.5,8,-7)
D.eXx=new A.a3(-16.5,-21,16.5,1)
D.eXy=new A.a3(60,342,88,348)
D.Tq=new A.a3(66,-66,94,-36)
D.eXz=new A.a3(6,8,10,14)
D.eXC=new A.a3(95,343,115,348)
D.eXD=new A.a3(-6.5,-74,6.5,-58)
D.eXJ=new A.a3(-100,-74,100,-12)
D.eXK=new A.a3(-10,8,-6,14)
D.eXL=new A.a3(-11,2,-4,14)
D.eXM=new A.a3(-11,-70,11,-56)
D.eXT=new A.a3(-13,-24,13,-4)
D.eXZ=new A.a3(-15,-21,15,0)
D.eY1=new A.a3(-16,-21,16,1)
D.eY2=new A.a3(-16,-21,16,2)
D.eY5=new A.a3(-16,-26,16,-6)
D.eYf=new A.a3(-230,-26,230,26)
D.eYD=new A.a3(-38,-26,12,-6)
D.eYH=new A.a3(-3,-70,3,-63)
D.eYI=new A.a3(-44,-22,44,0)
D.eYK=new A.a3(-46,-9,-30,1)
D.aOP=new A.a3(-80,-190,80,20)
D.eYR=new A.a3(-8,-26,40,-6)
D.eYS=new A.a3(-98,-80,92,-75)
D.eYT=new A.a3(-9,-15,9,-9)
D.fNh=new A.y("Let the AI write it from your tree",null,B.iG,null,B.L,null,null,null,null,null,null,null)
D.bG3=new A.ds(1,B.co,D.fNh,null)
D.d4J=w([E.a2h,B.ac,D.bG3],x.p)
D.eZW=new A.cc(B.aN,B.e,B.Q,B.m,null,B.p,null,0,D.d4J,null)
D.fu3=new A.y("Save member",null,B.ck,null,null,null,null,null,null,null,null,null)
D.dka=w([D.apz,B.ac,D.fu3],x.p)
D.f_5=new A.cc(B.aN,B.b8,B.j,B.m,null,B.p,null,0,D.dka,null)
D.bRv=new A.ae(B.i_,14,B.b_,null,null,null)
D.fhV=new A.F(!0,B.b_,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxQ=new A.y("Cashier",null,D.fhV,null,null,null,null,null,null,null,null,null)
D.dcQ=w([D.bRv,B.bn,D.fxQ],x.p)
D.f_8=new A.cc(B.aN,B.e,B.Q,B.m,null,B.p,null,0,D.dcQ,null)
D.fu4=new A.y("Transfer & settings",null,B.de,null,null,null,null,null,null,null,null,null)
D.bE5=new A.bA(1,B.bd,D.fu4,null)
D.cXn=w([D.apa,B.as,D.bE5],x.p)
D.f_9=new A.cc(B.aN,B.e,B.j,B.m,null,B.p,null,0,D.cXn,null)
D.f3a=new A.au(16,40)
D.f3f=new A.au(22,64)
D.f3m=new A.au(280,88)
D.f49=new A.a7(30,null,null,null)
D.ftb=new A.y("The teacher is writing\u2026",null,B.A7,null,null,null,null,null,null,null,null,null)
D.b9l=new A.ck(B.A,null,null,D.ftb,null)
D.hbx=new A.cs("w",x.W)
D.f4z=new A.a7(null,56,D.b9l,D.hbx)
D.f5l=new A.hR(5,8,8,1,null)
D.f5t=new A.hR(2,12,12,1.05,null)
D.fxw=new A.y("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.f6b=new A.b2(D.fxw,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fxL=new A.y("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aQS=new A.b2(D.fxL,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fG2=new A.y("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.f6F=new A.b2(D.fG2,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fQD=new A.y("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.f6K=new A.b2(D.fQD,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fzU=new A.y("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.f6R=new A.b2(D.fzU,null,null,null,null,null,null,null,null,null,null,null,null,B.fW,!1,null,null,null,B.t,null)
D.fNW=new A.y("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aQW=new A.b2(D.fNW,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fzS=new A.y("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.f7g=new A.b2(D.fzS,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fuG=new A.y("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.f7i=new A.b2(D.fuG,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fDy=new A.y("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.f7o=new A.b2(D.fDy,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fRm=new A.y("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.f83=new A.b2(D.fRm,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fMa=new A.y("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.f8s=new A.b2(D.fMa,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fQH=new A.y("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.f8v=new A.b2(D.fQH,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fHF=new A.y("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.f8x=new A.b2(D.fHF,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fBK=new A.y("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.f8y=new A.b2(D.fBK,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fBL=new A.y("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.f9y=new A.b2(D.fBL,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fxy=new A.y("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.f9Q=new A.b2(D.fxy,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fzw=new A.y("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fa9=new A.b2(D.fzw,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fH7=new A.y("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fap=new A.b2(D.fH7,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fCz=new A.y("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.faq=new A.b2(D.fCz,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fmS=new A.F(!0,B.bC,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc3=new A.eu("\u2665",null,null,B.cQ,null,null,null,null,null,null,D.fmS)
D.fka=new A.F(!0,B.aP,null,null,null,null,28,B.P,B.cD,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcj=new A.eu("Today: how well do you know the family?",null,null,B.cQ,null,null,null,null,null,null,D.fka)
D.fcz=new A.F(!0,B.r_,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdD=new A.F(!0,D.kx,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe2=new A.F(!0,D.kx,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe6=new A.F(!0,B.cI,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fef=new A.F(!0,D.fn,null,null,null,null,15,B.P,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feq=new A.F(!0,D.fn,null,null,null,null,13,B.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feK=new A.rP(!0,B.rS,null,null,null,null,B.dx,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.ff_=new A.F(!0,B.cI,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ff2=new A.F(!0,D.kx,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ff3=new A.F(!0,B.cI,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ff8=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffb=new A.F(!0,B.cI,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffF=new A.F(!0,B.b_,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffG=new A.F(!0,B.ae,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffI=new A.F(!0,B.aP,null,null,null,null,15.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fga=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aS6=new A.F(!0,B.aR,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aS8=new A.F(!0,D.lq,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgy=new A.F(!0,B.cI,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a9a=new A.rP(!0,B.SV,null,null,null,null,B.dx,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.Ur=new A.F(!0,B.cI,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgI=new A.F(!0,B.M,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgM=new A.F(!0,D.fn,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fh8=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fif=new A.F(!0,D.fn,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSj=new A.F(!0,D.fn,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiz=new A.F(!0,B.ae,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiK=new A.F(!0,D.fn,null,null,null,null,null,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiM=new A.F(!0,null,null,null,null,null,8,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiR=new A.F(!0,I.iL,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSm=new A.F(!0,D.fn,null,null,null,null,14.5,B.P,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjM=new A.F(!0,D.fn,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk4=new A.F(!0,D.fn,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk6=new A.F(!0,B.M,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk7=new A.F(!0,B.cI,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkt=new A.F(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A7.HM,null,null,null)
D.aSC=new A.F(!0,D.fn,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkR=new A.F(!0,B.M,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flc=new A.F(!0,B.f7,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flz=new A.F(!0,B.bP,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flD=new A.F(!0,B.by,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flP=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flS=new A.F(!0,D.fn,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fm_=new A.F(!0,D.Fo,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fm8=new A.F(!0,B.b_,null,null,null,null,13,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmy=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmE=new A.F(!0,B.ae,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.CG,null,null,null)
D.fn1=new A.F(!0,B.cI,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fna=new A.F(!0,B.cO,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnn=new A.F(!0,D.lr,null,null,null,null,13,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSW=new A.F(!0,D.fn,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.JZ=new A.F(!0,B.cI,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSY=new A.F(!0,B.cI,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.CG,null,null,null)
D.fnG=new A.F(!0,B.bP,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnK=new A.F(!0,F.n4,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo7=new A.F(!0,B.b_,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foo=new A.F(!0,D.fn,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foK=new A.F(!0,B.c,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp6=new A.F(!0,D.fn,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpz=new A.F(!0,D.fn,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpF=new A.F(!0,B.al,null,null,null,null,11.5,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpN=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTf=new A.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a9C=new A.F(!0,B.al,null,null,null,null,12,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a9F=new A.F(!0,D.lq,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frs=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frK=new A.F(!0,B.aP,null,null,null,null,27,B.P,B.cD,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frS=new A.F(!0,I.iL,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs_=new A.F(!0,I.iL,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fst=new A.y("Time:",null,B.hk,null,null,null,null,null,null,null,null,null)
D.fsP=new A.y("\ud83c\udfae",null,F.a9v,null,null,null,null,null,null,null,null,null)
D.fsQ=new A.y("Themes",null,B.ps,null,null,null,null,null,null,null,null,null)
D.ftj=new A.y("\ud83c\udfb2",null,B.wT,null,null,null,null,null,null,null,null,null)
D.ftn=new A.y("Delete this game?",null,B.iG,null,null,null,null,null,null,null,null,null)
D.ftu=new A.y("Add Item",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fit=new A.F(!0,B.M,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftU=new A.y("Debt receipt",null,D.fit,null,B.L,null,null,null,null,null,null,null)
D.aTb=new A.F(!0,B.al,null,null,null,null,11,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fub=new A.y("Person who owes",null,D.aTb,null,null,null,null,null,null,null,null,null)
D.fv8=new A.y("Notes",null,B.a9i,null,null,null,null,null,null,null,null,null)
D.fvy=new A.y("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fhp=new A.F(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvB=new A.y("Share",null,D.fhp,null,null,null,null,null,null,null,null,null)
D.fww=new A.y("Move your family trees",null,D.aTf,null,null,null,null,null,null,null,null,null)
D.fx8=new A.y("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fxK=new A.y("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fy7=new A.y("SAVE",null,D.JZ,null,null,null,null,null,null,null,null,null)
D.fyK=new A.y("The round button is the right answer.",null,O.DY,null,null,null,null,null,null,null,null,null)
D.fz4=new A.y("Remove this book?",null,B.fQ,null,null,null,null,null,null,null,null,null)
D.fo4=new A.F(!0,B.cI,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.CG,null,null,null)
D.fzB=new A.y("Fireside Stories",null,D.fo4,null,null,null,null,null,null,null,null,null)
D.aTH=new A.y("Download",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fAh=new A.y("What should the AI do?",null,B.de,null,null,null,null,null,null,null,null,null)
D.fh4=new A.F(!0,D.lq,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAx=new A.y("REPORT CARD",null,D.fh4,null,null,null,null,null,null,null,null,null)
D.fBd=new A.y("Calabash Catch",null,B.K2,null,null,null,null,null,null,null,null,null)
D.fBG=new A.y("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fC6=new A.y("\ud83c\udfe1",null,B.DX,null,null,null,null,null,null,null,null,null)
D.fCO=new A.y("Ribbon bookmark",null,B.jj,null,null,null,null,null,null,null,null,null)
D.fpy=new A.F(!0,B.b_,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDg=new A.y("NGMY.ORG",null,D.fpy,null,B.L,null,null,null,null,null,null,null)
D.fEy=new A.y("Scan family tree QR",null,B.cA,null,null,null,null,null,null,null,null,null)
D.flT=new A.F(!0,B.c,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFi=new A.y("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.flT,null,B.L,null,null,null,null,null,null,null)
D.fGv=new A.y("Delete",null,B.Uk,null,null,null,null,null,null,null,null,null)
D.fGw=new A.y("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fGC=new A.y("Thumbnail",null,B.ps,null,null,null,null,null,null,null,null,null)
D.fHd=new A.y("Save the cover",null,B.cA,null,null,null,null,null,null,null,null,null)
D.fHi=new A.y("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.wV,null,B.L,null,null,null,null,null,null,null)
D.fHG=new A.y("Your photos",null,B.ps,null,null,null,null,null,null,null,null,null)
D.fHV=new A.y("Create Project",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fIh=new A.y("\u2b50 stars",null,B.Ux,null,null,null,null,null,null,null,null,null)
D.fIu=new A.y("Design your cover",null,A0.t4,null,null,null,null,null,null,null,null,null)
D.fIA=new A.y("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fID=new A.y("PICTURE",null,L.vf,null,null,null,null,null,null,null,null,null)
D.fIF=new A.y("\ud83c\udfaf",null,D.UN,null,null,null,null,null,null,null,null,null)
D.fJ_=new A.y("Paid",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fJ1=new A.y("You can undo it right after.",null,O.DY,null,null,null,null,null,null,null,null,null)
D.fJz=new A.y("Print",null,B.vc,null,null,null,null,null,null,null,null,null)
D.fJY=new A.y("Amount owed",null,D.aTb,null,null,null,null,null,null,null,null,null)
D.fKc=new A.y("Got it",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fKN=new A.y("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fKQ=new A.y("Add to budget",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fLh=new A.y("Debtor signature",null,B.a9i,null,null,null,null,null,null,null,null,null)
D.fLq=new A.y("Change icon",null,E.aSp,null,null,null,null,null,null,null,null,null)
D.fMc=new A.y("MADE BY THE SYSTEM, FROM YOUR TREE",null,T.t6,null,null,null,null,null,null,null,null,null)
D.fME=new A.y("Family tree QR",null,B.cA,null,null,null,null,null,null,null,null,null)
D.fMK=new A.y("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.UM,null,null,null,null,null,null,null,null,null)
D.fN7=new A.y("Download",null,B.vc,null,null,null,null,null,null,null,null,null)
D.fN8=new A.y("The person who planted this tree has not made a game yet.",null,B.vg,null,null,null,null,null,null,null,null,null)
D.fNc=new A.y("Change",null,B.ps,null,null,null,null,null,null,null,null,null)
D.fO1=new A.y("Clear all",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fO4=new A.y("WHAT SHOULD IT CHANGE?",null,L.vf,null,null,null,null,null,null,null,null,null)
D.fOD=new A.y("COLOUR",null,L.vf,null,null,null,null,null,null,null,null,null)
D.fOR=new A.y("Do it",null,B.cA,null,null,null,null,null,null,null,null,null)
D.fOU=new A.y("Create Tree",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fP2=new A.y("Give me another clue",null,D.JZ,null,null,null,null,null,null,null,null,null)
D.fPW=new A.y("Create Family Tree",null,B.f0,null,null,null,null,null,null,null,null,null)
D.fQ5=new A.y("THE TEACHER EXPLAINS THESE",null,T.t6,null,null,null,null,null,null,null,null,null)
D.fcy=new A.F(!0,E.k7,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQb=new A.y("Write the first page myself",null,D.fcy,null,null,null,null,null,null,null,null,null)
D.fQK=new A.y("Use this header",null,B.cA,null,null,null,null,null,null,null,null,null)
D.fQR=new A.y("Create Project",null,E.aST,null,null,null,null,null,null,null,null,null)
D.hcH=new C.abC(1,"header")
D.aaA=new C.abC(2,"projects")
D.hcI=new C.abC(3,"cashier")
D.aaB=new C.abC(4,"familyTree")
D.hpA=new C.cB0(0,"start")
D.hpB=new C.cB1(0,"start")
D.hd5=new C.YH(null)
D.he4=new C.Z9(null)
D.dxa=new A.bw(B.hN,[],A.av("bw<n,G0>"))
D.dfm=w([],x.dE)
D.dfn=w([],x.M)
D.heB=new C.bf0(D.dxa,D.dfm,D.dfn,0,0,null,null)
D.aXD=new C.a__(0,"intro")
D.aXE=new C.a__(1,"countdown")
D.aaP=new C.a__(2,"ask")
D.VC=new C.a__(3,"reveal")
D.aXF=new C.a__(4,"end")
D.hhd=new C.rY(G.Fw,D.lr,B.cI,G.ls,5,!1,!1,!1,0,null)
D.hhe=new C.rY(G.Fw,B.ej,B.cI,B.bO,2,!0,!0,!1,2,B.cI)
D.hhf=new C.rY(B.o3,B.cO,B.cI,G.ls,2,!0,!1,!1,2,B.aD)
D.hhg=new C.rY(G.Fw,B.dH,B.cI,G.ls,5,!1,!1,!1,1,null)
D.hhh=new C.rY(G.YH,D.agE,B.cI,G.ls,4,!0,!1,!0,0,null)
D.aXI=new C.rY(G.YH,B.dE,B.cI,G.ls,3,!0,!1,!0,2,null)
D.aXJ=new C.rY(G.my,D.lr,B.c,G.ls,0,!1,!1,!0,0,null)
D.aXK=new C.rY(B.o3,B.aC,B.cI,B.bO,2,!0,!0,!1,2,B.dE)
D.aXL=new C.rY(B.o3,F.n4,B.hV,G.ls,5,!1,!1,!0,3,null)
D.hhi=new C.rY(B.o3,B.dE,B.cI,G.ls,0,!0,!1,!1,0,B.aC)
D.aXM=new C.rY(G.Fw,B.ej,B.cI,B.bO,1,!1,!0,!1,1,null)
D.aXN=new C.rY(G.F3,B.aD,B.aC,G.ls,4,!0,!1,!0,2,null)
D.hhj=new C.rY(G.my,B.aD,B.ej,G.ls,3,!0,!1,!1,0,null)
D.hhk=new C.rY(B.o3,B.dH,B.cI,B.bO,1,!1,!0,!1,1,null)
D.hhl=new C.rY(G.F3,D.afL,B.c,G.ls,5,!1,!1,!0,0,null)
D.hhZ=new C.a_y(null)
D.hpJ=new C.aeX(0,"still")
D.VZ=new C.aeX(1,"walk")
D.ab8=new C.aeX(2,"pound")
D.ab9=new C.aeX(3,"drum")
D.hlb=new C.a0P(0,"greet")
D.aYc=new C.a0P(1,"teach")
D.aba=new C.a0P(2,"ask")
D.hlc=new C.a0P(3,"feedback")
D.aYd=new C.a0P(4,"end")
D.W3=new C.a17(0,"intro")
D.W4=new C.a17(1,"asking")
D.As=new C.a17(2,"reacting")
D.abk=new C.a17(3,"driving")
D.abl=new C.a17(4,"arrived")
D.abo=new C.aK5(0,"projects")
D.aYB=new C.aK5(1,"cashier")
D.hne=new C.aK5(2,"familyTree")})()};
(a=>{a["S8kNHIeDUAPFKpBIHk0Fca3gORo="]=a.current})($__dart_deferred_initializers__);