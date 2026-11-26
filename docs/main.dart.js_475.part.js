((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A9,S,A_,Aa,P,A0,T,M,Ab,L,A1,U,H,E,Ac,V,Ad,Ae,A2,Af,Ag,Ah,Ai,Q,Aj,Ak,N,A3,Al,A4,A5,A6,Am,W,A7,An,Ao,G,Ap,Aq,Ar,A8,As,At,Au,Av,X,O,F,Aw,I,Y,K,Ax,Z,R,Ay,C={
bI1(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bI1=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.wc(null,""),$async$bI1)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.Y(y.z)
t=A.nC(b1)
s=A.c3(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.du(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cZ(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.I)(h),++d){a0=h[d]
f.push(A.J(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.V.au(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.rw(t,a1,B.ih,"book",E.Hu),$async$bI1)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.S2(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.Y(l!=null&&A.Mh(l)?y.k:y.y)
for(j=J.a2(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a0(r.a(j.h(a2,a7)),q,p):B.cI
g=a8.h(0,"title")
a9=B.a.i(A.v(g==null?"":g))
g=a8.h(0,"body")
b0=B.a.i(A.v(g==null?"":g))
g=a9.length===0?h[a7].a:a9
f=b0.length===0?h[a7].b:b0
s[k+a7]=new A.y(g,f)}case 5:k=i
w=4
break
case 6:r=A.a([],x.L)
for(a7=0;a7<b3.length;++a7){q=s[a7]
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a4w(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bI1,v)},
aj2(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aj2=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.wc(null,""),$async$aj2)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.Y(y.z)
t=A.nC(b6)
s=x.S
r=A.cV(c1,0,A.dz(4,"count",s),A.U(c1).c)
q=H.a4f(new A.O(r,new C.fXt(),r.$ti.k("O<aj.E,n>")).aL(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fXs(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.V.au(b7,null)+"\nAllowed values: style one of "+B.d.aL(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aj2)
case 6:l=c5
k=H.S2(l==null?"":l)
if(k==null)throw A.Y("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.v(s==null?"I updated the cover.":s)
r=x.f
u=new C.aqQ(s,D.dNP,r.b(k.h(0,"cover"))?A.a0(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.t
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.Y("There is no page to change.")
h=A.S(s,x.fz)
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
return A.b(m.$1(f+B.V.au(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aj2)
case 10:l=c5
k=l==null?null:H.S2(l)
if(k==null)throw A.Y(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.v(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.v(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.cO(a8,d),a5=J.aQ(a2.a),a2=a2.$ti,a7=new A.k_(a5,a2.k("k_<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gP(a5))
b0=J.a2(a9)
b1=A.aJ(b0.h(a9,"index"))
i=b1==null?null:B.i.M(b1)
if(i==null||!B.d.q(a4,i))continue
b1=b0.h(a9,"title")
b2=B.a.i(A.v(b1==null?"":b1))
a9=b0.h(a9,"body")
b3=B.a.i(A.v(a9==null?"":a9))
a9=b2.length===0
if(a9&&b3.length===0)continue
a9=a9?c1[i].a:b2
h.n(0,i,new A.y(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("ba<2>")
p=A.cw(new A.ba(h,s),new C.fXu(),s.k("M.E"),p)
p=H.a4f(A.pe(p,3,A.a3(p).k("M.E")).aL(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cs<1>")
b4=A.B(new A.cs(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.I)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a4w(s,b9),$async$aj2)
case 13:b5=c5
for(s=J.a2(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.aqQ(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aj2,v)},
hR7(d,e,f){return A.cg(null,B.v.j(0.65),!1,null,new C.h74(e,f),d,null,!0,!0,x.g2)},
aqQ:function aqQ(d,e,f){this.a=d
this.b=e
this.c=f},
fXt:function fXt(){},
fXs:function fXs(d){this.a=d},
fXu:function fXu(){},
h74:function h74(d,e){this.a=d
this.b=e},
bFI(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bFI=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aR(b1,new C.fKd())){u=null
w=1
break}t=B.d.cw(b1,new C.fKe())
s=$.T()
r=new A.oW(new A.or())
q=A.v2(r,D.aU3)
p=A.L()
p.r=B.c.gp(0)
q.aE(D.aU3,p)
o=A.L()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.ac
o.d=B.bG
o.e=B.dP
n=new C.fKj(t)
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
s=$.T()
p=A.a([],x.v)
a3=new A.aH(s.r,B.ak,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.I)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.aZ(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ac()
a4=!0}else{a7=new A.aq(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ac()}}q.af(a3,o)}else{p=A.a([],x.v)
a3=new A.aH(s.r,B.ak,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.I)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.aZ(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ac()
a4=!0}else{a7=new A.aq(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ac()}}q.af(a3,o)}w=4
return A.b(r.n_().vJ(520,160),$async$bFI)
case 4:w=3
return A.b(b3.ho(B.hp),$async$bFI)
case 3:b0=b3
u=b0==null?null:J.eV(B.dM.gaS(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFI,v)},
fV4(d){return C.iwx(d)},
iwx(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fV4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.blk()
n=d.x!=null&&d.A_(null).length===0
if(d.x!=null)t=n?D.B6:D.KD
else t=d.gVb()?D.KD:D.aOU
w=3
return A.b(C.bFI(d.ax),$async$fV4)
case 3:s=f
p.a=null
if(s!=null)p.a=A.apt(s)
r=A.a6g(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aOU}else{p.c=C.xA(q,!0)
p.b=n?D.B6:D.KD}r.a4Z(A.hhP(new C.fV6(p,d,new C.fV7(),t,n,o),null,D.bKr,B.xT))
u=r.jI(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fV4,v)},
h1p(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$h1p=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fV4(d),$async$h1p)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aK(s,r,"_")
if(q.length>40)q=B.a.aw(q,0,40)
u=Ai.HJ(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h1p,v)},
fKd:function fKd(){},
fKe:function fKe(){},
fKj:function fKj(d){this.a=d},
fV7:function fV7(){},
fV6:function fV6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fV5:function fV5(){},
h7x(d,e){var w=0,v=A.j(x.H)
var $async$h7x=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,B.v.j(0.55),!0,null,new C.h7B(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$h7x)
case 2:return A.h(null,v)}})
return A.i($async$h7x,v)},
bIu(d,e,f,g){return C.iEn(d,e,f,g)},
iEn(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bIu=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cJ.aK(t)}catch(q){r=null}if(r==null||r.length===0){d.L(x.q).f.T(D.fDS)
w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.h7t(g,r,f),d,null,!0,!0,x.H),$async$bIu)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bIu,v)},
h7C(d,e){var w=0,v=A.j(x.H)
var $async$h7C=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,null,!0,null,new C.h7F(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$h7C)
case 2:return A.h(null,v)}})
return A.i($async$h7C,v)},
b1n:function b1n(d,e){this.c=d
this.a=e},
cau:function cau(){},
beL:function beL(d,e){this.b=d
this.a=e},
h7B:function h7B(d,e){this.a=d
this.b=e},
h7y:function h7y(d){this.a=d},
h7z:function h7z(d,e,f){this.a=d
this.b=e
this.c=f},
h7A:function h7A(d,e){this.a=d
this.b=e},
h7t:function h7t(d,e,f){this.a=d
this.b=e
this.c=f},
h7r:function h7r(d){this.a=d},
h7s:function h7s(d,e,f){this.a=d
this.b=e
this.c=f},
h7F:function h7F(d,e){this.a=d
this.b=e},
h7D:function h7D(d){this.a=d},
h7E:function h7E(d,e,f){this.a=d
this.b=e
this.c=f},
fPa(d,e){var w=0,v=A.j(x.y),u,t
var $async$fPa=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a4_(d),$async$fPa)
case 3:t=g
J.ng(t,new C.fPb(e))
u=A.ajK(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fPa,v)},
fPb:function fPb(d){this.a=d},
ar2:function ar2(d,e,f){this.c=d
this.d=e
this.a=f},
aFR:function aFR(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dUp:function dUp(d,e){this.a=d
this.b=e},
dUa:function dUa(d,e){this.a=d
this.b=e},
dUd:function dUd(d,e,f){this.a=d
this.b=e
this.c=f},
dUc:function dUc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUb:function dUb(d,e){this.a=d
this.b=e},
dUe:function dUe(d,e){this.a=d
this.b=e},
dU8:function dU8(){},
dU9:function dU9(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dU7:function dU7(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dTT:function dTT(d){this.a=d},
dTU:function dTU(d,e,f){this.a=d
this.b=e
this.c=f},
dTV:function dTV(d,e){this.a=d
this.b=e},
dTS:function dTS(d){this.a=d},
dU_:function dU_(d,e){this.a=d
this.b=e},
dTR:function dTR(d){this.a=d},
dU0:function dU0(d,e,f){this.a=d
this.b=e
this.c=f},
dU1:function dU1(d,e,f){this.a=d
this.b=e
this.c=f},
dTQ:function dTQ(d,e){this.a=d
this.b=e},
dU2:function dU2(d,e,f){this.a=d
this.b=e
this.c=f},
dTP:function dTP(d,e){this.a=d
this.b=e},
dU3:function dU3(d,e){this.a=d
this.b=e},
dTO:function dTO(d){this.a=d},
dU4:function dU4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTM:function dTM(){},
dTG:function dTG(d){this.a=d},
dTH:function dTH(d){this.a=d},
dTN:function dTN(d,e){this.a=d
this.b=e},
dU5:function dU5(d,e){this.a=d
this.b=e},
dTL:function dTL(d){this.a=d},
dU6:function dU6(d){this.a=d},
dTK:function dTK(){},
dTW:function dTW(d,e){this.a=d
this.b=e},
dTJ:function dTJ(d){this.a=d},
dTX:function dTX(d,e,f){this.a=d
this.b=e
this.c=f},
dTI:function dTI(d,e){this.a=d
this.b=e},
dTF:function dTF(d,e){this.a=d
this.b=e},
dTY:function dTY(d){this.a=d},
dTZ:function dTZ(d,e,f){this.a=d
this.b=e
this.c=f},
dUs:function dUs(){},
dUt:function dUt(d,e){this.a=d
this.b=e},
dUq:function dUq(d){this.a=d},
dUr:function dUr(d){this.a=d},
dUm:function dUm(d,e){this.a=d
this.b=e},
dUn:function dUn(d){this.a=d},
dUf:function dUf(d,e,f){this.a=d
this.b=e
this.c=f},
dUg:function dUg(d,e,f){this.a=d
this.b=e
this.c=f},
dUh:function dUh(d,e,f){this.a=d
this.b=e
this.c=f},
dUi:function dUi(d,e,f){this.a=d
this.b=e
this.c=f},
dUj:function dUj(d,e,f){this.a=d
this.b=e
this.c=f},
dUk:function dUk(d,e,f){this.a=d
this.b=e
this.c=f},
dUl:function dUl(d,e,f){this.a=d
this.b=e
this.c=f},
dUu:function dUu(){},
dUv:function dUv(){},
dUw:function dUw(){},
dUx:function dUx(d){this.a=d},
dUo:function dUo(d,e){this.a=d
this.b=e},
hMv(d){return B.d.dr(D.a6g,new C.fPX(d),new C.fPY())},
v6:function v6(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fPX:function fPX(d){this.a=d},
fPY:function fPY(){},
an2:function an2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aY2:function aY2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
UA:function UA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bip:function bip(){this.d=$
this.c=this.a=null},
djs:function djs(d,e){this.a=d
this.b=e},
djq:function djq(d,e){this.a=d
this.b=e},
djr:function djr(){},
djt:function djt(d,e){this.a=d
this.b=e},
hwc(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.be(J.k(u==null?"":u))
return new C.nJ(t,w,v,u==null?new A.W(Date.now(),0,!1):u)},
M2(d,e){return C.iv9(d,e)},
iv9(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$M2=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aB(),$async$M2)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aV(J.t(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.V.aP(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.cO(p,x.f)
o=A.cw(o,new C.fSv(),o.$ti.k("M.E"),x.B)
n=A.a3(o).k("X<M.E>")
o=A.B(new A.X(o,new C.fSw(),n),n.k("M.E"))
B.d.b_(o,new C.fSx())
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
return A.i($async$M2,v)},
BI(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$BI=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aB(),$async$BI)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b8(f,new C.h68(),x.a)
r=A.B(r,r.$ti.k("aj.E"))
w=4
return A.b(t.aB("String","ngmy_family_book_v1_"+s+"_"+e,B.V.au(r,null)),$async$BI)
case 4:case 1:return A.h(u,v)}})
return A.i($async$BI,v)},
aU6(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aU6=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.M2(d,e),$async$aU6)
case 2:u=h
t=J.cJ(u)
s=t.bl(u,new C.heO(f))
if(s===-1)t.ce(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.BI(d,e,u),$async$aU6)
case 3:return A.h(null,v)}})
return A.i($async$aU6,v)},
bGc(d,e,f){var w=0,v=A.j(x.H),u
var $async$bGc=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.M2(d,e),$async$bGc)
case 2:u=h
J.ng(u,new C.fP2(f))
w=3
return A.b(C.BI(d,e,u),$async$bGc)
case 3:return A.h(null,v)}})
return A.i($async$bGc,v)},
bGs(d,e){return C.iv8(d,e)},
iv8(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bGs=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bGs)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aV(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.PM
w=1
break}p=B.V.aP(0,q,null)
if(x.f.b(p)){o=A.a0(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aJ(o.h(0,"emblem"))
k=k==null?null:B.i.M(k)
if(k==null)k=0
if(D.EB.am(0,o.h(0,"foil")))j=A.cU(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.i.D(i==null?25:i,18,36)
h=B.d.q(D.a7Y,o.h(0,"position"))?A.cU(o.h(0,"position")):"middle"
g=B.d.q(D.a7h,o.h(0,"frame"))?A.cU(o.h(0,"frame")):"double"
f=B.d.q(D.a7d,o.h(0,"texture"))?A.cU(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.dcE,o.h(0,"header"))?A.cU(o.h(0,"header")):"classic"
o=new C.IH(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.PM
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.PM
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bGs,v)},
Td(d,e,f){return C.iDT(d,e,f)},
iDT(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Td=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aB(),$async$Td)
case 7:r=h
w=8
return A.b(r.aB("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.V.au(f.ak(),null)),$async$Td)
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
return A.i($async$Td,v)},
SE(d,e){return C.iva(d,e)},
iva(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$SE=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aB(),$async$SE)
case 7:r=g
q=r.ps("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.M2(d,e),$async$SE)
case 8:if(!j.cK(g)){n=B.a.i(d.toLowerCase())
m=J.lF(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$SE)
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
return A.i($async$SE,v)},
ain(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ain=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SE(d,e),$async$ain)
case 3:s=g
r=J.a2(s)
if(r.gJ(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gJ(s):"main"
r.I(s,t)
w=5
return A.b(A.aB(),$async$ain)
case 5:w=4
return A.b(g.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ain)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ain,v)},
a4H(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a4H=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.SE(d,e),$async$a4H)
case 2:s=h
J.fS(s,f)
w=3
return A.b(A.aB(),$async$a4H)
case 3:u=h
w=4
return A.b(u.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a4H)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.X(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4H)
case 5:w=6
return A.b(u.X(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4H)
case 6:return A.h(null,v)}})
return A.i($async$a4H,v)},
nJ:function nJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fSv:function fSv(){},
fSw:function fSw(){},
fSx:function fSx(){},
h68:function h68(){},
heO:function heO(d){this.a=d},
fP2:function fP2(d){this.a=d},
IH:function IH(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bTS:function bTS(d){this.a=d},
iEc(d,e,f,g,h,i,j){return A.a7(d,!1).c9(A.e6(new C.h6J(j,i,f,e,h,g),!0,null,x.H))},
SA(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$SA=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SE(h,g),$async$SA)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.L(x.q).f.T(D.aWr)
u=!1
w=1
break}w=4
return A.b(C.hR7(d,f,e),$async$SA)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ain(h,g),$async$SA)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nJ(""+(q+n),l,B.a.i(m.b),new A.W(Date.now(),0,!1)))}w=6
return A.b(C.BI(h,r,p),$async$SA)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Td(h,r,new C.IH("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$SA)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$SA,v)},
h6J:function h6J(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a0i:function a0i(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aCP:function aCP(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dk7:function dk7(d){this.a=d},
dk6:function dk6(d,e){this.a=d
this.b=e},
djW:function djW(d,e){this.a=d
this.b=e},
djT:function djT(d,e){this.a=d
this.b=e},
dju:function dju(d){this.a=d},
djv:function djv(d,e){this.a=d
this.b=e},
djX:function djX(d){this.a=d},
djD:function djD(d){this.a=d},
djB:function djB(d){this.a=d},
djC:function djC(d){this.a=d},
djE:function djE(d){this.a=d},
djU:function djU(d){this.a=d},
djV:function djV(){},
djz:function djz(d){this.a=d},
djA:function djA(d,e){this.a=d
this.b=e},
djF:function djF(d){this.a=d},
djG:function djG(d,e){this.a=d
this.b=e},
dk5:function dk5(d){this.a=d},
dk4:function dk4(d,e){this.a=d
this.b=e},
dk3:function dk3(d){this.a=d},
djQ:function djQ(d){this.a=d},
djP:function djP(d){this.a=d},
djR:function djR(d){this.a=d},
djw:function djw(d,e){this.a=d
this.b=e},
djS:function djS(d,e){this.a=d
this.b=e},
djJ:function djJ(d){this.a=d},
djK:function djK(d){this.a=d},
djI:function djI(){},
djL:function djL(d){this.a=d},
djM:function djM(d){this.a=d},
djN:function djN(d,e){this.a=d
this.b=e},
djO:function djO(d,e,f){this.a=d
this.b=e
this.c=f},
djH:function djH(d,e){this.a=d
this.b=e},
djZ:function djZ(d){this.a=d},
djY:function djY(){},
dk_:function dk_(d){this.a=d},
dk0:function dk0(d){this.a=d},
dk1:function dk1(d){this.a=d},
dk2:function dk2(d,e){this.a=d
this.b=e},
djx:function djx(d){this.a=d},
djy:function djy(d){this.a=d},
a0m:function a0m(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
biO:function biO(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dlU:function dlU(d){this.a=d},
dlV:function dlV(d){this.a=d},
dlT:function dlT(d){this.a=d},
dlW:function dlW(d){this.a=d},
dlS:function dlS(d){this.a=d},
dlX:function dlX(d){this.a=d},
dlR:function dlR(d){this.a=d},
dlY:function dlY(d,e){this.a=d
this.b=e},
dlQ:function dlQ(d,e){this.a=d
this.b=e},
dlZ:function dlZ(d,e){this.a=d
this.b=e},
a0k:function a0k(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
agO:function agO(d,e,f){this.a=d
this.b=e
this.c=f},
aCS:function aCS(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dkm:function dkm(d,e){this.a=d
this.b=e},
dkl:function dkl(d,e){this.a=d
this.b=e},
dkq:function dkq(d){this.a=d},
dkp:function dkp(d,e){this.a=d
this.b=e},
dkn:function dkn(d){this.a=d},
dko:function dko(d){this.a=d},
dkr:function dkr(d){this.a=d},
dks:function dks(d){this.a=d},
dkk:function dkk(d,e){this.a=d
this.b=e},
dkj:function dkj(d,e){this.a=d
this.b=e},
L4:function L4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_x:function a_x(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cSb:function cSb(d){this.a=d},
cSc:function cSc(){},
cSd:function cSd(d){this.a=d},
bfZ:function bfZ(d,e,f){this.b=d
this.c=e
this.a=f},
bfQ:function bfQ(d,e){this.b=d
this.a=e},
v7:function v7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_T:function a_T(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfX:function bfX(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
dbc:function dbc(d,e,f){this.a=d
this.b=e
this.c=f},
dbb:function dbb(d,e){this.a=d
this.b=e},
dbB:function dbB(d){this.a=d},
dbo:function dbo(){},
dbC:function dbC(d){this.a=d},
dbn:function dbn(){},
dbD:function dbD(d,e){this.a=d
this.b=e},
dbm:function dbm(d,e){this.a=d
this.b=e},
dbE:function dbE(d,e){this.a=d
this.b=e},
dbl:function dbl(d,e){this.a=d
this.b=e},
dbF:function dbF(d){this.a=d},
dbk:function dbk(){},
dbG:function dbG(d,e){this.a=d
this.b=e},
dbj:function dbj(d,e){this.a=d
this.b=e},
dbH:function dbH(d){this.a=d},
dbw:function dbw(d,e){this.a=d
this.b=e},
dbI:function dbI(d){this.a=d},
dbJ:function dbJ(d){this.a=d},
dbL:function dbL(d){this.a=d},
dbM:function dbM(d){this.a=d},
dbv:function dbv(d,e){this.a=d
this.b=e},
dbN:function dbN(d,e){this.a=d
this.b=e},
aJY:function aJY(d){this.a=d},
blm:function blm(d){this.a=d},
be5:function be5(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
an3:function an3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a2z:function a2z(d,e){this.a=d
this.b=e},
an4:function an4(d,e,f,g,h,i){var _=this
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
_.bv$=h
_.ab$=i
_.c=_.a=null},
bU1:function bU1(d){this.a=d},
bTW:function bTW(d){this.a=d},
bTV:function bTV(d,e){this.a=d
this.b=e},
bU4:function bU4(d){this.a=d},
bTX:function bTX(d){this.a=d},
bTY:function bTY(d){this.a=d},
bU0:function bU0(d){this.a=d},
bU_:function bU_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bU2:function bU2(d,e){this.a=d
this.b=e},
bU3:function bU3(){},
bTZ:function bTZ(d){this.a=d},
bTT:function bTT(d,e){this.a=d
this.b=e},
bTU:function bTU(d){this.a=d},
bqZ:function bqZ(d,e){this.b=d
this.a=e},
aCQ:function aCQ(){},
iS(d,e){var w
$.T()
w=A.L()
w.b=B.ac
w.c=e
w.r=d.gp(0)
w.d=B.bG
w.e=B.dP
return w},
bFK(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bs(j.save())
j.translate(e.a,e.b)
d.nK(0,a0?-f:f,f)
w=A.bZ(B.hE,8,36)
v=B.v.j(0.3)
u=$.T()
t=A.L()
t.r=v.gp(0)
d.c1(w,t)
w=a1===D.Yr
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ap(w,B.v,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.eF0,new A.r(-4+v,-2),C.iS(q,5))
d.ah(D.eCE,new A.r(4-v,-2),C.iS(q,5))}else{t=A.bZ(B.Ku,14,40)
p=A.L()
p.r=v.gp(0)
d.c1(t,p)}v=u.r
u=x.v
o=new A.aH(v,B.ak,k,k,A.a([],u))
t=-64-r
o.E(new A.aZ(-11,t))
o.E(new A.ck(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.ck(15,-40,11,t))
o.E(new A.bA())
t=A.L()
t.r=w.gp(0)
d.af(o,t)
u=new A.aH(v,B.ak,k,k,A.a([],u))
u.E(new A.aZ(-12,-50-r))
v=-46-r
u.E(new A.aq(12,v))
u.E(new A.aq(12.5,-42-r))
u.E(new A.aq(-12.5,v))
u.E(new A.bA())
v=A.L()
v.r=h.c.gp(0)
d.af(u,v)
switch(a1.a){case 2:w=Math.sin(g*3.4)
break
case 3:w=Math.sin(g*7.5)
break
default:w=s
break}if(a1===D.b3J){n=-52+w*14
d.ah(new A.r(10,n-22),new A.r(10,n+44),C.iS(F.GG,3.4))
d.ah(D.eFh,new A.r(9,n),C.iS(q,4))
d.ah(D.eD4,new A.r(10,n),C.iS(q,4))}else if(a1===D.b3K){d.ah(D.eE7,new A.r(-8,-26-Math.max(0,w)*6),C.iS(q,4))
d.ah(D.eB6,new A.r(8,-26-Math.max(0,-w)*6),C.iS(q,4))}else{w=s*3
v=-38-r
d.ah(D.eEb,new A.r(-12-w,v),C.iS(q,4))
d.ah(D.aNU,new A.r(12+w,v),C.iS(q,4))}w=A.L()
w.r=q.gp(0)
d.aE(D.fqG,w)
m=new A.r(0,-77-r)
w=A.bZ(m,22,19)
v=A.L()
v.r=q.gp(0)
d.c1(w,v)
w=h.y
if(w!=null){v=A.bZ(m.a7(0,K.w3),15,24)
u=A.L()
u.r=w.gp(0)
d.c1(v,u)
u=m.a7(0,D.eB0)
v=A.L()
v.r=w.gp(0)
d.O(u,4,v)}else{w=A.bZ(m.a7(0,B.ud),23,20)
v=h.d
u=A.L()
u.r=v.gp(0)
d.cQ(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a7(0,D.eFf),m.a7(0,D.eE5),C.iS(v,2.2))
d.ah(m.a7(0,D.eD3),m.a7(0,D.eAY),C.iS(v,2.2))}if(w===4){w=m.a7(0,D.eFj)
u=A.L()
u.r=v.gp(0)
d.O(w,6,u)
u=m.a7(0,D.eD5)
w=A.L()
w.r=v.gp(0)
d.O(u,6,w)}}w=m.a7(0,D.eDV)
v=A.L()
v.r=B.iu.gp(0)
d.O(w,0.9,v)
v=m.a7(0,D.eDK)
w=A.L()
w.r=B.iu.gp(0)
d.O(v,0.9,w)
if(i){l=m.a7(0,K.aa6)
w=A.bZ(l,21,22)
v=A.L()
v.r=D.lR.gp(0)
d.c1(w,v)
v=A.bZ(l.a7(0,K.aNR),5,12)
w=A.L()
w.r=D.bj8.gp(0)
d.c1(v,w)
d.ah(l.a7(0,D.eFb),l.a7(0,K.aOe),C.iS(B.d_,1.4))
d.ah(D.aNU,new A.r(15,-88-r),C.iS(q,3.6))}j.restore()},
hL6(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.bs(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bV(0,f)
v=A.bZ(B.dS,18,96)
u=B.v.j(0.28)
$.T()
t=A.L()
t.r=u.gp(0)
d.c1(v,t)
t=A.bZ(B.dS,11,70)
v=B.v.j(0.2)
u=A.L()
u.r=v.gp(0)
d.c1(t,u)
d.lz(D.aU7,A.L())
C.ijz(d,g,h,i,j)
s=(k==null?D.aab:k).a-w>=0?1:-1
w=A.L()
w.a=B.MR
w.san(A.jP(new A.r(s*70,-60),new A.r(-s*70,-60),A.a([D.akd.j(0.5),D.akd.j(0.12),D.bqO.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aE(D.aU7,w)
r.restore()
r.restore()},
ijz(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ap(d,B.v,0.28)
a0.toString
w=A.ap(d,B.c,0.16)
w.toString
v=a2.b
u=A.ap(v,B.v,0.32)
u.toString
t=Math.sin(a4*1.9+a5)*0.8
s=a2.w
r=s?1.06:1
q=s?0.86:1
s=A.bw(D.fqH,B.ui)
p=$.T()
o=A.L()
o.r=u.gp(0)
a1.aq(s,o)
o=A.bw(D.fqC,B.hT)
s=A.ap(v,B.v,0.18)
s.toString
n=A.L()
n.r=s.gp(0)
a1.aq(o,n)
n=A.bw(D.fqQ,B.hT)
o=A.ap(v,B.v,0.1)
o.toString
s=A.L()
s.r=o.gp(0)
a1.aq(n,s)
s=A.L()
s.r=d.gp(0)
a1.c1(D.fqJ,s)
s=A.L()
s.r=d.gp(0)
a1.c1(D.fps,s)
s=a1.c
J.bs(s.save())
s.translate(a3.w,0)
J.bs(s.save())
a1.nK(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aH(p.r,B.ak,e,e,A.a([],n))
p=-m
k=p+2
l.E(new A.aZ(k,-58))
l.E(new A.ck(p-3,-62,p,-52))
l.E(new A.aq(p+4,-14))
l.E(new A.aq(m-4,-14))
l.E(new A.aq(m,-52))
l.E(new A.ck(m+3,-62,m-2,-58))
l.E(new A.ck(0,-70,k,-58))
l.E(new A.bA())
k=A.L()
k.r=v.gp(0)
a1.af(l,k)
J.bs(s.save())
a1.mz(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.dk5[j]
i=new A.ar(B.U,B.R,B.X,B.Y,B.W)
i.b=B.ac
i.c=5
i.r=k.gp(0)
i.d=B.bG
i.e=B.dP
a1.ah(new A.r(-34+u,-64),new A.r(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.F(B.o.ao(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.T()
f=new A.ar(B.U,B.R,B.X,B.Y,B.W)
f.r=i.gp(0)
a1.O(new A.r(g,h),3.6,f)
f=new A.ar(B.U,B.R,B.X,B.Y,B.W)
f.r=u.gp(0)
a1.O(new A.r(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ar(B.U,B.R,B.X,B.Y,B.W)
i.b=B.ac
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dP
a1.ah(new A.r(g,-64),new A.r(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ar(B.U,B.R,B.X,B.Y,B.W)
i.b=B.ac
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dP
a1.ah(new A.r(-30,h),new A.r(30,h),i)}break
default:a1.ah(D.eEE,D.eBM,C.iS(a2.c.j(0.9),3))}a1.ah(D.eFc,D.eEd,C.iS(B.v.j(0.18),1.6))
a1.ah(D.eB5,K.aNW,C.iS(B.v.j(0.18),1.6))
u=B.v.j(0.12)
k=$.T()
i=A.L()
i.r=u.gp(0)
a1.aE(D.fpo,i)
s.restore()
i=A.L()
i.r=a0.gp(0)
a1.aE(D.fpC,i)
n=new A.aH(k.r,B.ak,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.ck(0,-57,9,-66))
n.E(new A.ck(0,-60,-9,-66))
k=A.L()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cQ(D.fpL,0.1,2.941592653589793,!1,C.iS(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.aag
n=25*q
k=23*q
i=9*q
C.hGU(a1,new A.r(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.F2:o
C.hGU(a1,new A.r(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.eCw,D.eCs,C.iS(D.alc,4))
a1.ah(D.eCu,D.eCq,C.iS(D.H6.j(0.7),1.4))
u=A.L()
u.r=B.d_.gp(0)
a1.O(D.eCt,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.bs(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.js(0,a3.f)
a1.bV(0,r)
C.ijv(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hGU(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aI(0,e),r=s.gcL(),q=r===0?B.hE:s.f_(0,r),p=B.i.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.r(o,w)
if(o*i<0)v=new A.r(-o,-w)
u=e.a7(0,q.aO(0,n)).a7(0,v.aO(0,m))
t=e.a7(0,q.aO(0,p))
d.ah(e,u,C.iS(j,l))
o=A.ap(j,B.v,0.2)
o.toString
d.ah(e,u,C.iS(o,l*0.35))
d.ah(u,t,C.iS(k,l*0.78))
o=A.ap(k,B.v,0.22)
o.toString
d.ah(u,t,C.iS(o,l*0.22))
$.T()
o=A.L()
o.r=j.gp(0)
d.O(u,l*0.55,o)
o=A.bZ(t,l*1.15,l)
w=A.L()
w.r=k.gp(0)
d.c1(o,w)
w=-l
w=t.a7(0,new A.r(i*w*0.45,w*0.1))
o=A.L()
o.r=k.gp(0)
d.O(w,l*0.28,o)},
ijv(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bZ(B.w2,40,38)
$.T()
v=A.L()
v.r=c0.gp(0)
c2.c1(w,v)}if(c1===4){$.T()
w=A.L()
w.r=c0.gp(0)
c2.O(D.eEl,9.5,w)
w=A.L()
w.r=c0.gp(0)
c2.O(D.eBm,9.5,w)}w=A.bZ(D.eFy,10,6)
v=$.T()
u=A.L()
u.r=c8.gp(0)
c2.c1(w,u)
u=A.bZ(D.eDS,10,6)
w=A.L()
w.r=c8.gp(0)
c2.c1(u,w)
v=v.r
w=x.v
t=new A.aH(v,B.ak,b9,b9,A.a([],w))
t.E(new A.aZ(0,-20))
t.E(new A.i4(13,-20,17,-9,16,2))
t.E(new A.i4(15,13,8,20,0,20))
t.E(new A.i4(-8,20,-15,13,-16,2))
t.E(new A.i4(-17,-9,-13,-20,0,-20))
t.E(new A.bA())
u=A.L()
u.san(A.wu(D.eF2,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iS(c8.j(0.5),0.8)
c2.cQ(D.fqS,3.455751918948773,2.5132741228718345,!1,s)
c2.cQ(D.fpv,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.eEi,K.aOn,s)
c2.ah(D.eBi,D.eB9,s)
c2.cQ(D.fpK,2.2,1.4,!1,s)
c2.cQ(D.fpt,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ar(B.U,B.R,B.X,B.Y,B.W)
n.r=c0.gp(0)
c2.O(new A.r(p*14.5,-3+o*17.5),4.3,n)}p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fpZ,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aH(v,B.ak,b9,b9,A.a([],w))
p.E(new A.aZ(-15,-11))
p.E(new A.ck(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.ck(0,-12,-13,-6))
p.E(new A.bA())
o=A.L()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.eE9,D.eBa,C.iS(G.nH,1.4))
o=A.L()
o.r=c0.gp(0)
c2.O(D.eEo,3,o)
o=A.L()
o.r=c0.gp(0)
c2.O(D.eBn,3,o)
o=new A.aH(v,B.ak,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.ck(-12,22,0,26))
o.E(new A.ck(12,22,13,6))
o.E(new A.ck(8,13,0,12))
o.E(new A.ck(-8,13,-13,6))
o.E(new A.bA())
p=A.L()
p.r=B.hX.gp(0)
c2.af(o,p)
p=new A.aH(v,B.ak,b9,b9,A.a([],w))
p.E(new A.aZ(-7,8))
p.E(new A.ck(0,6,7,8))
p.E(new A.ck(0,10.5,-7,8))
o=A.L()
o.r=B.bO.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aH(v,B.ak,b9,b9,A.a([],w))
p.E(new A.aZ(-17,-4))
p.E(new A.ck(-20,-27,0,-29))
p.E(new A.ck(20,-27,17,-4))
p.E(new A.ck(0,-14,-17,-4))
p.E(new A.bA())
o=A.L()
o.r=m.gp(0)
c2.af(p,o)
o=A.ap(m,B.v,0.3)
o.toString
c2.cQ(D.fq5,3.4,2.5,!1,C.iS(o,1.4))
o=A.ap(m,B.c,0.3)
o.toString
c2.cQ(D.fpS,3.6,2.2,!1,C.iS(o,1.2))
o=new A.aH(v,B.ak,b9,b9,A.a([],w))
o.E(new A.aZ(11,-22))
o.E(new A.ck(27,-34,25,-19))
o.E(new A.ck(18,-18,11,-22))
p=A.ap(m,B.c,0.1)
p.toString
n=A.L()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aH(v,B.ak,b9,b9,A.a([],w))
n.E(new A.aZ(11,-22))
n.E(new A.ck(24,-12,27,-26))
n.E(new A.ck(18,-22,11,-22))
o=A.ap(m,B.v,0.2)
o.toString
p=A.L()
p.r=o.gp(0)
c2.af(n,p)
p=A.L()
p.r=c3.c.gp(0)
c2.O(D.eBb,3,p)
break
case 3:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fq2,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ap(c0,B.c,0.18)
p.toString
o=new A.ar(B.U,B.R,B.X,B.Y,B.W)
o.b=B.ac
o.c=0.9
o.r=p.gp(0)
o.d=B.bG
o.e=B.dP
c2.ah(new A.r(r*3.6,-19+Math.abs(r)*0.8),new A.r(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=I.aEB[l]
o=new A.ar(B.U,B.R,B.X,B.Y,B.W)
o.b=B.ac
o.c=4.5
o.r=c0.gp(0)
o.d=B.bG
o.e=B.dP
c2.ah(new A.r(k,0),new A.r(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ar(B.U,B.R,B.X,B.Y,B.W)
o.r=p.gp(0)
c2.O(new A.r(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fq1,3.204424506661589,3.015928947446201,!0,p)
p=A.ap(c0,B.c,0.25)
p.toString
c2.ah(K.aa6,K.aa5,C.iS(p,1))
break
default:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fpw,3.267256359733385,2.8902652413026098,!0,p)}i=B.i.D(c4.b,0,1)*0.4+0.1
p=A.bZ(D.eFl,5,8)
o=D.ahr.j(i)
n=A.L()
n.r=o.gp(0)
c2.c1(p,n)
n=A.bZ(D.eE2,5,8)
p=D.ahr.j(i)
o=A.L()
o.r=p.gp(0)
c2.c1(n,o)
h=c4.e*2.4
o=new A.aH(v,B.ak,b9,b9,A.a([],w))
o.E(new A.aZ(h-0.6,-2))
o.E(new A.ck(h-3.4,6,h-2.6,7.4))
o.E(new A.ck(h,8.8,h+2.6,7.4))
c2.af(o,C.iS(c8.j(0.75),1.1))
o=A.L()
o.r=c8.gp(0)
c2.O(new A.r(h-1.5,7.2),0.7,o)
o=A.L()
o.r=c8.gp(0)
c2.O(new A.r(h+1.5,7.2),0.7,o)
g=B.i.F(c5*0.33+c6*0.37,1)>0.965?1:0
p=c4.d
o=c4.c>0.8?1.25:1
f=(1-g)*(1-p*0.6)*o
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=F.hq[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.bZ(new A.r(a5,-3),a3,7)
a6=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a6.r=B.c.j(0.96).gp(0)
c2.c1(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.bs(d.save())
a6=A.a([],w)
a4=new A.aH(v,B.ak,b9,b9,a6)
a6.push(new A.jI(A.bZ(new A.r(a5,-3),a3,7)))
a4.ac()
a3=a4.e
if(a3==null)a3=a4.e=new A.Et(a4.glc().a.snapshot())
d.clipPath(a3.a,$.mR(),!0)
a3=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a3.r=D.bn3.gp(0)
c2.O(new A.r(a7,a8),2.1,a3)
a3=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a3.r=B.v.gp(0)
c2.O(new A.r(a7,a8),1.05,a3)
a3=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a3.r=B.c.gp(0)
c2.O(new A.r(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.a_D:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a9.b=B.ac
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bG
a9.e=B.dP
a3=p?0.8:0
c2.cQ(A.bZ(new A.r(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.dT
else{b1=A.ap(c0,B.v,0.2)
b1.toString}b2=new A.ar(B.U,B.R,B.X,B.Y,B.W)
b2.b=B.ac
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bG
b2.e=B.dP
c2.ah(new A.r(a5-a4,b0-a6+0.4),new A.r(a5+a4,b0-0.6-a3),b2)}b3=B.i.D(c4.a,0,1)
if(o)b4=D.bxA
else{u=A.ap(c8,D.bqQ,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.i.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aH(v,B.ak,b9,b9,A.a([],w))
w=-b6
b8.E(new A.aZ(w,11.5))
b8.E(new A.ck(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.ck(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.bA())
v=A.L()
v.r=D.bq7.gp(0)
c2.af(b8,v)
J.bs(d.save())
c2.mz(0,b8)
v=B.c.j(0.95)
u=A.L()
u.r=v.gp(0)
c2.aE(new A.a5(w,11,w+b6*2,13.2),u)
u=A.bZ(new A.r(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.L()
w.r=D.bxF.gp(0)
c2.c1(u,w)
d.restore()
c2.af(b8,C.iS(b4,1.1))}else{u=new A.aH(v,B.ak,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.aZ(-5.2,p))
u.E(new A.ck(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iS(b4,1.5))
if(b5>0.6){w=new A.aH(v,B.ak,b9,b9,A.a([],w))
w.E(new A.aZ(-4.6,11.8))
w.E(new A.ck(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.ck(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.L()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cQ(D.fpJ,-1.2,2.2,!1,C.iS(c8.j(0.5),0.8))
c2.cQ(D.fpy,2.141592653589793,2.2,!1,C.iS(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.L()
w.r=c1.gp(0)
c2.O(D.eDL,1.7,w)
w=A.L()
w.r=c1.gp(0)
c2.O(D.eDI,1.7,w)}},
ip1(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.T(),f=new A.oW(new A.or()),e=A.v2(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.L()
a2.san(A.jP(B.J,new A.r(0,a0*0.46),D.dgA,D.d79,B.x,h))
e.aE(new A.a5(0,0,0+d,0+a0),a2)
a2=e.c
J.bs(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bV(0,a1)
w=new A.e3()
w.cT(8)
for(v=0;v<120;++v){d=w.ai()
a0=w.ai()
u=w.ai()
t=new A.ar(B.U,B.R,B.X,B.Y,B.W)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.O(new A.r(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.bs(a2.save())
a2.translate(200,120)
e.js(0,-0.5)
d=A.L()
a0=x.O
d.san(A.wu(B.J,230,A.a([D.blI,B.L],a0),h,B.x,h,h,0))
e.c1(D.fqd,d)
a2.restore()
d=A.L()
d.san(A.wu(D.aae,58,A.a([D.bp8,B.L],a0),h,B.x,h,h,0))
e.O(D.aae,58,d)
d=A.L()
d.r=D.bkq.gp(0)
e.O(D.aae,24,d)
d=A.L()
d.r=D.a03.gp(0)
e.O(D.eC5,5,d)
d=A.L()
d.r=D.a03.gp(0)
e.O(D.eC9,3.4,d)
d=A.L()
d.r=D.a03.gp(0)
e.O(D.eC8,2.4,d)
for(d=x.v,s=0;s<3;++s,g=u){u=A.a([],d)
r=new A.aH(g.r,B.ak,h,h,u)
u.push(new A.aZ(-60,420))
r.ac()
for(g=372+s*12,t=60+s*20,q=s*2,p=14-s*3,o=-60;o<=510;o+=8){n=new A.aq(o,g+Math.sin(o/t+q)*p+Math.sin(o/23+s)*3)
u.push(n)
m=r.f
if(m!=null)n.aj(m)
r.ac()}g=new A.aq(510,470)
u.push(g)
t=r.f
if(t!=null)g.aj(t)
r.ac()
g=new A.aq(-60,470)
u.push(g)
t=r.f
if(t!=null)g.aj(t)
r.ac()
g=new A.bA()
u.push(g)
u=r.f
if(u!=null)g.aj(u)
r.ac()
g=[D.biX,D.bkZ,D.br9][s]
u=$.T()
t=new A.ar(B.U,B.R,B.X,B.Y,B.W)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cB8[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ar(B.U,B.R,B.X,B.Y,B.W)
u.b=B.ac
u.c=2.4
u.r=D.a0p.gp(0)
u.d=B.bG
u.e=B.dP
e.ah(new A.r(o,k),new A.r(g,d),u)
g=A.bZ(new A.r(g,k-27),11,46)
u=new A.ar(B.U,B.R,B.X,B.Y,B.W)
u.r=D.a0p.gp(0)
e.c1(g,u)
d=A.bZ(new A.r(o-12,d),8,24)
u=new A.ar(B.U,B.R,B.X,B.Y,B.W)
u.r=D.a0p.gp(0)
e.c1(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ar(B.U,B.R,B.X,B.Y,B.W)
u.r=D.bkt.j(0.8).gp(0)
e.O(new A.r(20+v*52+g*7,400+d*5),1.2,u)}g=A.L()
g.san(A.jP(D.eAF,D.eAI,D.d9n,B.xH,B.x,h))
e.aE(new A.a5(-200,412,650,1300),g)
j=new A.e3()
j.cT(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.bZ(new A.r(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.h9()?B.c:B.v
d=new A.ar(B.U,B.R,B.X,B.Y,B.W)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.c1(u,d)}J.bs(a2.save())
a2.translate(225,590)
e.nK(0,1,0.34)
g=A.L()
g.san(A.wu(B.J,250,A.a([D.bs9,D.blj,D.bu6],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.O(B.J,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ap(D.ajU,D.bjY,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.T()
a0=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a0.b=B.ac
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bG
a0.e=B.dP
e.ah(new A.r(o+i*2,k),new A.r(o+i*5,g+Math.abs(i)*3),a0)}}C.ihK(e)
for(l=0;l<3;++l)C.ikZ(e,D.aCo[l])
C.ikO(e,D.eC_)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.T()
a0=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a0.b=B.ac
a0.c=2.4
a0.r=D.a0l.gp(0)
a0.d=B.bG
a0.e=B.dP
e.ah(new A.r(o,452+g),new A.r(o+1,436+d),a0)}e.ah(D.eB7,D.eBq,C.iS(D.bkH,1.6))
a2.restore()
return f.n_()},
ihK(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.T().r,g=x.v,f=new A.aH(h,B.ak,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.i4(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.i4(416,382,432,422,428,462))
f.E(new A.bA())
w=A.L()
w.san(A.jP(new A.r(354,0),new A.r(430,0),D.dGc,B.m6,B.x,i))
d.af(f,w)
v=new A.e3()
v.cT(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.v.j(0.18)
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.b=B.ac
p.c=1.1
p.r=q.gp(0)
p.d=B.bG
p.e=B.dP
d.ah(new A.r(t,s),new A.r(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.dlD[o]
w=n.a
r=392+w*12
q=-n.b
p=r+w*52
m=336+(q*46-8)
w=p+w*42
q=m+(q*34+4)
l=A.a([],g)
k=new A.aH(h,B.ak,i,i,l)
l.push(new A.aZ(r,336))
k.ac()
r=new A.ck(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.aj(p)
k.ac()
r=new A.ar(B.U,B.R,B.X,B.Y,B.W)
r.b=B.ac
r.c=8
r.r=D.aid.gp(0)
r.d=B.bG
r.e=B.dP
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ar(B.U,B.R,B.X,B.Y,B.W)
l.r=A.ap(D.bkz,D.br7,v.ai()).j(0.92).gp(0)
d.O(new A.r(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ar(B.U,B.R,B.X,B.Y,B.W)
r.b=B.ac
r.c=1.2
r.r=D.a0l.gp(0)
r.d=B.bG
r.e=B.dP
d.ah(new A.r(w,q+8),new A.r(w,q+22),r)
q=A.bZ(new A.r(w,q+28),13,7)
w=new A.ar(B.U,B.R,B.X,B.Y,B.W)
w.r=D.bsw.gp(0)
d.c1(q,w)}},
ikZ(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bZ(new A.r(a5,a6+2),a9,a7*2.8),b1=B.v.j(0.3),b2=$.T(),b3=A.L()
b3.r=b1.gp(0)
b4.c1(b0,b3)
b2=b2.r
b3=x.v
w=new A.aH(b2,B.ak,a4,a4,A.a([],b3))
b0=a5-a7
b1=a6-a8
w.E(new A.aZ(b0,b1))
w.E(new A.aq(b0,a6))
v=a5+a7
w.E(new A.ck(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.bA())
u=A.L()
u.san(A.jP(new A.r(b0,0),new A.r(v,0),D.dlK,B.m6,B.x,a4))
b4.af(w,u)
t=new A.e3()
t.cT(B.o.S(a5*7))
v=b4.c
J.bs(v.save())
b4.mz(0,w)
for(s=0;s<40;++s){r=b0+t.ai()*a7*2
q=b1+t.ai()*a8
u=t.ai()
p=t.ai()
o=B.v.j(0.14)
n=new A.ar(B.U,B.R,B.X,B.Y,B.W)
n.b=B.ac
n.c=1
n.r=o.gp(0)
n.d=B.bG
n.e=B.dP
b4.ah(new A.r(r,q),new A.r(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.ajQ.j(0.75)
n=A.L()
n.r=o.gp(0)
b4.aE(new A.a5(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.i.bc(u);++l){k=m+l*10
j=A.a([],b3)
i=new A.aH(b2,B.ak,a4,a4,j)
j.push(new A.aZ(k,o))
i.ac()
h=new A.aq(k+5,n)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.ac()
h=new A.aq(k+10,o)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.ac()
h=new A.bA()
j.push(h)
j=i.f
if(j!=null)h.aj(j)
i.ac()
j=new A.ar(B.U,B.R,B.X,B.Y,B.W)
j.r=D.lR.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aH(b2,B.ak,a4,a4,u)
b2=a6-8
f.E(new A.aZ(b0,b2))
for(p/=6,l=0;l<=B.i.bc(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.aj(n)
f.ac()}b4.af(f,C.iS(D.ajQ.j(0.7),1.6))
v.restore()
b0=$.T().r
b2=new A.aH(b0,B.ak,a4,a4,A.a([],b3))
u=a7*0.1
p=a5+u
o=a7*0.28
n=p-o
m=a6+1
b2.E(new A.aZ(n,m))
j=a6-a8*0.55
b2.E(new A.aq(n,j))
o=p+o
b2.E(new A.ck(p,a6-a8*0.82,o,j))
b2.E(new A.aq(o,m))
b2.E(new A.bA())
m=A.L()
m.r=D.ak1.gp(0)
b4.af(b2,m)
m=A.L()
m.r=D.ak1.gp(0)
b4.O(new A.r(a5-a7*0.62,a6-a8*0.5),u,m)
m=b5.e
u=b1-m
b2=a7*1.38
o=a5-b2
j=b1+4
p=a5+b2
e=new A.aH(b0,B.ak,a4,a4,A.a([],b3))
e.E(new A.aZ(o,j))
n=b1-m*0.55
e.E(new A.ck(a5-a9,n,a5,u))
e.E(new A.ck(a5+a9,n,p,j))
e.E(new A.ck(a5,b1+a7*0.34,o,j))
e.E(new A.bA())
b1=A.L()
n=a7*1.4
b1.san(A.jP(new A.r(a5-n,0),new A.r(a5+n,0),D.dpt,B.m6,B.x,a4))
b4.af(e,b1)
J.bs(v.save())
b4.mz(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h9()?B.v:D.bk6).j(0.16)
i=new A.ar(B.U,B.R,B.X,B.Y,B.W)
i.b=B.ac
i.c=0.9
i.r=n.gp(0)
i.d=B.bG
i.e=B.dP
b4.ah(new A.r(a5+(p-0.5)*3,u),new A.r(o+a9*d,j+b1*a7*0.3),i)}for(l=1;l<5;++l){a0=u+m*l/4.6
a1=b2*l/4.6
b1=A.a([],b3)
p=new A.aH(b0,B.ak,a4,a4,b1)
n=a0+2
b1.push(new A.aZ(a5-a1,n))
p.ac()
n=new A.ck(a5,a0+7+l*1.5,a5+a1,n)
b1.push(n)
b1=p.f
if(b1!=null)n.aj(b1)
p.ac()
b1=B.v.j(0.22)
n=new A.ar(B.U,B.R,B.X,B.Y,B.W)
n.b=B.ac
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
v=new A.ar(B.U,B.R,B.X,B.Y,B.W)
v.b=B.ac
v.c=1.1
v.r=D.brB.gp(0)
v.d=B.bG
v.e=B.dP
b4.ah(new A.r(a2,a3),new A.r(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aH(b0,B.ak,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bA())
b0=A.L()
b0.r=D.bny.gp(0)
b4.af(a9,b0)},
ikO(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+I.aEy[s]
$.T()
q=new A.ar(B.U,B.R,B.X,B.Y,B.W)
q.b=B.ac
q.c=3
q.r=D.a0l.gp(0)
q.d=B.bG
q.e=B.dP
d.ah(new A.r(r,u),new A.r(r,t),q)}u=A.bZ(e.a7(0,K.aNQ),24,36)
t=$.T()
r=A.L()
r.r=D.bwM.gp(0)
d.c1(u,r)
t=new A.aH(t.r,B.ak,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.aZ(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.ck(w,v-24,r,u))
t.E(new A.bA())
u=A.L()
u.r=D.aiV.gp(0)
d.af(t,u)},
ika(d){switch(B.o.F(d,8)){case 0:return D.b2Z
case 1:return D.b2X
case 2:return D.b2W
case 3:return D.b2V
case 4:return D.b2Y
case 5:return D.b3_
case 6:return D.hRV
default:return D.hRU}},
Tb(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.br_()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.aag:j
w.as=k==null?D.F2:k
C.hL6(d,e,p,C.ika(m),w,s,m,l)},
hMB(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bVG:function bVG(){var _=this
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
tq:function tq(d,e,f,g,h,i,j,k,l,m){var _=this
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
br_:function br_(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
anm:function anm(){this.b=this.a=null},
aY7:function aY7(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bVy:function bVy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVz:function bVz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVA:function bVA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVB:function bVB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVC:function bVC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVD:function bVD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVE:function bVE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVF:function bVF(){},
bVx:function bVx(d){this.a=d},
agX:function agX(d,e){this.a=d
this.b=e},
aeS:function aeS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Nr(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bUh(s)
s.bDu(d)
return s},
Hm(d,e,f,g,h,i,j){var w,v=A.U(g).k("X<1>")
v=A.d5(new A.X(g,new C.fCT(f),v),v.k("M.E"))
w=A.B(v,A.a3(v).k("ci.E"))
B.d.dY(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.u(v,A.cV(w,0,A.dz(3,"count",x.S),A.U(w).c))
B.d.dY(v,d)
return new C.lL(e,v,B.d.cd(v,f),h,i,"tree",j)},
iFQ(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.S(c0,x.cg),c2=new C.heE(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.jt(c4,c0)
t=A.B(c4,A.a3(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.jt(c4,c0)
r=A.B(c4,A.a3(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.jt(c4,c0)
q=A.B(c4,A.a3(c4).k("ci.E"))
for(c4=w.length,v=A.U(t).k("X<1>"),s=v.k("M.E"),p=A.U(w).k("X<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.I)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.d()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.xc)g="father"
else g=h===D.oU?"mother":"parent"
h=B.a.i(i.b)
f=A.B(new A.X(t,new C.heG(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.Hm(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.B(new A.X(w,new C.heH(i,m),p),o)
B.d.dY(d,c6)
c2.$2(b4,new C.lL("True or false: "+h+" is the "+g+" of "+l+".",A6.Tj,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lL("True or false: "+B.a.i(B.d.gG(d).b)+" is the "+g+" of "+l+".",A6.Tj,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.Gw(m)
h=a0.length
if(h!==0){a1=a0[c6.av(h)]
h=B.a.i(a1.b)
f=A.B(new A.X(t,new C.heI(l,a0,c5),v),s)
e=a1.c
if(e===D.xc)e="son"
else e=e===D.oU?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.Hm(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.eB([h+1,h+2,Math.max(0,h-1)],n)
a5.X(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mK(a5,a5.r,f.k("mK<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.v(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.Hm(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gG(a0).b)
f=A.a([],c3)
for(e=A.U(a0),a2=e.k("iQ<1>"),a3=new A.iQ(a0,1,b3,a2),a3.nb(a0,1,b3,e.c),a3=new A.bR(a3,a3.gJ(0),a2.k("bR<aj.E>")),a2=a2.k("aj.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.Hm(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gG(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gG(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.ass(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.B(new A.X(t,new C.heJ(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.Hm(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.d()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.d()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.B(new A.X(t,new C.heK(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.xc
if(e)a2=b7
else a2=f===D.oU?b8:b9
if(e)f=b7
else f=f===D.oU?b8:b9
c2.$2("grand",C.Hm(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aOk(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.av(k)].b)
j=A.B(new A.X(t,new C.heL(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.Hm(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.B(r,c0)
B.d.u(j,D.cU9)
h=l+" was born in "+k
c2.$2("place",C.Hm(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.B(q,c0)
B.d.u(j,D.dau)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.Hm(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.I)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.Hm(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cI(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.jf(b1,b3,b3)
c2.$2("year",C.Hm(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bGo(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.Nr(d),l=new A.e3()
l.cT(f)
w=C.iFQ(m,l,g)
for(v=new A.dr(w,w.r,w.e);v.C();)J.huf(v.d,l)
v=A.a3(w).k("cs<1>")
u=A.B(new A.cs(w,v),v.k("M.E"))
B.d.dY(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aR(u,new C.fQA(n,w))))break
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
if(v<e){v=A.B(D.aBp,x.df)
B.d.dY(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hLd(o,l))}}else if(!g&&v>3){o=C.hLd(D.aBp[l.av(14)],l)
t[t.length-1-l.av(3)]=o}return t},
hLd(d,e){var w=d.b,v=w[d.c]
w=A.B(w,x.N)
B.d.dY(w,e)
return new C.lL(d.a,w,B.d.cd(w,v),d.d,d.e,d.f,d.r)},
hQH(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.Nr(a2),a1=new A.e3()
a1.cT(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a0.Gw(q).length>=2)u.push(q)}B.d.dY(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){n=u[r]
m=a0.Gw(n)
l=A.U(m)
k=new A.iQ(m,0,5,l.k("iQ<1>"))
k.nb(m,0,5,l.c)
j=k.df(0)
if(new A.O(j,new C.h52(),A.U(j).k("O<1,F>")).fD(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.I)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.I)(j),++i)g.push(C.aTR(a0,j[i]))
w.push(new C.avu("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.S(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
J.c8(e.c_(0,a0.anA(q),new C.h53()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cs<1>")
d=A.B(new A.cs(e,t),t.k("M.E"))
B.d.fd(d)
v=A.a([],v)
for(u=A.cV(d,0,A.dz(5,"count",u),A.U(d).c),t=u.$ti,u=new A.bR(u,u.gJ(0),t.k("bR<aj.E>")),t=t.k("aj.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cJ(s)
m.dY(s,a1)
v.push(m.gG(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.I)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r)s.push(C.aTR(a0,v[r]))
w.push(new C.avu("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aSh(d){return B.d.ap2(D.aDV,new C.fMo(d))},
ivE(d){return A.nM(new A.X(D.aDV,new C.fTr(d),x.av))},
bV5(d){return C.i_A(d)},
i_A(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bV5=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bV5)
case 7:r=f
q=B.a.i(d)
q=A.ev(J.t(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bV5,v)},
C2(d,e){return C.i_x(d,e)},
i_x(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$C2=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$C2)
case 7:r=g
p=B.a.i(d)
o=A.ev(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aB("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$C2)
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
return A.i($async$C2,v)},
bV4(d,e,f){return C.i_y(d,e,f)},
i_y(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bV4=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bV4)
case 7:r=h
q=B.a.i(d)
q=A.ev(J.t(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bV4,v)},
C3(d,e,f,g){return C.i_z(d,e,f,g)},
i_z(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$C3=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$C3)
case 7:r=i
p=B.a.i(d)
o=A.ev(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aB("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$C3)
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
return A.i($async$C3,v)},
bII(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
hgI(d,e,f,g){return new C.alV(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hYB(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aQ(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.bP)
while(u.C())w.push(J.k(u.gP(u)))
u=x.N
w=A.cV(w,0,A.dz(4,"count",x.S),u).df(0)
B.d.u(w,A.c3(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aJ(d.h(0,"c"))
v=v==null?null:B.i.M(v)
v=B.o.D(v==null?0:v,0,3)
u=A.aJ(d.h(0,"s"))
u=u==null?null:B.i.M(u)
return C.hgI(w,v,B.o.D(u==null?20:u,5,60),t)},
hvq(d){var w,v,u,t,s,r,q=J.a2(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aQ(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.bP)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gP(q)
if(u.b(r))v.push(C.hYB(A.a0(r,t,s)))}return new C.N9(p,w,v)},
hpo(d){var w,v=A.a([],x.c)
for(w=J.aQ(d.z);w.C();)v.push(C.hvq(w.gP(w)))
return v},
aTR(d,e){var w=e.c===D.oU
if(d.anA(e)===0&&d.Gw(e).length!==0)return w?0:1
if(d.Gw(e).length!==0||d.ass(e)!=null)return w?2:3
return w?4:5},
hRM(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Nr(a4),a3=new A.e3()
a3.cT(a5)
w=A.a([],x.dT)
v=a2.b
u=A.B(v,x.P)
B.d.dY(u,a3)
t=x.s
s=A.a([],t)
for(r=v.length,q=0;q<v.length;v.length===r||(0,A.I)(v),++q)s.push(B.a.i(v[q].b))
for(v=u.length,r=x.N,p=x.ec,o=x.cc,n=o.k("M.E"),q=0;q<u.length;u.length===v||(0,A.I)(u),++q){m=u[q]
l=A.a([],t)
k=m.d
if(k==null)j=null
else{i=a2.c
i===$&&A.d()
j=i.h(0,k)}h=a2.Gw(m)
g=a2.ass(m)
f=a2.aOk(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cI(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.xc)k="father"
else k=k===D.oU?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gG(h).b)+".")}if(j!=null){k=j.c
if(k===D.xc)k="father"
else k=k===D.oU?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.dY(l,a3)
B.d.b_(l,new C.hf4())
d=B.a.i(m.b)
a0=A.B(new A.X(s,new C.hf5(d),o),n)
B.d.dY(a0,a3)
k=A.a([d],t)
i=A.U(a0)
a1=new A.iQ(a0,0,3,i.k("iQ<1>"))
a1.nb(a0,0,3,i.c)
B.d.u(k,a1)
B.d.dY(k,a3)
a1=C.aTR(a2,m)
i=new A.iQ(l,0,4,p)
i.nb(l,0,4,r)
w.push(new C.bcf(d,a1,i.df(0),k))
if(w.length>=5)break}return w},
hIv(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.Y(d,"My ")?1:0},
hQS(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Nr(a4),a3=new A.e3()
a3.cT(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a2.Gw(q).length>=2)u.push(q)}B.d.dY(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){l=u[r]
k=a2.Gw(l)
j=A.U(k)
i=new A.iQ(k,0,4,j.k("iQ<1>"))
i.nb(k,0,4,j.c)
h=i.df(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.I)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aR(h,new C.h5F(q))&&q.d!==j)i.push(q)}B.d.dY(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.iQ(i,0,k,m)
j.nb(i,0,k,n)
f=j.df(0)
j=B.a.i(l.b)
k=C.aTR(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.I)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.I)(h),++g)e.push(C.aTR(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.I)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.I)(f),++g)a0.push(C.aTR(a2,f[g]))
w.push(new C.aaV(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lL:function lL(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bUh:function bUh(d){this.b=d
this.c=$},
bUi:function bUi(){},
bUj:function bUj(d){this.a=d},
fCT:function fCT(d){this.a=d},
heE:function heE(d){this.a=d},
heF:function heF(){},
heG:function heG(d){this.a=d},
heH:function heH(d,e){this.a=d
this.b=e},
heI:function heI(d,e,f){this.a=d
this.b=e
this.c=f},
heD:function heD(d,e){this.a=d
this.b=e},
heJ:function heJ(d){this.a=d},
heK:function heK(d){this.a=d},
heL:function heL(d,e,f){this.a=d
this.b=e
this.c=f},
heC:function heC(d,e){this.a=d
this.b=e},
fQA:function fQA(d,e){this.a=d
this.b=e},
avu:function avu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h52:function h52(){},
h53:function h53(){},
zR:function zR(d,e,f){this.a=d
this.b=e
this.c=f},
fMo:function fMo(d){this.a=d},
fTr:function fTr(d){this.a=d},
alV:function alV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bP3:function bP3(){},
N9:function N9(d,e,f){this.a=d
this.b=e
this.c=f},
bcf:function bcf(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
hf4:function hf4(){},
hf5:function hf5(d){this.a=d},
aaV:function aaV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h5F:function h5F(d){this.a=d},
bjE:function bjE(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
agV:function agV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
ald:function ald(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ale:function ale(d,e,f,g,h){var _=this
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
_.bv$=g
_.ab$=h
_.c=_.a=null},
bNb:function bNb(d){this.a=d},
bN6:function bN6(){},
bNc:function bNc(){},
bN4:function bN4(){},
bN5:function bN5(){},
bNa:function bNa(d){this.a=d},
bN7:function bN7(d,e){this.a=d
this.b=e},
bN9:function bN9(d,e){this.a=d
this.b=e},
bN8:function bN8(d,e){this.a=d
this.b=e},
bN3:function bN3(d){this.a=d},
beN:function beN(d,e){this.b=d
this.a=e},
Re:function Re(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCO:function aCO(d,e,f){this.b=d
this.c=e
this.a=f},
aBe:function aBe(d,e,f){this.a=d
this.b=e
this.c=f},
aw4:function aw4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aw5:function aw5(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.dz$=e
_.bd$=f
_.c=_.a=null},
ctb:function ctb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ctc:function ctc(d){this.a=d},
cta:function cta(d){this.a=d},
ctd:function ctd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cte:function cte(){},
ctf:function ctf(d,e){this.a=d
this.b=e},
ctg:function ctg(){},
cth:function cth(d){this.a=d},
ct7:function ct7(d){this.a=d},
ct8:function ct8(d,e){this.a=d
this.b=e},
ct9:function ct9(d,e,f){this.a=d
this.b=e
this.c=f},
ct2:function ct2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ct4:function ct4(d,e){this.a=d
this.b=e},
ct5:function ct5(d,e){this.a=d
this.b=e},
ct3:function ct3(d,e){this.a=d
this.b=e},
ct1:function ct1(){},
ct6:function ct6(){},
bee:function bee(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cTf:function cTf(){},
aA0:function aA0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aA1:function aA1(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cI8:function cI8(d){this.a=d},
cI7:function cI7(d){this.a=d},
cIg:function cIg(d,e){this.a=d
this.b=e},
cIh:function cIh(d,e){this.a=d
this.b=e},
cIi:function cIi(d){this.a=d},
cIf:function cIf(d){this.a=d},
cIj:function cIj(d){this.a=d},
cIk:function cIk(d,e){this.a=d
this.b=e},
cIl:function cIl(){},
cIm:function cIm(d){this.a=d},
cIa:function cIa(d){this.a=d},
cIb:function cIb(d,e){this.a=d
this.b=e},
cI9:function cI9(d,e){this.a=d
this.b=e},
cIc:function cIc(){},
cId:function cId(){},
cIe:function cIe(d,e){this.a=d
this.b=e},
aAZ:function aAZ(){},
aIm:function aIm(){},
hn_(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.btm((w-450*u)/2,(v-900*u)/2,u)},
agJ:function agJ(){},
ff2:function ff2(d){this.a=d},
aMc:function aMc(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fpp:function fpp(d){this.a=d},
anc:function anc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
and:function and(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.qg$=f
_.Mt$=g
_.ao6$=h
_.bv$=i
_.ab$=j
_.c=_.a=null},
bV3:function bV3(d){this.a=d},
bV2:function bV2(){},
bV0:function bV0(d){this.a=d},
bUZ:function bUZ(){},
bV_:function bV_(d){this.a=d},
bUW:function bUW(d,e){this.a=d
this.b=e},
bUX:function bUX(){},
bUY:function bUY(d){this.a=d},
bV1:function bV1(d,e){this.a=d
this.b=e},
bUV:function bUV(d){this.a=d},
bv5:function bv5(d,e){this.b=d
this.a=e},
ff3:function ff3(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ff4:function ff4(d,e,f){this.a=d
this.b=e
this.c=f},
ff5:function ff5(d,e,f){this.a=d
this.b=e
this.c=f},
ff6:function ff6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ff7:function ff7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ff8:function ff8(){},
ana:function ana(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
anb:function anb(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.qg$=f
_.Mt$=g
_.ao6$=h
_.bv$=i
_.ab$=j
_.c=_.a=null},
bUH:function bUH(){},
bUS:function bUS(d,e){this.a=d
this.b=e},
bUT:function bUT(d){this.a=d},
bUU:function bUU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUO:function bUO(){},
bUN:function bUN(d,e){this.a=d
this.b=e},
bUP:function bUP(d,e){this.a=d
this.b=e},
bUQ:function bUQ(){},
bUR:function bUR(d){this.a=d},
bUJ:function bUJ(d){this.a=d},
bUK:function bUK(d){this.a=d},
bUL:function bUL(d){this.a=d},
bUI:function bUI(d,e){this.a=d
this.b=e},
bUM:function bUM(d){this.a=d},
blu:function blu(d,e){this.b=d
this.a=e},
dvl:function dvl(){},
a2S:function a2S(d,e){this.a=d
this.b=e},
an6:function an6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
an7:function an7(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.qg$=e
_.Mt$=f
_.ao6$=g
_.bv$=h
_.ab$=i
_.c=_.a=null},
bUt:function bUt(d){this.a=d},
bUs:function bUs(){},
bUr:function bUr(){},
bUl:function bUl(){},
bUm:function bUm(){},
bUq:function bUq(d,e,f){this.a=d
this.b=e
this.c=f},
bUp:function bUp(d){this.a=d},
bUn:function bUn(d,e){this.a=d
this.b=e},
bUo:function bUo(d){this.a=d},
bkU:function bkU(d,e){this.b=d
this.a=e},
aCR:function aCR(){},
bir:function bir(){},
aCT:function aCT(){},
bis:function bis(){},
aCU:function aCU(){},
bit:function bit(){},
uH(d,e,f,g,h){var w,v,u=null,t=A.m(18),s=A.a([],x.V)
s.push(new A.aa(0,B.H,f.j(0.4),B.hS,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.u(v,A.a([A.V(g,h,u,u,u,20),B.aa],w))
v.push(A.c(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aA(u,A.p(u,A.A(v,B.l,u,B.e,B.P,0,u,u),B.f,u,u,new A.o(f,u,u,t,s,u,B.m),u,u,u,u,B.Pq,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hwd(d,e,f,g,h,i,j){return new C.an8(i,h,d,j,e,f,g,null)},
a7n:function a7n(d,e){this.c=d
this.a=e},
bl0:function bl0(d){this.a=d},
tQ:function tQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bUk:function bUk(d){this.a=d},
IJ:function IJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
WX:function WX(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bnP:function bnP(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e68:function e68(d,e){this.a=d
this.b=e},
e69:function e69(d){this.a=d},
e6a:function e6a(d,e){this.a=d
this.b=e},
e66:function e66(d){this.a=d},
e67:function e67(d){this.a=d},
e65:function e65(d){this.a=d},
e63:function e63(d){this.a=d},
e64:function e64(d){this.a=d},
e62:function e62(d,e){this.a=d
this.b=e},
e6b:function e6b(d){this.a=d},
e6c:function e6c(d,e){this.a=d
this.b=e},
e6d:function e6d(d,e){this.a=d
this.b=e},
e6e:function e6e(d,e){this.a=d
this.b=e},
e6h:function e6h(d,e){this.a=d
this.b=e},
e6i:function e6i(d,e){this.a=d
this.b=e},
e6j:function e6j(d,e){this.a=d
this.b=e},
e6k:function e6k(d,e){this.a=d
this.b=e},
e6l:function e6l(d,e){this.a=d
this.b=e},
e6m:function e6m(d,e,f){this.a=d
this.b=e
this.c=f},
e6n:function e6n(d,e){this.a=d
this.b=e},
e6o:function e6o(d,e){this.a=d
this.b=e},
e6f:function e6f(d){this.a=d},
e6g:function e6g(d){this.a=d},
a0K:function a0K(d,e){this.a=d
this.b=e},
an8:function an8(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
an9:function an9(d){var _=this
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
bUF:function bUF(d){this.a=d},
bUG:function bUG(d){this.a=d},
bUE:function bUE(d){this.a=d},
bUv:function bUv(d){this.a=d},
bUw:function bUw(d){this.a=d},
bUu:function bUu(d){this.a=d},
bUB:function bUB(d,e,f){this.a=d
this.b=e
this.c=f},
bUC:function bUC(d){this.a=d},
bUy:function bUy(d,e){this.a=d
this.b=e},
bUz:function bUz(d,e,f){this.a=d
this.b=e
this.c=f},
bUD:function bUD(){},
bUA:function bUA(d,e){this.a=d
this.b=e},
bUx:function bUx(d){this.a=d},
UB:function UB(d,e){this.c=d
this.a=e},
an5:function an5(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bU5:function bU5(d){this.a=d},
bU6:function bU6(d){this.a=d},
bUg:function bUg(){},
bUf:function bUf(d,e,f){this.a=d
this.b=e
this.c=f},
bUa:function bUa(d,e){this.a=d
this.b=e},
bU9:function bU9(d,e){this.a=d
this.b=e},
bUb:function bUb(d){this.a=d},
bUc:function bUc(d,e){this.a=d
this.b=e},
bUd:function bUd(d,e){this.a=d
this.b=e},
bU8:function bU8(d,e){this.a=d
this.b=e},
bUe:function bUe(d,e,f){this.a=d
this.b=e
this.c=f},
bU7:function bU7(d,e){this.a=d
this.b=e},
iu6(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ak_(a6),a5=a4.length
if(a5===0)return""
w=A.S(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bD(new A.W(Date.now(),0,!1))
s=new C.fQ0(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("X<1>"),q=q.k("cP<1,n>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.zG)m.push(l===D.xc?"male":"female")
l=u.w
k=A.ag(a3,!0,!1,!1,!1).cI(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.ag(a3,!0,!1,!1,!1).cI(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.jf(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jf(h,a2,a2)-A.jf(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.B(new A.cP(new A.X(a4,new C.fPZ(u,f),p),new C.fQ_(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aL(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aL(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aw(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
iu7(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ak_(a0),d=e.length
if(d===0)return""
w=x.N
v=A.S(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.I)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fQ5(v,e)
q=new C.fQ3(v)
p=A.S(w,x.S)
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
p.n(0,s.a,d)}}d=p.$ti.k("ba<2>")
d=A.d5(new A.ba(p,d),d.k("M.E"))
n=A.B(d,A.a3(d).k("ci.E"))
B.d.fd(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.I)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eR(l,new C.fQ4(p,m));k.C();t=f){j=l.gP(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aL(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
if0(d,e,f,g){var w,v,u=C.iu8(d,e)
if(u<=0||f.length<=u)return new A.agn(!1,D.El,f)
if(g.q(0,e.a))return new A.agn(!1,D.El,f)
w=A.U(f).c
v=A.cV(f,0,A.dz(u,"count",x.S),w).df(0)
return new A.agn(!0,A.cV(f,u,null,w).df(0),v)},
if1(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ak_(d3),d2=d1.length
if(d2===0)return D.hOV
w=x.N
v=A.S(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.I)(d1),++u){t=d1[u]
v.c_(0,t.a,new C.dkz(t))}s=new C.dkQ(v)
d2=x.dy
r=A.S(w,d2)
q=new C.dkI(r)
for(p=new A.dr(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dkH(r)
l=A.S(w,x.do)
for(p=new A.dr(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c8(l.c_(0,k,new C.dkA()),o)}h=new C.dkG(s)
g=new C.dkF(l,r)
p=v.$ti.k("ba<2>")
o=p.k("X<M.E>")
f=A.B(new A.X(new A.ba(v,p),new C.dkB(h),o),o.k("M.E"))
e=f.length===0?new A.ba(v,p).gG(0):B.d.gG(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.I)(f),++u){t=f[u]
a0=g.$2(t.a,A.aR(w))
if(a0>d){d=a0
e=t}}a1=A.aR(w)
p=x.S
a2=A.S(w,p)
a3=A.S(w,w)
a4=A.S(w,d2)
d2=x.i
a5=A.S(w,d2)
a6=A.S(w,x.d9)
a7=A.S(w,d2)
a8=A.a([],x.s)
a9=new C.dkO(new C.dkK(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.S(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dr(v,v.r,v.e),j=a2.gan5(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.eB([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.I(0,i))break}if(h.$1(b0)&&a2.am(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nM(J.dO(i==null?B.M:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.S(w,x.dO)
b5=A.a([],x.M)
b6=A.S(w,d2)
b7=new C.dky(a2,new C.dkP(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.I)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.dr(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+156)}for(d2=b5.length,u=0;u<d2;++u){w=b5[u].b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+40)}c2=24-(b9===1/0?0:b9)
d2=b4.$ti.k("cs<1>")
d2=A.B(new A.cs(b4,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.GV(o,new A.r(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Lb(c5.a,new A.r(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cs<1>")
d2=A.B(new A.cs(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bP(0,new C.dkC(c6,b4))
for(d2=new A.ch(a4,a4.$ti.k("ch<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aQ(c7.b);j.C();){i=j.gP(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.r(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eR(j,new C.dkD(c8));i.C();)o.push(j.gP(0).b)
if(o.length===0)continue
B.d.b_(o,new C.dkE())
c6.push(new C.aM6(new A.r(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bix(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hLY(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cI(d)
return w==null?null:w.b[1]},
hFy(d,e,f,g,h,i,j,k,l,m,n){return new C.a0Y(k,f,j,e,l,n,m,d,g,h,i,null)},
aES(d,e,f,g,h,i,j){return new C.bmk(i,d,e,f,j,h,g,null)},
asg:function asg(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGr:function aGr(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e7O:function e7O(d){this.a=d},
e7N:function e7N(d){this.a=d},
e7Q:function e7Q(d,e){this.a=d
this.b=e},
e7R:function e7R(d,e){this.a=d
this.b=e},
e7S:function e7S(d){this.a=d},
e7M:function e7M(d,e){this.a=d
this.b=e},
e7P:function e7P(d){this.a=d},
e7U:function e7U(d){this.a=d},
e7T:function e7T(d,e){this.a=d
this.b=e},
asa:function asa(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGo:function aGo(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e7e:function e7e(d){this.a=d},
e7c:function e7c(d){this.a=d},
e7d:function e7d(d){this.a=d},
e7f:function e7f(d,e){this.a=d
this.b=e},
e79:function e79(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6B:function e6B(d){this.a=d},
e6C:function e6C(d,e){this.a=d
this.b=e},
e6T:function e6T(d){this.a=d},
e6R:function e6R(d){this.a=d},
e6S:function e6S(d,e){this.a=d
this.b=e},
e6U:function e6U(d){this.a=d},
e6V:function e6V(d,e){this.a=d
this.b=e},
e78:function e78(d,e){this.a=d
this.b=e},
e6Q:function e6Q(d){this.a=d},
e6P:function e6P(d){this.a=d},
e6O:function e6O(d,e){this.a=d
this.b=e},
e75:function e75(){},
e76:function e76(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e74:function e74(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e6Z:function e6Z(d){this.a=d},
e7_:function e7_(d,e,f){this.a=d
this.b=e
this.c=f},
e6Y:function e6Y(d,e){this.a=d
this.b=e},
e70:function e70(d,e){this.a=d
this.b=e},
e6W:function e6W(d,e){this.a=d
this.b=e},
e6X:function e6X(){},
e71:function e71(d,e){this.a=d
this.b=e},
e72:function e72(d){this.a=d},
e73:function e73(d,e){this.a=d
this.b=e},
e77:function e77(d,e){this.a=d
this.b=e},
e6p:function e6p(d,e){this.a=d
this.b=e},
e6q:function e6q(d,e){this.a=d
this.b=e},
e7h:function e7h(d,e,f){this.a=d
this.b=e
this.c=f},
e7b:function e7b(d,e,f){this.a=d
this.b=e
this.c=f},
e7a:function e7a(d){this.a=d},
e6r:function e6r(d){this.a=d},
e6s:function e6s(d){this.a=d},
e6t:function e6t(){},
e6u:function e6u(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6y:function e6y(d,e){this.a=d
this.b=e},
e6x:function e6x(d,e){this.a=d
this.b=e},
e6w:function e6w(d){this.a=d},
e6z:function e6z(d,e){this.a=d
this.b=e},
e6v:function e6v(d){this.a=d},
e7g:function e7g(d){this.a=d},
e6L:function e6L(){},
e6M:function e6M(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6K:function e6K(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6G:function e6G(d,e,f){this.a=d
this.b=e
this.c=f},
e6F:function e6F(d,e,f){this.a=d
this.b=e
this.c=f},
e6D:function e6D(d,e){this.a=d
this.b=e},
e6H:function e6H(d){this.a=d},
e6I:function e6I(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6E:function e6E(d,e){this.a=d
this.b=e},
e6J:function e6J(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6N:function e6N(d,e){this.a=d
this.b=e},
e7o:function e7o(){},
e7p:function e7p(d,e){this.a=d
this.b=e},
e7q:function e7q(d){this.a=d},
e7r:function e7r(d,e){this.a=d
this.b=e},
e7k:function e7k(d){this.a=d},
e7i:function e7i(d,e){this.a=d
this.b=e},
e7l:function e7l(d,e){this.a=d
this.b=e},
e7m:function e7m(d,e){this.a=d
this.b=e},
e7n:function e7n(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e7s:function e7s(d){this.a=d},
e7j:function e7j(d){this.a=d},
e6A:function e6A(d){this.a=d},
biv:function biv(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dkw:function dkw(d){this.a=d},
dkv:function dkv(d,e){this.a=d
this.b=e},
dkx:function dkx(d){this.a=d},
dku:function dku(d,e){this.a=d
this.b=e},
fQ0:function fQ0(d,e){this.a=d
this.b=e},
fQ1:function fQ1(d){this.a=d},
fQ2:function fQ2(){},
fPZ:function fPZ(d,e){this.a=d
this.b=e},
fQ_:function fQ_(){},
fQ5:function fQ5(d,e){this.a=d
this.b=e},
fQ6:function fQ6(d){this.a=d},
fQ7:function fQ7(){},
fQ3:function fQ3(d){this.a=d},
fQ4:function fQ4(d,e){this.a=d
this.b=e},
Lb:function Lb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GV:function GV(d,e){this.a=d
this.b=e},
bix:function bix(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dkz:function dkz(d){this.a=d},
dkQ:function dkQ(d){this.a=d},
dkI:function dkI(d){this.a=d},
dkJ:function dkJ(){},
dkH:function dkH(d){this.a=d},
dkA:function dkA(){},
dkG:function dkG(d){this.a=d},
dkF:function dkF(d,e){this.a=d
this.b=e},
dkB:function dkB(d){this.a=d},
dkK:function dkK(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dkL:function dkL(d){this.a=d},
dkM:function dkM(d){this.a=d},
dkN:function dkN(){},
dkO:function dkO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dkP:function dkP(){},
dky:function dky(d,e,f,g,h,i,j,k,l,m){var _=this
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
dkC:function dkC(d,e){this.a=d
this.b=e},
dkD:function dkD(d){this.a=d},
dkE:function dkE(){},
aM6:function aM6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
biy:function biy(d,e){this.b=d
this.a=e},
dkR:function dkR(){},
dkS:function dkS(d){this.a=d},
dkT:function dkT(d){this.a=d},
dkU:function dkU(){},
bml:function bml(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhy:function bhy(d,e){this.b=d
this.a=e},
bAv:function bAv(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fv_:function fv_(d){this.a=d},
bpI:function bpI(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
f4O:function f4O(d){this.a=d},
f4N:function f4N(d,e){this.a=d
this.b=e},
a0Y:function a0Y(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aEQ:function aEQ(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dB7:function dB7(d,e){this.a=d
this.b=e},
dB6:function dB6(d){this.a=d},
dB4:function dB4(d){this.a=d},
dB5:function dB5(d){this.a=d},
dBg:function dBg(d){this.a=d},
dBh:function dBh(d){this.a=d},
dBf:function dBf(d,e){this.a=d
this.b=e},
dBi:function dBi(){},
dBl:function dBl(d){this.a=d},
dBe:function dBe(d,e){this.a=d
this.b=e},
dBk:function dBk(){},
dBm:function dBm(d){this.a=d},
dBd:function dBd(d,e){this.a=d
this.b=e},
dBn:function dBn(d){this.a=d},
dBc:function dBc(d){this.a=d},
dBo:function dBo(d){this.a=d},
dBb:function dBb(d){this.a=d},
dBp:function dBp(d){this.a=d},
dBa:function dBa(d){this.a=d},
dBq:function dBq(d){this.a=d},
dB9:function dB9(d){this.a=d},
dBr:function dBr(d){this.a=d},
dB8:function dB8(d,e){this.a=d
this.b=e},
dBj:function dBj(d){this.a=d},
afe:function afe(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bmk:function bmk(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
afd:function afd(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bmj:function bmj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dBs:function dBs(d){this.a=d},
dBt:function dBt(d,e){this.a=d
this.b=e},
aER:function aER(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aL8:function aL8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aff:function aff(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dBC:function dBC(d){this.a=d},
GR:function GR(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hAh(d){var w=d.cH,v=x.N
return w.iX(w,new C.chy(),v,v)},
i6g(d){var w=d.bF
if(w>=0)return w
return 5},
hAj(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hAh(d).h(0,v)
if(w==null||w.length===0)return null
return A.be(w)},
hAi(d,e){var w=C.hAj(d,e)
if(w!=null&&w.c8(new A.W(Date.now(),0,!1)))return!0
return!1},
i6h(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a0(C.hAh(d),w,w)
u=C.hAj(d,e)
t=u!=null&&u.c8(new A.W(Date.now(),0,!1))?u:new A.W(Date.now(),0,!1)
v.n(0,s,t.bL(A.dv(30,0,0,0,0,0).a).aa().ag())
d.cH=v},
b2Q(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b2Q=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lU(t,B.Ko),$async$b2Q)
case 3:if(l){u=!0
w=1
break}u=A.lt(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Ko,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2Q,v)},
chy:function chy(){},
i6e(){var w,v=$.oM(),u=J.e5(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.av(32)]
return"FT"+B.d.hl(u)},
JE(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$JE=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$JE)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.fb("ngmy_family_tree_backup_codes_v1",null,!1,B.bN),$async$JE)
case 8:r=e
if(r==null){u=A.S(x.N,x.z)
w=1
break}q=J.t(r,"codes")
if(x.f.b(q)){o=A.a0(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.ac(m)
$.am.$1("[family tree sync codes] load: "+A.v(p))
w=7
break
case 4:w=2
break
case 7:u=A.S(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$JE,v)},
a96(d){return C.i6f(d)},
i6f(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a96=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$a96)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.i_("ngmy_family_tree_backup_codes_v1",A.J(["codes",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cX,null),$async$a96)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ac(p)
$.am.$1("[family tree sync codes] save: "+A.v(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a96,v)},
chx(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$chx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.JE(),$async$chx)
case 3:t=m.ij(f),t=t.gae(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gP(t)
q=r.b
if(s.b(q)){p=J.a2(q)
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
return A.i($async$chx,v)},
OM(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$OM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.chx(d),$async$OM)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.JE(),$async$OM)
case 6:s=f
r=J.a2(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dE(A.a0(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.W(Date.now(),0,!1).aa().ag())
r.n(s,t,o)
w=9
return A.b(C.a96(s),$async$OM)
case 9:case 8:u=t
w=1
break
case 5:n=C.i6e()
w=10
return A.b(C.JE(),$async$OM)
case 10:s=f
J.aL(s,n,A.J(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a96(s),$async$OM)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$OM,v)},
b2P(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b2P=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.JE(),$async$b2P)
case 3:t=f
for(s=J.du(t),r=s.gdS(t),r=r.df(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.I)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.X(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a96(t),$async$b2P)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b2P,v)},
a97(d,e,f){var w=0,v=A.j(x.H),u
var $async$a97=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.asf(d,e),$async$a97)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.OM(d),$async$a97)
case 7:w=4
break
case 5:w=8
return A.b(C.b2P(d),$async$a97)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a97,v)},
as9(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$as9=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.asf(f,e),$async$as9)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.ce(),$async$as9)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.JE(),$async$as9)
case 7:q=o.t(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a2(q)
if(!J.z(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$as9,v)},
b2O(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b2O=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.ce(),$async$b2O)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.JE(),$async$b2O)
case 4:t=q.t(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a2(t)
if(!J.z(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2O,v)},
i6i(){var w,v=$.oM(),u=J.e5(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.av(32)]
return"FT"+B.d.hl(u)},
asc(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$asc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$asc)
case 3:if(!g){u=null
w=1
break}t=C.i6i()
w=4
return A.b(A.WY(),$async$asc)
case 4:s=g
r=B.e3.aK(B.V.au(d.f4(),null))
r=B.cS.gcp().aK(r)
q=e?999:2
J.aL(s,t,A.J(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a98(s),$async$asc)
case 5:p=e?999:2
u=new A.a27("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asc,v)},
asb(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$asb=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.WY(),$async$asb)
case 3:p=a0
o=J.a2(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a2(n)
l=A.aJ(m.h(n,"usesRemaining"))
k=l==null?null:B.i.M(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b2O(J.k(l==null?"":l),j),$async$asb)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cg.cE(0,B.cJ.aK(t))
s=C.hAk(r)}catch(f){q=A.ac(f)
$.am.$1("[family tree qr stash] decode: "+A.v(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.X(p,g)
else{m=x.N
l=x.z
l=A.dE(A.a0(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.W(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=5
return A.b(A.a98(p),$async$asb)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asb,v)},
hAk(d){var w,v,u,t,s=null
try{w=B.V.aP(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.i6k(A.a0(w,x.N,x.z))
return u}catch(t){v=A.ac(t)
$.am.$1("[family tree sync] parse: "+A.v(v))
return s}},
hiQ(d){var w=0,v=A.j(x.m),u,t,s
var $async$hiQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.Y(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.asb(t[1])
w=1
break}u=null
w=1
break}u=C.hAk(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hiQ,v)},
i6k(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.cO(v,x.f)
u=A.cw(u,new C.chA(),u.$ti.k("M.E"),x.k)
t=A.a3(u).k("X<M.E>")
s=A.B(new A.X(u,new C.chB(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.be(J.k(u==null?"":u))
if(r==null)r=new A.W(Date.now(),0,!1)
q=A.S(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.ij(p),t=t.gae(t),o=x.B;t.C();){n=t.gP(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.cO(l,u)
n=A.cw(n,new C.chC(),n.$ti.k("M.E"),o)
k=A.a3(n).k("X<M.E>")
j=A.B(new A.X(n,new C.chD(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.asd(h,w,s,r,q)},
asf(d,e){var w=0,v=A.j(x.y),u,t
var $async$asf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(R.OC(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.By(d),$async$asf)
case 3:u=t.cK(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asf,v)},
chJ(d){var w=0,v=A.j(x.bC),u,t,s
var $async$chJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.By(d),$async$chJ)
case 3:t=s.b8(f,new C.chK(),x.cs)
t=A.B(t,t.$ti.k("aj.E"))
B.d.b_(t,new C.chL())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$chJ,v)},
WZ(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$WZ=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.asf(e,d),$async$WZ)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.OM(e),$async$WZ)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.By(e),$async$WZ)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dO(r,new C.chH(g))
r=A.B(t,t.$ti.k("M.E"))}t=J.a2(r)
if(t.gar(r)){u=null
w=1
break}t=t.dP(r,new C.chI(e),x.k)
r=A.B(t,t.$ti.k("aj.E"))
q=A.S(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.M2(e,o),$async$WZ)
case 14:n=i
if(J.cK(n))q.n(0,o,n)
case 12:r.length===t||(0,A.I)(r),++p
w=11
break
case 13:u=new C.asd(s,B.a.i(e.toLowerCase()),r,new A.W(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$WZ,v)},
b2T(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b2T=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.WZ(d,e,f,g),$async$b2T)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gG(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aK(t,s,"_")
r=q.a
u=A.HA(A.L7(q.f4(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2T,v)},
b2S(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b2S=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.WZ(d,e,f,g),$async$b2S)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.asc(r,f),$async$b2S)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aJ7(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2S,v)},
X_(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$X_=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.hiQ(a0),$async$X_)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.Y(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.as9(g.a,d,e,f,s,r),$async$X_)
case 6:if(!a2){if(r)throw A.Y(A.bd("This backup expired or the sender's tree is no longer available."))
throw A.Y(A.bd("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bG2(e,j),$async$X_)
case 12:case 11:w=13
return A.b(C.ajI(e,j,s),$async$X_)
case 13:h=n.h(0,i)
w=h!=null&&J.cK(h)?14:15
break
case 14:w=16
return A.b(C.BI(e,i,h),$async$X_)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.I)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bts(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$X_,v)},
asd:function asd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
chF:function chF(){},
chG:function chG(){},
chE:function chE(){},
chA:function chA(){},
chB:function chB(){},
chC:function chC(){},
chD:function chD(){},
chK:function chK(){},
chL:function chL(){},
chH:function chH(d){this.a=d},
chI:function chI(d){this.a=d},
hsh(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f9(null,x.H)
return A.hD(d,new C.ase(w,e,g,i,f,h,null),!0,null,x.H)},
dkt(d,e,f,g,h,i,j,k){return new C.biu(i,e,k,j,g,f,h,d,null)},
ase:function ase(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGq:function aGq(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e7B:function e7B(d){this.a=d},
e7C:function e7C(d,e,f){this.a=d
this.b=e
this.c=f},
e7G:function e7G(d,e){this.a=d
this.b=e},
e7H:function e7H(d){this.a=d},
e7y:function e7y(d){this.a=d},
e7z:function e7z(d,e){this.a=d
this.b=e},
e7A:function e7A(d,e){this.a=d
this.b=e},
e7F:function e7F(d){this.a=d},
e7E:function e7E(d,e){this.a=d
this.b=e},
e7D:function e7D(){},
e7J:function e7J(d){this.a=d},
e7K:function e7K(d,e){this.a=d
this.b=e},
e7I:function e7I(d,e){this.a=d
this.b=e},
dkV:function dkV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
biw:function biw(d,e,f){this.d=d
this.e=e
this.a=f},
aeu:function aeu(d,e,f){this.c=d
this.d=e
this.a=f},
biu:function biu(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
biz:function biz(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a1h:function a1h(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aGp:function aGp(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e7t:function e7t(d,e){this.a=d
this.b=e},
e7u:function e7u(d){this.a=d},
e7v:function e7v(d){this.a=d},
e7w:function e7w(d){this.a=d},
e7x:function e7x(d){this.a=d},
a1i:function a1i(d){this.a=d},
bnQ:function bnQ(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e7L:function e7L(d,e){this.a=d
this.b=e},
b1m(d,e){return new C.b1l(d,e,null)},
b1l:function b1l(d,e,f){this.c=d
this.d=e
this.a=f},
iwC(d){if(!(d!=null&&B.a.Y(d,"ngmy:thumb:")))return null
return B.a.aV(d,11)},
iEm(d){return A.bV(B.L,null,new C.h7b(new C.us(A.Q(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hCo(d,e){return new C.avi(e,d,null)},
aTL(d,e,f,g,h,i,j){var w=C.iwC(i)
if(w!=null)return A.by(e,new A.a4(j,f,new C.a89(w,!0,null),null),B.aq)
return A.aT4(e,B.c0,f,g,h,i,j)},
mf:function mf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a89:function a89(d,e,f){this.c=d
this.d=e
this.a=f},
bnu:function bnu(d,e){var _=this
_.e=_.d=$
_.dz$=d
_.bd$=e
_.c=_.a=null},
dTw:function dTw(d){this.a=d},
dTx:function dTx(){},
dTy:function dTy(d,e){this.a=d
this.b=e},
bnt:function bnt(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
h7b:function h7b(d){this.a=d},
h7a:function h7a(d,e){this.a=d
this.b=e},
h79:function h79(d,e){this.a=d
this.b=e},
h78:function h78(d,e){this.a=d
this.b=e},
avi:function avi(d,e,f){this.c=d
this.d=e
this.a=f},
crt:function crt(d,e){this.a=d
this.b=e},
aOz:function aOz(){},
iE7(d){var w=null
return A.cg(w,w,!0,w,new C.h6z(),d,w,!0,!0,x.e2)},
iFl(d,e,f,g,h){var w=null
return A.cg(w,w,!0,w,new C.hem(h,g,f,e),d,w,!0,!0,x.N)},
iE9(d,e){var w=null
return A.cg(w,w,!0,w,new C.h6D(e),d,w,!0,!0,x.dY)},
iE8(d){var w=null
return A.cg(w,w,!0,w,new C.h6C(),d,w,!0,!0,x.c5)},
aWK:function aWK(d,e){this.a=d
this.b=e},
aWJ:function aWJ(d){this.a=d},
aUL:function aUL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h6z:function h6z(){},
hem:function hem(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h6D:function h6D(d){this.a=d},
h6C:function h6C(){},
a_V:function a_V(d,e){this.c=d
this.a=e},
aBy:function aBy(){var _=this
_.d=$
_.c=_.a=_.e=null},
dbZ:function dbZ(d){this.a=d},
dc_:function dc_(d){this.a=d},
dbY:function dbY(d,e){this.a=d
this.b=e},
dc0:function dc0(d){this.a=d},
dc1:function dc1(d){this.a=d},
a_U:function a_U(d){this.a=d},
aBx:function aBx(){this.d=$
this.c=this.a=null},
dbV:function dbV(d){this.a=d},
dbW:function dbW(d){this.a=d},
dbX:function dbX(d){this.a=d},
a_o:function a_o(d){this.a=d},
aAd:function aAd(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cJO:function cJO(){},
cJU:function cJU(d){this.a=d},
cJV:function cJV(d){this.a=d},
cJW:function cJW(d){this.a=d},
cJT:function cJT(){},
cJX:function cJX(d){this.a=d},
cJY:function cJY(d){this.a=d},
cJS:function cJS(){},
cJZ:function cJZ(d,e){this.a=d
this.b=e},
cJR:function cJR(d,e){this.a=d
this.b=e},
cJP:function cJP(d,e){this.a=d
this.b=e},
cK_:function cK_(d){this.a=d},
cJQ:function cJQ(){},
cK0:function cK0(d){this.a=d},
a33:function a33(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bAn:function bAn(){this.d=$
this.c=this.a=null},
fuv:function fuv(d,e){this.a=d
this.b=e},
fuw:function fuw(d){this.a=d},
fux:function fux(d,e){this.a=d
this.b=e},
adv:function adv(d,e){this.a=d
this.b=e},
GG:function GG(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bAl:function bAl(d,e){var _=this
_.d=$
_.bv$=d
_.ab$=e
_.c=_.a=null},
fut:function fut(d,e){this.a=d
this.b=e},
aA6:function aA6(d,e){this.c=d
this.a=e},
bAm:function bAm(d,e){var _=this
_.d=$
_.bv$=d
_.ab$=e
_.c=_.a=null},
fuu:function fuu(d){this.a=d},
bAk:function bAk(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aQG:function aQG(){},
aQH:function aQH(){},
bI8(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.i.bc(u),s=B.o.D(B.i.S((u-t)*100),0,99),r=d<0?"-":"",q=A.o6(B.o.v(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.h4Q(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aZ(B.o.v(s),2,"0")
n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.D,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Gx(A.cW(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aTn(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aTn=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.id().l6(85,1280,B.eZ),$async$aTn)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fv(),$async$aTn)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hCn()
w=9
return A.b(C.crs(q,r),$async$aTn)
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
$.am.$1("[worksheets] pick photo failed: "+A.v(o))
u=null
w=1
break
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aTn,v)},
aTJ(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aTJ=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.Y(g,"ngmy:ws-thumb:")
if(i){u=C.crp(g)
w=1
break}if(!B.a.Y(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gal(g.split(",")):g
p=B.cJ.aK(q)
o=960
case 7:if(!(o>=96)){w=8
break}w=9
return A.b(A.HB(p,!0,null,o).d7(0,B.fM),$async$aTJ)
case 9:n=a1
w=10
return A.b(n.la(),$async$aTJ)
case 10:m=a1
w=11
return A.b(m.b.ho(B.hp),$async$aTJ)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eV(B.dM.gaS(l))
k="data:image/png;base64,"+B.cS.gcp().aK(i)
if(J.ad(k)<=r){u=k
w=1
break}o=B.i.S(o*0.72)
w=7
break
case 8:t=2
w=6
break
case 4:t=3
f=s.pop()
j=A.ac(f)
$.am.$1("[worksheets] thumbnail shrink failed: "+A.v(j))
w=6
break
case 3:w=2
break
case 6:u=g
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aTJ,v)},
h4Q:function h4Q(){},
us:function us(d){this.a=d},
avh:function avh(d,e,f){this.c=d
this.d=e
this.a=f},
aHY:function aHY(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
f1Y:function f1Y(d,e){this.a=d
this.b=e},
f1P:function f1P(d){this.a=d},
f1Q:function f1Q(d){this.a=d},
f1W:function f1W(d,e){this.a=d
this.b=e},
f1V:function f1V(d,e){this.a=d
this.b=e},
f1S:function f1S(d,e){this.a=d
this.b=e},
f1R:function f1R(d,e){this.a=d
this.b=e},
f1T:function f1T(d){this.a=d},
f1U:function f1U(d,e){this.a=d
this.b=e},
f1X:function f1X(d,e){this.a=d
this.b=e},
f1K:function f1K(d,e){this.a=d
this.b=e},
f1O:function f1O(d){this.a=d},
f1N:function f1N(d,e){this.a=d
this.b=e},
f1M:function f1M(d){this.a=d},
f1Z:function f1Z(d,e){this.a=d
this.b=e},
f2_:function f2_(d,e){this.a=d
this.b=e},
f1L:function f1L(d,e){this.a=d
this.b=e},
hQh(d,e,f){var w="thumbnailPath",v=e.ak()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.X(0,w)
return A.J(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.W(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
h4R(d,e,f){var w=0,v=A.j(x.N),u
var $async$h4R=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.V.au(C.hQh(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h4R,v)},
bIa(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bIa=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.h4R(!0,d,e),$async$bIa)
case 4:w=3
return A.b(r.avf(g,d,e.a),$async$bIa)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.e3.aK(B.V.au(C.hQh(d,e,null),null))
u="NGMY_WS:"+B.kX.gcp().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bIa,v)},
hH_(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hrR(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.da(s,"NGMYWSSYNC2|"))return!0
if(J.da(s,"NGMY_WS:"))return!0
if(J.eD(s,t))return!0
if(J.da(s,"{"))try{w=B.V.aP(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
iC7(d){var w,v,u,t=C.hH_(d)
if(t==null)return null
if(C.hrR(t))return t
w=B.a.cd(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aV(t,w))
if(C.hrR(v))return v}u=B.a.cd(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aV(t,u))
if(C.hrR(v))return v}return null},
hrQ(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.da(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.da(q,"NGMY_WS:")){v=B.cg.cE(0,B.cJ.aK(J.nh(q,8)))
w=t.a(B.V.aP(0,v,r))}else w=t.a(B.V.aP(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.hly(A.a0(u,x.N,x.z))
return t}catch(s){return r}},
bI9(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bI9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.Y(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.ave(t[1]),$async$bI9)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hrQ(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hrQ(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bI9,v)},
hrP(d){var w=B.o.v(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lY(w,v,d.c,d.d,new A.W(Date.now(),0,!1))},
bHD(){var w=0,v=A.j(x.o),u,t
var $async$bHD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.HK(),$async$bHD)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hrQ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHD,v)},
hRv(d,e,f,g){return A.bV(B.L,null,new C.he9(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
he9:function he9(d,e,f){this.a=d
this.b=e
this.c=f},
afA:function afA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f21:function f21(d,e){this.a=d
this.b=e},
f22:function f22(d,e){this.a=d
this.b=e},
f23:function f23(d,e){this.a=d
this.b=e},
f24:function f24(d,e){this.a=d
this.b=e},
f20:function f20(d){this.a=d},
avb:function avb(d,e,f){this.c=d
this.d=e
this.a=f},
bpd:function bpd(){var _=this
_.c=_.a=_.e=_.d=null},
f1F:function f1F(d,e){this.a=d
this.b=e},
f1G:function f1G(d){this.a=d},
f1H:function f1H(d){this.a=d},
avg:function avg(d){this.a=d},
aHX:function aHX(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
f1J:function f1J(d){this.a=d},
f1I:function f1I(d){this.a=d},
i9H(d,e,f,g,h){return new C.Pt(h,g,d,e,f,null)},
aMU:function aMU(d,e){this.a=d
this.b=e},
Pt:function Pt(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHZ:function aHZ(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
f2r:function f2r(){},
f2n:function f2n(d,e){this.a=d
this.b=e},
f2o:function f2o(d){this.a=d},
f28:function f28(d){this.a=d},
f26:function f26(d){this.a=d},
f27:function f27(d){this.a=d},
f2h:function f2h(d,e){this.a=d
this.b=e},
f2e:function f2e(d,e){this.a=d
this.b=e},
f2f:function f2f(d,e){this.a=d
this.b=e},
f2g:function f2g(d,e,f){this.a=d
this.b=e
this.c=f},
f2c:function f2c(d,e,f){this.a=d
this.b=e
this.c=f},
f2a:function f2a(d){this.a=d},
f2b:function f2b(d){this.a=d},
f2d:function f2d(d){this.a=d},
f2u:function f2u(d){this.a=d},
f2t:function f2t(d){this.a=d},
f2v:function f2v(d){this.a=d},
f2s:function f2s(d){this.a=d},
f25:function f25(d){this.a=d},
f29:function f29(d,e){this.a=d
this.b=e},
f2q:function f2q(d,e){this.a=d
this.b=e},
f2p:function f2p(d,e){this.a=d
this.b=e},
f2k:function f2k(d){this.a=d},
f2l:function f2l(d){this.a=d},
f2m:function f2m(d,e){this.a=d
this.b=e},
f2j:function f2j(d,e){this.a=d
this.b=e},
f2i:function f2i(d,e,f){this.a=d
this.b=e
this.c=f},
bC8:function bC8(){},
Bl(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aK(v,w,"_")},
aib(d,e,f){return C.ipY(d,e,f)},
ipY(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aib=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aB("String",e,f),$async$aib)
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
$.am.$1("[worksheets] setString failed for "+e+": "+A.v(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aib,v)},
aia(d,e){return C.ipX(d,e)},
ipX(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aia=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.X(0,e),$async$aia)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.ac(q)
$.am.$1("[worksheets] remove failed for "+e+": "+A.v(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$aia,v)},
ioN(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Ub(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bEW(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bEW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=B.a.i(d)
if(q.length===0){u=null
w=1
break}t=B.a.Y(q,"ngmy:thumb:")
if(!t)t=B.a.Y(q,"ngmy:ws-thumb:")
else t=!0
if(t){u=q
w=1
break}w=B.a.Y(q,"data:image")?3:4
break
case 3:w=5
return A.b(C.b68(q),$async$bEW)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aTJ(q,!1),$async$bEW)
case 6:r=f
if(r!=null&&B.a.Y(r,"data:image")&&r.length<=12e4){u=r
w=1
break}u=null
w=1
break
case 4:u=q
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEW,v)},
hXR(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.rF(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rF(p,J.k(u==null?"":u),1,o,q)},
hly(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.cO(s,x.f)
w=A.cw(w,new C.cJ6(),w.$ti.k("M.E"),x.Q)
v=A.a3(w).k("X<M.E>")
r=A.B(new A.X(w,new C.cJ7(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.be(J.k(t==null?"":t))
return new C.lY(w,v,u,r,t==null?new A.W(Date.now(),0,!1):t)},
iu2(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.xc
case"female":case"f":return D.oU
default:return D.zG}},
hMw(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hwe(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.iu2(v==null?j:J.k(v))
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
return new C.ic(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
iu4(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.PN
case"viewer":return D.l9
default:return D.vj}},
iu5(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
HC(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aSm(d,e){return B.a.i(e.toLowerCase())===C.HC(d,e)&&d.y!==D.l9},
uI(d,e){var w,v=d.y
if(v===D.l9)return!1
w=B.a.i(e.toLowerCase())
if(w===C.HC(d,e))return!0
if(v===D.PN)return!0
v=d.e
return new A.O(v,A.hrX(),A.U(v).k("O<1,n>")).q(0,w)},
itp(d){return J.dO(d,new C.fOT()).gJ(0)},
heV(d){var w=0,v=A.j(x.y),u,t
var $async$heV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.By(d),$async$heV)
case 3:u=t.rA(f,new C.heW(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$heV,v)},
bG2(d,e){var w=0,v=A.j(x.H),u,t
var $async$bG2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.By(d),$async$bG2)
case 3:t=g
if(J.rA(t,new C.fMn(e))){w=1
break}if(C.itp(t)>=2)throw A.Y(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bG2,v)},
anf(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.cO(h,x.f)
w=A.cw(w,new C.bV6(),w.$ti.k("M.E"),x.P)
v=A.a3(w).k("X<M.E>")
g=A.B(new A.X(w,new C.bV7(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b8(u,new C.bV8(),x.N)
t=A.B(w,w.$ti.k("aj.E"))}else t=A.a([],x.s)
w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
s=d.h(0,"code")
s=J.k(s==null?"":s)
r=J.z(d.h(0,"isPrivate"),!1)
q=d.h(0,"createdAt")
q=A.be(J.k(q==null?"":q))
if(q==null)q=new A.W(Date.now(),0,!1)
p=A.aJ(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.i.M(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.iu4(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aQ(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.bP)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gP(f)
if(l.b(i))m.push(A.a0(i,k,j))}return new C.lb(w,v,s,!r,t,g,q,p,o,n,m)},
hML(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.aw(v,0,8)},
DU(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$DU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Ta(d),$async$DU)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aB(),$async$DU)
case 4:t=f
w=5
return A.b(t.a88(0),$async$DU)
case 5:w=6
return A.b(C.fCq(t,l),$async$DU)
case 6:s=f
if(J.cK(s)){u=s
w=1
break}r=B.a.gZ(B.a.i(l.toLowerCase()))
q=t.a
p=J.a2(q)
o=A.aV(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hHC(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.pu(l,n),$async$DU)
case 11:u=n
w=1
break
case 10:case 8:m=A.aV(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gZ(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hHC(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.pu(l,n),$async$DU)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$DU,v)},
fCq(d,e){return C.im7(d,e)},
im7(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fCq=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a2(a3)
a5=A.aV(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Bl(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.V.aP(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aQ(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gP(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aV(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Bl(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.V.aP(0,m,null)
if(!a0.b(l)){w=7
break}k=C.hly(A.a0(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aV(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Bl(a9)+"_"+n))
i=C.ioN(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.Y(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b68(h),$async$fCq)
case 17:g=b1
if(g!=null){i=i.Ub(g)
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
case 8:J.Tk(q,new C.fCr())
if(p&&J.ad(q)!==0)C.pu(a9,q)
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
return A.i($async$fCq,v)},
bGw(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bGw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Ta(d),$async$bGw)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.DU(r),$async$bGw)
case 4:t=p.aQ(g)
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
return A.i($async$bGw,v)},
hHC(d){var w,v,u,t
try{w=B.V.aP(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.cO(w,x.f)
v=A.cw(v,new C.fxY(),v.$ti.k("M.E"),x.fA)
u=A.a3(v).k("X<M.E>")
v=A.B(new A.X(v,new C.fxZ(),u),u.k("M.E"))
B.d.b_(v,new C.fy_())
return v}catch(t){v=A.a([],x.D)
return v}},
pu(d,e){return C.iDX(d,e)},
iDX(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$pu=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Ta(b2),$async$pu)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aB(),$async$pu)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Bl(a8)
p=A.aV(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b8(x.j.a(B.V.aP(0,p,null)),new C.h6n(),a2).fD(0)
a2=J.b8(b3,new C.h6o(),a2).c0(0,new C.h6p())
n=A.d5(a2,a2.$ti.k("M.E"))
a2=o,a2=A.e7(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eD(n,m)?17:18
break
case 17:a5=C.Bl(a8)
l=A.aV(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.aat(l),$async$pu)
case 19:t=21
a5=C.Bl(a8)
k=A.aV(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.V.aP(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.aat(a5==null?null:J.k(a5)),$async$pu)
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
return A.b(C.aia(r,"ngmy_worksheet_item_v3_"+C.Bl(a8)+"_"+m),$async$pu)
case 29:w=30
return A.b(C.aia(r,"ngmy_worksheet_thumb_v3_"+C.Bl(a8)+"_"+m),$async$pu)
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
case 14:case 10:a2=J.cJ(b3),a3=a2.gae(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gP(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bEW(h),$async$pu)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.aib(r,"ngmy_worksheet_thumb_v3_"+C.Bl(a8)+"_"+a4,f),$async$pu)
case 40:g=i.Ub(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.aia(r,"ngmy_worksheet_thumb_v3_"+C.Bl(a8)+"_"+a4),$async$pu)
case 41:g=i.Ub(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.aia(r,"ngmy_worksheet_thumb_v3_"+C.Bl(a8)+"_"+a4),$async$pu)
case 42:case 34:a4=i.a
w=43
return A.b(C.aib(r,"ngmy_worksheet_item_v3_"+C.Bl(a8)+"_"+a4,B.V.au(g.ak(),null)),$async$pu)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.v(a8))
w=31
break}J.c8(q,i.a)
w=31
break
case 32:w=44
return A.b(C.aib(r,"ngmy_worksheets_index_v3_"+C.Bl(a8),B.V.au(q,null)),$async$pu)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.v(a8))
u=!1
w=1
break}a3=a2.eT(b3,new C.h6q(q))
a4=a3.$ti.k("cP<1,a9<n,@>>")
a7=A.B(new A.cP(a3,new C.h6r(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.aib(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gZ(B.a.i(a8.toLowerCase()))),B.V.au(a0,null)),$async$pu)
case 45:w=46
return A.b(J.hWW(r),$async$pu)
case 46:if(a2.gcn(b3)&&J.ad(q)===0){u=!1
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
$.am.$1("[worksheets] saveWorksheetProjects error: "+A.v(a1))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$pu,v)},
Mx(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Mx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.DU(d),$async$Mx)
case 3:t=g
s=J.cJ(t)
r=s.bl(t,new C.heU(e))
if(r===-1)s.ce(t,0,e)
else s.n(t,r,e)
u=C.pu(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Mx,v)},
bGi(d,e){var w=0,v=A.j(x.H),u
var $async$bGi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.DU(d),$async$bGi)
case 2:u=g
J.ng(u,new C.fPm(e))
w=3
return A.b(C.pu(d,u),$async$bGi)
case 3:return A.h(null,v)}})
return A.i($async$bGi,v)},
HE(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$HE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aB(),$async$HE)
case 3:l=f
k=A.a([],x._)
j=B.a.gZ(B.a.i(d.toLowerCase()))
i=A.aV(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.V.aP(0,i,null)
if(x.j.b(t)){j=J.cO(t,x.f)
j=A.cw(j,new C.fSB(),j.$ti.k("M.E"),x.k)
s=A.a3(j).k("X<M.E>")
r=A.B(new A.X(j,new C.fSC(),s),s.k("M.E"))
B.d.b_(r,new C.fSD())
k=r}}catch(h){}w=4
return A.b(C.fyK(d),$async$HE)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.imu(k,p,d)
j=A.U(o)
s=j.k("O<1,a9<n,@>>")
s=A.B(new A.O(o,new C.fSE(),s),s.k("aj.E"))
n=B.V.au(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Sg(d,o),$async$HE)
case 7:case 6:j=j.k("X<1>")
m=A.B(new A.X(o,new C.fSF(d),j),j.k("M.E"))
if(m.length!==0)C.aS8(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$HE,v)},
h69(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$h69=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sg(d,e),$async$h69)
case 3:t=J.dO(e,new C.h6a(d))
s=A.B(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aS8(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h69,v)},
a4M(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a4M=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aB(),$async$a4M)
case 2:n=g
m=B.a.gZ(B.a.i(d.toLowerCase()))
l=A.aV(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.V.aP(0,l,null)
if(x.j.b(u)){m=J.cO(u,x.f)
m=A.cw(m,new C.heP(),m.$ti.k("M.E"),x.k)
t=A.a3(m).k("X<M.E>")
s=A.B(new A.X(m,new C.heQ(),t),t.k("M.E"))
o=s}}catch(k){}q=J.oR(o,new C.heR(e))
if(B.a.i(e.x).length===0&&C.uI(e,d)){m=B.a.i(d.toLowerCase())
p=e.aHr(e.y===D.l9?D.l9:D.vj,m)}else p=e
if(q===-1)J.nf(o,0,p)
else J.aL(o,q,p)
w=3
return A.b(C.Sg(d,o),$async$a4M)
case 3:w=C.uI(p,d)?4:5
break
case 4:w=6
return A.b(C.aS7(C.HC(p,d),p),$async$a4M)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a4M,v)},
aSk(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aSk=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.HE(d),$async$aSk)
case 2:u=g
t=J.cJ(u)
s=A.nM(t.eT(u,new C.fP3(e)))
t.br(u,new C.fP4(e))
w=3
return A.b(C.Sg(d,u),$async$aSk)
case 3:w=s!=null&&C.aSm(s,d)?4:5
break
case 4:w=6
return A.b(C.fy1(e),$async$aSk)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aSk,v)},
ak_(d){var w=d.f,v=A.U(w).k("X<1>")
w=A.B(new A.X(w,new C.hf_(),v),v.k("M.E"))
return w},
hpc(d,e){var w,v=d.f,u=A.nM(new A.X(v,new C.fOy(e),A.U(v).k("X<1>")))
v=C.ak_(d)
w=A.U(v).k("X<1>")
v=A.B(new A.X(v,new C.fOz(e,u),w),w.k("M.E"))
B.d.b_(v,new C.fOA())
return v},
iu8(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hRz(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bl(C.hpc(d,u),new C.hen(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
ivF(d,e){var w
if(e==null||e.length===0)return 1
w=C.hpc(d,e)
if(w.length===0)return 1
return new A.O(w,new C.fTs(),A.U(w).k("O<1,F>")).eH(0,B.yC)+1},
iDQ(d){var w,v=C.ak_(d)
if(v.length===0)return null
w=new A.X(v,new C.h63(),A.U(v).k("X<1>"))
if(!w.gar(0))return w.gG(0)
return B.d.gG(v)},
iu3(d){return A.J(["id",d.a,"name",d.b,"gender",C.hMw(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
ivA(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.S(a0,x.P)
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
n=n!==D.zG?n:q.c
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
d=q.aHm(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.I)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cTa(a1,w,a3.d,a2.y,s,a0,v)},
By(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$By=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aB(),$async$By)
case 3:q=f
p=B.a.gZ(B.a.i(d.toLowerCase()))
o=A.aV(J.t(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.V.aP(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.cO(t,x.f)
p=A.cw(p,new C.fSy(),p.$ti.k("M.E"),x.k)
s=A.a3(p).k("X<M.E>")
p=A.B(new A.X(p,new C.fSz(),s),s.k("M.E"))
B.d.b_(p,new C.fSA())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$By,v)},
ajI(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ajI=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.vj:D.l9
a7=C.HC(b2,b3)
w=2
return A.b(C.By(b1),$async$ajI)
case 2:a8=b5
a9=J.cJ(a8)
b0=a9.bl(a8,new C.h5Z(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bG2(b1,b2),$async$ajI)
case 5:case 4:if(b0===-1){u=b2.aHr(a6,a7)
a9.ce(a8,0,u)}else{t=a9.h(a8,b0)
s=A.S(x.N,x.P)
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
i=i!==D.zG?i:l.c
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
s.n(0,m,l.aHm(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("ba<2>")
s=A.B(new A.ba(s,k),k.k("M.E"))
k=a5?D.vj:D.l9
u=t.cTc(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Sg(b1,a8),$async$ajI)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aS7(B.a.i(b3.toLowerCase()),u),$async$ajI)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ajI,v)},
hI4(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.W(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("O<1,a9<n,@>>"),k=A.B(new A.O(m,C.hQE(),l),l.k("aj.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.J(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.J(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hI5(d,e){var w=new A.W(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("O<1,a9<n,@>>")
u=A.B(new A.O(u,C.hQE(),t),t.k("aj.E"))
return A.J(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
ik1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a2(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.anf(A.a0(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.O(j,A.hrX(),A.U(j).k("O<1,n>")).c0(0,new C.fyx())
t=A.B(j,j.$ti.k("M.E"))
if(u===v)s=D.vj
else s=B.d.q(t,u)?D.PN:D.l9
return w.aHr(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.anf(A.a0(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.cO(q,h)
h=A.cw(h,new C.fyy(),h.$ti.k("M.E"),x.P)
p=A.a3(h).k("X<M.E>")
o=A.B(new A.X(h,new C.fyz(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b8(n,new C.fyA(),x.N).c0(0,new C.fyB())
t=A.B(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.vj
else s=B.d.q(t,u)?D.PN:D.l9
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.z(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.be(J.k(l==null?"":l))
if(l==null)l=new A.W(Date.now(),0,!1)
j=A.aJ(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.i.M(j)
if(j==null)j=0
return new C.lb(h,r,p,!m,t,o,l,j,v,s,B.cn)},
fyK(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fyK=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fyO()
h=x.N
g=x.z
w=7
return A.b(A.hc(A.a([A.m2("family_trees","*",null,A.J(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bN),r.$2(A.m2("family_trees","*",A.J(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bN),"collaborator"),r.$2(A.m2("family_trees","*",null,A.J(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bN),"public")],x.cl),x.fO),$async$fyK)
case 7:q=a4
p=J.t(q,0)
o=J.t(q,1)
n=J.t(q,2)
g=x.a
m=A.S(h,g)
h=A.B(p,g)
l=h
J.hb(l,o)
J.hb(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.I)(l),++f){k=l[f]
g=J.t(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aL(m,j,k)}l=m
h=A.a3(l).k("ba<2>")
h=A.cw(new A.ba(l,h),new C.fyL(a0),h.k("M.E"),x.k)
l=A.a3(h).k("X<M.E>")
l=A.B(new A.X(h,new C.fyM(),l),l.k("M.E"))
B.d.b_(l,new C.fyN())
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
else h.$1("[family_trees] fetch error: "+A.v(i))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fyK,v)},
imu(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a2(e)
if(j.gar(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dP(e,new C.fDb(),v).c0(0,new C.fDc())
t=A.d5(u,u.$ti.k("M.E"))
s=A.S(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.I)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.HC(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.l9){m=q.e
m=!new A.O(m,A.hrX(),A.U(m).k("O<1,n>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gP(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.ivA(l,v)
o=C.HC(k,w)
p=v.d
s.n(0,u,o===w?k.bgZ(p,D.vj):k.bgZ(p,v.y))}j=s.$ti.k("ba<2>")
j=A.B(new A.ba(s,j),j.k("M.E"))
B.d.b_(j,new C.fDd())
return j},
Sg(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Sg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aB(),$async$Sg)
case 2:u=g
t=B.a.gZ(B.a.i(d.toLowerCase()))
s=J.b8(e,new C.fGd(),x.a)
s=A.B(s,s.$ti.k("aj.E"))
w=3
return A.b(u.aB("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.V.au(s,null)),$async$Sg)
case 3:return A.h(null,v)}})
return A.i($async$Sg,v)},
aS7(d,e){return C.irQ(d,e)},
irQ(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aS7=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.mv("family_trees",A.a([C.hI4(e,d)],p),null,B.cX),$async$aS7)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.mv("family_trees",A.a([C.hI5(e,d)],p),null,B.cX),$async$aS7)
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
$.am.$1("[family_trees] upsert error: "+A.v(q))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aS7,v)},
aS8(d,e){return C.irR(d,e)},
irR(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aS8=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("O<1,a9<n,@>>")
m=n.k("aj.E")
l=A.B(new A.O(e,new C.fLB(d),n),m)
r=l
w=7
return A.b(A.mv("family_trees",r,null,B.cX),$async$aS8)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.O(e,new C.fLC(d),n),m)
p=k
w=8
return A.b(A.mv("family_trees",p,null,B.cX),$async$aS8)
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
$.am.$1("[family_trees] bulk upsert error: "+A.v(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aS8,v)},
fy1(d){return C.ije(d)},
ije(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fy1=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.SI("family_trees",A.J(["id",d],x.N,x.z),null,B.cX),$async$fy1)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.ac(p)
$.am.$1("[family_trees] delete error: "+A.v(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fy1,v)},
rF:function rF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lY:function lY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cJ9:function cJ9(){},
cJ8:function cJ8(){},
cJ6:function cJ6(){},
cJ7:function cJ7(){},
II:function II(d,e){this.a=d
this.b=e},
ic:function ic(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
ane:function ane(d,e){this.a=d
this.b=e},
fOT:function fOT(){},
heW:function heW(d){this.a=d},
fMn:function fMn(d){this.a=d},
lb:function lb(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bVa:function bVa(){},
bV9:function bV9(){},
bV6:function bV6(){},
bV7:function bV7(){},
bV8:function bV8(){},
fCr:function fCr(){},
fxY:function fxY(){},
fxZ:function fxZ(){},
fy_:function fy_(){},
h6n:function h6n(){},
h6o:function h6o(){},
h6p:function h6p(){},
h6q:function h6q(d){this.a=d},
h6r:function h6r(){},
heU:function heU(d){this.a=d},
fPm:function fPm(d){this.a=d},
fSB:function fSB(){},
fSC:function fSC(){},
fSD:function fSD(){},
fSE:function fSE(){},
fSF:function fSF(d){this.a=d},
h6a:function h6a(d){this.a=d},
heP:function heP(){},
heQ:function heQ(){},
heR:function heR(d){this.a=d},
fP3:function fP3(d){this.a=d},
fP4:function fP4(d){this.a=d},
hf_:function hf_(){},
fOy:function fOy(d){this.a=d},
fOz:function fOz(d,e){this.a=d
this.b=e},
fOA:function fOA(){},
hen:function hen(d){this.a=d},
fTs:function fTs(){},
h63:function h63(){},
fSy:function fSy(){},
fSz:function fSz(){},
fSA:function fSA(){},
h5Z:function h5Z(d){this.a=d},
fyx:function fyx(){},
fyy:function fyy(){},
fyz:function fyz(){},
fyA:function fyA(){},
fyB:function fyB(){},
fyO:function fyO(){},
fyP:function fyP(d){this.a=d},
fyL:function fyL(d){this.a=d},
fyM:function fyM(){},
fyN:function fyN(){},
fDb:function fDb(){},
fDc:function fDc(){},
fDd:function fDd(){},
fGd:function fGd(){},
fLB:function fLB(d){this.a=d},
fLC:function fLC(d){this.a=d},
cJa:function cJa(d,e){this.a=d
this.b=e},
cJb:function cJb(d,e){this.a=d
this.b=e},
aK3:function aK3(d,e,f){this.a=d
this.b=e
this.c=f},
bct:function bct(){this.b=this.a=0},
bcs:function bcs(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bAo:function bAo(){},
xA(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gci()+"/"+w.gcB()+"/"+w.gck()
if(!e)return v
return v+" "+B.a.aZ(B.o.v(w.gny()),2,"0")+":"+B.a.aZ(B.o.v(w.gHa()),2,"0")},
isW(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a5.c
J.bs(a4.save())
a4.translate(a6.a,a6.b-b0)
w=A.bZ(new A.r(0,b0+a7*0.005),a7*0.06,a7*0.45)
v=B.v.j(0.22)
$.T()
u=A.L()
u.r=v.gp(0)
a5.c1(w,u)
for(w=a7*0.05,v=-a7,u=v*0.24,t=a7*0.1,s=u+a7*0.2,r=a7*0.04,q=a7*0.065,p=v*0.05,o=a7*0.14,n=p+w,m=a7*0.025,l=0;l<2;++l){k=F.hq[l]*a7*0.075
j=k-w
j=A.bw(new A.a5(j,u,j+t,s),new A.aP(r,r))
i=new A.ar(B.U,B.R,B.X,B.Y,B.W)
i.r=B.dl.gp(0)
a5.aq(j,i)
k-=q
k=A.bw(new A.a5(k,p,k+o,n),new A.aP(m,m))
i=new A.ar(B.U,B.R,B.X,B.Y,B.W)
i.r=B.c.gp(0)
a5.aq(k,i)}w=v*0.16
u=v*0.52
t=a7*0.32
s=w+t
q=a7*0.09
h=A.bw(new A.a5(w,u,s,u+t),new A.aP(q,q))
q=A.L()
q.r=b2.gp(0)
a5.aq(h,q)
q=v*0.27
t=a7*0.02
t=A.bw(new A.a5(w,q,s,q+a7*0.045),new A.aP(t,t))
q=B.c.j(0.35)
s=A.L()
s.r=q.gp(0)
a5.aq(t,s)
s=v*0.47
g=new A.r(v*0.15,s)
f=new A.r(a7*0.15,s)
s=v*0.06
t=a7*0.07
a5.ah(g,g.a7(0,new A.r(s,a7*0.17)),O.ai9(F.tp,t))
s=g.a7(0,new A.r(s,a7*0.18))
q=A.L()
q.r=F.tp.gp(0)
a5.O(s,r,q)
e=-2.5+b3*0.5
d=f.a7(0,new A.r(Math.sin(e)*a7*0.2,Math.cos(e)*a7*0.2))
a5.ah(f,d,O.ai9(F.tp,t))
w=A.L()
w.r=F.tp.gp(0)
a5.O(d,r,w)
v*=0.7
a0=new A.r(0,v)
a1=a7*0.22
if(b1===1){w=a0.a7(0,new A.r(0,-a1*0.12))
u=A.L()
u.r=F.mj.gp(0)
a5.O(w,a1*1.18,u)}w=A.L()
w.r=F.tp.gp(0)
a5.O(a0,a1,w)
if(b1===0){w=A.bY(a0,a1)
u=A.L()
u.r=F.mj.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)}else if(b1===2){w=A.bY(a0,a1)
u=A.L()
u.r=F.mj.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)
for(w=v+a1*0.3,u=a1*0.2,l=0;l<2;++l){a2=F.hq[l]
t=new A.ar(B.U,B.R,B.X,B.Y,B.W)
t.r=F.mj.gp(0)
a5.O(new A.r(0+a2*a1*1.05,w),u,t)}}a3=B.i.F(a8*0.8,3)>2.85
for(w=v+a1*0.42,u=a1*0.12,t=a1*0.25,s=a8*0.7,r=a1*0.13,v+=a1*0.05,q=-a1*0.15,p=v+0,o=a1*0.15,l=0;l<2;++l){n=F.hq[l]*a1
m=0+n*0.4
if(a3){k=new A.ar(B.U,B.R,B.X,B.Y,B.W)
k.b=B.ac
k.c=1.6
k.r=B.bq.gp(0)
k.d=B.bG
a5.ah(new A.r(m+q,p),new A.r(m+o,p),k)}else{k=new A.ar(B.U,B.R,B.X,B.Y,B.W)
k.r=B.c.gp(0)
a5.O(new A.r(m,v),t,k)
k=Math.sin(s)
j=new A.ar(B.U,B.R,B.X,B.Y,B.W)
j.r=B.v.gp(0)
a5.O(new A.r(m+k*a1*0.06,p),r,j)}m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=B.hZ.j(0.5).gp(0)
a5.O(new A.r(0+n*0.62,w),u,m)}a5.cQ(A.bZ(a0.a7(0,new A.r(0,a1*0.5)).aI(0,new A.r(0,a1*0.1)),a1*0.4,a1*0.65),0.2,2.741592653589793,!1,O.ai9(B.bq,1.8))
a4.restore()},
i9E(){var w,v=$.oM(),u=J.e5(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.av(32)]
return"WS"+B.d.hl(u)},
avc(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$avc=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$avc)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.fb("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bN),$async$avc)
case 8:r=e
if(r==null){u=A.S(x.N,x.z)
w=1
break}q=J.t(r,"stashes")
if(x.f.b(q)){o=A.a0(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.ac(m)
$.am.$1("[worksheet qr stash] load: "+A.v(p))
w=7
break
case 4:w=2
break
case 7:u=A.S(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$avc,v)},
avd(d){return C.i9F(d)},
i9F(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$avd=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$avd)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.i_("ngmy_worksheet_project_qr_stashes_v1",A.J(["stashes",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cX,null),$async$avd)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ac(p)
$.am.$1("[worksheet qr stash] save: "+A.v(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$avd,v)},
avf(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$avf=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$avf)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.i9E()
w=4
return A.b(C.avc(),$async$avf)
case 4:r=h
q=B.a.i(e)
p=B.e3.aK(t)
J.aL(r,s,A.J(["ownerEmail",q,"projectId",f,"payload",B.cS.gcp().aK(p),"usesRemaining",25,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.avd(r),$async$avf)
case 5:u=new A.a27("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$avf,v)},
ave(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ave=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.ce(),$async$ave)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.avc(),$async$ave)
case 4:q=f
p=J.a2(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a2(o)
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
try{s=B.cg.cE(0,B.cJ.aK(t))}catch(h){r=A.ac(h)
$.am.$1("[worksheet qr stash] decode: "+A.v(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.X(q,i)
else{n=x.N
m=x.z
m=A.dE(A.a0(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.W(Date.now(),0,!1).aa().ag())
p.n(q,i,m)}w=5
return A.b(C.avd(q),$async$ave)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ave,v)},
hCn(){var w=new A.W(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cV.av(999999)},
i9G(d){var w,v,u,t,s,r,q
try{w=A.Bw(d)
if(w==null)return d
v=w
if(J.MD(v)>960||J.MC(v)>960){s=v
r=J.MD(v)>=J.MC(v)?960:null
v=A.SC(s,J.MC(v)>J.MD(v)?960:null,B.IU,r)}s=v
u=A.J3(82).zG(s,B.rq)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cd(u))
return s}catch(q){t=A.ac(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.v(t))
return d}},
crs(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$crs=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.i9G(e)
$.cro.n(0,s,t)
u=C.bIc(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$crs,v)},
b68(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b68=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.da(l,"data:image")){u=null
w=1
break}t=4
r=J.eD(l,",")?B.d.gal(J.m5(l,",")):l
q=B.cJ.aK(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hCn()
w=7
return A.b(C.crs(p,q),$async$b68)
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
$.am.$1("[worksheet-thumb] persistDataUrl failed: "+A.v(n))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$b68,v)},
crp(d){var w=0,v=A.j(x.T),u,t,s
var $async$crp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.Y(s,"data:image")){u=s
w=1
break}w=3
return A.b(A.crr(s),$async$crp)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cS.gcp().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$crp,v)},
aat(d){var w=0,v=A.j(x.H),u,t
var $async$aat=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=A.hQi(d)
if(t==null){w=1
break}$.cro.X(0,t)
w=3
return A.b(C.bIb(t),$async$aat)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aat,v)},
bIc(d,e){return C.iCa(d,e)},
iCa(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bIc=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aQX
w=7
return A.b(n==null?$.aQX=A.ho_():n,$async$bIc)
case 7:r=g
q=new Uint8Array(A.cd(e))
p=J.mz(r,"thumbs","readwrite")
B.iT.mj(J.my(p,"thumbs"),q,l)
w=8
return A.b(J.oQ(p),$async$bIc)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.ac(k)
$.am.$1("[worksheet-thumb idb put] "+A.v(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bIc,v)},
bIb(d){return C.iC8(d)},
iC8(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bIb=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aQX
w=7
return A.b(o==null?$.aQX=A.ho_():o,$async$bIb)
case 7:r=f
q=J.mz(r,"thumbs","readwrite")
B.iT.GK(J.my(q,"thumbs"),m)
w=8
return A.b(J.oQ(q),$async$bIb)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.ac(l)
$.am.$1("[worksheet-thumb idb delete] "+A.v(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bIb,v)}},D
J=c[1]
A=c[0]
B=c[2]
A9=c[86]
S=c[296]
A_=c[113]
Aa=c[295]
P=c[300]
A0=c[206]
T=c[67]
M=c[70]
Ab=c[272]
L=c[244]
A1=c[120]
U=c[156]
H=c[42]
E=c[260]
Ac=c[275]
V=c[139]
Ad=c[169]
Ae=c[153]
A2=c[116]
Af=c[106]
Ag=c[73]
Ah=c[271]
Ai=c[51]
Q=c[270]
Aj=c[294]
Ak=c[240]
N=c[98]
A3=c[94]
Al=c[213]
A4=c[165]
A5=c[218]
A6=c[256]
Am=c[161]
W=c[301]
A7=c[299]
An=c[297]
Ao=c[87]
G=c[298]
Ap=c[302]
Aq=c[168]
Ar=c[155]
A8=c[248]
As=c[41]
At=c[199]
Au=c[115]
Av=c[236]
X=c[287]
O=c[50]
F=c[131]
Aw=c[40]
I=c[138]
Y=c[108]
K=c[174]
Ax=c[121]
Z=c[84]
R=c[39]
Ay=c[118]
C=a.updateHolder(c[7],C)
D=c[293]
C.aqQ.prototype={}
C.b1n.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.blk(),f=h.x!=null&&h.A_(i).length===0
if(h.x!=null)w=f?B.b5:B.bE
else w=h.gVb()?B.bE:B.ee
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.K(D.bsx,B.r,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.fsa,B.f,i,i,new A.o(B.b5.j(0.12),i,i,A.m(999),i,i,B.m),i,i,i,i,B.hm,i,i,i),B.S,D.fYC,B.at,A.c(C.xA(new A.W(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fU9,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,D.ba7,i,i,i,i,B.Pn,i,i,i)
q=A.m(16)
p=A.K(B.bn,B.r,1)
o=A.K(B.b5.j(0.28),B.r,1)
n=A.hql(h.d)
o=A.p(B.z,C.b1m(A.fVY(h.e,n),30),B.f,i,i,new A.o(B.mm,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.c(v,i,i,i,i,i,i,D.fP2,B.K,i,i)
m=A.m(14)
l=A.K(B.bn,B.r,1)
q=A.p(i,A.x(A.a([o,B.N,n,B.bt,D.fYV,B.af,A.p(i,A.x(A.a([D.hej,B.bt,A.c(A.BB(h.c),i,i,i,i,i,i,D.fJw,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.m),i,i,i,i,B.f8,i,i,1/0)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.aS,i,p,q,i,i,B.m),i,i,i,i,B.a1S,i,i,i)
p=A.m(16)
m=A.K(B.bn,B.r,1)
l=j.aUy("Original due",C.xA(h.r,!1))
n=j.aUy("Current due",C.xA(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.S,A.p(i,A.x(A.a([l,B.N,n,B.S,A.p(i,A.c(h.gaOv(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.m),i,i,i,i,B.x1,i,i,1/0),B.S,j.cnt(),B.N,j.c9K(g,f)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.m),i,i,i,i,B.bg,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.K(B.bn,B.r,1)
B.d.u(p,A.a([B.S,A.p(i,A.x(A.a([D.fZV,B.at,A.c(q,i,i,i,i,i,i,D.fOb,i,i,i)],s),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.aS,i,n,o,i,i,B.m),i,i,i,i,B.bg,i,i,1/0)],s))}if(h.gaJ6()){q=A.m(14)
o=A.K(B.cD,B.r,1.6)
B.d.u(p,A.a([B.S,A.p(i,A.x(A.a([D.hfE,B.N,A.by(A.m(12),A.el(new A.a4(1/0,88,A.b4(i,i,i,new A.XO(h.ax,B.a_,D.fwZ,!0,3.5,i),B.aA),i),B.c,!0),B.aq)],s),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.m),i,i,i,i,B.D1,i,i,i)],s))}p.push(B.aB)
p.push(D.h7q)
return A.p(i,A.x(A.a([r,new A.D(B.a1U,A.x(p,B.am,i,B.e,B.h,0,B.p),i)],s),B.am,i,B.e,B.P,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.m),i,i,i,i,i,i,i,1/0)},
aUy(d,e){var w=null
return A.A(A.a([A.E(A.c(d,w,w,w,w,w,w,D.ada,w,w,w),1),A.c(e,w,w,w,w,w,w,D.fKA,w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
cnt(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.abq(B.ee,u,"Not paid yet")
w=t.A_(null).length
v=w===0?B.b5:B.bE
return this.abq(v,u,C.xA(t.x,!0))},
c9K(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.abq(B.b5,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.abq(B.b5,t,"None yet")
w=A.c("Missed days ("+w+")",u,u,u,u,u,u,D.ada,u,u,u)
v=A.U(d).k("O<1,hi>")
v=A.B(new A.O(d,new C.cau(),v),v.k("aj.E"))
return A.x(A.a([w,B.aj,A.c_(B.bI,v,B.br,u,6,6)],x.p),B.B,u,B.e,B.h,0,B.p)},
abq(d,e,f){var w=null
return A.A(A.a([A.E(A.c(e,w,w,w,w,w,w,D.ada,w,w,w),1),new A.d3(1,B.ci,A.c(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.e1,w,w),w)],x.p),B.B,w,B.e,B.h,0,w,w)}}
C.beL.prototype={
a4(d,e){new A.XO(this.b,B.a_,e,!0,3.5,null).a4(d,e)},
aD(d){return d.b!==this.b}}
C.ar2.prototype={
R(){return new C.aFR(A.a([],x.bp))},
ge9(){return this.c}}
C.aFR.prototype={
a_(){this.a3()
this.JK()},
JK(){var w=0,v=A.j(x.H),u,t=this,s
var $async$JK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a4_(t.a.c),$async$JK)
case 3:s=e
if(t.c==null){w=1
break}t.l(new C.dUp(t,s))
case 1:return A.h(u,v)}})
return A.i($async$JK,v)},
aWw(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aS,s=A.l(v,v,u?B.bv:B.bk,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bv:B.bk).j(0.22)
w=A.m(10)
return A.bC(v,new A.b6(4,r,new A.ax(u,1,B.r,-1)),v,B.bg,v,v,v,v,!0,new A.b6(4,w,new A.ax((this.a.d.a?B.bv:B.bk).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.m(10),D.b7N),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aWv(d){return this.aWw(d,null)},
QH(d){return this.crb(d)},
crb(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QH=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.IT:B.eZ
w=7
return A.b(new A.id().Da(72,900,900,n),$async$QH)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fv(),$async$QH)
case 8:p=f
n=B.cS.gcp().aK(p)
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
if(n!=null)n.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c("Could not pick photo: "+A.v(o),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$QH,v)},
b4T(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aS,o=A.m(10),n=A.K((q?B.bv:B.bk).j(0.18),B.r,1)
if(d)q=B.cZ
else q=s.a.d.a?B.bv:B.bk
q=A.V(e,q,r,r,r,18)
w=A.c(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aS:B.aw,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cZ
else u=s.a.d.a?B.bv:B.bk
t=x.p
u=A.E(A.x(A.a([w,A.c(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.B,r,B.e,B.h,0,B.p),1)
v=A.fv(r,r,r,r,r,r,r,r,r,r,r,B.cZ,r,r,r,r,r,r,r,r,r,r,r,r,r,B.co)
q=A.a([q,B.aa,u,A.bM(!1,A.c(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aI(r,r,r,r,A.V(B.cC,s.a.d.a?B.bv:B.bk,r,r,r,18),r,r,r,g,r,r,r,r,r,B.co))
return A.p(r,A.A(q,B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.m),r,r,r,B.jB,D.bFM,r,r,r)},
E3(d){return this.bFE(d)},
bFD(){return this.E3(null)},
bFE(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$E3=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.az()
r=new A.au(new A.bc(a4,B.b7,B.aP),s)
if(a3)a4=""
else{a4=a5.c
q=B.i.fP(a4)
p=a5.c
a4=a4===q?B.o.v(B.i.M(p)):B.i.a5(p,2)}o=new A.au(new A.bc(a4,B.b7,B.aP),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.bc(a4,B.b7,B.aP),s)
if(a3){a4=new A.W(Date.now(),0,!1).bL(6048e8)
m=A.c1(a4.gck(),a4.gci(),a4.gcB(),0,0,0,0,0)}else{a4=a5.f
m=A.c1(a4.gck(),a4.gci(),a4.gcB(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bt(a4,!0,x.cT)
i=a3?null:A.hql(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.xO?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.i0(B.v.j(0.55),!0,"Dismiss",a4,new C.dU8(),new C.dU9(a2,t,a5,r,new C.dUa(a2,t),o,n,j),B.eI,!0,x.y),$async$E3)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.cA(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.V$=s
r.W$=0
o.V$=s
o.W$=0
n.V$=s
n.W$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.L(x.q).f.T(D.fDy)
w=1
break}a0=a2.d
if(a0==null){t.c.L(x.q).f.T(D.fCc)
w=1
break}a1=A.fVY(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.xO?"male":"female"
w=7
return A.b(A.ajZ(a3,A.hyV(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$E3)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.xO?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a6(a3)
B.d.u(a3,j)
a3=a2.a
a3=A.c1(a3.gck(),a3.gci(),a3.gcB(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c1(a4.gck(),a4.gci(),a4.gcB(),0,0,0,0,0)))a5.cVz(a2.a)
w=8
return A.b(A.ajZ(t.a.c,a5),$async$E3)
case 8:case 5:w=9
return A.b(t.JK(),$async$E3)
case 9:case 1:return A.h(u,v)}})
return A.i($async$E3,v)},
aXb(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cZ.j(0.14)
else w=this.a.d.a?B.a_:B.aS
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cZ
else s=(this.a.d.a?B.bv:B.bk).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.b1m(d,18)
if(g)q=B.cZ
else q=this.a.d.a?B.aS:B.aw
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,A.p(p,A.A(A.a([r,B.ba,A.c(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.D,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.bb,B.h,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.m),p,p,p,p,B.bR,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
Tv(d){return this.cJs(d)},
cJs(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Tv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.i0(B.v.j(0.55),!0,"Dismiss",s,new C.dUs(),new C.dUt(t,d),B.hl,!0,x.y),$async$Tv)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.W(s,0,!1)
case 4:w=7
return A.b(A.ajZ(t.a.c,d),$async$Tv)
case 7:w=8
return A.b(t.JK(),$async$Tv)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Tv,v)},
QG(d,e){return this.bQL(0,e)},
bQL(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$QG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lC(s,"Cancel","Delete",e.b+" \xb7 "+A.BB(e.c)+" will be removed from this device.","Delete this debt?"),$async$QG)
case 3:if(!g){w=1
break}w=4
return A.b(C.fPa(t.a.c,e.a),$async$QG)
case 4:w=5
return A.b(t.JK(),$async$QG)
case 5:case 1:return A.h(u,v)}})
return A.i($async$QG,v)},
ahl(d){return this.ckO(d)},
ckO(d){var w=0,v=A.j(x.H),u=this,t
var $async$ahl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bV(B.L,null,new C.dUm(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$ahl)
case 2:return A.h(null,v)}})
return A.i($async$ahl,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.eHb
w=J.dO(m.d,new C.dUu())
v=A.B(w,w.$ti.k("M.E"))
w=J.dO(m.d,new C.dUv())
u=A.B(w,w.$ti.k("M.E"))
t=B.d.cF(v,0,new C.dUw())
w=A.m(18)
s=m.a.d.a
r=s?D.cGK:D.aEW
q=A.K(s?B.cZ.j(0.35):B.cZ.j(0.18),B.r,1)
s=A.p(l,D.c7_,B.f,l,l,new A.o(B.cZ.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.m),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.ar,A.E(A.c("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.aw,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aG(!1,B.a3,!0,A.m(12),A.aM(!1,A.m(12),!0,D.eGw,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dUx(m),l,l,l,l,l,l,l),B.f,B.cZ,0,l,l,l,l,l,B.ai)],p),B.l,l,B.e,B.h,0,l,l)
o=A.E(m.cFs("Open",""+v.length),1)
n=v.length===0?"$0.00":A.BB(t)
r=A.a([A.p(l,A.x(A.a([s,B.af,A.A(A.a([o,B.aa,A.E(m.bb7(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.h,0,l,l)],p),B.B,l,B.e,B.h,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a8(B.ay,B.aD,B.x,r,l,l),B.m),l,l,l,l,B.anJ,l,l,l),B.aB],p)
if(J.cx(m.d)){w=m.a.d.a
s=w?B.el:B.c
q=A.m(18)
o=A.K((w?B.bv:B.bk).j(0.12),B.r,1)
n=A.p(l,D.c1v,B.f,l,l,new A.o(B.cZ.j(0.12),l,l,A.m(16),l,l,B.m),l,52,l,l,l,l,l,52)
w=A.c("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.aw,l,l,l,l,l,l,l,l,15,l,l,B.D,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.p(l,A.x(A.a([n,B.af,w,B.at,A.c("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bv:B.bk,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.h,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.m),l,l,l,l,D.bIv,l,l,1/0))}else{w=m.gcqp()
s=A.B(new A.O(v,w,A.U(v).k("O<1,w>")),x.l)
if(u.length!==0){q=A.a([B.aj,new A.D(D.bKa,A.c("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bv:B.bk,l,l,l,l,l,l,l,l,12,l,l,B.D,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.u(q,new A.O(u,w,A.U(u).k("O<1,w>")))
B.d.u(s,q)}B.d.u(r,s)}return A.x(r,B.am,l,B.e,B.h,0,B.p)},
bb7(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.v.j(0.22):B.c.j(0.85),s=A.m(14),r=A.K((v.a.d.a?B.bv:B.bk).j(0.12),B.r,1),q=A.c(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bv:B.bk,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cZ
else w=v.a.d.a?B.aS:B.aw
return A.p(u,A.x(A.a([q,B.bt,A.c(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.B,u,B.e,B.h,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.m),u,u,u,u,B.ep,u,u,u)},
cFs(d,e){return this.bb7(!1,d,e)},
cqq(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.A_(j).length,h=d.bkA()
if(d.x!=null){w=d.A_(j).length
v=w===0?B.cZ:B.bE}else if(d.gVb())v=B.bE
else{if(h)w=B.cZ
else w=k.a.d.a?B.bv:B.bk
v=w}if(d.x!=null){w=d.A_(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xA(u,!1)}else{u.toString
t="Paid "+C.xA(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xA(w,!1)+" \xb7 "+i+" missed":"Due "+C.xA(w,!1)}w=k.a.d.a?B.el:B.c
u=A.m(18)
if(d.gVb()&&d.x==null)s=B.bE.j(0.35)
else s=(k.a.d.a?B.bv:B.bk).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.aa(0,B.H,B.v.j(0.04),B.cN,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bs:B.mm
o=A.K(d.gVb()&&d.x==null?B.bE.j(0.45):B.cZ.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hql(d.d)
o=A.p(B.z,A.d6(C.b1m(A.fVY(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aS:B.aw
m=x.p
n=A.a([new A.d3(1,B.ci,A.c(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.D,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaJ6())B.d.u(n,A.a([B.e_,A.V(B.Qd,B.cZ.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.l,j,B.e,B.h,0,j,j),B.cQ,A.c(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.B,j,B.e,B.h,0,B.p),1)
n=A.BB(d.c)
l=k.a.d.a?B.aS:B.aw
n=A.c(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aG(!1,B.a3,!0,j,A.aM(!1,q,!0,new A.D(Aj.anx,A.A(A.a([o,B.bc,p,B.aa,A.x(A.a([n,B.bt,A.V(B.eM,(k.a.d.a?B.bv:B.bk).j(0.5),j,j,j,18)],m),B.dt,j,B.e,B.h,0,B.p)],m),B.l,j,B.e,B.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dUo(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.ai),B.f,j,j,new A.o(w,j,s,u,r,j,B.m),j,j,j,B.d7,j,j,j,j)}}
C.v6.prototype={}
C.an2.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.b9
u=v?B.B:B.l
t=a1.as
s=A.m(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.K(q,B.r,t?1.2:1.6)
p=A.a([new A.aa(0,B.H,B.v.j(0.45),B.cz,16)],x.V)
o=x.p
n=A.a([],o)
m=B.v.j(t?0.07:0.3)
l=A.K(r.j(0.6),B.r,1)
n.push(A.aA(a0,A.p(a0,A.V(B.cC,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a5:B.z
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.j4,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.c(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.aB4,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.HT,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([new A.de(B.dp,m,B.f,A.A(l,B.l,a0,B.e,B.P,0,a0,a0),a0)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bEY,A.c(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cR:B.bo,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fD,A.x(a2,u,a0,B.e,B.P,0,B.p),a0),1))
n.push(D.fxN)
a2=A.a([A.A(n,B.l,a0,B.e,B.h,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.u(a2,A.a([new A.D(B.x0,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a8(B.a5,B.a9,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.m),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lA,A.x(a2,B.l,a0,B.e,B.P,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.m),a0,a0,a0,B.hM,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a8(B.ay,B.aD,B.x,a1.d,a0,a0),B.m),a0,a0,a0,D.bGg,a0,a0,a0,a0)}}
C.aY2.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.b9?B.b9:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.c(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bo:B.cR,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.l,q,B.e,B.h,0,q,q),B.cQ,n],m)
if(p.z)o.push(new A.D(B.ty,n,q))
return new A.D(B.d7,A.x(o,B.l,q,B.e,B.P,0,B.p),q)}}
C.UA.prototype={
R(){return new C.bip()}}
C.bip.prototype={
gc4h(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aF(d,n,x.w).w,l=x.p,k=A.a([D.eH6,D.eHc],l)
for(w=0;w<8;++w){v=D.a6g[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.IH:B.A6
q=t===s
r=A.V(r,q?B.eH:B.bX,n,n,n,17)
q=q?B.c:B.ab
r=A.a([r,B.ba,A.c(v.b,n,n,n,n,n,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.aa,new A.bu(1,B.b8,A.c(v.c,n,1,B.a2,n,n,n,B.Bu,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.ax(B.eH,2,B.r,-1)
s=new A.o(n,n,new A.bE(p,p,p,p),new A.bb(s,s,s,s),n,n,B.m)}else s=n
q=o.a
k.push(A.aA(n,new A.D(B.eY,A.x(A.a([new A.D(B.nf,new A.c2(B.aK,B.e,B.h,B.l,n,B.p,n,0,r,n),n),A.p(n,new A.dw(!0,new C.an2(v,q.d,q.e,new C.djr(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.B,n,B.e,B.h,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.djs(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bGF,A.bI(D.hlg,n,new C.djt(o,d),A.bp(B.b_,n,n,n,n,B.pl,n,n,new A.b9(A.m(16),B.a1),n,n,n)),n))
return A.bo(!0,new A.cS(new A.aX(0,1/0,0,m.a.b*0.9),A.co(k,n,n,D.bL3,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nJ.prototype={
ak(){var w=this
return A.J(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bha(d,e,f){return new C.nJ(this.a,e,d,f)}}
C.IH.prototype={
xa(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.IH(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aHe(d){var w=null
return this.xa(w,w,w,w,w,d,w,w,w,w,w,w)},
cR9(d){var w=null
return this.xa(w,w,w,w,d,w,w,w,w,w,w,w)},
bh8(d,e,f){var w=null
return this.xa(d,w,w,w,w,w,w,w,e,w,f,w)},
cRO(d){var w=null
return this.xa(w,w,w,w,w,w,d,w,w,w,w,w)},
cRX(d){var w=null
return this.xa(w,w,w,w,w,w,w,w,w,d,w,w)},
cR7(d){var w=null
return this.xa(w,w,w,d,w,w,w,w,w,w,w,w)},
cRZ(d){var w=null
return this.xa(w,w,w,w,w,w,w,w,w,w,w,d)},
cR4(d){var w=null
return this.xa(w,w,d,w,w,w,w,w,w,w,w,w)},
cR_(d){var w=null
return this.xa(w,d,w,w,w,w,w,w,w,w,w,w)},
GB(d){var w=null
return this.xa(w,w,w,w,w,w,w,d,w,w,w,w)},
cS6(d,e,f,g,h,i,j,k,l,m,n){return this.xa(d,e,f,g,null,h,i,j,k,l,m,n)},
ak(){var w=this
return A.J(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cOE(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bTS(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.i.M(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cU(d.h(0,n))).length!==0?B.a.i(A.cU(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cU(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.EB.geA(D.EB))
s=i==null?o:B.i.D(i,18,36)
r=l.$2("position",D.a7Y)
q=l.$2("frame",D.a7h)
l=l.$2("texture",D.a7d)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cU(d.h(0,"author"))):o
return this.cS6(p,u,t,q,r,A.ru(d.h(0,"ribbon"))?A.Hf(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a0i.prototype={
R(){return new C.aCP(A.a([],x.I),D.PM)},
ge9(){return this.c}}
C.aCP.prototype={
a_(){var w,v=this
v.a3()
v.f=A.As(0,1)
w=$.az()
v.z=new A.au(B.ax,w)
v.Q=new A.au(B.ax,w)
v.lf()
w=v.a
C.bGs(w.c,w.d).bE(new C.dk7(v),x.fL)},
t(){var w,v=this,u=v.f
u===$&&A.d()
u.t()
u=v.z
u===$&&A.d()
w=$.az()
u.V$=w
u.W$=0
u=v.Q
u===$&&A.d()
u.V$=w
u.W$=0
v.a2()},
lf(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$lf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.M2(s.c,s.d),$async$lf)
case 3:r=e
if(t.c==null){w=1
break}t.l(new C.djW(t,r))
t.ayI()
case 1:return A.h(u,v)}})
return A.i($async$lf,v)},
gavh(){var w,v=this
if(!J.cx(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
ayI(){var w,v,u=this.gavh(),t=this.z
t===$&&A.d()
w=u==null
v=w?null:u.b
t.sb1(0,v==null?"":v)
t=this.Q
t===$&&A.d()
w=w?null:u.c
t.sb1(0,w==null?"":w)},
cj7(d){this.l(new C.djT(this,d))
this.ayI()},
Oy(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Oy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nJ(B.o.v(1000*Date.now()),"Untitled page","",new A.W(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aU6(r.c,r.d,s),$async$Oy)
case 3:w=4
return A.b(t.lf(),$async$Oy)
case 4:if(t.c==null||J.cx(t.d)){w=1
break}q=J.oR(t.d,new C.dju(s))
p=q>=0?q:J.ad(t.d)-1
t.l(new C.djv(t,p))
t.ayI()
r=t.f
r===$&&A.d()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.C8(p+1,B.cp,B.l5),$async$Oy)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Oy,v)},
BL(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$BL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.d()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.d()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gavh()
s=s==null?null:s.a
if(s==null)s=B.o.v(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aU6(o.c,o.d,new C.nJ(s,r,q,new A.W(p,0,!1))),$async$BL)
case 3:w=4
return A.b(t.lf(),$async$BL)
case 4:if(t.c==null){w=1
break}t.l(new C.djX(t))
case 1:return A.h(u,v)}})
return A.i($async$BL,v)},
Pg(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Pg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gavh()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.djD(r),s,null,!0,!0,x.y),$async$Pg)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bGc(s.c,s.d,r.a),$async$Pg)
case 4:t.l(new C.djE(t))
w=5
return A.b(t.lf(),$async$Pg)
case 5:if(t.c!=null){s=t.f
s===$&&A.d()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.d()
s.Ve(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Pg,v)},
zn(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$zn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BL(),$async$zn)
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
return A.b(C.SA(s,r.r,o,p,q),$async$zn)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a7(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hR7(s,r.x,r.r),$async$zn)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.M2(s.c,s.d),$async$zn)
case 10:l=e
for(s=n.d,r=J.cJ(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.I(l,new C.nJ(""+(m+k),q,B.a.i(j.b),new A.W(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.BI(r.c,r.d,l),$async$zn)
case 11:w=12
return A.b(t.lf(),$async$zn)
case 12:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$zn,v)},
a2l(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a2l=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BL(),$async$a2l)
case 5:case 4:if(t.c==null){w=1
break}s=t.gzl(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dr(D.Aw,new C.djU(t),new C.djV())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.n4("Our Family",o,"",""))
for(o=J.aQ(t.d);o.C();){n=o.gP(o)
p.push(new H.n4(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hsd(o,new H.t0(s,r,"",p,new H.vo(q.d,null,null,null,null,"","","")),null),$async$a2l)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a2l,v)},
OY(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$OY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BL(),$async$OY)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bV(D.ais,null,new C.djz(t),s,!0,!0,!0,I.abg,!1,!1,x.N),$async$OY)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cR9(r)
t.l(new C.djA(t,q))
s=t.a
w=7
return A.b(C.Td(s.c,s.d,q),$async$OY)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OY,v)},
Yt(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(D.ais,null,new C.djF(t),r,!0,!0,!0,I.abg,!1,!1,x.e),$async$Yt)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.djG(t,s))
r=t.a
w=4
return A.b(C.Td(r.c,r.d,s),$async$Yt)
case 4:r=t.f
r===$&&A.d()
if(r.f.length!==0)r.C8(0,B.eb,B.nc)
case 1:return A.h(u,v)}})
return A.i($async$Yt,v)},
bWs(d){var w=d.bU(),v=B.a.aZ(B.o.v(w.gci()),2,"0"),u=B.a.aZ(B.o.v(w.gcB()),2,"0")
return""+w.gck()+"-"+v+"-"+u},
gzl(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c3v()
if(r.e)w=D.ah7
else if(J.cx(r.d)){w=r.y
v=r.gzl(0)
u=r.a.f
t=A.c(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fIR,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a4(q,330,new A.D(X.aoU,new C.a_x(w,v,0,q),q),q),B.by,t,B.aj,A.c(u,q,q,q,q,q,q,A.l(q,q,D.l0.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.by],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aA(q,A.p(q,D.frW,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.aa(0,B.H,B.dZ.j(0.45),B.J,18)],x.V),E.xE,B.m),q,q,q,q,B.Pq,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcNH(),q,q,q,q,q,q,!1,B.a4))
w.push(B.S)
w.push(A.hx(D.bYt,D.hkI,r.gaQc(),q))
B.d.u(u,w)}w=A.at(A.cc(A.x(u,B.l,q,B.e,B.P,0,B.p),B.t,q,B.y,q,q,B.eJ,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.c(w,q,q,q,q,q,q,A.l(q,q,D.l0.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.d()
u=r.w?B.e8:B.C5
u=A.x(A.a([new A.D(D.bHK,w,q),A.E(A.K4(v,new C.dk5(r),J.ad(r.d)+1,q,r.gcj6(),u,B.aK),1),r.bID()],x.p),B.l,q,B.e,B.h,0,B.p)
w=u}v=x.p
return A.c7(q,D.a_D,new A.an(B.a0,q,B.b4,B.t,A.a([D.aSx,A.bo(!0,A.x(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c3v(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cK(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.L4(B.eg,"AI",h.gbGq(),!0))
if(h.a.f)f.push(new C.L4(B.m3,"Cover",h.gbRk(),!1))
if(h.a.f)f.push(new C.L4(B.xw,"Header",h.gbMf(),!1))
if(J.cK(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.L4(B.vz,"Print",h.gcsy(),!1))
if(h.a.f&&J.cK(h.d)&&h.r>=0){v=h.w
u=v?B.ho:B.jl
t=v?"Save":"Edit"
f.push(new C.L4(u,t,v?h.gcyW():new C.djQ(h),!1))}if(h.a.f)f.push(new C.L4(B.id,"Add page",h.gaQc(),!1))
v=C.hMv(h.y.Q)
u=h.gzl(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.I)(f),++m){l=f[m]
if(l.d)k=D.dS8
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ax(E.kF.j(0.5),1,B.r,-1)
j=A.p(g,A.V(l.a,D.l0,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bE(i,i,i,i),new A.bb(k,k,k,k),g,new A.a8(B.a5,B.a9,B.x,j,g,g),B.m),g,32,g,g,g,g,g,32)
k=j}j=D.l0.j(0.85)
p.push(new A.bu(1,B.b8,A.aA(B.c_,A.x(A.a([k,B.bt,A.c(l.b,g,1,g,g,g,g,new A.G(!0,j,g,g,g,g,9.5,B.D,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.P,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.an2(v,u,t+" \xb7 "+s+" "+r,new C.djR(h),A.A(p,B.l,g,B.e,B.h,0,g,g),g)},
AF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BL(),$async$AF)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aQ(t.d);r.C();){q=r.gP(r)
s.push(q.b+" "+q.c)}p=H.a4f(B.d.aL(s," "))
s=t.c
s.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.djw(t,p),s,null,!0,!0,x.N),$async$AF)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.zn(),$async$AF)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.ED(),$async$AF)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.Ge("Swahili (Kiswahili)",!0),$async$AF)
case 18:w=16
break
case 17:w=19
return A.b(t.cK7(o==="sw"?"Swahili (Kiswahili)":"English"),$async$AF)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$AF,v)},
a_t(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.K(E.kF.j(0.3),B.r,1),r=x.p
return new A.D(B.cB,A.aM(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.V(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.xE,B.a6),w,42,w,w,w,w,w,42),B.bc,A.E(A.x(A.a([A.c(f,w,w,w,w,w,w,A3.LI,w,w,w),A.c(g,w,w,w,w,w,w,B.Fw,w,w,w)],r),B.B,w,B.e,B.h,0,B.p),1)],r),B.l,w,B.e,B.h,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.m),w,w,w,w,B.bg,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.djS(d,h),w,w,w,w,w,w,w),w)},
ED(){return this.bVW()},
bVW(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$ED=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.djJ(r),a7,null,!0,!0,x.ei),$async$ED)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eL("Working on it\u2026",$.az())
a6.a=!0
a7=r.c
a7.toString
A.cg(null,null,!1,null,new C.djK(o),a7,null,!0,!0,x.H).fA(new C.djL(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.I)(d),++a1){k=d[a1]
J.c8(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.ak()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.Aw[a1]
J.c8(j,i.a)}w=8
return A.b(C.aj2(a0,a7,new C.djM(o),d,l,e,j),$async$ED)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.ac(a8)
n=A.v(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a7(l,!0).e4()
l=o
l.sik($.az())
J.aUB(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.L(x.q).f
j=n
l.T(A.b3(null,null,null,null,null,B.t,null,A.c(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcn(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.am(0,a4)){j=J.t(p,a4)
a7=m.b.h(0,a4).a
a7=j.bha(m.b.h(0,a4).b,a7,new A.W(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.BI(j.c,j.d,l),$async$ED)
case 11:w=12
return A.b(r.lf(),$async$ED)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.Aw[a1].a)
a5=l.cOE(j,12,a7)
l=r.a
w=15
return A.b(C.Td(l.c,l.d,a5),$async$ED)
case 15:if(r.c!=null)r.l(new C.djN(r,a5))
l=r.f
l===$&&A.d()
if(l.f.length!==0&&q.a==="cover")l.C8(0,B.eb,B.nc)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.L(x.q).f
j=A.c(m.a,null,null,null,null,null,null,null,null,null,null)
l.T(A.b3(a3?A.cCZ("Undo",new C.djO(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.em,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ED,v)},
Ge(d,e){return this.cK8(d,e)},
cK7(d){return this.Ge(d,!1)},
cK8(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Ge=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eL("Starting\u2026",$.az())
f.a=!0
k=r.c
k.toString
A.cg(null,null,!1,null,new C.djZ(a0),k,null,!0,!0,x.H).fA(new C.dk_(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.I)(k),++i){n=k[i]
J.c8(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a4w(m,new C.dk0(a0)),$async$Ge)
case 10:w=8
break
case 9:w=11
return A.b(C.bI1(new C.dk1(a0),m,a2),$async$Ge)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.ac(a1)
q=A.v(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a7(o,!0).e4()
o=a0
o.sik($.az())
J.aUB(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.L(x.q).f
k=q
o.T(A.b3(null,null,null,null,null,B.t,null,A.c(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bha(J.t(p,g).b,j.a,new A.W(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.BI(k.c,k.d,o),$async$Ge)
case 12:w=13
return A.b(r.lf(),$async$Ge)
case 13:o=r.c
if(o==null){w=1
break}o=o.L(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.Y(a2,"Swahili")?"Swahili":"English")+"."
k=A.c(k,null,null,null,null,null,null,null,null,null,null)
o.T(A.b3(A.cCZ("Undo",new C.dk2(r,d),null),null,null,null,null,B.t,null,k,null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ge,v)},
bID(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.djx(v):u
r=A.aI(u,u,u,u,A.V(D.bU2,s?D.l0:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cK(v.d)&&!v.w&&v.r>=0)s=A.hx(A.V(B.xh,B.Hg,u,u,u,16),A.c("Delete page",u,u,u,u,u,u,A.l(u,u,B.Hg,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbQV(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.c(s,u,u,u,u,u,u,A.l(u,u,D.l0.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.at(s,u,u,u),1)
w=t<J.ad(v.d)?new C.djy(v):u
return A.bo(!0,new A.D(D.bHz,A.A(A.a([r,s,A.aI(u,u,u,u,A.V(B.eM,t<J.ad(v.d)?D.l0:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.h,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a0m.prototype={
R(){return new C.biO(new A.au(B.ax,$.az()))}}
C.biO.prototype={
ga3u(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.V$=$.az()
w.W$=0
this.a2()},
gbUv(){switch(this.ga3u()){case"cover":var w=D.deS
break
case"book":w=D.d9K
break
default:w=D.dIx
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.m(26),n=E.kF.j(0.5),m=x.p,l=A.A(A.a([D.dS9,B.ar,D.bNh,A.aI(p,p,p,p,B.lE,p,p,p,new C.dlU(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.h,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jL(p,p,p,A.c("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dlV(q),q.ga3u()==="page",p,p,p,p))
if(q.a.d)k.push(A.jL(p,p,p,D.hfb,p,new C.dlW(q),q.ga3u()==="book",p,p,p,p))
k.push(A.jL(p,p,p,D.h1K,p,new C.dlX(q),q.ga3u()==="cover",p,p,p,p))
k=A.c_(B.bI,k,B.br,p,6,8)
j=B.c.j(0.07)
j=A.aN(p,B.M,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bC(p,new A.b6(4,A.m(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kz,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.al,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.ds,!0,B.a7,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbUv(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.c(s,p,p,p,p,p,p,Af.LF,p,p,p)
w.push(A.mS(p,B.c.j(0.08),r,B.hG,new C.dlY(q,s),p,p,p,p))}return A.eI(p,E.CD,A.cc(A.x(A.a([l,B.S,D.hix,B.aj,k,B.af,j,B.N,A.c_(B.bI,w,B.br,p,6,6),B.aB,A.dd(D.bYq,p,D.hjk,new C.dlZ(q,d),A.bp(B.b_,p,p,p,p,B.pl,p,p,new A.b9(A.m(16),B.a1),p,p,p)),B.at,D.hdl],m),B.B,p,B.e,B.P,0,B.p),B.t,p,B.y,p,p,B.f9,p,p,B.ah),p,p,p,B.Po,p,B.dd,p,new A.b9(o,new A.ax(n,1.4,B.r,-1)),p)}}
C.a0k.prototype={
R(){return new C.aCS(A.a([],x.gA))},
ge9(){return this.c}}
C.agO.prototype={}
C.aCS.prototype={
a_(){this.a3()
this.lf()},
lf(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.SE(p.c,p.d),$async$lf)
case 3:o=e
n=A.a([],x.gA)
p=J.aQ(o)
case 4:if(!p.C()){w=5
break}s=p.gP(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bGs(r.c,q),$async$lf)
case 6:j=e
i=J
w=7
return A.b(C.M2(t.a.c,q),$async$lf)
case 7:m.push(new l.agO(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.l(new C.dkm(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lf,v)},
bcr(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Rw(d,e){return this.ckL(0,e)},
ckL(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Rw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a7(s,!1).c9(A.e6(new C.dkl(u,e),!0,null,x.y)),$async$Rw)
case 2:t=g
w=3
return A.b(u.lf(),$async$Rw)
case 3:if(t===!0&&u.c!=null)u.c.L(x.q).f.T(D.aWw)
return A.h(null,v)}})
return A.i($async$Rw,v)},
Gg(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Gg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.L(x.q).f.T(D.aWr)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ain(s.c,s.d),$async$Gg)
case 5:q=e
w=6
return A.b(t.lf(),$async$Gg)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Rw(0,B.d.fg(t.d,new C.dkq(q))),$async$Gg)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.SA(p,s.f,r,n,o),$async$Gg)
case 10:m=e
w=11
return A.b(t.lf(),$async$Gg)
case 11:if(m&&t.c!=null)t.c.L(x.q).f.T(D.aWw)
case 1:return A.h(u,v)}})
return A.i($async$Gg,v)},
QV(d,e){return this.cwA(0,e)},
cwA(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$QV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dkp(t,e),s,null,!0,!0,x.y),$async$QV)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a4H(s.c,s.d,e.a),$async$QV)
case 4:w=5
return A.b(t.lf(),$async$QV)
case 5:case 1:return A.h(u,v)}})
return A.i($async$QV,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)k.push(o.bIG(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.K(E.kF.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aA(n,new A.fM(0.7142857142857143,A.p(n,A.x(A.a([D.dSa,B.af,D.eG7,B.at,A.c(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.l0.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.bb,B.h,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.m),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcND(),n,n,n,n,n,n,!1,B.a4))}w=A.m(22)
v=A.K(E.kF.j(0.85),B.r,1.6)
s=A.aA(n,A.p(n,D.c5I,B.f,n,n,new A.o(B.v.j(0.3),n,A.K(E.kF.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dkr(d),n,n,n,n,n,n,!1,B.a4)
r=A.m(14)
q=B.v.j(0.3)
p=A.K(E.kF.j(0.5),B.r,1)
w=A.p(n,A.A(A.a([s,B.bc,D.bNG,A.p(n,A.c(""+o.d.length+" of 6",n,n,n,n,n,n,D.fHP,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.m),n,n,n,n,B.hm,n,n,n)],l),B.l,n,B.e,B.h,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.cbO,B.m),n,n,n,Aa.Pb,D.bFr,n,n,n)
if(o.e)k=D.ah7
else k=k.length===0?D.bfu:A.cf(new C.dks(k))
return A.c7(n,D.a_D,new A.an(B.a0,n,B.b4,B.t,A.a([D.aSx,A.bo(!0,A.x(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bIG(d){var w,v,u=this,t=null,s=u.bcr(d),r=d.c,q=x.p,p=A.a([A.bT(0,new A.de(B.dI,B.z,B.f,new A.a4(300,420,new C.a_x(d.b,s,r,t),t),t),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aA(t,A.p(t,D.c4X,B.f,t,t,new A.o(B.v.j(0.55),t,A.K(B.aT,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dkj(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.c(s,t,1,B.a2,t,t,t,D.fHr,t,t,t)
v=r===1?"page":"pages"
return A.aA(t,A.x(A.a([new A.fM(0.7142857142857143,new A.an(B.a0,t,B.ad,B.t,p,t),t),B.N,w,A.c(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.l0.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.h,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dkk(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.L4.prototype={}
C.a_x.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dr(D.Aw,new C.cSb(m),new C.cSc()),j=m.c,i=D.EB.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mE:B.bb
v=new C.cSd(h)
i=A.a([new A.aa(0,B.H,B.v.j(0.6),D.eCV,28)],x.V)
u=x.p
t=A.a([A.bT(0,A.b4(l,l,l,new C.bfZ(j.x,h,l),B.aA),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.a5,B.a9,B.x,A.a([B.v.j(0.45),B.L],x.O),l,l),B.m),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cQ(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bb(r,r,r,r),l,l,B.m),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.u(t,A.a([v.$4(D.aoV,8,0.85,2.2),v.$4(D.bKt,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.aoV,8,0.85,2.4))
else if(r==="corners")t.push(A.bT(0,new A.D(D.bKp,A.b4(l,l,l,new C.bfQ(h,l),B.aA),l),0,0,0))
r=A.V(D.aDT[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.c(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.aB4,l,l),B.K,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.af,p,B.af,A.c(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cR,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.u(o,A.a([B.aO,A.c(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.D,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bT(0,new A.D(D.bKV,A.x(o,B.l,l,w,B.h,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b4(l,l,l,new C.aJY(l),D.fwS),l,l,l,46,0,l))
return A.p(l,A.by(D.afH,new A.an(B.a0,l,B.ad,B.t,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.afH,i,new A.a8(B.ay,B.aD,B.x,k.c,l,l),B.m),l,l,l,l,l,l,l,l)}}
C.bfZ.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e3()
g.cT(11)
switch(this.b){case"plain":return
case"linen":$.T()
w=A.L()
w.r=B.v.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=0;t<v;t+=4)d.ah(new A.r(0,t),new A.r(u,t),w)
$.T()
s=A.L()
s.r=B.c.j(0.05).gp(0)
s.c=1
for(r=0;r<u;r+=4)d.ah(new A.r(r,0),new A.r(r,v),s)
break
case"stars":for(v=e.a,u=e.b,q=this.c,p=0;p<70;++p){o=g.ai()
n=g.ai()
m=g.ai()
$.T()
l=new A.ar(B.U,B.R,B.X,B.Y,B.W)
l.r=q.j(0.25+g.ai()*0.5).gp(0)
d.O(new A.r(o*v,n*u),0.6+m*1.6,l)}break
case"rays":v=e.a*0.55
u=e.b
q=u*0.1
for(o=this.c,n=x.v,p=0;p<14;++p){k=0.47123889803846897+p*0.1691626813471427
m=$.T()
l=A.a([],n)
j=new A.aH(m.r,B.ak,null,null,l)
l.push(new A.aZ(v,q))
j.ac()
m=k-0.04
m=new A.aq(v+Math.cos(m)*u*1.4,q+Math.sin(m)*u*1.4)
l.push(m)
i=j.f
if(i!=null)m.aj(i)
j.ac()
m=k+0.04
m=new A.aq(v+Math.cos(m)*u*1.4,q+Math.sin(m)*u*1.4)
l.push(m)
i=j.f
if(i!=null)m.aj(i)
j.ac()
m=new A.bA()
l.push(m)
l=j.f
if(l!=null)m.aj(l)
j.ac()
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=o.j((p&1)===0?0.09:0.03).gp(0)
d.af(j,m)}break
default:$.T()
w=A.L()
w.r=B.v.j(0.07).gp(0)
for(v=e.a,u=e.b,p=0;p<260;++p)d.O(new A.r(g.ai()*v,g.ai()*u),0.8+g.ai()*1.8,w)
$.T()
h=A.L()
h.r=B.c.j(0.035).gp(0)
for(p=0;p<120;++p)d.O(new A.r(g.ai()*v,g.ai()*u),0.6+g.ai()*1.2,h)}},
aD(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bfQ.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.T(),j=A.L(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.ac
j.c=2.4
j.d=B.bG
for(w=e.a,v=e.b,v=[D.fjL,new A.b7([w,0,-1,1]),new A.b7([0,v,1,-1]),new A.b7([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aH(k,B.ak,null,null,s)
s.push(new A.aZ(r+p*34,q))
n.ac()
m=new A.aq(r,q)
s.push(m)
l=n.f
if(l!=null)m.aj(l)
n.ac()
m=new A.aq(r,q+o*34)
s.push(m)
s=n.f
if(s!=null)m.aj(s)
n.ac()
d.af(n,j)
s=new A.ar(B.U,B.R,B.X,B.Y,B.W)
s.r=i.j(0.9).gp(0)
d.O(new A.r(r+p*9,q+o*9),3,s)}},
aD(d){return!d.b.A(0,this.b)}}
C.v7.prototype={}
C.a_T.prototype={
R(){return new C.bfX()}}
C.bfX.prototype={
goC(){var w=this.d
return w===$?this.d=this.a.c:w},
gzl(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.bc(w.b,B.b7,B.aP),$.az())}return v},
gaEn(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.bc(w.c,B.b7,B.aP),$.az())}return v},
gatO(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.bc(w.y,B.b7,B.aP),$.az())}return v},
t(){var w=this,v=w.gzl(0),u=v.V$=$.az()
v.W$=0
v=w.gaEn()
v.V$=u
v.W$=0
v=w.gatO()
v.V$=u
v.W$=0
w.a2()},
aur(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jL(s,s,s,A.c(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.dbc(this,f,u),e===u,s,s,s,s))}return A.c_(B.bI,r,B.br,s,6,8)},
aAe(d){var w=null,v=B.c.j(0.07)
return A.bC(w,new A.b6(4,A.m(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.ma,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goC(),a0=f.gzl(0),a1=a0.a.a,a2=f.gaEn(),a3=a2.a.a,a4=f.gatO(),a5=d.bh8(a4.a.a,a3,a1)
a1=x.w
a3=A.aF(a6,e,a1).w
a1=A.aF(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a4(190,260,new A.de(B.dI,B.z,B.f,new A.a4(270,370,new C.a_x(a5,d,f.a.e,e),e),e),e),e,e,e)
a0=A.aN(e,B.M,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.aAe("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.al,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dbB(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.ds,!0,B.a7,e,B.ao,e,e,e,e)
a2=A.aN(e,B.M,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.aAe("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.al,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dbC(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.ds,!0,B.a7,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.Aw[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aT
q=r.a===q
o=new A.ax(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bE(o,o,o,o),e,e,new A.a8(B.ay,B.aD,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aF
v.push(A.aA(e,A.x(A.a([p,B.cQ,A.c(t.b,e,e,e,e,e,e,new A.G(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dbD(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.c_(B.bI,v,B.br,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b_.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.ax((s===$?f.d=f.a.c:s).d===n?B.eH:B.L,2,B.r,-1)
q.push(A.aA(e,A.p(e,A.V(D.aDT[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bE(o,o,o,o),new A.bb(m,m,m,m),e,e,B.m),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dbE(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.c_(B.bI,q,B.br,e,8,8)
a4=A.aN(e,B.M,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.aAe("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.al,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dbF(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.ds,!0,B.a7,e,B.ao,e,e,e,e)
p=A.c("LETTERING COLOUR",e,e,e,e,e,e,N.wg,e,e,e)
m=A.a([],w)
for(l=D.EB.gdS(D.EB),l=l.gae(l);l.C();){k=l.gP(l)
j=A.b1(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eH:B.aT
g=r.e===i
o=new A.ax(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bE(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aF
m.push(A.aA(e,A.x(A.a([j,B.bt,A.c(i,e,e,e,e,e,e,new A.G(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dbG(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.c_(B.bI,m,B.br,e,8,10)
l=A.c("TITLE SIZE",e,e,e,e,e,e,N.wg,e,e,e)
k=f.goC()
return new A.D(new A.R(0,0,0,a3.f.d),A.bo(!0,new A.cS(new A.aX(0,1/0,0,a1.a.b*0.92),A.co(A.a([D.hcM,B.af,d,B.aO,a0,B.S,a2,B.aB,D.hj5,B.N,v,B.aB,D.hcV,B.N,q,B.aB,a4,B.aB,p,B.N,m,B.aB,l,A.ld(e,9,""+B.i.S(f.goC().f),36,18,new C.dbH(f),k.f),A.c("WHERE THE WORDS SIT",e,e,e,e,e,e,N.wg,e,e,e),B.aj,f.aur(D.a7Y,f.goC().r,new C.dbI(f),D.dLT),B.af,A.c("BORDER",e,e,e,e,e,e,N.wg,e,e,e),B.aj,f.aur(D.a7h,f.goC().w,new C.dbJ(f),D.dLZ),B.af,A.c("COVER MATERIAL",e,e,e,e,e,e,N.wg,e,e,e),B.aj,f.aur(D.a7d,f.goC().x,new C.dbL(f),D.dND),B.aj,A.ja(e,B.b_,e,B.ag,e,new C.dbM(f),e,e,e,D.h6W,f.goC().z),B.by,A.bI(D.hbs,e,new C.dbN(f,a6),A.bp(B.b_,e,e,e,e,B.pl,e,e,new A.b9(A.m(16),B.a1),e,e,e))],w),e,e,S.aoo,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aJY.prototype={
a4(d,e){var w,v,u,t=new A.aH($.T().r,B.ak,null,null,A.a([],x.v))
t.E(new A.aZ(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.bA())
u=A.L()
u.san(D.ccv.az(0,new A.a5(0,0,0+w,0+v)))
d.af(t,u)},
aD(d){return!1}}
C.blm.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.T()
w=A.L()
w.san(D.cbu.az(0,new A.a5(0,0,a2,a3)))
a4.aE(new A.a5(0,0,a2,a3),w)
v=B.i.cG(a1/112)
u=new A.e3()
u.cT(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.deR[u.av(9)]
j=u.av(14)
J.bs(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a5(n,j,n+m,j+l)
h=A.bw(i,B.hF)
g=new A.ar(B.U,B.R,B.X,B.Y,B.W)
f=A.ap(k,B.c,0.12)
f.toString
e=A.ap(k,B.v,0.45)
e.toString
g.san(new A.a8(B.a5,B.a9,B.x,A.a([f,k,e],w),d,d).az(0,i))
a4.aq(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ar(B.U,B.R,B.X,B.Y,B.W)
e.r=E.kF.j(0.55).gp(0)
a4.aE(new A.a5(g,j,h,j+2),e)
e=new A.ar(B.U,B.R,B.X,B.Y,B.W)
e.r=E.kF.j(0.4).gp(0)
a4.aE(new A.a5(g,q,h,p),e)
t.restore()
j=u.av(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.san(D.caM.az(0,new A.a5(0,r,a2,q)))
a4.aE(new A.a5(0,r,a2,q),p)
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.r=B.v.j(0.5).gp(0)
p.y=B.l8
a4.aE(new A.a5(0,q,a2,q+14),p)}t=A.L()
t.r=D.bjj.j(0.72).gp(0)
a4.aE(new A.a5(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.L()
a3.san(new A.bU(B.z,0.5,B.x,d,0,A.a([D.brY.j(0.22),B.L],w),d,d).az(0,A.bY(new A.r(t,a1),a0)))
a4.O(new A.r(t,a1),a0,a3)},
aD(d){return!1}}
C.be5.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aK(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cQ(14,w*2,v*2.2,v*2,o,o,new A.bQ(new A.o(A.ap(D.l0,D.bxj,w/4),o,new A.bE(B.a1,new A.ax(B.v.j(0.12),1,B.r,-1),B.a1,B.a1),B.MT,o,o,B.m),B.bm,o,o),o))}v=x.V
u=A.a([new A.aa(0,B.H,B.v.j(0.35),B.aO6,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.kF.j(0.6),o,o,new A.bb(s,s,s,s),o,o,B.m),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.l,o,B.ru,B.h,0,B.p),B.f,o,o,new A.o(o,o,o,D.b7u,u,D.cct,B.m),o,o,o,o,o,o,o,14)
v=A.a([new A.aa(0,B.H,B.v.j(0.4),B.du,18)],v)
t=A.ao(o,A.b4(o,o,o,new C.aJY(o),D.fwN),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aY2(p.y,r,L.jh,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aN(o,B.M,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bC(o,B.eU,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.jh.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,D.fWF,!0,B.a7,o,B.ao,o,o,o,o),A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.jh.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.E(A.aN(o,B.M,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bC(o,B.eU,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.jh.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.al,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,D.fMT,!0,B.a7,B.Bp,B.ao,o,o,o,o),1)],m),B.am,o,B.e,B.h,0,B.p)
else{n=A.a([A.c(n.b,o,o,o,o,o,o,D.fWx,o,o,o),B.at,A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.jh.j(0.5),o,o,o,o,o,o,o,o,11,B.cR,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.N,A.A(A.a([A.E(A.p(o,o,B.f,D.H0.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fD,A.c("\u2766",o,o,o,o,o,o,A.l(o,o,D.H0.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.H0.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.h,0,o,o),B.aB],m)
if(k.length===0)n.push(A.c("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,L.jh.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Gx(A.cW(A.a([A.cW(o,o,o,o,o,o,o,o,o,D.fQd,B.a.aw(k,0,1)),A.cW(o,o,o,o,o,o,o,o,o,o,B.a.aV(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,L.jh.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cc(A.x(n,B.B,o,B.e,B.h,0,B.p),B.t,o,B.y,o,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.hz,A.c("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,L.jh.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.p(o,A.by(B.MT,new A.an(B.a0,o,B.ad,B.t,A.a([t,new A.D(D.bJX,A.x(s,B.am,o,B.e,B.h,0,B.p),o),A.ao(0,new A.bQ(new A.o(o,o,o,o,o,new A.a8(B.a5,B.a9,B.x,A.a([B.v.j(0.16),B.L],x.O),o,o),B.m),B.bm,o,o),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.MT,v,D.cd0,B.m),o,o,o,o,o,o,o,o),1)],m),B.am,o,B.e,B.h,0,o,o))
return new A.an(B.a0,o,B.ad,B.t,l,o)}}
C.an3.prototype={
R(){return new C.an4(new A.eL(0,$.az()),new C.bVG(),new C.anm(),D.hYl,null,null)},
gd6(){return this.d}}
C.a2z.prototype={
a9(){return"_Step."+this.b}}
C.an4.prototype={
gCX(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bGo(w.c,6,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghi(d){var w,v=this,u=v.e
if(u===$){w=C.Nr(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gUw(){var w=this.ghi(0)
return w.gzE()==null?"Babu":B.a.i(w.gzE().b)},
a_(){var w,v=this
v.a3()
w=v.ghi(0).gzE()
w=w==null?null:w.c
v.r.b=w===D.oU
w=v.q9(new C.bU1(v))
w.fS(0)
v.x!==$&&A.aS()
v.x=w
v.a3q("Come closer, my children. I am "+v.gUw()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
t(){var w=this,v=w.x
v===$&&A.d()
v.t()
v=w.y
if(v!=null)v.a1(0)
v=w.z
if(v!=null)v.a1(0)
w.w.t()
v=w.f
v.V$=$.az()
v.W$=0
w.bxX()},
a3q(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.d1(E.a1m,new C.bTW(w))},
bui(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.l(new C.bU4(v))},
aeW(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bua(){return this.bbZ()},
bbZ(){var w=this,v=w.gCX()[w.as],u=v.e
u=u.length!==0?u:v.d
w.l(new C.bTX(w))
w.a3q(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cC(B.nV,new C.bTY(w))},
cOL(){var w=this
w.l(new C.bU0(w))
w.a3q(w.gCX()[w.as].a)},
LF(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.aeN)return
w=p.gCX()
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
t.r=s.a+1.5}q=new A.e3()
q.cT(v*7+d)
p.l(new C.bU_(p,d,u,q))
p.a3q(u?D.dvV[q.av(4)]+" "+w[p.as].d:D.dsg[q.av(3)]+" "+w[p.as].d)},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCX()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bII(t.at,t.ay,p)
t.l(new C.bU2(t,s))
t.a3q(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.C2(t.a.d,s),$async$kM)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.C3(r.d,r.c.a,"fire",t.at*10),$async$kM)
case 6:t.dy=f
if(t.c!=null)t.l(new C.bU3())
w=1
break
case 4:++t.as
t.bbZ()
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c7(v,D.ZE,new A.an(B.a0,v,B.ad,B.t,A.a([A.bT(0,new A.e8(A.b4(v,v,v,new C.aY7(u,w.r,w.w,u),B.aA),v),0,0,0),A.bo(!0,A.x(A.a([w.ceD(0),B.aW,w.bTG()],t),B.l,v,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
ceD(d){var w,v,u,t=this,s=null,r=A.aI(s,s,s,s,B.Rc,s,s,s,new C.bTZ(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCX().length;++w){v=t.as
if(w<v||t.Q===D.b3M)v=B.d_
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bb(u,u,u,u),s,s,B.m),s,7,s,D.bFb,s,s,s,22))}p=A.E(A.x(A.a([D.h3D,A.A(p,B.l,s,B.e,B.h,0,s,s)],q),B.B,s,B.e,B.h,0,B.p),1)
v=A.m(14)
u=A.K(B.fK,B.r,1)
return new A.D(D.bL7,A.A(A.a([r,p,A.p(s,A.c("\ud83d\udd25 "+B.i.S(t.cy*100)+"%",s,s,s,s,s,s,B.iV,s,s,s),B.f,s,s,new A.o(B.b6,s,u,v,s,s,B.m),s,s,s,s,B.hm,s,s,s)],q),B.l,s,B.e,B.h,0,s,s),s)},
bTG(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghi(0).gzE()
if(h==null)w=1
else w=h.c===D.oU?0:1
v=j.dx
u=j.db
t=D.qP.j(0.96)
s=A.m(22)
r=A.K(B.d_,B.r,3)
q=A.b4(i,i,i,new C.bqZ(w,i),B.aA)
p=A.c(j.Q===D.aeN?j.gUw()+" asks":"Elder "+j.gUw(),i,i,i,i,i,i,D.aXM,i,i,i)
o=j.db
o=B.a.aw(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aA(B.c_,A.A(A.a([new A.a4(62,62,q,i),B.ar,A.E(A.x(A.a([p,B.bt,A.c(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aXZ,i,i,i)],n),B.B,i,B.e,B.h,0,B.p),1)],n),B.B,i,B.e,B.h,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbuh(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.at(j.aaZ("Sit down by the fire",j.gbu9()),i,i,i)
break
case 1:v=A.at(j.aaZ("Ask me, Elder",j.gcOK()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCX()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.ax(D.lR,2.5,B.r,-1)
v.push(A.aA(i,A.p(i,A.c(u[m],i,i,i,i,i,i,D.aXV,B.K,i,i),B.f,i,D.agl,new A.o(D.alU,i,new A.bE(l,l,l,l),new A.bb(q,q,q,q),i,i,B.m),i,i,i,i,B.x4,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bTT(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.c_(B.bI,v,B.br,i,8,8)
break
case 3:v=j.fr
u=v?B.kl:An.arW
u=A.V(u,v?B.es:D.lR,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.c(q,i,i,i,i,i,i,A.l(i,i,v?B.es:D.lR,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCX().length?"Finish":"Next story"
v=A.A(A.a([u,B.aa,q,j.aaZ(v,j.gqs(j))],n),B.l,i,B.e,B.h,0,i,i)
break
case 4:v=A.a([A.c(""+j.at+" of "+j.gCX().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aYc,i,i,i)],n)
u=j.cx
if(u>0){u=C.aSh(u)
q=C.aSh(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.c(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.add,i,i,i))}v.push(B.N)
v.push(j.aaZ("Back to the games",new C.bTU(j)))
v=A.x(v,B.l,i,B.e,B.h,0,B.p)
break
default:v=i}return A.p(i,A.x(A.a([o,B.S,v],n),B.B,i,B.e,B.P,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.aFr,i,B.m),i,i,i,B.zk,B.bg,i,i,i)},
aaZ(d,e){var w=null,v=A.m(16),u=A.K(B.d_,B.r,2)
return A.aA(w,A.p(w,A.c(d,w,w,w,w,w,w,A3.LI,w,w,w),B.f,w,w,new A.o(D.lR,w,u,v,w,w,B.m),w,w,w,w,D.bIQ,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bqZ.prototype={
a4(d,e){O.hrY(d,e.eo(B.J),e.gdl()*0.45,this.b,0,0.4)},
aD(d){return d.b!==this.b}}
C.aCQ.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b6()
this.bC()}}
C.bVG.prototype={}
C.tq.prototype={}
C.br_.prototype={}
C.anm.prototype={
N4(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.ip1(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aY7.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.CE(l.d.N4(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.bs(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bV(0,u)
l.cE4(d,j)
l.bSe(d,j)
l.cMx(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.bs(t.save())
t.translate(225,580)
d.nK(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.T()
q=A.L()
p=x.O
o=x.n
q.san(A.wu(B.J,r,A.a([D.bw_.j(0.55*s),F.Or.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.O(B.J,r,q)
t.restore()
n=A.a([new A.y(528,new C.bVy(l,d,j,i)),new A.y(540,new C.bVz(l,d,j,i)),new A.y(546,new C.bVA(l,d,j,i)),new A.y(574,new C.bVB(l,d,j,i)),new A.y(612,new C.bVC(l,d,j,i)),new A.y(650,new C.bVD(l,d,j,i)),new A.y(656,new C.bVE(l,d,j,i))],x.E)
B.d.b_(n,new C.bVF())
for(m=0;m<7;++m)n[m].b.$0()
l.bIZ(d,j,i)
l.bVU(d,j)
t.restore()
$.T()
t=A.L()
t.san(A.wu(new A.r(w/2,v*0.6),e.gapb()*0.75,A.a([B.L,D.bjc],p),A.a([0.55,1],o),B.x,k,k,0))
d.aE(new A.a5(0,0,0+w,0+v),t)},
aD(d){return d.c!==this.c||d.d!==this.d},
cE4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e3()
h.cT(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.T()
r=new A.ar(B.U,B.R,B.X,B.Y,B.W)
r.r=t.gp(0)
d.O(new A.r(v*450,20+u*300),0.8+s*1.1,r)}q=B.i.F(e,17)/1.2
if(q<1){p=new A.r(60+q*220,70+q*90)
d.ah(p,p.aI(0,D.eCr),C.iS(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.i.F(v+o*0.05,1)
s=-20+n*500
r=120+Math.sin(n*9+o)*14+o*12
m=Math.sin(u+o*2)
l=$.T()
k=A.a([],t)
l=new A.aH(l.r,B.ak,null,null,k)
m=r+m*4
k.push(new A.aZ(s-6,m))
l.ac()
j=r-3
r=new A.ck(s-2,j,s,r)
k.push(r)
i=l.f
if(i!=null)r.aj(i)
l.ac()
s=new A.ck(s+2,j,s+6,m)
k.push(s)
r=l.f
if(r!=null)s.aj(r)
l.ac()
s=new A.ar(B.U,B.R,B.X,B.Y,B.W)
s.b=B.ac
s.c=1.6
s.r=D.blY.gp(0)
s.d=B.bG
s.e=B.dP
d.af(l,s)}},
bSe(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aCo[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bZ(new A.r(p,m),n*0.74,q*0.5)
k=Ad.z5.j(v)
$.T()
j=new A.ar(B.U,B.R,B.X,B.Y,B.W)
j.r=k.gp(0)
d.c1(l,j)
q=A.bZ(new A.r(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=B.wG.j(u).gp(0)
d.c1(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.i.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ar(B.U,B.R,B.X,B.Y,B.W)
o.r=D.ajf.j(0.16*(1-h)).gp(0)
d.O(new A.r(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cMx(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bFK(d,D.eCn,0.9,e,D.hS1,!1,!1,D.b3J,1,!1)
w=$.T().r
v=x.v
u=new A.aH(w,B.ak,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bA())
t=A.L()
t.r=D.alc.gp(0)
d.af(u,t)
C.bFK(d,D.eCp,0.95,e,D.hRQ,!1,!1,D.b3K,1,!0)
t=new A.aH(w,B.ak,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.ck(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.ck(431,553,421,548))
t.E(new A.bA())
u=A.L()
u.r=F.GG.gp(0)
d.af(t,u)
u=A.bZ(D.eCo,8,28)
t=A.L()
t.r=D.byq.gp(0)
d.c1(u,t)
C.bFK(d,new A.r(-30+B.i.F(e/26,1)*510,492),0.82,e,D.hS3,!0,!1,D.Yr,1,!1)
t=B.i.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.c1(A.bZ(new A.r(s+q*16,r-6),16,11),C.iS(D.al3,1.8))
u=q<0
C.bFK(d,new A.r(s-q*6,r),0.62,e,D.hS6,!1,u,D.Yr,2.2,!1)
C.bFK(d,new A.r(s-q*32,r+4),0.58,e+1,D.hRY,!1,u,D.Yr,2.2,!1)
this.bYD(d,D.eC2,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bZ(new A.r(o,n),8,11)
k=p===1
j=k?D.al_:D.alC
i=new A.ar(B.U,B.R,B.X,B.Y,B.W)
i.r=j.gp(0)
d.c1(l,i)
l=k?D.al_:D.alC
k=new A.ar(B.U,B.R,B.X,B.Y,B.W)
k.r=l.gp(0)
d.O(new A.r(o+5,n+(-3+m)),2.6,k)
k=new A.ar(B.U,B.R,B.X,B.Y,B.W)
k.b=B.ac
k.c=1
k.r=B.as.gp(0)
k.d=B.bG
k.e=B.dP
d.ah(new A.r(o+7.5,n+(-2+m)),new A.r(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ar(B.U,B.R,B.X,B.Y,B.W)
k.b=B.ac
k.c=1
k.r=B.as.gp(0)
k.d=B.bG
k.e=B.dP
d.ah(new A.r(o,n+4),new A.r(o,n+8),k)}h=e<f.f
u=A.bZ(D.aa9,15+Math.sin(e*2)*0.8,40)
t=A.L()
t.r=D.ajE.gp(0)
d.c1(u,t)
u=A.bZ(D.aa9.a7(0,new A.r(-14,h?-9:-2)),12,15)
t=A.L()
t.r=D.bob.gp(0)
d.c1(u,t)
t=new A.aH(w,B.ak,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bA())
u=A.L()
u.r=D.boo.gp(0)
d.af(t,u)
u=D.aa9.a7(0,new A.r(-17,h?-9:-2))
t=A.L()
t.r=B.iu.gp(0)
d.O(u,1.1,t)
v=new A.aH(w,B.ak,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.ck(180,588+w*(h?6:0),178,595))
d.af(v,C.iS(D.ajE,3.5))},
bYD(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a7(0,new A.r(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.T()
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.b=B.ac
m.c=2
m.r=D.ZS.gp(0)
m.d=B.bG
m.e=B.dP
d.ah(new A.r(u+o,s),new A.r(u+(o+n*1.5),q),m)}w=A.bZ(k,17,32)
v=$.T()
r=A.L()
r.r=D.GE.gp(0)
d.c1(w,r)
r=A.bZ(k.a7(0,D.eBt),7,26)
w=A.ap(D.GE,B.v,0.12)
w.toString
q=A.L()
q.r=w.gp(0)
d.c1(r,q)
v=new A.aH(v.r,B.ak,null,null,A.a([],x.v))
v.E(new A.aZ(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.bA())
s=A.L()
s.r=D.GE.gp(0)
d.af(v,s)
s=A.bZ(k.a7(0,new A.r(24,-7+l)),9,12)
v=A.L()
v.r=D.GE.gp(0)
d.c1(s,v)
v=-11+l
d.ah(k.a7(0,new A.r(22,v)),k.a7(0,new A.r(21,-17+l)),C.iS(D.ZS,1.6))
d.ah(k.a7(0,new A.r(26,v)),k.a7(0,new A.r(28,-16+l)),C.iS(D.ZS,1.6))
v=k.a7(0,new A.r(26,-8+l))
s=A.L()
s.r=B.v.gp(0)
d.O(v,0.9,s)
d.ah(k.a7(0,new A.r(26,-3+l)),k.a7(0,new A.r(26,1+l)),C.iS(D.brc,1.4))
d.ah(k.a7(0,D.eEm),k.a7(0,new A.r(-19,-7+Math.sin(f*7)*2)),C.iS(D.GE,2.4))},
bVS(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bZ(new A.r(225+u*36,574+(t*13+6)),8,11)
$.T()
t=new A.ar(B.U,B.R,B.X,B.Y,B.W)
t.r=D.bx2.gp(0)
a6.c1(u,t)}}u=A.bZ(D.aab.a7(0,B.cz),17,52)
$.T()
t=A.L()
t.r=D.biL.gp(0)
a6.c1(u,t)
t=A.bZ(D.aab.a7(0,B.cz),12,44)
u=D.bmn.j(0.6+0.3*Math.sin(a7*6))
s=A.L()
s.r=u.gp(0)
a6.c1(t,s)
for(r=0;r<3;++r){v=D.drI[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ar(B.U,B.R,B.X,B.Y,B.W)
o.b=B.ac
o.c=7
o.r=D.GS.gp(0)
o.d=B.bG
o.e=B.dP
a6.ah(new A.r(u+t*24,579+s*4),new A.r(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.Ci.j(0.6)
n=new A.ar(B.U,B.R,B.X,B.Y,B.W)
n.b=B.ac
n.c=2
n.r=t.gp(0)
n.d=B.bG
n.e=B.dP
a6.ah(new A.r(u+o*24,579+(p*4-2)),new A.r(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.ffH,D.fgh,D.fhr,D.fhM,D.fhp]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.buh,D.bqx,D.bws][k]
for(p=l.length,o=k===0,n=1-k*0.15,r=0;r<p;++r){h=l[r]
g=h.b
f=h.c
e=m*g*j*(0.9+0.12*Math.sin(u+f)+0.06*Math.sin(t+f*2))
d=Math.sin(s+f)*5*(e/m)
a0=225+h.a*n
a1=(12+8*a8.w)*g*j
g=$.T()
f=A.a([],q)
a2=new A.aH(g.r,B.ak,null,null,f)
f.push(new A.aZ(a0-a1,578))
a2.ac()
g=a0+d*0.6
a3=new A.i4(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.aj(a4)
a2.ac()
g=new A.i4(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
f.push(g)
a3=a2.f
if(a3!=null)g.aj(a3)
a2.ac()
g=new A.bA()
f.push(g)
f=a2.f
if(f!=null)g.aj(f)
a2.ac()
g=new A.ar(B.U,B.R,B.X,B.Y,B.W)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.i.F(a7*(0.35+B.o.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.F(w,3)
p=G.alA.j((1-a5)*0.9)
$.T()
o=new A.ar(B.U,B.R,B.X,B.Y,B.W)
o.r=p.gp(0)
a6.O(new A.r(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.i.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.ajf.j(0.1*(1-a5))
$.T()
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.r=q.gp(0)
a6.O(new A.r(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bVU(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.i.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.byB.j(0.18*p)
$.T()
n=new A.ar(B.U,B.R,B.X,B.Y,B.W)
n.r=o.gp(0)
d.O(new A.r(r,q),5,n)
n=new A.ar(B.U,B.R,B.X,B.Y,B.W)
n.r=D.bs2.j(0.9*p).gp(0)
d.O(new A.r(r,q),1.4,n)}},
c7R(d,e){switch(d){case 0:return e.b?D.hRS:D.b2Z
case 1:return e.b?D.hS5:D.b2X
case 2:return D.b2W
case 3:return D.b2V
case 4:return D.b2Y
default:return D.b3_}},
aEC(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
RQ(d,e,f,g){var w,v=this,u=D.a7p[e],t=v.c7R(e,g),s=new C.br_(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a7p[e],l=e===0
m=B.i.D(((l?D.aNZ:D.aO4).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.aag
s.as=D.F2
if(l){s.a=o?v.aEC(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.r(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.r(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.F2
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.eBB
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.eCZ
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
s.Q=D.eFi
s.as=D.aOh}if(e===2&&g.x!=null&&f<g.y){s.a=v.aEC(f,5)
s.b=0.4
s.as=new A.r(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aEC(f,e*3)
s.b=0.5
s.c=0.4}}C.hL6(d,u.a,u.b*1.2,t,s,f,e,null)},
bIZ(d,e,f){var w=new C.bVx(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd4(d){return this.c}}
C.agX.prototype={
a9(){return"_Stand."+this.b}}
C.aeS.prototype={}
C.lL.prototype={}
C.bUh.prototype={
bDu(d){var w,v,u,t,s=A.S(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aS()
this.c=s},
Gw(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.b_(r,new C.bUi())
return r},
ass(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.d()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aOk(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
anA(d){var w,v,u=A.aR(x.N),t=d,s=0
for(;;){w=t.d
if(w!=null){v=this.c
v===$&&A.d()
v=v.h(0,w)!=null&&u.I(0,t.a)}else v=!1
if(!v)break
v=this.c
v===$&&A.d()
w=v.h(0,w)
w.toString;++s
t=w}return s},
gzE(){var w=this.b
if(w.length===0)return null
w=A.B(w,x.P)
B.d.b_(w,new C.bUj(this))
return B.d.gG(w)}}
C.avu.prototype={}
C.zR.prototype={}
C.alV.prototype={
gCs(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.X(w,new C.bP3(),A.U(w).k("X<1>")).gJ(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ak(){var w=this
return A.J(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.N9.prototype={
gaqu(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(t.gCs(0))s.push(t)}return s},
ak(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
p.push(A.J(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.J(["id",this.a,"title",q,"qs",p],u,t)},
d5b(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gaqu(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.I)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lL(B.a.i(s.a),p,B.d.cd(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bcf.prototype={}
C.aaV.prototype={}
C.bjE.prototype={}
C.agV.prototype={}
C.ald.prototype={
R(){return new C.ale(B.bH,A.a([],x.cC),A.a([],x.e4),null,null)},
gd6(){return this.d}}
C.ale.prototype={
gNl(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bGo(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gbck(){var w,v=this,u=v.e
if(u===$){w=v.q9(v.gck9())
v.e!==$&&A.bF()
v.e=w
u=w}return u},
a_(){this.a3()
this.gbck().fS(0)},
t(){this.gbck().t()
this.bxS()},
fS(d){this.l(new C.bNb(this))},
cka(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fK(0,v)
if(w.c!=null)w.l(new C.bN6())},
baD(){var w,v,u,t=this,s=t.r
B.d.a6(s)
w=t.gNl()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bjE(u,(u+0.5)/v,w[t.x].b[u]))},
fK(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.br(w,new C.bNc())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.caK()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gNl()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.i.S((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.au_(v,0.8,B.d_)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.au_(m.cy,0.8,G.nH)
m.b_U("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.au_(q,0.88,D.lR)
p=m.gNl()[m.x]
n=p.c
if(u===n){m.b_U("The right gourd fell! It was "+p.b[n]+".")
return}}}},
au_(d,e,f){var w,v,u,t=new A.e3()
t.cT(B.i.S(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.agV(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
b_U(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.QW()}},
caK(){var w=this
if(w.x+1>=w.gNl().length){w.QW()
return}++w.x
w.baD()},
QW(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$QW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gNl().length
r=C.bII(t,u.at,s)
u.ax=r
if(u.c!=null)u.l(new C.bN4())
w=2
return A.b(C.C2(u.a.d,r),$async$QW)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.C3(t.d,t.c.a,"catch",u.z),$async$QW)
case 3:u.cx=e
if(u.c!=null)u.l(new C.bN5())
return A.h(null,v)}})
return A.i($async$QW,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.ceE()
else w=v.ch?v.ceF():A.at(new A.D(B.eJ,A.x(A.a([D.aZb,B.N,D.h5l,B.S,D.hbx,B.ec,C.uH("Play",v.gf1(v),B.d_,B.fO,D.fJ)],x.p),B.l,u,B.e,B.P,0,B.p),u),u,u,u)
return new C.tQ("Calabash Catch",w,B.ff,u)},
ceF(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hQ:B.Iq
p.push(A.V(u,v?B.aC:B.bX,r,r,r,22))}p.push(B.aW)
v=s.x
u=s.gNl()
p.push(A.c(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aXL,r,r,r))
p.push(B.bc)
v=A.m(14)
p.push(A.p(r,A.c(""+s.z,r,r,r,r,r,r,B.iV,r,r,r),B.f,r,r,new A.o(B.bx,r,r,v,r,r,B.m),r,r,r,r,A1.D2,r,r,r))
p=A.A(p,B.l,r,B.e,B.h,0,r,r)
v=A.m(18)
t=A.K(B.d_,B.r,3)
return A.x(A.a([new A.D(D.bGA,p,r),A.p(r,A.c(u[s.x].a,r,r,r,r,r,r,D.fQ5,B.K,r,r),B.f,r,r,new A.o(D.qP,r,t,v,r,r,B.m),r,r,r,B.f2,B.bg,r,r,1/0),B.aj,A.E(A.cf(new C.bNa(s)),1)],q),B.l,r,B.e,B.h,0,B.p)},
ceE(){var w=this,v=null,u=A.at(A.c(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.qr,v,v,v),v,v,v),t=A.at(A.c(""+w.Q+" of "+w.gNl().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.WN,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.co(A.a([D.bgb,u,t,B.aO,new C.IJ(s,r,w.cx,v),B.aO,A.at(C.uH("Back to the games",new C.bN3(w),B.d_,B.kk,D.fJ),v,v,v)],x.p),v,v,B.ae,v,v,B.ah,!1)}}
C.beN.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.T(),a3=A.L()
a3.san(A.jP(B.J,new A.r(0,a0),D.d88,G.aCF,B.x,e))
a4.aE(new A.a5(0,0,a1,0+a0),a3)
a3=A.L()
a3.r=G.Ov.gp(0)
a4.O(new A.r(d*0.82,a0*0.16),22,a3)
a3=x.v
w=A.a([],a3)
v=new A.aH(a2.r,B.ak,e,e,w)
a2=a0*0.7
v.E(new A.aZ(0,a2))
for(u=0;u<=d;u+=6){t=new A.aq(u,a2+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.aj(s)
v.ac()}v.E(new A.aq(d,a0))
v.E(new A.aq(0,a0))
a2=$.T()
w=A.L()
w.r=D.bnl.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aH(a2.r,B.ak,e,e,A.a([],a3))
w=a0*0.86
a2.E(new A.aZ(r-26,w))
t=a0*0.5
s=a0*0.34
a2.E(new A.ck(r-14,t,r-10,s))
a2.E(new A.aq(r+10,s))
a2.E(new A.ck(r+14,t,r+26,w))
a2.E(new A.bA())
w=A.L()
w.r=D.aig.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.csI[q]
s=new A.ar(B.U,B.R,B.X,B.Y,B.W)
s.r=D.aig.gp(0)
s.c=7
s.d=B.bG
a4.ah(new A.r(r,a2),new A.r(r+p*46,w),s)
s=new A.ar(B.U,B.R,B.X,B.Y,B.W)
s.r=D.ahy.gp(0)
a4.O(new A.r(r+p*50,t),18,s)}a2=a0*0.88
w=A.L()
w.r=D.bol.gp(0)
a4.aE(new A.a5(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ar(B.U,B.R,B.X,B.Y,B.W)
t.r=D.ajU.gp(0)
t.c=2
a4.ah(new A.r(w,a1),new A.r(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.I)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.bZ(new A.r(u,s),12,54)
$.T()
l=new A.ar(B.U,B.R,B.X,B.Y,B.W)
l.r=D.lR.j(0.6).gp(0)
a4.c1(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.bs(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.T()
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=D.aiZ.gp(0)
a4.O(D.eAR,14,m)
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=D.btk.gp(0)
m.c=4
m.d=B.bG
a4.ah(D.eAS,D.eBZ,m)
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.san(new A.amO(D.eE6,46,D.dhB,B.vJ,B.x,e,e,0))
a4.O(B.J,34,m)
m=A.bZ(D.eEc,8,12)
l=new A.ar(B.U,B.R,B.X,B.Y,B.W)
l.r=B.c.j(0.35).gp(0)
a4.c1(m,l)
k=new A.j2(new A.eH(n.c,e,e,B.cY,e,e,e,e,e,e,D.fNR),B.K,B.cc,new A.ki(1),e,e,3,e,B.cd,e,B.cK)
k.nA(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bw(A.bZ(B.cN,m.gb4(m)+8,l),B.h2)
l=new A.ar(B.U,B.R,B.X,B.Y,B.W)
l.r=D.qP.gp(0)
a4.aq(j,l)
l=new A.ar(B.U,B.R,B.X,B.Y,B.W)
l.r=D.lR.gp(0)
l.b=B.ac
l.c=1.5
a4.aq(j,l)
l=k.b
m=l.c
l=l.a.c
k.a4(a4,new A.r(-m/2,4-l.gb4(l)/2))
t.restore()}i=a1.cy*d
a2=a1.dx
w=Math.sin(a2*4)
C.isW(a4,new A.r(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dZ,(w+1)/2)
h=A.bZ(new A.r(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aH($.T().r,B.ak,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.E(new A.aZ(w,a2))
t=h.c
a3.E(new A.aq(t,a2))
s=h.d
a3.E(new A.aq(t-8,s))
a3.E(new A.ck(h.gbD().a,s+8,w+8,s))
a3.E(new A.bA())
m=A.L()
m.r=D.a_J.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=D.Ci.gp(0)
m.c=1.4
a4.ah(new A.r(t,a2),new A.r(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.L()
s.r=G.nH.gp(0)
a4.aE(new A.a5(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.L()
s.r=D.bnr.gp(0)
a4.c1(new A.a5(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.I)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=g.e.j(B.i.D(s,0,1)).gp(0)
a4.O(new A.r(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.h_(e,B.cK,e,e,e,A.cW(e,e,e,e,e,e,e,e,e,A.l(e,e,B.d_.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,I.Ec,e,e),"+"+a2),B.a7,B.cc,e,B.e4,B.cd)
k.eL()
k.a4(a4,new A.r(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aD(d){return!0}}
C.Re.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aCO(w.c,w.f,v),B.aA),s=A.m(10),r=A.K(B.bC,B.r,1.4)
return new A.a4(u+22,v,A.x(A.a([new A.a4(u,u,t,v),B.cQ,A.p(v,A.c(w.d,v,1,B.a2,v,v,v,D.fGe,v,v,v),B.f,v,v,new A.o(B.c,v,r,s,v,v,B.m),v,v,v,v,B.ng,v,v,v)],x.p),B.l,v,B.e,B.P,0,B.p),v)},
ga0(d){return this.e}}
C.aCO.prototype={
a4(d,e){var w=e.eo(B.J),v=e.gdl(),u=this.c?0.8:0
return O.hrY(d,w,v*0.44,this.b,0,u)},
aD(d){return d.b!==this.b||d.c!==this.c}}
C.aBe.prototype={}
C.aw4.prototype={
R(){return new C.aw5(A.S(x.S,x.cq),null,null)},
gd6(){return this.d}}
C.aw5.prototype={
gkR(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hQS(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gaGG(){var w=this.z
return w===$?this.z=this.XX(0):w},
gj1(){var w,v=this.Q
if(v===$){w=this.gkR()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c3(w,-1,!1,x.S)}return v},
XX(d){var w,v,u,t,s=this.gkR()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aBe(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aBe(v[t],u[t],-1))
v=new A.e3()
v.cT(this.a.e*31+d)
B.d.dY(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.dr(w,w.r,w.e);w.C();){v=w.d
v.r.t()
v.r=null
u=v.eR$
u.b=!1
B.d.a6(u.a)
u=u.goJ()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.e0$.a.a6(0)
v.qI()}this.byk()},
cUR(d,e){var w,v,u,t,s,r=this
if(d>=r.gj1().length||r.gj1()[d]!==-1||B.d.q(r.gj1(),e))return
w=r.gaGG()[e]
v=r.gkR()[r.e].a
if(w.c<0){++r.f;++r.y
r.l(new C.ctb(r,e,w,v))
A.cC(B.lY,new C.ctc(r))
return}++r.r
u=A.br(null,B.hy,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.l(new C.ctd(r,d,e,w,v))
u.ct(0)},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkR()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cF(n,0,new C.cte())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.l(new C.ctf(t,r))
w=5
return A.b(C.C2(t.a.d,r),$async$kM)
case 5:t.x=f
o=t.a
w=6
return A.b(C.C3(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kM)
case 6:t.ch=f
if(t.c!=null)t.l(new C.ctg())
w=1
break
case 4:for(o=t.as,n=new A.dr(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eR$
p.b=!1
B.d.a6(p.a)
p=p.goJ()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.e0$.a.a6(0)
q.qI()}o.a6(0)
t.l(new C.cth(t))
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.at(A.c(""+r.r+" branches grown",p,p,p,p,p,p,B.qr,p,p,p),p,p,p)
v=r.f
v=A.at(A.c(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.WN,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tQ(q,A.co(A.a([D.ah6,w,v,B.aO,new C.IJ(u,t,r.ch,p),B.aO,A.at(C.uH("Back to the games",new C.ct7(d),B.d_,B.kk,D.fJ),p,p,p)],x.p),p,p,B.ae,p,p,B.ah,!1),B.ff,p)}w=r.gkR()
v=r.e
s=w[v]
return new C.tQ(q,new A.D(B.tB,A.x(A.a([A.c("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aXG,B.K,p,p),A.E(A.cf(new C.ct8(r,s)),1)],x.p),B.l,p,B.e,B.h,0,B.p),p),B.ff,p)}}
C.bee.prototype={
a4(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.X(b2,new C.cTf(),A.U(b2).k("X<1>")).gJ(0),b4=a9.b,b5=b4.a7(0,B.Kt)
$.T()
w=A.L()
w.r=D.lS.j(0.18+0.1*b3).gp(0)
b6.O(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a7(0,D.eAE)
u=A.L()
u.r=B.qR.j(0.5).gp(0)
u.c=10
u.d=B.bG
b6.ah(new A.r(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.eb.aA(0,B.i.D(b2[p],0,1))
l=$.T().r
k=A.a([],s)
j=new A.aH(l,B.ak,b0,b0,k)
k.push(new A.aZ(u,b4))
j.ac()
o=new A.ck((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.aj(n)
j.ac()
if(m<1)for(o=new A.aH(l,j.b,j.c,b0,A.bt(k,!0,r)),n=A.a([],q),i=new A.v5(o,!1,n);i.C();){h=i.c
if(h===0||i.f)A.bi(A.jW(b1));--h
g=new A.C_(i,h)
f=0
for(;;){i.jP()
e=n[h].b
e===$&&A.d()
if(!(f<e.a.length()))break
i.jP()
e=n[h].b
e===$&&A.d()
e=Math.min(e.a.length(),f+7)
d=o.b
a0=A.a([],s)
$.T()
a1=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a1.r=B.aT.gp(0)
a1.b=B.ac
a1.c=3
b6.af(new A.aH(l,d,b0,new A.b7([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aH(l,j.b,j.c,b0,A.bt(k,!0,r)),n=A.a([],q),k=new A.v5(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bi(A.jW(b1));--a0
k.jP()
a1=n[a0].b
a1===$&&A.d()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.T()
a4=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a4.r=D.H6.gp(0)
a4.b=B.ac
a4.c=h
a4.d=B.bG
b6.af(new A.aH(l,a2,b0,new A.b7([new A.C_(k,a0),0,a1*m,!0]),a3),a4)
k.jP()
a4=n[a0].b
a4===$&&A.d()
a4=a4.a.length()
k.jP()
a5=n[a0].Wp(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bZ(new A.r(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a3.r=B.bf.gp(0)
b6.c1(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.j2(D.fFI,B.a7,B.cc,new A.ki(1),b0,b0,b0,b0,B.cd,b0,B.cK)
a8.eL()
a8.a4(b6,new A.r(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aD(d){return!0}}
C.aA0.prototype={
R(){return new C.aA1(A.aR(x.S))},
gd6(){return this.d}}
C.aA1.prototype={
gkR(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hRM(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
a_(){this.a3()
this.baM()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a2()},
baM(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.d1(B.tv,new C.cI8(this))},
brT(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkR()[v.e]
if(w.e[d]===w.b)v.l(new C.cIg(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.l(new C.cIh(v,d))
A.cC(B.j3,new C.cIi(v))}},
d_p(){var w=this
if(!w.as&&w.f<w.gkR()[w.e].d.length)w.l(new C.cIj(w))},
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
t.l(new C.cIk(t,s))
w=5
return A.b(C.C2(t.a.d,s),$async$kM)
case 5:t.y=f
q=t.a
w=6
return A.b(C.C3(q.d,q.c.a,"who",t.r),$async$kM)
case 6:t.ax=f
if(t.c!=null)t.l(new C.cIl())
w=1
break
case 4:t.l(new C.cIm(t))
t.baM()
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.at(A.c(""+a0.w+" of "+a0.gkR().length+" guessed",a2,a2,a2,a2,a2,a2,B.qr,a2,a2,a2),a2,a2,a2)
v=A.at(A.c(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.WN,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tQ(a1,A.co(A.a([D.bgm,w,v,B.aO,new C.IJ(u,t,a0.ax,a2),B.aO,A.at(C.uH("Back to the games",new C.cIa(a3),B.d_,B.kk,D.fJ),a2,a2,a2)],x.p),a2,a2,B.ae,a2,a2,B.ah,!1),B.ff,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkR()
u=x.X
t=x.p
w=A.a([A.c("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.LO,B.K,a2,a2),B.S,A.at(A.lz(new C.cIb(a0,r),a2,B.aZ,B.hy,a2,a2,new A.bq(a2,s,u),x.i),a2,a2,a2),B.aB],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.ax(B.d_,2,B.r,-1)
k=o+1
w.push(new A.rm(new A.bq(0,1,u),new C.cIc(),A.p(a2,new A.c2(B.aK,B.e,B.h,B.l,a2,B.p,a2,0,A.a([new A.qU(A.c(""+k,a2,a2,a2,a2,a2,a2,B.op,a2,a2,a2),D.lR,a2,12,a2),B.ar,new A.bu(1,B.b8,A.c(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fSL,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.o(D.qP,a2,new A.bE(l,l,l,l),new A.bb(m,m,m,m),a2,a2,B.m),a2,a2,a2,B.cB,B.bg,a2,a2,a2),B.aZ,B.j3,a2,new A.bg("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.at(A.bM(!1,D.hjy,a2,a2,!0,a2,a2,a2,a0.gd_o(),a2,a2),a2,a2,a2))
w.push(B.N)
if(a0.as){u=D.lS.j(0.2)
q=A.m(16)
p=A.K(D.lS,B.r,1)
n=a0.e
m=A.c("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fQ,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.p(a2,A.x(A.a([m,B.S,C.uH(v,a0.gqs(a0),B.d_,B.jE,D.fJ)],t),B.l,a2,B.e,B.h,0,B.p),B.f,a2,a2,new A.o(u,a2,p,q,a2,a2,B.m),a2,a2,a2,a2,B.bF,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dx:B.d_.j(0.2)
g=new A.aP(16,16)
l=new A.ax(n.q(0,o)?B.fq:B.d_,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bX:B.c
d=n.q(0,o)?B.y1:a2
t.push(new A.rm(new A.bq(0,i,u),new C.cId(),A.aA(a2,A.p(a2,A.c(f,a2,a2,a2,a2,a2,a2,new A.G(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.age,new A.o(h,a2,new A.bE(l,l,l,l),new A.bb(g,g,g,g),a2,a2,B.m),a2,a2,a2,a2,B.jC,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cIe(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.aZ,B.mq,a2,new A.bg("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.c_(B.fV,t,B.br,a2,10,10))}return new C.tQ(a1,A.co(w,a2,a2,B.anV,a2,a2,B.ah,!1),B.ff,a2)}}
C.aAZ.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b6()
this.bC()}}
C.aIm.prototype={
b0(){this.b8()
this.b6()
this.dU()},
t(){var w=this,v=w.bd$
if(v!=null)v.a8(0,w.gdR())
w.bd$=null
w.a2()}}
C.agJ.prototype={
as0(d){},
asw(){var w=this,v=w.q9(new C.ff2(w))
v.fS(0)
w.Mt$!==$&&A.aS()
w.Mt$=v}}
C.aMc.prototype={
gbof(d){var w=this.c
return B.a.aw(w,0,Math.min(this.d,w.length))},
Wx(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.d1(E.a1m,new C.fpp(w))},
bug(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.anc.prototype={
R(){return new C.and(new C.anm(),A.a([],x.t),new A.eL(0,$.az()),$,0,null,null)},
gd6(){return this.d}}
C.and.prototype={
gNj(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bGo(w.c,10,w.e,!0)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghi(d){var w,v=this,u=v.e
if(u===$){w=C.Nr(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqz(){var w=this.r
return w===$?this.r=new C.aMc(new C.bV3(this)):w},
gaqQ(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gNj()[v].c)u.push(1)
return u.length},
gbny(){var w=this.ghi(0)
return w.gzE()==null?"Elder":B.a.i(w.gzE().b)},
a_(){this.a3()
this.asw()},
t(){var w,v=this
v.gqz().t()
v.f.t()
w=v.Mt$
w===$&&A.d()
w.t()
w=v.qg$
w.V$=$.az()
w.W$=0
v.by_()},
cOX(){var w=this
w.l(new C.bV0(w))
w.gqz().Wx(w.gNj()[w.x].a)},
LF(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqz()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.qg$.a
v.ax=u
v.ay=u+1
v.l(new C.bUZ())
A.cC(B.hy,new C.bV_(v))},
brP(){var w=this.gaqQ(0)/this.gNj().length*100
if(w>=90)return D.fct
if(w>=75)return D.fal
if(w>=60)return D.f0y
if(w>=45)return D.f48
return D.eVN},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cx3()
w=A.bT(0,new A.e8(A.b4(m,m,m,new C.bv5(n,n.qg$),B.aA),m),0,0,0)
if(!n.Q){v=D.qP.j(0.96)
u=A.m(20)
t=A.K(B.d_,B.r,3)
u=A.p(m,A.x(A.a([A.c("Elder "+n.gbny()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aYA,B.K,m,m),B.S,C.uH("Start the test",n.gCi(),B.d_,B.jl,D.fJ)],x.p),B.l,m,B.e,B.P,0,B.p),B.f,m,m,new A.o(v,m,t,u,m,m,B.m),m,m,m,m,B.bF,m,m,m)
v=u}else{v=n.x
u=n.gNj()
v=A.c("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aYC,m,m,m)
if(n.Q){t=n.gqz()
t=t.d<t.c.length}else t=!1
if(t)u=D.fyb
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.ax(D.Ci,4,B.r,-1)
s.push(A.aA(m,A.p(m,A.c(q[r],m,m,m,m,m,m,D.fJz,B.K,m,m),B.f,m,D.age,new A.o(D.bjh,m,new A.bE(o,o,o,o),new A.bb(p,p,p,p),m,m,B.m),m,m,m,m,B.Ph,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bV1(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.c_(B.fV,s,B.br,new A.bg("o"+t,x.W),8,8)}u=A.x(A.a([v,B.aj,A.oU(u,B.nb,A.q8(),B.aZ,B.aZ,A.M_())],x.p),B.l,m,B.e,B.P,0,B.p)
v=u}return new C.tQ("Village School",new A.an(B.a0,m,B.ad,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.ff,m)},
cx3(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.brP(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gNj()[v].c)g.push(v)
u=A.m(22)
t=A.K(B.d_,B.r,4)
s=A.c(j.a.c.b,i,i,i,i,i,i,D.fO9,B.K,i,i)
r=A.c("Signed by Elder "+j.gbny(),i,i,i,i,i,i,D.fML,i,i,i)
q=x.p
p=A.a([A.c(h.a,i,i,i,i,i,i,D.fS5,i,i,i),D.eNl],q)
o=A.c(h.b,i,i,i,i,i,i,D.fU4,i,i,i)
n=j.gaqQ(0)
m=j.gNj()
u=A.p(i,A.x(A.a([D.h4y,B.at,s,r,B.S,new A.an(B.z,i,B.ad,B.t,p,i),o,B.aj,A.c(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.add,i,i,i),B.N,D.auU],q),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(D.qP,i,t,u,i,i,B.m),i,i,i,i,B.f9,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aB,new C.IJ(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aO,D.hkC,B.N],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.I)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.ax(B.bx,1,B.r,-1)
p=m[v]
u.push(A.p(i,A.x(A.a([A.c(p.a,i,i,i,i,i,i,B.hh,i,i,i),B.at,A.c("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fPo,i,i,i),A.c(p.d,i,i,i,i,i,i,D.fRH,i,i,i)],q),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.dx,i,new A.bE(k,k,k,k),new A.bb(r,r,r,r),i,i,B.m),i,i,i,B.cB,B.bg,i,i,i))}B.d.u(s,u)}s.push(B.aB)
s.push(A.at(C.uH("Back to the games",new C.bUV(j),B.d_,B.kk,D.fJ),i,i,i))
return new C.tQ("Village School",A.co(s,i,i,B.bS,i,i,B.ah,!1),B.ff,i)}}
C.bv5.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.qg$.a
a0.CE(e.f.N4(a1))
w=C.hn_(a1)
v=a0.c
J.bs(v.save())
v.translate(w.a,w.b)
a0.bV(0,w.c)
if(e.Q){u=e.gqz()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.d1X[s]-6
$.T()
r=new A.ar(B.U,B.R,B.X,B.Y,B.W)
r.r=D.GS.gp(0)
a0.aE(new A.a5(u,340,u+12,450),r)}u=A.bw(D.ab9.cs(10),B.ik)
$.T()
r=A.L()
r.r=D.Ci.gp(0)
a0.aq(u,r)
r=A.bw(D.ab9,B.iD)
u=A.L()
u.san(A.jP(new A.r(30,96),new A.r(420,346),D.dns,f,B.x,f))
a0.aq(r,u)
q=new A.e3()
q.cT(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bZ(new A.r(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ar(B.U,B.R,B.X,B.Y,B.W)
r.r=B.c.j(0.025).gp(0)
a0.c1(o,r)}u=A.L()
u.r=I.akK.gp(0)
a0.aE(new A.a5(30,354,420,362),u)
u=A.L()
u.r=B.aS.gp(0)
a0.aE(D.fpx,u)
u=A.L()
u.r=B.bM.gp(0)
a0.aE(D.fpB,u)
u=A.bw(D.fpr,B.hr)
r=A.L()
r.r=D.a_J.gp(0)
a0.aq(u,r)
n=B.i.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqz().gbof(0)
m=A.h_(f,B.cK,f,7,f,A.cW(f,f,f,f,f,f,f,f,f,D.fWq,u+(t?"|":"")),B.a7,B.cc,f,B.e4,B.cd)
m.nA(346)
J.bs(v.save())
u=A.hS(D.ab9)
r=$.lD()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.hS(new A.a5(30+390*n,96,420,346)),r[1],!0)
m.a4(a0,new A.r(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bw(new A.a5(u,r,u+40,r+90),B.h2)
u=A.L()
u.r=D.bzu.gp(0)
a0.aq(r,u)}}else{m=A.h_(f,B.cK,f,f,f,D.fFY,B.K,B.cc,f,B.e4,B.cd)
m.nA(340)
m.a4(a0,new A.r(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.i.F(u+p/8,1)
o=B.o.F(e.gqz().d*9,310)
k=Math.sin(p+r)
j=new A.ar(B.U,B.R,B.X,B.Y,B.W)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.O(new A.r(70+o+k*6,166+l*70),1.6,j)}u=e.ghi(0).gzE()
i=(u==null?f:u.c)===D.oU?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.ff3(d,a0,i,t,h,D.eBO)),new A.y(520,new C.ff4(a0,d,t)),new A.y(575,new C.ff5(a0,d,t)),new A.y(585,new C.ff6(this,a0,d,t)),new A.y(615,new C.ff7(this,t,a0,d,h))],x.E)
B.d.b_(g,new C.ff8())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
ceG(d,e){var w,v,u,t,s,r,q,p=$.T(),o=A.a([],x.v),n=new A.aH(p.r,B.ak,null,null,o)
for(p=d.a,w=d.b,v=e*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?e:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new A.aZ(r,q)
o.push(r)
q=n.f
if(q!=null)r.aj(q)
n.ac()}else{r=new A.aq(r,q)
o.push(r)
q=n.f
if(q!=null)r.aj(q)
n.ac()}}n.E(new A.bA())
return n},
aD(d){return!1}}
C.ana.prototype={
R(){return new C.anb(new C.anm(),A.S(x.S,x.i),new A.eL(0,$.az()),$,0,null,null)},
gd6(){return this.d}}
C.anb.prototype={
gkR(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hQH(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gj1(){var w=this.z
return w===$?this.z=this.G4(0):w},
gaMW(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.G4(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.cd(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.G4(0):r).length);++v}s.Q=w
r=w}return r},
G4(d){var w,v,u,t,s=this.gkR()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e5(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e3()
u.cT(this.a.e+d*7)
B.d.dY(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.eH(u,new C.bUH())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
a_(){this.a3()
this.asw()},
t(){var w,v=this
v.e.t()
w=v.Mt$
w===$&&A.d()
w.t()
w=v.qg$
w.V$=$.az()
w.W$=0
v.bxZ()},
as0(d){var w,v,u,t,s,r=this,q=r.gj1().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.cd(u===$?r.z=r.G4(0):u,v)
s=r.gaMW()
s[v]=s[v]+(450*(t+0.5)/q-r.gaMW()[v])*Math.min(1,w)}},
d4R(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj1().length)return
w=v.y
if(w===-1){v.l(new C.bUS(v,d))
return}if(w===d){v.l(new C.bUT(v))
return}v.l(new C.bUU(v,B.d.cd(v.gj1(),v.y),d,B.d.cd(v.gj1(),d)))},
cPF(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.G4(0):u).length))break
t=s.gkR()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.G4(0):u)[v]]===v);++v}s.l(new C.bUN(s,B.d.cw(w,new C.bUO())))},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkR().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.l(new C.bUP(t,s))
w=5
return A.b(C.C2(t.a.d,s),$async$kM)
case 5:t.x=f
q=t.a
w=6
return A.b(C.C3(q.d,q.c.a,"lineup",t.r*10),$async$kM)
case 6:t.ch=f
if(t.c!=null)t.l(new C.bUQ())
w=1
break
case 4:t.l(new C.bUR(t))
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.at(A.c(""+l.r+" of "+l.gkR().length+" lines right",k,k,k,k,k,k,B.qr,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tQ("Line Up",A.co(A.a([D.ah6,w,B.aO,new C.IJ(v,u,l.ch,k),B.aO,A.at(C.uH("Back to the games",new C.bUJ(d),B.d_,B.kk,D.fJ),k,k,k)],x.p),k,k,B.ae,k,k,B.ah,!1),B.ff,k)}w=A.a([],x.t)
for(t=0;v=l.gkR(),t<v[l.f].d.length;++t)w.push(t)
B.d.b_(w,new C.bUK(l))
u=A.bT(0,A.cf(new C.bUL(l)),0,0,0)
s=l.f
r=A.c("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aYC,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.x(A.a([r,A.c(s.a,k,k,k,k,k,k,D.fOC,B.K,k,k),A.c(s.b,k,k,k,k,k,k,D.fQV,B.K,k,k)],q),B.l,k,B.e,B.h,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.v.j(0.7)
o=A.m(16)
n=l.ax
m=A.K(n?D.lS:G.nH,B.r,2)
r.push(A.p(k,A.c(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.O(w,new C.bUM(l),x.cM).aL(0,", then ")+".",k,k,k,k,k,k,D.fT9,k,k,k),B.f,k,k,new A.o(p,k,m,o,k,k,B.m),k,k,k,B.d7,B.bg,k,k,1/0))}if(!l.at)r.push(C.uH("That is my line!",l.gcPE(l),B.d_,B.ho,D.fJ))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uH(w,l.gqs(l),B.d_,B.jE,D.fJ))}return new C.tQ("Line Up",new A.an(B.a0,k,B.ad,B.t,A.a([u,s,A.ao(12,A.x(r,B.l,k,B.e,B.P,0,B.p),k,k,12,12,k,k)],q),k),B.ff,k)}}
C.blu.prototype={
a4(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.qg$.a
c7.CE(c5.e.N4(c8))
w=C.hn_(c8)
v=c7.c
J.bs(v.save())
v.translate(w.a,w.b)
c7.bV(0,w.c)
u=c5.gj1().length
t=$.T().r
s=x.v
r=new A.aH(t,B.ak,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.ck(225,500,440,470))
q=A.L()
q.r=D.a_J.gp(0)
q.b=B.ac
q.c=4
c7.af(r,q)
for(q=c6*3,p=0;p<12;++p){o=30+p*36
n=470+30*Math.sin(3.141592653589793*(o-10)/430)*0.95
m=Math.sin(q+p)
l=A.a([],s)
k=new A.aH(t,B.ak,c4,c4,l)
l.push(new A.aZ(o,n))
k.ac()
m=new A.aq(o+16,n+6+m*3)
l.push(m)
j=k.f
if(j!=null)m.aj(j)
k.ac()
m=new A.aq(o,n+20)
l.push(m)
j=k.f
if(j!=null)m.aj(j)
k.ac()
m=new A.bA()
l.push(m)
l=k.f
if(l!=null)m.aj(l)
k.ac()
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=[B.d_,G.nH,D.lS,B.aH][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b2H(c7,"OLDEST",D.eCM,B.d_)
this.b2H(c7,"YOUNGEST",D.eCe,B.bf)
t=A.bw(D.fpl,B.h2)
s=A.L()
s.r=D.GS.gp(0)
c7.aq(t,s)
s=A.bw(D.fpk,B.iD)
t=A.L()
t.r=D.Ci.gp(0)
c7.aq(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.b_(t,new C.dvl())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.I)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.cd(a1===$?c5.z=c5.G4(0):a1,f)
o=c5.gaMW()[f]
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
if(a3){$.T()
a9=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a9.r=B.d_.j(0.22+0.1*Math.sin(e)).gp(0)
c7.O(new A.r(o,520),54,a9)}a9=D.drw[B.o.F(b0,6)]
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
else b9=a3?D.eEQ:c4
if(b1)c0=new A.r(3+b2*8,-56)
else if(h&&a7)c0=D.aOh
else c0=a3?new A.r(30,-104+Math.sin(e)*5):c4
C.Tb(c7,new A.r(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.Kv,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.j2(new A.eH(a8,c4,c4,B.cY,c4,c4,c4,c4,c4,c4,D.fMf),B.a7,B.cc,new A.ki(1),"\u2026",c4,1,c4,B.cd,c4,B.cK)
c1.nA(q)
c2=A.bw(A.bZ(new A.r(o,650),24,c1.b.c+16),B.h2)
$.T()
a8=new A.ar(B.U,B.R,B.X,B.Y,B.W)
if(a6)a9=B.iM
else a9=a7?B.to:D.qP
a8.r=a9.gp(0)
c7.aq(c2,a8)
a8=new A.ar(B.U,B.R,B.X,B.Y,B.W)
if(a6)a9=D.lS
else a9=a7?G.nH:D.lR
a8.r=a9.gp(0)
a8.b=B.ac
a8.c=2
c7.aq(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a4(c7,new A.r(o-a9/2,650-a8.gb4(a8)/2))
c3=new A.j2(new A.eH(""+(a2+1),c4,c4,B.cY,c4,c4,c4,c4,c4,c4,D.fMz),B.a7,B.cc,new A.ki(1),c4,c4,c4,c4,B.cd,c4,B.cK)
c3.eL()
c3.a4(c7,new A.r(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.i.F(p*53+Math.sin(c5+p)*20,450)
q=B.i.F(t+p*37,420)
J.bs(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bZ(B.J,4,8)
$.T()
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=[B.d_,G.nH,D.lS,B.aH,B.c][B.o.F(p,5)].gp(0)
c7.aE(q,m)
v.restore()}v.restore()},
b2H(d,e,f,g){var w,v,u=null,t=A.h_(u,B.cK,u,u,u,A.cW(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,I.Ec,u,u),e),B.a7,B.cc,u,B.e4,B.cd)
t.eL()
w=t.b
v=w.c
w=w.a.c
t.a4(d,f.aI(0,new A.r(v/2,w.gb4(w)/2)))},
aD(d){return!1}}
C.a2S.prototype={
a9(){return"_Trip."+this.b}}
C.an6.prototype={
R(){return new C.an7(D.Yy,new A.eL(0,$.az()),$,0,null,null)},
gd6(){return this.d}}
C.an7.prototype={
gDR(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bGo(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghi(d){var w,v=this,u=v.e
if(u===$){w=C.Nr(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqz(){var w=this.f
return w===$?this.f=new C.aMc(new C.bUt(this)):w},
gUw(){var w=this.ghi(0)
return w.gzE()==null?"Grandma":B.a.i(w.gzE().b)},
a_(){this.a3()
this.asw()},
t(){var w,v=this
v.gqz().t()
w=v.Mt$
w===$&&A.d()
w.t()
w=v.qg$
w.V$=$.az()
w.W$=0
v.bxY()},
as0(d){var w,v,u,t=this
if(t.r!==D.aeY)return
w=B.dQ.aA(0,B.i.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDR()
if(v+1>=u.length){t.r=D.aeZ
t.Xs()}else{++t.w
t.ay=!1
t.r=D.Yz
t.gqz().Wx(u[t.w].a)}if(t.c!=null)t.l(new C.bUr())}},
Xs(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Xs=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqz().Wx("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDR().length
r=C.bII(t,u.z,s)
u.as=r
w=2
return A.b(C.C2(u.a.d,r),$async$Xs)
case 2:u.at=e
s=u.a
w=3
return A.b(C.C3(s.d,s.c.a,"journey",u.x*10),$async$Xs)
case 3:u.ch=e
if(u.c!=null)u.l(new C.bUl())
return A.h(null,v)}})
return A.i($async$Xs,v)},
bt8(){this.aVG()},
aVG(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.aeY
if(w.c!=null)w.l(new C.bUm())},
LF(d){var w,v,u,t,s=this
if(s.r!==D.Yz)return
w=s.gDR()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.l(new C.bUq(s,d,v))
u=s.gqz()
t=s.w
u.Wx(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cUQ(){if(this.r!==D.BQ)return
this.aVG()},
B(d){var w,v,u,t=this,s=null,r=A.bT(0,new A.e8(A.b4(s,s,s,new C.bkU(t,t.qg$),B.aA),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDR().length;++w){v=t.w
if(w<v||t.r===D.aeZ)v=B.d_
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(new A.bu(1,B.b8,A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bb(u,u,u,u),s,s,B.m),s,7,s,B.xa,s,s,s,s),s))}p.push(B.ba)
p.push(D.h6e)
return new C.tQ("Safari Journey",new A.an(B.a0,s,B.ad,B.t,A.a([r,A.ao(s,A.A(p,B.l,s,B.e,B.h,0,s,s),s,s,12,12,2,s),A.ao(10,t.coB(),s,s,10,10,s,s)],q),s),B.ff,s)},
coB(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bUp(o),l=D.qP.j(0.96),k=A.m(22),j=A.K(B.d_,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.c("A long drive to the village of Elder "+o.gUw()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aYA,B.K,n,n),B.S,C.uH("Start the journey",o.gbt7(),B.d_,D.bUk,D.fJ)],x.p),B.l,n,B.e,B.P,0,B.p)
break
case 3:w=D.bfX
break
case 1:w=o.w
v=o.gDR()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.ax(D.lR,2.5,B.r,-1)
t.push(A.aA(n,A.p(n,A.c(r[s],n,n,n,n,n,n,D.aXV,B.K,n,n),B.f,n,D.agl,new A.o(D.alU,n,new A.bE(p,p,p,p),new A.bb(q,q,q,q),n,n,B.m),n,n,n,n,B.x4,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bUn(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.N,A.c_(B.bI,t,B.br,n,8,8)],u),B.B,n,B.e,B.P,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDR().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.N,new A.bK(B.a9,n,n,C.uH(v,o.gcUP(),B.d_,B.jE,D.fJ),n)],x.p),B.B,n,B.e,B.P,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gUw()),B.N,A.c(""+o.x+" of "+o.gDR().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aYc,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aSh(v)
u=C.aSh(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.c(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.add,n,n,n))}w.push(B.N)
w.push(A.at(C.uH("Back to the games",new C.bUo(o),B.d_,B.kk,D.fJ),n,n,n))
w=A.x(w,B.B,n,B.e,B.P,0,B.p)
break
default:w=n}return A.p(n,w,B.f,n,n,new A.o(l,n,j,k,D.aFr,n,B.m),n,n,n,n,B.bg,n,n,n)}}
C.bkU.prototype={
a4(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.qg$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDR(),d0=B.i.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.aeY,d2=c7*0.5
c8=A.ap(D.bkO,D.bvI,d0)
c8.toString
w=A.ap(D.ZU,G.ajv,d0)
w.toString
v=A.ap(B.uU,D.bu2,d0)
v.toString
$.T()
u=A.L()
t=x.O
u.san(A.jP(B.J,new A.r(0,d2),A.a([c8,w,v],t),G.a5U,B.x,c3))
d3.aE(new A.a5(0,0,0+c6,0+c7),u)
s=new A.r(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.L()
u.san(A.wu(s,60,A.a([D.bur,B.L],t),c3,B.x,c3,c3,0))
d3.O(s,60,u)
u=A.L()
u.r=B.a_6.gp(0)
d3.O(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.i.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dI5[o]
$.T()
u=new A.ar(B.U,B.R,B.X,B.Y,B.W)
u.r=B.c.j(0.75).gp(0)
d3.O(new A.r(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.T()
j=A.a([],m)
i=new A.aH(k.r,B.ak,c3,c3,j)
j.push(new A.aZ(0,v))
i.ac()
for(k=u-l*12,h=0.12+l*0.1,g=70+l*30,f=14-l*3,q=0;q<=c6;q+=6){e=new A.aq(q,k+Math.sin((q+c4.CW*h)/g)*f)
j.push(e)
d=i.f
if(d!=null)e.aj(d)
i.ac()}k=new A.aq(c6,v)
j.push(k)
j=i.f
if(j!=null)k.aj(j)
i.ac()
$.T()
k=new A.ar(B.U,B.R,B.X,B.Y,B.W)
k.r=A.ap(l===0?D.bjk:D.byT,D.bou,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.ceH(d3,new A.r(B.i.F(B.i.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.T()
w=A.L()
v=A.ap(D.al3,D.H6,d0)
v.toString
w.san(A.jP(new A.r(0,d2),new A.r(0,c7),A.a([v,D.but],t),c3,B.x,c3))
d3.aE(new A.a5(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.L()
w.r=D.bnH.gp(0)
d3.aE(new A.a5(0,a0,c6,a1),w)
w=A.L()
w.r=D.byu.gp(0)
d3.aE(new A.a5(0,a0-3,c6,a0),w)
for(q=-B.i.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ar(B.U,B.R,B.X,B.Y,B.W)
u.r=I.NK.gp(0)
d3.aE(new A.a5(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.T()
b2=new A.ar(B.U,B.R,B.X,B.Y,B.W)
b2.r=D.biZ.gp(0)
d3.aE(new A.a5(b0,v,b0+52,u),b2)
b2=A.a([],m)
b1=new A.aH(b1.r,B.ak,c3,c3,b2)
b2.push(new A.aZ(a9-36,t))
b1.ac()
b0=new A.aq(a9,a6)
b2.push(b0)
b3=b1.f
if(b3!=null)b0.aj(b3)
b1.ac()
b0=new A.aq(a9+36,t)
b2.push(b0)
b3=b1.f
if(b3!=null)b0.aj(b3)
b1.ac()
b0=new A.bA()
b2.push(b0)
b2=b1.f
if(b2!=null)b0.aj(b2)
b1.ac()
b0=new A.ar(B.U,B.R,B.X,B.Y,B.W)
b0.r=D.bwB.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ar(B.U,B.R,B.X,B.Y,B.W)
b1.r=D.fJ.gp(0)
d3.aE(new A.a5(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ar(B.U,B.R,B.X,B.Y,B.W)
b0.r=D.GS.gp(0)
d3.aE(new A.a5(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bw(new A.a5(b0,a4,b0+60,a5),B.jJ)
b0=new A.ar(B.U,B.R,B.X,B.Y,B.W)
b0.r=D.bA_.gp(0)
d3.aq(b5,b0)
b0=new A.ar(B.U,B.R,B.X,B.Y,B.W)
b0.r=D.Ci.gp(0)
b0.b=B.ac
b0.c=2
d3.aq(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.j2(new A.eH(b6,c3,c3,B.cY,c3,c3,c3,c3,c3,c3,D.fKF),B.a7,B.cc,new A.ki(1),c3,c3,c3,c3,B.cd,c3,B.cK)
b7.eL()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a4(d3,new A.r(b4-b1/2,a2-b0.gb4(b0)/2))
if(a7)b8=c4.r===D.aeZ
else if(r===c4.w){b0=c4.r
b0=b0===D.Yz||b0===D.BQ
b8=b0}else b8=!1
if(a7){b0=c4.ghi(0).gzE()
b9=(b0==null?c3:b0.c)===D.oU?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqz()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.BQ
b0=c0?C.hMB(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.Yz?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.r(40,-110+Math.sin(g)*10)
else a7=c0?new A.r(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.Tb(d3,new A.r(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.r(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bKm(d3,new A.r(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.i.F(w+r/7,1)
$.T()
t=new A.ar(B.U,B.R,B.X,B.Y,B.W)
t.r=D.bxY.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.Yy)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.i.F(w+r/5,1)
t=Math.sin(r+c8)
$.T()
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.BQ&&c4.ax){b7=A.h_(c3,B.cK,c3,c3,c3,A.cW(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,B.d_,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,A7.Jt,c3,c3),"BEEP BEEP!"),B.a7,B.cc,c3,B.e4,B.cd)
b7.eL()
b7.a4(d3,new A.r(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
ceH(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ap(D.btX,D.bn_,g)
o.toString
if(f){w=new A.aH($.T().r,B.ak,null,null,A.a([],x.v))
v=e.a
u=e.b
w.E(new A.aZ(v-16,u))
t=u-36
s=u-56
w.E(new A.ck(v-9,t,v-7,s))
w.E(new A.aq(v+7,s))
w.E(new A.ck(v+9,t,v+16,u))
w.E(new A.bA())
t=A.L()
t.r=D.a0f.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d69[r]
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.r=D.a0f.gp(0)
p.c=4
p.d=B.bG
d.ah(new A.r(w,t),new A.r(v+q*24,s),p)
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.r=o.gp(0)
d.O(new A.r(v+q*26,u),10,p)}}else{w=e.a7(0,D.eEN)
$.T()
v=A.L()
v.r=D.bj0.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bZ(e.a7(0,D.eEO),16,60)
w=A.L()
w.r=o.gp(0)
d.c1(v,w)}},
bKm(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.Yy?0.045:0,a1=a2.c
J.bs(a1.save())
a1.translate(a3.a,a3.b+e)
a2.js(0,a0)
for(w=0;w<2;++w){v=D.dzK[w]
u=d.ay&&d.r!==D.Yy&&v>0
J.bs(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.T()
s=new A.ar(B.U,B.R,B.X,B.Y,B.W)
s.r=D.byK.gp(0)
a2.O(B.J,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ar(B.U,B.R,B.X,B.Y,B.W)
s.r=D.bqE.gp(0)
a2.O(B.J,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ar(B.U,B.R,B.X,B.Y,B.W)
q.r=B.bk.gp(0)
q.c=2
a2.ah(B.J,new A.r(s*9,t*9),q)}a1.restore()}p=A.ra(D.fpI,B.h2,B.h2,B.i6,B.hT)
$.T()
t=A.L()
t.san(A.jP(D.eAU,B.aa4,D.doR,G.a5U,B.x,f))
a2.aq(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ar(B.U,B.R,B.X,B.Y,B.W)
s.r=D.din[B.o.F(o,4)].gp(0)
a2.aE(new A.a5(t,-26,t+10,-19),s)}n=d.r===D.BQ&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a5(s,-66,q,-36)
J.bs(a1.save())
a1.clipRRect(A.ne(A.bw(l,B.pi)),$.mR(),!0)
k=new A.ar(B.U,B.R,B.X,B.Y,B.W)
k.r=D.ZU.gp(0)
a2.aE(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.BQ?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.Tb(a2,new A.r(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aO8,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bw(l,B.pi)
i=new A.ar(B.U,B.R,B.X,B.Y,B.W)
i.r=D.alW.gp(0)
i.b=B.ac
i.c=2
a2.aq(j,i)}d=A.bw(D.VU,B.pi)
t=A.L()
t.r=D.ZU.gp(0)
a2.aq(d,t)
J.bs(a1.save())
a1.clipRRect(A.ne(A.bw(D.VU,B.pi)),$.mR(),!0)
C.Tb(a2,new A.r(D.VU.gbD().a,-10),0,0,0.7,-0.1,f,f,D.aO8,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bw(D.VU,B.pi)
d=A.L()
d.r=D.alW.gp(0)
d.b=B.ac
d.c=2
a2.aq(t,d)
d=A.L()
d.r=Aq.CH.gp(0)
a2.O(D.eD1,4,d)
d=A.L()
d.r=D.GS.gp(0)
a2.aE(D.fqR,d)
for(w=0;w<3;++w){v=D.dzM[w]
d=A.bw(new A.a5(v,-96,v+28,-79),B.jJ)
t=new A.ar(B.U,B.R,B.X,B.Y,B.W)
t.r=D.H6.gp(0)
a2.aq(d,t)}a1.restore()},
aD(d){return!1}}
C.aCR.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b6()
this.bC()}}
C.bir.prototype={}
C.aCT.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b6()
this.bC()}}
C.bis.prototype={}
C.aCU.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b6()
this.bC()}}
C.bit.prototype={}
C.a7n.prototype={
B(d){var w=null
return new A.a4(1/0,this.c,A.b4(w,w,w,new C.bl0(w),B.aA),w)}}
C.bl0.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dxB[B.o.F(n,6)]
k=$.T()
j=new A.ar(B.U,B.R,B.X,B.Y,B.W)
j.r=l.gp(0)
d.aE(new A.a5(m,0,m+v,u),j)
if(B.o.F(n,3)===0){j=A.a([],o)
i=new A.aH(k.r,B.ak,null,null,j)
k=m+r
j.push(new A.aZ(k,f))
i.ac()
h=new A.aq(m+p,s)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.ac()
k=new A.aq(k,q)
j.push(k)
h=i.f
if(h!=null)k.aj(h)
i.ac()
k=new A.aq(m+t,s)
j.push(k)
h=i.f
if(h!=null)k.aj(h)
i.ac()
k=new A.bA()
j.push(k)
j=i.f
if(j!=null)k.aj(j)
i.ac()
k=new A.ar(B.U,B.R,B.X,B.Y,B.W)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aD(d){return!1}}
C.tQ.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aI(w,w,w,w,B.Rc,w,w,w,new C.bUk(d),w,w,w,w,w,w),A.E(A.c(this.c,w,1,B.a2,w,w,w,D.fHT,w,w,w),1)],v)
B.d.u(u,this.e)
return A.c7(w,D.ZE,A.p(w,A.bo(!0,A.x(A.a([D.c9p,new A.D(D.bLb,A.A(u,B.l,w,B.e,B.h,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.bbc,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.IJ.prototype={
B(d){var w=null,v=this.d,u=C.aSh(v),t=C.ivE(v),s=B.c.j(0.08),r=A.m(18),q=A.K(B.d_.j(0.6),B.r,1.5),p=A.a([A.c("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fKq,w,w,w)],x.p)
if(this.e)p.push(D.eHe)
p.push(B.aj)
p.push(A.c(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.hh,w,w,w))
if(t!=null)p.push(new A.D(B.r7,A.c(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.Fw,w,w,w),w))
return A.p(w,A.x(p,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.m),w,w,w,w,B.bF,w,w,w)}}
C.WX.prototype={
R(){return new C.bnP(A.S(x.N,x.S),B.o.F(Date.now(),1e5))},
d0Q(d){return this.f.$1(d)},
ge9(){return this.d}}
C.bnP.prototype={
gTx(){var w=this.d
return w===$?this.d=this.a.c:w},
a_(){this.a3()
this.Q6()},
Q6(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Q6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bV5(u.a.d),$async$Q6)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.dmO[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bV4(p,(o===$?u.d=q.c:o).a,r),$async$Q6)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.l(new C.e68(u,n))
return A.h(null,v)}})
return A.i($async$Q6,v)},
uG(d){return this.crH(d)},
crH(d){var w=0,v=A.j(x.H),u=this,t
var $async$uG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a7(t,!1).c9(A.e6(new C.e69(d),!1,null,x.H)),$async$uG)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.Q6()
return A.h(null,v)}})
return A.i($async$uG,v)},
gb88(){var w,v,u,t=C.Nr(this.gTx()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)s.push(B.a.i(w[u].b))
return s},
a3j(d){return this.cz0(d)},
cz0(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a3j=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.I)(d),++s)r.push(d[s].ak())
w=2
return A.b(u.a.d0Q(r),$async$a3j)
case 2:if(u.c!=null)u.l(new C.e6a(u,r))
return A.h(null,v)}})
return A.i($async$a3j,v)},
Pq(d){return this.bTc(d)},
bTc(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Pq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hpo(t.gTx())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.N9("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a7(s,!1).c9(A.e6(new C.e66(q),!1,null,r)),$async$Pq)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.I)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bl(j,new C.e67(p))
o=s.length
B.d.ce(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a3j(A.cV(s,0,A.dz(2,"count",x.S),r).df(0)),$async$Pq)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Pq,v)},
Yo(d,e){return this.bQM(0,e)},
bQM(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$Yo=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cg(null,null,!0,null,new C.e65(e),o,null,!0,!0,x.y),$async$Yo)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hpo(u.gTx()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.I)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a3j(o),$async$Yo)
case 5:case 3:return A.h(null,v)}})
return A.i($async$Yo,v)},
ab6(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e62(this,j):h
o=o?0.55:1
w=A.ap(g,B.v,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.m(20)
u=A.K(B.aT,B.r,1)
t=A.a([new A.aa(0,B.H,g.j(0.35),B.cz,12)],x.V)
s=x.p
r=A.a([A.c(d,p,p,p,p,p,p,B.WI,p,p,p),B.aW],s)
q=A.m(10)
r.push(A.p(p,A.c(i,p,p,p,p,p,p,D.fIN,p,p,p),B.f,p,p,new A.o(B.i0,p,p,q,p,p,B.m),p,p,p,p,B.zz,p,p,p))
return A.aA(p,A.d6(A.p(p,A.x(A.a([A.A(r,B.l,p,B.e,B.h,0,p,p),B.aW,A.c(e,p,2,p,p,p,p,D.fQO,p,p,p),B.cQ,A.c(f,p,3,B.a2,p,p,p,D.fJx,p,p,p)],s),B.B,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a8(B.ay,B.aD,B.x,w,p,p),B.m),p,p,p,p,B.x2,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
XS(d,e,f,g,h,i){return this.ab6(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.Nr(s.gTx()),p=s.gTx(),o=C.aSh(s.e),n=C.hpo(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e6b(s),k=C.hQH(p,1).length,j=C.hQS(p,1).length,i=C.hRM(p,1).length,h=B.c.j(0.07),g=A.m(20),f=A.K(B.d_.j(0.5),B.r,1),e=A.c(o.b,r,r,r,r,r,r,K.ad0,r,r,r),d=A.c(o.a,r,r,r,r,r,r,D.fOd,r,r,r),a0=q.b.length,a1=x.p
g=A.p(r,A.A(A.a([e,B.bc,A.E(A.x(A.a([d,A.c(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.X_,r,r,r)],a1),B.B,r,B.e,B.h,0,B.p),1),A.x(A.a([A.c(""+s.e,r,r,r,r,r,r,B.qr,r,r,r),D.hcy],a1),B.l,r,B.e,B.h,0,B.p)],a1),B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.o(h,r,f,g,r,r,B.m),r,r,r,r,B.bF,r,r,r)
f=s.XS("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.az,new C.e6c(s,p),l.$1("kahoot"))
h=s.XS("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lR,new C.e6d(s,p),l.$1("fire"))
a0=s.XS("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.wR,new C.e6e(s,p),l.$1("catch"))
j=j!==0?new C.e6h(s,p):r
j=s.ab6("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hY,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e6i(s,p):r
i=s.ab6("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.lQ,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.XS("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.fv,new C.e6j(s,p),l.$1("journey"))
k=k!==0?new C.e6k(s,p):r
k=A.a([g,B.aO,D.hgD,B.N,A.lc(0.98,A.a([f,h,a0,j,i,e,s.ab6("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.es,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.XS("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.de,new C.e6l(s,p),l.$1("school"))],a1),2,12,12,r,B.e8,!0),B.di,A.A(A.a([D.bN0,A.c(""+n.length+" of 2",r,r,r,r,r,r,D.fIS,r,r,r)],a1),B.l,r,B.e,B.h,0,r,r),B.N],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.I)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.ax(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fY0,B.bc,new A.bu(1,B.b8,A.x(A.a([A.c(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.ht,r,r,r),A.c(""+v.gaqu(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.Fw,r,r,r)],a1),B.B,r,B.e,B.h,0,B.p),r)],a1)
if(v.gaqu(0).length>=2){f=D.lS.j(0.2)
t=new A.ax(D.lS,1,B.r,-1)
g.push(A.aA(r,A.p(r,A.V(B.fO,D.lS,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e6m(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.d_.j(0.2)
t=new A.ax(B.d_,1,B.r,-1)
f=A.aA(r,A.p(r,A.V(B.jl,B.d_,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e6n(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fq.j(0.2)
t=new A.ax(B.fq,1,B.r,-1)
B.d.u(g,A.a([B.ba,f,B.ba,A.aA(r,A.p(r,A.V(B.eq,B.fq,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e6o(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.p(r,new A.c2(B.aK,B.e,B.h,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bE(u,u,u,u),new A.bb(h,h,h,h),r,r,B.m),r,r,r,B.d7,B.bg,r,r,r))}if(s.a.e){j=m?new C.e6f(s):new C.e6g(a2)
i=A.m(18)
h=A.K(m?B.d_:B.aT,B.r,2)
g=m?B.d_.j(0.12):B.dx
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aA(r,A.p(r,A.at(A.c(f,r,r,r,r,r,r,A.l(r,r,m?B.d_:B.aF,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.m),r,r,r,r,B.P6,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.hhz)
k.push(B.aB)
k.push(D.auU)
return new C.tQ("Family Games \xb7 "+p.b,A.co(k,r,r,D.bHb,r,r,B.ah,!1),B.ff,r)}}
C.a0K.prototype={
a9(){return"_KPhase."+this.b}}
C.an8.prototype={
R(){return new C.an9(D.b2Q)},
gd6(){return this.e}}
C.an9.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a2()},
fS(d){var w,v=this
v.l(new C.bUF(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.d1(B.fp,new C.bUG(v))},
aR8(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.l(new C.bUv(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.d1(B.fo,new C.bUw(w))},
LF(d){var w
if(this.d!==D.aet)return
w=this.at
if(w!=null)w.a1(0)
this.b84(d)},
b84(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.i.S(500+500*B.i.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.l(new C.bUB(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cC(B.tv,v.giA(v))},
cOg(d){var w=this
if(w.d!==D.Y4)return
if(w.e+1>=w.a.w.length)w.Zb()
else{w.l(new C.bUC(w))
w.aR8()}},
Zb(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Zb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bII(p,u.w,t)
u.l(new C.bUy(u,s))
w=2
return A.b(C.C2(u.a.e,s),$async$Zb)
case 2:r=e
t=u.a
w=3
return A.b(C.C3(t.e,t.f,t.r,u.f),$async$Zb)
case 3:q=e
if(u.c!=null)u.l(new C.bUz(u,r,q))
return A.h(null,v)}})
return A.i($async$Zb,v)},
cP5(){var w,v,u,t,s=this,r=s.a,q=new A.e3()
q.cT(r.w.length*31+B.a.gZ(r.f))
w=s.a.w.length*900
v=A.a([new A.b0("You",s.f,!0)],x.bd)
r=A.B(s.a.x,x.N)
B.d.dY(r,q)
for(r=A.cV(r,0,A.dz(4,"count",x.S),A.U(r).c),u=r.$ti,r=new A.bR(r,r.gJ(0),u.k("bR<aj.E>")),u=u.k("aj.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b0(t,B.i.S(w*(0.35+q.ai()*0.5)),!1))}B.d.b_(v,new C.bUD())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b2Q===r){w=A.a([D.hcX,B.S,A.c(s,t,t,t,t,t,t,B.X9,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.c(v,t,t,t,t,t,t,D.fJ_,t,t,t))
w.push(B.aB)
w.push(A.c(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.BA,B.K,t,t))
w.push(B.ec)
w.push(C.uH("Play",u.gf1(u),B.d_,B.fO,D.fJ))
w=A.at(new A.D(B.eJ,A.x(w,B.l,t,B.e,B.P,0,B.p),t),t,t,t)
break A}if(D.b2R===r){w=A.at(A.c(""+u.z,t,t,t,t,t,t,D.fRm,t,t,t),t,t,t)
break A}if(D.aet===r||D.Y4===r){w=u.cul()
break A}if(D.b2S===r){w=u.ceI()
break A}w=t}return new C.tQ(s,w,B.ff,t)},
cul(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.Y4,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.c(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aXL,j,j,j),B.aW],h)
f=k.r
if(f>=2)g.push(A.c("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.LO,j,j,j))
g.push(B.ar)
f=A.m(14)
g.push(A.p(j,A.c(""+k.f,j,j,j,j,j,j,B.iV,j,j,j),B.f,j,j,new A.o(B.bx,j,j,f,j,j,B.m),j,j,j,j,A1.D2,j,j,j))
g=A.A(g,B.l,j,B.e,B.h,0,j,j)
f=A.m(6)
w=i?0:B.i.D(k.as/k.a.w[k.e].r,0,1)
f=A.by(f,A.jE(B.bx,j,k.as<5?B.fq:B.d_,9,j,w,j),B.aq)
w=A.m(22)
v=A.K(B.d_,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.c(u,j,j,j,j,j,j,A.l(j,j,e?D.lS:G.nH,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.N,A.c(k.a.w[k.e].d,j,j,j,j,j,j,D.fI1,B.K,j,j)],h),B.l,j,B.e,B.P,0,B.p)}else u=A.c(k.a.w[k.e].a,j,j,j,j,j,j,D.fTy,B.K,j,j)
w=A.E(A.p(j,A.at(u,j,j,j),B.f,j,j,new A.o(D.qP,j,v,w,j,j,B.m),j,j,j,j,B.f9,j,j,1/0),3)
v=A.a([],h)
for(u=k.giA(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bUA(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aF3[o]
m=new A.aP(16,16)
l=new A.ax(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.c(D.aFn[o],j,j,j,j,j,j,D.fK0,j,j,j),B.ar,new A.bu(1,B.b8,A.c(r[t],j,3,B.a2,j,j,j,D.fIX,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.atn)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.c0Z)
v.push(A.aA(j,new A.Ts(A.p(j,new A.c2(B.aK,B.e,B.h,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bE(l,l,l,l),new A.bb(m,m,m,m),W.aDs,j,B.m),j,j,j,j,B.f2,j,j,j),p,B.aZ,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.aj,f,B.af,w,B.af,A.E(A.lc(1.45,v,2,10,10,j,B.e8,!1),4)],h)
if(i)h.push(D.eGt)
return new A.D(B.a1U,A.x(h,B.l,j,B.e,B.h,0,B.p),j)},
ceI(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cP5(),m=x.p,l=A.a([D.bfd,A.at(A.c(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.qr,o,o,o),o,o,o),A.at(A.c(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.WN,o,o,o),o,o,o),B.aO],m)
for(w=0;w<n.length;++w){v=n[w].c?B.d_.j(0.25):B.dx
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.ax(s?B.d_:B.bx,1,B.r,-1)
q=A.c(w<3?D.dp7[w]:""+(w+1),o,o,o,o,o,o,B.m9,o,o,o)
s=s?B.u:B.O
l.push(A.p(o,new A.c2(B.aK,B.e,B.h,B.l,o,B.p,o,0,A.a([new A.a4(34,o,q,o),new A.bu(1,B.b8,A.c(t.a,o,o,o,o,o,o,new A.G(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.c(""+t.b,o,o,o,o,o,o,B.iV,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bE(r,r,r,r),new A.bb(u,u,u,u),o,o,B.m),o,o,o,B.cB,B.eX,o,o,o))}l.push(B.S)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.IJ(m,v,p.CW,o))
l.push(B.aO)
l.push(A.at(C.uH("Back to the games",new C.bUx(p),B.d_,B.kk,D.fJ),o,o,o))
return A.co(l,o,o,B.f9,o,o,B.ah,!1)}}
C.UB.prototype={
R(){return new C.an5(A.S(x.de,x.er))}}
C.an5.prototype={
gDw(){var w,v=this,u=v.d
if(u===$){w=C.hvq(v.a.c.ak())
v.d!==$&&A.bF()
v.d=w
u=w}return u},
glX(d){var w,v,u=this,t=u.e
if(t===$){w=u.gDw().b
v=$.az()
u.e!==$&&A.bF()
t=u.e=new A.au(new A.bc(w,B.b7,B.aP),v)}return t},
chP(d){return this.f.c_(0,d,new C.bU5(d))},
a_(){this.a3()
var w=this.gDw().c
if(w.length===0)w.push(C.hgI(null,0,20,""))},
t(){var w,v,u=this.glX(0)
u.V$=$.az()
u.W$=0
for(u=this.f,u=new A.dr(u,u.r,u.e);u.C();)for(w=J.aQ(u.d);w.C();){v=w.gP(w)
v.V$=$.az()
v.W$=0}this.a2()},
cO6(){if(this.gDw().c.length>=12)return
this.l(new C.bU6(this))},
jI(d){var w,v,u=this,t=u.gDw()
t.b=B.a.i(u.glX(0).a.a)
w=t.gaqu(0)
if(t.b.length===0||w.length<2){u.c.L(x.q).f.T(D.fAW)
return}v=t.c
B.d.a6(v)
B.d.u(v,w)
v=u.c
v.toString
A.a7(v,!1).N(t)},
B(d){var w,v,u=this,t=null,s=new C.bUg(),r=x.p,q=A.a([A.bM(!1,D.h27,t,t,!0,t,t,t,u.gbs_(u),t,t)],r),p=A.a([D.hha,B.af,A.aN(t,B.M,!1,t,!0,B.t,t,A.aO(),u.glX(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.al,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ae,t,t,t,t,t,t,t,t,t,t,t,B.hh,!0,B.a7,t,B.ao,t,t,t,t),B.aB],r)
for(w=0;v=u.gDw().c.length,w<v;++w)B.d.u(p,A.a([new A.fm(new C.bUf(u,w,s),t)],r))
if(v<12)p.push(A.at(C.uH("\uff0b Add a question",u.gcO5(),B.aT,t,B.c),t,t,t))
return new C.tQ("Make your game",A.co(p,t,t,D.bH8,t,t,B.ah,!1),q,t)}}
C.asg.prototype={
R(){return new C.aGr(A.a([],x._))},
bw(){return this.r.$0()},
qt(){return this.w.$0()},
ge9(){return this.c}}
C.aGr.prototype={
a_(){var w,v
this.a3()
this.wF()
w=this.a
v=w.c
if(v.length!==0)C.a97(v,w.e,w.d.w)},
wv(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hsh(r,t.e,!1,s.w,new C.e7O(u),null,s),$async$wv)
case 2:w=3
return A.b(u.wF(),$async$wv)
case 3:return A.h(null,v)}})
return A.i($async$wv,v)},
a1t(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a1t=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hsh(r,t.e,!0,s.w,new C.e7N(u),null,s),$async$a1t)
case 2:w=3
return A.b(u.wF(),$async$a1t)
case 3:return A.h(null,v)}})
return A.i($async$a1t,v)},
wF(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wF=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.By(q.a.c),$async$wF)
case 7:p=e
if(q.c!=null)n=q.e||J.cK(p)
else n=!1
if(n)q.l(new C.e7Q(q,p))
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
return A.b(C.HE(q.a.c).d7(0,B.r2),$async$wF)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.l(new C.e7R(q,o))
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
if(q.c!=null&&q.e)q.l(new C.e7S(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wF,v)},
PM(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$PM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.L(s).f.T(D.fAw)
w=3
return A.b(C.HE(t.a.c),$async$PM)
case 3:r=e
w=4
return A.b(C.h69(t.a.c,r),$async$PM)
case 4:q=e
w=5
return A.b(C.HE(t.a.c),$async$PM)
case 5:p=e
if(t.c==null){w=1
break}t.l(new C.e7M(t,p))
o=t.c.L(s).f
s=A.c(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.T(A.b3(null,null,null,q?B.dR:B.d9,null,B.t,null,s,null,B.lX,null,null,null,null,null,null,null,null,null,null))
t.a.qt()
case 1:return A.h(u,v)}})
return A.i($async$PM,v)},
IT(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iE8(l),$async$IT)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.i6g(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b2Q(q,p.e,l,"Each family tree costs $"+B.i.a5(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$IT)
case 4:if(!e||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
p=C.hML(r)
o=Date.now()
n=t.a.c
m=new C.lb(l,r.toUpperCase(),p,!0,B.M,D.El,new A.W(o,0,!1),0,n,D.vj,B.cn)
w=5
return A.b(C.a4M(n,m),$async$IT)
case 5:w=6
return A.b(t.wF(),$async$IT)
case 6:t.a.bw()
t.a.qt()
if(t.c==null){w=1
break}t.Fo(m)
case 1:return A.h(u,v)}})
return A.i($async$IT,v)},
Fo(d){return this.cmT(d)},
cmT(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Fo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.By(u.a.c),$async$Fo)
case 2:n=l.nM(k.dO(f,new C.e7P(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hD(m,new C.asa(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Fo)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a4M(u.a.c,o),$async$Fo)
case 6:case 5:w=7
return A.b(u.wF(),$async$Fo)
case 7:u.a.qt()
return A.h(null,v)}})
return A.i($async$Fo,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.Q(d).ax.a===B.I,o=new C.us(p)
if(r.e)return A.at(A.nj(q,p?B.bv:B.bk,q,q,q,q,q,q,q,q),q,q,q)
if(J.cx(r.d)){w=p?B.el:B.c
v=A.m(15)
u=A.aG(!1,B.a3,!0,q,A.aM(!1,q,!0,A.p(q,D.bZu,B.f,q,q,new A.o(B.aV.j(0.12),q,A.K(B.aV,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cM,!0,q,q,q,q,q,q,q,q,q,q,q,r.gclT(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)
t=A.c("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,18,q,q,B.D,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.GG(A.p(q,A.x(A.a([u,B.aO,t,B.N,A.c("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bv:B.bk,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.ec,A.bI(D.hks,q,r.gaUt(),A.bp(B.bU,q,q,q,q,q,B.a2h,q,new A.b9(A.m(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.h,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.m),q,q,q,q,D.bJU,q,q,1/0),15,B.ag,1.05,D.aeg,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.c("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,16,q,q,B.D,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aW],v)
if(J.cK(r.d))w.push(A.aI(q,q,q,q,A.V(B.Ae,B.aV,q,q,q,q),q,q,q,new C.e7U(r),q,q,q,q,"Sync family trees with database",q))
if(J.cK(r.d))w.push(A.aI(q,q,q,q,A.V(B.Aa,B.aV,q,q,q,q),q,q,q,r.gai_(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dd(E.aui,q,D.h_o,r.gaUt(),A.bp(B.bU,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.h,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.GG(r.cKe(J.t(r.d,s),o),14,B.ag,1,D.aeg,q))
B.d.u(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.l,q,B.e,B.h,0,B.p)],v),B.B,q,B.e,B.h,0,B.p)},
cKe(d,e){var w=null,v=e.a,u=v?B.el:B.c,t=A.m(14),s=A.K((v?B.eo:B.bO).j(0.55),B.r,1),r=A.a([new A.aa(0,B.H,B.v.j(v?0.35:0.08),B.eD,10)],x.V),q=A.m(14),p=A.p(w,D.bYz,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.m(12),w,w,B.m),w,48,w,w,w,w,w,48),o=A.c(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.garv(),m=d.d?"":" \xb7 Public",l=d.y===D.l9?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bt,A.c(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bk,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.B,w,B.e,B.h,0,B.p),1)
return A.p(w,A.aG(!1,B.a3,!0,w,A.aM(!1,q,!0,new A.D(B.bF,A.A(A.a([p,B.bc,l,A.V(B.PZ,v?B.bv:B.bk,w,w,w,w)],k),B.l,w,B.e,B.h,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e7T(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),B.f,w,w,new A.o(u,w,s,t,r,w,B.m),w,w,w,w,w,w,w,1/0)}}
C.asa.prototype={
R(){return new C.aGo(A.a([],x._),A.aR(x.N),A.bbD())},
bw(){return this.r.$0()},
ge9(){return this.c}}
C.aGo.prototype={
a_(){var w,v,u=this
u.a3()
u.d=u.a.w
u.aeC()
w=u.a
v=w.c
if(v.length!==0)C.a97(v,w.e,w.d.w)},
t(){var w=this.w
w.V$=$.az()
w.W$=0
this.a2()},
a4w(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a4w=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yL("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.d()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e7e(r),s,null,!0,!0,x.y),$async$a4w)
case 3:if(e!==!0||t.c==null){w=1
break}t.Kz()
t.l(new C.e7f(t,r))
w=4
return A.b(t.uC(),$async$a4w)
case 4:t.a.bw()
t.yL(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a4w,v)},
czC(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.d()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aU.U$.push(new C.e79(w,f,d,e))},
aWM(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dA()
u.ei(w,v,0,1)
u.k0(q,q,1,1)
this.w.sp(0,u)},
beL(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eS(new Float64Array(16))
q.ed(r)
w=q.DB()
v=B.i.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dA()
t.ei(r,u,0,1)
t.k0(v,v,1,1)
t.ei(-r,-u,0,1)
t.iY(0,q)
s.sp(0,t)},
aeC(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$aeC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.By(u.a.c),$async$aeC)
case 2:t=s.nM(r.dO(e,new C.e6B(u)))
if(t!=null&&u.c!=null)u.l(new C.e6C(u,t))
return A.h(null,v)}})
return A.i($async$aeC,v)},
yL(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b3(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
wv(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.d()
w=2
return A.b(C.hsh(o,t,!1,r,new C.e6T(u),q.a,s),$async$wv)
case 2:n=A
m=J
w=3
return A.b(C.HE(u.a.c),$async$wv)
case 3:p=n.nM(m.dO(e,new C.e6U(u)))
if(p!=null&&u.c!=null)u.l(new C.e6V(u,p))
return A.h(null,v)}})
return A.i($async$wv,v)},
Kz(){var w=this.e,v=this.d
v===$&&A.d()
w.push(v)
if(w.length>25)B.d.cJ(w,0)},
uC(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.a4M(t,s),$async$uC)
case 2:return A.h(null,v)}})
return A.i($async$uC,v)},
a3_(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a3_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.d()
if(!C.uI(q,t.a.c)){t.yL("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.iFl(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a3_)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Kz()
t.l(new C.e78(t,r))
w=4
return A.b(t.uC(),$async$a3_)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3_,v)},
b4I(){var w=this.c
w.toString
A.a7(w,!1).c9(A.e6(new C.e6Q(this),!1,null,x.H))},
a1H(){return this.cmV()},
cmV(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a1H=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.d()
if(!C.uI(m,t.a.c)){t.yL("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.Q(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.X(s,new C.e75(),A.U(s).k("X<1>")).gJ(0)
s=A.eB([0,2,3,4,5,6,8,r],x.S)
p=A.B(s,s.$ti.k("ci.E"))
B.d.fd(p)
s=t.c
s.toString
w=3
return A.b(A.bV(B.L,null,new C.e76(n,t,new C.us(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a1H)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.Kz()
t.l(new C.e77(t,o))
w=6
return A.b(t.uC(),$async$a1H)
case 6:case 5:if(o.a&&t.c!=null)t.b4I()
case 1:return A.h(u,v)}})
return A.i($async$a1H,v)},
Xb(d){return this.bFB(d)},
bFB(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
if(!C.uI(r,t.a.c)){t.yL("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e6p(t,d),r,null,!0,!0,x.P),$async$Xb)
case 3:s=f
if(s==null){w=1
break}t.Kz()
t.l(new C.e6q(t,s))
w=4
return A.b(t.uC(),$async$Xb)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xb,v)},
a4R(d){return this.cMv(d)},
cMv(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a4R=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.Q(s)
t=u.c
t.toString
w=2
return A.b(A.cg(null,null,!0,null,new C.e7h(u,d,new C.us(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a4R)
case 2:return A.h(null,v)}})
return A.i($async$a4R,v)},
cj1(d){var w=this,v=w.d
v===$&&A.d()
if(C.uI(v,w.a.c))w.Pr(d)
else w.a4R(d)},
aku(d,e){return this.cDF(d,e)},
cDF(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aku=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.Q(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.e7b(new C.us(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$aku)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aku,v)},
IY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$IY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.d()
w=o.y===D.l9?3:5
break
case 3:w=6
return A.b(C.heV(t.a.c),$async$IY)
case 6:s=e
o=t.a
r=C.hAi(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.aku(!s,!r),$async$IY)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aSm(o,t.a.c)){t.yL("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lC(o,"Cancel","Remove",q.y===D.l9?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$IY)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aSk(t.a.c,t.d.a),$async$IY)
case 11:t.a.bw()
o=t.c
if(o==null){w=1
break}A.jj(o,null)
case 1:return A.h(u,v)}})
return A.i($async$IY,v)},
ac2(d){return this.bR2(d)},
bR2(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$ac2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.d()
if(!C.uI(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aR(s,new C.e6r(p))){o=A.U(s)
p.a=A.nM(new A.cP(new A.X(s,new C.e6s(d),o.k("X<1>")),new C.e6t(),o.k("cP<1,n>")))}q=p.a
if(q==null)q=d.d
t.Kz()
t.l(new C.e6u(t,s,d,q))
w=3
return A.b(t.uC(),$async$ac2)
case 3:t.yL(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$ac2,v)},
Pr(d){return this.bTg(d)},
bTg(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Pr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
w=!C.uI(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a4R(d),$async$Pr)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.e6y(t,d),r,null,!0,!0,x.P),$async$Pr)
case 6:s=f
if(s==null){w=1
break}t.Kz()
t.l(new C.e6z(t,s))
w=7
return A.b(t.uC(),$async$Pr)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Pr,v)},
cKG(){var w=this,v=w.d
v===$&&A.d()
if(!C.uI(v,w.a.c))return
if(w.e.length===0)return
w.l(new C.e7g(w))
w.uC()},
a_g(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_g=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.d()
if(!C.aSm(n,t.a.c)){t.yL("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.Q(n)
s=$.az()
r=new A.au(B.ax,s)
q=t.d.e
p=A.bt(new A.O(q,t.gchv(),A.U(q).k("O<1,n>")).c0(0,new C.e6L()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e6M(t,new C.us(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$a_g)
case 3:o=e
r.V$=s
r.W$=0
if(o!==!0||t.c==null){w=1
break}t.Kz()
t.l(new C.e6N(t,p))
w=4
return A.b(t.uC(),$async$a_g)
case 4:t.yL("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$a_g,v)},
chw(d){return B.a.i(d.toLowerCase())},
clD(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.d()
u=C.uI(v,w)
t=r.d
s=C.iu7(t)
C.iEc(q,t.b,u,C.iu6(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.us(n),l=p.d
l===$&&A.d()
l=l.f
w=new A.X(l,new C.e7o(),A.U(l).k("X<1>")).gJ(0)
l=n?B.c7:B.hX
v=A.V(B.a3r,n?B.bv:B.bk,o,o,o,18)
u=x.p
v=A.a([new A.D(A_.D3,A.aM(!1,o,!0,new A.D(B.hA,A.A(A.a([v,B.ba,A.c("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bk,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.P,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e7p(p,d),o,o,o,o,o,o,o),o),new A.D(B.o0,p.c3w(m),o)],u)
if(p.d.y===D.l9){t=B.u4.j(0.15)
s=A.m(12)
r=A.K(B.u4.j(0.45),B.r,1)
q=C.HC(p.d,p.a.c)
v.push(new A.D(B.zr,A.p(o,A.A(A.a([D.c38,B.ar,A.E(A.c("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.m),o,o,o,o,B.hn,o,o,1/0),o))}u=A.a([A.c("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,15,o,o,B.D,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aW],u)
if(C.uI(p.d,p.a.c)&&p.e.length!==0)u.push(new C.GR("Undo",B.q0,p.gcKF(),m,o,o))
u.push(new C.GR("Family Book",D.bTa,p.gclC(),m,B.uV,o))
u.push(new C.GR("Family games",B.o9,p.gclO(),m,B.az,o))
if(C.uI(p.d,p.a.c))u.push(new C.GR("Display settings",B.DS,p.gcmU(),m,B.b5,o))
u.push(new C.GR("Sync",B.Aa,p.gai_(),m,o,o))
t=p.d
if(t.y===D.l9||C.aSm(t,p.a.c)){t=p.d.y===D.l9?"Remove shared tree":"Delete tree"
u.push(new C.GR(t,B.eq,p.gbRc(),m,B.fq,o))}if(C.uI(p.d,p.a.c))u.push(new C.GR("Add member",B.xq,new C.e7q(p),m,B.bU,o))
v.push(new A.D(S.anW,A.A(u,B.l,o,B.e,B.h,0,o,o),o))
if(p.d.garv()===0){u=A.at(A.c("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bk,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cf(new C.e7r(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.V(n?B.a3v:B.Q_,o,o,o,o,o)
v.push(A.at(A.hx(u,A.c(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e7s(p),o),o,o,o))}return A.c7(o,l,A.bo(!0,A.x(v,B.B,o,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c3w(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.d()
w=A.m(22)
v=A.a([new A.aa(0,B.H,B.h6.j(0.35),B.du,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.V(B.A2,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aG(!1,B.a3,!0,m,A.aM(!1,m,!0,A.p(m,D.c6w,B.f,m,m,new A.o(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cM,!0,m,m,m,m,m,m,m,m,m,m,m,n.gai_(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)
r=n.d
q=A.c(r.b,m,1,B.a2,m,m,m,D.fL4,m,m,m)
r=r.garv()
p=n.d.garv()===1?"member":"members"
o=x.p
p=A.a([s,B.bc,A.E(A.x(A.a([q,B.bt,A.c(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.B,m,B.e,B.h,0,B.p),1)],o)
if(C.uI(n.d,n.a.c))p.push(A.aI(m,m,m,m,D.c3n,m,m,m,n.gcwT(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.h,0,m,m)
r=n.d.d
q=r?B.jF:B.nj
r=r?"Private":"Public"
r=A.E(n.ay2(q,"Privacy",r,n.a.d.w?n.gcJw():m),1)
q=A.E(n.ay2(B.xv,"Tree code",n.d.c,new C.e6A(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.aa,q,B.aa,A.E(n.ay2(D.bUR,"Collaborators",p,n.gc8y()),1)],o),B.l,m,B.e,B.h,0,m,m)],o)
if(n.d.y===D.l9){s=B.c.j(0.15)
B.d.u(p,A.a([B.N,A.aG(!1,B.a3,!0,A.m(999),A.aM(!1,A.m(999),!0,new A.D(B.fZ,A.A(A.a([A.V(B.oa,B.c,m,m,m,14),B.e_,A.c("View only",m,m,m,m,m,m,B.acH,m,m,m)],o),B.l,m,B.e,B.P,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.p(m,A.by(u,new A.an(B.a0,m,B.ad,B.t,A.a([t,new A.D(B.HH,A.x(p,B.B,m,B.e,B.h,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.caS,B.m),m,m,m,m,m,m,m,1/0)},
ay2(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aG(!1,B.a3,!0,A.m(14),A.aM(!1,A.m(14),!0,new A.D(K.apg,A.x(A.a([A.V(d,B.c,w,w,w,18),B.at,A.c(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.rJ,A.c(f,w,1,B.a2,w,w,w,Ar.y3,w,w,w)],x.p),B.l,w,B.e,B.h,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.biv.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gar(r)&&s.c.length===0)return B.bK
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.biy(s,t),new A.av(w,v))],x.p)
r=r.gdS(r)
B.d.u(u,r.dP(r,new C.dkw(this),x.l))
r=s.c
B.d.u(u,new A.O(r,new C.dkx(this),A.U(r).k("O<1,w>")))
return new A.D(B.vf,new A.a4(w,v,new A.an(B.a0,t,B.ad,B.f,u,t),t),t)}}
C.Lb.prototype={}
C.GV.prototype={}
C.bix.prototype={
gbnk(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aM6.prototype={}
C.biy.prototype={
bSS(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.T()
v=A.L()
v.r=B.bC.j(0.75).gp(0)
v.c=2
v.d=B.bG
d.ah(new A.r(n,w),new A.r(m,w),v)
u=(n+m)/2
t=new A.aH(q.r,B.ak,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.aZ(u,q))
s=w-1.1
r=w-8.8
t.E(new A.i4(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.i4(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bA())
q=A.L()
q.r=B.c.gp(0)
d.O(new A.r(u,w),9,q)
q=A.L()
q.r=B.bC.gp(0)
d.af(t,q)},
bSP(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b_(a0,new C.dkR())
w=f.b
v=w+(B.d.gG(a0).b-w)/2
u=B.d.aR(a0,new C.dkS(f))
t=new A.O(a0,new C.dkT(f),A.U(a0).k("O<1,H>")).c0(0,new C.dkU()).cF(0,1/0,B.py)
w=f.a
d.ah(f,new A.r(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.I)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.r(o,v),p,e)
continue}l=J.m3(n)
k=Math.min(10,m/2)
m=$.T()
j=A.a([],r)
i=new A.aH(m.r,B.ak,null,null,j)
j.push(new A.aZ(w,v-k))
i.ac()
m=l*k
h=new A.ck(w,v,w+m,v)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.ac()
m=new A.aq(o-m,v)
j.push(m)
h=i.f
if(h!=null)m.aj(h)
i.ac()
m=new A.ck(o,v,o,v+k)
j.push(m)
h=i.f
if(h!=null)m.aj(h)
i.ac()
o=new A.aq(o,p.b)
j.push(o)
m=i.f
if(m!=null)o.aj(m)
i.ac()
d.af(i,e)}},
a4(d,e){var w,v,u,t,s,r
$.T()
w=A.L()
w.r=B.bU.j(0.75).gp(0)
w.c=2.2
w.b=B.ac
w.d=B.bG
w.e=B.dP
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.I)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bSP(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.I)(v),++t){r=v[t]
if(r.c)this.bSS(d,w,r.a,r.b)}},
aD(d){return d.b!==this.b}}
C.bml.prototype={
gceK(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aFE
switch(w.c.a){case 0:return D.d4E
case 1:return D.dih
case 2:return D.dBP}},
gceN(){var w=this.c,v=C.hLY(w.w),u=C.hLY(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.Q(d).ax.a===B.I,q=t.gceK(),p=t.c,o=A.bHh(p.f),n=t.gceN(),m=x.V,l=A.a([new A.aa(0,B.H,B.d.gal(q).j(0.35),B.cN,10)],m),k=r?B.aw:B.c,j=A.K(r?B.aw:B.c,B.r,2)
if(o!=null)w=A.tU(B.z,s,B.cs,B.c0,!1,s,o,!1,s,s)
else{w=A.a([B.d.gG(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.z,A.c(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a8(B.a5,B.a9,B.x,w,s,s),B.m),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.ib(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a8(B.ay,B.aD,B.x,q,s,s),B.a6),s,56,s,s,B.Dg,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.K(r?B.aw:B.c,B.r,1.5)
l.push(A.ao(s,A.p(s,A.c(""+k,s,s,s,s,s,s,D.fW5,s,s,s),B.f,s,s,new A.o(B.ch,s,w,j,s,s,B.m),s,s,s,s,D.bLP,s,s,s),s,s,s,-6,-4,s))}k=r?B.cx:B.c
j=A.m(8)
w=A.K(B.d.gG(q).j(0.35),B.r,1)
m=A.a([new A.aa(0,B.H,B.v.j(r?0.3:0.06),B.dS,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.c(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cx,s,s,s,s,s,s,s,s,u,s,s,B.D,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.c(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bk,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aA(s,new A.a4(84,112,A.x(A.a([new A.an(B.a0,s,B.ad,B.f,l,s),B.at,A.p(s,A.x(p,B.l,s,B.e,B.P,0,B.p),B.f,s,D.b9m,new A.o(k,s,w,j,m,s,B.m),s,s,s,s,D.bM_,s,s,s)],v),B.l,s,B.e,B.h,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bhy.prototype={
a4(d,e){var w,v,u,t,s
$.T()
w=A.L()
v=this.b
u=v?B.c:D.bmy
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.O(new A.r(s,t),1,w)},
aD(d){return d.b!==this.b}}
C.bAv.prototype={
B(d){var w=this,v=null,u=new C.fv_(w),t=w.c,s=t?B.cx:B.c,r=A.m(12),q=u.$3(B.id,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bx:B.fA,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.xs,"Zoom out",w.e)
return A.aG(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bx:B.fA,v,v,v,1,v,v,v,v,v,22),u.$3(B.arJ,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.P,0,B.p),B.f,s,4,v,B.dJ,v,v,v,B.ai)}}
C.bpI.prototype={
B(d){var w=this,v=null,u=B.bU.j(0.15),t=A.K(B.bU,B.r,2),s=w.e,r=x.p
t=A.aA(v,A.p(v,A.x(A.a([A.V(s?B.a3v:B.Q_,B.bU,v,v,v,22),A.c("+"+w.c,v,v,v,v,v,v,D.fS1,v,v,v)],r),B.l,v,B.bb,B.h,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.aj,A.c(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fPM,B.K,v,v)],r)
if(s){t=A.a([B.aj],r)
s=w.d
B.d.u(t,new A.O(s,new C.f4O(w),A.U(s).k("O<1,w>")))
B.d.u(u,t)}return new A.a4(84,v,A.x(u,B.l,v,B.e,B.h,0,B.p),v)}}
C.a0Y.prototype={
R(){return new C.aEQ()},
bw(){return this.Q.$0()},
ge9(){return this.w}}
C.aEQ.prototype={
a_(){var w,v,u,t,s,r=this,q=null
r.a3()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.az()
r.d!==$&&A.aS()
r.d=new A.au(new A.bc(t,B.b7,B.aP),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aS()
r.e=new A.au(new A.bc(t,B.b7,B.aP),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aS()
r.f=new A.au(new A.bc(t,B.b7,B.aP),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aS()
r.r=new A.au(new A.bc(t,B.b7,B.aP),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aS()
r.w=new A.au(new A.bc(t,B.b7,B.aP),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aS()
r.x=new A.au(new A.bc(t,B.b7,B.aP),s)
t=u?q:v.c
r.y=t==null?D.zG:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.ivF(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
t(){var w,v=this,u=v.d
u===$&&A.d()
w=u.V$=$.az()
u.W$=0
u=v.e
u===$&&A.d()
u.V$=w
u.W$=0
u=v.f
u===$&&A.d()
u.V$=w
u.W$=0
u=v.r
u===$&&A.d()
u.V$=w
u.W$=0
u=v.w
u===$&&A.d()
u.V$=w
u.W$=0
u=v.x
u===$&&A.d()
u.V$=w
u.W$=0
v.a2()},
QX(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$QX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hAi(p.y,p.w)
w=3
return A.b(A.lU(t.a.w,B.Ko),$async$QX)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b2Q(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$QX)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.i6h(p.y,p.w)
t.a.bw()
case 5:w=7
return A.b(A.DX(78,800),$async$QX)
case 7:q=e
if(q!=null&&t.c!=null)t.l(new C.dB7(t,q))
case 1:return A.h(u,v)}})
return A.i($async$QX,v)},
ceM(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.d()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.ic(B.o.v(1000*Date.now()),w,D.zG,null,null,null,"","","","","",1,!1,0)
u=l.y
u===$&&A.d()
t=l.z
s=l.Q
r=l.as
q=l.e
q===$&&A.d()
q=B.a.i(q.a.a)
p=l.f
p===$&&A.d()
p=B.a.i(p.a.a)
o=l.r
o===$&&A.d()
o=B.a.i(o.a.a)
n=l.w
n===$&&A.d()
n=B.a.i(n.a.a)
m=l.x
m===$&&A.d()
m=B.a.i(m.a.a)
s=v.aHm(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a7(k,!1).N(s)},
abE(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$abE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dB6(r),s,null,!0,!0,x.y),$async$abE)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a7(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$abE,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===B.I,i=new C.us(j),h=l.a.e,g=A.U(h).k("X<1>"),f=A.B(new A.X(h,new C.dBg(l),g),g.k("M.E"))
h=j?B.el:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bKe,A.c(w,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.ha(A.aM(!1,k,!0,new A.D(B.m0,A.V(B.eq,B.pL,k,k,k,17),k),B.cM,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbNK(),k,k,k,k,k,k,k),k,"Delete member",k,k,k),k,k,k,0,k,k))
u=j?B.ka:B.iL
t=A.bHh(l.as)
if(l.as==null)s=A.V(B.pU,j?B.bv:B.bk,k,k,k,40)
else s=k
s=A.at(A.aA(k,new A.an(B.a0,k,B.ad,B.t,A.a([A.hp(u,t,s,k,42),A.ao(0,A.hp(B.bU,k,D.bXC,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gceJ(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.d()
t=C.aES(t,"Full name",B.mt,1,1,i,B.mK)
u=l.y
u===$&&A.d()
u=A.x(A.a([t,B.S,new C.bmj(i,u,new C.dBh(l),k)],v),B.l,k,B.e,B.h,0,B.p)
t=A.c("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bk,k,k,k,k,k,k,k,k,11,k,k,B.D,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bDv],q)
o=l.a.e
B.d.u(p,new A.O(o,new C.dBi(),A.U(o).k("O<1,eO<n?>>")))
o=x.bw
n=A.c("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bk,k,k,k,k,k,k,k,k,11,k,k,B.D,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bDx],q)
B.d.u(q,new A.O(f,new C.dBk(),A.U(f).k("O<1,eO<n?>>")))
o=A.x(A.a([t,B.aj,new C.afd(i,r,"Who is their parent?",p,new C.dBl(l),k,o),B.aB,n,B.aj,new C.afd(i,m,"Who is their spouse / partner?",q,new C.dBm(l),k,o)],v),B.am,k,B.e,B.h,0,B.p)
q=l.f
q===$&&A.d()
q=C.aES(q,"Birth date",D.aqU,1,1,i,k)
m=l.r
m===$&&A.d()
m=C.aES(m,"Birth place",B.a3L,1,1,i,k)
n=l.w
n===$&&A.d()
n=C.aES(n,"Date of death (if deceased)",D.at0,1,1,i,k)
p=l.x
p===$&&A.d()
p=C.aES(p,"Occupation",Y.R1,1,1,i,k)
r=l.e
r===$&&A.d()
r=A.a([new A.an(B.z,k,B.ad,B.t,w,k),B.aB,s,B.by,new C.afe(i,"Identity",u,k),B.af,new C.afe(i,"Family links",o,k),B.af,new C.afe(i,"Life details",A.x(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aES(r,"Notes",B.lb,5,3,i,k)],v),B.l,k,B.e,B.h,0,B.p),k),B.af,new C.aER(i,"Child order",l.cna(l.at),new C.dBn(l),new C.dBo(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hpc(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dBp(l):k
B.d.u(r,A.a([B.S,new C.aER(i,"Visible in tree",u,w,new C.dBq(l),k)],v))}r.push(B.S)
w=j?B.ka:B.iL
u=A.m(14)
t=A.K(j?B.eo:B.bO,B.r,1)
s=A.c("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.ja(k,B.bU,k,B.ag,k,new C.dBr(l),k,A.c("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bk,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.m),k,k,k,k,B.anB,k,k,k))
r.push(B.by)
w=j?B.aS:B.aw
j=j?B.eo:B.bO
r.push(A.A(A.a([A.E(A.dZ(B.oq,new C.dBj(d),A.dl(k,k,k,k,k,k,k,k,k,w,k,k,B.cq,k,new A.b9(A.m(14),B.a1),new A.ax(j,1,B.r,-1),k,k,k,k)),1),B.bc,A.E(A.bI(D.fs6,k,l.gceL(),A.bp(B.aV,k,k,0,B.c,k,B.cq,k,new A.b9(A.m(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.h,0,k,k))
r.push(B.at)
return A.ek(B.ff,k,B.ag,h,new A.a4(420,k,A.cc(A.x(r,B.am,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),k),D.aow,k,B.anM,new A.b9(g,B.a1),k,k)},
cna(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.afe.prototype={
B(d){var w=null,v=this.c.a,u=A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bk,w,w,w,w,w,w,w,w,10,w,w,B.D,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.ka:B.iL,s=A.m(16)
return A.x(A.a([new A.D(B.a2l,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.K(v?B.eo:B.bO,B.r,1),s,w,w,B.m),w,w,w,w,B.bg,w,w,1/0)],x.p),B.B,w,B.e,B.h,0,B.p)}}
C.bmk.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.el:B.c,r=A.m(12),q=A.K((t?B.eo:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aS:B.aw,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aN(u,B.M,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bC(u,B.eU,u,B.tC,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bv:B.bk,u,u,u,u,u,u,u,u,u,u,u,B.cH,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.V(v.f,B.bU,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.al,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ae,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a7,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.m),u,u,u,u,u,u,u,u)}}
C.afd.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.el:B.c,s=A.m(12),r=A.K((u?B.eo:B.bO).j(0.85),B.r,1),q=A.V(B.tM,u?B.bv:B.bk,v,v,v,v),p=A.l(v,v,u?B.aS:B.aw,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.el:B.c
return A.p(v,new A.EK(A.a6i(v,o,A.c(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bv:B.bk,v,v,v,v,v,v,v,v,v,v,v,B.cH,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.m),v,v,v,v,B.l7,v,v,v)}}
C.bmj.prototype={
B(d){var w=new C.dBs(this)
return A.A(A.a([w.$3(D.xc,"Male",B.QM),B.aa,w.$3(D.oU,"Female",B.Qx),B.aa,w.$3(D.zG,"Other",B.o7)],x.p),B.l,null,B.e,B.h,0,null,null)}}
C.aER.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.ka:B.iL,r=A.m(14),q=A.K(t?B.eo:B.bO,B.r,1),p=A.c(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aS:B.aw,v,v,v,v,v,v,v,v,13,v,v,B.D,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.E(A.x(A.a([p,A.c(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bk,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.B,v,B.e,B.h,0,B.p),1),new C.aL8(u,B.xs,w.f,v),B.ba,new C.aL8(u,B.id,w.r,v)],o),B.l,v,B.e,B.h,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.m),v,v,v,v,B.ep,v,v,v)}}
C.aL8.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bU.j(0.12)
else w=s.c.a?B.el:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bU
else t=(s.c.a?B.bv:B.bk).j(0.4)
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,new A.a4(36,36,A.V(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.aff.prototype={
bX4(d){switch(d.a){case 0:return B.bU
case 1:return B.bC
case 2:return B.cE}},
bX5(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b0i(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
B2(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.el:B.c
u=A.m(12)
t=A.K((w?B.eo:B.bO).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.u(r,A.a([A.V(f,B.bU,p,p,p,18),B.ar],s))
q=A.c(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bv:B.bk,p,p,p,p,p,p,p,p,9,p,p,B.D,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.at,A.c(o,p,p,p,p,p,p,A.l(p,p,w?B.aS:B.aw,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.B,p,B.e,B.h,0,B.p),1))
return A.p(p,A.A(r,B.B,p,B.e,B.h,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.m),p,p,p,B.cB,B.zo,p,p,1/0)},
agm(d,e){var w=null,v=this.e.a,u=A.c(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bk,w,w,w,w,w,w,w,w,10,w,w,B.D,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.ka:B.iL,s=A.m(16),r=A.K(v?B.eo:B.bO,B.r,1)
return A.x(A.a([new A.D(B.a2l,u,w),A.p(w,A.x(e,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.m),w,w,w,w,B.bR,w,w,1/0)],x.p),B.B,w,B.e,B.h,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hRz(r,q),o=q.c,n=t.bX4(o),m=A.bHh(q.f),l=t.e.a,k=l?B.el:B.c,j=A.m(22),i=q.b,h=A.c(i,s,s,s,s,s,s,A.l(s,s,l?B.aS:B.aw,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.l9?"Shared family tree \xb7 view only":"Member profile"
r=A.c(r,s,s,s,s,s,s,A.l(s,s,l?B.bv:B.bk,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.aa(0,B.H,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.at(A.p(s,A.hp(u,m,m==null?A.V(B.pU,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.eB,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.K(n.j(0.45),B.r,1)
v=A.at(A.p(s,A.c(t.bX5(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.D,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.m),s,s,s,s,B.lZ,s,s,s),s,s,s)
u=x.p
i=A.a([t.B2("Full name",i,B.mt)],u)
if(p>0)i.push(t.B2("Child order","#"+p,B.QD))
r=A.a([h,B.at,r,B.aO,l,B.S,v,B.by,t.agm("Identity",i),B.af,t.agm("Life details",A.a([t.B2("Birth date",q.w,D.aqU),t.B2("Birth place",q.x,B.a3L),t.B2("Date of death",q.y,D.at0),t.B2("Occupation",q.z,Y.R1)],u)),B.af,t.agm("Family links",A.a([t.B2("1. Parent",t.b0i(q.d),B.I8),t.B2("2. Spouse",t.b0i(q.e),B.Iq)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.u(r,A.a([B.af,t.agm("Notes",A.a([t.B2("Notes",q,B.lb)],u))],u))
r.push(B.by)
r.push(A.bI(B.LW,s,new C.dBC(d),A.bp(B.aV,s,s,s,s,s,B.cq,s,new A.b9(A.m(14),B.a1),s,s,s)))
return A.eI(s,k,new A.cS(B.mh,A.cc(A.x(r,B.am,s,B.e,B.P,0,B.p),B.t,s,B.y,s,s,B.x6,s,s,B.ah),s),s,s,s,B.HK,s,B.dd,s,new A.b9(j,B.a1),s)}}
C.GR.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bv:B.bk
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.vh,A.ha(A.aG(!1,B.a3,!0,A.m(8),A.aM(!1,A.m(8),!0,new A.a4(30,30,A.V(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u,u),u)}}
C.asd.prototype={
f4(){var w,v,u=this,t=x.N,s=A.S(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.U(w).k("O<1,a9<n,@>>")
w=A.B(new A.O(w,new C.chF(),v),v.k("aj.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.iX(w,new C.chG(),t,x.fO))
return s}}
C.ase.prototype={
R(){return new C.aGq(A.a([],x.bF))},
gd6(){return this.c}}
C.aGq.prototype={
a_(){this.a3()
this.KG()},
KG(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$KG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.chJ(t.a.c),$async$KG)
case 3:r=e
w=4
return A.b(C.By(t.a.c),$async$KG)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rA(q,new C.e7B(t))
else s=!1
if(t.c==null){w=1
break}t.l(new C.e7C(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$KG,v)},
zm(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b3(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
Lw(d,e){return this.cNc(d,e)},
cNc(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Lw=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.l(new C.e7G(q,e))
t=3
w=6
return A.b(d.$0(),$async$Lw)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.l(new C.e7H(q))
$.eX.mJ()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Lw,v)},
YZ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pS(r,s.c,s.e),$async$YZ)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Lw(new C.e7y(t),"Preparing download\u2026"),$async$YZ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YZ,v)},
Z2(d){return this.bUV(d)},
bUV(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Z2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pS(r,s.c,s.e),$async$Z2)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Lw(new C.e7z(t,d),"Preparing file\u2026"),$async$Z2)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Z2,v)},
aim(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aim=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.y1.cq().Ne(B.TP,B.vk,!0),$async$aim)
case 7:r=e
o=r
q=o==null?null:J.fr(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aI.gar(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jY(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.ac(m)
$.am.$1("[family tree sync pick] file_picker: "+A.v(p))
w=6
break
case 3:w=2
break
case 6:u=A.HK()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aim,v)},
ZG(d){return this.c4r(d)},
c4r(d){var w=0,v=A.j(x.H),u=this
var $async$ZG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Lw(new C.e7A(u,d),"Restoring family trees\u2026"),$async$ZG)
case 2:return A.h(null,v)}})
return A.i($async$ZG,v)},
ZF(){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.aim(),$async$ZF)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.ZG(s),$async$ZF)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZF,v)},
a3U(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3U=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pS(r,s.c,s.e),$async$a3U)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Lw(new C.e7F(t),"Creating QR code\u2026"),$async$a3U)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3U,v)},
a3t(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3t=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DV()){t.zm("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a7(s,!1).c9(A.e6(new C.e7D(),!0,null,x.N)),$async$a3t)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.ZG(r),$async$a3t)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a3t,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===B.I,n=o?B.Ct:B.hX,m=o?D.am2:B.aS,l=o?B.aM:B.bO,k=o?B.aS:B.aw,j=new C.dkV(n,m,l,k,o?B.bQ:B.bk)
l=A.aI(p,p,p,p,A.V(B.eC,k,p,p,p,20),p,p,p,new C.e7J(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eW(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.c(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.u(t,A.a([A.E(C.dkt(!0,B.jG,B.aH,B.aH,q.r?p:q.gcDt(),j,s,"Show restore QR"),1),B.ar],u))}s=q.e
r=q.r?p:q.gczw()
t.push(A.E(C.dkt(!s,B.jH,B.b_,B.bl,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.h,0,p,p)
r=A.a([],u)
if(q.e)B.d.u(r,A.a([A.E(C.dkt(!1,B.hP,B.aV,B.bU,q.r?p:q.gbUO(),j,"Photos & books included","Download all trees"),1),B.ar],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dkt(!1,Q.Ab,B.as,B.aQ,q.r?p:q.gc4o(),j,s,"Upload backup file"),1))
l=A.a([new C.biw(v,l,p),B.ll,new C.aeu(j,"QR restore",p),B.S,t,B.di,new C.aeu(j,"Backup files",p),B.S,A.A(r,B.l,p,B.e,B.h,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.ll,new C.aeu(j,"One tree",p),B.S],u)
B.d.u(v,J.b8(q.d,new C.e7K(q,j),x.l))
B.d.u(l,v)}l=A.a([A.co(l,p,p,Au.a2d,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.K(B.aV.j(0.35),B.r,1)
s=A.a([new A.aa(0,B.H,B.v.j(o?0.3:0.1),B.du,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bo(!0,A.p(p,A.A(A.a([Av.aW9,B.bc,A.E(A.c(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.h,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.m),p,p,p,p,A2.D9,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c7(w,n,new A.an(B.a0,p,B.ad,B.t,l,p),p,!1,!1,p,p)}}
C.dkV.prototype={}
C.biw.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.aa(0,B.H,B.aV.j(0.32),B.kQ,28)],x.V)
t=A.ao(p,A.V(B.vD,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.a0,p,B.ad,B.t,A.a([t,new A.D(B.ae,A.A(A.a([A.p(p,D.c6_,B.f,p,p,new A.o(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.m),p,56,p,p,p,p,p,56),B.pm,A.E(A.x(A.a([D.h0r,B.N,A.c(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.B,p,B.e,B.h,0,B.p),1)],q),B.B,p,B.e,B.h,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.cef,B.m),p,p,p,p,p,p,p,p)}}
C.aeu.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.m),w,14,w,w,w,w,w,3),B.aa,A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.D,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)}}
C.biu.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.aa(0,B.H,B.aH.j(0.1),B.cN,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aG(!1,B.a3,!0,q,A.aM(!1,o,!0,A.eK(A.d6(new A.D(E.a1R,A.x(A.a([A.p(q,A.V(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.m),q,q,q,q,B.tF,q,q,q),B.af,A.c(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bt,A.c(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cH,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.B,q,B.e,B.h,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.m),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)}}
C.biz.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aV.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,A.eK(new A.D(B.eX,A.A(A.a([A.p(v,D.c58,B.f,v,v,new A.o(q,v,A.K(B.aV.j(0.35),B.r,1),p,v,v,B.m),v,v,v,v,B.tF,v,v,v),B.bc,A.E(A.x(A.a([A.c(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.D,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.B,v,B.e,B.h,0,B.p),1),A.V(B.hP,o,v,v,v,20)],n),B.l,v,B.e,B.h,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.m),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)}}
C.a1h.prototype={
R(){return new C.aGp()},
gd6(){return this.c}}
C.aGp.prototype={
a_(){this.a3()
this.abb()},
abb(){var w=0,v=A.j(x.H),u=this,t
var $async$abb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(R.b5w(u.a.c,B.F_),$async$abb)
case 2:t=e
if(u.c!=null)u.l(new C.e7t(u,t))
return A.h(null,v)}})
return A.i($async$abb,v)},
ajO(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ajO=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.l(new C.e7u(q))
t=4
p=R.hC8(q.a.d,B.F_)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.Y(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(R.aux(n.e,m,l,B.F_,p,n.f),$async$ajO)
case 7:if(q.c==null){r=[1]
w=5
break}q.l(new C.e7v(q))
q.c.L(x.q).f.T(D.fBK)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ac(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c(B.a.eq(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.l(new C.e7w(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ajO,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.Q(d).ax.a===B.I,o=p?B.nQ:B.qQ,n=p?B.iX:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eW(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.hh4,q,q,q,1,q,!0)
w=A.m(24)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.qs(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.c(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.D,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.N,u,B.by,t,B.N,A.c("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.bb,B.h,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.m),q,q,q,q,B.ae,q,q,1/0),1)
v=r.a.e
v=A.c("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ab:B.bB,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcze()
if(u)u=B.Lm
else u=A.V(r.e===!0?B.ho:Ay.aqT,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a4(1/0,q,A.er(u,q,A.c(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cf,q,q,q),t,A.dl(q,q,q,q,q,q,q,q,q,B.aV,q,B.hs,q,q,q,new A.ax(B.aV.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.hz,A.c("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aF:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.S)
w.push(new A.a4(1/0,q,A.bI(Ag.BB,q,new C.e7x(d),A.bp(B.aV,q,q,q,q,B.hs,q,q,q,q,q,q)),q))
return A.c7(m,o,new A.D(B.ae,A.x(w,B.l,q,B.e,B.h,0,B.p),q),q,!1,!1,q,q)}}
C.a1i.prototype={
R(){return new C.bnQ(A.A7(B.zc,B.ox,B.vK))}}
C.bnQ.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return A.c7(A.eW(w,w,w,!0,!0,B.v,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.h8J,w,w,w,1,w,!0),B.v,A.A6(this.d,B.c0,new C.e7L(this,d)),w,!1,!1,w,w)}}
C.b1l.prototype={
B(d){var w=null
return A.c(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Ti,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.mf.prototype={}
C.a89.prototype={
R(){return new C.bnu(null,null)}}
C.bnu.prototype={
a_(){var w=this,v=null
w.a3()
w.d=A.br(v,B.tv,v,1,v,w)
w.e=A.br(v,B.nU,v,1,v,w)
w.a.toString
w.d.cX(0)
w.e.cX(0)},
by(d){var w,v,u=this
u.bJ(d)
u.a.toString
w=u.d
w===$&&A.d()
v=w.r
if(!(v!=null&&v.a!=null))w.cX(0)
w=u.e
w===$&&A.d()
v=w.r
if(!(v!=null&&v.a!=null))w.cX(0)},
t(){var w=this.d
w===$&&A.d()
w.t()
w=this.e
w===$&&A.d()
w.t()
this.bAO()},
B(d){var w,v,u=this,t=B.d.dr(D.a7O,new C.dTw(u),new C.dTx())
u.a.toString
w=u.d
w===$&&A.d()
v=u.e
v===$&&A.d()
return A.cFK(A.cb(new A.hA(A.a([w,v],x.dS)),new C.dTy(u,t),null),!0)}}
C.bnt.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b59(d,e)
break
case"house":p.mp(d,e,D.dnR)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdl()
$.T()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.O(new A.r(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mv(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.BS(d,e,12)
p.yX(d,e,B.lw,5,14)
break
case"grocery":p.cnV(d,e)
break
case"calculator":p.cnC(d,e)
break
case"lumber":p.co2(d,e)
break
case"kitchen":p.cnY(d,e)
break
case"landscape":p.mp(d,e,D.dor)
s=new A.aH($.T().r,B.ak,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.aZ(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.ck(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.ck(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.aq(t,w))
s.E(new A.aq(0,w))
s.E(new A.bA())
w=A.L()
w.r=B.es.j(0.85).gp(0)
d.af(s,w)
p.BS(d,e,8)
p.yX(d,e,B.iM,4,18)
break
case"plumbing":p.coc(d,e)
break
case"electrical":p.mp(d,e,D.dAS)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.T()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aE(new A.a5(0,0,0+e.a,0+e.b),u)
p.mv(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mv(d,e,B.oM.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.BS(d,e,10)
break
case"store":p.com(d,e)
break
case"paint_remodel":p.co7(d,e)
break
case"roofing":p.coe(d,e)
break
case"warehouse":p.cot(d,e)
break
case"vehicles":p.cor(d,e)
break
case"farm":p.cnP(d,e)
break
case"restaurant":p.cod(d,e)
break
case"tools":p.cop(d,e)
break
case"wallet":p.cos(d,e)
break
case"concrete":p.cnI(d,e)
break
case"blueprint":p.cnA(d,e)
break
default:p.b59(d,e)}},
mp(d,e,f){var w,v=new A.a5(0,0,0+e.a,0+e.b)
$.T()
w=A.L()
w.san(new A.a8(B.ay,B.aD,B.x,f,null,null).az(0,v))
d.aE(v,w)},
mv(d,e,f,g,h){var w,v,u,t=new A.r(e.a/2,e.b/2),s=e.gdl()/2-h
$.T()
w=A.L()
w.b=B.ac
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cQ(A.bY(t,s),u,u+0.1439896632895322-u,!1,w)}},
yX(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdl()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.T()
r=new A.ar(B.U,B.R,B.X,B.Y,B.W)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.O(new A.r(q+t*o,p+s*o),3.5,r)}},
BS(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.i.F(t*0.17,0.9)
q=B.i.F(t*0.23,0.85)
$.T()
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.O(new A.r(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b59(d,e){var w,v=this
v.mp(d,e,D.dz2)
w=v.c
v.mv(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mv(d,e,B.bM.j(0.45),-w*3.141592653589793*1.4,22)
v.bSL(d,e,B.i_,w)
v.yX(d,e,B.c.j(0.7),6,8)},
bSL(d,e,f,g){var w,v,u,t,s,r
$.T()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.aE(new A.a5(16,r,t,r+3),w)}},
cnV(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mp(d,e,D.cAf)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.ao(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.T()
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=D.dlQ[B.o.F(t,4)].j(0.85).gp(0)
d.O(new A.r(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mv(d,e,B.c.j(0.35),w,16)
l.yX(d,e,B.iM,5,12)},
cnC(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mp(d,e,D.cAn)
w=i.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdl()
$.T()
q=A.L()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.O(new A.r(t/2,s/2),r*(0.18+u*0.08),q)
p=A.h_(h,B.cK,h,h,h,h,B.a7,B.cc,h,B.e4,B.cd)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dql[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb1(0,new A.eH(r,h,h,B.cY,h,h,h,h,h,h,new A.G(!0,q,h,h,h,h,14+m*4,B.D,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eL()
p.a4(d,new A.r(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ao(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cAp[o]
l=B.kZ.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb1(0,new A.eH(m,h,h,B.cY,h,h,h,h,h,h,new A.G(!0,l,h,h,h,h,12+k*3,B.D,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eL()
p.a4(d,new A.r(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ao(o,3)*0.38)+Math.sin(n)*6))}i.mv(d,e,B.c.j(0.35),w*1.5,14)
i.mv(d,e,B.eH.j(0.55),-v*3.141592653589793*2,8)
i.mv(d,e,B.oH.j(0.4),r*2.8,22)
i.yX(d,e,B.pG,8,10)
i.BS(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.i.F(w+o*0.22,0.9)
$.T()
v=new A.ar(B.U,B.R,B.X,B.Y,B.W)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.r(12,j),new A.r(t,j),v)}},
co2(d,e){var w,v,u,t,s,r,q,p,o=this
o.mp(d,e,W.aCL)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bw(new A.a5(20,r,u,r+10),B.hr)
$.T()
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.r=A.ap(B.h8,B.oA,(s+1)/2).gp(0)
d.aq(q,p)}o.mv(d,e,B.h8.j(0.35),w,15)
o.BS(d,e,8)},
cnY(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mp(d,e,D.dmo)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.i.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.i.F(s*0.13,0.7)
$.T()
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.O(new A.r(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mv(d,e,B.bM.j(0.4),-w*3.141592653589793*2.2,11)
l.yX(d,e,B.qD,4,14)},
coc(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mp(d,e,D.d9i)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.i.F(s,0.12)
$.T()
o=new A.ar(B.U,B.R,B.X,B.Y,B.W)
o.b=B.ac
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.O(new A.r(w,u),q*(0.12+r*0.14+p),o)}n.yX(d,e,B.pK,6,12)
n.mv(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
com(d,e){var w,v,u,t,s,r,q,p=this
p.mp(d,e,D.cOh)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bw(new A.a5(r,14,r+u,22),B.jJ)
$.T()
q=new A.ar(B.U,B.R,B.X,B.Y,B.W)
q.r=A.ap(B.fy,B.bM,(s+1)/2).gp(0)
d.aq(r,q)}p.mv(d,e,B.c.j(0.3),w,16)
p.BS(d,e,8)
p.yX(d,e,B.wL,5,13)},
co7(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.dgi)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.i.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bw(new A.a5(r,q,r+8,q+(18+s*22)),B.iD)
$.T()
r=new A.ar(B.U,B.R,B.X,B.Y,B.W)
r.r=[B.iJ,B.dG,B.bM,B.eF][t].j(0.85).gp(0)
d.aq(q,r)}this.mv(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
coe(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.ddm)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.i.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.T()
q=new A.ar(B.U,B.R,B.X,B.Y,B.W)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.r(u*(0.1+r),s),new A.r(u*(0.18+r),s+10),q)}this.yX(d,e,B.cD,7,11)},
cot(d,e){var w,v,u,t,s,r,q,p
this.mp(d,e,D.cR6)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bw(new A.a5(q,p,q+(t-s*8),p+16),B.hr)
$.T()
q=new A.ar(B.U,B.R,B.X,B.Y,B.W)
q.r=A.ap(B.cD,B.aS,(Math.sin(r)+1)/2).gp(0)
d.aq(p,q)}this.mv(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cor(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.dFs)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.i.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.bw(new A.a5(s,r,s+28,r+8),B.hr)
$.T()
q=new A.ar(B.U,B.R,B.X,B.Y,B.W)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.aq(r,q)}this.BS(d,e,6)},
cnP(d,e){var w,v,u,t,s,r,q,p
this.mp(d,e,D.dkM)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.T()
s=A.L()
s.r=B.oM.j(0.75).gp(0)
d.O(new A.r(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.r=B.hY.j(0.85).gp(0)
p.c=3
d.ah(new A.r(q,v),new A.r(q+s*6,t),p)}this.mv(d,e,B.oM.j(0.35),w,14)},
cod(d,e){var w,v,u,t,s,r,q=this
q.mp(d,e,D.dnE)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bZ(new A.r(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.T()
r=new A.ar(B.U,B.R,B.X,B.Y,B.W)
r.r=B.c.j(0.22).gp(0)
d.c1(s,r)}q.yX(d,e,B.qD,5,16)
q.BS(d,e,7)},
cop(d,e){var w,v,u,t,s,r,q,p,o=this
o.mp(d,e,D.dCG)
w=o.c
v=w*3.141592653589793
o.mv(d,e,B.oA.j(0.55),v*3,10)
o.mv(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.T()
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.r=B.oA.j(0.8).gp(0)
d.O(new A.r(v+r*34,u+q*22),4,p)}},
cos(d,e){var w,v,u,t,s,r,q,p,o=this
o.mp(d,e,D.dGd)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bw(new A.a5(q,p,q+36,p+22),B.jJ)
$.T()
q=new A.ar(B.U,B.R,B.X,B.Y,B.W)
q.r=A.ap(B.iM,B.oM,r).gp(0)
d.aq(p,q)}o.BS(d,e,9)
o.mv(d,e,B.c.j(0.4),w*2.2,12)},
cnI(d,e){var w,v,u,t,s,r,q,p
this.mp(d,e,D.dtw)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bY(new A.r(v,u),34)
$.T()
s=A.L()
s.b=B.ac
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cQ(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.r=B.bO.j(0.85).gp(0)
d.O(new A.r(v+t*34,u+s*34),3,p)}},
cnA(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.doN)
$.T()
w=A.L()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=0;t<v;t+=18)d.ah(new A.r(t,0),new A.r(t,u),w)
for(s=0;s<u;s+=18)d.ah(new A.r(0,s),new A.r(v,s),w)
r=this.c
q=u*B.i.F(r*0.85,1)
$.T()
u=A.L()
u.r=B.dG.j(0.45).gp(0)
d.aE(new A.a5(0,q,0+v,q+6),u)
this.mv(d,e,B.lw.j(0.45),-r*3.141592653589793*2,11)},
aD(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.avi.prototype={
a13(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a13=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aTn(),$async$a13)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.aat(s),$async$a13)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a13,v)},
aio(d){return this.cqM(d)},
cqM(d){var w=0,v=A.j(x.H),u=this,t
var $async$aio=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.iEm(d),$async$aio)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$aio,v)},
B(d){var w,v,u=null,t=A.Q(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.I?B.ka:B.iL
w=x.p
v=A.a([C.aTL(!0,B.rW,1/0,B.re,u,s,1/0)],w)
if(!r)v.push(new A.bQ(new A.o(u,u,u,u,u,new A.a8(B.aX,B.b1,B.x,A.a([B.L,B.v.j(0.35)],x.O),u,u),B.m),B.bm,new A.bK(B.aX,u,u,new A.D(B.tx,A.c("Pick a theme or your own photo",u,u,u,u,u,u,A.l(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,B.aDJ,u,u),u,u,u),u),u),u))
v.push(A.ao(8,A.A(A.a([A.E(A.dd(D.bZn,u,D.fXv,new C.crt(this,d),A.bp(B.aV,u,u,u,B.c,u,B.jW,u,u,u,u,B.co)),1),B.aa,A.E(A.er(D.c7j,u,D.hbV,this.gcht(),A.dl(u,u,B.v.j(0.35),u,u,u,u,u,u,B.c,u,u,B.jW,u,u,D.b7X,u,u,u,B.co)),1)],w),B.l,u,B.e,B.h,0,u,u),u,u,8,8,u,u))
return new A.fM(1.7777777777777777,A.aG(!1,B.a3,!0,B.rW,new A.an(B.a0,u,B.b4,B.t,v,u),B.aq,t,0,u,u,u,u,u,B.ai),u)}}
C.aOz.prototype={
b0(){this.b8()
this.b6()
this.dU()},
t(){var w=this,v=w.bd$
if(v!=null)v.a8(0,w.gdR())
w.bd$=null
w.a2()}}
C.aWK.prototype={}
C.aWJ.prototype={}
C.aUL.prototype={}
C.a_V.prototype={
R(){return new C.aBy()}}
C.aBy.prototype={
a_(){var w,v,u=this
u.a3()
u.a.toString
w=new A.bc("",B.b7,B.aP)
v=$.az()
u.d!==$&&A.aS()
u.d=new A.au(w,v)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.az()
w.W$=0
this.a2()},
Lj(){var w,v,u=this,t=u.d
t===$&&A.d()
w=B.a.i(t.a.a)
if(w.length===0){u.c.L(x.q).f.T(D.fCf)
return}t=u.c
t.toString
v=u.e
A.a7(t,!1).N(new C.aWK(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.Q(d).ax.a===B.I,l=m?B.el:B.c,k=A.m(20),j=A.p(n,D.c6Z,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.m(12),n,n,B.m),n,44,n,n,n,n,n,44),i=A.c("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aS:B.aw,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bt,A.c("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bk,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.B,n,B.e,B.h,0,B.p),1)
j=A.A(A.a([j,B.bc,i,A.aI(n,n,n,n,A.V(B.cC,m?B.bv:B.bk,n,n,n,n),n,n,n,new C.dbZ(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.h,0,n,n)
i=A.c("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bk,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.c("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bk,n,n,n,n,n,n,n,n,11,n,n,B.cH,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hCo(new C.dc_(o),o.e)
u=o.d
u===$&&A.d()
t=A.l(n,n,m?B.aS:B.aw,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.ka:B.iL
r=A.m(12)
q=A.m(12)
p=m?B.eo:B.bO
t=A.aN(n,B.M,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bC(n,new A.b6(4,r,B.dB),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ax(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.al,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.dc0(o),n,!1,n,n,!1,n,!0,n,B.ae,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a7,n,A0.Lv,n,n,n,n)
u=m?B.aS:B.aw
m=m?B.eo:B.bO
return A.eI(n,l,new A.cS(B.mh,A.cc(A.x(A.a([j,B.aO,i,B.at,w,B.N,v,B.aO,t,B.by,A.A(A.a([A.E(A.dZ(B.dw,new C.dc1(d),A.dl(n,n,n,n,n,n,n,n,n,u,n,n,B.cq,n,new A.b9(A.m(12),B.a1),new A.ax(m,1,B.r,-1),n,n,n,n)),1),B.ar,A.E(A.bI(D.hcb,n,o.ga4f(),A.bp(B.aV,n,n,n,B.c,n,B.cq,n,new A.b9(A.m(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.h,0,n,n)],h),B.B,n,B.e,B.P,0,B.p),B.t,n,B.y,n,n,B.Db,n,n,B.ah),n),n,n,n,B.Dc,n,B.dd,n,new A.b9(k,B.a1),n)}}
C.a_U.prototype={
R(){return new C.aBx()}}
C.aBx.prototype={
a_(){this.a3()
var w=$.az()
this.d!==$&&A.aS()
this.d=new A.au(B.ax,w)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.az()
w.W$=0
this.a2()},
Lj(){var w,v=this.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0){this.c.L(x.q).f.T(D.fzR)
return}v=this.c
v.toString
A.a7(v,!1).N(new C.aWJ(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.Q(d).ax.a===B.I,o=p?B.el:B.c,n=A.m(20),m=A.p(q,D.c3e,B.f,q,q,new A.o(B.bU.j(0.15),q,q,A.m(12),q,q,B.m),q,44,q,q,q,q,q,44),l=A.c("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bt,A.c("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bv:B.bk,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.B,q,B.e,B.h,0,B.p),1)
m=A.A(A.a([m,B.bc,l,A.aI(q,q,q,q,A.V(B.cC,p?B.bv:B.bk,q,q,q,q),q,q,q,new C.dbV(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.h,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.m(12)
v=A.K(B.aV.j(0.25),B.r,1)
u=A.V(B.aqF,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.ar,A.E(A.c("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.h,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.m),q,q,q,q,B.bF,q,q,1/0)
w=this.d
w===$&&A.d()
v=A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.ka:B.iL
t=A.m(12)
s=A.m(12)
r=p?B.eo:B.bO
v=A.aN(q,B.M,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bC(q,new A.b6(4,t,B.dB),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ax(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.al,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.dbW(this),q,!1,q,q,!1,q,!0,q,B.ae,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a7,q,B.lm,q,q,q,q)
w=p?B.aS:B.aw
p=p?B.eo:B.bO
return A.eI(q,o,new A.cS(B.mh,A.cc(A.x(A.a([m,B.aO,l,B.aB,v,B.by,A.A(A.a([A.E(A.dZ(B.dw,new C.dbX(d),A.dl(q,q,q,q,q,q,q,q,q,w,q,q,B.cq,q,new A.b9(A.m(12),B.a1),new A.ax(p,1,B.r,-1),q,q,q,q)),1),B.ar,A.E(A.bI(D.hjo,q,this.ga4f(),A.bp(B.bU,q,q,q,B.c,q,B.cq,q,new A.b9(A.m(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.h,0,q,q)],k),B.B,q,B.e,B.P,0,B.p),B.t,q,B.y,q,q,B.Db,q,q,B.ah),q),q,q,q,B.Dc,q,B.dd,q,new A.b9(n,B.a1),q)}}
C.a_o.prototype={
R(){return new C.aAd()}}
C.aAd.prototype={
a_(){var w,v=this
v.a3()
w=$.az()
v.d!==$&&A.aS()
v.d=new A.au(B.ax,w)
v.e!==$&&A.aS()
v.e=new A.au(new A.bc("1",B.b7,B.aP),w)
v.f!==$&&A.aS()
v.f=new A.au(B.ax,w)
v.r!==$&&A.aS()
v.r=new A.au(B.ax,w)},
t(){var w,v=this,u=v.d
u===$&&A.d()
w=u.V$=$.az()
u.W$=0
u=v.e
u===$&&A.d()
u.V$=w
u.W$=0
u=v.f
u===$&&A.d()
u.V$=w
u.W$=0
u=v.r
u===$&&A.d()
u.V$=w
u.W$=0
v.a2()},
gKB(){var w,v=this.e
v===$&&A.d()
w=A.cA(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
galy(){var w=this.f
w===$&&A.d()
w=A.cA(B.a.i(w.a.a))
return w==null?0:w},
gb8_(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.d()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aS1(d){var w,v=B.i.D(this.gKB()+d,0.25,999999),u=B.i.fP(v),t=this.e
t===$&&A.d()
if(v===u)u=B.o.v(B.i.M(v))
else{u=B.i.a5(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aK(u,w,"")}t.sb1(0,u)
this.l(new C.cJO())},
aAX(d,e,f,g){var w=null,v=g!=null?A.V(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.ka:B.iL,s=A.m(14),r=A.m(14)
u=u?B.eo:B.bO
return A.bC(w,new A.b6(4,s,B.dB),w,B.bF,w,w,w,w,!0,new A.b6(4,r,new A.ax(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.m(14),B.afN),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
chu(d,e,f){return this.aAX(d,e,f,null)},
Lj(){var w,v,u,t,s=this,r=s.d
r===$&&A.d()
w=B.a.i(r.a.a)
if(s.galy()<=0){s.c.L(x.q).f.T(D.fE9)
return}r=s.c
r.toString
v=s.gKB()
u=s.galy()
t=s.gb8_()
A.a7(r,!1).N(new C.aUL(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.us(n),l=n?B.el:B.c,k=A.m(24),j=x.O,i=A.a([B.aV.j(0.22),B.bU.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bXh,B.f,o,o,new A.o(o,o,A.K(B.aV.j(0.35),B.r,1),h,o,new A.a8(B.a5,B.a9,B.x,i,o,o),B.m),o,48,o,o,o,o,o,48)
h=A.c("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bt,A.c("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bk,o,o,o,o,o,o,o,o,12,o,o,B.cH,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.h,0,B.p),1)
i=A.A(A.a([i,B.bc,h,A.aI(o,o,o,o,A.V(B.cC,n?B.bv:B.bk,o,o,o,o),o,o,o,new C.cJU(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.h,0,o,o)
h=p.d
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aN(o,B.M,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.aAX(m,"Item name (optional)","Lumber, paint, labor\u2026",B.QK),B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,A0.Lv,o,o,o,o)
h=A.c("Units",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bk,o,o,o,o,o,o,o,o,12,o,o,B.D,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.ka:B.iL
t=A.m(14)
s=A.K(n?B.eo:B.bO,B.r,1)
r=A.aI(o,o,o,o,A.V(B.xs,n?B.aS:B.aw,o,o,o,20),o,o,o,new C.cJV(p),o,o,o,o,o,B.co)
q=p.e
q===$&&A.d()
q=A.aN(o,B.M,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.c8S,B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,B.eh,o,o,o,1,o,o,!1,"\u2022",o,new C.cJW(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a4(52,o,q,o),A.aI(o,o,o,o,A.V(B.id,n?B.aS:B.aw,o,o,o,20),o,o,o,new C.cJX(p),o,o,o,o,o,B.co)],w),B.l,o,B.e,B.P,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.m),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.d()
s=A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.ar,A.E(A.aN(o,B.M,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.aAX(m,"Amount","0.00",B.hO),B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,B.eh,o,o,o,1,o,o,!1,"\u2022",o,new C.cJY(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a7,o,B.ao,o,o,o,o),1)],w),B.B,o,B.e,B.h,0,o,o)
t=x.gv
u=A.B(new A.O(D.dgR,new C.cJZ(p,m),t),t.k("aj.E"))
i=A.a([i,B.by,v,B.aB,h,B.N,s,B.af,A.c_(B.bI,u,B.br,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.u(i,A.a([B.S,A.aN(o,B.M,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.chu(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cK_(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,B.lm,o,o,o,o)],w))}i.push(B.aO)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bU.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.c("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bk,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gKB()===B.i.fP(p.gKB())?B.i.M(p.gKB()):p.gKB()
s=p.gb8_()
r=A.BB(p.galy())
i.push(A.p(o,A.A(A.a([A.E(A.x(A.a([u,B.at,A.c(A.v(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bk,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.h,0,B.p),1),C.bI8(p.gKB()*p.galy(),B.b5,!1,B.u)],w),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a8(B.a5,B.a9,B.x,j,o,o),B.m),o,o,o,o,B.jC,o,o,o))
i.push(B.by)
j=A.m(14)
h=n?B.eo:B.bO
h=A.dl(o,o,o,o,o,o,o,o,o,o,o,o,B.cq,o,new A.b9(j,B.a1),new A.ax(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dZ(A.c("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cK0(d),h),1),B.ar,A.E(A.dd(D.aua,o,D.hfe,p.ga4f(),A.bp(B.aV,o,o,0,B.c,o,B.cq,o,new A.b9(A.m(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.h,0,o,o))
return A.eI(o,l,new A.cS(B.MW,A.cc(A.x(i,B.am,o,B.e,B.P,0,B.p),B.t,o,B.y,o,o,Ak.tD,o,o,B.ah),o),o,o,o,B.Pk,o,B.dd,o,new A.b9(k,B.a1),o)}}
C.a33.prototype={
R(){return new C.bAn()}}
C.bAn.prototype={
a_(){var w,v,u=this
u.a3()
w=u.a.e
v=$.az()
u.d!==$&&A.aS()
u.d=new A.au(new A.bc(w,B.b7,B.aP),v)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.az()
w.W$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.Q(d).ax.a===B.I,q=r?B.el:B.c,p=A.m(20),o=t.a.c
o=A.c(o,s,s,s,s,s,s,A.l(s,s,r?B.aS:B.aw,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.d()
v=A.l(s,s,r?B.aS:B.aw,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.ka:B.iL
v=A.aN(s,B.M,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bC(s,new A.b6(4,A.m(12),B.dB),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.al,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fuv(t,d),s,!1,s,s,!1,s,!0,s,B.ae,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a7,s,B.ao,s,s,s,s)
u=A.E(A.dZ(B.dw,new C.fuw(d),s),1)
r=A.bp(B.bU,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eI(s,q,new A.D(B.Db,A.x(A.a([o,B.aB,v,B.aO,A.A(A.a([u,B.ar,A.E(A.bI(A.c(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fux(t,d),r),1)],w),B.l,s,B.e,B.h,0,s,s)],w),B.l,s,B.e,B.P,0,B.p),s),s,s,s,s,s,B.dd,s,new A.b9(p,B.a1),s)}}
C.adv.prototype={
a9(){return"WorksheetFrameStyle."+this.b}}
C.GG.prototype={
R(){return new C.bAl(null,null)}}
C.bAl.prototype={
a_(){var w,v=this
v.a3()
w=A.br(null,D.bE4,null,1,null,v)
w.cX(0)
v.d!==$&&A.aS()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bD7()},
gbEK(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bU,B.b5],x.O)
case 2:return A.a([B.bw,B.aV,B.b5],x.O)
case 3:return A.a([B.aH,B.ch,B.jR],x.O)
case 4:return A.a([B.fY,B.bU,B.fz],x.O)
case 0:return A.a([B.aV,B.bU,B.b5],x.O)}},
B(d){var w=A.Q(d),v=this.d
v===$&&A.d()
return new A.e8(A.cb(v,new C.fut(this,new C.us(w.ax.a===B.I)),null),null)}}
C.aA6.prototype={
R(){return new C.bAm(null,null)}}
C.bAm.prototype={
a_(){var w,v=this
v.a3()
w=A.br(null,B.nW,null,1,null,v)
w.cX(0)
v.d!==$&&A.aS()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bD8()},
B(d){var w=this.d
w===$&&A.d()
return A.cb(w,new C.fuu(this),null)}}
C.bAk.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bw(new A.a5(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aP(w,w))
u=new A.aH($.T().r,B.ak,null,null,A.a([],x.v))
u.E(new A.jq(v))
w=A.L()
w.b=B.ac
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aq(v,w)
w=A.L()
w.b=B.ac
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.af(u,w)
w=A.zP(u)
t=A.a([],x.U)
w=new A.v5(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.bi(A.jW(y.B));--r
q=new A.C_(w,r)
w.jP()
r=t[r].b
r===$&&A.d()
r=r.a.length()
p.aVD(d,q,r,o,0,0.2,4.2,0.92)
p.aVD(d,q,r,s,0.52,0.11,3.2,0.58)}},
aVD(d,e,f,g,h,i,j,k){var w,v,u,t=B.i.F(g+h,1)*f,s=A.i_b(e.a.a,e,t,t+f*i,!0),r=A.aiC(s.glc().a.getBounds())
$.T()
w=A.L()
w.b=B.ac
w.c=j
w.d=B.bG
w.f=!0
v=this.f
u=k*this.e
w.san(new A.a8(B.a5,B.a9,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Jm,null).az(0,r))
d.af(s,w)},
aD(d){return d.b!==this.b||d.d!==this.d}}
C.aQG.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b6()
this.bC()}}
C.aQH.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b6()
this.bC()}}
C.us.prototype={}
C.avh.prototype={
R(){return new C.aHY()},
ge9(){return this.c}}
C.aHY.prototype={
a_(){var w=this
w.a3()
w.d=w.a.d
w.aje()},
t(){var w=this.a.c,v=this.d
v===$&&A.d()
C.Mx(w,v)
this.a2()},
aje(){var w=0,v=A.j(x.H),u=this,t,s
var $async$aje=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bGw(t.c,t.d.a),$async$aje)
case 2:s=e
if(s!=null&&u.c!=null)u.l(new C.f1Y(u,s))
return A.h(null,v)}})
return A.i($async$aje,v)},
Rr(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Rr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.l(new C.f1P(u))
t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.Mx(t,s),$async$Rr)
case 2:if(u.c!=null)u.l(new C.f1Q(u))
return A.h(null,v)}})
return A.i($async$Rr,v)},
RZ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$RZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.Q(p)
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.f1W(t,new C.us(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$RZ)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.d()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.aat(q),$async$RZ)
case 6:case 5:t.l(new C.f1X(t,r))
w=7
return A.b(t.Rr(),$async$RZ)
case 7:case 1:return A.h(u,v)}})
return A.i($async$RZ,v)},
X5(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.iE7(r),$async$X5)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.f1K(t,new C.rF(B.o.v(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Rr(),$async$X5)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X5,v)},
cmJ(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.d()
C.hRv(t,new C.f1O(u),w,v)},
ad_(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bE(new A.ax(v,2.5,B.r,-1),B.a1,B.a1,new A.ax(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b7J,w,w,B.m),w,22,w,w,w,w,w,22)},
ac1(d){return this.bR_(d)},
bR_(d){var w=0,v=A.j(x.H),u=this
var $async$ac1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.l(new C.f1N(u,d))
w=2
return A.b(u.Rr(),$async$ac1)
case 2:return A.h(null,v)}})
return A.i($async$ac1,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.Q(a2).ax.a===B.I,e=f?B.c7:B.hX,d=A.m(8),a0=A.V(Z.a3s,f?B.bv:B.bk,g,g,g,16),a1=x.p
a0=A.aM(!1,d,!0,new A.D(B.HR,A.A(A.a([a0,B.ba,A.c("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bv:B.bk,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.P,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.f1Z(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.d()
d=d.c
if(d!=null&&B.a.Y(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b4,B.t,A.a([A.by(A.m(22),C.aTL(!0,A.m(22),1/0,B.re,g,d,1/0),B.aq),A.ao(10,A.dd(D.c17,g,D.hhD,h.gb5V(),A.bp(B.v.j(0.45),g,g,g,B.c,g,B.hc,g,new A.b9(A.m(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.aa(0,B.H,B.aV.j(f?0.5:0.38),B.eT,22),new A.aa(-4,B.H,B.bU.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.aa(-2,B.H,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.by(s,new A.an(B.a0,g,B.b4,B.t,A.a([C.aTL(!0,A.m(16),1/0,B.Qa,g,r.c,1/0),new A.bQ(new A.o(g,g,g,g,g,new A.a8(B.aX,B.b1,B.x,A.a([B.c.j(0.06),B.L,B.v.j(0.22)],x.O),g,g),B.m),B.bm,g,g),A.ao(g,h.ad_(!0),g,g,8,g,8,g),A.ao(g,A.cGt(h.ad_(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cGt(h.ad_(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cGt(h.ad_(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dd(D.bXU,g,D.haT,h.gb5V(),A.bp(B.v.j(0.45),g,g,g,B.c,g,B.hc,g,new A.b9(A.m(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.m),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.caz,B.m),g,g,g,g,B.m0,g,g,g)
d=v}w=h.d
w=A.c(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aS:B.aw,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.biG,B.oE,B.hx],u):A.a([B.b5,B.aV,B.bU],u)
t=x.V
s=A.a([new A.aa(0,B.H,B.aV.j(f?0.45:0.35),B.eT,24)],t)
r=A.m(22)
p=A.ao(g,A.V(B.jD,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.c(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.D,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.m),g,g,g,g,B.hm,g,g,g)],a1),B.l,g,B.e,B.h,0,g,g),B.aB,A.c("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.D,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.aj,C.bI8(h.d.gxS(),B.c,!0,B.u)],a1)
if(q>0)B.d.u(n,A.a([B.N,A.c("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cH,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.B,g,B.e,B.h,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.K(B.hk.j(0.75),B.r,1.6)
t=A.a([new A.aa(0,B.H,B.aH.j(0.28),B.cN,14)],t)
j=B.aH.j(0.22)
i=A.m(10)
u=A.p(g,A.by(r,new A.an(B.a0,g,B.ad,B.t,A.a([p,new A.D(D.bJ1,A.A(A.a([o,B.ar,A.aG(!1,B.a3,!0,g,A.aM(!1,n,!0,A.eK(new A.D(B.x4,A.x(A.a([A.p(g,D.atK,B.f,g,g,new A.o(j,g,A.K(B.aH.j(0.5),B.r,1),i,g,g,B.m),g,g,g,g,B.cu,g,g,g),B.fP,D.h_q],a1),B.l,g,B.e,B.P,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.m),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcmI(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.ai)],a1),B.l,g,B.e,B.h,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a8(B.ay,B.aD,B.x,u,g,g),B.m),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fM(1.7777777777777777,d,g),B.aO,w,B.N,u,B.by,A.A(A.a([A.c("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.aw,g,g,g,g,g,g,g,g,16,g,g,B.D,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.aW,A.dd(A9.a5i,g,D.fYb,h.gbFe(),A.bp(B.aV,g,g,g,B.c,g,B.hn,g,new A.b9(A.m(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.h,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.el:B.c
v=A.m(14)
u=A.K(f?B.eo:B.bO,B.r,1)
t=A.V(B.a3O,f?B.bv:B.bk,g,g,g,48)
s=A.c("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.aw,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.S,s,B.aj,A.c("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bv:B.bk,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.h,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.m),g,g,g,g,B.ra,g,g,1/0))}else B.d.u(d,new A.O(w,new C.f2_(h,new C.us(f)),A.U(w).k("O<1,w>")))
if(h.e)d.push(new A.D(B.zi,A.at(A.nj(g,f?B.bv:B.bk,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c7(g,e,A.bo(!0,A.x(A.a([new A.D(A_.D3,a0,g),A.E(A.cc(A.x(d,B.B,g,B.e,B.h,0,B.p),B.t,g,B.y,g,g,E.zv,g,g,B.ah),1)],a1),B.B,g,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bJ_(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.el:B.c,p=A.m(16),o=A.a([new A.aa(0,B.H,B.v.j(r?0.35:0.08),B.cN,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.bas,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.V(s?B.iw:B.h0,B.b5,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.m),u,40,u,u,u,u,u,40)
if(s)t=B.bK
else{k=x.p
t=A.a([A.c(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aS:B.aw,u,u,u,u,u,u,u,u,15,u,u,B.D,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd2Z()
v=A.BB(d.d)
B.d.u(t,A.a([B.at,A.c(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bv:B.bk,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.B,u,B.bb,B.P,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bU.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bI8(d.c*d.d,B.b5,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a8(B.a5,B.a9,B.x,k,u,u),B.m),u,u,u,u,B.hc,u,u,u)
w=x.p
return A.p(u,A.by(n,new A.F8(A.A(A.a([m,A.E(new A.D(B.anu,A.A(A.a([l,B.bc,t,B.aa,k,A.aI(u,u,u,u,A.V(B.cC,(r?B.bv:B.bk).j(0.75),u,u,u,20),u,u,u,new C.f1L(this,d),u,u,u,u,u,B.co)],w),B.l,u,B.e,B.h,0,u,u),u),1)],w),B.am,u,B.e,B.h,0,u,u),u),B.aq),B.f,u,D.b9i,new A.o(q,u,u,p,o,u,B.m),u,u,u,B.d7,u,u,u,u)}}
C.afA.prototype={
Fj(d){return this.bSn(d)},
bSn(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Fj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(M.pS(d,o,!1),$async$Fj)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).N(null)
w=4
return A.b(A.bN(B.CY,null,x.H),$async$Fj)
case 4:s=t.d
w=5
return A.b(C.h4R(!0,o,s),$async$Fj)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.HA(r,"ngmy_project_"+A.aK(s.b,q,"_"),!1),$async$Fj)
case 6:p=f
w=7
return A.b(M.pR(o,!1),$async$Fj)
case 7:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c(p,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Fj,v)},
a15(d){return this.cDu(d)},
cDu(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a15=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(M.pS(d,s,!1),$async$a15)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).N(null)
A.hD(d,new C.avb(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(M.pR(s,!1),$async$a15)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a15,v)},
Rs(d){return this.czq(d)},
czq(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Rs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).N(null)
w=3
return A.b(A.hD(d,D.aNx,!0,"NgmyWorksheetProjectScan",x.N),$async$Rs)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bI9(s),$async$Rs)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.L(x.q).f.T(D.fDg)
w=1
break}q=C.hrP(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dR(p,x.H),$async$Rs)
case 5:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Rs,v)},
a16(d){return this.cM1(d)},
cM1(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a16=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).N(null)
w=3
return A.b(C.bHD(),$async$a16)
case 3:s=f
if(s==null){w=1
break}r=C.hrP(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dR(q,x.H),$async$a16)
case 4:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a16,v)},
B(d){var w=this,v=null,u=A.Q(d).ax.a===B.I,t=new C.us(u),s=w.d.d.length,r=u?B.el:B.c,q=A.m(28),p=A.a([new A.aa(0,B.H,B.v.j(u?0.35:0.08),B.kQ,36)],x.V),o=x.p
return A.bo(!0,new A.D(B.x3,A.p(v,A.x(A.a([w.cC3(d,t,s),new A.D(D.bIp,A.x(A.a([w.b8V(t,"QR restore"),B.S,A.A(A.a([w.b3S(t,!0,B.jG,B.aH,B.aH,new C.f21(w,d),"Show to scan","QR code"),B.ar,w.aAY(t,B.jH,B.b_,B.bl,new C.f22(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.h,0,v,v),B.di,w.b8V(t,"Backup files"),B.S,A.A(A.a([w.aAY(t,B.hP,B.aV,B.bU,new C.f23(w,d),"Full copy","Backup file"),B.ar,w.aAY(t,Q.Ab,B.as,B.aQ,new C.f24(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.h,0,v,v)],o),B.B,v,B.e,B.h,0,B.p),v)],o),B.l,v,B.e,B.P,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.m),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cC3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.fm,B.cZ,B.h6],k):A.a([B.b5,B.aV,B.bU],k)
w=A.ao(l,A.V(B.vD,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.m),l,4,l,B.kJ,l,l,l,36),l,l,l)
u=A.m(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.aa(0,B.H,B.v.j(0.2),B.cN,12)],x.V)
r=this.d
s=A.p(l,C.aTL(!0,A.m(13),64,D.bT3,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.m),l,64,l,l,l,l,l,64)
u=A.c("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.D,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.c(r.b,l,2,B.a2,l,l,l,I.ad7,l,l,l)
r=C.bI8(r.gxS(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.a0,l,B.ad,B.t,A.a([w,new A.D(D.bIN,A.x(A.a([v,A.A(A.a([s,B.ew,A.E(A.x(A.a([u,B.at,t,B.N,A.A(A.a([r,B.aa,A.p(l,A.c(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.D,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.m),l,l,l,l,B.fa,l,l,l)],m),B.l,l,B.e,B.h,0,l,l)],m),B.B,l,B.e,B.h,0,B.p),1),A.aI(l,l,l,l,A.V(B.cC,B.c.j(0.85),l,l,l,l),l,l,l,new C.f20(d),l,l,l,A.no(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aVY,l,l,l,l),l,l)],m),B.B,l,B.e,B.h,0,l,l)],m),B.l,l,B.e,B.h,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.ay,B.aD,B.x,k,l,l),B.m),l,l,l,l,l,l,l,1/0)},
b8V(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.m),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.aa,A.c(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bv:B.bk,w,w,w,w,w,w,w,w,11,w,w,B.D,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
b3S(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.am2:B.aS
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.eo:B.bO
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.aa(0,B.H,B.aH.j(0.12),B.cN,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.K(h.j(0.35),B.r,1)
t=A.p(r,A.V(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.m),r,r,r,r,B.tF,r,r,r)
u=A.c(k,r,r,r,r,r,r,A.l(r,r,o?B.aS:B.aw,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aG(!1,B.a3,!0,r,A.aM(!1,q,!0,A.eK(new A.D(E.a1R,A.x(A.a([t,B.af,u,B.bt,A.c(j,r,r,r,r,r,r,A.l(r,r,o?B.bv:B.bk,r,r,r,r,r,r,r,r,11,r,r,B.cH,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.h,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
aAY(d,e,f,g,h,i,j){return this.b3S(d,!1,e,f,g,h,i,j)}}
C.avb.prototype={
R(){return new C.bpd()}}
C.bpd.prototype={
a_(){this.a3()
this.ah8()},
ah8(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$ah8=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bIa(p.c,p.d),$async$ah8)
case 7:q=e
if(r.c==null){w=1
break}r.l(new C.f1F(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.l(new C.f1G(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ah8,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.Q(d).ax.a===B.I,f=g?B.Ct:B.hX,e=i.d
e=e==null?h:B.a.Y(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aI(h,h,h,h,A.V(B.eC,g?B.ab:B.an,h,h,h,18),h,h,h,new C.f1H(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.c("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.uq],u),B.l,h,B.e,B.h,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.fm,B.cZ,B.h6],s):A.a([B.b5,B.aV,B.bU],s)
r=x.V
q=A.a([new A.aa(0,B.H,B.aV.j(g?0.4:0.3),B.eT,24)],r)
p=i.a.d
o=A.c(p.b,h,h,h,h,h,h,B.dv,B.K,h,h)
p=C.bI8(p.gxS(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.aj,A.A(A.a([p,B.aa,A.p(h,A.c(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.D,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.m),h,h,h,h,B.fa,h,h,h)],u),B.l,h,B.bb,B.h,0,h,h)],u),B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a8(B.ay,B.aD,B.x,s,h,h),B.m),h,h,h,h,E.a2c,h,h,1/0)
t=g?D.bul:B.c
q=A.m(24)
p=A.K(w?B.aH.j(0.4):B.aV.j(0.3),B.r,1)
r=A.a([new A.aa(0,B.H,B.v.j(g?0.25:0.06),B.du,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.c(n,h,h,h,h,h,h,B.WH,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.eGy)
else{m=A.m(20)
l=A.K(B.bn,B.r,1)
o.push(A.p(h,A.qs(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.m),h,h,h,h,B.bS,h,h,h))}}o.push(B.aO)
n=w?B.aH:B.aV
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.K((w?B.aH:B.aV).j(0.35),B.r,1)
k=w?B.Qr:B.R0
k=A.V(k,w?B.aH:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.ar,A.E(A.c(j,h,h,h,h,h,h,A.l(h,h,g?B.ab:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.h,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.m),h,h,h,h,B.hn,h,h,h))
return A.c7(h,f,A.bo(!0,A.x(A.a([new A.D(Ah.Px,e,h),A.E(A.cc(A.x(A.a([s,B.aO,A.p(h,A.x(o,B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.m),h,h,h,h,B.vg,h,h,1/0)],u),B.l,h,B.e,B.h,0,B.p),B.t,h,B.y,h,h,E.aoH,h,h,B.ah),1)],u),B.l,h,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.avg.prototype={
R(){return new C.aHX(A.A7(B.OO,B.ox,B.vK))}}
C.aHX.prototype={
t(){this.d.t()
this.a2()},
aPY(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.jj(w,d)},
cim(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s=C.iC7(t)
if(s!=null){this.aPY(s)
return}r=C.hH_(t)
if(r!=null)q=A.cZ(r,p,0)
else q=!1
if(q){this.aPY(B.a.i(B.a.aV(r,B.a.cd(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eW(A.a([A.aI(t,t,t,t,A.V(u.f?B.rj:Ab.Qz,t,t,t,t,t),t,t,t,new C.f1J(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.Ct,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.haL,t,t,t,1,t,!0),q=A.A6(u.d,B.c0,u.gcil()),p=A.m(28)
p=A.at(A.p(t,t,B.f,t,t,new A.o(t,t,A.K(B.aV,B.r,3),p,A.a([new A.aa(2,B.H,B.aV.j(0.35),B.J,24)],x.V),t,B.m),t,260,t,t,t,t,t,260),t,t,t)
w=B.v.j(0.72)
v=A.m(16)
return A.c7(r,B.v,new A.an(B.a0,t,B.b4,B.t,A.a([q,p,A.ao(32,A.p(t,D.h9w,B.f,t,t,new A.o(w,t,A.K(B.aV.j(0.45),B.r,1),v,t,t,B.m),t,t,t,t,B.jC,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aMU.prototype={
a9(){return"_WorksheetTab."+this.b}}
C.Pt.prototype={
R(){return new C.aHZ(D.af6,A.a([],x.D))},
bw(){return this.r.$0()},
ge9(){return this.c}}
C.aHZ.prototype={
gcJK(){return J.bJi(this.e,0,new C.f2r())},
a_(){this.a3()
$.aU.cV$.push(this)
this.wu()},
t(){$.aU.hZ(this)
this.a2()},
jn(d){if(d===B.h5)this.wu()},
wu(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wu=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.DU(q.a.c).d7(0,B.kg),$async$wu)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.l(new C.f2n(q,p))
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
if(q.c!=null&&q.f)q.l(new C.f2o(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wu,v)},
IS(d){return this.bP4(d)},
bP3(){return this.IS(null)},
bP4(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iE9(l,d),$async$IS)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
r=s.a
q=s.b
p=new C.lY(l,r,q,D.dtM,new A.W(Date.now(),0,!1))
w=4
return A.b(C.Mx(t.a.c,p),$async$IS)
case 4:o=f
w=5
return A.b(t.wu(),$async$IS)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.L(x.q).f.T(D.fAk)
w=1
break}n=J.aQ(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gP(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.L(q).f.T(D.fC9)
else n.L(q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.Fn(m)
case 1:return A.h(u,v)}})
return A.i($async$IS,v)},
Fn(d){return this.cmu(d)},
cmu(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Fn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hD(s,new C.avh(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$Fn)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Mx(u.a.c,t),$async$Fn)
case 5:case 4:w=6
return A.b(u.wu(),$async$Fn)
case 6:return A.h(null,v)}})
return A.i($async$Fn,v)},
we(d){return this.c4t(d)},
c4t(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$we=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bHD(),$async$we)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hD(r,D.aNx,!0,"NgmyWorksheetProjectScan",x.N),$async$we)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bI9(q),$async$we)
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
r.T(A.b3(null,null,null,null,null,B.t,null,A.c(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hrP(s)
w=15
return A.b(C.Mx(t.a.c,p),$async$we)
case 15:o=f
w=16
return A.b(t.wu(),$async$we)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.L(x.q).f.T(D.fCe)
w=1
break}r.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.Fn(p)
case 1:return A.h(u,v)}})
return A.i($async$we,v)},
P1(d){return this.bNH(d)},
bNH(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$P1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cg(null,null,!0,null,new C.f28(d),s,null,!0,!0,x.y),$async$P1)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.pu(t.a.c,A.a([],x.D)),$async$P1)
case 6:w=7
return A.b(t.wu(),$async$P1)
case 7:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fAp)
case 4:case 1:return A.h(u,v)}})
return A.i($async$P1,v)},
cmH(d){var w=this.c
w.toString
A.bV(B.L,null,new C.f2h(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b9z(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.ka
else w=B.c
v=A.m(16)
u=A.K(p?B.eo:B.bO,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.V(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.m),r,r,r,r,B.bR,r,r,r)
t=A.c(i,r,r,r,r,r,r,A.l(r,r,p?B.aS:B.aw,r,r,r,r,r,r,r,r,14,r,r,B.D,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aG(!1,B.a3,!0,r,A.aM(!1,q,!0,A.p(r,A.x(A.a([s,B.af,t,B.bt,A.c(h,r,r,r,r,r,r,A.l(r,r,p?B.bv:B.bk,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.h,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.m),r,r,r,r,B.tC,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
a1C(d,e){return this.cmv(d,e)},
cmv(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1C=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(B.L,null,new C.f2c(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a1C)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hRv(r,new C.f2d(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.P3(d,e),$async$a1C)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1C,v)},
b6x(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.V(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.m),u,u,u,u,B.bR,u,u,u)
if(d)t=B.aC
else t=h.a?B.aS:B.aw
t=A.c(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.D,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.c(i,u,u,u,u,u,u,A.l(u,u,w?B.bv:B.bk,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.B,u,B.e,B.h,0,B.p),1)
return A.aG(!1,B.a3,!0,u,A.aM(!1,u,!0,new A.D(A2.D9,A.A(A.a([s,B.bc,t,A.V(B.eM,w?B.bv:B.bk,u,u,u,u)],v),B.l,u,B.e,B.h,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai)},
ctB(d,e,f,g,h,i){return this.b6x(!1,d,e,f,g,h,i)},
P3(d,e){return this.bNR(d,e)},
bNR(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$P3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lC(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$P3)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bGi(t.a.c,d.a),$async$P3)
case 6:w=7
return A.b(t.wu(),$async$P3)
case 7:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$P3,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.us(n),l=n?B.c7:B.hX
if(p.f)n=D.bgp
else{w=A.aF(d,B.dK,x.w).w
v=p.bI5(m)
u=p.c3x(m)
t=p.gbF6()
if(n)s=B.ka
else s=B.c
r=A.m(13)
q=x.p
t=A.a([v,B.af,u,B.aO,new C.GG(A.p(o,A.A(A.a([p.aEA(P.Q9,"Projects",m,D.af6),p.aEA(B.vn,"Cashier",m,D.b4b),p.aEA(B.I8,"Family Tree",m,D.i_r)],q),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(s,o,o,r,o,o,B.m),o,o,o,o,o,o,o,o),14,B.eB,0.95,t,o),B.by],q)
v=p.d
if(v===D.af6){v=J.ad(p.e)
B.d.u(t,A.a([A.A(A.a([A.c("Projects ("+v+")",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.D,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aW,new C.aA6(p.gaUo(),o)],q),B.l,o,B.e,B.h,0,o,o),B.aB,p.ctD(m)],q))}else{n=p.a
if(v===D.b4b)t.push(new C.ar2(n.c,m,o))
else{v=p.r
t.push(new C.asg(n.c,n.d,n.e,n.f,new C.f2u(p),new C.f2v(p),new A.bg(v,x.b4)))}}n=A.cc(A.x(t,B.B,o,B.e,B.h,0,B.p),B.t,o,B.y,o,o,new A.R(20,w.r.b+8,20,32),o,o,B.ah)}return A.c7(o,l,A.bo(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bI5(d){var w=null,v=A.m(8),u=d.a,t=A.V(Z.a3s,u?B.bv:B.bk,w,w,w,16)
return A.aM(!1,v,!0,new A.D(B.jX,A.A(A.a([t,B.ba,A.c("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bv:B.bk,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.P,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f25(this),w,w,w,w,w,w,w)},
gbF6(){switch(this.d.a){case 0:return D.aef
case 1:return D.hN2
case 2:return D.aeg}},
c3x(d){var w=null,v=A.m(15),u=A.a([new A.aa(0,B.H,B.aV.j(0.35),B.cz,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.c33,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.m),w,44,w,w,w,w,w,44),B.bc,D.bNn,A.aG(!1,B.a3,!0,w,A.aM(!1,A.m(12),!0,A.p(w,D.c0l,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.m),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f29(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)],t),B.B,w,B.e,B.h,0,w,w),r=B.b5.j(0.55),q=A.m(12)
return new C.GG(A.p(w,A.x(A.a([new A.D(B.HJ,s,w),A.p(w,A.x(A.a([A.c("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.c(A.BB(this.gcJK()),w,w,w,w,w,w,D.fUj,w,w,w)],t),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.m),w,w,w,B.tB,B.jC,w,w,1/0)],t),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.m),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hN1,w)},
aEA(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aV:B.L,q=A.m(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.aa(0.5,B.H,B.aV.j(0.42),B.cN,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bv:B.bk
w=A.V(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bv:B.bk
return A.E(A.aG(!1,B.a3,!0,u,A.aM(!1,s,!0,A.cX(u,A.A(A.a([w,B.e_,new A.d3(1,B.ci,A.c(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.bb,B.h,0,u,u),u,u,B.cp,new A.o(r,u,p,q,o,u,B.m),B.j2,u,u,u,u,B.HS,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f2q(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),1)},
ctD(d){var w,v,u,t,s,r,q=this,p=null
if(J.cx(q.e)){w=d.a
v=w?B.el:B.c
u=A.m(15)
t=A.p(p,D.c0s,B.f,p,p,new A.o(p,p,p,p,A.a([new A.aa(2,B.H,B.aV.j(0.5),B.eT,28)],x.V),D.cd9,B.a6),p,108,p,p,p,p,p,108)
s=A.c("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aS:B.aw,p,p,p,p,p,p,p,p,18,p,p,B.D,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.GG(A.p(p,A.x(A.a([t,B.di,s,B.N,A.c("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bv:B.bk,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.ec,A.A(A.a([A.E(q.aVZ(B.jH,"Scan QR",new C.f2k(q),d),1),B.ar,A.E(q.aVZ(Q.Ab,"Upload file",new C.f2l(q),d),1)],r),B.l,p,B.e,B.h,0,p,p),B.aB,A.bI(D.hln,p,q.gaUo(),A.bp(B.aV,p,p,p,B.c,B.hs,p,p,new A.b9(A.m(12),B.a1),p,p,p))],r),B.l,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.m),p,p,p,p,p,p,p,1/0),16,D.bJT,1.05,D.aef,p)}w=J.b8(q.e,new C.f2m(q,d),x.l)
w=A.B(w,w.$ti.k("aj.E"))
return new C.GG(A.x(w,B.l,p,B.e,B.h,0,B.p),16,B.bR,1,D.aef,p)},
aVZ(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.K(B.aV.j(0.45),B.r,1)
return A.aG(!1,B.a3,!0,u,A.aM(!1,t,!0,A.p(w,A.x(A.a([A.V(d,B.b5,w,w,w,26),B.N,A.c(e,w,w,w,w,w,w,D.fSt,B.K,w,w)],x.p),B.l,w,B.e,B.P,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.m),w,w,w,w,Ax.a1E,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
ctC(d,e){var w,v,u=null,t=e.a,s=t?B.el:B.c,r=A.m(14),q=A.K(t?B.eo:B.bO,B.r,1),p=A.a([new A.aa(0,B.H,B.v.j(t?0.35:0.08),B.eD,10)],x.V),o=A.m(14),n=t?B.bv:B.bk
n=A.by(B.YR,new A.fM(1.7777777777777777,C.aTL(!0,B.fr,1/0,P.Q9,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.c(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aS:B.aw,u,u,u,u,u,u,u,u,15,u,u,B.D,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.c(""+d.d.length+" budget items \xb7 "+A.BB(d.gxS()),u,u,u,u,u,u,D.fQp,u,u,u)],w),B.B,u,B.e,B.h,0,B.p),1)
return A.p(u,A.aG(!1,B.a3,!0,u,A.aM(!1,o,!0,A.x(A.a([n,new A.D(B.bF,A.A(A.a([v,A.aI(u,u,u,u,A.V(Ao.a4x,t?B.bv:B.bk,u,u,u,u),u,u,u,new C.f2i(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.h,0,u,u),u)],w),B.B,u,B.e,B.h,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f2j(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),B.f,u,u,new A.o(s,u,q,r,p,u,B.m),u,u,u,B.dU,u,u,u,1/0)}}
C.bC8.prototype={}
C.rF.prototype={
ak(){var w=this,v=w.c,u=w.d
return A.J(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd2Z(){var w,v,u,t,s=this.c
if(s===B.i.fP(s))w=B.o.v(B.i.M(s))
else{v=B.i.a5(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aK(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lY.prototype={
gxS(){return B.d.cF(this.d,0,new C.cJ9())},
ak(){var w=this,v=w.d,u=A.U(v).k("O<1,a9<n,@>>")
v=A.B(new A.O(v,new C.cJ8(),u),u.k("aj.E"))
return A.J(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bh_(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lY(w.a,w.b,v,u,w.e)},
bgJ(d){return this.bh_(d,null)},
Ub(d){return this.bh_(null,d)}}
C.II.prototype={
a9(){return"FamilyGender."+this.b}}
C.ic.prototype={
ak(){var w=this
return A.J(["id",w.a,"name",w.b,"gender",C.hMw(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aHm(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.ic(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ane.prototype={
a9(){return"FamilyTreeAccessRole."+this.b}}
C.lb.prototype={
garv(){var w=this.f
return new A.X(w,new C.bVa(),A.U(w).k("X<1>")).gJ(0)},
ak(){var w=this,v=w.f,u=A.U(v).k("O<1,a9<n,@>>")
v=A.B(new A.O(v,new C.bV9(),u),u.k("aj.E"))
return A.J(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.iu5(w.y),"games",w.z],x.N,x.z)},
xc(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.lb(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bgZ(d,e){var w=null
return this.xc(w,w,w,d,e,w,w,w,w)},
cTa(d,e,f,g,h,i,j){return this.xc(d,e,null,f,g,h,i,j,null)},
aHr(d,e){var w=null
return this.xc(w,w,w,w,d,w,w,e,w)},
cTc(d,e,f,g,h,i,j,k){return this.xc(d,e,null,f,g,h,i,j,k)},
cRG(d){var w=null
return this.xc(w,w,w,w,w,w,w,d,w)},
cS3(d){var w=null
return this.xc(w,w,w,w,w,w,w,w,d)},
bgD(d){var w=null
return this.xc(w,w,d,w,w,w,w,w,w)},
aHb(d){var w=null
return this.xc(w,w,w,w,w,d,w,w,w)},
cSI(d,e,f){var w=null
return this.xc(w,d,w,w,e,w,w,f,w)},
cRt(d){var w=null
return this.xc(w,w,w,d,w,w,w,w,w)},
cSf(d,e){var w=null
return this.xc(d,w,w,w,w,w,e,w,w)}}
C.cJa.prototype={
a9(){return"WrapAlignment."+this.b}}
C.cJb.prototype={
a9(){return"WrapCrossAlignment."+this.b}}
C.aK3.prototype={}
C.bct.prototype={
aj(d){this.a=d.a
this.b=d.b},
d1(d){var w=new C.bct()
w.a=this.a
w.b=this.b
return w},
v(d){return A.b5(this).v(0)+" first:"+this.a+" last:"+this.b}}
C.bcs.prototype={
gx4(){return!0},
gGX(){return this.z.b<this.b.length},
aXF(d){switch(0){case 0:return d.a.c}},
aXl(d){switch(0){case 0:return d.a.d}},
bXZ(d,e){switch(0){case 0:return new A.i7(d,e)}},
bXm(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hm(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.j8(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Ir(b4)
switch(0){case 0:v=b5.b
u=new A.l8(0,v,0,1/0)
t=w===B.Wz
break}s=A.a([],x.gZ)
r=A.S(x.gF,x.S)
for(b3=b1.z,q=B.d.fB(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.I)(q),++h){g=q[h]
g.hm(b4,u,!0)
f=b1.aXF(g)
f.toString
e=b1.aXl(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aK3(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aK3(k,j,i))}d=s.length
switch(0){case 0:q=b5.cD(new A.i7(m,l))
a0=q.a
a1=q.b
b1.a=new A.j8(0,0,a0,a1)
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
for(q=B.d.fB(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.I)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aXF(g)
e=b1.aXl(g)
e.toString
a9=b1.bXm(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bXZ(a6,a3+a9)
b0=g.a
g.a=new A.j8(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h_(d){var w,v,u,t,s,r=this
r.lC(d)
w=d.b
w.iw()
v=A.dA()
u=r.a
v.ei(u.a,u.b,0,1)
w.pw(0,v)
for(u=r.z,u=B.d.du(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.I)(u),++s)u[s].h_(d)
w.nE(0)},
Ht(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
iw(){return this.z}}
C.bAo.prototype={}
var z=a.updateTypes(["ay<~>()","P(ic)","~()","P(lb)","P(nJ)","a9<n,@>(lb)","F(lb,lb)","F(ic,ic)","n(ic)","lb(a9<@,@>)","P(lY)","nJ(a9<@,@>)","a9<n,@>(nJ)","P(v7)","v7()","F(ic)","ai<ic>()","P(zR)","a0Y(Z)","n?(ic)","eO<n?>(ic)","ay<~>(lY)","P(rF)","a9<n,@>(ic)","ic(a9<@,@>)","F(lY,lY)","P(agV)","~(bh)","w(p5)","F(F,aaV)","P(qW<F>)","~(qW<F>)","UB(Z)","P(N9)","P(v6)","~(ic)","n(n)","WX(Z)","UA(Z)","aff(Z)","a_T(Z)","ic(ic)","cQ(bv<n,GV>)","cQ(Lb)","a0m(Z)","F?(ic)","ic()","P(Lb)","D(ic)","~(II)","a0i(Z)","w(II,n,a_)","P(agO)","bv<n,ai<a9<n,@>>>(n,ai<nJ>)","a0k(Z)","+count,id,name(F,n,n)(lb)","n(lb)","a1h(Z)","a1i(Z)","P(mf)","mf()","a_o(Z)","a33(Z)","a_V(Z)","a_U(Z)","~(F)","~(n,lL?)","w(rF)","afA(Z)","~(lH)","ay<~>([n?])","H(H,lY)","w(lY)","H(H,rF)","a9<n,@>(rF)","rF(a9<@,@>)","ai<lL>()","v6()","n(W)","lY(a9<@,@>)","cp(IH)","n(lY)","a9<n,@>(lY)","F(nJ,nJ)","lb(a9<n,@>)","lb(lb)"])
C.fXt.prototype={
$1(d){return d.a+" "+d.b},
$S:135}
C.fXs.prototype={
bqm(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.rw(s,d,B.ih,"book",E.Hu),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.Y(r!=null&&A.Mh(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bqm(d)},
$S:249}
C.fXu.prototype={
$1(d){return d.b},
$S:135}
C.h74.prototype={
$1(d){var w=null
return A.eI(w,B.L,new H.QV(this.a,this.b,w),w,w,0,B.a1T,w,B.dd,w,w,w)},
$S:47}
C.fKd.prototype={
$1(d){return d!=null},
$S:222}
C.fKe.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:222}
C.fKj.prototype={
$1(d){if(this.a)return new A.r(d.a*520,d.b*160)
return d},
$S:165}
C.fV7.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fk(d,w,w,w,A.hr(w,B.ug,w,w,w,w,w,w,w,B.dL,w,w,10.5,w,B.eL,w,!0,w,w,w,w),w),u=f?B.eL:B.xd
return new A.op(D.bF8,A.abJ(A.a([new A.h9(130,w,v),new A.zQ(1,B.I2,A.fk(e,w,w,w,A.hr(w,g==null?D.eIW:g,w,w,w,w,w,w,w,B.dL,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.z9,B.m7))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:2005}
C.fV6.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.wi(999)
f=A.xU(A.m9(h,A.fk("Cashier",h,h,h,A.hr(h,D.B6,h,h,h,h,h,h,h,B.dL,h,h,10,h,B.eL,h,!0,h,h,h,h),h),h,new A.l9(D.eIN,h,f,B.im,h),h,h,D.bFC,h))
w=A.xU(A.fk("Debt receipt",h,h,h,A.hr(h,h,h,h,h,h,h,h,h,B.dL,h,h,22,h,B.eL,h,!0,h,h,h,h),h))
v=A.xU(A.fk(C.xA(new A.W(Date.now(),0,!1),!0),h,h,h,D.acE,h))
u=A.wi(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fk(s,h,h,h,A.hr(h,h,h,h,h,h,h,h,h,B.dL,h,h,14,h,B.eL,h,!0,h,h,h,h),h)
r=A.fk("Person who owes",h,h,h,D.acE,h)
q=A.wi(10)
p=x.Z
u=A.m9(h,A.zI(A.a([s,new A.h9(h,2,h),r,new A.h9(h,10,h),A.m9(h,A.zI(A.a([A.fk("Amount owed",h,h,h,D.acE,h),new A.h9(h,2,h),A.fk(A.BB(t.c),h,h,h,A.hr(h,D.B6,h,h,h,h,h,h,h,B.dL,h,h,20,h,B.eL,h,!0,h,h,h,h),h)],p),B.tr,B.m7),h,new A.l9(B.qf,h,q,B.im,h),h,h,D.bEO,1/0)],p),B.tr,B.m7),h,new A.l9(E.aOV,h,u,B.im,h),h,h,D.bGQ,1/0)
q=new A.o9(D.eIQ,0.9,B.lr)
r=A.wi(12)
s=i.c
o=s.$2("Original due",C.xA(t.r,!1))
n=s.$2("Current due",C.xA(t.f,!1))
m=i.d
l=new A.o9(m,1.1,B.lr)
k=A.wi(8)
j=i.a
k=A.a([o,n,new A.h9(h,6,h),A.m9(h,A.xU(A.fk(t.gaOv(),h,h,h,A.hr(h,m,h,h,h,h,h,h,h,B.dL,h,h,11,h,B.eL,h,!0,0.5,h,h,h),h)),h,new A.l9(h,new A.qh(l,l,l,l),k,B.im,h),h,h,D.bFL,1/0),new A.h9(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.B6))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.B6))
else{n=A.fk("Missed days ("+n+")",h,h,h,A.hr(h,B.ug,h,h,h,h,h,h,h,B.dL,h,h,10.5,h,B.eL,h,!0,h,h,h,h),h)
m=A.U(o).k("O<1,Ua>")
o=A.B(new A.O(o,new C.fV5(),m),m.k("aj.E"))
B.d.u(k,A.a([new A.h9(h,4,h),n,new A.h9(h,6,h),new C.bcs(5,5,new C.bct(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.u(k,A.a([new A.h9(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.h9(h,8,h),w,new A.h9(h,3,h),v,new A.h9(h,16,h),u,new A.h9(h,10,h),A.m9(h,A.zI(k,B.z9,B.m7),h,new A.l9(h,new A.qh(q,q,q,q),r,B.im,h),h,h,B.any,1/0)],p)
w=j.a
if(w!=null){v=new A.o9(B.KC,1,B.lr)
B.d.u(f,A.a([new A.h9(h,16,h),A.fk("Debtor signature",h,h,h,A.hr(h,B.ug,h,h,h,h,h,h,h,B.dL,h,h,10,h,B.eL,h,!0,h,h,h,h),h),new A.h9(h,6,h),A.m9(h,new A.IZ(w,B.Z3,h,h),h,new A.l9(h,new A.qh(v,v,v,v),A.wi(6),B.im,h),82,h,B.Pu,1/0)],p))}f.push(new A.h9(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fk(w,h,h,h,D.fIx,h))
f.push(new A.h9(h,18,h))
f.push(A.xU(A.fk("NGMY.ORG",h,h,h,A.hr(h,D.B6,h,h,h,h,h,h,h,B.dL,h,h,14,h,B.eL,h,!0,1.8,h,h,h),h)))
return f},
$S:448}
C.fV5.prototype={
$1(d){var w=null,v=new A.o9(D.KD,0.7,B.lr),u=A.wi(999)
return A.m9(w,A.fk(C.xA(d,!1),w,w,w,A.hr(w,D.KD,w,w,w,w,w,w,w,B.dL,w,w,9.5,w,B.eL,w,!0,w,w,w,w),w),w,new A.l9(w,new A.qh(v,v,v,v),u,B.im,w),w,w,D.bLi,w)},
$S:2006}
C.cau.prototype={
$1(d){var w=null,v=B.bE.j(0.08),u=A.m(999),t=A.K(B.bE.j(0.28),B.r,1)
return A.p(w,A.c(C.xA(d,!1),w,w,w,w,w,w,D.fPR,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.m),w,w,w,w,B.eY,w,w,w)},
$S:2007}
C.h7B.prototype={
$1(d){var w=null,v=A.aF(d,B.bZ,x.w).w,u=A.m(26),t=A.aI(w,w,w,w,D.c43,w,w,w,new C.h7y(d),w,w,w,w,w,B.co),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eI(w,B.L,new A.cS(new A.aX(0,380,0,v.a.b*0.9),A.aG(!1,B.a3,!0,u,new A.D(B.a1F,A.x(A.a([new A.bK(B.a9,w,w,t,w),new A.d3(1,B.ci,A.cc(A.x(A.a([new A.e8(new C.b1n(r,w),s),B.S,A.A(A.a([A.E(A.er(B.Aj,w,D.hhy,new C.h7z(s,r,d),A.dl(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f8,w,new A.b9(A.m(14),B.a1),new A.ax(q,1,B.r,-1),w,w,w,w)),1),B.aa,A.E(A.dd(B.a58,w,D.hdU,new C.h7A(r,d),A.bp(B.b5,w,w,w,B.c,w,B.f8,w,new A.b9(A.m(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.h,0,w,w)],p),B.l,w,B.e,B.P,0,B.p),B.t,w,B.y,w,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.P,0,B.p),w),B.f,B.aw,0,w,w,w,w,w,B.ai),w),w,w,0,B.a24,w,B.dd,w,w,w)},
$S:47}
C.h7y.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.h7z.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aU.bk$.x.h(0,t.a)
m=m==null?null:m.gbg()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lw(2.5),$async$$0)
case 4:w=3
return A.b(e.ho(B.hp),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eV(B.dM.gaS(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aK(q,p,"_")
if(o.length>32)o=B.a.aw(o,0,32)
w=5
return A.b(A.rz(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c(n,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.h7A.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.h1p(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.L(x.q).f
s.T(A.b3(null,null,null,null,null,B.t,null,A.c(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h7t.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eI(w,B.aw,A.x(A.a([new A.D(D.bGE,A.A(A.a([A.E(A.c(this.a,w,w,w,w,w,w,B.nx,w,w,w),1),A.aI(w,w,w,w,B.lE,w,w,w,new C.h7r(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),w),new A.d3(1,B.ci,new A.D(B.f2,A.by(A.m(14),A.h6(t,B.z,w,w,B.cs,B.dI,!1,w,!1,w,w),B.aq),w),w),new A.D(B.P9,new A.a4(1/0,w,A.dd(B.oc,w,D.aZk,new C.h7s(t,this.c,d),A.bp(B.b5,w,w,w,B.c,w,w,w,new A.b9(A.m(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.P,0,B.p),w,w,w,B.Pl,w,B.dd,w,new A.b9(v,B.a1),w)},
$S:47}
C.h7r.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.h7s.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rz(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h7F.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eI(w,B.aw,new A.D(D.bGM,A.x(A.a([A.A(A.a([D.bMt,A.aI(w,w,w,w,B.lE,w,w,w,new C.h7D(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),B.N,new A.e8(A.by(A.m(14),A.p(w,A.b4(w,w,w,new C.beL(s.ax,w),B.aA),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.af,new A.a4(1/0,w,A.dd(B.oc,w,D.aZk,new C.h7E(t,s,d),A.bp(B.b5,w,w,w,B.c,w,w,w,new A.b9(A.m(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.P,0,B.p),w),w,w,w,w,w,B.dd,w,new A.b9(v,B.a1),w)},
$S:47}
C.h7D.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.h7E.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aU.bk$.x.h(0,t.a)
n=n==null?null:n.gbg()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lw(2.5),$async$$0)
case 4:w=3
return A.b(e.ho(B.hp),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aK(r,q,"_")
if(p.length>32)p=B.a.aw(p,0,32)
r=J.eV(B.dM.gaS(s))
w=5
return A.b(A.rz(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c(o,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fPb.prototype={
$1(d){return d.a===this.a},
$S:245}
C.dUp.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dUa.prototype={
bpz(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.el:B.c
s=u.a
w=2
return A.b(A.bV(t,null,new C.dUd(s,q,e),p,!0,!0,!1,B.KW,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dUe(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bpz(d,e)},
$S:2008}
C.dUd.prototype={
$1(d){var w,v=null,u=this.c===B.xO,t=u?D.dB9:D.dwt
u=u?"Male":"Female"
w=this.b
u=A.c("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aS:B.aw,v,v,v,v,v,v,v,v,15,v,v,B.D,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bo(!0,new A.D(B.ao4,A.x(A.a([u,B.at,A.c("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bv:B.bk,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.iM(!0,v,v,B.y,D.fyZ,new C.dUc(this.a,w,t,d),t.length,v,B.e8,B.ah,!0)],x.p),B.am,v,B.e,B.P,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:30}
C.dUc.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cZ.j(0.14)
else w=t.b.a.d.a?B.a_:B.aS
v=A.m(14)
if(q)u=B.cZ
else u=(t.b.a.d.a?B.bv:B.bk).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aM(!1,p,!0,A.p(B.z,C.b1m(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.m),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dUb(t.d,r),s,s,s,s,s,s,s)},
$S:181}
C.dUb.prototype={
$0(){A.a7(this.a,!1).N(this.b)
return null},
$S:0}
C.dUe.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dU8.prototype={
$3(d,e,f){return B.bK},
$C:"$3",
$R:3,
$S:89}
C.dU9.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cL(B.cp,e,v)
return new A.dc(e,!1,A.iB(B.z,A.at(A.aG(!1,B.a3,!0,v,new A.ea(new C.dU7(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bk(t,new A.bq(0.96,1,u),u.k("bk<bS.T>"))),v)},
$S:34}
C.dU7.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aF(d,B.bZ,x.w).w,i=l.b,h=i.a.d.a,g=h?B.el:B.c,f=A.m(14),e=A.K((h?B.bv:B.bk).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.c(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,16,k,k,B.D,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aM(!1,v,!0,new A.D(B.eB,A.V(B.cC,i.a.d.a?B.bv:B.bk,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dTT(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.h,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aWv("Name")
r=l.a
q=r.d==null?k:new C.dTU(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bs:B.mm
n=A.K(B.cZ.j(0.35),B.r,1)
m=r.d
t=A.aN(k,B.M,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.aHj(new A.D(B.f7,A.aM(!1,p,!0,A.p(B.z,C.b1m(m==null?"\ud83d\udc64":A.fVY(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cu,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.al,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.lm,k,B.act,k,k)
v=A.a([v,B.af,t,B.N,A.c("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bk,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.aj,A.A(A.a([A.E(i.aXb("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dTV(r,a0),r.d===B.xO),1),B.aa,A.E(i.aXb("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dU_(r,a0),r.d===B.a9_),1)],u),B.l,k,B.e,B.h,0,k,k)],u)
if(r.d!=null)B.d.u(v,A.a([B.N,new A.bK(B.a5,k,k,A.hx(D.c2h,D.hfP,new C.dU0(r,l.e,a0),A.fv(k,k,k,k,k,k,k,k,k,k,k,B.cZ,k,k,k,k,k,k,k,k,k,k,k,k,k,B.co)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.va(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aN(k,B.M,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aWw("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.al,k,k,s,k,k,B.eh,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.a_:B.aS
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.K((t?B.bv:B.bk).j(0.22),B.r,1)
t=A.c("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bk,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xA(r.a,!1)
v.push(A.aG(!1,B.a3,!0,q,A.aM(!1,p,!0,A.p(k,A.A(A.a([A.E(A.x(A.a([t,B.bt,A.c(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.B,k,B.e,B.h,0,B.p),1),D.bZO],u),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.m),k,k,k,k,B.bg,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dU1(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.u(v,A.a([B.N,A.c("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bk,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aN(k,B.M,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aWv("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.al,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.c("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,12.5,k,k,B.D,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.c("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bk,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b4T(r.b.length!==0,B.mt,new C.dU2(r,i,a0),new C.dU3(r,a0),"Upload from gallery","ID photo"))
v.push(i.b4T(r.c.length!==0,D.bT1,new C.dU4(r,i,d,a0),new C.dU5(r,a0),"Camera or gallery","Selfie"))
v.push(B.N)
t=l.w
v.push(new As.a9y("Signature (optional)",t,new C.dU6(a0),new C.dTW(a0,t),new C.dTX(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bv:B.bk
s=(i?B.bv:B.bk).j(0.28)
s=A.E(A.dZ(E.aZd,new C.dTY(d),A.dl(k,k,k,k,k,k,k,k,k,t,k,k,B.r6,k,new A.b9(A.m(10),B.a1),new A.ax(s,1,B.r,-1),k,k,k,k)),1)
t=A.bp(B.cZ,k,k,k,B.c,k,B.r6,k,new A.b9(A.m(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.aa,A.E(A.bI(A.c(h?"Save":"Update",k,k,k,k,k,k,B.we,k,k,k),k,new C.dTZ(r,w,d),t),1)],u),B.l,k,B.e,B.h,0,k,k))
return A.p(k,A.cc(A.x(v,B.am,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.f,k,new A.aX(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.m),k,k,k,B.r9,B.jC,k,k,360)},
$S:175}
C.dTT.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dTU.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dTV.prototype={
$0(){return this.b.$1(new C.dTS(this.a))},
$S:0}
C.dTS.prototype={
$0(){var w=this.a
w.d=B.xO
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dU_.prototype={
$0(){return this.b.$1(new C.dTR(this.a))},
$S:0}
C.dTR.prototype={
$0(){var w=this.a
w.d=B.a9_
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dU0.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dU1.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.we(null,u.b,A.c1(2020,1,1,0,0,0,0,0),null,s,A.c1(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dTQ(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTQ.prototype={
$0(){var w=this.b
return this.a.a=A.c1(w.gck(),w.gci(),w.gcB(),0,0,0,0,0)},
$S:0}
C.dU2.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.QH(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dTP(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTP.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dU3.prototype={
$0(){return this.b.$1(new C.dTO(this.a))},
$S:0}
C.dTO.prototype={
$0(){return this.a.b=""},
$S:0}
C.dU4.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.el:B.c
w=3
return A.b(A.bV(q,null,new C.dTM(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.QH(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dTN(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTM.prototype={
$1(d){var w=null
return A.bo(!0,A.x(A.a([A.dP(!1,w,w,w,!0,w,w,w,!0,w,w,B.atB,w,w,w,w,new C.dTG(d),!1,w,w,w,w,w,w,w,D.h5N,w,w,w),A.dP(!1,w,w,w,!0,w,w,w,!0,w,w,B.atz,w,w,w,w,new C.dTH(d),!1,w,w,w,w,w,w,w,D.hcS,w,w,w)],x.p),B.l,w,B.e,B.P,0,B.p),!0,!1,B.ag,!0,!0)},
$S:30}
C.dTG.prototype={
$0(){A.a7(this.a,!1).N("camera")
return null},
$S:0}
C.dTH.prototype={
$0(){A.a7(this.a,!1).N("gallery")
return null},
$S:0}
C.dTN.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dU5.prototype={
$0(){return this.b.$1(new C.dTL(this.a))},
$S:0}
C.dTL.prototype={
$0(){return this.a.c=""},
$S:0}
C.dU6.prototype={
$0(){return this.a.$1(new C.dTK())},
$S:0}
C.dTK.prototype={
$0(){},
$S:0}
C.dTW.prototype={
$0(){return this.a.$1(new C.dTJ(this.b))},
$S:0}
C.dTJ.prototype={
$0(){return B.d.a6(this.a)},
$S:0}
C.dTX.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ajP(u.a,null,null,new C.dTI(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTI.prototype={
$4(d,e,f,g){this.a.$1(new C.dTF(this.b,d))},
$S:402}
C.dTF.prototype={
$0(){var w=this.a
B.d.a6(w)
B.d.u(w,this.b)},
$S:0}
C.dTY.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dTZ.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.L(x.q).f.T(D.fE8)
return}if(w.a.d==null){w.c.L(x.q).f.T(D.fAY)
return}A.a7(w.c,!1).N(!0)},
$S:0}
C.dUs.prototype={
$3(d,e,f){return B.bK},
$C:"$3",
$R:3,
$S:89}
C.dUt.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.el:B.c,n=A.m(14),m=A.K((p?B.bv:B.bk).j(0.16),B.r,1)
p=A.c("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aS:B.aw,r,r,r,r,r,r,r,r,16,r,r,B.D,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.BB(w.c)
v=A.c(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bv:B.bk,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.A_(r).length
u=A.c("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.A_(r).length>0?B.bE:B.cZ,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bv:B.bk
t=(q?B.bv:B.bk).j(0.28)
s=x.p
return new A.dc(e,!1,A.at(A.aG(!1,B.a3,!0,r,A.p(r,A.x(A.a([p,B.N,v,u,B.aB,A.A(A.a([A.E(A.dZ(B.oq,new C.dUq(d),A.dl(r,r,r,r,r,r,r,r,r,w,r,r,B.jW,r,new A.b9(A.m(10),B.a1),new A.ax(t,1,B.r,-1),r,r,r,r)),1),B.aa,A.E(A.bI(D.hdj,r,new C.dUr(d),A.bp(B.cZ,r,r,r,B.c,r,B.jW,r,new A.b9(A.m(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.h,0,r,r)],s),B.am,r,B.e,B.P,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.m),r,r,r,B.zw,B.HJ,r,r,300),B.f,B.L,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:34}
C.dUq.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dUr.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.dUm.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dUn(r),p=r.a.d.a,o=p?B.el:B.c,n=A.m(14),m=A.K((p?B.bv:B.bk).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.c(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aS:B.aw,s,s,s,s,s,s,s,s,14,s,s,B.D,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.c(A.BB(l.c),s,s,s,s,s,s,D.fRu,s,s,s)],p),B.l,s,B.e,B.h,0,s,s)
w=A.j6((r.a.d.a?B.bv:B.bk).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a3O,"View receipt",new C.dUf(r,d,l))
u=l.x!=null
t=u?B.q0:B.rg
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bGJ,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dUg(r,d,l)),q.$3$icon$label$onTap(B.Dr,"Edit",new C.dUh(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mt,"View / download ID",new C.dUi(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bT0,"View / download selfie",new C.dUj(r,d,l)))
if(l.gaJ6())p.push(q.$3$icon$label$onTap(B.a4Z,"View / download signature",new C.dUk(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bE,B.eq,"Delete",new C.dUl(r,d,l)))
p.push(B.at)
return A.bo(!0,new A.D(B.tB,A.p(s,A.x(p,B.l,s,B.e,B.P,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.m),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:30}
C.dUn.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aS:B.aw
else w=d
return A.aM(!1,v,!0,new A.D(B.eX,A.A(A.a([A.V(e,w,v,v,v,20),B.bc,A.c(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.h,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:2009}
C.dUf.prototype={
$0(){A.a7(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h7x(w,this.c)},
$S:0}
C.dUg.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.Tv(this.c)},
$S:0}
C.dUh.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.E3(this.c)},
$S:0}
C.dUi.prototype={
$0(){var w,v,u
A.a7(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bIu(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dUj.prototype={
$0(){var w,v,u
A.a7(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bIu(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dUk.prototype={
$0(){A.a7(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h7C(w,this.c)},
$S:0}
C.dUl.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.QG(0,this.c)},
$S:0}
C.dUu.prototype={
$1(d){return d.x==null},
$S:245}
C.dUv.prototype={
$1(d){return d.x!=null},
$S:245}
C.dUw.prototype={
$2(d,e){return d+e.c},
$S:2010}
C.dUx.prototype={
$0(){return this.a.bFD()},
$S:0}
C.dUo.prototype={
$0(){return this.a.ahl(this.b)},
$S:0}
C.fPX.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fPY.prototype={
$0(){return B.d.gG(D.a6g)},
$S:z+77}
C.djs.prototype={
$0(){var w=this.a
return w.l(new C.djq(w,this.b))},
$S:0}
C.djq.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.djr.prototype={
$0(){},
$S:0}
C.djt.prototype={
$0(){var w=this.a.gc4h()
A.a7(this.b,!1).N(w)
return null},
$S:0}
C.fSv.prototype={
$1(d){return C.hwc(A.a0(d,x.N,x.z))},
$S:z+11}
C.fSw.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fSx.prototype={
$2(d,e){var w=A.ca(d.a,null),v=A.ca(e.a,null)
if(w!=null&&v!=null)return B.o.aQ(w,v)
return d.d.aQ(0,e.d)},
$S:z+83}
C.h68.prototype={
$1(d){return d.ak()},
$S:z+12}
C.heO.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fP2.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bTS.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eD(e,v)?v:null},
$S:2011}
C.h6J.prototype={
$1(d){var w=this
return new C.a0k(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dk7.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.dk6(w,d))},
$S:z+80}
C.dk6.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djW.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cK(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.djT.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dju.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.djv.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.djX.prototype={
$0(){return this.a.w=!1},
$S:0}
C.djD.prototype={
$1(d){var w=null,v=A.Q(d).ax.a===B.I,u=v?B.el:B.c,t=A.c("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.c("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bk,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ek(A.a([A.bM(!1,B.dw,w,w,!0,w,w,w,new C.djB(d),w,w),A.bI(B.yb,w,new C.djC(d),A.bp(B.nI,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.djB.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.djC.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.djE.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.djU.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.djV.prototype={
$0(){return B.d.gG(D.Aw)},
$S:z+14}
C.djz.prototype={
$1(d){var w=this.a,v=w.y,u=w.gzl(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.UA(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.djA.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djF.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a_T(v,u,J.ad(w.d),null)},
$S:z+40}
C.djG.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dk5.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.d()
if(e===0)w=A.aA(s,new C.a_x(r.y,r.gzl(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dk3(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.d()
t=r.Q
t===$&&A.d()
t=new C.be5(v,e,w,u,t,r.gbWr(),C.hMv(r.y.Q),r.gzl(0),s)
w=t}return A.cb(q,new C.dk4(r,e),new A.D(B.a1Y,w,s))},
$S:2012}
C.dk4.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.d()
t=t.f
if(t.length!==0&&B.d.gd3(t).ay){t=this.b
u=x.cy.a(B.d.gd3(u.f.f)).gvw(0)
w=t-(u==null?t:u)}else w=0
v=B.i.D(w,-1,0)
u=A.dA()
t=u.a
t.$flags&2&&A.ak(t)
t[11]=0.0013
u.fI(v*3.141592653589793*0.5)
return A.fG(B.a5,A.d6(e,B.i.D(1+v*0.5,0,1)),null,u,!0)},
$S:46}
C.dk3.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aKi(B.r0,B.iO)},
$S:0}
C.djQ.prototype={
$0(){var w=this.a
return w.l(new C.djP(w))},
$S:0}
C.djP.prototype={
$0(){return this.a.w=!0},
$S:0}
C.djR.prototype={
$0(){var w=this.a.c
w.toString
A.a7(w,!1).N(null)
return null},
$S:0}
C.djw.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.kF.j(0.5),r=x.p,q=A.a([D.h4j,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cx(p.d)?"Write this book":"Write a new book"
q.push(p.a_t(d,B.eg,w,J.cx(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.a_t(d,K.art,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cK(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cB,A.c("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.l0.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cB,A.c("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.l0.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.a_t(d,X.ast,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.a_t(d,B.p1,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.a_t(d,B.p1,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.u(q,r)}return A.eI(u,E.CD,A.bo(!0,new A.D(Ae.zt,A.x(q,B.B,u,B.e,B.P,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,B.Po,u,B.dd,u,new A.b9(t,new A.ax(s,1.4,B.r,-1)),u)},
$S:47}
C.djS.prototype={
$0(){A.a7(this.a,!1).N(this.b)
return null},
$S:0}
C.djJ.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cK(w.d)
return new C.a0m(v,J.cK(w.d),w.r+1,null)},
$S:z+44}
C.djK.prototype={
$1(d){var w=null
return A.pa(!1,A.ek(w,w,w,E.CD,new A.kh(this.a,new C.djI(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:304}
C.djI.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.ac6,B.pm,A.E(A.c(e,w,w,w,w,w,w,B.jN,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:530}
C.djL.prototype={
$0(){return this.a.a=!1},
$S:53}
C.djM.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:206}
C.djN.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djO.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.BI(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Td(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.l(new C.djH(s,t))
w=4
return A.b(s.lf(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.djH.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djZ.prototype={
$1(d){var w=null
return A.pa(!1,A.ek(w,w,w,E.CD,new A.kh(this.a,new C.djY(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:304}
C.djY.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.ac6,B.pm,A.E(A.c(e,w,w,w,w,w,w,B.jN,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:530}
C.dk_.prototype={
$0(){return this.a.a=!1},
$S:53}
C.dk0.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:206}
C.dk1.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:206}
C.dk2.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.BI(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lf(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.djx.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.bmt(B.r0,A5.OY)},
$S:0}
C.djy.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aKi(B.r0,A5.OY)},
$S:0}
C.dlU.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dlV.prototype={
$1(d){var w=this.a
return w.l(new C.dlT(w))},
$S:9}
C.dlT.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dlW.prototype={
$1(d){var w=this.a
return w.l(new C.dlS(w))},
$S:9}
C.dlS.prototype={
$0(){return this.a.e="book"},
$S:0}
C.dlX.prototype={
$1(d){var w=this.a
return w.l(new C.dlR(w))},
$S:9}
C.dlR.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dlY.prototype={
$0(){var w=this.a
return w.l(new C.dlQ(w,this.b))},
$S:0}
C.dlQ.prototype={
$0(){var w=this.b
this.a.d.sb1(0,w)
return w},
$S:0}
C.dlZ.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga3u()
A.a7(this.b,!1).N(new A.bt6(w,v))},
$S:0}
C.dkm.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dkl.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a0i(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dkq.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dkp.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.bcr(u)
u=u.c
w=u===1?"page":"pages"
w=A.c("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hG,v,v,v)
return A.ek(A.a([A.bM(!1,B.dw,v,v,!0,v,v,v,new C.dkn(d),v,v),A.bI(B.yb,v,new C.dko(d),A.bp(B.nI,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.CD,w,v,v,v,v,D.h35,v)},
$S:18}
C.dkn.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dko.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.dkr.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dks.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)r.push(new A.a4(s,t,w[u],t))
return A.cc(A.c_(B.bI,r,B.br,t,18,14),B.t,t,B.y,t,t,D.bHI,t,t,B.ah)},
$S:350}
C.dkk.prototype={
$0(){return this.a.Rw(0,this.b)},
$S:0}
C.dkj.prototype={
$0(){return this.a.QV(0,this.b)},
$S:0}
C.cSb.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cSc.prototype={
$0(){return B.d.gG(D.Aw)},
$S:z+14}
C.cSd.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bT(0,new A.D(d,new A.bQ(new A.o(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.m),B.bm,w,w),w),0,0,0)},
$S:2014}
C.dbc.prototype={
$1(d){return this.a.l(new C.dbb(this.b,this.c))},
$S:9}
C.dbb.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.dbB.prototype={
$1(d){return this.a.l(new C.dbo())},
$S:2}
C.dbo.prototype={
$0(){},
$S:0}
C.dbC.prototype={
$1(d){return this.a.l(new C.dbn())},
$S:2}
C.dbn.prototype={
$0(){},
$S:0}
C.dbD.prototype={
$0(){var w=this.a
return w.l(new C.dbm(w,this.b))},
$S:0}
C.dbm.prototype={
$0(){var w=this.a
return w.d=w.goC().GB(this.b.a)},
$S:0}
C.dbE.prototype={
$0(){var w=this.a
return w.l(new C.dbl(w,this.b))},
$S:0}
C.dbl.prototype={
$0(){var w=this.a
return w.d=w.goC().cR_(this.b)},
$S:0}
C.dbF.prototype={
$1(d){return this.a.l(new C.dbk())},
$S:2}
C.dbk.prototype={
$0(){},
$S:0}
C.dbG.prototype={
$0(){var w=this.a
return w.l(new C.dbj(w,this.b))},
$S:0}
C.dbj.prototype={
$0(){var w=this.a
return w.d=w.goC().cR4(this.b.a)},
$S:0}
C.dbH.prototype={
$1(d){var w=this.a
return w.l(new C.dbw(w,d))},
$S:6}
C.dbw.prototype={
$0(){var w=this.a
return w.d=w.goC().cRZ(this.b)},
$S:0}
C.dbI.prototype={
$1(d){var w=this.a
return w.d=w.goC().aHe(d)},
$S:2}
C.dbJ.prototype={
$1(d){var w=this.a
return w.d=w.goC().cR7(d)},
$S:2}
C.dbL.prototype={
$1(d){var w=this.a
return w.d=w.goC().cRX(d)},
$S:2}
C.dbM.prototype={
$1(d){var w=this.a
return w.l(new C.dbv(w,d))},
$S:9}
C.dbv.prototype={
$0(){var w=this.a
return w.d=w.goC().cRO(this.b)},
$S:0}
C.dbN.prototype={
$0(){var w=this.a,v=w.goC(),u=B.a.i(w.gzl(0).a.a),t=B.a.i(w.gaEn().a.a)
u=v.bh8(B.a.i(w.gatO().a.a),t,u)
A.a7(this.b,!1).N(u)
return null},
$S:0}
C.bU1.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bTW.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bTV(w,d))},
$S:10}
C.bTV.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bU4.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bTX.prototype={
$0(){var w=this.a
w.Q=D.b3L
w.aeW(1)
w.r.x=null},
$S:0}
C.bTY.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b3L)return
w=new A.e3()
w.cT(u.as*13+u.a.e)
v=u.r
v.Q=3+w.av(3)
v.z=D.d9U[w.av(6)]
v.as=u.f.a+2.6},
$S:0}
C.bU0.prototype={
$0(){var w=this.a
w.Q=D.aeN
w.aeW(2)
w.r.z=null},
$S:0}
C.bU_.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hYm
t.aeW(3)
w=t.r
w.d=s
w.x="I say: "+t.gCX()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.av(3)
w.z=s?D.dh4[v.av(4)]:D.dDU[v.av(3)]
w.as=t.a+2.8},
$S:0}
C.bU2.prototype={
$0(){var w=this.a
w.Q=D.b3M
w.CW=this.b
w.cy=1
w.aeW(4)
w.r.f=w.f.a+5},
$S:0}
C.bU3.prototype={
$0(){},
$S:0}
C.bTZ.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hY()},
$S:0}
C.bTT.prototype={
$0(){return this.a.LF(this.b)},
$S:0}
C.bTU.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hY()},
$S:0}
C.bVy.prototype={
$0(){var w=this
return w.a.RQ(w.b,0,w.c,w.d)},
$S:0}
C.bVz.prototype={
$0(){var w=this
return w.a.RQ(w.b,3,w.c,w.d)},
$S:0}
C.bVA.prototype={
$0(){var w=this
return w.a.RQ(w.b,1,w.c,w.d)},
$S:0}
C.bVB.prototype={
$0(){var w=this
return w.a.bVS(w.b,w.c,w.d)},
$S:0}
C.bVC.prototype={
$0(){var w=this
return w.a.RQ(w.b,4,w.c,w.d)},
$S:0}
C.bVD.prototype={
$0(){var w=this
return w.a.RQ(w.b,2,w.c,w.d)},
$S:0}
C.bVE.prototype={
$0(){var w=this
return w.a.RQ(w.b,5,w.c,w.d)},
$S:0}
C.bVF.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:520}
C.bVx.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a7p[d],p=q.a.a7(0,new A.r(0,-q.b*1.2*124)),o=A.h_(r,B.cK,r,3,r,A.cW(r,r,r,r,r,r,r,r,r,D.fIc,e),B.a7,B.cc,r,B.e4,B.cd)
o.nA(130)
w=o.b.a.c
w=p.aI(0,new A.r(0,w.gb4(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bw(A.bZ(w,v.gb4(v)+12,u+18),B.ik)
u=this.a
v=t.eI(B.dS)
w=$.T()
s=A.L()
s.r=B.dJ.gp(0)
u.aq(v,s)
s=A.L()
s.r=D.qP.gp(0)
u.aq(t,s)
w=new A.aH(w.r,B.ak,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.aZ(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.bA())
v=A.L()
v.r=D.qP.gp(0)
u.af(w,v)
o.a4(u,new A.r(t.a+9,t.b+6))},
$S:668}
C.bUi.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.bUj.prototype={
$2(d,e){var w=this.a,v=B.o.aQ(w.anA(d),w.anA(e))
if(v!==0)return v
return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.fCT.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.heE.prototype={
$2(d,e){if(e!=null)J.c8(this.a.c_(0,d,new C.heF()),e)},
$S:z+66}
C.heF.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.heG.prototype={
$1(d){return d!==this.a},
$S:3}
C.heH.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.heI.prototype={
$1(d){return d!==this.a&&!B.d.aR(this.b,new C.heD(this.c,d))},
$S:3}
C.heD.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.heJ.prototype={
$1(d){return d!==this.a},
$S:3}
C.heK.prototype={
$1(d){return d!==this.a},
$S:3}
C.heL.prototype={
$1(d){return d!==this.a&&!B.d.aR(this.b,new C.heC(this.c,d))},
$S:3}
C.heC.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fQA.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.h52.prototype={
$1(d){return d.Q},
$S:z+15}
C.h53.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fMo.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fTr.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bP3.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.hf4.prototype={
$2(d,e){return B.o.aQ(C.hIv(d),C.hIv(e))},
$S:215}
C.hf5.prototype={
$1(d){return d!==this.a},
$S:3}
C.h5F.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bNb.prototype={
$0(){var w=this.a
w.ch=!0
w.baD()},
$S:0}
C.bN6.prototype={
$0(){},
$S:0}
C.bNc.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bN4.prototype={
$0(){},
$S:0}
C.bN5.prototype={
$0(){},
$S:0}
C.bNa.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bT(0,A.b4(u,u,u,new C.beN(t,u),B.aA),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.v.j(0.7)
v=A.m(14)
s.push(A.ao(u,A.p(u,A.c(t.dy,u,u,u,u,u,u,D.fQ2,B.K,u,u),B.f,u,u,new A.o(w,u,u,v,u,u,B.m),u,u,u,u,B.bR,u,u,u),u,u,14,14,6,u))}return A.aA(B.c_,new A.an(B.a0,u,B.ad,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bN7(t,e),u,u,u,u,u,u,u,new C.bN8(t,e),u,u,u,u,u,u,u,u,u,new C.bN9(t,e),u,u,u,u,!1,B.a4)},
$S:37}
C.bN7.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bN9.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:24}
C.bN8.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bN3.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hY()},
$S:0}
C.ctb.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.ctc.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.cta(w))},
$S:0}
C.cta.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.ctd.prototype={
$0(){var w=this,v=w.a
v.gj1()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cte.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.ctf.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.ctg.prototype={
$0(){},
$S:0}
C.cth.prototype={
$0(){var w=this.a
w.z=w.XX(++w.e)
w.Q=A.c3(w.gkR()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.ct7.prototype={
$0(){return A.a7(this.a,!1).hY()},
$S:0}
C.ct8.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj1().length,e=i/2,d=new C.ct9(i,f,h),a0=g.as,a1=A.a3(a0).k("ba<2>")
a0=A.B(new A.ba(a0,a1),a1.k("M.E"))
a0=A.bT(0,A.cb(new A.hA(a0),new C.ct2(g,new A.r(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj1().length!==0&&!B.d.q(g.gj1(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.Re(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cQ(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new T.Ni(new C.ct3(g,u),new C.ct4(g,u),new C.ct5(g,u),j,j,new A.bg("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.c(a1,j,j,j,j,j,j,A.l(j,j,B.a.q(a1,"not a child")?B.fq:B.bf,j,j,j,j,j,j,j,j,13,j,j,B.D,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj1().length!==0&&!B.d.q(g.gj1(),-1)){a0=g.e+1>=g.gkR().length?"See my result":"Next family"
g=A.at(C.uH(a0,g.gqs(g),B.d_,B.jE,D.fJ),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.XX(0):s).length))break
if(!B.d.q(g.gj1(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.XX(0)
o=s}else o=s
n=s[u]
n=A.eb(B.z,new C.Re(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.XX(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.rm(new A.bq(0,p,t),new C.ct6(),new T.EJ(u,j,new C.Re(l.b,k,62,!1,j),new A.kY(0.25,new C.Re(m.b,k,62,!1,j),j),new A.kr(n,B.ai,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.J,T.hMn(),!0,!0,j,j,j,j,j,j,!1,B.j5,j,new A.bg("chip-"+r,a0),w),B.aZ,B.j3,j,new A.bg("t"+r+"-"+q,a0),v))}++u}g=A.c_(B.fV,a1,B.br,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ad,B.t,e,j)},
$S:62}
C.ct9.prototype={
$1(d){return new A.r(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:711}
C.ct2.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.d()}v.push(r==null?0:r)}w=t.gj1().length!==0&&!B.d.q(t.gj1(),-1)
return A.b4(p,p,p,new C.bee(q.b,o,v,w,p),B.aA)},
$S:56}
C.ct4.prototype={
$1(d){return this.a.gj1()[this.b]===-1},
$S:z+30}
C.ct5.prototype={
$1(d){return this.a.cUR(this.b,d.a)},
$S:z+31}
C.ct3.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj1()[t]!==-1,r=A.m(18),q=e.length!==0?B.d_.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.d_:B.jU,B.r,2)
u=s?A.lz(new C.ct1(),A.at(new C.Re(u.gaGG()[u.gj1()[t]].b,u.gaGG()[u.gj1()[t]].a,62,!1,v),v,v,v),B.nC,B.j3,v,v,new A.bq(0.3,1,x.X),x.i):D.bf2
return A.cX(v,u,v,v,B.aZ,new A.o(q,v,w,r,v,v,B.m),B.a3,v,100,v,v,v,v,v,88)},
$S:2017}
C.ct1.prototype={
$3(d,e,f){return A.eb(B.z,f,e,null,null)},
$S:117}
C.ct6.prototype={
$3(d,e,f){return A.dU(f,new A.r(Math.sin(e*24)*8*(1-e),0))},
$S:117}
C.cTf.prototype={
$1(d){return d>=1},
$S:121}
C.cI8.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkR()[w.e].d.length)w.l(new C.cI7(w))},
$S:10}
C.cI7.prototype={
$0(){return this.a.f++},
$S:0}
C.cIg.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cIh.prototype={
$0(){var w=this.a,v=this.b
w.z.I(0,v)
w.Q=v},
$S:0}
C.cIi.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.cIf(w))},
$S:0}
C.cIf.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cIj.prototype={
$0(){return this.a.f++},
$S:0}
C.cIk.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cIl.prototype={
$0(){},
$S:0}
C.cIm.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a6(0)
w.as=!1
w.ay=0},
$S:0}
C.cIa.prototype={
$0(){return A.a7(this.a,!1).hY()},
$S:0}
C.cIb.prototype={
$3(d,e,f){var w=null
return A.lz(new C.cI9(this.a,e),w,B.aZ,B.hy,w,w,new A.bq(w,this.b,x.X),x.i)},
$S:2018}
C.cI9.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.d_.j(u.as?0.6:0.15)
t=A.a([new A.aa(0,B.H,t,B.J,u.as?40:18)],x.V)
w=this.b
return A.p(v,A.ib(new A.BS(new A.v4(B.v.j(e),B.MR,v,B.Zw),H.bZO(A.b4(v,v,v,new C.aCO(u.gkR()[u.e].c,u.as,v),B.aA),new A.EO(w,w,B.Xo)),v),B.aq),B.f,v,v,new A.o(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:2019}
C.cIc.prototype={
$3(d,e,f){return A.d6(A.dU(f,new A.r(0,14*(1-e))),e)},
$S:102}
C.cId.prototype={
$3(d,e,f){return A.dU(f,new A.r(Math.sin(e*22)*8*(1-e),0))},
$S:117}
C.cIe.prototype={
$0(){return this.a.brT(this.b)},
$S:0}
C.ff2.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.ao6$)
v.ao6$=w
v.qg$.sp(0,w)
v.as0(u)},
$S:7}
C.fpp.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:10}
C.bV3.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bV2())},
$S:0}
C.bV2.prototype={
$0(){},
$S:0}
C.bV0.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bUZ.prototype={
$0(){},
$S:0}
C.bV_.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gNj()
w=s+1>=r.length?3:5
break
case 3:q=C.bII(p.gaqQ(0),0,r.length)
p.l(new C.bUW(p,q))
o=p
w=6
return A.b(C.C2(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.C3(s.d,s.c.a,"school",p.gaqQ(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.l(new C.bUX())
w=4
break
case 5:p.l(new C.bUY(p))
p.gqz().Wx(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bUW.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bUX.prototype={
$0(){},
$S:0}
C.bUY.prototype={
$0(){return this.a.x++},
$S:0}
C.bV1.prototype={
$0(){return this.a.LF(this.b)},
$S:0}
C.bUV.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hY()},
$S:0}
C.ff3.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.r(t,s),q=v.b,p=v.d,o=p?C.hMB(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.F2
C.Tb(q,D.eCd,0,0.2,-0.6,-0.2,null,w,D.eAX,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a7(0,new A.r(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.T()
p=A.L()
p.r=D.H6.gp(0)
p.c=3
p.d=B.bG
q.ah(new A.r(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.ff4.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.Tb(this.a,D.eBj,0,u,0.7,-0.5,null,null,D.Kv,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.ff5.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.Tb(this.a,D.eD0,0,0,0.8,-0.5,null,null,D.Kv,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.ff6.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.Tb(w.b,D.eC7,0,v,-0.8,-0.5,null,null,D.Kv,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.ff7.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.r(34,-122+Math.sin(w*5)*5)
else v=v?D.eCb:D.F2
C.Tb(p,D.eBC,0,t,0,-0.6,null,v,D.Kv,3,0,s,1.3,u,0,w,0)
q=q.ceG(new A.r(222,455),9)
$.T()
w=A.L()
w.r=B.d_.gp(0)
p.af(q,w)},
$S:0}
C.ff8.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:520}
C.bUH.prototype={
$2(d,e){return d+e},
$S:64}
C.bUS.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bUT.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bUU.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj1()[u.b]=s
t.gj1()[u.d]=t.y
w=t.as
v=t.qg$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bUO.prototype={
$1(d){return d},
$S:100}
C.bUN.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.qg$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bUP.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bUQ.prototype={
$0(){},
$S:0}
C.bUR.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.G4(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.cd(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.a6(0)},
$S:0}
C.bUJ.prototype={
$0(){return A.a7(this.a,!1).hY()},
$S:0}
C.bUK.prototype={
$2(d,e){var w=this.a
w=w.gkR()[w.f].e
return B.o.aQ(w[d],w[e])},
$S:64}
C.bUL.prototype={
$2(d,e){var w=null,v=C.hn_(new A.av(A.aT(1/0,e.a,e.b),A.aT(1/0,e.c,e.d))),u=this.a
return A.aA(B.c_,new A.e8(A.b4(w,w,w,new C.blu(u,u.qg$),B.aA),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bUI(u,v),w,w,w,w,!1,B.a4)},
$S:37}
C.bUI.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj1().length
u=B.o.D(B.i.bc((t.a-s.a)/r/450*v),0,v-1)
w.d4R(w.gj1()[u])}},
$S:24}
C.bUM.prototype={
$1(d){var w=this.a
return w.gkR()[w.f].d[d]},
$S:79}
C.dvl.prototype={
$2(d,e){return 0},
$S:64}
C.bUt.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bUs())},
$S:0}
C.bUs.prototype={
$0(){},
$S:0}
C.bUr.prototype={
$0(){},
$S:0}
C.bUl.prototype={
$0(){},
$S:0}
C.bUm.prototype={
$0(){},
$S:0}
C.bUq.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.BQ},
$S:0}
C.bUp.prototype={
$1(d){var w=null,v=this.a.gqz(),u=A.c(d,w,w,w,w,w,w,D.aXM,w,w,w),t=v.gbof(0)
return A.aA(B.c_,A.x(A.a([u,B.bt,A.c(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aXZ,w,w,w)],x.p),B.B,w,B.e,B.h,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbuf(v),w,w,w,w,w,w,!1,B.a4)},
$S:126}
C.bUn.prototype={
$0(){return this.a.LF(this.b)},
$S:0}
C.bUo.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hY()},
$S:0}
C.bUk.prototype={
$0(){return A.a7(this.a,!1).hY()},
$S:0}
C.e68.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e69.prototype={
$1(d){return this.a},
$S:42}
C.e6a.prototype={
$0(){var w=this.a
return w.d=w.gTx().bgD(this.b)},
$S:0}
C.e66.prototype={
$1(d){return new C.UB(this.a,null)},
$S:z+32}
C.e67.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e65.prototype={
$1(d){var w=null,v=this.a.b
v=A.c('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hG,w,w,w)
return A.ek(A.a([A.bM(!1,E.aZn,w,w,!0,w,w,w,new C.e63(d),w,w),A.bM(!1,D.haK,w,w,!0,w,w,w,new C.e64(d),w,w)],x.p),w,w,D.fJ,v,w,w,w,w,D.fY4,w)},
$S:18}
C.e63.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.e64.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.e62.prototype={
$0(){var w=null,v=this.a.c.L(x.q).f,u=this.b
return v.T(A.b3(w,w,w,w,w,B.t,w,A.c(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e6b.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.v(w.h(0,d)):"NEW"},
$S:13}
C.e6c.prototype={
$0(){var w=this.a,v=this.b,u=C.bGo(v,10,w.r,!1)
return w.uG(C.hwd(w.a.d,"kahoot",u,w.gb88(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e6d.prototype={
$0(){var w=this.a
return w.uG(new C.an3(this.b,w.a.d,w.r,null))},
$S:0}
C.e6e.prototype={
$0(){var w=this.a
return w.uG(new C.ald(this.b,w.a.d,w.r,null))},
$S:0}
C.e6h.prototype={
$0(){var w=this.a
return w.uG(new C.aw4(this.b,w.a.d,w.r,null))},
$S:0}
C.e6i.prototype={
$0(){var w=this.a
return w.uG(new C.aA0(this.b,w.a.d,w.r,null))},
$S:0}
C.e6j.prototype={
$0(){var w=this.a
return w.uG(new C.an6(this.b,w.a.d,w.r,null))},
$S:0}
C.e6k.prototype={
$0(){var w=this.a
return w.uG(new C.ana(this.b,w.a.d,w.r,null))},
$S:0}
C.e6l.prototype={
$0(){var w=this.a
return w.uG(new C.anc(this.b,w.a.d,w.r,null))},
$S:0}
C.e6m.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d5b()
return v.uG(C.hwd(v.a.d,"creator_"+u.a,w,v.gb88(),"A game by the family",t,this.c.a))},
$S:0}
C.e6n.prototype={
$0(){return this.a.Pq(this.b)},
$S:0}
C.e6o.prototype={
$0(){return this.a.Yo(0,this.b)},
$S:0}
C.e6f.prototype={
$0(){return this.a.Pq(null)},
$S:0}
C.e6g.prototype={
$0(){return this.a.L(x.q).f.T(D.fB3)},
$S:0}
C.bUF.prototype={
$0(){var w=this.a
w.d=D.b2R
w.z=3},
$S:0}
C.bUG.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aR8()}else w.l(new C.bUE(w))},
$S:10}
C.bUE.prototype={
$0(){return this.a.z--},
$S:0}
C.bUv.prototype={
$0(){var w=this.a
w.d=D.aet
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bUw.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bUu(w))
if(w.as<=0){d.a1(0)
w.b84(-1)}},
$S:10}
C.bUu.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bUB.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.Y4},
$S:0}
C.bUC.prototype={
$0(){return this.a.e++},
$S:0}
C.bUy.prototype={
$0(){var w=this.a
w.d=D.b2S
w.ay=this.b},
$S:0}
C.bUz.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bUD.prototype={
$2(d,e){return B.o.aQ(e.b,d.b)},
$S:2020}
C.bUA.prototype={
$0(){return this.a.LF(this.b)},
$S:0}
C.bUx.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hY()},
$S:0}
C.bU5.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.az()
s=A.a([new A.au(new A.bc(s,B.b7,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.I)(t),++v){u=t[v]
s.push(new A.au(new A.bc(u,B.b7,B.aP),r))}return s},
$S:2021}
C.bU6.prototype={
$0(){return this.a.gDw().c.push(C.hgI(null,0,20,""))},
$S:0}
C.bUg.prototype={
$1(d){var w=null
return A.bC(w,new A.b6(4,A.m(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dx,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.FA,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:276}
C.bUf.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gDw().c,m=this.b,l=n[m],k=o.chP(l),j=B.c.j(0.06),i=A.m(18),h=A.K(B.aT,B.r,1),g=x.p,f=A.a([A.c("Question "+(m+1),p,p,p,p,p,p,D.LO,p,p,p),B.aW],g)
if(n.length>1)f.push(A.aI(p,p,p,p,B.atm,p,p,p,new C.bUa(o,m),p,p,p,p,p,p))
n=J.a2(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.h,0,p,p),A.aN(p,B.M,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.al,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bUb(l),p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.ds,!0,B.a7,p,B.ao,p,p,p,p),B.N],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aFn[v]
t=D.aF3[v]
s=v+1
f.push(new A.D(B.eA,new A.c2(B.aK,B.e,B.h,B.l,p,B.p,p,0,A.a([A.c(u,p,p,p,p,p,p,new A.G(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.aa,new A.bu(1,B.b8,A.aN(p,B.M,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.al,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bUc(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.ds,!0,B.a7,p,B.ao,p,p,p,p),p),new Aw.PQ(v,l.c,new C.bUd(o,l),p,!1,D.lS,p,p,p,p,p,!1,!1,p,I.b3z,p,p,p,p,p,w)],g),p),p))}f.push(D.h2L)
f.push(B.aj)
n=A.a([D.fX8,B.aa],g)
for(r=0;r<3;++r){q=D.ciG[r]
n.push(new A.D(B.f7,A.jL(p,p,p,A.c(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bUe(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.h,0,p,p))
return A.p(p,A.x(f,B.B,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.m),p,p,p,B.kJ,B.bg,p,p,p)},
$S:155}
C.bUa.prototype={
$0(){var w=this.a
return w.l(new C.bU9(w,this.b))},
$S:0}
C.bU9.prototype={
$0(){return B.d.cJ(this.a.gDw().c,this.b)},
$S:0}
C.bUb.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bUc.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bUd.prototype={
$1(d){return this.a.l(new C.bU8(this.b,d))},
$S:159}
C.bU8.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bUe.prototype={
$1(d){return this.a.l(new C.bU7(this.b,this.c))},
$S:9}
C.bU7.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e7O.prototype={
$0(){var w=this.a
w.wF()
w.a.bw()
w.a.qt()},
$S:0}
C.e7N.prototype={
$0(){var w=this.a
w.wF()
w.a.bw()
w.a.qt()},
$S:0}
C.e7Q.prototype={
$0(){var w=this,v=w.b
if(J.cK(v)||J.cx(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e7R.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e7S.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e7M.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e7P.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e7U.prototype={
$0(){this.a.PM()
return null},
$S:0}
C.e7T.prototype={
$0(){return this.a.Fo(this.b)},
$S:0}
C.e7e.prototype={
$1(d){var w=null,v=this.a,u=A.c(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.c(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bM(!1,B.dw,w,w,!0,w,w,w,new C.e7c(d),w,w),r=A.bp(B.bU,w,w,w,w,w,w,w,w,w,w,w)
return A.ek(A.a([s,A.bI(A.c(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e7d(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e7c.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.e7d.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.e7f.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.cRt(this.b)},
$S:0}
C.e79.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aWM(w.b,w.c,w.d)},
$S:7}
C.e6B.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e6C.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e6T.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.HE(t.a.c),$async$$0)
case 2:s=r.nM(q.dO(e,new C.e6R(t)))
if(s!=null&&t.c!=null)t.l(new C.e6S(t,s))
t.a.bw()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e6R.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e6S.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e6U.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e6V.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e78.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=this.b
v.d=u.cSf(C.hML(w),w)},
$S:0}
C.e6Q.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.d()
w=v.a.c
return new C.WX(u,w,C.aSm(u,w),new C.e6P(v),null)},
$S:z+37}
C.e6P.prototype={
$1(d){return this.bpG(d)},
bpG(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.l(new C.e6O(s,d))
w=3
return A.b(s.uC(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:787}
C.e6O.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.bgD(this.b)},
$S:0}
C.e75.prototype={
$1(d){return d.as},
$S:z+1}
C.e76.prototype={
$1(d){var w=this
return new A.ea(new C.e74(w.a,w.b,w.c,w.d,w.e),null)},
$S:20}
C.e74.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.el:B.c,h=A.m(26),g=A.K(B.bU.j(0.5),B.r,1.5),f=A.p(k,D.bY0,B.f,k,k,new A.o(B.bU.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.c("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.d()
w=x.p
a0=A.E(A.x(A.a([e,A.c(a0.b,k,1,B.a2,k,k,k,A.l(k,k,j?B.bv:B.bk,k,k,k,k,k,k,k,k,12.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.B,k,B.e,B.h,0,B.p),1)
f=A.A(A.a([f,B.bc,a0,A.aI(k,k,k,k,A.V(B.cC,j?B.bv:B.bk,k,k,k,k),k,k,k,new C.e6Z(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.h,0,k,k)
e=A.c("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bk,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.I)(v),++s){r=v[s]
q=t.a===r?B.bU:B.bU.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.ax(B.bU,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bU
a0.push(A.aA(k,A.cX(k,A.c(m,k,k,k,k,k,k,new A.G(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.aZ,new A.o(q,k,new A.bE(n,n,n,n),new A.bb(p,p,p,p),k,k,B.m),B.hl,k,k,k,k,B.D5,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e7_(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.c_(B.bI,a0,B.br,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c9o,new A.D(D.bI8,f,k),new A.D(D.bI_,e,k),new A.D(B.r9,a0,k),new A.D(X.aoA,A.c(v,k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bk,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.V(Al.arf,j?B.bv:B.bk,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bI1,A.A(A.a([a0,B.ar,A.E(A.c(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,k,k,k,B.D,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.ayL(k,B.bU,k,k,!1,B.y,k,k,k,k,k,k,new C.e70(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.h,0,k,k),k))}f.push(B.aB)
j=A.m(20)
e=A.a([new A.aa(0,B.H,B.az.j(0.35),B.hS,12)],x.V)
f.push(A.aA(k,A.p(k,A.A(A.a([D.fXu,B.bc,D.bMq,D.bYG],w),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.cdc,B.m),k,k,k,B.ic,B.bF,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e71(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.x6,A.A(A.a([A.E(A.dZ(B.dw,new C.e72(a1),k),1),B.ar,A.E(A.bI(N.aZP,k,new C.e73(t,a1),A.bp(B.bU,k,k,k,k,k,B.cq,k,k,k,k,k)),1)],w),B.l,k,B.e,B.h,0,k,k),k))
return A.bo(!0,A.p(k,A.cc(A.x(f,B.B,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.aq,k,k,new A.o(i,k,g,h,k,k,B.m),k,k,k,B.zk,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:87}
C.e6Z.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.e7_.prototype={
$0(){return this.b.$1(new C.e6Y(this.a,this.c))},
$S:0}
C.e6Y.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e70.prototype={
$1(d){var w=this.a
w.l(new C.e6W(w,d))
this.b.$1(new C.e6X())},
$S:9}
C.e6W.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e6X.prototype={
$0(){},
$S:0}
C.e71.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).N(new A.aIY(!0,w))
return null},
$S:0}
C.e72.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.e73.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).N(new A.aIY(!1,w))
return null},
$S:0}
C.e77.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cS3(this.b.b)
w.r.a6(0)},
$S:0}
C.e6p.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.d()
s=C.ak_(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hFy(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e6q.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aHb(w)},
$S:0}
C.e7h.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return new C.aff(this.b,w,this.c,null)},
$S:z+39}
C.e7b.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.el:B.c,t=A.m(20),s=A.V(B.kN,B.aV,w,w,w,36),r=A.c("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.c(p,w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bk,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.u(p,A.a([B.af,A.c("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bk,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.l,w,B.e,B.P,0,B.p)
return A.ek(A.a([A.bI(D.hez,w,new C.e7a(d),A.bp(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.bb,w,u,v,w,s,w,new A.b9(t,B.a1),r,w)},
$S:18}
C.e7a.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.e6r.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e6s.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e6t.prototype={
$1(d){return d.a},
$S:z+8}
C.e6u.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.d()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.I)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.ic(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aHb(w)},
$S:0}
C.e6y.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.d()
q=C.ak_(q)
w=A.U(q).k("X<1>")
q=A.B(new A.X(q,new C.e6w(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hFy(v.e,null,r,v.f,v.r,new C.e6x(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e6x.prototype={
$0(){return this.a.ac2(this.b)},
$S:0}
C.e6w.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e6z.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.f
v=A.U(w).k("O<1,ic>")
w=A.B(new A.O(w,new C.e6v(this.b),v),v.k("aj.E"))
u.d=t.aHb(w)},
$S:0}
C.e6v.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e7g.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e6L.prototype={
$1(d){return d.length!==0},
$S:3}
C.e6M.prototype={
$1(d){var w=this
return new A.ea(new C.e6K(w.a,w.b,w.c,w.d),null)},
$S:20}
C.e6K.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.el:B.c,r=A.c("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aS:B.aw,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.c("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bk,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.c("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bk,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.u(p,new A.O(o,new C.e6G(u,e,o),A.U(o).k("O<1,w>")))
p.push(B.N)
u=w.d
p.push(A.aN(v,B.M,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bC(v,new A.b6(4,A.m(12),B.dB),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.al,v,v,v,v,v,B.mL,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a7,v,B.ao,v,v,v,v))
p=A.x(p,B.am,v,B.e,B.P,0,B.p)
t=w.a
return A.ek(A.a([A.bM(!1,B.dw,v,v,!0,v,v,v,new C.e6H(d),v,v),A.bI(B.LY,v,new C.e6I(t,u,o,e),A.bp(B.bU,v,v,v,v,v,v,v,v,v,v,v)),A.bI(D.h16,v,new C.e6J(t,u,o,d),A.bp(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a4(360,v,p,v),v,v,v,v,r,v)},
$S:213}
C.e6G.prototype={
$1(d){var w=null
return A.dP(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.c(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aI(w,w,w,w,D.c6b,w,w,w,new C.e6F(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:2022}
C.e6F.prototype={
$0(){return this.a.$1(new C.e6D(this.b,this.c))},
$S:0}
C.e6D.prototype={
$0(){return B.d.X(this.a,this.b)},
$S:0}
C.e6H.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.e6I.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e6E(w.c,u))
v.bM(0,B.ck)}},
$S:0}
C.e6E.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e6J.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a7(w.d,!1).N(!0)},
$S:0}
C.e6N.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cSI(this.b,D.vj,C.HC(v,w.a.c))},
$S:0}
C.e7o.prototype={
$1(d){return d.as},
$S:z+1}
C.e7p.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.jj(this.b,w)},
$S:0}
C.e7q.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
v=C.iDQ(v)
return w.Xb(v==null?null:v.a)},
$S:0}
C.e7r.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.d()
w=l.r
v=C.if1(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcn(k)){k=A.aT(1/0,e.a,e.b)
s=A.aT(1/0,e.c,e.d)
l.czC(new A.av(u,t),v.gbnk(),new A.av(k,s))}k=A.m(22)
s=this.b.a
r=s?D.d7v:D.d5n
q=A.K(s?B.dx:D.bmX,B.r,1)
p=A.m(22)
o=A.bT(0,A.b4(m,m,m,new C.bhy(s,m),B.aA),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.by(p,new A.an(B.a0,m,B.ad,B.t,A.a([o,A.bT(0,A.vh(new A.R(n,n,n,n),new A.a4(u,t,new C.biv(l.d,v,l.f,w,new C.e7k(l),l.gcj0(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bAv(s,new C.e7l(l,e),new C.e7m(l,e),new C.e7n(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a8(B.aX,B.b1,B.x,r,m,m),B.m),m,m,m,S.anC,m,m,m,m)},
$S:172}
C.e7k.prototype={
$1(d){var w=this.a
w.l(new C.e7i(w,d))},
$S:2}
C.e7i.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.X(0,v)
else w.I(0,v)},
$S:0}
C.e7l.prototype={
$0(){var w=this.b
return this.a.beL(1.25,new A.av(A.aT(1/0,w.a,w.b),A.aT(1/0,w.c,w.d)))},
$S:0}
C.e7m.prototype={
$0(){var w=this.b
return this.a.beL(0.8,new A.av(A.aT(1/0,w.a,w.b),A.aT(1/0,w.c,w.d)))},
$S:0}
C.e7n.prototype={
$0(){var w=this,v=w.b
return w.a.aWM(new A.av(A.aT(1/0,v.a,v.b),A.aT(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gbnk())},
$S:0}
C.e7s.prototype={
$0(){var w=this.a
return w.l(new C.e7j(w))},
$S:0}
C.e7j.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e6A.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.d()
w=2
return A.b(A.fN(new A.fD(s.c)),$async$$0)
case 2:t.yL("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dkw.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bml(u,C.hRz(v.c,u),new C.dkv(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dkv.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dkx.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bpI(d.d,d.c,u.f.q(0,d.a),new C.dku(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dku.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fQ0.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nM(new A.cP(new A.X(v,new C.fQ1(d),w.k("X<1>")),new C.fQ2(),w.k("cP<1,n>")))},
$S:z+19}
C.fQ1.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fQ2.prototype={
$1(d){return d.a},
$S:z+8}
C.fPZ.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fQ_.prototype={
$1(d){return d.b},
$S:z+8}
C.fQ5.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nM(new A.cP(new A.X(v,new C.fQ6(d),w.k("X<1>")),new C.fQ7(),w.k("cP<1,n>")))},
$S:z+19}
C.fQ6.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fQ7.prototype={
$1(d){return d.a},
$S:z+8}
C.fQ3.prototype={
$1(d){var w,v=A.eB([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.I(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fQ4.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dkz.prototype={
$0(){return this.a},
$S:z+46}
C.dkQ.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:248}
C.dkI.prototype={
$2(d,e){var w=this.a.c_(0,d,new C.dkJ()),v=J.a2(w)
if(!v.q(w,e))v.I(w,e)},
$S:122}
C.dkJ.prototype={
$0(){return A.a([],x.s)},
$S:640}
C.dkH.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eD(w,e)
return w===!0},
$S:284}
C.dkA.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dkG.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dkF.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.I(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aQ(v==null?D.El:v)
u=1
while(v.C())u+=s.$2(v.gP(v).a,e)
v=s.b.h(0,d)
v=J.aQ(v==null?B.M:v)
while(v.C()){t=v.gP(v)
if(e.q(0,t))continue
e.I(0,t)
t=w.h(0,t)
t=J.aQ(t==null?D.El:t)
while(t.C())u+=s.$2(t.gP(t).a,e)}return u},
$S:2024}
C.dkB.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dkK.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.I(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aQ(u==null?B.M:u)
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
t=J.aQ(t==null?D.El:t)
while(t.C()){r=t.gP(t)
if(r.a!==a9&&!B.d.aR(w,new C.dkL(r)))w.push(r)}}B.d.br(w,new C.dkM(a8))
B.d.b_(w,new C.dkN())
q=C.if0(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.I)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.f8W],x.G))}a8=A.a([],x.s)
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
else j.push(d)}}a0=(B.d.gG(k)+B.d.gal(k))/2
a1=A.a([new A.y(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bsQ(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:2025}
C.dkL.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dkM.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dkN.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.dkO.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a2(n),v=o.c,u=-1/0,t=0;t<w.gJ(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.ba(v,A.a3(v).k("ba<2>")).cF(0,0,B.ov)+88-w.gG(n).a}else u=0
for(w=J.a2(n),v=o.c,t=0;t<w.gJ(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:765}
C.dkP.prototype={
$1(d){return 16+d*156},
$S:154}
C.dky.prototype={
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
t.n(0,d,new C.GV(r,new A.r(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.GV(s,new A.r(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.GV(s,new A.r(e,v)))}t=o.r.h(0,d)
t=J.aQ(t==null?B.M:t)
s=o.w
while(t.C()){r=t.gP(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Lb(d,new A.r(e+t,w),s,s.length))}},
$S:206}
C.dkC.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aM6(new A.r(v.a,v.b+28),new A.r(w.a,w.b+28),!0,null))},
$S:122}
C.dkD.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dkE.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:543}
C.dkR.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:543}
C.dkS.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:390}
C.dkT.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:194}
C.dkU.prototype={
$1(d){return d>=0.5},
$S:121}
C.fv_.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.ha(A.aM(!1,v,!0,new A.a4(38,38,A.V(d,this.a.c?B.c:B.cx,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w,w)},
$S:2027}
C.f4O.prototype={
$1(d){var w=null,v=A.m(8),u=B.bU.j(0.12),t=A.m(8)
return new A.D(B.l6,A.aM(!1,v,!0,A.p(w,A.c("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fMN,B.K,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.m),w,w,w,w,B.Pt,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f4N(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.f4N.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dB7.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dB6.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.c("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.mM,B.K,w,w)
return A.ek(A.a([A.bM(!1,B.dw,w,w,!0,w,w,w,new C.dB4(d),w,w),A.bM(!1,A.c("Delete",w,w,w,w,w,w,A.l(w,w,B.n4,w,w,w,w,w,w,w,w,w,w,w,B.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dB5(d),w,w)],x.p),B.bb,B.D0,w,u,D.bJ3,w,D.bL_,new A.b9(v,B.a1),w,w)},
$S:18}
C.dB4.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dB5.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.dBg.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dBh.prototype={
$1(d){var w=this.a
return w.l(new C.dBf(w,d))},
$S:z+49}
C.dBf.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dBi.prototype={
$1(d){var w=null
return A.qX(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dBl.prototype={
$1(d){var w=this.a
return w.l(new C.dBe(w,d))},
$S:35}
C.dBe.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dBk.prototype={
$1(d){var w=null
return A.qX(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dBm.prototype={
$1(d){var w=this.a
return w.l(new C.dBd(w,d))},
$S:35}
C.dBd.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dBn.prototype={
$0(){var w=this.a
return w.l(new C.dBc(w))},
$S:0}
C.dBc.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dBo.prototype={
$0(){var w=this.a
return w.l(new C.dBb(w))},
$S:0}
C.dBb.prototype={
$0(){return++this.a.at},
$S:0}
C.dBp.prototype={
$0(){var w=this.a
return w.l(new C.dBa(w))},
$S:0}
C.dBa.prototype={
$0(){return--this.a.ax},
$S:0}
C.dBq.prototype={
$0(){var w=this.a
return w.l(new C.dB9(w))},
$S:0}
C.dB9.prototype={
$0(){return++this.a.ax},
$S:0}
C.dBr.prototype={
$1(d){var w=this.a
return w.l(new C.dB8(w,d))},
$S:9}
C.dB8.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dBj.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dBs.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bU.j(0.18)
else w=q.c.a?B.el:B.c
v=A.m(12)
if(p)u=B.bU
else u=(q.c.a?B.eo:B.bO).j(0.85)
u=A.K(u,B.r,p?1.5:1)
if(p)t=B.bU
else t=q.c.a?B.bv:B.bk
t=A.V(f,t,r,r,r,18)
if(p)s=B.bU
else s=q.c.a?B.bv:B.bk
return A.E(A.aG(!1,B.a3,!0,r,A.aM(!1,o,!0,A.cX(r,A.x(A.a([t,B.at,A.c(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.D,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.h,0,B.p),r,r,B.aZ,new A.o(w,r,u,v,r,r,B.m),B.eI,r,r,r,r,B.jW,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dBt(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
$S:z+51}
C.dBt.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dBC.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.chy.prototype={
$2(d,e){return new A.bv(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:96}
C.chF.prototype={
$1(d){return d.ak()},
$S:z+5}
C.chG.prototype={
$2(d,e){var w=J.b8(e,new C.chE(),x.a)
w=A.B(w,w.$ti.k("aj.E"))
return new A.bv(d,w,x.d2)},
$S:z+53}
C.chE.prototype={
$1(d){return d.ak()},
$S:z+12}
C.chA.prototype={
$1(d){return C.anf(A.a0(d,x.N,x.z))},
$S:z+9}
C.chB.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.chC.prototype={
$1(d){return C.hwc(A.a0(d,x.N,x.z))},
$S:z+11}
C.chD.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.chK.prototype={
$1(d){return new A.aJ9(d.f.length,d.a,d.b)},
$S:z+55}
C.chL.prototype={
$2(d,e){return B.a.aQ(d.c,e.c)},
$S:786}
C.chH.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.chI.prototype={
$1(d){return d.cRG(C.HC(d,this.a))},
$S:z+85}
C.e7B.prototype={
$1(d){return C.uI(d,this.a.a.c)},
$S:z+3}
C.e7C.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e7G.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e7H.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e7y.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b2T(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zm("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(M.pR(r.c,r.e),$async$$0)
case 4:s.zm(p)
w=5
return A.b(s.KG(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e7z.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b2T(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zm("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(M.pR(r.c,r.e),$async$$0)
case 4:s.zm(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e7A.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.X_(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.zm("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.zm("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.zm("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.KG(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ac(j)
o=r.a
if(o.c==null){w=1
break}o.zm(B.a.eq(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e7F.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b2S(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.zm("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a7(r,!1).c9(A.e6(new C.e7E(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(M.pR(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e7E.prototype={
$1(d){var w=this.b
return new C.a1h(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e7D.prototype={
$1(d){return D.hSL},
$S:z+58}
C.e7J.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.e7K.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e7I(w,d)
return new A.D(B.d7,new C.biz(this.b,d.c,d.a,w,null),null)},
$S:2028}
C.e7I.prototype={
$0(){return this.a.Z2(this.b.b)},
$S:0}
C.e7t.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e7u.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e7v.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e7w.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e7x.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.e7L.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.Y(s,"NGMYFTSYNC2"))t=!A.cZ(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a7(this.b,!1).N(s)
return}},
$S:212}
C.dTw.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dTx.prototype={
$0(){return B.d.gG(D.a7O)},
$S:z+60}
C.dTy.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.d()
t=t.x
t===$&&A.d()
v=v.e
v===$&&A.d()
v=v.x
v===$&&A.d()
return A.b4(A.at(A.V(this.b.d,B.c.j(0.95),w,w,D.df3,44),w,w,w),w,w,new C.bnt(u,t,v,w),B.aA)},
$S:56}
C.h7b.prototype={
$1(d){return A.oX(new C.h7a(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:129}
C.h7a.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.el:B.c,p=A.a([new A.aa(0,B.H,B.v.j(r?0.35:0.08),B.ue,24)],x.V),o=r?B.eo:B.bO
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.m),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bU.j(0.18)],x.O)
w=A.p(t,D.c08,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a8(B.a5,B.a9,B.x,w,t,t),B.m),t,40,t,t,t,t,t,40)
v=A.c("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aS:B.aw,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.S,o,new A.D(E.aoE,A.A(A.a([w,B.bc,A.E(A.x(A.a([v,A.c("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bv:B.bk,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.B,t,B.e,B.h,0,B.p),1)],u),B.l,t,B.e,B.h,0,t,t),t),A.E(A.iM(!0,t,e,B.y,D.fz6,new C.h79(this.b,s),20,B.ao8,t,B.ah,!1),1)],u),B.l,t,B.e,B.h,0,B.p),B.f,t,t,new A.o(q,t,t,B.lq,p,t,B.m),t,t,t,t,t,t,t,t)},
$S:123}
C.h79.prototype={
$2(d,e){var w=null,v=D.a7O[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.K(s?B.eo:B.bO,B.r,1),q=A.a([new A.aa(0,B.H,B.v.j(s?0.35:0.08),B.eD,8)],x.V),p=A.m(15),o=A.E(new C.a89(v.a,!0,w),1),n=s?B.ka:B.iL,m=A.c(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aS:B.aw,w,w,w,w,w,w,w,w,13,w,w,B.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aG(!1,B.a3,!0,w,A.aM(!1,u,!0,A.eK(A.by(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.c(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bv:B.bk,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.B,w,B.e,B.h,0,B.p),B.f,n,w,w,w,w,w,w,B.iP,w,w,w)],l),B.am,w,B.e,B.h,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.m),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.h78(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)},
$S:83}
C.h78.prototype={
$0(){A.a7(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.crt.prototype={
$0(){return this.a.aio(this.b)},
$S:0}
C.h6z.prototype={
$1(d){return D.hNf},
$S:z+61}
C.hem.prototype={
$1(d){var w=this
return new C.a33(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.h6D.prototype={
$1(d){return new C.a_V(this.a,null)},
$S:z+63}
C.h6C.prototype={
$1(d){return D.hOg},
$S:z+64}
C.dbZ.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dc_.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.dbY(w,d))},
$S:35}
C.dbY.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dc0.prototype={
$1(d){return this.a.Lj()},
$S:2}
C.dc1.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dbV.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dbW.prototype={
$1(d){return this.a.Lj()},
$S:2}
C.dbX.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.cJO.prototype={
$0(){},
$S:0}
C.cJU.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.cJV.prototype={
$0(){return this.a.aS1(-1)},
$S:0}
C.cJW.prototype={
$1(d){return this.a.l(new C.cJT())},
$S:2}
C.cJT.prototype={
$0(){},
$S:0}
C.cJX.prototype={
$0(){return this.a.aS1(1)},
$S:0}
C.cJY.prototype={
$1(d){return this.a.l(new C.cJS())},
$S:2}
C.cJS.prototype={
$0(){},
$S:0}
C.cJZ.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.c(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.eo:B.bO
return A.v9(u,u,B.b5,r,u,new C.cJR(t,d),B.xa,s,w,u,new A.ax(v,1,B.r,-1),B.co)},
$S:2029}
C.cJR.prototype={
$1(d){var w=this.a
return w.l(new C.cJP(w,this.b))},
$S:9}
C.cJP.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cK_.prototype={
$1(d){return this.a.l(new C.cJQ())},
$S:2}
C.cJQ.prototype={
$0(){},
$S:0}
C.cK0.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.fuv.prototype={
$1(d){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length!==0)A.a7(this.b,!1).N(w)},
$S:2}
C.fuw.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.fux.prototype={
$0(){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a7(this.b,!1).N(w)},
$S:0}
C.fut.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=q.a
v=w.d
u=w.f
t=q.gbEK()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b4(new A.D(D.bKZ,new A.e8(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.m),r,r,r,r,w,r,r,r),r),r),new C.bAk(p,v,this.b.a,u,t,r),r,r,B.aA)},
$S:56}
C.fuu.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=B.dQ.aA(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.ap(B.aV,B.bU,w)
s.toString
s=A.a([B.b5,s,B.aV],x.O)
return A.aG(!1,B.a3,!0,p,A.aM(!1,v,!0,A.eK(D.eGM,r,new A.o(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a8(new A.dh(-1.2+t,-0.5),new A.dh(1.2-t,0.8),B.x,s,r,r),B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
$S:137}
C.h4Q.prototype={
$1(d){return A.v(d.h(0,1))+","},
$S:58}
C.f1Y.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f1P.prototype={
$0(){return this.a.e=!0},
$S:0}
C.f1Q.prototype={
$0(){return this.a.e=!1},
$S:0}
C.f1W.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.d()
w.a=v.c
return new A.ea(new C.f1V(w,this.b),null)},
$S:20}
C.f1V.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.el:B.c,t=A.m(20),s=A.c("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eI(w,u,new A.D(B.aoy,A.x(A.a([s,B.aj,A.c("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bk,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hCo(new C.f1S(r,e),r.a),B.aB,A.A(A.a([A.E(A.dZ(B.dw,new C.f1T(d),w),1),B.ar,A.E(A.bI(B.Xi,w,new C.f1U(r,d),A.bp(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.h,0,w,w)],q),B.am,w,B.e,B.P,0,B.p),w),w,w,w,w,w,B.dd,w,new A.b9(t,B.a1),w)},
$S:103}
C.f1S.prototype={
$1(d){return this.b.$1(new C.f1R(this.a,d))},
$S:35}
C.f1R.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.f1T.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.f1U.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).N(w)
return null},
$S:0}
C.f1X.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.Ub(this.b)},
$S:0}
C.f1K.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.bgJ(w)},
$S:0}
C.f1O.prototype={
$1(d){return this.bq2(d)},
bq2(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Mx(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.jj(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.f1N.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.d
v=A.U(w).k("X<1>")
w=A.B(new A.X(w,new C.f1M(this.b),v),v.k("M.E"))
u.d=t.bgJ(w)},
$S:0}
C.f1M.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.f1Z.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.jj(this.b,w)},
$S:0}
C.f2_.prototype={
$1(d){return this.a.bJ_(d,this.b)},
$S:z+67}
C.f1L.prototype={
$0(){return this.a.ac1(this.b)},
$S:0}
C.he9.prototype={
$1(d){return new C.afA(this.a,this.b,this.c,null)},
$S:z+68}
C.f21.prototype={
$0(){return this.a.a15(this.b)},
$S:0}
C.f22.prototype={
$0(){return this.a.Rs(this.b)},
$S:0}
C.f23.prototype={
$0(){return this.a.Fj(this.b)},
$S:0}
C.f24.prototype={
$0(){return this.a.a16(this.b)},
$S:0}
C.f20.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.f1F.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f1G.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.f1H.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.f1J.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qy(),$async$$0)
case 2:if(t.c!=null)t.l(new C.f1I(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f1I.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.f2r.prototype={
$2(d,e){return d+e.gxS()},
$S:z+71}
C.f2n.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f2o.prototype={
$0(){return this.a.f=!1},
$S:0}
C.f28.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.el:B.c,s=A.m(24),r=A.p(v,D.c0D,B.f,v,v,new A.o(B.aC.j(u?0.18:0.08),v,A.K(B.aC.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.c("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aS:B.aw,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.c("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bv:B.bk,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aS:B.aw
u=u?B.eo:B.bO
w=x.p
return A.eI(v,t,new A.D(B.x9,A.x(A.a([r,B.aO,q,B.N,p,B.di,A.A(A.a([A.E(A.dZ(B.oq,new C.f26(d),A.dl(v,v,v,v,v,v,v,v,v,o,v,v,B.f8,v,new A.b9(A.m(14),B.a1),new A.ax(u,1,B.r,-1),v,v,v,v)),1),B.ar,A.E(A.bI(D.hiu,v,new C.f27(d),A.bp(B.aC,v,v,v,v,v,B.f8,v,new A.b9(A.m(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.h,0,v,v)],w),B.l,v,B.e,B.P,0,B.p),v),v,v,v,v,v,B.dd,v,new A.b9(s,B.a1),v)},
$S:47}
C.f26.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.f27.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.f2h.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.el:B.c,i=A.m(28),h=A.a([new A.aa(0,B.H,B.v.j(k?0.35:0.08),B.h1,28)],x.V),g=k?D.dn_:At.a75,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.m),m,4,m,m,m,m,m,40),B.aB,D.fsb,B.at,new A.bK(B.a5,m,m,A.c("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cH,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.h,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a8(B.ay,B.aD,B.x,g,m,m),B.m),m,m,m,m,E.aoC,m,m,1/0)
w=A.c("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bk,m,m,m,m,m,m,m,m,11,m,m,B.D,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b9z(B.b_,B.jH,new C.f2e(v,d),l,"Camera import","Scan QR"),1),B.ar,A.E(v.b9z(B.cG,Q.Ab,new C.f2f(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.h,0,m,m)
t=A.c("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bk,m,m,m,m,m,m,m,m,11,m,m,B.D,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aC.j(k?0.14:0.06)
q=A.m(16)
p=A.K(B.aC.j(0.28),B.r,1)
o=A.p(m,D.c_V,B.f,m,m,new A.o(B.aC.j(0.12),m,m,A.m(12),m,m,B.m),m,m,m,m,B.bR,m,m,m)
n=A.c("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aS:B.aw,m,m,m,m,m,m,m,m,m,m,m,B.D,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.c("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bk,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.B,m,B.e,B.h,0,B.p),1)
return A.bo(!0,new A.D(B.x3,A.p(m,A.x(A.a([g,new A.D(B.aoz,A.x(A.a([w,B.S,u,B.by,t,B.S,A.aG(!1,B.a3,!0,m,A.aM(!1,s,!0,A.p(m,A.A(A.a([o,B.bc,n,A.V(B.eM,k?B.bv:B.bk,m,m,m,m)],f),B.l,m,B.e,B.h,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.m),m,m,m,m,B.bF,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.f2g(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)],f),B.B,m,B.e,B.h,0,B.p),m)],f),B.l,m,B.e,B.P,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.m),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:30}
C.f2e.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).N(null)
w=2
return A.b(u.a.we("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f2f.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).N(null)
w=2
return A.b(u.a.we("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f2g.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).N(null)
w=2
return A.b(u.a.P1(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f2c.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.el:B.c,m=A.m(24),l=A.a([new A.aa(0,B.H,B.v.j(o?0.35:0.08),B.eT,24)],x.V),k=o?B.eo:B.bO
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.m),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bv:B.bk
u=A.by(w,new A.a4(48,48,C.aTL(!0,A.m(12),48,P.Q9,u,v.c,48),q),B.aq)
w=A.c(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aS:B.aw,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.BB(v.gxS())
s=x.p
r=this.a
return A.bo(!0,new A.D(B.x3,A.p(q,A.x(A.a([B.S,k,new A.D(D.aow,A.A(A.a([u,B.bc,A.E(A.x(A.a([w,A.c(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bv:B.bk,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.B,q,B.e,B.h,0,B.p),1)],s),B.l,q,B.e,B.h,0,q,q),q),B.CT,r.ctB(B.vD,B.aV,new C.f2a(d),p,"QR code or backup file","Transfer project"),r.b6x(!0,B.eq,B.aC,new C.f2b(d),p,"Remove from this device","Delete project"),B.S],s),B.l,q,B.e,B.P,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.m),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:30}
C.f2a.prototype={
$0(){A.a7(this.a,!1).N("transfer")
return null},
$S:0}
C.f2b.prototype={
$0(){A.a7(this.a,!1).N("delete")
return null},
$S:0}
C.f2d.prototype={
$1(d){return this.bq3(d)},
bq3(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Mx(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wu(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.f2u.prototype={
$0(){var w=this.a
w.a.bw()
w.l(new C.f2t(w))},
$S:0}
C.f2t.prototype={
$0(){return this.a.r++},
$S:0}
C.f2v.prototype={
$0(){var w=this.a
return w.l(new C.f2s(w))},
$S:0}
C.f2s.prototype={
$0(){return this.a.r++},
$S:0}
C.f25.prototype={
$0(){var w=this.a.c
w.toString
return A.jj(w,null)},
$S:0}
C.f29.prototype={
$0(){return this.a.cmH(this.b)},
$S:0}
C.f2q.prototype={
$0(){var w=this.a
return w.l(new C.f2p(w,this.b))},
$S:0}
C.f2p.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f2k.prototype={
$0(){return this.a.we("scan")},
$S:0}
C.f2l.prototype={
$0(){return this.a.we("file")},
$S:0}
C.f2m.prototype={
$1(d){return this.a.ctC(d,this.b)},
$S:z+72}
C.f2j.prototype={
$0(){return this.a.Fn(this.b)},
$S:0}
C.f2i.prototype={
$0(){return this.a.a1C(this.b,this.c)},
$S:0}
C.cJ9.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cJ8.prototype={
$1(d){return d.ak()},
$S:z+74}
C.cJ6.prototype={
$1(d){return C.hXR(A.a0(d,x.N,x.z))},
$S:z+75}
C.cJ7.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fOT.prototype={
$1(d){return d.y===D.l9},
$S:z+3}
C.heW.prototype={
$1(d){return C.aSm(d,this.a)},
$S:z+3}
C.fMn.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bVa.prototype={
$1(d){return!d.as},
$S:z+1}
C.bV9.prototype={
$1(d){return d.ak()},
$S:z+23}
C.bV6.prototype={
$1(d){return C.hwe(A.a0(d,x.N,x.z))},
$S:z+24}
C.bV7.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bV8.prototype={
$1(d){return J.k(d)},
$S:15}
C.fCr.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.fxY.prototype={
$1(d){return C.hly(A.a0(d,x.N,x.z))},
$S:z+79}
C.fxZ.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fy_.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.h6n.prototype={
$1(d){return J.k(d)},
$S:15}
C.h6o.prototype={
$1(d){return d.a},
$S:z+81}
C.h6p.prototype={
$1(d){return d.length!==0},
$S:3}
C.h6q.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.h6r.prototype={
$1(d){return d.Ub(null).ak()},
$S:z+82}
C.heU.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fPm.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fSB.prototype={
$1(d){return C.anf(A.a0(d,x.N,x.z))},
$S:z+9}
C.fSC.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fSD.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fSE.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fSF.prototype={
$1(d){return C.uI(d,this.a)},
$S:z+3}
C.h6a.prototype={
$1(d){return C.uI(d,this.a)},
$S:z+3}
C.heP.prototype={
$1(d){return C.anf(A.a0(d,x.N,x.z))},
$S:z+9}
C.heQ.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.heR.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fP3.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fP4.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.hf_.prototype={
$1(d){return!d.as},
$S:z+1}
C.fOy.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fOz.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fOA.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.hen.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fTs.prototype={
$1(d){return d.Q},
$S:z+15}
C.h63.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fSy.prototype={
$1(d){return C.anf(A.a0(d,x.N,x.z))},
$S:z+9}
C.fSz.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fSA.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.h5Z.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fyx.prototype={
$1(d){return d.length!==0},
$S:3}
C.fyy.prototype={
$1(d){return C.hwe(A.a0(d,x.N,x.z))},
$S:z+24}
C.fyz.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fyA.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:15}
C.fyB.prototype={
$1(d){return d.length!==0},
$S:3}
C.fyO.prototype={
$2(d,e){return d.eD(new C.fyP(e))},
$S:2030}
C.fyP.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.v(d))
return B.cn},
$S:2031}
C.fyL.prototype={
$1(d){return C.ik1(d,this.a)},
$S:z+84}
C.fyM.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fyN.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fDb.prototype={
$1(d){return d.a},
$S:z+56}
C.fDc.prototype={
$1(d){return d.length!==0},
$S:3}
C.fDd.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fGd.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fLB.prototype={
$1(d){return C.hI4(d,C.HC(d,this.a))},
$S:z+5}
C.fLC.prototype={
$1(d){return C.hI5(d,C.HC(d,this.a))},
$S:z+5};(function aliases(){var w=C.aCQ.prototype
w.bxX=w.t
w=C.aAZ.prototype
w.bxS=w.t
w=C.aIm.prototype
w.byk=w.t
w=C.aCR.prototype
w.bxY=w.t
w=C.aCT.prototype
w.bxZ=w.t
w=C.aCU.prototype
w.by_=w.t
w=C.aOz.prototype
w.bAO=w.t
w=C.aQG.prototype
w.bD7=w.t
w=C.aQH.prototype
w.bD8=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aFR.prototype,"gcqp","cqq",28)
var r
w(r=C.aCP.prototype,"gcj6","cj7",65)
v(r,"gaQc","Oy",0)
v(r,"gcyW","BL",0)
v(r,"gbQV","Pg",0)
v(r,"gcNH","zn",0)
v(r,"gcsy","a2l",0)
v(r,"gbMf","OY",0)
v(r,"gbRk","Yt",0)
w(r,"gbWr","bWs",78)
v(r,"gbGq","AF",0)
v(C.aCS.prototype,"gcND","Gg",0)
v(r=C.an4.prototype,"gbuh","bui",2)
v(r,"gbu9","bua",2)
v(r,"gcOK","cOL",2)
u(r,"gqs","kM",0)
u(r=C.ale.prototype,"gf1","fS",2)
w(r,"gck9","cka",27)
u(C.aw5.prototype,"gqs","kM",0)
v(r=C.aA1.prototype,"gd_o","d_p",2)
u(r,"gqs","kM",0)
u(C.aMc.prototype,"gbuf","bug",2)
v(C.and.prototype,"gCi","cOX",2)
u(r=C.anb.prototype,"gcPE","cPF",2)
u(r,"gqs","kM",0)
v(r=C.an7.prototype,"gbt7","bt8",2)
v(r,"gcUP","cUQ",2)
u(r=C.an9.prototype,"gf1","fS",2)
u(r,"giA","cOg",2)
v(r=C.an5.prototype,"gcO5","cO6",2)
u(r,"gbs_","jI",2)
v(r=C.aGr.prototype,"gai_","wv",0)
v(r,"gclT","a1t",0)
v(r,"gaUt","IT",0)
v(r=C.aGo.prototype,"gcJw","a4w",0)
v(r,"gai_","wv",0)
v(r,"gcwT","a3_",0)
v(r,"gclO","b4I",2)
v(r,"gcmU","a1H",0)
w(r,"gcj0","cj1",35)
v(r,"gbRc","IY",0)
v(r,"gcKF","cKG",2)
v(r,"gc8y","a_g",0)
w(r,"gchv","chw",36)
v(r,"gclC","clD",2)
v(r=C.aEQ.prototype,"gceJ","QX",0)
v(r,"gceL","ceM",2)
v(r,"gbNK","abE",0)
v(r=C.aGq.prototype,"gbUO","YZ",0)
v(r,"gc4o","ZF",0)
v(r,"gcDt","a3U",0)
v(r,"gczw","a3t",0)
v(C.aGp.prototype,"gcze","ajO",0)
v(C.avi.prototype,"gcht","a13",0)
v(C.aBy.prototype,"ga4f","Lj",2)
v(C.aBx.prototype,"ga4f","Lj",2)
v(C.aAd.prototype,"ga4f","Lj",2)
v(r=C.aHY.prototype,"gb5V","RZ",0)
v(r,"gbFe","X5",0)
v(r,"gcmI","cmJ",2)
w(C.aHX.prototype,"gcil","cim",69)
t(C.aHZ.prototype,"gaUo",0,0,null,["$1","$0"],["IS","bP3"],70,0,0)
s(C,"hQE","iu3",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aE,[C.aqQ,C.v6,C.nJ,C.IH,C.agO,C.L4,C.v7,C.bVG,C.tq,C.br_,C.anm,C.aeS,C.lL,C.bUh,C.avu,C.zR,C.alV,C.N9,C.bcf,C.aaV,C.bjE,C.agV,C.aBe,C.agJ,C.aMc,C.Lb,C.GV,C.bix,C.aM6,C.asd,C.dkV,C.mf,C.aWK,C.aWJ,C.aUL,C.us,C.rF,C.lY,C.ic,C.lb,C.aK3])
u(A.hg,[C.fXt,C.fXs,C.fXu,C.h74,C.fKd,C.fKe,C.fKj,C.fV7,C.fV6,C.fV5,C.cau,C.h7B,C.h7t,C.h7F,C.fPb,C.dUd,C.dU8,C.dU9,C.dTM,C.dTI,C.dUs,C.dUt,C.dUm,C.dUn,C.dUu,C.dUv,C.fPX,C.fSv,C.fSw,C.h68,C.heO,C.fP2,C.h6J,C.dk7,C.dju,C.djD,C.djU,C.djz,C.djF,C.djw,C.djJ,C.djK,C.djI,C.djZ,C.djY,C.dlV,C.dlW,C.dlX,C.dkl,C.dkq,C.dkp,C.cSb,C.cSd,C.dbc,C.dbB,C.dbC,C.dbF,C.dbH,C.dbI,C.dbJ,C.dbL,C.dbM,C.bU1,C.bTW,C.fCT,C.heG,C.heH,C.heI,C.heD,C.heJ,C.heK,C.heL,C.heC,C.fQA,C.h52,C.fMo,C.fTr,C.bP3,C.hf5,C.h5F,C.bNc,C.bN7,C.bN9,C.bN8,C.ct9,C.ct4,C.ct5,C.ct3,C.ct1,C.ct6,C.cTf,C.cI8,C.cIb,C.cI9,C.cIc,C.cId,C.ff2,C.fpp,C.bUO,C.bUI,C.bUM,C.bUp,C.e69,C.e66,C.e67,C.e65,C.e6b,C.bUG,C.bUw,C.bUg,C.bUf,C.bUb,C.bUc,C.bUd,C.bUe,C.e7P,C.e7e,C.e79,C.e6B,C.e6R,C.e6U,C.e6Q,C.e6P,C.e75,C.e76,C.e70,C.e6p,C.e7h,C.e7b,C.e6r,C.e6s,C.e6t,C.e6y,C.e6w,C.e6v,C.e6L,C.e6M,C.e6G,C.e7o,C.e7k,C.dkw,C.dkx,C.fQ0,C.fQ1,C.fQ2,C.fPZ,C.fQ_,C.fQ5,C.fQ6,C.fQ7,C.fQ3,C.fQ4,C.dkQ,C.dkG,C.dkB,C.dkL,C.dkM,C.dkP,C.dkD,C.dkS,C.dkT,C.dkU,C.fv_,C.f4O,C.dB6,C.dBg,C.dBh,C.dBi,C.dBl,C.dBk,C.dBm,C.dBr,C.dBs,C.chF,C.chE,C.chA,C.chB,C.chC,C.chD,C.chK,C.chH,C.chI,C.e7B,C.e7E,C.e7D,C.e7K,C.e7L,C.dTw,C.h7b,C.h6z,C.hem,C.h6D,C.h6C,C.dc_,C.dc0,C.dbW,C.cJW,C.cJY,C.cJZ,C.cJR,C.cK_,C.fuv,C.h4Q,C.f1W,C.f1S,C.f1O,C.f1M,C.f2_,C.he9,C.f28,C.f2h,C.f2c,C.f2d,C.f2m,C.cJ8,C.cJ6,C.cJ7,C.fOT,C.heW,C.fMn,C.bVa,C.bV9,C.bV6,C.bV7,C.bV8,C.fxY,C.fxZ,C.h6n,C.h6o,C.h6p,C.h6q,C.h6r,C.heU,C.fPm,C.fSB,C.fSC,C.fSE,C.fSF,C.h6a,C.heP,C.heQ,C.heR,C.fP3,C.fP4,C.hf_,C.fOy,C.fOz,C.hen,C.fTs,C.h63,C.fSy,C.fSz,C.h5Z,C.fyx,C.fyy,C.fyz,C.fyA,C.fyB,C.fyP,C.fyL,C.fyM,C.fDb,C.fDc,C.fGd,C.fLB,C.fLC])
u(A.aw,[C.b1n,C.an2,C.aY2,C.a_x,C.be5,C.Re,C.a7n,C.tQ,C.IJ,C.biv,C.bml,C.bAv,C.bpI,C.afe,C.bmk,C.afd,C.bmj,C.aER,C.aL8,C.aff,C.GR,C.biw,C.aeu,C.biu,C.biz,C.b1l,C.avi,C.afA])
u(A.lK,[C.beL,C.bfZ,C.bfQ,C.aJY,C.blm,C.bqZ,C.aY7,C.beN,C.aCO,C.bee,C.bv5,C.blu,C.bkU,C.bl0,C.biy,C.bhy,C.bnt,C.bAk])
u(A.iI,[C.h7y,C.h7z,C.h7A,C.h7r,C.h7s,C.h7D,C.h7E,C.dUp,C.dUb,C.dUe,C.dTT,C.dTU,C.dTV,C.dTS,C.dU_,C.dTR,C.dU0,C.dU1,C.dTQ,C.dU2,C.dTP,C.dU3,C.dTO,C.dU4,C.dTG,C.dTH,C.dTN,C.dU5,C.dTL,C.dU6,C.dTK,C.dTW,C.dTJ,C.dTX,C.dTF,C.dTY,C.dTZ,C.dUq,C.dUr,C.dUf,C.dUg,C.dUh,C.dUi,C.dUj,C.dUk,C.dUl,C.dUx,C.dUo,C.fPY,C.djs,C.djq,C.djr,C.djt,C.dk6,C.djW,C.djT,C.djv,C.djX,C.djB,C.djC,C.djE,C.djV,C.djA,C.djG,C.dk3,C.djQ,C.djP,C.djR,C.djS,C.djL,C.djN,C.djO,C.djH,C.dk_,C.dk2,C.djx,C.djy,C.dlU,C.dlT,C.dlS,C.dlR,C.dlY,C.dlQ,C.dlZ,C.dkm,C.dkn,C.dko,C.dkr,C.dkk,C.dkj,C.cSc,C.dbb,C.dbo,C.dbn,C.dbD,C.dbm,C.dbE,C.dbl,C.dbk,C.dbG,C.dbj,C.dbw,C.dbv,C.dbN,C.bTV,C.bU4,C.bTX,C.bTY,C.bU0,C.bU_,C.bU2,C.bU3,C.bTZ,C.bTT,C.bTU,C.bVy,C.bVz,C.bVA,C.bVB,C.bVC,C.bVD,C.bVE,C.heF,C.h53,C.bNb,C.bN6,C.bN4,C.bN5,C.bN3,C.ctb,C.ctc,C.cta,C.ctd,C.ctf,C.ctg,C.cth,C.ct7,C.cI7,C.cIg,C.cIh,C.cIi,C.cIf,C.cIj,C.cIk,C.cIl,C.cIm,C.cIa,C.cIe,C.bV3,C.bV2,C.bV0,C.bUZ,C.bV_,C.bUW,C.bUX,C.bUY,C.bV1,C.bUV,C.ff3,C.ff4,C.ff5,C.ff6,C.ff7,C.bUS,C.bUT,C.bUU,C.bUN,C.bUP,C.bUQ,C.bUR,C.bUJ,C.bUt,C.bUs,C.bUr,C.bUl,C.bUm,C.bUq,C.bUn,C.bUo,C.bUk,C.e68,C.e6a,C.e63,C.e64,C.e62,C.e6c,C.e6d,C.e6e,C.e6h,C.e6i,C.e6j,C.e6k,C.e6l,C.e6m,C.e6n,C.e6o,C.e6f,C.e6g,C.bUF,C.bUE,C.bUv,C.bUu,C.bUB,C.bUC,C.bUy,C.bUz,C.bUA,C.bUx,C.bU5,C.bU6,C.bUa,C.bU9,C.bU8,C.bU7,C.e7O,C.e7N,C.e7Q,C.e7R,C.e7S,C.e7M,C.e7U,C.e7T,C.e7c,C.e7d,C.e7f,C.e6C,C.e6T,C.e6S,C.e6V,C.e78,C.e6O,C.e6Z,C.e7_,C.e6Y,C.e6W,C.e6X,C.e71,C.e72,C.e73,C.e77,C.e6q,C.e7a,C.e6u,C.e6x,C.e6z,C.e7g,C.e6F,C.e6D,C.e6H,C.e6I,C.e6E,C.e6J,C.e6N,C.e7p,C.e7q,C.e7i,C.e7l,C.e7m,C.e7n,C.e7s,C.e7j,C.e6A,C.dkv,C.dku,C.dkz,C.dkJ,C.dkA,C.f4N,C.dB7,C.dB4,C.dB5,C.dBf,C.dBe,C.dBd,C.dBn,C.dBc,C.dBo,C.dBb,C.dBp,C.dBa,C.dBq,C.dB9,C.dB8,C.dBj,C.dBt,C.dBC,C.e7C,C.e7G,C.e7H,C.e7y,C.e7z,C.e7A,C.e7F,C.e7J,C.e7I,C.e7t,C.e7u,C.e7v,C.e7w,C.e7x,C.dTx,C.h78,C.crt,C.dbZ,C.dbY,C.dc1,C.dbV,C.dbX,C.cJO,C.cJU,C.cJV,C.cJT,C.cJX,C.cJS,C.cJP,C.cJQ,C.cK0,C.fuw,C.fux,C.f1Y,C.f1P,C.f1Q,C.f1R,C.f1T,C.f1U,C.f1X,C.f1K,C.f1N,C.f1Z,C.f1L,C.f21,C.f22,C.f23,C.f24,C.f20,C.f1F,C.f1G,C.f1H,C.f1J,C.f1I,C.f2n,C.f2o,C.f26,C.f27,C.f2e,C.f2f,C.f2g,C.f2a,C.f2b,C.f2u,C.f2t,C.f2v,C.f2s,C.f25,C.f29,C.f2q,C.f2p,C.f2k,C.f2l,C.f2j,C.f2i])
u(A.af,[C.ar2,C.UA,C.a0i,C.a0m,C.a0k,C.a_T,C.an3,C.ald,C.aw4,C.aA0,C.anc,C.ana,C.an6,C.WX,C.an8,C.UB,C.asg,C.asa,C.a0Y,C.ase,C.a1h,C.a1i,C.a89,C.a_V,C.a_U,C.a_o,C.a33,C.GG,C.aA6,C.avh,C.avb,C.avg,C.Pt])
u(A.ah,[C.aFR,C.bip,C.aCP,C.biO,C.aCS,C.bfX,C.aCQ,C.aAZ,C.aIm,C.aA1,C.aCU,C.aCT,C.aCR,C.bnP,C.an9,C.an5,C.aGr,C.aGo,C.aEQ,C.aGq,C.aGp,C.bnQ,C.aOz,C.aBy,C.aBx,C.aAd,C.bAn,C.aQG,C.aQH,C.aHY,C.bpd,C.aHX,C.bC8])
u(A.iJ,[C.dUa,C.dUc,C.dU7,C.dUw,C.fSx,C.bTS,C.dk5,C.dk4,C.djM,C.dk0,C.dk1,C.dks,C.bVF,C.bVx,C.bUi,C.bUj,C.heE,C.hf4,C.bNa,C.cte,C.ct8,C.ct2,C.ff8,C.bUH,C.bUK,C.bUL,C.dvl,C.bUD,C.e74,C.e6K,C.e7r,C.dkI,C.dkH,C.dkF,C.dkK,C.dkN,C.dkO,C.dky,C.dkC,C.dkE,C.dkR,C.chy,C.chG,C.chL,C.dTy,C.h7a,C.h79,C.fut,C.fuu,C.f1V,C.f2r,C.cJ9,C.fCr,C.fy_,C.fSD,C.fOA,C.fSA,C.fyO,C.fyN,C.fDd])
u(A.lh,[C.a2z,C.agX,C.a2S,C.a0K,C.adv,C.aMU,C.II,C.ane,C.cJa,C.cJb])
t(C.an4,C.aCQ)
t(C.ale,C.aAZ)
t(C.aw5,C.aIm)
t(C.bit,C.aCU)
t(C.and,C.bit)
t(C.bis,C.aCT)
t(C.anb,C.bis)
t(C.bir,C.aCR)
t(C.an7,C.bir)
t(C.bnu,C.aOz)
t(C.bAl,C.aQG)
t(C.bAm,C.aQH)
t(C.aHZ,C.bC8)
t(C.bct,A.bcg)
t(C.bAo,A.a7O)
t(C.bcs,C.bAo)
w(C.aCQ,A.cj)
w(C.aAZ,A.cj)
w(C.aIm,A.f2)
w(C.aCR,A.cj)
v(C.bir,C.agJ)
w(C.aCT,A.cj)
v(C.bis,C.agJ)
w(C.aCU,A.cj)
v(C.bit,C.agJ)
w(C.aOz,A.f2)
w(C.aQG,A.cj)
w(C.aQH,A.cj)
v(C.bC8,A.eM)
v(C.bAo,A.jx)})()
A.j3(b.typeUniverse,JSON.parse('{"b1n":{"aw":[],"w":[]},"beL":{"aC":[]},"ar2":{"af":[],"w":[]},"aFR":{"ah":["ar2"]},"UA":{"af":[],"w":[]},"an2":{"aw":[],"w":[]},"aY2":{"aw":[],"w":[]},"bip":{"ah":["UA"]},"a0i":{"af":[],"w":[]},"a0m":{"af":[],"w":[]},"a0k":{"af":[],"w":[]},"a_T":{"af":[],"w":[]},"aCP":{"ah":["a0i"]},"biO":{"ah":["a0m"]},"aCS":{"ah":["a0k"]},"a_x":{"aw":[],"w":[]},"bfZ":{"aC":[]},"bfQ":{"aC":[]},"bfX":{"ah":["a_T"]},"aJY":{"aC":[]},"blm":{"aC":[]},"be5":{"aw":[],"w":[]},"an3":{"af":[],"w":[]},"an4":{"ah":["an3"]},"bqZ":{"aC":[]},"aY7":{"aC":[]},"ald":{"af":[],"w":[]},"aw4":{"af":[],"w":[]},"aA0":{"af":[],"w":[]},"ale":{"ah":["ald"]},"beN":{"aC":[]},"Re":{"aw":[],"w":[]},"aCO":{"aC":[]},"aw5":{"ah":["aw4"]},"bee":{"aC":[]},"aA1":{"ah":["aA0"]},"anc":{"af":[],"w":[]},"ana":{"af":[],"w":[]},"an6":{"af":[],"w":[]},"and":{"ah":["anc"]},"bv5":{"aC":[]},"anb":{"ah":["ana"]},"blu":{"aC":[]},"an7":{"ah":["an6"]},"bkU":{"aC":[]},"WX":{"af":[],"w":[]},"an8":{"af":[],"w":[]},"UB":{"af":[],"w":[]},"a7n":{"aw":[],"w":[]},"bl0":{"aC":[]},"tQ":{"aw":[],"w":[]},"IJ":{"aw":[],"w":[]},"bnP":{"ah":["WX"]},"an9":{"ah":["an8"]},"an5":{"ah":["UB"]},"asg":{"af":[],"w":[]},"asa":{"af":[],"w":[]},"a0Y":{"af":[],"w":[]},"aff":{"aw":[],"w":[]},"aGr":{"ah":["asg"]},"aGo":{"ah":["asa"]},"biv":{"aw":[],"w":[]},"biy":{"aC":[]},"bml":{"aw":[],"w":[]},"bhy":{"aC":[]},"bAv":{"aw":[],"w":[]},"bpI":{"aw":[],"w":[]},"aEQ":{"ah":["a0Y"]},"afe":{"aw":[],"w":[]},"bmk":{"aw":[],"w":[]},"afd":{"aw":[],"w":[]},"bmj":{"aw":[],"w":[]},"aER":{"aw":[],"w":[]},"aL8":{"aw":[],"w":[]},"GR":{"aw":[],"w":[]},"ase":{"af":[],"w":[]},"a1h":{"af":[],"w":[]},"a1i":{"af":[],"w":[]},"aGq":{"ah":["ase"]},"biw":{"aw":[],"w":[]},"aeu":{"aw":[],"w":[]},"biu":{"aw":[],"w":[]},"biz":{"aw":[],"w":[]},"aGp":{"ah":["a1h"]},"bnQ":{"ah":["a1i"]},"b1l":{"aw":[],"w":[]},"a89":{"af":[],"w":[]},"bnu":{"ah":["a89"]},"bnt":{"aC":[]},"avi":{"aw":[],"w":[]},"a_V":{"af":[],"w":[]},"a_U":{"af":[],"w":[]},"a_o":{"af":[],"w":[]},"a33":{"af":[],"w":[]},"aBy":{"ah":["a_V"]},"aBx":{"ah":["a_U"]},"aAd":{"ah":["a_o"]},"bAn":{"ah":["a33"]},"GG":{"af":[],"w":[]},"aA6":{"af":[],"w":[]},"bAl":{"ah":["GG"]},"bAm":{"ah":["aA6"]},"bAk":{"aC":[]},"avh":{"af":[],"w":[]},"aHY":{"ah":["avh"]},"afA":{"aw":[],"w":[]},"avb":{"af":[],"w":[]},"avg":{"af":[],"w":[]},"bpd":{"ah":["avb"]},"aHX":{"ah":["avg"]},"Pt":{"af":[],"w":[]},"aHZ":{"ah":["Pt"],"eM":[]},"bcs":{"jx":[],"fq":[]}}'))
A.RN(b.typeUniverse,JSON.parse('{"agJ":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.as
return{e2:w("aUL"),cq:w("mA"),Q:w("rF"),r:w("bn<n,n>"),c5:w("aWJ"),dY:w("aWK"),fH:w("N9"),de:w("alV"),dN:w("Ni<F>"),gc:w("EJ<F>"),A:w("eO<n?>"),e:w("IH"),B:w("nJ"),P:w("ic"),df:w("lL"),k:w("lb"),x:w("ay<~>"),U:w("N<a5a>"),V:w("N<aa>"),C:w("N<rF>"),O:w("N<u>"),c:w("N<N9>"),b:w("N<alV>"),ac:w("N<eO<n?>>"),I:w("N<nJ>"),u:w("N<ic>"),J:w("N<lL>"),_:w("N<lb>"),cl:w("N<ay<ai<a9<n,@>>>>"),R:w("N<mE>"),eU:w("N<ai<+(H,H)>>"),ez:w("N<a9<n,aE>>"),gE:w("N<a9<n,n>>"),Y:w("N<a9<n,@>>"),fD:w("N<n4>"),bp:w("N<p5>"),g:w("N<r>"),ar:w("N<avu>"),v:w("N<fZ>"),gy:w("N<aaV>"),L:w("N<+(n,n)>"),G:w("N<+(H,H)>"),E:w("N<+(H,~())>"),bd:w("N<+(n,F,P)>"),bF:w("N<+count,id,name(F,n,n)>"),F:w("N<d2>"),s:w("N<n>"),cF:w("N<au>"),aS:w("N<jm>"),dT:w("N<bcf>"),p:w("N<w>"),Z:w("N<fq>"),D:w("N<lY>"),h:w("N<aBe>"),cC:w("N<bjE>"),fp:w("N<L4>"),M:w("N<Lb>"),gZ:w("N<aK3>"),gA:w("N<agO>"),e4:w("N<agV>"),dE:w("N<aM6>"),f7:w("N<P>"),n:w("N<H>"),t:w("N<F>"),dS:w("N<aC?>"),d4:w("N<n?>"),eF:w("cB<ah<af>>"),d:w("ai<nJ>"),do:w("ai<ic>"),cg:w("ai<lL>"),ax:w("ai<lb>"),fO:w("ai<a9<n,@>>"),cz:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(F,n,n)>"),dy:w("ai<n>"),er:w("ai<au>"),gk:w("ai<lY>"),j:w("ai<@>"),fK:w("bv<n,n>"),d2:w("bv<n,ai<a9<n,@>>>"),a:w("a9<n,@>"),f:w("a9<@,@>"),gv:w("O<n,IK>"),cM:w("O<F,n>"),w:w("ie"),g2:w("t0"),bV:w("aqQ"),fL:w("cp"),K:w("aE"),dc:w("fZ"),fo:w("PQ<F>"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),bn:w("+games,limit(P,F)"),d9:w("+dx,hidden(H,ai<ic>)"),cs:w("+count,id,name(F,n,n)"),N:w("n"),fT:w("iQ<ic>"),ec:w("iQ<n>"),gW:w("rm<H>"),X:w("bq<H>"),bW:w("dF"),W:w("bg<n>"),b4:w("bg<F>"),cI:w("kh<n>"),av:w("X<zR>"),cc:w("X<n>"),l:w("w"),gF:w("fq"),fA:w("lY"),dO:w("GV"),bw:w("afd<n?>"),cy:w("Ld"),q:w("l_"),y:w("P"),i:w("H"),z:w("@"),S:w("F"),eK:w("ai<lb>?"),m:w("asd?"),cT:w("r?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,F)?"),he:w("+qrPayload,token,usesRemaining(n,n,F)?"),gG:w("+members,trees,viewOnly(F,F,P)?"),az:w("ot?"),T:w("n?"),aD:w("dF?"),o:w("lY?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b7u=new A.bb(B.h2,B.bJ,B.h2,B.bJ)
D.afH=new A.bb(B.h2,B.i6,B.h2,B.i6)
D.b7J=new A.bb(B.jJ,B.bJ,B.bJ,B.bJ)
D.b7N=new A.ax(B.cZ,1.4,B.r,-1)
D.b7X=new A.ax(B.ab,1,B.r,-1)
D.age=new A.aX(140,1/0,0,1/0)
D.b9i=new A.aX(0,1/0,64,1/0)
D.b9m=new A.aX(0,84,0,1/0)
D.agl=new A.aX(130,1/0,0,1/0)
D.aEW=w([B.mm,B.tn,B.c],x.O)
D.cci=new A.a8(B.ay,B.aD,B.x,D.aEW,null,null)
D.ba7=new A.o(null,null,null,null,null,D.cci,B.m)
D.dmn=w([B.aV,B.bU],x.O)
D.cet=new A.a8(B.aX,B.b1,B.x,D.dmn,null,null)
D.bas=new A.o(null,null,null,null,null,D.cet,B.m)
D.ZE=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fJ=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dqD=w([B.dD,D.ZE,D.fJ],x.O)
D.cbt=new A.a8(B.aX,B.b1,B.x,D.dqD,null,null)
D.bbc=new A.o(null,null,null,null,null,D.cbt,B.m)
D.fJZ=new A.G(!0,B.bX,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hl0=new A.C("?",null,D.fJZ,null,null,null,null,null,null,null,null,null)
D.bf2=new A.cn(B.z,null,null,D.hl0,null)
D.X8=new A.G(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2S=new A.C("\ud83c\udf33",null,D.X8,null,null,null,null,null,null,null,null,null)
D.ah6=new A.cn(B.z,null,null,D.h2S,null)
D.h5y=new A.C("\ud83c\udfc6",null,B.LG,null,null,null,null,null,null,null,null,null)
D.bfd=new A.cn(B.z,null,null,D.h5y,null)
D.bh3=new A.fs(null,null,null,null,null,E.kF,null,null,null,null)
D.ah7=new A.cn(B.z,null,null,D.bh3,null)
D.l0=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fKx=new A.G(!0,D.l0,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h4x=new A.C("No books on the shelf yet.",null,D.fKx,null,null,null,null,null,null,null,null,null)
D.eGN=new A.D(B.o2,D.h4x,null)
D.bfu=new A.cn(B.z,null,null,D.eGN,null)
D.fRO=new A.G(!0,D.fJ,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hlZ=new A.C("\ud83d\ude8c  On the road\u2026",null,D.fRO,null,null,null,null,null,null,null,null,null)
D.eHm=new A.D(B.cu,D.hlZ,null)
D.bfX=new A.cn(B.z,null,null,D.eHm,null)
D.aZb=new A.C("\ud83e\uddfa",null,D.X8,null,null,null,null,null,null,null,null,null)
D.bgb=new A.cn(B.z,null,null,D.aZb,null)
D.h81=new A.C("\ud83c\udfad",null,D.X8,null,null,null,null,null,null,null,null,null)
D.bgm=new A.cn(B.z,null,null,D.h81,null)
D.bgp=new A.cn(B.z,null,null,A8.Zq,null)
D.ahr=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.ahy=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.biG=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.biL=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.biX=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.biZ=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bj0=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bj8=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lR=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bjc=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bjh=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bjj=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bjk=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lS=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bjY=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.Ci=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bk6=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bkq=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bkt=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bkz=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bkH=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.aid=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bkO=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.ZS=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.aig=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bkZ=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.ZU=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.blj=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.ais=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.blI=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.blY=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bmn=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bmy=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.GE=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bmX=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bn_=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bn3=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.aiV=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bnl=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bnr=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bny=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.aiZ=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bnH=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bob=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bol=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.boo=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bou=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.ajf=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bp8=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.ajE=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bq7=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.ajQ=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bqx=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.GS=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bqE=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bqO=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bqQ=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.ajU=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.br7=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.br9=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.brc=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.ak1=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.a_D=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.brB=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.brY=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bs2=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.akd=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bs9=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.a_J=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bsw=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bsx=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.H0=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.btk=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.btX=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bu2=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bu6=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qP=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.buh=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bul=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bur=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.but=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.al_=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.al3=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.H6=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.a03=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.alc=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bvI=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bw_=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bws=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bwB=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.alC=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.a0f=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bwM=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bx2=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.a0l=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bxj=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bxA=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.a0p=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bxF=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.alU=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.alW=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bxY=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.am2=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.byq=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.byu=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.byB=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.byK=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.byT=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bzu=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bA_=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fZC=new A.C("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bDv=new A.eO(null,D.fZC,B.fk,null,x.A)
D.h7T=new A.C("None",null,null,null,null,null,null,null,null,null,null,null)
D.bDx=new A.eO(null,D.h7T,B.fk,null,x.A)
D.bE4=new A.bh(38e5)
D.bEO=new A.iK(0,10,0,10)
D.bEY=new A.R(0,1,0,0)
D.bF8=new A.iK(0,4,0,4)
D.bFb=new A.R(0,4,5,0)
D.bFr=new A.R(10,10,14,10)
D.bFC=new A.iK(10,4,10,4)
D.bFL=new A.iK(10,8,10,8)
D.bFM=new A.R(10,8,8,8)
D.bGg=new A.R(12,6,12,2)
D.bGA=new A.R(14,0,14,6)
D.bGE=new A.R(14,10,6,6)
D.bGF=new A.R(14,12,14,0)
D.bGJ=new A.R(14,12,14,8)
D.bGM=new A.R(14,12,8,14)
D.bGQ=new A.iK(14,14,14,14)
D.bH8=new A.R(14,6,14,40)
D.bHb=new A.R(14,8,14,30)
D.bHz=new A.R(16,2,16,10)
D.bHI=new A.R(16,6,16,30)
D.bHK=new A.R(16,6,16,8)
D.bI_=new A.R(18,10,18,4)
D.bI1=new A.R(18,12,18,0)
D.bI8=new A.R(18,14,12,4)
D.aow=new A.R(18,16,18,8)
D.bIp=new A.R(18,20,18,22)
D.bIv=new A.R(18,30,18,30)
D.bIN=new A.R(20,10,12,20)
D.bIQ=new A.R(20,11,20,11)
D.bJ1=new A.R(20,18,16,18)
D.bJ3=new A.R(20,18,20,6)
D.bJT=new A.R(24,32,24,28)
D.bJU=new A.R(24,36,24,32)
D.bJX=new A.R(26,26,24,14)
D.bKa=new A.R(2,4,2,8)
D.bKe=new A.R(30,0,30,0)
D.bKp=new A.R(38,22,22,22)
D.aoV=new A.R(40,24,24,24)
D.bKr=new A.iK(40,40,40,40)
D.bKt=new A.R(46,30,30,30)
D.bKV=new A.R(56,40,40,40)
D.bKZ=new A.R(1.25,1.25,1.25,1.25)
D.bL_=new A.R(60,0,60,0)
D.bL3=new A.R(6,14,6,16)
D.bL7=new A.R(6,4,12,0)
D.bLb=new A.R(6,6,10,2)
D.bLi=new A.iK(7,3,7,3)
D.bLP=new A.R(5,1.5,5,1.5)
D.bM_=new A.R(6,2.5,6,2.5)
D.hg8=new A.C("Family Games",null,B.jp,null,null,null,null,null,null,null,null,null)
D.fYc=new A.C("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.X_,null,null,null,null,null,null,null,null,null)
D.cO_=w([D.hg8,D.fYc],x.p)
D.bAZ=new A.fu(B.ah,B.e,B.h,B.B,null,B.p,null,0,D.cO_,null)
D.bMq=new A.bu(1,B.b8,D.bAZ,null)
D.hky=new A.C("Signature",null,B.nx,null,null,null,null,null,null,null,null,null)
D.bMt=new A.bu(1,B.b8,D.hky,null)
D.hcD=new A.C("MADE BY THE ONE WHO PLANTED THE TREE",null,U.uw,null,null,null,null,null,null,null,null,null)
D.bN0=new A.bu(1,B.b8,D.hcD,null)
D.hhB=new A.C("Tell the AI what to fix",null,B.dv,null,null,null,null,null,null,null,null,null)
D.bNh=new A.bu(1,B.b8,D.hhB,null)
D.fSA=new A.G(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hjD=new A.C("Worksheets",null,D.fSA,null,null,null,null,null,null,null,null,null)
D.fSM=new A.G(!0,E.ahX,null,null,null,null,13,B.cH,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.his=new A.C("Track your project spending",null,D.fSM,null,null,null,null,null,null,null,null,null)
D.dcR=w([D.hjD,B.at,D.his],x.p)
D.bAC=new A.fu(B.ah,B.e,B.h,B.B,null,B.p,null,0,D.dcR,null)
D.bNn=new A.bu(1,B.b8,D.bAC,null)
D.fNp=new A.G(!0,E.kF,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYM=new A.C("FAMILY LIBRARY",null,D.fNp,null,null,null,null,null,null,null,null,null)
D.bNG=new A.bu(1,B.b8,D.fYM,null)
D.PM=new C.IH("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.xc=new C.II(0,"male")
D.oU=new C.II(1,"female")
D.zG=new C.II(2,"unknown")
D.vj=new C.ane(0,"owner")
D.PN=new C.ane(1,"editor")
D.l9=new C.ane(2,"viewer")
D.aqU=new A.a_(61199,"MaterialIcons",!1)
D.bT0=new A.a_(61504,"MaterialIcons",!1)
D.bT1=new A.a_(61505,"MaterialIcons",!1)
D.bT3=new A.a_(61587,"MaterialIcons",!1)
D.bTa=new A.a_(61890,"MaterialIcons",!1)
D.bU2=new A.a_(63034,"MaterialIcons",!0)
D.bUk=new A.a_(63153,"MaterialIcons",!1)
D.bUR=new A.a_(63429,"MaterialIcons",!1)
D.at0=new A.a_(984520,"MaterialIcons",!1)
D.bTz=new A.a_(62776,"MaterialIcons",!1)
D.bXh=new A.ae(D.bTz,26,B.b5,null,null,null)
D.bRZ=new A.a_(57648,"MaterialIcons",!1)
D.bXC=new A.ae(D.bRZ,14,B.c,null,null,null)
D.bXU=new A.ae(B.Ia,17,null,null,null,null)
D.bY0=new A.ae(B.Qh,null,B.bU,null,null,null)
D.bYq=new A.ae(E.a40,null,null,null,null,null)
D.bYt=new A.ae(B.jl,18,E.kF,null,null,null)
D.a3K=new A.a_(62044,"MaterialIcons",!1)
D.bYz=new A.ae(D.a3K,null,B.aV,null,null,null)
D.bYG=new A.ae(B.zT,18,B.c,null,null,null)
D.bZn=new A.ae(B.eg,16,null,null,null,null)
D.bZu=new A.ae(D.a3K,32,B.aV,null,null,null)
D.bZO=new A.ae(E.aqV,18,B.cZ,null,null,null)
D.c_V=new A.ae(B.In,22,B.aC,null,null,null)
D.c08=new A.ae(B.eg,22,B.b5,null,null,null)
D.c0l=new A.ae(Z.a3P,22,B.c,null,null,null)
D.c0s=new A.ae(B.vs,52,B.c,null,null,null)
D.c0D=new A.ae(B.In,30,B.aC,null,null,null)
D.c0Z=new A.ae(B.Ik,null,B.c,null,null,null)
D.atK=new A.ae(B.vD,22,B.c,null,null,null)
D.c17=new A.ae(B.eg,17,null,null,null,null)
D.c1v=new A.ae(B.xq,26,B.cZ,null,null,null)
D.c2h=new A.ae(B.a4f,16,null,null,null,null)
D.c33=new A.ae(B.vs,24,B.c,null,null,null)
D.c38=new A.ae(B.Qf,20,B.u4,null,null,null)
D.c3e=new A.ae(B.I8,null,B.bU,null,null,null)
D.c3n=new A.ae(B.jl,18,B.c,null,null,null)
D.c43=new A.ae(B.cC,22,B.ab,null,null,null)
D.c4X=new A.ae(B.eq,16,B.ab,null,null,null)
D.c58=new A.ae(D.a3K,20,B.aV,null,null,null)
D.aua=new A.ae(B.ho,20,null,null,null,null)
D.c5I=new A.ae(B.cC,18,D.l0,null,null,null)
D.c6_=new A.ae(B.A2,28,B.c,null,null,null)
D.c6b=new A.ae(B.Q5,null,B.fq,null,null,null)
D.c6w=new A.ae(B.A2,24,B.c,null,null,null)
D.c6Z=new A.ae(B.vs,null,B.aV,null,null,null)
D.c7_=new A.ae(B.jD,20,B.cZ,null,null,null)
D.c7j=new A.ae(B.Ia,16,null,null,null,null)
D.c8S=new A.ef(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jW,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eU,!0,null,null,null,null)
D.auU=new C.a7n(10,null)
D.c9o=new C.a7n(12,null)
D.c9p=new C.a7n(14,null)
D.dv_=w([B.bw,B.aV,B.fz,B.b5],x.O)
D.caz=new A.a8(B.ay,B.aD,B.x,D.dv_,null,null)
D.bt6=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bzB=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d8Z=w([D.bt6,D.bzB],x.O)
D.caM=new A.a8(B.aX,B.b1,B.x,D.d8Z,null,null)
D.dou=w([B.fm,B.h6,B.fz],x.O)
D.caS=new A.a8(B.ay,B.aD,B.x,D.dou,null,null)
D.akO=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bjl=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.dbo=w([D.akO,D.bjl],x.O)
D.cbu=new A.a8(B.aX,B.b1,B.x,D.dbo,null,null)
D.bnc=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aEc=w([D.bnc,D.akO],x.O)
D.cbO=new A.a8(B.ay,B.aD,B.x,D.aEc,null,null)
D.ajw=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bpZ=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dnx=w([D.ajw,D.bpZ],x.O)
D.cct=new A.a8(B.a5,B.a9,B.x,D.dnx,null,null)
D.dCF=w([B.bE,B.nO],x.O)
D.ccv=new A.a8(B.aX,B.b1,B.x,D.dCF,null,null)
D.bt1=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dDD=w([D.bt1,D.l0,D.l0,I.Og],x.O)
D.dGn=w([0,0.07,0.9,1],x.n)
D.cd0=new A.a8(B.a5,B.a9,B.x,D.dDD,D.dGn,null)
D.cd9=new A.a8(B.ay,B.aD,B.x,B.U3,null,null)
D.d6r=w([B.az,D.lR],x.O)
D.cdc=new A.a8(B.a5,B.a9,B.x,D.d6r,null,null)
D.dCb=w([B.b5,B.aV,B.bU],x.O)
D.cef=new A.a8(B.ay,B.aD,B.x,D.dCb,null,null)
D.ciG=w([10,20,30],x.t)
D.csI=w([-1,-0.4,0.3,1],x.n)
D.cAf=w([B.bw,B.b5,B.fm],x.O)
D.cAn=w([B.bl,B.az,B.kE],x.O)
D.cAp=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cB8=w([30,140,262,360],x.n)
D.bri=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cGK=w([D.bri,E.akn],x.O)
D.eBr=new A.r(1,2)
D.fve=new A.d2(B.b6,D.eBr,3)
D.aB4=w([D.fve],x.F)
D.cOh=w([B.hj,B.ch,B.fy],x.O)
D.cR6=w([B.bQ,B.bB,B.bs],x.O)
D.bOw=new C.v6("classic","Classic leather","Gold-edged brown leather",D.aEc,E.kF,E.kF,"\u2766",B.K,!0,!1,!1,!1)
D.biq=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.byg=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.deL=w([D.biq,D.byg],x.O)
D.akq=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bOr=new C.v6("ornate","Ornate gold","Double gold border and flourishes",D.deL,D.akq,D.akq,"\u2726",B.K,!0,!0,!0,!1)
D.bmJ=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.btR=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d57=w([D.bmJ,D.btR],x.O)
D.bOq=new C.v6("parchment","Parchment","Old paper with dark ink",D.d57,D.H0,L.jh,"\u2767",B.K,!0,!1,!1,!0)
D.ahA=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bwp=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dAb=w([D.ahA,D.bwp],x.O)
D.bqL=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bvC=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bOt=new C.v6("minimal","Clean paper","Plain and elegant, like a printed book",D.dAb,D.bqL,D.bvC,"",B.K,!0,!0,!1,!0)
D.bOv=new C.v6("midnight","Midnight","Deep blue with silver stars",K.aEw,B.cD,B.cm,"\u2727",B.K,!0,!0,!1,!1)
D.bOp=new C.v6("emerald","Emerald library","Green cloth, title on the left",W.aBu,E.kF,B.h8,"\u25c6",B.b9,!0,!1,!1,!1)
D.bwV=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dy5=w([B.ey,D.bwV],x.O)
D.bs8=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.btp=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bOu=new C.v6("rose","Rose vintage","Burgundy with rose-gold lettering",D.dy5,D.bs8,D.btp,"\u2740",B.K,!0,!1,!0,!1)
D.dDe=w([B.cx,F.n8],x.O)
D.bOs=new C.v6("modern","Modern","Dark, bold, left-aligned",D.dDe,B.aH,B.c,"",B.b9,!1,!0,!1,!1)
D.a6g=w([D.bOw,D.bOr,D.bOq,D.bOt,D.bOv,D.bOp,D.bOu,D.bOs],A.as("N<v6>"))
D.cU9=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dD0=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bOH=new C.lL('What does "Ubuntu" mean?',D.dD0,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d7c=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bOK=new C.lL("In Swahili, what do we call a grandmother?",D.d7c,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d73=w(["Babu","Mama","Baba","Dada"],x.s)
D.bOF=new C.lL("In Swahili, what do we call a grandfather?",D.d73,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d8v=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bOJ=new C.lL("What is a sister called in Swahili?",D.d8v,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.de7=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bOG=new C.lL("What is a brother called in Swahili?",D.de7,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d72=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bOR=new C.lL("Which word means father in Swahili?",D.d72,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dEe=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bOQ=new C.lL('"Umoja ni nguvu" means...',D.dEe,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dAV=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bOS=new C.lL('"Haba na haba hujaza kibaba" teaches us...',D.dAV,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.dbx=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bOP=new C.lL('The African saying "It takes a village to raise a child" means...',D.dbx,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dEx=w(["The elders","The market","The river","The drum"],x.s)
D.bOL=new C.lL("Who is the traditional keeper of the family stories?",D.dEx,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cYu=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bOI=new C.lL("Why do families sit round the fire at night?",D.cYu,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dDg=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bON=new C.lL('What does "Harambee" mean?',D.dDg,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.dhh=w(["An elder","A baby","A market","A cow"],x.s)
D.bOM=new C.lL('"Mzee" is a respectful word for...',D.dhh,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dxV=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bOO=new C.lL('What does "Shikamoo" show?',D.dxV,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.aBp=w([D.bOH,D.bOK,D.bOF,D.bOJ,D.bOG,D.bOR,D.bOQ,D.bOS,D.bOP,D.bOL,D.bOI,D.bON,D.bOM,D.bOO],x.J)
D.d1X=w([90,360],x.n)
D.d4E=w([B.bU,B.bp],x.O)
D.bsP=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d5n=w([D.ahA,D.bsP],x.O)
D.d69=w([-1,-0.3,0.4,1],x.n)
D.d79=w([0,0.45,0.72,0.92,1],x.n)
D.bmF=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d7v=w([D.bmF,B.bD],x.O)
D.bkl=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.amc=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d88=w([B.dD,D.bkl,D.amc],x.O)
D.d9i=w([B.bd,B.jv,B.pE],x.O)
D.bne=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bvt=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bk1=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d9n=w([D.bne,D.bvt,D.bk1],x.O)
D.d9K=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d9U=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hPC=new C.aeS(78,424,48,44,56)
D.hPA=new C.aeS(214,396,34,34,42)
D.hPB=new C.aeS(442,452,56,50,64)
D.aCo=w([D.hPC,D.hPA,D.hPB],A.as("N<aeS>"))
D.dau=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bje=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bp7=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dGj=w([D.ajw,D.bje,D.bp7],x.O)
D.bOx=new C.v7("leather","Leather",D.dGj,"vintage")
D.dim=w([B.dl,B.GQ,Ac.a_8],x.O)
D.bOE=new C.v7("midnight","Midnight",D.dim,"starry")
D.d9j=w([B.es,B.ei,B.lx],x.O)
D.bOD=new C.v7("forest","Forest",D.d9j,"story")
D.dIC=w([B.et,B.ey,B.kH],x.O)
D.bOA=new C.v7("burgundy","Burgundy",D.dIC,"royal")
D.cQE=w([B.az,B.n2,B.nF],x.O)
D.bOB=new C.v7("royal","Royal",D.cQE,"royal")
D.dc5=w([B.bB,B.cx,F.n8],x.O)
D.bOy=new C.v7("charcoal","Charcoal",D.dc5,"geo")
D.dGs=w([B.ca,B.dZ,B.wM],x.O)
D.bOC=new C.v7("sunset","Sunset",D.dGs,"sunset")
D.dHh=w([B.jv,B.yY,B.a_c],x.O)
D.bOz=new C.v7("ocean","Ocean",D.dHh,"band")
D.Aw=w([D.bOx,D.bOE,D.bOD,D.bOA,D.bOB,D.bOy,D.bOC,D.bOz],A.as("N<v7>"))
D.dcE=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.ddm=w([B.an,B.aM,B.a_],x.O)
D.deR=w([B.ey,B.ei,B.dl,B.iZ,B.z_,B.cZ,B.kc,B.cU,B.de],x.O)
D.deS=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.fvf=new A.d2(B.dJ,B.dS,8)
D.df3=w([D.fvf],x.F)
D.dgi=w([B.c5,B.dZ,B.k8],x.O)
D.blc=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bpq=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.btM=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.dgA=w([D.blc,G.akX,D.bpq,D.btM,D.amc],x.O)
D.dgR=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.dh4=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.biC=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.boL=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.dhB=w([D.biC,D.aiZ,D.boL],x.O)
D.dih=w([B.c5,B.hJ],x.O)
D.din=w([G.nH,B.iu,G.ahM,B.d_],x.O)
D.dk5=w([B.d_,G.nH,B.iu,D.lS,B.d_],x.O)
D.dkM=w([B.aQ,B.yW,B.yN],x.O)
D.eZ_=new A.y(-0.65,0.6)
D.fbi=new A.y(-0.2,0.95)
D.fcr=new A.y(0.25,0.95)
D.f1z=new A.y(0.7,0.6)
D.fd1=new A.y(1,0.1)
D.dlD=w([Am.VT,D.eZ_,D.fbi,D.fcr,D.f1z,D.fd1],x.G)
D.brC=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.by8=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bmc=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.dlK=w([D.brC,D.by8,D.bmc],x.O)
D.dlQ=w([B.bM,B.c1,B.dG,B.aQ],x.O)
D.dmo=w([B.hZ,B.ca,B.uW],x.O)
D.dmO=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.dn_=w([B.fm,B.cZ],x.O)
D.bta=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dns=w([D.bta,D.ahy],x.O)
D.dnE=w([B.cW,B.fK,B.fX],x.O)
D.dnR=w([B.aH,B.bp,B.dl],x.O)
D.dor=w([B.eF,B.dy,B.ei],x.O)
D.doN=w([B.dW,B.dl,B.GQ],x.O)
D.doR=w([B.bu,B.n_,B.de],x.O)
D.dp7=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bsn=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bqt=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dpt=w([D.bsn,D.aiV,D.bqt],x.O)
D.dql=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.drw=w([1,0,7,6,3,2],x.t)
D.a7d=w(["leather","linen","plain","stars","rays"],x.s)
D.drI=w([0.5,2,3.6],x.n)
D.dsg=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bWz=new A.a_(983781,"MaterialIcons",!1)
D.aDT=w([B.Qh,B.hQ,B.kM,B.ie,F.at8,B.Iy,B.rf,D.bWz,K.asM,B.DL,B.ri,B.m1],A.as("N<a_>"))
D.a7h=w(["double","single","corners","none"],x.s)
D.bOm=new C.zR("Little Seed","\ud83c\udf31",0)
D.bOo=new C.zR("Young Listener","\ud83d\udc42",40)
D.bOn=new C.zR("Storyteller","\ud83e\ude98",120)
D.bOl=new C.zR("Village Pride","\ud83c\udfe1",300)
D.bOj=new C.zR("Keeper of Roots","\ud83c\udf33",700)
D.bOk=new C.zR("Elder of the Fire","\ud83d\udd25",1500)
D.aDV=w([D.bOm,D.bOo,D.bOn,D.bOl,D.bOj,D.bOk],A.as("N<zR>"))
D.dtw=w([B.d0,B.bk,B.cU],x.O)
D.dtM=w([],x.C)
D.El=w([],x.u)
D.aO4=new A.r(225,528)
D.f_H=new A.y(D.aO4,1)
D.eCc=new A.r(350,548)
D.f6d=new A.y(D.eCc,0.95)
D.aNZ=new A.r(158,656)
D.f66=new A.y(D.aNZ,1.12)
D.eD_=new A.r(92,544)
D.eW8=new A.y(D.eD_,0.93)
D.eCf=new A.r(398,614)
D.f1X=new A.y(D.eCf,1.04)
D.eC3=new A.r(318,662)
D.eRn=new A.y(D.eC3,1.1)
D.a7p=w([D.f_H,D.f6d,D.f66,D.eW8,D.f1X,D.eRn],A.as("N<+(r,H)>"))
D.dvV=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dwt=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dxB=w([B.d_,G.nH,B.iu,D.lS,B.d_,B.iu],x.O)
D.dz2=w([B.as,B.fK,B.iZ],x.O)
D.dzK=w([-70,58],x.n)
D.dzM=w([-70,-30,20],x.n)
D.dAS=w([B.bu,B.n_,B.a0g],x.O)
D.dB9=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dXK=new C.mf("construction","Construction","Jobsite & builds",B.rh)
D.dXR=new C.mf("house","Home Build","Houses & rooms",B.vu)
D.dXH=new C.mf("grocery","Grocery","Store & pantry",B.a4M)
D.dXG=new C.mf("calculator","Calculations","Math & estimates",B.Qo)
D.dXP=new C.mf("lumber","Materials","Lumber & supplies",B.Iv)
D.dXD=new C.mf("kitchen","Kitchen","Remodel & meals",A4.QJ)
D.bWw=new A.a_(983756,"MaterialIcons",!1)
D.dXI=new C.mf("landscape","Landscaping","Yard & garden",D.bWw)
D.dXC=new C.mf("plumbing","Plumbing","Pipes & water",B.q4)
D.dXS=new C.mf("electrical","Electrical","Wiring & power",B.fN)
D.dXA=new C.mf("store","Retail Shop","Daily business",B.kn)
D.dXB=new C.mf("paint_remodel","Paint & Remodel","Colors & walls",A4.QE)
D.bVS=new A.a_(983311,"MaterialIcons",!1)
D.dXO=new C.mf("roofing","Roofing","Roofs & exteriors",D.bVS)
D.bWJ=new A.a_(983986,"MaterialIcons",!1)
D.dXz=new C.mf("warehouse","Warehouse","Storage & stock",D.bWJ)
D.dXM=new C.mf("vehicles","Vehicles","Fleet & transport",B.DI)
D.bTB=new A.a_(62785,"MaterialIcons",!1)
D.dXF=new C.mf("farm","Farm","Crops & livestock",D.bTB)
D.dXE=new C.mf("restaurant","Restaurant","Food & catering",B.vB)
D.dXL=new C.mf("tools","Tools","Workshop gear",B.DE)
D.dXQ=new C.mf("wallet","Cash & Wallet","Quick spending",B.jD)
D.dXN=new C.mf("concrete","Concrete","Foundation work",F.arR)
D.dXJ=new C.mf("blueprint","Blueprint","Plans & design",Ap.aro)
D.a7O=w([D.dXK,D.dXR,D.dXH,D.dXG,D.dXP,D.dXD,D.dXI,D.dXC,D.dXS,D.dXA,D.dXB,D.dXO,D.dXz,D.dXM,D.dXF,D.dXE,D.dXL,D.dXQ,D.dXN,D.dXJ],A.as("N<mf>"))
D.dBP=w([B.bv,B.bk],x.O)
D.dCG=w([B.iI,B.oC,B.e5],x.O)
D.ajK=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.akJ=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bqP=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bi5=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aF3=w([D.ajK,D.akJ,D.bqP,D.bi5],x.O)
D.dDU=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a7Y=w(["top","middle","bottom"],x.s)
D.dFs=w([B.cw,B.bp,B.dl],x.O)
D.aFn=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.bbG=new A.aa(0,B.H,B.b6,B.J,14)
D.aFr=w([D.bbG],x.V)
D.bpF=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dGc=w([D.aid,D.a0f,D.bpF],x.O)
D.dGd=w([B.bf,B.dy,B.ei],x.O)
D.eBN=new A.r(24,-8)
D.eCv=new A.r(48,0)
D.eBJ=new A.r(24,6)
D.dI5=w([B.J,D.eBN,D.eCv,D.eBJ],x.g)
D.dIx=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.eye={top:0,middle:1,bottom:2}
D.dLT=new A.bn(D.eye,["Top","Middle","Bottom"],x.r)
D.exL={double:0,single:1,corners:2,none:3}
D.dLZ=new A.bn(D.exL,["Double line","One line","Corners","None"],x.r)
D.ez2={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dND=new A.bn(D.ez2,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dNP=new A.bn(B.ij,[],A.as("bn<F,+(n,n)>"))
D.ey5={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.EB=new A.bn(D.ey5,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.as("bn<n,F>"))
D.dS8=new H.Og(32,null)
D.dS9=new H.Og(40,null)
D.dSa=new H.Og(46,null)
D.aNx=new C.avg(null)
D.eAE=new A.r(0,40)
D.eAF=new A.r(0,412)
D.eAI=new A.r(0,900)
D.eAR=new A.r(0,-34)
D.eAS=new A.r(0,-46)
D.eAU=new A.r(0,-74)
D.eAX=new A.r(100,300)
D.eAY=new A.r(10,14)
D.eB0=new A.r(10,-10)
D.eB5=new A.r(10,-46)
D.eB6=new A.r(10,-58)
D.eB7=new A.r(116,442)
D.eB9=new A.r(11,-1)
D.eBa=new A.r(11,-10)
D.eBb=new A.r(11,-21)
D.aNU=new A.r(11,-60)
D.eBi=new A.r(14,-2)
D.eBj=new A.r(150,520)
D.aa9=new A.r(150,592)
D.eBm=new A.r(15,-15)
D.eBn=new A.r(16,-1)
D.eBq=new A.r(190,444)
D.eBt=new A.r(1,5)
D.eBB=new A.r(21,-78)
D.eBC=new A.r(222,615)
D.Kv=new A.r(225,300)
D.aab=new A.r(225,574)
D.eBM=new A.r(24,-52)
D.eBO=new A.r(250,210)
D.eBZ=new A.r(2,-56)
D.aO8=new A.r(300,0)
D.eC_=new A.r(300,440)
D.eC2=new A.r(318,476)
D.eC5=new A.r(324,144)
D.aae=new A.r(332,150)
D.eC7=new A.r(335,585)
D.eC8=new A.r(338,140)
D.eC9=new A.r(340,158)
D.eCb=new A.r(34,-60)
D.F2=new A.r(36,-24)
D.eCd=new A.r(372,470)
D.eCe=new A.r(390,455)
D.eCn=new A.r(42,468)
D.eCo=new A.r(431,510)
D.eCp=new A.r(431,520)
D.eCq=new A.r(45,-92)
D.eCr=new A.r(46,20)
D.eCs=new A.r(46,-92)
D.eCt=new A.r(46,-94)
D.eCu=new A.r(47,-4)
D.eCw=new A.r(48,-4)
D.eCE=new A.r(4,-26)
D.eCM=new A.r(60,455)
D.eCV=new A.r(8,14)
D.eCZ=new A.r(8,-76)
D.eD0=new A.r(95,575)
D.eD1=new A.r(98,-24)
D.eD3=new A.r(9,-2)
D.eD4=new A.r(9,-58)
D.aOh=new A.r(9,-79)
D.eD5=new A.r(9,-9)
D.eDI=new A.r(16.5,8)
D.eDK=new A.r(3.2,0)
D.eDL=new A.r(-16.5,8)
D.eDS=new A.r(16.5,2)
D.eDV=new A.r(-3.2,0)
D.eE2=new A.r(9.5,6)
D.eE5=new A.r(-10,14)
D.eE6=new A.r(-10,-12)
D.eE7=new A.r(-10,-58)
D.eE9=new A.r(-11,-10)
D.eEb=new A.r(-11,-60)
D.eEc=new A.r(-12,-14)
D.eEd=new A.r(-12,-16)
D.eEi=new A.r(-14,-2)
D.eEl=new A.r(-15,-15)
D.eEm=new A.r(-15,-3)
D.eEo=new A.r(-16,-1)
D.eEE=new A.r(-24,-52)
D.eEN=new A.r(-2,-34)
D.eEO=new A.r(-2,-38)
D.eEQ=new A.r(-30,-100)
D.aag=new A.r(-36,-24)
D.eF0=new A.r(-4,-26)
D.eF2=new A.r(-4,-6)
D.eFb=new A.r(-8,-3)
D.eFc=new A.r(-8,-48)
D.eFf=new A.r(-9,-2)
D.eFh=new A.r(-9,-58)
D.eFi=new A.r(-9,-79)
D.eFj=new A.r(-9,-9)
D.eFl=new A.r(-9.5,6)
D.eFy=new A.r(-16.5,2)
D.h5e=new A.C("Write a new book",null,B.ht,null,B.K,null,null,null,null,null,null,null)
D.eG7=new A.D(B.l7,D.h5e,null)
D.hk6=new A.C("Tap to go on",null,B.wd,null,null,null,null,null,null,null,null,null)
D.eGt=new A.D(B.kL,D.hk6,null)
D.ati=new A.ae(B.id,18,B.c,null,null,null)
D.fZ8=new A.C("Add",null,B.kT,null,null,null,null,null,null,null,null,null)
D.dm5=w([D.ati,B.pn,D.fZ8],x.p)
D.fsi=new A.c2(B.aK,B.e,B.P,B.l,null,B.p,null,0,D.dm5,null)
D.eGw=new A.D(B.o_,D.fsi,null)
D.eGy=new A.D(E.ank,A8.Zq,null)
D.fSv=new A.G(!0,B.c,null,null,null,null,13.5,B.D,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1p=new A.C("New Project",null,D.fSv,null,null,null,null,null,null,null,null,null)
D.dqM=w([D.ati,B.aa,D.h1p],x.p)
D.fsl=new A.c2(B.aK,B.e,B.P,B.l,null,B.p,null,0,D.dqM,null)
D.eGM=new A.D(B.hn,D.fsl,null)
D.h3X=new A.C("Choose your header",null,B.ut,null,null,null,null,null,null,null,null,null)
D.eH6=new A.D(B.ic,D.h3X,null)
D.bhj=new A.fs(2.2,null,null,null,null,B.cZ,null,null,null,null)
D.fy7=new A.a4(22,22,D.bhj,null)
D.bfp=new A.cn(B.z,null,null,D.fy7,null)
D.eHb=new A.D(B.a1B,D.bfp,null)
D.bH0=new A.R(14,2,14,6)
D.hib=new A.C("The top of your book. Tap a design to see it.",null,V.uu,null,null,null,null,null,null,null,null,null)
D.eHc=new A.D(D.bH0,D.hib,null)
D.h36=new A.C("\ud83c\udfc6 A new record!",null,B.hh,null,null,null,null,null,null,null,null,null)
D.eHe=new A.D(B.kL,D.h36,null)
D.eIN=new A.jk(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eIQ=new A.jk(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aOU=new A.jk(1,0.9607843137254902,0.48627450980392156,0)
D.KD=new A.jk(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.B6=new A.jk(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eIW=new A.jk(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hRO=new C.blm(null)
D.bBL=new A.mV(D.hRO,null,B.aA,null,null)
D.aSx=new A.cQ(0,0,0,0,null,null,D.bBL,null)
D.fZa=new A.C("\ud83c\udfc5",null,B.acz,null,null,null,null,null,null,null,null,null)
D.eNl=new A.cQ(null,0,-34,null,null,null,D.fZa,null)
D.eVN=new A.y("E","Sit by the fire again")
D.f0y=new A.y("C","Good Learner")
D.f48=new A.y("D","Still Growing")
D.f8W=new A.y(-42,42)
D.fal=new A.y("B","Faithful Listener")
D.fct=new A.y("A","Keeper of the Family")
D.ffH=new A.b0(-17,0.7,0)
D.fgh=new A.b0(-8,0.95,1.3)
D.fhp=new A.b0(18,0.65,5.2)
D.fhr=new A.b0(0,1.15,2.6)
D.fhM=new A.b0(9,0.9,3.9)
D.fjL=new A.b7([0,0,1,1])
D.aU3=new A.a5(0,0,520,160)
D.fpk=new A.a5(10,612,440,618)
D.fpl=new A.a5(10,612,440,628)
D.fpo=new A.a5(14,-64,34,-12)
D.fpr=new A.a5(300,336,350,348)
D.ab9=new A.a5(30,96,420,346)
D.fps=new A.a5(30,-9,46,1)
D.fpt=new A.a5(4,2,11,14)
D.fpv=new A.a5(-8,-12.5,8,-7)
D.fpw=new A.a5(-16.5,-21,16.5,1)
D.fpx=new A.a5(60,342,88,348)
D.VU=new A.a5(66,-66,94,-36)
D.fpy=new A.a5(6,8,10,14)
D.fpB=new A.a5(95,343,115,348)
D.fpC=new A.a5(-6.5,-74,6.5,-58)
D.fpI=new A.a5(-100,-74,100,-12)
D.fpJ=new A.a5(-10,8,-6,14)
D.fpK=new A.a5(-11,2,-4,14)
D.fpL=new A.a5(-11,-70,11,-56)
D.fpS=new A.a5(-13,-24,13,-4)
D.fpZ=new A.a5(-15,-21,15,0)
D.fq1=new A.a5(-16,-21,16,1)
D.fq2=new A.a5(-16,-21,16,2)
D.fq5=new A.a5(-16,-26,16,-6)
D.fqd=new A.a5(-230,-26,230,26)
D.fqC=new A.a5(-38,-26,12,-6)
D.fqG=new A.a5(-3,-70,3,-63)
D.fqH=new A.a5(-44,-22,44,0)
D.fqJ=new A.a5(-46,-9,-30,1)
D.aU7=new A.a5(-80,-190,80,20)
D.fqQ=new A.a5(-8,-26,40,-6)
D.fqR=new A.a5(-98,-80,92,-75)
D.fqS=new A.a5(-9,-15,9,-9)
D.hhI=new A.C("Let the AI write it from your tree",null,B.iV,null,B.K,null,null,null,null,null,null,null)
D.bPr=new A.d3(1,B.ci,D.hhI,null)
D.dig=w([E.a5g,B.aa,D.bPr],x.p)
D.frW=new A.c2(B.aK,B.e,B.P,B.l,null,B.p,null,0,D.dig,null)
D.fYN=new A.C("Save member",null,B.cf,null,null,null,null,null,null,null,null,null)
D.dzt=w([D.aua,B.aa,D.fYN],x.p)
D.fs6=new A.c2(B.aK,B.bb,B.h,B.l,null,B.p,null,0,D.dzt,null)
D.c0e=new A.ae(B.iw,14,B.b5,null,null,null)
D.fLW=new A.G(!0,B.b5,null,null,null,null,12,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1Q=new A.C("Cashier",null,D.fLW,null,null,null,null,null,null,null,null,null)
D.drl=w([D.c0e,B.ba,D.h1Q],x.p)
D.fsa=new A.c2(B.aK,B.e,B.P,B.l,null,B.p,null,0,D.drl,null)
D.fYO=new A.C("Transfer & settings",null,B.dv,null,null,null,null,null,null,null,null,null)
D.bN7=new A.bu(1,B.b8,D.fYO,null)
D.d8E=w([D.atK,B.ar,D.bN7],x.p)
D.fsb=new A.c2(B.aK,B.e,B.h,B.l,null,B.p,null,0,D.d8E,null)
D.fwN=new A.av(16,40)
D.fwS=new A.av(22,64)
D.fwZ=new A.av(280,88)
D.fxN=new A.a4(30,null,null,null)
D.fXT=new A.C("The teacher is writing\u2026",null,B.Bs,null,null,null,null,null,null,null,null,null)
D.bgv=new A.cn(B.z,null,null,D.fXT,null)
D.hLx=new A.bg("w",x.W)
D.fyb=new A.a4(null,56,D.bgv,D.hLx)
D.fyZ=new A.hX(5,8,8,1,null)
D.fz6=new A.hX(2,12,12,1.05,null)
D.h1v=new A.C("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fzR=new A.b2(D.h1v,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h1L=new A.C("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aWr=new A.b2(D.h1L,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hag=new A.C("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fAk=new A.b2(D.hag,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hl9=new A.C("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fAp=new A.b2(D.hl9,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h3V=new A.C("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fAw=new A.b2(D.h3V,null,null,null,null,null,null,null,null,null,null,null,null,B.fM,!1,null,null,null,B.t,null)
D.hio=new A.C("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aWw=new A.b2(D.hio,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h3T=new A.C("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fAW=new A.b2(D.h3T,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fZr=new A.C("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fAY=new A.b2(D.fZr,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h7H=new A.C("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fB3=new A.b2(D.h7H,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hlW=new A.C("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fBK=new A.b2(D.hlW,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hgC=new A.C("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fC9=new A.b2(D.hgC,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hld=new A.C("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fCc=new A.b2(D.hld,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hbU=new A.C("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fCe=new A.b2(D.hbU,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h5R=new A.C("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fCf=new A.b2(D.h5R,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h5S=new A.C("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fDg=new A.b2(D.h5S,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h1x=new A.C("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fDy=new A.b2(D.h1x,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h3y=new A.C("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fDS=new A.b2(D.h3y,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hbn=new A.C("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fE8=new A.b2(D.hbn,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h6H=new A.C("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fE9=new A.b2(D.h6H,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fRa=new A.G(!0,B.bC,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFI=new A.eH("\u2665",null,null,B.cY,null,null,null,null,null,null,D.fRa)
D.fOg=new A.G(!0,B.aS,null,null,null,null,28,B.O,B.cR,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFY=new A.eH("Today: how well do you know the family?",null,null,B.cY,null,null,null,null,null,null,D.fOg)
D.fGe=new A.G(!0,B.qC,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHr=new A.G(!0,D.l0,null,null,null,null,13,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHP=new A.G(!0,D.l0,null,null,null,null,12,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHT=new A.G(!0,B.d_,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fI1=new A.G(!0,D.fJ,null,null,null,null,15,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIc=new A.G(!0,D.fJ,null,null,null,null,13,B.D,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIx=new A.ti(!0,B.ug,null,null,null,null,B.dL,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIN=new A.G(!0,B.d_,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIR=new A.G(!0,D.l0,null,null,null,null,18,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIS=new A.G(!0,B.d_,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIX=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ_=new A.G(!0,B.d_,null,null,null,null,15,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJw=new A.G(!0,B.b5,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJx=new A.G(!0,B.ab,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJz=new A.G(!0,B.aS,null,null,null,null,15.5,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fK0=new A.G(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXL=new A.G(!0,B.aR,null,null,null,null,null,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXM=new A.G(!0,D.lR,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKq=new A.G(!0,B.d_,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.acE=new A.ti(!0,B.Vq,null,null,null,null,B.dL,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.WN=new A.G(!0,B.d_,null,null,null,null,null,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKA=new A.G(!0,B.a_,null,null,null,null,12.5,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKF=new A.G(!0,D.fJ,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fL4=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMf=new A.G(!0,D.fJ,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXV=new A.G(!0,D.fJ,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMz=new A.G(!0,B.ab,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fML=new A.G(!0,D.fJ,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMN=new A.G(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMT=new A.G(!0,L.jh,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXZ=new A.G(!0,D.fJ,null,null,null,null,14.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNR=new A.G(!0,D.fJ,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fO9=new A.G(!0,D.fJ,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOb=new A.G(!0,B.a_,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOd=new A.G(!0,B.d_,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOC=new A.G(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A7.Jt,null,null,null)
D.aYc=new A.G(!0,D.fJ,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fP2=new A.G(!0,B.a_,null,null,null,null,17,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPo=new A.G(!0,B.fq,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPM=new A.G(!0,B.bU,null,null,null,null,8,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPR=new A.G(!0,B.bE,null,null,null,null,11,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQ2=new A.G(!0,B.c,null,null,null,null,13.5,B.D,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQ5=new A.G(!0,D.fJ,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQd=new A.G(!0,D.H0,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQp=new A.G(!0,B.b5,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQO=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQV=new A.G(!0,B.ab,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ec,null,null,null)
D.fRm=new A.G(!0,B.d_,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRu=new A.G(!0,B.cZ,null,null,null,null,13,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRH=new A.G(!0,D.lS,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYA=new A.G(!0,D.fJ,null,null,null,null,null,B.D,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.LO=new A.G(!0,B.d_,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYC=new A.G(!0,B.d_,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ec,null,null,null)
D.fS1=new A.G(!0,B.bU,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fS5=new A.G(!0,G.nH,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSt=new A.G(!0,B.b5,null,null,null,null,13,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSL=new A.G(!0,D.fJ,null,null,null,null,15,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fT9=new A.G(!0,B.c,null,null,null,null,null,B.D,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTy=new A.G(!0,D.fJ,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fU4=new A.G(!0,D.fJ,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fU9=new A.G(!0,B.an,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUj=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ada=new A.G(!0,B.an,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.add=new A.G(!0,D.lR,null,null,null,null,null,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fW5=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWq=new A.G(!0,B.aS,null,null,null,null,27,B.O,B.cR,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWx=new A.G(!0,L.jh,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWF=new A.G(!0,L.jh,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fX8=new A.C("Time:",null,B.hG,null,null,null,null,null,null,null,null,null)
D.fXu=new A.C("\ud83c\udfae",null,K.ad0,null,null,null,null,null,null,null,null,null)
D.fXv=new A.C("Themes",null,B.pp,null,null,null,null,null,null,null,null,null)
D.fY0=new A.C("\ud83c\udfb2",null,B.y9,null,null,null,null,null,null,null,null,null)
D.fY4=new A.C("Delete this game?",null,B.iV,null,null,null,null,null,null,null,null,null)
D.fYb=new A.C("Add Item",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fMt=new A.G(!0,B.a_,null,null,null,null,22,B.D,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYC=new A.C("Debt receipt",null,D.fMt,null,B.K,null,null,null,null,null,null,null)
D.aYQ=new A.G(!0,B.an,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYV=new A.C("Person who owes",null,D.aYQ,null,null,null,null,null,null,null,null,null)
D.fZV=new A.C("Notes",null,B.acQ,null,null,null,null,null,null,null,null,null)
D.h_o=new A.C("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fLn=new A.G(!0,B.c,null,null,null,null,11,B.D,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_q=new A.C("Share",null,D.fLn,null,null,null,null,null,null,null,null,null)
D.h0r=new A.C("Move your family trees",null,I.ad7,null,null,null,null,null,null,null,null,null)
D.h16=new A.C("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.h1K=new A.C("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.h27=new A.C("SAVE",null,D.LO,null,null,null,null,null,null,null,null,null)
D.h2L=new A.C("The round button is the right answer.",null,V.Bw,null,null,null,null,null,null,null,null,null)
D.h35=new A.C("Remove this book?",null,B.hh,null,null,null,null,null,null,null,null,null)
D.fSq=new A.G(!0,B.d_,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ec,null,null,null)
D.h3D=new A.C("Fireside Stories",null,D.fSq,null,null,null,null,null,null,null,null,null)
D.aZk=new A.C("Download",null,B.cf,null,null,null,null,null,null,null,null,null)
D.h4j=new A.C("What should the AI do?",null,B.dv,null,null,null,null,null,null,null,null,null)
D.fKZ=new A.G(!0,D.lR,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h4y=new A.C("REPORT CARD",null,D.fKZ,null,null,null,null,null,null,null,null,null)
D.h5l=new A.C("Calabash Catch",null,B.X9,null,null,null,null,null,null,null,null,null)
D.h5N=new A.C("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.h6e=new A.C("\ud83c\udfe1",null,B.Fy,null,null,null,null,null,null,null,null,null)
D.h6W=new A.C("Ribbon bookmark",null,B.jN,null,null,null,null,null,null,null,null,null)
D.fU3=new A.G(!0,B.b5,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h7q=new A.C("NGMY.ORG",null,D.fU3,null,B.K,null,null,null,null,null,null,null)
D.h8J=new A.C("Scan family tree QR",null,B.cL,null,null,null,null,null,null,null,null,null)
D.fQ6=new A.G(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h9w=new A.C("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fQ6,null,B.K,null,null,null,null,null,null,null)
D.haK=new A.C("Delete",null,B.WH,null,null,null,null,null,null,null,null,null)
D.haL=new A.C("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.haT=new A.C("Thumbnail",null,B.pp,null,null,null,null,null,null,null,null,null)
D.hbs=new A.C("Save the cover",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hbx=new A.C("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.BA,null,B.K,null,null,null,null,null,null,null)
D.hbV=new A.C("Your photos",null,B.pp,null,null,null,null,null,null,null,null,null)
D.hcb=new A.C("Create Project",null,B.cf,null,null,null,null,null,null,null,null,null)
D.hcy=new A.C("\u2b50 stars",null,B.Fz,null,null,null,null,null,null,null,null,null)
D.hcM=new A.C("Design your cover",null,B.ut,null,null,null,null,null,null,null,null,null)
D.hcS=new A.C("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.hcV=new A.C("PICTURE",null,N.wg,null,null,null,null,null,null,null,null,null)
D.hcX=new A.C("\ud83c\udfaf",null,D.X8,null,null,null,null,null,null,null,null,null)
D.hdj=new A.C("Paid",null,B.cf,null,null,null,null,null,null,null,null,null)
D.hdl=new A.C("You can undo it right after.",null,V.Bw,null,null,null,null,null,null,null,null,null)
D.hdU=new A.C("Print",null,B.we,null,null,null,null,null,null,null,null,null)
D.hej=new A.C("Amount owed",null,D.aYQ,null,null,null,null,null,null,null,null,null)
D.hez=new A.C("Got it",null,B.cf,null,null,null,null,null,null,null,null,null)
D.hfb=new A.C("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.hfe=new A.C("Add to budget",null,B.cf,null,null,null,null,null,null,null,null,null)
D.hfE=new A.C("Debtor signature",null,B.acQ,null,null,null,null,null,null,null,null,null)
D.hfP=new A.C("Change icon",null,B.acP,null,null,null,null,null,null,null,null,null)
D.hgD=new A.C("MADE BY THE SYSTEM, FROM YOUR TREE",null,U.uw,null,null,null,null,null,null,null,null,null)
D.hh4=new A.C("Family tree QR",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hha=new A.C("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.X7,null,null,null,null,null,null,null,null,null)
D.hhy=new A.C("Download",null,B.we,null,null,null,null,null,null,null,null,null)
D.hhz=new A.C("The person who planted this tree has not made a game yet.",null,Y.By,null,null,null,null,null,null,null,null,null)
D.hhD=new A.C("Change",null,B.pp,null,null,null,null,null,null,null,null,null)
D.hiu=new A.C("Clear all",null,B.cf,null,null,null,null,null,null,null,null,null)
D.hix=new A.C("WHAT SHOULD IT CHANGE?",null,N.wg,null,null,null,null,null,null,null,null,null)
D.hj5=new A.C("COLOUR",null,N.wg,null,null,null,null,null,null,null,null,null)
D.hjk=new A.C("Do it",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hjo=new A.C("Create Tree",null,B.cf,null,null,null,null,null,null,null,null,null)
D.hjy=new A.C("Give me another clue",null,D.LO,null,null,null,null,null,null,null,null,null)
D.hks=new A.C("Create Family Tree",null,B.fi,null,null,null,null,null,null,null,null,null)
D.hkC=new A.C("THE TEACHER EXPLAINS THESE",null,U.uw,null,null,null,null,null,null,null,null,null)
D.fGd=new A.G(!0,E.kF,null,null,null,null,null,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hkI=new A.C("Write the first page myself",null,D.fGd,null,null,null,null,null,null,null,null,null)
D.hlg=new A.C("Use this header",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hln=new A.C("Create Project",null,E.aYw,null,null,null,null,null,null,null,null,null)
D.hN1=new C.adv(1,"header")
D.aef=new C.adv(2,"projects")
D.hN2=new C.adv(3,"cashier")
D.aeg=new C.adv(4,"familyTree")
D.i1I=new C.cJa(0,"start")
D.i1J=new C.cJb(0,"start")
D.hNf=new C.a_o(null)
D.hOg=new C.a_U(null)
D.dNM=new A.bn(B.ij,[],A.as("bn<n,GV>"))
D.dub=w([],x.dE)
D.duc=w([],x.M)
D.hOV=new C.bix(D.dNM,D.dub,D.duc,0,0,null,null)
D.b2Q=new C.a0K(0,"intro")
D.b2R=new C.a0K(1,"countdown")
D.aet=new C.a0K(2,"ask")
D.Y4=new C.a0K(3,"reveal")
D.b2S=new C.a0K(4,"end")
D.hRQ=new C.tq(F.H9,D.lS,B.d_,F.mj,5,!1,!1,!1,0,null)
D.hRS=new C.tq(F.H9,B.et,B.d_,B.bO,2,!0,!0,!1,2,B.d_)
D.hRU=new C.tq(B.qR,B.cZ,B.d_,F.mj,2,!0,!1,!1,2,B.as)
D.hRV=new C.tq(F.H9,B.dW,B.d_,F.mj,5,!1,!1,!1,1,null)
D.hRY=new C.tq(F.a0w,D.akJ,B.d_,F.mj,4,!0,!1,!0,0,null)
D.b2V=new C.tq(F.a0w,B.dZ,B.d_,F.mj,3,!0,!1,!0,2,null)
D.b2W=new C.tq(F.tp,D.lS,B.c,F.mj,0,!1,!1,!0,0,null)
D.b2X=new C.tq(B.qR,B.az,B.d_,B.bO,2,!0,!0,!1,2,B.dZ)
D.b2Y=new C.tq(B.qR,G.nH,B.iu,F.mj,5,!1,!1,!0,3,null)
D.hS1=new C.tq(B.qR,B.dZ,B.d_,F.mj,0,!0,!1,!1,0,B.az)
D.b2Z=new C.tq(F.H9,B.et,B.d_,B.bO,1,!1,!0,!1,1,null)
D.b3_=new C.tq(F.GG,B.as,B.az,F.mj,4,!0,!1,!0,2,null)
D.hS3=new C.tq(F.tp,B.as,B.et,F.mj,3,!0,!1,!1,0,null)
D.hS5=new C.tq(B.qR,B.dW,B.d_,B.bO,1,!1,!0,!1,1,null)
D.hS6=new C.tq(F.GG,D.ajK,B.c,F.mj,5,!1,!1,!0,0,null)
D.hSL=new C.a1i(null)
D.i1R=new C.agX(0,"still")
D.Yr=new C.agX(1,"walk")
D.b3J=new C.agX(2,"pound")
D.b3K=new C.agX(3,"drum")
D.hYl=new C.a2z(0,"greet")
D.b3L=new C.a2z(1,"teach")
D.aeN=new C.a2z(2,"ask")
D.hYm=new C.a2z(3,"feedback")
D.b3M=new C.a2z(4,"end")
D.Yy=new C.a2S(0,"intro")
D.Yz=new C.a2S(1,"asking")
D.BQ=new C.a2S(2,"reacting")
D.aeY=new C.a2S(3,"driving")
D.aeZ=new C.a2S(4,"arrived")
D.af6=new C.aMU(0,"projects")
D.b4b=new C.aMU(1,"cashier")
D.i_r=new C.aMU(2,"familyTree")})()};
(a=>{a["EhWSFEbXyHGOIkq9s5+BDYNL/yg="]=a.current})($__dart_deferred_initializers__);