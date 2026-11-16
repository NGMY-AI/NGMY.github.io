((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,P,A_,R,A8,L,H,E,S,A9,T,Aa,Ab,Ac,A0,Ad,Ae,Q,A1,Af,Ag,Ah,M,A2,Ai,A3,A4,A5,Aj,A6,Ak,G,Al,Am,An,A7,Ao,U,O,Ap,V,Aq,Ar,W,X,F,As,I,K,Y,C={
bG7(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bG7=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vY(null,""),$async$bG7)
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
return A.b(A.rj(t,a1,B.i5,"book",E.GM),$async$bG7)
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a3P(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bG7,v)},
aij(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aij=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vY(null,""),$async$aij)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.W(y.z)
t=A.nm(b6)
s=x.S
r=A.cX(c1,0,A.dB(4,"count",s),A.U(c1).c)
q=H.a3B(new A.N(r,new C.fPp(),r.$ti.k("N<ak.E,n>")).aN(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fPo(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.X.aw(b7,null)+"\nAllowed values: style one of "+B.d.aN(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aij)
case 6:l=c5
k=H.RE(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.apU(s,D.dGJ,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
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
return A.b(m.$1(f+B.X.aw(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aij)
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
p=A.cF(new A.b8(h,s),new C.fPq(),s.k("M.E"),p)
p=H.a3B(A.pL(p,3,A.a4(p).k("M.E")).aN(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cx<1>")
b4=A.C(new A.cx(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.I)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a3P(s,b9),$async$aij)
case 13:b5=c5
for(s=J.a7(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.apU(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aij,v)},
hH_(d,e,f){return A.cg(null,B.w.j(0.65),!1,null,new C.fZ2(e,f),d,null,!0,!0,x.g2)},
apU:function apU(d,e,f){this.a=d
this.b=e
this.c=f},
fPp:function fPp(){},
fPo:function fPo(d){this.a=d},
fPq:function fPq(){},
fZ2:function fZ2(d,e){this.a=d
this.b=e},
bDV(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bDV=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aU(b1,new C.fCt())){u=null
w=1
break}t=B.d.cD(b1,new C.fCu())
s=$.S()
r=new A.q3(new A.pE())
q=A.zz(r,D.aSv)
p=A.L()
p.r=B.c.gp(0)
q.ar(D.aSv,p)
o=A.L()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.a9
o.d=B.bw
o.e=B.dT
n=new C.fCz(t)
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
return A.b(r.o3().xH(520,160),$async$bDV)
case 4:w=3
return A.b(b3.hr(B.hp),$async$bDV)
case 3:b0=b3
u=b0==null?null:J.eU(B.dS.gaV(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDV,v)},
fN5(d){return C.imb(d)},
imb(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fN5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bjG()
n=d.x!=null&&d.zL(null).length===0
if(d.x!=null)t=n?D.Aw:D.JS
else t=d.gUD()?D.JS:D.aNn
w=3
return A.b(C.bDV(d.ax),$async$fN5)
case 3:s=f
p.a=null
if(s!=null)p.a=A.aoz(s)
r=A.a5A(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aNn}else{p.c=C.xp(q,!0)
p.b=n?D.Aw:D.JS}r.a4a(A.h8M(new C.fN7(p,d,new C.fN8(),t,n,o),null,D.bHM,B.xh))
u=r.jI(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fN5,v)},
fTQ(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fTQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fN5(d),$async$fTQ)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.aB(q,0,40)
u=Ae.Hy(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fTQ,v)},
fCt:function fCt(){},
fCu:function fCu(){},
fCz:function fCz(d){this.a=d},
fN8:function fN8(){},
fN7:function fN7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fN6:function fN6(){},
fZv(d,e){var w=0,v=A.j(x.H)
var $async$fZv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,B.w.j(0.55),!0,null,new C.fZz(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fZv)
case 2:return A.h(null,v)}})
return A.i($async$fZv,v)},
bGA(d,e,f,g){return C.iue(d,e,f,g)},
iue(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bGA=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cM.aO(t)}catch(q){r=null}if(r==null||r.length===0){d.L(x.q).f.T(D.fom)
w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.fZr(g,r,f),d,null,!0,!0,x.H),$async$bGA)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bGA,v)},
fZA(d,e){var w=0,v=A.j(x.H)
var $async$fZA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,null,!0,null,new C.fZD(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fZA)
case 2:return A.h(null,v)}})
return A.i($async$fZA,v)},
b03:function b03(d,e){this.c=d
this.a=e},
c8o:function c8o(){},
bdg:function bdg(d,e){this.b=d
this.a=e},
fZz:function fZz(d,e){this.a=d
this.b=e},
fZw:function fZw(d){this.a=d},
fZx:function fZx(d,e,f){this.a=d
this.b=e
this.c=f},
fZy:function fZy(d,e){this.a=d
this.b=e},
fZr:function fZr(d,e,f){this.a=d
this.b=e
this.c=f},
fZp:function fZp(d){this.a=d},
fZq:function fZq(d,e,f){this.a=d
this.b=e
this.c=f},
fZD:function fZD(d,e){this.a=d
this.b=e},
fZB:function fZB(d){this.a=d},
fZC:function fZC(d,e,f){this.a=d
this.b=e
this.c=f},
fHn(d,e){var w=0,v=A.j(x.y),u,t
var $async$fHn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3m(d),$async$fHn)
case 3:t=g
J.nU(t,new C.fHo(e))
u=A.aiX(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fHn,v)},
fHo:function fHo(d){this.a=d},
aq6:function aq6(d,e,f){this.c=d
this.d=e
this.a=f},
aER:function aER(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dQM:function dQM(d,e){this.a=d
this.b=e},
dQx:function dQx(d,e){this.a=d
this.b=e},
dQA:function dQA(d,e,f){this.a=d
this.b=e
this.c=f},
dQz:function dQz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQy:function dQy(d,e){this.a=d
this.b=e},
dQB:function dQB(d,e){this.a=d
this.b=e},
dQv:function dQv(){},
dQw:function dQw(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dQu:function dQu(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dQf:function dQf(d){this.a=d},
dQg:function dQg(d,e,f){this.a=d
this.b=e
this.c=f},
dQh:function dQh(d,e){this.a=d
this.b=e},
dQe:function dQe(d){this.a=d},
dQm:function dQm(d,e){this.a=d
this.b=e},
dQd:function dQd(d){this.a=d},
dQn:function dQn(d,e,f){this.a=d
this.b=e
this.c=f},
dQo:function dQo(d,e,f){this.a=d
this.b=e
this.c=f},
dQc:function dQc(d,e){this.a=d
this.b=e},
dQp:function dQp(d,e,f){this.a=d
this.b=e
this.c=f},
dQb:function dQb(d,e){this.a=d
this.b=e},
dQq:function dQq(d,e){this.a=d
this.b=e},
dQa:function dQa(d){this.a=d},
dQr:function dQr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQ8:function dQ8(){},
dQ2:function dQ2(d){this.a=d},
dQ3:function dQ3(d){this.a=d},
dQ9:function dQ9(d,e){this.a=d
this.b=e},
dQs:function dQs(d,e){this.a=d
this.b=e},
dQ7:function dQ7(d){this.a=d},
dQt:function dQt(d){this.a=d},
dQ6:function dQ6(){},
dQi:function dQi(d,e){this.a=d
this.b=e},
dQ5:function dQ5(d){this.a=d},
dQj:function dQj(d,e,f){this.a=d
this.b=e
this.c=f},
dQ4:function dQ4(d,e){this.a=d
this.b=e},
dQ1:function dQ1(d,e){this.a=d
this.b=e},
dQk:function dQk(d){this.a=d},
dQl:function dQl(d,e,f){this.a=d
this.b=e
this.c=f},
dQP:function dQP(){},
dQQ:function dQQ(d,e){this.a=d
this.b=e},
dQN:function dQN(d){this.a=d},
dQO:function dQO(d){this.a=d},
dQJ:function dQJ(d,e){this.a=d
this.b=e},
dQK:function dQK(d){this.a=d},
dQC:function dQC(d,e,f){this.a=d
this.b=e
this.c=f},
dQD:function dQD(d,e,f){this.a=d
this.b=e
this.c=f},
dQE:function dQE(d,e,f){this.a=d
this.b=e
this.c=f},
dQF:function dQF(d,e,f){this.a=d
this.b=e
this.c=f},
dQG:function dQG(d,e,f){this.a=d
this.b=e
this.c=f},
dQH:function dQH(d,e,f){this.a=d
this.b=e
this.c=f},
dQI:function dQI(d,e,f){this.a=d
this.b=e
this.c=f},
dQR:function dQR(){},
dQS:function dQS(){},
dQT:function dQT(){},
dQU:function dQU(d){this.a=d},
dQL:function dQL(d,e){this.a=d
this.b=e},
hCy(d){return B.d.dL(D.a5j,new C.fI9(d),new C.fIa())},
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
fI9:function fI9(d){this.a=d},
fIa:function fIa(){},
ama:function ama(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aWM:function aWM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
U8:function U8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgU:function bgU(){this.d=$
this.c=this.a=null},
dgq:function dgq(d,e){this.a=d
this.b=e},
dgo:function dgo(d,e){this.a=d
this.b=e},
dgp:function dgp(){},
dgr:function dgr(d,e){this.a=d
this.b=e},
hmR(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bh(J.k(u==null?"":u))
return new C.nw(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
LQ(d,e){return C.ikR(d,e)},
ikR(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
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
o=A.cF(o,new C.fKF(),o.$ti.k("M.E"),x.B)
n=A.a4(o).k("Y<M.E>")
o=A.C(new A.Y(o,new C.fKG(),n),n.k("M.E"))
B.d.aZ(o,new C.fKH())
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
r=J.b7(f,new C.fY6(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aD("String","ngmy_family_book_v1_"+s+"_"+e,B.X.aw(r,null)),$async$BE)
case 4:case 1:return A.h(u,v)}})
return A.i($async$BE,v)},
aSR(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aSR=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LQ(d,e),$async$aSR)
case 2:u=h
t=J.cD(u)
s=t.bj(u,new C.h5K(f))
if(s===-1)t.c9(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.BE(d,e,u),$async$aSR)
case 3:return A.h(null,v)}})
return A.i($async$aSR,v)},
bEn(d,e,f){var w=0,v=A.j(x.H),u
var $async$bEn=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LQ(d,e),$async$bEn)
case 2:u=h
J.nU(u,new C.fHf(f))
w=3
return A.b(C.BE(d,e,u),$async$bEn)
case 3:return A.h(null,v)}})
return A.i($async$bEn,v)},
bEC(d,e){return C.ikQ(d,e)},
ikQ(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bEC=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bEC)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aU(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.OR
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
if(D.DX.am(0,o.h(0,"foil")))j=A.cP(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.j.D(i==null?25:i,18,36)
h=B.d.q(D.a72,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.q(D.a6m,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.q(D.a6i,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.d84,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
o=new C.Iz(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.OR
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.OR
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bEC,v)},
SL(d,e,f){return C.itK(d,e,f)},
itK(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
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
Sd(d,e){return C.ikS(d,e)},
ikS(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
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
m=J.lM(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
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
ahD(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ahD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sd(d,e),$async$ahD)
case 3:s=g
r=J.a7(s)
if(r.gJ(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gJ(s):"main"
r.I(s,t)
w=5
return A.b(A.aA(),$async$ahD)
case 5:w=4
return A.b(g.aD("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ahD)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahD,v)},
a41(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a41=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Sd(d,e),$async$a41)
case 2:s=h
J.hc(s,f)
w=3
return A.b(A.aA(),$async$a41)
case 3:u=h
w=4
return A.b(u.aD("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a41)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a41)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a41)
case 6:return A.h(null,v)}})
return A.i($async$a41,v)},
nw:function nw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fKF:function fKF(){},
fKG:function fKG(){},
fKH:function fKH(){},
fY6:function fY6(){},
h5K:function h5K(d){this.a=d},
fHf:function fHf(d){this.a=d},
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
bRP:function bRP(d){this.a=d},
iu3(d,e,f,g,h,i,j){return A.a6(d,!1).ce(A.ec(new C.fYH(j,i,f,e,h,g),!0,null,x.H))},
S8(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$S8=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sd(h,g),$async$S8)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.L(x.q).f.T(D.aUR)
u=!1
w=1
break}w=4
return A.b(C.hH_(d,f,e),$async$S8)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ahD(h,g),$async$S8)
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
fYH:function fYH(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a_J:function a_J(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBP:function aBP(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dh5:function dh5(d){this.a=d},
dh4:function dh4(d,e){this.a=d
this.b=e},
dgU:function dgU(d,e){this.a=d
this.b=e},
dgR:function dgR(d,e){this.a=d
this.b=e},
dgs:function dgs(d){this.a=d},
dgt:function dgt(d,e){this.a=d
this.b=e},
dgV:function dgV(d){this.a=d},
dgB:function dgB(d){this.a=d},
dgz:function dgz(d){this.a=d},
dgA:function dgA(d){this.a=d},
dgC:function dgC(d){this.a=d},
dgS:function dgS(d){this.a=d},
dgT:function dgT(){},
dgx:function dgx(d){this.a=d},
dgy:function dgy(d,e){this.a=d
this.b=e},
dgD:function dgD(d){this.a=d},
dgE:function dgE(d,e){this.a=d
this.b=e},
dh3:function dh3(d){this.a=d},
dh2:function dh2(d,e){this.a=d
this.b=e},
dh1:function dh1(d){this.a=d},
dgO:function dgO(d){this.a=d},
dgN:function dgN(d){this.a=d},
dgP:function dgP(d){this.a=d},
dgu:function dgu(d,e){this.a=d
this.b=e},
dgQ:function dgQ(d,e){this.a=d
this.b=e},
dgH:function dgH(d){this.a=d},
dgI:function dgI(d){this.a=d},
dgG:function dgG(){},
dgJ:function dgJ(d){this.a=d},
dgK:function dgK(d){this.a=d},
dgL:function dgL(d,e){this.a=d
this.b=e},
dgM:function dgM(d,e,f){this.a=d
this.b=e
this.c=f},
dgF:function dgF(d,e){this.a=d
this.b=e},
dgX:function dgX(d){this.a=d},
dgW:function dgW(){},
dgY:function dgY(d){this.a=d},
dgZ:function dgZ(d){this.a=d},
dh_:function dh_(d){this.a=d},
dh0:function dh0(d,e){this.a=d
this.b=e},
dgv:function dgv(d){this.a=d},
dgw:function dgw(d){this.a=d},
a_N:function a_N(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhi:function bhi(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
diS:function diS(d){this.a=d},
diT:function diT(d){this.a=d},
diR:function diR(d){this.a=d},
diU:function diU(d){this.a=d},
diQ:function diQ(d){this.a=d},
diV:function diV(d){this.a=d},
diP:function diP(d){this.a=d},
diW:function diW(d,e){this.a=d
this.b=e},
diO:function diO(d,e){this.a=d
this.b=e},
diX:function diX(d,e){this.a=d
this.b=e},
a_L:function a_L(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ag5:function ag5(d,e,f){this.a=d
this.b=e
this.c=f},
aBS:function aBS(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dhk:function dhk(d,e){this.a=d
this.b=e},
dhj:function dhj(d,e){this.a=d
this.b=e},
dho:function dho(d){this.a=d},
dhn:function dhn(d,e){this.a=d
this.b=e},
dhl:function dhl(d){this.a=d},
dhm:function dhm(d){this.a=d},
dhp:function dhp(d){this.a=d},
dhq:function dhq(d){this.a=d},
dhi:function dhi(d,e){this.a=d
this.b=e},
dhh:function dhh(d,e){this.a=d
this.b=e},
KW:function KW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_0:function a_0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cPK:function cPK(d){this.a=d},
cPL:function cPL(){},
cPM:function cPM(d){this.a=d},
bev:function bev(d,e,f){this.b=d
this.c=e
this.a=f},
bem:function bem(d,e){this.b=d
this.a=e},
uX:function uX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_j:function a_j(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bet:function bet(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d8h:function d8h(d,e,f){this.a=d
this.b=e
this.c=f},
d8g:function d8g(d,e){this.a=d
this.b=e},
d8G:function d8G(d){this.a=d},
d8t:function d8t(){},
d8H:function d8H(d){this.a=d},
d8s:function d8s(){},
d8I:function d8I(d,e){this.a=d
this.b=e},
d8r:function d8r(d,e){this.a=d
this.b=e},
d8J:function d8J(d,e){this.a=d
this.b=e},
d8q:function d8q(d,e){this.a=d
this.b=e},
d8K:function d8K(d){this.a=d},
d8p:function d8p(){},
d8L:function d8L(d,e){this.a=d
this.b=e},
d8o:function d8o(d,e){this.a=d
this.b=e},
d8M:function d8M(d){this.a=d},
d8B:function d8B(d,e){this.a=d
this.b=e},
d8N:function d8N(d){this.a=d},
d8O:function d8O(d){this.a=d},
d8Q:function d8Q(d){this.a=d},
d8R:function d8R(d){this.a=d},
d8A:function d8A(d,e){this.a=d
this.b=e},
d8S:function d8S(d,e){this.a=d
this.b=e},
aIT:function aIT(d){this.a=d},
bjP:function bjP(d){this.a=d},
bcD:function bcD(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
amb:function amb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a1Z:function a1Z(d,e){this.a=d
this.b=e},
amc:function amc(d,e,f,g,h,i){var _=this
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
bRZ:function bRZ(d){this.a=d},
bRT:function bRT(d){this.a=d},
bRS:function bRS(d,e){this.a=d
this.b=e},
bS1:function bS1(d){this.a=d},
bRU:function bRU(d){this.a=d},
bRV:function bRV(d){this.a=d},
bRY:function bRY(d){this.a=d},
bRX:function bRX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bS_:function bS_(d,e){this.a=d
this.b=e},
bS0:function bS0(){},
bRW:function bRW(d){this.a=d},
bRQ:function bRQ(d,e){this.a=d
this.b=e},
bRR:function bRR(d){this.a=d},
bpr:function bpr(d,e){this.b=d
this.a=e},
aBQ:function aBQ(){},
iz(d,e){var w
$.S()
w=A.L()
w.b=B.a9
w.c=e
w.r=d.gp(0)
w.d=B.bw
w.e=B.dT
return w},
bDX(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bp(j.save())
j.translate(e.a,e.b)
d.pl(0,a0?-f:f,f)
w=A.bt(B.hr,8,36)
v=B.w.j(0.3)
u=$.S()
t=A.L()
t.r=v.gp(0)
d.bZ(w,t)
w=a1===D.Xo
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ar(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.eto,new A.p(-4+v,-2),C.iz(q,5))
d.ah(D.eqY,new A.p(4-v,-2),C.iz(q,5))}else{t=A.bt(B.JI,14,40)
p=A.L()
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
t=A.L()
t.r=w.gp(0)
d.af(o,t)
u=new A.aG(v,B.ai,k,k,A.a([],u))
u.E(new A.aZ(-12,-50-r))
v=-46-r
u.E(new A.aq(12,v))
u.E(new A.aq(12.5,-42-r))
u.E(new A.aq(-12.5,v))
u.E(new A.bu())
v=A.L()
v.r=h.c.gp(0)
d.af(u,v)
switch(a1.a){case 2:w=Math.sin(g*3.4)
break
case 3:w=Math.sin(g*7.5)
break
default:w=s
break}if(a1===D.b1P){n=-52+w*14
d.ah(new A.p(10,n-22),new A.p(10,n+44),C.iz(F.FX,3.4))
d.ah(D.etG,new A.p(9,n),C.iz(q,4))
d.ah(D.ern,new A.p(10,n),C.iz(q,4))}else if(a1===D.b1Q){d.ah(D.est,new A.p(-8,-26-Math.max(0,w)*6),C.iz(q,4))
d.ah(D.epq,new A.p(8,-26-Math.max(0,-w)*6),C.iz(q,4))}else{w=s*3
v=-38-r
d.ah(D.esy,new A.p(-12-w,v),C.iz(q,4))
d.ah(D.aMp,new A.p(12+w,v),C.iz(q,4))}w=A.L()
w.r=q.gp(0)
d.ar(D.fbe,w)
m=new A.p(0,-77-r)
w=A.bt(m,22,19)
v=A.L()
v.r=q.gp(0)
d.bZ(w,v)
w=h.y
if(w!=null){v=A.bt(m.a2(0,K.vA),15,24)
u=A.L()
u.r=w.gp(0)
d.bZ(v,u)
u=m.a2(0,D.epk)
v=A.L()
v.r=w.gp(0)
d.N(u,4,v)}else{w=A.bt(m.a2(0,B.tB),23,20)
v=h.d
u=A.L()
u.r=v.gp(0)
d.cB(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a2(0,D.etE),m.a2(0,D.esr),C.iz(v,2.2))
d.ah(m.a2(0,D.erm),m.a2(0,D.eph),C.iz(v,2.2))}if(w===4){w=m.a2(0,D.etI)
u=A.L()
u.r=v.gp(0)
d.N(w,6,u)
u=m.a2(0,D.ero)
w=A.L()
w.r=v.gp(0)
d.N(u,6,w)}}w=m.a2(0,D.esf)
v=A.L()
v.r=B.ii.gp(0)
d.N(w,0.9,v)
v=m.a2(0,D.es3)
w=A.L()
w.r=B.ii.gp(0)
d.N(v,0.9,w)
if(i){l=m.a2(0,K.a9_)
w=A.bt(l,21,22)
v=A.L()
v.r=D.lC.gp(0)
d.bZ(w,v)
v=A.bt(l.a2(0,K.aMm),5,12)
w=A.L()
w.r=D.bha.gp(0)
d.bZ(v,w)
d.ah(l.a2(0,D.etA),l.a2(0,K.aMK),C.iz(B.cT,1.4))
d.ah(D.aMp,new A.p(15,-88-r),C.iz(q,3.6))}j.restore()},
hB9(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.bp(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bU(0,f)
v=A.bt(B.dM,18,96)
u=B.w.j(0.28)
$.S()
t=A.L()
t.r=u.gp(0)
d.bZ(v,t)
t=A.bt(B.dM,11,70)
v=B.w.j(0.2)
u=A.L()
u.r=v.gp(0)
d.bZ(t,u)
d.lz(D.aSz,A.L())
C.i96(d,g,h,i,j)
s=(k==null?D.a94:k).a-w>=0?1:-1
w=A.L()
w.a=B.M0
w.sav(A.jB(new A.p(s*70,-60),new A.p(-s*70,-60),A.a([D.aiW.j(0.5),D.aiW.j(0.12),D.bov.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.ar(D.aSz,w)
r.restore()
r.restore()},
i96(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ar(d,B.w,0.28)
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
s=A.bn(D.fbf,B.tG)
p=$.S()
o=A.L()
o.r=u.gp(0)
a1.an(s,o)
o=A.bn(D.fba,B.hU)
s=A.ar(v,B.w,0.18)
s.toString
n=A.L()
n.r=s.gp(0)
a1.an(o,n)
n=A.bn(D.fbo,B.hU)
o=A.ar(v,B.w,0.1)
o.toString
s=A.L()
s.r=o.gp(0)
a1.an(n,s)
s=A.L()
s.r=d.gp(0)
a1.bZ(D.fbh,s)
s=A.L()
s.r=d.gp(0)
a1.bZ(D.fa0,s)
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
k=A.L()
k.r=v.gp(0)
a1.af(l,k)
J.bp(s.save())
a1.mT(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.deT[j]
i=new A.ao(B.P,B.M,B.R,B.S,B.Q)
i.b=B.a9
i.c=5
i.r=k.gp(0)
i.d=B.bw
i.e=B.dT
a1.ah(new A.p(-34+u,-64),new A.p(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.F(B.o.aq(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.S()
f=new A.ao(B.P,B.M,B.R,B.S,B.Q)
f.r=i.gp(0)
a1.N(new A.p(g,h),3.6,f)
f=new A.ao(B.P,B.M,B.R,B.S,B.Q)
f.r=u.gp(0)
a1.N(new A.p(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ao(B.P,B.M,B.R,B.S,B.Q)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.bw
i.e=B.dT
a1.ah(new A.p(g,-64),new A.p(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ao(B.P,B.M,B.R,B.S,B.Q)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.bw
i.e=B.dT
a1.ah(new A.p(-30,h),new A.p(30,h),i)}break
default:a1.ah(D.et3,D.eq5,C.iz(a2.c.j(0.9),3))}a1.ah(D.etB,D.esA,C.iz(B.w.j(0.18),1.6))
a1.ah(D.epp,K.aMr,C.iz(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.S()
i=A.L()
i.r=u.gp(0)
a1.ar(D.f9X,i)
s.restore()
i=A.L()
i.r=a0.gp(0)
a1.ar(D.faa,i)
n=new A.aG(k.r,B.ai,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.c7(0,-57,9,-66))
n.E(new A.c7(0,-60,-9,-66))
k=A.L()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cB(D.faj,0.1,2.941592653589793,!1,C.iz(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.a99
n=25*q
k=23*q
i=9*q
C.hxo(a1,new A.p(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.En:o
C.hxo(a1,new A.p(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.eqQ,D.eqM,C.iz(D.ajU,4))
a1.ah(D.eqO,D.eqK,C.iz(D.Gl.j(0.7),1.4))
u=A.L()
u.r=B.cT.gp(0)
a1.N(D.eqN,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.bp(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.hW(0,a3.f)
a1.bU(0,r)
C.i93(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hxo(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aJ(0,e),r=s.gcK(),q=r===0?B.hr:s.eW(0,r),p=B.j.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
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
o=A.L()
o.r=j.gp(0)
d.N(u,l*0.55,o)
o=A.bt(t,l*1.15,l)
w=A.L()
w.r=k.gp(0)
d.bZ(o,w)
w=-l
w=t.a2(0,new A.p(i*w*0.45,w*0.1))
o=A.L()
o.r=k.gp(0)
d.N(w,l*0.28,o)},
i93(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bt(B.vz,40,38)
$.S()
v=A.L()
v.r=c0.gp(0)
c2.bZ(w,v)}if(c1===4){$.S()
w=A.L()
w.r=c0.gp(0)
c2.N(D.esK,9.5,w)
w=A.L()
w.r=c0.gp(0)
c2.N(D.epG,9.5,w)}w=A.bt(D.etX,10,6)
v=$.S()
u=A.L()
u.r=c8.gp(0)
c2.bZ(w,u)
u=A.bt(D.esc,10,6)
w=A.L()
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
u=A.L()
u.sav(A.wh(D.etq,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iz(c8.j(0.5),0.8)
c2.cB(D.fbq,3.455751918948773,2.5132741228718345,!1,s)
c2.cB(D.fa3,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.esH,D.esv,s)
c2.ah(D.epC,D.ept,s)
c2.cB(D.fai,2.2,1.4,!1,s)
c2.cB(D.fa1,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ao(B.P,B.M,B.R,B.S,B.Q)
n.r=c0.gp(0)
c2.N(new A.p(p*14.5,-3+o*17.5),4.3,n)}p=A.L()
p.r=c0.gp(0)
c2.cB(D.faw,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aG(v,B.ai,b9,b9,A.a([],w))
p.E(new A.aZ(-15,-11))
p.E(new A.c7(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.c7(0,-12,-13,-6))
p.E(new A.bu())
o=A.L()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.esw,D.epu,C.iz(G.ns,1.4))
o=A.L()
o.r=c0.gp(0)
c2.N(D.esN,3,o)
o=A.L()
o.r=c0.gp(0)
c2.N(D.epH,3,o)
o=new A.aG(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.c7(-12,22,0,26))
o.E(new A.c7(12,22,13,6))
o.E(new A.c7(8,13,0,12))
o.E(new A.c7(-8,13,-13,6))
o.E(new A.bu())
p=A.L()
p.r=B.i_.gp(0)
c2.af(o,p)
p=new A.aG(v,B.ai,b9,b9,A.a([],w))
p.E(new A.aZ(-7,8))
p.E(new A.c7(0,6,7,8))
p.E(new A.c7(0,10.5,-7,8))
o=A.L()
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
o=A.L()
o.r=m.gp(0)
c2.af(p,o)
o=A.ar(m,B.w,0.3)
o.toString
c2.cB(D.faD,3.4,2.5,!1,C.iz(o,1.4))
o=A.ar(m,B.c,0.3)
o.toString
c2.cB(D.faq,3.6,2.2,!1,C.iz(o,1.2))
o=new A.aG(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(11,-22))
o.E(new A.c7(27,-34,25,-19))
o.E(new A.c7(18,-18,11,-22))
p=A.ar(m,B.c,0.1)
p.toString
n=A.L()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aG(v,B.ai,b9,b9,A.a([],w))
n.E(new A.aZ(11,-22))
n.E(new A.c7(24,-12,27,-26))
n.E(new A.c7(18,-22,11,-22))
o=A.ar(m,B.w,0.2)
o.toString
p=A.L()
p.r=o.gp(0)
c2.af(n,p)
p=A.L()
p.r=c3.c.gp(0)
c2.N(D.epv,3,p)
break
case 3:p=A.L()
p.r=c0.gp(0)
c2.cB(D.faA,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ar(c0,B.c,0.18)
p.toString
o=new A.ao(B.P,B.M,B.R,B.S,B.Q)
o.b=B.a9
o.c=0.9
o.r=p.gp(0)
o.d=B.bw
o.e=B.dT
c2.ah(new A.p(r*3.6,-19+Math.abs(r)*0.8),new A.p(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=I.aD5[l]
o=new A.ao(B.P,B.M,B.R,B.S,B.Q)
o.b=B.a9
o.c=4.5
o.r=c0.gp(0)
o.d=B.bw
o.e=B.dT
c2.ah(new A.p(k,0),new A.p(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ao(B.P,B.M,B.R,B.S,B.Q)
o.r=p.gp(0)
c2.N(new A.p(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.L()
p.r=c0.gp(0)
c2.cB(D.faz,3.204424506661589,3.015928947446201,!0,p)
p=A.ar(c0,B.c,0.25)
p.toString
c2.ah(K.a9_,K.a8Z,C.iz(p,1))
break
default:p=A.L()
p.r=c0.gp(0)
c2.cB(D.fa4,3.267256359733385,2.8902652413026098,!0,p)}i=B.j.D(c4.b,0,1)*0.4+0.1
p=A.bt(D.etK,5,8)
o=D.aga.j(i)
n=A.L()
n.r=o.gp(0)
c2.bZ(p,n)
n=A.bt(D.esn,5,8)
p=D.aga.j(i)
o=A.L()
o.r=p.gp(0)
c2.bZ(n,o)
h=c4.e*2.4
o=new A.aG(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(h-0.6,-2))
o.E(new A.c7(h-3.4,6,h-2.6,7.4))
o.E(new A.c7(h,8.8,h+2.6,7.4))
c2.af(o,C.iz(c8.j(0.75),1.1))
o=A.L()
o.r=c8.gp(0)
c2.N(new A.p(h-1.5,7.2),0.7,o)
o=A.L()
o.r=c8.gp(0)
c2.N(new A.p(h+1.5,7.2),0.7,o)
g=B.j.F(c5*0.33+c6*0.37,1)>0.965?1:0
p=c4.d
o=c4.c>0.8?1.25:1
f=(1-g)*(1-p*0.6)*o
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=F.fF[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.bt(new A.p(a5,-3),a3,7)
a6=new A.ao(B.P,B.M,B.R,B.S,B.Q)
a6.r=B.c.j(0.96).gp(0)
c2.bZ(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.bp(d.save())
a6=A.a([],w)
a4=new A.aG(v,B.ai,b9,b9,a6)
a6.push(new A.jU(A.bt(new A.p(a5,-3),a3,7)))
a4.ab()
a3=a4.e
if(a3==null)a3=a4.e=new A.Ec(a4.glX().a.snapshot())
d.clipPath(a3.a,$.np(),!0)
a3=new A.ao(B.P,B.M,B.R,B.S,B.Q)
a3.r=D.bkZ.gp(0)
c2.N(new A.p(a7,a8),2.1,a3)
a3=new A.ao(B.P,B.M,B.R,B.S,B.Q)
a3.r=B.w.gp(0)
c2.N(new A.p(a7,a8),1.05,a3)
a3=new A.ao(B.P,B.M,B.R,B.S,B.Q)
a3.r=B.c.gp(0)
c2.N(new A.p(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.ZA:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ao(B.P,B.M,B.R,B.S,B.Q)
a9.b=B.a9
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bw
a9.e=B.dT
a3=p?0.8:0
c2.cB(A.bt(new A.p(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.e1
else{b1=A.ar(c0,B.w,0.2)
b1.toString}b2=new A.ao(B.P,B.M,B.R,B.S,B.Q)
b2.b=B.a9
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bw
b2.e=B.dT
c2.ah(new A.p(a5-a4,b0-a6+0.4),new A.p(a5+a4,b0-0.6-a3),b2)}b3=B.j.D(c4.a,0,1)
if(o)b4=D.bv2
else{u=A.ar(c8,D.box,0.6)
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
v=A.L()
v.r=D.bnR.gp(0)
c2.af(b8,v)
J.bp(d.save())
c2.mT(0,b8)
v=B.c.j(0.95)
u=A.L()
u.r=v.gp(0)
c2.ar(new A.a1(w,11,w+b6*2,13.2),u)
u=A.bt(new A.p(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.L()
w.r=D.bv7.gp(0)
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
u=A.L()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cB(D.fah,-1.2,2.2,!1,C.iz(c8.j(0.5),0.8))
c2.cB(D.fa6,2.141592653589793,2.2,!1,C.iz(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.L()
w.r=c1.gp(0)
c2.N(D.es5,1.7,w)
w=A.L()
w.r=c1.gp(0)
c2.N(D.es1,1.7,w)}},
ieG(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.S(),f=new A.q3(new A.pE()),e=A.zz(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.L()
a2.sav(A.jB(B.J,new A.p(0,a0*0.46),D.dbD,D.d33,B.x,h))
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
t=new A.ao(B.P,B.M,B.R,B.S,B.Q)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.N(new A.p(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.bp(a2.save())
a2.translate(200,120)
e.hW(0,-0.5)
d=A.L()
a0=x.O
d.sav(A.wh(B.J,230,A.a([D.bjH,B.L],a0),h,B.x,h,h,0))
e.bZ(D.faN,d)
a2.restore()
d=A.L()
d.sav(A.wh(D.a97,58,A.a([D.bmT,B.L],a0),h,B.x,h,h,0))
e.N(D.a97,58,d)
d=A.L()
d.r=D.bip.gp(0)
e.N(D.a97,24,d)
d=A.L()
d.r=D.a_1.gp(0)
e.N(D.eqp,5,d)
d=A.L()
d.r=D.a_1.gp(0)
e.N(D.eqt,3.4,d)
d=A.L()
d.r=D.a_1.gp(0)
e.N(D.eqs,2.4,d)
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
g=[D.bgY,D.biY,D.boS][s]
u=$.S()
t=new A.ao(B.P,B.M,B.R,B.S,B.Q)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cxL[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ao(B.P,B.M,B.R,B.S,B.Q)
u.b=B.a9
u.c=2.4
u.r=D.a_m.gp(0)
u.d=B.bw
u.e=B.dT
e.ah(new A.p(o,k),new A.p(g,d),u)
g=A.bt(new A.p(g,k-27),11,46)
u=new A.ao(B.P,B.M,B.R,B.S,B.Q)
u.r=D.a_m.gp(0)
e.bZ(g,u)
d=A.bt(new A.p(o-12,d),8,24)
u=new A.ao(B.P,B.M,B.R,B.S,B.Q)
u.r=D.a_m.gp(0)
e.bZ(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ao(B.P,B.M,B.R,B.S,B.Q)
u.r=D.bis.j(0.8).gp(0)
e.N(new A.p(20+v*52+g*7,400+d*5),1.2,u)}g=A.L()
g.sav(A.jB(D.eoZ,D.ep0,D.d52,B.DH,B.x,h))
e.ar(new A.a1(-200,412,650,1300),g)
j=new A.e2()
j.cY(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.bt(new A.p(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.h2()?B.c:B.w
d=new A.ao(B.P,B.M,B.R,B.S,B.Q)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.bZ(u,d)}J.bp(a2.save())
a2.translate(225,590)
e.pl(0,1,0.34)
g=A.L()
g.sav(A.wh(B.J,250,A.a([D.bpO,D.bji,D.brK],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.N(B.J,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ar(D.aiC,D.bhX,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.S()
a0=new A.ao(B.P,B.M,B.R,B.S,B.Q)
a0.b=B.a9
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bw
a0.e=B.dT
e.ah(new A.p(o+i*2,k),new A.p(o+i*5,g+Math.abs(i)*3),a0)}}C.i7b(e)
for(l=0;l<3;++l)C.iaE(e,D.aAR[l])
C.iat(e,D.eqj)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.S()
a0=new A.ao(B.P,B.M,B.R,B.S,B.Q)
a0.b=B.a9
a0.c=2.4
a0.r=D.a_h.gp(0)
a0.d=B.bw
a0.e=B.dT
e.ah(new A.p(o,452+g),new A.p(o+1,436+d),a0)}e.ah(D.epr,D.epL,C.iz(D.biG,1.6))
a2.restore()
return f.o3()},
i7b(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.S().r,g=x.v,f=new A.aG(h,B.ai,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.ko(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.ko(416,382,432,422,428,462))
f.E(new A.bu())
w=A.L()
w.sav(A.jB(new A.p(354,0),new A.p(430,0),D.dzD,B.na,B.x,i))
d.af(f,w)
v=new A.e2()
v.cY(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.w.j(0.18)
p=new A.ao(B.P,B.M,B.R,B.S,B.Q)
p.b=B.a9
p.c=1.1
p.r=q.gp(0)
p.d=B.bw
p.e=B.dT
d.ah(new A.p(t,s),new A.p(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.dgh[o]
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
r=new A.ao(B.P,B.M,B.R,B.S,B.Q)
r.b=B.a9
r.c=8
r.r=D.agU.gp(0)
r.d=B.bw
r.e=B.dT
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ao(B.P,B.M,B.R,B.S,B.Q)
l.r=A.ar(D.biy,D.boQ,v.ai()).j(0.92).gp(0)
d.N(new A.p(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ao(B.P,B.M,B.R,B.S,B.Q)
r.b=B.a9
r.c=1.2
r.r=D.a_h.gp(0)
r.d=B.bw
r.e=B.dT
d.ah(new A.p(w,q+8),new A.p(w,q+22),r)
q=A.bt(new A.p(w,q+28),13,7)
w=new A.ao(B.P,B.M,B.R,B.S,B.Q)
w.r=D.bq8.gp(0)
d.bZ(q,w)}},
iaE(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bt(new A.p(a5,a6+2),a9,a7*2.8),b1=B.w.j(0.3),b2=$.S(),b3=A.L()
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
u=A.L()
u.sav(A.jB(new A.p(b0,0),new A.p(v,0),D.dgn,B.na,B.x,a4))
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
n=new A.ao(B.P,B.M,B.R,B.S,B.Q)
n.b=B.a9
n.c=1
n.r=o.gp(0)
n.d=B.bw
n.e=B.dT
b4.ah(new A.p(r,q),new A.p(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.aix.j(0.75)
n=A.L()
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
j=new A.ao(B.P,B.M,B.R,B.S,B.Q)
j.r=D.lC.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aG(b2,B.ai,a4,a4,u)
b2=a6-8
f.E(new A.aZ(b0,b2))
for(p/=6,l=0;l<=B.j.bh(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.ak(n)
f.ab()}b4.af(f,C.iz(D.aix.j(0.7),1.6))
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
m=A.L()
m.r=D.aiK.gp(0)
b4.af(b2,m)
m=A.L()
m.r=D.aiK.gp(0)
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
b1=A.L()
n=a7*1.4
b1.sav(A.jB(new A.p(a5-n,0),new A.p(a5+n,0),D.djY,B.na,B.x,a4))
b4.af(e,b1)
J.bp(v.save())
b4.mT(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h2()?B.w:D.bi5).j(0.16)
i=new A.ao(B.P,B.M,B.R,B.S,B.Q)
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
n=new A.ao(B.P,B.M,B.R,B.S,B.Q)
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
v=new A.ao(B.P,B.M,B.R,B.S,B.Q)
v.b=B.a9
v.c=1.1
v.r=D.bph.gp(0)
v.d=B.bw
v.e=B.dT
b4.ah(new A.p(a2,a3),new A.p(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aG(b0,B.ai,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bu())
b0=A.L()
b0.r=D.blt.gp(0)
b4.af(a9,b0)},
iat(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+I.aD2[s]
$.S()
q=new A.ao(B.P,B.M,B.R,B.S,B.Q)
q.b=B.a9
q.c=3
q.r=D.a_h.gp(0)
q.d=B.bw
q.e=B.dT
d.ah(new A.p(r,u),new A.p(r,t),q)}u=A.bt(e.a2(0,K.aMl),24,36)
t=$.S()
r=A.L()
r.r=D.buf.gp(0)
d.bZ(u,r)
t=new A.aG(t.r,B.ai,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.aZ(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.c7(w,v-24,r,u))
t.E(new A.bu())
u=A.L()
u.r=D.ahC.gp(0)
d.af(t,u)},
i9L(d){switch(B.o.F(d,8)){case 0:return D.b1n
case 1:return D.b1l
case 2:return D.b1k
case 3:return D.b1j
case 4:return D.b1m
case 5:return D.b1o
case 6:return D.hBq
default:return D.hBp}},
SJ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bps()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a99:j
w.as=k==null?D.En:k
C.hB9(d,e,p,C.i9L(m),w,s,m,l)},
hCE(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bTD:function bTD(){var _=this
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
bps:function bps(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
amu:function amu(){this.b=this.a=null},
aWR:function aWR(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
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
bTz:function bTz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTA:function bTA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTB:function bTB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTC:function bTC(){},
bTu:function bTu(d){this.a=d},
age:function age(d,e){this.a=d
this.b=e},
aec:function aec(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Na(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bSe(s)
s.bBK(d)
return s},
H7(d,e,f,g,h,i,j){var w,v=A.U(g).k("Y<1>")
v=A.d0(new A.Y(g,new C.fvj(f),v),v.k("M.E"))
w=A.C(v,A.a4(v).k("ci.E"))
B.d.e0(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.u(v,A.cX(w,0,A.dB(3,"count",x.S),A.U(w).c))
B.d.e0(v,d)
return new C.lu(e,v,B.d.co(v,f),h,i,"tree",j)},
ivG(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.T(c0,x.cg),c2=new C.h5B(c1),c3=x.s,c4=A.a([],c3)
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
if(h===D.wG)g="father"
else g=h===D.oz?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Y(t,new C.h5D(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.H7(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Y(w,new C.h5E(i,m),p),o)
B.d.e0(d,c6)
c2.$2(b4,new C.lu("True or false: "+h+" is the "+g+" of "+l+".",D.aBU,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lu("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",D.aBU,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.Ga(m)
h=a0.length
if(h!==0){a1=a0[c6.az(h)]
h=B.a.i(a1.b)
f=A.C(new A.Y(t,new C.h5F(l,a0,c5),v),s)
e=a1.c
if(e===D.wG)e="son"
else e=e===D.oz?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.H7(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.et([h+1,h+2,Math.max(0,h-1)],n)
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
f=A.C(new A.Y(t,new C.h5G(l),v),s)
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
j=A.C(new A.Y(t,new C.h5H(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.wG
if(e)a2=b7
else a2=f===D.oz?b8:b9
if(e)f=b7
else f=f===D.oz?b8:b9
c2.$2("grand",C.H7(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aN9(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.az(k)].b)
j=A.C(new A.Y(t,new C.h5I(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.H7(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.u(j,D.cQz)
h=l+" was born in "+k
c2.$2("place",C.H7(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.u(j,D.d65)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.H7(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.I)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.H7(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cE(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.j_(b1,b3,b3)
c2.$2("year",C.H7(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bEy(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.Na(d),l=new A.e2()
l.cY(f)
w=C.ivG(m,l,g)
for(v=new A.dq(w,w.r,w.e);v.C();)J.hkW(v.d,l)
v=A.a4(w).k("cx<1>")
u=A.C(new A.cx(w,v),v.k("M.E"))
B.d.e0(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aU(u,new C.fIL(n,w))))break
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
if(v<e){v=A.C(D.azT,x.df)
B.d.e0(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hBg(o,l))}}else if(!g&&v>3){o=C.hBg(D.azT[l.az(14)],l)
t[t.length-1-l.az(3)]=o}return t},
hBg(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.e0(w,e)
return new C.lu(d.a,w,B.d.co(w,v),d.d,d.e,d.f,d.r)},
hGy(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.Na(a2),a1=new A.e2()
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
if(new A.N(j,new C.fX7(),A.U(j).k("N<1,H>")).fM(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.I)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.I)(j),++i)g.push(C.aSD(a0,j[i]))
w.push(new C.auu("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.T(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
J.c5(e.c3(0,a0.amD(q),new C.fX8()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cx<1>")
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
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r)s.push(C.aSD(a0,v[r]))
w.push(new C.auu("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aR8(d){return B.d.ao5(D.aCq,new C.fEB(d))},
ilj(d){return A.nA(new A.Y(D.aCq,new C.fLB(d),x.av))},
bT2(d){return C.hQf(d)},
hQf(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bT2=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bT2)
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
return A.i($async$bT2,v)},
BX(d,e){return C.hQc(d,e)},
hQc(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
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
bT1(d,e,f){return C.hQd(d,e,f)},
hQd(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bT1=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bT1)
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
return A.i($async$bT1,v)},
BY(d,e,f,g){return C.hQe(d,e,f,g)},
hQe(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
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
bGP(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
h7F(d,e,f,g){return new C.al5(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hOj(d){var w,v,u,t=d.h(0,"q")
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
return C.h7F(w,v,B.o.D(u==null?20:u,5,60),t)},
hm4(d){var w,v,u,t,s,r,q=J.a7(d),p=q.h(d,"id")
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
if(u.b(r))v.push(C.hOj(A.a2(r,t,s)))}return new C.MV(p,w,v)},
hga(d){var w,v=A.a([],x.c)
for(w=J.aT(d.z);w.C();)v.push(C.hm4(w.gR(w)))
return v},
aSD(d,e){var w=e.c===D.oz
if(d.amD(e)===0&&d.Ga(e).length!==0)return w?0:1
if(d.Ga(e).length!==0||d.aru(e)!=null)return w?2:3
return w?4:5},
hHE(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Na(a4),a3=new A.e2()
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
f=a2.aN9(m)
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
if(k===D.wG)k="father"
else k=k===D.oz?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.wG)k="father"
else k=k===D.oz?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e0(l,a3)
B.d.aZ(l,new C.h60())
d=B.a.i(m.b)
a0=A.C(new A.Y(s,new C.h61(d),o),n)
B.d.e0(a0,a3)
k=A.a([d],t)
i=A.U(a0)
a1=new A.ix(a0,0,3,i.k("ix<1>"))
a1.n8(a0,0,3,i.c)
B.d.u(k,a1)
B.d.e0(k,a3)
a1=C.aSD(a2,m)
i=new A.ix(l,0,4,p)
i.n8(l,0,4,r)
w.push(new C.baR(d,a1,i.dn(0),k))
if(w.length>=5)break}return w},
hyS(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.a_(d,"My ")?1:0},
hGK(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Na(a4),a3=new A.e2()
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
if(q.a!==j&&!B.d.aU(h,new C.fXD(q))&&q.d!==j)i.push(q)}B.d.e0(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.ix(i,0,k,m)
j.n8(i,0,k,n)
f=j.dn(0)
j=B.a.i(l.b)
k=C.aSD(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.I)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.I)(h),++g)e.push(C.aSD(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.I)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.I)(f),++g)a0.push(C.aSD(a2,f[g]))
w.push(new C.aag(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lu:function lu(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bSe:function bSe(d){this.b=d
this.c=$},
bSf:function bSf(){},
bSg:function bSg(d){this.a=d},
fvj:function fvj(d){this.a=d},
h5B:function h5B(d){this.a=d},
h5C:function h5C(){},
h5D:function h5D(d){this.a=d},
h5E:function h5E(d,e){this.a=d
this.b=e},
h5F:function h5F(d,e,f){this.a=d
this.b=e
this.c=f},
h5A:function h5A(d,e){this.a=d
this.b=e},
h5G:function h5G(d){this.a=d},
h5H:function h5H(d){this.a=d},
h5I:function h5I(d,e,f){this.a=d
this.b=e
this.c=f},
h5z:function h5z(d,e){this.a=d
this.b=e},
fIL:function fIL(d,e){this.a=d
this.b=e},
auu:function auu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fX7:function fX7(){},
fX8:function fX8(){},
zI:function zI(d,e,f){this.a=d
this.b=e
this.c=f},
fEB:function fEB(d){this.a=d},
fLB:function fLB(d){this.a=d},
al5:function al5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bN2:function bN2(){},
MV:function MV(d,e,f){this.a=d
this.b=e
this.c=f},
baR:function baR(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
h60:function h60(){},
h61:function h61(d){this.a=d},
aag:function aag(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fXD:function fXD(d){this.a=d},
bi8:function bi8(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
agc:function agc(d,e,f,g,h){var _=this
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
bLc:function bLc(d){this.a=d},
bL7:function bL7(){},
bLd:function bLd(){},
bL5:function bL5(){},
bL6:function bL6(){},
bLb:function bLb(d){this.a=d},
bL8:function bL8(d,e){this.a=d
this.b=e},
bLa:function bLa(d,e){this.a=d
this.b=e},
bL9:function bL9(d,e){this.a=d
this.b=e},
bL4:function bL4(d){this.a=d},
bdi:function bdi(d,e){this.b=d
this.a=e},
QR:function QR(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBO:function aBO(d,e,f){this.b=d
this.c=e
this.a=f},
aAi:function aAi(d,e,f){this.a=d
this.b=e
this.c=f},
av5:function av5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
av6:function av6(d,e,f){var _=this
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
cqM:function cqM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cqN:function cqN(d){this.a=d},
cqL:function cqL(d){this.a=d},
cqO:function cqO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cqP:function cqP(){},
cqQ:function cqQ(d,e){this.a=d
this.b=e},
cqR:function cqR(){},
cqS:function cqS(d){this.a=d},
cqI:function cqI(d){this.a=d},
cqJ:function cqJ(d,e){this.a=d
this.b=e},
cqK:function cqK(d,e,f){this.a=d
this.b=e
this.c=f},
cqD:function cqD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cqF:function cqF(d,e){this.a=d
this.b=e},
cqG:function cqG(d,e){this.a=d
this.b=e},
cqE:function cqE(d,e){this.a=d
this.b=e},
cqC:function cqC(){},
cqH:function cqH(){},
bcM:function bcM(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cQO:function cQO(){},
az3:function az3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
az4:function az4(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cFK:function cFK(d){this.a=d},
cFJ:function cFJ(d){this.a=d},
cFS:function cFS(d,e){this.a=d
this.b=e},
cFT:function cFT(d,e){this.a=d
this.b=e},
cFU:function cFU(d){this.a=d},
cFR:function cFR(d){this.a=d},
cFV:function cFV(d){this.a=d},
cFW:function cFW(d,e){this.a=d
this.b=e},
cFX:function cFX(){},
cFY:function cFY(d){this.a=d},
cFM:function cFM(d){this.a=d},
cFN:function cFN(d,e){this.a=d
this.b=e},
cFL:function cFL(d,e){this.a=d
this.b=e},
cFO:function cFO(){},
cFP:function cFP(){},
cFQ:function cFQ(d,e){this.a=d
this.b=e},
aA3:function aA3(){},
aHh:function aHh(){},
hdT(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.brN((w-450*u)/2,(v-900*u)/2,u)},
ag0:function ag0(){},
f7L:function f7L(d){this.a=d},
aL5:function aL5(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fhV:function fhV(d){this.a=d},
amk:function amk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aml:function aml(d,e,f,g,h,i,j){var _=this
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
bT0:function bT0(d){this.a=d},
bT_:function bT_(){},
bSY:function bSY(d){this.a=d},
bSW:function bSW(){},
bSX:function bSX(d){this.a=d},
bST:function bST(d,e){this.a=d
this.b=e},
bSU:function bSU(){},
bSV:function bSV(d){this.a=d},
bSZ:function bSZ(d,e){this.a=d
this.b=e},
bSS:function bSS(d){this.a=d},
btt:function btt(d,e){this.b=d
this.a=e},
f7M:function f7M(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f7N:function f7N(d,e,f){this.a=d
this.b=e
this.c=f},
f7O:function f7O(d,e,f){this.a=d
this.b=e
this.c=f},
f7P:function f7P(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7Q:function f7Q(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f7R:function f7R(){},
ami:function ami(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amj:function amj(d,e,f,g,h,i,j){var _=this
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
bSE:function bSE(){},
bSP:function bSP(d,e){this.a=d
this.b=e},
bSQ:function bSQ(d){this.a=d},
bSR:function bSR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSL:function bSL(){},
bSK:function bSK(d,e){this.a=d
this.b=e},
bSM:function bSM(d,e){this.a=d
this.b=e},
bSN:function bSN(){},
bSO:function bSO(d){this.a=d},
bSG:function bSG(d){this.a=d},
bSH:function bSH(d){this.a=d},
bSI:function bSI(d){this.a=d},
bSF:function bSF(d,e){this.a=d
this.b=e},
bSJ:function bSJ(d){this.a=d},
bjX:function bjX(d,e){this.b=d
this.a=e},
ds1:function ds1(){},
a2h:function a2h(d,e){this.a=d
this.b=e},
ame:function ame(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amf:function amf(d,e,f,g,h,i){var _=this
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
bSq:function bSq(d){this.a=d},
bSp:function bSp(){},
bSo:function bSo(){},
bSi:function bSi(){},
bSj:function bSj(){},
bSn:function bSn(d,e,f){this.a=d
this.b=e
this.c=f},
bSm:function bSm(d){this.a=d},
bSk:function bSk(d,e){this.a=d
this.b=e},
bSl:function bSl(d){this.a=d},
bjn:function bjn(d,e){this.b=d
this.a=e},
aBR:function aBR(){},
bgW:function bgW(){},
aBT:function aBT(){},
bgX:function bgX(){},
aBU:function aBU(){},
bgY:function bgY(){},
uA(d,e,f,g,h){var w,v,u=null,t=A.l(18),s=A.a([],x.V)
s.push(new A.ab(0,B.G,f.j(0.4),B.i7,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.u(v,A.a([A.X(g,h,u,u,u,20),B.af],w))
v.push(A.d(d,u,u,u,u,u,u,A.m(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.az(u,A.r(u,A.A(v,B.l,u,B.e,B.O,0,u,u),B.f,u,u,new A.o(f,u,u,t,s,u,B.n),u,u,u,u,B.Ou,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hmS(d,e,f,g,h,i,j){return new C.amg(i,h,d,j,e,f,g,null)},
a6J:function a6J(d,e){this.c=d
this.a=e},
bju:function bju(d){this.a=d},
tJ:function tJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bSh:function bSh(d){this.a=d},
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
bmi:function bmi(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e2d:function e2d(d,e){this.a=d
this.b=e},
e2e:function e2e(d){this.a=d},
e2f:function e2f(d,e){this.a=d
this.b=e},
e2b:function e2b(d){this.a=d},
e2c:function e2c(d){this.a=d},
e2a:function e2a(d){this.a=d},
e28:function e28(d){this.a=d},
e29:function e29(d){this.a=d},
e27:function e27(d,e){this.a=d
this.b=e},
e2g:function e2g(d){this.a=d},
e2h:function e2h(d,e){this.a=d
this.b=e},
e2i:function e2i(d,e){this.a=d
this.b=e},
e2j:function e2j(d,e){this.a=d
this.b=e},
e2m:function e2m(d,e){this.a=d
this.b=e},
e2n:function e2n(d,e){this.a=d
this.b=e},
e2o:function e2o(d,e){this.a=d
this.b=e},
e2p:function e2p(d,e){this.a=d
this.b=e},
e2q:function e2q(d,e){this.a=d
this.b=e},
e2r:function e2r(d,e,f){this.a=d
this.b=e
this.c=f},
e2s:function e2s(d,e){this.a=d
this.b=e},
e2t:function e2t(d,e){this.a=d
this.b=e},
e2k:function e2k(d){this.a=d},
e2l:function e2l(d){this.a=d},
a0a:function a0a(d,e){this.a=d
this.b=e},
amg:function amg(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
amh:function amh(d){var _=this
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
bSC:function bSC(d){this.a=d},
bSD:function bSD(d){this.a=d},
bSB:function bSB(d){this.a=d},
bSs:function bSs(d){this.a=d},
bSt:function bSt(d){this.a=d},
bSr:function bSr(d){this.a=d},
bSy:function bSy(d,e,f){this.a=d
this.b=e
this.c=f},
bSz:function bSz(d){this.a=d},
bSv:function bSv(d,e){this.a=d
this.b=e},
bSw:function bSw(d,e,f){this.a=d
this.b=e
this.c=f},
bSA:function bSA(){},
bSx:function bSx(d,e){this.a=d
this.b=e},
bSu:function bSu(d){this.a=d},
U9:function U9(d,e){this.c=d
this.a=e},
amd:function amd(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bS2:function bS2(d){this.a=d},
bS3:function bS3(d){this.a=d},
bSd:function bSd(){},
bSc:function bSc(d,e,f){this.a=d
this.b=e
this.c=f},
bS7:function bS7(d,e){this.a=d
this.b=e},
bS6:function bS6(d,e){this.a=d
this.b=e},
bS8:function bS8(d){this.a=d},
bS9:function bS9(d,e){this.a=d
this.b=e},
bSa:function bSa(d,e){this.a=d
this.b=e},
bS5:function bS5(d,e){this.a=d
this.b=e},
bSb:function bSb(d,e,f){this.a=d
this.b=e
this.c=f},
bS4:function bS4(d,e){this.a=d
this.b=e},
ijP(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ajb(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bD(new A.V(Date.now(),0,!1))
s=new C.fId(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("Y<1>"),q=q.k("cM<1,n>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.z3)m.push(l===D.wG?"male":"female")
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
m.push("child of "+l+k)}a0=A.C(new A.cM(new A.Y(a4,new C.fIb(u,f),p),new C.fIc(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aN(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aN(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aB(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
ijQ(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ajb(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.I)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fIi(v,e)
q=new C.fIg(v)
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
for(l=B.d.gae(e),k=new A.eJ(l,new C.fIh(p,m));k.C();t=f){j=l.gR(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aN(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
i4u(d,e,f,g){var w,v,u=C.ijR(d,e)
if(u<=0||f.length<=u)return new A.afF(!1,D.DJ,f)
if(g.q(0,e.a))return new A.afF(!1,D.DJ,f)
w=A.U(f).c
v=A.cX(f,0,A.dB(u,"count",x.S),w).dn(0)
return new A.afF(!0,A.cX(f,u,null,w).dn(0),v)},
i4v(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ajb(d3),d2=d1.length
if(d2===0)return D.hyC
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.I)(d1),++u){t=d1[u]
v.c3(0,t.a,new C.dhx(t))}s=new C.dhO(v)
d2=x.dy
r=A.T(w,d2)
q=new C.dhG(r)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dhF(r)
l=A.T(w,x.do)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c5(l.c3(0,k,new C.dhy()),o)}h=new C.dhE(s)
g=new C.dhD(l,r)
p=v.$ti.k("b8<2>")
o=p.k("Y<M.E>")
f=A.C(new A.Y(new A.b8(v,p),new C.dhz(h),o),o.k("M.E"))
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
a9=new C.dhM(new C.dhI(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dq(v,v.r,v.e),j=a2.gam8(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.et([i],w)
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
b7=new C.dhw(a2,new C.dhN(),b6,a3,b4,v,a4,a5,a6,b5)
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
a3.bO(0,new C.dhA(c6,b4))
for(d2=new A.cc(a4,a4.$ti.k("cc<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aT(c7.b);j.C();){i=j.gR(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.p(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eJ(j,new C.dhB(c8));i.C();)o.push(j.gR(0).b)
if(o.length===0)continue
B.d.aZ(o,new C.dhC())
c6.push(new C.aL0(new A.p(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bh1(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hBZ(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cE(d)
return w==null?null:w.b[1]},
hw5(d,e,f,g,h,i,j,k,l,m,n){return new C.a0n(k,f,j,e,l,n,m,d,g,h,i,null)},
aDS(d,e,f,g,h,i,j){return new C.bkN(i,d,e,f,j,h,g,null)},
ark:function ark(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFp:function aFp(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e3T:function e3T(d){this.a=d},
e3S:function e3S(d){this.a=d},
e3V:function e3V(d,e){this.a=d
this.b=e},
e3W:function e3W(d,e){this.a=d
this.b=e},
e3X:function e3X(d){this.a=d},
e3R:function e3R(d,e){this.a=d
this.b=e},
e3U:function e3U(d){this.a=d},
e3Z:function e3Z(d){this.a=d},
e3Y:function e3Y(d,e){this.a=d
this.b=e},
are:function are(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFm:function aFm(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e3j:function e3j(d){this.a=d},
e3h:function e3h(d){this.a=d},
e3i:function e3i(d){this.a=d},
e3k:function e3k(d,e){this.a=d
this.b=e},
e3e:function e3e(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2G:function e2G(d){this.a=d},
e2H:function e2H(d,e){this.a=d
this.b=e},
e2Y:function e2Y(d){this.a=d},
e2W:function e2W(d){this.a=d},
e2X:function e2X(d,e){this.a=d
this.b=e},
e2Z:function e2Z(d){this.a=d},
e3_:function e3_(d,e){this.a=d
this.b=e},
e3d:function e3d(d,e){this.a=d
this.b=e},
e2V:function e2V(d){this.a=d},
e2U:function e2U(d){this.a=d},
e2T:function e2T(d,e){this.a=d
this.b=e},
e3a:function e3a(){},
e3b:function e3b(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e39:function e39(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e33:function e33(d){this.a=d},
e34:function e34(d,e,f){this.a=d
this.b=e
this.c=f},
e32:function e32(d,e){this.a=d
this.b=e},
e35:function e35(d,e){this.a=d
this.b=e},
e30:function e30(d,e){this.a=d
this.b=e},
e31:function e31(){},
e36:function e36(d,e){this.a=d
this.b=e},
e37:function e37(d){this.a=d},
e38:function e38(d,e){this.a=d
this.b=e},
e3c:function e3c(d,e){this.a=d
this.b=e},
e2u:function e2u(d,e){this.a=d
this.b=e},
e2v:function e2v(d,e){this.a=d
this.b=e},
e3m:function e3m(d,e,f){this.a=d
this.b=e
this.c=f},
e3g:function e3g(d,e,f){this.a=d
this.b=e
this.c=f},
e3f:function e3f(d){this.a=d},
e2w:function e2w(d){this.a=d},
e2x:function e2x(d){this.a=d},
e2y:function e2y(){},
e2z:function e2z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2D:function e2D(d,e){this.a=d
this.b=e},
e2C:function e2C(d,e){this.a=d
this.b=e},
e2B:function e2B(d){this.a=d},
e2E:function e2E(d,e){this.a=d
this.b=e},
e2A:function e2A(d){this.a=d},
e3l:function e3l(d){this.a=d},
e2Q:function e2Q(){},
e2R:function e2R(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2P:function e2P(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2L:function e2L(d,e,f){this.a=d
this.b=e
this.c=f},
e2K:function e2K(d,e,f){this.a=d
this.b=e
this.c=f},
e2I:function e2I(d,e){this.a=d
this.b=e},
e2M:function e2M(d){this.a=d},
e2N:function e2N(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2J:function e2J(d,e){this.a=d
this.b=e},
e2O:function e2O(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2S:function e2S(d,e){this.a=d
this.b=e},
e3t:function e3t(){},
e3u:function e3u(d,e){this.a=d
this.b=e},
e3v:function e3v(d){this.a=d},
e3w:function e3w(d,e){this.a=d
this.b=e},
e3p:function e3p(d){this.a=d},
e3n:function e3n(d,e){this.a=d
this.b=e},
e3q:function e3q(d,e){this.a=d
this.b=e},
e3r:function e3r(d,e){this.a=d
this.b=e},
e3s:function e3s(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e3x:function e3x(d){this.a=d},
e3o:function e3o(d){this.a=d},
e2F:function e2F(d){this.a=d},
bh_:function bh_(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dhu:function dhu(d){this.a=d},
dht:function dht(d,e){this.a=d
this.b=e},
dhv:function dhv(d){this.a=d},
dhs:function dhs(d,e){this.a=d
this.b=e},
fId:function fId(d,e){this.a=d
this.b=e},
fIe:function fIe(d){this.a=d},
fIf:function fIf(){},
fIb:function fIb(d,e){this.a=d
this.b=e},
fIc:function fIc(){},
fIi:function fIi(d,e){this.a=d
this.b=e},
fIj:function fIj(d){this.a=d},
fIk:function fIk(){},
fIg:function fIg(d){this.a=d},
fIh:function fIh(d,e){this.a=d
this.b=e},
L2:function L2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GH:function GH(d,e){this.a=d
this.b=e},
bh1:function bh1(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dhx:function dhx(d){this.a=d},
dhO:function dhO(d){this.a=d},
dhG:function dhG(d){this.a=d},
dhH:function dhH(){},
dhF:function dhF(d){this.a=d},
dhy:function dhy(){},
dhE:function dhE(d){this.a=d},
dhD:function dhD(d,e){this.a=d
this.b=e},
dhz:function dhz(d){this.a=d},
dhI:function dhI(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dhJ:function dhJ(d){this.a=d},
dhK:function dhK(d){this.a=d},
dhL:function dhL(){},
dhM:function dhM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dhN:function dhN(){},
dhw:function dhw(d,e,f,g,h,i,j,k,l,m){var _=this
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
dhA:function dhA(d,e){this.a=d
this.b=e},
dhB:function dhB(d){this.a=d},
dhC:function dhC(){},
aL0:function aL0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bh2:function bh2(d,e){this.b=d
this.a=e},
dhP:function dhP(){},
dhQ:function dhQ(d){this.a=d},
dhR:function dhR(d){this.a=d},
dhS:function dhS(){},
bkO:function bkO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bg4:function bg4(d,e){this.b=d
this.a=e},
byQ:function byQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fnv:function fnv(d){this.a=d},
boa:function boa(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eYx:function eYx(d){this.a=d},
eYw:function eYw(d,e){this.a=d
this.b=e},
a0n:function a0n(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aDQ:function aDQ(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dxN:function dxN(d,e){this.a=d
this.b=e},
dxM:function dxM(d){this.a=d},
dxK:function dxK(d){this.a=d},
dxL:function dxL(d){this.a=d},
dxW:function dxW(d){this.a=d},
dxX:function dxX(d){this.a=d},
dxV:function dxV(d,e){this.a=d
this.b=e},
dxY:function dxY(){},
dy0:function dy0(d){this.a=d},
dxU:function dxU(d,e){this.a=d
this.b=e},
dy_:function dy_(){},
dy1:function dy1(d){this.a=d},
dxT:function dxT(d,e){this.a=d
this.b=e},
dy2:function dy2(d){this.a=d},
dxS:function dxS(d){this.a=d},
dy3:function dy3(d){this.a=d},
dxR:function dxR(d){this.a=d},
dy4:function dy4(d){this.a=d},
dxQ:function dxQ(d){this.a=d},
dy5:function dy5(d){this.a=d},
dxP:function dxP(d){this.a=d},
dy6:function dy6(d){this.a=d},
dxO:function dxO(d,e){this.a=d
this.b=e},
dxZ:function dxZ(d){this.a=d},
aey:function aey(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bkN:function bkN(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aex:function aex(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bkM:function bkM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dy7:function dy7(d){this.a=d},
dy8:function dy8(d,e){this.a=d
this.b=e},
aDR:function aDR(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aK2:function aK2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aez:function aez(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dyh:function dyh(d){this.a=d},
GD:function GD(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hqV(d){var w=d.U,v=x.N
return w.jr(w,new C.cfs(),v,v)},
hWS(d){var w=d.bF
if(w>=0)return w
return 5},
hqX(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hqV(d).h(0,v)
if(w==null||w.length===0)return null
return A.bh(w)},
hqW(d,e){var w=C.hqX(d,e)
if(w!=null&&w.ca(new A.V(Date.now(),0,!1)))return!0
return!1},
hWT(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.hqV(d),w,w)
u=C.hqX(d,e)
t=u!=null&&u.ca(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bS(A.dw(30,0,0,0,0,0).a).aa().ag())
d.U=v},
b1w(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b1w=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lB(t,B.JC),$async$b1w)
case 3:if(l){u=!0
w=1
break}u=A.lh(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.JC,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1w,v)},
cfs:function cfs(){},
hWQ(){var w,v=$.ov(),u=J.e4(8,x.N)
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
a8s(d){return C.hWR(d)},
hWR(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a8s=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$a8s)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hM("ngmy_family_tree_backup_codes_v1",A.J(["codes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cP,null),$async$a8s)
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
return A.i($async$a8s,v)},
cfr(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cfr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Jx(),$async$cfr)
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
return A.i($async$cfr,v)},
Os(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Os=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cfr(d),$async$Os)
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
return A.b(C.a8s(s),$async$Os)
case 9:case 8:u=t
w=1
break
case 5:n=C.hWQ()
w=10
return A.b(C.Jx(),$async$Os)
case 10:s=f
J.aK(s,n,A.J(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a8s(s),$async$Os)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Os,v)},
b1v(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b1v=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Jx(),$async$b1v)
case 3:t=f
for(s=J.dp(t),r=s.gdP(t),r=r.dn(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.I)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a8s(t),$async$b1v)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b1v,v)},
a8t(d,e,f){var w=0,v=A.j(x.H),u
var $async$a8t=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.arj(d,e),$async$a8t)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Os(d),$async$a8t)
case 7:w=4
break
case 5:w=8
return A.b(C.b1v(d),$async$a8t)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a8t,v)},
ard(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$ard=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.arj(f,e),$async$ard)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c9(),$async$ard)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Jx(),$async$ard)
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
return A.i($async$ard,v)},
b1u(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b1u=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c9(),$async$b1u)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Jx(),$async$b1u)
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
return A.i($async$b1u,v)},
hWU(){var w,v=$.ov(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"FT"+B.d.he(u)},
arg(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$arg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$arg)
case 3:if(!g){u=null
w=1
break}t=C.hWU()
w=4
return A.b(A.Wv(),$async$arg)
case 4:s=g
r=B.dW.aO(B.X.aw(d.f3(),null))
r=B.cU.gcu().aO(r)
q=e?999:2
J.aK(s,t,A.J(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a8u(s),$async$arg)
case 5:p=e?999:2
u=new A.a1x("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arg,v)},
arf(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$arf=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Wv(),$async$arf)
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
return A.b(C.b1u(J.k(l==null?"":l),j),$async$arf)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.ca.cJ(0,B.cM.aO(t))
s=C.hqY(r)}catch(f){q=A.ac(f)
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
return A.b(A.a8u(p),$async$arf)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arf,v)},
hqY(d){var w,v,u,t,s=null
try{w=B.X.aQ(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hWW(A.a2(w,x.N,x.z))
return u}catch(t){v=A.ac(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
h9P(d){var w=0,v=A.j(x.m),u,t,s
var $async$h9P=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a_(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.arf(t[1])
w=1
break}u=null
w=1
break}u=C.hqY(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h9P,v)},
hWW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.de(v,x.f)
u=A.cF(u,new C.cfu(),u.$ti.k("M.E"),x.k)
t=A.a4(u).k("Y<M.E>")
s=A.C(new A.Y(u,new C.cfv(),t),t.k("M.E"))}else s=A.a([],x._)
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
n=A.cF(n,new C.cfw(),n.$ti.k("M.E"),o)
k=A.a4(n).k("Y<M.E>")
j=A.C(new A.Y(n,new C.cfx(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.arh(h,w,s,r,q)},
arj(d,e){var w=0,v=A.j(x.y),u,t
var $async$arj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Oj(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Bt(d),$async$arj)
case 3:u=t.cJ(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arj,v)},
cfD(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cfD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Bt(d),$async$cfD)
case 3:t=s.b7(f,new C.cfE(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aZ(t,new C.cfF())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cfD,v)},
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
return A.b(C.arj(e,d),$async$Ww)
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
if(g!=null&&B.a.i(g).length!==0){t=J.dG(r,new C.cfB(g))
r=A.C(t,t.$ti.k("M.E"))}t=J.a7(r)
if(t.gau(r)){u=null
w=1
break}t=t.dN(r,new C.cfC(e),x.k)
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
case 13:u=new C.arh(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ww,v)},
b1z(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b1z=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ww(d,e,f,g),$async$b1z)
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
return A.i($async$b1z,v)},
b1y(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b1y=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ww(d,e,f,g),$async$b1y)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.arg(r,f),$async$b1y)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aI2(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1y,v)},
Wx(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wx=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.h9P(a0),$async$Wx)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a_(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.ard(g.a,d,e,f,s,r),$async$Wx)
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
return A.b(C.bEe(e,j),$async$Wx)
case 12:case 11:w=13
return A.b(C.aiV(e,j,s),$async$Wx)
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
break}u=new A.brT(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Wx,v)},
arh:function arh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cfz:function cfz(){},
cfA:function cfA(){},
cfy:function cfy(){},
cfu:function cfu(){},
cfv:function cfv(){},
cfw:function cfw(){},
cfx:function cfx(){},
cfE:function cfE(){},
cfF:function cfF(){},
cfB:function cfB(d){this.a=d},
cfC:function cfC(d){this.a=d},
hiT(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f4(null,x.H)
return A.hC(d,new C.ari(w,e,g,i,f,h,null),!0,null,x.H)},
dhr(d,e,f,g,h,i,j,k){return new C.bgZ(i,e,k,j,g,f,h,d,null)},
ari:function ari(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFo:function aFo(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e3G:function e3G(d){this.a=d},
e3H:function e3H(d,e,f){this.a=d
this.b=e
this.c=f},
e3L:function e3L(d,e){this.a=d
this.b=e},
e3M:function e3M(d){this.a=d},
e3D:function e3D(d){this.a=d},
e3E:function e3E(d,e){this.a=d
this.b=e},
e3F:function e3F(d,e){this.a=d
this.b=e},
e3K:function e3K(d){this.a=d},
e3J:function e3J(d,e){this.a=d
this.b=e},
e3I:function e3I(){},
e3O:function e3O(d){this.a=d},
e3P:function e3P(d,e){this.a=d
this.b=e},
e3N:function e3N(d,e){this.a=d
this.b=e},
dhT:function dhT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bh0:function bh0(d,e,f){this.d=d
this.e=e
this.a=f},
adO:function adO(d,e,f){this.c=d
this.d=e
this.a=f},
bgZ:function bgZ(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bh3:function bh3(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0H:function a0H(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFn:function aFn(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e3y:function e3y(d,e){this.a=d
this.b=e},
e3z:function e3z(d){this.a=d},
e3A:function e3A(d){this.a=d},
e3B:function e3B(d){this.a=d},
e3C:function e3C(d){this.a=d},
a0I:function a0I(d){this.a=d},
bmj:function bmj(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e3Q:function e3Q(d,e){this.a=d
this.b=e},
b02(d,e){return new C.b01(d,e,null)},
b01:function b01(d,e,f){this.c=d
this.d=e
this.a=f},
img(d){if(!(d!=null&&B.a.a_(d,"ngmy:thumb:")))return null
return B.a.b2(d,11)},
iud(d){return A.bU(B.L,null,new C.fZ9(new C.um(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hsW(d,e){return new C.aui(e,d,null)},
aSw(d,e,f,g,h,i,j){var w=C.img(i)
if(w!=null)return A.bx(e,new A.a5(j,f,new C.a7v(w,!0,null),null),B.aq)
return N.aRT(e,B.c0,f,g,h,i,j)},
lZ:function lZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7v:function a7v(d,e,f){this.c=d
this.d=e
this.a=f},
blX:function blX(d,e){var _=this
_.e=_.d=$
_.cQ$=d
_.b7$=e
_.c=_.a=null},
dPU:function dPU(d){this.a=d},
dPV:function dPV(){},
dPW:function dPW(d,e){this.a=d
this.b=e},
blW:function blW(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fZ9:function fZ9(d){this.a=d},
fZ8:function fZ8(d,e){this.a=d
this.b=e},
fZ7:function fZ7(d,e){this.a=d
this.b=e},
fZ6:function fZ6(d,e){this.a=d
this.b=e},
aui:function aui(d,e,f){this.c=d
this.d=e
this.a=f},
cp3:function cp3(d,e){this.a=d
this.b=e},
aNs:function aNs(){},
itZ(d){var w=null
return A.cg(w,w,!0,w,new C.fYx(),d,w,!0,!0,x.e2)},
ivc(d,e,f,g,h){var w=null
return A.cg(w,w,!0,w,new C.h5i(h,g,f,e),d,w,!0,!0,x.N)},
iu0(d,e){var w=null
return A.cg(w,w,!0,w,new C.fYB(e),d,w,!0,!0,x.dY)},
iu_(d){var w=null
return A.cg(w,w,!0,w,new C.fYA(),d,w,!0,!0,x.c5)},
aVs:function aVs(d,e){this.a=d
this.b=e},
aVr:function aVr(d){this.a=d},
aTu:function aTu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fYx:function fYx(){},
h5i:function h5i(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fYB:function fYB(d){this.a=d},
fYA:function fYA(){},
a_l:function a_l(d,e){this.c=d
this.a=e},
aAz:function aAz(){var _=this
_.d=$
_.c=_.a=_.e=null},
d93:function d93(d){this.a=d},
d94:function d94(d){this.a=d},
d92:function d92(d,e){this.a=d
this.b=e},
d95:function d95(d){this.a=d},
d96:function d96(d){this.a=d},
a_k:function a_k(d){this.a=d},
aAy:function aAy(){this.d=$
this.c=this.a=null},
d9_:function d9_(d){this.a=d},
d90:function d90(d){this.a=d},
d91:function d91(d){this.a=d},
ZS:function ZS(d){this.a=d},
azh:function azh(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cHq:function cHq(){},
cHw:function cHw(d){this.a=d},
cHx:function cHx(d){this.a=d},
cHy:function cHy(d){this.a=d},
cHv:function cHv(){},
cHz:function cHz(d){this.a=d},
cHA:function cHA(d){this.a=d},
cHu:function cHu(){},
cHB:function cHB(d,e){this.a=d
this.b=e},
cHt:function cHt(d,e){this.a=d
this.b=e},
cHr:function cHr(d,e){this.a=d
this.b=e},
cHC:function cHC(d){this.a=d},
cHs:function cHs(){},
cHD:function cHD(d){this.a=d},
a2t:function a2t(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
byI:function byI(){this.d=$
this.c=this.a=null},
fn0:function fn0(d,e){this.a=d
this.b=e},
fn1:function fn1(d){this.a=d},
fn2:function fn2(d,e){this.a=d
this.b=e},
acQ:function acQ(d,e){this.a=d
this.b=e},
Gr:function Gr(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
byG:function byG(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
fmZ:function fmZ(d,e){this.a=d
this.b=e},
aza:function aza(d,e){this.c=d
this.a=e},
byH:function byH(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
fn_:function fn_(d){this.a=d},
byF:function byF(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aPA:function aPA(){},
aPB:function aPB(){},
bGe(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.j.bh(u),s=B.o.D(B.j.V((u-t)*100),0,99),r=d<0?"-":"",q=A.p9(B.o.v(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fWV(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.m(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.m(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.U,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.m(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b_(B.o.v(s),2,"0")
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.m(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Zf(A.cQ(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aS8(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aS8=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.i_().l9(85,1280,B.eQ),$async$aS8)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fq(),$async$aS8)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hsV()
w=9
return A.b(C.cp2(q,r),$async$aS8)
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
return A.i($async$aS8,v)},
aSu(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aSu=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a_(g,"ngmy:ws-thumb:")
if(i){u=C.cp_(g)
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
return A.b(A.Hn(p,!0,null,o).dg(0,B.h8),$async$aSu)
case 9:n=a1
w=10
return A.b(n.ld(),$async$aSu)
case 10:m=a1
w=11
return A.b(m.b.hr(B.hp),$async$aSu)
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
return A.i($async$aSu,v)},
fWV:function fWV(){},
um:function um(d){this.a=d},
auh:function auh(d,e,f){this.c=d
this.d=e
this.a=f},
aGT:function aGT(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eVH:function eVH(d,e){this.a=d
this.b=e},
eVy:function eVy(d){this.a=d},
eVz:function eVz(d){this.a=d},
eVF:function eVF(d,e){this.a=d
this.b=e},
eVE:function eVE(d,e){this.a=d
this.b=e},
eVB:function eVB(d,e){this.a=d
this.b=e},
eVA:function eVA(d,e){this.a=d
this.b=e},
eVC:function eVC(d){this.a=d},
eVD:function eVD(d,e){this.a=d
this.b=e},
eVG:function eVG(d,e){this.a=d
this.b=e},
eVt:function eVt(d,e){this.a=d
this.b=e},
eVx:function eVx(d){this.a=d},
eVw:function eVw(d,e){this.a=d
this.b=e},
eVv:function eVv(d){this.a=d},
eVI:function eVI(d,e){this.a=d
this.b=e},
eVJ:function eVJ(d,e){this.a=d
this.b=e},
eVu:function eVu(d,e){this.a=d
this.b=e},
hGa(d,e,f){var w="thumbnailPath",v=e.aj()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.J(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
fWW(d,e,f){var w=0,v=A.j(x.N),u
var $async$fWW=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.X.aw(C.hGa(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fWW,v)},
bGg(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bGg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fWW(!0,d,e),$async$bGg)
case 4:w=3
return A.b(r.auf(g,d,e.a),$async$bGg)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dW.aO(B.X.aw(C.hGa(d,e,null),null))
u="NGMY_WS:"+B.kK.gcu().aO(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGg,v)},
hxu(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hit(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d5(s,"NGMYWSSYNC2|"))return!0
if(J.d5(s,"NGMY_WS:"))return!0
if(J.eK(s,t))return!0
if(J.d5(s,"{"))try{w=B.X.aQ(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
irv(d){var w,v,u,t=C.hxu(d)
if(t==null)return null
if(C.hit(t))return t
w=B.a.co(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b2(t,w))
if(C.hit(v))return v}u=B.a.co(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b2(t,u))
if(C.hit(v))return v}return null},
his(d){var w,v,u,t,s,r=null,q=B.a.i(d)
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
t=C.hct(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bGf(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bGf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a_(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.aue(t[1]),$async$bGf)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.his(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.his(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGf,v)},
hir(d){var w=B.o.v(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lF(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bFK(){var w=0,v=A.j(x.o),u,t
var $async$bFK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Hz(),$async$bFK)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.his(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFK,v)},
hHn(d,e,f,g){return A.bU(B.L,null,new C.h55(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
h55:function h55(d,e,f){this.a=d
this.b=e
this.c=f},
aeU:function aeU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eVL:function eVL(d,e){this.a=d
this.b=e},
eVM:function eVM(d,e){this.a=d
this.b=e},
eVN:function eVN(d,e){this.a=d
this.b=e},
eVO:function eVO(d,e){this.a=d
this.b=e},
eVK:function eVK(d){this.a=d},
aub:function aub(d,e,f){this.c=d
this.d=e
this.a=f},
bnG:function bnG(){var _=this
_.c=_.a=_.e=_.d=null},
eVo:function eVo(d,e){this.a=d
this.b=e},
eVp:function eVp(d){this.a=d},
eVq:function eVq(d){this.a=d},
aug:function aug(d){this.a=d},
aGS:function aGS(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eVs:function eVs(d){this.a=d},
eVr:function eVr(d){this.a=d},
i_a(d,e,f,g,h){return new C.P8(h,g,d,e,f,null)},
aLN:function aLN(d,e){this.a=d
this.b=e},
P8:function P8(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGU:function aGU(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eWa:function eWa(){},
eW6:function eW6(d,e){this.a=d
this.b=e},
eW7:function eW7(d){this.a=d},
eVS:function eVS(d){this.a=d},
eVQ:function eVQ(d){this.a=d},
eVR:function eVR(d){this.a=d},
eW0:function eW0(d,e){this.a=d
this.b=e},
eVY:function eVY(d,e){this.a=d
this.b=e},
eVZ:function eVZ(d,e){this.a=d
this.b=e},
eW_:function eW_(d,e,f){this.a=d
this.b=e
this.c=f},
eVW:function eVW(d,e,f){this.a=d
this.b=e
this.c=f},
eVU:function eVU(d){this.a=d},
eVV:function eVV(d){this.a=d},
eVX:function eVX(d){this.a=d},
eWd:function eWd(d){this.a=d},
eWc:function eWc(d){this.a=d},
eWe:function eWe(d){this.a=d},
eWb:function eWb(d){this.a=d},
eVP:function eVP(d){this.a=d},
eVT:function eVT(d,e){this.a=d
this.b=e},
eW9:function eW9(d,e){this.a=d
this.b=e},
eW8:function eW8(d,e){this.a=d
this.b=e},
eW3:function eW3(d){this.a=d},
eW4:function eW4(d){this.a=d},
eW5:function eW5(d,e){this.a=d
this.b=e},
eW2:function eW2(d,e){this.a=d
this.b=e},
eW1:function eW1(d,e,f){this.a=d
this.b=e
this.c=f},
bAt:function bAt(){},
Bg(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ahp(d,e,f){return C.ifC(d,e,f)},
ifC(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ahp=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aD("String",e,f),$async$ahp)
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
aho(d,e){return C.ifB(d,e)},
ifB(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
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
ier(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.TB(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bDd(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bDd=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b4N(q),$async$bDd)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aSu(q,!1),$async$bDd)
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
return A.i($async$bDd,v)},
hNz(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
hct(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.de(s,x.f)
w=A.cF(w,new C.cGI(),w.$ti.k("M.E"),x.Q)
v=A.a4(w).k("Y<M.E>")
r=A.C(new A.Y(w,new C.cGJ(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bh(J.k(t==null?"":t))
return new C.lF(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
ijL(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.wG
case"female":case"f":return D.oz
default:return D.z3}},
hCz(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hmT(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.ijL(v==null?j:J.k(v))
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
ijN(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.OS
case"viewer":return D.kX
default:return D.uN}},
ijO(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Ho(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aRf(d,e){return B.a.i(e.toLowerCase())===C.Ho(d,e)&&d.y!==D.kX},
uB(d,e){var w,v=d.y
if(v===D.kX)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Ho(d,e))return!0
if(v===D.OS)return!0
v=d.e
return new A.N(v,A.hiz(),A.U(v).k("N<1,n>")).q(0,w)},
ij7(d){return J.dG(d,new C.fH5()).gJ(0)},
h5R(d){var w=0,v=A.j(x.y),u,t
var $async$h5R=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Bt(d),$async$h5R)
case 3:u=t.rn(f,new C.h5S(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h5R,v)},
bEe(d,e){var w=0,v=A.j(x.H),u,t
var $async$bEe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Bt(d),$async$bEe)
case 3:t=g
if(J.rn(t,new C.fEA(e))){w=1
break}if(C.ij7(t)>=2)throw A.W(A.bc("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bEe,v)},
amn(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.de(h,x.f)
w=A.cF(w,new C.bT3(),w.$ti.k("M.E"),x.P)
v=A.a4(w).k("Y<M.E>")
g=A.C(new A.Y(w,new C.bT4(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b7(u,new C.bT5(),x.N)
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
n=C.ijN(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aT(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cs)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gR(f)
if(l.b(i))m.push(A.a2(i,k,j))}return new C.kZ(w,v,s,!r,t,g,q,p,o,n,m)},
hCO(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
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
return A.b(t.a7i(0),$async$DF)
case 5:w=6
return A.b(C.fuU(t,l),$async$DF)
case 6:s=f
if(J.cJ(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a7(q)
o=A.aU(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hy4(o)
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
case 12:n=C.hy4(m)
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
fuU(d,e){return C.ibO(d,e)},
ibO(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fuU=A.e(function(b0,b1){if(b0===1){s.push(b1)
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
break}k=C.hct(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aU(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Bg(a9)+"_"+n))
i=C.ier(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a_(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b4N(h),$async$fuU)
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
case 8:J.SR(q,new C.fuV())
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
return A.i($async$fuU,v)},
bEG(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bEG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SI(d),$async$bEG)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.DF(r),$async$bEG)
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
return A.i($async$bEG,v)},
hy4(d){var w,v,u,t
try{w=B.X.aQ(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.de(w,x.f)
v=A.cF(v,new C.fqF(),v.$ti.k("M.E"),x.fA)
u=A.a4(v).k("Y<M.E>")
v=A.C(new A.Y(v,new C.fqG(),u),u.k("M.E"))
B.d.aZ(v,new C.fqH())
return v}catch(t){v=A.a([],x.D)
return v}},
p8(d,e){return C.itO(d,e)},
itO(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
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
o=J.b7(x.j.a(B.X.aQ(0,p,null)),new C.fYl(),a2).fM(0)
a2=J.b7(b3,new C.fYm(),a2).bY(0,new C.fYn())
n=A.d0(a2,a2.$ti.k("M.E"))
a2=o,a2=A.dY(a2,a2.r,A.a4(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eK(n,m)?17:18
break
case 17:a5=C.Bg(a8)
l=A.aU(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a9O(l),$async$p8)
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
return A.b(C.a9O(a5==null?null:J.k(a5)),$async$p8)
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
return A.b(C.aho(r,"ngmy_worksheet_item_v3_"+C.Bg(a8)+"_"+m),$async$p8)
case 29:w=30
return A.b(C.aho(r,"ngmy_worksheet_thumb_v3_"+C.Bg(a8)+"_"+m),$async$p8)
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
return A.b(C.bDd(h),$async$p8)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ahp(r,"ngmy_worksheet_thumb_v3_"+C.Bg(a8)+"_"+a4,f),$async$p8)
case 40:g=i.TB(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.aho(r,"ngmy_worksheet_thumb_v3_"+C.Bg(a8)+"_"+a4),$async$p8)
case 41:g=i.TB(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.aho(r,"ngmy_worksheet_thumb_v3_"+C.Bg(a8)+"_"+a4),$async$p8)
case 42:case 34:a4=i.a
w=43
return A.b(C.ahp(r,"ngmy_worksheet_item_v3_"+C.Bg(a8)+"_"+a4,B.X.aw(g.aj(),null)),$async$p8)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.c5(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ahp(r,"ngmy_worksheets_index_v3_"+C.Bg(a8),B.X.aw(q,null)),$async$p8)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eP(b3,new C.fYo(q))
a4=a3.$ti.k("cM<1,a9<n,@>>")
a7=A.C(new A.cM(a3,new C.fYp(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ahp(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.X.aw(a0,null)),$async$p8)
case 45:w=46
return A.b(J.hMF(r),$async$p8)
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
r=s.bj(t,new C.h5Q(e))
if(r===-1)s.c9(t,0,e)
else s.n(t,r,e)
u=C.p8(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Mg,v)},
bEr(d,e){var w=0,v=A.j(x.H),u
var $async$bEr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.DF(d),$async$bEr)
case 2:u=g
J.nU(u,new C.fHz(e))
w=3
return A.b(C.p8(d,u),$async$bEr)
case 3:return A.h(null,v)}})
return A.i($async$bEr,v)},
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
j=A.cF(j,new C.fKL(),j.$ti.k("M.E"),x.k)
s=A.a4(j).k("Y<M.E>")
r=A.C(new A.Y(j,new C.fKM(),s),s.k("M.E"))
B.d.aZ(r,new C.fKN())
k=r}}catch(h){}w=4
return A.b(C.frs(d),$async$Hq)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.icb(k,p,d)
j=A.U(o)
s=j.k("N<1,a9<n,@>>")
s=A.C(new A.N(o,new C.fKO(),s),s.k("ak.E"))
n=B.X.aw(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.RS(d,o),$async$Hq)
case 7:case 6:j=j.k("Y<1>")
m=A.C(new A.Y(o,new C.fKP(d),j),j.k("M.E"))
if(m.length!==0)C.aR_(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Hq,v)},
fY7(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fY7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.RS(d,e),$async$fY7)
case 3:t=J.dG(e,new C.fY8(d))
s=A.C(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aR_(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fY7,v)},
a47(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a47=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aA(),$async$a47)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aU(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.X.aQ(0,l,null)
if(x.j.b(u)){m=J.de(u,x.f)
m=A.cF(m,new C.h5L(),m.$ti.k("M.E"),x.k)
t=A.a4(m).k("Y<M.E>")
s=A.C(new A.Y(m,new C.h5M(),t),t.k("M.E"))
o=s}}catch(k){}q=J.oz(o,new C.h5N(e))
if(B.a.i(e.x).length===0&&C.uB(e,d)){m=B.a.i(d.toLowerCase())
p=e.aGd(e.y===D.kX?D.kX:D.uN,m)}else p=e
if(q===-1)J.n2(o,0,p)
else J.aK(o,q,p)
w=3
return A.b(C.RS(d,o),$async$a47)
case 3:w=C.uB(p,d)?4:5
break
case 4:w=6
return A.b(C.aQZ(C.Ho(p,d),p),$async$a47)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a47,v)},
aRb(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aRb=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Hq(d),$async$aRb)
case 2:u=g
t=J.cD(u)
s=A.nA(t.eP(u,new C.fHg(e)))
t.bq(u,new C.fHh(e))
w=3
return A.b(C.RS(d,u),$async$aRb)
case 3:w=s!=null&&C.aRf(s,d)?4:5
break
case 4:w=6
return A.b(C.fqJ(e),$async$aRb)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aRb,v)},
ajb(d){var w=d.f,v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.h5W(),v),v.k("M.E"))
return w},
hfZ(d,e){var w,v=d.f,u=A.nA(new A.Y(v,new C.fGL(e),A.U(v).k("Y<1>")))
v=C.ajb(d)
w=A.U(v).k("Y<1>")
v=A.C(new A.Y(v,new C.fGM(e,u),w),w.k("M.E"))
B.d.aZ(v,new C.fGN())
return v},
ijR(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hHr(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bj(C.hfZ(d,u),new C.h5j(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
ilk(d,e){var w
if(e==null||e.length===0)return 1
w=C.hfZ(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fLC(),A.U(w).k("N<1,H>")).f1(0,B.y0)+1},
itH(d){var w,v=C.ajb(d)
if(v.length===0)return null
w=new A.Y(v,new C.fY1(),A.U(v).k("Y<1>"))
if(!w.gau(0))return w.gH(0)
return B.d.gH(v)},
ijM(d){return A.J(["id",d.a,"name",d.b,"gender",C.hCz(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
ilf(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
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
d=q.aG8(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.I)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cPT(a1,w,a3.d,a2.y,s,a0,v)},
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
p=A.cF(p,new C.fKI(),p.$ti.k("M.E"),x.k)
s=A.a4(p).k("Y<M.E>")
p=A.C(new A.Y(p,new C.fKJ(),s),s.k("M.E"))
B.d.aZ(p,new C.fKK())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Bt,v)},
aiV(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aiV=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.uN:D.kX
a7=C.Ho(b2,b3)
w=2
return A.b(C.Bt(b1),$async$aiV)
case 2:a8=b5
a9=J.cD(a8)
b0=a9.bj(a8,new C.fXX(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bEe(b1,b2),$async$aiV)
case 5:case 4:if(b0===-1){u=b2.aGd(a6,a7)
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
s.n(0,m,l.aG8(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("b8<2>")
s=A.C(new A.b8(s,k),k.k("M.E"))
k=a5?D.uN:D.kX
u=t.cPV(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.RS(b1,a8),$async$aiV)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aQZ(B.a.i(b3.toLowerCase()),u),$async$aiV)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aiV,v)},
hyt(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("N<1,a9<n,@>>"),k=A.C(new A.N(m,C.hGv(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.J(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.J(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hyu(d,e){var w=new A.V(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("N<1,a9<n,@>>")
u=A.C(new A.N(u,C.hGv(),t),t.k("ak.E"))
return A.J(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
i9C(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a7(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.amn(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hiz(),A.U(j).k("N<1,n>")).bY(0,new C.frf())
t=A.C(j,j.$ti.k("M.E"))
if(u===v)s=D.uN
else s=B.d.q(t,u)?D.OS:D.kX
return w.aGd(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.amn(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.de(q,h)
h=A.cF(h,new C.frg(),h.$ti.k("M.E"),x.P)
p=A.a4(h).k("Y<M.E>")
o=A.C(new A.Y(h,new C.frh(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b7(n,new C.fri(),x.N).bY(0,new C.frj())
t=A.C(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.uN
else s=B.d.q(t,u)?D.OS:D.kX
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
return new C.kZ(h,r,p,!m,t,o,l,j,v,s,B.cf)},
frs(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$frs=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.frw()
h=x.N
g=x.z
w=7
return A.b(A.iE(A.a([A.lK("family_trees","*",null,A.J(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bO),r.$2(A.lK("family_trees","*",A.J(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bO),"collaborator"),r.$2(A.lK("family_trees","*",null,A.J(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bO),"public")],x.cl),x.fO),$async$frs)
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
h=A.cF(new A.b8(l,h),new C.frt(a0),h.k("M.E"),x.k)
l=A.a4(h).k("Y<M.E>")
l=A.C(new A.Y(h,new C.fru(),l),l.k("M.E"))
B.d.aZ(l,new C.frv())
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
return A.i($async$frs,v)},
icb(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a7(e)
if(j.gau(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dN(e,new C.fvC(),v).bY(0,new C.fvD())
t=A.d0(u,u.$ti.k("M.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.I)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Ho(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kX){m=q.e
m=!new A.N(m,A.hiz(),A.U(m).k("N<1,n>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gR(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.ilf(l,v)
o=C.Ho(k,w)
p=v.d
s.n(0,u,o===w?k.bfm(p,D.uN):k.bfm(p,v.y))}j=s.$ti.k("b8<2>")
j=A.C(new A.b8(s,j),j.k("M.E"))
B.d.aZ(j,new C.fvE())
return j},
RS(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$RS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aA(),$async$RS)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b7(e,new C.fyy(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aD("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.X.aw(s,null)),$async$RS)
case 3:return A.h(null,v)}})
return A.i($async$RS,v)},
aQZ(d,e){return C.ihw(d,e)},
ihw(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aQZ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.mf("family_trees",A.a([C.hyt(e,d)],p),null,B.cP),$async$aQZ)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.mf("family_trees",A.a([C.hyu(e,d)],p),null,B.cP),$async$aQZ)
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
return A.i($async$aQZ,v)},
aR_(d,e){return C.ihx(d,e)},
ihx(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aR_=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("N<1,a9<n,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fDQ(d),n),m)
r=l
w=7
return A.b(A.mf("family_trees",r,null,B.cP),$async$aR_)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fDR(d),n),m)
p=k
w=8
return A.b(A.mf("family_trees",p,null,B.cP),$async$aR_)
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
return A.i($async$aR_,v)},
fqJ(d){return C.i8Q(d)},
i8Q(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fqJ=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Sh("family_trees",A.J(["id",d],x.N,x.z),null,B.cP),$async$fqJ)
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
return A.i($async$fqJ,v)},
rs:function rs(d,e,f,g,h){var _=this
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
cGL:function cGL(){},
cGK:function cGK(){},
cGI:function cGI(){},
cGJ:function cGJ(){},
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
amm:function amm(d,e){this.a=d
this.b=e},
fH5:function fH5(){},
h5S:function h5S(d){this.a=d},
fEA:function fEA(d){this.a=d},
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
bT7:function bT7(){},
bT6:function bT6(){},
bT3:function bT3(){},
bT4:function bT4(){},
bT5:function bT5(){},
fuV:function fuV(){},
fqF:function fqF(){},
fqG:function fqG(){},
fqH:function fqH(){},
fYl:function fYl(){},
fYm:function fYm(){},
fYn:function fYn(){},
fYo:function fYo(d){this.a=d},
fYp:function fYp(){},
h5Q:function h5Q(d){this.a=d},
fHz:function fHz(d){this.a=d},
fKL:function fKL(){},
fKM:function fKM(){},
fKN:function fKN(){},
fKO:function fKO(){},
fKP:function fKP(d){this.a=d},
fY8:function fY8(d){this.a=d},
h5L:function h5L(){},
h5M:function h5M(){},
h5N:function h5N(d){this.a=d},
fHg:function fHg(d){this.a=d},
fHh:function fHh(d){this.a=d},
h5W:function h5W(){},
fGL:function fGL(d){this.a=d},
fGM:function fGM(d,e){this.a=d
this.b=e},
fGN:function fGN(){},
h5j:function h5j(d){this.a=d},
fLC:function fLC(){},
fY1:function fY1(){},
fKI:function fKI(){},
fKJ:function fKJ(){},
fKK:function fKK(){},
fXX:function fXX(d){this.a=d},
frf:function frf(){},
frg:function frg(){},
frh:function frh(){},
fri:function fri(){},
frj:function frj(){},
frw:function frw(){},
frx:function frx(d){this.a=d},
frt:function frt(d){this.a=d},
fru:function fru(){},
frv:function frv(){},
fvC:function fvC(){},
fvD:function fvD(){},
fvE:function fvE(){},
fyy:function fyy(){},
fDQ:function fDQ(d){this.a=d},
fDR:function fDR(d){this.a=d},
cGM:function cGM(d,e){this.a=d
this.b=e},
cGN:function cGN(d,e){this.a=d
this.b=e},
aIZ:function aIZ(d,e,f){this.a=d
this.b=e
this.c=f},
bb3:function bb3(){this.b=this.a=0},
bb2:function bb2(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
byJ:function byJ(){},
xp(d,e){var w,v
if(d==null)return""
w=d.bT()
v=""+w.gcg()+"/"+w.gcz()+"/"+w.gcl()
if(!e)return v
return v+" "+B.a.b_(B.o.v(w.gnv()),2,"0")+":"+B.a.b_(B.o.v(w.gGN()),2,"0")},
i_7(){var w,v=$.ov(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"WS"+B.d.he(u)},
auc(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$auc=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$auc)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f5("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bO),$async$auc)
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
return A.i($async$auc,v)},
aud(d){return C.i_8(d)},
i_8(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$aud=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$aud)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hM("ngmy_worksheet_project_qr_stashes_v1",A.J(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cP,null),$async$aud)
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
return A.i($async$aud,v)},
auf(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$auf=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$auf)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.i_7()
w=4
return A.b(C.auc(),$async$auf)
case 4:r=h
q=B.a.i(e)
p=B.dW.aO(t)
J.aK(r,s,A.J(["ownerEmail",q,"projectId",f,"payload",B.cU.gcu().aO(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.aud(r),$async$auf)
case 5:u=new A.a1x("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$auf,v)},
aue(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aue=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c9(),$async$aue)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.auc(),$async$aue)
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
return A.b(C.aud(q),$async$aue)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aue,v)},
hsV(){var w=new A.V(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cS.az(999999)},
i_9(d){var w,v,u,t,s,r,q
try{w=A.ahP(d)
if(w==null)return d
v=w
if(J.Mm(v)>960||J.Ml(v)>960){s=v
r=J.Mm(v)>=J.Ml(v)?960:null
v=A.ahM(s,J.Ml(v)>J.Mm(v)?960:null,B.Qf,r)}s=v
u=A.anI(82).TY(s,B.zL)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cf(u))
return s}catch(q){t=A.ac(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
cp2(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cp2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.i_9(e)
$.coZ.n(0,s,t)
u=C.bGi(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cp2,v)},
b4N(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b4N=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d5(l,"data:image")){u=null
w=1
break}t=4
r=J.eK(l,",")?B.d.gal(J.lP(l,",")):l
q=B.cM.aO(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hsV()
w=7
return A.b(C.cp2(p,q),$async$b4N)
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
return A.i($async$b4N,v)},
cp_(d){var w=0,v=A.j(x.T),u,t,s
var $async$cp_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a_(s,"data:image")){u=s
w=1
break}w=3
return A.b(N.cp1(s),$async$cp_)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cU.gcu().aO(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cp_,v)},
a9O(d){var w=0,v=A.j(x.H),u,t
var $async$a9O=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=N.hGb(d)
if(t==null){w=1
break}$.coZ.W(0,t)
w=3
return A.b(C.bGh(t),$async$a9O)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a9O,v)},
bGi(d,e){return C.iry(d,e)},
iry(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bGi=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aPO
w=7
return A.b(n==null?$.aPO=N.heO():n,$async$bGi)
case 7:r=g
q=new Uint8Array(A.cf(e))
p=J.mk(r,"thumbs","readwrite")
B.iE.md(J.mj(p,"thumbs"),q,l)
w=8
return A.b(J.oy(p),$async$bGi)
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
return A.i($async$bGi,v)},
bGh(d){return C.irw(d)},
irw(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bGh=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aPO
w=7
return A.b(o==null?$.aPO=N.heO():o,$async$bGh)
case 7:r=f
q=J.mk(r,"thumbs","readwrite")
B.iE.Gn(J.mj(q,"thumbs"),m)
w=8
return A.b(J.oy(q),$async$bGh)
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
return A.i($async$bGh,v)}},D,At,Au,Z,Av,Aw,N
J=c[1]
A=c[0]
B=c[2]
P=c[260]
A_=c[167]
R=c[60]
A8=c[235]
L=c[216]
H=c[35]
E=c[226]
S=c[124]
A9=c[238]
T=c[107]
Aa=c[138]
Ab=c[119]
Ac=c[202]
A0=c[121]
Ad=c[234]
Ae=c[44]
Q=c[233]
A1=c[203]
Af=c[254]
Ag=c[193]
Ah=c[206]
M=c[92]
A2=c[88]
Ai=c[173]
A3=c[133]
A4=c[176]
A5=c[201]
Aj=c[257]
A6=c[259]
Ak=c[80]
G=c[258]
Al=c[137]
Am=c[262]
An=c[123]
A7=c[220]
Ao=c[34]
U=c[122]
O=c[196]
Ap=c[207]
V=c[261]
Aq=c[158]
Ar=c[129]
W=c[247]
X=c[43]
F=c[98]
As=c[33]
I=c[106]
K=c[142]
Y=c[78]
C=a.updateHolder(c[7],C)
D=c[253]
At=c[79]
Au=c[214]
Z=c[256]
Av=c[255]
Aw=c[64]
N=c[61]
C.apU.prototype={}
C.b03.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bjG(),f=h.x!=null&&h.zL(i).length===0
if(h.x!=null)w=f?B.b3:B.bD
else w=h.gUD()?B.bD:B.dY
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.l(22)
t=A.K(D.bq9,B.r,1)
s=x.p
r=A.r(i,A.x(A.a([A.r(i,D.fcJ,B.f,i,i,new A.o(B.b3.j(0.12),i,i,A.l(999),i,i,B.n),i,i,i,i,B.hh,i,i,i),B.W,D.fIU,B.aw,A.d(C.xp(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fEw,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,D.b8d,i,i,i,i,B.a11,i,i,i)
q=A.l(16)
p=A.K(B.bj,B.r,1)
o=A.K(B.b3.j(0.28),B.r,1)
n=A.hh6(h.d)
o=A.r(B.A,C.b02(A.fNX(h.e,n),30),B.f,i,i,new A.o(B.m9,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fzq,B.K,i,i)
m=A.l(14)
l=A.K(B.bj,B.r,1)
q=A.r(i,A.x(A.a([o,B.T,n,B.bG,D.fJc,B.ae,A.r(i,A.x(A.a([D.fZq,B.bG,A.d(A.Bv(h.c),i,i,i,i,i,i,D.fu0,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fh,i,i,1/0)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aS,i,p,q,i,i,B.n),i,i,i,i,O.amr,i,i,i)
p=A.l(16)
m=A.K(B.bj,B.r,1)
l=j.aTi("Original due",C.xp(h.r,!1))
n=j.aTi("Current due",C.xp(h.f,!1))
o=w.j(0.1)
k=A.l(12)
p=A.a([q,B.W,A.r(i,A.x(A.a([l,B.T,n,B.W,A.r(i,A.d(h.gaNk(),i,i,i,i,i,i,A.m(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.Co,i,i,1/0),B.W,j.ckK(),B.T,j.c7v(g,f)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bk,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.l(14)
n=A.K(B.bj,B.r,1)
B.d.u(p,A.a([B.W,A.r(i,A.x(A.a([D.fK9,B.aw,A.d(q,i,i,i,i,i,i,D.fyD,i,i,i)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aS,i,n,o,i,i,B.n),i,i,i,i,B.bk,i,i,1/0)],s))}if(h.gaHU()){q=A.l(14)
o=A.K(B.cx,B.r,1.6)
B.d.u(p,A.a([B.W,A.r(i,A.x(A.a([D.h_K,B.T,A.bx(A.l(12),A.e9(new A.a5(1/0,88,A.b2(i,i,i,new A.Xi(h.ax,B.a_,D.fhu,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.Cq,i,i,i)],s))}p.push(B.aC)
p.push(D.fSz)
return A.r(i,A.x(A.a([r,new A.D(B.a0R,A.x(p,B.al,i,B.e,B.i,0,B.p),i)],s),B.al,i,B.e,B.O,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aTi(d,e){var w=null
return A.A(A.a([A.E(A.d(d,w,w,w,w,w,w,D.abY,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fv5,w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
ckK(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.aax(B.dY,u,"Not paid yet")
w=t.zL(null).length
v=w===0?B.b3:B.bD
return this.aax(v,u,C.xp(t.x,!0))},
c7v(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.aax(B.b3,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.aax(B.b3,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.abY,u,u,u)
v=A.U(d).k("N<1,h5>")
v=A.C(new A.N(d,new C.c8o(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bX(B.bH,v,B.bt,u,6,6)],x.p),B.E,u,B.e,B.i,0,B.p)},
aax(d,e,f){var w=null
return A.A(A.a([A.E(A.d(e,w,w,w,w,w,w,D.abY,w,w,w),1),new A.df(1,B.cj,A.d(f,w,w,w,w,w,w,A.m(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.e5,w,w),w)],x.p),B.E,w,B.e,B.i,0,w,w)}}
C.bdg.prototype={
a5(d,e){new A.Xi(this.b,B.a_,e,!0,3.5,null).a5(d,e)},
aE(d){return d.b!==this.b}}
C.aq6.prototype={
S(){return new C.aER(A.a([],x.bp))},
ge3(){return this.c}}
C.aER.prototype={
Y(){this.a4()
this.Jl()},
Jl(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Jl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3m(t.a.c),$async$Jl)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dQM(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Jl,v)},
aVg(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aS,s=A.m(v,v,u?B.bv:B.bh,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.l(10)
u=(this.a.d.a?B.bv:B.bh).j(0.22)
w=A.l(10)
return A.bA(v,new A.b6(4,r,new A.ay(u,1,B.r,-1)),v,B.bk,v,v,v,v,!0,new A.b6(4,w,new A.ay((this.a.d.a?B.bv:B.bh).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.l(10),D.b5R),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aVf(d){return this.aVg(d,null)},
Q5(d){return this.con(d)},
con(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
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
b3o(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aS,o=A.l(10),n=A.K((q?B.bv:B.bh).j(0.18),B.r,1)
if(d)q=B.cJ
else q=s.a.d.a?B.bv:B.bh
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.m(r,r,s.a.d.a?B.aS:B.as,r,r,r,r,r,r,r,r,12.5,r,r,B.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cJ
else u=s.a.d.a?B.bv:B.bh
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.m(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.i,0,B.p),1)
v=A.fs(r,r,r,r,r,r,r,r,r,r,r,B.cJ,r,r,r,r,r,r,r,r,r,r,r,r,r,B.ch)
q=A.a([q,B.af,u,A.bP(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aI(r,r,r,r,A.X(B.cC,s.a.d.a?B.bv:B.bh,r,r,r,18),r,r,r,g,r,r,r,r,r,B.ch))
return A.r(r,A.A(q,B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jJ,D.bD9,r,r,r)},
DH(d){return this.bDT(d)},
bDS(){return this.DH(null)},
bDT(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
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
j=A.br(a4,!0,x.cT)
i=a3?null:A.hh6(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.xc?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hN(B.w.j(0.55),!0,"Dismiss",a4,new C.dQv(),new C.dQw(a2,t,a5,r,new C.dQx(a2,t),o,n,j),B.eI,!0,x.y),$async$DH)
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
break}if(f.length===0||e<=0){t.c.L(x.q).f.T(D.fo2)
w=1
break}a0=a2.d
if(a0==null){t.c.L(x.q).f.T(D.fmH)
w=1
break}a1=A.fNX(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.xc?"male":"female"
w=7
return A.b(A.aja(a3,A.hpy(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$DH)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.xc?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.u(a3,j)
a3=a2.a
a3=A.c_(a3.gcl(),a3.gcg(),a3.gcz(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c_(a4.gcl(),a4.gcg(),a4.gcz(),0,0,0,0,0)))a5.cSf(a2.a)
w=8
return A.b(A.aja(t.a.c,a5),$async$DH)
case 8:case 5:w=9
return A.b(t.Jl(),$async$DH)
case 9:case 1:return A.h(u,v)}})
return A.i($async$DH,v)},
aVW(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cJ.j(0.14)
else w=this.a.d.a?B.a_:B.aS
v=A.l(12)
u=A.l(12)
t=A.l(12)
if(g)s=B.cJ
else s=(this.a.d.a?B.bv:B.bh).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.b02(d,18)
if(g)q=B.cJ
else q=this.a.d.a?B.aS:B.as
return A.aH(!1,B.a3,!0,v,A.aP(!1,u,!0,A.r(p,A.A(A.a([r,B.bn,A.d(e,p,p,p,p,p,p,A.m(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.ba,B.i,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bV,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.aj)},
SV(d){return this.cGd(d)},
cGd(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$SV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hN(B.w.j(0.55),!0,"Dismiss",s,new C.dQP(),new C.dQQ(t,d),B.h7,!0,x.y),$async$SV)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.aja(t.a.c,d),$async$SV)
case 7:w=8
return A.b(t.Jl(),$async$SV)
case 8:case 1:return A.h(u,v)}})
return A.i($async$SV,v)},
Q4(d,e){return this.bOO(0,e)},
bOO(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Q4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lq(s,"Cancel","Delete",e.b+" \xb7 "+A.Bv(e.c)+" will be removed from this device.","Delete this debt?"),$async$Q4)
case 3:if(!g){w=1
break}w=4
return A.b(C.fHn(t.a.c,e.a),$async$Q4)
case 4:w=5
return A.b(t.Jl(),$async$Q4)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Q4,v)},
agk(d){return this.ci9(d)},
ci9(d){var w=0,v=A.j(x.H),u=this,t
var $async$agk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bU(B.L,null,new C.dQJ(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$agk)
case 2:return A.h(null,v)}})
return A.i($async$agk,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.evy
w=J.dG(m.d,new C.dQR())
v=A.C(w,w.$ti.k("M.E"))
w=J.dG(m.d,new C.dQS())
u=A.C(w,w.$ti.k("M.E"))
t=B.d.cF(v,0,new C.dQT())
w=A.l(18)
s=m.a.d.a
r=s?D.cDj:D.aDr
q=A.K(s?B.cJ.j(0.35):B.cJ.j(0.18),B.r,1)
s=A.r(l,D.c40,B.f,l,l,new A.o(B.cJ.j(m.a.d.a?0.28:0.14),l,l,A.l(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.au,A.E(A.d("Cashier",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.aS:B.as,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aH(!1,B.a3,!0,A.l(12),A.aP(!1,A.l(12),!0,D.euU,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dQU(m),l,l,l,l,l,l,l),B.f,B.cJ,0,l,l,l,l,l,B.aj)],p),B.l,l,B.e,B.i,0,l,l)
o=A.E(m.cCj("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Bv(t)
r=A.a([A.r(l,A.x(A.a([s,B.ae,A.A(A.a([o,B.af,A.E(m.b9y(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.i,0,l,l)],p),B.E,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a8(B.aA,B.aD,B.x,r,l,l),B.n),l,l,l,l,B.amo,l,l,l),B.aC],p)
if(J.ct(m.d)){w=m.a.d.a
s=w?B.eg:B.c
q=A.l(18)
o=A.K((w?B.bv:B.bh).j(0.12),B.r,1)
n=A.r(l,D.bZD,B.f,l,l,new A.o(B.cJ.j(0.12),l,l,A.l(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.aS:B.as,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.r(l,A.x(A.a([n,B.ae,w,B.aw,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.bv:B.bh,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bFP,l,l,1/0))}else{w=m.gcnE()
s=A.C(new A.N(v,w,A.U(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bHv,A.d("Paid",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.bv:B.bh,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.u(q,new A.N(u,w,A.U(u).k("N<1,v>")))
B.d.u(s,q)}B.d.u(r,s)}return A.x(r,B.al,l,B.e,B.i,0,B.p)},
b9y(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.l(14),r=A.K((v.a.d.a?B.bv:B.bh).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.m(u,u,v.a.d.a?B.bv:B.bh,u,u,u,u,u,u,u,u,11,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cJ
else w=v.a.d.a?B.aS:B.as
return A.r(u,A.x(A.a([q,B.bG,A.d(f,u,1,B.a2,u,u,u,A.m(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.i,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ez,u,u,u)},
cCj(d,e){return this.b9y(!1,d,e)},
cnF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zL(j).length,h=d.biW()
if(d.x!=null){w=d.zL(j).length
v=w===0?B.cJ:B.bD}else if(d.gUD())v=B.bD
else{if(h)w=B.cJ
else w=k.a.d.a?B.bv:B.bh
v=w}if(d.x!=null){w=d.zL(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xp(u,!1)}else{u.toString
t="Paid "+C.xp(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xp(w,!1)+" \xb7 "+i+" missed":"Due "+C.xp(w,!1)}w=k.a.d.a?B.eg:B.c
u=A.l(18)
if(d.gUD()&&d.x==null)s=B.bD.j(0.35)
else s=(k.a.d.a?B.bv:B.bh).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ab(0,B.G,B.w.j(0.04),B.cL,12)],x.V)
q=A.l(18)
p=k.a.d.a?B.br:B.m9
o=A.K(d.gUD()&&d.x==null?B.bD.j(0.45):B.cJ.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hh6(d.d)
o=A.r(B.A,A.d3(C.b02(A.fNX(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aS:B.as
m=x.p
n=A.a([new A.df(1,B.cj,A.d(p,j,1,B.a2,j,j,j,A.m(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaHU())B.d.u(n,A.a([B.e8,A.X(B.Pj,B.cJ.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.l,j,B.e,B.i,0,j,j),B.cR,A.d(t,j,1,B.a2,j,j,j,A.m(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.U,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.i,0,B.p),1)
n=A.Bv(d.c)
l=k.a.d.a?B.aS:B.as
n=A.d(n,j,j,j,j,j,j,A.m(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.r(j,A.aH(!1,B.a3,!0,j,A.aP(!1,q,!0,new A.D(Af.amc,A.A(A.a([o,B.bd,p,B.af,A.x(A.a([n,B.bG,A.X(B.eJ,(k.a.d.a?B.bv:B.bh).j(0.5),j,j,j,18)],m),B.dQ,j,B.e,B.i,0,B.p)],m),B.l,j,B.e,B.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dQL(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.aj),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.da,j,j,j,j)}}
C.uW.prototype={}
C.ama.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bp
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
n.push(A.az(a0,A.r(a0,A.X(B.cC,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a7:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iR,A.d(k,a0,a0,a0,a0,a0,a0,A.m(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.m(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.azy,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.H7,A.d(k,a0,a0,a0,a0,a0,a0,A.m(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.es(m,A.A(l,B.l,a0,B.e,B.O,0,a0,a0),B.f,B.e2)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bCk,A.d(v,a0,1,B.a2,a0,a0,a0,A.m(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cK:B.bs,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fE,A.x(a2,u,a0,B.e,B.O,0,B.p),a0),1))
n.push(D.fii)
a2=A.a([A.A(n,B.l,a0,B.e,B.i,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.u(a2,A.a([new A.D(B.ww,A.r(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a8(B.a7,B.aa,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lO,A.x(a2,B.l,a0,B.e,B.O,0,B.p),a0)
if(a1.z){a2=A.l(t?9:19)
e=A.r(a0,e,B.f,a0,a0,new A.o(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hB,a0,a0,a0,a0)}return A.r(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a8(B.aA,B.aD,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bDE,a0,a0,a0,a0)}}
C.aWM.prototype={
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
o=A.a([A.A(l,B.l,q,B.e,B.i,0,q,q),B.cR,n],m)
if(p.z)o.push(new A.D(B.uD,n,q))
return new A.D(B.da,A.x(o,B.l,q,B.e,B.O,0,B.p),q)}}
C.U8.prototype={
S(){return new C.bgU()}}
C.bgU.prototype={
gc2j(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aF(d,n,x.w).w,l=x.p,k=A.a([D.evt,D.evz],l)
for(w=0;w<8;++w){v=D.a5j[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.HT:B.zv
q=t===s
r=A.X(r,q?B.ey:B.bW,n,n,n,17)
q=q?B.c:B.ab
r=A.a([r,B.bn,A.d(v.b,n,n,n,n,n,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.af,new A.bz(1,B.bb,A.d(v.c,n,1,B.a2,n,n,n,B.AW,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aN(24,24)
p=new A.ay(B.ey,2,B.r,-1)
s=new A.o(n,n,new A.bG(p,p,p,p),new A.be(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.az(n,new A.D(B.eL,A.x(A.a([new A.D(B.n3,new A.c8(B.aL,B.e,B.i,B.l,n,B.p,n,0,r,n),n),A.r(n,new A.du(!0,new C.ama(v,q.d,q.e,new C.dgp(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.i,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dgq(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bE0,A.bJ(D.h5f,n,new C.dgr(o,d),A.bo(B.b8,n,n,n,n,B.p2,n,n,new A.b9(A.l(16),B.a1),n,n,n)),n))
return A.bm(!0,new A.cO(new A.aY(0,1/0,0,m.a.b*0.9),A.cm(k,n,n,D.bIo,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nw.prototype={
aj(){var w=this
return A.J(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bfy(d,e,f){return new C.nw(this.a,e,d,f)}}
C.Iz.prototype={
x0(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Iz(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aG1(d){var w=null
return this.x0(w,w,w,w,w,d,w,w,w,w,w,w)},
cNS(d){var w=null
return this.x0(w,w,w,w,d,w,w,w,w,w,w,w)},
bfw(d,e,f){var w=null
return this.x0(d,w,w,w,w,w,w,w,e,w,f,w)},
cOw(d){var w=null
return this.x0(w,w,w,w,w,w,d,w,w,w,w,w)},
cOF(d){var w=null
return this.x0(w,w,w,w,w,w,w,w,w,d,w,w)},
cNQ(d){var w=null
return this.x0(w,w,w,d,w,w,w,w,w,w,w,w)},
cOH(d){var w=null
return this.x0(w,w,w,w,w,w,w,w,w,w,w,d)},
cNN(d){var w=null
return this.x0(w,w,d,w,w,w,w,w,w,w,w,w)},
cNI(d){var w=null
return this.x0(w,d,w,w,w,w,w,w,w,w,w,w)},
Gf(d){var w=null
return this.x0(w,w,w,w,w,w,w,d,w,w,w,w)},
cOP(d,e,f,g,h,i,j,k,l,m,n){return this.x0(d,e,f,g,null,h,i,j,k,l,m,n)},
aj(){var w=this
return A.J(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cLm(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bRP(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.j.M(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.DX.gev(D.DX))
s=i==null?o:B.j.D(i,18,36)
r=l.$2("position",D.a72)
q=l.$2("frame",D.a6m)
l=l.$2("texture",D.a6i)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cOP(p,u,t,q,r,A.rg(d.h(0,"ribbon"))?A.H0(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a_J.prototype={
S(){return new C.aBP(A.a([],x.I),D.OR)},
ge3(){return this.c}}
C.aBP.prototype={
Y(){var w,v=this
v.a4()
v.f=A.Al(0,1)
w=$.ax()
v.z=new A.au(B.ax,w)
v.Q=new A.au(B.ax,w)
v.lh()
w=v.a
C.bEC(w.c,w.d).bG(new C.dh5(v),x.fL)},
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
break}t.m(new C.dgU(t,r))
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
cgy(d){this.m(new C.dgR(this,d))
this.axJ()},
O0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$O0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nw(B.o.v(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aSR(r.c,r.d,s),$async$O0)
case 3:w=4
return A.b(t.lh(),$async$O0)
case 4:if(t.c==null||J.ct(t.d)){w=1
break}q=J.oz(t.d,new C.dgs(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.dgt(t,p))
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
return A.b(C.aSR(o.c,o.d,new C.nw(s,r,q,new A.V(p,0,!1))),$async$Br)
case 3:w=4
return A.b(t.lh(),$async$Br)
case 4:if(t.c==null){w=1
break}t.m(new C.dgV(t))
case 1:return A.h(u,v)}})
return A.i($async$Br,v)},
OH(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaui()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dgB(r),s,null,!0,!0,x.y),$async$OH)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bEn(s.c,s.d,r.a),$async$OH)
case 4:t.m(new C.dgC(t))
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
return A.b(C.hH_(s,r.x,r.r),$async$z7)
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
a1z(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Br(),$async$a1z)
case 5:case 4:if(t.c==null){w=1
break}s=t.gz5(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dL(D.zW,new C.dgS(t),new C.dgT())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.mS("Our Family",o,"",""))
for(o=J.aT(t.d);o.C();){n=o.gR(o)
p.push(new H.mS(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hiP(o,new H.rR(s,r,"",p,new H.vb(q.d,null,null,null,null,"","","")),null),$async$a1z)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a1z,v)},
Op(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Op=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Br(),$async$Op)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bU(D.ah8,null,new C.dgx(t),s,!0,!0,!0,I.aaa,!1,!1,x.N),$async$Op)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cNS(r)
t.m(new C.dgy(t,q))
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
return A.b(A.bU(D.ah8,null,new C.dgD(t),r,!0,!0,!0,I.aaa,!1,!1,x.e),$async$XU)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dgE(t,s))
r=t.a
w=4
return A.b(C.SL(r.c,r.d,s),$async$XU)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.BL(0,B.dK,B.n0)
case 1:return A.h(u,v)}})
return A.i($async$XU,v)},
bUu(d){var w=d.bT(),v=B.a.b_(B.o.v(w.gcg()),2,"0"),u=B.a.b_(B.o.v(w.gcz()),2,"0")
return""+w.gcl()+"-"+v+"-"+u},
gz5(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c1x()
if(r.e)w=D.afQ
else if(J.ct(r.d)){w=r.y
v=r.gz5(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.ftm,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.D(W.anu,new C.a_0(w,v,0,q),q),q),B.bz,t,B.am,A.d(u,q,q,q,q,q,q,A.m(q,q,D.kP.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bz],s)
if(B.a.i(r.a.x).length!==0)w.push(A.az(q,A.r(q,D.fcu,B.f,q,q,new A.o(q,q,q,A.l(18),A.a([new A.ab(0,B.G,B.dP.j(0.45),B.J,18)],x.V),E.x4,B.n),q,q,q,q,B.Ou,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcKn(),q,q,q,q,q,q,!1,B.a4))
w.push(B.W)
w.push(A.hs(D.bVJ,D.h4I,r.gaP_(),q))
B.d.u(u,w)}w=A.as(A.cb(A.x(u,B.l,q,B.e,B.O,0,B.p),B.t,q,B.y,q,B.eA,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.m(q,q,D.kP.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.U,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.e_:B.Bx
u=A.x(A.a([new A.D(D.bF5,w,q),A.E(A.JY(v,new C.dh3(r),J.ad(r.d)+1,q,r.gcgx(),u,B.aL),1),r.bGN()],x.p),B.l,q,B.e,B.i,0,B.p)
w=u}v=x.p
return A.c4(q,D.ZA,new A.an(B.a0,q,B.b2,B.t,A.a([D.aR0,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c1x(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cJ(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.KW(B.ed,"AI",h.gbEF(),!0))
if(h.a.f)f.push(new C.KW(B.mk,"Cover",h.gbPn(),!1))
if(h.a.f)f.push(new C.KW(B.wX,"Header",h.gbKl(),!1))
if(J.cJ(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.KW(B.v4,"Print",h.gcpH(),!1))
if(h.a.f&&J.cJ(h.d)&&h.r>=0){v=h.w
u=v?B.hO:B.j9
t=v?"Save":"Edit"
f.push(new C.KW(u,t,v?h.gcvZ():new C.dgO(h),!1))}if(h.a.f)f.push(new C.KW(B.i2,"Add page",h.gaP_(),!1))
v=C.hCy(h.y.Q)
u=h.gz5(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.I)(f),++m){l=f[m]
if(l.d)k=D.dK7
else{k=new A.aN(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.kr.j(0.5),1,B.r,-1)
j=A.r(g,A.X(l.a,D.kP,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bG(i,i,i,i),new A.be(k,k,k,k),g,new A.a8(B.a7,B.aa,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kP.j(0.85)
p.push(new A.bz(1,B.bb,A.az(B.c3,A.x(A.a([k,B.bG,A.d(l.b,g,1,g,g,g,g,new A.F(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.O,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.ama(v,u,t+" \xb7 "+s+" "+r,new C.dgP(h),A.A(p,B.l,g,B.e,B.i,0,g,g),g)},
Aq(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Aq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Br(),$async$Aq)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aT(t.d);r.C();){q=r.gR(r)
s.push(q.b+" "+q.c)}p=H.a3B(B.d.aN(s," "))
s=t.c
s.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.dgu(t,p),s,null,!0,!0,x.N),$async$Aq)
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
return A.b(t.cGR(o==="sw"?"Swahili (Kiswahili)":"English"),$async$Aq)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$Aq,v)},
ZS(d,e,f,g,h){var w=null,v=A.l(16),u=B.c.j(0.07),t=A.l(16),s=A.K(E.kr.j(0.3),B.r,1),r=x.p
return new A.D(B.cy,A.aP(!1,v,!0,A.r(w,A.A(A.a([A.r(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.x4,B.a6),w,42,w,w,w,w,w,42),B.bd,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A2.KS,w,w,w),A.d(g,w,w,w,w,w,w,B.AX,w,w,w)],r),B.E,w,B.e,B.i,0,B.p),1)],r),B.l,w,B.e,B.i,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dgQ(d,h),w,w,w,w,w,w,w),w)},
Eh(){return this.bTY()},
bTY(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Eh=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dgH(r),a7,null,!0,!0,x.ei),$async$Eh)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eC("Working on it\u2026",$.ax())
a6.a=!0
a7=r.c
a7.toString
A.cg(null,null,!1,null,new C.dgI(o),a7,null,!0,!0,x.H).fv(new C.dgJ(a6))
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
return A.b(C.aij(a0,a7,new C.dgK(o),d,l,e,j),$async$Eh)
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
J.aTj(l,0)
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
a7=j.bfy(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
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
a5=l.cLm(j,12,a7)
l=r.a
w=15
return A.b(C.SL(l.c,l.d,a5),$async$Eh)
case 15:if(r.c!=null)r.m(new C.dgL(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.BL(0,B.dK,B.n0)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.L(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.T(A.b3(a3?A.cAx("Undo",new C.dgM(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.ej,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Eh,v)},
FT(d,e){return this.cGS(d,e)},
cGR(d){return this.FT(d,!1)},
cGS(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$FT=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eC("Starting\u2026",$.ax())
f.a=!0
k=r.c
k.toString
A.cg(null,null,!1,null,new C.dgX(a0),k,null,!0,!0,x.H).fv(new C.dgY(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.I)(k),++i){n=k[i]
J.c5(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a3P(m,new C.dgZ(a0)),$async$FT)
case 10:w=8
break
case 9:w=11
return A.b(C.bG7(new C.dh_(a0),m,a2),$async$FT)
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
J.aTj(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.L(x.q).f
k=q
o.T(A.b3(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bfy(J.t(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
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
o.T(A.b3(A.cAx("Undo",new C.dh0(r,d),null),null,null,null,null,B.t,null,k,null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$FT,v)},
bGN(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dgv(v):u
r=A.aI(u,u,u,u,A.X(D.bRn,s?D.kP:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cJ(v.d)&&!v.w&&v.r>=0)s=A.hs(A.X(B.wL,B.Gx,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.m(u,u,B.Gx,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbOY(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.m(u,u,D.kP.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.as(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dgw(v):u
return A.bm(!0,new A.D(D.bEV,A.A(A.a([r,s,A.aI(u,u,u,u,A.X(B.eJ,t<J.ad(v.d)?D.kP:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.i,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a_N.prototype={
S(){return new C.bhi(new A.au(B.ax,$.ax()))}}
C.bhi.prototype={
ga2H(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.U$=$.ax()
w.P$=0
this.a3()},
gbSz(){switch(this.ga2H()){case"cover":var w=D.da5
break
case"book":w=D.d5n
break
default:w=D.dBK
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.l(26),n=E.kr.j(0.5),m=x.p,l=A.A(A.a([D.dK8,B.au,D.bKE,A.aI(p,p,p,p,B.lp,p,p,p,new C.diS(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.i,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jy(p,p,p,A.d("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.diT(q),q.ga2H()==="page",p,p,p,p))
if(q.a.d)k.push(A.jy(p,p,p,D.h_g,p,new C.diU(q),q.ga2H()==="book",p,p,p,p))
k.push(A.jy(p,p,p,D.fMV,p,new C.diV(q),q.ga2H()==="cover",p,p,p,p))
k=A.bX(B.bH,k,B.bt,p,6,8)
j=B.c.j(0.07)
j=A.aM(p,B.Z,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bA(p,new A.b6(4,A.l(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kk,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a5,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbSz(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.d(s,p,p,p,p,p,p,B.KP,p,p,p)
w.push(A.n3(p,B.c.j(0.08),r,B.hs,new C.diW(q,s),p,p,p,p))}return A.eG(p,E.C3,A.cb(A.x(A.a([l,B.W,D.h2A,B.am,k,B.ae,j,B.T,A.bX(B.bH,w,B.bt,p,6,6),B.aC,A.di(D.bVG,p,D.h3l,new C.diX(q,d),A.bo(B.b8,p,p,p,p,B.p2,p,p,new A.b9(A.l(16),B.a1),p,p,p)),B.aw,D.fYu],m),B.E,p,B.e,B.O,0,B.p),B.t,p,B.y,p,B.fv,p,p,B.ah),p,p,p,B.Or,p,B.d8,p,new A.b9(o,new A.ay(n,1.4,B.r,-1)),p)}}
C.a_L.prototype={
S(){return new C.aBS(A.a([],x.gA))},
ge3(){return this.c}}
C.ag5.prototype={}
C.aBS.prototype={
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
return A.b(C.bEC(r.c,q),$async$lh)
case 6:j=e
i=J
w=7
return A.b(C.LQ(t.a.c,q),$async$lh)
case 7:m.push(new l.ag5(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.dhk(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lh,v)},
baP(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
QS(d,e){return this.ci6(0,e)},
ci6(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$QS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).ce(A.ec(new C.dhj(u,e),!0,null,x.y)),$async$QS)
case 2:t=g
w=3
return A.b(u.lh(),$async$QS)
case 3:if(t===!0&&u.c!=null)u.c.L(x.q).f.T(D.aUV)
return A.h(null,v)}})
return A.i($async$QS,v)},
FV(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$FV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.L(x.q).f.T(D.aUR)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ahD(s.c,s.d),$async$FV)
case 5:q=e
w=6
return A.b(t.lh(),$async$FV)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.QS(0,B.d.fc(t.d,new C.dho(q))),$async$FV)
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
case 11:if(m&&t.c!=null)t.c.L(x.q).f.T(D.aUV)
case 1:return A.h(u,v)}})
return A.i($async$FV,v)},
Qj(d,e){return this.ctI(0,e)},
ctI(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dhn(t,e),s,null,!0,!0,x.y),$async$Qj)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a41(s.c,s.d,e.a),$async$Qj)
case 4:w=5
return A.b(t.lh(),$async$Qj)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qj,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)k.push(o.bGQ(w[u]))
if(m){t=6-o.d.length
w=A.l(18)
v=B.c.j(0.05)
s=A.K(E.kr.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.az(n,new A.fH(0.7142857142857143,A.r(n,A.x(A.a([D.dK9,B.ae,D.euw,B.aw,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.m(n,n,D.kP.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.ba,B.i,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcKj(),n,n,n,n,n,n,!1,B.a4))}w=A.l(22)
v=A.K(E.kr.j(0.85),B.r,1.6)
s=A.az(n,A.r(n,D.c2K,B.f,n,n,new A.o(B.w.j(0.3),n,A.K(E.kr.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dhp(d),n,n,n,n,n,n,!1,B.a4)
r=A.l(14)
q=B.w.j(0.3)
p=A.K(E.kr.j(0.5),B.r,1)
w=A.r(n,A.A(A.a([s,B.bd,D.bL2,A.r(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.fsm,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.hh,n,n,n)],l),B.l,n,B.e,B.i,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.c8M,B.n),n,n,n,Av.Of,D.bCP,n,n,n)
if(o.e)k=D.afQ
else k=k.length===0?D.bdz:A.cr(new C.dhq(k))
return A.c4(n,D.ZA,new A.an(B.a0,n,B.b2,B.t,A.a([D.aR0,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bGQ(d){var w,v,u=this,t=null,s=u.baP(d),r=d.c,q=x.p,p=A.a([A.bS(0,A.es(B.A,new A.a5(300,420,new C.a_0(d.b,s,r,t),t),B.f,B.dD),0,0,0)],q)
if(u.a.e)p.push(A.ap(t,A.az(t,A.r(t,D.c21,B.f,t,t,new A.o(B.w.j(0.55),t,A.K(B.aT,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dhh(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.frZ,t,t,t)
v=r===1?"page":"pages"
return A.az(t,A.x(A.a([new A.fH(0.7142857142857143,new A.an(B.a0,t,B.ad,B.t,p,t),t),B.T,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.m(t,t,D.kP.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.i,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dhi(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.KW.prototype={}
C.a_0.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dL(D.zW,new C.cPK(m),new C.cPL()),j=m.c,i=D.DX.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mr:B.ba
v=new C.cPM(h)
i=A.a([new A.ab(0,B.G,B.w.j(0.6),D.erd,28)],x.V)
u=x.p
t=A.a([A.bS(0,A.b2(l,l,l,new C.bev(j.x,h,l),B.az),0,0,0),A.ap(0,A.r(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.a7,B.aa,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aN(3,3)
t.push(new A.cK(8,40+s*46,l,l,l,l,A.r(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.be(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.u(t,A.a([v.$4(D.anv,8,0.85,2.2),v.$4(D.bHO,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.anv,8,0.85,2.4))
else if(r==="corners")t.push(A.bS(0,new A.D(D.bHK,A.b2(l,l,l,new C.bem(h,l),B.az),l),0,0,0))
r=A.X(D.aCo[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.m(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.azy,l,l),B.K,l,l)
p=A.r(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aC,q,B.ae,p,B.ae,A.d(o,l,l,l,l,l,l,A.m(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cK,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.u(o,A.a([B.aO,A.d(r,l,2,B.a2,l,l,l,A.m(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bS(0,new A.D(D.bIf,A.x(o,B.l,l,w,B.i,0,B.p),l),0,0,0))
if(j.z)t.push(A.ap(l,A.b2(l,l,l,new C.aIT(l),D.fhn),l,l,l,46,0,l))
return A.r(l,A.bx(D.aet,new A.an(B.a0,l,B.ad,B.t,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.aet,i,new A.a8(B.aA,B.aD,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bev.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e2()
g.cY(11)
switch(this.b){case"plain":return
case"linen":$.S()
w=A.L()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=0;t<v;t+=4)d.ah(new A.p(0,t),new A.p(u,t),w)
$.S()
s=A.L()
s.r=B.c.j(0.05).gp(0)
s.c=1
for(r=0;r<u;r+=4)d.ah(new A.p(r,0),new A.p(r,v),s)
break
case"stars":for(v=e.a,u=e.b,q=this.c,p=0;p<70;++p){o=g.ai()
n=g.ai()
m=g.ai()
$.S()
l=new A.ao(B.P,B.M,B.R,B.S,B.Q)
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
m=new A.ao(B.P,B.M,B.R,B.S,B.Q)
m.r=o.j((p&1)===0?0.09:0.03).gp(0)
d.af(j,m)}break
default:$.S()
w=A.L()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,p=0;p<260;++p)d.N(new A.p(g.ai()*v,g.ai()*u),0.8+g.ai()*1.8,w)
$.S()
h=A.L()
h.r=B.c.j(0.035).gp(0)
for(p=0;p<120;++p)d.N(new A.p(g.ai()*v,g.ai()*u),0.6+g.ai()*1.2,h)}},
aE(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bem.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.S(),j=A.L(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.a9
j.c=2.4
j.d=B.bw
for(w=e.a,v=e.b,v=[D.f6N,new A.ce([w,0,-1,1]),new A.ce([0,v,1,-1]),new A.ce([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
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
s=new A.ao(B.P,B.M,B.R,B.S,B.Q)
s.r=i.j(0.9).gp(0)
d.N(new A.p(r+p*9,q+o*9),3,s)}},
aE(d){return!d.b.A(0,this.b)}}
C.uX.prototype={}
C.a_j.prototype={
S(){return new C.bet()}}
C.bet.prototype={
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
r.push(A.jy(s,s,s,A.d(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.d8h(this,f,u),e===u,s,s,s,s))}return A.bX(B.bH,r,B.bt,s,6,8)},
azd(d){var w=null,v=B.c.j(0.07)
return A.bA(w,new A.b6(4,A.l(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lX,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gor(),a0=f.gz5(0),a1=a0.a.a,a2=f.gaDd(),a3=a2.a.a,a4=f.gasQ(),a5=d.bfw(a4.a.a,a3,a1)
a1=x.w
a3=A.aF(a6,e,a1).w
a1=A.aF(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.as(new A.a5(190,260,A.es(B.A,new A.a5(270,370,new C.a_0(a5,d,f.a.e,e),e),B.f,B.dD),e),e,e,e)
a0=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.azd("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d8G(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a5,e,B.ao,e,e,e,e)
a2=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.azd("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d8H(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a5,e,B.ao,e,e,e,e)
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
p=A.r(e,e,B.f,e,e,new A.o(e,e,new A.bG(o,o,o,o),e,e,new A.a8(B.aA,B.aD,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aF
v.push(A.az(e,A.x(A.a([p,B.cR,A.d(t.b,e,e,e,e,e,e,new A.F(!0,q,e,e,e,e,10.5,B.U,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.O,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8I(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bX(B.bH,v,B.bt,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b8.j(0.35):B.c.j(0.07)
m=new A.aN(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.ey:B.L,2,B.r,-1)
q.push(A.az(e,A.r(e,A.X(D.aCo[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bG(o,o,o,o),new A.be(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8J(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bX(B.bH,q,B.bt,e,8,8)
a4=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.azd("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d8K(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a5,e,B.ao,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,M.vO,e,e,e)
m=A.a([],w)
for(l=D.DX.gdP(D.DX),l=l.gae(l);l.C();){k=l.gR(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.ey:B.aT
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.r(e,e,B.f,e,e,new A.o(j,e,new A.bG(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aF
m.push(A.az(e,A.x(A.a([j,B.bG,A.d(i,e,e,e,e,e,e,new A.F(!0,h,e,e,e,e,10,B.U,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.O,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8L(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bX(B.bH,m,B.bt,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,M.vO,e,e,e)
k=f.gor()
return new A.D(new A.R(0,0,0,a3.f.d),A.bm(!0,new A.cO(new A.aY(0,1/0,0,a1.a.b*0.92),A.cm(A.a([D.fXV,B.ae,d,B.aO,a0,B.W,a2,B.aC,D.h37,B.T,v,B.aC,D.fY3,B.T,q,B.aC,a4,B.aC,p,B.T,m,B.aC,l,A.l0(e,9,""+B.j.V(f.gor().f),36,18,new C.d8M(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,M.vO,e,e,e),B.am,f.att(D.a72,f.gor().r,new C.d8N(f),D.dEY),B.ae,A.d("BORDER",e,e,e,e,e,e,M.vO,e,e,e),B.am,f.att(D.a6m,f.gor().w,new C.d8O(f),D.dF3),B.ae,A.d("COVER MATERIAL",e,e,e,e,e,e,M.vO,e,e,e),B.am,f.att(D.a6i,f.gor().x,new C.d8Q(f),D.dGx),B.am,A.iU(e,B.b8,e,B.ag,e,new C.d8R(f),e,e,e,D.fS4,f.gor().z),B.bz,A.bJ(D.fWB,e,new C.d8S(f,a6),A.bo(B.b8,e,e,e,e,B.p2,e,e,new A.b9(A.l(16),B.a1),e,e,e))],w),e,e,Z.an0,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aIT.prototype={
a5(d,e){var w,v,u,t=new A.aG($.S().r,B.ai,null,null,A.a([],x.v))
t.E(new A.aZ(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.bu())
u=A.L()
u.sav(D.c9s.aK(0,new A.a1(0,0,0+w,0+v)))
d.af(t,u)},
aE(d){return!1}}
C.bjP.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.S()
w=A.L()
w.sav(D.c8t.aK(0,new A.a1(0,0,a2,a3)))
a4.ar(new A.a1(0,0,a2,a3),w)
v=B.j.cC(a1/112)
u=new A.e2()
u.cY(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.da4[u.az(9)]
j=u.az(14)
J.bp(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a1(n,j,n+m,j+l)
h=A.bn(i,B.hE)
g=new A.ao(B.P,B.M,B.R,B.S,B.Q)
f=A.ar(k,B.c,0.12)
f.toString
e=A.ar(k,B.w,0.45)
e.toString
g.sav(new A.a8(B.a7,B.aa,B.x,A.a([f,k,e],w),d,d).aK(0,i))
a4.an(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ao(B.P,B.M,B.R,B.S,B.Q)
e.r=E.kr.j(0.55).gp(0)
a4.ar(new A.a1(g,j,h,j+2),e)
e=new A.ao(B.P,B.M,B.R,B.S,B.Q)
e.r=E.kr.j(0.4).gp(0)
a4.ar(new A.a1(g,q,h,p),e)
t.restore()
j=u.az(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ao(B.P,B.M,B.R,B.S,B.Q)
p.sav(D.c7M.aK(0,new A.a1(0,r,a2,q)))
a4.ar(new A.a1(0,r,a2,q),p)
p=new A.ao(B.P,B.M,B.R,B.S,B.Q)
p.r=B.w.j(0.5).gp(0)
p.y=B.kW
a4.ar(new A.a1(0,q,a2,q+14),p)}t=A.L()
t.r=D.bhk.j(0.72).gp(0)
a4.ar(new A.a1(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.L()
a3.sav(new A.bY(B.A,0.5,B.x,d,0,A.a([D.bpC.j(0.22),B.L],w),d,d).aK(0,A.bZ(new A.p(t,a1),a0)))
a4.N(new A.p(t,a1),a0,a3)},
aE(d){return!1}}
C.bcD.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cK(14,w*2,v*2.2,v*2,o,o,new A.bN(new A.o(A.ar(D.kP,D.buN,w/4),o,new A.bG(B.a1,new A.ay(B.w.j(0.12),1,B.r,-1),B.a1,B.a1),B.M2,o,o,B.n),B.bi,o,o),o))}v=x.V
u=A.a([new A.ab(0,B.G,B.w.j(0.35),B.aMC,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aN(2,2)
t.push(A.r(o,o,B.f,o,o,new A.o(E.kr.j(0.6),o,o,new A.be(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.r(o,A.x(t,B.l,o,B.qZ,B.i,0,B.p),B.f,o,o,new A.o(o,o,o,D.b5z,u,D.c9q,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ab(0,B.G,B.w.j(0.4),B.dp,18)],v)
t=A.ap(o,A.b2(o,o,o,new C.aIT(o),D.fhi),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aWM(p.y,r,L.j5,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bA(o,B.eO,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,L.j5.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fGX,!0,B.a5,o,B.ao,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.m(o,o,L.j5.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.W,A.E(A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bA(o,B.eO,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,L.j5.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fxm,!0,B.a5,B.AQ,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fGP,o,o,o),B.aw,A.d(q.$1(r),o,o,o,o,o,o,A.m(o,o,L.j5.j(0.5),o,o,o,o,o,o,o,o,11,B.cK,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.T,A.A(A.a([A.E(A.r(o,o,B.f,D.Gf.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fE,A.d("\u2766",o,o,o,o,o,o,A.m(o,o,D.Gf.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.r(o,o,B.f,D.Gf.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.i,0,o,o),B.aC],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.m(o,o,L.j5.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Zf(A.cQ(A.a([A.cQ(o,o,o,o,o,o,o,o,o,D.fAB,B.a.aB(k,0,1)),A.cQ(o,o,o,o,o,o,o,o,o,o,B.a.b2(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.m(o,o,L.j5.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cb(A.x(n,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.i0,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.m(o,o,L.j5.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.r(o,A.bx(B.M2,new A.an(B.a0,o,B.ad,B.t,A.a([t,new A.D(D.bHg,A.x(s,B.al,o,B.e,B.i,0,B.p),o),A.ap(0,new A.bN(new A.o(o,o,o,o,o,new A.a8(B.a7,B.aa,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bi,o,o),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.M2,v,D.c9Y,B.n),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,o,o))
return new A.an(B.a0,o,B.ad,B.t,l,o)}}
C.amb.prototype={
S(){return new C.amc(new A.eC(0,$.ax()),new C.bTD(),new C.amu(),D.hG8,null,null)},
gd1(){return this.d}}
C.a1Z.prototype={
a7(){return"_Step."+this.b}}
C.amc.prototype={
gCy(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEy(w.c,6,w.e,!1)
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
v.r.b=w===D.oz
w=v.q1(new C.bRZ(v))
w.fX(0)
v.x!==$&&A.aQ()
v.x=w
v.a2E("Come closer, my children. I am "+v.gTX()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
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
w.bwc()},
a2E(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.dh(D.alB,new C.bRT(w))},
bsz(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.m(new C.bS1(v))},
adZ(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bsr(){return this.bam()},
bam(){var w=this,v=w.gCy()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bRU(w))
w.a2E(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cy(B.mc,new C.bRV(w))},
cLt(){var w=this
w.m(new C.bRY(w))
w.a2E(w.gCy()[w.as].a)},
L7(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.ady)return
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
p.m(new C.bRX(p,d,u,q))
p.a2E(u?D.dq1[q.az(4)]+" "+w[p.as].d:D.dmB[q.az(3)]+" "+w[p.as].d)},
kO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCy()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bGP(t.at,t.ay,p)
t.m(new C.bS_(t,s))
t.a2E(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.BX(t.a.d,s),$async$kO)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.BY(r.d,r.c.a,"fire",t.at*10),$async$kO)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bS0())
w=1
break
case 4:++t.as
t.bam()
case 1:return A.h(u,v)}})
return A.i($async$kO,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c4(v,D.YC,new A.an(B.a0,v,B.ad,B.t,A.a([A.bS(0,new A.eo(A.b2(v,v,v,new C.aWR(u,w.r,w.w,u),B.az),v),0,0,0),A.bm(!0,A.x(A.a([w.cc7(0),B.b1,w.bRJ()],t),B.l,v,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
cc7(d){var w,v,u,t=this,s=null,r=A.aI(s,s,s,s,B.Qb,s,s,s,new C.bRW(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCy().length;++w){v=t.as
if(w<v||t.Q===D.b1S)v=B.cT
else v=w===v?B.c:B.aT
u=new A.aN(4,4)
p.push(A.r(s,s,B.f,s,s,new A.o(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,D.bCy,s,s,s,22))}p=A.E(A.x(A.a([D.fON,A.A(p,B.l,s,B.e,B.i,0,s,s)],q),B.E,s,B.e,B.i,0,B.p),1)
v=A.l(14)
u=A.K(B.fs,B.r,1)
return new A.D(D.bIs,A.A(A.a([r,p,A.r(s,A.d("\ud83d\udd25 "+B.j.V(t.cy*100)+"%",s,s,s,s,s,s,B.iG,s,s,s),B.f,s,s,new A.o(B.b6,s,u,v,s,s,B.n),s,s,s,s,B.hh,s,s,s)],q),B.l,s,B.e,B.i,0,s,s),s)},
bRJ(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghb(0).gzq()
if(h==null)w=1
else w=h.c===D.oz?0:1
v=j.dx
u=j.db
t=D.qo.j(0.96)
s=A.l(22)
r=A.K(B.cT,B.r,3)
q=A.b2(i,i,i,new C.bpr(w,i),B.az)
p=A.d(j.Q===D.ady?j.gTX()+" asks":"Elder "+j.gTX(),i,i,i,i,i,i,D.aW8,i,i,i)
o=j.db
o=B.a.aB(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.az(B.c3,A.A(A.a([new A.a5(62,62,q,i),B.au,A.E(A.x(A.a([p,B.bG,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aWm,i,i,i)],n),B.E,i,B.e,B.i,0,B.p),1)],n),B.E,i,B.e,B.i,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbsy(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.as(j.aa5("Sit down by the fire",j.gbsq()),i,i,i)
break
case 1:v=A.as(j.aa5("Ask me, Elder",j.gcLs()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCy()[j.as].b,m<u.length;++m){q=new A.aN(14,14)
l=new A.ay(D.lC,2.5,B.r,-1)
v.push(A.az(i,A.r(i,A.d(u[m],i,i,i,i,i,i,D.aWi,B.K,i,i),B.f,i,D.af4,new A.o(D.akB,i,new A.bG(l,l,l,l),new A.be(q,q,q,q),i,i,B.n),i,i,i,i,U.wy,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bRQ(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bX(B.bH,v,B.bt,i,8,8)
break
case 3:v=j.fr
u=v?B.k8:Aj.aqv
u=A.X(u,v?B.es:D.lC,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.m(i,i,v?B.es:D.lC,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCy().length?"Finish":"Next story"
v=A.A(A.a([u,B.af,q,j.aa5(v,j.gqo(j))],n),B.l,i,B.e,B.i,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gCy().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aWB,i,i,i)],n)
u=j.cx
if(u>0){u=C.aR8(u)
q=C.aR8(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.ac_,i,i,i))}v.push(B.T)
v.push(j.aa5("Back to the games",new C.bRR(j)))
v=A.x(v,B.l,i,B.e,B.i,0,B.p)
break
default:v=i}return A.r(i,A.x(A.a([o,B.W,v],n),B.E,i,B.e,B.O,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.aDY,i,B.n),i,i,i,B.yJ,B.bk,i,i,i)},
aa5(d,e){var w=null,v=A.l(16),u=A.K(B.cT,B.r,2)
return A.az(w,A.r(w,A.d(d,w,w,w,w,w,w,A2.KS,w,w,w),B.f,w,w,new A.o(D.lC,w,u,v,w,w,B.n),w,w,w,w,D.bG8,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bpr.prototype={
a5(d,e){X.fXf(d,e.ej(B.J),e.gdA()*0.45,this.b,0,0.4)},
aE(d){return d.b!==this.b}}
C.aBQ.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bTD.prototype={}
C.ti.prototype={}
C.bps.prototype={}
C.amu.prototype={
Mz(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.ieG(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aWR.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.zp(l.d.Mz(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.bp(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bU(0,u)
l.cAX(d,j)
l.bQh(d,j)
l.cJe(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.bp(t.save())
t.translate(225,580)
d.pl(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.S()
q=A.L()
p=x.O
o=x.n
q.sav(A.wh(B.J,r,A.a([D.btx.j(0.55*s),F.Nw.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.N(B.J,r,q)
t.restore()
n=A.a([new A.y(528,new C.bTv(l,d,j,i)),new A.y(540,new C.bTw(l,d,j,i)),new A.y(546,new C.bTx(l,d,j,i)),new A.y(574,new C.bTy(l,d,j,i)),new A.y(612,new C.bTz(l,d,j,i)),new A.y(650,new C.bTA(l,d,j,i)),new A.y(656,new C.bTB(l,d,j,i))],x.E)
B.d.aZ(n,new C.bTC())
for(m=0;m<7;++m)n[m].b.$0()
l.bH8(d,j,i)
l.bTW(d,j)
t.restore()
$.S()
t=A.L()
t.sav(A.wh(new A.p(w/2,v*0.6),e.gaoe()*0.75,A.a([B.L,D.bhe],p),A.a([0.55,1],o),B.x,k,k,0))
d.ar(new A.a1(0,0,0+w,0+v),t)},
aE(d){return d.c!==this.c||d.d!==this.d},
cAX(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e2()
h.cY(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.S()
r=new A.ao(B.P,B.M,B.R,B.S,B.Q)
r.r=t.gp(0)
d.N(new A.p(v*450,20+u*300),0.8+s*1.1,r)}q=B.j.F(e,17)/1.2
if(q<1){p=new A.p(60+q*220,70+q*90)
d.ah(p,p.aJ(0,D.eqL),C.iz(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.j.F(v+o*0.05,1)
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
s=new A.ao(B.P,B.M,B.R,B.S,B.Q)
s.b=B.a9
s.c=1.6
s.r=D.bjX.gp(0)
s.d=B.bw
s.e=B.dT
d.af(l,s)}},
bQh(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aAR[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bt(new A.p(p,m),n*0.74,q*0.5)
k=Aa.yv.j(v)
$.S()
j=new A.ao(B.P,B.M,B.R,B.S,B.Q)
j.r=k.gp(0)
d.bZ(l,j)
q=A.bt(new A.p(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ao(B.P,B.M,B.R,B.S,B.Q)
m.r=B.wc.j(u).gp(0)
d.bZ(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.j.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ao(B.P,B.M,B.R,B.S,B.Q)
o.r=D.ahW.j(0.16*(1-h)).gp(0)
d.N(new A.p(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cJe(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bDX(d,D.eqH,0.9,e,D.hBs,!1,!1,D.b1P,1,!1)
w=$.S().r
v=x.v
u=new A.aG(w,B.ai,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bu())
t=A.L()
t.r=D.ajU.gp(0)
d.af(u,t)
C.bDX(d,D.eqJ,0.95,e,D.hBn,!1,!1,D.b1Q,1,!0)
t=new A.aG(w,B.ai,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.c7(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.c7(431,553,421,548))
t.E(new A.bu())
u=A.L()
u.r=F.FX.gp(0)
d.af(t,u)
u=A.bt(D.eqI,8,28)
t=A.L()
t.r=D.bvS.gp(0)
d.bZ(u,t)
C.bDX(d,new A.p(-30+B.j.F(e/26,1)*510,492),0.82,e,D.hBt,!0,!1,D.Xo,1,!1)
t=B.j.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.bZ(A.bt(new A.p(s+q*16,r-6),16,11),C.iz(D.ajL,1.8))
u=q<0
C.bDX(d,new A.p(s-q*6,r),0.62,e,D.hBv,!1,u,D.Xo,2.2,!1)
C.bDX(d,new A.p(s-q*32,r+4),0.58,e+1,D.hBr,!1,u,D.Xo,2.2,!1)
this.bWF(d,D.eqm,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bt(new A.p(o,n),8,11)
k=p===1
j=k?D.ajH:D.akj
i=new A.ao(B.P,B.M,B.R,B.S,B.Q)
i.r=j.gp(0)
d.bZ(l,i)
l=k?D.ajH:D.akj
k=new A.ao(B.P,B.M,B.R,B.S,B.Q)
k.r=l.gp(0)
d.N(new A.p(o+5,n+(-3+m)),2.6,k)
k=new A.ao(B.P,B.M,B.R,B.S,B.Q)
k.b=B.a9
k.c=1
k.r=B.av.gp(0)
k.d=B.bw
k.e=B.dT
d.ah(new A.p(o+7.5,n+(-2+m)),new A.p(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ao(B.P,B.M,B.R,B.S,B.Q)
k.b=B.a9
k.c=1
k.r=B.av.gp(0)
k.d=B.bw
k.e=B.dT
d.ah(new A.p(o,n+4),new A.p(o,n+8),k)}h=e<f.f
u=A.bt(D.a92,15+Math.sin(e*2)*0.8,40)
t=A.L()
t.r=D.aik.gp(0)
d.bZ(u,t)
u=A.bt(D.a92.a2(0,new A.p(-14,h?-9:-2)),12,15)
t=A.L()
t.r=D.bm2.gp(0)
d.bZ(u,t)
t=new A.aG(w,B.ai,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bu())
u=A.L()
u.r=D.bmc.gp(0)
d.af(t,u)
u=D.a92.a2(0,new A.p(-17,h?-9:-2))
t=A.L()
t.r=B.ii.gp(0)
d.N(u,1.1,t)
v=new A.aG(w,B.ai,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.c7(180,588+w*(h?6:0),178,595))
d.af(v,C.iz(D.aik,3.5))},
bWF(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a2(0,new A.p(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.S()
m=new A.ao(B.P,B.M,B.R,B.S,B.Q)
m.b=B.a9
m.c=2
m.r=D.YP.gp(0)
m.d=B.bw
m.e=B.dT
d.ah(new A.p(u+o,s),new A.p(u+(o+n*1.5),q),m)}w=A.bt(k,17,32)
v=$.S()
r=A.L()
r.r=D.FV.gp(0)
d.bZ(w,r)
r=A.bt(k.a2(0,D.epO),7,26)
w=A.ar(D.FV,B.w,0.12)
w.toString
q=A.L()
q.r=w.gp(0)
d.bZ(r,q)
v=new A.aG(v.r,B.ai,null,null,A.a([],x.v))
v.E(new A.aZ(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.bu())
s=A.L()
s.r=D.FV.gp(0)
d.af(v,s)
s=A.bt(k.a2(0,new A.p(24,-7+l)),9,12)
v=A.L()
v.r=D.FV.gp(0)
d.bZ(s,v)
v=-11+l
d.ah(k.a2(0,new A.p(22,v)),k.a2(0,new A.p(21,-17+l)),C.iz(D.YP,1.6))
d.ah(k.a2(0,new A.p(26,v)),k.a2(0,new A.p(28,-16+l)),C.iz(D.YP,1.6))
v=k.a2(0,new A.p(26,-8+l))
s=A.L()
s.r=B.w.gp(0)
d.N(v,0.9,s)
d.ah(k.a2(0,new A.p(26,-3+l)),k.a2(0,new A.p(26,1+l)),C.iz(D.boV,1.4))
d.ah(k.a2(0,D.esL),k.a2(0,new A.p(-19,-7+Math.sin(f*7)*2)),C.iz(D.FV,2.4))},
bTU(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bt(new A.p(225+u*36,574+(t*13+6)),8,11)
$.S()
t=new A.ao(B.P,B.M,B.R,B.S,B.Q)
t.r=D.buw.gp(0)
a6.bZ(u,t)}}u=A.bt(D.a94.a2(0,B.cz),17,52)
$.S()
t=A.L()
t.r=D.bgM.gp(0)
a6.bZ(u,t)
t=A.bt(D.a94.a2(0,B.cz),12,44)
u=D.bkk.j(0.6+0.3*Math.sin(a7*6))
s=A.L()
s.r=u.gp(0)
a6.bZ(t,s)
for(r=0;r<3;++r){v=D.dm1[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ao(B.P,B.M,B.R,B.S,B.Q)
o.b=B.a9
o.c=7
o.r=D.G7.gp(0)
o.d=B.bw
o.e=B.dT
a6.ah(new A.p(u+t*24,579+s*4),new A.p(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.BL.j(0.6)
n=new A.ao(B.P,B.M,B.R,B.S,B.Q)
n.b=B.a9
n.c=2
n.r=t.gp(0)
n.d=B.bw
n.e=B.dT
a6.ah(new A.p(u+o*24,579+(p*4-2)),new A.p(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.f2S,D.f3r,D.f4x,D.f4S,D.f4v]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.brV,D.bof,D.btX][k]
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
g=new A.ao(B.P,B.M,B.R,B.S,B.Q)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.j.F(a7*(0.35+B.o.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.F(w,3)
p=G.akh.j((1-a5)*0.9)
$.S()
o=new A.ao(B.P,B.M,B.R,B.S,B.Q)
o.r=p.gp(0)
a6.N(new A.p(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.j.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.ahW.j(0.1*(1-a5))
$.S()
p=new A.ao(B.P,B.M,B.R,B.S,B.Q)
p.r=q.gp(0)
a6.N(new A.p(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bTW(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.j.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.bw1.j(0.18*p)
$.S()
n=new A.ao(B.P,B.M,B.R,B.S,B.Q)
n.r=o.gp(0)
d.N(new A.p(r,q),5,n)
n=new A.ao(B.P,B.M,B.R,B.S,B.Q)
n.r=D.bpH.j(0.9*p).gp(0)
d.N(new A.p(r,q),1.4,n)}},
c5F(d,e){switch(d){case 0:return e.b?D.hBo:D.b1n
case 1:return e.b?D.hBu:D.b1l
case 2:return D.b1k
case 3:return D.b1j
case 4:return D.b1m
default:return D.b1o}},
aDr(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
Rb(d,e,f,g){var w,v=this,u=D.a6u[e],t=v.c5F(e,g),s=new C.bps(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a6u[e],l=e===0
m=B.j.D(((l?D.aMu:D.aMA).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a99
s.as=D.En
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
s.Q=new A.p(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.En
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.epW
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.erh
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
s.Q=D.etH
s.as=D.aMN}if(e===2&&g.x!=null&&f<g.y){s.a=v.aDr(f,5)
s.b=0.4
s.as=new A.p(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aDr(f,e*3)
s.b=0.5
s.c=0.4}}C.hB9(d,u.a,u.b*1.2,t,s,f,e,null)},
bH8(d,e,f){var w=new C.bTu(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd6(d){return this.c}}
C.age.prototype={
a7(){return"_Stand."+this.b}}
C.aec.prototype={}
C.lu.prototype={}
C.bSe.prototype={
bBK(d){var w,v,u,t,s=A.T(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
Ga(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.aZ(r,new C.bSf())
return r},
aru(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aN9(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
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
B.d.aZ(w,new C.bSg(this))
return B.d.gH(w)}}
C.auu.prototype={}
C.zI.prototype={}
C.al5.prototype={
gC4(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Y(w,new C.bN2(),A.U(w).k("Y<1>")).gJ(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
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
d1I(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gapw(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.I)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lu(B.a.i(s.a),p,B.d.co(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.baR.prototype={}
C.aag.prototype={}
C.bi8.prototype={}
C.agc.prototype={}
C.ako.prototype={
S(){return new C.akp(B.bF,A.a([],x.cC),A.a([],x.e4),null,null)},
gd1(){return this.d}}
C.akp.prototype={
gMQ(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEy(w.c,8,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gbaI(){var w,v=this,u=v.e
if(u===$){w=v.q1(v.gcc9())
v.e!==$&&A.bE()
v.e=w
u=w}return u},
Y(){this.a4()
this.gbaI().fX(0)},
t(){this.gbaI().t()
this.bw7()},
fX(d){this.m(new C.bLc(this))},
cca(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fH(0,v)
if(w.c!=null)w.m(new C.bL7())},
b93(){var w,v,u,t=this,s=t.r
B.d.a8(s)
w=t.gMQ()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bi8(u,(u+0.5)/v,w[t.x].b[u]))},
fH(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bq(w,new C.bLd())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c8v()
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
m.at1(v,0.8,B.cT)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.at1(m.cy,0.8,G.ns)
m.aZG("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.at1(q,0.88,D.lC)
p=m.gMQ()[m.x]
n=p.c
if(u===n){m.aZG("The right gourd fell! It was "+p.b[n]+".")
return}}}},
at1(d,e,f){var w,v,u,t=new A.e2()
t.cY(B.j.V(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.agc(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
aZG(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.Qk()}},
c8v(){var w=this
if(w.x+1>=w.gMQ().length){w.Qk()
return}++w.x
w.b93()},
Qk(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Qk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gMQ().length
r=C.bGP(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bL5())
w=2
return A.b(C.BX(u.a.d,r),$async$Qk)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.BY(t.d,t.c.a,"catch",u.z),$async$Qk)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bL6())
return A.h(null,v)}})
return A.i($async$Qk,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.cc8()
else w=v.ch?v.ccb():A.as(new A.D(B.eA,A.x(A.a([D.aXz,B.T,D.fQu,B.W,D.fWG,B.e4,C.uA("Play",v.geY(v),B.cT,B.hm,D.fC)],x.p),B.l,u,B.e,B.O,0,B.p),u),u,u,u)
return new C.tJ("Calabash Catch",w,B.f7,u)},
ccb(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hP:B.HD
p.push(A.X(u,v?B.ay:B.bW,r,r,r,22))}p.push(B.b1)
v=s.x
u=s.gMQ()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aW7,r,r,r))
p.push(B.bd)
v=A.l(14)
p.push(A.r(r,A.d(""+s.z,r,r,r,r,r,r,B.iG,r,r,r),B.f,r,r,new A.o(B.by,r,r,v,r,r,B.n),r,r,r,r,B.Cr,r,r,r))
p=A.A(p,B.l,r,B.e,B.i,0,r,r)
v=A.l(18)
t=A.K(B.cT,B.r,3)
return A.x(A.a([new A.D(D.bDW,p,r),A.r(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fAt,B.K,r,r),B.f,r,r,new A.o(D.qo,r,t,v,r,r,B.n),r,r,r,B.f5,B.bk,r,r,1/0),B.am,A.E(A.cr(new C.bLb(s)),1)],q),B.l,r,B.e,B.i,0,B.p)},
cc8(){var w=this,v=null,u=A.as(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.q0,v,v,v),v,v,v),t=A.as(A.d(""+w.Q+" of "+w.gMQ().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.VJ,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cm(A.a([D.beg,u,t,B.aO,new C.IB(s,r,w.cx,v),B.aO,A.as(C.uA("Back to the games",new C.bL4(w),B.cT,B.k7,D.fC),v,v,v)],x.p),v,v,B.ac,v,v,B.ah,!1)}}
C.bdi.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.S(),a3=A.L()
a3.sav(A.jB(B.J,new A.p(0,a0),D.d3W,G.aB9,B.x,e))
a4.ar(new A.a1(0,0,a1,0+a0),a3)
a3=A.L()
a3.r=G.NA.gp(0)
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
w=A.L()
w.r=D.blh.gp(0)
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
w=A.L()
w.r=D.agX.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.cpq[q]
s=new A.ao(B.P,B.M,B.R,B.S,B.Q)
s.r=D.agX.gp(0)
s.c=7
s.d=B.bw
a4.ah(new A.p(r,a2),new A.p(r+p*46,w),s)
s=new A.ao(B.P,B.M,B.R,B.S,B.Q)
s.r=D.agh.gp(0)
a4.N(new A.p(r+p*50,t),18,s)}a2=a0*0.88
w=A.L()
w.r=D.bma.gp(0)
a4.ar(new A.a1(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ao(B.P,B.M,B.R,B.S,B.Q)
t.r=D.aiC.gp(0)
t.c=2
a4.ah(new A.p(w,a1),new A.p(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.I)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.bt(new A.p(u,s),12,54)
$.S()
l=new A.ao(B.P,B.M,B.R,B.S,B.Q)
l.r=D.lC.j(0.6).gp(0)
a4.bZ(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.bp(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.S()
m=new A.ao(B.P,B.M,B.R,B.S,B.Q)
m.r=D.ahG.gp(0)
a4.N(D.epa,14,m)
m=new A.ao(B.P,B.M,B.R,B.S,B.Q)
m.r=D.bqX.gp(0)
m.c=4
m.d=B.bw
a4.ah(D.epb,D.eqi,m)
m=new A.ao(B.P,B.M,B.R,B.S,B.Q)
m.sav(new A.alX(D.ess,46,D.dcy,B.A0,B.x,e,e,0))
a4.N(B.J,34,m)
m=A.bt(D.esz,8,12)
l=new A.ao(B.P,B.M,B.R,B.S,B.Q)
l.r=B.c.j(0.35).gp(0)
a4.bZ(m,l)
k=new A.iK(new A.ep(n.c,e,e,B.cN,e,e,e,e,e,e,D.fyh),B.K,B.bX,new A.jj(1),e,e,3,e,B.bY,e,B.ct)
k.o8(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bn(A.bt(B.cL,m.gba(m)+8,l),B.fS)
l=new A.ao(B.P,B.M,B.R,B.S,B.Q)
l.r=D.qo.gp(0)
a4.an(j,l)
l=new A.ao(B.P,B.M,B.R,B.S,B.Q)
l.r=D.lC.gp(0)
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
h=A.bt(new A.p(i,a0*0.8),a0*0.07,d*0.24)
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
m=A.L()
m.r=D.ZH.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ao(B.P,B.M,B.R,B.S,B.Q)
m.r=D.BL.gp(0)
m.c=1.4
a4.ah(new A.p(t,a2),new A.p(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.L()
s.r=G.ns.gp(0)
a4.ar(new A.a1(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.L()
s.r=D.bln.gp(0)
a4.bZ(new A.a1(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.I)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ao(B.P,B.M,B.R,B.S,B.Q)
m.r=g.e.j(B.j.D(s,0,1)).gp(0)
a4.N(new A.p(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.ft(e,B.ct,e,e,e,A.cQ(e,e,e,e,e,e,e,e,e,A.m(e,e,B.cT.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,I.DA,e,e),"+"+a2),B.a5,B.bX,e,B.dE,B.bY)
k.e5()
k.a5(a4,new A.p(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aE(d){return!0}}
C.QR.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b2(v,v,v,new C.aBO(w.c,w.f,v),B.az),s=A.l(10),r=A.K(B.bE,B.r,1.4)
return new A.a5(u+22,v,A.x(A.a([new A.a5(u,u,t,v),B.cR,A.r(v,A.d(w.d,v,1,B.a2,v,v,v,D.fqN,v,v,v),B.f,v,v,new A.o(B.c,v,r,s,v,v,B.n),v,v,v,v,B.n4,v,v,v)],x.p),B.l,v,B.e,B.O,0,B.p),v)},
gZ(d){return this.e}}
C.aBO.prototype={
a5(d,e){var w=e.ej(B.J),v=e.gdA(),u=this.c?0.8:0
return X.fXf(d,w,v*0.44,this.b,0,u)},
aE(d){return d.b!==this.b||d.c!==this.c}}
C.aAi.prototype={}
C.av5.prototype={
S(){return new C.av6(A.T(x.S,x.cq),null,null)},
gd1(){return this.d}}
C.av6.prototype={
gkT(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hGK(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gaFu(){var w=this.z
return w===$?this.z=this.Xn(0):w},
gj1(){var w,v=this.Q
if(v===$){w=this.gkT()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c1(w,-1,!1,x.S)}return v},
Xn(d){var w,v,u,t,s=this.gkT()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aAi(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aAi(v[t],u[t],-1))
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
v.qF()}this.bwA()},
cRz(d,e){var w,v,u,t,s,r=this
if(d>=r.gj1().length||r.gj1()[d]!==-1||B.d.q(r.gj1(),e))return
w=r.gaFu()[e]
v=r.gkT()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.cqM(r,e,w,v))
A.cy(B.lJ,new C.cqN(r))
return}++r.r
u=A.bl(null,B.hK,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.m(new C.cqO(r,d,e,w,v))
u.cr(0)},
kO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkT()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cF(n,0,new C.cqP())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.cqQ(t,r))
w=5
return A.b(C.BX(t.a.d,r),$async$kO)
case 5:t.x=f
o=t.a
w=6
return A.b(C.BY(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kO)
case 6:t.ch=f
if(t.c!=null)t.m(new C.cqR())
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
t.m(new C.cqS(t))
case 1:return A.h(u,v)}})
return A.i($async$kO,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.as(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.q0,p,p,p),p,p,p)
v=r.f
v=A.as(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.VJ,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tJ(q,A.cm(A.a([D.afO,w,v,B.aO,new C.IB(u,t,r.ch,p),B.aO,A.as(C.uA("Back to the games",new C.cqI(d),B.cT,B.k7,D.fC),p,p,p)],x.p),p,p,B.ac,p,p,B.ah,!1),B.f7,p)}w=r.gkT()
v=r.e
s=w[v]
return new C.tJ(q,new A.D(B.uH,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aW2,B.K,p,p),A.E(A.cr(new C.cqJ(r,s)),1)],x.p),B.l,p,B.e,B.i,0,B.p),p),B.f7,p)}}
C.bcM.prototype={
a5(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.Y(b2,new C.cQO(),A.U(b2).k("Y<1>")).gJ(0),b4=a9.b,b5=b4.a2(0,B.JH)
$.S()
w=A.L()
w.r=D.lD.j(0.18+0.1*b3).gp(0)
b6.N(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a2(0,D.eoY)
u=A.L()
u.r=B.op.j(0.5).gp(0)
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
if(m<1)for(o=new A.aG(l,j.b,j.c,b0,A.br(k,!0,r)),n=A.a([],q),i=new A.rA(o,!1,n);i.C();){h=i.c
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
a1=new A.ao(B.P,B.M,B.R,B.S,B.Q)
a1.r=B.aT.gp(0)
a1.b=B.a9
a1.c=3
b6.af(new A.aG(l,d,b0,new A.ce([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aG(l,j.b,j.c,b0,A.br(k,!0,r)),n=A.a([],q),k=new A.rA(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bj(A.jK(b1));--a0
k.iy()
a1=n[a0].b
a1===$&&A.c()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.S()
a4=new A.ao(B.P,B.M,B.R,B.S,B.Q)
a4.r=D.Gl.gp(0)
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
a2=A.bt(new A.p(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ao(B.P,B.M,B.R,B.S,B.Q)
a3.r=B.b4.gp(0)
b6.bZ(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.iK(D.fqg,B.a5,B.bX,new A.jj(1),b0,b0,b0,b0,B.bY,b0,B.ct)
a8.e5()
a8.a5(b6,new A.p(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aE(d){return!0}}
C.az3.prototype={
S(){return new C.az4(A.aR(x.S))},
gd1(){return this.d}}
C.az4.prototype={
gkT(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hHE(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
Y(){this.a4()
this.b9c()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a3()},
b9c(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.dh(B.rW,new C.cFK(this))},
bq9(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkT()[v.e]
if(w.e[d]===w.b)v.m(new C.cFS(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cFT(v,d))
A.cy(B.iQ,new C.cFU(v))}},
cX1(){var w=this
if(!w.as&&w.f<w.gkT()[w.e].d.length)w.m(new C.cFV(w))},
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
t.m(new C.cFW(t,s))
w=5
return A.b(C.BX(t.a.d,s),$async$kO)
case 5:t.y=f
q=t.a
w=6
return A.b(C.BY(q.d,q.c.a,"who",t.r),$async$kO)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cFX())
w=1
break
case 4:t.m(new C.cFY(t))
t.b9c()
case 1:return A.h(u,v)}})
return A.i($async$kO,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.as(A.d(""+a0.w+" of "+a0.gkT().length+" guessed",a2,a2,a2,a2,a2,a2,B.q0,a2,a2,a2),a2,a2,a2)
v=A.as(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.VJ,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tJ(a1,A.cm(A.a([D.ber,w,v,B.aO,new C.IB(u,t,a0.ax,a2),B.aO,A.as(C.uA("Back to the games",new C.cFM(a3),B.cT,B.k7,D.fC),a2,a2,a2)],x.p),a2,a2,B.ac,a2,a2,B.ah,!1),B.f7,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkT()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.KY,B.K,a2,a2),B.W,A.as(A.lE(new C.cFN(a0,r),a2,B.b_,B.hK,a2,a2,new A.bs(a2,s,u),x.i),a2,a2,a2),B.aC],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aN(16,16)
l=new A.ay(B.cT,2,B.r,-1)
k=o+1
w.push(new A.r8(new A.bs(0,1,u),new C.cFO(),A.r(a2,new A.c8(B.aL,B.e,B.i,B.l,a2,B.p,a2,0,A.a([new A.qJ(A.d(""+k,a2,a2,a2,a2,a2,a2,B.o3,a2,a2,a2),D.lC,a2,12,a2),B.au,new A.bz(1,B.bb,A.d(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fD8,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.o(D.qo,a2,new A.bG(l,l,l,l),new A.be(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.cy,B.bk,a2,a2,a2),B.b_,B.iQ,a2,new A.bq("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.as(A.bP(!1,D.h3y,a2,a2,!0,a2,a2,a2,a0.gcX0(),a2,a2),a2,a2,a2))
w.push(B.T)
if(a0.as){u=D.lD.j(0.2)
q=A.l(16)
p=A.K(D.lD,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fU,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.r(a2,A.x(A.a([m,B.W,C.uA(v,a0.gqo(a0),B.cT,B.jt,D.fC)],t),B.l,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.o(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bI,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dr:B.cT.j(0.2)
g=new A.aN(16,16)
l=new A.ay(n.q(0,o)?B.fi:B.cT,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bW:B.c
d=n.q(0,o)?B.xr:a2
t.push(new A.r8(new A.bs(0,i,u),new C.cFP(),A.az(a2,A.r(a2,A.d(f,a2,a2,a2,a2,a2,a2,new A.F(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.aeY,new A.o(h,a2,new A.bG(l,l,l,l),new A.be(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jr,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cFQ(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b_,B.md,a2,new A.bq("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bX(B.fW,t,B.bt,a2,10,10))}return new C.tJ(a1,A.cm(w,a2,a2,B.amA,a2,a2,B.ah,!1),B.f7,a2)}}
C.aA3.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aHh.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.ag0.prototype={
ar1(d){},
ary(){var w=this,v=w.q1(new C.f7L(w))
v.fX(0)
w.LZ$!==$&&A.aQ()
w.LZ$=v}}
C.aL5.prototype={
gbmA(d){var w=this.c
return B.a.aB(w,0,Math.min(this.d,w.length))},
VX(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.dh(D.alB,new C.fhV(w))},
bsx(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.amk.prototype={
S(){return new C.aml(new C.amu(),A.a([],x.t),new A.eC(0,$.ax()),$,0,null,null)},
gd1(){return this.d}}
C.aml.prototype={
gMO(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEy(w.c,10,w.e,!0)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.Na(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gqw(){var w=this.r
return w===$?this.r=new C.aL5(new C.bT0(this)):w},
gapS(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gMO()[v].c)u.push(1)
return u.length},
gblU(){var w=this.ghb(0)
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
v.bwf()},
cLF(){var w=this
w.m(new C.bSY(w))
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
v.m(new C.bSW())
A.cy(B.hK,new C.bSX(v))},
bq5(){var w=this.gapS(0)/this.gMO().length*100
if(w>=90)return D.f_H
if(w>=75)return D.eYJ
if(w>=60)return D.ePo
if(w>=45)return D.eSP
return D.eJO},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cub()
w=A.bS(0,new A.eo(A.b2(m,m,m,new C.btt(n,n.qa$),B.az),m),0,0,0)
if(!n.Q){v=D.qo.j(0.96)
u=A.l(20)
t=A.K(B.cT,B.r,3)
u=A.r(m,A.x(A.a([A.d("Elder "+n.gblU()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aWX,B.K,m,m),B.W,C.uA("Start the test",n.gBV(),B.cT,B.j9,D.fC)],x.p),B.l,m,B.e,B.O,0,B.p),B.f,m,m,new A.o(v,m,t,u,m,m,B.n),m,m,m,m,B.bI,m,m,m)
v=u}else{v=n.x
u=n.gMO()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aWZ,m,m,m)
if(n.Q){t=n.gqw()
t=t.d<t.c.length}else t=!1
if(t)u=D.fiH
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aN(10,10)
o=new A.ay(D.BL,4,B.r,-1)
s.push(A.az(m,A.r(m,A.d(q[r],m,m,m,m,m,m,D.fu3,B.K,m,m),B.f,m,D.aeY,new A.o(D.bhj,m,new A.bG(o,o,o,o),new A.be(p,p,p,p),m,m,B.n),m,m,m,m,B.Ol,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bSZ(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bX(B.fW,s,B.bt,new A.bq("o"+t,x.W),8,8)}u=A.x(A.a([v,B.am,A.oB(u,B.n_,A.pW(),B.b_,B.b_,A.LN())],x.p),B.l,m,B.e,B.O,0,B.p)
v=u}return new C.tJ("Village School",new A.an(B.a0,m,B.ad,B.t,A.a([w,A.ap(10,v,m,m,10,10,m,m)],x.p),m),B.f7,m)},
cub(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bq5(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gMO()[v].c)g.push(v)
u=A.l(22)
t=A.K(B.cT,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.fyB,B.K,i,i)
r=A.d("Signed by Elder "+j.gblU(),i,i,i,i,i,i,D.fxe,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fCt,i,i,i),D.eBJ],q)
o=A.d(h.b,i,i,i,i,i,i,D.fEr,i,i,i)
n=j.gapS(0)
m=j.gMO()
u=A.r(i,A.x(A.a([D.fPI,B.aw,s,r,B.W,new A.an(B.A,i,B.ad,B.t,p,i),o,B.am,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.ac_,i,i,i),B.T,D.atq],q),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(D.qo,i,t,u,i,i,B.n),i,i,i,i,B.fv,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aC,new C.IB(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aO,D.h4C,B.T],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.I)(g),++l){v=g[l]
r=new A.aN(14,14)
k=new A.ay(B.by,1,B.r,-1)
p=m[v]
u.push(A.r(i,A.x(A.a([A.d(p.a,i,i,i,i,i,i,B.h4,i,i,i),B.aw,A.d("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fzM,i,i,i),A.d(p.d,i,i,i,i,i,i,D.fC4,i,i,i)],q),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.dr,i,new A.bG(k,k,k,k),new A.be(r,r,r,r),i,i,B.n),i,i,i,B.cy,B.bk,i,i,i))}B.d.u(s,u)}s.push(B.aC)
s.push(A.as(C.uA("Back to the games",new C.bSS(j),B.cT,B.k7,D.fC),i,i,i))
return new C.tJ("Village School",A.cm(s,i,i,B.bS,i,i,B.ah,!1),B.f7,i)}}
C.btt.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.qa$.a
a0.zp(e.f.Mz(a1))
w=C.hdT(a1)
v=a0.c
J.bp(v.save())
v.translate(w.a,w.b)
a0.bU(0,w.c)
if(e.Q){u=e.gqw()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.cZa[s]-6
$.S()
r=new A.ao(B.P,B.M,B.R,B.S,B.Q)
r.r=D.G7.gp(0)
a0.ar(new A.a1(u,340,u+12,450),r)}u=A.bn(D.aa3.cn(10),B.i8)
$.S()
r=A.L()
r.r=D.BL.gp(0)
a0.an(u,r)
r=A.bn(D.aa3,B.hW)
u=A.L()
u.sav(A.jB(new A.p(30,96),new A.p(420,346),D.dhX,f,B.x,f))
a0.an(r,u)
q=new A.e2()
q.cY(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bt(new A.p(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ao(B.P,B.M,B.R,B.S,B.Q)
r.r=B.c.j(0.025).gp(0)
a0.bZ(o,r)}u=A.L()
u.r=I.ajr.gp(0)
a0.ar(new A.a1(30,354,420,362),u)
u=A.L()
u.r=B.aS.gp(0)
a0.ar(D.fa5,u)
u=A.L()
u.r=B.bL.gp(0)
a0.ar(D.fa9,u)
u=A.bn(D.fa_,B.hV)
r=A.L()
r.r=D.ZH.gp(0)
a0.an(u,r)
n=B.j.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqw().gbmA(0)
m=A.ft(f,B.ct,f,7,f,A.cQ(f,f,f,f,f,f,f,f,f,D.fGI,u+(t?"|":"")),B.a5,B.bX,f,B.dE,B.bY)
m.o8(346)
J.bp(v.save())
u=A.hX(D.aa3)
r=$.mi()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.hX(new A.a1(30+390*n,96,420,346)),r[1],!0)
m.a5(a0,new A.p(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bn(new A.a1(u,r,u+40,r+90),B.fS)
u=A.L()
u.r=D.bwR.gp(0)
a0.an(r,u)}}else{m=A.ft(f,B.ct,f,f,f,D.fqw,B.K,B.bX,f,B.dE,B.bY)
m.o8(340)
m.a5(a0,new A.p(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.j.F(u+p/8,1)
o=B.o.F(e.gqw().d*9,310)
k=Math.sin(p+r)
j=new A.ao(B.P,B.M,B.R,B.S,B.Q)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.N(new A.p(70+o+k*6,166+l*70),1.6,j)}u=e.ghb(0).gzq()
i=(u==null?f:u.c)===D.oz?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.f7M(d,a0,i,t,h,D.eq7)),new A.y(520,new C.f7N(a0,d,t)),new A.y(575,new C.f7O(a0,d,t)),new A.y(585,new C.f7P(this,a0,d,t)),new A.y(615,new C.f7Q(this,t,a0,d,h))],x.E)
B.d.aZ(g,new C.f7R())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
ccc(d,e){var w,v,u,t,s,r,q,p=$.S(),o=A.a([],x.v),n=new A.aG(p.r,B.ai,null,null,o)
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
C.ami.prototype={
S(){return new C.amj(new C.amu(),A.T(x.S,x.i),new A.eC(0,$.ax()),$,0,null,null)},
gd1(){return this.d}}
C.amj.prototype={
gkT(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hGy(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gj1(){var w=this.z
return w===$?this.z=this.FJ(0):w},
gaLK(){var w,v,u,t,s=this,r=s.Q
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
u=B.d.f1(u,new C.bSE())===w}else u=!1
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
v.bwe()},
ar1(d){var w,v,u,t,s,r=this,q=r.gj1().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.co(u===$?r.z=r.FJ(0):u,v)
s=r.gaLK()
s[v]=s[v]+(450*(t+0.5)/q-r.gaLK()[v])*Math.min(1,w)}},
d1n(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj1().length)return
w=v.y
if(w===-1){v.m(new C.bSP(v,d))
return}if(w===d){v.m(new C.bSQ(v))
return}v.m(new C.bSR(v,B.d.co(v.gj1(),v.y),d,B.d.co(v.gj1(),d)))},
cMm(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.FJ(0):u).length))break
t=s.gkT()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.FJ(0):u)[v]]===v);++v}s.m(new C.bSK(s,B.d.cD(w,new C.bSL())))},
kO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkT().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bSM(t,s))
w=5
return A.b(C.BX(t.a.d,s),$async$kO)
case 5:t.x=f
q=t.a
w=6
return A.b(C.BY(q.d,q.c.a,"lineup",t.r*10),$async$kO)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bSN())
w=1
break
case 4:t.m(new C.bSO(t))
case 1:return A.h(u,v)}})
return A.i($async$kO,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.as(A.d(""+l.r+" of "+l.gkT().length+" lines right",k,k,k,k,k,k,B.q0,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tJ("Line Up",A.cm(A.a([D.afO,w,B.aO,new C.IB(v,u,l.ch,k),B.aO,A.as(C.uA("Back to the games",new C.bSG(d),B.cT,B.k7,D.fC),k,k,k)],x.p),k,k,B.ac,k,k,B.ah,!1),B.f7,k)}w=A.a([],x.t)
for(t=0;v=l.gkT(),t<v[l.f].d.length;++t)w.push(t)
B.d.aZ(w,new C.bSH(l))
u=A.bS(0,A.cr(new C.bSI(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aWZ,k,k,k)
s=v[s]
q=x.p
s=A.ap(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.fz2,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fBi,B.K,k,k)],q),B.l,k,B.e,B.i,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.l(16)
n=l.ax
m=A.K(n?D.lD:G.ns,B.r,2)
r.push(A.r(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bSJ(l),x.cM).aN(0,", then ")+".",k,k,k,k,k,k,D.fDw,k,k,k),B.f,k,k,new A.o(p,k,m,o,k,k,B.n),k,k,k,B.da,B.bk,k,k,1/0))}if(!l.at)r.push(C.uA("That is my line!",l.gcMl(l),B.cT,B.hO,D.fC))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uA(w,l.gqo(l),B.cT,B.jt,D.fC))}return new C.tJ("Line Up",new A.an(B.a0,k,B.ad,B.t,A.a([u,s,A.ap(12,A.x(r,B.l,k,B.e,B.O,0,B.p),k,k,12,12,k,k)],q),k),B.f7,k)}}
C.bjX.prototype={
a5(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.qa$.a
c7.zp(c5.e.Mz(c8))
w=C.hdT(c8)
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
q=A.L()
q.r=D.ZH.gp(0)
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
m=new A.ao(B.P,B.M,B.R,B.S,B.Q)
m.r=[B.cT,G.ns,D.lD,B.aG][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b1h(c7,"OLDEST",D.er5,B.cT)
this.b1h(c7,"YOUNGEST",D.eqy,B.b4)
t=A.bn(D.f9U,B.fS)
s=A.L()
s.r=D.G7.gp(0)
c7.an(t,s)
s=A.bn(D.f9T,B.hW)
t=A.L()
t.r=D.BL.gp(0)
c7.an(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.aZ(t,new C.ds1())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.I)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.co(a1===$?c5.z=c5.FJ(0):a1,f)
o=c5.gaLK()[f]
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
a9=new A.ao(B.P,B.M,B.R,B.S,B.Q)
a9.r=B.cT.j(0.22+0.1*Math.sin(e)).gp(0)
c7.N(new A.p(o,520),54,a9)}a9=D.dlQ[B.o.F(b0,6)]
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
else b9=a3?D.etd:c4
if(b1)c0=new A.p(3+b2*8,-56)
else if(h&&a7)c0=D.aMN
else c0=a3?new A.p(30,-104+Math.sin(e)*5):c4
C.SJ(c7,new A.p(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.JJ,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.iK(new A.ep(a8,c4,c4,B.cN,c4,c4,c4,c4,c4,c4,D.fwK),B.a5,B.bX,new A.jj(1),"\u2026",c4,1,c4,B.bY,c4,B.ct)
c1.o8(q)
c2=A.bn(A.bt(new A.p(o,650),24,c1.b.c+16),B.fS)
$.S()
a8=new A.ao(B.P,B.M,B.R,B.S,B.Q)
if(a6)a9=B.ig
else a9=a7?B.rQ:D.qo
a8.r=a9.gp(0)
c7.an(c2,a8)
a8=new A.ao(B.P,B.M,B.R,B.S,B.Q)
if(a6)a9=D.lD
else a9=a7?G.ns:D.lC
a8.r=a9.gp(0)
a8.b=B.a9
a8.c=2
c7.an(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a5(c7,new A.p(o-a9/2,650-a8.gba(a8)/2))
c3=new A.iK(new A.ep(""+(a2+1),c4,c4,B.cN,c4,c4,c4,c4,c4,c4,D.fx3),B.a5,B.bX,new A.jj(1),c4,c4,c4,c4,B.bY,c4,B.ct)
c3.e5()
c3.a5(c7,new A.p(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.j.F(p*53+Math.sin(c5+p)*20,450)
q=B.j.F(t+p*37,420)
J.bp(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bt(B.J,4,8)
$.S()
m=new A.ao(B.P,B.M,B.R,B.S,B.Q)
m.r=[B.cT,G.ns,D.lD,B.aG,B.c][B.o.F(p,5)].gp(0)
c7.ar(q,m)
v.restore()}v.restore()},
b1h(d,e,f,g){var w,v,u=null,t=A.ft(u,B.ct,u,u,u,A.cQ(u,u,u,u,u,u,u,u,u,A.m(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,I.DA,u,u),e),B.a5,B.bX,u,B.dE,B.bY)
t.e5()
w=t.b
v=w.c
w=w.a.c
t.a5(d,f.aJ(0,new A.p(v/2,w.gba(w)/2)))},
aE(d){return!1}}
C.a2h.prototype={
a7(){return"_Trip."+this.b}}
C.ame.prototype={
S(){return new C.amf(D.Xu,new A.eC(0,$.ax()),$,0,null,null)},
gd1(){return this.d}}
C.amf.prototype={
gDu(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEy(w.c,8,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.Na(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gqw(){var w=this.f
return w===$?this.f=new C.aL5(new C.bSq(this)):w},
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
v.bwd()},
ar1(d){var w,v,u,t=this
if(t.r!==D.adK)return
w=B.dG.aA(0,B.j.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDu()
if(v+1>=u.length){t.r=D.adL
t.WT()}else{++t.w
t.ay=!1
t.r=D.Xv
t.gqw().VX(u[t.w].a)}if(t.c!=null)t.m(new C.bSo())}},
WT(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$WT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqw().VX("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDu().length
r=C.bGP(t,u.z,s)
u.as=r
w=2
return A.b(C.BX(u.a.d,r),$async$WT)
case 2:u.at=e
s=u.a
w=3
return A.b(C.BY(s.d,s.c.a,"journey",u.x*10),$async$WT)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bSi())
return A.h(null,v)}})
return A.i($async$WT,v)},
brp(){this.aUq()},
aUq(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.adK
if(w.c!=null)w.m(new C.bSj())},
L7(d){var w,v,u,t,s=this
if(s.r!==D.Xv)return
w=s.gDu()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bSn(s,d,v))
u=s.gqw()
t=s.w
u.VX(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cRy(){if(this.r!==D.Bi)return
this.aUq()},
B(d){var w,v,u,t=this,s=null,r=A.bS(0,new A.eo(A.b2(s,s,s,new C.bjn(t,t.qa$),B.az),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDu().length;++w){v=t.w
if(w<v||t.r===D.adL)v=B.cT
else v=w===v?B.c:B.aT
u=new A.aN(4,4)
p.push(new A.bz(1,B.bb,A.r(s,s,B.f,s,s,new A.o(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,B.wD,s,s,s,s),s))}p.push(B.bn)
p.push(D.fRn)
return new C.tJ("Safari Journey",new A.an(B.a0,s,B.ad,B.t,A.a([r,A.ap(s,A.A(p,B.l,s,B.e,B.i,0,s,s),s,s,12,12,2,s),A.ap(10,t.clP(),s,s,10,10,s,s)],q),s),B.f7,s)},
clP(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bSm(o),l=D.qo.j(0.96),k=A.l(22),j=A.K(B.cT,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gTX()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aWX,B.K,n,n),B.W,C.uA("Start the journey",o.gbro(),B.cT,D.bRF,D.fC)],x.p),B.l,n,B.e,B.O,0,B.p)
break
case 3:w=D.be1
break
case 1:w=o.w
v=o.gDu()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aN(14,14)
p=new A.ay(D.lC,2.5,B.r,-1)
t.push(A.az(n,A.r(n,A.d(r[s],n,n,n,n,n,n,D.aWi,B.K,n,n),B.f,n,D.af4,new A.o(D.akB,n,new A.bG(p,p,p,p),new A.be(q,q,q,q),n,n,B.n),n,n,n,n,U.wy,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bSk(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.T,A.bX(B.bH,t,B.bt,n,8,8)],u),B.E,n,B.e,B.O,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDu().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.T,new A.bL(B.aa,n,n,C.uA(v,o.gcRx(),B.cT,B.jt,D.fC),n)],x.p),B.E,n,B.e,B.O,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gTX()),B.T,A.d(""+o.x+" of "+o.gDu().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aWB,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aR8(v)
u=C.aR8(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.ac_,n,n,n))}w.push(B.T)
w.push(A.as(C.uA("Back to the games",new C.bSl(o),B.cT,B.k7,D.fC),n,n,n))
w=A.x(w,B.E,n,B.e,B.O,0,B.p)
break
default:w=n}return A.r(n,w,B.f,n,n,new A.o(l,n,j,k,D.aDY,n,B.n),n,n,n,n,B.bk,n,n,n)}}
C.bjn.prototype={
a5(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.qa$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDu(),d0=B.j.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.adK,d2=c7*0.5
c8=A.ar(D.biN,D.bte,d0)
c8.toString
w=A.ar(D.YR,G.aic,d0)
w.toString
v=A.ar(B.uj,D.brG,d0)
v.toString
$.S()
u=A.L()
t=x.O
u.sav(A.jB(B.J,new A.p(0,d2),A.a([c8,w,v],t),G.a4X,B.x,c3))
d3.ar(new A.a1(0,0,0+c6,0+c7),u)
s=new A.p(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.L()
u.sav(A.wh(s,60,A.a([D.bs4,B.L],t),c3,B.x,c3,c3,0))
d3.N(s,60,u)
u=A.L()
u.r=B.Z2.gp(0)
d3.N(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.j.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dBl[o]
$.S()
u=new A.ao(B.P,B.M,B.R,B.S,B.Q)
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
k=new A.ao(B.P,B.M,B.R,B.S,B.Q)
k.r=A.ar(l===0?D.bhl:D.bwi,D.bmh,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.ccd(d3,new A.p(B.j.F(B.j.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.S()
w=A.L()
v=A.ar(D.ajL,D.Gl,d0)
v.toString
w.sav(A.jB(new A.p(0,d2),new A.p(0,c7),A.a([v,D.bs6],t),c3,B.x,c3))
d3.ar(new A.a1(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.L()
w.r=D.blB.gp(0)
d3.ar(new A.a1(0,a0,c6,a1),w)
w=A.L()
w.r=D.bvW.gp(0)
d3.ar(new A.a1(0,a0-3,c6,a0),w)
for(q=-B.j.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ao(B.P,B.M,B.R,B.S,B.Q)
u.r=I.MT.gp(0)
d3.ar(new A.a1(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.S()
b2=new A.ao(B.P,B.M,B.R,B.S,B.Q)
b2.r=D.bh0.gp(0)
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
b0=new A.ao(B.P,B.M,B.R,B.S,B.Q)
b0.r=D.bu5.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ao(B.P,B.M,B.R,B.S,B.Q)
b1.r=D.fC.gp(0)
d3.ar(new A.a1(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ao(B.P,B.M,B.R,B.S,B.Q)
b0.r=D.G7.gp(0)
d3.ar(new A.a1(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bn(new A.a1(b0,a4,b0+60,a5),B.iF)
b0=new A.ao(B.P,B.M,B.R,B.S,B.Q)
b0.r=D.bxm.gp(0)
d3.an(b5,b0)
b0=new A.ao(B.P,B.M,B.R,B.S,B.Q)
b0.r=D.BL.gp(0)
b0.b=B.a9
b0.c=2
d3.an(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.iK(new A.ep(b6,c3,c3,B.cN,c3,c3,c3,c3,c3,c3,D.fva),B.a5,B.bX,new A.jj(1),c3,c3,c3,c3,B.bY,c3,B.ct)
b7.e5()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a5(d3,new A.p(b4-b1/2,a2-b0.gba(b0)/2))
if(a7)b8=c4.r===D.adL
else if(r===c4.w){b0=c4.r
b0=b0===D.Xv||b0===D.Bi
b8=b0}else b8=!1
if(a7){b0=c4.ghb(0).gzq()
b9=(b0==null?c3:b0.c)===D.oz?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqw()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.Bi
b0=c0?C.hCE(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.Xv?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.p(40,-110+Math.sin(g)*10)
else a7=c0?new A.p(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.SJ(d3,new A.p(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.p(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bIw(d3,new A.p(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.j.F(w+r/7,1)
$.S()
t=new A.ao(B.P,B.M,B.R,B.S,B.Q)
t.r=D.bvq.j(0.5*(1-c2)).gp(0)
d3.N(new A.p(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.Xu)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.j.F(w+r/5,1)
t=Math.sin(r+c8)
$.S()
m=new A.ao(B.P,B.M,B.R,B.S,B.Q)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.N(new A.p(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.Bi&&c4.ax){b7=A.ft(c3,B.ct,c3,c3,c3,A.cQ(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.m(c3,c3,B.cT,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,A6.IH,c3,c3),"BEEP BEEP!"),B.a5,B.bX,c3,B.dE,B.bY)
b7.e5()
b7.a5(d3,new A.p(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
ccd(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ar(D.brA,D.bkV,g)
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
t=A.L()
t.r=D.a_c.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d2a[r]
p=new A.ao(B.P,B.M,B.R,B.S,B.Q)
p.r=D.a_c.gp(0)
p.c=4
p.d=B.bw
d.ah(new A.p(w,t),new A.p(v+q*24,s),p)
p=new A.ao(B.P,B.M,B.R,B.S,B.Q)
p.r=o.gp(0)
d.N(new A.p(v+q*26,u),10,p)}}else{w=e.a2(0,D.eta)
$.S()
v=A.L()
v.r=D.bh2.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bt(e.a2(0,D.etb),16,60)
w=A.L()
w.r=o.gp(0)
d.bZ(v,w)}},
bIw(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.Xu?0.045:0,a1=a2.c
J.bp(a1.save())
a1.translate(a3.a,a3.b+e)
a2.hW(0,a0)
for(w=0;w<2;++w){v=D.dtz[w]
u=d.ay&&d.r!==D.Xu&&v>0
J.bp(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.S()
s=new A.ao(B.P,B.M,B.R,B.S,B.Q)
s.r=D.bw9.gp(0)
a2.N(B.J,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ao(B.P,B.M,B.R,B.S,B.Q)
s.r=D.bol.gp(0)
a2.N(B.J,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ao(B.P,B.M,B.R,B.S,B.Q)
q.r=B.bh.gp(0)
q.c=2
a2.ah(B.J,new A.p(s*9,t*9),q)}a1.restore()}p=A.u7(D.fag,B.fS,B.fS,B.is,B.hU)
$.S()
t=A.L()
t.sav(A.jB(D.epd,B.a8Y,D.djl,G.a4X,B.x,f))
a2.an(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ao(B.P,B.M,B.R,B.S,B.Q)
s.r=D.ddh[B.o.F(o,4)].gp(0)
a2.ar(new A.a1(t,-26,t+10,-19),s)}n=d.r===D.Bi&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a1(s,-66,q,-36)
J.bp(a1.save())
a1.clipRRect(A.nS(A.bn(l,B.mw)),$.np(),!0)
k=new A.ao(B.P,B.M,B.R,B.S,B.Q)
k.r=D.YR.gp(0)
a2.ar(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.Bi?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.SJ(a2,new A.p(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aME,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bn(l,B.mw)
i=new A.ao(B.P,B.M,B.R,B.S,B.Q)
i.r=D.akD.gp(0)
i.b=B.a9
i.c=2
a2.an(j,i)}d=A.bn(D.UP,B.mw)
t=A.L()
t.r=D.YR.gp(0)
a2.an(d,t)
J.bp(a1.save())
a1.clipRRect(A.nS(A.bn(D.UP,B.mw)),$.np(),!0)
C.SJ(a2,new A.p(D.UP.gbx().a,-10),0,0,0.7,-0.1,f,f,D.aME,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bn(D.UP,B.mw)
d=A.L()
d.r=D.akD.gp(0)
d.b=B.a9
d.c=2
a2.an(t,d)
d=A.L()
d.r=Al.Gm.gp(0)
a2.N(D.erk,4,d)
d=A.L()
d.r=D.G7.gp(0)
a2.ar(D.fbp,d)
for(w=0;w<3;++w){v=D.dtB[w]
d=A.bn(new A.a1(v,-96,v+28,-79),B.iF)
t=new A.ao(B.P,B.M,B.R,B.S,B.Q)
t.r=D.Gl.gp(0)
a2.an(d,t)}a1.restore()},
aE(d){return!1}}
C.aBR.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bgW.prototype={}
C.aBT.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bgX.prototype={}
C.aBU.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bgY.prototype={}
C.a6J.prototype={
B(d){var w=null
return new A.a5(1/0,this.c,A.b2(w,w,w,new C.bju(w),B.az),w)}}
C.bju.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dry[B.o.F(n,6)]
k=$.S()
j=new A.ao(B.P,B.M,B.R,B.S,B.Q)
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
k=new A.ao(B.P,B.M,B.R,B.S,B.Q)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aE(d){return!1}}
C.tJ.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aI(w,w,w,w,B.Qb,w,w,w,new C.bSh(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a2,w,w,w,D.fsq,w,w,w),1)],v)
B.d.u(u,this.e)
return A.c4(w,D.YC,A.r(w,A.bm(!0,A.x(A.a([D.c6p,new A.D(D.bIw,A.A(u,B.l,w,B.e,B.i,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.b9i,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.IB.prototype={
B(d){var w=null,v=this.d,u=C.aR8(v),t=C.ilj(v),s=B.c.j(0.08),r=A.l(18),q=A.K(B.cT.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fuW,w,w,w)],x.p)
if(this.e)p.push(D.evB)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.h4,w,w,w))
if(t!=null)p.push(new A.D(B.uE,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.AX,w,w,w),w))
return A.r(w,A.x(p,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.n),w,w,w,w,B.bI,w,w,w)}}
C.Wu.prototype={
S(){return new C.bmi(A.T(x.N,x.S),B.o.F(Date.now(),1e5))},
cYq(d){return this.f.$1(d)},
ge3(){return this.d}}
C.bmi.prototype={
gSW(){var w=this.d
return w===$?this.d=this.a.c:w},
Y(){this.a4()
this.Px()},
Px(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Px=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bT2(u.a.d),$async$Px)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.dhl[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bT1(p,(o===$?u.d=q.c:o).a,r),$async$Px)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.e2d(u,n))
return A.h(null,v)}})
return A.i($async$Px,v)},
uC(d){return this.coS(d)},
coS(d){var w=0,v=A.j(x.H),u=this,t
var $async$uC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a6(t,!1).ce(A.ec(new C.e2e(d),!1,null,x.H)),$async$uC)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.Px()
return A.h(null,v)}})
return A.i($async$uC,v)},
gb6B(){var w,v,u,t=C.Na(this.gSW()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)s.push(B.a.i(w[u].b))
return s},
a2x(d){return this.cw3(d)},
cw3(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a2x=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.I)(d),++s)r.push(d[s].aj())
w=2
return A.b(u.a.cYq(r),$async$a2x)
case 2:if(u.c!=null)u.m(new C.e2f(u,r))
return A.h(null,v)}})
return A.i($async$a2x,v)},
OR(d){return this.bRf(d)},
bRf(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$OR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hga(t.gSW())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.MV("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a6(s,!1).ce(A.ec(new C.e2b(q),!1,null,r)),$async$OR)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.I)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bj(j,new C.e2c(p))
o=s.length
B.d.c9(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a2x(A.cX(s,0,A.dB(2,"count",x.S),r).dn(0)),$async$OR)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OR,v)},
XP(d,e){return this.bOP(0,e)},
bOP(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$XP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cg(null,null,!0,null,new C.e2a(e),o,null,!0,!0,x.y),$async$XP)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hga(u.gSW()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.I)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a2x(o),$async$XP)
case 5:case 3:return A.h(null,v)}})
return A.i($async$XP,v)},
aad(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e27(this,j):h
o=o?0.55:1
w=A.ar(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.l(20)
u=A.K(B.aT,B.r,1)
t=A.a([new A.ab(0,B.G,g.j(0.35),B.cz,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.VE,p,p,p),B.b1],s)
q=A.l(10)
r.push(A.r(p,A.d(i,p,p,p,p,p,p,D.ftj,p,p,p),B.f,p,p,new A.o(B.hJ,p,p,q,p,p,B.n),p,p,p,p,B.CE,p,p,p))
return A.az(p,A.d3(A.r(p,A.x(A.a([A.A(r,B.l,p,B.e,B.i,0,p,p),B.b1,A.d(e,p,2,p,p,p,p,D.fBb,p,p,p),B.cR,A.d(f,p,3,B.a2,p,p,p,D.fu1,p,p,p)],s),B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a8(B.aA,B.aD,B.x,w,p,p),B.n),p,p,p,p,B.yO,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
Xi(d,e,f,g,h,i){return this.aad(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.Na(s.gSW()),p=s.gSW(),o=C.aR8(s.e),n=C.hga(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e2g(s),k=C.hGy(p,1).length,j=C.hGK(p,1).length,i=C.hHE(p,1).length,h=B.c.j(0.07),g=A.l(20),f=A.K(B.cT.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,K.abP,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.fyF,r,r,r),a0=q.b.length,a1=x.p
g=A.r(r,A.A(A.a([e,B.bd,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.VY,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.q0,r,r,r),D.fXH],a1),B.l,r,B.e,B.i,0,B.p)],a1),B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(h,r,f,g,r,r,B.n),r,r,r,r,B.bI,r,r,r)
f=s.Xi("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aB,new C.e2h(s,p),l.$1("kahoot"))
h=s.Xi("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lC,new C.e2i(s,p),l.$1("fire"))
a0=s.Xi("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.wm,new C.e2j(s,p),l.$1("catch"))
j=j!==0?new C.e2m(s,p):r
j=s.aad("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hx,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e2n(s,p):r
i=s.aad("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.kM,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.Xi("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.f_,new C.e2o(s,p),l.$1("journey"))
k=k!==0?new C.e2p(s,p):r
k=A.a([g,B.aO,D.h0H,B.T,A.l_(0.98,A.a([f,h,a0,j,i,e,s.aad("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.es,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.Xi("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d3,new C.e2q(s,p),l.$1("school"))],a1),2,12,12,r,B.e_,!0),B.dc,A.A(A.a([D.bKm,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.ftn,r,r,r)],a1),B.l,r,B.e,B.i,0,r,r),B.T],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.I)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aN(18,18)
u=new A.ay(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fIi,B.bd,new A.bz(1,B.bb,A.x(A.a([A.d(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hu,r,r,r),A.d(""+v.gapw(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.AX,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),r)],a1)
if(v.gapw(0).length>=2){f=D.lD.j(0.2)
t=new A.ay(D.lD,1,B.r,-1)
g.push(A.az(r,A.r(r,A.X(B.hm,D.lD,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bG(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e2r(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cT.j(0.2)
t=new A.ay(B.cT,1,B.r,-1)
f=A.az(r,A.r(r,A.X(B.j9,B.cT,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bG(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e2s(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fi.j(0.2)
t=new A.ay(B.fi,1,B.r,-1)
B.d.u(g,A.a([B.bn,f,B.bn,A.az(r,A.r(r,A.X(B.ek,B.fi,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bG(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e2t(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.r(r,new A.c8(B.aL,B.e,B.i,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bG(u,u,u,u),new A.be(h,h,h,h),r,r,B.n),r,r,r,B.da,B.bk,r,r,r))}if(s.a.e){j=m?new C.e2k(s):new C.e2l(a2)
i=A.l(18)
h=A.K(m?B.cT:B.aT,B.r,2)
g=m?B.cT.j(0.12):B.dr
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.az(r,A.r(r,A.as(A.d(f,r,r,r,r,r,r,A.m(r,r,m?B.cT:B.aF,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.n),r,r,r,r,B.Oa,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.h1D)
k.push(B.aC)
k.push(D.atq)
return new C.tJ("Family Games \xb7 "+p.b,A.cm(k,r,r,D.bEx,r,r,B.ah,!1),B.f7,r)}}
C.a0a.prototype={
a7(){return"_KPhase."+this.b}}
C.amg.prototype={
S(){return new C.amh(D.b1e)},
gd1(){return this.e}}
C.amh.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a3()},
fX(d){var w,v=this
v.m(new C.bSC(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.dh(B.fN,new C.bSD(v))},
aPW(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.m(new C.bSs(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.dh(B.fg,new C.bSt(w))},
L7(d){var w
if(this.d!==D.ade)return
w=this.at
if(w!=null)w.a1(0)
this.b6x(d)},
b6x(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.j.V(500+500*B.j.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bSy(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cy(B.rW,v.gix(v))},
cKZ(d){var w=this
if(w.d!==D.X1)return
if(w.e+1>=w.a.w.length)w.YA()
else{w.m(new C.bSz(w))
w.aPW()}},
YA(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$YA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bGP(p,u.w,t)
u.m(new C.bSv(u,s))
w=2
return A.b(C.BX(u.a.e,s),$async$YA)
case 2:r=e
t=u.a
w=3
return A.b(C.BY(t.e,t.f,t.r,u.f),$async$YA)
case 3:q=e
if(u.c!=null)u.m(new C.bSw(u,r,q))
return A.h(null,v)}})
return A.i($async$YA,v)},
cLO(){var w,v,u,t,s=this,r=s.a,q=new A.e2()
q.cY(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.b5("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.e0(r,q)
for(r=A.cX(r,0,A.dB(4,"count",x.S),A.U(r).c),u=r.$ti,r=new A.bR(r,r.gJ(0),u.k("bR<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b5(t,B.j.V(w*(0.35+q.ai()*0.5)),!1))}B.d.aZ(v,new C.bSA())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b1e===r){w=A.a([D.fY5,B.W,A.d(s,t,t,t,t,t,t,B.L1,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.ftv,t,t,t))
w.push(B.aC)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.B2,B.K,t,t))
w.push(B.e4)
w.push(C.uA("Play",u.geY(u),B.cT,B.hm,D.fC))
w=A.as(new A.D(B.eA,A.x(w,B.l,t,B.e,B.O,0,B.p),t),t,t,t)
break A}if(D.b1f===r){w=A.as(A.d(""+u.z,t,t,t,t,t,t,D.fBJ,t,t,t),t,t,t)
break A}if(D.ade===r||D.X1===r){w=u.crt()
break A}if(D.b1g===r){w=u.cce()
break A}w=t}return new C.tJ(s,w,B.f7,t)},
crt(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.X1,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aW7,j,j,j),B.b1],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.KY,j,j,j))
g.push(B.au)
f=A.l(14)
g.push(A.r(j,A.d(""+k.f,j,j,j,j,j,j,B.iG,j,j,j),B.f,j,j,new A.o(B.by,j,j,f,j,j,B.n),j,j,j,j,B.Cr,j,j,j))
g=A.A(g,B.l,j,B.e,B.i,0,j,j)
f=A.l(6)
w=i?0:B.j.D(k.as/k.a.w[k.e].r,0,1)
f=A.bx(f,A.ks(B.by,j,k.as<5?B.fi:B.cT,9,j,w,j),B.aq)
w=A.l(22)
v=A.K(B.cT,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.m(j,j,e?D.lD:G.ns,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.T,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.fsz,B.K,j,j)],h),B.l,j,B.e,B.O,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fDV,B.K,j,j)
w=A.E(A.r(j,A.as(u,j,j,j),B.f,j,j,new A.o(D.qo,j,v,w,j,j,B.n),j,j,j,j,B.fv,j,j,1/0),3)
v=A.a([],h)
for(u=k.gix(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bSx(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aDz[o]
m=new A.aN(16,16)
l=new A.ay(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.d(D.aDU[o],j,j,j,j,j,j,D.fuv,j,j,j),B.au,new A.bz(1,B.bb,A.d(r[t],j,3,B.a2,j,j,j,D.fts,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.arU)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bZ6)
v.push(A.az(j,new A.SZ(A.r(j,new A.c8(B.aL,B.e,B.i,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bG(l,l,l,l),new A.be(m,m,m,m),V.aBW,j,B.n),j,j,j,j,B.f5,j,j,j),p,B.b_,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.am,f,B.ae,w,B.ae,A.E(A.l_(1.45,v,2,10,10,j,B.e_,!1),4)],h)
if(i)h.push(D.euR)
return new A.D(B.a0R,A.x(h,B.l,j,B.e,B.i,0,B.p),j)},
cce(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cLO(),m=x.p,l=A.a([D.bdj,A.as(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.q0,o,o,o),o,o,o),A.as(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.VJ,o,o,o),o,o,o),B.aO],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cT.j(0.25):B.dr
u=new A.aN(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.cT:B.by,1,B.r,-1)
q=A.d(w<3?D.djD[w]:""+(w+1),o,o,o,o,o,o,B.mB,o,o,o)
s=s?B.u:B.U
l.push(A.r(o,new A.c8(B.aL,B.e,B.i,B.l,o,B.p,o,0,A.a([new A.a5(34,o,q,o),new A.bz(1,B.bb,A.d(t.a,o,o,o,o,o,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.d(""+t.b,o,o,o,o,o,o,B.iG,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bG(r,r,r,r),new A.be(u,u,u,u),o,o,B.n),o,o,o,B.cy,B.f0,o,o,o))}l.push(B.W)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.IB(m,v,p.CW,o))
l.push(B.aO)
l.push(A.as(C.uA("Back to the games",new C.bSu(p),B.cT,B.k7,D.fC),o,o,o))
return A.cm(l,o,o,B.fv,o,o,B.ah,!1)}}
C.U9.prototype={
S(){return new C.amd(A.T(x.de,x.er))}}
C.amd.prototype={
gD7(){var w,v=this,u=v.d
if(u===$){w=C.hm4(v.a.c.aj())
v.d!==$&&A.bE()
v.d=w
u=w}return u},
glT(d){var w,v,u=this,t=u.e
if(t===$){w=u.gD7().b
v=$.ax()
u.e!==$&&A.bE()
t=u.e=new A.au(new A.ba(w,B.b5,B.aP),v)}return t},
cff(d){return this.f.c3(0,d,new C.bS2(d))},
Y(){this.a4()
var w=this.gD7().c
if(w.length===0)w.push(C.h7F(null,0,20,""))},
t(){var w,v,u=this.glT(0)
u.U$=$.ax()
u.P$=0
for(u=this.f,u=new A.dq(u,u.r,u.e);u.C();)for(w=J.aT(u.d);w.C();){v=w.gR(w)
v.U$=$.ax()
v.P$=0}this.a3()},
cKP(){if(this.gD7().c.length>=12)return
this.m(new C.bS3(this))},
jI(d){var w,v,u=this,t=u.gD7()
t.b=B.a.i(u.glT(0).a.a)
w=t.gapw(0)
if(t.b.length===0||w.length<2){u.c.L(x.q).f.T(D.flq)
return}v=t.c
B.d.a8(v)
B.d.u(v,w)
v=u.c
v.toString
A.a6(v,!1).O(t)},
B(d){var w,v,u=this,t=null,s=new C.bSd(),r=x.p,q=A.a([A.bP(!1,D.fNi,t,t,!0,t,t,t,u.gbqg(u),t,t)],r),p=A.a([D.h1e,B.ae,A.aM(t,B.Z,!1,t,!0,B.t,t,A.aO(),u.glT(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ak,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ac,t,t,t,t,t,t,t,t,t,t,t,B.h4,!0,B.a5,t,B.ao,t,t,t,t),B.aC],r)
for(w=0;v=u.gD7().c.length,w<v;++w)B.d.u(p,A.a([new A.fh(new C.bSc(u,w,s),t)],r))
if(v<12)p.push(A.as(C.uA("\uff0b Add a question",u.gcKO(),B.aT,t,B.c),t,t,t))
return new C.tJ("Make your game",A.cm(p,t,t,D.bEu,t,t,B.ah,!1),q,t)}}
C.ark.prototype={
S(){return new C.aFp(A.a([],x._))},
bv(){return this.r.$0()},
qp(){return this.w.$0()},
ge3(){return this.c}}
C.aFp.prototype={
Y(){var w,v
this.a4()
this.wy()
w=this.a
v=w.c
if(v.length!==0)C.a8t(v,w.e,w.d.w)},
wo(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hiT(r,t.e,!1,s.w,new C.e3T(u),null,s),$async$wo)
case 2:w=3
return A.b(u.wy(),$async$wo)
case 3:return A.h(null,v)}})
return A.i($async$wo,v)},
a0J(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a0J=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hiT(r,t.e,!0,s.w,new C.e3S(u),null,s),$async$a0J)
case 2:w=3
return A.b(u.wy(),$async$a0J)
case 3:return A.h(null,v)}})
return A.i($async$a0J,v)},
wy(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wy=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Bt(q.a.c),$async$wy)
case 7:p=e
if(q.c!=null)n=q.e||J.cJ(p)
else n=!1
if(n)q.m(new C.e3V(q,p))
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
break}q.m(new C.e3W(q,o))
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
if(q.c!=null&&q.e)q.m(new C.e3X(q))
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
o.L(s).f.T(D.fl0)
w=3
return A.b(C.Hq(t.a.c),$async$Pc)
case 3:r=e
w=4
return A.b(C.fY7(t.a.c,r),$async$Pc)
case 4:q=e
w=5
return A.b(C.Hq(t.a.c),$async$Pc)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.e3R(t,p))
o=t.c.L(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.T(A.b3(null,null,null,q?B.dL:B.d0,null,B.t,null,s,null,B.lI,null,null,null,null,null,null,null,null,null,null))
t.a.qp()
case 1:return A.h(u,v)}})
return A.i($async$Pc,v)},
Iv(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Iv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iu_(l),$async$Iv)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hWS(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b1w(q,p.e,l,"Each family tree costs $"+B.j.ad(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Iv)
case 4:if(!e||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
p=C.hCO(r)
o=Date.now()
n=t.a.c
m=new C.kZ(l,r.toUpperCase(),p,!0,B.Z,D.DJ,new A.V(o,0,!1),0,n,D.uN,B.cf)
w=5
return A.b(C.a47(n,m),$async$Iv)
case 5:w=6
return A.b(t.wy(),$async$Iv)
case 6:t.a.bv()
t.a.qp()
if(t.c==null){w=1
break}t.F3(m)
case 1:return A.h(u,v)}})
return A.i($async$Iv,v)},
F3(d){return this.ckb(d)},
ckb(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$F3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Bt(u.a.c),$async$F3)
case 2:n=l.nA(k.dG(f,new C.e3U(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hC(m,new C.are(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$F3)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a47(u.a.c,o),$async$F3)
case 6:case 5:w=7
return A.b(u.wy(),$async$F3)
case 7:u.a.qp()
return A.h(null,v)}})
return A.i($async$F3,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.um(p)
if(r.e)return A.as(A.n5(q,p?B.bv:B.bh,q,q,q,q,q,q,q,q),q,q,q)
if(J.ct(r.d)){w=p?B.eg:B.c
v=A.l(15)
u=A.aH(!1,B.a3,!0,q,A.aP(!1,q,!0,A.r(q,D.bWK,B.f,q,q,new A.o(B.aV.j(0.12),q,A.K(B.aV,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cX,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcjf(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.as,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Gr(A.r(q,A.x(A.a([u,B.aO,t,B.T,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.m(q,q,p?B.bv:B.bh,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.e4,A.bJ(D.h4s,q,r.gaTd(),A.bo(B.bQ,q,q,q,q,q,Au.a1f,q,new A.b9(A.l(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.i,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bHc,q,q,1/0),15,B.ag,1.05,D.ad1,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.as,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b1],v)
if(J.cJ(r.d))w.push(A.aI(q,q,q,q,A.X(B.zE,B.aV,q,q,q,q),q,q,q,new C.e3Z(r),q,q,q,q,"Sync family trees with database",q))
if(J.cJ(r.d))w.push(A.aI(q,q,q,q,A.X(B.zA,B.aV,q,q,q,q),q,q,q,r.gah_(),q,q,q,q,"Transfer / backup file",q))
w.push(A.di(E.asP,q,D.fKA,r.gaTd(),A.bo(B.bQ,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.i,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ae)
u.push(new C.Gr(r.cGY(J.t(r.d,s),o),14,B.ag,1,D.ad1,q))
B.d.u(w,u)}return A.x(A.a([p,B.aC,A.x(w,B.l,q,B.e,B.i,0,B.p)],v),B.E,q,B.e,B.i,0,B.p)},
cGY(d,e){var w=null,v=e.a,u=v?B.eg:B.c,t=A.l(14),s=A.K((v?B.ei:B.bP).j(0.55),B.r,1),r=A.a([new A.ab(0,B.G,B.w.j(v?0.35:0.08),B.ev,10)],x.V),q=A.l(14),p=A.r(w,D.bVP,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.l(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.m(w,w,v?B.aS:B.as,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaqw(),m=d.d?"":" \xb7 Public",l=d.y===D.kX?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bG,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.m(w,w,v?B.bv:B.bh,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.i,0,B.p),1)
return A.r(w,A.aH(!1,B.a3,!0,w,A.aP(!1,q,!0,new A.D(B.bI,A.A(A.a([p,B.bd,l,A.X(B.P3,v?B.bv:B.bh,w,w,w,w)],k),B.l,w,B.e,B.i,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e3Y(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.are.prototype={
S(){return new C.aFm(A.a([],x._),A.aR(x.N),A.bae())},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aFm.prototype={
Y(){var w,v,u=this
u.a4()
u.d=u.a.w
u.adG()
w=u.a
v=w.c
if(v.length!==0)C.a8t(v,w.e,w.d.w)},
t(){var w=this.w
w.U$=$.ax()
w.P$=0
this.a3()},
a3H(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3H=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yy("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e3j(r),s,null,!0,!0,x.y),$async$a3H)
case 3:if(e!==!0||t.c==null){w=1
break}t.K5()
t.m(new C.e3k(t,r))
w=4
return A.b(t.uy(),$async$a3H)
case 4:t.a.bv()
t.yy(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a3H,v)},
cwD(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aW.x1$.push(new C.e3e(w,f,d,e))},
aVw(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dr()
u.ek(w,v,0,1)
u.k5(q,q,1,1)
this.w.sp(0,u)},
bd9(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eM(new Float64Array(16))
q.e7(r)
w=q.Dc()
v=B.j.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dr()
t.ek(r,u,0,1)
t.k5(v,v,1,1)
t.ek(-r,-u,0,1)
t.iY(0,q)
s.sp(0,t)},
adG(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$adG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Bt(u.a.c),$async$adG)
case 2:t=s.nA(r.dG(e,new C.e2G(u)))
if(t!=null&&u.c!=null)u.m(new C.e2H(u,t))
return A.h(null,v)}})
return A.i($async$adG,v)},
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
return A.b(C.hiT(o,t,!1,r,new C.e2Y(u),q.a,s),$async$wo)
case 2:n=A
m=J
w=3
return A.b(C.Hq(u.a.c),$async$wo)
case 3:p=n.nA(m.dG(e,new C.e2Z(u)))
if(p!=null&&u.c!=null)u.m(new C.e3_(u,p))
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
return A.b(C.a47(t,s),$async$uy)
case 2:return A.h(null,v)}})
return A.i($async$uy,v)},
a2d(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a2d=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.uB(q,t.a.c)){t.yy("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.ivc(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a2d)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.K5()
t.m(new C.e3d(t,r))
w=4
return A.b(t.uy(),$async$a2d)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2d,v)},
b3e(){var w=this.c
w.toString
A.a6(w,!1).ce(A.ec(new C.e2V(this),!1,null,x.H))},
a0X(){return this.ckd()},
ckd(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0X=A.e(function(d,e){if(d===1)return A.f(e,v)
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
q=new A.Y(s,new C.e3a(),A.U(s).k("Y<1>")).gJ(0)
s=A.et([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("ci.E"))
B.d.fg(p)
s=t.c
s.toString
w=3
return A.b(A.bU(B.L,null,new C.e3b(n,t,new C.um(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a0X)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.K5()
t.m(new C.e3c(t,o))
w=6
return A.b(t.uy(),$async$a0X)
case 6:case 5:if(o.a&&t.c!=null)t.b3e()
case 1:return A.h(u,v)}})
return A.i($async$a0X,v)},
WD(d){return this.bDQ(d)},
bDQ(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.uB(r,t.a.c)){t.yy("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e2u(t,d),r,null,!0,!0,x.P),$async$WD)
case 3:s=f
if(s==null){w=1
break}t.K5()
t.m(new C.e2v(t,s))
w=4
return A.b(t.uy(),$async$WD)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WD,v)},
a42(d){return this.cJc(d)},
cJc(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a42=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.cg(null,null,!0,null,new C.e3m(u,d,new C.um(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a42)
case 2:return A.h(null,v)}})
return A.i($async$a42,v)},
cgs(d){var w=this,v=w.d
v===$&&A.c()
if(C.uB(v,w.a.c))w.OS(d)
else w.a42(d)},
ajv(d,e){return this.cAB(d,e)},
cAB(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ajv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.e3g(new C.um(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ajv)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ajv,v)},
IA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$IA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kX?3:5
break
case 3:w=6
return A.b(C.h5R(t.a.c),$async$IA)
case 6:s=e
o=t.a
r=C.hqW(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ajv(!s,!r),$async$IA)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aRf(o,t.a.c)){t.yy("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lq(o,"Cancel","Remove",q.y===D.kX?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$IA)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aRb(t.a.c,t.d.a),$async$IA)
case 11:t.a.bv()
o=t.c
if(o==null){w=1
break}A.j3(o,null)
case 1:return A.h(u,v)}})
return A.i($async$IA,v)},
ab9(d){return this.bP5(d)},
bP5(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$ab9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.uB(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aU(s,new C.e2w(p))){o=A.U(s)
p.a=A.nA(new A.cM(new A.Y(s,new C.e2x(d),o.k("Y<1>")),new C.e2y(),o.k("cM<1,n>")))}q=p.a
if(q==null)q=d.d
t.K5()
t.m(new C.e2z(t,s,d,q))
w=3
return A.b(t.uy(),$async$ab9)
case 3:t.yy(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$ab9,v)},
OS(d){return this.bRj(d)},
bRj(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.uB(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a42(d),$async$OS)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.e2D(t,d),r,null,!0,!0,x.P),$async$OS)
case 6:s=f
if(s==null){w=1
break}t.K5()
t.m(new C.e2E(t,s))
w=7
return A.b(t.uy(),$async$OS)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OS,v)},
cHn(){var w=this,v=w.d
v===$&&A.c()
if(!C.uB(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.e3l(w))
w.uy()},
ZE(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aRf(n,t.a.c)){t.yy("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.ax()
r=new A.au(B.ax,s)
q=t.d.e
p=A.br(new A.N(q,t.gceW(),A.U(q).k("N<1,n>")).bY(0,new C.e2Q()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e2R(t,new C.um(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$ZE)
case 3:o=e
r.U$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.K5()
t.m(new C.e2S(t,p))
w=4
return A.b(t.uy(),$async$ZE)
case 4:t.yy("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$ZE,v)},
ceX(d){return B.a.i(d.toLowerCase())},
cj_(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.uB(v,w)
t=r.d
s=C.ijQ(t)
C.iu3(q,t.b,u,C.ijP(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.um(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Y(l,new C.e3t(),A.U(l).k("Y<1>")).gJ(0)
l=n?B.c4:B.i_
v=A.X(B.a2p,n?B.bv:B.bh,o,o,o,18)
u=x.p
v=A.a([new A.D(B.Cs,A.aP(!1,o,!0,new A.D(B.hL,A.A(A.a([v,B.bn,A.d("Back to Family Trees",o,o,o,o,o,o,A.m(o,o,n?B.bv:B.bh,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.O,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e3u(p,d),o,o,o,o,o,o,o),o),new A.D(B.nL,p.c1y(m),o)],u)
if(p.d.y===D.kX){t=B.tt.j(0.15)
s=A.l(12)
r=A.K(B.tt.j(0.45),B.r,1)
q=C.Ho(p.d,p.a.c)
v.push(new A.D(B.yR,A.r(o,A.A(A.a([D.c0g,B.au,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.hM,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b1],u)
if(C.uB(p.d,p.a.c)&&p.e.length!==0)u.push(new C.GD("Undo",B.pD,p.gcHm(),m,o,o))
u.push(new C.GD("Family Book",D.bQw,p.gciZ(),m,B.uk,o))
u.push(new C.GD("Family games",B.oI,p.gcja(),m,B.aB,o))
if(C.uB(p.d,p.a.c))u.push(new C.GD("Display settings",B.Dh,p.gckc(),m,B.b3,o))
u.push(new C.GD("Sync",B.zA,p.gah_(),m,o,o))
t=p.d
if(t.y===D.kX||C.aRf(t,p.a.c)){t=p.d.y===D.kX?"Remove shared tree":"Delete tree"
u.push(new C.GD(t,B.ek,p.gbPf(),m,B.fi,o))}if(C.uB(p.d,p.a.c))u.push(new C.GD("Add member",B.wR,new C.e3v(p),m,B.bQ,o))
v.push(new A.D(Z.amB,A.A(u,B.l,o,B.e,B.i,0,o,o),o))
if(p.d.gaqw()===0){u=A.as(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.m(o,o,n?B.bv:B.bh,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cr(new C.e3w(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?O.a2t:A5.P4,o,o,o,o,o)
v.push(A.as(A.hs(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e3x(p),o),o,o,o))}return A.c4(o,l,A.bm(!0,A.x(v,B.E,o,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c1y(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.l(22)
v=A.a([new A.ab(0,B.G,B.fZ.j(0.35),B.dp,18)],x.V)
u=A.l(22)
t=A.ap(-26,A.X(B.zr,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aH(!1,B.a3,!0,m,A.aP(!1,m,!0,A.r(m,D.c3y,B.f,m,m,new A.o(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cX,!0,m,m,m,m,m,m,m,m,m,m,m,n.gah_(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.fvz,m,m,m)
r=r.gaqw()
p=n.d.gaqw()===1?"member":"members"
o=x.p
p=A.a([s,B.bd,A.E(A.x(A.a([q,B.bG,A.d(""+r+" "+p,m,m,m,m,m,m,A.m(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.i,0,B.p),1)],o)
if(C.uB(n.d,n.a.c))p.push(A.aI(m,m,m,m,D.c0u,m,m,m,n.gcu0(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.i,0,m,m)
r=n.d.d
q=r?B.jL:B.n7
r=r?"Private":"Public"
r=A.E(n.ax4(q,"Privacy",r,n.a.d.w?n.gcGh():m),1)
q=A.E(n.ax4(B.wW,"Tree code",n.d.c,new C.e2F(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ae,A.A(A.a([r,B.af,q,B.af,A.E(n.ax4(D.bSc,"Collaborators",p,n.gc6k()),1)],o),B.l,m,B.e,B.i,0,m,m)],o)
if(n.d.y===D.kX){s=B.c.j(0.15)
B.d.u(p,A.a([B.T,A.aH(!1,B.a3,!0,A.l(999),A.aP(!1,A.l(999),!0,new A.D(B.hi,A.A(A.a([A.X(B.oK,B.c,m,m,m,14),B.e8,A.d("View only",m,m,m,m,m,m,B.aWc,m,m,m)],o),B.l,m,B.e,B.O,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.aj)],o))}return A.r(m,A.bx(u,new A.an(B.a0,m,B.ad,B.t,A.a([t,new A.D(B.GX,A.x(p,B.E,m,B.e,B.i,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.c7S,B.n),m,m,m,m,m,m,m,1/0)},
ax4(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aH(!1,B.a3,!0,A.l(14),A.aP(!1,A.l(14),!0,new A.D(K.anO,A.x(A.a([A.X(d,B.c,w,w,w,18),B.aw,A.d(e,w,1,B.a2,w,w,w,A.m(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.vJ,A.d(f,w,1,B.a2,w,w,w,An.AU,w,w,w)],x.p),B.l,w,B.e,B.i,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)}}
C.bh_.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gau(r)&&s.c.length===0)return B.bM
w=s.d
v=s.e
u=A.a([A.b2(t,t,t,new C.bh2(s,t),new A.av(w,v))],x.p)
r=r.gdP(r)
B.d.u(u,r.dN(r,new C.dhu(this),x.l))
r=s.c
B.d.u(u,new A.N(r,new C.dhv(this),A.U(r).k("N<1,v>")))
return new A.D(B.uJ,new A.a5(w,v,new A.an(B.a0,t,B.ad,B.f,u,t),t),t)}}
C.L2.prototype={}
C.GH.prototype={}
C.bh1.prototype={
gblG(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aL0.prototype={}
C.bh2.prototype={
bQV(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.S()
v=A.L()
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
q=A.L()
q.r=B.c.gp(0)
d.N(new A.p(u,w),9,q)
q=A.L()
q.r=B.bE.gp(0)
d.af(t,q)},
bQS(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aZ(a0,new C.dhP())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aU(a0,new C.dhQ(f))
t=new A.N(a0,new C.dhR(f),A.U(a0).k("N<1,G>")).bY(0,new C.dhS()).cF(0,1/0,B.rs)
w=f.a
d.ah(f,new A.p(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.I)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.p(o,v),p,e)
continue}l=J.lN(n)
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
w=A.L()
w.r=B.bQ.j(0.75).gp(0)
w.c=2.2
w.b=B.a9
w.d=B.bw
w.e=B.dT
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.I)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bQS(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.I)(v),++t){r=v[t]
if(r.c)this.bQV(d,w,r.a,r.b)}},
aE(d){return d.b!==this.b}}
C.bkO.prototype={
gccg(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aEa
switch(w.c.a){case 0:return D.d0S
case 1:return D.ddb
case 2:return D.dvt}},
gccj(){var w=this.c,v=C.hBZ(w.w),u=C.hBZ(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gccg(),p=t.c,o=N.bFp(p.f),n=t.gccj(),m=x.V,l=A.a([new A.ab(0,B.G,B.d.gal(q).j(0.35),B.cL,10)],m),k=r?B.as:B.c,j=A.K(r?B.as:B.c,B.r,2)
if(o!=null)w=A.tN(B.A,s,B.cl,B.c0,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.r(B.A,A.d(v,s,s,s,s,s,s,A.m(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a8(B.a7,B.aa,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.r(s,A.r(s,A.hY(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a8(B.aA,B.aD,B.x,q,s,s),B.a6),s,56,s,s,B.CI,s,s,56)],v)
k=t.d
if(k>0){j=A.l(10)
w=A.K(r?B.as:B.c,B.r,1.5)
l.push(A.ap(s,A.r(s,A.d(""+k,s,s,s,s,s,s,D.fGp,s,s,s),B.f,s,s,new A.o(B.ci,s,w,j,s,s,B.n),s,s,s,s,D.bJa,s,s,s),s,s,s,-6,-4,s))}k=r?B.cm:B.c
j=A.l(8)
w=A.K(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ab(0,B.G,B.w.j(r?0.3:0.06),B.dM,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.m(s,s,r?B.c:B.cm,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.m(s,s,r?B.aR:B.bh,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.az(s,new A.a5(84,112,A.x(A.a([new A.an(B.a0,s,B.ad,B.f,l,s),B.aw,A.r(s,A.x(p,B.l,s,B.e,B.O,0,B.p),B.f,s,D.b7t,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bJl,s,s,s)],v),B.l,s,B.e,B.i,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bg4.prototype={
a5(d,e){var w,v,u,t,s
$.S()
w=A.L()
v=this.b
u=v?B.c:D.bkv
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.N(new A.p(s,t),1,w)},
aE(d){return d.b!==this.b}}
C.byQ.prototype={
B(d){var w=this,v=null,u=new C.fnv(w),t=w.c,s=t?B.cm:B.c,r=A.l(12),q=u.$3(B.i2,"Zoom in",w.d),p=A.r(v,v,B.f,t?B.by:B.ft,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.wT,"Zoom out",w.e)
return A.aH(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.r(v,v,B.f,t?B.by:B.ft,v,v,v,1,v,v,v,v,v,22),u.$3(B.aqj,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.O,0,B.p),B.f,s,4,v,B.dx,v,v,v,B.aj)}}
C.boa.prototype={
B(d){var w=this,v=null,u=B.bQ.j(0.15),t=A.K(B.bQ,B.r,2),s=w.e,r=x.p
t=A.az(v,A.r(v,A.x(A.a([A.X(s?O.a2t:A5.P4,B.bQ,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fCp,v,v,v)],r),B.l,v,B.ba,B.i,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fA9,B.K,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.u(t,new A.N(s,new C.eYx(w),A.U(s).k("N<1,v>")))
B.d.u(u,t)}return new A.a5(84,v,A.x(u,B.l,v,B.e,B.i,0,B.p),v)}}
C.a0n.prototype={
S(){return new C.aDQ()},
bv(){return this.Q.$0()},
ge3(){return this.w}}
C.aDQ.prototype={
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
if(t==null)w=C.ilk(w.r,w.f)
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
o=C.hqW(p.y,p.w)
w=3
return A.b(A.lB(t.a.w,B.JC),$async$Ql)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b1w(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Ql)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hWT(p.y,p.w)
t.a.bv()
case 5:w=7
return A.b(Aw.HA(78,800),$async$Ql)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dxN(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Ql,v)},
cci(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
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
s=v.aG8(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).O(s)},
aaL(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aaL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dxM(r),s,null,!0,!0,x.y),$async$aaL)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$aaL,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.um(j),h=l.a.e,g=A.U(h).k("Y<1>"),f=A.C(new A.Y(h,new C.dxW(l),g),g.k("M.E"))
h=j?B.eg:B.c
g=A.l(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bHz,A.d(w,k,k,k,k,k,k,A.m(k,k,j?B.aS:B.as,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ap(k,A.h9(A.aP(!1,k,!0,new A.D(B.lN,A.X(B.ek,B.po,k,k,k,17),k),B.cX,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbLQ(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jY:B.iN
t=N.bFp(l.as)
if(l.as==null)s=A.X(B.pv,j?B.bv:B.bh,k,k,k,40)
else s=k
s=A.as(A.az(k,new A.an(B.a0,k,B.ad,B.t,A.a([A.hd(u,t,s,k,42),A.ap(0,A.hd(B.bQ,k,D.bUS,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gccf(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.c()
t=C.aDS(t,"Full name",B.mi,1,1,i,B.mz)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.W,new C.bkM(i,u,new C.dxX(l),k)],v),B.l,k,B.e,B.i,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.m(k,k,j?B.bv:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bAT],q)
o=l.a.e
B.d.u(p,new A.N(o,new C.dxY(),A.U(o).k("N<1,eL<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.m(k,k,j?B.bv:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bAV],q)
B.d.u(q,new A.N(f,new C.dy_(),A.U(f).k("N<1,eL<n?>>")))
o=A.x(A.a([t,B.am,new C.aex(i,r,"Who is their parent?",p,new C.dy0(l),k,o),B.aC,n,B.am,new C.aex(i,m,"Who is their spouse / partner?",q,new C.dy1(l),k,o)],v),B.al,k,B.e,B.i,0,B.p)
q=l.f
q===$&&A.c()
q=C.aDS(q,"Birth date",D.aps,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aDS(m,"Birth place",B.a2J,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aDS(n,"Date of death (if deceased)",D.arz,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aDS(p,"Occupation",B.a3W,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.ad,B.t,w,k),B.aC,s,B.bz,new C.aey(i,"Identity",u,k),B.ae,new C.aey(i,"Family links",o,k),B.ae,new C.aey(i,"Life details",A.x(A.a([q,B.W,m,B.W,n,B.W,p,B.W,C.aDS(r,"Notes",B.kY,5,3,i,k)],v),B.l,k,B.e,B.i,0,B.p),k),B.ae,new C.aDR(i,"Child order",l.ckr(l.at),new C.dy2(l),new C.dy3(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hfZ(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dy4(l):k
B.d.u(r,A.a([B.W,new C.aDR(i,"Visible in tree",u,w,new C.dy5(l),k)],v))}r.push(B.W)
w=j?B.jY:B.iN
u=A.l(14)
t=A.K(j?B.ei:B.bP,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.m(k,k,j?B.aS:B.as,k,k,k,k,k,k,k,k,14,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.r(k,A.iU(k,B.bQ,k,B.ag,k,new C.dy6(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.m(k,k,j?B.bv:B.bh,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,O.amg,k,k,k))
r.push(B.bz)
w=j?B.aS:B.as
j=j?B.ei:B.bP
r.push(A.A(A.a([A.E(A.dU(B.o4,new C.dxZ(d),A.dj(k,k,k,k,k,k,k,k,k,w,k,k,B.cp,k,new A.b9(A.l(14),B.a1),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bd,A.E(A.bJ(D.fcF,k,l.gcch(),A.bo(B.aV,k,k,0,B.c,k,B.cp,k,new A.b9(A.l(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.i,0,k,k))
r.push(B.aw)
return A.ei(B.f7,k,B.ag,h,new A.a5(420,k,A.cb(A.x(r,B.al,k,B.e,B.O,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),k),D.an7,k,B.ams,new A.b9(g,B.a1),k,k)},
ckr(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aey.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,v?B.bv:B.bh,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jY:B.iN,s=A.l(16)
return A.x(A.a([new A.D(B.a1j,u,w),A.r(w,this.e,B.f,w,w,new A.o(t,w,A.K(v?B.ei:B.bP,B.r,1),s,w,w,B.n),w,w,w,w,B.bk,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)}}
C.bkN.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.eg:B.c,r=A.l(12),q=A.K((t?B.ei:B.bP).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.m(u,u,t?B.aS:B.as,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.r(u,A.aM(u,B.Z,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bA(u,B.eO,u,B.t0,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.m(u,u,t?B.bv:B.bh,u,u,u,u,u,u,u,u,u,u,u,B.cE,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bQ,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ak,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ac,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aex.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.eg:B.c,s=A.l(12),r=A.K((u?B.ei:B.bP).j(0.85),B.r,1),q=A.X(B.tb,u?B.bv:B.bh,v,v,v,v),p=A.m(v,v,u?B.aS:B.as,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.eg:B.c
return A.r(v,new A.Es(A.a5D(v,o,A.d(w.f,v,v,v,v,v,v,A.m(v,v,u?B.bv:B.bh,v,v,v,v,v,v,v,v,v,v,v,B.cE,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.kx,v,v,v)}}
C.bkM.prototype={
B(d){var w=new C.dy7(this)
return A.A(A.a([w.$3(D.wG,"Male",B.PP),B.af,w.$3(D.oz,"Female",B.Pz),B.af,w.$3(D.z3,"Other",B.nP)],x.p),B.l,null,B.e,B.i,0,null,null)}}
C.aDR.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jY:B.iN,r=A.l(14),q=A.K(t?B.ei:B.bP,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.m(v,v,t?B.aS:B.as,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.r(v,A.A(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.m(v,v,t?B.bv:B.bh,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.i,0,B.p),1),new C.aK2(u,B.wT,w.f,v),B.bn,new C.aK2(u,B.i2,w.r,v)],o),B.l,v,B.e,B.i,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ez,v,v,v)}}
C.aK2.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bQ.j(0.12)
else w=s.c.a?B.eg:B.c
v=A.l(10)
u=A.l(10)
if(p)t=B.bQ
else t=(s.c.a?B.bv:B.bh).j(0.4)
return A.aH(!1,B.a3,!0,v,A.aP(!1,u,!0,new A.a5(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.aj)}}
C.aez.prototype={
bV6(d){switch(d.a){case 0:return B.bQ
case 1:return B.bE
case 2:return B.cB}},
bV7(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b_3(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
AN(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.eg:B.c
u=A.l(12)
t=A.K((w?B.ei:B.bP).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.u(r,A.a([A.X(f,B.bQ,p,p,p,18),B.au],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.m(p,p,w?B.bv:B.bh,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.aw,A.d(o,p,p,p,p,p,p,A.m(p,p,w?B.aS:B.as,p,p,p,p,p,p,p,p,14,p,p,B.U,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.i,0,B.p),1))
return A.r(p,A.A(r,B.E,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cy,B.yN,p,p,1/0)},
afm(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,v?B.bv:B.bh,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jY:B.iN,s=A.l(16),r=A.K(v?B.ei:B.bP,B.r,1)
return A.x(A.a([new A.D(B.a1j,u,w),A.r(w,A.x(e,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bV,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hHr(r,q),o=q.c,n=t.bV6(o),m=N.bFp(q.f),l=t.e.a,k=l?B.eg:B.c,j=A.l(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.m(s,s,l?B.aS:B.as,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kX?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.m(s,s,l?B.bv:B.bh,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.ab(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.as(A.r(s,A.hd(u,m,m==null?A.X(B.pv,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.eC,s,s,s),s,s,s)
w=n.j(0.14)
v=A.l(20)
u=A.K(n.j(0.45),B.r,1)
v=A.as(A.r(s,A.d(t.bV7(o),s,s,s,s,s,s,A.m(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.me,s,s,s),s,s,s)
u=x.p
i=A.a([t.AN("Full name",i,B.mi)],u)
if(p>0)i.push(t.AN("Child order","#"+p,B.PF))
r=A.a([h,B.aw,r,B.aO,l,B.W,v,B.bz,t.afm("Identity",i),B.ae,t.afm("Life details",A.a([t.AN("Birth date",q.w,D.aps),t.AN("Birth place",q.x,B.a2J),t.AN("Date of death",q.y,D.arz),t.AN("Occupation",q.z,B.a3W)],u)),B.ae,t.afm("Family links",A.a([t.AN("1. Parent",t.b_3(q.d),B.Hn),t.AN("2. Spouse",t.b_3(q.e),B.HD)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.u(r,A.a([B.ae,t.afm("Notes",A.a([t.AN("Notes",q,B.kY)],u))],u))
r.push(B.bz)
r.push(A.bJ(B.L8,s,new C.dyh(d),A.bo(B.aV,s,s,s,s,s,B.cp,s,new A.b9(A.l(14),B.a1),s,s,s)))
return A.eG(s,k,new A.cO(B.m2,A.cb(A.x(r,B.al,s,B.e,B.O,0,B.p),B.t,s,B.y,s,B.yU,s,s,B.ah),s),s,s,s,B.H_,s,B.d8,s,new A.b9(j,B.a1),s)}}
C.GD.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bv:B.bh
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.uL,A.h9(A.aH(!1,B.a3,!0,A.l(8),A.aP(!1,A.l(8),!0,new A.a5(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.aj),u,v.c,u,u),u)}}
C.arh.prototype={
f3(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.U(w).k("N<1,a9<n,@>>")
w=A.C(new A.N(w,new C.cfz(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jr(w,new C.cfA(),t,x.fO))
return s}}
C.ari.prototype={
S(){return new C.aFo(A.a([],x.bF))},
gd1(){return this.c}}
C.aFo.prototype={
Y(){this.a4()
this.Kc()},
Kc(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Kc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cfD(t.a.c),$async$Kc)
case 3:r=e
w=4
return A.b(C.Bt(t.a.c),$async$Kc)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rn(q,new C.e3G(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.e3H(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Kc,v)},
z6(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
L_(d,e){return this.cJT(d,e)},
cJT(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$L_=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.e3L(q,e))
t=3
w=6
return A.b(d.$0(),$async$L_)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.e3M(q))
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
return A.b(t.L_(new C.e3D(t),"Preparing download\u2026"),$async$Yo)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yo,v)},
Ys(d){return this.bSZ(d)},
bSZ(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ys=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pA(r,s.c,s.e),$async$Ys)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.L_(new C.e3E(t,d),"Preparing file\u2026"),$async$Ys)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ys,v)},
ahm(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ahm=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xS.cq().MJ(B.SM,B.uO,!0),$async$ahm)
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
return A.i($async$ahm,v)},
Z6(d){return this.c2t(d)},
c2t(d){var w=0,v=A.j(x.H),u=this
var $async$Z6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.L_(new C.e3F(u,d),"Restoring family trees\u2026"),$async$Z6)
case 2:return A.h(null,v)}})
return A.i($async$Z6,v)},
Z5(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Z5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ahm(),$async$Z5)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Z6(s),$async$Z5)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Z5,v)},
a34(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a34=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pA(r,s.c,s.e),$async$a34)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.L_(new C.e3K(t),"Creating QR code\u2026"),$async$a34)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a34,v)},
a2G(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2G=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DG()){t.z6("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).ce(A.ec(new C.e3I(),!0,null,x.N)),$async$a2G)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Z6(r),$async$a2G)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2G,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.BV:B.i_,m=o?D.akJ:B.aS,l=o?B.aM:B.bP,k=o?B.aS:B.as,j=new C.dhT(n,m,l,k,o?B.bN:B.bh)
l=A.aI(p,p,p,p,A.X(B.eM,k,p,p,p,20),p,p,p,new C.e3O(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eQ(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.m(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.u(t,A.a([A.E(C.dhr(!0,B.jN,B.aG,B.aG,q.r?p:q.gcAp(),j,s,"Show restore QR"),1),B.au],u))}s=q.e
r=q.r?p:q.gcwy()
t.push(A.E(C.dhr(!s,B.ju,B.b8,B.bc,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.i,0,p,p)
r=A.a([],u)
if(q.e)B.d.u(r,A.a([A.E(C.dhr(!1,B.i3,B.aV,B.bQ,q.r?p:q.gbSS(),j,"Photos & books included","Download all trees"),1),B.au],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dhr(!1,Q.zB,B.av,B.aQ,q.r?p:q.gc2q(),j,s,"Upload backup file"),1))
l=A.a([new C.bh0(v,l,p),B.l5,new C.adO(j,"QR restore",p),B.W,t,B.dc,new C.adO(j,"Backup files",p),B.W,A.A(r,B.l,p,B.e,B.i,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.l5,new C.adO(j,"One tree",p),B.W],u)
B.d.u(v,J.b7(q.d,new C.e3P(q,j),x.l))
B.d.u(l,v)}l=A.a([A.cm(l,p,p,B.a1b,p,p,B.ah,!1)],u)
if(q.r){v=A.l(18)
t=A.K(B.aV.j(0.35),B.r,1)
s=A.a([new A.ab(0,B.G,B.w.j(o?0.3:0.1),B.dp,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ap(24,A.bm(!0,A.r(p,A.A(A.a([O.aUA,B.bd,A.E(A.d(r,p,p,p,p,p,p,A.m(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.U,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.Cz,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c4(w,n,new A.an(B.a0,p,B.ad,B.t,l,p),p,!1,!1,p,p)}}
C.dhT.prototype={}
C.bh0.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.l(24)
u=A.a([new A.ab(0,B.G,B.aV.j(0.32),B.kE,28)],x.V)
t=A.ap(p,A.X(B.v8,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.l(18)
q=x.p
return A.r(p,new A.an(B.a0,p,B.ad,B.t,A.a([t,new A.D(B.ac,A.A(A.a([A.r(p,D.c31,B.f,p,p,new A.o(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.p3,A.E(A.x(A.a([D.fLD,B.T,A.d(w,p,p,p,p,p,p,A.m(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.i,0,B.p),1)],q),B.E,p,B.e,B.i,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.cb9,B.n),p,p,p,p,p,p,p,p)}}
C.adO.prototype={
B(d){var w=null
return A.A(A.a([A.r(w,w,B.f,w,w,new A.o(B.aV,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3),B.af,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)}}
C.bgZ.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.l(18),n=A.l(18),m=r.c,l=r.y,k=l?B.aG.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.ab(0,B.G,B.aG.j(0.1),B.cL,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.l(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aH(!1,B.a3,!0,q,A.aP(!1,o,!0,A.eB(A.d3(new A.D(E.a0P,A.x(A.a([A.r(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.t4,q,q,q),B.ae,A.d(r.e,q,q,q,q,q,q,A.m(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bG,A.d(r.f,q,q,q,q,q,q,A.m(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cE,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.i,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)}}
C.bh3.prototype={
B(d){var w=this,v=null,u=A.l(18),t=A.l(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aV.j(0.14),p=A.l(12),o=s.e,n=x.p
return A.aH(!1,B.a3,!0,v,A.aP(!1,u,!0,A.eB(new A.D(B.f0,A.A(A.a([A.r(v,D.c2d,B.f,v,v,new A.o(q,v,A.K(B.aV.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.t4,v,v,v),B.bd,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.m(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.m(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.i,0,B.p),1),A.X(B.i3,o,v,v,v,20)],n),B.l,v,B.e,B.i,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.aj)}}
C.a0H.prototype={
S(){return new C.aFn()},
gd1(){return this.c}}
C.aFn.prototype={
Y(){this.a4()
this.aai()},
aai(){var w=0,v=A.j(x.H),u=this,t
var $async$aai=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b4b(u.a.c,B.Ek),$async$aai)
case 2:t=e
if(u.c!=null)u.m(new C.e3y(u,t))
return A.h(null,v)}})
return A.i($async$aai,v)},
aiO(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aiO=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.e3z(q))
t=4
p=A.hsG(q.a.d,B.Ek)
if(p==null){n=A.bc("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.atx(n.e,m,l,B.Ek,p,n.f),$async$aiO)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.e3A(q))
q.c.L(x.q).f.T(D.fme)
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
if(q.c!=null)q.m(new C.e3B(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aiO,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.nD:B.qp,n=p?B.iJ:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eQ(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.h18,q,q,q,1,q,!0)
w=A.l(24)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.qg(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.m(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.r(q,A.x(A.a([B.T,u,B.bz,t,B.T,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.m(q,q,p?B.aR:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.ba,B.i,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.ac,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.m(q,q,p?B.ab:B.bx,q,q,q,q,q,q,q,q,q,q,q,B.U,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcwh()
if(u)u=B.Ky
else u=A.X(r.e===!0?B.hO:B.apr,q,q,q,q,q)
w=A.a([w,B.ae,v,B.ae,new A.a5(1/0,q,A.en(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ce,q,q,q),t,A.dj(q,q,q,q,q,q,q,q,q,B.aV,q,B.ha,q,q,q,new A.ay(B.aV.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.i0,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.m(q,q,p?B.aF:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.W)
w.push(new A.a5(1/0,q,A.bJ(B.B3,q,new C.e3C(d),A.bo(B.aV,q,q,q,q,B.ha,q,q,q,q,q,q)),q))
return A.c4(m,o,new A.D(B.ac,A.x(w,B.l,q,B.e,B.i,0,B.p),q),q,!1,!1,q,q)}}
C.a0I.prototype={
S(){return new C.bmj(A.A_(B.yC,B.ob,B.vf))}}
C.bmj.prototype={
t(){this.d.t()
this.a3()},
B(d){var w=null
return A.c4(A.eQ(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fTS,w,w,w,1,w,!0),B.w,A.zZ(this.d,B.c0,new C.e3Q(this,d)),w,!1,!1,w,w)}}
C.b01.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.m(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Sg,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lZ.prototype={}
C.a7v.prototype={
S(){return new C.blX(null,null)}}
C.blX.prototype={
Y(){var w=this,v=null
w.a4()
w.d=A.bl(v,B.rW,v,1,v,w)
w.e=A.bl(v,B.ot,v,1,v,w)
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
this.bz3()},
B(d){var w,v,u=this,t=B.d.dL(D.a6T,new C.dPU(u),new C.dPV())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cDj(A.c6(new A.ha(A.a([w,v],x.dS)),new C.dPW(u,t),null),!0)}}
C.blW.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b3F(d,e)
break
case"house":p.mj(d,e,D.dij)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdA()
$.S()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.N(new A.p(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mp(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.By(d,e,12)
p.yI(d,e,B.lg,5,14)
break
case"grocery":p.cla(d,e)
break
case"calculator":p.ckS(d,e)
break
case"lumber":p.cli(d,e)
break
case"kitchen":p.cld(d,e)
break
case"landscape":p.mj(d,e,D.diX)
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
w=A.L()
w.r=B.es.j(0.85).gp(0)
d.af(s,w)
p.By(d,e,8)
p.yI(d,e,B.ig,4,18)
break
case"plumbing":p.clr(d,e)
break
case"electrical":p.mj(d,e,D.duE)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.S()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.ar(new A.a1(0,0,0+e.a,0+e.b),u)
p.mp(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mp(d,e,B.m7.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.By(d,e,10)
break
case"store":p.clB(d,e)
break
case"paint_remodel":p.clm(d,e)
break
case"roofing":p.clt(d,e)
break
case"warehouse":p.clI(d,e)
break
case"vehicles":p.clG(d,e)
break
case"farm":p.cl4(d,e)
break
case"restaurant":p.cls(d,e)
break
case"tools":p.clE(d,e)
break
case"wallet":p.clH(d,e)
break
case"concrete":p.ckY(d,e)
break
case"blueprint":p.ckQ(d,e)
break
default:p.b3F(d,e)}},
mj(d,e,f){var w,v=new A.a1(0,0,0+e.a,0+e.b)
$.S()
w=A.L()
w.sav(new A.a8(B.aA,B.aD,B.x,f,null,null).aK(0,v))
d.ar(v,w)},
mp(d,e,f,g,h){var w,v,u,t=new A.p(e.a/2,e.b/2),s=e.gdA()/2-h
$.S()
w=A.L()
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
r=new A.ao(B.P,B.M,B.R,B.S,B.Q)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.N(new A.p(q+t*o,p+s*o),3.5,r)}},
By(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.j.F(t*0.17,0.9)
q=B.j.F(t*0.23,0.85)
$.S()
p=new A.ao(B.P,B.M,B.R,B.S,B.Q)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.N(new A.p(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b3F(d,e){var w,v=this
v.mj(d,e,D.dsX)
w=v.c
v.mp(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mp(d,e,B.bL.j(0.45),-w*3.141592653589793*1.4,22)
v.bQO(d,e,B.hz,w)
v.yI(d,e,B.c.j(0.7),6,8)},
bQO(d,e,f,g){var w,v,u,t,s,r
$.S()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.ar(new A.a1(16,r,t,r+3),w)}},
cla(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mj(d,e,D.cwS)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.aq(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.S()
m=new A.ao(B.P,B.M,B.R,B.S,B.Q)
m.r=D.dgs[B.o.F(t,4)].j(0.85).gp(0)
d.N(new A.p(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mp(d,e,B.c.j(0.35),w,16)
l.yI(d,e,B.ig,5,12)},
ckS(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mj(d,e,D.cx0)
w=i.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdA()
$.S()
q=A.L()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.N(new A.p(t/2,s/2),r*(0.18+u*0.08),q)
p=A.ft(h,B.ct,h,h,h,h,B.a5,B.bX,h,B.dE,B.bY)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dkN[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb1(0,new A.ep(r,h,h,B.cN,h,h,h,h,h,h,new A.F(!0,q,h,h,h,h,14+m*4,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e5()
p.a5(d,new A.p(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.aq(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cx2[o]
l=B.kN.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb1(0,new A.ep(m,h,h,B.cN,h,h,h,h,h,h,new A.F(!0,l,h,h,h,h,12+k*3,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e5()
p.a5(d,new A.p(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.aq(o,3)*0.38)+Math.sin(n)*6))}i.mp(d,e,B.c.j(0.35),w*1.5,14)
i.mp(d,e,B.ey.j(0.55),-v*3.141592653589793*2,8)
i.mp(d,e,B.ol.j(0.4),r*2.8,22)
i.yI(d,e,B.pj,8,10)
i.By(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.j.F(w+o*0.22,0.9)
$.S()
v=new A.ao(B.P,B.M,B.R,B.S,B.Q)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.p(12,j),new A.p(t,j),v)}},
cli(d,e){var w,v,u,t,s,r,q,p,o=this
o.mj(d,e,V.aBe)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bn(new A.a1(20,r,u,r+10),B.hV)
$.S()
p=new A.ao(B.P,B.M,B.R,B.S,B.Q)
p.r=A.ar(B.fA,B.of,(s+1)/2).gp(0)
d.an(q,p)}o.mp(d,e,B.fA.j(0.35),w,15)
o.By(d,e,8)},
cld(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mj(d,e,D.dgX)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.j.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.j.F(s*0.13,0.7)
$.S()
m=new A.ao(B.P,B.M,B.R,B.S,B.Q)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.N(new A.p(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mp(d,e,B.bL.j(0.4),-w*3.141592653589793*2.2,11)
l.yI(d,e,B.qe,4,14)},
clr(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mj(d,e,D.d4Y)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.j.F(s,0.12)
$.S()
o=new A.ao(B.P,B.M,B.R,B.S,B.Q)
o.b=B.a9
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.N(new A.p(w,u),q*(0.12+r*0.14+p),o)}n.yI(d,e,B.pn,6,12)
n.mp(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
clB(d,e){var w,v,u,t,s,r,q,p=this
p.mj(d,e,D.cKN)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bn(new A.a1(r,14,r+u,22),B.iF)
$.S()
q=new A.ao(B.P,B.M,B.R,B.S,B.Q)
q.r=A.ar(B.fq,B.bL,(s+1)/2).gp(0)
d.an(r,q)}p.mp(d,e,B.c.j(0.3),w,16)
p.By(d,e,8)
p.yI(d,e,B.wf,5,13)},
clm(d,e){var w,v,u,t,s,r,q
this.mj(d,e,D.dbn)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.j.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bn(new A.a1(r,q,r+8,q+(18+s*22)),B.hW)
$.S()
r=new A.ao(B.P,B.M,B.R,B.S,B.Q)
r.r=[B.ix,B.dn,B.bL,B.et][t].j(0.85).gp(0)
d.an(q,r)}this.mp(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
clt(d,e){var w,v,u,t,s,r,q
this.mj(d,e,D.d8K)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.j.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.S()
q=new A.ao(B.P,B.M,B.R,B.S,B.Q)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.p(u*(0.1+r),s),new A.p(u*(0.18+r),s+10),q)}this.yI(d,e,B.cx,7,11)},
clI(d,e){var w,v,u,t,s,r,q,p
this.mj(d,e,D.cNz)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bn(new A.a1(q,p,q+(t-s*8),p+16),B.hV)
$.S()
q=new A.ao(B.P,B.M,B.R,B.S,B.Q)
q.r=A.ar(B.cx,B.aS,(Math.sin(r)+1)/2).gp(0)
d.an(p,q)}this.mp(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
clG(d,e){var w,v,u,t,s,r,q
this.mj(d,e,D.dyX)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.j.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.bn(new A.a1(s,r,s+28,r+8),B.hV)
$.S()
q=new A.ao(B.P,B.M,B.R,B.S,B.Q)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.an(r,q)}this.By(d,e,6)},
cl4(d,e){var w,v,u,t,s,r,q,p
this.mj(d,e,D.dfw)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.S()
s=A.L()
s.r=B.m7.j(0.75).gp(0)
d.N(new A.p(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ao(B.P,B.M,B.R,B.S,B.Q)
p.r=B.hx.j(0.85).gp(0)
p.c=3
d.ah(new A.p(q,v),new A.p(q+s*6,t),p)}this.mp(d,e,B.m7.j(0.35),w,14)},
cls(d,e){var w,v,u,t,s,r,q=this
q.mj(d,e,D.di7)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bt(new A.p(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.S()
r=new A.ao(B.P,B.M,B.R,B.S,B.Q)
r.r=B.c.j(0.22).gp(0)
d.bZ(s,r)}q.yI(d,e,B.qe,5,16)
q.By(d,e,7)},
clE(d,e){var w,v,u,t,s,r,q,p,o=this
o.mj(d,e,D.dwh)
w=o.c
v=w*3.141592653589793
o.mp(d,e,B.of.j(0.55),v*3,10)
o.mp(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.S()
p=new A.ao(B.P,B.M,B.R,B.S,B.Q)
p.r=B.of.j(0.8).gp(0)
d.N(new A.p(v+r*34,u+q*22),4,p)}},
clH(d,e){var w,v,u,t,s,r,q,p,o=this
o.mj(d,e,D.dzE)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bn(new A.a1(q,p,q+36,p+22),B.iF)
$.S()
q=new A.ao(B.P,B.M,B.R,B.S,B.Q)
q.r=A.ar(B.ig,B.m7,r).gp(0)
d.an(p,q)}o.By(d,e,9)
o.mp(d,e,B.c.j(0.4),w*2.2,12)},
ckY(d,e){var w,v,u,t,s,r,q,p
this.mj(d,e,D.dnL)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bZ(new A.p(v,u),34)
$.S()
s=A.L()
s.b=B.a9
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cB(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ao(B.P,B.M,B.R,B.S,B.Q)
p.r=B.bP.j(0.85).gp(0)
d.N(new A.p(v+t*34,u+s*34),3,p)}},
ckQ(d,e){var w,v,u,t,s,r,q
this.mj(d,e,D.djh)
$.S()
w=A.L()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=0;t<v;t+=18)d.ah(new A.p(t,0),new A.p(t,u),w)
for(s=0;s<u;s+=18)d.ah(new A.p(0,s),new A.p(v,s),w)
r=this.c
q=u*B.j.F(r*0.85,1)
$.S()
u=A.L()
u.r=B.dn.j(0.45).gp(0)
d.ar(new A.a1(0,q,0+v,q+6),u)
this.mp(d,e,B.lg.j(0.45),-r*3.141592653589793*2,11)},
aE(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.aui.prototype={
a0k(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0k=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aS8(),$async$a0k)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a9O(s),$async$a0k)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a0k,v)},
ahn(d){return this.co_(d)},
co_(d){var w=0,v=A.j(x.H),u=this,t
var $async$ahn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.iud(d),$async$ahn)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ahn,v)},
B(d){var w,v,u=null,t=A.P(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.I?B.jY:B.iN
w=x.p
v=A.a([C.aSw(!0,B.rp,1/0,B.qL,u,s,1/0)],w)
if(!r)v.push(new A.bN(new A.o(u,u,u,u,u,new A.a8(B.b0,B.b7,B.x,A.a([B.L,B.w.j(0.35)],x.O),u,u),B.n),B.bi,new A.bL(B.b0,u,u,new A.D(B.rZ,A.d("Pick a theme or your own photo",u,u,u,u,u,u,A.m(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.U,u,u,!0,u,u,u,u,u,B.aCe,u,u),u,u,u),u),u),u))
v.push(A.ap(8,A.A(A.a([A.E(A.di(D.bWD,u,D.fHM,new C.cp3(this,d),A.bo(B.aV,u,u,u,B.c,u,B.k2,u,u,u,u,B.ch)),1),B.af,A.E(A.en(D.c4k,D.fX4,this.gceU(),A.dj(u,u,B.w.j(0.35),u,u,u,u,u,u,B.c,u,u,B.k2,u,u,D.b60,u,u,u,B.ch)),1)],w),B.l,u,B.e,B.i,0,u,u),u,u,8,8,u,u))
return new A.fH(1.7777777777777777,A.aH(!1,B.a3,!0,B.rp,new A.an(B.a0,u,B.b2,B.t,v,u),B.aq,t,0,u,u,u,u,u,B.aj),u)}}
C.aNs.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.aVs.prototype={}
C.aVr.prototype={}
C.aTu.prototype={}
C.a_l.prototype={
S(){return new C.aAz()}}
C.aAz.prototype={
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
if(w.length===0){u.c.L(x.q).f.T(D.fmK)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).O(new C.aVs(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.eg:B.c,k=A.l(20),j=A.r(n,D.c4_,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.l(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.m(n,n,m?B.aS:B.as,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bG,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.m(n,n,m?B.bv:B.bh,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.i,0,B.p),1)
j=A.A(A.a([j,B.bd,i,A.aI(n,n,n,n,A.X(B.cC,m?B.bv:B.bh,n,n,n,n),n,n,n,new C.d93(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.i,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.m(n,n,m?B.bv:B.bh,n,n,n,n,n,n,n,n,12,n,n,B.U,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.m(n,n,m?B.bv:B.bh,n,n,n,n,n,n,n,n,11,n,n,B.cE,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hsW(new C.d94(o),o.e)
u=o.d
u===$&&A.c()
t=A.m(n,n,m?B.aS:B.as,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jY:B.iN
r=A.l(12)
q=A.l(12)
p=m?B.ei:B.bP
t=A.aM(n,B.Z,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bA(n,new A.b6(4,r,B.dv),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d95(o),n,!1,n,n,!1,n,!0,n,B.ac,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,A_.KG,n,n,n,n)
u=m?B.aS:B.as
m=m?B.ei:B.bP
return A.eG(n,l,new A.cO(B.m2,A.cb(A.x(A.a([j,B.aO,i,B.aw,w,B.T,v,B.aO,t,B.bz,A.A(A.a([A.E(A.dU(B.dt,new C.d96(d),A.dj(n,n,n,n,n,n,n,n,n,u,n,n,B.cp,n,new A.b9(A.l(12),B.a1),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.au,A.E(A.bJ(D.fXk,n,o.ga3q(),A.bo(B.aV,n,n,n,B.c,n,B.cp,n,new A.b9(A.l(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.i,0,n,n)],h),B.E,n,B.e,B.O,0,B.p),B.t,n,B.y,n,B.CB,n,n,B.ah),n),n,n,n,A1.CC,n,B.d8,n,new A.b9(k,B.a1),n)}}
C.a_k.prototype={
S(){return new C.aAy()}}
C.aAy.prototype={
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
if(w.length===0){this.c.L(x.q).f.T(D.fkl)
return}v=this.c
v.toString
A.a6(v,!1).O(new C.aVr(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.eg:B.c,n=A.l(20),m=A.r(q,D.c0l,B.f,q,q,new A.o(B.bQ.j(0.15),q,q,A.l(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.as,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bG,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.m(q,q,p?B.bv:B.bh,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.i,0,B.p),1)
m=A.A(A.a([m,B.bd,l,A.aI(q,q,q,q,A.X(B.cC,p?B.bv:B.bh,q,q,q,q),q,q,q,new C.d9_(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.i,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.l(12)
v=A.K(B.aV.j(0.25),B.r,1)
u=A.X(B.apd,B.aV.j(0.9),q,q,q,18)
l=A.r(q,A.A(A.a([u,B.au,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.as,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.i,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bI,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.m(q,q,p?B.aS:B.as,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jY:B.iN
t=A.l(12)
s=A.l(12)
r=p?B.ei:B.bP
v=A.aM(q,B.Z,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bA(q,new A.b6(4,t,B.dv),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d90(this),q,!1,q,q,!1,q,!0,q,B.ac,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.l6,q,q,q,q)
w=p?B.aS:B.as
p=p?B.ei:B.bP
return A.eG(q,o,new A.cO(B.m2,A.cb(A.x(A.a([m,B.aO,l,B.aC,v,B.bz,A.A(A.a([A.E(A.dU(B.dt,new C.d91(d),A.dj(q,q,q,q,q,q,q,q,q,w,q,q,B.cp,q,new A.b9(A.l(12),B.a1),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.au,A.E(A.bJ(D.h3o,q,this.ga3q(),A.bo(B.bQ,q,q,q,B.c,q,B.cp,q,new A.b9(A.l(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.i,0,q,q)],k),B.E,q,B.e,B.O,0,B.p),B.t,q,B.y,q,B.CB,q,q,B.ah),q),q,q,q,A1.CC,q,B.d8,q,new A.b9(n,B.a1),q)}}
C.ZS.prototype={
S(){return new C.azh()}}
C.azh.prototype={
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
gaky(){var w=this.f
w===$&&A.c()
w=A.cW(B.a.i(w.a.a))
return w==null?0:w},
gb6s(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aQO(d){var w,v=B.j.D(this.gK7()+d,0.25,999999),u=B.j.iH(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.v(B.j.M(v))
else{u=B.j.ad(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb1(0,u)
this.m(new C.cHq())},
azQ(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jY:B.iN,s=A.l(14),r=A.l(14)
u=u?B.ei:B.bP
return A.bA(w,new A.b6(4,s,B.dv),w,B.bI,w,w,w,w,!0,new A.b6(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.l(14),B.aez),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
ceV(d,e,f){return this.azQ(d,e,f,null)},
KQ(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gaky()<=0){s.c.L(x.q).f.T(D.foF)
return}r=s.c
r.toString
v=s.gK7()
u=s.gaky()
t=s.gb6s()
A.a6(r,!1).O(new C.aTu(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.um(n),l=n?B.eg:B.c,k=A.l(24),j=x.O,i=A.a([B.aV.j(0.22),B.bQ.j(0.14)],j),h=A.l(14)
i=A.r(o,D.bUy,B.f,o,o,new A.o(o,o,A.K(B.aV.j(0.35),B.r,1),h,o,new A.a8(B.a7,B.aa,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bG,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.m(o,o,n?B.bv:B.bh,o,o,o,o,o,o,o,o,12,o,o,B.cE,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1)
i=A.A(A.a([i,B.bd,h,A.aI(o,o,o,o,A.X(B.cC,n?B.bv:B.bh,o,o,o,o),o,o,o,new C.cHw(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.i,0,o,o)
h=p.d
h===$&&A.c()
v=A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.Z,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.azQ(m,"Item name (optional)","Lumber, paint, labor\u2026",B.PN),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,A_.KG,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.m(o,o,n?B.bv:B.bh,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jY:B.iN
t=A.l(14)
s=A.K(n?B.ei:B.bP,B.r,1)
r=A.aI(o,o,o,o,A.X(B.wT,n?B.aS:B.as,o,o,o,20),o,o,o,new C.cHx(p),o,o,o,o,o,B.ch)
q=p.e
q===$&&A.c()
q=A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.c5T,B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.ec,o,o,o,1,o,o,!1,"\u2022",o,new C.cHy(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.r(o,A.A(A.a([r,new A.a5(52,o,q,o),A.aI(o,o,o,o,A.X(B.i2,n?B.aS:B.as,o,o,o,20),o,o,o,new C.cHz(p),o,o,o,o,o,B.ch)],w),B.l,o,B.e,B.O,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,16,o,o,B.U,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.au,A.E(A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.azQ(m,"Amount","0.00",B.hC),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.ec,o,o,o,1,o,o,!1,"\u2022",o,new C.cHA(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.ao,o,o,o,o),1)],w),B.E,o,B.e,B.i,0,o,o)
t=x.gv
u=A.C(new A.N(D.dbU,new C.cHB(p,m),t),t.k("ak.E"))
i=A.a([i,B.bz,v,B.aC,h,B.T,s,B.ae,A.bX(B.bH,u,B.bt,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.u(i,A.a([B.W,A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.ceV(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cHC(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.l6,o,o,o,o)],w))}i.push(B.aO)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bQ.j(n?0.12:0.06)],j)
h=A.l(16)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.m(o,o,n?B.bv:B.bh,o,o,o,o,o,o,o,o,11,o,o,B.U,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gK7()===B.j.iH(p.gK7())?B.j.M(p.gK7()):p.gK7()
s=p.gb6s()
r=A.Bv(p.gaky())
i.push(A.r(o,A.A(A.a([A.E(A.x(A.a([u,B.aw,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.m(o,o,n?B.bv:B.bh,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1),C.bGe(p.gK7()*p.gaky(),B.b3,!1,B.u)],w),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a8(B.a7,B.aa,B.x,j,o,o),B.n),o,o,o,o,B.jr,o,o,o))
i.push(B.bz)
j=A.l(14)
h=n?B.ei:B.bP
h=A.dj(o,o,o,o,o,o,o,o,o,o,o,o,B.cp,o,new A.b9(j,B.a1),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dU(A.d("Cancel",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,o,o,o,B.U,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cHD(d),h),1),B.au,A.E(A.di(D.asH,o,D.h_j,p.ga3q(),A.bo(B.aV,o,o,0,B.c,o,B.cp,o,new A.b9(A.l(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.i,0,o,o))
return A.eG(o,l,new A.cO(B.M5,A.cb(A.x(i,B.al,o,B.e,B.O,0,B.p),B.t,o,B.y,o,Ah.t2,o,o,B.ah),o),o,o,o,B.Oo,o,B.d8,o,new A.b9(k,B.a1),o)}}
C.a2t.prototype={
S(){return new C.byI()}}
C.byI.prototype={
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
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=r?B.eg:B.c,p=A.l(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.m(s,s,r?B.aS:B.as,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.m(s,s,r?B.aS:B.as,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jY:B.iN
v=A.aM(s,B.Z,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bA(s,new A.b6(4,A.l(12),B.dv),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fn0(t,d),s,!1,s,s,!1,s,!0,s,B.ac,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.ao,s,s,s,s)
u=A.E(A.dU(B.dt,new C.fn1(d),s),1)
r=A.bo(B.bQ,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eG(s,q,new A.D(B.CB,A.x(A.a([o,B.aC,v,B.aO,A.A(A.a([u,B.au,A.E(A.bJ(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fn2(t,d),r),1)],w),B.l,s,B.e,B.i,0,s,s)],w),B.l,s,B.e,B.O,0,B.p),s),s,s,s,s,s,B.d8,s,new A.b9(p,B.a1),s)}}
C.acQ.prototype={
a7(){return"WorksheetFrameStyle."+this.b}}
C.Gr.prototype={
S(){return new C.byG(null,null)}}
C.byG.prototype={
Y(){var w,v=this
v.a4()
w=A.bl(null,D.bBs,null,1,null,v)
w.cL(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBo()},
gbD_(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bQ,B.b3],x.O)
case 2:return A.a([B.bu,B.aV,B.b3],x.O)
case 3:return A.a([B.aG,B.ci,B.jl],x.O)
case 4:return A.a([B.h0,B.bQ,B.fr],x.O)
case 0:return A.a([B.aV,B.bQ,B.b3],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.eo(A.c6(v,new C.fmZ(this,new C.um(w.ax.a===B.I)),null),null)}}
C.aza.prototype={
S(){return new C.byH(null,null)}}
C.byH.prototype={
Y(){var w,v=this
v.a4()
w=A.bl(null,B.nH,null,1,null,v)
w.cL(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBp()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.fn_(this),null)}}
C.byF.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bn(new A.a1(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aN(w,w))
u=new A.aG($.S().r,B.ai,null,null,A.a([],x.v))
u.E(new A.ja(v))
w=A.L()
w.b=B.a9
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.an(v,w)
w=A.L()
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
p.aUn(d,q,r,o,0,0.2,4.2,0.92)
p.aUn(d,q,r,s,0.52,0.11,3.2,0.58)}},
aUn(d,e,f,g,h,i,j,k){var w,v,u,t=B.j.F(g+h,1)*f,s=A.hPT(e.a.a,e,t,t+f*i,!0),r=A.bEx(s.glX().a.getBounds())
$.S()
w=A.L()
w.b=B.a9
w.c=j
w.d=B.bw
w.f=!0
v=this.f
u=k*this.e
w.sav(new A.a8(B.a7,B.aa,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.IA,null).aK(0,r))
d.af(s,w)},
aE(d){return d.b!==this.b||d.d!==this.d}}
C.aPA.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aPB.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.um.prototype={}
C.auh.prototype={
S(){return new C.aGT()},
ge3(){return this.c}}
C.aGT.prototype={
Y(){var w=this
w.a4()
w.d=w.a.d
w.aid()},
t(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Mg(w,v)
this.a3()},
aid(){var w=0,v=A.j(x.H),u=this,t,s
var $async$aid=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bEG(t.c,t.d.a),$async$aid)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eVH(u,s))
return A.h(null,v)}})
return A.i($async$aid,v)},
QN(){var w=0,v=A.j(x.H),u=this,t,s
var $async$QN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eVy(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Mg(t,s),$async$QN)
case 2:if(u.c!=null)u.m(new C.eVz(u))
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
return A.b(A.cg(null,null,!0,null,new C.eVF(t,new C.um(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$Rk)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a9O(q),$async$Rk)
case 6:case 5:t.m(new C.eVG(t,r))
w=7
return A.b(t.QN(),$async$Rk)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Rk,v)},
Wx(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.itZ(r),$async$Wx)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eVt(t,new C.rs(B.o.v(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.QN(),$async$Wx)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wx,v)},
ck1(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hHn(t,new C.eVx(u),w,v)},
ac6(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.r(w,w,B.f,w,w,new A.o(w,w,new A.bG(new A.ay(v,2.5,B.r,-1),B.a1,B.a1,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b5N,w,w,B.n),w,22,w,w,w,w,w,22)},
ab8(d){return this.bP2(d)},
bP2(d){var w=0,v=A.j(x.H),u=this
var $async$ab8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eVw(u,d))
w=2
return A.b(u.QN(),$async$ab8)
case 2:return A.h(null,v)}})
return A.i($async$ab8,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.c4:B.i_,d=A.l(8),a0=A.X(Y.a2q,f?B.bv:B.bh,g,g,g,16),a1=x.p
a0=A.aP(!1,d,!0,new A.D(B.H5,A.A(A.a([a0,B.bn,A.d("Back to Projects",g,g,g,g,g,g,A.m(g,g,f?B.bv:B.bh,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.O,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eVI(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a_(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b2,B.t,A.a([A.bx(A.l(22),C.aSw(!0,A.l(22),1/0,B.qL,g,d,1/0),B.aq),A.ap(10,A.di(D.bZf,g,D.h1H,h.gb4o(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.hj,g,new A.b9(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.l(22)
w=x.V
v=A.a([new A.ab(0,B.G,B.aV.j(f?0.5:0.38),B.eR,22),new A.ab(-4,B.G,B.bQ.j(0.2),B.J,32)],w)
u=A.l(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ab(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.l(16)
r=h.d
v=A.r(g,A.r(g,A.bx(s,new A.an(B.a0,g,B.b2,B.t,A.a([C.aSw(!0,A.l(16),1/0,B.Pf,g,r.c,1/0),new A.bN(new A.o(g,g,g,g,g,new A.a8(B.b0,B.b7,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bi,g,g),A.ap(g,h.ac6(!0),g,g,8,g,8,g),A.ap(g,A.cE3(h.ac6(!0),!0,!1),g,g,g,8,8,g),A.ap(8,A.cE3(h.ac6(!1),!1,!0),g,g,8,g,g,g),A.ap(8,A.cE3(h.ac6(!1),!0,!0),g,g,g,8,g,g),A.ap(10,A.di(D.bV9,g,D.fW1,h.gb4o(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.hj,g,new A.b9(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.c7A,B.n),g,g,g,g,B.lN,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.m(g,g,f?B.aS:B.as,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.l(22)
u=x.O
u=f?A.a([D.bgH,B.oj,B.hg],u):A.a([B.b3,B.aV,B.bQ],u)
t=x.V
s=A.a([new A.ab(0,B.G,B.aV.j(f?0.45:0.35),B.eR,24)],t)
r=A.l(22)
p=A.ap(g,A.X(B.jK,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.l(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.r(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.m(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.hh,g,g,g)],a1),B.l,g,B.e,B.i,0,g,g),B.aC,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.m(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bGe(h.d.gxJ(),B.c,!0,B.u)],a1)
if(q>0)B.d.u(n,A.a([B.T,A.d("Sum of all budget line items",g,g,g,g,g,g,A.m(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cE,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.i,0,B.p),1)
n=A.l(14)
m=A.l(14)
l=B.c.j(0.12)
k=A.K(B.hA.j(0.75),B.r,1.6)
t=A.a([new A.ab(0,B.G,B.aG.j(0.28),B.cL,14)],t)
j=B.aG.j(0.22)
i=A.l(10)
u=A.r(g,A.bx(r,new A.an(B.a0,g,B.ad,B.t,A.a([p,new A.D(D.bGk,A.A(A.a([o,B.au,A.aH(!1,B.a3,!0,g,A.aP(!1,n,!0,A.eB(new A.D(U.wy,A.x(A.a([A.r(g,D.asg,B.f,g,g,new A.o(j,g,A.K(B.aG.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cq,g,g,g),B.fG,D.fKC],a1),B.l,g,B.e,B.O,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gck0(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.aj)],a1),B.l,g,B.e,B.i,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a8(B.aA,B.aD,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fH(1.7777777777777777,d,g),B.aO,w,B.T,u,B.bz,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.m(g,g,f?B.aS:B.as,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b1,A.di(At.a4j,g,D.fIt,h.gbDt(),A.bo(B.aV,g,g,g,B.c,g,B.hM,g,new A.b9(A.l(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.i,0,g,g),B.ae],a1)
w=h.d.d
if(w.length===0){w=f?B.eg:B.c
v=A.l(14)
u=A.K(f?B.ei:B.bP,B.r,1)
t=A.X(B.a2M,f?B.bv:B.bh,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.m(g,g,f?B.aS:B.as,g,g,g,g,g,g,g,g,g,g,g,B.U,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.r(g,A.x(A.a([t,B.W,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.m(g,g,f?B.bv:B.bh,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.i,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.qH,g,g,1/0))}else B.d.u(d,new A.N(w,new C.eVJ(h,new C.um(f)),A.U(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.Cn,A.as(A.n5(g,f?B.bv:B.bh,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c4(g,e,A.bm(!0,A.x(A.a([new A.D(B.Cs,a0,g),A.E(A.cb(A.x(d,B.E,g,B.e,B.i,0,B.p),B.t,g,B.y,g,E.yV,g,g,B.ah),1)],a1),B.E,g,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bH9(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.eg:B.c,p=A.l(16),o=A.a([new A.ab(0,B.G,B.w.j(r?0.35:0.08),B.cL,12)],x.V),n=A.l(16),m=A.r(u,u,B.f,u,u,D.b8y,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.l(12)
l=A.r(u,A.X(s?B.il:B.hn,B.b3,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bM
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.m(u,u,r?B.aS:B.as,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd_x()
v=A.Bv(d.d)
B.d.u(t,A.a([B.aw,A.d(w+" "+v,u,u,u,u,u,u,A.m(u,u,r?B.bv:B.bh,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.ba,B.O,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bQ.j(0.1)],x.O)
w=A.l(12)
k=A.r(u,C.bGe(d.c*d.d,B.b3,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a8(B.a7,B.aa,B.x,k,u,u),B.n),u,u,u,u,B.hj,u,u,u)
w=x.p
return A.r(u,A.bx(n,new A.ER(A.A(A.a([m,A.E(new A.D(B.am9,A.A(A.a([l,B.bd,t,B.af,k,A.aI(u,u,u,u,A.X(B.cC,(r?B.bv:B.bh).j(0.75),u,u,u,20),u,u,u,new C.eVu(this,d),u,u,u,u,u,B.ch)],w),B.l,u,B.e,B.i,0,u,u),u),1)],w),B.al,u,B.e,B.i,0,u,u),u),B.aq),B.f,u,D.b7p,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.da,u,u,u,u)}}
C.aeU.prototype={
EZ(d){return this.bQq(d)},
bQq(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$EZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pA(d,o,!1),$async$EZ)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
w=4
return A.b(A.bO(Ag.Cl,null,x.H),$async$EZ)
case 4:s=t.d
w=5
return A.b(C.fWW(!0,o,s),$async$EZ)
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
a0m(d){return this.cAq(d)},
cAq(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0m=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pA(d,s,!1),$async$a0m)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
A.hC(d,new C.aub(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pz(s,!1),$async$a0m)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0m,v)},
QO(d){return this.cwt(d)},
cwt(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$QO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(A.hC(d,D.aM1,!0,"NgmyWorksheetProjectScan",x.N),$async$QO)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bGf(s),$async$QO)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.L(x.q).f.T(D.fnL)
w=1
break}q=C.hir(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dM(p,x.H),$async$QO)
case 5:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$QO,v)},
a0n(d){return this.cIJ(d)},
cIJ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0n=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(C.bFK(),$async$a0n)
case 3:s=f
if(s==null){w=1
break}r=C.hir(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dM(q,x.H),$async$a0n)
case 4:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a0n,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.um(u),s=w.d.d.length,r=u?B.eg:B.c,q=A.l(28),p=A.a([new A.ab(0,B.G,B.w.j(u?0.35:0.08),B.kE,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.wx,A.r(v,A.x(A.a([w.cz_(d,t,s),new A.D(D.bFJ,A.x(A.a([w.b7n(t,"QR restore"),B.W,A.A(A.a([w.b2n(t,!0,B.jN,B.aG,B.aG,new C.eVL(w,d),"Show to scan","QR code"),B.au,w.azR(t,B.ju,B.b8,B.bc,new C.eVM(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.i,0,v,v),B.dc,w.b7n(t,"Backup files"),B.W,A.A(A.a([w.azR(t,B.i3,B.aV,B.bQ,new C.eVN(w,d),"Full copy","Backup file"),B.au,w.azR(t,Q.zB,B.av,B.aQ,new C.eVO(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.i,0,v,v)],o),B.E,v,B.e,B.i,0,B.p),v)],o),B.l,v,B.e,B.O,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cz_(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eY,B.cJ,B.fZ],k):A.a([B.b3,B.aV,B.bQ],k)
w=A.ap(l,A.X(B.v8,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.as(A.r(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.l(4),l,l,B.n),l,4,l,B.kw,l,l,l,36),l,l,l)
u=A.l(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ab(0,B.G,B.w.j(0.2),B.cL,12)],x.V)
r=this.d
s=A.r(l,C.aSw(!0,A.l(13),64,D.bQp,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.m(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,I.abV,l,l,l)
r=C.bGe(r.gxJ(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.l(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.r(l,new A.an(B.a0,l,B.ad,B.t,A.a([w,new A.D(D.bG5,A.x(A.a([v,A.A(A.a([s,B.ew,A.E(A.x(A.a([u,B.aw,t,B.T,A.A(A.a([r,B.af,A.r(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.m(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fO,l,l,l)],m),B.l,l,B.e,B.i,0,l,l)],m),B.E,l,B.e,B.i,0,B.p),1),A.aI(l,l,l,l,A.X(B.cC,B.c.j(0.85),l,l,l,l),l,l,l,new C.eVK(d),l,l,l,A.o3(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aUn,l,l,l,l),l,l)],m),B.E,l,B.e,B.i,0,l,l)],m),B.l,l,B.e,B.i,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.aA,B.aD,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b7n(d,e){var w=null,v=A.r(w,w,B.f,w,w,new A.o(B.aV,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.af,A.d(e.toUpperCase(),w,w,w,w,w,w,A.m(w,w,d.a?B.bv:B.bh,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
b2n(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.l(18),p=A.l(18),o=d.a,n=o?D.akJ:B.aS
if(e)w=B.aG.j(o?0.45:0.35)
else{w=o?B.ei:B.bP
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.ab(0,B.G,B.aG.j(0.12),B.cL,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.l(12)
s=A.K(h.j(0.35),B.r,1)
t=A.r(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.t4,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.m(r,r,o?B.aS:B.as,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aH(!1,B.a3,!0,r,A.aP(!1,q,!0,A.eB(new A.D(E.a0P,A.x(A.a([t,B.ae,u,B.bG,A.d(j,r,r,r,r,r,r,A.m(r,r,o?B.bv:B.bh,r,r,r,r,r,r,r,r,11,r,r,B.cE,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
azR(d,e,f,g,h,i,j){return this.b2n(d,!1,e,f,g,h,i,j)}}
C.aub.prototype={
S(){return new C.bnG()}}
C.bnG.prototype={
Y(){this.a4()
this.ag7()},
ag7(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$ag7=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bGg(p.c,p.d),$async$ag7)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eVo(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eVp(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ag7,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.BV:B.i_,e=i.d
e=e==null?h:B.a.a_(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aI(h,h,h,h,A.X(B.eM,g?B.ab:B.an,h,h,h,18),h,h,h,new C.eVq(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.m(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.tN],u),B.l,h,B.e,B.i,0,h,h)
t=A.l(24)
s=x.O
s=g?A.a([B.eY,B.cJ,B.fZ],s):A.a([B.b3,B.aV,B.bQ],s)
r=x.V
q=A.a([new A.ab(0,B.G,B.aV.j(g?0.4:0.3),B.eR,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dq,B.K,h,h)
p=C.bGe(p.gxJ(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.l(20)
l=v===1?"item":"items"
s=A.r(h,A.x(A.a([o,B.am,A.A(A.a([p,B.af,A.r(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.m(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fO,h,h,h)],u),B.l,h,B.ba,B.i,0,h,h)],u),B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a8(B.aA,B.aD,B.x,s,h,h),B.n),h,h,h,h,E.a1a,h,h,1/0)
t=g?D.brZ:B.c
q=A.l(24)
p=A.K(w?B.aG.j(0.4):B.aV.j(0.3),B.r,1)
r=A.a([new A.ab(0,B.G,B.w.j(g?0.25:0.06),B.dp,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.VD,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.euV)
else{m=A.l(20)
l=A.K(B.bj,B.r,1)
o.push(A.r(h,A.qg(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bS,h,h,h))}}o.push(B.aO)
n=w?B.aG:B.aV
n=n.j(g?0.15:0.1)
m=A.l(12)
l=A.K((w?B.aG:B.aV).j(0.35),B.r,1)
k=w?B.Pu:B.Q1
k=A.X(k,w?B.aG:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.r(h,A.A(A.a([k,B.au,A.E(A.d(j,h,h,h,h,h,h,A.m(h,h,g?B.ab:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.i,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.hM,h,h,h))
return A.c4(h,f,A.bm(!0,A.x(A.a([new A.D(Ad.OB,e,h),A.E(A.cb(A.x(A.a([s,B.aO,A.r(h,A.x(o,B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.uK,h,h,1/0)],u),B.l,h,B.e,B.i,0,B.p),B.t,h,B.y,h,E.ani,h,h,B.ah),1)],u),B.l,h,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.aug.prototype={
S(){return new C.aGS(A.A_(B.NT,B.ob,B.vf))}}
C.aGS.prototype={
t(){this.d.t()
this.a3()},
aOM(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j3(w,d)},
cfN(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s=C.irv(t)
if(s!=null){this.aOM(s)
return}r=C.hxu(t)
if(r!=null)q=A.cS(r,p,0)
else q=!1
if(q){this.aOM(B.a.i(B.a.b2(r,B.a.co(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eQ(A.a([A.aI(t,t,t,t,A.X(u.f?B.uV:A8.PB,t,t,t,t,t),t,t,t,new C.eVs(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.BV,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fVU,t,t,t,1,t,!0),q=A.zZ(u.d,B.c0,u.gcfM()),p=A.l(28)
p=A.as(A.r(t,t,B.f,t,t,new A.o(t,t,A.K(B.aV,B.r,3),p,A.a([new A.ab(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.l(16)
return A.c4(r,B.w,new A.an(B.a0,t,B.b2,B.t,A.a([q,p,A.ap(32,A.r(t,D.fUF,B.f,t,t,new A.o(w,t,A.K(B.aV.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jr,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aLN.prototype={
a7(){return"_WorksheetTab."+this.b}}
C.P8.prototype={
S(){return new C.aGU(D.adT,A.a([],x.D))},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aGU.prototype={
gcGv(){return J.bHn(this.e,0,new C.eWa())},
Y(){this.a4()
$.aW.c1$.push(this)
this.wn()},
t(){$.aW.hV(this)
this.a3()},
jm(d){if(d===B.fY)this.wn()},
wn(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wn=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.DF(q.a.c).dg(0,B.jI),$async$wn)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eW6(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eW7(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wn,v)},
Iu(d){return this.bNa(d)},
bN9(){return this.Iu(null)},
bNa(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Iu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iu0(l,d),$async$Iu)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
r=s.a
q=s.b
p=new C.lF(l,r,q,D.do0,new A.V(Date.now(),0,!1))
w=4
return A.b(C.Mg(t.a.c,p),$async$Iu)
case 4:o=f
w=5
return A.b(t.wn(),$async$Iu)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.L(x.q).f.T(D.fkP)
w=1
break}n=J.aT(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gR(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.L(q).f.T(D.fmE)
else n.L(q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.F2(m)
case 1:return A.h(u,v)}})
return A.i($async$Iu,v)},
F2(d){return this.cjN(d)},
cjN(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$F2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hC(s,new C.auh(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$F2)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Mg(u.a.c,t),$async$F2)
case 5:case 4:w=6
return A.b(u.wn(),$async$F2)
case 6:return A.h(null,v)}})
return A.i($async$F2,v)},
w8(d){return this.c2v(d)},
c2v(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$w8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bFK(),$async$w8)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hC(r,D.aM1,!0,"NgmyWorksheetProjectScan",x.N),$async$w8)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bGf(q),$async$w8)
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
break}p=C.hir(s)
w=15
return A.b(C.Mg(t.a.c,p),$async$w8)
case 15:o=f
w=16
return A.b(t.wn(),$async$w8)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.L(x.q).f.T(D.fmJ)
w=1
break}r.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.F2(p)
case 1:return A.h(u,v)}})
return A.i($async$w8,v)},
Ot(d){return this.bLN(d)},
bLN(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ot=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cg(null,null,!0,null,new C.eVS(d),s,null,!0,!0,x.y),$async$Ot)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.p8(t.a.c,A.a([],x.D)),$async$Ot)
case 6:w=7
return A.b(t.wn(),$async$Ot)
case 7:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fkU)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ot,v)},
ck_(d){var w=this.c
w.toString
A.bU(B.L,null,new C.eW0(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b8_(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.l(16),p=g.a
if(p)w=B.jY
else w=B.c
v=A.l(16)
u=A.K(p?B.ei:B.bP,B.r,1)
t=d.j(0.14)
s=A.l(12)
s=A.r(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bV,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.m(r,r,p?B.aS:B.as,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aH(!1,B.a3,!0,r,A.aP(!1,q,!0,A.r(r,A.x(A.a([s,B.ae,t,B.bG,A.d(h,r,r,r,r,r,r,A.m(r,r,p?B.bv:B.bh,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.t0,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
a0S(d,e){return this.cjO(d,e)},
cjO(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0S=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(B.L,null,new C.eVW(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a0S)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hHn(r,new C.eVX(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Ov(d,e),$async$a0S)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0S,v)},
b50(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.l(12)
s=A.r(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bV,u,u,u)
if(d)t=B.ay
else t=h.a?B.aS:B.as
t=A.d(j,u,u,u,u,u,u,A.m(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.m(u,u,w?B.bv:B.bh,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.i,0,B.p),1)
return A.aH(!1,B.a3,!0,u,A.aP(!1,u,!0,new A.D(B.Cz,A.A(A.a([s,B.bd,t,A.X(B.eJ,w?B.bv:B.bh,u,u,u,u)],v),B.l,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj)},
cqJ(d,e,f,g,h,i){return this.b50(!1,d,e,f,g,h,i)},
Ov(d,e){return this.bLX(d,e)},
bLX(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ov=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lq(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Ov)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bEr(t.a.c,d.a),$async$Ov)
case 6:w=7
return A.b(t.wn(),$async$Ov)
case 7:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ov,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.um(n),l=n?B.c4:B.i_
if(p.f)n=D.beu
else{w=A.aF(d,B.dN,x.w).w
v=p.bGg(m)
u=p.c1z(m)
t=p.gbDm()
if(n)s=B.jY
else s=B.c
r=A.l(13)
q=x.p
t=A.a([v,B.ae,u,B.aO,new C.Gr(A.r(o,A.A(A.a([p.aDp(P.Pe,"Projects",m,D.adT),p.aDp(B.uQ,"Cashier",m,D.b2h),p.aDp(B.Hn,"Family Tree",m,D.hIe)],q),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(s,o,o,r,o,o,B.n),o,o,o,o,o,o,o,o),14,B.eC,0.95,t,o),B.bz],q)
v=p.d
if(v===D.adT){v=J.ad(p.e)
B.d.u(t,A.a([A.A(A.a([A.d("Projects ("+v+")",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,16,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b1,new C.aza(p.gaT8(),o)],q),B.l,o,B.e,B.i,0,o,o),B.aC,p.cqL(m)],q))}else{n=p.a
if(v===D.b2h)t.push(new C.aq6(n.c,m,o))
else{v=p.r
t.push(new C.ark(n.c,n.d,n.e,n.f,new C.eWd(p),new C.eWe(p),new A.bq(v,x.b4)))}}n=A.cb(A.x(t,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,new A.R(20,w.r.b+8,20,32),o,o,B.ah)}return A.c4(o,l,A.bm(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bGg(d){var w=null,v=A.l(8),u=d.a,t=A.X(Y.a2q,u?B.bv:B.bh,w,w,w,16)
return A.aP(!1,v,!0,new A.D(B.kV,A.A(A.a([t,B.bn,A.d("Back to Profile",w,w,w,w,w,w,A.m(w,w,u?B.bv:B.bh,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.O,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eVP(this),w,w,w,w,w,w,w)},
gbDm(){switch(this.d.a){case 0:return D.ad0
case 1:return D.hwF
case 2:return D.ad1}},
c1z(d){var w=null,v=A.l(15),u=A.a([new A.ab(0,B.G,B.aV.j(0.35),B.cz,16)],x.V),t=x.p,s=A.A(A.a([A.r(w,D.c0b,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bd,D.bKK,A.aH(!1,B.a3,!0,w,A.aP(!1,A.l(12),!0,A.r(w,D.bYx,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eVT(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)],t),B.E,w,B.e,B.i,0,w,w),r=B.b3.j(0.55),q=A.l(12)
return new C.Gr(A.r(w,A.x(A.a([new A.D(B.GZ,s,w),A.r(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.m(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aw,A.d(A.Bv(this.gcGv()),w,w,w,w,w,w,D.fEF,w,w,w)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.uH,B.jr,w,w,1/0)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hwE,w)},
aDp(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.l(12),r=t?B.aV:B.L,q=A.l(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.ab(0.5,B.G,B.aV.j(0.42),B.cL,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bv:B.bh
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bv:B.bh
return A.E(A.aH(!1,B.a3,!0,u,A.aP(!1,s,!0,A.cT(u,A.A(A.a([w,B.e8,new A.df(1,B.cj,A.d(e,u,1,B.a2,u,u,u,A.m(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.ba,B.i,0,u,u),u,u,B.cw,new A.o(r,u,p,q,o,u,B.n),B.iP,u,u,u,u,B.H6,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eW9(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),1)},
cqL(d){var w,v,u,t,s,r,q=this,p=null
if(J.ct(q.e)){w=d.a
v=w?B.eg:B.c
u=A.l(15)
t=A.r(p,D.bYE,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ab(2,B.G,B.aV.j(0.5),B.eR,28)],x.V),D.ca6,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.m(p,p,w?B.aS:B.as,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Gr(A.r(p,A.x(A.a([t,B.dc,s,B.T,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.m(p,p,w?B.bv:B.bh,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.e4,A.A(A.a([A.E(q.aUJ(B.ju,"Scan QR",new C.eW3(q),d),1),B.au,A.E(q.aUJ(Q.zB,"Upload file",new C.eW4(q),d),1)],r),B.l,p,B.e,B.i,0,p,p),B.aC,A.bJ(D.h5m,p,q.gaT8(),A.bo(B.aV,p,p,p,B.c,B.ha,p,p,new A.b9(A.l(12),B.a1),p,p,p))],r),B.l,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bHb,1.05,D.ad0,p)}w=J.b7(q.e,new C.eW5(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Gr(A.x(w,B.l,p,B.e,B.i,0,B.p),16,B.bV,1,D.ad0,p)},
aUJ(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.l(12),t=A.l(12),s=A.l(12),r=A.K(B.aV.j(0.45),B.r,1)
return A.aH(!1,B.a3,!0,u,A.aP(!1,t,!0,A.r(w,A.x(A.a([A.X(d,B.b3,w,w,w,26),B.T,A.d(e,w,w,w,w,w,w,D.fCR,B.K,w,w)],x.p),B.l,w,B.e,B.O,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.am2,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)},
cqK(d,e){var w,v,u=null,t=e.a,s=t?B.eg:B.c,r=A.l(14),q=A.K(t?B.ei:B.bP,B.r,1),p=A.a([new A.ab(0,B.G,B.w.j(t?0.35:0.08),B.ev,10)],x.V),o=A.l(14),n=t?B.bv:B.bh
n=A.bx(B.XO,new A.fH(1.7777777777777777,C.aSw(!0,B.fk,1/0,P.Pe,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.m(u,u,t?B.aS:B.as,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.aw,A.d(""+d.d.length+" budget items \xb7 "+A.Bv(d.gxJ()),u,u,u,u,u,u,D.fAN,u,u,u)],w),B.E,u,B.e,B.i,0,B.p),1)
return A.r(u,A.aH(!1,B.a3,!0,u,A.aP(!1,o,!0,A.x(A.a([n,new A.D(B.bI,A.A(A.a([v,A.aI(u,u,u,u,A.X(Ak.a3v,t?B.bv:B.bh,u,u,u,u),u,u,u,new C.eW1(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.i,0,u,u),u)],w),B.E,u,B.e,B.i,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eW2(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.eo,u,u,u,1/0)}}
C.bAt.prototype={}
C.rs.prototype={
aj(){var w=this,v=w.c,u=w.d
return A.J(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd_x(){var w,v,u,t,s=this.c
if(s===B.j.iH(s))w=B.o.v(B.j.M(s))
else{v=B.j.ad(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lF.prototype={
gxJ(){return B.d.cF(this.d,0,new C.cGL())},
aj(){var w=this,v=w.d,u=A.U(v).k("N<1,a9<n,@>>")
v=A.C(new A.N(v,new C.cGK(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bfn(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lF(w.a,w.b,v,u,w.e)},
bf5(d){return this.bfn(d,null)},
TB(d){return this.bfn(null,d)}}
C.IA.prototype={
a7(){return"FamilyGender."+this.b}}
C.hZ.prototype={
aj(){var w=this
return A.J(["id",w.a,"name",w.b,"gender",C.hCz(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aG8(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hZ(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.amm.prototype={
a7(){return"FamilyTreeAccessRole."+this.b}}
C.kZ.prototype={
gaqw(){var w=this.f
return new A.Y(w,new C.bT7(),A.U(w).k("Y<1>")).gJ(0)},
aj(){var w=this,v=w.f,u=A.U(v).k("N<1,a9<n,@>>")
v=A.C(new A.N(v,new C.bT6(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.ijO(w.y),"games",w.z],x.N,x.z)},
x4(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kZ(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bfm(d,e){var w=null
return this.x4(w,w,w,d,e,w,w,w,w)},
cPT(d,e,f,g,h,i,j){return this.x4(d,e,null,f,g,h,i,j,null)},
aGd(d,e){var w=null
return this.x4(w,w,w,w,d,w,w,e,w)},
cPV(d,e,f,g,h,i,j,k){return this.x4(d,e,null,f,g,h,i,j,k)},
cOo(d){var w=null
return this.x4(w,w,w,w,w,w,w,d,w)},
cOM(d){var w=null
return this.x4(w,w,w,w,w,w,w,w,d)},
bf_(d){var w=null
return this.x4(w,w,d,w,w,w,w,w,w)},
aFZ(d){var w=null
return this.x4(w,w,w,w,w,d,w,w,w)},
cPq(d,e,f){var w=null
return this.x4(w,d,w,w,e,w,w,f,w)},
cOb(d){var w=null
return this.x4(w,w,w,d,w,w,w,w,w)},
cOY(d,e){var w=null
return this.x4(d,w,w,w,w,w,e,w,w)}}
C.cGM.prototype={
a7(){return"WrapAlignment."+this.b}}
C.cGN.prototype={
a7(){return"WrapCrossAlignment."+this.b}}
C.aIZ.prototype={}
C.bb3.prototype={
ak(d){this.a=d.a
this.b=d.b},
cZ(d){var w=new C.bb3()
w.a=this.a
w.b=this.b
return w},
v(d){return A.b4(this).v(0)+" first:"+this.a+" last:"+this.b}}
C.bb2.prototype={
gwV(){return!0},
gGz(){return this.z.b<this.b.length},
aWp(d){switch(0){case 0:return d.a.c}},
aW5(d){switch(0){case 0:return d.a.d}},
bW0(d,e){switch(0){case 0:return new A.hU(d,e)}},
bVo(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hf(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iS(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Ij(b4)
switch(0){case 0:v=b5.b
u=new A.kW(0,v,0,1/0)
t=w===B.Vv
break}s=A.a([],x.gZ)
r=A.T(x.gF,x.S)
for(b3=b1.z,q=B.d.fO(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.I)(q),++h){g=q[h]
g.hf(b4,u,!0)
f=b1.aWp(g)
f.toString
e=b1.aW5(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aIZ(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aIZ(k,j,i))}d=s.length
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
a8=b1.aWp(g)
e=b1.aW5(g)
e.toString
a9=b1.bVo(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bW0(a6,a3+a9)
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
v.ek(u.a,u.b,0,1)
w.po(0,v)
for(u=r.z,u=B.d.dt(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.I)(u),++s)u[s].fV(d)
w.nA(0)},
H4(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
is(){return this.z}}
C.byJ.prototype={}
var z=a.updateTypes(["aB<~>()","Q(hZ)","~()","Q(kZ)","Q(nw)","a9<n,@>(kZ)","H(kZ,kZ)","H(hZ,hZ)","n(hZ)","kZ(a9<@,@>)","Q(lF)","nw(a9<@,@>)","a9<n,@>(nw)","Q(uX)","uX()","H(hZ)","ai<hZ>()","Q(zI)","a0n(Z)","n?(hZ)","eL<n?>(hZ)","aB<~>(lF)","Q(rs)","a9<n,@>(hZ)","hZ(a9<@,@>)","H(lF,lF)","Q(agc)","~(bd)","v(oL)","H(H,aag)","Q(qL<H>)","~(qL<H>)","U9(Z)","Q(MV)","Q(uW)","~(hZ)","n(n)","Wu(Z)","U8(Z)","aez(Z)","a_j(Z)","hZ(hZ)","cK(bB<n,GH>)","cK(L2)","a_N(Z)","H?(hZ)","hZ()","Q(L2)","D(hZ)","~(IA)","a_J(Z)","v(IA,n,a_)","Q(ag5)","bB<n,ai<a9<n,@>>>(n,ai<nw>)","a_L(Z)","+count,id,name(H,n,n)(kZ)","n(kZ)","a0H(Z)","a0I(Z)","Q(lZ)","lZ()","ZS(Z)","a2t(Z)","a_l(Z)","a_k(Z)","~(H)","~(n,lu?)","v(rs)","aeU(Z)","~(mm)","aB<~>([n?])","G(G,lF)","v(lF)","G(G,rs)","a9<n,@>(rs)","rs(a9<@,@>)","ai<lu>()","uW()","n(V)","lF(a9<@,@>)","cu(Iz)","n(lF)","a9<n,@>(lF)","H(nw,nw)","kZ(a9<n,@>)","kZ(kZ)"])
C.fPp.prototype={
$1(d){return d.a+" "+d.b},
$S:126}
C.fPo.prototype={
boF(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.rj(s,d,B.i5,"book",E.GM),$async$$1)
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
$1(d){return this.boF(d)},
$S:243}
C.fPq.prototype={
$1(d){return d.b},
$S:126}
C.fZ2.prototype={
$1(d){var w=null
return A.eG(w,B.L,new H.Qz(this.a,this.b,w),w,w,0,B.a0Q,w,B.d8,w,w,w)},
$S:46}
C.fCt.prototype={
$1(d){return d!=null},
$S:229}
C.fCu.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:229}
C.fCz.prototype={
$1(d){if(this.a)return new A.p(d.a*520,d.b*160)
return d},
$S:163}
C.fN8.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fe(d,w,w,w,A.hf(w,B.tE,w,w,w,w,w,w,w,B.dH,w,w,10.5,w,B.eD,w,!0,w,w,w,w),w),u=f?B.eD:B.wH
return new A.od(D.bCv,A.ab5(A.a([new A.fY(130,w,v),new A.zH(1,B.Hg,A.fe(e,w,w,w,A.hf(w,g==null?D.exj:g,w,w,w,w,w,w,w,B.dH,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.yz,B.lU))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1963}
C.fN7.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.w5(999)
f=A.xH(A.lU(h,A.fe("Cashier",h,h,h,A.hf(h,D.Aw,h,h,h,h,h,h,h,B.dH,h,h,10,h,B.eD,h,!0,h,h,h,h),h),h,new A.kX(D.exa,h,f,B.ia,h),h,h,D.bD0,h))
w=A.xH(A.fe("Debt receipt",h,h,h,A.hf(h,h,h,h,h,h,h,h,h,B.dH,h,h,22,h,B.eD,h,!0,h,h,h,h),h))
v=A.xH(A.fe(C.xp(new A.V(Date.now(),0,!1),!0),h,h,h,D.abv,h))
u=A.w5(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fe(s,h,h,h,A.hf(h,h,h,h,h,h,h,h,h,B.dH,h,h,14,h,B.eD,h,!0,h,h,h,h),h)
r=A.fe("Person who owes",h,h,h,D.abv,h)
q=A.w5(10)
p=x.Z
u=A.lU(h,A.zA(A.a([s,new A.fY(h,2,h),r,new A.fY(h,10,h),A.lU(h,A.zA(A.a([A.fe("Amount owed",h,h,h,D.abv,h),new A.fY(h,2,h),A.fe(A.Bv(t.c),h,h,h,A.hf(h,D.Aw,h,h,h,h,h,h,h,B.dH,h,h,20,h,B.eD,h,!0,h,h,h,h),h)],p),B.rS,B.lU),h,new A.kX(B.pQ,h,q,B.ia,h),h,h,D.bCb,1/0)],p),B.rS,B.lU),h,new A.kX(E.aNo,h,u,B.ia,h),h,h,D.bEb,1/0)
q=new A.nW(D.exd,0.9,B.lb)
r=A.w5(12)
s=i.c
o=s.$2("Original due",C.xp(t.r,!1))
n=s.$2("Current due",C.xp(t.f,!1))
m=i.d
l=new A.nW(m,1.1,B.lb)
k=A.w5(8)
j=i.a
k=A.a([o,n,new A.fY(h,6,h),A.lU(h,A.xH(A.fe(t.gaNk(),h,h,h,A.hf(h,m,h,h,h,h,h,h,h,B.dH,h,h,11,h,B.eD,h,!0,0.5,h,h,h),h)),h,new A.kX(h,new A.q2(l,l,l,l),k,B.ia,h),h,h,D.bD8,1/0),new A.fY(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.Aw))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.Aw))
else{n=A.fe("Missed days ("+n+")",h,h,h,A.hf(h,B.tE,h,h,h,h,h,h,h,B.dH,h,h,10.5,h,B.eD,h,!0,h,h,h,h),h)
m=A.U(o).k("N<1,TI>")
o=A.C(new A.N(o,new C.fN6(),m),m.k("ak.E"))
B.d.u(k,A.a([new A.fY(h,4,h),n,new A.fY(h,6,h),new C.bb2(5,5,new C.bb3(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.u(k,A.a([new A.fY(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fY(h,8,h),w,new A.fY(h,3,h),v,new A.fY(h,16,h),u,new A.fY(h,10,h),A.lU(h,A.zA(k,B.yz,B.lU),h,new A.kX(h,new A.q2(q,q,q,q),r,B.ia,h),h,h,B.amd,1/0)],p)
w=j.a
if(w!=null){v=new A.nW(B.JR,1,B.lb)
B.d.u(f,A.a([new A.fY(h,16,h),A.fe("Debtor signature",h,h,h,A.hf(h,B.tE,h,h,h,h,h,h,h,B.dH,h,h,10,h,B.eD,h,!0,h,h,h,h),h),new A.fY(h,6,h),A.lU(h,new A.IU(w,B.Y0,h,h),h,new A.kX(h,new A.q2(v,v,v,v),A.w5(6),B.ia,h),82,h,B.Oy,1/0)],p))}f.push(new A.fY(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fe(w,h,h,h,D.ft3,h))
f.push(new A.fY(h,18,h))
f.push(A.xH(A.fe("NGMY.ORG",h,h,h,A.hf(h,D.Aw,h,h,h,h,h,h,h,B.dH,h,h,14,h,B.eD,h,!0,1.8,h,h,h),h)))
return f},
$S:369}
C.fN6.prototype={
$1(d){var w=null,v=new A.nW(D.JS,0.7,B.lb),u=A.w5(999)
return A.lU(w,A.fe(C.xp(d,!1),w,w,w,A.hf(w,D.JS,w,w,w,w,w,w,w,B.dH,w,w,9.5,w,B.eD,w,!0,w,w,w,w),w),w,new A.kX(w,new A.q2(v,v,v,v),u,B.ia,w),w,w,D.bID,w)},
$S:1964}
C.c8o.prototype={
$1(d){var w=null,v=B.bD.j(0.08),u=A.l(999),t=A.K(B.bD.j(0.28),B.r,1)
return A.r(w,A.d(C.xp(d,!1),w,w,w,w,w,w,D.fAe,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eL,w,w,w)},
$S:1965}
C.fZz.prototype={
$1(d){var w=null,v=A.aF(d,B.c1,x.w).w,u=A.l(26),t=A.aI(w,w,w,w,D.c19,w,w,w,new C.fZw(d),w,w,w,w,w,B.ch),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eG(w,B.L,new A.cO(new A.aY(0,380,0,v.a.b*0.9),A.aH(!1,B.a3,!0,u,new A.D(B.a0D,A.x(A.a([new A.bL(B.aa,w,w,t,w),new A.df(1,B.cj,A.cb(A.x(A.a([new A.eo(new C.b03(r,w),s),B.W,A.A(A.a([A.E(A.en(B.zJ,D.h1C,new C.fZx(s,r,d),A.dj(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fh,w,new A.b9(A.l(14),B.a1),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.af,A.E(A.di(B.a49,w,D.fZ1,new C.fZy(r,d),A.bo(B.b3,w,w,w,B.c,w,B.fh,w,new A.b9(A.l(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.i,0,w,w)],p),B.l,w,B.e,B.O,0,B.p),B.t,w,B.y,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.O,0,B.p),w),B.f,B.as,0,w,w,w,w,w,B.aj),w),w,w,0,Ap.a12,w,B.d8,w,w,w)},
$S:46}
C.fZw.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fZx.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aW.ap$.x.h(0,t.a)
m=m==null?null:m.gbg()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.mg(2.5),$async$$0)
case 4:w=3
return A.b(e.hr(B.hp),$async$$0)
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
C.fZy.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fTQ(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.L(x.q).f
s.T(A.b3(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fZr.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.b
return A.eG(w,B.as,A.x(A.a([new A.D(D.bE_,A.A(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nj,w,w,w),1),A.aI(w,w,w,w,B.lp,w,w,w,new C.fZp(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),w),new A.df(1,B.cj,new A.D(B.f5,A.bx(A.l(14),A.fU(t,B.A,w,w,B.cl,B.dD,!1,w,!1,w,w),B.aq),w),w),new A.D(B.Od,new A.a5(1/0,w,A.di(B.oN,w,D.aXI,new C.fZq(t,this.c,d),A.bo(B.b3,w,w,w,B.c,w,w,w,new A.b9(A.l(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.O,0,B.p),w,w,w,B.Op,w,B.d8,w,new A.b9(v,B.a1),w)},
$S:46}
C.fZp.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fZq.prototype={
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
C.fZD.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.a,s=this.b
return A.eG(w,B.as,new A.D(D.bE7,A.x(A.a([A.A(A.a([D.bJP,A.aI(w,w,w,w,B.lp,w,w,w,new C.fZB(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),B.T,new A.eo(A.bx(A.l(14),A.r(w,A.b2(w,w,w,new C.bdg(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ae,new A.a5(1/0,w,A.di(B.oN,w,D.aXI,new C.fZC(t,s,d),A.bo(B.b3,w,w,w,B.c,w,w,w,new A.b9(A.l(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.O,0,B.p),w),w,w,w,w,w,B.d8,w,new A.b9(v,B.a1),w)},
$S:46}
C.fZB.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fZC.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aW.ap$.x.h(0,t.a)
n=n==null?null:n.gbg()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.mg(2.5),$async$$0)
case 4:w=3
return A.b(e.hr(B.hp),$async$$0)
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
C.fHo.prototype={
$1(d){return d.a===this.a},
$S:256}
C.dQM.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dQx.prototype={
bnT(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.eg:B.c
s=u.a
w=2
return A.b(A.bU(t,null,new C.dQA(s,q,e),p,!0,!0,!1,B.K8,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dQB(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bnT(d,e)},
$S:1966}
C.dQA.prototype={
$1(d){var w,v=null,u=this.c===B.xc,t=u?D.duW:D.dqt
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.m(v,v,w.a.d.a?B.aS:B.as,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(O.amK,A.x(A.a([u,B.aw,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.m(v,v,w.a.d.a?B.bv:B.bh,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ae,A.is(!0,v,v,B.y,D.fju,new C.dQz(this.a,w,t,d),t.length,v,B.e_,B.ah,!0)],x.p),B.al,v,B.e,B.O,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:25}
C.dQz.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.l(14)
if(q)w=B.cJ.j(0.14)
else w=t.b.a.d.a?B.a_:B.aS
v=A.l(14)
if(q)u=B.cJ
else u=(t.b.a.d.a?B.bv:B.bh).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aP(!1,p,!0,A.r(B.A,C.b02(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dQy(t.d,r),s,s,s,s,s,s,s)},
$S:190}
C.dQy.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dQB.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dQv.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:86}
C.dQw.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cG(B.cw,e,v)
return new A.d2(e,!1,A.ij(B.A,A.as(A.aH(!1,B.a3,!0,v,new A.e0(new C.dQu(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.aj),v,v,v),v,new A.bg(t,new A.bs(0.96,1,u),u.k("bg<bQ.T>"))),v)},
$S:33}
C.dQu.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aF(d,B.c1,x.w).w,i=l.b,h=i.a.d.a,g=h?B.eg:B.c,f=A.l(14),e=A.K((h?B.bv:B.bh).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.as,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.l(8)
u=x.p
v=A.A(A.a([w,A.aP(!1,v,!0,new A.D(B.eC,A.X(B.cC,i.a.d.a?B.bv:B.bh,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dQf(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.i,0,k,k)
w=l.d
t=A.m(k,k,i.a.d.a?B.aS:B.as,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aVf("Name")
r=l.a
q=r.d==null?k:new C.dQg(r,l.e,a0)
p=A.l(20)
o=i.a.d.a?B.br:B.m9
n=A.K(B.cJ.j(0.35),B.r,1)
m=r.d
t=A.aM(k,B.Z,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.bff(new A.D(B.fn,A.aP(!1,p,!0,A.r(B.A,C.b02(m==null?"\ud83d\udc64":A.fNX(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cq,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.l6,k,B.abk,k,k)
v=A.a([v,B.ae,t,B.T,A.d("Gender (required)",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bv:B.bh,k,k,k,k,k,k,k,k,11.5,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.A(A.a([A.E(i.aVW("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dQh(r,a0),r.d===B.xc),1),B.af,A.E(i.aVW("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dQm(r,a0),r.d===B.a82),1)],u),B.l,k,B.e,B.i,0,k,k)],u)
if(r.d!=null)B.d.u(v,A.a([B.T,new A.bL(B.a7,k,k,A.hs(D.c_p,D.h_U,new C.dQn(r,l.e,a0),A.fs(k,k,k,k,k,k,k,k,k,k,k,B.cJ,k,k,k,k,k,k,k,k,k,k,k,k,k,B.ch)),k)],u))
v.push(B.W)
t=A.m(k,k,i.a.d.a?B.aS:B.as,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.v_(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aVg("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ak,k,k,s,k,k,B.ec,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ao,k,k,k,k))
v.push(B.W)
t=i.a.d.a
s=t?B.a_:B.aS
q=A.l(10)
p=A.l(10)
o=A.l(10)
n=A.K((t?B.bv:B.bh).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bv:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xp(r.a,!1)
v.push(A.aH(!1,B.a3,!0,q,A.aP(!1,p,!0,A.r(k,A.A(A.a([A.E(A.x(A.a([t,B.bG,A.d(m,k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.as,k,k,k,k,k,k,k,k,14,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.i,0,B.p),1),D.bX2],u),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bk,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dQo(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.aj))
if(!h)B.d.u(v,A.a([B.T,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bv:B.bh,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.W)
t=A.m(k,k,i.a.d.a?B.aS:B.as,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aVf("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ao,k,k,k,k))
v.push(B.ae)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.as,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bv:B.bh,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b3o(r.b.length!==0,B.mi,new C.dQp(r,i,a0),new C.dQq(r,a0),"Upload from gallery","ID photo"))
v.push(i.b3o(r.c.length!==0,D.bQn,new C.dQr(r,i,d,a0),new C.dQs(r,a0),"Camera or gallery","Selfie"))
v.push(B.T)
t=l.w
v.push(new Ao.a8U("Signature (optional)",t,new C.dQt(a0),new C.dQi(a0,t),new C.dQj(d,t,a0),k))
v.push(B.aC)
i=i.a.d.a
t=i?B.bv:B.bh
s=(i?B.bv:B.bh).j(0.28)
s=A.E(A.dU(E.aXB,new C.dQk(d),A.dj(k,k,k,k,k,k,k,k,k,t,k,k,B.qF,k,new A.b9(A.l(10),B.a1),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bo(B.cJ,k,k,k,B.c,k,B.qF,k,new A.b9(A.l(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.af,A.E(A.bJ(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vM,k,k,k),k,new C.dQl(r,w,d),t),1)],u),B.l,k,B.e,B.i,0,k,k))
return A.r(k,A.cb(A.x(v,B.al,k,B.e,B.O,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.t1,B.jr,k,k,360)},
$S:175}
C.dQf.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dQg.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dQh.prototype={
$0(){return this.b.$1(new C.dQe(this.a))},
$S:0}
C.dQe.prototype={
$0(){var w=this.a
w.d=B.xc
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dQm.prototype={
$0(){return this.b.$1(new C.dQd(this.a))},
$S:0}
C.dQd.prototype={
$0(){var w=this.a
w.d=B.a82
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dQn.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dQo.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xu(null,u.b,A.c_(2020,1,1,0,0,0,0,0),null,s,A.c_(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dQc(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQc.prototype={
$0(){var w=this.b
return this.a.a=A.c_(w.gcl(),w.gcg(),w.gcz(),0,0,0,0,0)},
$S:0}
C.dQp.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Q5(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dQb(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQb.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dQq.prototype={
$0(){return this.b.$1(new C.dQa(this.a))},
$S:0}
C.dQa.prototype={
$0(){return this.a.b=""},
$S:0}
C.dQr.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.eg:B.c
w=3
return A.b(A.bU(q,null,new C.dQ8(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Q5(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dQ9(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQ8.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dH(!1,w,w,w,!0,w,w,w,!0,w,w,B.as7,w,w,w,w,new C.dQ2(d),!1,w,w,w,w,w,w,w,D.fQW,w,w,w),A.dH(!1,w,w,w,!0,w,w,w,!0,w,w,B.as5,w,w,w,w,new C.dQ3(d),!1,w,w,w,w,w,w,w,D.fY0,w,w,w)],x.p),B.l,w,B.e,B.O,0,B.p),!0,!1,B.ag,!0,!0)},
$S:25}
C.dQ2.prototype={
$0(){A.a6(this.a,!1).O("camera")
return null},
$S:0}
C.dQ3.prototype={
$0(){A.a6(this.a,!1).O("gallery")
return null},
$S:0}
C.dQ9.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dQs.prototype={
$0(){return this.b.$1(new C.dQ7(this.a))},
$S:0}
C.dQ7.prototype={
$0(){return this.a.c=""},
$S:0}
C.dQt.prototype={
$0(){return this.a.$1(new C.dQ6())},
$S:0}
C.dQ6.prototype={
$0(){},
$S:0}
C.dQi.prototype={
$0(){return this.a.$1(new C.dQ5(this.b))},
$S:0}
C.dQ5.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dQj.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.aj1(u.a,null,null,new C.dQ4(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQ4.prototype={
$4(d,e,f,g){this.a.$1(new C.dQ1(this.b,d))},
$S:410}
C.dQ1.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.u(w,this.b)},
$S:0}
C.dQk.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dQl.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.L(x.q).f.T(D.foE)
return}if(w.a.d==null){w.c.L(x.q).f.T(D.fls)
return}A.a6(w.c,!1).O(!0)},
$S:0}
C.dQP.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:86}
C.dQQ.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.eg:B.c,n=A.l(14),m=A.K((p?B.bv:B.bh).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.m(r,r,q.a.d.a?B.aS:B.as,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Bv(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.m(r,r,q.a.d.a?B.bv:B.bh,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zL(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.m(r,r,w.zL(r).length>0?B.bD:B.cJ,r,r,r,r,r,r,r,r,12,r,r,B.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bv:B.bh
t=(q?B.bv:B.bh).j(0.28)
s=x.p
return new A.d2(e,!1,A.as(A.aH(!1,B.a3,!0,r,A.r(r,A.x(A.a([p,B.T,v,u,B.aC,A.A(A.a([A.E(A.dU(B.o4,new C.dQN(d),A.dj(r,r,r,r,r,r,r,r,r,w,r,r,B.k2,r,new A.b9(A.l(10),B.a1),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.af,A.E(A.bJ(D.fYs,r,new C.dQO(d),A.bo(B.cJ,r,r,r,B.c,r,B.k2,r,new A.b9(A.l(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.i,0,r,r)],s),B.al,r,B.e,B.O,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.CD,B.GZ,r,r,300),B.f,B.L,0,r,r,r,r,r,B.aj),r,r,r),r)},
$S:33}
C.dQN.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dQO.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dQJ.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dQK(r),p=r.a.d.a,o=p?B.eg:B.c,n=A.l(14),m=A.K((p?B.bv:B.bh).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.m(s,s,r.a.d.a?B.aS:B.as,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Bv(l.c),s,s,s,s,s,s,D.fBS,s,s,s)],p),B.l,s,B.e,B.i,0,s,s)
w=A.iO((r.a.d.a?B.bv:B.bh).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a2M,"View receipt",new C.dQC(r,d,l))
u=l.x!=null
t=u?B.pD:B.qO
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bE4,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dQD(r,d,l)),q.$3$icon$label$onTap(B.CS,"Edit",new C.dQE(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mi,"View / download ID",new C.dQF(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bQm,"View / download selfie",new C.dQG(r,d,l)))
if(l.gaHU())p.push(q.$3$icon$label$onTap(Ac.a4_,"View / download signature",new C.dQH(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bD,B.ek,"Delete",new C.dQI(r,d,l)))
p.push(B.aw)
return A.bm(!0,new A.D(B.uH,A.r(s,A.x(p,B.l,s,B.e,B.O,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:25}
C.dQK.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aS:B.as
else w=d
return A.aP(!1,v,!0,new A.D(B.f0,A.A(A.a([A.X(e,w,v,v,v,20),B.bd,A.d(f,v,v,v,v,v,v,A.m(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1967}
C.dQC.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fZv(w,this.c)},
$S:0}
C.dQD.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.SV(this.c)},
$S:0}
C.dQE.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.DH(this.c)},
$S:0}
C.dQF.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bGA(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dQG.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bGA(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dQH.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fZA(w,this.c)},
$S:0}
C.dQI.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.Q4(0,this.c)},
$S:0}
C.dQR.prototype={
$1(d){return d.x==null},
$S:256}
C.dQS.prototype={
$1(d){return d.x!=null},
$S:256}
C.dQT.prototype={
$2(d,e){return d+e.c},
$S:1968}
C.dQU.prototype={
$0(){return this.a.bDS()},
$S:0}
C.dQL.prototype={
$0(){return this.a.agk(this.b)},
$S:0}
C.fI9.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fIa.prototype={
$0(){return B.d.gH(D.a5j)},
$S:z+77}
C.dgq.prototype={
$0(){var w=this.a
return w.m(new C.dgo(w,this.b))},
$S:0}
C.dgo.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dgp.prototype={
$0(){},
$S:0}
C.dgr.prototype={
$0(){var w=this.a.gc2j()
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.fKF.prototype={
$1(d){return C.hmR(A.a2(d,x.N,x.z))},
$S:z+11}
C.fKG.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fKH.prototype={
$2(d,e){var w=A.ca(d.a,null),v=A.ca(e.a,null)
if(w!=null&&v!=null)return B.o.aS(w,v)
return d.d.aS(0,e.d)},
$S:z+83}
C.fY6.prototype={
$1(d){return d.aj()},
$S:z+12}
C.h5K.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fHf.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bRP.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eK(e,v)?v:null},
$S:1969}
C.fYH.prototype={
$1(d){var w=this
return new C.a_L(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dh5.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dh4(w,d))},
$S:z+80}
C.dh4.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgU.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cJ(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dgR.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dgs.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dgt.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dgV.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dgB.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.eg:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.as,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.m(w,w,v?B.bv:B.bh,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ei(A.a([A.bP(!1,B.dt,w,w,!0,w,w,w,new C.dgz(d),w,w),A.bJ(B.xA,w,new C.dgA(d),A.bo(B.nt,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.dgz.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dgA.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dgC.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.dgS.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dgT.prototype={
$0(){return B.d.gH(D.zW)},
$S:z+14}
C.dgx.prototype={
$1(d){var w=this.a,v=w.y,u=w.gz5(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.U8(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dgy.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgD.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a_j(v,u,J.ad(w.d),null)},
$S:z+40}
C.dgE.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dh3.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.az(s,new C.a_0(r.y,r.gz5(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dh1(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bcD(v,e,w,u,t,r.gbUt(),C.hCy(r.y.Q),r.gz5(0),s)
w=t}return A.c6(q,new C.dh2(r,e),new A.D(B.a0V,w,s))},
$S:1970}
C.dh2.prototype={
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
C.dh1.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJ5(B.qx,B.iB)},
$S:0}
C.dgO.prototype={
$0(){var w=this.a
return w.m(new C.dgN(w))},
$S:0}
C.dgN.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dgP.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).O(null)
return null},
$S:0}
C.dgu.prototype={
$1(d){var w,v,u=null,t=A.l(26),s=E.kr.j(0.5),r=x.p,q=A.a([D.fPt,B.ae],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ct(p.d)?"Write this book":"Write a new book"
q.push(p.ZS(d,B.ed,w,J.ct(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.ZS(d,K.aq2,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cJ(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cy,A.d("Your book is in English.",u,u,u,u,u,u,A.m(u,u,D.kP.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cy,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.m(u,u,D.kP.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.ZS(d,W.ar3,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.ZS(d,B.qT,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.ZS(d,B.qT,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.u(q,r)}return A.eG(u,E.C3,A.bm(!0,new A.D(Ab.yS,A.x(q,B.E,u,B.e,B.O,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,B.Or,u,B.d8,u,new A.b9(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:46}
C.dgQ.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dgH.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cJ(w.d)
return new C.a_N(v,J.cJ(w.d),w.r+1,null)},
$S:z+44}
C.dgI.prototype={
$1(d){var w=null
return A.oQ(!1,A.ei(w,w,w,E.C3,new A.k6(this.a,new C.dgG(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:318}
C.dgG.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.ab_,B.p3,A.E(A.d(e,w,w,w,w,w,w,B.jA,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:753}
C.dgJ.prototype={
$0(){return this.a.a=!1},
$S:51}
C.dgK.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:195}
C.dgL.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgM.prototype={
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
case 3:if(s.c!=null)s.m(new C.dgF(s,t))
w=4
return A.b(s.lh(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dgF.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgX.prototype={
$1(d){var w=null
return A.oQ(!1,A.ei(w,w,w,E.C3,new A.k6(this.a,new C.dgW(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:318}
C.dgW.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.ab_,B.p3,A.E(A.d(e,w,w,w,w,w,w,B.jA,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:753}
C.dgY.prototype={
$0(){return this.a.a=!1},
$S:51}
C.dgZ.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:195}
C.dh_.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:195}
C.dh0.prototype={
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
C.dgv.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bkP(B.qx,A4.O1)},
$S:0}
C.dgw.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJ5(B.qx,A4.O1)},
$S:0}
C.diS.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.diT.prototype={
$1(d){var w=this.a
return w.m(new C.diR(w))},
$S:9}
C.diR.prototype={
$0(){return this.a.e="page"},
$S:0}
C.diU.prototype={
$1(d){var w=this.a
return w.m(new C.diQ(w))},
$S:9}
C.diQ.prototype={
$0(){return this.a.e="book"},
$S:0}
C.diV.prototype={
$1(d){var w=this.a
return w.m(new C.diP(w))},
$S:9}
C.diP.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.diW.prototype={
$0(){var w=this.a
return w.m(new C.diO(w,this.b))},
$S:0}
C.diO.prototype={
$0(){var w=this.b
this.a.d.sb1(0,w)
return w},
$S:0}
C.diX.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga2H()
A.a6(this.b,!1).O(new A.brx(w,v))},
$S:0}
C.dhk.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dhj.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a_J(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dho.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dhn.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.baP(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hs,v,v,v)
return A.ei(A.a([A.bP(!1,B.dt,v,v,!0,v,v,v,new C.dhl(d),v,v),A.bJ(B.xA,v,new C.dhm(d),A.bo(B.nt,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.C3,w,v,v,v,v,D.fOf,v)},
$S:18}
C.dhl.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dhm.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dhp.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dhq.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.cb(A.bX(B.bH,r,B.bt,t,18,14),B.t,t,B.y,t,D.bF3,t,t,B.ah)},
$S:339}
C.dhi.prototype={
$0(){return this.a.QS(0,this.b)},
$S:0}
C.dhh.prototype={
$0(){return this.a.Qj(0,this.b)},
$S:0}
C.cPK.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cPL.prototype={
$0(){return B.d.gH(D.zW)},
$S:z+14}
C.cPM.prototype={
$4(d,e,f,g){var w=null,v=A.l(e)
return A.bS(0,new A.D(d,new A.bN(new A.o(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.n),B.bi,w,w),w),0,0,0)},
$S:1972}
C.d8h.prototype={
$1(d){return this.a.m(new C.d8g(this.b,this.c))},
$S:9}
C.d8g.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d8G.prototype={
$1(d){return this.a.m(new C.d8t())},
$S:2}
C.d8t.prototype={
$0(){},
$S:0}
C.d8H.prototype={
$1(d){return this.a.m(new C.d8s())},
$S:2}
C.d8s.prototype={
$0(){},
$S:0}
C.d8I.prototype={
$0(){var w=this.a
return w.m(new C.d8r(w,this.b))},
$S:0}
C.d8r.prototype={
$0(){var w=this.a
return w.d=w.gor().Gf(this.b.a)},
$S:0}
C.d8J.prototype={
$0(){var w=this.a
return w.m(new C.d8q(w,this.b))},
$S:0}
C.d8q.prototype={
$0(){var w=this.a
return w.d=w.gor().cNI(this.b)},
$S:0}
C.d8K.prototype={
$1(d){return this.a.m(new C.d8p())},
$S:2}
C.d8p.prototype={
$0(){},
$S:0}
C.d8L.prototype={
$0(){var w=this.a
return w.m(new C.d8o(w,this.b))},
$S:0}
C.d8o.prototype={
$0(){var w=this.a
return w.d=w.gor().cNN(this.b.a)},
$S:0}
C.d8M.prototype={
$1(d){var w=this.a
return w.m(new C.d8B(w,d))},
$S:6}
C.d8B.prototype={
$0(){var w=this.a
return w.d=w.gor().cOH(this.b)},
$S:0}
C.d8N.prototype={
$1(d){var w=this.a
return w.d=w.gor().aG1(d)},
$S:2}
C.d8O.prototype={
$1(d){var w=this.a
return w.d=w.gor().cNQ(d)},
$S:2}
C.d8Q.prototype={
$1(d){var w=this.a
return w.d=w.gor().cOF(d)},
$S:2}
C.d8R.prototype={
$1(d){var w=this.a
return w.m(new C.d8A(w,d))},
$S:9}
C.d8A.prototype={
$0(){var w=this.a
return w.d=w.gor().cOw(this.b)},
$S:0}
C.d8S.prototype={
$0(){var w=this.a,v=w.gor(),u=B.a.i(w.gz5(0).a.a),t=B.a.i(w.gaDd().a.a)
u=v.bfw(B.a.i(w.gasQ().a.a),t,u)
A.a6(this.b,!1).O(u)
return null},
$S:0}
C.bRZ.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bRT.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bRS(w,d))},
$S:12}
C.bRS.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bS1.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bRU.prototype={
$0(){var w=this.a
w.Q=D.b1R
w.adZ(1)
w.r.x=null},
$S:0}
C.bRV.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b1R)return
w=new A.e2()
w.cY(u.as*13+u.a.e)
v=u.r
v.Q=3+w.az(3)
v.z=D.d5x[w.az(6)]
v.as=u.f.a+2.6},
$S:0}
C.bRY.prototype={
$0(){var w=this.a
w.Q=D.ady
w.adZ(2)
w.r.z=null},
$S:0}
C.bRX.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hG9
t.adZ(3)
w=t.r
w.d=s
w.x="I say: "+t.gCy()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.az(3)
w.z=s?D.dc5[v.az(4)]:D.dxt[v.az(3)]
w.as=t.a+2.8},
$S:0}
C.bS_.prototype={
$0(){var w=this.a
w.Q=D.b1S
w.CW=this.b
w.cy=1
w.adZ(4)
w.r.f=w.f.a+5},
$S:0}
C.bS0.prototype={
$0(){},
$S:0}
C.bRW.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bRQ.prototype={
$0(){return this.a.L7(this.b)},
$S:0}
C.bRR.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bTv.prototype={
$0(){var w=this
return w.a.Rb(w.b,0,w.c,w.d)},
$S:0}
C.bTw.prototype={
$0(){var w=this
return w.a.Rb(w.b,3,w.c,w.d)},
$S:0}
C.bTx.prototype={
$0(){var w=this
return w.a.Rb(w.b,1,w.c,w.d)},
$S:0}
C.bTy.prototype={
$0(){var w=this
return w.a.bTU(w.b,w.c,w.d)},
$S:0}
C.bTz.prototype={
$0(){var w=this
return w.a.Rb(w.b,4,w.c,w.d)},
$S:0}
C.bTA.prototype={
$0(){var w=this
return w.a.Rb(w.b,2,w.c,w.d)},
$S:0}
C.bTB.prototype={
$0(){var w=this
return w.a.Rb(w.b,5,w.c,w.d)},
$S:0}
C.bTC.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:754}
C.bTu.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a6u[d],p=q.a.a2(0,new A.p(0,-q.b*1.2*124)),o=A.ft(r,B.ct,r,3,r,A.cQ(r,r,r,r,r,r,r,r,r,D.fsK,e),B.a5,B.bX,r,B.dE,B.bY)
o.o8(130)
w=o.b.a.c
w=p.aJ(0,new A.p(0,w.gba(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bn(A.bt(w,v.gba(v)+12,u+18),B.i8)
u=this.a
v=t.eQ(B.dM)
w=$.S()
s=A.L()
s.r=B.dx.gp(0)
u.an(v,s)
s=A.L()
s.r=D.qo.gp(0)
u.an(t,s)
w=new A.aG(w.r,B.ai,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.aZ(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.bu())
v=A.L()
v.r=D.qo.gp(0)
u.af(w,v)
o.a5(u,new A.p(t.a+9,t.b+6))},
$S:755}
C.bSf.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.bSg.prototype={
$2(d,e){var w=this.a,v=B.o.aS(w.amD(d),w.amD(e))
if(v!==0)return v
return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.fvj.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.h5B.prototype={
$2(d,e){if(e!=null)J.c5(this.a.c3(0,d,new C.h5C()),e)},
$S:z+66}
C.h5C.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.h5D.prototype={
$1(d){return d!==this.a},
$S:3}
C.h5E.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.h5F.prototype={
$1(d){return d!==this.a&&!B.d.aU(this.b,new C.h5A(this.c,d))},
$S:3}
C.h5A.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.h5G.prototype={
$1(d){return d!==this.a},
$S:3}
C.h5H.prototype={
$1(d){return d!==this.a},
$S:3}
C.h5I.prototype={
$1(d){return d!==this.a&&!B.d.aU(this.b,new C.h5z(this.c,d))},
$S:3}
C.h5z.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fIL.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fX7.prototype={
$1(d){return d.Q},
$S:z+15}
C.fX8.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fEB.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fLB.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bN2.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.h60.prototype={
$2(d,e){return B.o.aS(C.hyS(d),C.hyS(e))},
$S:228}
C.h61.prototype={
$1(d){return d!==this.a},
$S:3}
C.fXD.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bLc.prototype={
$0(){var w=this.a
w.ch=!0
w.b93()},
$S:0}
C.bL7.prototype={
$0(){},
$S:0}
C.bLd.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bL5.prototype={
$0(){},
$S:0}
C.bL6.prototype={
$0(){},
$S:0}
C.bLb.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bS(0,A.b2(u,u,u,new C.bdi(t,u),B.az),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.l(14)
s.push(A.ap(u,A.r(u,A.d(t.dy,u,u,u,u,u,u,D.fAq,B.K,u,u),B.f,u,u,new A.o(w,u,u,v,u,u,B.n),u,u,u,u,B.bV,u,u,u),u,u,14,14,6,u))}return A.az(B.c3,new A.an(B.a0,u,B.ad,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bL8(t,e),u,u,u,u,u,u,u,new C.bL9(t,e),u,u,u,u,u,u,u,u,u,new C.bLa(t,e),u,u,u,u,!1,B.a4)},
$S:36}
C.bL8.prototype={
$1(d){return this.a.db=B.j.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bLa.prototype={
$1(d){return this.a.db=B.j.D(d.b.a/this.b.b,0.08,0.92)},
$S:22}
C.bL9.prototype={
$1(d){return this.a.db=B.j.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bL4.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.cqM.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cqN.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cqL(w))},
$S:0}
C.cqL.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cqO.prototype={
$0(){var w=this,v=w.a
v.gj1()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cqP.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cqQ.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cqR.prototype={
$0(){},
$S:0}
C.cqS.prototype={
$0(){var w=this.a
w.z=w.Xn(++w.e)
w.Q=A.c1(w.gkT()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cqI.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.cqJ.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj1().length,e=i/2,d=new C.cqK(i,f,h),a0=g.as,a1=A.a4(a0).k("b8<2>")
a0=A.C(new A.b8(a0,a1),a1.k("M.E"))
a0=A.bS(0,A.c6(new A.ha(a0),new C.cqD(g,new A.p(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj1().length!==0&&!B.d.q(g.gj1(),-1)
v=x.p
e=A.a([a0,A.ap(j,new C.QR(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cK(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new R.N2(new C.cqE(g,u),new C.cqF(g,u),new C.cqG(g,u),j,j,new A.bq("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ap(j,A.d(a1,j,j,j,j,j,j,A.m(j,j,B.a.q(a1,"not a child")?B.fi:B.b4,j,j,j,j,j,j,j,j,13,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj1().length!==0&&!B.d.q(g.gj1(),-1)){a0=g.e+1>=g.gkT().length?"See my result":"Next family"
g=A.as(C.uA(a0,g.gqo(g),B.cT,B.jt,D.fC),j,j,j)}else{a1=A.a([],v)
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
a1.push(new A.r8(new A.bs(0,p,t),new C.cqH(),new R.Er(u,j,new C.QR(l.b,k,62,!1,j),new A.kJ(0.25,new C.QR(m.b,k,62,!1,j),j),new A.kd(n,B.aj,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.J,R.hCq(),!0,!0,j,j,j,j,j,j,!1,B.iS,j,new A.bq("chip-"+r,a0),w),B.b_,B.iQ,j,new A.bq("t"+r+"-"+q,a0),v))}++u}g=A.bX(B.fW,a1,B.bt,j,6,8)}e.push(A.ap(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ad,B.t,e,j)},
$S:68}
C.cqK.prototype={
$1(d){return new A.p(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:742}
C.cqD.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.gj1().length!==0&&!B.d.q(t.gj1(),-1)
return A.b2(p,p,p,new C.bcM(q.b,o,v,w,p),B.az)},
$S:57}
C.cqF.prototype={
$1(d){return this.a.gj1()[this.b]===-1},
$S:z+30}
C.cqG.prototype={
$1(d){return this.a.cRz(this.b,d.a)},
$S:z+31}
C.cqE.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj1()[t]!==-1,r=A.l(18),q=e.length!==0?B.cT.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.cT:B.k_,B.r,2)
u=s?A.lE(new C.cqC(),A.as(new C.QR(u.gaFu()[u.gj1()[t]].b,u.gaFu()[u.gj1()[t]].a,62,!1,v),v,v,v),B.lc,B.iQ,v,v,new A.bs(0.3,1,x.X),x.i):D.bd8
return A.cT(v,u,v,v,B.b_,new A.o(q,v,w,r,v,v,B.n),B.a3,v,100,v,v,v,v,v,88)},
$S:1975}
C.cqC.prototype={
$3(d,e,f){return A.e1(B.A,f,e,null,null)},
$S:113}
C.cqH.prototype={
$3(d,e,f){return A.dO(f,new A.p(Math.sin(e*24)*8*(1-e),0))},
$S:113}
C.cQO.prototype={
$1(d){return d>=1},
$S:121}
C.cFK.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkT()[w.e].d.length)w.m(new C.cFJ(w))},
$S:12}
C.cFJ.prototype={
$0(){return this.a.f++},
$S:0}
C.cFS.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cFT.prototype={
$0(){var w=this.a,v=this.b
w.z.I(0,v)
w.Q=v},
$S:0}
C.cFU.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cFR(w))},
$S:0}
C.cFR.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cFV.prototype={
$0(){return this.a.f++},
$S:0}
C.cFW.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cFX.prototype={
$0(){},
$S:0}
C.cFY.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a8(0)
w.as=!1
w.ay=0},
$S:0}
C.cFM.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.cFN.prototype={
$3(d,e,f){var w=null
return A.lE(new C.cFL(this.a,e),w,B.b_,B.hK,w,w,new A.bs(w,this.b,x.X),x.i)},
$S:1976}
C.cFL.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.cT.j(u.as?0.6:0.15)
t=A.a([new A.ab(0,B.G,t,B.J,u.as?40:18)],x.V)
w=this.b
return A.r(v,A.hY(new A.BM(new A.uV(B.w.j(e),B.M0,v,B.Yv),H.bXH(A.b2(v,v,v,new C.aBO(u.gkT()[u.e].c,u.as,v),B.az),new A.Ew(w,w,B.Wl)),v),B.aq),B.f,v,v,new A.o(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:1977}
C.cFO.prototype={
$3(d,e,f){return A.d3(A.dO(f,new A.p(0,14*(1-e))),e)},
$S:103}
C.cFP.prototype={
$3(d,e,f){return A.dO(f,new A.p(Math.sin(e*22)*8*(1-e),0))},
$S:113}
C.cFQ.prototype={
$0(){return this.a.bq9(this.b)},
$S:0}
C.f7L.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.an9$)
v.an9$=w
v.qa$.sp(0,w)
v.ar1(u)},
$S:7}
C.fhV.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:12}
C.bT0.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bT_())},
$S:0}
C.bT_.prototype={
$0(){},
$S:0}
C.bSY.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bSW.prototype={
$0(){},
$S:0}
C.bSX.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gMO()
w=s+1>=r.length?3:5
break
case 3:q=C.bGP(p.gapS(0),0,r.length)
p.m(new C.bST(p,q))
o=p
w=6
return A.b(C.BX(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.BY(s.d,s.c.a,"school",p.gapS(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bSU())
w=4
break
case 5:p.m(new C.bSV(p))
p.gqw().VX(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bST.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bSU.prototype={
$0(){},
$S:0}
C.bSV.prototype={
$0(){return this.a.x++},
$S:0}
C.bSZ.prototype={
$0(){return this.a.L7(this.b)},
$S:0}
C.bSS.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.f7M.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.p(t,s),q=v.b,p=v.d,o=p?C.hCE(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.En
C.SJ(q,D.eqx,0,0.2,-0.6,-0.2,null,w,D.epg,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a2(0,new A.p(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.S()
p=A.L()
p.r=D.Gl.gp(0)
p.c=3
p.d=B.bw
q.ah(new A.p(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f7N.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.SJ(this.a,D.epD,0,u,0.7,-0.5,null,null,D.JJ,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f7O.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.SJ(this.a,D.erj,0,0,0.8,-0.5,null,null,D.JJ,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f7P.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.SJ(w.b,D.eqr,0,v,-0.8,-0.5,null,null,D.JJ,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f7Q.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.p(34,-122+Math.sin(w*5)*5)
else v=v?D.eqv:D.En
C.SJ(p,D.epX,0,t,0,-0.6,null,v,D.JJ,3,0,s,1.3,u,0,w,0)
q=q.ccc(new A.p(222,455),9)
$.S()
w=A.L()
w.r=B.cT.gp(0)
p.af(q,w)},
$S:0}
C.f7R.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:754}
C.bSE.prototype={
$2(d,e){return d+e},
$S:60}
C.bSP.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bSQ.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bSR.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj1()[u.b]=s
t.gj1()[u.d]=t.y
w=t.as
v=t.qa$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bSL.prototype={
$1(d){return d},
$S:94}
C.bSK.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.qa$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bSM.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bSN.prototype={
$0(){},
$S:0}
C.bSO.prototype={
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
C.bSG.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.bSH.prototype={
$2(d,e){var w=this.a
w=w.gkT()[w.f].e
return B.o.aS(w[d],w[e])},
$S:60}
C.bSI.prototype={
$2(d,e){var w=null,v=C.hdT(new A.av(A.aS(1/0,e.a,e.b),A.aS(1/0,e.c,e.d))),u=this.a
return A.az(B.c3,new A.eo(A.b2(w,w,w,new C.bjX(u,u.qa$),B.az),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bSF(u,v),w,w,w,w,!1,B.a4)},
$S:36}
C.bSF.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj1().length
u=B.o.D(B.j.bh((t.a-s.a)/r/450*v),0,v-1)
w.d1n(w.gj1()[u])}},
$S:22}
C.bSJ.prototype={
$1(d){var w=this.a
return w.gkT()[w.f].d[d]},
$S:76}
C.ds1.prototype={
$2(d,e){return 0},
$S:60}
C.bSq.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bSp())},
$S:0}
C.bSp.prototype={
$0(){},
$S:0}
C.bSo.prototype={
$0(){},
$S:0}
C.bSi.prototype={
$0(){},
$S:0}
C.bSj.prototype={
$0(){},
$S:0}
C.bSn.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.Bi},
$S:0}
C.bSm.prototype={
$1(d){var w=null,v=this.a.gqw(),u=A.d(d,w,w,w,w,w,w,D.aW8,w,w,w),t=v.gbmA(0)
return A.az(B.c3,A.x(A.a([u,B.bG,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aWm,w,w,w)],x.p),B.E,w,B.e,B.i,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbsw(v),w,w,w,w,w,w,!1,B.a4)},
$S:134}
C.bSk.prototype={
$0(){return this.a.L7(this.b)},
$S:0}
C.bSl.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bSh.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.e2d.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e2e.prototype={
$1(d){return this.a},
$S:39}
C.e2f.prototype={
$0(){var w=this.a
return w.d=w.gSW().bf_(this.b)},
$S:0}
C.e2b.prototype={
$1(d){return new C.U9(this.a,null)},
$S:z+32}
C.e2c.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e2a.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hs,w,w,w)
return A.ei(A.a([A.bP(!1,E.aXL,w,w,!0,w,w,w,new C.e28(d),w,w),A.bP(!1,D.fVT,w,w,!0,w,w,w,new C.e29(d),w,w)],x.p),w,w,D.fC,v,w,w,w,w,D.fIm,w)},
$S:18}
C.e28.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e29.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e27.prototype={
$0(){var w=null,v=this.a.c.L(x.q).f,u=this.b
return v.T(A.b3(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e2g.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:13}
C.e2h.prototype={
$0(){var w=this.a,v=this.b,u=C.bEy(v,10,w.r,!1)
return w.uC(C.hmS(w.a.d,"kahoot",u,w.gb6B(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e2i.prototype={
$0(){var w=this.a
return w.uC(new C.amb(this.b,w.a.d,w.r,null))},
$S:0}
C.e2j.prototype={
$0(){var w=this.a
return w.uC(new C.ako(this.b,w.a.d,w.r,null))},
$S:0}
C.e2m.prototype={
$0(){var w=this.a
return w.uC(new C.av5(this.b,w.a.d,w.r,null))},
$S:0}
C.e2n.prototype={
$0(){var w=this.a
return w.uC(new C.az3(this.b,w.a.d,w.r,null))},
$S:0}
C.e2o.prototype={
$0(){var w=this.a
return w.uC(new C.ame(this.b,w.a.d,w.r,null))},
$S:0}
C.e2p.prototype={
$0(){var w=this.a
return w.uC(new C.ami(this.b,w.a.d,w.r,null))},
$S:0}
C.e2q.prototype={
$0(){var w=this.a
return w.uC(new C.amk(this.b,w.a.d,w.r,null))},
$S:0}
C.e2r.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d1I()
return v.uC(C.hmS(v.a.d,"creator_"+u.a,w,v.gb6B(),"A game by the family",t,this.c.a))},
$S:0}
C.e2s.prototype={
$0(){return this.a.OR(this.b)},
$S:0}
C.e2t.prototype={
$0(){return this.a.XP(0,this.b)},
$S:0}
C.e2k.prototype={
$0(){return this.a.OR(null)},
$S:0}
C.e2l.prototype={
$0(){return this.a.L(x.q).f.T(D.fly)},
$S:0}
C.bSC.prototype={
$0(){var w=this.a
w.d=D.b1f
w.z=3},
$S:0}
C.bSD.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aPW()}else w.m(new C.bSB(w))},
$S:12}
C.bSB.prototype={
$0(){return this.a.z--},
$S:0}
C.bSs.prototype={
$0(){var w=this.a
w.d=D.ade
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bSt.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bSr(w))
if(w.as<=0){d.a1(0)
w.b6x(-1)}},
$S:12}
C.bSr.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bSy.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.X1},
$S:0}
C.bSz.prototype={
$0(){return this.a.e++},
$S:0}
C.bSv.prototype={
$0(){var w=this.a
w.d=D.b1g
w.ay=this.b},
$S:0}
C.bSw.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bSA.prototype={
$2(d,e){return B.o.aS(e.b,d.b)},
$S:1978}
C.bSx.prototype={
$0(){return this.a.L7(this.b)},
$S:0}
C.bSu.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bS2.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.ax()
s=A.a([new A.au(new A.ba(s,B.b5,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.I)(t),++v){u=t[v]
s.push(new A.au(new A.ba(u,B.b5,B.aP),r))}return s},
$S:1979}
C.bS3.prototype={
$0(){return this.a.gD7().c.push(C.h7F(null,0,20,""))},
$S:0}
C.bSd.prototype={
$1(d){var w=null
return A.bA(w,new A.b6(4,A.l(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dr,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.VU,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:264}
C.bSc.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gD7().c,m=this.b,l=n[m],k=o.cff(l),j=B.c.j(0.06),i=A.l(18),h=A.K(B.aT,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.KY,p,p,p),B.b1],g)
if(n.length>1)f.push(A.aI(p,p,p,p,B.arT,p,p,p,new C.bS7(o,m),p,p,p,p,p,p))
n=J.a7(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.i,0,p,p),A.aM(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bS8(l),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a5,p,B.ao,p,p,p,p),B.T],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aDU[v]
t=D.aDz[v]
s=v+1
f.push(new A.D(B.eP,new A.c8(B.aL,B.e,B.i,B.l,p,B.p,p,0,A.a([A.d(u,p,p,p,p,p,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.af,new A.bz(1,B.bb,A.aM(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bS9(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a5,p,B.ao,p,p,p,p),p),new As.Pu(v,l.c,new C.bSa(o,l),p,!1,D.lD,p,p,p,p,p,!1,!1,p,I.b1F,p,p,p,p,p,w)],g),p),p))}f.push(D.fNV)
f.push(B.am)
n=A.a([D.fHq,B.af],g)
for(r=0;r<3;++r){q=D.cfu[r]
n.push(new A.D(B.fn,A.jy(p,p,p,A.d(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bSb(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.i,0,p,p))
return A.r(p,A.x(f,B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.n),p,p,p,B.kw,B.bk,p,p,p)},
$S:149}
C.bS7.prototype={
$0(){var w=this.a
return w.m(new C.bS6(w,this.b))},
$S:0}
C.bS6.prototype={
$0(){return B.d.cH(this.a.gD7().c,this.b)},
$S:0}
C.bS8.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bS9.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bSa.prototype={
$1(d){return this.a.m(new C.bS5(this.b,d))},
$S:152}
C.bS5.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bSb.prototype={
$1(d){return this.a.m(new C.bS4(this.b,this.c))},
$S:9}
C.bS4.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3T.prototype={
$0(){var w=this.a
w.wy()
w.a.bv()
w.a.qp()},
$S:0}
C.e3S.prototype={
$0(){var w=this.a
w.wy()
w.a.bv()
w.a.qp()},
$S:0}
C.e3V.prototype={
$0(){var w=this,v=w.b
if(J.cJ(v)||J.ct(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e3W.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3X.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e3R.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e3U.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e3Z.prototype={
$0(){this.a.Pc()
return null},
$S:0}
C.e3Y.prototype={
$0(){return this.a.F3(this.b)},
$S:0}
C.e3j.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bP(!1,B.dt,w,w,!0,w,w,w,new C.e3h(d),w,w),r=A.bo(B.bQ,w,w,w,w,w,w,w,w,w,w,w)
return A.ei(A.a([s,A.bJ(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e3i(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e3h.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e3i.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e3k.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cOb(this.b)},
$S:0}
C.e3e.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aVw(w.b,w.c,w.d)},
$S:7}
C.e2G.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e2H.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2Y.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Hq(t.a.c),$async$$0)
case 2:s=r.nA(q.dG(e,new C.e2W(t)))
if(s!=null&&t.c!=null)t.m(new C.e2X(t,s))
t.a.bv()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e2W.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e2X.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2Z.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e3_.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3d.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cOY(C.hCO(w),w)},
$S:0}
C.e2V.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.Wu(u,w,C.aRf(u,w),new C.e2U(v),null)},
$S:z+37}
C.e2U.prototype={
$1(d){return this.bo_(d)},
bo_(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.e2T(s,d))
w=3
return A.b(s.uy(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:548}
C.e2T.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.bf_(this.b)},
$S:0}
C.e3a.prototype={
$1(d){return d.as},
$S:z+1}
C.e3b.prototype={
$1(d){var w=this
return new A.e0(new C.e39(w.a,w.b,w.c,w.d,w.e),null)},
$S:21}
C.e39.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.eg:B.c,h=A.l(26),g=A.K(B.bQ.j(0.5),B.r,1.5),f=A.r(k,D.bVf,B.f,k,k,new A.o(B.bQ.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.m(k,k,j?B.aS:B.as,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a2,k,k,k,A.m(k,k,j?B.bv:B.bh,k,k,k,k,k,k,k,k,12.5,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.i,0,B.p),1)
f=A.A(A.a([f,B.bd,a0,A.aI(k,k,k,k,A.X(B.cC,j?B.bv:B.bh,k,k,k,k),k,k,k,new C.e33(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.i,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.m(k,k,j?B.bv:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.I)(v),++s){r=v[s]
q=t.a===r?B.bQ:B.bQ.j(0.1)
p=new A.aN(20,20)
o=t.a===r
n=new A.ay(B.bQ,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bQ
a0.push(A.az(k,A.cT(k,A.d(m,k,k,k,k,k,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b_,new A.o(q,k,new A.bG(n,n,n,n),new A.be(p,p,p,p),k,k,B.n),B.h7,k,k,k,k,B.Cu,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e34(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bX(B.bH,a0,B.bt,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c6o,new A.D(D.bFt,f,k),new A.D(D.bFk,e,k),new A.D(B.t1,a0,k),new A.D(W.anb,A.d(v,k,k,k,k,k,k,A.m(k,k,j?B.bv:B.bh,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(Ai.apN,j?B.bv:B.bh,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bFm,A.A(A.a([a0,B.au,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.m(k,k,j?B.aS:B.as,k,k,k,k,k,k,k,k,k,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.b9p(k,B.bQ,k,k,!1,B.y,k,k,k,k,k,k,new C.e35(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.i,0,k,k),k))}f.push(B.aC)
j=A.l(20)
e=A.a([new A.ab(0,B.G,B.aB.j(0.35),B.i7,12)],x.V)
f.push(A.az(k,A.r(k,A.A(A.a([D.fHL,B.bd,D.bJM,D.bVW],w),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.ca9,B.n),k,k,k,B.i1,B.bI,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e36(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.yU,A.A(A.a([A.E(A.dU(B.dt,new C.e37(a1),k),1),B.au,A.E(A.bJ(M.aYc,k,new C.e38(t,a1),A.bo(B.bQ,k,k,k,k,k,B.cp,k,k,k,k,k)),1)],w),B.l,k,B.e,B.i,0,k,k),k))
return A.bm(!0,A.r(k,A.cb(A.x(f,B.E,k,B.e,B.O,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.aq,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.yJ,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:87}
C.e33.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e34.prototype={
$0(){return this.b.$1(new C.e32(this.a,this.c))},
$S:0}
C.e32.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e35.prototype={
$1(d){var w=this.a
w.m(new C.e30(w,d))
this.b.$1(new C.e31())},
$S:9}
C.e30.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e31.prototype={
$0(){},
$S:0}
C.e36.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(new A.aHT(!0,w))
return null},
$S:0}
C.e37.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e38.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(new A.aHT(!1,w))
return null},
$S:0}
C.e3c.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cOM(this.b.b)
w.r.a8(0)},
$S:0}
C.e2u.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.ajb(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hw5(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e2v.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aFZ(w)},
$S:0}
C.e3m.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aez(this.b,w,this.c,null)},
$S:z+39}
C.e3g.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.eg:B.c,t=A.l(20),s=A.X(B.lR,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.as,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.m(w,w,v?B.bv:B.bh,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.u(p,A.a([B.ae,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.m(w,w,v?B.bv:B.bh,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.l,w,B.e,B.O,0,B.p)
return A.ei(A.a([A.bJ(D.fZF,w,new C.e3f(d),A.bo(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.ba,w,u,v,w,s,w,new A.b9(t,B.a1),r,w)},
$S:18}
C.e3f.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e2w.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e2x.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e2y.prototype={
$1(d){return d.a},
$S:z+8}
C.e2z.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.I)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hZ(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aFZ(w)},
$S:0}
C.e2D.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.ajb(q)
w=A.U(q).k("Y<1>")
q=A.C(new A.Y(q,new C.e2B(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hw5(v.e,null,r,v.f,v.r,new C.e2C(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e2C.prototype={
$0(){return this.a.ab9(this.b)},
$S:0}
C.e2B.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e2E.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("N<1,hZ>")
w=A.C(new A.N(w,new C.e2A(this.b),v),v.k("ak.E"))
u.d=t.aFZ(w)},
$S:0}
C.e2A.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e3l.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e2Q.prototype={
$1(d){return d.length!==0},
$S:3}
C.e2R.prototype={
$1(d){var w=this
return new A.e0(new C.e2P(w.a,w.b,w.c,w.d),null)},
$S:21}
C.e2P.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.eg:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.m(v,v,t?B.aS:B.as,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.m(v,v,t?B.bv:B.bh,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ae],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.m(v,v,t?B.bv:B.bh,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.u(p,new A.N(o,new C.e2L(u,e,o),A.U(o).k("N<1,v>")))
p.push(B.T)
u=w.d
p.push(A.aM(v,B.Z,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(12),B.dv),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ak,v,v,v,v,v,B.mA,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.ao,v,v,v,v))
p=A.x(p,B.al,v,B.e,B.O,0,B.p)
t=w.a
return A.ei(A.a([A.bP(!1,B.dt,v,v,!0,v,v,v,new C.e2M(d),v,v),A.bJ(B.La,v,new C.e2N(t,u,o,e),A.bo(B.bQ,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.fMh,v,new C.e2O(t,u,o,d),A.bo(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:231}
C.e2L.prototype={
$1(d){var w=null
return A.dH(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.m(w,w,this.a.a?B.aS:B.as,w,w,w,w,w,w,w,w,w,w,w,B.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aI(w,w,w,w,D.c3d,w,w,w,new C.e2K(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1980}
C.e2K.prototype={
$0(){return this.a.$1(new C.e2I(this.b,this.c))},
$S:0}
C.e2I.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.e2M.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e2N.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e2J(w.c,u))
v.bP(0,B.cg)}},
$S:0}
C.e2J.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e2O.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).O(!0)},
$S:0}
C.e2S.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cPq(this.b,D.uN,C.Ho(v,w.a.c))},
$S:0}
C.e3t.prototype={
$1(d){return d.as},
$S:z+1}
C.e3u.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j3(this.b,w)},
$S:0}
C.e3v.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.itH(v)
return w.WD(v==null?null:v.a)},
$S:0}
C.e3w.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.i4v(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aS(1/0,e.a,e.b)
s=A.aS(1/0,e.c,e.d)
l.cwD(new A.av(u,t),v.gblG(),new A.av(k,s))}k=A.l(22)
s=this.b.a
r=s?D.d3m:D.d1w
q=A.K(s?B.dr:D.bkS,B.r,1)
p=A.l(22)
o=A.bS(0,A.b2(m,m,m,new C.bg4(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.r(m,A.bx(p,new A.an(B.a0,m,B.ad,B.t,A.a([o,A.bS(0,A.v5(new A.R(n,n,n,n),new A.a5(u,t,new C.bh_(l.d,v,l.f,w,new C.e3p(l),l.gcgr(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ap(10,new C.byQ(s,new C.e3q(l,e),new C.e3r(l,e),new C.e3s(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a8(B.b0,B.b7,B.x,r,m,m),B.n),m,m,m,Z.amh,m,m,m,m)},
$S:164}
C.e3p.prototype={
$1(d){var w=this.a
w.m(new C.e3n(w,d))},
$S:2}
C.e3n.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.I(0,v)},
$S:0}
C.e3q.prototype={
$0(){var w=this.b
return this.a.bd9(1.25,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e3r.prototype={
$0(){var w=this.b
return this.a.bd9(0.8,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e3s.prototype={
$0(){var w=this,v=w.b
return w.a.aVw(new A.av(A.aS(1/0,v.a,v.b),A.aS(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gblG())},
$S:0}
C.e3x.prototype={
$0(){var w=this.a
return w.m(new C.e3o(w))},
$S:0}
C.e3o.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e2F.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fI(new A.fy(s.c)),$async$$0)
case 2:t.yy("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dhu.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ap(w,new C.bkO(u,C.hHr(v.c,u),new C.dht(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dht.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dhv.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ap(w,new C.boa(d.d,d.c,u.f.q(0,d.a),new C.dhs(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dhs.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fId.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nA(new A.cM(new A.Y(v,new C.fIe(d),w.k("Y<1>")),new C.fIf(),w.k("cM<1,n>")))},
$S:z+19}
C.fIe.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fIf.prototype={
$1(d){return d.a},
$S:z+8}
C.fIb.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fIc.prototype={
$1(d){return d.b},
$S:z+8}
C.fIi.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nA(new A.cM(new A.Y(v,new C.fIj(d),w.k("Y<1>")),new C.fIk(),w.k("cM<1,n>")))},
$S:z+19}
C.fIj.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fIk.prototype={
$1(d){return d.a},
$S:z+8}
C.fIg.prototype={
$1(d){var w,v=A.et([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.I(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fIh.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dhx.prototype={
$0(){return this.a},
$S:z+46}
C.dhO.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:242}
C.dhG.prototype={
$2(d,e){var w=this.a.c3(0,d,new C.dhH()),v=J.a7(w)
if(!v.q(w,e))v.I(w,e)},
$S:119}
C.dhH.prototype={
$0(){return A.a([],x.s)},
$S:756}
C.dhF.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eK(w,e)
return w===!0},
$S:294}
C.dhy.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dhE.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dhD.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.I(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aT(v==null?D.DJ:v)
u=1
while(v.C())u+=s.$2(v.gR(v).a,e)
v=s.b.h(0,d)
v=J.aT(v==null?B.Z:v)
while(v.C()){t=v.gR(v)
if(e.q(0,t))continue
e.I(0,t)
t=w.h(0,t)
t=J.aT(t==null?D.DJ:t)
while(t.C())u+=s.$2(t.gR(t).a,e)}return u},
$S:1982}
C.dhz.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dhI.prototype={
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
t=J.aT(t==null?D.DJ:t)
while(t.C()){r=t.gR(t)
if(r.a!==a9&&!B.d.aU(w,new C.dhJ(r)))w.push(r)}}B.d.bq(w,new C.dhK(a8))
B.d.aZ(w,new C.dhL())
q=C.i4u(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.I)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eXo],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.brh(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:1983}
C.dhJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dhK.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dhL.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.dhM.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a7(n),v=o.c,u=-1/0,t=0;t<w.gJ(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b8(v,A.a4(v).k("b8<2>")).cF(0,0,B.q9)+88-w.gH(n).a}else u=0
for(w=J.a7(n),v=o.c,t=0;t<w.gJ(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:667}
C.dhN.prototype={
$1(d){return 16+d*156},
$S:165}
C.dhw.prototype={
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
$S:195}
C.dhA.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aL0(new A.p(v.a,v.b+28),new A.p(w.a,w.b+28),!0,null))},
$S:119}
C.dhB.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dhC.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:757}
C.dhP.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:757}
C.dhQ.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:454}
C.dhR.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:181}
C.dhS.prototype={
$1(d){return d>=0.5},
$S:121}
C.fnv.prototype={
$3(d,e,f){var w=null,v=A.l(10)
return A.h9(A.aP(!1,v,!0,new A.a5(38,38,A.X(d,this.a.c?B.c:B.cm,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1985}
C.eYx.prototype={
$1(d){var w=null,v=A.l(8),u=B.bQ.j(0.12),t=A.l(8)
return new A.D(B.n2,A.aP(!1,v,!0,A.r(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fxg,B.K,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.Ox,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eYw(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eYw.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dxN.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dxM.prototype={
$1(d){var w=null,v=A.l(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.o2,B.K,w,w)
return A.ei(A.a([A.bP(!1,B.dt,w,w,!0,w,w,w,new C.dxK(d),w,w),A.bP(!1,A.d("Delete",w,w,w,w,w,w,A.m(w,w,B.mS,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dxL(d),w,w)],x.p),B.ba,B.Cp,w,u,D.bGm,w,D.bIk,new A.b9(v,B.a1),w,w)},
$S:18}
C.dxK.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dxL.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dxW.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dxX.prototype={
$1(d){var w=this.a
return w.m(new C.dxV(w,d))},
$S:z+49}
C.dxV.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dxY.prototype={
$1(d){var w=null
return A.qM(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dy0.prototype={
$1(d){var w=this.a
return w.m(new C.dxU(w,d))},
$S:35}
C.dxU.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dy_.prototype={
$1(d){var w=null
return A.qM(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dy1.prototype={
$1(d){var w=this.a
return w.m(new C.dxT(w,d))},
$S:35}
C.dxT.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dy2.prototype={
$0(){var w=this.a
return w.m(new C.dxS(w))},
$S:0}
C.dxS.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dy3.prototype={
$0(){var w=this.a
return w.m(new C.dxR(w))},
$S:0}
C.dxR.prototype={
$0(){return++this.a.at},
$S:0}
C.dy4.prototype={
$0(){var w=this.a
return w.m(new C.dxQ(w))},
$S:0}
C.dxQ.prototype={
$0(){return--this.a.ax},
$S:0}
C.dy5.prototype={
$0(){var w=this.a
return w.m(new C.dxP(w))},
$S:0}
C.dxP.prototype={
$0(){return++this.a.ax},
$S:0}
C.dy6.prototype={
$1(d){var w=this.a
return w.m(new C.dxO(w,d))},
$S:9}
C.dxO.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dxZ.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dy7.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.l(12)
if(p)w=B.bQ.j(0.18)
else w=q.c.a?B.eg:B.c
v=A.l(12)
if(p)u=B.bQ
else u=(q.c.a?B.ei:B.bP).j(0.85)
u=A.K(u,B.r,p?1.5:1)
if(p)t=B.bQ
else t=q.c.a?B.bv:B.bh
t=A.X(f,t,r,r,r,18)
if(p)s=B.bQ
else s=q.c.a?B.bv:B.bh
return A.E(A.aH(!1,B.a3,!0,r,A.aP(!1,o,!0,A.cT(r,A.x(A.a([t,B.aw,A.d(e,r,r,r,r,r,r,A.m(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.i,0,B.p),r,r,B.b_,new A.o(w,r,u,v,r,r,B.n),B.eI,r,r,r,r,B.k2,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dy8(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
$S:z+51}
C.dy8.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dyh.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cfs.prototype={
$2(d,e){return new A.bB(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:96}
C.cfz.prototype={
$1(d){return d.aj()},
$S:z+5}
C.cfA.prototype={
$2(d,e){var w=J.b7(e,new C.cfy(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bB(d,w,x.d2)},
$S:z+53}
C.cfy.prototype={
$1(d){return d.aj()},
$S:z+12}
C.cfu.prototype={
$1(d){return C.amn(A.a2(d,x.N,x.z))},
$S:z+9}
C.cfv.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cfw.prototype={
$1(d){return C.hmR(A.a2(d,x.N,x.z))},
$S:z+11}
C.cfx.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cfE.prototype={
$1(d){return new A.aI4(d.f.length,d.a,d.b)},
$S:z+55}
C.cfF.prototype={
$2(d,e){return B.a.aS(d.c,e.c)},
$S:572}
C.cfB.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cfC.prototype={
$1(d){return d.cOo(C.Ho(d,this.a))},
$S:z+85}
C.e3G.prototype={
$1(d){return C.uB(d,this.a.a.c)},
$S:z+3}
C.e3H.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e3L.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e3M.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e3D.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1z(r.d,q,r.e,r.f),$async$$0)
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
C.e3E.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1z(r.d,q,r.e,t.b),$async$$0)
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
C.e3F.prototype={
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
C.e3K.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1y(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.z6("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).ce(A.ec(new C.e3J(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pz(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e3J.prototype={
$1(d){var w=this.b
return new C.a0H(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e3I.prototype={
$1(d){return D.hC8},
$S:z+58}
C.e3O.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e3P.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e3N(w,d)
return new A.D(B.da,new C.bh3(this.b,d.c,d.a,w,null),null)},
$S:1986}
C.e3N.prototype={
$0(){return this.a.Ys(this.b.b)},
$S:0}
C.e3y.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e3z.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e3A.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e3B.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e3C.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e3Q.prototype={
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
$S:182}
C.dPU.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dPV.prototype={
$0(){return B.d.gH(D.a6T)},
$S:z+60}
C.dPW.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b2(A.as(A.X(this.b.d,B.c.j(0.95),w,w,D.daf,44),w,w,w),w,w,new C.blW(u,t,v,w),B.az)},
$S:57}
C.fZ9.prototype={
$1(d){return A.pj(new C.fZ8(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:139}
C.fZ8.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.eg:B.c,p=A.a([new A.ab(0,B.G,B.w.j(r?0.35:0.08),B.tC,24)],x.V),o=r?B.ei:B.bP
o=A.r(t,t,B.f,t,t,new A.o(o,t,t,A.l(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bQ.j(0.18)],x.O)
w=A.r(t,D.bYk,B.f,t,t,new A.o(t,t,t,A.l(12),t,new A.a8(B.a7,B.aa,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.m(t,t,r?B.aS:B.as,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.r(t,A.x(A.a([B.W,o,new A.D(E.anf,A.A(A.a([w,B.bd,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.m(t,t,r?B.bv:B.bh,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.i,0,B.p),1)],u),B.l,t,B.e,B.i,0,t,t),t),A.E(A.is(!0,t,e,B.y,D.fjC,new C.fZ7(this.b,s),20,B.amO,t,B.ah,!1),1)],u),B.l,t,B.e,B.i,0,B.p),B.f,t,t,new A.o(q,t,t,B.la,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:123}
C.fZ7.prototype={
$2(d,e){var w=null,v=D.a6T[e],u=A.l(16),t=A.l(16),s=this.b.a,r=A.K(s?B.ei:B.bP,B.r,1),q=A.a([new A.ab(0,B.G,B.w.j(s?0.35:0.08),B.ev,8)],x.V),p=A.l(15),o=A.E(new C.a7v(v.a,!0,w),1),n=s?B.jY:B.iN,m=A.d(v.b,w,1,B.a2,w,w,w,A.m(w,w,s?B.aS:B.as,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aH(!1,B.a3,!0,w,A.aP(!1,u,!0,A.eB(A.bx(p,A.x(A.a([o,A.r(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.m(w,w,s?B.bv:B.bh,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.i,0,B.p),B.f,n,w,w,w,w,w,w,B.k3,w,w,w)],l),B.al,w,B.e,B.i,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fZ6(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)},
$S:80}
C.fZ6.prototype={
$0(){A.a6(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cp3.prototype={
$0(){return this.a.ahn(this.b)},
$S:0}
C.fYx.prototype={
$1(d){return D.hx2},
$S:z+61}
C.h5i.prototype={
$1(d){var w=this
return new C.a2t(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.fYB.prototype={
$1(d){return new C.a_l(this.a,null)},
$S:z+63}
C.fYA.prototype={
$1(d){return D.hy3},
$S:z+64}
C.d93.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d94.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d92(w,d))},
$S:35}
C.d92.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d95.prototype={
$1(d){return this.a.KQ()},
$S:2}
C.d96.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d9_.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d90.prototype={
$1(d){return this.a.KQ()},
$S:2}
C.d91.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cHq.prototype={
$0(){},
$S:0}
C.cHw.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cHx.prototype={
$0(){return this.a.aQO(-1)},
$S:0}
C.cHy.prototype={
$1(d){return this.a.m(new C.cHv())},
$S:2}
C.cHv.prototype={
$0(){},
$S:0}
C.cHz.prototype={
$0(){return this.a.aQO(1)},
$S:0}
C.cHA.prototype={
$1(d){return this.a.m(new C.cHu())},
$S:2}
C.cHu.prototype={
$0(){},
$S:0}
C.cHB.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.m(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.ei:B.bP
return A.uZ(u,u,B.b3,r,u,new C.cHt(t,d),B.wD,s,w,u,new A.ay(v,1,B.r,-1),B.ch)},
$S:1987}
C.cHt.prototype={
$1(d){var w=this.a
return w.m(new C.cHr(w,this.b))},
$S:9}
C.cHr.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cHC.prototype={
$1(d){return this.a.m(new C.cHs())},
$S:2}
C.cHs.prototype={
$0(){},
$S:0}
C.cHD.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fn0.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).O(w)},
$S:2}
C.fn1.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fn2.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).O(w)},
$S:0}
C.fmZ.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbD_()
w=w.e
s=A.l(B.o.D(v-1,0,v))
return A.b2(new A.D(D.bIj,new A.eo(A.r(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.byF(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:57}
C.fn_.prototype={
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
return A.aH(!1,B.a3,!0,p,A.aP(!1,v,!0,A.eB(D.ev8,r,new A.o(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a8(new A.da(-1.2+t,-0.5),new A.da(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
$S:132}
C.fWV.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:63}
C.eVH.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eVy.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eVz.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eVF.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e0(new C.eVE(w,this.b),null)},
$S:21}
C.eVE.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.eg:B.c,t=A.l(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.as,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eG(w,u,new A.D(B.an9,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.m(w,w,v?B.bv:B.bh,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ae,C.hsW(new C.eVB(r,e),r.a),B.aC,A.A(A.a([A.E(A.dU(B.dt,new C.eVC(d),w),1),B.au,A.E(A.bJ(B.We,w,new C.eVD(r,d),A.bo(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.i,0,w,w)],q),B.al,w,B.e,B.O,0,B.p),w),w,w,w,w,w,B.d8,w,new A.b9(t,B.a1),w)},
$S:104}
C.eVB.prototype={
$1(d){return this.b.$1(new C.eVA(this.a,d))},
$S:35}
C.eVA.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eVC.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eVD.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.eVG.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.TB(this.b)},
$S:0}
C.eVt.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bf5(w)},
$S:0}
C.eVx.prototype={
$1(d){return this.bom(d)},
bom(d){var w=0,v=A.j(x.H),u,t=this,s
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
C.eVw.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.eVv(this.b),v),v.k("M.E"))
u.d=t.bf5(w)},
$S:0}
C.eVv.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eVI.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j3(this.b,w)},
$S:0}
C.eVJ.prototype={
$1(d){return this.a.bH9(d,this.b)},
$S:z+67}
C.eVu.prototype={
$0(){return this.a.ab8(this.b)},
$S:0}
C.h55.prototype={
$1(d){return new C.aeU(this.a,this.b,this.c,null)},
$S:z+68}
C.eVL.prototype={
$0(){return this.a.a0m(this.b)},
$S:0}
C.eVM.prototype={
$0(){return this.a.QO(this.b)},
$S:0}
C.eVN.prototype={
$0(){return this.a.EZ(this.b)},
$S:0}
C.eVO.prototype={
$0(){return this.a.a0n(this.b)},
$S:0}
C.eVK.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eVo.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eVp.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eVq.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eVs.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qv(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eVr(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eVr.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eWa.prototype={
$2(d,e){return d+e.gxJ()},
$S:z+71}
C.eW6.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eW7.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eVS.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.eg:B.c,s=A.l(24),r=A.r(v,D.bYO,B.f,v,v,new A.o(B.ay.j(u?0.18:0.08),v,A.K(B.ay.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.m(v,v,u?B.aS:B.as,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.m(v,v,u?B.bv:B.bh,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aS:B.as
u=u?B.ei:B.bP
w=x.p
return A.eG(v,t,new A.D(B.wC,A.x(A.a([r,B.aO,q,B.T,p,B.dc,A.A(A.a([A.E(A.dU(B.o4,new C.eVQ(d),A.dj(v,v,v,v,v,v,v,v,v,o,v,v,B.fh,v,new A.b9(A.l(14),B.a1),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.au,A.E(A.bJ(D.h2x,v,new C.eVR(d),A.bo(B.ay,v,v,v,v,v,B.fh,v,new A.b9(A.l(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.i,0,v,v)],w),B.l,v,B.e,B.O,0,B.p),v),v,v,v,v,v,B.d8,v,new A.b9(s,B.a1),v)},
$S:46}
C.eVQ.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eVR.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eW0.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.eg:B.c,i=A.l(28),h=A.a([new A.ab(0,B.G,B.w.j(k?0.35:0.08),B.fR,28)],x.V),g=k?D.dhx:B.a6b,f=x.p
g=A.r(m,A.x(A.a([A.r(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.l(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aC,D.fcK,B.aw,new A.bL(B.a7,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.m(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cE,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.i,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a8(B.aA,B.aD,B.x,g,m,m),B.n),m,m,m,m,E.and,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.m(m,m,k?B.bv:B.bh,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b8_(B.b8,B.ju,new C.eVY(v,d),l,"Camera import","Scan QR"),1),B.au,A.E(v.b8_(B.cD,Q.zB,new C.eVZ(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.i,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.m(m,m,k?B.bv:B.bh,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.l(16)
r=B.ay.j(k?0.14:0.06)
q=A.l(16)
p=A.K(B.ay.j(0.28),B.r,1)
o=A.r(m,D.bY8,B.f,m,m,new A.o(B.ay.j(0.12),m,m,A.l(12),m,m,B.n),m,m,m,m,B.bV,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.m(m,m,k?B.aS:B.as,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.m(m,m,k?B.bv:B.bh,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.i,0,B.p),1)
return A.bm(!0,new A.D(B.wx,A.r(m,A.x(A.a([g,new A.D(B.ana,A.x(A.a([w,B.W,u,B.bz,t,B.W,A.aH(!1,B.a3,!0,m,A.aP(!1,s,!0,A.r(m,A.A(A.a([o,B.bd,n,A.X(B.eJ,k?B.bv:B.bh,m,m,m,m)],f),B.l,m,B.e,B.i,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bI,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eW_(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)],f),B.E,m,B.e,B.i,0,B.p),m)],f),B.l,m,B.e,B.O,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:25}
C.eVY.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.w8("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eVZ.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.w8("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eW_.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.Ot(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eVW.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.eg:B.c,m=A.l(24),l=A.a([new A.ab(0,B.G,B.w.j(o?0.35:0.08),B.eR,24)],x.V),k=o?B.ei:B.bP
k=A.r(q,q,B.f,q,q,new A.o(k,q,q,A.l(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.l(12)
v=this.c
u=o?B.bv:B.bh
u=A.bx(w,new A.a5(48,48,C.aSw(!0,A.l(12),48,P.Pe,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.m(q,q,o?B.aS:B.as,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Bv(v.gxJ())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.wx,A.r(q,A.x(A.a([B.W,k,new A.D(D.an7,A.A(A.a([u,B.bd,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.m(q,q,o?B.bv:B.bh,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.i,0,B.p),1)],s),B.l,q,B.e,B.i,0,q,q),q),B.Cg,r.cqJ(B.v8,B.aV,new C.eVU(d),p,"QR code or backup file","Transfer project"),r.b50(!0,B.ek,B.ay,new C.eVV(d),p,"Remove from this device","Delete project"),B.W],s),B.l,q,B.e,B.O,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:25}
C.eVU.prototype={
$0(){A.a6(this.a,!1).O("transfer")
return null},
$S:0}
C.eVV.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
C.eVX.prototype={
$1(d){return this.bon(d)},
bon(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Mg(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wn(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eWd.prototype={
$0(){var w=this.a
w.a.bv()
w.m(new C.eWc(w))},
$S:0}
C.eWc.prototype={
$0(){return this.a.r++},
$S:0}
C.eWe.prototype={
$0(){var w=this.a
return w.m(new C.eWb(w))},
$S:0}
C.eWb.prototype={
$0(){return this.a.r++},
$S:0}
C.eVP.prototype={
$0(){var w=this.a.c
w.toString
return A.j3(w,null)},
$S:0}
C.eVT.prototype={
$0(){return this.a.ck_(this.b)},
$S:0}
C.eW9.prototype={
$0(){var w=this.a
return w.m(new C.eW8(w,this.b))},
$S:0}
C.eW8.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eW3.prototype={
$0(){return this.a.w8("scan")},
$S:0}
C.eW4.prototype={
$0(){return this.a.w8("file")},
$S:0}
C.eW5.prototype={
$1(d){return this.a.cqK(d,this.b)},
$S:z+72}
C.eW2.prototype={
$0(){return this.a.F2(this.b)},
$S:0}
C.eW1.prototype={
$0(){return this.a.a0S(this.b,this.c)},
$S:0}
C.cGL.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cGK.prototype={
$1(d){return d.aj()},
$S:z+74}
C.cGI.prototype={
$1(d){return C.hNz(A.a2(d,x.N,x.z))},
$S:z+75}
C.cGJ.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fH5.prototype={
$1(d){return d.y===D.kX},
$S:z+3}
C.h5S.prototype={
$1(d){return C.aRf(d,this.a)},
$S:z+3}
C.fEA.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bT7.prototype={
$1(d){return!d.as},
$S:z+1}
C.bT6.prototype={
$1(d){return d.aj()},
$S:z+23}
C.bT3.prototype={
$1(d){return C.hmT(A.a2(d,x.N,x.z))},
$S:z+24}
C.bT4.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bT5.prototype={
$1(d){return J.k(d)},
$S:17}
C.fuV.prototype={
$2(d,e){return e.e.aS(0,d.e)},
$S:z+25}
C.fqF.prototype={
$1(d){return C.hct(A.a2(d,x.N,x.z))},
$S:z+79}
C.fqG.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fqH.prototype={
$2(d,e){return e.e.aS(0,d.e)},
$S:z+25}
C.fYl.prototype={
$1(d){return J.k(d)},
$S:17}
C.fYm.prototype={
$1(d){return d.a},
$S:z+81}
C.fYn.prototype={
$1(d){return d.length!==0},
$S:3}
C.fYo.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.fYp.prototype={
$1(d){return d.TB(null).aj()},
$S:z+82}
C.h5Q.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fHz.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fKL.prototype={
$1(d){return C.amn(A.a2(d,x.N,x.z))},
$S:z+9}
C.fKM.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fKN.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fKO.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fKP.prototype={
$1(d){return C.uB(d,this.a)},
$S:z+3}
C.fY8.prototype={
$1(d){return C.uB(d,this.a)},
$S:z+3}
C.h5L.prototype={
$1(d){return C.amn(A.a2(d,x.N,x.z))},
$S:z+9}
C.h5M.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.h5N.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fHg.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fHh.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.h5W.prototype={
$1(d){return!d.as},
$S:z+1}
C.fGL.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fGM.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fGN.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.h5j.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fLC.prototype={
$1(d){return d.Q},
$S:z+15}
C.fY1.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fKI.prototype={
$1(d){return C.amn(A.a2(d,x.N,x.z))},
$S:z+9}
C.fKJ.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fKK.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fXX.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.frf.prototype={
$1(d){return d.length!==0},
$S:3}
C.frg.prototype={
$1(d){return C.hmT(A.a2(d,x.N,x.z))},
$S:z+24}
C.frh.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fri.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.frj.prototype={
$1(d){return d.length!==0},
$S:3}
C.frw.prototype={
$2(d,e){return d.eG(new C.frx(e))},
$S:1988}
C.frx.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.cf},
$S:1989}
C.frt.prototype={
$1(d){return C.i9C(d,this.a)},
$S:z+84}
C.fru.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.frv.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fvC.prototype={
$1(d){return d.a},
$S:z+56}
C.fvD.prototype={
$1(d){return d.length!==0},
$S:3}
C.fvE.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fyy.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fDQ.prototype={
$1(d){return C.hyt(d,C.Ho(d,this.a))},
$S:z+5}
C.fDR.prototype={
$1(d){return C.hyu(d,C.Ho(d,this.a))},
$S:z+5};(function aliases(){var w=C.aBQ.prototype
w.bwc=w.t
w=C.aA3.prototype
w.bw7=w.t
w=C.aHh.prototype
w.bwA=w.t
w=C.aBR.prototype
w.bwd=w.t
w=C.aBT.prototype
w.bwe=w.t
w=C.aBU.prototype
w.bwf=w.t
w=C.aNs.prototype
w.bz3=w.t
w=C.aPA.prototype
w.bBo=w.t
w=C.aPB.prototype
w.bBp=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aER.prototype,"gcnE","cnF",28)
var r
w(r=C.aBP.prototype,"gcgx","cgy",65)
v(r,"gaP_","O0",0)
v(r,"gcvZ","Br",0)
v(r,"gbOY","OH",0)
v(r,"gcKn","z7",0)
v(r,"gcpH","a1z",0)
v(r,"gbKl","Op",0)
v(r,"gbPn","XU",0)
w(r,"gbUt","bUu",78)
v(r,"gbEF","Aq",0)
v(C.aBS.prototype,"gcKj","FV",0)
v(r=C.amc.prototype,"gbsy","bsz",2)
v(r,"gbsq","bsr",2)
v(r,"gcLs","cLt",2)
u(r,"gqo","kO",0)
u(r=C.akp.prototype,"geY","fX",2)
w(r,"gcc9","cca",27)
u(C.av6.prototype,"gqo","kO",0)
v(r=C.az4.prototype,"gcX0","cX1",2)
u(r,"gqo","kO",0)
u(C.aL5.prototype,"gbsw","bsx",2)
v(C.aml.prototype,"gBV","cLF",2)
u(r=C.amj.prototype,"gcMl","cMm",2)
u(r,"gqo","kO",0)
v(r=C.amf.prototype,"gbro","brp",2)
v(r,"gcRx","cRy",2)
u(r=C.amh.prototype,"geY","fX",2)
u(r,"gix","cKZ",2)
v(r=C.amd.prototype,"gcKO","cKP",2)
u(r,"gbqg","jI",2)
v(r=C.aFp.prototype,"gah_","wo",0)
v(r,"gcjf","a0J",0)
v(r,"gaTd","Iv",0)
v(r=C.aFm.prototype,"gcGh","a3H",0)
v(r,"gah_","wo",0)
v(r,"gcu0","a2d",0)
v(r,"gcja","b3e",2)
v(r,"gckc","a0X",0)
w(r,"gcgr","cgs",35)
v(r,"gbPf","IA",0)
v(r,"gcHm","cHn",2)
v(r,"gc6k","ZE",0)
w(r,"gceW","ceX",36)
v(r,"gciZ","cj_",2)
v(r=C.aDQ.prototype,"gccf","Ql",0)
v(r,"gcch","cci",2)
v(r,"gbLQ","aaL",0)
v(r=C.aFo.prototype,"gbSS","Yo",0)
v(r,"gc2q","Z5",0)
v(r,"gcAp","a34",0)
v(r,"gcwy","a2G",0)
v(C.aFn.prototype,"gcwh","aiO",0)
v(C.aui.prototype,"gceU","a0k",0)
v(C.aAz.prototype,"ga3q","KQ",2)
v(C.aAy.prototype,"ga3q","KQ",2)
v(C.azh.prototype,"ga3q","KQ",2)
v(r=C.aGT.prototype,"gb4o","Rk",0)
v(r,"gbDt","Wx",0)
v(r,"gck0","ck1",2)
w(C.aGS.prototype,"gcfM","cfN",69)
t(C.aGU.prototype,"gaT8",0,0,null,["$1","$0"],["Iu","bN9"],70,0,0)
s(C,"hGv","ijM",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aE,[C.apU,C.uW,C.nw,C.Iz,C.ag5,C.KW,C.uX,C.bTD,C.ti,C.bps,C.amu,C.aec,C.lu,C.bSe,C.auu,C.zI,C.al5,C.MV,C.baR,C.aag,C.bi8,C.agc,C.aAi,C.ag0,C.aL5,C.L2,C.GH,C.bh1,C.aL0,C.arh,C.dhT,C.lZ,C.aVs,C.aVr,C.aTu,C.um,C.rs,C.lF,C.hZ,C.kZ,C.aIZ])
u(A.hx,[C.fPp,C.fPo,C.fPq,C.fZ2,C.fCt,C.fCu,C.fCz,C.fN8,C.fN7,C.fN6,C.c8o,C.fZz,C.fZr,C.fZD,C.fHo,C.dQA,C.dQv,C.dQw,C.dQ8,C.dQ4,C.dQP,C.dQQ,C.dQJ,C.dQK,C.dQR,C.dQS,C.fI9,C.fKF,C.fKG,C.fY6,C.h5K,C.fHf,C.fYH,C.dh5,C.dgs,C.dgB,C.dgS,C.dgx,C.dgD,C.dgu,C.dgH,C.dgI,C.dgG,C.dgX,C.dgW,C.diT,C.diU,C.diV,C.dhj,C.dho,C.dhn,C.cPK,C.cPM,C.d8h,C.d8G,C.d8H,C.d8K,C.d8M,C.d8N,C.d8O,C.d8Q,C.d8R,C.bRZ,C.bRT,C.fvj,C.h5D,C.h5E,C.h5F,C.h5A,C.h5G,C.h5H,C.h5I,C.h5z,C.fIL,C.fX7,C.fEB,C.fLB,C.bN2,C.h61,C.fXD,C.bLd,C.bL8,C.bLa,C.bL9,C.cqK,C.cqF,C.cqG,C.cqE,C.cqC,C.cqH,C.cQO,C.cFK,C.cFN,C.cFL,C.cFO,C.cFP,C.f7L,C.fhV,C.bSL,C.bSF,C.bSJ,C.bSm,C.e2e,C.e2b,C.e2c,C.e2a,C.e2g,C.bSD,C.bSt,C.bSd,C.bSc,C.bS8,C.bS9,C.bSa,C.bSb,C.e3U,C.e3j,C.e3e,C.e2G,C.e2W,C.e2Z,C.e2V,C.e2U,C.e3a,C.e3b,C.e35,C.e2u,C.e3m,C.e3g,C.e2w,C.e2x,C.e2y,C.e2D,C.e2B,C.e2A,C.e2Q,C.e2R,C.e2L,C.e3t,C.e3p,C.dhu,C.dhv,C.fId,C.fIe,C.fIf,C.fIb,C.fIc,C.fIi,C.fIj,C.fIk,C.fIg,C.fIh,C.dhO,C.dhE,C.dhz,C.dhJ,C.dhK,C.dhN,C.dhB,C.dhQ,C.dhR,C.dhS,C.fnv,C.eYx,C.dxM,C.dxW,C.dxX,C.dxY,C.dy0,C.dy_,C.dy1,C.dy6,C.dy7,C.cfz,C.cfy,C.cfu,C.cfv,C.cfw,C.cfx,C.cfE,C.cfB,C.cfC,C.e3G,C.e3J,C.e3I,C.e3P,C.e3Q,C.dPU,C.fZ9,C.fYx,C.h5i,C.fYB,C.fYA,C.d94,C.d95,C.d90,C.cHy,C.cHA,C.cHB,C.cHt,C.cHC,C.fn0,C.fWV,C.eVF,C.eVB,C.eVx,C.eVv,C.eVJ,C.h55,C.eVS,C.eW0,C.eVW,C.eVX,C.eW5,C.cGK,C.cGI,C.cGJ,C.fH5,C.h5S,C.fEA,C.bT7,C.bT6,C.bT3,C.bT4,C.bT5,C.fqF,C.fqG,C.fYl,C.fYm,C.fYn,C.fYo,C.fYp,C.h5Q,C.fHz,C.fKL,C.fKM,C.fKO,C.fKP,C.fY8,C.h5L,C.h5M,C.h5N,C.fHg,C.fHh,C.h5W,C.fGL,C.fGM,C.h5j,C.fLC,C.fY1,C.fKI,C.fKJ,C.fXX,C.frf,C.frg,C.frh,C.fri,C.frj,C.frx,C.frt,C.fru,C.fvC,C.fvD,C.fyy,C.fDQ,C.fDR])
u(A.aw,[C.b03,C.ama,C.aWM,C.a_0,C.bcD,C.QR,C.a6J,C.tJ,C.IB,C.bh_,C.bkO,C.byQ,C.boa,C.aey,C.bkN,C.aex,C.bkM,C.aDR,C.aK2,C.aez,C.GD,C.bh0,C.adO,C.bgZ,C.bh3,C.b01,C.aui,C.aeU])
u(A.mo,[C.bdg,C.bev,C.bem,C.aIT,C.bjP,C.bpr,C.aWR,C.bdi,C.aBO,C.bcM,C.btt,C.bjX,C.bjn,C.bju,C.bh2,C.bg4,C.blW,C.byF])
u(A.iN,[C.fZw,C.fZx,C.fZy,C.fZp,C.fZq,C.fZB,C.fZC,C.dQM,C.dQy,C.dQB,C.dQf,C.dQg,C.dQh,C.dQe,C.dQm,C.dQd,C.dQn,C.dQo,C.dQc,C.dQp,C.dQb,C.dQq,C.dQa,C.dQr,C.dQ2,C.dQ3,C.dQ9,C.dQs,C.dQ7,C.dQt,C.dQ6,C.dQi,C.dQ5,C.dQj,C.dQ1,C.dQk,C.dQl,C.dQN,C.dQO,C.dQC,C.dQD,C.dQE,C.dQF,C.dQG,C.dQH,C.dQI,C.dQU,C.dQL,C.fIa,C.dgq,C.dgo,C.dgp,C.dgr,C.dh4,C.dgU,C.dgR,C.dgt,C.dgV,C.dgz,C.dgA,C.dgC,C.dgT,C.dgy,C.dgE,C.dh1,C.dgO,C.dgN,C.dgP,C.dgQ,C.dgJ,C.dgL,C.dgM,C.dgF,C.dgY,C.dh0,C.dgv,C.dgw,C.diS,C.diR,C.diQ,C.diP,C.diW,C.diO,C.diX,C.dhk,C.dhl,C.dhm,C.dhp,C.dhi,C.dhh,C.cPL,C.d8g,C.d8t,C.d8s,C.d8I,C.d8r,C.d8J,C.d8q,C.d8p,C.d8L,C.d8o,C.d8B,C.d8A,C.d8S,C.bRS,C.bS1,C.bRU,C.bRV,C.bRY,C.bRX,C.bS_,C.bS0,C.bRW,C.bRQ,C.bRR,C.bTv,C.bTw,C.bTx,C.bTy,C.bTz,C.bTA,C.bTB,C.h5C,C.fX8,C.bLc,C.bL7,C.bL5,C.bL6,C.bL4,C.cqM,C.cqN,C.cqL,C.cqO,C.cqQ,C.cqR,C.cqS,C.cqI,C.cFJ,C.cFS,C.cFT,C.cFU,C.cFR,C.cFV,C.cFW,C.cFX,C.cFY,C.cFM,C.cFQ,C.bT0,C.bT_,C.bSY,C.bSW,C.bSX,C.bST,C.bSU,C.bSV,C.bSZ,C.bSS,C.f7M,C.f7N,C.f7O,C.f7P,C.f7Q,C.bSP,C.bSQ,C.bSR,C.bSK,C.bSM,C.bSN,C.bSO,C.bSG,C.bSq,C.bSp,C.bSo,C.bSi,C.bSj,C.bSn,C.bSk,C.bSl,C.bSh,C.e2d,C.e2f,C.e28,C.e29,C.e27,C.e2h,C.e2i,C.e2j,C.e2m,C.e2n,C.e2o,C.e2p,C.e2q,C.e2r,C.e2s,C.e2t,C.e2k,C.e2l,C.bSC,C.bSB,C.bSs,C.bSr,C.bSy,C.bSz,C.bSv,C.bSw,C.bSx,C.bSu,C.bS2,C.bS3,C.bS7,C.bS6,C.bS5,C.bS4,C.e3T,C.e3S,C.e3V,C.e3W,C.e3X,C.e3R,C.e3Z,C.e3Y,C.e3h,C.e3i,C.e3k,C.e2H,C.e2Y,C.e2X,C.e3_,C.e3d,C.e2T,C.e33,C.e34,C.e32,C.e30,C.e31,C.e36,C.e37,C.e38,C.e3c,C.e2v,C.e3f,C.e2z,C.e2C,C.e2E,C.e3l,C.e2K,C.e2I,C.e2M,C.e2N,C.e2J,C.e2O,C.e2S,C.e3u,C.e3v,C.e3n,C.e3q,C.e3r,C.e3s,C.e3x,C.e3o,C.e2F,C.dht,C.dhs,C.dhx,C.dhH,C.dhy,C.eYw,C.dxN,C.dxK,C.dxL,C.dxV,C.dxU,C.dxT,C.dy2,C.dxS,C.dy3,C.dxR,C.dy4,C.dxQ,C.dy5,C.dxP,C.dxO,C.dxZ,C.dy8,C.dyh,C.e3H,C.e3L,C.e3M,C.e3D,C.e3E,C.e3F,C.e3K,C.e3O,C.e3N,C.e3y,C.e3z,C.e3A,C.e3B,C.e3C,C.dPV,C.fZ6,C.cp3,C.d93,C.d92,C.d96,C.d9_,C.d91,C.cHq,C.cHw,C.cHx,C.cHv,C.cHz,C.cHu,C.cHr,C.cHs,C.cHD,C.fn1,C.fn2,C.eVH,C.eVy,C.eVz,C.eVA,C.eVC,C.eVD,C.eVG,C.eVt,C.eVw,C.eVI,C.eVu,C.eVL,C.eVM,C.eVN,C.eVO,C.eVK,C.eVo,C.eVp,C.eVq,C.eVs,C.eVr,C.eW6,C.eW7,C.eVQ,C.eVR,C.eVY,C.eVZ,C.eW_,C.eVU,C.eVV,C.eWd,C.eWc,C.eWe,C.eWb,C.eVP,C.eVT,C.eW9,C.eW8,C.eW3,C.eW4,C.eW2,C.eW1])
u(A.af,[C.aq6,C.U8,C.a_J,C.a_N,C.a_L,C.a_j,C.amb,C.ako,C.av5,C.az3,C.amk,C.ami,C.ame,C.Wu,C.amg,C.U9,C.ark,C.are,C.a0n,C.ari,C.a0H,C.a0I,C.a7v,C.a_l,C.a_k,C.ZS,C.a2t,C.Gr,C.aza,C.auh,C.aub,C.aug,C.P8])
u(A.ah,[C.aER,C.bgU,C.aBP,C.bhi,C.aBS,C.bet,C.aBQ,C.aA3,C.aHh,C.az4,C.aBU,C.aBT,C.aBR,C.bmi,C.amh,C.amd,C.aFp,C.aFm,C.aDQ,C.aFo,C.aFn,C.bmj,C.aNs,C.aAz,C.aAy,C.azh,C.byI,C.aPA,C.aPB,C.aGT,C.bnG,C.aGS,C.bAt])
u(A.jz,[C.dQx,C.dQz,C.dQu,C.dQT,C.fKH,C.bRP,C.dh3,C.dh2,C.dgK,C.dgZ,C.dh_,C.dhq,C.bTC,C.bTu,C.bSf,C.bSg,C.h5B,C.h60,C.bLb,C.cqP,C.cqJ,C.cqD,C.f7R,C.bSE,C.bSH,C.bSI,C.ds1,C.bSA,C.e39,C.e2P,C.e3w,C.dhG,C.dhF,C.dhD,C.dhI,C.dhL,C.dhM,C.dhw,C.dhA,C.dhC,C.dhP,C.cfs,C.cfA,C.cfF,C.dPW,C.fZ8,C.fZ7,C.fmZ,C.fn_,C.eVE,C.eWa,C.cGL,C.fuV,C.fqH,C.fKN,C.fGN,C.fKK,C.frw,C.frv,C.fvE])
u(A.lG,[C.a1Z,C.age,C.a2h,C.a0a,C.acQ,C.aLN,C.IA,C.amm,C.cGM,C.cGN])
t(C.amc,C.aBQ)
t(C.akp,C.aA3)
t(C.av6,C.aHh)
t(C.bgY,C.aBU)
t(C.aml,C.bgY)
t(C.bgX,C.aBT)
t(C.amj,C.bgX)
t(C.bgW,C.aBR)
t(C.amf,C.bgW)
t(C.blX,C.aNs)
t(C.byG,C.aPA)
t(C.byH,C.aPB)
t(C.aGU,C.bAt)
t(C.bb3,A.baS)
t(C.byJ,A.a7a)
t(C.bb2,C.byJ)
w(C.aBQ,A.cd)
w(C.aA3,A.cd)
w(C.aHh,A.eO)
w(C.aBR,A.cd)
v(C.bgW,C.ag0)
w(C.aBT,A.cd)
v(C.bgX,C.ag0)
w(C.aBU,A.cd)
v(C.bgY,C.ag0)
w(C.aNs,A.eO)
w(C.aPA,A.cd)
w(C.aPB,A.cd)
v(C.bAt,A.eD)
v(C.byJ,A.ji)})()
A.iW(b.typeUniverse,JSON.parse('{"b03":{"aw":[],"v":[]},"bdg":{"aC":[]},"aq6":{"af":[],"v":[]},"aER":{"ah":["aq6"]},"U8":{"af":[],"v":[]},"ama":{"aw":[],"v":[]},"aWM":{"aw":[],"v":[]},"bgU":{"ah":["U8"]},"a_J":{"af":[],"v":[]},"a_N":{"af":[],"v":[]},"a_L":{"af":[],"v":[]},"a_j":{"af":[],"v":[]},"aBP":{"ah":["a_J"]},"bhi":{"ah":["a_N"]},"aBS":{"ah":["a_L"]},"a_0":{"aw":[],"v":[]},"bev":{"aC":[]},"bem":{"aC":[]},"bet":{"ah":["a_j"]},"aIT":{"aC":[]},"bjP":{"aC":[]},"bcD":{"aw":[],"v":[]},"amb":{"af":[],"v":[]},"amc":{"ah":["amb"]},"bpr":{"aC":[]},"aWR":{"aC":[]},"ako":{"af":[],"v":[]},"av5":{"af":[],"v":[]},"az3":{"af":[],"v":[]},"akp":{"ah":["ako"]},"bdi":{"aC":[]},"QR":{"aw":[],"v":[]},"aBO":{"aC":[]},"av6":{"ah":["av5"]},"bcM":{"aC":[]},"az4":{"ah":["az3"]},"amk":{"af":[],"v":[]},"ami":{"af":[],"v":[]},"ame":{"af":[],"v":[]},"aml":{"ah":["amk"]},"btt":{"aC":[]},"amj":{"ah":["ami"]},"bjX":{"aC":[]},"amf":{"ah":["ame"]},"bjn":{"aC":[]},"Wu":{"af":[],"v":[]},"amg":{"af":[],"v":[]},"U9":{"af":[],"v":[]},"a6J":{"aw":[],"v":[]},"bju":{"aC":[]},"tJ":{"aw":[],"v":[]},"IB":{"aw":[],"v":[]},"bmi":{"ah":["Wu"]},"amh":{"ah":["amg"]},"amd":{"ah":["U9"]},"ark":{"af":[],"v":[]},"are":{"af":[],"v":[]},"a0n":{"af":[],"v":[]},"aez":{"aw":[],"v":[]},"aFp":{"ah":["ark"]},"aFm":{"ah":["are"]},"bh_":{"aw":[],"v":[]},"bh2":{"aC":[]},"bkO":{"aw":[],"v":[]},"bg4":{"aC":[]},"byQ":{"aw":[],"v":[]},"boa":{"aw":[],"v":[]},"aDQ":{"ah":["a0n"]},"aey":{"aw":[],"v":[]},"bkN":{"aw":[],"v":[]},"aex":{"aw":[],"v":[]},"bkM":{"aw":[],"v":[]},"aDR":{"aw":[],"v":[]},"aK2":{"aw":[],"v":[]},"GD":{"aw":[],"v":[]},"ari":{"af":[],"v":[]},"a0H":{"af":[],"v":[]},"a0I":{"af":[],"v":[]},"aFo":{"ah":["ari"]},"bh0":{"aw":[],"v":[]},"adO":{"aw":[],"v":[]},"bgZ":{"aw":[],"v":[]},"bh3":{"aw":[],"v":[]},"aFn":{"ah":["a0H"]},"bmj":{"ah":["a0I"]},"b01":{"aw":[],"v":[]},"a7v":{"af":[],"v":[]},"blX":{"ah":["a7v"]},"blW":{"aC":[]},"aui":{"aw":[],"v":[]},"a_l":{"af":[],"v":[]},"a_k":{"af":[],"v":[]},"ZS":{"af":[],"v":[]},"a2t":{"af":[],"v":[]},"aAz":{"ah":["a_l"]},"aAy":{"ah":["a_k"]},"azh":{"ah":["ZS"]},"byI":{"ah":["a2t"]},"Gr":{"af":[],"v":[]},"aza":{"af":[],"v":[]},"byG":{"ah":["Gr"]},"byH":{"ah":["aza"]},"byF":{"aC":[]},"auh":{"af":[],"v":[]},"aGT":{"ah":["auh"]},"aeU":{"aw":[],"v":[]},"aub":{"af":[],"v":[]},"aug":{"af":[],"v":[]},"bnG":{"ah":["aub"]},"aGS":{"ah":["aug"]},"P8":{"af":[],"v":[]},"aGU":{"ah":["P8"],"eD":[]},"bb2":{"ji":[],"fk":[]}}'))
A.Dn(b.typeUniverse,JSON.parse('{"ag0":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.at
return{e2:w("aTu"),cq:w("ml"),Q:w("rs"),r:w("bv<n,n>"),c5:w("aVr"),dY:w("aVs"),fH:w("MV"),de:w("al5"),dN:w("N2<H>"),gc:w("Er<H>"),A:w("eL<n?>"),e:w("Iz"),B:w("nw"),P:w("hZ"),df:w("lu"),k:w("kZ"),x:w("aB<~>"),U:w("O<T5>"),V:w("O<ab>"),C:w("O<rs>"),O:w("O<u>"),c:w("O<MV>"),b:w("O<al5>"),ac:w("O<eL<n?>>"),I:w("O<nw>"),u:w("O<hZ>"),J:w("O<lu>"),_:w("O<kZ>"),cl:w("O<aB<ai<a9<n,@>>>>"),R:w("O<nz>"),eU:w("O<ai<+(G,G)>>"),ez:w("O<a9<n,aE>>"),gE:w("O<a9<n,n>>"),Y:w("O<a9<n,@>>"),fD:w("O<mS>"),bp:w("O<oL>"),g:w("O<p>"),ar:w("O<auu>"),v:w("O<fW>"),gy:w("O<aag>"),L:w("O<+(n,n)>"),G:w("O<+(G,G)>"),E:w("O<+(G,~())>"),bd:w("O<+(n,H,Q)>"),bF:w("O<+count,id,name(H,n,n)>"),F:w("O<cU>"),s:w("O<n>"),cF:w("O<au>"),aS:w("O<j6>"),dT:w("O<baR>"),p:w("O<v>"),Z:w("O<fk>"),D:w("O<lF>"),h:w("O<aAi>"),cC:w("O<bi8>"),fp:w("O<KW>"),M:w("O<L2>"),gZ:w("O<aIZ>"),gA:w("O<ag5>"),e4:w("O<agc>"),dE:w("O<aL0>"),f7:w("O<Q>"),n:w("O<G>"),t:w("O<H>"),dS:w("O<aC?>"),d4:w("O<n?>"),eF:w("cw<ah<af>>"),d:w("ai<nw>"),do:w("ai<hZ>"),cg:w("ai<lu>"),ax:w("ai<kZ>"),fO:w("ai<a9<n,@>>"),cz:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(H,n,n)>"),dy:w("ai<n>"),er:w("ai<au>"),gk:w("ai<lF>"),j:w("ai<@>"),fK:w("bB<n,n>"),d2:w("bB<n,ai<a9<n,@>>>"),a:w("a9<n,@>"),f:w("a9<@,@>"),gv:w("N<n,IC>"),cM:w("N<H,n>"),w:w("iF"),g2:w("rR"),bV:w("apU"),fL:w("cu"),K:w("aE"),dc:w("fW"),fo:w("Pu<H>"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),bn:w("+games,limit(Q,H)"),d9:w("+dx,hidden(G,ai<hZ>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),fT:w("ix<hZ>"),ec:w("ix<n>"),gW:w("r8<G>"),X:w("bs<G>"),bW:w("dL"),W:w("bq<n>"),b4:w("bq<H>"),cI:w("k6<n>"),av:w("Y<zI>"),cc:w("Y<n>"),l:w("v"),gF:w("fk"),fA:w("lF"),dO:w("GH"),bw:w("aex<n?>"),cy:w("L4"),q:w("mC"),y:w("Q"),i:w("G"),z:w("@"),S:w("H"),eK:w("ai<kZ>?"),m:w("arh?"),cT:w("p?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),he:w("+qrPayload,token,usesRemaining(n,n,H)?"),gG:w("+members,trees,viewOnly(H,H,Q)?"),az:w("qo?"),T:w("n?"),aD:w("dL?"),o:w("lF?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b5z=new A.be(B.fS,B.bJ,B.fS,B.bJ)
D.aet=new A.be(B.fS,B.is,B.fS,B.is)
D.b5N=new A.be(B.iF,B.bJ,B.bJ,B.bJ)
D.b5R=new A.ay(B.cJ,1.4,B.r,-1)
D.b60=new A.ay(B.ab,1,B.r,-1)
D.aeY=new A.aY(140,1/0,0,1/0)
D.b7p=new A.aY(0,1/0,64,1/0)
D.b7t=new A.aY(0,84,0,1/0)
D.af4=new A.aY(130,1/0,0,1/0)
D.aDr=w([B.m9,B.rP,B.c],x.O)
D.c9e=new A.a8(B.aA,B.aD,B.x,D.aDr,null,null)
D.b8d=new A.o(null,null,null,null,null,D.c9e,B.n)
D.dgW=w([B.aV,B.bQ],x.O)
D.cbn=new A.a8(B.b0,B.b7,B.x,D.dgW,null,null)
D.b8y=new A.o(null,null,null,null,null,D.cbn,B.n)
D.YC=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fC=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dl2=w([B.dA,D.YC,D.fC],x.O)
D.c8s=new A.a8(B.b0,B.b7,B.x,D.dl2,null,null)
D.b9i=new A.o(null,null,null,null,null,D.c8s,B.n)
D.fus=new A.F(!0,B.bW,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h50=new A.B("?",null,D.fus,null,null,null,null,null,null,null,null,null)
D.bd8=new A.cj(B.A,null,null,D.h50,null)
D.W6=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fO1=new A.B("\ud83c\udf33",null,D.W6,null,null,null,null,null,null,null,null,null)
D.afO=new A.cj(B.A,null,null,D.fO1,null)
D.fQH=new A.B("\ud83c\udfc6",null,Aq.KQ,null,null,null,null,null,null,null,null,null)
D.bdj=new A.cj(B.A,null,null,D.fQH,null)
D.bf8=new A.fl(null,null,null,null,null,E.kr,null,null,null,null)
D.afQ=new A.cj(B.A,null,null,D.bf8,null)
D.kP=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fv2=new A.F(!0,D.kP,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPH=new A.B("No books on the shelf yet.",null,D.fv2,null,null,null,null,null,null,null,null,null)
D.ev9=new A.D(B.nN,D.fPH,null)
D.bdz=new A.cj(B.A,null,null,D.ev9,null)
D.fCb=new A.F(!0,D.fC,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h5W=new A.B("\ud83d\ude8c  On the road\u2026",null,D.fCb,null,null,null,null,null,null,null,null,null)
D.evK=new A.D(B.cq,D.h5W,null)
D.be1=new A.cj(B.A,null,null,D.evK,null)
D.aXz=new A.B("\ud83e\uddfa",null,D.W6,null,null,null,null,null,null,null,null,null)
D.beg=new A.cj(B.A,null,null,D.aXz,null)
D.fTa=new A.B("\ud83c\udfad",null,D.W6,null,null,null,null,null,null,null,null,null)
D.ber=new A.cj(B.A,null,null,D.fTa,null)
D.beu=new A.cj(B.A,null,null,A7.Yp,null)
D.aga=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.agh=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bgH=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bgM=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bgY=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bh0=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bh2=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bha=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lC=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bhe=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bhj=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bhk=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bhl=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lD=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bhX=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.BL=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bi5=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bip=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bis=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.biy=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.biG=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.agU=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.biN=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.YP=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.agX=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.biY=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.YR=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bji=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.ah8=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bjH=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bjX=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bkk=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bkv=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.FV=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bkS=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bkV=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bkZ=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.ahC=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.blh=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bln=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.blt=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.ahG=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.blB=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bm2=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bma=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bmc=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bmh=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.ahW=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bmT=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.aik=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bnR=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.aix=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bof=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.G7=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bol=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bov=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.box=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.aiC=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.boQ=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.boS=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.boV=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.aiK=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.ZA=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bph=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bpC=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bpH=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.aiW=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bpO=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.ZH=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bq8=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bq9=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.Gf=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bqX=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.brA=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.brG=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.brK=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qo=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.brV=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.brZ=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bs4=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bs6=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.ajH=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.ajL=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.Gl=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.a_1=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.ajU=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bte=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.btx=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.btX=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bu5=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.akj=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.a_c=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.buf=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.buw=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.a_h=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.buN=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bv2=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.a_m=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bv7=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.akB=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.akD=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bvq=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.akJ=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bvS=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bvW=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bw1=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.bw9=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bwi=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bwR=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bxm=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fJS=new A.B("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bAT=new A.eL(null,D.fJS,B.fd,null,x.A)
D.fT1=new A.B("None",null,null,null,null,null,null,null,null,null,null,null)
D.bAV=new A.eL(null,D.fT1,B.fd,null,x.A)
D.alB=new A.bd(3e4)
D.bBs=new A.bd(38e5)
D.bCb=new A.iq(0,10,0,10)
D.bCk=new A.R(0,1,0,0)
D.bCv=new A.iq(0,4,0,4)
D.bCy=new A.R(0,4,5,0)
D.bCP=new A.R(10,10,14,10)
D.bD0=new A.iq(10,4,10,4)
D.bD8=new A.iq(10,8,10,8)
D.bD9=new A.R(10,8,8,8)
D.bDE=new A.R(12,6,12,2)
D.bDW=new A.R(14,0,14,6)
D.bE_=new A.R(14,10,6,6)
D.bE0=new A.R(14,12,14,0)
D.bE4=new A.R(14,12,14,8)
D.bE7=new A.R(14,12,8,14)
D.bEb=new A.iq(14,14,14,14)
D.bEu=new A.R(14,6,14,40)
D.bEx=new A.R(14,8,14,30)
D.bEV=new A.R(16,2,16,10)
D.bF3=new A.R(16,6,16,30)
D.bF5=new A.R(16,6,16,8)
D.bFk=new A.R(18,10,18,4)
D.bFm=new A.R(18,12,18,0)
D.bFt=new A.R(18,14,12,4)
D.an7=new A.R(18,16,18,8)
D.bFJ=new A.R(18,20,18,22)
D.bFP=new A.R(18,30,18,30)
D.bG5=new A.R(20,10,12,20)
D.bG8=new A.R(20,11,20,11)
D.bGk=new A.R(20,18,16,18)
D.bGm=new A.R(20,18,20,6)
D.bHb=new A.R(24,32,24,28)
D.bHc=new A.R(24,36,24,32)
D.bHg=new A.R(26,26,24,14)
D.bHv=new A.R(2,4,2,8)
D.bHz=new A.R(30,0,30,0)
D.bHK=new A.R(38,22,22,22)
D.anv=new A.R(40,24,24,24)
D.bHM=new A.iq(40,40,40,40)
D.bHO=new A.R(46,30,30,30)
D.bIf=new A.R(56,40,40,40)
D.bIj=new A.R(1.25,1.25,1.25,1.25)
D.bIk=new A.R(60,0,60,0)
D.bIo=new A.R(6,14,6,16)
D.bIs=new A.R(6,4,12,0)
D.bIw=new A.R(6,6,10,2)
D.bID=new A.iq(7,3,7,3)
D.bJa=new A.R(5,1.5,5,1.5)
D.bJl=new A.R(6,2.5,6,2.5)
D.h0c=new A.B("Family Games",null,B.jR,null,null,null,null,null,null,null,null,null)
D.fIu=new A.B("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.VY,null,null,null,null,null,null,null,null,null)
D.cKw=w([D.h0c,D.fIu],x.p)
D.bym=new A.fm(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.cKw,null)
D.bJM=new A.bz(1,B.bb,D.bym,null)
D.h4y=new A.B("Signature",null,B.nj,null,null,null,null,null,null,null,null,null)
D.bJP=new A.bz(1,B.bb,D.h4y,null)
D.fXM=new A.B("MADE BY THE ONE WHO PLANTED THE TREE",null,S.tU,null,null,null,null,null,null,null,null,null)
D.bKm=new A.bz(1,B.bb,D.fXM,null)
D.h1F=new A.B("Tell the AI what to fix",null,B.dq,null,null,null,null,null,null,null,null,null)
D.bKE=new A.bz(1,B.bb,D.h1F,null)
D.fCY=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3D=new A.B("Worksheets",null,D.fCY,null,null,null,null,null,null,null,null,null)
D.fD9=new A.F(!0,E.agD,null,null,null,null,13,B.cE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2v=new A.B("Track your project spending",null,D.fD9,null,null,null,null,null,null,null,null,null)
D.d8f=w([D.h3D,B.aw,D.h2v],x.p)
D.by_=new A.fm(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.d8f,null)
D.bKK=new A.bz(1,B.bb,D.by_,null)
D.fxS=new A.F(!0,E.kr,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ3=new A.B("FAMILY LIBRARY",null,D.fxS,null,null,null,null,null,null,null,null,null)
D.bL2=new A.bz(1,B.bb,D.fJ3,null)
D.OR=new C.Iz("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.wG=new C.IA(0,"male")
D.oz=new C.IA(1,"female")
D.z3=new C.IA(2,"unknown")
D.uN=new C.amm(0,"owner")
D.OS=new C.amm(1,"editor")
D.kX=new C.amm(2,"viewer")
D.aps=new A.a_(61199,"MaterialIcons",!1)
D.bQm=new A.a_(61504,"MaterialIcons",!1)
D.bQn=new A.a_(61505,"MaterialIcons",!1)
D.bQp=new A.a_(61587,"MaterialIcons",!1)
D.bQw=new A.a_(61890,"MaterialIcons",!1)
D.bRn=new A.a_(63034,"MaterialIcons",!0)
D.bRF=new A.a_(63153,"MaterialIcons",!1)
D.bSc=new A.a_(63429,"MaterialIcons",!1)
D.arz=new A.a_(984520,"MaterialIcons",!1)
D.bQU=new A.a_(62776,"MaterialIcons",!1)
D.bUy=new A.ae(D.bQU,26,B.b3,null,null,null)
D.bPk=new A.a_(57648,"MaterialIcons",!1)
D.bUS=new A.ae(D.bPk,14,B.c,null,null,null)
D.bV9=new A.ae(B.Hp,17,null,null,null,null)
D.bVf=new A.ae(B.a2S,null,B.bQ,null,null,null)
D.bVG=new A.ae(E.a3_,null,null,null,null,null)
D.bVJ=new A.ae(B.j9,18,E.kr,null,null,null)
D.a2I=new A.a_(62044,"MaterialIcons",!1)
D.bVP=new A.ae(D.a2I,null,B.aV,null,null,null)
D.bVW=new A.ae(B.zh,18,B.c,null,null,null)
D.bWD=new A.ae(B.ed,16,null,null,null,null)
D.bWK=new A.ae(D.a2I,32,B.aV,null,null,null)
D.bX2=new A.ae(E.apt,18,B.cJ,null,null,null)
D.bY8=new A.ae(B.HA,22,B.ay,null,null,null)
D.bYk=new A.ae(B.ed,22,B.b3,null,null,null)
D.bYx=new A.ae(Y.a2N,22,B.c,null,null,null)
D.bYE=new A.ae(B.uW,52,B.c,null,null,null)
D.bYO=new A.ae(B.HA,30,B.ay,null,null,null)
D.bZ6=new A.ae(B.a33,null,B.c,null,null,null)
D.asg=new A.ae(B.v8,22,B.c,null,null,null)
D.bZf=new A.ae(B.ed,17,null,null,null,null)
D.bZD=new A.ae(B.wR,26,B.cJ,null,null,null)
D.c_p=new A.ae(B.a3d,16,null,null,null,null)
D.c0b=new A.ae(B.uW,24,B.c,null,null,null)
D.c0g=new A.ae(B.Pl,20,B.tt,null,null,null)
D.c0l=new A.ae(B.Hn,null,B.bQ,null,null,null)
D.c0u=new A.ae(B.j9,18,B.c,null,null,null)
D.c19=new A.ae(B.cC,22,B.ab,null,null,null)
D.c21=new A.ae(B.ek,16,B.ab,null,null,null)
D.c2d=new A.ae(D.a2I,20,B.aV,null,null,null)
D.asH=new A.ae(B.hO,20,null,null,null,null)
D.c2K=new A.ae(B.cC,18,D.kP,null,null,null)
D.c31=new A.ae(B.zr,28,B.c,null,null,null)
D.c3d=new A.ae(B.Pa,null,B.fi,null,null,null)
D.c3y=new A.ae(B.zr,24,B.c,null,null,null)
D.c4_=new A.ae(B.uW,null,B.aV,null,null,null)
D.c40=new A.ae(B.jK,20,B.cJ,null,null,null)
D.c4k=new A.ae(B.Hp,16,null,null,null,null)
D.c5T=new A.e6(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.k2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eO,!0,null,null,null,null)
D.atq=new C.a6J(10,null)
D.c6o=new C.a6J(12,null)
D.c6p=new C.a6J(14,null)
D.dpb=w([B.bu,B.aV,B.fr,B.b3],x.O)
D.c7A=new A.a8(B.aA,B.aD,B.x,D.dpb,null,null)
D.bqJ=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bwY=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d4H=w([D.bqJ,D.bwY],x.O)
D.c7M=new A.a8(B.b0,B.b7,B.x,D.d4H,null,null)
D.dj_=w([B.eY,B.fZ,B.fr],x.O)
D.c7S=new A.a8(B.aA,B.aD,B.x,D.dj_,null,null)
D.ajv=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bhm=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d6V=w([D.ajv,D.bhm],x.O)
D.c8t=new A.a8(B.b0,B.b7,B.x,D.d6V,null,null)
D.bl8=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aCI=w([D.bl8,D.ajv],x.O)
D.c8M=new A.a8(B.aA,B.aD,B.x,D.aCI,null,null)
D.aid=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bnI=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.di1=w([D.aid,D.bnI],x.O)
D.c9q=new A.a8(B.a7,B.aa,B.x,D.di1,null,null)
D.dwg=w([B.bD,B.mT],x.O)
D.c9s=new A.a8(B.b0,B.b7,B.x,D.dwg,null,null)
D.bqE=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dxc=w([D.bqE,D.kP,D.kP,I.Nm],x.O)
D.dzO=w([0,0.07,0.9,1],x.n)
D.c9Y=new A.a8(B.a7,B.aa,B.x,D.dxc,D.dzO,null)
D.ca6=new A.a8(B.aA,B.aD,B.x,B.T_,null,null)
D.d2r=w([B.aB,D.lC],x.O)
D.ca9=new A.a8(B.a7,B.aa,B.x,D.d2r,null,null)
D.dvO=w([B.b3,B.aV,B.bQ],x.O)
D.cb9=new A.a8(B.aA,B.aD,B.x,D.dvO,null,null)
D.cfu=w([10,20,30],x.t)
D.cpq=w([-1,-0.4,0.3,1],x.n)
D.cwS=w([B.bu,B.b3,B.eY],x.O)
D.cx0=w([B.bc,B.aB,B.kq],x.O)
D.cx2=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cxL=w([30,140,262,360],x.n)
D.bp0=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cDj=w([D.bp0,E.aj4],x.O)
D.epM=new A.p(1,2)
D.ffK=new A.cU(B.b6,D.epM,3)
D.azy=w([D.ffK],x.F)
D.cKN=w([B.h6,B.ci,B.fq],x.O)
D.cNz=w([B.bN,B.bx,B.br],x.O)
D.bLT=new C.uW("classic","Classic leather","Gold-edged brown leather",D.aCI,E.kr,E.kr,"\u2766",B.K,!0,!1,!1,!1)
D.bgr=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bvI=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.da_=w([D.bgr,D.bvI],x.O)
D.aj8=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bLO=new C.uW("ornate","Ornate gold","Double gold border and flourishes",D.da_,D.aj8,D.aj8,"\u2726",B.K,!0,!0,!0,!1)
D.bkF=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bru=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d1k=w([D.bkF,D.bru],x.O)
D.bLN=new C.uW("parchment","Parchment","Old paper with dark ink",D.d1k,D.Gf,L.j5,"\u2767",B.K,!0,!1,!1,!0)
D.agj=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.btU=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dtY=w([D.agj,D.btU],x.O)
D.bos=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bt9=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bLQ=new C.uW("minimal","Clean paper","Plain and elegant, like a printed book",D.dtY,D.bos,D.bt9,"",B.K,!0,!0,!1,!0)
D.bLS=new C.uW("midnight","Midnight","Deep blue with silver stars",K.aD0,B.cx,B.cd,"\u2727",B.K,!0,!0,!1,!1)
D.bLM=new C.uW("emerald","Emerald library","Green cloth, title on the left",V.azY,E.kr,B.fA,"\u25c6",B.bp,!0,!1,!1,!1)
D.buo=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.ds_=w([B.em,D.buo],x.O)
D.bpN=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.br2=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bLR=new C.uW("rose","Rose vintage","Burgundy with rose-gold lettering",D.ds_,D.bpN,D.br2,"\u2740",B.K,!0,!1,!0,!1)
D.dwN=w([B.cm,F.nB],x.O)
D.bLP=new C.uW("modern","Modern","Dark, bold, left-aligned",D.dwN,B.aG,B.c,"",B.bp,!1,!0,!1,!1)
D.a5j=w([D.bLT,D.bLO,D.bLN,D.bLQ,D.bLS,D.bLM,D.bLR,D.bLP],A.at("O<uW>"))
D.cQz=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dwB=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bM3=new C.lu('What does "Ubuntu" mean?',D.dwB,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d37=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bM6=new C.lu("In Swahili, what do we call a grandmother?",D.d37,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d2Z=w(["Babu","Mama","Baba","Dada"],x.s)
D.bM1=new C.lu("In Swahili, what do we call a grandfather?",D.d2Z,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d4h=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bM5=new C.lu("What is a sister called in Swahili?",D.d4h,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.d9r=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bM2=new C.lu("What is a brother called in Swahili?",D.d9r,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d2Y=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bMd=new C.lu("Which word means father in Swahili?",D.d2Y,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dxN=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bMc=new C.lu('"Umoja ni nguvu" means...',D.dxN,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.duH=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bMe=new C.lu('"Haba na haba hujaza kibaba" teaches us...',D.duH,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d72=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bMb=new C.lu('The African saying "It takes a village to raise a child" means...',D.d72,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dy6=w(["The elders","The market","The river","The drum"],x.s)
D.bM7=new C.lu("Who is the traditional keeper of the family stories?",D.dy6,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cUM=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bM4=new C.lu("Why do families sit round the fire at night?",D.cUM,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dwP=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bM9=new C.lu('What does "Harambee" mean?',D.dwP,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.dcg=w(["An elder","A baby","A market","A cow"],x.s)
D.bM8=new C.lu('"Mzee" is a respectful word for...',D.dcg,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.drQ=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bMa=new C.lu('What does "Shikamoo" show?',D.drQ,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.azT=w([D.bM3,D.bM6,D.bM1,D.bM5,D.bM2,D.bMd,D.bMc,D.bMe,D.bMb,D.bM7,D.bM4,D.bM9,D.bM8,D.bMa],x.J)
D.cZa=w([90,360],x.n)
D.d0S=w([B.bQ,B.bo],x.O)
D.bqr=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d1w=w([D.agj,D.bqr],x.O)
D.d2a=w([-1,-0.3,0.4,1],x.n)
D.d33=w([0,0.45,0.72,0.92,1],x.n)
D.bkB=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d3m=w([D.bkB,B.bB],x.O)
D.bik=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.akS=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d3W=w([B.dA,D.bik,D.akS],x.O)
D.d4Y=w([B.b9,B.jk,B.ph],x.O)
D.bl9=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bt0=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bi0=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d52=w([D.bl9,D.bt0,D.bi0],x.O)
D.d5n=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d5x=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hzj=new C.aec(78,424,48,44,56)
D.hzh=new C.aec(214,396,34,34,42)
D.hzi=new C.aec(442,452,56,50,64)
D.aAR=w([D.hzj,D.hzh,D.hzi],A.at("O<aec>"))
D.d65=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bhg=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bmS=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dzK=w([D.aid,D.bhg,D.bmS],x.O)
D.bLU=new C.uX("leather","Leather",D.dzK,"vintage")
D.ddg=w([B.db,B.G5,A9.Z4],x.O)
D.bM0=new C.uX("midnight","Midnight",D.ddg,"starry")
D.d4Z=w([B.es,B.ea,B.lh],x.O)
D.bM_=new C.uX("forest","Forest",D.d4Z,"story")
D.dBO=w([B.en,B.em,B.kt],x.O)
D.bLX=new C.uX("burgundy","Burgundy",D.dBO,"royal")
D.cN6=w([B.aB,B.nx,B.np],x.O)
D.bLY=new C.uX("royal","Royal",D.cN6,"royal")
D.d7z=w([B.bx,B.cm,F.nB],x.O)
D.bLV=new C.uX("charcoal","Charcoal",D.d7z,"geo")
D.dzT=w([B.c6,B.dP,B.ym],x.O)
D.bLZ=new C.uX("sunset","Sunset",D.dzT,"sunset")
D.dAC=w([B.jk,B.Gg,B.Z8],x.O)
D.bLW=new C.uX("ocean","Ocean",D.dAC,"band")
D.zW=w([D.bLU,D.bM0,D.bM_,D.bLX,D.bLY,D.bLV,D.bLZ,D.bLW],A.at("O<uX>"))
D.d84=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.d8K=w([B.an,B.aM,B.a_],x.O)
D.da4=w([B.em,B.ea,B.db,B.he,B.yp,B.cJ,B.ku,B.cQ,B.d3],x.O)
D.da5=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.ffL=new A.cU(B.dx,B.dM,8)
D.daf=w([D.ffL],x.F)
D.dbn=w([B.bT,B.dP,B.kp],x.O)
D.bjb=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bna=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.brp=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.dbD=w([D.bjb,G.ajE,D.bna,D.brp,D.akS],x.O)
D.dbU=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.dc5=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bgC=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bmx=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.dcy=w([D.bgC,D.ahG,D.bmx],x.O)
D.ddb=w([B.bT,B.hI],x.O)
D.ddh=w([G.ns,B.ii,G.agu,B.cT],x.O)
D.deT=w([B.cT,G.ns,B.ii,D.lD,B.cT],x.O)
D.dfw=w([B.aQ,B.wg,B.yb],x.O)
D.aBU=w(["True","False"],x.s)
D.eMV=new A.y(-0.65,0.6)
D.eZA=new A.y(-0.2,0.95)
D.f_F=new A.y(0.25,0.95)
D.eQo=new A.y(0.7,0.6)
D.f0e=new A.y(1,0.1)
D.dgh=w([Ar.UO,D.eMV,D.eZA,D.f_F,D.eQo,D.f0e],x.G)
D.bpi=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bvA=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bka=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.dgn=w([D.bpi,D.bvA,D.bka],x.O)
D.dgs=w([B.bL,B.bZ,B.dn,B.aQ],x.O)
D.dgX=w([B.hd,B.c6,B.rF],x.O)
D.dhl=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.dhx=w([B.eY,B.cJ],x.O)
D.bqN=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dhX=w([D.bqN,D.agh],x.O)
D.di7=w([B.cI,B.fs,B.fB],x.O)
D.dij=w([B.aG,B.bo,B.db],x.O)
D.diX=w([B.et,B.d2,B.ea],x.O)
D.djh=w([B.dO,B.db,B.G5],x.O)
D.djl=w([B.bl,B.mN,B.d3],x.O)
D.djD=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bq_=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bob=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.djY=w([D.bq_,D.ahC,D.bob],x.O)
D.dkN=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dlQ=w([1,0,7,6,3,2],x.t)
D.a6i=w(["leather","linen","plain","stars","rays"],x.s)
D.dm1=w([0.5,2,3.6],x.n)
D.dmB=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bUf=new A.a_(985219,"MaterialIcons",!1)
D.bTP=new A.a_(983781,"MaterialIcons",!1)
D.aCo=w([B.a2S,B.hP,B.lQ,B.i4,D.bUf,B.HL,B.qN,D.bTP,K.arl,B.Da,B.qP,B.n5],A.at("O<a_>"))
D.a6m=w(["double","single","corners","none"],x.s)
D.bLJ=new C.zI("Little Seed","\ud83c\udf31",0)
D.bLL=new C.zI("Young Listener","\ud83d\udc42",40)
D.bLK=new C.zI("Storyteller","\ud83e\ude98",120)
D.bLI=new C.zI("Village Pride","\ud83c\udfe1",300)
D.bLG=new C.zI("Keeper of Roots","\ud83c\udf33",700)
D.bLH=new C.zI("Elder of the Fire","\ud83d\udd25",1500)
D.aCq=w([D.bLJ,D.bLL,D.bLK,D.bLI,D.bLG,D.bLH],A.at("O<zI>"))
D.dnL=w([B.cV,B.bh,B.cQ],x.O)
D.do0=w([],x.C)
D.DJ=w([],x.u)
D.aMA=new A.p(225,528)
D.eOA=new A.y(D.aMA,1)
D.eqw=new A.p(350,548)
D.eUS=new A.y(D.eqw,0.95)
D.aMu=new A.p(158,656)
D.eUL=new A.y(D.aMu,1.12)
D.eri=new A.p(92,544)
D.eK8=new A.y(D.eri,0.93)
D.eqz=new A.p(398,614)
D.eQL=new A.y(D.eqz,1.04)
D.eqn=new A.p(318,662)
D.eFB=new A.y(D.eqn,1.1)
D.a6u=w([D.eOA,D.eUS,D.eUL,D.eK8,D.eQL,D.eFB],A.at("O<+(p,G)>"))
D.dq1=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dqt=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dry=w([B.cT,G.ns,B.ii,D.lD,B.cT,B.ii],x.O)
D.dsX=w([B.av,B.fs,B.he],x.O)
D.dtz=w([-70,58],x.n)
D.dtB=w([-70,-30,20],x.n)
D.duE=w([B.bl,B.mN,B.Gs],x.O)
D.duW=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dPJ=new C.lZ("construction","Construction","Jobsite & builds",B.t9)
D.dPQ=new C.lZ("house","Home Build","Houses & rooms",B.uY)
D.dPG=new C.lZ("grocery","Grocery","Store & pantry",B.a3N)
D.dPF=new C.lZ("calculator","Calculations","Math & estimates",B.Ps)
D.dPO=new C.lZ("lumber","Materials","Lumber & supplies",B.PL)
D.dPC=new C.lZ("kitchen","Kitchen","Remodel & meals",A3.PM)
D.bTN=new A.a_(983756,"MaterialIcons",!1)
D.dPH=new C.lZ("landscape","Landscaping","Yard & garden",D.bTN)
D.dPB=new C.lZ("plumbing","Plumbing","Pipes & water",B.pG)
D.dPR=new C.lZ("electrical","Electrical","Wiring & power",B.hl)
D.dPz=new C.lZ("store","Retail Shop","Daily business",B.ky)
D.dPA=new C.lZ("paint_remodel","Paint & Remodel","Colors & walls",A3.PG)
D.bT9=new A.a_(983311,"MaterialIcons",!1)
D.dPN=new C.lZ("roofing","Roofing","Roofs & exteriors",D.bT9)
D.bTY=new A.a_(983986,"MaterialIcons",!1)
D.dPy=new C.lZ("warehouse","Warehouse","Storage & stock",D.bTY)
D.dPL=new C.lZ("vehicles","Vehicles","Fleet & transport",B.HM)
D.bQW=new A.a_(62785,"MaterialIcons",!1)
D.dPE=new C.lZ("farm","Farm","Crops & livestock",D.bQW)
D.dPD=new C.lZ("restaurant","Restaurant","Food & catering",B.v6)
D.dPK=new C.lZ("tools","Tools","Workshop gear",B.HI)
D.dPP=new C.lZ("wallet","Cash & Wallet","Quick spending",B.jK)
D.bS7=new A.a_(63395,"MaterialIcons",!1)
D.dPM=new C.lZ("concrete","Concrete","Foundation work",D.bS7)
D.dPI=new C.lZ("blueprint","Blueprint","Plans & design",Am.apW)
D.a6T=w([D.dPJ,D.dPQ,D.dPG,D.dPF,D.dPO,D.dPC,D.dPH,D.dPB,D.dPR,D.dPz,D.dPA,D.dPN,D.dPy,D.dPL,D.dPE,D.dPD,D.dPK,D.dPP,D.dPM,D.dPI],A.at("O<lZ>"))
D.dvt=w([B.bv,B.bh],x.O)
D.dwh=w([B.iI,B.oh,B.dX],x.O)
D.air=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.ajq=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bow=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bg8=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aDz=w([D.air,D.ajq,D.bow,D.bg8],x.O)
D.dxt=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a72=w(["top","middle","bottom"],x.s)
D.dyX=w([B.cn,B.bo,B.db],x.O)
D.aDU=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.b9N=new A.ab(0,B.G,B.b6,B.J,14)
D.aDY=w([D.b9N],x.V)
D.bnq=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dzD=w([D.agU,D.a_c,D.bnq],x.O)
D.dzE=w([B.b4,B.d2,B.ea],x.O)
D.eq6=new A.p(24,-8)
D.eqP=new A.p(48,0)
D.eq2=new A.p(24,6)
D.dBl=w([B.J,D.eq6,D.eqP,D.eq2],x.g)
D.dBK=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.emD={top:0,middle:1,bottom:2}
D.dEY=new A.bv(D.emD,["Top","Middle","Bottom"],x.r)
D.emc={double:0,single:1,corners:2,none:3}
D.dF3=new A.bv(D.emc,["Double line","One line","Corners","None"],x.r)
D.enr={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dGx=new A.bv(D.enr,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dGJ=new A.bv(B.i6,[],A.at("bv<H,+(n,n)>"))
D.emu={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.DX=new A.bv(D.emu,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.at("bv<n,H>"))
D.dK7=new H.NY(32,null)
D.dK8=new H.NY(40,null)
D.dK9=new H.NY(46,null)
D.aM1=new C.aug(null)
D.eoY=new A.p(0,40)
D.eoZ=new A.p(0,412)
D.ep0=new A.p(0,900)
D.epa=new A.p(0,-34)
D.epb=new A.p(0,-46)
D.epd=new A.p(0,-74)
D.epg=new A.p(100,300)
D.eph=new A.p(10,14)
D.epk=new A.p(10,-10)
D.epp=new A.p(10,-46)
D.epq=new A.p(10,-58)
D.epr=new A.p(116,442)
D.ept=new A.p(11,-1)
D.epu=new A.p(11,-10)
D.epv=new A.p(11,-21)
D.aMp=new A.p(11,-60)
D.epC=new A.p(14,-2)
D.epD=new A.p(150,520)
D.a92=new A.p(150,592)
D.epG=new A.p(15,-15)
D.epH=new A.p(16,-1)
D.epL=new A.p(190,444)
D.epO=new A.p(1,5)
D.epW=new A.p(21,-78)
D.epX=new A.p(222,615)
D.JJ=new A.p(225,300)
D.a94=new A.p(225,574)
D.eq5=new A.p(24,-52)
D.eq7=new A.p(250,210)
D.eqi=new A.p(2,-56)
D.aME=new A.p(300,0)
D.eqj=new A.p(300,440)
D.eqm=new A.p(318,476)
D.eqp=new A.p(324,144)
D.a97=new A.p(332,150)
D.eqr=new A.p(335,585)
D.eqs=new A.p(338,140)
D.eqt=new A.p(340,158)
D.eqv=new A.p(34,-60)
D.En=new A.p(36,-24)
D.eqx=new A.p(372,470)
D.eqy=new A.p(390,455)
D.eqH=new A.p(42,468)
D.eqI=new A.p(431,510)
D.eqJ=new A.p(431,520)
D.eqK=new A.p(45,-92)
D.eqL=new A.p(46,20)
D.eqM=new A.p(46,-92)
D.eqN=new A.p(46,-94)
D.eqO=new A.p(47,-4)
D.eqQ=new A.p(48,-4)
D.eqY=new A.p(4,-26)
D.er5=new A.p(60,455)
D.erd=new A.p(8,14)
D.erh=new A.p(8,-76)
D.erj=new A.p(95,575)
D.erk=new A.p(98,-24)
D.erm=new A.p(9,-2)
D.ern=new A.p(9,-58)
D.aMN=new A.p(9,-79)
D.ero=new A.p(9,-9)
D.es1=new A.p(16.5,8)
D.es3=new A.p(3.2,0)
D.es5=new A.p(-16.5,8)
D.esc=new A.p(16.5,2)
D.esf=new A.p(-3.2,0)
D.esn=new A.p(9.5,6)
D.esr=new A.p(-10,14)
D.ess=new A.p(-10,-12)
D.est=new A.p(-10,-58)
D.esv=new A.p(-11,-1)
D.esw=new A.p(-11,-10)
D.esy=new A.p(-11,-60)
D.esz=new A.p(-12,-14)
D.esA=new A.p(-12,-16)
D.esH=new A.p(-14,-2)
D.esK=new A.p(-15,-15)
D.esL=new A.p(-15,-3)
D.esN=new A.p(-16,-1)
D.et3=new A.p(-24,-52)
D.eta=new A.p(-2,-34)
D.etb=new A.p(-2,-38)
D.etd=new A.p(-30,-100)
D.a99=new A.p(-36,-24)
D.eto=new A.p(-4,-26)
D.etq=new A.p(-4,-6)
D.etA=new A.p(-8,-3)
D.etB=new A.p(-8,-48)
D.etE=new A.p(-9,-2)
D.etG=new A.p(-9,-58)
D.etH=new A.p(-9,-79)
D.etI=new A.p(-9,-9)
D.etK=new A.p(-9.5,6)
D.etX=new A.p(-16.5,2)
D.fQn=new A.B("Write a new book",null,B.hu,null,B.K,null,null,null,null,null,null,null)
D.euw=new A.D(B.kx,D.fQn,null)
D.h46=new A.B("Tap to go on",null,B.vL,null,null,null,null,null,null,null,null,null)
D.euR=new A.D(B.lj,D.h46,null)
D.arP=new A.ae(B.i2,18,B.c,null,null,null)
D.fJo=new A.B("Add",null,B.l7,null,null,null,null,null,null,null,null,null)
D.dgG=w([D.arP,B.rb,D.fJo],x.p)
D.fcR=new A.c8(B.aL,B.e,B.O,B.l,null,B.p,null,0,D.dgG,null)
D.euU=new A.D(B.nK,D.fcR,null)
D.euV=new A.D(E.alZ,A7.Yp,null)
D.fCT=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMA=new A.B("New Project",null,D.fCT,null,null,null,null,null,null,null,null,null)
D.dla=w([D.arP,B.af,D.fMA],x.p)
D.fcU=new A.c8(B.aL,B.e,B.O,B.l,null,B.p,null,0,D.dla,null)
D.ev8=new A.D(B.hM,D.fcU,null)
D.fP6=new A.B("Choose your header",null,A0.vK,null,null,null,null,null,null,null,null,null)
D.evt=new A.D(B.i1,D.fP6,null)
D.bfn=new A.fl(2.2,null,null,null,null,B.cJ,null,null,null,null)
D.fiC=new A.a5(22,22,D.bfn,null)
D.bdu=new A.cj(B.A,null,null,D.fiC,null)
D.evy=new A.D(B.a0z,D.bdu,null)
D.bEm=new A.R(14,2,14,6)
D.h2e=new A.B("The top of your book. Tap a design to see it.",null,T.tS,null,null,null,null,null,null,null,null,null)
D.evz=new A.D(D.bEm,D.h2e,null)
D.fOg=new A.B("\ud83c\udfc6 A new record!",null,B.h4,null,null,null,null,null,null,null,null,null)
D.evB=new A.D(B.lj,D.fOg,null)
D.exa=new A.j4(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.exd=new A.j4(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aNn=new A.j4(1,0.9607843137254902,0.48627450980392156,0)
D.JS=new A.j4(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.Aw=new A.j4(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.exj=new A.j4(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hBl=new C.bjP(null)
D.bz8=new A.mJ(D.hBl,null,B.az,null,null)
D.aR0=new A.cK(0,0,0,0,null,null,D.bz8,null)
D.fJq=new A.B("\ud83c\udfc5",null,B.abq,null,null,null,null,null,null,null,null,null)
D.eBJ=new A.cK(null,0,-34,null,null,null,D.fJq,null)
D.eJO=new A.y("E","Sit by the fire again")
D.ePo=new A.y("C","Good Learner")
D.eSP=new A.y("D","Still Growing")
D.eXo=new A.y(-42,42)
D.eYJ=new A.y("B","Faithful Listener")
D.f_H=new A.y("A","Keeper of the Family")
D.f2S=new A.b5(-17,0.7,0)
D.f3r=new A.b5(-8,0.95,1.3)
D.f4v=new A.b5(18,0.65,5.2)
D.f4x=new A.b5(0,1.15,2.6)
D.f4S=new A.b5(9,0.9,3.9)
D.f6N=new A.ce([0,0,1,1])
D.aSv=new A.a1(0,0,520,160)
D.f9T=new A.a1(10,612,440,618)
D.f9U=new A.a1(10,612,440,628)
D.f9X=new A.a1(14,-64,34,-12)
D.fa_=new A.a1(300,336,350,348)
D.aa3=new A.a1(30,96,420,346)
D.fa0=new A.a1(30,-9,46,1)
D.fa1=new A.a1(4,2,11,14)
D.fa3=new A.a1(-8,-12.5,8,-7)
D.fa4=new A.a1(-16.5,-21,16.5,1)
D.fa5=new A.a1(60,342,88,348)
D.UP=new A.a1(66,-66,94,-36)
D.fa6=new A.a1(6,8,10,14)
D.fa9=new A.a1(95,343,115,348)
D.faa=new A.a1(-6.5,-74,6.5,-58)
D.fag=new A.a1(-100,-74,100,-12)
D.fah=new A.a1(-10,8,-6,14)
D.fai=new A.a1(-11,2,-4,14)
D.faj=new A.a1(-11,-70,11,-56)
D.faq=new A.a1(-13,-24,13,-4)
D.faw=new A.a1(-15,-21,15,0)
D.faz=new A.a1(-16,-21,16,1)
D.faA=new A.a1(-16,-21,16,2)
D.faD=new A.a1(-16,-26,16,-6)
D.faN=new A.a1(-230,-26,230,26)
D.fba=new A.a1(-38,-26,12,-6)
D.fbe=new A.a1(-3,-70,3,-63)
D.fbf=new A.a1(-44,-22,44,0)
D.fbh=new A.a1(-46,-9,-30,1)
D.aSz=new A.a1(-80,-190,80,20)
D.fbo=new A.a1(-8,-26,40,-6)
D.fbp=new A.a1(-98,-80,92,-75)
D.fbq=new A.a1(-9,-15,9,-9)
D.h1M=new A.B("Let the AI write it from your tree",null,B.iG,null,B.K,null,null,null,null,null,null,null)
D.bMN=new A.df(1,B.cj,D.h1M,null)
D.dda=w([E.a4h,B.af,D.bMN],x.p)
D.fcu=new A.c8(B.aL,B.e,B.O,B.l,null,B.p,null,0,D.dda,null)
D.fJ4=new A.B("Save member",null,B.ce,null,null,null,null,null,null,null,null,null)
D.dtj=w([D.asH,B.af,D.fJ4],x.p)
D.fcF=new A.c8(B.aL,B.ba,B.i,B.l,null,B.p,null,0,D.dtj,null)
D.bYq=new A.ae(B.il,14,B.b3,null,null,null)
D.fwp=new A.F(!0,B.b3,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN0=new A.B("Cashier",null,D.fwp,null,null,null,null,null,null,null,null,null)
D.dlH=w([D.bYq,B.bn,D.fN0],x.p)
D.fcJ=new A.c8(B.aL,B.e,B.O,B.l,null,B.p,null,0,D.dlH,null)
D.fJ5=new A.B("Transfer & settings",null,B.dq,null,null,null,null,null,null,null,null,null)
D.bKt=new A.bz(1,B.bb,D.fJ5,null)
D.d4q=w([D.asg,B.au,D.bKt],x.p)
D.fcK=new A.c8(B.aL,B.e,B.i,B.l,null,B.p,null,0,D.d4q,null)
D.fhi=new A.av(16,40)
D.fhn=new A.av(22,64)
D.fhu=new A.av(280,88)
D.fii=new A.a5(30,null,null,null)
D.fI9=new A.B("The teacher is writing\u2026",null,B.AT,null,null,null,null,null,null,null,null,null)
D.beB=new A.cj(B.A,null,null,D.fI9,null)
D.hvb=new A.bq("w",x.W)
D.fiH=new A.a5(null,56,D.beB,D.hvb)
D.fju=new A.hJ(5,8,8,1,null)
D.fjC=new A.hJ(2,12,12,1.05,null)
D.fMG=new A.B("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fkl=new A.b1(D.fMG,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fMW=new A.B("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aUR=new A.b1(D.fMW,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fVp=new A.B("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fkP=new A.b1(D.fVp,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h58=new A.B("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fkU=new A.b1(D.h58,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fP4=new A.B("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fl0=new A.b1(D.fP4,null,null,null,null,null,null,null,null,null,null,null,null,B.h8,!1,null,null,null,B.t,null)
D.h2r=new A.B("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aUV=new A.b1(D.h2r,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fP2=new A.B("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.flq=new A.b1(D.fP2,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fJH=new A.B("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fls=new A.b1(D.fJH,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fSQ=new A.B("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fly=new A.b1(D.fSQ,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h5T=new A.B("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fme=new A.b1(D.h5T,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h0G=new A.B("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fmE=new A.b1(D.h0G,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h5c=new A.B("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fmH=new A.b1(D.h5c,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fX3=new A.B("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fmJ=new A.b1(D.fX3,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fR_=new A.B("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fmK=new A.b1(D.fR_,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fR0=new A.B("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fnL=new A.b1(D.fR0,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fMI=new A.B("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fo2=new A.b1(D.fMI,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fOI=new A.B("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fom=new A.b1(D.fOI,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fWw=new A.B("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.foE=new A.b1(D.fWw,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fRQ=new A.B("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.foF=new A.b1(D.fRQ,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fBy=new A.F(!0,B.bE,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqg=new A.ep("\u2665",null,null,B.cN,null,null,null,null,null,null,D.fBy)
D.fyI=new A.F(!0,B.aS,null,null,null,null,28,B.U,B.cK,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqw=new A.ep("Today: how well do you know the family?",null,null,B.cN,null,null,null,null,null,null,D.fyI)
D.fqN=new A.F(!0,B.qd,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frZ=new A.F(!0,D.kP,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsm=new A.F(!0,D.kP,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsq=new A.F(!0,B.cT,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsz=new A.F(!0,D.fC,null,null,null,null,15,B.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsK=new A.F(!0,D.fC,null,null,null,null,13,B.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft3=new A.ta(!0,B.tE,null,null,null,null,B.dH,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftj=new A.F(!0,B.cT,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftm=new A.F(!0,D.kP,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftn=new A.F(!0,B.cT,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fts=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftv=new A.F(!0,B.cT,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu0=new A.F(!0,B.b3,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu1=new A.F(!0,B.ab,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu3=new A.F(!0,B.aS,null,null,null,null,15.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuv=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aW7=new A.F(!0,B.aR,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aW8=new A.F(!0,D.lC,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuW=new A.F(!0,B.cT,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.abv=new A.ta(!0,B.Uk,null,null,null,null,B.dH,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.VJ=new A.F(!0,B.cT,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv5=new A.F(!0,B.a_,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fva=new A.F(!0,D.fC,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvz=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwK=new A.F(!0,D.fC,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWi=new A.F(!0,D.fC,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx3=new A.F(!0,B.ab,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxe=new A.F(!0,D.fC,null,null,null,null,null,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxg=new A.F(!0,null,null,null,null,null,8,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxm=new A.F(!0,L.j5,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWm=new A.F(!0,D.fC,null,null,null,null,14.5,B.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyh=new A.F(!0,D.fC,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyB=new A.F(!0,D.fC,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyD=new A.F(!0,B.a_,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyF=new A.F(!0,B.cT,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz2=new A.F(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A6.IH,null,null,null)
D.aWB=new A.F(!0,D.fC,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzq=new A.F(!0,B.a_,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzM=new A.F(!0,B.fi,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA9=new A.F(!0,B.bQ,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAe=new A.F(!0,B.bD,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAq=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAt=new A.F(!0,D.fC,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAB=new A.F(!0,D.Gf,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAN=new A.F(!0,B.b3,null,null,null,null,13,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBb=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBi=new A.F(!0,B.ab,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.DA,null,null,null)
D.fBJ=new A.F(!0,B.cT,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBS=new A.F(!0,B.cJ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC4=new A.F(!0,D.lD,null,null,null,null,13,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWX=new A.F(!0,D.fC,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.KY=new A.F(!0,B.cT,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWZ=new A.F(!0,B.cT,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.DA,null,null,null)
D.fCp=new A.F(!0,B.bQ,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCt=new A.F(!0,G.ns,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCR=new A.F(!0,B.b3,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fD8=new A.F(!0,D.fC,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDw=new A.F(!0,B.c,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDV=new A.F(!0,D.fC,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEr=new A.F(!0,D.fC,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEw=new A.F(!0,B.an,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEF=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.abY=new A.F(!0,B.an,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ac_=new A.F(!0,D.lC,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGp=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGI=new A.F(!0,B.aS,null,null,null,null,27,B.U,B.cK,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGP=new A.F(!0,L.j5,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGX=new A.F(!0,L.j5,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHq=new A.B("Time:",null,B.hs,null,null,null,null,null,null,null,null,null)
D.fHL=new A.B("\ud83c\udfae",null,K.abP,null,null,null,null,null,null,null,null,null)
D.fHM=new A.B("Themes",null,B.pV,null,null,null,null,null,null,null,null,null)
D.fIi=new A.B("\ud83c\udfb2",null,B.xy,null,null,null,null,null,null,null,null,null)
D.fIm=new A.B("Delete this game?",null,B.iG,null,null,null,null,null,null,null,null,null)
D.fIt=new A.B("Add Item",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fwY=new A.F(!0,B.a_,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIU=new A.B("Debt receipt",null,D.fwY,null,B.K,null,null,null,null,null,null,null)
D.aXd=new A.F(!0,B.an,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJc=new A.B("Person who owes",null,D.aXd,null,null,null,null,null,null,null,null,null)
D.fK9=new A.B("Notes",null,B.abE,null,null,null,null,null,null,null,null,null)
D.fKA=new A.B("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fvR=new A.F(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKC=new A.B("Share",null,D.fvR,null,null,null,null,null,null,null,null,null)
D.fLD=new A.B("Move your family trees",null,I.abV,null,null,null,null,null,null,null,null,null)
D.fMh=new A.B("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fMV=new A.B("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fNi=new A.B("SAVE",null,D.KY,null,null,null,null,null,null,null,null,null)
D.fNV=new A.B("The round button is the right answer.",null,T.xu,null,null,null,null,null,null,null,null,null)
D.fOf=new A.B("Remove this book?",null,B.h4,null,null,null,null,null,null,null,null,null)
D.fCO=new A.F(!0,B.cT,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.DA,null,null,null)
D.fON=new A.B("Fireside Stories",null,D.fCO,null,null,null,null,null,null,null,null,null)
D.aXI=new A.B("Download",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fPt=new A.B("What should the AI do?",null,B.dq,null,null,null,null,null,null,null,null,null)
D.fvu=new A.F(!0,D.lC,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPI=new A.B("REPORT CARD",null,D.fvu,null,null,null,null,null,null,null,null,null)
D.fQu=new A.B("Calabash Catch",null,B.L1,null,null,null,null,null,null,null,null,null)
D.fQW=new A.B("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fRn=new A.B("\ud83c\udfe1",null,B.ET,null,null,null,null,null,null,null,null,null)
D.fS4=new A.B("Ribbon bookmark",null,B.jA,null,null,null,null,null,null,null,null,null)
D.fEq=new A.F(!0,B.b3,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSz=new A.B("NGMY.ORG",null,D.fEq,null,B.K,null,null,null,null,null,null,null)
D.fTS=new A.B("Scan family tree QR",null,B.cG,null,null,null,null,null,null,null,null,null)
D.fAu=new A.F(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUF=new A.B("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fAu,null,B.K,null,null,null,null,null,null,null)
D.fVT=new A.B("Delete",null,B.VD,null,null,null,null,null,null,null,null,null)
D.fVU=new A.B("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fW1=new A.B("Thumbnail",null,B.pV,null,null,null,null,null,null,null,null,null)
D.fWB=new A.B("Save the cover",null,B.cG,null,null,null,null,null,null,null,null,null)
D.fWG=new A.B("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.B2,null,B.K,null,null,null,null,null,null,null)
D.fX4=new A.B("Your photos",null,B.pV,null,null,null,null,null,null,null,null,null)
D.fXk=new A.B("Create Project",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fXH=new A.B("\u2b50 stars",null,B.VS,null,null,null,null,null,null,null,null,null)
D.fXV=new A.B("Design your cover",null,A0.vK,null,null,null,null,null,null,null,null,null)
D.fY0=new A.B("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fY3=new A.B("PICTURE",null,M.vO,null,null,null,null,null,null,null,null,null)
D.fY5=new A.B("\ud83c\udfaf",null,D.W6,null,null,null,null,null,null,null,null,null)
D.fYs=new A.B("Paid",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fYu=new A.B("You can undo it right after.",null,T.xu,null,null,null,null,null,null,null,null,null)
D.fZ1=new A.B("Print",null,B.vM,null,null,null,null,null,null,null,null,null)
D.fZq=new A.B("Amount owed",null,D.aXd,null,null,null,null,null,null,null,null,null)
D.fZF=new A.B("Got it",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h_g=new A.B("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.h_j=new A.B("Add to budget",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h_K=new A.B("Debtor signature",null,B.abE,null,null,null,null,null,null,null,null,null)
D.h_U=new A.B("Change icon",null,B.abD,null,null,null,null,null,null,null,null,null)
D.h0H=new A.B("MADE BY THE SYSTEM, FROM YOUR TREE",null,S.tU,null,null,null,null,null,null,null,null,null)
D.h18=new A.B("Family tree QR",null,B.cG,null,null,null,null,null,null,null,null,null)
D.h1e=new A.B("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.W5,null,null,null,null,null,null,null,null,null)
D.h1C=new A.B("Download",null,B.vM,null,null,null,null,null,null,null,null,null)
D.h1D=new A.B("The person who planted this tree has not made a game yet.",null,B.B0,null,null,null,null,null,null,null,null,null)
D.h1H=new A.B("Change",null,B.pV,null,null,null,null,null,null,null,null,null)
D.h2x=new A.B("Clear all",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h2A=new A.B("WHAT SHOULD IT CHANGE?",null,M.vO,null,null,null,null,null,null,null,null,null)
D.h37=new A.B("COLOUR",null,M.vO,null,null,null,null,null,null,null,null,null)
D.h3l=new A.B("Do it",null,B.cG,null,null,null,null,null,null,null,null,null)
D.h3o=new A.B("Create Tree",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h3y=new A.B("Give me another clue",null,D.KY,null,null,null,null,null,null,null,null,null)
D.h4s=new A.B("Create Family Tree",null,B.fb,null,null,null,null,null,null,null,null,null)
D.h4C=new A.B("THE TEACHER EXPLAINS THESE",null,S.tU,null,null,null,null,null,null,null,null,null)
D.fqM=new A.F(!0,E.kr,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h4I=new A.B("Write the first page myself",null,D.fqM,null,null,null,null,null,null,null,null,null)
D.h5f=new A.B("Use this header",null,B.cG,null,null,null,null,null,null,null,null,null)
D.h5m=new A.B("Create Project",null,E.aWU,null,null,null,null,null,null,null,null,null)
D.hwE=new C.acQ(1,"header")
D.ad0=new C.acQ(2,"projects")
D.hwF=new C.acQ(3,"cashier")
D.ad1=new C.acQ(4,"familyTree")
D.hKl=new C.cGM(0,"start")
D.hKm=new C.cGN(0,"start")
D.hx2=new C.ZS(null)
D.hy3=new C.a_k(null)
D.dGG=new A.bv(B.i6,[],A.at("bv<n,GH>"))
D.dop=w([],x.dE)
D.doq=w([],x.M)
D.hyC=new C.bh1(D.dGG,D.dop,D.doq,0,0,null,null)
D.b1e=new C.a0a(0,"intro")
D.b1f=new C.a0a(1,"countdown")
D.ade=new C.a0a(2,"ask")
D.X1=new C.a0a(3,"reveal")
D.b1g=new C.a0a(4,"end")
D.hBn=new C.ti(F.Gp,D.lD,B.cT,F.lE,5,!1,!1,!1,0,null)
D.hBo=new C.ti(F.Gp,B.en,B.cT,B.bP,2,!0,!0,!1,2,B.cT)
D.hBp=new C.ti(B.op,B.cJ,B.cT,F.lE,2,!0,!1,!1,2,B.av)
D.hBq=new C.ti(F.Gp,B.dO,B.cT,F.lE,5,!1,!1,!1,1,null)
D.hBr=new C.ti(F.a_t,D.ajq,B.cT,F.lE,4,!0,!1,!0,0,null)
D.b1j=new C.ti(F.a_t,B.dP,B.cT,F.lE,3,!0,!1,!0,2,null)
D.b1k=new C.ti(F.mY,D.lD,B.c,F.lE,0,!1,!1,!0,0,null)
D.b1l=new C.ti(B.op,B.aB,B.cT,B.bP,2,!0,!0,!1,2,B.dP)
D.b1m=new C.ti(B.op,G.ns,B.ii,F.lE,5,!1,!1,!0,3,null)
D.hBs=new C.ti(B.op,B.dP,B.cT,F.lE,0,!0,!1,!1,0,B.aB)
D.b1n=new C.ti(F.Gp,B.en,B.cT,B.bP,1,!1,!0,!1,1,null)
D.b1o=new C.ti(F.FX,B.av,B.aB,F.lE,4,!0,!1,!0,2,null)
D.hBt=new C.ti(F.mY,B.av,B.en,F.lE,3,!0,!1,!1,0,null)
D.hBu=new C.ti(B.op,B.dO,B.cT,B.bP,1,!1,!0,!1,1,null)
D.hBv=new C.ti(F.FX,D.air,B.c,F.lE,5,!1,!1,!0,0,null)
D.hC8=new C.a0I(null)
D.hKu=new C.age(0,"still")
D.Xo=new C.age(1,"walk")
D.b1P=new C.age(2,"pound")
D.b1Q=new C.age(3,"drum")
D.hG8=new C.a1Z(0,"greet")
D.b1R=new C.a1Z(1,"teach")
D.ady=new C.a1Z(2,"ask")
D.hG9=new C.a1Z(3,"feedback")
D.b1S=new C.a1Z(4,"end")
D.Xu=new C.a2h(0,"intro")
D.Xv=new C.a2h(1,"asking")
D.Bi=new C.a2h(2,"reacting")
D.adK=new C.a2h(3,"driving")
D.adL=new C.a2h(4,"arrived")
D.adT=new C.aLN(0,"projects")
D.b2h=new C.aLN(1,"cashier")
D.hIe=new C.aLN(2,"familyTree")})()};
(a=>{a["oxu/aZBnaoCiO+SSmk64pWw4fX0="]=a.current})($__dart_deferred_initializers__);