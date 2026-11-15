((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,P,A_,S,A7,L,H,E,T,A8,Q,A9,Aa,Ab,A0,Ac,Ad,R,Ae,Af,Ag,Ah,M,A1,Ai,A2,A3,A4,Aj,A5,Ak,G,Al,Am,An,A6,Ao,U,O,Ap,V,Aq,Ar,W,X,F,As,I,K,Y,C={
bFJ(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bFJ=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vW(null,""),$async$bFJ)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.W(y.z)
t=A.nm(b1)
s=A.c0(b3.length,null,!1,x.h5)
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
f.push(A.I(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.Y.aw(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.rg(t,a1,B.i0,"book",E.GD),$async$bFJ)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.RB(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.W(l!=null&&A.LZ(l)?y.k:y.y)
for(j=J.a7(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a2(r.a(j.h(a2,a7)),q,p):B.cC
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a3I(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFJ,v)},
ai9(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ai9=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vW(null,""),$async$ai9)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.W(y.z)
t=A.nm(b6)
s=x.S
r=A.cW(c1,0,A.dA(4,"count",s),A.U(c1).c)
q=H.a3v(new A.N(r,new C.fOz(),r.$ti.k("N<ak.E,m>")).aO(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fOy(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.Y.aw(b7,null)+"\nAllowed values: style one of "+B.d.aO(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ai9)
case 6:l=c5
k=H.RB(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.apI(s,D.dEM,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
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
return A.b(m.$1(f+B.Y.aw(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ai9)
case 10:l=c5
k=l==null?null:H.RB(l)
if(k==null)throw A.W(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.dd(a8,d),a5=J.aT(a2.a),a2=a2.$ti,a7=new A.kJ(a5,a2.k("kJ<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gR(a5))
b0=J.a7(a9)
b1=A.aJ(b0.h(a9,"index"))
i=b1==null?null:B.i.M(b1)
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
p=A.cF(new A.b7(h,s),new C.fOA(),s.k("M.E"),p)
p=H.a3v(A.pJ(p,3,A.a4(p).k("M.E")).aO(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cx<1>")
b4=A.C(new A.cx(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.J)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a3I(s,b9),$async$ai9)
case 13:b5=c5
for(s=J.a7(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.apI(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ai9,v)},
hFv(d,e,f){return A.cg(null,B.w.j(0.65),!1,null,new C.fY8(e,f),d,null,!0,!0,x.g2)},
apI:function apI(d,e,f){this.a=d
this.b=e
this.c=f},
fOz:function fOz(){},
fOy:function fOy(d){this.a=d},
fOA:function fOA(){},
fY8:function fY8(d,e){this.a=d
this.b=e},
bDx(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bDx=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aV(b1,new C.fBG())){u=null
w=1
break}t=B.d.cE(b1,new C.fBH())
s=$.Q()
r=new A.q0(new A.pC())
q=A.zx(r,D.aRN)
p=A.K()
p.r=B.c.gp(0)
q.ar(D.aRN,p)
o=A.K()
o.r=B.U.gp(0)
o.c=3.6
o.b=B.a9
o.d=B.bu
o.e=B.dR
n=new C.fBM(t)
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
a3=new A.aG(s.r,B.ai,null,null,p)
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
a3=new A.aG(s.r,B.ai,null,null,p)
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
return A.b(r.o3().xG(520,160),$async$bDx)
case 4:w=3
return A.b(b3.hr(B.hj),$async$bDx)
case 3:b0=b3
u=b0==null?null:J.eT(B.dO.gaU(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDx,v)},
fMf(d){return C.ikG(d)},
ikG(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fMf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bjB()
n=d.x!=null&&d.zL(null).length===0
if(d.x!=null)t=n?D.Ap:D.JI
else t=d.gUB()?D.JI:D.aMF
w=3
return A.b(C.bDx(d.ax),$async$fMf)
case 3:s=f
p.a=null
if(s!=null)p.a=A.aon(s)
r=A.a5u(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aMF}else{p.c=C.xn(q,!0)
p.b=n?D.Ap:D.JI}r.a45(A.h7K(new C.fMh(p,d,new C.fMi(),t,n,o),null,D.bGN,B.x9))
u=r.jI(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fMf,v)},
fSX(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fSX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fMf(d),$async$fSX)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.aB(q,0,40)
u=Ad.Hv(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fSX,v)},
fBG:function fBG(){},
fBH:function fBH(){},
fBM:function fBM(d){this.a=d},
fMi:function fMi(){},
fMh:function fMh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fMg:function fMg(){},
fYB(d,e){var w=0,v=A.j(x.H)
var $async$fYB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,B.w.j(0.55),!0,null,new C.fYF(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fYB)
case 2:return A.h(null,v)}})
return A.i($async$fYB,v)},
bGa(d,e,f,g){return C.isT(d,e,f,g)},
isT(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bGa=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gan(e.split(",")):e
r=B.cJ.aN(t)}catch(q){r=null}if(r==null||r.length===0){d.L(x.q).f.T(D.flp)
w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.fYx(g,r,f),d,null,!0,!0,x.H),$async$bGa)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bGa,v)},
fYG(d,e){var w=0,v=A.j(x.H)
var $async$fYG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,null,!0,null,new C.fYJ(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fYG)
case 2:return A.h(null,v)}})
return A.i($async$fYG,v)},
b_M:function b_M(d,e){this.c=d
this.a=e},
c7U:function c7U(){},
bcX:function bcX(d,e){this.b=d
this.a=e},
fYF:function fYF(d,e){this.a=d
this.b=e},
fYC:function fYC(d){this.a=d},
fYD:function fYD(d,e,f){this.a=d
this.b=e
this.c=f},
fYE:function fYE(d,e){this.a=d
this.b=e},
fYx:function fYx(d,e,f){this.a=d
this.b=e
this.c=f},
fYv:function fYv(d){this.a=d},
fYw:function fYw(d,e,f){this.a=d
this.b=e
this.c=f},
fYJ:function fYJ(d,e){this.a=d
this.b=e},
fYH:function fYH(d){this.a=d},
fYI:function fYI(d,e,f){this.a=d
this.b=e
this.c=f},
fGz(d,e){var w=0,v=A.j(x.y),u,t
var $async$fGz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3g(d),$async$fGz)
case 3:t=g
J.nT(t,new C.fGA(e))
u=A.aiN(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGz,v)},
fGA:function fGA(d){this.a=d},
apU:function apU(d,e,f){this.c=d
this.d=e
this.a=f},
aEB:function aEB(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dQf:function dQf(d,e){this.a=d
this.b=e},
dQ0:function dQ0(d,e){this.a=d
this.b=e},
dQ3:function dQ3(d,e,f){this.a=d
this.b=e
this.c=f},
dQ2:function dQ2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQ1:function dQ1(d,e){this.a=d
this.b=e},
dQ4:function dQ4(d,e){this.a=d
this.b=e},
dPZ:function dPZ(){},
dQ_:function dQ_(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dPY:function dPY(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dPJ:function dPJ(d){this.a=d},
dPK:function dPK(d,e,f){this.a=d
this.b=e
this.c=f},
dPL:function dPL(d,e){this.a=d
this.b=e},
dPI:function dPI(d){this.a=d},
dPQ:function dPQ(d,e){this.a=d
this.b=e},
dPH:function dPH(d){this.a=d},
dPR:function dPR(d,e,f){this.a=d
this.b=e
this.c=f},
dPS:function dPS(d,e,f){this.a=d
this.b=e
this.c=f},
dPG:function dPG(d,e){this.a=d
this.b=e},
dPT:function dPT(d,e,f){this.a=d
this.b=e
this.c=f},
dPF:function dPF(d,e){this.a=d
this.b=e},
dPU:function dPU(d,e){this.a=d
this.b=e},
dPE:function dPE(d){this.a=d},
dPV:function dPV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPC:function dPC(){},
dPw:function dPw(d){this.a=d},
dPx:function dPx(d){this.a=d},
dPD:function dPD(d,e){this.a=d
this.b=e},
dPW:function dPW(d,e){this.a=d
this.b=e},
dPB:function dPB(d){this.a=d},
dPX:function dPX(d){this.a=d},
dPA:function dPA(){},
dPM:function dPM(d,e){this.a=d
this.b=e},
dPz:function dPz(d){this.a=d},
dPN:function dPN(d,e,f){this.a=d
this.b=e
this.c=f},
dPy:function dPy(d,e){this.a=d
this.b=e},
dPv:function dPv(d,e){this.a=d
this.b=e},
dPO:function dPO(d){this.a=d},
dPP:function dPP(d,e,f){this.a=d
this.b=e
this.c=f},
dQi:function dQi(){},
dQj:function dQj(d,e){this.a=d
this.b=e},
dQg:function dQg(d){this.a=d},
dQh:function dQh(d){this.a=d},
dQc:function dQc(d,e){this.a=d
this.b=e},
dQd:function dQd(d){this.a=d},
dQ5:function dQ5(d,e,f){this.a=d
this.b=e
this.c=f},
dQ6:function dQ6(d,e,f){this.a=d
this.b=e
this.c=f},
dQ7:function dQ7(d,e,f){this.a=d
this.b=e
this.c=f},
dQ8:function dQ8(d,e,f){this.a=d
this.b=e
this.c=f},
dQ9:function dQ9(d,e,f){this.a=d
this.b=e
this.c=f},
dQa:function dQa(d,e,f){this.a=d
this.b=e
this.c=f},
dQb:function dQb(d,e,f){this.a=d
this.b=e
this.c=f},
dQk:function dQk(){},
dQl:function dQl(){},
dQm:function dQm(){},
dQn:function dQn(d){this.a=d},
dQe:function dQe(d,e){this.a=d
this.b=e},
hBm(d){return B.d.dP(D.a4N,new C.fHl(d),new C.fHm())},
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
fHl:function fHl(d){this.a=d},
fHm:function fHm(){},
alZ:function alZ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aWu:function aWu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
U5:function U5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgz:function bgz(){this.d=$
this.c=this.a=null},
dfW:function dfW(d,e){this.a=d
this.b=e},
dfU:function dfU(d,e){this.a=d
this.b=e},
dfV:function dfV(){},
dfX:function dfX(d,e){this.a=d
this.b=e},
hlE(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bh(J.k(u==null?"":u))
return new C.nw(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
LL(d,e){return C.ijg(d,e)},
ijg(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$LL=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$LL)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aV(J.t(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.Y.aQ(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.dd(p,x.f)
o=A.cF(o,new C.fJQ(),o.$ti.k("M.E"),x.B)
n=A.a4(o).k("Y<M.E>")
o=A.C(new A.Y(o,new C.fJR(),n),n.k("M.E"))
B.d.aZ(o,new C.fJS())
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
return A.i($async$LL,v)},
BB(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$BB=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aA(),$async$BB)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b8(f,new C.fXc(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aC("String","ngmy_family_book_v1_"+s+"_"+e,B.Y.aw(r,null)),$async$BB)
case 4:case 1:return A.h(u,v)}})
return A.i($async$BB,v)},
aSz(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aSz=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LL(d,e),$async$aSz)
case 2:u=h
t=J.cC(u)
s=t.bj(u,new C.h4J(f))
if(s===-1)t.c9(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.BB(d,e,u),$async$aSz)
case 3:return A.h(null,v)}})
return A.i($async$aSz,v)},
bE_(d,e,f){var w=0,v=A.j(x.H),u
var $async$bE_=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LL(d,e),$async$bE_)
case 2:u=h
J.nT(u,new C.fGr(f))
w=3
return A.b(C.BB(d,e,u),$async$bE_)
case 3:return A.h(null,v)}})
return A.i($async$bE_,v)},
bEe(d,e){return C.ijf(d,e)},
ijf(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bEe=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bEe)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aV(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.OC
w=1
break}p=B.Y.aQ(0,q,null)
if(x.f.b(p)){o=A.a2(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aJ(o.h(0,"emblem"))
k=k==null?null:B.i.M(k)
if(k==null)k=0
if(D.DN.al(0,o.h(0,"foil")))j=A.cO(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.i.D(i==null?25:i,18,36)
h=B.d.q(D.a6t,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.q(D.a5O,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.q(D.a5K,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.d6v,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.Iu(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.OC
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
return A.i($async$bEe,v)},
SI(d,e,f){return C.iso(d,e,f)},
iso(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$SI=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aA(),$async$SI)
case 7:r=h
w=8
return A.b(r.aC("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.Y.aw(f.aj(),null)),$async$SI)
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
return A.i($async$SI,v)},
Sa(d,e){return C.ijh(d,e)},
ijh(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Sa=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$Sa)
case 7:r=g
q=r.tT("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.LL(d,e),$async$Sa)
case 8:if(!j.cJ(g)){n=B.a.i(d.toLowerCase())
m=J.lJ(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aC("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Sa)
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
return A.i($async$Sa,v)},
aht(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$aht=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sa(d,e),$async$aht)
case 3:s=g
r=J.a7(s)
if(r.gI(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gI(s):"main"
r.J(s,t)
w=5
return A.b(A.aA(),$async$aht)
case 5:w=4
return A.b(g.aC("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$aht)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aht,v)},
a3W(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a3W=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Sa(d,e),$async$a3W)
case 2:s=h
J.h9(s,f)
w=3
return A.b(A.aA(),$async$a3W)
case 3:u=h
w=4
return A.b(u.aC("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a3W)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a3W)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a3W)
case 6:return A.h(null,v)}})
return A.i($async$a3W,v)},
nw:function nw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fJQ:function fJQ(){},
fJR:function fJR(){},
fJS:function fJS(){},
fXc:function fXc(){},
h4J:function h4J(d){this.a=d},
fGr:function fGr(d){this.a=d},
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
bRm:function bRm(d){this.a=d},
isI(d,e,f,g,h,i,j){return A.a6(d,!1).ce(A.ec(new C.fXN(j,i,f,e,h,g),!0,null,x.H))},
S5(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$S5=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sa(h,g),$async$S5)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.L(x.q).f.T(D.aU7)
u=!1
w=1
break}w=4
return A.b(C.hFv(d,f,e),$async$S5)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.aht(h,g),$async$S5)
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
return A.b(C.BB(h,r,p),$async$S5)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.SI(h,r,new C.Iu("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$S5)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$S5,v)},
fXN:function fXN(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a_E:function a_E(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBA:function aBA(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dgB:function dgB(d){this.a=d},
dgA:function dgA(d,e){this.a=d
this.b=e},
dgp:function dgp(d,e){this.a=d
this.b=e},
dgm:function dgm(d,e){this.a=d
this.b=e},
dfY:function dfY(d){this.a=d},
dfZ:function dfZ(d,e){this.a=d
this.b=e},
dgq:function dgq(d){this.a=d},
dg6:function dg6(d){this.a=d},
dg4:function dg4(d){this.a=d},
dg5:function dg5(d){this.a=d},
dg7:function dg7(d){this.a=d},
dgn:function dgn(d){this.a=d},
dgo:function dgo(){},
dg2:function dg2(d){this.a=d},
dg3:function dg3(d,e){this.a=d
this.b=e},
dg8:function dg8(d){this.a=d},
dg9:function dg9(d,e){this.a=d
this.b=e},
dgz:function dgz(d){this.a=d},
dgy:function dgy(d,e){this.a=d
this.b=e},
dgx:function dgx(d){this.a=d},
dgj:function dgj(d){this.a=d},
dgi:function dgi(d){this.a=d},
dgk:function dgk(d){this.a=d},
dg_:function dg_(d,e){this.a=d
this.b=e},
dgl:function dgl(d,e){this.a=d
this.b=e},
dgc:function dgc(d){this.a=d},
dgd:function dgd(d){this.a=d},
dgb:function dgb(){},
dge:function dge(d){this.a=d},
dgf:function dgf(d){this.a=d},
dgg:function dgg(d,e){this.a=d
this.b=e},
dgh:function dgh(d,e,f){this.a=d
this.b=e
this.c=f},
dga:function dga(d,e){this.a=d
this.b=e},
dgs:function dgs(d){this.a=d},
dgr:function dgr(){},
dgt:function dgt(d){this.a=d},
dgu:function dgu(d){this.a=d},
dgv:function dgv(d){this.a=d},
dgw:function dgw(d,e){this.a=d
this.b=e},
dg0:function dg0(d){this.a=d},
dg1:function dg1(d){this.a=d},
a_I:function a_I(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgY:function bgY(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
din:function din(d){this.a=d},
dio:function dio(d){this.a=d},
dim:function dim(d){this.a=d},
dip:function dip(d){this.a=d},
dil:function dil(d){this.a=d},
diq:function diq(d){this.a=d},
dik:function dik(d){this.a=d},
dir:function dir(d,e){this.a=d
this.b=e},
dij:function dij(d,e){this.a=d
this.b=e},
dis:function dis(d,e){this.a=d
this.b=e},
a_G:function a_G(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
afW:function afW(d,e,f){this.a=d
this.b=e
this.c=f},
aBD:function aBD(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dgQ:function dgQ(d,e){this.a=d
this.b=e},
dgP:function dgP(d,e){this.a=d
this.b=e},
dgU:function dgU(d){this.a=d},
dgT:function dgT(d,e){this.a=d
this.b=e},
dgR:function dgR(d){this.a=d},
dgS:function dgS(d){this.a=d},
dgV:function dgV(d){this.a=d},
dgW:function dgW(d){this.a=d},
dgO:function dgO(d,e){this.a=d
this.b=e},
dgN:function dgN(d,e){this.a=d
this.b=e},
KT:function KT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ZW:function ZW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cP9:function cP9(d){this.a=d},
cPa:function cPa(){},
cPb:function cPb(d){this.a=d},
bea:function bea(d,e,f){this.b=d
this.c=e
this.a=f},
be1:function be1(d,e){this.b=d
this.a=e},
uU:function uU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_e:function a_e(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
be8:function be8(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d7N:function d7N(d,e,f){this.a=d
this.b=e
this.c=f},
d7M:function d7M(d,e){this.a=d
this.b=e},
d8b:function d8b(d){this.a=d},
d7Z:function d7Z(){},
d8c:function d8c(d){this.a=d},
d7Y:function d7Y(){},
d8d:function d8d(d,e){this.a=d
this.b=e},
d7X:function d7X(d,e){this.a=d
this.b=e},
d8e:function d8e(d,e){this.a=d
this.b=e},
d7W:function d7W(d,e){this.a=d
this.b=e},
d8f:function d8f(d){this.a=d},
d7V:function d7V(){},
d8g:function d8g(d,e){this.a=d
this.b=e},
d7U:function d7U(d,e){this.a=d
this.b=e},
d8h:function d8h(d){this.a=d},
d86:function d86(d,e){this.a=d
this.b=e},
d8i:function d8i(d){this.a=d},
d8j:function d8j(d){this.a=d},
d8l:function d8l(d){this.a=d},
d8m:function d8m(d){this.a=d},
d85:function d85(d,e){this.a=d
this.b=e},
d8n:function d8n(d,e){this.a=d
this.b=e},
aIB:function aIB(d){this.a=d},
bjv:function bjv(d){this.a=d},
bcj:function bcj(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
am_:function am_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a1U:function a1U(d,e){this.a=d
this.b=e},
am0:function am0(d,e,f,g,h,i){var _=this
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
bRw:function bRw(d){this.a=d},
bRq:function bRq(d){this.a=d},
bRp:function bRp(d,e){this.a=d
this.b=e},
bRz:function bRz(d){this.a=d},
bRr:function bRr(d){this.a=d},
bRs:function bRs(d){this.a=d},
bRv:function bRv(d){this.a=d},
bRu:function bRu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRx:function bRx(d,e){this.a=d
this.b=e},
bRy:function bRy(){},
bRt:function bRt(d){this.a=d},
bRn:function bRn(d,e){this.a=d
this.b=e},
bRo:function bRo(d){this.a=d},
bp5:function bp5(d,e){this.b=d
this.a=e},
aBB:function aBB(){},
iw(d,e){var w
$.Q()
w=A.K()
w.b=B.a9
w.c=e
w.r=d.gp(0)
w.d=B.bu
w.e=B.dR
return w},
bDz(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bo(j.save())
j.translate(e.a,e.b)
d.pk(0,a0?-f:f,f)
w=A.bs(B.i2,8,36)
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
d.ah(D.eqJ,new A.o(-4+v,-2),C.iw(q,5))
d.ah(D.eoj,new A.o(4-v,-2),C.iw(q,5))}else{t=A.bs(B.Jy,14,40)
p=A.K()
p.r=v.gp(0)
d.bZ(t,p)}v=u.r
u=x.v
o=new A.aG(v,B.ai,k,k,A.a([],u))
t=-64-r
o.E(new A.aZ(-11,t))
o.E(new A.c6(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.c6(15,-40,11,t))
o.E(new A.bv())
t=A.K()
t.r=w.gp(0)
d.af(o,t)
u=new A.aG(v,B.ai,k,k,A.a([],u))
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
break}if(a1===D.b13){n=-52+w*14
d.ah(new A.o(10,n-22),new A.o(10,n+44),C.iw(F.FQ,3.4))
d.ah(D.er0,new A.o(9,n),C.iw(q,4))
d.ah(D.eoI,new A.o(10,n),C.iw(q,4))}else if(a1===D.b14){d.ah(D.epO,new A.o(-8,-26-Math.max(0,w)*6),C.iw(q,4))
d.ah(D.emM,new A.o(8,-26-Math.max(0,-w)*6),C.iw(q,4))}else{w=s*3
v=-38-r
d.ah(D.epT,new A.o(-12-w,v),C.iw(q,4))
d.ah(D.aLH,new A.o(12+w,v),C.iw(q,4))}w=A.K()
w.r=q.gp(0)
d.ar(D.f8j,w)
m=new A.o(0,-77-r)
w=A.bs(m,22,19)
v=A.K()
v.r=q.gp(0)
d.bZ(w,v)
w=h.y
if(w!=null){v=A.bs(m.a2(0,K.vp),15,24)
u=A.K()
u.r=w.gp(0)
d.bZ(v,u)
u=m.a2(0,D.emG)
v=A.K()
v.r=w.gp(0)
d.N(u,4,v)}else{w=A.bs(m.a2(0,B.tp),23,20)
v=h.d
u=A.K()
u.r=v.gp(0)
d.cC(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a2(0,D.eqZ),m.a2(0,D.epM),C.iw(v,2.2))
d.ah(m.a2(0,D.eoH),m.a2(0,D.emD),C.iw(v,2.2))}if(w===4){w=m.a2(0,D.er2)
u=A.K()
u.r=v.gp(0)
d.N(w,6,u)
u=m.a2(0,D.eoJ)
w=A.K()
w.r=v.gp(0)
d.N(u,6,w)}}w=m.a2(0,D.epz)
v=A.K()
v.r=B.ic.gp(0)
d.N(w,0.9,v)
v=m.a2(0,D.epn)
w=A.K()
w.r=B.ic.gp(0)
d.N(v,0.9,w)
if(i){l=m.a2(0,K.a8p)
w=A.bs(l,21,22)
v=A.K()
v.r=D.lB.gp(0)
d.bZ(w,v)
v=A.bs(l.a2(0,K.aLE),5,12)
w=A.K()
w.r=D.bgj.gp(0)
d.bZ(v,w)
d.ah(l.a2(0,D.eqV),l.a2(0,K.aM0),C.iw(B.cO,1.4))
d.ah(D.aLH,new A.o(15,-88-r),C.iw(q,3.6))}j.restore()},
hzY(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.bo(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bU(0,f)
v=A.bs(B.dF,18,96)
u=B.w.j(0.28)
$.Q()
t=A.K()
t.r=u.gp(0)
d.bZ(v,t)
t=A.bs(B.dF,11,70)
v=B.w.j(0.2)
u=A.K()
u.r=v.gp(0)
d.bZ(t,u)
d.ly(D.aRR,A.K())
C.i7x(d,g,h,i,j)
s=(k==null?D.a8v:k).a-w>=0?1:-1
w=A.K()
w.a=B.LO
w.sav(A.jA(new A.o(s*70,-60),new A.o(-s*70,-60),A.a([D.aii.j(0.5),D.aii.j(0.12),D.bnE.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.ar(D.aRR,w)
r.restore()
r.restore()},
i7x(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ar(d,B.w,0.28)
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
s=A.bn(D.f8k,B.tt)
p=$.Q()
o=A.K()
o.r=u.gp(0)
a1.am(s,o)
o=A.bn(D.f8f,B.hP)
s=A.ar(v,B.w,0.18)
s.toString
n=A.K()
n.r=s.gp(0)
a1.am(o,n)
n=A.bn(D.f8t,B.hP)
o=A.ar(v,B.w,0.1)
o.toString
s=A.K()
s.r=o.gp(0)
a1.am(n,s)
s=A.K()
s.r=d.gp(0)
a1.bZ(D.f8m,s)
s=A.K()
s.r=d.gp(0)
a1.bZ(D.f75,s)
s=a1.c
J.bo(s.save())
s.translate(a3.w,0)
J.bo(s.save())
a1.pk(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aG(p.r,B.ai,e,e,A.a([],n))
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
a1.mT(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.ddi[j]
i=new A.ao(B.O,B.M,B.R,B.S,B.Q)
i.b=B.a9
i.c=5
i.r=k.gp(0)
i.d=B.bu
i.e=B.dR
a1.ah(new A.o(-34+u,-64),new A.o(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.F(B.o.aq(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.Q()
f=new A.ao(B.O,B.M,B.R,B.S,B.Q)
f.r=i.gp(0)
a1.N(new A.o(g,h),3.6,f)
f=new A.ao(B.O,B.M,B.R,B.S,B.Q)
f.r=u.gp(0)
a1.N(new A.o(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ao(B.O,B.M,B.R,B.S,B.Q)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.bu
i.e=B.dR
a1.ah(new A.o(g,-64),new A.o(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ao(B.O,B.M,B.R,B.S,B.Q)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.bu
i.e=B.dR
a1.ah(new A.o(-30,h),new A.o(30,h),i)}break
default:a1.ah(D.eqo,D.enr,C.iw(a2.c.j(0.9),3))}a1.ah(D.eqW,D.epV,C.iw(B.w.j(0.18),1.6))
a1.ah(D.emL,K.aLJ,C.iw(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.Q()
i=A.K()
i.r=u.gp(0)
a1.ar(D.f71,i)
s.restore()
i=A.K()
i.r=a0.gp(0)
a1.ar(D.f7f,i)
n=new A.aG(k.r,B.ai,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.c6(0,-57,9,-66))
n.E(new A.c6(0,-60,-9,-66))
k=A.K()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cC(D.f7o,0.1,2.941592653589793,!1,C.iw(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.a8z
n=25*q
k=23*q
i=9*q
C.hwd(a1,new A.o(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.Ed:o
C.hwd(a1,new A.o(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.eob,D.eo7,C.iw(D.ajg,4))
a1.ah(D.eo9,D.eo5,C.iw(D.Gd.j(0.7),1.4))
u=A.K()
u.r=B.cO.gp(0)
a1.N(D.eo8,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.bo(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.hW(0,a3.f)
a1.bU(0,r)
C.i7u(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hwd(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aJ(0,e),r=s.gcK(),q=r===0?B.i2:s.eW(0,r),p=B.i.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
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
i7u(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bs(B.vo,40,38)
$.Q()
v=A.K()
v.r=c0.gp(0)
c2.bZ(w,v)}if(c1===4){$.Q()
w=A.K()
w.r=c0.gp(0)
c2.N(D.eq4,9.5,w)
w=A.K()
w.r=c0.gp(0)
c2.N(D.en1,9.5,w)}w=A.bs(D.eri,10,6)
v=$.Q()
u=A.K()
u.r=c8.gp(0)
c2.bZ(w,u)
u=A.bs(D.epw,10,6)
w=A.K()
w.r=c8.gp(0)
c2.bZ(u,w)
v=v.r
w=x.v
t=new A.aG(v,B.ai,b9,b9,A.a([],w))
t.E(new A.aZ(0,-20))
t.E(new A.kT(13,-20,17,-9,16,2))
t.E(new A.kT(15,13,8,20,0,20))
t.E(new A.kT(-8,20,-15,13,-16,2))
t.E(new A.kT(-17,-9,-13,-20,0,-20))
t.E(new A.bv())
u=A.K()
u.sav(A.wf(D.eqL,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iw(c8.j(0.5),0.8)
c2.cC(D.f8v,3.455751918948773,2.5132741228718345,!1,s)
c2.cC(D.f78,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.eq1,D.epQ,s)
c2.ah(D.emY,D.emP,s)
c2.cC(D.f7n,2.2,1.4,!1,s)
c2.cC(D.f76,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ao(B.O,B.M,B.R,B.S,B.Q)
n.r=c0.gp(0)
c2.N(new A.o(p*14.5,-3+o*17.5),4.3,n)}p=A.K()
p.r=c0.gp(0)
c2.cC(D.f7B,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aG(v,B.ai,b9,b9,A.a([],w))
p.E(new A.aZ(-15,-11))
p.E(new A.c6(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.c6(0,-12,-13,-6))
p.E(new A.bv())
o=A.K()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.epR,D.emQ,C.iw(G.np,1.4))
o=A.K()
o.r=c0.gp(0)
c2.N(D.eq7,3,o)
o=A.K()
o.r=c0.gp(0)
c2.N(D.en2,3,o)
o=new A.aG(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.c6(-12,22,0,26))
o.E(new A.c6(12,22,13,6))
o.E(new A.c6(8,13,0,12))
o.E(new A.c6(-8,13,-13,6))
o.E(new A.bv())
p=A.K()
p.r=B.iG.gp(0)
c2.af(o,p)
p=new A.aG(v,B.ai,b9,b9,A.a([],w))
p.E(new A.aZ(-7,8))
p.E(new A.c6(0,6,7,8))
p.E(new A.c6(0,10.5,-7,8))
o=A.K()
o.r=B.bP.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aG(v,B.ai,b9,b9,A.a([],w))
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
c2.cC(D.f7I,3.4,2.5,!1,C.iw(o,1.4))
o=A.ar(m,B.c,0.3)
o.toString
c2.cC(D.f7v,3.6,2.2,!1,C.iw(o,1.2))
o=new A.aG(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(11,-22))
o.E(new A.c6(27,-34,25,-19))
o.E(new A.c6(18,-18,11,-22))
p=A.ar(m,B.c,0.1)
p.toString
n=A.K()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aG(v,B.ai,b9,b9,A.a([],w))
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
c2.N(D.emR,3,p)
break
case 3:p=A.K()
p.r=c0.gp(0)
c2.cC(D.f7F,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ar(c0,B.c,0.18)
p.toString
o=new A.ao(B.O,B.M,B.R,B.S,B.Q)
o.b=B.a9
o.c=0.9
o.r=p.gp(0)
o.d=B.bu
o.e=B.dR
c2.ah(new A.o(r*3.6,-19+Math.abs(r)*0.8),new A.o(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=I.aCr[l]
o=new A.ao(B.O,B.M,B.R,B.S,B.Q)
o.b=B.a9
o.c=4.5
o.r=c0.gp(0)
o.d=B.bu
o.e=B.dR
c2.ah(new A.o(k,0),new A.o(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ao(B.O,B.M,B.R,B.S,B.Q)
o.r=p.gp(0)
c2.N(new A.o(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.K()
p.r=c0.gp(0)
c2.cC(D.f7E,3.204424506661589,3.015928947446201,!0,p)
p=A.ar(c0,B.c,0.25)
p.toString
c2.ah(K.a8p,K.a8o,C.iw(p,1))
break
default:p=A.K()
p.r=c0.gp(0)
c2.cC(D.f79,3.267256359733385,2.8902652413026098,!0,p)}i=B.i.D(c4.b,0,1)*0.4+0.1
p=A.bs(D.er4,5,8)
o=D.afz.j(i)
n=A.K()
n.r=o.gp(0)
c2.bZ(p,n)
n=A.bs(D.epI,5,8)
p=D.afz.j(i)
o=A.K()
o.r=p.gp(0)
c2.bZ(n,o)
h=c4.e*2.4
o=new A.aG(v,B.ai,b9,b9,A.a([],w))
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
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=F.fK[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.bs(new A.o(a5,-3),a3,7)
a6=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a6.r=B.c.j(0.96).gp(0)
c2.bZ(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.bo(d.save())
a6=A.a([],w)
a4=new A.aG(v,B.ai,b9,b9,a6)
a6.push(new A.jS(A.bs(new A.o(a5,-3),a3,7)))
a4.ab()
a3=a4.e
if(a3==null)a3=a4.e=new A.Ea(a4.glX().a.snapshot())
d.clipPath(a3.a,$.np(),!0)
a3=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a3.r=D.bk6.gp(0)
c2.N(new A.o(a7,a8),2.1,a3)
a3=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a3.r=B.w.gp(0)
c2.N(new A.o(a7,a8),1.05,a3)
a3=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a3.r=B.c.gp(0)
c2.N(new A.o(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.Z9:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a9.b=B.a9
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bu
a9.e=B.dR
a3=p?0.8:0
c2.cC(A.bs(new A.o(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.eb
else{b1=A.ar(c0,B.w,0.2)
b1.toString}b2=new A.ao(B.O,B.M,B.R,B.S,B.Q)
b2.b=B.a9
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bu
b2.e=B.dR
c2.ah(new A.o(a5-a4,b0-a6+0.4),new A.o(a5+a4,b0-0.6-a3),b2)}b3=B.i.D(c4.a,0,1)
if(o)b4=D.bu5
else{u=A.ar(c8,D.bnG,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.i.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aG(v,B.ai,b9,b9,A.a([],w))
w=-b6
b8.E(new A.aZ(w,11.5))
b8.E(new A.c6(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.c6(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.bv())
v=A.K()
v.r=D.bn_.gp(0)
c2.af(b8,v)
J.bo(d.save())
c2.mT(0,b8)
v=B.c.j(0.95)
u=A.K()
u.r=v.gp(0)
c2.ar(new A.a1(w,11,w+b6*2,13.2),u)
u=A.bs(new A.o(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.K()
w.r=D.bua.gp(0)
c2.bZ(u,w)
d.restore()
c2.af(b8,C.iw(b4,1.1))}else{u=new A.aG(v,B.ai,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.aZ(-5.2,p))
u.E(new A.c6(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iw(b4,1.5))
if(b5>0.6){w=new A.aG(v,B.ai,b9,b9,A.a([],w))
w.E(new A.aZ(-4.6,11.8))
w.E(new A.c6(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.c6(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.K()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cC(D.f7m,-1.2,2.2,!1,C.iw(c8.j(0.5),0.8))
c2.cC(D.f7b,2.141592653589793,2.2,!1,C.iw(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.K()
w.r=c1.gp(0)
c2.N(D.epp,1.7,w)
w=A.K()
w.r=c1.gp(0)
c2.N(D.epl,1.7,w)}},
id6(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.Q(),f=new A.q0(new A.pC()),e=A.zx(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.K()
a2.sav(A.jA(B.H,new A.o(0,a0*0.46),D.da1,D.d1w,B.x,h))
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
t=new A.ao(B.O,B.M,B.R,B.S,B.Q)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.N(new A.o(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.bo(a2.save())
a2.translate(200,120)
e.hW(0,-0.5)
d=A.K()
a0=x.O
d.sav(A.wf(B.H,230,A.a([D.biR,B.L],a0),h,B.x,h,h,0))
e.bZ(D.f7S,d)
a2.restore()
d=A.K()
d.sav(A.wf(D.a8y,58,A.a([D.bm2,B.L],a0),h,B.x,h,h,0))
e.N(D.a8y,58,d)
d=A.K()
d.r=D.bhx.gp(0)
e.N(D.a8y,24,d)
d=A.K()
d.r=D.ZA.gp(0)
e.N(D.enL,5,d)
d=A.K()
d.r=D.ZA.gp(0)
e.N(D.enP,3.4,d)
d=A.K()
d.r=D.ZA.gp(0)
e.N(D.enO,2.4,d)
for(d=x.v,s=0;s<3;++s,g=u){u=A.a([],d)
r=new A.aG(g.r,B.ai,h,h,u)
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
g=[D.bg6,D.bi7,D.bo_][s]
u=$.Q()
t=new A.ao(B.O,B.M,B.R,B.S,B.Q)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cwq[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ao(B.O,B.M,B.R,B.S,B.Q)
u.b=B.a9
u.c=2.4
u.r=D.ZT.gp(0)
u.d=B.bu
u.e=B.dR
e.ah(new A.o(o,k),new A.o(g,d),u)
g=A.bs(new A.o(g,k-27),11,46)
u=new A.ao(B.O,B.M,B.R,B.S,B.Q)
u.r=D.ZT.gp(0)
e.bZ(g,u)
d=A.bs(new A.o(o-12,d),8,24)
u=new A.ao(B.O,B.M,B.R,B.S,B.Q)
u.r=D.ZT.gp(0)
e.bZ(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ao(B.O,B.M,B.R,B.S,B.Q)
u.r=D.bhA.j(0.8).gp(0)
e.N(new A.o(20+v*52+g*7,400+d*5),1.2,u)}g=A.K()
g.sav(A.jA(D.emk,D.emm,D.d3t,B.Dy,B.x,h))
e.ar(new A.a1(-200,412,650,1300),g)
j=new A.e5()
j.d_(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.bs(new A.o(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.h8()?B.c:B.w
d=new A.ao(B.O,B.M,B.R,B.S,B.Q)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.bZ(u,d)}J.bo(a2.save())
a2.translate(225,590)
e.pk(0,1,0.34)
g=A.K()
g.sav(A.wf(B.H,250,A.a([D.boW,D.bis,D.bqR],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.N(B.H,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ar(D.ai_,D.bh4,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.Q()
a0=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a0.b=B.a9
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bu
a0.e=B.dR
e.ah(new A.o(o+i*2,k),new A.o(o+i*5,g+Math.abs(i)*3),a0)}}C.i5C(e)
for(l=0;l<3;++l)C.i94(e,D.aAf[l])
C.i8U(e,D.enF)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.Q()
a0=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a0.b=B.a9
a0.c=2.4
a0.r=D.ZO.gp(0)
a0.d=B.bu
a0.e=B.dR
e.ah(new A.o(o,452+g),new A.o(o+1,436+d),a0)}e.ah(D.emN,D.en6,C.iw(D.bhO,1.6))
a2.restore()
return f.o3()},
i5C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.Q().r,g=x.v,f=new A.aG(h,B.ai,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.kT(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.kT(416,382,432,422,428,462))
f.E(new A.bv())
w=A.K()
w.sav(A.jA(new A.o(354,0),new A.o(430,0),D.dxF,B.nK,B.x,i))
d.af(f,w)
v=new A.e5()
v.d_(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.w.j(0.18)
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.b=B.a9
p.c=1.1
p.r=q.gp(0)
p.d=B.bu
p.e=B.dR
d.ah(new A.o(t,s),new A.o(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.deG[o]
w=n.a
r=392+w*12
q=-n.b
p=r+w*52
m=336+(q*46-8)
w=p+w*42
q=m+(q*34+4)
l=A.a([],g)
k=new A.aG(h,B.ai,i,i,l)
l.push(new A.aZ(r,336))
k.ab()
r=new A.c6(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.ak(p)
k.ab()
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.b=B.a9
r.c=8
r.r=D.agh.gp(0)
r.d=B.bu
r.e=B.dR
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ao(B.O,B.M,B.R,B.S,B.Q)
l.r=A.ar(D.bhG,D.bnZ,v.ai()).j(0.92).gp(0)
d.N(new A.o(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.b=B.a9
r.c=1.2
r.r=D.ZO.gp(0)
r.d=B.bu
r.e=B.dR
d.ah(new A.o(w,q+8),new A.o(w,q+22),r)
q=A.bs(new A.o(w,q+28),13,7)
w=new A.ao(B.O,B.M,B.R,B.S,B.Q)
w.r=D.bpe.gp(0)
d.bZ(q,w)}},
i94(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bs(new A.o(a5,a6+2),a9,a7*2.8),b1=B.w.j(0.3),b2=$.Q(),b3=A.K()
b3.r=b1.gp(0)
b4.bZ(b0,b3)
b2=b2.r
b3=x.v
w=new A.aG(b2,B.ai,a4,a4,A.a([],b3))
b0=a5-a7
b1=a6-a8
w.E(new A.aZ(b0,b1))
w.E(new A.aq(b0,a6))
v=a5+a7
w.E(new A.c6(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.bv())
u=A.K()
u.sav(A.jA(new A.o(b0,0),new A.o(v,0),D.deM,B.nK,B.x,a4))
b4.af(w,u)
t=new A.e5()
t.d_(B.o.V(a5*7))
v=b4.c
J.bo(v.save())
b4.mT(0,w)
for(s=0;s<40;++s){r=b0+t.ai()*a7*2
q=b1+t.ai()*a8
u=t.ai()
p=t.ai()
o=B.w.j(0.14)
n=new A.ao(B.O,B.M,B.R,B.S,B.Q)
n.b=B.a9
n.c=1
n.r=o.gp(0)
n.d=B.bu
n.e=B.dR
b4.ah(new A.o(r,q),new A.o(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.ahU.j(0.75)
n=A.K()
n.r=o.gp(0)
b4.ar(new A.a1(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.i.bh(u);++l){k=m+l*10
j=A.a([],b3)
i=new A.aG(b2,B.ai,a4,a4,j)
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
j=new A.ao(B.O,B.M,B.R,B.S,B.Q)
j.r=D.lB.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aG(b2,B.ai,a4,a4,u)
b2=a6-8
f.E(new A.aZ(b0,b2))
for(p/=6,l=0;l<=B.i.bh(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.ak(n)
f.ab()}b4.af(f,C.iw(D.ahU.j(0.7),1.6))
v.restore()
b0=$.Q().r
b2=new A.aG(b0,B.ai,a4,a4,A.a([],b3))
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
m.r=D.ai7.gp(0)
b4.af(b2,m)
m=A.K()
m.r=D.ai7.gp(0)
b4.N(new A.o(a5-a7*0.62,a6-a8*0.5),u,m)
m=b5.e
u=b1-m
b2=a7*1.38
o=a5-b2
j=b1+4
p=a5+b2
e=new A.aG(b0,B.ai,a4,a4,A.a([],b3))
e.E(new A.aZ(o,j))
n=b1-m*0.55
e.E(new A.c6(a5-a9,n,a5,u))
e.E(new A.c6(a5+a9,n,p,j))
e.E(new A.c6(a5,b1+a7*0.34,o,j))
e.E(new A.bv())
b1=A.K()
n=a7*1.4
b1.sav(A.jA(new A.o(a5-n,0),new A.o(a5+n,0),D.dig,B.nK,B.x,a4))
b4.af(e,b1)
J.bo(v.save())
b4.mT(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h8()?B.w:D.bhd).j(0.16)
i=new A.ao(B.O,B.M,B.R,B.S,B.Q)
i.b=B.a9
i.c=0.9
i.r=n.gp(0)
i.d=B.bu
i.e=B.dR
b4.ah(new A.o(a5+(p-0.5)*3,u),new A.o(o+a9*d,j+b1*a7*0.3),i)}for(l=1;l<5;++l){a0=u+m*l/4.6
a1=b2*l/4.6
b1=A.a([],b3)
p=new A.aG(b0,B.ai,a4,a4,b1)
n=a0+2
b1.push(new A.aZ(a5-a1,n))
p.ab()
n=new A.c6(a5,a0+7+l*1.5,a5+a1,n)
b1.push(n)
b1=p.f
if(b1!=null)n.ak(b1)
p.ab()
b1=B.w.j(0.22)
n=new A.ao(B.O,B.M,B.R,B.S,B.Q)
n.b=B.a9
n.c=1.2
n.r=b1.gp(0)
n.d=B.bu
n.e=B.dR
b4.af(p,n)}v.restore()
for(s=0;s<46;++s){d=s/45
a2=o+a9*d
a3=j+Math.sin(d*3.141592653589793)*a7*0.3
b1=t.ai()
b2=t.ai()
v=new A.ao(B.O,B.M,B.R,B.S,B.Q)
v.b=B.a9
v.c=1.1
v.r=D.bop.gp(0)
v.d=B.bu
v.e=B.dR
b4.ah(new A.o(a2,a3),new A.o(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aG(b0,B.ai,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bv())
b0=A.K()
b0.r=D.bkC.gp(0)
b4.af(a9,b0)},
i8U(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+I.aCo[s]
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.Q)
q.b=B.a9
q.c=3
q.r=D.ZO.gp(0)
q.d=B.bu
q.e=B.dR
d.ah(new A.o(r,u),new A.o(r,t),q)}u=A.bs(e.a2(0,K.aLD),24,36)
t=$.Q()
r=A.K()
r.r=D.btk.gp(0)
d.bZ(u,r)
t=new A.aG(t.r,B.ai,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.aZ(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.c6(w,v-24,r,u))
t.E(new A.bv())
u=A.K()
u.r=D.agY.gp(0)
d.af(t,u)},
i8b(d){switch(B.o.F(d,8)){case 0:return D.b0C
case 1:return D.b0A
case 2:return D.b0z
case 3:return D.b0y
case 4:return D.b0B
case 5:return D.b0D
case 6:return D.hxQ
default:return D.hxP}},
SG(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bp6()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a8z:j
w.as=k==null?D.Ed:k
C.hzY(d,e,p,C.i8b(m),w,s,m,l)},
hBs(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bTa:function bTa(){var _=this
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
tf:function tf(d,e,f,g,h,i,j,k,l,m){var _=this
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
bp6:function bp6(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
ami:function ami(){this.b=this.a=null},
aWz:function aWz(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
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
bT6:function bT6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bT7:function bT7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bT8:function bT8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bT9:function bT9(){},
bT1:function bT1(d){this.a=d},
ag4:function ag4(d,e){this.a=d
this.b=e},
ae2:function ae2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
N6(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bRM(s)
s.bBE(d)
return s},
H4(d,e,f,g,h,i,j){var w,v=A.U(g).k("Y<1>")
v=A.d2(new A.Y(g,new C.fus(f),v),v.k("M.E"))
w=A.C(v,A.a4(v).k("ci.E"))
B.d.e0(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.v(v,A.cW(w,0,A.dA(3,"count",x.S),A.U(w).c))
B.d.e0(v,d)
return new C.lr(e,v,B.d.co(v,f),h,i,"tree",j)},
iuk(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.T(c0,x.cg),c2=new C.h4A(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.jB(c4,c0)
t=A.C(c4,A.a4(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.jB(c4,c0)
r=A.C(c4,A.a4(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.jB(c4,c0)
q=A.C(c4,A.a4(c4).k("ci.E"))
for(c4=w.length,v=A.U(t).k("Y<1>"),s=v.k("M.E"),p=A.U(w).k("Y<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.J)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.c()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.wu)g="father"
else g=h===D.ou?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Y(t,new C.h4C(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.H4(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Y(w,new C.h4D(i,m),p),o)
B.d.e0(d,c6)
c2.$2(b4,new C.lr("True or false: "+h+" is the "+g+" of "+l+".",D.aBg,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lr("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",D.aBg,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.Ga(m)
h=a0.length
if(h!==0){a1=a0[c6.az(h)]
h=B.a.i(a1.b)
f=A.C(new A.Y(t,new C.h4E(l,a0,c5),v),s)
e=a1.c
if(e===D.wu)e="son"
else e=e===D.ou?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.H4(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.eA([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mA(a5,a5.r,f.k("mA<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.H4(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.U(a0),a2=e.k("iu<1>"),a3=new A.iu(a0,1,b3,a2),a3.n8(a0,1,b3,e.c),a3=new A.bR(a3,a3.gI(0),a2.k("bR<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.H4(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.arq(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Y(t,new C.h4F(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.H4(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.c()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.c()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.C(new A.Y(t,new C.h4G(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.wu
if(e)a2=b7
else a2=f===D.ou?b8:b9
if(e)f=b7
else f=f===D.ou?b8:b9
c2.$2("grand",C.H4(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aN4(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.az(k)].b)
j=A.C(new A.Y(t,new C.h4H(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.H4(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.v(j,D.cP7)
h=l+" was born in "+k
c2.$2("place",C.H4(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.v(j,D.d4w)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.H4(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.J)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.H4(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.iX(b1,b3,b3)
c2.$2("year",C.H4(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bEa(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.N6(d),l=new A.e5()
l.d_(f)
w=C.iuk(m,l,g)
for(v=new A.dq(w,w.r,w.e);v.C();)J.hjJ(v.d,l)
v=A.a4(w).k("cx<1>")
u=A.C(new A.cx(w,v),v.k("M.E"))
B.d.e0(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aV(u,new C.fHX(n,w))))break
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
if(v<e){v=A.C(D.azg,x.df)
B.d.e0(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.J)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hA4(o,l))}}else if(!g&&v>3){o=C.hA4(D.azg[l.az(14)],l)
t[t.length-1-l.az(3)]=o}return t},
hA4(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.e0(w,e)
return new C.lr(d.a,w,B.d.co(w,v),d.d,d.e,d.f,d.r)},
hF3(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.N6(a2),a1=new A.e5()
a1.d_(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
if(a0.Ga(q).length>=2)u.push(q)}B.d.e0(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.J)(u),++r){n=u[r]
m=a0.Ga(n)
l=A.U(m)
k=new A.iu(m,0,5,l.k("iu<1>"))
k.n8(m,0,5,l.c)
j=k.dn(0)
if(new A.N(j,new C.fWd(),A.U(j).k("N<1,G>")).fM(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.J)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.J)(j),++i)g.push(C.aSl(a0,j[i]))
w.push(new C.aug("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.T(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
J.c7(e.c3(0,a0.amz(q),new C.fWe()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cx<1>")
d=A.C(new A.cx(e,t),t.k("M.E"))
B.d.fj(d)
v=A.a([],v)
for(u=A.cW(d,0,A.dA(5,"count",u),A.U(d).c),t=u.$ti,u=new A.bR(u,u.gI(0),t.k("bR<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cC(s)
m.e0(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.J)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.J)(v),++r)s.push(C.aSl(a0,v[r]))
w.push(new C.aug("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aQR(d){return B.d.ao1(D.aBL,new C.fDN(d))},
ijO(d){return A.nA(new A.Y(D.aBL,new C.fKL(d),x.av))},
bSA(d){return C.hOJ(d)},
hOJ(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bSA=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bSA)
case 7:r=f
q=B.a.i(d)
q=A.el(J.t(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bSA,v)},
BU(d,e){return C.hOG(d,e)},
hOG(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$BU=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$BU)
case 7:r=g
p=B.a.i(d)
o=A.el(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aC("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$BU)
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
bSz(d,e,f){return C.hOH(d,e,f)},
hOH(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bSz=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bSz)
case 7:r=h
q=B.a.i(d)
q=A.el(J.t(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bSz,v)},
BV(d,e,f,g){return C.hOI(d,e,f,g)},
hOI(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$BV=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$BV)
case 7:r=i
p=B.a.i(d)
o=A.el(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aC("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$BV)
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
bGq(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
h6D(d,e,f,g){return new C.akU(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hMN(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aT(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cq)
while(u.C())w.push(J.k(u.gR(u)))
u=x.N
w=A.cW(w,0,A.dA(4,"count",x.S),u).dn(0)
B.d.v(w,A.c0(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aJ(d.h(0,"c"))
v=v==null?null:B.i.M(v)
v=B.o.D(v==null?0:v,0,3)
u=A.aJ(d.h(0,"s"))
u=u==null?null:B.i.M(u)
return C.h6D(w,v,B.o.D(u==null?20:u,5,60),t)},
hkS(d){var w,v,u,t,s,r,q=J.a7(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aT(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.cq)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gR(q)
if(u.b(r))v.push(C.hMN(A.a2(r,t,s)))}return new C.MQ(p,w,v)},
hf4(d){var w,v=A.a([],x.c)
for(w=J.aT(d.z);w.C();)v.push(C.hkS(w.gR(w)))
return v},
aSl(d,e){var w=e.c===D.ou
if(d.amz(e)===0&&d.Ga(e).length!==0)return w?0:1
if(d.Ga(e).length!==0||d.arq(e)!=null)return w?2:3
return w?4:5},
hG9(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.N6(a4),a3=new A.e5()
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
j=i.h(0,k)}h=a2.Ga(m)
g=a2.arq(m)
f=a2.aN4(m)
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
if(k===D.wu)k="father"
else k=k===D.ou?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.wu)k="father"
else k=k===D.ou?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e0(l,a3)
B.d.aZ(l,new C.h5_())
d=B.a.i(m.b)
a0=A.C(new A.Y(s,new C.h50(d),o),n)
B.d.e0(a0,a3)
k=A.a([d],t)
i=A.U(a0)
a1=new A.iu(a0,0,3,i.k("iu<1>"))
a1.n8(a0,0,3,i.c)
B.d.v(k,a1)
B.d.e0(k,a3)
a1=C.aSl(a2,m)
i=new A.iu(l,0,4,p)
i.n8(l,0,4,r)
w.push(new C.bay(d,a1,i.dn(0),k))
if(w.length>=5)break}return w},
hxG(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.a_(d,"My ")?1:0},
hFf(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.N6(a4),a3=new A.e5()
a3.d_(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
if(a2.Ga(q).length>=2)u.push(q)}B.d.e0(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.J)(u),++r){l=u[r]
k=a2.Ga(l)
j=A.U(k)
i=new A.iu(k,0,4,j.k("iu<1>"))
i.n8(k,0,4,j.c)
h=i.dn(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.J)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aV(h,new C.fWJ(q))&&q.d!==j)i.push(q)}B.d.e0(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.iu(i,0,k,m)
j.n8(i,0,k,n)
f=j.dn(0)
j=B.a.i(l.b)
k=C.aSl(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.J)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.J)(h),++g)e.push(C.aSl(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.J)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.J)(f),++g)a0.push(C.aSl(a2,f[g]))
w.push(new C.aa7(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lr:function lr(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bRM:function bRM(d){this.b=d
this.c=$},
bRN:function bRN(){},
bRO:function bRO(d){this.a=d},
fus:function fus(d){this.a=d},
h4A:function h4A(d){this.a=d},
h4B:function h4B(){},
h4C:function h4C(d){this.a=d},
h4D:function h4D(d,e){this.a=d
this.b=e},
h4E:function h4E(d,e,f){this.a=d
this.b=e
this.c=f},
h4z:function h4z(d,e){this.a=d
this.b=e},
h4F:function h4F(d){this.a=d},
h4G:function h4G(d){this.a=d},
h4H:function h4H(d,e,f){this.a=d
this.b=e
this.c=f},
h4y:function h4y(d,e){this.a=d
this.b=e},
fHX:function fHX(d,e){this.a=d
this.b=e},
aug:function aug(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fWd:function fWd(){},
fWe:function fWe(){},
zG:function zG(d,e,f){this.a=d
this.b=e
this.c=f},
fDN:function fDN(d){this.a=d},
fKL:function fKL(d){this.a=d},
akU:function akU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bMA:function bMA(){},
MQ:function MQ(d,e,f){this.a=d
this.b=e
this.c=f},
bay:function bay(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
h5_:function h5_(){},
h50:function h50(d){this.a=d},
aa7:function aa7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fWJ:function fWJ(d){this.a=d},
bhO:function bhO(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
ag2:function ag2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
akc:function akc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
akd:function akd(d,e,f,g,h){var _=this
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
bKK:function bKK(d){this.a=d},
bKF:function bKF(){},
bKL:function bKL(){},
bKD:function bKD(){},
bKE:function bKE(){},
bKJ:function bKJ(d){this.a=d},
bKG:function bKG(d,e){this.a=d
this.b=e},
bKI:function bKI(d,e){this.a=d
this.b=e},
bKH:function bKH(d,e){this.a=d
this.b=e},
bKC:function bKC(d){this.a=d},
bcZ:function bcZ(d,e){this.b=d
this.a=e},
QN:function QN(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBz:function aBz(d,e,f){this.b=d
this.c=e
this.a=f},
aA3:function aA3(d,e,f){this.a=d
this.b=e
this.c=f},
auS:function auS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
auT:function auT(d,e,f){var _=this
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
cqc:function cqc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cqd:function cqd(d){this.a=d},
cqb:function cqb(d){this.a=d},
cqe:function cqe(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cqf:function cqf(){},
cqg:function cqg(d,e){this.a=d
this.b=e},
cqh:function cqh(){},
cqi:function cqi(d){this.a=d},
cq8:function cq8(d){this.a=d},
cq9:function cq9(d,e){this.a=d
this.b=e},
cqa:function cqa(d,e,f){this.a=d
this.b=e
this.c=f},
cq3:function cq3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cq5:function cq5(d,e){this.a=d
this.b=e},
cq6:function cq6(d,e){this.a=d
this.b=e},
cq4:function cq4(d,e){this.a=d
this.b=e},
cq2:function cq2(){},
cq7:function cq7(){},
bcs:function bcs(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cQd:function cQd(){},
ayP:function ayP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ayQ:function ayQ(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cFa:function cFa(d){this.a=d},
cF9:function cF9(d){this.a=d},
cFi:function cFi(d,e){this.a=d
this.b=e},
cFj:function cFj(d,e){this.a=d
this.b=e},
cFk:function cFk(d){this.a=d},
cFh:function cFh(d){this.a=d},
cFl:function cFl(d){this.a=d},
cFm:function cFm(d,e){this.a=d
this.b=e},
cFn:function cFn(){},
cFo:function cFo(d){this.a=d},
cFc:function cFc(d){this.a=d},
cFd:function cFd(d,e){this.a=d
this.b=e},
cFb:function cFb(d,e){this.a=d
this.b=e},
cFe:function cFe(){},
cFf:function cFf(){},
cFg:function cFg(d,e){this.a=d
this.b=e},
azP:function azP(){},
aH0:function aH0(){},
hcP(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.brs((w-450*u)/2,(v-900*u)/2,u)},
afR:function afR(){},
f71:function f71(d){this.a=d},
aKO:function aKO(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fha:function fha(d){this.a=d},
am8:function am8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
am9:function am9(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.q9$=f
_.LX$=g
_.an5$=h
_.bx$=i
_.a9$=j
_.c=_.a=null},
bSy:function bSy(d){this.a=d},
bSx:function bSx(){},
bSv:function bSv(d){this.a=d},
bSt:function bSt(){},
bSu:function bSu(d){this.a=d},
bSq:function bSq(d,e){this.a=d
this.b=e},
bSr:function bSr(){},
bSs:function bSs(d){this.a=d},
bSw:function bSw(d,e){this.a=d
this.b=e},
bSp:function bSp(d){this.a=d},
bt8:function bt8(d,e){this.b=d
this.a=e},
f72:function f72(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f73:function f73(d,e,f){this.a=d
this.b=e
this.c=f},
f74:function f74(d,e,f){this.a=d
this.b=e
this.c=f},
f75:function f75(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f76:function f76(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f77:function f77(){},
am6:function am6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
am7:function am7(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.q9$=f
_.LX$=g
_.an5$=h
_.bx$=i
_.a9$=j
_.c=_.a=null},
bSb:function bSb(){},
bSm:function bSm(d,e){this.a=d
this.b=e},
bSn:function bSn(d){this.a=d},
bSo:function bSo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSi:function bSi(){},
bSh:function bSh(d,e){this.a=d
this.b=e},
bSj:function bSj(d,e){this.a=d
this.b=e},
bSk:function bSk(){},
bSl:function bSl(d){this.a=d},
bSd:function bSd(d){this.a=d},
bSe:function bSe(d){this.a=d},
bSf:function bSf(d){this.a=d},
bSc:function bSc(d,e){this.a=d
this.b=e},
bSg:function bSg(d){this.a=d},
bjD:function bjD(d,e){this.b=d
this.a=e},
dry:function dry(){},
a2c:function a2c(d,e){this.a=d
this.b=e},
am2:function am2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
am3:function am3(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.q9$=e
_.LX$=f
_.an5$=g
_.bx$=h
_.a9$=i
_.c=_.a=null},
bRY:function bRY(d){this.a=d},
bRX:function bRX(){},
bRW:function bRW(){},
bRQ:function bRQ(){},
bRR:function bRR(){},
bRV:function bRV(d,e,f){this.a=d
this.b=e
this.c=f},
bRU:function bRU(d){this.a=d},
bRS:function bRS(d,e){this.a=d
this.b=e},
bRT:function bRT(d){this.a=d},
bj3:function bj3(d,e){this.b=d
this.a=e},
aBC:function aBC(){},
bgB:function bgB(){},
aBE:function aBE(){},
bgC:function bgC(){},
aBF:function aBF(){},
bgD:function bgD(){},
ux(d,e,f,g,h){var w,v,u=null,t=A.l(18),s=A.a([],x.V)
s.push(new A.ac(0,B.G,f.j(0.4),B.j8,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.v(v,A.a([A.X(g,h,u,u,u,20),B.ae],w))
v.push(A.d(d,u,u,u,u,u,u,A.n(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.az(u,A.r(u,A.B(v,B.l,u,B.e,B.P,0,u,u),B.f,u,u,new A.p(f,u,u,t,s,u,B.n),u,u,u,u,B.Oh,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hlF(d,e,f,g,h,i,j){return new C.am4(i,h,d,j,e,f,g,null)},
a6D:function a6D(d,e){this.c=d
this.a=e},
bja:function bja(d){this.a=d},
tG:function tG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bRP:function bRP(d){this.a=d},
Iw:function Iw(d,e,f,g){var _=this
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
blX:function blX(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e1G:function e1G(d,e){this.a=d
this.b=e},
e1H:function e1H(d){this.a=d},
e1I:function e1I(d,e){this.a=d
this.b=e},
e1E:function e1E(d){this.a=d},
e1F:function e1F(d){this.a=d},
e1D:function e1D(d){this.a=d},
e1B:function e1B(d){this.a=d},
e1C:function e1C(d){this.a=d},
e1A:function e1A(d,e){this.a=d
this.b=e},
e1J:function e1J(d){this.a=d},
e1K:function e1K(d,e){this.a=d
this.b=e},
e1L:function e1L(d,e){this.a=d
this.b=e},
e1M:function e1M(d,e){this.a=d
this.b=e},
e1P:function e1P(d,e){this.a=d
this.b=e},
e1Q:function e1Q(d,e){this.a=d
this.b=e},
e1R:function e1R(d,e){this.a=d
this.b=e},
e1S:function e1S(d,e){this.a=d
this.b=e},
e1T:function e1T(d,e){this.a=d
this.b=e},
e1U:function e1U(d,e,f){this.a=d
this.b=e
this.c=f},
e1V:function e1V(d,e){this.a=d
this.b=e},
e1W:function e1W(d,e){this.a=d
this.b=e},
e1N:function e1N(d){this.a=d},
e1O:function e1O(d){this.a=d},
a05:function a05(d,e){this.a=d
this.b=e},
am4:function am4(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
am5:function am5(d){var _=this
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
bS9:function bS9(d){this.a=d},
bSa:function bSa(d){this.a=d},
bS8:function bS8(d){this.a=d},
bS_:function bS_(d){this.a=d},
bS0:function bS0(d){this.a=d},
bRZ:function bRZ(d){this.a=d},
bS5:function bS5(d,e,f){this.a=d
this.b=e
this.c=f},
bS6:function bS6(d){this.a=d},
bS2:function bS2(d,e){this.a=d
this.b=e},
bS3:function bS3(d,e,f){this.a=d
this.b=e
this.c=f},
bS7:function bS7(){},
bS4:function bS4(d,e){this.a=d
this.b=e},
bS1:function bS1(d){this.a=d},
U6:function U6(d,e){this.c=d
this.a=e},
am1:function am1(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bRA:function bRA(d){this.a=d},
bRB:function bRB(d){this.a=d},
bRL:function bRL(){},
bRK:function bRK(d,e,f){this.a=d
this.b=e
this.c=f},
bRF:function bRF(d,e){this.a=d
this.b=e},
bRE:function bRE(d,e){this.a=d
this.b=e},
bRG:function bRG(d){this.a=d},
bRH:function bRH(d,e){this.a=d
this.b=e},
bRI:function bRI(d,e){this.a=d
this.b=e},
bRD:function bRD(d,e){this.a=d
this.b=e},
bRJ:function bRJ(d,e,f){this.a=d
this.b=e
this.c=f},
bRC:function bRC(d,e){this.a=d
this.b=e},
iie(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.aj0(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.J)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bD(new A.V(Date.now(),0,!1))
s=new C.fHp(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("Y<1>"),q=q.k("cM<1,m>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.J)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.z1)m.push(l===D.wu?"male":"female")
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
m.push("child of "+l+k)}a0=A.C(new A.cM(new A.Y(a4,new C.fHn(u,f),p),new C.fHo(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aO(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aO(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aB(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
iif(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.aj0(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.J)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fHu(v,e)
q=new C.fHs(v)
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
n=A.C(d,A.a4(d).k("ci.E"))
B.d.fj(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.J)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eG(l,new C.fHt(p,m));k.C();t=f){j=l.gR(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.al(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aO(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
i2Y(d,e,f,g){var w,v,u=C.iig(d,e)
if(u<=0||f.length<=u)return new A.afv(!1,D.DA,f)
if(g.q(0,e.a))return new A.afv(!1,D.DA,f)
w=A.U(f).c
v=A.cW(f,0,A.dA(u,"count",x.S),w).dn(0)
return new A.afv(!0,A.cW(f,u,null,w).dn(0),v)},
i2Z(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.aj0(d3),d2=d1.length
if(d2===0)return D.huV
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.J)(d1),++u){t=d1[u]
v.c3(0,t.a,new C.dh2(t))}s=new C.dhj(v)
d2=x.dy
r=A.T(w,d2)
q=new C.dhb(r)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dha(r)
l=A.T(w,x.do)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c7(l.c3(0,k,new C.dh3()),o)}h=new C.dh9(s)
g=new C.dh8(l,r)
p=v.$ti.k("b7<2>")
o=p.k("Y<M.E>")
f=A.C(new A.Y(new A.b7(v,p),new C.dh4(h),o),o.k("M.E"))
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
a9=new C.dhh(new C.dhd(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dq(v,v.r,v.e),j=a2.gam4(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.eA([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.J(0,i))break}if(h.$1(b0)&&a2.al(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nA(J.dI(i==null?B.a_:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.dO)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.dh1(a2,new C.dhi(),b6,a3,b4,v,a4,a5,a6,b5)
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
b4.n(0,b8,new C.GE(o,new A.o(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.L_(c5.a,new A.o(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cx<1>")
d2=A.C(new A.cx(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.J)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bO(0,new C.dh5(c6,b4))
for(d2=new A.cb(a4,a4.$ti.k("cb<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aT(c7.b);j.C();){i=j.gR(j)
if(b6.al(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.o(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eG(j,new C.dh6(c8));i.C();)o.push(j.gR(0).b)
if(o.length===0)continue
B.d.aZ(o,new C.dh7())
c6.push(new C.aKJ(new A.o(c9,b4.h(0,c8).b.b+112),B.H,!1,o))}return new C.bgH(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hAN(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(d)
return w==null?null:w.b[1]},
huV(d,e,f,g,h,i,j,k,l,m,n){return new C.a0i(k,f,j,e,l,n,m,d,g,h,i,null)},
aDC(d,e,f,g,h,i,j){return new C.bkt(i,d,e,f,j,h,g,null)},
ar6:function ar6(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aF9:function aF9(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e3l:function e3l(d){this.a=d},
e3k:function e3k(d){this.a=d},
e3n:function e3n(d,e){this.a=d
this.b=e},
e3o:function e3o(d,e){this.a=d
this.b=e},
e3p:function e3p(d){this.a=d},
e3j:function e3j(d,e){this.a=d
this.b=e},
e3m:function e3m(d){this.a=d},
e3r:function e3r(d){this.a=d},
e3q:function e3q(d,e){this.a=d
this.b=e},
ar0:function ar0(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aF6:function aF6(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e2M:function e2M(d){this.a=d},
e2K:function e2K(d){this.a=d},
e2L:function e2L(d){this.a=d},
e2N:function e2N(d,e){this.a=d
this.b=e},
e2H:function e2H(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e28:function e28(d){this.a=d},
e29:function e29(d,e){this.a=d
this.b=e},
e2q:function e2q(d){this.a=d},
e2o:function e2o(d){this.a=d},
e2p:function e2p(d,e){this.a=d
this.b=e},
e2r:function e2r(d){this.a=d},
e2s:function e2s(d,e){this.a=d
this.b=e},
e2G:function e2G(d,e){this.a=d
this.b=e},
e2n:function e2n(d){this.a=d},
e2m:function e2m(d){this.a=d},
e2l:function e2l(d,e){this.a=d
this.b=e},
e2D:function e2D(){},
e2E:function e2E(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e2C:function e2C(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e2w:function e2w(d){this.a=d},
e2x:function e2x(d,e,f){this.a=d
this.b=e
this.c=f},
e2v:function e2v(d,e){this.a=d
this.b=e},
e2y:function e2y(d,e){this.a=d
this.b=e},
e2t:function e2t(d,e){this.a=d
this.b=e},
e2u:function e2u(){},
e2z:function e2z(d,e){this.a=d
this.b=e},
e2A:function e2A(d){this.a=d},
e2B:function e2B(d,e){this.a=d
this.b=e},
e2F:function e2F(d,e){this.a=d
this.b=e},
e1X:function e1X(d,e){this.a=d
this.b=e},
e1Y:function e1Y(d,e){this.a=d
this.b=e},
e2P:function e2P(d,e,f){this.a=d
this.b=e
this.c=f},
e2J:function e2J(d,e,f){this.a=d
this.b=e
this.c=f},
e2I:function e2I(d){this.a=d},
e1Z:function e1Z(d){this.a=d},
e2_:function e2_(d){this.a=d},
e20:function e20(){},
e21:function e21(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e25:function e25(d,e){this.a=d
this.b=e},
e24:function e24(d,e){this.a=d
this.b=e},
e23:function e23(d){this.a=d},
e26:function e26(d,e){this.a=d
this.b=e},
e22:function e22(d){this.a=d},
e2O:function e2O(d){this.a=d},
e2i:function e2i(){},
e2j:function e2j(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2h:function e2h(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2d:function e2d(d,e,f){this.a=d
this.b=e
this.c=f},
e2c:function e2c(d,e,f){this.a=d
this.b=e
this.c=f},
e2a:function e2a(d,e){this.a=d
this.b=e},
e2e:function e2e(d){this.a=d},
e2f:function e2f(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2b:function e2b(d,e){this.a=d
this.b=e},
e2g:function e2g(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2k:function e2k(d,e){this.a=d
this.b=e},
e2W:function e2W(){},
e2X:function e2X(d,e){this.a=d
this.b=e},
e2Y:function e2Y(d){this.a=d},
e2Z:function e2Z(d,e){this.a=d
this.b=e},
e2S:function e2S(d){this.a=d},
e2Q:function e2Q(d,e){this.a=d
this.b=e},
e2T:function e2T(d,e){this.a=d
this.b=e},
e2U:function e2U(d,e){this.a=d
this.b=e},
e2V:function e2V(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e3_:function e3_(d){this.a=d},
e2R:function e2R(d){this.a=d},
e27:function e27(d){this.a=d},
bgF:function bgF(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dh_:function dh_(d){this.a=d},
dgZ:function dgZ(d,e){this.a=d
this.b=e},
dh0:function dh0(d){this.a=d},
dgY:function dgY(d,e){this.a=d
this.b=e},
fHp:function fHp(d,e){this.a=d
this.b=e},
fHq:function fHq(d){this.a=d},
fHr:function fHr(){},
fHn:function fHn(d,e){this.a=d
this.b=e},
fHo:function fHo(){},
fHu:function fHu(d,e){this.a=d
this.b=e},
fHv:function fHv(d){this.a=d},
fHw:function fHw(){},
fHs:function fHs(d){this.a=d},
fHt:function fHt(d,e){this.a=d
this.b=e},
L_:function L_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GE:function GE(d,e){this.a=d
this.b=e},
bgH:function bgH(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dh2:function dh2(d){this.a=d},
dhj:function dhj(d){this.a=d},
dhb:function dhb(d){this.a=d},
dhc:function dhc(){},
dha:function dha(d){this.a=d},
dh3:function dh3(){},
dh9:function dh9(d){this.a=d},
dh8:function dh8(d,e){this.a=d
this.b=e},
dh4:function dh4(d){this.a=d},
dhd:function dhd(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dhe:function dhe(d){this.a=d},
dhf:function dhf(d){this.a=d},
dhg:function dhg(){},
dhh:function dhh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dhi:function dhi(){},
dh1:function dh1(d,e,f,g,h,i,j,k,l,m){var _=this
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
dh5:function dh5(d,e){this.a=d
this.b=e},
dh6:function dh6(d){this.a=d},
dh7:function dh7(){},
aKJ:function aKJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bgI:function bgI(d,e){this.b=d
this.a=e},
dhk:function dhk(){},
dhl:function dhl(d){this.a=d},
dhm:function dhm(d){this.a=d},
dhn:function dhn(){},
bku:function bku(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfK:function bfK(d,e){this.b=d
this.a=e},
byu:function byu(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fmL:function fmL(d){this.a=d},
bnP:function bnP(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eXO:function eXO(d){this.a=d},
eXN:function eXN(d,e){this.a=d
this.b=e},
a0i:function a0i(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aDA:function aDA(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dxg:function dxg(d,e){this.a=d
this.b=e},
dxf:function dxf(d){this.a=d},
dxd:function dxd(d){this.a=d},
dxe:function dxe(d){this.a=d},
dxp:function dxp(d){this.a=d},
dxq:function dxq(d){this.a=d},
dxo:function dxo(d,e){this.a=d
this.b=e},
dxr:function dxr(){},
dxu:function dxu(d){this.a=d},
dxn:function dxn(d,e){this.a=d
this.b=e},
dxt:function dxt(){},
dxv:function dxv(d){this.a=d},
dxm:function dxm(d,e){this.a=d
this.b=e},
dxw:function dxw(d){this.a=d},
dxl:function dxl(d){this.a=d},
dxx:function dxx(d){this.a=d},
dxk:function dxk(d){this.a=d},
dxy:function dxy(d){this.a=d},
dxj:function dxj(d){this.a=d},
dxz:function dxz(d){this.a=d},
dxi:function dxi(d){this.a=d},
dxA:function dxA(d){this.a=d},
dxh:function dxh(d,e){this.a=d
this.b=e},
dxs:function dxs(d){this.a=d},
aeo:function aeo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bkt:function bkt(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aen:function aen(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bks:function bks(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dxB:function dxB(d){this.a=d},
dxC:function dxC(d,e){this.a=d
this.b=e},
aDB:function aDB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aJL:function aJL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aep:function aep(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dxL:function dxL(d){this.a=d},
GA:function GA(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hpJ(d){var w=d.U,v=x.N
return w.jq(w,new C.ceV(),v,v)},
hVl(d){var w=d.bF
if(w>=0)return w
return 5},
hpL(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hpJ(d).h(0,v)
if(w==null||w.length===0)return null
return A.bh(w)},
hpK(d,e){var w=C.hpL(d,e)
if(w!=null&&w.ca(new A.V(Date.now(),0,!1)))return!0
return!1},
hVm(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.hpJ(d),w,w)
u=C.hpL(d,e)
t=u!=null&&u.ca(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bR(A.dw(30,0,0,0,0,0).a).aa().ag())
d.U=v},
b1d(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b1d=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.ly(t,B.Js),$async$b1d)
case 3:if(l){u=!0
w=1
break}u=A.ld(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Js,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1d,v)},
ceV:function ceV(){},
hVj(){var w,v=$.os(),u=J.e3(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"FT"+B.d.he(u)},
Ju(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Ju=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$Ju)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_family_tree_backup_codes_v1",null,!1,B.bN),$async$Ju)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.t(r,"codes")
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
case 7:u=A.T(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ju,v)},
a8j(d){return C.hVk(d)},
hVk(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a8j=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$a8j)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hK("ngmy_family_tree_backup_codes_v1",A.I(["codes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cM,null),$async$a8j)
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
return A.i($async$a8j,v)},
ceU(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$ceU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Ju(),$async$ceU)
case 3:t=m.i1(f),t=t.gae(t),s=x.f
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
return A.i($async$ceU,v)},
Oo(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Oo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.ceU(d),$async$Oo)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Ju(),$async$Oo)
case 6:s=f
r=J.a7(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dO(A.a2(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,t,o)
w=9
return A.b(C.a8j(s),$async$Oo)
case 9:case 8:u=t
w=1
break
case 5:n=C.hVj()
w=10
return A.b(C.Ju(),$async$Oo)
case 10:s=f
J.aK(s,n,A.I(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a8j(s),$async$Oo)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Oo,v)},
b1c(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b1c=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Ju(),$async$b1c)
case 3:t=f
for(s=J.dp(t),r=s.gdO(t),r=r.dn(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.J)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a8j(t),$async$b1c)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b1c,v)},
a8k(d,e,f){var w=0,v=A.j(x.H),u
var $async$a8k=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.ar5(d,e),$async$a8k)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Oo(d),$async$a8k)
case 7:w=4
break
case 5:w=8
return A.b(C.b1c(d),$async$a8k)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a8k,v)},
ar_(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$ar_=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.ar5(f,e),$async$ar_)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c9(),$async$ar_)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Ju(),$async$ar_)
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
return A.i($async$ar_,v)},
b1b(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b1b=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c9(),$async$b1b)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Ju(),$async$b1b)
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
return A.i($async$b1b,v)},
hVn(){var w,v=$.os(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"FT"+B.d.he(u)},
ar2(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$ar2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$ar2)
case 3:if(!g){u=null
w=1
break}t=C.hVn()
w=4
return A.b(A.Wr(),$async$ar2)
case 4:s=g
r=B.dT.aN(B.Y.aw(d.f3(),null))
r=B.cP.gcu().aN(r)
q=e?999:2
J.aK(s,t,A.I(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a8l(s),$async$ar2)
case 5:p=e?999:2
u=new A.a1s("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ar2,v)},
ar1(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$ar1=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Wr(),$async$ar1)
case 3:p=a0
o=J.a7(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a7(n)
l=A.aJ(m.h(n,"usesRemaining"))
k=l==null?null:B.i.M(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b1b(J.k(l==null?"":l),j),$async$ar1)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.ca.cJ(0,B.cJ.aN(t))
s=C.hpM(r)}catch(f){q=A.ab(f)
$.am.$1("[family tree qr stash] decode: "+A.w(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dO(A.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=5
return A.b(A.a8l(p),$async$ar1)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ar1,v)},
hpM(d){var w,v,u,t,s=null
try{w=B.Y.aQ(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hVp(A.a2(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
h8M(d){var w=0,v=A.j(x.m),u,t,s
var $async$h8M=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a_(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.ar1(t[1])
w=1
break}u=null
w=1
break}u=C.hpM(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h8M,v)},
hVp(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.dd(v,x.f)
u=A.cF(u,new C.ceX(),u.$ti.k("M.E"),x.k)
t=A.a4(u).k("Y<M.E>")
s=A.C(new A.Y(u,new C.ceY(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bh(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.T(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.i1(p),t=t.gae(t),o=x.B;t.C();){n=t.gR(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.dd(l,u)
n=A.cF(n,new C.ceZ(),n.$ti.k("M.E"),o)
k=A.a4(n).k("Y<M.E>")
j=A.C(new A.Y(n,new C.cf_(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.ar3(h,w,s,r,q)},
ar5(d,e){var w=0,v=A.j(x.y),u,t
var $async$ar5=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Of(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Bq(d),$async$ar5)
case 3:u=t.cJ(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ar5,v)},
cf5(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cf5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Bq(d),$async$cf5)
case 3:t=s.b8(f,new C.cf6(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aZ(t,new C.cf7())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cf5,v)},
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
return A.b(C.ar5(e,d),$async$Ws)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Oo(e),$async$Ws)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Bq(e),$async$Ws)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dI(r,new C.cf3(g))
r=A.C(t,t.$ti.k("M.E"))}t=J.a7(r)
if(t.gau(r)){u=null
w=1
break}t=t.dM(r,new C.cf4(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.LL(e,o),$async$Ws)
case 14:n=i
if(J.cJ(n))q.n(0,o,n)
case 12:r.length===t||(0,A.J)(r),++p
w=11
break
case 13:u=new C.ar3(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ws,v)},
b1g(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b1g=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ws(d,e,f,g),$async$b1g)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.Hj(A.KW(q.f3(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1g,v)},
b1f(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b1f=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ws(d,e,f,g),$async$b1f)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.ar2(r,f),$async$b1f)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aHL(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1f,v)},
Wt(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wt=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.h8M(a0),$async$Wt)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a_(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.ar_(g.a,d,e,f,s,r),$async$Wt)
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
return A.b(C.bDR(e,j),$async$Wt)
case 12:case 11:w=13
return A.b(C.aiL(e,j,s),$async$Wt)
case 13:h=n.h(0,i)
w=h!=null&&J.cJ(h)?14:15
break
case 14:w=16
return A.b(C.BB(e,i,h),$async$Wt)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.J)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bry(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Wt,v)},
ar3:function ar3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cf1:function cf1(){},
cf2:function cf2(){},
cf0:function cf0(){},
ceX:function ceX(){},
ceY:function ceY(){},
ceZ:function ceZ(){},
cf_:function cf_(){},
cf6:function cf6(){},
cf7:function cf7(){},
cf3:function cf3(d){this.a=d},
cf4:function cf4(d){this.a=d},
hhH(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f3(null,x.H)
return A.hy(d,new C.ar4(w,e,g,i,f,h,null),!0,null,x.H)},
dgX(d,e,f,g,h,i,j,k){return new C.bgE(i,e,k,j,g,f,h,d,null)},
ar4:function ar4(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aF8:function aF8(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e38:function e38(d){this.a=d},
e39:function e39(d,e,f){this.a=d
this.b=e
this.c=f},
e3d:function e3d(d,e){this.a=d
this.b=e},
e3e:function e3e(d){this.a=d},
e35:function e35(d){this.a=d},
e36:function e36(d,e){this.a=d
this.b=e},
e37:function e37(d,e){this.a=d
this.b=e},
e3c:function e3c(d){this.a=d},
e3b:function e3b(d,e){this.a=d
this.b=e},
e3a:function e3a(){},
e3g:function e3g(d){this.a=d},
e3h:function e3h(d,e){this.a=d
this.b=e},
e3f:function e3f(d,e){this.a=d
this.b=e},
dho:function dho(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bgG:function bgG(d,e,f){this.d=d
this.e=e
this.a=f},
adE:function adE(d,e,f){this.c=d
this.d=e
this.a=f},
bgE:function bgE(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bgJ:function bgJ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0C:function a0C(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aF7:function aF7(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e30:function e30(d,e){this.a=d
this.b=e},
e31:function e31(d){this.a=d},
e32:function e32(d){this.a=d},
e33:function e33(d){this.a=d},
e34:function e34(d){this.a=d},
a0D:function a0D(d){this.a=d},
blY:function blY(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e3i:function e3i(d,e){this.a=d
this.b=e},
b_L(d,e){return new C.b_K(d,e,null)},
b_K:function b_K(d,e,f){this.c=d
this.d=e
this.a=f},
ikL(d){if(!(d!=null&&B.a.a_(d,"ngmy:thumb:")))return null
return B.a.b2(d,11)},
isS(d){return A.bU(B.L,null,new C.fYf(new C.uj(A.S(d).ax.a===B.J)),d,!0,!0,!0,null,!1,!1,x.N)},
hrK(d,e){return new C.au4(e,d,null)},
aSe(d,e,f,g,h,i,j){var w=C.ikL(i)
if(w!=null)return A.by(e,new A.a5(j,f,new C.a7p(w,!0,null),null),B.aq)
return N.aRB(e,B.c_,f,g,h,i,j)},
lW:function lW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7p:function a7p(d,e,f){this.c=d
this.d=e
this.a=f},
blC:function blC(d,e){var _=this
_.e=_.d=$
_.cQ$=d
_.b7$=e
_.c=_.a=null},
dPn:function dPn(d){this.a=d},
dPo:function dPo(){},
dPp:function dPp(d,e){this.a=d
this.b=e},
blB:function blB(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fYf:function fYf(d){this.a=d},
fYe:function fYe(d,e){this.a=d
this.b=e},
fYd:function fYd(d,e){this.a=d
this.b=e},
fYc:function fYc(d,e){this.a=d
this.b=e},
au4:function au4(d,e,f){this.c=d
this.d=e
this.a=f},
cou:function cou(d,e){this.a=d
this.b=e},
aNa:function aNa(){},
isD(d){var w=null
return A.cg(w,w,!0,w,new C.fXD(),d,w,!0,!0,x.e2)},
itR(d,e,f,g,h){var w=null
return A.cg(w,w,!0,w,new C.h4h(h,g,f,e),d,w,!0,!0,x.N)},
isF(d,e){var w=null
return A.cg(w,w,!0,w,new C.fXH(e),d,w,!0,!0,x.dY)},
isE(d){var w=null
return A.cg(w,w,!0,w,new C.fXG(),d,w,!0,!0,x.c5)},
aVa:function aVa(d,e){this.a=d
this.b=e},
aV9:function aV9(d){this.a=d},
aTc:function aTc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fXD:function fXD(){},
h4h:function h4h(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fXH:function fXH(d){this.a=d},
fXG:function fXG(){},
a_g:function a_g(d,e){this.c=d
this.a=e},
aAk:function aAk(){var _=this
_.d=$
_.c=_.a=_.e=null},
d8z:function d8z(d){this.a=d},
d8A:function d8A(d){this.a=d},
d8y:function d8y(d,e){this.a=d
this.b=e},
d8B:function d8B(d){this.a=d},
d8C:function d8C(d){this.a=d},
a_f:function a_f(d){this.a=d},
aAj:function aAj(){this.d=$
this.c=this.a=null},
d8v:function d8v(d){this.a=d},
d8w:function d8w(d){this.a=d},
d8x:function d8x(d){this.a=d},
ZN:function ZN(d){this.a=d},
az2:function az2(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cGR:function cGR(){},
cGX:function cGX(d){this.a=d},
cGY:function cGY(d){this.a=d},
cGZ:function cGZ(d){this.a=d},
cGW:function cGW(){},
cH_:function cH_(d){this.a=d},
cH0:function cH0(d){this.a=d},
cGV:function cGV(){},
cH1:function cH1(d,e){this.a=d
this.b=e},
cGU:function cGU(d,e){this.a=d
this.b=e},
cGS:function cGS(d,e){this.a=d
this.b=e},
cH2:function cH2(d){this.a=d},
cGT:function cGT(){},
cH3:function cH3(d){this.a=d},
a2o:function a2o(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bym:function bym(){this.d=$
this.c=this.a=null},
fmg:function fmg(d,e){this.a=d
this.b=e},
fmh:function fmh(d){this.a=d},
fmi:function fmi(d,e){this.a=d
this.b=e},
acH:function acH(d,e){this.a=d
this.b=e},
Go:function Go(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
byk:function byk(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
fme:function fme(d,e){this.a=d
this.b=e},
ayW:function ayW(d,e){this.c=d
this.a=e},
byl:function byl(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
fmf:function fmf(d){this.a=d},
byj:function byj(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aPi:function aPi(){},
aPj:function aPj(){},
bFP(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.i.bh(u),s=B.o.D(B.i.V((u-t)*100),0,99),r=d<0?"-":"",q=A.p7(B.o.u(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fW0(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.n(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.n(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.V,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.n(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b_(B.o.u(s),2,"0")
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.n(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Za(A.cQ(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aRR(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aRR=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hX().l8(85,1280,B.eO),$async$aRR)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fq(),$async$aRR)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hrJ()
w=9
return A.b(C.cot(q,r),$async$aRR)
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
return A.i($async$aRR,v)},
aSc(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aSc=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a_(g,"ngmy:ws-thumb:")
if(i){u=C.coq(g)
w=1
break}if(!B.a.a_(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gan(g.split(",")):g
p=B.cJ.aN(q)
o=960
case 7:if(!(o>=96)){w=8
break}w=9
return A.b(A.Hk(p,!0,null,o).dh(0,B.h5),$async$aSc)
case 9:n=a1
w=10
return A.b(n.lc(),$async$aSc)
case 10:m=a1
w=11
return A.b(m.b.hr(B.hj),$async$aSc)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eT(B.dO.gaU(l))
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
return A.i($async$aSc,v)},
fW0:function fW0(){},
uj:function uj(d){this.a=d},
au3:function au3(d,e,f){this.c=d
this.d=e
this.a=f},
aGC:function aGC(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eUY:function eUY(d,e){this.a=d
this.b=e},
eUP:function eUP(d){this.a=d},
eUQ:function eUQ(d){this.a=d},
eUW:function eUW(d,e){this.a=d
this.b=e},
eUV:function eUV(d,e){this.a=d
this.b=e},
eUS:function eUS(d,e){this.a=d
this.b=e},
eUR:function eUR(d,e){this.a=d
this.b=e},
eUT:function eUT(d){this.a=d},
eUU:function eUU(d,e){this.a=d
this.b=e},
eUX:function eUX(d,e){this.a=d
this.b=e},
eUK:function eUK(d,e){this.a=d
this.b=e},
eUO:function eUO(d){this.a=d},
eUN:function eUN(d,e){this.a=d
this.b=e},
eUM:function eUM(d){this.a=d},
eUZ:function eUZ(d,e){this.a=d
this.b=e},
eV_:function eV_(d,e){this.a=d
this.b=e},
eUL:function eUL(d,e){this.a=d
this.b=e},
hES(d,e,f){var w="thumbnailPath",v=e.aj()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.I(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
fW1(d,e,f){var w=0,v=A.j(x.N),u
var $async$fW1=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.Y.aw(C.hES(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fW1,v)},
bFR(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bFR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fW1(!0,d,e),$async$bFR)
case 4:w=3
return A.b(r.au1(g,d,e.a),$async$bFR)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dT.aN(B.Y.aw(C.hES(d,e,null),null))
u="NGMY_WS:"+B.kH.gcu().aN(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFR,v)},
hwj(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hhi(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d5(s,"NGMYWSSYNC2|"))return!0
if(J.d5(s,"NGMY_WS:"))return!0
if(J.eH(s,t))return!0
if(J.d5(s,"{"))try{w=B.Y.aQ(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
ipX(d){var w,v,u,t=C.hwj(d)
if(t==null)return null
if(C.hhi(t))return t
w=B.a.co(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b2(t,w))
if(C.hhi(v))return v}u=B.a.co(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b2(t,u))
if(C.hhi(v))return v}return null},
hhh(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d5(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d5(q,"NGMY_WS:")){v=B.ca.cJ(0,B.cJ.aN(J.nq(q,8)))
w=t.a(B.Y.aQ(0,v,r))}else w=t.a(B.Y.aQ(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.hbp(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bFQ(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bFQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a_(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.au0(t[1]),$async$bFQ)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hhh(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hhh(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFQ,v)},
hhg(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lC(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bFm(){var w=0,v=A.j(x.o),u,t
var $async$bFm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Hw(),$async$bFm)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hhh(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFm,v)},
hFT(d,e,f,g){return A.bU(B.L,null,new C.h44(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
h44:function h44(d,e,f){this.a=d
this.b=e
this.c=f},
aeK:function aeK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eV1:function eV1(d,e){this.a=d
this.b=e},
eV2:function eV2(d,e){this.a=d
this.b=e},
eV3:function eV3(d,e){this.a=d
this.b=e},
eV4:function eV4(d,e){this.a=d
this.b=e},
eV0:function eV0(d){this.a=d},
atY:function atY(d,e,f){this.c=d
this.d=e
this.a=f},
bnk:function bnk(){var _=this
_.c=_.a=_.e=_.d=null},
eUF:function eUF(d,e){this.a=d
this.b=e},
eUG:function eUG(d){this.a=d},
eUH:function eUH(d){this.a=d},
au2:function au2(d){this.a=d},
aGB:function aGB(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eUJ:function eUJ(d){this.a=d},
eUI:function eUI(d){this.a=d},
hYE(d,e,f,g,h){return new C.P4(h,g,d,e,f,null)},
aLv:function aLv(d,e){this.a=d
this.b=e},
P4:function P4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGD:function aGD(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eVr:function eVr(){},
eVn:function eVn(d,e){this.a=d
this.b=e},
eVo:function eVo(d){this.a=d},
eV8:function eV8(d){this.a=d},
eV6:function eV6(d){this.a=d},
eV7:function eV7(d){this.a=d},
eVh:function eVh(d,e){this.a=d
this.b=e},
eVe:function eVe(d,e){this.a=d
this.b=e},
eVf:function eVf(d,e){this.a=d
this.b=e},
eVg:function eVg(d,e,f){this.a=d
this.b=e
this.c=f},
eVc:function eVc(d,e,f){this.a=d
this.b=e
this.c=f},
eVa:function eVa(d){this.a=d},
eVb:function eVb(d){this.a=d},
eVd:function eVd(d){this.a=d},
eVu:function eVu(d){this.a=d},
eVt:function eVt(d){this.a=d},
eVv:function eVv(d){this.a=d},
eVs:function eVs(d){this.a=d},
eV5:function eV5(d){this.a=d},
eV9:function eV9(d,e){this.a=d
this.b=e},
eVq:function eVq(d,e){this.a=d
this.b=e},
eVp:function eVp(d,e){this.a=d
this.b=e},
eVk:function eVk(d){this.a=d},
eVl:function eVl(d){this.a=d},
eVm:function eVm(d,e){this.a=d
this.b=e},
eVj:function eVj(d,e){this.a=d
this.b=e},
eVi:function eVi(d,e,f){this.a=d
this.b=e
this.c=f},
bA7:function bA7(){},
Bd(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ahf(d,e,f){return C.ie2(d,e,f)},
ie2(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ahf=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aC("String",e,f),$async$ahf)
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
return A.i($async$ahf,v)},
ahe(d,e){return C.ie1(d,e)},
ie1(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$ahe=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$ahe)
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
return A.i($async$ahe,v)},
icS(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Tz(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bCQ(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bCQ=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b4t(q),$async$bCQ)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aSc(q,!1),$async$bCQ)
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
return A.i($async$bCQ,v)},
hM2(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.rp(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rp(p,J.k(u==null?"":u),1,o,q)},
hbp(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.dd(s,x.f)
w=A.cF(w,new C.cG8(),w.$ti.k("M.E"),x.Q)
v=A.a4(w).k("Y<M.E>")
r=A.C(new A.Y(w,new C.cG9(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bh(J.k(t==null?"":t))
return new C.lC(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
iia(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.wu
case"female":case"f":return D.ou
default:return D.z1}},
hBn(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hlG(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.iia(v==null?j:J.k(v))
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
m=m==null?j:B.i.M(m)
if(m==null)m=1
l=J.z(d.h(0,"hidden"),!0)
k=A.aJ(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.i.M(k)
return new C.hW(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
iic(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.OD
case"viewer":return D.kU
default:return D.uC}},
iid(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Hl(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aQY(d,e){return B.a.i(e.toLowerCase())===C.Hl(d,e)&&d.y!==D.kU},
uy(d,e){var w,v=d.y
if(v===D.kU)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Hl(d,e))return!0
if(v===D.OD)return!0
v=d.e
return new A.N(v,A.hhn(),A.U(v).k("N<1,m>")).q(0,w)},
ihx(d){return J.dI(d,new C.fGh()).gI(0)},
h4Q(d){var w=0,v=A.j(x.y),u,t
var $async$h4Q=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Bq(d),$async$h4Q)
case 3:u=t.rk(f,new C.h4R(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h4Q,v)},
bDR(d,e){var w=0,v=A.j(x.H),u,t
var $async$bDR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Bq(d),$async$bDR)
case 3:t=g
if(J.rk(t,new C.fDM(e))){w=1
break}if(C.ihx(t)>=2)throw A.W(A.bc("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bDR,v)},
amb(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.dd(h,x.f)
w=A.cF(w,new C.bSB(),w.$ti.k("M.E"),x.P)
v=A.a4(w).k("Y<M.E>")
g=A.C(new A.Y(w,new C.bSC(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b8(u,new C.bSD(),x.N)
t=A.C(w,w.$ti.k("ak.E"))}else t=A.a([],x.s)
w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
s=d.h(0,"code")
s=J.k(s==null?"":s)
r=J.z(d.h(0,"isPrivate"),!1)
q=d.h(0,"createdAt")
q=A.bh(J.k(q==null?"":q))
if(q==null)q=new A.V(Date.now(),0,!1)
p=A.aJ(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.i.M(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.iic(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aT(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cq)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gR(f)
if(l.b(i))m.push(A.a2(i,k,j))}return new C.kV(w,v,s,!r,t,g,q,p,o,n,m)},
hBC(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.aB(v,0,8)},
DD(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$DD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SF(d),$async$DD)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aA(),$async$DD)
case 4:t=f
w=5
return A.b(t.a7d(0),$async$DD)
case 5:w=6
return A.b(C.fu2(t,l),$async$DD)
case 6:s=f
if(J.cJ(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a7(q)
o=A.aV(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hwU(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.p6(l,n),$async$DD)
case 11:u=n
w=1
break
case 10:case 8:m=A.aV(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hwU(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.p6(l,n),$async$DD)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$DD,v)},
fu2(d,e){return C.iae(d,e)},
iae(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fu2=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a7(a3)
a5=A.aV(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Bd(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.Y.aQ(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aT(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gR(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aV(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Bd(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.Y.aQ(0,m,null)
if(!a0.b(l)){w=7
break}k=C.hbp(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aV(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Bd(a9)+"_"+n))
i=C.icS(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a_(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b4t(h),$async$fu2)
case 17:g=b1
if(g!=null){i=i.Tz(g)
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
case 8:J.SO(q,new C.fu3())
if(p&&J.ad(q)!==0)C.p6(a9,q)
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
return A.i($async$fu2,v)},
bEi(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bEi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SF(d),$async$bEi)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.DD(r),$async$bEi)
case 4:t=p.aT(g)
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
return A.i($async$bEi,v)},
hwU(d){var w,v,u,t
try{w=B.Y.aQ(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.dd(w,x.f)
v=A.cF(v,new C.fpP(),v.$ti.k("M.E"),x.fA)
u=A.a4(v).k("Y<M.E>")
v=A.C(new A.Y(v,new C.fpQ(),u),u.k("M.E"))
B.d.aZ(v,new C.fpR())
return v}catch(t){v=A.a([],x.D)
return v}},
p6(d,e){return C.iss(d,e)},
iss(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$p6=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.SF(b2),$async$p6)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aA(),$async$p6)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Bd(a8)
p=A.aV(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b8(x.j.a(B.Y.aQ(0,p,null)),new C.fXr(),a2).fM(0)
a2=J.b8(b3,new C.fXs(),a2).bY(0,new C.fXt())
n=A.d2(a2,a2.$ti.k("M.E"))
a2=o,a2=A.dZ(a2,a2.r,A.a4(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eH(n,m)?17:18
break
case 17:a5=C.Bd(a8)
l=A.aV(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a9F(l),$async$p6)
case 19:t=21
a5=C.Bd(a8)
k=A.aV(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.Y.aQ(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.a9F(a5==null?null:J.k(a5)),$async$p6)
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
return A.b(C.ahe(r,"ngmy_worksheet_item_v3_"+C.Bd(a8)+"_"+m),$async$p6)
case 29:w=30
return A.b(C.ahe(r,"ngmy_worksheet_thumb_v3_"+C.Bd(a8)+"_"+m),$async$p6)
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
return A.b(C.bCQ(h),$async$p6)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ahf(r,"ngmy_worksheet_thumb_v3_"+C.Bd(a8)+"_"+a4,f),$async$p6)
case 40:g=i.Tz(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ahe(r,"ngmy_worksheet_thumb_v3_"+C.Bd(a8)+"_"+a4),$async$p6)
case 41:g=i.Tz(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ahe(r,"ngmy_worksheet_thumb_v3_"+C.Bd(a8)+"_"+a4),$async$p6)
case 42:case 34:a4=i.a
w=43
return A.b(C.ahf(r,"ngmy_worksheet_item_v3_"+C.Bd(a8)+"_"+a4,B.Y.aw(g.aj(),null)),$async$p6)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.c7(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ahf(r,"ngmy_worksheets_index_v3_"+C.Bd(a8),B.Y.aw(q,null)),$async$p6)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eP(b3,new C.fXu(q))
a4=a3.$ti.k("cM<1,a9<m,@>>")
a7=A.C(new A.cM(a3,new C.fXv(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ahf(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.Y.aw(a0,null)),$async$p6)
case 45:w=46
return A.b(J.hL8(r),$async$p6)
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
return A.i($async$p6,v)},
Ma(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Ma=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.DD(d),$async$Ma)
case 3:t=g
s=J.cC(t)
r=s.bj(t,new C.h4P(e))
if(r===-1)s.c9(t,0,e)
else s.n(t,r,e)
u=C.p6(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ma,v)},
bE3(d,e){var w=0,v=A.j(x.H),u
var $async$bE3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.DD(d),$async$bE3)
case 2:u=g
J.nT(u,new C.fGL(e))
w=3
return A.b(C.p6(d,u),$async$bE3)
case 3:return A.h(null,v)}})
return A.i($async$bE3,v)},
Hn(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Hn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$Hn)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aV(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.Y.aQ(0,i,null)
if(x.j.b(t)){j=J.dd(t,x.f)
j=A.cF(j,new C.fJW(),j.$ti.k("M.E"),x.k)
s=A.a4(j).k("Y<M.E>")
r=A.C(new A.Y(j,new C.fJX(),s),s.k("M.E"))
B.d.aZ(r,new C.fJY())
k=r}}catch(h){}w=4
return A.b(C.fqC(d),$async$Hn)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.iaC(k,p,d)
j=A.U(o)
s=j.k("N<1,a9<m,@>>")
s=A.C(new A.N(o,new C.fJZ(),s),s.k("ak.E"))
n=B.Y.aw(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.RP(d,o),$async$Hn)
case 7:case 6:j=j.k("Y<1>")
m=A.C(new A.Y(o,new C.fK_(d),j),j.k("M.E"))
if(m.length!==0)C.aQI(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Hn,v)},
fXd(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fXd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.RP(d,e),$async$fXd)
case 3:t=J.dI(e,new C.fXe(d))
s=A.C(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aQI(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fXd,v)},
a41(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a41=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aA(),$async$a41)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aV(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.Y.aQ(0,l,null)
if(x.j.b(u)){m=J.dd(u,x.f)
m=A.cF(m,new C.h4K(),m.$ti.k("M.E"),x.k)
t=A.a4(m).k("Y<M.E>")
s=A.C(new A.Y(m,new C.h4L(),t),t.k("M.E"))
o=s}}catch(k){}q=J.ow(o,new C.h4M(e))
if(B.a.i(e.x).length===0&&C.uy(e,d)){m=B.a.i(d.toLowerCase())
p=e.aG8(e.y===D.kU?D.kU:D.uC,m)}else p=e
if(q===-1)J.n2(o,0,p)
else J.aK(o,q,p)
w=3
return A.b(C.RP(d,o),$async$a41)
case 3:w=C.uy(p,d)?4:5
break
case 4:w=6
return A.b(C.aQH(C.Hl(p,d),p),$async$a41)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a41,v)},
aQU(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aQU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Hn(d),$async$aQU)
case 2:u=g
t=J.cC(u)
s=A.nA(t.eP(u,new C.fGs(e)))
t.br(u,new C.fGt(e))
w=3
return A.b(C.RP(d,u),$async$aQU)
case 3:w=s!=null&&C.aQY(s,d)?4:5
break
case 4:w=6
return A.b(C.fpT(e),$async$aQU)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aQU,v)},
aj0(d){var w=d.f,v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.h4V(),v),v.k("M.E"))
return w},
heT(d,e){var w,v=d.f,u=A.nA(new A.Y(v,new C.fFX(e),A.U(v).k("Y<1>")))
v=C.aj0(d)
w=A.U(v).k("Y<1>")
v=A.C(new A.Y(v,new C.fFY(e,u),w),w.k("M.E"))
B.d.aZ(v,new C.fFZ())
return v},
iig(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hFX(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bj(C.heT(d,u),new C.h4i(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
ijP(d,e){var w
if(e==null||e.length===0)return 1
w=C.heT(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fKM(),A.U(w).k("N<1,G>")).f1(0,B.xT)+1},
isl(d){var w,v=C.aj0(d)
if(v.length===0)return null
w=new A.Y(v,new C.fX7(),A.U(v).k("Y<1>"))
if(!w.gau(0))return w.gH(0)
return B.d.gH(v)},
iib(d){return A.I(["id",d.a,"name",d.b,"gender",C.hBn(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
ijJ(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
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
n=n!==D.z1?n:q.c
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
d=q.aG3(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.J)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cPI(a1,w,a3.d,a2.y,s,a0,v)},
Bq(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$Bq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$Bq)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aV(J.t(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.Y.aQ(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.dd(t,x.f)
p=A.cF(p,new C.fJT(),p.$ti.k("M.E"),x.k)
s=A.a4(p).k("Y<M.E>")
p=A.C(new A.Y(p,new C.fJU(),s),s.k("M.E"))
B.d.aZ(p,new C.fJV())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Bq,v)},
aiL(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aiL=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.uC:D.kU
a7=C.Hl(b2,b3)
w=2
return A.b(C.Bq(b1),$async$aiL)
case 2:a8=b5
a9=J.cC(a8)
b0=a9.bj(a8,new C.fX2(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bDR(b1,b2),$async$aiL)
case 5:case 4:if(b0===-1){u=b2.aG8(a6,a7)
a9.c9(a8,0,u)}else{t=a9.h(a8,b0)
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
i=i!==D.z1?i:l.c
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
s.n(0,m,l.aG3(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("b7<2>")
s=A.C(new A.b7(s,k),k.k("M.E"))
k=a5?D.uC:D.kU
u=t.cPK(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.RP(b1,a8),$async$aiL)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aQH(B.a.i(b3.toLowerCase()),u),$async$aiL)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aiL,v)},
hxi(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("N<1,a9<m,@>>"),k=A.C(new A.N(m,C.hF0(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.I(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.I(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hxj(d,e){var w=new A.V(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("N<1,a9<m,@>>")
u=A.C(new A.N(u,C.hF0(),t),t.k("ak.E"))
return A.I(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
i82(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a7(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.amb(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hhn(),A.U(j).k("N<1,m>")).bY(0,new C.fqp())
t=A.C(j,j.$ti.k("M.E"))
if(u===v)s=D.uC
else s=B.d.q(t,u)?D.OD:D.kU
return w.aG8(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.amb(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.dd(q,h)
h=A.cF(h,new C.fqq(),h.$ti.k("M.E"),x.P)
p=A.a4(h).k("Y<M.E>")
o=A.C(new A.Y(h,new C.fqr(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b8(n,new C.fqs(),x.N).bY(0,new C.fqt())
t=A.C(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.uC
else s=B.d.q(t,u)?D.OD:D.kU
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.z(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bh(J.k(l==null?"":l))
if(l==null)l=new A.V(Date.now(),0,!1)
j=A.aJ(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.i.M(j)
if(j==null)j=0
return new C.kV(h,r,p,!m,t,o,l,j,v,s,B.cd)},
fqC(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fqC=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fqG()
h=x.N
g=x.z
w=7
return A.b(A.iB(A.a([A.lH("family_trees","*",null,A.I(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bN),r.$2(A.lH("family_trees","*",A.I(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bN),"collaborator"),r.$2(A.lH("family_trees","*",null,A.I(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bN),"public")],x.cl),x.fO),$async$fqC)
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
h=A.cF(new A.b7(l,h),new C.fqD(a0),h.k("M.E"),x.k)
l=A.a4(h).k("Y<M.E>")
l=A.C(new A.Y(h,new C.fqE(),l),l.k("M.E"))
B.d.aZ(l,new C.fqF())
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
return A.i($async$fqC,v)},
iaC(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a7(e)
if(j.gau(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dM(e,new C.fuL(),v).bY(0,new C.fuM())
t=A.d2(u,u.$ti.k("M.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.J)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Hl(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kU){m=q.e
m=!new A.N(m,A.hhn(),A.U(m).k("N<1,m>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gR(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.ijJ(l,v)
o=C.Hl(k,w)
p=v.d
s.n(0,u,o===w?k.bfh(p,D.uC):k.bfh(p,v.y))}j=s.$ti.k("b7<2>")
j=A.C(new A.b7(s,j),j.k("M.E"))
B.d.aZ(j,new C.fuN())
return j},
RP(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$RP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aA(),$async$RP)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b8(e,new C.fxL(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aC("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.Y.aw(s,null)),$async$RP)
case 3:return A.h(null,v)}})
return A.i($async$RP,v)},
aQH(d,e){return C.ifW(d,e)},
ifW(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aQH=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.me("family_trees",A.a([C.hxi(e,d)],p),null,B.cM),$async$aQH)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.me("family_trees",A.a([C.hxj(e,d)],p),null,B.cM),$async$aQH)
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
return A.i($async$aQH,v)},
aQI(d,e){return C.ifX(d,e)},
ifX(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aQI=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("N<1,a9<m,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fD1(d),n),m)
r=l
w=7
return A.b(A.me("family_trees",r,null,B.cM),$async$aQI)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fD2(d),n),m)
p=k
w=8
return A.b(A.me("family_trees",p,null,B.cM),$async$aQI)
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
return A.i($async$aQI,v)},
fpT(d){return C.i7g(d)},
i7g(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fpT=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Se("family_trees",A.I(["id",d],x.N,x.z),null,B.cM),$async$fpT)
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
return A.i($async$fpT,v)},
rp:function rp(d,e,f,g,h){var _=this
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
cGb:function cGb(){},
cGa:function cGa(){},
cG8:function cG8(){},
cG9:function cG9(){},
Iv:function Iv(d,e){this.a=d
this.b=e},
hW:function hW(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
ama:function ama(d,e){this.a=d
this.b=e},
fGh:function fGh(){},
h4R:function h4R(d){this.a=d},
fDM:function fDM(d){this.a=d},
kV:function kV(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bSF:function bSF(){},
bSE:function bSE(){},
bSB:function bSB(){},
bSC:function bSC(){},
bSD:function bSD(){},
fu3:function fu3(){},
fpP:function fpP(){},
fpQ:function fpQ(){},
fpR:function fpR(){},
fXr:function fXr(){},
fXs:function fXs(){},
fXt:function fXt(){},
fXu:function fXu(d){this.a=d},
fXv:function fXv(){},
h4P:function h4P(d){this.a=d},
fGL:function fGL(d){this.a=d},
fJW:function fJW(){},
fJX:function fJX(){},
fJY:function fJY(){},
fJZ:function fJZ(){},
fK_:function fK_(d){this.a=d},
fXe:function fXe(d){this.a=d},
h4K:function h4K(){},
h4L:function h4L(){},
h4M:function h4M(d){this.a=d},
fGs:function fGs(d){this.a=d},
fGt:function fGt(d){this.a=d},
h4V:function h4V(){},
fFX:function fFX(d){this.a=d},
fFY:function fFY(d,e){this.a=d
this.b=e},
fFZ:function fFZ(){},
h4i:function h4i(d){this.a=d},
fKM:function fKM(){},
fX7:function fX7(){},
fJT:function fJT(){},
fJU:function fJU(){},
fJV:function fJV(){},
fX2:function fX2(d){this.a=d},
fqp:function fqp(){},
fqq:function fqq(){},
fqr:function fqr(){},
fqs:function fqs(){},
fqt:function fqt(){},
fqG:function fqG(){},
fqH:function fqH(d){this.a=d},
fqD:function fqD(d){this.a=d},
fqE:function fqE(){},
fqF:function fqF(){},
fuL:function fuL(){},
fuM:function fuM(){},
fuN:function fuN(){},
fxL:function fxL(){},
fD1:function fD1(d){this.a=d},
fD2:function fD2(d){this.a=d},
cGc:function cGc(d,e){this.a=d
this.b=e},
cGd:function cGd(d,e){this.a=d
this.b=e},
aIH:function aIH(d,e,f){this.a=d
this.b=e
this.c=f},
baL:function baL(){this.b=this.a=0},
baK:function baK(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
byn:function byn(){},
xn(d,e){var w,v
if(d==null)return""
w=d.bT()
v=""+w.gcg()+"/"+w.gcz()+"/"+w.gcl()
if(!e)return v
return v+" "+B.a.b_(B.o.u(w.gnv()),2,"0")+":"+B.a.b_(B.o.u(w.gGN()),2,"0")},
hYB(){var w,v=$.os(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"WS"+B.d.he(u)},
atZ(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$atZ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$atZ)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bN),$async$atZ)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.t(r,"stashes")
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
case 7:u=A.T(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$atZ,v)},
au_(d){return C.hYC(d)},
hYC(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$au_=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$au_)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hK("ngmy_worksheet_project_qr_stashes_v1",A.I(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cM,null),$async$au_)
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
return A.i($async$au_,v)},
au1(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$au1=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$au1)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hYB()
w=4
return A.b(C.atZ(),$async$au1)
case 4:r=h
q=B.a.i(e)
p=B.dT.aN(t)
J.aK(r,s,A.I(["ownerEmail",q,"projectId",f,"payload",B.cP.gcu().aN(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.au_(r),$async$au1)
case 5:u=new A.a1s("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$au1,v)},
au0(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$au0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c9(),$async$au0)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.atZ(),$async$au0)
case 4:q=f
p=J.a7(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a7(o)
m=A.aJ(n.h(o,"usesRemaining"))
l=m==null?null:B.i.M(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.ca.cJ(0,B.cJ.aN(t))}catch(h){r=A.ab(h)
$.am.$1("[worksheet qr stash] decode: "+A.w(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dO(A.a2(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
p.n(q,i,m)}w=5
return A.b(C.au_(q),$async$au0)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$au0,v)},
hrJ(){var w=new A.V(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cN.az(999999)},
hYD(d){var w,v,u,t,s,r,q
try{w=A.ahF(d)
if(w==null)return d
v=w
if(J.Mg(v)>960||J.Mf(v)>960){s=v
r=J.Mg(v)>=J.Mf(v)?960:null
v=A.ahC(s,J.Mf(v)>J.Mg(v)?960:null,B.Q1,r)}s=v
u=A.anw(82).TW(s,B.zF)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cd(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
cot(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cot=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hYD(e)
$.cop.n(0,s,t)
u=C.bFT(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cot,v)},
b4t(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b4t=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d5(l,"data:image")){u=null
w=1
break}t=4
r=J.eH(l,",")?B.d.gan(J.lM(l,",")):l
q=B.cJ.aN(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hrJ()
w=7
return A.b(C.cot(p,q),$async$b4t)
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
return A.i($async$b4t,v)},
coq(d){var w=0,v=A.j(x.T),u,t,s
var $async$coq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a_(s,"data:image")){u=s
w=1
break}w=3
return A.b(N.cos(s),$async$coq)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cP.gcu().aN(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$coq,v)},
a9F(d){var w=0,v=A.j(x.H),u,t
var $async$a9F=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=N.hET(d)
if(t==null){w=1
break}$.cop.W(0,t)
w=3
return A.b(C.bFS(t),$async$a9F)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a9F,v)},
bFT(d,e){return C.iq_(d,e)},
iq_(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bFT=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aPw
w=7
return A.b(n==null?$.aPw=N.hdI():n,$async$bFT)
case 7:r=g
q=new Uint8Array(A.cd(e))
p=J.mj(r,"thumbs","readwrite")
B.iA.md(J.mi(p,"thumbs"),q,l)
w=8
return A.b(J.ov(p),$async$bFT)
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
return A.i($async$bFT,v)},
bFS(d){return C.ipY(d)},
ipY(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bFS=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aPw
w=7
return A.b(o==null?$.aPw=N.hdI():o,$async$bFS)
case 7:r=f
q=J.mj(r,"thumbs","readwrite")
B.iA.Gn(J.mi(q,"thumbs"),m)
w=8
return A.b(J.ov(q),$async$bFS)
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
return A.i($async$bFS,v)}},D,At,Au,Z,Av,Aw,N
J=c[1]
A=c[0]
B=c[2]
P=c[258]
A_=c[166]
S=c[60]
A7=c[233]
L=c[214]
H=c[35]
E=c[224]
T=c[122]
A8=c[236]
Q=c[106]
A9=c[137]
Aa=c[117]
Ab=c[201]
A0=c[119]
Ac=c[232]
Ad=c[44]
R=c[231]
Ae=c[125]
Af=c[252]
Ag=c[192]
Ah=c[204]
M=c[91]
A1=c[87]
Ai=c[172]
A2=c[132]
A3=c[175]
A4=c[200]
Aj=c[255]
A5=c[257]
Ak=c[79]
G=c[256]
Al=c[136]
Am=c[260]
An=c[121]
A6=c[218]
Ao=c[34]
U=c[120]
O=c[195]
Ap=c[205]
V=c[259]
Aq=c[158]
Ar=c[128]
W=c[245]
X=c[43]
F=c[97]
As=c[33]
I=c[105]
K=c[141]
Y=c[77]
C=a.updateHolder(c[7],C)
D=c[251]
At=c[78]
Au=c[212]
Z=c[254]
Av=c[253]
Aw=c[64]
N=c[61]
C.apI.prototype={}
C.b_M.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bjB(),f=h.x!=null&&h.zL(i).length===0
if(h.x!=null)w=f?B.b2:B.bC
else w=h.gUB()?B.bC:B.dZ
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.l(22)
t=A.L(D.bpf,B.r,1)
s=x.p
r=A.r(i,A.x(A.a([A.r(i,D.f9O,B.f,i,i,new A.p(B.b2.j(0.12),i,i,A.l(999),i,i,B.n),i,i,i,i,B.he,i,i,i),B.X,D.fFJ,B.aw,A.d(C.xn(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fBp,i,i,i)],s),B.l,i,B.e,B.j,0,B.p),B.f,i,i,D.b7q,i,i,i,i,B.a0x,i,i,i)
q=A.l(16)
p=A.L(B.aO,B.r,1)
o=A.L(B.b2.j(0.28),B.r,1)
n=A.hfW(h.d)
o=A.r(B.A,C.b_L(A.fN6(h.e,n),30),B.f,i,i,new A.p(B.m6,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fwp,B.K,i,i)
m=A.l(14)
l=A.L(B.aO,B.r,1)
q=A.r(i,A.x(A.a([o,B.T,n,B.bG,D.fG1,B.af,A.r(i,A.x(A.a([D.fWf,B.bG,A.d(A.Bs(h.c),i,i,i,i,i,i,D.fr2,i,i,i)],s),B.l,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fg,i,i,1/0)],s),B.l,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.aP,i,p,q,i,i,B.n),i,i,i,i,O.alR,i,i,i)
p=A.l(16)
m=A.L(B.aO,B.r,1)
l=j.aTd("Original due",C.xn(h.r,!1))
n=j.aTd("Current due",C.xn(h.f,!1))
o=w.j(0.1)
k=A.l(12)
p=A.a([q,B.X,A.r(i,A.x(A.a([l,B.T,n,B.X,A.r(i,A.d(h.gaNf(),i,i,i,i,i,i,A.n(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.p(o,i,i,k,i,i,B.n),i,i,i,i,B.Ce,i,i,1/0),B.X,j.ckz(),B.T,j.c7l(g,f)],s),B.l,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bi,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.l(14)
n=A.L(B.aO,B.r,1)
B.d.v(p,A.a([B.X,A.r(i,A.x(A.a([D.fGZ,B.aw,A.d(q,i,i,i,i,i,i,D.fvC,i,i,i)],s),B.E,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bi,i,i,1/0)],s))}if(h.gaHP()){q=A.l(14)
o=A.L(B.cu,B.r,1.6)
B.d.v(p,A.a([B.X,A.r(i,A.x(A.a([D.fXA,B.T,A.by(A.l(12),A.e9(new A.a5(1/0,88,A.b4(i,i,i,new A.Xe(h.ax,B.U,D.fey,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.E,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.c,i,o,q,i,i,B.n),i,i,i,i,B.GL,i,i,i)],s))}p.push(B.aB)
p.push(D.fPm)
return A.r(i,A.x(A.a([r,new A.D(B.a0m,A.x(p,B.al,i,B.e,B.j,0,B.p),i)],s),B.al,i,B.e,B.P,0,B.p),B.aq,i,i,new A.p(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aTd(d,e){var w=null
return A.B(A.a([A.E(A.d(d,w,w,w,w,w,w,D.abo,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fs6,w,w,w)],x.p),B.l,w,B.e,B.j,0,w,w)},
ckz(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.aas(B.dZ,u,"Not paid yet")
w=t.zL(null).length
v=w===0?B.b2:B.bC
return this.aas(v,u,C.xn(t.x,!0))},
c7l(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.aas(B.b2,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.aas(B.b2,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.abo,u,u,u)
v=A.U(d).k("N<1,h2>")
v=A.C(new A.N(d,new C.c7U(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bW(B.bH,v,B.bs,u,6,6)],x.p),B.E,u,B.e,B.j,0,B.p)},
aas(d,e,f){var w=null
return A.B(A.a([A.E(A.d(e,w,w,w,w,w,w,D.abo,w,w,w),1),new A.dl(1,B.cm,A.d(f,w,w,w,w,w,w,A.n(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.e1,w,w),w)],x.p),B.E,w,B.e,B.j,0,w,w)}}
C.bcX.prototype={
a5(d,e){new A.Xe(this.b,B.U,e,!0,3.5,null).a5(d,e)},
aD(d){return d.b!==this.b}}
C.apU.prototype={
S(){return new C.aEB(A.a([],x.bp))},
ge3(){return this.c}}
C.aEB.prototype={
Y(){this.a4()
this.Jj()},
Jj(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Jj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3g(t.a.c),$async$Jj)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dQf(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Jj,v)},
aVb(d,e){var w,v=null,u=this.a.d.a,t=u?B.U:B.aP,s=A.n(v,v,u?B.bv:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.l(10)
u=(this.a.d.a?B.bv:B.bm).j(0.22)
w=A.l(10)
return A.bt(v,new A.b6(4,r,new A.ay(u,1,B.r,-1)),v,B.bi,v,v,v,v,!0,new A.b6(4,w,new A.ay((this.a.d.a?B.bv:B.bm).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.l(10),D.b53),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aVa(d){return this.aVb(d,null)},
Q3(d){return this.coc(d)},
coc(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Q3=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.I1:B.eO
w=7
return A.b(new A.hX().CL(72,900,900,n),$async$Q3)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fq(),$async$Q3)
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
if(n!=null)n.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d("Could not pick photo: "+A.w(o),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
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
b3j(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.U:B.aP,o=A.l(10),n=A.L((q?B.bv:B.bm).j(0.18),B.r,1)
if(d)q=B.cG
else q=s.a.d.a?B.bv:B.bm
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.n(r,r,s.a.d.a?B.aP:B.ar,r,r,r,r,r,r,r,r,12.5,r,r,B.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cG
else u=s.a.d.a?B.bv:B.bm
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.n(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.j,0,B.p),1)
v=A.fv(r,r,r,r,r,r,r,r,r,r,r,B.cG,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cf)
q=A.a([q,B.ae,u,A.bO(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.X(B.cy,s.a.d.a?B.bv:B.bm,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cf))
return A.r(r,A.B(q,B.l,r,B.e,B.j,0,r,r),B.f,r,r,new A.p(p,r,n,o,r,r,B.n),r,r,r,B.jF,D.bCd,r,r,r)},
DH(d){return this.bDN(d)},
bDM(){return this.DH(null)},
bDN(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DH=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.au(new A.ba(a4,B.b7,B.aR),s)
if(a3)a4=""
else{a4=a5.c
q=B.i.iH(a4)
p=a5.c
a4=a4===q?B.o.u(B.i.M(p)):B.i.ad(p,2)}o=new A.au(new A.ba(a4,B.b7,B.aR),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.ba(a4,B.b7,B.aR),s)
if(a3){a4=new A.V(Date.now(),0,!1).bR(6048e8)
m=A.c2(a4.gcl(),a4.gcg(),a4.gcz(),0,0,0,0,0)}else{a4=a5.f
m=A.c2(a4.gcl(),a4.gcg(),a4.gcz(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bq(a4,!0,x.cT)
i=a3?null:A.hfW(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.x4?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hL(B.w.j(0.55),!0,"Dismiss",a4,new C.dPZ(),new C.dQ_(a2,t,a5,r,new C.dQ0(a2,t),o,n,j),B.eI,!0,x.y),$async$DH)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.cX(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.U$=s
r.P$=0
o.U$=s
o.P$=0
n.U$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.L(x.q).f.T(D.fl5)
w=1
break}a0=a2.d
if(a0==null){t.c.L(x.q).f.T(D.fjK)
w=1
break}a1=A.fN6(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.x4?"male":"female"
w=7
return A.b(A.aj_(a3,A.hol(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$DH)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.x4?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c2(a3.gcl(),a3.gcg(),a3.gcz(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c2(a4.gcl(),a4.gcg(),a4.gcz(),0,0,0,0,0)))a5.cS4(a2.a)
w=8
return A.b(A.aj_(t.a.c,a5),$async$DH)
case 8:case 5:w=9
return A.b(t.Jj(),$async$DH)
case 9:case 1:return A.h(u,v)}})
return A.i($async$DH,v)},
aVR(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cG.j(0.14)
else w=this.a.d.a?B.U:B.aP
v=A.l(12)
u=A.l(12)
t=A.l(12)
if(g)s=B.cG
else s=(this.a.d.a?B.bv:B.bm).j(0.2)
s=A.L(s,B.r,g?1.5:1)
r=C.b_L(d,18)
if(g)q=B.cG
else q=this.a.d.a?B.aP:B.ar
return A.aI(!1,B.a3,!0,v,A.aP(!1,u,!0,A.r(p,A.B(A.a([r,B.bn,A.d(e,p,p,p,p,p,p,A.n(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.bb,B.j,0,p,p),B.f,p,p,new A.p(p,p,s,t,p,p,B.n),p,p,p,p,B.bV,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.aj)},
ST(d){return this.cG2(d)},
cG2(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$ST=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hL(B.w.j(0.55),!0,"Dismiss",s,new C.dQi(),new C.dQj(t,d),B.h4,!0,x.y),$async$ST)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.aj_(t.a.c,d),$async$ST)
case 7:w=8
return A.b(t.Jj(),$async$ST)
case 8:case 1:return A.h(u,v)}})
return A.i($async$ST,v)},
Q2(d,e){return this.bOG(0,e)},
bOG(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Q2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ln(s,"Cancel","Delete",e.b+" \xb7 "+A.Bs(e.c)+" will be removed from this device.","Delete this debt?"),$async$Q2)
case 3:if(!g){w=1
break}w=4
return A.b(C.fGz(t.a.c,e.a),$async$Q2)
case 4:w=5
return A.b(t.Jj(),$async$Q2)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Q2,v)},
agf(d){return this.chZ(d)},
chZ(d){var w=0,v=A.j(x.H),u=this,t
var $async$agf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bU(B.L,null,new C.dQc(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$agf)
case 2:return A.h(null,v)}})
return A.i($async$agf,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.esW
w=J.dI(m.d,new C.dQk())
v=A.C(w,w.$ti.k("M.E"))
w=J.dI(m.d,new C.dQl())
u=A.C(w,w.$ti.k("M.E"))
t=B.d.cG(v,0,new C.dQm())
w=A.l(18)
s=m.a.d.a
r=s?D.cBZ:D.aCN
q=A.L(s?B.cG.j(0.35):B.cG.j(0.18),B.r,1)
s=A.r(l,D.c2Q,B.f,l,l,new A.p(B.cG.j(m.a.d.a?0.28:0.14),l,l,A.l(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.au,A.E(A.d("Cashier",l,l,l,l,l,l,A.n(l,l,m.a.d.a?B.aP:B.ar,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aI(!1,B.a3,!0,A.l(12),A.aP(!1,A.l(12),!0,D.esg,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dQn(m),l,l,l,l,l,l,l),B.f,B.cG,0,l,l,l,l,l,B.aj)],p),B.l,l,B.e,B.j,0,l,l)
o=A.E(m.cC8("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Bs(t)
r=A.a([A.r(l,A.x(A.a([s,B.af,A.B(A.a([o,B.ae,A.E(m.b9t(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.j,0,l,l)],p),B.E,l,B.e,B.j,0,B.p),B.f,l,l,new A.p(l,l,q,w,l,new A.a8(B.aA,B.aE,B.x,r,l,l),B.n),l,l,l,l,B.alO,l,l,l),B.aB],p)
if(J.cs(m.d)){w=m.a.d.a
s=w?B.ef:B.c
q=A.l(18)
o=A.L((w?B.bv:B.bm).j(0.12),B.r,1)
n=A.r(l,D.bYy,B.f,l,l,new A.p(B.cG.j(0.12),l,l,A.l(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.n(l,l,m.a.d.a?B.aP:B.ar,l,l,l,l,l,l,l,l,15,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.r(l,A.x(A.a([n,B.af,w,B.aw,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.n(l,l,m.a.d.a?B.bv:B.bm,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.j,0,B.p),B.f,l,l,new A.p(s,l,o,q,l,l,B.n),l,l,l,l,D.bEQ,l,l,1/0))}else{w=m.gcnt()
s=A.C(new A.N(v,w,A.U(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bGw,A.d("Paid",l,l,l,l,l,l,A.n(l,l,m.a.d.a?B.bv:B.bm,l,l,l,l,l,l,l,l,12,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.N(u,w,A.U(u).k("N<1,v>")))
B.d.v(s,q)}B.d.v(r,s)}return A.x(r,B.al,l,B.e,B.j,0,B.p)},
b9t(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.l(14),r=A.L((v.a.d.a?B.bv:B.bm).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.n(u,u,v.a.d.a?B.bv:B.bm,u,u,u,u,u,u,u,u,11,u,u,B.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cG
else w=v.a.d.a?B.aP:B.ar
return A.r(u,A.x(A.a([q,B.bG,A.d(f,u,1,B.a2,u,u,u,A.n(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.j,0,B.p),B.f,u,u,new A.p(t,u,r,s,u,u,B.n),u,u,u,u,B.ez,u,u,u)},
cC8(d,e){return this.b9t(!1,d,e)},
cnu(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zL(j).length,h=d.biR()
if(d.x!=null){w=d.zL(j).length
v=w===0?B.cG:B.bC}else if(d.gUB())v=B.bC
else{if(h)w=B.cG
else w=k.a.d.a?B.bv:B.bm
v=w}if(d.x!=null){w=d.zL(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xn(u,!1)}else{u.toString
t="Paid "+C.xn(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xn(w,!1)+" \xb7 "+i+" missed":"Due "+C.xn(w,!1)}w=k.a.d.a?B.ef:B.c
u=A.l(18)
if(d.gUB()&&d.x==null)s=B.bC.j(0.35)
else s=(k.a.d.a?B.bv:B.bm).j(0.12)
s=A.L(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cI,12)],x.V)
q=A.l(18)
p=k.a.d.a?B.br:B.m6
o=A.L(d.gUB()&&d.x==null?B.bC.j(0.45):B.cG.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hfW(d.d)
o=A.r(B.A,A.d3(C.b_L(A.fN6(d.e,m),24),n),B.f,j,j,new A.p(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.ar
m=x.p
n=A.a([new A.dl(1,B.cm,A.d(p,j,1,B.a2,j,j,j,A.n(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaHP())B.d.v(n,A.a([B.e5,A.X(B.P4,B.cG.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.B(n,B.l,j,B.e,B.j,0,j,j),B.cR,A.d(t,j,1,B.a2,j,j,j,A.n(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.V,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.j,0,B.p),1)
n=A.Bs(d.c)
l=k.a.d.a?B.aP:B.ar
n=A.d(n,j,j,j,j,j,j,A.n(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.r(j,A.aI(!1,B.a3,!0,j,A.aP(!1,q,!0,new A.D(Af.alC,A.B(A.a([o,B.bd,p,B.ae,A.x(A.a([n,B.bG,A.X(B.eG,(k.a.d.a?B.bv:B.bm).j(0.5),j,j,j,18)],m),B.dM,j,B.e,B.j,0,B.p)],m),B.l,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dQe(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.aj),B.f,j,j,new A.p(w,j,s,u,r,j,B.n),j,j,j,B.d5,j,j,j,j)}}
C.uT.prototype={}
C.alZ.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bo
u=v?B.E:B.l
t=a1.as
s=A.l(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.L(q,B.r,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cB,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.L(r.j(0.6),B.r,1)
n.push(A.az(a0,A.r(a0,A.X(B.cy,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.p(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a7:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iN,A.d(k,a0,a0,a0,a0,a0,a0,A.n(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.n(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.ayX,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.H1,A.d(k,a0,a0,a0,a0,a0,a0,A.n(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.ev(m,A.B(l,B.l,a0,B.e,B.P,0,a0,a0),B.f,B.e4)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bBo,A.d(v,a0,1,B.a2,a0,a0,a0,A.n(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cH:B.bt,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fI,A.x(a2,u,a0,B.e,B.P,0,B.p),a0),1))
n.push(D.ffm)
a2=A.a([A.B(n,B.l,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.wk,A.r(a0,a0,B.f,a0,a0,new A.p(a0,a0,a0,a0,a0,new A.a8(B.a7,B.aa,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lL,A.x(a2,B.l,a0,B.e,B.P,0,B.p),a0)
if(a1.z){a2=A.l(t?9:19)
e=A.r(a0,e,B.f,a0,a0,new A.p(a0,a0,A.L(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hv,a0,a0,a0,a0)}return A.r(a0,e,B.f,a0,a0,new A.p(a0,a0,q,s,p,new A.a8(B.aA,B.aE,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bCH,a0,a0,a0,a0)}}
C.aWu.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.r(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.n(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bo?B.bo:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a2,q,q,q,A.n(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bt:B.cH,q,B.V,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.n(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.B(l,B.l,q,B.e,B.j,0,q,q),B.cR,n],m)
if(p.z)o.push(new A.D(B.ut,n,q))
return new A.D(B.d5,A.x(o,B.l,q,B.e,B.P,0,B.p),q)}}
C.U5.prototype={
S(){return new C.bgz()}}
C.bgz.prototype={
gc2b(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aF(d,n,x.w).w,l=x.p,k=A.a([D.esR,D.esX],l)
for(w=0;w<8;++w){v=D.a4N[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.HO:B.zo
q=t===s
r=A.X(r,q?B.eL:B.bW,n,n,n,17)
q=q?B.c:B.ac
r=A.a([r,B.bn,A.d(v.b,n,n,n,n,n,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.ae,new A.bz(1,B.bc,A.d(v.c,n,1,B.a2,n,n,n,B.AO,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aN(24,24)
p=new A.ay(B.eL,2,B.r,-1)
s=new A.p(n,n,new A.bH(p,p,p,p),new A.be(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.az(n,new A.D(B.eJ,A.x(A.a([new A.D(B.n_,new A.c8(B.aL,B.e,B.j,B.l,n,B.p,n,0,r,n),n),A.r(n,new A.du(!0,new C.alZ(v,q.d,q.e,new C.dfV(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dfW(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bD2,A.bJ(D.h29,n,new C.dfX(o,d),A.bp(B.b8,n,n,n,n,B.oW,n,n,new A.b9(A.l(16),B.a1),n,n,n)),n))
return A.bm(!0,new A.cP(new A.aY(0,1/0,0,m.a.b*0.9),A.cl(k,n,n,D.bHo,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nw.prototype={
aj(){var w=this
return A.I(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bft(d,e,f){return new C.nw(this.a,e,d,f)}}
C.Iu.prototype={
wZ(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Iu(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aFX(d){var w=null
return this.wZ(w,w,w,w,w,d,w,w,w,w,w,w)},
cNH(d){var w=null
return this.wZ(w,w,w,w,d,w,w,w,w,w,w,w)},
bfr(d,e,f){var w=null
return this.wZ(d,w,w,w,w,w,w,w,e,w,f,w)},
cOl(d){var w=null
return this.wZ(w,w,w,w,w,w,d,w,w,w,w,w)},
cOu(d){var w=null
return this.wZ(w,w,w,w,w,w,w,w,w,d,w,w)},
cNF(d){var w=null
return this.wZ(w,w,w,d,w,w,w,w,w,w,w,w)},
cOw(d){var w=null
return this.wZ(w,w,w,w,w,w,w,w,w,w,w,d)},
cNC(d){var w=null
return this.wZ(w,w,d,w,w,w,w,w,w,w,w,w)},
cNx(d){var w=null
return this.wZ(w,d,w,w,w,w,w,w,w,w,w,w)},
Gf(d){var w=null
return this.wZ(w,w,w,w,w,w,w,d,w,w,w,w)},
cOE(d,e,f,g,h,i,j,k,l,m,n){return this.wZ(d,e,f,g,null,h,i,j,k,l,m,n)},
aj(){var w=this
return A.I(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cLb(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bRm(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.i.M(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.DN.gev(D.DN))
s=i==null?o:B.i.D(i,18,36)
r=l.$2("position",D.a6t)
q=l.$2("frame",D.a5O)
l=l.$2("texture",D.a5K)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cOE(p,u,t,q,r,A.rd(d.h(0,"ribbon"))?A.GY(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a_E.prototype={
S(){return new C.aBA(A.a([],x.I),D.OC)},
ge3(){return this.c}}
C.aBA.prototype={
Y(){var w,v=this
v.a4()
v.f=A.Ai(0,1)
w=$.aw()
v.z=new A.au(B.ax,w)
v.Q=new A.au(B.ax,w)
v.lh()
w=v.a
C.bEe(w.c,w.d).bG(new C.dgB(v),x.fL)},
t(){var w,v=this,u=v.f
u===$&&A.c()
u.t()
u=v.z
u===$&&A.c()
w=$.aw()
u.U$=w
u.P$=0
u=v.Q
u===$&&A.c()
u.U$=w
u.P$=0
v.a3()},
lh(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$lh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.LL(s.c,s.d),$async$lh)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dgp(t,r))
t.axF()
case 1:return A.h(u,v)}})
return A.i($async$lh,v)},
gaue(){var w,v=this
if(!J.cs(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
axF(){var w,v,u=this.gaue(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.sb1(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.sb1(0,w==null?"":w)},
cgo(d){this.m(new C.dgm(this,d))
this.axF()},
NZ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$NZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nw(B.o.u(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aSz(r.c,r.d,s),$async$NZ)
case 3:w=4
return A.b(t.lh(),$async$NZ)
case 4:if(t.c==null||J.cs(t.d)){w=1
break}q=J.ow(t.d,new C.dfY(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.dfZ(t,p))
t.axF()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.BK(p+1,B.cw,B.kQ),$async$NZ)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$NZ,v)},
Bq(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Bq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gaue()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aSz(o.c,o.d,new C.nw(s,r,q,new A.V(p,0,!1))),$async$Bq)
case 3:w=4
return A.b(t.lh(),$async$Bq)
case 4:if(t.c==null){w=1
break}t.m(new C.dgq(t))
case 1:return A.h(u,v)}})
return A.i($async$Bq,v)},
OF(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaue()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dg6(r),s,null,!0,!0,x.y),$async$OF)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bE_(s.c,s.d,r.a),$async$OF)
case 4:t.m(new C.dg7(t))
w=5
return A.b(t.lh(),$async$OF)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.UE(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$OF,v)},
z7(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$z7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bq(),$async$z7)
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
return A.b(C.S5(s,r.r,o,p,q),$async$z7)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hFv(s,r.x,r.r),$async$z7)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.LL(s.c,s.d),$async$z7)
case 10:l=e
for(s=n.d,r=J.cC(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.J(l,new C.nw(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.BB(r.c,r.d,l),$async$z7)
case 11:w=12
return A.b(t.lh(),$async$z7)
case 12:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$z7,v)},
a1u(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1u=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bq(),$async$a1u)
case 5:case 4:if(t.c==null){w=1
break}s=t.gz5(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dP(D.zQ,new C.dgn(t),new C.dgo())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.mS("Our Family",o,"",""))
for(o=J.aT(t.d);o.C();){n=o.gR(o)
p.push(new H.mS(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hhD(o,new H.rN(s,r,"",p,new H.v8(q.d,null,null,null,null,"","","")),null),$async$a1u)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a1u,v)},
On(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$On=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bq(),$async$On)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bU(D.agw,null,new C.dg2(t),s,!0,!0,!0,I.a9A,!1,!1,x.N),$async$On)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cNH(r)
t.m(new C.dg3(t,q))
s=t.a
w=7
return A.b(C.SI(s.c,s.d,q),$async$On)
case 7:case 1:return A.h(u,v)}})
return A.i($async$On,v)},
XS(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(D.agw,null,new C.dg8(t),r,!0,!0,!0,I.a9A,!1,!1,x.e),$async$XS)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dg9(t,s))
r=t.a
w=4
return A.b(C.SI(r.c,r.d,s),$async$XS)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.BK(0,B.dI,B.mW)
case 1:return A.h(u,v)}})
return A.i($async$XS,v)},
bUm(d){var w=d.bT(),v=B.a.b_(B.o.u(w.gcg()),2,"0"),u=B.a.b_(B.o.u(w.gcz()),2,"0")
return""+w.gcl()+"-"+v+"-"+u},
gz5(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c1p()
if(r.e)w=D.afe
else if(J.cs(r.d)){w=r.y
v=r.gz5(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fqo,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.D(W.amU,new C.ZW(w,v,0,q),q),q),B.bz,t,B.am,A.d(u,q,q,q,q,q,q,A.n(q,q,D.kM.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bz],s)
if(B.a.i(r.a.x).length!==0)w.push(A.az(q,A.r(q,D.f9z,B.f,q,q,new A.p(q,q,q,A.l(18),A.a([new A.ac(0,B.G,B.dL.j(0.45),B.H,18)],x.V),E.wX,B.n),q,q,q,q,B.Oh,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcKc(),q,q,q,q,q,q,!1,B.a4))
w.push(B.X)
w.push(A.ho(D.bUF,D.h1B,r.gaOV(),q))
B.d.v(u,w)}w=A.as(A.ce(A.x(u,B.l,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.ex,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.n(q,q,D.kM.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.V,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dY:B.Bo
u=A.x(A.a([new A.D(D.bE6,w,q),A.E(A.JV(v,new C.dgz(r),J.ad(r.d)+1,q,r.gcgn(),u,B.aL),1),r.bGH()],x.p),B.l,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c4(q,D.Z9,new A.an(B.a0,q,B.b4,B.t,A.a([D.aQi,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c1p(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cJ(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.KT(B.ec,"AI",h.gbEz(),!0))
if(h.a.f)f.push(new C.KT(B.mi,"Cover",h.gbPf(),!1))
if(h.a.f)f.push(new C.KT(B.wQ,"Header",h.gbKe(),!1))
if(J.cJ(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.KT(B.uT,"Print",h.gcpw(),!1))
if(h.a.f&&J.cJ(h.d)&&h.r>=0){v=h.w
u=v?B.hJ:B.j3
t=v?"Save":"Edit"
f.push(new C.KT(u,t,v?h.gcvP():new C.dgj(h),!1))}if(h.a.f)f.push(new C.KT(B.hY,"Add page",h.gaOV(),!1))
v=C.hBm(h.y.Q)
u=h.gz5(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.J)(f),++m){l=f[m]
if(l.d)k=D.dHt
else{k=new A.aN(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.kq.j(0.5),1,B.r,-1)
j=A.r(g,A.X(l.a,D.kM,g,g,g,17),B.f,g,g,new A.p(g,g,new A.bH(i,i,i,i),new A.be(k,k,k,k),g,new A.a8(B.a7,B.aa,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kM.j(0.85)
p.push(new A.bz(1,B.bc,A.az(B.c3,A.x(A.a([k,B.bG,A.d(l.b,g,1,g,g,g,g,new A.F(!0,j,g,g,g,g,9.5,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.P,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.alZ(v,u,t+" \xb7 "+s+" "+r,new C.dgk(h),A.B(p,B.l,g,B.e,B.j,0,g,g),g)},
Ap(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ap=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bq(),$async$Ap)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aT(t.d);r.C();){q=r.gR(r)
s.push(q.b+" "+q.c)}p=H.a3v(B.d.aO(s," "))
s=t.c
s.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.dg_(t,p),s,null,!0,!0,x.N),$async$Ap)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.z7(),$async$Ap)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Eh(),$async$Ap)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.FT("Swahili (Kiswahili)",!0),$async$Ap)
case 18:w=16
break
case 17:w=19
return A.b(t.cGG(o==="sw"?"Swahili (Kiswahili)":"English"),$async$Ap)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$Ap,v)},
ZP(d,e,f,g,h){var w=null,v=A.l(16),u=B.c.j(0.07),t=A.l(16),s=A.L(E.kq.j(0.3),B.r,1),r=x.p
return new A.D(B.cx,A.aP(!1,v,!0,A.r(w,A.B(A.a([A.r(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.p(w,w,w,w,w,E.wX,B.a6),w,42,w,w,w,w,w,42),B.bd,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A1.KH,w,w,w),A.d(g,w,w,w,w,w,w,B.AP,w,w,w)],r),B.E,w,B.e,B.j,0,B.p),1)],r),B.l,w,B.e,B.j,0,w,w),B.f,w,w,new A.p(u,w,s,t,w,w,B.n),w,w,w,w,B.bi,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dgl(d,h),w,w,w,w,w,w,w),w)},
Eh(){return this.bTQ()},
bTQ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Eh=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dgc(r),a7,null,!0,!0,x.ei),$async$Eh)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eB("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.cg(null,null,!1,null,new C.dgd(o),a7,null,!0,!0,x.H).fv(new C.dge(a6))
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
for(a1=0;a1<8;++a1){i=D.zQ[a1]
J.c7(j,i.a)}w=8
return A.b(C.ai9(a0,a7,new C.dgf(o),d,l,e,j),$async$Eh)
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
J.aT1(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.L(x.q).f
j=n
l.T(A.b2(null,null,null,null,null,B.t,null,A.d(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcm(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.al(0,a4)){j=J.t(p,a4)
a7=m.b.h(0,a4).a
a7=j.bft(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.BB(j.c,j.d,l),$async$Eh)
case 11:w=12
return A.b(r.lh(),$async$Eh)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.zQ[a1].a)
a5=l.cLb(j,12,a7)
l=r.a
w=15
return A.b(C.SI(l.c,l.d,a5),$async$Eh)
case 15:if(r.c!=null)r.m(new C.dgg(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.BK(0,B.dI,B.mW)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.L(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.T(A.b2(a3?A.czY("Undo",new C.dgh(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.em,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Eh,v)},
FT(d,e){return this.cGH(d,e)},
cGG(d){return this.FT(d,!1)},
cGH(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$FT=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eB("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.cg(null,null,!1,null,new C.dgs(a0),k,null,!0,!0,x.H).fv(new C.dgt(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.J)(k),++i){n=k[i]
J.c7(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a3I(m,new C.dgu(a0)),$async$FT)
case 10:w=8
break
case 9:w=11
return A.b(C.bFJ(new C.dgv(a0),m,a2),$async$FT)
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
J.aT1(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.L(x.q).f
k=q
o.T(A.b2(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bft(J.t(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.BB(k.c,k.d,o),$async$FT)
case 12:w=13
return A.b(r.lh(),$async$FT)
case 13:o=r.c
if(o==null){w=1
break}o=o.L(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a_(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(A.czY("Undo",new C.dgw(r,d),null),null,null,null,null,B.t,null,k,null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$FT,v)},
bGH(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dg0(v):u
r=A.aH(u,u,u,u,A.X(D.bQm,s?D.kM:B.aU,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cJ(v.d)&&!v.w&&v.r>=0)s=A.ho(A.X(B.wz,B.Go,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.n(u,u,B.Go,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbOQ(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.n(u,u,D.kM.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.as(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dg1(v):u
return A.bm(!0,new A.D(D.bDW,A.B(A.a([r,s,A.aH(u,u,u,u,A.X(B.eG,t<J.ad(v.d)?D.kM:B.aU,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.j,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a_I.prototype={
S(){return new C.bgY(new A.au(B.ax,$.aw()))}}
C.bgY.prototype={
ga2C(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.U$=$.aw()
w.P$=0
this.a3()},
gbSr(){switch(this.ga2C()){case"cover":var w=D.d8t
break
case"book":w=D.d3O
break
default:w=D.dzK
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.l(26),n=E.kq.j(0.5),m=x.p,l=A.B(A.a([D.dHu,B.au,D.bJD,A.aH(p,p,p,p,B.lp,p,p,p,new C.din(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.j,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jx(p,p,p,A.d("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dio(q),q.ga2C()==="page",p,p,p,p))
if(q.a.d)k.push(A.jx(p,p,p,D.fX5,p,new C.dip(q),q.ga2C()==="book",p,p,p,p))
k.push(A.jx(p,p,p,D.fJI,p,new C.diq(q),q.ga2C()==="cover",p,p,p,p))
k=A.bW(B.bH,k,B.bs,p,6,8)
j=B.c.j(0.07)
j=A.aM(p,B.a_,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bt(p,new A.b6(4,A.l(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kj,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.dg,!0,B.a5,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbSr(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.d(s,p,p,p,p,p,p,B.KE,p,p,p)
w.push(A.n3(p,B.c.j(0.08),r,B.hl,new C.dir(q,s),p,p,p,p))}return A.eP(p,E.BT,A.ce(A.x(A.a([l,B.X,D.h_p,B.am,k,B.af,j,B.T,A.bW(B.bH,w,B.bs,p,6,6),B.aB,A.dh(D.bUC,D.h0c,new C.dis(q,d),A.bp(B.b8,p,p,p,p,B.oW,p,p,new A.b9(A.l(16),B.a1),p,p,p)),B.aw,D.fVj],m),B.E,p,B.e,B.P,0,B.p),B.t,p,B.y,p,B.fs,p,p,B.ah),p,p,p,I.a0A,B.d7,p,new A.b9(o,new A.ay(n,1.4,B.r,-1)),p)}}
C.a_G.prototype={
S(){return new C.aBD(A.a([],x.gA))},
ge3(){return this.c}}
C.afW.prototype={}
C.aBD.prototype={
Y(){this.a4()
this.lh()},
lh(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Sa(p.c,p.d),$async$lh)
case 3:o=e
n=A.a([],x.gA)
p=J.aT(o)
case 4:if(!p.C()){w=5
break}s=p.gR(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bEe(r.c,q),$async$lh)
case 6:j=e
i=J
w=7
return A.b(C.LL(t.a.c,q),$async$lh)
case 7:m.push(new l.afW(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.dgQ(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lh,v)},
baK(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
QQ(d,e){return this.chW(0,e)},
chW(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$QQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).ce(A.ec(new C.dgP(u,e),!0,null,x.y)),$async$QQ)
case 2:t=g
w=3
return A.b(u.lh(),$async$QQ)
case 3:if(t===!0&&u.c!=null)u.c.L(x.q).f.T(D.aUb)
return A.h(null,v)}})
return A.i($async$QQ,v)},
FV(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$FV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.L(x.q).f.T(D.aU7)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.aht(s.c,s.d),$async$FV)
case 5:q=e
w=6
return A.b(t.lh(),$async$FV)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.QQ(0,B.d.fg(t.d,new C.dgU(q))),$async$FV)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.S5(p,s.f,r,n,o),$async$FV)
case 10:m=e
w=11
return A.b(t.lh(),$async$FV)
case 11:if(m&&t.c!=null)t.c.L(x.q).f.T(D.aUb)
case 1:return A.h(u,v)}})
return A.i($async$FV,v)},
Qh(d,e){return this.ctx(0,e)},
ctx(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qh=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dgT(t,e),s,null,!0,!0,x.y),$async$Qh)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a3W(s.c,s.d,e.a),$async$Qh)
case 4:w=5
return A.b(t.lh(),$async$Qh)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qh,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)k.push(o.bGK(w[u]))
if(m){t=6-o.d.length
w=A.l(18)
v=B.c.j(0.05)
s=A.L(E.kq.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.az(n,new A.fH(0.7142857142857143,A.r(n,A.x(A.a([D.dHv,B.af,D.erS,B.aw,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.n(n,n,D.kM.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.bb,B.j,0,B.p),B.f,n,n,new A.p(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcK8(),n,n,n,n,n,n,!1,B.a4))}w=A.l(22)
v=A.L(E.kq.j(0.85),B.r,1.6)
s=A.az(n,A.r(n,D.c1A,B.f,n,n,new A.p(B.w.j(0.3),n,A.L(E.kq.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dgV(d),n,n,n,n,n,n,!1,B.a4)
r=A.l(14)
q=B.w.j(0.3)
p=A.L(E.kq.j(0.5),B.r,1)
w=A.r(n,A.B(A.a([s,B.bd,D.bK1,A.r(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.fpn,n,n,n),B.f,n,n,new A.p(q,n,p,r,n,n,B.n),n,n,n,n,B.he,n,n,n)],l),B.l,n,B.e,B.j,0,n,n),B.f,n,n,new A.p(n,n,v,w,n,D.c7w,B.n),n,n,n,Av.O2,D.bBT,n,n,n)
if(o.e)k=D.afe
else k=k.length===0?D.bcG:A.cq(new C.dgW(k))
return A.c4(n,D.Z9,new A.an(B.a0,n,B.b4,B.t,A.a([D.aQi,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bGK(d){var w,v,u=this,t=null,s=u.baK(d),r=d.c,q=x.p,p=A.a([A.bS(0,A.ev(B.A,new A.a5(300,420,new C.ZW(d.b,s,r,t),t),B.f,B.dC),0,0,0)],q)
if(u.a.e)p.push(A.ap(t,A.az(t,A.r(t,D.c0T,B.f,t,t,new A.p(B.w.j(0.55),t,A.L(B.aU,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dgN(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.foY,t,t,t)
v=r===1?"page":"pages"
return A.az(t,A.x(A.a([new A.fH(0.7142857142857143,new A.an(B.a0,t,B.ab,B.t,p,t),t),B.T,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.n(t,t,D.kM.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dgO(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.KT.prototype={}
C.ZW.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dP(D.zQ,new C.cP9(m),new C.cPa()),j=m.c,i=D.DN.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mr:B.bb
v=new C.cPb(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.eoy,28)],x.V)
u=x.p
t=A.a([A.bS(0,A.b4(l,l,l,new C.bea(j.x,h,l),B.az),0,0,0),A.ap(0,A.r(l,l,B.f,l,l,new A.p(l,l,l,l,l,new A.a8(B.a7,B.aa,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aN(3,3)
t.push(new A.cK(8,40+s*46,l,l,l,l,A.r(l,l,B.f,l,l,new A.p(h.j(0.7),l,l,new A.be(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.amV,8,0.85,2.2),v.$4(D.bGP,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.amV,8,0.85,2.4))
else if(r==="corners")t.push(A.bS(0,new A.D(D.bGL,A.b4(l,l,l,new C.be1(h,l),B.az),l),0,0,0))
r=A.X(D.aBJ[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.n(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.ayX,l,l),B.K,l,l)
p=A.r(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.af,p,B.af,A.d(o,l,l,l,l,l,l,A.n(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cH,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aQ,A.d(r,l,2,B.a2,l,l,l,A.n(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.I,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bS(0,new A.D(D.bHf,A.x(o,B.l,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ap(l,A.b4(l,l,l,new C.aIB(l),D.fer),l,l,l,46,0,l))
return A.r(l,A.by(D.adQ,new A.an(B.a0,l,B.ab,B.t,t,l),B.aq),B.f,l,l,new A.p(l,l,l,D.adQ,i,new A.a8(B.aA,B.aE,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bea.prototype={
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
l=new A.ao(B.O,B.M,B.R,B.S,B.Q)
l.r=q.j(0.25+g.ai()*0.5).gp(0)
d.N(new A.o(o*v,n*u),0.6+m*1.6,l)}break
case"rays":v=e.a*0.55
u=e.b
q=u*0.1
for(o=this.c,n=x.v,p=0;p<14;++p){k=0.47123889803846897+p*0.1691626813471427
m=$.Q()
l=A.a([],n)
j=new A.aG(m.r,B.ai,null,null,l)
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
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
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
C.be1.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.Q(),j=A.K(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.a9
j.c=2.4
j.d=B.bu
for(w=e.a,v=e.b,v=[D.f43,new A.cu([w,0,-1,1]),new A.cu([0,v,1,-1]),new A.cu([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aG(k,B.ai,null,null,s)
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
s=new A.ao(B.O,B.M,B.R,B.S,B.Q)
s.r=i.j(0.9).gp(0)
d.N(new A.o(r+p*9,q+o*9),3,s)}},
aD(d){return!d.b.A(0,this.b)}}
C.uU.prototype={}
C.a_e.prototype={
S(){return new C.be8()}}
C.be8.prototype={
gor(){var w=this.d
return w===$?this.d=this.a.c:w},
gz5(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.ba(w.b,B.b7,B.aR),$.aw())}return v},
gaD9(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.ba(w.c,B.b7,B.aR),$.aw())}return v},
gasM(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.ba(w.y,B.b7,B.aR),$.aw())}return v},
t(){var w=this,v=w.gz5(0),u=v.U$=$.aw()
v.P$=0
v=w.gaD9()
v.U$=u
v.P$=0
v=w.gasM()
v.U$=u
v.P$=0
w.a3()},
atp(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jx(s,s,s,A.d(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.d7N(this,f,u),e===u,s,s,s,s))}return A.bW(B.bH,r,B.bs,s,6,8)},
az9(d){var w=null,v=B.c.j(0.07)
return A.bt(w,new A.b6(4,A.l(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lV,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gor(),a0=f.gz5(0),a1=a0.a.a,a2=f.gaD9(),a3=a2.a.a,a4=f.gasM(),a5=d.bfr(a4.a.a,a3,a1)
a1=x.w
a3=A.aF(a6,e,a1).w
a1=A.aF(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.as(new A.a5(190,260,A.ev(B.A,new A.a5(270,370,new C.ZW(a5,d,f.a.e,e),e),B.f,B.dC),e),e,e,e)
a0=A.aM(e,B.a_,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.az9("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d8b(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a5,e,B.ao,e,e,e,e)
a2=A.aM(e,B.a_,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.az9("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d8c(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a5,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.zQ[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aU
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.r(e,e,B.f,e,e,new A.p(e,e,new A.bH(o,o,o,o),e,e,new A.a8(B.aA,B.aE,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aD
v.push(A.az(e,A.x(A.a([p,B.cR,A.d(t.b,e,e,e,e,e,e,new A.F(!0,q,e,e,e,e,10.5,B.V,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8d(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bW(B.bH,v,B.bs,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b8.j(0.35):B.c.j(0.07)
m=new A.aN(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eL:B.L,2,B.r,-1)
q.push(A.az(e,A.r(e,A.X(D.aBJ[n],B.c,e,e,e,24),B.f,e,e,new A.p(p,e,new A.bH(o,o,o,o),new A.be(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8e(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bW(B.bH,q,B.bs,e,8,8)
a4=A.aM(e,B.a_,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.az9("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d8f(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a5,e,B.ao,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,M.vF,e,e,e)
m=A.a([],w)
for(l=D.DN.gdO(D.DN),l=l.gae(l);l.C();){k=l.gR(l)
j=A.b1(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eL:B.aU
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.r(e,e,B.f,e,e,new A.p(j,e,new A.bH(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aD
m.push(A.az(e,A.x(A.a([j,B.bG,A.d(i,e,e,e,e,e,e,new A.F(!0,h,e,e,e,e,10,B.V,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8g(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bW(B.bH,m,B.bs,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,M.vF,e,e,e)
k=f.gor()
return new A.D(new A.R(0,0,0,a3.f.d),A.bm(!0,new A.cP(new A.aY(0,1/0,0,a1.a.b*0.92),A.cl(A.a([D.fUK,B.af,d,B.aQ,a0,B.X,a2,B.aB,D.h_Z,B.T,v,B.aB,D.fUT,B.T,q,B.aB,a4,B.aB,p,B.T,m,B.aB,l,A.kX(e,9,""+B.i.V(f.gor().f),36,18,new C.d8h(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,M.vF,e,e,e),B.am,f.atp(D.a6t,f.gor().r,new C.d8i(f),D.dCZ),B.af,A.d("BORDER",e,e,e,e,e,e,M.vF,e,e,e),B.am,f.atp(D.a5O,f.gor().w,new C.d8j(f),D.dD4),B.af,A.d("COVER MATERIAL",e,e,e,e,e,e,M.vF,e,e,e),B.am,f.atp(D.a5K,f.gor().x,new C.d8l(f),D.dEA),B.am,A.iQ(e,B.b8,e,B.ag,e,new C.d8m(f),e,e,e,D.fOR,f.gor().z),B.bz,A.bJ(D.fTo,e,new C.d8n(f,a6),A.bp(B.b8,e,e,e,e,B.oW,e,e,new A.b9(A.l(16),B.a1),e,e,e))],w),e,e,Z.amq,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aIB.prototype={
a5(d,e){var w,v,u,t=new A.aG($.Q().r,B.ai,null,null,A.a([],x.v))
t.E(new A.aZ(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.bv())
u=A.K()
u.sav(D.c8b.aK(0,new A.a1(0,0,0+w,0+v)))
d.af(t,u)},
aD(d){return!1}}
C.bjv.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.Q()
w=A.K()
w.sav(D.c7c.aK(0,new A.a1(0,0,a2,a3)))
a4.ar(new A.a1(0,0,a2,a3),w)
v=B.i.cD(a1/112)
u=new A.e5()
u.d_(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.d8s[u.az(9)]
j=u.az(14)
J.bo(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a1(n,j,n+m,j+l)
h=A.bn(i,B.hA)
g=new A.ao(B.O,B.M,B.R,B.S,B.Q)
f=A.ar(k,B.c,0.12)
f.toString
e=A.ar(k,B.w,0.45)
e.toString
g.sav(new A.a8(B.a7,B.aa,B.x,A.a([f,k,e],w),d,d).aK(0,i))
a4.am(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ao(B.O,B.M,B.R,B.S,B.Q)
e.r=E.kq.j(0.55).gp(0)
a4.ar(new A.a1(g,j,h,j+2),e)
e=new A.ao(B.O,B.M,B.R,B.S,B.Q)
e.r=E.kq.j(0.4).gp(0)
a4.ar(new A.a1(g,q,h,p),e)
t.restore()
j=u.az(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.sav(D.c6A.aK(0,new A.a1(0,r,a2,q)))
a4.ar(new A.a1(0,r,a2,q),p)
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=B.w.j(0.5).gp(0)
p.y=B.kT
a4.ar(new A.a1(0,q,a2,q+14),p)}t=A.K()
t.r=D.bgt.j(0.72).gp(0)
a4.ar(new A.a1(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.K()
a3.sav(new A.bZ(B.A,0.5,B.x,d,0,A.a([D.boK.j(0.22),B.L],w),d,d).aK(0,A.bY(new A.o(t,a1),a0)))
a4.N(new A.o(t,a1),a0,a3)},
aD(d){return!1}}
C.bcj.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cK(14,w*2,v*2.2,v*2,o,o,new A.bN(new A.p(A.ar(D.kM,D.btQ,w/4),o,new A.bH(B.a1,new A.ay(B.w.j(0.12),1,B.r,-1),B.a1,B.a1),B.LQ,o,o,B.n),B.bh,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aLT,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aN(2,2)
t.push(A.r(o,o,B.f,o,o,new A.p(E.kq.j(0.6),o,o,new A.be(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.r(o,A.x(t,B.l,o,B.qV,B.j,0,B.p),B.f,o,o,new A.p(o,o,o,D.b4M,u,D.c89,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dt,18)],v)
t=A.ap(o,A.b4(o,o,o,new C.aIB(o),D.fem),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aWu(p.y,r,L.j_,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aM(o,B.a_,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bt(o,B.eK,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.n(o,o,L.j_.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,D.fDP,!0,B.a5,o,B.ao,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.n(o,o,L.j_.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.X,A.E(A.aM(o,B.a_,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bt(o,B.eK,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.n(o,o,L.j_.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,D.fum,!0,B.a5,B.AI,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fDH,o,o,o),B.aw,A.d(q.$1(r),o,o,o,o,o,o,A.n(o,o,L.j_.j(0.5),o,o,o,o,o,o,o,o,11,B.cH,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.T,A.B(A.a([A.E(A.r(o,o,B.f,D.G7.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fI,A.d("\u2766",o,o,o,o,o,o,A.n(o,o,D.G7.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.r(o,o,B.f,D.G7.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.j,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.n(o,o,L.j_.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Za(A.cQ(A.a([A.cQ(o,o,o,o,o,o,o,o,o,D.fxz,B.a.aB(k,0,1)),A.cQ(o,o,o,o,o,o,o,o,o,o,B.a.b2(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.n(o,o,L.j_.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.ce(A.x(n,B.E,o,B.e,B.j,0,B.p),B.t,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.hW,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.n(o,o,L.j_.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.B(A.a([u,A.E(A.r(o,A.by(B.LQ,new A.an(B.a0,o,B.ab,B.t,A.a([t,new A.D(D.bGh,A.x(s,B.al,o,B.e,B.j,0,B.p),o),A.ap(0,new A.bN(new A.p(o,o,o,o,o,new A.a8(B.a7,B.aa,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bh,o,o),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.p(o,o,o,B.LQ,v,D.c8G,B.n),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.j,0,o,o))
return new A.an(B.a0,o,B.ab,B.t,l,o)}}
C.am_.prototype={
S(){return new C.am0(new A.eB(0,$.aw()),new C.bTa(),new C.ami(),D.hCy,null,null)},
gd1(){return this.d}}
C.a1U.prototype={
a7(){return"_Step."+this.b}}
C.am0.prototype={
gCx(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEa(w.c,6,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.N6(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gTV(){var w=this.ghb(0)
return w.gzq()==null?"Babu":B.a.i(w.gzq().b)},
Y(){var w,v=this
v.a4()
w=v.ghb(0).gzq()
w=w==null?null:w.c
v.r.b=w===D.ou
w=v.q0(new C.bRw(v))
w.fX(0)
v.x!==$&&A.aQ()
v.x=w
v.a2z("Come closer, my children. I am "+v.gTV()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
t(){var w=this,v=w.x
v===$&&A.c()
v.t()
v=w.y
if(v!=null)v.a1(0)
v=w.z
if(v!=null)v.a1(0)
w.w.t()
v=w.f
v.U$=$.aw()
v.P$=0
w.bw6()},
a2z(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.df(D.al0,new C.bRq(w))},
bst(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.m(new C.bRz(v))},
adU(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bsl(){return this.bah()},
bah(){var w=this,v=w.gCx()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bRr(w))
w.a2z(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cy(B.m9,new C.bRs(w))},
cLi(){var w=this
w.m(new C.bRv(w))
w.a2z(w.gCx()[w.as].a)},
L5(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.ad0)return
w=p.gCx()
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
p.m(new C.bRu(p,d,u,q))
p.a2z(u?D.doi[q.az(4)]+" "+w[p.as].d:D.dkR[q.az(3)]+" "+w[p.as].d)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCx()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bGq(t.at,t.ay,p)
t.m(new C.bRx(t,s))
t.a2z(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.BU(t.a.d,s),$async$kN)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.BV(r.d,r.c.a,"fire",t.at*10),$async$kN)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bRy())
w=1
break
case 4:++t.as
t.bah()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c4(v,D.Yf,new A.an(B.a0,v,B.ab,B.t,A.a([A.bS(0,new A.en(A.b4(v,v,v,new C.aWz(u,w.r,w.w,u),B.az),v),0,0,0),A.bm(!0,A.x(A.a([w.cbZ(0),B.b3,w.bRB()],t),B.l,v,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
cbZ(d){var w,v,u,t=this,s=null,r=A.aH(s,s,s,s,B.PY,s,s,s,new C.bRt(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCx().length;++w){v=t.as
if(w<v||t.Q===D.b16)v=B.cO
else v=w===v?B.c:B.aU
u=new A.aN(4,4)
p.push(A.r(s,s,B.f,s,s,new A.p(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,D.bBC,s,s,s,22))}p=A.E(A.x(A.a([D.fLA,A.B(p,B.l,s,B.e,B.j,0,s,s)],q),B.E,s,B.e,B.j,0,B.p),1)
v=A.l(14)
u=A.L(B.fp,B.r,1)
return new A.D(D.bHs,A.B(A.a([r,p,A.r(s,A.d("\ud83d\udd25 "+B.i.V(t.cy*100)+"%",s,s,s,s,s,s,B.iC,s,s,s),B.f,s,s,new A.p(B.aV,s,u,v,s,s,B.n),s,s,s,s,B.he,s,s,s)],q),B.l,s,B.e,B.j,0,s,s),s)},
bRB(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghb(0).gzq()
if(h==null)w=1
else w=h.c===D.ou?0:1
v=j.dx
u=j.db
t=D.qk.j(0.96)
s=A.l(22)
r=A.L(B.cO,B.r,3)
q=A.b4(i,i,i,new C.bp5(w,i),B.az)
p=A.d(j.Q===D.ad0?j.gTV()+" asks":"Elder "+j.gTV(),i,i,i,i,i,i,D.aVp,i,i,i)
o=j.db
o=B.a.aB(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.az(B.c3,A.B(A.a([new A.a5(62,62,q,i),B.au,A.E(A.x(A.a([p,B.bG,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aVD,i,i,i)],n),B.E,i,B.e,B.j,0,B.p),1)],n),B.E,i,B.e,B.j,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbss(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.as(j.aa0("Sit down by the fire",j.gbsk()),i,i,i)
break
case 1:v=A.as(j.aa0("Ask me, Elder",j.gcLh()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCx()[j.as].b,m<u.length;++m){q=new A.aN(14,14)
l=new A.ay(D.lB,2.5,B.r,-1)
v.push(A.az(i,A.r(i,A.d(u[m],i,i,i,i,i,i,D.aVz,B.K,i,i),B.f,i,D.aer,new A.p(D.ak_,i,new A.bH(l,l,l,l),new A.be(q,q,q,q),i,i,B.n),i,i,i,i,U.wn,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bRn(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bW(B.bH,v,B.bs,i,8,8)
break
case 3:v=j.fr
u=v?B.k7:Aj.apX
u=A.X(u,v?B.eq:D.lB,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.n(i,i,v?B.eq:D.lB,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCx().length?"Finish":"Next story"
v=A.B(A.a([u,B.ae,q,j.aa0(v,j.gqn(j))],n),B.l,i,B.e,B.j,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gCx().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aVS,i,i,i)],n)
u=j.cx
if(u>0){u=C.aQR(u)
q=C.aQR(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.abq,i,i,i))}v.push(B.T)
v.push(j.aa0("Back to the games",new C.bRo(j)))
v=A.x(v,B.l,i,B.e,B.j,0,B.p)
break
default:v=i}return A.r(i,A.x(A.a([o,B.X,v],n),B.E,i,B.e,B.P,0,B.p),B.f,i,i,new A.p(t,i,r,s,D.aDi,i,B.n),i,i,i,B.yF,B.bi,i,i,i)},
aa0(d,e){var w=null,v=A.l(16),u=A.L(B.cO,B.r,2)
return A.az(w,A.r(w,A.d(d,w,w,w,w,w,w,A1.KH,w,w,w),B.f,w,w,new A.p(D.lB,w,u,v,w,w,B.n),w,w,w,w,D.bF9,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bp5.prototype={
a5(d,e){X.fWl(d,e.ei(B.H),e.gdA()*0.45,this.b,0,0.4)},
aD(d){return d.b!==this.b}}
C.aBB.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bTa.prototype={}
C.tf.prototype={}
C.bp6.prototype={}
C.ami.prototype={
Mx(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.id6(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aWz.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.zp(l.d.Mx(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.bo(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bU(0,u)
l.cAM(d,j)
l.bQ9(d,j)
l.cJ3(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.bo(t.save())
t.translate(225,580)
d.pk(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.Q()
q=A.K()
p=x.O
o=x.n
q.sav(A.wf(B.H,r,A.a([D.bsE.j(0.55*s),F.Nj.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.N(B.H,r,q)
t.restore()
n=A.a([new A.y(528,new C.bT2(l,d,j,i)),new A.y(540,new C.bT3(l,d,j,i)),new A.y(546,new C.bT4(l,d,j,i)),new A.y(574,new C.bT5(l,d,j,i)),new A.y(612,new C.bT6(l,d,j,i)),new A.y(650,new C.bT7(l,d,j,i)),new A.y(656,new C.bT8(l,d,j,i))],x.E)
B.d.aZ(n,new C.bT9())
for(m=0;m<7;++m)n[m].b.$0()
l.bH2(d,j,i)
l.bTO(d,j)
t.restore()
$.Q()
t=A.K()
t.sav(A.wf(new A.o(w/2,v*0.6),e.gaoa()*0.75,A.a([B.L,D.bgn],p),A.a([0.55,1],o),B.x,k,k,0))
d.ar(new A.a1(0,0,0+w,0+v),t)},
aD(d){return d.c!==this.c||d.d!==this.d},
cAM(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e5()
h.d_(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.Q()
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.r=t.gp(0)
d.N(new A.o(v*450,20+u*300),0.8+s*1.1,r)}q=B.i.F(e,17)/1.2
if(q<1){p=new A.o(60+q*220,70+q*90)
d.ah(p,p.aJ(0,D.eo6),C.iw(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.i.F(v+o*0.05,1)
s=-20+n*500
r=120+Math.sin(n*9+o)*14+o*12
m=Math.sin(u+o*2)
l=$.Q()
k=A.a([],t)
l=new A.aG(l.r,B.ai,null,null,k)
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
s=new A.ao(B.O,B.M,B.R,B.S,B.Q)
s.b=B.a9
s.c=1.6
s.r=D.bj6.gp(0)
s.d=B.bu
s.e=B.dR
d.af(l,s)}},
bQ9(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aAf[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bs(new A.o(p,m),n*0.74,q*0.5)
k=A9.yq.j(v)
$.Q()
j=new A.ao(B.O,B.M,B.R,B.S,B.Q)
j.r=k.gp(0)
d.bZ(l,j)
q=A.bs(new A.o(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=Q.y3.j(u).gp(0)
d.bZ(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.i.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ao(B.O,B.M,B.R,B.S,B.Q)
o.r=D.ahh.j(0.16*(1-h)).gp(0)
d.N(new A.o(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cJ3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bDz(d,D.eo2,0.9,e,D.hxS,!1,!1,D.b13,1,!1)
w=$.Q().r
v=x.v
u=new A.aG(w,B.ai,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bv())
t=A.K()
t.r=D.ajg.gp(0)
d.af(u,t)
C.bDz(d,D.eo4,0.95,e,D.hxN,!1,!1,D.b14,1,!0)
t=new A.aG(w,B.ai,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.c6(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.c6(431,553,421,548))
t.E(new A.bv())
u=A.K()
u.r=F.FQ.gp(0)
d.af(t,u)
u=A.bs(D.eo3,8,28)
t=A.K()
t.r=D.buV.gp(0)
d.bZ(u,t)
C.bDz(d,new A.o(-30+B.i.F(e/26,1)*510,492),0.82,e,D.hxT,!0,!1,D.X7,1,!1)
t=B.i.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.bZ(A.bs(new A.o(s+q*16,r-6),16,11),C.iw(D.aj7,1.8))
u=q<0
C.bDz(d,new A.o(s-q*6,r),0.62,e,D.hxV,!1,u,D.X7,2.2,!1)
C.bDz(d,new A.o(s-q*32,r+4),0.58,e+1,D.hxR,!1,u,D.X7,2.2,!1)
this.bWx(d,D.enI,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bs(new A.o(o,n),8,11)
k=p===1
j=k?D.aj3:D.ajI
i=new A.ao(B.O,B.M,B.R,B.S,B.Q)
i.r=j.gp(0)
d.bZ(l,i)
l=k?D.aj3:D.ajI
k=new A.ao(B.O,B.M,B.R,B.S,B.Q)
k.r=l.gp(0)
d.N(new A.o(o+5,n+(-3+m)),2.6,k)
k=new A.ao(B.O,B.M,B.R,B.S,B.Q)
k.b=B.a9
k.c=1
k.r=B.av.gp(0)
k.d=B.bu
k.e=B.dR
d.ah(new A.o(o+7.5,n+(-2+m)),new A.o(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ao(B.O,B.M,B.R,B.S,B.Q)
k.b=B.a9
k.c=1
k.r=B.av.gp(0)
k.d=B.bu
k.e=B.dR
d.ah(new A.o(o,n+4),new A.o(o,n+8),k)}h=e<f.f
u=A.bs(D.a8s,15+Math.sin(e*2)*0.8,40)
t=A.K()
t.r=D.ahG.gp(0)
d.bZ(u,t)
u=A.bs(D.a8s.a2(0,new A.o(-14,h?-9:-2)),12,15)
t=A.K()
t.r=D.blb.gp(0)
d.bZ(u,t)
t=new A.aG(w,B.ai,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bv())
u=A.K()
u.r=D.bll.gp(0)
d.af(t,u)
u=D.a8s.a2(0,new A.o(-17,h?-9:-2))
t=A.K()
t.r=B.ic.gp(0)
d.N(u,1.1,t)
v=new A.aG(w,B.ai,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.c6(180,588+w*(h?6:0),178,595))
d.af(v,C.iw(D.ahG,3.5))},
bWx(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a2(0,new A.o(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.b=B.a9
m.c=2
m.r=D.Yr.gp(0)
m.d=B.bu
m.e=B.dR
d.ah(new A.o(u+o,s),new A.o(u+(o+n*1.5),q),m)}w=A.bs(k,17,32)
v=$.Q()
r=A.K()
r.r=D.FO.gp(0)
d.bZ(w,r)
r=A.bs(k.a2(0,D.en9),7,26)
w=A.ar(D.FO,B.w,0.12)
w.toString
q=A.K()
q.r=w.gp(0)
d.bZ(r,q)
v=new A.aG(v.r,B.ai,null,null,A.a([],x.v))
v.E(new A.aZ(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.bv())
s=A.K()
s.r=D.FO.gp(0)
d.af(v,s)
s=A.bs(k.a2(0,new A.o(24,-7+l)),9,12)
v=A.K()
v.r=D.FO.gp(0)
d.bZ(s,v)
v=-11+l
d.ah(k.a2(0,new A.o(22,v)),k.a2(0,new A.o(21,-17+l)),C.iw(D.Yr,1.6))
d.ah(k.a2(0,new A.o(26,v)),k.a2(0,new A.o(28,-16+l)),C.iw(D.Yr,1.6))
v=k.a2(0,new A.o(26,-8+l))
s=A.K()
s.r=B.w.gp(0)
d.N(v,0.9,s)
d.ah(k.a2(0,new A.o(26,-3+l)),k.a2(0,new A.o(26,1+l)),C.iw(D.bo2,1.4))
d.ah(k.a2(0,D.eq5),k.a2(0,new A.o(-19,-7+Math.sin(f*7)*2)),C.iw(D.FO,2.4))},
bTM(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bs(new A.o(225+u*36,574+(t*13+6)),8,11)
$.Q()
t=new A.ao(B.O,B.M,B.R,B.S,B.Q)
t.r=D.btC.gp(0)
a6.bZ(u,t)}}u=A.bs(D.a8v.a2(0,B.cB),17,52)
$.Q()
t=A.K()
t.r=D.bfV.gp(0)
a6.bZ(u,t)
t=A.bs(D.a8v.a2(0,B.cB),12,44)
u=D.bjv.j(0.6+0.3*Math.sin(a7*6))
s=A.K()
s.r=u.gp(0)
a6.bZ(t,s)
for(r=0;r<3;++r){v=D.dkj[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ao(B.O,B.M,B.R,B.S,B.Q)
o.b=B.a9
o.c=7
o.r=D.G0.gp(0)
o.d=B.bu
o.e=B.dR
a6.ah(new A.o(u+t*24,579+s*4),new A.o(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.BB.j(0.6)
n=new A.ao(B.O,B.M,B.R,B.S,B.Q)
n.b=B.a9
n.c=2
n.r=t.gp(0)
n.d=B.bu
n.e=B.dR
a6.ah(new A.o(u+o*24,579+(p*4-2)),new A.o(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.f0e,D.f0O,D.f1T,D.f2c,D.f1R]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.br1,D.bno,D.bt2][k]
for(p=l.length,o=k===0,n=1-k*0.15,r=0;r<p;++r){h=l[r]
g=h.b
f=h.c
e=m*g*j*(0.9+0.12*Math.sin(u+f)+0.06*Math.sin(t+f*2))
d=Math.sin(s+f)*5*(e/m)
a0=225+h.a*n
a1=(12+8*a8.w)*g*j
g=$.Q()
f=A.a([],q)
a2=new A.aG(g.r,B.ai,null,null,f)
f.push(new A.aZ(a0-a1,578))
a2.ab()
g=a0+d*0.6
a3=new A.kT(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.ak(a4)
a2.ab()
g=new A.kT(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
f.push(g)
a3=a2.f
if(a3!=null)g.ak(a3)
a2.ab()
g=new A.bv()
f.push(g)
f=a2.f
if(f!=null)g.ak(f)
a2.ab()
g=new A.ao(B.O,B.M,B.R,B.S,B.Q)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.i.F(a7*(0.35+B.o.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.F(w,3)
p=G.ajG.j((1-a5)*0.9)
$.Q()
o=new A.ao(B.O,B.M,B.R,B.S,B.Q)
o.r=p.gp(0)
a6.N(new A.o(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.i.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.ahh.j(0.1*(1-a5))
$.Q()
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=q.gp(0)
a6.N(new A.o(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bTO(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.i.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.bv4.j(0.18*p)
$.Q()
n=new A.ao(B.O,B.M,B.R,B.S,B.Q)
n.r=o.gp(0)
d.N(new A.o(r,q),5,n)
n=new A.ao(B.O,B.M,B.R,B.S,B.Q)
n.r=D.boP.j(0.9*p).gp(0)
d.N(new A.o(r,q),1.4,n)}},
c5v(d,e){switch(d){case 0:return e.b?D.hxO:D.b0C
case 1:return e.b?D.hxU:D.b0A
case 2:return D.b0z
case 3:return D.b0y
case 4:return D.b0B
default:return D.b0D}},
aDn(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
R9(d,e,f,g){var w,v=this,u=D.a5W[e],t=v.c5v(e,g),s=new C.bp6(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a5W[e],l=e===0
m=B.i.D(((l?D.aLM:D.aLR).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a8z
s.as=D.Ed
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
s.Q=new A.o(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.Ed
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.enh
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.eoC
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
s.Q=D.er1
s.as=D.aM3}if(e===2&&g.x!=null&&f<g.y){s.a=v.aDn(f,5)
s.b=0.4
s.as=new A.o(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aDn(f,e*3)
s.b=0.5
s.c=0.4}}C.hzY(d,u.a,u.b*1.2,t,s,f,e,null)},
bH2(d,e,f){var w=new C.bT1(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd6(d){return this.c}}
C.ag4.prototype={
a7(){return"_Stand."+this.b}}
C.ae2.prototype={}
C.lr.prototype={}
C.bRM.prototype={
bBE(d){var w,v,u,t,s=A.T(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
Ga(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.aZ(r,new C.bRN())
return r},
arq(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aN4(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.J)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
amz(d){var w,v,u=A.aR(x.N),t=d,s=0
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
gzq(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.aZ(w,new C.bRO(this))
return B.d.gH(w)}}
C.aug.prototype={}
C.zG.prototype={}
C.akU.prototype={
gC3(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Y(w,new C.bMA(),A.U(w).k("Y<1>")).gI(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
aj(){var w=this
return A.I(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.MQ.prototype={
gaps(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
if(t.gC3(0))s.push(t)}return s},
aj(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.J)(w),++s){r=w[s]
p.push(A.I(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.I(["id",this.a,"title",q,"qs",p],u,t)},
d1x(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gaps(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.J)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lr(B.a.i(s.a),p,B.d.co(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bay.prototype={}
C.aa7.prototype={}
C.bhO.prototype={}
C.ag2.prototype={}
C.akc.prototype={
S(){return new C.akd(B.bE,A.a([],x.cC),A.a([],x.e4),null,null)},
gd1(){return this.d}}
C.akd.prototype={
gMO(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEa(w.c,8,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gbaD(){var w,v=this,u=v.e
if(u===$){w=v.q0(v.gcc0())
v.e!==$&&A.bE()
v.e=w
u=w}return u},
Y(){this.a4()
this.gbaD().fX(0)},
t(){this.gbaD().t()
this.bw1()},
fX(d){this.m(new C.bKK(this))},
cc1(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fH(0,v)
if(w.c!=null)w.m(new C.bKF())},
b8Z(){var w,v,u,t=this,s=t.r
B.d.a8(s)
w=t.gMO()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bhO(u,(u+0.5)/v,w[t.x].b[u]))},
fH(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.br(w,new C.bKL())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c8l()
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
o=100+B.i.V((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.asY(v,0.8,B.cO)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.asY(m.cy,0.8,G.np)
m.aZB("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.asY(q,0.88,D.lB)
p=m.gMO()[m.x]
n=p.c
if(u===n){m.aZB("The right gourd fell! It was "+p.b[n]+".")
return}}}},
asY(d,e,f){var w,v,u,t=new A.e5()
t.d_(B.i.V(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.ag2(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
aZB(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.Qi()}},
c8l(){var w=this
if(w.x+1>=w.gMO().length){w.Qi()
return}++w.x
w.b8Z()},
Qi(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Qi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gMO().length
r=C.bGq(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bKD())
w=2
return A.b(C.BU(u.a.d,r),$async$Qi)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.BV(t.d,t.c.a,"catch",u.z),$async$Qi)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bKE())
return A.h(null,v)}})
return A.i($async$Qi,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.cc_()
else w=v.ch?v.cc2():A.as(new A.D(B.ex,A.x(A.a([D.aWP,B.T,D.fNg,B.X,D.fTt,B.e0,C.ux("Play",v.geY(v),B.cO,B.hx,D.fz)],x.p),B.l,u,B.e,B.P,0,B.p),u),u,u,u)
return new C.tG("Calabash Catch",w,B.f6,u)},
cc2(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hK:B.Hy
p.push(A.X(u,v?B.ay:B.bW,r,r,r,22))}p.push(B.b3)
v=s.x
u=s.gMO()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aVo,r,r,r))
p.push(B.bd)
v=A.l(14)
p.push(A.r(r,A.d(""+s.z,r,r,r,r,r,r,B.iC,r,r,r),B.f,r,r,new A.p(B.bA,r,r,v,r,r,B.n),r,r,r,r,B.GM,r,r,r))
p=A.B(p,B.l,r,B.e,B.j,0,r,r)
v=A.l(18)
t=A.L(B.cO,B.r,3)
return A.x(A.a([new A.D(D.bCY,p,r),A.r(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fxr,B.K,r,r),B.f,r,r,new A.p(D.qk,r,t,v,r,r,B.n),r,r,r,B.f3,B.bi,r,r,1/0),B.am,A.E(A.cq(new C.bKJ(s)),1)],q),B.l,r,B.e,B.j,0,B.p)},
cc_(){var w=this,v=null,u=A.as(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.pY,v,v,v),v,v,v),t=A.as(A.d(""+w.Q+" of "+w.gMO().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.Vt,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cl(A.a([D.bdn,u,t,B.aQ,new C.Iw(s,r,w.cx,v),B.aQ,A.as(C.ux("Back to the games",new C.bKC(w),B.cO,B.k6,D.fz),v,v,v)],x.p),v,v,B.ad,v,v,B.ah,!1)}}
C.bcZ.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.Q(),a3=A.K()
a3.sav(A.jA(B.H,new A.o(0,a0),D.d2m,G.aAx,B.x,e))
a4.ar(new A.a1(0,0,a1,0+a0),a3)
a3=A.K()
a3.r=G.Nn.gp(0)
a4.N(new A.o(d*0.82,a0*0.16),22,a3)
a3=x.v
w=A.a([],a3)
v=new A.aG(a2.r,B.ai,e,e,w)
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
w.r=D.bkq.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aG(a2.r,B.ai,e,e,A.a([],a3))
w=a0*0.86
a2.E(new A.aZ(r-26,w))
t=a0*0.5
s=a0*0.34
a2.E(new A.c6(r-14,t,r-10,s))
a2.E(new A.aq(r+10,s))
a2.E(new A.c6(r+14,t,r+26,w))
a2.E(new A.bv())
w=A.K()
w.r=D.agk.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.co5[q]
s=new A.ao(B.O,B.M,B.R,B.S,B.Q)
s.r=D.agk.gp(0)
s.c=7
s.d=B.bu
a4.ah(new A.o(r,a2),new A.o(r+p*46,w),s)
s=new A.ao(B.O,B.M,B.R,B.S,B.Q)
s.r=D.afG.gp(0)
a4.N(new A.o(r+p*50,t),18,s)}a2=a0*0.88
w=A.K()
w.r=D.blj.gp(0)
a4.ar(new A.a1(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ao(B.O,B.M,B.R,B.S,B.Q)
t.r=D.ai_.gp(0)
t.c=2
a4.ah(new A.o(w,a1),new A.o(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.J)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.bs(new A.o(u,s),12,54)
$.Q()
l=new A.ao(B.O,B.M,B.R,B.S,B.Q)
l.r=D.lB.j(0.6).gp(0)
a4.bZ(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.bo(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=D.ah1.gp(0)
a4.N(D.emw,14,m)
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=D.bq1.gp(0)
m.c=4
m.d=B.bu
a4.ah(D.emx,D.enE,m)
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.sav(new A.alL(D.epN,46,D.daX,B.Dw,B.x,e,e,0))
a4.N(B.H,34,m)
m=A.bs(D.epU,8,12)
l=new A.ao(B.O,B.M,B.R,B.S,B.Q)
l.r=B.c.j(0.35).gp(0)
a4.bZ(m,l)
k=new A.iH(new A.eo(n.c,e,e,B.cK,e,e,e,e,e,e,D.fvh),B.K,B.bX,new A.jh(1),e,e,3,e,B.bY,e,B.cs)
k.o8(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bn(A.bs(B.cI,m.gba(m)+8,l),B.fN)
l=new A.ao(B.O,B.M,B.R,B.S,B.Q)
l.r=D.qk.gp(0)
a4.am(j,l)
l=new A.ao(B.O,B.M,B.R,B.S,B.Q)
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
X.Bn(a4,new A.o(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dL,F.mU,!1,(w+1)/2)
h=A.bs(new A.o(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aG($.Q().r,B.ai,e,e,A.a([],a3))
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
m.r=D.Zg.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=D.BB.gp(0)
m.c=1.4
a4.ah(new A.o(t,a2),new A.o(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.K()
s.r=G.np.gp(0)
a4.ar(new A.a1(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.K()
s.r=D.bkw.gp(0)
a4.bZ(new A.a1(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.J)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=g.e.j(B.i.D(s,0,1)).gp(0)
a4.N(new A.o(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.fq(e,B.cs,e,e,e,A.cQ(e,e,e,e,e,e,e,e,e,A.n(e,e,B.cO.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,I.Dq,e,e),"+"+a2),B.a5,B.bX,e,B.dA,B.bY)
k.e5()
k.a5(a4,new A.o(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aD(d){return!0}}
C.QN.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aBz(w.c,w.f,v),B.az),s=A.l(10),r=A.L(B.bD,B.r,1.4)
return new A.a5(u+22,v,A.x(A.a([new A.a5(u,u,t,v),B.cR,A.r(v,A.d(w.d,v,1,B.a2,v,v,v,D.fnP,v,v,v),B.f,v,v,new A.p(B.c,v,r,s,v,v,B.n),v,v,v,v,B.n0,v,v,v)],x.p),B.l,v,B.e,B.P,0,B.p),v)},
gZ(d){return this.e}}
C.aBz.prototype={
a5(d,e){var w=e.ei(B.H),v=e.gdA(),u=this.c?0.8:0
return X.fWl(d,w,v*0.44,this.b,0,u)},
aD(d){return d.b!==this.b||d.c!==this.c}}
C.aA3.prototype={}
C.auS.prototype={
S(){return new C.auT(A.T(x.S,x.cq),null,null)},
gd1(){return this.d}}
C.auT.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hFf(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gaFp(){var w=this.z
return w===$?this.z=this.Xl(0):w},
gj1(){var w,v=this.Q
if(v===$){w=this.gkS()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c0(w,-1,!1,x.S)}return v},
Xl(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aA3(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aA3(v[t],u[t],-1))
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
u=u.goy()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dV$.a.a8(0)
v.qE()}this.bwu()},
cRo(d,e){var w,v,u,t,s,r=this
if(d>=r.gj1().length||r.gj1()[d]!==-1||B.d.q(r.gj1(),e))return
w=r.gaFp()[e]
v=r.gkS()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.cqc(r,e,w,v))
A.cy(B.lH,new C.cqd(r))
return}++r.r
u=A.bl(null,B.hG,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.m(new C.cqe(r,d,e,w,v))
u.cr(0)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkS()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cG(n,0,new C.cqf())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.cqg(t,r))
w=5
return A.b(C.BU(t.a.d,r),$async$kN)
case 5:t.x=f
o=t.a
w=6
return A.b(C.BV(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.m(new C.cqh())
w=1
break
case 4:for(o=t.as,n=new A.dq(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eO$
p.b=!1
B.d.a8(p.a)
p=p.goy()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dV$.a.a8(0)
q.qE()}o.a8(0)
t.m(new C.cqi(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.as(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.pY,p,p,p),p,p,p)
v=r.f
v=A.as(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.Vt,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tG(q,A.cl(A.a([D.afc,w,v,B.aQ,new C.Iw(u,t,r.ch,p),B.aQ,A.as(C.ux("Back to the games",new C.cq8(d),B.cO,B.k6,D.fz),p,p,p)],x.p),p,p,B.ad,p,p,B.ah,!1),B.f6,p)}w=r.gkS()
v=r.e
s=w[v]
return new C.tG(q,new A.D(B.uw,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aVj,B.K,p,p),A.E(A.cq(new C.cq9(r,s)),1)],x.p),B.l,p,B.e,B.j,0,B.p),p),B.f6,p)}}
C.bcs.prototype={
a5(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.Y(b2,new C.cQd(),A.U(b2).k("Y<1>")).gI(0),b4=a9.b,b5=b4.a2(0,B.Jx)
$.Q()
w=A.K()
w.r=D.lC.j(0.18+0.1*b3).gp(0)
b6.N(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a2(0,D.emj)
u=A.K()
u.r=B.ok.j(0.5).gp(0)
u.c=10
u.d=B.bu
b6.ah(new A.o(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.dI.aA(0,B.i.D(b2[p],0,1))
l=$.Q().r
k=A.a([],s)
j=new A.aG(l,B.ai,b0,b0,k)
k.push(new A.aZ(u,b4))
j.ab()
o=new A.c6((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.ak(n)
j.ab()
if(m<1)for(o=new A.aG(l,j.b,j.c,b0,A.bq(k,!0,r)),n=A.a([],q),i=new A.rx(o,!1,n);i.C();){h=i.c
if(h===0||i.f)A.bj(A.jI(b1));--h
g=new A.BS(i,h)
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
a1=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a1.r=B.aU.gp(0)
a1.b=B.a9
a1.c=3
b6.af(new A.aG(l,d,b0,new A.cu([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aG(l,j.b,j.c,b0,A.bq(k,!0,r)),n=A.a([],q),k=new A.rx(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bj(A.jI(b1));--a0
k.iy()
a1=n[a0].b
a1===$&&A.c()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.Q()
a4=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a4.r=D.Gd.gp(0)
a4.b=B.a9
a4.c=h
a4.d=B.bu
b6.af(new A.aG(l,a2,b0,new A.cu([new A.BS(k,a0),0,a1*m,!0]),a3),a4)
k.iy()
a4=n[a0].b
a4===$&&A.c()
a4=a4.a.length()
k.iy()
a5=n[a0].Di(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bs(new A.o(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a3.r=B.b6.gp(0)
b6.bZ(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.iH(D.fni,B.a5,B.bX,new A.jh(1),b0,b0,b0,b0,B.bY,b0,B.cs)
a8.e5()
a8.a5(b6,new A.o(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aD(d){return!0}}
C.ayP.prototype={
S(){return new C.ayQ(A.aR(x.S))},
gd1(){return this.d}}
C.ayQ.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hG9(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
Y(){this.a4()
this.b97()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a3()},
b97(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.df(B.rS,new C.cFa(this))},
bq3(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkS()[v.e]
if(w.e[d]===w.b)v.m(new C.cFi(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cFj(v,d))
A.cy(B.iM,new C.cFk(v))}},
cWR(){var w=this
if(!w.as&&w.f<w.gkS()[w.e].d.length)w.m(new C.cFl(w))},
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
t.m(new C.cFm(t,s))
w=5
return A.b(C.BU(t.a.d,s),$async$kN)
case 5:t.y=f
q=t.a
w=6
return A.b(C.BV(q.d,q.c.a,"who",t.r),$async$kN)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cFn())
w=1
break
case 4:t.m(new C.cFo(t))
t.b97()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.as(A.d(""+a0.w+" of "+a0.gkS().length+" guessed",a2,a2,a2,a2,a2,a2,B.pY,a2,a2,a2),a2,a2,a2)
v=A.as(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.Vt,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tG(a1,A.cl(A.a([D.bdz,w,v,B.aQ,new C.Iw(u,t,a0.ax,a2),B.aQ,A.as(C.ux("Back to the games",new C.cFc(a3),B.cO,B.k6,D.fz),a2,a2,a2)],x.p),a2,a2,B.ad,a2,a2,B.ah,!1),B.f6,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkS()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.KP,B.K,a2,a2),B.X,A.as(A.lB(new C.cFd(a0,r),a2,B.b1,B.hG,a2,a2,new A.br(a2,s,u),x.i),a2,a2,a2),B.aB],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aN(16,16)
l=new A.ay(B.cO,2,B.r,-1)
k=o+1
w.push(new A.r5(new A.br(0,1,u),new C.cFe(),A.r(a2,new A.c8(B.aL,B.e,B.j,B.l,a2,B.p,a2,0,A.a([new A.qG(A.d(""+k,a2,a2,a2,a2,a2,a2,B.nY,a2,a2,a2),D.lB,a2,12,a2),B.au,new A.bz(1,B.bc,A.d(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fA3,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.p(D.qk,a2,new A.bH(l,l,l,l),new A.be(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.cx,B.bi,a2,a2,a2),B.b1,B.iM,a2,new A.bC("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.as(A.bO(!1,D.h0q,a2,a2,!0,a2,a2,a2,a0.gcWQ(),a2,a2),a2,a2,a2))
w.push(B.T)
if(a0.as){u=D.lC.j(0.2)
q=A.l(16)
p=A.L(D.lC,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fQ,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.r(a2,A.x(A.a([m,B.X,C.ux(v,a0.gqn(a0),B.cO,B.jH,D.fz)],t),B.l,a2,B.e,B.j,0,B.p),B.f,a2,a2,new A.p(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bF,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dl:B.cO.j(0.2)
g=new A.aN(16,16)
l=new A.ay(n.q(0,o)?B.fh:B.cO,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bW:B.c
d=n.q(0,o)?B.xi:a2
t.push(new A.r5(new A.br(0,i,u),new C.cFf(),A.az(a2,A.r(a2,A.d(f,a2,a2,a2,a2,a2,a2,new A.F(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.aek,new A.p(h,a2,new A.bH(l,l,l,l),new A.be(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jo,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cFg(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b1,B.mb,a2,new A.bC("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bW(B.fT,t,B.bs,a2,10,10))}return new C.tG(a1,A.cl(w,a2,a2,B.am_,a2,a2,B.ah,!1),B.f6,a2)}}
C.azP.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aH0.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.afR.prototype={
aqY(d){},
aru(){var w=this,v=w.q0(new C.f71(w))
v.fX(0)
w.LX$!==$&&A.aQ()
w.LX$=v}}
C.aKO.prototype={
gbmv(d){var w=this.c
return B.a.aB(w,0,Math.min(this.d,w.length))},
VV(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.df(D.al0,new C.fha(w))},
bsr(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.am8.prototype={
S(){return new C.am9(new C.ami(),A.a([],x.t),new A.eB(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.am9.prototype={
gMM(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEa(w.c,10,w.e,!0)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.N6(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gqv(){var w=this.r
return w===$?this.r=new C.aKO(new C.bSy(this)):w},
gapO(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gMM()[v].c)u.push(1)
return u.length},
gblP(){var w=this.ghb(0)
return w.gzq()==null?"Elder":B.a.i(w.gzq().b)},
Y(){this.a4()
this.aru()},
t(){var w,v=this
v.gqv().t()
v.f.t()
w=v.LX$
w===$&&A.c()
w.t()
w=v.q9$
w.U$=$.aw()
w.P$=0
v.bw9()},
cLu(){var w=this
w.m(new C.bSv(w))
w.gqv().VV(w.gMM()[w.x].a)},
L5(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqv()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.q9$.a
v.ax=u
v.ay=u+1
v.m(new C.bSt())
A.cy(B.hG,new C.bSu(v))},
bq_(){var w=this.gapO(0)/this.gMM().length*100
if(w>=90)return D.eY4
if(w>=75)return D.eW6
if(w>=60)return D.eMM
if(w>=45)return D.eQc
return D.eHb},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cu0()
w=A.bS(0,new A.en(A.b4(m,m,m,new C.bt8(n,n.q9$),B.az),m),0,0,0)
if(!n.Q){v=D.qk.j(0.96)
u=A.l(20)
t=A.L(B.cO,B.r,3)
u=A.r(m,A.x(A.a([A.d("Elder "+n.gblP()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aWc,B.K,m,m),B.X,C.ux("Start the test",n.gBU(),B.cO,B.j3,D.fz)],x.p),B.l,m,B.e,B.P,0,B.p),B.f,m,m,new A.p(v,m,t,u,m,m,B.n),m,m,m,m,B.bF,m,m,m)
v=u}else{v=n.x
u=n.gMM()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aWe,m,m,m)
if(n.Q){t=n.gqv()
t=t.d<t.c.length}else t=!1
if(t)u=D.ffM
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aN(10,10)
o=new A.ay(D.BB,4,B.r,-1)
s.push(A.az(m,A.r(m,A.d(q[r],m,m,m,m,m,m,D.fr5,B.K,m,m),B.f,m,D.aek,new A.p(D.bgs,m,new A.bH(o,o,o,o),new A.be(p,p,p,p),m,m,B.n),m,m,m,m,B.O9,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bSw(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bW(B.fT,s,B.bs,new A.bC("o"+t,x.W),8,8)}u=A.x(A.a([v,B.am,A.oy(u,B.mV,A.pU(),B.b1,B.b1,A.LI())],x.p),B.l,m,B.e,B.P,0,B.p)
v=u}return new C.tG("Village School",new A.an(B.a0,m,B.ab,B.t,A.a([w,A.ap(10,v,m,m,10,10,m,m)],x.p),m),B.f6,m)},
cu0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bq_(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gMM()[v].c)g.push(v)
u=A.l(22)
t=A.L(B.cO,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.fvA,B.K,i,i)
r=A.d("Signed by Elder "+j.gblP(),i,i,i,i,i,i,D.fue,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fzn,i,i,i),D.ez6],q)
o=A.d(h.b,i,i,i,i,i,i,D.fBk,i,i,i)
n=j.gapO(0)
m=j.gMM()
u=A.r(i,A.x(A.a([D.fMv,B.aw,s,r,B.X,new A.an(B.A,i,B.ab,B.t,p,i),o,B.am,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.abq,i,i,i),B.T,D.asO],q),B.l,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(D.qk,i,t,u,i,i,B.n),i,i,i,i,B.fs,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aB,new C.Iw(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aQ,D.h1v,B.T],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.J)(g),++l){v=g[l]
r=new A.aN(14,14)
k=new A.ay(B.bA,1,B.r,-1)
p=m[v]
u.push(A.r(i,A.x(A.a([A.d(p.a,i,i,i,i,i,i,B.h1,i,i,i),B.aw,A.d("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fwL,i,i,i),A.d(p.d,i,i,i,i,i,i,D.fz_,i,i,i)],q),B.E,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.dl,i,new A.bH(k,k,k,k),new A.be(r,r,r,r),i,i,B.n),i,i,i,B.cx,B.bi,i,i,i))}B.d.v(s,u)}s.push(B.aB)
s.push(A.as(C.ux("Back to the games",new C.bSp(j),B.cO,B.k6,D.fz),i,i,i))
return new C.tG("Village School",A.cl(s,i,i,B.bQ,i,i,B.ah,!1),B.f6,i)}}
C.bt8.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.q9$.a
a0.zp(e.f.Mx(a1))
w=C.hcP(a1)
v=a0.c
J.bo(v.save())
v.translate(w.a,w.b)
a0.bU(0,w.c)
if(e.Q){u=e.gqv()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.cXG[s]-6
$.Q()
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.r=D.G0.gp(0)
a0.ar(new A.a1(u,340,u+12,450),r)}u=A.bn(D.a9t.cn(10),B.i3)
$.Q()
r=A.K()
r.r=D.BB.gp(0)
a0.am(u,r)
r=A.bn(D.a9t,B.hR)
u=A.K()
u.sav(A.jA(new A.o(30,96),new A.o(420,346),D.dgj,f,B.x,f))
a0.am(r,u)
q=new A.e5()
q.d_(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bs(new A.o(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.r=B.c.j(0.025).gp(0)
a0.bZ(o,r)}u=A.K()
u.r=I.aiO.gp(0)
a0.ar(new A.a1(30,354,420,362),u)
u=A.K()
u.r=B.aP.gp(0)
a0.ar(D.f7a,u)
u=A.K()
u.r=B.bM.gp(0)
a0.ar(D.f7e,u)
u=A.bn(D.f74,B.hQ)
r=A.K()
r.r=D.Zg.gp(0)
a0.am(u,r)
n=B.i.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqv().gbmv(0)
m=A.fq(f,B.cs,f,7,f,A.cQ(f,f,f,f,f,f,f,f,f,D.fDA,u+(t?"|":"")),B.a5,B.bX,f,B.dA,B.bY)
m.o8(346)
J.bo(v.save())
u=A.hU(D.a9t)
r=$.mh()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.hU(new A.a1(30+390*n,96,420,346)),r[1],!0)
m.a5(a0,new A.o(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bn(new A.a1(u,r,u+40,r+90),B.fN)
u=A.K()
u.r=D.bvR.gp(0)
a0.am(r,u)}}else{m=A.fq(f,B.cs,f,f,f,D.fny,B.K,B.bX,f,B.dA,B.bY)
m.o8(340)
m.a5(a0,new A.o(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.i.F(u+p/8,1)
o=B.o.F(e.gqv().d*9,310)
k=Math.sin(p+r)
j=new A.ao(B.O,B.M,B.R,B.S,B.Q)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.N(new A.o(70+o+k*6,166+l*70),1.6,j)}u=e.ghb(0).gzq()
i=(u==null?f:u.c)===D.ou?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.f72(d,a0,i,t,h,D.ent)),new A.y(520,new C.f73(a0,d,t)),new A.y(575,new C.f74(a0,d,t)),new A.y(585,new C.f75(this,a0,d,t)),new A.y(615,new C.f76(this,t,a0,d,h))],x.E)
B.d.aZ(g,new C.f77())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
cc3(d,e){var w,v,u,t,s,r,q,p=$.Q(),o=A.a([],x.v),n=new A.aG(p.r,B.ai,null,null,o)
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
C.am6.prototype={
S(){return new C.am7(new C.ami(),A.T(x.S,x.i),new A.eB(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.am7.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hF3(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gj1(){var w=this.z
return w===$?this.z=this.FJ(0):w},
gaLF(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.FJ(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.co(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.FJ(0):r).length);++v}s.Q=w
r=w}return r},
FJ(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e3(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e5()
u.d_(this.a.e+d*7)
B.d.e0(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.f1(u,new C.bSb())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Y(){this.a4()
this.aru()},
t(){var w,v=this
v.e.t()
w=v.LX$
w===$&&A.c()
w.t()
w=v.q9$
w.U$=$.aw()
w.P$=0
v.bw8()},
aqY(d){var w,v,u,t,s,r=this,q=r.gj1().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.co(u===$?r.z=r.FJ(0):u,v)
s=r.gaLF()
s[v]=s[v]+(450*(t+0.5)/q-r.gaLF()[v])*Math.min(1,w)}},
d1c(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj1().length)return
w=v.y
if(w===-1){v.m(new C.bSm(v,d))
return}if(w===d){v.m(new C.bSn(v))
return}v.m(new C.bSo(v,B.d.co(v.gj1(),v.y),d,B.d.co(v.gj1(),d)))},
cMb(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.FJ(0):u).length))break
t=s.gkS()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.FJ(0):u)[v]]===v);++v}s.m(new C.bSh(s,B.d.cE(w,new C.bSi())))},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkS().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bSj(t,s))
w=5
return A.b(C.BU(t.a.d,s),$async$kN)
case 5:t.x=f
q=t.a
w=6
return A.b(C.BV(q.d,q.c.a,"lineup",t.r*10),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bSk())
w=1
break
case 4:t.m(new C.bSl(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.as(A.d(""+l.r+" of "+l.gkS().length+" lines right",k,k,k,k,k,k,B.pY,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tG("Line Up",A.cl(A.a([D.afc,w,B.aQ,new C.Iw(v,u,l.ch,k),B.aQ,A.as(C.ux("Back to the games",new C.bSd(d),B.cO,B.k6,D.fz),k,k,k)],x.p),k,k,B.ad,k,k,B.ah,!1),B.f6,k)}w=A.a([],x.t)
for(t=0;v=l.gkS(),t<v[l.f].d.length;++t)w.push(t)
B.d.aZ(w,new C.bSe(l))
u=A.bS(0,A.cq(new C.bSf(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aWe,k,k,k)
s=v[s]
q=x.p
s=A.ap(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.fw0,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fyc,B.K,k,k)],q),B.l,k,B.e,B.j,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.l(16)
n=l.ax
m=A.L(n?D.lC:G.np,B.r,2)
r.push(A.r(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bSg(l),x.cM).aO(0,", then ")+".",k,k,k,k,k,k,D.fAq,k,k,k),B.f,k,k,new A.p(p,k,m,o,k,k,B.n),k,k,k,B.d5,B.bi,k,k,1/0))}if(!l.at)r.push(C.ux("That is my line!",l.gcMa(l),B.cO,B.hJ,D.fz))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.ux(w,l.gqn(l),B.cO,B.jH,D.fz))}return new C.tG("Line Up",new A.an(B.a0,k,B.ab,B.t,A.a([u,s,A.ap(12,A.x(r,B.l,k,B.e,B.P,0,B.p),k,k,12,12,k,k)],q),k),B.f6,k)}}
C.bjD.prototype={
a5(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.q9$.a
c7.zp(c5.e.Mx(c8))
w=C.hcP(c8)
v=c7.c
J.bo(v.save())
v.translate(w.a,w.b)
c7.bU(0,w.c)
u=c5.gj1().length
t=$.Q().r
s=x.v
r=new A.aG(t,B.ai,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.c6(225,500,440,470))
q=A.K()
q.r=D.Zg.gp(0)
q.b=B.a9
q.c=4
c7.af(r,q)
for(q=c6*3,p=0;p<12;++p){o=30+p*36
n=470+30*Math.sin(3.141592653589793*(o-10)/430)*0.95
m=Math.sin(q+p)
l=A.a([],s)
k=new A.aG(t,B.ai,c4,c4,l)
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
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=[B.cO,G.np,D.lC,B.aH][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b1d(c7,"OLDEST",D.eor,B.cO)
this.b1d(c7,"YOUNGEST",D.enU,B.b6)
t=A.bn(D.f6Z,B.fN)
s=A.K()
s.r=D.G0.gp(0)
c7.am(t,s)
s=A.bn(D.f6Y,B.hR)
t=A.K()
t.r=D.BB.gp(0)
c7.am(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.aZ(t,new C.dry())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.J)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.co(a1===$?c5.z=c5.FJ(0):a1,f)
o=c5.gaLF()[f]
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
a9=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a9.r=B.cO.j(0.22+0.1*Math.sin(e)).gp(0)
c7.N(new A.o(o,520),54,a9)}a9=D.dk7[B.o.F(b0,6)]
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
else b9=a3?D.eqy:c4
if(b1)c0=new A.o(3+b2*8,-56)
else if(h&&a7)c0=D.aM3
else c0=a3?new A.o(30,-104+Math.sin(e)*5):c4
C.SG(c7,new A.o(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.Jz,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.iH(new A.eo(a8,c4,c4,B.cK,c4,c4,c4,c4,c4,c4,D.ftK),B.a5,B.bX,new A.jh(1),"\u2026",c4,1,c4,B.bY,c4,B.cs)
c1.o8(q)
c2=A.bn(A.bs(new A.o(o,650),24,c1.b.c+16),B.fN)
$.Q()
a8=new A.ao(B.O,B.M,B.R,B.S,B.Q)
if(a6)a9=B.ia
else a9=a7?B.rM:D.qk
a8.r=a9.gp(0)
c7.am(c2,a8)
a8=new A.ao(B.O,B.M,B.R,B.S,B.Q)
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
c3=new A.iH(new A.eo(""+(a2+1),c4,c4,B.cK,c4,c4,c4,c4,c4,c4,D.fu3),B.a5,B.bX,new A.jh(1),c4,c4,c4,c4,B.bY,c4,B.cs)
c3.e5()
c3.a5(c7,new A.o(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.i.F(p*53+Math.sin(c5+p)*20,450)
q=B.i.F(t+p*37,420)
J.bo(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bs(B.H,4,8)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=[B.cO,G.np,D.lC,B.aH,B.c][B.o.F(p,5)].gp(0)
c7.ar(q,m)
v.restore()}v.restore()},
b1d(d,e,f,g){var w,v,u=null,t=A.fq(u,B.cs,u,u,u,A.cQ(u,u,u,u,u,u,u,u,u,A.n(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,I.Dq,u,u),e),B.a5,B.bX,u,B.dA,B.bY)
t.e5()
w=t.b
v=w.c
w=w.a.c
t.a5(d,f.aJ(0,new A.o(v/2,w.gba(w)/2)))},
aD(d){return!1}}
C.a2c.prototype={
a7(){return"_Trip."+this.b}}
C.am2.prototype={
S(){return new C.am3(D.Xc,new A.eB(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.am3.prototype={
gDu(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEa(w.c,8,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.N6(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gqv(){var w=this.f
return w===$?this.f=new C.aKO(new C.bRY(this)):w},
gTV(){var w=this.ghb(0)
return w.gzq()==null?"Grandma":B.a.i(w.gzq().b)},
Y(){this.a4()
this.aru()},
t(){var w,v=this
v.gqv().t()
w=v.LX$
w===$&&A.c()
w.t()
w=v.q9$
w.U$=$.aw()
w.P$=0
v.bw7()},
aqY(d){var w,v,u,t=this
if(t.r!==D.ada)return
w=B.dD.aA(0,B.i.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDu()
if(v+1>=u.length){t.r=D.adb
t.WR()}else{++t.w
t.ay=!1
t.r=D.Xd
t.gqv().VV(u[t.w].a)}if(t.c!=null)t.m(new C.bRW())}},
WR(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$WR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqv().VV("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDu().length
r=C.bGq(t,u.z,s)
u.as=r
w=2
return A.b(C.BU(u.a.d,r),$async$WR)
case 2:u.at=e
s=u.a
w=3
return A.b(C.BV(s.d,s.c.a,"journey",u.x*10),$async$WR)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bRQ())
return A.h(null,v)}})
return A.i($async$WR,v)},
brj(){this.aUl()},
aUl(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.ada
if(w.c!=null)w.m(new C.bRR())},
L5(d){var w,v,u,t,s=this
if(s.r!==D.Xd)return
w=s.gDu()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bRV(s,d,v))
u=s.gqv()
t=s.w
u.VV(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cRn(){if(this.r!==D.B9)return
this.aUl()},
B(d){var w,v,u,t=this,s=null,r=A.bS(0,new A.en(A.b4(s,s,s,new C.bj3(t,t.q9$),B.az),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDu().length;++w){v=t.w
if(w<v||t.r===D.adb)v=B.cO
else v=w===v?B.c:B.aU
u=new A.aN(4,4)
p.push(new A.bz(1,B.bc,A.r(s,s,B.f,s,s,new A.p(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,B.wr,s,s,s,s),s))}p.push(B.bn)
p.push(D.fO9)
return new C.tG("Safari Journey",new A.an(B.a0,s,B.ab,B.t,A.a([r,A.ap(s,A.B(p,B.l,s,B.e,B.j,0,s,s),s,s,12,12,2,s),A.ap(10,t.clE(),s,s,10,10,s,s)],q),s),B.f6,s)},
clE(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bRU(o),l=D.qk.j(0.96),k=A.l(22),j=A.L(B.cO,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gTV()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aWc,B.K,n,n),B.X,C.ux("Start the journey",o.gbri(),B.cO,D.bQE,D.fz)],x.p),B.l,n,B.e,B.P,0,B.p)
break
case 3:w=D.bd8
break
case 1:w=o.w
v=o.gDu()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aN(14,14)
p=new A.ay(D.lB,2.5,B.r,-1)
t.push(A.az(n,A.r(n,A.d(r[s],n,n,n,n,n,n,D.aVz,B.K,n,n),B.f,n,D.aer,new A.p(D.ak_,n,new A.bH(p,p,p,p),new A.be(q,q,q,q),n,n,B.n),n,n,n,n,U.wn,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bRS(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.T,A.bW(B.bH,t,B.bs,n,8,8)],u),B.E,n,B.e,B.P,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDu().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.T,new A.bM(B.aa,n,n,C.ux(v,o.gcRm(),B.cO,B.jH,D.fz),n)],x.p),B.E,n,B.e,B.P,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gTV()),B.T,A.d(""+o.x+" of "+o.gDu().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aVS,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aQR(v)
u=C.aQR(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.abq,n,n,n))}w.push(B.T)
w.push(A.as(C.ux("Back to the games",new C.bRT(o),B.cO,B.k6,D.fz),n,n,n))
w=A.x(w,B.E,n,B.e,B.P,0,B.p)
break
default:w=n}return A.r(n,w,B.f,n,n,new A.p(l,n,j,k,D.aDi,n,B.n),n,n,n,n,B.bi,n,n,n)}}
C.bj3.prototype={
a5(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.q9$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDu(),d0=B.i.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.ada,d2=c7*0.5
c8=A.ar(D.bhW,D.bsl,d0)
c8.toString
w=A.ar(D.Yt,G.ahy,d0)
w.toString
v=A.ar(B.u7,D.bqN,d0)
v.toString
$.Q()
u=A.K()
t=x.O
u.sav(A.jA(B.H,new A.o(0,d2),A.a([c8,w,v],t),G.a4q,B.x,c3))
d3.ar(new A.a1(0,0,0+c6,0+c7),u)
s=new A.o(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.K()
u.sav(A.wf(s,60,A.a([D.brb,B.L],t),c3,B.x,c3,c3,0))
d3.N(s,60,u)
u=A.K()
u.r=B.YF.gp(0)
d3.N(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.i.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dzl[o]
$.Q()
u=new A.ao(B.O,B.M,B.R,B.S,B.Q)
u.r=B.c.j(0.75).gp(0)
d3.N(new A.o(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.Q()
j=A.a([],m)
i=new A.aG(k.r,B.ai,c3,c3,j)
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
k=new A.ao(B.O,B.M,B.R,B.S,B.Q)
k.r=A.ar(l===0?D.bgu:D.bvi,D.blq,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.cc4(d3,new A.o(B.i.F(B.i.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.Q()
w=A.K()
v=A.ar(D.aj7,D.Gd,d0)
v.toString
w.sav(A.jA(new A.o(0,d2),new A.o(0,c7),A.a([v,D.brd],t),c3,B.x,c3))
d3.ar(new A.a1(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.K()
w.r=D.bkK.gp(0)
d3.ar(new A.a1(0,a0,c6,a1),w)
w=A.K()
w.r=D.buZ.gp(0)
d3.ar(new A.a1(0,a0-3,c6,a0),w)
for(q=-B.i.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ao(B.O,B.M,B.R,B.S,B.Q)
u.r=I.MG.gp(0)
d3.ar(new A.a1(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.Q()
b2=new A.ao(B.O,B.M,B.R,B.S,B.Q)
b2.r=D.bg9.gp(0)
d3.ar(new A.a1(b0,v,b0+52,u),b2)
b2=A.a([],m)
b1=new A.aG(b1.r,B.ai,c3,c3,b2)
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
b0=new A.ao(B.O,B.M,B.R,B.S,B.Q)
b0.r=D.btb.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ao(B.O,B.M,B.R,B.S,B.Q)
b1.r=D.fz.gp(0)
d3.ar(new A.a1(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ao(B.O,B.M,B.R,B.S,B.Q)
b0.r=D.G0.gp(0)
d3.ar(new A.a1(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bn(new A.a1(b0,a4,b0+60,a5),B.iB)
b0=new A.ao(B.O,B.M,B.R,B.S,B.Q)
b0.r=D.bwm.gp(0)
d3.am(b5,b0)
b0=new A.ao(B.O,B.M,B.R,B.S,B.Q)
b0.r=D.BB.gp(0)
b0.b=B.a9
b0.c=2
d3.am(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.iH(new A.eo(b6,c3,c3,B.cK,c3,c3,c3,c3,c3,c3,D.fsb),B.a5,B.bX,new A.jh(1),c3,c3,c3,c3,B.bY,c3,B.cs)
b7.e5()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a5(d3,new A.o(b4-b1/2,a2-b0.gba(b0)/2))
if(a7)b8=c4.r===D.adb
else if(r===c4.w){b0=c4.r
b0=b0===D.Xd||b0===D.B9
b8=b0}else b8=!1
if(a7){b0=c4.ghb(0).gzq()
b9=(b0==null?c3:b0.c)===D.ou?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqv()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.B9
b0=c0?C.hBs(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.Xd?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.o(40,-110+Math.sin(g)*10)
else a7=c0?new A.o(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.SG(d3,new A.o(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.o(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bIq(d3,new A.o(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.i.F(w+r/7,1)
$.Q()
t=new A.ao(B.O,B.M,B.R,B.S,B.Q)
t.r=D.but.j(0.5*(1-c2)).gp(0)
d3.N(new A.o(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.Xc)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.i.F(w+r/5,1)
t=Math.sin(r+c8)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.N(new A.o(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.B9&&c4.ax){b7=A.fq(c3,B.cs,c3,c3,c3,A.cQ(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.n(c3,c3,B.cO,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,A5.Iz,c3,c3),"BEEP BEEP!"),B.a5,B.bX,c3,B.dA,B.bY)
b7.e5()
b7.a5(d3,new A.o(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
cc4(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ar(D.bqH,D.bk2,g)
o.toString
if(f){w=new A.aG($.Q().r,B.ai,null,null,A.a([],x.v))
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
t.r=D.ZK.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d0E[r]
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=D.ZK.gp(0)
p.c=4
p.d=B.bu
d.ah(new A.o(w,t),new A.o(v+q*24,s),p)
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=o.gp(0)
d.N(new A.o(v+q*26,u),10,p)}}else{w=e.a2(0,D.eqv)
$.Q()
v=A.K()
v.r=D.bgb.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bs(e.a2(0,D.eqw),16,60)
w=A.K()
w.r=o.gp(0)
d.bZ(v,w)}},
bIq(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.Xc?0.045:0,a1=a2.c
J.bo(a1.save())
a1.translate(a3.a,a3.b+e)
a2.hW(0,a0)
for(w=0;w<2;++w){v=D.drN[w]
u=d.ay&&d.r!==D.Xc&&v>0
J.bo(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.Q()
s=new A.ao(B.O,B.M,B.R,B.S,B.Q)
s.r=D.bva.gp(0)
a2.N(B.H,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ao(B.O,B.M,B.R,B.S,B.Q)
s.r=D.bnu.gp(0)
a2.N(B.H,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ao(B.O,B.M,B.R,B.S,B.Q)
q.r=B.bm.gp(0)
q.c=2
a2.ah(B.H,new A.o(s*9,t*9),q)}a1.restore()}p=A.u4(D.f7l,B.fN,B.fN,B.il,B.hP)
$.Q()
t=A.K()
t.sav(A.jA(D.emz,B.a8n,D.dhF,G.a4q,B.x,f))
a2.am(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ao(B.O,B.M,B.R,B.S,B.Q)
s.r=D.dbH[B.o.F(o,4)].gp(0)
a2.ar(new A.a1(t,-26,t+10,-19),s)}n=d.r===D.B9&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a1(s,-66,q,-36)
J.bo(a1.save())
a1.clipRRect(A.nR(A.bn(l,B.mw)),$.np(),!0)
k=new A.ao(B.O,B.M,B.R,B.S,B.Q)
k.r=D.Yt.gp(0)
a2.ar(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.B9?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.SG(a2,new A.o(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aLV,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bn(l,B.mw)
i=new A.ao(B.O,B.M,B.R,B.S,B.Q)
i.r=D.ak1.gp(0)
i.b=B.a9
i.c=2
a2.am(j,i)}d=A.bn(D.Uz,B.mw)
t=A.K()
t.r=D.Yt.gp(0)
a2.am(d,t)
J.bo(a1.save())
a1.clipRRect(A.nR(A.bn(D.Uz,B.mw)),$.np(),!0)
C.SG(a2,new A.o(D.Uz.gbw().a,-10),0,0,0.7,-0.1,f,f,D.aLV,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bn(D.Uz,B.mw)
d=A.K()
d.r=D.ak1.gp(0)
d.b=B.a9
d.c=2
a2.am(t,d)
d=A.K()
d.r=Al.Ge.gp(0)
a2.N(D.eoF,4,d)
d=A.K()
d.r=D.G0.gp(0)
a2.ar(D.f8u,d)
for(w=0;w<3;++w){v=D.drP[w]
d=A.bn(new A.a1(v,-96,v+28,-79),B.iB)
t=new A.ao(B.O,B.M,B.R,B.S,B.Q)
t.r=D.Gd.gp(0)
a2.am(d,t)}a1.restore()},
aD(d){return!1}}
C.aBC.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bgB.prototype={}
C.aBE.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bgC.prototype={}
C.aBF.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bgD.prototype={}
C.a6D.prototype={
B(d){var w=null
return new A.a5(1/0,this.c,A.b4(w,w,w,new C.bja(w),B.az),w)}}
C.bja.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dpM[B.o.F(n,6)]
k=$.Q()
j=new A.ao(B.O,B.M,B.R,B.S,B.Q)
j.r=l.gp(0)
d.ar(new A.a1(m,0,m+v,u),j)
if(B.o.F(n,3)===0){j=A.a([],o)
i=new A.aG(k.r,B.ai,null,null,j)
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
k=new A.ao(B.O,B.M,B.R,B.S,B.Q)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aD(d){return!1}}
C.tG.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aH(w,w,w,w,B.PY,w,w,w,new C.bRP(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a2,w,w,w,D.fpr,w,w,w),1)],v)
B.d.v(u,this.e)
return A.c4(w,D.Yf,A.r(w,A.bm(!0,A.x(A.a([D.c5e,new A.D(D.bHw,A.B(u,B.l,w,B.e,B.j,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.b8x,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.Iw.prototype={
B(d){var w=null,v=this.d,u=C.aQR(v),t=C.ijO(v),s=B.c.j(0.08),r=A.l(18),q=A.L(B.cO.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.frX,w,w,w)],x.p)
if(this.e)p.push(D.esZ)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.h1,w,w,w))
if(t!=null)p.push(new A.D(B.uu,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.AP,w,w,w),w))
return A.r(w,A.x(p,B.l,w,B.e,B.j,0,B.p),B.f,w,w,new A.p(s,w,q,r,w,w,B.n),w,w,w,w,B.bF,w,w,w)}}
C.Wq.prototype={
S(){return new C.blX(A.T(x.N,x.S),B.o.F(Date.now(),1e5))},
cYf(d){return this.f.$1(d)},
ge3(){return this.d}}
C.blX.prototype={
gSU(){var w=this.d
return w===$?this.d=this.a.c:w},
Y(){this.a4()
this.Pv()},
Pv(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Pv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bSA(u.a.d),$async$Pv)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.dfI[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bSz(p,(o===$?u.d=q.c:o).a,r),$async$Pv)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.e1G(u,n))
return A.h(null,v)}})
return A.i($async$Pv,v)},
uA(d){return this.coH(d)},
coH(d){var w=0,v=A.j(x.H),u=this,t
var $async$uA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a6(t,!1).ce(A.ec(new C.e1H(d),!1,null,x.H)),$async$uA)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.Pv()
return A.h(null,v)}})
return A.i($async$uA,v)},
gb6w(){var w,v,u,t=C.N6(this.gSU()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)s.push(B.a.i(w[u].b))
return s},
a2s(d){return this.cvU(d)},
cvU(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a2s=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.J)(d),++s)r.push(d[s].aj())
w=2
return A.b(u.a.cYf(r),$async$a2s)
case 2:if(u.c!=null)u.m(new C.e1I(u,r))
return A.h(null,v)}})
return A.i($async$a2s,v)},
OP(d){return this.bR7(d)},
bR7(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$OP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hf4(t.gSU())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.MQ("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a6(s,!1).ce(A.ec(new C.e1E(q),!1,null,r)),$async$OP)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.J)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bj(j,new C.e1F(p))
o=s.length
B.d.c9(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a2s(A.cW(s,0,A.dA(2,"count",x.S),r).dn(0)),$async$OP)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OP,v)},
XN(d,e){return this.bOH(0,e)},
bOH(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$XN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cg(null,null,!0,null,new C.e1D(e),o,null,!0,!0,x.y),$async$XN)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hf4(u.gSU()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.J)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a2s(o),$async$XN)
case 5:case 3:return A.h(null,v)}})
return A.i($async$XN,v)},
aa8(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e1A(this,j):h
o=o?0.55:1
w=A.ar(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.l(20)
u=A.L(B.aU,B.r,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cB,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.Vo,p,p,p),B.b3],s)
q=A.l(10)
r.push(A.r(p,A.d(i,p,p,p,p,p,p,D.fql,p,p,p),B.f,p,p,new A.p(B.hu,p,p,q,p,p,B.n),p,p,p,p,B.Cq,p,p,p))
return A.az(p,A.d3(A.r(p,A.x(A.a([A.B(r,B.l,p,B.e,B.j,0,p,p),B.b3,A.d(e,p,2,p,p,p,p,D.fy5,p,p,p),B.cR,A.d(f,p,3,B.a2,p,p,p,D.fr3,p,p,p)],s),B.E,p,B.e,B.j,0,B.p),B.f,p,p,new A.p(p,p,u,v,t,new A.a8(B.aA,B.aE,B.x,w,p,p),B.n),p,p,p,p,B.yK,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
Xg(d,e,f,g,h,i){return this.aa8(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.N6(s.gSU()),p=s.gSU(),o=C.aQR(s.e),n=C.hf4(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e1J(s),k=C.hF3(p,1).length,j=C.hFf(p,1).length,i=C.hG9(p,1).length,h=B.c.j(0.07),g=A.l(20),f=A.L(B.cO.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,K.abf,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.fvE,r,r,r),a0=q.b.length,a1=x.p
g=A.r(r,A.B(A.a([e,B.bd,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.VG,r,r,r)],a1),B.E,r,B.e,B.j,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.pY,r,r,r),D.fUw],a1),B.l,r,B.e,B.j,0,B.p)],a1),B.l,r,B.e,B.j,0,r,r),B.f,r,r,new A.p(h,r,f,g,r,r,B.n),r,r,r,r,B.bF,r,r,r)
f=s.Xg("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aF,new C.e1K(s,p),l.$1("kahoot"))
h=s.Xg("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lB,new C.e1L(s,p),l.$1("fire"))
a0=s.Xg("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.wa,new C.e1M(s,p),l.$1("catch"))
j=j!==0?new C.e1P(s,p):r
j=s.aa8("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hq,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e1Q(s,p):r
i=s.aa8("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.kJ,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.Xg("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.eY,new C.e1R(s,p),l.$1("journey"))
k=k!==0?new C.e1S(s,p):r
k=A.a([g,B.aQ,D.fYx,B.T,A.kW(0.98,A.a([f,h,a0,j,i,e,s.aa8("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.eq,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.Xg("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.cZ,new C.e1T(s,p),l.$1("school"))],a1),2,12,12,r,B.dY,!0),B.d8,A.B(A.a([D.bJl,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fqp,r,r,r)],a1),B.l,r,B.e,B.j,0,r,r),B.T],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.J)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aN(18,18)
u=new A.ay(B.aU,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fF7,B.bd,new A.bz(1,B.bc,A.x(A.a([A.d(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.h8,r,r,r),A.d(""+v.gaps(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.AP,r,r,r)],a1),B.E,r,B.e,B.j,0,B.p),r)],a1)
if(v.gaps(0).length>=2){f=D.lC.j(0.2)
t=new A.ay(D.lC,1,B.r,-1)
g.push(A.az(r,A.r(r,A.X(B.hx,D.lC,r,r,r,20),B.f,r,r,new A.p(f,r,new A.bH(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e1U(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cO.j(0.2)
t=new A.ay(B.cO,1,B.r,-1)
f=A.az(r,A.r(r,A.X(B.j3,B.cO,r,r,r,20),B.f,r,r,new A.p(f,r,new A.bH(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e1V(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fh.j(0.2)
t=new A.ay(B.fh,1,B.r,-1)
B.d.v(g,A.a([B.bn,f,B.bn,A.az(r,A.r(r,A.X(B.ej,B.fh,r,r,r,20),B.f,r,r,new A.p(e,r,new A.bH(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e1W(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.r(r,new A.c8(B.aL,B.e,B.j,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.p(i,r,new A.bH(u,u,u,u),new A.be(h,h,h,h),r,r,B.n),r,r,r,B.d5,B.bi,r,r,r))}if(s.a.e){j=m?new C.e1N(s):new C.e1O(a2)
i=A.l(18)
h=A.L(m?B.cO:B.aU,B.r,2)
g=m?B.cO.j(0.12):B.dl
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.az(r,A.r(r,A.as(A.d(f,r,r,r,r,r,r,A.n(r,r,m?B.cO:B.aD,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.p(g,r,h,i,r,r,B.n),r,r,r,r,B.NY,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.fZt)
k.push(B.aB)
k.push(D.asO)
return new C.tG("Family Games \xb7 "+p.b,A.cl(k,r,r,D.bDy,r,r,B.ah,!1),B.f6,r)}}
C.a05.prototype={
a7(){return"_KPhase."+this.b}}
C.am4.prototype={
S(){return new C.am5(D.b0t)},
gd1(){return this.e}}
C.am5.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a3()},
fX(d){var w,v=this
v.m(new C.bS9(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.df(B.fH,new C.bSa(v))},
aPR(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.m(new C.bS_(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.df(B.ff,new C.bS0(w))},
L5(d){var w
if(this.d!==D.acH)return
w=this.at
if(w!=null)w.a1(0)
this.b6s(d)},
b6s(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.i.V(500+500*B.i.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bS5(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cy(B.rS,v.gix(v))},
cKO(d){var w=this
if(w.d!==D.WL)return
if(w.e+1>=w.a.w.length)w.Yy()
else{w.m(new C.bS6(w))
w.aPR()}},
Yy(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Yy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bGq(p,u.w,t)
u.m(new C.bS2(u,s))
w=2
return A.b(C.BU(u.a.e,s),$async$Yy)
case 2:r=e
t=u.a
w=3
return A.b(C.BV(t.e,t.f,t.r,u.f),$async$Yy)
case 3:q=e
if(u.c!=null)u.m(new C.bS3(u,r,q))
return A.h(null,v)}})
return A.i($async$Yy,v)},
cLD(){var w,v,u,t,s=this,r=s.a,q=new A.e5()
q.d_(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.b5("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.e0(r,q)
for(r=A.cW(r,0,A.dA(4,"count",x.S),A.U(r).c),u=r.$ti,r=new A.bR(r,r.gI(0),u.k("bR<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b5(t,B.i.V(w*(0.35+q.ai()*0.5)),!1))}B.d.aZ(v,new C.bS7())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b0t===r){w=A.a([D.fUV,B.X,A.d(s,t,t,t,t,t,t,B.KS,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.fqx,t,t,t))
w.push(B.aB)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.xq,B.K,t,t))
w.push(B.e0)
w.push(C.ux("Play",u.geY(u),B.cO,B.hx,D.fz))
w=A.as(new A.D(B.ex,A.x(w,B.l,t,B.e,B.P,0,B.p),t),t,t,t)
break A}if(D.b0u===r){w=A.as(A.d(""+u.z,t,t,t,t,t,t,D.fyD,t,t,t),t,t,t)
break A}if(D.acH===r||D.WL===r){w=u.cri()
break A}if(D.b0v===r){w=u.cc5()
break A}w=t}return new C.tG(s,w,B.f6,t)},
cri(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.WL,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aVo,j,j,j),B.b3],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.KP,j,j,j))
g.push(B.au)
f=A.l(14)
g.push(A.r(j,A.d(""+k.f,j,j,j,j,j,j,B.iC,j,j,j),B.f,j,j,new A.p(B.bA,j,j,f,j,j,B.n),j,j,j,j,B.GM,j,j,j))
g=A.B(g,B.l,j,B.e,B.j,0,j,j)
f=A.l(6)
w=i?0:B.i.D(k.as/k.a.w[k.e].r,0,1)
f=A.by(f,A.kp(B.bA,j,k.as<5?B.fh:B.cO,9,j,w,j),B.aq)
w=A.l(22)
v=A.L(B.cO,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.n(j,j,e?D.lC:G.np,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.T,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.fpA,B.K,j,j)],h),B.l,j,B.e,B.P,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fAP,B.K,j,j)
w=A.E(A.r(j,A.as(u,j,j,j),B.f,j,j,new A.p(D.qk,j,v,w,j,j,B.n),j,j,j,j,B.fs,j,j,1/0),3)
v=A.a([],h)
for(u=k.gix(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bS4(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aCV[o]
m=new A.aN(16,16)
l=new A.ay(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.d(D.aDf[o],j,j,j,j,j,j,D.frx,j,j,j),B.au,new A.bz(1,B.bc,A.d(r[t],j,3,B.a2,j,j,j,D.fqu,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.arj)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bY0)
v.push(A.az(j,new A.SW(A.r(j,new A.c8(B.aL,B.e,B.j,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.p(n,j,new A.bH(l,l,l,l),new A.be(m,m,m,m),V.aBi,j,B.n),j,j,j,j,B.f3,j,j,j),p,B.b1,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.am,f,B.af,w,B.af,A.E(A.kW(1.45,v,2,10,10,j,B.dY,!1),4)],h)
if(i)h.push(D.esd)
return new A.D(B.a0m,A.x(h,B.l,j,B.e,B.j,0,B.p),j)},
cc5(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cLD(),m=x.p,l=A.a([D.bcq,A.as(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.pY,o,o,o),o,o,o),A.as(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.Vt,o,o,o),o,o,o),B.aQ],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cO.j(0.25):B.dl
u=new A.aN(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.cO:B.bA,1,B.r,-1)
q=A.d(w<3?D.dhX[w]:""+(w+1),o,o,o,o,o,o,B.ne,o,o,o)
s=s?B.u:B.V
l.push(A.r(o,new A.c8(B.aL,B.e,B.j,B.l,o,B.p,o,0,A.a([new A.a5(34,o,q,o),new A.bz(1,B.bc,A.d(t.a,o,o,o,o,o,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.d(""+t.b,o,o,o,o,o,o,B.iC,o,o,o)],m),o),B.f,o,o,new A.p(v,o,new A.bH(r,r,r,r),new A.be(u,u,u,u),o,o,B.n),o,o,o,B.cx,B.eZ,o,o,o))}l.push(B.X)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.Iw(m,v,p.CW,o))
l.push(B.aQ)
l.push(A.as(C.ux("Back to the games",new C.bS1(p),B.cO,B.k6,D.fz),o,o,o))
return A.cl(l,o,o,B.fs,o,o,B.ah,!1)}}
C.U6.prototype={
S(){return new C.am1(A.T(x.de,x.er))}}
C.am1.prototype={
gD7(){var w,v=this,u=v.d
if(u===$){w=C.hkS(v.a.c.aj())
v.d!==$&&A.bE()
v.d=w
u=w}return u},
glS(d){var w,v,u=this,t=u.e
if(t===$){w=u.gD7().b
v=$.aw()
u.e!==$&&A.bE()
t=u.e=new A.au(new A.ba(w,B.b7,B.aR),v)}return t},
cf5(d){return this.f.c3(0,d,new C.bRA(d))},
Y(){this.a4()
var w=this.gD7().c
if(w.length===0)w.push(C.h6D(null,0,20,""))},
t(){var w,v,u=this.glS(0)
u.U$=$.aw()
u.P$=0
for(u=this.f,u=new A.dq(u,u.r,u.e);u.C();)for(w=J.aT(u.d);w.C();){v=w.gR(w)
v.U$=$.aw()
v.P$=0}this.a3()},
cKE(){if(this.gD7().c.length>=12)return
this.m(new C.bRB(this))},
jI(d){var w,v,u=this,t=u.gD7()
t.b=B.a.i(u.glS(0).a.a)
w=t.gaps(0)
if(t.b.length===0||w.length<2){u.c.L(x.q).f.T(D.fiu)
return}v=t.c
B.d.a8(v)
B.d.v(v,w)
v=u.c
v.toString
A.a6(v,!1).O(t)},
B(d){var w,v,u=this,t=null,s=new C.bRL(),r=x.p,q=A.a([A.bO(!1,D.fK5,t,t,!0,t,t,t,u.gbqa(u),t,t)],r),p=A.a([D.fZ4,B.af,A.aM(t,B.a_,!1,t,!0,B.t,t,A.aO(),u.glS(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ak,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ad,t,t,t,t,t,t,t,t,t,t,t,B.h1,!0,B.a5,t,B.ao,t,t,t,t),B.aB],r)
for(w=0;v=u.gD7().c.length,w<v;++w)B.d.v(p,A.a([new A.ff(new C.bRK(u,w,s),t)],r))
if(v<12)p.push(A.as(C.ux("\uff0b Add a question",u.gcKD(),B.aU,t,B.c),t,t,t))
return new C.tG("Make your game",A.cl(p,t,t,D.bDv,t,t,B.ah,!1),q,t)}}
C.ar6.prototype={
S(){return new C.aF9(A.a([],x._))},
bv(){return this.r.$0()},
qo(){return this.w.$0()},
ge3(){return this.c}}
C.aF9.prototype={
Y(){var w,v
this.a4()
this.ww()
w=this.a
v=w.c
if(v.length!==0)C.a8k(v,w.e,w.d.w)},
wm(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hhH(r,t.e,!1,s.w,new C.e3l(u),null,s),$async$wm)
case 2:w=3
return A.b(u.ww(),$async$wm)
case 3:return A.h(null,v)}})
return A.i($async$wm,v)},
a0E(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a0E=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hhH(r,t.e,!0,s.w,new C.e3k(u),null,s),$async$a0E)
case 2:w=3
return A.b(u.ww(),$async$a0E)
case 3:return A.h(null,v)}})
return A.i($async$a0E,v)},
ww(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$ww=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Bq(q.a.c),$async$ww)
case 7:p=e
if(q.c!=null)n=q.e||J.cJ(p)
else n=!1
if(n)q.m(new C.e3n(q,p))
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
return A.b(C.Hn(q.a.c).dh(0,B.qw),$async$ww)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.e3o(q,o))
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
if(q.c!=null&&q.e)q.m(new C.e3p(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ww,v)},
Pa(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Pa=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.L(s).f.T(D.fi4)
w=3
return A.b(C.Hn(t.a.c),$async$Pa)
case 3:r=e
w=4
return A.b(C.fXd(t.a.c,r),$async$Pa)
case 4:q=e
w=5
return A.b(C.Hn(t.a.c),$async$Pa)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.e3j(t,p))
o=t.c.L(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(null,null,null,q?B.dJ:B.cY,null,B.t,null,s,null,B.mY,null,null,null,null,null,null,null,null,null,null))
t.a.qo()
case 1:return A.h(u,v)}})
return A.i($async$Pa,v)},
Iv(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Iv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.isE(l),$async$Iv)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hVl(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b1d(q,p.e,l,"Each family tree costs $"+B.i.ad(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Iv)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hBC(r)
o=Date.now()
n=t.a.c
m=new C.kV(l,r.toUpperCase(),p,!0,B.a_,D.DA,new A.V(o,0,!1),0,n,D.uC,B.cd)
w=5
return A.b(C.a41(n,m),$async$Iv)
case 5:w=6
return A.b(t.ww(),$async$Iv)
case 6:t.a.bv()
t.a.qo()
if(t.c==null){w=1
break}t.F3(m)
case 1:return A.h(u,v)}})
return A.i($async$Iv,v)},
F3(d){return this.ck0(d)},
ck0(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$F3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Bq(u.a.c),$async$F3)
case 2:n=l.nA(k.dI(f,new C.e3m(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hy(m,new C.ar0(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$F3)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a41(u.a.c,o),$async$F3)
case 6:case 5:w=7
return A.b(u.ww(),$async$F3)
case 7:u.a.qo()
return A.h(null,v)}})
return A.i($async$F3,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.S(d).ax.a===B.J,o=new C.uj(p)
if(r.e)return A.as(A.n5(q,p?B.bv:B.bm,q,q,q,q,q,q,q,q),q,q,q)
if(J.cs(r.d)){w=p?B.ef:B.c
v=A.l(15)
u=A.aI(!1,B.a3,!0,q,A.aP(!1,q,!0,A.r(q,D.bVG,B.f,q,q,new A.p(B.aX.j(0.12),q,A.L(B.aX,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cS,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcj4(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.n(q,q,p?B.aP:B.ar,q,q,q,q,q,q,q,q,18,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Go(A.r(q,A.x(A.a([u,B.aQ,t,B.T,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.n(q,q,p?B.bv:B.bm,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.e0,A.bJ(D.h1l,q,r.gaT8(),A.bp(B.bR,q,q,q,q,q,Au.a0L,q,new A.b9(A.l(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.j,0,B.p),B.f,q,q,new A.p(w,q,q,v,q,q,B.n),q,q,q,q,D.bGd,q,q,1/0),15,B.ag,1.05,D.act,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.n(q,q,p?B.aP:B.ar,q,q,q,q,q,q,q,q,16,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b3],v)
if(J.cJ(r.d))w.push(A.aH(q,q,q,q,A.X(B.zy,B.aX,q,q,q,q),q,q,q,new C.e3r(r),q,q,q,q,"Sync family trees with database",q))
if(J.cJ(r.d))w.push(A.aH(q,q,q,q,A.X(B.zs,B.aX,q,q,q,q),q,q,q,r.gagV(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dh(E.asd,D.fHp,r.gaT8(),A.bp(B.bR,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.l,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.Go(r.cGN(J.t(r.d,s),o),14,B.ag,1,D.act,q))
B.d.v(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.l,q,B.e,B.j,0,B.p)],v),B.E,q,B.e,B.j,0,B.p)},
cGN(d,e){var w=null,v=e.a,u=v?B.ef:B.c,t=A.l(14),s=A.L((v?B.eh:B.bP).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.eu,10)],x.V),q=A.l(14),p=A.r(w,D.bUK,B.f,w,w,new A.p(B.aX.j(0.15),w,w,A.l(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.n(w,w,v?B.aP:B.ar,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaqs(),m=d.d?"":" \xb7 Public",l=d.y===D.kU?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bG,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.n(w,w,v?B.bv:B.bm,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.j,0,B.p),1)
return A.r(w,A.aI(!1,B.a3,!0,w,A.aP(!1,q,!0,new A.D(B.bF,A.B(A.a([p,B.bd,l,A.X(B.OP,v?B.bv:B.bm,w,w,w,w)],k),B.l,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e3q(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj),B.f,w,w,new A.p(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.ar0.prototype={
S(){return new C.aF6(A.a([],x._),A.aR(x.N),A.b9W())},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aF6.prototype={
Y(){var w,v,u=this
u.a4()
u.d=u.a.w
u.adB()
w=u.a
v=w.c
if(v.length!==0)C.a8k(v,w.e,w.d.w)},
t(){var w=this.w
w.U$=$.aw()
w.P$=0
this.a3()},
a3C(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3C=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yy("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e2M(r),s,null,!0,!0,x.y),$async$a3C)
case 3:if(e!==!0||t.c==null){w=1
break}t.K3()
t.m(new C.e2N(t,r))
w=4
return A.b(t.uw(),$async$a3C)
case 4:t.a.bv()
t.yy(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a3C,v)},
cwt(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aW.x1$.push(new C.e2H(w,f,d,e))},
aVr(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dr()
u.ej(w,v,0,1)
u.k5(q,q,1,1)
this.w.sp(0,u)},
bd4(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eK(new Float64Array(16))
q.e7(r)
w=q.Dc()
v=B.i.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dr()
t.ej(r,u,0,1)
t.k5(v,v,1,1)
t.ej(-r,-u,0,1)
t.iY(0,q)
s.sp(0,t)},
adB(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$adB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Bq(u.a.c),$async$adB)
case 2:t=s.nA(r.dI(e,new C.e28(u)))
if(t!=null&&u.c!=null)u.m(new C.e29(u,t))
return A.h(null,v)}})
return A.i($async$adB,v)},
yy(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
wm(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.hhH(o,t,!1,r,new C.e2q(u),q.a,s),$async$wm)
case 2:n=A
m=J
w=3
return A.b(C.Hn(u.a.c),$async$wm)
case 3:p=n.nA(m.dI(e,new C.e2r(u)))
if(p!=null&&u.c!=null)u.m(new C.e2s(u,p))
return A.h(null,v)}})
return A.i($async$wm,v)},
K3(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cH(w,0)},
uw(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a41(t,s),$async$uw)
case 2:return A.h(null,v)}})
return A.i($async$uw,v)},
a28(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a28=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.uy(q,t.a.c)){t.yy("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.itR(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a28)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.K3()
t.m(new C.e2G(t,r))
w=4
return A.b(t.uw(),$async$a28)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a28,v)},
b39(){var w=this.c
w.toString
A.a6(w,!1).ce(A.ec(new C.e2n(this),!1,null,x.H))},
a0S(){return this.ck2()},
ck2(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0S=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.uy(m,t.a.c)){t.yy("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.S(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Y(s,new C.e2D(),A.U(s).k("Y<1>")).gI(0)
s=A.eA([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("ci.E"))
B.d.fj(p)
s=t.c
s.toString
w=3
return A.b(A.bU(B.L,null,new C.e2E(n,t,new C.uj(m.ax.a===B.J),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a0S)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.K3()
t.m(new C.e2F(t,o))
w=6
return A.b(t.uw(),$async$a0S)
case 6:case 5:if(o.a&&t.c!=null)t.b39()
case 1:return A.h(u,v)}})
return A.i($async$a0S,v)},
WB(d){return this.bDK(d)},
bDK(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.uy(r,t.a.c)){t.yy("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e1X(t,d),r,null,!0,!0,x.P),$async$WB)
case 3:s=f
if(s==null){w=1
break}t.K3()
t.m(new C.e1Y(t,s))
w=4
return A.b(t.uw(),$async$WB)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WB,v)},
a3Y(d){return this.cJ1(d)},
cJ1(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a3Y=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.S(s)
t=u.c
t.toString
w=2
return A.b(A.cg(null,null,!0,null,new C.e2P(u,d,new C.uj(s.ax.a===B.J)),t,null,!0,!0,x.H),$async$a3Y)
case 2:return A.h(null,v)}})
return A.i($async$a3Y,v)},
cgi(d){var w=this,v=w.d
v===$&&A.c()
if(C.uy(v,w.a.c))w.OQ(d)
else w.a3Y(d)},
ajq(d,e){return this.cAq(d,e)},
cAq(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ajq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.S(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.e2J(new C.uj(r.ax.a===B.J),d,e),s,null,!0,!0,x.H),$async$ajq)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ajq,v)},
IA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$IA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kU?3:5
break
case 3:w=6
return A.b(C.h4Q(t.a.c),$async$IA)
case 6:s=e
o=t.a
r=C.hpK(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ajq(!s,!r),$async$IA)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aQY(o,t.a.c)){t.yy("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.ln(o,"Cancel","Remove",q.y===D.kU?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$IA)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aQU(t.a.c,t.d.a),$async$IA)
case 11:t.a.bv()
o=t.c
if(o==null){w=1
break}A.j1(o,null)
case 1:return A.h(u,v)}})
return A.i($async$IA,v)},
ab4(d){return this.bOY(d)},
bOY(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$ab4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.uy(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aV(s,new C.e1Z(p))){o=A.U(s)
p.a=A.nA(new A.cM(new A.Y(s,new C.e2_(d),o.k("Y<1>")),new C.e20(),o.k("cM<1,m>")))}q=p.a
if(q==null)q=d.d
t.K3()
t.m(new C.e21(t,s,d,q))
w=3
return A.b(t.uw(),$async$ab4)
case 3:t.yy(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$ab4,v)},
OQ(d){return this.bRb(d)},
bRb(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.uy(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a3Y(d),$async$OQ)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.e25(t,d),r,null,!0,!0,x.P),$async$OQ)
case 6:s=f
if(s==null){w=1
break}t.K3()
t.m(new C.e26(t,s))
w=7
return A.b(t.uw(),$async$OQ)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OQ,v)},
cHc(){var w=this,v=w.d
v===$&&A.c()
if(!C.uy(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.e2O(w))
w.uw()},
ZB(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aQY(n,t.a.c)){t.yy("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.S(n)
s=$.aw()
r=new A.au(B.ax,s)
q=t.d.e
p=A.bq(new A.N(q,t.gceM(),A.U(q).k("N<1,m>")).bY(0,new C.e2i()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e2j(t,new C.uj(n.ax.a===B.J),p,r),q,null,!0,!0,x.y),$async$ZB)
case 3:o=e
r.U$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.K3()
t.m(new C.e2k(t,p))
w=4
return A.b(t.uw(),$async$ZB)
case 4:t.yy("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$ZB,v)},
ceN(d){return B.a.i(d.toLowerCase())},
ciP(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.uy(v,w)
t=r.d
s=C.iif(t)
C.isI(q,t.b,u,C.iie(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.S(d).ax.a===B.J,m=new C.uj(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Y(l,new C.e2W(),A.U(l).k("Y<1>")).gI(0)
l=n?B.c5:B.iG
v=A.X(B.a1W,n?B.bv:B.bm,o,o,o,18)
u=x.p
v=A.a([new A.D(B.Cg,A.aP(!1,o,!0,new A.D(B.hH,A.B(A.a([v,B.bn,A.d("Back to Family Trees",o,o,o,o,o,o,A.n(o,o,n?B.bv:B.bm,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.P,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e2X(p,d),o,o,o,o,o,o,o),o),new A.D(B.nF,p.c1q(m),o)],u)
if(p.d.y===D.kU){t=B.th.j(0.15)
s=A.l(12)
r=A.L(B.th.j(0.45),B.r,1)
q=C.Hl(p.d,p.a.c)
v.push(new A.D(B.yN,A.r(o,A.B(A.a([D.c_9,B.au,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.n(o,o,n?B.aP:B.ar,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.j,0,o,o),B.f,o,o,new A.p(t,o,r,s,o,o,B.n),o,o,o,o,B.iw,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.n(o,o,n?B.aP:B.ar,o,o,o,o,o,o,o,o,15,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b3],u)
if(C.uy(p.d,p.a.c)&&p.e.length!==0)u.push(new C.GA("Undo",B.pz,p.gcHb(),m,o,o))
u.push(new C.GA("Family Book",D.bPu,p.gciO(),m,B.u8,o))
u.push(new C.GA("Family games",B.oC,p.gcj_(),m,B.aF,o))
if(C.uy(p.d,p.a.c))u.push(new C.GA("Display settings",B.D7,p.gck1(),m,B.b2,o))
u.push(new C.GA("Sync",B.zs,p.gagV(),m,o,o))
t=p.d
if(t.y===D.kU||C.aQY(t,p.a.c)){t=p.d.y===D.kU?"Remove shared tree":"Delete tree"
u.push(new C.GA(t,B.ej,p.gbP7(),m,B.fh,o))}if(C.uy(p.d,p.a.c))u.push(new C.GA("Add member",B.wK,new C.e2Y(p),m,B.bR,o))
v.push(new A.D(Z.am0,A.B(u,B.l,o,B.e,B.j,0,o,o),o))
if(p.d.gaqs()===0){u=A.as(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.n(o,o,n?B.bv:B.bm,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cq(new C.e2Z(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?O.a2_:A4.OQ,o,o,o,o,o)
v.push(A.as(A.ho(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e3_(p),o),o,o,o))}return A.c4(o,l,A.bm(!0,A.x(v,B.E,o,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c1q(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.l(22)
v=A.a([new A.ac(0,B.G,B.fW.j(0.35),B.dt,18)],x.V)
u=A.l(22)
t=A.ap(-26,A.X(B.zl,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aI(!1,B.a3,!0,m,A.aP(!1,m,!0,A.r(m,D.c2m,B.f,m,m,new A.p(B.c.j(0.16),m,A.L(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cS,!0,m,m,m,m,m,m,m,m,m,m,m,n.gagV(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.fsz,m,m,m)
r=r.gaqs()
p=n.d.gaqs()===1?"member":"members"
o=x.p
p=A.a([s,B.bd,A.E(A.x(A.a([q,B.bG,A.d(""+r+" "+p,m,m,m,m,m,m,A.n(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.j,0,B.p),1)],o)
if(C.uy(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.c_n,m,m,m,n.gctQ(),m,m,m,m,"Rename",m))
s=A.B(p,B.l,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.jI:B.n4
r=r?"Private":"Public"
r=A.E(n.ax0(q,"Privacy",r,n.a.d.w?n.gcG6():m),1)
q=A.E(n.ax0(B.zt,"Tree code",n.d.c,new C.e27(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.B(A.a([r,B.ae,q,B.ae,A.E(n.ax0(D.bRa,"Collaborators",p,n.gc6a()),1)],o),B.l,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.kU){s=B.c.j(0.15)
B.d.v(p,A.a([B.T,A.aI(!1,B.a3,!0,A.l(999),A.aP(!1,A.l(999),!0,new A.D(B.hf,A.B(A.a([A.X(B.pA,B.c,m,m,m,14),B.e5,A.d("View only",m,m,m,m,m,m,B.aVt,m,m,m)],o),B.l,m,B.e,B.P,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.aj)],o))}return A.r(m,A.by(u,new A.an(B.a0,m,B.ab,B.t,A.a([t,new A.D(B.GP,A.x(p,B.E,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.p(m,m,m,w,v,D.c6F,B.n),m,m,m,m,m,m,m,1/0)},
ax0(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aI(!1,B.a3,!0,A.l(14),A.aP(!1,A.l(14),!0,new A.D(K.anc,A.x(A.a([A.X(d,B.c,w,w,w,18),B.aw,A.d(e,w,1,B.a2,w,w,w,A.n(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.vz,A.d(f,w,1,B.a2,w,w,w,An.AM,w,w,w)],x.p),B.l,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)}}
C.bgF.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gau(r)&&s.c.length===0)return B.bL
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bgI(s,t),new A.av(w,v))],x.p)
r=r.gdO(r)
B.d.v(u,r.dM(r,new C.dh_(this),x.l))
r=s.c
B.d.v(u,new A.N(r,new C.dh0(this),A.U(r).k("N<1,v>")))
return new A.D(B.uy,new A.a5(w,v,new A.an(B.a0,t,B.ab,B.f,u,t),t),t)}}
C.L_.prototype={}
C.GE.prototype={}
C.bgH.prototype={
gblB(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aKJ.prototype={}
C.bgI.prototype={
bQN(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.Q()
v=A.K()
v.r=B.bD.j(0.75).gp(0)
v.c=2
v.d=B.bu
d.ah(new A.o(n,w),new A.o(m,w),v)
u=(n+m)/2
t=new A.aG(q.r,B.ai,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.aZ(u,q))
s=w-1.1
r=w-8.8
t.E(new A.kT(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.kT(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bv())
q=A.K()
q.r=B.c.gp(0)
d.N(new A.o(u,w),9,q)
q=A.K()
q.r=B.bD.gp(0)
d.af(t,q)},
bQK(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aZ(a0,new C.dhk())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aV(a0,new C.dhl(f))
t=new A.N(a0,new C.dhm(f),A.U(a0).k("N<1,H>")).bY(0,new C.dhn()).cG(0,1/0,B.rp)
w=f.a
d.ah(f,new A.o(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.J)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.o(o,v),p,e)
continue}l=J.lK(n)
k=Math.min(10,m/2)
m=$.Q()
j=A.a([],r)
i=new A.aG(m.r,B.ai,null,null,j)
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
w.e=B.dR
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.J)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bQK(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.J)(v),++t){r=v[t]
if(r.c)this.bQN(d,w,r.a,r.b)}},
aD(d){return d.b!==this.b}}
C.bku.prototype={
gcc7(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aDv
switch(w.c.a){case 0:return D.d_n
case 1:return D.dbB
case 2:return D.dtD}},
gcca(){var w=this.c,v=C.hAN(w.w),u=C.hAN(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.S(d).ax.a===B.J,q=t.gcc7(),p=t.c,o=N.bF1(p.f),n=t.gcca(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gan(q).j(0.35),B.cI,10)],m),k=r?B.ar:B.c,j=A.L(r?B.ar:B.c,B.r,2)
if(o!=null)w=A.tL(B.A,s,B.cj,B.c_,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gan(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.r(B.A,A.d(v,s,s,s,s,s,s,A.n(s,s,B.d.gan(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.p(s,s,s,s,s,new A.a8(B.a7,B.aa,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.r(s,A.r(s,A.hV(w,B.aq),B.f,s,s,new A.p(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.p(s,s,s,s,l,new A.a8(B.aA,B.aE,B.x,q,s,s),B.a6),s,56,s,s,B.H4,s,s,56)],v)
k=t.d
if(k>0){j=A.l(10)
w=A.L(r?B.ar:B.c,B.r,1.5)
l.push(A.ap(s,A.r(s,A.d(""+k,s,s,s,s,s,s,D.fDi,s,s,s),B.f,s,s,new A.p(B.cg,s,w,j,s,s,B.n),s,s,s,s,D.bIa,s,s,s),s,s,s,-6,-4,s))}k=r?B.cr:B.c
j=A.l(8)
w=A.L(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dF,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.n(s,s,r?B.c:B.cr,s,s,s,s,s,s,s,s,u,s,s,B.I,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.n(s,s,r?B.aT:B.bm,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.az(s,new A.a5(84,112,A.x(A.a([new A.an(B.a0,s,B.ab,B.f,l,s),B.aw,A.r(s,A.x(p,B.l,s,B.e,B.P,0,B.p),B.f,s,D.b6G,new A.p(k,s,w,j,m,s,B.n),s,s,s,s,D.bIl,s,s,s)],v),B.l,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bfK.prototype={
a5(d,e){var w,v,u,t,s
$.Q()
w=A.K()
v=this.b
u=v?B.c:D.bjF
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.N(new A.o(s,t),1,w)},
aD(d){return d.b!==this.b}}
C.byu.prototype={
B(d){var w=this,v=null,u=new C.fmL(w),t=w.c,s=t?B.cr:B.c,r=A.l(12),q=u.$3(B.hY,"Zoom in",w.d),p=A.r(v,v,B.f,t?B.bA:B.fq,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.wM,"Zoom out",w.e)
return A.aI(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.r(v,v,B.f,t?B.bA:B.fq,v,v,v,1,v,v,v,v,v,22),u.$3(B.apL,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.P,0,B.p),B.f,s,4,v,B.ds,v,v,v,B.aj)}}
C.bnP.prototype={
B(d){var w=this,v=null,u=B.bR.j(0.15),t=A.L(B.bR,B.r,2),s=w.e,r=x.p
t=A.az(v,A.r(v,A.x(A.a([A.X(s?O.a2_:A4.OQ,B.bR,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fzj,v,v,v)],r),B.l,v,B.bb,B.j,0,B.p),B.f,v,v,new A.p(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fx8,B.K,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.N(s,new C.eXO(w),A.U(s).k("N<1,v>")))
B.d.v(u,t)}return new A.a5(84,v,A.x(u,B.l,v,B.e,B.j,0,B.p),v)}}
C.a0i.prototype={
S(){return new C.aDA()},
bv(){return this.Q.$0()},
ge3(){return this.w}}
C.aDA.prototype={
Y(){var w,v,u,t,s,r=this,q=null
r.a4()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aQ()
r.d=new A.au(new A.ba(t,B.b7,B.aR),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aQ()
r.e=new A.au(new A.ba(t,B.b7,B.aR),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aQ()
r.f=new A.au(new A.ba(t,B.b7,B.aR),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aQ()
r.r=new A.au(new A.ba(t,B.b7,B.aR),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aQ()
r.w=new A.au(new A.ba(t,B.b7,B.aR),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aQ()
r.x=new A.au(new A.ba(t,B.b7,B.aR),s)
t=u?q:v.c
r.y=t==null?D.z1:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.ijP(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
t(){var w,v=this,u=v.d
u===$&&A.c()
w=u.U$=$.aw()
u.P$=0
u=v.e
u===$&&A.c()
u.U$=w
u.P$=0
u=v.f
u===$&&A.c()
u.U$=w
u.P$=0
u=v.r
u===$&&A.c()
u.U$=w
u.P$=0
u=v.w
u===$&&A.c()
u.U$=w
u.P$=0
u=v.x
u===$&&A.c()
u.U$=w
u.P$=0
v.a3()},
Qj(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Qj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hpK(p.y,p.w)
w=3
return A.b(A.ly(t.a.w,B.Js),$async$Qj)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b1d(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Qj)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hVm(p.y,p.w)
t.a.bv()
case 5:w=7
return A.b(Aw.Hx(78,800),$async$Qj)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dxg(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Qj,v)},
cc9(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hW(B.o.u(1000*Date.now()),w,D.z1,null,null,null,"","","","","",1,!1,0)
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
s=v.aG3(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).O(s)},
aaG(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aaG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dxf(r),s,null,!0,!0,x.y),$async$aaG)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$aaG,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.S(d).ax.a===B.J,i=new C.uj(j),h=l.a.e,g=A.U(h).k("Y<1>"),f=A.C(new A.Y(h,new C.dxp(l),g),g.k("M.E"))
h=j?B.ef:B.c
g=A.l(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bGA,A.d(w,k,k,k,k,k,k,A.n(k,k,j?B.aP:B.ar,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ap(k,A.h6(A.aP(!1,k,!0,new A.D(B.me,A.X(B.ej,B.pi,k,k,k,17),k),B.cS,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbLJ(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jW:B.jk
t=N.bF1(l.as)
if(l.as==null)s=A.X(B.pq,j?B.bv:B.bm,k,k,k,40)
else s=k
s=A.as(A.az(k,new A.an(B.a0,k,B.ab,B.t,A.a([A.ha(u,t,s,k,42),A.ap(0,A.ha(B.bR,k,D.bTP,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcc6(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.c()
t=C.aDC(t,"Full name",B.n1,1,1,i,B.mz)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.X,new C.bks(i,u,new C.dxq(l),k)],v),B.l,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.n(k,k,j?B.bv:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bzX],q)
o=l.a.e
B.d.v(p,new A.N(o,new C.dxr(),A.U(o).k("N<1,eJ<m?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.n(k,k,j?B.bv:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bzZ],q)
B.d.v(q,new A.N(f,new C.dxt(),A.U(f).k("N<1,eJ<m?>>")))
o=A.x(A.a([t,B.am,new C.aen(i,r,"Who is their parent?",p,new C.dxu(l),k,o),B.aB,n,B.am,new C.aen(i,m,"Who is their spouse / partner?",q,new C.dxv(l),k,o)],v),B.al,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aDC(q,"Birth date",D.aoR,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aDC(m,"Birth place",B.a2e,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aDC(n,"Date of death (if deceased)",D.aqZ,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aDC(p,"Occupation",B.a3p,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.ab,B.t,w,k),B.aB,s,B.bz,new C.aeo(i,"Identity",u,k),B.af,new C.aeo(i,"Family links",o,k),B.af,new C.aeo(i,"Life details",A.x(A.a([q,B.X,m,B.X,n,B.X,p,B.X,C.aDC(r,"Notes",B.lk,5,3,i,k)],v),B.l,k,B.e,B.j,0,B.p),k),B.af,new C.aDB(i,"Child order",l.ckg(l.at),new C.dxw(l),new C.dxx(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.heT(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dxy(l):k
B.d.v(r,A.a([B.X,new C.aDB(i,"Visible in tree",u,w,new C.dxz(l),k)],v))}r.push(B.X)
w=j?B.jW:B.jk
u=A.l(14)
t=A.L(j?B.eh:B.bP,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.n(k,k,j?B.aP:B.ar,k,k,k,k,k,k,k,k,14,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.r(k,A.iQ(k,B.bR,k,B.ag,k,new C.dxA(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.n(k,k,j?B.bv:B.bm,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.p(w,k,t,u,k,k,B.n),k,k,k,k,O.alG,k,k,k))
r.push(B.bz)
w=j?B.aP:B.ar
j=j?B.eh:B.bP
r.push(A.B(A.a([A.E(A.dU(B.nZ,new C.dxs(d),A.di(k,k,k,k,k,k,k,k,k,w,k,k,B.cp,k,new A.b9(A.l(14),B.a1),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bd,A.E(A.bJ(D.f9K,k,l.gcc8(),A.bp(B.aX,k,k,0,B.c,k,B.cp,k,new A.b9(A.l(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.j,0,k,k))
r.push(B.aw)
return A.eg(B.f6,k,B.ag,h,new A.a5(420,k,A.ce(A.x(r,B.al,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),k),D.amx,k,B.alS,new A.b9(g,B.a1),k,k)},
ckg(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aeo.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.n(w,w,v?B.bv:B.bm,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jW:B.jk,s=A.l(16)
return A.x(A.a([new A.D(B.a0Q,u,w),A.r(w,this.e,B.f,w,w,new A.p(t,w,A.L(v?B.eh:B.bP,B.r,1),s,w,w,B.n),w,w,w,w,B.bi,w,w,1/0)],x.p),B.E,w,B.e,B.j,0,B.p)}}
C.bkt.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.ef:B.c,r=A.l(12),q=A.L((t?B.eh:B.bP).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.n(u,u,t?B.aP:B.ar,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.r(u,A.aM(u,B.a_,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bt(u,B.eK,u,B.wl,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.n(u,u,t?B.bv:B.bm,u,u,u,u,u,u,u,u,u,u,u,B.cA,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bR,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ak,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ad,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.f,u,u,new A.p(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aen.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.ef:B.c,s=A.l(12),r=A.L((u?B.eh:B.bP).j(0.85),B.r,1),q=A.X(B.t2,u?B.bv:B.bm,v,v,v,v),p=A.n(v,v,u?B.aP:B.ar,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.ef:B.c
return A.r(v,new A.Eq(A.a5x(v,o,A.d(w.f,v,v,v,v,v,v,A.n(v,v,u?B.bv:B.bm,v,v,v,v,v,v,v,v,v,v,v,B.cA,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.p(t,v,r,s,v,v,B.n),v,v,v,v,B.kv,v,v,v)}}
C.bks.prototype={
B(d){var w=new C.dxB(this)
return A.B(A.a([w.$3(D.wu,"Male",B.PB),B.ae,w.$3(D.ou,"Female",B.Pl),B.ae,w.$3(D.z1,"Other",B.nJ)],x.p),B.l,null,B.e,B.j,0,null,null)}}
C.aDB.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jW:B.jk,r=A.l(14),q=A.L(t?B.eh:B.bP,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.n(v,v,t?B.aP:B.ar,v,v,v,v,v,v,v,v,13,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.r(v,A.B(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.n(v,v,t?B.bv:B.bm,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.j,0,B.p),1),new C.aJL(u,B.wM,w.f,v),B.bn,new C.aJL(u,B.hY,w.r,v)],o),B.l,v,B.e,B.j,0,v,v),B.f,v,v,new A.p(s,v,q,r,v,v,B.n),v,v,v,v,B.ez,v,v,v)}}
C.aJL.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bR.j(0.12)
else w=s.c.a?B.ef:B.c
v=A.l(10)
u=A.l(10)
if(p)t=B.bR
else t=(s.c.a?B.bv:B.bm).j(0.4)
return A.aI(!1,B.a3,!0,v,A.aP(!1,u,!0,new A.a5(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.aj)}}
C.aep.prototype={
bUZ(d){switch(d.a){case 0:return B.bR
case 1:return B.bD
case 2:return B.d0}},
bV_(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aZZ(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
AM(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.ef:B.c
u=A.l(12)
t=A.L((w?B.eh:B.bP).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bR,p,p,p,18),B.au],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.n(p,p,w?B.bv:B.bm,p,p,p,p,p,p,p,p,9,p,p,B.I,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.aw,A.d(o,p,p,p,p,p,p,A.n(p,p,w?B.aP:B.ar,p,p,p,p,p,p,p,p,14,p,p,B.V,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.j,0,B.p),1))
return A.r(p,A.B(r,B.E,p,B.e,B.j,0,p,p),B.f,p,p,new A.p(v,p,t,u,p,p,B.n),p,p,p,B.cx,B.yJ,p,p,1/0)},
afh(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.n(w,w,v?B.bv:B.bm,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jW:B.jk,s=A.l(16),r=A.L(v?B.eh:B.bP,B.r,1)
return A.x(A.a([new A.D(B.a0Q,u,w),A.r(w,A.x(e,B.l,w,B.e,B.j,0,B.p),B.f,w,w,new A.p(t,w,r,s,w,w,B.n),w,w,w,w,B.bV,w,w,1/0)],x.p),B.E,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hFX(r,q),o=q.c,n=t.bUZ(o),m=N.bF1(q.f),l=t.e.a,k=l?B.ef:B.c,j=A.l(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.n(s,s,l?B.aP:B.ar,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kU?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.n(s,s,l?B.bv:B.bm,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.L(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.H,12)],x.V)
u=n.j(0.12)
l=A.as(A.r(s,A.ha(u,m,m==null?A.X(B.pq,n,s,s,s,48):s,s,52),B.f,s,s,new A.p(s,s,w,s,v,s,B.a6),s,s,s,s,B.eA,s,s,s),s,s,s)
w=n.j(0.14)
v=A.l(20)
u=A.L(n.j(0.45),B.r,1)
v=A.as(A.r(s,A.d(t.bV_(o),s,s,s,s,s,s,A.n(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.p(w,s,u,v,s,s,B.n),s,s,s,s,B.mc,s,s,s),s,s,s)
u=x.p
i=A.a([t.AM("Full name",i,B.n1)],u)
if(p>0)i.push(t.AM("Child order","#"+p,B.Pr))
r=A.a([h,B.aw,r,B.aQ,l,B.X,v,B.bz,t.afh("Identity",i),B.af,t.afh("Life details",A.a([t.AM("Birth date",q.w,D.aoR),t.AM("Birth place",q.x,B.a2e),t.AM("Date of death",q.y,D.aqZ),t.AM("Occupation",q.z,B.a3p)],u)),B.af,t.afh("Family links",A.a([t.AM("1. Parent",t.aZZ(q.d),B.Hk),t.AM("2. Spouse",t.aZZ(q.e),B.Hy)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.af,t.afh("Notes",A.a([t.AM("Notes",q,B.lk)],u))],u))
r.push(B.bz)
r.push(A.bJ(B.KY,s,new C.dxL(d),A.bp(B.aX,s,s,s,s,s,B.cp,s,new A.b9(A.l(14),B.a1),s,s,s)))
return A.eP(s,k,new A.cP(B.m0,A.ce(A.x(r,B.al,s,B.e,B.P,0,B.p),B.t,s,B.y,s,B.yQ,s,s,B.ah),s),s,s,s,B.GS,B.d7,s,new A.b9(j,B.a1),s)}}
C.GA.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bv:B.bm
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.uA,A.h6(A.aI(!1,B.a3,!0,A.l(8),A.aP(!1,A.l(8),!0,new A.a5(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.aj),u,v.c,u,u),u)}}
C.ar3.prototype={
f3(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.U(w).k("N<1,a9<m,@>>")
w=A.C(new A.N(w,new C.cf1(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jq(w,new C.cf2(),t,x.fO))
return s}}
C.ar4.prototype={
S(){return new C.aF8(A.a([],x.bF))},
gd1(){return this.c}}
C.aF8.prototype={
Y(){this.a4()
this.Ka()},
Ka(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Ka=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cf5(t.a.c),$async$Ka)
case 3:r=e
w=4
return A.b(C.Bq(t.a.c),$async$Ka)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rk(q,new C.e38(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.e39(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Ka,v)},
z6(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
KY(d,e){return this.cJI(d,e)},
cJI(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$KY=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.e3d(q,e))
t=3
w=6
return A.b(d.$0(),$async$KY)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.e3e(q))
$.eX.mE()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$KY,v)},
Ym(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ym=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.py(r,s.c,s.e),$async$Ym)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KY(new C.e35(t),"Preparing download\u2026"),$async$Ym)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ym,v)},
Yq(d){return this.bSR(d)},
bSR(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.py(r,s.c,s.e),$async$Yq)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.KY(new C.e36(t,d),"Preparing file\u2026"),$async$Yq)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yq,v)},
ahh(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ahh=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xQ.cq().MH(B.Sy,B.uD,!0),$async$ahh)
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
o=A.jK(o,0,null)
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
case 6:u=A.Hw()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahh,v)},
Z3(d){return this.c2l(d)},
c2l(d){var w=0,v=A.j(x.H),u=this
var $async$Z3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.KY(new C.e37(u,d),"Restoring family trees\u2026"),$async$Z3)
case 2:return A.h(null,v)}})
return A.i($async$Z3,v)},
Z2(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Z2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ahh(),$async$Z2)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Z3(s),$async$Z2)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Z2,v)},
a3_(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.py(r,s.c,s.e),$async$a3_)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KY(new C.e3c(t),"Creating QR code\u2026"),$async$a3_)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3_,v)},
a2B(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2B=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DE()){t.z6("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).ce(A.ec(new C.e3a(),!0,null,x.N)),$async$a2B)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Z3(r),$async$a2B)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2B,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.S(d).ax.a===B.J,n=o?B.BJ:B.iG,m=o?D.ak7:B.aP,l=o?B.aM:B.bP,k=o?B.aP:B.ar,j=new C.dho(n,m,l,k,o?B.bK:B.bm)
l=A.aH(p,p,p,p,A.X(B.eN,k,p,p,p,20),p,p,p,new C.e3g(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eI(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.n(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.dgX(!0,B.jK,B.aH,B.aH,q.r?p:q.gcAe(),j,s,"Show restore QR"),1),B.au],u))}s=q.e
r=q.r?p:q.gcwo()
t.push(A.E(C.dgX(!s,B.jq,B.b8,B.bq,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.l,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.dgX(!1,B.i_,B.aX,B.bR,q.r?p:q.gbSK(),j,"Photos & books included","Download all trees"),1),B.au],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dgX(!1,R.zu,B.av,B.aS,q.r?p:q.gc2i(),j,s,"Upload backup file"),1))
l=A.a([new C.bgG(v,l,p),B.l1,new C.adE(j,"QR restore",p),B.X,t,B.d8,new C.adE(j,"Backup files",p),B.X,A.B(r,B.l,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.l1,new C.adE(j,"One tree",p),B.X],u)
B.d.v(v,J.b8(q.d,new C.e3h(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cl(l,p,p,B.a0I,p,p,B.ah,!1)],u)
if(q.r){v=A.l(18)
t=A.L(B.aX.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dt,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ap(24,A.bm(!0,A.r(p,A.B(A.a([O.aTR,B.bd,A.E(A.d(r,p,p,p,p,p,p,A.n(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.V,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.j,0,p,p),B.f,p,p,new A.p(m,p,t,v,s,p,B.n),p,p,p,p,B.Cn,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c4(w,n,new A.an(B.a0,p,B.ab,B.t,l,p),p,!1,!1,p,p)}}
C.dho.prototype={}
C.bgG.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.l(24)
u=A.a([new A.ac(0,B.G,B.aX.j(0.32),B.kB,28)],x.V)
t=A.ap(p,A.X(B.uX,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.l(18)
q=x.p
return A.r(p,new A.an(B.a0,p,B.ab,B.t,A.a([t,new A.D(B.ad,A.B(A.a([A.r(p,D.c1R,B.f,p,p,new A.p(s,p,A.L(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.oX,A.E(A.x(A.a([D.fIq,B.T,A.d(w,p,p,p,p,p,p,A.n(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.j,0,B.p),1)],q),B.E,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.p(p,p,p,v,u,D.c9R,B.n),p,p,p,p,p,p,p,p)}}
C.adE.prototype={
B(d){var w=null
return A.B(A.a([A.r(w,w,B.f,w,w,new A.p(B.aX,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ae,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.n(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.j,0,w,w)}}
C.bgE.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.l(18),n=A.l(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.L(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aH.j(0.1),B.cI,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.l(12)
t=r.r
s=A.L(t.j(0.35),B.r,1)
return A.aI(!1,B.a3,!0,q,A.aP(!1,o,!0,A.ez(A.d3(new A.D(E.a0k,A.x(A.a([A.r(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.p(v,q,s,u,q,q,B.n),q,q,q,q,B.rZ,q,q,q),B.af,A.d(r.e,q,q,q,q,q,q,A.n(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bG,A.d(r.f,q,q,q,q,q,q,A.n(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cA,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.j,0,B.p),q),w),q,new A.p(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)}}
C.bgJ.prototype={
B(d){var w=this,v=null,u=A.l(18),t=A.l(18),s=w.c,r=A.L(s.c,B.r,1),q=B.aX.j(0.14),p=A.l(12),o=s.e,n=x.p
return A.aI(!1,B.a3,!0,v,A.aP(!1,u,!0,A.ez(new A.D(B.eZ,A.B(A.a([A.r(v,D.c14,B.f,v,v,new A.p(q,v,A.L(B.aX.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.rZ,v,v,v),B.bd,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.n(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.n(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.j,0,B.p),1),A.X(B.i_,o,v,v,v,20)],n),B.l,v,B.e,B.j,0,v,v),v),v,new A.p(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.aj)}}
C.a0C.prototype={
S(){return new C.aF7()},
gd1(){return this.c}}
C.aF7.prototype={
Y(){this.a4()
this.aad()},
aad(){var w=0,v=A.j(x.H),u=this,t
var $async$aad=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b3S(u.a.c,B.Ea),$async$aad)
case 2:t=e
if(u.c!=null)u.m(new C.e30(u,t))
return A.h(null,v)}})
return A.i($async$aad,v)},
aiJ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aiJ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.e31(q))
t=4
p=A.hru(q.a.d,B.Ea)
if(p==null){n=A.bc("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.atj(n.e,m,l,B.Ea,p,n.f),$async$aiJ)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.e32(q))
q.c.L(x.q).f.T(D.fjh)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(B.a.en(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e33(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aiJ,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.S(d).ax.a===B.J,o=p?B.jB:B.ql,n=p?B.iF:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eI(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fYZ,q,q,q,1,q,!0)
w=A.l(24)
v=A.L(B.aX.j(0.35),B.r,1)
u=A.qc(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.n(q,q,B.aX,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.r(q,A.x(A.a([B.T,u,B.bz,t,B.T,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.n(q,q,p?B.aT:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.bb,B.j,0,B.p),B.f,q,q,new A.p(n,q,v,w,q,q,B.n),q,q,q,q,B.ad,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.n(q,q,p?B.ac:B.bw,q,q,q,q,q,q,q,q,q,q,q,B.V,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcw7()
if(u)u=B.Ko
else u=A.X(r.e===!0?B.hJ:B.aoQ,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a5(1/0,q,A.es(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ch,q,q,q),t,A.di(q,q,q,q,q,q,q,q,q,B.aX,q,B.h7,q,q,q,new A.ay(B.aX.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.hW,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.n(q,q,p?B.aD:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.X)
w.push(new A.a5(1/0,q,A.bJ(B.AV,q,new C.e34(d),A.bp(B.aX,q,q,q,q,B.h7,q,q,q,q,q,q)),q))
return A.c4(m,o,new A.D(B.ad,A.x(w,B.l,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.a0D.prototype={
S(){return new C.blY(A.zY(B.yy,B.o4,B.v4))}}
C.blY.prototype={
t(){this.d.t()
this.a3()},
B(d){var w=null
return A.c4(A.eI(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fQF,w,w,w,1,w,!0),B.w,A.zX(this.d,B.c_,new C.e3i(this,d)),w,!1,!1,w,w)}}
C.b_K.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.n(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.S2,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lW.prototype={}
C.a7p.prototype={
S(){return new C.blC(null,null)}}
C.blC.prototype={
Y(){var w=this,v=null
w.a4()
w.d=A.bl(v,B.rS,v,1,v,w)
w.e=A.bl(v,B.oo,v,1,v,w)
w.a.toString
w.d.cL(0)
w.e.cL(0)},
bz(d){var w,v,u=this
u.bJ(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cL(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cL(0)},
t(){var w=this.d
w===$&&A.c()
w.t()
w=this.e
w===$&&A.c()
w.t()
this.byY()},
B(d){var w,v,u=this,t=B.d.dP(D.a6i,new C.dPn(u),new C.dPo())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cCK(A.c5(new A.h7(A.a([w,v],x.dS)),new C.dPp(u,t),null),!0)}}
C.blB.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b3A(d,e)
break
case"house":p.mj(d,e,D.dgF)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdA()
$.Q()
t=A.K()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.N(new A.o(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mp(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.Bx(d,e,12)
p.yI(d,e,B.lc,5,14)
break
case"grocery":p.cl_(d,e)
break
case"calculator":p.ckH(d,e)
break
case"lumber":p.cl7(d,e)
break
case"kitchen":p.cl2(d,e)
break
case"landscape":p.mj(d,e,D.dhh)
s=new A.aG($.Q().r,B.ai,null,null,A.a([],x.v))
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
p.Bx(d,e,8)
p.yI(d,e,B.ia,4,18)
break
case"plumbing":p.clg(d,e)
break
case"electrical":p.mj(d,e,D.dsQ)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.Q()
u=A.K()
u.r=B.c.j(q*0.12).gp(0)
d.ar(new A.a1(0,0,0+e.a,0+e.b),u)
p.mp(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mp(d,e,B.m4.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.Bx(d,e,10)
break
case"store":p.clq(d,e)
break
case"paint_remodel":p.clb(d,e)
break
case"roofing":p.cli(d,e)
break
case"warehouse":p.clx(d,e)
break
case"vehicles":p.clv(d,e)
break
case"farm":p.ckU(d,e)
break
case"restaurant":p.clh(d,e)
break
case"tools":p.clt(d,e)
break
case"wallet":p.clw(d,e)
break
case"concrete":p.ckN(d,e)
break
case"blueprint":p.ckF(d,e)
break
default:p.b3A(d,e)}},
mj(d,e,f){var w,v=new A.a1(0,0,0+e.a,0+e.b)
$.Q()
w=A.K()
w.sav(new A.a8(B.aA,B.aE,B.x,f,null,null).aK(0,v))
d.ar(v,w)},
mp(d,e,f,g,h){var w,v,u,t=new A.o(e.a/2,e.b/2),s=e.gdA()/2-h
$.Q()
w=A.K()
w.b=B.a9
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cC(A.bY(t,s),u,u+0.1439896632895322-u,!1,w)}},
yI(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdA()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.Q()
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.N(new A.o(q+t*o,p+s*o),3.5,r)}},
Bx(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.i.F(t*0.17,0.9)
q=B.i.F(t*0.23,0.85)
$.Q()
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.N(new A.o(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b3A(d,e){var w,v=this
v.mj(d,e,D.drb)
w=v.c
v.mp(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mp(d,e,B.bM.j(0.45),-w*3.141592653589793*1.4,22)
v.bQG(d,e,B.hF,w)
v.yI(d,e,B.c.j(0.7),6,8)},
bQG(d,e,f,g){var w,v,u,t,s,r
$.Q()
w=A.K()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.ar(new A.a1(16,r,t,r+3),w)}},
cl_(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mj(d,e,D.cvy)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.aq(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=D.deQ[B.o.F(t,4)].j(0.85).gp(0)
d.N(new A.o(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mp(d,e,B.c.j(0.35),w,16)
l.yI(d,e,B.ia,5,12)},
ckH(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mj(d,e,D.cvH)
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
p=A.fq(h,B.cs,h,h,h,h,B.a5,B.bX,h,B.dA,B.bY)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dj4[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb1(0,new A.eo(r,h,h,B.cK,h,h,h,h,h,h,new A.F(!0,q,h,h,h,h,14+m*4,B.I,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e5()
p.a5(d,new A.o(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.aq(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cvJ[o]
l=B.kK.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb1(0,new A.eo(m,h,h,B.cK,h,h,h,h,h,h,new A.F(!0,l,h,h,h,h,12+k*3,B.I,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e5()
p.a5(d,new A.o(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.aq(o,3)*0.38)+Math.sin(n)*6))}i.mp(d,e,B.c.j(0.35),w*1.5,14)
i.mp(d,e,B.eL.j(0.55),-v*3.141592653589793*2,8)
i.mp(d,e,B.yd.j(0.4),r*2.8,22)
i.yI(d,e,B.qc,8,10)
i.Bx(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.i.F(w+o*0.22,0.9)
$.Q()
v=new A.ao(B.O,B.M,B.R,B.S,B.Q)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.o(12,j),new A.o(t,j),v)}},
cl7(d,e){var w,v,u,t,s,r,q,p,o=this
o.mj(d,e,V.aAC)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bn(new A.a1(20,r,u,r+10),B.hQ)
$.Q()
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=A.ar(B.fy,B.o9,(s+1)/2).gp(0)
d.am(q,p)}o.mp(d,e,B.fy.j(0.35),w,15)
o.Bx(d,e,8)},
cl2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mj(d,e,D.dfk)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.i.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.i.F(s*0.13,0.7)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.N(new A.o(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mp(d,e,B.bM.j(0.4),-w*3.141592653589793*2.2,11)
l.yI(d,e,B.q9,4,14)},
clg(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mj(d,e,D.d3o)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.i.F(s,0.12)
$.Q()
o=new A.ao(B.O,B.M,B.R,B.S,B.Q)
o.b=B.a9
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.N(new A.o(w,u),q*(0.12+r*0.14+p),o)}n.yI(d,e,B.ph,6,12)
n.mp(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
clq(d,e){var w,v,u,t,s,r,q,p=this
p.mj(d,e,D.cJq)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bn(new A.a1(r,14,r+u,22),B.iB)
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.Q)
q.r=A.ar(B.fn,B.bM,(s+1)/2).gp(0)
d.am(r,q)}p.mp(d,e,B.c.j(0.3),w,16)
p.Bx(d,e,8)
p.yI(d,e,B.w3,5,13)},
clb(d,e){var w,v,u,t,s,r,q
this.mj(d,e,D.d9M)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.i.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bn(new A.a1(r,q,r+8,q+(18+s*22)),B.hR)
$.Q()
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.r=[B.ir,B.dj,B.bM,B.er][t].j(0.85).gp(0)
d.am(q,r)}this.mp(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cli(d,e){var w,v,u,t,s,r,q
this.mj(d,e,D.d76)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.i.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.Q)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.o(u*(0.1+r),s),new A.o(u*(0.18+r),s+10),q)}this.yI(d,e,B.cu,7,11)},
clx(d,e){var w,v,u,t,s,r,q,p
this.mj(d,e,D.cMa)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bn(new A.a1(q,p,q+(t-s*8),p+16),B.hQ)
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.Q)
q.r=A.ar(B.cu,B.aP,(Math.sin(r)+1)/2).gp(0)
d.am(p,q)}this.mp(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
clv(d,e){var w,v,u,t,s,r,q
this.mj(d,e,D.dx0)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.i.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.bn(new A.a1(s,r,s+28,r+8),B.hQ)
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.Q)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.am(r,q)}this.Bx(d,e,6)},
ckU(d,e){var w,v,u,t,s,r,q,p
this.mj(d,e,D.ddU)
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
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=B.hq.j(0.85).gp(0)
p.c=3
d.ah(new A.o(q,v),new A.o(q+s*6,t),p)}this.mp(d,e,B.m4.j(0.35),w,14)},
clh(d,e){var w,v,u,t,s,r,q=this
q.mj(d,e,D.dgu)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bs(new A.o(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.Q()
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.r=B.c.j(0.22).gp(0)
d.bZ(s,r)}q.yI(d,e,B.q9,5,16)
q.Bx(d,e,7)},
clt(d,e){var w,v,u,t,s,r,q,p,o=this
o.mj(d,e,D.dup)
w=o.c
v=w*3.141592653589793
o.mp(d,e,B.o9.j(0.55),v*3,10)
o.mp(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.Q()
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=B.o9.j(0.8).gp(0)
d.N(new A.o(v+r*34,u+q*22),4,p)}},
clw(d,e){var w,v,u,t,s,r,q,p,o=this
o.mj(d,e,D.dxG)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bn(new A.a1(q,p,q+36,p+22),B.iB)
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.Q)
q.r=A.ar(B.ia,B.m4,r).gp(0)
d.am(p,q)}o.Bx(d,e,9)
o.mp(d,e,B.c.j(0.4),w*2.2,12)},
ckN(d,e){var w,v,u,t,s,r,q,p
this.mj(d,e,D.dm_)
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
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=B.bP.j(0.85).gp(0)
d.N(new A.o(v+t*34,u+s*34),3,p)}},
ckF(d,e){var w,v,u,t,s,r,q
this.mj(d,e,D.dhB)
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
u.r=B.dj.j(0.45).gp(0)
d.ar(new A.a1(0,q,0+v,q+6),u)
this.mp(d,e,B.lc.j(0.45),-r*3.141592653589793*2,11)},
aD(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.au4.prototype={
a0f(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0f=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aRR(),$async$a0f)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a9F(s),$async$a0f)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a0f,v)},
ahi(d){return this.cnP(d)},
cnP(d){var w=0,v=A.j(x.H),u=this,t
var $async$ahi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.isS(d),$async$ahi)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ahi,v)},
B(d){var w,v,u=null,t=A.S(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.J?B.jW:B.jk
w=x.p
v=A.a([C.aSe(!0,B.rm,1/0,B.qH,u,s,1/0)],w)
if(!r)v.push(new A.bN(new A.p(u,u,u,u,u,new A.a8(B.b5,B.b9,B.x,A.a([B.L,B.w.j(0.35)],x.O),u,u),B.n),B.bh,new A.bM(B.b5,u,u,new A.D(B.us,A.d("Pick a theme or your own photo",u,u,u,u,u,u,A.n(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.V,u,u,!0,u,u,u,u,u,B.aBz,u,u),u,u,u),u),u),u))
v.push(A.ap(8,A.B(A.a([A.E(A.dh(D.bVz,D.fEE,new C.cou(this,d),A.bp(B.aX,u,u,u,B.c,u,B.k2,u,u,u,u,B.cf)),1),B.ae,A.E(A.es(D.c39,D.fTT,this.gceK(),A.di(u,u,B.w.j(0.35),u,u,u,u,u,u,B.c,u,u,B.k2,u,u,D.b5d,u,u,u,B.cf)),1)],w),B.l,u,B.e,B.j,0,u,u),u,u,8,8,u,u))
return new A.fH(1.7777777777777777,A.aI(!1,B.a3,!0,B.rm,new A.an(B.a0,u,B.b4,B.t,v,u),B.aq,t,0,u,u,u,u,u,B.aj),u)}}
C.aNa.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.aVa.prototype={}
C.aV9.prototype={}
C.aTc.prototype={}
C.a_g.prototype={
S(){return new C.aAk()}}
C.aAk.prototype={
Y(){var w,v,u=this
u.a4()
u.a.toString
w=new A.ba("",B.b7,B.aR)
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(w,v)},
t(){var w=this.d
w===$&&A.c()
w.U$=$.aw()
w.P$=0
this.a3()},
KO(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.L(x.q).f.T(D.fjN)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).O(new C.aVa(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.S(d).ax.a===B.J,l=m?B.ef:B.c,k=A.l(20),j=A.r(n,D.c2P,B.f,n,n,new A.p(B.aX.j(0.15),n,n,A.l(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.n(n,n,m?B.aP:B.ar,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bG,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.n(n,n,m?B.bv:B.bm,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.j,0,B.p),1)
j=A.B(A.a([j,B.bd,i,A.aH(n,n,n,n,A.X(B.cy,m?B.bv:B.bm,n,n,n,n),n,n,n,new C.d8z(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.n(n,n,m?B.bv:B.bm,n,n,n,n,n,n,n,n,12,n,n,B.V,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.n(n,n,m?B.bv:B.bm,n,n,n,n,n,n,n,n,11,n,n,B.cA,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hrK(new C.d8A(o),o.e)
u=o.d
u===$&&A.c()
t=A.n(n,n,m?B.aP:B.ar,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jW:B.jk
r=A.l(12)
q=A.l(12)
p=m?B.eh:B.bP
t=A.aM(n,B.a_,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bt(n,new A.b6(4,r,B.dq),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d8B(o),n,!1,n,n,!1,n,!0,n,B.ad,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,A_.Kw,n,n,n,n)
u=m?B.aP:B.ar
m=m?B.eh:B.bP
return A.eP(n,l,new A.cP(B.m0,A.ce(A.x(A.a([j,B.aQ,i,B.aw,w,B.T,v,B.aQ,t,B.bz,A.B(A.a([A.E(A.dU(B.dn,new C.d8C(d),A.di(n,n,n,n,n,n,n,n,n,u,n,n,B.cp,n,new A.b9(A.l(12),B.a1),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.au,A.E(A.bJ(D.fU8,n,o.ga3l(),A.bp(B.aX,n,n,n,B.c,n,B.cp,n,new A.b9(A.l(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.j,0,n,n)],h),B.E,n,B.e,B.P,0,B.p),B.t,n,B.y,n,B.Co,n,n,B.ah),n),n,n,n,B.yS,B.d7,n,new A.b9(k,B.a1),n)}}
C.a_f.prototype={
S(){return new C.aAj()}}
C.aAj.prototype={
Y(){this.a4()
var w=$.aw()
this.d!==$&&A.aQ()
this.d=new A.au(B.ax,w)},
t(){var w=this.d
w===$&&A.c()
w.U$=$.aw()
w.P$=0
this.a3()},
KO(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.L(x.q).f.T(D.fhp)
return}v=this.c
v.toString
A.a6(v,!1).O(new C.aV9(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.S(d).ax.a===B.J,o=p?B.ef:B.c,n=A.l(20),m=A.r(q,D.c_e,B.f,q,q,new A.p(B.bR.j(0.15),q,q,A.l(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.n(q,q,p?B.aP:B.ar,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bG,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.n(q,q,p?B.bv:B.bm,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.j,0,B.p),1)
m=A.B(A.a([m,B.bd,l,A.aH(q,q,q,q,A.X(B.cy,p?B.bv:B.bm,q,q,q,q),q,q,q,new C.d8v(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.j,0,q,q)
l=B.aX.j(p?0.12:0.08)
w=A.l(12)
v=A.L(B.aX.j(0.25),B.r,1)
u=A.X(B.aoC,B.aX.j(0.9),q,q,q,18)
l=A.r(q,A.B(A.a([u,B.au,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.n(q,q,p?B.aP:B.ar,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.j,0,q,q),B.f,q,q,new A.p(l,q,v,w,q,q,B.n),q,q,q,q,B.bF,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.n(q,q,p?B.aP:B.ar,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jW:B.jk
t=A.l(12)
s=A.l(12)
r=p?B.eh:B.bP
v=A.aM(q,B.a_,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bt(q,new A.b6(4,t,B.dq),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d8w(this),q,!1,q,q,!1,q,!0,q,B.ad,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.l2,q,q,q,q)
w=p?B.aP:B.ar
p=p?B.eh:B.bP
return A.eP(q,o,new A.cP(B.m0,A.ce(A.x(A.a([m,B.aQ,l,B.aB,v,B.bz,A.B(A.a([A.E(A.dU(B.dn,new C.d8x(d),A.di(q,q,q,q,q,q,q,q,q,w,q,q,B.cp,q,new A.b9(A.l(12),B.a1),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.au,A.E(A.bJ(D.h0f,q,this.ga3l(),A.bp(B.bR,q,q,q,B.c,q,B.cp,q,new A.b9(A.l(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.j,0,q,q)],k),B.E,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.Co,q,q,B.ah),q),q,q,q,B.yS,B.d7,q,new A.b9(n,B.a1),q)}}
C.ZN.prototype={
S(){return new C.az2()}}
C.az2.prototype={
Y(){var w,v=this
v.a4()
w=$.aw()
v.d!==$&&A.aQ()
v.d=new A.au(B.ax,w)
v.e!==$&&A.aQ()
v.e=new A.au(new A.ba("1",B.b7,B.aR),w)
v.f!==$&&A.aQ()
v.f=new A.au(B.ax,w)
v.r!==$&&A.aQ()
v.r=new A.au(B.ax,w)},
t(){var w,v=this,u=v.d
u===$&&A.c()
w=u.U$=$.aw()
u.P$=0
u=v.e
u===$&&A.c()
u.U$=w
u.P$=0
u=v.f
u===$&&A.c()
u.U$=w
u.P$=0
u=v.r
u===$&&A.c()
u.U$=w
u.P$=0
v.a3()},
gK5(){var w,v=this.e
v===$&&A.c()
w=A.cX(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gakt(){var w=this.f
w===$&&A.c()
w=A.cX(B.a.i(w.a.a))
return w==null?0:w},
gb6n(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aQJ(d){var w,v=B.i.D(this.gK5()+d,0.25,999999),u=B.i.iH(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.i.M(v))
else{u=B.i.ad(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb1(0,u)
this.m(new C.cGR())},
azM(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aX,w,w,w,20):w,u=d.a,t=u?B.jW:B.jk,s=A.l(14),r=A.l(14)
u=u?B.eh:B.bP
return A.bt(w,new A.b6(4,s,B.dq),w,B.bF,w,w,w,w,!0,new A.b6(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.l(14),B.adW),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
ceL(d,e,f){return this.azM(d,e,f,null)},
KO(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gakt()<=0){s.c.L(x.q).f.T(D.flH)
return}r=s.c
r.toString
v=s.gK5()
u=s.gakt()
t=s.gb6n()
A.a6(r,!1).O(new C.aTc(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.S(d).ax.a===B.J,m=new C.uj(n),l=n?B.ef:B.c,k=A.l(24),j=x.O,i=A.a([B.aX.j(0.22),B.bR.j(0.14)],j),h=A.l(14)
i=A.r(o,D.bTv,B.f,o,o,new A.p(o,o,A.L(B.aX.j(0.35),B.r,1),h,o,new A.a8(B.a7,B.aa,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.n(o,o,n?B.aP:B.ar,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bG,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.n(o,o,n?B.bv:B.bm,o,o,o,o,o,o,o,o,12,o,o,B.cA,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.j,0,B.p),1)
i=A.B(A.a([i,B.bd,h,A.aH(o,o,o,o,A.X(B.cy,n?B.bv:B.bm,o,o,o,o),o,o,o,new C.cGX(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.n(o,o,n?B.aP:B.ar,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.a_,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.azM(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Pz),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,A_.Kw,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.n(o,o,n?B.bv:B.bm,o,o,o,o,o,o,o,o,12,o,o,B.I,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jW:B.jk
t=A.l(14)
s=A.L(n?B.eh:B.bP,B.r,1)
r=A.aH(o,o,o,o,A.X(B.wM,n?B.aP:B.ar,o,o,o,20),o,o,o,new C.cGY(p),o,o,o,o,o,B.cf)
q=p.e
q===$&&A.c()
q=A.aM(o,B.a_,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.c4I,B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.ea,o,o,o,1,o,o,!1,"\u2022",o,new C.cGZ(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,A.n(o,o,n?B.aP:B.ar,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.r(o,A.B(A.a([r,new A.a5(52,o,q,o),A.aH(o,o,o,o,A.X(B.hY,n?B.aP:B.ar,o,o,o,20),o,o,o,new C.cH_(p),o,o,o,o,o,B.cf)],w),B.l,o,B.e,B.P,0,o,o),B.f,o,o,new A.p(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.n(o,o,n?B.aP:B.ar,o,o,o,o,o,o,o,o,16,o,o,B.V,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.au,A.E(A.aM(o,B.a_,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.azM(m,"Amount","0.00",B.hZ),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.ea,o,o,o,1,o,o,!1,"\u2022",o,new C.cH0(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.ao,o,o,o,o),1)],w),B.E,o,B.e,B.j,0,o,o)
t=x.gv
u=A.C(new A.N(D.dai,new C.cH1(p,m),t),t.k("ak.E"))
i=A.a([i,B.bz,v,B.aB,h,B.T,s,B.af,A.bW(B.bH,u,B.bs,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.n(o,o,n?B.aP:B.ar,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.X,A.aM(o,B.a_,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.ceL(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cH2(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.l2,o,o,o,o)],w))}i.push(B.aQ)
h=B.aX.j(n?0.18:0.1)
j=A.a([h,B.bR.j(n?0.12:0.06)],j)
h=A.l(16)
v=A.L(B.aX.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.n(o,o,n?B.bv:B.bm,o,o,o,o,o,o,o,o,11,o,o,B.V,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gK5()===B.i.iH(p.gK5())?B.i.M(p.gK5()):p.gK5()
s=p.gb6n()
r=A.Bs(p.gakt())
i.push(A.r(o,A.B(A.a([A.E(A.x(A.a([u,B.aw,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.n(o,o,n?B.bv:B.bm,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.j,0,B.p),1),C.bFP(p.gK5()*p.gakt(),B.b2,!1,B.u)],w),B.l,o,B.e,B.j,0,o,o),B.f,o,o,new A.p(o,o,v,h,o,new A.a8(B.a7,B.aa,B.x,j,o,o),B.n),o,o,o,o,B.jo,o,o,o))
i.push(B.bz)
j=A.l(14)
h=n?B.eh:B.bP
h=A.di(o,o,o,o,o,o,o,o,o,o,o,o,B.cp,o,new A.b9(j,B.a1),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.B(A.a([A.E(A.dU(A.d("Cancel",o,o,o,o,o,o,A.n(o,o,n?B.aP:B.ar,o,o,o,o,o,o,o,o,o,o,o,B.V,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cH3(d),h),1),B.au,A.E(A.dh(D.as5,D.fX8,p.ga3l(),A.bp(B.aX,o,o,0,B.c,o,B.cp,o,new A.b9(A.l(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.j,0,o,o))
return A.eP(o,l,new A.cP(Ae.XA,A.ce(A.x(i,B.al,o,B.e,B.P,0,B.p),B.t,o,B.y,o,Ah.rX,o,o,B.ah),o),o,o,o,B.Oc,B.d7,o,new A.b9(k,B.a1),o)}}
C.a2o.prototype={
S(){return new C.bym()}}
C.bym.prototype={
Y(){var w,v,u=this
u.a4()
w=u.a.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,B.b7,B.aR),v)},
t(){var w=this.d
w===$&&A.c()
w.U$=$.aw()
w.P$=0
this.a3()},
B(d){var w,v,u,t=this,s=null,r=A.S(d).ax.a===B.J,q=r?B.ef:B.c,p=A.l(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.n(s,s,r?B.aP:B.ar,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.n(s,s,r?B.aP:B.ar,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jW:B.jk
v=A.aM(s,B.a_,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bt(s,new A.b6(4,A.l(12),B.dq),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fmg(t,d),s,!1,s,s,!1,s,!0,s,B.ad,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.ao,s,s,s,s)
u=A.E(A.dU(B.dn,new C.fmh(d),s),1)
r=A.bp(B.bR,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eP(s,q,new A.D(B.Co,A.x(A.a([o,B.aB,v,B.aQ,A.B(A.a([u,B.au,A.E(A.bJ(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fmi(t,d),r),1)],w),B.l,s,B.e,B.j,0,s,s)],w),B.l,s,B.e,B.P,0,B.p),s),s,s,s,s,B.d7,s,new A.b9(p,B.a1),s)}}
C.acH.prototype={
a7(){return"WorksheetFrameStyle."+this.b}}
C.Go.prototype={
S(){return new C.byk(null,null)}}
C.byk.prototype={
Y(){var w,v=this
v.a4()
w=A.bl(null,D.bAw,null,1,null,v)
w.cL(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBi()},
gbCU(){switch(this.a.r.a){case 1:return A.a([B.aX,B.bR,B.b2],x.O)
case 2:return A.a([B.bx,B.aX,B.b2],x.O)
case 3:return A.a([B.aH,B.cg,B.jX],x.O)
case 4:return A.a([B.hr,B.bR,B.fo],x.O)
case 0:return A.a([B.aX,B.bR,B.b2],x.O)}},
B(d){var w=A.S(d),v=this.d
v===$&&A.c()
return new A.en(A.c5(v,new C.fme(this,new C.uj(w.ax.a===B.J)),null),null)}}
C.ayW.prototype={
S(){return new C.byl(null,null)}}
C.byl.prototype={
Y(){var w,v=this
v.a4()
w=A.bl(null,B.nC,null,1,null,v)
w.cL(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBj()},
B(d){var w=this.d
w===$&&A.c()
return A.c5(w,new C.fmf(this),null)}}
C.byj.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bn(new A.a1(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aN(w,w))
u=new A.aG($.Q().r,B.ai,null,null,A.a([],x.v))
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
w=A.xN(u)
t=A.a([],x.U)
w=new A.rx(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.bj(A.jI(y.B));--r
q=new A.BS(w,r)
w.iy()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aUi(d,q,r,o,0,0.2,4.2,0.92)
p.aUi(d,q,r,s,0.52,0.11,3.2,0.58)}},
aUi(d,e,f,g,h,i,j,k){var w,v,u,t=B.i.F(g+h,1)*f,s=A.hOm(e.a.a,e,t,t+f*i,!0),r=A.bE9(s.glX().a.getBounds())
$.Q()
w=A.K()
w.b=B.a9
w.c=j
w.d=B.bu
w.f=!0
v=this.f
u=k*this.e
w.sav(new A.a8(B.a7,B.aa,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Iv,null).aK(0,r))
d.af(s,w)},
aD(d){return d.b!==this.b||d.d!==this.d}}
C.aPi.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aPj.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.uj.prototype={}
C.au3.prototype={
S(){return new C.aGC()},
ge3(){return this.c}}
C.aGC.prototype={
Y(){var w=this
w.a4()
w.d=w.a.d
w.ai8()},
t(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Ma(w,v)
this.a3()},
ai8(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ai8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bEi(t.c,t.d.a),$async$ai8)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eUY(u,s))
return A.h(null,v)}})
return A.i($async$ai8,v)},
QL(){var w=0,v=A.j(x.H),u=this,t,s
var $async$QL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eUP(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Ma(t,s),$async$QL)
case 2:if(u.c!=null)u.m(new C.eUQ(u))
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
return A.b(A.cg(null,null,!0,null,new C.eUW(t,new C.uj(p.ax.a===B.J)),s,null,!0,!0,x.T),$async$Ri)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a9F(q),$async$Ri)
case 6:case 5:t.m(new C.eUX(t,r))
w=7
return A.b(t.QL(),$async$Ri)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Ri,v)},
Wv(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.isD(r),$async$Wv)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eUK(t,new C.rp(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.QL(),$async$Wv)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wv,v)},
cjR(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hFT(t,new C.eUO(u),w,v)},
ac1(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.r(w,w,B.f,w,w,new A.p(w,w,new A.bH(new A.ay(v,2.5,B.r,-1),B.a1,B.a1,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b5_,w,w,B.n),w,22,w,w,w,w,w,22)},
ab3(d){return this.bOV(d)},
bOV(d){var w=0,v=A.j(x.H),u=this
var $async$ab3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eUN(u,d))
w=2
return A.b(u.QL(),$async$ab3)
case 2:return A.h(null,v)}})
return A.i($async$ab3,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.S(a2).ax.a===B.J,e=f?B.c5:B.iG,d=A.l(8),a0=A.X(Y.a1X,f?B.bv:B.bm,g,g,g,16),a1=x.p
a0=A.aP(!1,d,!0,new A.D(B.GZ,A.B(A.a([a0,B.bn,A.d("Back to Projects",g,g,g,g,g,g,A.n(g,g,f?B.bv:B.bm,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.P,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eUZ(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a_(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b4,B.t,A.a([A.by(A.l(22),C.aSe(!0,A.l(22),1/0,B.qH,g,d,1/0),B.aq),A.ap(10,A.dh(D.bY9,D.fZx,h.gb4j(),A.bp(B.w.j(0.45),g,g,g,B.c,g,B.hg,g,new A.b9(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.l(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aX.j(f?0.5:0.38),B.eT,22),new A.ac(-4,B.G,B.bR.j(0.2),B.H,32)],w)
u=A.l(17)
t=A.L(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.H,10)],w)
s=A.l(16)
r=h.d
v=A.r(g,A.r(g,A.by(s,new A.an(B.a0,g,B.b4,B.t,A.a([C.aSe(!0,A.l(16),1/0,B.P0,g,r.c,1/0),new A.bN(new A.p(g,g,g,g,g,new A.a8(B.b5,B.b9,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bh,g,g),A.ap(g,h.ac1(!0),g,g,8,g,8,g),A.ap(g,A.cDu(h.ac1(!0),!0,!1),g,g,g,8,8,g),A.ap(8,A.cDu(h.ac1(!1),!1,!0),g,g,8,g,g,g),A.ap(8,A.cDu(h.ac1(!1),!0,!0),g,g,g,8,g,g),A.ap(10,A.dh(D.bU5,D.fSO,h.gb4j(),A.bp(B.w.j(0.45),g,g,g,B.c,g,B.hg,g,new A.b9(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.p(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.p(g,g,g,d,v,D.c6p,B.n),g,g,g,g,B.me,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.n(g,g,f?B.aP:B.ar,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.l(22)
u=x.O
u=f?A.a([D.bfQ,B.oe,B.hd],u):A.a([B.b2,B.aX,B.bR],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aX.j(f?0.45:0.35),B.eT,24)],t)
r=A.l(22)
p=A.ap(g,A.X(B.jG,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.l(20)
m=A.L(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.r(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.n(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.p(o,g,m,n,g,g,B.n),g,g,g,g,B.he,g,g,g)],a1),B.l,g,B.e,B.j,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.n(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bFP(h.d.gxI(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.T,A.d("Sum of all budget line items",g,g,g,g,g,g,A.n(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cA,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.j,0,B.p),1)
n=A.l(14)
m=A.l(14)
l=B.c.j(0.12)
k=A.L(B.ht.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aH.j(0.28),B.cI,14)],t)
j=B.aH.j(0.22)
i=A.l(10)
u=A.r(g,A.by(r,new A.an(B.a0,g,B.ab,B.t,A.a([p,new A.D(D.bFl,A.B(A.a([o,B.au,A.aI(!1,B.a3,!0,g,A.aP(!1,n,!0,A.ez(new A.D(U.wn,A.x(A.a([A.r(g,D.arG,B.f,g,g,new A.p(j,g,A.L(B.aH.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cl,g,g,g),B.fP,D.fHs],a1),B.l,g,B.e,B.P,0,B.p),g),g,new A.p(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcjQ(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.aj)],a1),B.l,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.p(g,g,g,v,s,new A.a8(B.aA,B.aE,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fH(1.7777777777777777,d,g),B.aQ,w,B.T,u,B.bz,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.n(g,g,f?B.aP:B.ar,g,g,g,g,g,g,g,g,16,g,g,B.I,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b3,A.dh(At.a3N,D.fFi,h.gbDn(),A.bp(B.aX,g,g,g,B.c,g,B.iw,g,new A.b9(A.l(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.j,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.ef:B.c
v=A.l(14)
u=A.L(f?B.eh:B.bP,B.r,1)
t=A.X(B.a2h,f?B.bv:B.bm,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.n(g,g,f?B.aP:B.ar,g,g,g,g,g,g,g,g,g,g,g,B.V,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.r(g,A.x(A.a([t,B.X,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.n(g,g,f?B.bv:B.bm,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.j,0,B.p),B.f,g,g,new A.p(w,g,u,v,g,g,B.n),g,g,g,g,B.qD,g,g,1/0))}else B.d.v(d,new A.N(w,new C.eV_(h,new C.uj(f)),A.U(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.Cd,A.as(A.n5(g,f?B.bv:B.bm,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c4(g,e,A.bm(!0,A.x(A.a([new A.D(B.Cg,a0,g),A.E(A.ce(A.x(d,B.E,g,B.e,B.j,0,B.p),B.t,g,B.y,g,E.yR,g,g,B.ah),1)],a1),B.E,g,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bH3(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.ef:B.c,p=A.l(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cI,12)],x.V),n=A.l(16),m=A.r(u,u,B.f,u,u,D.b7N,u,u,u,u,u,u,u,5),l=B.aX.j(r?0.22:0.12),k=A.l(12)
l=A.r(u,A.X(s?B.ie:B.hy,B.b2,u,u,u,20),B.f,u,u,new A.p(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bL
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.n(u,u,r?B.aP:B.ar,u,u,u,u,u,u,u,u,15,u,u,B.I,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd_m()
v=A.Bs(d.d)
B.d.v(t,A.a([B.aw,A.d(w+" "+v,u,u,u,u,u,u,A.n(u,u,r?B.bv:B.bm,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.bb,B.P,0,B.p)}t=A.E(t,1)
k=A.a([B.aX.j(0.14),B.bR.j(0.1)],x.O)
w=A.l(12)
k=A.r(u,C.bFP(d.c*d.d,B.b2,!1,B.u),B.f,u,u,new A.p(u,u,u,w,u,new A.a8(B.a7,B.aa,B.x,k,u,u),B.n),u,u,u,u,B.hg,u,u,u)
w=x.p
return A.r(u,A.by(n,new A.EO(A.B(A.a([m,A.E(new A.D(B.alz,A.B(A.a([l,B.bd,t,B.ae,k,A.aH(u,u,u,u,A.X(B.cy,(r?B.bv:B.bm).j(0.75),u,u,u,20),u,u,u,new C.eUL(this,d),u,u,u,u,u,B.cf)],w),B.l,u,B.e,B.j,0,u,u),u),1)],w),B.al,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.b6C,new A.p(q,u,u,p,o,u,B.n),u,u,u,B.d5,u,u,u,u)}}
C.aeK.prototype={
EZ(d){return this.bQi(d)},
bQi(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$EZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.py(d,o,!1),$async$EZ)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
w=4
return A.b(A.bQ(Ag.Cb,null,x.H),$async$EZ)
case 4:s=t.d
w=5
return A.b(C.fW1(!0,o,s),$async$EZ)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Hj(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$EZ)
case 6:p=f
w=7
return A.b(A.px(o,!1),$async$EZ)
case 7:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$EZ,v)},
a0h(d){return this.cAf(d)},
cAf(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0h=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.py(d,s,!1),$async$a0h)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
A.hy(d,new C.atY(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.px(s,!1),$async$a0h)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0h,v)},
QM(d){return this.cwj(d)},
cwj(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$QM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(A.hy(d,D.aLj,!0,"NgmyWorksheetProjectScan",x.N),$async$QM)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bFQ(s),$async$QM)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.L(x.q).f.T(D.fkO)
w=1
break}q=C.hhg(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dL(p,x.H),$async$QM)
case 5:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$QM,v)},
a0i(d){return this.cIy(d)},
cIy(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0i=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(C.bFm(),$async$a0i)
case 3:s=f
if(s==null){w=1
break}r=C.hhg(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dL(q,x.H),$async$a0i)
case 4:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a0i,v)},
B(d){var w=this,v=null,u=A.S(d).ax.a===B.J,t=new C.uj(u),s=w.d.d.length,r=u?B.ef:B.c,q=A.l(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kB,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.wm,A.r(v,A.x(A.a([w.cyP(d,t,s),new A.D(D.bEK,A.x(A.a([w.b7i(t,"QR restore"),B.X,A.B(A.a([w.b2i(t,!0,B.jK,B.aH,B.aH,new C.eV1(w,d),"Show to scan","QR code"),B.au,w.azN(t,B.jq,B.b8,B.bq,new C.eV2(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.j,0,v,v),B.d8,w.b7i(t,"Backup files"),B.X,A.B(A.a([w.azN(t,B.i_,B.aX,B.bR,new C.eV3(w,d),"Full copy","Backup file"),B.au,w.azN(t,R.zu,B.av,B.aS,new C.eV4(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.j,0,v,v)],o),B.E,v,B.e,B.j,0,B.p),v)],o),B.l,v,B.e,B.P,0,B.p),B.aq,v,v,new A.p(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cyP(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eW,B.cG,B.fW],k):A.a([B.b2,B.aX,B.bR],k)
w=A.ap(l,A.X(B.uX,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.as(A.r(l,l,B.f,l,l,new A.p(B.c.j(0.35),l,l,A.l(4),l,l,B.n),l,4,l,B.kR,l,l,l,36),l,l,l)
u=A.l(14)
t=A.L(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cI,12)],x.V)
r=this.d
s=A.r(l,C.aSe(!0,A.l(13),64,D.bPn,l,r.c,64),B.aq,l,l,new A.p(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.n(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.I,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,I.abm,l,l,l)
r=C.bFP(r.gxI(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.l(20)
o=A.L(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.r(l,new A.an(B.a0,l,B.ab,B.t,A.a([w,new A.D(D.bF6,A.x(A.a([v,A.B(A.a([s,B.ev,A.E(A.x(A.a([u,B.aw,t,B.T,A.B(A.a([r,B.ae,A.r(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.n(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.p(q,l,o,p,l,l,B.n),l,l,l,l,B.h_,l,l,l)],m),B.l,l,B.e,B.j,0,l,l)],m),B.E,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,A.X(B.cy,B.c.j(0.85),l,l,l,l),l,l,l,new C.eV0(d),l,l,l,A.o1(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aTF,l,l,l,l),l,l)],m),B.E,l,B.e,B.j,0,l,l)],m),B.l,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.p(l,l,l,l,l,new A.a8(B.aA,B.aE,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b7i(d,e){var w=null,v=A.r(w,w,B.f,w,w,new A.p(B.aX,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ae,A.d(e.toUpperCase(),w,w,w,w,w,w,A.n(w,w,d.a?B.bv:B.bm,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.j,0,w,w)},
b2i(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.l(18),p=A.l(18),o=d.a,n=o?D.ak7:B.aP
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.eh:B.bP
w=w.j(o?0.8:1)}w=A.L(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aH.j(0.12),B.cI,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.l(12)
s=A.L(h.j(0.35),B.r,1)
t=A.r(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.p(u,r,s,t,r,r,B.n),r,r,r,r,B.rZ,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.n(r,r,o?B.aP:B.ar,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aI(!1,B.a3,!0,r,A.aP(!1,q,!0,A.ez(new A.D(E.a0k,A.x(A.a([t,B.af,u,B.bG,A.d(j,r,r,r,r,r,r,A.n(r,r,o?B.bv:B.bm,r,r,r,r,r,r,r,r,11,r,r,B.cA,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.j,0,B.p),r),r,new A.p(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
azN(d,e,f,g,h,i,j){return this.b2i(d,!1,e,f,g,h,i,j)}}
C.atY.prototype={
S(){return new C.bnk()}}
C.bnk.prototype={
Y(){this.a4()
this.ag2()},
ag2(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$ag2=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bFR(p.c,p.d),$async$ag2)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eUF(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eUG(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ag2,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.S(d).ax.a===B.J,f=g?B.BJ:B.iG,e=i.d
e=e==null?h:B.a.a_(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.X(B.eN,g?B.ac:B.an,h,h,h,18),h,h,h,new C.eUH(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.n(h,h,g?B.c:B.U,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.tA],u),B.l,h,B.e,B.j,0,h,h)
t=A.l(24)
s=x.O
s=g?A.a([B.eW,B.cG,B.fW],s):A.a([B.b2,B.aX,B.bR],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aX.j(g?0.4:0.3),B.eT,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dk,B.K,h,h)
p=C.bFP(p.gxI(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.l(20)
l=v===1?"item":"items"
s=A.r(h,A.x(A.a([o,B.am,A.B(A.a([p,B.ae,A.r(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.n(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.p(n,h,h,m,h,h,B.n),h,h,h,h,B.h_,h,h,h)],u),B.l,h,B.bb,B.j,0,h,h)],u),B.l,h,B.e,B.j,0,B.p),B.f,h,h,new A.p(h,h,h,t,q,new A.a8(B.aA,B.aE,B.x,s,h,h),B.n),h,h,h,h,E.a0H,h,h,1/0)
t=g?D.br5:B.c
q=A.l(24)
p=A.L(w?B.aH.j(0.4):B.aX.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dt,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.Vn,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.esh)
else{m=A.l(20)
l=A.L(B.aO,B.r,1)
o.push(A.r(h,A.qc(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.p(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aQ)
n=w?B.aH:B.aX
n=n.j(g?0.15:0.1)
m=A.l(12)
l=A.L((w?B.aH:B.aX).j(0.35),B.r,1)
k=w?B.Pf:B.PO
k=A.X(k,w?B.aH:B.aX,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.r(h,A.B(A.a([k,B.au,A.E(A.d(j,h,h,h,h,h,h,A.n(h,h,g?B.ac:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.j,0,h,h),B.f,h,h,new A.p(n,h,l,m,h,h,B.n),h,h,h,h,B.iw,h,h,h))
return A.c4(h,f,A.bm(!0,A.x(A.a([new A.D(Ac.On,e,h),A.E(A.ce(A.x(A.a([s,B.aQ,A.r(h,A.x(o,B.l,h,B.e,B.j,0,B.p),B.f,h,h,new A.p(t,h,p,q,r,h,B.n),h,h,h,h,B.uz,h,h,1/0)],u),B.l,h,B.e,B.j,0,B.p),B.t,h,B.y,h,E.amH,h,h,B.ah),1)],u),B.l,h,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.au2.prototype={
S(){return new C.aGB(A.zY(B.NG,B.o4,B.v4))}}
C.aGB.prototype={
t(){this.d.t()
this.a3()},
aOH(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j1(w,d)},
cfD(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s=C.ipX(t)
if(s!=null){this.aOH(s)
return}r=C.hwj(t)
if(r!=null)q=A.cS(r,p,0)
else q=!1
if(q){this.aOH(B.a.i(B.a.b2(r,B.a.co(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eI(A.a([A.aH(t,t,t,t,A.X(u.f?B.uM:A7.Pn,t,t,t,t,t),t,t,t,new C.eUJ(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.BJ,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fSG,t,t,t,1,t,!0),q=A.zX(u.d,B.c_,u.gcfC()),p=A.l(28)
p=A.as(A.r(t,t,B.f,t,t,new A.p(t,t,A.L(B.aX,B.r,3),p,A.a([new A.ac(2,B.G,B.aX.j(0.35),B.H,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.l(16)
return A.c4(r,B.w,new A.an(B.a0,t,B.b4,B.t,A.a([q,p,A.ap(32,A.r(t,D.fRr,B.f,t,t,new A.p(w,t,A.L(B.aX.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jo,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aLv.prototype={
a7(){return"_WorksheetTab."+this.b}}
C.P4.prototype={
S(){return new C.aGD(D.ade,A.a([],x.D))},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aGD.prototype={
gcGk(){return J.bGZ(this.e,0,new C.eVr())},
Y(){this.a4()
$.aW.c1$.push(this)
this.wl()},
t(){$.aW.hV(this)
this.a3()},
jl(d){if(d===B.fV)this.wl()},
wl(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wl=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.DD(q.a.c).dh(0,B.k1),$async$wl)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eVn(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eVo(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wl,v)},
Iu(d){return this.bN2(d)},
bN1(){return this.Iu(null)},
bN2(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Iu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.isF(l,d),$async$Iu)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lC(l,r,q,D.dmf,new A.V(Date.now(),0,!1))
w=4
return A.b(C.Ma(t.a.c,p),$async$Iu)
case 4:o=f
w=5
return A.b(t.wl(),$async$Iu)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.L(x.q).f.T(D.fhT)
w=1
break}n=J.aT(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gR(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.L(q).f.T(D.fjH)
else n.L(q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.F2(m)
case 1:return A.h(u,v)}})
return A.i($async$Iu,v)},
F2(d){return this.cjC(d)},
cjC(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$F2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hy(s,new C.au3(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$F2)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Ma(u.a.c,t),$async$F2)
case 5:case 4:w=6
return A.b(u.wl(),$async$F2)
case 6:return A.h(null,v)}})
return A.i($async$F2,v)},
w6(d){return this.c2n(d)},
c2n(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$w6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bFm(),$async$w6)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hy(r,D.aLj,!0,"NgmyWorksheetProjectScan",x.N),$async$w6)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bFQ(q),$async$w6)
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
r.T(A.b2(null,null,null,null,null,B.t,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hhg(s)
w=15
return A.b(C.Ma(t.a.c,p),$async$w6)
case 15:o=f
w=16
return A.b(t.wl(),$async$w6)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.L(x.q).f.T(D.fjM)
w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.F2(p)
case 1:return A.h(u,v)}})
return A.i($async$w6,v)},
Or(d){return this.bLG(d)},
bLG(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Or=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cg(null,null,!0,null,new C.eV8(d),s,null,!0,!0,x.y),$async$Or)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.p6(t.a.c,A.a([],x.D)),$async$Or)
case 6:w=7
return A.b(t.wl(),$async$Or)
case 7:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fhY)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Or,v)},
cjP(d){var w=this.c
w.toString
A.bU(B.L,null,new C.eVh(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b7V(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.l(16),p=g.a
if(p)w=B.jW
else w=B.c
v=A.l(16)
u=A.L(p?B.eh:B.bP,B.r,1)
t=d.j(0.14)
s=A.l(12)
s=A.r(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.p(t,r,r,s,r,r,B.n),r,r,r,r,B.bV,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.n(r,r,p?B.aP:B.ar,r,r,r,r,r,r,r,r,14,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aI(!1,B.a3,!0,r,A.aP(!1,q,!0,A.r(r,A.x(A.a([s,B.af,t,B.bG,A.d(h,r,r,r,r,r,r,A.n(r,r,p?B.bv:B.bm,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.j,0,B.p),B.f,r,r,new A.p(w,r,u,v,r,r,B.n),r,r,r,r,B.wl,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
a0N(d,e){return this.cjD(d,e)},
cjD(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0N=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(B.L,null,new C.eVc(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a0N)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hFT(r,new C.eVd(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Ot(d,e),$async$a0N)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0N,v)},
b4W(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.l(12)
s=A.r(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.p(t,u,u,s,u,u,B.n),u,u,u,u,B.bV,u,u,u)
if(d)t=B.ay
else t=h.a?B.aP:B.ar
t=A.d(j,u,u,u,u,u,u,A.n(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.n(u,u,w?B.bv:B.bm,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.j,0,B.p),1)
return A.aI(!1,B.a3,!0,u,A.aP(!1,u,!0,new A.D(B.Cn,A.B(A.a([s,B.bd,t,A.X(B.eG,w?B.bv:B.bm,u,u,u,u)],v),B.l,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj)},
cqy(d,e,f,g,h,i){return this.b4W(!1,d,e,f,g,h,i)},
Ot(d,e){return this.bLQ(d,e)},
bLQ(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ot=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.ln(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Ot)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bE3(t.a.c,d.a),$async$Ot)
case 6:w=7
return A.b(t.wl(),$async$Ot)
case 7:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ot,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.S(d).ax.a===B.J,m=new C.uj(n),l=n?B.c5:B.iG
if(p.f)n=D.bdC
else{w=A.aF(d,B.dP,x.w).w
v=p.bGa(m)
u=p.c1r(m)
t=p.gbDg()
if(n)s=B.jW
else s=B.c
r=A.l(13)
q=x.p
t=A.a([v,B.af,u,B.aQ,new C.Go(A.r(o,A.B(A.a([p.aDl(P.P_,"Projects",m,D.ade),p.aDl(B.wB,"Cashier",m,D.b1u),p.aDl(B.Hk,"Family Tree",m,D.hEA)],q),B.l,o,B.e,B.j,0,o,o),B.f,o,o,new A.p(s,o,o,r,o,o,B.n),o,o,o,o,o,o,o,o),14,B.eA,0.95,t,o),B.bz],q)
v=p.d
if(v===D.ade){v=J.ad(p.e)
B.d.v(t,A.a([A.B(A.a([A.d("Projects ("+v+")",o,o,o,o,o,o,A.n(o,o,n?B.aP:B.ar,o,o,o,o,o,o,o,o,16,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b3,new C.ayW(p.gaT3(),o)],q),B.l,o,B.e,B.j,0,o,o),B.aB,p.cqA(m)],q))}else{n=p.a
if(v===D.b1u)t.push(new C.apU(n.c,m,o))
else{v=p.r
t.push(new C.ar6(n.c,n.d,n.e,n.f,new C.eVu(p),new C.eVv(p),new A.bC(v,x.b4)))}}n=A.ce(A.x(t,B.E,o,B.e,B.j,0,B.p),B.t,o,B.y,o,new A.R(20,w.r.b+8,20,32),o,o,B.ah)}return A.c4(o,l,A.bm(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bGa(d){var w=null,v=A.l(8),u=d.a,t=A.X(Y.a1X,u?B.bv:B.bm,w,w,w,16)
return A.aP(!1,v,!0,new A.D(B.kS,A.B(A.a([t,B.bn,A.d("Back to Profile",w,w,w,w,w,w,A.n(w,w,u?B.bv:B.bm,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.P,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eV5(this),w,w,w,w,w,w,w)},
gbDg(){switch(this.d.a){case 0:return D.acs
case 1:return D.ht_
case 2:return D.act}},
c1r(d){var w=null,v=A.l(15),u=A.a([new A.ac(0,B.G,B.aX.j(0.35),B.cB,16)],x.V),t=x.p,s=A.B(A.a([A.r(w,D.c_4,B.f,w,w,new A.p(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bd,D.bJJ,A.aI(!1,B.a3,!0,w,A.aP(!1,A.l(12),!0,A.r(w,D.bXs,B.f,w,w,new A.p(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eV9(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)],t),B.E,w,B.e,B.j,0,w,w),r=B.b2.j(0.55),q=A.l(12)
return new C.Go(A.r(w,A.x(A.a([new A.D(B.GR,s,w),A.r(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.n(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aw,A.d(A.Bs(this.gcGk()),w,w,w,w,w,w,D.fBy,w,w,w)],t),B.E,w,B.e,B.j,0,B.p),B.f,w,w,new A.p(r,w,w,q,w,w,B.n),w,w,w,B.uw,B.jo,w,w,1/0)],t),B.E,w,B.e,B.j,0,B.p),B.f,w,w,new A.p(B.aX,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hsZ,w)},
aDl(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.l(12),r=t?B.aX:B.L,q=A.l(12),p=t?A.L(B.c.j(0.55),B.r,2):A.L(B.L,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aX.j(0.42),B.cI,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bv:B.bm
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bv:B.bm
return A.E(A.aI(!1,B.a3,!0,u,A.aP(!1,s,!0,A.cT(u,A.B(A.a([w,B.e5,new A.dl(1,B.cm,A.d(e,u,1,B.a2,u,u,u,A.n(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.bb,B.j,0,u,u),u,u,B.cw,new A.p(r,u,p,q,o,u,B.n),B.iL,u,u,u,u,B.H_,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eVq(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),1)},
cqA(d){var w,v,u,t,s,r,q=this,p=null
if(J.cs(q.e)){w=d.a
v=w?B.ef:B.c
u=A.l(15)
t=A.r(p,D.bXy,B.f,p,p,new A.p(p,p,p,p,A.a([new A.ac(2,B.G,B.aX.j(0.5),B.eT,28)],x.V),D.c8P,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.n(p,p,w?B.aP:B.ar,p,p,p,p,p,p,p,p,18,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Go(A.r(p,A.x(A.a([t,B.d8,s,B.T,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.n(p,p,w?B.bv:B.bm,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.e0,A.B(A.a([A.E(q.aUE(B.jq,"Scan QR",new C.eVk(q),d),1),B.au,A.E(q.aUE(R.zu,"Upload file",new C.eVl(q),d),1)],r),B.l,p,B.e,B.j,0,p,p),B.aB,A.bJ(D.h2g,p,q.gaT3(),A.bp(B.aX,p,p,p,B.c,B.h7,p,p,new A.b9(A.l(12),B.a1),p,p,p))],r),B.l,p,B.e,B.j,0,B.p),B.f,p,p,new A.p(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bGc,1.05,D.acs,p)}w=J.b8(q.e,new C.eVm(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Go(A.x(w,B.l,p,B.e,B.j,0,B.p),16,B.bV,1,D.acs,p)},
aUE(d,e,f,g){var w=null,v=B.aX.j(g.a?0.18:0.1),u=A.l(12),t=A.l(12),s=A.l(12),r=A.L(B.aX.j(0.45),B.r,1)
return A.aI(!1,B.a3,!0,u,A.aP(!1,t,!0,A.r(w,A.x(A.a([A.X(d,B.b2,w,w,w,26),B.T,A.d(e,w,w,w,w,w,w,D.fzM,B.K,w,w)],x.p),B.l,w,B.e,B.P,0,B.p),B.f,w,w,new A.p(w,w,r,s,w,w,B.n),w,w,w,w,B.als,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)},
cqz(d,e){var w,v,u=null,t=e.a,s=t?B.ef:B.c,r=A.l(14),q=A.L(t?B.eh:B.bP,B.r,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.eu,10)],x.V),o=A.l(14),n=t?B.bv:B.bm
n=A.by(B.Xu,new A.fH(1.7777777777777777,C.aSe(!0,B.fj,1/0,P.P_,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.n(u,u,t?B.aP:B.ar,u,u,u,u,u,u,u,u,15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.aw,A.d(""+d.d.length+" budget items \xb7 "+A.Bs(d.gxI()),u,u,u,u,u,u,D.fxI,u,u,u)],w),B.E,u,B.e,B.j,0,B.p),1)
return A.r(u,A.aI(!1,B.a3,!0,u,A.aP(!1,o,!0,A.x(A.a([n,new A.D(B.bF,A.B(A.a([v,A.aH(u,u,u,u,A.X(Ak.a2Z,t?B.bv:B.bm,u,u,u,u),u,u,u,new C.eVi(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.j,0,u,u),u)],w),B.E,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eVj(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),B.f,u,u,new A.p(s,u,q,r,p,u,B.n),u,u,u,B.ei,u,u,u,1/0)}}
C.bA7.prototype={}
C.rp.prototype={
aj(){var w=this,v=w.c,u=w.d
return A.I(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd_m(){var w,v,u,t,s=this.c
if(s===B.i.iH(s))w=B.o.u(B.i.M(s))
else{v=B.i.ad(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lC.prototype={
gxI(){return B.d.cG(this.d,0,new C.cGb())},
aj(){var w=this,v=w.d,u=A.U(v).k("N<1,a9<m,@>>")
v=A.C(new A.N(v,new C.cGa(),u),u.k("ak.E"))
return A.I(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bfi(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lC(w.a,w.b,v,u,w.e)},
bf0(d){return this.bfi(d,null)},
Tz(d){return this.bfi(null,d)}}
C.Iv.prototype={
a7(){return"FamilyGender."+this.b}}
C.hW.prototype={
aj(){var w=this
return A.I(["id",w.a,"name",w.b,"gender",C.hBn(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aG3(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hW(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ama.prototype={
a7(){return"FamilyTreeAccessRole."+this.b}}
C.kV.prototype={
gaqs(){var w=this.f
return new A.Y(w,new C.bSF(),A.U(w).k("Y<1>")).gI(0)},
aj(){var w=this,v=w.f,u=A.U(v).k("N<1,a9<m,@>>")
v=A.C(new A.N(v,new C.bSE(),u),u.k("ak.E"))
return A.I(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.iid(w.y),"games",w.z],x.N,x.z)},
x0(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kV(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bfh(d,e){var w=null
return this.x0(w,w,w,d,e,w,w,w,w)},
cPI(d,e,f,g,h,i,j){return this.x0(d,e,null,f,g,h,i,j,null)},
aG8(d,e){var w=null
return this.x0(w,w,w,w,d,w,w,e,w)},
cPK(d,e,f,g,h,i,j,k){return this.x0(d,e,null,f,g,h,i,j,k)},
cOd(d){var w=null
return this.x0(w,w,w,w,w,w,w,d,w)},
cOB(d){var w=null
return this.x0(w,w,w,w,w,w,w,w,d)},
beV(d){var w=null
return this.x0(w,w,d,w,w,w,w,w,w)},
aFU(d){var w=null
return this.x0(w,w,w,w,w,d,w,w,w)},
cPf(d,e,f){var w=null
return this.x0(w,d,w,w,e,w,w,f,w)},
cO0(d){var w=null
return this.x0(w,w,w,d,w,w,w,w,w)},
cON(d,e){var w=null
return this.x0(d,w,w,w,w,w,e,w,w)}}
C.cGc.prototype={
a7(){return"WrapAlignment."+this.b}}
C.cGd.prototype={
a7(){return"WrapCrossAlignment."+this.b}}
C.aIH.prototype={}
C.baL.prototype={
ak(d){this.a=d.a
this.b=d.b},
cY(d){var w=new C.baL()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b3(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.baK.prototype={
gwT(){return!0},
gGz(){return this.z.b<this.b.length},
aWk(d){switch(0){case 0:return d.a.c}},
aW0(d){switch(0){case 0:return d.a.d}},
bVT(d,e){switch(0){case 0:return new A.hR(d,e)}},
bVg(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hf(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iO(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.If(b4)
switch(0){case 0:v=b5.b
u=new A.kR(0,v,0,1/0)
t=w===B.Ve
break}s=A.a([],x.gZ)
r=A.T(x.gF,x.S)
for(b3=b1.z,q=B.d.fO(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.J)(q),++h){g=q[h]
g.hf(b4,u,!0)
f=b1.aWk(g)
f.toString
e=b1.aW0(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aIH(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aIH(k,j,i))}d=s.length
switch(0){case 0:q=b5.cB(new A.hR(m,l))
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
a8=b1.aWk(g)
e=b1.aW0(g)
e.toString
a9=b1.bVg(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bVT(a6,a3+a9)
b0=g.a
g.a=new A.iO(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fV(d){var w,v,u,t,s,r=this
r.lB(d)
w=d.b
w.is()
v=A.dr()
u=r.a
v.ej(u.a,u.b,0,1)
w.pn(0,v)
for(u=r.z,u=B.d.dt(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.J)(u),++s)u[s].fV(d)
w.nA(0)},
H4(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
is(){return this.z}}
C.byn.prototype={}
var z=a.updateTypes(["aB<~>()","P(hW)","~()","P(kV)","P(nw)","a9<m,@>(kV)","G(kV,kV)","G(hW,hW)","m(hW)","kV(a9<@,@>)","P(lC)","nw(a9<@,@>)","a9<m,@>(nw)","P(uU)","uU()","G(hW)","ai<hW>()","P(zG)","a0i(Z)","m?(hW)","eJ<m?>(hW)","aB<~>(lC)","P(rp)","a9<m,@>(hW)","hW(a9<@,@>)","G(lC,lC)","P(ag2)","~(bd)","v(oJ)","G(G,aa7)","P(qI<G>)","~(qI<G>)","U6(Z)","P(MQ)","P(uT)","~(hW)","m(m)","Wq(Z)","U5(Z)","aep(Z)","a_e(Z)","hW(hW)","cK(bA<m,GE>)","cK(L_)","a_I(Z)","G?(hW)","hW()","P(L_)","D(hW)","~(Iv)","a_E(Z)","v(Iv,m,a0)","P(afW)","bA<m,ai<a9<m,@>>>(m,ai<nw>)","a_G(Z)","+count,id,name(G,m,m)(kV)","m(kV)","a0C(Z)","a0D(Z)","P(lW)","lW()","ZN(Z)","a2o(Z)","a_g(Z)","a_f(Z)","~(G)","~(m,lr?)","v(rp)","aeK(Z)","~(ml)","aB<~>([m?])","H(H,lC)","v(lC)","H(H,rp)","a9<m,@>(rp)","rp(a9<@,@>)","ai<lr>()","uT()","m(V)","lC(a9<@,@>)","ct(Iu)","m(lC)","a9<m,@>(lC)","G(nw,nw)","kV(a9<m,@>)","kV(kV)"])
C.fOz.prototype={
$1(d){return d.a+" "+d.b},
$S:128}
C.fOy.prototype={
boz(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.rg(s,d,B.i0,"book",E.GD),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.W(r!=null&&A.LZ(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.boz(d)},
$S:331}
C.fOA.prototype={
$1(d){return d.b},
$S:128}
C.fY8.prototype={
$1(d){var w=null
return A.eP(w,B.L,new H.Qv(this.a,this.b,w),w,w,0,B.a0l,B.d7,w,w,w)},
$S:49}
C.fBG.prototype={
$1(d){return d!=null},
$S:228}
C.fBH.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:228}
C.fBM.prototype={
$1(d){if(this.a)return new A.o(d.a*520,d.b*160)
return d},
$S:176}
C.fMi.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fc(d,w,w,w,A.hc(w,B.tr,w,w,w,w,w,w,w,B.dE,w,w,10.5,w,B.eB,w,!0,w,w,w,w),w),u=f?B.eB:B.wv
return new A.ob(D.bBz,A.aaX(A.a([new A.fV(130,w,v),new A.zF(1,B.Hd,A.fc(e,w,w,w,A.hc(w,g==null?D.euH:g,w,w,w,w,w,w,w,B.dE,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.yv,B.lR))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1958}
C.fMh.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.w3(999)
f=A.xF(A.lR(h,A.fc("Cashier",h,h,h,A.hc(h,D.Ap,h,h,h,h,h,h,h,B.dE,h,h,10,h,B.eB,h,!0,h,h,h,h),h),h,new A.kS(D.euy,h,f,B.i5,h),h,h,D.bC4,h))
w=A.xF(A.fc("Debt receipt",h,h,h,A.hc(h,h,h,h,h,h,h,h,h,B.dE,h,h,22,h,B.eB,h,!0,h,h,h,h),h))
v=A.xF(A.fc(C.xn(new A.V(Date.now(),0,!1),!0),h,h,h,D.aaW,h))
u=A.w3(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fc(s,h,h,h,A.hc(h,h,h,h,h,h,h,h,h,B.dE,h,h,14,h,B.eB,h,!0,h,h,h,h),h)
r=A.fc("Person who owes",h,h,h,D.aaW,h)
q=A.w3(10)
p=x.Z
u=A.lR(h,A.zy(A.a([s,new A.fV(h,2,h),r,new A.fV(h,10,h),A.lR(h,A.zy(A.a([A.fc("Amount owed",h,h,h,D.aaW,h),new A.fV(h,2,h),A.fc(A.Bs(t.c),h,h,h,A.hc(h,D.Ap,h,h,h,h,h,h,h,B.dE,h,h,20,h,B.eB,h,!0,h,h,h,h),h)],p),B.rO,B.lR),h,new A.kS(B.pN,h,q,B.i5,h),h,h,D.bBf,1/0)],p),B.rO,B.lR),h,new A.kS(E.aMG,h,u,B.i5,h),h,h,D.bDd,1/0)
q=new A.nV(D.euB,0.9,B.l7)
r=A.w3(12)
s=i.c
o=s.$2("Original due",C.xn(t.r,!1))
n=s.$2("Current due",C.xn(t.f,!1))
m=i.d
l=new A.nV(m,1.1,B.l7)
k=A.w3(8)
j=i.a
k=A.a([o,n,new A.fV(h,6,h),A.lR(h,A.xF(A.fc(t.gaNf(),h,h,h,A.hc(h,m,h,h,h,h,h,h,h,B.dE,h,h,11,h,B.eB,h,!0,0.5,h,h,h),h)),h,new A.kS(h,new A.q_(l,l,l,l),k,B.i5,h),h,h,D.bCc,1/0),new A.fV(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.Ap))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.Ap))
else{n=A.fc("Missed days ("+n+")",h,h,h,A.hc(h,B.tr,h,h,h,h,h,h,h,B.dE,h,h,10.5,h,B.eB,h,!0,h,h,h,h),h)
m=A.U(o).k("N<1,TF>")
o=A.C(new A.N(o,new C.fMg(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fV(h,4,h),n,new A.fV(h,6,h),new C.baK(5,5,new C.baL(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fV(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fV(h,8,h),w,new A.fV(h,3,h),v,new A.fV(h,16,h),u,new A.fV(h,10,h),A.lR(h,A.zy(k,B.yv,B.lR),h,new A.kS(h,new A.q_(q,q,q,q),r,B.i5,h),h,h,B.alD,1/0)],p)
w=j.a
if(w!=null){v=new A.nV(B.JH,1,B.l7)
B.d.v(f,A.a([new A.fV(h,16,h),A.fc("Debtor signature",h,h,h,A.hc(h,B.tr,h,h,h,h,h,h,h,B.dE,h,h,10,h,B.eB,h,!0,h,h,h,h),h),new A.fV(h,6,h),A.lR(h,new A.IQ(w,B.XG,h,h),h,new A.kS(h,new A.q_(v,v,v,v),A.w3(6),B.i5,h),82,h,B.Ol,1/0)],p))}f.push(new A.fV(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fc(w,h,h,h,D.fq5,h))
f.push(new A.fV(h,18,h))
f.push(A.xF(A.fc("NGMY.ORG",h,h,h,A.hc(h,D.Ap,h,h,h,h,h,h,h,B.dE,h,h,14,h,B.eB,h,!0,1.8,h,h,h),h)))
return f},
$S:363}
C.fMg.prototype={
$1(d){var w=null,v=new A.nV(D.JI,0.7,B.l7),u=A.w3(999)
return A.lR(w,A.fc(C.xn(d,!1),w,w,w,A.hc(w,D.JI,w,w,w,w,w,w,w,B.dE,w,w,9.5,w,B.eB,w,!0,w,w,w,w),w),w,new A.kS(w,new A.q_(v,v,v,v),u,B.i5,w),w,w,D.bHD,w)},
$S:1959}
C.c7U.prototype={
$1(d){var w=null,v=B.bC.j(0.08),u=A.l(999),t=A.L(B.bC.j(0.28),B.r,1)
return A.r(w,A.d(C.xn(d,!1),w,w,w,w,w,w,D.fxc,w,w,w),B.f,w,w,new A.p(v,w,t,u,w,w,B.n),w,w,w,w,B.eJ,w,w,w)},
$S:1960}
C.fYF.prototype={
$1(d){var w=null,v=A.aF(d,B.c1,x.w).w,u=A.l(26),t=A.aH(w,w,w,w,D.c02,w,w,w,new C.fYC(d),w,w,w,w,w,B.cf),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eP(w,B.L,new A.cP(new A.aY(0,380,0,v.a.b*0.9),A.aI(!1,B.a3,!0,u,new A.D(B.a08,A.x(A.a([new A.bM(B.aa,w,w,t,w),new A.dl(1,B.cm,A.ce(A.x(A.a([new A.en(new C.b_M(r,w),s),B.X,A.B(A.a([A.E(A.es(B.zD,D.fZs,new C.fYD(s,r,d),A.di(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fg,w,new A.b9(A.l(14),B.a1),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ae,A.E(A.dh(B.a3D,D.fVR,new C.fYE(r,d),A.bp(B.b2,w,w,w,B.c,w,B.fg,w,new A.b9(A.l(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.j,0,w,w)],p),B.l,w,B.e,B.P,0,B.p),B.t,w,B.y,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.P,0,B.p),w),B.f,B.ar,0,w,w,w,w,w,B.aj),w),w,w,0,Ap.a0y,B.d7,w,w,w)},
$S:49}
C.fYC.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fYD.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aW.ap$.x.h(0,t.a)
m=m==null?null:m.gbg()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.mg(2.5),$async$$0)
case 4:w=3
return A.b(e.hr(B.hj),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eT(B.dO.gaU(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.aB(o,0,32)
w=5
return A.b(A.tp(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fYE.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fSX(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.L(x.q).f
s.T(A.b2(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fYx.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.b
return A.eP(w,B.ar,A.x(A.a([new A.D(D.bD1,A.B(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.ng,w,w,w),1),A.aH(w,w,w,w,B.lp,w,w,w,new C.fYv(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.j,0,w,w),w),new A.dl(1,B.cm,new A.D(B.f3,A.by(A.l(14),A.fR(t,B.A,w,w,B.cj,B.dC,!1,w,!1,w,w),B.aq),w),w),new A.D(B.O0,new A.a5(1/0,w,A.dh(B.oG,D.aWY,new C.fYw(t,this.c,d),A.bp(B.b2,w,w,w,B.c,w,w,w,new A.b9(A.l(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.P,0,B.p),w,w,w,B.Od,B.d7,w,new A.b9(v,B.a1),w)},
$S:49}
C.fYv.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fYw.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.tp(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fYJ.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.a,s=this.b
return A.eP(w,B.ar,new A.D(D.bD9,A.x(A.a([A.B(A.a([D.bIO,A.aH(w,w,w,w,B.lp,w,w,w,new C.fYH(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.j,0,w,w),B.T,new A.en(A.by(A.l(14),A.r(w,A.b4(w,w,w,new C.bcX(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.af,new A.a5(1/0,w,A.dh(B.oG,D.aWY,new C.fYI(t,s,d),A.bp(B.b2,w,w,w,B.c,w,w,w,new A.b9(A.l(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.P,0,B.p),w),w,w,w,w,B.d7,w,new A.b9(v,B.a1),w)},
$S:49}
C.fYH.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fYI.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aW.ap$.x.h(0,t.a)
n=n==null?null:n.gbg()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.mg(2.5),$async$$0)
case 4:w=3
return A.b(e.hr(B.hj),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.aB(p,0,32)
r=J.eT(B.dO.gaU(s))
w=5
return A.b(A.tp(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fGA.prototype={
$1(d){return d.a===this.a},
$S:258}
C.dQf.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dQ0.prototype={
bnN(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.ef:B.c
s=u.a
w=2
return A.b(A.bU(t,null,new C.dQ3(s,q,e),p,!0,!0,!1,B.JZ,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dQ4(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bnN(d,e)},
$S:1961}
C.dQ3.prototype={
$1(d){var w,v=null,u=this.c===B.x4,t=u?D.dt6:D.doK
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.n(v,v,w.a.d.a?B.aP:B.ar,v,v,v,v,v,v,v,v,15,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(O.am9,A.x(A.a([u,B.aw,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.n(v,v,w.a.d.a?B.bv:B.bm,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.ip(!0,v,v,B.y,D.fgz,new C.dQ2(this.a,w,t,d),t.length,v,B.dY,B.ah,!0)],x.p),B.al,v,B.e,B.P,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:25}
C.dQ2.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.l(14)
if(q)w=B.cG.j(0.14)
else w=t.b.a.d.a?B.U:B.aP
v=A.l(14)
if(q)u=B.cG
else u=(t.b.a.d.a?B.bv:B.bm).j(0.16)
u=A.L(u,B.r,q?1.6:1)
return A.aP(!1,p,!0,A.r(B.A,C.b_L(r,26),B.f,s,s,new A.p(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dQ1(t.d,r),s,s,s,s,s,s,s)},
$S:181}
C.dQ1.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dQ4.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dPZ.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:88}
C.dQ_.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cG(B.cw,e,v)
return new A.d1(e,!1,A.ig(B.A,A.as(A.aI(!1,B.a3,!0,v,new A.dY(new C.dPY(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.aj),v,v,v),v,new A.bg(t,new A.br(0.96,1,u),u.k("bg<bP.T>"))),v)},
$S:33}
C.dPY.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aF(d,B.c1,x.w).w,i=l.b,h=i.a.d.a,g=h?B.ef:B.c,f=A.l(14),e=A.L((h?B.bv:B.bm).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.n(k,k,i.a.d.a?B.aP:B.ar,k,k,k,k,k,k,k,k,16,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.l(8)
u=x.p
v=A.B(A.a([w,A.aP(!1,v,!0,new A.D(B.eA,A.X(B.cy,i.a.d.a?B.bv:B.bm,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dPJ(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.j,0,k,k)
w=l.d
t=A.n(k,k,i.a.d.a?B.aP:B.ar,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aVa("Name")
r=l.a
q=r.d==null?k:new C.dPK(r,l.e,a0)
p=A.l(20)
o=i.a.d.a?B.br:B.m6
n=A.L(B.cG.j(0.35),B.r,1)
m=r.d
t=A.aM(k,B.a_,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.bfa(new A.D(B.fB,A.aP(!1,p,!0,A.r(B.A,C.b_L(m==null?"\ud83d\udc64":A.fN6(r.e,m),18),B.f,k,k,new A.p(o,k,n,k,k,k,B.a6),k,34,k,B.cl,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.l2,k,B.aaL,k,k)
v=A.a([v,B.af,t,B.T,A.d("Gender (required)",k,k,k,k,k,k,A.n(k,k,i.a.d.a?B.bv:B.bm,k,k,k,k,k,k,k,k,11.5,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.B(A.a([A.E(i.aVR("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dPL(r,a0),r.d===B.x4),1),B.ae,A.E(i.aVR("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dPQ(r,a0),r.d===B.a7s),1)],u),B.l,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.T,new A.bM(B.a7,k,k,A.ho(D.bZj,D.fXK,new C.dPR(r,l.e,a0),A.fv(k,k,k,k,k,k,k,k,k,k,k,B.cG,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cf)),k)],u))
v.push(B.X)
t=A.n(k,k,i.a.d.a?B.aP:B.ar,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uX(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.a_,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aVb("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ak,k,k,s,k,k,B.ea,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ao,k,k,k,k))
v.push(B.X)
t=i.a.d.a
s=t?B.U:B.aP
q=A.l(10)
p=A.l(10)
o=A.l(10)
n=A.L((t?B.bv:B.bm).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.n(k,k,i.a.d.a?B.bv:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xn(r.a,!1)
v.push(A.aI(!1,B.a3,!0,q,A.aP(!1,p,!0,A.r(k,A.B(A.a([A.E(A.x(A.a([t,B.bG,A.d(m,k,k,k,k,k,k,A.n(k,k,i.a.d.a?B.aP:B.ar,k,k,k,k,k,k,k,k,14,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.j,0,B.p),1),D.bVZ],u),B.l,k,B.e,B.j,0,k,k),B.f,k,k,new A.p(k,k,n,o,k,k,B.n),k,k,k,k,B.bi,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dPS(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.aj))
if(!h)B.d.v(v,A.a([B.T,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.n(k,k,i.a.d.a?B.bv:B.bm,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.X)
t=A.n(k,k,i.a.d.a?B.aP:B.ar,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.a_,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aVa("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.n(k,k,i.a.d.a?B.aP:B.ar,k,k,k,k,k,k,k,k,12.5,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.n(k,k,i.a.d.a?B.bv:B.bm,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b3j(r.b.length!==0,B.n1,new C.dPT(r,i,a0),new C.dPU(r,a0),"Upload from gallery","ID photo"))
v.push(i.b3j(r.c.length!==0,D.bPl,new C.dPV(r,i,d,a0),new C.dPW(r,a0),"Camera or gallery","Selfie"))
v.push(B.T)
t=l.w
v.push(new Ao.a8L("Signature (optional)",t,new C.dPX(a0),new C.dPM(a0,t),new C.dPN(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bv:B.bm
s=(i?B.bv:B.bm).j(0.28)
s=A.E(A.dU(E.aWR,new C.dPO(d),A.di(k,k,k,k,k,k,k,k,k,t,k,k,B.qB,k,new A.b9(A.l(10),B.a1),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bp(B.cG,k,k,k,B.c,k,B.qB,k,new A.b9(A.l(10),B.a1),k,k,k)
v.push(A.B(A.a([s,B.ae,A.E(A.bJ(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vC,k,k,k),k,new C.dPP(r,w,d),t),1)],u),B.l,k,B.e,B.j,0,k,k))
return A.r(k,A.ce(A.x(v,B.al,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.p(g,k,e,f,k,k,B.n),k,k,k,B.rW,B.jo,k,k,360)},
$S:162}
C.dPJ.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dPK.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dPL.prototype={
$0(){return this.b.$1(new C.dPI(this.a))},
$S:0}
C.dPI.prototype={
$0(){var w=this.a
w.d=B.x4
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dPQ.prototype={
$0(){return this.b.$1(new C.dPH(this.a))},
$S:0}
C.dPH.prototype={
$0(){var w=this.a
w.d=B.a7s
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dPR.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dPS.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xs(null,u.b,A.c2(2020,1,1,0,0,0,0,0),null,s,A.c2(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dPG(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPG.prototype={
$0(){var w=this.b
return this.a.a=A.c2(w.gcl(),w.gcg(),w.gcz(),0,0,0,0,0)},
$S:0}
C.dPT.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Q3(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dPF(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPF.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dPU.prototype={
$0(){return this.b.$1(new C.dPE(this.a))},
$S:0}
C.dPE.prototype={
$0(){return this.a.b=""},
$S:0}
C.dPV.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.ef:B.c
w=3
return A.b(A.bU(q,null,new C.dPC(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Q3(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dPD(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPC.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.arx,w,w,w,w,new C.dPw(d),!1,w,w,w,w,w,w,w,D.fNI,w,w,w),A.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.arv,w,w,w,w,new C.dPx(d),!1,w,w,w,w,w,w,w,D.fUQ,w,w,w)],x.p),B.l,w,B.e,B.P,0,B.p),!0,!1,B.ag,!0,!0)},
$S:25}
C.dPw.prototype={
$0(){A.a6(this.a,!1).O("camera")
return null},
$S:0}
C.dPx.prototype={
$0(){A.a6(this.a,!1).O("gallery")
return null},
$S:0}
C.dPD.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dPW.prototype={
$0(){return this.b.$1(new C.dPB(this.a))},
$S:0}
C.dPB.prototype={
$0(){return this.a.c=""},
$S:0}
C.dPX.prototype={
$0(){return this.a.$1(new C.dPA())},
$S:0}
C.dPA.prototype={
$0(){},
$S:0}
C.dPM.prototype={
$0(){return this.a.$1(new C.dPz(this.b))},
$S:0}
C.dPz.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dPN.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.aiS(u.a,null,null,new C.dPy(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPy.prototype={
$4(d,e,f,g){this.a.$1(new C.dPv(this.b,d))},
$S:444}
C.dPv.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dPO.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dPP.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.L(x.q).f.T(D.flG)
return}if(w.a.d==null){w.c.L(x.q).f.T(D.fiw)
return}A.a6(w.c,!1).O(!0)},
$S:0}
C.dQi.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:88}
C.dQj.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.ef:B.c,n=A.l(14),m=A.L((p?B.bv:B.bm).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.n(r,r,q.a.d.a?B.aP:B.ar,r,r,r,r,r,r,r,r,16,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Bs(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.n(r,r,q.a.d.a?B.bv:B.bm,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zL(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.n(r,r,w.zL(r).length>0?B.bC:B.cG,r,r,r,r,r,r,r,r,12,r,r,B.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bv:B.bm
t=(q?B.bv:B.bm).j(0.28)
s=x.p
return new A.d1(e,!1,A.as(A.aI(!1,B.a3,!0,r,A.r(r,A.x(A.a([p,B.T,v,u,B.aB,A.B(A.a([A.E(A.dU(B.nZ,new C.dQg(d),A.di(r,r,r,r,r,r,r,r,r,w,r,r,B.k2,r,new A.b9(A.l(10),B.a1),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ae,A.E(A.bJ(D.fVh,r,new C.dQh(d),A.bp(B.cG,r,r,r,B.c,r,B.k2,r,new A.b9(A.l(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.j,0,r,r)],s),B.al,r,B.e,B.P,0,B.p),B.f,r,r,new A.p(o,r,m,n,r,r,B.n),r,r,r,B.Cp,B.GR,r,r,300),B.f,B.L,0,r,r,r,r,r,B.aj),r,r,r),r)},
$S:33}
C.dQg.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dQh.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dQc.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dQd(r),p=r.a.d.a,o=p?B.ef:B.c,n=A.l(14),m=A.L((p?B.bv:B.bm).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.n(s,s,r.a.d.a?B.aP:B.ar,s,s,s,s,s,s,s,s,14,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Bs(l.c),s,s,s,s,s,s,D.fyM,s,s,s)],p),B.l,s,B.e,B.j,0,s,s)
w=A.iK((r.a.d.a?B.bv:B.bm).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a2h,"View receipt",new C.dQ5(r,d,l))
u=l.x!=null
t=u?B.pz:B.qK
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bD6,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dQ6(r,d,l)),q.$3$icon$label$onTap(B.CC,"Edit",new C.dQ7(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.n1,"View / download ID",new C.dQ8(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bPk,"View / download selfie",new C.dQ9(r,d,l)))
if(l.gaHP())p.push(q.$3$icon$label$onTap(Ab.a3t,"View / download signature",new C.dQa(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bC,B.ej,"Delete",new C.dQb(r,d,l)))
p.push(B.aw)
return A.bm(!0,new A.D(B.uw,A.r(s,A.x(p,B.l,s,B.e,B.P,0,B.p),B.f,s,s,new A.p(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:25}
C.dQd.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.ar
else w=d
return A.aP(!1,v,!0,new A.D(B.eZ,A.B(A.a([A.X(e,w,v,v,v,20),B.bd,A.d(f,v,v,v,v,v,v,A.n(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1962}
C.dQ5.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fYB(w,this.c)},
$S:0}
C.dQ6.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.ST(this.c)},
$S:0}
C.dQ7.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.DH(this.c)},
$S:0}
C.dQ8.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bGa(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dQ9.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bGa(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dQa.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fYG(w,this.c)},
$S:0}
C.dQb.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.Q2(0,this.c)},
$S:0}
C.dQk.prototype={
$1(d){return d.x==null},
$S:258}
C.dQl.prototype={
$1(d){return d.x!=null},
$S:258}
C.dQm.prototype={
$2(d,e){return d+e.c},
$S:1963}
C.dQn.prototype={
$0(){return this.a.bDM()},
$S:0}
C.dQe.prototype={
$0(){return this.a.agf(this.b)},
$S:0}
C.fHl.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fHm.prototype={
$0(){return B.d.gH(D.a4N)},
$S:z+77}
C.dfW.prototype={
$0(){var w=this.a
return w.m(new C.dfU(w,this.b))},
$S:0}
C.dfU.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dfV.prototype={
$0(){},
$S:0}
C.dfX.prototype={
$0(){var w=this.a.gc2b()
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.fJQ.prototype={
$1(d){return C.hlE(A.a2(d,x.N,x.z))},
$S:z+11}
C.fJR.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fJS.prototype={
$2(d,e){var w=A.ca(d.a,null),v=A.ca(e.a,null)
if(w!=null&&v!=null)return B.o.aS(w,v)
return d.d.aS(0,e.d)},
$S:z+83}
C.fXc.prototype={
$1(d){return d.aj()},
$S:z+12}
C.h4J.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fGr.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bRm.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eH(e,v)?v:null},
$S:1964}
C.fXN.prototype={
$1(d){var w=this
return new C.a_G(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dgB.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dgA(w,d))},
$S:z+80}
C.dgA.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgp.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cJ(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dgm.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dfY.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dfZ.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dgq.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dg6.prototype={
$1(d){var w=null,v=A.S(d).ax.a===B.J,u=v?B.ef:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.n(w,w,v?B.aP:B.ar,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.n(w,w,v?B.bv:B.bm,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.eg(A.a([A.bO(!1,B.dn,w,w,!0,w,w,w,new C.dg4(d),w,w),A.bJ(B.xr,w,new C.dg5(d),A.bp(B.nq,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.dg4.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dg5.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dg7.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.dgn.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dgo.prototype={
$0(){return B.d.gH(D.zQ)},
$S:z+14}
C.dg2.prototype={
$1(d){var w=this.a,v=w.y,u=w.gz5(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.U5(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dg3.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dg8.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a_e(v,u,J.ad(w.d),null)},
$S:z+40}
C.dg9.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgz.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.az(s,new C.ZW(r.y,r.gz5(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dgx(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bcj(v,e,w,u,t,r.gbUl(),C.hBm(r.y.Q),r.gz5(0),s)
w=t}return A.c5(q,new C.dgy(r,e),new A.D(B.a0q,w,s))},
$S:1965}
C.dgy.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd5(t).ay){t=this.b
u=x.cy.a(B.d.gd5(u.f.f)).gvp(0)
w=t-(u==null?t:u)}else w=0
v=B.i.D(w,-1,0)
u=A.dr()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fL(v*3.141592653589793*0.5)
return A.fz(B.a7,A.d3(e,B.i.D(1+v*0.5,0,1)),null,u,!0)},
$S:44}
C.dgx.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJ0(B.qt,B.iv)},
$S:0}
C.dgj.prototype={
$0(){var w=this.a
return w.m(new C.dgi(w))},
$S:0}
C.dgi.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dgk.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).O(null)
return null},
$S:0}
C.dg_.prototype={
$1(d){var w,v,u=null,t=A.l(26),s=E.kq.j(0.5),r=x.p,q=A.a([D.fMg,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cs(p.d)?"Write this book":"Write a new book"
q.push(p.ZP(d,B.ec,w,J.cs(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.ZP(d,K.aps,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cJ(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cx,A.d("Your book is in English.",u,u,u,u,u,u,A.n(u,u,D.kM.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cx,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.n(u,u,D.kM.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.ZP(d,W.aqv,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.ZP(d,B.qP,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.ZP(d,B.qP,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eP(u,E.BT,A.bm(!0,new A.D(Aa.yO,A.x(q,B.E,u,B.e,B.P,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,I.a0A,B.d7,u,new A.b9(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:49}
C.dgl.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dgc.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cJ(w.d)
return new C.a_I(v,J.cJ(w.d),w.r+1,null)},
$S:z+44}
C.dgd.prototype={
$1(d){var w=null
return A.oO(!1,A.eg(w,w,w,E.BT,new A.k4(this.a,new C.dgb(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:344}
C.dgb.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.aaq,B.oX,A.E(A.d(e,w,w,w,w,w,w,B.jw,w,w,w),1)],x.p),B.l,w,B.e,B.j,0,w,w)},
$S:760}
C.dge.prototype={
$0(){return this.a.a=!1},
$S:50}
C.dgf.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:206}
C.dgg.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgh.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.BB(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.SI(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.dga(s,t))
w=4
return A.b(s.lh(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dga.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgs.prototype={
$1(d){var w=null
return A.oO(!1,A.eg(w,w,w,E.BT,new A.k4(this.a,new C.dgr(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:344}
C.dgr.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.aaq,B.oX,A.E(A.d(e,w,w,w,w,w,w,B.jw,w,w,w),1)],x.p),B.l,w,B.e,B.j,0,w,w)},
$S:760}
C.dgt.prototype={
$0(){return this.a.a=!1},
$S:50}
C.dgu.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:206}
C.dgv.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:206}
C.dgw.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.BB(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lh(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dg0.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bkK(B.qt,A3.NP)},
$S:0}
C.dg1.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJ0(B.qt,A3.NP)},
$S:0}
C.din.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dio.prototype={
$1(d){var w=this.a
return w.m(new C.dim(w))},
$S:9}
C.dim.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dip.prototype={
$1(d){var w=this.a
return w.m(new C.dil(w))},
$S:9}
C.dil.prototype={
$0(){return this.a.e="book"},
$S:0}
C.diq.prototype={
$1(d){var w=this.a
return w.m(new C.dik(w))},
$S:9}
C.dik.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dir.prototype={
$0(){var w=this.a
return w.m(new C.dij(w,this.b))},
$S:0}
C.dij.prototype={
$0(){var w=this.b
this.a.d.sb1(0,w)
return w},
$S:0}
C.dis.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga2C()
A.a6(this.b,!1).O(new A.brc(w,v))},
$S:0}
C.dgQ.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dgP.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a_E(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dgU.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dgT.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.baK(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hl,v,v,v)
return A.eg(A.a([A.bO(!1,B.dn,v,v,!0,v,v,v,new C.dgR(d),v,v),A.bJ(B.xr,v,new C.dgS(d),A.bp(B.nq,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.BT,w,v,v,v,v,D.fL2,v)},
$S:18}
C.dgR.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dgS.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dgV.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dgW.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.ce(A.bW(B.bH,r,B.bs,t,18,14),B.t,t,B.y,t,D.bE4,t,t,B.ah)},
$S:316}
C.dgO.prototype={
$0(){return this.a.QQ(0,this.b)},
$S:0}
C.dgN.prototype={
$0(){return this.a.Qh(0,this.b)},
$S:0}
C.cP9.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cPa.prototype={
$0(){return B.d.gH(D.zQ)},
$S:z+14}
C.cPb.prototype={
$4(d,e,f,g){var w=null,v=A.l(e)
return A.bS(0,new A.D(d,new A.bN(new A.p(w,w,A.L(this.a.j(f),B.r,g),v,w,w,B.n),B.bh,w,w),w),0,0,0)},
$S:1967}
C.d7N.prototype={
$1(d){return this.a.m(new C.d7M(this.b,this.c))},
$S:9}
C.d7M.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d8b.prototype={
$1(d){return this.a.m(new C.d7Z())},
$S:2}
C.d7Z.prototype={
$0(){},
$S:0}
C.d8c.prototype={
$1(d){return this.a.m(new C.d7Y())},
$S:2}
C.d7Y.prototype={
$0(){},
$S:0}
C.d8d.prototype={
$0(){var w=this.a
return w.m(new C.d7X(w,this.b))},
$S:0}
C.d7X.prototype={
$0(){var w=this.a
return w.d=w.gor().Gf(this.b.a)},
$S:0}
C.d8e.prototype={
$0(){var w=this.a
return w.m(new C.d7W(w,this.b))},
$S:0}
C.d7W.prototype={
$0(){var w=this.a
return w.d=w.gor().cNx(this.b)},
$S:0}
C.d8f.prototype={
$1(d){return this.a.m(new C.d7V())},
$S:2}
C.d7V.prototype={
$0(){},
$S:0}
C.d8g.prototype={
$0(){var w=this.a
return w.m(new C.d7U(w,this.b))},
$S:0}
C.d7U.prototype={
$0(){var w=this.a
return w.d=w.gor().cNC(this.b.a)},
$S:0}
C.d8h.prototype={
$1(d){var w=this.a
return w.m(new C.d86(w,d))},
$S:6}
C.d86.prototype={
$0(){var w=this.a
return w.d=w.gor().cOw(this.b)},
$S:0}
C.d8i.prototype={
$1(d){var w=this.a
return w.d=w.gor().aFX(d)},
$S:2}
C.d8j.prototype={
$1(d){var w=this.a
return w.d=w.gor().cNF(d)},
$S:2}
C.d8l.prototype={
$1(d){var w=this.a
return w.d=w.gor().cOu(d)},
$S:2}
C.d8m.prototype={
$1(d){var w=this.a
return w.m(new C.d85(w,d))},
$S:9}
C.d85.prototype={
$0(){var w=this.a
return w.d=w.gor().cOl(this.b)},
$S:0}
C.d8n.prototype={
$0(){var w=this.a,v=w.gor(),u=B.a.i(w.gz5(0).a.a),t=B.a.i(w.gaD9().a.a)
u=v.bfr(B.a.i(w.gasM().a.a),t,u)
A.a6(this.b,!1).O(u)
return null},
$S:0}
C.bRw.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bRq.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bRp(w,d))},
$S:11}
C.bRp.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bRz.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bRr.prototype={
$0(){var w=this.a
w.Q=D.b15
w.adU(1)
w.r.x=null},
$S:0}
C.bRs.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b15)return
w=new A.e5()
w.d_(u.as*13+u.a.e)
v=u.r
v.Q=3+w.az(3)
v.z=D.d3Y[w.az(6)]
v.as=u.f.a+2.6},
$S:0}
C.bRv.prototype={
$0(){var w=this.a
w.Q=D.ad0
w.adU(2)
w.r.z=null},
$S:0}
C.bRu.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hCz
t.adU(3)
w=t.r
w.d=s
w.x="I say: "+t.gCx()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.az(3)
w.z=s?D.dau[v.az(4)]:D.dvB[v.az(3)]
w.as=t.a+2.8},
$S:0}
C.bRx.prototype={
$0(){var w=this.a
w.Q=D.b16
w.CW=this.b
w.cy=1
w.adU(4)
w.r.f=w.f.a+5},
$S:0}
C.bRy.prototype={
$0(){},
$S:0}
C.bRt.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bRn.prototype={
$0(){return this.a.L5(this.b)},
$S:0}
C.bRo.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bT2.prototype={
$0(){var w=this
return w.a.R9(w.b,0,w.c,w.d)},
$S:0}
C.bT3.prototype={
$0(){var w=this
return w.a.R9(w.b,3,w.c,w.d)},
$S:0}
C.bT4.prototype={
$0(){var w=this
return w.a.R9(w.b,1,w.c,w.d)},
$S:0}
C.bT5.prototype={
$0(){var w=this
return w.a.bTM(w.b,w.c,w.d)},
$S:0}
C.bT6.prototype={
$0(){var w=this
return w.a.R9(w.b,4,w.c,w.d)},
$S:0}
C.bT7.prototype={
$0(){var w=this
return w.a.R9(w.b,2,w.c,w.d)},
$S:0}
C.bT8.prototype={
$0(){var w=this
return w.a.R9(w.b,5,w.c,w.d)},
$S:0}
C.bT9.prototype={
$2(d,e){return B.i.aS(d.a,e.a)},
$S:761}
C.bT1.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a5W[d],p=q.a.a2(0,new A.o(0,-q.b*1.2*124)),o=A.fq(r,B.cs,r,3,r,A.cQ(r,r,r,r,r,r,r,r,r,D.fpL,e),B.a5,B.bX,r,B.dA,B.bY)
o.o8(130)
w=o.b.a.c
w=p.aJ(0,new A.o(0,w.gba(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bn(A.bs(w,v.gba(v)+12,u+18),B.i3)
u=this.a
v=t.eQ(B.dF)
w=$.Q()
s=A.K()
s.r=B.ds.gp(0)
u.am(v,s)
s=A.K()
s.r=D.qk.gp(0)
u.am(t,s)
w=new A.aG(w.r,B.ai,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.aZ(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.bv())
v=A.K()
v.r=D.qk.gp(0)
u.af(w,v)
o.a5(u,new A.o(t.a+9,t.b+6))},
$S:762}
C.bRN.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.bRO.prototype={
$2(d,e){var w=this.a,v=B.o.aS(w.amz(d),w.amz(e))
if(v!==0)return v
return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.fus.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.h4A.prototype={
$2(d,e){if(e!=null)J.c7(this.a.c3(0,d,new C.h4B()),e)},
$S:z+66}
C.h4B.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.h4C.prototype={
$1(d){return d!==this.a},
$S:3}
C.h4D.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.h4E.prototype={
$1(d){return d!==this.a&&!B.d.aV(this.b,new C.h4z(this.c,d))},
$S:3}
C.h4z.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.h4F.prototype={
$1(d){return d!==this.a},
$S:3}
C.h4G.prototype={
$1(d){return d!==this.a},
$S:3}
C.h4H.prototype={
$1(d){return d!==this.a&&!B.d.aV(this.b,new C.h4y(this.c,d))},
$S:3}
C.h4y.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fHX.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fWd.prototype={
$1(d){return d.Q},
$S:z+15}
C.fWe.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fDN.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fKL.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bMA.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.h5_.prototype={
$2(d,e){return B.o.aS(C.hxG(d),C.hxG(e))},
$S:236}
C.h50.prototype={
$1(d){return d!==this.a},
$S:3}
C.fWJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bKK.prototype={
$0(){var w=this.a
w.ch=!0
w.b8Z()},
$S:0}
C.bKF.prototype={
$0(){},
$S:0}
C.bKL.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bKD.prototype={
$0(){},
$S:0}
C.bKE.prototype={
$0(){},
$S:0}
C.bKJ.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bS(0,A.b4(u,u,u,new C.bcZ(t,u),B.az),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.l(14)
s.push(A.ap(u,A.r(u,A.d(t.dy,u,u,u,u,u,u,D.fxo,B.K,u,u),B.f,u,u,new A.p(w,u,u,v,u,u,B.n),u,u,u,u,B.bV,u,u,u),u,u,14,14,6,u))}return A.az(B.c3,new A.an(B.a0,u,B.ab,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bKG(t,e),u,u,u,u,u,u,u,new C.bKH(t,e),u,u,u,u,u,u,u,u,u,new C.bKI(t,e),u,u,u,u,!1,B.a4)},
$S:36}
C.bKG.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bKI.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:23}
C.bKH.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bKC.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.cqc.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cqd.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cqb(w))},
$S:0}
C.cqb.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cqe.prototype={
$0(){var w=this,v=w.a
v.gj1()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cqf.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cqg.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cqh.prototype={
$0(){},
$S:0}
C.cqi.prototype={
$0(){var w=this.a
w.z=w.Xl(++w.e)
w.Q=A.c0(w.gkS()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cq8.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.cq9.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj1().length,e=i/2,d=new C.cqa(i,f,h),a0=g.as,a1=A.a4(a0).k("b7<2>")
a0=A.C(new A.b7(a0,a1),a1.k("M.E"))
a0=A.bS(0,A.c5(new A.h7(a0),new C.cq3(g,new A.o(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj1().length!==0&&!B.d.q(g.gj1(),-1)
v=x.p
e=A.a([a0,A.ap(j,new C.QN(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cK(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new S.MY(new C.cq4(g,u),new C.cq5(g,u),new C.cq6(g,u),j,j,new A.bC("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ap(j,A.d(a1,j,j,j,j,j,j,A.n(j,j,B.a.q(a1,"not a child")?B.fh:B.b6,j,j,j,j,j,j,j,j,13,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj1().length!==0&&!B.d.q(g.gj1(),-1)){a0=g.e+1>=g.gkS().length?"See my result":"Next family"
g=A.as(C.ux(a0,g.gqn(g),B.cO,B.jH,D.fz),j,j,j)}else{a1=A.a([],v)
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
n=A.e1(B.A,new C.QN(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.Xl(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.r5(new A.br(0,p,t),new C.cq7(),new S.Ep(u,j,new C.QN(l.b,k,62,!1,j),new A.kG(0.25,new C.QN(m.b,k,62,!1,j),j),new A.kb(n,B.aj,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.H,S.hBe(),!0,!0,j,j,j,j,j,j,!1,B.iO,j,new A.bC("chip-"+r,a0),w),B.b1,B.iM,j,new A.bC("t"+r+"-"+q,a0),v))}++u}g=A.bW(B.fT,a1,B.bs,j,6,8)}e.push(A.ap(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ab,B.t,e,j)},
$S:67}
C.cqa.prototype={
$1(d){return new A.o(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:753}
C.cq3.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.gj1().length!==0&&!B.d.q(t.gj1(),-1)
return A.b4(p,p,p,new C.bcs(q.b,o,v,w,p),B.az)},
$S:55}
C.cq5.prototype={
$1(d){return this.a.gj1()[this.b]===-1},
$S:z+30}
C.cq6.prototype={
$1(d){return this.a.cRo(this.b,d.a)},
$S:z+31}
C.cq4.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj1()[t]!==-1,r=A.l(18),q=e.length!==0?B.cO.j(0.3):B.L
if(s)w=v
else w=A.L(e.length!==0?B.cO:B.jZ,B.r,2)
u=s?A.lB(new C.cq2(),A.as(new C.QN(u.gaFp()[u.gj1()[t]].b,u.gaFp()[u.gj1()[t]].a,62,!1,v),v,v,v),B.l8,B.iM,v,v,new A.br(0.3,1,x.X),x.i):D.bcf
return A.cT(v,u,v,v,B.b1,new A.p(q,v,w,r,v,v,B.n),B.a3,v,100,v,v,v,v,v,88)},
$S:1970}
C.cq2.prototype={
$3(d,e,f){return A.e1(B.A,f,e,null,null)},
$S:112}
C.cq7.prototype={
$3(d,e,f){return A.dN(f,new A.o(Math.sin(e*24)*8*(1-e),0))},
$S:112}
C.cQd.prototype={
$1(d){return d>=1},
$S:121}
C.cFa.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkS()[w.e].d.length)w.m(new C.cF9(w))},
$S:11}
C.cF9.prototype={
$0(){return this.a.f++},
$S:0}
C.cFi.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cFj.prototype={
$0(){var w=this.a,v=this.b
w.z.J(0,v)
w.Q=v},
$S:0}
C.cFk.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cFh(w))},
$S:0}
C.cFh.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cFl.prototype={
$0(){return this.a.f++},
$S:0}
C.cFm.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cFn.prototype={
$0(){},
$S:0}
C.cFo.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a8(0)
w.as=!1
w.ay=0},
$S:0}
C.cFc.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.cFd.prototype={
$3(d,e,f){var w=null
return A.lB(new C.cFb(this.a,e),w,B.b1,B.hG,w,w,new A.br(w,this.b,x.X),x.i)},
$S:1971}
C.cFb.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.cO.j(u.as?0.6:0.15)
t=A.a([new A.ac(0,B.G,t,B.H,u.as?40:18)],x.V)
w=this.b
return A.r(v,A.hV(new A.BJ(new A.uS(B.w.j(e),B.LO,v,B.Y9),H.bXe(A.b4(v,v,v,new C.aBz(u.gkS()[u.e].c,u.as,v),B.az),new A.Eu(w,w,B.W5)),v),B.aq),B.f,v,v,new A.p(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:1972}
C.cFe.prototype={
$3(d,e,f){return A.d3(A.dN(f,new A.o(0,14*(1-e))),e)},
$S:100}
C.cFf.prototype={
$3(d,e,f){return A.dN(f,new A.o(Math.sin(e*22)*8*(1-e),0))},
$S:112}
C.cFg.prototype={
$0(){return this.a.bq3(this.b)},
$S:0}
C.f71.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.an5$)
v.an5$=w
v.q9$.sp(0,w)
v.aqY(u)},
$S:7}
C.fha.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:11}
C.bSy.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bSx())},
$S:0}
C.bSx.prototype={
$0(){},
$S:0}
C.bSv.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bSt.prototype={
$0(){},
$S:0}
C.bSu.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gMM()
w=s+1>=r.length?3:5
break
case 3:q=C.bGq(p.gapO(0),0,r.length)
p.m(new C.bSq(p,q))
o=p
w=6
return A.b(C.BU(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.BV(s.d,s.c.a,"school",p.gapO(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bSr())
w=4
break
case 5:p.m(new C.bSs(p))
p.gqv().VV(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bSq.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bSr.prototype={
$0(){},
$S:0}
C.bSs.prototype={
$0(){return this.a.x++},
$S:0}
C.bSw.prototype={
$0(){return this.a.L5(this.b)},
$S:0}
C.bSp.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.f72.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.o(t,s),q=v.b,p=v.d,o=p?C.hBs(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.Ed
C.SG(q,D.enT,0,0.2,-0.6,-0.2,null,w,D.emC,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a2(0,new A.o(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.Q()
p=A.K()
p.r=D.Gd.gp(0)
p.c=3
p.d=B.bu
q.ah(new A.o(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f73.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.SG(this.a,D.emZ,0,u,0.7,-0.5,null,null,D.Jz,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f74.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.SG(this.a,D.eoE,0,0,0.8,-0.5,null,null,D.Jz,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f75.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.SG(w.b,D.enN,0,v,-0.8,-0.5,null,null,D.Jz,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f76.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.o(34,-122+Math.sin(w*5)*5)
else v=v?D.enR:D.Ed
C.SG(p,D.eni,0,t,0,-0.6,null,v,D.Jz,3,0,s,1.3,u,0,w,0)
q=q.cc3(new A.o(222,455),9)
$.Q()
w=A.K()
w.r=B.cO.gp(0)
p.af(q,w)},
$S:0}
C.f77.prototype={
$2(d,e){return B.i.aS(d.a,e.a)},
$S:761}
C.bSb.prototype={
$2(d,e){return d+e},
$S:61}
C.bSm.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bSn.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bSo.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj1()[u.b]=s
t.gj1()[u.d]=t.y
w=t.as
v=t.q9$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bSi.prototype={
$1(d){return d},
$S:99}
C.bSh.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.q9$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bSj.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bSk.prototype={
$0(){},
$S:0}
C.bSl.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.FJ(++s.f)
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
C.bSd.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.bSe.prototype={
$2(d,e){var w=this.a
w=w.gkS()[w.f].e
return B.o.aS(w[d],w[e])},
$S:61}
C.bSf.prototype={
$2(d,e){var w=null,v=C.hcP(new A.av(A.aS(1/0,e.a,e.b),A.aS(1/0,e.c,e.d))),u=this.a
return A.az(B.c3,new A.en(A.b4(w,w,w,new C.bjD(u,u.q9$),B.az),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bSc(u,v),w,w,w,w,!1,B.a4)},
$S:36}
C.bSc.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj1().length
u=B.o.D(B.i.bh((t.a-s.a)/r/450*v),0,v-1)
w.d1c(w.gj1()[u])}},
$S:23}
C.bSg.prototype={
$1(d){var w=this.a
return w.gkS()[w.f].d[d]},
$S:77}
C.dry.prototype={
$2(d,e){return 0},
$S:61}
C.bRY.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bRX())},
$S:0}
C.bRX.prototype={
$0(){},
$S:0}
C.bRW.prototype={
$0(){},
$S:0}
C.bRQ.prototype={
$0(){},
$S:0}
C.bRR.prototype={
$0(){},
$S:0}
C.bRV.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.B9},
$S:0}
C.bRU.prototype={
$1(d){var w=null,v=this.a.gqv(),u=A.d(d,w,w,w,w,w,w,D.aVp,w,w,w),t=v.gbmv(0)
return A.az(B.c3,A.x(A.a([u,B.bG,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aVD,w,w,w)],x.p),B.E,w,B.e,B.j,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbsq(v),w,w,w,w,w,w,!1,B.a4)},
$S:141}
C.bRS.prototype={
$0(){return this.a.L5(this.b)},
$S:0}
C.bRT.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bRP.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.e1G.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e1H.prototype={
$1(d){return this.a},
$S:39}
C.e1I.prototype={
$0(){var w=this.a
return w.d=w.gSU().beV(this.b)},
$S:0}
C.e1E.prototype={
$1(d){return new C.U6(this.a,null)},
$S:z+32}
C.e1F.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e1D.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hl,w,w,w)
return A.eg(A.a([A.bO(!1,E.aX0,w,w,!0,w,w,w,new C.e1B(d),w,w),A.bO(!1,D.fSF,w,w,!0,w,w,w,new C.e1C(d),w,w)],x.p),w,w,D.fz,v,w,w,w,w,D.fFb,w)},
$S:18}
C.e1B.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e1C.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e1A.prototype={
$0(){var w=null,v=this.a.c.L(x.q).f,u=this.b
return v.T(A.b2(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e1J.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:14}
C.e1K.prototype={
$0(){var w=this.a,v=this.b,u=C.bEa(v,10,w.r,!1)
return w.uA(C.hlF(w.a.d,"kahoot",u,w.gb6w(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e1L.prototype={
$0(){var w=this.a
return w.uA(new C.am_(this.b,w.a.d,w.r,null))},
$S:0}
C.e1M.prototype={
$0(){var w=this.a
return w.uA(new C.akc(this.b,w.a.d,w.r,null))},
$S:0}
C.e1P.prototype={
$0(){var w=this.a
return w.uA(new C.auS(this.b,w.a.d,w.r,null))},
$S:0}
C.e1Q.prototype={
$0(){var w=this.a
return w.uA(new C.ayP(this.b,w.a.d,w.r,null))},
$S:0}
C.e1R.prototype={
$0(){var w=this.a
return w.uA(new C.am2(this.b,w.a.d,w.r,null))},
$S:0}
C.e1S.prototype={
$0(){var w=this.a
return w.uA(new C.am6(this.b,w.a.d,w.r,null))},
$S:0}
C.e1T.prototype={
$0(){var w=this.a
return w.uA(new C.am8(this.b,w.a.d,w.r,null))},
$S:0}
C.e1U.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d1x()
return v.uA(C.hlF(v.a.d,"creator_"+u.a,w,v.gb6w(),"A game by the family",t,this.c.a))},
$S:0}
C.e1V.prototype={
$0(){return this.a.OP(this.b)},
$S:0}
C.e1W.prototype={
$0(){return this.a.XN(0,this.b)},
$S:0}
C.e1N.prototype={
$0(){return this.a.OP(null)},
$S:0}
C.e1O.prototype={
$0(){return this.a.L(x.q).f.T(D.fiC)},
$S:0}
C.bS9.prototype={
$0(){var w=this.a
w.d=D.b0u
w.z=3},
$S:0}
C.bSa.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aPR()}else w.m(new C.bS8(w))},
$S:11}
C.bS8.prototype={
$0(){return this.a.z--},
$S:0}
C.bS_.prototype={
$0(){var w=this.a
w.d=D.acH
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bS0.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bRZ(w))
if(w.as<=0){d.a1(0)
w.b6s(-1)}},
$S:11}
C.bRZ.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bS5.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.WL},
$S:0}
C.bS6.prototype={
$0(){return this.a.e++},
$S:0}
C.bS2.prototype={
$0(){var w=this.a
w.d=D.b0v
w.ay=this.b},
$S:0}
C.bS3.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bS7.prototype={
$2(d,e){return B.o.aS(e.b,d.b)},
$S:1973}
C.bS4.prototype={
$0(){return this.a.L5(this.b)},
$S:0}
C.bS1.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bRA.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.aw()
s=A.a([new A.au(new A.ba(s,B.b7,B.aR),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.J)(t),++v){u=t[v]
s.push(new A.au(new A.ba(u,B.b7,B.aR),r))}return s},
$S:1974}
C.bRB.prototype={
$0(){return this.a.gD7().c.push(C.h6D(null,0,20,""))},
$S:0}
C.bRL.prototype={
$1(d){var w=null
return A.bt(w,new A.b6(4,A.l(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dl,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.VD,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:275}
C.bRK.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gD7().c,m=this.b,l=n[m],k=o.cf5(l),j=B.c.j(0.06),i=A.l(18),h=A.L(B.aU,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.KP,p,p,p),B.b3],g)
if(n.length>1)f.push(A.aH(p,p,p,p,B.ari,p,p,p,new C.bRF(o,m),p,p,p,p,p,p))
n=J.a7(k)
m=this.c
f=A.a([A.B(f,B.l,p,B.e,B.j,0,p,p),A.aM(p,B.a_,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bRG(l),p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.dg,!0,B.a5,p,B.ao,p,p,p,p),B.T],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aDf[v]
t=D.aCV[v]
s=v+1
f.push(new A.D(B.eM,new A.c8(B.aL,B.e,B.j,B.l,p,B.p,p,0,A.a([A.d(u,p,p,p,p,p,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.ae,new A.bz(1,B.bc,A.aM(p,B.a_,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bRH(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.dg,!0,B.a5,p,B.ao,p,p,p,p),p),new As.Pq(v,l.c,new C.bRI(o,l),p,!1,D.lC,p,p,p,p,p,!1,!1,p,I.b0U,p,p,p,p,p,w)],g),p),p))}f.push(D.fKI)
f.push(B.am)
n=A.a([D.fEi,B.ae],g)
for(r=0;r<3;++r){q=D.ce9[r]
n.push(new A.D(B.fB,A.jx(p,p,p,A.d(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bRJ(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.B(n,B.l,p,B.e,B.j,0,p,p))
return A.r(p,A.x(f,B.E,p,B.e,B.j,0,B.p),B.f,p,p,new A.p(j,p,h,i,p,p,B.n),p,p,p,B.kR,B.bi,p,p,p)},
$S:150}
C.bRF.prototype={
$0(){var w=this.a
return w.m(new C.bRE(w,this.b))},
$S:0}
C.bRE.prototype={
$0(){return B.d.cH(this.a.gD7().c,this.b)},
$S:0}
C.bRG.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bRH.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bRI.prototype={
$1(d){return this.a.m(new C.bRD(this.b,d))},
$S:155}
C.bRD.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bRJ.prototype={
$1(d){return this.a.m(new C.bRC(this.b,this.c))},
$S:9}
C.bRC.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3l.prototype={
$0(){var w=this.a
w.ww()
w.a.bv()
w.a.qo()},
$S:0}
C.e3k.prototype={
$0(){var w=this.a
w.ww()
w.a.bv()
w.a.qo()},
$S:0}
C.e3n.prototype={
$0(){var w=this,v=w.b
if(J.cJ(v)||J.cs(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e3o.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3p.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e3j.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e3m.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e3r.prototype={
$0(){this.a.Pa()
return null},
$S:0}
C.e3q.prototype={
$0(){return this.a.F3(this.b)},
$S:0}
C.e2M.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bO(!1,B.dn,w,w,!0,w,w,w,new C.e2K(d),w,w),r=A.bp(B.bR,w,w,w,w,w,w,w,w,w,w,w)
return A.eg(A.a([s,A.bJ(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e2L(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e2K.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e2L.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e2N.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cO0(this.b)},
$S:0}
C.e2H.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aVr(w.b,w.c,w.d)},
$S:7}
C.e28.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e29.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2q.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Hn(t.a.c),$async$$0)
case 2:s=r.nA(q.dI(e,new C.e2o(t)))
if(s!=null&&t.c!=null)t.m(new C.e2p(t,s))
t.a.bv()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e2o.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e2p.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2r.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e2s.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2G.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cON(C.hBC(w),w)},
$S:0}
C.e2n.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.Wq(u,w,C.aQY(u,w),new C.e2m(v),null)},
$S:z+37}
C.e2m.prototype={
$1(d){return this.bnU(d)},
bnU(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.e2l(s,d))
w=3
return A.b(s.uw(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:546}
C.e2l.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.beV(this.b)},
$S:0}
C.e2D.prototype={
$1(d){return d.as},
$S:z+1}
C.e2E.prototype={
$1(d){var w=this
return new A.dY(new C.e2C(w.a,w.b,w.c,w.d,w.e),null)},
$S:20}
C.e2C.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.ef:B.c,h=A.l(26),g=A.L(B.bR.j(0.5),B.r,1.5),f=A.r(k,D.bUb,B.f,k,k,new A.p(B.bR.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.n(k,k,j?B.aP:B.ar,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a2,k,k,k,A.n(k,k,j?B.bv:B.bm,k,k,k,k,k,k,k,k,12.5,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.j,0,B.p),1)
f=A.B(A.a([f,B.bd,a0,A.aH(k,k,k,k,A.X(B.cy,j?B.bv:B.bm,k,k,k,k),k,k,k,new C.e2w(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.j,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.n(k,k,j?B.bv:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.J)(v),++s){r=v[s]
q=t.a===r?B.bR:B.bR.j(0.1)
p=new A.aN(20,20)
o=t.a===r
n=new A.ay(B.bR,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bR
a0.push(A.az(k,A.cT(k,A.d(m,k,k,k,k,k,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b1,new A.p(q,k,new A.bH(n,n,n,n),new A.be(p,p,p,p),k,k,B.n),B.h4,k,k,k,k,B.Ci,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e2x(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bW(B.bH,a0,B.bs,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c5d,new A.D(D.bEu,f,k),new A.D(D.bEl,e,k),new A.D(B.rW,a0,k),new A.D(W.amB,A.d(v,k,k,k,k,k,k,A.n(k,k,j?B.bv:B.bm,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(Ai.apc,j?B.bv:B.bm,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bEn,A.B(A.a([a0,B.au,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.n(k,k,j?B.aP:B.ar,k,k,k,k,k,k,k,k,k,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.b96(k,B.bR,k,k,!1,B.y,k,k,k,k,k,k,new C.e2y(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.j,0,k,k),k))}f.push(B.aB)
j=A.l(20)
e=A.a([new A.ac(0,B.G,B.aF.j(0.35),B.j8,12)],x.V)
f.push(A.az(k,A.r(k,A.B(A.a([D.fED,B.bd,D.bIL,D.bUR],w),B.l,k,B.e,B.j,0,k,k),B.f,k,k,new A.p(k,k,k,j,e,D.c8S,B.n),k,k,k,B.hX,B.bF,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e2z(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.yQ,A.B(A.a([A.E(A.dU(B.dn,new C.e2A(a1),k),1),B.au,A.E(A.bJ(M.aXs,k,new C.e2B(t,a1),A.bp(B.bR,k,k,k,k,k,B.cp,k,k,k,k,k)),1)],w),B.l,k,B.e,B.j,0,k,k),k))
return A.bm(!0,A.r(k,A.ce(A.x(f,B.E,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.aq,k,k,new A.p(i,k,g,h,k,k,B.n),k,k,k,B.yF,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:90}
C.e2w.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e2x.prototype={
$0(){return this.b.$1(new C.e2v(this.a,this.c))},
$S:0}
C.e2v.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e2y.prototype={
$1(d){var w=this.a
w.m(new C.e2t(w,d))
this.b.$1(new C.e2u())},
$S:9}
C.e2t.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e2u.prototype={
$0(){},
$S:0}
C.e2z.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(new A.aHB(!0,w))
return null},
$S:0}
C.e2A.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e2B.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(new A.aHB(!1,w))
return null},
$S:0}
C.e2F.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cOB(this.b.b)
w.r.a8(0)},
$S:0}
C.e1X.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.aj0(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.huV(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e1Y.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aFU(w)},
$S:0}
C.e2P.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aep(this.b,w,this.c,null)},
$S:z+39}
C.e2J.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.ef:B.c,t=A.l(20),s=A.X(B.lO,B.aX,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.n(w,w,v?B.aP:B.ar,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.n(w,w,v?B.bv:B.bm,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.af,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.n(w,w,v?B.bv:B.bm,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.l,w,B.e,B.P,0,B.p)
return A.eg(A.a([A.bJ(D.fWu,w,new C.e2I(d),A.bp(B.aX,w,w,w,w,w,w,w,w,w,w,w))],o),B.bb,w,u,v,w,s,w,new A.b9(t,B.a1),r,w)},
$S:18}
C.e2I.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e1Z.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e2_.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e20.prototype={
$1(d){return d.a},
$S:z+8}
C.e21.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.J)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hW(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aFU(w)},
$S:0}
C.e25.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.aj0(q)
w=A.U(q).k("Y<1>")
q=A.C(new A.Y(q,new C.e23(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.huV(v.e,null,r,v.f,v.r,new C.e24(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e24.prototype={
$0(){return this.a.ab4(this.b)},
$S:0}
C.e23.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e26.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("N<1,hW>")
w=A.C(new A.N(w,new C.e22(this.b),v),v.k("ak.E"))
u.d=t.aFU(w)},
$S:0}
C.e22.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e2O.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e2i.prototype={
$1(d){return d.length!==0},
$S:3}
C.e2j.prototype={
$1(d){var w=this
return new A.dY(new C.e2h(w.a,w.b,w.c,w.d),null)},
$S:20}
C.e2h.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.ef:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.n(v,v,t?B.aP:B.ar,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.n(v,v,t?B.bv:B.bm,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.n(v,v,t?B.bv:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.N(o,new C.e2d(u,e,o),A.U(o).k("N<1,v>")))
p.push(B.T)
u=w.d
p.push(A.aM(v,B.a_,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bt(v,new A.b6(4,A.l(12),B.dq),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ak,v,v,v,v,v,B.mA,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.ao,v,v,v,v))
p=A.x(p,B.al,v,B.e,B.P,0,B.p)
t=w.a
return A.eg(A.a([A.bO(!1,B.dn,v,v,!0,v,v,v,new C.e2e(d),v,v),A.bJ(B.L_,v,new C.e2f(t,u,o,e),A.bp(B.bR,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.fJ5,v,new C.e2g(t,u,o,d),A.bp(B.aX,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:196}
C.e2d.prototype={
$1(d){var w=null
return A.dG(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.n(w,w,this.a.a?B.aP:B.ar,w,w,w,w,w,w,w,w,w,w,w,B.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.c21,w,w,w,new C.e2c(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1975}
C.e2c.prototype={
$0(){return this.a.$1(new C.e2a(this.b,this.c))},
$S:0}
C.e2a.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.e2e.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e2f.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e2b(w.c,u))
v.bP(0,B.ce)}},
$S:0}
C.e2b.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e2g.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).O(!0)},
$S:0}
C.e2k.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cPf(this.b,D.uC,C.Hl(v,w.a.c))},
$S:0}
C.e2W.prototype={
$1(d){return d.as},
$S:z+1}
C.e2X.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j1(this.b,w)},
$S:0}
C.e2Y.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.isl(v)
return w.WB(v==null?null:v.a)},
$S:0}
C.e2Z.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.i2Z(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aS(1/0,e.a,e.b)
s=A.aS(1/0,e.c,e.d)
l.cwt(new A.av(u,t),v.gblB(),new A.av(k,s))}k=A.l(22)
s=this.b.a
r=s?D.d1O:D.d01
q=A.L(s?B.dl:D.bk0,B.r,1)
p=A.l(22)
o=A.bS(0,A.b4(m,m,m,new C.bfK(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.r(m,A.by(p,new A.an(B.a0,m,B.ab,B.t,A.a([o,A.bS(0,A.v2(new A.R(n,n,n,n),new A.a5(u,t,new C.bgF(l.d,v,l.f,w,new C.e2S(l),l.gcgh(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ap(10,new C.byu(s,new C.e2T(l,e),new C.e2U(l,e),new C.e2V(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.p(m,m,q,k,m,new A.a8(B.b5,B.b9,B.x,r,m,m),B.n),m,m,m,Z.alH,m,m,m,m)},
$S:201}
C.e2S.prototype={
$1(d){var w=this.a
w.m(new C.e2Q(w,d))},
$S:2}
C.e2Q.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.J(0,v)},
$S:0}
C.e2T.prototype={
$0(){var w=this.b
return this.a.bd4(1.25,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e2U.prototype={
$0(){var w=this.b
return this.a.bd4(0.8,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e2V.prototype={
$0(){var w=this,v=w.b
return w.a.aVr(new A.av(A.aS(1/0,v.a,v.b),A.aS(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gblB())},
$S:0}
C.e3_.prototype={
$0(){var w=this.a
return w.m(new C.e2R(w))},
$S:0}
C.e2R.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e27.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fF(new A.fx(s.c)),$async$$0)
case 2:t.yy("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dh_.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ap(w,new C.bku(u,C.hFX(v.c,u),new C.dgZ(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dgZ.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dh0.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ap(w,new C.bnP(d.d,d.c,u.f.q(0,d.a),new C.dgY(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dgY.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fHp.prototype={
$1(d){var w,v=d.e
if(this.a.al(0,v))return v
v=this.b
w=A.U(v)
return A.nA(new A.cM(new A.Y(v,new C.fHq(d),w.k("Y<1>")),new C.fHr(),w.k("cM<1,m>")))},
$S:z+19}
C.fHq.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fHr.prototype={
$1(d){return d.a},
$S:z+8}
C.fHn.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fHo.prototype={
$1(d){return d.b},
$S:z+8}
C.fHu.prototype={
$1(d){var w,v=d.e
if(this.a.al(0,v))return v
v=this.b
w=A.U(v)
return A.nA(new A.cM(new A.Y(v,new C.fHv(d),w.k("Y<1>")),new C.fHw(),w.k("cM<1,m>")))},
$S:z+19}
C.fHv.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fHw.prototype={
$1(d){return d.a},
$S:z+8}
C.fHs.prototype={
$1(d){var w,v=A.eA([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.al(0,w)&&v.J(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fHt.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dh2.prototype={
$0(){return this.a},
$S:z+46}
C.dhj.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.al(0,d)},
$S:253}
C.dhb.prototype={
$2(d,e){var w=this.a.c3(0,d,new C.dhc()),v=J.a7(w)
if(!v.q(w,e))v.J(w,e)},
$S:122}
C.dhc.prototype={
$0(){return A.a([],x.s)},
$S:763}
C.dha.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eH(w,e)
return w===!0},
$S:297}
C.dh3.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dh9.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dh8.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.J(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aT(v==null?D.DA:v)
u=1
while(v.C())u+=s.$2(v.gR(v).a,e)
v=s.b.h(0,d)
v=J.aT(v==null?B.a_:v)
while(v.C()){t=v.gR(v)
if(e.q(0,t))continue
e.J(0,t)
t=w.h(0,t)
t=J.aT(t==null?D.DA:t)
while(t.C())u+=s.$2(t.gR(t).a,e)}return u},
$S:1977}
C.dh4.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dhd.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.J(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aT(u==null?B.a_:u)
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
t=J.aT(t==null?D.DA:t)
while(t.C()){r=t.gR(t)
if(r.a!==a9&&!B.d.aV(w,new C.dhe(r)))w.push(r)}}B.d.br(w,new C.dhf(a8))
B.d.aZ(w,new C.dhg())
q=C.i2Y(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.J)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eUM],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.bqX(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:1978}
C.dhe.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dhf.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dhg.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.dhh.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a7(n),v=o.c,u=-1/0,t=0;t<w.gI(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b7(v,A.a4(v).k("b7<2>")).cG(0,0,B.q4)+88-w.gH(n).a}else u=0
for(w=J.a7(n),v=o.c,t=0;t<w.gI(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:706}
C.dhi.prototype={
$1(d){return 16+d*156},
$S:166}
C.dh1.prototype={
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
t.n(0,d,new C.GE(r,new A.o(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.GE(s,new A.o(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.GE(s,new A.o(e,v)))}t=o.r.h(0,d)
t=J.aT(t==null?B.a_:t)
s=o.w
while(t.C()){r=t.gR(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.L_(d,new A.o(e+t,w),s,s.length))}},
$S:206}
C.dh5.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aKJ(new A.o(v.a,v.b+28),new A.o(w.a,w.b+28),!0,null))},
$S:122}
C.dh6.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dh7.prototype={
$2(d,e){return B.i.aS(d.a,e.a)},
$S:764}
C.dhk.prototype={
$2(d,e){return B.i.aS(d.a,e.a)},
$S:764}
C.dhl.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:467}
C.dhm.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:188}
C.dhn.prototype={
$1(d){return d>=0.5},
$S:121}
C.fmL.prototype={
$3(d,e,f){var w=null,v=A.l(10)
return A.h6(A.aP(!1,v,!0,new A.a5(38,38,A.X(d,this.a.c?B.c:B.cr,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1980}
C.eXO.prototype={
$1(d){var w=null,v=A.l(8),u=B.bR.j(0.12),t=A.l(8)
return new A.D(B.mZ,A.aP(!1,v,!0,A.r(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fug,B.K,w,w),B.f,w,w,new A.p(u,w,w,t,w,w,B.n),w,w,w,w,B.Ok,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eXN(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eXN.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dxg.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dxf.prototype={
$1(d){var w=null,v=A.l(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nX,B.K,w,w)
return A.eg(A.a([A.bO(!1,B.dn,w,w,!0,w,w,w,new C.dxd(d),w,w),A.bO(!1,A.d("Delete",w,w,w,w,w,w,A.n(w,w,B.mO,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dxe(d),w,w)],x.p),B.bb,B.Cf,w,u,D.bFn,w,D.bHk,new A.b9(v,B.a1),w,w)},
$S:18}
C.dxd.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dxe.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dxp.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dxq.prototype={
$1(d){var w=this.a
return w.m(new C.dxo(w,d))},
$S:z+49}
C.dxo.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dxr.prototype={
$1(d){var w=null
return A.qJ(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dxu.prototype={
$1(d){var w=this.a
return w.m(new C.dxn(w,d))},
$S:35}
C.dxn.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dxt.prototype={
$1(d){var w=null
return A.qJ(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dxv.prototype={
$1(d){var w=this.a
return w.m(new C.dxm(w,d))},
$S:35}
C.dxm.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dxw.prototype={
$0(){var w=this.a
return w.m(new C.dxl(w))},
$S:0}
C.dxl.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dxx.prototype={
$0(){var w=this.a
return w.m(new C.dxk(w))},
$S:0}
C.dxk.prototype={
$0(){return++this.a.at},
$S:0}
C.dxy.prototype={
$0(){var w=this.a
return w.m(new C.dxj(w))},
$S:0}
C.dxj.prototype={
$0(){return--this.a.ax},
$S:0}
C.dxz.prototype={
$0(){var w=this.a
return w.m(new C.dxi(w))},
$S:0}
C.dxi.prototype={
$0(){return++this.a.ax},
$S:0}
C.dxA.prototype={
$1(d){var w=this.a
return w.m(new C.dxh(w,d))},
$S:9}
C.dxh.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dxs.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dxB.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.l(12)
if(p)w=B.bR.j(0.18)
else w=q.c.a?B.ef:B.c
v=A.l(12)
if(p)u=B.bR
else u=(q.c.a?B.eh:B.bP).j(0.85)
u=A.L(u,B.r,p?1.5:1)
if(p)t=B.bR
else t=q.c.a?B.bv:B.bm
t=A.X(f,t,r,r,r,18)
if(p)s=B.bR
else s=q.c.a?B.bv:B.bm
return A.E(A.aI(!1,B.a3,!0,r,A.aP(!1,o,!0,A.cT(r,A.x(A.a([t,B.aw,A.d(e,r,r,r,r,r,r,A.n(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.j,0,B.p),r,r,B.b1,new A.p(w,r,u,v,r,r,B.n),B.eI,r,r,r,r,B.k2,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dxC(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
$S:z+51}
C.dxC.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dxL.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.ceV.prototype={
$2(d,e){return new A.bA(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:95}
C.cf1.prototype={
$1(d){return d.aj()},
$S:z+5}
C.cf2.prototype={
$2(d,e){var w=J.b8(e,new C.cf0(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bA(d,w,x.d2)},
$S:z+53}
C.cf0.prototype={
$1(d){return d.aj()},
$S:z+12}
C.ceX.prototype={
$1(d){return C.amb(A.a2(d,x.N,x.z))},
$S:z+9}
C.ceY.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.ceZ.prototype={
$1(d){return C.hlE(A.a2(d,x.N,x.z))},
$S:z+11}
C.cf_.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cf6.prototype={
$1(d){return new A.aHN(d.f.length,d.a,d.b)},
$S:z+55}
C.cf7.prototype={
$2(d,e){return B.a.aS(d.c,e.c)},
$S:651}
C.cf3.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cf4.prototype={
$1(d){return d.cOd(C.Hl(d,this.a))},
$S:z+85}
C.e38.prototype={
$1(d){return C.uy(d,this.a.a.c)},
$S:z+3}
C.e39.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e3d.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e3e.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e35.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1g(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z6("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.px(r.c,r.e),$async$$0)
case 4:s.z6(p)
w=5
return A.b(s.Ka(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e36.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1g(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z6("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.px(r.c,r.e),$async$$0)
case 4:s.z6(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e37.prototype={
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
break}if(q==null){o.z6("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.z6("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.z6("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Ka(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.z6(B.a.en(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e3c.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1f(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.z6("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).ce(A.ec(new C.e3b(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.px(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e3b.prototype={
$1(d){var w=this.b
return new C.a0C(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e3a.prototype={
$1(d){return D.hyy},
$S:z+58}
C.e3g.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e3h.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e3f(w,d)
return new A.D(B.d5,new C.bgJ(this.b,d.c,d.a,w,null),null)},
$S:1981}
C.e3f.prototype={
$0(){return this.a.Yq(this.b.b)},
$S:0}
C.e30.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e31.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e32.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e33.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e34.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e3i.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a_(s,"NGMYFTSYNC2"))t=!A.cS(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a6(this.b,!1).O(s)
return}},
$S:189}
C.dPn.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dPo.prototype={
$0(){return B.d.gH(D.a6i)},
$S:z+60}
C.dPp.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b4(A.as(A.X(this.b.d,B.c.j(0.95),w,w,D.d8E,44),w,w,w),w,w,new C.blB(u,t,v,w),B.az)},
$S:55}
C.fYf.prototype={
$1(d){return A.ph(new C.fYe(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:133}
C.fYe.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.ef:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.tq,24)],x.V),o=r?B.eh:B.bP
o=A.r(t,t,B.f,t,t,new A.p(o,t,t,A.l(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aX.j(0.25),B.bR.j(0.18)],x.O)
w=A.r(t,D.bXf,B.f,t,t,new A.p(t,t,t,A.l(12),t,new A.a8(B.a7,B.aa,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.n(t,t,r?B.aP:B.ar,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.r(t,A.x(A.a([B.X,o,new A.D(E.amF,A.B(A.a([w,B.bd,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.n(t,t,r?B.bv:B.bm,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.j,0,B.p),1)],u),B.l,t,B.e,B.j,0,t,t),t),A.E(A.ip(!0,t,e,B.y,D.fgH,new C.fYd(this.b,s),20,B.amd,t,B.ah,!1),1)],u),B.l,t,B.e,B.j,0,B.p),B.f,t,t,new A.p(q,t,t,B.l6,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:118}
C.fYd.prototype={
$2(d,e){var w=null,v=D.a6i[e],u=A.l(16),t=A.l(16),s=this.b.a,r=A.L(s?B.eh:B.bP,B.r,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.eu,8)],x.V),p=A.l(15),o=A.E(new C.a7p(v.a,!0,w),1),n=s?B.jW:B.jk,m=A.d(v.b,w,1,B.a2,w,w,w,A.n(w,w,s?B.aP:B.ar,w,w,w,w,w,w,w,w,13,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aI(!1,B.a3,!0,w,A.aP(!1,u,!0,A.ez(A.by(p,A.x(A.a([o,A.r(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.n(w,w,s?B.bv:B.bm,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.k3,w,w,w)],l),B.al,w,B.e,B.j,0,B.p),B.aq),w,new A.p(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fYc(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)},
$S:79}
C.fYc.prototype={
$0(){A.a6(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cou.prototype={
$0(){return this.a.ahi(this.b)},
$S:0}
C.fXD.prototype={
$1(d){return D.htn},
$S:z+61}
C.h4h.prototype={
$1(d){var w=this
return new C.a2o(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.fXH.prototype={
$1(d){return new C.a_g(this.a,null)},
$S:z+63}
C.fXG.prototype={
$1(d){return D.huo},
$S:z+64}
C.d8z.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d8A.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d8y(w,d))},
$S:35}
C.d8y.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d8B.prototype={
$1(d){return this.a.KO()},
$S:2}
C.d8C.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d8v.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d8w.prototype={
$1(d){return this.a.KO()},
$S:2}
C.d8x.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cGR.prototype={
$0(){},
$S:0}
C.cGX.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cGY.prototype={
$0(){return this.a.aQJ(-1)},
$S:0}
C.cGZ.prototype={
$1(d){return this.a.m(new C.cGW())},
$S:2}
C.cGW.prototype={
$0(){},
$S:0}
C.cH_.prototype={
$0(){return this.a.aQJ(1)},
$S:0}
C.cH0.prototype={
$1(d){return this.a.m(new C.cGV())},
$S:2}
C.cGV.prototype={
$0(){},
$S:0}
C.cH1.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.n(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aX.j(0.2)
if(s)v=B.aX
else v=this.b.a?B.eh:B.bP
return A.uW(u,u,B.b2,r,u,new C.cGU(t,d),B.wr,s,w,u,new A.ay(v,1,B.r,-1),B.cf)},
$S:1982}
C.cGU.prototype={
$1(d){var w=this.a
return w.m(new C.cGS(w,this.b))},
$S:9}
C.cGS.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cH2.prototype={
$1(d){return this.a.m(new C.cGT())},
$S:2}
C.cGT.prototype={
$0(){},
$S:0}
C.cH3.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fmg.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).O(w)},
$S:2}
C.fmh.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fmi.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).O(w)},
$S:0}
C.fme.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbCU()
w=w.e
s=A.l(B.o.D(v-1,0,v))
return A.b4(new A.D(D.bHj,new A.en(A.r(r,q.a.c,B.f,r,r,new A.p(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.byj(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:55}
C.fmf.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dD.aA(0,p)
p=A.l(12)
q=q.a.c
v=A.l(12)
u=A.l(12)
t=w*2.4
s=A.ar(B.aX,B.bR,w)
s.toString
s=A.a([B.b2,s,B.aX],x.O)
return A.aI(!1,B.a3,!0,p,A.aP(!1,v,!0,A.ez(D.esv,r,new A.p(r,r,A.L(B.c.j(0.4),B.r,1.5),u,r,new A.a8(new A.da(-1.2+t,-0.5),new A.da(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
$S:145}
C.fW0.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:62}
C.eUY.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eUP.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eUQ.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eUW.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.dY(new C.eUV(w,this.b),null)},
$S:20}
C.eUV.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.ef:B.c,t=A.l(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.n(w,w,v?B.aP:B.ar,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eP(w,u,new A.D(B.amz,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.n(w,w,v?B.bv:B.bm,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hrK(new C.eUS(r,e),r.a),B.aB,A.B(A.a([A.E(A.dU(B.dn,new C.eUT(d),w),1),B.au,A.E(A.bJ(B.VZ,w,new C.eUU(r,d),A.bp(B.aX,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.j,0,w,w)],q),B.al,w,B.e,B.P,0,B.p),w),w,w,w,w,B.d7,w,new A.b9(t,B.a1),w)},
$S:102}
C.eUS.prototype={
$1(d){return this.b.$1(new C.eUR(this.a,d))},
$S:35}
C.eUR.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eUT.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eUU.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.eUX.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Tz(this.b)},
$S:0}
C.eUK.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bf0(w)},
$S:0}
C.eUO.prototype={
$1(d){return this.bog(d)},
bog(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Ma(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j1(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eUN.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.eUM(this.b),v),v.k("M.E"))
u.d=t.bf0(w)},
$S:0}
C.eUM.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eUZ.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j1(this.b,w)},
$S:0}
C.eV_.prototype={
$1(d){return this.a.bH3(d,this.b)},
$S:z+67}
C.eUL.prototype={
$0(){return this.a.ab3(this.b)},
$S:0}
C.h44.prototype={
$1(d){return new C.aeK(this.a,this.b,this.c,null)},
$S:z+68}
C.eV1.prototype={
$0(){return this.a.a0h(this.b)},
$S:0}
C.eV2.prototype={
$0(){return this.a.QM(this.b)},
$S:0}
C.eV3.prototype={
$0(){return this.a.EZ(this.b)},
$S:0}
C.eV4.prototype={
$0(){return this.a.a0i(this.b)},
$S:0}
C.eV0.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eUF.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eUG.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eUH.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eUJ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qu(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eUI(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eUI.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eVr.prototype={
$2(d,e){return d+e.gxI()},
$S:z+71}
C.eVn.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eVo.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eV8.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.ef:B.c,s=A.l(24),r=A.r(v,D.bXI,B.f,v,v,new A.p(B.ay.j(u?0.18:0.08),v,A.L(B.ay.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.n(v,v,u?B.aP:B.ar,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.n(v,v,u?B.bv:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aP:B.ar
u=u?B.eh:B.bP
w=x.p
return A.eP(v,t,new A.D(B.yT,A.x(A.a([r,B.aQ,q,B.T,p,B.d8,A.B(A.a([A.E(A.dU(B.nZ,new C.eV6(d),A.di(v,v,v,v,v,v,v,v,v,o,v,v,B.fg,v,new A.b9(A.l(14),B.a1),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.au,A.E(A.bJ(D.h_m,v,new C.eV7(d),A.bp(B.ay,v,v,v,v,v,B.fg,v,new A.b9(A.l(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.j,0,v,v)],w),B.l,v,B.e,B.P,0,B.p),v),v,v,v,v,B.d7,v,new A.b9(s,B.a1),v)},
$S:49}
C.eV6.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eV7.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eVh.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.ef:B.c,i=A.l(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fM,28)],x.V),g=k?D.dfU:B.a5D,f=x.p
g=A.r(m,A.x(A.a([A.r(m,m,B.f,m,m,new A.p(B.c.j(0.45),m,m,A.l(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.f9P,B.aw,new A.bM(B.a7,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.n(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cA,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.j,0,B.p),B.f,m,m,new A.p(m,m,m,m,m,new A.a8(B.aA,B.aE,B.x,g,m,m),B.n),m,m,m,m,E.amD,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.n(m,m,k?B.bv:B.bm,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.E(v.b7V(B.b8,B.jq,new C.eVe(v,d),l,"Camera import","Scan QR"),1),B.au,A.E(v.b7V(B.cz,R.zu,new C.eVf(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.n(m,m,k?B.bv:B.bm,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.l(16)
r=B.ay.j(k?0.14:0.06)
q=A.l(16)
p=A.L(B.ay.j(0.28),B.r,1)
o=A.r(m,D.bX3,B.f,m,m,new A.p(B.ay.j(0.12),m,m,A.l(12),m,m,B.n),m,m,m,m,B.bV,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.n(m,m,k?B.aP:B.ar,m,m,m,m,m,m,m,m,m,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.n(m,m,k?B.bv:B.bm,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.j,0,B.p),1)
return A.bm(!0,new A.D(B.wm,A.r(m,A.x(A.a([g,new A.D(B.amA,A.x(A.a([w,B.X,u,B.bz,t,B.X,A.aI(!1,B.a3,!0,m,A.aP(!1,s,!0,A.r(m,A.B(A.a([o,B.bd,n,A.X(B.eG,k?B.bv:B.bm,m,m,m,m)],f),B.l,m,B.e,B.j,0,m,m),B.f,m,m,new A.p(r,m,p,q,m,m,B.n),m,m,m,m,B.bF,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eVg(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)],f),B.E,m,B.e,B.j,0,B.p),m)],f),B.l,m,B.e,B.P,0,B.p),B.aq,m,m,new A.p(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:25}
C.eVe.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.w6("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eVf.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.w6("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eVg.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.Or(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eVc.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.ef:B.c,m=A.l(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eT,24)],x.V),k=o?B.eh:B.bP
k=A.r(q,q,B.f,q,q,new A.p(k,q,q,A.l(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.l(12)
v=this.c
u=o?B.bv:B.bm
u=A.by(w,new A.a5(48,48,C.aSe(!0,A.l(12),48,P.P_,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.n(q,q,o?B.aP:B.ar,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Bs(v.gxI())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.wm,A.r(q,A.x(A.a([B.X,k,new A.D(D.amx,A.B(A.a([u,B.bd,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.n(q,q,o?B.bv:B.bm,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.j,0,B.p),1)],s),B.l,q,B.e,B.j,0,q,q),q),B.C6,r.cqy(B.uX,B.aX,new C.eVa(d),p,"QR code or backup file","Transfer project"),r.b4W(!0,B.ej,B.ay,new C.eVb(d),p,"Remove from this device","Delete project"),B.X],s),B.l,q,B.e,B.P,0,B.p),B.f,q,q,new A.p(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:25}
C.eVa.prototype={
$0(){A.a6(this.a,!1).O("transfer")
return null},
$S:0}
C.eVb.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
C.eVd.prototype={
$1(d){return this.boh(d)},
boh(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Ma(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wl(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eVu.prototype={
$0(){var w=this.a
w.a.bv()
w.m(new C.eVt(w))},
$S:0}
C.eVt.prototype={
$0(){return this.a.r++},
$S:0}
C.eVv.prototype={
$0(){var w=this.a
return w.m(new C.eVs(w))},
$S:0}
C.eVs.prototype={
$0(){return this.a.r++},
$S:0}
C.eV5.prototype={
$0(){var w=this.a.c
w.toString
return A.j1(w,null)},
$S:0}
C.eV9.prototype={
$0(){return this.a.cjP(this.b)},
$S:0}
C.eVq.prototype={
$0(){var w=this.a
return w.m(new C.eVp(w,this.b))},
$S:0}
C.eVp.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eVk.prototype={
$0(){return this.a.w6("scan")},
$S:0}
C.eVl.prototype={
$0(){return this.a.w6("file")},
$S:0}
C.eVm.prototype={
$1(d){return this.a.cqz(d,this.b)},
$S:z+72}
C.eVj.prototype={
$0(){return this.a.F2(this.b)},
$S:0}
C.eVi.prototype={
$0(){return this.a.a0N(this.b,this.c)},
$S:0}
C.cGb.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cGa.prototype={
$1(d){return d.aj()},
$S:z+74}
C.cG8.prototype={
$1(d){return C.hM2(A.a2(d,x.N,x.z))},
$S:z+75}
C.cG9.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fGh.prototype={
$1(d){return d.y===D.kU},
$S:z+3}
C.h4R.prototype={
$1(d){return C.aQY(d,this.a)},
$S:z+3}
C.fDM.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bSF.prototype={
$1(d){return!d.as},
$S:z+1}
C.bSE.prototype={
$1(d){return d.aj()},
$S:z+23}
C.bSB.prototype={
$1(d){return C.hlG(A.a2(d,x.N,x.z))},
$S:z+24}
C.bSC.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bSD.prototype={
$1(d){return J.k(d)},
$S:17}
C.fu3.prototype={
$2(d,e){return e.e.aS(0,d.e)},
$S:z+25}
C.fpP.prototype={
$1(d){return C.hbp(A.a2(d,x.N,x.z))},
$S:z+79}
C.fpQ.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fpR.prototype={
$2(d,e){return e.e.aS(0,d.e)},
$S:z+25}
C.fXr.prototype={
$1(d){return J.k(d)},
$S:17}
C.fXs.prototype={
$1(d){return d.a},
$S:z+81}
C.fXt.prototype={
$1(d){return d.length!==0},
$S:3}
C.fXu.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.fXv.prototype={
$1(d){return d.Tz(null).aj()},
$S:z+82}
C.h4P.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fGL.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fJW.prototype={
$1(d){return C.amb(A.a2(d,x.N,x.z))},
$S:z+9}
C.fJX.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fJY.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fJZ.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fK_.prototype={
$1(d){return C.uy(d,this.a)},
$S:z+3}
C.fXe.prototype={
$1(d){return C.uy(d,this.a)},
$S:z+3}
C.h4K.prototype={
$1(d){return C.amb(A.a2(d,x.N,x.z))},
$S:z+9}
C.h4L.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.h4M.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fGs.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fGt.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.h4V.prototype={
$1(d){return!d.as},
$S:z+1}
C.fFX.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fFY.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fFZ.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.h4i.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fKM.prototype={
$1(d){return d.Q},
$S:z+15}
C.fX7.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fJT.prototype={
$1(d){return C.amb(A.a2(d,x.N,x.z))},
$S:z+9}
C.fJU.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fJV.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fX2.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fqp.prototype={
$1(d){return d.length!==0},
$S:3}
C.fqq.prototype={
$1(d){return C.hlG(A.a2(d,x.N,x.z))},
$S:z+24}
C.fqr.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fqs.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fqt.prototype={
$1(d){return d.length!==0},
$S:3}
C.fqG.prototype={
$2(d,e){return d.eB(new C.fqH(e))},
$S:1983}
C.fqH.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.cd},
$S:1984}
C.fqD.prototype={
$1(d){return C.i82(d,this.a)},
$S:z+84}
C.fqE.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fqF.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fuL.prototype={
$1(d){return d.a},
$S:z+56}
C.fuM.prototype={
$1(d){return d.length!==0},
$S:3}
C.fuN.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fxL.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fD1.prototype={
$1(d){return C.hxi(d,C.Hl(d,this.a))},
$S:z+5}
C.fD2.prototype={
$1(d){return C.hxj(d,C.Hl(d,this.a))},
$S:z+5};(function aliases(){var w=C.aBB.prototype
w.bw6=w.t
w=C.azP.prototype
w.bw1=w.t
w=C.aH0.prototype
w.bwu=w.t
w=C.aBC.prototype
w.bw7=w.t
w=C.aBE.prototype
w.bw8=w.t
w=C.aBF.prototype
w.bw9=w.t
w=C.aNa.prototype
w.byY=w.t
w=C.aPi.prototype
w.bBi=w.t
w=C.aPj.prototype
w.bBj=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aEB.prototype,"gcnt","cnu",28)
var r
w(r=C.aBA.prototype,"gcgn","cgo",65)
v(r,"gaOV","NZ",0)
v(r,"gcvP","Bq",0)
v(r,"gbOQ","OF",0)
v(r,"gcKc","z7",0)
v(r,"gcpw","a1u",0)
v(r,"gbKe","On",0)
v(r,"gbPf","XS",0)
w(r,"gbUl","bUm",78)
v(r,"gbEz","Ap",0)
v(C.aBD.prototype,"gcK8","FV",0)
v(r=C.am0.prototype,"gbss","bst",2)
v(r,"gbsk","bsl",2)
v(r,"gcLh","cLi",2)
u(r,"gqn","kN",0)
u(r=C.akd.prototype,"geY","fX",2)
w(r,"gcc0","cc1",27)
u(C.auT.prototype,"gqn","kN",0)
v(r=C.ayQ.prototype,"gcWQ","cWR",2)
u(r,"gqn","kN",0)
u(C.aKO.prototype,"gbsq","bsr",2)
v(C.am9.prototype,"gBU","cLu",2)
u(r=C.am7.prototype,"gcMa","cMb",2)
u(r,"gqn","kN",0)
v(r=C.am3.prototype,"gbri","brj",2)
v(r,"gcRm","cRn",2)
u(r=C.am5.prototype,"geY","fX",2)
u(r,"gix","cKO",2)
v(r=C.am1.prototype,"gcKD","cKE",2)
u(r,"gbqa","jI",2)
v(r=C.aF9.prototype,"gagV","wm",0)
v(r,"gcj4","a0E",0)
v(r,"gaT8","Iv",0)
v(r=C.aF6.prototype,"gcG6","a3C",0)
v(r,"gagV","wm",0)
v(r,"gctQ","a28",0)
v(r,"gcj_","b39",2)
v(r,"gck1","a0S",0)
w(r,"gcgh","cgi",35)
v(r,"gbP7","IA",0)
v(r,"gcHb","cHc",2)
v(r,"gc6a","ZB",0)
w(r,"gceM","ceN",36)
v(r,"gciO","ciP",2)
v(r=C.aDA.prototype,"gcc6","Qj",0)
v(r,"gcc8","cc9",2)
v(r,"gbLJ","aaG",0)
v(r=C.aF8.prototype,"gbSK","Ym",0)
v(r,"gc2i","Z2",0)
v(r,"gcAe","a3_",0)
v(r,"gcwo","a2B",0)
v(C.aF7.prototype,"gcw7","aiJ",0)
v(C.au4.prototype,"gceK","a0f",0)
v(C.aAk.prototype,"ga3l","KO",2)
v(C.aAj.prototype,"ga3l","KO",2)
v(C.az2.prototype,"ga3l","KO",2)
v(r=C.aGC.prototype,"gb4j","Ri",0)
v(r,"gbDn","Wv",0)
v(r,"gcjQ","cjR",2)
w(C.aGB.prototype,"gcfC","cfD",69)
t(C.aGD.prototype,"gaT3",0,0,null,["$1","$0"],["Iu","bN1"],70,0,0)
s(C,"hF0","iib",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aE,[C.apI,C.uT,C.nw,C.Iu,C.afW,C.KT,C.uU,C.bTa,C.tf,C.bp6,C.ami,C.ae2,C.lr,C.bRM,C.aug,C.zG,C.akU,C.MQ,C.bay,C.aa7,C.bhO,C.ag2,C.aA3,C.afR,C.aKO,C.L_,C.GE,C.bgH,C.aKJ,C.ar3,C.dho,C.lW,C.aVa,C.aV9,C.aTc,C.uj,C.rp,C.lC,C.hW,C.kV,C.aIH])
u(A.ht,[C.fOz,C.fOy,C.fOA,C.fY8,C.fBG,C.fBH,C.fBM,C.fMi,C.fMh,C.fMg,C.c7U,C.fYF,C.fYx,C.fYJ,C.fGA,C.dQ3,C.dPZ,C.dQ_,C.dPC,C.dPy,C.dQi,C.dQj,C.dQc,C.dQd,C.dQk,C.dQl,C.fHl,C.fJQ,C.fJR,C.fXc,C.h4J,C.fGr,C.fXN,C.dgB,C.dfY,C.dg6,C.dgn,C.dg2,C.dg8,C.dg_,C.dgc,C.dgd,C.dgb,C.dgs,C.dgr,C.dio,C.dip,C.diq,C.dgP,C.dgU,C.dgT,C.cP9,C.cPb,C.d7N,C.d8b,C.d8c,C.d8f,C.d8h,C.d8i,C.d8j,C.d8l,C.d8m,C.bRw,C.bRq,C.fus,C.h4C,C.h4D,C.h4E,C.h4z,C.h4F,C.h4G,C.h4H,C.h4y,C.fHX,C.fWd,C.fDN,C.fKL,C.bMA,C.h50,C.fWJ,C.bKL,C.bKG,C.bKI,C.bKH,C.cqa,C.cq5,C.cq6,C.cq4,C.cq2,C.cq7,C.cQd,C.cFa,C.cFd,C.cFb,C.cFe,C.cFf,C.f71,C.fha,C.bSi,C.bSc,C.bSg,C.bRU,C.e1H,C.e1E,C.e1F,C.e1D,C.e1J,C.bSa,C.bS0,C.bRL,C.bRK,C.bRG,C.bRH,C.bRI,C.bRJ,C.e3m,C.e2M,C.e2H,C.e28,C.e2o,C.e2r,C.e2n,C.e2m,C.e2D,C.e2E,C.e2y,C.e1X,C.e2P,C.e2J,C.e1Z,C.e2_,C.e20,C.e25,C.e23,C.e22,C.e2i,C.e2j,C.e2d,C.e2W,C.e2S,C.dh_,C.dh0,C.fHp,C.fHq,C.fHr,C.fHn,C.fHo,C.fHu,C.fHv,C.fHw,C.fHs,C.fHt,C.dhj,C.dh9,C.dh4,C.dhe,C.dhf,C.dhi,C.dh6,C.dhl,C.dhm,C.dhn,C.fmL,C.eXO,C.dxf,C.dxp,C.dxq,C.dxr,C.dxu,C.dxt,C.dxv,C.dxA,C.dxB,C.cf1,C.cf0,C.ceX,C.ceY,C.ceZ,C.cf_,C.cf6,C.cf3,C.cf4,C.e38,C.e3b,C.e3a,C.e3h,C.e3i,C.dPn,C.fYf,C.fXD,C.h4h,C.fXH,C.fXG,C.d8A,C.d8B,C.d8w,C.cGZ,C.cH0,C.cH1,C.cGU,C.cH2,C.fmg,C.fW0,C.eUW,C.eUS,C.eUO,C.eUM,C.eV_,C.h44,C.eV8,C.eVh,C.eVc,C.eVd,C.eVm,C.cGa,C.cG8,C.cG9,C.fGh,C.h4R,C.fDM,C.bSF,C.bSE,C.bSB,C.bSC,C.bSD,C.fpP,C.fpQ,C.fXr,C.fXs,C.fXt,C.fXu,C.fXv,C.h4P,C.fGL,C.fJW,C.fJX,C.fJZ,C.fK_,C.fXe,C.h4K,C.h4L,C.h4M,C.fGs,C.fGt,C.h4V,C.fFX,C.fFY,C.h4i,C.fKM,C.fX7,C.fJT,C.fJU,C.fX2,C.fqp,C.fqq,C.fqr,C.fqs,C.fqt,C.fqH,C.fqD,C.fqE,C.fuL,C.fuM,C.fxL,C.fD1,C.fD2])
u(A.ax,[C.b_M,C.alZ,C.aWu,C.ZW,C.bcj,C.QN,C.a6D,C.tG,C.Iw,C.bgF,C.bku,C.byu,C.bnP,C.aeo,C.bkt,C.aen,C.bks,C.aDB,C.aJL,C.aep,C.GA,C.bgG,C.adE,C.bgE,C.bgJ,C.b_K,C.au4,C.aeK])
u(A.mn,[C.bcX,C.bea,C.be1,C.aIB,C.bjv,C.bp5,C.aWz,C.bcZ,C.aBz,C.bcs,C.bt8,C.bjD,C.bj3,C.bja,C.bgI,C.bfK,C.blB,C.byj])
u(A.iJ,[C.fYC,C.fYD,C.fYE,C.fYv,C.fYw,C.fYH,C.fYI,C.dQf,C.dQ1,C.dQ4,C.dPJ,C.dPK,C.dPL,C.dPI,C.dPQ,C.dPH,C.dPR,C.dPS,C.dPG,C.dPT,C.dPF,C.dPU,C.dPE,C.dPV,C.dPw,C.dPx,C.dPD,C.dPW,C.dPB,C.dPX,C.dPA,C.dPM,C.dPz,C.dPN,C.dPv,C.dPO,C.dPP,C.dQg,C.dQh,C.dQ5,C.dQ6,C.dQ7,C.dQ8,C.dQ9,C.dQa,C.dQb,C.dQn,C.dQe,C.fHm,C.dfW,C.dfU,C.dfV,C.dfX,C.dgA,C.dgp,C.dgm,C.dfZ,C.dgq,C.dg4,C.dg5,C.dg7,C.dgo,C.dg3,C.dg9,C.dgx,C.dgj,C.dgi,C.dgk,C.dgl,C.dge,C.dgg,C.dgh,C.dga,C.dgt,C.dgw,C.dg0,C.dg1,C.din,C.dim,C.dil,C.dik,C.dir,C.dij,C.dis,C.dgQ,C.dgR,C.dgS,C.dgV,C.dgO,C.dgN,C.cPa,C.d7M,C.d7Z,C.d7Y,C.d8d,C.d7X,C.d8e,C.d7W,C.d7V,C.d8g,C.d7U,C.d86,C.d85,C.d8n,C.bRp,C.bRz,C.bRr,C.bRs,C.bRv,C.bRu,C.bRx,C.bRy,C.bRt,C.bRn,C.bRo,C.bT2,C.bT3,C.bT4,C.bT5,C.bT6,C.bT7,C.bT8,C.h4B,C.fWe,C.bKK,C.bKF,C.bKD,C.bKE,C.bKC,C.cqc,C.cqd,C.cqb,C.cqe,C.cqg,C.cqh,C.cqi,C.cq8,C.cF9,C.cFi,C.cFj,C.cFk,C.cFh,C.cFl,C.cFm,C.cFn,C.cFo,C.cFc,C.cFg,C.bSy,C.bSx,C.bSv,C.bSt,C.bSu,C.bSq,C.bSr,C.bSs,C.bSw,C.bSp,C.f72,C.f73,C.f74,C.f75,C.f76,C.bSm,C.bSn,C.bSo,C.bSh,C.bSj,C.bSk,C.bSl,C.bSd,C.bRY,C.bRX,C.bRW,C.bRQ,C.bRR,C.bRV,C.bRS,C.bRT,C.bRP,C.e1G,C.e1I,C.e1B,C.e1C,C.e1A,C.e1K,C.e1L,C.e1M,C.e1P,C.e1Q,C.e1R,C.e1S,C.e1T,C.e1U,C.e1V,C.e1W,C.e1N,C.e1O,C.bS9,C.bS8,C.bS_,C.bRZ,C.bS5,C.bS6,C.bS2,C.bS3,C.bS4,C.bS1,C.bRA,C.bRB,C.bRF,C.bRE,C.bRD,C.bRC,C.e3l,C.e3k,C.e3n,C.e3o,C.e3p,C.e3j,C.e3r,C.e3q,C.e2K,C.e2L,C.e2N,C.e29,C.e2q,C.e2p,C.e2s,C.e2G,C.e2l,C.e2w,C.e2x,C.e2v,C.e2t,C.e2u,C.e2z,C.e2A,C.e2B,C.e2F,C.e1Y,C.e2I,C.e21,C.e24,C.e26,C.e2O,C.e2c,C.e2a,C.e2e,C.e2f,C.e2b,C.e2g,C.e2k,C.e2X,C.e2Y,C.e2Q,C.e2T,C.e2U,C.e2V,C.e3_,C.e2R,C.e27,C.dgZ,C.dgY,C.dh2,C.dhc,C.dh3,C.eXN,C.dxg,C.dxd,C.dxe,C.dxo,C.dxn,C.dxm,C.dxw,C.dxl,C.dxx,C.dxk,C.dxy,C.dxj,C.dxz,C.dxi,C.dxh,C.dxs,C.dxC,C.dxL,C.e39,C.e3d,C.e3e,C.e35,C.e36,C.e37,C.e3c,C.e3g,C.e3f,C.e30,C.e31,C.e32,C.e33,C.e34,C.dPo,C.fYc,C.cou,C.d8z,C.d8y,C.d8C,C.d8v,C.d8x,C.cGR,C.cGX,C.cGY,C.cGW,C.cH_,C.cGV,C.cGS,C.cGT,C.cH3,C.fmh,C.fmi,C.eUY,C.eUP,C.eUQ,C.eUR,C.eUT,C.eUU,C.eUX,C.eUK,C.eUN,C.eUZ,C.eUL,C.eV1,C.eV2,C.eV3,C.eV4,C.eV0,C.eUF,C.eUG,C.eUH,C.eUJ,C.eUI,C.eVn,C.eVo,C.eV6,C.eV7,C.eVe,C.eVf,C.eVg,C.eVa,C.eVb,C.eVu,C.eVt,C.eVv,C.eVs,C.eV5,C.eV9,C.eVq,C.eVp,C.eVk,C.eVl,C.eVj,C.eVi])
u(A.af,[C.apU,C.U5,C.a_E,C.a_I,C.a_G,C.a_e,C.am_,C.akc,C.auS,C.ayP,C.am8,C.am6,C.am2,C.Wq,C.am4,C.U6,C.ar6,C.ar0,C.a0i,C.ar4,C.a0C,C.a0D,C.a7p,C.a_g,C.a_f,C.ZN,C.a2o,C.Go,C.ayW,C.au3,C.atY,C.au2,C.P4])
u(A.ah,[C.aEB,C.bgz,C.aBA,C.bgY,C.aBD,C.be8,C.aBB,C.azP,C.aH0,C.ayQ,C.aBF,C.aBE,C.aBC,C.blX,C.am5,C.am1,C.aF9,C.aF6,C.aDA,C.aF8,C.aF7,C.blY,C.aNa,C.aAk,C.aAj,C.az2,C.bym,C.aPi,C.aPj,C.aGC,C.bnk,C.aGB,C.bA7])
u(A.jy,[C.dQ0,C.dQ2,C.dPY,C.dQm,C.fJS,C.bRm,C.dgz,C.dgy,C.dgf,C.dgu,C.dgv,C.dgW,C.bT9,C.bT1,C.bRN,C.bRO,C.h4A,C.h5_,C.bKJ,C.cqf,C.cq9,C.cq3,C.f77,C.bSb,C.bSe,C.bSf,C.dry,C.bS7,C.e2C,C.e2h,C.e2Z,C.dhb,C.dha,C.dh8,C.dhd,C.dhg,C.dhh,C.dh1,C.dh5,C.dh7,C.dhk,C.ceV,C.cf2,C.cf7,C.dPp,C.fYe,C.fYd,C.fme,C.fmf,C.eUV,C.eVr,C.cGb,C.fu3,C.fpR,C.fJY,C.fFZ,C.fJV,C.fqG,C.fqF,C.fuN])
u(A.lD,[C.a1U,C.ag4,C.a2c,C.a05,C.acH,C.aLv,C.Iv,C.ama,C.cGc,C.cGd])
t(C.am0,C.aBB)
t(C.akd,C.azP)
t(C.auT,C.aH0)
t(C.bgD,C.aBF)
t(C.am9,C.bgD)
t(C.bgC,C.aBE)
t(C.am7,C.bgC)
t(C.bgB,C.aBC)
t(C.am3,C.bgB)
t(C.blC,C.aNa)
t(C.byk,C.aPi)
t(C.byl,C.aPj)
t(C.aGD,C.bA7)
t(C.baL,A.baz)
t(C.byn,A.a74)
t(C.baK,C.byn)
w(C.aBB,A.cc)
w(C.azP,A.cc)
w(C.aH0,A.eM)
w(C.aBC,A.cc)
v(C.bgB,C.afR)
w(C.aBE,A.cc)
v(C.bgC,C.afR)
w(C.aBF,A.cc)
v(C.bgD,C.afR)
w(C.aNa,A.eM)
w(C.aPi,A.cc)
w(C.aPj,A.cc)
v(C.bA7,A.eC)
v(C.byn,A.jg)})()
A.iT(b.typeUniverse,JSON.parse('{"b_M":{"ax":[],"v":[]},"bcX":{"aC":[]},"apU":{"af":[],"v":[]},"aEB":{"ah":["apU"]},"U5":{"af":[],"v":[]},"alZ":{"ax":[],"v":[]},"aWu":{"ax":[],"v":[]},"bgz":{"ah":["U5"]},"a_E":{"af":[],"v":[]},"a_I":{"af":[],"v":[]},"a_G":{"af":[],"v":[]},"a_e":{"af":[],"v":[]},"aBA":{"ah":["a_E"]},"bgY":{"ah":["a_I"]},"aBD":{"ah":["a_G"]},"ZW":{"ax":[],"v":[]},"bea":{"aC":[]},"be1":{"aC":[]},"be8":{"ah":["a_e"]},"aIB":{"aC":[]},"bjv":{"aC":[]},"bcj":{"ax":[],"v":[]},"am_":{"af":[],"v":[]},"am0":{"ah":["am_"]},"bp5":{"aC":[]},"aWz":{"aC":[]},"akc":{"af":[],"v":[]},"auS":{"af":[],"v":[]},"ayP":{"af":[],"v":[]},"akd":{"ah":["akc"]},"bcZ":{"aC":[]},"QN":{"ax":[],"v":[]},"aBz":{"aC":[]},"auT":{"ah":["auS"]},"bcs":{"aC":[]},"ayQ":{"ah":["ayP"]},"am8":{"af":[],"v":[]},"am6":{"af":[],"v":[]},"am2":{"af":[],"v":[]},"am9":{"ah":["am8"]},"bt8":{"aC":[]},"am7":{"ah":["am6"]},"bjD":{"aC":[]},"am3":{"ah":["am2"]},"bj3":{"aC":[]},"Wq":{"af":[],"v":[]},"am4":{"af":[],"v":[]},"U6":{"af":[],"v":[]},"a6D":{"ax":[],"v":[]},"bja":{"aC":[]},"tG":{"ax":[],"v":[]},"Iw":{"ax":[],"v":[]},"blX":{"ah":["Wq"]},"am5":{"ah":["am4"]},"am1":{"ah":["U6"]},"ar6":{"af":[],"v":[]},"ar0":{"af":[],"v":[]},"a0i":{"af":[],"v":[]},"aep":{"ax":[],"v":[]},"aF9":{"ah":["ar6"]},"aF6":{"ah":["ar0"]},"bgF":{"ax":[],"v":[]},"bgI":{"aC":[]},"bku":{"ax":[],"v":[]},"bfK":{"aC":[]},"byu":{"ax":[],"v":[]},"bnP":{"ax":[],"v":[]},"aDA":{"ah":["a0i"]},"aeo":{"ax":[],"v":[]},"bkt":{"ax":[],"v":[]},"aen":{"ax":[],"v":[]},"bks":{"ax":[],"v":[]},"aDB":{"ax":[],"v":[]},"aJL":{"ax":[],"v":[]},"GA":{"ax":[],"v":[]},"ar4":{"af":[],"v":[]},"a0C":{"af":[],"v":[]},"a0D":{"af":[],"v":[]},"aF8":{"ah":["ar4"]},"bgG":{"ax":[],"v":[]},"adE":{"ax":[],"v":[]},"bgE":{"ax":[],"v":[]},"bgJ":{"ax":[],"v":[]},"aF7":{"ah":["a0C"]},"blY":{"ah":["a0D"]},"b_K":{"ax":[],"v":[]},"a7p":{"af":[],"v":[]},"blC":{"ah":["a7p"]},"blB":{"aC":[]},"au4":{"ax":[],"v":[]},"a_g":{"af":[],"v":[]},"a_f":{"af":[],"v":[]},"ZN":{"af":[],"v":[]},"a2o":{"af":[],"v":[]},"aAk":{"ah":["a_g"]},"aAj":{"ah":["a_f"]},"az2":{"ah":["ZN"]},"bym":{"ah":["a2o"]},"Go":{"af":[],"v":[]},"ayW":{"af":[],"v":[]},"byk":{"ah":["Go"]},"byl":{"ah":["ayW"]},"byj":{"aC":[]},"au3":{"af":[],"v":[]},"aGC":{"ah":["au3"]},"aeK":{"ax":[],"v":[]},"atY":{"af":[],"v":[]},"au2":{"af":[],"v":[]},"bnk":{"ah":["atY"]},"aGB":{"ah":["au2"]},"P4":{"af":[],"v":[]},"aGD":{"ah":["P4"],"eC":[]},"baK":{"jg":[],"fj":[]}}'))
A.Dl(b.typeUniverse,JSON.parse('{"afR":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.at
return{e2:w("aTc"),cq:w("mk"),Q:w("rp"),r:w("bu<m,m>"),c5:w("aV9"),dY:w("aVa"),fH:w("MQ"),de:w("akU"),dN:w("MY<G>"),gc:w("Ep<G>"),A:w("eJ<m?>"),e:w("Iu"),B:w("nw"),P:w("hW"),df:w("lr"),k:w("kV"),x:w("aB<~>"),U:w("O<T2>"),V:w("O<ac>"),C:w("O<rp>"),O:w("O<u>"),c:w("O<MQ>"),b:w("O<akU>"),ac:w("O<eJ<m?>>"),I:w("O<nw>"),u:w("O<hW>"),J:w("O<lr>"),_:w("O<kV>"),cl:w("O<aB<ai<a9<m,@>>>>"),R:w("O<nz>"),eU:w("O<ai<+(H,H)>>"),ez:w("O<a9<m,aE>>"),gE:w("O<a9<m,m>>"),Y:w("O<a9<m,@>>"),fD:w("O<mS>"),bp:w("O<oJ>"),g:w("O<o>"),ar:w("O<aug>"),v:w("O<fT>"),gy:w("O<aa7>"),L:w("O<+(m,m)>"),G:w("O<+(H,H)>"),E:w("O<+(H,~())>"),bd:w("O<+(m,G,P)>"),bF:w("O<+count,id,name(G,m,m)>"),F:w("O<cU>"),s:w("O<m>"),cF:w("O<au>"),aS:w("O<j4>"),dT:w("O<bay>"),p:w("O<v>"),Z:w("O<fj>"),D:w("O<lC>"),h:w("O<aA3>"),cC:w("O<bhO>"),fp:w("O<KT>"),M:w("O<L_>"),gZ:w("O<aIH>"),gA:w("O<afW>"),e4:w("O<ag2>"),dE:w("O<aKJ>"),f7:w("O<P>"),n:w("O<H>"),t:w("O<G>"),dS:w("O<aC?>"),d4:w("O<m?>"),eF:w("cw<ah<af>>"),d:w("ai<nw>"),do:w("ai<hW>"),cg:w("ai<lr>"),ax:w("ai<kV>"),fO:w("ai<a9<m,@>>"),cz:w("ai<+(m,m)>"),bC:w("ai<+count,id,name(G,m,m)>"),dy:w("ai<m>"),er:w("ai<au>"),gk:w("ai<lC>"),j:w("ai<@>"),fK:w("bA<m,m>"),d2:w("bA<m,ai<a9<m,@>>>"),a:w("a9<m,@>"),f:w("a9<@,@>"),gv:w("N<m,Ix>"),cM:w("N<G,m>"),w:w("iC"),g2:w("rN"),bV:w("apI"),fL:w("ct"),K:w("aE"),dc:w("fT"),fo:w("Pq<G>"),fz:w("+(m,m)"),ei:w("+scope,text(m,m)"),bn:w("+games,limit(P,G)"),d9:w("+dx,hidden(H,ai<hW>)"),cs:w("+count,id,name(G,m,m)"),N:w("m"),fT:w("iu<hW>"),ec:w("iu<m>"),gW:w("r5<H>"),X:w("br<H>"),bW:w("dK"),W:w("bC<m>"),b4:w("bC<G>"),cI:w("k4<m>"),av:w("Y<zG>"),cc:w("Y<m>"),l:w("v"),gF:w("fj"),fA:w("lC"),dO:w("GE"),bw:w("aen<m?>"),cy:w("L1"),q:w("mC"),y:w("P"),i:w("H"),z:w("@"),S:w("G"),eK:w("ai<kV>?"),m:w("ar3?"),cT:w("o?"),h5:w("+(m,m)?"),eo:w("+code,qrPayload,usesRemaining(m,m,G)?"),he:w("+qrPayload,token,usesRemaining(m,m,G)?"),gG:w("+members,trees,viewOnly(G,G,P)?"),az:w("qk?"),T:w("m?"),aD:w("dK?"),o:w("lC?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b4M=new A.be(B.fN,B.bI,B.fN,B.bI)
D.adQ=new A.be(B.fN,B.il,B.fN,B.il)
D.b5_=new A.be(B.iB,B.bI,B.bI,B.bI)
D.b53=new A.ay(B.cG,1.4,B.r,-1)
D.b5d=new A.ay(B.ac,1,B.r,-1)
D.aek=new A.aY(140,1/0,0,1/0)
D.b6C=new A.aY(0,1/0,64,1/0)
D.b6G=new A.aY(0,84,0,1/0)
D.aer=new A.aY(130,1/0,0,1/0)
D.aCN=w([B.m6,B.rL,B.c],x.O)
D.c7Z=new A.a8(B.aA,B.aE,B.x,D.aCN,null,null)
D.b7q=new A.p(null,null,null,null,null,D.c7Z,B.n)
D.dfj=w([B.aX,B.bR],x.O)
D.ca5=new A.a8(B.b5,B.b9,B.x,D.dfj,null,null)
D.b7N=new A.p(null,null,null,null,null,D.ca5,B.n)
D.Yf=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fz=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.djj=w([B.dx,D.Yf,D.fz],x.O)
D.c7b=new A.a8(B.b5,B.b9,B.x,D.djj,null,null)
D.b8x=new A.p(null,null,null,null,null,D.c7b,B.n)
D.fru=new A.F(!0,B.bW,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1V=new A.A("?",null,D.fru,null,null,null,null,null,null,null,null,null)
D.bcf=new A.ch(B.A,null,null,D.h1V,null)
D.VQ=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKP=new A.A("\ud83c\udf33",null,D.VQ,null,null,null,null,null,null,null,null,null)
D.afc=new A.ch(B.A,null,null,D.fKP,null)
D.fNt=new A.A("\ud83c\udfc6",null,Aq.KF,null,null,null,null,null,null,null,null,null)
D.bcq=new A.ch(B.A,null,null,D.fNt,null)
D.beg=new A.fk(null,null,null,null,null,E.kq,null,null,null,null)
D.afe=new A.ch(B.A,null,null,D.beg,null)
D.kM=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fs3=new A.F(!0,D.kM,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMu=new A.A("No books on the shelf yet.",null,D.fs3,null,null,null,null,null,null,null,null,null)
D.esw=new A.D(B.nH,D.fMu,null)
D.bcG=new A.ch(B.A,null,null,D.esw,null)
D.fz5=new A.F(!0,D.fz,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2Q=new A.A("\ud83d\ude8c  On the road\u2026",null,D.fz5,null,null,null,null,null,null,null,null,null)
D.et7=new A.D(B.cl,D.h2Q,null)
D.bd8=new A.ch(B.A,null,null,D.et7,null)
D.aWP=new A.A("\ud83e\uddfa",null,D.VQ,null,null,null,null,null,null,null,null,null)
D.bdn=new A.ch(B.A,null,null,D.aWP,null)
D.fPY=new A.A("\ud83c\udfad",null,D.VQ,null,null,null,null,null,null,null,null,null)
D.bdz=new A.ch(B.A,null,null,D.fPY,null)
D.bdC=new A.ch(B.A,null,null,A6.Y3,null)
D.afz=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.afG=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bfQ=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bfV=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bg6=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bg9=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bgb=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bgj=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lB=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bgn=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bgs=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bgt=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bgu=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lC=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bh4=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.BB=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bhd=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bhx=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bhA=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bhG=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bhO=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.agh=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bhW=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.Yr=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.agk=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bi7=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.Yt=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bis=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.agw=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.biR=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bj6=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bjv=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bjF=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.FO=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bk0=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bk2=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bk6=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.agY=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bkq=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bkw=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bkC=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.ah1=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bkK=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.blb=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.blj=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bll=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.blq=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.ahh=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bm2=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.ahG=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bn_=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.ahU=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bno=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.G0=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bnu=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bnE=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bnG=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.ai_=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bnZ=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bo_=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bo2=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.ai7=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.Z9=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bop=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.boK=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.boP=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.aii=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.boW=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.Zg=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bpe=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bpf=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.G7=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bq1=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bqH=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bqN=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bqR=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qk=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.br1=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.br5=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.brb=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.brd=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.aj3=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.aj7=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.Gd=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.ZA=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.ajg=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bsl=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bsE=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bt2=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.btb=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.ajI=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.ZK=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.btk=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.btC=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.ZO=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.btQ=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bu5=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.ZT=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bua=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.ak_=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.ak1=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.but=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.ak7=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.buV=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.buZ=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bv4=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.bva=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bvi=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bvR=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bwm=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fGH=new A.A("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bzX=new A.eJ(null,D.fGH,B.fc,null,x.A)
D.fPP=new A.A("None",null,null,null,null,null,null,null,null,null,null,null)
D.bzZ=new A.eJ(null,D.fPP,B.fc,null,x.A)
D.al0=new A.bd(3e4)
D.bAw=new A.bd(38e5)
D.bBf=new A.im(0,10,0,10)
D.bBo=new A.R(0,1,0,0)
D.bBz=new A.im(0,4,0,4)
D.bBC=new A.R(0,4,5,0)
D.bBT=new A.R(10,10,14,10)
D.bC4=new A.im(10,4,10,4)
D.bCc=new A.im(10,8,10,8)
D.bCd=new A.R(10,8,8,8)
D.bCH=new A.R(12,6,12,2)
D.bCY=new A.R(14,0,14,6)
D.bD1=new A.R(14,10,6,6)
D.bD2=new A.R(14,12,14,0)
D.bD6=new A.R(14,12,14,8)
D.bD9=new A.R(14,12,8,14)
D.bDd=new A.im(14,14,14,14)
D.bDv=new A.R(14,6,14,40)
D.bDy=new A.R(14,8,14,30)
D.bDW=new A.R(16,2,16,10)
D.bE4=new A.R(16,6,16,30)
D.bE6=new A.R(16,6,16,8)
D.bEl=new A.R(18,10,18,4)
D.bEn=new A.R(18,12,18,0)
D.bEu=new A.R(18,14,12,4)
D.amx=new A.R(18,16,18,8)
D.bEK=new A.R(18,20,18,22)
D.bEQ=new A.R(18,30,18,30)
D.bF6=new A.R(20,10,12,20)
D.bF9=new A.R(20,11,20,11)
D.bFl=new A.R(20,18,16,18)
D.bFn=new A.R(20,18,20,6)
D.bGc=new A.R(24,32,24,28)
D.bGd=new A.R(24,36,24,32)
D.bGh=new A.R(26,26,24,14)
D.bGw=new A.R(2,4,2,8)
D.bGA=new A.R(30,0,30,0)
D.bGL=new A.R(38,22,22,22)
D.amV=new A.R(40,24,24,24)
D.bGN=new A.im(40,40,40,40)
D.bGP=new A.R(46,30,30,30)
D.bHf=new A.R(56,40,40,40)
D.bHj=new A.R(1.25,1.25,1.25,1.25)
D.bHk=new A.R(60,0,60,0)
D.bHo=new A.R(6,14,6,16)
D.bHs=new A.R(6,4,12,0)
D.bHw=new A.R(6,6,10,2)
D.bHD=new A.im(7,3,7,3)
D.bIa=new A.R(5,1.5,5,1.5)
D.bIl=new A.R(6,2.5,6,2.5)
D.fY2=new A.A("Family Games",null,B.jP,null,null,null,null,null,null,null,null,null)
D.fFj=new A.A("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.VG,null,null,null,null,null,null,null,null,null)
D.cJ8=w([D.fY2,D.fFj],x.p)
D.bxp=new A.fg(B.ah,B.e,B.j,B.E,null,B.p,null,0,D.cJ8,null)
D.bIL=new A.bz(1,B.bc,D.bxp,null)
D.h1r=new A.A("Signature",null,B.ng,null,null,null,null,null,null,null,null,null)
D.bIO=new A.bz(1,B.bc,D.h1r,null)
D.fUB=new A.A("MADE BY THE ONE WHO PLANTED THE TREE",null,T.tH,null,null,null,null,null,null,null,null,null)
D.bJl=new A.bz(1,B.bc,D.fUB,null)
D.fZv=new A.A("Tell the AI what to fix",null,B.dk,null,null,null,null,null,null,null,null,null)
D.bJD=new A.bz(1,B.bc,D.fZv,null)
D.fzT=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0v=new A.A("Worksheets",null,D.fzT,null,null,null,null,null,null,null,null,null)
D.fA4=new A.F(!0,E.ag1,null,null,null,null,13,B.cA,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_k=new A.A("Track your project spending",null,D.fA4,null,null,null,null,null,null,null,null,null)
D.d6F=w([D.h0v,B.aw,D.h_k],x.p)
D.bx2=new A.fg(B.ah,B.e,B.j,B.E,null,B.p,null,0,D.d6F,null)
D.bJJ=new A.bz(1,B.bc,D.bx2,null)
D.fuR=new A.F(!0,E.kq,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFT=new A.A("FAMILY LIBRARY",null,D.fuR,null,null,null,null,null,null,null,null,null)
D.bK1=new A.bz(1,B.bc,D.fFT,null)
D.OC=new C.Iu("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.wu=new C.Iv(0,"male")
D.ou=new C.Iv(1,"female")
D.z1=new C.Iv(2,"unknown")
D.uC=new C.ama(0,"owner")
D.OD=new C.ama(1,"editor")
D.kU=new C.ama(2,"viewer")
D.aoR=new A.a0(61199,"MaterialIcons",!1)
D.bPk=new A.a0(61504,"MaterialIcons",!1)
D.bPl=new A.a0(61505,"MaterialIcons",!1)
D.bPn=new A.a0(61587,"MaterialIcons",!1)
D.bPu=new A.a0(61890,"MaterialIcons",!1)
D.bQm=new A.a0(63034,"MaterialIcons",!0)
D.bQE=new A.a0(63153,"MaterialIcons",!1)
D.bRa=new A.a0(63429,"MaterialIcons",!1)
D.aqZ=new A.a0(984520,"MaterialIcons",!1)
D.bPT=new A.a0(62776,"MaterialIcons",!1)
D.bTv=new A.ae(D.bPT,26,B.b2,null,null,null)
D.bOi=new A.a0(57648,"MaterialIcons",!1)
D.bTP=new A.ae(D.bOi,14,B.c,null,null,null)
D.bU5=new A.ae(B.Hm,17,null,null,null,null)
D.bUb=new A.ae(B.a2m,null,B.bR,null,null,null)
D.bUC=new A.ae(E.a2u,null,null,null,null,null)
D.bUF=new A.ae(B.j3,18,E.kq,null,null,null)
D.a2d=new A.a0(62044,"MaterialIcons",!1)
D.bUK=new A.ae(D.a2d,null,B.aX,null,null,null)
D.bUR=new A.ae(B.ze,18,B.c,null,null,null)
D.bVz=new A.ae(B.ec,16,null,null,null,null)
D.bVG=new A.ae(D.a2d,32,B.aX,null,null,null)
D.bVZ=new A.ae(E.aoS,18,B.cG,null,null,null)
D.bX3=new A.ae(B.Hw,22,B.ay,null,null,null)
D.bXf=new A.ae(B.ec,22,B.b2,null,null,null)
D.bXs=new A.ae(Y.a2i,22,B.c,null,null,null)
D.bXy=new A.ae(B.uN,52,B.c,null,null,null)
D.bXI=new A.ae(B.Hw,30,B.ay,null,null,null)
D.bY0=new A.ae(B.a2z,null,B.c,null,null,null)
D.arG=new A.ae(B.uX,22,B.c,null,null,null)
D.bY9=new A.ae(B.ec,17,null,null,null,null)
D.bYy=new A.ae(B.wK,26,B.cG,null,null,null)
D.bZj=new A.ae(B.a2H,16,null,null,null,null)
D.c_4=new A.ae(B.uN,24,B.c,null,null,null)
D.c_9=new A.ae(B.P6,20,B.th,null,null,null)
D.c_e=new A.ae(B.Hk,null,B.bR,null,null,null)
D.c_n=new A.ae(B.j3,18,B.c,null,null,null)
D.c02=new A.ae(B.cy,22,B.ac,null,null,null)
D.c0T=new A.ae(B.ej,16,B.ac,null,null,null)
D.c14=new A.ae(D.a2d,20,B.aX,null,null,null)
D.as5=new A.ae(B.hJ,20,null,null,null,null)
D.c1A=new A.ae(B.cy,18,D.kM,null,null,null)
D.c1R=new A.ae(B.zl,28,B.c,null,null,null)
D.c21=new A.ae(B.OW,null,B.fh,null,null,null)
D.c2m=new A.ae(B.zl,24,B.c,null,null,null)
D.c2P=new A.ae(B.uN,null,B.aX,null,null,null)
D.c2Q=new A.ae(B.jG,20,B.cG,null,null,null)
D.c39=new A.ae(B.Hm,16,null,null,null,null)
D.c4I=new A.e6(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.k2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eK,!0,null,null,null,null)
D.asO=new C.a6D(10,null)
D.c5d=new C.a6D(12,null)
D.c5e=new C.a6D(14,null)
D.dnq=w([B.bx,B.aX,B.fo,B.b2],x.O)
D.c6p=new A.a8(B.aA,B.aE,B.x,D.dnq,null,null)
D.bpO=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bvY=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d38=w([D.bpO,D.bvY],x.O)
D.c6A=new A.a8(B.b5,B.b9,B.x,D.d38,null,null)
D.dhk=w([B.eW,B.fW,B.fo],x.O)
D.c6F=new A.a8(B.aA,B.aE,B.x,D.dhk,null,null)
D.aiS=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bgv=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d5m=w([D.aiS,D.bgv],x.O)
D.c7c=new A.a8(B.b5,B.b9,B.x,D.d5m,null,null)
D.bkg=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aC2=w([D.bkg,D.aiS],x.O)
D.c7w=new A.a8(B.aA,B.aE,B.x,D.aC2,null,null)
D.ahz=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bmR=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dgo=w([D.ahz,D.bmR],x.O)
D.c89=new A.a8(B.a7,B.aa,B.x,D.dgo,null,null)
D.duo=w([B.bC,B.mP],x.O)
D.c8b=new A.a8(B.b5,B.b9,B.x,D.duo,null,null)
D.bpJ=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dvk=w([D.bpJ,D.kM,D.kM,I.N7],x.O)
D.dxQ=w([0,0.07,0.9,1],x.n)
D.c8G=new A.a8(B.a7,B.aa,B.x,D.dvk,D.dxQ,null)
D.c8P=new A.a8(B.aA,B.aE,B.x,B.SL,null,null)
D.d0V=w([B.aF,D.lB],x.O)
D.c8S=new A.a8(B.a7,B.aa,B.x,D.d0V,null,null)
D.dtX=w([B.b2,B.aX,B.bR],x.O)
D.c9R=new A.a8(B.aA,B.aE,B.x,D.dtX,null,null)
D.ce9=w([10,20,30],x.t)
D.co5=w([-1,-0.4,0.3,1],x.n)
D.cvy=w([B.bx,B.b2,B.eW],x.O)
D.cvH=w([B.bq,B.aF,B.kp],x.O)
D.cvJ=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cwq=w([30,140,262,360],x.n)
D.bo8=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cBZ=w([D.bo8,E.air],x.O)
D.en7=new A.o(1,2)
D.fcO=new A.cU(B.aV,D.en7,3)
D.ayX=w([D.fcO],x.F)
D.cJq=w([B.hp,B.cg,B.fn],x.O)
D.cMa=w([B.bK,B.bw,B.br],x.O)
D.bKS=new C.uT("classic","Classic leather","Gold-edged brown leather",D.aC2,E.kq,E.kq,"\u2766",B.K,!0,!1,!1,!1)
D.bfA=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.buL=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.d8n=w([D.bfA,D.buL],x.O)
D.aiw=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bKN=new C.uT("ornate","Ornate gold","Double gold border and flourishes",D.d8n,D.aiw,D.aiw,"\u2726",B.K,!0,!0,!0,!1)
D.bjP=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bqB=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d_Q=w([D.bjP,D.bqB],x.O)
D.bKM=new C.uT("parchment","Parchment","Old paper with dark ink",D.d_Q,D.G7,L.j_,"\u2767",B.K,!0,!1,!1,!0)
D.afI=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bt_=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dsb=w([D.afI,D.bt_],x.O)
D.bnB=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bsg=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bKP=new C.uT("minimal","Clean paper","Plain and elegant, like a printed book",D.dsb,D.bnB,D.bsg,"",B.K,!0,!0,!1,!0)
D.bKR=new C.uT("midnight","Midnight","Deep blue with silver stars",K.aCm,B.cu,B.bO,"\u2727",B.K,!0,!0,!1,!1)
D.bKL=new C.uT("emerald","Emerald library","Green cloth, title on the left",V.azl,E.kq,B.fy,"\u25c6",B.bo,!0,!1,!1,!1)
D.btu=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dqc=w([B.el,D.btu],x.O)
D.boV=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bq8=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bKQ=new C.uT("rose","Rose vintage","Burgundy with rose-gold lettering",D.dqc,D.boV,D.bq8,"\u2740",B.K,!0,!1,!0,!1)
D.duV=w([B.cr,F.nx],x.O)
D.bKO=new C.uT("modern","Modern","Dark, bold, left-aligned",D.duV,B.aH,B.c,"",B.bo,!1,!0,!1,!1)
D.a4N=w([D.bKS,D.bKN,D.bKM,D.bKP,D.bKR,D.bKL,D.bKQ,D.bKO],A.at("O<uT>"))
D.cP7=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.duJ=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bL2=new C.lr('What does "Ubuntu" mean?',D.duJ,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d1A=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bL5=new C.lr("In Swahili, what do we call a grandmother?",D.d1A,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d1r=w(["Babu","Mama","Baba","Dada"],x.s)
D.bL0=new C.lr("In Swahili, what do we call a grandfather?",D.d1r,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d2J=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bL4=new C.lr("What is a sister called in Swahili?",D.d2J,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.d7P=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bL1=new C.lr("What is a brother called in Swahili?",D.d7P,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d1q=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bLc=new C.lr("Which word means father in Swahili?",D.d1q,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dvU=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bLb=new C.lr('"Umoja ni nguvu" means...',D.dvU,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dsS=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bLd=new C.lr('"Haba na haba hujaza kibaba" teaches us...',D.dsS,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d5u=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bLa=new C.lr('The African saying "It takes a village to raise a child" means...',D.d5u,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dwd=w(["The elders","The market","The river","The drum"],x.s)
D.bL6=new C.lr("Who is the traditional keeper of the family stories?",D.dwd,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cTi=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bL3=new C.lr("Why do families sit round the fire at night?",D.cTi,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.duX=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bL8=new C.lr('What does "Harambee" mean?',D.duX,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.daF=w(["An elder","A baby","A market","A cow"],x.s)
D.bL7=new C.lr('"Mzee" is a respectful word for...',D.daF,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dq3=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bL9=new C.lr('What does "Shikamoo" show?',D.dq3,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.azg=w([D.bL2,D.bL5,D.bL0,D.bL4,D.bL1,D.bLc,D.bLb,D.bLd,D.bLa,D.bL6,D.bL3,D.bL8,D.bL7,D.bL9],x.J)
D.cXG=w([90,360],x.n)
D.d_n=w([B.bR,B.bl],x.O)
D.bpx=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d01=w([D.afI,D.bpx],x.O)
D.d0E=w([-1,-0.3,0.4,1],x.n)
D.d1w=w([0,0.45,0.72,0.92,1],x.n)
D.bjL=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d1O=w([D.bjL,B.dh],x.O)
D.bhs=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.akg=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d2m=w([B.dx,D.bhs,D.akg],x.O)
D.d3o=w([B.ba,B.jh,B.pb],x.O)
D.bki=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bs6=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bh8=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d3t=w([D.bki,D.bs6,D.bh8],x.O)
D.d3O=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d3Y=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hvC=new C.ae2(78,424,48,44,56)
D.hvA=new C.ae2(214,396,34,34,42)
D.hvB=new C.ae2(442,452,56,50,64)
D.aAf=w([D.hvC,D.hvA,D.hvB],A.at("O<ae2>"))
D.d4w=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bgp=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bm1=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dxM=w([D.ahz,D.bgp,D.bm1],x.O)
D.bKT=new C.uU("leather","Leather",D.dxM,"vintage")
D.dbG=w([B.d6,B.FZ,A8.YH],x.O)
D.bL_=new C.uU("midnight","Midnight",D.dbG,"starry")
D.d3p=w([B.eq,B.e7,B.le],x.O)
D.bKZ=new C.uU("forest","Forest",D.d3p,"story")
D.dzO=w([B.es,B.el,B.ks],x.O)
D.bKW=new C.uU("burgundy","Burgundy",D.dzO,"royal")
D.cLJ=w([B.aF,B.oi,B.o5],x.O)
D.bKX=new C.uU("royal","Royal",D.cLJ,"royal")
D.d6_=w([B.bw,B.cr,F.nx],x.O)
D.bKU=new C.uU("charcoal","Charcoal",D.d6_,"geo")
D.dxV=w([B.c6,B.dL,B.yg],x.O)
D.bKY=new C.uU("sunset","Sunset",D.dxV,"sunset")
D.dyC=w([B.jh,B.G8,B.YK],x.O)
D.bKV=new C.uU("ocean","Ocean",D.dyC,"band")
D.zQ=w([D.bKT,D.bL_,D.bKZ,D.bKW,D.bKX,D.bKU,D.bKY,D.bKV],A.at("O<uU>"))
D.d6v=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.d76=w([B.an,B.aM,B.U],x.O)
D.d8s=w([B.el,B.e7,B.d6,B.hc,B.yk,B.cG,B.kt,B.e8,B.cZ],x.O)
D.d8t=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.fcP=new A.cU(B.ds,B.dF,8)
D.d8E=w([D.fcP],x.F)
D.d9M=w([B.bT,B.dL,B.ko],x.O)
D.bil=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bmj=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bqw=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.da1=w([D.bil,G.aj0,D.bmj,D.bqw,D.akg],x.O)
D.dai=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.dau=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bfL=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.blG=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.daX=w([D.bfL,D.ah1,D.blG],x.O)
D.dbB=w([B.bT,B.hE],x.O)
D.dbH=w([G.np,B.ic,G.afT,B.cO],x.O)
D.ddi=w([B.cO,G.np,B.ic,D.lC,B.cO],x.O)
D.ddU=w([B.aS,B.w4,B.y4],x.O)
D.aBg=w(["True","False"],x.s)
D.eKi=new A.y(-0.65,0.6)
D.eWY=new A.y(-0.2,0.95)
D.eY2=new A.y(0.25,0.95)
D.eNM=new A.y(0.7,0.6)
D.eYC=new A.y(1,0.1)
D.deG=w([Ar.Uy,D.eKi,D.eWY,D.eY2,D.eNM,D.eYC],x.G)
D.boq=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.buD=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bjm=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.deM=w([D.boq,D.buD,D.bjm],x.O)
D.deQ=w([B.bM,B.c0,B.dj,B.aS],x.O)
D.dfk=w([B.hV,B.c6,B.rC],x.O)
D.dfI=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.dfU=w([B.eW,B.cG],x.O)
D.bpS=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dgj=w([D.bpS,D.afG],x.O)
D.dgu=w([B.cF,B.fp,B.fF],x.O)
D.dgF=w([B.aH,B.bl,B.d6],x.O)
D.dhh=w([B.er,B.cX,B.e7],x.O)
D.dhB=w([B.dK,B.d6,B.FZ],x.O)
D.dhF=w([B.bj,B.mK,B.cZ],x.O)
D.dhX=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bp5=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bnk=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dig=w([D.bp5,D.agY,D.bnk],x.O)
D.dj4=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dk7=w([1,0,7,6,3,2],x.t)
D.a5K=w(["leather","linen","plain","stars","rays"],x.s)
D.dkj=w([0.5,2,3.6],x.n)
D.dkR=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bTc=new A.a0(985219,"MaterialIcons",!1)
D.bSK=new A.a0(983781,"MaterialIcons",!1)
D.aBJ=w([B.a2m,B.hK,B.lN,B.ig,D.bTc,B.HG,B.qJ,D.bSK,K.aqN,B.CZ,B.qL,B.n2],A.at("O<a0>"))
D.a5O=w(["double","single","corners","none"],x.s)
D.bKI=new C.zG("Little Seed","\ud83c\udf31",0)
D.bKK=new C.zG("Young Listener","\ud83d\udc42",40)
D.bKJ=new C.zG("Storyteller","\ud83e\ude98",120)
D.bKH=new C.zG("Village Pride","\ud83c\udfe1",300)
D.bKF=new C.zG("Keeper of Roots","\ud83c\udf33",700)
D.bKG=new C.zG("Elder of the Fire","\ud83d\udd25",1500)
D.aBL=w([D.bKI,D.bKK,D.bKJ,D.bKH,D.bKF,D.bKG],A.at("O<zG>"))
D.dm_=w([B.db,B.bm,B.e8],x.O)
D.dmf=w([],x.C)
D.DA=w([],x.u)
D.aLR=new A.o(225,528)
D.eLY=new A.y(D.aLR,1)
D.enS=new A.o(350,548)
D.eSf=new A.y(D.enS,0.95)
D.aLM=new A.o(158,656)
D.eS8=new A.y(D.aLM,1.12)
D.eoD=new A.o(92,544)
D.eHw=new A.y(D.eoD,0.93)
D.enV=new A.o(398,614)
D.eO8=new A.y(D.enV,1.04)
D.enJ=new A.o(318,662)
D.eCZ=new A.y(D.enJ,1.1)
D.a5W=w([D.eLY,D.eSf,D.eS8,D.eHw,D.eO8,D.eCZ],A.at("O<+(o,H)>"))
D.doi=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.doK=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dpM=w([B.cO,G.np,B.ic,D.lC,B.cO,B.ic],x.O)
D.drb=w([B.av,B.fp,B.hc],x.O)
D.drN=w([-70,58],x.n)
D.drP=w([-70,-30,20],x.n)
D.dsQ=w([B.bj,B.mK,B.Gj],x.O)
D.dt6=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dN4=new C.lW("construction","Construction","Jobsite & builds",B.uK)
D.dNb=new C.lW("house","Home Build","Houses & rooms",B.wF)
D.dN1=new C.lW("grocery","Grocery","Store & pantry",B.a3g)
D.dN0=new C.lW("calculator","Calculations","Math & estimates",B.Pd)
D.dN9=new C.lW("lumber","Materials","Lumber & supplies",B.Px)
D.dMY=new C.lW("kitchen","Kitchen","Remodel & meals",A2.Py)
D.bSI=new A.a0(983756,"MaterialIcons",!1)
D.dN2=new C.lW("landscape","Landscaping","Yard & garden",D.bSI)
D.dMX=new C.lW("plumbing","Plumbing","Pipes & water",B.pD)
D.dNc=new C.lW("electrical","Electrical","Wiring & power",B.hw)
D.dMV=new C.lW("store","Retail Shop","Daily business",B.ll)
D.dMW=new C.lW("paint_remodel","Paint & Remodel","Colors & walls",A2.Ps)
D.bS7=new A.a0(983311,"MaterialIcons",!1)
D.dN8=new C.lW("roofing","Roofing","Roofs & exteriors",D.bS7)
D.bSV=new A.a0(983986,"MaterialIcons",!1)
D.dMU=new C.lW("warehouse","Warehouse","Storage & stock",D.bSV)
D.dN6=new C.lW("vehicles","Vehicles","Fleet & transport",B.HH)
D.bPV=new A.a0(62785,"MaterialIcons",!1)
D.dN_=new C.lW("farm","Farm","Crops & livestock",D.bPV)
D.dMZ=new C.lW("restaurant","Restaurant","Food & catering",B.wO)
D.dN5=new C.lW("tools","Tools","Workshop gear",B.HD)
D.dNa=new C.lW("wallet","Cash & Wallet","Quick spending",B.jG)
D.bR5=new A.a0(63395,"MaterialIcons",!1)
D.dN7=new C.lW("concrete","Concrete","Foundation work",D.bR5)
D.dN3=new C.lW("blueprint","Blueprint","Plans & design",Am.apl)
D.a6i=w([D.dN4,D.dNb,D.dN1,D.dN0,D.dN9,D.dMY,D.dN2,D.dMX,D.dNc,D.dMV,D.dMW,D.dN8,D.dMU,D.dN6,D.dN_,D.dMZ,D.dN5,D.dNa,D.dN7,D.dN3],A.at("O<lW>"))
D.dtD=w([B.bv,B.bm],x.O)
D.dup=w([B.iE,B.oc,B.dU],x.O)
D.ahO=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.aiN=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bnF=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bfh=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aCV=w([D.ahO,D.aiN,D.bnF,D.bfh],x.O)
D.dvB=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a6t=w(["top","middle","bottom"],x.s)
D.dx0=w([B.co,B.bl,B.d6],x.O)
D.aDf=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.b9_=new A.ac(0,B.G,B.aV,B.H,14)
D.aDi=w([D.b9_],x.V)
D.bmz=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dxF=w([D.agh,D.ZK,D.bmz],x.O)
D.dxG=w([B.b6,B.cX,B.e7],x.O)
D.ens=new A.o(24,-8)
D.eoa=new A.o(48,0)
D.eno=new A.o(24,6)
D.dzl=w([B.H,D.ens,D.eoa,D.eno],x.g)
D.dzK=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.ejY={top:0,middle:1,bottom:2}
D.dCZ=new A.bu(D.ejY,["Top","Middle","Bottom"],x.r)
D.ejy={double:0,single:1,corners:2,none:3}
D.dD4=new A.bu(D.ejy,["Double line","One line","Corners","None"],x.r)
D.ekO={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dEA=new A.bu(D.ekO,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dEM=new A.bu(B.i1,[],A.at("bu<G,+(m,m)>"))
D.ejQ={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.DN=new A.bu(D.ejQ,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.at("bu<m,G>"))
D.dHt=new H.NU(32,null)
D.dHu=new H.NU(40,null)
D.dHv=new H.NU(46,null)
D.aLj=new C.au2(null)
D.emj=new A.o(0,40)
D.emk=new A.o(0,412)
D.emm=new A.o(0,900)
D.emw=new A.o(0,-34)
D.emx=new A.o(0,-46)
D.emz=new A.o(0,-74)
D.emC=new A.o(100,300)
D.emD=new A.o(10,14)
D.emG=new A.o(10,-10)
D.emL=new A.o(10,-46)
D.emM=new A.o(10,-58)
D.emN=new A.o(116,442)
D.emP=new A.o(11,-1)
D.emQ=new A.o(11,-10)
D.emR=new A.o(11,-21)
D.aLH=new A.o(11,-60)
D.emY=new A.o(14,-2)
D.emZ=new A.o(150,520)
D.a8s=new A.o(150,592)
D.en1=new A.o(15,-15)
D.en2=new A.o(16,-1)
D.en6=new A.o(190,444)
D.en9=new A.o(1,5)
D.enh=new A.o(21,-78)
D.eni=new A.o(222,615)
D.Jz=new A.o(225,300)
D.a8v=new A.o(225,574)
D.enr=new A.o(24,-52)
D.ent=new A.o(250,210)
D.enE=new A.o(2,-56)
D.aLV=new A.o(300,0)
D.enF=new A.o(300,440)
D.enI=new A.o(318,476)
D.enL=new A.o(324,144)
D.a8y=new A.o(332,150)
D.enN=new A.o(335,585)
D.enO=new A.o(338,140)
D.enP=new A.o(340,158)
D.enR=new A.o(34,-60)
D.Ed=new A.o(36,-24)
D.enT=new A.o(372,470)
D.enU=new A.o(390,455)
D.eo2=new A.o(42,468)
D.eo3=new A.o(431,510)
D.eo4=new A.o(431,520)
D.eo5=new A.o(45,-92)
D.eo6=new A.o(46,20)
D.eo7=new A.o(46,-92)
D.eo8=new A.o(46,-94)
D.eo9=new A.o(47,-4)
D.eob=new A.o(48,-4)
D.eoj=new A.o(4,-26)
D.eor=new A.o(60,455)
D.eoy=new A.o(8,14)
D.eoC=new A.o(8,-76)
D.eoE=new A.o(95,575)
D.eoF=new A.o(98,-24)
D.eoH=new A.o(9,-2)
D.eoI=new A.o(9,-58)
D.aM3=new A.o(9,-79)
D.eoJ=new A.o(9,-9)
D.epl=new A.o(16.5,8)
D.epn=new A.o(3.2,0)
D.epp=new A.o(-16.5,8)
D.epw=new A.o(16.5,2)
D.epz=new A.o(-3.2,0)
D.epI=new A.o(9.5,6)
D.epM=new A.o(-10,14)
D.epN=new A.o(-10,-12)
D.epO=new A.o(-10,-58)
D.epQ=new A.o(-11,-1)
D.epR=new A.o(-11,-10)
D.epT=new A.o(-11,-60)
D.epU=new A.o(-12,-14)
D.epV=new A.o(-12,-16)
D.eq1=new A.o(-14,-2)
D.eq4=new A.o(-15,-15)
D.eq5=new A.o(-15,-3)
D.eq7=new A.o(-16,-1)
D.eqo=new A.o(-24,-52)
D.eqv=new A.o(-2,-34)
D.eqw=new A.o(-2,-38)
D.eqy=new A.o(-30,-100)
D.a8z=new A.o(-36,-24)
D.eqJ=new A.o(-4,-26)
D.eqL=new A.o(-4,-6)
D.eqV=new A.o(-8,-3)
D.eqW=new A.o(-8,-48)
D.eqZ=new A.o(-9,-2)
D.er0=new A.o(-9,-58)
D.er1=new A.o(-9,-79)
D.er2=new A.o(-9,-9)
D.er4=new A.o(-9.5,6)
D.eri=new A.o(-16.5,2)
D.fN9=new A.A("Write a new book",null,B.h8,null,B.K,null,null,null,null,null,null,null)
D.erS=new A.D(B.kv,D.fN9,null)
D.h1_=new A.A("Tap to go on",null,B.vB,null,null,null,null,null,null,null,null,null)
D.esd=new A.D(B.lg,D.h1_,null)
D.are=new A.ae(B.hY,18,B.c,null,null,null)
D.fGd=new A.A("Add",null,B.l3,null,null,null,null,null,null,null,null,null)
D.df3=w([D.are,B.r7,D.fGd],x.p)
D.f9W=new A.c8(B.aL,B.e,B.P,B.l,null,B.p,null,0,D.df3,null)
D.esg=new A.D(B.nE,D.f9W,null)
D.esh=new A.D(E.alo,A6.Y3,null)
D.fzO=new A.F(!0,B.c,null,null,null,null,13.5,B.I,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJo=new A.A("New Project",null,D.fzO,null,null,null,null,null,null,null,null,null)
D.djr=w([D.are,B.ae,D.fJo],x.p)
D.f9Z=new A.c8(B.aL,B.e,B.P,B.l,null,B.p,null,0,D.djr,null)
D.esv=new A.D(B.iw,D.f9Z,null)
D.fLU=new A.A("Choose your header",null,A0.vA,null,null,null,null,null,null,null,null,null)
D.esR=new A.D(B.hX,D.fLU,null)
D.bev=new A.fk(2.2,null,null,null,null,B.cG,null,null,null,null)
D.ffG=new A.a5(22,22,D.bev,null)
D.bcB=new A.ch(B.A,null,null,D.ffG,null)
D.esW=new A.D(B.a04,D.bcB,null)
D.bDn=new A.R(14,2,14,6)
D.h_3=new A.A("The top of your book. Tap a design to see it.",null,Q.tF,null,null,null,null,null,null,null,null,null)
D.esX=new A.D(D.bDn,D.h_3,null)
D.fL3=new A.A("\ud83c\udfc6 A new record!",null,B.h1,null,null,null,null,null,null,null,null,null)
D.esZ=new A.D(B.lg,D.fL3,null)
D.euy=new A.j2(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.euB=new A.j2(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aMF=new A.j2(1,0.9607843137254902,0.48627450980392156,0)
D.JI=new A.j2(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.Ap=new A.j2(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.euH=new A.j2(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hxL=new C.bjv(null)
D.byc=new A.mJ(D.hxL,null,B.az,null,null)
D.aQi=new A.cK(0,0,0,0,null,null,D.byc,null)
D.fGf=new A.A("\ud83c\udfc5",null,B.aaR,null,null,null,null,null,null,null,null,null)
D.ez6=new A.cK(null,0,-34,null,null,null,D.fGf,null)
D.eHb=new A.y("E","Sit by the fire again")
D.eMM=new A.y("C","Good Learner")
D.eQc=new A.y("D","Still Growing")
D.eUM=new A.y(-42,42)
D.eW6=new A.y("B","Faithful Listener")
D.eY4=new A.y("A","Keeper of the Family")
D.f0e=new A.b5(-17,0.7,0)
D.f0O=new A.b5(-8,0.95,1.3)
D.f1R=new A.b5(18,0.65,5.2)
D.f1T=new A.b5(0,1.15,2.6)
D.f2c=new A.b5(9,0.9,3.9)
D.f43=new A.cu([0,0,1,1])
D.aRN=new A.a1(0,0,520,160)
D.f6Y=new A.a1(10,612,440,618)
D.f6Z=new A.a1(10,612,440,628)
D.f71=new A.a1(14,-64,34,-12)
D.f74=new A.a1(300,336,350,348)
D.a9t=new A.a1(30,96,420,346)
D.f75=new A.a1(30,-9,46,1)
D.f76=new A.a1(4,2,11,14)
D.f78=new A.a1(-8,-12.5,8,-7)
D.f79=new A.a1(-16.5,-21,16.5,1)
D.f7a=new A.a1(60,342,88,348)
D.Uz=new A.a1(66,-66,94,-36)
D.f7b=new A.a1(6,8,10,14)
D.f7e=new A.a1(95,343,115,348)
D.f7f=new A.a1(-6.5,-74,6.5,-58)
D.f7l=new A.a1(-100,-74,100,-12)
D.f7m=new A.a1(-10,8,-6,14)
D.f7n=new A.a1(-11,2,-4,14)
D.f7o=new A.a1(-11,-70,11,-56)
D.f7v=new A.a1(-13,-24,13,-4)
D.f7B=new A.a1(-15,-21,15,0)
D.f7E=new A.a1(-16,-21,16,1)
D.f7F=new A.a1(-16,-21,16,2)
D.f7I=new A.a1(-16,-26,16,-6)
D.f7S=new A.a1(-230,-26,230,26)
D.f8f=new A.a1(-38,-26,12,-6)
D.f8j=new A.a1(-3,-70,3,-63)
D.f8k=new A.a1(-44,-22,44,0)
D.f8m=new A.a1(-46,-9,-30,1)
D.aRR=new A.a1(-80,-190,80,20)
D.f8t=new A.a1(-8,-26,40,-6)
D.f8u=new A.a1(-98,-80,92,-75)
D.f8v=new A.a1(-9,-15,9,-9)
D.fZC=new A.A("Let the AI write it from your tree",null,B.iC,null,B.K,null,null,null,null,null,null,null)
D.bLL=new A.dl(1,B.cm,D.fZC,null)
D.dbA=w([E.a3L,B.ae,D.bLL],x.p)
D.f9z=new A.c8(B.aL,B.e,B.P,B.l,null,B.p,null,0,D.dbA,null)
D.fFU=new A.A("Save member",null,B.ch,null,null,null,null,null,null,null,null,null)
D.drx=w([D.as5,B.ae,D.fFU],x.p)
D.f9K=new A.c8(B.aL,B.bb,B.j,B.l,null,B.p,null,0,D.drx,null)
D.bXl=new A.ae(B.ie,14,B.b2,null,null,null)
D.fto=new A.F(!0,B.b2,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJO=new A.A("Cashier",null,D.fto,null,null,null,null,null,null,null,null,null)
D.djY=w([D.bXl,B.bn,D.fJO],x.p)
D.f9O=new A.c8(B.aL,B.e,B.P,B.l,null,B.p,null,0,D.djY,null)
D.fFV=new A.A("Transfer & settings",null,B.dk,null,null,null,null,null,null,null,null,null)
D.bJs=new A.bz(1,B.bc,D.fFV,null)
D.d2S=w([D.arG,B.au,D.bJs],x.p)
D.f9P=new A.c8(B.aL,B.e,B.j,B.l,null,B.p,null,0,D.d2S,null)
D.fem=new A.av(16,40)
D.fer=new A.av(22,64)
D.fey=new A.av(280,88)
D.ffm=new A.a5(30,null,null,null)
D.fF_=new A.A("The teacher is writing\u2026",null,B.AL,null,null,null,null,null,null,null,null,null)
D.bdJ=new A.ch(B.A,null,null,D.fF_,null)
D.hrE=new A.bC("w",x.W)
D.ffM=new A.a5(null,56,D.bdJ,D.hrE)
D.fgz=new A.hH(5,8,8,1,null)
D.fgH=new A.hH(2,12,12,1.05,null)
D.fJu=new A.A("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fhp=new A.b0(D.fJu,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fJJ=new A.A("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aU7=new A.b0(D.fJJ,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fSb=new A.A("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fhT=new A.b0(D.fSb,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h22=new A.A("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fhY=new A.b0(D.h22,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fLS=new A.A("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fi4=new A.b0(D.fLS,null,null,null,null,null,null,null,null,null,null,null,null,B.h5,!1,null,null,null,B.t,null)
D.h_g=new A.A("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aUb=new A.b0(D.h_g,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fLQ=new A.A("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fiu=new A.b0(D.fLQ,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fGw=new A.A("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fiw=new A.b0(D.fGw,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fPD=new A.A("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fiC=new A.b0(D.fPD,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h2N=new A.A("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fjh=new A.b0(D.h2N,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fYw=new A.A("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fjH=new A.b0(D.fYw,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h26=new A.A("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fjK=new A.b0(D.h26,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fTS=new A.A("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fjM=new A.b0(D.fTS,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fNM=new A.A("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fjN=new A.b0(D.fNM,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fNN=new A.A("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fkO=new A.b0(D.fNN,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fJw=new A.A("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fl5=new A.b0(D.fJw,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fLv=new A.A("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.flp=new A.b0(D.fLv,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fTi=new A.A("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.flG=new A.b0(D.fTi,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fOC=new A.A("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.flH=new A.b0(D.fOC,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fys=new A.F(!0,B.bD,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fni=new A.eo("\u2665",null,null,B.cK,null,null,null,null,null,null,D.fys)
D.fvH=new A.F(!0,B.aP,null,null,null,null,28,B.V,B.cH,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fny=new A.eo("Today: how well do you know the family?",null,null,B.cK,null,null,null,null,null,null,D.fvH)
D.fnP=new A.F(!0,B.q8,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foY=new A.F(!0,D.kM,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpn=new A.F(!0,D.kM,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpr=new A.F(!0,B.cO,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpA=new A.F(!0,D.fz,null,null,null,null,15,B.V,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpL=new A.F(!0,D.fz,null,null,null,null,13,B.I,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq5=new A.t7(!0,B.tr,null,null,null,null,B.dE,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fql=new A.F(!0,B.cO,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqo=new A.F(!0,D.kM,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqp=new A.F(!0,B.cO,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqu=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqx=new A.F(!0,B.cO,null,null,null,null,15,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr2=new A.F(!0,B.b2,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr3=new A.F(!0,B.ac,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr5=new A.F(!0,B.aP,null,null,null,null,15.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frx=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVo=new A.F(!0,B.aT,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVp=new A.F(!0,D.lB,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frX=new A.F(!0,B.cO,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aaW=new A.t7(!0,B.U4,null,null,null,null,B.dE,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.Vt=new A.F(!0,B.cO,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs6=new A.F(!0,B.U,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsb=new A.F(!0,D.fz,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsz=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftK=new A.F(!0,D.fz,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVz=new A.F(!0,D.fz,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu3=new A.F(!0,B.ac,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fue=new A.F(!0,D.fz,null,null,null,null,null,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fug=new A.F(!0,null,null,null,null,null,8,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fum=new A.F(!0,L.j_,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVD=new A.F(!0,D.fz,null,null,null,null,14.5,B.V,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvh=new A.F(!0,D.fz,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvA=new A.F(!0,D.fz,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvC=new A.F(!0,B.U,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvE=new A.F(!0,B.cO,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw0=new A.F(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A5.Iz,null,null,null)
D.aVS=new A.F(!0,D.fz,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwp=new A.F(!0,B.U,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwL=new A.F(!0,B.fh,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx8=new A.F(!0,B.bR,null,null,null,null,8,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxc=new A.F(!0,B.bC,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxo=new A.F(!0,B.c,null,null,null,null,13.5,B.I,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxr=new A.F(!0,D.fz,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxz=new A.F(!0,D.G7,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxI=new A.F(!0,B.b2,null,null,null,null,13,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy5=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyc=new A.F(!0,B.ac,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Dq,null,null,null)
D.fyD=new A.F(!0,B.cO,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyM=new A.F(!0,B.cG,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz_=new A.F(!0,D.lC,null,null,null,null,13,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWc=new A.F(!0,D.fz,null,null,null,null,null,B.I,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.KP=new A.F(!0,B.cO,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWe=new A.F(!0,B.cO,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Dq,null,null,null)
D.fzj=new A.F(!0,B.bR,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzn=new A.F(!0,G.np,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzM=new A.F(!0,B.b2,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA3=new A.F(!0,D.fz,null,null,null,null,15,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAq=new A.F(!0,B.c,null,null,null,null,null,B.I,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAP=new A.F(!0,D.fz,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBk=new A.F(!0,D.fz,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBp=new A.F(!0,B.an,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBy=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.abo=new A.F(!0,B.an,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.abq=new A.F(!0,D.lB,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDi=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDA=new A.F(!0,B.aP,null,null,null,null,27,B.V,B.cH,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDH=new A.F(!0,L.j_,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDP=new A.F(!0,L.j_,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEi=new A.A("Time:",null,B.hl,null,null,null,null,null,null,null,null,null)
D.fED=new A.A("\ud83c\udfae",null,K.abf,null,null,null,null,null,null,null,null,null)
D.fEE=new A.A("Themes",null,B.pS,null,null,null,null,null,null,null,null,null)
D.fF7=new A.A("\ud83c\udfb2",null,B.xo,null,null,null,null,null,null,null,null,null)
D.fFb=new A.A("Delete this game?",null,B.iC,null,null,null,null,null,null,null,null,null)
D.fFi=new A.A("Add Item",null,B.ch,null,null,null,null,null,null,null,null,null)
D.ftY=new A.F(!0,B.U,null,null,null,null,22,B.I,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFJ=new A.A("Debt receipt",null,D.ftY,null,B.K,null,null,null,null,null,null,null)
D.aWs=new A.F(!0,B.an,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fG1=new A.A("Person who owes",null,D.aWs,null,null,null,null,null,null,null,null,null)
D.fGZ=new A.A("Notes",null,B.ab3,null,null,null,null,null,null,null,null,null)
D.fHp=new A.A("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fsQ=new A.F(!0,B.c,null,null,null,null,11,B.I,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHs=new A.A("Share",null,D.fsQ,null,null,null,null,null,null,null,null,null)
D.fIq=new A.A("Move your family trees",null,I.abm,null,null,null,null,null,null,null,null,null)
D.fJ5=new A.A("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fJI=new A.A("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fK5=new A.A("SAVE",null,D.KP,null,null,null,null,null,null,null,null,null)
D.fKI=new A.A("The round button is the right answer.",null,Q.xl,null,null,null,null,null,null,null,null,null)
D.fL2=new A.A("Remove this book?",null,B.h1,null,null,null,null,null,null,null,null,null)
D.fzJ=new A.F(!0,B.cO,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Dq,null,null,null)
D.fLA=new A.A("Fireside Stories",null,D.fzJ,null,null,null,null,null,null,null,null,null)
D.aWY=new A.A("Download",null,B.ch,null,null,null,null,null,null,null,null,null)
D.fMg=new A.A("What should the AI do?",null,B.dk,null,null,null,null,null,null,null,null,null)
D.fsu=new A.F(!0,D.lB,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMv=new A.A("REPORT CARD",null,D.fsu,null,null,null,null,null,null,null,null,null)
D.fNg=new A.A("Calabash Catch",null,B.KS,null,null,null,null,null,null,null,null,null)
D.fNI=new A.A("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fO9=new A.A("\ud83c\udfe1",null,B.EK,null,null,null,null,null,null,null,null,null)
D.fOR=new A.A("Ribbon bookmark",null,B.jw,null,null,null,null,null,null,null,null,null)
D.fBj=new A.F(!0,B.b2,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPm=new A.A("NGMY.ORG",null,D.fBj,null,B.K,null,null,null,null,null,null,null)
D.fQF=new A.A("Scan family tree QR",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fxs=new A.F(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRr=new A.A("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fxs,null,B.K,null,null,null,null,null,null,null)
D.fSF=new A.A("Delete",null,B.Vn,null,null,null,null,null,null,null,null,null)
D.fSG=new A.A("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fSO=new A.A("Thumbnail",null,B.pS,null,null,null,null,null,null,null,null,null)
D.fTo=new A.A("Save the cover",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fTt=new A.A("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.xq,null,B.K,null,null,null,null,null,null,null)
D.fTT=new A.A("Your photos",null,B.pS,null,null,null,null,null,null,null,null,null)
D.fU8=new A.A("Create Project",null,B.ch,null,null,null,null,null,null,null,null,null)
D.fUw=new A.A("\u2b50 stars",null,B.VB,null,null,null,null,null,null,null,null,null)
D.fUK=new A.A("Design your cover",null,A0.vA,null,null,null,null,null,null,null,null,null)
D.fUQ=new A.A("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fUT=new A.A("PICTURE",null,M.vF,null,null,null,null,null,null,null,null,null)
D.fUV=new A.A("\ud83c\udfaf",null,D.VQ,null,null,null,null,null,null,null,null,null)
D.fVh=new A.A("Paid",null,B.ch,null,null,null,null,null,null,null,null,null)
D.fVj=new A.A("You can undo it right after.",null,Q.xl,null,null,null,null,null,null,null,null,null)
D.fVR=new A.A("Print",null,B.vC,null,null,null,null,null,null,null,null,null)
D.fWf=new A.A("Amount owed",null,D.aWs,null,null,null,null,null,null,null,null,null)
D.fWu=new A.A("Got it",null,B.ch,null,null,null,null,null,null,null,null,null)
D.fX5=new A.A("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fX8=new A.A("Add to budget",null,B.ch,null,null,null,null,null,null,null,null,null)
D.fXA=new A.A("Debtor signature",null,B.ab3,null,null,null,null,null,null,null,null,null)
D.fXK=new A.A("Change icon",null,B.ab2,null,null,null,null,null,null,null,null,null)
D.fYx=new A.A("MADE BY THE SYSTEM, FROM YOUR TREE",null,T.tH,null,null,null,null,null,null,null,null,null)
D.fYZ=new A.A("Family tree QR",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fZ4=new A.A("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.VP,null,null,null,null,null,null,null,null,null)
D.fZs=new A.A("Download",null,B.vC,null,null,null,null,null,null,null,null,null)
D.fZt=new A.A("The person who planted this tree has not made a game yet.",null,B.AU,null,null,null,null,null,null,null,null,null)
D.fZx=new A.A("Change",null,B.pS,null,null,null,null,null,null,null,null,null)
D.h_m=new A.A("Clear all",null,B.ch,null,null,null,null,null,null,null,null,null)
D.h_p=new A.A("WHAT SHOULD IT CHANGE?",null,M.vF,null,null,null,null,null,null,null,null,null)
D.h_Z=new A.A("COLOUR",null,M.vF,null,null,null,null,null,null,null,null,null)
D.h0c=new A.A("Do it",null,B.cD,null,null,null,null,null,null,null,null,null)
D.h0f=new A.A("Create Tree",null,B.ch,null,null,null,null,null,null,null,null,null)
D.h0q=new A.A("Give me another clue",null,D.KP,null,null,null,null,null,null,null,null,null)
D.h1l=new A.A("Create Family Tree",null,B.fa,null,null,null,null,null,null,null,null,null)
D.h1v=new A.A("THE TEACHER EXPLAINS THESE",null,T.tH,null,null,null,null,null,null,null,null,null)
D.fnO=new A.F(!0,E.kq,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1B=new A.A("Write the first page myself",null,D.fnO,null,null,null,null,null,null,null,null,null)
D.h29=new A.A("Use this header",null,B.cD,null,null,null,null,null,null,null,null,null)
D.h2g=new A.A("Create Project",null,E.aW9,null,null,null,null,null,null,null,null,null)
D.hsZ=new C.acH(1,"header")
D.acs=new C.acH(2,"projects")
D.ht_=new C.acH(3,"cashier")
D.act=new C.acH(4,"familyTree")
D.hGH=new C.cGc(0,"start")
D.hGI=new C.cGd(0,"start")
D.htn=new C.ZN(null)
D.huo=new C.a_f(null)
D.dEJ=new A.bu(B.i1,[],A.at("bu<m,GE>"))
D.dmE=w([],x.dE)
D.dmF=w([],x.M)
D.huV=new C.bgH(D.dEJ,D.dmE,D.dmF,0,0,null,null)
D.b0t=new C.a05(0,"intro")
D.b0u=new C.a05(1,"countdown")
D.acH=new C.a05(2,"ask")
D.WL=new C.a05(3,"reveal")
D.b0v=new C.a05(4,"end")
D.hxN=new C.tf(F.Gg,D.lC,B.cO,F.lD,5,!1,!1,!1,0,null)
D.hxO=new C.tf(F.Gg,B.es,B.cO,B.bP,2,!0,!0,!1,2,B.cO)
D.hxP=new C.tf(B.ok,B.cG,B.cO,F.lD,2,!0,!1,!1,2,B.av)
D.hxQ=new C.tf(F.Gg,B.dK,B.cO,F.lD,5,!1,!1,!1,1,null)
D.hxR=new C.tf(F.a__,D.aiN,B.cO,F.lD,4,!0,!1,!0,0,null)
D.b0y=new C.tf(F.a__,B.dL,B.cO,F.lD,3,!0,!1,!0,2,null)
D.b0z=new C.tf(F.mU,D.lC,B.c,F.lD,0,!1,!1,!0,0,null)
D.b0A=new C.tf(B.ok,B.aF,B.cO,B.bP,2,!0,!0,!1,2,B.dL)
D.b0B=new C.tf(B.ok,G.np,B.ic,F.lD,5,!1,!1,!0,3,null)
D.hxS=new C.tf(B.ok,B.dL,B.cO,F.lD,0,!0,!1,!1,0,B.aF)
D.b0C=new C.tf(F.Gg,B.es,B.cO,B.bP,1,!1,!0,!1,1,null)
D.b0D=new C.tf(F.FQ,B.av,B.aF,F.lD,4,!0,!1,!0,2,null)
D.hxT=new C.tf(F.mU,B.av,B.es,F.lD,3,!0,!1,!1,0,null)
D.hxU=new C.tf(B.ok,B.dK,B.cO,B.bP,1,!1,!0,!1,1,null)
D.hxV=new C.tf(F.FQ,D.ahO,B.c,F.lD,5,!1,!1,!0,0,null)
D.hyy=new C.a0D(null)
D.hGQ=new C.ag4(0,"still")
D.X7=new C.ag4(1,"walk")
D.b13=new C.ag4(2,"pound")
D.b14=new C.ag4(3,"drum")
D.hCy=new C.a1U(0,"greet")
D.b15=new C.a1U(1,"teach")
D.ad0=new C.a1U(2,"ask")
D.hCz=new C.a1U(3,"feedback")
D.b16=new C.a1U(4,"end")
D.Xc=new C.a2c(0,"intro")
D.Xd=new C.a2c(1,"asking")
D.B9=new C.a2c(2,"reacting")
D.ada=new C.a2c(3,"driving")
D.adb=new C.a2c(4,"arrived")
D.ade=new C.aLv(0,"projects")
D.b1u=new C.aLv(1,"cashier")
D.hEA=new C.aLv(2,"familyTree")})()};
(a=>{a["ISnEQAauzVn6Y/e6VJh1s+z0AxE="]=a.current})($__dart_deferred_initializers__);