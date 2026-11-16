((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,P,A_,R,A8,L,H,E,S,A9,T,Aa,Ab,Ac,A0,Ad,Ae,Q,A1,Af,Ag,Ah,M,A2,Ai,A3,A4,A5,Aj,A6,Ak,G,Al,Am,An,A7,Ao,U,O,Ap,V,Aq,Ar,W,X,F,As,I,K,Y,C={
bG5(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bG5=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vY(null,""),$async$bG5)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.W(y.z)
t=A.nm(b1)
s=A.c1(b3.length,null,!1,x.h5)
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
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.I)(h),++d){a0=h[d]
f.push(A.J(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.X.aw(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.rj(t,a1,B.i5,"book",E.GJ),$async$bG5)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.RE(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.W(l!=null&&A.M3(l)?y.k:y.y)
for(j=J.a7(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a2(r.a(j.h(a2,a7)),q,p):B.cF
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a3N(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bG5,v)},
aii(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aii=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vY(null,""),$async$aii)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.W(y.z)
t=A.nm(b6)
s=x.S
r=A.cX(c1,0,A.dB(4,"count",s),A.U(c1).c)
q=H.a3z(new A.N(r,new C.fPi(),r.$ti.k("N<ak.E,n>")).aN(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fPh(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.X.aw(b7,null)+"\nAllowed values: style one of "+B.d.aN(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aii)
case 6:l=c5
k=H.RE(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.apT(s,D.dGo,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
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
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.I)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.J(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.X.aw(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aii)
case 10:l=c5
k=l==null?null:H.RE(l)
if(k==null)throw A.W(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.de(a8,d),a5=J.aT(a2.a),a2=a2.$ti,a7=new A.kM(a5,a2.k("kM<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gR(a5))
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
p=A.cF(new A.b8(h,s),new C.fPj(),s.k("M.E"),p)
p=H.a3z(A.pL(p,3,A.a4(p).k("M.E")).aN(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cx<1>")
b4=A.C(new A.cx(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.I)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a3N(s,b9),$async$aii)
case 13:b5=c5
for(s=J.a7(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.apT(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aii,v)},
hGw(d,e,f){return A.cg(null,B.w.j(0.65),!1,null,new C.fYV(e,f),d,null,!0,!0,x.g2)},
apT:function apT(d,e,f){this.a=d
this.b=e
this.c=f},
fPi:function fPi(){},
fPh:function fPh(d){this.a=d},
fPj:function fPj(){},
fYV:function fYV(d,e){this.a=d
this.b=e},
bDT(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bDT=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aU(b1,new C.fCm())){u=null
w=1
break}t=B.d.cD(b1,new C.fCn())
s=$.S()
r=new A.q3(new A.pE())
q=A.zz(r,D.aSq)
p=A.K()
p.r=B.c.gp(0)
q.ar(D.aSq,p)
o=A.K()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.a9
o.d=B.bw
o.e=B.dT
n=new C.fCs(t)
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
a3=new A.aG(s.r,B.ai,null,null,p)
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
a3=new A.aG(s.r,B.ai,null,null,p)
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
return A.b(r.o3().xH(520,160),$async$bDT)
case 4:w=3
return A.b(b3.hr(B.hq),$async$bDT)
case 3:b0=b3
u=b0==null?null:J.eU(B.dS.gaV(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDT,v)},
fMZ(d){return C.ilJ(d)},
ilJ(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fMZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bjE()
n=d.x!=null&&d.zL(null).length===0
if(d.x!=null)t=n?D.Aw:D.JS
else t=d.gUD()?D.JS:D.aNi
w=3
return A.b(C.bDT(d.ax),$async$fMZ)
case 3:s=f
p.a=null
if(s!=null)p.a=A.aoy(s)
r=A.a5y(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aNi}else{p.c=C.xp(q,!0)
p.b=n?D.Aw:D.JS}r.a49(A.h8C(new C.fN0(p,d,new C.fN1(),t,n,o),null,D.bHD,B.xf))
u=r.jI(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fMZ,v)},
fTI(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fTI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fMZ(d),$async$fTI)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.aB(q,0,40)
u=Ae.Hy(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fTI,v)},
fCm:function fCm(){},
fCn:function fCn(){},
fCs:function fCs(d){this.a=d},
fN1:function fN1(){},
fN0:function fN0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fN_:function fN_(){},
fZn(d,e){var w=0,v=A.j(x.H)
var $async$fZn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,B.w.j(0.55),!0,null,new C.fZr(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fZn)
case 2:return A.h(null,v)}})
return A.i($async$fZn,v)},
bGx(d,e,f,g){return C.itX(d,e,f,g)},
itX(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bGx=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cM.aO(t)}catch(q){r=null}if(r==null||r.length===0){d.L(x.q).f.T(D.fo2)
w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.fZj(g,r,f),d,null,!0,!0,x.H),$async$bGx)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bGx,v)},
fZs(d,e){var w=0,v=A.j(x.H)
var $async$fZs=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,null,!0,null,new C.fZv(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fZs)
case 2:return A.h(null,v)}})
return A.i($async$fZs,v)},
b01:function b01(d,e){this.c=d
this.a=e},
c8l:function c8l(){},
bde:function bde(d,e){this.b=d
this.a=e},
fZr:function fZr(d,e){this.a=d
this.b=e},
fZo:function fZo(d){this.a=d},
fZp:function fZp(d,e,f){this.a=d
this.b=e
this.c=f},
fZq:function fZq(d,e){this.a=d
this.b=e},
fZj:function fZj(d,e,f){this.a=d
this.b=e
this.c=f},
fZh:function fZh(d){this.a=d},
fZi:function fZi(d,e,f){this.a=d
this.b=e
this.c=f},
fZv:function fZv(d,e){this.a=d
this.b=e},
fZt:function fZt(d){this.a=d},
fZu:function fZu(d,e,f){this.a=d
this.b=e
this.c=f},
fHg(d,e){var w=0,v=A.j(x.y),u,t
var $async$fHg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3k(d),$async$fHg)
case 3:t=g
J.nU(t,new C.fHh(e))
u=A.aiW(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fHg,v)},
fHh:function fHh(d){this.a=d},
aq5:function aq5(d,e,f){this.c=d
this.d=e
this.a=f},
aEQ:function aEQ(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dQQ:function dQQ(d,e){this.a=d
this.b=e},
dQB:function dQB(d,e){this.a=d
this.b=e},
dQE:function dQE(d,e,f){this.a=d
this.b=e
this.c=f},
dQD:function dQD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQC:function dQC(d,e){this.a=d
this.b=e},
dQF:function dQF(d,e){this.a=d
this.b=e},
dQz:function dQz(){},
dQA:function dQA(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dQy:function dQy(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dQj:function dQj(d){this.a=d},
dQk:function dQk(d,e,f){this.a=d
this.b=e
this.c=f},
dQl:function dQl(d,e){this.a=d
this.b=e},
dQi:function dQi(d){this.a=d},
dQq:function dQq(d,e){this.a=d
this.b=e},
dQh:function dQh(d){this.a=d},
dQr:function dQr(d,e,f){this.a=d
this.b=e
this.c=f},
dQs:function dQs(d,e,f){this.a=d
this.b=e
this.c=f},
dQg:function dQg(d,e){this.a=d
this.b=e},
dQt:function dQt(d,e,f){this.a=d
this.b=e
this.c=f},
dQf:function dQf(d,e){this.a=d
this.b=e},
dQu:function dQu(d,e){this.a=d
this.b=e},
dQe:function dQe(d){this.a=d},
dQv:function dQv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQc:function dQc(){},
dQ6:function dQ6(d){this.a=d},
dQ7:function dQ7(d){this.a=d},
dQd:function dQd(d,e){this.a=d
this.b=e},
dQw:function dQw(d,e){this.a=d
this.b=e},
dQb:function dQb(d){this.a=d},
dQx:function dQx(d){this.a=d},
dQa:function dQa(){},
dQm:function dQm(d,e){this.a=d
this.b=e},
dQ9:function dQ9(d){this.a=d},
dQn:function dQn(d,e,f){this.a=d
this.b=e
this.c=f},
dQ8:function dQ8(d,e){this.a=d
this.b=e},
dQ5:function dQ5(d,e){this.a=d
this.b=e},
dQo:function dQo(d){this.a=d},
dQp:function dQp(d,e,f){this.a=d
this.b=e
this.c=f},
dQT:function dQT(){},
dQU:function dQU(d,e){this.a=d
this.b=e},
dQR:function dQR(d){this.a=d},
dQS:function dQS(d){this.a=d},
dQN:function dQN(d,e){this.a=d
this.b=e},
dQO:function dQO(d){this.a=d},
dQG:function dQG(d,e,f){this.a=d
this.b=e
this.c=f},
dQH:function dQH(d,e,f){this.a=d
this.b=e
this.c=f},
dQI:function dQI(d,e,f){this.a=d
this.b=e
this.c=f},
dQJ:function dQJ(d,e,f){this.a=d
this.b=e
this.c=f},
dQK:function dQK(d,e,f){this.a=d
this.b=e
this.c=f},
dQL:function dQL(d,e,f){this.a=d
this.b=e
this.c=f},
dQM:function dQM(d,e,f){this.a=d
this.b=e
this.c=f},
dQV:function dQV(){},
dQW:function dQW(){},
dQX:function dQX(){},
dQY:function dQY(d){this.a=d},
dQP:function dQP(d,e){this.a=d
this.b=e},
hCl(d){return B.d.dL(D.a5g,new C.fI2(d),new C.fI3())},
uW:function uW(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fI2:function fI2(d){this.a=d},
fI3:function fI3(){},
am9:function am9(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aWK:function aWK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
U8:function U8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgS:function bgS(){this.d=$
this.c=this.a=null},
dgt:function dgt(d,e){this.a=d
this.b=e},
dgr:function dgr(d,e){this.a=d
this.b=e},
dgs:function dgs(){},
dgu:function dgu(d,e){this.a=d
this.b=e},
hmD(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bh(J.k(u==null?"":u))
return new C.nw(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
LQ(d,e){return C.ikk(d,e)},
ikk(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$LQ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$LQ)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aU(J.t(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.X.aQ(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.de(p,x.f)
o=A.cF(o,new C.fKy(),o.$ti.k("M.E"),x.B)
n=A.a4(o).k("Y<M.E>")
o=A.C(new A.Y(o,new C.fKz(),n),n.k("M.E"))
B.d.aZ(o,new C.fKA())
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
return A.i($async$LQ,v)},
BE(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$BE=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aA(),$async$BE)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b7(f,new C.fXZ(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aD("String","ngmy_family_book_v1_"+s+"_"+e,B.X.aw(r,null)),$async$BE)
case 4:case 1:return A.h(u,v)}})
return A.i($async$BE,v)},
aSP(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aSP=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LQ(d,e),$async$aSP)
case 2:u=h
t=J.cD(u)
s=t.bj(u,new C.h5A(f))
if(s===-1)t.c9(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.BE(d,e,u),$async$aSP)
case 3:return A.h(null,v)}})
return A.i($async$aSP,v)},
bEl(d,e,f){var w=0,v=A.j(x.H),u
var $async$bEl=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LQ(d,e),$async$bEl)
case 2:u=h
J.nU(u,new C.fH8(f))
w=3
return A.b(C.BE(d,e,u),$async$bEl)
case 3:return A.h(null,v)}})
return A.i($async$bEl,v)},
bEA(d,e){return C.ikj(d,e)},
ikj(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bEA=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bEA)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aU(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.OP
w=1
break}p=B.X.aQ(0,q,null)
if(x.f.b(p)){o=A.a2(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aJ(o.h(0,"emblem"))
k=k==null?null:B.j.M(k)
if(k==null)k=0
if(D.DT.am(0,o.h(0,"foil")))j=A.cO(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.j.D(i==null?25:i,18,36)
h=B.d.q(D.a7_,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.q(D.a6j,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.q(D.a6f,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.d7N,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.Iz(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.OP
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.OP
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bEA,v)},
SL(d,e,f){return C.its(d,e,f)},
its(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$SL=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aA(),$async$SL)
case 7:r=h
w=8
return A.b(r.aD("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.X.aw(f.aj(),null)),$async$SL)
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
Sd(d,e){return C.ikl(d,e)},
ikl(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Sd=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$Sd)
case 7:r=g
q=r.tV("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.LQ(d,e),$async$Sd)
case 8:if(!j.cJ(g)){n=B.a.i(d.toLowerCase())
m=J.lL(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aD("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Sd)
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
r=J.a7(s)
if(r.gJ(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gJ(s):"main"
r.I(s,t)
w=5
return A.b(A.aA(),$async$ahC)
case 5:w=4
return A.b(g.aD("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ahC)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahC,v)},
a4_(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a4_=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Sd(d,e),$async$a4_)
case 2:s=h
J.hc(s,f)
w=3
return A.b(A.aA(),$async$a4_)
case 3:u=h
w=4
return A.b(u.aD("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a4_)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4_)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4_)
case 6:return A.h(null,v)}})
return A.i($async$a4_,v)},
nw:function nw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fKy:function fKy(){},
fKz:function fKz(){},
fKA:function fKA(){},
fXZ:function fXZ(){},
h5A:function h5A(d){this.a=d},
fH8:function fH8(d){this.a=d},
Iz:function Iz(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bRM:function bRM(d){this.a=d},
itM(d,e,f,g,h,i,j){return A.a6(d,!1).ce(A.ec(new C.fYz(j,i,f,e,h,g),!0,null,x.H))},
S8(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$S8=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sd(h,g),$async$S8)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.L(x.q).f.T(D.aUL)
u=!1
w=1
break}w=4
return A.b(C.hGw(d,f,e),$async$S8)
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
p.push(new C.nw(""+(q+n),l,B.a.i(m.b),new A.V(Date.now(),0,!1)))}w=6
return A.b(C.BE(h,r,p),$async$S8)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.SL(h,r,new C.Iz("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$S8)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$S8,v)},
fYz:function fYz(d,e,f,g,h,i){var _=this
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
aBO:function aBO(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dh8:function dh8(d){this.a=d},
dh7:function dh7(d,e){this.a=d
this.b=e},
dgX:function dgX(d,e){this.a=d
this.b=e},
dgU:function dgU(d,e){this.a=d
this.b=e},
dgv:function dgv(d){this.a=d},
dgw:function dgw(d,e){this.a=d
this.b=e},
dgY:function dgY(d){this.a=d},
dgE:function dgE(d){this.a=d},
dgC:function dgC(d){this.a=d},
dgD:function dgD(d){this.a=d},
dgF:function dgF(d){this.a=d},
dgV:function dgV(d){this.a=d},
dgW:function dgW(){},
dgA:function dgA(d){this.a=d},
dgB:function dgB(d,e){this.a=d
this.b=e},
dgG:function dgG(d){this.a=d},
dgH:function dgH(d,e){this.a=d
this.b=e},
dh6:function dh6(d){this.a=d},
dh5:function dh5(d,e){this.a=d
this.b=e},
dh4:function dh4(d){this.a=d},
dgR:function dgR(d){this.a=d},
dgQ:function dgQ(d){this.a=d},
dgS:function dgS(d){this.a=d},
dgx:function dgx(d,e){this.a=d
this.b=e},
dgT:function dgT(d,e){this.a=d
this.b=e},
dgK:function dgK(d){this.a=d},
dgL:function dgL(d){this.a=d},
dgJ:function dgJ(){},
dgM:function dgM(d){this.a=d},
dgN:function dgN(d){this.a=d},
dgO:function dgO(d,e){this.a=d
this.b=e},
dgP:function dgP(d,e,f){this.a=d
this.b=e
this.c=f},
dgI:function dgI(d,e){this.a=d
this.b=e},
dh_:function dh_(d){this.a=d},
dgZ:function dgZ(){},
dh0:function dh0(d){this.a=d},
dh1:function dh1(d){this.a=d},
dh2:function dh2(d){this.a=d},
dh3:function dh3(d,e){this.a=d
this.b=e},
dgy:function dgy(d){this.a=d},
dgz:function dgz(d){this.a=d},
a_M:function a_M(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhg:function bhg(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
diV:function diV(d){this.a=d},
diW:function diW(d){this.a=d},
diU:function diU(d){this.a=d},
diX:function diX(d){this.a=d},
diT:function diT(d){this.a=d},
diY:function diY(d){this.a=d},
diS:function diS(d){this.a=d},
diZ:function diZ(d,e){this.a=d
this.b=e},
diR:function diR(d,e){this.a=d
this.b=e},
dj_:function dj_(d,e){this.a=d
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
aBR:function aBR(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dhn:function dhn(d,e){this.a=d
this.b=e},
dhm:function dhm(d,e){this.a=d
this.b=e},
dhr:function dhr(d){this.a=d},
dhq:function dhq(d,e){this.a=d
this.b=e},
dho:function dho(d){this.a=d},
dhp:function dhp(d){this.a=d},
dhs:function dhs(d){this.a=d},
dht:function dht(d){this.a=d},
dhl:function dhl(d,e){this.a=d
this.b=e},
dhk:function dhk(d,e){this.a=d
this.b=e},
KW:function KW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a__:function a__(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cPH:function cPH(d){this.a=d},
cPI:function cPI(){},
cPJ:function cPJ(d){this.a=d},
bet:function bet(d,e,f){this.b=d
this.c=e
this.a=f},
bek:function bek(d,e){this.b=d
this.a=e},
uX:function uX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_i:function a_i(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ber:function ber(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d8k:function d8k(d,e,f){this.a=d
this.b=e
this.c=f},
d8j:function d8j(d,e){this.a=d
this.b=e},
d8J:function d8J(d){this.a=d},
d8w:function d8w(){},
d8K:function d8K(d){this.a=d},
d8v:function d8v(){},
d8L:function d8L(d,e){this.a=d
this.b=e},
d8u:function d8u(d,e){this.a=d
this.b=e},
d8M:function d8M(d,e){this.a=d
this.b=e},
d8t:function d8t(d,e){this.a=d
this.b=e},
d8N:function d8N(d){this.a=d},
d8s:function d8s(){},
d8O:function d8O(d,e){this.a=d
this.b=e},
d8r:function d8r(d,e){this.a=d
this.b=e},
d8P:function d8P(d){this.a=d},
d8E:function d8E(d,e){this.a=d
this.b=e},
d8Q:function d8Q(d){this.a=d},
d8R:function d8R(d){this.a=d},
d8T:function d8T(d){this.a=d},
d8U:function d8U(d){this.a=d},
d8D:function d8D(d,e){this.a=d
this.b=e},
d8V:function d8V(d,e){this.a=d
this.b=e},
aIR:function aIR(d){this.a=d},
bjN:function bjN(d){this.a=d},
bcB:function bcB(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
ama:function ama(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a1Y:function a1Y(d,e){this.a=d
this.b=e},
amb:function amb(d,e,f,g,h,i){var _=this
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
bRW:function bRW(d){this.a=d},
bRQ:function bRQ(d){this.a=d},
bRP:function bRP(d,e){this.a=d
this.b=e},
bRZ:function bRZ(d){this.a=d},
bRR:function bRR(d){this.a=d},
bRS:function bRS(d){this.a=d},
bRV:function bRV(d){this.a=d},
bRU:function bRU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRX:function bRX(d,e){this.a=d
this.b=e},
bRY:function bRY(){},
bRT:function bRT(d){this.a=d},
bRN:function bRN(d,e){this.a=d
this.b=e},
bRO:function bRO(d){this.a=d},
bpp:function bpp(d,e){this.b=d
this.a=e},
aBP:function aBP(){},
iz(d,e){var w
$.S()
w=A.K()
w.b=B.a9
w.c=e
w.r=d.gp(0)
w.d=B.bw
w.e=B.dT
return w},
bDV(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bp(j.save())
j.translate(e.a,e.b)
d.pl(0,a0?-f:f,f)
w=A.bs(B.hs,8,36)
v=B.w.j(0.3)
u=$.S()
t=A.K()
t.r=v.gp(0)
d.bZ(w,t)
w=a1===D.Xn
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ar(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.et3,new A.p(-4+v,-2),C.iz(q,5))
d.ah(D.eqD,new A.p(4-v,-2),C.iz(q,5))}else{t=A.bs(B.JI,14,40)
p=A.K()
p.r=v.gp(0)
d.bZ(t,p)}v=u.r
u=x.v
o=new A.aG(v,B.ai,k,k,A.a([],u))
t=-64-r
o.E(new A.aZ(-11,t))
o.E(new A.c7(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.c7(15,-40,11,t))
o.E(new A.bu())
t=A.K()
t.r=w.gp(0)
d.af(o,t)
u=new A.aG(v,B.ai,k,k,A.a([],u))
u.E(new A.aZ(-12,-50-r))
v=-46-r
u.E(new A.aq(12,v))
u.E(new A.aq(12.5,-42-r))
u.E(new A.aq(-12.5,v))
u.E(new A.bu())
v=A.K()
v.r=h.c.gp(0)
d.af(u,v)
switch(a1.a){case 2:w=Math.sin(g*3.4)
break
case 3:w=Math.sin(g*7.5)
break
default:w=s
break}if(a1===D.b1K){n=-52+w*14
d.ah(new A.p(10,n-22),new A.p(10,n+44),C.iz(F.FU,3.4))
d.ah(D.etl,new A.p(9,n),C.iz(q,4))
d.ah(D.er2,new A.p(10,n),C.iz(q,4))}else if(a1===D.b1L){d.ah(D.es8,new A.p(-8,-26-Math.max(0,w)*6),C.iz(q,4))
d.ah(D.ep5,new A.p(8,-26-Math.max(0,-w)*6),C.iz(q,4))}else{w=s*3
v=-38-r
d.ah(D.esd,new A.p(-12-w,v),C.iz(q,4))
d.ah(D.aMk,new A.p(12+w,v),C.iz(q,4))}w=A.K()
w.r=q.gp(0)
d.ar(D.faU,w)
m=new A.p(0,-77-r)
w=A.bs(m,22,19)
v=A.K()
v.r=q.gp(0)
d.bZ(w,v)
w=h.y
if(w!=null){v=A.bs(m.a2(0,K.vx),15,24)
u=A.K()
u.r=w.gp(0)
d.bZ(v,u)
u=m.a2(0,D.ep_)
v=A.K()
v.r=w.gp(0)
d.N(u,4,v)}else{w=A.bs(m.a2(0,B.tx),23,20)
v=h.d
u=A.K()
u.r=v.gp(0)
d.cB(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a2(0,D.etj),m.a2(0,D.es6),C.iz(v,2.2))
d.ah(m.a2(0,D.er1),m.a2(0,D.eoX),C.iz(v,2.2))}if(w===4){w=m.a2(0,D.etn)
u=A.K()
u.r=v.gp(0)
d.N(w,6,u)
u=m.a2(0,D.er3)
w=A.K()
w.r=v.gp(0)
d.N(u,6,w)}}w=m.a2(0,D.erV)
v=A.K()
v.r=B.ih.gp(0)
d.N(w,0.9,v)
v=m.a2(0,D.erJ)
w=A.K()
w.r=B.ih.gp(0)
d.N(v,0.9,w)
if(i){l=m.a2(0,K.a8X)
w=A.bs(l,21,22)
v=A.K()
v.r=D.lB.gp(0)
d.bZ(w,v)
v=A.bs(l.a2(0,K.aMh),5,12)
w=A.K()
w.r=D.bh5.gp(0)
d.bZ(v,w)
d.ah(l.a2(0,D.etf),l.a2(0,K.aMF),C.iz(B.cS,1.4))
d.ah(D.aMk,new A.p(15,-88-r),C.iz(q,3.6))}j.restore()},
hAX(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.bp(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bU(0,f)
v=A.bs(B.dM,18,96)
u=B.w.j(0.28)
$.S()
t=A.K()
t.r=u.gp(0)
d.bZ(v,t)
t=A.bs(B.dM,11,70)
v=B.w.j(0.2)
u=A.K()
u.r=v.gp(0)
d.bZ(t,u)
d.lz(D.aSu,A.K())
C.i8A(d,g,h,i,j)
s=(k==null?D.a91:k).a-w>=0?1:-1
w=A.K()
w.a=B.M_
w.sav(A.jB(new A.p(s*70,-60),new A.p(-s*70,-60),A.a([D.aiR.j(0.5),D.aiR.j(0.12),D.bop.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.ar(D.aSu,w)
r.restore()
r.restore()},
i8A(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ar(d,B.w,0.28)
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
s=A.bn(D.faV,B.tC)
p=$.S()
o=A.K()
o.r=u.gp(0)
a1.an(s,o)
o=A.bn(D.faQ,B.hU)
s=A.ar(v,B.w,0.18)
s.toString
n=A.K()
n.r=s.gp(0)
a1.an(o,n)
n=A.bn(D.fb3,B.hU)
o=A.ar(v,B.w,0.1)
o.toString
s=A.K()
s.r=o.gp(0)
a1.an(n,s)
s=A.K()
s.r=d.gp(0)
a1.bZ(D.faX,s)
s=A.K()
s.r=d.gp(0)
a1.bZ(D.f9G,s)
s=a1.c
J.bp(s.save())
s.translate(a3.w,0)
J.bp(s.save())
a1.pl(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aG(p.r,B.ai,e,e,A.a([],n))
p=-m
k=p+2
l.E(new A.aZ(k,-58))
l.E(new A.c7(p-3,-62,p,-52))
l.E(new A.aq(p+4,-14))
l.E(new A.aq(m-4,-14))
l.E(new A.aq(m,-52))
l.E(new A.c7(m+3,-62,m-2,-58))
l.E(new A.c7(0,-70,k,-58))
l.E(new A.bu())
k=A.K()
k.r=v.gp(0)
a1.af(l,k)
J.bp(s.save())
a1.mT(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.deA[j]
i=new A.ao(B.O,B.M,B.R,B.S,B.Q)
i.b=B.a9
i.c=5
i.r=k.gp(0)
i.d=B.bw
i.e=B.dT
a1.ah(new A.p(-34+u,-64),new A.p(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.F(B.o.aq(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.S()
f=new A.ao(B.O,B.M,B.R,B.S,B.Q)
f.r=i.gp(0)
a1.N(new A.p(g,h),3.6,f)
f=new A.ao(B.O,B.M,B.R,B.S,B.Q)
f.r=u.gp(0)
a1.N(new A.p(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ao(B.O,B.M,B.R,B.S,B.Q)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.bw
i.e=B.dT
a1.ah(new A.p(g,-64),new A.p(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ao(B.O,B.M,B.R,B.S,B.Q)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.bw
i.e=B.dT
a1.ah(new A.p(-30,h),new A.p(30,h),i)}break
default:a1.ah(D.esJ,D.epL,C.iz(a2.c.j(0.9),3))}a1.ah(D.etg,D.esf,C.iz(B.w.j(0.18),1.6))
a1.ah(D.ep4,K.aMm,C.iz(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.S()
i=A.K()
i.r=u.gp(0)
a1.ar(D.f9C,i)
s.restore()
i=A.K()
i.r=a0.gp(0)
a1.ar(D.f9Q,i)
n=new A.aG(k.r,B.ai,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.c7(0,-57,9,-66))
n.E(new A.c7(0,-60,-9,-66))
k=A.K()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cB(D.f9Z,0.1,2.941592653589793,!1,C.iz(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.a96
n=25*q
k=23*q
i=9*q
C.hxa(a1,new A.p(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.Ej:o
C.hxa(a1,new A.p(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.eqv,D.eqr,C.iz(D.ajP,4))
a1.ah(D.eqt,D.eqp,C.iz(D.Gi.j(0.7),1.4))
u=A.K()
u.r=B.cS.gp(0)
a1.N(D.eqs,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.bp(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.hW(0,a3.f)
a1.bU(0,r)
C.i8x(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hxa(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aJ(0,e),r=s.gcK(),q=r===0?B.hs:s.eW(0,r),p=B.j.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.p(o,w)
if(o*i<0)v=new A.p(-o,-w)
u=e.a2(0,q.aM(0,n)).a2(0,v.aM(0,m))
t=e.a2(0,q.aM(0,p))
d.ah(e,u,C.iz(j,l))
o=A.ar(j,B.w,0.2)
o.toString
d.ah(e,u,C.iz(o,l*0.35))
d.ah(u,t,C.iz(k,l*0.78))
o=A.ar(k,B.w,0.22)
o.toString
d.ah(u,t,C.iz(o,l*0.22))
$.S()
o=A.K()
o.r=j.gp(0)
d.N(u,l*0.55,o)
o=A.bs(t,l*1.15,l)
w=A.K()
w.r=k.gp(0)
d.bZ(o,w)
w=-l
w=t.a2(0,new A.p(i*w*0.45,w*0.1))
o=A.K()
o.r=k.gp(0)
d.N(w,l*0.28,o)},
i8x(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bs(B.vw,40,38)
$.S()
v=A.K()
v.r=c0.gp(0)
c2.bZ(w,v)}if(c1===4){$.S()
w=A.K()
w.r=c0.gp(0)
c2.N(D.esp,9.5,w)
w=A.K()
w.r=c0.gp(0)
c2.N(D.epl,9.5,w)}w=A.bs(D.etC,10,6)
v=$.S()
u=A.K()
u.r=c8.gp(0)
c2.bZ(w,u)
u=A.bs(D.erS,10,6)
w=A.K()
w.r=c8.gp(0)
c2.bZ(u,w)
v=v.r
w=x.v
t=new A.aG(v,B.ai,b9,b9,A.a([],w))
t.E(new A.aZ(0,-20))
t.E(new A.ko(13,-20,17,-9,16,2))
t.E(new A.ko(15,13,8,20,0,20))
t.E(new A.ko(-8,20,-15,13,-16,2))
t.E(new A.ko(-17,-9,-13,-20,0,-20))
t.E(new A.bu())
u=A.K()
u.sav(A.wh(D.et5,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iz(c8.j(0.5),0.8)
c2.cB(D.fb5,3.455751918948773,2.5132741228718345,!1,s)
c2.cB(D.f9J,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.esm,D.esa,s)
c2.ah(D.eph,D.ep8,s)
c2.cB(D.f9Y,2.2,1.4,!1,s)
c2.cB(D.f9H,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ao(B.O,B.M,B.R,B.S,B.Q)
n.r=c0.gp(0)
c2.N(new A.p(p*14.5,-3+o*17.5),4.3,n)}p=A.K()
p.r=c0.gp(0)
c2.cB(D.fab,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aG(v,B.ai,b9,b9,A.a([],w))
p.E(new A.aZ(-15,-11))
p.E(new A.c7(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.c7(0,-12,-13,-6))
p.E(new A.bu())
o=A.K()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.esb,D.ep9,C.iz(G.nq,1.4))
o=A.K()
o.r=c0.gp(0)
c2.N(D.ess,3,o)
o=A.K()
o.r=c0.gp(0)
c2.N(D.epm,3,o)
o=new A.aG(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.c7(-12,22,0,26))
o.E(new A.c7(12,22,13,6))
o.E(new A.c7(8,13,0,12))
o.E(new A.c7(-8,13,-13,6))
o.E(new A.bu())
p=A.K()
p.r=B.i_.gp(0)
c2.af(o,p)
p=new A.aG(v,B.ai,b9,b9,A.a([],w))
p.E(new A.aZ(-7,8))
p.E(new A.c7(0,6,7,8))
p.E(new A.c7(0,10.5,-7,8))
o=A.K()
o.r=B.bP.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aG(v,B.ai,b9,b9,A.a([],w))
p.E(new A.aZ(-17,-4))
p.E(new A.c7(-20,-27,0,-29))
p.E(new A.c7(20,-27,17,-4))
p.E(new A.c7(0,-14,-17,-4))
p.E(new A.bu())
o=A.K()
o.r=m.gp(0)
c2.af(p,o)
o=A.ar(m,B.w,0.3)
o.toString
c2.cB(D.fai,3.4,2.5,!1,C.iz(o,1.4))
o=A.ar(m,B.c,0.3)
o.toString
c2.cB(D.fa5,3.6,2.2,!1,C.iz(o,1.2))
o=new A.aG(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(11,-22))
o.E(new A.c7(27,-34,25,-19))
o.E(new A.c7(18,-18,11,-22))
p=A.ar(m,B.c,0.1)
p.toString
n=A.K()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aG(v,B.ai,b9,b9,A.a([],w))
n.E(new A.aZ(11,-22))
n.E(new A.c7(24,-12,27,-26))
n.E(new A.c7(18,-22,11,-22))
o=A.ar(m,B.w,0.2)
o.toString
p=A.K()
p.r=o.gp(0)
c2.af(n,p)
p=A.K()
p.r=c3.c.gp(0)
c2.N(D.epa,3,p)
break
case 3:p=A.K()
p.r=c0.gp(0)
c2.cB(D.faf,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ar(c0,B.c,0.18)
p.toString
o=new A.ao(B.O,B.M,B.R,B.S,B.Q)
o.b=B.a9
o.c=0.9
o.r=p.gp(0)
o.d=B.bw
o.e=B.dT
c2.ah(new A.p(r*3.6,-19+Math.abs(r)*0.8),new A.p(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=I.aD1[l]
o=new A.ao(B.O,B.M,B.R,B.S,B.Q)
o.b=B.a9
o.c=4.5
o.r=c0.gp(0)
o.d=B.bw
o.e=B.dT
c2.ah(new A.p(k,0),new A.p(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ao(B.O,B.M,B.R,B.S,B.Q)
o.r=p.gp(0)
c2.N(new A.p(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.K()
p.r=c0.gp(0)
c2.cB(D.fae,3.204424506661589,3.015928947446201,!0,p)
p=A.ar(c0,B.c,0.25)
p.toString
c2.ah(K.a8X,K.a8W,C.iz(p,1))
break
default:p=A.K()
p.r=c0.gp(0)
c2.cB(D.f9K,3.267256359733385,2.8902652413026098,!0,p)}i=B.j.D(c4.b,0,1)*0.4+0.1
p=A.bs(D.etp,5,8)
o=D.ag7.j(i)
n=A.K()
n.r=o.gp(0)
c2.bZ(p,n)
n=A.bs(D.es2,5,8)
p=D.ag7.j(i)
o=A.K()
o.r=p.gp(0)
c2.bZ(n,o)
h=c4.e*2.4
o=new A.aG(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(h-0.6,-2))
o.E(new A.c7(h-3.4,6,h-2.6,7.4))
o.E(new A.c7(h,8.8,h+2.6,7.4))
c2.af(o,C.iz(c8.j(0.75),1.1))
o=A.K()
o.r=c8.gp(0)
c2.N(new A.p(h-1.5,7.2),0.7,o)
o=A.K()
o.r=c8.gp(0)
c2.N(new A.p(h+1.5,7.2),0.7,o)
g=B.j.F(c5*0.33+c6*0.37,1)>0.965?1:0
p=c4.d
o=c4.c>0.8?1.25:1
f=(1-g)*(1-p*0.6)*o
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=F.fE[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.bs(new A.p(a5,-3),a3,7)
a6=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a6.r=B.c.j(0.96).gp(0)
c2.bZ(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.bp(d.save())
a6=A.a([],w)
a4=new A.aG(v,B.ai,b9,b9,a6)
a6.push(new A.jU(A.bs(new A.p(a5,-3),a3,7)))
a4.ab()
a3=a4.e
if(a3==null)a3=a4.e=new A.Ec(a4.glX().a.snapshot())
d.clipPath(a3.a,$.np(),!0)
a3=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a3.r=D.bkS.gp(0)
c2.N(new A.p(a7,a8),2.1,a3)
a3=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a3.r=B.w.gp(0)
c2.N(new A.p(a7,a8),1.05,a3)
a3=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a3.r=B.c.gp(0)
c2.N(new A.p(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.Zx:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a9.b=B.a9
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bw
a9.e=B.dT
a3=p?0.8:0
c2.cB(A.bs(new A.p(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.e1
else{b1=A.ar(c0,B.w,0.2)
b1.toString}b2=new A.ao(B.O,B.M,B.R,B.S,B.Q)
b2.b=B.a9
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bw
b2.e=B.dT
c2.ah(new A.p(a5-a4,b0-a6+0.4),new A.p(a5+a4,b0-0.6-a3),b2)}b3=B.j.D(c4.a,0,1)
if(o)b4=D.buV
else{u=A.ar(c8,D.bor,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.j.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aG(v,B.ai,b9,b9,A.a([],w))
w=-b6
b8.E(new A.aZ(w,11.5))
b8.E(new A.c7(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.c7(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.bu())
v=A.K()
v.r=D.bnL.gp(0)
c2.af(b8,v)
J.bp(d.save())
c2.mT(0,b8)
v=B.c.j(0.95)
u=A.K()
u.r=v.gp(0)
c2.ar(new A.a1(w,11,w+b6*2,13.2),u)
u=A.bs(new A.p(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.K()
w.r=D.bv_.gp(0)
c2.bZ(u,w)
d.restore()
c2.af(b8,C.iz(b4,1.1))}else{u=new A.aG(v,B.ai,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.aZ(-5.2,p))
u.E(new A.c7(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iz(b4,1.5))
if(b5>0.6){w=new A.aG(v,B.ai,b9,b9,A.a([],w))
w.E(new A.aZ(-4.6,11.8))
w.E(new A.c7(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.c7(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.K()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cB(D.f9X,-1.2,2.2,!1,C.iz(c8.j(0.5),0.8))
c2.cB(D.f9M,2.141592653589793,2.2,!1,C.iz(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.K()
w.r=c1.gp(0)
c2.N(D.erL,1.7,w)
w=A.K()
w.r=c1.gp(0)
c2.N(D.erH,1.7,w)}},
ie9(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.S(),f=new A.q3(new A.pE()),e=A.zz(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.K()
a2.sav(A.jB(B.J,new A.p(0,a0*0.46),D.dbk,D.d2M,B.x,h))
e.ar(new A.a1(0,0,0+d,0+a0),a2)
a2=e.c
J.bp(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bU(0,a1)
w=new A.e2()
w.cY(8)
for(v=0;v<120;++v){d=w.ai()
a0=w.ai()
u=w.ai()
t=new A.ao(B.O,B.M,B.R,B.S,B.Q)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.N(new A.p(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.bp(a2.save())
a2.translate(200,120)
e.hW(0,-0.5)
d=A.K()
a0=x.O
d.sav(A.wh(B.J,230,A.a([D.bjB,B.L],a0),h,B.x,h,h,0))
e.bZ(D.fas,d)
a2.restore()
d=A.K()
d.sav(A.wh(D.a94,58,A.a([D.bmN,B.L],a0),h,B.x,h,h,0))
e.N(D.a94,58,d)
d=A.K()
d.r=D.bij.gp(0)
e.N(D.a94,24,d)
d=A.K()
d.r=D.ZZ.gp(0)
e.N(D.eq4,5,d)
d=A.K()
d.r=D.ZZ.gp(0)
e.N(D.eq8,3.4,d)
d=A.K()
d.r=D.ZZ.gp(0)
e.N(D.eq7,2.4,d)
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
g=new A.bu()
u.push(g)
u=r.f
if(u!=null)g.ak(u)
r.ab()
g=[D.bgT,D.biS,D.boL][s]
u=$.S()
t=new A.ao(B.O,B.M,B.R,B.S,B.Q)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cxt[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ao(B.O,B.M,B.R,B.S,B.Q)
u.b=B.a9
u.c=2.4
u.r=D.a_j.gp(0)
u.d=B.bw
u.e=B.dT
e.ah(new A.p(o,k),new A.p(g,d),u)
g=A.bs(new A.p(g,k-27),11,46)
u=new A.ao(B.O,B.M,B.R,B.S,B.Q)
u.r=D.a_j.gp(0)
e.bZ(g,u)
d=A.bs(new A.p(o-12,d),8,24)
u=new A.ao(B.O,B.M,B.R,B.S,B.Q)
u.r=D.a_j.gp(0)
e.bZ(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ao(B.O,B.M,B.R,B.S,B.Q)
u.r=D.bim.j(0.8).gp(0)
e.N(new A.p(20+v*52+g*7,400+d*5),1.2,u)}g=A.K()
g.sav(A.jB(D.eoE,D.eoG,D.d4L,B.DD,B.x,h))
e.ar(new A.a1(-200,412,650,1300),g)
j=new A.e2()
j.cY(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.bs(new A.p(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.h2()?B.c:B.w
d=new A.ao(B.O,B.M,B.R,B.S,B.Q)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.bZ(u,d)}J.bp(a2.save())
a2.translate(225,590)
e.pl(0,1,0.34)
g=A.K()
g.sav(A.wh(B.J,250,A.a([D.bpH,D.bjc,D.brC],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.N(B.J,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ar(D.aix,D.bhR,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.S()
a0=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a0.b=B.a9
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bw
a0.e=B.dT
e.ah(new A.p(o+i*2,k),new A.p(o+i*5,g+Math.abs(i)*3),a0)}}C.i6F(e)
for(l=0;l<3;++l)C.ia7(e,D.aAN[l])
C.i9X(e,D.epZ)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.S()
a0=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a0.b=B.a9
a0.c=2.4
a0.r=D.a_e.gp(0)
a0.d=B.bw
a0.e=B.dT
e.ah(new A.p(o,452+g),new A.p(o+1,436+d),a0)}e.ah(D.ep6,D.epq,C.iz(D.biA,1.6))
a2.restore()
return f.o3()},
i6F(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.S().r,g=x.v,f=new A.aG(h,B.ai,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.ko(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.ko(416,382,432,422,428,462))
f.E(new A.bu())
w=A.K()
w.sav(A.jB(new A.p(354,0),new A.p(430,0),D.dzh,B.n9,B.x,i))
d.af(f,w)
v=new A.e2()
v.cY(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.w.j(0.18)
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.b=B.a9
p.c=1.1
p.r=q.gp(0)
p.d=B.bw
p.e=B.dT
d.ah(new A.p(t,s),new A.p(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.dfY[o]
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
r=new A.c7(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.ak(p)
k.ab()
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.b=B.a9
r.c=8
r.r=D.agQ.gp(0)
r.d=B.bw
r.e=B.dT
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ao(B.O,B.M,B.R,B.S,B.Q)
l.r=A.ar(D.bis,D.boK,v.ai()).j(0.92).gp(0)
d.N(new A.p(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.b=B.a9
r.c=1.2
r.r=D.a_e.gp(0)
r.d=B.bw
r.e=B.dT
d.ah(new A.p(w,q+8),new A.p(w,q+22),r)
q=A.bs(new A.p(w,q+28),13,7)
w=new A.ao(B.O,B.M,B.R,B.S,B.Q)
w.r=D.bq0.gp(0)
d.bZ(q,w)}},
ia7(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bs(new A.p(a5,a6+2),a9,a7*2.8),b1=B.w.j(0.3),b2=$.S(),b3=A.K()
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
w.E(new A.c7(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.bu())
u=A.K()
u.sav(A.jB(new A.p(b0,0),new A.p(v,0),D.dg3,B.n9,B.x,a4))
b4.af(w,u)
t=new A.e2()
t.cY(B.o.V(a5*7))
v=b4.c
J.bp(v.save())
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
n.d=B.bw
n.e=B.dT
b4.ah(new A.p(r,q),new A.p(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.ais.j(0.75)
n=A.K()
n.r=o.gp(0)
b4.ar(new A.a1(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.j.bh(u);++l){k=m+l*10
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
h=new A.bu()
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
for(p/=6,l=0;l<=B.j.bh(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.ak(n)
f.ab()}b4.af(f,C.iz(D.ais.j(0.7),1.6))
v.restore()
b0=$.S().r
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
b2.E(new A.c7(p,a6-a8*0.82,o,j))
b2.E(new A.aq(o,m))
b2.E(new A.bu())
m=A.K()
m.r=D.aiF.gp(0)
b4.af(b2,m)
m=A.K()
m.r=D.aiF.gp(0)
b4.N(new A.p(a5-a7*0.62,a6-a8*0.5),u,m)
m=b5.e
u=b1-m
b2=a7*1.38
o=a5-b2
j=b1+4
p=a5+b2
e=new A.aG(b0,B.ai,a4,a4,A.a([],b3))
e.E(new A.aZ(o,j))
n=b1-m*0.55
e.E(new A.c7(a5-a9,n,a5,u))
e.E(new A.c7(a5+a9,n,p,j))
e.E(new A.c7(a5,b1+a7*0.34,o,j))
e.E(new A.bu())
b1=A.K()
n=a7*1.4
b1.sav(A.jB(new A.p(a5-n,0),new A.p(a5+n,0),D.djD,B.n9,B.x,a4))
b4.af(e,b1)
J.bp(v.save())
b4.mT(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h2()?B.w:D.bi_).j(0.16)
i=new A.ao(B.O,B.M,B.R,B.S,B.Q)
i.b=B.a9
i.c=0.9
i.r=n.gp(0)
i.d=B.bw
i.e=B.dT
b4.ah(new A.p(a5+(p-0.5)*3,u),new A.p(o+a9*d,j+b1*a7*0.3),i)}for(l=1;l<5;++l){a0=u+m*l/4.6
a1=b2*l/4.6
b1=A.a([],b3)
p=new A.aG(b0,B.ai,a4,a4,b1)
n=a0+2
b1.push(new A.aZ(a5-a1,n))
p.ab()
n=new A.c7(a5,a0+7+l*1.5,a5+a1,n)
b1.push(n)
b1=p.f
if(b1!=null)n.ak(b1)
p.ab()
b1=B.w.j(0.22)
n=new A.ao(B.O,B.M,B.R,B.S,B.Q)
n.b=B.a9
n.c=1.2
n.r=b1.gp(0)
n.d=B.bw
n.e=B.dT
b4.af(p,n)}v.restore()
for(s=0;s<46;++s){d=s/45
a2=o+a9*d
a3=j+Math.sin(d*3.141592653589793)*a7*0.3
b1=t.ai()
b2=t.ai()
v=new A.ao(B.O,B.M,B.R,B.S,B.Q)
v.b=B.a9
v.c=1.1
v.r=D.bpa.gp(0)
v.d=B.bw
v.e=B.dT
b4.ah(new A.p(a2,a3),new A.p(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aG(b0,B.ai,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bu())
b0=A.K()
b0.r=D.bln.gp(0)
b4.af(a9,b0)},
i9X(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+I.aCZ[s]
$.S()
q=new A.ao(B.O,B.M,B.R,B.S,B.Q)
q.b=B.a9
q.c=3
q.r=D.a_e.gp(0)
q.d=B.bw
q.e=B.dT
d.ah(new A.p(r,u),new A.p(r,t),q)}u=A.bs(e.a2(0,K.aMg),24,36)
t=$.S()
r=A.K()
r.r=D.bu7.gp(0)
d.bZ(u,r)
t=new A.aG(t.r,B.ai,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.aZ(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.c7(w,v-24,r,u))
t.E(new A.bu())
u=A.K()
u.r=D.ahx.gp(0)
d.af(t,u)},
i9e(d){switch(B.o.F(d,8)){case 0:return D.b1i
case 1:return D.b1g
case 2:return D.b1f
case 3:return D.b1e
case 4:return D.b1h
case 5:return D.b1j
case 6:return D.hAX
default:return D.hAW}},
SJ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bpq()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a96:j
w.as=k==null?D.Ej:k
C.hAX(d,e,p,C.i9e(m),w,s,m,l)},
hCr(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bTA:function bTA(){var _=this
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
bpq:function bpq(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
amt:function amt(){this.b=this.a=null},
aWP:function aWP(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bTs:function bTs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTt:function bTt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTu:function bTu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTv:function bTv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTw:function bTw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTx:function bTx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTy:function bTy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTz:function bTz(){},
bTr:function bTr(d){this.a=d},
agc:function agc(d,e){this.a=d
this.b=e},
aea:function aea(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Na(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bSb(s)
s.bBH(d)
return s},
H7(d,e,f,g,h,i,j){var w,v=A.U(g).k("Y<1>")
v=A.d0(new A.Y(g,new C.fvc(f),v),v.k("M.E"))
w=A.C(v,A.a4(v).k("ci.E"))
B.d.e0(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.u(v,A.cX(w,0,A.dB(3,"count",x.S),A.U(w).c))
B.d.e0(v,d)
return new C.lt(e,v,B.d.co(v,f),h,i,"tree",j)},
ivo(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.T(c0,x.cg),c2=new C.h5r(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.jC(c4,c0)
t=A.C(c4,A.a4(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.jC(c4,c0)
r=A.C(c4,A.a4(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.jC(c4,c0)
q=A.C(c4,A.a4(c4).k("ci.E"))
for(c4=w.length,v=A.U(t).k("Y<1>"),s=v.k("M.E"),p=A.U(w).k("Y<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.I)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.c()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.wC)g="father"
else g=h===D.ox?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Y(t,new C.h5t(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.H7(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Y(w,new C.h5u(i,m),p),o)
B.d.e0(d,c6)
c2.$2(b4,new C.lt("True or false: "+h+" is the "+g+" of "+l+".",D.aBP,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lt("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",D.aBP,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.Ga(m)
h=a0.length
if(h!==0){a1=a0[c6.az(h)]
h=B.a.i(a1.b)
f=A.C(new A.Y(t,new C.h5v(l,a0,c5),v),s)
e=a1.c
if(e===D.wC)e="son"
else e=e===D.ox?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.H7(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.es([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mA(a5,a5.r,f.k("mA<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.H7(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.U(a0),a2=e.k("ix<1>"),a3=new A.ix(a0,1,b3,a2),a3.n8(a0,1,b3,e.c),a3=new A.bR(a3,a3.gJ(0),a2.k("bR<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.H7(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.aru(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Y(t,new C.h5w(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.H7(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.c()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.c()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.C(new A.Y(t,new C.h5x(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.wC
if(e)a2=b7
else a2=f===D.ox?b8:b9
if(e)f=b7
else f=f===D.ox?b8:b9
c2.$2("grand",C.H7(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aN8(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.az(k)].b)
j=A.C(new A.Y(t,new C.h5y(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.H7(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.u(j,D.cQi)
h=l+" was born in "+k
c2.$2("place",C.H7(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.u(j,D.d5O)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.H7(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.I)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.H7(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cE(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.j_(b1,b3,b3)
c2.$2("year",C.H7(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bEw(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.Na(d),l=new A.e2()
l.cY(f)
w=C.ivo(m,l,g)
for(v=new A.dq(w,w.r,w.e);v.C();)J.hkI(v.d,l)
v=A.a4(w).k("cx<1>")
u=A.C(new A.cx(w,v),v.k("M.E"))
B.d.e0(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aU(u,new C.fIE(n,w))))break
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
if(v<e){v=A.C(D.azP,x.df)
B.d.e0(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hB3(o,l))}}else if(!g&&v>3){o=C.hB3(D.azP[l.az(14)],l)
t[t.length-1-l.az(3)]=o}return t},
hB3(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.e0(w,e)
return new C.lt(d.a,w,B.d.co(w,v),d.d,d.e,d.f,d.r)},
hG4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.Na(a2),a1=new A.e2()
a1.cY(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a0.Ga(q).length>=2)u.push(q)}B.d.e0(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){n=u[r]
m=a0.Ga(n)
l=A.U(m)
k=new A.ix(m,0,5,l.k("ix<1>"))
k.n8(m,0,5,l.c)
j=k.dn(0)
if(new A.N(j,new C.fX_(),A.U(j).k("N<1,H>")).fM(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.I)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.I)(j),++i)g.push(C.aSB(a0,j[i]))
w.push(new C.aut("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.T(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
J.c5(e.c3(0,a0.amD(q),new C.fX0()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cx<1>")
d=A.C(new A.cx(e,t),t.k("M.E"))
B.d.fg(d)
v=A.a([],v)
for(u=A.cX(d,0,A.dB(5,"count",u),A.U(d).c),t=u.$ti,u=new A.bR(u,u.gJ(0),t.k("bR<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cD(s)
m.e0(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.I)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r)s.push(C.aSB(a0,v[r]))
w.push(new C.aut("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aR6(d){return B.d.ao5(D.aCl,new C.fEu(d))},
ikR(d){return A.nA(new A.Y(D.aCl,new C.fLu(d),x.av))},
bT_(d){return C.hPM(d)},
hPM(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bT_=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bT_)
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
return A.i($async$bT_,v)},
BX(d,e){return C.hPJ(d,e)},
hPJ(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$BX=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$BX)
case 7:r=g
p=B.a.i(d)
o=A.el(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aD("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$BX)
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
return A.i($async$BX,v)},
bSZ(d,e,f){return C.hPK(d,e,f)},
hPK(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bSZ=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bSZ)
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
return A.i($async$bSZ,v)},
BY(d,e,f,g){return C.hPL(d,e,f,g)},
hPL(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$BY=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$BY)
case 7:r=i
p=B.a.i(d)
o=A.el(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aD("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$BY)
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
return A.i($async$BY,v)},
bGM(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
h7v(d,e,f,g){return new C.al4(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hNQ(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aT(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cs)
while(u.C())w.push(J.k(u.gR(u)))
u=x.N
w=A.cX(w,0,A.dB(4,"count",x.S),u).dn(0)
B.d.u(w,A.c1(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aJ(d.h(0,"c"))
v=v==null?null:B.j.M(v)
v=B.o.D(v==null?0:v,0,3)
u=A.aJ(d.h(0,"s"))
u=u==null?null:B.j.M(u)
return C.h7v(w,v,B.o.D(u==null?20:u,5,60),t)},
hlR(d){var w,v,u,t,s,r,q=J.a7(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aT(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.cs)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gR(q)
if(u.b(r))v.push(C.hNQ(A.a2(r,t,s)))}return new C.MV(p,w,v)},
hg_(d){var w,v=A.a([],x.c)
for(w=J.aT(d.z);w.C();)v.push(C.hlR(w.gR(w)))
return v},
aSB(d,e){var w=e.c===D.ox
if(d.amD(e)===0&&d.Ga(e).length!==0)return w?0:1
if(d.Ga(e).length!==0||d.aru(e)!=null)return w?2:3
return w?4:5},
hHa(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Na(a4),a3=new A.e2()
a3.cY(a5)
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
j=i.h(0,k)}h=a2.Ga(m)
g=a2.aru(m)
f=a2.aN8(m)
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
if(k===D.wC)k="father"
else k=k===D.ox?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.wC)k="father"
else k=k===D.ox?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e0(l,a3)
B.d.aZ(l,new C.h5R())
d=B.a.i(m.b)
a0=A.C(new A.Y(s,new C.h5S(d),o),n)
B.d.e0(a0,a3)
k=A.a([d],t)
i=A.U(a0)
a1=new A.ix(a0,0,3,i.k("ix<1>"))
a1.n8(a0,0,3,i.c)
B.d.u(k,a1)
B.d.e0(k,a3)
a1=C.aSB(a2,m)
i=new A.ix(l,0,4,p)
i.n8(l,0,4,r)
w.push(new C.baP(d,a1,i.dn(0),k))
if(w.length>=5)break}return w},
hyE(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.a_(d,"My ")?1:0},
hGg(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Na(a4),a3=new A.e2()
a3.cY(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a2.Ga(q).length>=2)u.push(q)}B.d.e0(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){l=u[r]
k=a2.Ga(l)
j=A.U(k)
i=new A.ix(k,0,4,j.k("ix<1>"))
i.n8(k,0,4,j.c)
h=i.dn(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.I)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aU(h,new C.fXv(q))&&q.d!==j)i.push(q)}B.d.e0(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.ix(i,0,k,m)
j.n8(i,0,k,n)
f=j.dn(0)
j=B.a.i(l.b)
k=C.aSB(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.I)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.I)(h),++g)e.push(C.aSB(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.I)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.I)(f),++g)a0.push(C.aSB(a2,f[g]))
w.push(new C.aae(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lt:function lt(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bSb:function bSb(d){this.b=d
this.c=$},
bSc:function bSc(){},
bSd:function bSd(d){this.a=d},
fvc:function fvc(d){this.a=d},
h5r:function h5r(d){this.a=d},
h5s:function h5s(){},
h5t:function h5t(d){this.a=d},
h5u:function h5u(d,e){this.a=d
this.b=e},
h5v:function h5v(d,e,f){this.a=d
this.b=e
this.c=f},
h5q:function h5q(d,e){this.a=d
this.b=e},
h5w:function h5w(d){this.a=d},
h5x:function h5x(d){this.a=d},
h5y:function h5y(d,e,f){this.a=d
this.b=e
this.c=f},
h5p:function h5p(d,e){this.a=d
this.b=e},
fIE:function fIE(d,e){this.a=d
this.b=e},
aut:function aut(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fX_:function fX_(){},
fX0:function fX0(){},
zI:function zI(d,e,f){this.a=d
this.b=e
this.c=f},
fEu:function fEu(d){this.a=d},
fLu:function fLu(d){this.a=d},
al4:function al4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bN_:function bN_(){},
MV:function MV(d,e,f){this.a=d
this.b=e
this.c=f},
baP:function baP(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
h5R:function h5R(){},
h5S:function h5S(d){this.a=d},
aae:function aae(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fXv:function fXv(d){this.a=d},
bi6:function bi6(d,e,f){var _=this
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
akn:function akn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ako:function ako(d,e,f,g,h){var _=this
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
bL9:function bL9(d){this.a=d},
bL4:function bL4(){},
bLa:function bLa(){},
bL2:function bL2(){},
bL3:function bL3(){},
bL8:function bL8(d){this.a=d},
bL5:function bL5(d,e){this.a=d
this.b=e},
bL7:function bL7(d,e){this.a=d
this.b=e},
bL6:function bL6(d,e){this.a=d
this.b=e},
bL1:function bL1(d){this.a=d},
bdg:function bdg(d,e){this.b=d
this.a=e},
QR:function QR(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBN:function aBN(d,e,f){this.b=d
this.c=e
this.a=f},
aAh:function aAh(d,e,f){this.a=d
this.b=e
this.c=f},
av4:function av4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
av5:function av5(d,e,f){var _=this
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
cqJ:function cqJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cqK:function cqK(d){this.a=d},
cqI:function cqI(d){this.a=d},
cqL:function cqL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cqM:function cqM(){},
cqN:function cqN(d,e){this.a=d
this.b=e},
cqO:function cqO(){},
cqP:function cqP(d){this.a=d},
cqF:function cqF(d){this.a=d},
cqG:function cqG(d,e){this.a=d
this.b=e},
cqH:function cqH(d,e,f){this.a=d
this.b=e
this.c=f},
cqA:function cqA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cqC:function cqC(d,e){this.a=d
this.b=e},
cqD:function cqD(d,e){this.a=d
this.b=e},
cqB:function cqB(d,e){this.a=d
this.b=e},
cqz:function cqz(){},
cqE:function cqE(){},
bcK:function bcK(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cQL:function cQL(){},
az2:function az2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
az3:function az3(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cFH:function cFH(d){this.a=d},
cFG:function cFG(d){this.a=d},
cFP:function cFP(d,e){this.a=d
this.b=e},
cFQ:function cFQ(d,e){this.a=d
this.b=e},
cFR:function cFR(d){this.a=d},
cFO:function cFO(d){this.a=d},
cFS:function cFS(d){this.a=d},
cFT:function cFT(d,e){this.a=d
this.b=e},
cFU:function cFU(){},
cFV:function cFV(d){this.a=d},
cFJ:function cFJ(d){this.a=d},
cFK:function cFK(d,e){this.a=d
this.b=e},
cFI:function cFI(d,e){this.a=d
this.b=e},
cFL:function cFL(){},
cFM:function cFM(){},
cFN:function cFN(d,e){this.a=d
this.b=e},
aA2:function aA2(){},
aHf:function aHf(){},
hdJ(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.brL((w-450*u)/2,(v-900*u)/2,u)},
afZ:function afZ(){},
f7E:function f7E(d){this.a=d},
aL3:function aL3(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fhO:function fhO(d){this.a=d},
amj:function amj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amk:function amk(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.qa$=f
_.LZ$=g
_.an9$=h
_.bw$=i
_.a9$=j
_.c=_.a=null},
bSY:function bSY(d){this.a=d},
bSX:function bSX(){},
bSV:function bSV(d){this.a=d},
bST:function bST(){},
bSU:function bSU(d){this.a=d},
bSQ:function bSQ(d,e){this.a=d
this.b=e},
bSR:function bSR(){},
bSS:function bSS(d){this.a=d},
bSW:function bSW(d,e){this.a=d
this.b=e},
bSP:function bSP(d){this.a=d},
btr:function btr(d,e){this.b=d
this.a=e},
f7F:function f7F(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f7G:function f7G(d,e,f){this.a=d
this.b=e
this.c=f},
f7H:function f7H(d,e,f){this.a=d
this.b=e
this.c=f},
f7I:function f7I(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7J:function f7J(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f7K:function f7K(){},
amh:function amh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ami:function ami(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.qa$=f
_.LZ$=g
_.an9$=h
_.bw$=i
_.a9$=j
_.c=_.a=null},
bSB:function bSB(){},
bSM:function bSM(d,e){this.a=d
this.b=e},
bSN:function bSN(d){this.a=d},
bSO:function bSO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSI:function bSI(){},
bSH:function bSH(d,e){this.a=d
this.b=e},
bSJ:function bSJ(d,e){this.a=d
this.b=e},
bSK:function bSK(){},
bSL:function bSL(d){this.a=d},
bSD:function bSD(d){this.a=d},
bSE:function bSE(d){this.a=d},
bSF:function bSF(d){this.a=d},
bSC:function bSC(d,e){this.a=d
this.b=e},
bSG:function bSG(d){this.a=d},
bjV:function bjV(d,e){this.b=d
this.a=e},
ds5:function ds5(){},
a2g:function a2g(d,e){this.a=d
this.b=e},
amd:function amd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ame:function ame(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.qa$=e
_.LZ$=f
_.an9$=g
_.bw$=h
_.a9$=i
_.c=_.a=null},
bSn:function bSn(d){this.a=d},
bSm:function bSm(){},
bSl:function bSl(){},
bSf:function bSf(){},
bSg:function bSg(){},
bSk:function bSk(d,e,f){this.a=d
this.b=e
this.c=f},
bSj:function bSj(d){this.a=d},
bSh:function bSh(d,e){this.a=d
this.b=e},
bSi:function bSi(d){this.a=d},
bjl:function bjl(d,e){this.b=d
this.a=e},
aBQ:function aBQ(){},
bgU:function bgU(){},
aBS:function aBS(){},
bgV:function bgV(){},
aBT:function aBT(){},
bgW:function bgW(){},
uA(d,e,f,g,h){var w,v,u=null,t=A.l(18),s=A.a([],x.V)
s.push(new A.ab(0,B.G,f.j(0.4),B.iq,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.u(v,A.a([A.X(g,h,u,u,u,20),B.af],w))
v.push(A.d(d,u,u,u,u,u,u,A.m(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.az(u,A.r(u,A.A(v,B.l,u,B.e,B.P,0,u,u),B.f,u,u,new A.o(f,u,u,t,s,u,B.n),u,u,u,u,B.Ot,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hmE(d,e,f,g,h,i,j){return new C.amf(i,h,d,j,e,f,g,null)},
a6H:function a6H(d,e){this.c=d
this.a=e},
bjs:function bjs(d){this.a=d},
tJ:function tJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bSe:function bSe(d){this.a=d},
IB:function IB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Wu:function Wu(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmg:function bmg(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e2h:function e2h(d,e){this.a=d
this.b=e},
e2i:function e2i(d){this.a=d},
e2j:function e2j(d,e){this.a=d
this.b=e},
e2f:function e2f(d){this.a=d},
e2g:function e2g(d){this.a=d},
e2e:function e2e(d){this.a=d},
e2c:function e2c(d){this.a=d},
e2d:function e2d(d){this.a=d},
e2b:function e2b(d,e){this.a=d
this.b=e},
e2k:function e2k(d){this.a=d},
e2l:function e2l(d,e){this.a=d
this.b=e},
e2m:function e2m(d,e){this.a=d
this.b=e},
e2n:function e2n(d,e){this.a=d
this.b=e},
e2q:function e2q(d,e){this.a=d
this.b=e},
e2r:function e2r(d,e){this.a=d
this.b=e},
e2s:function e2s(d,e){this.a=d
this.b=e},
e2t:function e2t(d,e){this.a=d
this.b=e},
e2u:function e2u(d,e){this.a=d
this.b=e},
e2v:function e2v(d,e,f){this.a=d
this.b=e
this.c=f},
e2w:function e2w(d,e){this.a=d
this.b=e},
e2x:function e2x(d,e){this.a=d
this.b=e},
e2o:function e2o(d){this.a=d},
e2p:function e2p(d){this.a=d},
a09:function a09(d,e){this.a=d
this.b=e},
amf:function amf(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
amg:function amg(d){var _=this
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
bSz:function bSz(d){this.a=d},
bSA:function bSA(d){this.a=d},
bSy:function bSy(d){this.a=d},
bSp:function bSp(d){this.a=d},
bSq:function bSq(d){this.a=d},
bSo:function bSo(d){this.a=d},
bSv:function bSv(d,e,f){this.a=d
this.b=e
this.c=f},
bSw:function bSw(d){this.a=d},
bSs:function bSs(d,e){this.a=d
this.b=e},
bSt:function bSt(d,e,f){this.a=d
this.b=e
this.c=f},
bSx:function bSx(){},
bSu:function bSu(d,e){this.a=d
this.b=e},
bSr:function bSr(d){this.a=d},
U9:function U9(d,e){this.c=d
this.a=e},
amc:function amc(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bS_:function bS_(d){this.a=d},
bS0:function bS0(d){this.a=d},
bSa:function bSa(){},
bS9:function bS9(d,e,f){this.a=d
this.b=e
this.c=f},
bS4:function bS4(d,e){this.a=d
this.b=e},
bS3:function bS3(d,e){this.a=d
this.b=e},
bS5:function bS5(d){this.a=d},
bS6:function bS6(d,e){this.a=d
this.b=e},
bS7:function bS7(d,e){this.a=d
this.b=e},
bS2:function bS2(d,e){this.a=d
this.b=e},
bS8:function bS8(d,e,f){this.a=d
this.b=e
this.c=f},
bS1:function bS1(d,e){this.a=d
this.b=e},
iji(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.aja(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bD(new A.V(Date.now(),0,!1))
s=new C.fI6(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("Y<1>"),q=q.k("cM<1,n>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.z3)m.push(l===D.wC?"male":"female")
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
if(l&&h==null)m.push("about "+(t-A.j_(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.j_(h,a2,a2)-A.j_(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.C(new A.cM(new A.Y(a4,new C.fI4(u,f),p),new C.fI5(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aN(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aN(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aB(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
ijj(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.aja(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.I)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fIb(v,e)
q=new C.fI9(v)
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
n=A.C(d,A.a4(d).k("ci.E"))
B.d.fg(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.I)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eI(l,new C.fIa(p,m));k.C();t=f){j=l.gR(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aN(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
i40(d,e,f,g){var w,v,u=C.ijk(d,e)
if(u<=0||f.length<=u)return new A.afD(!1,D.DF,f)
if(g.q(0,e.a))return new A.afD(!1,D.DF,f)
w=A.U(f).c
v=A.cX(f,0,A.dB(u,"count",x.S),w).dn(0)
return new A.afD(!0,A.cX(f,u,null,w).dn(0),v)},
i41(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.aja(d3),d2=d1.length
if(d2===0)return D.hy9
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.I)(d1),++u){t=d1[u]
v.c3(0,t.a,new C.dhA(t))}s=new C.dhR(v)
d2=x.dy
r=A.T(w,d2)
q=new C.dhJ(r)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dhI(r)
l=A.T(w,x.do)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c5(l.c3(0,k,new C.dhB()),o)}h=new C.dhH(s)
g=new C.dhG(l,r)
p=v.$ti.k("b8<2>")
o=p.k("Y<M.E>")
f=A.C(new A.Y(new A.b8(v,p),new C.dhC(h),o),o.k("M.E"))
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
a9=new C.dhP(new C.dhL(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dq(v,v.r,v.e),j=a2.gam8(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.es([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.I(0,i))break}if(h.$1(b0)&&a2.am(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nA(J.dG(i==null?B.Z:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.dO)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.dhz(a2,new C.dhQ(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.I)(a8),++u){b8=a8[u]
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
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.GH(o,new A.p(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.L2(c5.a,new A.p(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cx<1>")
d2=A.C(new A.cx(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bO(0,new C.dhD(c6,b4))
for(d2=new A.cc(a4,a4.$ti.k("cc<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aT(c7.b);j.C();){i=j.gR(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.p(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eI(j,new C.dhE(c8));i.C();)o.push(j.gR(0).b)
if(o.length===0)continue
B.d.aZ(o,new C.dhF())
c6.push(new C.aKZ(new A.p(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bh_(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hBM(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cE(d)
return w==null?null:w.b[1]},
hvS(d,e,f,g,h,i,j,k,l,m,n){return new C.a0m(k,f,j,e,l,n,m,d,g,h,i,null)},
aDR(d,e,f,g,h,i,j){return new C.bkL(i,d,e,f,j,h,g,null)},
arj:function arj(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFo:function aFo(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e3X:function e3X(d){this.a=d},
e3W:function e3W(d){this.a=d},
e3Z:function e3Z(d,e){this.a=d
this.b=e},
e4_:function e4_(d,e){this.a=d
this.b=e},
e40:function e40(d){this.a=d},
e3V:function e3V(d,e){this.a=d
this.b=e},
e3Y:function e3Y(d){this.a=d},
e42:function e42(d){this.a=d},
e41:function e41(d,e){this.a=d
this.b=e},
ard:function ard(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFl:function aFl(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e3n:function e3n(d){this.a=d},
e3l:function e3l(d){this.a=d},
e3m:function e3m(d){this.a=d},
e3o:function e3o(d,e){this.a=d
this.b=e},
e3i:function e3i(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2K:function e2K(d){this.a=d},
e2L:function e2L(d,e){this.a=d
this.b=e},
e31:function e31(d){this.a=d},
e3_:function e3_(d){this.a=d},
e30:function e30(d,e){this.a=d
this.b=e},
e32:function e32(d){this.a=d},
e33:function e33(d,e){this.a=d
this.b=e},
e3h:function e3h(d,e){this.a=d
this.b=e},
e2Z:function e2Z(d){this.a=d},
e2Y:function e2Y(d){this.a=d},
e2X:function e2X(d,e){this.a=d
this.b=e},
e3e:function e3e(){},
e3f:function e3f(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e3d:function e3d(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e37:function e37(d){this.a=d},
e38:function e38(d,e,f){this.a=d
this.b=e
this.c=f},
e36:function e36(d,e){this.a=d
this.b=e},
e39:function e39(d,e){this.a=d
this.b=e},
e34:function e34(d,e){this.a=d
this.b=e},
e35:function e35(){},
e3a:function e3a(d,e){this.a=d
this.b=e},
e3b:function e3b(d){this.a=d},
e3c:function e3c(d,e){this.a=d
this.b=e},
e3g:function e3g(d,e){this.a=d
this.b=e},
e2y:function e2y(d,e){this.a=d
this.b=e},
e2z:function e2z(d,e){this.a=d
this.b=e},
e3q:function e3q(d,e,f){this.a=d
this.b=e
this.c=f},
e3k:function e3k(d,e,f){this.a=d
this.b=e
this.c=f},
e3j:function e3j(d){this.a=d},
e2A:function e2A(d){this.a=d},
e2B:function e2B(d){this.a=d},
e2C:function e2C(){},
e2D:function e2D(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2H:function e2H(d,e){this.a=d
this.b=e},
e2G:function e2G(d,e){this.a=d
this.b=e},
e2F:function e2F(d){this.a=d},
e2I:function e2I(d,e){this.a=d
this.b=e},
e2E:function e2E(d){this.a=d},
e3p:function e3p(d){this.a=d},
e2U:function e2U(){},
e2V:function e2V(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2T:function e2T(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2P:function e2P(d,e,f){this.a=d
this.b=e
this.c=f},
e2O:function e2O(d,e,f){this.a=d
this.b=e
this.c=f},
e2M:function e2M(d,e){this.a=d
this.b=e},
e2Q:function e2Q(d){this.a=d},
e2R:function e2R(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2N:function e2N(d,e){this.a=d
this.b=e},
e2S:function e2S(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2W:function e2W(d,e){this.a=d
this.b=e},
e3x:function e3x(){},
e3y:function e3y(d,e){this.a=d
this.b=e},
e3z:function e3z(d){this.a=d},
e3A:function e3A(d,e){this.a=d
this.b=e},
e3t:function e3t(d){this.a=d},
e3r:function e3r(d,e){this.a=d
this.b=e},
e3u:function e3u(d,e){this.a=d
this.b=e},
e3v:function e3v(d,e){this.a=d
this.b=e},
e3w:function e3w(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e3B:function e3B(d){this.a=d},
e3s:function e3s(d){this.a=d},
e2J:function e2J(d){this.a=d},
bgY:function bgY(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dhx:function dhx(d){this.a=d},
dhw:function dhw(d,e){this.a=d
this.b=e},
dhy:function dhy(d){this.a=d},
dhv:function dhv(d,e){this.a=d
this.b=e},
fI6:function fI6(d,e){this.a=d
this.b=e},
fI7:function fI7(d){this.a=d},
fI8:function fI8(){},
fI4:function fI4(d,e){this.a=d
this.b=e},
fI5:function fI5(){},
fIb:function fIb(d,e){this.a=d
this.b=e},
fIc:function fIc(d){this.a=d},
fId:function fId(){},
fI9:function fI9(d){this.a=d},
fIa:function fIa(d,e){this.a=d
this.b=e},
L2:function L2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GH:function GH(d,e){this.a=d
this.b=e},
bh_:function bh_(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dhA:function dhA(d){this.a=d},
dhR:function dhR(d){this.a=d},
dhJ:function dhJ(d){this.a=d},
dhK:function dhK(){},
dhI:function dhI(d){this.a=d},
dhB:function dhB(){},
dhH:function dhH(d){this.a=d},
dhG:function dhG(d,e){this.a=d
this.b=e},
dhC:function dhC(d){this.a=d},
dhL:function dhL(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dhM:function dhM(d){this.a=d},
dhN:function dhN(d){this.a=d},
dhO:function dhO(){},
dhP:function dhP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dhQ:function dhQ(){},
dhz:function dhz(d,e,f,g,h,i,j,k,l,m){var _=this
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
dhD:function dhD(d,e){this.a=d
this.b=e},
dhE:function dhE(d){this.a=d},
dhF:function dhF(){},
aKZ:function aKZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bh0:function bh0(d,e){this.b=d
this.a=e},
dhS:function dhS(){},
dhT:function dhT(d){this.a=d},
dhU:function dhU(d){this.a=d},
dhV:function dhV(){},
bkM:function bkM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bg2:function bg2(d,e){this.b=d
this.a=e},
byO:function byO(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fno:function fno(d){this.a=d},
bo8:function bo8(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eYq:function eYq(d){this.a=d},
eYp:function eYp(d,e){this.a=d
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
aDP:function aDP(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dxR:function dxR(d,e){this.a=d
this.b=e},
dxQ:function dxQ(d){this.a=d},
dxO:function dxO(d){this.a=d},
dxP:function dxP(d){this.a=d},
dy_:function dy_(d){this.a=d},
dy0:function dy0(d){this.a=d},
dxZ:function dxZ(d,e){this.a=d
this.b=e},
dy1:function dy1(){},
dy4:function dy4(d){this.a=d},
dxY:function dxY(d,e){this.a=d
this.b=e},
dy3:function dy3(){},
dy5:function dy5(d){this.a=d},
dxX:function dxX(d,e){this.a=d
this.b=e},
dy6:function dy6(d){this.a=d},
dxW:function dxW(d){this.a=d},
dy7:function dy7(d){this.a=d},
dxV:function dxV(d){this.a=d},
dy8:function dy8(d){this.a=d},
dxU:function dxU(d){this.a=d},
dy9:function dy9(d){this.a=d},
dxT:function dxT(d){this.a=d},
dya:function dya(d){this.a=d},
dxS:function dxS(d,e){this.a=d
this.b=e},
dy2:function dy2(d){this.a=d},
aew:function aew(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bkL:function bkL(d,e,f,g,h,i,j,k){var _=this
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
bkK:function bkK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dyb:function dyb(d){this.a=d},
dyc:function dyc(d,e){this.a=d
this.b=e},
aDQ:function aDQ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aK0:function aK0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aex:function aex(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dyl:function dyl(d){this.a=d},
GD:function GD(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hqH(d){var w=d.U,v=x.N
return w.jr(w,new C.cfp(),v,v)},
hWo(d){var w=d.bF
if(w>=0)return w
return 5},
hqJ(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hqH(d).h(0,v)
if(w==null||w.length===0)return null
return A.bh(w)},
hqI(d,e){var w=C.hqJ(d,e)
if(w!=null&&w.ca(new A.V(Date.now(),0,!1)))return!0
return!1},
hWp(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.hqH(d),w,w)
u=C.hqJ(d,e)
t=u!=null&&u.ca(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bS(A.dw(30,0,0,0,0,0).a).aa().ag())
d.U=v},
b1u(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b1u=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lA(t,B.JC),$async$b1u)
case 3:if(l){u=!0
w=1
break}u=A.lf(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.JC,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1u,v)},
cfp:function cfp(){},
hWm(){var w,v=$.ov(),u=J.e4(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"FT"+B.d.he(u)},
Jx(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Jx=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$Jx)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f5("ngmy_family_tree_backup_codes_v1",null,!1,B.bO),$async$Jx)
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
return A.i($async$Jx,v)},
a8q(d){return C.hWn(d)},
hWn(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a8q=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$a8q)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hM("ngmy_family_tree_backup_codes_v1",A.J(["codes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cP,null),$async$a8q)
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
cfo(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cfo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Jx(),$async$cfo)
case 3:t=m.i4(f),t=t.gae(t),s=x.f
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
return A.i($async$cfo,v)},
Os(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Os=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cfo(d),$async$Os)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Jx(),$async$Os)
case 6:s=f
r=J.a7(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dJ(A.a2(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,t,o)
w=9
return A.b(C.a8q(s),$async$Os)
case 9:case 8:u=t
w=1
break
case 5:n=C.hWm()
w=10
return A.b(C.Jx(),$async$Os)
case 10:s=f
J.aK(s,n,A.J(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a8q(s),$async$Os)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Os,v)},
b1t(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b1t=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Jx(),$async$b1t)
case 3:t=f
for(s=J.dp(t),r=s.gdP(t),r=r.dn(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.I)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a8q(t),$async$b1t)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b1t,v)},
a8r(d,e,f){var w=0,v=A.j(x.H),u
var $async$a8r=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.ari(d,e),$async$a8r)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Os(d),$async$a8r)
case 7:w=4
break
case 5:w=8
return A.b(C.b1t(d),$async$a8r)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a8r,v)},
arc(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$arc=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.ari(f,e),$async$arc)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c9(),$async$arc)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Jx(),$async$arc)
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
return A.i($async$arc,v)},
b1s(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b1s=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c9(),$async$b1s)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Jx(),$async$b1s)
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
return A.i($async$b1s,v)},
hWq(){var w,v=$.ov(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"FT"+B.d.he(u)},
arf(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$arf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$arf)
case 3:if(!g){u=null
w=1
break}t=C.hWq()
w=4
return A.b(A.Wv(),$async$arf)
case 4:s=g
r=B.dW.aO(B.X.aw(d.f3(),null))
r=B.cU.gcu().aO(r)
q=e?999:2
J.aK(s,t,A.J(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a8s(s),$async$arf)
case 5:p=e?999:2
u=new A.a1w("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arf,v)},
are(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$are=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Wv(),$async$are)
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
return A.b(C.b1s(J.k(l==null?"":l),j),$async$are)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.ca.cJ(0,B.cM.aO(t))
s=C.hqK(r)}catch(f){q=A.ac(f)
$.am.$1("[family tree qr stash] decode: "+A.w(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dJ(A.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=5
return A.b(A.a8s(p),$async$are)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$are,v)},
hqK(d){var w,v,u,t,s=null
try{w=B.X.aQ(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hWs(A.a2(w,x.N,x.z))
return u}catch(t){v=A.ac(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
h9F(d){var w=0,v=A.j(x.m),u,t,s
var $async$h9F=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a_(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.are(t[1])
w=1
break}u=null
w=1
break}u=C.hqK(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h9F,v)},
hWs(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.de(v,x.f)
u=A.cF(u,new C.cfr(),u.$ti.k("M.E"),x.k)
t=A.a4(u).k("Y<M.E>")
s=A.C(new A.Y(u,new C.cfs(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bh(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.T(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.i4(p),t=t.gae(t),o=x.B;t.C();){n=t.gR(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.de(l,u)
n=A.cF(n,new C.cft(),n.$ti.k("M.E"),o)
k=A.a4(n).k("Y<M.E>")
j=A.C(new A.Y(n,new C.cfu(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.arg(h,w,s,r,q)},
ari(d,e){var w=0,v=A.j(x.y),u,t
var $async$ari=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Oj(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Bt(d),$async$ari)
case 3:u=t.cJ(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ari,v)},
cfA(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cfA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Bt(d),$async$cfA)
case 3:t=s.b7(f,new C.cfB(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aZ(t,new C.cfC())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cfA,v)},
Ww(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Ww=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.ari(e,d),$async$Ww)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Os(e),$async$Ww)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Bt(e),$async$Ww)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dG(r,new C.cfy(g))
r=A.C(t,t.$ti.k("M.E"))}t=J.a7(r)
if(t.gau(r)){u=null
w=1
break}t=t.dN(r,new C.cfz(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.LQ(e,o),$async$Ww)
case 14:n=i
if(J.cJ(n))q.n(0,o,n)
case 12:r.length===t||(0,A.I)(r),++p
w=11
break
case 13:u=new C.arg(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ww,v)},
b1x(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b1x=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ww(d,e,f,g),$async$b1x)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.Hm(A.KZ(q.f3(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1x,v)},
b1w(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b1w=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ww(d,e,f,g),$async$b1w)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.arf(r,f),$async$b1w)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aI0(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1w,v)},
Wx(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wx=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.h9F(a0),$async$Wx)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a_(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.arc(g.a,d,e,f,s,r),$async$Wx)
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
return A.b(C.bEc(e,j),$async$Wx)
case 12:case 11:w=13
return A.b(C.aiU(e,j,s),$async$Wx)
case 13:h=n.h(0,i)
w=h!=null&&J.cJ(h)?14:15
break
case 14:w=16
return A.b(C.BE(e,i,h),$async$Wx)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.I)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.brR(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Wx,v)},
arg:function arg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cfw:function cfw(){},
cfx:function cfx(){},
cfv:function cfv(){},
cfr:function cfr(){},
cfs:function cfs(){},
cft:function cft(){},
cfu:function cfu(){},
cfB:function cfB(){},
cfC:function cfC(){},
cfy:function cfy(d){this.a=d},
cfz:function cfz(d){this.a=d},
hiF(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f4(null,x.H)
return A.hC(d,new C.arh(w,e,g,i,f,h,null),!0,null,x.H)},
dhu(d,e,f,g,h,i,j,k){return new C.bgX(i,e,k,j,g,f,h,d,null)},
arh:function arh(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFn:function aFn(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e3K:function e3K(d){this.a=d},
e3L:function e3L(d,e,f){this.a=d
this.b=e
this.c=f},
e3P:function e3P(d,e){this.a=d
this.b=e},
e3Q:function e3Q(d){this.a=d},
e3H:function e3H(d){this.a=d},
e3I:function e3I(d,e){this.a=d
this.b=e},
e3J:function e3J(d,e){this.a=d
this.b=e},
e3O:function e3O(d){this.a=d},
e3N:function e3N(d,e){this.a=d
this.b=e},
e3M:function e3M(){},
e3S:function e3S(d){this.a=d},
e3T:function e3T(d,e){this.a=d
this.b=e},
e3R:function e3R(d,e){this.a=d
this.b=e},
dhW:function dhW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bgZ:function bgZ(d,e,f){this.d=d
this.e=e
this.a=f},
adM:function adM(d,e,f){this.c=d
this.d=e
this.a=f},
bgX:function bgX(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bh1:function bh1(d,e,f,g,h){var _=this
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
aFm:function aFm(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e3C:function e3C(d,e){this.a=d
this.b=e},
e3D:function e3D(d){this.a=d},
e3E:function e3E(d){this.a=d},
e3F:function e3F(d){this.a=d},
e3G:function e3G(d){this.a=d},
a0H:function a0H(d){this.a=d},
bmh:function bmh(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e3U:function e3U(d,e){this.a=d
this.b=e},
b00(d,e){return new C.b0_(d,e,null)},
b0_:function b0_(d,e,f){this.c=d
this.d=e
this.a=f},
ilO(d){if(!(d!=null&&B.a.a_(d,"ngmy:thumb:")))return null
return B.a.b2(d,11)},
itW(d){return A.bU(B.L,null,new C.fZ1(new C.um(A.P(d).ax.a===B.H)),d,!0,!0,!0,null,!1,!1,x.N)},
hsI(d,e){return new C.auh(e,d,null)},
aSu(d,e,f,g,h,i,j){var w=C.ilO(i)
if(w!=null)return A.bx(e,new A.a5(j,f,new C.a7t(w,!0,null),null),B.aq)
return N.aRR(e,B.c0,f,g,h,i,j)},
lY:function lY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7t:function a7t(d,e,f){this.c=d
this.d=e
this.a=f},
blV:function blV(d,e){var _=this
_.e=_.d=$
_.cQ$=d
_.b7$=e
_.c=_.a=null},
dPY:function dPY(d){this.a=d},
dPZ:function dPZ(){},
dQ_:function dQ_(d,e){this.a=d
this.b=e},
blU:function blU(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fZ1:function fZ1(d){this.a=d},
fZ0:function fZ0(d,e){this.a=d
this.b=e},
fZ_:function fZ_(d,e){this.a=d
this.b=e},
fYZ:function fYZ(d,e){this.a=d
this.b=e},
auh:function auh(d,e,f){this.c=d
this.d=e
this.a=f},
cp0:function cp0(d,e){this.a=d
this.b=e},
aNq:function aNq(){},
itH(d){var w=null
return A.cg(w,w,!0,w,new C.fYp(),d,w,!0,!0,x.e2)},
iuV(d,e,f,g,h){var w=null
return A.cg(w,w,!0,w,new C.h58(h,g,f,e),d,w,!0,!0,x.N)},
itJ(d,e){var w=null
return A.cg(w,w,!0,w,new C.fYt(e),d,w,!0,!0,x.dY)},
itI(d){var w=null
return A.cg(w,w,!0,w,new C.fYs(),d,w,!0,!0,x.c5)},
aVq:function aVq(d,e){this.a=d
this.b=e},
aVp:function aVp(d){this.a=d},
aTs:function aTs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fYp:function fYp(){},
h58:function h58(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fYt:function fYt(d){this.a=d},
fYs:function fYs(){},
a_k:function a_k(d,e){this.c=d
this.a=e},
aAy:function aAy(){var _=this
_.d=$
_.c=_.a=_.e=null},
d96:function d96(d){this.a=d},
d97:function d97(d){this.a=d},
d95:function d95(d,e){this.a=d
this.b=e},
d98:function d98(d){this.a=d},
d99:function d99(d){this.a=d},
a_j:function a_j(d){this.a=d},
aAx:function aAx(){this.d=$
this.c=this.a=null},
d92:function d92(d){this.a=d},
d93:function d93(d){this.a=d},
d94:function d94(d){this.a=d},
ZR:function ZR(d){this.a=d},
azg:function azg(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cHn:function cHn(){},
cHt:function cHt(d){this.a=d},
cHu:function cHu(d){this.a=d},
cHv:function cHv(d){this.a=d},
cHs:function cHs(){},
cHw:function cHw(d){this.a=d},
cHx:function cHx(d){this.a=d},
cHr:function cHr(){},
cHy:function cHy(d,e){this.a=d
this.b=e},
cHq:function cHq(d,e){this.a=d
this.b=e},
cHo:function cHo(d,e){this.a=d
this.b=e},
cHz:function cHz(d){this.a=d},
cHp:function cHp(){},
cHA:function cHA(d){this.a=d},
a2s:function a2s(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
byG:function byG(){this.d=$
this.c=this.a=null},
fmU:function fmU(d,e){this.a=d
this.b=e},
fmV:function fmV(d){this.a=d},
fmW:function fmW(d,e){this.a=d
this.b=e},
acO:function acO(d,e){this.a=d
this.b=e},
Gr:function Gr(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
byE:function byE(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
fmS:function fmS(d,e){this.a=d
this.b=e},
az9:function az9(d,e){this.c=d
this.a=e},
byF:function byF(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
fmT:function fmT(d){this.a=d},
byD:function byD(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aPy:function aPy(){},
aPz:function aPz(){},
bGb(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.j.bh(u),s=B.o.D(B.j.V((u-t)*100),0,99),r=d<0?"-":"",q=A.p9(B.o.v(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fWN(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.m(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.m(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.U,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.m(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b_(B.o.v(s),2,"0")
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.m(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Ze(A.cQ(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aS6(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aS6=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.i_().l9(85,1280,B.eQ),$async$aS6)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fq(),$async$aS6)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hsH()
w=9
return A.b(C.cp_(q,r),$async$aS6)
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
return A.i($async$aS6,v)},
aSs(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aSs=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a_(g,"ngmy:ws-thumb:")
if(i){u=C.coX(g)
w=1
break}if(!B.a.a_(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gal(g.split(",")):g
p=B.cM.aO(q)
o=960
case 7:if(!(o>=96)){w=8
break}w=9
return A.b(A.Hn(p,!0,null,o).dg(0,B.h8),$async$aSs)
case 9:n=a1
w=10
return A.b(n.ld(),$async$aSs)
case 10:m=a1
w=11
return A.b(m.b.hr(B.hq),$async$aSs)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eU(B.dS.gaV(l))
k="data:image/png;base64,"+B.cU.gcu().aO(i)
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
return A.i($async$aSs,v)},
fWN:function fWN(){},
um:function um(d){this.a=d},
aug:function aug(d,e,f){this.c=d
this.d=e
this.a=f},
aGR:function aGR(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eVA:function eVA(d,e){this.a=d
this.b=e},
eVr:function eVr(d){this.a=d},
eVs:function eVs(d){this.a=d},
eVy:function eVy(d,e){this.a=d
this.b=e},
eVx:function eVx(d,e){this.a=d
this.b=e},
eVu:function eVu(d,e){this.a=d
this.b=e},
eVt:function eVt(d,e){this.a=d
this.b=e},
eVv:function eVv(d){this.a=d},
eVw:function eVw(d,e){this.a=d
this.b=e},
eVz:function eVz(d,e){this.a=d
this.b=e},
eVm:function eVm(d,e){this.a=d
this.b=e},
eVq:function eVq(d){this.a=d},
eVp:function eVp(d,e){this.a=d
this.b=e},
eVo:function eVo(d){this.a=d},
eVB:function eVB(d,e){this.a=d
this.b=e},
eVC:function eVC(d,e){this.a=d
this.b=e},
eVn:function eVn(d,e){this.a=d
this.b=e},
hFT(d,e,f){var w="thumbnailPath",v=e.aj()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.J(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
fWO(d,e,f){var w=0,v=A.j(x.N),u
var $async$fWO=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.X.aw(C.hFT(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fWO,v)},
bGd(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bGd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fWO(!0,d,e),$async$bGd)
case 4:w=3
return A.b(r.aue(g,d,e.a),$async$bGd)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dW.aO(B.X.aw(C.hFT(d,e,null),null))
u="NGMY_WS:"+B.kL.gcu().aO(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGd,v)},
hxg(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hig(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d5(s,"NGMYWSSYNC2|"))return!0
if(J.d5(s,"NGMY_WS:"))return!0
if(J.eJ(s,t))return!0
if(J.d5(s,"{"))try{w=B.X.aQ(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
ir0(d){var w,v,u,t=C.hxg(d)
if(t==null)return null
if(C.hig(t))return t
w=B.a.co(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b2(t,w))
if(C.hig(v))return v}u=B.a.co(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b2(t,u))
if(C.hig(v))return v}return null},
hif(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d5(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d5(q,"NGMY_WS:")){v=B.ca.cJ(0,B.cM.aO(J.nq(q,8)))
w=t.a(B.X.aQ(0,v,r))}else w=t.a(B.X.aQ(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.hcj(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bGc(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bGc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a_(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.aud(t[1]),$async$bGc)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hif(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hif(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGc,v)},
hie(d){var w=B.o.v(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lE(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bFI(){var w=0,v=A.j(x.o),u,t
var $async$bFI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Hz(),$async$bFI)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hif(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFI,v)},
hGU(d,e,f,g){return A.bU(B.L,null,new C.h4W(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
h4W:function h4W(d,e,f){this.a=d
this.b=e
this.c=f},
aeS:function aeS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eVE:function eVE(d,e){this.a=d
this.b=e},
eVF:function eVF(d,e){this.a=d
this.b=e},
eVG:function eVG(d,e){this.a=d
this.b=e},
eVH:function eVH(d,e){this.a=d
this.b=e},
eVD:function eVD(d){this.a=d},
aua:function aua(d,e,f){this.c=d
this.d=e
this.a=f},
bnE:function bnE(){var _=this
_.c=_.a=_.e=_.d=null},
eVh:function eVh(d,e){this.a=d
this.b=e},
eVi:function eVi(d){this.a=d},
eVj:function eVj(d){this.a=d},
auf:function auf(d){this.a=d},
aGQ:function aGQ(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eVl:function eVl(d){this.a=d},
eVk:function eVk(d){this.a=d},
hZH(d,e,f,g,h){return new C.P8(h,g,d,e,f,null)},
aLL:function aLL(d,e){this.a=d
this.b=e},
P8:function P8(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGS:function aGS(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eW3:function eW3(){},
eW_:function eW_(d,e){this.a=d
this.b=e},
eW0:function eW0(d){this.a=d},
eVL:function eVL(d){this.a=d},
eVJ:function eVJ(d){this.a=d},
eVK:function eVK(d){this.a=d},
eVU:function eVU(d,e){this.a=d
this.b=e},
eVR:function eVR(d,e){this.a=d
this.b=e},
eVS:function eVS(d,e){this.a=d
this.b=e},
eVT:function eVT(d,e,f){this.a=d
this.b=e
this.c=f},
eVP:function eVP(d,e,f){this.a=d
this.b=e
this.c=f},
eVN:function eVN(d){this.a=d},
eVO:function eVO(d){this.a=d},
eVQ:function eVQ(d){this.a=d},
eW6:function eW6(d){this.a=d},
eW5:function eW5(d){this.a=d},
eW7:function eW7(d){this.a=d},
eW4:function eW4(d){this.a=d},
eVI:function eVI(d){this.a=d},
eVM:function eVM(d,e){this.a=d
this.b=e},
eW2:function eW2(d,e){this.a=d
this.b=e},
eW1:function eW1(d,e){this.a=d
this.b=e},
eVX:function eVX(d){this.a=d},
eVY:function eVY(d){this.a=d},
eVZ:function eVZ(d,e){this.a=d
this.b=e},
eVW:function eVW(d,e){this.a=d
this.b=e},
eVV:function eVV(d,e,f){this.a=d
this.b=e
this.c=f},
bAr:function bAr(){},
Bg(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ahn(d,e,f){return C.if5(d,e,f)},
if5(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ahn=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aD("String",e,f),$async$ahn)
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
ahm(d,e){return C.if4(d,e)},
if4(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
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
idV(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.TB(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bDb(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bDb=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b4L(q),$async$bDb)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aSs(q,!1),$async$bDb)
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
return A.i($async$bDb,v)},
hN5(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.rs(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rs(p,J.k(u==null?"":u),1,o,q)},
hcj(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.de(s,x.f)
w=A.cF(w,new C.cGF(),w.$ti.k("M.E"),x.Q)
v=A.a4(w).k("Y<M.E>")
r=A.C(new A.Y(w,new C.cGG(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bh(J.k(t==null?"":t))
return new C.lE(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
ije(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.wC
case"female":case"f":return D.ox
default:return D.z3}},
hCm(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hmF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.ije(v==null?j:J.k(v))
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
ijg(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.OQ
case"viewer":return D.kW
default:return D.uJ}},
ijh(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Ho(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aRd(d,e){return B.a.i(e.toLowerCase())===C.Ho(d,e)&&d.y!==D.kW},
uB(d,e){var w,v=d.y
if(v===D.kW)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Ho(d,e))return!0
if(v===D.OQ)return!0
v=d.e
return new A.N(v,A.hil(),A.U(v).k("N<1,n>")).q(0,w)},
iiB(d){return J.dG(d,new C.fGZ()).gJ(0)},
h5H(d){var w=0,v=A.j(x.y),u,t
var $async$h5H=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Bt(d),$async$h5H)
case 3:u=t.rn(f,new C.h5I(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h5H,v)},
bEc(d,e){var w=0,v=A.j(x.H),u,t
var $async$bEc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Bt(d),$async$bEc)
case 3:t=g
if(J.rn(t,new C.fEt(e))){w=1
break}if(C.iiB(t)>=2)throw A.W(A.bc("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bEc,v)},
amm(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.de(h,x.f)
w=A.cF(w,new C.bT0(),w.$ti.k("M.E"),x.P)
v=A.a4(w).k("Y<M.E>")
g=A.C(new A.Y(w,new C.bT1(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b7(u,new C.bT2(),x.N)
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
p=p==null?null:B.j.M(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.ijg(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aT(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cs)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gR(f)
if(l.b(i))m.push(A.a2(i,k,j))}return new C.kY(w,v,s,!r,t,g,q,p,o,n,m)},
hCB(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.aB(v,0,8)},
DF(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$DF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SI(d),$async$DF)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aA(),$async$DF)
case 4:t=f
w=5
return A.b(t.a7h(0),$async$DF)
case 5:w=6
return A.b(C.fuN(t,l),$async$DF)
case 6:s=f
if(J.cJ(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a7(q)
o=A.aU(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hxR(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.p8(l,n),$async$DF)
case 11:u=n
w=1
break
case 10:case 8:m=A.aU(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hxR(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.p8(l,n),$async$DF)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$DF,v)},
fuN(d,e){return C.ibh(d,e)},
ibh(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fuN=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a7(a3)
a5=A.aU(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Bg(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.X.aQ(0,a5,null)
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
break}m=A.aU(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Bg(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.X.aQ(0,m,null)
if(!a0.b(l)){w=7
break}k=C.hcj(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aU(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Bg(a9)+"_"+n))
i=C.idV(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a_(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b4L(h),$async$fuN)
case 17:g=b1
if(g!=null){i=i.TB(g)
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
case 8:J.SR(q,new C.fuO())
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
return A.i($async$fuN,v)},
bEE(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bEE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SI(d),$async$bEE)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.DF(r),$async$bEE)
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
return A.i($async$bEE,v)},
hxR(d){var w,v,u,t
try{w=B.X.aQ(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.de(w,x.f)
v=A.cF(v,new C.fqy(),v.$ti.k("M.E"),x.fA)
u=A.a4(v).k("Y<M.E>")
v=A.C(new A.Y(v,new C.fqz(),u),u.k("M.E"))
B.d.aZ(v,new C.fqA())
return v}catch(t){v=A.a([],x.D)
return v}},
p8(d,e){return C.itw(d,e)},
itw(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$p8=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.SI(b2),$async$p8)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aA(),$async$p8)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Bg(a8)
p=A.aU(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b7(x.j.a(B.X.aQ(0,p,null)),new C.fYd(),a2).fM(0)
a2=J.b7(b3,new C.fYe(),a2).bY(0,new C.fYf())
n=A.d0(a2,a2.$ti.k("M.E"))
a2=o,a2=A.dZ(a2,a2.r,A.a4(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eJ(n,m)?17:18
break
case 17:a5=C.Bg(a8)
l=A.aU(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a9M(l),$async$p8)
case 19:t=21
a5=C.Bg(a8)
k=A.aU(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.X.aQ(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.a9M(a5==null?null:J.k(a5)),$async$p8)
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
return A.b(C.ahm(r,"ngmy_worksheet_item_v3_"+C.Bg(a8)+"_"+m),$async$p8)
case 29:w=30
return A.b(C.ahm(r,"ngmy_worksheet_thumb_v3_"+C.Bg(a8)+"_"+m),$async$p8)
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
break}i=a3.gR(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bDb(h),$async$p8)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ahn(r,"ngmy_worksheet_thumb_v3_"+C.Bg(a8)+"_"+a4,f),$async$p8)
case 40:g=i.TB(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ahm(r,"ngmy_worksheet_thumb_v3_"+C.Bg(a8)+"_"+a4),$async$p8)
case 41:g=i.TB(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ahm(r,"ngmy_worksheet_thumb_v3_"+C.Bg(a8)+"_"+a4),$async$p8)
case 42:case 34:a4=i.a
w=43
return A.b(C.ahn(r,"ngmy_worksheet_item_v3_"+C.Bg(a8)+"_"+a4,B.X.aw(g.aj(),null)),$async$p8)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.c5(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ahn(r,"ngmy_worksheets_index_v3_"+C.Bg(a8),B.X.aw(q,null)),$async$p8)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eP(b3,new C.fYg(q))
a4=a3.$ti.k("cM<1,a9<n,@>>")
a7=A.C(new A.cM(a3,new C.fYh(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ahn(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.X.aw(a0,null)),$async$p8)
case 45:w=46
return A.b(J.hMb(r),$async$p8)
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
Mg(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Mg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.DF(d),$async$Mg)
case 3:t=g
s=J.cD(t)
r=s.bj(t,new C.h5G(e))
if(r===-1)s.c9(t,0,e)
else s.n(t,r,e)
u=C.p8(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Mg,v)},
bEp(d,e){var w=0,v=A.j(x.H),u
var $async$bEp=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.DF(d),$async$bEp)
case 2:u=g
J.nU(u,new C.fHs(e))
w=3
return A.b(C.p8(d,u),$async$bEp)
case 3:return A.h(null,v)}})
return A.i($async$bEp,v)},
Hq(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Hq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$Hq)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aU(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.X.aQ(0,i,null)
if(x.j.b(t)){j=J.de(t,x.f)
j=A.cF(j,new C.fKE(),j.$ti.k("M.E"),x.k)
s=A.a4(j).k("Y<M.E>")
r=A.C(new A.Y(j,new C.fKF(),s),s.k("M.E"))
B.d.aZ(r,new C.fKG())
k=r}}catch(h){}w=4
return A.b(C.frl(d),$async$Hq)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.ibF(k,p,d)
j=A.U(o)
s=j.k("N<1,a9<n,@>>")
s=A.C(new A.N(o,new C.fKH(),s),s.k("ak.E"))
n=B.X.aw(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.RS(d,o),$async$Hq)
case 7:case 6:j=j.k("Y<1>")
m=A.C(new A.Y(o,new C.fKI(d),j),j.k("M.E"))
if(m.length!==0)C.aQY(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Hq,v)},
fY_(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fY_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.RS(d,e),$async$fY_)
case 3:t=J.dG(e,new C.fY0(d))
s=A.C(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aQY(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fY_,v)},
a45(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a45=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aA(),$async$a45)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aU(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.X.aQ(0,l,null)
if(x.j.b(u)){m=J.de(u,x.f)
m=A.cF(m,new C.h5B(),m.$ti.k("M.E"),x.k)
t=A.a4(m).k("Y<M.E>")
s=A.C(new A.Y(m,new C.h5C(),t),t.k("M.E"))
o=s}}catch(k){}q=J.oz(o,new C.h5D(e))
if(B.a.i(e.x).length===0&&C.uB(e,d)){m=B.a.i(d.toLowerCase())
p=e.aGc(e.y===D.kW?D.kW:D.uJ,m)}else p=e
if(q===-1)J.n2(o,0,p)
else J.aK(o,q,p)
w=3
return A.b(C.RS(d,o),$async$a45)
case 3:w=C.uB(p,d)?4:5
break
case 4:w=6
return A.b(C.aQX(C.Ho(p,d),p),$async$a45)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a45,v)},
aR9(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aR9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Hq(d),$async$aR9)
case 2:u=g
t=J.cD(u)
s=A.nA(t.eP(u,new C.fH9(e)))
t.bq(u,new C.fHa(e))
w=3
return A.b(C.RS(d,u),$async$aR9)
case 3:w=s!=null&&C.aRd(s,d)?4:5
break
case 4:w=6
return A.b(C.fqC(e),$async$aR9)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aR9,v)},
aja(d){var w=d.f,v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.h5M(),v),v.k("M.E"))
return w},
hfO(d,e){var w,v=d.f,u=A.nA(new A.Y(v,new C.fGE(e),A.U(v).k("Y<1>")))
v=C.aja(d)
w=A.U(v).k("Y<1>")
v=A.C(new A.Y(v,new C.fGF(e,u),w),w.k("M.E"))
B.d.aZ(v,new C.fGG())
return v},
ijk(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hGY(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bj(C.hfO(d,u),new C.h59(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
ikS(d,e){var w
if(e==null||e.length===0)return 1
w=C.hfO(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fLv(),A.U(w).k("N<1,H>")).f1(0,B.y0)+1},
itp(d){var w,v=C.aja(d)
if(v.length===0)return null
w=new A.Y(v,new C.fXU(),A.U(v).k("Y<1>"))
if(!w.gau(0))return w.gH(0)
return B.d.gH(v)},
ijf(d){return A.J(["id",d.a,"name",d.b,"gender",C.hCm(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
ikN(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
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
n=n!==D.z3?n:q.c
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
d=q.aG7(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.I)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cPP(a1,w,a3.d,a2.y,s,a0,v)},
Bt(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$Bt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$Bt)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aU(J.t(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.X.aQ(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.de(t,x.f)
p=A.cF(p,new C.fKB(),p.$ti.k("M.E"),x.k)
s=A.a4(p).k("Y<M.E>")
p=A.C(new A.Y(p,new C.fKC(),s),s.k("M.E"))
B.d.aZ(p,new C.fKD())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Bt,v)},
aiU(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aiU=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.uJ:D.kW
a7=C.Ho(b2,b3)
w=2
return A.b(C.Bt(b1),$async$aiU)
case 2:a8=b5
a9=J.cD(a8)
b0=a9.bj(a8,new C.fXP(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bEc(b1,b2),$async$aiU)
case 5:case 4:if(b0===-1){u=b2.aGc(a6,a7)
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
i=i!==D.z3?i:l.c
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
s.n(0,m,l.aG7(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("b8<2>")
s=A.C(new A.b8(s,k),k.k("M.E"))
k=a5?D.uJ:D.kW
u=t.cPR(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.RS(b1,a8),$async$aiU)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aQX(B.a.i(b3.toLowerCase()),u),$async$aiU)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aiU,v)},
hyf(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("N<1,a9<n,@>>"),k=A.C(new A.N(m,C.hG1(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.J(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.J(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hyg(d,e){var w=new A.V(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("N<1,a9<n,@>>")
u=A.C(new A.N(u,C.hG1(),t),t.k("ak.E"))
return A.J(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
i95(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a7(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.amm(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hil(),A.U(j).k("N<1,n>")).bY(0,new C.fr8())
t=A.C(j,j.$ti.k("M.E"))
if(u===v)s=D.uJ
else s=B.d.q(t,u)?D.OQ:D.kW
return w.aGc(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.amm(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.de(q,h)
h=A.cF(h,new C.fr9(),h.$ti.k("M.E"),x.P)
p=A.a4(h).k("Y<M.E>")
o=A.C(new A.Y(h,new C.fra(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b7(n,new C.frb(),x.N).bY(0,new C.frc())
t=A.C(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.uJ
else s=B.d.q(t,u)?D.OQ:D.kW
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
j=j==null?null:B.j.M(j)
if(j==null)j=0
return new C.kY(h,r,p,!m,t,o,l,j,v,s,B.ce)},
frl(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$frl=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.frp()
h=x.N
g=x.z
w=7
return A.b(A.iE(A.a([A.lJ("family_trees","*",null,A.J(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bO),r.$2(A.lJ("family_trees","*",A.J(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bO),"collaborator"),r.$2(A.lJ("family_trees","*",null,A.J(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bO),"public")],x.cl),x.fO),$async$frl)
case 7:q=a4
p=J.t(q,0)
o=J.t(q,1)
n=J.t(q,2)
g=x.a
m=A.T(h,g)
h=A.C(p,g)
l=h
J.fZ(l,o)
J.fZ(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.I)(l),++f){k=l[f]
g=J.t(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aK(m,j,k)}l=m
h=A.a4(l).k("b8<2>")
h=A.cF(new A.b8(l,h),new C.frm(a0),h.k("M.E"),x.k)
l=A.a4(h).k("Y<M.E>")
l=A.C(new A.Y(h,new C.frn(),l),l.k("M.E"))
B.d.aZ(l,new C.fro())
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
return A.i($async$frl,v)},
ibF(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a7(e)
if(j.gau(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dN(e,new C.fvv(),v).bY(0,new C.fvw())
t=A.d0(u,u.$ti.k("M.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.I)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Ho(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kW){m=q.e
m=!new A.N(m,A.hil(),A.U(m).k("N<1,n>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gR(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.ikN(l,v)
o=C.Ho(k,w)
p=v.d
s.n(0,u,o===w?k.bfk(p,D.uJ):k.bfk(p,v.y))}j=s.$ti.k("b8<2>")
j=A.C(new A.b8(s,j),j.k("M.E"))
B.d.aZ(j,new C.fvx())
return j},
RS(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$RS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aA(),$async$RS)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b7(e,new C.fyr(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aD("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.X.aw(s,null)),$async$RS)
case 3:return A.h(null,v)}})
return A.i($async$RS,v)},
aQX(d,e){return C.ih_(d,e)},
ih_(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aQX=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.mf("family_trees",A.a([C.hyf(e,d)],p),null,B.cP),$async$aQX)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.mf("family_trees",A.a([C.hyg(e,d)],p),null,B.cP),$async$aQX)
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
return A.i($async$aQX,v)},
aQY(d,e){return C.ih0(d,e)},
ih0(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aQY=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("N<1,a9<n,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fDJ(d),n),m)
r=l
w=7
return A.b(A.mf("family_trees",r,null,B.cP),$async$aQY)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fDK(d),n),m)
p=k
w=8
return A.b(A.mf("family_trees",p,null,B.cP),$async$aQY)
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
return A.i($async$aQY,v)},
fqC(d){return C.i8j(d)},
i8j(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fqC=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Sh("family_trees",A.J(["id",d],x.N,x.z),null,B.cP),$async$fqC)
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
return A.i($async$fqC,v)},
rs:function rs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lE:function lE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cGI:function cGI(){},
cGH:function cGH(){},
cGF:function cGF(){},
cGG:function cGG(){},
IA:function IA(d,e){this.a=d
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
aml:function aml(d,e){this.a=d
this.b=e},
fGZ:function fGZ(){},
h5I:function h5I(d){this.a=d},
fEt:function fEt(d){this.a=d},
kY:function kY(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bT4:function bT4(){},
bT3:function bT3(){},
bT0:function bT0(){},
bT1:function bT1(){},
bT2:function bT2(){},
fuO:function fuO(){},
fqy:function fqy(){},
fqz:function fqz(){},
fqA:function fqA(){},
fYd:function fYd(){},
fYe:function fYe(){},
fYf:function fYf(){},
fYg:function fYg(d){this.a=d},
fYh:function fYh(){},
h5G:function h5G(d){this.a=d},
fHs:function fHs(d){this.a=d},
fKE:function fKE(){},
fKF:function fKF(){},
fKG:function fKG(){},
fKH:function fKH(){},
fKI:function fKI(d){this.a=d},
fY0:function fY0(d){this.a=d},
h5B:function h5B(){},
h5C:function h5C(){},
h5D:function h5D(d){this.a=d},
fH9:function fH9(d){this.a=d},
fHa:function fHa(d){this.a=d},
h5M:function h5M(){},
fGE:function fGE(d){this.a=d},
fGF:function fGF(d,e){this.a=d
this.b=e},
fGG:function fGG(){},
h59:function h59(d){this.a=d},
fLv:function fLv(){},
fXU:function fXU(){},
fKB:function fKB(){},
fKC:function fKC(){},
fKD:function fKD(){},
fXP:function fXP(d){this.a=d},
fr8:function fr8(){},
fr9:function fr9(){},
fra:function fra(){},
frb:function frb(){},
frc:function frc(){},
frp:function frp(){},
frq:function frq(d){this.a=d},
frm:function frm(d){this.a=d},
frn:function frn(){},
fro:function fro(){},
fvv:function fvv(){},
fvw:function fvw(){},
fvx:function fvx(){},
fyr:function fyr(){},
fDJ:function fDJ(d){this.a=d},
fDK:function fDK(d){this.a=d},
cGJ:function cGJ(d,e){this.a=d
this.b=e},
cGK:function cGK(d,e){this.a=d
this.b=e},
aIX:function aIX(d,e,f){this.a=d
this.b=e
this.c=f},
bb1:function bb1(){this.b=this.a=0},
bb0:function bb0(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
byH:function byH(){},
xp(d,e){var w,v
if(d==null)return""
w=d.bT()
v=""+w.gcg()+"/"+w.gcz()+"/"+w.gcl()
if(!e)return v
return v+" "+B.a.b_(B.o.v(w.gnv()),2,"0")+":"+B.a.b_(B.o.v(w.gGN()),2,"0")},
hZE(){var w,v=$.ov(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"WS"+B.d.he(u)},
aub(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$aub=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$aub)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f5("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bO),$async$aub)
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
return A.i($async$aub,v)},
auc(d){return C.hZF(d)},
hZF(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$auc=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$auc)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hM("ngmy_worksheet_project_qr_stashes_v1",A.J(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cP,null),$async$auc)
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
return A.i($async$auc,v)},
aue(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$aue=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$aue)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hZE()
w=4
return A.b(C.aub(),$async$aue)
case 4:r=h
q=B.a.i(e)
p=B.dW.aO(t)
J.aK(r,s,A.J(["ownerEmail",q,"projectId",f,"payload",B.cU.gcu().aO(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.auc(r),$async$aue)
case 5:u=new A.a1w("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aue,v)},
aud(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aud=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c9(),$async$aud)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.aub(),$async$aud)
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
try{s=B.ca.cJ(0,B.cM.aO(t))}catch(h){r=A.ac(h)
$.am.$1("[worksheet qr stash] decode: "+A.w(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dJ(A.a2(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
p.n(q,i,m)}w=5
return A.b(C.auc(q),$async$aud)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aud,v)},
hsH(){var w=new A.V(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cR.az(999999)},
hZG(d){var w,v,u,t,s,r,q
try{w=A.ahO(d)
if(w==null)return d
v=w
if(J.Mm(v)>960||J.Ml(v)>960){s=v
r=J.Mm(v)>=J.Ml(v)?960:null
v=A.ahL(s,J.Ml(v)>J.Mm(v)?960:null,B.Qe,r)}s=v
u=A.anH(82).TY(s,B.zL)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cf(u))
return s}catch(q){t=A.ac(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
cp_(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cp_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hZG(e)
$.coW.n(0,s,t)
u=C.bGf(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cp_,v)},
b4L(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b4L=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d5(l,"data:image")){u=null
w=1
break}t=4
r=J.eJ(l,",")?B.d.gal(J.lO(l,",")):l
q=B.cM.aO(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hsH()
w=7
return A.b(C.cp_(p,q),$async$b4L)
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
return A.i($async$b4L,v)},
coX(d){var w=0,v=A.j(x.T),u,t,s
var $async$coX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a_(s,"data:image")){u=s
w=1
break}w=3
return A.b(N.coZ(s),$async$coX)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cU.gcu().aO(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$coX,v)},
a9M(d){var w=0,v=A.j(x.H),u,t
var $async$a9M=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=N.hFU(d)
if(t==null){w=1
break}$.coW.W(0,t)
w=3
return A.b(C.bGe(t),$async$a9M)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a9M,v)},
bGf(d,e){return C.ir3(d,e)},
ir3(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bGf=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aPM
w=7
return A.b(n==null?$.aPM=N.heD():n,$async$bGf)
case 7:r=g
q=new Uint8Array(A.cf(e))
p=J.mk(r,"thumbs","readwrite")
B.iE.md(J.mj(p,"thumbs"),q,l)
w=8
return A.b(J.oy(p),$async$bGf)
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
return A.i($async$bGf,v)},
bGe(d){return C.ir1(d)},
ir1(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bGe=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aPM
w=7
return A.b(o==null?$.aPM=N.heD():o,$async$bGe)
case 7:r=f
q=J.mk(r,"thumbs","readwrite")
B.iE.Gn(J.mj(q,"thumbs"),m)
w=8
return A.b(J.oy(q),$async$bGe)
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
return A.i($async$bGe,v)}},D,At,Au,Z,Av,Aw,N
J=c[1]
A=c[0]
B=c[2]
P=c[261]
A_=c[168]
R=c[60]
A8=c[236]
L=c[217]
H=c[35]
E=c[227]
S=c[124]
A9=c[239]
T=c[107]
Aa=c[138]
Ab=c[119]
Ac=c[203]
A0=c[121]
Ad=c[235]
Ae=c[44]
Q=c[234]
A1=c[204]
Af=c[255]
Ag=c[194]
Ah=c[207]
M=c[92]
A2=c[88]
Ai=c[174]
A3=c[133]
A4=c[177]
A5=c[202]
Aj=c[258]
A6=c[260]
Ak=c[80]
G=c[259]
Al=c[137]
Am=c[263]
An=c[123]
A7=c[221]
Ao=c[34]
U=c[122]
O=c[197]
Ap=c[208]
V=c[262]
Aq=c[158]
Ar=c[129]
W=c[248]
X=c[43]
F=c[98]
As=c[33]
I=c[106]
K=c[142]
Y=c[78]
C=a.updateHolder(c[7],C)
D=c[254]
At=c[79]
Au=c[215]
Z=c[257]
Av=c[256]
Aw=c[64]
N=c[61]
C.apT.prototype={}
C.b01.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bjE(),f=h.x!=null&&h.zL(i).length===0
if(h.x!=null)w=f?B.b3:B.bD
else w=h.gUD()?B.bD:B.e0
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.l(22)
t=A.L(D.bq1,B.r,1)
s=x.p
r=A.r(i,A.x(A.a([A.r(i,D.fco,B.f,i,i,new A.o(B.b3.j(0.12),i,i,A.l(999),i,i,B.n),i,i,i,i,B.hi,i,i,i),B.W,D.fIy,B.aw,A.d(C.xp(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fEa,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,D.b87,i,i,i,i,B.a0Z,i,i,i)
q=A.l(16)
p=A.L(B.bi,B.r,1)
o=A.L(B.b3.j(0.28),B.r,1)
n=A.hgU(h.d)
o=A.r(B.A,C.b00(A.fNQ(h.e,n),30),B.f,i,i,new A.o(B.m8,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fz5,B.K,i,i)
m=A.l(14)
l=A.L(B.bi,B.r,1)
q=A.r(i,A.x(A.a([o,B.T,n,B.bG,D.fIR,B.ae,A.r(i,A.x(A.a([D.fZ4,B.bG,A.d(A.Bv(h.c),i,i,i,i,i,i,D.ftF,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fh,i,i,1/0)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aS,i,p,q,i,i,B.n),i,i,i,i,O.aml,i,i,i)
p=A.l(16)
m=A.L(B.bi,B.r,1)
l=j.aTh("Original due",C.xp(h.r,!1))
n=j.aTh("Current due",C.xp(h.f,!1))
o=w.j(0.1)
k=A.l(12)
p=A.a([q,B.W,A.r(i,A.x(A.a([l,B.T,n,B.W,A.r(i,A.d(h.gaNj(),i,i,i,i,i,i,A.m(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.Cn,i,i,1/0),B.W,j.ckG(),B.T,j.c7s(g,f)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bh,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.l(14)
n=A.L(B.bi,B.r,1)
B.d.u(p,A.a([B.W,A.r(i,A.x(A.a([D.fJO,B.aw,A.d(q,i,i,i,i,i,i,D.fyi,i,i,i)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aS,i,n,o,i,i,B.n),i,i,i,i,B.bh,i,i,1/0)],s))}if(h.gaHT()){q=A.l(14)
o=A.L(B.cx,B.r,1.6)
B.d.u(p,A.a([B.W,A.r(i,A.x(A.a([D.h_o,B.T,A.bx(A.l(12),A.e9(new A.a5(1/0,88,A.b2(i,i,i,new A.Xi(h.ax,B.a_,D.fh9,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.Cp,i,i,i)],s))}p.push(B.aB)
p.push(D.fSd)
return A.r(i,A.x(A.a([r,new A.D(B.a0O,A.x(p,B.al,i,B.e,B.i,0,B.p),i)],s),B.al,i,B.e,B.P,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aTh(d,e){var w=null
return A.A(A.a([A.E(A.d(d,w,w,w,w,w,w,D.abU,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fuK,w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
ckG(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.aaw(B.e0,u,"Not paid yet")
w=t.zL(null).length
v=w===0?B.b3:B.bD
return this.aaw(v,u,C.xp(t.x,!0))},
c7s(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.aaw(B.b3,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.aaw(B.b3,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.abU,u,u,u)
v=A.U(d).k("N<1,h5>")
v=A.C(new A.N(d,new C.c8l(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bX(B.bH,v,B.bt,u,6,6)],x.p),B.E,u,B.e,B.i,0,B.p)},
aaw(d,e,f){var w=null
return A.A(A.a([A.E(A.d(e,w,w,w,w,w,w,D.abU,w,w,w),1),new A.dm(1,B.cq,A.d(f,w,w,w,w,w,w,A.m(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.e4,w,w),w)],x.p),B.E,w,B.e,B.i,0,w,w)}}
C.bde.prototype={
a5(d,e){new A.Xi(this.b,B.a_,e,!0,3.5,null).a5(d,e)},
aE(d){return d.b!==this.b}}
C.aq5.prototype={
S(){return new C.aEQ(A.a([],x.bp))},
ge3(){return this.c}}
C.aEQ.prototype={
Y(){this.a4()
this.Jl()},
Jl(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Jl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3k(t.a.c),$async$Jl)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dQQ(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Jl,v)},
aVf(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aS,s=A.m(v,v,u?B.bu:B.bj,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.l(10)
u=(this.a.d.a?B.bu:B.bj).j(0.22)
w=A.l(10)
return A.bA(v,new A.b6(4,r,new A.ay(u,1,B.r,-1)),v,B.bh,v,v,v,v,!0,new A.b6(4,w,new A.ay((this.a.d.a?B.bu:B.bj).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.l(10),D.b5M),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aVe(d){return this.aVf(d,null)},
Q5(d){return this.coj(d)},
coj(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Q5=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.I5:B.eQ
w=7
return A.b(new A.i_().CM(72,900,900,n),$async$Q5)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fq(),$async$Q5)
case 8:p=f
n=B.cU.gcu().aO(p)
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
if(n!=null)n.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d("Could not pick photo: "+A.w(o),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Q5,v)},
b3m(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aS,o=A.l(10),n=A.L((q?B.bu:B.bj).j(0.18),B.r,1)
if(d)q=B.cJ
else q=s.a.d.a?B.bu:B.bj
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.m(r,r,s.a.d.a?B.aS:B.as,r,r,r,r,r,r,r,r,12.5,r,r,B.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cJ
else u=s.a.d.a?B.bu:B.bj
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.m(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.i,0,B.p),1)
v=A.fv(r,r,r,r,r,r,r,r,r,r,r,B.cJ,r,r,r,r,r,r,r,r,r,r,r,r,r,B.ch)
q=A.a([q,B.af,u,A.bP(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aI(r,r,r,r,A.X(B.cC,s.a.d.a?B.bu:B.bj,r,r,r,18),r,r,r,g,r,r,r,r,r,B.ch))
return A.r(r,A.A(q,B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jG,D.bD0,r,r,r)},
DH(d){return this.bDQ(d)},
bDP(){return this.DH(null)},
bDQ(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DH=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.ax()
r=new A.au(new A.ba(a4,B.b5,B.aP),s)
if(a3)a4=""
else{a4=a5.c
q=B.j.iH(a4)
p=a5.c
a4=a4===q?B.o.v(B.j.M(p)):B.j.ad(p,2)}o=new A.au(new A.ba(a4,B.b5,B.aP),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.ba(a4,B.b5,B.aP),s)
if(a3){a4=new A.V(Date.now(),0,!1).bS(6048e8)
m=A.c_(a4.gcl(),a4.gcg(),a4.gcz(),0,0,0,0,0)}else{a4=a5.f
m=A.c_(a4.gcl(),a4.gcg(),a4.gcz(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bq(a4,!0,x.cT)
i=a3?null:A.hgU(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.xa?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hN(B.w.j(0.55),!0,"Dismiss",a4,new C.dQz(),new C.dQA(a2,t,a5,r,new C.dQB(a2,t),o,n,j),B.eG,!0,x.y),$async$DH)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.cW(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.U$=s
r.P$=0
o.U$=s
o.P$=0
n.U$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.L(x.q).f.T(D.fnJ)
w=1
break}a0=a2.d
if(a0==null){t.c.L(x.q).f.T(D.fmn)
w=1
break}a1=A.fNQ(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.xa?"male":"female"
w=7
return A.b(A.aj9(a3,A.hpk(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$DH)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.xa?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.u(a3,j)
a3=a2.a
a3=A.c_(a3.gcl(),a3.gcg(),a3.gcz(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c_(a4.gcl(),a4.gcg(),a4.gcz(),0,0,0,0,0)))a5.cSb(a2.a)
w=8
return A.b(A.aj9(t.a.c,a5),$async$DH)
case 8:case 5:w=9
return A.b(t.Jl(),$async$DH)
case 9:case 1:return A.h(u,v)}})
return A.i($async$DH,v)},
aVV(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cJ.j(0.14)
else w=this.a.d.a?B.a_:B.aS
v=A.l(12)
u=A.l(12)
t=A.l(12)
if(g)s=B.cJ
else s=(this.a.d.a?B.bu:B.bj).j(0.2)
s=A.L(s,B.r,g?1.5:1)
r=C.b00(d,18)
if(g)q=B.cJ
else q=this.a.d.a?B.aS:B.as
return A.aH(!1,B.a3,!0,v,A.aP(!1,u,!0,A.r(p,A.A(A.a([r,B.bn,A.d(e,p,p,p,p,p,p,A.m(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.ba,B.i,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bV,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.aj)},
SV(d){return this.cG9(d)},
cG9(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$SV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hN(B.w.j(0.55),!0,"Dismiss",s,new C.dQT(),new C.dQU(t,d),B.h7,!0,x.y),$async$SV)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.aj9(t.a.c,d),$async$SV)
case 7:w=8
return A.b(t.Jl(),$async$SV)
case 8:case 1:return A.h(u,v)}})
return A.i($async$SV,v)},
Q4(d,e){return this.bOL(0,e)},
bOL(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Q4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lp(s,"Cancel","Delete",e.b+" \xb7 "+A.Bv(e.c)+" will be removed from this device.","Delete this debt?"),$async$Q4)
case 3:if(!g){w=1
break}w=4
return A.b(C.fHg(t.a.c,e.a),$async$Q4)
case 4:w=5
return A.b(t.Jl(),$async$Q4)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Q4,v)},
agj(d){return this.ci5(d)},
ci5(d){var w=0,v=A.j(x.H),u=this,t
var $async$agj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bU(B.L,null,new C.dQN(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$agj)
case 2:return A.h(null,v)}})
return A.i($async$agj,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.evd
w=J.dG(m.d,new C.dQV())
v=A.C(w,w.$ti.k("M.E"))
w=J.dG(m.d,new C.dQW())
u=A.C(w,w.$ti.k("M.E"))
t=B.d.cF(v,0,new C.dQX())
w=A.l(18)
s=m.a.d.a
r=s?D.cD2:D.aDn
q=A.L(s?B.cJ.j(0.35):B.cJ.j(0.18),B.r,1)
s=A.r(l,D.c3M,B.f,l,l,new A.o(B.cJ.j(m.a.d.a?0.28:0.14),l,l,A.l(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.av,A.E(A.d("Cashier",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.aS:B.as,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aH(!1,B.a3,!0,A.l(12),A.aP(!1,A.l(12),!0,D.euz,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dQY(m),l,l,l,l,l,l,l),B.f,B.cJ,0,l,l,l,l,l,B.aj)],p),B.l,l,B.e,B.i,0,l,l)
o=A.E(m.cCf("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Bv(t)
r=A.a([A.r(l,A.x(A.a([s,B.ae,A.A(A.a([o,B.af,A.E(m.b9w(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.i,0,l,l)],p),B.E,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a8(B.aA,B.aE,B.x,r,l,l),B.n),l,l,l,l,B.ami,l,l,l),B.aB],p)
if(J.ct(m.d)){w=m.a.d.a
s=w?B.eg:B.c
q=A.l(18)
o=A.L((w?B.bu:B.bj).j(0.12),B.r,1)
n=A.r(l,D.bZq,B.f,l,l,new A.o(B.cJ.j(0.12),l,l,A.l(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.aS:B.as,l,l,l,l,l,l,l,l,15,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.r(l,A.x(A.a([n,B.ae,w,B.aw,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.bu:B.bj,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bFH,l,l,1/0))}else{w=m.gcnA()
s=A.C(new A.N(v,w,A.U(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bHm,A.d("Paid",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.bu:B.bj,l,l,l,l,l,l,l,l,12,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.u(q,new A.N(u,w,A.U(u).k("N<1,v>")))
B.d.u(s,q)}B.d.u(r,s)}return A.x(r,B.al,l,B.e,B.i,0,B.p)},
b9w(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.l(14),r=A.L((v.a.d.a?B.bu:B.bj).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.m(u,u,v.a.d.a?B.bu:B.bj,u,u,u,u,u,u,u,u,11,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cJ
else w=v.a.d.a?B.aS:B.as
return A.r(u,A.x(A.a([q,B.bG,A.d(f,u,1,B.a2,u,u,u,A.m(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.i,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.eH,u,u,u)},
cCf(d,e){return this.b9w(!1,d,e)},
cnB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zL(j).length,h=d.biU()
if(d.x!=null){w=d.zL(j).length
v=w===0?B.cJ:B.bD}else if(d.gUD())v=B.bD
else{if(h)w=B.cJ
else w=k.a.d.a?B.bu:B.bj
v=w}if(d.x!=null){w=d.zL(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xp(u,!1)}else{u.toString
t="Paid "+C.xp(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xp(w,!1)+" \xb7 "+i+" missed":"Due "+C.xp(w,!1)}w=k.a.d.a?B.eg:B.c
u=A.l(18)
if(d.gUD()&&d.x==null)s=B.bD.j(0.35)
else s=(k.a.d.a?B.bu:B.bj).j(0.12)
s=A.L(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ab(0,B.G,B.w.j(0.04),B.cL,12)],x.V)
q=A.l(18)
p=k.a.d.a?B.br:B.m8
o=A.L(d.gUD()&&d.x==null?B.bD.j(0.45):B.cJ.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hgU(d.d)
o=A.r(B.A,A.d3(C.b00(A.fNQ(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aS:B.as
m=x.p
n=A.a([new A.dm(1,B.cq,A.d(p,j,1,B.a2,j,j,j,A.m(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaHT())B.d.u(n,A.a([B.e8,A.X(B.Ph,B.cJ.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.l,j,B.e,B.i,0,j,j),B.cQ,A.d(t,j,1,B.a2,j,j,j,A.m(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.U,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.i,0,B.p),1)
n=A.Bv(d.c)
l=k.a.d.a?B.aS:B.as
n=A.d(n,j,j,j,j,j,j,A.m(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.r(j,A.aH(!1,B.a3,!0,j,A.aP(!1,q,!0,new A.D(Af.am7,A.A(A.a([o,B.bc,p,B.af,A.x(A.a([n,B.bG,A.X(B.eI,(k.a.d.a?B.bu:B.bj).j(0.5),j,j,j,18)],m),B.dQ,j,B.e,B.i,0,B.p)],m),B.l,j,B.e,B.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dQP(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.aj),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d9,j,j,j,j)}}
C.uW.prototype={}
C.am9.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bp
u=v?B.E:B.l
t=a1.as
s=A.l(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.L(q,B.r,t?1.2:1.6)
p=A.a([new A.ab(0,B.G,B.w.j(0.45),B.cz,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.L(r.j(0.6),B.r,1)
n.push(A.az(a0,A.r(a0,A.X(B.cC,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a7:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iQ,A.d(k,a0,a0,a0,a0,a0,a0,A.m(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.m(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.azu,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.H6,A.d(k,a0,a0,a0,a0,a0,a0,A.m(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.ex(m,A.A(l,B.l,a0,B.e,B.P,0,a0,a0),B.f,B.e7)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bCb,A.d(v,a0,1,B.a2,a0,a0,a0,A.m(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cK:B.bs,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fM,A.x(a2,u,a0,B.e,B.P,0,B.p),a0),1))
n.push(D.fhY)
a2=A.a([A.A(n,B.l,a0,B.e,B.i,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.u(a2,A.a([new A.D(B.ws,A.r(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a8(B.a7,B.aa,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lM,A.x(a2,B.l,a0,B.e,B.P,0,B.p),a0)
if(a1.z){a2=A.l(t?9:19)
e=A.r(a0,e,B.f,a0,a0,new A.o(a0,a0,A.L(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hk,a0,a0,a0,a0)}return A.r(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a8(B.aA,B.aE,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bDw,a0,a0,a0,a0)}}
C.aWK.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.r(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.m(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bp?B.bp:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a2,q,q,q,A.m(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bs:B.cK,q,B.U,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.m(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.l,q,B.e,B.i,0,q,q),B.cQ,n],m)
if(p.z)o.push(new A.D(B.uz,n,q))
return new A.D(B.d9,A.x(o,B.l,q,B.e,B.P,0,B.p),q)}}
C.U8.prototype={
S(){return new C.bgS()}}
C.bgS.prototype={
gc2g(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aF(d,n,x.w).w,l=x.p,k=A.a([D.ev8,D.eve],l)
for(w=0;w<8;++w){v=D.a5g[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.HS:B.zv
q=t===s
r=A.X(r,q?B.eK:B.bW,n,n,n,17)
q=q?B.c:B.ab
r=A.a([r,B.bn,A.d(v.b,n,n,n,n,n,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.af,new A.bz(1,B.bb,A.d(v.c,n,1,B.a2,n,n,n,B.AW,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aN(24,24)
p=new A.ay(B.eK,2,B.r,-1)
s=new A.o(n,n,new A.bG(p,p,p,p),new A.be(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.az(n,new A.D(B.eL,A.x(A.a([new A.D(B.n2,new A.c8(B.aL,B.e,B.i,B.l,n,B.p,n,0,r,n),n),A.r(n,new A.du(!0,new C.am9(v,q.d,q.e,new C.dgs(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.i,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dgt(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bDT,A.bJ(D.h4U,n,new C.dgu(o,d),A.bo(B.b8,n,n,n,n,B.p_,n,n,new A.b9(A.l(16),B.a1),n,n,n)),n))
return A.bm(!0,new A.cP(new A.aY(0,1/0,0,m.a.b*0.9),A.cm(k,n,n,D.bIf,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nw.prototype={
aj(){var w=this
return A.J(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bfw(d,e,f){return new C.nw(this.a,e,d,f)}}
C.Iz.prototype={
x0(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Iz(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aG0(d){var w=null
return this.x0(w,w,w,w,w,d,w,w,w,w,w,w)},
cNO(d){var w=null
return this.x0(w,w,w,w,d,w,w,w,w,w,w,w)},
bfu(d,e,f){var w=null
return this.x0(d,w,w,w,w,w,w,w,e,w,f,w)},
cOs(d){var w=null
return this.x0(w,w,w,w,w,w,d,w,w,w,w,w)},
cOB(d){var w=null
return this.x0(w,w,w,w,w,w,w,w,w,d,w,w)},
cNM(d){var w=null
return this.x0(w,w,w,d,w,w,w,w,w,w,w,w)},
cOD(d){var w=null
return this.x0(w,w,w,w,w,w,w,w,w,w,w,d)},
cNJ(d){var w=null
return this.x0(w,w,d,w,w,w,w,w,w,w,w,w)},
cNE(d){var w=null
return this.x0(w,d,w,w,w,w,w,w,w,w,w,w)},
Gf(d){var w=null
return this.x0(w,w,w,w,w,w,w,d,w,w,w,w)},
cOL(d,e,f,g,h,i,j,k,l,m,n){return this.x0(d,e,f,g,null,h,i,j,k,l,m,n)},
aj(){var w=this
return A.J(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cLi(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bRM(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.j.M(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.DT.gev(D.DT))
s=i==null?o:B.j.D(i,18,36)
r=l.$2("position",D.a7_)
q=l.$2("frame",D.a6j)
l=l.$2("texture",D.a6f)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cOL(p,u,t,q,r,A.rg(d.h(0,"ribbon"))?A.H0(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a_I.prototype={
S(){return new C.aBO(A.a([],x.I),D.OP)},
ge3(){return this.c}}
C.aBO.prototype={
Y(){var w,v=this
v.a4()
v.f=A.Al(0,1)
w=$.ax()
v.z=new A.au(B.ax,w)
v.Q=new A.au(B.ax,w)
v.lh()
w=v.a
C.bEA(w.c,w.d).bG(new C.dh8(v),x.fL)},
t(){var w,v=this,u=v.f
u===$&&A.c()
u.t()
u=v.z
u===$&&A.c()
w=$.ax()
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
return A.b(C.LQ(s.c,s.d),$async$lh)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dgX(t,r))
t.axJ()
case 1:return A.h(u,v)}})
return A.i($async$lh,v)},
gaui(){var w,v=this
if(!J.ct(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
axJ(){var w,v,u=this.gaui(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.sb1(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.sb1(0,w==null?"":w)},
cgu(d){this.m(new C.dgU(this,d))
this.axJ()},
O0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$O0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nw(B.o.v(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aSP(r.c,r.d,s),$async$O0)
case 3:w=4
return A.b(t.lh(),$async$O0)
case 4:if(t.c==null||J.ct(t.d)){w=1
break}q=J.oz(t.d,new C.dgv(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.dgw(t,p))
t.axJ()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.BL(p+1,B.cw,B.kU),$async$O0)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$O0,v)},
Br(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Br=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gaui()
s=s==null?null:s.a
if(s==null)s=B.o.v(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aSP(o.c,o.d,new C.nw(s,r,q,new A.V(p,0,!1))),$async$Br)
case 3:w=4
return A.b(t.lh(),$async$Br)
case 4:if(t.c==null){w=1
break}t.m(new C.dgY(t))
case 1:return A.h(u,v)}})
return A.i($async$Br,v)},
OH(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaui()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dgE(r),s,null,!0,!0,x.y),$async$OH)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bEl(s.c,s.d,r.a),$async$OH)
case 4:t.m(new C.dgF(t))
w=5
return A.b(t.lh(),$async$OH)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.UG(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$OH,v)},
z7(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$z7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Br(),$async$z7)
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
return A.b(C.S8(s,r.r,o,p,q),$async$z7)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hGw(s,r.x,r.r),$async$z7)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.LQ(s.c,s.d),$async$z7)
case 10:l=e
for(s=n.d,r=J.cD(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.I(l,new C.nw(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.BE(r.c,r.d,l),$async$z7)
case 11:w=12
return A.b(t.lh(),$async$z7)
case 12:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$z7,v)},
a1y(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1y=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Br(),$async$a1y)
case 5:case 4:if(t.c==null){w=1
break}s=t.gz5(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dL(D.zW,new C.dgV(t),new C.dgW())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.mS("Our Family",o,"",""))
for(o=J.aT(t.d);o.C();){n=o.gR(o)
p.push(new H.mS(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hiB(o,new H.rR(s,r,"",p,new H.vb(q.d,null,null,null,null,"","","")),null),$async$a1y)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a1y,v)},
Op(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Op=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Br(),$async$Op)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bU(D.ah4,null,new C.dgA(t),s,!0,!0,!0,I.aa7,!1,!1,x.N),$async$Op)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cNO(r)
t.m(new C.dgB(t,q))
s=t.a
w=7
return A.b(C.SL(s.c,s.d,q),$async$Op)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Op,v)},
XU(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(D.ah4,null,new C.dgG(t),r,!0,!0,!0,I.aa7,!1,!1,x.e),$async$XU)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dgH(t,s))
r=t.a
w=4
return A.b(C.SL(r.c,r.d,s),$async$XU)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.BL(0,B.dK,B.n_)
case 1:return A.h(u,v)}})
return A.i($async$XU,v)},
bUr(d){var w=d.bT(),v=B.a.b_(B.o.v(w.gcg()),2,"0"),u=B.a.b_(B.o.v(w.gcz()),2,"0")
return""+w.gcl()+"-"+v+"-"+u},
gz5(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c1u()
if(r.e)w=D.afN
else if(J.ct(r.d)){w=r.y
v=r.gz5(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.ft0,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.D(W.anp,new C.a__(w,v,0,q),q),q),B.bA,t,B.am,A.d(u,q,q,q,q,q,q,A.m(q,q,D.kQ.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bA],s)
if(B.a.i(r.a.x).length!==0)w.push(A.az(q,A.r(q,D.fc9,B.f,q,q,new A.o(q,q,q,A.l(18),A.a([new A.ab(0,B.G,B.dP.j(0.45),B.J,18)],x.V),E.x2,B.n),q,q,q,q,B.Ot,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcKj(),q,q,q,q,q,q,!1,B.a4))
w.push(B.W)
w.push(A.hs(D.bVz,D.h4m,r.gaOZ(),q))
B.d.u(u,w)}w=A.as(A.cb(A.x(u,B.l,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.ey,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.m(q,q,D.kQ.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.U,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dZ:B.Bx
u=A.x(A.a([new A.D(D.bEY,w,q),A.E(A.JY(v,new C.dh6(r),J.ad(r.d)+1,q,r.gcgt(),u,B.aL),1),r.bGK()],x.p),B.l,q,B.e,B.i,0,B.p)
w=u}v=x.p
return A.c4(q,D.Zx,new A.an(B.a0,q,B.b2,B.t,A.a([D.aQW,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c1u(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cJ(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.KW(B.ed,"AI",h.gbEC(),!0))
if(h.a.f)f.push(new C.KW(B.ml,"Cover",h.gbPk(),!1))
if(h.a.f)f.push(new C.KW(B.wV,"Header",h.gbKi(),!1))
if(J.cJ(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.KW(B.v_,"Print",h.gcpD(),!1))
if(h.a.f&&J.cJ(h.d)&&h.r>=0){v=h.w
u=v?B.hO:B.j9
t=v?"Save":"Edit"
f.push(new C.KW(u,t,v?h.gcvV():new C.dgR(h),!1))}if(h.a.f)f.push(new C.KW(B.i2,"Add page",h.gaOZ(),!1))
v=C.hCl(h.y.Q)
u=h.gz5(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.I)(f),++m){l=f[m]
if(l.d)k=D.dJN
else{k=new A.aN(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.ks.j(0.5),1,B.r,-1)
j=A.r(g,A.X(l.a,D.kQ,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bG(i,i,i,i),new A.be(k,k,k,k),g,new A.a8(B.a7,B.aa,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kQ.j(0.85)
p.push(new A.bz(1,B.bb,A.az(B.c3,A.x(A.a([k,B.bG,A.d(l.b,g,1,g,g,g,g,new A.F(!0,j,g,g,g,g,9.5,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.P,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.am9(v,u,t+" \xb7 "+s+" "+r,new C.dgS(h),A.A(p,B.l,g,B.e,B.i,0,g,g),g)},
Aq(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Aq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Br(),$async$Aq)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aT(t.d);r.C();){q=r.gR(r)
s.push(q.b+" "+q.c)}p=H.a3z(B.d.aN(s," "))
s=t.c
s.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.dgx(t,p),s,null,!0,!0,x.N),$async$Aq)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.z7(),$async$Aq)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Eh(),$async$Aq)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.FT("Swahili (Kiswahili)",!0),$async$Aq)
case 18:w=16
break
case 17:w=19
return A.b(t.cGN(o==="sw"?"Swahili (Kiswahili)":"English"),$async$Aq)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$Aq,v)},
ZS(d,e,f,g,h){var w=null,v=A.l(16),u=B.c.j(0.07),t=A.l(16),s=A.L(E.ks.j(0.3),B.r,1),r=x.p
return new A.D(B.cy,A.aP(!1,v,!0,A.r(w,A.A(A.a([A.r(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.x2,B.a6),w,42,w,w,w,w,w,42),B.bc,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A2.KS,w,w,w),A.d(g,w,w,w,w,w,w,B.AX,w,w,w)],r),B.E,w,B.e,B.i,0,B.p),1)],r),B.l,w,B.e,B.i,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bh,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dgT(d,h),w,w,w,w,w,w,w),w)},
Eh(){return this.bTV()},
bTV(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Eh=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dgK(r),a7,null,!0,!0,x.ei),$async$Eh)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eC("Working on it\u2026",$.ax())
a6.a=!0
a7=r.c
a7.toString
A.cg(null,null,!1,null,new C.dgL(o),a7,null,!0,!0,x.H).fv(new C.dgM(a6))
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
for(a1=0;a1<8;++a1){i=D.zW[a1]
J.c5(j,i.a)}w=8
return A.b(C.aii(a0,a7,new C.dgN(o),d,l,e,j),$async$Eh)
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
if(l!=null&&a6.a)A.a6(l,!0).eA()
l=o
l.sic($.ax())
J.aTh(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.L(x.q).f
j=n
l.T(A.b3(null,null,null,null,null,B.t,null,A.d(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcm(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.am(0,a4)){j=J.t(p,a4)
a7=m.b.h(0,a4).a
a7=j.bfw(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.BE(j.c,j.d,l),$async$Eh)
case 11:w=12
return A.b(r.lh(),$async$Eh)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.zW[a1].a)
a5=l.cLi(j,12,a7)
l=r.a
w=15
return A.b(C.SL(l.c,l.d,a5),$async$Eh)
case 15:if(r.c!=null)r.m(new C.dgO(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.BL(0,B.dK,B.n_)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.L(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.T(A.b3(a3?A.cAu("Undo",new C.dgP(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.ej,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Eh,v)},
FT(d,e){return this.cGO(d,e)},
cGN(d){return this.FT(d,!1)},
cGO(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$FT=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eC("Starting\u2026",$.ax())
f.a=!0
k=r.c
k.toString
A.cg(null,null,!1,null,new C.dh_(a0),k,null,!0,!0,x.H).fv(new C.dh0(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.I)(k),++i){n=k[i]
J.c5(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a3N(m,new C.dh1(a0)),$async$FT)
case 10:w=8
break
case 9:w=11
return A.b(C.bG5(new C.dh2(a0),m,a2),$async$FT)
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
if(o!=null&&f.a)A.a6(o,!0).eA()
o=a0
o.sic($.ax())
J.aTh(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.L(x.q).f
k=q
o.T(A.b3(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bfw(J.t(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.BE(k.c,k.d,o),$async$FT)
case 12:w=13
return A.b(r.lh(),$async$FT)
case 13:o=r.c
if(o==null){w=1
break}o=o.L(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a_(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.T(A.b3(A.cAu("Undo",new C.dh3(r,d),null),null,null,null,null,B.t,null,k,null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$FT,v)},
bGK(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dgy(v):u
r=A.aI(u,u,u,u,A.X(D.bRd,s?D.kQ:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cJ(v.d)&&!v.w&&v.r>=0)s=A.hs(A.X(B.wH,B.Gu,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.m(u,u,B.Gu,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbOV(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.m(u,u,D.kQ.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.as(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dgz(v):u
return A.bm(!0,new A.D(D.bEN,A.A(A.a([r,s,A.aI(u,u,u,u,A.X(B.eI,t<J.ad(v.d)?D.kQ:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.i,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a_M.prototype={
S(){return new C.bhg(new A.au(B.ax,$.ax()))}}
C.bhg.prototype={
ga2G(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.U$=$.ax()
w.P$=0
this.a3()},
gbSw(){switch(this.ga2G()){case"cover":var w=D.d9N
break
case"book":w=D.d55
break
default:w=D.dBp
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.l(26),n=E.ks.j(0.5),m=x.p,l=A.A(A.a([D.dJO,B.av,D.bKv,A.aI(p,p,p,p,B.lp,p,p,p,new C.diV(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.i,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jy(p,p,p,A.d("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.diW(q),q.ga2G()==="page",p,p,p,p))
if(q.a.d)k.push(A.jy(p,p,p,D.fZV,p,new C.diX(q),q.ga2G()==="book",p,p,p,p))
k.push(A.jy(p,p,p,D.fMz,p,new C.diY(q),q.ga2G()==="cover",p,p,p,p))
k=A.bX(B.bH,k,B.bt,p,6,8)
j=B.c.j(0.07)
j=A.aM(p,B.Z,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bA(p,new A.b6(4,A.l(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kk,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a5,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbSw(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.d(s,p,p,p,p,p,p,B.KP,p,p,p)
w.push(A.n3(p,B.c.j(0.08),r,B.ht,new C.diZ(q,s),p,p,p,p))}return A.eK(p,E.C2,A.cb(A.x(A.a([l,B.W,D.h2e,B.am,k,B.ae,j,B.T,A.bX(B.bH,w,B.bt,p,6,6),B.aB,A.dh(D.bVw,p,D.h3_,new C.dj_(q,d),A.bo(B.b8,p,p,p,p,B.p_,p,p,new A.b9(A.l(16),B.a1),p,p,p)),B.aw,D.fY8],m),B.E,p,B.e,B.P,0,B.p),B.t,p,B.y,p,B.fv,p,p,B.ah),p,p,p,B.Oq,B.da,p,new A.b9(o,new A.ay(n,1.4,B.r,-1)),p)}}
C.a_K.prototype={
S(){return new C.aBR(A.a([],x.gA))},
ge3(){return this.c}}
C.ag3.prototype={}
C.aBR.prototype={
Y(){this.a4()
this.lh()},
lh(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Sd(p.c,p.d),$async$lh)
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
return A.b(C.bEA(r.c,q),$async$lh)
case 6:j=e
i=J
w=7
return A.b(C.LQ(t.a.c,q),$async$lh)
case 7:m.push(new l.ag3(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.dhn(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lh,v)},
baN(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
QS(d,e){return this.ci2(0,e)},
ci2(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$QS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).ce(A.ec(new C.dhm(u,e),!0,null,x.y)),$async$QS)
case 2:t=g
w=3
return A.b(u.lh(),$async$QS)
case 3:if(t===!0&&u.c!=null)u.c.L(x.q).f.T(D.aUP)
return A.h(null,v)}})
return A.i($async$QS,v)},
FV(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$FV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.L(x.q).f.T(D.aUL)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ahC(s.c,s.d),$async$FV)
case 5:q=e
w=6
return A.b(t.lh(),$async$FV)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.QS(0,B.d.fc(t.d,new C.dhr(q))),$async$FV)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.S8(p,s.f,r,n,o),$async$FV)
case 10:m=e
w=11
return A.b(t.lh(),$async$FV)
case 11:if(m&&t.c!=null)t.c.L(x.q).f.T(D.aUP)
case 1:return A.h(u,v)}})
return A.i($async$FV,v)},
Qj(d,e){return this.ctE(0,e)},
ctE(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dhq(t,e),s,null,!0,!0,x.y),$async$Qj)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a4_(s.c,s.d,e.a),$async$Qj)
case 4:w=5
return A.b(t.lh(),$async$Qj)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qj,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)k.push(o.bGN(w[u]))
if(m){t=6-o.d.length
w=A.l(18)
v=B.c.j(0.05)
s=A.L(E.ks.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.az(n,new A.fJ(0.7142857142857143,A.r(n,A.x(A.a([D.dJP,B.ae,D.eub,B.aw,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.m(n,n,D.kQ.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.ba,B.i,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcKf(),n,n,n,n,n,n,!1,B.a4))}w=A.l(22)
v=A.L(E.ks.j(0.85),B.r,1.6)
s=A.az(n,A.r(n,D.c2v,B.f,n,n,new A.o(B.w.j(0.3),n,A.L(E.ks.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dhs(d),n,n,n,n,n,n,!1,B.a4)
r=A.l(14)
q=B.w.j(0.3)
p=A.L(E.ks.j(0.5),B.r,1)
w=A.r(n,A.A(A.a([s,B.bc,D.bKU,A.r(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.fs0,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.hi,n,n,n)],l),B.l,n,B.e,B.i,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.c8w,B.n),n,n,n,Av.Oe,D.bCG,n,n,n)
if(o.e)k=D.afN
else k=k.length===0?D.bdt:A.cr(new C.dht(k))
return A.c4(n,D.Zx,new A.an(B.a0,n,B.b2,B.t,A.a([D.aQW,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bGN(d){var w,v,u=this,t=null,s=u.baN(d),r=d.c,q=x.p,p=A.a([A.bS(0,A.ex(B.A,new A.a5(300,420,new C.a__(d.b,s,r,t),t),B.f,B.dE),0,0,0)],q)
if(u.a.e)p.push(A.ap(t,A.az(t,A.r(t,D.c1O,B.f,t,t,new A.o(B.w.j(0.55),t,A.L(B.aT,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dhk(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.frD,t,t,t)
v=r===1?"page":"pages"
return A.az(t,A.x(A.a([new A.fJ(0.7142857142857143,new A.an(B.a0,t,B.ad,B.t,p,t),t),B.T,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.m(t,t,D.kQ.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.i,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dhl(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.KW.prototype={}
C.a__.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dL(D.zW,new C.cPH(m),new C.cPI()),j=m.c,i=D.DT.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.ms:B.ba
v=new C.cPJ(h)
i=A.a([new A.ab(0,B.G,B.w.j(0.6),D.eqT,28)],x.V)
u=x.p
t=A.a([A.bS(0,A.b2(l,l,l,new C.bet(j.x,h,l),B.az),0,0,0),A.ap(0,A.r(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.a7,B.aa,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aN(3,3)
t.push(new A.cK(8,40+s*46,l,l,l,l,A.r(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.be(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.u(t,A.a([v.$4(D.anq,8,0.85,2.2),v.$4(D.bHF,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.anq,8,0.85,2.4))
else if(r==="corners")t.push(A.bS(0,new A.D(D.bHB,A.b2(l,l,l,new C.bek(h,l),B.az),l),0,0,0))
r=A.X(D.aCj[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.m(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.azu,l,l),B.K,l,l)
p=A.r(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.ae,p,B.ae,A.d(o,l,l,l,l,l,l,A.m(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cK,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.u(o,A.a([B.aO,A.d(r,l,2,B.a2,l,l,l,A.m(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.I,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bS(0,new A.D(D.bI6,A.x(o,B.l,l,w,B.i,0,B.p),l),0,0,0))
if(j.z)t.push(A.ap(l,A.b2(l,l,l,new C.aIR(l),D.fh2),l,l,l,46,0,l))
return A.r(l,A.bx(D.aep,new A.an(B.a0,l,B.ad,B.t,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.aep,i,new A.a8(B.aA,B.aE,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bet.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e2()
g.cY(11)
switch(this.b){case"plain":return
case"linen":$.S()
w=A.K()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=0;t<v;t+=4)d.ah(new A.p(0,t),new A.p(u,t),w)
$.S()
s=A.K()
s.r=B.c.j(0.05).gp(0)
s.c=1
for(r=0;r<u;r+=4)d.ah(new A.p(r,0),new A.p(r,v),s)
break
case"stars":for(v=e.a,u=e.b,q=this.c,p=0;p<70;++p){o=g.ai()
n=g.ai()
m=g.ai()
$.S()
l=new A.ao(B.O,B.M,B.R,B.S,B.Q)
l.r=q.j(0.25+g.ai()*0.5).gp(0)
d.N(new A.p(o*v,n*u),0.6+m*1.6,l)}break
case"rays":v=e.a*0.55
u=e.b
q=u*0.1
for(o=this.c,n=x.v,p=0;p<14;++p){k=0.47123889803846897+p*0.1691626813471427
m=$.S()
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
m=new A.bu()
l.push(m)
l=j.f
if(l!=null)m.ak(l)
j.ab()
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=o.j((p&1)===0?0.09:0.03).gp(0)
d.af(j,m)}break
default:$.S()
w=A.K()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,p=0;p<260;++p)d.N(new A.p(g.ai()*v,g.ai()*u),0.8+g.ai()*1.8,w)
$.S()
h=A.K()
h.r=B.c.j(0.035).gp(0)
for(p=0;p<120;++p)d.N(new A.p(g.ai()*v,g.ai()*u),0.6+g.ai()*1.2,h)}},
aE(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bek.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.S(),j=A.K(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.a9
j.c=2.4
j.d=B.bw
for(w=e.a,v=e.b,v=[D.f6s,new A.ce([w,0,-1,1]),new A.ce([0,v,1,-1]),new A.ce([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
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
d.N(new A.p(r+p*9,q+o*9),3,s)}},
aE(d){return!d.b.A(0,this.b)}}
C.uX.prototype={}
C.a_i.prototype={
S(){return new C.ber()}}
C.ber.prototype={
gor(){var w=this.d
return w===$?this.d=this.a.c:w},
gz5(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.ba(w.b,B.b5,B.aP),$.ax())}return v},
gaDd(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.ba(w.c,B.b5,B.aP),$.ax())}return v},
gasQ(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.ba(w.y,B.b5,B.aP),$.ax())}return v},
t(){var w=this,v=w.gz5(0),u=v.U$=$.ax()
v.P$=0
v=w.gaDd()
v.U$=u
v.P$=0
v=w.gasQ()
v.U$=u
v.P$=0
w.a3()},
att(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jy(s,s,s,A.d(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.d8k(this,f,u),e===u,s,s,s,s))}return A.bX(B.bH,r,B.bt,s,6,8)},
azd(d){var w=null,v=B.c.j(0.07)
return A.bA(w,new A.b6(4,A.l(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lW,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gor(),a0=f.gz5(0),a1=a0.a.a,a2=f.gaDd(),a3=a2.a.a,a4=f.gasQ(),a5=d.bfu(a4.a.a,a3,a1)
a1=x.w
a3=A.aF(a6,e,a1).w
a1=A.aF(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.as(new A.a5(190,260,A.ex(B.A,new A.a5(270,370,new C.a__(a5,d,f.a.e,e),e),B.f,B.dE),e),e,e,e)
a0=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.azd("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d8J(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a5,e,B.ao,e,e,e,e)
a2=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.azd("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d8K(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a5,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.zW[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aT
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.r(e,e,B.f,e,e,new A.o(e,e,new A.bG(o,o,o,o),e,e,new A.a8(B.aA,B.aE,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aD
v.push(A.az(e,A.x(A.a([p,B.cQ,A.d(t.b,e,e,e,e,e,e,new A.F(!0,q,e,e,e,e,10.5,B.U,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8L(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bX(B.bH,v,B.bt,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b8.j(0.35):B.c.j(0.07)
m=new A.aN(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eK:B.L,2,B.r,-1)
q.push(A.az(e,A.r(e,A.X(D.aCj[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bG(o,o,o,o),new A.be(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8M(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bX(B.bH,q,B.bt,e,8,8)
a4=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.azd("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d8N(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a5,e,B.ao,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,M.vL,e,e,e)
m=A.a([],w)
for(l=D.DT.gdP(D.DT),l=l.gae(l);l.C();){k=l.gR(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eK:B.aT
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.r(e,e,B.f,e,e,new A.o(j,e,new A.bG(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aD
m.push(A.az(e,A.x(A.a([j,B.bG,A.d(i,e,e,e,e,e,e,new A.F(!0,h,e,e,e,e,10,B.U,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8O(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bX(B.bH,m,B.bt,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,M.vL,e,e,e)
k=f.gor()
return new A.D(new A.R(0,0,0,a3.f.d),A.bm(!0,new A.cP(new A.aY(0,1/0,0,a1.a.b*0.92),A.cm(A.a([D.fXz,B.ae,d,B.aO,a0,B.W,a2,B.aB,D.h2M,B.T,v,B.aB,D.fXI,B.T,q,B.aB,a4,B.aB,p,B.T,m,B.aB,l,A.l_(e,9,""+B.j.V(f.gor().f),36,18,new C.d8P(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,M.vL,e,e,e),B.am,f.att(D.a7_,f.gor().r,new C.d8Q(f),D.dED),B.ae,A.d("BORDER",e,e,e,e,e,e,M.vL,e,e,e),B.am,f.att(D.a6j,f.gor().w,new C.d8R(f),D.dEJ),B.ae,A.d("COVER MATERIAL",e,e,e,e,e,e,M.vL,e,e,e),B.am,f.att(D.a6f,f.gor().x,new C.d8T(f),D.dGc),B.am,A.iU(e,B.b8,e,B.ag,e,new C.d8U(f),e,e,e,D.fRJ,f.gor().z),B.bA,A.bJ(D.fWf,e,new C.d8V(f,a6),A.bo(B.b8,e,e,e,e,B.p_,e,e,new A.b9(A.l(16),B.a1),e,e,e))],w),e,e,Z.amV,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aIR.prototype={
a5(d,e){var w,v,u,t=new A.aG($.S().r,B.ai,null,null,A.a([],x.v))
t.E(new A.aZ(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.bu())
u=A.K()
u.sav(D.c9c.aK(0,new A.a1(0,0,0+w,0+v)))
d.af(t,u)},
aE(d){return!1}}
C.bjN.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.S()
w=A.K()
w.sav(D.c8d.aK(0,new A.a1(0,0,a2,a3)))
a4.ar(new A.a1(0,0,a2,a3),w)
v=B.j.cC(a1/112)
u=new A.e2()
u.cY(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.d9M[u.az(9)]
j=u.az(14)
J.bp(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a1(n,j,n+m,j+l)
h=A.bn(i,B.hE)
g=new A.ao(B.O,B.M,B.R,B.S,B.Q)
f=A.ar(k,B.c,0.12)
f.toString
e=A.ar(k,B.w,0.45)
e.toString
g.sav(new A.a8(B.a7,B.aa,B.x,A.a([f,k,e],w),d,d).aK(0,i))
a4.an(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ao(B.O,B.M,B.R,B.S,B.Q)
e.r=E.ks.j(0.55).gp(0)
a4.ar(new A.a1(g,j,h,j+2),e)
e=new A.ao(B.O,B.M,B.R,B.S,B.Q)
e.r=E.ks.j(0.4).gp(0)
a4.ar(new A.a1(g,q,h,p),e)
t.restore()
j=u.az(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.sav(D.c7x.aK(0,new A.a1(0,r,a2,q)))
a4.ar(new A.a1(0,r,a2,q),p)
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=B.w.j(0.5).gp(0)
p.y=B.kV
a4.ar(new A.a1(0,q,a2,q+14),p)}t=A.K()
t.r=D.bhf.j(0.72).gp(0)
a4.ar(new A.a1(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.K()
a3.sav(new A.bY(B.A,0.5,B.x,d,0,A.a([D.bpv.j(0.22),B.L],w),d,d).aK(0,A.bZ(new A.p(t,a1),a0)))
a4.N(new A.p(t,a1),a0,a3)},
aE(d){return!1}}
C.bcB.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cK(14,w*2,v*2.2,v*2,o,o,new A.bN(new A.o(A.ar(D.kQ,D.buF,w/4),o,new A.bG(B.a1,new A.ay(B.w.j(0.12),1,B.r,-1),B.a1,B.a1),B.M1,o,o,B.n),B.bk,o,o),o))}v=x.V
u=A.a([new A.ab(0,B.G,B.w.j(0.35),B.aMx,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aN(2,2)
t.push(A.r(o,o,B.f,o,o,new A.o(E.ks.j(0.6),o,o,new A.be(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.r(o,A.x(t,B.l,o,B.qZ,B.i,0,B.p),B.f,o,o,new A.o(o,o,o,D.b5u,u,D.c9a,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ab(0,B.G,B.w.j(0.4),B.dp,18)],v)
t=A.ap(o,A.b2(o,o,o,new C.aIR(o),D.fgY),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aWK(p.y,r,L.j4,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bA(o,B.eO,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,L.j4.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fGB,!0,B.a5,o,B.ao,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.m(o,o,L.j4.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.W,A.E(A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bA(o,B.eO,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,L.j4.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fx0,!0,B.a5,B.AQ,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fGt,o,o,o),B.aw,A.d(q.$1(r),o,o,o,o,o,o,A.m(o,o,L.j4.j(0.5),o,o,o,o,o,o,o,o,11,B.cK,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.T,A.A(A.a([A.E(A.r(o,o,B.f,D.Gc.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fM,A.d("\u2766",o,o,o,o,o,o,A.m(o,o,D.Gc.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.r(o,o,B.f,D.Gc.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.i,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.m(o,o,L.j4.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Ze(A.cQ(A.a([A.cQ(o,o,o,o,o,o,o,o,o,D.fAg,B.a.aB(k,0,1)),A.cQ(o,o,o,o,o,o,o,o,o,o,B.a.b2(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.m(o,o,L.j4.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cb(A.x(n,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.i0,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.m(o,o,L.j4.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.r(o,A.bx(B.M1,new A.an(B.a0,o,B.ad,B.t,A.a([t,new A.D(D.bH7,A.x(s,B.al,o,B.e,B.i,0,B.p),o),A.ap(0,new A.bN(new A.o(o,o,o,o,o,new A.a8(B.a7,B.aa,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bk,o,o),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.M1,v,D.c9I,B.n),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,o,o))
return new A.an(B.a0,o,B.ad,B.t,l,o)}}
C.ama.prototype={
S(){return new C.amb(new A.eC(0,$.ax()),new C.bTA(),new C.amt(),D.hFF,null,null)},
gd1(){return this.d}}
C.a1Y.prototype={
a7(){return"_Step."+this.b}}
C.amb.prototype={
gCy(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEw(w.c,6,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.Na(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gTX(){var w=this.ghb(0)
return w.gzq()==null?"Babu":B.a.i(w.gzq().b)},
Y(){var w,v=this
v.a4()
w=v.ghb(0).gzq()
w=w==null?null:w.c
v.r.b=w===D.ox
w=v.q1(new C.bRW(v))
w.fX(0)
v.x!==$&&A.aQ()
v.x=w
v.a2D("Come closer, my children. I am "+v.gTX()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
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
v.P$=0
w.bw9()},
a2D(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.dg(D.alw,new C.bRQ(w))},
bsw(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.m(new C.bRZ(v))},
adY(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bso(){return this.bak()},
bak(){var w=this,v=w.gCy()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bRR(w))
w.a2D(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cy(B.mb,new C.bRS(w))},
cLp(){var w=this
w.m(new C.bRV(w))
w.a2D(w.gCy()[w.as].a)},
L7(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.adu)return
w=p.gCy()
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
t.r=s.a+1.5}q=new A.e2()
q.cY(v*7+d)
p.m(new C.bRU(p,d,u,q))
p.a2D(u?D.dpI[q.az(4)]+" "+w[p.as].d:D.dmg[q.az(3)]+" "+w[p.as].d)},
kO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCy()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bGM(t.at,t.ay,p)
t.m(new C.bRX(t,s))
t.a2D(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.BX(t.a.d,s),$async$kO)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.BY(r.d,r.c.a,"fire",t.at*10),$async$kO)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bRY())
w=1
break
case 4:++t.as
t.bak()
case 1:return A.h(u,v)}})
return A.i($async$kO,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c4(v,D.YA,new A.an(B.a0,v,B.ad,B.t,A.a([A.bS(0,new A.eo(A.b2(v,v,v,new C.aWP(u,w.r,w.w,u),B.az),v),0,0,0),A.bm(!0,A.x(A.a([w.cc4(0),B.b1,w.bRG()],t),B.l,v,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
cc4(d){var w,v,u,t=this,s=null,r=A.aI(s,s,s,s,B.Qa,s,s,s,new C.bRT(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCy().length;++w){v=t.as
if(w<v||t.Q===D.b1N)v=B.cS
else v=w===v?B.c:B.aT
u=new A.aN(4,4)
p.push(A.r(s,s,B.f,s,s,new A.o(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,D.bCp,s,s,s,22))}p=A.E(A.x(A.a([D.fOr,A.A(p,B.l,s,B.e,B.i,0,s,s)],q),B.E,s,B.e,B.i,0,B.p),1)
v=A.l(14)
u=A.L(B.fs,B.r,1)
return new A.D(D.bIj,A.A(A.a([r,p,A.r(s,A.d("\ud83d\udd25 "+B.j.V(t.cy*100)+"%",s,s,s,s,s,s,B.iG,s,s,s),B.f,s,s,new A.o(B.b6,s,u,v,s,s,B.n),s,s,s,s,B.hi,s,s,s)],q),B.l,s,B.e,B.i,0,s,s),s)},
bRG(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghb(0).gzq()
if(h==null)w=1
else w=h.c===D.ox?0:1
v=j.dx
u=j.db
t=D.qo.j(0.96)
s=A.l(22)
r=A.L(B.cS,B.r,3)
q=A.b2(i,i,i,new C.bpp(w,i),B.az)
p=A.d(j.Q===D.adu?j.gTX()+" asks":"Elder "+j.gTX(),i,i,i,i,i,i,D.aW2,i,i,i)
o=j.db
o=B.a.aB(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.az(B.c3,A.A(A.a([new A.a5(62,62,q,i),B.av,A.E(A.x(A.a([p,B.bG,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aWg,i,i,i)],n),B.E,i,B.e,B.i,0,B.p),1)],n),B.E,i,B.e,B.i,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbsv(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.as(j.aa4("Sit down by the fire",j.gbsn()),i,i,i)
break
case 1:v=A.as(j.aa4("Ask me, Elder",j.gcLo()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCy()[j.as].b,m<u.length;++m){q=new A.aN(14,14)
l=new A.ay(D.lB,2.5,B.r,-1)
v.push(A.az(i,A.r(i,A.d(u[m],i,i,i,i,i,i,D.aWc,B.K,i,i),B.f,i,D.af1,new A.o(D.akw,i,new A.bG(l,l,l,l),new A.be(q,q,q,q),i,i,B.n),i,i,i,i,U.wu,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bRN(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bX(B.bH,v,B.bt,i,8,8)
break
case 3:v=j.fr
u=v?B.k8:Aj.aqq
u=A.X(u,v?B.er:D.lB,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.m(i,i,v?B.er:D.lB,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCy().length?"Finish":"Next story"
v=A.A(A.a([u,B.af,q,j.aa4(v,j.gqo(j))],n),B.l,i,B.e,B.i,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gCy().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aWv,i,i,i)],n)
u=j.cx
if(u>0){u=C.aR6(u)
q=C.aR6(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.abW,i,i,i))}v.push(B.T)
v.push(j.aa4("Back to the games",new C.bRO(j)))
v=A.x(v,B.l,i,B.e,B.i,0,B.p)
break
default:v=i}return A.r(i,A.x(A.a([o,B.W,v],n),B.E,i,B.e,B.P,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.aDT,i,B.n),i,i,i,B.yJ,B.bh,i,i,i)},
aa4(d,e){var w=null,v=A.l(16),u=A.L(B.cS,B.r,2)
return A.az(w,A.r(w,A.d(d,w,w,w,w,w,w,A2.KS,w,w,w),B.f,w,w,new A.o(D.lB,w,u,v,w,w,B.n),w,w,w,w,D.bG0,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bpp.prototype={
a5(d,e){X.fX7(d,e.ei(B.J),e.gdA()*0.45,this.b,0,0.4)},
aE(d){return d.b!==this.b}}
C.aBP.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bTA.prototype={}
C.ti.prototype={}
C.bpq.prototype={}
C.amt.prototype={
Mz(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.ie9(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aWP.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.zp(l.d.Mz(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.bp(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bU(0,u)
l.cAT(d,j)
l.bQe(d,j)
l.cJa(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.bp(t.save())
t.translate(225,580)
d.pl(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.S()
q=A.K()
p=x.O
o=x.n
q.sav(A.wh(B.J,r,A.a([D.btp.j(0.55*s),F.Nv.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.N(B.J,r,q)
t.restore()
n=A.a([new A.y(528,new C.bTs(l,d,j,i)),new A.y(540,new C.bTt(l,d,j,i)),new A.y(546,new C.bTu(l,d,j,i)),new A.y(574,new C.bTv(l,d,j,i)),new A.y(612,new C.bTw(l,d,j,i)),new A.y(650,new C.bTx(l,d,j,i)),new A.y(656,new C.bTy(l,d,j,i))],x.E)
B.d.aZ(n,new C.bTz())
for(m=0;m<7;++m)n[m].b.$0()
l.bH5(d,j,i)
l.bTT(d,j)
t.restore()
$.S()
t=A.K()
t.sav(A.wh(new A.p(w/2,v*0.6),e.gaoe()*0.75,A.a([B.L,D.bh9],p),A.a([0.55,1],o),B.x,k,k,0))
d.ar(new A.a1(0,0,0+w,0+v),t)},
aE(d){return d.c!==this.c||d.d!==this.d},
cAT(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e2()
h.cY(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.S()
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.r=t.gp(0)
d.N(new A.p(v*450,20+u*300),0.8+s*1.1,r)}q=B.j.F(e,17)/1.2
if(q<1){p=new A.p(60+q*220,70+q*90)
d.ah(p,p.aJ(0,D.eqq),C.iz(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.j.F(v+o*0.05,1)
s=-20+n*500
r=120+Math.sin(n*9+o)*14+o*12
m=Math.sin(u+o*2)
l=$.S()
k=A.a([],t)
l=new A.aG(l.r,B.ai,null,null,k)
m=r+m*4
k.push(new A.aZ(s-6,m))
l.ab()
j=r-3
r=new A.c7(s-2,j,s,r)
k.push(r)
i=l.f
if(i!=null)r.ak(i)
l.ab()
s=new A.c7(s+2,j,s+6,m)
k.push(s)
r=l.f
if(r!=null)s.ak(r)
l.ab()
s=new A.ao(B.O,B.M,B.R,B.S,B.Q)
s.b=B.a9
s.c=1.6
s.r=D.bjR.gp(0)
s.d=B.bw
s.e=B.dT
d.af(l,s)}},
bQe(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aAN[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bs(new A.p(p,m),n*0.74,q*0.5)
k=Aa.yv.j(v)
$.S()
j=new A.ao(B.O,B.M,B.R,B.S,B.Q)
j.r=k.gp(0)
d.bZ(l,j)
q=A.bs(new A.p(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=B.w7.j(u).gp(0)
d.bZ(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.j.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ao(B.O,B.M,B.R,B.S,B.Q)
o.r=D.ahR.j(0.16*(1-h)).gp(0)
d.N(new A.p(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cJa(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bDV(d,D.eqm,0.9,e,D.hAZ,!1,!1,D.b1K,1,!1)
w=$.S().r
v=x.v
u=new A.aG(w,B.ai,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bu())
t=A.K()
t.r=D.ajP.gp(0)
d.af(u,t)
C.bDV(d,D.eqo,0.95,e,D.hAU,!1,!1,D.b1L,1,!0)
t=new A.aG(w,B.ai,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.c7(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.c7(431,553,421,548))
t.E(new A.bu())
u=A.K()
u.r=F.FU.gp(0)
d.af(t,u)
u=A.bs(D.eqn,8,28)
t=A.K()
t.r=D.bvK.gp(0)
d.bZ(u,t)
C.bDV(d,new A.p(-30+B.j.F(e/26,1)*510,492),0.82,e,D.hB_,!0,!1,D.Xn,1,!1)
t=B.j.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.bZ(A.bs(new A.p(s+q*16,r-6),16,11),C.iz(D.ajG,1.8))
u=q<0
C.bDV(d,new A.p(s-q*6,r),0.62,e,D.hB1,!1,u,D.Xn,2.2,!1)
C.bDV(d,new A.p(s-q*32,r+4),0.58,e+1,D.hAY,!1,u,D.Xn,2.2,!1)
this.bWC(d,D.eq1,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bs(new A.p(o,n),8,11)
k=p===1
j=k?D.ajC:D.ake
i=new A.ao(B.O,B.M,B.R,B.S,B.Q)
i.r=j.gp(0)
d.bZ(l,i)
l=k?D.ajC:D.ake
k=new A.ao(B.O,B.M,B.R,B.S,B.Q)
k.r=l.gp(0)
d.N(new A.p(o+5,n+(-3+m)),2.6,k)
k=new A.ao(B.O,B.M,B.R,B.S,B.Q)
k.b=B.a9
k.c=1
k.r=B.au.gp(0)
k.d=B.bw
k.e=B.dT
d.ah(new A.p(o+7.5,n+(-2+m)),new A.p(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ao(B.O,B.M,B.R,B.S,B.Q)
k.b=B.a9
k.c=1
k.r=B.au.gp(0)
k.d=B.bw
k.e=B.dT
d.ah(new A.p(o,n+4),new A.p(o,n+8),k)}h=e<f.f
u=A.bs(D.a9_,15+Math.sin(e*2)*0.8,40)
t=A.K()
t.r=D.aif.gp(0)
d.bZ(u,t)
u=A.bs(D.a9_.a2(0,new A.p(-14,h?-9:-2)),12,15)
t=A.K()
t.r=D.blX.gp(0)
d.bZ(u,t)
t=new A.aG(w,B.ai,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bu())
u=A.K()
u.r=D.bm6.gp(0)
d.af(t,u)
u=D.a9_.a2(0,new A.p(-17,h?-9:-2))
t=A.K()
t.r=B.ih.gp(0)
d.N(u,1.1,t)
v=new A.aG(w,B.ai,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.c7(180,588+w*(h?6:0),178,595))
d.af(v,C.iz(D.aif,3.5))},
bWC(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a2(0,new A.p(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.S()
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.b=B.a9
m.c=2
m.r=D.YM.gp(0)
m.d=B.bw
m.e=B.dT
d.ah(new A.p(u+o,s),new A.p(u+(o+n*1.5),q),m)}w=A.bs(k,17,32)
v=$.S()
r=A.K()
r.r=D.FS.gp(0)
d.bZ(w,r)
r=A.bs(k.a2(0,D.ept),7,26)
w=A.ar(D.FS,B.w,0.12)
w.toString
q=A.K()
q.r=w.gp(0)
d.bZ(r,q)
v=new A.aG(v.r,B.ai,null,null,A.a([],x.v))
v.E(new A.aZ(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.bu())
s=A.K()
s.r=D.FS.gp(0)
d.af(v,s)
s=A.bs(k.a2(0,new A.p(24,-7+l)),9,12)
v=A.K()
v.r=D.FS.gp(0)
d.bZ(s,v)
v=-11+l
d.ah(k.a2(0,new A.p(22,v)),k.a2(0,new A.p(21,-17+l)),C.iz(D.YM,1.6))
d.ah(k.a2(0,new A.p(26,v)),k.a2(0,new A.p(28,-16+l)),C.iz(D.YM,1.6))
v=k.a2(0,new A.p(26,-8+l))
s=A.K()
s.r=B.w.gp(0)
d.N(v,0.9,s)
d.ah(k.a2(0,new A.p(26,-3+l)),k.a2(0,new A.p(26,1+l)),C.iz(D.boO,1.4))
d.ah(k.a2(0,D.esq),k.a2(0,new A.p(-19,-7+Math.sin(f*7)*2)),C.iz(D.FS,2.4))},
bTR(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bs(new A.p(225+u*36,574+(t*13+6)),8,11)
$.S()
t=new A.ao(B.O,B.M,B.R,B.S,B.Q)
t.r=D.buo.gp(0)
a6.bZ(u,t)}}u=A.bs(D.a91.a2(0,B.cz),17,52)
$.S()
t=A.K()
t.r=D.bgH.gp(0)
a6.bZ(u,t)
t=A.bs(D.a91.a2(0,B.cz),12,44)
u=D.bkd.j(0.6+0.3*Math.sin(a7*6))
s=A.K()
s.r=u.gp(0)
a6.bZ(t,s)
for(r=0;r<3;++r){v=D.dlH[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ao(B.O,B.M,B.R,B.S,B.Q)
o.b=B.a9
o.c=7
o.r=D.G4.gp(0)
o.d=B.bw
o.e=B.dT
a6.ah(new A.p(u+t*24,579+s*4),new A.p(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.BL.j(0.6)
n=new A.ao(B.O,B.M,B.R,B.S,B.Q)
n.b=B.a9
n.c=2
n.r=t.gp(0)
n.d=B.bw
n.e=B.dT
a6.ah(new A.p(u+o*24,579+(p*4-2)),new A.p(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.f2x,D.f36,D.f4c,D.f4x,D.f4a]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.brN,D.bo9,D.btP][k]
for(p=l.length,o=k===0,n=1-k*0.15,r=0;r<p;++r){h=l[r]
g=h.b
f=h.c
e=m*g*j*(0.9+0.12*Math.sin(u+f)+0.06*Math.sin(t+f*2))
d=Math.sin(s+f)*5*(e/m)
a0=225+h.a*n
a1=(12+8*a8.w)*g*j
g=$.S()
f=A.a([],q)
a2=new A.aG(g.r,B.ai,null,null,f)
f.push(new A.aZ(a0-a1,578))
a2.ab()
g=a0+d*0.6
a3=new A.ko(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.ak(a4)
a2.ab()
g=new A.ko(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
f.push(g)
a3=a2.f
if(a3!=null)g.ak(a3)
a2.ab()
g=new A.bu()
f.push(g)
f=a2.f
if(f!=null)g.ak(f)
a2.ab()
g=new A.ao(B.O,B.M,B.R,B.S,B.Q)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.j.F(a7*(0.35+B.o.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.F(w,3)
p=G.akc.j((1-a5)*0.9)
$.S()
o=new A.ao(B.O,B.M,B.R,B.S,B.Q)
o.r=p.gp(0)
a6.N(new A.p(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.j.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.ahR.j(0.1*(1-a5))
$.S()
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=q.gp(0)
a6.N(new A.p(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bTT(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.j.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.bvU.j(0.18*p)
$.S()
n=new A.ao(B.O,B.M,B.R,B.S,B.Q)
n.r=o.gp(0)
d.N(new A.p(r,q),5,n)
n=new A.ao(B.O,B.M,B.R,B.S,B.Q)
n.r=D.bpA.j(0.9*p).gp(0)
d.N(new A.p(r,q),1.4,n)}},
c5C(d,e){switch(d){case 0:return e.b?D.hAV:D.b1i
case 1:return e.b?D.hB0:D.b1g
case 2:return D.b1f
case 3:return D.b1e
case 4:return D.b1h
default:return D.b1j}},
aDr(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
Rb(d,e,f,g){var w,v=this,u=D.a6r[e],t=v.c5C(e,g),s=new C.bpq(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a6r[e],l=e===0
m=B.j.D(((l?D.aMp:D.aMv).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a96
s.as=D.Ej
if(l){s.a=o?v.aDr(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.p(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.p(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.Ej
if(g.a===3&&!g.d)s.e=m+Math.sin(r*6)*0.35*Math.max(0,1-r/1.8)
if(q){s.a=0.5
s.b=1
p=f*9
s.Q=new A.p(-4-Math.max(0,Math.sin(p))*7,-58)
p=s.as=new A.p(4+Math.max(0,Math.sin(p))*7,-58)}if(!q)p=!(o&&p.b<-50)
else p=!1
s.at=p}else if(e===1){s.b=0.35
if(o)s.r=Math.sin(f*2.4+1)*1.6
if(q){s.b=1
s.a=0.35+0.35*Math.max(0,Math.sin(f*13))
s.d=0.7
p=f*8
s.Q=new A.p(-4-Math.max(0,Math.sin(p))*7,-56)
s.as=new A.p(4+Math.max(0,Math.sin(p))*7,-56)
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.epB
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.eqX
if(e===4)s.as=new A.p(36,-128+Math.sin(f*5)*4)}if(q){s.b=1
s.a=0.45+0.4*Math.max(0,Math.sin(f*12+e))
s.d=0.5
p=Math.max(0,Math.sin(f*9+e*1.3))*9
s.x=p
m=Math.max(0,Math.sin(f*10+e))*8
p=-56-p*0.3
s.Q=new A.p(-3-m,p)
s.as=new A.p(3+m,p)}else if(f<p){s.a=0.55
s.b=-0.1
s.c=1
s.Q=D.etm
s.as=D.aMI}if(e===2&&g.x!=null&&f<g.y){s.a=v.aDr(f,5)
s.b=0.4
s.as=new A.p(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aDr(f,e*3)
s.b=0.5
s.c=0.4}}C.hAX(d,u.a,u.b*1.2,t,s,f,e,null)},
bH5(d,e,f){var w=new C.bTr(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd6(d){return this.c}}
C.agc.prototype={
a7(){return"_Stand."+this.b}}
C.aea.prototype={}
C.lt.prototype={}
C.bSb.prototype={
bBH(d){var w,v,u,t,s=A.T(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
Ga(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.aZ(r,new C.bSc())
return r},
aru(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aN8(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
amD(d){var w,v,u=A.aR(x.N),t=d,s=0
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
B.d.aZ(w,new C.bSd(this))
return B.d.gH(w)}}
C.aut.prototype={}
C.zI.prototype={}
C.al4.prototype={
gC4(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Y(w,new C.bN_(),A.U(w).k("Y<1>")).gJ(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
aj(){var w=this
return A.J(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.MV.prototype={
gapw(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(t.gC4(0))s.push(t)}return s},
aj(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
p.push(A.J(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.J(["id",this.a,"title",q,"qs",p],u,t)},
d1E(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gapw(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.I)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lt(B.a.i(s.a),p,B.d.co(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.baP.prototype={}
C.aae.prototype={}
C.bi6.prototype={}
C.aga.prototype={}
C.akn.prototype={
S(){return new C.ako(B.bF,A.a([],x.cC),A.a([],x.e4),null,null)},
gd1(){return this.d}}
C.ako.prototype={
gMQ(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEw(w.c,8,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gbaG(){var w,v=this,u=v.e
if(u===$){w=v.q1(v.gcc6())
v.e!==$&&A.bE()
v.e=w
u=w}return u},
Y(){this.a4()
this.gbaG().fX(0)},
t(){this.gbaG().t()
this.bw4()},
fX(d){this.m(new C.bL9(this))},
cc7(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fH(0,v)
if(w.c!=null)w.m(new C.bL4())},
b91(){var w,v,u,t=this,s=t.r
B.d.a8(s)
w=t.gMQ()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bi6(u,(u+0.5)/v,w[t.x].b[u]))},
fH(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bq(w,new C.bLa())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c8s()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gMQ()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.j.V((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.at1(v,0.8,B.cS)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.at1(m.cy,0.8,G.nq)
m.aZF("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.at1(q,0.88,D.lB)
p=m.gMQ()[m.x]
n=p.c
if(u===n){m.aZF("The right gourd fell! It was "+p.b[n]+".")
return}}}},
at1(d,e,f){var w,v,u,t=new A.e2()
t.cY(B.j.V(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.aga(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
aZF(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.Qk()}},
c8s(){var w=this
if(w.x+1>=w.gMQ().length){w.Qk()
return}++w.x
w.b91()},
Qk(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Qk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gMQ().length
r=C.bGM(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bL2())
w=2
return A.b(C.BX(u.a.d,r),$async$Qk)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.BY(t.d,t.c.a,"catch",u.z),$async$Qk)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bL3())
return A.h(null,v)}})
return A.i($async$Qk,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.cc5()
else w=v.ch?v.cc8():A.as(new A.D(B.ey,A.x(A.a([D.aXu,B.T,D.fQ8,B.W,D.fWk,B.e3,C.uA("Play",v.geY(v),B.cS,B.hn,D.fC)],x.p),B.l,u,B.e,B.P,0,B.p),u),u,u,u)
return new C.tJ("Calabash Catch",w,B.f7,u)},
cc8(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hP:B.HC
p.push(A.X(u,v?B.ay:B.bW,r,r,r,22))}p.push(B.b1)
v=s.x
u=s.gMQ()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aW1,r,r,r))
p.push(B.bc)
v=A.l(14)
p.push(A.r(r,A.d(""+s.z,r,r,r,r,r,r,B.iG,r,r,r),B.f,r,r,new A.o(B.by,r,r,v,r,r,B.n),r,r,r,r,B.Cq,r,r,r))
p=A.A(p,B.l,r,B.e,B.i,0,r,r)
v=A.l(18)
t=A.L(B.cS,B.r,3)
return A.x(A.a([new A.D(D.bDO,p,r),A.r(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fA8,B.K,r,r),B.f,r,r,new A.o(D.qo,r,t,v,r,r,B.n),r,r,r,B.f5,B.bh,r,r,1/0),B.am,A.E(A.cr(new C.bL8(s)),1)],q),B.l,r,B.e,B.i,0,B.p)},
cc5(){var w=this,v=null,u=A.as(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.pZ,v,v,v),v,v,v),t=A.as(A.d(""+w.Q+" of "+w.gMQ().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.VH,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cm(A.a([D.bea,u,t,B.aO,new C.IB(s,r,w.cx,v),B.aO,A.as(C.uA("Back to the games",new C.bL1(w),B.cS,B.k7,D.fC),v,v,v)],x.p),v,v,B.ac,v,v,B.ah,!1)}}
C.bdg.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.S(),a3=A.K()
a3.sav(A.jB(B.J,new A.p(0,a0),D.d3E,G.aB5,B.x,e))
a4.ar(new A.a1(0,0,a1,0+a0),a3)
a3=A.K()
a3.r=G.Nz.gp(0)
a4.N(new A.p(d*0.82,a0*0.16),22,a3)
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
a2=$.S()
w=A.K()
w.r=D.blb.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aG(a2.r,B.ai,e,e,A.a([],a3))
w=a0*0.86
a2.E(new A.aZ(r-26,w))
t=a0*0.5
s=a0*0.34
a2.E(new A.c7(r-14,t,r-10,s))
a2.E(new A.aq(r+10,s))
a2.E(new A.c7(r+14,t,r+26,w))
a2.E(new A.bu())
w=A.K()
w.r=D.agT.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.cp8[q]
s=new A.ao(B.O,B.M,B.R,B.S,B.Q)
s.r=D.agT.gp(0)
s.c=7
s.d=B.bw
a4.ah(new A.p(r,a2),new A.p(r+p*46,w),s)
s=new A.ao(B.O,B.M,B.R,B.S,B.Q)
s.r=D.agd.gp(0)
a4.N(new A.p(r+p*50,t),18,s)}a2=a0*0.88
w=A.K()
w.r=D.bm4.gp(0)
a4.ar(new A.a1(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ao(B.O,B.M,B.R,B.S,B.Q)
t.r=D.aix.gp(0)
t.c=2
a4.ah(new A.p(w,a1),new A.p(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.I)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.bs(new A.p(u,s),12,54)
$.S()
l=new A.ao(B.O,B.M,B.R,B.S,B.Q)
l.r=D.lB.j(0.6).gp(0)
a4.bZ(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.bp(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.S()
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=D.ahB.gp(0)
a4.N(D.eoQ,14,m)
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=D.bqP.gp(0)
m.c=4
m.d=B.bw
a4.ah(D.eoR,D.epY,m)
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.sav(new A.alW(D.es7,46,D.dcf,B.A0,B.x,e,e,0))
a4.N(B.J,34,m)
m=A.bs(D.ese,8,12)
l=new A.ao(B.O,B.M,B.R,B.S,B.Q)
l.r=B.c.j(0.35).gp(0)
a4.bZ(m,l)
k=new A.iK(new A.ep(n.c,e,e,B.cN,e,e,e,e,e,e,D.fxW),B.K,B.bX,new A.jj(1),e,e,3,e,B.bY,e,B.ct)
k.o8(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bn(A.bs(B.cL,m.gba(m)+8,l),B.fQ)
l=new A.ao(B.O,B.M,B.R,B.S,B.Q)
l.r=D.qo.gp(0)
a4.an(j,l)
l=new A.ao(B.O,B.M,B.R,B.S,B.Q)
l.r=D.lB.gp(0)
l.b=B.a9
l.c=1.5
a4.an(j,l)
l=k.b
m=l.c
l=l.a.c
k.a5(a4,new A.p(-m/2,4-l.gba(l)/2))
t.restore()}i=a1.cy*d
a2=a1.dx
w=Math.sin(a2*4)
X.Bq(a4,new A.p(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dP,F.mY,!1,(w+1)/2)
h=A.bs(new A.p(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aG($.S().r,B.ai,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.E(new A.aZ(w,a2))
t=h.c
a3.E(new A.aq(t,a2))
s=h.d
a3.E(new A.aq(t-8,s))
a3.E(new A.c7(h.gbx().a,s+8,w+8,s))
a3.E(new A.bu())
m=A.K()
m.r=D.ZE.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=D.BL.gp(0)
m.c=1.4
a4.ah(new A.p(t,a2),new A.p(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.K()
s.r=G.nq.gp(0)
a4.ar(new A.a1(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.K()
s.r=D.blh.gp(0)
a4.bZ(new A.a1(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.I)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=g.e.j(B.j.D(s,0,1)).gp(0)
a4.N(new A.p(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.fs(e,B.ct,e,e,e,A.cQ(e,e,e,e,e,e,e,e,e,A.m(e,e,B.cS.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,I.Dw,e,e),"+"+a2),B.a5,B.bX,e,B.dD,B.bY)
k.e5()
k.a5(a4,new A.p(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aE(d){return!0}}
C.QR.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b2(v,v,v,new C.aBN(w.c,w.f,v),B.az),s=A.l(10),r=A.L(B.bE,B.r,1.4)
return new A.a5(u+22,v,A.x(A.a([new A.a5(u,u,t,v),B.cQ,A.r(v,A.d(w.d,v,1,B.a2,v,v,v,D.fqt,v,v,v),B.f,v,v,new A.o(B.c,v,r,s,v,v,B.n),v,v,v,v,B.n3,v,v,v)],x.p),B.l,v,B.e,B.P,0,B.p),v)},
gZ(d){return this.e}}
C.aBN.prototype={
a5(d,e){var w=e.ei(B.J),v=e.gdA(),u=this.c?0.8:0
return X.fX7(d,w,v*0.44,this.b,0,u)},
aE(d){return d.b!==this.b||d.c!==this.c}}
C.aAh.prototype={}
C.av4.prototype={
S(){return new C.av5(A.T(x.S,x.cq),null,null)},
gd1(){return this.d}}
C.av5.prototype={
gkT(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hGg(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gaFt(){var w=this.z
return w===$?this.z=this.Xn(0):w},
gj1(){var w,v=this.Q
if(v===$){w=this.gkT()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c1(w,-1,!1,x.S)}return v},
Xn(d){var w,v,u,t,s=this.gkT()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aAh(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aAh(v[t],u[t],-1))
v=new A.e2()
v.cY(this.a.e*31+d)
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
v.qF()}this.bwx()},
cRv(d,e){var w,v,u,t,s,r=this
if(d>=r.gj1().length||r.gj1()[d]!==-1||B.d.q(r.gj1(),e))return
w=r.gaFt()[e]
v=r.gkT()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.cqJ(r,e,w,v))
A.cy(B.lI,new C.cqK(r))
return}++r.r
u=A.bl(null,B.hK,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.m(new C.cqL(r,d,e,w,v))
u.cr(0)},
kO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkT()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cF(n,0,new C.cqM())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.cqN(t,r))
w=5
return A.b(C.BX(t.a.d,r),$async$kO)
case 5:t.x=f
o=t.a
w=6
return A.b(C.BY(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kO)
case 6:t.ch=f
if(t.c!=null)t.m(new C.cqO())
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
q.qF()}o.a8(0)
t.m(new C.cqP(t))
case 1:return A.h(u,v)}})
return A.i($async$kO,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.as(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.pZ,p,p,p),p,p,p)
v=r.f
v=A.as(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.VH,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tJ(q,A.cm(A.a([D.afL,w,v,B.aO,new C.IB(u,t,r.ch,p),B.aO,A.as(C.uA("Back to the games",new C.cqF(d),B.cS,B.k7,D.fC),p,p,p)],x.p),p,p,B.ac,p,p,B.ah,!1),B.f7,p)}w=r.gkT()
v=r.e
s=w[v]
return new C.tJ(q,new A.D(B.uC,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aVX,B.K,p,p),A.E(A.cr(new C.cqG(r,s)),1)],x.p),B.l,p,B.e,B.i,0,B.p),p),B.f7,p)}}
C.bcK.prototype={
a5(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.Y(b2,new C.cQL(),A.U(b2).k("Y<1>")).gJ(0),b4=a9.b,b5=b4.a2(0,B.JH)
$.S()
w=A.K()
w.r=D.lC.j(0.18+0.1*b3).gp(0)
b6.N(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a2(0,D.eoD)
u=A.K()
u.r=B.on.j(0.5).gp(0)
u.c=10
u.d=B.bw
b6.ah(new A.p(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.dK.aA(0,B.j.D(b2[p],0,1))
l=$.S().r
k=A.a([],s)
j=new A.aG(l,B.ai,b0,b0,k)
k.push(new A.aZ(u,b4))
j.ab()
o=new A.c7((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.ak(n)
j.ab()
if(m<1)for(o=new A.aG(l,j.b,j.c,b0,A.bq(k,!0,r)),n=A.a([],q),i=new A.rA(o,!1,n);i.C();){h=i.c
if(h===0||i.f)A.bj(A.jK(b1));--h
g=new A.BV(i,h)
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
$.S()
a1=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a1.r=B.aT.gp(0)
a1.b=B.a9
a1.c=3
b6.af(new A.aG(l,d,b0,new A.ce([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aG(l,j.b,j.c,b0,A.bq(k,!0,r)),n=A.a([],q),k=new A.rA(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bj(A.jK(b1));--a0
k.iy()
a1=n[a0].b
a1===$&&A.c()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.S()
a4=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a4.r=D.Gi.gp(0)
a4.b=B.a9
a4.c=h
a4.d=B.bw
b6.af(new A.aG(l,a2,b0,new A.ce([new A.BV(k,a0),0,a1*m,!0]),a3),a4)
k.iy()
a4=n[a0].b
a4===$&&A.c()
a4=a4.a.length()
k.iy()
a5=n[a0].Di(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bs(new A.p(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a3.r=B.b4.gp(0)
b6.bZ(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.iK(D.fpX,B.a5,B.bX,new A.jj(1),b0,b0,b0,b0,B.bY,b0,B.ct)
a8.e5()
a8.a5(b6,new A.p(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aE(d){return!0}}
C.az2.prototype={
S(){return new C.az3(A.aR(x.S))},
gd1(){return this.d}}
C.az3.prototype={
gkT(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hHa(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
Y(){this.a4()
this.b9a()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a3()},
b9a(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.dg(B.rW,new C.cFH(this))},
bq6(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkT()[v.e]
if(w.e[d]===w.b)v.m(new C.cFP(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cFQ(v,d))
A.cy(B.iP,new C.cFR(v))}},
cWY(){var w=this
if(!w.as&&w.f<w.gkT()[w.e].d.length)w.m(new C.cFS(w))},
kO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.gkT()
w=r+1>=q.length?3:4
break
case 3:r=t.ch
if(r!=null)r.a1(0)
r=t.w
q=r===q.length?15:0
s=r*6+q
t.m(new C.cFT(t,s))
w=5
return A.b(C.BX(t.a.d,s),$async$kO)
case 5:t.y=f
q=t.a
w=6
return A.b(C.BY(q.d,q.c.a,"who",t.r),$async$kO)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cFU())
w=1
break
case 4:t.m(new C.cFV(t))
t.b9a()
case 1:return A.h(u,v)}})
return A.i($async$kO,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.as(A.d(""+a0.w+" of "+a0.gkT().length+" guessed",a2,a2,a2,a2,a2,a2,B.pZ,a2,a2,a2),a2,a2,a2)
v=A.as(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.VH,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tJ(a1,A.cm(A.a([D.bel,w,v,B.aO,new C.IB(u,t,a0.ax,a2),B.aO,A.as(C.uA("Back to the games",new C.cFJ(a3),B.cS,B.k7,D.fC),a2,a2,a2)],x.p),a2,a2,B.ac,a2,a2,B.ah,!1),B.f7,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkT()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.KY,B.K,a2,a2),B.W,A.as(A.lD(new C.cFK(a0,r),a2,B.b_,B.hK,a2,a2,new A.br(a2,s,u),x.i),a2,a2,a2),B.aB],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aN(16,16)
l=new A.ay(B.cS,2,B.r,-1)
k=o+1
w.push(new A.r8(new A.br(0,1,u),new C.cFL(),A.r(a2,new A.c8(B.aL,B.e,B.i,B.l,a2,B.p,a2,0,A.a([new A.qI(A.d(""+k,a2,a2,a2,a2,a2,a2,B.o1,a2,a2,a2),D.lB,a2,12,a2),B.av,new A.bz(1,B.bb,A.d(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fCN,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.o(D.qo,a2,new A.bG(l,l,l,l),new A.be(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.cy,B.bh,a2,a2,a2),B.b_,B.iP,a2,new A.bt("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.as(A.bP(!1,D.h3c,a2,a2,!0,a2,a2,a2,a0.gcWX(),a2,a2),a2,a2,a2))
w.push(B.T)
if(a0.as){u=D.lC.j(0.2)
q=A.l(16)
p=A.L(D.lC,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fS,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.r(a2,A.x(A.a([m,B.W,C.uA(v,a0.gqo(a0),B.cS,B.jI,D.fC)],t),B.l,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.o(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bI,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dr:B.cS.j(0.2)
g=new A.aN(16,16)
l=new A.ay(n.q(0,o)?B.fi:B.cS,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bW:B.c
d=n.q(0,o)?B.xp:a2
t.push(new A.r8(new A.br(0,i,u),new C.cFM(),A.az(a2,A.r(a2,A.d(f,a2,a2,a2,a2,a2,a2,new A.F(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.aeU,new A.o(h,a2,new A.bG(l,l,l,l),new A.be(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jq,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cFN(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b_,B.md,a2,new A.bt("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bX(B.fV,t,B.bt,a2,10,10))}return new C.tJ(a1,A.cm(w,a2,a2,B.amu,a2,a2,B.ah,!1),B.f7,a2)}}
C.aA2.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aHf.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.afZ.prototype={
ar1(d){},
ary(){var w=this,v=w.q1(new C.f7E(w))
v.fX(0)
w.LZ$!==$&&A.aQ()
w.LZ$=v}}
C.aL3.prototype={
gbmy(d){var w=this.c
return B.a.aB(w,0,Math.min(this.d,w.length))},
VX(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.dg(D.alw,new C.fhO(w))},
bsu(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.amj.prototype={
S(){return new C.amk(new C.amt(),A.a([],x.t),new A.eC(0,$.ax()),$,0,null,null)},
gd1(){return this.d}}
C.amk.prototype={
gMO(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEw(w.c,10,w.e,!0)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.Na(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gqw(){var w=this.r
return w===$?this.r=new C.aL3(new C.bSY(this)):w},
gapS(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gMO()[v].c)u.push(1)
return u.length},
gblS(){var w=this.ghb(0)
return w.gzq()==null?"Elder":B.a.i(w.gzq().b)},
Y(){this.a4()
this.ary()},
t(){var w,v=this
v.gqw().t()
v.f.t()
w=v.LZ$
w===$&&A.c()
w.t()
w=v.qa$
w.U$=$.ax()
w.P$=0
v.bwc()},
cLB(){var w=this
w.m(new C.bSV(w))
w.gqw().VX(w.gMO()[w.x].a)},
L7(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqw()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.qa$.a
v.ax=u
v.ay=u+1
v.m(new C.bST())
A.cy(B.hK,new C.bSU(v))},
bq2(){var w=this.gapS(0)/this.gMO().length*100
if(w>=90)return D.f_m
if(w>=75)return D.eYo
if(w>=60)return D.eP3
if(w>=45)return D.eSu
return D.eJt},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cu7()
w=A.bS(0,new A.eo(A.b2(m,m,m,new C.btr(n,n.qa$),B.az),m),0,0,0)
if(!n.Q){v=D.qo.j(0.96)
u=A.l(20)
t=A.L(B.cS,B.r,3)
u=A.r(m,A.x(A.a([A.d("Elder "+n.gblS()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aWR,B.K,m,m),B.W,C.uA("Start the test",n.gBV(),B.cS,B.j9,D.fC)],x.p),B.l,m,B.e,B.P,0,B.p),B.f,m,m,new A.o(v,m,t,u,m,m,B.n),m,m,m,m,B.bI,m,m,m)
v=u}else{v=n.x
u=n.gMO()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aWT,m,m,m)
if(n.Q){t=n.gqw()
t=t.d<t.c.length}else t=!1
if(t)u=D.fin
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aN(10,10)
o=new A.ay(D.BL,4,B.r,-1)
s.push(A.az(m,A.r(m,A.d(q[r],m,m,m,m,m,m,D.ftI,B.K,m,m),B.f,m,D.aeU,new A.o(D.bhe,m,new A.bG(o,o,o,o),new A.be(p,p,p,p),m,m,B.n),m,m,m,m,B.Ok,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bSW(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bX(B.fV,s,B.bt,new A.bt("o"+t,x.W),8,8)}u=A.x(A.a([v,B.am,A.oB(u,B.mZ,A.pW(),B.b_,B.b_,A.LN())],x.p),B.l,m,B.e,B.P,0,B.p)
v=u}return new C.tJ("Village School",new A.an(B.a0,m,B.ad,B.t,A.a([w,A.ap(10,v,m,m,10,10,m,m)],x.p),m),B.f7,m)},
cu7(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bq2(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gMO()[v].c)g.push(v)
u=A.l(22)
t=A.L(B.cS,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.fyg,B.K,i,i)
r=A.d("Signed by Elder "+j.gblS(),i,i,i,i,i,i,D.fwT,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fC8,i,i,i),D.eBo],q)
o=A.d(h.b,i,i,i,i,i,i,D.fE5,i,i,i)
n=j.gapS(0)
m=j.gMO()
u=A.r(i,A.x(A.a([D.fPm,B.aw,s,r,B.W,new A.an(B.A,i,B.ad,B.t,p,i),o,B.am,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.abW,i,i,i),B.T,D.atm],q),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(D.qo,i,t,u,i,i,B.n),i,i,i,i,B.fv,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aB,new C.IB(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aO,D.h4g,B.T],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.I)(g),++l){v=g[l]
r=new A.aN(14,14)
k=new A.ay(B.by,1,B.r,-1)
p=m[v]
u.push(A.r(i,A.x(A.a([A.d(p.a,i,i,i,i,i,i,B.h4,i,i,i),B.aw,A.d("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fzr,i,i,i),A.d(p.d,i,i,i,i,i,i,D.fBK,i,i,i)],q),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.dr,i,new A.bG(k,k,k,k),new A.be(r,r,r,r),i,i,B.n),i,i,i,B.cy,B.bh,i,i,i))}B.d.u(s,u)}s.push(B.aB)
s.push(A.as(C.uA("Back to the games",new C.bSP(j),B.cS,B.k7,D.fC),i,i,i))
return new C.tJ("Village School",A.cm(s,i,i,B.bS,i,i,B.ah,!1),B.f7,i)}}
C.btr.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.qa$.a
a0.zp(e.f.Mz(a1))
w=C.hdJ(a1)
v=a0.c
J.bp(v.save())
v.translate(w.a,w.b)
a0.bU(0,w.c)
if(e.Q){u=e.gqw()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.cYU[s]-6
$.S()
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.r=D.G4.gp(0)
a0.ar(new A.a1(u,340,u+12,450),r)}u=A.bn(D.aa0.cn(10),B.i7)
$.S()
r=A.K()
r.r=D.BL.gp(0)
a0.an(u,r)
r=A.bn(D.aa0,B.hW)
u=A.K()
u.sav(A.jB(new A.p(30,96),new A.p(420,346),D.dhD,f,B.x,f))
a0.an(r,u)
q=new A.e2()
q.cY(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bs(new A.p(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.r=B.c.j(0.025).gp(0)
a0.bZ(o,r)}u=A.K()
u.r=I.ajm.gp(0)
a0.ar(new A.a1(30,354,420,362),u)
u=A.K()
u.r=B.aS.gp(0)
a0.ar(D.f9L,u)
u=A.K()
u.r=B.bL.gp(0)
a0.ar(D.f9P,u)
u=A.bn(D.f9F,B.hV)
r=A.K()
r.r=D.ZE.gp(0)
a0.an(u,r)
n=B.j.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqw().gbmy(0)
m=A.fs(f,B.ct,f,7,f,A.cQ(f,f,f,f,f,f,f,f,f,D.fGm,u+(t?"|":"")),B.a5,B.bX,f,B.dD,B.bY)
m.o8(346)
J.bp(v.save())
u=A.hX(D.aa0)
r=$.mi()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.hX(new A.a1(30+390*n,96,420,346)),r[1],!0)
m.a5(a0,new A.p(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bn(new A.a1(u,r,u+40,r+90),B.fQ)
u=A.K()
u.r=D.bwI.gp(0)
a0.an(r,u)}}else{m=A.fs(f,B.ct,f,f,f,D.fqc,B.K,B.bX,f,B.dD,B.bY)
m.o8(340)
m.a5(a0,new A.p(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.j.F(u+p/8,1)
o=B.o.F(e.gqw().d*9,310)
k=Math.sin(p+r)
j=new A.ao(B.O,B.M,B.R,B.S,B.Q)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.N(new A.p(70+o+k*6,166+l*70),1.6,j)}u=e.ghb(0).gzq()
i=(u==null?f:u.c)===D.ox?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.f7F(d,a0,i,t,h,D.epN)),new A.y(520,new C.f7G(a0,d,t)),new A.y(575,new C.f7H(a0,d,t)),new A.y(585,new C.f7I(this,a0,d,t)),new A.y(615,new C.f7J(this,t,a0,d,h))],x.E)
B.d.aZ(g,new C.f7K())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
cc9(d,e){var w,v,u,t,s,r,q,p=$.S(),o=A.a([],x.v),n=new A.aG(p.r,B.ai,null,null,o)
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
n.ab()}}n.E(new A.bu())
return n},
aE(d){return!1}}
C.amh.prototype={
S(){return new C.ami(new C.amt(),A.T(x.S,x.i),new A.eC(0,$.ax()),$,0,null,null)},
gd1(){return this.d}}
C.ami.prototype={
gkT(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hG4(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gj1(){var w=this.z
return w===$?this.z=this.FJ(0):w},
gaLJ(){var w,v,u,t,s=this,r=s.Q
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
FJ(d){var w,v,u,t,s=this.gkT()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e4(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e2()
u.cY(this.a.e+d*7)
B.d.e0(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.f1(u,new C.bSB())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Y(){this.a4()
this.ary()},
t(){var w,v=this
v.e.t()
w=v.LZ$
w===$&&A.c()
w.t()
w=v.qa$
w.U$=$.ax()
w.P$=0
v.bwb()},
ar1(d){var w,v,u,t,s,r=this,q=r.gj1().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.co(u===$?r.z=r.FJ(0):u,v)
s=r.gaLJ()
s[v]=s[v]+(450*(t+0.5)/q-r.gaLJ()[v])*Math.min(1,w)}},
d1j(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj1().length)return
w=v.y
if(w===-1){v.m(new C.bSM(v,d))
return}if(w===d){v.m(new C.bSN(v))
return}v.m(new C.bSO(v,B.d.co(v.gj1(),v.y),d,B.d.co(v.gj1(),d)))},
cMi(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.FJ(0):u).length))break
t=s.gkT()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.FJ(0):u)[v]]===v);++v}s.m(new C.bSH(s,B.d.cD(w,new C.bSI())))},
kO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkT().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bSJ(t,s))
w=5
return A.b(C.BX(t.a.d,s),$async$kO)
case 5:t.x=f
q=t.a
w=6
return A.b(C.BY(q.d,q.c.a,"lineup",t.r*10),$async$kO)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bSK())
w=1
break
case 4:t.m(new C.bSL(t))
case 1:return A.h(u,v)}})
return A.i($async$kO,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.as(A.d(""+l.r+" of "+l.gkT().length+" lines right",k,k,k,k,k,k,B.pZ,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tJ("Line Up",A.cm(A.a([D.afL,w,B.aO,new C.IB(v,u,l.ch,k),B.aO,A.as(C.uA("Back to the games",new C.bSD(d),B.cS,B.k7,D.fC),k,k,k)],x.p),k,k,B.ac,k,k,B.ah,!1),B.f7,k)}w=A.a([],x.t)
for(t=0;v=l.gkT(),t<v[l.f].d.length;++t)w.push(t)
B.d.aZ(w,new C.bSE(l))
u=A.bS(0,A.cr(new C.bSF(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aWT,k,k,k)
s=v[s]
q=x.p
s=A.ap(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.fyI,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fAY,B.K,k,k)],q),B.l,k,B.e,B.i,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.l(16)
n=l.ax
m=A.L(n?D.lC:G.nq,B.r,2)
r.push(A.r(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bSG(l),x.cM).aN(0,", then ")+".",k,k,k,k,k,k,D.fDa,k,k,k),B.f,k,k,new A.o(p,k,m,o,k,k,B.n),k,k,k,B.d9,B.bh,k,k,1/0))}if(!l.at)r.push(C.uA("That is my line!",l.gcMh(l),B.cS,B.hO,D.fC))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uA(w,l.gqo(l),B.cS,B.jI,D.fC))}return new C.tJ("Line Up",new A.an(B.a0,k,B.ad,B.t,A.a([u,s,A.ap(12,A.x(r,B.l,k,B.e,B.P,0,B.p),k,k,12,12,k,k)],q),k),B.f7,k)}}
C.bjV.prototype={
a5(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.qa$.a
c7.zp(c5.e.Mz(c8))
w=C.hdJ(c8)
v=c7.c
J.bp(v.save())
v.translate(w.a,w.b)
c7.bU(0,w.c)
u=c5.gj1().length
t=$.S().r
s=x.v
r=new A.aG(t,B.ai,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.c7(225,500,440,470))
q=A.K()
q.r=D.ZE.gp(0)
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
m=new A.bu()
l.push(m)
l=k.f
if(l!=null)m.ak(l)
k.ab()
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=[B.cS,G.nq,D.lC,B.aG][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b1g(c7,"OLDEST",D.eqL,B.cS)
this.b1g(c7,"YOUNGEST",D.eqd,B.b4)
t=A.bn(D.f9z,B.fQ)
s=A.K()
s.r=D.G4.gp(0)
c7.an(t,s)
s=A.bn(D.f9y,B.hW)
t=A.K()
t.r=D.BL.gp(0)
c7.an(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.aZ(t,new C.ds5())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.I)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.co(a1===$?c5.z=c5.FJ(0):a1,f)
o=c5.gaLJ()[f]
a3=c5.y===f
a4=a3?Math.abs(Math.sin(j))*10:0
a5=k.h(0,f)
if(a5!=null&&c6<a5)a4+=Math.sin((1-(a5-c6)/0.5)*3.141592653589793)*14
a6=c5.at&&c5.gkT()[c5.f].e[f]===a2
a7=c5.at&&!c5.ax&&!a6
a8=c5.gkT()
a9=a8[c5.f].c
b0=a9.length>f?a9[f]:f
if(l)b1=c5.at&&a6
else b1=!0
b2=Math.max(0,Math.sin(m+f))
if(a3){$.S()
a9=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a9.r=B.cS.j(0.22+0.1*Math.sin(e)).gp(0)
c7.N(new A.p(o,520),54,a9)}a9=D.dlv[B.o.F(b0,6)]
if(b1)b3=1
else b3=a7?-0.4:0.35
if(b1)b4=0.4+0.4*b2
else b4=h&&a7?0.5:0
if(h&&a7)b5=1
else b5=a3?0.6:0
b6=b1?0.5:0
b7=a7?Math.sin(d)*0.5:0
b8=b1?a4+b2*8:a4
if(b1)b9=new A.p(-3-b2*8,-56)
else b9=a3?D.esT:c4
if(b1)c0=new A.p(3+b2*8,-56)
else if(h&&a7)c0=D.aMI
else c0=a3?new A.p(30,-104+Math.sin(e)*5):c4
C.SJ(c7,new A.p(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.JJ,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.iK(new A.ep(a8,c4,c4,B.cN,c4,c4,c4,c4,c4,c4,D.fwo),B.a5,B.bX,new A.jj(1),"\u2026",c4,1,c4,B.bY,c4,B.ct)
c1.o8(q)
c2=A.bn(A.bs(new A.p(o,650),24,c1.b.c+16),B.fQ)
$.S()
a8=new A.ao(B.O,B.M,B.R,B.S,B.Q)
if(a6)a9=B.ie
else a9=a7?B.rQ:D.qo
a8.r=a9.gp(0)
c7.an(c2,a8)
a8=new A.ao(B.O,B.M,B.R,B.S,B.Q)
if(a6)a9=D.lC
else a9=a7?G.nq:D.lB
a8.r=a9.gp(0)
a8.b=B.a9
a8.c=2
c7.an(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a5(c7,new A.p(o-a9/2,650-a8.gba(a8)/2))
c3=new A.iK(new A.ep(""+(a2+1),c4,c4,B.cN,c4,c4,c4,c4,c4,c4,D.fwI),B.a5,B.bX,new A.jj(1),c4,c4,c4,c4,B.bY,c4,B.ct)
c3.e5()
c3.a5(c7,new A.p(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.j.F(p*53+Math.sin(c5+p)*20,450)
q=B.j.F(t+p*37,420)
J.bp(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bs(B.J,4,8)
$.S()
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=[B.cS,G.nq,D.lC,B.aG,B.c][B.o.F(p,5)].gp(0)
c7.ar(q,m)
v.restore()}v.restore()},
b1g(d,e,f,g){var w,v,u=null,t=A.fs(u,B.ct,u,u,u,A.cQ(u,u,u,u,u,u,u,u,u,A.m(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,I.Dw,u,u),e),B.a5,B.bX,u,B.dD,B.bY)
t.e5()
w=t.b
v=w.c
w=w.a.c
t.a5(d,f.aJ(0,new A.p(v/2,w.gba(w)/2)))},
aE(d){return!1}}
C.a2g.prototype={
a7(){return"_Trip."+this.b}}
C.amd.prototype={
S(){return new C.ame(D.Xt,new A.eC(0,$.ax()),$,0,null,null)},
gd1(){return this.d}}
C.ame.prototype={
gDu(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEw(w.c,8,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.Na(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gqw(){var w=this.f
return w===$?this.f=new C.aL3(new C.bSn(this)):w},
gTX(){var w=this.ghb(0)
return w.gzq()==null?"Grandma":B.a.i(w.gzq().b)},
Y(){this.a4()
this.ary()},
t(){var w,v=this
v.gqw().t()
w=v.LZ$
w===$&&A.c()
w.t()
w=v.qa$
w.U$=$.ax()
w.P$=0
v.bwa()},
ar1(d){var w,v,u,t=this
if(t.r!==D.adG)return
w=B.dG.aA(0,B.j.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDu()
if(v+1>=u.length){t.r=D.adH
t.WT()}else{++t.w
t.ay=!1
t.r=D.Xu
t.gqw().VX(u[t.w].a)}if(t.c!=null)t.m(new C.bSl())}},
WT(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$WT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqw().VX("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDu().length
r=C.bGM(t,u.z,s)
u.as=r
w=2
return A.b(C.BX(u.a.d,r),$async$WT)
case 2:u.at=e
s=u.a
w=3
return A.b(C.BY(s.d,s.c.a,"journey",u.x*10),$async$WT)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bSf())
return A.h(null,v)}})
return A.i($async$WT,v)},
brm(){this.aUp()},
aUp(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.adG
if(w.c!=null)w.m(new C.bSg())},
L7(d){var w,v,u,t,s=this
if(s.r!==D.Xu)return
w=s.gDu()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bSk(s,d,v))
u=s.gqw()
t=s.w
u.VX(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cRu(){if(this.r!==D.Bi)return
this.aUp()},
B(d){var w,v,u,t=this,s=null,r=A.bS(0,new A.eo(A.b2(s,s,s,new C.bjl(t,t.qa$),B.az),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDu().length;++w){v=t.w
if(w<v||t.r===D.adH)v=B.cS
else v=w===v?B.c:B.aT
u=new A.aN(4,4)
p.push(new A.bz(1,B.bb,A.r(s,s,B.f,s,s,new A.o(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,B.wz,s,s,s,s),s))}p.push(B.bn)
p.push(D.fR1)
return new C.tJ("Safari Journey",new A.an(B.a0,s,B.ad,B.t,A.a([r,A.ap(s,A.A(p,B.l,s,B.e,B.i,0,s,s),s,s,12,12,2,s),A.ap(10,t.clL(),s,s,10,10,s,s)],q),s),B.f7,s)},
clL(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bSj(o),l=D.qo.j(0.96),k=A.l(22),j=A.L(B.cS,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gTX()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aWR,B.K,n,n),B.W,C.uA("Start the journey",o.gbrl(),B.cS,D.bRv,D.fC)],x.p),B.l,n,B.e,B.P,0,B.p)
break
case 3:w=D.bdW
break
case 1:w=o.w
v=o.gDu()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aN(14,14)
p=new A.ay(D.lB,2.5,B.r,-1)
t.push(A.az(n,A.r(n,A.d(r[s],n,n,n,n,n,n,D.aWc,B.K,n,n),B.f,n,D.af1,new A.o(D.akw,n,new A.bG(p,p,p,p),new A.be(q,q,q,q),n,n,B.n),n,n,n,n,U.wu,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bSh(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.T,A.bX(B.bH,t,B.bt,n,8,8)],u),B.E,n,B.e,B.P,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDu().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.T,new A.bL(B.aa,n,n,C.uA(v,o.gcRt(),B.cS,B.jI,D.fC),n)],x.p),B.E,n,B.e,B.P,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gTX()),B.T,A.d(""+o.x+" of "+o.gDu().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aWv,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aR6(v)
u=C.aR6(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.abW,n,n,n))}w.push(B.T)
w.push(A.as(C.uA("Back to the games",new C.bSi(o),B.cS,B.k7,D.fC),n,n,n))
w=A.x(w,B.E,n,B.e,B.P,0,B.p)
break
default:w=n}return A.r(n,w,B.f,n,n,new A.o(l,n,j,k,D.aDT,n,B.n),n,n,n,n,B.bh,n,n,n)}}
C.bjl.prototype={
a5(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.qa$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDu(),d0=B.j.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.adG,d2=c7*0.5
c8=A.ar(D.biH,D.bt6,d0)
c8.toString
w=A.ar(D.YO,G.ai7,d0)
w.toString
v=A.ar(B.uf,D.bry,d0)
v.toString
$.S()
u=A.K()
t=x.O
u.sav(A.jB(B.J,new A.p(0,d2),A.a([c8,w,v],t),G.a4U,B.x,c3))
d3.ar(new A.a1(0,0,0+c6,0+c7),u)
s=new A.p(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.K()
u.sav(A.wh(s,60,A.a([D.brX,B.L],t),c3,B.x,c3,c3,0))
d3.N(s,60,u)
u=A.K()
u.r=B.Z_.gp(0)
d3.N(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.j.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dB0[o]
$.S()
u=new A.ao(B.O,B.M,B.R,B.S,B.Q)
u.r=B.c.j(0.75).gp(0)
d3.N(new A.p(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.S()
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
$.S()
k=new A.ao(B.O,B.M,B.R,B.S,B.Q)
k.r=A.ar(l===0?D.bhg:D.bw9,D.bmb,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.cca(d3,new A.p(B.j.F(B.j.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.S()
w=A.K()
v=A.ar(D.ajG,D.Gi,d0)
v.toString
w.sav(A.jB(new A.p(0,d2),new A.p(0,c7),A.a([v,D.brZ],t),c3,B.x,c3))
d3.ar(new A.a1(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.K()
w.r=D.blv.gp(0)
d3.ar(new A.a1(0,a0,c6,a1),w)
w=A.K()
w.r=D.bvO.gp(0)
d3.ar(new A.a1(0,a0-3,c6,a0),w)
for(q=-B.j.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ao(B.O,B.M,B.R,B.S,B.Q)
u.r=I.MS.gp(0)
d3.ar(new A.a1(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.S()
b2=new A.ao(B.O,B.M,B.R,B.S,B.Q)
b2.r=D.bgW.gp(0)
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
b0=new A.bu()
b2.push(b0)
b2=b1.f
if(b2!=null)b0.ak(b2)
b1.ab()
b0=new A.ao(B.O,B.M,B.R,B.S,B.Q)
b0.r=D.btY.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ao(B.O,B.M,B.R,B.S,B.Q)
b1.r=D.fC.gp(0)
d3.ar(new A.a1(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ao(B.O,B.M,B.R,B.S,B.Q)
b0.r=D.G4.gp(0)
d3.ar(new A.a1(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bn(new A.a1(b0,a4,b0+60,a5),B.iF)
b0=new A.ao(B.O,B.M,B.R,B.S,B.Q)
b0.r=D.bxd.gp(0)
d3.an(b5,b0)
b0=new A.ao(B.O,B.M,B.R,B.S,B.Q)
b0.r=D.BL.gp(0)
b0.b=B.a9
b0.c=2
d3.an(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.iK(new A.ep(b6,c3,c3,B.cN,c3,c3,c3,c3,c3,c3,D.fuP),B.a5,B.bX,new A.jj(1),c3,c3,c3,c3,B.bY,c3,B.ct)
b7.e5()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a5(d3,new A.p(b4-b1/2,a2-b0.gba(b0)/2))
if(a7)b8=c4.r===D.adH
else if(r===c4.w){b0=c4.r
b0=b0===D.Xu||b0===D.Bi
b8=b0}else b8=!1
if(a7){b0=c4.ghb(0).gzq()
b9=(b0==null?c3:b0.c)===D.ox?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqw()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.Bi
b0=c0?C.hCr(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.Xu?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.p(40,-110+Math.sin(g)*10)
else a7=c0?new A.p(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.SJ(d3,new A.p(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.p(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bIt(d3,new A.p(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.j.F(w+r/7,1)
$.S()
t=new A.ao(B.O,B.M,B.R,B.S,B.Q)
t.r=D.bvi.j(0.5*(1-c2)).gp(0)
d3.N(new A.p(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.Xt)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.j.F(w+r/5,1)
t=Math.sin(r+c8)
$.S()
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.N(new A.p(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.Bi&&c4.ax){b7=A.fs(c3,B.ct,c3,c3,c3,A.cQ(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.m(c3,c3,B.cS,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,A6.IH,c3,c3),"BEEP BEEP!"),B.a5,B.bX,c3,B.dD,B.bY)
b7.e5()
b7.a5(d3,new A.p(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
cca(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ar(D.brs,D.bkO,g)
o.toString
if(f){w=new A.aG($.S().r,B.ai,null,null,A.a([],x.v))
v=e.a
u=e.b
w.E(new A.aZ(v-16,u))
t=u-36
s=u-56
w.E(new A.c7(v-9,t,v-7,s))
w.E(new A.aq(v+7,s))
w.E(new A.c7(v+9,t,v+16,u))
w.E(new A.bu())
t=A.K()
t.r=D.a_9.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d1U[r]
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=D.a_9.gp(0)
p.c=4
p.d=B.bw
d.ah(new A.p(w,t),new A.p(v+q*24,s),p)
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=o.gp(0)
d.N(new A.p(v+q*26,u),10,p)}}else{w=e.a2(0,D.esQ)
$.S()
v=A.K()
v.r=D.bgY.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bs(e.a2(0,D.esR),16,60)
w=A.K()
w.r=o.gp(0)
d.bZ(v,w)}},
bIt(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.Xt?0.045:0,a1=a2.c
J.bp(a1.save())
a1.translate(a3.a,a3.b+e)
a2.hW(0,a0)
for(w=0;w<2;++w){v=D.dtf[w]
u=d.ay&&d.r!==D.Xt&&v>0
J.bp(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.S()
s=new A.ao(B.O,B.M,B.R,B.S,B.Q)
s.r=D.bw0.gp(0)
a2.N(B.J,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ao(B.O,B.M,B.R,B.S,B.Q)
s.r=D.bof.gp(0)
a2.N(B.J,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ao(B.O,B.M,B.R,B.S,B.Q)
q.r=B.bj.gp(0)
q.c=2
a2.ah(B.J,new A.p(s*9,t*9),q)}a1.restore()}p=A.u7(D.f9W,B.fQ,B.fQ,B.ir,B.hU)
$.S()
t=A.K()
t.sav(A.jB(D.eoT,B.a8V,D.dj0,G.a4U,B.x,f))
a2.an(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ao(B.O,B.M,B.R,B.S,B.Q)
s.r=D.dcZ[B.o.F(o,4)].gp(0)
a2.ar(new A.a1(t,-26,t+10,-19),s)}n=d.r===D.Bi&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a1(s,-66,q,-36)
J.bp(a1.save())
a1.clipRRect(A.nS(A.bn(l,B.mx)),$.np(),!0)
k=new A.ao(B.O,B.M,B.R,B.S,B.Q)
k.r=D.YO.gp(0)
a2.ar(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.Bi?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.SJ(a2,new A.p(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aMz,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bn(l,B.mx)
i=new A.ao(B.O,B.M,B.R,B.S,B.Q)
i.r=D.aky.gp(0)
i.b=B.a9
i.c=2
a2.an(j,i)}d=A.bn(D.UN,B.mx)
t=A.K()
t.r=D.YO.gp(0)
a2.an(d,t)
J.bp(a1.save())
a1.clipRRect(A.nS(A.bn(D.UN,B.mx)),$.np(),!0)
C.SJ(a2,new A.p(D.UN.gbx().a,-10),0,0,0.7,-0.1,f,f,D.aMz,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bn(D.UN,B.mx)
d=A.K()
d.r=D.aky.gp(0)
d.b=B.a9
d.c=2
a2.an(t,d)
d=A.K()
d.r=Al.Gj.gp(0)
a2.N(D.er_,4,d)
d=A.K()
d.r=D.G4.gp(0)
a2.ar(D.fb4,d)
for(w=0;w<3;++w){v=D.dth[w]
d=A.bn(new A.a1(v,-96,v+28,-79),B.iF)
t=new A.ao(B.O,B.M,B.R,B.S,B.Q)
t.r=D.Gi.gp(0)
a2.an(d,t)}a1.restore()},
aE(d){return!1}}
C.aBQ.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bgU.prototype={}
C.aBS.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bgV.prototype={}
C.aBT.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bgW.prototype={}
C.a6H.prototype={
B(d){var w=null
return new A.a5(1/0,this.c,A.b2(w,w,w,new C.bjs(w),B.az),w)}}
C.bjs.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dre[B.o.F(n,6)]
k=$.S()
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
k=new A.bu()
j.push(k)
j=i.f
if(j!=null)k.ak(j)
i.ab()
k=new A.ao(B.O,B.M,B.R,B.S,B.Q)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aE(d){return!1}}
C.tJ.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aI(w,w,w,w,B.Qa,w,w,w,new C.bSe(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a2,w,w,w,D.fs4,w,w,w),1)],v)
B.d.u(u,this.e)
return A.c4(w,D.YA,A.r(w,A.bm(!0,A.x(A.a([D.c6a,new A.D(D.bIn,A.A(u,B.l,w,B.e,B.i,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.b9c,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.IB.prototype={
B(d){var w=null,v=this.d,u=C.aR6(v),t=C.ikR(v),s=B.c.j(0.08),r=A.l(18),q=A.L(B.cS.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fuA,w,w,w)],x.p)
if(this.e)p.push(D.evg)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.h4,w,w,w))
if(t!=null)p.push(new A.D(B.uA,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.AX,w,w,w),w))
return A.r(w,A.x(p,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.n),w,w,w,w,B.bI,w,w,w)}}
C.Wu.prototype={
S(){return new C.bmg(A.T(x.N,x.S),B.o.F(Date.now(),1e5))},
cYm(d){return this.f.$1(d)},
ge3(){return this.d}}
C.bmg.prototype={
gSW(){var w=this.d
return w===$?this.d=this.a.c:w},
Y(){this.a4()
this.Px()},
Px(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Px=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bT_(u.a.d),$async$Px)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.dh1[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bSZ(p,(o===$?u.d=q.c:o).a,r),$async$Px)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.e2h(u,n))
return A.h(null,v)}})
return A.i($async$Px,v)},
uC(d){return this.coO(d)},
coO(d){var w=0,v=A.j(x.H),u=this,t
var $async$uC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a6(t,!1).ce(A.ec(new C.e2i(d),!1,null,x.H)),$async$uC)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.Px()
return A.h(null,v)}})
return A.i($async$uC,v)},
gb6z(){var w,v,u,t=C.Na(this.gSW()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)s.push(B.a.i(w[u].b))
return s},
a2w(d){return this.cw_(d)},
cw_(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a2w=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.I)(d),++s)r.push(d[s].aj())
w=2
return A.b(u.a.cYm(r),$async$a2w)
case 2:if(u.c!=null)u.m(new C.e2j(u,r))
return A.h(null,v)}})
return A.i($async$a2w,v)},
OR(d){return this.bRc(d)},
bRc(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$OR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hg_(t.gSW())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.MV("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a6(s,!1).ce(A.ec(new C.e2f(q),!1,null,r)),$async$OR)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.I)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bj(j,new C.e2g(p))
o=s.length
B.d.c9(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a2w(A.cX(s,0,A.dB(2,"count",x.S),r).dn(0)),$async$OR)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OR,v)},
XP(d,e){return this.bOM(0,e)},
bOM(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$XP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cg(null,null,!0,null,new C.e2e(e),o,null,!0,!0,x.y),$async$XP)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hg_(u.gSW()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.I)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a2w(o),$async$XP)
case 5:case 3:return A.h(null,v)}})
return A.i($async$XP,v)},
aac(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e2b(this,j):h
o=o?0.55:1
w=A.ar(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.l(20)
u=A.L(B.aT,B.r,1)
t=A.a([new A.ab(0,B.G,g.j(0.35),B.cz,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.VC,p,p,p),B.b1],s)
q=A.l(10)
r.push(A.r(p,A.d(i,p,p,p,p,p,p,D.fsY,p,p,p),B.f,p,p,new A.o(B.hJ,p,p,q,p,p,B.n),p,p,p,p,B.CC,p,p,p))
return A.az(p,A.d3(A.r(p,A.x(A.a([A.A(r,B.l,p,B.e,B.i,0,p,p),B.b1,A.d(e,p,2,p,p,p,p,D.fAR,p,p,p),B.cQ,A.d(f,p,3,B.a2,p,p,p,D.ftG,p,p,p)],s),B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a8(B.aA,B.aE,B.x,w,p,p),B.n),p,p,p,p,B.yO,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
Xi(d,e,f,g,h,i){return this.aac(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.Na(s.gSW()),p=s.gSW(),o=C.aR6(s.e),n=C.hg_(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e2k(s),k=C.hG4(p,1).length,j=C.hGg(p,1).length,i=C.hHa(p,1).length,h=B.c.j(0.07),g=A.l(20),f=A.L(B.cS.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,K.abM,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.fyk,r,r,r),a0=q.b.length,a1=x.p
g=A.r(r,A.A(A.a([e,B.bc,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.VW,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.pZ,r,r,r),D.fXl],a1),B.l,r,B.e,B.i,0,B.p)],a1),B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(h,r,f,g,r,r,B.n),r,r,r,r,B.bI,r,r,r)
f=s.Xi("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aF,new C.e2l(s,p),l.$1("kahoot"))
h=s.Xi("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lB,new C.e2m(s,p),l.$1("fire"))
a0=s.Xi("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.wh,new C.e2n(s,p),l.$1("catch"))
j=j!==0?new C.e2q(s,p):r
j=s.aac("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hy,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e2r(s,p):r
i=s.aac("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.kN,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.Xi("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.f_,new C.e2s(s,p),l.$1("journey"))
k=k!==0?new C.e2t(s,p):r
k=A.a([g,B.aO,D.h0l,B.T,A.kZ(0.98,A.a([f,h,a0,j,i,e,s.aac("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.er,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.Xi("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d3,new C.e2u(s,p),l.$1("school"))],a1),2,12,12,r,B.dZ,!0),B.dc,A.A(A.a([D.bKd,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.ft1,r,r,r)],a1),B.l,r,B.e,B.i,0,r,r),B.T],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.I)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aN(18,18)
u=new A.ay(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fHX,B.bc,new A.bz(1,B.bb,A.x(A.a([A.d(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hv,r,r,r),A.d(""+v.gapw(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.AX,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),r)],a1)
if(v.gapw(0).length>=2){f=D.lC.j(0.2)
t=new A.ay(D.lC,1,B.r,-1)
g.push(A.az(r,A.r(r,A.X(B.hn,D.lC,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bG(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e2v(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cS.j(0.2)
t=new A.ay(B.cS,1,B.r,-1)
f=A.az(r,A.r(r,A.X(B.j9,B.cS,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bG(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e2w(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fi.j(0.2)
t=new A.ay(B.fi,1,B.r,-1)
B.d.u(g,A.a([B.bn,f,B.bn,A.az(r,A.r(r,A.X(B.ek,B.fi,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bG(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e2x(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.r(r,new A.c8(B.aL,B.e,B.i,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bG(u,u,u,u),new A.be(h,h,h,h),r,r,B.n),r,r,r,B.d9,B.bh,r,r,r))}if(s.a.e){j=m?new C.e2o(s):new C.e2p(a2)
i=A.l(18)
h=A.L(m?B.cS:B.aT,B.r,2)
g=m?B.cS.j(0.12):B.dr
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.az(r,A.r(r,A.as(A.d(f,r,r,r,r,r,r,A.m(r,r,m?B.cS:B.aD,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.n),r,r,r,r,B.O9,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.h1h)
k.push(B.aB)
k.push(D.atm)
return new C.tJ("Family Games \xb7 "+p.b,A.cm(k,r,r,D.bEo,r,r,B.ah,!1),B.f7,r)}}
C.a09.prototype={
a7(){return"_KPhase."+this.b}}
C.amf.prototype={
S(){return new C.amg(D.b19)},
gd1(){return this.e}}
C.amg.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a3()},
fX(d){var w,v=this
v.m(new C.bSz(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.dg(B.fL,new C.bSA(v))},
aPV(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.m(new C.bSp(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.dg(B.fg,new C.bSq(w))},
L7(d){var w
if(this.d!==D.ada)return
w=this.at
if(w!=null)w.a1(0)
this.b6v(d)},
b6v(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.j.V(500+500*B.j.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bSv(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cy(B.rW,v.gix(v))},
cKV(d){var w=this
if(w.d!==D.X0)return
if(w.e+1>=w.a.w.length)w.YA()
else{w.m(new C.bSw(w))
w.aPV()}},
YA(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$YA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bGM(p,u.w,t)
u.m(new C.bSs(u,s))
w=2
return A.b(C.BX(u.a.e,s),$async$YA)
case 2:r=e
t=u.a
w=3
return A.b(C.BY(t.e,t.f,t.r,u.f),$async$YA)
case 3:q=e
if(u.c!=null)u.m(new C.bSt(u,r,q))
return A.h(null,v)}})
return A.i($async$YA,v)},
cLK(){var w,v,u,t,s=this,r=s.a,q=new A.e2()
q.cY(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.b5("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.e0(r,q)
for(r=A.cX(r,0,A.dB(4,"count",x.S),A.U(r).c),u=r.$ti,r=new A.bR(r,r.gJ(0),u.k("bR<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b5(t,B.j.V(w*(0.35+q.ai()*0.5)),!1))}B.d.aZ(v,new C.bSx())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b19===r){w=A.a([D.fXK,B.W,A.d(s,t,t,t,t,t,t,B.L0,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.ft9,t,t,t))
w.push(B.aB)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.B2,B.K,t,t))
w.push(B.e3)
w.push(C.uA("Play",u.geY(u),B.cS,B.hn,D.fC))
w=A.as(new A.D(B.ey,A.x(w,B.l,t,B.e,B.P,0,B.p),t),t,t,t)
break A}if(D.b1a===r){w=A.as(A.d(""+u.z,t,t,t,t,t,t,D.fBo,t,t,t),t,t,t)
break A}if(D.ada===r||D.X0===r){w=u.crp()
break A}if(D.b1b===r){w=u.ccb()
break A}w=t}return new C.tJ(s,w,B.f7,t)},
crp(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.X0,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aW1,j,j,j),B.b1],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.KY,j,j,j))
g.push(B.av)
f=A.l(14)
g.push(A.r(j,A.d(""+k.f,j,j,j,j,j,j,B.iG,j,j,j),B.f,j,j,new A.o(B.by,j,j,f,j,j,B.n),j,j,j,j,B.Cq,j,j,j))
g=A.A(g,B.l,j,B.e,B.i,0,j,j)
f=A.l(6)
w=i?0:B.j.D(k.as/k.a.w[k.e].r,0,1)
f=A.bx(f,A.ks(B.by,j,k.as<5?B.fi:B.cS,9,j,w,j),B.aq)
w=A.l(22)
v=A.L(B.cS,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.m(j,j,e?D.lC:G.nq,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.T,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.fsd,B.K,j,j)],h),B.l,j,B.e,B.P,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fDz,B.K,j,j)
w=A.E(A.r(j,A.as(u,j,j,j),B.f,j,j,new A.o(D.qo,j,v,w,j,j,B.n),j,j,j,j,B.fv,j,j,1/0),3)
v=A.a([],h)
for(u=k.gix(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bSu(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aDv[o]
m=new A.aN(16,16)
l=new A.ay(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.d(D.aDP[o],j,j,j,j,j,j,D.fu9,j,j,j),B.av,new A.bz(1,B.bb,A.d(r[t],j,3,B.a2,j,j,j,D.ft6,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.arP)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bYU)
v.push(A.az(j,new A.SZ(A.r(j,new A.c8(B.aL,B.e,B.i,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bG(l,l,l,l),new A.be(m,m,m,m),V.aBR,j,B.n),j,j,j,j,B.f5,j,j,j),p,B.b_,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.am,f,B.ae,w,B.ae,A.E(A.kZ(1.45,v,2,10,10,j,B.dZ,!1),4)],h)
if(i)h.push(D.euw)
return new A.D(B.a0O,A.x(h,B.l,j,B.e,B.i,0,B.p),j)},
ccb(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cLK(),m=x.p,l=A.a([D.bdd,A.as(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.pZ,o,o,o),o,o,o),A.as(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.VH,o,o,o),o,o,o),B.aO],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cS.j(0.25):B.dr
u=new A.aN(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.cS:B.by,1,B.r,-1)
q=A.d(w<3?D.dji[w]:""+(w+1),o,o,o,o,o,o,B.mC,o,o,o)
s=s?B.u:B.U
l.push(A.r(o,new A.c8(B.aL,B.e,B.i,B.l,o,B.p,o,0,A.a([new A.a5(34,o,q,o),new A.bz(1,B.bb,A.d(t.a,o,o,o,o,o,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.d(""+t.b,o,o,o,o,o,o,B.iG,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bG(r,r,r,r),new A.be(u,u,u,u),o,o,B.n),o,o,o,B.cy,B.f0,o,o,o))}l.push(B.W)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.IB(m,v,p.CW,o))
l.push(B.aO)
l.push(A.as(C.uA("Back to the games",new C.bSr(p),B.cS,B.k7,D.fC),o,o,o))
return A.cm(l,o,o,B.fv,o,o,B.ah,!1)}}
C.U9.prototype={
S(){return new C.amc(A.T(x.de,x.er))}}
C.amc.prototype={
gD7(){var w,v=this,u=v.d
if(u===$){w=C.hlR(v.a.c.aj())
v.d!==$&&A.bE()
v.d=w
u=w}return u},
glT(d){var w,v,u=this,t=u.e
if(t===$){w=u.gD7().b
v=$.ax()
u.e!==$&&A.bE()
t=u.e=new A.au(new A.ba(w,B.b5,B.aP),v)}return t},
cfb(d){return this.f.c3(0,d,new C.bS_(d))},
Y(){this.a4()
var w=this.gD7().c
if(w.length===0)w.push(C.h7v(null,0,20,""))},
t(){var w,v,u=this.glT(0)
u.U$=$.ax()
u.P$=0
for(u=this.f,u=new A.dq(u,u.r,u.e);u.C();)for(w=J.aT(u.d);w.C();){v=w.gR(w)
v.U$=$.ax()
v.P$=0}this.a3()},
cKL(){if(this.gD7().c.length>=12)return
this.m(new C.bS0(this))},
jI(d){var w,v,u=this,t=u.gD7()
t.b=B.a.i(u.glT(0).a.a)
w=t.gapw(0)
if(t.b.length===0||w.length<2){u.c.L(x.q).f.T(D.fl6)
return}v=t.c
B.d.a8(v)
B.d.u(v,w)
v=u.c
v.toString
A.a6(v,!1).O(t)},
B(d){var w,v,u=this,t=null,s=new C.bSa(),r=x.p,q=A.a([A.bP(!1,D.fMX,t,t,!0,t,t,t,u.gbqd(u),t,t)],r),p=A.a([D.h0T,B.ae,A.aM(t,B.Z,!1,t,!0,B.t,t,A.aO(),u.glT(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ak,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ac,t,t,t,t,t,t,t,t,t,t,t,B.h4,!0,B.a5,t,B.ao,t,t,t,t),B.aB],r)
for(w=0;v=u.gD7().c.length,w<v;++w)B.d.u(p,A.a([new A.fh(new C.bS9(u,w,s),t)],r))
if(v<12)p.push(A.as(C.uA("\uff0b Add a question",u.gcKK(),B.aT,t,B.c),t,t,t))
return new C.tJ("Make your game",A.cm(p,t,t,D.bEl,t,t,B.ah,!1),q,t)}}
C.arj.prototype={
S(){return new C.aFo(A.a([],x._))},
bv(){return this.r.$0()},
qp(){return this.w.$0()},
ge3(){return this.c}}
C.aFo.prototype={
Y(){var w,v
this.a4()
this.wy()
w=this.a
v=w.c
if(v.length!==0)C.a8r(v,w.e,w.d.w)},
wo(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hiF(r,t.e,!1,s.w,new C.e3X(u),null,s),$async$wo)
case 2:w=3
return A.b(u.wy(),$async$wo)
case 3:return A.h(null,v)}})
return A.i($async$wo,v)},
a0I(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a0I=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hiF(r,t.e,!0,s.w,new C.e3W(u),null,s),$async$a0I)
case 2:w=3
return A.b(u.wy(),$async$a0I)
case 3:return A.h(null,v)}})
return A.i($async$a0I,v)},
wy(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wy=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Bt(q.a.c),$async$wy)
case 7:p=e
if(q.c!=null)n=q.e||J.cJ(p)
else n=!1
if(n)q.m(new C.e3Z(q,p))
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
return A.b(C.Hq(q.a.c).dg(0,B.qA),$async$wy)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.e4_(q,o))
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
if(q.c!=null&&q.e)q.m(new C.e40(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wy,v)},
Pc(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Pc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.L(s).f.T(D.fkH)
w=3
return A.b(C.Hq(t.a.c),$async$Pc)
case 3:r=e
w=4
return A.b(C.fY_(t.a.c,r),$async$Pc)
case 4:q=e
w=5
return A.b(C.Hq(t.a.c),$async$Pc)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.e3V(t,p))
o=t.c.L(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.T(A.b3(null,null,null,q?B.dL:B.d0,null,B.t,null,s,null,B.lH,null,null,null,null,null,null,null,null,null,null))
t.a.qp()
case 1:return A.h(u,v)}})
return A.i($async$Pc,v)},
Iv(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Iv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.itI(l),$async$Iv)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hWo(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b1u(q,p.e,l,"Each family tree costs $"+B.j.ad(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Iv)
case 4:if(!e||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
p=C.hCB(r)
o=Date.now()
n=t.a.c
m=new C.kY(l,r.toUpperCase(),p,!0,B.Z,D.DF,new A.V(o,0,!1),0,n,D.uJ,B.ce)
w=5
return A.b(C.a45(n,m),$async$Iv)
case 5:w=6
return A.b(t.wy(),$async$Iv)
case 6:t.a.bv()
t.a.qp()
if(t.c==null){w=1
break}t.F3(m)
case 1:return A.h(u,v)}})
return A.i($async$Iv,v)},
F3(d){return this.ck7(d)},
ck7(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$F3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Bt(u.a.c),$async$F3)
case 2:n=l.nA(k.dG(f,new C.e3Y(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hC(m,new C.ard(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$F3)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a45(u.a.c,o),$async$F3)
case 6:case 5:w=7
return A.b(u.wy(),$async$F3)
case 7:u.a.qp()
return A.h(null,v)}})
return A.i($async$F3,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.H,o=new C.um(p)
if(r.e)return A.as(A.n5(q,p?B.bu:B.bj,q,q,q,q,q,q,q,q),q,q,q)
if(J.ct(r.d)){w=p?B.eg:B.c
v=A.l(15)
u=A.aH(!1,B.a3,!0,q,A.aP(!1,q,!0,A.r(q,D.bWz,B.f,q,q,new A.o(B.aV.j(0.12),q,A.L(B.aV,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cW,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcjb(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.as,q,q,q,q,q,q,q,q,18,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Gr(A.r(q,A.x(A.a([u,B.aO,t,B.T,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.m(q,q,p?B.bu:B.bj,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.e3,A.bJ(D.h46,q,r.gaTc(),A.bo(B.bQ,q,q,q,q,q,Au.a1b,q,new A.b9(A.l(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.i,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bH3,q,q,1/0),15,B.ag,1.05,D.acY,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.as,q,q,q,q,q,q,q,q,16,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b1],v)
if(J.cJ(r.d))w.push(A.aI(q,q,q,q,A.X(B.zE,B.aV,q,q,q,q),q,q,q,new C.e42(r),q,q,q,q,"Sync family trees with database",q))
if(J.cJ(r.d))w.push(A.aI(q,q,q,q,A.X(B.zA,B.aV,q,q,q,q),q,q,q,r.gagZ(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dh(E.asL,q,D.fKe,r.gaTc(),A.bo(B.bQ,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.i,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ae)
u.push(new C.Gr(r.cGU(J.t(r.d,s),o),14,B.ag,1,D.acY,q))
B.d.u(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.l,q,B.e,B.i,0,B.p)],v),B.E,q,B.e,B.i,0,B.p)},
cGU(d,e){var w=null,v=e.a,u=v?B.eg:B.c,t=A.l(14),s=A.L((v?B.ei:B.bP).j(0.55),B.r,1),r=A.a([new A.ab(0,B.G,B.w.j(v?0.35:0.08),B.ev,10)],x.V),q=A.l(14),p=A.r(w,D.bVE,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.l(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.m(w,w,v?B.aS:B.as,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaqw(),m=d.d?"":" \xb7 Public",l=d.y===D.kW?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bG,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.i,0,B.p),1)
return A.r(w,A.aH(!1,B.a3,!0,w,A.aP(!1,q,!0,new A.D(B.bI,A.A(A.a([p,B.bc,l,A.X(B.P1,v?B.bu:B.bj,w,w,w,w)],k),B.l,w,B.e,B.i,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e41(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.ard.prototype={
S(){return new C.aFl(A.a([],x._),A.aR(x.N),A.bac())},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aFl.prototype={
Y(){var w,v,u=this
u.a4()
u.d=u.a.w
u.adF()
w=u.a
v=w.c
if(v.length!==0)C.a8r(v,w.e,w.d.w)},
t(){var w=this.w
w.U$=$.ax()
w.P$=0
this.a3()},
a3G(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3G=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yy("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e3n(r),s,null,!0,!0,x.y),$async$a3G)
case 3:if(e!==!0||t.c==null){w=1
break}t.K5()
t.m(new C.e3o(t,r))
w=4
return A.b(t.uy(),$async$a3G)
case 4:t.a.bv()
t.yy(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a3G,v)},
cwz(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aW.x1$.push(new C.e3i(w,f,d,e))},
aVv(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dr()
u.ej(w,v,0,1)
u.k5(q,q,1,1)
this.w.sp(0,u)},
bd7(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eM(new Float64Array(16))
q.e7(r)
w=q.Dc()
v=B.j.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dr()
t.ej(r,u,0,1)
t.k5(v,v,1,1)
t.ej(-r,-u,0,1)
t.iY(0,q)
s.sp(0,t)},
adF(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$adF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Bt(u.a.c),$async$adF)
case 2:t=s.nA(r.dG(e,new C.e2K(u)))
if(t!=null&&u.c!=null)u.m(new C.e2L(u,t))
return A.h(null,v)}})
return A.i($async$adF,v)},
yy(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
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
return A.b(C.hiF(o,t,!1,r,new C.e31(u),q.a,s),$async$wo)
case 2:n=A
m=J
w=3
return A.b(C.Hq(u.a.c),$async$wo)
case 3:p=n.nA(m.dG(e,new C.e32(u)))
if(p!=null&&u.c!=null)u.m(new C.e33(u,p))
return A.h(null,v)}})
return A.i($async$wo,v)},
K5(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cH(w,0)},
uy(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a45(t,s),$async$uy)
case 2:return A.h(null,v)}})
return A.i($async$uy,v)},
a2c(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a2c=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.uB(q,t.a.c)){t.yy("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.iuV(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a2c)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.K5()
t.m(new C.e3h(t,r))
w=4
return A.b(t.uy(),$async$a2c)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2c,v)},
b3c(){var w=this.c
w.toString
A.a6(w,!1).ce(A.ec(new C.e2Z(this),!1,null,x.H))},
a0W(){return this.ck9()},
ck9(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0W=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.uB(m,t.a.c)){t.yy("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.P(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Y(s,new C.e3e(),A.U(s).k("Y<1>")).gJ(0)
s=A.es([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("ci.E"))
B.d.fg(p)
s=t.c
s.toString
w=3
return A.b(A.bU(B.L,null,new C.e3f(n,t,new C.um(m.ax.a===B.H),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a0W)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.K5()
t.m(new C.e3g(t,o))
w=6
return A.b(t.uy(),$async$a0W)
case 6:case 5:if(o.a&&t.c!=null)t.b3c()
case 1:return A.h(u,v)}})
return A.i($async$a0W,v)},
WD(d){return this.bDN(d)},
bDN(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.uB(r,t.a.c)){t.yy("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e2y(t,d),r,null,!0,!0,x.P),$async$WD)
case 3:s=f
if(s==null){w=1
break}t.K5()
t.m(new C.e2z(t,s))
w=4
return A.b(t.uy(),$async$WD)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WD,v)},
a41(d){return this.cJ8(d)},
cJ8(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a41=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.cg(null,null,!0,null,new C.e3q(u,d,new C.um(s.ax.a===B.H)),t,null,!0,!0,x.H),$async$a41)
case 2:return A.h(null,v)}})
return A.i($async$a41,v)},
cgo(d){var w=this,v=w.d
v===$&&A.c()
if(C.uB(v,w.a.c))w.OS(d)
else w.a41(d)},
aju(d,e){return this.cAx(d,e)},
cAx(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aju=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.e3k(new C.um(r.ax.a===B.H),d,e),s,null,!0,!0,x.H),$async$aju)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aju,v)},
IA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$IA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kW?3:5
break
case 3:w=6
return A.b(C.h5H(t.a.c),$async$IA)
case 6:s=e
o=t.a
r=C.hqI(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.aju(!s,!r),$async$IA)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aRd(o,t.a.c)){t.yy("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lp(o,"Cancel","Remove",q.y===D.kW?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$IA)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aR9(t.a.c,t.d.a),$async$IA)
case 11:t.a.bv()
o=t.c
if(o==null){w=1
break}A.j3(o,null)
case 1:return A.h(u,v)}})
return A.i($async$IA,v)},
ab8(d){return this.bP2(d)},
bP2(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$ab8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.uB(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aU(s,new C.e2A(p))){o=A.U(s)
p.a=A.nA(new A.cM(new A.Y(s,new C.e2B(d),o.k("Y<1>")),new C.e2C(),o.k("cM<1,n>")))}q=p.a
if(q==null)q=d.d
t.K5()
t.m(new C.e2D(t,s,d,q))
w=3
return A.b(t.uy(),$async$ab8)
case 3:t.yy(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$ab8,v)},
OS(d){return this.bRg(d)},
bRg(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.uB(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a41(d),$async$OS)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.e2H(t,d),r,null,!0,!0,x.P),$async$OS)
case 6:s=f
if(s==null){w=1
break}t.K5()
t.m(new C.e2I(t,s))
w=7
return A.b(t.uy(),$async$OS)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OS,v)},
cHj(){var w=this,v=w.d
v===$&&A.c()
if(!C.uB(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.e3p(w))
w.uy()},
ZE(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aRd(n,t.a.c)){t.yy("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.ax()
r=new A.au(B.ax,s)
q=t.d.e
p=A.bq(new A.N(q,t.gceS(),A.U(q).k("N<1,n>")).bY(0,new C.e2U()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e2V(t,new C.um(n.ax.a===B.H),p,r),q,null,!0,!0,x.y),$async$ZE)
case 3:o=e
r.U$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.K5()
t.m(new C.e2W(t,p))
w=4
return A.b(t.uy(),$async$ZE)
case 4:t.yy("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$ZE,v)},
ceT(d){return B.a.i(d.toLowerCase())},
ciW(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.uB(v,w)
t=r.d
s=C.ijj(t)
C.itM(q,t.b,u,C.iji(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.H,m=new C.um(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Y(l,new C.e3x(),A.U(l).k("Y<1>")).gJ(0)
l=n?B.c4:B.i_
v=A.X(B.a2l,n?B.bu:B.bj,o,o,o,18)
u=x.p
v=A.a([new A.D(B.Cr,A.aP(!1,o,!0,new A.D(B.hL,A.A(A.a([v,B.bn,A.d("Back to Family Trees",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.P,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e3y(p,d),o,o,o,o,o,o,o),o),new A.D(B.nJ,p.c1v(m),o)],u)
if(p.d.y===D.kW){t=B.tp.j(0.15)
s=A.l(12)
r=A.L(B.tp.j(0.45),B.r,1)
q=C.Ho(p.d,p.a.c)
v.push(new A.D(B.yR,A.r(o,A.A(A.a([D.c03,B.av,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.hM,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,15,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b1],u)
if(C.uB(p.d,p.a.c)&&p.e.length!==0)u.push(new C.GD("Undo",B.pA,p.gcHi(),m,o,o))
u.push(new C.GD("Family Book",D.bQm,p.gciV(),m,B.ug,o))
u.push(new C.GD("Family games",B.oG,p.gcj6(),m,B.aF,o))
if(C.uB(p.d,p.a.c))u.push(new C.GD("Display settings",B.De,p.gck8(),m,B.b3,o))
u.push(new C.GD("Sync",B.zA,p.gagZ(),m,o,o))
t=p.d
if(t.y===D.kW||C.aRd(t,p.a.c)){t=p.d.y===D.kW?"Remove shared tree":"Delete tree"
u.push(new C.GD(t,B.ek,p.gbPc(),m,B.fi,o))}if(C.uB(p.d,p.a.c))u.push(new C.GD("Add member",B.wP,new C.e3z(p),m,B.bQ,o))
v.push(new A.D(Z.amv,A.A(u,B.l,o,B.e,B.i,0,o,o),o))
if(p.d.gaqw()===0){u=A.as(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cr(new C.e3A(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?O.a2p:A5.P2,o,o,o,o,o)
v.push(A.as(A.hs(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e3B(p),o),o,o,o))}return A.c4(o,l,A.bm(!0,A.x(v,B.E,o,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c1v(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.l(22)
v=A.a([new A.ab(0,B.G,B.fY.j(0.35),B.dp,18)],x.V)
u=A.l(22)
t=A.ap(-26,A.X(B.zr,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aH(!1,B.a3,!0,m,A.aP(!1,m,!0,A.r(m,D.c3j,B.f,m,m,new A.o(B.c.j(0.16),m,A.L(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cW,!0,m,m,m,m,m,m,m,m,m,m,m,n.gagZ(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.fvd,m,m,m)
r=r.gaqw()
p=n.d.gaqw()===1?"member":"members"
o=x.p
p=A.a([s,B.bc,A.E(A.x(A.a([q,B.bG,A.d(""+r+" "+p,m,m,m,m,m,m,A.m(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.i,0,B.p),1)],o)
if(C.uB(n.d,n.a.c))p.push(A.aI(m,m,m,m,D.c0h,m,m,m,n.gctX(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.i,0,m,m)
r=n.d.d
q=r?B.jJ:B.n6
r=r?"Private":"Public"
r=A.E(n.ax4(q,"Privacy",r,n.a.d.w?n.gcGd():m),1)
q=A.E(n.ax4(B.wU,"Tree code",n.d.c,new C.e2J(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ae,A.A(A.a([r,B.af,q,B.af,A.E(n.ax4(D.bS2,"Collaborators",p,n.gc6h()),1)],o),B.l,m,B.e,B.i,0,m,m)],o)
if(n.d.y===D.kW){s=B.c.j(0.15)
B.d.u(p,A.a([B.T,A.aH(!1,B.a3,!0,A.l(999),A.aP(!1,A.l(999),!0,new A.D(B.hj,A.A(A.a([A.X(B.pB,B.c,m,m,m,14),B.e8,A.d("View only",m,m,m,m,m,m,B.aW6,m,m,m)],o),B.l,m,B.e,B.P,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.aj)],o))}return A.r(m,A.bx(u,new A.an(B.a0,m,B.ad,B.t,A.a([t,new A.D(B.GU,A.x(p,B.E,m,B.e,B.i,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.c7D,B.n),m,m,m,m,m,m,m,1/0)},
ax4(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aH(!1,B.a3,!0,A.l(14),A.aP(!1,A.l(14),!0,new A.D(K.anJ,A.x(A.a([A.X(d,B.c,w,w,w,18),B.aw,A.d(e,w,1,B.a2,w,w,w,A.m(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.vG,A.d(f,w,1,B.a2,w,w,w,An.AU,w,w,w)],x.p),B.l,w,B.e,B.i,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)}}
C.bgY.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gau(r)&&s.c.length===0)return B.bM
w=s.d
v=s.e
u=A.a([A.b2(t,t,t,new C.bh0(s,t),new A.av(w,v))],x.p)
r=r.gdP(r)
B.d.u(u,r.dN(r,new C.dhx(this),x.l))
r=s.c
B.d.u(u,new A.N(r,new C.dhy(this),A.U(r).k("N<1,v>")))
return new A.D(B.uF,new A.a5(w,v,new A.an(B.a0,t,B.ad,B.f,u,t),t),t)}}
C.L2.prototype={}
C.GH.prototype={}
C.bh_.prototype={
gblE(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aKZ.prototype={}
C.bh0.prototype={
bQS(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.S()
v=A.K()
v.r=B.bE.j(0.75).gp(0)
v.c=2
v.d=B.bw
d.ah(new A.p(n,w),new A.p(m,w),v)
u=(n+m)/2
t=new A.aG(q.r,B.ai,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.aZ(u,q))
s=w-1.1
r=w-8.8
t.E(new A.ko(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.ko(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bu())
q=A.K()
q.r=B.c.gp(0)
d.N(new A.p(u,w),9,q)
q=A.K()
q.r=B.bE.gp(0)
d.af(t,q)},
bQP(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aZ(a0,new C.dhS())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aU(a0,new C.dhT(f))
t=new A.N(a0,new C.dhU(f),A.U(a0).k("N<1,G>")).bY(0,new C.dhV()).cF(0,1/0,B.rs)
w=f.a
d.ah(f,new A.p(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.I)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.p(o,v),p,e)
continue}l=J.lM(n)
k=Math.min(10,m/2)
m=$.S()
j=A.a([],r)
i=new A.aG(m.r,B.ai,null,null,j)
j.push(new A.aZ(w,v-k))
i.ab()
m=l*k
h=new A.c7(w,v,w+m,v)
j.push(h)
g=i.f
if(g!=null)h.ak(g)
i.ab()
m=new A.aq(o-m,v)
j.push(m)
h=i.f
if(h!=null)m.ak(h)
i.ab()
m=new A.c7(o,v,o,v+k)
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
$.S()
w=A.K()
w.r=B.bQ.j(0.75).gp(0)
w.c=2.2
w.b=B.a9
w.d=B.bw
w.e=B.dT
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.I)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bQP(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.I)(v),++t){r=v[t]
if(r.c)this.bQS(d,w,r.a,r.b)}},
aE(d){return d.b!==this.b}}
C.bkM.prototype={
gccd(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aE5
switch(w.c.a){case 0:return D.d0B
case 1:return D.dcT
case 2:return D.dv8}},
gccg(){var w=this.c,v=C.hBM(w.w),u=C.hBM(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.H,q=t.gccd(),p=t.c,o=N.bFn(p.f),n=t.gccg(),m=x.V,l=A.a([new A.ab(0,B.G,B.d.gal(q).j(0.35),B.cL,10)],m),k=r?B.as:B.c,j=A.L(r?B.as:B.c,B.r,2)
if(o!=null)w=A.tN(B.A,s,B.ck,B.c0,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.r(B.A,A.d(v,s,s,s,s,s,s,A.m(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a8(B.a7,B.aa,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.r(s,A.r(s,A.hY(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a8(B.aA,B.aE,B.x,q,s,s),B.a6),s,56,s,s,B.H8,s,s,56)],v)
k=t.d
if(k>0){j=A.l(10)
w=A.L(r?B.as:B.c,B.r,1.5)
l.push(A.ap(s,A.r(s,A.d(""+k,s,s,s,s,s,s,D.fG3,s,s,s),B.f,s,s,new A.o(B.ci,s,w,j,s,s,B.n),s,s,s,s,D.bJ1,s,s,s),s,s,s,-6,-4,s))}k=r?B.cl:B.c
j=A.l(8)
w=A.L(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ab(0,B.G,B.w.j(r?0.3:0.06),B.dM,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.m(s,s,r?B.c:B.cl,s,s,s,s,s,s,s,s,u,s,s,B.I,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.m(s,s,r?B.aR:B.bj,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.az(s,new A.a5(84,112,A.x(A.a([new A.an(B.a0,s,B.ad,B.f,l,s),B.aw,A.r(s,A.x(p,B.l,s,B.e,B.P,0,B.p),B.f,s,D.b7n,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bJc,s,s,s)],v),B.l,s,B.e,B.i,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bg2.prototype={
a5(d,e){var w,v,u,t,s
$.S()
w=A.K()
v=this.b
u=v?B.c:D.bko
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.N(new A.p(s,t),1,w)},
aE(d){return d.b!==this.b}}
C.byO.prototype={
B(d){var w=this,v=null,u=new C.fno(w),t=w.c,s=t?B.cl:B.c,r=A.l(12),q=u.$3(B.i2,"Zoom in",w.d),p=A.r(v,v,B.f,t?B.by:B.ft,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.wR,"Zoom out",w.e)
return A.aH(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.r(v,v,B.f,t?B.by:B.ft,v,v,v,1,v,v,v,v,v,22),u.$3(B.aqe,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.P,0,B.p),B.f,s,4,v,B.dx,v,v,v,B.aj)}}
C.bo8.prototype={
B(d){var w=this,v=null,u=B.bQ.j(0.15),t=A.L(B.bQ,B.r,2),s=w.e,r=x.p
t=A.az(v,A.r(v,A.x(A.a([A.X(s?O.a2p:A5.P2,B.bQ,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fC4,v,v,v)],r),B.l,v,B.ba,B.i,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fzP,B.K,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.u(t,new A.N(s,new C.eYq(w),A.U(s).k("N<1,v>")))
B.d.u(u,t)}return new A.a5(84,v,A.x(u,B.l,v,B.e,B.i,0,B.p),v)}}
C.a0m.prototype={
S(){return new C.aDP()},
bv(){return this.Q.$0()},
ge3(){return this.w}}
C.aDP.prototype={
Y(){var w,v,u,t,s,r=this,q=null
r.a4()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.ax()
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
r.y=t==null?D.z3:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.ikS(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
t(){var w,v=this,u=v.d
u===$&&A.c()
w=u.U$=$.ax()
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
Ql(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Ql=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hqI(p.y,p.w)
w=3
return A.b(A.lA(t.a.w,B.JC),$async$Ql)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b1u(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Ql)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hWp(p.y,p.w)
t.a.bv()
case 5:w=7
return A.b(Aw.HA(78,800),$async$Ql)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dxR(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Ql,v)},
ccf(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hZ(B.o.v(1000*Date.now()),w,D.z3,null,null,null,"","","","","",1,!1,0)
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
s=v.aG7(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).O(s)},
aaK(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aaK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dxQ(r),s,null,!0,!0,x.y),$async$aaK)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$aaK,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.H,i=new C.um(j),h=l.a.e,g=A.U(h).k("Y<1>"),f=A.C(new A.Y(h,new C.dy_(l),g),g.k("M.E"))
h=j?B.eg:B.c
g=A.l(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bHq,A.d(w,k,k,k,k,k,k,A.m(k,k,j?B.aS:B.as,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ap(k,A.h9(A.aP(!1,k,!0,new A.D(B.mg,A.X(B.ek,B.pk,k,k,k,17),k),B.cW,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbLN(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jW:B.j5
t=N.bFn(l.as)
if(l.as==null)s=A.X(B.ps,j?B.bu:B.bj,k,k,k,40)
else s=k
s=A.as(A.az(k,new A.an(B.a0,k,B.ad,B.t,A.a([A.hd(u,t,s,k,42),A.ap(0,A.hd(B.bQ,k,D.bUI,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gccc(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.c()
t=C.aDR(t,"Full name",B.mj,1,1,i,B.mA)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.W,new C.bkK(i,u,new C.dy0(l),k)],v),B.l,k,B.e,B.i,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bAK],q)
o=l.a.e
B.d.u(p,new A.N(o,new C.dy1(),A.U(o).k("N<1,eL<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bAM],q)
B.d.u(q,new A.N(f,new C.dy3(),A.U(f).k("N<1,eL<n?>>")))
o=A.x(A.a([t,B.am,new C.aev(i,r,"Who is their parent?",p,new C.dy4(l),k,o),B.aB,n,B.am,new C.aev(i,m,"Who is their spouse / partner?",q,new C.dy5(l),k,o)],v),B.al,k,B.e,B.i,0,B.p)
q=l.f
q===$&&A.c()
q=C.aDR(q,"Birth date",D.apn,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aDR(m,"Birth place",B.a2F,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aDR(n,"Date of death (if deceased)",D.aru,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aDR(p,"Occupation",B.a3S,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.ad,B.t,w,k),B.aB,s,B.bA,new C.aew(i,"Identity",u,k),B.ae,new C.aew(i,"Family links",o,k),B.ae,new C.aew(i,"Life details",A.x(A.a([q,B.W,m,B.W,n,B.W,p,B.W,C.aDR(r,"Notes",B.kX,5,3,i,k)],v),B.l,k,B.e,B.i,0,B.p),k),B.ae,new C.aDQ(i,"Child order",l.ckn(l.at),new C.dy6(l),new C.dy7(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hfO(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dy8(l):k
B.d.u(r,A.a([B.W,new C.aDQ(i,"Visible in tree",u,w,new C.dy9(l),k)],v))}r.push(B.W)
w=j?B.jW:B.j5
u=A.l(14)
t=A.L(j?B.ei:B.bP,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.m(k,k,j?B.aS:B.as,k,k,k,k,k,k,k,k,14,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.r(k,A.iU(k,B.bQ,k,B.ag,k,new C.dya(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,O.ama,k,k,k))
r.push(B.bA)
w=j?B.aS:B.as
j=j?B.ei:B.bP
r.push(A.A(A.a([A.E(A.dU(B.o2,new C.dy2(d),A.di(k,k,k,k,k,k,k,k,k,w,k,k,B.co,k,new A.b9(A.l(14),B.a1),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bc,A.E(A.bJ(D.fck,k,l.gcce(),A.bo(B.aV,k,k,0,B.c,k,B.co,k,new A.b9(A.l(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.i,0,k,k))
r.push(B.aw)
return A.eg(B.f7,k,B.ag,h,new A.a5(420,k,A.cb(A.x(r,B.al,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),k),D.an1,k,B.amm,new A.b9(g,B.a1),k,k)},
ckn(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aew.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jW:B.j5,s=A.l(16)
return A.x(A.a([new A.D(B.a1f,u,w),A.r(w,this.e,B.f,w,w,new A.o(t,w,A.L(v?B.ei:B.bP,B.r,1),s,w,w,B.n),w,w,w,w,B.bh,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)}}
C.bkL.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.eg:B.c,r=A.l(12),q=A.L((t?B.ei:B.bP).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.m(u,u,t?B.aS:B.as,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.r(u,A.aM(u,B.Z,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bA(u,B.eO,u,B.uD,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.m(u,u,t?B.bu:B.bj,u,u,u,u,u,u,u,u,u,u,u,B.cE,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bQ,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ak,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ac,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aev.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.eg:B.c,s=A.l(12),r=A.L((u?B.ei:B.bP).j(0.85),B.r,1),q=A.X(B.ta,u?B.bu:B.bj,v,v,v,v),p=A.m(v,v,u?B.aS:B.as,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.eg:B.c
return A.r(v,new A.Es(A.a5B(v,o,A.d(w.f,v,v,v,v,v,v,A.m(v,v,u?B.bu:B.bj,v,v,v,v,v,v,v,v,v,v,v,B.cE,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.kz,v,v,v)}}
C.bkK.prototype={
B(d){var w=new C.dyb(this)
return A.A(A.a([w.$3(D.wC,"Male",B.PO),B.af,w.$3(D.ox,"Female",B.Py),B.af,w.$3(D.z3,"Other",B.nN)],x.p),B.l,null,B.e,B.i,0,null,null)}}
C.aDQ.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jW:B.j5,r=A.l(14),q=A.L(t?B.ei:B.bP,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.m(v,v,t?B.aS:B.as,v,v,v,v,v,v,v,v,13,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.r(v,A.A(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bj,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.i,0,B.p),1),new C.aK0(u,B.wR,w.f,v),B.bn,new C.aK0(u,B.i2,w.r,v)],o),B.l,v,B.e,B.i,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.eH,v,v,v)}}
C.aK0.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bQ.j(0.12)
else w=s.c.a?B.eg:B.c
v=A.l(10)
u=A.l(10)
if(p)t=B.bQ
else t=(s.c.a?B.bu:B.bj).j(0.4)
return A.aH(!1,B.a3,!0,v,A.aP(!1,u,!0,new A.a5(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.aj)}}
C.aex.prototype={
bV3(d){switch(d.a){case 0:return B.bQ
case 1:return B.bE
case 2:return B.cA}},
bV4(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b_2(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
AN(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.eg:B.c
u=A.l(12)
t=A.L((w?B.ei:B.bP).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.u(r,A.a([A.X(f,B.bQ,p,p,p,18),B.av],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.m(p,p,w?B.bu:B.bj,p,p,p,p,p,p,p,p,9,p,p,B.I,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.aw,A.d(o,p,p,p,p,p,p,A.m(p,p,w?B.aS:B.as,p,p,p,p,p,p,p,p,14,p,p,B.U,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.i,0,B.p),1))
return A.r(p,A.A(r,B.E,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cy,B.yN,p,p,1/0)},
afl(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jW:B.j5,s=A.l(16),r=A.L(v?B.ei:B.bP,B.r,1)
return A.x(A.a([new A.D(B.a1f,u,w),A.r(w,A.x(e,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bV,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hGY(r,q),o=q.c,n=t.bV3(o),m=N.bFn(q.f),l=t.e.a,k=l?B.eg:B.c,j=A.l(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.m(s,s,l?B.aS:B.as,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kW?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.m(s,s,l?B.bu:B.bj,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.L(n,B.r,3)
v=A.a([new A.ab(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.as(A.r(s,A.hd(u,m,m==null?A.X(B.ps,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.eA,s,s,s),s,s,s)
w=n.j(0.14)
v=A.l(20)
u=A.L(n.j(0.45),B.r,1)
v=A.as(A.r(s,A.d(t.bV4(o),s,s,s,s,s,s,A.m(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.me,s,s,s),s,s,s)
u=x.p
i=A.a([t.AN("Full name",i,B.mj)],u)
if(p>0)i.push(t.AN("Child order","#"+p,B.PE))
r=A.a([h,B.aw,r,B.aO,l,B.W,v,B.bA,t.afl("Identity",i),B.ae,t.afl("Life details",A.a([t.AN("Birth date",q.w,D.apn),t.AN("Birth place",q.x,B.a2F),t.AN("Date of death",q.y,D.aru),t.AN("Occupation",q.z,B.a3S)],u)),B.ae,t.afl("Family links",A.a([t.AN("1. Parent",t.b_2(q.d),B.Hn),t.AN("2. Spouse",t.b_2(q.e),B.HC)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.u(r,A.a([B.ae,t.afl("Notes",A.a([t.AN("Notes",q,B.kX)],u))],u))
r.push(B.bA)
r.push(A.bJ(B.L7,s,new C.dyl(d),A.bo(B.aV,s,s,s,s,s,B.co,s,new A.b9(A.l(14),B.a1),s,s,s)))
return A.eK(s,k,new A.cP(B.m1,A.cb(A.x(r,B.al,s,B.e,B.P,0,B.p),B.t,s,B.y,s,B.yU,s,s,B.ah),s),s,s,s,B.GX,B.da,s,new A.b9(j,B.a1),s)}}
C.GD.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bu:B.bj
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.uH,A.h9(A.aH(!1,B.a3,!0,A.l(8),A.aP(!1,A.l(8),!0,new A.a5(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.aj),u,v.c,u,u),u)}}
C.arg.prototype={
f3(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.U(w).k("N<1,a9<n,@>>")
w=A.C(new A.N(w,new C.cfw(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jr(w,new C.cfx(),t,x.fO))
return s}}
C.arh.prototype={
S(){return new C.aFn(A.a([],x.bF))},
gd1(){return this.c}}
C.aFn.prototype={
Y(){this.a4()
this.Kc()},
Kc(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Kc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cfA(t.a.c),$async$Kc)
case 3:r=e
w=4
return A.b(C.Bt(t.a.c),$async$Kc)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rn(q,new C.e3K(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.e3L(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Kc,v)},
z6(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
L_(d,e){return this.cJP(d,e)},
cJP(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$L_=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.e3P(q,e))
t=3
w=6
return A.b(d.$0(),$async$L_)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.e3Q(q))
$.eY.mE()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$L_,v)},
Yo(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pA(r,s.c,s.e),$async$Yo)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.L_(new C.e3H(t),"Preparing download\u2026"),$async$Yo)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yo,v)},
Ys(d){return this.bSW(d)},
bSW(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ys=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pA(r,s.c,s.e),$async$Ys)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.L_(new C.e3I(t,d),"Preparing file\u2026"),$async$Ys)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ys,v)},
ahl(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ahl=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xS.cq().MJ(B.SK,B.uK,!0),$async$ahl)
case 7:r=e
o=r
q=o==null?null:J.fp(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jM(o,0,null)
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
case 6:u=A.Hz()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahl,v)},
Z6(d){return this.c2q(d)},
c2q(d){var w=0,v=A.j(x.H),u=this
var $async$Z6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.L_(new C.e3J(u,d),"Restoring family trees\u2026"),$async$Z6)
case 2:return A.h(null,v)}})
return A.i($async$Z6,v)},
Z5(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Z5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ahl(),$async$Z5)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Z6(s),$async$Z5)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Z5,v)},
a33(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a33=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pA(r,s.c,s.e),$async$a33)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.L_(new C.e3O(t),"Creating QR code\u2026"),$async$a33)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a33,v)},
a2F(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2F=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DG()){t.z6("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).ce(A.ec(new C.e3M(),!0,null,x.N)),$async$a2F)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Z6(r),$async$a2F)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2F,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.H,n=o?B.BU:B.i_,m=o?D.akE:B.aS,l=o?B.aM:B.bP,k=o?B.aS:B.as,j=new C.dhW(n,m,l,k,o?B.bN:B.bj)
l=A.aI(p,p,p,p,A.X(B.eM,k,p,p,p,20),p,p,p,new C.e3S(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eQ(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.m(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.u(t,A.a([A.E(C.dhu(!0,B.jL,B.aG,B.aG,q.r?p:q.gcAl(),j,s,"Show restore QR"),1),B.av],u))}s=q.e
r=q.r?p:q.gcwu()
t.push(A.E(C.dhu(!s,B.js,B.b8,B.bg,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.i,0,p,p)
r=A.a([],u)
if(q.e)B.d.u(r,A.a([A.E(C.dhu(!1,B.i3,B.aV,B.bQ,q.r?p:q.gbSP(),j,"Photos & books included","Download all trees"),1),B.av],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dhu(!1,Q.zB,B.au,B.aQ,q.r?p:q.gc2n(),j,s,"Upload backup file"),1))
l=A.a([new C.bgZ(v,l,p),B.l4,new C.adM(j,"QR restore",p),B.W,t,B.dc,new C.adM(j,"Backup files",p),B.W,A.A(r,B.l,p,B.e,B.i,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.l4,new C.adM(j,"One tree",p),B.W],u)
B.d.u(v,J.b7(q.d,new C.e3T(q,j),x.l))
B.d.u(l,v)}l=A.a([A.cm(l,p,p,B.a18,p,p,B.ah,!1)],u)
if(q.r){v=A.l(18)
t=A.L(B.aV.j(0.35),B.r,1)
s=A.a([new A.ab(0,B.G,B.w.j(o?0.3:0.1),B.dp,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ap(24,A.bm(!0,A.r(p,A.A(A.a([O.aUu,B.bc,A.E(A.d(r,p,p,p,p,p,p,A.m(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.U,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.Cy,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c4(w,n,new A.an(B.a0,p,B.ad,B.t,l,p),p,!1,!1,p,p)}}
C.dhW.prototype={}
C.bgZ.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.l(24)
u=A.a([new A.ab(0,B.G,B.aV.j(0.32),B.kF,28)],x.V)
t=A.ap(p,A.X(B.v4,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.l(18)
q=x.p
return A.r(p,new A.an(B.a0,p,B.ad,B.t,A.a([t,new A.D(B.ac,A.A(A.a([A.r(p,D.c2N,B.f,p,p,new A.o(s,p,A.L(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.p0,A.E(A.x(A.a([D.fLh,B.T,A.d(w,p,p,p,p,p,p,A.m(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.i,0,B.p),1)],q),B.E,p,B.e,B.i,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.caS,B.n),p,p,p,p,p,p,p,p)}}
C.adM.prototype={
B(d){var w=null
return A.A(A.a([A.r(w,w,B.f,w,w,new A.o(B.aV,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3),B.af,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)}}
C.bgX.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.l(18),n=A.l(18),m=r.c,l=r.y,k=l?B.aG.j(0.4):m.c
k=A.L(k,B.r,l?1.5:1)
l=l?A.a([new A.ab(0,B.G,B.aG.j(0.1),B.cL,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.l(12)
t=r.r
s=A.L(t.j(0.35),B.r,1)
return A.aH(!1,B.a3,!0,q,A.aP(!1,o,!0,A.eB(A.d3(new A.D(E.a0M,A.x(A.a([A.r(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.t3,q,q,q),B.ae,A.d(r.e,q,q,q,q,q,q,A.m(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bG,A.d(r.f,q,q,q,q,q,q,A.m(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cE,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.i,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)}}
C.bh1.prototype={
B(d){var w=this,v=null,u=A.l(18),t=A.l(18),s=w.c,r=A.L(s.c,B.r,1),q=B.aV.j(0.14),p=A.l(12),o=s.e,n=x.p
return A.aH(!1,B.a3,!0,v,A.aP(!1,u,!0,A.eB(new A.D(B.f0,A.A(A.a([A.r(v,D.c1Z,B.f,v,v,new A.o(q,v,A.L(B.aV.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.t3,v,v,v),B.bc,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.m(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.m(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.i,0,B.p),1),A.X(B.i3,o,v,v,v,20)],n),B.l,v,B.e,B.i,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.aj)}}
C.a0G.prototype={
S(){return new C.aFm()},
gd1(){return this.c}}
C.aFm.prototype={
Y(){this.a4()
this.aah()},
aah(){var w=0,v=A.j(x.H),u=this,t
var $async$aah=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b49(u.a.c,B.Eg),$async$aah)
case 2:t=e
if(u.c!=null)u.m(new C.e3C(u,t))
return A.h(null,v)}})
return A.i($async$aah,v)},
aiN(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aiN=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.e3D(q))
t=4
p=A.hss(q.a.d,B.Eg)
if(p==null){n=A.bc("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.atw(n.e,m,l,B.Eg,p,n.f),$async$aiN)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.e3E(q))
q.c.L(x.q).f.T(D.flV)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ac(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d(B.a.eo(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e3F(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aiN,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.H,o=p?B.nC:B.qp,n=p?B.iJ:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eQ(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.h0N,q,q,q,1,q,!0)
w=A.l(24)
v=A.L(B.aV.j(0.35),B.r,1)
u=A.qf(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.m(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.r(q,A.x(A.a([B.T,u,B.bA,t,B.T,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.m(q,q,p?B.aR:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.ba,B.i,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.ac,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.m(q,q,p?B.ab:B.bx,q,q,q,q,q,q,q,q,q,q,q,B.U,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcwd()
if(u)u=B.Ky
else u=A.X(r.e===!0?B.hO:B.apm,q,q,q,q,q)
w=A.a([w,B.ae,v,B.ae,new A.a5(1/0,q,A.en(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cg,q,q,q),t,A.di(q,q,q,q,q,q,q,q,q,B.aV,q,B.hb,q,q,q,new A.ay(B.aV.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.i0,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.m(q,q,p?B.aD:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.W)
w.push(new A.a5(1/0,q,A.bJ(B.B3,q,new C.e3G(d),A.bo(B.aV,q,q,q,q,B.hb,q,q,q,q,q,q)),q))
return A.c4(m,o,new A.D(B.ac,A.x(w,B.l,q,B.e,B.i,0,B.p),q),q,!1,!1,q,q)}}
C.a0H.prototype={
S(){return new C.bmh(A.A_(B.yC,B.o9,B.vc))}}
C.bmh.prototype={
t(){this.d.t()
this.a3()},
B(d){var w=null
return A.c4(A.eQ(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fTw,w,w,w,1,w,!0),B.w,A.zZ(this.d,B.c0,new C.e3U(this,d)),w,!1,!1,w,w)}}
C.b0_.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.m(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Se,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lY.prototype={}
C.a7t.prototype={
S(){return new C.blV(null,null)}}
C.blV.prototype={
Y(){var w=this,v=null
w.a4()
w.d=A.bl(v,B.rW,v,1,v,w)
w.e=A.bl(v,B.or,v,1,v,w)
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
this.bz0()},
B(d){var w,v,u=this,t=B.d.dL(D.a6Q,new C.dPY(u),new C.dPZ())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cDg(A.c6(new A.ha(A.a([w,v],x.dS)),new C.dQ_(u,t),null),!0)}}
C.blU.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b3D(d,e)
break
case"house":p.mj(d,e,D.di_)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdA()
$.S()
t=A.K()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.N(new A.p(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mp(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.By(d,e,12)
p.yI(d,e,B.lf,5,14)
break
case"grocery":p.cl6(d,e)
break
case"calculator":p.ckO(d,e)
break
case"lumber":p.cle(d,e)
break
case"kitchen":p.cl9(d,e)
break
case"landscape":p.mj(d,e,D.diD)
s=new A.aG($.S().r,B.ai,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.aZ(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.c7(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.c7(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.aq(t,w))
s.E(new A.aq(0,w))
s.E(new A.bu())
w=A.K()
w.r=B.er.j(0.85).gp(0)
d.af(s,w)
p.By(d,e,8)
p.yI(d,e,B.ie,4,18)
break
case"plumbing":p.cln(d,e)
break
case"electrical":p.mj(d,e,D.duj)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.S()
u=A.K()
u.r=B.c.j(q*0.12).gp(0)
d.ar(new A.a1(0,0,0+e.a,0+e.b),u)
p.mp(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mp(d,e,B.m6.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.By(d,e,10)
break
case"store":p.clx(d,e)
break
case"paint_remodel":p.cli(d,e)
break
case"roofing":p.clp(d,e)
break
case"warehouse":p.clE(d,e)
break
case"vehicles":p.clC(d,e)
break
case"farm":p.cl0(d,e)
break
case"restaurant":p.clo(d,e)
break
case"tools":p.clA(d,e)
break
case"wallet":p.clD(d,e)
break
case"concrete":p.ckU(d,e)
break
case"blueprint":p.ckM(d,e)
break
default:p.b3D(d,e)}},
mj(d,e,f){var w,v=new A.a1(0,0,0+e.a,0+e.b)
$.S()
w=A.K()
w.sav(new A.a8(B.aA,B.aE,B.x,f,null,null).aK(0,v))
d.ar(v,w)},
mp(d,e,f,g,h){var w,v,u,t=new A.p(e.a/2,e.b/2),s=e.gdA()/2-h
$.S()
w=A.K()
w.b=B.a9
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cB(A.bZ(t,s),u,u+0.1439896632895322-u,!1,w)}},
yI(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdA()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.S()
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.N(new A.p(q+t*o,p+s*o),3.5,r)}},
By(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.j.F(t*0.17,0.9)
q=B.j.F(t*0.23,0.85)
$.S()
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.N(new A.p(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b3D(d,e){var w,v=this
v.mj(d,e,D.dsD)
w=v.c
v.mp(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mp(d,e,B.bL.j(0.45),-w*3.141592653589793*1.4,22)
v.bQL(d,e,B.hA,w)
v.yI(d,e,B.c.j(0.7),6,8)},
bQL(d,e,f,g){var w,v,u,t,s,r
$.S()
w=A.K()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.ar(new A.a1(16,r,t,r+3),w)}},
cl6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mj(d,e,D.cwA)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.aq(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.S()
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=D.dg8[B.o.F(t,4)].j(0.85).gp(0)
d.N(new A.p(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mp(d,e,B.c.j(0.35),w,16)
l.yI(d,e,B.ie,5,12)},
ckO(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mj(d,e,D.cwJ)
w=i.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdA()
$.S()
q=A.K()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.N(new A.p(t/2,s/2),r*(0.18+u*0.08),q)
p=A.fs(h,B.ct,h,h,h,h,B.a5,B.bX,h,B.dD,B.bY)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dks[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb1(0,new A.ep(r,h,h,B.cN,h,h,h,h,h,h,new A.F(!0,q,h,h,h,h,14+m*4,B.I,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e5()
p.a5(d,new A.p(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.aq(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cwL[o]
l=B.kO.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb1(0,new A.ep(m,h,h,B.cN,h,h,h,h,h,h,new A.F(!0,l,h,h,h,h,12+k*3,B.I,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e5()
p.a5(d,new A.p(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.aq(o,3)*0.38)+Math.sin(n)*6))}i.mp(d,e,B.c.j(0.35),w*1.5,14)
i.mp(d,e,B.eK.j(0.55),-v*3.141592653589793*2,8)
i.mp(d,e,B.qh.j(0.4),r*2.8,22)
i.yI(d,e,B.qf,8,10)
i.By(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.j.F(w+o*0.22,0.9)
$.S()
v=new A.ao(B.O,B.M,B.R,B.S,B.Q)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.p(12,j),new A.p(t,j),v)}},
cle(d,e){var w,v,u,t,s,r,q,p,o=this
o.mj(d,e,V.aBa)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bn(new A.a1(20,r,u,r+10),B.hV)
$.S()
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=A.ar(B.fA,B.oe,(s+1)/2).gp(0)
d.an(q,p)}o.mp(d,e,B.fA.j(0.35),w,15)
o.By(d,e,8)},
cl9(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mj(d,e,D.dgD)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.j.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.j.F(s*0.13,0.7)
$.S()
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.N(new A.p(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mp(d,e,B.bL.j(0.4),-w*3.141592653589793*2.2,11)
l.yI(d,e,B.qc,4,14)},
cln(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mj(d,e,D.d4G)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.j.F(s,0.12)
$.S()
o=new A.ao(B.O,B.M,B.R,B.S,B.Q)
o.b=B.a9
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.N(new A.p(w,u),q*(0.12+r*0.14+p),o)}n.yI(d,e,B.pj,6,12)
n.mp(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
clx(d,e){var w,v,u,t,s,r,q,p=this
p.mj(d,e,D.cKw)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bn(new A.a1(r,14,r+u,22),B.iF)
$.S()
q=new A.ao(B.O,B.M,B.R,B.S,B.Q)
q.r=A.ar(B.fq,B.bL,(s+1)/2).gp(0)
d.an(r,q)}p.mp(d,e,B.c.j(0.3),w,16)
p.By(d,e,8)
p.yI(d,e,B.wa,5,13)},
cli(d,e){var w,v,u,t,s,r,q
this.mj(d,e,D.db4)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.j.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bn(new A.a1(r,q,r+8,q+(18+s*22)),B.hW)
$.S()
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.r=[B.iw,B.dn,B.bL,B.es][t].j(0.85).gp(0)
d.an(q,r)}this.mp(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
clp(d,e){var w,v,u,t,s,r,q
this.mj(d,e,D.d8r)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.j.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.S()
q=new A.ao(B.O,B.M,B.R,B.S,B.Q)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.p(u*(0.1+r),s),new A.p(u*(0.18+r),s+10),q)}this.yI(d,e,B.cx,7,11)},
clE(d,e){var w,v,u,t,s,r,q,p
this.mj(d,e,D.cNi)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bn(new A.a1(q,p,q+(t-s*8),p+16),B.hV)
$.S()
q=new A.ao(B.O,B.M,B.R,B.S,B.Q)
q.r=A.ar(B.cx,B.aS,(Math.sin(r)+1)/2).gp(0)
d.an(p,q)}this.mp(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
clC(d,e){var w,v,u,t,s,r,q
this.mj(d,e,D.dyB)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.j.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.bn(new A.a1(s,r,s+28,r+8),B.hV)
$.S()
q=new A.ao(B.O,B.M,B.R,B.S,B.Q)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.an(r,q)}this.By(d,e,6)},
cl0(d,e){var w,v,u,t,s,r,q,p
this.mj(d,e,D.dfc)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.S()
s=A.K()
s.r=B.m6.j(0.75).gp(0)
d.N(new A.p(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=B.hy.j(0.85).gp(0)
p.c=3
d.ah(new A.p(q,v),new A.p(q+s*6,t),p)}this.mp(d,e,B.m6.j(0.35),w,14)},
clo(d,e){var w,v,u,t,s,r,q=this
q.mj(d,e,D.dhO)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bs(new A.p(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.S()
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.r=B.c.j(0.22).gp(0)
d.bZ(s,r)}q.yI(d,e,B.qc,5,16)
q.By(d,e,7)},
clA(d,e){var w,v,u,t,s,r,q,p,o=this
o.mj(d,e,D.dvX)
w=o.c
v=w*3.141592653589793
o.mp(d,e,B.oe.j(0.55),v*3,10)
o.mp(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.S()
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=B.oe.j(0.8).gp(0)
d.N(new A.p(v+r*34,u+q*22),4,p)}},
clD(d,e){var w,v,u,t,s,r,q,p,o=this
o.mj(d,e,D.dzi)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bn(new A.a1(q,p,q+36,p+22),B.iF)
$.S()
q=new A.ao(B.O,B.M,B.R,B.S,B.Q)
q.r=A.ar(B.ie,B.m6,r).gp(0)
d.an(p,q)}o.By(d,e,9)
o.mp(d,e,B.c.j(0.4),w*2.2,12)},
ckU(d,e){var w,v,u,t,s,r,q,p
this.mj(d,e,D.dnq)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bZ(new A.p(v,u),34)
$.S()
s=A.K()
s.b=B.a9
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cB(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=B.bP.j(0.85).gp(0)
d.N(new A.p(v+t*34,u+s*34),3,p)}},
ckM(d,e){var w,v,u,t,s,r,q
this.mj(d,e,D.diX)
$.S()
w=A.K()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=0;t<v;t+=18)d.ah(new A.p(t,0),new A.p(t,u),w)
for(s=0;s<u;s+=18)d.ah(new A.p(0,s),new A.p(v,s),w)
r=this.c
q=u*B.j.F(r*0.85,1)
$.S()
u=A.K()
u.r=B.dn.j(0.45).gp(0)
d.ar(new A.a1(0,q,0+v,q+6),u)
this.mp(d,e,B.lf.j(0.45),-r*3.141592653589793*2,11)},
aE(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.auh.prototype={
a0j(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0j=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aS6(),$async$a0j)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a9M(s),$async$a0j)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a0j,v)},
ahm(d){return this.cnW(d)},
cnW(d){var w=0,v=A.j(x.H),u=this,t
var $async$ahm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.itW(d),$async$ahm)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ahm,v)},
B(d){var w,v,u=null,t=A.P(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.H?B.jW:B.j5
w=x.p
v=A.a([C.aSu(!0,B.rp,1/0,B.qL,u,s,1/0)],w)
if(!r)v.push(new A.bN(new A.o(u,u,u,u,u,new A.a8(B.b0,B.b7,B.x,A.a([B.L,B.w.j(0.35)],x.O),u,u),B.n),B.bk,new A.bL(B.b0,u,u,new A.D(B.rZ,A.d("Pick a theme or your own photo",u,u,u,u,u,u,A.m(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.U,u,u,!0,u,u,u,u,u,B.aC9,u,u),u,u,u),u),u),u))
v.push(A.ap(8,A.A(A.a([A.E(A.dh(D.bWs,u,D.fHq,new C.cp0(this,d),A.bo(B.aV,u,u,u,B.c,u,B.k2,u,u,u,u,B.ch)),1),B.af,A.E(A.en(D.c45,D.fWJ,this.gceQ(),A.di(u,u,B.w.j(0.35),u,u,u,u,u,u,B.c,u,u,B.k2,u,u,D.b5W,u,u,u,B.ch)),1)],w),B.l,u,B.e,B.i,0,u,u),u,u,8,8,u,u))
return new A.fJ(1.7777777777777777,A.aH(!1,B.a3,!0,B.rp,new A.an(B.a0,u,B.b2,B.t,v,u),B.aq,t,0,u,u,u,u,u,B.aj),u)}}
C.aNq.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.aVq.prototype={}
C.aVp.prototype={}
C.aTs.prototype={}
C.a_k.prototype={
S(){return new C.aAy()}}
C.aAy.prototype={
Y(){var w,v,u=this
u.a4()
u.a.toString
w=new A.ba("",B.b5,B.aP)
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.au(w,v)},
t(){var w=this.d
w===$&&A.c()
w.U$=$.ax()
w.P$=0
this.a3()},
KQ(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.L(x.q).f.T(D.fmq)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).O(new C.aVq(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.H,l=m?B.eg:B.c,k=A.l(20),j=A.r(n,D.c3L,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.l(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.m(n,n,m?B.aS:B.as,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bG,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bj,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.i,0,B.p),1)
j=A.A(A.a([j,B.bc,i,A.aI(n,n,n,n,A.X(B.cC,m?B.bu:B.bj,n,n,n,n),n,n,n,new C.d96(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.i,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bj,n,n,n,n,n,n,n,n,12,n,n,B.U,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bj,n,n,n,n,n,n,n,n,11,n,n,B.cE,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hsI(new C.d97(o),o.e)
u=o.d
u===$&&A.c()
t=A.m(n,n,m?B.aS:B.as,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jW:B.j5
r=A.l(12)
q=A.l(12)
p=m?B.ei:B.bP
t=A.aM(n,B.Z,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bA(n,new A.b6(4,r,B.dv),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d98(o),n,!1,n,n,!1,n,!0,n,B.ac,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,A_.KG,n,n,n,n)
u=m?B.aS:B.as
m=m?B.ei:B.bP
return A.eK(n,l,new A.cP(B.m1,A.cb(A.x(A.a([j,B.aO,i,B.aw,w,B.T,v,B.aO,t,B.bA,A.A(A.a([A.E(A.dU(B.dt,new C.d99(d),A.di(n,n,n,n,n,n,n,n,n,u,n,n,B.co,n,new A.b9(A.l(12),B.a1),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.av,A.E(A.bJ(D.fWZ,n,o.ga3p(),A.bo(B.aV,n,n,n,B.c,n,B.co,n,new A.b9(A.l(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.i,0,n,n)],h),B.E,n,B.e,B.P,0,B.p),B.t,n,B.y,n,B.Cz,n,n,B.ah),n),n,n,n,A1.CA,B.da,n,new A.b9(k,B.a1),n)}}
C.a_j.prototype={
S(){return new C.aAx()}}
C.aAx.prototype={
Y(){this.a4()
var w=$.ax()
this.d!==$&&A.aQ()
this.d=new A.au(B.ax,w)},
t(){var w=this.d
w===$&&A.c()
w.U$=$.ax()
w.P$=0
this.a3()},
KQ(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.L(x.q).f.T(D.fk1)
return}v=this.c
v.toString
A.a6(v,!1).O(new C.aVp(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.H,o=p?B.eg:B.c,n=A.l(20),m=A.r(q,D.c08,B.f,q,q,new A.o(B.bQ.j(0.15),q,q,A.l(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.as,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bG,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.m(q,q,p?B.bu:B.bj,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.i,0,B.p),1)
m=A.A(A.a([m,B.bc,l,A.aI(q,q,q,q,A.X(B.cC,p?B.bu:B.bj,q,q,q,q),q,q,q,new C.d92(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.i,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.l(12)
v=A.L(B.aV.j(0.25),B.r,1)
u=A.X(B.ap8,B.aV.j(0.9),q,q,q,18)
l=A.r(q,A.A(A.a([u,B.av,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.as,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.i,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bI,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.m(q,q,p?B.aS:B.as,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jW:B.j5
t=A.l(12)
s=A.l(12)
r=p?B.ei:B.bP
v=A.aM(q,B.Z,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bA(q,new A.b6(4,t,B.dv),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d93(this),q,!1,q,q,!1,q,!0,q,B.ac,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.l5,q,q,q,q)
w=p?B.aS:B.as
p=p?B.ei:B.bP
return A.eK(q,o,new A.cP(B.m1,A.cb(A.x(A.a([m,B.aO,l,B.aB,v,B.bA,A.A(A.a([A.E(A.dU(B.dt,new C.d94(d),A.di(q,q,q,q,q,q,q,q,q,w,q,q,B.co,q,new A.b9(A.l(12),B.a1),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.av,A.E(A.bJ(D.h32,q,this.ga3p(),A.bo(B.bQ,q,q,q,B.c,q,B.co,q,new A.b9(A.l(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.i,0,q,q)],k),B.E,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.Cz,q,q,B.ah),q),q,q,q,A1.CA,B.da,q,new A.b9(n,B.a1),q)}}
C.ZR.prototype={
S(){return new C.azg()}}
C.azg.prototype={
Y(){var w,v=this
v.a4()
w=$.ax()
v.d!==$&&A.aQ()
v.d=new A.au(B.ax,w)
v.e!==$&&A.aQ()
v.e=new A.au(new A.ba("1",B.b5,B.aP),w)
v.f!==$&&A.aQ()
v.f=new A.au(B.ax,w)
v.r!==$&&A.aQ()
v.r=new A.au(B.ax,w)},
t(){var w,v=this,u=v.d
u===$&&A.c()
w=u.U$=$.ax()
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
gK7(){var w,v=this.e
v===$&&A.c()
w=A.cW(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gakx(){var w=this.f
w===$&&A.c()
w=A.cW(B.a.i(w.a.a))
return w==null?0:w},
gb6q(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aQN(d){var w,v=B.j.D(this.gK7()+d,0.25,999999),u=B.j.iH(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.v(B.j.M(v))
else{u=B.j.ad(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb1(0,u)
this.m(new C.cHn())},
azQ(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jW:B.j5,s=A.l(14),r=A.l(14)
u=u?B.ei:B.bP
return A.bA(w,new A.b6(4,s,B.dv),w,B.bI,w,w,w,w,!0,new A.b6(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.l(14),B.aev),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
ceR(d,e,f){return this.azQ(d,e,f,null)},
KQ(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gakx()<=0){s.c.L(x.q).f.T(D.fok)
return}r=s.c
r.toString
v=s.gK7()
u=s.gakx()
t=s.gb6q()
A.a6(r,!1).O(new C.aTs(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.H,m=new C.um(n),l=n?B.eg:B.c,k=A.l(24),j=x.O,i=A.a([B.aV.j(0.22),B.bQ.j(0.14)],j),h=A.l(14)
i=A.r(o,D.bUo,B.f,o,o,new A.o(o,o,A.L(B.aV.j(0.35),B.r,1),h,o,new A.a8(B.a7,B.aa,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bG,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,12,o,o,B.cE,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1)
i=A.A(A.a([i,B.bc,h,A.aI(o,o,o,o,A.X(B.cC,n?B.bu:B.bj,o,o,o,o),o,o,o,new C.cHt(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.i,0,o,o)
h=p.d
h===$&&A.c()
v=A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.Z,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.azQ(m,"Item name (optional)","Lumber, paint, labor\u2026",B.PM),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,A_.KG,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,12,o,o,B.I,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jW:B.j5
t=A.l(14)
s=A.L(n?B.ei:B.bP,B.r,1)
r=A.aI(o,o,o,o,A.X(B.wR,n?B.aS:B.as,o,o,o,20),o,o,o,new C.cHu(p),o,o,o,o,o,B.ch)
q=p.e
q===$&&A.c()
q=A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.c5E,B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.ec,o,o,o,1,o,o,!1,"\u2022",o,new C.cHv(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.r(o,A.A(A.a([r,new A.a5(52,o,q,o),A.aI(o,o,o,o,A.X(B.i2,n?B.aS:B.as,o,o,o,20),o,o,o,new C.cHw(p),o,o,o,o,o,B.ch)],w),B.l,o,B.e,B.P,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,16,o,o,B.U,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.av,A.E(A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.azQ(m,"Amount","0.00",B.hC),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.ec,o,o,o,1,o,o,!1,"\u2022",o,new C.cHx(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.ao,o,o,o,o),1)],w),B.E,o,B.e,B.i,0,o,o)
t=x.gv
u=A.C(new A.N(D.dbB,new C.cHy(p,m),t),t.k("ak.E"))
i=A.a([i,B.bA,v,B.aB,h,B.T,s,B.ae,A.bX(B.bH,u,B.bt,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.u(i,A.a([B.W,A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.ceR(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cHz(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.l5,o,o,o,o)],w))}i.push(B.aO)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bQ.j(n?0.12:0.06)],j)
h=A.l(16)
v=A.L(B.aV.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,11,o,o,B.U,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gK7()===B.j.iH(p.gK7())?B.j.M(p.gK7()):p.gK7()
s=p.gb6q()
r=A.Bv(p.gakx())
i.push(A.r(o,A.A(A.a([A.E(A.x(A.a([u,B.aw,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1),C.bGb(p.gK7()*p.gakx(),B.b3,!1,B.u)],w),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a8(B.a7,B.aa,B.x,j,o,o),B.n),o,o,o,o,B.jq,o,o,o))
i.push(B.bA)
j=A.l(14)
h=n?B.ei:B.bP
h=A.di(o,o,o,o,o,o,o,o,o,o,o,o,B.co,o,new A.b9(j,B.a1),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dU(A.d("Cancel",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,o,o,o,B.U,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cHA(d),h),1),B.av,A.E(A.dh(D.asD,o,D.fZY,p.ga3p(),A.bo(B.aV,o,o,0,B.c,o,B.co,o,new A.b9(A.l(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.i,0,o,o))
return A.eK(o,l,new A.cP(B.M4,A.cb(A.x(i,B.al,o,B.e,B.P,0,B.p),B.t,o,B.y,o,Ah.t1,o,o,B.ah),o),o,o,o,B.On,B.da,o,new A.b9(k,B.a1),o)}}
C.a2s.prototype={
S(){return new C.byG()}}
C.byG.prototype={
Y(){var w,v,u=this
u.a4()
w=u.a.e
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,B.b5,B.aP),v)},
t(){var w=this.d
w===$&&A.c()
w.U$=$.ax()
w.P$=0
this.a3()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.H,q=r?B.eg:B.c,p=A.l(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.m(s,s,r?B.aS:B.as,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.m(s,s,r?B.aS:B.as,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jW:B.j5
v=A.aM(s,B.Z,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bA(s,new A.b6(4,A.l(12),B.dv),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fmU(t,d),s,!1,s,s,!1,s,!0,s,B.ac,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.ao,s,s,s,s)
u=A.E(A.dU(B.dt,new C.fmV(d),s),1)
r=A.bo(B.bQ,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eK(s,q,new A.D(B.Cz,A.x(A.a([o,B.aB,v,B.aO,A.A(A.a([u,B.av,A.E(A.bJ(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fmW(t,d),r),1)],w),B.l,s,B.e,B.i,0,s,s)],w),B.l,s,B.e,B.P,0,B.p),s),s,s,s,s,B.da,s,new A.b9(p,B.a1),s)}}
C.acO.prototype={
a7(){return"WorksheetFrameStyle."+this.b}}
C.Gr.prototype={
S(){return new C.byE(null,null)}}
C.byE.prototype={
Y(){var w,v=this
v.a4()
w=A.bl(null,D.bBj,null,1,null,v)
w.cL(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBl()},
gbCX(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bQ,B.b3],x.O)
case 2:return A.a([B.bv,B.aV,B.b3],x.O)
case 3:return A.a([B.aG,B.ci,B.jX],x.O)
case 4:return A.a([B.h_,B.bQ,B.fr],x.O)
case 0:return A.a([B.aV,B.bQ,B.b3],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.eo(A.c6(v,new C.fmS(this,new C.um(w.ax.a===B.H)),null),null)}}
C.az9.prototype={
S(){return new C.byF(null,null)}}
C.byF.prototype={
Y(){var w,v=this
v.a4()
w=A.bl(null,B.nG,null,1,null,v)
w.cL(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBm()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.fmT(this),null)}}
C.byD.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bn(new A.a1(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aN(w,w))
u=new A.aG($.S().r,B.ai,null,null,A.a([],x.v))
u.E(new A.ja(v))
w=A.K()
w.b=B.a9
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.an(v,w)
w=A.K()
w.b=B.a9
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.af(u,w)
w=A.xP(u)
t=A.a([],x.U)
w=new A.rA(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.bj(A.jK(y.B));--r
q=new A.BV(w,r)
w.iy()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aUm(d,q,r,o,0,0.2,4.2,0.92)
p.aUm(d,q,r,s,0.52,0.11,3.2,0.58)}},
aUm(d,e,f,g,h,i,j,k){var w,v,u,t=B.j.F(g+h,1)*f,s=A.hPp(e.a.a,e,t,t+f*i,!0),r=A.bEv(s.glX().a.getBounds())
$.S()
w=A.K()
w.b=B.a9
w.c=j
w.d=B.bw
w.f=!0
v=this.f
u=k*this.e
w.sav(new A.a8(B.a7,B.aa,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.IA,null).aK(0,r))
d.af(s,w)},
aE(d){return d.b!==this.b||d.d!==this.d}}
C.aPy.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aPz.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.um.prototype={}
C.aug.prototype={
S(){return new C.aGR()},
ge3(){return this.c}}
C.aGR.prototype={
Y(){var w=this
w.a4()
w.d=w.a.d
w.aic()},
t(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Mg(w,v)
this.a3()},
aic(){var w=0,v=A.j(x.H),u=this,t,s
var $async$aic=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bEE(t.c,t.d.a),$async$aic)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eVA(u,s))
return A.h(null,v)}})
return A.i($async$aic,v)},
QN(){var w=0,v=A.j(x.H),u=this,t,s
var $async$QN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eVr(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Mg(t,s),$async$QN)
case 2:if(u.c!=null)u.m(new C.eVs(u))
return A.h(null,v)}})
return A.i($async$QN,v)},
Rk(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Rk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.eVy(t,new C.um(p.ax.a===B.H)),s,null,!0,!0,x.T),$async$Rk)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a9M(q),$async$Rk)
case 6:case 5:t.m(new C.eVz(t,r))
w=7
return A.b(t.QN(),$async$Rk)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Rk,v)},
Wx(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.itH(r),$async$Wx)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eVm(t,new C.rs(B.o.v(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.QN(),$async$Wx)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wx,v)},
cjY(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hGU(t,new C.eVq(u),w,v)},
ac5(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.r(w,w,B.f,w,w,new A.o(w,w,new A.bG(new A.ay(v,2.5,B.r,-1),B.a1,B.a1,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b5I,w,w,B.n),w,22,w,w,w,w,w,22)},
ab7(d){return this.bP_(d)},
bP_(d){var w=0,v=A.j(x.H),u=this
var $async$ab7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eVp(u,d))
w=2
return A.b(u.QN(),$async$ab7)
case 2:return A.h(null,v)}})
return A.i($async$ab7,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.H,e=f?B.c4:B.i_,d=A.l(8),a0=A.X(Y.a2m,f?B.bu:B.bj,g,g,g,16),a1=x.p
a0=A.aP(!1,d,!0,new A.D(B.H3,A.A(A.a([a0,B.bn,A.d("Back to Projects",g,g,g,g,g,g,A.m(g,g,f?B.bu:B.bj,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.P,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eVB(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a_(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b2,B.t,A.a([A.bx(A.l(22),C.aSu(!0,A.l(22),1/0,B.qL,g,d,1/0),B.aq),A.ap(10,A.dh(D.bZ2,g,D.h1l,h.gb4m(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.h9,g,new A.b9(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.l(22)
w=x.V
v=A.a([new A.ab(0,B.G,B.aV.j(f?0.5:0.38),B.eR,22),new A.ab(-4,B.G,B.bQ.j(0.2),B.J,32)],w)
u=A.l(17)
t=A.L(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ab(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.l(16)
r=h.d
v=A.r(g,A.r(g,A.bx(s,new A.an(B.a0,g,B.b2,B.t,A.a([C.aSu(!0,A.l(16),1/0,B.Pd,g,r.c,1/0),new A.bN(new A.o(g,g,g,g,g,new A.a8(B.b0,B.b7,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bk,g,g),A.ap(g,h.ac5(!0),g,g,8,g,8,g),A.ap(g,A.cE0(h.ac5(!0),!0,!1),g,g,g,8,8,g),A.ap(8,A.cE0(h.ac5(!1),!1,!0),g,g,8,g,g,g),A.ap(8,A.cE0(h.ac5(!1),!0,!0),g,g,g,8,g,g),A.ap(10,A.dh(D.bV_,g,D.fVG,h.gb4m(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.h9,g,new A.b9(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.c7l,B.n),g,g,g,g,B.mg,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.m(g,g,f?B.aS:B.as,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.l(22)
u=x.O
u=f?A.a([D.bgC,B.oi,B.hh],u):A.a([B.b3,B.aV,B.bQ],u)
t=x.V
s=A.a([new A.ab(0,B.G,B.aV.j(f?0.45:0.35),B.eR,24)],t)
r=A.l(22)
p=A.ap(g,A.X(B.jH,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.l(20)
m=A.L(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.r(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.m(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.hi,g,g,g)],a1),B.l,g,B.e,B.i,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.m(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bGb(h.d.gxJ(),B.c,!0,B.u)],a1)
if(q>0)B.d.u(n,A.a([B.T,A.d("Sum of all budget line items",g,g,g,g,g,g,A.m(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cE,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.i,0,B.p),1)
n=A.l(14)
m=A.l(14)
l=B.c.j(0.12)
k=A.L(B.hB.j(0.75),B.r,1.6)
t=A.a([new A.ab(0,B.G,B.aG.j(0.28),B.cL,14)],t)
j=B.aG.j(0.22)
i=A.l(10)
u=A.r(g,A.bx(r,new A.an(B.a0,g,B.ad,B.t,A.a([p,new A.D(D.bGc,A.A(A.a([o,B.av,A.aH(!1,B.a3,!0,g,A.aP(!1,n,!0,A.eB(new A.D(U.wu,A.x(A.a([A.r(g,D.asc,B.f,g,g,new A.o(j,g,A.L(B.aG.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cp,g,g,g),B.fF,D.fKg],a1),B.l,g,B.e,B.P,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcjX(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.aj)],a1),B.l,g,B.e,B.i,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a8(B.aA,B.aE,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fJ(1.7777777777777777,d,g),B.aO,w,B.T,u,B.bA,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.m(g,g,f?B.aS:B.as,g,g,g,g,g,g,g,g,16,g,g,B.I,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b1,A.dh(At.a4f,g,D.fI7,h.gbDq(),A.bo(B.aV,g,g,g,B.c,g,B.hM,g,new A.b9(A.l(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.i,0,g,g),B.ae],a1)
w=h.d.d
if(w.length===0){w=f?B.eg:B.c
v=A.l(14)
u=A.L(f?B.ei:B.bP,B.r,1)
t=A.X(B.a2I,f?B.bu:B.bj,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.m(g,g,f?B.aS:B.as,g,g,g,g,g,g,g,g,g,g,g,B.U,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.r(g,A.x(A.a([t,B.W,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.m(g,g,f?B.bu:B.bj,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.i,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.qH,g,g,1/0))}else B.d.u(d,new A.N(w,new C.eVC(h,new C.um(f)),A.U(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.Cm,A.as(A.n5(g,f?B.bu:B.bj,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c4(g,e,A.bm(!0,A.x(A.a([new A.D(B.Cr,a0,g),A.E(A.cb(A.x(d,B.E,g,B.e,B.i,0,B.p),B.t,g,B.y,g,E.yV,g,g,B.ah),1)],a1),B.E,g,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bH6(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.eg:B.c,p=A.l(16),o=A.a([new A.ab(0,B.G,B.w.j(r?0.35:0.08),B.cL,12)],x.V),n=A.l(16),m=A.r(u,u,B.f,u,u,D.b8s,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.l(12)
l=A.r(u,A.X(s?B.ik:B.ho,B.b3,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bM
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.m(u,u,r?B.aS:B.as,u,u,u,u,u,u,u,u,15,u,u,B.I,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd_t()
v=A.Bv(d.d)
B.d.u(t,A.a([B.aw,A.d(w+" "+v,u,u,u,u,u,u,A.m(u,u,r?B.bu:B.bj,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.ba,B.P,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bQ.j(0.1)],x.O)
w=A.l(12)
k=A.r(u,C.bGb(d.c*d.d,B.b3,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a8(B.a7,B.aa,B.x,k,u,u),B.n),u,u,u,u,B.h9,u,u,u)
w=x.p
return A.r(u,A.bx(n,new A.ER(A.A(A.a([m,A.E(new A.D(B.am4,A.A(A.a([l,B.bc,t,B.af,k,A.aI(u,u,u,u,A.X(B.cC,(r?B.bu:B.bj).j(0.75),u,u,u,20),u,u,u,new C.eVn(this,d),u,u,u,u,u,B.ch)],w),B.l,u,B.e,B.i,0,u,u),u),1)],w),B.al,u,B.e,B.i,0,u,u),u),B.aq),B.f,u,D.b7j,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d9,u,u,u,u)}}
C.aeS.prototype={
EZ(d){return this.bQn(d)},
bQn(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$EZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pA(d,o,!1),$async$EZ)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
w=4
return A.b(A.bO(Ag.Ck,null,x.H),$async$EZ)
case 4:s=t.d
w=5
return A.b(C.fWO(!0,o,s),$async$EZ)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Hm(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$EZ)
case 6:p=f
w=7
return A.b(A.pz(o,!1),$async$EZ)
case 7:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$EZ,v)},
a0l(d){return this.cAm(d)},
cAm(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0l=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pA(d,s,!1),$async$a0l)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
A.hC(d,new C.aua(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pz(s,!1),$async$a0l)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0l,v)},
QO(d){return this.cwp(d)},
cwp(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$QO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(A.hC(d,D.aLX,!0,"NgmyWorksheetProjectScan",x.N),$async$QO)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bGc(s),$async$QO)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.L(x.q).f.T(D.fnr)
w=1
break}q=C.hie(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dM(p,x.H),$async$QO)
case 5:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$QO,v)},
a0m(d){return this.cIF(d)},
cIF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0m=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(C.bFI(),$async$a0m)
case 3:s=f
if(s==null){w=1
break}r=C.hie(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dM(q,x.H),$async$a0m)
case 4:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a0m,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.H,t=new C.um(u),s=w.d.d.length,r=u?B.eg:B.c,q=A.l(28),p=A.a([new A.ab(0,B.G,B.w.j(u?0.35:0.08),B.kF,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.wt,A.r(v,A.x(A.a([w.cyW(d,t,s),new A.D(D.bFB,A.x(A.a([w.b7l(t,"QR restore"),B.W,A.A(A.a([w.b2l(t,!0,B.jL,B.aG,B.aG,new C.eVE(w,d),"Show to scan","QR code"),B.av,w.azR(t,B.js,B.b8,B.bg,new C.eVF(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.i,0,v,v),B.dc,w.b7l(t,"Backup files"),B.W,A.A(A.a([w.azR(t,B.i3,B.aV,B.bQ,new C.eVG(w,d),"Full copy","Backup file"),B.av,w.azR(t,Q.zB,B.au,B.aQ,new C.eVH(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.i,0,v,v)],o),B.E,v,B.e,B.i,0,B.p),v)],o),B.l,v,B.e,B.P,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cyW(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eY,B.cJ,B.fY],k):A.a([B.b3,B.aV,B.bQ],k)
w=A.ap(l,A.X(B.v4,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.as(A.r(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.l(4),l,l,B.n),l,4,l,B.kx,l,l,l,36),l,l,l)
u=A.l(14)
t=A.L(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ab(0,B.G,B.w.j(0.2),B.cL,12)],x.V)
r=this.d
s=A.r(l,C.aSu(!0,A.l(13),64,D.bQf,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.m(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.I,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,I.abS,l,l,l)
r=C.bGb(r.gxJ(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.l(20)
o=A.L(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.r(l,new A.an(B.a0,l,B.ad,B.t,A.a([w,new A.D(D.bFY,A.x(A.a([v,A.A(A.a([s,B.ew,A.E(A.x(A.a([u,B.aw,t,B.T,A.A(A.a([r,B.af,A.r(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.m(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fN,l,l,l)],m),B.l,l,B.e,B.i,0,l,l)],m),B.E,l,B.e,B.i,0,B.p),1),A.aI(l,l,l,l,A.X(B.cC,B.c.j(0.85),l,l,l,l),l,l,l,new C.eVD(d),l,l,l,A.o3(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aUi,l,l,l,l),l,l)],m),B.E,l,B.e,B.i,0,l,l)],m),B.l,l,B.e,B.i,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.aA,B.aE,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b7l(d,e){var w=null,v=A.r(w,w,B.f,w,w,new A.o(B.aV,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.af,A.d(e.toUpperCase(),w,w,w,w,w,w,A.m(w,w,d.a?B.bu:B.bj,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
b2l(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.l(18),p=A.l(18),o=d.a,n=o?D.akE:B.aS
if(e)w=B.aG.j(o?0.45:0.35)
else{w=o?B.ei:B.bP
w=w.j(o?0.8:1)}w=A.L(w,B.r,e?1.5:1)
v=e?A.a([new A.ab(0,B.G,B.aG.j(0.12),B.cL,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.l(12)
s=A.L(h.j(0.35),B.r,1)
t=A.r(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.t3,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.m(r,r,o?B.aS:B.as,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aH(!1,B.a3,!0,r,A.aP(!1,q,!0,A.eB(new A.D(E.a0M,A.x(A.a([t,B.ae,u,B.bG,A.d(j,r,r,r,r,r,r,A.m(r,r,o?B.bu:B.bj,r,r,r,r,r,r,r,r,11,r,r,B.cE,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
azR(d,e,f,g,h,i,j){return this.b2l(d,!1,e,f,g,h,i,j)}}
C.aua.prototype={
S(){return new C.bnE()}}
C.bnE.prototype={
Y(){this.a4()
this.ag6()},
ag6(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$ag6=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bGd(p.c,p.d),$async$ag6)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eVh(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eVi(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ag6,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.H,f=g?B.BU:B.i_,e=i.d
e=e==null?h:B.a.a_(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aI(h,h,h,h,A.X(B.eM,g?B.ab:B.an,h,h,h,18),h,h,h,new C.eVj(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.m(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.tJ],u),B.l,h,B.e,B.i,0,h,h)
t=A.l(24)
s=x.O
s=g?A.a([B.eY,B.cJ,B.fY],s):A.a([B.b3,B.aV,B.bQ],s)
r=x.V
q=A.a([new A.ab(0,B.G,B.aV.j(g?0.4:0.3),B.eR,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dq,B.K,h,h)
p=C.bGb(p.gxJ(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.l(20)
l=v===1?"item":"items"
s=A.r(h,A.x(A.a([o,B.am,A.A(A.a([p,B.af,A.r(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.m(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fN,h,h,h)],u),B.l,h,B.ba,B.i,0,h,h)],u),B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a8(B.aA,B.aE,B.x,s,h,h),B.n),h,h,h,h,E.a17,h,h,1/0)
t=g?D.brR:B.c
q=A.l(24)
p=A.L(w?B.aG.j(0.4):B.aV.j(0.3),B.r,1)
r=A.a([new A.ab(0,B.G,B.w.j(g?0.25:0.06),B.dp,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.VB,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.euA)
else{m=A.l(20)
l=A.L(B.bi,B.r,1)
o.push(A.r(h,A.qf(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bS,h,h,h))}}o.push(B.aO)
n=w?B.aG:B.aV
n=n.j(g?0.15:0.1)
m=A.l(12)
l=A.L((w?B.aG:B.aV).j(0.35),B.r,1)
k=w?B.Ps:B.Q0
k=A.X(k,w?B.aG:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.r(h,A.A(A.a([k,B.av,A.E(A.d(j,h,h,h,h,h,h,A.m(h,h,g?B.ab:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.i,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.hM,h,h,h))
return A.c4(h,f,A.bm(!0,A.x(A.a([new A.D(Ad.Oz,e,h),A.E(A.cb(A.x(A.a([s,B.aO,A.r(h,A.x(o,B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.uG,h,h,1/0)],u),B.l,h,B.e,B.i,0,B.p),B.t,h,B.y,h,E.anc,h,h,B.ah),1)],u),B.l,h,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.auf.prototype={
S(){return new C.aGQ(A.A_(B.NS,B.o9,B.vc))}}
C.aGQ.prototype={
t(){this.d.t()
this.a3()},
aOL(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j3(w,d)},
cfJ(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s=C.ir0(t)
if(s!=null){this.aOL(s)
return}r=C.hxg(t)
if(r!=null)q=A.cS(r,p,0)
else q=!1
if(q){this.aOL(B.a.i(B.a.b2(r,B.a.co(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eQ(A.a([A.aI(t,t,t,t,A.X(u.f?B.uR:A8.PA,t,t,t,t,t),t,t,t,new C.eVl(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.BU,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fVy,t,t,t,1,t,!0),q=A.zZ(u.d,B.c0,u.gcfI()),p=A.l(28)
p=A.as(A.r(t,t,B.f,t,t,new A.o(t,t,A.L(B.aV,B.r,3),p,A.a([new A.ab(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.l(16)
return A.c4(r,B.w,new A.an(B.a0,t,B.b2,B.t,A.a([q,p,A.ap(32,A.r(t,D.fUj,B.f,t,t,new A.o(w,t,A.L(B.aV.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jq,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aLL.prototype={
a7(){return"_WorksheetTab."+this.b}}
C.P8.prototype={
S(){return new C.aGS(D.adP,A.a([],x.D))},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aGS.prototype={
gcGr(){return J.bHk(this.e,0,new C.eW3())},
Y(){this.a4()
$.aW.c1$.push(this)
this.wn()},
t(){$.aW.hV(this)
this.a3()},
jm(d){if(d===B.fX)this.wn()},
wn(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wn=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.DF(q.a.c).dg(0,B.k1),$async$wn)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eW_(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eW0(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wn,v)},
Iu(d){return this.bN7(d)},
bN6(){return this.Iu(null)},
bN7(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Iu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.itJ(l,d),$async$Iu)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
r=s.a
q=s.b
p=new C.lE(l,r,q,D.dnG,new A.V(Date.now(),0,!1))
w=4
return A.b(C.Mg(t.a.c,p),$async$Iu)
case 4:o=f
w=5
return A.b(t.wn(),$async$Iu)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.L(x.q).f.T(D.fkv)
w=1
break}n=J.aT(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gR(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.L(q).f.T(D.fmk)
else n.L(q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.F2(m)
case 1:return A.h(u,v)}})
return A.i($async$Iu,v)},
F2(d){return this.cjJ(d)},
cjJ(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$F2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hC(s,new C.aug(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$F2)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Mg(u.a.c,t),$async$F2)
case 5:case 4:w=6
return A.b(u.wn(),$async$F2)
case 6:return A.h(null,v)}})
return A.i($async$F2,v)},
w8(d){return this.c2s(d)},
c2s(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$w8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bFI(),$async$w8)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hC(r,D.aLX,!0,"NgmyWorksheetProjectScan",x.N),$async$w8)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bGc(q),$async$w8)
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
r.T(A.b3(null,null,null,null,null,B.t,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hie(s)
w=15
return A.b(C.Mg(t.a.c,p),$async$w8)
case 15:o=f
w=16
return A.b(t.wn(),$async$w8)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.L(x.q).f.T(D.fmp)
w=1
break}r.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.F2(p)
case 1:return A.h(u,v)}})
return A.i($async$w8,v)},
Ot(d){return this.bLK(d)},
bLK(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ot=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cg(null,null,!0,null,new C.eVL(d),s,null,!0,!0,x.y),$async$Ot)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.p8(t.a.c,A.a([],x.D)),$async$Ot)
case 6:w=7
return A.b(t.wn(),$async$Ot)
case 7:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fkA)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ot,v)},
cjW(d){var w=this.c
w.toString
A.bU(B.L,null,new C.eVU(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b7Y(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.l(16),p=g.a
if(p)w=B.jW
else w=B.c
v=A.l(16)
u=A.L(p?B.ei:B.bP,B.r,1)
t=d.j(0.14)
s=A.l(12)
s=A.r(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bV,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.m(r,r,p?B.aS:B.as,r,r,r,r,r,r,r,r,14,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aH(!1,B.a3,!0,r,A.aP(!1,q,!0,A.r(r,A.x(A.a([s,B.ae,t,B.bG,A.d(h,r,r,r,r,r,r,A.m(r,r,p?B.bu:B.bj,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.uD,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
a0R(d,e){return this.cjK(d,e)},
cjK(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0R=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(B.L,null,new C.eVP(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a0R)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hGU(r,new C.eVQ(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Ov(d,e),$async$a0R)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0R,v)},
b4Z(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.l(12)
s=A.r(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bV,u,u,u)
if(d)t=B.ay
else t=h.a?B.aS:B.as
t=A.d(j,u,u,u,u,u,u,A.m(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.m(u,u,w?B.bu:B.bj,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.i,0,B.p),1)
return A.aH(!1,B.a3,!0,u,A.aP(!1,u,!0,new A.D(B.Cy,A.A(A.a([s,B.bc,t,A.X(B.eI,w?B.bu:B.bj,u,u,u,u)],v),B.l,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj)},
cqF(d,e,f,g,h,i){return this.b4Z(!1,d,e,f,g,h,i)},
Ov(d,e){return this.bLU(d,e)},
bLU(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ov=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lp(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Ov)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bEp(t.a.c,d.a),$async$Ov)
case 6:w=7
return A.b(t.wn(),$async$Ov)
case 7:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ov,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.H,m=new C.um(n),l=n?B.c4:B.i_
if(p.f)n=D.beo
else{w=A.aF(d,B.dN,x.w).w
v=p.bGd(m)
u=p.c1w(m)
t=p.gbDj()
if(n)s=B.jW
else s=B.c
r=A.l(13)
q=x.p
t=A.a([v,B.ae,u,B.aO,new C.Gr(A.r(o,A.A(A.a([p.aDp(P.Pc,"Projects",m,D.adP),p.aDp(B.uM,"Cashier",m,D.b2c),p.aDp(B.Hn,"Family Tree",m,D.hHL)],q),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(s,o,o,r,o,o,B.n),o,o,o,o,o,o,o,o),14,B.eA,0.95,t,o),B.bA],q)
v=p.d
if(v===D.adP){v=J.ad(p.e)
B.d.u(t,A.a([A.A(A.a([A.d("Projects ("+v+")",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,16,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b1,new C.az9(p.gaT7(),o)],q),B.l,o,B.e,B.i,0,o,o),B.aB,p.cqH(m)],q))}else{n=p.a
if(v===D.b2c)t.push(new C.aq5(n.c,m,o))
else{v=p.r
t.push(new C.arj(n.c,n.d,n.e,n.f,new C.eW6(p),new C.eW7(p),new A.bt(v,x.b4)))}}n=A.cb(A.x(t,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,new A.R(20,w.r.b+8,20,32),o,o,B.ah)}return A.c4(o,l,A.bm(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bGd(d){var w=null,v=A.l(8),u=d.a,t=A.X(Y.a2m,u?B.bu:B.bj,w,w,w,16)
return A.aP(!1,v,!0,new A.D(B.ky,A.A(A.a([t,B.bn,A.d("Back to Profile",w,w,w,w,w,w,A.m(w,w,u?B.bu:B.bj,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.P,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eVI(this),w,w,w,w,w,w,w)},
gbDj(){switch(this.d.a){case 0:return D.acX
case 1:return D.hwc
case 2:return D.acY}},
c1w(d){var w=null,v=A.l(15),u=A.a([new A.ab(0,B.G,B.aV.j(0.35),B.cz,16)],x.V),t=x.p,s=A.A(A.a([A.r(w,D.c_Z,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bc,D.bKB,A.aH(!1,B.a3,!0,w,A.aP(!1,A.l(12),!0,A.r(w,D.bYl,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eVM(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)],t),B.E,w,B.e,B.i,0,w,w),r=B.b3.j(0.55),q=A.l(12)
return new C.Gr(A.r(w,A.x(A.a([new A.D(B.GW,s,w),A.r(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.m(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aw,A.d(A.Bv(this.gcGr()),w,w,w,w,w,w,D.fEj,w,w,w)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.uC,B.jq,w,w,1/0)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hwb,w)},
aDp(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.l(12),r=t?B.aV:B.L,q=A.l(12),p=t?A.L(B.c.j(0.55),B.r,2):A.L(B.L,B.r,2),o=t?A.a([new A.ab(0.5,B.G,B.aV.j(0.42),B.cL,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bu:B.bj
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bu:B.bj
return A.E(A.aH(!1,B.a3,!0,u,A.aP(!1,s,!0,A.cT(u,A.A(A.a([w,B.e8,new A.dm(1,B.cq,A.d(e,u,1,B.a2,u,u,u,A.m(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.ba,B.i,0,u,u),u,u,B.cw,new A.o(r,u,p,q,o,u,B.n),B.iO,u,u,u,u,B.H4,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eW2(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),1)},
cqH(d){var w,v,u,t,s,r,q=this,p=null
if(J.ct(q.e)){w=d.a
v=w?B.eg:B.c
u=A.l(15)
t=A.r(p,D.bYr,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ab(2,B.G,B.aV.j(0.5),B.eR,28)],x.V),D.c9Q,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.m(p,p,w?B.aS:B.as,p,p,p,p,p,p,p,p,18,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Gr(A.r(p,A.x(A.a([t,B.dc,s,B.T,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.m(p,p,w?B.bu:B.bj,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.e3,A.A(A.a([A.E(q.aUI(B.js,"Scan QR",new C.eVX(q),d),1),B.av,A.E(q.aUI(Q.zB,"Upload file",new C.eVY(q),d),1)],r),B.l,p,B.e,B.i,0,p,p),B.aB,A.bJ(D.h50,p,q.gaT7(),A.bo(B.aV,p,p,p,B.c,B.hb,p,p,new A.b9(A.l(12),B.a1),p,p,p))],r),B.l,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bH2,1.05,D.acX,p)}w=J.b7(q.e,new C.eVZ(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Gr(A.x(w,B.l,p,B.e,B.i,0,B.p),16,B.bV,1,D.acX,p)},
aUI(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.l(12),t=A.l(12),s=A.l(12),r=A.L(B.aV.j(0.45),B.r,1)
return A.aH(!1,B.a3,!0,u,A.aP(!1,t,!0,A.r(w,A.x(A.a([A.X(d,B.b3,w,w,w,26),B.T,A.d(e,w,w,w,w,w,w,D.fCv,B.K,w,w)],x.p),B.l,w,B.e,B.P,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.alY,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)},
cqG(d,e){var w,v,u=null,t=e.a,s=t?B.eg:B.c,r=A.l(14),q=A.L(t?B.ei:B.bP,B.r,1),p=A.a([new A.ab(0,B.G,B.w.j(t?0.35:0.08),B.ev,10)],x.V),o=A.l(14),n=t?B.bu:B.bj
n=A.bx(B.XN,new A.fJ(1.7777777777777777,C.aSu(!0,B.fk,1/0,P.Pc,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.m(u,u,t?B.aS:B.as,u,u,u,u,u,u,u,u,15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.aw,A.d(""+d.d.length+" budget items \xb7 "+A.Bv(d.gxJ()),u,u,u,u,u,u,D.fAs,u,u,u)],w),B.E,u,B.e,B.i,0,B.p),1)
return A.r(u,A.aH(!1,B.a3,!0,u,A.aP(!1,o,!0,A.x(A.a([n,new A.D(B.bI,A.A(A.a([v,A.aI(u,u,u,u,A.X(Ak.a3r,t?B.bu:B.bj,u,u,u,u),u,u,u,new C.eVV(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.i,0,u,u),u)],w),B.E,u,B.e,B.i,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eVW(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.en,u,u,u,1/0)}}
C.bAr.prototype={}
C.rs.prototype={
aj(){var w=this,v=w.c,u=w.d
return A.J(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd_t(){var w,v,u,t,s=this.c
if(s===B.j.iH(s))w=B.o.v(B.j.M(s))
else{v=B.j.ad(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lE.prototype={
gxJ(){return B.d.cF(this.d,0,new C.cGI())},
aj(){var w=this,v=w.d,u=A.U(v).k("N<1,a9<n,@>>")
v=A.C(new A.N(v,new C.cGH(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bfl(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lE(w.a,w.b,v,u,w.e)},
bf3(d){return this.bfl(d,null)},
TB(d){return this.bfl(null,d)}}
C.IA.prototype={
a7(){return"FamilyGender."+this.b}}
C.hZ.prototype={
aj(){var w=this
return A.J(["id",w.a,"name",w.b,"gender",C.hCm(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aG7(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hZ(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.aml.prototype={
a7(){return"FamilyTreeAccessRole."+this.b}}
C.kY.prototype={
gaqw(){var w=this.f
return new A.Y(w,new C.bT4(),A.U(w).k("Y<1>")).gJ(0)},
aj(){var w=this,v=w.f,u=A.U(v).k("N<1,a9<n,@>>")
v=A.C(new A.N(v,new C.bT3(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.ijh(w.y),"games",w.z],x.N,x.z)},
x4(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kY(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bfk(d,e){var w=null
return this.x4(w,w,w,d,e,w,w,w,w)},
cPP(d,e,f,g,h,i,j){return this.x4(d,e,null,f,g,h,i,j,null)},
aGc(d,e){var w=null
return this.x4(w,w,w,w,d,w,w,e,w)},
cPR(d,e,f,g,h,i,j,k){return this.x4(d,e,null,f,g,h,i,j,k)},
cOk(d){var w=null
return this.x4(w,w,w,w,w,w,w,d,w)},
cOI(d){var w=null
return this.x4(w,w,w,w,w,w,w,w,d)},
beY(d){var w=null
return this.x4(w,w,d,w,w,w,w,w,w)},
aFY(d){var w=null
return this.x4(w,w,w,w,w,d,w,w,w)},
cPm(d,e,f){var w=null
return this.x4(w,d,w,w,e,w,w,f,w)},
cO7(d){var w=null
return this.x4(w,w,w,d,w,w,w,w,w)},
cOU(d,e){var w=null
return this.x4(d,w,w,w,w,w,e,w,w)}}
C.cGJ.prototype={
a7(){return"WrapAlignment."+this.b}}
C.cGK.prototype={
a7(){return"WrapCrossAlignment."+this.b}}
C.aIX.prototype={}
C.bb1.prototype={
ak(d){this.a=d.a
this.b=d.b},
cZ(d){var w=new C.bb1()
w.a=this.a
w.b=this.b
return w},
v(d){return A.b4(this).v(0)+" first:"+this.a+" last:"+this.b}}
C.bb0.prototype={
gwV(){return!0},
gGz(){return this.z.b<this.b.length},
aWo(d){switch(0){case 0:return d.a.c}},
aW4(d){switch(0){case 0:return d.a.d}},
bVY(d,e){switch(0){case 0:return new A.hU(d,e)}},
bVl(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hf(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iS(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Ij(b4)
switch(0){case 0:v=b5.b
u=new A.kV(0,v,0,1/0)
t=w===B.Vt
break}s=A.a([],x.gZ)
r=A.T(x.gF,x.S)
for(b3=b1.z,q=B.d.fO(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.I)(q),++h){g=q[h]
g.hf(b4,u,!0)
f=b1.aWo(g)
f.toString
e=b1.aW4(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aIX(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aIX(k,j,i))}d=s.length
switch(0){case 0:q=b5.cA(new A.hU(m,l))
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
for(q=B.d.fO(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.I)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aWo(g)
e=b1.aW4(g)
e.toString
a9=b1.bVl(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bVY(a6,a3+a9)
b0=g.a
g.a=new A.iS(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fV(d){var w,v,u,t,s,r=this
r.lC(d)
w=d.b
w.is()
v=A.dr()
u=r.a
v.ej(u.a,u.b,0,1)
w.po(0,v)
for(u=r.z,u=B.d.dt(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.I)(u),++s)u[s].fV(d)
w.nA(0)},
H4(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
is(){return this.z}}
C.byH.prototype={}
var z=a.updateTypes(["aB<~>()","Q(hZ)","~()","Q(kY)","Q(nw)","a9<n,@>(kY)","H(kY,kY)","H(hZ,hZ)","n(hZ)","kY(a9<@,@>)","Q(lE)","nw(a9<@,@>)","a9<n,@>(nw)","Q(uX)","uX()","H(hZ)","ai<hZ>()","Q(zI)","a0m(Z)","n?(hZ)","eL<n?>(hZ)","aB<~>(lE)","Q(rs)","a9<n,@>(hZ)","hZ(a9<@,@>)","H(lE,lE)","Q(aga)","~(bd)","v(oL)","H(H,aae)","Q(qK<H>)","~(qK<H>)","U9(Z)","Q(MV)","Q(uW)","~(hZ)","n(n)","Wu(Z)","U8(Z)","aex(Z)","a_i(Z)","hZ(hZ)","cK(bB<n,GH>)","cK(L2)","a_M(Z)","H?(hZ)","hZ()","Q(L2)","D(hZ)","~(IA)","a_I(Z)","v(IA,n,a_)","Q(ag3)","bB<n,ai<a9<n,@>>>(n,ai<nw>)","a_K(Z)","+count,id,name(H,n,n)(kY)","n(kY)","a0G(Z)","a0H(Z)","Q(lY)","lY()","ZR(Z)","a2s(Z)","a_k(Z)","a_j(Z)","~(H)","~(n,lt?)","v(rs)","aeS(Z)","~(mm)","aB<~>([n?])","G(G,lE)","v(lE)","G(G,rs)","a9<n,@>(rs)","rs(a9<@,@>)","ai<lt>()","uW()","n(V)","lE(a9<@,@>)","cu(Iz)","n(lE)","a9<n,@>(lE)","H(nw,nw)","kY(a9<n,@>)","kY(kY)"])
C.fPi.prototype={
$1(d){return d.a+" "+d.b},
$S:125}
C.fPh.prototype={
boC(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.rj(s,d,B.i5,"book",E.GJ),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.W(r!=null&&A.M3(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.boC(d)},
$S:297}
C.fPj.prototype={
$1(d){return d.b},
$S:125}
C.fYV.prototype={
$1(d){var w=null
return A.eK(w,B.L,new H.Qz(this.a,this.b,w),w,w,0,B.a0N,B.da,w,w,w)},
$S:47}
C.fCm.prototype={
$1(d){return d!=null},
$S:215}
C.fCn.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:215}
C.fCs.prototype={
$1(d){if(this.a)return new A.p(d.a*520,d.b*160)
return d},
$S:165}
C.fN1.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fe(d,w,w,w,A.hf(w,B.tA,w,w,w,w,w,w,w,B.dH,w,w,10.5,w,B.eB,w,!0,w,w,w,w),w),u=f?B.eB:B.wD
return new A.od(D.bCm,A.ab3(A.a([new A.fY(130,w,v),new A.zH(1,B.Hg,A.fe(e,w,w,w,A.hf(w,g==null?D.ewZ:g,w,w,w,w,w,w,w,B.dH,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.yz,B.lS))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1961}
C.fN0.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.w5(999)
f=A.xH(A.lT(h,A.fe("Cashier",h,h,h,A.hf(h,D.Aw,h,h,h,h,h,h,h,B.dH,h,h,10,h,B.eB,h,!0,h,h,h,h),h),h,new A.kW(D.ewQ,h,f,B.i9,h),h,h,D.bCS,h))
w=A.xH(A.fe("Debt receipt",h,h,h,A.hf(h,h,h,h,h,h,h,h,h,B.dH,h,h,22,h,B.eB,h,!0,h,h,h,h),h))
v=A.xH(A.fe(C.xp(new A.V(Date.now(),0,!1),!0),h,h,h,D.abs,h))
u=A.w5(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fe(s,h,h,h,A.hf(h,h,h,h,h,h,h,h,h,B.dH,h,h,14,h,B.eB,h,!0,h,h,h,h),h)
r=A.fe("Person who owes",h,h,h,D.abs,h)
q=A.w5(10)
p=x.Z
u=A.lT(h,A.zA(A.a([s,new A.fY(h,2,h),r,new A.fY(h,10,h),A.lT(h,A.zA(A.a([A.fe("Amount owed",h,h,h,D.abs,h),new A.fY(h,2,h),A.fe(A.Bv(t.c),h,h,h,A.hf(h,D.Aw,h,h,h,h,h,h,h,B.dH,h,h,20,h,B.eB,h,!0,h,h,h,h),h)],p),B.rS,B.lS),h,new A.kW(B.pO,h,q,B.i9,h),h,h,D.bC2,1/0)],p),B.rS,B.lS),h,new A.kW(E.aNj,h,u,B.i9,h),h,h,D.bE3,1/0)
q=new A.nW(D.ewT,0.9,B.la)
r=A.w5(12)
s=i.c
o=s.$2("Original due",C.xp(t.r,!1))
n=s.$2("Current due",C.xp(t.f,!1))
m=i.d
l=new A.nW(m,1.1,B.la)
k=A.w5(8)
j=i.a
k=A.a([o,n,new A.fY(h,6,h),A.lT(h,A.xH(A.fe(t.gaNj(),h,h,h,A.hf(h,m,h,h,h,h,h,h,h,B.dH,h,h,11,h,B.eB,h,!0,0.5,h,h,h),h)),h,new A.kW(h,new A.q2(l,l,l,l),k,B.i9,h),h,h,D.bD_,1/0),new A.fY(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.Aw))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.Aw))
else{n=A.fe("Missed days ("+n+")",h,h,h,A.hf(h,B.tA,h,h,h,h,h,h,h,B.dH,h,h,10.5,h,B.eB,h,!0,h,h,h,h),h)
m=A.U(o).k("N<1,TI>")
o=A.C(new A.N(o,new C.fN_(),m),m.k("ak.E"))
B.d.u(k,A.a([new A.fY(h,4,h),n,new A.fY(h,6,h),new C.bb0(5,5,new C.bb1(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.u(k,A.a([new A.fY(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fY(h,8,h),w,new A.fY(h,3,h),v,new A.fY(h,16,h),u,new A.fY(h,10,h),A.lT(h,A.zA(k,B.yz,B.lS),h,new A.kW(h,new A.q2(q,q,q,q),r,B.i9,h),h,h,B.am8,1/0)],p)
w=j.a
if(w!=null){v=new A.nW(B.JR,1,B.la)
B.d.u(f,A.a([new A.fY(h,16,h),A.fe("Debtor signature",h,h,h,A.hf(h,B.tA,h,h,h,h,h,h,h,B.dH,h,h,10,h,B.eB,h,!0,h,h,h,h),h),new A.fY(h,6,h),A.lT(h,new A.IU(w,B.XZ,h,h),h,new A.kW(h,new A.q2(v,v,v,v),A.w5(6),B.i9,h),82,h,B.Ox,1/0)],p))}f.push(new A.fY(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fe(w,h,h,h,D.fsI,h))
f.push(new A.fY(h,18,h))
f.push(A.xH(A.fe("NGMY.ORG",h,h,h,A.hf(h,D.Aw,h,h,h,h,h,h,h,B.dH,h,h,14,h,B.eB,h,!0,1.8,h,h,h),h)))
return f},
$S:408}
C.fN_.prototype={
$1(d){var w=null,v=new A.nW(D.JS,0.7,B.la),u=A.w5(999)
return A.lT(w,A.fe(C.xp(d,!1),w,w,w,A.hf(w,D.JS,w,w,w,w,w,w,w,B.dH,w,w,9.5,w,B.eB,w,!0,w,w,w,w),w),w,new A.kW(w,new A.q2(v,v,v,v),u,B.i9,w),w,w,D.bIu,w)},
$S:1962}
C.c8l.prototype={
$1(d){var w=null,v=B.bD.j(0.08),u=A.l(999),t=A.L(B.bD.j(0.28),B.r,1)
return A.r(w,A.d(C.xp(d,!1),w,w,w,w,w,w,D.fzU,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eL,w,w,w)},
$S:1963}
C.fZr.prototype={
$1(d){var w=null,v=A.aF(d,B.c1,x.w).w,u=A.l(26),t=A.aI(w,w,w,w,D.c0X,w,w,w,new C.fZo(d),w,w,w,w,w,B.ch),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eK(w,B.L,new A.cP(new A.aY(0,380,0,v.a.b*0.9),A.aH(!1,B.a3,!0,u,new A.D(B.a0A,A.x(A.a([new A.bL(B.aa,w,w,t,w),new A.dm(1,B.cq,A.cb(A.x(A.a([new A.eo(new C.b01(r,w),s),B.W,A.A(A.a([A.E(A.en(B.zJ,D.h1g,new C.fZp(s,r,d),A.di(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fh,w,new A.b9(A.l(14),B.a1),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.af,A.E(A.dh(B.a45,w,D.fYG,new C.fZq(r,d),A.bo(B.b3,w,w,w,B.c,w,B.fh,w,new A.b9(A.l(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.i,0,w,w)],p),B.l,w,B.e,B.P,0,B.p),B.t,w,B.y,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.P,0,B.p),w),B.f,B.as,0,w,w,w,w,w,B.aj),w),w,w,0,Ap.a1_,B.da,w,w,w)},
$S:47}
C.fZo.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fZp.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aW.ap$.x.h(0,t.a)
m=m==null?null:m.gbg()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.mg(2.5),$async$$0)
case 4:w=3
return A.b(e.hr(B.hq),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eU(B.dS.gaV(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.aB(o,0,32)
w=5
return A.b(A.ts(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fZq.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fTI(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.L(x.q).f
s.T(A.b3(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fZj.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.b
return A.eK(w,B.as,A.x(A.a([new A.D(D.bDS,A.A(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.ni,w,w,w),1),A.aI(w,w,w,w,B.lp,w,w,w,new C.fZh(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),w),new A.dm(1,B.cq,new A.D(B.f5,A.bx(A.l(14),A.fU(t,B.A,w,w,B.ck,B.dE,!1,w,!1,w,w),B.aq),w),w),new A.D(B.Oc,new A.a5(1/0,w,A.dh(B.oK,w,D.aXD,new C.fZi(t,this.c,d),A.bo(B.b3,w,w,w,B.c,w,w,w,new A.b9(A.l(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.P,0,B.p),w,w,w,B.Oo,B.da,w,new A.b9(v,B.a1),w)},
$S:47}
C.fZh.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fZi.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ts(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fZv.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.a,s=this.b
return A.eK(w,B.as,new A.D(D.bE_,A.x(A.a([A.A(A.a([D.bJG,A.aI(w,w,w,w,B.lp,w,w,w,new C.fZt(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),B.T,new A.eo(A.bx(A.l(14),A.r(w,A.b2(w,w,w,new C.bde(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ae,new A.a5(1/0,w,A.dh(B.oK,w,D.aXD,new C.fZu(t,s,d),A.bo(B.b3,w,w,w,B.c,w,w,w,new A.b9(A.l(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.P,0,B.p),w),w,w,w,w,B.da,w,new A.b9(v,B.a1),w)},
$S:47}
C.fZt.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fZu.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aW.ap$.x.h(0,t.a)
n=n==null?null:n.gbg()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.mg(2.5),$async$$0)
case 4:w=3
return A.b(e.hr(B.hq),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.aB(p,0,32)
r=J.eU(B.dS.gaV(s))
w=5
return A.b(A.ts(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fHh.prototype={
$1(d){return d.a===this.a},
$S:258}
C.dQQ.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dQB.prototype={
bnQ(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.eg:B.c
s=u.a
w=2
return A.b(A.bU(t,null,new C.dQE(s,q,e),p,!0,!0,!1,B.K8,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dQF(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bnQ(d,e)},
$S:1964}
C.dQE.prototype={
$1(d){var w,v=null,u=this.c===B.xa,t=u?D.duA:D.dq9
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.m(v,v,w.a.d.a?B.aS:B.as,v,v,v,v,v,v,v,v,15,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(O.amE,A.x(A.a([u,B.aw,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.m(v,v,w.a.d.a?B.bu:B.bj,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ae,A.is(!0,v,v,B.y,D.fja,new C.dQD(this.a,w,t,d),t.length,v,B.dZ,B.ah,!0)],x.p),B.al,v,B.e,B.P,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:25}
C.dQD.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.l(14)
if(q)w=B.cJ.j(0.14)
else w=t.b.a.d.a?B.a_:B.aS
v=A.l(14)
if(q)u=B.cJ
else u=(t.b.a.d.a?B.bu:B.bj).j(0.16)
u=A.L(u,B.r,q?1.6:1)
return A.aP(!1,p,!0,A.r(B.A,C.b00(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dQC(t.d,r),s,s,s,s,s,s,s)},
$S:194}
C.dQC.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dQF.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dQz.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:87}
C.dQA.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cG(B.cw,e,v)
return new A.d2(e,!1,A.ij(B.A,A.as(A.aH(!1,B.a3,!0,v,new A.dY(new C.dQy(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.aj),v,v,v),v,new A.bg(t,new A.br(0.96,1,u),u.k("bg<bQ.T>"))),v)},
$S:34}
C.dQy.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aF(d,B.c1,x.w).w,i=l.b,h=i.a.d.a,g=h?B.eg:B.c,f=A.l(14),e=A.L((h?B.bu:B.bj).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.as,k,k,k,k,k,k,k,k,16,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.l(8)
u=x.p
v=A.A(A.a([w,A.aP(!1,v,!0,new A.D(B.eA,A.X(B.cC,i.a.d.a?B.bu:B.bj,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dQj(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.i,0,k,k)
w=l.d
t=A.m(k,k,i.a.d.a?B.aS:B.as,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aVe("Name")
r=l.a
q=r.d==null?k:new C.dQk(r,l.e,a0)
p=A.l(20)
o=i.a.d.a?B.br:B.m8
n=A.L(B.cJ.j(0.35),B.r,1)
m=r.d
t=A.aM(k,B.Z,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.bfd(new A.D(B.fn,A.aP(!1,p,!0,A.r(B.A,C.b00(m==null?"\ud83d\udc64":A.fNQ(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cp,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.l5,k,B.abh,k,k)
v=A.a([v,B.ae,t,B.T,A.d("Gender (required)",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bj,k,k,k,k,k,k,k,k,11.5,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.A(A.a([A.E(i.aVV("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dQl(r,a0),r.d===B.xa),1),B.af,A.E(i.aVV("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dQq(r,a0),r.d===B.a8_),1)],u),B.l,k,B.e,B.i,0,k,k)],u)
if(r.d!=null)B.d.u(v,A.a([B.T,new A.bL(B.a7,k,k,A.hs(D.c_c,D.h_y,new C.dQr(r,l.e,a0),A.fv(k,k,k,k,k,k,k,k,k,k,k,B.cJ,k,k,k,k,k,k,k,k,k,k,k,k,k,B.ch)),k)],u))
v.push(B.W)
t=A.m(k,k,i.a.d.a?B.aS:B.as,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.v_(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aVf("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ak,k,k,s,k,k,B.ec,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ao,k,k,k,k))
v.push(B.W)
t=i.a.d.a
s=t?B.a_:B.aS
q=A.l(10)
p=A.l(10)
o=A.l(10)
n=A.L((t?B.bu:B.bj).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xp(r.a,!1)
v.push(A.aH(!1,B.a3,!0,q,A.aP(!1,p,!0,A.r(k,A.A(A.a([A.E(A.x(A.a([t,B.bG,A.d(m,k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.as,k,k,k,k,k,k,k,k,14,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.i,0,B.p),1),D.bWS],u),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bh,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dQs(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.aj))
if(!h)B.d.u(v,A.a([B.T,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.W)
t=A.m(k,k,i.a.d.a?B.aS:B.as,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aVe("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ao,k,k,k,k))
v.push(B.ae)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.as,k,k,k,k,k,k,k,k,12.5,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b3m(r.b.length!==0,B.mj,new C.dQt(r,i,a0),new C.dQu(r,a0),"Upload from gallery","ID photo"))
v.push(i.b3m(r.c.length!==0,D.bQd,new C.dQv(r,i,d,a0),new C.dQw(r,a0),"Camera or gallery","Selfie"))
v.push(B.T)
t=l.w
v.push(new Ao.a8S("Signature (optional)",t,new C.dQx(a0),new C.dQm(a0,t),new C.dQn(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bu:B.bj
s=(i?B.bu:B.bj).j(0.28)
s=A.E(A.dU(E.aXw,new C.dQo(d),A.di(k,k,k,k,k,k,k,k,k,t,k,k,B.qF,k,new A.b9(A.l(10),B.a1),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bo(B.cJ,k,k,k,B.c,k,B.qF,k,new A.b9(A.l(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.af,A.E(A.bJ(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vJ,k,k,k),k,new C.dQp(r,w,d),t),1)],u),B.l,k,B.e,B.i,0,k,k))
return A.r(k,A.cb(A.x(v,B.al,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.t0,B.jq,k,k,360)},
$S:173}
C.dQj.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dQk.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dQl.prototype={
$0(){return this.b.$1(new C.dQi(this.a))},
$S:0}
C.dQi.prototype={
$0(){var w=this.a
w.d=B.xa
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dQq.prototype={
$0(){return this.b.$1(new C.dQh(this.a))},
$S:0}
C.dQh.prototype={
$0(){var w=this.a
w.d=B.a8_
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dQr.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dQs.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xu(null,u.b,A.c_(2020,1,1,0,0,0,0,0),null,s,A.c_(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dQg(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQg.prototype={
$0(){var w=this.b
return this.a.a=A.c_(w.gcl(),w.gcg(),w.gcz(),0,0,0,0,0)},
$S:0}
C.dQt.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Q5(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dQf(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQf.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dQu.prototype={
$0(){return this.b.$1(new C.dQe(this.a))},
$S:0}
C.dQe.prototype={
$0(){return this.a.b=""},
$S:0}
C.dQv.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.eg:B.c
w=3
return A.b(A.bU(q,null,new C.dQc(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Q5(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dQd(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQc.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dH(!1,w,w,w,!0,w,w,w,!0,w,w,B.as3,w,w,w,w,new C.dQ6(d),!1,w,w,w,w,w,w,w,D.fQA,w,w,w),A.dH(!1,w,w,w,!0,w,w,w,!0,w,w,B.as1,w,w,w,w,new C.dQ7(d),!1,w,w,w,w,w,w,w,D.fXF,w,w,w)],x.p),B.l,w,B.e,B.P,0,B.p),!0,!1,B.ag,!0,!0)},
$S:25}
C.dQ6.prototype={
$0(){A.a6(this.a,!1).O("camera")
return null},
$S:0}
C.dQ7.prototype={
$0(){A.a6(this.a,!1).O("gallery")
return null},
$S:0}
C.dQd.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dQw.prototype={
$0(){return this.b.$1(new C.dQb(this.a))},
$S:0}
C.dQb.prototype={
$0(){return this.a.c=""},
$S:0}
C.dQx.prototype={
$0(){return this.a.$1(new C.dQa())},
$S:0}
C.dQa.prototype={
$0(){},
$S:0}
C.dQm.prototype={
$0(){return this.a.$1(new C.dQ9(this.b))},
$S:0}
C.dQ9.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dQn.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.aj0(u.a,null,null,new C.dQ8(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQ8.prototype={
$4(d,e,f,g){this.a.$1(new C.dQ5(this.b,d))},
$S:461}
C.dQ5.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.u(w,this.b)},
$S:0}
C.dQo.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dQp.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.L(x.q).f.T(D.foj)
return}if(w.a.d==null){w.c.L(x.q).f.T(D.fl8)
return}A.a6(w.c,!1).O(!0)},
$S:0}
C.dQT.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:87}
C.dQU.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.eg:B.c,n=A.l(14),m=A.L((p?B.bu:B.bj).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.m(r,r,q.a.d.a?B.aS:B.as,r,r,r,r,r,r,r,r,16,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Bv(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.m(r,r,q.a.d.a?B.bu:B.bj,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zL(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.m(r,r,w.zL(r).length>0?B.bD:B.cJ,r,r,r,r,r,r,r,r,12,r,r,B.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bu:B.bj
t=(q?B.bu:B.bj).j(0.28)
s=x.p
return new A.d2(e,!1,A.as(A.aH(!1,B.a3,!0,r,A.r(r,A.x(A.a([p,B.T,v,u,B.aB,A.A(A.a([A.E(A.dU(B.o2,new C.dQR(d),A.di(r,r,r,r,r,r,r,r,r,w,r,r,B.k2,r,new A.b9(A.l(10),B.a1),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.af,A.E(A.bJ(D.fY6,r,new C.dQS(d),A.bo(B.cJ,r,r,r,B.c,r,B.k2,r,new A.b9(A.l(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.i,0,r,r)],s),B.al,r,B.e,B.P,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.CB,B.GW,r,r,300),B.f,B.L,0,r,r,r,r,r,B.aj),r,r,r),r)},
$S:34}
C.dQR.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dQS.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dQN.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dQO(r),p=r.a.d.a,o=p?B.eg:B.c,n=A.l(14),m=A.L((p?B.bu:B.bj).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.m(s,s,r.a.d.a?B.aS:B.as,s,s,s,s,s,s,s,s,14,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Bv(l.c),s,s,s,s,s,s,D.fBx,s,s,s)],p),B.l,s,B.e,B.i,0,s,s)
w=A.iO((r.a.d.a?B.bu:B.bj).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a2I,"View receipt",new C.dQG(r,d,l))
u=l.x!=null
t=u?B.pA:B.qO
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bDX,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dQH(r,d,l)),q.$3$icon$label$onTap(B.CP,"Edit",new C.dQI(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mj,"View / download ID",new C.dQJ(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bQc,"View / download selfie",new C.dQK(r,d,l)))
if(l.gaHT())p.push(q.$3$icon$label$onTap(Ac.a3W,"View / download signature",new C.dQL(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bD,B.ek,"Delete",new C.dQM(r,d,l)))
p.push(B.aw)
return A.bm(!0,new A.D(B.uC,A.r(s,A.x(p,B.l,s,B.e,B.P,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:25}
C.dQO.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aS:B.as
else w=d
return A.aP(!1,v,!0,new A.D(B.f0,A.A(A.a([A.X(e,w,v,v,v,20),B.bc,A.d(f,v,v,v,v,v,v,A.m(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1965}
C.dQG.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fZn(w,this.c)},
$S:0}
C.dQH.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.SV(this.c)},
$S:0}
C.dQI.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.DH(this.c)},
$S:0}
C.dQJ.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bGx(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dQK.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bGx(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dQL.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fZs(w,this.c)},
$S:0}
C.dQM.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.Q4(0,this.c)},
$S:0}
C.dQV.prototype={
$1(d){return d.x==null},
$S:258}
C.dQW.prototype={
$1(d){return d.x!=null},
$S:258}
C.dQX.prototype={
$2(d,e){return d+e.c},
$S:1966}
C.dQY.prototype={
$0(){return this.a.bDP()},
$S:0}
C.dQP.prototype={
$0(){return this.a.agj(this.b)},
$S:0}
C.fI2.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fI3.prototype={
$0(){return B.d.gH(D.a5g)},
$S:z+77}
C.dgt.prototype={
$0(){var w=this.a
return w.m(new C.dgr(w,this.b))},
$S:0}
C.dgr.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dgs.prototype={
$0(){},
$S:0}
C.dgu.prototype={
$0(){var w=this.a.gc2g()
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.fKy.prototype={
$1(d){return C.hmD(A.a2(d,x.N,x.z))},
$S:z+11}
C.fKz.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fKA.prototype={
$2(d,e){var w=A.ca(d.a,null),v=A.ca(e.a,null)
if(w!=null&&v!=null)return B.o.aS(w,v)
return d.d.aS(0,e.d)},
$S:z+83}
C.fXZ.prototype={
$1(d){return d.aj()},
$S:z+12}
C.h5A.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fH8.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bRM.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eJ(e,v)?v:null},
$S:1967}
C.fYz.prototype={
$1(d){var w=this
return new C.a_K(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dh8.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dh7(w,d))},
$S:z+80}
C.dh7.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgX.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cJ(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dgU.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dgv.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dgw.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dgY.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dgE.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.H,u=v?B.eg:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.as,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.eg(A.a([A.bP(!1,B.dt,w,w,!0,w,w,w,new C.dgC(d),w,w),A.bJ(B.xy,w,new C.dgD(d),A.bo(B.nr,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.dgC.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dgD.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dgF.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.dgV.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dgW.prototype={
$0(){return B.d.gH(D.zW)},
$S:z+14}
C.dgA.prototype={
$1(d){var w=this.a,v=w.y,u=w.gz5(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.U8(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dgB.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgG.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a_i(v,u,J.ad(w.d),null)},
$S:z+40}
C.dgH.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dh6.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.az(s,new C.a__(r.y,r.gz5(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dh4(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bcB(v,e,w,u,t,r.gbUq(),C.hCl(r.y.Q),r.gz5(0),s)
w=t}return A.c6(q,new C.dh5(r,e),new A.D(B.a0S,w,s))},
$S:1968}
C.dh5.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd5(t).ay){t=this.b
u=x.cy.a(B.d.gd5(u.f.f)).gvr(0)
w=t-(u==null?t:u)}else w=0
v=B.j.D(w,-1,0)
u=A.dr()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fL(v*3.141592653589793*0.5)
return A.fB(B.a7,A.d3(e,B.j.D(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.dh4.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJ4(B.qx,B.iA)},
$S:0}
C.dgR.prototype={
$0(){var w=this.a
return w.m(new C.dgQ(w))},
$S:0}
C.dgQ.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dgS.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).O(null)
return null},
$S:0}
C.dgx.prototype={
$1(d){var w,v,u=null,t=A.l(26),s=E.ks.j(0.5),r=x.p,q=A.a([D.fP7,B.ae],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ct(p.d)?"Write this book":"Write a new book"
q.push(p.ZS(d,B.ed,w,J.ct(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.ZS(d,K.apY,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cJ(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cy,A.d("Your book is in English.",u,u,u,u,u,u,A.m(u,u,D.kQ.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cy,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.m(u,u,D.kQ.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.ZS(d,W.aqZ,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.ZS(d,B.qT,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.ZS(d,B.qT,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.u(q,r)}return A.eK(u,E.C2,A.bm(!0,new A.D(Ab.yS,A.x(q,B.E,u,B.e,B.P,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,B.Oq,B.da,u,new A.b9(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:47}
C.dgT.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dgK.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cJ(w.d)
return new C.a_M(v,J.cJ(w.d),w.r+1,null)},
$S:z+44}
C.dgL.prototype={
$1(d){var w=null
return A.oQ(!1,A.eg(w,w,w,E.C2,new A.k6(this.a,new C.dgJ(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:323}
C.dgJ.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aaX,B.p0,A.E(A.d(e,w,w,w,w,w,w,B.jy,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:752}
C.dgM.prototype={
$0(){return this.a.a=!1},
$S:50}
C.dgN.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:180}
C.dgO.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgP.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.BE(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.SL(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.dgI(s,t))
w=4
return A.b(s.lh(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dgI.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dh_.prototype={
$1(d){var w=null
return A.oQ(!1,A.eg(w,w,w,E.C2,new A.k6(this.a,new C.dgZ(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:323}
C.dgZ.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aaX,B.p0,A.E(A.d(e,w,w,w,w,w,w,B.jy,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:752}
C.dh0.prototype={
$0(){return this.a.a=!1},
$S:50}
C.dh1.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:180}
C.dh2.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:180}
C.dh3.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.BE(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lh(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dgy.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bkN(B.qx,A4.O0)},
$S:0}
C.dgz.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJ4(B.qx,A4.O0)},
$S:0}
C.diV.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.diW.prototype={
$1(d){var w=this.a
return w.m(new C.diU(w))},
$S:9}
C.diU.prototype={
$0(){return this.a.e="page"},
$S:0}
C.diX.prototype={
$1(d){var w=this.a
return w.m(new C.diT(w))},
$S:9}
C.diT.prototype={
$0(){return this.a.e="book"},
$S:0}
C.diY.prototype={
$1(d){var w=this.a
return w.m(new C.diS(w))},
$S:9}
C.diS.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.diZ.prototype={
$0(){var w=this.a
return w.m(new C.diR(w,this.b))},
$S:0}
C.diR.prototype={
$0(){var w=this.b
this.a.d.sb1(0,w)
return w},
$S:0}
C.dj_.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga2G()
A.a6(this.b,!1).O(new A.brv(w,v))},
$S:0}
C.dhn.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dhm.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a_I(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dhr.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dhq.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.baN(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.ht,v,v,v)
return A.eg(A.a([A.bP(!1,B.dt,v,v,!0,v,v,v,new C.dho(d),v,v),A.bJ(B.xy,v,new C.dhp(d),A.bo(B.nr,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.C2,w,v,v,v,v,D.fNU,v)},
$S:18}
C.dho.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dhp.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dhs.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dht.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.cb(A.bX(B.bH,r,B.bt,t,18,14),B.t,t,B.y,t,D.bEW,t,t,B.ah)},
$S:347}
C.dhl.prototype={
$0(){return this.a.QS(0,this.b)},
$S:0}
C.dhk.prototype={
$0(){return this.a.Qj(0,this.b)},
$S:0}
C.cPH.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cPI.prototype={
$0(){return B.d.gH(D.zW)},
$S:z+14}
C.cPJ.prototype={
$4(d,e,f,g){var w=null,v=A.l(e)
return A.bS(0,new A.D(d,new A.bN(new A.o(w,w,A.L(this.a.j(f),B.r,g),v,w,w,B.n),B.bk,w,w),w),0,0,0)},
$S:1970}
C.d8k.prototype={
$1(d){return this.a.m(new C.d8j(this.b,this.c))},
$S:9}
C.d8j.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d8J.prototype={
$1(d){return this.a.m(new C.d8w())},
$S:2}
C.d8w.prototype={
$0(){},
$S:0}
C.d8K.prototype={
$1(d){return this.a.m(new C.d8v())},
$S:2}
C.d8v.prototype={
$0(){},
$S:0}
C.d8L.prototype={
$0(){var w=this.a
return w.m(new C.d8u(w,this.b))},
$S:0}
C.d8u.prototype={
$0(){var w=this.a
return w.d=w.gor().Gf(this.b.a)},
$S:0}
C.d8M.prototype={
$0(){var w=this.a
return w.m(new C.d8t(w,this.b))},
$S:0}
C.d8t.prototype={
$0(){var w=this.a
return w.d=w.gor().cNE(this.b)},
$S:0}
C.d8N.prototype={
$1(d){return this.a.m(new C.d8s())},
$S:2}
C.d8s.prototype={
$0(){},
$S:0}
C.d8O.prototype={
$0(){var w=this.a
return w.m(new C.d8r(w,this.b))},
$S:0}
C.d8r.prototype={
$0(){var w=this.a
return w.d=w.gor().cNJ(this.b.a)},
$S:0}
C.d8P.prototype={
$1(d){var w=this.a
return w.m(new C.d8E(w,d))},
$S:6}
C.d8E.prototype={
$0(){var w=this.a
return w.d=w.gor().cOD(this.b)},
$S:0}
C.d8Q.prototype={
$1(d){var w=this.a
return w.d=w.gor().aG0(d)},
$S:2}
C.d8R.prototype={
$1(d){var w=this.a
return w.d=w.gor().cNM(d)},
$S:2}
C.d8T.prototype={
$1(d){var w=this.a
return w.d=w.gor().cOB(d)},
$S:2}
C.d8U.prototype={
$1(d){var w=this.a
return w.m(new C.d8D(w,d))},
$S:9}
C.d8D.prototype={
$0(){var w=this.a
return w.d=w.gor().cOs(this.b)},
$S:0}
C.d8V.prototype={
$0(){var w=this.a,v=w.gor(),u=B.a.i(w.gz5(0).a.a),t=B.a.i(w.gaDd().a.a)
u=v.bfu(B.a.i(w.gasQ().a.a),t,u)
A.a6(this.b,!1).O(u)
return null},
$S:0}
C.bRW.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:8}
C.bRQ.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bRP(w,d))},
$S:12}
C.bRP.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bRZ.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bRR.prototype={
$0(){var w=this.a
w.Q=D.b1M
w.adY(1)
w.r.x=null},
$S:0}
C.bRS.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b1M)return
w=new A.e2()
w.cY(u.as*13+u.a.e)
v=u.r
v.Q=3+w.az(3)
v.z=D.d5f[w.az(6)]
v.as=u.f.a+2.6},
$S:0}
C.bRV.prototype={
$0(){var w=this.a
w.Q=D.adu
w.adY(2)
w.r.z=null},
$S:0}
C.bRU.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hFG
t.adY(3)
w=t.r
w.d=s
w.x="I say: "+t.gCy()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.az(3)
w.z=s?D.dbN[v.az(4)]:D.dx8[v.az(3)]
w.as=t.a+2.8},
$S:0}
C.bRX.prototype={
$0(){var w=this.a
w.Q=D.b1N
w.CW=this.b
w.cy=1
w.adY(4)
w.r.f=w.f.a+5},
$S:0}
C.bRY.prototype={
$0(){},
$S:0}
C.bRT.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bRN.prototype={
$0(){return this.a.L7(this.b)},
$S:0}
C.bRO.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bTs.prototype={
$0(){var w=this
return w.a.Rb(w.b,0,w.c,w.d)},
$S:0}
C.bTt.prototype={
$0(){var w=this
return w.a.Rb(w.b,3,w.c,w.d)},
$S:0}
C.bTu.prototype={
$0(){var w=this
return w.a.Rb(w.b,1,w.c,w.d)},
$S:0}
C.bTv.prototype={
$0(){var w=this
return w.a.bTR(w.b,w.c,w.d)},
$S:0}
C.bTw.prototype={
$0(){var w=this
return w.a.Rb(w.b,4,w.c,w.d)},
$S:0}
C.bTx.prototype={
$0(){var w=this
return w.a.Rb(w.b,2,w.c,w.d)},
$S:0}
C.bTy.prototype={
$0(){var w=this
return w.a.Rb(w.b,5,w.c,w.d)},
$S:0}
C.bTz.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:753}
C.bTr.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a6r[d],p=q.a.a2(0,new A.p(0,-q.b*1.2*124)),o=A.fs(r,B.ct,r,3,r,A.cQ(r,r,r,r,r,r,r,r,r,D.fso,e),B.a5,B.bX,r,B.dD,B.bY)
o.o8(130)
w=o.b.a.c
w=p.aJ(0,new A.p(0,w.gba(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bn(A.bs(w,v.gba(v)+12,u+18),B.i7)
u=this.a
v=t.eQ(B.dM)
w=$.S()
s=A.K()
s.r=B.dx.gp(0)
u.an(v,s)
s=A.K()
s.r=D.qo.gp(0)
u.an(t,s)
w=new A.aG(w.r,B.ai,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.aZ(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.bu())
v=A.K()
v.r=D.qo.gp(0)
u.af(w,v)
o.a5(u,new A.p(t.a+9,t.b+6))},
$S:754}
C.bSc.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.bSd.prototype={
$2(d,e){var w=this.a,v=B.o.aS(w.amD(d),w.amD(e))
if(v!==0)return v
return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.fvc.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.h5r.prototype={
$2(d,e){if(e!=null)J.c5(this.a.c3(0,d,new C.h5s()),e)},
$S:z+66}
C.h5s.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.h5t.prototype={
$1(d){return d!==this.a},
$S:3}
C.h5u.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.h5v.prototype={
$1(d){return d!==this.a&&!B.d.aU(this.b,new C.h5q(this.c,d))},
$S:3}
C.h5q.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.h5w.prototype={
$1(d){return d!==this.a},
$S:3}
C.h5x.prototype={
$1(d){return d!==this.a},
$S:3}
C.h5y.prototype={
$1(d){return d!==this.a&&!B.d.aU(this.b,new C.h5p(this.c,d))},
$S:3}
C.h5p.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fIE.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fX_.prototype={
$1(d){return d.Q},
$S:z+15}
C.fX0.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fEu.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fLu.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bN_.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.h5R.prototype={
$2(d,e){return B.o.aS(C.hyE(d),C.hyE(e))},
$S:232}
C.h5S.prototype={
$1(d){return d!==this.a},
$S:3}
C.fXv.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bL9.prototype={
$0(){var w=this.a
w.ch=!0
w.b91()},
$S:0}
C.bL4.prototype={
$0(){},
$S:0}
C.bLa.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bL2.prototype={
$0(){},
$S:0}
C.bL3.prototype={
$0(){},
$S:0}
C.bL8.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bS(0,A.b2(u,u,u,new C.bdg(t,u),B.az),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.l(14)
s.push(A.ap(u,A.r(u,A.d(t.dy,u,u,u,u,u,u,D.fA5,B.K,u,u),B.f,u,u,new A.o(w,u,u,v,u,u,B.n),u,u,u,u,B.bV,u,u,u),u,u,14,14,6,u))}return A.az(B.c3,new A.an(B.a0,u,B.ad,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bL5(t,e),u,u,u,u,u,u,u,new C.bL6(t,e),u,u,u,u,u,u,u,u,u,new C.bL7(t,e),u,u,u,u,!1,B.a4)},
$S:36}
C.bL5.prototype={
$1(d){return this.a.db=B.j.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bL7.prototype={
$1(d){return this.a.db=B.j.D(d.b.a/this.b.b,0.08,0.92)},
$S:22}
C.bL6.prototype={
$1(d){return this.a.db=B.j.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bL1.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.cqJ.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cqK.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cqI(w))},
$S:0}
C.cqI.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cqL.prototype={
$0(){var w=this,v=w.a
v.gj1()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cqM.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cqN.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cqO.prototype={
$0(){},
$S:0}
C.cqP.prototype={
$0(){var w=this.a
w.z=w.Xn(++w.e)
w.Q=A.c1(w.gkT()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cqF.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.cqG.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj1().length,e=i/2,d=new C.cqH(i,f,h),a0=g.as,a1=A.a4(a0).k("b8<2>")
a0=A.C(new A.b8(a0,a1),a1.k("M.E"))
a0=A.bS(0,A.c6(new A.ha(a0),new C.cqA(g,new A.p(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj1().length!==0&&!B.d.q(g.gj1(),-1)
v=x.p
e=A.a([a0,A.ap(j,new C.QR(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cK(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new R.N2(new C.cqB(g,u),new C.cqC(g,u),new C.cqD(g,u),j,j,new A.bt("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ap(j,A.d(a1,j,j,j,j,j,j,A.m(j,j,B.a.q(a1,"not a child")?B.fi:B.b4,j,j,j,j,j,j,j,j,13,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj1().length!==0&&!B.d.q(g.gj1(),-1)){a0=g.e+1>=g.gkT().length?"See my result":"Next family"
g=A.as(C.uA(a0,g.gqo(g),B.cS,B.jI,D.fC),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.Xn(0):s).length))break
if(!B.d.q(g.gj1(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.Xn(0)
o=s}else o=s
n=s[u]
n=A.e1(B.A,new C.QR(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.Xn(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.r8(new A.br(0,p,t),new C.cqE(),new R.Er(u,j,new C.QR(l.b,k,62,!1,j),new A.kJ(0.25,new C.QR(m.b,k,62,!1,j),j),new A.kd(n,B.aj,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.J,R.hCd(),!0,!0,j,j,j,j,j,j,!1,B.iR,j,new A.bt("chip-"+r,a0),w),B.b_,B.iP,j,new A.bt("t"+r+"-"+q,a0),v))}++u}g=A.bX(B.fV,a1,B.bt,j,6,8)}e.push(A.ap(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ad,B.t,e,j)},
$S:67}
C.cqH.prototype={
$1(d){return new A.p(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:741}
C.cqA.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.gj1().length!==0&&!B.d.q(t.gj1(),-1)
return A.b2(p,p,p,new C.bcK(q.b,o,v,w,p),B.az)},
$S:56}
C.cqC.prototype={
$1(d){return this.a.gj1()[this.b]===-1},
$S:z+30}
C.cqD.prototype={
$1(d){return this.a.cRv(this.b,d.a)},
$S:z+31}
C.cqB.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj1()[t]!==-1,r=A.l(18),q=e.length!==0?B.cS.j(0.3):B.L
if(s)w=v
else w=A.L(e.length!==0?B.cS:B.jZ,B.r,2)
u=s?A.lD(new C.cqz(),A.as(new C.QR(u.gaFt()[u.gj1()[t]].b,u.gaFt()[u.gj1()[t]].a,62,!1,v),v,v,v),B.lb,B.iP,v,v,new A.br(0.3,1,x.X),x.i):D.bd2
return A.cT(v,u,v,v,B.b_,new A.o(q,v,w,r,v,v,B.n),B.a3,v,100,v,v,v,v,v,88)},
$S:1973}
C.cqz.prototype={
$3(d,e,f){return A.e1(B.A,f,e,null,null)},
$S:113}
C.cqE.prototype={
$3(d,e,f){return A.dO(f,new A.p(Math.sin(e*24)*8*(1-e),0))},
$S:113}
C.cQL.prototype={
$1(d){return d>=1},
$S:119}
C.cFH.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkT()[w.e].d.length)w.m(new C.cFG(w))},
$S:12}
C.cFG.prototype={
$0(){return this.a.f++},
$S:0}
C.cFP.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cFQ.prototype={
$0(){var w=this.a,v=this.b
w.z.I(0,v)
w.Q=v},
$S:0}
C.cFR.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cFO(w))},
$S:0}
C.cFO.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cFS.prototype={
$0(){return this.a.f++},
$S:0}
C.cFT.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cFU.prototype={
$0(){},
$S:0}
C.cFV.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a8(0)
w.as=!1
w.ay=0},
$S:0}
C.cFJ.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.cFK.prototype={
$3(d,e,f){var w=null
return A.lD(new C.cFI(this.a,e),w,B.b_,B.hK,w,w,new A.br(w,this.b,x.X),x.i)},
$S:1974}
C.cFI.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.cS.j(u.as?0.6:0.15)
t=A.a([new A.ab(0,B.G,t,B.J,u.as?40:18)],x.V)
w=this.b
return A.r(v,A.hY(new A.BM(new A.uV(B.w.j(e),B.M_,v,B.Yt),H.bXE(A.b2(v,v,v,new C.aBN(u.gkT()[u.e].c,u.as,v),B.az),new A.Ew(w,w,B.Wk)),v),B.aq),B.f,v,v,new A.o(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:1975}
C.cFL.prototype={
$3(d,e,f){return A.d3(A.dO(f,new A.p(0,14*(1-e))),e)},
$S:103}
C.cFM.prototype={
$3(d,e,f){return A.dO(f,new A.p(Math.sin(e*22)*8*(1-e),0))},
$S:113}
C.cFN.prototype={
$0(){return this.a.bq6(this.b)},
$S:0}
C.f7E.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.an9$)
v.an9$=w
v.qa$.sp(0,w)
v.ar1(u)},
$S:8}
C.fhO.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:12}
C.bSY.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bSX())},
$S:0}
C.bSX.prototype={
$0(){},
$S:0}
C.bSV.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bST.prototype={
$0(){},
$S:0}
C.bSU.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gMO()
w=s+1>=r.length?3:5
break
case 3:q=C.bGM(p.gapS(0),0,r.length)
p.m(new C.bSQ(p,q))
o=p
w=6
return A.b(C.BX(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.BY(s.d,s.c.a,"school",p.gapS(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bSR())
w=4
break
case 5:p.m(new C.bSS(p))
p.gqw().VX(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bSQ.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bSR.prototype={
$0(){},
$S:0}
C.bSS.prototype={
$0(){return this.a.x++},
$S:0}
C.bSW.prototype={
$0(){return this.a.L7(this.b)},
$S:0}
C.bSP.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.f7F.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.p(t,s),q=v.b,p=v.d,o=p?C.hCr(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.Ej
C.SJ(q,D.eqc,0,0.2,-0.6,-0.2,null,w,D.eoW,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a2(0,new A.p(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.S()
p=A.K()
p.r=D.Gi.gp(0)
p.c=3
p.d=B.bw
q.ah(new A.p(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f7G.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.SJ(this.a,D.epi,0,u,0.7,-0.5,null,null,D.JJ,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f7H.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.SJ(this.a,D.eqZ,0,0,0.8,-0.5,null,null,D.JJ,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f7I.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.SJ(w.b,D.eq6,0,v,-0.8,-0.5,null,null,D.JJ,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f7J.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.p(34,-122+Math.sin(w*5)*5)
else v=v?D.eqa:D.Ej
C.SJ(p,D.epC,0,t,0,-0.6,null,v,D.JJ,3,0,s,1.3,u,0,w,0)
q=q.cc9(new A.p(222,455),9)
$.S()
w=A.K()
w.r=B.cS.gp(0)
p.af(q,w)},
$S:0}
C.f7K.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:753}
C.bSB.prototype={
$2(d,e){return d+e},
$S:59}
C.bSM.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bSN.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bSO.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj1()[u.b]=s
t.gj1()[u.d]=t.y
w=t.as
v=t.qa$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bSI.prototype={
$1(d){return d},
$S:97}
C.bSH.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.qa$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bSJ.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bSK.prototype={
$0(){},
$S:0}
C.bSL.prototype={
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
C.bSD.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.bSE.prototype={
$2(d,e){var w=this.a
w=w.gkT()[w.f].e
return B.o.aS(w[d],w[e])},
$S:59}
C.bSF.prototype={
$2(d,e){var w=null,v=C.hdJ(new A.av(A.aS(1/0,e.a,e.b),A.aS(1/0,e.c,e.d))),u=this.a
return A.az(B.c3,new A.eo(A.b2(w,w,w,new C.bjV(u,u.qa$),B.az),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bSC(u,v),w,w,w,w,!1,B.a4)},
$S:36}
C.bSC.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj1().length
u=B.o.D(B.j.bh((t.a-s.a)/r/450*v),0,v-1)
w.d1j(w.gj1()[u])}},
$S:22}
C.bSG.prototype={
$1(d){var w=this.a
return w.gkT()[w.f].d[d]},
$S:78}
C.ds5.prototype={
$2(d,e){return 0},
$S:59}
C.bSn.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bSm())},
$S:0}
C.bSm.prototype={
$0(){},
$S:0}
C.bSl.prototype={
$0(){},
$S:0}
C.bSf.prototype={
$0(){},
$S:0}
C.bSg.prototype={
$0(){},
$S:0}
C.bSk.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.Bi},
$S:0}
C.bSj.prototype={
$1(d){var w=null,v=this.a.gqw(),u=A.d(d,w,w,w,w,w,w,D.aW2,w,w,w),t=v.gbmy(0)
return A.az(B.c3,A.x(A.a([u,B.bG,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aWg,w,w,w)],x.p),B.E,w,B.e,B.i,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbst(v),w,w,w,w,w,w,!1,B.a4)},
$S:133}
C.bSh.prototype={
$0(){return this.a.L7(this.b)},
$S:0}
C.bSi.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bSe.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.e2h.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e2i.prototype={
$1(d){return this.a},
$S:39}
C.e2j.prototype={
$0(){var w=this.a
return w.d=w.gSW().beY(this.b)},
$S:0}
C.e2f.prototype={
$1(d){return new C.U9(this.a,null)},
$S:z+32}
C.e2g.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e2e.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.ht,w,w,w)
return A.eg(A.a([A.bP(!1,E.aXG,w,w,!0,w,w,w,new C.e2c(d),w,w),A.bP(!1,D.fVx,w,w,!0,w,w,w,new C.e2d(d),w,w)],x.p),w,w,D.fC,v,w,w,w,w,D.fI0,w)},
$S:18}
C.e2c.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e2d.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e2b.prototype={
$0(){var w=null,v=this.a.c.L(x.q).f,u=this.b
return v.T(A.b3(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e2k.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:13}
C.e2l.prototype={
$0(){var w=this.a,v=this.b,u=C.bEw(v,10,w.r,!1)
return w.uC(C.hmE(w.a.d,"kahoot",u,w.gb6z(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e2m.prototype={
$0(){var w=this.a
return w.uC(new C.ama(this.b,w.a.d,w.r,null))},
$S:0}
C.e2n.prototype={
$0(){var w=this.a
return w.uC(new C.akn(this.b,w.a.d,w.r,null))},
$S:0}
C.e2q.prototype={
$0(){var w=this.a
return w.uC(new C.av4(this.b,w.a.d,w.r,null))},
$S:0}
C.e2r.prototype={
$0(){var w=this.a
return w.uC(new C.az2(this.b,w.a.d,w.r,null))},
$S:0}
C.e2s.prototype={
$0(){var w=this.a
return w.uC(new C.amd(this.b,w.a.d,w.r,null))},
$S:0}
C.e2t.prototype={
$0(){var w=this.a
return w.uC(new C.amh(this.b,w.a.d,w.r,null))},
$S:0}
C.e2u.prototype={
$0(){var w=this.a
return w.uC(new C.amj(this.b,w.a.d,w.r,null))},
$S:0}
C.e2v.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d1E()
return v.uC(C.hmE(v.a.d,"creator_"+u.a,w,v.gb6z(),"A game by the family",t,this.c.a))},
$S:0}
C.e2w.prototype={
$0(){return this.a.OR(this.b)},
$S:0}
C.e2x.prototype={
$0(){return this.a.XP(0,this.b)},
$S:0}
C.e2o.prototype={
$0(){return this.a.OR(null)},
$S:0}
C.e2p.prototype={
$0(){return this.a.L(x.q).f.T(D.fle)},
$S:0}
C.bSz.prototype={
$0(){var w=this.a
w.d=D.b1a
w.z=3},
$S:0}
C.bSA.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aPV()}else w.m(new C.bSy(w))},
$S:12}
C.bSy.prototype={
$0(){return this.a.z--},
$S:0}
C.bSp.prototype={
$0(){var w=this.a
w.d=D.ada
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bSq.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bSo(w))
if(w.as<=0){d.a1(0)
w.b6v(-1)}},
$S:12}
C.bSo.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bSv.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.X0},
$S:0}
C.bSw.prototype={
$0(){return this.a.e++},
$S:0}
C.bSs.prototype={
$0(){var w=this.a
w.d=D.b1b
w.ay=this.b},
$S:0}
C.bSt.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bSx.prototype={
$2(d,e){return B.o.aS(e.b,d.b)},
$S:1976}
C.bSu.prototype={
$0(){return this.a.L7(this.b)},
$S:0}
C.bSr.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bS_.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.ax()
s=A.a([new A.au(new A.ba(s,B.b5,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.I)(t),++v){u=t[v]
s.push(new A.au(new A.ba(u,B.b5,B.aP),r))}return s},
$S:1977}
C.bS0.prototype={
$0(){return this.a.gD7().c.push(C.h7v(null,0,20,""))},
$S:0}
C.bSa.prototype={
$1(d){var w=null
return A.bA(w,new A.b6(4,A.l(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dr,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.VS,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:255}
C.bS9.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gD7().c,m=this.b,l=n[m],k=o.cfb(l),j=B.c.j(0.06),i=A.l(18),h=A.L(B.aT,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.KY,p,p,p),B.b1],g)
if(n.length>1)f.push(A.aI(p,p,p,p,B.arO,p,p,p,new C.bS4(o,m),p,p,p,p,p,p))
n=J.a7(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.i,0,p,p),A.aM(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bS5(l),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a5,p,B.ao,p,p,p,p),B.T],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aDP[v]
t=D.aDv[v]
s=v+1
f.push(new A.D(B.eP,new A.c8(B.aL,B.e,B.i,B.l,p,B.p,p,0,A.a([A.d(u,p,p,p,p,p,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.af,new A.bz(1,B.bb,A.aM(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bS6(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a5,p,B.ao,p,p,p,p),p),new As.Pu(v,l.c,new C.bS7(o,l),p,!1,D.lC,p,p,p,p,p,!1,!1,p,I.b1A,p,p,p,p,p,w)],g),p),p))}f.push(D.fNz)
f.push(B.am)
n=A.a([D.fH4,B.af],g)
for(r=0;r<3;++r){q=D.cfc[r]
n.push(new A.D(B.fn,A.jy(p,p,p,A.d(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bS8(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.i,0,p,p))
return A.r(p,A.x(f,B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.n),p,p,p,B.kx,B.bh,p,p,p)},
$S:149}
C.bS4.prototype={
$0(){var w=this.a
return w.m(new C.bS3(w,this.b))},
$S:0}
C.bS3.prototype={
$0(){return B.d.cH(this.a.gD7().c,this.b)},
$S:0}
C.bS5.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bS6.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bS7.prototype={
$1(d){return this.a.m(new C.bS2(this.b,d))},
$S:156}
C.bS2.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bS8.prototype={
$1(d){return this.a.m(new C.bS1(this.b,this.c))},
$S:9}
C.bS1.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3X.prototype={
$0(){var w=this.a
w.wy()
w.a.bv()
w.a.qp()},
$S:0}
C.e3W.prototype={
$0(){var w=this.a
w.wy()
w.a.bv()
w.a.qp()},
$S:0}
C.e3Z.prototype={
$0(){var w=this,v=w.b
if(J.cJ(v)||J.ct(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e4_.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e40.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e3V.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e3Y.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e42.prototype={
$0(){this.a.Pc()
return null},
$S:0}
C.e41.prototype={
$0(){return this.a.F3(this.b)},
$S:0}
C.e3n.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bP(!1,B.dt,w,w,!0,w,w,w,new C.e3l(d),w,w),r=A.bo(B.bQ,w,w,w,w,w,w,w,w,w,w,w)
return A.eg(A.a([s,A.bJ(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e3m(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e3l.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e3m.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e3o.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cO7(this.b)},
$S:0}
C.e3i.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aVv(w.b,w.c,w.d)},
$S:8}
C.e2K.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e2L.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e31.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Hq(t.a.c),$async$$0)
case 2:s=r.nA(q.dG(e,new C.e3_(t)))
if(s!=null&&t.c!=null)t.m(new C.e30(t,s))
t.a.bv()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e3_.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e30.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e32.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e33.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3h.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cOU(C.hCB(w),w)},
$S:0}
C.e2Z.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.Wu(u,w,C.aRd(u,w),new C.e2Y(v),null)},
$S:z+37}
C.e2Y.prototype={
$1(d){return this.bnX(d)},
bnX(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.e2X(s,d))
w=3
return A.b(s.uy(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:761}
C.e2X.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.beY(this.b)},
$S:0}
C.e3e.prototype={
$1(d){return d.as},
$S:z+1}
C.e3f.prototype={
$1(d){var w=this
return new A.dY(new C.e3d(w.a,w.b,w.c,w.d,w.e),null)},
$S:20}
C.e3d.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.eg:B.c,h=A.l(26),g=A.L(B.bQ.j(0.5),B.r,1.5),f=A.r(k,D.bV5,B.f,k,k,new A.o(B.bQ.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.m(k,k,j?B.aS:B.as,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a2,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,12.5,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.i,0,B.p),1)
f=A.A(A.a([f,B.bc,a0,A.aI(k,k,k,k,A.X(B.cC,j?B.bu:B.bj,k,k,k,k),k,k,k,new C.e37(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.i,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.I)(v),++s){r=v[s]
q=t.a===r?B.bQ:B.bQ.j(0.1)
p=new A.aN(20,20)
o=t.a===r
n=new A.ay(B.bQ,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bQ
a0.push(A.az(k,A.cT(k,A.d(m,k,k,k,k,k,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b_,new A.o(q,k,new A.bG(n,n,n,n),new A.be(p,p,p,p),k,k,B.n),B.h7,k,k,k,k,B.Ct,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e38(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bX(B.bH,a0,B.bt,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c69,new A.D(D.bFl,f,k),new A.D(D.bFc,e,k),new A.D(B.t0,a0,k),new A.D(W.an5,A.d(v,k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(Ai.apI,j?B.bu:B.bj,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bFe,A.A(A.a([a0,B.av,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.m(k,k,j?B.aS:B.as,k,k,k,k,k,k,k,k,k,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.b9n(k,B.bQ,k,k,!1,B.y,k,k,k,k,k,k,new C.e39(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.i,0,k,k),k))}f.push(B.aB)
j=A.l(20)
e=A.a([new A.ab(0,B.G,B.aF.j(0.35),B.iq,12)],x.V)
f.push(A.az(k,A.r(k,A.A(A.a([D.fHp,B.bc,D.bJD,D.bVL],w),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.c9T,B.n),k,k,k,B.i1,B.bI,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e3a(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.yU,A.A(A.a([A.E(A.dU(B.dt,new C.e3b(a1),k),1),B.av,A.E(A.bJ(M.aY7,k,new C.e3c(t,a1),A.bo(B.bQ,k,k,k,k,k,B.co,k,k,k,k,k)),1)],w),B.l,k,B.e,B.i,0,k,k),k))
return A.bm(!0,A.r(k,A.cb(A.x(f,B.E,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.aq,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.yJ,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:88}
C.e37.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e38.prototype={
$0(){return this.b.$1(new C.e36(this.a,this.c))},
$S:0}
C.e36.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e39.prototype={
$1(d){var w=this.a
w.m(new C.e34(w,d))
this.b.$1(new C.e35())},
$S:9}
C.e34.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e35.prototype={
$0(){},
$S:0}
C.e3a.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(new A.aHR(!0,w))
return null},
$S:0}
C.e3b.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e3c.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(new A.aHR(!1,w))
return null},
$S:0}
C.e3g.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cOI(this.b.b)
w.r.a8(0)},
$S:0}
C.e2y.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.aja(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hvS(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e2z.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aFY(w)},
$S:0}
C.e3q.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aex(this.b,w,this.c,null)},
$S:z+39}
C.e3k.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.eg:B.c,t=A.l(20),s=A.X(B.lP,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.as,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.u(p,A.a([B.ae,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.l,w,B.e,B.P,0,B.p)
return A.eg(A.a([A.bJ(D.fZj,w,new C.e3j(d),A.bo(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.ba,w,u,v,w,s,w,new A.b9(t,B.a1),r,w)},
$S:18}
C.e3j.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e2A.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e2B.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e2C.prototype={
$1(d){return d.a},
$S:z+8}
C.e2D.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.I)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hZ(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aFY(w)},
$S:0}
C.e2H.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.aja(q)
w=A.U(q).k("Y<1>")
q=A.C(new A.Y(q,new C.e2F(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hvS(v.e,null,r,v.f,v.r,new C.e2G(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e2G.prototype={
$0(){return this.a.ab8(this.b)},
$S:0}
C.e2F.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e2I.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("N<1,hZ>")
w=A.C(new A.N(w,new C.e2E(this.b),v),v.k("ak.E"))
u.d=t.aFY(w)},
$S:0}
C.e2E.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e3p.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e2U.prototype={
$1(d){return d.length!==0},
$S:3}
C.e2V.prototype={
$1(d){var w=this
return new A.dY(new C.e2T(w.a,w.b,w.c,w.d),null)},
$S:20}
C.e2T.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.eg:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.m(v,v,t?B.aS:B.as,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bj,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ae],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bj,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.u(p,new A.N(o,new C.e2P(u,e,o),A.U(o).k("N<1,v>")))
p.push(B.T)
u=w.d
p.push(A.aM(v,B.Z,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(12),B.dv),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ak,v,v,v,v,v,B.mB,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.ao,v,v,v,v))
p=A.x(p,B.al,v,B.e,B.P,0,B.p)
t=w.a
return A.eg(A.a([A.bP(!1,B.dt,v,v,!0,v,v,v,new C.e2Q(d),v,v),A.bJ(B.L9,v,new C.e2R(t,u,o,e),A.bo(B.bQ,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.fLW,v,new C.e2S(t,u,o,d),A.bo(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:192}
C.e2P.prototype={
$1(d){var w=null
return A.dH(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.m(w,w,this.a.a?B.aS:B.as,w,w,w,w,w,w,w,w,w,w,w,B.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aI(w,w,w,w,D.c2Z,w,w,w,new C.e2O(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1978}
C.e2O.prototype={
$0(){return this.a.$1(new C.e2M(this.b,this.c))},
$S:0}
C.e2M.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.e2Q.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e2R.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e2N(w.c,u))
v.bP(0,B.cf)}},
$S:0}
C.e2N.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e2S.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).O(!0)},
$S:0}
C.e2W.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cPm(this.b,D.uJ,C.Ho(v,w.a.c))},
$S:0}
C.e3x.prototype={
$1(d){return d.as},
$S:z+1}
C.e3y.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j3(this.b,w)},
$S:0}
C.e3z.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.itp(v)
return w.WD(v==null?null:v.a)},
$S:0}
C.e3A.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.i41(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aS(1/0,e.a,e.b)
s=A.aS(1/0,e.c,e.d)
l.cwz(new A.av(u,t),v.gblE(),new A.av(k,s))}k=A.l(22)
s=this.b.a
r=s?D.d34:D.d1f
q=A.L(s?B.dr:D.bkL,B.r,1)
p=A.l(22)
o=A.bS(0,A.b2(m,m,m,new C.bg2(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.r(m,A.bx(p,new A.an(B.a0,m,B.ad,B.t,A.a([o,A.bS(0,A.v5(new A.R(n,n,n,n),new A.a5(u,t,new C.bgY(l.d,v,l.f,w,new C.e3t(l),l.gcgn(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ap(10,new C.byO(s,new C.e3u(l,e),new C.e3v(l,e),new C.e3w(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a8(B.b0,B.b7,B.x,r,m,m),B.n),m,m,m,Z.amb,m,m,m,m)},
$S:178}
C.e3t.prototype={
$1(d){var w=this.a
w.m(new C.e3r(w,d))},
$S:2}
C.e3r.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.I(0,v)},
$S:0}
C.e3u.prototype={
$0(){var w=this.b
return this.a.bd7(1.25,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e3v.prototype={
$0(){var w=this.b
return this.a.bd7(0.8,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e3w.prototype={
$0(){var w=this,v=w.b
return w.a.aVv(new A.av(A.aS(1/0,v.a,v.b),A.aS(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gblE())},
$S:0}
C.e3B.prototype={
$0(){var w=this.a
return w.m(new C.e3s(w))},
$S:0}
C.e3s.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e2J.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fH(new A.fy(s.c)),$async$$0)
case 2:t.yy("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dhx.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ap(w,new C.bkM(u,C.hGY(v.c,u),new C.dhw(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dhw.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dhy.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ap(w,new C.bo8(d.d,d.c,u.f.q(0,d.a),new C.dhv(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dhv.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fI6.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nA(new A.cM(new A.Y(v,new C.fI7(d),w.k("Y<1>")),new C.fI8(),w.k("cM<1,n>")))},
$S:z+19}
C.fI7.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fI8.prototype={
$1(d){return d.a},
$S:z+8}
C.fI4.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fI5.prototype={
$1(d){return d.b},
$S:z+8}
C.fIb.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nA(new A.cM(new A.Y(v,new C.fIc(d),w.k("Y<1>")),new C.fId(),w.k("cM<1,n>")))},
$S:z+19}
C.fIc.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fId.prototype={
$1(d){return d.a},
$S:z+8}
C.fI9.prototype={
$1(d){var w,v=A.es([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.I(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fIa.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dhA.prototype={
$0(){return this.a},
$S:z+46}
C.dhR.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:244}
C.dhJ.prototype={
$2(d,e){var w=this.a.c3(0,d,new C.dhK()),v=J.a7(w)
if(!v.q(w,e))v.I(w,e)},
$S:116}
C.dhK.prototype={
$0(){return A.a([],x.s)},
$S:755}
C.dhI.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eJ(w,e)
return w===!0},
$S:310}
C.dhB.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dhH.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dhG.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.I(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aT(v==null?D.DF:v)
u=1
while(v.C())u+=s.$2(v.gR(v).a,e)
v=s.b.h(0,d)
v=J.aT(v==null?B.Z:v)
while(v.C()){t=v.gR(v)
if(e.q(0,t))continue
e.I(0,t)
t=w.h(0,t)
t=J.aT(t==null?D.DF:t)
while(t.C())u+=s.$2(t.gR(t).a,e)}return u},
$S:1980}
C.dhC.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dhL.prototype={
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
break}A:{s=u.gR(u)
if(a8.q(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.I(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.u(w,r)
if(u){t=t.h(0,s)
t=J.aT(t==null?D.DF:t)
while(t.C()){r=t.gR(t)
if(r.a!==a9&&!B.d.aU(w,new C.dhM(r)))w.push(r)}}B.d.bq(w,new C.dhN(a8))
B.d.aZ(w,new C.dhO())
q=C.i40(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.I)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eX3],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.brf(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:1981}
C.dhM.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dhN.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dhO.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.dhP.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a7(n),v=o.c,u=-1/0,t=0;t<w.gJ(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b8(v,A.a4(v).k("b8<2>")).cF(0,0,B.q7)+88-w.gH(n).a}else u=0
for(w=J.a7(n),v=o.c,t=0;t<w.gJ(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:666}
C.dhQ.prototype={
$1(d){return 16+d*156},
$S:172}
C.dhz.prototype={
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
t.n(0,d,new C.GH(r,new A.p(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.GH(s,new A.p(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.GH(s,new A.p(e,v)))}t=o.r.h(0,d)
t=J.aT(t==null?B.Z:t)
s=o.w
while(t.C()){r=t.gR(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.L2(d,new A.p(e+t,w),s,s.length))}},
$S:180}
C.dhD.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aKZ(new A.p(v.a,v.b+28),new A.p(w.a,w.b+28),!0,null))},
$S:116}
C.dhE.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dhF.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:756}
C.dhS.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:756}
C.dhT.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:474}
C.dhU.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:201}
C.dhV.prototype={
$1(d){return d>=0.5},
$S:119}
C.fno.prototype={
$3(d,e,f){var w=null,v=A.l(10)
return A.h9(A.aP(!1,v,!0,new A.a5(38,38,A.X(d,this.a.c?B.c:B.cl,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1983}
C.eYq.prototype={
$1(d){var w=null,v=A.l(8),u=B.bQ.j(0.12),t=A.l(8)
return new A.D(B.n1,A.aP(!1,v,!0,A.r(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fwV,B.K,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.Ow,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eYp(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eYp.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dxR.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dxQ.prototype={
$1(d){var w=null,v=A.l(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.o0,B.K,w,w)
return A.eg(A.a([A.bP(!1,B.dt,w,w,!0,w,w,w,new C.dxO(d),w,w),A.bP(!1,A.d("Delete",w,w,w,w,w,w,A.m(w,w,B.mS,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dxP(d),w,w)],x.p),B.ba,B.Co,w,u,D.bGe,w,D.bIb,new A.b9(v,B.a1),w,w)},
$S:18}
C.dxO.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dxP.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dy_.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dy0.prototype={
$1(d){var w=this.a
return w.m(new C.dxZ(w,d))},
$S:z+49}
C.dxZ.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dy1.prototype={
$1(d){var w=null
return A.qL(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dy4.prototype={
$1(d){var w=this.a
return w.m(new C.dxY(w,d))},
$S:35}
C.dxY.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dy3.prototype={
$1(d){var w=null
return A.qL(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dy5.prototype={
$1(d){var w=this.a
return w.m(new C.dxX(w,d))},
$S:35}
C.dxX.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dy6.prototype={
$0(){var w=this.a
return w.m(new C.dxW(w))},
$S:0}
C.dxW.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dy7.prototype={
$0(){var w=this.a
return w.m(new C.dxV(w))},
$S:0}
C.dxV.prototype={
$0(){return++this.a.at},
$S:0}
C.dy8.prototype={
$0(){var w=this.a
return w.m(new C.dxU(w))},
$S:0}
C.dxU.prototype={
$0(){return--this.a.ax},
$S:0}
C.dy9.prototype={
$0(){var w=this.a
return w.m(new C.dxT(w))},
$S:0}
C.dxT.prototype={
$0(){return++this.a.ax},
$S:0}
C.dya.prototype={
$1(d){var w=this.a
return w.m(new C.dxS(w,d))},
$S:9}
C.dxS.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dy2.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dyb.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.l(12)
if(p)w=B.bQ.j(0.18)
else w=q.c.a?B.eg:B.c
v=A.l(12)
if(p)u=B.bQ
else u=(q.c.a?B.ei:B.bP).j(0.85)
u=A.L(u,B.r,p?1.5:1)
if(p)t=B.bQ
else t=q.c.a?B.bu:B.bj
t=A.X(f,t,r,r,r,18)
if(p)s=B.bQ
else s=q.c.a?B.bu:B.bj
return A.E(A.aH(!1,B.a3,!0,r,A.aP(!1,o,!0,A.cT(r,A.x(A.a([t,B.aw,A.d(e,r,r,r,r,r,r,A.m(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.i,0,B.p),r,r,B.b_,new A.o(w,r,u,v,r,r,B.n),B.eG,r,r,r,r,B.k2,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dyc(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
$S:z+51}
C.dyc.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dyl.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cfp.prototype={
$2(d,e){return new A.bB(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:95}
C.cfw.prototype={
$1(d){return d.aj()},
$S:z+5}
C.cfx.prototype={
$2(d,e){var w=J.b7(e,new C.cfv(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bB(d,w,x.d2)},
$S:z+53}
C.cfv.prototype={
$1(d){return d.aj()},
$S:z+12}
C.cfr.prototype={
$1(d){return C.amm(A.a2(d,x.N,x.z))},
$S:z+9}
C.cfs.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cft.prototype={
$1(d){return C.hmD(A.a2(d,x.N,x.z))},
$S:z+11}
C.cfu.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cfB.prototype={
$1(d){return new A.aI2(d.f.length,d.a,d.b)},
$S:z+55}
C.cfC.prototype={
$2(d,e){return B.a.aS(d.c,e.c)},
$S:572}
C.cfy.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cfz.prototype={
$1(d){return d.cOk(C.Ho(d,this.a))},
$S:z+85}
C.e3K.prototype={
$1(d){return C.uB(d,this.a.a.c)},
$S:z+3}
C.e3L.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e3P.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e3Q.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e3H.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1x(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z6("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pz(r.c,r.e),$async$$0)
case 4:s.z6(p)
w=5
return A.b(s.Kc(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e3I.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1x(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z6("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pz(r.c,r.e),$async$$0)
case 4:s.z6(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e3J.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Wx(n.d,m,n.e,r.b),$async$$0)
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
return A.b(o.Kc(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ac(j)
o=r.a
if(o.c==null){w=1
break}o.z6(B.a.eo(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e3O.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1w(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.z6("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).ce(A.ec(new C.e3N(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pz(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e3N.prototype={
$1(d){var w=this.b
return new C.a0G(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e3M.prototype={
$1(d){return D.hBF},
$S:z+58}
C.e3S.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e3T.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e3R(w,d)
return new A.D(B.d9,new C.bh1(this.b,d.c,d.a,w,null),null)},
$S:1984}
C.e3R.prototype={
$0(){return this.a.Ys(this.b.b)},
$S:0}
C.e3C.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e3D.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e3E.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e3F.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e3G.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e3U.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a_(s,"NGMYFTSYNC2"))t=!A.cS(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a6(this.b,!1).O(s)
return}},
$S:202}
C.dPY.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dPZ.prototype={
$0(){return B.d.gH(D.a6Q)},
$S:z+60}
C.dQ_.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b2(A.as(A.X(this.b.d,B.c.j(0.95),w,w,D.d9X,44),w,w,w),w,w,new C.blU(u,t,v,w),B.az)},
$S:56}
C.fZ1.prototype={
$1(d){return A.pj(new C.fZ0(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:132}
C.fZ0.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.eg:B.c,p=A.a([new A.ab(0,B.G,B.w.j(r?0.35:0.08),B.ty,24)],x.V),o=r?B.ei:B.bP
o=A.r(t,t,B.f,t,t,new A.o(o,t,t,A.l(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bQ.j(0.18)],x.O)
w=A.r(t,D.bY8,B.f,t,t,new A.o(t,t,t,A.l(12),t,new A.a8(B.a7,B.aa,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.m(t,t,r?B.aS:B.as,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.r(t,A.x(A.a([B.W,o,new A.D(E.an9,A.A(A.a([w,B.bc,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.m(t,t,r?B.bu:B.bj,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.i,0,B.p),1)],u),B.l,t,B.e,B.i,0,t,t),t),A.E(A.is(!0,t,e,B.y,D.fji,new C.fZ_(this.b,s),20,B.amI,t,B.ah,!1),1)],u),B.l,t,B.e,B.i,0,B.p),B.f,t,t,new A.o(q,t,t,B.l9,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:118}
C.fZ_.prototype={
$2(d,e){var w=null,v=D.a6Q[e],u=A.l(16),t=A.l(16),s=this.b.a,r=A.L(s?B.ei:B.bP,B.r,1),q=A.a([new A.ab(0,B.G,B.w.j(s?0.35:0.08),B.ev,8)],x.V),p=A.l(15),o=A.E(new C.a7t(v.a,!0,w),1),n=s?B.jW:B.j5,m=A.d(v.b,w,1,B.a2,w,w,w,A.m(w,w,s?B.aS:B.as,w,w,w,w,w,w,w,w,13,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aH(!1,B.a3,!0,w,A.aP(!1,u,!0,A.eB(A.bx(p,A.x(A.a([o,A.r(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.m(w,w,s?B.bu:B.bj,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.i,0,B.p),B.f,n,w,w,w,w,w,w,B.k3,w,w,w)],l),B.al,w,B.e,B.i,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fYZ(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)},
$S:80}
C.fYZ.prototype={
$0(){A.a6(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cp0.prototype={
$0(){return this.a.ahm(this.b)},
$S:0}
C.fYp.prototype={
$1(d){return D.hwA},
$S:z+61}
C.h58.prototype={
$1(d){var w=this
return new C.a2s(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.fYt.prototype={
$1(d){return new C.a_k(this.a,null)},
$S:z+63}
C.fYs.prototype={
$1(d){return D.hxB},
$S:z+64}
C.d96.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d97.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d95(w,d))},
$S:35}
C.d95.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d98.prototype={
$1(d){return this.a.KQ()},
$S:2}
C.d99.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d92.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d93.prototype={
$1(d){return this.a.KQ()},
$S:2}
C.d94.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cHn.prototype={
$0(){},
$S:0}
C.cHt.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cHu.prototype={
$0(){return this.a.aQN(-1)},
$S:0}
C.cHv.prototype={
$1(d){return this.a.m(new C.cHs())},
$S:2}
C.cHs.prototype={
$0(){},
$S:0}
C.cHw.prototype={
$0(){return this.a.aQN(1)},
$S:0}
C.cHx.prototype={
$1(d){return this.a.m(new C.cHr())},
$S:2}
C.cHr.prototype={
$0(){},
$S:0}
C.cHy.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.m(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.ei:B.bP
return A.uZ(u,u,B.b3,r,u,new C.cHq(t,d),B.wz,s,w,u,new A.ay(v,1,B.r,-1),B.ch)},
$S:1985}
C.cHq.prototype={
$1(d){var w=this.a
return w.m(new C.cHo(w,this.b))},
$S:9}
C.cHo.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cHz.prototype={
$1(d){return this.a.m(new C.cHp())},
$S:2}
C.cHp.prototype={
$0(){},
$S:0}
C.cHA.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fmU.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).O(w)},
$S:2}
C.fmV.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fmW.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).O(w)},
$S:0}
C.fmS.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbCX()
w=w.e
s=A.l(B.o.D(v-1,0,v))
return A.b2(new A.D(D.bIa,new A.eo(A.r(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.byD(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:56}
C.fmT.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dG.aA(0,p)
p=A.l(12)
q=q.a.c
v=A.l(12)
u=A.l(12)
t=w*2.4
s=A.ar(B.aV,B.bQ,w)
s.toString
s=A.a([B.b3,s,B.aV],x.O)
return A.aH(!1,B.a3,!0,p,A.aP(!1,v,!0,A.eB(D.euO,r,new A.o(r,r,A.L(B.c.j(0.4),B.r,1.5),u,r,new A.a8(new A.da(-1.2+t,-0.5),new A.da(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
$S:138}
C.fWN.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:61}
C.eVA.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eVr.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eVs.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eVy.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.dY(new C.eVx(w,this.b),null)},
$S:20}
C.eVx.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.eg:B.c,t=A.l(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.as,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eK(w,u,new A.D(B.an3,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ae,C.hsI(new C.eVu(r,e),r.a),B.aB,A.A(A.a([A.E(A.dU(B.dt,new C.eVv(d),w),1),B.av,A.E(A.bJ(B.Wd,w,new C.eVw(r,d),A.bo(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.i,0,w,w)],q),B.al,w,B.e,B.P,0,B.p),w),w,w,w,w,B.da,w,new A.b9(t,B.a1),w)},
$S:101}
C.eVu.prototype={
$1(d){return this.b.$1(new C.eVt(this.a,d))},
$S:35}
C.eVt.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eVv.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eVw.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.eVz.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.TB(this.b)},
$S:0}
C.eVm.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bf3(w)},
$S:0}
C.eVq.prototype={
$1(d){return this.boj(d)},
boj(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Mg(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j3(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eVp.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.eVo(this.b),v),v.k("M.E"))
u.d=t.bf3(w)},
$S:0}
C.eVo.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eVB.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j3(this.b,w)},
$S:0}
C.eVC.prototype={
$1(d){return this.a.bH6(d,this.b)},
$S:z+67}
C.eVn.prototype={
$0(){return this.a.ab7(this.b)},
$S:0}
C.h4W.prototype={
$1(d){return new C.aeS(this.a,this.b,this.c,null)},
$S:z+68}
C.eVE.prototype={
$0(){return this.a.a0l(this.b)},
$S:0}
C.eVF.prototype={
$0(){return this.a.QO(this.b)},
$S:0}
C.eVG.prototype={
$0(){return this.a.EZ(this.b)},
$S:0}
C.eVH.prototype={
$0(){return this.a.a0m(this.b)},
$S:0}
C.eVD.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eVh.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eVi.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eVj.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eVl.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qv(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eVk(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eVk.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eW3.prototype={
$2(d,e){return d+e.gxJ()},
$S:z+71}
C.eW_.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eW0.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eVL.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.eg:B.c,s=A.l(24),r=A.r(v,D.bYB,B.f,v,v,new A.o(B.ay.j(u?0.18:0.08),v,A.L(B.ay.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.m(v,v,u?B.aS:B.as,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.m(v,v,u?B.bu:B.bj,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aS:B.as
u=u?B.ei:B.bP
w=x.p
return A.eK(v,t,new A.D(B.wy,A.x(A.a([r,B.aO,q,B.T,p,B.dc,A.A(A.a([A.E(A.dU(B.o2,new C.eVJ(d),A.di(v,v,v,v,v,v,v,v,v,o,v,v,B.fh,v,new A.b9(A.l(14),B.a1),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.av,A.E(A.bJ(D.h2b,v,new C.eVK(d),A.bo(B.ay,v,v,v,v,v,B.fh,v,new A.b9(A.l(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.i,0,v,v)],w),B.l,v,B.e,B.P,0,B.p),v),v,v,v,v,B.da,v,new A.b9(s,B.a1),v)},
$S:47}
C.eVJ.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eVK.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eVU.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.eg:B.c,i=A.l(28),h=A.a([new A.ab(0,B.G,B.w.j(k?0.35:0.08),B.h2,28)],x.V),g=k?D.dhd:B.a68,f=x.p
g=A.r(m,A.x(A.a([A.r(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.l(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.fcp,B.aw,new A.bL(B.a7,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.m(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cE,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.i,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a8(B.aA,B.aE,B.x,g,m,m),B.n),m,m,m,m,E.an7,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bj,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b7Y(B.b8,B.js,new C.eVR(v,d),l,"Camera import","Scan QR"),1),B.av,A.E(v.b7Y(B.cD,Q.zB,new C.eVS(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.i,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bj,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.l(16)
r=B.ay.j(k?0.14:0.06)
q=A.l(16)
p=A.L(B.ay.j(0.28),B.r,1)
o=A.r(m,D.bXX,B.f,m,m,new A.o(B.ay.j(0.12),m,m,A.l(12),m,m,B.n),m,m,m,m,B.bV,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.m(m,m,k?B.aS:B.as,m,m,m,m,m,m,m,m,m,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bj,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.i,0,B.p),1)
return A.bm(!0,new A.D(B.wt,A.r(m,A.x(A.a([g,new A.D(B.an4,A.x(A.a([w,B.W,u,B.bA,t,B.W,A.aH(!1,B.a3,!0,m,A.aP(!1,s,!0,A.r(m,A.A(A.a([o,B.bc,n,A.X(B.eI,k?B.bu:B.bj,m,m,m,m)],f),B.l,m,B.e,B.i,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bI,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eVT(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)],f),B.E,m,B.e,B.i,0,B.p),m)],f),B.l,m,B.e,B.P,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:25}
C.eVR.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.w8("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eVS.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.w8("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eVT.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.Ot(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eVP.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.eg:B.c,m=A.l(24),l=A.a([new A.ab(0,B.G,B.w.j(o?0.35:0.08),B.eR,24)],x.V),k=o?B.ei:B.bP
k=A.r(q,q,B.f,q,q,new A.o(k,q,q,A.l(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.l(12)
v=this.c
u=o?B.bu:B.bj
u=A.bx(w,new A.a5(48,48,C.aSu(!0,A.l(12),48,P.Pc,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.m(q,q,o?B.aS:B.as,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Bv(v.gxJ())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.wt,A.r(q,A.x(A.a([B.W,k,new A.D(D.an1,A.A(A.a([u,B.bc,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.m(q,q,o?B.bu:B.bj,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.i,0,B.p),1)],s),B.l,q,B.e,B.i,0,q,q),q),B.Cf,r.cqF(B.v4,B.aV,new C.eVN(d),p,"QR code or backup file","Transfer project"),r.b4Z(!0,B.ek,B.ay,new C.eVO(d),p,"Remove from this device","Delete project"),B.W],s),B.l,q,B.e,B.P,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:25}
C.eVN.prototype={
$0(){A.a6(this.a,!1).O("transfer")
return null},
$S:0}
C.eVO.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
C.eVQ.prototype={
$1(d){return this.bok(d)},
bok(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Mg(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wn(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eW6.prototype={
$0(){var w=this.a
w.a.bv()
w.m(new C.eW5(w))},
$S:0}
C.eW5.prototype={
$0(){return this.a.r++},
$S:0}
C.eW7.prototype={
$0(){var w=this.a
return w.m(new C.eW4(w))},
$S:0}
C.eW4.prototype={
$0(){return this.a.r++},
$S:0}
C.eVI.prototype={
$0(){var w=this.a.c
w.toString
return A.j3(w,null)},
$S:0}
C.eVM.prototype={
$0(){return this.a.cjW(this.b)},
$S:0}
C.eW2.prototype={
$0(){var w=this.a
return w.m(new C.eW1(w,this.b))},
$S:0}
C.eW1.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eVX.prototype={
$0(){return this.a.w8("scan")},
$S:0}
C.eVY.prototype={
$0(){return this.a.w8("file")},
$S:0}
C.eVZ.prototype={
$1(d){return this.a.cqG(d,this.b)},
$S:z+72}
C.eVW.prototype={
$0(){return this.a.F2(this.b)},
$S:0}
C.eVV.prototype={
$0(){return this.a.a0R(this.b,this.c)},
$S:0}
C.cGI.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cGH.prototype={
$1(d){return d.aj()},
$S:z+74}
C.cGF.prototype={
$1(d){return C.hN5(A.a2(d,x.N,x.z))},
$S:z+75}
C.cGG.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fGZ.prototype={
$1(d){return d.y===D.kW},
$S:z+3}
C.h5I.prototype={
$1(d){return C.aRd(d,this.a)},
$S:z+3}
C.fEt.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bT4.prototype={
$1(d){return!d.as},
$S:z+1}
C.bT3.prototype={
$1(d){return d.aj()},
$S:z+23}
C.bT0.prototype={
$1(d){return C.hmF(A.a2(d,x.N,x.z))},
$S:z+24}
C.bT1.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bT2.prototype={
$1(d){return J.k(d)},
$S:17}
C.fuO.prototype={
$2(d,e){return e.e.aS(0,d.e)},
$S:z+25}
C.fqy.prototype={
$1(d){return C.hcj(A.a2(d,x.N,x.z))},
$S:z+79}
C.fqz.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fqA.prototype={
$2(d,e){return e.e.aS(0,d.e)},
$S:z+25}
C.fYd.prototype={
$1(d){return J.k(d)},
$S:17}
C.fYe.prototype={
$1(d){return d.a},
$S:z+81}
C.fYf.prototype={
$1(d){return d.length!==0},
$S:3}
C.fYg.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.fYh.prototype={
$1(d){return d.TB(null).aj()},
$S:z+82}
C.h5G.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fHs.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fKE.prototype={
$1(d){return C.amm(A.a2(d,x.N,x.z))},
$S:z+9}
C.fKF.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fKG.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fKH.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fKI.prototype={
$1(d){return C.uB(d,this.a)},
$S:z+3}
C.fY0.prototype={
$1(d){return C.uB(d,this.a)},
$S:z+3}
C.h5B.prototype={
$1(d){return C.amm(A.a2(d,x.N,x.z))},
$S:z+9}
C.h5C.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.h5D.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fH9.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fHa.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.h5M.prototype={
$1(d){return!d.as},
$S:z+1}
C.fGE.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fGF.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fGG.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.h59.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fLv.prototype={
$1(d){return d.Q},
$S:z+15}
C.fXU.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fKB.prototype={
$1(d){return C.amm(A.a2(d,x.N,x.z))},
$S:z+9}
C.fKC.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fKD.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fXP.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fr8.prototype={
$1(d){return d.length!==0},
$S:3}
C.fr9.prototype={
$1(d){return C.hmF(A.a2(d,x.N,x.z))},
$S:z+24}
C.fra.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.frb.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.frc.prototype={
$1(d){return d.length!==0},
$S:3}
C.frp.prototype={
$2(d,e){return d.eB(new C.frq(e))},
$S:1986}
C.frq.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.ce},
$S:1987}
C.frm.prototype={
$1(d){return C.i95(d,this.a)},
$S:z+84}
C.frn.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fro.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fvv.prototype={
$1(d){return d.a},
$S:z+56}
C.fvw.prototype={
$1(d){return d.length!==0},
$S:3}
C.fvx.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fyr.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fDJ.prototype={
$1(d){return C.hyf(d,C.Ho(d,this.a))},
$S:z+5}
C.fDK.prototype={
$1(d){return C.hyg(d,C.Ho(d,this.a))},
$S:z+5};(function aliases(){var w=C.aBP.prototype
w.bw9=w.t
w=C.aA2.prototype
w.bw4=w.t
w=C.aHf.prototype
w.bwx=w.t
w=C.aBQ.prototype
w.bwa=w.t
w=C.aBS.prototype
w.bwb=w.t
w=C.aBT.prototype
w.bwc=w.t
w=C.aNq.prototype
w.bz0=w.t
w=C.aPy.prototype
w.bBl=w.t
w=C.aPz.prototype
w.bBm=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aEQ.prototype,"gcnA","cnB",28)
var r
w(r=C.aBO.prototype,"gcgt","cgu",65)
v(r,"gaOZ","O0",0)
v(r,"gcvV","Br",0)
v(r,"gbOV","OH",0)
v(r,"gcKj","z7",0)
v(r,"gcpD","a1y",0)
v(r,"gbKi","Op",0)
v(r,"gbPk","XU",0)
w(r,"gbUq","bUr",78)
v(r,"gbEC","Aq",0)
v(C.aBR.prototype,"gcKf","FV",0)
v(r=C.amb.prototype,"gbsv","bsw",2)
v(r,"gbsn","bso",2)
v(r,"gcLo","cLp",2)
u(r,"gqo","kO",0)
u(r=C.ako.prototype,"geY","fX",2)
w(r,"gcc6","cc7",27)
u(C.av5.prototype,"gqo","kO",0)
v(r=C.az3.prototype,"gcWX","cWY",2)
u(r,"gqo","kO",0)
u(C.aL3.prototype,"gbst","bsu",2)
v(C.amk.prototype,"gBV","cLB",2)
u(r=C.ami.prototype,"gcMh","cMi",2)
u(r,"gqo","kO",0)
v(r=C.ame.prototype,"gbrl","brm",2)
v(r,"gcRt","cRu",2)
u(r=C.amg.prototype,"geY","fX",2)
u(r,"gix","cKV",2)
v(r=C.amc.prototype,"gcKK","cKL",2)
u(r,"gbqd","jI",2)
v(r=C.aFo.prototype,"gagZ","wo",0)
v(r,"gcjb","a0I",0)
v(r,"gaTc","Iv",0)
v(r=C.aFl.prototype,"gcGd","a3G",0)
v(r,"gagZ","wo",0)
v(r,"gctX","a2c",0)
v(r,"gcj6","b3c",2)
v(r,"gck8","a0W",0)
w(r,"gcgn","cgo",35)
v(r,"gbPc","IA",0)
v(r,"gcHi","cHj",2)
v(r,"gc6h","ZE",0)
w(r,"gceS","ceT",36)
v(r,"gciV","ciW",2)
v(r=C.aDP.prototype,"gccc","Ql",0)
v(r,"gcce","ccf",2)
v(r,"gbLN","aaK",0)
v(r=C.aFn.prototype,"gbSP","Yo",0)
v(r,"gc2n","Z5",0)
v(r,"gcAl","a33",0)
v(r,"gcwu","a2F",0)
v(C.aFm.prototype,"gcwd","aiN",0)
v(C.auh.prototype,"gceQ","a0j",0)
v(C.aAy.prototype,"ga3p","KQ",2)
v(C.aAx.prototype,"ga3p","KQ",2)
v(C.azg.prototype,"ga3p","KQ",2)
v(r=C.aGR.prototype,"gb4m","Rk",0)
v(r,"gbDq","Wx",0)
v(r,"gcjX","cjY",2)
w(C.aGQ.prototype,"gcfI","cfJ",69)
t(C.aGS.prototype,"gaT7",0,0,null,["$1","$0"],["Iu","bN6"],70,0,0)
s(C,"hG1","ijf",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aE,[C.apT,C.uW,C.nw,C.Iz,C.ag3,C.KW,C.uX,C.bTA,C.ti,C.bpq,C.amt,C.aea,C.lt,C.bSb,C.aut,C.zI,C.al4,C.MV,C.baP,C.aae,C.bi6,C.aga,C.aAh,C.afZ,C.aL3,C.L2,C.GH,C.bh_,C.aKZ,C.arg,C.dhW,C.lY,C.aVq,C.aVp,C.aTs,C.um,C.rs,C.lE,C.hZ,C.kY,C.aIX])
u(A.hx,[C.fPi,C.fPh,C.fPj,C.fYV,C.fCm,C.fCn,C.fCs,C.fN1,C.fN0,C.fN_,C.c8l,C.fZr,C.fZj,C.fZv,C.fHh,C.dQE,C.dQz,C.dQA,C.dQc,C.dQ8,C.dQT,C.dQU,C.dQN,C.dQO,C.dQV,C.dQW,C.fI2,C.fKy,C.fKz,C.fXZ,C.h5A,C.fH8,C.fYz,C.dh8,C.dgv,C.dgE,C.dgV,C.dgA,C.dgG,C.dgx,C.dgK,C.dgL,C.dgJ,C.dh_,C.dgZ,C.diW,C.diX,C.diY,C.dhm,C.dhr,C.dhq,C.cPH,C.cPJ,C.d8k,C.d8J,C.d8K,C.d8N,C.d8P,C.d8Q,C.d8R,C.d8T,C.d8U,C.bRW,C.bRQ,C.fvc,C.h5t,C.h5u,C.h5v,C.h5q,C.h5w,C.h5x,C.h5y,C.h5p,C.fIE,C.fX_,C.fEu,C.fLu,C.bN_,C.h5S,C.fXv,C.bLa,C.bL5,C.bL7,C.bL6,C.cqH,C.cqC,C.cqD,C.cqB,C.cqz,C.cqE,C.cQL,C.cFH,C.cFK,C.cFI,C.cFL,C.cFM,C.f7E,C.fhO,C.bSI,C.bSC,C.bSG,C.bSj,C.e2i,C.e2f,C.e2g,C.e2e,C.e2k,C.bSA,C.bSq,C.bSa,C.bS9,C.bS5,C.bS6,C.bS7,C.bS8,C.e3Y,C.e3n,C.e3i,C.e2K,C.e3_,C.e32,C.e2Z,C.e2Y,C.e3e,C.e3f,C.e39,C.e2y,C.e3q,C.e3k,C.e2A,C.e2B,C.e2C,C.e2H,C.e2F,C.e2E,C.e2U,C.e2V,C.e2P,C.e3x,C.e3t,C.dhx,C.dhy,C.fI6,C.fI7,C.fI8,C.fI4,C.fI5,C.fIb,C.fIc,C.fId,C.fI9,C.fIa,C.dhR,C.dhH,C.dhC,C.dhM,C.dhN,C.dhQ,C.dhE,C.dhT,C.dhU,C.dhV,C.fno,C.eYq,C.dxQ,C.dy_,C.dy0,C.dy1,C.dy4,C.dy3,C.dy5,C.dya,C.dyb,C.cfw,C.cfv,C.cfr,C.cfs,C.cft,C.cfu,C.cfB,C.cfy,C.cfz,C.e3K,C.e3N,C.e3M,C.e3T,C.e3U,C.dPY,C.fZ1,C.fYp,C.h58,C.fYt,C.fYs,C.d97,C.d98,C.d93,C.cHv,C.cHx,C.cHy,C.cHq,C.cHz,C.fmU,C.fWN,C.eVy,C.eVu,C.eVq,C.eVo,C.eVC,C.h4W,C.eVL,C.eVU,C.eVP,C.eVQ,C.eVZ,C.cGH,C.cGF,C.cGG,C.fGZ,C.h5I,C.fEt,C.bT4,C.bT3,C.bT0,C.bT1,C.bT2,C.fqy,C.fqz,C.fYd,C.fYe,C.fYf,C.fYg,C.fYh,C.h5G,C.fHs,C.fKE,C.fKF,C.fKH,C.fKI,C.fY0,C.h5B,C.h5C,C.h5D,C.fH9,C.fHa,C.h5M,C.fGE,C.fGF,C.h59,C.fLv,C.fXU,C.fKB,C.fKC,C.fXP,C.fr8,C.fr9,C.fra,C.frb,C.frc,C.frq,C.frm,C.frn,C.fvv,C.fvw,C.fyr,C.fDJ,C.fDK])
u(A.aw,[C.b01,C.am9,C.aWK,C.a__,C.bcB,C.QR,C.a6H,C.tJ,C.IB,C.bgY,C.bkM,C.byO,C.bo8,C.aew,C.bkL,C.aev,C.bkK,C.aDQ,C.aK0,C.aex,C.GD,C.bgZ,C.adM,C.bgX,C.bh1,C.b0_,C.auh,C.aeS])
u(A.mo,[C.bde,C.bet,C.bek,C.aIR,C.bjN,C.bpp,C.aWP,C.bdg,C.aBN,C.bcK,C.btr,C.bjV,C.bjl,C.bjs,C.bh0,C.bg2,C.blU,C.byD])
u(A.iN,[C.fZo,C.fZp,C.fZq,C.fZh,C.fZi,C.fZt,C.fZu,C.dQQ,C.dQC,C.dQF,C.dQj,C.dQk,C.dQl,C.dQi,C.dQq,C.dQh,C.dQr,C.dQs,C.dQg,C.dQt,C.dQf,C.dQu,C.dQe,C.dQv,C.dQ6,C.dQ7,C.dQd,C.dQw,C.dQb,C.dQx,C.dQa,C.dQm,C.dQ9,C.dQn,C.dQ5,C.dQo,C.dQp,C.dQR,C.dQS,C.dQG,C.dQH,C.dQI,C.dQJ,C.dQK,C.dQL,C.dQM,C.dQY,C.dQP,C.fI3,C.dgt,C.dgr,C.dgs,C.dgu,C.dh7,C.dgX,C.dgU,C.dgw,C.dgY,C.dgC,C.dgD,C.dgF,C.dgW,C.dgB,C.dgH,C.dh4,C.dgR,C.dgQ,C.dgS,C.dgT,C.dgM,C.dgO,C.dgP,C.dgI,C.dh0,C.dh3,C.dgy,C.dgz,C.diV,C.diU,C.diT,C.diS,C.diZ,C.diR,C.dj_,C.dhn,C.dho,C.dhp,C.dhs,C.dhl,C.dhk,C.cPI,C.d8j,C.d8w,C.d8v,C.d8L,C.d8u,C.d8M,C.d8t,C.d8s,C.d8O,C.d8r,C.d8E,C.d8D,C.d8V,C.bRP,C.bRZ,C.bRR,C.bRS,C.bRV,C.bRU,C.bRX,C.bRY,C.bRT,C.bRN,C.bRO,C.bTs,C.bTt,C.bTu,C.bTv,C.bTw,C.bTx,C.bTy,C.h5s,C.fX0,C.bL9,C.bL4,C.bL2,C.bL3,C.bL1,C.cqJ,C.cqK,C.cqI,C.cqL,C.cqN,C.cqO,C.cqP,C.cqF,C.cFG,C.cFP,C.cFQ,C.cFR,C.cFO,C.cFS,C.cFT,C.cFU,C.cFV,C.cFJ,C.cFN,C.bSY,C.bSX,C.bSV,C.bST,C.bSU,C.bSQ,C.bSR,C.bSS,C.bSW,C.bSP,C.f7F,C.f7G,C.f7H,C.f7I,C.f7J,C.bSM,C.bSN,C.bSO,C.bSH,C.bSJ,C.bSK,C.bSL,C.bSD,C.bSn,C.bSm,C.bSl,C.bSf,C.bSg,C.bSk,C.bSh,C.bSi,C.bSe,C.e2h,C.e2j,C.e2c,C.e2d,C.e2b,C.e2l,C.e2m,C.e2n,C.e2q,C.e2r,C.e2s,C.e2t,C.e2u,C.e2v,C.e2w,C.e2x,C.e2o,C.e2p,C.bSz,C.bSy,C.bSp,C.bSo,C.bSv,C.bSw,C.bSs,C.bSt,C.bSu,C.bSr,C.bS_,C.bS0,C.bS4,C.bS3,C.bS2,C.bS1,C.e3X,C.e3W,C.e3Z,C.e4_,C.e40,C.e3V,C.e42,C.e41,C.e3l,C.e3m,C.e3o,C.e2L,C.e31,C.e30,C.e33,C.e3h,C.e2X,C.e37,C.e38,C.e36,C.e34,C.e35,C.e3a,C.e3b,C.e3c,C.e3g,C.e2z,C.e3j,C.e2D,C.e2G,C.e2I,C.e3p,C.e2O,C.e2M,C.e2Q,C.e2R,C.e2N,C.e2S,C.e2W,C.e3y,C.e3z,C.e3r,C.e3u,C.e3v,C.e3w,C.e3B,C.e3s,C.e2J,C.dhw,C.dhv,C.dhA,C.dhK,C.dhB,C.eYp,C.dxR,C.dxO,C.dxP,C.dxZ,C.dxY,C.dxX,C.dy6,C.dxW,C.dy7,C.dxV,C.dy8,C.dxU,C.dy9,C.dxT,C.dxS,C.dy2,C.dyc,C.dyl,C.e3L,C.e3P,C.e3Q,C.e3H,C.e3I,C.e3J,C.e3O,C.e3S,C.e3R,C.e3C,C.e3D,C.e3E,C.e3F,C.e3G,C.dPZ,C.fYZ,C.cp0,C.d96,C.d95,C.d99,C.d92,C.d94,C.cHn,C.cHt,C.cHu,C.cHs,C.cHw,C.cHr,C.cHo,C.cHp,C.cHA,C.fmV,C.fmW,C.eVA,C.eVr,C.eVs,C.eVt,C.eVv,C.eVw,C.eVz,C.eVm,C.eVp,C.eVB,C.eVn,C.eVE,C.eVF,C.eVG,C.eVH,C.eVD,C.eVh,C.eVi,C.eVj,C.eVl,C.eVk,C.eW_,C.eW0,C.eVJ,C.eVK,C.eVR,C.eVS,C.eVT,C.eVN,C.eVO,C.eW6,C.eW5,C.eW7,C.eW4,C.eVI,C.eVM,C.eW2,C.eW1,C.eVX,C.eVY,C.eVW,C.eVV])
u(A.af,[C.aq5,C.U8,C.a_I,C.a_M,C.a_K,C.a_i,C.ama,C.akn,C.av4,C.az2,C.amj,C.amh,C.amd,C.Wu,C.amf,C.U9,C.arj,C.ard,C.a0m,C.arh,C.a0G,C.a0H,C.a7t,C.a_k,C.a_j,C.ZR,C.a2s,C.Gr,C.az9,C.aug,C.aua,C.auf,C.P8])
u(A.ah,[C.aEQ,C.bgS,C.aBO,C.bhg,C.aBR,C.ber,C.aBP,C.aA2,C.aHf,C.az3,C.aBT,C.aBS,C.aBQ,C.bmg,C.amg,C.amc,C.aFo,C.aFl,C.aDP,C.aFn,C.aFm,C.bmh,C.aNq,C.aAy,C.aAx,C.azg,C.byG,C.aPy,C.aPz,C.aGR,C.bnE,C.aGQ,C.bAr])
u(A.jz,[C.dQB,C.dQD,C.dQy,C.dQX,C.fKA,C.bRM,C.dh6,C.dh5,C.dgN,C.dh1,C.dh2,C.dht,C.bTz,C.bTr,C.bSc,C.bSd,C.h5r,C.h5R,C.bL8,C.cqM,C.cqG,C.cqA,C.f7K,C.bSB,C.bSE,C.bSF,C.ds5,C.bSx,C.e3d,C.e2T,C.e3A,C.dhJ,C.dhI,C.dhG,C.dhL,C.dhO,C.dhP,C.dhz,C.dhD,C.dhF,C.dhS,C.cfp,C.cfx,C.cfC,C.dQ_,C.fZ0,C.fZ_,C.fmS,C.fmT,C.eVx,C.eW3,C.cGI,C.fuO,C.fqA,C.fKG,C.fGG,C.fKD,C.frp,C.fro,C.fvx])
u(A.lF,[C.a1Y,C.agc,C.a2g,C.a09,C.acO,C.aLL,C.IA,C.aml,C.cGJ,C.cGK])
t(C.amb,C.aBP)
t(C.ako,C.aA2)
t(C.av5,C.aHf)
t(C.bgW,C.aBT)
t(C.amk,C.bgW)
t(C.bgV,C.aBS)
t(C.ami,C.bgV)
t(C.bgU,C.aBQ)
t(C.ame,C.bgU)
t(C.blV,C.aNq)
t(C.byE,C.aPy)
t(C.byF,C.aPz)
t(C.aGS,C.bAr)
t(C.bb1,A.baQ)
t(C.byH,A.a78)
t(C.bb0,C.byH)
w(C.aBP,A.cd)
w(C.aA2,A.cd)
w(C.aHf,A.eO)
w(C.aBQ,A.cd)
v(C.bgU,C.afZ)
w(C.aBS,A.cd)
v(C.bgV,C.afZ)
w(C.aBT,A.cd)
v(C.bgW,C.afZ)
w(C.aNq,A.eO)
w(C.aPy,A.cd)
w(C.aPz,A.cd)
v(C.bAr,A.eD)
v(C.byH,A.ji)})()
A.iW(b.typeUniverse,JSON.parse('{"b01":{"aw":[],"v":[]},"bde":{"aC":[]},"aq5":{"af":[],"v":[]},"aEQ":{"ah":["aq5"]},"U8":{"af":[],"v":[]},"am9":{"aw":[],"v":[]},"aWK":{"aw":[],"v":[]},"bgS":{"ah":["U8"]},"a_I":{"af":[],"v":[]},"a_M":{"af":[],"v":[]},"a_K":{"af":[],"v":[]},"a_i":{"af":[],"v":[]},"aBO":{"ah":["a_I"]},"bhg":{"ah":["a_M"]},"aBR":{"ah":["a_K"]},"a__":{"aw":[],"v":[]},"bet":{"aC":[]},"bek":{"aC":[]},"ber":{"ah":["a_i"]},"aIR":{"aC":[]},"bjN":{"aC":[]},"bcB":{"aw":[],"v":[]},"ama":{"af":[],"v":[]},"amb":{"ah":["ama"]},"bpp":{"aC":[]},"aWP":{"aC":[]},"akn":{"af":[],"v":[]},"av4":{"af":[],"v":[]},"az2":{"af":[],"v":[]},"ako":{"ah":["akn"]},"bdg":{"aC":[]},"QR":{"aw":[],"v":[]},"aBN":{"aC":[]},"av5":{"ah":["av4"]},"bcK":{"aC":[]},"az3":{"ah":["az2"]},"amj":{"af":[],"v":[]},"amh":{"af":[],"v":[]},"amd":{"af":[],"v":[]},"amk":{"ah":["amj"]},"btr":{"aC":[]},"ami":{"ah":["amh"]},"bjV":{"aC":[]},"ame":{"ah":["amd"]},"bjl":{"aC":[]},"Wu":{"af":[],"v":[]},"amf":{"af":[],"v":[]},"U9":{"af":[],"v":[]},"a6H":{"aw":[],"v":[]},"bjs":{"aC":[]},"tJ":{"aw":[],"v":[]},"IB":{"aw":[],"v":[]},"bmg":{"ah":["Wu"]},"amg":{"ah":["amf"]},"amc":{"ah":["U9"]},"arj":{"af":[],"v":[]},"ard":{"af":[],"v":[]},"a0m":{"af":[],"v":[]},"aex":{"aw":[],"v":[]},"aFo":{"ah":["arj"]},"aFl":{"ah":["ard"]},"bgY":{"aw":[],"v":[]},"bh0":{"aC":[]},"bkM":{"aw":[],"v":[]},"bg2":{"aC":[]},"byO":{"aw":[],"v":[]},"bo8":{"aw":[],"v":[]},"aDP":{"ah":["a0m"]},"aew":{"aw":[],"v":[]},"bkL":{"aw":[],"v":[]},"aev":{"aw":[],"v":[]},"bkK":{"aw":[],"v":[]},"aDQ":{"aw":[],"v":[]},"aK0":{"aw":[],"v":[]},"GD":{"aw":[],"v":[]},"arh":{"af":[],"v":[]},"a0G":{"af":[],"v":[]},"a0H":{"af":[],"v":[]},"aFn":{"ah":["arh"]},"bgZ":{"aw":[],"v":[]},"adM":{"aw":[],"v":[]},"bgX":{"aw":[],"v":[]},"bh1":{"aw":[],"v":[]},"aFm":{"ah":["a0G"]},"bmh":{"ah":["a0H"]},"b0_":{"aw":[],"v":[]},"a7t":{"af":[],"v":[]},"blV":{"ah":["a7t"]},"blU":{"aC":[]},"auh":{"aw":[],"v":[]},"a_k":{"af":[],"v":[]},"a_j":{"af":[],"v":[]},"ZR":{"af":[],"v":[]},"a2s":{"af":[],"v":[]},"aAy":{"ah":["a_k"]},"aAx":{"ah":["a_j"]},"azg":{"ah":["ZR"]},"byG":{"ah":["a2s"]},"Gr":{"af":[],"v":[]},"az9":{"af":[],"v":[]},"byE":{"ah":["Gr"]},"byF":{"ah":["az9"]},"byD":{"aC":[]},"aug":{"af":[],"v":[]},"aGR":{"ah":["aug"]},"aeS":{"aw":[],"v":[]},"aua":{"af":[],"v":[]},"auf":{"af":[],"v":[]},"bnE":{"ah":["aua"]},"aGQ":{"ah":["auf"]},"P8":{"af":[],"v":[]},"aGS":{"ah":["P8"],"eD":[]},"bb0":{"ji":[],"fk":[]}}'))
A.Dn(b.typeUniverse,JSON.parse('{"afZ":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.at
return{e2:w("aTs"),cq:w("ml"),Q:w("rs"),r:w("bv<n,n>"),c5:w("aVp"),dY:w("aVq"),fH:w("MV"),de:w("al4"),dN:w("N2<H>"),gc:w("Er<H>"),A:w("eL<n?>"),e:w("Iz"),B:w("nw"),P:w("hZ"),df:w("lt"),k:w("kY"),x:w("aB<~>"),U:w("O<T5>"),V:w("O<ab>"),C:w("O<rs>"),O:w("O<u>"),c:w("O<MV>"),b:w("O<al4>"),ac:w("O<eL<n?>>"),I:w("O<nw>"),u:w("O<hZ>"),J:w("O<lt>"),_:w("O<kY>"),cl:w("O<aB<ai<a9<n,@>>>>"),R:w("O<nz>"),eU:w("O<ai<+(G,G)>>"),ez:w("O<a9<n,aE>>"),gE:w("O<a9<n,n>>"),Y:w("O<a9<n,@>>"),fD:w("O<mS>"),bp:w("O<oL>"),g:w("O<p>"),ar:w("O<aut>"),v:w("O<fW>"),gy:w("O<aae>"),L:w("O<+(n,n)>"),G:w("O<+(G,G)>"),E:w("O<+(G,~())>"),bd:w("O<+(n,H,Q)>"),bF:w("O<+count,id,name(H,n,n)>"),F:w("O<cU>"),s:w("O<n>"),cF:w("O<au>"),aS:w("O<j6>"),dT:w("O<baP>"),p:w("O<v>"),Z:w("O<fk>"),D:w("O<lE>"),h:w("O<aAh>"),cC:w("O<bi6>"),fp:w("O<KW>"),M:w("O<L2>"),gZ:w("O<aIX>"),gA:w("O<ag3>"),e4:w("O<aga>"),dE:w("O<aKZ>"),f7:w("O<Q>"),n:w("O<G>"),t:w("O<H>"),dS:w("O<aC?>"),d4:w("O<n?>"),eF:w("cw<ah<af>>"),d:w("ai<nw>"),do:w("ai<hZ>"),cg:w("ai<lt>"),ax:w("ai<kY>"),fO:w("ai<a9<n,@>>"),cz:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(H,n,n)>"),dy:w("ai<n>"),er:w("ai<au>"),gk:w("ai<lE>"),j:w("ai<@>"),fK:w("bB<n,n>"),d2:w("bB<n,ai<a9<n,@>>>"),a:w("a9<n,@>"),f:w("a9<@,@>"),gv:w("N<n,IC>"),cM:w("N<H,n>"),w:w("iF"),g2:w("rR"),bV:w("apT"),fL:w("cu"),K:w("aE"),dc:w("fW"),fo:w("Pu<H>"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),bn:w("+games,limit(Q,H)"),d9:w("+dx,hidden(G,ai<hZ>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),fT:w("ix<hZ>"),ec:w("ix<n>"),gW:w("r8<G>"),X:w("br<G>"),bW:w("dL"),W:w("bt<n>"),b4:w("bt<H>"),cI:w("k6<n>"),av:w("Y<zI>"),cc:w("Y<n>"),l:w("v"),gF:w("fk"),fA:w("lE"),dO:w("GH"),bw:w("aev<n?>"),cy:w("L4"),q:w("mC"),y:w("Q"),i:w("G"),z:w("@"),S:w("H"),eK:w("ai<kY>?"),m:w("arg?"),cT:w("p?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),he:w("+qrPayload,token,usesRemaining(n,n,H)?"),gG:w("+members,trees,viewOnly(H,H,Q)?"),az:w("qn?"),T:w("n?"),aD:w("dL?"),o:w("lE?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b5u=new A.be(B.fQ,B.bJ,B.fQ,B.bJ)
D.aep=new A.be(B.fQ,B.ir,B.fQ,B.ir)
D.b5I=new A.be(B.iF,B.bJ,B.bJ,B.bJ)
D.b5M=new A.ay(B.cJ,1.4,B.r,-1)
D.b5W=new A.ay(B.ab,1,B.r,-1)
D.aeU=new A.aY(140,1/0,0,1/0)
D.b7j=new A.aY(0,1/0,64,1/0)
D.b7n=new A.aY(0,84,0,1/0)
D.af1=new A.aY(130,1/0,0,1/0)
D.aDn=w([B.m8,B.rP,B.c],x.O)
D.c8Z=new A.a8(B.aA,B.aE,B.x,D.aDn,null,null)
D.b87=new A.o(null,null,null,null,null,D.c8Z,B.n)
D.dgC=w([B.aV,B.bQ],x.O)
D.cb5=new A.a8(B.b0,B.b7,B.x,D.dgC,null,null)
D.b8s=new A.o(null,null,null,null,null,D.cb5,B.n)
D.YA=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fC=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dkI=w([B.dB,D.YA,D.fC],x.O)
D.c8c=new A.a8(B.b0,B.b7,B.x,D.dkI,null,null)
D.b9c=new A.o(null,null,null,null,null,D.c8c,B.n)
D.fu6=new A.F(!0,B.bW,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h4F=new A.B("?",null,D.fu6,null,null,null,null,null,null,null,null,null)
D.bd2=new A.cj(B.A,null,null,D.h4F,null)
D.W5=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNG=new A.B("\ud83c\udf33",null,D.W5,null,null,null,null,null,null,null,null,null)
D.afL=new A.cj(B.A,null,null,D.fNG,null)
D.fQl=new A.B("\ud83c\udfc6",null,Aq.KQ,null,null,null,null,null,null,null,null,null)
D.bdd=new A.cj(B.A,null,null,D.fQl,null)
D.bf2=new A.fl(null,null,null,null,null,E.ks,null,null,null,null)
D.afN=new A.cj(B.A,null,null,D.bf2,null)
D.kQ=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fuH=new A.F(!0,D.kQ,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPl=new A.B("No books on the shelf yet.",null,D.fuH,null,null,null,null,null,null,null,null,null)
D.euP=new A.D(B.nL,D.fPl,null)
D.bdt=new A.cj(B.A,null,null,D.euP,null)
D.fBR=new A.F(!0,D.fC,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h5A=new A.B("\ud83d\ude8c  On the road\u2026",null,D.fBR,null,null,null,null,null,null,null,null,null)
D.evp=new A.D(B.cp,D.h5A,null)
D.bdW=new A.cj(B.A,null,null,D.evp,null)
D.aXu=new A.B("\ud83e\uddfa",null,D.W5,null,null,null,null,null,null,null,null,null)
D.bea=new A.cj(B.A,null,null,D.aXu,null)
D.fSP=new A.B("\ud83c\udfad",null,D.W5,null,null,null,null,null,null,null,null,null)
D.bel=new A.cj(B.A,null,null,D.fSP,null)
D.beo=new A.cj(B.A,null,null,A7.Yn,null)
D.ag7=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.agd=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bgC=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bgH=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bgT=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bgW=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bgY=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bh5=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lB=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bh9=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bhe=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bhf=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bhg=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lC=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bhR=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.BL=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bi_=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bij=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bim=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bis=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.biA=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.agQ=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.biH=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.YM=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.agT=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.biS=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.YO=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bjc=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.ah4=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bjB=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bjR=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bkd=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bko=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.FS=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bkL=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bkO=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bkS=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.ahx=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.blb=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.blh=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bln=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.ahB=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.blv=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.blX=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bm4=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bm6=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bmb=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.ahR=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bmN=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.aif=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bnL=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.ais=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bo9=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.G4=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bof=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bop=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bor=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.aix=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.boK=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.boL=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.boO=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.aiF=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.Zx=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bpa=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bpv=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bpA=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.aiR=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bpH=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.ZE=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bq0=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bq1=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.Gc=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bqP=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.brs=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bry=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.brC=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qo=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.brN=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.brR=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.brX=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.brZ=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.ajC=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.ajG=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.Gi=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.ZZ=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.ajP=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bt6=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.btp=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.btP=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.btY=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.ake=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.a_9=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bu7=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.buo=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.a_e=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.buF=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.buV=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.a_j=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bv_=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.akw=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.aky=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bvi=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.akE=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bvK=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bvO=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bvU=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.bw0=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bw9=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bwI=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bxd=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fJw=new A.B("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bAK=new A.eL(null,D.fJw,B.fd,null,x.A)
D.fSG=new A.B("None",null,null,null,null,null,null,null,null,null,null,null)
D.bAM=new A.eL(null,D.fSG,B.fd,null,x.A)
D.alw=new A.bd(3e4)
D.bBj=new A.bd(38e5)
D.bC2=new A.iq(0,10,0,10)
D.bCb=new A.R(0,1,0,0)
D.bCm=new A.iq(0,4,0,4)
D.bCp=new A.R(0,4,5,0)
D.bCG=new A.R(10,10,14,10)
D.bCS=new A.iq(10,4,10,4)
D.bD_=new A.iq(10,8,10,8)
D.bD0=new A.R(10,8,8,8)
D.bDw=new A.R(12,6,12,2)
D.bDO=new A.R(14,0,14,6)
D.bDS=new A.R(14,10,6,6)
D.bDT=new A.R(14,12,14,0)
D.bDX=new A.R(14,12,14,8)
D.bE_=new A.R(14,12,8,14)
D.bE3=new A.iq(14,14,14,14)
D.bEl=new A.R(14,6,14,40)
D.bEo=new A.R(14,8,14,30)
D.bEN=new A.R(16,2,16,10)
D.bEW=new A.R(16,6,16,30)
D.bEY=new A.R(16,6,16,8)
D.bFc=new A.R(18,10,18,4)
D.bFe=new A.R(18,12,18,0)
D.bFl=new A.R(18,14,12,4)
D.an1=new A.R(18,16,18,8)
D.bFB=new A.R(18,20,18,22)
D.bFH=new A.R(18,30,18,30)
D.bFY=new A.R(20,10,12,20)
D.bG0=new A.R(20,11,20,11)
D.bGc=new A.R(20,18,16,18)
D.bGe=new A.R(20,18,20,6)
D.bH2=new A.R(24,32,24,28)
D.bH3=new A.R(24,36,24,32)
D.bH7=new A.R(26,26,24,14)
D.bHm=new A.R(2,4,2,8)
D.bHq=new A.R(30,0,30,0)
D.bHB=new A.R(38,22,22,22)
D.anq=new A.R(40,24,24,24)
D.bHD=new A.iq(40,40,40,40)
D.bHF=new A.R(46,30,30,30)
D.bI6=new A.R(56,40,40,40)
D.bIa=new A.R(1.25,1.25,1.25,1.25)
D.bIb=new A.R(60,0,60,0)
D.bIf=new A.R(6,14,6,16)
D.bIj=new A.R(6,4,12,0)
D.bIn=new A.R(6,6,10,2)
D.bIu=new A.iq(7,3,7,3)
D.bJ1=new A.R(5,1.5,5,1.5)
D.bJc=new A.R(6,2.5,6,2.5)
D.h_R=new A.B("Family Games",null,B.jP,null,null,null,null,null,null,null,null,null)
D.fI8=new A.B("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.VW,null,null,null,null,null,null,null,null,null)
D.cKf=w([D.h_R,D.fI8],x.p)
D.byd=new A.fm(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.cKf,null)
D.bJD=new A.bz(1,B.bb,D.byd,null)
D.h4c=new A.B("Signature",null,B.ni,null,null,null,null,null,null,null,null,null)
D.bJG=new A.bz(1,B.bb,D.h4c,null)
D.fXq=new A.B("MADE BY THE ONE WHO PLANTED THE TREE",null,S.tQ,null,null,null,null,null,null,null,null,null)
D.bKd=new A.bz(1,B.bb,D.fXq,null)
D.h1j=new A.B("Tell the AI what to fix",null,B.dq,null,null,null,null,null,null,null,null,null)
D.bKv=new A.bz(1,B.bb,D.h1j,null)
D.fCC=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3h=new A.B("Worksheets",null,D.fCC,null,null,null,null,null,null,null,null,null)
D.fCO=new A.F(!0,E.agz,null,null,null,null,13,B.cE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h29=new A.B("Track your project spending",null,D.fCO,null,null,null,null,null,null,null,null,null)
D.d7Y=w([D.h3h,B.aw,D.h29],x.p)
D.bxR=new A.fm(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.d7Y,null)
D.bKB=new A.bz(1,B.bb,D.bxR,null)
D.fxw=new A.F(!0,E.ks,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fII=new A.B("FAMILY LIBRARY",null,D.fxw,null,null,null,null,null,null,null,null,null)
D.bKU=new A.bz(1,B.bb,D.fII,null)
D.OP=new C.Iz("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.wC=new C.IA(0,"male")
D.ox=new C.IA(1,"female")
D.z3=new C.IA(2,"unknown")
D.uJ=new C.aml(0,"owner")
D.OQ=new C.aml(1,"editor")
D.kW=new C.aml(2,"viewer")
D.apn=new A.a_(61199,"MaterialIcons",!1)
D.bQc=new A.a_(61504,"MaterialIcons",!1)
D.bQd=new A.a_(61505,"MaterialIcons",!1)
D.bQf=new A.a_(61587,"MaterialIcons",!1)
D.bQm=new A.a_(61890,"MaterialIcons",!1)
D.bRd=new A.a_(63034,"MaterialIcons",!0)
D.bRv=new A.a_(63153,"MaterialIcons",!1)
D.bS2=new A.a_(63429,"MaterialIcons",!1)
D.aru=new A.a_(984520,"MaterialIcons",!1)
D.bQK=new A.a_(62776,"MaterialIcons",!1)
D.bUo=new A.ae(D.bQK,26,B.b3,null,null,null)
D.bPa=new A.a_(57648,"MaterialIcons",!1)
D.bUI=new A.ae(D.bPa,14,B.c,null,null,null)
D.bV_=new A.ae(B.Hp,17,null,null,null,null)
D.bV5=new A.ae(B.a2O,null,B.bQ,null,null,null)
D.bVw=new A.ae(E.a2W,null,null,null,null,null)
D.bVz=new A.ae(B.j9,18,E.ks,null,null,null)
D.a2E=new A.a_(62044,"MaterialIcons",!1)
D.bVE=new A.ae(D.a2E,null,B.aV,null,null,null)
D.bVL=new A.ae(B.zh,18,B.c,null,null,null)
D.bWs=new A.ae(B.ed,16,null,null,null,null)
D.bWz=new A.ae(D.a2E,32,B.aV,null,null,null)
D.bWS=new A.ae(E.apo,18,B.cJ,null,null,null)
D.bXX=new A.ae(B.HA,22,B.ay,null,null,null)
D.bY8=new A.ae(B.ed,22,B.b3,null,null,null)
D.bYl=new A.ae(Y.a2J,22,B.c,null,null,null)
D.bYr=new A.ae(B.uS,52,B.c,null,null,null)
D.bYB=new A.ae(B.HA,30,B.ay,null,null,null)
D.bYU=new A.ae(B.a3_,null,B.c,null,null,null)
D.asc=new A.ae(B.v4,22,B.c,null,null,null)
D.bZ2=new A.ae(B.ed,17,null,null,null,null)
D.bZq=new A.ae(B.wP,26,B.cJ,null,null,null)
D.c_c=new A.ae(B.a39,16,null,null,null,null)
D.c_Z=new A.ae(B.uS,24,B.c,null,null,null)
D.c03=new A.ae(B.Pj,20,B.tp,null,null,null)
D.c08=new A.ae(B.Hn,null,B.bQ,null,null,null)
D.c0h=new A.ae(B.j9,18,B.c,null,null,null)
D.c0X=new A.ae(B.cC,22,B.ab,null,null,null)
D.c1O=new A.ae(B.ek,16,B.ab,null,null,null)
D.c1Z=new A.ae(D.a2E,20,B.aV,null,null,null)
D.asD=new A.ae(B.hO,20,null,null,null,null)
D.c2v=new A.ae(B.cC,18,D.kQ,null,null,null)
D.c2N=new A.ae(B.zr,28,B.c,null,null,null)
D.c2Z=new A.ae(B.P8,null,B.fi,null,null,null)
D.c3j=new A.ae(B.zr,24,B.c,null,null,null)
D.c3L=new A.ae(B.uS,null,B.aV,null,null,null)
D.c3M=new A.ae(B.jH,20,B.cJ,null,null,null)
D.c45=new A.ae(B.Hp,16,null,null,null,null)
D.c5E=new A.e6(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.k2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eO,!0,null,null,null,null)
D.atm=new C.a6H(10,null)
D.c69=new C.a6H(12,null)
D.c6a=new C.a6H(14,null)
D.doS=w([B.bv,B.aV,B.fr,B.b3],x.O)
D.c7l=new A.a8(B.aA,B.aE,B.x,D.doS,null,null)
D.bqB=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bwP=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d4p=w([D.bqB,D.bwP],x.O)
D.c7x=new A.a8(B.b0,B.b7,B.x,D.d4p,null,null)
D.diG=w([B.eY,B.fY,B.fr],x.O)
D.c7D=new A.a8(B.aA,B.aE,B.x,D.diG,null,null)
D.ajq=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bhh=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d6D=w([D.ajq,D.bhh],x.O)
D.c8d=new A.a8(B.b0,B.b7,B.x,D.d6D,null,null)
D.bl1=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aCD=w([D.bl1,D.ajq],x.O)
D.c8w=new A.a8(B.aA,B.aE,B.x,D.aCD,null,null)
D.ai8=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bnC=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dhI=w([D.ai8,D.bnC],x.O)
D.c9a=new A.a8(B.a7,B.aa,B.x,D.dhI,null,null)
D.dvW=w([B.bD,B.mT],x.O)
D.c9c=new A.a8(B.b0,B.b7,B.x,D.dvW,null,null)
D.bqw=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dwS=w([D.bqw,D.kQ,D.kQ,I.Nl],x.O)
D.dzs=w([0,0.07,0.9,1],x.n)
D.c9I=new A.a8(B.a7,B.aa,B.x,D.dwS,D.dzs,null)
D.c9Q=new A.a8(B.aA,B.aE,B.x,B.SY,null,null)
D.d2a=w([B.aF,D.lB],x.O)
D.c9T=new A.a8(B.a7,B.aa,B.x,D.d2a,null,null)
D.dvt=w([B.b3,B.aV,B.bQ],x.O)
D.caS=new A.a8(B.aA,B.aE,B.x,D.dvt,null,null)
D.cfc=w([10,20,30],x.t)
D.cp8=w([-1,-0.4,0.3,1],x.n)
D.cwA=w([B.bv,B.b3,B.eY],x.O)
D.cwJ=w([B.bg,B.aF,B.kq],x.O)
D.cwL=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cxt=w([30,140,262,360],x.n)
D.boU=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cD2=w([D.boU,E.aj_],x.O)
D.epr=new A.p(1,2)
D.ffp=new A.cU(B.b6,D.epr,3)
D.azu=w([D.ffp],x.F)
D.cKw=w([B.h6,B.ci,B.fq],x.O)
D.cNi=w([B.bN,B.bx,B.br],x.O)
D.bLK=new C.uW("classic","Classic leather","Gold-edged brown leather",D.aCD,E.ks,E.ks,"\u2766",B.K,!0,!1,!1,!1)
D.bgm=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bvA=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.d9H=w([D.bgm,D.bvA],x.O)
D.aj3=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bLF=new C.uW("ornate","Ornate gold","Double gold border and flourishes",D.d9H,D.aj3,D.aj3,"\u2726",B.K,!0,!0,!0,!1)
D.bky=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.brm=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d13=w([D.bky,D.brm],x.O)
D.bLE=new C.uW("parchment","Parchment","Old paper with dark ink",D.d13,D.Gc,L.j4,"\u2767",B.K,!0,!1,!1,!0)
D.agf=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.btM=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dtD=w([D.agf,D.btM],x.O)
D.bom=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bt1=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bLH=new C.uW("minimal","Clean paper","Plain and elegant, like a printed book",D.dtD,D.bom,D.bt1,"",B.K,!0,!0,!1,!0)
D.bLJ=new C.uW("midnight","Midnight","Deep blue with silver stars",K.aCX,B.cx,B.cd,"\u2727",B.K,!0,!0,!1,!1)
D.bLD=new C.uW("emerald","Emerald library","Green cloth, title on the left",V.azU,E.ks,B.fA,"\u25c6",B.bp,!0,!1,!1,!1)
D.bug=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.drG=w([B.em,D.bug],x.O)
D.bpG=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bqV=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bLI=new C.uW("rose","Rose vintage","Burgundy with rose-gold lettering",D.drG,D.bpG,D.bqV,"\u2740",B.K,!0,!1,!0,!1)
D.dws=w([B.cl,F.nA],x.O)
D.bLG=new C.uW("modern","Modern","Dark, bold, left-aligned",D.dws,B.aG,B.c,"",B.bp,!1,!0,!1,!1)
D.a5g=w([D.bLK,D.bLF,D.bLE,D.bLH,D.bLJ,D.bLD,D.bLI,D.bLG],A.at("O<uW>"))
D.cQi=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dwg=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bLV=new C.lt('What does "Ubuntu" mean?',D.dwg,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d2Q=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bLY=new C.lt("In Swahili, what do we call a grandmother?",D.d2Q,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d2H=w(["Babu","Mama","Baba","Dada"],x.s)
D.bLT=new C.lt("In Swahili, what do we call a grandfather?",D.d2H,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d4_=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bLX=new C.lt("What is a sister called in Swahili?",D.d4_,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.d98=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bLU=new C.lt("What is a brother called in Swahili?",D.d98,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d2G=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bM4=new C.lt("Which word means father in Swahili?",D.d2G,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dxs=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bM3=new C.lt('"Umoja ni nguvu" means...',D.dxs,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dul=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bM5=new C.lt('"Haba na haba hujaza kibaba" teaches us...',D.dul,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d6L=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bM2=new C.lt('The African saying "It takes a village to raise a child" means...',D.d6L,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dxM=w(["The elders","The market","The river","The drum"],x.s)
D.bLZ=new C.lt("Who is the traditional keeper of the family stories?",D.dxM,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cUv=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bLW=new C.lt("Why do families sit round the fire at night?",D.cUv,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dwu=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bM0=new C.lt('What does "Harambee" mean?',D.dwu,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.dbY=w(["An elder","A baby","A market","A cow"],x.s)
D.bM_=new C.lt('"Mzee" is a respectful word for...',D.dbY,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.drw=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bM1=new C.lt('What does "Shikamoo" show?',D.drw,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.azP=w([D.bLV,D.bLY,D.bLT,D.bLX,D.bLU,D.bM4,D.bM3,D.bM5,D.bM2,D.bLZ,D.bLW,D.bM0,D.bM_,D.bM1],x.J)
D.cYU=w([90,360],x.n)
D.d0B=w([B.bQ,B.bo],x.O)
D.bqj=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d1f=w([D.agf,D.bqj],x.O)
D.d1U=w([-1,-0.3,0.4,1],x.n)
D.d2M=w([0,0.45,0.72,0.92,1],x.n)
D.bku=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d34=w([D.bku,B.bB],x.O)
D.bie=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.akN=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d3E=w([B.dB,D.bie,D.akN],x.O)
D.d4G=w([B.b9,B.jk,B.pe],x.O)
D.bl3=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bsT=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bhV=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d4L=w([D.bl3,D.bsT,D.bhV],x.O)
D.d55=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d5f=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hyR=new C.aea(78,424,48,44,56)
D.hyP=new C.aea(214,396,34,34,42)
D.hyQ=new C.aea(442,452,56,50,64)
D.aAN=w([D.hyR,D.hyP,D.hyQ],A.at("O<aea>"))
D.d5O=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bhb=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bmM=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dzo=w([D.ai8,D.bhb,D.bmM],x.O)
D.bLL=new C.uX("leather","Leather",D.dzo,"vintage")
D.dcY=w([B.db,B.G2,A9.Z1],x.O)
D.bLS=new C.uX("midnight","Midnight",D.dcY,"starry")
D.d4H=w([B.er,B.ea,B.lg],x.O)
D.bLR=new C.uX("forest","Forest",D.d4H,"story")
D.dBt=w([B.et,B.em,B.ku],x.O)
D.bLO=new C.uX("burgundy","Burgundy",D.dBt,"royal")
D.cMQ=w([B.aF,B.nv,B.oa],x.O)
D.bLP=new C.uX("royal","Royal",D.cMQ,"royal")
D.d7h=w([B.bx,B.cl,F.nA],x.O)
D.bLM=new C.uX("charcoal","Charcoal",D.d7h,"geo")
D.dzx=w([B.c6,B.dP,B.ym],x.O)
D.bLQ=new C.uX("sunset","Sunset",D.dzx,"sunset")
D.dAh=w([B.jk,B.Gd,B.Z5],x.O)
D.bLN=new C.uX("ocean","Ocean",D.dAh,"band")
D.zW=w([D.bLL,D.bLS,D.bLR,D.bLO,D.bLP,D.bLM,D.bLQ,D.bLN],A.at("O<uX>"))
D.d7N=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.d8r=w([B.an,B.aM,B.a_],x.O)
D.d9M=w([B.em,B.ea,B.db,B.hf,B.yp,B.cJ,B.kv,B.cT,B.d3],x.O)
D.d9N=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.ffq=new A.cU(B.dx,B.dM,8)
D.d9X=w([D.ffq],x.F)
D.db4=w([B.bT,B.dP,B.kp],x.O)
D.bj5=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bn4=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.brh=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.dbk=w([D.bj5,G.ajz,D.bn4,D.brh,D.akN],x.O)
D.dbB=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.dbN=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bgx=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bmr=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.dcf=w([D.bgx,D.ahB,D.bmr],x.O)
D.dcT=w([B.bT,B.hI],x.O)
D.dcZ=w([G.nq,B.ih,G.agq,B.cS],x.O)
D.deA=w([B.cS,G.nq,B.ih,D.lC,B.cS],x.O)
D.dfc=w([B.aQ,B.wb,B.yb],x.O)
D.aBP=w(["True","False"],x.s)
D.eMA=new A.y(-0.65,0.6)
D.eZf=new A.y(-0.2,0.95)
D.f_k=new A.y(0.25,0.95)
D.eQ3=new A.y(0.7,0.6)
D.f_U=new A.y(1,0.1)
D.dfY=w([Ar.UM,D.eMA,D.eZf,D.f_k,D.eQ3,D.f_U],x.G)
D.bpb=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bvs=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bk4=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.dg3=w([D.bpb,D.bvs,D.bk4],x.O)
D.dg8=w([B.bL,B.bZ,B.dn,B.aQ],x.O)
D.dgD=w([B.he,B.c6,B.rF],x.O)
D.dh1=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.dhd=w([B.eY,B.cJ],x.O)
D.bqF=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dhD=w([D.bqF,D.agd],x.O)
D.dhO=w([B.cI,B.fs,B.fB],x.O)
D.di_=w([B.aG,B.bo,B.db],x.O)
D.diD=w([B.es,B.d2,B.ea],x.O)
D.diX=w([B.dO,B.db,B.G2],x.O)
D.dj0=w([B.bl,B.mO,B.d3],x.O)
D.dji=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bpS=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bo5=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.djD=w([D.bpS,D.ahx,D.bo5],x.O)
D.dks=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dlv=w([1,0,7,6,3,2],x.t)
D.a6f=w(["leather","linen","plain","stars","rays"],x.s)
D.dlH=w([0.5,2,3.6],x.n)
D.dmg=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bU5=new A.a_(985219,"MaterialIcons",!1)
D.bTF=new A.a_(983781,"MaterialIcons",!1)
D.aCj=w([B.a2O,B.hP,B.lO,B.i4,D.bU5,B.HK,B.qN,D.bTF,K.arg,B.D7,B.qP,B.n4],A.at("O<a_>"))
D.a6j=w(["double","single","corners","none"],x.s)
D.bLA=new C.zI("Little Seed","\ud83c\udf31",0)
D.bLC=new C.zI("Young Listener","\ud83d\udc42",40)
D.bLB=new C.zI("Storyteller","\ud83e\ude98",120)
D.bLz=new C.zI("Village Pride","\ud83c\udfe1",300)
D.bLx=new C.zI("Keeper of Roots","\ud83c\udf33",700)
D.bLy=new C.zI("Elder of the Fire","\ud83d\udd25",1500)
D.aCl=w([D.bLA,D.bLC,D.bLB,D.bLz,D.bLx,D.bLy],A.at("O<zI>"))
D.dnq=w([B.cY,B.bj,B.cT],x.O)
D.dnG=w([],x.C)
D.DF=w([],x.u)
D.aMv=new A.p(225,528)
D.eOf=new A.y(D.aMv,1)
D.eqb=new A.p(350,548)
D.eUx=new A.y(D.eqb,0.95)
D.aMp=new A.p(158,656)
D.eUq=new A.y(D.aMp,1.12)
D.eqY=new A.p(92,544)
D.eJO=new A.y(D.eqY,0.93)
D.eqe=new A.p(398,614)
D.eQq=new A.y(D.eqe,1.04)
D.eq2=new A.p(318,662)
D.eFg=new A.y(D.eq2,1.1)
D.a6r=w([D.eOf,D.eUx,D.eUq,D.eJO,D.eQq,D.eFg],A.at("O<+(p,G)>"))
D.dpI=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dq9=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dre=w([B.cS,G.nq,B.ih,D.lC,B.cS,B.ih],x.O)
D.dsD=w([B.au,B.fs,B.hf],x.O)
D.dtf=w([-70,58],x.n)
D.dth=w([-70,-30,20],x.n)
D.duj=w([B.bl,B.mO,B.Gp],x.O)
D.duA=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dPo=new C.lY("construction","Construction","Jobsite & builds",B.t8)
D.dPv=new C.lY("house","Home Build","Houses & rooms",B.wM)
D.dPl=new C.lY("grocery","Grocery","Store & pantry",B.a3J)
D.dPk=new C.lY("calculator","Calculations","Math & estimates",B.Pq)
D.dPt=new C.lY("lumber","Materials","Lumber & supplies",B.PK)
D.dPh=new C.lY("kitchen","Kitchen","Remodel & meals",A3.PL)
D.bTD=new A.a_(983756,"MaterialIcons",!1)
D.dPm=new C.lY("landscape","Landscaping","Yard & garden",D.bTD)
D.dPg=new C.lY("plumbing","Plumbing","Pipes & water",B.pE)
D.dPw=new C.lY("electrical","Electrical","Wiring & power",B.hm)
D.dPe=new C.lY("store","Retail Shop","Daily business",B.kA)
D.dPf=new C.lY("paint_remodel","Paint & Remodel","Colors & walls",A3.PF)
D.bT_=new A.a_(983311,"MaterialIcons",!1)
D.dPs=new C.lY("roofing","Roofing","Roofs & exteriors",D.bT_)
D.bTO=new A.a_(983986,"MaterialIcons",!1)
D.dPd=new C.lY("warehouse","Warehouse","Storage & stock",D.bTO)
D.dPq=new C.lY("vehicles","Vehicles","Fleet & transport",B.HL)
D.bQM=new A.a_(62785,"MaterialIcons",!1)
D.dPj=new C.lY("farm","Farm","Crops & livestock",D.bQM)
D.dPi=new C.lY("restaurant","Restaurant","Food & catering",B.v1)
D.dPp=new C.lY("tools","Tools","Workshop gear",B.HH)
D.dPu=new C.lY("wallet","Cash & Wallet","Quick spending",B.jH)
D.bRY=new A.a_(63395,"MaterialIcons",!1)
D.dPr=new C.lY("concrete","Concrete","Foundation work",D.bRY)
D.dPn=new C.lY("blueprint","Blueprint","Plans & design",Am.apR)
D.a6Q=w([D.dPo,D.dPv,D.dPl,D.dPk,D.dPt,D.dPh,D.dPm,D.dPg,D.dPw,D.dPe,D.dPf,D.dPs,D.dPd,D.dPq,D.dPj,D.dPi,D.dPp,D.dPu,D.dPr,D.dPn],A.at("O<lY>"))
D.dv8=w([B.bu,B.bj],x.O)
D.dvX=w([B.iI,B.og,B.dX],x.O)
D.aim=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.ajl=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.boq=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bg2=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aDv=w([D.aim,D.ajl,D.boq,D.bg2],x.O)
D.dx8=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a7_=w(["top","middle","bottom"],x.s)
D.dyB=w([B.cm,B.bo,B.db],x.O)
D.aDP=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.b9H=new A.ab(0,B.G,B.b6,B.J,14)
D.aDT=w([D.b9H],x.V)
D.bnk=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dzh=w([D.agQ,D.a_9,D.bnk],x.O)
D.dzi=w([B.b4,B.d2,B.ea],x.O)
D.epM=new A.p(24,-8)
D.equ=new A.p(48,0)
D.epI=new A.p(24,6)
D.dB0=w([B.J,D.epM,D.equ,D.epI],x.g)
D.dBp=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.emi={top:0,middle:1,bottom:2}
D.dED=new A.bv(D.emi,["Top","Middle","Bottom"],x.r)
D.elS={double:0,single:1,corners:2,none:3}
D.dEJ=new A.bv(D.elS,["Double line","One line","Corners","None"],x.r)
D.en7={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dGc=new A.bv(D.en7,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dGo=new A.bv(B.i6,[],A.at("bv<H,+(n,n)>"))
D.em9={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.DT=new A.bv(D.em9,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.at("bv<n,H>"))
D.dJN=new H.NY(32,null)
D.dJO=new H.NY(40,null)
D.dJP=new H.NY(46,null)
D.aLX=new C.auf(null)
D.eoD=new A.p(0,40)
D.eoE=new A.p(0,412)
D.eoG=new A.p(0,900)
D.eoQ=new A.p(0,-34)
D.eoR=new A.p(0,-46)
D.eoT=new A.p(0,-74)
D.eoW=new A.p(100,300)
D.eoX=new A.p(10,14)
D.ep_=new A.p(10,-10)
D.ep4=new A.p(10,-46)
D.ep5=new A.p(10,-58)
D.ep6=new A.p(116,442)
D.ep8=new A.p(11,-1)
D.ep9=new A.p(11,-10)
D.epa=new A.p(11,-21)
D.aMk=new A.p(11,-60)
D.eph=new A.p(14,-2)
D.epi=new A.p(150,520)
D.a9_=new A.p(150,592)
D.epl=new A.p(15,-15)
D.epm=new A.p(16,-1)
D.epq=new A.p(190,444)
D.ept=new A.p(1,5)
D.epB=new A.p(21,-78)
D.epC=new A.p(222,615)
D.JJ=new A.p(225,300)
D.a91=new A.p(225,574)
D.epL=new A.p(24,-52)
D.epN=new A.p(250,210)
D.epY=new A.p(2,-56)
D.aMz=new A.p(300,0)
D.epZ=new A.p(300,440)
D.eq1=new A.p(318,476)
D.eq4=new A.p(324,144)
D.a94=new A.p(332,150)
D.eq6=new A.p(335,585)
D.eq7=new A.p(338,140)
D.eq8=new A.p(340,158)
D.eqa=new A.p(34,-60)
D.Ej=new A.p(36,-24)
D.eqc=new A.p(372,470)
D.eqd=new A.p(390,455)
D.eqm=new A.p(42,468)
D.eqn=new A.p(431,510)
D.eqo=new A.p(431,520)
D.eqp=new A.p(45,-92)
D.eqq=new A.p(46,20)
D.eqr=new A.p(46,-92)
D.eqs=new A.p(46,-94)
D.eqt=new A.p(47,-4)
D.eqv=new A.p(48,-4)
D.eqD=new A.p(4,-26)
D.eqL=new A.p(60,455)
D.eqT=new A.p(8,14)
D.eqX=new A.p(8,-76)
D.eqZ=new A.p(95,575)
D.er_=new A.p(98,-24)
D.er1=new A.p(9,-2)
D.er2=new A.p(9,-58)
D.aMI=new A.p(9,-79)
D.er3=new A.p(9,-9)
D.erH=new A.p(16.5,8)
D.erJ=new A.p(3.2,0)
D.erL=new A.p(-16.5,8)
D.erS=new A.p(16.5,2)
D.erV=new A.p(-3.2,0)
D.es2=new A.p(9.5,6)
D.es6=new A.p(-10,14)
D.es7=new A.p(-10,-12)
D.es8=new A.p(-10,-58)
D.esa=new A.p(-11,-1)
D.esb=new A.p(-11,-10)
D.esd=new A.p(-11,-60)
D.ese=new A.p(-12,-14)
D.esf=new A.p(-12,-16)
D.esm=new A.p(-14,-2)
D.esp=new A.p(-15,-15)
D.esq=new A.p(-15,-3)
D.ess=new A.p(-16,-1)
D.esJ=new A.p(-24,-52)
D.esQ=new A.p(-2,-34)
D.esR=new A.p(-2,-38)
D.esT=new A.p(-30,-100)
D.a96=new A.p(-36,-24)
D.et3=new A.p(-4,-26)
D.et5=new A.p(-4,-6)
D.etf=new A.p(-8,-3)
D.etg=new A.p(-8,-48)
D.etj=new A.p(-9,-2)
D.etl=new A.p(-9,-58)
D.etm=new A.p(-9,-79)
D.etn=new A.p(-9,-9)
D.etp=new A.p(-9.5,6)
D.etC=new A.p(-16.5,2)
D.fQ1=new A.B("Write a new book",null,B.hv,null,B.K,null,null,null,null,null,null,null)
D.eub=new A.D(B.kz,D.fQ1,null)
D.h3L=new A.B("Tap to go on",null,B.vI,null,null,null,null,null,null,null,null,null)
D.euw=new A.D(B.li,D.h3L,null)
D.arK=new A.ae(B.i2,18,B.c,null,null,null)
D.fJ2=new A.B("Add",null,B.l6,null,null,null,null,null,null,null,null,null)
D.dgm=w([D.arK,B.rb,D.fJ2],x.p)
D.fcw=new A.c8(B.aL,B.e,B.P,B.l,null,B.p,null,0,D.dgm,null)
D.euz=new A.D(B.nI,D.fcw,null)
D.euA=new A.D(E.alU,A7.Yn,null)
D.fCx=new A.F(!0,B.c,null,null,null,null,13.5,B.I,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMe=new A.B("New Project",null,D.fCx,null,null,null,null,null,null,null,null,null)
D.dkQ=w([D.arK,B.af,D.fMe],x.p)
D.fcz=new A.c8(B.aL,B.e,B.P,B.l,null,B.p,null,0,D.dkQ,null)
D.euO=new A.D(B.hM,D.fcz,null)
D.fOL=new A.B("Choose your header",null,A0.vH,null,null,null,null,null,null,null,null,null)
D.ev8=new A.D(B.i1,D.fOL,null)
D.bfh=new A.fl(2.2,null,null,null,null,B.cJ,null,null,null,null)
D.fih=new A.a5(22,22,D.bfh,null)
D.bdo=new A.cj(B.A,null,null,D.fih,null)
D.evd=new A.D(B.a0w,D.bdo,null)
D.bEd=new A.R(14,2,14,6)
D.h1T=new A.B("The top of your book. Tap a design to see it.",null,T.tO,null,null,null,null,null,null,null,null,null)
D.eve=new A.D(D.bEd,D.h1T,null)
D.fNV=new A.B("\ud83c\udfc6 A new record!",null,B.h4,null,null,null,null,null,null,null,null,null)
D.evg=new A.D(B.li,D.fNV,null)
D.ewQ=new A.j4(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.ewT=new A.j4(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aNi=new A.j4(1,0.9607843137254902,0.48627450980392156,0)
D.JS=new A.j4(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.Aw=new A.j4(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.ewZ=new A.j4(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hAS=new C.bjN(null)
D.bz_=new A.mJ(D.hAS,null,B.az,null,null)
D.aQW=new A.cK(0,0,0,0,null,null,D.bz_,null)
D.fJ4=new A.B("\ud83c\udfc5",null,B.abn,null,null,null,null,null,null,null,null,null)
D.eBo=new A.cK(null,0,-34,null,null,null,D.fJ4,null)
D.eJt=new A.y("E","Sit by the fire again")
D.eP3=new A.y("C","Good Learner")
D.eSu=new A.y("D","Still Growing")
D.eX3=new A.y(-42,42)
D.eYo=new A.y("B","Faithful Listener")
D.f_m=new A.y("A","Keeper of the Family")
D.f2x=new A.b5(-17,0.7,0)
D.f36=new A.b5(-8,0.95,1.3)
D.f4a=new A.b5(18,0.65,5.2)
D.f4c=new A.b5(0,1.15,2.6)
D.f4x=new A.b5(9,0.9,3.9)
D.f6s=new A.ce([0,0,1,1])
D.aSq=new A.a1(0,0,520,160)
D.f9y=new A.a1(10,612,440,618)
D.f9z=new A.a1(10,612,440,628)
D.f9C=new A.a1(14,-64,34,-12)
D.f9F=new A.a1(300,336,350,348)
D.aa0=new A.a1(30,96,420,346)
D.f9G=new A.a1(30,-9,46,1)
D.f9H=new A.a1(4,2,11,14)
D.f9J=new A.a1(-8,-12.5,8,-7)
D.f9K=new A.a1(-16.5,-21,16.5,1)
D.f9L=new A.a1(60,342,88,348)
D.UN=new A.a1(66,-66,94,-36)
D.f9M=new A.a1(6,8,10,14)
D.f9P=new A.a1(95,343,115,348)
D.f9Q=new A.a1(-6.5,-74,6.5,-58)
D.f9W=new A.a1(-100,-74,100,-12)
D.f9X=new A.a1(-10,8,-6,14)
D.f9Y=new A.a1(-11,2,-4,14)
D.f9Z=new A.a1(-11,-70,11,-56)
D.fa5=new A.a1(-13,-24,13,-4)
D.fab=new A.a1(-15,-21,15,0)
D.fae=new A.a1(-16,-21,16,1)
D.faf=new A.a1(-16,-21,16,2)
D.fai=new A.a1(-16,-26,16,-6)
D.fas=new A.a1(-230,-26,230,26)
D.faQ=new A.a1(-38,-26,12,-6)
D.faU=new A.a1(-3,-70,3,-63)
D.faV=new A.a1(-44,-22,44,0)
D.faX=new A.a1(-46,-9,-30,1)
D.aSu=new A.a1(-80,-190,80,20)
D.fb3=new A.a1(-8,-26,40,-6)
D.fb4=new A.a1(-98,-80,92,-75)
D.fb5=new A.a1(-9,-15,9,-9)
D.h1q=new A.B("Let the AI write it from your tree",null,B.iG,null,B.K,null,null,null,null,null,null,null)
D.bMD=new A.dm(1,B.cq,D.h1q,null)
D.dcS=w([E.a4d,B.af,D.bMD],x.p)
D.fc9=new A.c8(B.aL,B.e,B.P,B.l,null,B.p,null,0,D.dcS,null)
D.fIJ=new A.B("Save member",null,B.cg,null,null,null,null,null,null,null,null,null)
D.dt_=w([D.asD,B.af,D.fIJ],x.p)
D.fck=new A.c8(B.aL,B.ba,B.i,B.l,null,B.p,null,0,D.dt_,null)
D.bYe=new A.ae(B.ik,14,B.b3,null,null,null)
D.fw3=new A.F(!0,B.b3,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMF=new A.B("Cashier",null,D.fw3,null,null,null,null,null,null,null,null,null)
D.dlm=w([D.bYe,B.bn,D.fMF],x.p)
D.fco=new A.c8(B.aL,B.e,B.P,B.l,null,B.p,null,0,D.dlm,null)
D.fIK=new A.B("Transfer & settings",null,B.dq,null,null,null,null,null,null,null,null,null)
D.bKk=new A.bz(1,B.bb,D.fIK,null)
D.d48=w([D.asc,B.av,D.bKk],x.p)
D.fcp=new A.c8(B.aL,B.e,B.i,B.l,null,B.p,null,0,D.d48,null)
D.fgY=new A.av(16,40)
D.fh2=new A.av(22,64)
D.fh9=new A.av(280,88)
D.fhY=new A.a5(30,null,null,null)
D.fHO=new A.B("The teacher is writing\u2026",null,B.AT,null,null,null,null,null,null,null,null,null)
D.bev=new A.cj(B.A,null,null,D.fHO,null)
D.huJ=new A.bt("w",x.W)
D.fin=new A.a5(null,56,D.bev,D.huJ)
D.fja=new A.hJ(5,8,8,1,null)
D.fji=new A.hJ(2,12,12,1.05,null)
D.fMk=new A.B("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fk1=new A.b1(D.fMk,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fMA=new A.B("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aUL=new A.b1(D.fMA,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fV3=new A.B("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fkv=new A.b1(D.fV3,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h4N=new A.B("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fkA=new A.b1(D.h4N,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fOJ=new A.B("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fkH=new A.b1(D.fOJ,null,null,null,null,null,null,null,null,null,null,null,null,B.h8,!1,null,null,null,B.t,null)
D.h25=new A.B("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aUP=new A.b1(D.h25,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fOH=new A.B("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fl6=new A.b1(D.fOH,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fJl=new A.B("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fl8=new A.b1(D.fJl,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fSu=new A.B("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fle=new A.b1(D.fSu,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h5x=new A.B("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.flV=new A.b1(D.h5x,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h0k=new A.B("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fmk=new A.b1(D.h0k,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h4R=new A.B("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fmn=new A.b1(D.h4R,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fWI=new A.B("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fmp=new A.b1(D.fWI,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fQE=new A.B("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fmq=new A.b1(D.fQE,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fQF=new A.B("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fnr=new A.b1(D.fQF,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fMm=new A.B("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fnJ=new A.b1(D.fMm,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fOm=new A.B("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fo2=new A.b1(D.fOm,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fWa=new A.B("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.foj=new A.b1(D.fWa,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fRu=new A.B("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fok=new A.b1(D.fRu,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fBd=new A.F(!0,B.bE,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpX=new A.ep("\u2665",null,null,B.cN,null,null,null,null,null,null,D.fBd)
D.fyn=new A.F(!0,B.aS,null,null,null,null,28,B.U,B.cK,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqc=new A.ep("Today: how well do you know the family?",null,null,B.cN,null,null,null,null,null,null,D.fyn)
D.fqt=new A.F(!0,B.qb,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frD=new A.F(!0,D.kQ,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs0=new A.F(!0,D.kQ,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs4=new A.F(!0,B.cS,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsd=new A.F(!0,D.fC,null,null,null,null,15,B.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fso=new A.F(!0,D.fC,null,null,null,null,13,B.I,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsI=new A.ta(!0,B.tA,null,null,null,null,B.dH,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsY=new A.F(!0,B.cS,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft0=new A.F(!0,D.kQ,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft1=new A.F(!0,B.cS,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft6=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft9=new A.F(!0,B.cS,null,null,null,null,15,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftF=new A.F(!0,B.b3,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftG=new A.F(!0,B.ab,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftI=new A.F(!0,B.aS,null,null,null,null,15.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu9=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aW1=new A.F(!0,B.aR,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aW2=new A.F(!0,D.lB,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuA=new A.F(!0,B.cS,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.abs=new A.ta(!0,B.Ui,null,null,null,null,B.dH,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.VH=new A.F(!0,B.cS,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuK=new A.F(!0,B.a_,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuP=new A.F(!0,D.fC,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvd=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwo=new A.F(!0,D.fC,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWc=new A.F(!0,D.fC,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwI=new A.F(!0,B.ab,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwT=new A.F(!0,D.fC,null,null,null,null,null,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwV=new A.F(!0,null,null,null,null,null,8,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx0=new A.F(!0,L.j4,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWg=new A.F(!0,D.fC,null,null,null,null,14.5,B.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxW=new A.F(!0,D.fC,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyg=new A.F(!0,D.fC,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyi=new A.F(!0,B.a_,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyk=new A.F(!0,B.cS,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyI=new A.F(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A6.IH,null,null,null)
D.aWv=new A.F(!0,D.fC,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz5=new A.F(!0,B.a_,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzr=new A.F(!0,B.fi,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzP=new A.F(!0,B.bQ,null,null,null,null,8,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzU=new A.F(!0,B.bD,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA5=new A.F(!0,B.c,null,null,null,null,13.5,B.I,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA8=new A.F(!0,D.fC,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAg=new A.F(!0,D.Gc,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAs=new A.F(!0,B.b3,null,null,null,null,13,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAR=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAY=new A.F(!0,B.ab,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Dw,null,null,null)
D.fBo=new A.F(!0,B.cS,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBx=new A.F(!0,B.cJ,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBK=new A.F(!0,D.lC,null,null,null,null,13,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWR=new A.F(!0,D.fC,null,null,null,null,null,B.I,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.KY=new A.F(!0,B.cS,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWT=new A.F(!0,B.cS,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Dw,null,null,null)
D.fC4=new A.F(!0,B.bQ,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC8=new A.F(!0,G.nq,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCv=new A.F(!0,B.b3,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCN=new A.F(!0,D.fC,null,null,null,null,15,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDa=new A.F(!0,B.c,null,null,null,null,null,B.I,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDz=new A.F(!0,D.fC,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fE5=new A.F(!0,D.fC,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEa=new A.F(!0,B.an,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEj=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.abU=new A.F(!0,B.an,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.abW=new A.F(!0,D.lB,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fG3=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGm=new A.F(!0,B.aS,null,null,null,null,27,B.U,B.cK,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGt=new A.F(!0,L.j4,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGB=new A.F(!0,L.j4,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fH4=new A.B("Time:",null,B.ht,null,null,null,null,null,null,null,null,null)
D.fHp=new A.B("\ud83c\udfae",null,K.abM,null,null,null,null,null,null,null,null,null)
D.fHq=new A.B("Themes",null,B.pT,null,null,null,null,null,null,null,null,null)
D.fHX=new A.B("\ud83c\udfb2",null,B.xw,null,null,null,null,null,null,null,null,null)
D.fI0=new A.B("Delete this game?",null,B.iG,null,null,null,null,null,null,null,null,null)
D.fI7=new A.B("Add Item",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fwC=new A.F(!0,B.a_,null,null,null,null,22,B.I,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIy=new A.B("Debt receipt",null,D.fwC,null,B.K,null,null,null,null,null,null,null)
D.aX7=new A.F(!0,B.an,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIR=new A.B("Person who owes",null,D.aX7,null,null,null,null,null,null,null,null,null)
D.fJO=new A.B("Notes",null,B.abB,null,null,null,null,null,null,null,null,null)
D.fKe=new A.B("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fvv=new A.F(!0,B.c,null,null,null,null,11,B.I,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKg=new A.B("Share",null,D.fvv,null,null,null,null,null,null,null,null,null)
D.fLh=new A.B("Move your family trees",null,I.abS,null,null,null,null,null,null,null,null,null)
D.fLW=new A.B("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fMz=new A.B("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fMX=new A.B("SAVE",null,D.KY,null,null,null,null,null,null,null,null,null)
D.fNz=new A.B("The round button is the right answer.",null,T.xs,null,null,null,null,null,null,null,null,null)
D.fNU=new A.B("Remove this book?",null,B.h4,null,null,null,null,null,null,null,null,null)
D.fCs=new A.F(!0,B.cS,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Dw,null,null,null)
D.fOr=new A.B("Fireside Stories",null,D.fCs,null,null,null,null,null,null,null,null,null)
D.aXD=new A.B("Download",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fP7=new A.B("What should the AI do?",null,B.dq,null,null,null,null,null,null,null,null,null)
D.fv8=new A.F(!0,D.lB,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPm=new A.B("REPORT CARD",null,D.fv8,null,null,null,null,null,null,null,null,null)
D.fQ8=new A.B("Calabash Catch",null,B.L0,null,null,null,null,null,null,null,null,null)
D.fQA=new A.B("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fR1=new A.B("\ud83c\udfe1",null,B.EP,null,null,null,null,null,null,null,null,null)
D.fRJ=new A.B("Ribbon bookmark",null,B.jy,null,null,null,null,null,null,null,null,null)
D.fE4=new A.F(!0,B.b3,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSd=new A.B("NGMY.ORG",null,D.fE4,null,B.K,null,null,null,null,null,null,null)
D.fTw=new A.B("Scan family tree QR",null,B.cG,null,null,null,null,null,null,null,null,null)
D.fA9=new A.F(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUj=new A.B("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fA9,null,B.K,null,null,null,null,null,null,null)
D.fVx=new A.B("Delete",null,B.VB,null,null,null,null,null,null,null,null,null)
D.fVy=new A.B("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fVG=new A.B("Thumbnail",null,B.pT,null,null,null,null,null,null,null,null,null)
D.fWf=new A.B("Save the cover",null,B.cG,null,null,null,null,null,null,null,null,null)
D.fWk=new A.B("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.B2,null,B.K,null,null,null,null,null,null,null)
D.fWJ=new A.B("Your photos",null,B.pT,null,null,null,null,null,null,null,null,null)
D.fWZ=new A.B("Create Project",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fXl=new A.B("\u2b50 stars",null,B.VQ,null,null,null,null,null,null,null,null,null)
D.fXz=new A.B("Design your cover",null,A0.vH,null,null,null,null,null,null,null,null,null)
D.fXF=new A.B("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fXI=new A.B("PICTURE",null,M.vL,null,null,null,null,null,null,null,null,null)
D.fXK=new A.B("\ud83c\udfaf",null,D.W5,null,null,null,null,null,null,null,null,null)
D.fY6=new A.B("Paid",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fY8=new A.B("You can undo it right after.",null,T.xs,null,null,null,null,null,null,null,null,null)
D.fYG=new A.B("Print",null,B.vJ,null,null,null,null,null,null,null,null,null)
D.fZ4=new A.B("Amount owed",null,D.aX7,null,null,null,null,null,null,null,null,null)
D.fZj=new A.B("Got it",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fZV=new A.B("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fZY=new A.B("Add to budget",null,B.cg,null,null,null,null,null,null,null,null,null)
D.h_o=new A.B("Debtor signature",null,B.abB,null,null,null,null,null,null,null,null,null)
D.h_y=new A.B("Change icon",null,B.abA,null,null,null,null,null,null,null,null,null)
D.h0l=new A.B("MADE BY THE SYSTEM, FROM YOUR TREE",null,S.tQ,null,null,null,null,null,null,null,null,null)
D.h0N=new A.B("Family tree QR",null,B.cG,null,null,null,null,null,null,null,null,null)
D.h0T=new A.B("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.W4,null,null,null,null,null,null,null,null,null)
D.h1g=new A.B("Download",null,B.vJ,null,null,null,null,null,null,null,null,null)
D.h1h=new A.B("The person who planted this tree has not made a game yet.",null,B.B0,null,null,null,null,null,null,null,null,null)
D.h1l=new A.B("Change",null,B.pT,null,null,null,null,null,null,null,null,null)
D.h2b=new A.B("Clear all",null,B.cg,null,null,null,null,null,null,null,null,null)
D.h2e=new A.B("WHAT SHOULD IT CHANGE?",null,M.vL,null,null,null,null,null,null,null,null,null)
D.h2M=new A.B("COLOUR",null,M.vL,null,null,null,null,null,null,null,null,null)
D.h3_=new A.B("Do it",null,B.cG,null,null,null,null,null,null,null,null,null)
D.h32=new A.B("Create Tree",null,B.cg,null,null,null,null,null,null,null,null,null)
D.h3c=new A.B("Give me another clue",null,D.KY,null,null,null,null,null,null,null,null,null)
D.h46=new A.B("Create Family Tree",null,B.fb,null,null,null,null,null,null,null,null,null)
D.h4g=new A.B("THE TEACHER EXPLAINS THESE",null,S.tQ,null,null,null,null,null,null,null,null,null)
D.fqs=new A.F(!0,E.ks,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h4m=new A.B("Write the first page myself",null,D.fqs,null,null,null,null,null,null,null,null,null)
D.h4U=new A.B("Use this header",null,B.cG,null,null,null,null,null,null,null,null,null)
D.h50=new A.B("Create Project",null,E.aWO,null,null,null,null,null,null,null,null,null)
D.hwb=new C.acO(1,"header")
D.acX=new C.acO(2,"projects")
D.hwc=new C.acO(3,"cashier")
D.acY=new C.acO(4,"familyTree")
D.hJS=new C.cGJ(0,"start")
D.hJT=new C.cGK(0,"start")
D.hwA=new C.ZR(null)
D.hxB=new C.a_j(null)
D.dGl=new A.bv(B.i6,[],A.at("bv<n,GH>"))
D.do4=w([],x.dE)
D.do5=w([],x.M)
D.hy9=new C.bh_(D.dGl,D.do4,D.do5,0,0,null,null)
D.b19=new C.a09(0,"intro")
D.b1a=new C.a09(1,"countdown")
D.ada=new C.a09(2,"ask")
D.X0=new C.a09(3,"reveal")
D.b1b=new C.a09(4,"end")
D.hAU=new C.ti(F.Gm,D.lC,B.cS,F.lD,5,!1,!1,!1,0,null)
D.hAV=new C.ti(F.Gm,B.et,B.cS,B.bP,2,!0,!0,!1,2,B.cS)
D.hAW=new C.ti(B.on,B.cJ,B.cS,F.lD,2,!0,!1,!1,2,B.au)
D.hAX=new C.ti(F.Gm,B.dO,B.cS,F.lD,5,!1,!1,!1,1,null)
D.hAY=new C.ti(F.a_q,D.ajl,B.cS,F.lD,4,!0,!1,!0,0,null)
D.b1e=new C.ti(F.a_q,B.dP,B.cS,F.lD,3,!0,!1,!0,2,null)
D.b1f=new C.ti(F.mY,D.lC,B.c,F.lD,0,!1,!1,!0,0,null)
D.b1g=new C.ti(B.on,B.aF,B.cS,B.bP,2,!0,!0,!1,2,B.dP)
D.b1h=new C.ti(B.on,G.nq,B.ih,F.lD,5,!1,!1,!0,3,null)
D.hAZ=new C.ti(B.on,B.dP,B.cS,F.lD,0,!0,!1,!1,0,B.aF)
D.b1i=new C.ti(F.Gm,B.et,B.cS,B.bP,1,!1,!0,!1,1,null)
D.b1j=new C.ti(F.FU,B.au,B.aF,F.lD,4,!0,!1,!0,2,null)
D.hB_=new C.ti(F.mY,B.au,B.et,F.lD,3,!0,!1,!1,0,null)
D.hB0=new C.ti(B.on,B.dO,B.cS,B.bP,1,!1,!0,!1,1,null)
D.hB1=new C.ti(F.FU,D.aim,B.c,F.lD,5,!1,!1,!0,0,null)
D.hBF=new C.a0H(null)
D.hK0=new C.agc(0,"still")
D.Xn=new C.agc(1,"walk")
D.b1K=new C.agc(2,"pound")
D.b1L=new C.agc(3,"drum")
D.hFF=new C.a1Y(0,"greet")
D.b1M=new C.a1Y(1,"teach")
D.adu=new C.a1Y(2,"ask")
D.hFG=new C.a1Y(3,"feedback")
D.b1N=new C.a1Y(4,"end")
D.Xt=new C.a2g(0,"intro")
D.Xu=new C.a2g(1,"asking")
D.Bi=new C.a2g(2,"reacting")
D.adG=new C.a2g(3,"driving")
D.adH=new C.a2g(4,"arrived")
D.adP=new C.aLL(0,"projects")
D.b2c=new C.aLL(1,"cashier")
D.hHL=new C.aLL(2,"familyTree")})()};
(a=>{a["uNsBCm+4pysLX8iwmeCTRtBtBXI="]=a.current})($__dart_deferred_initializers__);